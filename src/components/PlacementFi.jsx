import img1 from "../assets/img/airbnb.png";
import img2 from "../assets/logo/client-8.png";
import img3 from "../assets/logo/Lifegroups.png";
import img4 from "../assets/logo/myob.png";
import img5 from "../assets/img/tailus.png";
import img6 from "../assets/img/microsoft.png";
import img7 from "../assets/img/coty.png";
import img8 from "../assets/img/lilly.png";
const PlacementFi = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-black text-white">
      <h2 className="text-5xl font-bold text-center">Our Placement Partners</h2>
      <div className="w-[70%] grid md:grid-cols-4 grid-cols-2 gap-5 pt-10">
        <div className="flex justify-center items-center">
          <img src={img1} className="w-40" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img2} className="w-40" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img3} className="w-40" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img4} className="w-40" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img5} className="w-40" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img6} className="w-40" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img7} className="w-40" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img8} className="w-40" alt="" />
        </div>
      </div>
      <button className="mt-10 bg-[#C9FD02] rounded-full w-[150px] h-[50px] text-black text-sm">
        More Companies
      </button>
    </div>
  );
};

export default PlacementFi;
