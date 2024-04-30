import { Rpc } from "../../../helpers";
import { MsgListNFT, MsgListNFTResponse, MsgEditListing, MsgEditListingResponse, MsgDeListNFT, MsgDeListNFTResponse, MsgBuyNFT, MsgBuyNFTResponse, MsgCreateAuction, MsgCreateAuctionResponse, MsgCancelAuction, MsgCancelAuctionResponse, MsgPlaceBid, MsgPlaceBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export interface Msg {
    listNFT(request: MsgListNFT): Promise<MsgListNFTResponse>;
    editListing(request: MsgEditListing): Promise<MsgEditListingResponse>;
    deListNFT(request: MsgDeListNFT): Promise<MsgDeListNFTResponse>;
    buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
    createAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
    cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/marketplace module
     * parameters. The authority is hard-coded to the x/marketplace module account.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
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
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
