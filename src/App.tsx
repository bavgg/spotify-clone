import "./App.css";
import "./index.css";

import Home from "./pages/Home";
import Playlist from "./pages/Playlist";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";

import { PlayerContext } from "./contexts/PlayerContext";
import { useContext, useEffect } from "react";

import { tracks } from "./assets/tracks.js";

function App() {
  const { audioRef, currentTrack, setCurrentTrack, setIsActive, isActive } = useContext(PlayerContext);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.load();
    audioElement.play();
  }, [currentTrack]);

  function handleEnded() {
    if(isActive) {
      setCurrentTrack((prevTrack) => {
        if (!(prevTrack.id + 1 < tracks.length) ) {
          setIsActive(false);
        } 
        return {
          ...prevTrack,
          id: prevTrack.id + 1,
          src: tracks[prevTrack.id + 1]?.src,
        };
      });
    }
    
  }

  return (
    <>
      <audio
        onEnded={handleEnded}
        ref={audioRef}
        src={currentTrack.src}
        preload="auto"
      />
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
