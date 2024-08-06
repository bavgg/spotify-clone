import { createContext, MutableRefObject, ReactNode, useRef } from "react";

type AudioContextType = {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <AudioContext.Provider value={{ audioRef }}>
      {children}
    </AudioContext.Provider>
  );
}