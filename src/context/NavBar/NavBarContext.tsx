import React, { createContext, useContext } from "react";
/* eslint-disable react-refresh/only-export-components */
export interface NavBarContextType {
  handleNavigate: (path: string) => void;
  handleCloseSideBar: () => void;
  handleOpenSideBar: () => void;
  isOpen: boolean;
  currentPath: string | null;
}
interface NavBarProviderProps {
  value: NavBarContextType;
  children: React.ReactNode;
}

export const NavBarContext = createContext<NavBarContextType | undefined>(
  undefined,
);

export function NavBarProvider({ value, children }: NavBarProviderProps) {
  return (
    <NavBarContext.Provider value={value}>{children}</NavBarContext.Provider>
  );
}

export function useNavBar() {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBarContext must be used within NavBarProvider");
  }
  return context;
}
