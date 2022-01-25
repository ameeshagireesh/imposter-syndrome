import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { UserIcon } from "./Icons";

function SettingsDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function closeDropdown() {
    setDropdownOpen(false);
  }

  function openDropdown() {
    setDropdownOpen(true);
  }

  useEffect(() => {
    if (dropdownOpen) {
      dropdownRef.current?.focus();
    }
  }, [dropdownOpen]);

  function MenuProfile({ props }) {
    return (
      <>
        {true ? (
          <div className="flex gap-2 p-2 h-fit items-center" {...props}>
            <Image
              src="/profile.jpg"
              width="50px"
              height="50px"
              alt="profile image"
              className="rounded-full overflow-hidden"
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <h6 className="text-sm">Ameesha Gireesh</h6>
              <Link href="/ameeshagireesh">
                <a
                  className="text-xs text-center bg-white text-gray-900 font-bold px-1 py-0.25 w-full rounded-md"
                  onClick={closeDropdown}
                >
                  View Profile
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }

  function AuthStatus({ props }) {
    function logout() {
      console.log("logout");
    }

    return (
      <div className="p-2 flex flex-col items-center gap-2" {...props}>
        {false ? (
          <button
            onClick={logout}
            className="border-red-600 border-1 rounded-lg text-red-600 text-sm hover:bg-red-600 hover:text-white transition-all ease-in-out w-full px-2 py-0.5"
          >
            Logout
          </button>
        ) : (
          <>
            <Link href="/login">
              <a
                onClick={closeDropdown}
                className="border-white border-1 rounded-lg text-white text-center text-sm hover:bg-white hover:text-gray-900 transition-all ease-in-out w-full px-2 py-0.5"
              >
                Login
              </a>
            </Link>
            <Link href="/signup">
              <a
                onClick={closeDropdown}
                className="border-white border-1 rounded-lg text-white text-center text-sm hover:bg-white hover:text-gray-900 transition-all ease-in-out w-full px-2 py-0.5"
              >
                Signup
              </a>
            </Link>
          </>
        )}
      </div>
    );
  }

  function MenuItem({ props, children }) {
    return (
      <div onClick={closeDropdown} {...props}>
        <button className="bg-gray-900 hover:bg-gray-800 group flex items-center w-full px-3 py-2 text-base">
          {children}
        </button>
      </div>
    );
  }

  return (
    <div className="select-none">
      <div className="cursor-pointer text-xl" onClick={toggleDropdown}>
        <UserIcon />
      </div>
      <Transition
        as={Fragment}
        show={dropdownOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          id="settingsDropdown"
          className={
            "absolute right-0 w-52 mt-3 origin-top-right bg-gray-900 divide-y divide-gray-800 text-white overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
          }
          onBlur={() => closeDropdown()}
          onFocus={() => openDropdown()}
          tabIndex="0"
          ref={dropdownRef}
        >
          <MenuProfile />
          <MenuItem>Settings</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Profile</MenuItem>
          <AuthStatus />
        </div>
      </Transition>
    </div>
  );
}

export default SettingsDropdown;
