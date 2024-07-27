import axios from "axios";


const extractor = async () => {
    axios.get("http://api.steampowered.com/ISteamEconomy/GetAssetPrices/v0001/?appid=" + process.env.appid + "&key=" + process.env.steamid,
        {
            headers: {
                "Accept": "application/json"
            }
        }
    )
        .then((res) => {
            let x = JSON.stringify(res.data);
            console.log(res.data.result.assets);
        })
        .catch((err) => console.log(err));
};

export const handler = async (event, context) => {
    extractor();
}


extractor().then().catch(console.error());