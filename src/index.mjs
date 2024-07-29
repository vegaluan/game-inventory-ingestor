'use strict';

import  {extractor} from "./api/steamapi.mjs"



export const handler = async (event, context, callback) => {
    console.log('LogScheduledEvent');
    await extractor();
    callback(null, 'Finished');
}


//await extractor();