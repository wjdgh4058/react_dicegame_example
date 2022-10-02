import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";

import Home from "./routes/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/" exact = {true}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
