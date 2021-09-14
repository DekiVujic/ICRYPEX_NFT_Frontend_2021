
import './App.css';
import Header from "./screens/Header/Header";
import Footer from "./screens/Footer/Footer";
import Banner from "./screens/Home/Banner";
import CategorySectionOne from "./screens/Home/CategorySectionOne";
import CategorySectionTwo from "./screens/Home/CategorySectionTwo";
import CategorySectionForYou from "./screens/Home/CategorySectionForYou";
import Profile from "./screens/Profile/Profile";
import SignUp from "./screens/SingUp/SingUp";
import SignIn from "./screens/SingIn/SingIn";
import Faq from "./screens/Faq/Faq";
import NftCreate from "./screens/NftCreate/NftCreate";
import AboutUs from "./screens/AboutUs/AboutUs";

function App() {
  return (
      <div>
        <Header/>
        <AboutUs/>
      </div>
  );
}

export default App;
