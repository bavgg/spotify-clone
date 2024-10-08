import { useContext, } from "react";
import { PlayerContext } from "../contexts/PlayerContext.tsx";

import queue from "/src/assets/icons/queue.svg";
import device from "/src/assets/icons/device.svg";
import volume from "/src/assets/icons/volume.svg";
import fullscreen from "/src/assets/icons/fullscreen.svg";

import nowplaying from "/src/assets/icons/nowplaying.svg";

import {
  PlayIcon,
  PreviousIcon,
  PauseIcon,
  NextIcon,
  RepeatIcon,
  RandomIcon,
} from "../assets/icons/icons.tsx";

import { tracks } from "../assets/tracks.ts";

export default function Footer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("PlayerContext must be used within a PlayerProvider");
  }

  const {
    audioRef,
    isActive,
    isPlaying,
    setIsPlaying,
    setCurrentTrack,
    setIsSetToRepeat,
    isSetToRepeat,
    setIsActive,
    currentTime,
    duration,
    seekbarRef
    
  } = context;

  function handlePlay() {
    if (isActive) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    }
  }

  function handleNext() {
    if (!isActive) {
      return;
    }

    if (isSetToRepeat) {
      setCurrentTrack((prevTrack: { id: number; src: string }) => {
        setIsPlaying(true);
        const nextIndex = (prevTrack.id + 1) % tracks.length;
        return {
          ...prevTrack,
          id: nextIndex,
          src: tracks[nextIndex]?.src,
        };
      });
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
      console.log("🚀 ~ setCurrentTrack ~ nextIndex:", nextIndex)
      return {
        ...prevTrack,
        id: nextIndex,
        src: tracks[nextIndex]?.src,
      };
    });
    return;
  }

  function handlePrevious() {
    if (!isActive) {
      return;
    }
    setCurrentTrack((prevTrack: { id: number; src: string }) => {
      if (prevTrack.id > 0) {
        const prevIndex = prevTrack.id - 1;
        setIsPlaying(true);
        return {
          ...prevTrack,
          id: prevIndex,
          src: tracks[prevIndex]?.src,
        };
      } else {
        return prevTrack;
      }
    });
  }

  function handleRepeat() {
    if (isActive) {
      if (isSetToRepeat) {
        setIsSetToRepeat(false);
      } else {
        setIsSetToRepeat(true);
      }
    }
  }

  function formatTime(minute: number, second: number) {
    if (isNaN(minute) || isNaN(second)) return '-:--';
    return `${minute}:${second < 10 ? '0' + second : second}`;
  }


  return (
    <>
      <footer className="now-playing-bar bg-[var(--background-base)] rounded-[8px]">
        <div className="flex h-[72px] items-center justify-between">
          <div className=" w-[30%] min-w-[180px] "></div>

          <div className="w-[40%] max-w-[722px] flex flex-col items-center justify-center">
            <div className="mb-[8px] flex gap-[16px]">
              <div className="flex justify-end gap-[8px]">
                <button className="h-[32px] w-[32px] flex items-center justify-center">
                  <RandomIcon
                    fill={`${isActive ? "#B3B3B3" : "#363636"}`}
                    width="16"
                    height="16"
                  />
                </button>
                {/* ANCHOR - Previous button */}
                <button
                  onClick={handlePrevious}
                  className="h-[32px] w-[32px] flex items-center justify-center"
                >
                  {/* <img width="16px" height="16px" src={previous}  /> */}
                  <PreviousIcon
                    fill={`${isActive ? "#B3B3B3" : "#4D4D4D"}`}
                    width="16"
                    height="16"
                  />
                </button>
              </div>

              <button
                onClick={handlePlay}
                className={`${
                  isActive ? "bg-white" : "bg-[#4D4D4D]"
                } rounded-[32px] h-[32px] w-[32px] flex items-center justify-center`}
              >
                {isPlaying ? (
                  <PauseIcon fill="black" width="16" height="16" />
                ) : (
                  <PlayIcon fill="black" width="16" height="16" />
                )}

                {/* <img width="16px" height="16px" src={pause} /> */}
              </button>

              <div className="flex justify-end gap-[8px]">
                <button
                  onClick={handleNext}
                  className="h-[32px] w-[32px] flex items-center justify-center"
                >
                  {/* <img width="16px" height="16px" src={next_gray} /> */}
                  <NextIcon
                    fill={`${isActive ? "#B3B3B3" : "#4D4D4D"}`}
                    width="16"
                    height="16"
                  />
                </button>
                <button
                  id="repeat"
                  onClick={handleRepeat}
                  className={`${
                    isActive
                      ? isSetToRepeat
                        ? "before:block"
                        : "before:hidden"
                      : "before:hidden"
                  } relative h-[32px] w-[32px] flex items-center justify-center`}
                >
                  {/* <img width="16px" height="16px" src={loop} /> */}
                  <RepeatIcon
                    fill={`${
                      isActive
                        ? isSetToRepeat
                          ? "#1CD760"
                          : "#B3B3B3"
                        : "#363636"
                    }`}
                    width="16"
                    height="16"
                  />
                </button>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-[8px]">
              <div className="text-[#b3b3b3] h-[17px] flex items-center justify-center">
                <span>
                  {isActive ? formatTime(currentTime.minute, currentTime.second) : '-:--'}
                </span>
              </div>
              
              <div className={`relative h-[4px] rounded-[4px] bg-[#4D4D4D] w-full`}>
                <div ref={seekbarRef} className={`${ isActive ? 'block' : 'hidden'} absolute bottom-0 left-0 h-[4px] rounded-[4px] bg-[white]`}></div>
              </div>
              <div className="text-[#b3b3b3] h-[17px] flex items-center justify-center">
                <span>
                  {isActive ? formatTime(duration.minute, duration.second) : '-:--'}
                </span>
              </div>
            </div>
          </div>

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
