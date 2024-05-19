import PostTable from "./components/postTable";
import { fetchPost } from "./lib/queries";

export default async function Home() {
  //const res = await fetchPost(1);
  //const { title, photos } = res.data[0].attributes;
  //const photo_url = photos.data[0].attributes.url;

  const photo_url =
    "https://primapress.info/cdn/shop/files/Diapositiva1_e9c0172c-40f0-4109-b43d-5f348f5e856b.jpg?v=17068240326";

  const fields = {
    id: "001",
    name: "CASA 01 - ENGAWA",
    author: "Stefano Rolla, Santiago Valdivieso",
    year: "2023",
    lang: "EN / ES / IT",
    editorial: "primapress",
    price: "25.000 Cl",
    isdn: "978-95708817-1-3",
    pages: "32 p",
    shape: "32 x 28 cm",
    cover: "Soft cover",
    info: ["asdf", "asdf"],
  };

  return (
    <main className="min-h-screen flex flex-col py-10">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i}>
          <div className="w-[80%] max-w-[715px] mx-auto">
            <img src={photo_url} />
          </div>
          <PostTable values={fields} />
        </div>
      ))}
    </main>
  );
}
