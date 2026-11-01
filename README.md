# JW的播客整理

记录商业、科技与人物访谈中的知识、观点和个人思考。

基于完整的 [Firefly](https://github.com/CuteLeaf/Firefly) 原主题二次开发，使用 Astro、Tailwind CSS、TypeScript、Markdown / MDX、Pagefind、Swup、pnpm，以及主题原有的 Svelte 组件。无数据库、独立后端或管理后台。

## 本地使用

需要 Node.js ≥ 22.23（建议 Node 24）和 pnpm 11。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

打开终端显示的本地地址（默认 `http://localhost:4321`）。完整搜索需要构建后的 Pagefind 索引，验收搜索请使用：

```sh
pnpm check
pnpm type-check
pnpm build
pnpm preview
```

`dist/` 是可部署的静态网站。Sites 公网地址配置为 https://jw-podcast-notes.heartyshore16384.chatgpt.site 。域名变更时，请更新 `src/config/siteConfig.ts` 的 `site_url` 并重新构建。日常写作参见 [写作指南](./写作指南.md)。本地保存不会自动更新公网，需重新发布 Sites 版本。

## 添加采访节目、人物和访谈文章

现有阅读层级：`采访节目 /categories/ → 节目 /programs/节目/ → 人物 /programs/节目/人物/ → 完整访谈 /posts/文章/ → 读者心得评论`。

- 文章的原生 `category` 表示节目，原生 `series` 表示被采访人物，`tags` 表示内容主题。
- 人物资料保存为 `src/content/people/节目代号/人物文件名.md`，使用 Astro Markdown 内容集合。人物页正文写“人物经历”和“采访概述”。
- 同一个节目、同一个人物的多篇访谈会自动聚合；对应文章的 category/series 必须与人物资料的 program/name 完全相同。
- “访谈笔记”导航下是按节目分组的知识点，自动从各文章的 `## 技术与商业知识` 提取编号加粗词条；不需要建立另一套数据库。
- “最新动态”按文章 updated（没有则 published）排序，列出最近五次内容更新。修改正文时同步填写 updated，不会把每次网站构建当成内容更新。
- 七个主题标签为：博客、知识、经历、成长、AI、时代、机遇。当前九篇资料按内容使用这些原生标签，点击后复用归档筛选。

详细步骤及可复制模板见 [分层内容维护指南](./分层内容维护指南.md)。原有四篇占位文章移到 `templates/previous-examples/`，不再公开或进入索引。孙学保留空节目入口，等待真实人物资料。新增人物与访谈不需要修改数据库。

## 维护入口

| 内容 | 文件 |
| --- | --- |
| 网站名称、简介、域名、配色和文章布局 | `src/config/siteConfig.ts` |
| 导航入口（含留言） | `src/config/navBarConfig.ts` |
| JW 头像、个人简介、RSS | `src/config/profileConfig.ts` |
| 横幅、打字机、水波纹和导航透明度 | `src/config/backgroundWallpaper.ts` |
| 原生侧边栏与文章目录 | `src/config/sidebarConfig.ts` |
| 公告 | `src/config/announcementConfig.ts` |
| 关于 | `src/content/spec/about.md` |
| 原创 SVG 图片 | `public/assets/jw/` |

动态、项目、相册、书签、追番、友链及打赏入口已关闭。留言页及音乐侧边栏已启用；留言通过临时 HTTPS 隧道连接站长 Windows 电脑上的 Waline + MySQL，电脑及服务需持续运行，隧道重启会换地址，目前仅供测试。音乐歌单等待添加。原生搜索、标签、归档、目录、主题切换、移动导航、文章动画与沉浸阅读保留。个人头像、简介、音乐及留言接入方法见 [留言与侧边栏设置](./留言与侧边栏设置.md)。

## 参考与改动范围

已读取参考站 [tsymq.top](https://tsymq.top/) 的首页 HTML，确认其使用 Firefly / Astro，蓝色主题 hue 215、100rem 页面宽度、65vh 首页横幅、双侧栏和列表卡片；导航毛玻璃模糊度为 5px。本站复用这些布局参数和 Firefly 自带的动画、排版与阅读组件，替换站点身份、导航和文章内容。当前上游的非首页横幅高度与参考站存在版本差异，保留上游实现以便升级。未复制参考站私人文章、头像或图片，原创 SVG 不依赖远程图片服务。

本机 GitHub Git 连接失败，因此从 GitHub 官方 `codeload` 下载 `master` 源码压缩包（2026-10-25，Firefly 6.16.8），没有伪造 Git 克隆历史。原版中文 README 保存在 `docs/README.upstream.zh-CN.md`。主要修改集中在原生配置和内容，另增加复用原组件的 `/notes/` 列表入口、中文分类文案，并修复字体禁用时 `FontSetup.astro` 的类型断言。

浏览器自动化无法可靠识别当前网址，视觉和交互截图验收未完成；请以项目的 `VERIFICATION.md` 查看实际执行结果。

## 许可证

保留完整 `LICENSE` 与页脚的 Powered by Astro & Firefly。主题代码采用 MIT：Copyright (c) 2024 saicaca；Copyright (c) 2025 CuteLeaf。本站笔记的授权信息由原生 `src/config/licenseConfig.ts` 管理，第三方访谈原始内容的权利仍归其权利人。

