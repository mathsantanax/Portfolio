import { motion } from "framer-motion";
import Parte1 from "../../assets/parte-1.svg";
import Parte2 from "../../assets/parte-2.svg";

export default function LogoScroll() {
  return (
    <div className="h-screen flex items-center justify-center mr-40">
      <motion.div
        initial={{ x: "-200px", opacity: 0 }}
        animate={{ y:"0", x: "120px", opacity: 1 }}
        transition={{ duration: 2, delay: 8 }}
        className="absolute drop-shadow-[15px_0px_8px_#ff6b6e]"
      >
        <img src={Parte1} alt="Parte 1" className="w-[150%] " />
      </motion.div>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        animate={{y:"30px", x: "0", opacity: 1 }}
        transition={{ duration: 2, delay: 8 }}
        className="absolute drop-shadow-[15px_0px_8px_#ff3b3e] "
      >
        <img src={Parte2} alt="Parte 2" className="w-[150%]" />
      </motion.div>
    </div>
  );
}
