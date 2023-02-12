import React from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { useAuthContext } from "../../state/AuthContext";

export const Auth = () => {
	const { isAuth, username } = useAuthContext((state) => ({
		username: state.username,
		isAuth: state.isAuth
	}));

	const body = isAuth ? (
		<p>`You are Authenticated ${username}`</p>
	) : (
		<>
			<Login></Login>
			<Signup></Signup>
		</>
	);

	return (
		<main className="container">
			<article>
				<div className="grid">{body}</div>
			</article>
		</main>
	);
};
