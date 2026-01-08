import React from "react";
import { siteConfig } from "../config/site";
import type { Article } from "../type/type";

type CardProps = {
  data: {
    id: number;
    title: string;
    description: string;
    date: string;
    tags: string[];
    difficulty: "Easy" | "Medium" | "Hard";
  };
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <aside className="mb-8 self-start md:sticky md:top-10 md:order-1 md:mb-0 md:ml-12 md:w-64 md:shrink-0 lg:ml-20 lg:w-72">
      <div>
        <div className="relative rounded-xl border border-secondary bg-neutral p-5">
          <div className="mb-6 text-center">
            <div className="mb-2 inline-flex h-20 w-20 overflow-hidden rounded-full">
              <img
                className="h-full w-full object-cover"
                src={`/images/${data.difficulty.toLowerCase()}.png`}
                alt={data.difficulty}
              />
            </div>
            <h2 className="text-lg font-bold text-neutral-content">
              {data.difficulty}
            </h2>
          </div>
          <div className="mb-5 flex justify-center md:justify-start">
            <ul className="inline-flex flex-col space-y-2">
              <li className="flex items-center text-neutral-content">
                <svg
                  className="mr-3 h-4 w-4 shrink-0 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                </svg>
                <span className="text-sm">{data.date}</span>
              </li>
              <li className="flex items-center text-neutral-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="mr-3 h-4 w-4 shrink-0 fill-current"
                >
                  {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                </svg>
                <span className="text-sm">{data.tags.join(", ")}</span>
              </li>
            </ul>
          </div>
          {/* Link */}
          <div className="mx-auto mb-5 max-w-xs">
            <a
              className="group btn btn-info btn-block rounded-full shadow-sm"
              href={siteConfig.links.github}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="mr-1 h-6 w-6 fill-current"
              >
                {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
              Edit Now
            </a>
          </div>
          {/* Link */}
          <div className="text-center">
            <a
              className="link link-info"
              target="_blank"
              href={`https://leetcode.com/problems/${data.title.toLowerCase().split(" ").join("-")}`}
            >
              Visit LeetCode
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Card;
