import { BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-900 bg-opacity-20 py-16">
      <div className="wrapper">
        <div className="lg:flex lg:justify-between">
          <div className="w-full lg:flex lg:w-[48%] lg:flex-col lg:justify-between">
            <div className="mb-10">
              <div className="flex items-center justify-start gap-3">
                <span className="relative h-[2px] w-8 bg-main-100 after:absolute after:-top-[0.2rem] after:right-0 after:inline-block after:h-2 after:w-2 after:rounded-full after:bg-main-100"></span>
                <p>Contact me</p>
              </div>
              <h2 className="mt-2 text-3xl font-bold md:text-3xl lg:text-[2.6rem] lg:leading-[125%]">
                Let&apos;s Chat.
                <br />
                Tell me about your project.
              </h2>
            </div>

            <div className="lg:mb-6">
              <div className=" mt-3 grid grid-cols-[32px_1fr] items-center">
                <BsEnvelope size={20} />
                <p>eichieibhaluobe@gmail.com</p>
              </div>

              <Link
                to="https://wa.link/1c3b09"
                target="_blank"
                className="mt-3 grid grid-cols-[32px_1fr] items-center"
              >
                <BsWhatsapp size={20} />
                <span>+2349138854196</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 rounded-lg border border-neutral-800 bg-neutral-900 bg-opacity-50 p-8 shadow-[0_0_30px_rgba(0_0_0_0.6)] md:mx-auto md:mt-16 md:w-10/12 lg:mt-0 lg:w-[50%]">
            <h3 className="mb-8 text-lg font-semibold md:text-xl">
              Write your message
            </h3>
            <form
              id="contact-form"
              className="contact-form flex w-full flex-col items-start"
            >
              <label className="mb-6 w-full">
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  autoComplete="off"
                  required
                />
                <span className="ml-2">Your name</span>
              </label>
              <label className="mb-6 w-full">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  autoComplete="off"
                  required
                />
                <span className="ml-2">Your email</span>
              </label>
              <label className="mb-6 w-full">
                <textarea
                  name="message"
                  id="message"
                  className="h-[120px]"
                  required
                ></textarea>
                <span className="ml-2">Your message</span>
              </label>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="btn mt-8 self-end bg-main-100 text-white hover:bg-main-200"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
