import { NFTController } from "controllers/nft.controller";
import { Router } from "express";
import { allNFTsSchema } from "helpers/validation.helper";
import { Routes } from "interfaces/routes.interface";
import { checkAuthentication } from "middlewares/auth.middleware";

export class NFTRoute implements Routes {
    public path = '/nft'
    public router = Router()
    public nftController = new NFTController()
    constructor() {
        this.initializeRoutes()
      }
    private initializeRoutes() {
        this.router.get(
            `${this.path}`,
            checkAuthentication,
            allNFTsSchema,
            this.nftController.getAllNFTs
          )
    }
}