import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom"; 
import { appRoutes } from "../routes";

 
 const   ErrorPage =( ) => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    }
    else if (error.status === 404) {
      // ...
    }

    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        <Link to={appRoutes.home.path}>App</Link>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ErrorPage;