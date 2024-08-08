import save from "../assets/icons/save.svg";
import list from "../assets/icons/list.svg";
import clock from "../assets/icons/clock.svg";
import more_white from "../assets/icons/more-white.svg";
import more_gray from "../assets/icons/more-gray.svg";
import add from "../assets/icons/add.svg";
import play_white from "../assets/icons/play-white.svg";
import play_black from "../assets/icons/play-black.svg";
import pause_white from "../assets/icons/pause-white.svg";

import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext.js";
import { tracks } from "../assets/tracks.js";

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

type SongComponentProps = {
  title: string;
  artists: string;
  duration: string;
  image: string;
  src: string;
  id: number;
};
function Song({
  title,
  artists,
  duration,
  image,
  id,
  src,
}: SongComponentProps) {
  const {
    audioRef,
    isPlaying,
    setIsPlaying,
    currentTrack,
    setCurrentTrack,
    setIsActive,
  } = useContext(PlayerContext);

  function handlePlay() {
    if (currentTrack.id === id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(true);
      setCurrentTrack({ id, src});
      setIsActive(true);
    }
  }
  return (
    <div className="song rounded-[4px] px-[16px] border-[1px] border-transparent g-cols h-[56px] ">
      <div className="flex items-center text-[#B3B3B3]">
        <div className="h-[16px] w-[16px] flex flex-col  overflow-hidden">

            {/* ANCHOR  */}
          <div
            onClick={handlePlay}
            id="small-play"
            className=" hidden cursor-pointer"
          >
            {isPlaying && currentTrack.id === id ? (
              <img width="16" height="16" src={pause_white} />
            ) : (
              <img width="16" height="16" src={play_white} />
            )}
          </div>

          <div className="flex min-h-[16px] min-w-[16px] items-center justify-center">
            {id + 1}
          </div>
        </div>
      </div>

      <div className="flex items-center ">
        <img
          width="40"
          height="40"
          src={image}
          className="rounded-[4px] mr-[12px]"
        />
        <div className="pr-[8px] flex flex-col">
          <span className="text-[#FFF]">{title}</span>
          <span className="text-[#B3B3B3] text-[13.3px]">{artists}</span>
        </div>
      </div>

      <div className="flex items-center ">
        <span className="w-[11ch] text-[#B3B3B3] text-[14px]  text-right">
          8,920,563
        </span>
      </div>

      <div className="flex items-center ">
        <span className="text-[#B3B3B3] text-[14px]">MUSE</span>
      </div>

      <div className="flex items-center justify-end  relative">
        <button id="add-small" className="mr-[12px] hidden">
          <img width="16" height="16" src={add} />
        </button>
        <span className="text-[#B3B3B3] text-[14px] mr-[28px] flex justify-end w-[5ch]">
          {duration}
        </span>
        <button id="more-small" className="absolute right-0 hidden">
          <img width="16" height="16" src={more_white} />
        </button>
      </div>
    </div>
  );
}

function Songs() {
  return (
    <main className="flex flex-col">
      {tracks.map((track) => (
        <Song
          title={track.title}
          artists={track.artists}
          duration={track.duration}
          image={track.image}
          id={track.id}
          src={track.src}
        />
      ))}
    </main>
  );
}

export default function Playlist() {
  return (
    <>
      <Title />
      <div>
        <div className="flex items-center p-[24px] justify-between">
          <div className="flex items-center">
            <button className="playbutton mr-[32px] w-[48px] h-[48px] rounded-full bg-[#1ed760] shadow-[0_8px_8px_rgba(0,0,0,.3)] flex items-center justify-center">
              <img width="25px" height="25px" src={play_black} />
            </button>

            <button className=" py-[12px] mr-[24px] flex items-center justify-center ">
              <img width="32px" height="32px" src={save} />
            </button>

            <button className=" py-[12px] mr-[24px] flex items-center justify-center ">
              <img width="32px" height="32px" src={more_gray} />
            </button>
          </div>

          <button className="px-[8px] flex items-center gap-[8px]">
            <span className=" text-[#B3B3B3]">List</span>
            <img width="16px" height="16px" src={list} />
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
            <img width="16" height="16" src={clock} />
          </div>
        </header>
        <Songs />
      </div>
    </>
  );
}
