
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cardstock flex items-center justify-center px-6">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white border-2 border-ivy p-16 stamp-shadow">
              <div className="text-8xl mb-8" aria-hidden="true">🌺</div>
              <h1 className="font-serif text-6xl font-bold italic text-ivy mb-6">
                Oops! Something Wilted
              </h1>
              <p className="text-xl text-ivy/70 mb-8 font-medium">
                We've encountered an unexpected error. Our botanical engineers are on it!
              </p>
              {this.state.error && (
                <details className="text-left bg-cardstock p-6 border border-ivy/20 rounded mb-8">
                  <summary className="font-bold text-ivy cursor-pointer mb-2">
                    Technical Details
                  </summary>
                  <code className="text-sm text-coral break-all">
                    {this.state.error.toString()}
                  </code>
                </details>
              )}
              <button
                onClick={() => window.location.reload()}
                className="px-12 py-4 bg-ivy text-wasabi font-black uppercase tracking-[0.4em] text-sm hover:bg-coral hover:text-white transition-all stamp-shadow focus:outline-none focus:ring-4 focus:ring-ivy/50"
              >
                Refresh & Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
