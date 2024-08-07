import React, { createContext, useRef, ReactNode } from "react";



export const PlayerContext = createContext<{audioRef: React.MutableRefObject<HTMLAudioElement | null> } | undefined>(undefined);

export function PlayerProvider({children} : {children: ReactNode}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return <PlayerContext.Provider value={{ audioRef }}>
    {children}
  </PlayerContext.Provider>;
}
