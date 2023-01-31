import { INFT } from "../interfaces/nft.interface";
import { NFTModel } from "../models/nft.model";

export class NFTService {
    private nftModel: typeof NFTModel

    constructor() {
        this.nftModel = NFTModel
    }

    public getAllNFTs = async (
        offset: number,
        limit: number,
        search?: string
    ): Promise<{
        nfts: INFT[]
        total: number
    }> => {
        const allNFTs = await this.nftModel
            .find(search ? { $text: { $search: search } } : {})
            .select({ __v: 0, _id: 0, })
            .sort({ createdAt: -1 })
            .skip(offset)
            .limit(limit)

        const nftsCount = await this.nftModel.find(search ? { $text: { $search: search } } : {}).count()

        return {
            nfts: allNFTs.map((r) => r.toObject()),
            total: nftsCount,
        }
    }
}