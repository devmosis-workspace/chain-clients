import { Params, ParamsAmino, ParamsSDKType, Bid, BidAmino, BidSDKType } from "./auction";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to auction. */
    params: Params;
    /** current auction round */
    auctionRound: bigint;
    /** current highest bid */
    highestBid: Bid;
    /** auction ending timestamp */
    auctionEndingTimestamp: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.auction.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of related to auction. */
    params?: ParamsAmino;
    /** current auction round */
    auction_round: string;
    /** current highest bid */
    highest_bid?: BidAmino;
    /** auction ending timestamp */
    auction_ending_timestamp: string;
}
export interface GenesisStateAminoMsg {
    type: "/injective.auction.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    auction_round: bigint;
    highest_bid: BidSDKType;
    auction_ending_timestamp: bigint;
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
