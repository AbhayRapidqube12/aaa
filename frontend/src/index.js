import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 900,
    style: {
      background: '#363636',
      color: '#fff',
    },


    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
