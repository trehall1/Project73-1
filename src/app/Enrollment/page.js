"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Typography, Button } from "../MTailwind";
import NavBar from "../Navigation/navbar";
import Footer from "../Footer/footer";

export default function Enrollment() {
  const application = [
    {
      name: "Application Form",
      imageUrl:
        "https://www.jgsc.k12.in.us/images/easyblog_articles/30/registration.png",
      link: "https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/Application%20for%20Admission%20(Preschool%20%26%20Grade%20S.pdf?ver=1663618705847",
    },
  ];
  const health = [
    {
      name: "Health Forms",
      imageUrl:
        "https://img.freepik.com/premium-vector/medical-health-care-vector-logo-design-pharmacy-doctor-consultant-medical-checkup_989520-1234.jpg?semt=ais_hybrid",
      link: "https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/Health%20Appraisal%20form.pdf?ver=1663618705848",
    },
  ];

  const contract = [
    {
      name: "Contract Forms",
      imageUrl:
        "https://img.freepik.com/premium-photo/light-background-wooden-cubes-word-contract-is-written-business-concept_384948-6480.jpg?w=360",
      link: "https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/Child%20Information%20Card.pdf?ver=1663618705848",
    },
  ];

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
    <div className="font-sans bg-white">
      <title>ASA Prep (test)</title>
      <div>
        <NavBar />
      </div>
      <main className="relative ">
        {" "}
        <div className="relative shadow-lg shadow-gray-700 ">
          <img
            src="https://wallpapers.com/images/featured/back-to-school-background-z4xqrohye7r38or2.jpg"
            alt="Enrollment"
            className="md:w-full lg:h-[750px] h-[300px]  md:h-[500px] object-cover-top brightness-50 "
          />

          <div className="hidden md:block text-white absolute inset-0 place-items-start mb-4 text-3xl md:text-4xl lg:text-5xl md:mt-52 mt-20 ml-5 md:ml-20">
            <div className="w-3/4 lg:mt-40 lg:w-2/4">
              <Typography className="font-extrabold mb-4 text-2xl md:text-4xl lg:text-5xl ">
                Enroll With Us!
              </Typography>
              <Typography className=" mb-12 lg:w-[500px] md:w-[450px] text-left lg:text-xl md:text-lg text-sm font-medium ">
                We welcome students of all abilities in grades TK - 3rd to
                enroll in our school.
              </Typography>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-white">
        <section className="md:grid md:grid-rows-2 justify-items-center mb-20 ">
          <div className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-semibold text-red-800 md:pt-24 pt-20">
            Enrollment Forms
          </div>
          <p className="lg:text-xl md:text-lg text-gray-700 text-center font-semibold mt-10 lg:mt-10 md:mt-5 lg:w-4/6 md:w-9/12 md:p-0 p-3">
            To enroll all forms must be completed and returned to the school.
            For children 6 weeks to Kindergarten, a valid Health Appraisal form
            must be completed by the child&apos;s physician.{" "}
            <span className="text-red-700">
              Students Kindergarten-3rd grades, must submit a School Age Health
              Statement (completed by the Parent).
            </span>
          </p>
          <img
            ref={imageRef}
            className="pt-10  md:pt-16 transition-transform duration-700 ease-out mr-auto md:size-max size-3/12"
            src="https://brightstarschools.org/files/_cache/96101df05503d78fd00cfb0dd08d7997.jpeg"
            style={{
              transform: `translateX(${Math.min(
                scrollY * 0.78,
                maxTranslateX
              )}px)`,
            }}
          />
        </section>
        <div
          ref={sectionRef}
          className={` lg:grid lg:grid-cols-3 justify-items-center md:mt-28 transition-opacity transform duration-1000 delay-700 ease-out lg:space-y-0 md:space-y-24 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {application.map((application) => (
            <div key={application.name} className="group [perspective:1000px]">
              <div className=" relative md:h-72 h-60 md:w-96 w-11/12 justify-self-center border-hidden box-border rounded-xl shadow-lg shadow-gray-500 transition [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000  ">
                <div className=" h-full w-full [backface-visibility:hidden] ">
                  {application.imageUrl && (
                    <img
                      src={application.imageUrl}
                      alt={application.name}
                      className="h-full w-full rounded-xl shadow-black/40"
                    />
                  )}

                  <h2 className="flex justify-center text-red-700 font-bold pt-3 text-2xl">
                    {application.name}
                  </h2>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className=" flex min-h-full flex-col  justify-center">
                    <Link href={application.link}>
                      <Button className=" bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px] w-full bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>APPLY TODAY!</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/Email%20Address%20Request%20(1).pdf?ver=1663618705848"
                      className="mt-4"
                    >
                      <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px] w-full  bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>Email Request</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {health.map((health) => (
            <div key={health.name} className="group [perspective:1000px] ">
              <div className=" relative md:h-72 h-60 md:w-96 w-11/12  justify-self-center border-hidden box-border rounded-xl shadow-lg shadow-gray-500 transition [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 md:mt-0 mt-20  ">
                <div className=" h-full w-full [backface-visibility:hidden] ">
                  {health.imageUrl && (
                    <img
                      src={health.imageUrl}
                      alt={health.name}
                      className="h-full w-full rounded-xl shadow-black/40"
                    />
                  )}

                  <h2 className="flex justify-center text-red-700 font-bold pt-3 text-2xl">
                    {health.name}
                  </h2>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className=" flex min-h-full flex-col justify-center ">
                    <Link href={health.link}>
                      <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px] w-full bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>Health Appraisal Form</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/School%20Age%20Child%20Health%20Statement.pdf?ver=1663618705848"
                      className="mt-4"
                    >
                      <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px] w-full  bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>School/Age Health Statement</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/Parent%20Notification%20of%20On%20Site%20Licensing%20Book.pdf?ver=1663618705848"
                      className="mt-4"
                    >
                      <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px]  w-full  bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>Parent On-Site Licensing Book </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {contract.map((contract) => (
            <div key={contract.name} className="group [perspective:1000px] ">
              <div className=" relative mt-20 md:mt-0 md:h-72 h-60 md:w-96 w-[285px] justify-self-center border-hidden box-border rounded-xl shadow-lg shadow-gray-500 transition [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000  ">
                <div className=" h-full w-full [backface-visibility:hidden] ">
                  {contract.imageUrl && (
                    <img
                      src={contract.imageUrl}
                      alt={contract.name}
                      className="h-full w-full rounded-xl shadow-black/40"
                    />
                  )}

                  <h2 className="flex justify-center text-red-700 font-bold pt-3 text-2xl">
                    {contract.name}
                  </h2>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 px-5 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className=" flex min-h-full flex-col justify-center">
                    <Link href={contract.link}>
                      <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px] text-[10px] w-full bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>Child Information Card</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/Wee%20Prep%20School%20Contract.docx?ver=1663618705980"
                      className="mt-4"
                    >
                      <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px] text-[10px] w-full  bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>
                          Wee Prep Contract
                          <span className="text-[8px]">Download</span>
                        </span>
                      </Button>
                    </Link>
                    <Link
                      href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/2022%20-%202023%20ASA%20SCHOOL%20CONTRACT.docx?ver=1663618705980"
                      className="mt-4"
                    >
                      <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px] text-[10px] w-full bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>
                          ASA Prep Contract
                          <span className="text-[8px]">Download</span>
                        </span>
                      </Button>
                    </Link>
                    <Link
                      href="https://img1.wsimg.com/blobby/go/2a469d4c-a560-419f-ae18-ce59934d474a/downloads/2022%20-%202023%20ASA%20Prep%20School%20Sibling%20Contract.docx?ver=1663618705980"
                      className="mt-4"
                    >
                      <Button className="bg-red-800 hover:bg-red-600 rounded-full font-bold md:text-[16px] text-[10px] w-full bg-gradient-to-r from-red-200 via-red-500 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 px-5 py-2.5 text-center me-2 mb-2 ">
                        <span>
                          ASA Prep Sibling Contract
                          <span className="text-[8px]">Download</span>
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="mt-32"></hr>
      <div className="mt-10">
        <Footer />
      </div>
      {/* <h1 className="text-black">
        I WANT TO work on Quick links on Footer or Contact popup on footer!!!!
      </h1> */}
    </div>
  );
}
