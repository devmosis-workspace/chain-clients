import { ClassParentInput, ClassParentInputAmino, ClassParentInputSDKType, ClassInput, ClassInputAmino, ClassInputSDKType } from "./class_input";
import { NFTInput, NFTInputAmino, NFTInputSDKType } from "./nft_input";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { RoyaltyConfigInput, RoyaltyConfigInputAmino, RoyaltyConfigInputSDKType, RoyaltyConfig, RoyaltyConfigAmino, RoyaltyConfigSDKType } from "./royalty_config";
import { Class, ClassAmino, ClassSDKType, NFT, NFTAmino, NFTSDKType } from "../../../cosmos/nft/v1beta1/nft";
import { BlindBoxContent, BlindBoxContentAmino, BlindBoxContentSDKType } from "./blind_box_content";
import { Offer, OfferAmino, OfferSDKType } from "./offer";
import { Listing, ListingAmino, ListingSDKType } from "./listing";
import { BinaryWriter } from "../../../binary";
export interface MsgNewClass {
    creator: string;
    parent: ClassParentInput;
    input: ClassInput;
}
export interface MsgNewClassProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgNewClass";
    value: Uint8Array;
}
export interface MsgNewClassAmino {
    creator: string;
    parent?: ClassParentInputAmino;
    input?: ClassInputAmino;
}
export interface MsgNewClassAminoMsg {
    type: "/likechain.likenft.v1.MsgNewClass";
    value: MsgNewClassAmino;
}
export interface MsgNewClassSDKType {
    creator: string;
    parent: ClassParentInputSDKType;
    input: ClassInputSDKType;
}
export interface MsgNewClassResponse {
    class: Class;
}
export interface MsgNewClassResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgNewClassResponse";
    value: Uint8Array;
}
export interface MsgNewClassResponseAmino {
    class?: ClassAmino;
}
export interface MsgNewClassResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgNewClassResponse";
    value: MsgNewClassResponseAmino;
}
export interface MsgNewClassResponseSDKType {
    class: ClassSDKType;
}
export interface MsgUpdateClass {
    creator: string;
    classId: string;
    input: ClassInput;
}
export interface MsgUpdateClassProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateClass";
    value: Uint8Array;
}
export interface MsgUpdateClassAmino {
    creator: string;
    class_id: string;
    input?: ClassInputAmino;
}
export interface MsgUpdateClassAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateClass";
    value: MsgUpdateClassAmino;
}
export interface MsgUpdateClassSDKType {
    creator: string;
    class_id: string;
    input: ClassInputSDKType;
}
export interface MsgUpdateClassResponse {
    class: Class;
}
export interface MsgUpdateClassResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateClassResponse";
    value: Uint8Array;
}
export interface MsgUpdateClassResponseAmino {
    class?: ClassAmino;
}
export interface MsgUpdateClassResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateClassResponse";
    value: MsgUpdateClassResponseAmino;
}
export interface MsgUpdateClassResponseSDKType {
    class: ClassSDKType;
}
export interface MsgMintNFT {
    creator: string;
    classId: string;
    id: string;
    input?: NFTInput;
}
export interface MsgMintNFTProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgMintNFT";
    value: Uint8Array;
}
export interface MsgMintNFTAmino {
    creator: string;
    class_id: string;
    id: string;
    input?: NFTInputAmino;
}
export interface MsgMintNFTAminoMsg {
    type: "/likechain.likenft.v1.MsgMintNFT";
    value: MsgMintNFTAmino;
}
export interface MsgMintNFTSDKType {
    creator: string;
    class_id: string;
    id: string;
    input?: NFTInputSDKType;
}
export interface MsgMintNFTResponse {
    nft: NFT;
}
export interface MsgMintNFTResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgMintNFTResponse";
    value: Uint8Array;
}
export interface MsgMintNFTResponseAmino {
    nft?: NFTAmino;
}
export interface MsgMintNFTResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgMintNFTResponse";
    value: MsgMintNFTResponseAmino;
}
export interface MsgMintNFTResponseSDKType {
    nft: NFTSDKType;
}
export interface MsgBurnNFT {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgBurnNFTProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgBurnNFT";
    value: Uint8Array;
}
export interface MsgBurnNFTAmino {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgBurnNFTAminoMsg {
    type: "/likechain.likenft.v1.MsgBurnNFT";
    value: MsgBurnNFTAmino;
}
export interface MsgBurnNFTSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgBurnNFTResponse {
}
export interface MsgBurnNFTResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgBurnNFTResponse";
    value: Uint8Array;
}
export interface MsgBurnNFTResponseAmino {
}
export interface MsgBurnNFTResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgBurnNFTResponse";
    value: MsgBurnNFTResponseAmino;
}
export interface MsgBurnNFTResponseSDKType {
}
export interface MsgCreateBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
    input: NFTInput;
}
export interface MsgCreateBlindBoxContentProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContent";
    value: Uint8Array;
}
export interface MsgCreateBlindBoxContentAmino {
    creator: string;
    class_id: string;
    id: string;
    input?: NFTInputAmino;
}
export interface MsgCreateBlindBoxContentAminoMsg {
    type: "/likechain.likenft.v1.MsgCreateBlindBoxContent";
    value: MsgCreateBlindBoxContentAmino;
}
export interface MsgCreateBlindBoxContentSDKType {
    creator: string;
    class_id: string;
    id: string;
    input: NFTInputSDKType;
}
export interface MsgCreateBlindBoxContentResponse {
    blindBoxContent: BlindBoxContent;
}
export interface MsgCreateBlindBoxContentResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContentResponse";
    value: Uint8Array;
}
export interface MsgCreateBlindBoxContentResponseAmino {
    blind_box_content?: BlindBoxContentAmino;
}
export interface MsgCreateBlindBoxContentResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgCreateBlindBoxContentResponse";
    value: MsgCreateBlindBoxContentResponseAmino;
}
export interface MsgCreateBlindBoxContentResponseSDKType {
    blind_box_content: BlindBoxContentSDKType;
}
export interface MsgUpdateBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
    input: NFTInput;
}
export interface MsgUpdateBlindBoxContentProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContent";
    value: Uint8Array;
}
export interface MsgUpdateBlindBoxContentAmino {
    creator: string;
    class_id: string;
    id: string;
    input?: NFTInputAmino;
}
export interface MsgUpdateBlindBoxContentAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateBlindBoxContent";
    value: MsgUpdateBlindBoxContentAmino;
}
export interface MsgUpdateBlindBoxContentSDKType {
    creator: string;
    class_id: string;
    id: string;
    input: NFTInputSDKType;
}
export interface MsgUpdateBlindBoxContentResponse {
    blindBoxContent: BlindBoxContent;
}
export interface MsgUpdateBlindBoxContentResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContentResponse";
    value: Uint8Array;
}
export interface MsgUpdateBlindBoxContentResponseAmino {
    blind_box_content?: BlindBoxContentAmino;
}
export interface MsgUpdateBlindBoxContentResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateBlindBoxContentResponse";
    value: MsgUpdateBlindBoxContentResponseAmino;
}
export interface MsgUpdateBlindBoxContentResponseSDKType {
    blind_box_content: BlindBoxContentSDKType;
}
export interface MsgDeleteBlindBoxContent {
    creator: string;
    classId: string;
    id: string;
}
export interface MsgDeleteBlindBoxContentProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContent";
    value: Uint8Array;
}
export interface MsgDeleteBlindBoxContentAmino {
    creator: string;
    class_id: string;
    id: string;
}
export interface MsgDeleteBlindBoxContentAminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteBlindBoxContent";
    value: MsgDeleteBlindBoxContentAmino;
}
export interface MsgDeleteBlindBoxContentSDKType {
    creator: string;
    class_id: string;
    id: string;
}
export interface MsgDeleteBlindBoxContentResponse {
}
export interface MsgDeleteBlindBoxContentResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContentResponse";
    value: Uint8Array;
}
export interface MsgDeleteBlindBoxContentResponseAmino {
}
export interface MsgDeleteBlindBoxContentResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteBlindBoxContentResponse";
    value: MsgDeleteBlindBoxContentResponseAmino;
}
export interface MsgDeleteBlindBoxContentResponseSDKType {
}
export interface MsgCreateOffer {
    creator: string;
    classId: string;
    nftId: string;
    price: bigint;
    expiration: Timestamp;
}
export interface MsgCreateOfferProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgCreateOffer";
    value: Uint8Array;
}
export interface MsgCreateOfferAmino {
    creator: string;
    class_id: string;
    nft_id: string;
    price: string;
    expiration?: TimestampAmino;
}
export interface MsgCreateOfferAminoMsg {
    type: "/likechain.likenft.v1.MsgCreateOffer";
    value: MsgCreateOfferAmino;
}
export interface MsgCreateOfferSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    price: bigint;
    expiration: TimestampSDKType;
}
export interface MsgCreateOfferResponse {
    offer: Offer;
}
export interface MsgCreateOfferResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgCreateOfferResponse";
    value: Uint8Array;
}
export interface MsgCreateOfferResponseAmino {
    offer?: OfferAmino;
}
export interface MsgCreateOfferResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgCreateOfferResponse";
    value: MsgCreateOfferResponseAmino;
}
export interface MsgCreateOfferResponseSDKType {
    offer: OfferSDKType;
}
export interface MsgUpdateOffer {
    creator: string;
    classId: string;
    nftId: string;
    price: bigint;
    expiration: Timestamp;
}
export interface MsgUpdateOfferProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateOffer";
    value: Uint8Array;
}
export interface MsgUpdateOfferAmino {
    creator: string;
    class_id: string;
    nft_id: string;
    price: string;
    expiration?: TimestampAmino;
}
export interface MsgUpdateOfferAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateOffer";
    value: MsgUpdateOfferAmino;
}
export interface MsgUpdateOfferSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    price: bigint;
    expiration: TimestampSDKType;
}
export interface MsgUpdateOfferResponse {
    offer: Offer;
}
export interface MsgUpdateOfferResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateOfferResponse";
    value: Uint8Array;
}
export interface MsgUpdateOfferResponseAmino {
    offer?: OfferAmino;
}
export interface MsgUpdateOfferResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateOfferResponse";
    value: MsgUpdateOfferResponseAmino;
}
export interface MsgUpdateOfferResponseSDKType {
    offer: OfferSDKType;
}
export interface MsgDeleteOffer {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgDeleteOfferProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgDeleteOffer";
    value: Uint8Array;
}
export interface MsgDeleteOfferAmino {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgDeleteOfferAminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteOffer";
    value: MsgDeleteOfferAmino;
}
export interface MsgDeleteOfferSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgDeleteOfferResponse {
}
export interface MsgDeleteOfferResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgDeleteOfferResponse";
    value: Uint8Array;
}
export interface MsgDeleteOfferResponseAmino {
}
export interface MsgDeleteOfferResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteOfferResponse";
    value: MsgDeleteOfferResponseAmino;
}
export interface MsgDeleteOfferResponseSDKType {
}
export interface MsgCreateListing {
    creator: string;
    classId: string;
    nftId: string;
    price: bigint;
    expiration: Timestamp;
    fullPayToRoyalty: boolean;
}
export interface MsgCreateListingProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgCreateListing";
    value: Uint8Array;
}
export interface MsgCreateListingAmino {
    creator: string;
    class_id: string;
    nft_id: string;
    price: string;
    expiration?: TimestampAmino;
    full_pay_to_royalty: boolean;
}
export interface MsgCreateListingAminoMsg {
    type: "/likechain.likenft.v1.MsgCreateListing";
    value: MsgCreateListingAmino;
}
export interface MsgCreateListingSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    price: bigint;
    expiration: TimestampSDKType;
    full_pay_to_royalty: boolean;
}
export interface MsgCreateListingResponse {
    listing: Listing;
}
export interface MsgCreateListingResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgCreateListingResponse";
    value: Uint8Array;
}
export interface MsgCreateListingResponseAmino {
    listing?: ListingAmino;
}
export interface MsgCreateListingResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgCreateListingResponse";
    value: MsgCreateListingResponseAmino;
}
export interface MsgCreateListingResponseSDKType {
    listing: ListingSDKType;
}
export interface MsgUpdateListing {
    creator: string;
    classId: string;
    nftId: string;
    price: bigint;
    expiration: Timestamp;
    fullPayToRoyalty: boolean;
}
export interface MsgUpdateListingProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateListing";
    value: Uint8Array;
}
export interface MsgUpdateListingAmino {
    creator: string;
    class_id: string;
    nft_id: string;
    price: string;
    expiration?: TimestampAmino;
    full_pay_to_royalty: boolean;
}
export interface MsgUpdateListingAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateListing";
    value: MsgUpdateListingAmino;
}
export interface MsgUpdateListingSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    price: bigint;
    expiration: TimestampSDKType;
    full_pay_to_royalty: boolean;
}
export interface MsgUpdateListingResponse {
    listing: Listing;
}
export interface MsgUpdateListingResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateListingResponse";
    value: Uint8Array;
}
export interface MsgUpdateListingResponseAmino {
    listing?: ListingAmino;
}
export interface MsgUpdateListingResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateListingResponse";
    value: MsgUpdateListingResponseAmino;
}
export interface MsgUpdateListingResponseSDKType {
    listing: ListingSDKType;
}
export interface MsgDeleteListing {
    creator: string;
    classId: string;
    nftId: string;
}
export interface MsgDeleteListingProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgDeleteListing";
    value: Uint8Array;
}
export interface MsgDeleteListingAmino {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgDeleteListingAminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteListing";
    value: MsgDeleteListingAmino;
}
export interface MsgDeleteListingSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
}
export interface MsgDeleteListingResponse {
}
export interface MsgDeleteListingResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgDeleteListingResponse";
    value: Uint8Array;
}
export interface MsgDeleteListingResponseAmino {
}
export interface MsgDeleteListingResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteListingResponse";
    value: MsgDeleteListingResponseAmino;
}
export interface MsgDeleteListingResponseSDKType {
}
export interface MsgSellNFT {
    creator: string;
    classId: string;
    nftId: string;
    buyer: string;
    price: bigint;
    fullPayToRoyalty: boolean;
}
export interface MsgSellNFTProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgSellNFT";
    value: Uint8Array;
}
export interface MsgSellNFTAmino {
    creator: string;
    class_id: string;
    nft_id: string;
    buyer: string;
    price: string;
    full_pay_to_royalty: boolean;
}
export interface MsgSellNFTAminoMsg {
    type: "/likechain.likenft.v1.MsgSellNFT";
    value: MsgSellNFTAmino;
}
export interface MsgSellNFTSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    buyer: string;
    price: bigint;
    full_pay_to_royalty: boolean;
}
export interface MsgSellNFTResponse {
}
export interface MsgSellNFTResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgSellNFTResponse";
    value: Uint8Array;
}
export interface MsgSellNFTResponseAmino {
}
export interface MsgSellNFTResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgSellNFTResponse";
    value: MsgSellNFTResponseAmino;
}
export interface MsgSellNFTResponseSDKType {
}
export interface MsgBuyNFT {
    creator: string;
    classId: string;
    nftId: string;
    seller: string;
    price: bigint;
}
export interface MsgBuyNFTProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgBuyNFT";
    value: Uint8Array;
}
export interface MsgBuyNFTAmino {
    creator: string;
    class_id: string;
    nft_id: string;
    seller: string;
    price: string;
}
export interface MsgBuyNFTAminoMsg {
    type: "/likechain.likenft.v1.MsgBuyNFT";
    value: MsgBuyNFTAmino;
}
export interface MsgBuyNFTSDKType {
    creator: string;
    class_id: string;
    nft_id: string;
    seller: string;
    price: bigint;
}
export interface MsgBuyNFTResponse {
}
export interface MsgBuyNFTResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgBuyNFTResponse";
    value: Uint8Array;
}
export interface MsgBuyNFTResponseAmino {
}
export interface MsgBuyNFTResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgBuyNFTResponse";
    value: MsgBuyNFTResponseAmino;
}
export interface MsgBuyNFTResponseSDKType {
}
export interface MsgCreateRoyaltyConfig {
    creator: string;
    classId: string;
    royaltyConfig: RoyaltyConfigInput;
}
export interface MsgCreateRoyaltyConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfig";
    value: Uint8Array;
}
export interface MsgCreateRoyaltyConfigAmino {
    creator: string;
    class_id: string;
    royalty_config?: RoyaltyConfigInputAmino;
}
export interface MsgCreateRoyaltyConfigAminoMsg {
    type: "/likechain.likenft.v1.MsgCreateRoyaltyConfig";
    value: MsgCreateRoyaltyConfigAmino;
}
export interface MsgCreateRoyaltyConfigSDKType {
    creator: string;
    class_id: string;
    royalty_config: RoyaltyConfigInputSDKType;
}
export interface MsgCreateRoyaltyConfigResponse {
    royaltyConfig: RoyaltyConfig;
}
export interface MsgCreateRoyaltyConfigResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfigResponse";
    value: Uint8Array;
}
export interface MsgCreateRoyaltyConfigResponseAmino {
    royalty_config?: RoyaltyConfigAmino;
}
export interface MsgCreateRoyaltyConfigResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgCreateRoyaltyConfigResponse";
    value: MsgCreateRoyaltyConfigResponseAmino;
}
export interface MsgCreateRoyaltyConfigResponseSDKType {
    royalty_config: RoyaltyConfigSDKType;
}
export interface MsgUpdateRoyaltyConfig {
    creator: string;
    classId: string;
    royaltyConfig: RoyaltyConfigInput;
}
export interface MsgUpdateRoyaltyConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig";
    value: Uint8Array;
}
export interface MsgUpdateRoyaltyConfigAmino {
    creator: string;
    class_id: string;
    royalty_config?: RoyaltyConfigInputAmino;
}
export interface MsgUpdateRoyaltyConfigAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig";
    value: MsgUpdateRoyaltyConfigAmino;
}
export interface MsgUpdateRoyaltyConfigSDKType {
    creator: string;
    class_id: string;
    royalty_config: RoyaltyConfigInputSDKType;
}
export interface MsgUpdateRoyaltyConfigResponse {
    royaltyConfig: RoyaltyConfig;
}
export interface MsgUpdateRoyaltyConfigResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfigResponse";
    value: Uint8Array;
}
export interface MsgUpdateRoyaltyConfigResponseAmino {
    royalty_config?: RoyaltyConfigAmino;
}
export interface MsgUpdateRoyaltyConfigResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgUpdateRoyaltyConfigResponse";
    value: MsgUpdateRoyaltyConfigResponseAmino;
}
export interface MsgUpdateRoyaltyConfigResponseSDKType {
    royalty_config: RoyaltyConfigSDKType;
}
export interface MsgDeleteRoyaltyConfig {
    creator: string;
    classId: string;
}
export interface MsgDeleteRoyaltyConfigProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig";
    value: Uint8Array;
}
export interface MsgDeleteRoyaltyConfigAmino {
    creator: string;
    class_id: string;
}
export interface MsgDeleteRoyaltyConfigAminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig";
    value: MsgDeleteRoyaltyConfigAmino;
}
export interface MsgDeleteRoyaltyConfigSDKType {
    creator: string;
    class_id: string;
}
export interface MsgDeleteRoyaltyConfigResponse {
}
export interface MsgDeleteRoyaltyConfigResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfigResponse";
    value: Uint8Array;
}
export interface MsgDeleteRoyaltyConfigResponseAmino {
}
export interface MsgDeleteRoyaltyConfigResponseAminoMsg {
    type: "/likechain.likenft.v1.MsgDeleteRoyaltyConfigResponse";
    value: MsgDeleteRoyaltyConfigResponseAmino;
}
export interface MsgDeleteRoyaltyConfigResponseSDKType {
}
export declare const MsgNewClass: {
    typeUrl: string;
    encode(message: MsgNewClass, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgNewClass;
    fromPartial(object: Partial<MsgNewClass>): MsgNewClass;
    fromAmino(object: MsgNewClassAmino): MsgNewClass;
    toAmino(message: MsgNewClass): MsgNewClassAmino;
    fromAminoMsg(object: MsgNewClassAminoMsg): MsgNewClass;
    fromProtoMsg(message: MsgNewClassProtoMsg): MsgNewClass;
    toProto(message: MsgNewClass): Uint8Array;
    toProtoMsg(message: MsgNewClass): MsgNewClassProtoMsg;
};
export declare const MsgNewClassResponse: {
    typeUrl: string;
    encode(message: MsgNewClassResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgNewClassResponse;
    fromPartial(object: Partial<MsgNewClassResponse>): MsgNewClassResponse;
    fromAmino(object: MsgNewClassResponseAmino): MsgNewClassResponse;
    toAmino(message: MsgNewClassResponse): MsgNewClassResponseAmino;
    fromAminoMsg(object: MsgNewClassResponseAminoMsg): MsgNewClassResponse;
    fromProtoMsg(message: MsgNewClassResponseProtoMsg): MsgNewClassResponse;
    toProto(message: MsgNewClassResponse): Uint8Array;
    toProtoMsg(message: MsgNewClassResponse): MsgNewClassResponseProtoMsg;
};
export declare const MsgUpdateClass: {
    typeUrl: string;
    encode(message: MsgUpdateClass, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateClass;
    fromPartial(object: Partial<MsgUpdateClass>): MsgUpdateClass;
    fromAmino(object: MsgUpdateClassAmino): MsgUpdateClass;
    toAmino(message: MsgUpdateClass): MsgUpdateClassAmino;
    fromAminoMsg(object: MsgUpdateClassAminoMsg): MsgUpdateClass;
    fromProtoMsg(message: MsgUpdateClassProtoMsg): MsgUpdateClass;
    toProto(message: MsgUpdateClass): Uint8Array;
    toProtoMsg(message: MsgUpdateClass): MsgUpdateClassProtoMsg;
};
export declare const MsgUpdateClassResponse: {
    typeUrl: string;
    encode(message: MsgUpdateClassResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateClassResponse;
    fromPartial(object: Partial<MsgUpdateClassResponse>): MsgUpdateClassResponse;
    fromAmino(object: MsgUpdateClassResponseAmino): MsgUpdateClassResponse;
    toAmino(message: MsgUpdateClassResponse): MsgUpdateClassResponseAmino;
    fromAminoMsg(object: MsgUpdateClassResponseAminoMsg): MsgUpdateClassResponse;
    fromProtoMsg(message: MsgUpdateClassResponseProtoMsg): MsgUpdateClassResponse;
    toProto(message: MsgUpdateClassResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassResponse): MsgUpdateClassResponseProtoMsg;
};
export declare const MsgMintNFT: {
    typeUrl: string;
    encode(message: MsgMintNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMintNFT;
    fromPartial(object: Partial<MsgMintNFT>): MsgMintNFT;
    fromAmino(object: MsgMintNFTAmino): MsgMintNFT;
    toAmino(message: MsgMintNFT): MsgMintNFTAmino;
    fromAminoMsg(object: MsgMintNFTAminoMsg): MsgMintNFT;
    fromProtoMsg(message: MsgMintNFTProtoMsg): MsgMintNFT;
    toProto(message: MsgMintNFT): Uint8Array;
    toProtoMsg(message: MsgMintNFT): MsgMintNFTProtoMsg;
};
export declare const MsgMintNFTResponse: {
    typeUrl: string;
    encode(message: MsgMintNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMintNFTResponse;
    fromPartial(object: Partial<MsgMintNFTResponse>): MsgMintNFTResponse;
    fromAmino(object: MsgMintNFTResponseAmino): MsgMintNFTResponse;
    toAmino(message: MsgMintNFTResponse): MsgMintNFTResponseAmino;
    fromAminoMsg(object: MsgMintNFTResponseAminoMsg): MsgMintNFTResponse;
    fromProtoMsg(message: MsgMintNFTResponseProtoMsg): MsgMintNFTResponse;
    toProto(message: MsgMintNFTResponse): Uint8Array;
    toProtoMsg(message: MsgMintNFTResponse): MsgMintNFTResponseProtoMsg;
};
export declare const MsgBurnNFT: {
    typeUrl: string;
    encode(message: MsgBurnNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBurnNFT;
    fromPartial(object: Partial<MsgBurnNFT>): MsgBurnNFT;
    fromAmino(object: MsgBurnNFTAmino): MsgBurnNFT;
    toAmino(message: MsgBurnNFT): MsgBurnNFTAmino;
    fromAminoMsg(object: MsgBurnNFTAminoMsg): MsgBurnNFT;
    fromProtoMsg(message: MsgBurnNFTProtoMsg): MsgBurnNFT;
    toProto(message: MsgBurnNFT): Uint8Array;
    toProtoMsg(message: MsgBurnNFT): MsgBurnNFTProtoMsg;
};
export declare const MsgBurnNFTResponse: {
    typeUrl: string;
    encode(_: MsgBurnNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBurnNFTResponse;
    fromPartial(_: Partial<MsgBurnNFTResponse>): MsgBurnNFTResponse;
    fromAmino(_: MsgBurnNFTResponseAmino): MsgBurnNFTResponse;
    toAmino(_: MsgBurnNFTResponse): MsgBurnNFTResponseAmino;
    fromAminoMsg(object: MsgBurnNFTResponseAminoMsg): MsgBurnNFTResponse;
    fromProtoMsg(message: MsgBurnNFTResponseProtoMsg): MsgBurnNFTResponse;
    toProto(message: MsgBurnNFTResponse): Uint8Array;
    toProtoMsg(message: MsgBurnNFTResponse): MsgBurnNFTResponseProtoMsg;
};
export declare const MsgCreateBlindBoxContent: {
    typeUrl: string;
    encode(message: MsgCreateBlindBoxContent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBlindBoxContent;
    fromPartial(object: Partial<MsgCreateBlindBoxContent>): MsgCreateBlindBoxContent;
    fromAmino(object: MsgCreateBlindBoxContentAmino): MsgCreateBlindBoxContent;
    toAmino(message: MsgCreateBlindBoxContent): MsgCreateBlindBoxContentAmino;
    fromAminoMsg(object: MsgCreateBlindBoxContentAminoMsg): MsgCreateBlindBoxContent;
    fromProtoMsg(message: MsgCreateBlindBoxContentProtoMsg): MsgCreateBlindBoxContent;
    toProto(message: MsgCreateBlindBoxContent): Uint8Array;
    toProtoMsg(message: MsgCreateBlindBoxContent): MsgCreateBlindBoxContentProtoMsg;
};
export declare const MsgCreateBlindBoxContentResponse: {
    typeUrl: string;
    encode(message: MsgCreateBlindBoxContentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBlindBoxContentResponse;
    fromPartial(object: Partial<MsgCreateBlindBoxContentResponse>): MsgCreateBlindBoxContentResponse;
    fromAmino(object: MsgCreateBlindBoxContentResponseAmino): MsgCreateBlindBoxContentResponse;
    toAmino(message: MsgCreateBlindBoxContentResponse): MsgCreateBlindBoxContentResponseAmino;
    fromAminoMsg(object: MsgCreateBlindBoxContentResponseAminoMsg): MsgCreateBlindBoxContentResponse;
    fromProtoMsg(message: MsgCreateBlindBoxContentResponseProtoMsg): MsgCreateBlindBoxContentResponse;
    toProto(message: MsgCreateBlindBoxContentResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBlindBoxContentResponse): MsgCreateBlindBoxContentResponseProtoMsg;
};
export declare const MsgUpdateBlindBoxContent: {
    typeUrl: string;
    encode(message: MsgUpdateBlindBoxContent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateBlindBoxContent;
    fromPartial(object: Partial<MsgUpdateBlindBoxContent>): MsgUpdateBlindBoxContent;
    fromAmino(object: MsgUpdateBlindBoxContentAmino): MsgUpdateBlindBoxContent;
    toAmino(message: MsgUpdateBlindBoxContent): MsgUpdateBlindBoxContentAmino;
    fromAminoMsg(object: MsgUpdateBlindBoxContentAminoMsg): MsgUpdateBlindBoxContent;
    fromProtoMsg(message: MsgUpdateBlindBoxContentProtoMsg): MsgUpdateBlindBoxContent;
    toProto(message: MsgUpdateBlindBoxContent): Uint8Array;
    toProtoMsg(message: MsgUpdateBlindBoxContent): MsgUpdateBlindBoxContentProtoMsg;
};
export declare const MsgUpdateBlindBoxContentResponse: {
    typeUrl: string;
    encode(message: MsgUpdateBlindBoxContentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateBlindBoxContentResponse;
    fromPartial(object: Partial<MsgUpdateBlindBoxContentResponse>): MsgUpdateBlindBoxContentResponse;
    fromAmino(object: MsgUpdateBlindBoxContentResponseAmino): MsgUpdateBlindBoxContentResponse;
    toAmino(message: MsgUpdateBlindBoxContentResponse): MsgUpdateBlindBoxContentResponseAmino;
    fromAminoMsg(object: MsgUpdateBlindBoxContentResponseAminoMsg): MsgUpdateBlindBoxContentResponse;
    fromProtoMsg(message: MsgUpdateBlindBoxContentResponseProtoMsg): MsgUpdateBlindBoxContentResponse;
    toProto(message: MsgUpdateBlindBoxContentResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateBlindBoxContentResponse): MsgUpdateBlindBoxContentResponseProtoMsg;
};
export declare const MsgDeleteBlindBoxContent: {
    typeUrl: string;
    encode(message: MsgDeleteBlindBoxContent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteBlindBoxContent;
    fromPartial(object: Partial<MsgDeleteBlindBoxContent>): MsgDeleteBlindBoxContent;
    fromAmino(object: MsgDeleteBlindBoxContentAmino): MsgDeleteBlindBoxContent;
    toAmino(message: MsgDeleteBlindBoxContent): MsgDeleteBlindBoxContentAmino;
    fromAminoMsg(object: MsgDeleteBlindBoxContentAminoMsg): MsgDeleteBlindBoxContent;
    fromProtoMsg(message: MsgDeleteBlindBoxContentProtoMsg): MsgDeleteBlindBoxContent;
    toProto(message: MsgDeleteBlindBoxContent): Uint8Array;
    toProtoMsg(message: MsgDeleteBlindBoxContent): MsgDeleteBlindBoxContentProtoMsg;
};
export declare const MsgDeleteBlindBoxContentResponse: {
    typeUrl: string;
    encode(_: MsgDeleteBlindBoxContentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteBlindBoxContentResponse;
    fromPartial(_: Partial<MsgDeleteBlindBoxContentResponse>): MsgDeleteBlindBoxContentResponse;
    fromAmino(_: MsgDeleteBlindBoxContentResponseAmino): MsgDeleteBlindBoxContentResponse;
    toAmino(_: MsgDeleteBlindBoxContentResponse): MsgDeleteBlindBoxContentResponseAmino;
    fromAminoMsg(object: MsgDeleteBlindBoxContentResponseAminoMsg): MsgDeleteBlindBoxContentResponse;
    fromProtoMsg(message: MsgDeleteBlindBoxContentResponseProtoMsg): MsgDeleteBlindBoxContentResponse;
    toProto(message: MsgDeleteBlindBoxContentResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteBlindBoxContentResponse): MsgDeleteBlindBoxContentResponseProtoMsg;
};
export declare const MsgCreateOffer: {
    typeUrl: string;
    encode(message: MsgCreateOffer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateOffer;
    fromPartial(object: Partial<MsgCreateOffer>): MsgCreateOffer;
    fromAmino(object: MsgCreateOfferAmino): MsgCreateOffer;
    toAmino(message: MsgCreateOffer): MsgCreateOfferAmino;
    fromAminoMsg(object: MsgCreateOfferAminoMsg): MsgCreateOffer;
    fromProtoMsg(message: MsgCreateOfferProtoMsg): MsgCreateOffer;
    toProto(message: MsgCreateOffer): Uint8Array;
    toProtoMsg(message: MsgCreateOffer): MsgCreateOfferProtoMsg;
};
export declare const MsgCreateOfferResponse: {
    typeUrl: string;
    encode(message: MsgCreateOfferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateOfferResponse;
    fromPartial(object: Partial<MsgCreateOfferResponse>): MsgCreateOfferResponse;
    fromAmino(object: MsgCreateOfferResponseAmino): MsgCreateOfferResponse;
    toAmino(message: MsgCreateOfferResponse): MsgCreateOfferResponseAmino;
    fromAminoMsg(object: MsgCreateOfferResponseAminoMsg): MsgCreateOfferResponse;
    fromProtoMsg(message: MsgCreateOfferResponseProtoMsg): MsgCreateOfferResponse;
    toProto(message: MsgCreateOfferResponse): Uint8Array;
    toProtoMsg(message: MsgCreateOfferResponse): MsgCreateOfferResponseProtoMsg;
};
export declare const MsgUpdateOffer: {
    typeUrl: string;
    encode(message: MsgUpdateOffer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateOffer;
    fromPartial(object: Partial<MsgUpdateOffer>): MsgUpdateOffer;
    fromAmino(object: MsgUpdateOfferAmino): MsgUpdateOffer;
    toAmino(message: MsgUpdateOffer): MsgUpdateOfferAmino;
    fromAminoMsg(object: MsgUpdateOfferAminoMsg): MsgUpdateOffer;
    fromProtoMsg(message: MsgUpdateOfferProtoMsg): MsgUpdateOffer;
    toProto(message: MsgUpdateOffer): Uint8Array;
    toProtoMsg(message: MsgUpdateOffer): MsgUpdateOfferProtoMsg;
};
export declare const MsgUpdateOfferResponse: {
    typeUrl: string;
    encode(message: MsgUpdateOfferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateOfferResponse;
    fromPartial(object: Partial<MsgUpdateOfferResponse>): MsgUpdateOfferResponse;
    fromAmino(object: MsgUpdateOfferResponseAmino): MsgUpdateOfferResponse;
    toAmino(message: MsgUpdateOfferResponse): MsgUpdateOfferResponseAmino;
    fromAminoMsg(object: MsgUpdateOfferResponseAminoMsg): MsgUpdateOfferResponse;
    fromProtoMsg(message: MsgUpdateOfferResponseProtoMsg): MsgUpdateOfferResponse;
    toProto(message: MsgUpdateOfferResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateOfferResponse): MsgUpdateOfferResponseProtoMsg;
};
export declare const MsgDeleteOffer: {
    typeUrl: string;
    encode(message: MsgDeleteOffer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteOffer;
    fromPartial(object: Partial<MsgDeleteOffer>): MsgDeleteOffer;
    fromAmino(object: MsgDeleteOfferAmino): MsgDeleteOffer;
    toAmino(message: MsgDeleteOffer): MsgDeleteOfferAmino;
    fromAminoMsg(object: MsgDeleteOfferAminoMsg): MsgDeleteOffer;
    fromProtoMsg(message: MsgDeleteOfferProtoMsg): MsgDeleteOffer;
    toProto(message: MsgDeleteOffer): Uint8Array;
    toProtoMsg(message: MsgDeleteOffer): MsgDeleteOfferProtoMsg;
};
export declare const MsgDeleteOfferResponse: {
    typeUrl: string;
    encode(_: MsgDeleteOfferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteOfferResponse;
    fromPartial(_: Partial<MsgDeleteOfferResponse>): MsgDeleteOfferResponse;
    fromAmino(_: MsgDeleteOfferResponseAmino): MsgDeleteOfferResponse;
    toAmino(_: MsgDeleteOfferResponse): MsgDeleteOfferResponseAmino;
    fromAminoMsg(object: MsgDeleteOfferResponseAminoMsg): MsgDeleteOfferResponse;
    fromProtoMsg(message: MsgDeleteOfferResponseProtoMsg): MsgDeleteOfferResponse;
    toProto(message: MsgDeleteOfferResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteOfferResponse): MsgDeleteOfferResponseProtoMsg;
};
export declare const MsgCreateListing: {
    typeUrl: string;
    encode(message: MsgCreateListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateListing;
    fromPartial(object: Partial<MsgCreateListing>): MsgCreateListing;
    fromAmino(object: MsgCreateListingAmino): MsgCreateListing;
    toAmino(message: MsgCreateListing): MsgCreateListingAmino;
    fromAminoMsg(object: MsgCreateListingAminoMsg): MsgCreateListing;
    fromProtoMsg(message: MsgCreateListingProtoMsg): MsgCreateListing;
    toProto(message: MsgCreateListing): Uint8Array;
    toProtoMsg(message: MsgCreateListing): MsgCreateListingProtoMsg;
};
export declare const MsgCreateListingResponse: {
    typeUrl: string;
    encode(message: MsgCreateListingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateListingResponse;
    fromPartial(object: Partial<MsgCreateListingResponse>): MsgCreateListingResponse;
    fromAmino(object: MsgCreateListingResponseAmino): MsgCreateListingResponse;
    toAmino(message: MsgCreateListingResponse): MsgCreateListingResponseAmino;
    fromAminoMsg(object: MsgCreateListingResponseAminoMsg): MsgCreateListingResponse;
    fromProtoMsg(message: MsgCreateListingResponseProtoMsg): MsgCreateListingResponse;
    toProto(message: MsgCreateListingResponse): Uint8Array;
    toProtoMsg(message: MsgCreateListingResponse): MsgCreateListingResponseProtoMsg;
};
export declare const MsgUpdateListing: {
    typeUrl: string;
    encode(message: MsgUpdateListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateListing;
    fromPartial(object: Partial<MsgUpdateListing>): MsgUpdateListing;
    fromAmino(object: MsgUpdateListingAmino): MsgUpdateListing;
    toAmino(message: MsgUpdateListing): MsgUpdateListingAmino;
    fromAminoMsg(object: MsgUpdateListingAminoMsg): MsgUpdateListing;
    fromProtoMsg(message: MsgUpdateListingProtoMsg): MsgUpdateListing;
    toProto(message: MsgUpdateListing): Uint8Array;
    toProtoMsg(message: MsgUpdateListing): MsgUpdateListingProtoMsg;
};
export declare const MsgUpdateListingResponse: {
    typeUrl: string;
    encode(message: MsgUpdateListingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateListingResponse;
    fromPartial(object: Partial<MsgUpdateListingResponse>): MsgUpdateListingResponse;
    fromAmino(object: MsgUpdateListingResponseAmino): MsgUpdateListingResponse;
    toAmino(message: MsgUpdateListingResponse): MsgUpdateListingResponseAmino;
    fromAminoMsg(object: MsgUpdateListingResponseAminoMsg): MsgUpdateListingResponse;
    fromProtoMsg(message: MsgUpdateListingResponseProtoMsg): MsgUpdateListingResponse;
    toProto(message: MsgUpdateListingResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateListingResponse): MsgUpdateListingResponseProtoMsg;
};
export declare const MsgDeleteListing: {
    typeUrl: string;
    encode(message: MsgDeleteListing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteListing;
    fromPartial(object: Partial<MsgDeleteListing>): MsgDeleteListing;
    fromAmino(object: MsgDeleteListingAmino): MsgDeleteListing;
    toAmino(message: MsgDeleteListing): MsgDeleteListingAmino;
    fromAminoMsg(object: MsgDeleteListingAminoMsg): MsgDeleteListing;
    fromProtoMsg(message: MsgDeleteListingProtoMsg): MsgDeleteListing;
    toProto(message: MsgDeleteListing): Uint8Array;
    toProtoMsg(message: MsgDeleteListing): MsgDeleteListingProtoMsg;
};
export declare const MsgDeleteListingResponse: {
    typeUrl: string;
    encode(_: MsgDeleteListingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteListingResponse;
    fromPartial(_: Partial<MsgDeleteListingResponse>): MsgDeleteListingResponse;
    fromAmino(_: MsgDeleteListingResponseAmino): MsgDeleteListingResponse;
    toAmino(_: MsgDeleteListingResponse): MsgDeleteListingResponseAmino;
    fromAminoMsg(object: MsgDeleteListingResponseAminoMsg): MsgDeleteListingResponse;
    fromProtoMsg(message: MsgDeleteListingResponseProtoMsg): MsgDeleteListingResponse;
    toProto(message: MsgDeleteListingResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteListingResponse): MsgDeleteListingResponseProtoMsg;
};
export declare const MsgSellNFT: {
    typeUrl: string;
    encode(message: MsgSellNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSellNFT;
    fromPartial(object: Partial<MsgSellNFT>): MsgSellNFT;
    fromAmino(object: MsgSellNFTAmino): MsgSellNFT;
    toAmino(message: MsgSellNFT): MsgSellNFTAmino;
    fromAminoMsg(object: MsgSellNFTAminoMsg): MsgSellNFT;
    fromProtoMsg(message: MsgSellNFTProtoMsg): MsgSellNFT;
    toProto(message: MsgSellNFT): Uint8Array;
    toProtoMsg(message: MsgSellNFT): MsgSellNFTProtoMsg;
};
export declare const MsgSellNFTResponse: {
    typeUrl: string;
    encode(_: MsgSellNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSellNFTResponse;
    fromPartial(_: Partial<MsgSellNFTResponse>): MsgSellNFTResponse;
    fromAmino(_: MsgSellNFTResponseAmino): MsgSellNFTResponse;
    toAmino(_: MsgSellNFTResponse): MsgSellNFTResponseAmino;
    fromAminoMsg(object: MsgSellNFTResponseAminoMsg): MsgSellNFTResponse;
    fromProtoMsg(message: MsgSellNFTResponseProtoMsg): MsgSellNFTResponse;
    toProto(message: MsgSellNFTResponse): Uint8Array;
    toProtoMsg(message: MsgSellNFTResponse): MsgSellNFTResponseProtoMsg;
};
export declare const MsgBuyNFT: {
    typeUrl: string;
    encode(message: MsgBuyNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBuyNFT;
    fromPartial(object: Partial<MsgBuyNFT>): MsgBuyNFT;
    fromAmino(object: MsgBuyNFTAmino): MsgBuyNFT;
    toAmino(message: MsgBuyNFT): MsgBuyNFTAmino;
    fromAminoMsg(object: MsgBuyNFTAminoMsg): MsgBuyNFT;
    fromProtoMsg(message: MsgBuyNFTProtoMsg): MsgBuyNFT;
    toProto(message: MsgBuyNFT): Uint8Array;
    toProtoMsg(message: MsgBuyNFT): MsgBuyNFTProtoMsg;
};
export declare const MsgBuyNFTResponse: {
    typeUrl: string;
    encode(_: MsgBuyNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBuyNFTResponse;
    fromPartial(_: Partial<MsgBuyNFTResponse>): MsgBuyNFTResponse;
    fromAmino(_: MsgBuyNFTResponseAmino): MsgBuyNFTResponse;
    toAmino(_: MsgBuyNFTResponse): MsgBuyNFTResponseAmino;
    fromAminoMsg(object: MsgBuyNFTResponseAminoMsg): MsgBuyNFTResponse;
    fromProtoMsg(message: MsgBuyNFTResponseProtoMsg): MsgBuyNFTResponse;
    toProto(message: MsgBuyNFTResponse): Uint8Array;
    toProtoMsg(message: MsgBuyNFTResponse): MsgBuyNFTResponseProtoMsg;
};
export declare const MsgCreateRoyaltyConfig: {
    typeUrl: string;
    encode(message: MsgCreateRoyaltyConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRoyaltyConfig;
    fromPartial(object: Partial<MsgCreateRoyaltyConfig>): MsgCreateRoyaltyConfig;
    fromAmino(object: MsgCreateRoyaltyConfigAmino): MsgCreateRoyaltyConfig;
    toAmino(message: MsgCreateRoyaltyConfig): MsgCreateRoyaltyConfigAmino;
    fromAminoMsg(object: MsgCreateRoyaltyConfigAminoMsg): MsgCreateRoyaltyConfig;
    fromProtoMsg(message: MsgCreateRoyaltyConfigProtoMsg): MsgCreateRoyaltyConfig;
    toProto(message: MsgCreateRoyaltyConfig): Uint8Array;
    toProtoMsg(message: MsgCreateRoyaltyConfig): MsgCreateRoyaltyConfigProtoMsg;
};
export declare const MsgCreateRoyaltyConfigResponse: {
    typeUrl: string;
    encode(message: MsgCreateRoyaltyConfigResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRoyaltyConfigResponse;
    fromPartial(object: Partial<MsgCreateRoyaltyConfigResponse>): MsgCreateRoyaltyConfigResponse;
    fromAmino(object: MsgCreateRoyaltyConfigResponseAmino): MsgCreateRoyaltyConfigResponse;
    toAmino(message: MsgCreateRoyaltyConfigResponse): MsgCreateRoyaltyConfigResponseAmino;
    fromAminoMsg(object: MsgCreateRoyaltyConfigResponseAminoMsg): MsgCreateRoyaltyConfigResponse;
    fromProtoMsg(message: MsgCreateRoyaltyConfigResponseProtoMsg): MsgCreateRoyaltyConfigResponse;
    toProto(message: MsgCreateRoyaltyConfigResponse): Uint8Array;
    toProtoMsg(message: MsgCreateRoyaltyConfigResponse): MsgCreateRoyaltyConfigResponseProtoMsg;
};
export declare const MsgUpdateRoyaltyConfig: {
    typeUrl: string;
    encode(message: MsgUpdateRoyaltyConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRoyaltyConfig;
    fromPartial(object: Partial<MsgUpdateRoyaltyConfig>): MsgUpdateRoyaltyConfig;
    fromAmino(object: MsgUpdateRoyaltyConfigAmino): MsgUpdateRoyaltyConfig;
    toAmino(message: MsgUpdateRoyaltyConfig): MsgUpdateRoyaltyConfigAmino;
    fromAminoMsg(object: MsgUpdateRoyaltyConfigAminoMsg): MsgUpdateRoyaltyConfig;
    fromProtoMsg(message: MsgUpdateRoyaltyConfigProtoMsg): MsgUpdateRoyaltyConfig;
    toProto(message: MsgUpdateRoyaltyConfig): Uint8Array;
    toProtoMsg(message: MsgUpdateRoyaltyConfig): MsgUpdateRoyaltyConfigProtoMsg;
};
export declare const MsgUpdateRoyaltyConfigResponse: {
    typeUrl: string;
    encode(message: MsgUpdateRoyaltyConfigResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRoyaltyConfigResponse;
    fromPartial(object: Partial<MsgUpdateRoyaltyConfigResponse>): MsgUpdateRoyaltyConfigResponse;
    fromAmino(object: MsgUpdateRoyaltyConfigResponseAmino): MsgUpdateRoyaltyConfigResponse;
    toAmino(message: MsgUpdateRoyaltyConfigResponse): MsgUpdateRoyaltyConfigResponseAmino;
    fromAminoMsg(object: MsgUpdateRoyaltyConfigResponseAminoMsg): MsgUpdateRoyaltyConfigResponse;
    fromProtoMsg(message: MsgUpdateRoyaltyConfigResponseProtoMsg): MsgUpdateRoyaltyConfigResponse;
    toProto(message: MsgUpdateRoyaltyConfigResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateRoyaltyConfigResponse): MsgUpdateRoyaltyConfigResponseProtoMsg;
};
export declare const MsgDeleteRoyaltyConfig: {
    typeUrl: string;
    encode(message: MsgDeleteRoyaltyConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteRoyaltyConfig;
    fromPartial(object: Partial<MsgDeleteRoyaltyConfig>): MsgDeleteRoyaltyConfig;
    fromAmino(object: MsgDeleteRoyaltyConfigAmino): MsgDeleteRoyaltyConfig;
    toAmino(message: MsgDeleteRoyaltyConfig): MsgDeleteRoyaltyConfigAmino;
    fromAminoMsg(object: MsgDeleteRoyaltyConfigAminoMsg): MsgDeleteRoyaltyConfig;
    fromProtoMsg(message: MsgDeleteRoyaltyConfigProtoMsg): MsgDeleteRoyaltyConfig;
    toProto(message: MsgDeleteRoyaltyConfig): Uint8Array;
    toProtoMsg(message: MsgDeleteRoyaltyConfig): MsgDeleteRoyaltyConfigProtoMsg;
};
export declare const MsgDeleteRoyaltyConfigResponse: {
    typeUrl: string;
    encode(_: MsgDeleteRoyaltyConfigResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteRoyaltyConfigResponse;
    fromPartial(_: Partial<MsgDeleteRoyaltyConfigResponse>): MsgDeleteRoyaltyConfigResponse;
    fromAmino(_: MsgDeleteRoyaltyConfigResponseAmino): MsgDeleteRoyaltyConfigResponse;
    toAmino(_: MsgDeleteRoyaltyConfigResponse): MsgDeleteRoyaltyConfigResponseAmino;
    fromAminoMsg(object: MsgDeleteRoyaltyConfigResponseAminoMsg): MsgDeleteRoyaltyConfigResponse;
    fromProtoMsg(message: MsgDeleteRoyaltyConfigResponseProtoMsg): MsgDeleteRoyaltyConfigResponse;
    toProto(message: MsgDeleteRoyaltyConfigResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteRoyaltyConfigResponse): MsgDeleteRoyaltyConfigResponseProtoMsg;
};
