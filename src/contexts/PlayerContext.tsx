import React, { createContext, useRef, ReactNode, useState } from "react";


type PlayerContextType = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>,
}
export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({children} : {children: ReactNode}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);



  return <PlayerContext.Provider value={{ audioRef }}>
    {children}
  </PlayerContext.Provider>;
}
