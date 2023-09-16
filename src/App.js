import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueries } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Shop from "./Components/Shop";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Returns from "./Components/Returns";
import Navbar from "./Components/Navbar";
import CheckOut from "./Components/CheckOut";
import Spinner from "./Components/Spinner";
import ProductDetail from "./Components/product/[id]";
import AccountOrder from "./Components/MyAccount/AccountOrder";
import Dashboard from "./Components/MyAccount/Dashboard";
import OrderdDetails from "./Components/MyAccount/OrderdDetails";
import AccountDetail from "./Components/MyAccount/AccountDetail";

function App() {
  
  const {data:BusinessData , isLoading}=useQuery(
    {
      queryKey: ["BusinessData"],
      queryFn: () =>
        axios
          .get("https://pos-dev.myignite.online/connector/api/business/apna")
          .then((res) => res.data ),
  },
  )

  const [ Categories, Brands , Products] = useQueries({
    queries: [
    
      {
        queryKey: ["useCategoriesrs"],
        queryFn: () =>
          axios
            .get("https://pos-dev.myignite.online/api/store-front/categories", {
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
            .get("https://pos-dev.myignite.online/api/store-front/brands", {
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
            .get("https://pos-dev.myignite.online/api/store-front/products", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => res.data),
      },
    ],
  });

  let token = localStorage.getItem("Token");

  
  if (BusinessData?.data) {
    localStorage.setItem(
      "BusinessData",
      JSON.stringify(BusinessData?.data[0])
      );
      localStorage.setItem("Token", BusinessData.data[0].token);
  }


  if (isLoading) {
    return(
      <Spinner/>
    )
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


  if (BusinessData.isLoading || Categories.isLoading || Brands.isLoading || Products.isLoading) {
    return <Spinner />;
  }



  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter basename="/ignite">
          <Navbar />
          <Routes>
            <Route exact path="/ignite" element={<Home />}></Route>

            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path={`/product/:id`} element={<ProductDetail />}></Route>
            <Route path="/product" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/refundPolicy" element={<Returns />}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>
            <Route path="/my-account" element={<Dashboard/>}></Route>
            <Route path="/my-account/orders" element={<AccountOrder/>}></Route>
            <Route path="/my-account/orders/:id" element={<OrderdDetails/>}></Route>
            <Route path="/my-account/account-details" element={<AccountDetail/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
