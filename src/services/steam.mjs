import axios from "axios";
import { STEAM_API_GET_ASSETS, STEAM_API_GET_ASSET_NAME, STEAM_APP_ID, STEAM_CURRENCY, STEAM_ID } from "../config/config.mjs";

const getAssetName = async (assetId) => {
    try {
        
        let url = `${STEAM_API_GET_ASSET_NAME}?key=${STEAM_ID}&appid=${STEAM_APP_ID}&language=en&class_count=1&classid0=${assetId}`
        let response = await axios.get(url);
        return {classid: response.data.result[assetId].classid, name: response.data.result[assetId].name};
    } catch (e) {
        console.error(e.message);
    }
};



const transform = async () => {
    try {
        let url = `${STEAM_API_GET_ASSETS}?key=${STEAM_ID}&appid=${STEAM_APP_ID}&currency=${STEAM_CURRENCY}`
        let res = await axios.get(url);
        let assets = res.data.result.assets || [];

        const promisesGetAssetName = assets.map(asset => getAssetName(asset.classid))
        const promisedTransformAssets = assets.map(asset => {
            return {
                classid: asset.classid,
                name: '',
                price: Object.values(asset.prices).flat().toString(),
            };
        });

        const resultAssets = await Promise.allSettled(promisedTransformAssets);
        const resultNames = await Promise.allSettled(promisesGetAssetName);
    
        console.log(resultAssets.map((x) => x.value));
        console.log(resultNames.map((x) => x.value));

        
/*         setTimeout((x) => {
        console.log(workflow.map(assetItem => assetItem));

        }, 10000) */
      


    } catch (e) {
        console.error(e.message);
    }
};

export { transform };
    