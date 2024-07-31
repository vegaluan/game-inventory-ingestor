'use strict';

import  {transform} from "./services/steam.mjs"



export const handler = async (event, context, callback) => {
    console.log('LogScheduledEvent');
    await transform();
    callback(null, 'Finished');
}


await transform(); 