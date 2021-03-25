import React from "react";

export const Cup = ({ box, position, jackpot,setPlay }) => {

  function result(){
    alert(jackpot?"Anda benar !":"Anda salah !")
    setPlay(false)
  }

  return (
    <div onClick={()=>result()} className={`${box} cursor-pointer flex box1 absolute ${position}  leading-10 h-10 w-10 bg-gray-100 text-gray-700 `}>
      <div className={jackpot ? jackpot : null}></div>
    </div>
  );
};
