import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAttestationRequestByNonceRequest, QueryAttestationRequestByNonceResponseSDKType, QueryLatestAttestationNonceRequest, QueryLatestAttestationNonceResponseSDKType, QueryEarliestAttestationNonceRequest, QueryEarliestAttestationNonceResponseSDKType, QueryLatestValsetRequestBeforeNonceRequest, QueryLatestValsetRequestBeforeNonceResponseSDKType, QueryLatestUnbondingHeightRequest, QueryLatestUnbondingHeightResponseSDKType, QueryDataCommitmentRangeForHeightRequest, QueryDataCommitmentRangeForHeightResponseSDKType, QueryLatestDataCommitmentRequest, QueryLatestDataCommitmentResponseSDKType, QueryEVMAddressRequest, QueryEVMAddressResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Params queries the current parameters for the qgb module */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `qgb/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* AttestationRequestByNonce queries attestation request by nonce.
   Returns nil if not found. */
  async attestationRequestByNonce(params: QueryAttestationRequestByNonceRequest): Promise<QueryAttestationRequestByNonceResponseSDKType> {
    const endpoint = `qgb/v1/attestations/requests/${params.nonce}`;
    return await this.req.get<QueryAttestationRequestByNonceResponseSDKType>(endpoint);
  }
  /* LatestAttestationNonce queries latest attestation nonce. */
  async latestAttestationNonce(_params: QueryLatestAttestationNonceRequest = {}): Promise<QueryLatestAttestationNonceResponseSDKType> {
    const endpoint = `qgb/v1/attestations/nonce/latest`;
    return await this.req.get<QueryLatestAttestationNonceResponseSDKType>(endpoint);
  }
  /* EarliestAttestationNonce queries the earliest attestation nonce. */
  async earliestAttestationNonce(_params: QueryEarliestAttestationNonceRequest = {}): Promise<QueryEarliestAttestationNonceResponseSDKType> {
    const endpoint = `qgb/v1/attestations/nonce/earliest`;
    return await this.req.get<QueryEarliestAttestationNonceResponseSDKType>(endpoint);
  }
  /* LatestValsetRequestBeforeNonce Queries latest Valset request before nonce.
   And, even if the current nonce is a valset, it will return the previous
   one.
   If the provided nonce is 1, it will return an error, because, there is
   no valset before nonce 1. */
  async latestValsetRequestBeforeNonce(params: QueryLatestValsetRequestBeforeNonceRequest): Promise<QueryLatestValsetRequestBeforeNonceResponseSDKType> {
    const endpoint = `qgb/v1/valset/request/before/${params.nonce}`;
    return await this.req.get<QueryLatestValsetRequestBeforeNonceResponseSDKType>(endpoint);
  }
  /* LatestUnbondingHeight returns the latest unbonding height */
  async latestUnbondingHeight(_params: QueryLatestUnbondingHeightRequest = {}): Promise<QueryLatestUnbondingHeightResponseSDKType> {
    const endpoint = `qgb/v1/unbonding`;
    return await this.req.get<QueryLatestUnbondingHeightResponseSDKType>(endpoint);
  }
  /* DataCommitmentRangeForHeight returns the data commitment window
   that includes the provided height */
  async dataCommitmentRangeForHeight(params: QueryDataCommitmentRangeForHeightRequest): Promise<QueryDataCommitmentRangeForHeightResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.height !== "undefined") {
      options.params.height = params.height;
    }
    const endpoint = `qgb/v1/data_commitment/range/height`;
    return await this.req.get<QueryDataCommitmentRangeForHeightResponseSDKType>(endpoint, options);
  }
  /* LatestDataCommitment returns the latest data commitment in store */
  async latestDataCommitment(_params: QueryLatestDataCommitmentRequest = {}): Promise<QueryLatestDataCommitmentResponseSDKType> {
    const endpoint = `qgb/v1/data_commitment/latest`;
    return await this.req.get<QueryLatestDataCommitmentResponseSDKType>(endpoint);
  }
  /* EVMAddress returns the evm address associated with a supplied
   validator address */
  async eVMAddress(params: QueryEVMAddressRequest): Promise<QueryEVMAddressResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }
    const endpoint = `qgb/v1/evm_address`;
    return await this.req.get<QueryEVMAddressResponseSDKType>(endpoint, options);
  }
}