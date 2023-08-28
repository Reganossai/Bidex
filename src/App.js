import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePin from "./pages/CreatePin";
import InputOtp from "./pages/InputOtp";
import PinSuccess from "./pages/PinSuccess";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";

function App() {


  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/forgot-password">
              <Forgotpassword/>
            </Route>
            <Route path="/pin">
              <CreatePin/>
            </Route>
            <Route path="/otp">
              <InputOtp/>
            </Route>
            <Route path="/pin-success">
              <PinSuccess/>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
