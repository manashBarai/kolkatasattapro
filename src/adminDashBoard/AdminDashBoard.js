import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import FreeAd from "./FreeAd";
import Notice from "./Notice";
import Fact from "./Fact";
import Movement from "./Movement";
import Result from "./Result";
import ImportantNote from "./ImportantNote";
import ImportantFact from "./ImportantFact";
import AlterNative from "./AlterNative";

const AdminDashBoard = () => {
  const [option, setOption] = useState("freeAd");

  const options = (i) => {
    setOption(i)
  };

  return (
    <>

      <div className="my-5">
        <div className="container  d-flex justify-content-between flex-column flex-lg-row">


          <div className="col-12 col-lg-3 bg-info rounded  h-100">

            <div style={{ height: '80vh' }} className="d-flex flex-column rounded  gap-2 p-4 bg-white  justify-content-between ">

              <ul className="list-unstyled d-flex flex-column gap-1">

                <li
                  style={{ background: option === "freeAd" ? "var(--myTheme-color)" : "var(--optionBackground-color)" }}
                  className="rounded"
                >
                  {" "}
                  <button style={{ color: option === "freeAd" ? "var(--optionTextActive-color)" : "var(--primaryText-color)" }}
                    className="text-start p-2 border btn w-100"
                    onClick={() => options("freeAd")}
                  >
                    {" "}
                    Free Ad
                  </button>{" "}
                </li>

                <li
                  style={{ background: option === "Notice" ? "var(--myTheme-color)" : "var(--optionBackground-color)" }}
                  className="rounded"
                >
                  {" "}
                  <button style={{ color: option === "Notice" ? "var(--optionTextActive-color)" : "var(--primaryText-color)" }}
                    className="text-start p-2 border btn w-100"
                    onClick={() => options("Notice")}
                  >
                    {" "}
                    Notice
                  </button>{" "}
                </li>
                <li
                  style={{ background: option === "fact" ? "var(--myTheme-color)" : "var(--optionBackground-color)" }}
                  className="rounded"
                >
                  {" "}
                  <button style={{ color: option === "fact" ? "var(--optionTextActive-color)" : "var(--primaryText-color)" }}
                    className="text-start p-2 border btn w-100"
                    onClick={() => options("fact")}
                  >
                    {" "}
                    Advertise
                  </button>{" "}
                </li>
                <li
                  style={{ background: option === "movement" ? "var(--myTheme-color)" : "var(--optionBackground-color)" }}
                  className="rounded"
                >
                  {" "}
                  <button style={{ color: option === "movement" ? "var(--optionTextActive-color)" : "var(--primaryText-color)" }}
                    className="text-start p-2 border btn w-100"
                    onClick={() => options("movement")}
                  >
                    {" "}
                    Movement
                  </button>{" "}
                </li>
                <li
                  style={{ background: option === "importantNote" ? "var(--myTheme-color)" : "var(--optionBackground-color)" }}
                  className="rounded"
                >
                  {" "}
                  <button style={{ color: option === "importantNote" ? "var(--optionTextActive-color)" : "var(--primaryText-color)" }}
                    className="text-start p-2 border btn w-100"
                    onClick={() => options("importantNote")}
                  >
                    {" "}
                    Important Note
                  </button>{" "}
                </li>
                <li
                  style={{ background: option === "importantFact" ? "var(--myTheme-color)" : "var(--optionBackground-color)" }}
                  className="rounded"
                >
                  {" "}
                  <button style={{ color: option === "importantFact" ? "var(--optionTextActive-color)" : "var(--primaryText-color)" }}
                    className="text-start p-2 border btn w-100"
                    onClick={() => options("importantFact")}
                  >
                    {" "}
                    Important Fact
                  </button>{" "}
                </li>
                <li
                  style={{ background: option === "alterNative" ? "var(--myTheme-color)" : "var(--optionBackground-color)" }}
                  className="rounded"
                >
                  {" "}
                  <button style={{ color: option === "alterNative" ? "var(--optionTextActive-color)" : "var(--primaryText-color)" }}
                    className="text-start p-2 border btn w-100"
                    onClick={() => options("alterNative")}
                  >
                    {" "}
                    AlterNative SattaKing
                  </button>{" "}
                </li>
                <li
                  style={{ background: option === "result" ? "var(--myTheme-color)" : "var(--optionBackground-color)" }}
                  className="rounded"
                >
                  {" "}
                  <button style={{ color: option === "result" ? "var(--optionTextActive-color)" : "var(--primaryText-color)" }}
                    className="text-start p-2 border btn w-100"
                    onClick={() => options("result")}
                  >
                    {" "}
                    Result
                  </button>{" "}
                </li>
              </ul>

              {/* left side dashboard */}
              <ul className="list-unstyled ">
                <li className="mt-2 my-1 px-3 py-2 rounded-2 d-flex gap-2 items-center border">
                  Settings
                </li>
                <li className=" my-1 px-3 py-2 rounded-2 d-flex gap-2 items-center border">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      localStorage.clear();

                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-9 position-relative  px-4 rounded">

            <div className="bg-body p-4 rounded">
              {option === 'freeAd' && <FreeAd />}
              {option === 'Notice' && <Notice />}
              {option === 'importantNote' && <ImportantNote />}
              {option === 'importantFact' && <ImportantFact />}
              {option === 'alterNative' && <AlterNative />}
              {option === 'fact' && <Fact />}
              {option === 'movement' && <Movement />}
              {option === 'result' && <Result />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
