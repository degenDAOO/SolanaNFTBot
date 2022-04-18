import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const auctionHouse: Marketplace = {
  name: "Auction House (Rarible or OpenSea)",
  programId: ["hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk"],
  twitterHandle: "@DegenTrackerBot",
  iconUrl: "https://assets.website-files.com/6182ee30b608385a15466a3f/6184383c556990103357ea77_favicon.png",
  itemURL: (token: String) => `https://marketplace.degenape.academy/token/SOLANA:${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this);
  },
};

export default auctionHouse;
