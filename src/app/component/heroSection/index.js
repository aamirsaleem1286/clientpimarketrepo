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
      <div className={`${montserrat.variable} bg-[#8A348E] h-[250px] flex items-center justify-center`}>
        <h1 className="text-white text-[30px] font-semibold normal-case not-italic w-[500px] text-center">
          Mining crypto is hard.<br />
          Investing in crypto is risky.<br />
          Too many of us are left out of the cryptocurrency revolution…
        </h1>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="font-sans font-semibold text-[#8a348e] text-[54px] leading-[64.8px] normal-case not-italic tracking-normal">
            Pi makes crypto mining easy.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Breakthrough tech allows you to mine Pi on your <br /> phone without draining your battery.
          </p>
          <button className="font-sans font-semibold flex gap-5 items-center text-[14px] leading-[20px] bg-[#8a348e] normal-case not-italic text-white w-[250px] py-2 px-4 rounded-md hover:bg-opacity-90">
            Learn The Tech Behind Pi <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/coin.PNG" // Replace with your image path
            alt="Hero Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Cards Section */}
      <div className='bg-slate-100'>
        <section className="flex justify-center items-center gap-6 py-12">
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
        
{/* New Hero Section with Image on the Left and Text on the Right */}
<section className="flex items-center justify-between bg-[#8A348E] bg-gradient-to-r from-[#8A348E] to-[#423F88] opacity-100 py-12 px-6 md:px-16">
  {/* Left Image */}
  <div className="flex justify-center md:w-1/2">
    <Image
      src="/mobile.PNG" // Replace with your image path
      alt="Hero Image"
      width={300}
      height={200}
      className="rounded-lg"
    />
  </div>

  {/* Right Text */}
  <div className="md:w-1/2 text-center md:text-left space-y-6">
  <h2 className="text-[35px] text-[#f4af47] text-left">
  Download the mobile <br/> app to start mining<br/> today! Join now.    </h2>
    <p className="text-white text-lg">
    Keep your money! Mining Pi is free. All you need is an <br/> invitation from an existing trusted member on the <br/> network. If you have an invitation you can download <br/> the mobile app below.
    </p>
    <Image
      src="/play.PNG" // Replace with your image path
      alt="Hero Image"
      width={500}
      height={150}
      className="rounded-lg"
    />
    {/* <div className="flex">
  <Image
    src="/apple.png" // Replace with your image path
    alt="Hero Image"
    width={500}
    height={150}
    className="rounded-lg"
  /> 
</div> */}

  </div>
</section>


      </div>
    </>
  );
}
