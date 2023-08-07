import React from "react";
import { Route, Routes, } from "react-router-dom";
import Earliy from "./Earliy";
import Education from "./Education";
import Navbar from "./Navbar";
import poltical from "./Poltical";
import Poonapact from "./Poonapact";
const App = () => {
  return (
<>
<Navbar/>
<Routes>
<Route  path="/" Component={Earliy}/>
<Route  path="/poonapact" Component={Poonapact}/>
<Route  path="/poltical" Component={poltical}/>
<Route  path="/education" Component={Education}/>
</Routes>
</>
  );
}

export default App;
