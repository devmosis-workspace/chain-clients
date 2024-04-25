import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
    nextAuctionId: bigint;
    params: Params;
    /** Genesis auctions */
    auctions: (Any)[] | Any[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.auction.v1beta1.GenesisState";
    value: Uint8Array;
}
export type GenesisStateEncoded = Omit<GenesisState, "auctions"> & {
    /** Genesis auctions */ auctions: (AnyProtoMsg)[];
};
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateAmino {
    next_auction_id?: string;
    params?: ParamsAmino;
    /** Genesis auctions */
    auctions?: AnyAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kava.auction.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
    next_auction_id: bigint;
    params: ParamsSDKType;
    auctions: (AnySDKType)[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
    maxAuctionDuration: Duration;
    forwardBidDuration: Duration;
    reverseBidDuration: Duration;
    incrementSurplus: Uint8Array;
    incrementDebt: Uint8Array;
    incrementCollateral: Uint8Array;
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.auction.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsAmino {
    max_auction_duration?: DurationAmino;
    forward_bid_duration?: DurationAmino;
    reverse_bid_duration?: DurationAmino;
    increment_surplus?: string;
    increment_debt?: string;
    increment_collateral?: string;
}
export interface ParamsAminoMsg {
    type: "/kava.auction.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsSDKType {
    max_auction_duration: DurationSDKType;
    forward_bid_duration: DurationSDKType;
    reverse_bid_duration: DurationSDKType;
    increment_surplus: Uint8Array;
    increment_debt: Uint8Array;
    increment_collateral: Uint8Array;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const GenesisAuction_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const GenesisAuction_FromAmino: (content: AnyAmino) => Any;
export declare const GenesisAuction_ToAmino: (content: Any) => AnyAmino;
