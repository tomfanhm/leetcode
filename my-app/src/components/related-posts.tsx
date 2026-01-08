import React from "react";
import type { Article } from "../type/type";
import Item from "./item";

type RelatedPostsProps = {
  articles: { slug: string; data: Article }[];
};

const RelatedPosts: React.FC<RelatedPostsProps> = ({ articles }) => {
  if (articles.length < 1) return null;
  return (
    <div className="mb-8">
      <h4 className="font-inter mb-8 text-2xl font-bold">Related Posts</h4>
      <div className="flex flex-col border-t border-neutral/70">
        {articles.map((el, i) => (
          <Item slug={el.slug} article={el.data} key={i} />
        ))}
      </div>
    </div>
  );
};
export default RelatedPosts;
