import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
 function App() {
  const [toogle, setToogle] = useState(false);
   const clickHandler = () => {
    setToogle(!toogle);
   };
  useEffect(() => {
    document.title = toogle ? `Using the useEffect hook` : `Welcome to Learning World`;
  }, [toogle]);
  return (
   
    <div >
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Message</button>
      {toogle && <h2> Welcome to Learning World</h2>}

    </div>
  );

}
export default App; 