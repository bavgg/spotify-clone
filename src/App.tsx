import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar";
import QueueIcon from "./assets/QueueIcon";
import DeviceIcon from "./assets/DeviceIcon";
import VolumeIcon from "./assets/VolumeIcon";
import FullscreenIcon from "./assets/FullscreenIcon";
import RandomIcon from "./assets/RandomIcon";
import PreviousIcon from "./assets/PreviousIcon";
import PauseIcon from "./assets/PauseIcon";
import NexttIcon from "./assets/NexttIcon";
import LoopIcon from "./assets/LoopIcon";
import NowPlayingIcon from "./assets/NowPlayingIcon";

import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="grid grid-cols-template grid-rows-template h-screen p-[var(--panel-gap)]">
        <Sidebar />
        <div className="rounded-[8px] main-view bg-[var(--background-base)] flex flex-col relative ">
          <Header/>
          <Home />
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
                <div className="text-[#b3b3b3] h-[17px] flex items-center justify-center">
                  -:--
                </div>
                <div className="h-[4px] rounded-[4px] bg-[#4D4D4D] w-full"></div>
                <div className="text-[#b3b3b3] h-[17px] flex items-center justify-center">
                  -:--
                </div>
              </div>
            </div>
            <div className=" w-[30%] min-w-[180px] flex items-center justify-end ">
              <button className=" p-[8px]">
                <NowPlayingIcon />
              </button>
              <button className=" p-[8px]">
                <QueueIcon />
              </button>
              <button className=" p-[8px]">
                <DeviceIcon />
              </button>
              <div className="flex flex-[0_1_125px] w-full items-center">
                <button className=" p-[8px]">
                  <VolumeIcon />
                </button>
                <div className="h-[12px] w-full flex items-center mr-[8px]">
                  <div className=" bg-white h-[4px] w-full rounded-[4px]"></div>
                </div>
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
