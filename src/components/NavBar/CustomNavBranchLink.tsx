import React, { memo, useRef, useState } from "react";
import { useNavBar } from "../../context/NavBar/NavBarContext";
import { type CustomNavBranchLinkProps } from "./configurations";
import { createPortal } from "react-dom";
import { Button } from "../Button/Button";

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
      <div className="relative w-max">
        <Button
          classes={`whitespace-nowrap hover:bg-white/20 p-1 rounded-lg transition-all duration-700 mb-2
    ${isOpen ? "border border-white/5 w-full justify-start" : "w-max justify-center mx-auto"} 
    ${isActive ? "border border-white/50" : ""}`}
          icon={
            <Icon
              color="#858585"
              strokeWidth={1.4}
              size={24}
              className="flex-shrink-0"
            />
          }
          onClick={(e) => {
            e.stopPropagation();
            if (config.path) handleNavigate(config.path);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setShowRoute(false)}
          ref={btnRef}
        >
          <span
            className={`text-[#858585] transition-all duration-300 ease-in-out truncate whitespace-nowrap  ${
              isOpen ? "inline" : "hidden"
            }`}
          >
            {config.label}
          </span>
        </Button>

        <Portal>
          <div
            className={`fixed z-[9999] bg-[#121212] text-brand-muted border border-brand-muted text-sm p-2 rounded pointer-events-none ${
              showRoute ? "flex" : "hidden"
            }`}
            style={{ top: coords.top, left: coords.left }}
          >
            Go to {config.label}
          </div>
        </Portal>
      </div>
    );
  },
);
