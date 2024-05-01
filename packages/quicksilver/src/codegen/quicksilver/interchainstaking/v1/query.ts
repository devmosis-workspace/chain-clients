import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Zone, ZoneAmino, ZoneSDKType, Validator, ValidatorAmino, ValidatorSDKType, DelegatorIntent, DelegatorIntentAmino, DelegatorIntentSDKType, Delegation, DelegationAmino, DelegationSDKType, Receipt, ReceiptAmino, ReceiptSDKType, WithdrawalRecord, WithdrawalRecordAmino, WithdrawalRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, RedelegationRecord, RedelegationRecordAmino, RedelegationRecordSDKType } from "./interchainstaking";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, isObject } from "../../../helpers";
export interface Statistics {
  chainId: string;
  deposited: string;
  deposits: bigint;
  depositors: bigint;
  delegated: string;
  supply: string;
  distanceToTarget: string;
  /** Current number of tokens in the unbonding state. */
  unbondingAmount: Coin;
  /** Current number of tokens in the queued state. */
  queuedAmount: Coin;
  /** Number of withdrawal records in the unbonding state. */
  unbondingCount: number;
  /** Number of withdrawal records in the queued state. */
  queuedCount: number;
  /** Number of active unbonding records. */
  unbondRecordCount: number;
}
export interface StatisticsProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.Statistics";
  value: Uint8Array;
}
export interface StatisticsAmino {
  chain_id?: string;
  deposited?: string;
  deposits?: string;
  depositors?: string;
  delegated?: string;
  supply?: string;
  distance_to_target?: string;
  /** Current number of tokens in the unbonding state. */
  unbonding_amount?: CoinAmino;
  /** Current number of tokens in the queued state. */
  queued_amount?: CoinAmino;
  /** Number of withdrawal records in the unbonding state. */
  unbonding_count?: number;
  /** Number of withdrawal records in the queued state. */
  queued_count?: number;
  /** Number of active unbonding records. */
  unbond_record_count?: number;
}
export interface StatisticsAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Statistics";
  value: StatisticsAmino;
}
export interface StatisticsSDKType {
  chain_id: string;
  deposited: string;
  deposits: bigint;
  depositors: bigint;
  delegated: string;
  supply: string;
  distance_to_target: string;
  unbonding_amount: CoinSDKType;
  queued_amount: CoinSDKType;
  unbonding_count: number;
  queued_count: number;
  unbond_record_count: number;
}
export interface QueryZonesRequest {
  pagination?: PageRequest;
}
export interface QueryZonesRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest";
  value: Uint8Array;
}
export interface QueryZonesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryZonesRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZonesRequest";
  value: QueryZonesRequestAmino;
}
export interface QueryZonesRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryZonesResponse {
  zones: Zone[];
  stats: Statistics[];
  pagination?: PageResponse;
}
export interface QueryZonesResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse";
  value: Uint8Array;
}
export interface QueryZonesResponseAmino {
  zones?: ZoneAmino[];
  stats?: StatisticsAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryZonesResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZonesResponse";
  value: QueryZonesResponseAmino;
}
export interface QueryZonesResponseSDKType {
  zones: ZoneSDKType[];
  stats: StatisticsSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryZoneRequest {
  chainId: string;
}
export interface QueryZoneRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest";
  value: Uint8Array;
}
export interface QueryZoneRequestAmino {
  chain_id?: string;
}
export interface QueryZoneRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZoneRequest";
  value: QueryZoneRequestAmino;
}
export interface QueryZoneRequestSDKType {
  chain_id: string;
}
export interface QueryZoneResponse {
  zone: Zone;
  stats?: Statistics;
}
export interface QueryZoneResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse";
  value: Uint8Array;
}
export interface QueryZoneResponseAmino {
  zone?: ZoneAmino;
  stats?: StatisticsAmino;
}
export interface QueryZoneResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZoneResponse";
  value: QueryZoneResponseAmino;
}
export interface QueryZoneResponseSDKType {
  zone: ZoneSDKType;
  stats?: StatisticsSDKType;
}
export interface QueryZoneValidatorsRequest {
  chainId: string;
  status: string;
  pagination?: PageRequest;
}
export interface QueryZoneValidatorsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest";
  value: Uint8Array;
}
export interface QueryZoneValidatorsRequestAmino {
  chain_id?: string;
  status?: string;
  pagination?: PageRequestAmino;
}
export interface QueryZoneValidatorsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest";
  value: QueryZoneValidatorsRequestAmino;
}
export interface QueryZoneValidatorsRequestSDKType {
  chain_id: string;
  status: string;
  pagination?: PageRequestSDKType;
}
export interface QueryZoneValidatorsResponse {
  validators: Validator[];
  pagination?: PageResponse;
}
export interface QueryZoneValidatorsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse";
  value: Uint8Array;
}
export interface QueryZoneValidatorsResponseAmino {
  validators?: ValidatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryZoneValidatorsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse";
  value: QueryZoneValidatorsResponseAmino;
}
export interface QueryZoneValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequest {
  chainId: string;
}
export interface QueryDepositAccountForChainRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest";
  value: Uint8Array;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequestAmino {
  chain_id?: string;
}
export interface QueryDepositAccountForChainRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest";
  value: QueryDepositAccountForChainRequestAmino;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequestSDKType {
  chain_id: string;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponse {
  depositAccountAddress: string;
}
export interface QueryDepositAccountForChainResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse";
  value: Uint8Array;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponseAmino {
  deposit_account_address?: string;
}
export interface QueryDepositAccountForChainResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse";
  value: QueryDepositAccountForChainResponseAmino;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponseSDKType {
  deposit_account_address: string;
}
export interface QueryDelegatorIntentRequest {
  chainId: string;
  delegatorAddress: string;
}
export interface QueryDelegatorIntentRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest";
  value: Uint8Array;
}
export interface QueryDelegatorIntentRequestAmino {
  chain_id?: string;
  delegator_address?: string;
}
export interface QueryDelegatorIntentRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest";
  value: QueryDelegatorIntentRequestAmino;
}
export interface QueryDelegatorIntentRequestSDKType {
  chain_id: string;
  delegator_address: string;
}
export interface QueryDelegatorIntentResponse {
  intent?: DelegatorIntent;
}
export interface QueryDelegatorIntentResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse";
  value: Uint8Array;
}
export interface QueryDelegatorIntentResponseAmino {
  intent?: DelegatorIntentAmino;
}
export interface QueryDelegatorIntentResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse";
  value: QueryDelegatorIntentResponseAmino;
}
export interface QueryDelegatorIntentResponseSDKType {
  intent?: DelegatorIntentSDKType;
}
export interface QueryDelegatorIntentsRequest {
  delegatorAddress: string;
}
export interface QueryDelegatorIntentsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest";
  value: Uint8Array;
}
export interface QueryDelegatorIntentsRequestAmino {
  delegator_address?: string;
}
export interface QueryDelegatorIntentsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest";
  value: QueryDelegatorIntentsRequestAmino;
}
export interface QueryDelegatorIntentsRequestSDKType {
  delegator_address: string;
}
export interface DelegatorIntentsResponse {
  chainId: string;
  intent?: DelegatorIntent;
}
export interface DelegatorIntentsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse";
  value: Uint8Array;
}
export interface DelegatorIntentsResponseAmino {
  chain_id?: string;
  intent?: DelegatorIntentAmino;
}
export interface DelegatorIntentsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse";
  value: DelegatorIntentsResponseAmino;
}
export interface DelegatorIntentsResponseSDKType {
  chain_id: string;
  intent?: DelegatorIntentSDKType;
}
export interface QueryDelegatorIntentsResponse {
  intents: DelegatorIntentsResponse[];
}
export interface QueryDelegatorIntentsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse";
  value: Uint8Array;
}
export interface QueryDelegatorIntentsResponseAmino {
  intents?: DelegatorIntentsResponseAmino[];
}
export interface QueryDelegatorIntentsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse";
  value: QueryDelegatorIntentsResponseAmino;
}
export interface QueryDelegatorIntentsResponseSDKType {
  intents: DelegatorIntentsResponseSDKType[];
}
export interface QueryDelegationsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryDelegationsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest";
  value: Uint8Array;
}
export interface QueryDelegationsRequestAmino {
  chain_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryDelegationsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest";
  value: QueryDelegationsRequestAmino;
}
export interface QueryDelegationsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryDelegationsResponse {
  delegations: Delegation[];
  tvl: string;
  pagination?: PageResponse;
}
export interface QueryDelegationsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse";
  value: Uint8Array;
}
export interface QueryDelegationsResponseAmino {
  delegations?: DelegationAmino[];
  tvl?: string;
  pagination?: PageResponseAmino;
}
export interface QueryDelegationsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse";
  value: QueryDelegationsResponseAmino;
}
export interface QueryDelegationsResponseSDKType {
  delegations: DelegationSDKType[];
  tvl: string;
  pagination?: PageResponseSDKType;
}
export interface QueryReceiptsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryReceiptsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest";
  value: Uint8Array;
}
export interface QueryReceiptsRequestAmino {
  chain_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryReceiptsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest";
  value: QueryReceiptsRequestAmino;
}
export interface QueryReceiptsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryReceiptsResponse {
  receipts: Receipt[];
  pagination?: PageResponse;
}
export interface QueryReceiptsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse";
  value: Uint8Array;
}
export interface QueryReceiptsResponseAmino {
  receipts?: ReceiptAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryReceiptsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse";
  value: QueryReceiptsResponseAmino;
}
export interface QueryReceiptsResponseSDKType {
  receipts: ReceiptSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryTxStatusRequest {
  chainId: string;
  txHash: string;
}
export interface QueryTxStatusRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest";
  value: Uint8Array;
}
export interface QueryTxStatusRequestAmino {
  chain_id?: string;
  tx_hash?: string;
}
export interface QueryTxStatusRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest";
  value: QueryTxStatusRequestAmino;
}
export interface QueryTxStatusRequestSDKType {
  chain_id: string;
  tx_hash: string;
}
export interface QueryTxStatusResponse {
  receipt?: Receipt;
}
export interface QueryTxStatusResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse";
  value: Uint8Array;
}
export interface QueryTxStatusResponseAmino {
  receipt?: ReceiptAmino;
}
export interface QueryTxStatusResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse";
  value: QueryTxStatusResponseAmino;
}
export interface QueryTxStatusResponseSDKType {
  receipt?: ReceiptSDKType;
}
export interface QueryWithdrawalRecordsRequest {
  chainId: string;
  delegatorAddress: string;
  pagination?: PageRequest;
}
export interface QueryWithdrawalRecordsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest";
  value: Uint8Array;
}
export interface QueryWithdrawalRecordsRequestAmino {
  chain_id?: string;
  delegator_address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryWithdrawalRecordsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest";
  value: QueryWithdrawalRecordsRequestAmino;
}
export interface QueryWithdrawalRecordsRequestSDKType {
  chain_id: string;
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryWithdrawalRecordsResponse {
  withdrawals: WithdrawalRecord[];
  pagination?: PageResponse;
}
export interface QueryWithdrawalRecordsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse";
  value: Uint8Array;
}
export interface QueryWithdrawalRecordsResponseAmino {
  withdrawals?: WithdrawalRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryWithdrawalRecordsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse";
  value: QueryWithdrawalRecordsResponseAmino;
}
export interface QueryWithdrawalRecordsResponseSDKType {
  withdrawals: WithdrawalRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryUserWithdrawalRecordsRequest {
  userAddress: string;
  pagination?: PageRequest;
}
export interface QueryUserWithdrawalRecordsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest";
  value: Uint8Array;
}
export interface QueryUserWithdrawalRecordsRequestAmino {
  user_address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserWithdrawalRecordsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest";
  value: QueryUserWithdrawalRecordsRequestAmino;
}
export interface QueryUserWithdrawalRecordsRequestSDKType {
  user_address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryUnbondingRecordsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryUnbondingRecordsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest";
  value: Uint8Array;
}
export interface QueryUnbondingRecordsRequestAmino {
  chain_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryUnbondingRecordsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest";
  value: QueryUnbondingRecordsRequestAmino;
}
export interface QueryUnbondingRecordsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryUnbondingRecordsResponse {
  unbondings: UnbondingRecord[];
  pagination?: PageResponse;
}
export interface QueryUnbondingRecordsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse";
  value: Uint8Array;
}
export interface QueryUnbondingRecordsResponseAmino {
  unbondings?: UnbondingRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUnbondingRecordsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse";
  value: QueryUnbondingRecordsResponseAmino;
}
export interface QueryUnbondingRecordsResponseSDKType {
  unbondings: UnbondingRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryRedelegationRecordsRequest {
  chainId: string;
  pagination?: PageRequest;
}
export interface QueryRedelegationRecordsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest";
  value: Uint8Array;
}
export interface QueryRedelegationRecordsRequestAmino {
  chain_id?: string;
  pagination?: PageRequestAmino;
}
export interface QueryRedelegationRecordsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest";
  value: QueryRedelegationRecordsRequestAmino;
}
export interface QueryRedelegationRecordsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
export interface QueryRedelegationRecordsResponse {
  redelegations: RedelegationRecord[];
  pagination?: PageResponse;
}
export interface QueryRedelegationRecordsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse";
  value: Uint8Array;
}
export interface QueryRedelegationRecordsResponseAmino {
  redelegations?: RedelegationRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRedelegationRecordsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse";
  value: QueryRedelegationRecordsResponseAmino;
}
export interface QueryRedelegationRecordsResponseSDKType {
  redelegations: RedelegationRecordSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryMappedAccountsRequest {
  address: string;
  pagination?: PageRequest;
}
export interface QueryMappedAccountsRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest";
  value: Uint8Array;
}
export interface QueryMappedAccountsRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMappedAccountsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest";
  value: QueryMappedAccountsRequestAmino;
}
export interface QueryMappedAccountsRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntry {
  key: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryAmino {
  key?: string;
  value?: string;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryAminoMsg {
  type: string;
  value: QueryMappedAccountsResponse_RemoteAddressMapEntryAmino;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse {
  RemoteAddressMap: {
    [key: string]: Uint8Array;
  };
  pagination?: PageResponse;
}
export interface QueryMappedAccountsResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse";
  value: Uint8Array;
}
export interface QueryMappedAccountsResponseAmino {
  RemoteAddressMap?: {
    [key: string]: string;
  };
  pagination?: PageResponseAmino;
}
export interface QueryMappedAccountsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse";
  value: QueryMappedAccountsResponseAmino;
}
export interface QueryMappedAccountsResponseSDKType {
  RemoteAddressMap: {
    [key: string]: Uint8Array;
  };
  pagination?: PageResponseSDKType;
}
export interface QueryDenyListRequest {
  chainId: string;
}
export interface QueryDenyListRequestProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDenyListRequest";
  value: Uint8Array;
}
export interface QueryDenyListRequestAmino {
  chain_id?: string;
}
export interface QueryDenyListRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDenyListRequest";
  value: QueryDenyListRequestAmino;
}
export interface QueryDenyListRequestSDKType {
  chain_id: string;
}
export interface QueryDenyListResponse {
  validators: string[];
  pagination?: PageResponse;
}
export interface QueryDenyListResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDenyListResponse";
  value: Uint8Array;
}
export interface QueryDenyListResponseAmino {
  validators?: string[];
  pagination?: PageResponseAmino;
}
export interface QueryDenyListResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDenyListResponse";
  value: QueryDenyListResponseAmino;
}
export interface QueryDenyListResponseSDKType {
  validators: string[];
  pagination?: PageResponseSDKType;
}
function createBaseStatistics(): Statistics {
  return {
    chainId: "",
    deposited: "",
    deposits: BigInt(0),
    depositors: BigInt(0),
    delegated: "",
    supply: "",
    distanceToTarget: "",
    unbondingAmount: Coin.fromPartial({}),
    queuedAmount: Coin.fromPartial({}),
    unbondingCount: 0,
    queuedCount: 0,
    unbondRecordCount: 0
  };
}
export const Statistics = {
  typeUrl: "/quicksilver.interchainstaking.v1.Statistics",
  encode(message: Statistics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.deposited !== "") {
      writer.uint32(18).string(message.deposited);
    }
    if (message.deposits !== BigInt(0)) {
      writer.uint32(24).int64(message.deposits);
    }
    if (message.depositors !== BigInt(0)) {
      writer.uint32(32).int64(message.depositors);
    }
    if (message.delegated !== "") {
      writer.uint32(42).string(message.delegated);
    }
    if (message.supply !== "") {
      writer.uint32(50).string(message.supply);
    }
    if (message.distanceToTarget !== "") {
      writer.uint32(58).string(message.distanceToTarget);
    }
    if (message.unbondingAmount !== undefined) {
      Coin.encode(message.unbondingAmount, writer.uint32(66).fork()).ldelim();
    }
    if (message.queuedAmount !== undefined) {
      Coin.encode(message.queuedAmount, writer.uint32(74).fork()).ldelim();
    }
    if (message.unbondingCount !== 0) {
      writer.uint32(80).uint32(message.unbondingCount);
    }
    if (message.queuedCount !== 0) {
      writer.uint32(88).uint32(message.queuedCount);
    }
    if (message.unbondRecordCount !== 0) {
      writer.uint32(96).uint32(message.unbondRecordCount);
    }
    return writer;
  },
  fromJSON(object: any): Statistics {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      deposited: isSet(object.deposited) ? String(object.deposited) : "",
      deposits: isSet(object.deposits) ? BigInt(object.deposits.toString()) : BigInt(0),
      depositors: isSet(object.depositors) ? BigInt(object.depositors.toString()) : BigInt(0),
      delegated: isSet(object.delegated) ? String(object.delegated) : "",
      supply: isSet(object.supply) ? String(object.supply) : "",
      distanceToTarget: isSet(object.distanceToTarget) ? String(object.distanceToTarget) : "",
      unbondingAmount: isSet(object.unbondingAmount) ? Coin.fromJSON(object.unbondingAmount) : undefined,
      queuedAmount: isSet(object.queuedAmount) ? Coin.fromJSON(object.queuedAmount) : undefined,
      unbondingCount: isSet(object.unbondingCount) ? Number(object.unbondingCount) : 0,
      queuedCount: isSet(object.queuedCount) ? Number(object.queuedCount) : 0,
      unbondRecordCount: isSet(object.unbondRecordCount) ? Number(object.unbondRecordCount) : 0
    };
  },
  fromPartial(object: Partial<Statistics>): Statistics {
    const message = createBaseStatistics();
    message.chainId = object.chainId ?? "";
    message.deposited = object.deposited ?? "";
    message.deposits = object.deposits !== undefined && object.deposits !== null ? BigInt(object.deposits.toString()) : BigInt(0);
    message.depositors = object.depositors !== undefined && object.depositors !== null ? BigInt(object.depositors.toString()) : BigInt(0);
    message.delegated = object.delegated ?? "";
    message.supply = object.supply ?? "";
    message.distanceToTarget = object.distanceToTarget ?? "";
    message.unbondingAmount = object.unbondingAmount !== undefined && object.unbondingAmount !== null ? Coin.fromPartial(object.unbondingAmount) : undefined;
    message.queuedAmount = object.queuedAmount !== undefined && object.queuedAmount !== null ? Coin.fromPartial(object.queuedAmount) : undefined;
    message.unbondingCount = object.unbondingCount ?? 0;
    message.queuedCount = object.queuedCount ?? 0;
    message.unbondRecordCount = object.unbondRecordCount ?? 0;
    return message;
  },
  fromAmino(object: StatisticsAmino): Statistics {
    const message = createBaseStatistics();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.deposited !== undefined && object.deposited !== null) {
      message.deposited = object.deposited;
    }
    if (object.deposits !== undefined && object.deposits !== null) {
      message.deposits = BigInt(object.deposits);
    }
    if (object.depositors !== undefined && object.depositors !== null) {
      message.depositors = BigInt(object.depositors);
    }
    if (object.delegated !== undefined && object.delegated !== null) {
      message.delegated = object.delegated;
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    }
    if (object.distance_to_target !== undefined && object.distance_to_target !== null) {
      message.distanceToTarget = object.distance_to_target;
    }
    if (object.unbonding_amount !== undefined && object.unbonding_amount !== null) {
      message.unbondingAmount = Coin.fromAmino(object.unbonding_amount);
    }
    if (object.queued_amount !== undefined && object.queued_amount !== null) {
      message.queuedAmount = Coin.fromAmino(object.queued_amount);
    }
    if (object.unbonding_count !== undefined && object.unbonding_count !== null) {
      message.unbondingCount = object.unbonding_count;
    }
    if (object.queued_count !== undefined && object.queued_count !== null) {
      message.queuedCount = object.queued_count;
    }
    if (object.unbond_record_count !== undefined && object.unbond_record_count !== null) {
      message.unbondRecordCount = object.unbond_record_count;
    }
    return message;
  },
  toAmino(message: Statistics): StatisticsAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.deposited = message.deposited;
    obj.deposits = message.deposits ? message.deposits.toString() : undefined;
    obj.depositors = message.depositors ? message.depositors.toString() : undefined;
    obj.delegated = message.delegated;
    obj.supply = message.supply;
    obj.distance_to_target = message.distanceToTarget;
    obj.unbonding_amount = message.unbondingAmount ? Coin.toAmino(message.unbondingAmount) : undefined;
    obj.queued_amount = message.queuedAmount ? Coin.toAmino(message.queuedAmount) : undefined;
    obj.unbonding_count = message.unbondingCount;
    obj.queued_count = message.queuedCount;
    obj.unbond_record_count = message.unbondRecordCount;
    return obj;
  },
  fromAminoMsg(object: StatisticsAminoMsg): Statistics {
    return Statistics.fromAmino(object.value);
  },
  fromProtoMsg(message: StatisticsProtoMsg): Statistics {
    return Statistics.decode(message.value);
  },
  toProto(message: Statistics): Uint8Array {
    return Statistics.encode(message).finish();
  },
  toProtoMsg(message: Statistics): StatisticsProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Statistics",
      value: Statistics.encode(message).finish()
    };
  }
};
function createBaseQueryZonesRequest(): QueryZonesRequest {
  return {
    pagination: undefined
  };
}
export const QueryZonesRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest",
  encode(message: QueryZonesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryZonesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryZonesRequest>): QueryZonesRequest {
    const message = createBaseQueryZonesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZonesRequestAmino): QueryZonesRequest {
    const message = createBaseQueryZonesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryZonesRequest): QueryZonesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZonesRequestAminoMsg): QueryZonesRequest {
    return QueryZonesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZonesRequestProtoMsg): QueryZonesRequest {
    return QueryZonesRequest.decode(message.value);
  },
  toProto(message: QueryZonesRequest): Uint8Array {
    return QueryZonesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZonesRequest): QueryZonesRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest",
      value: QueryZonesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZonesResponse(): QueryZonesResponse {
  return {
    zones: [],
    stats: [],
    pagination: undefined
  };
}
export const QueryZonesResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse",
  encode(message: QueryZonesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.zones) {
      Zone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stats) {
      Statistics.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryZonesResponse {
    return {
      zones: Array.isArray(object?.zones) ? object.zones.map((e: any) => Zone.fromJSON(e)) : [],
      stats: Array.isArray(object?.stats) ? object.stats.map((e: any) => Statistics.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryZonesResponse>): QueryZonesResponse {
    const message = createBaseQueryZonesResponse();
    message.zones = object.zones?.map(e => Zone.fromPartial(e)) || [];
    message.stats = object.stats?.map(e => Statistics.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZonesResponseAmino): QueryZonesResponse {
    const message = createBaseQueryZonesResponse();
    message.zones = object.zones?.map(e => Zone.fromAmino(e)) || [];
    message.stats = object.stats?.map(e => Statistics.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryZonesResponse): QueryZonesResponseAmino {
    const obj: any = {};
    if (message.zones) {
      obj.zones = message.zones.map(e => e ? Zone.toAmino(e) : undefined);
    } else {
      obj.zones = [];
    }
    if (message.stats) {
      obj.stats = message.stats.map(e => e ? Statistics.toAmino(e) : undefined);
    } else {
      obj.stats = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZonesResponseAminoMsg): QueryZonesResponse {
    return QueryZonesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZonesResponseProtoMsg): QueryZonesResponse {
    return QueryZonesResponse.decode(message.value);
  },
  toProto(message: QueryZonesResponse): Uint8Array {
    return QueryZonesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZonesResponse): QueryZonesResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse",
      value: QueryZonesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryZoneRequest(): QueryZoneRequest {
  return {
    chainId: ""
  };
}
export const QueryZoneRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest",
  encode(message: QueryZoneRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryZoneRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryZoneRequest>): QueryZoneRequest {
    const message = createBaseQueryZoneRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryZoneRequestAmino): QueryZoneRequest {
    const message = createBaseQueryZoneRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryZoneRequest): QueryZoneRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryZoneRequestAminoMsg): QueryZoneRequest {
    return QueryZoneRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneRequestProtoMsg): QueryZoneRequest {
    return QueryZoneRequest.decode(message.value);
  },
  toProto(message: QueryZoneRequest): Uint8Array {
    return QueryZoneRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneRequest): QueryZoneRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest",
      value: QueryZoneRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZoneResponse(): QueryZoneResponse {
  return {
    zone: Zone.fromPartial({}),
    stats: undefined
  };
}
export const QueryZoneResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse",
  encode(message: QueryZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.zone !== undefined) {
      Zone.encode(message.zone, writer.uint32(10).fork()).ldelim();
    }
    if (message.stats !== undefined) {
      Statistics.encode(message.stats, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryZoneResponse {
    return {
      zone: isSet(object.zone) ? Zone.fromJSON(object.zone) : undefined,
      stats: isSet(object.stats) ? Statistics.fromJSON(object.stats) : undefined
    };
  },
  fromPartial(object: Partial<QueryZoneResponse>): QueryZoneResponse {
    const message = createBaseQueryZoneResponse();
    message.zone = object.zone !== undefined && object.zone !== null ? Zone.fromPartial(object.zone) : undefined;
    message.stats = object.stats !== undefined && object.stats !== null ? Statistics.fromPartial(object.stats) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneResponseAmino): QueryZoneResponse {
    const message = createBaseQueryZoneResponse();
    if (object.zone !== undefined && object.zone !== null) {
      message.zone = Zone.fromAmino(object.zone);
    }
    if (object.stats !== undefined && object.stats !== null) {
      message.stats = Statistics.fromAmino(object.stats);
    }
    return message;
  },
  toAmino(message: QueryZoneResponse): QueryZoneResponseAmino {
    const obj: any = {};
    obj.zone = message.zone ? Zone.toAmino(message.zone) : undefined;
    obj.stats = message.stats ? Statistics.toAmino(message.stats) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneResponseAminoMsg): QueryZoneResponse {
    return QueryZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneResponseProtoMsg): QueryZoneResponse {
    return QueryZoneResponse.decode(message.value);
  },
  toProto(message: QueryZoneResponse): Uint8Array {
    return QueryZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneResponse): QueryZoneResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse",
      value: QueryZoneResponse.encode(message).finish()
    };
  }
};
function createBaseQueryZoneValidatorsRequest(): QueryZoneValidatorsRequest {
  return {
    chainId: "",
    status: "",
    pagination: undefined
  };
}
export const QueryZoneValidatorsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest",
  encode(message: QueryZoneValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryZoneValidatorsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryZoneValidatorsRequest>): QueryZoneValidatorsRequest {
    const message = createBaseQueryZoneValidatorsRequest();
    message.chainId = object.chainId ?? "";
    message.status = object.status ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneValidatorsRequestAmino): QueryZoneValidatorsRequest {
    const message = createBaseQueryZoneValidatorsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryZoneValidatorsRequest): QueryZoneValidatorsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.status = message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneValidatorsRequestAminoMsg): QueryZoneValidatorsRequest {
    return QueryZoneValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneValidatorsRequestProtoMsg): QueryZoneValidatorsRequest {
    return QueryZoneValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryZoneValidatorsRequest): Uint8Array {
    return QueryZoneValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneValidatorsRequest): QueryZoneValidatorsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest",
      value: QueryZoneValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZoneValidatorsResponse(): QueryZoneValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryZoneValidatorsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse",
  encode(message: QueryZoneValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryZoneValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryZoneValidatorsResponse>): QueryZoneValidatorsResponse {
    const message = createBaseQueryZoneValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneValidatorsResponseAmino): QueryZoneValidatorsResponse {
    const message = createBaseQueryZoneValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryZoneValidatorsResponse): QueryZoneValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneValidatorsResponseAminoMsg): QueryZoneValidatorsResponse {
    return QueryZoneValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneValidatorsResponseProtoMsg): QueryZoneValidatorsResponse {
    return QueryZoneValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryZoneValidatorsResponse): Uint8Array {
    return QueryZoneValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneValidatorsResponse): QueryZoneValidatorsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse",
      value: QueryZoneValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositAccountForChainRequest(): QueryDepositAccountForChainRequest {
  return {
    chainId: ""
  };
}
export const QueryDepositAccountForChainRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest",
  encode(message: QueryDepositAccountForChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositAccountForChainRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryDepositAccountForChainRequest>): QueryDepositAccountForChainRequest {
    const message = createBaseQueryDepositAccountForChainRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryDepositAccountForChainRequestAmino): QueryDepositAccountForChainRequest {
    const message = createBaseQueryDepositAccountForChainRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryDepositAccountForChainRequest): QueryDepositAccountForChainRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryDepositAccountForChainRequestAminoMsg): QueryDepositAccountForChainRequest {
    return QueryDepositAccountForChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositAccountForChainRequestProtoMsg): QueryDepositAccountForChainRequest {
    return QueryDepositAccountForChainRequest.decode(message.value);
  },
  toProto(message: QueryDepositAccountForChainRequest): Uint8Array {
    return QueryDepositAccountForChainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositAccountForChainRequest): QueryDepositAccountForChainRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest",
      value: QueryDepositAccountForChainRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositAccountForChainResponse(): QueryDepositAccountForChainResponse {
  return {
    depositAccountAddress: ""
  };
}
export const QueryDepositAccountForChainResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse",
  encode(message: QueryDepositAccountForChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositAccountAddress !== "") {
      writer.uint32(10).string(message.depositAccountAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositAccountForChainResponse {
    return {
      depositAccountAddress: isSet(object.depositAccountAddress) ? String(object.depositAccountAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDepositAccountForChainResponse>): QueryDepositAccountForChainResponse {
    const message = createBaseQueryDepositAccountForChainResponse();
    message.depositAccountAddress = object.depositAccountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDepositAccountForChainResponseAmino): QueryDepositAccountForChainResponse {
    const message = createBaseQueryDepositAccountForChainResponse();
    if (object.deposit_account_address !== undefined && object.deposit_account_address !== null) {
      message.depositAccountAddress = object.deposit_account_address;
    }
    return message;
  },
  toAmino(message: QueryDepositAccountForChainResponse): QueryDepositAccountForChainResponseAmino {
    const obj: any = {};
    obj.deposit_account_address = message.depositAccountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDepositAccountForChainResponseAminoMsg): QueryDepositAccountForChainResponse {
    return QueryDepositAccountForChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositAccountForChainResponseProtoMsg): QueryDepositAccountForChainResponse {
    return QueryDepositAccountForChainResponse.decode(message.value);
  },
  toProto(message: QueryDepositAccountForChainResponse): Uint8Array {
    return QueryDepositAccountForChainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositAccountForChainResponse): QueryDepositAccountForChainResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse",
      value: QueryDepositAccountForChainResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorIntentRequest(): QueryDelegatorIntentRequest {
  return {
    chainId: "",
    delegatorAddress: ""
  };
}
export const QueryDelegatorIntentRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest",
  encode(message: QueryDelegatorIntentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorIntentRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatorIntentRequest>): QueryDelegatorIntentRequest {
    const message = createBaseQueryDelegatorIntentRequest();
    message.chainId = object.chainId ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorIntentRequestAmino): QueryDelegatorIntentRequest {
    const message = createBaseQueryDelegatorIntentRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorIntentRequest): QueryDelegatorIntentRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorIntentRequestAminoMsg): QueryDelegatorIntentRequest {
    return QueryDelegatorIntentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorIntentRequestProtoMsg): QueryDelegatorIntentRequest {
    return QueryDelegatorIntentRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorIntentRequest): Uint8Array {
    return QueryDelegatorIntentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorIntentRequest): QueryDelegatorIntentRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest",
      value: QueryDelegatorIntentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorIntentResponse(): QueryDelegatorIntentResponse {
  return {
    intent: undefined
  };
}
export const QueryDelegatorIntentResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse",
  encode(message: QueryDelegatorIntentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.intent !== undefined) {
      DelegatorIntent.encode(message.intent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorIntentResponse {
    return {
      intent: isSet(object.intent) ? DelegatorIntent.fromJSON(object.intent) : undefined
    };
  },
  fromPartial(object: Partial<QueryDelegatorIntentResponse>): QueryDelegatorIntentResponse {
    const message = createBaseQueryDelegatorIntentResponse();
    message.intent = object.intent !== undefined && object.intent !== null ? DelegatorIntent.fromPartial(object.intent) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorIntentResponseAmino): QueryDelegatorIntentResponse {
    const message = createBaseQueryDelegatorIntentResponse();
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = DelegatorIntent.fromAmino(object.intent);
    }
    return message;
  },
  toAmino(message: QueryDelegatorIntentResponse): QueryDelegatorIntentResponseAmino {
    const obj: any = {};
    obj.intent = message.intent ? DelegatorIntent.toAmino(message.intent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorIntentResponseAminoMsg): QueryDelegatorIntentResponse {
    return QueryDelegatorIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorIntentResponseProtoMsg): QueryDelegatorIntentResponse {
    return QueryDelegatorIntentResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorIntentResponse): Uint8Array {
    return QueryDelegatorIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorIntentResponse): QueryDelegatorIntentResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse",
      value: QueryDelegatorIntentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorIntentsRequest(): QueryDelegatorIntentsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorIntentsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest",
  encode(message: QueryDelegatorIntentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorIntentsRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegatorIntentsRequest>): QueryDelegatorIntentsRequest {
    const message = createBaseQueryDelegatorIntentsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorIntentsRequestAmino): QueryDelegatorIntentsRequest {
    const message = createBaseQueryDelegatorIntentsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorIntentsRequest): QueryDelegatorIntentsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorIntentsRequestAminoMsg): QueryDelegatorIntentsRequest {
    return QueryDelegatorIntentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorIntentsRequestProtoMsg): QueryDelegatorIntentsRequest {
    return QueryDelegatorIntentsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorIntentsRequest): Uint8Array {
    return QueryDelegatorIntentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorIntentsRequest): QueryDelegatorIntentsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest",
      value: QueryDelegatorIntentsRequest.encode(message).finish()
    };
  }
};
function createBaseDelegatorIntentsResponse(): DelegatorIntentsResponse {
  return {
    chainId: "",
    intent: undefined
  };
}
export const DelegatorIntentsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse",
  encode(message: DelegatorIntentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.intent !== undefined) {
      DelegatorIntent.encode(message.intent, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelegatorIntentsResponse {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      intent: isSet(object.intent) ? DelegatorIntent.fromJSON(object.intent) : undefined
    };
  },
  fromPartial(object: Partial<DelegatorIntentsResponse>): DelegatorIntentsResponse {
    const message = createBaseDelegatorIntentsResponse();
    message.chainId = object.chainId ?? "";
    message.intent = object.intent !== undefined && object.intent !== null ? DelegatorIntent.fromPartial(object.intent) : undefined;
    return message;
  },
  fromAmino(object: DelegatorIntentsResponseAmino): DelegatorIntentsResponse {
    const message = createBaseDelegatorIntentsResponse();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.intent !== undefined && object.intent !== null) {
      message.intent = DelegatorIntent.fromAmino(object.intent);
    }
    return message;
  },
  toAmino(message: DelegatorIntentsResponse): DelegatorIntentsResponseAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.intent = message.intent ? DelegatorIntent.toAmino(message.intent) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorIntentsResponseAminoMsg): DelegatorIntentsResponse {
    return DelegatorIntentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorIntentsResponseProtoMsg): DelegatorIntentsResponse {
    return DelegatorIntentsResponse.decode(message.value);
  },
  toProto(message: DelegatorIntentsResponse): Uint8Array {
    return DelegatorIntentsResponse.encode(message).finish();
  },
  toProtoMsg(message: DelegatorIntentsResponse): DelegatorIntentsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse",
      value: DelegatorIntentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorIntentsResponse(): QueryDelegatorIntentsResponse {
  return {
    intents: []
  };
}
export const QueryDelegatorIntentsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse",
  encode(message: QueryDelegatorIntentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.intents) {
      DelegatorIntentsResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegatorIntentsResponse {
    return {
      intents: Array.isArray(object?.intents) ? object.intents.map((e: any) => DelegatorIntentsResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDelegatorIntentsResponse>): QueryDelegatorIntentsResponse {
    const message = createBaseQueryDelegatorIntentsResponse();
    message.intents = object.intents?.map(e => DelegatorIntentsResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorIntentsResponseAmino): QueryDelegatorIntentsResponse {
    const message = createBaseQueryDelegatorIntentsResponse();
    message.intents = object.intents?.map(e => DelegatorIntentsResponse.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegatorIntentsResponse): QueryDelegatorIntentsResponseAmino {
    const obj: any = {};
    if (message.intents) {
      obj.intents = message.intents.map(e => e ? DelegatorIntentsResponse.toAmino(e) : undefined);
    } else {
      obj.intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorIntentsResponseAminoMsg): QueryDelegatorIntentsResponse {
    return QueryDelegatorIntentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorIntentsResponseProtoMsg): QueryDelegatorIntentsResponse {
    return QueryDelegatorIntentsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorIntentsResponse): Uint8Array {
    return QueryDelegatorIntentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorIntentsResponse): QueryDelegatorIntentsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse",
      value: QueryDelegatorIntentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationsRequest(): QueryDelegationsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryDelegationsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest",
  encode(message: QueryDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegationsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDelegationsRequest>): QueryDelegationsRequest {
    const message = createBaseQueryDelegationsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegationsRequestAmino): QueryDelegationsRequest {
    const message = createBaseQueryDelegationsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegationsRequest): QueryDelegationsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationsRequestAminoMsg): QueryDelegationsRequest {
    return QueryDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationsRequestProtoMsg): QueryDelegationsRequest {
    return QueryDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegationsRequest): Uint8Array {
    return QueryDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationsRequest): QueryDelegationsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest",
      value: QueryDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationsResponse(): QueryDelegationsResponse {
  return {
    delegations: [],
    tvl: "",
    pagination: undefined
  };
}
export const QueryDelegationsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse",
  encode(message: QueryDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tvl !== "") {
      writer.uint32(18).string(message.tvl);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegationsResponse {
    return {
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      tvl: isSet(object.tvl) ? String(object.tvl) : "",
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDelegationsResponse>): QueryDelegationsResponse {
    const message = createBaseQueryDelegationsResponse();
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.tvl = object.tvl ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegationsResponseAmino): QueryDelegationsResponse {
    const message = createBaseQueryDelegationsResponse();
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    if (object.tvl !== undefined && object.tvl !== null) {
      message.tvl = object.tvl;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegationsResponse): QueryDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = [];
    }
    obj.tvl = message.tvl;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationsResponseAminoMsg): QueryDelegationsResponse {
    return QueryDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationsResponseProtoMsg): QueryDelegationsResponse {
    return QueryDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegationsResponse): Uint8Array {
    return QueryDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationsResponse): QueryDelegationsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse",
      value: QueryDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReceiptsRequest(): QueryReceiptsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryReceiptsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest",
  encode(message: QueryReceiptsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryReceiptsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryReceiptsRequest>): QueryReceiptsRequest {
    const message = createBaseQueryReceiptsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryReceiptsRequestAmino): QueryReceiptsRequest {
    const message = createBaseQueryReceiptsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryReceiptsRequest): QueryReceiptsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReceiptsRequestAminoMsg): QueryReceiptsRequest {
    return QueryReceiptsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReceiptsRequestProtoMsg): QueryReceiptsRequest {
    return QueryReceiptsRequest.decode(message.value);
  },
  toProto(message: QueryReceiptsRequest): Uint8Array {
    return QueryReceiptsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReceiptsRequest): QueryReceiptsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest",
      value: QueryReceiptsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReceiptsResponse(): QueryReceiptsResponse {
  return {
    receipts: [],
    pagination: undefined
  };
}
export const QueryReceiptsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse",
  encode(message: QueryReceiptsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.receipts) {
      Receipt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryReceiptsResponse {
    return {
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => Receipt.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryReceiptsResponse>): QueryReceiptsResponse {
    const message = createBaseQueryReceiptsResponse();
    message.receipts = object.receipts?.map(e => Receipt.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryReceiptsResponseAmino): QueryReceiptsResponse {
    const message = createBaseQueryReceiptsResponse();
    message.receipts = object.receipts?.map(e => Receipt.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryReceiptsResponse): QueryReceiptsResponseAmino {
    const obj: any = {};
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? Receipt.toAmino(e) : undefined);
    } else {
      obj.receipts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReceiptsResponseAminoMsg): QueryReceiptsResponse {
    return QueryReceiptsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReceiptsResponseProtoMsg): QueryReceiptsResponse {
    return QueryReceiptsResponse.decode(message.value);
  },
  toProto(message: QueryReceiptsResponse): Uint8Array {
    return QueryReceiptsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReceiptsResponse): QueryReceiptsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse",
      value: QueryReceiptsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTxStatusRequest(): QueryTxStatusRequest {
  return {
    chainId: "",
    txHash: ""
  };
}
export const QueryTxStatusRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest",
  encode(message: QueryTxStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    return writer;
  },
  fromJSON(object: any): QueryTxStatusRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : ""
    };
  },
  fromPartial(object: Partial<QueryTxStatusRequest>): QueryTxStatusRequest {
    const message = createBaseQueryTxStatusRequest();
    message.chainId = object.chainId ?? "";
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object: QueryTxStatusRequestAmino): QueryTxStatusRequest {
    const message = createBaseQueryTxStatusRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message: QueryTxStatusRequest): QueryTxStatusRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.tx_hash = message.txHash;
    return obj;
  },
  fromAminoMsg(object: QueryTxStatusRequestAminoMsg): QueryTxStatusRequest {
    return QueryTxStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxStatusRequestProtoMsg): QueryTxStatusRequest {
    return QueryTxStatusRequest.decode(message.value);
  },
  toProto(message: QueryTxStatusRequest): Uint8Array {
    return QueryTxStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTxStatusRequest): QueryTxStatusRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest",
      value: QueryTxStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTxStatusResponse(): QueryTxStatusResponse {
  return {
    receipt: undefined
  };
}
export const QueryTxStatusResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse",
  encode(message: QueryTxStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receipt !== undefined) {
      Receipt.encode(message.receipt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTxStatusResponse {
    return {
      receipt: isSet(object.receipt) ? Receipt.fromJSON(object.receipt) : undefined
    };
  },
  fromPartial(object: Partial<QueryTxStatusResponse>): QueryTxStatusResponse {
    const message = createBaseQueryTxStatusResponse();
    message.receipt = object.receipt !== undefined && object.receipt !== null ? Receipt.fromPartial(object.receipt) : undefined;
    return message;
  },
  fromAmino(object: QueryTxStatusResponseAmino): QueryTxStatusResponse {
    const message = createBaseQueryTxStatusResponse();
    if (object.receipt !== undefined && object.receipt !== null) {
      message.receipt = Receipt.fromAmino(object.receipt);
    }
    return message;
  },
  toAmino(message: QueryTxStatusResponse): QueryTxStatusResponseAmino {
    const obj: any = {};
    obj.receipt = message.receipt ? Receipt.toAmino(message.receipt) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxStatusResponseAminoMsg): QueryTxStatusResponse {
    return QueryTxStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxStatusResponseProtoMsg): QueryTxStatusResponse {
    return QueryTxStatusResponse.decode(message.value);
  },
  toProto(message: QueryTxStatusResponse): Uint8Array {
    return QueryTxStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTxStatusResponse): QueryTxStatusResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse",
      value: QueryTxStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawalRecordsRequest(): QueryWithdrawalRecordsRequest {
  return {
    chainId: "",
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryWithdrawalRecordsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest",
  encode(message: QueryWithdrawalRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWithdrawalRecordsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryWithdrawalRecordsRequest>): QueryWithdrawalRecordsRequest {
    const message = createBaseQueryWithdrawalRecordsRequest();
    message.chainId = object.chainId ?? "";
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalRecordsRequestAmino): QueryWithdrawalRecordsRequest {
    const message = createBaseQueryWithdrawalRecordsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryWithdrawalRecordsRequest): QueryWithdrawalRecordsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.delegator_address = message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawalRecordsRequestAminoMsg): QueryWithdrawalRecordsRequest {
    return QueryWithdrawalRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawalRecordsRequestProtoMsg): QueryWithdrawalRecordsRequest {
    return QueryWithdrawalRecordsRequest.decode(message.value);
  },
  toProto(message: QueryWithdrawalRecordsRequest): Uint8Array {
    return QueryWithdrawalRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawalRecordsRequest): QueryWithdrawalRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest",
      value: QueryWithdrawalRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawalRecordsResponse(): QueryWithdrawalRecordsResponse {
  return {
    withdrawals: [],
    pagination: undefined
  };
}
export const QueryWithdrawalRecordsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse",
  encode(message: QueryWithdrawalRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.withdrawals) {
      WithdrawalRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWithdrawalRecordsResponse {
    return {
      withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e: any) => WithdrawalRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryWithdrawalRecordsResponse>): QueryWithdrawalRecordsResponse {
    const message = createBaseQueryWithdrawalRecordsResponse();
    message.withdrawals = object.withdrawals?.map(e => WithdrawalRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalRecordsResponseAmino): QueryWithdrawalRecordsResponse {
    const message = createBaseQueryWithdrawalRecordsResponse();
    message.withdrawals = object.withdrawals?.map(e => WithdrawalRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryWithdrawalRecordsResponse): QueryWithdrawalRecordsResponseAmino {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map(e => e ? WithdrawalRecord.toAmino(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawalRecordsResponseAminoMsg): QueryWithdrawalRecordsResponse {
    return QueryWithdrawalRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawalRecordsResponseProtoMsg): QueryWithdrawalRecordsResponse {
    return QueryWithdrawalRecordsResponse.decode(message.value);
  },
  toProto(message: QueryWithdrawalRecordsResponse): Uint8Array {
    return QueryWithdrawalRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawalRecordsResponse): QueryWithdrawalRecordsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse",
      value: QueryWithdrawalRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserWithdrawalRecordsRequest(): QueryUserWithdrawalRecordsRequest {
  return {
    userAddress: "",
    pagination: undefined
  };
}
export const QueryUserWithdrawalRecordsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest",
  encode(message: QueryUserWithdrawalRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUserWithdrawalRecordsRequest {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryUserWithdrawalRecordsRequest>): QueryUserWithdrawalRecordsRequest {
    const message = createBaseQueryUserWithdrawalRecordsRequest();
    message.userAddress = object.userAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserWithdrawalRecordsRequestAmino): QueryUserWithdrawalRecordsRequest {
    const message = createBaseQueryUserWithdrawalRecordsRequest();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserWithdrawalRecordsRequest): QueryUserWithdrawalRecordsRequestAmino {
    const obj: any = {};
    obj.user_address = message.userAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserWithdrawalRecordsRequestAminoMsg): QueryUserWithdrawalRecordsRequest {
    return QueryUserWithdrawalRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserWithdrawalRecordsRequestProtoMsg): QueryUserWithdrawalRecordsRequest {
    return QueryUserWithdrawalRecordsRequest.decode(message.value);
  },
  toProto(message: QueryUserWithdrawalRecordsRequest): Uint8Array {
    return QueryUserWithdrawalRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserWithdrawalRecordsRequest): QueryUserWithdrawalRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest",
      value: QueryUserWithdrawalRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingRecordsRequest(): QueryUnbondingRecordsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryUnbondingRecordsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest",
  encode(message: QueryUnbondingRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUnbondingRecordsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryUnbondingRecordsRequest>): QueryUnbondingRecordsRequest {
    const message = createBaseQueryUnbondingRecordsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnbondingRecordsRequestAmino): QueryUnbondingRecordsRequest {
    const message = createBaseQueryUnbondingRecordsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingRecordsRequestAminoMsg): QueryUnbondingRecordsRequest {
    return QueryUnbondingRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnbondingRecordsRequestProtoMsg): QueryUnbondingRecordsRequest {
    return QueryUnbondingRecordsRequest.decode(message.value);
  },
  toProto(message: QueryUnbondingRecordsRequest): Uint8Array {
    return QueryUnbondingRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest",
      value: QueryUnbondingRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingRecordsResponse(): QueryUnbondingRecordsResponse {
  return {
    unbondings: [],
    pagination: undefined
  };
}
export const QueryUnbondingRecordsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse",
  encode(message: QueryUnbondingRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondings) {
      UnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUnbondingRecordsResponse {
    return {
      unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e: any) => UnbondingRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryUnbondingRecordsResponse>): QueryUnbondingRecordsResponse {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondings = object.unbondings?.map(e => UnbondingRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnbondingRecordsResponseAmino): QueryUnbondingRecordsResponse {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondings = object.unbondings?.map(e => UnbondingRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseAmino {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? UnbondingRecord.toAmino(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingRecordsResponseAminoMsg): QueryUnbondingRecordsResponse {
    return QueryUnbondingRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnbondingRecordsResponseProtoMsg): QueryUnbondingRecordsResponse {
    return QueryUnbondingRecordsResponse.decode(message.value);
  },
  toProto(message: QueryUnbondingRecordsResponse): Uint8Array {
    return QueryUnbondingRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse",
      value: QueryUnbondingRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationRecordsRequest(): QueryRedelegationRecordsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}
export const QueryRedelegationRecordsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest",
  encode(message: QueryRedelegationRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRedelegationRecordsRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRedelegationRecordsRequest>): QueryRedelegationRecordsRequest {
    const message = createBaseQueryRedelegationRecordsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedelegationRecordsRequestAmino): QueryRedelegationRecordsRequest {
    const message = createBaseQueryRedelegationRecordsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRedelegationRecordsRequest): QueryRedelegationRecordsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationRecordsRequestAminoMsg): QueryRedelegationRecordsRequest {
    return QueryRedelegationRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedelegationRecordsRequestProtoMsg): QueryRedelegationRecordsRequest {
    return QueryRedelegationRecordsRequest.decode(message.value);
  },
  toProto(message: QueryRedelegationRecordsRequest): Uint8Array {
    return QueryRedelegationRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationRecordsRequest): QueryRedelegationRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest",
      value: QueryRedelegationRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationRecordsResponse(): QueryRedelegationRecordsResponse {
  return {
    redelegations: [],
    pagination: undefined
  };
}
export const QueryRedelegationRecordsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse",
  encode(message: QueryRedelegationRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegations) {
      RedelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRedelegationRecordsResponse {
    return {
      redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => RedelegationRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRedelegationRecordsResponse>): QueryRedelegationRecordsResponse {
    const message = createBaseQueryRedelegationRecordsResponse();
    message.redelegations = object.redelegations?.map(e => RedelegationRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedelegationRecordsResponseAmino): QueryRedelegationRecordsResponse {
    const message = createBaseQueryRedelegationRecordsResponse();
    message.redelegations = object.redelegations?.map(e => RedelegationRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRedelegationRecordsResponse): QueryRedelegationRecordsResponseAmino {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationRecord.toAmino(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationRecordsResponseAminoMsg): QueryRedelegationRecordsResponse {
    return QueryRedelegationRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedelegationRecordsResponseProtoMsg): QueryRedelegationRecordsResponse {
    return QueryRedelegationRecordsResponse.decode(message.value);
  },
  toProto(message: QueryRedelegationRecordsResponse): Uint8Array {
    return QueryRedelegationRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationRecordsResponse): QueryRedelegationRecordsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse",
      value: QueryRedelegationRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMappedAccountsRequest(): QueryMappedAccountsRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const QueryMappedAccountsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest",
  encode(message: QueryMappedAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMappedAccountsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryMappedAccountsRequest>): QueryMappedAccountsRequest {
    const message = createBaseQueryMappedAccountsRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMappedAccountsRequestAmino): QueryMappedAccountsRequest {
    const message = createBaseQueryMappedAccountsRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMappedAccountsRequest): QueryMappedAccountsRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMappedAccountsRequestAminoMsg): QueryMappedAccountsRequest {
    return QueryMappedAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMappedAccountsRequestProtoMsg): QueryMappedAccountsRequest {
    return QueryMappedAccountsRequest.decode(message.value);
  },
  toProto(message: QueryMappedAccountsRequest): Uint8Array {
    return QueryMappedAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMappedAccountsRequest): QueryMappedAccountsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest",
      value: QueryMappedAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry(): QueryMappedAccountsResponse_RemoteAddressMapEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const QueryMappedAccountsResponse_RemoteAddressMapEntry = {
  encode(message: QueryMappedAccountsResponse_RemoteAddressMapEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryMappedAccountsResponse_RemoteAddressMapEntry>): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    const message = createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryMappedAccountsResponse_RemoteAddressMapEntryAmino): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    const message = createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: QueryMappedAccountsResponse_RemoteAddressMapEntry): QueryMappedAccountsResponse_RemoteAddressMapEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMappedAccountsResponse_RemoteAddressMapEntryAminoMsg): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    return QueryMappedAccountsResponse_RemoteAddressMapEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMappedAccountsResponse_RemoteAddressMapEntryProtoMsg): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    return QueryMappedAccountsResponse_RemoteAddressMapEntry.decode(message.value);
  },
  toProto(message: QueryMappedAccountsResponse_RemoteAddressMapEntry): Uint8Array {
    return QueryMappedAccountsResponse_RemoteAddressMapEntry.encode(message).finish();
  }
};
function createBaseQueryMappedAccountsResponse(): QueryMappedAccountsResponse {
  return {
    RemoteAddressMap: {},
    pagination: undefined
  };
}
export const QueryMappedAccountsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse",
  encode(message: QueryMappedAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.RemoteAddressMap).forEach(([key, value]) => {
      QueryMappedAccountsResponse_RemoteAddressMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMappedAccountsResponse {
    return {
      RemoteAddressMap: isObject(object.RemoteAddressMap) ? Object.entries(object.RemoteAddressMap).reduce<{
        [key: string]: bytes;
      }>((acc, [key, value]) => {
        acc[key] = bytes.fromJSON(value);
        return acc;
      }, {}) : {},
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryMappedAccountsResponse>): QueryMappedAccountsResponse {
    const message = createBaseQueryMappedAccountsResponse();
    message.RemoteAddressMap = Object.entries(object.RemoteAddressMap ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromPartial(value);
      }
      return acc;
    }, {});
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMappedAccountsResponseAmino): QueryMappedAccountsResponse {
    const message = createBaseQueryMappedAccountsResponse();
    message.RemoteAddressMap = Object.entries(object.RemoteAddressMap ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMappedAccountsResponse): QueryMappedAccountsResponseAmino {
    const obj: any = {};
    obj.RemoteAddressMap = {};
    if (message.RemoteAddressMap) {
      Object.entries(message.RemoteAddressMap).forEach(([k, v]) => {
        obj.RemoteAddressMap[k] = bytes.toAmino(v);
      });
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMappedAccountsResponseAminoMsg): QueryMappedAccountsResponse {
    return QueryMappedAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMappedAccountsResponseProtoMsg): QueryMappedAccountsResponse {
    return QueryMappedAccountsResponse.decode(message.value);
  },
  toProto(message: QueryMappedAccountsResponse): Uint8Array {
    return QueryMappedAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMappedAccountsResponse): QueryMappedAccountsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse",
      value: QueryMappedAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenyListRequest(): QueryDenyListRequest {
  return {
    chainId: ""
  };
}
export const QueryDenyListRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDenyListRequest",
  encode(message: QueryDenyListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenyListRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryDenyListRequest>): QueryDenyListRequest {
    const message = createBaseQueryDenyListRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryDenyListRequestAmino): QueryDenyListRequest {
    const message = createBaseQueryDenyListRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryDenyListRequest): QueryDenyListRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryDenyListRequestAminoMsg): QueryDenyListRequest {
    return QueryDenyListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenyListRequestProtoMsg): QueryDenyListRequest {
    return QueryDenyListRequest.decode(message.value);
  },
  toProto(message: QueryDenyListRequest): Uint8Array {
    return QueryDenyListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenyListRequest): QueryDenyListRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDenyListRequest",
      value: QueryDenyListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenyListResponse(): QueryDenyListResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryDenyListResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDenyListResponse",
  encode(message: QueryDenyListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDenyListResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDenyListResponse>): QueryDenyListResponse {
    const message = createBaseQueryDenyListResponse();
    message.validators = object.validators?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenyListResponseAmino): QueryDenyListResponse {
    const message = createBaseQueryDenyListResponse();
    message.validators = object.validators?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenyListResponse): QueryDenyListResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenyListResponseAminoMsg): QueryDenyListResponse {
    return QueryDenyListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenyListResponseProtoMsg): QueryDenyListResponse {
    return QueryDenyListResponse.decode(message.value);
  },
  toProto(message: QueryDenyListResponse): Uint8Array {
    return QueryDenyListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenyListResponse): QueryDenyListResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDenyListResponse",
      value: QueryDenyListResponse.encode(message).finish()
    };
  }
};