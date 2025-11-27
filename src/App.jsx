import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
