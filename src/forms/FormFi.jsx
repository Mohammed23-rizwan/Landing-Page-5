import { useState } from "react";
import { Users } from "../assets/Javascript-Data/Users";

const FormFi = () => {
  const [dis, setdis] = useState(Users);
  const [get, setGet] = useState();

  const handlesubmit = () => {
    setdis(...dis, get);
    console.log(get);
    // e.preventDefault();
  };

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGet((values) => ({
      ...values,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-full py-32 text-white flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-[#C9FD02]">Fill This Form</h2>
      <form action="" className="w-full mt-5">
        <div className="grid grid-cols-2 px-20 gap-10">
          <div className=" flex flex-col">
            <label htmlFor="" className="text-2xl font-bold text-[#C9FD02]">
              Name:
            </label>
            <input
              type="text"
              className="w-full h-[60px] rounded-[5px] border-none outline-none text-black px-2 bg-none"
              placeholder="UserName"
              name="name"
              onChange={handlechange}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="" className="text-2xl font-bold text-[#C9FD02]">
              Role:
            </label>
            <input
              type="text"
              className="w-full h-[60px] rounded-[5px] border-none outline-none text-black px-2 bg-none"
              placeholder="UserName"
              name="role"
              onChange={handlechange}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="" className="text-2xl font-bold text-[#C9FD02]">
              Email:
            </label>
            <input
              type="text"
              className="w-full h-[60px] rounded-[5px] border-none outline-none text-black px-2 bg-none"
              placeholder="UserName"
              name="email"
              onChange={handlechange}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="" className="text-2xl font-bold text-[#C9FD02]">
              PhoneNumber:
            </label>
            <input
              type="text"
              className="w-full h-[60px] rounded-[5px] border-none outline-none text-black px-2 bg-none"
              placeholder="UserName"
              name="phonenumber"
              onChange={handlechange}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="" className="text-2xl font-bold text-[#C9FD02]">
              Course:
            </label>
            <select
              name="course"
              id=""
              className="w-full h-[60px] rounded-[5px] border-none outline-none text-black px-2 bg-none"
              onClick={handlechange}
            >
              <option value>select a course</option>
              <option value="Reactjs">React js</option>
              <option value="Javascript">Javascript</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Advanced CSS">Advanced CSS</option>
              <option value="Backend Development">Backend DevelopmentS</option>
            </select>
          </div>
          <div className=" flex flex-col">
            <label htmlFor="" className="text-2xl font-bold text-[#C9FD02]">
              Status:
            </label>
            <select
              name="status"
              id=""
              className="w-full h-[60px] rounded-[5px] border-none outline-none text-black px-2 bg-none"
              onClick={handlechange}
            >
              <option value="Placed">Placed</option>
              <option value="unPlaced">Unplaced</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="w-[170px] h-14 rounded-full border border-rose-50"
            type="submit"
            onClick={handlesubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormFi;
