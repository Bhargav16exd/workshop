import { Link } from "react-router-dom";

//Not found page
export const NotFoundPage = () => {
  return (
    <>

      {/* Navbar */}

      <div className="h-20 border border-b-[1px] flex py-2 bg-gray-100">
        <div className="h-full w-full flex justify-start items-center px-10 font-semibold text-2xl text-gray-700">
          Page Not Found
        </div>
      </div>

      {/* Main Content */}
      
      <div className="flex justify-center items-center min-h-[90vh] bg-gray-50">
        <div className="text-center p-6 max-w-[600px] border rounded-md shadow-md bg-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 mb-4">
            The page you’re looking for doesn’t exist or might have been moved.
          </p>
          <Link to="/home">
            <div className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer font-semibold inline-block">
              Go Back to Homepage
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
