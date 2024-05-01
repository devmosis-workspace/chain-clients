import { BinaryWriter } from "../../../binary";
export interface QuerySupplyRequest {
}
export interface QuerySupplyRequestProtoMsg {
    typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest";
    value: Uint8Array;
}
export interface QuerySupplyRequestAmino {
}
export interface QuerySupplyRequestAminoMsg {
    type: "/quicksilver.supply.v1.QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
export interface QuerySupplyRequestSDKType {
}
export interface QuerySupplyResponse {
    supply: bigint;
    circulatingSupply: bigint;
}
export interface QuerySupplyResponseProtoMsg {
    typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse";
    value: Uint8Array;
}
export interface QuerySupplyResponseAmino {
    supply?: string;
    circulating_supply?: string;
}
export interface QuerySupplyResponseAminoMsg {
    type: "/quicksilver.supply.v1.QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
export interface QuerySupplyResponseSDKType {
    supply: bigint;
    circulating_supply: bigint;
}
export declare const QuerySupplyRequest: {
    typeUrl: string;
    encode(_: QuerySupplyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QuerySupplyRequest;
    fromPartial(_: Partial<QuerySupplyRequest>): QuerySupplyRequest;
    fromAmino(_: QuerySupplyRequestAmino): QuerySupplyRequest;
    toAmino(_: QuerySupplyRequest): QuerySupplyRequestAmino;
    fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest;
    fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest;
    toProto(message: QuerySupplyRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg;
};
export declare const QuerySupplyResponse: {
    typeUrl: string;
    encode(message: QuerySupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySupplyResponse;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
    fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse;
    toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino;
    fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse;
    fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse;
    toProto(message: QuerySupplyResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg;
};
