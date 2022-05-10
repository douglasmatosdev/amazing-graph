import React from "react";
import Hamburger from "./Hamburger";
import MenuList from "./MenuList";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-9 mb-3">
        <div className="container px-6 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize text-orange"
              href="#"
            >
              DevChallenge
            </a>
            <Hamburger
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          </div>
          <div
            className={"lg:flex flex-grow items-center justify-end" + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <MenuList />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar