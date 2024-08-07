import "./App.css";
import "./index.css";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";

import queue from "./assets/icons/queue.svg";
import device from "./assets/icons/device.svg";
import volume from "./assets/icons/volume.svg";
import fullscreen from "./assets/icons/fullscreen.svg";
import random from "./assets/icons/random.svg";
import previous from "./assets/icons/previous.svg";
import pause from "./assets/icons/pause.svg";
import next_gray from "./assets/icons/next-gray.svg";
import loop from "./assets/icons/loop.svg";
import nowplaying from "./assets/icons/nowplaying.svg";


import { PlayerContext } from "./contexts/PlayerContext";
import { useContext, useEffect } from "react";


function PauseButton() {
  const { audioRef } = useContext(PlayerContext);

  function handlePlay() {
    audioRef.current.play();
  }
  return (
    <>
      <button onClick={handlePlay} className="bg-[#4D4D4D] rounded-[32px] h-[32px] w-[32px] flex items-center justify-center">
        <img width="16px" height="16px" src={pause} />
      </button>
    </>
  );
}
function GridItem2() {
  return (
    <>
      <div className="w-[40%] max-w-[722px] flex flex-col items-center justify-center">
        <div className="mb-[8px] flex gap-[16px]">
          <div className="flex justify-end gap-[8px]">
            <button className="h-[32px] w-[32px] flex items-center justify-center">
              <img width="16px" height="16px" src={random} />
            </button>
            <button className="h-[32px] w-[32px] flex items-center justify-center">
              <img width="16px" height="16px" src={previous} />
            </button>
          </div>  
          <PauseButton/>
          <div className="flex justify-end gap-[8px]">
            <button className="h-[32px] w-[32px] flex items-center justify-center">
              <img width="16px" height="16px" src={next_gray} />
            </button>
            <button className="h-[32px] w-[32px] flex items-center justify-center">
              <img width="16px" height="16px" src={loop} />
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
    </>
  );
}
function Footer() {
  return (
    <>
      <footer className="now-playing-bar bg-[var(--background-base)] rounded-[8px]">
        <div className="flex h-[72px] items-center justify-between">
          <div className=" w-[30%] min-w-[180px] "></div>
          <GridItem2 />
          <div className=" w-[30%] min-w-[180px] flex items-center justify-end ">
            <button className=" p-[8px]">
              <img width="16px" height="16px" src={nowplaying} />
            </button>
            <button className=" p-[8px]">
              <img width="16px" height="16px" src={queue} />
            </button>
            <button className=" p-[8px]">
              <img width="16px" height="16px" src={device} />
            </button>
            <div className="flex flex-[0_1_125px] w-full items-center">
              <button className=" p-[8px]">
                <img width="16px" height="16px" src={volume} />
              </button>
              <div className="h-[12px] w-full flex items-center mr-[8px]">
                <div className=" bg-white h-[4px] w-full rounded-[4px]"></div>
              </div>
            </div>
            <button className=" p-[8px]">
              <img width="16px" height="16px" src={fullscreen} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const { audioRef } = useContext(PlayerContext);

  useEffect(() => {
    console.log(audioRef.current);
  });

  return (
    <>
      <audio ref={audioRef} src="/src/assets/songs/Loote - she's all yours (Lyrics).mp3" preload="auto" />
      <div className="grid grid-cols-template grid-rows-template h-screen p-[var(--panel-gap)]">
        <Sidebar />
        <main className="rounded-[8px] main-view bg-[var(--background-base)] flex flex-col relative ">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
        </main>
        {/* <div className="right-sidebar bg-[var(--background-base)]">Right Sidebar</div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
