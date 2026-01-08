import React from "react";
import type { Article } from "../type/type";

type ItemProps = {
  article: Article;
  slug: string;
};

const Item: React.FC<ItemProps> = ({ article, slug }) => {
  return (
    <div className="border-b border-neutral/70">
      <div className="group px-4 py-6">
        <div className="items-center space-y-3 sm:flex sm:space-x-5 sm:space-y-0">
          {/* Image */}
          <div className="shrink-0">
            <div className="h-14 w-14 overflow-hidden rounded-full">
              <img
                src={`/images/${article.difficulty.toLowerCase()}.png`}
                alt={article.difficulty}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="sr-only">{article.difficulty}</span>
          </div>
          {/* Content */}
          <div className="grow items-center justify-between space-y-5 lg:flex lg:space-x-2 lg:space-y-0">
            <div>
              {/* No */}
              <div className="mb-1 text-sm font-semibold text-base-content">
                {`LeetCode No. ${article.id}`}
              </div>
              {/* Title */}
              <div className="mb-2">
                <a
                  className="text-lg font-bold text-base-content"
                  href={`/articles/${slug}`}
                >
                  {article.title}
                </a>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, i) => (
                  <div key={i} className="badge badge-secondary">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Side */}
            <div className="flex min-w-[120px] items-center space-x-3 lg:justify-end lg:space-x-0">
              <div className="lg:hidden group-hover:lg:block">
                <a
                  className="btn btn-primary btn-sm"
                  href={`/articles/${slug}`}
                >
                  View Now <span className="ml-1 tracking-normal">-&gt;</span>
                </a>
              </div>
              <div className="text-sm italic text-base-content/70 group-hover:lg:hidden">
                {article.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
