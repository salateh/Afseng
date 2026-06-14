import { useNavBar } from "../../context/NavBar/NavBarContext";
import { configurations } from "./configurations";
import { CustomNavBarLink } from "./CustomNavBarLink";

///

export function NavBar() {
  const { isOpen, handleNavigate } = useNavBar();

  return (
    <>
      <div className="flex flex-col  items-start justify-center gap-3 ">
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
