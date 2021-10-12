
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { pathFaq, pathForgotPassword, pathSignIn, pathSignUp, 
        pathAboutUs, pathProfile, pathMyWallet, pathAccActivities,
        pathMyNfts, pathSettings, pathCreateNft } from "./routes";
import Header from "./screens/Header";
import SignUp from "./screens/SingUp";
import Home from "./screens/Home";
import SignIn from "./screens/SingIn";
import Settings from "./screens/Settings"
import ForgotPassword from "./screens/ForgotPassword";
import Profile from './screens/Profile';
import CreateNft from './screens/NftCreate'
import Faq from "./screens/Faq";
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
                <Route exact path={[...pathFaq]}>
                    <Header />
                    <Faq />
                </Route>
                <Route exact path={[...pathAboutUs]}>
                    <Header />
                    <Faq />
                </Route>
                <Route exact path={[...pathProfile,...pathMyWallet,...pathAccActivities,...pathMyNfts,...pathSettings]}>
                    <Header />
                    <Profile />
                </Route>
                {/* <Route exact path={[...pathMyWallet]}>
                    <Header />
                    <Profile />
                </Route> 
                <Route exact path={[...pathAccActivities]}>
                    <Header />
                    <Profile />
                </Route>
                <Route exact path={[...pathMyNfts]}>
                    <Header />
                    <Profile />
                </Route>
                <Route exact path={[...pathSettings]}>
                    <Header />
                    <Profile />
                </Route>
                <Route exact path={[...pathCreateNft]}>
                    <Header />
                    <CreateNft />
                </Route>*/}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
