"use client";
import { useState, useEffect } from "react";
import React from "react";
import NavBar from "../Navigation/navbar";
import Footer from "../Footer/footer";
import Link from "next/link";
import { Button } from "../MTailwind";

export default function AboutUs() {
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
    <div>
      <title>ASA Prep (test)</title>
      <div className="bg-white font-sans">
        <title>ASA Prep (test)</title>

        <nav
          className={` fixed z-50 lg:grid lg:grid-cols-2 lg:justify-items-center lg:justify-start lg:h-24 h-12 w-full inline-flex ${
            isScrolled
              ? "bg-gray-100 bg-opacity-100 ease-in duration-1000 shadow-lg shadow-gray-500"
              : "bg-transparent ease-out duration-1000"
          } fixed z-10 md:items-center`}
        >
          {/* Hamburger Menu Icon */}
          <div
            className={`lg:hidden flex items-center px-4 md:h-12 
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
            className="font-extrabold lg:text-4xl md:text-2xl text-red-800 lg:justify-self-start lg:ml-10 md:ml-0 ml-7 mt-3 md:mt-0 text-lg flex lg:w-full md:w-full md:items-center justify-center lg:justify-start "
          >
            <span
              className={`  ${isScrolled ? "text-red-800" : "text-gray-700"}`}
            >
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
            className={` hidden lg:flex items-center text-lg space-x-7 font-semibold justify-self-end lg:mr-10 mr-10 ${
              isScrolled ? "text-gray-700" : "text-gray-700"
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
              className="text-red-800  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-red-800 rounded-ee-xl duration-500  "
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
              <button className=" bg-red-800 rounded-full h-12 font-semibold items-center w-[130px]  hover:-translate-y-2 duration-700 transition-all shadow-[.4rem_.4rem_.70rem_rgba(0,0,0,0.65),_-.3rem_-.3rem_1rem_rgba(255,255,255,.25)] active:shadow-[inset_.5rem_.5rem_1rem_rgba(0,0,0,.6),_inset_-.5rem_-.5px_1rem_rgba(239,83,80,.5)] outline-none hover:scale-[1.1]  active:ring-4 active:ring-red-800 focus:outline-none delay-100 ease-in-out ">
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
              className={`absolute md:top-10 top-6 h-52 right-0 font-semibold bg-gray-100 w-full shadow-lg  lg:hidden ${
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
        </nav>
      </div>

      <main className="relative bg-gray-200 h-full">
        <section className="grid grid-rows-1 justify-items-center">
          <div className=" md:pt-32 pt-28 text-red-800 lg:text-5xl md:text-4xl text-3xl font-semibold ">
            Who We Are
          </div>
          <p className="text-gray-700 md:text-xl md:pt-16 pt-12 font-sans font-semibold lg:w-1/2 w-11/12 md:w-9/12 text-sm text-center pb-16">
            ASA Higher Learning Prep has provided accelerated learning programs
            for over 25 years. We believe that educational success begins with
            early education, starting from the infant-toddler stage.
            <span className="text-red-800">
              {" "}
              Our school offers a learning environment designed to help all
              students excel academically. We prepare your child to leave ASA
              Prep with a solid foundation, enabling them to compete in
              classrooms at some of the most prestigious schools in Michigan.{" "}
            </span>
            <br />
            <br />
            The educational program consists of a structured curriculum centered
            around teacher-directed instruction in Reading, Math, Phonics, Early
            Reading & Math Readiness, Handwriting, Science, and more. Students
            experience a full, yet varied day, interspersed with
            teacher-directed lessons, student-directed free choice times,
            extracurricular classes, and more.{" "}
            <span className="text-red-800">
              Homework is also a mandatory component of the ASA Prep program. We
              invite you to partner with us in providing your child with the
              best possible education.
            </span>
          </p>
        </section>
        <section className="bg-white grid justify-items-center">
          <div className="rounded-full rounded-se-none rounded-bl-none bg-red-800 md:h-24 h-16 md:w-64 w-44 md:mt-24 mt-16 place-content-center md:hover:bg-red-600 md:hover:-translate-y-2 duration-700">
            <div className="grid grid-rows-1 justify-center md:text-xl text-sm font-semibold text-white ">
              Schedule Tour!<h3>(123)-456-7890</h3>
            </div>
          </div>
        </section>
        <section className="bg-white grid justify-items-center">
          <div className="grid grid-rows-1 justify-center md:pt-24 pt-16 pb-10">
            <div className="border box-border shadow-lg shadow-gray-500 mx-auto md:w-11/12 w-10/12 rounded-xl md:hover:-translate-y-4 duration-500 ">
              <img
                className=" rounded-xl w-full md:h-80 rounded-b-none object-cover "
                src="https://www.shutterstock.com/image-vector/human-hands-clapping-giving-ovation-600nw-2387793557.jpg"
              />
              <div className="md:text-3xl text-lg text-red-800 font-extrabold flex justify-center mt-7">
                Our Programs
              </div>
              <ul className="list-disc text-gray-700 pt-7 md:text-lg text-sm font-bold  ps-8 pb-10">
                <li>Infant-Toddler (6 wks-2 1/2 Yrs)</li>
                <li>
                  Preschool 1 & 2 (2 1/2 yrs-3 1/2 yrs, completely toilet
                  trained)
                </li>
                <li>
                  Private Pre-kindergarten (4-4 1/2 yr olds) ASA Prep
                  Accelerated Curriculum
                </li>
                <li>GSRP- Free Pre-K Program-High Scope Curriculum</li>
                <li>Jr. Kindergarten (4 - 4 1/2 yrs)</li>
                <li>Grade School (5+ yrs) K-3rd</li>
                <li>Summer Camp (Enrollment begins in April)</li>
                <li>Latchkey Services</li>
              </ul>
            </div>
          </div>
        </section>
        <hr />
        <footer>
          {" "}
          <Footer />
        </footer>
      </main>
    </div>
  );
}
