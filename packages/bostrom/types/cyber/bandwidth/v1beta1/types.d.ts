import { BinaryWriter } from "../../../binary";
export interface Params {
    recoveryPeriod: bigint;
    adjustPricePeriod: bigint;
    basePrice: string;
    baseLoad: string;
    maxBlockBandwidth: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    recovery_period?: string;
    adjust_price_period?: string;
    base_price?: string;
    base_load?: string;
    max_block_bandwidth?: string;
}
export interface ParamsAminoMsg {
    type: "/cyber.bandwidth.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    recovery_period: bigint;
    adjust_price_period: bigint;
    base_price: string;
    base_load: string;
    max_block_bandwidth: bigint;
}
export interface NeuronBandwidth {
    neuron: string;
    remainedValue: bigint;
    lastUpdatedBlock: bigint;
    maxValue: bigint;
}
export interface NeuronBandwidthProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.NeuronBandwidth";
    value: Uint8Array;
}
export interface NeuronBandwidthAmino {
    neuron?: string;
    remained_value?: string;
    last_updated_block?: string;
    max_value?: string;
}
export interface NeuronBandwidthAminoMsg {
    type: "/cyber.bandwidth.v1beta1.NeuronBandwidth";
    value: NeuronBandwidthAmino;
}
export interface NeuronBandwidthSDKType {
    neuron: string;
    remained_value: bigint;
    last_updated_block: bigint;
    max_value: bigint;
}
export interface Price {
    price: string;
}
export interface PriceProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.Price";
    value: Uint8Array;
}
export interface PriceAmino {
    price?: string;
}
export interface PriceAminoMsg {
    type: "/cyber.bandwidth.v1beta1.Price";
    value: PriceAmino;
}
export interface PriceSDKType {
    price: string;
}
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
export declare const NeuronBandwidth: {
    typeUrl: string;
    encode(message: NeuronBandwidth, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NeuronBandwidth;
    fromPartial(object: Partial<NeuronBandwidth>): NeuronBandwidth;
    fromAmino(object: NeuronBandwidthAmino): NeuronBandwidth;
    toAmino(message: NeuronBandwidth): NeuronBandwidthAmino;
    fromAminoMsg(object: NeuronBandwidthAminoMsg): NeuronBandwidth;
    fromProtoMsg(message: NeuronBandwidthProtoMsg): NeuronBandwidth;
    toProto(message: NeuronBandwidth): Uint8Array;
    toProtoMsg(message: NeuronBandwidth): NeuronBandwidthProtoMsg;
};
export declare const Price: {
    typeUrl: string;
    encode(message: Price, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Price;
    fromPartial(object: Partial<Price>): Price;
    fromAmino(object: PriceAmino): Price;
    toAmino(message: Price): PriceAmino;
    fromAminoMsg(object: PriceAminoMsg): Price;
    fromProtoMsg(message: PriceProtoMsg): Price;
    toProto(message: Price): Uint8Array;
    toProtoMsg(message: Price): PriceProtoMsg;
};
