import { NavBar } from "./components/NavBar/NavBar"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { Inicio } from "./components/Inicio/Inicio";
import { Profesionales } from "./components/Profesionales/Profesionales";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Inicio}></Route>
        <Route path="/profesionales" component={Profesionales}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
