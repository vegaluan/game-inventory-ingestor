let STEAM_API_BASEURL = 'http://api.steampowered.com';
let STEAM_API_PATH_GET_ASSET_NAME = '/ISteamEconomy/GetAssetClassInfo/v0001'
let STEAM_API_PATH_GET_ASSET_PRICES = '/ISteamEconomy/GetAssetPrices/v0001'


export const STEAM_API_GET_ASSETS = `${STEAM_API_BASEURL}${STEAM_API_PATH_GET_ASSET_PRICES}`;
export const STEAM_API_GET_ASSET_NAME = `${STEAM_API_BASEURL}${STEAM_API_PATH_GET_ASSET_NAME}`;
export const STEAM_ID = process?.env?.steamid;
export const STEAM_APP_ID = process?.env?.appid;
//iso_4217 
export const STEAM_CURRENCY = "USD";


