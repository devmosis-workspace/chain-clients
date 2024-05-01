import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { InflationParams, InflationParamsAmino, InflationParamsSDKType } from "./ugov";
import { BinaryWriter } from "../../../binary";
/** EventMinGasPrice is emitted when MsgGovUpdateMinGasPrice is correctly executed. */
export interface EventMinGasPrice {
    minGasPrices: DecCoin[];
}
export interface EventMinGasPriceProtoMsg {
    typeUrl: "/umee.ugov.v1.EventMinGasPrice";
    value: Uint8Array;
}
/** EventMinGasPrice is emitted when MsgGovUpdateMinGasPrice is correctly executed. */
export interface EventMinGasPriceAmino {
    min_gas_prices?: DecCoinAmino[];
}
export interface EventMinGasPriceAminoMsg {
    type: "/umee.ugov.v1.EventMinGasPrice";
    value: EventMinGasPriceAmino;
}
/** EventMinGasPrice is emitted when MsgGovUpdateMinGasPrice is correctly executed. */
export interface EventMinGasPriceSDKType {
    min_gas_prices: DecCoinSDKType[];
}
/** EventEmergencyGroup is emitted when MsgGovSetEmergencyGroup is correctly executed. */
export interface EventEmergencyGroup {
    emergencyGroup: string;
}
export interface EventEmergencyGroupProtoMsg {
    typeUrl: "/umee.ugov.v1.EventEmergencyGroup";
    value: Uint8Array;
}
/** EventEmergencyGroup is emitted when MsgGovSetEmergencyGroup is correctly executed. */
export interface EventEmergencyGroupAmino {
    emergency_group?: string;
}
export interface EventEmergencyGroupAminoMsg {
    type: "/umee.ugov.v1.EventEmergencyGroup";
    value: EventEmergencyGroupAmino;
}
/** EventEmergencyGroup is emitted when MsgGovSetEmergencyGroup is correctly executed. */
export interface EventEmergencyGroupSDKType {
    emergency_group: string;
}
/** EventInflationParams is emitted when GovUpdateInflationParams is correctly executed. */
export interface EventInflationParams {
    params: InflationParams;
}
export interface EventInflationParamsProtoMsg {
    typeUrl: "/umee.ugov.v1.EventInflationParams";
    value: Uint8Array;
}
/** EventInflationParams is emitted when GovUpdateInflationParams is correctly executed. */
export interface EventInflationParamsAmino {
    params?: InflationParamsAmino;
}
export interface EventInflationParamsAminoMsg {
    type: "/umee.ugov.v1.EventInflationParams";
    value: EventInflationParamsAmino;
}
/** EventInflationParams is emitted when GovUpdateInflationParams is correctly executed. */
export interface EventInflationParamsSDKType {
    params: InflationParamsSDKType;
}
export declare const EventMinGasPrice: {
    typeUrl: string;
    encode(message: EventMinGasPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMinGasPrice;
    fromPartial(object: Partial<EventMinGasPrice>): EventMinGasPrice;
    fromAmino(object: EventMinGasPriceAmino): EventMinGasPrice;
    toAmino(message: EventMinGasPrice): EventMinGasPriceAmino;
    fromAminoMsg(object: EventMinGasPriceAminoMsg): EventMinGasPrice;
    fromProtoMsg(message: EventMinGasPriceProtoMsg): EventMinGasPrice;
    toProto(message: EventMinGasPrice): Uint8Array;
    toProtoMsg(message: EventMinGasPrice): EventMinGasPriceProtoMsg;
};
export declare const EventEmergencyGroup: {
    typeUrl: string;
    encode(message: EventEmergencyGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventEmergencyGroup;
    fromPartial(object: Partial<EventEmergencyGroup>): EventEmergencyGroup;
    fromAmino(object: EventEmergencyGroupAmino): EventEmergencyGroup;
    toAmino(message: EventEmergencyGroup): EventEmergencyGroupAmino;
    fromAminoMsg(object: EventEmergencyGroupAminoMsg): EventEmergencyGroup;
    fromProtoMsg(message: EventEmergencyGroupProtoMsg): EventEmergencyGroup;
    toProto(message: EventEmergencyGroup): Uint8Array;
    toProtoMsg(message: EventEmergencyGroup): EventEmergencyGroupProtoMsg;
};
export declare const EventInflationParams: {
    typeUrl: string;
    encode(message: EventInflationParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventInflationParams;
    fromPartial(object: Partial<EventInflationParams>): EventInflationParams;
    fromAmino(object: EventInflationParamsAmino): EventInflationParams;
    toAmino(message: EventInflationParams): EventInflationParamsAmino;
    fromAminoMsg(object: EventInflationParamsAminoMsg): EventInflationParams;
    fromProtoMsg(message: EventInflationParamsProtoMsg): EventInflationParams;
    toProto(message: EventInflationParams): Uint8Array;
    toProtoMsg(message: EventInflationParams): EventInflationParamsProtoMsg;
};
