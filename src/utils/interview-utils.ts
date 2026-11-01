import { getCollection, type CollectionEntry } from "astro:content";
import { interviewPrograms, type InterviewProgram } from "@/config/jwPrograms";
import { getSortedPosts } from "@/utils/content-utils";
import { url } from "@/utils/url-utils";

export const getProgramUrl = (slug: string): string => url(`/programs/${slug}/`);
export const getPersonUrl = (person: CollectionEntry<"people">): string => url(`/programs/${person.id}/`);

export async function getInterviewPeople(): Promise<CollectionEntry<"people">[]> {
  return (await getCollection("people", ({ data }) => !data.draft)).sort((a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name, "zh-CN"));
}

export async function getPersonPosts(person: CollectionEntry<"people">): Promise<CollectionEntry<"posts">[]> {
  return (await getSortedPosts()).filter(post => !post.data.draft && post.data.category === person.data.program && post.data.series === person.data.name);
}

export type ProgramCard = InterviewProgram & { url: string; people: CollectionEntry<"people">[]; posts: CollectionEntry<"posts">[] };
export async function getProgramCards(): Promise<ProgramCard[]> {
  const people = await getInterviewPeople();
  const posts = (await getSortedPosts()).filter(post => !post.data.draft);
  return interviewPrograms.map(program => ({
    ...program,
    url: getProgramUrl(program.slug),
    people: people.filter(person => person.data.program === program.name),
    posts: posts.filter(post => post.data.category === program.name),
  }));
}

export function getKnowledgePoints(body = ""): { title: string; description: string }[] {
  const section = body.match(/## 技术与商业知识\s*\n([\s\S]*?)(?=\n## |$)/)?.[1] || "";
  const plain = (s: string): string => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "").replace(/\s+/g, " ").trim();
  return [...section.matchAll(/^\d+\.\s+\*\*([^*]+)\*\*([^]*?)(?=^\d+\.\s+\*\*|$(?![\s\S]))/gm)].map(match => ({
    title: plain(match[1]).replace(/[：:]$/, ""),
    description: plain(match[2]).replace(/^[:：]?\s*概念[:：]\s*/, ""),
  }));
}
