import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Services} from "./layout/sections/services/Services";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Blog} from "./layout/sections/blog/Blog";
import {Price} from "./layout/sections/price/Price";
import {Recommendations} from "./layout/sections/recommendations/Recommendations";
import {WorkHistory} from "./layout/sections/workHistory/WorkHistory";
import {Footer} from "./layout/footer/Footer";
import {ContactForm} from "./layout/sections/contactForm/ContactForm";
import {Map} from "./layout/sections/map/Map";
import {Logo} from "./layout/sections/logo/Logo";
import {Education} from "./layout/sections/education/Education";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Services />

            <Recommendations />
            <Education />
            <WorkHistory />
            <Portfolio />
            <Blog />
            <ContactForm />
            <Map />
            <Logo />
            <Footer />
        </div>
    );
}

export default App;

