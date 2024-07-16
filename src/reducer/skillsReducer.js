const SkillLists = (state, action) => {

    switch (action.type) {
        case 'LOADING':

            return {
                ...state,
                isLoading: true
            }
        case 'FACT':

            return {
                ...state,
                isLoading: false,
                fact: action.payload
            }
        case 'FREE_AD':

            return {
                ...state,
                isLoading: false,
                freeAd: action.payload
            }
        case 'MOVEMENT':

            return {
                ...state,
                isLoading: false,
                movement: action.payload
            }
        case 'NOTICE':

            return {
                ...state,
                isLoading: false,
                notice: action.payload
            }
        case 'ALL_RESULT_SATTA':
            return {
                ...state,
                isLoading: false,
                chartAll: action.payload
            }
        case 'CHART_CURRENT_MONTH':

            return {
                ...state,
                isLoading: false,
                currentMonthChart: action.payload
            }
        case 'CHART_PREVIOUS_MONTH':

            return {
                ...state,
                isLoading: false,
                previousMonthChart: action.payload
            }

        case 'IMPORTANT_NOTE':

            return {
                ...state,
                isLoading: false,
                importantNote: action.payload
            }
        case 'IMPORTANT_FACT':

            return {
                ...state,
                isLoading: false,
                importantFact: action.payload
            }
            case 'ALTERNATIVE':

            return {
                ...state,
                isLoading: false,
                alterNative: action.payload
            }
            

        default:
            return state;
    }


    return state;



}


export default SkillLists;