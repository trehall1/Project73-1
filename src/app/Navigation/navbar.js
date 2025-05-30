"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../MTailwind";
import Head from "next/head";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white font-sans">
      <Head>
        {" "}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ASA Prep (test)</title>
      </Head>

      <section
        className={` fixed z-50 top-0 left-0 lg:grid lg:grid-cols-2 lg:justify-items-center md:justify-start lg:h-24 h-12 w-full inline-flex  ${
          isScrolled
            ? "bg-gray-100 bg-opacity-100 ease-in duration-1000 shadow-lg shadow-gray-500 "
            : "bg-transparent ease-out duration-1000"
        } fixed z-10 lg:items-center `}
      >
        {/* Hamburger Menu Icon */}
        <div
          className={`lg:hidden flex items-center px-4 h-12
          ${isScrolled ? "bg-gray-700" : "bg-red-700"} `}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-100 hover:text-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
        <Link
          href="/"
          className=" font-extrabold lg:text-4xl md:text-2xl text-red-800 lg:justify-self-start lg:ml-10 ml-7 md:ml-0 mt-3 md:mt-0 text-lg flex lg:w-full md:w-full md:items-center justify-center lg:justify-start"
        >
          <span className={`${isScrolled ? "text-red-800" : "text-white"}`}>
            ASA
          </span>{" "}
          <span
            className={`pl-2.5 ${
              isScrolled ? "text-gray-700" : "text-red-800"
            }`}
          >
            Higher Learning Prep
          </span>{" "}
        </Link>

        {/* Desktop Menu */}
        <div
          className={` hidden lg:flex items-center text-lg space-x-7 font-semibold justify-self-end mr-10 lg:mr-10  ${
            isScrolled ? "text-gray-700" : "text-gray-100"
          }`}
        >
          <Link
            href="/"
            className=" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 hover:text-white rounded-ee-xl duration-500 "
          >
            Home
          </Link>
          <Link
            href="/AboutUs"
            className="text-red-800   transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-red-800 rounded-ee-xl duration-500  "
          >
            About Us
          </Link>
          <Link
            href="/"
            className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 hover:text-white rounded-ee-xl duration-500"
          >
            Schedule Tour
          </Link>
          <Link href="/Enrollment">
            {" "}
            <button className=" bg-red-800 rounded-full h-12 font-semibold items-center w-[130px] hover:-translate-y-2 transition-all shadow-[.4rem_.4rem_.70rem_rgba(0,0,0,0.65),_-.3rem_-.3rem_1rem_rgba(255,255,255,.25)] active:shadow-[inset_.5rem_.5rem_1rem_rgba(0,0,0,.6),_inset_-.5rem_-.5px_1rem_rgba(239,83,80,.5)] outline-none hover:scale-[1.1]  active:ring-4 active:ring-red-800 focus:outline-none delay-100 ease-in-out duration-700 ">
              {" "}
              <span className={`${isScrolled ? "text-white" : "text-white"}`}>
                Enroll Today!
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}

        <div
          className={`absolute top-6 md:top-2 left-0 w-full bg-gray-900 shadow-lg transform transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className={`absolute md:top-10 top-6 h-52 right-0 font-semibold bg-gray-100 w-full shadow-lg lg:hidden ${
              isScrolled ? "text-gray-700" : "text-gray-700"
            }`}
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                href="/"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 hover:text-white rounded-ee-xl duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/AboutUs"
                className="text-red-800 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-red-800 rounded-ee-xl duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/"
                className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 hover:text-white rounded-ee-xl duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Tour
              </Link>
              <Link href="/Enrollment" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-red-800 rounded-full h-12 font-semibold items-center w-[130px] hover:-translate-y-2 transition-all shadow-[.4rem_.4rem_.70rem_rgba(0,0,0,0.65),_-.3rem_-.3rem_1rem_rgba(255,255,255,.25)] active:shadow-[inset_.5rem_.5rem_1rem_rgba(0,0,0,.6),_inset_-.5rem_-.5px_1rem_rgba(239,83,80,.5)] outline-none hover:scale-[1.1] active:ring-4 active:ring-red-800 focus:outline-none delay-100 ease-in-out duration-700">
                  <span
                    className={`${isScrolled ? "text-white" : "text-white"}`}
                  >
                    Enroll Today!
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
