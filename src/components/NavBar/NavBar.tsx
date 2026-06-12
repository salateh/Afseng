import {
  BicepsFlexed,
  Construction,
  Plus,
  type LucideProps,
} from "lucide-react";
import React, { memo,  } from "react";
import { useNavBar } from "../../context/NavBar/NavBarContext";

interface Configuration {
  path?: string;
  icon: React.ComponentType<LucideProps>;
  label: string;
  configuration?: Configuration[];
}
interface CustomNavLinkProps {
  isOpen: boolean;
  configuration: Configuration;
  onNavigate: (path: string) => void;
}
///
interface CustomNavBranchLinkProps {
  config: Configuration;

}
export const CustomNavLink = memo(
  ({ isOpen, configuration, onNavigate }: CustomNavLinkProps) => {
    const { label, icon, path, configuration: config } = configuration;
    const Icon = icon;

    return (
      <>
        <div className="flex flex-col gap-1.5  items-start">
          <div
            className=""
            onClick={() => {
              if (path) onNavigate(path);
              else {
                alert("!");
              }
            }}
          >
            <div className="flex justify-center items-center whitespace-nowrap  ">
              <Icon color="#858585" strokeWidth={1.4} size={24} />
              <span
                className={`text-[#858585] relative left-2 whitespace-nowrap  transition-all duration-0
    ${isOpen ? "opacity-100 max-w-full visible" : "opacity-0 max-w-0 overflow-hidden invisible"}`}
              >
                {label}
              </span>
            </div>
          </div>
          {/* =============== */}

          {config?.map((a, index) => (
            <CustomNavBranchLink
              config={a}
              key={`${a.icon}-${a.label}-${a.path}-${index}`}
            />
          ))}
        </div>
      </>
    );
  },
);
export const CustomNavBranchLink = memo(
  ({ config}: CustomNavBranchLinkProps) => {
    const {handleNavigate,isOpen}= useNavBar()
    const Icon = config.icon;
    return (
      <div
        className="flex justify-center items-center whitespace-nowrap"
        onClick={() => {
          if (config.path) handleNavigate(config.path);
          else {
            alert("!");
          }
        }}
      >
        <Icon color="#858585" strokeWidth={1.4} size={24} />
        <span
          className={`text-[#858585] relative left-2 whitespace-nowrap  transition-all duration-0
    ${isOpen ? "opacity-100 max-w-full visible" : "opacity-0 max-w-0 overflow-hidden invisible"}`}
        >
          {config.label}
        </span>
      </div>
    );
  },
);

const configuration: Configuration[] = [
  {
    icon: BicepsFlexed,
    label: "Workouts",
    configuration: [
      { path: "/create-workout", icon: Plus, label: "Create Workout" },
    ],
  },
  {
    icon: Construction,
    label: "Without a path",
  },
];
export function NavBar() {
const {isOpen,handleNavigate}=useNavBar()

  return (
    <>
      <div className="flex flex-col  items-start justify-center gap-3">
        {configuration.map((a, index) => {
          return (
            <CustomNavLink
              isOpen={isOpen}
              configuration={a}
              onNavigate={handleNavigate}
              key={`${a.icon}-${a.label}-${a.path}-${index}`}
            />
          );
        })}
      </div>
    </>
  );
}
