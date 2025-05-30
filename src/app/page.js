"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Carousel, Typography } from "./MTailwind";
import NavBar from "./Navigation/navbar";
import Footer from "./Footer/footer";
import Head from "next/head";
import GoogleMap from "./MapComponent";
import MapComponent from "./MapComponent";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);
  const imageRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (imageRef.current) {
      const containerWidth = imageRef.current.parentElement.offsetWidth;
      const imageWidth = imageRef.current.offsetWidth;
      setMaxTranslateX(containerWidth - imageWidth);
    }
  }, []);
  return (
    <div className="bg-white font-sans">
      <Head>
        {" "}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ASA Prep (test)</title>
      </Head>
      <div>
        <NavBar />
      </div>
      <main className="relative ">
        <div className="lg:hidden md:hidden shadow-lg shadow-gray-700 bg-black/50 ">
          <img
            src="/image.jpg"
            alt="Static image for smaller screens"
            className="w-full h-80 lg:h-auto object-cover brightness-75 "
          />
        </div>
        <div className="hidden md:block">
          <Carousel
            transition={{ duration: 2 }}
            className="h-[600px] shadow-lg shadow-gray-700 "
            loop
          >
            <div className="relative h-full w-full">
              <img
                src="/image.jpg"
                alt="image 1"
                className="h-[600px] w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-start bg-black/50">
                <div className="w-3/4 mt-[300px] text-center lg:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 md:text-4xl lg:text-5xl justify-self-start ml-20 max-[1450] "
                  >
                    Learn With Us
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className=" mb-12 w-[400px] text-left ml-20 justify-self-start lg:text-xl md:text-lg"
                  >
                    Applications are now open! Schedule a tour of our great
                    school today.
                  </Typography>
                  <div className="flex justify-start gap-2 ml-[75px] ">
                    <Link href="/">
                      {" "}
                      <Button
                        size="lg"
                        className="bg-red-800 rounded-full hover:bg-red-600 hover:-translate-y-1 duration-500"
                      >
                        Schedule A Tour!
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full w-full">
              <img
                src="https://img1.wsimg.com/isteam/stock/107311/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1534,m"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
                <div className="w-3/4 mt-[210px] lg:w-2/4 pl-20">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Join a community of lifelong learners!
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    Where excellence in early education still matters!
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://img1.wsimg.com/isteam/ip/2a469d4c-a560-419f-ae18-ce59934d474a/87b923f4-edfd-44c5-a75d-27c6cc43d5ce.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1534,m"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
                <div className="w-3/4 lg:w-2/4 pl-20 pb-20 ">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    25 Years of Excellence
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    Inside every child there is a genius waiting to bloom!
                  </Typography>
                  <div className="flex gap-2">
                    <Link href="/Enrollment">
                      <Button
                        size="lg"
                        className="bg-red-800 rounded-full hover:-translate-y-1 hover:bg-red-600 duration-500"
                      >
                        Enroll!
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>{" "}
        </div>
      </main>
      <section className=" grid place-items-center lg:shadow-gray-400 lg:bg-gray-100 h-36 lg:rounded-full lg:-mt-3 relative w-9/12 mx-auto lg:shadow-xl lg:p-0 pt-10 ">
        <div className="text-red-800 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-44 font-semibold text-sm lg:text-2xl">
          <div className="lg:flex lg:items-center lg:space-x-7 md:space-x-0 -space-x-3">
            <Link href="/Enrollment">
              {" "}
              <img
                src="https://brightstarschools.org/images/icon-enroll-with-us.svg"
                className="lg:hover:animate-pulse lg:hover:-translate-y-3 duration-500 md:size-28 lg:mb-0 mb-3"
              />
            </Link>{" "}
            <Link href="/Enrollment" className="text-lg">
              Enroll With Us
            </Link>
          </div>

          <div className="lg:flex lg:items-center lg:space-x-7 md:space-x-4 space-x-1">
            <Link href="/AboutUs">
              <img
                src="https://brightstarschools.org/images/icon-teach-with-us.svg"
                className="lg:hover:animate-pulse lg:hover:-translate-y-3 duration-500 lg:mb-0 mb-3 md:size-28 "
              />
            </Link>
            <Link href="/AboutUs" className="text-lg">
              Programs
            </Link>
          </div>
        </div>
      </section>
      <section className="lg:grid lg:grid-rows-2 justify-items-center mb-24 ">
        <div className="flex justify-center lg:text-5xl text-red-800 md:text-4xl md:pt-56 lg:pt-24 pt-48 font-sans font-semibold text-3xl lg:mt-0 mt-10 ">
          Your Future Is Bright!
        </div>
        <img
          className="lg:hidden pt-10 transition-transform duration-1000 ease-out lg:mr-auto size-2/12"
          src="https://brightstarschools.org/files/_cache/96101df05503d78fd00cfb0dd08d7997.jpeg"
        />
        <p className=" lg:text-xl text-gray-700 font-sans font-semibold lg:w-1/2 w-11/12 text-center lg:mt-0 mt-10 text-sm">
          ASA Higher Learning Prep has provided accelerated learning programs
          for over 25 years.{" "}
          <span className="text-red-800">
            We believe that educational success begins with early education,
            starting from the infant-toddler stage!
          </span>
          <br className=""></br>
          <br className=""></br>
          Our school offers a learning environment designed to help all students
          excel academically.{" "}
          <span className="text-red-800">
            We prepare your child to leave ASA Prep with a solid foundation,
            enabling him or her to compete in classrooms at some of the most
            prestigious schools in Michigan.
          </span>
        </p>
        <img
          ref={imageRef}
          className=" hidden lg:block pt-10 transition-transform duration-1000 ease-out mr-auto"
          src="https://brightstarschools.org/files/_cache/96101df05503d78fd00cfb0dd08d7997.jpeg"
          style={{
            transform: `translateX(${Math.min(
              scrollY * 0.78,
              maxTranslateX
            )}px) `,
          }}
        />
      </section>
      <section
        ref={sectionRef}
        className={` transition-opacity transform duration-1000 delay-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-gray-700 lg:grid lg:grid-cols-2 justify-items-center bg-gray-200 lg:pt-0 pt-10 lg:pb-10 pb-10 ">
          <img
            className="rounded-3xl lg:w-9/12 w-10/12 lg:mt-20 lg:mb-20 shadow-2xl shadow-gray-600 object-cover"
            src="/infant-pic.jpg"
          />
          <div>
            <div className="flex justify-center text-2xl font-extrabold text-red-800 pt-12 lg:pt-24 lg:mr-44 ">
              Our Infant-Toddler Program
            </div>
            <p className="flex items-center md:w-9/12 lg:text-2xl md:justify-self-center text-md font-semibold text-center lg:text-left pt-10 lg:pt-12 lg:ml-14 lg:font-medium ">
              We offer a great infant-toddler program for children ages 6 weeks
              - 2 1/2 years old (Not potty-trained).
            </p>
            <Link href="/AboutUs" className="flex justify-center">
              <Button
                size="lg"
                className="bg-red-800 rounded-full mt-16 mb-7 lg:hover:-translate-y-1 lg:hover:bg-red-600 duration-500"
              >
                LEARN MORE!
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className={` transition-opacity transform duration-1000 delay-[1400ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className=" text-gray-700 lg:grid lg:grid-cols-2 grid grid-rows-1 justify-items-center bg-white  ">
          <img
            className="lg:hidden w-10/12  rounded-3xl mt-20 h-48 md:h-96 shadow-2xl shadow-gray-600 object-cover"
            src="/black-girl.jpg"
          />
          <div>
            {" "}
            <div className="flex justify-center justify-self-center text-center text-2xl font-extrabold text-red-800 pt-12 lg:pt-24 lg:w-10/12 w-9/12  ">
              Structured Academic Pre-School & Advanced Pre-K
            </div>
            <p className="flex items-center md:w-11/12 w-10/12 lg:text-2xl md:justify-self-center font-semibold text-center justify-self-center lg:text-left pt-12 lg:ml-14 lg:font-medium lg:mb-0 -mb-7">
              ASA Prep preschoolers are reading, writing, and beyond before
              entering Kindergarten!
            </p>{" "}
          </div>
          <img
            className=" hidden lg:block w-9/12 rounded-3xl h-80 mt-20 shadow-2xl shadow-gray-600  object-cover"
            src="/black-girl.jpg"
          />
        </div>
        <section
          className={` transition-opacity transform duration-1000 delay-[2100ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className=" text-gray-700 mt-24 md:mt-28 lg:grid lg:grid-cols-2 justify-items-center bg-gray-200 lg:pt-0 pt-10 lg:pb-0 pb-10">
            <img
              className="rounded-3xl lg:w-9/12 w-10/12 lg:mt-20 shadow-2xl  shadow-gray-600 object-cover object-left-top"
              src="/k-3 group.jpg"
            />
            <div>
              <div className="flex justify-center justify-self-center lg:justify-start w-11/12 lg:w-10/12 lg:ml-14 text-2xl text-center font-extrabold text-red-800 pt-12 lg:pt-24 ">
                Kindergarten Through 3rd Grade
              </div>
              <p className="flex items-center md:w-9/12 w-11/12 lg:text-2xl justify-self-center text-center lg:text-left pt-12   font-semibold lg:font-medium ">
                First rate academic curriculum based on accelerated learning.
                Our curriculum is second to none in preparing our students to be
                &quot;A Step Ahead&quot; of the rest!
              </p>
              <a href="/Enrollment" className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-red-800 rounded-full mt-16  mb-7 lg:mb-20 lg:hover:-translate-y-1 lg:hover:bg-red-600 duration-500"
                >
                  ENROLL TODAY!
                </Button>
              </a>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="text-red-800 lg:text-5xl md:text-4xl text-3xl font-extrabold flex justify-center text-center mt-20">
          Empowering Children To Excel In Learning
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-7 justify-items-center mt-20 w-10/12 lg:mt-28 lg:w-11/12 lg:ml-[60] mx-auto ">
          <div className="text-gray-700 border-hidden box-border rounded-xl shadow-lg shadow-gray-500 lg:hover:-translate-y-4 duration-500 ">
            <div>
              <img
                className="rounded-xl w-full lg:h-80 rounded-b-none object-cover object-left-top"
                src="https://img1.wsimg.com/isteam/ip/2a469d4c-a560-419f-ae18-ce59934d474a/5c9fc357-c169-49ee-a0c4-223833e833de.jpg/:/cr=t:0%25,l:16.66%25,w:66.68%25,h:100%25/rs=w:730,h:730,cg:true"
              />
            </div>
            <div className="grid grid-rows-1">
              <div className="text-2xl text-red-800 font-extrabold flex justify-center mt-8 ">
                Dedicated Educators
              </div>
              <p className="w-11/12 pt-5 font-bold text-center pl-7 lg:mb-0 mb-7">
                The staff are qualified, committed, and dedicated to educating
                our children. Our teachers are passionate about the subjects
                they teach and bring this enthusiasm into their lessons.
              </p>
            </div>
          </div>
          <div className="border box-border shadow-lg shadow-gray-500 rounded-xl lg:hover:-translate-y-4 duration-500 mt-16 lg:mt-0 ">
            <img
              className=" rounded-xl w-full lg:h-80 rounded-b-none "
              src="https://gooshkoshkids.com/wp-content/uploads/2022/03/oshkosh-summer-camps.jpg"
            />
            <div className="text-2xl text-red-800 font-extrabold flex justify-center mt-7">
              Summer Camp Programs
            </div>
            <ul className="list-disc text-gray-700 pt-5 font-bold pl-10 pb-10">
              <li>Academic Summer Camps (up to 12 years old)</li>
              <li>Weekly Field Trips</li>
              <li>Summer Talent Showcase</li>
              <li>Year-Round Latchkey Services</li>
              <li>Transportation Available</li>
            </ul>
          </div>
          <div className="border box-border rounded-xl shadow-lg shadow-gray-500 lg:hover:-translate-y-4 duration-500 mt-16 lg:mt-0">
            <img
              className="w-full rounded-xl lg:h-80 rounded-b-none object-cover"
              src="https://media.istockphoto.com/id/494262265/photo/ballerina.jpg?s=612x612&w=0&k=20&c=3zPbogat6oJlY3DMQHd-N47esiuD2tPKGCnqqr5xztw="
            />
            <div className="text-2xl text-red-800 flex justify-center mt-7 font-extrabold">
              Extracurricular Activities
            </div>
            <ul className="list-disc text-gray-700 pl-10 pt-5 font-bold lg:mb-0 mb-7">
              <li>Ballet</li>
              <li>Jazz</li>
              <li>Karate</li>
              <li>Spanish</li>
              <li>Introduction to Gymnastics</li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="mt-28 "></hr>
      {/* <MapComponent  /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

//   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//     <Image
//       className="dark:invert"
//       src="/next.svg"
//       alt="Next.js logo"
//       width={180}
//       height={38}
//       priority
//     />
//     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//       <li className="mb-2">
//         Get started by editing{" "}
//         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//           src/app/page.js
//         </code>
//         .
//       </li>
//       <li>Save and see your changes instantly.</li>
//     </ol>

//     <div className="flex gap-4 items-center flex-col sm:flex-row">
//       <a
//         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           className="dark:invert"
//           src="/vercel.svg"
//           alt="Vercel logomark"
//           width={20}
//           height={20}
//         />
//         Deploy now
//       </a>
//       <a
//         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Read our docs
//       </a>
//     </div>
//   </main>
//   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/file.svg"
//         alt="File icon"
//         width={16}
//         height={16}
//       />
//       Learn
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/window.svg"
//         alt="Window icon"
//         width={16}
//         height={16}
//       />
//       Examples
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="/globe.svg"
//         alt="Globe icon"
//         width={16}
//         height={16}
//       />
//       Go to nextjs.org →
//     </a>
//   </footer>
// </div>
