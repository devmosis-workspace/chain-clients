import { ClassParentInput, ClassParentInputAmino, ClassParentInputSDKType, ClassInput, ClassInputAmino, ClassInputSDKType } from "./class_input";
import { NFTInput, NFTInputAmino, NFTInputSDKType } from "./nft_input";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { RoyaltyConfigInput, RoyaltyConfigInputAmino, RoyaltyConfigInputSDKType, RoyaltyConfig, RoyaltyConfigAmino, RoyaltyConfigSDKType } from "./royalty_config";
import { Class, ClassAmino, ClassSDKType, NFT, NFTAmino, NFTSDKType } from "../../../cosmos/nft/v1beta1/nft";
import { BlindBoxContent, BlindBoxContentAmino, BlindBoxContentSDKType } from "./blind_box_content";
import { Offer, OfferAmino, OfferSDKType } from "./offer";
import { Listing, ListingAmino, ListingSDKType } from "./listing";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
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
export interface MsgBurnNFTResponse {}
export interface MsgBurnNFTResponseProtoMsg {
  typeUrl: "/likechain.likenft.v1.MsgBurnNFTResponse";
  value: Uint8Array;
}
export interface MsgBurnNFTResponseAmino {}
export interface MsgBurnNFTResponseAminoMsg {
  type: "/likechain.likenft.v1.MsgBurnNFTResponse";
  value: MsgBurnNFTResponseAmino;
}
export interface MsgBurnNFTResponseSDKType {}
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
export interface MsgDeleteBlindBoxContentResponse {}
export interface MsgDeleteBlindBoxContentResponseProtoMsg {
  typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContentResponse";
  value: Uint8Array;
}
export interface MsgDeleteBlindBoxContentResponseAmino {}
export interface MsgDeleteBlindBoxContentResponseAminoMsg {
  type: "/likechain.likenft.v1.MsgDeleteBlindBoxContentResponse";
  value: MsgDeleteBlindBoxContentResponseAmino;
}
export interface MsgDeleteBlindBoxContentResponseSDKType {}
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
export interface MsgDeleteOfferResponse {}
export interface MsgDeleteOfferResponseProtoMsg {
  typeUrl: "/likechain.likenft.v1.MsgDeleteOfferResponse";
  value: Uint8Array;
}
export interface MsgDeleteOfferResponseAmino {}
export interface MsgDeleteOfferResponseAminoMsg {
  type: "/likechain.likenft.v1.MsgDeleteOfferResponse";
  value: MsgDeleteOfferResponseAmino;
}
export interface MsgDeleteOfferResponseSDKType {}
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
export interface MsgDeleteListingResponse {}
export interface MsgDeleteListingResponseProtoMsg {
  typeUrl: "/likechain.likenft.v1.MsgDeleteListingResponse";
  value: Uint8Array;
}
export interface MsgDeleteListingResponseAmino {}
export interface MsgDeleteListingResponseAminoMsg {
  type: "/likechain.likenft.v1.MsgDeleteListingResponse";
  value: MsgDeleteListingResponseAmino;
}
export interface MsgDeleteListingResponseSDKType {}
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
export interface MsgSellNFTResponse {}
export interface MsgSellNFTResponseProtoMsg {
  typeUrl: "/likechain.likenft.v1.MsgSellNFTResponse";
  value: Uint8Array;
}
export interface MsgSellNFTResponseAmino {}
export interface MsgSellNFTResponseAminoMsg {
  type: "/likechain.likenft.v1.MsgSellNFTResponse";
  value: MsgSellNFTResponseAmino;
}
export interface MsgSellNFTResponseSDKType {}
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
export interface MsgBuyNFTResponse {}
export interface MsgBuyNFTResponseProtoMsg {
  typeUrl: "/likechain.likenft.v1.MsgBuyNFTResponse";
  value: Uint8Array;
}
export interface MsgBuyNFTResponseAmino {}
export interface MsgBuyNFTResponseAminoMsg {
  type: "/likechain.likenft.v1.MsgBuyNFTResponse";
  value: MsgBuyNFTResponseAmino;
}
export interface MsgBuyNFTResponseSDKType {}
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
export interface MsgDeleteRoyaltyConfigResponse {}
export interface MsgDeleteRoyaltyConfigResponseProtoMsg {
  typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfigResponse";
  value: Uint8Array;
}
export interface MsgDeleteRoyaltyConfigResponseAmino {}
export interface MsgDeleteRoyaltyConfigResponseAminoMsg {
  type: "/likechain.likenft.v1.MsgDeleteRoyaltyConfigResponse";
  value: MsgDeleteRoyaltyConfigResponseAmino;
}
export interface MsgDeleteRoyaltyConfigResponseSDKType {}
function createBaseMsgNewClass(): MsgNewClass {
  return {
    creator: "",
    parent: ClassParentInput.fromPartial({}),
    input: ClassInput.fromPartial({})
  };
}
export const MsgNewClass = {
  typeUrl: "/likechain.likenft.v1.MsgNewClass",
  encode(message: MsgNewClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.parent !== undefined) {
      ClassParentInput.encode(message.parent, writer.uint32(18).fork()).ldelim();
    }
    if (message.input !== undefined) {
      ClassInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgNewClass {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      parent: isSet(object.parent) ? ClassParentInput.fromJSON(object.parent) : undefined,
      input: isSet(object.input) ? ClassInput.fromJSON(object.input) : undefined
    };
  },
  fromPartial(object: Partial<MsgNewClass>): MsgNewClass {
    const message = createBaseMsgNewClass();
    message.creator = object.creator ?? "";
    message.parent = object.parent !== undefined && object.parent !== null ? ClassParentInput.fromPartial(object.parent) : undefined;
    message.input = object.input !== undefined && object.input !== null ? ClassInput.fromPartial(object.input) : undefined;
    return message;
  },
  fromAmino(object: MsgNewClassAmino): MsgNewClass {
    return {
      creator: object.creator,
      parent: object?.parent ? ClassParentInput.fromAmino(object.parent) : undefined,
      input: object?.input ? ClassInput.fromAmino(object.input) : undefined
    };
  },
  toAmino(message: MsgNewClass): MsgNewClassAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.parent = message.parent ? ClassParentInput.toAmino(message.parent) : undefined;
    obj.input = message.input ? ClassInput.toAmino(message.input) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgNewClassAminoMsg): MsgNewClass {
    return MsgNewClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgNewClassProtoMsg): MsgNewClass {
    return MsgNewClass.decode(message.value);
  },
  toProto(message: MsgNewClass): Uint8Array {
    return MsgNewClass.encode(message).finish();
  },
  toProtoMsg(message: MsgNewClass): MsgNewClassProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgNewClass",
      value: MsgNewClass.encode(message).finish()
    };
  }
};
function createBaseMsgNewClassResponse(): MsgNewClassResponse {
  return {
    class: Class.fromPartial({})
  };
}
export const MsgNewClassResponse = {
  typeUrl: "/likechain.likenft.v1.MsgNewClassResponse",
  encode(message: MsgNewClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgNewClassResponse {
    return {
      class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
    };
  },
  fromPartial(object: Partial<MsgNewClassResponse>): MsgNewClassResponse {
    const message = createBaseMsgNewClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  },
  fromAmino(object: MsgNewClassResponseAmino): MsgNewClassResponse {
    return {
      class: object?.class ? Class.fromAmino(object.class) : undefined
    };
  },
  toAmino(message: MsgNewClassResponse): MsgNewClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? Class.toAmino(message.class) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgNewClassResponseAminoMsg): MsgNewClassResponse {
    return MsgNewClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgNewClassResponseProtoMsg): MsgNewClassResponse {
    return MsgNewClassResponse.decode(message.value);
  },
  toProto(message: MsgNewClassResponse): Uint8Array {
    return MsgNewClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgNewClassResponse): MsgNewClassResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgNewClassResponse",
      value: MsgNewClassResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClass(): MsgUpdateClass {
  return {
    creator: "",
    classId: "",
    input: ClassInput.fromPartial({})
  };
}
export const MsgUpdateClass = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateClass",
  encode(message: MsgUpdateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.input !== undefined) {
      ClassInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateClass {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      input: isSet(object.input) ? ClassInput.fromJSON(object.input) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateClass>): MsgUpdateClass {
    const message = createBaseMsgUpdateClass();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.input = object.input !== undefined && object.input !== null ? ClassInput.fromPartial(object.input) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateClassAmino): MsgUpdateClass {
    return {
      creator: object.creator,
      classId: object.class_id,
      input: object?.input ? ClassInput.fromAmino(object.input) : undefined
    };
  },
  toAmino(message: MsgUpdateClass): MsgUpdateClassAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.input = message.input ? ClassInput.toAmino(message.input) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassAminoMsg): MsgUpdateClass {
    return MsgUpdateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassProtoMsg): MsgUpdateClass {
    return MsgUpdateClass.decode(message.value);
  },
  toProto(message: MsgUpdateClass): Uint8Array {
    return MsgUpdateClass.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClass): MsgUpdateClassProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateClass",
      value: MsgUpdateClass.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClassResponse(): MsgUpdateClassResponse {
  return {
    class: Class.fromPartial({})
  };
}
export const MsgUpdateClassResponse = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateClassResponse",
  encode(message: MsgUpdateClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateClassResponse {
    return {
      class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateClassResponse>): MsgUpdateClassResponse {
    const message = createBaseMsgUpdateClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateClassResponseAmino): MsgUpdateClassResponse {
    return {
      class: object?.class ? Class.fromAmino(object.class) : undefined
    };
  },
  toAmino(message: MsgUpdateClassResponse): MsgUpdateClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? Class.toAmino(message.class) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClassResponseAminoMsg): MsgUpdateClassResponse {
    return MsgUpdateClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateClassResponseProtoMsg): MsgUpdateClassResponse {
    return MsgUpdateClassResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClassResponse): Uint8Array {
    return MsgUpdateClassResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClassResponse): MsgUpdateClassResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateClassResponse",
      value: MsgUpdateClassResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintNFT(): MsgMintNFT {
  return {
    creator: "",
    classId: "",
    id: "",
    input: undefined
  };
}
export const MsgMintNFT = {
  typeUrl: "/likechain.likenft.v1.MsgMintNFT",
  encode(message: MsgMintNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMintNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      input: isSet(object.input) ? NFTInput.fromJSON(object.input) : undefined
    };
  },
  fromPartial(object: Partial<MsgMintNFT>): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.input = object.input !== undefined && object.input !== null ? NFTInput.fromPartial(object.input) : undefined;
    return message;
  },
  fromAmino(object: MsgMintNFTAmino): MsgMintNFT {
    return {
      creator: object.creator,
      classId: object.class_id,
      id: object.id,
      input: object?.input ? NFTInput.fromAmino(object.input) : undefined
    };
  },
  toAmino(message: MsgMintNFT): MsgMintNFTAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.input = message.input ? NFTInput.toAmino(message.input) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintNFTAminoMsg): MsgMintNFT {
    return MsgMintNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintNFTProtoMsg): MsgMintNFT {
    return MsgMintNFT.decode(message.value);
  },
  toProto(message: MsgMintNFT): Uint8Array {
    return MsgMintNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgMintNFT): MsgMintNFTProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgMintNFT",
      value: MsgMintNFT.encode(message).finish()
    };
  }
};
function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {
    nft: NFT.fromPartial({})
  };
}
export const MsgMintNFTResponse = {
  typeUrl: "/likechain.likenft.v1.MsgMintNFTResponse",
  encode(message: MsgMintNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMintNFTResponse {
    return {
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined
    };
  },
  fromPartial(object: Partial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
    return message;
  },
  fromAmino(object: MsgMintNFTResponseAmino): MsgMintNFTResponse {
    return {
      nft: object?.nft ? NFT.fromAmino(object.nft) : undefined
    };
  },
  toAmino(message: MsgMintNFTResponse): MsgMintNFTResponseAmino {
    const obj: any = {};
    obj.nft = message.nft ? NFT.toAmino(message.nft) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintNFTResponseAminoMsg): MsgMintNFTResponse {
    return MsgMintNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintNFTResponseProtoMsg): MsgMintNFTResponse {
    return MsgMintNFTResponse.decode(message.value);
  },
  toProto(message: MsgMintNFTResponse): Uint8Array {
    return MsgMintNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintNFTResponse): MsgMintNFTResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgMintNFTResponse",
      value: MsgMintNFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnNFT(): MsgBurnNFT {
  return {
    creator: "",
    classId: "",
    nftId: ""
  };
}
export const MsgBurnNFT = {
  typeUrl: "/likechain.likenft.v1.MsgBurnNFT",
  encode(message: MsgBurnNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): MsgBurnNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<MsgBurnNFT>): MsgBurnNFT {
    const message = createBaseMsgBurnNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  },
  fromAmino(object: MsgBurnNFTAmino): MsgBurnNFT {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id
    };
  },
  toAmino(message: MsgBurnNFT): MsgBurnNFTAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: MsgBurnNFTAminoMsg): MsgBurnNFT {
    return MsgBurnNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnNFTProtoMsg): MsgBurnNFT {
    return MsgBurnNFT.decode(message.value);
  },
  toProto(message: MsgBurnNFT): Uint8Array {
    return MsgBurnNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnNFT): MsgBurnNFTProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgBurnNFT",
      value: MsgBurnNFT.encode(message).finish()
    };
  }
};
function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}
export const MsgBurnNFTResponse = {
  typeUrl: "/likechain.likenft.v1.MsgBurnNFTResponse",
  encode(_: MsgBurnNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  },
  fromAmino(_: MsgBurnNFTResponseAmino): MsgBurnNFTResponse {
    return {};
  },
  toAmino(_: MsgBurnNFTResponse): MsgBurnNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnNFTResponseAminoMsg): MsgBurnNFTResponse {
    return MsgBurnNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnNFTResponseProtoMsg): MsgBurnNFTResponse {
    return MsgBurnNFTResponse.decode(message.value);
  },
  toProto(message: MsgBurnNFTResponse): Uint8Array {
    return MsgBurnNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnNFTResponse): MsgBurnNFTResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgBurnNFTResponse",
      value: MsgBurnNFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBlindBoxContent(): MsgCreateBlindBoxContent {
  return {
    creator: "",
    classId: "",
    id: "",
    input: NFTInput.fromPartial({})
  };
}
export const MsgCreateBlindBoxContent = {
  typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContent",
  encode(message: MsgCreateBlindBoxContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBlindBoxContent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      input: isSet(object.input) ? NFTInput.fromJSON(object.input) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateBlindBoxContent>): MsgCreateBlindBoxContent {
    const message = createBaseMsgCreateBlindBoxContent();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.input = object.input !== undefined && object.input !== null ? NFTInput.fromPartial(object.input) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateBlindBoxContentAmino): MsgCreateBlindBoxContent {
    return {
      creator: object.creator,
      classId: object.class_id,
      id: object.id,
      input: object?.input ? NFTInput.fromAmino(object.input) : undefined
    };
  },
  toAmino(message: MsgCreateBlindBoxContent): MsgCreateBlindBoxContentAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.input = message.input ? NFTInput.toAmino(message.input) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBlindBoxContentAminoMsg): MsgCreateBlindBoxContent {
    return MsgCreateBlindBoxContent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBlindBoxContentProtoMsg): MsgCreateBlindBoxContent {
    return MsgCreateBlindBoxContent.decode(message.value);
  },
  toProto(message: MsgCreateBlindBoxContent): Uint8Array {
    return MsgCreateBlindBoxContent.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBlindBoxContent): MsgCreateBlindBoxContentProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContent",
      value: MsgCreateBlindBoxContent.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBlindBoxContentResponse(): MsgCreateBlindBoxContentResponse {
  return {
    blindBoxContent: BlindBoxContent.fromPartial({})
  };
}
export const MsgCreateBlindBoxContentResponse = {
  typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContentResponse",
  encode(message: MsgCreateBlindBoxContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(message.blindBoxContent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBlindBoxContentResponse {
    return {
      blindBoxContent: isSet(object.blindBoxContent) ? BlindBoxContent.fromJSON(object.blindBoxContent) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateBlindBoxContentResponse>): MsgCreateBlindBoxContentResponse {
    const message = createBaseMsgCreateBlindBoxContentResponse();
    message.blindBoxContent = object.blindBoxContent !== undefined && object.blindBoxContent !== null ? BlindBoxContent.fromPartial(object.blindBoxContent) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateBlindBoxContentResponseAmino): MsgCreateBlindBoxContentResponse {
    return {
      blindBoxContent: object?.blind_box_content ? BlindBoxContent.fromAmino(object.blind_box_content) : undefined
    };
  },
  toAmino(message: MsgCreateBlindBoxContentResponse): MsgCreateBlindBoxContentResponseAmino {
    const obj: any = {};
    obj.blind_box_content = message.blindBoxContent ? BlindBoxContent.toAmino(message.blindBoxContent) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBlindBoxContentResponseAminoMsg): MsgCreateBlindBoxContentResponse {
    return MsgCreateBlindBoxContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBlindBoxContentResponseProtoMsg): MsgCreateBlindBoxContentResponse {
    return MsgCreateBlindBoxContentResponse.decode(message.value);
  },
  toProto(message: MsgCreateBlindBoxContentResponse): Uint8Array {
    return MsgCreateBlindBoxContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBlindBoxContentResponse): MsgCreateBlindBoxContentResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgCreateBlindBoxContentResponse",
      value: MsgCreateBlindBoxContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBlindBoxContent(): MsgUpdateBlindBoxContent {
  return {
    creator: "",
    classId: "",
    id: "",
    input: NFTInput.fromPartial({})
  };
}
export const MsgUpdateBlindBoxContent = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContent",
  encode(message: MsgUpdateBlindBoxContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateBlindBoxContent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      input: isSet(object.input) ? NFTInput.fromJSON(object.input) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateBlindBoxContent>): MsgUpdateBlindBoxContent {
    const message = createBaseMsgUpdateBlindBoxContent();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.input = object.input !== undefined && object.input !== null ? NFTInput.fromPartial(object.input) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateBlindBoxContentAmino): MsgUpdateBlindBoxContent {
    return {
      creator: object.creator,
      classId: object.class_id,
      id: object.id,
      input: object?.input ? NFTInput.fromAmino(object.input) : undefined
    };
  },
  toAmino(message: MsgUpdateBlindBoxContent): MsgUpdateBlindBoxContentAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.input = message.input ? NFTInput.toAmino(message.input) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBlindBoxContentAminoMsg): MsgUpdateBlindBoxContent {
    return MsgUpdateBlindBoxContent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBlindBoxContentProtoMsg): MsgUpdateBlindBoxContent {
    return MsgUpdateBlindBoxContent.decode(message.value);
  },
  toProto(message: MsgUpdateBlindBoxContent): Uint8Array {
    return MsgUpdateBlindBoxContent.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBlindBoxContent): MsgUpdateBlindBoxContentProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContent",
      value: MsgUpdateBlindBoxContent.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBlindBoxContentResponse(): MsgUpdateBlindBoxContentResponse {
  return {
    blindBoxContent: BlindBoxContent.fromPartial({})
  };
}
export const MsgUpdateBlindBoxContentResponse = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContentResponse",
  encode(message: MsgUpdateBlindBoxContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(message.blindBoxContent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateBlindBoxContentResponse {
    return {
      blindBoxContent: isSet(object.blindBoxContent) ? BlindBoxContent.fromJSON(object.blindBoxContent) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateBlindBoxContentResponse>): MsgUpdateBlindBoxContentResponse {
    const message = createBaseMsgUpdateBlindBoxContentResponse();
    message.blindBoxContent = object.blindBoxContent !== undefined && object.blindBoxContent !== null ? BlindBoxContent.fromPartial(object.blindBoxContent) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateBlindBoxContentResponseAmino): MsgUpdateBlindBoxContentResponse {
    return {
      blindBoxContent: object?.blind_box_content ? BlindBoxContent.fromAmino(object.blind_box_content) : undefined
    };
  },
  toAmino(message: MsgUpdateBlindBoxContentResponse): MsgUpdateBlindBoxContentResponseAmino {
    const obj: any = {};
    obj.blind_box_content = message.blindBoxContent ? BlindBoxContent.toAmino(message.blindBoxContent) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBlindBoxContentResponseAminoMsg): MsgUpdateBlindBoxContentResponse {
    return MsgUpdateBlindBoxContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBlindBoxContentResponseProtoMsg): MsgUpdateBlindBoxContentResponse {
    return MsgUpdateBlindBoxContentResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBlindBoxContentResponse): Uint8Array {
    return MsgUpdateBlindBoxContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBlindBoxContentResponse): MsgUpdateBlindBoxContentResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateBlindBoxContentResponse",
      value: MsgUpdateBlindBoxContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBlindBoxContent(): MsgDeleteBlindBoxContent {
  return {
    creator: "",
    classId: "",
    id: ""
  };
}
export const MsgDeleteBlindBoxContent = {
  typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContent",
  encode(message: MsgDeleteBlindBoxContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteBlindBoxContent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteBlindBoxContent>): MsgDeleteBlindBoxContent {
    const message = createBaseMsgDeleteBlindBoxContent();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteBlindBoxContentAmino): MsgDeleteBlindBoxContent {
    return {
      creator: object.creator,
      classId: object.class_id,
      id: object.id
    };
  },
  toAmino(message: MsgDeleteBlindBoxContent): MsgDeleteBlindBoxContentAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBlindBoxContentAminoMsg): MsgDeleteBlindBoxContent {
    return MsgDeleteBlindBoxContent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBlindBoxContentProtoMsg): MsgDeleteBlindBoxContent {
    return MsgDeleteBlindBoxContent.decode(message.value);
  },
  toProto(message: MsgDeleteBlindBoxContent): Uint8Array {
    return MsgDeleteBlindBoxContent.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBlindBoxContent): MsgDeleteBlindBoxContentProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContent",
      value: MsgDeleteBlindBoxContent.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBlindBoxContentResponse(): MsgDeleteBlindBoxContentResponse {
  return {};
}
export const MsgDeleteBlindBoxContentResponse = {
  typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContentResponse",
  encode(_: MsgDeleteBlindBoxContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteBlindBoxContentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteBlindBoxContentResponse>): MsgDeleteBlindBoxContentResponse {
    const message = createBaseMsgDeleteBlindBoxContentResponse();
    return message;
  },
  fromAmino(_: MsgDeleteBlindBoxContentResponseAmino): MsgDeleteBlindBoxContentResponse {
    return {};
  },
  toAmino(_: MsgDeleteBlindBoxContentResponse): MsgDeleteBlindBoxContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBlindBoxContentResponseAminoMsg): MsgDeleteBlindBoxContentResponse {
    return MsgDeleteBlindBoxContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBlindBoxContentResponseProtoMsg): MsgDeleteBlindBoxContentResponse {
    return MsgDeleteBlindBoxContentResponse.decode(message.value);
  },
  toProto(message: MsgDeleteBlindBoxContentResponse): Uint8Array {
    return MsgDeleteBlindBoxContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBlindBoxContentResponse): MsgDeleteBlindBoxContentResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgDeleteBlindBoxContentResponse",
      value: MsgDeleteBlindBoxContentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOffer(): MsgCreateOffer {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: BigInt(0),
    expiration: Timestamp.fromPartial({})
  };
}
export const MsgCreateOffer = {
  typeUrl: "/likechain.likenft.v1.MsgCreateOffer",
  encode(message: MsgCreateOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateOffer>): MsgCreateOffer {
    const message = createBaseMsgCreateOffer();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateOfferAmino): MsgCreateOffer {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id,
      price: BigInt(object.price),
      expiration: object.expiration
    };
  },
  toAmino(message: MsgCreateOffer): MsgCreateOfferAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.expiration = message.expiration;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOfferAminoMsg): MsgCreateOffer {
    return MsgCreateOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOfferProtoMsg): MsgCreateOffer {
    return MsgCreateOffer.decode(message.value);
  },
  toProto(message: MsgCreateOffer): Uint8Array {
    return MsgCreateOffer.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOffer): MsgCreateOfferProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgCreateOffer",
      value: MsgCreateOffer.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOfferResponse(): MsgCreateOfferResponse {
  return {
    offer: Offer.fromPartial({})
  };
}
export const MsgCreateOfferResponse = {
  typeUrl: "/likechain.likenft.v1.MsgCreateOfferResponse",
  encode(message: MsgCreateOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateOfferResponse {
    return {
      offer: isSet(object.offer) ? Offer.fromJSON(object.offer) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateOfferResponse>): MsgCreateOfferResponse {
    const message = createBaseMsgCreateOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? Offer.fromPartial(object.offer) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateOfferResponseAmino): MsgCreateOfferResponse {
    return {
      offer: object?.offer ? Offer.fromAmino(object.offer) : undefined
    };
  },
  toAmino(message: MsgCreateOfferResponse): MsgCreateOfferResponseAmino {
    const obj: any = {};
    obj.offer = message.offer ? Offer.toAmino(message.offer) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOfferResponseAminoMsg): MsgCreateOfferResponse {
    return MsgCreateOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOfferResponseProtoMsg): MsgCreateOfferResponse {
    return MsgCreateOfferResponse.decode(message.value);
  },
  toProto(message: MsgCreateOfferResponse): Uint8Array {
    return MsgCreateOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOfferResponse): MsgCreateOfferResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgCreateOfferResponse",
      value: MsgCreateOfferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOffer(): MsgUpdateOffer {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: BigInt(0),
    expiration: Timestamp.fromPartial({})
  };
}
export const MsgUpdateOffer = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateOffer",
  encode(message: MsgUpdateOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateOffer>): MsgUpdateOffer {
    const message = createBaseMsgUpdateOffer();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOfferAmino): MsgUpdateOffer {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id,
      price: BigInt(object.price),
      expiration: object.expiration
    };
  },
  toAmino(message: MsgUpdateOffer): MsgUpdateOfferAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.expiration = message.expiration;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOfferAminoMsg): MsgUpdateOffer {
    return MsgUpdateOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOfferProtoMsg): MsgUpdateOffer {
    return MsgUpdateOffer.decode(message.value);
  },
  toProto(message: MsgUpdateOffer): Uint8Array {
    return MsgUpdateOffer.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOffer): MsgUpdateOfferProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateOffer",
      value: MsgUpdateOffer.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOfferResponse(): MsgUpdateOfferResponse {
  return {
    offer: Offer.fromPartial({})
  };
}
export const MsgUpdateOfferResponse = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateOfferResponse",
  encode(message: MsgUpdateOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateOfferResponse {
    return {
      offer: isSet(object.offer) ? Offer.fromJSON(object.offer) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateOfferResponse>): MsgUpdateOfferResponse {
    const message = createBaseMsgUpdateOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? Offer.fromPartial(object.offer) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOfferResponseAmino): MsgUpdateOfferResponse {
    return {
      offer: object?.offer ? Offer.fromAmino(object.offer) : undefined
    };
  },
  toAmino(message: MsgUpdateOfferResponse): MsgUpdateOfferResponseAmino {
    const obj: any = {};
    obj.offer = message.offer ? Offer.toAmino(message.offer) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOfferResponseAminoMsg): MsgUpdateOfferResponse {
    return MsgUpdateOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOfferResponseProtoMsg): MsgUpdateOfferResponse {
    return MsgUpdateOfferResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOfferResponse): Uint8Array {
    return MsgUpdateOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOfferResponse): MsgUpdateOfferResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateOfferResponse",
      value: MsgUpdateOfferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOffer(): MsgDeleteOffer {
  return {
    creator: "",
    classId: "",
    nftId: ""
  };
}
export const MsgDeleteOffer = {
  typeUrl: "/likechain.likenft.v1.MsgDeleteOffer",
  encode(message: MsgDeleteOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteOffer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteOffer>): MsgDeleteOffer {
    const message = createBaseMsgDeleteOffer();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteOfferAmino): MsgDeleteOffer {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id
    };
  },
  toAmino(message: MsgDeleteOffer): MsgDeleteOfferAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOfferAminoMsg): MsgDeleteOffer {
    return MsgDeleteOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteOfferProtoMsg): MsgDeleteOffer {
    return MsgDeleteOffer.decode(message.value);
  },
  toProto(message: MsgDeleteOffer): Uint8Array {
    return MsgDeleteOffer.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOffer): MsgDeleteOfferProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgDeleteOffer",
      value: MsgDeleteOffer.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOfferResponse(): MsgDeleteOfferResponse {
  return {};
}
export const MsgDeleteOfferResponse = {
  typeUrl: "/likechain.likenft.v1.MsgDeleteOfferResponse",
  encode(_: MsgDeleteOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteOfferResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteOfferResponse>): MsgDeleteOfferResponse {
    const message = createBaseMsgDeleteOfferResponse();
    return message;
  },
  fromAmino(_: MsgDeleteOfferResponseAmino): MsgDeleteOfferResponse {
    return {};
  },
  toAmino(_: MsgDeleteOfferResponse): MsgDeleteOfferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOfferResponseAminoMsg): MsgDeleteOfferResponse {
    return MsgDeleteOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteOfferResponseProtoMsg): MsgDeleteOfferResponse {
    return MsgDeleteOfferResponse.decode(message.value);
  },
  toProto(message: MsgDeleteOfferResponse): Uint8Array {
    return MsgDeleteOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOfferResponse): MsgDeleteOfferResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgDeleteOfferResponse",
      value: MsgDeleteOfferResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateListing(): MsgCreateListing {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: BigInt(0),
    expiration: Timestamp.fromPartial({}),
    fullPayToRoyalty: false
  };
}
export const MsgCreateListing = {
  typeUrl: "/likechain.likenft.v1.MsgCreateListing",
  encode(message: MsgCreateListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    if (message.fullPayToRoyalty === true) {
      writer.uint32(48).bool(message.fullPayToRoyalty);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateListing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<MsgCreateListing>): MsgCreateListing {
    const message = createBaseMsgCreateListing();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  },
  fromAmino(object: MsgCreateListingAmino): MsgCreateListing {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id,
      price: BigInt(object.price),
      expiration: object.expiration,
      fullPayToRoyalty: object.full_pay_to_royalty
    };
  },
  toAmino(message: MsgCreateListing): MsgCreateListingAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.expiration = message.expiration;
    obj.full_pay_to_royalty = message.fullPayToRoyalty;
    return obj;
  },
  fromAminoMsg(object: MsgCreateListingAminoMsg): MsgCreateListing {
    return MsgCreateListing.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateListingProtoMsg): MsgCreateListing {
    return MsgCreateListing.decode(message.value);
  },
  toProto(message: MsgCreateListing): Uint8Array {
    return MsgCreateListing.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateListing): MsgCreateListingProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgCreateListing",
      value: MsgCreateListing.encode(message).finish()
    };
  }
};
function createBaseMsgCreateListingResponse(): MsgCreateListingResponse {
  return {
    listing: Listing.fromPartial({})
  };
}
export const MsgCreateListingResponse = {
  typeUrl: "/likechain.likenft.v1.MsgCreateListingResponse",
  encode(message: MsgCreateListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateListingResponse {
    return {
      listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateListingResponse>): MsgCreateListingResponse {
    const message = createBaseMsgCreateListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateListingResponseAmino): MsgCreateListingResponse {
    return {
      listing: object?.listing ? Listing.fromAmino(object.listing) : undefined
    };
  },
  toAmino(message: MsgCreateListingResponse): MsgCreateListingResponseAmino {
    const obj: any = {};
    obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateListingResponseAminoMsg): MsgCreateListingResponse {
    return MsgCreateListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateListingResponseProtoMsg): MsgCreateListingResponse {
    return MsgCreateListingResponse.decode(message.value);
  },
  toProto(message: MsgCreateListingResponse): Uint8Array {
    return MsgCreateListingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateListingResponse): MsgCreateListingResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgCreateListingResponse",
      value: MsgCreateListingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateListing(): MsgUpdateListing {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: BigInt(0),
    expiration: Timestamp.fromPartial({}),
    fullPayToRoyalty: false
  };
}
export const MsgUpdateListing = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateListing",
  encode(message: MsgUpdateListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    if (message.fullPayToRoyalty === true) {
      writer.uint32(48).bool(message.fullPayToRoyalty);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateListing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<MsgUpdateListing>): MsgUpdateListing {
    const message = createBaseMsgUpdateListing();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateListingAmino): MsgUpdateListing {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id,
      price: BigInt(object.price),
      expiration: object.expiration,
      fullPayToRoyalty: object.full_pay_to_royalty
    };
  },
  toAmino(message: MsgUpdateListing): MsgUpdateListingAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.expiration = message.expiration;
    obj.full_pay_to_royalty = message.fullPayToRoyalty;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateListingAminoMsg): MsgUpdateListing {
    return MsgUpdateListing.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateListingProtoMsg): MsgUpdateListing {
    return MsgUpdateListing.decode(message.value);
  },
  toProto(message: MsgUpdateListing): Uint8Array {
    return MsgUpdateListing.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateListing): MsgUpdateListingProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateListing",
      value: MsgUpdateListing.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateListingResponse(): MsgUpdateListingResponse {
  return {
    listing: Listing.fromPartial({})
  };
}
export const MsgUpdateListingResponse = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateListingResponse",
  encode(message: MsgUpdateListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateListingResponse {
    return {
      listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateListingResponse>): MsgUpdateListingResponse {
    const message = createBaseMsgUpdateListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateListingResponseAmino): MsgUpdateListingResponse {
    return {
      listing: object?.listing ? Listing.fromAmino(object.listing) : undefined
    };
  },
  toAmino(message: MsgUpdateListingResponse): MsgUpdateListingResponseAmino {
    const obj: any = {};
    obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateListingResponseAminoMsg): MsgUpdateListingResponse {
    return MsgUpdateListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateListingResponseProtoMsg): MsgUpdateListingResponse {
    return MsgUpdateListingResponse.decode(message.value);
  },
  toProto(message: MsgUpdateListingResponse): Uint8Array {
    return MsgUpdateListingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateListingResponse): MsgUpdateListingResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateListingResponse",
      value: MsgUpdateListingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteListing(): MsgDeleteListing {
  return {
    creator: "",
    classId: "",
    nftId: ""
  };
}
export const MsgDeleteListing = {
  typeUrl: "/likechain.likenft.v1.MsgDeleteListing",
  encode(message: MsgDeleteListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteListing {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteListing>): MsgDeleteListing {
    const message = createBaseMsgDeleteListing();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteListingAmino): MsgDeleteListing {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id
    };
  },
  toAmino(message: MsgDeleteListing): MsgDeleteListingAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteListingAminoMsg): MsgDeleteListing {
    return MsgDeleteListing.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteListingProtoMsg): MsgDeleteListing {
    return MsgDeleteListing.decode(message.value);
  },
  toProto(message: MsgDeleteListing): Uint8Array {
    return MsgDeleteListing.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteListing): MsgDeleteListingProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgDeleteListing",
      value: MsgDeleteListing.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteListingResponse(): MsgDeleteListingResponse {
  return {};
}
export const MsgDeleteListingResponse = {
  typeUrl: "/likechain.likenft.v1.MsgDeleteListingResponse",
  encode(_: MsgDeleteListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteListingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteListingResponse>): MsgDeleteListingResponse {
    const message = createBaseMsgDeleteListingResponse();
    return message;
  },
  fromAmino(_: MsgDeleteListingResponseAmino): MsgDeleteListingResponse {
    return {};
  },
  toAmino(_: MsgDeleteListingResponse): MsgDeleteListingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteListingResponseAminoMsg): MsgDeleteListingResponse {
    return MsgDeleteListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteListingResponseProtoMsg): MsgDeleteListingResponse {
    return MsgDeleteListingResponse.decode(message.value);
  },
  toProto(message: MsgDeleteListingResponse): Uint8Array {
    return MsgDeleteListingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteListingResponse): MsgDeleteListingResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgDeleteListingResponse",
      value: MsgDeleteListingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSellNFT(): MsgSellNFT {
  return {
    creator: "",
    classId: "",
    nftId: "",
    buyer: "",
    price: BigInt(0),
    fullPayToRoyalty: false
  };
}
export const MsgSellNFT = {
  typeUrl: "/likechain.likenft.v1.MsgSellNFT",
  encode(message: MsgSellNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(40).uint64(message.price);
    }
    if (message.fullPayToRoyalty === true) {
      writer.uint32(48).bool(message.fullPayToRoyalty);
    }
    return writer;
  },
  fromJSON(object: any): MsgSellNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<MsgSellNFT>): MsgSellNFT {
    const message = createBaseMsgSellNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  },
  fromAmino(object: MsgSellNFTAmino): MsgSellNFT {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id,
      buyer: object.buyer,
      price: BigInt(object.price),
      fullPayToRoyalty: object.full_pay_to_royalty
    };
  },
  toAmino(message: MsgSellNFT): MsgSellNFTAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.buyer = message.buyer;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.full_pay_to_royalty = message.fullPayToRoyalty;
    return obj;
  },
  fromAminoMsg(object: MsgSellNFTAminoMsg): MsgSellNFT {
    return MsgSellNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellNFTProtoMsg): MsgSellNFT {
    return MsgSellNFT.decode(message.value);
  },
  toProto(message: MsgSellNFT): Uint8Array {
    return MsgSellNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgSellNFT): MsgSellNFTProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgSellNFT",
      value: MsgSellNFT.encode(message).finish()
    };
  }
};
function createBaseMsgSellNFTResponse(): MsgSellNFTResponse {
  return {};
}
export const MsgSellNFTResponse = {
  typeUrl: "/likechain.likenft.v1.MsgSellNFTResponse",
  encode(_: MsgSellNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSellNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSellNFTResponse>): MsgSellNFTResponse {
    const message = createBaseMsgSellNFTResponse();
    return message;
  },
  fromAmino(_: MsgSellNFTResponseAmino): MsgSellNFTResponse {
    return {};
  },
  toAmino(_: MsgSellNFTResponse): MsgSellNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSellNFTResponseAminoMsg): MsgSellNFTResponse {
    return MsgSellNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellNFTResponseProtoMsg): MsgSellNFTResponse {
    return MsgSellNFTResponse.decode(message.value);
  },
  toProto(message: MsgSellNFTResponse): Uint8Array {
    return MsgSellNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSellNFTResponse): MsgSellNFTResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgSellNFTResponse",
      value: MsgSellNFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBuyNFT(): MsgBuyNFT {
  return {
    creator: "",
    classId: "",
    nftId: "",
    seller: "",
    price: BigInt(0)
  };
}
export const MsgBuyNFT = {
  typeUrl: "/likechain.likenft.v1.MsgBuyNFT",
  encode(message: MsgBuyNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(40).uint64(message.price);
    }
    return writer;
  },
  fromJSON(object: any): MsgBuyNFT {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgBuyNFT>): MsgBuyNFT {
    const message = createBaseMsgBuyNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBuyNFTAmino): MsgBuyNFT {
    return {
      creator: object.creator,
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller,
      price: BigInt(object.price)
    };
  },
  toAmino(message: MsgBuyNFT): MsgBuyNFTAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    obj.price = message.price ? message.price.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBuyNFTAminoMsg): MsgBuyNFT {
    return MsgBuyNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyNFTProtoMsg): MsgBuyNFT {
    return MsgBuyNFT.decode(message.value);
  },
  toProto(message: MsgBuyNFT): Uint8Array {
    return MsgBuyNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyNFT): MsgBuyNFTProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgBuyNFT",
      value: MsgBuyNFT.encode(message).finish()
    };
  }
};
function createBaseMsgBuyNFTResponse(): MsgBuyNFTResponse {
  return {};
}
export const MsgBuyNFTResponse = {
  typeUrl: "/likechain.likenft.v1.MsgBuyNFTResponse",
  encode(_: MsgBuyNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBuyNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBuyNFTResponse>): MsgBuyNFTResponse {
    const message = createBaseMsgBuyNFTResponse();
    return message;
  },
  fromAmino(_: MsgBuyNFTResponseAmino): MsgBuyNFTResponse {
    return {};
  },
  toAmino(_: MsgBuyNFTResponse): MsgBuyNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBuyNFTResponseAminoMsg): MsgBuyNFTResponse {
    return MsgBuyNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyNFTResponseProtoMsg): MsgBuyNFTResponse {
    return MsgBuyNFTResponse.decode(message.value);
  },
  toProto(message: MsgBuyNFTResponse): Uint8Array {
    return MsgBuyNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyNFTResponse): MsgBuyNFTResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgBuyNFTResponse",
      value: MsgBuyNFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRoyaltyConfig(): MsgCreateRoyaltyConfig {
  return {
    creator: "",
    classId: "",
    royaltyConfig: RoyaltyConfigInput.fromPartial({})
  };
}
export const MsgCreateRoyaltyConfig = {
  typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfig",
  encode(message: MsgCreateRoyaltyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfigInput.encode(message.royaltyConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRoyaltyConfig {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfigInput.fromJSON(object.royaltyConfig) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateRoyaltyConfig>): MsgCreateRoyaltyConfig {
    const message = createBaseMsgCreateRoyaltyConfig();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfigInput.fromPartial(object.royaltyConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateRoyaltyConfigAmino): MsgCreateRoyaltyConfig {
    return {
      creator: object.creator,
      classId: object.class_id,
      royaltyConfig: object?.royalty_config ? RoyaltyConfigInput.fromAmino(object.royalty_config) : undefined
    };
  },
  toAmino(message: MsgCreateRoyaltyConfig): MsgCreateRoyaltyConfigAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.royalty_config = message.royaltyConfig ? RoyaltyConfigInput.toAmino(message.royaltyConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRoyaltyConfigAminoMsg): MsgCreateRoyaltyConfig {
    return MsgCreateRoyaltyConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRoyaltyConfigProtoMsg): MsgCreateRoyaltyConfig {
    return MsgCreateRoyaltyConfig.decode(message.value);
  },
  toProto(message: MsgCreateRoyaltyConfig): Uint8Array {
    return MsgCreateRoyaltyConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRoyaltyConfig): MsgCreateRoyaltyConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfig",
      value: MsgCreateRoyaltyConfig.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRoyaltyConfigResponse(): MsgCreateRoyaltyConfigResponse {
  return {
    royaltyConfig: RoyaltyConfig.fromPartial({})
  };
}
export const MsgCreateRoyaltyConfigResponse = {
  typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfigResponse",
  encode(message: MsgCreateRoyaltyConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRoyaltyConfigResponse {
    return {
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateRoyaltyConfigResponse>): MsgCreateRoyaltyConfigResponse {
    const message = createBaseMsgCreateRoyaltyConfigResponse();
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateRoyaltyConfigResponseAmino): MsgCreateRoyaltyConfigResponse {
    return {
      royaltyConfig: object?.royalty_config ? RoyaltyConfig.fromAmino(object.royalty_config) : undefined
    };
  },
  toAmino(message: MsgCreateRoyaltyConfigResponse): MsgCreateRoyaltyConfigResponseAmino {
    const obj: any = {};
    obj.royalty_config = message.royaltyConfig ? RoyaltyConfig.toAmino(message.royaltyConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRoyaltyConfigResponseAminoMsg): MsgCreateRoyaltyConfigResponse {
    return MsgCreateRoyaltyConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRoyaltyConfigResponseProtoMsg): MsgCreateRoyaltyConfigResponse {
    return MsgCreateRoyaltyConfigResponse.decode(message.value);
  },
  toProto(message: MsgCreateRoyaltyConfigResponse): Uint8Array {
    return MsgCreateRoyaltyConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRoyaltyConfigResponse): MsgCreateRoyaltyConfigResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgCreateRoyaltyConfigResponse",
      value: MsgCreateRoyaltyConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRoyaltyConfig(): MsgUpdateRoyaltyConfig {
  return {
    creator: "",
    classId: "",
    royaltyConfig: RoyaltyConfigInput.fromPartial({})
  };
}
export const MsgUpdateRoyaltyConfig = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig",
  encode(message: MsgUpdateRoyaltyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfigInput.encode(message.royaltyConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRoyaltyConfig {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfigInput.fromJSON(object.royaltyConfig) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateRoyaltyConfig>): MsgUpdateRoyaltyConfig {
    const message = createBaseMsgUpdateRoyaltyConfig();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfigInput.fromPartial(object.royaltyConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateRoyaltyConfigAmino): MsgUpdateRoyaltyConfig {
    return {
      creator: object.creator,
      classId: object.class_id,
      royaltyConfig: object?.royalty_config ? RoyaltyConfigInput.fromAmino(object.royalty_config) : undefined
    };
  },
  toAmino(message: MsgUpdateRoyaltyConfig): MsgUpdateRoyaltyConfigAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    obj.royalty_config = message.royaltyConfig ? RoyaltyConfigInput.toAmino(message.royaltyConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRoyaltyConfigAminoMsg): MsgUpdateRoyaltyConfig {
    return MsgUpdateRoyaltyConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRoyaltyConfigProtoMsg): MsgUpdateRoyaltyConfig {
    return MsgUpdateRoyaltyConfig.decode(message.value);
  },
  toProto(message: MsgUpdateRoyaltyConfig): Uint8Array {
    return MsgUpdateRoyaltyConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRoyaltyConfig): MsgUpdateRoyaltyConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig",
      value: MsgUpdateRoyaltyConfig.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRoyaltyConfigResponse(): MsgUpdateRoyaltyConfigResponse {
  return {
    royaltyConfig: RoyaltyConfig.fromPartial({})
  };
}
export const MsgUpdateRoyaltyConfigResponse = {
  typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfigResponse",
  encode(message: MsgUpdateRoyaltyConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRoyaltyConfigResponse {
    return {
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateRoyaltyConfigResponse>): MsgUpdateRoyaltyConfigResponse {
    const message = createBaseMsgUpdateRoyaltyConfigResponse();
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateRoyaltyConfigResponseAmino): MsgUpdateRoyaltyConfigResponse {
    return {
      royaltyConfig: object?.royalty_config ? RoyaltyConfig.fromAmino(object.royalty_config) : undefined
    };
  },
  toAmino(message: MsgUpdateRoyaltyConfigResponse): MsgUpdateRoyaltyConfigResponseAmino {
    const obj: any = {};
    obj.royalty_config = message.royaltyConfig ? RoyaltyConfig.toAmino(message.royaltyConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRoyaltyConfigResponseAminoMsg): MsgUpdateRoyaltyConfigResponse {
    return MsgUpdateRoyaltyConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRoyaltyConfigResponseProtoMsg): MsgUpdateRoyaltyConfigResponse {
    return MsgUpdateRoyaltyConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRoyaltyConfigResponse): Uint8Array {
    return MsgUpdateRoyaltyConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRoyaltyConfigResponse): MsgUpdateRoyaltyConfigResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgUpdateRoyaltyConfigResponse",
      value: MsgUpdateRoyaltyConfigResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRoyaltyConfig(): MsgDeleteRoyaltyConfig {
  return {
    creator: "",
    classId: ""
  };
}
export const MsgDeleteRoyaltyConfig = {
  typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig",
  encode(message: MsgDeleteRoyaltyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteRoyaltyConfig {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteRoyaltyConfig>): MsgDeleteRoyaltyConfig {
    const message = createBaseMsgDeleteRoyaltyConfig();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteRoyaltyConfigAmino): MsgDeleteRoyaltyConfig {
    return {
      creator: object.creator,
      classId: object.class_id
    };
  },
  toAmino(message: MsgDeleteRoyaltyConfig): MsgDeleteRoyaltyConfigAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRoyaltyConfigAminoMsg): MsgDeleteRoyaltyConfig {
    return MsgDeleteRoyaltyConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRoyaltyConfigProtoMsg): MsgDeleteRoyaltyConfig {
    return MsgDeleteRoyaltyConfig.decode(message.value);
  },
  toProto(message: MsgDeleteRoyaltyConfig): Uint8Array {
    return MsgDeleteRoyaltyConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRoyaltyConfig): MsgDeleteRoyaltyConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig",
      value: MsgDeleteRoyaltyConfig.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRoyaltyConfigResponse(): MsgDeleteRoyaltyConfigResponse {
  return {};
}
export const MsgDeleteRoyaltyConfigResponse = {
  typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfigResponse",
  encode(_: MsgDeleteRoyaltyConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteRoyaltyConfigResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteRoyaltyConfigResponse>): MsgDeleteRoyaltyConfigResponse {
    const message = createBaseMsgDeleteRoyaltyConfigResponse();
    return message;
  },
  fromAmino(_: MsgDeleteRoyaltyConfigResponseAmino): MsgDeleteRoyaltyConfigResponse {
    return {};
  },
  toAmino(_: MsgDeleteRoyaltyConfigResponse): MsgDeleteRoyaltyConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRoyaltyConfigResponseAminoMsg): MsgDeleteRoyaltyConfigResponse {
    return MsgDeleteRoyaltyConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRoyaltyConfigResponseProtoMsg): MsgDeleteRoyaltyConfigResponse {
    return MsgDeleteRoyaltyConfigResponse.decode(message.value);
  },
  toProto(message: MsgDeleteRoyaltyConfigResponse): Uint8Array {
    return MsgDeleteRoyaltyConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRoyaltyConfigResponse): MsgDeleteRoyaltyConfigResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MsgDeleteRoyaltyConfigResponse",
      value: MsgDeleteRoyaltyConfigResponse.encode(message).finish()
    };
  }
};