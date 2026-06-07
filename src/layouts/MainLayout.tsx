import React from "react";
import { Outlet } from "react-router";
import "./layout.style.css";

export function MainLayout() {
  return (
    <div className="grid min-h-screen grid-areas-layout grid-cols-1 md:grid-cols-[180px_1fr] grid-rows-[auto_1fr_auto] ">
      <header className="[grid-area:header]   bg-gradient-to-r from-zinc-900/70 via-stone-600/40 to-zinc-900/70  flex items-center justify-between  shadow-md p-6 z-10 sticky top-0  "></header>
      <aside className="[grid-area:sidebar] hidden md:block bg-slate-600  h-screen  p-5 sticky top-0 z-10 shadow-md "></aside>

      <main className="[grid-area:main]  bg-stone-800 p-6">
        <Outlet />
      </main>

      <footer className="[grid-area:footer]  bg-zinc-950 p-6 z-10 text-white flex  items-center justify-evenly  "></footer>
    </div>
  );
}
