import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
/** BaseAuction defines common attributes of all auctions */
export interface BaseAuction {
  $typeUrl?: string;
  id: bigint;
  initiator: string;
  lot: Coin;
  bidder: Uint8Array;
  bid: Coin;
  hasReceivedBids: boolean;
  endTime: Timestamp;
  maxEndTime: Timestamp;
}
export interface BaseAuctionProtoMsg {
  typeUrl: "/kava.auction.v1beta1.BaseAuction";
  value: Uint8Array;
}
/** BaseAuction defines common attributes of all auctions */
export interface BaseAuctionAmino {
  id: string;
  initiator: string;
  lot?: CoinAmino;
  bidder: Uint8Array;
  bid?: CoinAmino;
  has_received_bids: boolean;
  end_time?: TimestampAmino;
  max_end_time?: TimestampAmino;
}
export interface BaseAuctionAminoMsg {
  type: "/kava.auction.v1beta1.BaseAuction";
  value: BaseAuctionAmino;
}
/** BaseAuction defines common attributes of all auctions */
export interface BaseAuctionSDKType {
  $typeUrl?: string;
  id: bigint;
  initiator: string;
  lot: CoinSDKType;
  bidder: Uint8Array;
  bid: CoinSDKType;
  has_received_bids: boolean;
  end_time: TimestampSDKType;
  max_end_time: TimestampSDKType;
}
/**
 * SurplusAuction is a forward auction that burns what it receives from bids.
 * It is normally used to sell off excess pegged asset acquired by the CDP system.
 */
export interface SurplusAuction {
  $typeUrl?: string;
  baseAuction: BaseAuction;
}
export interface SurplusAuctionProtoMsg {
  typeUrl: "/kava.auction.v1beta1.SurplusAuction";
  value: Uint8Array;
}
/**
 * SurplusAuction is a forward auction that burns what it receives from bids.
 * It is normally used to sell off excess pegged asset acquired by the CDP system.
 */
export interface SurplusAuctionAmino {
  base_auction?: BaseAuctionAmino;
}
export interface SurplusAuctionAminoMsg {
  type: "/kava.auction.v1beta1.SurplusAuction";
  value: SurplusAuctionAmino;
}
/**
 * SurplusAuction is a forward auction that burns what it receives from bids.
 * It is normally used to sell off excess pegged asset acquired by the CDP system.
 */
export interface SurplusAuctionSDKType {
  $typeUrl?: string;
  base_auction: BaseAuctionSDKType;
}
/**
 * DebtAuction is a reverse auction that mints what it pays out.
 * It is normally used to acquire pegged asset to cover the CDP system's debts that were not covered by selling
 * collateral.
 */
export interface DebtAuction {
  $typeUrl?: string;
  baseAuction: BaseAuction;
  correspondingDebt: Coin;
}
export interface DebtAuctionProtoMsg {
  typeUrl: "/kava.auction.v1beta1.DebtAuction";
  value: Uint8Array;
}
/**
 * DebtAuction is a reverse auction that mints what it pays out.
 * It is normally used to acquire pegged asset to cover the CDP system's debts that were not covered by selling
 * collateral.
 */
export interface DebtAuctionAmino {
  base_auction?: BaseAuctionAmino;
  corresponding_debt?: CoinAmino;
}
export interface DebtAuctionAminoMsg {
  type: "/kava.auction.v1beta1.DebtAuction";
  value: DebtAuctionAmino;
}
/**
 * DebtAuction is a reverse auction that mints what it pays out.
 * It is normally used to acquire pegged asset to cover the CDP system's debts that were not covered by selling
 * collateral.
 */
export interface DebtAuctionSDKType {
  $typeUrl?: string;
  base_auction: BaseAuctionSDKType;
  corresponding_debt: CoinSDKType;
}
/**
 * CollateralAuction is a two phase auction.
 * Initially, in forward auction phase, bids can be placed up to a max bid.
 * Then it switches to a reverse auction phase, where the initial amount up for auction is bid down.
 * Unsold Lot is sent to LotReturns, being divided among the addresses by weight.
 * Collateral auctions are normally used to sell off collateral seized from CDPs.
 */
