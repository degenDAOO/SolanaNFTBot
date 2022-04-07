import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const solsea: Marketplace = {
  name: "Solsea",
  iconUrl: "https://solsea.io/logo_solo.svg",
  twitterHandle: "@SolSeaNFT",
  programId: ["617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU"],
  itemURL: (token: String) => `https://solsea.io/nft/${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this, 0);
  },
};

export default solsea;
