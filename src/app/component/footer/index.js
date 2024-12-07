import Image from 'next/image';

export default function Footer() {
  return (
   <>
  <footer className="flex flex-col sm:flex-row justify-around items-center p-6 bg-gray-800 text-white space-y-4 sm:space-y-0">
  {/* Links Section */}
  {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-16"> */}
    {/* Column 1 */}
    <div className="flex flex-col space-y-2 text-center sm:text-left">
      <a href="#link3" className="hover:text-[#8A348E]">
        Pi Whitepaper
      </a>
      <a href="#link3" className="hover:text-[#8A348E]">
        Support & FAQ
      </a>
      <a href="#link3" className="hover:text-[#8A348E]">
        Community Code of Conduct
      </a>
      <a href="#link3" className="hover:text-[#8A348E]">
        Terms of Service
      </a>
    </div>
    {/* Column 2 */}
    <div className="flex flex-col space-y-2 text-center sm:text-left">
      <a href="#link3" className="hover:text-[#8A348E]">
        Privacy Policy
      </a>
      <a href="#link3" className="hover:text-[#8A348E]">
        Developer Terms of Use
      </a>
      <a href="#link3" className="hover:text-[#8A348E]">
        Pi Trademark
      </a>
      <a href="#link3" className="hover:text-[#8A348E]">
        Safety Center
      </a>
    </div>
  {/* </div> */}

  {/* Logo Section */}
  <div className="relative">
    <Image
      src="/logo.png"
      alt="Next.js Logo"
      width={350}
      height={320}
      className="mx-auto sm:mx-0"
    />
  </div>
</footer>
<br/><br/><br/><br/><br/><br/><br/>
<div
  className="p-4 md:p-5 rounded-xl flex flex-col md:flex-row items-center justify-between fixed bottom-0 left-0 right-0 bg-white shadow-md"
  style={{ zIndex: 1000 }}
>
  <div className="text-center md:text-left mb-3 md:mb-0">
    <p className="text-lg font-bold">Pi Network</p>
    <p className="text-sm">Start mining. Easy as Pi!</p>
  </div>
  <div>
    <button className="bg-[#fbb44a] text-[#8A348E] rounded-lg w-[120px] md:w-[150px] h-[40px] md:h-[30px] text-sm md:text-base">
      Download
    </button>
  </div>
</div>

    </>
  );
}