export interface CollateralAuction {
  $typeUrl?: string;
  baseAuction: BaseAuction;
  correspondingDebt: Coin;
  maxBid: Coin;
  lotReturns: WeightedAddresses;
}
export interface CollateralAuctionProtoMsg {
  typeUrl: "/kava.auction.v1beta1.CollateralAuction";
  value: Uint8Array;
}
/**
 * CollateralAuction is a two phase auction.
 * Initially, in forward auction phase, bids can be placed up to a max bid.
 * Then it switches to a reverse auction phase, where the initial amount up for auction is bid down.
 * Unsold Lot is sent to LotReturns, being divided among the addresses by weight.
 * Collateral auctions are normally used to sell off collateral seized from CDPs.
 */
export interface CollateralAuctionAmino {
  base_auction?: BaseAuctionAmino;
  corresponding_debt?: CoinAmino;
  max_bid?: CoinAmino;
  lot_returns?: WeightedAddressesAmino;
}
export interface CollateralAuctionAminoMsg {
  type: "/kava.auction.v1beta1.CollateralAuction";
  value: CollateralAuctionAmino;
}
/**
 * CollateralAuction is a two phase auction.
 * Initially, in forward auction phase, bids can be placed up to a max bid.
 * Then it switches to a reverse auction phase, where the initial amount up for auction is bid down.
 * Unsold Lot is sent to LotReturns, being divided among the addresses by weight.
 * Collateral auctions are normally used to sell off collateral seized from CDPs.
 */
