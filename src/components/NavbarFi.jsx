import { Link } from "react-router-dom";

const NavbarFi = () => {
  return (
    <nav className="w-[85%] h-[50px] bg-transparent border border-white fixed z-30 top-10 rounded-[5px] mr-auto ml-auto flex justify-between items-center px-3">
      <div>
        <Link to="/">
          <h2 className=" cursor-pointer text-[#C9FD02] text-xl tracking-[1px] font-extrabold ">
            Learn Hub
          </h2>
        </Link>
      </div>
      <div>
        <Link to="/form">
          <p className="text-white text-[15px] cursor-pointer">Admin</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarFi;
