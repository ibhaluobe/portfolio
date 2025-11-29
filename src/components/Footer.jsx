import { BsLinkedin } from "react-icons/bs";
// import { BsBehance } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
import Eichie from "../assets/eichie.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <footer
        id="footer"
        className="bg-[url(./assets/footer.svg)] bg-cover bg-center bg-no-repeat py-16"
      >
        <div className="section">
          <div className="flex flex-col items-center justify-center gap-y-8">
            <a href="#">
              <img
                src={Eichie}
                className="footer-logo w-[90px] sm:w-[100px]"
                alt="Eichie Ibhaluobe Logo"
              />
            </a>

            <div className="social flex items-center justify-center gap-5">
              <Link
                to="https://www.linkedin.com/in/ibhaluobe-john"
                target="_blank"
                aria-label="linkedin"
              >
                <BsLinkedin
                  size={20}
                  className="fill-white duration-300 hover:fill-main-100"
                />
              </Link>
              {/* <Link to="#" target="_blank" aria-label="behance">
                <BsBehance
                  size={20}
                  className="fill-white duration-300 hover:fill-main-100"
                />
              </Link> */}
              <Link
                to="https://github.com/ibhaluobe"
                target="_blank"
                aria-label="github"
              >
                <BsGithub
                  size={20}
                  className="fill-white duration-300 hover:fill-main-100"
                />
              </Link>
              <Link
                to="https://x.com/ibhaluobeE"
                target="_blank"
                aria-label="twitter-x"
              >
                <BsTwitterX
                  size={20}
                  className="fill-white duration-300 hover:fill-main-100"
                />
              </Link>
              {/* <Link
                to="https://instagram.com/itzibhaluobe"
                target="_blank"
                aria-label="instagram"
              >
                <BsInstagram
                  size={20}
                  className="fill-white duration-300 hover:fill-main-100"
                />
              </Link> */}
            </div>

            <p className="copyright mt-10 text-balance text-center">
              Designed and Developed by Eichie John &copy; {currentYear}.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
