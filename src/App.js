import './App.css';
import './content.css';
import Content from './content';
import React, {useState } from "react";
import {motion} from "framer-motion";


function App() {


  const infoList = [
    {
      id: 0,
      Title: `Personal Info`,
      Content: `1998-11-7, Belgium, Leuven`
    },
    {
      id: 1,
      Title: `I Like`,
      Content: `listening and making music`

    },
    {
      id: 2,
      Title: `LinkedIn`,
      Content: <a href="https://www.linkedin.com/in/somrad-sharma-a32a981a3/"target="_blank">LinkedIn</a>
    },
    {
      id: 3,
      Title: `My songs`,
      Content: <a href="https://soundcloud.com/user-692532452/popular-tracks" target="_blank">Soundcloud</a>

    }
  ];

  const [selected, setSelected] = useState(0);

  return (
  
    <div className="content">

    <Content/>

    <motion.div className="info-container">
     {infoList.map(info => {
       return(
        <motion.ol    
        key={info.id}
        className={`info ${info.id === selected && "selected"}`}
          onClick={() => setSelected(info.id)}
          whileTap= {{scale: 2, rotate:[0,10,-10,0]} }
          whileHover={
            {filter:[
              'hue-rotate(0) contrast(100%)',
              'hue-rotate(360deg) contrast(100%)',
              'hue-rotate(0deg) contrast(100%)',
              'hue-rotate(0) contrast(100%)',
            ]}
          }
    
          >
          <motion.li>

            <motion.h1  whileHover={{
              rotate:[0,1,-1,0],
            }} >
              {info.Title}

            </motion.h1>

            <h4>

              {info.Content}
            </h4>

          </motion.li>

      </motion.ol>

       )
     })}

    </motion.div> 
  </div>


  );
}

export default App;
