"use client";
import { useState } from "react";

type tableInfo = {
  id: string;
  name: string;
  author: string;
  year: string;
  lang: string;
  editorial: string;
  price: string;
  isdn: string;
  pages: string;
  shape: string;
  cover: string;
  info: string[];
};

export default function PostTable({ values }: { values: tableInfo }) {
  const [isHovering, setHovering] = useState<boolean>(false);
  const [isDisplayed, setDisplayed] = useState<boolean>(false);

  return (
    <div
      className="grid grid-cols-7 w-full p-5"
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      {Object.entries(values)
        .slice(0, 7)
        .map(([k, v], i) => (
          <div
            key={k}
            className={`border-y border-black text-xs ${k == "name" && isHovering ? "underline font-semibold" : ""}`}
            onClick={() => setDisplayed(!isDisplayed)}
          >
            {v}
          </div>
        ))}
      <div
        className="border-b border-black col-span-2"
        onClick={() => setDisplayed(!isDisplayed)}
      ></div>
      {Object.entries(values)
        .slice(7, 11)
        .map(([k, v]) => (
          <div
            key={k}
            className="border-b border-black text-xs"
            onClick={() => setDisplayed(!isDisplayed)}
          >
            {v}
          </div>
        ))}
      <div className="border-b border-black text-xs font-semibold">COMPRAR</div>

      <div
        className={`border-b border-black col-span-2 ${isDisplayed ? "" : "collapse"}`}
      ></div>
      <div
        className={`border-b border-black text-xs col-span-4 ${isDisplayed ? "" : "collapse"}`}
      >
        {values.info[0]}
      </div>

      <div
        className={`border-b border-black ${isDisplayed ? "" : "collapse"}`}
      ></div>
      <div
        className={`border-b border-black col-span-2 ${isDisplayed ? "" : "collapse"}`}
      ></div>
      <div
        className={`border-b border-black text-xs col-span-4 ${isDisplayed ? "" : "collapse"}`}
      >
        {values.info[1]}
      </div>
      <div
        className={`border-b border-black ${isDisplayed ? "" : "collapse"}`}
      ></div>
    </div>
  );
}
