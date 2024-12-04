import { Users } from "../assets/Javascript-Data/Img";

const PlacementFi = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-black text-white">
      <h2 className="text-5xl font-bold text-center">Our Placement Partners</h2>
      <div className="w-[70%] grid md:grid-cols-4 grid-cols-2 gap-5 pt-10">
        {Users.map((user) => {
          return (
            <div key={user.id} className="flex justify-center items-center">
              <img src={user.Img} className="w-40" alt="" />
            </div>
          );
        })}
      </div>
      <button className="mt-10 bg-[#C9FD02] rounded-full w-[150px] h-[50px] text-black text-sm">
        More Companies
      </button>
    </div>
  );
};

export default PlacementFi;
