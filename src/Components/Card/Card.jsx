import "./card.css";
import { motion } from "framer-motion";

export default function Card({ category, title, imgSrc }) {
  return (
    <motion.div
      className="card-container"
      layout
      animate={{ opacity: 1 }}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
    >
      <img src={imgSrc} alt="Project" />

      <div className="card-content">
        <p className="card-category">{category}</p>
        <h2 className="card-title">{title}</h2>
      </div>
    </motion.div>
  );
}
