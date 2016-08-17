const initialState = {
    threshold: 4,
    clusters: 7,
    support: 0.7,
    ceiling: 0.3,
    clustering: [],
    calculating: false,
    calculated: false,
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case 'CLUSTERS_CHANGE':
            return Object.assign({}, state, {
                clusters: action.payload
            })
            break;
        case 'SUPPORT_CHANGE':
            return Object.assign({}, state, {
                support: action.payload
            })
            break;
        case 'CEILING_CHANGE':
            return Object.assign({}, state, {
                ceiling: action.payload
            })
            break;
        case 'THRESHOLD_CHANGE':
            return Object.assign({}, state, {
                threshold: action.payload
            })
            break;
        case 'CALCULATING':
            return Object.assign({}, state, {
                calculating: true,
            })
            break;
        case 'CALCULATED':
            return Object.assign({}, state, {
                calculated: true,
                calculating : false,
                clustering : action.payload,
            })
            break;
    }
    return state;
}