export interface CollateralAuctionSDKType {
  $typeUrl?: string;
  base_auction: BaseAuctionSDKType;
  corresponding_debt: CoinSDKType;
  max_bid: CoinSDKType;
  lot_returns: WeightedAddressesSDKType;
}
/** WeightedAddresses is a type for storing some addresses and associated weights. */
export interface WeightedAddresses {
  addresses: Uint8Array[];
  weights: Uint8Array[];
}
export interface WeightedAddressesProtoMsg {
  typeUrl: "/kava.auction.v1beta1.WeightedAddresses";
  value: Uint8Array;
}
/** WeightedAddresses is a type for storing some addresses and associated weights. */
export interface WeightedAddressesAmino {
  addresses: Uint8Array[];
  weights: Uint8Array[];
}
export interface WeightedAddressesAminoMsg {
  type: "/kava.auction.v1beta1.WeightedAddresses";
  value: WeightedAddressesAmino;
}
/** WeightedAddresses is a type for storing some addresses and associated weights. */
export interface WeightedAddressesSDKType {
  addresses: Uint8Array[];
  weights: Uint8Array[];
}
function createBaseBaseAuction(): BaseAuction {
  return {
    $typeUrl: "/kava.auction.v1beta1.BaseAuction",
    id: BigInt(0),
    initiator: "",
    lot: Coin.fromPartial({}),
    bidder: new Uint8Array(),
    bid: Coin.fromPartial({}),
    hasReceivedBids: false,
    endTime: Timestamp.fromPartial({}),
    maxEndTime: Timestamp.fromPartial({})
  };
}
export const BaseAuction = {
  typeUrl: "/kava.auction.v1beta1.BaseAuction",
  encode(message: BaseAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.initiator !== "") {
      writer.uint32(18).string(message.initiator);
    }
    if (message.lot !== undefined) {
      Coin.encode(message.lot, writer.uint32(26).fork()).ldelim();
    }
    if (message.bidder.length !== 0) {
      writer.uint32(34).bytes(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(42).fork()).ldelim();
    }
    if (message.hasReceivedBids === true) {
      writer.uint32(48).bool(message.hasReceivedBids);
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.maxEndTime !== undefined) {
      Timestamp.encode(message.maxEndTime, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BaseAuction {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      lot: isSet(object.lot) ? Coin.fromJSON(object.lot) : undefined,
      bidder: isSet(object.bidder) ? bytesFromBase64(object.bidder) : new Uint8Array(),
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
      hasReceivedBids: isSet(object.hasReceivedBids) ? Boolean(object.hasReceivedBids) : false,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      maxEndTime: isSet(object.maxEndTime) ? fromJsonTimestamp(object.maxEndTime) : undefined
    };
  },
  fromPartial(object: Partial<BaseAuction>): BaseAuction {
    const message = createBaseBaseAuction();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.initiator = object.initiator ?? "";
    message.lot = object.lot !== undefined && object.lot !== null ? Coin.fromPartial(object.lot) : undefined;
    message.bidder = object.bidder ?? new Uint8Array();
    message.bid = object.bid !== undefined && object.bid !== null ? Coin.fromPartial(object.bid) : undefined;
    message.hasReceivedBids = object.hasReceivedBids ?? false;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.maxEndTime = object.maxEndTime !== undefined && object.maxEndTime !== null ? Timestamp.fromPartial(object.maxEndTime) : undefined;
    return message;
  },
  fromAmino(object: BaseAuctionAmino): BaseAuction {
    return {
      id: BigInt(object.id),
      initiator: object.initiator,
      lot: object?.lot ? Coin.fromAmino(object.lot) : undefined,
      bidder: object.bidder,
      bid: object?.bid ? Coin.fromAmino(object.bid) : undefined,
      hasReceivedBids: object.has_received_bids,
      endTime: object.end_time,
      maxEndTime: object.max_end_time
    };
  },
  toAmino(message: BaseAuction): BaseAuctionAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.initiator = message.initiator;
    obj.lot = message.lot ? Coin.toAmino(message.lot) : undefined;
    obj.bidder = message.bidder;
    obj.bid = message.bid ? Coin.toAmino(message.bid) : undefined;
    obj.has_received_bids = message.hasReceivedBids;
    obj.end_time = message.endTime;
    obj.max_end_time = message.maxEndTime;
    return obj;
  },
  fromAminoMsg(object: BaseAuctionAminoMsg): BaseAuction {
    return BaseAuction.fromAmino(object.value);
  },
  fromProtoMsg(message: BaseAuctionProtoMsg): BaseAuction {
    return BaseAuction.decode(message.value);
  },
  toProto(message: BaseAuction): Uint8Array {
    return BaseAuction.encode(message).finish();
  },
  toProtoMsg(message: BaseAuction): BaseAuctionProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.BaseAuction",
      value: BaseAuction.encode(message).finish()
    };
  }
};
function createBaseSurplusAuction(): SurplusAuction {
  return {
    $typeUrl: "/kava.auction.v1beta1.SurplusAuction",
    baseAuction: BaseAuction.fromPartial({})
  };
}
export const SurplusAuction = {
  typeUrl: "/kava.auction.v1beta1.SurplusAuction",
  encode(message: SurplusAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAuction !== undefined) {
      BaseAuction.encode(message.baseAuction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SurplusAuction {
    return {
      baseAuction: isSet(object.baseAuction) ? BaseAuction.fromJSON(object.baseAuction) : undefined
    };
  },
  fromPartial(object: Partial<SurplusAuction>): SurplusAuction {
    const message = createBaseSurplusAuction();
    message.baseAuction = object.baseAuction !== undefined && object.baseAuction !== null ? BaseAuction.fromPartial(object.baseAuction) : undefined;
    return message;
  },
  fromAmino(object: SurplusAuctionAmino): SurplusAuction {
    return {
      baseAuction: object?.base_auction ? BaseAuction.fromAmino(object.base_auction) : undefined
    };
  },
  toAmino(message: SurplusAuction): SurplusAuctionAmino {
    const obj: any = {};
    obj.base_auction = message.baseAuction ? BaseAuction.toAmino(message.baseAuction) : undefined;
    return obj;
  },
  fromAminoMsg(object: SurplusAuctionAminoMsg): SurplusAuction {
    return SurplusAuction.fromAmino(object.value);
  },
  fromProtoMsg(message: SurplusAuctionProtoMsg): SurplusAuction {
    return SurplusAuction.decode(message.value);
  },
  toProto(message: SurplusAuction): Uint8Array {
    return SurplusAuction.encode(message).finish();
  },
  toProtoMsg(message: SurplusAuction): SurplusAuctionProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.SurplusAuction",
      value: SurplusAuction.encode(message).finish()
    };
  }
};
function createBaseDebtAuction(): DebtAuction {
  return {
    $typeUrl: "/kava.auction.v1beta1.DebtAuction",
    baseAuction: BaseAuction.fromPartial({}),
    correspondingDebt: Coin.fromPartial({})
  };
}
export const DebtAuction = {
  typeUrl: "/kava.auction.v1beta1.DebtAuction",
  encode(message: DebtAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAuction !== undefined) {
      BaseAuction.encode(message.baseAuction, writer.uint32(10).fork()).ldelim();
    }
    if (message.correspondingDebt !== undefined) {
      Coin.encode(message.correspondingDebt, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DebtAuction {
    return {
      baseAuction: isSet(object.baseAuction) ? BaseAuction.fromJSON(object.baseAuction) : undefined,
      correspondingDebt: isSet(object.correspondingDebt) ? Coin.fromJSON(object.correspondingDebt) : undefined
    };
  },
  fromPartial(object: Partial<DebtAuction>): DebtAuction {
    const message = createBaseDebtAuction();
    message.baseAuction = object.baseAuction !== undefined && object.baseAuction !== null ? BaseAuction.fromPartial(object.baseAuction) : undefined;
    message.correspondingDebt = object.correspondingDebt !== undefined && object.correspondingDebt !== null ? Coin.fromPartial(object.correspondingDebt) : undefined;
    return message;
  },
  fromAmino(object: DebtAuctionAmino): DebtAuction {
    return {
      baseAuction: object?.base_auction ? BaseAuction.fromAmino(object.base_auction) : undefined,
      correspondingDebt: object?.corresponding_debt ? Coin.fromAmino(object.corresponding_debt) : undefined
    };
  },
  toAmino(message: DebtAuction): DebtAuctionAmino {
    const obj: any = {};
    obj.base_auction = message.baseAuction ? BaseAuction.toAmino(message.baseAuction) : undefined;
    obj.corresponding_debt = message.correspondingDebt ? Coin.toAmino(message.correspondingDebt) : undefined;
    return obj;
  },
  fromAminoMsg(object: DebtAuctionAminoMsg): DebtAuction {
    return DebtAuction.fromAmino(object.value);
  },
  fromProtoMsg(message: DebtAuctionProtoMsg): DebtAuction {
    return DebtAuction.decode(message.value);
  },
  toProto(message: DebtAuction): Uint8Array {
    return DebtAuction.encode(message).finish();
  },
  toProtoMsg(message: DebtAuction): DebtAuctionProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.DebtAuction",
      value: DebtAuction.encode(message).finish()
    };
  }
};
function createBaseCollateralAuction(): CollateralAuction {
  return {
    $typeUrl: "/kava.auction.v1beta1.CollateralAuction",
    baseAuction: BaseAuction.fromPartial({}),
    correspondingDebt: Coin.fromPartial({}),
    maxBid: Coin.fromPartial({}),
    lotReturns: WeightedAddresses.fromPartial({})
  };
}
export const CollateralAuction = {
  typeUrl: "/kava.auction.v1beta1.CollateralAuction",
  encode(message: CollateralAuction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAuction !== undefined) {
      BaseAuction.encode(message.baseAuction, writer.uint32(10).fork()).ldelim();
    }
    if (message.correspondingDebt !== undefined) {
      Coin.encode(message.correspondingDebt, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxBid !== undefined) {
      Coin.encode(message.maxBid, writer.uint32(26).fork()).ldelim();
    }
    if (message.lotReturns !== undefined) {
      WeightedAddresses.encode(message.lotReturns, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CollateralAuction {
    return {
      baseAuction: isSet(object.baseAuction) ? BaseAuction.fromJSON(object.baseAuction) : undefined,
      correspondingDebt: isSet(object.correspondingDebt) ? Coin.fromJSON(object.correspondingDebt) : undefined,
      maxBid: isSet(object.maxBid) ? Coin.fromJSON(object.maxBid) : undefined,
      lotReturns: isSet(object.lotReturns) ? WeightedAddresses.fromJSON(object.lotReturns) : undefined
    };
  },
  fromPartial(object: Partial<CollateralAuction>): CollateralAuction {
    const message = createBaseCollateralAuction();
    message.baseAuction = object.baseAuction !== undefined && object.baseAuction !== null ? BaseAuction.fromPartial(object.baseAuction) : undefined;
    message.correspondingDebt = object.correspondingDebt !== undefined && object.correspondingDebt !== null ? Coin.fromPartial(object.correspondingDebt) : undefined;
    message.maxBid = object.maxBid !== undefined && object.maxBid !== null ? Coin.fromPartial(object.maxBid) : undefined;
    message.lotReturns = object.lotReturns !== undefined && object.lotReturns !== null ? WeightedAddresses.fromPartial(object.lotReturns) : undefined;
    return message;
  },
  fromAmino(object: CollateralAuctionAmino): CollateralAuction {
    return {
      baseAuction: object?.base_auction ? BaseAuction.fromAmino(object.base_auction) : undefined,
      correspondingDebt: object?.corresponding_debt ? Coin.fromAmino(object.corresponding_debt) : undefined,
      maxBid: object?.max_bid ? Coin.fromAmino(object.max_bid) : undefined,
      lotReturns: object?.lot_returns ? WeightedAddresses.fromAmino(object.lot_returns) : undefined
    };
  },
  toAmino(message: CollateralAuction): CollateralAuctionAmino {
    const obj: any = {};
    obj.base_auction = message.baseAuction ? BaseAuction.toAmino(message.baseAuction) : undefined;
    obj.corresponding_debt = message.correspondingDebt ? Coin.toAmino(message.correspondingDebt) : undefined;
    obj.max_bid = message.maxBid ? Coin.toAmino(message.maxBid) : undefined;
    obj.lot_returns = message.lotReturns ? WeightedAddresses.toAmino(message.lotReturns) : undefined;
    return obj;
  },
  fromAminoMsg(object: CollateralAuctionAminoMsg): CollateralAuction {
    return CollateralAuction.fromAmino(object.value);
  },
  fromProtoMsg(message: CollateralAuctionProtoMsg): CollateralAuction {
    return CollateralAuction.decode(message.value);
  },
  toProto(message: CollateralAuction): Uint8Array {
    return CollateralAuction.encode(message).finish();
  },
  toProtoMsg(message: CollateralAuction): CollateralAuctionProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.CollateralAuction",
      value: CollateralAuction.encode(message).finish()
    };
  }
};
function createBaseWeightedAddresses(): WeightedAddresses {
  return {
    addresses: [],
    weights: []
  };
}
export const WeightedAddresses = {
  typeUrl: "/kava.auction.v1beta1.WeightedAddresses",
  encode(message: WeightedAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).bytes(v!);
    }
    for (const v of message.weights) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): WeightedAddresses {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => bytesFromBase64(e)) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<WeightedAddresses>): WeightedAddresses {
    const message = createBaseWeightedAddresses();
    message.addresses = object.addresses?.map(e => e) || [];
    message.weights = object.weights?.map(e => e) || [];
    return message;
  },
  fromAmino(object: WeightedAddressesAmino): WeightedAddresses {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => e) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => e) : []
    };
  },
  toAmino(message: WeightedAddresses): WeightedAddressesAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    if (message.weights) {
      obj.weights = message.weights.map(e => e);
    } else {
      obj.weights = [];
    }
    return obj;
  },
  fromAminoMsg(object: WeightedAddressesAminoMsg): WeightedAddresses {
    return WeightedAddresses.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedAddressesProtoMsg): WeightedAddresses {
    return WeightedAddresses.decode(message.value);
  },
  toProto(message: WeightedAddresses): Uint8Array {
    return WeightedAddresses.encode(message).finish();
  },
  toProtoMsg(message: WeightedAddresses): WeightedAddressesProtoMsg {
    return {
      typeUrl: "/kava.auction.v1beta1.WeightedAddresses",
      value: WeightedAddresses.encode(message).finish()
    };
  }
};