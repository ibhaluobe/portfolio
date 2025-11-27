import Heading from "./Heading";
import { Link } from "react-router-dom";
// import Porker from "../assets/porker.png";
import Dashboard from "../assets/dashboard.png";
import Signup from "../assets/signup.png";
import Browser from "../assets/browser.png";
// import Bankify from "../assets/bankify.png";
import News from "../assets/news.png";

const myProjects = [
  {
    prototype: News,
    tools: ["HTML", "CSS", "JavaScript"],
    title: "News Homepage",
    link: "https://news-homepage-main-inky-six.vercel.app/",
    description:
      "A modern, responsive news homepage designed for optimal viewing on mobile and desktop",
    active: true,
  },
  {
    prototype: Browser,
    tools: ["HTML", "CSS", "JavaScript"],
    title: "Browser Extension",
    link: "https://browser-extension-main.vercel.app",
    description:
      "A custom browser extension interface project with a clean, responsive design",
    active: true,
  },
  {
    prototype: Signup,
    tools: ["HTML", "CSS", "JavaScript"],
    title: "Signup Form",
    link: "https://signup-form001.vercel.app/",
    description:
      "A responsive contact form with validation to ensure accurate input before submission",
    active: true,
  },
  {
    prototype: Dashboard,
    tools: ["HTML", "CSS", "JavaScript"],
    title: "User Dashboard",
    link: "https://user-dashboard-john.vercel.app/",
    description:
      "A responsive user dashboard with CRUD functionality, API integration, dark mode, and search filtering.",
    active: true,
  },
  // {
  //   prototype: Porker,
  //   tools: ["React", "TypeScript", "E-commerce"],
  //   title: "Porker Hut",
  //   link: "https://pokerhut-dev.vercel.app/",
  //   description: "Agro Commerce – Livestock, Feeds, and Pig Carcasses",
  //   active: true,
  // },
  // {
  //   prototype: Bankify,
  //   tools: ["React", "JavaScript", "Tailwind CSS"],
  //   title: "Bankify",
  //   link: "https://pucezbank.vercel.app/",
  //   description: "Online Banking, Instant Transfer, Swift Account Closing",
  //   active: false,
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 pt-20">
      <div className="wrapper">
        <Heading
          text=" Discover some of the products i've got the opportunity to work and learn about my process."
          title="What I recently worked on"
        />
        <div className="flex flex-wrap items-center justify-between gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {myProjects.map((project, index) => (
            <Link
              to={project.active ? project.link : "#"}
              target={project.active ? "_blank" : "_self"}
              key={index}
              className="card group w-full cursor-pointer overflow-hidden rounded-lg bg-neutral-900 p-5"
            >
              <div className="w-full">
                <span
                  className={`mb-2 rounded-md bg-main-200 bg-opacity-10 p-2 text-xs text-main-200 ${
                    !project.active ? "inline-block" : "hidden"
                  }`}
                >
                  Coming Soon
                </span>
                <p className="text-sm uppercase tracking-widest">
                  {project.title}
                </p>

                <h3 className="mb-3 text-balance text-xl font-semibold">
                  {project.description}
                </h3>
              </div>
              <div className="flex gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-neutral-800 px-3 py-2 text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <img
                src={project?.prototype}
                alt="project"
                // className="mt-12 w-full duration-500 group-hover:translate-y-4 group-hover:scale-[1.2]"
                className="mt-8 w-full duration-500 group-hover:-translate-y-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
