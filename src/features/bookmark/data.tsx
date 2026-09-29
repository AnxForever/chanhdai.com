import { BookmarkCategory, type Bookmark } from "./types"

/**
 * Ported from the previous site's bookmark list. The old list was grouped by
 * 个人网站 / 设计灵感 / 组件与动效 / 实用工具; only the component-and-motion
 * group maps onto a category here, so the rest are filed under Reference.
 * Collection dates were never recorded, so `bookmarkedAt` is left off.
 */
export const BOOKMARKS: Bookmark[] = [
  {
    title: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "可以直接带进自己项目的基础交互组件。",
  },
  {
    title: "Cult UI",
    url: "https://cult-ui.com/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "纹理卡片、切换动效，值得细看的交互细节。",
  },
  {
    title: "beUI",
    url: "https://beui.dev/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "有弹性、有反馈的 React 动效组件。",
  },
  {
    title: "Libraries.dev",
    url: "https://libraries.dev/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "光效、图像和小控件的独立组件集合。",
  },
  {
    title: "Remotion",
    url: "https://www.remotion.dev/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "用 React 的方式，编排一支视频。",
  },
  {
    title: "Animal Island UI",
    url: "https://guokaigdg.github.io/animal-island-ui/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "轻松、柔和、带一点可爱气质的组件。",
  },
  {
    title: "Its Hover",
    url: "https://itshover.com/",
    category: BookmarkCategory.UI_LIBRARY,
    why: "鼠标经过时，图标也会给你一点回应。",
  },
  {
    title: "60fps",
    url: "https://60fps.design/",
    category: BookmarkCategory.REFERENCE,
    why: "好的微交互，值得放慢了看。",
  },
  {
    title: "GSAP Showcase",
    url: "https://gsap.com/showcase/",
    category: BookmarkCategory.REFERENCE,
    why: "看看动效如何让网页变得生动。",
  },
  {
    title: "Morphous",
    url: "https://morphos.ameyanagi.com/gallery",
    category: BookmarkCategory.REFERENCE,
    why: "从自然形态里找到新的视觉灵感。",
  },
  {
    title: "Aave Design",
    url: "https://aave.com/design/building-glass-for-the-web",
    category: BookmarkCategory.REFERENCE,
    why: "玻璃质感背后的光线、层次与实现。",
  },
  {
    title: "Apple Design",
    url: "https://developer.apple.com/design/",
    category: BookmarkCategory.REFERENCE,
    why: "清晰的层级，细致的交互和设计原则。",
  },
  {
    title: "UI Skills",
    url: "https://www.ui-skills.com/",
    category: BookmarkCategory.REFERENCE,
    why: "把设计中的讲究带进前端实现。",
  },
  {
    title: "yui.",
    url: "https://yui540.com/motions",
    category: BookmarkCategory.REFERENCE,
    why: "二次元气质，和让人会心一笑的动态设计。",
  },
  {
    title: "Aman Kamboj",
    url: "https://www.amank.fun/",
    category: BookmarkCategory.REFERENCE,
    why: "一个有自己节奏和个性的个人空间。",
  },
]
