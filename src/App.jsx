import { RouterProvider } from "react-router-dom";
import { pagesRouter } from "./routes";

function App() {
	return <RouterProvider router={pagesRouter}></RouterProvider>;
}

export default App;
