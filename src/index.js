// React
import { Suspense } from "react";
import ReactDOM from "react-dom";
// scroll Third party
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "simplebar/src/simplebar.css";
// component
import App from "./App";
import ErrorBoundary from "./ErrorBoundaries";
// ----------------------------------------------------------------------
ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <HelmetProvider>
        <Suspense fallback={<h3>Loading...</h3>}>
          <App />
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);

// If you want to enable client cache, register instead.
