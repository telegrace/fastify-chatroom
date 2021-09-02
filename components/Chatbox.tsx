import { useEffect, useRef } from "react";
import { socket } from "../socket";

const Chatbox: React.FC = () => {
	console.log("chatbox");
	return (
		<div className="card">
			<h1>Chatbox</h1>
			<div className="card-body"></div>
			<textarea placeholder="write your message and press enter to send..."></textarea>
		</div>
	);
};

export default Chatbox;

// see a chatbox
