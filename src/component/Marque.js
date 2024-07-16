import React from 'react';
import './Marque.css';
import { useGlobalSkills } from '../context/skillContext';

const Marquee = ({ text }) => {
  const { movement } = useGlobalSkills()
  return (
    <> <div className='d-flex flex-column gap-0 mt-2'>
      {movement && movement.map((e, i) => {
        return <div className="marquee-container m-0 p-0">
          <marquee direction={i % 2 === 1 ? "right" : "left"}>{e.Movement}</marquee>
        </div>
      })}
    </div>
    </>
  );
};

export default Marquee;
