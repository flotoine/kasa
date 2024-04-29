import { 
  Link,
  useRouteError
 } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header/>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to='/'>Retour sur la page d'acceuil</Link>
      <Footer/>
    </div>
  );
}