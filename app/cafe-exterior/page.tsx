import Image from "next/image";
import content from "../../data/content.json";

export default function CafeExteriorPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Café Exterior</h2>
      <p className="mb-4">{content.cafe.text}</p>
      <h3 className="font-semibold mt-4">Tabela de preços</h3>
      <div className="mb-6">
        <p className="mb-2">Café - 1€</p>
        <p className="mb-2">Água - 0,50€</p>
        <p className="mb-2">Imperial - 1,50€</p>
        <p className="mb-2">Tosta Mista - 2,50€</p>
        <p className="mb-2">Prato do dia - 7,00€</p>
      </div>
      <div className="flex justify-center">
        <Image
          src={content.cafe.image}
          alt="Café Exterior"
          width={800}
          height={500}
          className="rounded"
        />
      </div>
    </div>
  );
}
