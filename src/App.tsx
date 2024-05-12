import React from "react";
import MainRouter from "./app/routes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRouter />
    </>
  );
};

export default App;
