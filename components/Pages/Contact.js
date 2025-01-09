import React from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Page } from "./components";

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
    <Page className="ContactPage" id="ContactPage">
      <h1 id="ContactHeader">Contact</h1>
      <div className="content">
        <div className="contact-info">
          {[
            ["Email", `-mailto:koliur.rahman@my.liu.edu`, faEnvelope],
            ["Phone", `-tel:516-888-9701`, faPhone],
            ["GitHub", "https://github.com/dugramen", faGithub],
          ].map(([label, link, icon]) => (
            <React.Fragment key={label}>
              <FontAwesomeIcon icon={icon} className="icon" />
              <div>{label}</div>
              <a
                href={link.startsWith("-") ? link.replace("-", "") : link}
                target="_blank"
                rel="noreferrer"
              >
                {link.startsWith("-") ? link.split(":").at(-1) : link}
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
