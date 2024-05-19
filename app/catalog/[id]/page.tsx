import { fetchPost } from "@/app/lib/queries";

export default async function Product() {
  // const res = await fetchPost(1);
  // const { title, photos } = res.data[0].attributes;
  // const photo_url = photos.data[0].attributes.url;
  const photo_url =
    "https://primapress.info/cdn/shop/files/Diapositiva1_e9c0172c-40f0-4109-b43d-5f348f5e856b.jpg?v=17068240326";

  return (
    <div className="m-10">
      <div className="flex">
        <img className="aspect-square w-[50%]" src={photo_url} />
        <div className="flex flex-col gap-10 w-[40%] p-5">
          <div>
            <div className="text-2xl font-bold">PRIMA IV - COMPONENTES</div>
            <div className="text-md">$15.000 CLP</div>
          </div>
          <button className="w-full bg-white hover:bg-gray-100 text-sm text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Comprar ahora
          </button>
          <div className="flex flex-col gap-4">
            <div>
              CASA es un serie de publicaciones monográficas que buscan poner en
              valor tanto el registro de obra (incompleta) y su documentación,
              como la tipología de la vivienda unifamiliar, que ha sido la
              encargada de construir el imaginario asociado a la arquitectura
              chilena contemporánea.
            </div>
            <div>
              CASA 01 presenta la Casa Engawa obra de los arquitectos Stefano
              Rolla y Santiago Valdivieso, emplazada en Punta Pite y terminada
              en el año 2019. Esta publicación muestra el proceso de
              construcción de la obra documentado en planimetrías, imágenes y
              una memoria a modo de bitácora.
            </div>
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
    </div>
  );
}
