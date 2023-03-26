import React from 'react'
import { motion } from "framer-motion";

const LocateUs = () => {
       return (
              <div>
                     <motion.div 
              initial={{x:300,scale:0.5}} animate={{x:0,scale:1}} transition={{duration:2}}
              >
                     <center>
                     
                     <h1>  LocateUs  </h1>
                     <h2>Under Construction</h2>
                     </center>

                     </motion.div>
              </div>
       )
}

export default LocateUs