import React from "react";

const Header = () => {
  return (
    <>
    <div className="d-flex  justify-content-between ">
      <div className=" p-2 border border-white text-uppercase fw-bold fs-6 text-center text-white w-100 flex-1 bg-danger">
        Home
      </div>
      <div
        style={{ background: "var(--myTheme-color)" }}
        className=" p-2 border  border-white text-uppercase fw-bold fs-6 text-center text-white w-100 flex-2"
      >
        Satta king{" "}
      </div>
      <div
        style={{ background: "var(--myTheme-color)" }}
        className=" p-2 border  border-white text-uppercase fw-bold fs-6 text-center text-white w-100 flex-2"
      >
        SATTA CHART
      </div>
      <div
        style={{ background: "var(--myTheme-color)" }}
        className=" p-2 border  border-white text-uppercase fw-bold fs-6 text-center text-white w-100 flex-2"
      >
        SATTA KING 2024
      </div>
      <div
        style={{ background: "green" }}
        className=" p-2 border border-white text-uppercase fw-bold fs-6 text-center text-white   w-100 flex-1"
      >
        SATTA leak
      </div>
    </div>
    </>

    
  );
};

export default Header;
