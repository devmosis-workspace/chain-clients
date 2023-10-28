import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAttestationRequestByNonceRequest, QueryAttestationRequestByNonceResponse, QueryLatestAttestationNonceRequest, QueryLatestAttestationNonceResponse, QueryEarliestAttestationNonceRequest, QueryEarliestAttestationNonceResponse, QueryLatestValsetRequestBeforeNonceRequest, QueryLatestValsetRequestBeforeNonceResponse, QueryLatestUnbondingHeightRequest, QueryLatestUnbondingHeightResponse, QueryDataCommitmentRangeForHeightRequest, QueryDataCommitmentRangeForHeightResponse, QueryLatestDataCommitmentRequest, QueryLatestDataCommitmentResponse, QueryEVMAddressRequest, QueryEVMAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the current parameters for the qgb module */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * AttestationRequestByNonce queries attestation request by nonce.
   * Returns nil if not found.
   */
  attestationRequestByNonce(request: QueryAttestationRequestByNonceRequest): Promise<QueryAttestationRequestByNonceResponse>;
  /** LatestAttestationNonce queries latest attestation nonce. */
  latestAttestationNonce(request?: QueryLatestAttestationNonceRequest): Promise<QueryLatestAttestationNonceResponse>;
  /** EarliestAttestationNonce queries the earliest attestation nonce. */
  earliestAttestationNonce(request?: QueryEarliestAttestationNonceRequest): Promise<QueryEarliestAttestationNonceResponse>;
  /**
   * LatestValsetRequestBeforeNonce Queries latest Valset request before nonce.
   * And, even if the current nonce is a valset, it will return the previous
   * one.
   * If the provided nonce is 1, it will return an error, because, there is
   * no valset before nonce 1.
   */
  latestValsetRequestBeforeNonce(request: QueryLatestValsetRequestBeforeNonceRequest): Promise<QueryLatestValsetRequestBeforeNonceResponse>;
  /** LatestUnbondingHeight returns the latest unbonding height */
  latestUnbondingHeight(request?: QueryLatestUnbondingHeightRequest): Promise<QueryLatestUnbondingHeightResponse>;
  /**
   * DataCommitmentRangeForHeight returns the data commitment window
   * that includes the provided height
   */
  dataCommitmentRangeForHeight(request: QueryDataCommitmentRangeForHeightRequest): Promise<QueryDataCommitmentRangeForHeightResponse>;
  /** LatestDataCommitment returns the latest data commitment in store */
  latestDataCommitment(request?: QueryLatestDataCommitmentRequest): Promise<QueryLatestDataCommitmentResponse>;
  /**
   * EVMAddress returns the evm address associated with a supplied
   * validator address
   */
  eVMAddress(request: QueryEVMAddressRequest): Promise<QueryEVMAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.attestationRequestByNonce = this.attestationRequestByNonce.bind(this);
    this.latestAttestationNonce = this.latestAttestationNonce.bind(this);
    this.earliestAttestationNonce = this.earliestAttestationNonce.bind(this);
    this.latestValsetRequestBeforeNonce = this.latestValsetRequestBeforeNonce.bind(this);
    this.latestUnbondingHeight = this.latestUnbondingHeight.bind(this);
    this.dataCommitmentRangeForHeight = this.dataCommitmentRangeForHeight.bind(this);
    this.latestDataCommitment = this.latestDataCommitment.bind(this);
    this.eVMAddress = this.eVMAddress.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  attestationRequestByNonce(request: QueryAttestationRequestByNonceRequest): Promise<QueryAttestationRequestByNonceResponse> {
    const data = QueryAttestationRequestByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "AttestationRequestByNonce", data);
    return promise.then(data => QueryAttestationRequestByNonceResponse.decode(new BinaryReader(data)));
  }
  latestAttestationNonce(request: QueryLatestAttestationNonceRequest = {}): Promise<QueryLatestAttestationNonceResponse> {
    const data = QueryLatestAttestationNonceRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "LatestAttestationNonce", data);
    return promise.then(data => QueryLatestAttestationNonceResponse.decode(new BinaryReader(data)));
  }
  earliestAttestationNonce(request: QueryEarliestAttestationNonceRequest = {}): Promise<QueryEarliestAttestationNonceResponse> {
    const data = QueryEarliestAttestationNonceRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "EarliestAttestationNonce", data);
    return promise.then(data => QueryEarliestAttestationNonceResponse.decode(new BinaryReader(data)));
  }
  latestValsetRequestBeforeNonce(request: QueryLatestValsetRequestBeforeNonceRequest): Promise<QueryLatestValsetRequestBeforeNonceResponse> {
    const data = QueryLatestValsetRequestBeforeNonceRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "LatestValsetRequestBeforeNonce", data);
    return promise.then(data => QueryLatestValsetRequestBeforeNonceResponse.decode(new BinaryReader(data)));
  }
  latestUnbondingHeight(request: QueryLatestUnbondingHeightRequest = {}): Promise<QueryLatestUnbondingHeightResponse> {
    const data = QueryLatestUnbondingHeightRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "LatestUnbondingHeight", data);
    return promise.then(data => QueryLatestUnbondingHeightResponse.decode(new BinaryReader(data)));
  }
  dataCommitmentRangeForHeight(request: QueryDataCommitmentRangeForHeightRequest): Promise<QueryDataCommitmentRangeForHeightResponse> {
    const data = QueryDataCommitmentRangeForHeightRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "DataCommitmentRangeForHeight", data);
    return promise.then(data => QueryDataCommitmentRangeForHeightResponse.decode(new BinaryReader(data)));
  }
  latestDataCommitment(request: QueryLatestDataCommitmentRequest = {}): Promise<QueryLatestDataCommitmentResponse> {
    const data = QueryLatestDataCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "LatestDataCommitment", data);
    return promise.then(data => QueryLatestDataCommitmentResponse.decode(new BinaryReader(data)));
  }
  eVMAddress(request: QueryEVMAddressRequest): Promise<QueryEVMAddressResponse> {
    const data = QueryEVMAddressRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.qgb.v1.Query", "EVMAddress", data);
    return promise.then(data => QueryEVMAddressResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    attestationRequestByNonce(request: QueryAttestationRequestByNonceRequest): Promise<QueryAttestationRequestByNonceResponse> {
      return queryService.attestationRequestByNonce(request);
    },
    latestAttestationNonce(request?: QueryLatestAttestationNonceRequest): Promise<QueryLatestAttestationNonceResponse> {
      return queryService.latestAttestationNonce(request);
    },
    earliestAttestationNonce(request?: QueryEarliestAttestationNonceRequest): Promise<QueryEarliestAttestationNonceResponse> {
      return queryService.earliestAttestationNonce(request);
    },
    latestValsetRequestBeforeNonce(request: QueryLatestValsetRequestBeforeNonceRequest): Promise<QueryLatestValsetRequestBeforeNonceResponse> {
      return queryService.latestValsetRequestBeforeNonce(request);
    },
    latestUnbondingHeight(request?: QueryLatestUnbondingHeightRequest): Promise<QueryLatestUnbondingHeightResponse> {
      return queryService.latestUnbondingHeight(request);
    },
    dataCommitmentRangeForHeight(request: QueryDataCommitmentRangeForHeightRequest): Promise<QueryDataCommitmentRangeForHeightResponse> {
      return queryService.dataCommitmentRangeForHeight(request);
    },
    latestDataCommitment(request?: QueryLatestDataCommitmentRequest): Promise<QueryLatestDataCommitmentResponse> {
      return queryService.latestDataCommitment(request);
    },
    eVMAddress(request: QueryEVMAddressRequest): Promise<QueryEVMAddressResponse> {
      return queryService.eVMAddress(request);
    }
  };
};