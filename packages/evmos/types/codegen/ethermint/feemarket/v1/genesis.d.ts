import { Params, ParamsAmino, ParamsSDKType } from "./feemarket";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the feemarket module. */
    params: Params;
    /**
     * block_gas is the amount of gas wanted on the last block before the upgrade.
     * Zero by default.
     */
    blockGas: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the feemarket module. */
    params?: ParamsAmino;
    /**
     * block_gas is the amount of gas wanted on the last block before the upgrade.
     * Zero by default.
     */
    block_gas: string;
}
export interface GenesisStateAminoMsg {
    type: "/ethermint.feemarket.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    block_gas: bigint;
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
