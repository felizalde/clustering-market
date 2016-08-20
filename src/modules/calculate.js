import {SLR_ALGORITHM} from './lib/caslr'
import Store from '../store/store'

export default function(){
    return new Promise(
        function(resolve, reject) {
            try {
                const store = Store.getState();
                const options = {
                     WEIGHT: 1,
                     MAX: store.slr.clusters,
                     THRESHOLD:  store.slr.threshold,
                }
                const clusters = SLR_ALGORITHM(store.sales.sales, store.slr.support,  store.slr.ceiling, options);
                window.setTimeout(function(){
                    resolve(clusters);
                }, 2000);                
            } catch (e) {
                reject(e);
            }
        }
    )
};
