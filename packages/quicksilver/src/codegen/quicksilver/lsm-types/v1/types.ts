import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export enum TokenizeShareLockStatus {
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
  UNRECOGNIZED = -1,
}
export const TokenizeShareLockStatusSDKType = TokenizeShareLockStatus;
export const TokenizeShareLockStatusAmino = TokenizeShareLockStatus;
export function tokenizeShareLockStatusFromJSON(object: any): TokenizeShareLockStatus {
  switch (object) {
    case 0:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED;
    case 1:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED;
    case 2:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED;
    case 3:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenizeShareLockStatus.UNRECOGNIZED;
  }
}
export function tokenizeShareLockStatusToJSON(object: TokenizeShareLockStatus): string {
  switch (object) {
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    case TokenizeShareLockStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
export interface MsgWithdrawTokenizeShareRecordRewardResponse {}
export interface MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseAmino {}
export interface MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
  type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse";
  value: MsgWithdrawTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {}
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
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
  type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse";
  value: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {}
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
export interface QueryLastTokenizeShareRecordIdRequest {}
export interface QueryLastTokenizeShareRecordIdRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestAmino {}
export interface QueryLastTokenizeShareRecordIdRequestAminoMsg {
  type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest";
  value: QueryLastTokenizeShareRecordIdRequestAmino;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {}
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
export interface QueryTotalTokenizeSharedAssetsRequest {}
export interface QueryTotalTokenizeSharedAssetsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestAmino {}
export interface QueryTotalTokenizeSharedAssetsRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest";
  value: QueryTotalTokenizeSharedAssetsRequestAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {}
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
export interface QueryTotalLiquidStaked {}
export interface QueryTotalLiquidStakedProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedAmino {}
export interface QueryTotalLiquidStakedAminoMsg {
  type: "cosmos-sdk/QueryTotalLiquidStaked";
  value: QueryTotalLiquidStakedAmino;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {}
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
export interface MsgUnbondValidatorResponse {}
export interface MsgUnbondValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse";
  value: Uint8Array;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseAmino {}
export interface MsgUnbondValidatorResponseAminoMsg {
  type: "cosmos-sdk/MsgUnbondValidatorResponse";
  value: MsgUnbondValidatorResponseAmino;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseSDKType {}
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
export interface MsgTransferTokenizeShareRecordResponse {}
export interface MsgTransferTokenizeShareRecordResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse";
  value: Uint8Array;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseAmino {}
export interface MsgTransferTokenizeShareRecordResponseAminoMsg {
  type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse";
  value: MsgTransferTokenizeShareRecordResponseAmino;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseSDKType {}
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
export interface MsgDisableTokenizeSharesResponse {}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse";
  value: Uint8Array;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseAmino {}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgDisableTokenizeSharesResponse";
  value: MsgDisableTokenizeSharesResponseAmino;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseSDKType {}
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
export interface MsgValidatorBondResponse {}
export interface MsgValidatorBondResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse";
  value: Uint8Array;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseAmino {}
export interface MsgValidatorBondResponseAminoMsg {
  type: "cosmos-sdk/MsgValidatorBondResponse";
  value: MsgValidatorBondResponseAmino;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseSDKType {}
function createBaseTokenizeShareRecordReward(): TokenizeShareRecordReward {
  return {
    recordId: BigInt(0),
    reward: []
  };
}
export const TokenizeShareRecordReward = {
  typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward",
  encode(message: TokenizeShareRecordReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.recordId);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TokenizeShareRecordReward {
    return {
      recordId: isSet(object.recordId) ? BigInt(object.recordId.toString()) : BigInt(0),
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TokenizeShareRecordReward>): TokenizeShareRecordReward {
    const message = createBaseTokenizeShareRecordReward();
    message.recordId = object.recordId !== undefined && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TokenizeShareRecordRewardAmino): TokenizeShareRecordReward {
    const message = createBaseTokenizeShareRecordReward();
    if (object.record_id !== undefined && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    message.reward = object.reward?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.record_id = message.recordId ? message.recordId.toString() : undefined;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromAminoMsg(object: TokenizeShareRecordRewardAminoMsg): TokenizeShareRecordReward {
    return TokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAminoMsg {
    return {
      type: "cosmos-sdk/TokenizeShareRecordReward",
      value: TokenizeShareRecordReward.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenizeShareRecordRewardProtoMsg): TokenizeShareRecordReward {
    return TokenizeShareRecordReward.decode(message.value);
  },
  toProto(message: TokenizeShareRecordReward): Uint8Array {
    return TokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward",
      value: TokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordRewardRequest(): QueryTokenizeShareRecordRewardRequest {
  return {
    ownerAddress: ""
  };
}
export const QueryTokenizeShareRecordRewardRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest",
  encode(message: QueryTokenizeShareRecordRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareRecordRewardRequest {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordRewardRequestAmino): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordRewardRequestAminoMsg): QueryTokenizeShareRecordRewardRequest {
    return QueryTokenizeShareRecordRewardRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordRewardRequestProtoMsg): QueryTokenizeShareRecordRewardRequest {
    return QueryTokenizeShareRecordRewardRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordRewardRequest): Uint8Array {
    return QueryTokenizeShareRecordRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordRewardResponse(): QueryTokenizeShareRecordRewardResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse",
  encode(message: QueryTokenizeShareRecordRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      TokenizeShareRecordReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareRecordRewardResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => TokenizeShareRecordReward.fromJSON(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordRewardResponse>): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordRewardResponseAmino): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromAmino(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? TokenizeShareRecordReward.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordRewardResponseAminoMsg): QueryTokenizeShareRecordRewardResponse {
    return QueryTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordRewardResponseProtoMsg): QueryTokenizeShareRecordRewardResponse {
    return QueryTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordRewardResponse): Uint8Array {
    return QueryTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTokenizeShareRecordReward(): MsgWithdrawTokenizeShareRecordReward {
  return {
    ownerAddress: "",
    recordId: BigInt(0)
  };
}
export const MsgWithdrawTokenizeShareRecordReward = {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward",
  encode(message: MsgWithdrawTokenizeShareRecordReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.recordId !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordId);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawTokenizeShareRecordReward {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      recordId: isSet(object.recordId) ? BigInt(object.recordId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    message.recordId = object.recordId !== undefined && object.recordId !== null ? BigInt(object.recordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawTokenizeShareRecordRewardAmino): MsgWithdrawTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.record_id !== undefined && object.record_id !== null) {
      message.recordId = BigInt(object.record_id);
    }
    return message;
  },
  toAmino(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress;
    obj.record_id = message.recordId ? message.recordId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardAminoMsg): MsgWithdrawTokenizeShareRecordReward {
    return MsgWithdrawTokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
      value: MsgWithdrawTokenizeShareRecordReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardProtoMsg): MsgWithdrawTokenizeShareRecordReward {
    return MsgWithdrawTokenizeShareRecordReward.decode(message.value);
  },
  toProto(message: MsgWithdrawTokenizeShareRecordReward): Uint8Array {
    return MsgWithdrawTokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward",
      value: MsgWithdrawTokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTokenizeShareRecordRewardResponse(): MsgWithdrawTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
  encode(_: MsgWithdrawTokenizeShareRecordRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawTokenizeShareRecordRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawTokenizeShareRecordRewardResponse>): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawTokenizeShareRecordRewardResponseAmino): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  },
  toAmino(_: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawTokenizeShareRecordRewardResponse {
    return MsgWithdrawTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse",
      value: MsgWithdrawTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawTokenizeShareRecordRewardResponse {
    return MsgWithdrawTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array {
    return MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
      value: MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAllTokenizeShareRecordReward(): MsgWithdrawAllTokenizeShareRecordReward {
  return {
    ownerAddress: ""
  };
}
export const MsgWithdrawAllTokenizeShareRecordReward = {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
  encode(message: MsgWithdrawAllTokenizeShareRecordReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawAllTokenizeShareRecordReward {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawAllTokenizeShareRecordReward>): MsgWithdrawAllTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawAllTokenizeShareRecordRewardAmino): MsgWithdrawAllTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    return message;
  },
  toAmino(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): MsgWithdrawAllTokenizeShareRecordReward {
    return MsgWithdrawAllTokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
      value: MsgWithdrawAllTokenizeShareRecordReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): MsgWithdrawAllTokenizeShareRecordReward {
    return MsgWithdrawAllTokenizeShareRecordReward.decode(message.value);
  },
  toProto(message: MsgWithdrawAllTokenizeShareRecordReward): Uint8Array {
    return MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
      value: MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse(): MsgWithdrawAllTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
  encode(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawAllTokenizeShareRecordRewardResponse>): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  },
  toAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse",
      value: MsgWithdrawAllTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
      value: MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByIdRequest(): QueryTokenizeShareRecordByIdRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryTokenizeShareRecordByIdRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
  encode(message: QueryTokenizeShareRecordByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByIdRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdRequestAmino): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdRequestAminoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdRequestProtoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByIdRequest): Uint8Array {
    return QueryTokenizeShareRecordByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByIdResponse(): QueryTokenizeShareRecordByIdResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByIdResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
  encode(message: QueryTokenizeShareRecordByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByIdResponse {
    return {
      record: isSet(object.record) ? TokenizeShareRecord.fromJSON(object.record) : undefined
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdResponseAmino): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdResponseAminoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdResponseProtoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByIdResponse): Uint8Array {
    return QueryTokenizeShareRecordByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByDenomRequest(): QueryTokenizeShareRecordByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryTokenizeShareRecordByDenomRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
  encode(message: QueryTokenizeShareRecordByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomRequestAmino): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomRequestAminoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomRequestProtoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByDenomRequest): Uint8Array {
    return QueryTokenizeShareRecordByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByDenomResponse(): QueryTokenizeShareRecordByDenomResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByDenomResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
  encode(message: QueryTokenizeShareRecordByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByDenomResponse {
    return {
      record: isSet(object.record) ? TokenizeShareRecord.fromJSON(object.record) : undefined
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomResponseAmino): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = TokenizeShareRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomResponseAminoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomResponseProtoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByDenomResponse): Uint8Array {
    return QueryTokenizeShareRecordByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordsOwnedRequest(): QueryTokenizeShareRecordsOwnedRequest {
  return {
    owner: ""
  };
}
export const QueryTokenizeShareRecordsOwnedRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
  encode(message: QueryTokenizeShareRecordsOwnedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareRecordsOwnedRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedRequestAmino): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedRequestAminoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedRequestProtoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedRequest): Uint8Array {
    return QueryTokenizeShareRecordsOwnedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordsOwnedResponse(): QueryTokenizeShareRecordsOwnedResponse {
  return {
    records: []
  };
}
export const QueryTokenizeShareRecordsOwnedResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
  encode(message: QueryTokenizeShareRecordsOwnedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareRecordsOwnedResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => TokenizeShareRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedResponseAmino): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedResponseAminoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedResponseProtoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedResponse): Uint8Array {
    return QueryTokenizeShareRecordsOwnedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenizeShareRecordsRequest(): QueryAllTokenizeShareRecordsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
  encode(message: QueryAllTokenizeShareRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllTokenizeShareRecordsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsRequestAmino): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsRequestAminoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsRequestProtoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.decode(message.value);
  },
  toProto(message: QueryAllTokenizeShareRecordsRequest): Uint8Array {
    return QueryAllTokenizeShareRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenizeShareRecordsResponse(): QueryAllTokenizeShareRecordsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
export const QueryAllTokenizeShareRecordsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
  encode(message: QueryAllTokenizeShareRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllTokenizeShareRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => TokenizeShareRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsResponseAmino): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsResponseAminoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsResponseProtoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.decode(message.value);
  },
  toProto(message: QueryAllTokenizeShareRecordsResponse): Uint8Array {
    return QueryAllTokenizeShareRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastTokenizeShareRecordIdRequest(): QueryLastTokenizeShareRecordIdRequest {
  return {};
}
export const QueryLastTokenizeShareRecordIdRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
  encode(_: QueryLastTokenizeShareRecordIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryLastTokenizeShareRecordIdRequest {
    return {};
  },
  fromPartial(_: Partial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  fromAmino(_: QueryLastTokenizeShareRecordIdRequestAmino): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  toAmino(_: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdRequestAminoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdRequestProtoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.decode(message.value);
  },
  toProto(message: QueryLastTokenizeShareRecordIdRequest): Uint8Array {
    return QueryLastTokenizeShareRecordIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastTokenizeShareRecordIdResponse(): QueryLastTokenizeShareRecordIdResponse {
  return {
    id: BigInt(0)
  };
}
export const QueryLastTokenizeShareRecordIdResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
  encode(message: QueryLastTokenizeShareRecordIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastTokenizeShareRecordIdResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLastTokenizeShareRecordIdResponseAmino): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdResponseAminoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdResponseProtoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.decode(message.value);
  },
  toProto(message: QueryLastTokenizeShareRecordIdResponse): Uint8Array {
    return QueryLastTokenizeShareRecordIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTokenizeSharedAssetsRequest(): QueryTotalTokenizeSharedAssetsRequest {
  return {};
}
export const QueryTotalTokenizeSharedAssetsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
  encode(_: QueryTotalTokenizeSharedAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTotalTokenizeSharedAssetsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  fromAmino(_: QueryTotalTokenizeSharedAssetsRequestAmino): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  toAmino(_: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsRequestAminoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsRequestProtoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.decode(message.value);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsRequest): Uint8Array {
    return QueryTotalTokenizeSharedAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTokenizeSharedAssetsResponse(): QueryTotalTokenizeSharedAssetsResponse {
  return {
    value: Coin.fromPartial({})
  };
}
export const QueryTotalTokenizeSharedAssetsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
  encode(message: QueryTotalTokenizeSharedAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalTokenizeSharedAssetsResponse {
    return {
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalTokenizeSharedAssetsResponseAmino): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAmino {
    const obj: any = {};
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsResponseAminoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsResponseProtoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.decode(message.value);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsResponse): Uint8Array {
    return QueryTotalTokenizeSharedAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidStaked(): QueryTotalLiquidStaked {
  return {};
}
export const QueryTotalLiquidStaked = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
  encode(_: QueryTotalLiquidStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTotalLiquidStaked {
    return {};
  },
  fromPartial(_: Partial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  fromAmino(_: QueryTotalLiquidStakedAmino): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  toAmino(_: QueryTotalLiquidStaked): QueryTotalLiquidStakedAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedAminoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalLiquidStakedProtoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.decode(message.value);
  },
  toProto(message: QueryTotalLiquidStaked): Uint8Array {
    return QueryTotalLiquidStaked.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidStakedResponse(): QueryTotalLiquidStakedResponse {
  return {
    tokens: ""
  };
}
export const QueryTotalLiquidStakedResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
  encode(message: QueryTotalLiquidStakedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalLiquidStakedResponse {
    return {
      tokens: isSet(object.tokens) ? String(object.tokens) : ""
    };
  },
  fromPartial(object: Partial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    message.tokens = object.tokens ?? "";
    return message;
  },
  fromAmino(object: QueryTotalLiquidStakedResponseAmino): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    return message;
  },
  toAmino(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAmino {
    const obj: any = {};
    obj.tokens = message.tokens;
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedResponseAminoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalLiquidStakedResponseProtoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.decode(message.value);
  },
  toProto(message: QueryTotalLiquidStakedResponse): Uint8Array {
    return QueryTotalLiquidStakedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareLockInfo(): QueryTokenizeShareLockInfo {
  return {
    address: ""
  };
}
export const QueryTokenizeShareLockInfo = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
  encode(message: QueryTokenizeShareLockInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareLockInfo {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoAmino): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoAminoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoProtoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.decode(message.value);
  },
  toProto(message: QueryTokenizeShareLockInfo): Uint8Array {
    return QueryTokenizeShareLockInfo.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareLockInfoResponse(): QueryTokenizeShareLockInfoResponse {
  return {
    status: "",
    expirationTime: ""
  };
}
export const QueryTokenizeShareLockInfoResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
  encode(message: QueryTokenizeShareLockInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expirationTime !== "") {
      writer.uint32(18).string(message.expirationTime);
    }
    return writer;
  },
  fromJSON(object: any): QueryTokenizeShareLockInfoResponse {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      expirationTime: isSet(object.expirationTime) ? String(object.expirationTime) : ""
    };
  },
  fromPartial(object: Partial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    message.status = object.status ?? "";
    message.expirationTime = object.expirationTime ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoResponseAmino): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = object.expiration_time;
    }
    return message;
  },
  toAmino(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.expiration_time = message.expirationTime;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoResponseAminoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoResponseProtoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareLockInfoResponse): Uint8Array {
    return QueryTokenizeShareLockInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareRecord(): TokenizeShareRecord {
  return {
    id: BigInt(0),
    owner: "",
    moduleAccount: "",
    validator: ""
  };
}
export const TokenizeShareRecord = {
  typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
  encode(message: TokenizeShareRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.moduleAccount !== "") {
      writer.uint32(26).string(message.moduleAccount);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  fromJSON(object: any): TokenizeShareRecord {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      moduleAccount: isSet(object.moduleAccount) ? String(object.moduleAccount) : "",
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  fromPartial(object: Partial<TokenizeShareRecord>): TokenizeShareRecord {
    const message = createBaseTokenizeShareRecord();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.moduleAccount = object.moduleAccount ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: TokenizeShareRecordAmino): TokenizeShareRecord {
    const message = createBaseTokenizeShareRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.module_account !== undefined && object.module_account !== null) {
      message.moduleAccount = object.module_account;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    return message;
  },
  toAmino(message: TokenizeShareRecord): TokenizeShareRecordAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    obj.module_account = message.moduleAccount;
    obj.validator = message.validator;
    return obj;
  },
  fromAminoMsg(object: TokenizeShareRecordAminoMsg): TokenizeShareRecord {
    return TokenizeShareRecord.fromAmino(object.value);
  },
  toAminoMsg(message: TokenizeShareRecord): TokenizeShareRecordAminoMsg {
    return {
      type: "cosmos-sdk/TokenizeShareRecord",
      value: TokenizeShareRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenizeShareRecordProtoMsg): TokenizeShareRecord {
    return TokenizeShareRecord.decode(message.value);
  },
  toProto(message: TokenizeShareRecord): Uint8Array {
    return TokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message: TokenizeShareRecord): TokenizeShareRecordProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
      value: TokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBasePendingTokenizeShareAuthorizations(): PendingTokenizeShareAuthorizations {
  return {
    addresses: []
  };
}
export const PendingTokenizeShareAuthorizations = {
  typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
  encode(message: PendingTokenizeShareAuthorizations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): PendingTokenizeShareAuthorizations {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<PendingTokenizeShareAuthorizations>): PendingTokenizeShareAuthorizations {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PendingTokenizeShareAuthorizationsAmino): PendingTokenizeShareAuthorizations {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: PendingTokenizeShareAuthorizationsAminoMsg): PendingTokenizeShareAuthorizations {
    return PendingTokenizeShareAuthorizations.fromAmino(object.value);
  },
  toAminoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAminoMsg {
    return {
      type: "cosmos-sdk/PendingTokenizeShareAuthorizations",
      value: PendingTokenizeShareAuthorizations.toAmino(message)
    };
  },
  fromProtoMsg(message: PendingTokenizeShareAuthorizationsProtoMsg): PendingTokenizeShareAuthorizations {
    return PendingTokenizeShareAuthorizations.decode(message.value);
  },
  toProto(message: PendingTokenizeShareAuthorizations): Uint8Array {
    return PendingTokenizeShareAuthorizations.encode(message).finish();
  },
  toProtoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
      value: PendingTokenizeShareAuthorizations.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondValidator(): MsgUnbondValidator {
  return {
    validatorAddress: ""
  };
}
export const MsgUnbondValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
  encode(message: MsgUnbondValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnbondValidator {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUnbondValidator>): MsgUnbondValidator {
    const message = createBaseMsgUnbondValidator();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnbondValidatorAmino): MsgUnbondValidator {
    const message = createBaseMsgUnbondValidator();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgUnbondValidator): MsgUnbondValidatorAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondValidatorAminoMsg): MsgUnbondValidator {
    return MsgUnbondValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondValidator): MsgUnbondValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnbondValidator",
      value: MsgUnbondValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondValidatorProtoMsg): MsgUnbondValidator {
    return MsgUnbondValidator.decode(message.value);
  },
  toProto(message: MsgUnbondValidator): Uint8Array {
    return MsgUnbondValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondValidator): MsgUnbondValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
      value: MsgUnbondValidator.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondValidatorResponse(): MsgUnbondValidatorResponse {
  return {};
}
export const MsgUnbondValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
  encode(_: MsgUnbondValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnbondValidatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnbondValidatorResponse>): MsgUnbondValidatorResponse {
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  },
  fromAmino(_: MsgUnbondValidatorResponseAmino): MsgUnbondValidatorResponse {
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  },
  toAmino(_: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondValidatorResponseAminoMsg): MsgUnbondValidatorResponse {
    return MsgUnbondValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnbondValidatorResponse",
      value: MsgUnbondValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondValidatorResponseProtoMsg): MsgUnbondValidatorResponse {
    return MsgUnbondValidatorResponse.decode(message.value);
  },
  toProto(message: MsgUnbondValidatorResponse): Uint8Array {
    return MsgUnbondValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
      value: MsgUnbondValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeShares(): MsgTokenizeShares {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    tokenizedShareOwner: ""
  };
}
export const MsgTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
  encode(message: MsgTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenizedShareOwner !== "") {
      writer.uint32(34).string(message.tokenizedShareOwner);
    }
    return writer;
  },
  fromJSON(object: any): MsgTokenizeShares {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      tokenizedShareOwner: isSet(object.tokenizedShareOwner) ? String(object.tokenizedShareOwner) : ""
    };
  },
  fromPartial(object: Partial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.tokenizedShareOwner = object.tokenizedShareOwner ?? "";
    return message;
  },
  fromAmino(object: MsgTokenizeSharesAmino): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.tokenized_share_owner !== undefined && object.tokenized_share_owner !== null) {
      message.tokenizedShareOwner = object.tokenized_share_owner;
    }
    return message;
  },
  toAmino(message: MsgTokenizeShares): MsgTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.tokenized_share_owner = message.tokenizedShareOwner;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesAminoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeShares): MsgTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgTokenizeShares",
      value: MsgTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesProtoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.decode(message.value);
  },
  toProto(message: MsgTokenizeShares): Uint8Array {
    return MsgTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeShares): MsgTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
      value: MsgTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeSharesResponse(): MsgTokenizeSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
  encode(message: MsgTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgTokenizeSharesResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgTokenizeSharesResponseAmino): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesResponseAminoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesResponseProtoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgTokenizeSharesResponse): Uint8Array {
    return MsgTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForShares(): MsgRedeemTokensForShares {
  return {
    delegatorAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
  encode(message: MsgRedeemTokensForShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRedeemTokensForShares {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesAmino): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesAminoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesProtoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.decode(message.value);
  },
  toProto(message: MsgRedeemTokensForShares): Uint8Array {
    return MsgRedeemTokensForShares.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForSharesResponse(): MsgRedeemTokensForSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
  encode(message: MsgRedeemTokensForSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRedeemTokensForSharesResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesResponseAmino): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesResponseAminoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesResponseProtoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.decode(message.value);
  },
  toProto(message: MsgRedeemTokensForSharesResponse): Uint8Array {
    return MsgRedeemTokensForSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTokenizeShareRecord(): MsgTransferTokenizeShareRecord {
  return {
    tokenizeShareRecordId: BigInt(0),
    sender: "",
    newOwner: ""
  };
}
export const MsgTransferTokenizeShareRecord = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
  encode(message: MsgTransferTokenizeShareRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenizeShareRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tokenizeShareRecordId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransferTokenizeShareRecord {
    return {
      tokenizeShareRecordId: isSet(object.tokenizeShareRecordId) ? BigInt(object.tokenizeShareRecordId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : ""
    };
  },
  fromPartial(object: Partial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    message.tokenizeShareRecordId = object.tokenizeShareRecordId !== undefined && object.tokenizeShareRecordId !== null ? BigInt(object.tokenizeShareRecordId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
  fromAmino(object: MsgTransferTokenizeShareRecordAmino): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    if (object.tokenize_share_record_id !== undefined && object.tokenize_share_record_id !== null) {
      message.tokenizeShareRecordId = BigInt(object.tokenize_share_record_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    return message;
  },
  toAmino(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAmino {
    const obj: any = {};
    obj.tokenize_share_record_id = message.tokenizeShareRecordId ? message.tokenizeShareRecordId.toString() : undefined;
    obj.sender = message.sender;
    obj.new_owner = message.newOwner;
    return obj;
  },
  fromAminoMsg(object: MsgTransferTokenizeShareRecordAminoMsg): MsgTransferTokenizeShareRecord {
    return MsgTransferTokenizeShareRecord.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferTokenizeShareRecordProtoMsg): MsgTransferTokenizeShareRecord {
    return MsgTransferTokenizeShareRecord.decode(message.value);
  },
  toProto(message: MsgTransferTokenizeShareRecord): Uint8Array {
    return MsgTransferTokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTokenizeShareRecordResponse(): MsgTransferTokenizeShareRecordResponse {
  return {};
}
export const MsgTransferTokenizeShareRecordResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
  encode(_: MsgTransferTokenizeShareRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTransferTokenizeShareRecordResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  fromAmino(_: MsgTransferTokenizeShareRecordResponseAmino): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  toAmino(_: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferTokenizeShareRecordResponseAminoMsg): MsgTransferTokenizeShareRecordResponse {
    return MsgTransferTokenizeShareRecordResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferTokenizeShareRecordResponseProtoMsg): MsgTransferTokenizeShareRecordResponse {
    return MsgTransferTokenizeShareRecordResponse.decode(message.value);
  },
  toProto(message: MsgTransferTokenizeShareRecordResponse): Uint8Array {
    return MsgTransferTokenizeShareRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeShares(): MsgDisableTokenizeShares {
  return {
    delegatorAddress: ""
  };
}
export const MsgDisableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
  encode(message: MsgDisableTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgDisableTokenizeShares {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDisableTokenizeSharesAmino): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesAminoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesProtoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.decode(message.value);
  },
  toProto(message: MsgDisableTokenizeShares): Uint8Array {
    return MsgDisableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeSharesResponse(): MsgDisableTokenizeSharesResponse {
  return {};
}
export const MsgDisableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
  encode(_: MsgDisableTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDisableTokenizeSharesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  fromAmino(_: MsgDisableTokenizeSharesResponseAmino): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  toAmino(_: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesResponseAminoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesResponseProtoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgDisableTokenizeSharesResponse): Uint8Array {
    return MsgDisableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeShares(): MsgEnableTokenizeShares {
  return {
    delegatorAddress: ""
  };
}
export const MsgEnableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
  encode(message: MsgEnableTokenizeShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgEnableTokenizeShares {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesAmino): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesAminoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesProtoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.decode(message.value);
  },
  toProto(message: MsgEnableTokenizeShares): Uint8Array {
    return MsgEnableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeSharesResponse(): MsgEnableTokenizeSharesResponse {
  return {
    completionTime: Timestamp.fromPartial({})
  };
}
export const MsgEnableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
  encode(message: MsgEnableTokenizeSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgEnableTokenizeSharesResponse {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },
  fromPartial(object: Partial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesResponseAmino): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    return message;
  },
  toAmino(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesResponseAminoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array {
    return MsgEnableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValidatorBond(): MsgValidatorBond {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const MsgValidatorBond = {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
  encode(message: MsgValidatorBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgValidatorBond {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgValidatorBond>): MsgValidatorBond {
    const message = createBaseMsgValidatorBond();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgValidatorBondAmino): MsgValidatorBond {
    const message = createBaseMsgValidatorBond();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgValidatorBond): MsgValidatorBondAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgValidatorBondAminoMsg): MsgValidatorBond {
    return MsgValidatorBond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgValidatorBond): MsgValidatorBondAminoMsg {
    return {
      type: "cosmos-sdk/MsgValidatorBond",
      value: MsgValidatorBond.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgValidatorBondProtoMsg): MsgValidatorBond {
    return MsgValidatorBond.decode(message.value);
  },
  toProto(message: MsgValidatorBond): Uint8Array {
    return MsgValidatorBond.encode(message).finish();
  },
  toProtoMsg(message: MsgValidatorBond): MsgValidatorBondProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
      value: MsgValidatorBond.encode(message).finish()
    };
  }
};
function createBaseMsgValidatorBondResponse(): MsgValidatorBondResponse {
  return {};
}
export const MsgValidatorBondResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
  encode(_: MsgValidatorBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgValidatorBondResponse {
    return {};
  },
  fromPartial(_: Partial<MsgValidatorBondResponse>): MsgValidatorBondResponse {
    const message = createBaseMsgValidatorBondResponse();
    return message;
  },
  fromAmino(_: MsgValidatorBondResponseAmino): MsgValidatorBondResponse {
    const message = createBaseMsgValidatorBondResponse();
    return message;
  },
  toAmino(_: MsgValidatorBondResponse): MsgValidatorBondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValidatorBondResponseAminoMsg): MsgValidatorBondResponse {
    return MsgValidatorBondResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgValidatorBondResponse",
      value: MsgValidatorBondResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgValidatorBondResponseProtoMsg): MsgValidatorBondResponse {
    return MsgValidatorBondResponse.decode(message.value);
  },
  toProto(message: MsgValidatorBondResponse): Uint8Array {
    return MsgValidatorBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
      value: MsgValidatorBondResponse.encode(message).finish()
    };
  }
};