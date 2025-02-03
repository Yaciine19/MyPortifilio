import "./header.css";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const listItems = [
  { li: "Home", href: "#home" },
  { li: "About", href: "#about" },
  { li: "Projects", href: "#projects" },
  { li: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  const showListItem = listItems.map((item, index) => (
    <a key={index} href={item.href} onClick={handleOpenClick}>
      <li>{item.li}</li>
    </a>
  ));

  useEffect(() => {
    const handleClick = (e) => {
      itemList.forEach((item) => item.classList.remove("active"));
      e.currentTarget.classList.add("active");
    };

    const itemList = document.querySelectorAll("header nav ul li");
    itemList.forEach((item) => item.addEventListener("click", handleClick));

    return () => {
      itemList.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <header>
      <div className="flex header">
        {/* ======================= */}
        <div className="menu" onClick={handleOpenClick}>
          <LuMenu
            className="menu-icon"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* =================== */}
        <nav>
          <ul className="flex">
            <a href="#home">
              <li className="active">Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
      {/* ============== Pop-Up =================== */}
      {isOpen && (
        <div className="modal">
          <ul className="menu-modal">
            {showListItem}
          </ul>
          <div className="close" onClick={handleOpenClick}>
            <IoClose
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
