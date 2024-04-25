import { Params, ParamsAmino, ParamsSDKType, AtomicSwap, AtomicSwapAmino, AtomicSwapSDKType, AssetSupply, AssetSupplyAmino, AssetSupplySDKType } from "./bep3";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** atomic_swaps represents the state of stored atomic swaps */
    atomicSwaps: AtomicSwap[];
    /** supplies represents the supply information of each atomic swap */
    supplies: AssetSupply[];
    /** previous_block_time represents the time of the previous block */
    previousBlockTime: Timestamp;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.bep3.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    /** atomic_swaps represents the state of stored atomic swaps */
    atomic_swaps?: AtomicSwapAmino[];
    /** supplies represents the supply information of each atomic swap */
    supplies?: AssetSupplyAmino[];
    /** previous_block_time represents the time of the previous block */
    previous_block_time?: string;
}
export interface GenesisStateAminoMsg {
    type: "/kava.bep3.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    atomic_swaps: AtomicSwapSDKType[];
    supplies: AssetSupplySDKType[];
    previous_block_time: TimestampSDKType;
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
