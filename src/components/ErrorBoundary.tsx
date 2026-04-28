import { Component, type ErrorInfo, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production, forward to an error tracking service here
    if (process.env.NODE_ENV !== "production") {
      console.error("Uncaught error:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
          <div className="text-center max-w-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 font-inter">
              Something went wrong
            </p>
            <h1 className="text-4xl font-normal font-lucidia tracking-[-0.03em] text-gray-900 mb-4">
              Unexpected error
            </h1>
            <p className="text-base text-gray-500 font-inter leading-relaxed mb-8">
              An unexpected error occurred. Please refresh the page or return home.
            </p>
            <a
              href="/home"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
