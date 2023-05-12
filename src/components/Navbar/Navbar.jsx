import { desktopIcon, logoOrgin, phone, whatsapp } from "../../assets";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 px-4 shadow-lg shadow-gray-100">
      <div>
        <img src={logoOrgin} alt="Logo" />
      </div>
      <div className="flex">
        <div className="flex gap-2 items-center border-r border-gray-400 px-3">
          <img className="w-7" src={desktopIcon} alt="" />
          <h4 className="text-blue-600">Switch Journey</h4>
        </div>
        <div className="flex gap-2 items-center border-r border-gray-400 px-3">
          <img className="w-5" src={phone} alt="" />
          <h4 className="text-blue-600">04 247 2904</h4>
        </div>
        <div className="flex gap-2 items-center px-3">
          <img className="w-5" src={whatsapp} alt="" />
          <h4 className="text-blue-600">042472904</h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
