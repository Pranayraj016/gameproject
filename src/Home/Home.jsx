import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Available from "./Available";
import Feature from "./Feature";
import Blog from "./Blog";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Available />
      <Feature />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
