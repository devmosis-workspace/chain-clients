import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryZonesRequest, QueryZonesResponseSDKType, QueryZoneRequest, QueryZoneResponseSDKType, QueryZoneValidatorsRequest, QueryZoneValidatorsResponseSDKType, QueryDepositAccountForChainRequest, QueryDepositAccountForChainResponseSDKType, QueryDelegatorIntentRequest, QueryDelegatorIntentResponseSDKType, QueryDelegatorIntentsRequest, QueryDelegatorIntentsResponseSDKType, QueryDelegationsRequest, QueryDelegationsResponseSDKType, QueryReceiptsRequest, QueryReceiptsResponseSDKType, QueryTxStatusRequest, QueryTxStatusResponseSDKType, QueryWithdrawalRecordsRequest, QueryWithdrawalRecordsResponseSDKType, QueryUserWithdrawalRecordsRequest, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponseSDKType, QueryRedelegationRecordsRequest, QueryRedelegationRecordsResponseSDKType, QueryMappedAccountsRequest, QueryMappedAccountsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Zones provides meta data on connected zones. */
  async zones(params: QueryZonesRequest = {
    pagination: undefined
  }): Promise<QueryZonesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/zones`;
    return await this.req.get<QueryZonesResponseSDKType>(endpoint, options);
  }
  /* Zone provides meta data on a specific zone. */
  async zone(params: QueryZoneRequest): Promise<QueryZoneResponseSDKType> {
    const endpoint = `quicksilver/interchainstaking/v1/zone/${params.chainId}`;
    return await this.req.get<QueryZoneResponseSDKType>(endpoint);
  }
  /* ZoneValidators */
  async zoneValidators(params: QueryZoneValidatorsRequest): Promise<QueryZoneValidatorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/validators`;
    return await this.req.get<QueryZoneValidatorsResponseSDKType>(endpoint, options);
  }
  /* DepositAccount provides data on the deposit address for a connected zone. */
  async depositAccount(params: QueryDepositAccountForChainRequest): Promise<QueryDepositAccountForChainResponseSDKType> {
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/deposit_address`;
    return await this.req.get<QueryDepositAccountForChainResponseSDKType>(endpoint);
  }
  /* DelegatorIntent provides data on the intent of the delegator for the given
   zone. */
  async delegatorIntent(params: QueryDelegatorIntentRequest): Promise<QueryDelegatorIntentResponseSDKType> {
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/delegator_intent/${params.delegatorAddress}`;
    return await this.req.get<QueryDelegatorIntentResponseSDKType>(endpoint);
  }
  /* DelegatorIntents provides data on the intent of the delegator for all zones */
  async delegatorIntents(params: QueryDelegatorIntentsRequest): Promise<QueryDelegatorIntentsResponseSDKType> {
    const endpoint = `quicksilver/interchainstaking/v1/delegator_intents/${params.delegatorAddress}`;
    return await this.req.get<QueryDelegatorIntentsResponseSDKType>(endpoint);
  }
  /* Delegations provides data on the delegations for the given zone. */
  async delegations(params: QueryDelegationsRequest): Promise<QueryDelegationsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/delegations`;
    return await this.req.get<QueryDelegationsResponseSDKType>(endpoint, options);
  }
  /* Delegations provides data on the delegations for the given zone. */
  async receipts(params: QueryReceiptsRequest): Promise<QueryReceiptsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/receipts`;
    return await this.req.get<QueryReceiptsResponseSDKType>(endpoint, options);
  }
  /* TxStatus */
  async txStatus(params: QueryTxStatusRequest): Promise<QueryTxStatusResponseSDKType> {
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/deposits/${params.txHash}`;
    return await this.req.get<QueryTxStatusResponseSDKType>(endpoint);
  }
  /* WithdrawalRecords provides data on the active withdrawals. */
  async zoneWithdrawalRecords(params: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/withdrawal_records/${params.delegatorAddress}`;
    return await this.req.get<QueryWithdrawalRecordsResponseSDKType>(endpoint, options);
  }
  /* WithdrawalRecords provides data on the active withdrawals. */
  async withdrawalRecords(params: QueryWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/withdrawal_records`;
    return await this.req.get<QueryWithdrawalRecordsResponseSDKType>(endpoint, options);
  }
  /* WithdrawalRecords provides data on the active withdrawals. */
  async userWithdrawalRecords(params: QueryUserWithdrawalRecordsRequest): Promise<QueryWithdrawalRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/users/${params.userAddress}/withdrawal_records`;
    return await this.req.get<QueryWithdrawalRecordsResponseSDKType>(endpoint, options);
  }
  /* UnbondingRecords provides data on the active unbondings. */
  async unbondingRecords(params: QueryUnbondingRecordsRequest): Promise<QueryUnbondingRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/unbonding_records`;
    return await this.req.get<QueryUnbondingRecordsResponseSDKType>(endpoint, options);
  }
  /* RedelegationRecords provides data on the active unbondings. */
  async redelegationRecords(params: QueryRedelegationRecordsRequest): Promise<QueryRedelegationRecordsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/redelegation_records`;
    return await this.req.get<QueryRedelegationRecordsResponseSDKType>(endpoint, options);
  }
  /* MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
  async mappedAccounts(params: QueryMappedAccountsRequest): Promise<QueryMappedAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quicksilver/interchainstaking/v1/mapped_addresses/${params.address}`;
    return await this.req.get<QueryMappedAccountsResponseSDKType>(endpoint, options);
  }
}