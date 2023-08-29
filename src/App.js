import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";

import Shop from "./Components/Shop";
import FAQ from "./Components/FAQ";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import About from "./Components/About";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Returns from "./Components/Returns";
import Navbar from "./Components/Navbar";
import CheckOut from "./Components/CheckOut";
import { data } from "autoprefixer";
import Spinner from "./Components/Spinner";
import ProductDetail from "./Components/product/[id]";

function App() {
  const [BusinessData, Categories, Brands , Products] = useQueries({
    queries: [
      {
        queryKey: ["BusinessData"],
        queryFn: () =>
          axios
            .get("https://pos-dev.myignite.online/connector/api/business/apnaa")
            .then((res) => res.data),
      },

      {
        queryKey: ["useCategoriesrs"],
        queryFn: () =>
          axios
            .get("http://pos-dev.myignite.online/api/store-front/categories", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }) 
            .then((res) => res.data),
      },

      {
        queryKey: ["useBrands"],
        queryFn: () =>
          axios
            .get("http://pos-dev.myignite.online/api/store-front/brands", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => res.data),
      },

      {
        queryKey: ["useProducts"],
        queryFn: () =>
          axios
            .get("http://pos-dev.myignite.online/api/store-front/products", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => res.data),
      },
    ],
  });

  
  if (BusinessData?.data) {
    localStorage.setItem(
      "BusinessData",
      JSON.stringify(BusinessData.data.data[0])
      );
      localStorage.setItem("Token", BusinessData.data.data[0].token);
  }

  if (Categories?.data) {
    localStorage.setItem("Categories", JSON.stringify(Categories.data.data));
  }

  if (Brands?.data) {
    localStorage.setItem("Brands", JSON.stringify(Brands.data.brands));
  }

  if(Products){
    localStorage.setItem('Products' , JSON.stringify(Products.data))
  }

  console.log(Brands);
  let token = localStorage.getItem("Token");

  if (BusinessData.isFetching || Categories.isFetching || Brands.isFetching || Products.isFetching) {
    return <Spinner />;
  }



  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path={`/product/:id`} element={<ProductDetail />}></Route>
            {/* <Route path="/product" element={<Product />}></Route> */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/returns" element={<Returns />}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
