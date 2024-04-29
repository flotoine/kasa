import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ErrorPage from "./pages/error-page";
import About from "./pages/about";
import Accommodation from "./pages/accommodation";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
              <Header />
              <Home />
              <Footer />
            </div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/a-propos",
    element: <div>
              <Header />
              <About />
              <Footer />
            </div>,
  },
  {
    path: "/logement",
    element: <div>
               <Header />
                <Accommodation />
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
