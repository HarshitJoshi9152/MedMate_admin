import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<main className="container">
			<article>
				<header>Options</header>
				<ul>
					<li>
						<Link to="/create_patient">create Patient</Link>
					</li>
					<li>
						<Link to="/create_doctor">create Doctor</Link>
					</li>
					<li>
						<Link to="/api/admin/logout">Logout</Link>
					</li>
				</ul>
			</article>
		</main>
	);
};
