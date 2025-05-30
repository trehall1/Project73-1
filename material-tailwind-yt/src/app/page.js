"use client";
import { Typography } from "./MTailwind";

export default function NewPage() {
  return (
    <div className="bg-white font-sans">
      <title>New Page</title>
      <main className="p-10">
        <Typography variant="h1" color="red" className="text-4xl mb-4">
          Welcome to the New Page!
        </Typography>
        <Typography variant="lead" color="gray" className="text-lg">
          This is the content of the new page. You can add more components and styles as needed.
        </Typography>
      </main>
    </div>
  );
}