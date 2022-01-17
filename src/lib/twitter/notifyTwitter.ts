import TwitterAPI from 'twitter-api-v2';
import { NFTSale, SaleMethod } from "lib/marketplaces";
import axios from 'axios';

export default async function notifyTwitter(twitterClient: TwitterAPI, nftSale: NFTSale) {
    const nftName = nftSale.nftData?.name;
    const buyer = truncate(nftSale.buyer);
    const text = `${nftName} was just purchased on ${nftSale.marketplace.name} ${
        nftSale.method === SaleMethod.Bid ? "via bidding " : ""
    }for:\n\n${nftSale.getPriceInSOL()} S◎L!\n\ncongrats to the buyer: ${buyer} 🤝`
    const mediaArr: string[] = [];
    const taggedUsers: string[] = ["1443234316264345607"];
    if (Boolean(nftSale.nftData?.image)) {
        const data = await getImageDataFromUrl(nftSale.nftData?.image as string);
        const media = await twitterClient.v1.uploadMedia(data, { type: 'png' });
        mediaArr.push(media);
    }
    return twitterClient.v2.tweet(text, {
        media: {
            media_ids: mediaArr,
            tagged_user_ids: taggedUsers,
        }
    })
}

async function getImageDataFromUrl(url: string) {
    const img = await axios.get(url, {responseType: 'arraybuffer'});
    return img.data as Buffer
}

export function truncate(str: String){
    return str.substring(0, 6) + '...' + str.substring(str.length - 6);
}