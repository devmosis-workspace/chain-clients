import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { InflationParams, InflationParamsAmino, InflationParamsSDKType } from "./ugov";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPrice {
}
export interface QueryMinGasPriceProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryMinGasPrice";
    value: Uint8Array;
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceAmino {
}
export interface QueryMinGasPriceAminoMsg {
    type: "/umee.ugov.v1.QueryMinGasPrice";
    value: QueryMinGasPriceAmino;
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceSDKType {
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponse {
    minGasPrice: DecCoin;
}
export interface QueryMinGasPriceResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryMinGasPriceResponse";
    value: Uint8Array;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseAmino {
    min_gas_price?: DecCoinAmino;
}
export interface QueryMinGasPriceResponseAminoMsg {
    type: "/umee.ugov.v1.QueryMinGasPriceResponse";
    value: QueryMinGasPriceResponseAmino;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseSDKType {
    min_gas_price: DecCoinSDKType;
}
/** QueryEmergencyGroup request type. */
export interface QueryEmergencyGroup {
}
export interface QueryEmergencyGroupProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryEmergencyGroup";
    value: Uint8Array;
}
/** QueryEmergencyGroup request type. */
export interface QueryEmergencyGroupAmino {
}
export interface QueryEmergencyGroupAminoMsg {
    type: "/umee.ugov.v1.QueryEmergencyGroup";
    value: QueryEmergencyGroupAmino;
}
/** QueryEmergencyGroup request type. */
export interface QueryEmergencyGroupSDKType {
}
/** QueryEmergencyGroupResponse response type. */
export interface QueryEmergencyGroupResponse {
    emergencyGroup: string;
}
export interface QueryEmergencyGroupResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryEmergencyGroupResponse";
    value: Uint8Array;
}
/** QueryEmergencyGroupResponse response type. */
export interface QueryEmergencyGroupResponseAmino {
    emergency_group?: string;
}
export interface QueryEmergencyGroupResponseAminoMsg {
    type: "/umee.ugov.v1.QueryEmergencyGroupResponse";
    value: QueryEmergencyGroupResponseAmino;
}
/** QueryEmergencyGroupResponse response type. */
export interface QueryEmergencyGroupResponseSDKType {
    emergency_group: string;
}
/** QueryInflationParams request type. */
export interface QueryInflationParams {
}
export interface QueryInflationParamsProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryInflationParams";
    value: Uint8Array;
}
/** QueryInflationParams request type. */
export interface QueryInflationParamsAmino {
}
export interface QueryInflationParamsAminoMsg {
    type: "/umee.ugov.v1.QueryInflationParams";
    value: QueryInflationParamsAmino;
}
/** QueryInflationParams request type. */
export interface QueryInflationParamsSDKType {
}
/** QueryInflationParamsResponse response type. */
export interface QueryInflationParamsResponse {
    params: InflationParams;
}
export interface QueryInflationParamsResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryInflationParamsResponse";
    value: Uint8Array;
}
/** QueryInflationParamsResponse response type. */
export interface QueryInflationParamsResponseAmino {
    params?: InflationParamsAmino;
}
export interface QueryInflationParamsResponseAminoMsg {
    type: "/umee.ugov.v1.QueryInflationParamsResponse";
    value: QueryInflationParamsResponseAmino;
}
/** QueryInflationParamsResponse response type. */
export interface QueryInflationParamsResponseSDKType {
    params: InflationParamsSDKType;
}
/** QueryInflationCycleEnd request type. */
export interface QueryInflationCycleEnd {
}
export interface QueryInflationCycleEndProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryInflationCycleEnd";
    value: Uint8Array;
}
/** QueryInflationCycleEnd request type. */
export interface QueryInflationCycleEndAmino {
}
export interface QueryInflationCycleEndAminoMsg {
    type: "/umee.ugov.v1.QueryInflationCycleEnd";
    value: QueryInflationCycleEndAmino;
}
/** QueryInflationCycleEnd request type. */
export interface QueryInflationCycleEndSDKType {
}
/** QueryInflationCycleEndResponse response type. */
export interface QueryInflationCycleEndResponse {
    end?: Timestamp;
}
export interface QueryInflationCycleEndResponseProtoMsg {
    typeUrl: "/umee.ugov.v1.QueryInflationCycleEndResponse";
    value: Uint8Array;
}
/** QueryInflationCycleEndResponse response type. */
export interface QueryInflationCycleEndResponseAmino {
    end?: string;
}
export interface QueryInflationCycleEndResponseAminoMsg {
    type: "/umee.ugov.v1.QueryInflationCycleEndResponse";
    value: QueryInflationCycleEndResponseAmino;
}
/** QueryInflationCycleEndResponse response type. */
export interface QueryInflationCycleEndResponseSDKType {
    end?: TimestampSDKType;
}
export declare const QueryMinGasPrice: {
    typeUrl: string;
    encode(_: QueryMinGasPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryMinGasPrice;
    fromPartial(_: Partial<QueryMinGasPrice>): QueryMinGasPrice;
    fromAmino(_: QueryMinGasPriceAmino): QueryMinGasPrice;
    toAmino(_: QueryMinGasPrice): QueryMinGasPriceAmino;
    fromAminoMsg(object: QueryMinGasPriceAminoMsg): QueryMinGasPrice;
    fromProtoMsg(message: QueryMinGasPriceProtoMsg): QueryMinGasPrice;
    toProto(message: QueryMinGasPrice): Uint8Array;
    toProtoMsg(message: QueryMinGasPrice): QueryMinGasPriceProtoMsg;
};
export declare const QueryMinGasPriceResponse: {
    typeUrl: string;
    encode(message: QueryMinGasPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryMinGasPriceResponse;
    fromPartial(object: Partial<QueryMinGasPriceResponse>): QueryMinGasPriceResponse;
    fromAmino(object: QueryMinGasPriceResponseAmino): QueryMinGasPriceResponse;
    toAmino(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseAmino;
    fromAminoMsg(object: QueryMinGasPriceResponseAminoMsg): QueryMinGasPriceResponse;
    fromProtoMsg(message: QueryMinGasPriceResponseProtoMsg): QueryMinGasPriceResponse;
    toProto(message: QueryMinGasPriceResponse): Uint8Array;
    toProtoMsg(message: QueryMinGasPriceResponse): QueryMinGasPriceResponseProtoMsg;
};
export declare const QueryEmergencyGroup: {
    typeUrl: string;
    encode(_: QueryEmergencyGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryEmergencyGroup;
    fromPartial(_: Partial<QueryEmergencyGroup>): QueryEmergencyGroup;
    fromAmino(_: QueryEmergencyGroupAmino): QueryEmergencyGroup;
    toAmino(_: QueryEmergencyGroup): QueryEmergencyGroupAmino;
    fromAminoMsg(object: QueryEmergencyGroupAminoMsg): QueryEmergencyGroup;
    fromProtoMsg(message: QueryEmergencyGroupProtoMsg): QueryEmergencyGroup;
    toProto(message: QueryEmergencyGroup): Uint8Array;
    toProtoMsg(message: QueryEmergencyGroup): QueryEmergencyGroupProtoMsg;
};
export declare const QueryEmergencyGroupResponse: {
    typeUrl: string;
    encode(message: QueryEmergencyGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEmergencyGroupResponse;
    fromPartial(object: Partial<QueryEmergencyGroupResponse>): QueryEmergencyGroupResponse;
    fromAmino(object: QueryEmergencyGroupResponseAmino): QueryEmergencyGroupResponse;
    toAmino(message: QueryEmergencyGroupResponse): QueryEmergencyGroupResponseAmino;
    fromAminoMsg(object: QueryEmergencyGroupResponseAminoMsg): QueryEmergencyGroupResponse;
    fromProtoMsg(message: QueryEmergencyGroupResponseProtoMsg): QueryEmergencyGroupResponse;
    toProto(message: QueryEmergencyGroupResponse): Uint8Array;
    toProtoMsg(message: QueryEmergencyGroupResponse): QueryEmergencyGroupResponseProtoMsg;
};
export declare const QueryInflationParams: {
    typeUrl: string;
    encode(_: QueryInflationParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryInflationParams;
    fromPartial(_: Partial<QueryInflationParams>): QueryInflationParams;
    fromAmino(_: QueryInflationParamsAmino): QueryInflationParams;
    toAmino(_: QueryInflationParams): QueryInflationParamsAmino;
    fromAminoMsg(object: QueryInflationParamsAminoMsg): QueryInflationParams;
    fromProtoMsg(message: QueryInflationParamsProtoMsg): QueryInflationParams;
    toProto(message: QueryInflationParams): Uint8Array;
    toProtoMsg(message: QueryInflationParams): QueryInflationParamsProtoMsg;
};
export declare const QueryInflationParamsResponse: {
    typeUrl: string;
    encode(message: QueryInflationParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInflationParamsResponse;
    fromPartial(object: Partial<QueryInflationParamsResponse>): QueryInflationParamsResponse;
    fromAmino(object: QueryInflationParamsResponseAmino): QueryInflationParamsResponse;
    toAmino(message: QueryInflationParamsResponse): QueryInflationParamsResponseAmino;
    fromAminoMsg(object: QueryInflationParamsResponseAminoMsg): QueryInflationParamsResponse;
    fromProtoMsg(message: QueryInflationParamsResponseProtoMsg): QueryInflationParamsResponse;
    toProto(message: QueryInflationParamsResponse): Uint8Array;
    toProtoMsg(message: QueryInflationParamsResponse): QueryInflationParamsResponseProtoMsg;
};
export declare const QueryInflationCycleEnd: {
    typeUrl: string;
    encode(_: QueryInflationCycleEnd, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryInflationCycleEnd;
    fromPartial(_: Partial<QueryInflationCycleEnd>): QueryInflationCycleEnd;
    fromAmino(_: QueryInflationCycleEndAmino): QueryInflationCycleEnd;
    toAmino(_: QueryInflationCycleEnd): QueryInflationCycleEndAmino;
    fromAminoMsg(object: QueryInflationCycleEndAminoMsg): QueryInflationCycleEnd;
    fromProtoMsg(message: QueryInflationCycleEndProtoMsg): QueryInflationCycleEnd;
    toProto(message: QueryInflationCycleEnd): Uint8Array;
    toProtoMsg(message: QueryInflationCycleEnd): QueryInflationCycleEndProtoMsg;
};
export declare const QueryInflationCycleEndResponse: {
    typeUrl: string;
    encode(message: QueryInflationCycleEndResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInflationCycleEndResponse;
    fromPartial(object: Partial<QueryInflationCycleEndResponse>): QueryInflationCycleEndResponse;
    fromAmino(object: QueryInflationCycleEndResponseAmino): QueryInflationCycleEndResponse;
    toAmino(message: QueryInflationCycleEndResponse): QueryInflationCycleEndResponseAmino;
    fromAminoMsg(object: QueryInflationCycleEndResponseAminoMsg): QueryInflationCycleEndResponse;
    fromProtoMsg(message: QueryInflationCycleEndResponseProtoMsg): QueryInflationCycleEndResponse;
    toProto(message: QueryInflationCycleEndResponse): Uint8Array;
    toProtoMsg(message: QueryInflationCycleEndResponse): QueryInflationCycleEndResponseProtoMsg;
};
