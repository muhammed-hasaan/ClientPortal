'use client'
import { useState } from "react";
import Image from "next/image";
import NavbarLogo from "../../public/HomePageImages/NavbarLogo/logo.png";
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import CategoryImage1 from "../../public/HomePageImages/CategorySectionImages/img1.png"
import CategoryImage2 from "../../public/HomePageImages/CategorySectionImages/img2.png"
import MultiImages from "../../public/HomePageImages/DesignImages/DesignImage.png"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };




   const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: CategoryImage1,
      title: "Inner Peace",
      description: "01 — Bed Room",
    },
    {
      id: 2,
      image: CategoryImage2,
      title: "Cozy Vibes",
      description: "02 — Living Room",
    },
    {
      id: 3,
      image: CategoryImage2,
      title: "Elegant Dining",
      description: "03 — Dining Room",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* ----------------Home Page---------------- */}

      {/* Navbar Component */}
<header className="flex items-center justify-around  p-4 w-full bg-white shadow-md">
        <div className="flex items-center text-[24px]">
          <Image src={NavbarLogo} alt="Navbar Logo" width={60} height={60} />
          <h2 className="text-xl font-bold ml-2">Furniro</h2>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex gap-16 font-bold">
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex gap-6 text-[24px]">
          <FaUser />
          <FaSearch />
          <FaHeart />
          <FaShoppingCart />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden text-[24px] cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Dropdown Menu for Mobile */}
        {menuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-md z-50 animate-slideDown">
            <ul className="flex flex-col items-center  font-bold py-4 p-4">
              <li className="bg-[#FFF3E3] p-4 w-full">Home</li>
              <li className="bg-[#FFF3E3] p-4 w-full mt-2">Shop</li>
              <li className="bg-[#FFF3E3] p-4 w-full mt-2">Blog</li>
              <li className="bg-[#FFF3E3] p-4 w-full mt-2">Contact</li>
            </ul>
            <div className="flex justify-center gap-6 text-[24px] py-4">
              <FaUser />
              <FaSearch />
              <FaHeart />
              <FaShoppingCart />
            </div>
          </div>
        )}
      </header>

      {/* Hero Component */}
      <div
        className="w-full h-[600px] bg-[url('/HomePageImages/HeroSection/HeroBack/HeroBack.jpeg')] bg-cover bg-center flex justify-end items-center pr-[5%] md:pr-[145px]"
      >
        <div className="bg-[#FFF3E3] p-10 max-w-[90%] md:max-w-[600px]">
          <p>New Arrival</p>
          <h1 className="font-bold text-[36px]  md:text-[52px] text-[#B88E2F] leading-tight">
  Discover Our
</h1>
<h1 className="font-bold text-[36px]  md:text-[52px] text-[#B88E2F] -mt-2 sm:-mt-3 md:-mt-4 leading-tight">
  New Collection
</h1>

          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="p-4 bg-[#B88E2F] font-bold text-[14px] mt-6 text-white">BUY NOW</button>
        </div>
      </div>

            {/* Category Component */}

      <div className="flex justify-center items-center flex-col mt-14">
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold  text-[30px]">Browse the Range</h1>
          <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex items-center justify-center flex-wrap mt-10 gap-12">
<div className="flex justify-center items-center flex-col gap-4 font-bold">

            <Image src={CategoryImage1} alt="Navbar Logo" width={350} className="h-96" style={{ borderRadius: '10px' }} />
            <p style={{fontSize:'20px'}}>Dining</p>
</div>
                 <div className="flex justify-center items-center flex-col gap-4 font-bold">

            <Image src={CategoryImage1} alt="Navbar Logo" width={350} className="h-96" style={{ borderRadius: '10px' }} />
            <p style={{fontSize:'20px'}}>Living</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 font-bold">

            <Image src={CategoryImage2} alt="Navbar Logo" width={350} className="h-96" style={{ borderRadius: '10px' }} />
            <p style={{fontSize:'20px'}}>Bedroom</p>
