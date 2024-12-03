import img1 from "../assets/logo/medal.svg";
import img2 from "../assets/logo/thought.png";
import img3 from "../assets/logo/training.png";
import img4 from "../assets/img/AboutDashboard.png";

const DetailsFi = () => {
  return (
    <div className="bg-black w-full h-full">
      <div className="text-center text-white">
        <p className="text-[#7DD3FC] tracking-[1px] font-bold">
          Open Source Theme and UI Components
        </p>
        <h2 className="md:text-5xl text-2xl font-bold">
          Geaux Astro helps you <br className="hidden md:block" />
          craft beautiful websites
          <br className="hidden md:block" /> efficiently
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div>
          <ul className="gap-10 flex flex-col">
            <li className="flex justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center">
                <img src={img1} className="w-[60px]" alt="" />
              </div>
              <div className="text-white">
                <h2 className=" text-lg font-bold">Certificate Distribution</h2>
                <p className="mt-2">
                  We offer certificates to validate and recognize{" "}
                  <br className="hidden md:block" />
                  your achievement.
                </p>
              </div>
            </li>
            <li className="flex justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center">
                <img src={img2} className="w-[60px]" alt="" />
              </div>
              <div className="text-white">
                <h2 className=" text-lg font-bold">Knowledge</h2>
                <p className="mt-2">
                  We deliver transformative knowledge that{" "}
                  <br className="hidden md:block" />
                  empowers and inspires.
                </p>
              </div>
            </li>
            <li className="flex justify-center items-center">
              <div className="w-20 h-20 flex justify-center items-center">
                <img src={img3} className="w-[60px]" alt="" />
              </div>
              <div className="text-white">
                <h2 className=" text-lg font-bold">Hands-on Experience</h2>
                <p className="mt-2">
                  We provide hands-on experience for real-
                  <br className="hidden md:block" />
                  world learning. You learn best by doing.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <img src={img4} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white px-20">
        <div>
          <h2 className="md:text-5xl text-2xl font-bold">
            <span className="text-[#149644]">
              Empower your future
              <br className="hidden md:block" /> with cutting-edge skills
            </span>{" "}
            <span className="text-[#0EA5E9]">
              New, Embrace innovation,
              <br className="hidden md:block" /> master technology, &
              <br className="hidden md:block" /> shape the digital world
            </span>
            <span className="text-[#DC2626]">
              <br className="" /> Your journey to success
              <br className="hidden md:block" /> starts here.
            </span>
          </h2>
        </div>
        <div className="flex justify-center flex-col pt-4 md:pt0">
          <p>
            Join our course with a proven track record of success, where
            learning isn&apos;t just about gaining skills; it&apos;s about
            growing them. Join us, learn with confidence, and watch your skills
            soar.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            <div>
              <ul className="flex flex-col justify-center items-center">
                <li className="w-full rounded-full bg-[#C9FD02]">
                  <p className="text-center text-black">Total students</p>
                </li>
                <li>
                  <p className="text-4xl">0</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col justify-center items-center">
                <li className="w-full rounded-full bg-[#C9FD02]">
                  <p className="text-center text-black">Placed Students</p>
                </li>
                <li>
                  <p className="text-4xl">0</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col justify-center items-center">
                <li className="w-full rounded-full bg-[#C9FD02]">
                  <p className="text-center text-black">UnPlaced Students</p>
                </li>
                <li>
                  <p className="text-4xl">0</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFi;
