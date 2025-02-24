import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.todo.deleteMany(); // delete * from todo

  await prisma.todo.createMany({
    data: [
      {
        description: "Destruir el Anillo Único en el Monte del Destino",
        complete: false,
      },
      { description: "Formar la Comunidad del Anillo", complete: true },
      { description: "Defender el Abismo de Helm", complete: false },
      { description: "Proteger a Frodo en su viaje a Mordor", complete: true },
      { description: "Reunir al Ejército de los Muertos", complete: false },
      { description: "Derrotar a Saruman en Isengard", complete: true },
      { description: "Salvar Minas Tirith", complete: false },
      { description: "Escapar de las Minas de Moria", complete: true },
      { description: "Reunir el Concilio de Elrond", complete: false },
      { description: "Derrotar a los Nazgûl", complete: true },
      { description: "Encender las Almenaras de Gondor", complete: false },
      { description: "Encontrar el Árbol Blanco de Gondor", complete: true },
      {
        description: "Curar a Théoden de la influencia de Saruman",
        complete: false,
      },
      { description: "Proteger la Comarca de Saruman", complete: true },
      { description: "Coronar a Aragorn como Rey de Gondor", complete: false },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
