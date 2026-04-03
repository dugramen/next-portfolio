import React from "react";
import emailjs from "emailjs-com";
import { Page } from "./PageComponent";
import { FaBluesky } from "react-icons/fa6";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { GradientButton } from "./GradientButton";

export default function ContactPage(props) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData((old) => ({
      ...old,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Page
      className="ContactPage justify-center"
      id="ContactPage"
      style={{ width: "100%" }}
    >
      <h1 id="ContactHeader">Contact</h1>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row items-center gap-0 max-h-6">
          {[
            [
              "Email",
              `-mailto:koliurrahman123@gmail.com`,
              <FaEnvelope className="icon" key={"email"} />,
            ],
            [
              "Phone",
              `-tel:516-888-9701`,
              <FaPhone className="icon" key={"ph"} />,
            ],
            [
              "GitHub",
              "https://github.com/dugramen",
              <FaGithub className="icon" key={"gh"} />,
            ],
            [
              "BlueSky",
              "https://bsky.app/profile/dugtrioramen.bsky.social",
              <FaBluesky className="icon" key={"bs"} />,
            ],
            [
              "LinkedIn",
              "https://linkedin.com/in/koliur-rahman-0b5430334",
              <FaLinkedin className="icon" key={"li"} />,
            ],
          ].map(([label, link, icon]) => (
            <a
              key={label}
              href={link.startsWith("-") ? link.replace("-", "") : link}
              target={link.startsWith("-") ? "_self" : "_blank"}
              rel="noreferrer"
              className="text-2xl hover:text-5xl active:text-xl transition-all duration-300 p-2 relative group/link"
            >
              {icon}
              <div className="
                absolute z-20 bottom-full left-1/2 -translate-x-1/2 
                transition-all duration-300
                whitespace-nowrap scale-50 opacity-0 group-hover/link:opacity-100 group-hover/link:scale-100
                text-center rounded-md py-1 px-2 mt-1
                text-xs text-white bg-black/75
              ">
                {link.startsWith("-") ? link.replace("-", "") : link}
              </div>
            </a>
            /* <React.Fragment key={label}>
              {icon}
               <div>{label}</div> 
               <a
                href={link.startsWith("-") ? link.replace("-", "") : link}
                target="_blank"
                rel="noreferrer"
              >
                {link?.startsWith("-") ? link?.split(":").at(-1) : link}
              </a> 
            </React.Fragment> */
          ))}
        </div>

        <form className="
          [&_input]:py-2 [&_input]:px-2 
          [&_input]:focus:shadow-lg [&_input]:focus:shadow-black [&_input]:focus:outline-none
          [&_label]:font-bold [&_label]:text-sm text-black/75
          flex flex-col items-stretch gap-2 w-full
        ">
          <div className="form-item">
            <label> Name </label>
            <div>
              <input
                name="name"
                value={formData.name}
                type="text"
                onChange={handleChange}
                id="EmailName"
              />
            </div>
          </div>

          <div className="form-item">
            <label> Email </label>
            <div>
              <input
                name="email"
                type={"email"}
                value={formData.email}
                onChange={handleChange}
                id="EmailEmail"
              />
            </div>
          </div>

          <div className="form-item">
            <label> Message </label>
            <div>
              <textarea
                name="message"
                type={"text"}
                value={formData.message}
                onChange={handleChange}
                className="p-2 min-w-60"
              />
            </div>
          </div>

          {/* <button
            className="submit-button gradient-button"
            onClick={(e) => {
              // e.preventDefault();
              emailjs
                .send(
                  "service_tfyur9m",
                  "template_c477dlr",
                  formData,
                  "bm1VLqjOUpOWDi8FS",
                )
                .then(
                  (result) => {
                    window.location.reload();
                  },
                  (error) => {
                    console.log(error.text);
                  },
                );
            }}
          >
            Submit
          </button> */}
          <GradientButton
            text="Submit"
            onClick={(e) => {
              e.preventDefault();
              emailjs
                .send(
                  "service_tfyur9m",
                  "template_c477dlr",
                  formData,
                  "bm1VLqjOUpOWDi8FS",
                )
                .then(
                  (result) => {
                    alert("Message sent successfully! I will get back to you as soon as possible.");
                    window.location.reload();
                  },
                  (error) => {
                    alert("An error occurred while sending your message. Please try again later.");
                    // console.log(error.text);
                  },
                );
            }}
          />
        </form>
      </div>
    </Page>
    // <div className="Page ContactPage" id="ContactPage">
    // </div>
  );
}
