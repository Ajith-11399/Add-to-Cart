import React, { useState } from "react";
import Navbar from "./assets/Navbar/Navbar";
import Hero from "./assets/HeroSection/Hero";
import Footer from "./assets/Footer/Footer";
import Grid from "./assets/Grid/Grid";

const App = () => {
  const arrObj = [
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product: "Product 1",
      cost: "$20.00 - $40.00",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "Sale",
      product: "Product 2",
      star: "fas fa-star",
      strike: "$50.00",
      cost: "$30.00",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "Sale",
      product: "Product 3",
      strike: "$70.00",
      cost: "$35.00",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product: "Product 4",
      star: "fas fa-star",
      cost: "$50.00",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "Sale",
      product: "Product 5",
      strike: "$60.00",
      cost: "$25.00",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product: "Product 6",
      cost: "$120.00 - $140.00",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: "Sale",
      product: "Product 7",
      star: "fas fa-star",
      strike: "$50.00",
      cost: "$20.00",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product: "Product 8",
      star: "fas fa-star",
      cost: "$30.00",
    },
  ];

  const [value, setValue] = useState(0);

  return (
    <div>
      <Navbar value={value} />
      <Hero />
      <Grid arrObj={arrObj} setValue={setValue} value={value} />
      <Footer />
    </div>
  );
};

export default App;