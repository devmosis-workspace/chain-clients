import { BinaryWriter } from "../../../binary";
export interface QueryValidatorsResponse {
    validators: QueryValidatorsResponse_Validator[];
}
export interface QueryValidatorsResponseProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.QueryValidatorsResponse";
    value: Uint8Array;
}
export interface QueryValidatorsResponseAmino {
    validators: QueryValidatorsResponse_ValidatorAmino[];
}
export interface QueryValidatorsResponseAminoMsg {
    type: "/axelar.snapshot.v1beta1.QueryValidatorsResponse";
    value: QueryValidatorsResponseAmino;
}
export interface QueryValidatorsResponseSDKType {
    validators: QueryValidatorsResponse_ValidatorSDKType[];
}
export interface QueryValidatorsResponse_TssIllegibilityInfo {
    tombstoned: boolean;
    jailed: boolean;
    missedTooManyBlocks: boolean;
    noProxyRegistered: boolean;
    tssSuspended: boolean;
    proxyInsuficientFunds: boolean;
    staleTssHeartbeat: boolean;
}
export interface QueryValidatorsResponse_TssIllegibilityInfoProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.TssIllegibilityInfo";
    value: Uint8Array;
}
export interface QueryValidatorsResponse_TssIllegibilityInfoAmino {
    tombstoned: boolean;
    jailed: boolean;
    missed_too_many_blocks: boolean;
    no_proxy_registered: boolean;
    tss_suspended: boolean;
    proxy_insuficient_funds: boolean;
    stale_tss_heartbeat: boolean;
}
export interface QueryValidatorsResponse_TssIllegibilityInfoAminoMsg {
    type: "/axelar.snapshot.v1beta1.TssIllegibilityInfo";
    value: QueryValidatorsResponse_TssIllegibilityInfoAmino;
}
export interface QueryValidatorsResponse_TssIllegibilityInfoSDKType {
    tombstoned: boolean;
    jailed: boolean;
    missed_too_many_blocks: boolean;
    no_proxy_registered: boolean;
    tss_suspended: boolean;
    proxy_insuficient_funds: boolean;
    stale_tss_heartbeat: boolean;
}
export interface QueryValidatorsResponse_Validator {
    operatorAddress: string;
    moniker: string;
    tssIllegibilityInfo: QueryValidatorsResponse_TssIllegibilityInfo;
}
export interface QueryValidatorsResponse_ValidatorProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.Validator";
    value: Uint8Array;
}
export interface QueryValidatorsResponse_ValidatorAmino {
    operator_address: string;
    moniker: string;
    tss_illegibility_info?: QueryValidatorsResponse_TssIllegibilityInfoAmino;
}
export interface QueryValidatorsResponse_ValidatorAminoMsg {
    type: "/axelar.snapshot.v1beta1.Validator";
    value: QueryValidatorsResponse_ValidatorAmino;
}
export interface QueryValidatorsResponse_ValidatorSDKType {
    operator_address: string;
    moniker: string;
    tss_illegibility_info: QueryValidatorsResponse_TssIllegibilityInfoSDKType;
}
export declare const QueryValidatorsResponse: {
    typeUrl: string;
    encode(message: QueryValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValidatorsResponse;
    fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse;
    fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse;
    toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino;
    fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse;
    fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse;
    toProto(message: QueryValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg;
};
export declare const QueryValidatorsResponse_TssIllegibilityInfo: {
    typeUrl: string;
    encode(message: QueryValidatorsResponse_TssIllegibilityInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValidatorsResponse_TssIllegibilityInfo;
    fromPartial(object: Partial<QueryValidatorsResponse_TssIllegibilityInfo>): QueryValidatorsResponse_TssIllegibilityInfo;
    fromAmino(object: QueryValidatorsResponse_TssIllegibilityInfoAmino): QueryValidatorsResponse_TssIllegibilityInfo;
    toAmino(message: QueryValidatorsResponse_TssIllegibilityInfo): QueryValidatorsResponse_TssIllegibilityInfoAmino;
    fromAminoMsg(object: QueryValidatorsResponse_TssIllegibilityInfoAminoMsg): QueryValidatorsResponse_TssIllegibilityInfo;
    fromProtoMsg(message: QueryValidatorsResponse_TssIllegibilityInfoProtoMsg): QueryValidatorsResponse_TssIllegibilityInfo;
    toProto(message: QueryValidatorsResponse_TssIllegibilityInfo): Uint8Array;
    toProtoMsg(message: QueryValidatorsResponse_TssIllegibilityInfo): QueryValidatorsResponse_TssIllegibilityInfoProtoMsg;
};
export declare const QueryValidatorsResponse_Validator: {
    typeUrl: string;
    encode(message: QueryValidatorsResponse_Validator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValidatorsResponse_Validator;
    fromPartial(object: Partial<QueryValidatorsResponse_Validator>): QueryValidatorsResponse_Validator;
    fromAmino(object: QueryValidatorsResponse_ValidatorAmino): QueryValidatorsResponse_Validator;
    toAmino(message: QueryValidatorsResponse_Validator): QueryValidatorsResponse_ValidatorAmino;
    fromAminoMsg(object: QueryValidatorsResponse_ValidatorAminoMsg): QueryValidatorsResponse_Validator;
    fromProtoMsg(message: QueryValidatorsResponse_ValidatorProtoMsg): QueryValidatorsResponse_Validator;
    toProto(message: QueryValidatorsResponse_Validator): Uint8Array;
    toProtoMsg(message: QueryValidatorsResponse_Validator): QueryValidatorsResponse_ValidatorProtoMsg;
};
