import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the pool module's genesis state. */
export interface GenesisState {
    /** params ... */
    params: Params;
    /** pool_list ... */
    poolList: Pool[];
    /** pool_count ... */
    poolCount: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kyve.pool.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the pool module's genesis state. */
export interface GenesisStateAmino {
    /** params ... */
    params?: ParamsAmino;
    /** pool_list ... */
    pool_list: PoolAmino[];
    /** pool_count ... */
    pool_count: string;
}
export interface GenesisStateAminoMsg {
    type: "/kyve.pool.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the pool module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    pool_list: PoolSDKType[];
    pool_count: bigint;
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
