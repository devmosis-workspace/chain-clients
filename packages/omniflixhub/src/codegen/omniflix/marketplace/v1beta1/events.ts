import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventListNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT";
  value: Uint8Array;
}
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFTAmino {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
export interface EventListNFTAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventListNFT";
  value: EventListNFTAmino;
}
/** EventListONFT is emitted on NFT Listing on market */
export interface EventListNFTSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListing {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventEditListingProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing";
  value: Uint8Array;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListingAmino {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
export interface EventEditListingAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventEditListing";
  value: EventEditListingAmino;
}
/** EventEditListing is emitted on edit Listing on market */
export interface EventEditListingSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventDeListNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT";
  value: Uint8Array;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFTAmino {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
export interface EventDeListNFTAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventDeListNFT";
  value: EventDeListNFTAmino;
}
/** EventDeListONFT is emitted on NFT DeListing from market */
export interface EventDeListNFTSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFT {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
  buyer: string;
}
export interface EventBuyNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT";
  value: Uint8Array;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFTAmino {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
  buyer: string;
}
export interface EventBuyNFTAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventBuyNFT";
  value: EventBuyNFTAmino;
}
/** EventBuyONFT is emitted on NFT Buy */
export interface EventBuyNFTSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
  buyer: string;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuction {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
  minPrice: string;
}
export interface EventCreateAuctionProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction";
  value: Uint8Array;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuctionAmino {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
  min_price: string;
}
export interface EventCreateAuctionAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventCreateAuction";
  value: EventCreateAuctionAmino;
}
/** EventCreateAuction is emitted on creating auction */
export interface EventCreateAuctionSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
  min_price: string;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuction {
  id: string;
  nftId: string;
  denomId: string;
  owner: string;
}
export interface EventCancelAuctionProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction";
  value: Uint8Array;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuctionAmino {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
export interface EventCancelAuctionAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventCancelAuction";
  value: EventCancelAuctionAmino;
}
/** EventCancelAuction is emitted on canceling auction */
export interface EventCancelAuctionSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  owner: string;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBid {
  auctionId: string;
  nftId: string;
  denomId: string;
  bidder: string;
  amount: string;
}
export interface EventPlaceBidProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid";
  value: Uint8Array;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBidAmino {
  auction_id: string;
  nft_id: string;
  denom_id: string;
  bidder: string;
  amount: string;
}
export interface EventPlaceBidAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.EventPlaceBid";
  value: EventPlaceBidAmino;
}
/** EventPlaceBid is emitted on placing bid for an auction */
export interface EventPlaceBidSDKType {
  auction_id: string;
  nft_id: string;
  denom_id: string;
  bidder: string;
  amount: string;
}
function createBaseEventListNFT(): EventListNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: ""
  };
}
export const EventListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT",
  encode(message: EventListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): EventListNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<EventListNFT>): EventListNFT {
    const message = createBaseEventListNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventListNFTAmino): EventListNFT {
    return {
      id: object.id,
      nftId: object.nft_id,
      denomId: object.denom_id,
      owner: object.owner
    };
  },
  toAmino(message: EventListNFT): EventListNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: EventListNFTAminoMsg): EventListNFT {
    return EventListNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventListNFTProtoMsg): EventListNFT {
    return EventListNFT.decode(message.value);
  },
  toProto(message: EventListNFT): Uint8Array {
    return EventListNFT.encode(message).finish();
  },
  toProtoMsg(message: EventListNFT): EventListNFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventListNFT",
      value: EventListNFT.encode(message).finish()
    };
  }
};
function createBaseEventEditListing(): EventEditListing {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: ""
  };
}
export const EventEditListing = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing",
  encode(message: EventEditListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): EventEditListing {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<EventEditListing>): EventEditListing {
    const message = createBaseEventEditListing();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventEditListingAmino): EventEditListing {
    return {
      id: object.id,
      nftId: object.nft_id,
      denomId: object.denom_id,
      owner: object.owner
    };
  },
  toAmino(message: EventEditListing): EventEditListingAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: EventEditListingAminoMsg): EventEditListing {
    return EventEditListing.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEditListingProtoMsg): EventEditListing {
    return EventEditListing.decode(message.value);
  },
  toProto(message: EventEditListing): Uint8Array {
    return EventEditListing.encode(message).finish();
  },
  toProtoMsg(message: EventEditListing): EventEditListingProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventEditListing",
      value: EventEditListing.encode(message).finish()
    };
  }
};
function createBaseEventDeListNFT(): EventDeListNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: ""
  };
}
export const EventDeListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT",
  encode(message: EventDeListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): EventDeListNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<EventDeListNFT>): EventDeListNFT {
    const message = createBaseEventDeListNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventDeListNFTAmino): EventDeListNFT {
    return {
      id: object.id,
      nftId: object.nft_id,
      denomId: object.denom_id,
      owner: object.owner
    };
  },
  toAmino(message: EventDeListNFT): EventDeListNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: EventDeListNFTAminoMsg): EventDeListNFT {
    return EventDeListNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeListNFTProtoMsg): EventDeListNFT {
    return EventDeListNFT.decode(message.value);
  },
  toProto(message: EventDeListNFT): Uint8Array {
    return EventDeListNFT.encode(message).finish();
  },
  toProtoMsg(message: EventDeListNFT): EventDeListNFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventDeListNFT",
      value: EventDeListNFT.encode(message).finish()
    };
  }
};
function createBaseEventBuyNFT(): EventBuyNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
    buyer: ""
  };
}
export const EventBuyNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT",
  encode(message: EventBuyNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }
    return writer;
  },
  fromJSON(object: any): EventBuyNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },
  fromPartial(object: Partial<EventBuyNFT>): EventBuyNFT {
    const message = createBaseEventBuyNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  },
  fromAmino(object: EventBuyNFTAmino): EventBuyNFT {
    return {
      id: object.id,
      nftId: object.nft_id,
      denomId: object.denom_id,
      owner: object.owner,
      buyer: object.buyer
    };
  },
  toAmino(message: EventBuyNFT): EventBuyNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    obj.buyer = message.buyer;
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventBuyNFT",
      value: EventBuyNFT.encode(message).finish()
    };
  }
};
function createBaseEventCreateAuction(): EventCreateAuction {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: "",
    minPrice: ""
  };
}
export const EventCreateAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction",
  encode(message: EventCreateAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.minPrice !== "") {
      writer.uint32(42).string(message.minPrice);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateAuction {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      minPrice: isSet(object.minPrice) ? String(object.minPrice) : ""
    };
  },
  fromPartial(object: Partial<EventCreateAuction>): EventCreateAuction {
    const message = createBaseEventCreateAuction();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    message.minPrice = object.minPrice ?? "";
    return message;
  },
  fromAmino(object: EventCreateAuctionAmino): EventCreateAuction {
    return {
      id: object.id,
      nftId: object.nft_id,
      denomId: object.denom_id,
      owner: object.owner,
      minPrice: object.min_price
    };
  },
  toAmino(message: EventCreateAuction): EventCreateAuctionAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    obj.min_price = message.minPrice;
    return obj;
  },
  fromAminoMsg(object: EventCreateAuctionAminoMsg): EventCreateAuction {
    return EventCreateAuction.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateAuctionProtoMsg): EventCreateAuction {
    return EventCreateAuction.decode(message.value);
  },
  toProto(message: EventCreateAuction): Uint8Array {
    return EventCreateAuction.encode(message).finish();
  },
  toProtoMsg(message: EventCreateAuction): EventCreateAuctionProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventCreateAuction",
      value: EventCreateAuction.encode(message).finish()
    };
  }
};
function createBaseEventCancelAuction(): EventCancelAuction {
  return {
    id: "",
    nftId: "",
    denomId: "",
    owner: ""
  };
}
export const EventCancelAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction",
  encode(message: EventCancelAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): EventCancelAuction {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<EventCancelAuction>): EventCancelAuction {
    const message = createBaseEventCancelAuction();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventCancelAuctionAmino): EventCancelAuction {
    return {
      id: object.id,
      nftId: object.nft_id,
      denomId: object.denom_id,
      owner: object.owner
    };
  },
  toAmino(message: EventCancelAuction): EventCancelAuctionAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: EventCancelAuctionAminoMsg): EventCancelAuction {
    return EventCancelAuction.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelAuctionProtoMsg): EventCancelAuction {
    return EventCancelAuction.decode(message.value);
  },
  toProto(message: EventCancelAuction): Uint8Array {
    return EventCancelAuction.encode(message).finish();
  },
  toProtoMsg(message: EventCancelAuction): EventCancelAuctionProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventCancelAuction",
      value: EventCancelAuction.encode(message).finish()
    };
  }
};
function createBaseEventPlaceBid(): EventPlaceBid {
  return {
    auctionId: "",
    nftId: "",
    denomId: "",
    bidder: "",
    amount: ""
  };
}
export const EventPlaceBid = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid",
  encode(message: EventPlaceBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== "") {
      writer.uint32(10).string(message.auctionId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.bidder !== "") {
      writer.uint32(34).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventPlaceBid {
    return {
      auctionId: isSet(object.auctionId) ? String(object.auctionId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<EventPlaceBid>): EventPlaceBid {
    const message = createBaseEventPlaceBid();
    message.auctionId = object.auctionId ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventPlaceBidAmino): EventPlaceBid {
    return {
      auctionId: object.auction_id,
      nftId: object.nft_id,
      denomId: object.denom_id,
      bidder: object.bidder,
      amount: object.amount
    };
  },
  toAmino(message: EventPlaceBid): EventPlaceBidAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.bidder = message.bidder;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventPlaceBidAminoMsg): EventPlaceBid {
    return EventPlaceBid.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPlaceBidProtoMsg): EventPlaceBid {
    return EventPlaceBid.decode(message.value);
  },
  toProto(message: EventPlaceBid): Uint8Array {
    return EventPlaceBid.encode(message).finish();
  },
  toProtoMsg(message: EventPlaceBid): EventPlaceBidProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.EventPlaceBid",
      value: EventPlaceBid.encode(message).finish()
    };
  }
};