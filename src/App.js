
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
import NftCreate from "./components/NftCreate/NftCreate";

function App() {
  return (
      <div>
        <Header/>
        <NftCreate/>
        <Footer/>
      </div>
  );
}

export default App;
