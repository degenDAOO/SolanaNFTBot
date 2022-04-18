import { Marketplace } from "./types";
import magicEden from "./magicEden";
import digitalEyes from "./digitalEyes";
import solanart from "./solanart";
import alphaArt from "./alphaArt";
import exchangeArt from "./exchangeArt";
import solsea from "./solsea";
import auctionHouse from "./auctionHouse";
// import openSea from "./openSea";
// import rarible from "./rarible";

/**
 * These are the list of marketplaces that we check for notifications
 */
const marketplaces: Marketplace[] = [
  magicEden,
  digitalEyes,
  solanart,
  alphaArt,
  exchangeArt,
  solsea,
  auctionHouse,
  // openSea,
  // rarible,
];

export default marketplaces;
