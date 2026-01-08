import React from "react";
import type { Article } from "../type/type";
import Empty from "./empty";
import Item from "./item";

type ListProps = {
  articles: { slug: string; data: Article }[];
  header: string;
};

const List: React.FC<ListProps> = ({ articles, header }) => {
  if (articles.length === 0) return <Empty />;
  return (
    <div className="pb-8 md:pb-16">
      <h2 className="font-inter mb-10 text-3xl font-bold">{header}</h2>
      <div className="flex flex-col">
        {articles.map((article, i) => (
          <Item article={article.data} slug={article.slug} key={i} />
        ))}
      </div>
    </div>
  );
};
export default List;
