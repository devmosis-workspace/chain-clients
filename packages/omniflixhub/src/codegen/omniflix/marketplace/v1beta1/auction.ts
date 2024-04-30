import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { WeightedAddress, WeightedAddressAmino, WeightedAddressSDKType } from "./listing";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export enum AuctionStatus {
  AUCTION_STATUS_UNSPECIFIED = 0,
  AUCTION_STATUS_INACTIVE = 1,
  AUCTION_STATUS_ACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const AuctionStatusSDKType = AuctionStatus;
export const AuctionStatusAmino = AuctionStatus;
export function auctionStatusFromJSON(object: any): AuctionStatus {
  switch (object) {
    case 0:
    case "AUCTION_STATUS_UNSPECIFIED":
      return AuctionStatus.AUCTION_STATUS_UNSPECIFIED;
    case 1:
    case "AUCTION_STATUS_INACTIVE":
      return AuctionStatus.AUCTION_STATUS_INACTIVE;
    case 2:
    case "AUCTION_STATUS_ACTIVE":
      return AuctionStatus.AUCTION_STATUS_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuctionStatus.UNRECOGNIZED;
  }
}
export function auctionStatusToJSON(object: AuctionStatus): string {
  switch (object) {
    case AuctionStatus.AUCTION_STATUS_UNSPECIFIED:
      return "AUCTION_STATUS_UNSPECIFIED";
    case AuctionStatus.AUCTION_STATUS_INACTIVE:
      return "AUCTION_STATUS_INACTIVE";
    case AuctionStatus.AUCTION_STATUS_ACTIVE:
      return "AUCTION_STATUS_ACTIVE";
    case AuctionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface AuctionListing {
  id: bigint;
  nftId: string;
  denomId: string;
  startPrice: Coin;
  startTime: Timestamp;
  endTime?: Timestamp;
  owner: string;
  incrementPercentage: string;
  whitelistAccounts: string[];
  splitShares: WeightedAddress[];
}
export interface AuctionListingProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.AuctionListing";
  value: Uint8Array;
}
export interface AuctionListingAmino {
  id?: string;
  nft_id?: string;
  denom_id?: string;
  start_price?: CoinAmino;
  start_time?: string;
  end_time?: string;
  owner?: string;
  increment_percentage?: string;
  whitelist_accounts?: string[];
  split_shares?: WeightedAddressAmino[];
}
export interface AuctionListingAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.AuctionListing";
  value: AuctionListingAmino;
}
export interface AuctionListingSDKType {
  id: bigint;
  nft_id: string;
  denom_id: string;
  start_price: CoinSDKType;
  start_time: TimestampSDKType;
  end_time?: TimestampSDKType;
  owner: string;
  increment_percentage: string;
  whitelist_accounts: string[];
  split_shares: WeightedAddressSDKType[];
}
export interface Bid {
  auctionId: bigint;
  bidder: string;
  amount: Coin;
  time: Timestamp;
}
export interface BidProtoMsg {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Bid";
  value: Uint8Array;
}
export interface BidAmino {
  auction_id?: string;
  bidder?: string;
  amount?: CoinAmino;
  time?: string;
}
export interface BidAminoMsg {
  type: "/OmniFlix.marketplace.v1beta1.Bid";
  value: BidAmino;
}
export interface BidSDKType {
  auction_id: bigint;
  bidder: string;
  amount: CoinSDKType;
  time: TimestampSDKType;
}
function createBaseAuctionListing(): AuctionListing {
  return {
    id: BigInt(0),
    nftId: "",
    denomId: "",
    startPrice: Coin.fromPartial({}),
    startTime: Timestamp.fromPartial({}),
    endTime: undefined,
    owner: "",
    incrementPercentage: "",
    whitelistAccounts: [],
    splitShares: []
  };
}
export const AuctionListing = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.AuctionListing",
  encode(message: AuctionListing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.denomId !== "") {
      writer.uint32(26).string(message.denomId);
    }
    if (message.startPrice !== undefined) {
      Coin.encode(message.startPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    if (message.incrementPercentage !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.incrementPercentage, 18).atomics);
    }
    for (const v of message.whitelistAccounts) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.splitShares) {
      WeightedAddress.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AuctionListing {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      startPrice: isSet(object.startPrice) ? Coin.fromJSON(object.startPrice) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : "",
      incrementPercentage: isSet(object.incrementPercentage) ? String(object.incrementPercentage) : "",
      whitelistAccounts: Array.isArray(object?.whitelistAccounts) ? object.whitelistAccounts.map((e: any) => String(e)) : [],
      splitShares: Array.isArray(object?.splitShares) ? object.splitShares.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AuctionListing>): AuctionListing {
    const message = createBaseAuctionListing();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.nftId = object.nftId ?? "";
    message.denomId = object.denomId ?? "";
    message.startPrice = object.startPrice !== undefined && object.startPrice !== null ? Coin.fromPartial(object.startPrice) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.owner = object.owner ?? "";
    message.incrementPercentage = object.incrementPercentage ?? "";
    message.whitelistAccounts = object.whitelistAccounts?.map(e => e) || [];
    message.splitShares = object.splitShares?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AuctionListingAmino): AuctionListing {
    const message = createBaseAuctionListing();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.start_price !== undefined && object.start_price !== null) {
      message.startPrice = Coin.fromAmino(object.start_price);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.increment_percentage !== undefined && object.increment_percentage !== null) {
      message.incrementPercentage = object.increment_percentage;
    }
    message.whitelistAccounts = object.whitelist_accounts?.map(e => e) || [];
    message.splitShares = object.split_shares?.map(e => WeightedAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AuctionListing): AuctionListingAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.nft_id = message.nftId;
    obj.denom_id = message.denomId;
    obj.start_price = message.startPrice ? Coin.toAmino(message.startPrice) : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    obj.owner = message.owner;
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
    return obj;
  },
  fromAminoMsg(object: AuctionListingAminoMsg): AuctionListing {
    return AuctionListing.fromAmino(object.value);
  },
  fromProtoMsg(message: AuctionListingProtoMsg): AuctionListing {
    return AuctionListing.decode(message.value);
  },
  toProto(message: AuctionListing): Uint8Array {
    return AuctionListing.encode(message).finish();
  },
  toProtoMsg(message: AuctionListing): AuctionListingProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.AuctionListing",
      value: AuctionListing.encode(message).finish()
    };
  }
};
function createBaseBid(): Bid {
  return {
    auctionId: BigInt(0),
    bidder: "",
    amount: Coin.fromPartial({}),
    time: Timestamp.fromPartial({})
  };
}
export const Bid = {
  typeUrl: "/OmniFlix.marketplace.v1beta1.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Bid {
    return {
      auctionId: isSet(object.auctionId) ? BigInt(object.auctionId.toString()) : BigInt(0),
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined
    };
  },
  fromPartial(object: Partial<Bid>): Bid {
    const message = createBaseBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? BigInt(object.auctionId.toString()) : BigInt(0);
    message.bidder = object.bidder ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    return message;
  },
  fromAmino(object: BidAmino): Bid {
    const message = createBaseBid();
    if (object.auction_id !== undefined && object.auction_id !== null) {
      message.auctionId = BigInt(object.auction_id);
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.auction_id = message.auctionId ? message.auctionId.toString() : undefined;
    obj.bidder = message.bidder;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/OmniFlix.marketplace.v1beta1.Bid",
      value: Bid.encode(message).finish()
    };
  }
};