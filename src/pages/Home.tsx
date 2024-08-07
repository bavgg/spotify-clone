import { useNavigate } from "react-router-dom";
import play_black from "../assets/icons/play-black.svg";

function PlaylistCard() {
  const navigate = useNavigate();
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(event.target as HTMLElement);
    navigate("/playlist");
  }
  return (
    <div
      onClick={handleClick}
      className="playlistcard cursor-pointer relative flex flex-col gap-[8px] w-full p-[12px]"
    >
      <div className="relative z-[2]">
        <img
          className="rounded-[6px]"
          src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
        />
        <button
          id="play-button"
          className="playbutton z-[-1] right-[8px] bottom-[8px] absolute w-[48px] h-[48px] rounded-full bg-[#1ed760] shadow-[0_8px_8px_rgba(0,0,0,.3)] flex items-center justify-center"
        >
          <img width="25px" height="25px" src={play_black} />
        </button>
      </div>
      <div className="z-[2] flex gap-[4px] flex-col">
        <p className=" text-[16px] text-white">Top 50 - Global</p>
        <div className="  line-clamp-2 text-[#b3b3b3] text-[13px]">
          Your daily update of the most played tracks right now - Global.
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <section className="pt-[8px] px-[16px]">
        <div className=" sticky top-[72px] z-[1] h-[56px] p-[0_var(--content-spacing)] flex items-center ">
          <button className=" bg-white flex items-center justify-center mb-[8px] mr-[8px] rounded-full">
            <span className=" px-[12px] py-[4px] text-[14px]">All</span>
          </button>
          <button className=" bg-[#353535] text-[white] flex items-center justify-center mb-[8px] mr-[8px] rounded-full">
            <span className=" px-[12px] py-[4px] text-[14px]">Music</span>
          </button>
          <button className=" bg-[#353535] text-[white] flex items-center justify-center mb-[8px] mr-[8px] rounded-full">
            <span className=" px-[12px] py-[4px] text-[14px]">Podcasts</span>
          </button>
        </div>

        <div className="flex pt-[8px] h-[60px] items-center justify-between">
          <a className="text-white font-[700] text-[20px]">Featured Charts</a>
        </div>

        <div className="g grid-template-columns grid-template-rows ms-[-12px] me-[-12px]">
          <PlaylistCard />
        </div>
      </section>
    </>
  );
}
