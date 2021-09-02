import { useEffect, useRef } from "react";

export default function Registration() {
	const inputElement = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus();
		}
	});

	return (
		<div className="container mx-auto w-50 p-1">
			<h1>Registration</h1>
			<form>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						className="form-control"
						id="username"
						placeholder="Enter username"
						ref={inputElement}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						We&apos;ll never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
