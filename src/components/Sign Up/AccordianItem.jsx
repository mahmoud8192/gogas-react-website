import { motion, AnimatePresence } from "framer-motion";

function AccordianItem({ text, children, active, clickDetailHandler, id }) {
  const style = {
    base:
      "w-full h-full text-[1.1rem] cursor-pointer  transition-opacity text-[#969696]  px-10  bg-[#F5F5F5] capitalize  leading-14 hover:opacity-70",
    tabDetail: "w-full h-fit overflow-hidden"
  };

  return (
   <>
  <div onClick={() => clickDetailHandler(id)} className={`${style.base}  ${active?"text-black":""}`}>
    {text}
  </div>

  <AnimatePresence>
    {active && (
      <motion.div
        key="accordion"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className={`${style.tabDetail}`}
      >
        <div style={{ padding: "10px" }}>
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</>

  );
}

export default AccordianItem;
