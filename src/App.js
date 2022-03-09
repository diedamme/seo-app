import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Unicl from "./pages/Unicl";
import AddPhrase from "./pages/AddPhrase";
import LeaveOrRemove from "./pages/LeaveOrRemove";
import PhraseConversion from "./pages/PhraseConversion";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div style={{ minHeight: "800px" }}>
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/uniqueize-phrases"} component={Unicl} />
            <Route path={"/add-phrase"} component={AddPhrase} />
            <Route path={"/leave-or-remove"} component={LeaveOrRemove} />
            <Route path={"/phrase-conversion"} component={PhraseConversion} />
            <Route path={"/about"} component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
