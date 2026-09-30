"use client"

import { useId, useState } from "react"
import { copyToClipboardWithEvent } from "@/utils/copy"
import { decodeEmail } from "@/utils/string"
import { useTiks } from "@rexa-developer/tiks/react"
import { MailIcon } from "lucide-react"
import { useHotkeys } from "react-hotkeys-hook"

import { trackEvent } from "@/lib/events"
import { toast } from "@/components/ui/toast"
import { CopyButton } from "@/components/copy-button"
import {
  SlideToUnlock,
  SlideToUnlockHandle,
  SlideToUnlockText,
  SlideToUnlockTrack,
} from "@/registry/components/slide-to-unlock"

import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item"
import { RevealEncodedTextScript } from "./reveal-encoded-text"

type EmailItemProps = {
  emailB64: string
}

export function EmailItem({ emailB64 }: EmailItemProps) {
  const id = useId()
  const [revealed, setRevealed] = useState(false)
  const emailDecoded = decodeEmail(emailB64)

  const { success } = useTiks()

  useHotkeys("shift+e", () => {
    copyToClipboardWithEvent(emailDecoded, {
      name: "copy_email",
      properties: {
        method: "keyboard",
        key: "shift+e",
      },
    })
    success()
    toast.add({ type: "success", title: "Email copied" })
  })

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      {revealed ? (
        <>
          <IntroItemContent className="flex">
            <a
              id={id}
              className="link"
              href={`mailto:${emailDecoded}`}
              suppressHydrationWarning
            >
              {emailDecoded}
            </a>
          </IntroItemContent>

          <div className="-translate-x-3 translate-y-0.5 opacity-0 transition-opacity ease-out group-hover:opacity-100 group-has-focus-visible:opacity-100 pointer-coarse:opacity-100">
            <CopyButton
              className="rounded-md border-none text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
              variant="ghost"
              size="icon-xs"
              text={() => emailDecoded}
              onCopySuccess={() => {
                trackEvent({
                  name: "copy_email",
                  properties: {
                    method: "button",
                  },
                })
              }}
            />
          </div>

          <RevealEncodedTextScript id={id} textB64={emailB64} />
        </>
      ) : (
        // Plain div: SlideToUnlock's nested divs are invalid inside the <p>
        // that IntroItemContent renders (breaks hydration).
        <div className="flex flex-1">
          <SlideToUnlock
            className="w-full max-w-56"
            onUnlock={() => {
              setRevealed(true)
              trackEvent({
                name: "reveal_email",
                properties: {
                  method: "slide",
                },
              })
            }}
          >
            <SlideToUnlockTrack className="h-9 rounded-lg border border-dashed border-line bg-background">
              <SlideToUnlockText className="pl-1 text-sm font-normal text-muted-foreground select-none">
                <span>滑动显示邮箱</span>
              </SlideToUnlockText>
              <SlideToUnlockHandle className="h-9 rounded-lg" />
            </SlideToUnlockTrack>
          </SlideToUnlock>
        </div>
      )}
    </IntroItem>
  )
}
