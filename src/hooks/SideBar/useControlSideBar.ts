// import { useState } from "react";

import { useState } from "react";

export const useControlSideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenSideBar = () => setIsOpen(true);
  const handleCloseSideBar = () => setIsOpen(false);

  return { isOpen, handleCloseSideBar, handleOpenSideBar };
};
