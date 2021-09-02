import { io } from "socket.io-client";

export let socket;

export const init = () => {
	if (!socket) {
		socket = io.connect();
		console.log("SOCKET!");
	}
};
