import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePin from "./pages/CreatePin";
import InputOtp from "./pages/InputOtp";
import PinSuccess from "./pages/PinSuccess";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Seeds from "./pages/Seeds";
import Transitions from "./pages/Transitions";
import Messages from "./pages/Messages";
import Account from "./pages/Account";
import Settings from "./pages/Settings";

function App() {


  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
          <Route exact path="/">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route exact path="/dashboard/home">
              <Home/>
            </Route>
            <Route  exact path="/dashboard/seeds">
              <Seeds/>
            </Route>
            <Route exact path="/dashboard/transitions">
              <Transitions/>
            </Route>
            <Route exact path="/dashboard/messages">
              <Messages/>
            </Route>
            <Route exact path="/dashboard/account">
              <Account/>
            </Route>
            <Route exact path="/dashboard/settings">
              <Settings/>
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
