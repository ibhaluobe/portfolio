import { BsCircleHalf, BsCodeSquare } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import Heading from "./Heading";

// eslint-disable-next-line
const myServices = [
  {
    id: 1,
    icon: <BsCircleHalf size={40} />,
    type: "WordPress Website Design",
    info: " Integrating a visually appealing and functional websites with WordPress CMS platforms.",
  },
  {
    id: 2,
    icon: <BsCodeSquare size={40} />,
    type: "Website Development",
    info: "Creating visually appealing and functional websites for businesses, individuals, or organizations.",
  },
  {
    id: 3,
    icon: <MdOutlineWeb size={40} />,
    type: "Web Application Development",
    info: "Building interactive and responsive web applications that enhance user engagement and experience.",
  },
];

const Services = () => {
  return (
    <section className="py-20" id="services">
      <div className="wrapper">
        <Heading
          text="Crafting excellence with passion. Explore my services for frontend development, tailored solutions designed with love for what I do."
          title="What I actually love to do"
        />

        <div className="flex w-full flex-wrap justify-center gap-8">
          {myServices.map((service) => (
            <Service {...service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line
const Service = ({ icon, type, info }) => {
  return (
    <div className="card relative z-20 box-border w-full rounded-lg border border-neutral-800 border-opacity-60 bg-neutral-900 bg-opacity-50 p-7 pt-10 sm:h-[235px] md:w-[calc(50%_-_20px)] md:flex-grow md:last:w-7/12 lg:w-[calc(33%_-_20px)_!important] ">
      <div>
        <span className="text-neutral-50">{icon}</span>
        <h3 className="mt-4 text-balance text-lg font-semibold">{type}</h3>
        <p className="mt-2">{info}</p>
      </div>
    </div>
  );
};

export default Services;
