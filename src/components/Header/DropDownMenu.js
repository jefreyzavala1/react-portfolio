import { FiX } from "react-icons/fi";
export default function DropDownMenu({ closeMenuTrigger }) {
  return (
    <aside className="fixed top-0 right-0 h-full bg-white shadow-md z-50 transform transition-transform lg:translate-x-0 lg:hidden">
      <div className="flex justify-end p-4">
        <span>
          <FiX onClick={closeMenuTrigger} />
        </span>
        <ul className="p-4">
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            Projects
          </li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            About Me
          </li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            Resume
          </li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            Contact
          </li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">
            Skills
          </li>
        </ul>
      </div>
    </aside>
  );
}
