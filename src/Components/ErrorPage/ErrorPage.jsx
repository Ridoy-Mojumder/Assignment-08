import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!!</h1>
            <button><Link  to="/">Go Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;