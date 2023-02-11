import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Login = () => {
	const { register, handleSubmit, errors } = useForm();

	const submit = (data) => {
		axios
			.post("/api/admin/login", data)
			.then((res) => {
				console.log(res);
				if (res.data.success == true) {
					window.location.href = "/home";
				}
			})
			.catch((e) => console.log(e));
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<h3>Login</h3>
			<fieldset>
				<input
					type="text"
					// name="email"
					id="email"
					placeholder="email"
					{...register("email", { type: "email" })}
				/>
				<input
					type="password"
					// name="password"
					id="password"
					placeholder="password"
					{...register("password", { type: "password" })}
				/>
				<button type="submit">Submit</button>
			</fieldset>
		</form>
	);
};
