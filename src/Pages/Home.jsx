import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import ScrollReveal from "scrollreveal";
import MobileNav from "../components/MobileNav";
import Resume from "../assets/Eichie-Resume.pdf";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu((open) => !open);
  };

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second delay
    const delay = 5000;

    // Use setTimeout to set loading to false after 5 seconds
    const timeoutId = setTimeout(() => {
      // setLoading(false);
    }, delay);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  // SCROLL REVEAL
  useEffect(() => {
    const sr = new ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 500,
      easing: "ease-in-out",
    });

    // MOBILE ANIMATION
    sr.reveal(".nav-logo", {
      origin: "left",
      distance: "20px",
    });

    sr.reveal(".nav", {
      origin: "top",
      interval: 500,
      distance: "20px",
    });

    sr.reveal(".menu", {
      origin: "right",
      distance: "20px",
    });

    sr.reveal(".hero-img", {
      // origin: "right",
      scale: 0.85,
      desktop: false,
    });

    sr.reveal(".hero-intro, .hero-title, .hero-text, .hero-btns", {
      origin: "bottom",
      distance: "20px",
      interval: 500,
    });

    sr.reveal(".hero-btns", {
      opacity: 0,
    });

    sr.reveal(".card", {
      origin: "left",
      interval: 500,
    });

    sr.reveal(".heading", {
      origin: "top",
      interval: 500,
    });

    sr.reveal(".review-header, .contact", {
      opacity: 0,
      origin: "top",
    });

    sr.reveal(".slider, .contact-form", {
      opacity: 0,
    });

    sr.reveal(".footer-logo, .copyright, .social", {
      origin: "bottom",
      interval: 500,
    });

    // DESKTOP
    sr.reveal(".resume", {
      origin: "right",
      distance: "20px",
      mobile: false,
    });

    sr.reveal(".hero-img", {
      origin: "left",
      scale: 0.85,
      mobile: false,
    });
  }, []);

  return (
    <>
      <Header openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
      <MobileNav
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        resume={Resume}
        handleOpenMenu={handleOpenMenu}
      />
      <main className="overflow-clip">
        <Hero />
        <Projects />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
