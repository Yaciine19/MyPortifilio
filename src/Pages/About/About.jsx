import "./about.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function About() {
  const img = useRef();

  useGSAP(() => {
    gsap.to(img.current, {y: -35, duration: 3,repeat: -1, yoyo: true, ease: "power1.inOut",})
  })
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="top">
          <h1 className="title">About me</h1>
          <p className="subtitle">Hello again, That&apos;s me!</p>
        </div>
        <div className="bottom">
          <div className="left">
            <FaQuoteLeft className="icon"
              style={{
                left: "2rem",
                top: "5px",
              }}
            />
            <p>
              I am a student in the field of Computer Science, specializing in
              front-end development. I am currently working on improving my web
              development skills, particularly in the front-end aspect. Outside
              of tech, I am a graphic designer.
            </p>
            <FaQuoteRight
            className="icon"
              style={{
                right: "2rem",
                bottom: "5px",
              }}
            />
          </div>
          <div className="right" style={{
            textAlign: "center"
          }}>
            <img ref={img} src="/about-01.webp" alt="me" width={350} height="auto" loading="lazy"/>
          </div>
        </div>
      </div>
    </section>
  );
}
