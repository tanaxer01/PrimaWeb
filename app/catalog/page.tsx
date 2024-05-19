import Link from "next/link";
import { fetchPost } from "../lib/queries";

function Item({ image, name }: { image: string; name: string }) {
  return (
    <Link href={`/catalog/${name.replaceAll(" ", "_")}`}>
      <div className="flex flex-col gap-4">
        <img className="aspect-square" src={image} />
        <div>
          <div className="text-xs">{name}</div>
          <div className="text-sm font-semibold">15.000$</div>
        </div>
      </div>
    </Link>
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
    <div className="grid grid-cols-4 gap-4 justify-center m-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Item key={i} image={photo_url} name={title} />
      ))}
    </div>
  );
}
