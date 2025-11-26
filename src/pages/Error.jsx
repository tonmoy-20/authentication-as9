import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
const Error = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="text-9xl font-bold text-primary"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold mt-4"
        >
          Page Not Found
        </motion.p>

        <p className="mt-2 text-gray-500 text-center max-w-md">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="mt-6">
          <button className="btn btn-primary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
