"use client";

import Image from "next/image";
import { useState } from "react";
import content from "../../data/content.json";

export default function CampoFutsalPage() {
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const reserva = {
      nome: formData.get("nome"),
      data: formData.get("data"),
      duracao: formData.get("duracao"),
    };

    const res = await fetch("/api/reservas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reserva),
    });

    if (res.ok) {
      setMensagem("Reserva feita com sucesso!");
      e.currentTarget.reset();
    } else {
      setMensagem("Erro ao enviar reserva.");
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Campo de Futsal</h2>
      <p className="mt-4 text-lg whitespace-pre-line">{content.futsal.text}</p>

      <div className="mb-6">
        <div className="flex justify-between border-b py-1">
          <span>1 hora</span>
          <span>20,00€</span>
        </div>
        <div className="flex justify-between border-b py-1">
          <span>2 horas</span>
          <span>35,00€</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            name="nome"
            className="w-full border rounded p-2"
            placeholder="O seu nome"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Data</label>
          <input type="date" name="data" className="w-full border rounded p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Duração</label>
          <select name="duracao" className="w-full border rounded p-2" required>
            <option>1 hora</option>
            <option>2 horas</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Alugar
        </button>
      </form>

      {mensagem && <p className="text-green-600">{mensagem}</p>}

      <div className="flex justify-center">
        <Image src={content.futsal.image} alt="Campo de Futsal" width={800} height={500} className="rounded" />
      </div>
    </div>
  );
}
