import axios from "axios";


//iso_4217 
const currency= "USD";


const getAssetName = async (assetId) => {
    axios.get("http://api.steampowered.com/ISteamEconomy/GetAssetClassInfo/v0001/?key=" + process.env.steamid + "&appid="+ process.env.appid + "&language=en&class_count=" + 1 + "&classid0="+assetId,
        {
            headers: {
                "Accept": "application/json"
            }
        }
    )
        .then((res) => {
           // console.log(res.data.result.map});
        })
        .catch((err) => console.log(err));
};
const extractor = async () => {
    axios.get("http://api.steampowered.com/ISteamEconomy/GetAssetPrices/v0001/?appid=" + process.env.appid + "&key=" + process.env.steamid + "&currency="+currency,
        {
            headers: {
                "Accept": "application/json"
            }
        }
    )
        .then((res) => {
            res.data.result.assets.forEach(element => {
                if(element !== undefined)
                    if(element.classid !== undefined){
                        console.log(element.classid);
                       //getAssetName(element.classid).then((res) => {
                       // console.log(res);
                   //   })
                    }
            });
        })
        .catch((err) => console.log(err));
};


export { extractor }; 