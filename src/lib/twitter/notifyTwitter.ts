import TwitterAPI from 'twitter-api-v2';
import { NFTSale } from "lib/marketplaces";
import axios from 'axios';

export default async function notifyTwitter(twitterClient: TwitterAPI, nftSale: NFTSale) {
    const hasImage = Boolean(nftSale.nftData?.image);
    const data     = hasImage ? await getImageDataFromUrl(nftSale.nftData?.image as string) : null;
    const nftName  = nftSale.nftData?.name;
    const text     = `${nftName} was just purchased for ${nftSale.getPriceInSOL()} S◎L on ${nftSale.marketplace.name}! Now go and enroll @degenDAOO to meet your classmates.`

    const mediaArr: string[] = [];
    
    if (hasImage) {
        console.log(data as Buffer);
        const media = await twitterClient.v1.uploadMedia(data as Buffer, { type: 'png' });
        mediaArr.push(media);
    }

    return await twitterClient.v2.tweet(text, {
        media: { media_ids: mediaArr },
      });
}

async function getImageDataFromUrl(url: string) {
    const img = await axios.get(url, {responseType: 'arraybuffer'});
    return img.data as Buffer
}
