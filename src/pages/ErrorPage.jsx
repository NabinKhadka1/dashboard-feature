import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <h3 className="text-4xl font-medium">Encountered an error!!</h3>
        <Link className="text-center bg-blue-200 px-2 py-3 mt-2 w-[50%] mx-auto rounded-lg" to="/">
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
