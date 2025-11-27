import { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import one from "../assets/1.webp";
import two from "../assets/2.jpg";
import four from "../assets/4.jpg";
import three from "../assets/3.jpg";

const testimonials = [
  {
    photo: one,
    client: "Nate Nuduka",
    message:
      "Working with Eichie on our React project was seamless. He writes clean, maintainable code, and his proactive approach helped us resolve issues before they became problems. I’d gladly work with him again on any project.",
  },
  {
    photo: four,
    client: "Timilehin Sunday",
    message:
      "Collaborating with Eichie has been a pleasure. He communicates clearly, contributes innovative ideas, and always ensures the team meets deadlines. His coding standards and attention to detail make him a reliable teammate.",
  },
  {
    photo: three,
    client: "Joe West",
    message:
      "Eichie delivered an excellent website for our startup. He was responsive, professional, and guided us through the entire process. The final product exceeded our expectations and added real value to our business.",
  },
  {
    photo: two,
    client: "Sarah Lee",
    message:
      "Eichie consistently demonstrates curiosity, discipline, and technical skill. He quickly grasps complex concepts and applies them effectively in his projects. His growth mindset and problem-solving ability make him stand out as a promising developer.",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideNo = testimonials.length;
  const isMobileScreen = window.innerWidth < 768;

  useEffect(() => {
    console.log(isMobileScreen);
    if (isMobileScreen) {
      const intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev === slideNo - 1 ? 0 : prev + 1));
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [isMobileScreen, slideNo]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slideNo - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section className="py-16">
      <div className="wrapper">
        <div className="mb-20 text-center sm:mx-auto md:w-[76%]">
          <h2 className="review-header text-2xl font-bold sm:text-3xl md:text-4xl">
            Valuable feedbacks from
            <br />
            clients and team
          </h2>
        </div>
        <div className="flex items-center justify-center lg:mx-auto lg:w-9/12">
          <div className="slider min-h-[320px] w-full max-w-[500px] overflow-hidden md:max-w-[600px] lg:max-w-[700px]">
            {testimonials.map((review, index) => (
              <div
                key={index}
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                }}
                className="absolute left-0 top-0 w-full text-center duration-1000"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={review.photo}
                    className="mb-4 h-20 w-20 rounded-full object-cover object-top"
                    alt={review.client}
                  />
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold">{review.client}</h3>
                    <span className="text-xs uppercase">Morero Web app</span>
                  </div>
                </div>
                <p className="text-balance">{review.message}</p>
              </div>
            ))}
          </div>
          {/* NAVIGATION BUTTONS */}
          <div className="absolute top-[56px] flex w-full justify-between gap-5">
            <button
              className={`testimonial-prev flex h-10 w-10 items-center justify-center rounded-full bg-main-200 duration-300 hover:bg-main-100  ${
                activeIndex === 0 &&
                "bg-neutral-700 opacity-20 hover:bg-neutral-700"
              }`}
              onClick={prevSlide}
            >
              <BsArrowLeft color="#ffffff" />
            </button>
            <button
              className={`testimonial-next flex h-10 w-10 items-center justify-center rounded-full bg-main-200 duration-300 hover:bg-main-100  ${
                activeIndex === slideNo - 1 &&
                "bg-neutral-700 opacity-20 hover:bg-neutral-700"
              }`}
              onClick={nextSlide}
            >
              <BsArrowRight color="#ffffff" />
            </button>
          </div>

          {/* PAGGINATION */}
          <div className="absolute bottom-0 left-1/2 inline-flex -translate-x-1/2 gap-3 sm:-translate-y-5 md:-translate-y-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot h-2 w-2 rounded-full  ${
                  index === activeIndex ? "bg-main-100" : "bg-neutral-900"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
