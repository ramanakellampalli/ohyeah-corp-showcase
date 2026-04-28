import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 font-inter">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl font-normal font-lucidia tracking-[-0.03em] text-gray-900 mb-4">
          Page not found
        </h1>
        <p className="text-base text-gray-500 font-inter leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/home"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
