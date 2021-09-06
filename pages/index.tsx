import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<p>
				User should be automatically sent to login if there are cookies,
				and register is there are no cookies
			</p>

			<ul>
				<li>
					<Link href="/registration">
						<a>Register</a>
					</Link>
				</li>
				<li>
					<Link href="/login">
						<a>Login</a>
					</Link>
				</li>
				<li>
					<Link href="/forgot">
						<a>Forgot your password?</a>
					</Link>
				</li>
				<li>
					<Link href="/chat">
						<a>Chat</a>
					</Link>
				</li>
			</ul>
		</>
	);
}
