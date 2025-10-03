// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page not found</h2>
      <p className="mb-6 text-center max-w-lg">
        The page you requested doesn't exist. Check the URL or go back to the
        homepage.
      </p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
