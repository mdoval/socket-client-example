"use server";

import { revalidatePath } from "next/cache";
import socket from "./socket-server";
import { redirect } from "next/navigation";

export async function ingresarAlChat(data: FormData) {
  const nombre = data.get("nombre") as string;

  if (!socket.connected) {
    socket.connect(); // Conectar solo si no está conectado
  }
  socket.emit("setUsername",nombre)

  console.log(`Ingreso al Chat ${nombre}`);
  revalidatePath("/")
  redirect("/")
} 


export async function sendMessage(data: FormData) {
  const message = data.get("message")
  console.log(message)
}
