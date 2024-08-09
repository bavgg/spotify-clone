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

import { tracks } from "./assets/tracks.ts";

function App() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("PlayerContext must be used within a PlayerProvider");
  }
  const {
    audioRef,
    currentTrack,
    setCurrentTrack,
    setIsActive,
    isActive,
    setIsPlaying,
    isSetToRepeat,
  } = context;

  useEffect(() => {
    const audioElement = audioRef.current;
    // audioElement?.load();
    audioElement?.play();
  }, [currentTrack]);

  function handleEnded() {
    if (!isActive) {
      return;
    }

    if (isSetToRepeat) {
      setCurrentTrack((prevTrack) => {
        setIsPlaying(true);
        const nextIndex = (prevTrack.id + 1) % tracks.length;
        return {
          ...prevTrack,
          id: nextIndex,
          src: tracks[nextIndex]?.src,
          
        };
      });
      // setCurrentTrack({ id: 1, src: ''});
      return;
    }

    setCurrentTrack((prevTrack: { id: number; src: string }) => {
      if (!(prevTrack.id + 1 < tracks.length)) {
        setIsPlaying(false);
        setIsActive(false);
      } else {
        setIsPlaying(true);
      }
      const nextIndex = prevTrack.id + 1;
      return {
        ...prevTrack,
        id: nextIndex,
        src: tracks[nextIndex]?.src,
        
      };
    });
    return;
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
