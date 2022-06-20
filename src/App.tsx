import React, { StrictMode } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <StrictMode>
        <Header />
        <Main />
        <Footer />
      </StrictMode>
    </Provider>
  );
}

export default App;
