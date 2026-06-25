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
      <div
        className="grid h-screen overflow-hidden grid-areas-layout grid-cols-1 md:grid-cols-[var(--sidebar-width)_1fr] transition-[grid-template-columns] duration-300 ease-in-out grid-rows-[auto_1fr] "
        style={
          {
            "--sidebar-width": isOpen ? "13rem" : "3.5rem",
          } as React.CSSProperties
        }
      >
        <header className="[grid-area:header] flex flex-wrap bg-app-surface  items-center justify-between  shadow-md p-6 z-10 sticky top-0  border-b  border-app-border-muted "></header>

        <aside
          className={`[grid-area:sidebar] hidden md:block bg-app-surface shadow-md border-e contain-layout overflow-y-auto   overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-app-border-muted `}
          onMouseEnter={handleOpenSideBar}
          onMouseLeave={handleCloseSideBar}
        >
          <div className="flex flex-col justify-start  items-start relative left-1 p-3 w-52">
            <NavBar />
          </div>
        </aside>

        <main className="[grid-area:main]  bg-app-surface p-6 m-0 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </NavBarProvider>
  );
}
