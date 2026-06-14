import React, { useCallback, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import "./layout.style.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { useControlSideBar } from "../../hooks/SideBar/useControlSideBar";
import { NavBarProvider } from "../../context/NavBar/NavBarContext";

export function MainLayout() {
  const { isOpen, handleCloseSideBar, handleOpenSideBar } = useControlSideBar();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState<null | string>(
    useLocation().pathname,
  );
  const handleNavigate = useCallback(
    (path: string) => {
      navigate(path);
      setCurrentPath(path);
    },
    [navigate],
  );
  return (
    <NavBarProvider
      value={{
        isOpen,
        handleCloseSideBar,
        handleOpenSideBar,
        currentPath,
        handleNavigate,
      }}
    >
      <div className="grid h-screen overflow-hidden grid-areas-layout grid-cols-1 md:grid-cols-[auto_1fr] grid-rows-[auto_1fr] ">
        <header className="[grid-area:header] flex flex-wrap bg-[#181818] items-center justify-between  shadow-md p-6 z-10 sticky top-0  border-b border-gray-500/40 ">
        
        </header>

        <aside
          className={`[grid-area:sidebar] hidden md:block p-3   max-w-64  shadow-md border-e  overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-gray-500/40 ${isOpen ? "open" : "closed"}`}
          onMouseEnter={handleOpenSideBar}
          onMouseLeave={handleCloseSideBar}
        >
          <div className="flex flex-col justify-center items-start  relative left-1 ">
            <NavBar />
          </div>
        </aside>

        <main className="[grid-area:main]  bg-inherit p-6 m-0 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </NavBarProvider>
  );
}
