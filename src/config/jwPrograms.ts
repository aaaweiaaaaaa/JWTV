// 节目沿用文章原生 category，人物沿用 series；正文仍由 Markdown 维护。
export type InterviewProgram = { slug: string; name: string; description: string; image: string };
export const interviewPrograms: InterviewProgram[] = [
  { slug: "luoyonghao", name: "罗永浩的十字路口", description: "产品、创业与商业选择，从人物经历读懂决策。", image: "/assets/interviews/luoyonghao-li-xiang.jpg" },
  { slug: "xiaojun", name: "张小珺的商业访谈", description: "记录科技创业、人工智能与行业变迁中的思考。", image: "/assets/interviews/xiaojun-yang-zhilin.jpg" },
  { slug: "whynottv", name: "whynotTV", description: "从研究、开源到创业，理解技术与人的成长。", image: "/assets/interviews/whynottv-hu-yuanming.jpg" },
  { slug: "sunxue", name: "孙学", description: "保留节目入口，等待补充人物与访谈资料。", image: "/assets/jw/landscape.svg" },
];

export const featuredTags: string[] = ["博客", "知识", "经历", "成长", "AI", "时代", "机遇"];
