import * as _m0 from "protobufjs/minimal";
export interface QueryValidatorsResponse {
    validators: QueryValidatorsResponse_Validator[];
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
    tssIllegibilityInfo?: QueryValidatorsResponse_TssIllegibilityInfo;
}
export interface QueryValidatorsResponse_ValidatorSDKType {
    operator_address: string;
    moniker: string;
    tss_illegibility_info?: QueryValidatorsResponse_TssIllegibilityInfoSDKType;
}
export declare const QueryValidatorsResponse: {
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorsResponse;
    fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse;
};
export declare const QueryValidatorsResponse_TssIllegibilityInfo: {
    encode(message: QueryValidatorsResponse_TssIllegibilityInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorsResponse_TssIllegibilityInfo;
    fromPartial(object: Partial<QueryValidatorsResponse_TssIllegibilityInfo>): QueryValidatorsResponse_TssIllegibilityInfo;
};
export declare const QueryValidatorsResponse_Validator: {
    encode(message: QueryValidatorsResponse_Validator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValidatorsResponse_Validator;
    fromPartial(object: Partial<QueryValidatorsResponse_Validator>): QueryValidatorsResponse_Validator;
};
