import { ClassParentInput, ClassParentInputSDKType, ClassInput, ClassInputSDKType } from "./class_input";
import { NFTInput, NFTInputSDKType } from "./nft_input";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { RoyaltyConfigInput, RoyaltyConfigInputSDKType, RoyaltyConfig, RoyaltyConfigSDKType } from "./royalty_config";
import { Class, ClassSDKType, NFT, NFTSDKType } from "../../../cosmos/nft/v1beta1/nft";
import { BlindBoxContent, BlindBoxContentSDKType } from "./blind_box_content";
import { Offer, OfferSDKType } from "./offer";
import { Listing, ListingSDKType } from "./listing";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgNewClass {
    creator: string;
    parent?: ClassParentInput;
    input?: ClassInput;
}
export interface MsgNewClassSDKType {
    creator: string;
    parent?: ClassParentInputSDKType;
    input?: ClassInputSDKType;
}
export interface MsgNewClassResponse {
    class?: Class;
}
export interface MsgNewClassResponseSDKType {
    class?: ClassSDKType;
}
export interface MsgUpdateClass {
    creator: string;
    classId: string;
    input?: ClassInput;
}
export interface MsgUpdateClassSDKType {
    creator: string;
    class_id: string;
    input?: ClassInputSDKType;
}
export interface MsgUpdateClassResponse {
    class?: Class;
}
export interface MsgUpdateClassResponseSDKType {
    class?: ClassSDKType;
}
export interface MsgMintNFT {
    creator: string;
    classId: string;
    id: string;
    input?: NFTInput;
}
export interface MsgMintNFTSDKType {
    creator: string;
    class_id: string;
    id: string;
    input?: NFTInputSDKType;
}
export interface MsgMintNFTResponse {
    nft?: NFT;
}
export interface MsgMintNFTResponseSDKType {
    nft?: NFTSDKType;
}
export interface MsgBurnNFT {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgBurnNFTSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgBurnNFTResponse {
}
export interface MsgBurnNFTResponseSDKType {
}
export interface MsgCreateBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
    input?: NFTInput;
}
export interface MsgCreateBlindBoxContentSDKType {
    creator: string;
    class_id: string;
    id: string;
    input?: NFTInputSDKType;
}
export interface MsgCreateBlindBoxContentResponse {
    blindBoxContent?: BlindBoxContent;
}
export interface MsgCreateBlindBoxContentResponseSDKType {
    blind_box_content?: BlindBoxContentSDKType;
}
export interface MsgUpdateBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
    input?: NFTInput;
}
export interface MsgUpdateBlindBoxContentSDKType {
    creator: string;
    class_id: string;
    id: string;
    input?: NFTInputSDKType;
}
export interface MsgUpdateBlindBoxContentResponse {
    blindBoxContent?: BlindBoxContent;
}
export interface MsgUpdateBlindBoxContentResponseSDKType {
    blind_box_content?: BlindBoxContentSDKType;
}
export interface MsgDeleteBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
}
export interface MsgDeleteBlindBoxContentSDKType {
    creator: string;
    class_id: string;
    id: string;
}
export interface MsgDeleteBlindBoxContentResponse {
}
export interface MsgDeleteBlindBoxContentResponseSDKType {
}
export interface MsgCreateOffer {
    creator: string;
    classId: string;
    nftId: string;
    price: Long;
    expiration?: Timestamp;
}
export interface MsgCreateOfferSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    price: Long;
    expiration?: TimestampSDKType;
}
export interface MsgCreateOfferResponse {
    offer?: Offer;
}
export interface MsgCreateOfferResponseSDKType {
    offer?: OfferSDKType;
}
export interface MsgUpdateOffer {
    creator: string;
    classId: string;
    nftId: string;
    price: Long;
    expiration?: Timestamp;
}
export interface MsgUpdateOfferSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    price: Long;
    expiration?: TimestampSDKType;
}
export interface MsgUpdateOfferResponse {
    offer?: Offer;
}
export interface MsgUpdateOfferResponseSDKType {
    offer?: OfferSDKType;
}
export interface MsgDeleteOffer {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgDeleteOfferSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgDeleteOfferResponse {
}
export interface MsgDeleteOfferResponseSDKType {
}
export interface MsgCreateListing {
    creator: string;
    classId: string;
    nftId: string;
    price: Long;
    expiration?: Timestamp;
    fullPayToRoyalty: boolean;
}
export interface MsgCreateListingSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    price: Long;
    expiration?: TimestampSDKType;
    full_pay_to_royalty: boolean;
}
export interface MsgCreateListingResponse {
    listing?: Listing;
}
export interface MsgCreateListingResponseSDKType {
    listing?: ListingSDKType;
}
export interface MsgUpdateListing {
    creator: string;
    classId: string;
    nftId: string;
    price: Long;
    expiration?: Timestamp;
    fullPayToRoyalty: boolean;
}
export interface MsgUpdateListingSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    price: Long;
    expiration?: TimestampSDKType;
    full_pay_to_royalty: boolean;
}
export interface MsgUpdateListingResponse {
    listing?: Listing;
}
export interface MsgUpdateListingResponseSDKType {
    listing?: ListingSDKType;
}
export interface MsgDeleteListing {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgDeleteListingSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgDeleteListingResponse {
}
export interface MsgDeleteListingResponseSDKType {
}
export interface MsgSellNFT {
    creator: string;
    classId: string;
    nftId: string;
    buyer: string;
    price: Long;
    fullPayToRoyalty: boolean;
}
export interface MsgSellNFTSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    buyer: string;
    price: Long;
    full_pay_to_royalty: boolean;
}
export interface MsgSellNFTResponse {
}
export interface MsgSellNFTResponseSDKType {
}
export interface MsgBuyNFT {
    creator: string;
    classId: string;
    nftId: string;
    seller: string;
    price: Long;
}
export interface MsgBuyNFTSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    seller: string;
    price: Long;
}
export interface MsgBuyNFTResponse {
}
export interface MsgBuyNFTResponseSDKType {
}
export interface MsgCreateRoyaltyConfig {
    creator: string;
    classId: string;
    royaltyConfig?: RoyaltyConfigInput;
}
export interface MsgCreateRoyaltyConfigSDKType {
    creator: string;
    class_id: string;
    royalty_config?: RoyaltyConfigInputSDKType;
}
export interface MsgCreateRoyaltyConfigResponse {
    royaltyConfig?: RoyaltyConfig;
}
export interface MsgCreateRoyaltyConfigResponseSDKType {
    royalty_config?: RoyaltyConfigSDKType;
}
export interface MsgUpdateRoyaltyConfig {
    creator: string;
    classId: string;
    royaltyConfig?: RoyaltyConfigInput;
}
export interface MsgUpdateRoyaltyConfigSDKType {
    creator: string;
    class_id: string;
    royalty_config?: RoyaltyConfigInputSDKType;
}
export interface MsgUpdateRoyaltyConfigResponse {
    royaltyConfig?: RoyaltyConfig;
}
export interface MsgUpdateRoyaltyConfigResponseSDKType {
    royalty_config?: RoyaltyConfigSDKType;
}
export interface MsgDeleteRoyaltyConfig {
    creator: string;
    classId: string;
}
export interface MsgDeleteRoyaltyConfigSDKType {
    creator: string;
    class_id: string;
}
export interface MsgDeleteRoyaltyConfigResponse {
}
export interface MsgDeleteRoyaltyConfigResponseSDKType {
}
export declare const MsgNewClass: {
    encode(message: MsgNewClass, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgNewClass;
    fromPartial(object: Partial<MsgNewClass>): MsgNewClass;
};
export declare const MsgNewClassResponse: {
    encode(message: MsgNewClassResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgNewClassResponse;
    fromPartial(object: Partial<MsgNewClassResponse>): MsgNewClassResponse;
};
export declare const MsgUpdateClass: {
    encode(message: MsgUpdateClass, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateClass;
    fromPartial(object: Partial<MsgUpdateClass>): MsgUpdateClass;
};
export declare const MsgUpdateClassResponse: {
    encode(message: MsgUpdateClassResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateClassResponse;
    fromPartial(object: Partial<MsgUpdateClassResponse>): MsgUpdateClassResponse;
};
export declare const MsgMintNFT: {
    encode(message: MsgMintNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMintNFT;
    fromPartial(object: Partial<MsgMintNFT>): MsgMintNFT;
};
export declare const MsgMintNFTResponse: {
    encode(message: MsgMintNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMintNFTResponse;
    fromPartial(object: Partial<MsgMintNFTResponse>): MsgMintNFTResponse;
};
export declare const MsgBurnNFT: {
    encode(message: MsgBurnNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBurnNFT;
    fromPartial(object: Partial<MsgBurnNFT>): MsgBurnNFT;
};
export declare const MsgBurnNFTResponse: {
    encode(_: MsgBurnNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBurnNFTResponse;
    fromPartial(_: Partial<MsgBurnNFTResponse>): MsgBurnNFTResponse;
};
export declare const MsgCreateBlindBoxContent: {
    encode(message: MsgCreateBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBlindBoxContent;
    fromPartial(object: Partial<MsgCreateBlindBoxContent>): MsgCreateBlindBoxContent;
};
export declare const MsgCreateBlindBoxContentResponse: {
    encode(message: MsgCreateBlindBoxContentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateBlindBoxContentResponse;
    fromPartial(object: Partial<MsgCreateBlindBoxContentResponse>): MsgCreateBlindBoxContentResponse;
};
export declare const MsgUpdateBlindBoxContent: {
    encode(message: MsgUpdateBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateBlindBoxContent;
    fromPartial(object: Partial<MsgUpdateBlindBoxContent>): MsgUpdateBlindBoxContent;
};
export declare const MsgUpdateBlindBoxContentResponse: {
    encode(message: MsgUpdateBlindBoxContentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateBlindBoxContentResponse;
    fromPartial(object: Partial<MsgUpdateBlindBoxContentResponse>): MsgUpdateBlindBoxContentResponse;
};
export declare const MsgDeleteBlindBoxContent: {
    encode(message: MsgDeleteBlindBoxContent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteBlindBoxContent;
    fromPartial(object: Partial<MsgDeleteBlindBoxContent>): MsgDeleteBlindBoxContent;
};
export declare const MsgDeleteBlindBoxContentResponse: {
    encode(_: MsgDeleteBlindBoxContentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteBlindBoxContentResponse;
    fromPartial(_: Partial<MsgDeleteBlindBoxContentResponse>): MsgDeleteBlindBoxContentResponse;
};
export declare const MsgCreateOffer: {
    encode(message: MsgCreateOffer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateOffer;
    fromPartial(object: Partial<MsgCreateOffer>): MsgCreateOffer;
};
export declare const MsgCreateOfferResponse: {
    encode(message: MsgCreateOfferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateOfferResponse;
    fromPartial(object: Partial<MsgCreateOfferResponse>): MsgCreateOfferResponse;
};
export declare const MsgUpdateOffer: {
    encode(message: MsgUpdateOffer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateOffer;
    fromPartial(object: Partial<MsgUpdateOffer>): MsgUpdateOffer;
};
export declare const MsgUpdateOfferResponse: {
    encode(message: MsgUpdateOfferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateOfferResponse;
    fromPartial(object: Partial<MsgUpdateOfferResponse>): MsgUpdateOfferResponse;
};
export declare const MsgDeleteOffer: {
    encode(message: MsgDeleteOffer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteOffer;
    fromPartial(object: Partial<MsgDeleteOffer>): MsgDeleteOffer;
};
export declare const MsgDeleteOfferResponse: {
    encode(_: MsgDeleteOfferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteOfferResponse;
    fromPartial(_: Partial<MsgDeleteOfferResponse>): MsgDeleteOfferResponse;
};
export declare const MsgCreateListing: {
    encode(message: MsgCreateListing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateListing;
    fromPartial(object: Partial<MsgCreateListing>): MsgCreateListing;
};
export declare const MsgCreateListingResponse: {
    encode(message: MsgCreateListingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateListingResponse;
    fromPartial(object: Partial<MsgCreateListingResponse>): MsgCreateListingResponse;
};
export declare const MsgUpdateListing: {
    encode(message: MsgUpdateListing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateListing;
    fromPartial(object: Partial<MsgUpdateListing>): MsgUpdateListing;
};
export declare const MsgUpdateListingResponse: {
    encode(message: MsgUpdateListingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateListingResponse;
    fromPartial(object: Partial<MsgUpdateListingResponse>): MsgUpdateListingResponse;
};
export declare const MsgDeleteListing: {
    encode(message: MsgDeleteListing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteListing;
    fromPartial(object: Partial<MsgDeleteListing>): MsgDeleteListing;
};
export declare const MsgDeleteListingResponse: {
    encode(_: MsgDeleteListingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteListingResponse;
    fromPartial(_: Partial<MsgDeleteListingResponse>): MsgDeleteListingResponse;
};
export declare const MsgSellNFT: {
    encode(message: MsgSellNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSellNFT;
    fromPartial(object: Partial<MsgSellNFT>): MsgSellNFT;
};
export declare const MsgSellNFTResponse: {
    encode(_: MsgSellNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSellNFTResponse;
    fromPartial(_: Partial<MsgSellNFTResponse>): MsgSellNFTResponse;
};
export declare const MsgBuyNFT: {
    encode(message: MsgBuyNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBuyNFT;
    fromPartial(object: Partial<MsgBuyNFT>): MsgBuyNFT;
};
export declare const MsgBuyNFTResponse: {
    encode(_: MsgBuyNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBuyNFTResponse;
    fromPartial(_: Partial<MsgBuyNFTResponse>): MsgBuyNFTResponse;
};
export declare const MsgCreateRoyaltyConfig: {
    encode(message: MsgCreateRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateRoyaltyConfig;
    fromPartial(object: Partial<MsgCreateRoyaltyConfig>): MsgCreateRoyaltyConfig;
};
export declare const MsgCreateRoyaltyConfigResponse: {
    encode(message: MsgCreateRoyaltyConfigResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateRoyaltyConfigResponse;
    fromPartial(object: Partial<MsgCreateRoyaltyConfigResponse>): MsgCreateRoyaltyConfigResponse;
};
export declare const MsgUpdateRoyaltyConfig: {
    encode(message: MsgUpdateRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateRoyaltyConfig;
    fromPartial(object: Partial<MsgUpdateRoyaltyConfig>): MsgUpdateRoyaltyConfig;
};
export declare const MsgUpdateRoyaltyConfigResponse: {
    encode(message: MsgUpdateRoyaltyConfigResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateRoyaltyConfigResponse;
    fromPartial(object: Partial<MsgUpdateRoyaltyConfigResponse>): MsgUpdateRoyaltyConfigResponse;
};
export declare const MsgDeleteRoyaltyConfig: {
    encode(message: MsgDeleteRoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteRoyaltyConfig;
    fromPartial(object: Partial<MsgDeleteRoyaltyConfig>): MsgDeleteRoyaltyConfig;
};
export declare const MsgDeleteRoyaltyConfigResponse: {
    encode(_: MsgDeleteRoyaltyConfigResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteRoyaltyConfigResponse;
    fromPartial(_: Partial<MsgDeleteRoyaltyConfigResponse>): MsgDeleteRoyaltyConfigResponse;
};
