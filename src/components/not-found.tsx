import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnxMarkSolid } from "@/features/portfolio/components/anx-mark-solid"

export function NotFound() {
  return (
    <div className="grid min-h-svh place-items-center py-6">
      <div className="flex w-full max-w-lg flex-col items-center gap-10 px-6">
        <AnxMarkSolid />

        <div className="flex flex-col items-center gap-6">
          <h1 className="font-mono text-8xl font-medium">404</h1>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <Link href="/">
                Go to Home
                <ArrowRightIcon />
              </Link>
            }
          />
        </div>
      </div>
    </div>
  )
}
