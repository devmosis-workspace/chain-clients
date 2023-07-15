import { Action, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Period, PeriodSDKType } from "../vesting/vesting";
import * as _m0 from "protobufjs/minimal";
export interface ClaimStatus {
    airdropIdentifier: string;
    claimed: boolean;
}
export interface ClaimStatusSDKType {
    airdrop_identifier: string;
    claimed: boolean;
}
export interface QueryClaimStatusRequest {
    address: string;
}
export interface QueryClaimStatusRequestSDKType {
    address: string;
}
export interface QueryClaimStatusResponse {
    claimStatus: ClaimStatus[];
}
export interface QueryClaimStatusResponseSDKType {
    claim_status: ClaimStatusSDKType[];
}
export interface ClaimMetadata {
    airdropIdentifier: string;
    currentRound: string;
    currentRoundStart?: Timestamp;
    currentRoundEnd?: Timestamp;
}
export interface ClaimMetadataSDKType {
    airdrop_identifier: string;
    current_round: string;
    current_round_start?: TimestampSDKType;
    current_round_end?: TimestampSDKType;
}
export interface QueryClaimMetadataRequest {
}
export interface QueryClaimMetadataRequestSDKType {
}
export interface QueryClaimMetadataResponse {
    claimMetadata: ClaimMetadata[];
}
export interface QueryClaimMetadataResponseSDKType {
    claim_metadata: ClaimMetadataSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequest {
    airdropIdentifier: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequestSDKType {
    airdrop_identifier: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponse {
    /** params defines the parameters of the module. */
    distributorAccountBalance: Coin[];
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponseSDKType {
    distributor_account_balance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryClaimRecordRequest {
    airdropIdentifier: string;
    address: string;
}
export interface QueryClaimRecordRequestSDKType {
    airdrop_identifier: string;
    address: string;
}
export interface QueryClaimRecordResponse {
    claimRecord?: ClaimRecord;
}
export interface QueryClaimRecordResponseSDKType {
    claim_record?: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
    airdropIdentifier: string;
    address: string;
    action: Action;
}
export interface QueryClaimableForActionRequestSDKType {
    airdrop_identifier: string;
    address: string;
    action: Action;
}
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
export interface QueryClaimableForActionResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
    airdropIdentifier: string;
    address: string;
    includeClaimed: boolean;
}
export interface QueryTotalClaimableRequestSDKType {
    airdrop_identifier: string;
    address: string;
    include_claimed: boolean;
}
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryUserVestingsRequest {
    address: string;
}
export interface QueryUserVestingsRequestSDKType {
    address: string;
}
export interface QueryUserVestingsResponse {
    spendableCoins: Coin[];
    periods: Period[];
}
export interface QueryUserVestingsResponseSDKType {
    spendable_coins: CoinSDKType[];
    periods: PeriodSDKType[];
}
export declare const ClaimStatus: {
    encode(message: ClaimStatus, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimStatus;
    fromPartial(object: Partial<ClaimStatus>): ClaimStatus;
};
export declare const QueryClaimStatusRequest: {
    encode(message: QueryClaimStatusRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimStatusRequest;
    fromPartial(object: Partial<QueryClaimStatusRequest>): QueryClaimStatusRequest;
};
export declare const QueryClaimStatusResponse: {
    encode(message: QueryClaimStatusResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimStatusResponse;
    fromPartial(object: Partial<QueryClaimStatusResponse>): QueryClaimStatusResponse;
};
export declare const ClaimMetadata: {
    encode(message: ClaimMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimMetadata;
    fromPartial(object: Partial<ClaimMetadata>): ClaimMetadata;
};
export declare const QueryClaimMetadataRequest: {
    encode(_: QueryClaimMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryClaimMetadataRequest;
    fromPartial(_: Partial<QueryClaimMetadataRequest>): QueryClaimMetadataRequest;
};
export declare const QueryClaimMetadataResponse: {
    encode(message: QueryClaimMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimMetadataResponse;
    fromPartial(object: Partial<QueryClaimMetadataResponse>): QueryClaimMetadataResponse;
};
export declare const QueryDistributorAccountBalanceRequest: {
    encode(message: QueryDistributorAccountBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDistributorAccountBalanceRequest;
    fromPartial(object: Partial<QueryDistributorAccountBalanceRequest>): QueryDistributorAccountBalanceRequest;
};
export declare const QueryDistributorAccountBalanceResponse: {
    encode(message: QueryDistributorAccountBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDistributorAccountBalanceResponse;
    fromPartial(object: Partial<QueryDistributorAccountBalanceResponse>): QueryDistributorAccountBalanceResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryClaimRecordRequest: {
    encode(message: QueryClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimRecordRequest;
    fromPartial(object: Partial<QueryClaimRecordRequest>): QueryClaimRecordRequest;
};
export declare const QueryClaimRecordResponse: {
    encode(message: QueryClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimRecordResponse;
    fromPartial(object: Partial<QueryClaimRecordResponse>): QueryClaimRecordResponse;
};
export declare const QueryClaimableForActionRequest: {
    encode(message: QueryClaimableForActionRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimableForActionRequest;
    fromPartial(object: Partial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest;
};
export declare const QueryClaimableForActionResponse: {
    encode(message: QueryClaimableForActionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClaimableForActionResponse;
    fromPartial(object: Partial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse;
};
export declare const QueryTotalClaimableRequest: {
    encode(message: QueryTotalClaimableRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalClaimableRequest;
    fromPartial(object: Partial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest;
};
export declare const QueryTotalClaimableResponse: {
    encode(message: QueryTotalClaimableResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalClaimableResponse;
    fromPartial(object: Partial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse;
};
export declare const QueryUserVestingsRequest: {
    encode(message: QueryUserVestingsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryUserVestingsRequest;
    fromPartial(object: Partial<QueryUserVestingsRequest>): QueryUserVestingsRequest;
};
export declare const QueryUserVestingsResponse: {
    encode(message: QueryUserVestingsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryUserVestingsResponse;
    fromPartial(object: Partial<QueryUserVestingsResponse>): QueryUserVestingsResponse;
};
