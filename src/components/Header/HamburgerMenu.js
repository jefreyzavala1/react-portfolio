import { FiX, FiMenu } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import DropDownMenu from "./DropDownMenu";
export default function HamburgerMenu({
  menuTrigger,
  menuOpen,
  closeMenuTrigger,
}) {
  //   return (
  //     <div>
  //       {!menuOpen ? (
  //         <span onClick={menuTrigger} className="cursor-pointer">
  //           <FiMenu />
  //         </span>
  //       ) : (
  //         <DropDownMenu className="hidden" closeMenuTrigger={closeMenuTrigger} />
  //       )}
  //     </div>
  //   );
  // }
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define your breakpoint here

  return (
    <div>
      {isMobile ? (
        <span onClick={menuTrigger} className="cursor-pointer">
          <FiMenu />
        </span>
      ) : (
        <DropDownMenu closeMenuTrigger={closeMenuTrigger} />
      )}
    </div>
  );
}
