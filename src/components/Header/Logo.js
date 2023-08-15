import logo from "../../images/icon.jpg";
export default function Logo() {
  return (
    <div className="flex items-center border border-red-500">
      <div className="rounded-full overflow-hidden h-20 w-20 mr-2">
        <img src={logo} alt="Logo" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
