import { getCollection } from "astro:content";
import type { ArticlesArray } from "../type/type";

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

// Function to convert string to kebab case
export function convertToKebabCase(input: string): string {
  return input.toLowerCase().replace(/\s+/g, "-");
}

// Function to convert kebab case to title case
export function convertToTitleCase(input: string): string {
  const words = input.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  return capitalizedWords.join(" ");
}

/**
 * This function formats a given date string into a more readable format according to the "en-US" locale standards, using the UTC timezone.
 */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

export function relatedTags(arr1: string[], arr2: string[]): boolean {
  const map: Record<string, boolean> = {};
  arr1.forEach((el) => (map[el] = true));
  for (const tag of arr2) {
    if (map[tag]) return true;
  }
  return false;
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getArticles(): Promise<ArticlesArray> {
  const articles = await getCollection("articles");
  return articles
    .map((el) => ({
      slug: el.slug,
      data: {
        ...el.data,
        href: "/articles/" + el.slug,
      },
    }))
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    );
}

export function getTags(articles: ArticlesArray): string[] {
  return articles
    .flatMap((article) => article.data.tags)
    .filter((val, i, arr) => arr.indexOf(val) === i)
    .sort((a, b) => a.localeCompare(b));
}

export function sortArticlesByDate(articles: ArticlesArray) {
  return articles.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );
}

export function filterArticles(
  articles: ArticlesArray,
  options: {
    difficulty: "easy" | "medium" | "hard" | "all";
    topic: string | null;
  },
) {
  const { difficulty, topic } = options;
  const filterDifficulty =
    difficulty === "all"
      ? articles
      : articles.filter(
          (article) =>
            article.data.difficulty === capitalizeFirstLetter(difficulty),
        );

  if (!topic) return filterDifficulty;

  return filterDifficulty.filter((article) =>
    article.data.tags.includes(convertToTitleCase(topic)),
  );
}
