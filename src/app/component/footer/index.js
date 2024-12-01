import Image from 'next/image';

export default function Footer() {
  return (
   <>
   <footer className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div className='flex gap-16'>
      <div className="flex flex-col space-y-2 text-center">
      <a href="#link3" className="hover:text-[#8A348E]">
      Pi Whitepaper
        </a>
        <a href="#link3" className="hover:text-[#8A348E]">
        Support & FAQ
        </a>
        <a href="#link3" className="hover:text-[#8A348E]">
        Community Code of Conduct        </a>
        <a href="#link3" className="hover:text-[#8A348E]">
        Terms of Service     </a>
      </div>
      <div className="flex flex-col space-y-2 text-center">
      <a href="#link3" className="hover:text-[#8A348E]">
      Privacy Policy        </a>
      <a href="#link3" className="hover:text-[#8A348E]">
      Developer Terms of Use        </a>
        <a href="#link3" className="hover:text-[#8A348E]">
        Pi Trademark
        </a>
        <a href="#link3" className="hover:text-[#8A348E]">
        Safety Center
        </a>
      </div>
      </div>
      {/* Right Logo */}
      <div className="relative">
        <Image
          src="/logo.png" 
          alt="Next.js Logo"
          width={200}
          height={120}
        />
      </div>
    </footer><br/><br/><br/>
    <div 
  className="p-5 rounded-xl flex items-center justify-between fixed bottom-0 left-0 right-0 bg-white shadow-md"
  style={{ zIndex: 1000 }}
>
  <div>
    <p><b>Pi Network</b></p>
    <p>Start mining. Easy as Pi!</p>
  </div>
  <div>
    <button className="bg-[#fbb44a] text-[#8A348E] rounded-lg w-[150px] h-[30px]">
      Download
    </button>
  </div>
</div>
    </>
  );
}
