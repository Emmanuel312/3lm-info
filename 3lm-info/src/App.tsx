import React from "react";
import GlobalStyles from "./styles/global";
import { store } from "./store";
import { Provider } from "react-redux";
import Main from "./pages/Main";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Main />
    </Provider>
  );
};

export default App;
