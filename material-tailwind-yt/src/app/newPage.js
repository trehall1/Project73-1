"use client";
import React from "react";
import Link from "next/link";

export default function NewPage() {
  return (
    <div className="bg-white font-sans">
      <title>New Page</title>
      <header className="h-24 bg-gray-200 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-800">Welcome to the New Page</h1>
      </header>
      <main className="p-10">
        <p className="text-lg text-gray-700">
          This is the content of the new page. You can add more information here.
        </p>
        <Link href="/" className="text-red-800 underline">
          Go back to Home
        </Link>
      </main>
    </div>
  );
}