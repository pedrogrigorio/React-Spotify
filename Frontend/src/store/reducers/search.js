const INITIAL_STATE = {

    searchData : []
}

export default function search(state = INITIAL_STATE, action) {

    if (action.type === 'SET_SEARCH_DATA') {
        return {
            searchData: [
                ...state.searchData,
                {
                    title: action.title,
                    img: action.image,
                    link: action.link
                }
            ]
        }
    }
    
    else if (action.type === 'CLEAR_OLD_REQUESTS') {
        return INITIAL_STATE
    }

    return state 
}