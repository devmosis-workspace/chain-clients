import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BaseAuction defines common attributes of all auctions */
export interface BaseAuction {
  id: Long;
  initiator: string;
  lot?: Coin;
  bidder: Uint8Array;
  bid?: Coin;
  hasReceivedBids: boolean;
  endTime?: Timestamp;
  maxEndTime?: Timestamp;
}
/** BaseAuction defines common attributes of all auctions */
export interface BaseAuctionSDKType {
  id: Long;
  initiator: string;
  lot?: CoinSDKType;
  bidder: Uint8Array;
  bid?: CoinSDKType;
  has_received_bids: boolean;
  end_time?: TimestampSDKType;
  max_end_time?: TimestampSDKType;
}
/**
 * SurplusAuction is a forward auction that burns what it receives from bids.
 * It is normally used to sell off excess pegged asset acquired by the CDP system.
 */
export interface SurplusAuction {
  baseAuction?: BaseAuction;
}
/**
 * SurplusAuction is a forward auction that burns what it receives from bids.
 * It is normally used to sell off excess pegged asset acquired by the CDP system.
 */
export interface SurplusAuctionSDKType {
  base_auction?: BaseAuctionSDKType;
}
/**
 * DebtAuction is a reverse auction that mints what it pays out.
 * It is normally used to acquire pegged asset to cover the CDP system's debts that were not covered by selling
 * collateral.
 */
export interface DebtAuction {
  baseAuction?: BaseAuction;
  correspondingDebt?: Coin;
}
/**
 * DebtAuction is a reverse auction that mints what it pays out.
 * It is normally used to acquire pegged asset to cover the CDP system's debts that were not covered by selling
 * collateral.
 */
export interface DebtAuctionSDKType {
  base_auction?: BaseAuctionSDKType;
  corresponding_debt?: CoinSDKType;
}
/**
 * CollateralAuction is a two phase auction.
 * Initially, in forward auction phase, bids can be placed up to a max bid.
 * Then it switches to a reverse auction phase, where the initial amount up for auction is bid down.
 * Unsold Lot is sent to LotReturns, being divided among the addresses by weight.
 * Collateral auctions are normally used to sell off collateral seized from CDPs.
 */
export interface CollateralAuction {
  baseAuction?: BaseAuction;
  correspondingDebt?: Coin;
  maxBid?: Coin;
  lotReturns?: WeightedAddresses;
}
/**
 * CollateralAuction is a two phase auction.
 * Initially, in forward auction phase, bids can be placed up to a max bid.
 * Then it switches to a reverse auction phase, where the initial amount up for auction is bid down.
 * Unsold Lot is sent to LotReturns, being divided among the addresses by weight.
 * Collateral auctions are normally used to sell off collateral seized from CDPs.
 */
export interface CollateralAuctionSDKType {
  base_auction?: BaseAuctionSDKType;
  corresponding_debt?: CoinSDKType;
  max_bid?: CoinSDKType;
  lot_returns?: WeightedAddressesSDKType;
}
/** WeightedAddresses is a type for storing some addresses and associated weights. */
export interface WeightedAddresses {
  addresses: Uint8Array[];
  weights: Uint8Array[];
}
/** WeightedAddresses is a type for storing some addresses and associated weights. */
export interface WeightedAddressesSDKType {
  addresses: Uint8Array[];
  weights: Uint8Array[];
}
function createBaseBaseAuction(): BaseAuction {
  return {
    id: Long.UZERO,
    initiator: "",
    lot: undefined,
    bidder: new Uint8Array(),
    bid: undefined,
    hasReceivedBids: false,
    endTime: undefined,
    maxEndTime: undefined
  };
}
export const BaseAuction = {
  encode(message: BaseAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
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
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.initiator = object.initiator ?? "";
    message.lot = object.lot !== undefined && object.lot !== null ? Coin.fromPartial(object.lot) : undefined;
    message.bidder = object.bidder ?? new Uint8Array();
    message.bid = object.bid !== undefined && object.bid !== null ? Coin.fromPartial(object.bid) : undefined;
    message.hasReceivedBids = object.hasReceivedBids ?? false;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.maxEndTime = object.maxEndTime !== undefined && object.maxEndTime !== null ? Timestamp.fromPartial(object.maxEndTime) : undefined;
    return message;
  }
};
function createBaseSurplusAuction(): SurplusAuction {
  return {
    baseAuction: undefined
  };
}
export const SurplusAuction = {
  encode(message: SurplusAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDebtAuction(): DebtAuction {
  return {
    baseAuction: undefined,
    correspondingDebt: undefined
  };
}
export const DebtAuction = {
  encode(message: DebtAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCollateralAuction(): CollateralAuction {
  return {
    baseAuction: undefined,
    correspondingDebt: undefined,
    maxBid: undefined,
    lotReturns: undefined
  };
}
export const CollateralAuction = {
  encode(message: CollateralAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseWeightedAddresses(): WeightedAddresses {
  return {
    addresses: [],
    weights: []
  };
}
export const WeightedAddresses = {
  encode(message: WeightedAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};