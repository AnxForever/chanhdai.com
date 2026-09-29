/**
 * Monogram: "AX", drawn on the same 32-unit cell grid the rest of the brand
 * geometry uses. Regenerate the path by editing the glyph matrices, not by
 * hand — every run is a whole number of cells.
 */
export function AnxMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 0h96v32h-96zM32 32h160v32h-160zM0 64h64v32h-64zM160 64h64v32h-64zM0 96h64v32h-64zM160 96h64v32h-64zM0 128h224v32h-224zM0 160h224v32h-224zM0 192h64v32h-64zM160 192h64v32h-64zM0 224h64v32h-64zM160 224h64v32h-64zM288 0h64v32h-64zM448 0h64v32h-64zM288 32h96v32h-96zM416 32h96v32h-96zM320 64h160v32h-160zM352 96h96v32h-96zM352 128h96v32h-96zM320 160h160v32h-160zM288 192h96v32h-96zM416 192h96v32h-96zM288 224h64v32h-64zM448 224h64v32h-64z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="currentColor" d="M64 0h96v32h-96zM32 32h160v32h-160zM0 64h64v32h-64zM160 64h64v32h-64zM0 96h64v32h-64zM160 96h64v32h-64zM0 128h224v32h-224zM0 160h224v32h-224zM0 192h64v32h-64zM160 192h64v32h-64zM0 224h64v32h-64zM160 224h64v32h-64zM288 0h64v32h-64zM448 0h64v32h-64zM288 32h96v32h-96zM416 32h96v32h-96zM320 64h160v32h-160zM352 96h96v32h-96zM352 128h96v32h-96zM320 160h160v32h-160zM288 192h96v32h-96zM416 192h96v32h-96zM288 224h64v32h-64zM448 224h64v32h-64z"/></svg>`
}
