import { ClassParentInput, ClassParentInputSDKType, ClassInput, ClassInputSDKType } from "./class_input";
import { NFTInput, NFTInputSDKType } from "./nft_input";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { RoyaltyConfigInput, RoyaltyConfigInputSDKType, RoyaltyConfig, RoyaltyConfigSDKType } from "./royalty_config";
import { Class, ClassSDKType, NFT, NFTSDKType } from "../../../cosmos/nft/v1beta1/nft";
import { BlindBoxContent, BlindBoxContentSDKType } from "./blind_box_content";
import { Offer, OfferSDKType } from "./offer";
import { Listing, ListingSDKType } from "./listing";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
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
export interface MsgBurnNFTResponse {}
export interface MsgBurnNFTResponseSDKType {}
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
export interface MsgDeleteBlindBoxContentResponse {}
export interface MsgDeleteBlindBoxContentResponseSDKType {}
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
export interface MsgDeleteOfferResponse {}
export interface MsgDeleteOfferResponseSDKType {}
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
export interface MsgDeleteListingResponse {}
export interface MsgDeleteListingResponseSDKType {}
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
export interface MsgSellNFTResponse {}
export interface MsgSellNFTResponseSDKType {}
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
export interface MsgBuyNFTResponse {}
export interface MsgBuyNFTResponseSDKType {}
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
export interface MsgDeleteRoyaltyConfigResponse {}
export interface MsgDeleteRoyaltyConfigResponseSDKType {}
function createBaseMsgNewClass(): MsgNewClass {
  return {
    creator: "",
    parent: undefined,
    input: undefined
  };
}
export const MsgNewClass = {
  encode(message: MsgNewClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgNewClassResponse(): MsgNewClassResponse {
  return {
    class: undefined
  };
}
export const MsgNewClassResponse = {
  encode(message: MsgNewClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateClass(): MsgUpdateClass {
  return {
    creator: "",
    classId: "",
    input: undefined
  };
}
export const MsgUpdateClass = {
  encode(message: MsgUpdateClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateClassResponse(): MsgUpdateClassResponse {
  return {
    class: undefined
  };
}
export const MsgUpdateClassResponse = {
  encode(message: MsgUpdateClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: MsgMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {
    nft: undefined
  };
}
export const MsgMintNFTResponse = {
  encode(message: MsgMintNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: MsgBurnNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}
export const MsgBurnNFTResponse = {
  encode(_: MsgBurnNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  }
};
function createBaseMsgCreateBlindBoxContent(): MsgCreateBlindBoxContent {
  return {
    creator: "",
    classId: "",
    id: "",
    input: undefined
  };
}
export const MsgCreateBlindBoxContent = {
  encode(message: MsgCreateBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgCreateBlindBoxContentResponse(): MsgCreateBlindBoxContentResponse {
  return {
    blindBoxContent: undefined
  };
}
export const MsgCreateBlindBoxContentResponse = {
  encode(message: MsgCreateBlindBoxContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateBlindBoxContent(): MsgUpdateBlindBoxContent {
  return {
    creator: "",
    classId: "",
    id: "",
    input: undefined
  };
}
export const MsgUpdateBlindBoxContent = {
  encode(message: MsgUpdateBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateBlindBoxContentResponse(): MsgUpdateBlindBoxContentResponse {
  return {
    blindBoxContent: undefined
  };
}
export const MsgUpdateBlindBoxContentResponse = {
  encode(message: MsgUpdateBlindBoxContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: MsgDeleteBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteBlindBoxContentResponse(): MsgDeleteBlindBoxContentResponse {
  return {};
}
export const MsgDeleteBlindBoxContentResponse = {
  encode(_: MsgDeleteBlindBoxContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteBlindBoxContentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteBlindBoxContentResponse>): MsgDeleteBlindBoxContentResponse {
    const message = createBaseMsgDeleteBlindBoxContentResponse();
    return message;
  }
};
function createBaseMsgCreateOffer(): MsgCreateOffer {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: Long.UZERO,
    expiration: undefined
  };
}
export const MsgCreateOffer = {
  encode(message: MsgCreateOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateOffer>): MsgCreateOffer {
    const message = createBaseMsgCreateOffer();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }
};
function createBaseMsgCreateOfferResponse(): MsgCreateOfferResponse {
  return {
    offer: undefined
  };
}
export const MsgCreateOfferResponse = {
  encode(message: MsgCreateOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateOffer(): MsgUpdateOffer {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: Long.UZERO,
    expiration: undefined
  };
}
export const MsgUpdateOffer = {
  encode(message: MsgUpdateOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateOffer>): MsgUpdateOffer {
    const message = createBaseMsgUpdateOffer();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }
};
function createBaseMsgUpdateOfferResponse(): MsgUpdateOfferResponse {
  return {
    offer: undefined
  };
}
export const MsgUpdateOfferResponse = {
  encode(message: MsgUpdateOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: MsgDeleteOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteOfferResponse(): MsgDeleteOfferResponse {
  return {};
}
export const MsgDeleteOfferResponse = {
  encode(_: MsgDeleteOfferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteOfferResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteOfferResponse>): MsgDeleteOfferResponse {
    const message = createBaseMsgDeleteOfferResponse();
    return message;
  }
};
function createBaseMsgCreateListing(): MsgCreateListing {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: Long.UZERO,
    expiration: undefined,
    fullPayToRoyalty: false
  };
}
export const MsgCreateListing = {
  encode(message: MsgCreateListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<MsgCreateListing>): MsgCreateListing {
    const message = createBaseMsgCreateListing();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  }
};
function createBaseMsgCreateListingResponse(): MsgCreateListingResponse {
  return {
    listing: undefined
  };
}
export const MsgCreateListingResponse = {
  encode(message: MsgCreateListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateListing(): MsgUpdateListing {
  return {
    creator: "",
    classId: "",
    nftId: "",
    price: Long.UZERO,
    expiration: undefined,
    fullPayToRoyalty: false
  };
}
export const MsgUpdateListing = {
  encode(message: MsgUpdateListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<MsgUpdateListing>): MsgUpdateListing {
    const message = createBaseMsgUpdateListing();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  }
};
function createBaseMsgUpdateListingResponse(): MsgUpdateListingResponse {
  return {
    listing: undefined
  };
}
export const MsgUpdateListingResponse = {
  encode(message: MsgUpdateListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: MsgDeleteListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteListingResponse(): MsgDeleteListingResponse {
  return {};
}
export const MsgDeleteListingResponse = {
  encode(_: MsgDeleteListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteListingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteListingResponse>): MsgDeleteListingResponse {
    const message = createBaseMsgDeleteListingResponse();
    return message;
  }
};
function createBaseMsgSellNFT(): MsgSellNFT {
  return {
    creator: "",
    classId: "",
    nftId: "",
    buyer: "",
    price: Long.UZERO,
    fullPayToRoyalty: false
  };
}
export const MsgSellNFT = {
  encode(message: MsgSellNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<MsgSellNFT>): MsgSellNFT {
    const message = createBaseMsgSellNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  }
};
function createBaseMsgSellNFTResponse(): MsgSellNFTResponse {
  return {};
}
export const MsgSellNFTResponse = {
  encode(_: MsgSellNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSellNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSellNFTResponse>): MsgSellNFTResponse {
    const message = createBaseMsgSellNFTResponse();
    return message;
  }
};
function createBaseMsgBuyNFT(): MsgBuyNFT {
  return {
    creator: "",
    classId: "",
    nftId: "",
    seller: "",
    price: Long.UZERO
  };
}
export const MsgBuyNFT = {
  encode(message: MsgBuyNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgBuyNFT>): MsgBuyNFT {
    const message = createBaseMsgBuyNFT();
    message.creator = object.creator ?? "";
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    return message;
  }
};
function createBaseMsgBuyNFTResponse(): MsgBuyNFTResponse {
  return {};
}
export const MsgBuyNFTResponse = {
  encode(_: MsgBuyNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBuyNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBuyNFTResponse>): MsgBuyNFTResponse {
    const message = createBaseMsgBuyNFTResponse();
    return message;
  }
};
function createBaseMsgCreateRoyaltyConfig(): MsgCreateRoyaltyConfig {
  return {
    creator: "",
    classId: "",
    royaltyConfig: undefined
  };
}
export const MsgCreateRoyaltyConfig = {
  encode(message: MsgCreateRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgCreateRoyaltyConfigResponse(): MsgCreateRoyaltyConfigResponse {
  return {
    royaltyConfig: undefined
  };
}
export const MsgCreateRoyaltyConfigResponse = {
  encode(message: MsgCreateRoyaltyConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateRoyaltyConfig(): MsgUpdateRoyaltyConfig {
  return {
    creator: "",
    classId: "",
    royaltyConfig: undefined
  };
}
export const MsgUpdateRoyaltyConfig = {
  encode(message: MsgUpdateRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateRoyaltyConfigResponse(): MsgUpdateRoyaltyConfigResponse {
  return {
    royaltyConfig: undefined
  };
}
export const MsgUpdateRoyaltyConfigResponse = {
  encode(message: MsgUpdateRoyaltyConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteRoyaltyConfig(): MsgDeleteRoyaltyConfig {
  return {
    creator: "",
    classId: ""
  };
}
export const MsgDeleteRoyaltyConfig = {
  encode(message: MsgDeleteRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDeleteRoyaltyConfigResponse(): MsgDeleteRoyaltyConfigResponse {
  return {};
}
export const MsgDeleteRoyaltyConfigResponse = {
  encode(_: MsgDeleteRoyaltyConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeleteRoyaltyConfigResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteRoyaltyConfigResponse>): MsgDeleteRoyaltyConfigResponse {
    const message = createBaseMsgDeleteRoyaltyConfigResponse();
    return message;
  }
};