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

import { Route, Routes } from "react-router-dom";
import PlayIcon from "./assets/PlayIcon";
import SaveIcon from "./assets/SaveIcon";
import MoreIcon from "./assets/MoreIcon";
import ListIcon from "./assets/ListIcon";

function Title() {
  return (
    <div className=" min-h-[340px] pb-[24px] px-[24px] mt-[-64px] flex">
      <div className=" h-[232px] w-[232px] mr-[24px] self-end">
        <img
          className=" rounded-[4px]"
          src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
        />
      </div>

      <div className="flex flex-col justify-end">
        <span className="text-[#FBFCFC] text-[13px]">Playlist</span>
        <div className="text-[#FBFCFC] w-[700px] text-[6rem] font-[800] h-[116px] flex items-center">
          Top 50 - Global
        </div>
        <div className=" text-[#B8BDC4] text-[13px]">
          Your daily update of the most played tracks right now - Global.
        </div>
        <div className="mt-[8px] flex items-center">
          <div className="flex items-center gap-[4px]">
            <img
              className="w-[24px] h-[24px]"
              src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
            />
            <div className="text-white text-[13.5px] font-[500]">Spotify</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Playlist() {
  return (
    <>
      <Title />
      <div>
        <div className="flex items-center p-[24px] justify-between">
          <div className="flex items-center">
            <button className="playbutton mr-[32px] w-[48px] h-[48px] rounded-full bg-[#1ed760] shadow-[0_8px_8px_rgba(0,0,0,.3)] flex items-center justify-center">
              <PlayIcon />
            </button>

            <button className=" py-[12px] mr-[24px] flex items-center justify-center ">
              <SaveIcon />
            </button>

            <button className=" py-[12px] mr-[24px] flex items-center justify-center ">
              <MoreIcon />
            </button>
          </div>

          <button className="px-[8px] flex items-center gap-[8px]">
            <span className=" text-[#B3B3B3]">List</span>
            <ListIcon />
          </button>
        </div>
      </div>

      <div className="songs flex flex-col px-[24px]">
        <div className=" h-[36px] border-bottom mb-[16px]  g grid-cols-[minmax(auto,16px)_minmax(120px,6fr)_minmax(120px,4fr)_minmax(120px,3fr)_minmax(120px,1fr)] text-[13px] text-[#B3B3B3]">
          <div className="flex items-center">#</div>
          <div className="flex items-center">Title</div>
          <div className="flex items-center">Plays</div>
          <div className="flex items-center">Album</div>
          <div className="flex items-center">#</div>
        </div>
      </div>
    </>
  );
}
function App() {
  return (
    <>
      <div className="grid grid-cols-template grid-rows-template h-screen p-[var(--panel-gap)]">
        <Sidebar />
        <div className="rounded-[8px] main-view bg-[var(--background-base)] flex flex-col relative ">
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/playlist' element={<Playlist/>} />
          </Routes>
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
