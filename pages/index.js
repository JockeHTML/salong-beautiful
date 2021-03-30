import React from "react";
import Main from "../components/home-page/Main";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Portfolio from "../components/portfolio/Portfolio";
import Prices from "../components/prices/Prices";
import Slide from "../components/slide/Slide";
import Footer from "../components/footer/footer";
import Contact from "../components/contact/contact";

function Home(props) {
  return (
    <div>
      <Main />
      <About />
      <Products />
      <Slide />
      <Portfolio />
      <Prices />
      <Slide />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
