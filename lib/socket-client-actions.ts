"use server";

import socket from "./socket-server";

export async function ingresarAlChat(data: FormData) {
  const nombre = data.get("nombre") as string;

  if (!socket.connected) {
    socket.connect(); // Conectar solo si no está conectado
  }
  
  console.log(`Ingreso al Chat ${nombre}`);
}
