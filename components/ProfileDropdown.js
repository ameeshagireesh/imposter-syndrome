import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

export default function ProfileDropdown({ dropdownItems }) {
  function scrollToElement(element) {
    const e = document.querySelector(element);
    if (e) {
      e.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }

  return (
    <div className="text-right fixed top-14 right-2 sm:right-4 md:right-8 lg:right-28 z-30">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="z-10 inline-flex justify-center w-full p-2 text-2xl font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-44 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-900 text-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {dropdownItems.map((item, index) => {
              return (
                <Menu.Item
                  key={`dropdown${index}`}
                  onClick={() => scrollToElement(item.navigateTo)}
                >
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-900" : "bg-gray-800"
                      } group flex items-center w-full px-3 py-2 text-base`}
                    >
                      {active ? item.activeIcon : item.inactiveIcon}
                      {item.title}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
