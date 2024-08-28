import React, { useEffect, useState } from "react";
import { Navbar, MobileNav, Button, IconButton } from "@material-tailwind/react";
import logo from '../assets/logo.png';

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setNavbarVisible(false);
      } else {
        // Scrolling up
        setNavbarVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-gray-600">
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-black">
          Home
        </a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-black">
          About
        </a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-black">
          Services
        </a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-black">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white transition-transform duration-300 ease-in-out z-50 ${
        navbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ height: '60px' }} // Set height for the navbar
    >
      <Navbar className="h-full max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2"> {/* Adjusted padding */}
        <div className="flex items-center justify-between text-blue-gray-900 h-full">
          <a href="#" className="mr-4 cursor-pointer py-1.5">
            <img
              src={logo}
              alt="App Logo"
              className="h-24 w-auto" // Adjust the height and width as needed
            />
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <div className="hidden lg:flex items-center gap-x-2">
              <Button variant="text" size="sm">
                <span className="text-black">Log In</span>
              </Button>
              <Button variant="text" size="sm">
                <span className="text-black">Sign In</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="p-4">
          {navList}
          <div className="mt-4 flex flex-col gap-4">
            <Button fullWidth variant="text" size="sm">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm">
              <span>Sign In</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
