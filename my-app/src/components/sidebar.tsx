import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type Options = {
  topic: string;
  difficulty: string;
};

type SidebarProps = {
  tags: string[];
};

function getLink(difficulty: String, topic: string) {
  return (
    "/problems" +
    `${difficulty ? "/" + difficulty : "/all"}${topic ? "/" + topic : ""}`
  );
}

const Sidebar: React.FC<SidebarProps> = ({ tags }) => {
  const { register, handleSubmit, reset, watch } = useForm<Options>();
  const onSubmit: SubmitHandler<Options> = (data) => {
    // Do nothing
  };

  const difficulty = watch("difficulty");
  const topic = watch("topic");

  return (
    <aside className="mb-8 md:order-1 md:mb-0 md:ml-12 md:w-64 md:shrink-0 lg:ml-20 lg:w-72">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative rounded-xl border border-secondary bg-neutral p-5">
          <div className="absolute right-5 top-5 leading-none">
            <button
              className="link text-neutral-content"
              type="reset"
              onClick={() => reset()}
            >
              Clear
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            {/* Topics */}
            <div>
              <div className="mb-3 text-sm font-semibold text-neutral-content">
                Topics
              </div>
              <ul className="space-y-2">
                {tags.map((tag, i) => (
                  <li key={i}>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="radio-secondary radio"
                        value={tag.toLowerCase().split(" ").join("-")}
                        {...register("topic")}
                      />
                      <span className="ml-2 text-sm text-neutral-content/70">
                        {tag}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Difficulty */}
            <div>
              <div className="mb-3 text-sm font-semibold text-neutral-content">
                Difficulty
              </div>
              <ul className="space-y-2">
                {["Easy", "Medium", "Hard"].map((difficulty, i) => (
                  <li key={i}>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="radio-secondary radio"
                        value={difficulty.toLowerCase()}
                        {...register("difficulty")}
                      />
                      <span className="ml-2 text-sm text-neutral-content/70">
                        {difficulty}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Confirm */}
            <div className="col-span-2 md:col-span-1">
              <a
                className="btn btn-primary btn-block"
                href={getLink(difficulty, topic)}
              >
                Discover
              </a>
            </div>
          </div>
        </div>
      </form>
    </aside>
  );
};
export default Sidebar;
