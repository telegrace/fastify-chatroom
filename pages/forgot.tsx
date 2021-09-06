import { useEffect, useRef } from "react";

export default function ForgotPassword() {
	const inputElement = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus();
		}
	});

	//switch out components to enter code and reset password
	return (
		<div className="container mx-auto w-50 p-1">
			<h1>Registration</h1>
			<form>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
