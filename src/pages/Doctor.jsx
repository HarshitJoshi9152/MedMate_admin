import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Doctor = () => {
	const { register, handleSubmit, errors } = useForm();

	const submit = (data) => {
		axios
			.post("/api/admin/create/doctor", data)
			.then((res) => {
				if (res.data.success == true) {
					alert("DOCTOR REGISTERED SUCCESSULLY !");
				} else {
					alert("ERROR !");
				}
			})
			.catch((e) => console.log(e));
	};

	return (
		<>
			<form onSubmit={handleSubmit(submit)}>
				<h3 style={{ textAlign: "center" }}>Doctor Registration</h3>
				<fieldset>
					<input
						type="text"
						id="name"
						placeholder="name"
						{...register("name", { type: "name" })}
					/>
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
					<input
						type="number"
						// name="password"
						id="age"
						placeholder="age"
						{...register("age", { type: "number" })}
					/>
					<input
						type="address"
						// name="address"
						id="address"
						placeholder="address"
						{...register("address", { type: "address" })}
					/>
					<input
						type="tel"
						// name="tel"
						id="mobile"
						placeholder="mobile"
						{...register("mobile", { type: "tel" })}
					/>
					<button type="submit">Submit</button>
				</fieldset>
			</form>
		</>
	);
};
