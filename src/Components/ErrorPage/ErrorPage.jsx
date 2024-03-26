import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-700 mb-8">We are sorry, the page you are looking for does not exist.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/">Go Back to Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;
