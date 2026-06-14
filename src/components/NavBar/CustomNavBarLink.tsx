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
          className="flex w-full  items-center "
          onClick={() => {
            if (path) onNavigate(path);
          }}
        >
          <div className="flex whitespace-nowrap ">
            <Icon
              color={`${isExpanded && isOpen ? "#dfdfdf" : "#858585"}`}
              strokeWidth={1.4}
              size={24}
              className="flex-shrink-0"
            />
            <span
              className={` relative left-2   transition-all duration-700 flex-1 text-left 
    ${isOpen ? "opacity-100 max-w-full visible" : "opacity-0 w-0  invisible"} ${isExpanded ? "text-[#dfdfdf]" : "text-[#858585]"}`}
            >
              {label}
            </span>
          </div>
          {!path && isOpen && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="flex-shrink-0 w-6 flex justify-center items-center ml-3"
            >
              <ChevronRight
                color={`${isExpanded && isOpen ? "#dfdfdf" : "#858585"}`}
                className={`${isExpanded && isOpen ? "rotate-90" : "rotate-0"} transition-transform duration-700 hover:bg-white/5 rounded-lg `}
              />
            </div>
          )}
        </button>
        <div className={`${isExpanded && isOpen ? "block" : "hidden "}`}>
          {config?.map((a, index) => (
            <CustomNavBranchLink
              config={a}
              key={`${a.icon}-${a.label}-${a.path}--I${index}`}
            />
          ))}
        </div>
      </>
    );
  },
);
