import { BinaryWriter } from "../../../binary";
/** DenomTakeRate describes take rate for specified denom */
export interface DenomTakeRate {
    denom: string;
    rate: number;
}
export interface DenomTakeRateProtoMsg {
    typeUrl: "/akash.take.v1beta3.DenomTakeRate";
    value: Uint8Array;
}
/** DenomTakeRate describes take rate for specified denom */
export interface DenomTakeRateAmino {
    denom?: string;
    rate?: number;
}
export interface DenomTakeRateAminoMsg {
    type: "/akash.take.v1beta3.DenomTakeRate";
    value: DenomTakeRateAmino;
}
/** DenomTakeRate describes take rate for specified denom */
export interface DenomTakeRateSDKType {
    denom: string;
    rate: number;
}
/** Params defines the parameters for the x/take package */
export interface Params {
    /** denom -> % take rate */
    denomTakeRates: DenomTakeRate[];
    defaultTakeRate: number;
}
export interface ParamsProtoMsg {
    typeUrl: "/akash.take.v1beta3.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the x/take package */
export interface ParamsAmino {
    /** denom -> % take rate */
    denom_take_rates?: DenomTakeRateAmino[];
    default_take_rate?: number;
}
export interface ParamsAminoMsg {
    type: "/akash.take.v1beta3.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the x/take package */
export interface ParamsSDKType {
    denom_take_rates: DenomTakeRateSDKType[];
    default_take_rate: number;
}
export declare const DenomTakeRate: {
    typeUrl: string;
    encode(message: DenomTakeRate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DenomTakeRate;
    fromPartial(object: Partial<DenomTakeRate>): DenomTakeRate;
    fromAmino(object: DenomTakeRateAmino): DenomTakeRate;
    toAmino(message: DenomTakeRate): DenomTakeRateAmino;
    fromAminoMsg(object: DenomTakeRateAminoMsg): DenomTakeRate;
    fromProtoMsg(message: DenomTakeRateProtoMsg): DenomTakeRate;
    toProto(message: DenomTakeRate): Uint8Array;
    toProtoMsg(message: DenomTakeRate): DenomTakeRateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
