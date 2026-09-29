import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { NextResponse } from "next/server"
import { decodeEmail, decodePhoneNumber } from "@/utils/string"
import sharp from "sharp"
import VCard from "vcard-creator"

import { USER } from "@/features/portfolio/data/user"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function GET() {
  const card = new VCard()

  // Contact fields are optional: an unpublished one is left out of the card
  // rather than emitted empty.
  card.addName(USER.lastName, USER.firstName)

  if (USER.website) {
    card.addURL(USER.website)
  }

  if (USER.phoneNumberB64) {
    card.addPhoneNumber(decodePhoneNumber(USER.phoneNumberB64))
  }

  if (USER.address) {
    card.addAddress(USER.address)
  }

  if (USER.emailB64) {
    card.addEmail(decodeEmail(USER.emailB64))
  }

  const photo = await getVCardPhoto(USER.avatar)
  if (photo) {
    card.addPhoto(photo.image, photo.mime)
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0]
    card.addCompany(company.company).addJobtitle(company.title)
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  })
}

async function getVCardPhoto(url: string) {
  try {
    const buffer = await readImage(url)

    if (!buffer || buffer.length === 0) {
      return null
    }

    const jpegBuffer = await convertImageToJpeg(buffer)

    return {
      image: jpegBuffer.toString("base64"),
      mime: "jpeg",
    }
  } catch {
    return null
  }
}

/**
 * The avatar is served from `public/`, so at build time there is no origin to
 * fetch it from — read it off disk instead. Absolute URLs still go over HTTP.
 */
async function readImage(url: string): Promise<Buffer | null> {
  if (url.startsWith("/")) {
    return readFile(join(process.cwd(), "public", url))
  }

  const res = await fetch(url)

  if (!res.ok) {
    return null
  }

  const contentType = res.headers.get("Content-Type") || ""
  if (!contentType.startsWith("image/")) {
    return null
  }

  return Buffer.from(await res.arrayBuffer())
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
  try {
    const jpegBuffer = await sharp(imageBuffer)
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
      })
      .toBuffer()

    return jpegBuffer
  } catch (error) {
    console.error("Error converting image to JPEG:", error)
    throw error
  }
}
