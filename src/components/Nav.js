import { Link as ScrollLink } from "react-scroll";
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <ScrollLink to="projects" className="cursor-pointer">
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about-me" className="cursor-pointer">
            About Me
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="projects" className="cursor-pointer">
            Contact
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="projects" className="cursor-pointer">
            Resume
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="projects" className="cursor-pointer">
            Skills
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
