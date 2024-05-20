import Link from "next/link";
import { fetchPost } from "../lib/queries";

function Item({ image, name, n }: { image: string; name: string; n: number }) {
  let borderStyle = `${n + (1 % 4) != 0 ? "border-r" : ""} ${n < 4 ? "border-y" : "border-b"}`;

  return (
    <div className={`flex flex-col gap-4 p-4 ${borderStyle} border-black`}>
      <div className="flex gap-2 items-center justify-between">
        <div className="text-xs items-center">{name} . $15.000</div>
        <button className="bg-black hover:bg-white text-xs text-white hover:text-black border border-white hover:border-black font-bold py-2 px-4 rounded-full">
          status
        </button>
      </div>
      <Link href={`/catalog/${name.replaceAll(" ", "_")}`}>
        <img className="aspect-square" src={image} />
      </Link>
    </div>
  );
}

export default async function Catalog() {
  //const res = await fetchPost(1);
  //const { title, photos } = res.data[0].attributes;
  //const photo_url = photos.data[0].attributes.formats.small.url;

  const title = "CASA 01 - ROLLA VALDIVIESO";
  const photo_url =
    "https://primapress.info/cdn/shop/files/Diapositiva1_e9c0172c-40f0-4109-b43d-5f348f5e856b.jpg?v=17068240326";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center my-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <Item key={i} image={photo_url} name={title} n={i} />
      ))}
    </div>
  );
}
