import TwitterAPI from 'twitter-api-v2';
import { NFTSale, SaleMethod } from "lib/marketplaces";
import axios from 'axios';

export default async function notifyTwitter(twitterClient: TwitterAPI, nftSale: NFTSale) {
    const nftName = nftSale.nftData?.name;
    const text = `${nftName} was just purchased ${
        nftSale.method === SaleMethod.Bid ? "via bidding " : ""
    }for ${nftSale.getPriceInSOL()} S◎L at ${nftSale.marketplace.name}!`
    const mediaArr: string[] = [];
    if (Boolean(nftSale.nftData?.image)) {
        const data = await getImageDataFromUrl(nftSale.nftData?.image as string);
        const media = await twitterClient.v1.uploadMedia(data, { type: 'png' });
        mediaArr.push(media);
    }
    return twitterClient.v1.tweet(text, {
        media_ids: mediaArr
    })
}

async function getImageDataFromUrl(url: string) {
    const img = await axios.get(url, {responseType: 'arraybuffer'});
    return img.data as Buffer
}