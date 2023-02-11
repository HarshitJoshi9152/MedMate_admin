import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Signup = () => {
	const { register, handleSubmit, errors } = useForm();

	const submit = (data) => {
		axios
			.post("/api/admin/signup", data)
			.then((res) => {
				if (res.data.success == true) {
					alert("Success: Now login");
				}
			})
			.catch((e) => console.log(e));
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<h3>Signup</h3>
			<fieldset>
				<input
					type="text"
					// name="email"
					id="username"
					placeholder="username"
					{...register("username", {
						type: "username",
						required: true
					})}
				/>
				<input
					type="text"
					// name="email"
					id="email"
					placeholder="email"
					{...register("email", { type: "email", required: true })}
				/>
				<input
					type="password"
					// name="password"
					id="password"
					placeholder="password"
					{...register("password", {
						type: "password",
						required: true
					})}
				/>
				<button type="submit">Submit</button>
			</fieldset>
		</form>
	);
};
