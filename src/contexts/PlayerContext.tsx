import React, { createContext, useRef, ReactNode, useState } from "react";

type PlayerContextType = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  currentTrack: { id: number, src: string, duration: string };
  setCurrentTrack: (track: { id: number, src: string, duration: string } ) => void;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  isSetToRepeat: boolean;
  setIsSetToRepeat: (value: boolean) => void;
};
export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({ id: -1, src: '', duration: '0:00'});
  const [isSetToRepeat, setIsSetToRepeat] = useState(false);


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
        setIsSetToRepeat
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
