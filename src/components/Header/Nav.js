import { Link as ScrollLink } from "react-scroll";
export default function Nav() {
  return (
    <nav className="hidden lg:flex  border border-black-500">
      <ul className="flex space-x-10">
        <li>
          <ScrollLink
            to="projects"
            className="cursor-pointer hover:text-blue-500"
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about-me"
            className="cursor-pointer hover:text-blue-500"
          >
            About Me
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            className="cursor-pointer hover:text-blue-500"
          >
            Contact
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            className="cursor-pointer hover:text-blue-500"
          >
            Resume
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            className="cursor-pointer hover:text-blue-500"
          >
            Skills
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
