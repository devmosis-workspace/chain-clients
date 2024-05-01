import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export declare enum TokenizeShareLockStatus {
    /** TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED - UNSPECIFIED defines an empty tokenize share lock status */
    TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED = 0,
    /** TOKENIZE_SHARE_LOCK_STATUS_LOCKED - LOCKED indicates the account is locked and cannot tokenize shares */
    TOKENIZE_SHARE_LOCK_STATUS_LOCKED = 1,
    /** TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED - UNLOCKED indicates the account is unlocked and can tokenize shares */
    TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED = 2,
    /**
     * TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING - LOCK_EXPIRING indicates the account is unable to tokenize shares, but
     * will be able to tokenize shortly (after 1 unbonding period)
     */
    TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING = 3,
    UNRECOGNIZED = -1
}
export declare const TokenizeShareLockStatusSDKType: typeof TokenizeShareLockStatus;
export declare const TokenizeShareLockStatusAmino: typeof TokenizeShareLockStatus;
export declare function tokenizeShareLockStatusFromJSON(object: any): TokenizeShareLockStatus;
export declare function tokenizeShareLockStatusToJSON(object: TokenizeShareLockStatus): string;
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordReward {
    recordId: bigint;
    reward: DecCoin[];
}
export interface TokenizeShareRecordRewardProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward";
    value: Uint8Array;
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordRewardAmino {
    record_id?: string;
    reward?: DecCoinAmino[];
}
export interface TokenizeShareRecordRewardAminoMsg {
    type: "cosmos-sdk/TokenizeShareRecordReward";
    value: TokenizeShareRecordRewardAmino;
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordRewardSDKType {
    record_id: bigint;
    reward: DecCoinSDKType[];
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC
 * method.
 */
export interface QueryTokenizeShareRecordRewardRequest {
    ownerAddress: string;
}
export interface QueryTokenizeShareRecordRewardRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC
 * method.
 */
export interface QueryTokenizeShareRecordRewardRequestAmino {
    owner_address?: string;
}
export interface QueryTokenizeShareRecordRewardRequestAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest";
    value: QueryTokenizeShareRecordRewardRequestAmino;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC
 * method.
 */
export interface QueryTokenizeShareRecordRewardRequestSDKType {
    owner_address: string;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponse {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: TokenizeShareRecordReward[];
    /** total defines the sum of all the rewards. */
    total: DecCoin[];
}
export interface QueryTokenizeShareRecordRewardResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseAmino {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards?: TokenizeShareRecordRewardAmino[];
    /** total defines the sum of all the rewards. */
    total?: DecCoinAmino[];
}
export interface QueryTokenizeShareRecordRewardResponseAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse";
    value: QueryTokenizeShareRecordRewardResponseAmino;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseSDKType {
    rewards: TokenizeShareRecordRewardSDKType[];
    total: DecCoinSDKType[];
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordReward {
    ownerAddress: string;
    recordId: bigint;
}
export interface MsgWithdrawTokenizeShareRecordRewardProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordRewardAmino {
    owner_address?: string;
    record_id?: string;
}
export interface MsgWithdrawTokenizeShareRecordRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward";
    value: MsgWithdrawTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordRewardSDKType {
    owner_address: string;
    record_id: bigint;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponse {
}
export interface MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseAmino {
}
export interface MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse";
    value: MsgWithdrawTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordReward {
    ownerAddress: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardAmino {
    owner_address?: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward";
    value: MsgWithdrawAllTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardSDKType {
    owner_address: string;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {
}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {
}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse";
    value: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
    id: bigint;
}
export interface QueryTokenizeShareRecordByIdRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestAmino {
    id?: string;
}
export interface QueryTokenizeShareRecordByIdRequestAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest";
    value: QueryTokenizeShareRecordByIdRequestAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestSDKType {
    id: bigint;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
    record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByIdResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseAmino {
    record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByIdResponseAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse";
    value: QueryTokenizeShareRecordByIdResponseAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseSDKType {
    record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
    denom: string;
}
export interface QueryTokenizeShareRecordByDenomRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestAmino {
    denom?: string;
}
export interface QueryTokenizeShareRecordByDenomRequestAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest";
    value: QueryTokenizeShareRecordByDenomRequestAmino;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestSDKType {
    denom: string;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
    record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByDenomResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseAmino {
    record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByDenomResponseAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse";
    value: QueryTokenizeShareRecordByDenomResponseAmino;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseSDKType {
    record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
    owner: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestAmino {
    owner?: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest";
    value: QueryTokenizeShareRecordsOwnedRequestAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestSDKType {
    owner: string;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
    records: TokenizeShareRecord[];
}
export interface QueryTokenizeShareRecordsOwnedResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseAmino {
    records?: TokenizeShareRecordAmino[];
}
export interface QueryTokenizeShareRecordsOwnedResponseAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse";
    value: QueryTokenizeShareRecordsOwnedResponseAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseSDKType {
    records: TokenizeShareRecordSDKType[];
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryAllTokenizeShareRecordsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest";
    value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAllTokenizeShareRecordsRequestAminoMsg {
    type: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest";
    value: QueryAllTokenizeShareRecordsRequestAmino;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
    records: TokenizeShareRecord[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryAllTokenizeShareRecordsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse";
    value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseAmino {
    records?: TokenizeShareRecordAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllTokenizeShareRecordsResponseAminoMsg {
    type: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse";
    value: QueryAllTokenizeShareRecordsResponseAmino;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseSDKType {
    records: TokenizeShareRecordSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {
}
export interface QueryLastTokenizeShareRecordIdRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest";
    value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestAmino {
}
export interface QueryLastTokenizeShareRecordIdRequestAminoMsg {
    type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest";
    value: QueryLastTokenizeShareRecordIdRequestAmino;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
    id: bigint;
}
export interface QueryLastTokenizeShareRecordIdResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse";
    value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseAmino {
    id?: string;
}
export interface QueryLastTokenizeShareRecordIdResponseAminoMsg {
    type: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse";
    value: QueryLastTokenizeShareRecordIdResponseAmino;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseSDKType {
    id: bigint;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {
}
export interface QueryTotalTokenizeSharedAssetsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
    value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestAmino {
}
export interface QueryTotalTokenizeSharedAssetsRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest";
    value: QueryTotalTokenizeSharedAssetsRequestAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
    value: Coin;
}
export interface QueryTotalTokenizeSharedAssetsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
    value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseAmino {
    value?: CoinAmino;
}
export interface QueryTotalTokenizeSharedAssetsResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse";
    value: QueryTotalTokenizeSharedAssetsResponseAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseSDKType {
    value: CoinSDKType;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {
}
export interface QueryTotalLiquidStakedProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked";
    value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedAmino {
}
export interface QueryTotalLiquidStakedAminoMsg {
    type: "cosmos-sdk/QueryTotalLiquidStaked";
    value: QueryTotalLiquidStakedAmino;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
    tokens: string;
}
export interface QueryTotalLiquidStakedResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse";
    value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseAmino {
    tokens?: string;
}
export interface QueryTotalLiquidStakedResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalLiquidStakedResponse";
    value: QueryTotalLiquidStakedResponseAmino;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseSDKType {
    tokens: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
    address: string;
}
export interface QueryTokenizeShareLockInfoProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoAmino {
    address?: string;
}
export interface QueryTokenizeShareLockInfoAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareLockInfo";
    value: QueryTokenizeShareLockInfoAmino;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoSDKType {
    address: string;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
    status: string;
    expirationTime: string;
}
export interface QueryTokenizeShareLockInfoResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse";
    value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseAmino {
    status?: string;
    expiration_time?: string;
}
export interface QueryTokenizeShareLockInfoResponseAminoMsg {
    type: "cosmos-sdk/QueryTokenizeShareLockInfoResponse";
    value: QueryTokenizeShareLockInfoResponseAmino;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseSDKType {
    status: string;
    expiration_time: string;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecord {
    id: bigint;
    owner: string;
    /** module account take the role of delegator */
    moduleAccount: string;
    /** validator delegated to for tokenize share record creation */
    validator: string;
}
export interface TokenizeShareRecordProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord";
    value: Uint8Array;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecordAmino {
    id?: string;
    owner?: string;
    /** module account take the role of delegator */
    module_account?: string;
    /** validator delegated to for tokenize share record creation */
    validator?: string;
}
export interface TokenizeShareRecordAminoMsg {
    type: "cosmos-sdk/TokenizeShareRecord";
    value: TokenizeShareRecordAmino;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecordSDKType {
    id: bigint;
    owner: string;
    module_account: string;
    validator: string;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizations {
    addresses: string[];
}
export interface PendingTokenizeShareAuthorizationsProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations";
    value: Uint8Array;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizationsAmino {
    addresses?: string[];
}
export interface PendingTokenizeShareAuthorizationsAminoMsg {
    type: "cosmos-sdk/PendingTokenizeShareAuthorizations";
    value: PendingTokenizeShareAuthorizationsAmino;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizationsSDKType {
    addresses: string[];
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidator {
    validatorAddress: string;
}
export interface MsgUnbondValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator";
    value: Uint8Array;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidatorAmino {
    validator_address?: string;
}
export interface MsgUnbondValidatorAminoMsg {
    type: "cosmos-sdk/MsgUnbondValidator";
    value: MsgUnbondValidatorAmino;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidatorSDKType {
    validator_address: string;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponse {
}
export interface MsgUnbondValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse";
    value: Uint8Array;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseAmino {
}
export interface MsgUnbondValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgUnbondValidatorResponse";
    value: MsgUnbondValidatorResponseAmino;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseSDKType {
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
    delegatorAddress: string;
    validatorAddress: string;
    amount: Coin;
    tokenizedShareOwner: string;
}
export interface MsgTokenizeSharesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares";
    value: Uint8Array;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesAmino {
    delegator_address?: string;
    validator_address?: string;
    amount?: CoinAmino;
    tokenized_share_owner?: string;
}
export interface MsgTokenizeSharesAminoMsg {
    type: "cosmos-sdk/MsgTokenizeShares";
    value: MsgTokenizeSharesAmino;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesSDKType {
    delegator_address: string;
    validator_address: string;
    amount: CoinSDKType;
    tokenized_share_owner: string;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponse {
    amount: Coin;
}
export interface MsgTokenizeSharesResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse";
    value: Uint8Array;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseAmino {
    amount?: CoinAmino;
}
export interface MsgTokenizeSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgTokenizeSharesResponse";
    value: MsgTokenizeSharesResponseAmino;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseSDKType {
    amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForShares {
    delegatorAddress: string;
    amount: Coin;
}
export interface MsgRedeemTokensForSharesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares";
    value: Uint8Array;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesAmino {
    delegator_address?: string;
    amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesAminoMsg {
    type: "cosmos-sdk/MsgRedeemTokensForShares";
    value: MsgRedeemTokensForSharesAmino;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesSDKType {
    delegator_address: string;
    amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponse {
    amount: Coin;
}
export interface MsgRedeemTokensForSharesResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse";
    value: Uint8Array;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseAmino {
    amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgRedeemTokensForSharesResponse";
    value: MsgRedeemTokensForSharesResponseAmino;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseSDKType {
    amount: CoinSDKType;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecord {
    tokenizeShareRecordId: bigint;
    sender: string;
    newOwner: string;
}
export interface MsgTransferTokenizeShareRecordProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord";
    value: Uint8Array;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordAmino {
    tokenize_share_record_id?: string;
    sender?: string;
    new_owner?: string;
}
export interface MsgTransferTokenizeShareRecordAminoMsg {
    type: "cosmos-sdk/MsgTransferTokenizeShareRecord";
    value: MsgTransferTokenizeShareRecordAmino;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordSDKType {
    tokenize_share_record_id: bigint;
    sender: string;
    new_owner: string;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponse {
}
export interface MsgTransferTokenizeShareRecordResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse";
    value: Uint8Array;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseAmino {
}
export interface MsgTransferTokenizeShareRecordResponseAminoMsg {
    type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse";
    value: MsgTransferTokenizeShareRecordResponseAmino;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseSDKType {
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeShares {
    delegatorAddress: string;
}
export interface MsgDisableTokenizeSharesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares";
    value: Uint8Array;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesAmino {
    delegator_address?: string;
}
export interface MsgDisableTokenizeSharesAminoMsg {
    type: "cosmos-sdk/MsgDisableTokenizeShares";
    value: MsgDisableTokenizeSharesAmino;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesSDKType {
    delegator_address: string;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponse {
}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse";
    value: Uint8Array;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseAmino {
}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgDisableTokenizeSharesResponse";
    value: MsgDisableTokenizeSharesResponseAmino;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseSDKType {
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
    delegatorAddress: string;
}
export interface MsgEnableTokenizeSharesProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares";
    value: Uint8Array;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesAmino {
    delegator_address?: string;
}
export interface MsgEnableTokenizeSharesAminoMsg {
    type: "cosmos-sdk/MsgEnableTokenizeShares";
    value: MsgEnableTokenizeSharesAmino;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesSDKType {
    delegator_address: string;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponse {
    completionTime: Timestamp;
}
export interface MsgEnableTokenizeSharesResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse";
    value: Uint8Array;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseAmino {
    completion_time?: string;
}
export interface MsgEnableTokenizeSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgEnableTokenizeSharesResponse";
    value: MsgEnableTokenizeSharesResponseAmino;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseSDKType {
    completion_time: TimestampSDKType;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of
 * delegated coins from a delegator to a validator.
 */
export interface MsgValidatorBond {
    delegatorAddress: string;
    validatorAddress: string;
}
export interface MsgValidatorBondProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond";
    value: Uint8Array;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of
 * delegated coins from a delegator to a validator.
 */
export interface MsgValidatorBondAmino {
    delegator_address?: string;
    validator_address?: string;
}
export interface MsgValidatorBondAminoMsg {
    type: "cosmos-sdk/MsgValidatorBond";
    value: MsgValidatorBondAmino;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of
 * delegated coins from a delegator to a validator.
 */
export interface MsgValidatorBondSDKType {
    delegator_address: string;
    validator_address: string;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponse {
}
export interface MsgValidatorBondResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse";
    value: Uint8Array;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseAmino {
}
export interface MsgValidatorBondResponseAminoMsg {
    type: "cosmos-sdk/MsgValidatorBondResponse";
    value: MsgValidatorBondResponseAmino;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseSDKType {
}
export declare const TokenizeShareRecordReward: {
    typeUrl: string;
    encode(message: TokenizeShareRecordReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenizeShareRecordReward;
    fromPartial(object: Partial<TokenizeShareRecordReward>): TokenizeShareRecordReward;
    fromAmino(object: TokenizeShareRecordRewardAmino): TokenizeShareRecordReward;
    toAmino(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAmino;
    fromAminoMsg(object: TokenizeShareRecordRewardAminoMsg): TokenizeShareRecordReward;
    toAminoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAminoMsg;
    fromProtoMsg(message: TokenizeShareRecordRewardProtoMsg): TokenizeShareRecordReward;
    toProto(message: TokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardProtoMsg;
};
export declare const QueryTokenizeShareRecordRewardRequest: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordRewardRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareRecordRewardRequest;
    fromPartial(object: Partial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest;
    fromAmino(object: QueryTokenizeShareRecordRewardRequestAmino): QueryTokenizeShareRecordRewardRequest;
    toAmino(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordRewardRequestAminoMsg): QueryTokenizeShareRecordRewardRequest;
    toAminoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordRewardRequestProtoMsg): QueryTokenizeShareRecordRewardRequest;
    toProto(message: QueryTokenizeShareRecordRewardRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareRecordRewardResponse;
    fromPartial(object: Partial<QueryTokenizeShareRecordRewardResponse>): QueryTokenizeShareRecordRewardResponse;
    fromAmino(object: QueryTokenizeShareRecordRewardResponseAmino): QueryTokenizeShareRecordRewardResponse;
    toAmino(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordRewardResponseAminoMsg): QueryTokenizeShareRecordRewardResponse;
    toAminoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordRewardResponseProtoMsg): QueryTokenizeShareRecordRewardResponse;
    toProto(message: QueryTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseProtoMsg;
};
export declare const MsgWithdrawTokenizeShareRecordReward: {
    typeUrl: string;
    encode(message: MsgWithdrawTokenizeShareRecordReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawTokenizeShareRecordReward;
    fromPartial(object: Partial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward;
    fromAmino(object: MsgWithdrawTokenizeShareRecordRewardAmino): MsgWithdrawTokenizeShareRecordReward;
    toAmino(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAmino;
    fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardAminoMsg): MsgWithdrawTokenizeShareRecordReward;
    toAminoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardProtoMsg): MsgWithdrawTokenizeShareRecordReward;
    toProto(message: MsgWithdrawTokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardProtoMsg;
};
export declare const MsgWithdrawTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawTokenizeShareRecordRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawTokenizeShareRecordRewardResponse;
    fromPartial(_: Partial<MsgWithdrawTokenizeShareRecordRewardResponse>): MsgWithdrawTokenizeShareRecordRewardResponse;
    fromAmino(_: MsgWithdrawTokenizeShareRecordRewardResponseAmino): MsgWithdrawTokenizeShareRecordRewardResponse;
    toAmino(_: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawTokenizeShareRecordRewardResponse;
    toAminoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawTokenizeShareRecordRewardResponse;
    toProto(message: MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
};
export declare const MsgWithdrawAllTokenizeShareRecordReward: {
    typeUrl: string;
    encode(message: MsgWithdrawAllTokenizeShareRecordReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawAllTokenizeShareRecordReward;
    fromPartial(object: Partial<MsgWithdrawAllTokenizeShareRecordReward>): MsgWithdrawAllTokenizeShareRecordReward;
    fromAmino(object: MsgWithdrawAllTokenizeShareRecordRewardAmino): MsgWithdrawAllTokenizeShareRecordReward;
    toAmino(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAmino;
    fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): MsgWithdrawAllTokenizeShareRecordReward;
    toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): MsgWithdrawAllTokenizeShareRecordReward;
    toProto(message: MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
};
export declare const MsgWithdrawAllTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    fromPartial(_: Partial<MsgWithdrawAllTokenizeShareRecordRewardResponse>): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    fromAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toProto(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordByIdRequest: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordByIdRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareRecordByIdRequest;
    fromPartial(object: Partial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest;
    fromAmino(object: QueryTokenizeShareRecordByIdRequestAmino): QueryTokenizeShareRecordByIdRequest;
    toAmino(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByIdRequestAminoMsg): QueryTokenizeShareRecordByIdRequest;
    toAminoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordByIdRequestProtoMsg): QueryTokenizeShareRecordByIdRequest;
    toProto(message: QueryTokenizeShareRecordByIdRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordByIdResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordByIdResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareRecordByIdResponse;
    fromPartial(object: Partial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse;
    fromAmino(object: QueryTokenizeShareRecordByIdResponseAmino): QueryTokenizeShareRecordByIdResponse;
    toAmino(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByIdResponseAminoMsg): QueryTokenizeShareRecordByIdResponse;
    toAminoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordByIdResponseProtoMsg): QueryTokenizeShareRecordByIdResponse;
    toProto(message: QueryTokenizeShareRecordByIdResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordByDenomRequest: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareRecordByDenomRequest;
    fromPartial(object: Partial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest;
    fromAmino(object: QueryTokenizeShareRecordByDenomRequestAmino): QueryTokenizeShareRecordByDenomRequest;
    toAmino(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByDenomRequestAminoMsg): QueryTokenizeShareRecordByDenomRequest;
    toAminoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordByDenomRequestProtoMsg): QueryTokenizeShareRecordByDenomRequest;
    toProto(message: QueryTokenizeShareRecordByDenomRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordByDenomResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareRecordByDenomResponse;
    fromPartial(object: Partial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse;
    fromAmino(object: QueryTokenizeShareRecordByDenomResponseAmino): QueryTokenizeShareRecordByDenomResponse;
    toAmino(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByDenomResponseAminoMsg): QueryTokenizeShareRecordByDenomResponse;
    toAminoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordByDenomResponseProtoMsg): QueryTokenizeShareRecordByDenomResponse;
    toProto(message: QueryTokenizeShareRecordByDenomResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordsOwnedRequest: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordsOwnedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareRecordsOwnedRequest;
    fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest;
    fromAmino(object: QueryTokenizeShareRecordsOwnedRequestAmino): QueryTokenizeShareRecordsOwnedRequest;
    toAmino(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordsOwnedRequestAminoMsg): QueryTokenizeShareRecordsOwnedRequest;
    toAminoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordsOwnedRequestProtoMsg): QueryTokenizeShareRecordsOwnedRequest;
    toProto(message: QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordsOwnedResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareRecordsOwnedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareRecordsOwnedResponse;
    fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse;
    fromAmino(object: QueryTokenizeShareRecordsOwnedResponseAmino): QueryTokenizeShareRecordsOwnedResponse;
    toAmino(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordsOwnedResponseAminoMsg): QueryTokenizeShareRecordsOwnedResponse;
    toAminoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordsOwnedResponseProtoMsg): QueryTokenizeShareRecordsOwnedResponse;
    toProto(message: QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseProtoMsg;
};
export declare const QueryAllTokenizeShareRecordsRequest: {
    typeUrl: string;
    encode(message: QueryAllTokenizeShareRecordsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllTokenizeShareRecordsRequest;
    fromPartial(object: Partial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest;
    fromAmino(object: QueryAllTokenizeShareRecordsRequestAmino): QueryAllTokenizeShareRecordsRequest;
    toAmino(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAmino;
    fromAminoMsg(object: QueryAllTokenizeShareRecordsRequestAminoMsg): QueryAllTokenizeShareRecordsRequest;
    toAminoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAminoMsg;
    fromProtoMsg(message: QueryAllTokenizeShareRecordsRequestProtoMsg): QueryAllTokenizeShareRecordsRequest;
    toProto(message: QueryAllTokenizeShareRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestProtoMsg;
};
export declare const QueryAllTokenizeShareRecordsResponse: {
    typeUrl: string;
    encode(message: QueryAllTokenizeShareRecordsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllTokenizeShareRecordsResponse;
    fromPartial(object: Partial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse;
    fromAmino(object: QueryAllTokenizeShareRecordsResponseAmino): QueryAllTokenizeShareRecordsResponse;
    toAmino(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAmino;
    fromAminoMsg(object: QueryAllTokenizeShareRecordsResponseAminoMsg): QueryAllTokenizeShareRecordsResponse;
    toAminoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAminoMsg;
    fromProtoMsg(message: QueryAllTokenizeShareRecordsResponseProtoMsg): QueryAllTokenizeShareRecordsResponse;
    toProto(message: QueryAllTokenizeShareRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseProtoMsg;
};
export declare const QueryLastTokenizeShareRecordIdRequest: {
    typeUrl: string;
    encode(_: QueryLastTokenizeShareRecordIdRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLastTokenizeShareRecordIdRequest;
    fromPartial(_: Partial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest;
    fromAmino(_: QueryLastTokenizeShareRecordIdRequestAmino): QueryLastTokenizeShareRecordIdRequest;
    toAmino(_: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAmino;
    fromAminoMsg(object: QueryLastTokenizeShareRecordIdRequestAminoMsg): QueryLastTokenizeShareRecordIdRequest;
    toAminoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAminoMsg;
    fromProtoMsg(message: QueryLastTokenizeShareRecordIdRequestProtoMsg): QueryLastTokenizeShareRecordIdRequest;
    toProto(message: QueryLastTokenizeShareRecordIdRequest): Uint8Array;
    toProtoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestProtoMsg;
};
export declare const QueryLastTokenizeShareRecordIdResponse: {
    typeUrl: string;
    encode(message: QueryLastTokenizeShareRecordIdResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastTokenizeShareRecordIdResponse;
    fromPartial(object: Partial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse;
    fromAmino(object: QueryLastTokenizeShareRecordIdResponseAmino): QueryLastTokenizeShareRecordIdResponse;
    toAmino(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAmino;
    fromAminoMsg(object: QueryLastTokenizeShareRecordIdResponseAminoMsg): QueryLastTokenizeShareRecordIdResponse;
    toAminoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAminoMsg;
    fromProtoMsg(message: QueryLastTokenizeShareRecordIdResponseProtoMsg): QueryLastTokenizeShareRecordIdResponse;
    toProto(message: QueryLastTokenizeShareRecordIdResponse): Uint8Array;
    toProtoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseProtoMsg;
};
export declare const QueryTotalTokenizeSharedAssetsRequest: {
    typeUrl: string;
    encode(_: QueryTotalTokenizeSharedAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalTokenizeSharedAssetsRequest;
    fromPartial(_: Partial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest;
    fromAmino(_: QueryTotalTokenizeSharedAssetsRequestAmino): QueryTotalTokenizeSharedAssetsRequest;
    toAmino(_: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAmino;
    fromAminoMsg(object: QueryTotalTokenizeSharedAssetsRequestAminoMsg): QueryTotalTokenizeSharedAssetsRequest;
    toAminoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAminoMsg;
    fromProtoMsg(message: QueryTotalTokenizeSharedAssetsRequestProtoMsg): QueryTotalTokenizeSharedAssetsRequest;
    toProto(message: QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
    toProtoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestProtoMsg;
};
export declare const QueryTotalTokenizeSharedAssetsResponse: {
    typeUrl: string;
    encode(message: QueryTotalTokenizeSharedAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalTokenizeSharedAssetsResponse;
    fromPartial(object: Partial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse;
    fromAmino(object: QueryTotalTokenizeSharedAssetsResponseAmino): QueryTotalTokenizeSharedAssetsResponse;
    toAmino(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAmino;
    fromAminoMsg(object: QueryTotalTokenizeSharedAssetsResponseAminoMsg): QueryTotalTokenizeSharedAssetsResponse;
    toAminoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAminoMsg;
    fromProtoMsg(message: QueryTotalTokenizeSharedAssetsResponseProtoMsg): QueryTotalTokenizeSharedAssetsResponse;
    toProto(message: QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
    toProtoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseProtoMsg;
};
export declare const QueryTotalLiquidStaked: {
    typeUrl: string;
    encode(_: QueryTotalLiquidStaked, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalLiquidStaked;
    fromPartial(_: Partial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked;
    fromAmino(_: QueryTotalLiquidStakedAmino): QueryTotalLiquidStaked;
    toAmino(_: QueryTotalLiquidStaked): QueryTotalLiquidStakedAmino;
    fromAminoMsg(object: QueryTotalLiquidStakedAminoMsg): QueryTotalLiquidStaked;
    toAminoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidStakedProtoMsg): QueryTotalLiquidStaked;
    toProto(message: QueryTotalLiquidStaked): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedProtoMsg;
};
export declare const QueryTotalLiquidStakedResponse: {
    typeUrl: string;
    encode(message: QueryTotalLiquidStakedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalLiquidStakedResponse;
    fromPartial(object: Partial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse;
    fromAmino(object: QueryTotalLiquidStakedResponseAmino): QueryTotalLiquidStakedResponse;
    toAmino(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAmino;
    fromAminoMsg(object: QueryTotalLiquidStakedResponseAminoMsg): QueryTotalLiquidStakedResponse;
    toAminoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidStakedResponseProtoMsg): QueryTotalLiquidStakedResponse;
    toProto(message: QueryTotalLiquidStakedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseProtoMsg;
};
export declare const QueryTokenizeShareLockInfo: {
    typeUrl: string;
    encode(message: QueryTokenizeShareLockInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareLockInfo;
    fromPartial(object: Partial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo;
    fromAmino(object: QueryTokenizeShareLockInfoAmino): QueryTokenizeShareLockInfo;
    toAmino(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAmino;
    fromAminoMsg(object: QueryTokenizeShareLockInfoAminoMsg): QueryTokenizeShareLockInfo;
    toAminoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareLockInfoProtoMsg): QueryTokenizeShareLockInfo;
    toProto(message: QueryTokenizeShareLockInfo): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoProtoMsg;
};
export declare const QueryTokenizeShareLockInfoResponse: {
    typeUrl: string;
    encode(message: QueryTokenizeShareLockInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenizeShareLockInfoResponse;
    fromPartial(object: Partial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse;
    fromAmino(object: QueryTokenizeShareLockInfoResponseAmino): QueryTokenizeShareLockInfoResponse;
    toAmino(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareLockInfoResponseAminoMsg): QueryTokenizeShareLockInfoResponse;
    toAminoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareLockInfoResponseProtoMsg): QueryTokenizeShareLockInfoResponse;
    toProto(message: QueryTokenizeShareLockInfoResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseProtoMsg;
};
export declare const TokenizeShareRecord: {
    typeUrl: string;
    encode(message: TokenizeShareRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenizeShareRecord;
    fromPartial(object: Partial<TokenizeShareRecord>): TokenizeShareRecord;
    fromAmino(object: TokenizeShareRecordAmino): TokenizeShareRecord;
    toAmino(message: TokenizeShareRecord): TokenizeShareRecordAmino;
    fromAminoMsg(object: TokenizeShareRecordAminoMsg): TokenizeShareRecord;
    toAminoMsg(message: TokenizeShareRecord): TokenizeShareRecordAminoMsg;
    fromProtoMsg(message: TokenizeShareRecordProtoMsg): TokenizeShareRecord;
    toProto(message: TokenizeShareRecord): Uint8Array;
    toProtoMsg(message: TokenizeShareRecord): TokenizeShareRecordProtoMsg;
};
export declare const PendingTokenizeShareAuthorizations: {
    typeUrl: string;
    encode(message: PendingTokenizeShareAuthorizations, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PendingTokenizeShareAuthorizations;
    fromPartial(object: Partial<PendingTokenizeShareAuthorizations>): PendingTokenizeShareAuthorizations;
    fromAmino(object: PendingTokenizeShareAuthorizationsAmino): PendingTokenizeShareAuthorizations;
    toAmino(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAmino;
    fromAminoMsg(object: PendingTokenizeShareAuthorizationsAminoMsg): PendingTokenizeShareAuthorizations;
    toAminoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAminoMsg;
    fromProtoMsg(message: PendingTokenizeShareAuthorizationsProtoMsg): PendingTokenizeShareAuthorizations;
    toProto(message: PendingTokenizeShareAuthorizations): Uint8Array;
    toProtoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsProtoMsg;
};
export declare const MsgUnbondValidator: {
    typeUrl: string;
    encode(message: MsgUnbondValidator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnbondValidator;
    fromPartial(object: Partial<MsgUnbondValidator>): MsgUnbondValidator;
    fromAmino(object: MsgUnbondValidatorAmino): MsgUnbondValidator;
    toAmino(message: MsgUnbondValidator): MsgUnbondValidatorAmino;
    fromAminoMsg(object: MsgUnbondValidatorAminoMsg): MsgUnbondValidator;
    toAminoMsg(message: MsgUnbondValidator): MsgUnbondValidatorAminoMsg;
    fromProtoMsg(message: MsgUnbondValidatorProtoMsg): MsgUnbondValidator;
    toProto(message: MsgUnbondValidator): Uint8Array;
    toProtoMsg(message: MsgUnbondValidator): MsgUnbondValidatorProtoMsg;
};
export declare const MsgUnbondValidatorResponse: {
    typeUrl: string;
    encode(_: MsgUnbondValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnbondValidatorResponse;
    fromPartial(_: Partial<MsgUnbondValidatorResponse>): MsgUnbondValidatorResponse;
    fromAmino(_: MsgUnbondValidatorResponseAmino): MsgUnbondValidatorResponse;
    toAmino(_: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAmino;
    fromAminoMsg(object: MsgUnbondValidatorResponseAminoMsg): MsgUnbondValidatorResponse;
    toAminoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgUnbondValidatorResponseProtoMsg): MsgUnbondValidatorResponse;
    toProto(message: MsgUnbondValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseProtoMsg;
};
export declare const MsgTokenizeShares: {
    typeUrl: string;
    encode(message: MsgTokenizeShares, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTokenizeShares;
    fromPartial(object: Partial<MsgTokenizeShares>): MsgTokenizeShares;
    fromAmino(object: MsgTokenizeSharesAmino): MsgTokenizeShares;
    toAmino(message: MsgTokenizeShares): MsgTokenizeSharesAmino;
    fromAminoMsg(object: MsgTokenizeSharesAminoMsg): MsgTokenizeShares;
    toAminoMsg(message: MsgTokenizeShares): MsgTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgTokenizeSharesProtoMsg): MsgTokenizeShares;
    toProto(message: MsgTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgTokenizeShares): MsgTokenizeSharesProtoMsg;
};
export declare const MsgTokenizeSharesResponse: {
    typeUrl: string;
    encode(message: MsgTokenizeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTokenizeSharesResponse;
    fromPartial(object: Partial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse;
    fromAmino(object: MsgTokenizeSharesResponseAmino): MsgTokenizeSharesResponse;
    toAmino(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgTokenizeSharesResponseAminoMsg): MsgTokenizeSharesResponse;
    toAminoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAminoMsg;
    fromProtoMsg(message: MsgTokenizeSharesResponseProtoMsg): MsgTokenizeSharesResponse;
    toProto(message: MsgTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseProtoMsg;
};
export declare const MsgRedeemTokensForShares: {
    typeUrl: string;
    encode(message: MsgRedeemTokensForShares, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRedeemTokensForShares;
    fromPartial(object: Partial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares;
    fromAmino(object: MsgRedeemTokensForSharesAmino): MsgRedeemTokensForShares;
    toAmino(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAmino;
    fromAminoMsg(object: MsgRedeemTokensForSharesAminoMsg): MsgRedeemTokensForShares;
    toAminoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAminoMsg;
    fromProtoMsg(message: MsgRedeemTokensForSharesProtoMsg): MsgRedeemTokensForShares;
    toProto(message: MsgRedeemTokensForShares): Uint8Array;
    toProtoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesProtoMsg;
};
export declare const MsgRedeemTokensForSharesResponse: {
    typeUrl: string;
    encode(message: MsgRedeemTokensForSharesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRedeemTokensForSharesResponse;
    fromPartial(object: Partial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse;
    fromAmino(object: MsgRedeemTokensForSharesResponseAmino): MsgRedeemTokensForSharesResponse;
    toAmino(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAmino;
    fromAminoMsg(object: MsgRedeemTokensForSharesResponseAminoMsg): MsgRedeemTokensForSharesResponse;
    toAminoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAminoMsg;
    fromProtoMsg(message: MsgRedeemTokensForSharesResponseProtoMsg): MsgRedeemTokensForSharesResponse;
    toProto(message: MsgRedeemTokensForSharesResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseProtoMsg;
};
export declare const MsgTransferTokenizeShareRecord: {
    typeUrl: string;
    encode(message: MsgTransferTokenizeShareRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferTokenizeShareRecord;
    fromPartial(object: Partial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord;
    fromAmino(object: MsgTransferTokenizeShareRecordAmino): MsgTransferTokenizeShareRecord;
    toAmino(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAmino;
    fromAminoMsg(object: MsgTransferTokenizeShareRecordAminoMsg): MsgTransferTokenizeShareRecord;
    toAminoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAminoMsg;
    fromProtoMsg(message: MsgTransferTokenizeShareRecordProtoMsg): MsgTransferTokenizeShareRecord;
    toProto(message: MsgTransferTokenizeShareRecord): Uint8Array;
    toProtoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordProtoMsg;
};
export declare const MsgTransferTokenizeShareRecordResponse: {
    typeUrl: string;
    encode(_: MsgTransferTokenizeShareRecordResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferTokenizeShareRecordResponse;
    fromPartial(_: Partial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse;
    fromAmino(_: MsgTransferTokenizeShareRecordResponseAmino): MsgTransferTokenizeShareRecordResponse;
    toAmino(_: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAmino;
    fromAminoMsg(object: MsgTransferTokenizeShareRecordResponseAminoMsg): MsgTransferTokenizeShareRecordResponse;
    toAminoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAminoMsg;
    fromProtoMsg(message: MsgTransferTokenizeShareRecordResponseProtoMsg): MsgTransferTokenizeShareRecordResponse;
    toProto(message: MsgTransferTokenizeShareRecordResponse): Uint8Array;
    toProtoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseProtoMsg;
};
export declare const MsgDisableTokenizeShares: {
    typeUrl: string;
    encode(message: MsgDisableTokenizeShares, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDisableTokenizeShares;
    fromPartial(object: Partial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares;
    fromAmino(object: MsgDisableTokenizeSharesAmino): MsgDisableTokenizeShares;
    toAmino(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAmino;
    fromAminoMsg(object: MsgDisableTokenizeSharesAminoMsg): MsgDisableTokenizeShares;
    toAminoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgDisableTokenizeSharesProtoMsg): MsgDisableTokenizeShares;
    toProto(message: MsgDisableTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesProtoMsg;
};
export declare const MsgDisableTokenizeSharesResponse: {
    typeUrl: string;
    encode(_: MsgDisableTokenizeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDisableTokenizeSharesResponse;
    fromPartial(_: Partial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse;
    fromAmino(_: MsgDisableTokenizeSharesResponseAmino): MsgDisableTokenizeSharesResponse;
    toAmino(_: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgDisableTokenizeSharesResponseAminoMsg): MsgDisableTokenizeSharesResponse;
    toAminoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAminoMsg;
    fromProtoMsg(message: MsgDisableTokenizeSharesResponseProtoMsg): MsgDisableTokenizeSharesResponse;
    toProto(message: MsgDisableTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseProtoMsg;
};
export declare const MsgEnableTokenizeShares: {
    typeUrl: string;
    encode(message: MsgEnableTokenizeShares, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEnableTokenizeShares;
    fromPartial(object: Partial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares;
    fromAmino(object: MsgEnableTokenizeSharesAmino): MsgEnableTokenizeShares;
    toAmino(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAmino;
    fromAminoMsg(object: MsgEnableTokenizeSharesAminoMsg): MsgEnableTokenizeShares;
    toAminoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgEnableTokenizeSharesProtoMsg): MsgEnableTokenizeShares;
    toProto(message: MsgEnableTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesProtoMsg;
};
export declare const MsgEnableTokenizeSharesResponse: {
    typeUrl: string;
    encode(message: MsgEnableTokenizeSharesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEnableTokenizeSharesResponse;
    fromPartial(object: Partial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse;
    fromAmino(object: MsgEnableTokenizeSharesResponseAmino): MsgEnableTokenizeSharesResponse;
    toAmino(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgEnableTokenizeSharesResponseAminoMsg): MsgEnableTokenizeSharesResponse;
    toAminoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAminoMsg;
    fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg): MsgEnableTokenizeSharesResponse;
    toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg;
};
export declare const MsgValidatorBond: {
    typeUrl: string;
    encode(message: MsgValidatorBond, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgValidatorBond;
    fromPartial(object: Partial<MsgValidatorBond>): MsgValidatorBond;
    fromAmino(object: MsgValidatorBondAmino): MsgValidatorBond;
    toAmino(message: MsgValidatorBond): MsgValidatorBondAmino;
    fromAminoMsg(object: MsgValidatorBondAminoMsg): MsgValidatorBond;
    toAminoMsg(message: MsgValidatorBond): MsgValidatorBondAminoMsg;
    fromProtoMsg(message: MsgValidatorBondProtoMsg): MsgValidatorBond;
    toProto(message: MsgValidatorBond): Uint8Array;
    toProtoMsg(message: MsgValidatorBond): MsgValidatorBondProtoMsg;
};
export declare const MsgValidatorBondResponse: {
    typeUrl: string;
    encode(_: MsgValidatorBondResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgValidatorBondResponse;
    fromPartial(_: Partial<MsgValidatorBondResponse>): MsgValidatorBondResponse;
    fromAmino(_: MsgValidatorBondResponseAmino): MsgValidatorBondResponse;
    toAmino(_: MsgValidatorBondResponse): MsgValidatorBondResponseAmino;
    fromAminoMsg(object: MsgValidatorBondResponseAminoMsg): MsgValidatorBondResponse;
    toAminoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseAminoMsg;
    fromProtoMsg(message: MsgValidatorBondResponseProtoMsg): MsgValidatorBondResponse;
    toProto(message: MsgValidatorBondResponse): Uint8Array;
    toProtoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseProtoMsg;
};
