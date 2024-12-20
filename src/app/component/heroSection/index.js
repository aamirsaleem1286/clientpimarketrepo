import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { TfiMobile } from "react-icons/tfi";
import { MdOutlineDownloading } from "react-icons/md";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
});


// Card Component
const Card = ({ icon, title, description }) => {
  return (
    <div className="text-white border-2 border-white bg-white shadow-2xl rounded-lg p-4 text-center flex flex-col items-center w-[250px] h-[200px]">
      <div className="flex justify-center items-center w-12 h-12 mx-auto rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg text-black font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default function Home() {
  

  return (
    <>

   <div
  className={`${montserrat.variable} bg-[#8A348E] mt-[-5px]  h-auto lg:h-[250px] flex items-center justify-center p-6`}
>
  <h1 className="text-white text-[20px] sm:text-[24px]   md:text-[28px] lg:text-[30px] font-semibold normal-case not-italic max-w-[90%] md:max-w-[500px] text-center leading-relaxed">
    Mining crypto is hard.<br />
    Investing in crypto is risky.<br />
    Too many of us are left out of the cryptocurrency revolution…
  </h1>
</div>

<section className="flex flex-col-reverse md:flex-row items-center justify-around  px-4 sm:px-8 lg:px-16 py-6">
  <div className="md:w-1/2 space-y-6 text-center md:text-left" id="cryptoDiv">
    <h1 className="font-sans font-semibold text-[#8a348e] text-[32px] sm:text-[40px] lg:text-[54px] leading-[1.2]">
      Pi makes crypto mining easy.
    </h1>
    <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
      Breakthrough tech allows you to mine Pi on your 
      <br className="hidden sm:block" /> phone without draining your battery.
    </p>
    <button className="font-sans font-semibold flex gap-2 items-center text-sm sm:text-base bg-[#8a348e] text-white w-full sm:w-auto py-2 px-4 sm:py-3 sm:px-6 rounded-md hover:bg-opacity-90 transition sm:rounded-lg sm:py-2 sm:px-4 md:w-auto md:py-3 md:px-5 lg:w-auto lg:py-4 lg:px-6 m-2">
  Learn The Tech Behind Pi <FaArrowRight className="text-white" />
</button>


  </div>


  <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
    <Image
      src="/coin.PNG" 
      alt="Hero Image"
      width={350}
      height={320}
      className="rounded-lg object-contain"
    />
  </div>
</section>

      <div className='bg-slate-100'>
      <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 py-12 px-4 sm:px-8">
  <Card
    icon={<MdOutlineDownloading className="text-[#8A348E]" size={36} />}
    title="Decentralized"
    description="Secure, Immutable, non-counterfeitable and interoperable digital money."
  />
  <Card
    icon={<TfiMobile className="text-[#8A348E]" size={36} />}
    title="Mobile First"
    description="Works on your mobile phone and does not drain your battery."
  />
  <Card
    icon={<TbWorld className="text-[#8A348E]" size={36} />}
    title="User & Planet-Friendly"
    description="Easy to use, secure at scale, without the massive electrical waste."
  />
</section>


<section className="flex flex-col md:flex-row items-center justify-between bg-[#8A348E] bg-gradient-to-r from-[#8A348E] to-[#423F88] opacity-100 py-12 px-6 md:px-16">
  <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
    <Image
      src="/mobile.PNG" 
      alt="Hero Image"
      width={300}
      height={200}
      className="rounded-lg"
    />
  </div>

  <div className="w-full md:w-1/2 text-center md:text-left space-y-6 px-4 sm:px-8 lg:px-12">
    <h2 className="text-[24px] sm:text-[30px] lg:text-[35px] text-[#f4af47] leading-tight">
      Download the mobile <br className="hidden sm:block" /> app to start mining
      <br className="hidden sm:block" /> today! Join now.
    </h2>
    <p className="text-white text-base sm:text-lg leading-relaxed">
      Keep your money! Mining Pi is free. All you need is an <br className="hidden sm:block" /> invitation from an existing trusted member on the <br className="hidden sm:block" /> network. If you have an invitation you can download <br className="hidden sm:block" /> the mobile app below.
    </p>
    <div className="flex justify-center md:justify-start">
      <div className="mt-6 w-40 h-auto sm:w-48 md:w-56 lg:w-64">
        <Image
          src="/play.PNG"
          alt="Play Store Download"
          width={256}
          height={80}
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  </div>
</section>
      </div>
    </>
  );
}
