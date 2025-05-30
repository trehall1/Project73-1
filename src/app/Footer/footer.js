"use client";
import React from "react";
import Link from "next/link";
import Card from "@material-tailwind/react";
export default function Footer() {
  return (
    <footer>
      <div className="md:flex justify-around text-red-800 bg-white pl-5 pb-10 pt-10">
        <div>
          <div className="md:text-lg font-semibold">Contact Us</div>
          <div className="text-sm pt-5">
            <p>20433 Livernois,</p>
            <p>Detroit, Michigan 48221</p>
            <p> Phone: (123) 456 7689</p>
            <p>Fax:(987) 654 3210</p>
          </div>
        </div>
        <div>
          <div className="md:text-lg font-semibold md:mt-0 mt-10 ">
            Join Mailing List:
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              fetch("/api/mailing-list", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
              })
                .then((response) => {
                  if (response.ok) {
                    alert("Thank you for joining our mailing list!");
                  } else {
                    alert("Something went wrong. Please try again.");
                  }
                })
                .catch(() => alert("Error connecting to the server."));
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-60 h-10 mt-5 pl-3 bg-gray-100 shadow-lg placeholder:italic"
              required
            />
            <button
              type="submit"
              className="ml-3 bg-red-800 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-500"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <div className="md:text-lg font-semibold md:mt-0 mt-10">Quick Links</div>
          <div className="text-sm pt-5 font-semibold">
            <Link
              href="/"
              className="flex hover:text-red-600 hover:-translate-y-1 duration-700 w-max mt-2"
            >
              Schedule Tour
            </Link>
            <Link
              href="/DressCode"
              className="flex hover:text-red-600 hover:-translate-y-1 duration-700 w-max mt-2"
            >
              Dress Code
            </Link>
          </div>
        </div>
      </div>
      <div className=" text-[12px] md:text-sm text-red-800 md:grid md:grid-cols-1 justify-items-center bg-white md:pt-5 pb-5 md:pl-0 pl-5 ">
        © Copyright 2025 ASA Higher Learning Prep. All rights reserved.
      </div>
    </footer>
  );
}
