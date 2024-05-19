import { fetchPost } from "@/app/lib/queries";

export default async function Product() {
  // const res = await fetchPost(1);
  // const { title, photos } = res.data[0].attributes;
  // const photo_url = photos.data[0].attributes.url;
  const photo_url =
    "https://primapress.info/cdn/shop/files/Diapositiva1_e9c0172c-40f0-4109-b43d-5f348f5e856b.jpg?v=17068240326";

  return (
    <div className="w-[60%] mx-auto my-10">
      <div className="flex">
        <img className="aspect-square w-[60%] rounded-md" src={photo_url} />
        <div className="flex flex-col gap-10 w-[40%] p-5">
          <div>
            <div className="text-2xl">PRIMA IV - COMPONENTES</div>
            <div className="text-md">$15.000 CLP</div>
          </div>
          <button className="w-full bg-white hover:bg-gray-100 text-sm text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Comprar ahora
          </button>
          <ul className="text-gray-400">
            <li>Guillermo Hevia - Felipe Alarcón - Azócar Catrón</li>
            <li>ISBN: 978-956-410-372-3</li>
            <li>Formato: 8,5x29cm</li>
            <li>Páginas: 14 pág</li>
            <li>Encuadernación: Políptico</li>
            <li>Idioma: ESP</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
