import heroimg from "../assets/img/Background Hero.svg";
import NavbarFi from "./NavbarFi";

const HeroFi = () => {
  return (
    <div className="w-full lg:h-screen h-full py-40 lg:py-0 relative flex justify-center">
      <div className="absolute top-0 w-full h-full">
        <img
          src={heroimg}
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <NavbarFi />
      <div className="w-full h-full flex justify-center items-center flex-col z-20 text-white text-center">
        <h2 className=" text-3xl md:text-6xl font-bold mb-6">
          Learn from the best, be
          <br /> your best..
        </h2>
        <p className="text-[18px] md:text-lg text-[#3F4651]">
          Give yourself an upgrade with our inspiring online courses
          <br className="hidden md:block" /> and join a global community of
          learners
        </p>
        <button className="mt-10 bg-[#FACC15] rounded-full w-[150px] h-[50px] font-bold text-black text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroFi;
