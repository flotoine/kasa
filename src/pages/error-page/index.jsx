import { 
  Link,
  useRouteError
 } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './error-page.scss';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header/>
      <div id="error-page">
        <h1 className="error-page__404">404</h1>
        <h2 className="error-page__subtext">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to='/'>Retour sur la page d'acceuil</Link>
      </div>
      <Footer/>
    </div>
  );
}