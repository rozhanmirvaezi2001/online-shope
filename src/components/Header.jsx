import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="w-full h-18 flex font-[MoscaLaroke] justify-around items-center leading-18 bg-[#561c24]">
      <div className="w-[50%] flex justify-around item-center text-[#e8d8c4] pr-65 ">
        <div className="hover:text-[#b3727b] hover:font-bold hover:text-shadow-lg/30">
         Products
        </div>
     <div className="hover:text-[#b3727b] hover:font-bold hover:text-shadow-lg/30">
          <Link to={"/about"}> About Us</Link>
        </div>
        <div className="hover:text-[#b3727b] hover:font-bold hover:text-shadow-lg/30">
          <Link to={"/contact"}>Contact Us</Link>
        </div>
      </div>

        <div className="text-[#e8d8c4] pr-5 pl-45 hover:text-[#b3727b] hover:font-bold hover:text-shadow-lg/30">
          <a href="">Loing / Sign UP</a>
        </div>

    
    </header>
  );
};

export default Header;
