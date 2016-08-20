import calculate from '../modules/calculate'

export function updateClusters(number){
    return {
        type: 'CLUSTERS_CHANGE',
        payload: number,
    }
}

export function updateMaximumSupport(support){
    return {
        type: 'SUPPORT_CHANGE',
        payload: support,
    }
}

export function updateMinimumCeiling(ceiling){
    return {
        type: 'CEILING_CHANGE',
        payload: ceiling,
    }
}

export function updateThreshold(threshold){
    return {
        type: 'THRESHOLD_CHANGE',
        payload: threshold,
    }
}

export function calculateClusters(){
    return function(dispatch) {
        dispatch({type: 'CALCULATING'});
        calculate()
        .then((result) => {
            dispatch({type:'CALCULATED', payload: result})
        })
        .catch((e) => {
            console.log('error.')
        })
    }
}
