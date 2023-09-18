import React from "react";
import SpinnerLoader from "../../assets/spinner.svg"

function Spinner() {
  return (
    <div className="h-full w-full flex items-center justify-center  bg-[#0000004a] absolute top-0 left-0 z-[1000]">
      <div className="w-24 h-24 rounded-full animate-spin bg-conic-gradient bg-clip-padding mask-radial animate-spin">
      <img src={SpinnerLoader} alt="" />
      </div>
    </div>
  );
}

export default Spinner;
