import { 
  Link,
  useRouteError
 } from "react-router-dom";

import './error-page.scss';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
      <div className="error-page">
        <h1 className="error-page__404">404</h1>
        <h2 className="error-page__subtext">Oups! La page que vous demandez n'existe pas.</h2>
        <div className="error-page__backlink"><Link to='/'>Retourner sur la page d'acceuil</Link></div>
      </div>
  );
}