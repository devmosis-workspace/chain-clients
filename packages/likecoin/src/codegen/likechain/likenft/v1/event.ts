import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventNewClass {
  classId: string;
  parentIscnIdPrefix: string;
  parentAccount: string;
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
  price: Long;
  fullPayToRoyalty: boolean;
}
export interface EventSellNFTSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
  buyer: string;
  price: Long;
  full_pay_to_royalty: boolean;
}
export interface EventBuyNFT {
  classId: string;
  nftId: string;
  seller: string;
  buyer: string;
  price: Long;
}
export interface EventBuyNFTSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
  buyer: string;
  price: Long;
}
export interface EventExpireOffer {
  classId: string;
  nftId: string;
  buyer: string;
  success: boolean;
  error: string;
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
export interface EventCreateRoyaltyConfigSDKType {
  class_id: string;
}
export interface EventUpdateRoyaltyConfig {
  classId: string;
}
export interface EventUpdateRoyaltyConfigSDKType {
  class_id: string;
}
export interface EventDeleteRoyaltyConfig {
  classId: string;
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
  encode(message: EventNewClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventUpdateClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventRevealClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventBurnNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventCreateBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventUpdateBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventDeleteBlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventCreateOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventUpdateOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventDeleteOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventCreateListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventUpdateListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventDeleteListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventSellNFT(): EventSellNFT {
  return {
    classId: "",
    nftId: "",
    seller: "",
    buyer: "",
    price: Long.UZERO,
    fullPayToRoyalty: false
  };
}
export const EventSellNFT = {
  encode(message: EventSellNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<EventSellNFT>): EventSellNFT {
    const message = createBaseEventSellNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  }
};
function createBaseEventBuyNFT(): EventBuyNFT {
  return {
    classId: "",
    nftId: "",
    seller: "",
    buyer: "",
    price: Long.UZERO
  };
}
export const EventBuyNFT = {
  encode(message: EventBuyNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventBuyNFT>): EventBuyNFT {
    const message = createBaseEventBuyNFT();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    return message;
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
  encode(message: EventExpireOffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventExpireListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventCreateRoyaltyConfig(): EventCreateRoyaltyConfig {
  return {
    classId: ""
  };
}
export const EventCreateRoyaltyConfig = {
  encode(message: EventCreateRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventUpdateRoyaltyConfig(): EventUpdateRoyaltyConfig {
  return {
    classId: ""
  };
}
export const EventUpdateRoyaltyConfig = {
  encode(message: EventUpdateRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventDeleteRoyaltyConfig(): EventDeleteRoyaltyConfig {
  return {
    classId: ""
  };
}
export const EventDeleteRoyaltyConfig = {
  encode(message: EventDeleteRoyaltyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};