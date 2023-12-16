import { useContext } from "react";
import { motion } from "framer-motion";
import { InputContext } from "../context/input-context";
import cardLogo from "../assets/images/card-logo.svg";

const CardFront = () => {
  const x = window.matchMedia("(max-width: 400px)")

  const { data } = useContext(InputContext);
  return (
    <motion.div 
    initial={x.matches ? { opacity: 0, left: -150} : { opacity: 0, top: -70}}
    animate={x.matches ? { opacity: 1, left: 16} : { opacity: 1, top: 112}}
    transition={{ type: "spring", duration: 2 }}
    className="cardFrontBackground w-[450px] h-[245px] bg-no-repeat absolute left-28 top-28 py-5 px-7 max-sm:w-[320px] max-sm:h-[180px] bg-contain z-10 max-sm:left-4 max-sm:top-[130px]">
      <img src={cardLogo} alt="card logo" />
      <p className="mt-20 text-3xl textFamily text-white tracking-widest max-md:text-xl max-sm:mt-10">{data.number}</p>
      <div className="w-ful flex justify-between mt-3 max-sm:mt-1">
        <p className="textFamily text-white text-lg max-sm:text-base">{data.name}</p>
        {data.month && data.year && <p className="textFamily text-white text-lg max-sm:text-base">{data.month}/{data.year}</p>}
      </div>
    </motion.div>
  );
};

export default CardFront;
