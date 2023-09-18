import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
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
export declare const BaseAuction: {
    typeUrl: string;
    encode(message: BaseAuction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BaseAuction;
    fromPartial(object: Partial<BaseAuction>): BaseAuction;
    fromAmino(object: BaseAuctionAmino): BaseAuction;
    toAmino(message: BaseAuction): BaseAuctionAmino;
    fromAminoMsg(object: BaseAuctionAminoMsg): BaseAuction;
    fromProtoMsg(message: BaseAuctionProtoMsg): BaseAuction;
    toProto(message: BaseAuction): Uint8Array;
    toProtoMsg(message: BaseAuction): BaseAuctionProtoMsg;
};
export declare const SurplusAuction: {
    typeUrl: string;
    encode(message: SurplusAuction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SurplusAuction;
    fromPartial(object: Partial<SurplusAuction>): SurplusAuction;
    fromAmino(object: SurplusAuctionAmino): SurplusAuction;
    toAmino(message: SurplusAuction): SurplusAuctionAmino;
    fromAminoMsg(object: SurplusAuctionAminoMsg): SurplusAuction;
    fromProtoMsg(message: SurplusAuctionProtoMsg): SurplusAuction;
    toProto(message: SurplusAuction): Uint8Array;
    toProtoMsg(message: SurplusAuction): SurplusAuctionProtoMsg;
};
export declare const DebtAuction: {
    typeUrl: string;
    encode(message: DebtAuction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DebtAuction;
    fromPartial(object: Partial<DebtAuction>): DebtAuction;
    fromAmino(object: DebtAuctionAmino): DebtAuction;
    toAmino(message: DebtAuction): DebtAuctionAmino;
    fromAminoMsg(object: DebtAuctionAminoMsg): DebtAuction;
    fromProtoMsg(message: DebtAuctionProtoMsg): DebtAuction;
    toProto(message: DebtAuction): Uint8Array;
    toProtoMsg(message: DebtAuction): DebtAuctionProtoMsg;
};
export declare const CollateralAuction: {
    typeUrl: string;
    encode(message: CollateralAuction, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CollateralAuction;
    fromPartial(object: Partial<CollateralAuction>): CollateralAuction;
    fromAmino(object: CollateralAuctionAmino): CollateralAuction;
    toAmino(message: CollateralAuction): CollateralAuctionAmino;
    fromAminoMsg(object: CollateralAuctionAminoMsg): CollateralAuction;
    fromProtoMsg(message: CollateralAuctionProtoMsg): CollateralAuction;
    toProto(message: CollateralAuction): Uint8Array;
    toProtoMsg(message: CollateralAuction): CollateralAuctionProtoMsg;
};
export declare const WeightedAddresses: {
    typeUrl: string;
    encode(message: WeightedAddresses, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WeightedAddresses;
    fromPartial(object: Partial<WeightedAddresses>): WeightedAddresses;
    fromAmino(object: WeightedAddressesAmino): WeightedAddresses;
    toAmino(message: WeightedAddresses): WeightedAddressesAmino;
    fromAminoMsg(object: WeightedAddressesAminoMsg): WeightedAddresses;
    fromProtoMsg(message: WeightedAddressesProtoMsg): WeightedAddresses;
    toProto(message: WeightedAddresses): Uint8Array;
    toProtoMsg(message: WeightedAddresses): WeightedAddressesProtoMsg;
};
