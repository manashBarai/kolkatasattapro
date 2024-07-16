import React from 'react'
import { useGlobalSkills } from '../context/skillContext';

const NoticeBoard = () => {
    const {notice}=useGlobalSkills()
    return (
        <>
            {notice && notice.map((e, i) => {
                return (
                    <div style={{ border: "4px solid var(--myTheme-color)" }} className='mx-1  py-4 px-5 rounded-2 m-auto my-2' key={i}>
                        <h5 className='text-center'> {e.title} </h5>
                        <p className='text-center fs-6'>
                            {e.notice}
                        </p>
                        <h5 style={{ color: "var(--myTheme-color)" }} className='text-center'> {e.designation} </h5>
                        <h5 style={{ color: "red" }} className='text-center fw-bold'> {e.name} </h5>
                        <h5 style={{ color: "var(--myTheme-color)" }} className='text-center'> {e.number} </h5>
                        <h5 style={{ color: "var(--myTheme-color)" }} className='text-center'> {e.note} </h5>
                        
                    </div>
                );
            })}
        </>
    );
}

export default NoticeBoard