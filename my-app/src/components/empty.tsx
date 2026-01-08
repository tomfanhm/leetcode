import React from "react";

const Empty: React.FC = () => {
  return (
    <div className="grid place-items-center py-8 md:py-16">
      <div className="h-72 w-72">
        <img
          src="/images/astro.png"
          alt="Astro"
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        No Results Found
      </h1>
      <p className="mt-6 text-base leading-7 text-base-content/70">
        Sorry, but we couldn't find any results that match your search criteria.
      </p>
    </div>
  );
};
export default Empty;
