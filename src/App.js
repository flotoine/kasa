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
    element: <div className="pageContainer">
              <Header />
              <Home />
              <Footer />
            </div>,
    errorElement: <div className="pageContainer">
              <Header />
              <ErrorPage />
              <Footer />
            </div>,
  },
  {
    path: "/a-propos",
    element: <div className="pageContainer">
              <Header />
              <About />
              <Footer />
            </div >,
  },
  {
    path: "/logement/:offerId",
    element: <div className="pageContainer">
                <Header />
                <Offer />
                <Footer />
             </div>
  }


]);

function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
