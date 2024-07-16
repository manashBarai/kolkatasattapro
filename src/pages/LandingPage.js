import React, { useState } from "react";
import "./LandingPage.css";
import { useGlobalSkills } from "../context/skillContext";
import rupeeIcon from './images/rupee.png'
import ServiceAd from "../component/ServiceAd";
import { monthNames } from "../staticData/MonthArray";
import ResultDisplay from "../component/ResultDisplay";
import YearMonthSelector from "../component/YearMonthSelector";
import axios from "axios";
import NoticeBoard from "../component/NoticeBoard";
import SattaImportantNote from "../component/SattaImportantNote";
const LandingPage = () => {
  const { isLoading, freeAd, currentMonthChart, updatedAdArray, importantFact, alterNative } = useGlobalSkills();
  const today = new Date().getDate()
  const [searchDate, setSearchDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1.
  })
  const handleDateChange = async (year, month) => {

    setSearchDate((prev) => ({
      ...prev,
      year: year,
      month: month
    }));
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}result?year=${year}&month=${month}`)
      if (res.status === 200) {
        updatedAdArray(res.data, 'CHART_CURRENT_MONTH')
      }
    } catch (error) {
      console.log(error);
    }

  };


  if (isLoading) {
    return <div>
      Loading...
    </div>

  }
  return (
    <>
      <div className="firstSection py-4 border border border-white rounded">
        <h3 className="text-center text-yellow">LEAK JODI DHAMAKA</h3>
        <h5 className="text-center text-yellow">
          DLB FB GAZYIABAD KOLKATA KING GALI DISAWER
          <h3 className="text-center text-yellow">Mr. RAHUL KING  <br /> <span className="text-white">7830972958</span>  </h3>
        </h5>
      </div>
      <ul className="secondSection list-unstyled d-flex justify-content-center py-2 rounded border my-1 border-white ">
        <li className="px-3 border-end border-dark border-2 fw-bold"> SattaKing  </li>
        <li className="px-3 border-end border-dark border-2 fw-bold"> Satta King Result  </li>
        <li className="px-3 fw-bold"> Satta Record Chart  </li>
      </ul>

      {/* free ad loop */}
      {freeAd && freeAd.map((e, i) => {
        return <div key={e._id} className="border border-info border-3 rounded rounded-2 py-3 mx-1 ">
          <div className="col-md-7 d-flex align-items-center flex-column  m-auto gap-1">

            <h6 className="text-center fw-bold"> <img style={{ width: "18px", height: "18px", mixBlendMode: "darken" }} src={rupeeIcon} alt="rupeeIcon" />  {e.title && e.title} <img style={{ width: "18px", height: "18px" }} src={rupeeIcon} alt="rupeeIcon" />  </h6>
            <p className="text-center fw-bold">
              {e.content && e.content}
            </p>
            <p className="text-center fw-bold fs-4 m-0 p-0">
              {e.aboutFees && e.aboutFees}
            </p>
            <p className="text-center fw-bold fs-4 m-0 p-0">
              {e.name && e.name}
            </p>
          </div>


        </div>
      })}

      <div className="sattaKingSite d-flex flex-column align-items-center py-3 mt-3 ">
        <h4 className="text-white">  SATTA-KING-FIXED-NO.IN </h4>
        <ul className="m-auto d-flex list-unstyled">
          <li className="text-white fw-bold border-end border-white px-2">
            SATTA KING
          </li>
          <li className="text-white fw-bold border-end border-white px-2">
            SATTA RESULT
          </li>
          <li className="text-white fw-bold px-2">
            SATTA RECORD
          </li>
        </ul>

      </div>
      <div className="currentMOnthState overflow-scroll">
        <h3 style={{ color: "brown" }} className="text-center"> {new Date().getDate()} {" "}{" "}  {monthNames[new Date().getMonth()]} {" "}{" "}  {new Date().getFullYear()} {" "}{" "}   </h3>
        <p className="fw-bold text-center fs-5" > Satte King Live Result Today</p>
        {currentMonthChart && (
          <div>
            {currentMonthChart.resultList && currentMonthChart.resultList.filter(result => result.day === today).map((result, index) => (



              <div key={index}>
                <p style={{ color: "red" }} className="text-center fw-bold fs-3"> DELHI LUCKY BAZAR </p> <p style={{ color: "green" }} className="text-center fw-bold fs-3">{result.delhiLuckyBazar}</p>

                <p style={{ color: "red" }} className="text-center fw-bold fs-3"> DISAWER  </p> <p style={{ color: "green" }} className="text-center fw-bold fs-3">{result.disawer ? result.disawer : 'WAIT'}</p>
                <p style={{ color: "red" }} className="text-center fw-bold fs-3"> FARIDABAD  </p> <p style={{ color: "green" }} className="text-center fw-bold fs-3">{result.faridabad ? result.faridabad : 'WAIT'}</p>
                <p style={{ color: "red" }} className="text-center fw-bold fs-3"> GAZIYABAD  </p> <p style={{ color: "green" }} className="text-center fw-bold fs-3">{result.gaziyabad ? result.gaziyabad : 'WAIT'}</p>
                <p style={{ color: "red" }} className="text-center fw-bold fs-3"> KOLKATA KING  </p> <p style={{ color: "green" }} className="text-center fw-bold fs-3">{result.kolkataKing ? result.kolkataKing : 'WAIT'}</p>
                <p style={{ color: "red" }} className="text-center fw-bold fs-3"> GALI  </p> <p style={{ color: "green" }} className="text-center fw-bold fs-3">{result.gali ? result.gali : 'WAIT'}</p>
                <p style={{ color: "red" }} className="text-center fw-bold fs-3"> DELHI BAZAR  </p> <p style={{ color: "green" }} className="text-center fw-bold fs-3">{result.delhiBazar ? result.delhiBazar : "WAIT"}</p>
                <p style={{ color: "red" }} className="text-center fw-bold fs-3"> SHREE GANESH  </p> <p style={{ color: "green" }} className="text-center fw-bold fs-3">{result.shreeGanesh ? result.shreeGanesh : "WAIT"}</p>



              </div>
            ))}
          </div>
        )}
      </div>





      {/* -------------Table------------------------- */}

      
      <div style={{ background: "yellow" }} className="d-flex justify-content-center py-2 gap-2 align-items-center"> <h4 className="text-center m-0 p-0 text-uppercase">SATTA KING {monthNames[parseInt(searchDate.month) - 1]} RECORD CHART {searchDate.year}</h4>  <YearMonthSelector onDateChange={handleDateChange} />  </div>
      <ResultDisplay data={currentMonthChart} />


      <ServiceAd />

      <div className="col-md-6 m-auto" >
        <ul className="list-unstyled fw-bold fs-5 d-flex flex-column gap-2 my-5">
          <li style={{ cursor: "pointer" }} className="border  shadow border-4 text-center  "> SATTA KING RECORD CHART 2022  </li>
          <li style={{ cursor: "pointer" }} className="border  shadow border-4 text-center  "> SATTA KING RECORD CHART 2023  </li>
          <li style={{ cursor: "pointer" }} className="border  shadow border-4 text-center  "> SATTA KING RECORD CHART 2024  </li>
        </ul>


      </div>

      <NoticeBoard />
      <div className="d-fexx justify-content-center m-auto col-md-6 my-5">

        <SattaImportantNote />
      </div>

     




      <div style={{ margin: "0 1px", border: "4px solid blue" }} className="rounded  p-4 d-flex justify-content-center my-5"   >
        <div className="col-md-12">

          <div className="col-md-12 m-auto">
          <h3 className=" mb-2 ">Important Facts about Satta King game? </h3>
          <hr />

          <p className=" fs-4 fw-bold my-4">Satta king game is a popular gambling game, that originated in India. Here are some
              important aspects of this game.</p>
          <ul className=" px-4 col-md-12 fw-bold m-auto d-flex flex-column gap-3 ">
            {importantFact && importantFact.map((e, i) => {
              return <li key={e._id} className=""> {e.importantFactSatta} </li>
            })}
          </ul>
            </div>
        </div>

      </div>


      <div style={{ margin: "0 1px", border: "4px solid blue" }} className="rounded p-4 d-flex justify-content-center my-5"   >
        <div className="">

          <div className="col-md-12 m-auto">
          <h3 className=" mb-2 ">Alternative Of Satta King? </h3>
          <hr />

          <p className=" fs-4 fw-bold my-4">Today Satta King's popularity is increasing among people due to the opportunity to earn
            more money in less time and not only Satta King but also many other online games whose
            number of players is increasing day by day. here are some alternatives for Satta King:</p>
          <ul className=" px-4 col-md-12 fw-bold m-auto d-flex flex-column gap-3 ">
            {alterNative && alterNative.map((e, i) => {
              return <li key={e._id} className=""> {e.alternative} </li>
            })}
          </ul>
            </div>
        </div>

      </div>



            


    </>
  );
};

export default LandingPage;
