import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">

            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage
