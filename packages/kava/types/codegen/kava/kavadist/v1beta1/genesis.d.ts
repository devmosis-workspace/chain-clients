import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisState {
    params: Params;
    previousBlockTime: Timestamp;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    previous_block_time?: TimestampAmino;
}
export interface GenesisStateAminoMsg {
    type: "/kava.kavadist.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the kavadist module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
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
