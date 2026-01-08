import React from "react";

const BackgroundImage: React.FC = () => {
  const polygon = Array.from({ length: 15 }, () => [
    Math.random() * 100,
    Math.random() * 100,
  ])
    .map((arr) => `${arr[0]}% ${arr[1]}%`)
    .join(", ");

  return (
    <div
      className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[4/3] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#12c2e9] to-[#f64f59] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath: `polygon(${polygon})`,
        }}
      ></div>
    </div>
  );
};
export default BackgroundImage;
