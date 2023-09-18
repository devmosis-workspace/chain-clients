import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventNewClass {
  classId: string;
  parentIscnIdPrefix: string;
  parentAccount: string;
}
export interface EventNewClassProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventNewClass";
  value: Uint8Array;
}
export interface EventNewClassAmino {
  class_id: string;
  parent_iscn_id_prefix: string;
  parent_account: string;
}
export interface EventNewClassAminoMsg {
  type: "/likechain.likenft.v1.EventNewClass";
  value: EventNewClassAmino;
}
export interface EventNewClassSDKType {
  class_id: string;
  parent_iscn_id_prefix: string;
  parent_account: string;
}
export interface EventUpdateClass {
  classId: string;
  parentIscnIdPrefix: string;
  parentAccount: string;
}
export interface EventUpdateClassProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventUpdateClass";
  value: Uint8Array;
}
export interface EventUpdateClassAmino {
  class_id: string;
  parent_iscn_id_prefix: string;
  parent_account: string;
}
export interface EventUpdateClassAminoMsg {
  type: "/likechain.likenft.v1.EventUpdateClass";
  value: EventUpdateClassAmino;
}
export interface EventUpdateClassSDKType {
  class_id: string;
  parent_iscn_id_prefix: string;
  parent_account: string;
}
export interface EventRevealClass {
  classId: string;
  success: boolean;
  error: string;
}
export interface EventRevealClassProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventRevealClass";
  value: Uint8Array;
}
export interface EventRevealClassAmino {
  class_id: string;
  success: boolean;
  error: string;
}
export interface EventRevealClassAminoMsg {
  type: "/likechain.likenft.v1.EventRevealClass";
  value: EventRevealClassAmino;
}
export interface EventRevealClassSDKType {
  class_id: string;
  success: boolean;
  error: string;
}
export interface EventMintNFT {
  classId: string;
  nftId: string;
  owner: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventMintNFTProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventMintNFT";
  value: Uint8Array;
}
export interface EventMintNFTAmino {
  class_id: string;
  nft_id: string;
  owner: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventMintNFTAminoMsg {
  type: "/likechain.likenft.v1.EventMintNFT";
  value: EventMintNFTAmino;
}
export interface EventMintNFTSDKType {
  class_id: string;
  nft_id: string;
  owner: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventBurnNFT {
  classId: string;
  nftId: string;
  owner: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventBurnNFTProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventBurnNFT";
  value: Uint8Array;
}
export interface EventBurnNFTAmino {
  class_id: string;
  nft_id: string;
  owner: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventBurnNFTAminoMsg {
  type: "/likechain.likenft.v1.EventBurnNFT";
  value: EventBurnNFTAmino;
}
export interface EventBurnNFTSDKType {
  class_id: string;
  nft_id: string;
  owner: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventCreateBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventCreateBlindBoxContentProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventCreateBlindBoxContent";
  value: Uint8Array;
}
export interface EventCreateBlindBoxContentAmino {
  class_id: string;
  content_id: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventCreateBlindBoxContentAminoMsg {
  type: "/likechain.likenft.v1.EventCreateBlindBoxContent";
  value: EventCreateBlindBoxContentAmino;
}
export interface EventCreateBlindBoxContentSDKType {
  class_id: string;
  content_id: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventUpdateBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventUpdateBlindBoxContentProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventUpdateBlindBoxContent";
  value: Uint8Array;
}
export interface EventUpdateBlindBoxContentAmino {
  class_id: string;
  content_id: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventUpdateBlindBoxContentAminoMsg {
  type: "/likechain.likenft.v1.EventUpdateBlindBoxContent";
  value: EventUpdateBlindBoxContentAmino;
}
export interface EventUpdateBlindBoxContentSDKType {
  class_id: string;
  content_id: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventDeleteBlindBoxContent {
  classId: string;
  contentId: string;
  classParentIscnIdPrefix: string;
  classParentAccount: string;
}
export interface EventDeleteBlindBoxContentProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventDeleteBlindBoxContent";
  value: Uint8Array;
}
export interface EventDeleteBlindBoxContentAmino {
  class_id: string;
  content_id: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventDeleteBlindBoxContentAminoMsg {
  type: "/likechain.likenft.v1.EventDeleteBlindBoxContent";
  value: EventDeleteBlindBoxContentAmino;
}
export interface EventDeleteBlindBoxContentSDKType {
  class_id: string;
  content_id: string;
  class_parent_iscn_id_prefix: string;
  class_parent_account: string;
}
export interface EventCreateOffer {
  classId: string;
  nftId: string;
  buyer: string;
}
export interface EventCreateOfferProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventCreateOffer";
  value: Uint8Array;
}
export interface EventCreateOfferAmino {
  class_id: string;
  nft_id: string;
  buyer: string;
}
export interface EventCreateOfferAminoMsg {
  type: "/likechain.likenft.v1.EventCreateOffer";
  value: EventCreateOfferAmino;
}
export interface EventCreateOfferSDKType {
  class_id: string;
  nft_id: string;
  buyer: string;
}
export interface EventUpdateOffer {
  classId: string;
  nftId: string;
  buyer: string;
}
export interface EventUpdateOfferProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventUpdateOffer";
  value: Uint8Array;
}
export interface EventUpdateOfferAmino {
  class_id: string;
  nft_id: string;
  buyer: string;
}
export interface EventUpdateOfferAminoMsg {
  type: "/likechain.likenft.v1.EventUpdateOffer";
  value: EventUpdateOfferAmino;
}
export interface EventUpdateOfferSDKType {
  class_id: string;
  nft_id: string;
  buyer: string;
}
export interface EventDeleteOffer {
  classId: string;
  nftId: string;
  buyer: string;
}
export interface EventDeleteOfferProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventDeleteOffer";
  value: Uint8Array;
}
export interface EventDeleteOfferAmino {
  class_id: string;
  nft_id: string;
  buyer: string;
}
export interface EventDeleteOfferAminoMsg {
  type: "/likechain.likenft.v1.EventDeleteOffer";
  value: EventDeleteOfferAmino;
}
export interface EventDeleteOfferSDKType {
  class_id: string;
  nft_id: string;
  buyer: string;
}
export interface EventCreateListing {
  classId: string;
  nftId: string;
  seller: string;
}
export interface EventCreateListingProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventCreateListing";
  value: Uint8Array;
}
export interface EventCreateListingAmino {
  class_id: string;
  nft_id: string;
  seller: string;
}
export interface EventCreateListingAminoMsg {
  type: "/likechain.likenft.v1.EventCreateListing";
  value: EventCreateListingAmino;
}
export interface EventCreateListingSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
}
export interface EventUpdateListing {
  classId: string;
  nftId: string;
  seller: string;
}
export interface EventUpdateListingProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventUpdateListing";
  value: Uint8Array;
}
export interface EventUpdateListingAmino {
  class_id: string;
  nft_id: string;
  seller: string;
}
export interface EventUpdateListingAminoMsg {
  type: "/likechain.likenft.v1.EventUpdateListing";
  value: EventUpdateListingAmino;
}
export interface EventUpdateListingSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
}
export interface EventDeleteListing {
  classId: string;
  nftId: string;
  seller: string;
}
export interface EventDeleteListingProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventDeleteListing";
  value: Uint8Array;
}
export interface EventDeleteListingAmino {
  class_id: string;
  nft_id: string;
  seller: string;
}
export interface EventDeleteListingAminoMsg {
  type: "/likechain.likenft.v1.EventDeleteListing";
  value: EventDeleteListingAmino;
}
export interface EventDeleteListingSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
}
export interface EventSellNFT {
  classId: string;
  nftId: string;
  seller: string;
  buyer: string;
  price: bigint;
  fullPayToRoyalty: boolean;
}
export interface EventSellNFTProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventSellNFT";
  value: Uint8Array;
}
export interface EventSellNFTAmino {
  class_id: string;
  nft_id: string;
  seller: string;
  buyer: string;
  price: string;
  full_pay_to_royalty: boolean;
}
export interface EventSellNFTAminoMsg {
  type: "/likechain.likenft.v1.EventSellNFT";
  value: EventSellNFTAmino;
}
export interface EventSellNFTSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
  buyer: string;
  price: bigint;
  full_pay_to_royalty: boolean;
}
export interface EventBuyNFT {
  classId: string;
  nftId: string;
  seller: string;
  buyer: string;
  price: bigint;
}
export interface EventBuyNFTProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventBuyNFT";
  value: Uint8Array;
}
export interface EventBuyNFTAmino {
  class_id: string;
  nft_id: string;
  seller: string;
  buyer: string;
  price: string;
}
export interface EventBuyNFTAminoMsg {
  type: "/likechain.likenft.v1.EventBuyNFT";
  value: EventBuyNFTAmino;
}
export interface EventBuyNFTSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
  buyer: string;
  price: bigint;
}
export interface EventExpireOffer {
  classId: string;
  nftId: string;
  buyer: string;
  success: boolean;
  error: string;
}
export interface EventExpireOfferProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventExpireOffer";
  value: Uint8Array;
}
export interface EventExpireOfferAmino {
  class_id: string;
  nft_id: string;
  buyer: string;
  success: boolean;
  error: string;
}
export interface EventExpireOfferAminoMsg {
  type: "/likechain.likenft.v1.EventExpireOffer";
  value: EventExpireOfferAmino;
}
export interface EventExpireOfferSDKType {
  class_id: string;
  nft_id: string;
  buyer: string;
  success: boolean;
  error: string;
}
export interface EventExpireListing {
  classId: string;
  nftId: string;
  seller: string;
  success: boolean;
  error: string;
}
export interface EventExpireListingProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventExpireListing";
  value: Uint8Array;
}
export interface EventExpireListingAmino {
  class_id: string;
  nft_id: string;
  seller: string;
  success: boolean;
  error: string;
}
export interface EventExpireListingAminoMsg {
  type: "/likechain.likenft.v1.EventExpireListing";
  value: EventExpireListingAmino;
}
export interface EventExpireListingSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
  success: boolean;
  error: string;
}
export interface EventCreateRoyaltyConfig {
  classId: string;
}
export interface EventCreateRoyaltyConfigProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventCreateRoyaltyConfig";
  value: Uint8Array;
}
export interface EventCreateRoyaltyConfigAmino {
  class_id: string;
}
export interface EventCreateRoyaltyConfigAminoMsg {
  type: "/likechain.likenft.v1.EventCreateRoyaltyConfig";
  value: EventCreateRoyaltyConfigAmino;
}
export interface EventCreateRoyaltyConfigSDKType {
  class_id: string;
}
export interface EventUpdateRoyaltyConfig {
  classId: string;
}
export interface EventUpdateRoyaltyConfigProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventUpdateRoyaltyConfig";
  value: Uint8Array;
}
export interface EventUpdateRoyaltyConfigAmino {
  class_id: string;
}
export interface EventUpdateRoyaltyConfigAminoMsg {
  type: "/likechain.likenft.v1.EventUpdateRoyaltyConfig";
  value: EventUpdateRoyaltyConfigAmino;
}
export interface EventUpdateRoyaltyConfigSDKType {
  class_id: string;
}
export interface EventDeleteRoyaltyConfig {
  classId: string;
}
export interface EventDeleteRoyaltyConfigProtoMsg {
  typeUrl: "/likechain.likenft.v1.EventDeleteRoyaltyConfig";
  value: Uint8Array;
}
export interface EventDeleteRoyaltyConfigAmino {
  class_id: string;
}
export interface EventDeleteRoyaltyConfigAminoMsg {
  type: "/likechain.likenft.v1.EventDeleteRoyaltyConfig";
  value: EventDeleteRoyaltyConfigAmino;
}
export interface EventDeleteRoyaltyConfigSDKType {
  class_id: string;
}
function createBaseEventNewClass(): EventNewClass {
  return {
    classId: "",
    parentIscnIdPrefix: "",
    parentAccount: ""
  };
}
export const EventNewClass = {
  typeUrl: "/likechain.likenft.v1.EventNewClass",
  encode(message: EventNewClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.parentIscnIdPrefix !== "") {
      writer.uint32(18).string(message.parentIscnIdPrefix);
    }
    if (message.parentAccount !== "") {
      writer.uint32(26).string(message.parentAccount);
    }
    return writer;
  },
  fromJSON(object: any): EventNewClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      parentIscnIdPrefix: isSet(object.parentIscnIdPrefix) ? String(object.parentIscnIdPrefix) : "",
      parentAccount: isSet(object.parentAccount) ? String(object.parentAccount) : ""
    };
  },
  fromPartial(object: Partial<EventNewClass>): EventNewClass {
    const message = createBaseEventNewClass();
    message.classId = object.classId ?? "";
    message.parentIscnIdPrefix = object.parentIscnIdPrefix ?? "";
    message.parentAccount = object.parentAccount ?? "";
    return message;
  },
  fromAmino(object: EventNewClassAmino): EventNewClass {
    return {
      classId: object.class_id,
      parentIscnIdPrefix: object.parent_iscn_id_prefix,
      parentAccount: object.parent_account
    };
  },
  toAmino(message: EventNewClass): EventNewClassAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.parent_iscn_id_prefix = message.parentIscnIdPrefix;
    obj.parent_account = message.parentAccount;
    return obj;
  },
  fromAminoMsg(object: EventNewClassAminoMsg): EventNewClass {
    return EventNewClass.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewClassProtoMsg): EventNewClass {
    return EventNewClass.decode(message.value);
  },
  toProto(message: EventNewClass): Uint8Array {
    return EventNewClass.encode(message).finish();
  },
  toProtoMsg(message: EventNewClass): EventNewClassProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventNewClass",
      value: EventNewClass.encode(message).finish()
    };
  }
};
function createBaseEventUpdateClass(): EventUpdateClass {
  return {
    classId: "",
    parentIscnIdPrefix: "",
    parentAccount: ""
  };
}
export const EventUpdateClass = {
  typeUrl: "/likechain.likenft.v1.EventUpdateClass",
  encode(message: EventUpdateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.parentIscnIdPrefix !== "") {
      writer.uint32(18).string(message.parentIscnIdPrefix);
    }
    if (message.parentAccount !== "") {
      writer.uint32(26).string(message.parentAccount);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      parentIscnIdPrefix: isSet(object.parentIscnIdPrefix) ? String(object.parentIscnIdPrefix) : "",
      parentAccount: isSet(object.parentAccount) ? String(object.parentAccount) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateClass>): EventUpdateClass {
    const message = createBaseEventUpdateClass();
    message.classId = object.classId ?? "";
    message.parentIscnIdPrefix = object.parentIscnIdPrefix ?? "";
    message.parentAccount = object.parentAccount ?? "";
    return message;
  },
  fromAmino(object: EventUpdateClassAmino): EventUpdateClass {
    return {
      classId: object.class_id,
      parentIscnIdPrefix: object.parent_iscn_id_prefix,
      parentAccount: object.parent_account
    };
  },
  toAmino(message: EventUpdateClass): EventUpdateClassAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.parent_iscn_id_prefix = message.parentIscnIdPrefix;
    obj.parent_account = message.parentAccount;
    return obj;
  },
  fromAminoMsg(object: EventUpdateClassAminoMsg): EventUpdateClass {
    return EventUpdateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateClassProtoMsg): EventUpdateClass {
    return EventUpdateClass.decode(message.value);
  },
  toProto(message: EventUpdateClass): Uint8Array {
    return EventUpdateClass.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateClass): EventUpdateClassProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventUpdateClass",
      value: EventUpdateClass.encode(message).finish()
    };
  }
};
function createBaseEventRevealClass(): EventRevealClass {
  return {
    classId: "",
    success: false,
    error: ""
  };
}
export const EventRevealClass = {
  typeUrl: "/likechain.likenft.v1.EventRevealClass",
  encode(message: EventRevealClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },
  fromJSON(object: any): EventRevealClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  fromPartial(object: Partial<EventRevealClass>): EventRevealClass {
    const message = createBaseEventRevealClass();
    message.classId = object.classId ?? "";
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventRevealClassAmino): EventRevealClass {
    return {
      classId: object.class_id,
      success: object.success,
      error: object.error
    };
  },
  toAmino(message: EventRevealClass): EventRevealClassAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.success = message.success;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: EventRevealClassAminoMsg): EventRevealClass {
    return EventRevealClass.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRevealClassProtoMsg): EventRevealClass {
    return EventRevealClass.decode(message.value);
  },
  toProto(message: EventRevealClass): Uint8Array {
    return EventRevealClass.encode(message).finish();
  },
  toProtoMsg(message: EventRevealClass): EventRevealClassProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventRevealClass",
      value: EventRevealClass.encode(message).finish()
    };
  }
};
function createBaseEventMintNFT(): EventMintNFT {
  return {
    classId: "",
    nftId: "",
    owner: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}
export const EventMintNFT = {
  typeUrl: "/likechain.likenft.v1.EventMintNFT",
  encode(message: EventMintNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(34).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(42).string(message.classParentAccount);
    }
    return writer;
  },
  fromJSON(object: any): EventMintNFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },
  fromPartial(object: Partial<EventMintNFT>): EventMintNFT {
    const message = createBaseEventMintNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.owner = object.owner ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  },
  fromAmino(object: EventMintNFTAmino): EventMintNFT {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      owner: object.owner,
      classParentIscnIdPrefix: object.class_parent_iscn_id_prefix,
      classParentAccount: object.class_parent_account
    };
  },
  toAmino(message: EventMintNFT): EventMintNFTAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.owner = message.owner;
    obj.class_parent_iscn_id_prefix = message.classParentIscnIdPrefix;
    obj.class_parent_account = message.classParentAccount;
    return obj;
  },
  fromAminoMsg(object: EventMintNFTAminoMsg): EventMintNFT {
    return EventMintNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintNFTProtoMsg): EventMintNFT {
    return EventMintNFT.decode(message.value);
  },
  toProto(message: EventMintNFT): Uint8Array {
    return EventMintNFT.encode(message).finish();
  },
  toProtoMsg(message: EventMintNFT): EventMintNFTProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventMintNFT",
      value: EventMintNFT.encode(message).finish()
    };
  }
};
function createBaseEventBurnNFT(): EventBurnNFT {
  return {
    classId: "",
    nftId: "",
    owner: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}
export const EventBurnNFT = {
  typeUrl: "/likechain.likenft.v1.EventBurnNFT",
  encode(message: EventBurnNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(34).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(42).string(message.classParentAccount);
    }
    return writer;
  },
  fromJSON(object: any): EventBurnNFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },
  fromPartial(object: Partial<EventBurnNFT>): EventBurnNFT {
    const message = createBaseEventBurnNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.owner = object.owner ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  },
  fromAmino(object: EventBurnNFTAmino): EventBurnNFT {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      owner: object.owner,
      classParentIscnIdPrefix: object.class_parent_iscn_id_prefix,
      classParentAccount: object.class_parent_account
    };
  },
  toAmino(message: EventBurnNFT): EventBurnNFTAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.owner = message.owner;
    obj.class_parent_iscn_id_prefix = message.classParentIscnIdPrefix;
    obj.class_parent_account = message.classParentAccount;
    return obj;
  },
  fromAminoMsg(object: EventBurnNFTAminoMsg): EventBurnNFT {
    return EventBurnNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBurnNFTProtoMsg): EventBurnNFT {
    return EventBurnNFT.decode(message.value);
  },
  toProto(message: EventBurnNFT): Uint8Array {
    return EventBurnNFT.encode(message).finish();
  },
  toProtoMsg(message: EventBurnNFT): EventBurnNFTProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventBurnNFT",
      value: EventBurnNFT.encode(message).finish()
    };
  }
};
function createBaseEventCreateBlindBoxContent(): EventCreateBlindBoxContent {
  return {
    classId: "",
    contentId: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}
export const EventCreateBlindBoxContent = {
  typeUrl: "/likechain.likenft.v1.EventCreateBlindBoxContent",
  encode(message: EventCreateBlindBoxContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateBlindBoxContent {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },
  fromPartial(object: Partial<EventCreateBlindBoxContent>): EventCreateBlindBoxContent {
    const message = createBaseEventCreateBlindBoxContent();
    message.classId = object.classId ?? "";
    message.contentId = object.contentId ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  },
  fromAmino(object: EventCreateBlindBoxContentAmino): EventCreateBlindBoxContent {
    return {
      classId: object.class_id,
      contentId: object.content_id,
      classParentIscnIdPrefix: object.class_parent_iscn_id_prefix,
      classParentAccount: object.class_parent_account
    };
  },
  toAmino(message: EventCreateBlindBoxContent): EventCreateBlindBoxContentAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.content_id = message.contentId;
    obj.class_parent_iscn_id_prefix = message.classParentIscnIdPrefix;
    obj.class_parent_account = message.classParentAccount;
    return obj;
  },
  fromAminoMsg(object: EventCreateBlindBoxContentAminoMsg): EventCreateBlindBoxContent {
    return EventCreateBlindBoxContent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateBlindBoxContentProtoMsg): EventCreateBlindBoxContent {
    return EventCreateBlindBoxContent.decode(message.value);
  },
  toProto(message: EventCreateBlindBoxContent): Uint8Array {
    return EventCreateBlindBoxContent.encode(message).finish();
  },
  toProtoMsg(message: EventCreateBlindBoxContent): EventCreateBlindBoxContentProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventCreateBlindBoxContent",
      value: EventCreateBlindBoxContent.encode(message).finish()
    };
  }
};
function createBaseEventUpdateBlindBoxContent(): EventUpdateBlindBoxContent {
  return {
    classId: "",
    contentId: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}
export const EventUpdateBlindBoxContent = {
  typeUrl: "/likechain.likenft.v1.EventUpdateBlindBoxContent",
  encode(message: EventUpdateBlindBoxContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateBlindBoxContent {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateBlindBoxContent>): EventUpdateBlindBoxContent {
    const message = createBaseEventUpdateBlindBoxContent();
    message.classId = object.classId ?? "";
    message.contentId = object.contentId ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  },
  fromAmino(object: EventUpdateBlindBoxContentAmino): EventUpdateBlindBoxContent {
    return {
      classId: object.class_id,
      contentId: object.content_id,
      classParentIscnIdPrefix: object.class_parent_iscn_id_prefix,
      classParentAccount: object.class_parent_account
    };
  },
  toAmino(message: EventUpdateBlindBoxContent): EventUpdateBlindBoxContentAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.content_id = message.contentId;
    obj.class_parent_iscn_id_prefix = message.classParentIscnIdPrefix;
    obj.class_parent_account = message.classParentAccount;
    return obj;
  },
  fromAminoMsg(object: EventUpdateBlindBoxContentAminoMsg): EventUpdateBlindBoxContent {
    return EventUpdateBlindBoxContent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateBlindBoxContentProtoMsg): EventUpdateBlindBoxContent {
    return EventUpdateBlindBoxContent.decode(message.value);
  },
  toProto(message: EventUpdateBlindBoxContent): Uint8Array {
    return EventUpdateBlindBoxContent.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateBlindBoxContent): EventUpdateBlindBoxContentProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventUpdateBlindBoxContent",
      value: EventUpdateBlindBoxContent.encode(message).finish()
    };
  }
};
function createBaseEventDeleteBlindBoxContent(): EventDeleteBlindBoxContent {
  return {
    classId: "",
    contentId: "",
    classParentIscnIdPrefix: "",
    classParentAccount: ""
  };
}
export const EventDeleteBlindBoxContent = {
  typeUrl: "/likechain.likenft.v1.EventDeleteBlindBoxContent",
  encode(message: EventDeleteBlindBoxContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }
    if (message.classParentIscnIdPrefix !== "") {
      writer.uint32(26).string(message.classParentIscnIdPrefix);
    }
    if (message.classParentAccount !== "") {
      writer.uint32(34).string(message.classParentAccount);
    }
    return writer;
  },
  fromJSON(object: any): EventDeleteBlindBoxContent {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
      classParentIscnIdPrefix: isSet(object.classParentIscnIdPrefix) ? String(object.classParentIscnIdPrefix) : "",
      classParentAccount: isSet(object.classParentAccount) ? String(object.classParentAccount) : ""
    };
  },
  fromPartial(object: Partial<EventDeleteBlindBoxContent>): EventDeleteBlindBoxContent {
    const message = createBaseEventDeleteBlindBoxContent();
    message.classId = object.classId ?? "";
    message.contentId = object.contentId ?? "";
    message.classParentIscnIdPrefix = object.classParentIscnIdPrefix ?? "";
    message.classParentAccount = object.classParentAccount ?? "";
    return message;
  },
  fromAmino(object: EventDeleteBlindBoxContentAmino): EventDeleteBlindBoxContent {
    return {
      classId: object.class_id,
      contentId: object.content_id,
      classParentIscnIdPrefix: object.class_parent_iscn_id_prefix,
      classParentAccount: object.class_parent_account
    };
  },
  toAmino(message: EventDeleteBlindBoxContent): EventDeleteBlindBoxContentAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.content_id = message.contentId;
    obj.class_parent_iscn_id_prefix = message.classParentIscnIdPrefix;
    obj.class_parent_account = message.classParentAccount;
    return obj;
  },
  fromAminoMsg(object: EventDeleteBlindBoxContentAminoMsg): EventDeleteBlindBoxContent {
    return EventDeleteBlindBoxContent.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteBlindBoxContentProtoMsg): EventDeleteBlindBoxContent {
    return EventDeleteBlindBoxContent.decode(message.value);
  },
  toProto(message: EventDeleteBlindBoxContent): Uint8Array {
    return EventDeleteBlindBoxContent.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteBlindBoxContent): EventDeleteBlindBoxContentProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventDeleteBlindBoxContent",
      value: EventDeleteBlindBoxContent.encode(message).finish()
    };
  }
};
function createBaseEventCreateOffer(): EventCreateOffer {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}
export const EventCreateOffer = {
  typeUrl: "/likechain.likenft.v1.EventCreateOffer",
  encode(message: EventCreateOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateOffer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },
  fromPartial(object: Partial<EventCreateOffer>): EventCreateOffer {
    const message = createBaseEventCreateOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  },
  fromAmino(object: EventCreateOfferAmino): EventCreateOffer {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      buyer: object.buyer
    };
  },
  toAmino(message: EventCreateOffer): EventCreateOfferAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.buyer = message.buyer;
    return obj;
  },
  fromAminoMsg(object: EventCreateOfferAminoMsg): EventCreateOffer {
    return EventCreateOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateOfferProtoMsg): EventCreateOffer {
    return EventCreateOffer.decode(message.value);
  },
  toProto(message: EventCreateOffer): Uint8Array {
    return EventCreateOffer.encode(message).finish();
  },
  toProtoMsg(message: EventCreateOffer): EventCreateOfferProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventCreateOffer",
      value: EventCreateOffer.encode(message).finish()
    };
  }
};
function createBaseEventUpdateOffer(): EventUpdateOffer {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}
export const EventUpdateOffer = {
  typeUrl: "/likechain.likenft.v1.EventUpdateOffer",
  encode(message: EventUpdateOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateOffer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateOffer>): EventUpdateOffer {
    const message = createBaseEventUpdateOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  },
  fromAmino(object: EventUpdateOfferAmino): EventUpdateOffer {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      buyer: object.buyer
    };
  },
  toAmino(message: EventUpdateOffer): EventUpdateOfferAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.buyer = message.buyer;
    return obj;
  },
  fromAminoMsg(object: EventUpdateOfferAminoMsg): EventUpdateOffer {
    return EventUpdateOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateOfferProtoMsg): EventUpdateOffer {
    return EventUpdateOffer.decode(message.value);
  },
  toProto(message: EventUpdateOffer): Uint8Array {
    return EventUpdateOffer.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateOffer): EventUpdateOfferProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventUpdateOffer",
      value: EventUpdateOffer.encode(message).finish()
    };
  }
};
function createBaseEventDeleteOffer(): EventDeleteOffer {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}
export const EventDeleteOffer = {
  typeUrl: "/likechain.likenft.v1.EventDeleteOffer",
  encode(message: EventDeleteOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },
  fromJSON(object: any): EventDeleteOffer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },
  fromPartial(object: Partial<EventDeleteOffer>): EventDeleteOffer {
    const message = createBaseEventDeleteOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  },
  fromAmino(object: EventDeleteOfferAmino): EventDeleteOffer {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      buyer: object.buyer
    };
  },
  toAmino(message: EventDeleteOffer): EventDeleteOfferAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.buyer = message.buyer;
    return obj;
  },
  fromAminoMsg(object: EventDeleteOfferAminoMsg): EventDeleteOffer {
    return EventDeleteOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteOfferProtoMsg): EventDeleteOffer {
    return EventDeleteOffer.decode(message.value);
  },
  toProto(message: EventDeleteOffer): Uint8Array {
    return EventDeleteOffer.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteOffer): EventDeleteOfferProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventDeleteOffer",
      value: EventDeleteOffer.encode(message).finish()
    };
  }
};
function createBaseEventCreateListing(): EventCreateListing {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}
export const EventCreateListing = {
  typeUrl: "/likechain.likenft.v1.EventCreateListing",
  encode(message: EventCreateListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateListing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },
  fromPartial(object: Partial<EventCreateListing>): EventCreateListing {
    const message = createBaseEventCreateListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  },
  fromAmino(object: EventCreateListingAmino): EventCreateListing {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller
    };
  },
  toAmino(message: EventCreateListing): EventCreateListingAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    return obj;
  },
  fromAminoMsg(object: EventCreateListingAminoMsg): EventCreateListing {
    return EventCreateListing.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateListingProtoMsg): EventCreateListing {
    return EventCreateListing.decode(message.value);
  },
  toProto(message: EventCreateListing): Uint8Array {
    return EventCreateListing.encode(message).finish();
  },
  toProtoMsg(message: EventCreateListing): EventCreateListingProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventCreateListing",
      value: EventCreateListing.encode(message).finish()
    };
  }
};
function createBaseEventUpdateListing(): EventUpdateListing {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}
export const EventUpdateListing = {
  typeUrl: "/likechain.likenft.v1.EventUpdateListing",
  encode(message: EventUpdateListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateListing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateListing>): EventUpdateListing {
    const message = createBaseEventUpdateListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  },
  fromAmino(object: EventUpdateListingAmino): EventUpdateListing {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller
    };
  },
  toAmino(message: EventUpdateListing): EventUpdateListingAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    return obj;
  },
  fromAminoMsg(object: EventUpdateListingAminoMsg): EventUpdateListing {
    return EventUpdateListing.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateListingProtoMsg): EventUpdateListing {
    return EventUpdateListing.decode(message.value);
  },
  toProto(message: EventUpdateListing): Uint8Array {
    return EventUpdateListing.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateListing): EventUpdateListingProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventUpdateListing",
      value: EventUpdateListing.encode(message).finish()
    };
  }
};
function createBaseEventDeleteListing(): EventDeleteListing {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}
export const EventDeleteListing = {
  typeUrl: "/likechain.likenft.v1.EventDeleteListing",
  encode(message: EventDeleteListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    return writer;
  },
  fromJSON(object: any): EventDeleteListing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },
  fromPartial(object: Partial<EventDeleteListing>): EventDeleteListing {
    const message = createBaseEventDeleteListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  },
  fromAmino(object: EventDeleteListingAmino): EventDeleteListing {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller
    };
  },
  toAmino(message: EventDeleteListing): EventDeleteListingAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    return obj;
  },
  fromAminoMsg(object: EventDeleteListingAminoMsg): EventDeleteListing {
    return EventDeleteListing.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteListingProtoMsg): EventDeleteListing {
    return EventDeleteListing.decode(message.value);
  },
  toProto(message: EventDeleteListing): Uint8Array {
    return EventDeleteListing.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteListing): EventDeleteListingProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventDeleteListing",
      value: EventDeleteListing.encode(message).finish()
    };
  }
};
function createBaseEventSellNFT(): EventSellNFT {
  return {
    classId: "",
    nftId: "",
    seller: "",
    buyer: "",
    price: BigInt(0),
    fullPayToRoyalty: false
  };
}
export const EventSellNFT = {
  typeUrl: "/likechain.likenft.v1.EventSellNFT",
  encode(message: EventSellNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
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
  fromJSON(object: any): EventSellNFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<EventSellNFT>): EventSellNFT {
    const message = createBaseEventSellNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  },
  fromAmino(object: EventSellNFTAmino): EventSellNFT {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller,
      buyer: object.buyer,
      price: BigInt(object.price),
      fullPayToRoyalty: object.full_pay_to_royalty
    };
  },
  toAmino(message: EventSellNFT): EventSellNFTAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    obj.buyer = message.buyer;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.full_pay_to_royalty = message.fullPayToRoyalty;
    return obj;
  },
  fromAminoMsg(object: EventSellNFTAminoMsg): EventSellNFT {
    return EventSellNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSellNFTProtoMsg): EventSellNFT {
    return EventSellNFT.decode(message.value);
  },
  toProto(message: EventSellNFT): Uint8Array {
    return EventSellNFT.encode(message).finish();
  },
  toProtoMsg(message: EventSellNFT): EventSellNFTProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventSellNFT",
      value: EventSellNFT.encode(message).finish()
    };
  }
};
function createBaseEventBuyNFT(): EventBuyNFT {
  return {
    classId: "",
    nftId: "",
    seller: "",
    buyer: "",
    price: BigInt(0)
  };
}
export const EventBuyNFT = {
  typeUrl: "/likechain.likenft.v1.EventBuyNFT",
  encode(message: EventBuyNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.buyer !== "") {
      writer.uint32(34).string(message.buyer);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(40).uint64(message.price);
    }
    return writer;
  },
  fromJSON(object: any): EventBuyNFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventBuyNFT>): EventBuyNFT {
    const message = createBaseEventBuyNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBuyNFTAmino): EventBuyNFT {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller,
      buyer: object.buyer,
      price: BigInt(object.price)
    };
  },
  toAmino(message: EventBuyNFT): EventBuyNFTAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    obj.buyer = message.buyer;
    obj.price = message.price ? message.price.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBuyNFTAminoMsg): EventBuyNFT {
    return EventBuyNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBuyNFTProtoMsg): EventBuyNFT {
    return EventBuyNFT.decode(message.value);
  },
  toProto(message: EventBuyNFT): Uint8Array {
    return EventBuyNFT.encode(message).finish();
  },
  toProtoMsg(message: EventBuyNFT): EventBuyNFTProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventBuyNFT",
      value: EventBuyNFT.encode(message).finish()
    };
  }
};
function createBaseEventExpireOffer(): EventExpireOffer {
  return {
    classId: "",
    nftId: "",
    buyer: "",
    success: false,
    error: ""
  };
}
export const EventExpireOffer = {
  typeUrl: "/likechain.likenft.v1.EventExpireOffer",
  encode(message: EventExpireOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },
  fromJSON(object: any): EventExpireOffer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  fromPartial(object: Partial<EventExpireOffer>): EventExpireOffer {
    const message = createBaseEventExpireOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventExpireOfferAmino): EventExpireOffer {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      buyer: object.buyer,
      success: object.success,
      error: object.error
    };
  },
  toAmino(message: EventExpireOffer): EventExpireOfferAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.buyer = message.buyer;
    obj.success = message.success;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: EventExpireOfferAminoMsg): EventExpireOffer {
    return EventExpireOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExpireOfferProtoMsg): EventExpireOffer {
    return EventExpireOffer.decode(message.value);
  },
  toProto(message: EventExpireOffer): Uint8Array {
    return EventExpireOffer.encode(message).finish();
  },
  toProtoMsg(message: EventExpireOffer): EventExpireOfferProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventExpireOffer",
      value: EventExpireOffer.encode(message).finish()
    };
  }
};
function createBaseEventExpireListing(): EventExpireListing {
  return {
    classId: "",
    nftId: "",
    seller: "",
    success: false,
    error: ""
  };
}
export const EventExpireListing = {
  typeUrl: "/likechain.likenft.v1.EventExpireListing",
  encode(message: EventExpireListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },
  fromJSON(object: any): EventExpireListing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  fromPartial(object: Partial<EventExpireListing>): EventExpireListing {
    const message = createBaseEventExpireListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventExpireListingAmino): EventExpireListing {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller,
      success: object.success,
      error: object.error
    };
  },
  toAmino(message: EventExpireListing): EventExpireListingAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    obj.success = message.success;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: EventExpireListingAminoMsg): EventExpireListing {
    return EventExpireListing.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExpireListingProtoMsg): EventExpireListing {
    return EventExpireListing.decode(message.value);
  },
  toProto(message: EventExpireListing): Uint8Array {
    return EventExpireListing.encode(message).finish();
  },
  toProtoMsg(message: EventExpireListing): EventExpireListingProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventExpireListing",
      value: EventExpireListing.encode(message).finish()
    };
  }
};
function createBaseEventCreateRoyaltyConfig(): EventCreateRoyaltyConfig {
  return {
    classId: ""
  };
}
export const EventCreateRoyaltyConfig = {
  typeUrl: "/likechain.likenft.v1.EventCreateRoyaltyConfig",
  encode(message: EventCreateRoyaltyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateRoyaltyConfig {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<EventCreateRoyaltyConfig>): EventCreateRoyaltyConfig {
    const message = createBaseEventCreateRoyaltyConfig();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: EventCreateRoyaltyConfigAmino): EventCreateRoyaltyConfig {
    return {
      classId: object.class_id
    };
  },
  toAmino(message: EventCreateRoyaltyConfig): EventCreateRoyaltyConfigAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: EventCreateRoyaltyConfigAminoMsg): EventCreateRoyaltyConfig {
    return EventCreateRoyaltyConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateRoyaltyConfigProtoMsg): EventCreateRoyaltyConfig {
    return EventCreateRoyaltyConfig.decode(message.value);
  },
  toProto(message: EventCreateRoyaltyConfig): Uint8Array {
    return EventCreateRoyaltyConfig.encode(message).finish();
  },
  toProtoMsg(message: EventCreateRoyaltyConfig): EventCreateRoyaltyConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventCreateRoyaltyConfig",
      value: EventCreateRoyaltyConfig.encode(message).finish()
    };
  }
};
function createBaseEventUpdateRoyaltyConfig(): EventUpdateRoyaltyConfig {
  return {
    classId: ""
  };
}
export const EventUpdateRoyaltyConfig = {
  typeUrl: "/likechain.likenft.v1.EventUpdateRoyaltyConfig",
  encode(message: EventUpdateRoyaltyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateRoyaltyConfig {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateRoyaltyConfig>): EventUpdateRoyaltyConfig {
    const message = createBaseEventUpdateRoyaltyConfig();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: EventUpdateRoyaltyConfigAmino): EventUpdateRoyaltyConfig {
    return {
      classId: object.class_id
    };
  },
  toAmino(message: EventUpdateRoyaltyConfig): EventUpdateRoyaltyConfigAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: EventUpdateRoyaltyConfigAminoMsg): EventUpdateRoyaltyConfig {
    return EventUpdateRoyaltyConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateRoyaltyConfigProtoMsg): EventUpdateRoyaltyConfig {
    return EventUpdateRoyaltyConfig.decode(message.value);
  },
  toProto(message: EventUpdateRoyaltyConfig): Uint8Array {
    return EventUpdateRoyaltyConfig.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateRoyaltyConfig): EventUpdateRoyaltyConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventUpdateRoyaltyConfig",
      value: EventUpdateRoyaltyConfig.encode(message).finish()
    };
  }
};
function createBaseEventDeleteRoyaltyConfig(): EventDeleteRoyaltyConfig {
  return {
    classId: ""
  };
}
export const EventDeleteRoyaltyConfig = {
  typeUrl: "/likechain.likenft.v1.EventDeleteRoyaltyConfig",
  encode(message: EventDeleteRoyaltyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): EventDeleteRoyaltyConfig {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<EventDeleteRoyaltyConfig>): EventDeleteRoyaltyConfig {
    const message = createBaseEventDeleteRoyaltyConfig();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: EventDeleteRoyaltyConfigAmino): EventDeleteRoyaltyConfig {
    return {
      classId: object.class_id
    };
  },
  toAmino(message: EventDeleteRoyaltyConfig): EventDeleteRoyaltyConfigAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: EventDeleteRoyaltyConfigAminoMsg): EventDeleteRoyaltyConfig {
    return EventDeleteRoyaltyConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteRoyaltyConfigProtoMsg): EventDeleteRoyaltyConfig {
    return EventDeleteRoyaltyConfig.decode(message.value);
  },
  toProto(message: EventDeleteRoyaltyConfig): Uint8Array {
    return EventDeleteRoyaltyConfig.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteRoyaltyConfig): EventDeleteRoyaltyConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.EventDeleteRoyaltyConfig",
      value: EventDeleteRoyaltyConfig.encode(message).finish()
    };
  }
};