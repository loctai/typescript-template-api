import { NextFunction, Request, RequestHandler, Response } from "express"
import { INFT } from "interfaces/nft.interface"
import { CustomResponse } from "interfaces/response.interface"
import { NFTService } from "../services/nft.service"

export class NFTController {
    private nftService: NFTService

    constructor() {
        this.nftService = new NFTService()
    }

    public getAllNFTs: RequestHandler = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { offset, limit, search } = req.query
            const nfts = await this.nftService.getAllNFTs(
                Number(offset),
                Number(limit),
                search ? String(search) : undefined
            )

            return res.json({ status: 'SUCCESS', message: null, data: nfts })
        } catch (error) {
            next(error)
        }
    }
}