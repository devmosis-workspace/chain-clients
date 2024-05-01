import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryZonesRequest, QueryZonesResponse, QueryZoneRequest, QueryZoneResponse, QueryZoneValidatorsRequest, QueryZoneValidatorsResponse, QueryDepositAccountForChainRequest, QueryDepositAccountForChainResponse, QueryDelegatorIntentRequest, QueryDelegatorIntentResponse, QueryDelegatorIntentsRequest, QueryDelegatorIntentsResponse, QueryDelegationsRequest, QueryDelegationsResponse, QueryReceiptsRequest, QueryReceiptsResponse, QueryTxStatusRequest, QueryTxStatusResponse, QueryWithdrawalRecordsRequest, QueryWithdrawalRecordsResponse, QueryUserWithdrawalRecordsRequest, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponse, QueryRedelegationRecordsRequest, QueryRedelegationRecordsResponse, QueryMappedAccountsRequest, QueryMappedAccountsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Zones provides meta data on connected zones. */
  zones(request?: QueryZonesRequest): Promise<QueryZonesResponse>;
  /** Zone provides meta data on a specific zone. */
  zone(request: QueryZoneRequest): Promise<QueryZoneResponse>;
  zoneValidators(request: QueryZoneValidatorsRequest): Promise<QueryZoneValidatorsResponse>;
  /** DepositAccount provides data on the deposit address for a connected zone. */
  depositAccount(request: QueryDepositAccountForChainRequest): Promise<QueryDepositAccountForChainResponse>;
  /**
   * DelegatorIntent provides data on the intent of the delegator for the given
   * zone.
   */
  delegatorIntent(request: QueryDelegatorIntentRequest): Promise<QueryDelegatorIntentResponse>;
  /** DelegatorIntents provides data on the intent of the delegator for all zones */
  delegatorIntents(request: QueryDelegatorIntentsRequest): Promise<QueryDelegatorIntentsResponse>;
  /** Delegations provides data on the delegations for the given zone. */
  delegations(request: QueryDelegationsRequest): Promise<QueryDelegationsResponse>;
  /** Delegations provides data on the delegations for the given zone. */
  receipts(request: QueryReceiptsRequest): Promise<QueryReceiptsResponse>;
  txStatus(request: QueryTxStatusRequest): Promise<QueryTxStatusResponse>;
  /** WithdrawalRecords provides data on the active withdrawals. */
  zoneWithdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
  /** WithdrawalRecords provides data on the active withdrawals. */
  withdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
  /** WithdrawalRecords provides data on the active withdrawals. */
  userWithdrawalRecords(request: QueryUserWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse>;
  /** UnbondingRecords provides data on the active unbondings. */
  unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse>;
  /** RedelegationRecords provides data on the active unbondings. */
  redelegationRecords(request: QueryRedelegationRecordsRequest): Promise<QueryRedelegationRecordsResponse>;
  /** MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
  mappedAccounts(request: QueryMappedAccountsRequest): Promise<QueryMappedAccountsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.zones = this.zones.bind(this);
    this.zone = this.zone.bind(this);
    this.zoneValidators = this.zoneValidators.bind(this);
    this.depositAccount = this.depositAccount.bind(this);
    this.delegatorIntent = this.delegatorIntent.bind(this);
    this.delegatorIntents = this.delegatorIntents.bind(this);
    this.delegations = this.delegations.bind(this);
    this.receipts = this.receipts.bind(this);
    this.txStatus = this.txStatus.bind(this);
    this.zoneWithdrawalRecords = this.zoneWithdrawalRecords.bind(this);
    this.withdrawalRecords = this.withdrawalRecords.bind(this);
    this.userWithdrawalRecords = this.userWithdrawalRecords.bind(this);
    this.unbondingRecords = this.unbondingRecords.bind(this);
    this.redelegationRecords = this.redelegationRecords.bind(this);
    this.mappedAccounts = this.mappedAccounts.bind(this);
  }
  zones(request: QueryZonesRequest = {
    pagination: undefined
  }): Promise<QueryZonesResponse> {
    const data = QueryZonesRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "Zones", data);
    return promise.then(data => QueryZonesResponse.decode(new BinaryReader(data)));
  }
  zone(request: QueryZoneRequest): Promise<QueryZoneResponse> {
    const data = QueryZoneRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "Zone", data);
    return promise.then(data => QueryZoneResponse.decode(new BinaryReader(data)));
  }
  zoneValidators(request: QueryZoneValidatorsRequest): Promise<QueryZoneValidatorsResponse> {
    const data = QueryZoneValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "ZoneValidators", data);
    return promise.then(data => QueryZoneValidatorsResponse.decode(new BinaryReader(data)));
  }
  depositAccount(request: QueryDepositAccountForChainRequest): Promise<QueryDepositAccountForChainResponse> {
    const data = QueryDepositAccountForChainRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "DepositAccount", data);
    return promise.then(data => QueryDepositAccountForChainResponse.decode(new BinaryReader(data)));
  }
  delegatorIntent(request: QueryDelegatorIntentRequest): Promise<QueryDelegatorIntentResponse> {
    const data = QueryDelegatorIntentRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "DelegatorIntent", data);
    return promise.then(data => QueryDelegatorIntentResponse.decode(new BinaryReader(data)));
  }
  delegatorIntents(request: QueryDelegatorIntentsRequest): Promise<QueryDelegatorIntentsResponse> {
    const data = QueryDelegatorIntentsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "DelegatorIntents", data);
    return promise.then(data => QueryDelegatorIntentsResponse.decode(new BinaryReader(data)));
  }
  delegations(request: QueryDelegationsRequest): Promise<QueryDelegationsResponse> {
    const data = QueryDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "Delegations", data);
    return promise.then(data => QueryDelegationsResponse.decode(new BinaryReader(data)));
  }
  receipts(request: QueryReceiptsRequest): Promise<QueryReceiptsResponse> {
    const data = QueryReceiptsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "Receipts", data);
    return promise.then(data => QueryReceiptsResponse.decode(new BinaryReader(data)));
  }
  txStatus(request: QueryTxStatusRequest): Promise<QueryTxStatusResponse> {
    const data = QueryTxStatusRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "TxStatus", data);
    return promise.then(data => QueryTxStatusResponse.decode(new BinaryReader(data)));
  }
  zoneWithdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse> {
    const data = QueryWithdrawalRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "ZoneWithdrawalRecords", data);
    return promise.then(data => QueryWithdrawalRecordsResponse.decode(new BinaryReader(data)));
  }
  withdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse> {
    const data = QueryWithdrawalRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "WithdrawalRecords", data);
    return promise.then(data => QueryWithdrawalRecordsResponse.decode(new BinaryReader(data)));
  }
  userWithdrawalRecords(request: QueryUserWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse> {
    const data = QueryUserWithdrawalRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "UserWithdrawalRecords", data);
    return promise.then(data => QueryWithdrawalRecordsResponse.decode(new BinaryReader(data)));
  }
  unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse> {
    const data = QueryUnbondingRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "UnbondingRecords", data);
    return promise.then(data => QueryUnbondingRecordsResponse.decode(new BinaryReader(data)));
  }
  redelegationRecords(request: QueryRedelegationRecordsRequest): Promise<QueryRedelegationRecordsResponse> {
    const data = QueryRedelegationRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "RedelegationRecords", data);
    return promise.then(data => QueryRedelegationRecordsResponse.decode(new BinaryReader(data)));
  }
  mappedAccounts(request: QueryMappedAccountsRequest): Promise<QueryMappedAccountsResponse> {
    const data = QueryMappedAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Query", "MappedAccounts", data);
    return promise.then(data => QueryMappedAccountsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    zones(request?: QueryZonesRequest): Promise<QueryZonesResponse> {
      return queryService.zones(request);
    },
    zone(request: QueryZoneRequest): Promise<QueryZoneResponse> {
      return queryService.zone(request);
    },
    zoneValidators(request: QueryZoneValidatorsRequest): Promise<QueryZoneValidatorsResponse> {
      return queryService.zoneValidators(request);
    },
    depositAccount(request: QueryDepositAccountForChainRequest): Promise<QueryDepositAccountForChainResponse> {
      return queryService.depositAccount(request);
    },
    delegatorIntent(request: QueryDelegatorIntentRequest): Promise<QueryDelegatorIntentResponse> {
      return queryService.delegatorIntent(request);
    },
    delegatorIntents(request: QueryDelegatorIntentsRequest): Promise<QueryDelegatorIntentsResponse> {
      return queryService.delegatorIntents(request);
    },
    delegations(request: QueryDelegationsRequest): Promise<QueryDelegationsResponse> {
      return queryService.delegations(request);
    },
    receipts(request: QueryReceiptsRequest): Promise<QueryReceiptsResponse> {
      return queryService.receipts(request);
    },
    txStatus(request: QueryTxStatusRequest): Promise<QueryTxStatusResponse> {
      return queryService.txStatus(request);
    },
    zoneWithdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse> {
      return queryService.zoneWithdrawalRecords(request);
    },
    withdrawalRecords(request: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse> {
      return queryService.withdrawalRecords(request);
    },
    userWithdrawalRecords(request: QueryUserWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponse> {
      return queryService.userWithdrawalRecords(request);
    },
    unbondingRecords(request: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponse> {
      return queryService.unbondingRecords(request);
    },
    redelegationRecords(request: QueryRedelegationRecordsRequest): Promise<QueryRedelegationRecordsResponse> {
      return queryService.redelegationRecords(request);
    },
    mappedAccounts(request: QueryMappedAccountsRequest): Promise<QueryMappedAccountsResponse> {
      return queryService.mappedAccounts(request);
    }
  };
};