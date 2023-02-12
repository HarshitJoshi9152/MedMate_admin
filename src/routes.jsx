import { createBrowserRouter } from "react-router-dom";
import { Nav } from "./components/nav";
import { Auth } from "./pages/Auth";
import { Doctor } from "./pages/Doctor";
// import { Home } from "./pages/Home";
import { Patient } from "./pages/Patient";

const Wrapper = ({ children }) => {
	return (
		<main className="container">
			<Nav></Nav>
			{children}
		</main>
	);
};

export const pagesRouter = createBrowserRouter([
	{
		path: "/",
		element: (
			<Wrapper>
				<Auth></Auth>
			</Wrapper>
		)
	},
	// {
	// 	path: "/home",
	// 	element: (
	// 		<Wrapper>
	// 			<Home />
	// 		</Wrapper>
	// 	)
	// },
	{
		path: "/create_patient",
		element: (
			<Wrapper>
				<Patient></Patient>
			</Wrapper>
		)
	},
	{
		path: "/create_doctor",
		element: (
			<Wrapper>
				<Doctor></Doctor>
			</Wrapper>
		)
	}
]);
