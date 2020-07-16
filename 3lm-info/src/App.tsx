import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/global";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />

        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
