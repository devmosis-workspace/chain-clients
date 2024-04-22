import { Order, OrderAmino, OrderSDKType } from "./order";
import { Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisState {
    orders: Order[];
    leases: Lease[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.market.v1beta2.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateAmino {
    orders?: OrderAmino[];
    leases?: LeaseAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/akash.market.v1beta2.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateSDKType {
    orders: OrderSDKType[];
    leases: LeaseSDKType[];
    params: ParamsSDKType;
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
