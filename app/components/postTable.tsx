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
  const [isDisplayed, setDisplayed] = useState<boolean>(false);

  return (
    <div className="group grid grid-cols-7 w-full">
      <div className={`border-y border-black text-xs pl-2 py-1`}>
        {values.id}
      </div>
      <div
        className="border-y border-black text-xs pl-2 py-1 group-hover:underline group-hover:font-semibold"
        onClick={() => setDisplayed(!isDisplayed)}
      >
        {values.name}
      </div>
      <div className="border-y border-black text-xs pl-2 py-1">
        {values.author}
      </div>
      <div className="border-y border-black text-xs pl-2 py-1">
        {values.year}
      </div>
      <div className="border-y border-black text-xs pl-2 py-1">
        {values.lang}
      </div>
      <div className="border-y border-black text-xs pl-2 py-1">
        {values.editorial}
      </div>
      <div className="border-y border-black text-xs pl-2 py-1">
        {values.price}
      </div>

      <div className="border-b border-black py-1 col-span-2"></div>
      <div className="border-b border-black text-xs pl-2 py-1">
        {values.isdn}
      </div>
      <div className="border-b border-black text-xs pl-2 py-1">
        {values.pages}
      </div>
      <div className="border-b border-black text-xs pl-2 py-1">
        {values.shape}
      </div>
      <div className="border-b border-black text-xs pl-2 py-1">
        {values.cover}
      </div>
      <div className="border-b border-black text-xs pl-2 py-1 font-semibold">
        COMPRAR
      </div>

      <div
        className={`border-b border-black col-span-2 ${isDisplayed ? "" : "collapse"}`}
      ></div>
      <div
        className={`border-b border-black text-xs col-span-4 ${isDisplayed ? "" : "collapse"}`}
      >
        {"aaa"}
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
