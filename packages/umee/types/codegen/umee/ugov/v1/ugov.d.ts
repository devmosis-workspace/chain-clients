import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** InflationParams params for changing the inflation min rate and max rate of mint module params. */
export interface InflationParams {
    /** max_supply is the maximum supply. Inflation will not increase the UMEE supply above this value. */
    maxSupply: Coin;
    /** inflation_cycle duration after which inflation rates are changed. */
    inflationCycle: Duration;
    /** inflation_reduction_rate for every inflation cycle in basis points. */
    inflationReductionRate: number;
}
export interface InflationParamsProtoMsg {
    typeUrl: "/umee.ugov.v1.InflationParams";
    value: Uint8Array;
}
/** InflationParams params for changing the inflation min rate and max rate of mint module params. */
export interface InflationParamsAmino {
    /** max_supply is the maximum supply. Inflation will not increase the UMEE supply above this value. */
    max_supply?: CoinAmino;
    /** inflation_cycle duration after which inflation rates are changed. */
    inflation_cycle?: DurationAmino;
    /** inflation_reduction_rate for every inflation cycle in basis points. */
    inflation_reduction_rate?: number;
}
export interface InflationParamsAminoMsg {
    type: "/umee.ugov.v1.InflationParams";
    value: InflationParamsAmino;
}
/** InflationParams params for changing the inflation min rate and max rate of mint module params. */
export interface InflationParamsSDKType {
    max_supply: CoinSDKType;
    inflation_cycle: DurationSDKType;
    inflation_reduction_rate: number;
}
export declare const InflationParams: {
    typeUrl: string;
    encode(message: InflationParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InflationParams;
    fromPartial(object: Partial<InflationParams>): InflationParams;
    fromAmino(object: InflationParamsAmino): InflationParams;
    toAmino(message: InflationParams): InflationParamsAmino;
    fromAminoMsg(object: InflationParamsAminoMsg): InflationParams;
    fromProtoMsg(message: InflationParamsProtoMsg): InflationParams;
    toProto(message: InflationParams): Uint8Array;
    toProtoMsg(message: InflationParams): InflationParamsProtoMsg;
};
