import React from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const Auth = () => {
	return (
		<main className="container">
			<article>
				<div className="grid">
					<Login></Login>
					<Signup></Signup>
				</div>
			</article>
		</main>
	);
};
