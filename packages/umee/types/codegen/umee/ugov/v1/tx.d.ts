import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { InflationParams, InflationParamsAmino, InflationParamsSDKType } from "./ugov";
import { BinaryWriter } from "../../../binary";
/** MsgGovUpdateMinGasPrice request type. */
export interface MsgGovUpdateMinGasPrice {
    /** authority must be the address of the governance account. */
    authority: string;
    minGasPrice: DecCoin;
}
export interface MsgGovUpdateMinGasPriceProtoMsg {
    typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
    value: Uint8Array;
}
/** MsgGovUpdateMinGasPrice request type. */
export interface MsgGovUpdateMinGasPriceAmino {
    /** authority must be the address of the governance account. */
    authority?: string;
    min_gas_price?: DecCoinAmino;
}
export interface MsgGovUpdateMinGasPriceAminoMsg {
    type: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
    value: MsgGovUpdateMinGasPriceAmino;
}
/** MsgGovUpdateMinGasPrice request type. */
export interface MsgGovUpdateMinGasPriceSDKType {
    authority: string;
    min_gas_price: DecCoinSDKType;
}
/** MsgGovUpdateMinGasPriceResponse response type. */
export interface MsgGovUpdateMinGasPriceResponse {
}
export interface MsgGovUpdateMinGasPriceResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse";
    value: Uint8Array;
}
/** MsgGovUpdateMinGasPriceResponse response type. */
export interface MsgGovUpdateMinGasPriceResponseAmino {
}
export interface MsgGovUpdateMinGasPriceResponseAminoMsg {
    type: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse";
    value: MsgGovUpdateMinGasPriceResponseAmino;
}
/** MsgGovUpdateMinGasPriceResponse response type. */
export interface MsgGovUpdateMinGasPriceResponseSDKType {
}
/** MsgGovSetEmergencyGroup request type. */
export interface MsgGovSetEmergencyGroup {
    /** authority must be the address of the governance account. */
    authority: string;
    emergencyGroup: string;
}
export interface MsgGovSetEmergencyGroupProtoMsg {
    typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroup";
    value: Uint8Array;
}
/** MsgGovSetEmergencyGroup request type. */
export interface MsgGovSetEmergencyGroupAmino {
    /** authority must be the address of the governance account. */
    authority?: string;
    emergency_group?: string;
}
export interface MsgGovSetEmergencyGroupAminoMsg {
    type: "/umee.ugov.v1.MsgGovSetEmergencyGroup";
    value: MsgGovSetEmergencyGroupAmino;
}
/** MsgGovSetEmergencyGroup request type. */
export interface MsgGovSetEmergencyGroupSDKType {
    authority: string;
    emergency_group: string;
}
/** MsgGovSetEmergencyGroupResponse response type. */
export interface MsgGovSetEmergencyGroupResponse {
}
export interface MsgGovSetEmergencyGroupResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroupResponse";
    value: Uint8Array;
}
/** MsgGovSetEmergencyGroupResponse response type. */
export interface MsgGovSetEmergencyGroupResponseAmino {
}
export interface MsgGovSetEmergencyGroupResponseAminoMsg {
    type: "/umee.ugov.v1.MsgGovSetEmergencyGroupResponse";
    value: MsgGovSetEmergencyGroupResponseAmino;
}
/** MsgGovSetEmergencyGroupResponse response type. */
export interface MsgGovSetEmergencyGroupResponseSDKType {
}
/** MsgGovUpdateInflationParams request type. */
export interface MsgGovUpdateInflationParams {
    /** authority must be the address of the governance account. */
    authority: string;
    params: InflationParams;
}
export interface MsgGovUpdateInflationParamsProtoMsg {
    typeUrl: "/umee.ugov.v1.MsgGovUpdateInflationParams";
    value: Uint8Array;
}
/** MsgGovUpdateInflationParams request type. */
export interface MsgGovUpdateInflationParamsAmino {
    /** authority must be the address of the governance account. */
    authority?: string;
    params?: InflationParamsAmino;
}
export interface MsgGovUpdateInflationParamsAminoMsg {
    type: "/umee.ugov.v1.MsgGovUpdateInflationParams";
    value: MsgGovUpdateInflationParamsAmino;
}
/** MsgGovUpdateInflationParams request type. */
export interface MsgGovUpdateInflationParamsSDKType {
    authority: string;
    params: InflationParamsSDKType;
}
/** GovUpdateInflationParamsResponse response type. */
export interface GovUpdateInflationParamsResponse {
}
export interface GovUpdateInflationParamsResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.GovUpdateInflationParamsResponse";
    value: Uint8Array;
}
/** GovUpdateInflationParamsResponse response type. */
export interface GovUpdateInflationParamsResponseAmino {
}
export interface GovUpdateInflationParamsResponseAminoMsg {
    type: "/umee.ugov.v1.GovUpdateInflationParamsResponse";
    value: GovUpdateInflationParamsResponseAmino;
}
/** GovUpdateInflationParamsResponse response type. */
export interface GovUpdateInflationParamsResponseSDKType {
}
export declare const MsgGovUpdateMinGasPrice: {
    typeUrl: string;
    encode(message: MsgGovUpdateMinGasPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovUpdateMinGasPrice;
    fromPartial(object: Partial<MsgGovUpdateMinGasPrice>): MsgGovUpdateMinGasPrice;
    fromAmino(object: MsgGovUpdateMinGasPriceAmino): MsgGovUpdateMinGasPrice;
    toAmino(message: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceAmino;
    fromAminoMsg(object: MsgGovUpdateMinGasPriceAminoMsg): MsgGovUpdateMinGasPrice;
    fromProtoMsg(message: MsgGovUpdateMinGasPriceProtoMsg): MsgGovUpdateMinGasPrice;
    toProto(message: MsgGovUpdateMinGasPrice): Uint8Array;
    toProtoMsg(message: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceProtoMsg;
};
export declare const MsgGovUpdateMinGasPriceResponse: {
    typeUrl: string;
    encode(_: MsgGovUpdateMinGasPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovUpdateMinGasPriceResponse;
    fromPartial(_: Partial<MsgGovUpdateMinGasPriceResponse>): MsgGovUpdateMinGasPriceResponse;
    fromAmino(_: MsgGovUpdateMinGasPriceResponseAmino): MsgGovUpdateMinGasPriceResponse;
    toAmino(_: MsgGovUpdateMinGasPriceResponse): MsgGovUpdateMinGasPriceResponseAmino;
    fromAminoMsg(object: MsgGovUpdateMinGasPriceResponseAminoMsg): MsgGovUpdateMinGasPriceResponse;
    fromProtoMsg(message: MsgGovUpdateMinGasPriceResponseProtoMsg): MsgGovUpdateMinGasPriceResponse;
    toProto(message: MsgGovUpdateMinGasPriceResponse): Uint8Array;
    toProtoMsg(message: MsgGovUpdateMinGasPriceResponse): MsgGovUpdateMinGasPriceResponseProtoMsg;
};
export declare const MsgGovSetEmergencyGroup: {
    typeUrl: string;
    encode(message: MsgGovSetEmergencyGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovSetEmergencyGroup;
    fromPartial(object: Partial<MsgGovSetEmergencyGroup>): MsgGovSetEmergencyGroup;
    fromAmino(object: MsgGovSetEmergencyGroupAmino): MsgGovSetEmergencyGroup;
    toAmino(message: MsgGovSetEmergencyGroup): MsgGovSetEmergencyGroupAmino;
    fromAminoMsg(object: MsgGovSetEmergencyGroupAminoMsg): MsgGovSetEmergencyGroup;
    fromProtoMsg(message: MsgGovSetEmergencyGroupProtoMsg): MsgGovSetEmergencyGroup;
    toProto(message: MsgGovSetEmergencyGroup): Uint8Array;
    toProtoMsg(message: MsgGovSetEmergencyGroup): MsgGovSetEmergencyGroupProtoMsg;
};
export declare const MsgGovSetEmergencyGroupResponse: {
    typeUrl: string;
    encode(_: MsgGovSetEmergencyGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovSetEmergencyGroupResponse;
    fromPartial(_: Partial<MsgGovSetEmergencyGroupResponse>): MsgGovSetEmergencyGroupResponse;
    fromAmino(_: MsgGovSetEmergencyGroupResponseAmino): MsgGovSetEmergencyGroupResponse;
    toAmino(_: MsgGovSetEmergencyGroupResponse): MsgGovSetEmergencyGroupResponseAmino;
    fromAminoMsg(object: MsgGovSetEmergencyGroupResponseAminoMsg): MsgGovSetEmergencyGroupResponse;
    fromProtoMsg(message: MsgGovSetEmergencyGroupResponseProtoMsg): MsgGovSetEmergencyGroupResponse;
    toProto(message: MsgGovSetEmergencyGroupResponse): Uint8Array;
    toProtoMsg(message: MsgGovSetEmergencyGroupResponse): MsgGovSetEmergencyGroupResponseProtoMsg;
};
export declare const MsgGovUpdateInflationParams: {
    typeUrl: string;
    encode(message: MsgGovUpdateInflationParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovUpdateInflationParams;
    fromPartial(object: Partial<MsgGovUpdateInflationParams>): MsgGovUpdateInflationParams;
    fromAmino(object: MsgGovUpdateInflationParamsAmino): MsgGovUpdateInflationParams;
    toAmino(message: MsgGovUpdateInflationParams): MsgGovUpdateInflationParamsAmino;
    fromAminoMsg(object: MsgGovUpdateInflationParamsAminoMsg): MsgGovUpdateInflationParams;
    fromProtoMsg(message: MsgGovUpdateInflationParamsProtoMsg): MsgGovUpdateInflationParams;
    toProto(message: MsgGovUpdateInflationParams): Uint8Array;
    toProtoMsg(message: MsgGovUpdateInflationParams): MsgGovUpdateInflationParamsProtoMsg;
};
export declare const GovUpdateInflationParamsResponse: {
    typeUrl: string;
    encode(_: GovUpdateInflationParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): GovUpdateInflationParamsResponse;
    fromPartial(_: Partial<GovUpdateInflationParamsResponse>): GovUpdateInflationParamsResponse;
    fromAmino(_: GovUpdateInflationParamsResponseAmino): GovUpdateInflationParamsResponse;
    toAmino(_: GovUpdateInflationParamsResponse): GovUpdateInflationParamsResponseAmino;
    fromAminoMsg(object: GovUpdateInflationParamsResponseAminoMsg): GovUpdateInflationParamsResponse;
    fromProtoMsg(message: GovUpdateInflationParamsResponseProtoMsg): GovUpdateInflationParamsResponse;
    toProto(message: GovUpdateInflationParamsResponse): Uint8Array;
    toProtoMsg(message: GovUpdateInflationParamsResponse): GovUpdateInflationParamsResponseProtoMsg;
};
