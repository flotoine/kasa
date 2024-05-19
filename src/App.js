import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ErrorPage from "./pages/error-page";
import About from "./pages/about";
import Offer from "./pages/offer";
import Home from "./pages/home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/a-propos",
    element: <About />
  },
  {
    path: "/logement/:offerId",
    element:  <Offer />
  },
  {
    path: "*",
    element: <ErrorPage />
  }


]);

function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
