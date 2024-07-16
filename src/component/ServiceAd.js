import React from 'react'
import { useGlobalSkills } from '../context/skillContext'

const ServiceAd = () => {
    const { isLoading, fact } = useGlobalSkills();

    const handleCallButtonClick = (number) => {
        window.location.href = `tel:${number}`;
    };

    const handleWhatsAppButtonClick = (number) => {
        window.open(`https://wa.me/${number}`, '_blank');
    };

    if (isLoading) {
        return <div>
            Loading...
        </div>
    }
    return (
        <>
            {fact && fact.map((e, i) => {
                return (
                    <div style={{ border: "4px solid var(--myTheme-color)" }} className='mx-1  py-4 px-5 rounded-2 m-auto my-2' key={i}>
                        <h5 className='text-center'> {e.title} </h5>
                        <p className='text-center fs-6'>
                            {e.about}
                        </p>
                        <h5 style={{ color: "var(--myTheme-color)" }} className='text-center'> {e.fees} </h5>
                        <h5 style={{ color: "red" }} className='text-center fw-bold'> {e.name} </h5>
                        <h5 style={{ color: "var(--myTheme-color)" }} className='text-center'> {e.number} </h5>
                        <div className="text-center mt-3">
                            <button
                                className="btn btn-danger me-2"
                                onClick={() => handleCallButtonClick(e.number)}
                            >
                                Call Now
                            </button>
                            <button
                                className="btn btn-success"
                                onClick={() => handleWhatsAppButtonClick(e.number)}
                            >
                                WhatsApp
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ServiceAd
