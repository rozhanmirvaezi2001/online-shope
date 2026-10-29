import { Link } from "react-router-dom";
import { useCart } from "./CartContext";


const Header = () => {
  const {totalItems}=useCart();
  return (
    <header className="w-full h-18 flex font-[BattleBingo] justify-around items-center leading-18 bg-[#561c24]">
      <div className="w-[50%] flex justify-around item-center text-[#e8d8c4] pr-65 ">
        <div className="hover:text-[#b3727b] hover:font-bold hover:text-shadow-lg/30">
       <Link to="/"> Products</Link> 
        </div>
     <div className="hover:text-[#b3727b] hover:font-bold hover:text-shadow-lg/30">
          <Link to={"/about"}> About Us</Link>
        </div>
        <div className="hover:text-[#b3727b] hover:font-bold hover:text-shadow-lg/30">
          <Link to={"/contact"}>Contact Us</Link>
        </div>
      </div>

       <Link to="/cart" className="relative inline-block ml-110 ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#e8d8c4"
                class="size-6 hover:stroke-[#b3727b] hover:fill-[#e8d8c4]"

              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-[#b35360] text-white text-xs font-bold">
            {totalItems}
          </span>
        )}
      </Link>
  
    
    </header>
  );
};

export default Header;
