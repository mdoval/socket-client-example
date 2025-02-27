import socket from "@/lib/socket-server";
import LoginForm from "./components/LoginForm";
import ChatBoard from "./components/ChatBoard";

export default function Home() {
  const isConnected = socket.active;

  return (
    <div className="h-full w-full flex flex-col p-4">
      <div>
        <h1 className="text-3xl">Chat Example</h1>
      </div>
      <div className="h-full flex flex-col align-middle">{!isConnected ? <LoginForm /> : <ChatBoard />}</div>
    </div>
  );
}
