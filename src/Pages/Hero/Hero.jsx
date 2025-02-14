import "./hero.css";
import { IoMdArrowForward } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function Hero() {
  const figma = useRef();
  const linkedin = useRef();
  const instagram = useRef();
  const search = useRef();

  useGSAP(() => {
    gsap.to(figma.current, {
      x: 170,
      y: -250,
      duration: 1,
      opacity: 1,
      delay: 0.5,
      ease: "circ",
      onComplete: () => {
        gsap.to(figma.current, {
          x: "-=2",
          y: "+=8",
          yoyo: true,
          repeat: -1,
          duration: 1,
          ease: "power1.inOut",
        });
      },
    });
    gsap.to(instagram.current, {
      x: 270,
      y: -100,
      duration: 1.3,
      opacity: 1,
      delay: 0.3,
      ease: "circ",
      onComplete: () => {
        gsap.to(instagram.current, {
          rotate: "-=360",
          x: "-=3",
          y: "+=6",
          yoyo: true,
          repeat: -1,
          duration: 4,
          ease: "power2.inOut",
        });
      },
    });
    gsap.to(linkedin.current, {
      x: -220,
      y: -200,
      duration: 1.5,
      opacity: 1,
      delay: 0.4,
      ease: "circ",
      onComplete: () => {
        gsap.to(linkedin.current, {
          rotate: "+=360",
          x: "+=2",
          y: "+=7",
          yoyo: true,
          repeat: -1,
          duration: 3,
          ease: "power2.inOut",
        });
      },
    });
    gsap.to(search.current, {
      x: -280,
      y: -50,
      duration: 1.7,
      opacity: 1,
      delay: 0.2,
      ease: "circ",
      onComplete: () => {
        gsap.to(search.current, {
          scale: 1.1,
          yoyo: true,
          repeat: -1,
          duration: 1,
          ease: "power1.inOut",
        });
      },
    });
  }, {});
  return (
    <section className="container" id="home">
      <div className="top">
        <p className="hello">
          Hello!
          <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="M50,10 Q55,50 50,60"
              stroke="rgb(9, 104, 229)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M35,35 Q41,60 40,60"
              stroke="rgb(9, 104, 229)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M80,25 Q65,50 60,60"
              stroke="rgb(9, 104, 229)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </p>

        <h1 className="content">
          I&apos;m <span>Yacine</span>, Frontend Developer &{" "}
          <span>Graphic</span> Designer.
          <svg
            width="100"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="M50,10 Q55,50 50,60"
              stroke="rgb(9, 104, 229)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M35,35 Q41,60 40,60"
              stroke="rgb(9, 104, 229)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M80,25 Q65,50 60,60"
              stroke="rgb(9, 104, 229)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </h1>
      </div>

      <div className="img-container">
        <img className="myImg" src="/myImg.webp" alt="img" />

        {/* 3D icons */}
        <img
          className="figma"
          ref={figma}
          src="/figma.webp"
          alt="figma"
          width={70}
        />
        <img
          ref={instagram}
          className="instagram"
          src="/instagram.webp"
          alt="instagram"
          width={70}
        />
        <img
          ref={linkedin}
          className="linkedin"
          src="/linkedin.webp"
          alt="linkedin"
          width={70}
        />
        <img
          ref={search}
          className="search"
          src="/search.webp"
          alt="search"
          width={70}
        />
      </div>

      <div className="buttons">
        <a href="#about">
          <div className="portifilio">
            Portifilio
            <IoMdArrowForward
              style={{
                fontSize: "1.3rem",
                rotate: "-45deg",
                transition: ".3s",
              }}
            />
          </div>
        </a>
      </div>

      <div className="subTitle"></div>
    </section>
  );
}
