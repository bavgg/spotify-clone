import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar";
import BackIcon from "./assets/BackIcon";
import NextIcon from "./assets/NextIcon";
import SmallDownloadIcon from "./assets/SmallDownloadIcon";
import BellIcon from "./assets/BellIcon";
import PlayIcon from "./assets/PlayIcon";
import QueueIcon from "./assets/QueueIcon";
import DeviceIcon from "./assets/DeviceIcon";
import VolumeIcon from "./assets/VolumeIcon";
import FullscreenIcon from "./assets/FullscreenIcon";
import RandomIcon from "./assets/RandomIcon";
import PreviousIcon from "./assets/PreviousIcon";
import PauseIcon from "./assets/PauseIcon";
import NexttIcon from "./assets/NexttIcon";
import LoopIcon from "./assets/LoopIcon";

function BackNext() {
  return (
    <div className="flex gap-[8px]">
      <button className="h-[32px] w-[32px] bg-[rgba(0,0,0,.7)] rounded-[50%] border-none flex items-center justify-center text-white">
        <BackIcon />
      </button>
      <button className="h-[32px] w-[32px] bg-[rgba(0,0,0,.7)] rounded-[50%] border-none flex items-center justify-center text-white">
        <NextIcon />
      </button>
    </div>
  );
}
function PlaylistCard() {
  return (
    <div className="playlistcard cursor-pointer relative flex flex-col gap-[8px] w-full p-[12px]">
      <img
        className=" z-[2] rounded-[6px]"
        src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
      />
      <div className="z-[2] flex gap-[4px] flex-col">
        <p className=" text-[16px] text-white">Top 50 - Global</p>
        <div className="  line-clamp-2 text-[#b3b3b3] text-[13px]">
          Your daily update of the most played tracks right now - Global.
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <div className="grid grid-cols-template grid-rows-template h-screen p-[var(--panel-gap)]">
        <Sidebar />
        <div className="rounded-[8px] main-view bg-[var(--background-base)] flex flex-col relative ">
          <header className=" top-0 right-[8px] h-[64px] sticky w-full flex items-center">
            <div className="px-[var(--content-spacing)] w-full flex gap-[8px] items-center justify-between">
              <BackNext />
              <div className="flex items-center gap-[8px]">
                <button className="flex items-center justify-center rounded-full bg-white border-none">
                  <span className="px-[16px] py-[4px] font-[700] text-[13.3px]">
                    Explore Premium
                  </span>
                </button>
                <a className="relative bg-black rounded-full">
                  <span className=" text-white font-[700] text-[13.3px] py-[4px] pl-[33px] pr-[16px]">
                    Install App
                  </span>
                  <span className="absolute left-[12px] top-[6px]">
                    <SmallDownloadIcon />
                  </span>
                </a>
                <button className="h-[32px] w-[32px] rounded-full bg-black flex items-center justify-center">
                  <BellIcon />
                </button>
                <button className="h-[32px] w-[32px] rounded-full bg-black flex items-center justify-center">
                  <span
                    className="h-[24px] w-[24px] rounded-full font-[700] text-[13.3px] encore-text encore-text-body-small-bold NqzueDshzvgXEygqOGPG"
                    data-encore-id="text"
                    style={{
                      backgroundColor: "rgb(180, 155, 200)",
                      color: "rgb(0, 0, 0)",
                      lineHeight: "24px",
                    }}
                    data-testid="username-first-letter"
                  >
                    U
                  </span>
                </button>
              </div>
            </div>
          </header>
          <div className=" sticky top-[64px] z-[1] h-[56px] p-[0_var(--content-spacing)] flex items-center ">
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

          <section className="pt-[8px] px-[16px]">
            <div className="flex pt-[8px] h-[60px] items-center justify-between">
              <a className="text-white font-[700] text-[20px]">
                Featured Charts
              </a>
            </div>

            <div className="g grid-template-columns grid-template-rows ms-[-12px] me-[-12px]">
              <PlaylistCard />
            </div>
          </section>
        </div>
        {/* <div className="right-sidebar bg-[var(--background-base)]">Right Sidebar</div> */}
        <div className="now-playing-bar bg-[var(--background-base)] rounded-[8px]">
          <footer className="flex h-[72px] items-center justify-between">
            <div className=" w-[30%] min-w-[180px] "></div>
            <div className="w-[40%] max-w-[722px] flex flex-col items-center justify-center">
              <div className="mb-[8px] flex gap-[16px]">
                <div className="flex justify-end gap-[8px]">
                  <button className="h-[32px] w-[32px] flex items-center justify-center">
                    <RandomIcon />
                  </button>
                  <button className="h-[32px] w-[32px] flex items-center justify-center">
                    <PreviousIcon />
                  </button>
                </div>
                <button className="bg-[#4D4D4D] rounded-[32px] h-[32px] w-[32px] flex items-center justify-center">
                  <PauseIcon />
                </button>
                <div className="flex justify-end gap-[8px]">
                  <button className="h-[32px] w-[32px] flex items-center justify-center">
                    <NexttIcon />
                  </button>
                  <button className="h-[32px] w-[32px] flex items-center justify-center">
                    <LoopIcon />
                  </button>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-[8px]">
                <div className="text-[#b3b3b3]">-:--</div>
                <div className="h-[4px] rounded-[4px] bg-[#4D4D4D] w-full"></div>
                <div className="text-[#b3b3b3]">-:--</div>
              </div>
            </div>
            <div className=" w-[30%] min-w-[180px] flex items-center ">
              <button className=" p-[8px]">
                <PlayIcon />
              </button>
              <button className=" p-[8px]">
                <QueueIcon />
              </button>
              <button className=" p-[8px]">
                <DeviceIcon />
              </button>
              <button className=" p-[8px]">
                <VolumeIcon />
              </button>
              <div className="h-[12px] w-full flex items-center mr-[8px]">
                <div className=" bg-white h-[4px] w-full rounded-[4px]"></div>
              </div>
              <button className=" p-[8px]">
                <FullscreenIcon />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
