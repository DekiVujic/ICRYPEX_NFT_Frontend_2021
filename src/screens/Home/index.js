import Header from "../Header";
import CategorySectionOne from "./CategorySectionOne";
import CategorySectionTwo from "./CategorySectionTwo";
import CategorySectionForYou from "./CategorySectionForYou";
import Footer from "../Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <CategorySectionOne/>
            <CategorySectionTwo/>
            <CategorySectionForYou/>
            <Footer/>
        </div>
    );
};

export default Home;
