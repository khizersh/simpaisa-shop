import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import HomePage from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./pages/Detail";
import Success from "./pages/Success";
import History from "./pages/History";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/success" component={Success} />
          <Route path="/history" component={History} />
          <Route path="/users" />
        </Switch>
      </Router>
    );
  }
}
export default App;
