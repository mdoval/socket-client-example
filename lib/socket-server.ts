import { io } from "socket.io-client";

const url = process.env.SERVER_URL
const port = process.env.SERVER_PORT

const socket = io(`${url}:${port}`, {autoConnect: false});

export default socket;