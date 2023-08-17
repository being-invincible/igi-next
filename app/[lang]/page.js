"use client"
import GetDictionary from "../utils/dictionaries"
import Navbar from "../components/Navbar"
import { useState } from "react";
import About from "../scenes/About";
import Product from "../scenes/Product";
import HomeCarousel from "../scenes/homeCarousel";

export default function Page({ params: { lang } }) {
  const dict = GetDictionary(lang) // en
  const [selectedPage, setSelectedPage] = useState('home');
  return (
    <div className='font-montserrat'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} home={dict.home} about={dict.about} products={dict.products} contact={dict.contact} services={dict.services} lang={dict.lang} />
      <HomeCarousel dict={dict}/>
      <About setSelectedPage={setSelectedPage} aboutTitle={dict.aboutTitle}
        aboutContent="Imran Gulf Industries F. Co. is a leading provider of tailor-made solutions and premium quality products, founded in Saudi Arabia with a decade-long track record of excellence. We understand the importance of providing our customers with the very best in terms of quality, comfort, and style. Our specialization in supplying hotel linens to the hospitality industry and luxury bed linens to discerning households reflects our commitment to meeting the highest standards of elegance, luxury, and beauty. Whether you are a hotelier looking to elevate your guests' experience, or a household with an eye for luxury and comfort, we have the perfect solutions for you."
        button02={dict.button02} button03={dict.button03} />
      <Product products={dict.products} productsContent={dict.productsContent} dict={dict} />
      
    </div>
  )
}