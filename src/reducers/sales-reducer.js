const initialState = {
    sales:[],
    fetched: false,
    fetching: false,
    error: null,
};

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case "FETCH_SALES":
            return Object.assign({}, state,{
                fetching: true
            })
            break;
        case "FETCH_SALES_REJECTED":
            return Object.assign({}, state,{
                fetching: false,
                error: action.payload
            })
            break;
        case "FETCH_SALES_FULFILLED":
            return Object.assign({}, state,{
                fetching: false,
                fetched: true,
                sales: action.payload
            })
            break;
    }
    return state;
};
