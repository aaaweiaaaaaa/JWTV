# 网页写作与发布

正式网站：https://weige.cloud
管理入口：https://weige.cloud/admin/
编辑器：https://app.pagescms.org/

## 写一篇访谈

1. 使用有 JWTV 仓库写入权限的 GitHub 账号登录 Pages CMS，选择 aaaweiaaaaaa/JWTV、main 分支。
2. 在“访谈笔记”中新建文章，填写标题、发布日期、采访节目、被采访人物、标签和简介。被采访人物必须与对应人物资料的姓名一致。
3. 在富文本正文中直接写内容；封面和正文图片通过编辑器上传。
4. 未完成时保持“保存为草稿”开启。写完后关闭草稿并保存。
5. 保存会提交 GitHub，Cloudflare Workers 的 jwtv 项目自动构建发布。构建通过后刷新网站查看；构建失败时旧版继续提供服务。

## 人物、头像和音乐

- 新人物先在对应节目的人物资料栏目创建，再写访谈文章。人物经历和采访概述在人物资料正文中编辑。
- 头像、Logo、横幅以及关于页面都有对应编辑栏目。
- 上传有使用权的 MP3 等音频到音乐栏目并加入歌单，可以使用原生音乐播放器；YouTube 视频在国内网络可能无法加载，有声自动播放受浏览器限制。
- 登录使用 GitHub，不存在另设的邮箱密码账号。不要将密码或密钥填写到文章和配置中。

## 部署现状（2026-11-07）

weige.cloud 已激活，旧 Sites 自定义域名绑定已解除，Cloudflare 路由 weige.cloud/* 指向 jwtv Worker。不是 Pages 项目，不要把 wrangler.jsonc 改回 pages_build_output_dir。

主页、关于、节目、笔记、文章、头像及 Pagefind 脚本已验证 HTTP 200。实际 CMS 登录后保存文章的 UI 流程仍需站长确认；国内不使用代理的可达性需要实际网络测试。留言原本连接 Windows 本机临时隧道，当前临时地址失效，不能视为永久在线。
