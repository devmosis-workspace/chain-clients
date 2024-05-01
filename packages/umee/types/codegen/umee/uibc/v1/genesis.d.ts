import { Params, ParamsAmino, ParamsSDKType } from "./quota";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisState {
    params: Params;
    outflows: DecCoin[];
    /** outflow_sum defines the total outflow sum of ibc-transfer in USD. */
    outflowSum: string;
    /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
    quotaExpires: Timestamp;
    /** inflows tracks IBC inflow transfers (in USD) for each denom during quota period. */
    inflows: DecCoin[];
    /** inflow_sum defines tracks total sum of IBC inflow transfers (in USD) during quota period. */
    inflowSum: string;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/umee.uibc.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    outflows?: DecCoinAmino[];
    /** outflow_sum defines the total outflow sum of ibc-transfer in USD. */
    outflow_sum?: string;
    /** quota_expires defines quota expire time (as unix timestamp) for ibc-transfer denom. */
    quota_expires?: string;
    /** inflows tracks IBC inflow transfers (in USD) for each denom during quota period. */
    inflows?: DecCoinAmino[];
    /** inflow_sum defines tracks total sum of IBC inflow transfers (in USD) during quota period. */
    inflow_sum?: string;
}
export interface GenesisStateAminoMsg {
    type: "/umee.uibc.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the uibc module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    outflows: DecCoinSDKType[];
    outflow_sum: string;
    quota_expires: TimestampSDKType;
    inflows: DecCoinSDKType[];
    inflow_sum: string;
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
