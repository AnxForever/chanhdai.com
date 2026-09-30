import { readFileSync, readdirSync, statSync } from "fs"
import { join } from "path"

const dir = ".next/static/chunks"
const signatures = [
  ["motion/framer-motion(动画)", /framer-motion|"motion"|MotionConfig|AnimatePresence/],
  ["react-dom(框架)", /react-dom|react-reconciler|scheduler/],
  ["next 框架/路由", /next\/dist|__next|app-router/],
  ["cmdk(命令菜单)", /\[cmdk|cmdk/],
  ["jotai(状态)", /jotai/],
  ["nuqs(URL参数)", /nuqs/],
  ["openpanel(统计)", /openpanel/i],
  ["bprogress(进度条)", /bprogress/i],
  ["number-flow(数字动画)", /number-flow/i],
  ["react-hook-form/zod(表单)", /react-hook-form|"zod"/],
  ["marquee(跑马灯)", /marquee/i],
  ["wheel-picker", /wheel-picker/i],
  ["image-zoom", /medium-image-zoom/i],
  ["音效/触感(soundcn/haptics)", /soundcn|haptic/i],
  ["base-ui/radix(组件底座)", /base-ui|radix-ui/i],
  ["图标库(lucide/tabler/hugeicons)", /lucide|tabler|hugeicons/i],
  ["date-fns", /date-fns/],
  ["fumadocs(文档)", /fumadocs/],
  ["shiki(代码高亮)", /shiki|shiki-/],
  ["p5(画布)", /p5\.js|"p5"/],
  ["libphonenumber(电话)", /libphonenumber/],
  ["vcard", /vcard/i],
  ["d3/visx(图表)", /d3-|visx/],
]

const rows = []
for (const f of readdirSync(dir)) {
  if (!f.endsWith(".js")) continue
  const p = join(dir, f)
  const size = statSync(p).size
  if (size < 15 * 1024) continue
  const content = readFileSync(p, "utf8")
  const hits = signatures.filter(([, re]) => re.test(content)).map(([n]) => n)
  rows.push({ file: f, size, hits })
}
rows.sort((a, b) => b.size - a.size)
const total = rows.reduce((a, r) => a + r.size, 0)
console.log(`chunks ≥15KB 共 ${rows.length} 个, 解压总计 ${(total / 1024).toFixed(0)} KB\n`)
for (const r of rows.slice(0, 14)) {
  console.log(`${(r.size / 1024).toFixed(0).padStart(5)} KB  ${r.file}`)
  if (r.hits.length) console.log(`        └─ ${r.hits.join(" | ")}`)
}
