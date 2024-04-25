import { Params, ParamsAmino, ParamsSDKType, PoolRecord, PoolRecordAmino, PoolRecordSDKType, ShareRecord, ShareRecordAmino, ShareRecordSDKType } from "./swap";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the swap module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters related to swap */
    params: Params;
    /** pool_records defines the available pools */
    poolRecords: PoolRecord[];
    /** share_records defines the owned shares of each pool */
    shareRecords: ShareRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.swap.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the swap module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters related to swap */
    params?: ParamsAmino;
    /** pool_records defines the available pools */
    pool_records?: PoolRecordAmino[];
    /** share_records defines the owned shares of each pool */
    share_records?: ShareRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kava.swap.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the swap module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    pool_records: PoolRecordSDKType[];
    share_records: ShareRecordSDKType[];
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
