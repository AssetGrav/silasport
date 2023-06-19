import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Products from "./components/layout/Products";
import KitsProvider from "./components/hook/useKits";
import About from "./components/ui/about/About";
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
import Layout from "./components/ui/Layout";
import ManFootball from "./components/ui/products/football/ManFootball";
import WomanFootball from "./components/ui/products/football/WomanFootball";
import LayoutForAll from "./components/ui/LayoutForAll";
import KokparType from "./components/ui/products/sporttype/KokparType";
import LayoutProducts from "./components/ui/LayoutProducts";
import KiberSportType from "./components/ui/products/sporttype/KiberSportType";
import RugbyType from "./components/ui/products/sporttype/RugbyType";
import MotoSportType from "./components/ui/products/sporttype/MotoSportType";
import BoxType from "./components/ui/products/sporttype/BoxType";
import AthleticsType from "./components/ui/products/sporttype/AthleticsType";
import ManBasketball from "./components/ui/products/basketball/ManBasketball";
import ProductItem from "./components/ui/ProductItem";
import WomanBasketball from "./components/ui/products/basketball/WomanBasketball";
import UndershirtBasketball from "./components/ui/products/basketball/UndershirtBasketball";
import TrainerBasketball from "./components/ui/products/basketball/TrainerBasketball";
import RefferyShirtsBasketball from "./components/ui/products/basketball/RefferyShirtsBasketball";
import ProductsComponent from "./components/common/ProductsComponent";
import { volleyball } from "./api/menu/total-menu/volleyball.api";
import ManVoleyball from "./components/ui/products/voleyball/ManVoleyball";
import { voleyballWomenKits } from "./api/menu/total-menu/voleyball/voleyball-woman-catalog.api";
import {
  clothesRoute,
  drawingRoute,
  hockeyRoute,
  servicesRoute,
} from "./components/routing/routing";
import ServicesComponent from "./components/common/ServicesComponent";
import DrawingComponent from "./components/common/DrawingComponent";
import VideoAboutUs from "./components/ui/VideoAboutUs";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <KitsProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="vacancies" element={<Vacancies />} />
            <Route path="details" element={<Details />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="video" element={<VideoAboutUs />} />
            <Route path="order" element={<Order />} />
            <Route path="marking" element={<MarkingAndParking />} />
            <Route path="printing" element={<Printing />} />
            <Route path="model" element={<Model />} />
            <Route path="care" element={<Care />} />
            <Route path="fabrics" element={<Fabrics />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="price" element={<Price />} />
            <Route path="products/" element={<LayoutProducts />}>
              <Route index element={<Products />} />

              <Route path="football/" element={<LayoutForAll />}>
                <Route path="man/" element={<ManFootball />} />
                <Route path="man/:id" element={<ProductItem />} />
                <Route path="woman/" element={<WomanFootball />} />
                <Route path="woman/:id" element={<ProductItem />} />
              </Route>

              <Route path="type/" element={<LayoutForAll />}>
                <Route path="kokpar/" element={<KokparType />} />
                <Route path="kokpar/:id" element={<ProductItem />} />
                <Route path="kiber/" element={<KiberSportType />} />
                <Route path="kiber/:id" element={<ProductItem />} />
                <Route path="rugby/" element={<RugbyType />} />
                <Route path="rugby/:id" element={<ProductItem />} />
                <Route path="moto/" element={<MotoSportType />} />
                <Route path="moto/:id" element={<ProductItem />} />
                <Route path="box/" element={<BoxType />} />
                <Route path="box/:id" element={<ProductItem />} />
                <Route path="athletic/" element={<AthleticsType />} />
                <Route path="athletic/:id" element={<ProductItem />} />
              </Route>

              <Route path="basketball/" element={<LayoutForAll />}>
                <Route path="man/" element={<ManBasketball />} />
                <Route path="man/:id" element={<ProductItem />} />
                <Route path="woman/" element={<WomanBasketball />} />
                <Route path="woman/:id" element={<ProductItem />} />
                <Route path="tshirts/" element={<UndershirtBasketball />} />
                <Route path="tshirts/:id" element={<ProductItem />} />
                <Route path="suit/" element={<TrainerBasketball />} />
                <Route path="suit/:id" element={<ProductItem />} />
                <Route
                  path="refereeshirts/"
                  element={<RefferyShirtsBasketball />}
                />
                <Route path="refereeshirts/:id" element={<ProductItem />} />
              </Route>
              <Route path="volleyball/" element={<LayoutForAll />}>
                <Route path="man/" element={<ManVoleyball />} />
                <Route path="man/:id" element={<ProductItem />} />
                <Route
                  path="woman/"
                  element={
                    <ProductsComponent
                      linkName="Женская форма на заказ"
                      name="Женская волейбольная форма на заказ"
                      fileName=""
                      buttons={volleyball.list}
                      kits={voleyballWomenKits}
                    />
                  }
                />
                <Route path="woman/:id" element={<ProductItem />} />
              </Route>

              {hockeyRoute.map((elem) => (
                <Route key={elem.host} path="hockey" element={<LayoutForAll />}>
                  <Route
                    key={elem.host}
                    path={elem.host}
                    element={
                      <ProductsComponent
                        linkName={elem.linkName}
                        name={elem.name}
                        fileName={elem.fileName}
                        buttons={elem.buttons}
                        kits={elem.kits}
                      />
                    }
                  ></Route>
                  <Route path={elem.host + ":id"} element={<ProductItem />} />
                </Route>
              ))}
              {clothesRoute.map((elem) => (
                <Route
                  key={elem.host}
                  path="clothes"
                  element={<LayoutForAll />}
                >
                  <Route
                    key={elem.host}
                    path={elem.host}
                    element={
                      <ProductsComponent
                        linkName={elem.linkName}
                        name={elem.name}
                        fileName={elem.fileName}
                        buttons={elem.buttons}
                        kits={elem.kits}
                      />
                    }
                  ></Route>
                  <Route path={elem.host + ":id"} element={<ProductItem />} />
                </Route>
              ))}
              {drawingRoute.map((elem) => (
                <Route
                  key={elem.host}
                  path="drawing"
                  element={<LayoutForAll />}
                >
                  <Route
                    key={elem.host}
                    path={elem.host}
                    element={
                      <DrawingComponent
                        linkName={elem.linkName}
                        name={elem.name}
                        fileName={elem.fileName}
                        buttons={elem.buttons}
                        kits={elem.kits}
                      />
                    }
                  ></Route>
                  <Route path={elem.host + ":id"} element={<ProductItem />} />
                </Route>
              ))}
              {servicesRoute.map((elem) => (
                <Route
                  key={elem.host}
                  path="services"
                  element={<LayoutForAll />}
                >
                  <Route
                    key={elem.host}
                    path={elem.host}
                    element={
                      <ServicesComponent
                        linkName={elem.linkName}
                        name={elem.name}
                        fileName={elem.fileName}
                        buttons={elem.buttons}
                        kits={elem.kits}
                      />
                    }
                  ></Route>
                  <Route path={elem.host + ":id"} element={<ProductItem />} />
                </Route>
              ))}
            </Route>
            <Route path="contact" element={<Contacts />} />
          </Route>
        </Routes>
      </KitsProvider>
    </>
  );
}

export default App;
