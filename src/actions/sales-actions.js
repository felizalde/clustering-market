import OpenFile from '../modules/open-file'

export function fetchSales(){
    return function(dispatch) {
        dispatch({type:'FETCH_SALES'});
        OpenFile()
        .then((result)=>{
            dispatch({type:'FETCH_SALES_FULFILLED', payload:result})
        })
        .catch((err) => {
            dispatch({type:'FETCH_SALES_REJECTED', payload: err})
        })

    }
}
