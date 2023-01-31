import mongoose from 'mongoose'
import type { Document, Schema } from 'mongoose'
export type IAttributes = {
    trait_type: string
    value: string
}
export interface NFTDocument extends Document {
    tokenID: string
    name: string
    description: string
    external_url: string
    attributes: IAttributes[]
    owner: string
    chainName: string
    createdAt: number
    updatedAt: number
}

const NFTSchema: Schema = new mongoose.Schema(
    {
        tokenID: { type: String, required: true},
        name: { type: String, required: true },
        description: { type: String, required: false },
        external_url: { type: String, required: false },
        attributes: [{ trait_type: String, value: String }],
        owner: { type: String, required: true },
        chainName: { type: String, required: true },
    },
    { timestamps: true }
)

export const NFTModel = mongoose.model<NFTDocument>('nft', NFTSchema)