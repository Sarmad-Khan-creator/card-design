import cardBack from "../assets/images/bg-card-back.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { InputContext } from "../context/input-context";

const CardBack = () => {
  const x = window.matchMedia("(max-width: 400px)");
  const { data } = useContext(InputContext);
  return (
    <motion.div 
    initial={x.matches ? { opacity: 0, left: 300} : { opacity: 0, top: 500}}
    animate={x.matches ? { opacity: 1, left: 64 } : { opacity: 1, top: 384}}
    transition={{ type: "spring", duration: 2}}
    className="min-w-max min-h-max absolute left-56 top-96 max-sm:left-16 max-sm:top-7">
      <img src={cardBack} alt="card back" className="max-sm:w-[320px] max-sm:h-[180px]"/>
      <p className="absolute left-[370px] top-[108px] textFamily text-white max-sm:left-[255px] max-sm:top-[80px] max-sm:text-sm">{data.cvc}</p>
    </motion.div>
  );
};

export default CardBack;
