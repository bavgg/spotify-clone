import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <>
      <div className="grid grid-cols-template grid-rows-template h-screen p-[var(--panel-gap)]">
        <Sidebar/>
        <div className="main-view bg-[var(--background-base)]"></div>
        <div className="right-sidebar bg-[var(--background-base)]">Right Sidebar</div>
        <div className="now-playing-bar bg-[var(--background-base)]">Now Playing Bar</div>
      </div>
    </>
  );
}

export default App;