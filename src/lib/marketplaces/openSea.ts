import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const openSea: Marketplace = {
  name: "OpenSea",
  programId: ["8mcjXbJ8j4VryYFNpcBCFS37Au8zVYU53WTVaruJWcKt"],
  twitterHandle: "@opensea",
  iconUrl: "https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png",
  itemURL: (token: String) => `https://opensea.io/assets/solana/${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this);
  },
};

export default openSea;
