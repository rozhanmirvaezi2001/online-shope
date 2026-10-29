import { useCart } from "./CartContext";

const ProductCart = ({ product }) => {
  const { image, title, description, price, id, category } = product;
  const { dispatch } = useCart();

  return (
    <div>
      <div className="w-90 h-110 bg-[#f5efe6] rounded-[25px] m-10 p-4 flex justify-around flex-col items-center gap-3 shadow-xl/30 ">
        <div className="w-40 h-48 m-1  ">
          <img className="w-full h-full object-contain" src={image} />
        </div>

        <div className=" flex flex-col gap-2 m-2 ">
          <h1 className="line-clamp-2 h-12 text-lg text-center  text-shadow-lg/30 leading-12 text-[#561c24]  font-[BattleBingo]">
            {title}
          </h1>
          <p className=" line-clamp-3 h-14 text-lg text-[#b35360] font-bold font-[BriannaQasim]">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-start ml-12 mb-2 w-90">
          <p className="text-[#e8d8c4] hover:text-[#561c24] hover:bg-[#e8d8c4]  w-25 h-10 mt-3 leading-10 pl-4 font-bold font-[BattleBingo] bg-[#561c24] rounded-l-[10px]">
            ${Number(price).toFixed(2)}
          </p>

          <button className="text-[#b3727b] font-[BriannaQasim] border border-[#561c24] hover:border-[#b3727b] hover:bg-[#561c24] rounded-r-[10px] h-10 w-10 leading-10 pl-2 mt-3 " onClick={()=> dispatch({type:"ADD",payload:product})}>
            
         <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
          </button>

          <p className="bg-[#caa1a6] h-7 w-30 ml-12 mt-2 text-center font-[BattleBingo] text-[11px] leading-7 text-[#561c24] rounded-[10px]">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
