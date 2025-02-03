import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../Animation/done.json";
import contactAnimation from "../../Animation/contact.json";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mrbekrrw");
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="top">
          <h1 className="title">Contact me</h1>
          <p className="subtitle">
            Feel free to reach out – I&apos;m just a message away!
          </p>
        </div>

        <div className="bottom">
          <div className="left">
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <label htmlFor="email">Email Address:</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Adress"
                />
                <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
              </div>

              <div
                className="flex"
                style={{ marginTop: "24px", alignItems: "start" }}
              >
                <label htmlFor="message">Your message:</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  placeholder="Message"
                />
                <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="submit"
                style={{ cursor: state.submitting ? "not-allowed" : "pointer", }}
              >
                {state.submitting ? "Sending..." : "Send"}
              </button>
              {state.succeeded && (
            <h3
              className="flex"
              style={{ marginTop: "1rem", alignItems: "center", color: '#fff', }}
            >
              <Lottie
                animationData={doneAnimation}
                style={{ height: 37 }}
                loop={false}
              />
              Your message has been sent successfully! 👌
            </h3>
          )}
            </form>
          </div>
          <div className="right">
            <Lottie
              style={{ height: 355 }}
              animationData={contactAnimation}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
