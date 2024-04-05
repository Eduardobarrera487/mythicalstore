import Image from "next/image";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Hero2 from "./_components/Hero2";
import ProductSection from "./_components/ProductSection";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero2/>
      <Hero/>
      <Footer/>
      <ProductSection/>
      {/* Latest product Section */}
      {/* Projecto Source code */}
      {/* Icons Packs */}
    </div>
  )
}
