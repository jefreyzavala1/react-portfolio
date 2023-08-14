import { FiX, FiMenu } from "react-icons/fi";
import DropDownMenu from "./DropDownMenu";
export default function HamburgerMenu({
  menuTrigger,
  menuOpen,
  closeMenuTrigger,
}) {
  return (
    <div>
      {!menuOpen ? (
        <span onClick={menuTrigger} className="cursor-pointer">
          <FiMenu />
        </span>
      ) : (
        <DropDownMenu closeMenuTrigger={closeMenuTrigger} />
      )}
    </div>
  );
}
