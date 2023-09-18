import { Rpc } from "../../../helpers";
import { MsgListNFT, MsgListNFTResponse, MsgEditListing, MsgEditListingResponse, MsgDeListNFT, MsgDeListNFTResponse, MsgBuyNFT, MsgBuyNFTResponse, MsgCreateAuction, MsgCreateAuctionResponse, MsgCancelAuction, MsgCancelAuctionResponse, MsgPlaceBid, MsgPlaceBidResponse } from "./tx";
export interface Msg {
    listNFT(request: MsgListNFT): Promise<MsgListNFTResponse>;
    editListing(request: MsgEditListing): Promise<MsgEditListingResponse>;
    deListNFT(request: MsgDeListNFT): Promise<MsgDeListNFTResponse>;
    buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
    createAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
    cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    listNFT(request: MsgListNFT): Promise<MsgListNFTResponse>;
    editListing(request: MsgEditListing): Promise<MsgEditListingResponse>;
    deListNFT(request: MsgDeListNFT): Promise<MsgDeListNFTResponse>;
    buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
    createAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
    cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
}
