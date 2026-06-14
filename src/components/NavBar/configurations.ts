import type React from "react";
import {
  BicepsFlexed,
  Construction,
  Plus,
  type LucideProps,
} from "lucide-react";

interface Configuration {
  path?: string;
  icon: React.ComponentType<LucideProps>;
  label: string;
  configuration?: Configuration[];
}

export interface CustomNavLinkProps {
  isOpen: boolean;
  configuration: Configuration;
  onNavigate: (path: string) => void;
}
export interface CustomNavBranchLinkProps {
  config: Configuration;
}

export const configurations: Configuration[] = [
  {
    icon: BicepsFlexed,
    label: "Workouts",
    configuration: [
      { path: "/create-workout", icon: Plus, label: "Create Workout" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
    ],
  },
  {
    icon: Construction,
    label: "Without a path",
    configuration: [
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
    ],
  },
  {
    icon: Construction,
    label: "Without a path",
    configuration: [
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
    ],
  },
  {
    icon: Construction,
    label: "Without a path",
    configuration: [
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
    ],
  },
  {
    icon: Construction,
    label: "Without a path",
    configuration: [
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
    ],
  },
  {
    icon: Construction,
    label: "Without a path",
    configuration: [
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
    ],
  },
  {
    icon: Construction,
    label: "Without a path",
    configuration: [
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
      { icon: Construction, label: "Without a path" },
    ],
  },
];
