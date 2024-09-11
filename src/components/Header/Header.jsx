import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header({ inLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${inLogin ? 'relative md:p-0' : ' absolute top-4 left-0 right-0 z-50'} text-black w-full`}>
      <div className={`${inLogin ? "w-full md:w-4/5 flex justify-between items-center py-4 px-4 md:px-20" : "w-full md:w-4/5 flex justify-between items-center py-4 px-4 "}`}>
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold">Your Logo</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />} {/* Toggle between menu and close icon */}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 md:space-x-6 font-semibold">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              `block py-2 duration-200 ${
                isActive ? 'text-secondary' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              `block py-2 duration-200 ${
                isActive ? 'text-secondary' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary`
            }
          >
            Electronics
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `block py-2 duration-200 ${
                isActive ? 'text-secondary' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary`
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 duration-200 ${
                isActive ? 'text-secondary' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block py-2 duration-200 ${
                isActive ? 'text-secondary' : 'text-gray-700'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
            }
          >
            Login
          </NavLink>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 rounded-md md:hidden animate-slideDown">
            <nav className="flex flex-col items-center space-y-4">
              <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                  `block py-2 duration-200 ${
                    isActive ? 'text-secondary' : 'text-gray-700'
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary`
                }
                onClick={toggleMenu} // Close menu on item click
              >
                Home
              </NavLink>
              <NavLink
                to="/electronics"
                className={({ isActive }) =>
                  `block py-2 duration-200 ${
                    isActive ? 'text-secondary' : 'text-gray-700'
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary`
                }
                onClick={toggleMenu} // Close menu on item click
              >
                Electronics
              </NavLink>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `block py-2 duration-200 ${
                    isActive ? 'text-secondary' : 'text-gray-700'
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary`
                }
                onClick={toggleMenu} // Close menu on item click
              >
                Contacts
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 duration-200 ${
                    isActive ? 'text-secondary' : 'text-gray-700'
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary`
                }
                onClick={toggleMenu} // Close menu on item click
              >
                About
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 duration-200 ${
                    isActive ? 'text-secondary' : 'text-gray-700'
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                }
                onClick={toggleMenu} // Close menu on item click
              >
                Login
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
