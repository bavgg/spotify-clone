import home from "../assets/icons/home.svg";
import search from "../assets/icons/search.svg";
import expand from "../assets/icons/expand.svg";

import { Link } from "react-router-dom";

function HomeLink() {
  return (
    <Link to="/" className="flex h-[48px] items-center py-1 px-3">
      <img width="24px" height="24px" src={home} />
    </Link>
  );
}
export default function Sidebar() {
  return (
    <div className="rounded-[8px] left-sidebar bg-black flex flex-col gap-[var(--panel-gap)]">
      <div className=" py-2 px-3 bg-[var(--background-base)]">
        <HomeLink />
        <a className="flex h-[48px] items-center py-1 px-3">
          <img width="24px" height="24px" src={search} />
        </a>
      </div>

      <div className="bg-[var(--background-base)]">
        <header className="py-[8px] px-[16px]">
          <a className="flex h-[40px] w-[40px] items-center  justify-center">
            <img width="24px" height="24px" src={expand} />
          </a>
        </header>

        <div className="flex flex-col px-[4px]">
          <div className="p-[8px]">
            <img
              height="48px"
              width="48px"
              className=" rounded-[4px]"
              src="https://misc.scdn.co/liked-songs/liked-songs-64.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
