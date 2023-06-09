import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import NavBar from "./components/ui/NavBar";
import Products from "./components/layout/Products";
import Services from "./components/layout/Services";
import KitsProvider from "./components/hook/useKits";
import About from "./components/ui/about/About";
import Footer from "./components/ui/Footer";
import Gallery from "./components/ui/about/Gallery";
import Vacancies from "./components/ui/about/Vacancies";
import Details from "./components/ui/about/Details";
import Price from "./components/ui/Price";
import Order from "./components/ui/info/Order";
import MarkingAndParking from "./components/ui/info/MarkingAndParking";
import Printing from "./components/ui/info/Printing";
import Model from "./components/ui/info/Model";
import Care from "./components/ui/info/Care";
import Fabrics from "./components/ui/info/Fabrics";
import Delivery from "./components/ui/info/Delivery";
import Contacts from "./components/ui/info/Contacts";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <KitsProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/details" element={<Details />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/price" element={<Price />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/order" element={<Order />} />
            <Route path="/marking" element={<MarkingAndParking />} />
            <Route path="/printing" element={<Printing />} />
            <Route path="/model" element={<Model />} />
            <Route path="/care" element={<Care />} />
            <Route path="/fabrics" element={<Fabrics />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </KitsProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
