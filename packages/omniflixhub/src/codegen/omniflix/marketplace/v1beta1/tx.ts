import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { WeightedAddress, WeightedAddressAmino, WeightedAddressSDKType } from "./listing";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AuctionListing, AuctionListingAmino, AuctionListingSDKType } from "./auction";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface MsgListNFT {
  id: string;
  nftId: string;
  denomId: string;
  price: Coin;
  owner: string;
  splitShares: WeightedAddress[];
}
export interface MsgListNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT";
  value: Uint8Array;
}
export interface MsgListNFTAmino {
  id?: string;
  nft_id?: string;
  denom_id?: string;
  price?: CoinAmino;
  owner?: string;
  split_shares?: WeightedAddressAmino[];
}
export interface MsgListNFTAminoMsg {
  type: "OmniFlix/marketplace/MsgListNFT";
  value: MsgListNFTAmino;
}
export interface MsgListNFTSDKType {
  id: string;
  nft_id: string;
  denom_id: string;
  price: CoinSDKType;
  owner: string;
  split_shares: WeightedAddressSDKType[];
}
export interface MsgListNFTResponse {}
export interface MsgListNFTResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse";
  value: Uint8Array;
}
export interface MsgListNFTResponseAmino {}
export interface MsgListNFTResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse";
  value: MsgListNFTResponseAmino;
}
export interface MsgListNFTResponseSDKType {}
export interface MsgEditListing {
  id: string;
  price: Coin;
  owner: string;
}
export interface MsgEditListingProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing";
  value: Uint8Array;
}
export interface MsgEditListingAmino {
  id?: string;
  price?: CoinAmino;
  owner?: string;
}
export interface MsgEditListingAminoMsg {
  type: "OmniFlix/marketplace/MsgEditListing";
  value: MsgEditListingAmino;
}
export interface MsgEditListingSDKType {
  id: string;
  price: CoinSDKType;
  owner: string;
}
export interface MsgEditListingResponse {}
export interface MsgEditListingResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse";
  value: Uint8Array;
}
export interface MsgEditListingResponseAmino {}
export interface MsgEditListingResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse";
  value: MsgEditListingResponseAmino;
}
export interface MsgEditListingResponseSDKType {}
export interface MsgDeListNFT {
  id: string;
  owner: string;
}
export interface MsgDeListNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT";
  value: Uint8Array;
}
export interface MsgDeListNFTAmino {
  id?: string;
  owner?: string;
}
export interface MsgDeListNFTAminoMsg {
  type: "OmniFlix/marketplace/MsgDeListNFT";
  value: MsgDeListNFTAmino;
}
export interface MsgDeListNFTSDKType {
  id: string;
  owner: string;
}
export interface MsgDeListNFTResponse {}
export interface MsgDeListNFTResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse";
  value: Uint8Array;
}
export interface MsgDeListNFTResponseAmino {}
export interface MsgDeListNFTResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse";
  value: MsgDeListNFTResponseAmino;
}
export interface MsgDeListNFTResponseSDKType {}
export interface MsgBuyNFT {
  id: string;
  price: Coin;
  buyer: string;
}
export interface MsgBuyNFTProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT";
  value: Uint8Array;
}
export interface MsgBuyNFTAmino {
  id?: string;
  price?: CoinAmino;
  buyer?: string;
}
export interface MsgBuyNFTAminoMsg {
  type: "OmniFlix/marketplace/MsgBuyNFT";
  value: MsgBuyNFTAmino;
}
export interface MsgBuyNFTSDKType {
  id: string;
  price: CoinSDKType;
  buyer: string;
}
export interface MsgBuyNFTResponse {}
export interface MsgBuyNFTResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse";
  value: Uint8Array;
}
export interface MsgBuyNFTResponseAmino {}
export interface MsgBuyNFTResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse";
  value: MsgBuyNFTResponseAmino;
}
export interface MsgBuyNFTResponseSDKType {}
export interface MsgCreateAuction {
  nftId: string;
  denomId: string;
  startTime: Timestamp;
  startPrice: Coin;
  duration?: Duration;
  incrementPercentage: string;
  whitelistAccounts: string[];
  splitShares: WeightedAddress[];
  owner: string;
}
export interface MsgCreateAuctionProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction";
  value: Uint8Array;
}
export interface MsgCreateAuctionAmino {
  nft_id?: string;
  denom_id?: string;
  start_time?: string;
  start_price?: CoinAmino;
  duration?: DurationAmino;
  increment_percentage?: string;
  whitelist_accounts?: string[];
  split_shares?: WeightedAddressAmino[];
  owner?: string;
}
export interface MsgCreateAuctionAminoMsg {
  type: "OmniFlix/marketplace/MsgCreateAuction";
  value: MsgCreateAuctionAmino;
}
export interface MsgCreateAuctionSDKType {
  nft_id: string;
  denom_id: string;
  start_time: TimestampSDKType;
  start_price: CoinSDKType;
  duration?: DurationSDKType;
  increment_percentage: string;
  whitelist_accounts: string[];
  split_shares: WeightedAddressSDKType[];
  owner: string;
}
export interface MsgCreateAuctionResponse {
  auction?: AuctionListing;
}
export interface MsgCreateAuctionResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse";
  value: Uint8Array;
}
export interface MsgCreateAuctionResponseAmino {
  auction?: AuctionListingAmino;
}
export interface MsgCreateAuctionResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse";
  value: MsgCreateAuctionResponseAmino;
}
export interface MsgCreateAuctionResponseSDKType {
  auction?: AuctionListingSDKType;
}
export interface MsgCancelAuction {
  auctionId: bigint;
  owner: string;
}
export interface MsgCancelAuctionProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction";
  value: Uint8Array;
}
export interface MsgCancelAuctionAmino {
  auction_id?: string;
  owner?: string;
}
export interface MsgCancelAuctionAminoMsg {
  type: "OmniFlix/marketplace/MsgCancelAuction";
  value: MsgCancelAuctionAmino;
}
export interface MsgCancelAuctionSDKType {
  auction_id: bigint;
  owner: string;
}
export interface MsgCancelAuctionResponse {}
export interface MsgCancelAuctionResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse";
  value: Uint8Array;
}
export interface MsgCancelAuctionResponseAmino {}
export interface MsgCancelAuctionResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse";
  value: MsgCancelAuctionResponseAmino;
}
export interface MsgCancelAuctionResponseSDKType {}
export interface MsgPlaceBid {
  auctionId: bigint;
  amount: Coin;
  bidder: string;
}
export interface MsgPlaceBidProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid";
  value: Uint8Array;
}
export interface MsgPlaceBidAmino {
  auction_id?: string;
  amount?: CoinAmino;
  bidder?: string;
}
export interface MsgPlaceBidAminoMsg {
  type: "OmniFlix/marketplace/MsgPlaceBid";
  value: MsgPlaceBidAmino;
}
export interface MsgPlaceBidSDKType {
  auction_id: bigint;
  amount: CoinSDKType;
  bidder: string;
}
export interface MsgPlaceBidResponse {}
export interface MsgPlaceBidResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse";
  value: Uint8Array;
}
export interface MsgPlaceBidResponseAmino {}
export interface MsgPlaceBidResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse";
  value: MsgPlaceBidResponseAmino;
}
export interface MsgPlaceBidResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/marketplace parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/marketplace parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgListNFT(): MsgListNFT {
  return {
    id: "",
    nftId: "",
    denomId: "",
    price: Coin.fromPartial({}),
    owner: "",
    splitShares: []
  };
}
export const MsgListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
  encode(message: MsgListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    for (const v of message.splitShares) {
      WeightedAddress.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgListNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : "",
      splitShares: Array.isArray(object?.splitShares) ? object.splitShares.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgListNFT>): MsgListNFT {
    const message = createBaseMsgListNFT();
    message.id = object.id ?? "";
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.owner = object.owner ?? "";
    message.splitShares = object.splitShares?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgListNFTAmino): MsgListNFT {
    const message = createBaseMsgListNFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.splitShares = object.split_shares?.map(e => WeightedAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgListNFT): MsgListNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    obj.owner = message.owner;
    if (message.splitShares) {
      obj.split_shares = message.splitShares.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.split_shares = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgListNFTAminoMsg): MsgListNFT {
    return MsgListNFT.fromAmino(object.value);
  },
  toAminoMsg(message: MsgListNFT): MsgListNFTAminoMsg {
    return {
      type: "OmniFlix/marketplace/MsgListNFT",
      value: MsgListNFT.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgListNFTProtoMsg): MsgListNFT {
    return MsgListNFT.decode(message.value);
  },
  toProto(message: MsgListNFT): Uint8Array {
    return MsgListNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgListNFT): MsgListNFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
      value: MsgListNFT.encode(message).finish()
    };
  }
};
function createBaseMsgListNFTResponse(): MsgListNFTResponse {
  return {};
}
export const MsgListNFTResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse",
  encode(_: MsgListNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgListNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgListNFTResponse>): MsgListNFTResponse {
    const message = createBaseMsgListNFTResponse();
    return message;
  },
  fromAmino(_: MsgListNFTResponseAmino): MsgListNFTResponse {
    const message = createBaseMsgListNFTResponse();
    return message;
  },
  toAmino(_: MsgListNFTResponse): MsgListNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgListNFTResponseAminoMsg): MsgListNFTResponse {
    return MsgListNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgListNFTResponseProtoMsg): MsgListNFTResponse {
    return MsgListNFTResponse.decode(message.value);
  },
  toProto(message: MsgListNFTResponse): Uint8Array {
    return MsgListNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgListNFTResponse): MsgListNFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFTResponse",
      value: MsgListNFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditListing(): MsgEditListing {
  return {
    id: "",
    price: Coin.fromPartial({}),
    owner: ""
  };
}
export const MsgEditListing = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
  encode(message: MsgEditListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): MsgEditListing {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<MsgEditListing>): MsgEditListing {
    const message = createBaseMsgEditListing();
    message.id = object.id ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgEditListingAmino): MsgEditListing {
    const message = createBaseMsgEditListing();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgEditListing): MsgEditListingAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgEditListingAminoMsg): MsgEditListing {
    return MsgEditListing.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditListing): MsgEditListingAminoMsg {
    return {
      type: "OmniFlix/marketplace/MsgEditListing",
      value: MsgEditListing.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditListingProtoMsg): MsgEditListing {
    return MsgEditListing.decode(message.value);
  },
  toProto(message: MsgEditListing): Uint8Array {
    return MsgEditListing.encode(message).finish();
  },
  toProtoMsg(message: MsgEditListing): MsgEditListingProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
      value: MsgEditListing.encode(message).finish()
    };
  }
};
function createBaseMsgEditListingResponse(): MsgEditListingResponse {
  return {};
}
export const MsgEditListingResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse",
  encode(_: MsgEditListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEditListingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEditListingResponse>): MsgEditListingResponse {
    const message = createBaseMsgEditListingResponse();
    return message;
  },
  fromAmino(_: MsgEditListingResponseAmino): MsgEditListingResponse {
    const message = createBaseMsgEditListingResponse();
    return message;
  },
  toAmino(_: MsgEditListingResponse): MsgEditListingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditListingResponseAminoMsg): MsgEditListingResponse {
    return MsgEditListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditListingResponseProtoMsg): MsgEditListingResponse {
    return MsgEditListingResponse.decode(message.value);
  },
  toProto(message: MsgEditListingResponse): Uint8Array {
    return MsgEditListingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditListingResponse): MsgEditListingResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListingResponse",
      value: MsgEditListingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeListNFT(): MsgDeListNFT {
  return {
    id: "",
    owner: ""
  };
}
export const MsgDeListNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
  encode(message: MsgDeListNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeListNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<MsgDeListNFT>): MsgDeListNFT {
    const message = createBaseMsgDeListNFT();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgDeListNFTAmino): MsgDeListNFT {
    const message = createBaseMsgDeListNFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgDeListNFT): MsgDeListNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgDeListNFTAminoMsg): MsgDeListNFT {
    return MsgDeListNFT.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeListNFT): MsgDeListNFTAminoMsg {
    return {
      type: "OmniFlix/marketplace/MsgDeListNFT",
      value: MsgDeListNFT.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeListNFTProtoMsg): MsgDeListNFT {
    return MsgDeListNFT.decode(message.value);
  },
  toProto(message: MsgDeListNFT): Uint8Array {
    return MsgDeListNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgDeListNFT): MsgDeListNFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
      value: MsgDeListNFT.encode(message).finish()
    };
  }
};
function createBaseMsgDeListNFTResponse(): MsgDeListNFTResponse {
  return {};
}
export const MsgDeListNFTResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse",
  encode(_: MsgDeListNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeListNFTResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeListNFTResponse>): MsgDeListNFTResponse {
    const message = createBaseMsgDeListNFTResponse();
    return message;
  },
  fromAmino(_: MsgDeListNFTResponseAmino): MsgDeListNFTResponse {
    const message = createBaseMsgDeListNFTResponse();
    return message;
  },
  toAmino(_: MsgDeListNFTResponse): MsgDeListNFTResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeListNFTResponseAminoMsg): MsgDeListNFTResponse {
    return MsgDeListNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeListNFTResponseProtoMsg): MsgDeListNFTResponse {
    return MsgDeListNFTResponse.decode(message.value);
  },
  toProto(message: MsgDeListNFTResponse): Uint8Array {
    return MsgDeListNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeListNFTResponse): MsgDeListNFTResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFTResponse",
      value: MsgDeListNFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBuyNFT(): MsgBuyNFT {
  return {
    id: "",
    price: Coin.fromPartial({}),
    buyer: ""
  };
}
export const MsgBuyNFT = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
  encode(message: MsgBuyNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },
  fromJSON(object: any): MsgBuyNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },
  fromPartial(object: Partial<MsgBuyNFT>): MsgBuyNFT {
    const message = createBaseMsgBuyNFT();
    message.id = object.id ?? "";
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    message.buyer = object.buyer ?? "";
    return message;
  },
  fromAmino(object: MsgBuyNFTAmino): MsgBuyNFT {
    const message = createBaseMsgBuyNFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromAmino(object.price);
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    return message;
  },
  toAmino(message: MsgBuyNFT): MsgBuyNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.price = message.price ? Coin.toAmino(message.price) : undefined;
    obj.buyer = message.buyer;
    return obj;
  },
  fromAminoMsg(object: MsgBuyNFTAminoMsg): MsgBuyNFT {
    return MsgBuyNFT.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBuyNFT): MsgBuyNFTAminoMsg {
    return {
      type: "OmniFlix/marketplace/MsgBuyNFT",
      value: MsgBuyNFT.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBuyNFTProtoMsg): MsgBuyNFT {
    return MsgBuyNFT.decode(message.value);
  },
  toProto(message: MsgBuyNFT): Uint8Array {
    return MsgBuyNFT.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyNFT): MsgBuyNFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
      value: MsgBuyNFT.encode(message).finish()
    };
  }
};
function createBaseMsgBuyNFTResponse(): MsgBuyNFTResponse {
  return {};
}
export const MsgBuyNFTResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse",
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
    const message = createBaseMsgBuyNFTResponse();
    return message;
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
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFTResponse",
      value: MsgBuyNFTResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAuction(): MsgCreateAuction {
  return {
    nftId: "",
    denomId: "",
    startTime: Timestamp.fromPartial({}),
    startPrice: Coin.fromPartial({}),
    duration: undefined,
    incrementPercentage: "",
    whitelistAccounts: [],
    splitShares: [],
    owner: ""
  };
}
export const MsgCreateAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
  encode(message: MsgCreateAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.startPrice !== undefined) {
      Coin.encode(message.startPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
    }
    if (message.incrementPercentage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.incrementPercentage, 18).atomics);
    }
    for (const v of message.whitelistAccounts) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.splitShares) {
      WeightedAddress.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateAuction {
    return {
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      startPrice: isSet(object.startPrice) ? Coin.fromJSON(object.startPrice) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      incrementPercentage: isSet(object.incrementPercentage) ? String(object.incrementPercentage) : "",
      whitelistAccounts: Array.isArray(object?.whitelistAccounts) ? object.whitelistAccounts.map((e: any) => String(e)) : [],
      splitShares: Array.isArray(object?.splitShares) ? object.splitShares.map((e: any) => WeightedAddress.fromJSON(e)) : [],
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateAuction>): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.startPrice = object.startPrice !== undefined && object.startPrice !== null ? Coin.fromPartial(object.startPrice) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.incrementPercentage = object.incrementPercentage ?? "";
    message.whitelistAccounts = object.whitelistAccounts?.map(e => e) || [];
    message.splitShares = object.splitShares?.map(e => WeightedAddress.fromPartial(e)) || [];
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgCreateAuctionAmino): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.startPrice = Coin.fromAmino(object.start_price);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.increment_percentage !== undefined && object.increment_percentage !== null) {
      message.incrementPercentage = object.increment_percentage;
    }
    message.whitelistAccounts = object.whitelist_accounts?.map(e => e) || [];
    message.splitShares = object.split_shares?.map(e => WeightedAddress.fromAmino(e)) || [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgCreateAuction): MsgCreateAuctionAmino {
    const obj: any = {};
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.start_price = message.startPrice ? Coin.toAmino(message.startPrice) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.increment_percentage = message.incrementPercentage;
    if (message.whitelistAccounts) {
      obj.whitelist_accounts = message.whitelistAccounts.map(e => e);
    } else {
      obj.whitelist_accounts = [];
    }
    if (message.splitShares) {
      obj.split_shares = message.splitShares.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.split_shares = [];
    }
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAuctionAminoMsg): MsgCreateAuction {
    return MsgCreateAuction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateAuction): MsgCreateAuctionAminoMsg {
    return {
      type: "OmniFlix/marketplace/MsgCreateAuction",
      value: MsgCreateAuction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateAuctionProtoMsg): MsgCreateAuction {
    return MsgCreateAuction.decode(message.value);
  },
  toProto(message: MsgCreateAuction): Uint8Array {
    return MsgCreateAuction.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAuction): MsgCreateAuctionProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
      value: MsgCreateAuction.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAuctionResponse(): MsgCreateAuctionResponse {
  return {
    auction: undefined
  };
}
export const MsgCreateAuctionResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse",
  encode(message: MsgCreateAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auction !== undefined) {
      AuctionListing.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateAuctionResponse {
    return {
      auction: isSet(object.auction) ? AuctionListing.fromJSON(object.auction) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateAuctionResponse>): MsgCreateAuctionResponse {
    const message = createBaseMsgCreateAuctionResponse();
    message.auction = object.auction !== undefined && object.auction !== null ? AuctionListing.fromPartial(object.auction) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateAuctionResponseAmino): MsgCreateAuctionResponse {
    const message = createBaseMsgCreateAuctionResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = AuctionListing.fromAmino(object.auction);
    }
    return message;
  },
  toAmino(message: MsgCreateAuctionResponse): MsgCreateAuctionResponseAmino {
    const obj: any = {};
    obj.auction = message.auction ? AuctionListing.toAmino(message.auction) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAuctionResponseAminoMsg): MsgCreateAuctionResponse {
    return MsgCreateAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAuctionResponseProtoMsg): MsgCreateAuctionResponse {
    return MsgCreateAuctionResponse.decode(message.value);
  },
  toProto(message: MsgCreateAuctionResponse): Uint8Array {
    return MsgCreateAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAuctionResponse): MsgCreateAuctionResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuctionResponse",
      value: MsgCreateAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelAuction(): MsgCancelAuction {
  return {
    auctionId: BigInt(0),
    owner: ""
  };
}
export const MsgCancelAuction = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
  encode(message: MsgCancelAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelAuction {
    return {
      auctionId: isSet(object.auctionId) ? BigInt(object.auctionId.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelAuction>): MsgCancelAuction {
    const message = createBaseMsgCancelAuction();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgCancelAuctionAmino): MsgCancelAuction {
    const message = createBaseMsgCancelAuction();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgCancelAuction): MsgCancelAuctionAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId ? message.auctionId.toString() : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgCancelAuctionAminoMsg): MsgCancelAuction {
    return MsgCancelAuction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelAuction): MsgCancelAuctionAminoMsg {
    return {
      type: "OmniFlix/marketplace/MsgCancelAuction",
      value: MsgCancelAuction.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelAuctionProtoMsg): MsgCancelAuction {
    return MsgCancelAuction.decode(message.value);
  },
  toProto(message: MsgCancelAuction): Uint8Array {
    return MsgCancelAuction.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelAuction): MsgCancelAuctionProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
      value: MsgCancelAuction.encode(message).finish()
    };
  }
};
function createBaseMsgCancelAuctionResponse(): MsgCancelAuctionResponse {
  return {};
}
export const MsgCancelAuctionResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse",
  encode(_: MsgCancelAuctionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelAuctionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelAuctionResponse>): MsgCancelAuctionResponse {
    const message = createBaseMsgCancelAuctionResponse();
    return message;
  },
  fromAmino(_: MsgCancelAuctionResponseAmino): MsgCancelAuctionResponse {
    const message = createBaseMsgCancelAuctionResponse();
    return message;
  },
  toAmino(_: MsgCancelAuctionResponse): MsgCancelAuctionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelAuctionResponseAminoMsg): MsgCancelAuctionResponse {
    return MsgCancelAuctionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelAuctionResponseProtoMsg): MsgCancelAuctionResponse {
    return MsgCancelAuctionResponse.decode(message.value);
  },
  toProto(message: MsgCancelAuctionResponse): Uint8Array {
    return MsgCancelAuctionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelAuctionResponse): MsgCancelAuctionResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuctionResponse",
      value: MsgCancelAuctionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPlaceBid(): MsgPlaceBid {
  return {
    auctionId: BigInt(0),
    amount: Coin.fromPartial({}),
    bidder: ""
  };
}
export const MsgPlaceBid = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
  encode(message: MsgPlaceBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }
    return writer;
  },
  fromJSON(object: any): MsgPlaceBid {
    return {
      auctionId: isSet(object.auctionId) ? BigInt(object.auctionId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      bidder: isSet(object.bidder) ? String(object.bidder) : ""
    };
  },
  fromPartial(object: Partial<MsgPlaceBid>): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bidder = object.bidder ?? "";
    return message;
  },
  fromAmino(object: MsgPlaceBidAmino): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    return message;
  },
  toAmino(message: MsgPlaceBid): MsgPlaceBidAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId ? message.auctionId.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.bidder = message.bidder;
    return obj;
  },
  fromAminoMsg(object: MsgPlaceBidAminoMsg): MsgPlaceBid {
    return MsgPlaceBid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPlaceBid): MsgPlaceBidAminoMsg {
    return {
      type: "OmniFlix/marketplace/MsgPlaceBid",
      value: MsgPlaceBid.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPlaceBidProtoMsg): MsgPlaceBid {
    return MsgPlaceBid.decode(message.value);
  },
  toProto(message: MsgPlaceBid): Uint8Array {
    return MsgPlaceBid.encode(message).finish();
  },
  toProtoMsg(message: MsgPlaceBid): MsgPlaceBidProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
      value: MsgPlaceBid.encode(message).finish()
    };
  }
};
function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return {};
}
export const MsgPlaceBidResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse",
  encode(_: MsgPlaceBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPlaceBidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPlaceBidResponse>): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
  fromAmino(_: MsgPlaceBidResponseAmino): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
  toAmino(_: MsgPlaceBidResponse): MsgPlaceBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPlaceBidResponseAminoMsg): MsgPlaceBidResponse {
    return MsgPlaceBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPlaceBidResponseProtoMsg): MsgPlaceBidResponse {
    return MsgPlaceBidResponse.decode(message.value);
  },
  toProto(message: MsgPlaceBidResponse): Uint8Array {
    return MsgPlaceBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPlaceBidResponse): MsgPlaceBidResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBidResponse",
      value: MsgPlaceBidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};