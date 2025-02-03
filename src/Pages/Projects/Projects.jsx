import { useState } from "react";
import Card from "../../Components/Card/Card";
import { motion, AnimatePresence } from "framer-motion";
import "./project.css";

const MyProjects = [
  {
    category: "UI/UX",
    Title: "Orderide App Design",
    imgScr: "/Projects/orderide-01-01.webp",
    value: "uiux",
  },
  {
    category: "UI/UX",
    Title: "Lectura App Design",
    imgScr: "/Projects/lectura-01.webp",
    value: "uiux",
  },
  {
    category: "Logos",
    Title: "Yonicode (Personal Logo)",
    imgScr: "/Projects/Artboard 3@2x.png",
    value: "logos",
  },
  {
    category: "Logos",
    Title: "Public Speaking (Rise & Resonate)",
    imgScr: "/Projects/public Speaking logo-04.webp",
    value: "logos",
  },
  {
    category: "Web Site",
    Title: "Landing Page",
    imgScr: "/Projects/landing page.png",
    value: "websites",
  },
  {
    category: "Web Site",
    Title: "Dashboard",
    imgScr: "/Projects/dashboard.png",
    value: "websites",
  },
  {
    category: "Web Site",
    Title: "ChemVision Workshop (SESC club)",
    imgScr: "/Projects/chemvison.png",
    value: "websites",
  },
];

const FilterBtns = [
  { name: "All", value: "all" },
  { name: "UI/UX", value: "uiux" },
  { name: "Logos", value: "logos" },
  { name: "Web Sites", value: "websites" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const ShowFilterBtns = FilterBtns.map((item, index) => (
    <li key={index} onClick={() => handleFilterClick(item.value)}>
      {item.name}
    </li>
  ));

  const handleFilterClick = (value) => {
    setFilter(value);
  };

  const filterProjects =
    filter === "all"
      ? MyProjects
      : MyProjects.filter((item) => item.value === filter);

  const ShowProjectsCards = filterProjects.map((item, index) => (
    <Card
      key={index}
      category={item.category}
      title={item.Title}
      imgSrc={item.imgScr}
    />
  ));
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="top">
          <h1 className="title">Project</h1>
          <p className="subtitle">
            This is some of my work. I hope you like it
          </p>
        </div>
        <div className="bottom ">
          <ul>{ShowFilterBtns}</ul>

          <motion.div className="bottom-bottom" layout>
            <AnimatePresence>{ShowProjectsCards}</AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
