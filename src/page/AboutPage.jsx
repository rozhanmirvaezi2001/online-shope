import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-8 m-25">
    <p className="text-[#561c24] font-[BattleBingo] text-4xl  font-bold text-shadow-lg/30">About Us</p>
      <p className="text-[#6d232d] font-[BriannaQasim] text-3xl font-bold ">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi ex, rem ipsum dolore nostrum quia earum beatae assumenda sed distinctio, quam quod quaerat ratione possimus placeat vero, dicta illo? Magni sunt est laudantium autem, modi unde, illo nulla temporibus ut quod aliquid repellat. Rerum repudiandae impedit temporibus! Adipisci voluptate odit earum laboriosam? Beatae, cupiditate eaque rerum accusantium cum quod, qui quisquam porro eveniet veniam impedit nesciunt! Nemo tenetur doloribus accusamus atque laudantium ipsa pariatur? Tempore ut quisquam eveniet consectetur fuga, quos dolor cum itaque nihil rerum ipsum qui nemo. Autem, placeat earum cupiditate dolorum velit atque at id veritatis in? Ea praesentium eius dolore molestiae voluptate dolorem incidunt nesciunt itaque blanditiis inventore, ex quia alias cumque. Ipsum vitae reprehenderit numquam tenetur hic aliquid nostrum obcaecati provident beatae neque veritatis culpa autem, perferendis dignissimos nobis quibusdam placeat! Fugiat laboriosam qui, mollitia ducimus, consectetur a sapiente aperiam reprehenderit, sit illo dolor!
      </p>
      <Link to="/">
        <button className="w-35 h-12 mt-10 text-[#e8d8c4] bg-[#561c24] font-[BattleBingo] hover:bg-[#9b5760] rounded-xl hover:font-bold hover:text-shadow-lg/30"> Go back </button>
      </Link>
    </div>
  );
};

export default AboutPage;
