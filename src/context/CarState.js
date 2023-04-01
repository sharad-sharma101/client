import CarContext from "./CarContext";
import React , { useState } from "react";

const CarState = (props) => {
  
  //const host = "https://marketplace-server-frjo.onrender.com";
  const [user, setUser] = useState(null);

  return (
    <CarContext.Provider value={{ user, setUser}}>
      {props.children}
    </CarContext.Provider>
  )

}

export default CarState;