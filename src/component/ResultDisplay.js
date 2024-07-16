import React from 'react'
import "./ResultDisplay.css"
const ResultDisplay = ({data}) => {
  return (
    <>

    <div style={{ padding: "0 2px" }} className=" w-100 MainTableShow" >
        <ul className="d-flex list-unstyled text-white  justify-content-center gap-0 m-0 p-0  ">
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "80px", width: "8%" }}  >Date</li>
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "190px", width: "12%" }} >DELHI LUCKY BAZAR</li>
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "100px", width: "10%" }} >DISAWER</li>
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "120px", width: "10%" }} >FARIDABAD</li>
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "120px", width: "15%" }} >GAZIYABAD</li>
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "150px", width: "15%" }} >KOLKATA KING</li>
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "70px", width: "10%" }} >GALI</li>
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "135px", width: "10%" }} >DELHI BAZAR</li>
          <li className="text-center border border-dark px-3" style={{ background: "brown", padding: "5px 0", minWidth: "170px", width: "15%" }} >SHREE GANESH</li>
        </ul>
        {data && data.resultList && data.resultList.sort((a, b) => a.day - b.day).map((e, i) => {
          return <ul style={{ color: "var(--primaryText-color)" }} className="d-flex list-unstyled justify-content-center ">
            <li className="border border-dark px-3 d-flex justify-content-between" style={{ padding: "5px 0", minWidth: "80px", width: "8%", backgroundColor: "green" }}  ><span> {e.day}</span> <span>{(new Date().getMonth()).toString().split(" ").length === 1 ? `0${(new Date().getMonth() + 1).toString()}` : (new Date().getMonth() + 1).toString()}</span>  </li>
            <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "190px", width: "12%" }} >{e.delhiLuckyBazar} </li>
            <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "100px", width: "10%" }} >{e.disawer}</li>
            <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "120px", width: "10%" }} >{e.faridabad} </li>
            <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "120px", width: "15%" }} >{e.gaziyabad}</li>
            <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "150px", width: "15%" }} >{e.kolkataKing} </li>
            <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "70px", width: "10%" }} > {e.gali}</li>
            <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "135px", width: "10%" }} > {e.delhiBazar} </li>
            <li className="border border-dark text-center px-3" style={{ padding: "5px 0", minWidth: "170px", width: "15%" }} >{e.shreeGanesh} </li>
          </ul>
        })}
      </div>
    
    
    </>
  )
}

export default ResultDisplay