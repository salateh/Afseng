import { useNavBar } from "../../context/NavBar/NavBarContext";
import { configurations } from "./configurations";
import { CustomNavBarLink } from "./CustomNavBarLink";

///

export const NavBar = ()=> {
  const { isOpen, handleNavigate } = useNavBar();

  return (
    <>
      <div className="flex flex-col w-full items-start justify-start   ">
        {configurations.map((a, index) => {
          return (
            <CustomNavBarLink
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
