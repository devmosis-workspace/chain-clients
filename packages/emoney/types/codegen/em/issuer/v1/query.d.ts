import { Issuer, IssuerAmino, IssuerSDKType } from "./issuer";
import { BinaryWriter } from "../../../binary";
export interface QueryIssuersRequest {
}
export interface QueryIssuersRequestProtoMsg {
    typeUrl: "/em.issuer.v1.QueryIssuersRequest";
    value: Uint8Array;
}
export interface QueryIssuersRequestAmino {
}
export interface QueryIssuersRequestAminoMsg {
    type: "/em.issuer.v1.QueryIssuersRequest";
    value: QueryIssuersRequestAmino;
}
export interface QueryIssuersRequestSDKType {
}
export interface QueryIssuersResponse {
    issuers: Issuer[];
}
export interface QueryIssuersResponseProtoMsg {
    typeUrl: "/em.issuer.v1.QueryIssuersResponse";
    value: Uint8Array;
}
export interface QueryIssuersResponseAmino {
    issuers: IssuerAmino[];
}
export interface QueryIssuersResponseAminoMsg {
    type: "/em.issuer.v1.QueryIssuersResponse";
    value: QueryIssuersResponseAmino;
}
export interface QueryIssuersResponseSDKType {
    issuers: IssuerSDKType[];
}
export declare const QueryIssuersRequest: {
    typeUrl: string;
    encode(_: QueryIssuersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryIssuersRequest;
    fromPartial(_: Partial<QueryIssuersRequest>): QueryIssuersRequest;
    fromAmino(_: QueryIssuersRequestAmino): QueryIssuersRequest;
    toAmino(_: QueryIssuersRequest): QueryIssuersRequestAmino;
    fromAminoMsg(object: QueryIssuersRequestAminoMsg): QueryIssuersRequest;
    fromProtoMsg(message: QueryIssuersRequestProtoMsg): QueryIssuersRequest;
    toProto(message: QueryIssuersRequest): Uint8Array;
    toProtoMsg(message: QueryIssuersRequest): QueryIssuersRequestProtoMsg;
};
export declare const QueryIssuersResponse: {
    typeUrl: string;
    encode(message: QueryIssuersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIssuersResponse;
    fromPartial(object: Partial<QueryIssuersResponse>): QueryIssuersResponse;
    fromAmino(object: QueryIssuersResponseAmino): QueryIssuersResponse;
    toAmino(message: QueryIssuersResponse): QueryIssuersResponseAmino;
    fromAminoMsg(object: QueryIssuersResponseAminoMsg): QueryIssuersResponse;
    fromProtoMsg(message: QueryIssuersResponseProtoMsg): QueryIssuersResponse;
    toProto(message: QueryIssuersResponse): Uint8Array;
    toProtoMsg(message: QueryIssuersResponse): QueryIssuersResponseProtoMsg;
};
