import React from 'react'
import { useGlobalSkills } from '../context/skillContext';

const SattaImportantNote = () => {
    const {importantNote}=useGlobalSkills()
    return (
        <>
            {importantNote && importantNote.map((e, i) => {
                return (
                    <div style={{ border: "4px solid red" }} className='mx-1    py-4 px-5 rounded-2 m-auto my-2' key={i}>
                        <h4 style={{ color: "red" }} className='text-center'> {e.title} </h4>
                        <p style={{ color: "blue" }}  className='text-center fs-6'>
                            {e.SattaKingImportantNote}
                        </p>
                        
                        
                    </div>
                );
            })}
        </>
    );
}

export default SattaImportantNote