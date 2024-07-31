import axios from "axios";


//iso_4217 
const currency = "USD";  


const getAssetName = async (assetId) => {
        let response = await axios.get("http://api.steampowered.com/ISteamEconomy/GetAssetClassInfo/v0001/?key=" + process.env.steamid + "&appid=" + process.env.appid + "&language=en&class_count=" + 1 + "&classid0=" + assetId);
         return [...Object.values(response.data.result).map(x => x.name)];
};
const extractor = async () => {
    axios.get("http://api.steampowered.com/ISteamEconomy/GetAssetPrices/v0001/?appid=" + process.env.appid + "&key=" + process.env.steamid + "&currency=" + currency,
        {
            headers: {
                "Accept": "application/json"
            }
        }
    )
        .then((res) => {
            const inventory = [];
            res.data.result.assets.forEach(element => {
                if (element && element.classid) {
                        getAssetName(element.classid).then((res) => {
                            console.log(element.classid);
                            let asset = {
                                classid: element.classid,
                                name: Object.values(res).flat().toString(),
                                price: Object.values(element.prices).flat().toString()
                            };
                            inventory.push(asset);
                            console.log(inventory)
                        });
                    }
            });
        })
        .catch((err) => console.log(err));
};


export { extractor }; 