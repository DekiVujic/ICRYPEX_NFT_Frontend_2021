
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Home/Banner";
import CategorySectionOne from "./components/Home/CategorySectionOne";
import CategorySectionTwo from "./components/Home/CategorySectionTwo";
import CategorySectionForYou from "./components/Home/CategorySectionForYou";
import Profile from "./components/Profile/Profile";

function App() {
  return (
      <div>
        <Header/>
        <Profile/>
          <Footer/>
      </div>
  );
}

export default App;
