import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePin from "./pages/CreatePin";
import InputOtp from "./pages/InputOtp";
import PinSuccess from "./pages/PinSuccess";
import Forgotpassword from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Seeds from "./pages/Seeds";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Editprofile from "./pages/Editprofile";
import ManageBanks from "./pages/ManageBanks";
import Security from "./pages/Security";
import Transactions from "./pages/Transactions";
import Help from "./pages/Help";
import LandingPage from "./pages/LandingPage";
import Verifyaccount from "./pages/Verifyaccount";
import Verifybvn from "./pages/Verifybvn";
import Securityhome from "./pages/Securityhome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/dashboard/home">
            <Home />
          </Route>
          <Route exact path="/dashboard/seeds">
            <Seeds />
          </Route>
          <Route exact path="/dashboard/transactions">
            <Transactions />
          </Route>
          <Route exact path="/dashboard/messages">
            <Messages />
          </Route>
          <Route exact path="/dashboard/settings">
            <Settings />
          </Route>
          <Route exact path="/dashboard/settings/edit-profile">
            <Editprofile />
          </Route>
          <Route exact path="/dashboard/settings/manage-banks">
            <ManageBanks/>
          </Route>
          <Route exact path="/dashboard/settings/security">
            <Security/>
          </Route>
          <Route exact path="/dashboard/settings/security/home">
            <Securityhome/>
          </Route>
          <Route exact path="/dashboard/settings/help-and-support">
            <Help/>
          </Route>
          <Route exact path="/dashboard/settings/security/verify-account">
            <Verifyaccount/>
          </Route>
          <Route exact path="/dashboard/settings/security/verify-bvn">
            <Verifybvn/>
          </Route>
          <Route path="/forgot-password">
            <Forgotpassword />
          </Route>
          <Route path="/pin">
            <CreatePin />
          </Route>
          <Route path="/otp">
            <InputOtp />
          </Route>
          <Route path="/pin-success">
            <PinSuccess />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
