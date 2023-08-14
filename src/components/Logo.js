import logo from "../images/icon.jpg";
export default function Logo() {
  return (
    <div className="">
      <a href="/">
        <img src={logo} alt="Logo" className="h-32 w-32" />
      </a>
    </div>
  );
}
