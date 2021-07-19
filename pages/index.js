import React from "react";
import Main from "../components/homePage/Main";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Portfolio from "../components/portfolio/Portfolio";
import Prices from "../components/prices/Prices";
import Slide from "../components/slide/Slide";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import Head from "next/head";

function Home(props) {
  return (
    <main>
      <Head>
        <title>Salong Beautiful</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="Frisör på Fridhemsgatan 74, 854 61 Sundsvall.Färgning och klippning, boka tid på 060 - 61 76 10"
        />
        <meta property="og:title" content="Salong Beautiful" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
      <About />
      <Products />
      <Slide />
      <Portfolio />
      <Prices />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
