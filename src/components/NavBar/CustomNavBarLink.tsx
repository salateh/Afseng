import { ChevronRight } from "lucide-react";
import { memo, useState } from "react";
import type { CustomNavLinkProps } from "./configurations";
import { CustomNavBranchLink } from "./CustomNavBranchLink";
import { Button } from "../Button/Button";

export const CustomNavBarLink = memo(
  ({ isOpen, configuration, onNavigate }: CustomNavLinkProps) => {
    const { label, icon, path, configuration: config } = configuration;
    const Icon = icon;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <>
        <div
          className="flex items-center mb-3 group hover:bg-border-focus/35 cursor-pointer  rounded-lg"
          onClick={() => {
            if (path) onNavigate(path);
            if (config) setIsExpanded(!isExpanded);
          }}
        >
          <Button
            classes="flex flex-1 justify-start items-center overflow-hidden"
            icon={
              <Icon
                color={`${isExpanded && isOpen ? "#dfdfdf" : "#858585"}`}
                strokeWidth={1.4}
                size={24}
                className="flex-shrink-0 w-6"
              />
            }
          >
            <span
              className={`ml-2 transition-opacity duration-300 ease-in-out truncate whitespace-nowrap ${
                isOpen ? "opacity-100" : "opacity-0"
              } ${isExpanded ? "text-[#dfdfdf]" : "text-[#858585]"}`}
            >
              {label}
            </span>
          </Button>

          {!path && isOpen && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-6 h-6 flex justify-center items-center ml-2 flex-shrink-0"
            >
              <ChevronRight
                color={`${isExpanded && isOpen ? "#dfdfdf" : "#858585"}`}
                className={`${
                  isExpanded ? "rotate-90" : "rotate-0"
                } transition-transform duration-300 hover:bg-white/5 rounded-lg`}
              />
            </button>
          )}
        </div>

        <div
          className={`${isExpanded ? "block" : "hidden"} transition-all duration-700 ease-in-out ${
            isOpen ? "ml-1" : ""
          }`}
        >
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
