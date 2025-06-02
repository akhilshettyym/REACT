"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [input, setInput] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`Prediction/${input}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white">Enter your name:</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          className="px-4 py-2 text-white placeholder-white border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="name"
          placeholder="Enter your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600 transition duration-300"
        >
          Predict Data
        </button>
      </form>
    </div>
  );
}
