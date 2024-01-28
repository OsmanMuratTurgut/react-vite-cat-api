import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  HeartIcon,
  } from "@heroicons/react/24/outline";


 function Nav(props) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navItems = [
        { id: 1, text: "Ana Sayfa" },
        { id: 2, text: "Kategoriler" },
        { id: 3, text: "Yorumlar" },
        { id: 4, text: "Hakkımızda" },
        { id: 5, text: "İletişim" },
      ];
  return (
    <div className='navbar bg-gray-100 dark:bg-gray-600 border-b'>
     <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
           
            <div className="flex items-center gap-16 my-12">
           
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 dark:text-gray-200 items-center "
                >
                  <HeartIcon className="h-6 w-6 text-primary" />
                  <span>Logo</span>
                </a>
              </div>
            
              <ul className="hidden lg:flex gap-8 ">
              {navItems.map((item) => (
                <li className="cursor-pointer" key={item.id}>
                  {item.text}
                </li>
              ))}
              </ul>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className=" flex items-center gap-10">
                <div className="flex items-center gap-2" onClick={props.toggleDarkMode}>
                {props.darkMode ? (
                   <SunIcon className="h-6 w-6" />
                  
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 dark:bg-gray-600 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <ul className="flex flex-col gap-8 font-bold tracking-wider">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer text-center"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {item.text}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Nav.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
  };
export default Nav;