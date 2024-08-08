import React, { createContext, useRef, ReactNode, useState } from "react";

type PlayerContextType = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  currentTrack: { id: number, src: string };
  setCurrentTrack: (track: { id: number, src: string } ) => void;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};
export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({ id: -1, src: ''});


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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