</div>

        </div>
      </div>


      {/* cards Component */}
      

     <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <p className="text-lg mt-2">Choose from our latest collection of quality furniture.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-[90%] mx-auto">
          {Array(6).fill(null).map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={CategoryImage2} alt="Product" width={300} height={200} className="w-full h-[200px] object-cover" />
              <div className="p-4 text-left">
                <h3 className="font-bold text-lg">Chair</h3>
                <p className="mt-1 text-sm text-gray-600">Best Chair of the Season</p>
                <div className="flex items-center justify-between mt-2">
                  <b className="text-[#B88E2F]">RS 5000</b>
                  <del className="text-gray-400">RS 4000</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

 {/* Curesl Component */}
      
<div className="bg-[#FCF8F3] w-[100%] flex justify-center items-center   mt-16">
     <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 bg-[#f9f8f6] w-[80%] gap-10">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="bg-yellow-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-yellow-600 transition">
          Explore More
        </button>
      </div>

      {/* Right Section (Custom Carousel) */}
      <div className="md:w-1/2 relative">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          {/* Image */}
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-auto object-cover rounded-lg"
            width={500}
            height={350}
          />
          {/* Caption */}
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">
              {slides[currentIndex].description}
            </p>
            <h3 className="text-lg font-semibold text-gray-800">
              {slides[currentIndex].title}
            </h3>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute inset-y-0 flex justify-between items-center w-full px-4">
          <button
            onClick={handlePrev}
            className="bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-700 transition"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-700 transition"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
      </div>
      
{/* Multi Images Component */}
   <div className="w-full mt-14 px-4">
  <div className="flex flex-col items-center text-center">
    <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">Share your setup with</p>
    <h1 className="font-bold text-[36px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[50px]">#FuniroFurniture</h1>
  </div>
  <Image 
    src={MultiImages} 
    className="w-full h-auto max-h-[650px] object-cover mt-6"
    alt="Funiro Furniture"
  />
</div>


<footer className="w-full bg-white py-10 px-6 sm:px-8 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-10">
    
    {/* Logo and Address Section */}
    <div className="w-full sm:w-1/2 md:w-1/4">
      <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
      <p className="text-sm text-gray-600">
        400 University Drive Suite 200 Coral Gables,
        <br />
        FL 33134 USA
      </p>
    </div>

    {/* Links Section */}
    <div className="w-full sm:w-1/2 md:w-1/4">
      <h3 className="text-sm font-medium text-gray-500 mb-4">Links</h3>
      <ul className="space-y-2">
        <li>
          <a href="#home" className="text-gray-700 hover:text-black font-bold">Home</a>
        </li>
        <li>
          <a href="#shop" className="text-gray-700 hover:text-black font-bold">Shop</a>
        </li>
        <li>
          <a href="#about" className="text-gray-700 hover:text-black font-bold">About</a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-black font-bold">Contact</a>
        </li>
      </ul>
    </div>

    {/* Help Section */}
    <div className="w-full sm:w-1/2 md:w-1/4">
      <h3 className="text-sm font-medium text-gray-500 mb-4">Help</h3>
      <ul className="space-y-2">
        <li>
          <a href="#payment-options" className="text-gray-700 hover:text-black font-bold">Payment Options</a>
        </li>
        <li>
          <a href="#returns" className="text-gray-700 hover:text-black font-bold">Returns</a>
        </li>
        <li>
          <a href="#privacy-policies" className="text-gray-700 hover:text-black font-bold">Privacy Policies</a>
        </li>
      </ul>
    </div>

    {/* Newsletter Section */}
    <div className="w-full sm:w-1/2 md:w-1/4">
      <h3 className="text-sm font-medium text-gray-500 mb-4">Newsletter</h3>
      <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white font-bold rounded hover:bg-opacity-90 w-full sm:w-auto"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t border-gray-200 mt-10 pt-6 text-center">
    <p className="text-sm text-gray-500">2023 Funiro. All rights reserved</p>
  </div>
</footer>



    </div>
  );
}