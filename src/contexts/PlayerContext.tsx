import React, { createContext, useRef, ReactNode, useState, useEffect } from "react";

type PlayerContextType = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  seekbarRef: React.MutableRefObject<HTMLDivElement | null>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  currentTrack: { id: number, src: string };
  setCurrentTrack: ((value: { id: number; src: string }) => void ) & ((  value:  (track: { id: number, src: string }) =>  { id: number, src: string } ) => void);
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  isSetToRepeat: boolean;
  setIsSetToRepeat: (value: boolean) => void;
  currentTime: { minute: number, second: number},
  setCurrentTime: ( value: { minute: number, second: number}) => void
  duration: { minute: number, second: number},
  setDuration: ( value: { minute: number, second: number}) => void
};
export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const seekbarRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({ id: -1, src: ''});
  const [isSetToRepeat, setIsSetToRepeat] = useState(false);
  const [ currentTime, setCurrentTime ] = useState({minute: 0, second: 0});
  const [ duration, setDuration ] = useState({minute: 0, second: 0});
  // const [ seekbarWidth, setSeekbarWidth ] = useState(0);
  


  function handleOnTimeUpdate() {
    setCurrentTime({
      minute: Math.floor((audioRef.current?.currentTime ?? 0) / 60),
      second: Math.floor((audioRef.current?.currentTime ?? 0 ) % 60),
    });

    setDuration({
      minute: Math.floor((audioRef.current?.duration ?? 0) / 60),
      second: Math.floor((audioRef.current?.duration ?? 0 ) % 60),
    }) ;

    const audioElement = audioRef.current;
    const seekbarElement = seekbarRef.current;
    if(audioElement && seekbarElement) {
      const seekbarWidth = Math.floor((audioRef.current?.currentTime ?? 0)  / (audioRef.current?.duration ?? 0 ) * 100);
      console.log("🚀 ~ handleOnTimeUpdate ~ seekbarWidth:", seekbarWidth)
      seekbarElement.style.width = seekbarWidth + '%';
    }

  }
  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) audioElement.ontimeupdate = handleOnTimeUpdate;

  }, [audioRef])

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        isPlaying,
        setIsPlaying,
        currentTrack,
        setCurrentTrack,
        isActive,
        setIsActive,
        isSetToRepeat, 
        setIsSetToRepeat,
        currentTime,
        setCurrentTime,
        duration, setDuration,
        seekbarRef
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
