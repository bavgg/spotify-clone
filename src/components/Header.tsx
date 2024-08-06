import back from "../assets/back.svg";
import next_clay from "../assets/next-clay.svg";
import download from "../assets/download.svg";
import bell from "../assets/bell.svg";
function BackNext() {
  return (
    <div className="flex gap-[8px]">
      <button className="h-[32px] w-[32px] bg-[rgba(0,0,0,.7)] rounded-[50%] border-none flex items-center justify-center text-white">
        <img width="16px" height="16px" src={back} />
      </button>
      <button className="h-[32px] w-[32px] bg-[rgba(0,0,0,.7)] rounded-[50%] border-none flex items-center justify-center text-white">
        <img width="16px" height="16px" src={next_clay} />
      </button>
    </div>
  );
}
export default function Header() {
  return (
    <header className=" top-0 right-[8px] h-[64px] sticky w-full flex items-center">
      <div className="px-[var(--content-spacing)] w-full flex gap-[8px] items-center justify-between">
        <BackNext />
        <div className="flex items-center gap-[8px]">
          <button className="flex items-center justify-center rounded-full bg-white border-none">
            <span className="px-[16px] py-[4px] font-[700] text-[13.3px]">
              Explore Premium
            </span>
          </button>
          <a className="relative bg-black rounded-full">
            <span className=" text-white font-[700] text-[13.3px] py-[4px] pl-[33px] pr-[16px]">
              Install App
            </span>
            <span className="absolute left-[12px] top-[6px]">
              <img width="16px" height="16px" src={download} />
            </span>
          </a>
          <button className="h-[32px] w-[32px] rounded-full bg-black flex items-center justify-center">
            <img width="16px" height="16px" src={bell} />
          </button>
          <button className="h-[32px] w-[32px] rounded-full bg-black flex items-center justify-center">
            <span
              className="h-[24px] w-[24px] rounded-full font-[700] text-[13.3px] encore-text encore-text-body-small-bold NqzueDshzvgXEygqOGPG"
              data-encore-id="text"
              style={{
                backgroundColor: "rgb(180, 155, 200)",
                color: "rgb(0, 0, 0)",
                lineHeight: "24px",
              }}
              data-testid="username-first-letter"
            >
              U
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
