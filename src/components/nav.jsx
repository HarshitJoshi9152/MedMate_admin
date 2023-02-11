import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">
						<strong>MedMate</strong>
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<strong>Admin Panel</strong>
				</li>
			</ul>
			<ul>
				<li>
					<Link to="/create_doctor" role="button">
						Patient
					</Link>
				</li>
				<li>
					<Link to="/create_patient" role="button">
						Doctor
					</Link>
				</li>
				<li>
					<Link to="/api/admin/logout" role="button">
						Logout
					</Link>
				</li>
			</ul>
		</nav>
	);
};
