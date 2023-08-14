import { FiX } from "react-icons/fi";
export default function DropDownMenu({ closeMenuTrigger }) {
  return (
    <div>
      <span>
        <FiX onClick={closeMenuTrigger} />
      </span>
      <ul>
        <li>Projects</li>
        <li>About Me</li>
        <li>Resume</li>
        <li>Contact</li>
        <li>Skills</li>
      </ul>
    </div>
  );
}
