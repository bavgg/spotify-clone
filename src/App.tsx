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
import ListIcon from "./assets/ListIcon";
import ClockIcon from "./assets/ClockIcon";
import MoreIcon2 from "./assets/MoreIcon2";
import MoreIcon from "./assets/MoreIcon";
import AddIcon from "./assets/AddIcon";
import PlayIconSmall from "./assets/PlayIconSmall";

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

        <header className="px-[16px] border-[1px] border-transparent h-[36px] border-bottom mb-[16px] g-cols text-[13px] text-[#B3B3B3]">
          <div className="flex items-center">#</div>
          <div className="flex items-center">Title</div>
          <div className="flex items-center">
            <span className="w-[11ch]  text-right">Plays</span>
          </div>
          <div className="flex items-center">Album</div>
          <div className="flex items-center justify-end mr-[32px]">
            <ClockIcon/>
          </div>
        </header>

        <main className="flex flex-col">
          <div className="song rounded-[4px] px-[16px] border-[1px] border-transparent g-cols h-[56px] ">

            <div className="flex items-center text-[#B3B3B3]">
              
              <div className="h-[16px] w-[16px] flex flex-col  overflow-hidden">
                <div id="small-play" className=" hidden">
                  <PlayIconSmall/>
                </div>
                <div className="flex min-h-[16px] min-w-[16px] items-center justify-center">1</div>
              </div>
            </div>

            <div className="flex items-center ">
              <img width="40" height="40" src="https://i.scdn.co/image/ab67616d00004851f02c451189a709b9a952aaec" className="rounded-[4px] mr-[12px]"/>
              <div className="pr-[8px] flex flex-col">
                <span className="text-[#FFF]">Who</span>
                <span className="text-[#B3B3B3] text-[13.3px]">Jimin</span>
              </div>
            </div>

            <div className="flex items-center ">
              <span className="w-[11ch] text-[#B3B3B3] text-[14px]  text-right">8,920,563</span>
            </div>

            <div className="flex items-center ">
              <span className="text-[#B3B3B3] text-[14px]">MUSE</span>
            </div>

            <div className="flex items-center justify-end  relative">
              <button id="add-small" className="mr-[12px] hidden">
                <AddIcon/>
              </button>
              <span className="text-[#B3B3B3] text-[14px] mr-[28px] flex justify-end w-[5ch]">2:50</span>
              <button id="more-small" className="absolute right-0 hidden">
                <MoreIcon2/>
              </button>
            </div>
          </div>
        </main>
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
