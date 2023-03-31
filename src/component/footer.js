import React from "react";
import Youtube from "../Fimg/you.jpg";
import Google from "../Fimg/goo.jpg";
import Facbook from "../Fimg/face.jpg";
import Twitter from "../Fimg/tweter.jpg";
import Instagram from "../Fimg/goo.jpg";

const Footer = () => {
  /**
   * here firstfooter container h2 tag we map that
   */
  const footerhtwotage = [
    { htwotext: "Get to Know Us" },
    { htwotwo: "Store Information" },
    { htwothree: "Suport" },
    { htwofour: "Connect with Us" },
    { htwofive: "© Copyright 2023." },
  ];

  const images = [Youtube, Google, Facbook, Twitter, Instagram];
  
  const pages = ["About Us", "Careers", "Press Releases", "Ecommerce Science"];
  const pagestwo = [
    "Costomer Services",
    "Term & Condition",
    "privacy Policy",
    "Become an Affiliate",
    
  ];

  const pagesthree = [
    "Refund Policy",
    "Deliver Information",
    "Returns Centre",
    "Shopping changes",
    "Help",
  ];
  const pagesFoure = ["Facebook", "Twitter", "Instagram", "YouTube"];
  const pageFive = ["Shop", "Idea", "Blog", "Pricing", "Contact"];

  return (
    <div className="mt-4">
    
      <footer className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwotext}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pages.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* end here first container of footer */}

          {/* second container start here */}
          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwotext}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:white">
              {pagestwo.map((el, i) => {
                return (
                  <a
                    className=" font-medium text-white hover:text-blue-700"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* second container end here */}
          {/* third container start here */}

          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwothree}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pagesthree.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* third container end here */}
          {/* fourth container start here */}

          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwofour}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pagesFoure.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/https://www.youtube.com/watch?v=494trQtUfR0 "
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* fourth container start here */}
      </footer>
      {/* here is another footer container */}
      <footer className="dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            {pageFive.map((el, i) => {
              return (
                <li
                  className=" font-medium text-white hover:text-orange-500"
                  key={i}
                  rel="noopener noreferrer"
                  href="/"
                >
                  {el}
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              {images.map((el, i) => {
                return (
                  <a
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-6 sm:h-6 dark:bg-blue-400 dark:text-gray-900"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    <img src={el} alt="logo" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        {footerhtwotage.map((el, i) => {
          return (
            <span key={i} className="text-white hover:text-orange-500">
              {el.htwofive}
            </span>
          );
        })}
      </div>
    </div>
    // here is footer container end
  );
};

export default Footer;
