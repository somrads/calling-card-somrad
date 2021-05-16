import * as React from "react";
import { motion } from "framer-motion";
 

function Content() {

  return (

    <div className="container"> 

  <motion.div className="title">
    <motion.h1 
    animate={{ scale: 1.2 }}
    transition={{ duration: 4 }}>
      Somrad Sharma
    </motion.h1>
  </motion.div>
 

<motion.div className="foto" whileHover={{
  scale: 1.1,
  rotate:[0,1,-1,0],
  filter:[
    'hue-rotate(0) contrast(100%)',
    'hue-rotate(360deg) contrast(100%)',
    'hue-rotate(0deg) contrast(100%)',
    'hue-rotate(0) contrast(100%)',
  ],
  

}} whileTap={{ scale: 1 }} >
      
      <motion.img src="55293B37-3730-4DBE-8081-49EF26340A1A_1_105_c.jpeg" alt="foto" drag 
      dragConstraints={{left: 0, top:0, right:0, bottom: 0}}
      dragElastic={1}
      >
      </motion.img>
    </motion.div>
      

    </div>




  );
}

export default Content;
