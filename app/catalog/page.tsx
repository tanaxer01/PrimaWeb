import Link from "next/link";
import { fetchPost } from "../lib/queries";

function Item({ image, name }: { image: string; name: string }) {
  return (
    <Link href={`/catalog/${name.replaceAll(" ", "_")}`}>
      <div className="flex flex-col gap-4">
        <img className="aspect-square" src={`http://localhost:1337${image}`} />
        <div>
          <div className="text-xs">{name}</div>
          <div className="text-sm font-semibold">15.000$</div>
        </div>
      </div>
    </Link>
  );
}

export default async function Catalog() {
  const res = await fetchPost(1);
  const { title, photos } = res.data[0].attributes;
  const photo_url = photos.data[0].attributes.formats.small.url;

  return (
    <div className="grid grid-cols-4 gap-4 justify-center m-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Item key={i} image={photo_url} name={title} />
      ))}
    </div>
  );
}
