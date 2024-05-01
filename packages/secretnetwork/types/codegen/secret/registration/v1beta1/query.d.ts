import { BinaryWriter } from "../../../binary";
export interface QueryEncryptedSeedRequest {
    pubKey: Uint8Array;
}
export interface QueryEncryptedSeedRequestProtoMsg {
    typeUrl: "/secret.registration.v1beta1.QueryEncryptedSeedRequest";
    value: Uint8Array;
}
export interface QueryEncryptedSeedRequestAmino {
    pub_key?: string;
}
export interface QueryEncryptedSeedRequestAminoMsg {
    type: "/secret.registration.v1beta1.QueryEncryptedSeedRequest";
    value: QueryEncryptedSeedRequestAmino;
}
export interface QueryEncryptedSeedRequestSDKType {
    pub_key: Uint8Array;
}
export interface QueryEncryptedSeedResponse {
    /** [(gogoproto.nullable) = false]; */
    encryptedSeed: Uint8Array;
}
export interface QueryEncryptedSeedResponseProtoMsg {
    typeUrl: "/secret.registration.v1beta1.QueryEncryptedSeedResponse";
    value: Uint8Array;
}
export interface QueryEncryptedSeedResponseAmino {
    /** [(gogoproto.nullable) = false]; */
    encrypted_seed?: string;
}
export interface QueryEncryptedSeedResponseAminoMsg {
    type: "/secret.registration.v1beta1.QueryEncryptedSeedResponse";
    value: QueryEncryptedSeedResponseAmino;
}
export interface QueryEncryptedSeedResponseSDKType {
    encrypted_seed: Uint8Array;
}
export declare const QueryEncryptedSeedRequest: {
    typeUrl: string;
    encode(message: QueryEncryptedSeedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEncryptedSeedRequest;
    fromPartial(object: Partial<QueryEncryptedSeedRequest>): QueryEncryptedSeedRequest;
    fromAmino(object: QueryEncryptedSeedRequestAmino): QueryEncryptedSeedRequest;
    toAmino(message: QueryEncryptedSeedRequest): QueryEncryptedSeedRequestAmino;
    fromAminoMsg(object: QueryEncryptedSeedRequestAminoMsg): QueryEncryptedSeedRequest;
    fromProtoMsg(message: QueryEncryptedSeedRequestProtoMsg): QueryEncryptedSeedRequest;
    toProto(message: QueryEncryptedSeedRequest): Uint8Array;
    toProtoMsg(message: QueryEncryptedSeedRequest): QueryEncryptedSeedRequestProtoMsg;
};
export declare const QueryEncryptedSeedResponse: {
    typeUrl: string;
    encode(message: QueryEncryptedSeedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEncryptedSeedResponse;
    fromPartial(object: Partial<QueryEncryptedSeedResponse>): QueryEncryptedSeedResponse;
    fromAmino(object: QueryEncryptedSeedResponseAmino): QueryEncryptedSeedResponse;
    toAmino(message: QueryEncryptedSeedResponse): QueryEncryptedSeedResponseAmino;
    fromAminoMsg(object: QueryEncryptedSeedResponseAminoMsg): QueryEncryptedSeedResponse;
    fromProtoMsg(message: QueryEncryptedSeedResponseProtoMsg): QueryEncryptedSeedResponse;
    toProto(message: QueryEncryptedSeedResponse): Uint8Array;
    toProtoMsg(message: QueryEncryptedSeedResponse): QueryEncryptedSeedResponseProtoMsg;
};
