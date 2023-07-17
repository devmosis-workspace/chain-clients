import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryFoundationTaxRequest, QueryFoundationTaxResponse, QueryRestakeThresholdRequest, QueryRestakeThresholdResponse, QueryRestakeEntriesRequest, QueryRestakingEntriesResponse } from "./query";
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  foundationTax(request?: QueryFoundationTaxRequest): Promise<QueryFoundationTaxResponse>;
  /** RestakeThreshold queries the community pool coins. */
  restakeThreshold(request?: QueryRestakeThresholdRequest): Promise<QueryRestakeThresholdResponse>;
  /** RestakeThreshold queries the community pool coins. */
  restakingEntries(request: QueryRestakeEntriesRequest): Promise<QueryRestakingEntriesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
    this.foundationTax = this.foundationTax.bind(this);
    this.restakeThreshold = this.restakeThreshold.bind(this);
    this.restakingEntries = this.restakingEntries.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then(data => QueryValidatorOutstandingRewardsResponse.decode(new _m0.Reader(data)));
  }
  validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then(data => QueryValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }
  validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then(data => QueryValidatorSlashesResponse.decode(new _m0.Reader(data)));
  }
  delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new _m0.Reader(data)));
  }
  delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then(data => QueryDelegationTotalRewardsResponse.decode(new _m0.Reader(data)));
  }
  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }
  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }
  communityPool(request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
  foundationTax(request: QueryFoundationTaxRequest = {}): Promise<QueryFoundationTaxResponse> {
    const data = QueryFoundationTaxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "FoundationTax", data);
    return promise.then(data => QueryFoundationTaxResponse.decode(new _m0.Reader(data)));
  }
  restakeThreshold(request: QueryRestakeThresholdRequest = {}): Promise<QueryRestakeThresholdResponse> {
    const data = QueryRestakeThresholdRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "RestakeThreshold", data);
    return promise.then(data => QueryRestakeThresholdResponse.decode(new _m0.Reader(data)));
  }
  restakingEntries(request: QueryRestakeEntriesRequest): Promise<QueryRestakingEntriesResponse> {
    const data = QueryRestakeEntriesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "RestakingEntries", data);
    return promise.then(data => QueryRestakingEntriesResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
      return queryService.validatorOutstandingRewards(request);
    },
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
      return queryService.validatorCommission(request);
    },
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
      return queryService.validatorSlashes(request);
    },
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
      return queryService.delegationRewards(request);
    },
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
      return queryService.delegationTotalRewards(request);
    },
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
      return queryService.delegatorValidators(request);
    },
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
      return queryService.delegatorWithdrawAddress(request);
    },
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse> {
      return queryService.communityPool(request);
    },
    foundationTax(request?: QueryFoundationTaxRequest): Promise<QueryFoundationTaxResponse> {
      return queryService.foundationTax(request);
    },
    restakeThreshold(request?: QueryRestakeThresholdRequest): Promise<QueryRestakeThresholdResponse> {
      return queryService.restakeThreshold(request);
    },
    restakingEntries(request: QueryRestakeEntriesRequest): Promise<QueryRestakingEntriesResponse> {
      return queryService.restakingEntries(request);
    }
  };
};