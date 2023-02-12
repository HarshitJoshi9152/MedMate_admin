import { RouterProvider } from "react-router-dom";
import { pagesRouter } from "./routes";
// import { AuthContext } from "./state/AuthContext";

// import { useLocalStorage } from "./hooks/useLocalStorage";
// import { useMemo } from "react";

const KEY = "auth";

function App() {
	return <RouterProvider router={pagesRouter}></RouterProvider>;
}

export default App;
