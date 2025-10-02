import Image from "next/image";
import content from "../../data/content.json";

export default function CampoFutsalPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Campo de Futsal</h2>

      <p className="mb-6">{content.futsal.text}</p>

      <div className="mb-6">
        <div className="flex justify-between border-b py-1">
          
           <p className="mb-2">Uma Hora - 20€</p>
           <p className="mb-2">Duas Horas - 35€</p>
           <p className="mb-2">Três Horas - 45€</p>
          
        </div>
        <div className="flex justify-between border-b py-1">

        </div>
      </div>

      <form className="mb-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Coloque aqui o nome"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Data</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Duração</label>
          <select className="w-full border rounded p-2" required>
            <option>1 hora</option>
            <option>2 horas</option>
            <option>3 horas</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Alugar
        </button>
      </form>

      <div className="flex justify-center">
        <Image
          src={content.futsal.image}
          alt="Campo de Futsal"
          width={800}
          height={500}
          className="rounded"
        />
      </div>
    </div>
  );
}
