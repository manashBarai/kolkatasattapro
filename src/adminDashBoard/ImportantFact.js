import axios from "axios";
import React, { useState } from "react";
import { useGlobalSkills } from "../context/skillContext";

const ImportantFact = () => {
    const { importantFact, updatedAdArray } = useGlobalSkills()

    const initialState = {
        importantFactSatta: "",
    };
    const [post, setPost] = useState(false);
    const [edit, setEdit] = useState("")
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (edit === "") { // Corrected comparison operator
                const res = await axios.post(
                    `${process.env.REACT_APP_API}importantFact`,
                    formData
                );
                if (res.status === 200) {
                    setFormData(initialState);
                    setPost(false);
                    setEdit(""); // Make sure setEdit is called correctly
                    const updateArrays = [res.data, ...importantFact];
                    updatedAdArray(updateArrays, 'IMPORTANT_FACT');
                }
            } else {
                const res = await axios.put(
                    `${process.env.REACT_APP_API}importantFact/${edit}`,
                    formData
                );
                if (res.status === 200) {
                    setFormData(initialState);
                    setPost(false);
                    const afterDelete = importantFact.filter(e => e._id !== edit);
                    const updateArrays = [res.data, ...afterDelete];
                    setEdit(""); // Make sure setEdit is called correctly
                    updatedAdArray(updateArrays, 'IMPORTANT_FACT'); // No need to spread the array again
                }
            }
        } catch (error) {
            console.log(error);
        }
    };


    const toggleValidation = () => {
        setFormData({
            ...formData,
            validation: !formData.validation
        });
    };

    return (
        <>  {post && <div style={{ background: "rgba(0,0,0,0.6)" }} className="position-fixed start-0  w-100 h-100 top-0 d-flex justify-content-center align-items-center py-3 px-5 rounded">
            <form onSubmit={handleSubmit} className="col-md-6 p-5 bg-body position-relative rounded">
                <button style={{ right: "3px", top: "3px", border: "1px solid var(--myTheme-color)", color: "var(--myTheme-color)" }} className="position-absolute   px-2   bg- rounded-pill " onClick={() => setPost(false)} > X </button>
                <div className="form-group">
                    <label htmlFor="importantFactSatta">Satta King Important Fact </label>
                    <textarea
                        className="form-control"
                        id="importantFactSatta"
                        name="importantFactSatta"
                        rows="4"
                        value={formData.importantFactSatta}
                        onChange={handleChange}

                    ></textarea>
                </div>

                <button
                    style={{ background: "var(--myTheme-color)" }}
                    type="submit"
                    className="border-0 px-5 py-2 rounded text-white mt-3"
                >
                    Submit
                </button>
            </form>
        </div>}
            {!post && <button style={{ border: "1px solid blue" }} className="btn " onClick={() => { setPost(true); setEdit(""); setFormData(initialState) }}     > Post</button>}
            <div>
                {importantFact && importantFact.map((e, i) => {
                    return (
                        <div style={{ border: "4px solid var(--myTheme-color)" }} className='  py-4 px-5 rounded-2 m-auto my-2 d-flex' key={i}>
                            <div className="d-flex flex-column w-100">

                                <h6 className=''> {e.importantFactSatta} </h6>

                                <p style={{ color: "red" }} className='fw-bold'> {e.name} </p>
                            </div>
                            <div className="d-flex gap-1 w-25 align-items-center">
                                <button className="btn btn-sm btn-success w-50" onClick={() => {
                                    setPost(true);
                                    setEdit(e._id)
                                    setFormData({
                                        ...formData,

                                        importantFactSatta: e.importantFactSatta

                                    });

                                }}    >Edit</button>
                                <button className="btn btn-sm btn-danger w-50" onClick={async () => {
                                    try {
                                        const res = await axios.delete(
                                            `${process.env.REACT_APP_API}importantFact/${e._id}`,
                                        );
                                        if (res.status === 200) {
                                            const afterDelete = importantFact.filter(advertise => advertise._id !== e._id)
                                            updatedAdArray([...afterDelete], 'IMPORTANT_FACT')

                                        }
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }}   > Delete</button>
                            </div>

                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ImportantFact;
