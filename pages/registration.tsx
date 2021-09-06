import { useEffect, useRef, useState } from "react";

export default function Registration() {
	const inputElement = useRef<HTMLInputElement>(null);
	const [formValues, setFormValues] = useState({
		username: "",
		email: "",
		password: "",
		passwordVerify: "",
	});

	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus();
		}
	});

	function verifyPasswords(password: string, passwordVerify: string) {
		console.log("password ", password, "passwordVerify ", passwordVerify);
		if (password === passwordVerify) {
			console.log("verify Passwords, true");
			return true;
		}
		console.log("verify Passwords, false");
		return false;
	}

	function formChangeHandler(event: React.FormEvent<HTMLInputElement>) {
		setFormValues((state) => {
			return {
				...state,
				[event.currentTarget.id]: event.currentTarget.value,
			};
		});

		verifyPasswords(formValues.password, formValues.passwordVerify);
	}

	function registerUser(event: object) {
		console.log("register");
	}

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
						id="email"
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
						id="password"
						placeholder="Password"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Verify password</label>
					<input
						type="password"
						className="form-control"
						id="passwordVerify"
						placeholder="Password"
					/>
				</div>

				<button
					type="button"
					onClick={formChangeHandler}
					className="btn btn-primary"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
