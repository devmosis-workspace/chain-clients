import { Rpc } from "../../../helpers";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    attestationRequestByNonce(request: QueryAttestationRequestByNonceRequest): Promise<QueryAttestationRequestByNonceResponse>;
    latestAttestationNonce(request?: QueryLatestAttestationNonceRequest): Promise<QueryLatestAttestationNonceResponse>;
    earliestAttestationNonce(request?: QueryEarliestAttestationNonceRequest): Promise<QueryEarliestAttestationNonceResponse>;
    latestValsetRequestBeforeNonce(request: QueryLatestValsetRequestBeforeNonceRequest): Promise<QueryLatestValsetRequestBeforeNonceResponse>;
    latestUnbondingHeight(request?: QueryLatestUnbondingHeightRequest): Promise<QueryLatestUnbondingHeightResponse>;
    dataCommitmentRangeForHeight(request: QueryDataCommitmentRangeForHeightRequest): Promise<QueryDataCommitmentRangeForHeightResponse>;
    latestDataCommitment(request?: QueryLatestDataCommitmentRequest): Promise<QueryLatestDataCommitmentResponse>;
    eVMAddress(request: QueryEVMAddressRequest): Promise<QueryEVMAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    attestationRequestByNonce(request: QueryAttestationRequestByNonceRequest): Promise<QueryAttestationRequestByNonceResponse>;
    latestAttestationNonce(request?: QueryLatestAttestationNonceRequest): Promise<QueryLatestAttestationNonceResponse>;
    earliestAttestationNonce(request?: QueryEarliestAttestationNonceRequest): Promise<QueryEarliestAttestationNonceResponse>;
    latestValsetRequestBeforeNonce(request: QueryLatestValsetRequestBeforeNonceRequest): Promise<QueryLatestValsetRequestBeforeNonceResponse>;
    latestUnbondingHeight(request?: QueryLatestUnbondingHeightRequest): Promise<QueryLatestUnbondingHeightResponse>;
    dataCommitmentRangeForHeight(request: QueryDataCommitmentRangeForHeightRequest): Promise<QueryDataCommitmentRangeForHeightResponse>;
    latestDataCommitment(request?: QueryLatestDataCommitmentRequest): Promise<QueryLatestDataCommitmentResponse>;
    eVMAddress(request: QueryEVMAddressRequest): Promise<QueryEVMAddressResponse>;
};
