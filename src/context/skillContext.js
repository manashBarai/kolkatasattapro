import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/skillsReducer'
const AppContext = createContext();
const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1;
const previousMonth = new Date().getMonth();

const initialState = {
    isLoading: false,
    isError: false,
    chartAll: [],
    fact: [],
    notice: [],
    freeAd: [],
    importantNote: [],
    importantFact: [],
    alterNative: [],
    movement: [],
    currentMonthChart: [],
    previousMonthChart: [],
    chartBySearch: [],
    fullYearChart: []

}
const AppProvider = ({ children }) => {
    const headers = {
        Authorization: `${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
    };


    const [state, dispatch] = useReducer(reducer, initialState)

    const getAllFact = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "FACT", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }
    const getAllFreeAd = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            console.log(leadsLimit.data);
            dispatch({ type: "FREE_AD", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }
    const getAllMovement = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "MOVEMENT", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }
    const getAllImportantNote = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "IMPORTANT_NOTE", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }
    const getAllNotice = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "NOTICE", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }
    const getAllImportantFact = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "IMPORTANT_FACT", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }
    const getAllAlterNative = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "ALTERNATIVE", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }
    const getCurrentMonthResult = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "CHART_CURRENT_MONTH", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }
    const getPreViousMonthResult = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "CHART_PREVIOUS_MONTH", payload: leadsLimit.data })

        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error })

        }
    }

    const getAllResult = async (url) => {
        dispatch({ type: "LOADING" })
        try {
            const leadsLimit = await axios.get(url)
            dispatch({ type: "ALL_RESULT_SATTA", payload: leadsLimit.data })
        } catch (error) {

        }
    }
    const updatedAdArray = (arry, type) => dispatch({ type: type, payload: arry })



    useEffect(() => {
        if (localStorage.getItem('role') && localStorage.getItem('email')) {

            getAllFact(`${process.env.REACT_APP_API}fact?admin=1`)
            getAllFreeAd(`${process.env.REACT_APP_API}freeAd?admin=1`)
            getAllMovement(`${process.env.REACT_APP_API}movement?admin=1`)
            getAllNotice(`${process.env.REACT_APP_API}notice?admin=1`)
            getAllResult(`${process.env.REACT_APP_API}result?limit=10&page=1`)
            getAllImportantNote(`${process.env.REACT_APP_API}importantNote?admin=1`)
            getAllImportantFact(`${process.env.REACT_APP_API}importantFact`)
            getAllAlterNative(`${process.env.REACT_APP_API}alterNative`)

        } else {

            getAllFact(`${process.env.REACT_APP_API}fact`)
            getAllFreeAd(`${process.env.REACT_APP_API}freeAd`)
            getAllMovement(`${process.env.REACT_APP_API}movement`)
            getAllNotice(`${process.env.REACT_APP_API}notice`)
            getAllImportantNote(`${process.env.REACT_APP_API}importantNote`)
            getAllImportantFact(`${process.env.REACT_APP_API}importantFact`)
            getAllAlterNative(`${process.env.REACT_APP_API}alterNative`)

            getCurrentMonthResult(`${process.env.REACT_APP_API}result?year=${currentYear}&month=${currentMonth}`)
            getPreViousMonthResult(`${process.env.REACT_APP_API}result?year=${currentYear}&month=${previousMonth}`)
        }




    }, [])





    return <AppContext.Provider value={{ ...state, updatedAdArray }}    >
        {children}
    </AppContext.Provider>

}


const useGlobalSkills = () => {
    return useContext(AppContext)
}


export { AppProvider, AppContext, useGlobalSkills }