import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";

import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
