import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Order, OrderAmino, OrderSDKType } from "./order";
import { Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Bid, BidAmino, BidSDKType } from "./bid";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisState {
    params: Params;
    orders: Order[];
    leases: Lease[];
    bids: Bid[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.market.v1beta3.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    orders?: OrderAmino[];
    leases?: LeaseAmino[];
    bids?: BidAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/akash.market.v1beta3.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    orders: OrderSDKType[];
    leases: LeaseSDKType[];
    bids: BidSDKType[];
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
