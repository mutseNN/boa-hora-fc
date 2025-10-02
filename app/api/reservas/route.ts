import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reservas.json");

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    const data = fs.readFileSync(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (err) {
    return NextResponse.json({ error: "Erro ao ler reservas" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const novaReserva = await request.json();

    let reservas = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      reservas = JSON.parse(data);
    }

    reservas.push({
      ...novaReserva,
      id: Date.now(), // id único
    });

    fs.writeFileSync(filePath, JSON.stringify(reservas, null, 2), "utf8");

    return NextResponse.json({ message: "Reserva guardada com sucesso!" });
  } catch (err) {
    return NextResponse.json({ error: "Erro ao guardar reserva" }, { status: 500 });
  }
}
