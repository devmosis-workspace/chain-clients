import { Rpc } from "../../../helpers";
import { MsgNewClass, MsgNewClassResponse, MsgUpdateClass, MsgUpdateClassResponse, MsgMintNFT, MsgMintNFTResponse, MsgBurnNFT, MsgBurnNFTResponse, MsgCreateBlindBoxContent, MsgCreateBlindBoxContentResponse, MsgUpdateBlindBoxContent, MsgUpdateBlindBoxContentResponse, MsgDeleteBlindBoxContent, MsgDeleteBlindBoxContentResponse, MsgCreateOffer, MsgCreateOfferResponse, MsgUpdateOffer, MsgUpdateOfferResponse, MsgDeleteOffer, MsgDeleteOfferResponse, MsgCreateListing, MsgCreateListingResponse, MsgUpdateListing, MsgUpdateListingResponse, MsgDeleteListing, MsgDeleteListingResponse, MsgSellNFT, MsgSellNFTResponse, MsgBuyNFT, MsgBuyNFTResponse, MsgCreateRoyaltyConfig, MsgCreateRoyaltyConfigResponse, MsgUpdateRoyaltyConfig, MsgUpdateRoyaltyConfigResponse, MsgDeleteRoyaltyConfig, MsgDeleteRoyaltyConfigResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    newClass(request: MsgNewClass): Promise<MsgNewClassResponse>;
    updateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
    mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
    createBlindBoxContent(request: MsgCreateBlindBoxContent): Promise<MsgCreateBlindBoxContentResponse>;
    updateBlindBoxContent(request: MsgUpdateBlindBoxContent): Promise<MsgUpdateBlindBoxContentResponse>;
    deleteBlindBoxContent(request: MsgDeleteBlindBoxContent): Promise<MsgDeleteBlindBoxContentResponse>;
    createOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse>;
    updateOffer(request: MsgUpdateOffer): Promise<MsgUpdateOfferResponse>;
    deleteOffer(request: MsgDeleteOffer): Promise<MsgDeleteOfferResponse>;
    createListing(request: MsgCreateListing): Promise<MsgCreateListingResponse>;
    updateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
    deleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse>;
    sellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse>;
    buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
    createRoyaltyConfig(request: MsgCreateRoyaltyConfig): Promise<MsgCreateRoyaltyConfigResponse>;
    updateRoyaltyConfig(request: MsgUpdateRoyaltyConfig): Promise<MsgUpdateRoyaltyConfigResponse>;
    deleteRoyaltyConfig(request: MsgDeleteRoyaltyConfig): Promise<MsgDeleteRoyaltyConfigResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    newClass(request: MsgNewClass): Promise<MsgNewClassResponse>;
    updateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
    mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
    createBlindBoxContent(request: MsgCreateBlindBoxContent): Promise<MsgCreateBlindBoxContentResponse>;
    updateBlindBoxContent(request: MsgUpdateBlindBoxContent): Promise<MsgUpdateBlindBoxContentResponse>;
    deleteBlindBoxContent(request: MsgDeleteBlindBoxContent): Promise<MsgDeleteBlindBoxContentResponse>;
    createOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse>;
    updateOffer(request: MsgUpdateOffer): Promise<MsgUpdateOfferResponse>;
    deleteOffer(request: MsgDeleteOffer): Promise<MsgDeleteOfferResponse>;
    createListing(request: MsgCreateListing): Promise<MsgCreateListingResponse>;
    updateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
    deleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse>;
    sellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse>;
    buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
    createRoyaltyConfig(request: MsgCreateRoyaltyConfig): Promise<MsgCreateRoyaltyConfigResponse>;
    updateRoyaltyConfig(request: MsgUpdateRoyaltyConfig): Promise<MsgUpdateRoyaltyConfigResponse>;
    deleteRoyaltyConfig(request: MsgDeleteRoyaltyConfig): Promise<MsgDeleteRoyaltyConfigResponse>;
}
