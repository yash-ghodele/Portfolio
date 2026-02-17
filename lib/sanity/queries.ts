import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  subtitle,
  "image": image.asset->url,
  iconName,
  description,
  stats,
  tech,
  demoLink,
  codeLink,
  color,
  publishedAt
}`;

export const eventsQuery = groq`*[_type == "event"] | order(date desc) {
  title,
  "slug": slug.current,
  subtitle,
  role,
  date,
  location,
  attendees,
  summary,
  "image": image.asset->url,
  metrics,
  skills,
  verified
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  subtitle,
  "image": image.asset->url,
  iconName,
  description,
  stats,
  tech,
  demoLink,
  codeLink,
  color,
  publishedAt,
  content
}`;

export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  "image": image.asset->url
}`;
