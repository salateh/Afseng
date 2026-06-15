import React, { memo, useRef, useState } from "react";
import { useNavBar } from "../../context/NavBar/NavBarContext";
import { type CustomNavBranchLinkProps } from "./configurations";
import { createPortal } from "react-dom";

export const CustomNavBranchLink = memo(
  ({ config }: CustomNavBranchLinkProps) => {
    const { handleNavigate, isOpen, currentPath } = useNavBar();
    const Icon = config.icon;
    const isActive = currentPath === config.path;
    const [showRoute, setShowRoute] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });

    const Portal = ({ children }: { children: React.ReactNode }) => {
      return createPortal(children, document.body);
    };
    const btnRef = useRef<HTMLButtonElement>(null);
    const handleMouseEnter = () => {
      if (btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        setCoords({ top: rect.top, left: rect.right + 10 });
        setShowRoute(true);
      }
    };
    return (
      <div className="relative">
        <button
          className={`flex justify-start items-center whitespace-nowrap   hover:bg-white/20   ${isOpen ? "border border-white/5" : " "}  p-1 rounded-lg transition-colors duration-700 mb-2 gap-2 ${isActive ? " border  border-white/50" : ""}`}
          onClick={(e) => {
            e.stopPropagation();

            if (config.path) handleNavigate(config.path);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setShowRoute(false)}
          ref={btnRef}
        >
          <Icon
            color="#858585"
            strokeWidth={1.4}
            size={24}
            className="flex-shrink-0 "
          />
          <span
            className={`text-[#858585] transition-all  duration-300 ease-in-out truncate whitespace-nowrap
    ${isOpen ? "flex " : "hidden "}"}`}
          >
            {config.label}
          </span>
        </button>
        <Portal>
          <div
            className={`fixed z-[9999]  bg-[#121212] text-white/60   border border-white/20 text-sm  p-2 rounded  left-full  ml-2   pointer-events-none   ${showRoute ? "visible" : "invisible"}`}
            style={{ top: coords.top, left: coords.left }}
          >
            Go to {config.label}
          </div>
        </Portal>
      </div>
    );
  },
);
