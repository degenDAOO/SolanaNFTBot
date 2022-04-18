import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const auctionHouse: Marketplace = {
  name: "AuctionHouse (Rarible or OpenSea)",
  programId: ["hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk"],
  twitterHandle: "@DegenTrackerBot",
  iconUrl: "https://docs.metaplex.com/img/meta-black.svg",
  itemURL: (token: String) => `https://marketplace.degenape.academy/token/SOLANA:${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this);
  },
};

export default auctionHouse;
