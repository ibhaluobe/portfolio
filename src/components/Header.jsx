import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Eichie from "../assets/eichie.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { BsArrowUpShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import Resume from "../assets/Eichie-Resume.pdf";

// eslint-disable-next-line react/prop-types
const Header = ({ openMenu, handleOpenMenu }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 640);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // BACK TO TOP
  const handleToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <header
        className={`left-0 top-0 z-[999] w-full overflow-x-hidden py-4 duration-300 ${
          isSticky
            ? "fixed translate-y-0 bg-primary-400 bg-opacity-70 shadow-lg backdrop-blur-xl"
            : "absolute -translate-y-1"
        }`}
      >
        <nav className="wrapper flex items-center justify-between">
          <Link to="/">
            <img
              src={Eichie}
              className="nav-logo w-[90px] sm:w-[100px]"
              alt="Eichie John Logo"
            />
          </Link>
          <div className="hidden text-neutral-100 lg:inline-flex lg:gap-10">
            <ScrollLink to="hero" className="nav cursor-pointer">
              About
            </ScrollLink>
            <ScrollLink to="projects" className="nav cursor-pointer">
              Projects
            </ScrollLink>
            <ScrollLink to="services" className="nav cursor-pointer">
              Services
            </ScrollLink>
            <ScrollLink to="contact" className="nav cursor-pointer">
              Contact
            </ScrollLink>
          </div>

          <Link
            to={Resume}
            target="_blank"
            download="eichie-resume.pdf"
            className="resume group hidden items-center gap-2 lg:flex"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-main-100 bg-opacity-20 duration-300 after:h-2 after:w-2 after:rounded-full after:bg-main-100 after:shadow-sm group-hover:scale-75"></span>
            <span className="text-neutral-100">My Resume</span>
          </Link>

          <button
            className="menu relative z-[9999] flex h-[30px] w-[30px] cursor-pointer items-center justify-center lg:hidden"
            onClick={handleOpenMenu}
          >
            <span
              className={`absolute left-0 top-0 duration-300 ${
                openMenu ? "opacity-0" : "opacity-100"
              }`}
            >
              <HiOutlineMenuAlt4 size={32} color="#fff" />
            </span>
            <span
              className={`absolute left-0 top-0 duration-300 ${
                openMenu ? "opacity-100" : "opacity-0"
              }`}
            >
              <IoCloseOutline size={32} color="#fff" />
            </span>
          </button>
        </nav>
      </header>
      {/* BACK TO TOP */}
      <button
        onClick={handleToTop}
        className={`fixed right-4 z-50 flex h-12 w-12 items-center  justify-center rounded-full border  border-neutral-800 bg-neutral-900 bg-opacity-80 text-neutral-50 backdrop-blur-lg duration-300 hover:bg-main-100 ${
          isSticky ? "bottom-6" : "-bottom-12"
        }`}
      >
        <BsArrowUpShort size={24} />
      </button>
    </>
  );
};

export default Header;
