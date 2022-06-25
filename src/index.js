// React
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
// scroll Third party
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "simplebar/src/simplebar.css";
// component
import App from "./App";
import ErrorBoundary from "./ErrorBoundaries";
// Redux
import { Provider } from "react-redux";
import store from "./Features/store";
// ----------------------------------------------------------------------
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <Suspense fallback={<h3>Loading...</h3>}>
            <App />
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);

// If you want to enable client cache, register instead.
