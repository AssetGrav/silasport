import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import NavBar from "./components/ui/NavBar";
import Products from "./components/layout/Products";
import Services from "./components/layout/Services";
import KitsProvider from "./components/hook/useKits";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <KitsProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </KitsProvider>
      </div>
    </div>
  );
}

export default App;
