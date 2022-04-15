import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const rarible: Marketplace = {
  name: "rarible",
  programId: [
    "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
    "J6UJaLC1vxvZZxJgmNhuaARkU7gneJdMtY2m7zCrGBpn"
  ],
  twitterHandle: "@raribledao",
  iconUrl: "https://rarible.com/favicon.png",
  itemURL: (token: String) => `https://marketplace.degenape.academy/token/SOLANA:${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this);
  },
};

export default rarible;
