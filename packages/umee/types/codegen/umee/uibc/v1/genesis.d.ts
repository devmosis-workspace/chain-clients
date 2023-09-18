import { Params, ParamsAmino, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisState {
    params: Params;
    outflows: DecCoin[];
    /** total_outflow_sum defines the total outflow sum of ibc-transfer in USD. */
    totalOutflowSum: string;
    /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
    quotaExpires: Timestamp;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/umee.uibc.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    outflows: DecCoinAmino[];
    /** total_outflow_sum defines the total outflow sum of ibc-transfer in USD. */
    total_outflow_sum: string;
    /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
    quota_expires?: TimestampAmino;
}
export interface GenesisStateAminoMsg {
    type: "/umee.uibc.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    outflows: DecCoinSDKType[];
    total_outflow_sum: string;
    quota_expires: TimestampSDKType;
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
