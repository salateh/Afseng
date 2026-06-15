import { ChevronRight } from "lucide-react";
import { memo, useState } from "react";
import type { CustomNavLinkProps } from "./configurations";
import { CustomNavBranchLink } from "./CustomNavBranchLink";

export const CustomNavBarLink = memo(
  ({ isOpen, configuration, onNavigate }: CustomNavLinkProps) => {
    const { label, icon, path, configuration: config } = configuration;
    const Icon = icon;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <>
        <button
          className="flex w-full justify-start items-center mb-3 "
          onClick={() => {
            if (path) onNavigate(path);
            if (config) setIsExpanded(!isExpanded);
          }}
        >
          <div className="flex items-center flex-1 overflow-hidden ">
            <Icon
              color={`${isExpanded && isOpen ? "#dfdfdf" : "#858585"}`}
              strokeWidth={1.4}
              size={24}
              className="flex-shrink-0 w-6"
            />
            <span
              className={` ml-2 transition-opacity duration-300 ease-in-out  truncate whitespace-nowrap
   ${isOpen ? "opacity-100" : "opacity-0"} ${isExpanded ? "text-[#dfdfdf]" : "text-[#858585]"}`}
            >
              {label}
            </span>
          </div>
          {!path && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className=" w-6 flex justify-center items-center ml-2 flex-shrink-0"
            >
              <ChevronRight
                color={`${isExpanded && isOpen ? "#dfdfdf" : "#858585"}`}
                className={`${isExpanded && isOpen ? "rotate-90" : "rotate-0"} transition-transform duration-300 hover:bg-white/5 rounded-lg `}
              />
            </div>
          )}
        </button>
        {/* {isExpanded && isOpen && ( */}
        <div
          className={`${isExpanded ? "block" : "hidden "} transition-all duration-700 ease-in-out ${isOpen ? "ml-3" : ""}`}
        >
          {config?.map((a, index) => (
            <CustomNavBranchLink
              config={a}
              key={`${a.icon}-${a.label}-${a.path}--I${index}`}
            />
          ))}
        </div>
        {/* )} */}
      </>
    );
  },
);
