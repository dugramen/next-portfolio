import React from "react";
import emailjs from "emailjs-com";
import { Page } from "./components";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

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
    <Page className="ContactPage justify-center" id="ContactPage">
      <h1 id="ContactHeader">Contact</h1>
      <div className="content">
        <div className="contact-info">
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
          ].map(([label, link, icon]) => (
            <React.Fragment key={label}>
              {icon}
              <div>{label}</div>
              <a
                href={link.startsWith("-") ? link.replace("-", "") : link}
                target="_blank"
                rel="noreferrer"
              >
                {link?.startsWith("-") ? link?.split(":").at(-1) : link}
              </a>
            </React.Fragment>
          ))}
        </div>

        <form>
          <div className="form-item">
            <label> Name </label>
            <input
              name="name"
              value={formData.name}
              type="text"
              onChange={handleChange}
              id="EmailName"
            />
          </div>

          <div className="form-item">
            <label> Email </label>
            <input
              name="email"
              type={"email"}
              value={formData.email}
              onChange={handleChange}
              id="EmailEmail"
            />
          </div>

          <div className="form-item">
            <label> Message </label>
            <textarea
              name="message"
              type={"text"}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            className="submit-button gradient-button"
            onClick={(e) => {
              // e.preventDefault();
              emailjs
                .send(
                  "service_tfyur9m",
                  "template_c477dlr",
                  formData,
                  "bm1VLqjOUpOWDi8FS"
                )
                .then(
                  (result) => {
                    window.location.reload();
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </Page>
    // <div className="Page ContactPage" id="ContactPage">
    // </div>
  );
}
