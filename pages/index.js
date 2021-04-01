import React from "react";
import Main from "../components/home-page/Main";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Portfolio from "../components/portfolio/Portfolio";
import Prices from "../components/prices/Prices";
import Slide from "../components/slide/Slide";
import Footer from "../components/footer/footer";
import Contact from "../components/contact/contact";
import Head from "next/head";
import { CommentSlide } from "../components/commentSlide/CommentSlide";

function Home(props) {
  return (
    <main>
      <Head>
        <title>Salong Beautiful</title>
        <meta
          name="description"
          content="Frisör på Fridhemsgatan 74, 854 61 Sundsvall.Färgning och klippning, boka tid på 060 - 61 76 10"
        />
      </Head>
      <Main />
      <About />
      <Products />
      <Slide />
      <Portfolio />
      <Prices />
      <CommentSlide />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
