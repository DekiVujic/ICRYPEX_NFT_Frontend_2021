
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Home/Banner";
import CategorySectionOne from "./components/Home/CategorySectionOne";
import CategorySectionTwo from "./components/Home/CategorySectionTwo";
import CategorySectionForYou from "./components/Home/CategorySectionForYou";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SingUp/SingUp";
import SignIn from "./components/SingIn/SingIn";
import Faq from "./components/Faq/Faq";
import NftCreate from "./components/NftCreate/NftCreate";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
      <div>
        <Header/>
        <AboutUs/>
      </div>
  );
}

export default App;
