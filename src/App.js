
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {pathForgotPassword, pathSignIn, pathSignUp} from "./routes";
import Header from "./screens/Header";
import SignUp from "./screens/SingUp";
import Home from "./screens/Home";
import SignIn from "./screens/SingIn";
import ForgotPassword from "./screens/ForgotPassword";
function App() {
  return (
      <Router>

          <Switch>
              <Route exact path={[...pathSignUp]}>
                  <Header />
                  <SignUp />
              </Route>
              <Route exact path={[...pathSignIn]}>
                  <Header />
                  <SignIn />
              </Route>
              <Route exact path={[...pathForgotPassword]}>
                  <Header />
                  <ForgotPassword />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
