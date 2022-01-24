import SettingsDropdown from "../settingsDropdown";

function Navbar() {
  return (
    <nav className="w-full h-12 bg-gray-900 flex justify-between items-center px-2 sm:px-4 md:px-8 lg:px-28 fixed top-0 z-50">
      <div>Logo</div>
      <div className="flex gap-4 text-xl">
        <SettingsDropdown />
      </div>
    </nav>
  );
}

export default Navbar;
