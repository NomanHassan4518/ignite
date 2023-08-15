import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Shop from "./Components/Shop";
import FAQ from "./Components/FAQ";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import About from "./Components/About";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Returns from "./Components/Returns";

function App() {
  let a ="Hassan"
  return (
    <>
      <div className="flex flex-col min-h-screen" >
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home h={a}/>}></Route>
          
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path="/faq" element={<FAQ/>}></Route>
          <Route path="/detail" element={<Details/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/privacy" element={<Privacy/>}></Route>
          <Route path="/terms" element={<Terms/>}></Route>
          <Route path="/returns" element={<Returns/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>

              <ToastContainer />

    </>
  );
}

export default App;
