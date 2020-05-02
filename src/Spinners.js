import React from "react";
import ClipLoader from "react-spinners/HashLoader";

export default function Spinners(){
 
  return(
    <div className="sweet">
      <h1 className="l">Loading...</h1>
    <ClipLoader
      size={150}
      color={"#C6003E"}
      loading={true}
      className='loader'
    />
  </div>
  );
}
