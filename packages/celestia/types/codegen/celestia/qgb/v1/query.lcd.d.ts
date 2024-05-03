import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAttestationRequestByNonceRequest, QueryAttestationRequestByNonceResponseSDKType, QueryLatestAttestationNonceRequest, QueryLatestAttestationNonceResponseSDKType, QueryEarliestAttestationNonceRequest, QueryEarliestAttestationNonceResponseSDKType, QueryLatestValsetRequestBeforeNonceRequest, QueryLatestValsetRequestBeforeNonceResponseSDKType, QueryLatestUnbondingHeightRequest, QueryLatestUnbondingHeightResponseSDKType, QueryDataCommitmentRangeForHeightRequest, QueryDataCommitmentRangeForHeightResponseSDKType, QueryLatestDataCommitmentRequest, QueryLatestDataCommitmentResponseSDKType, QueryEVMAddressRequest, QueryEVMAddressResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    attestationRequestByNonce(params: QueryAttestationRequestByNonceRequest): Promise<QueryAttestationRequestByNonceResponseSDKType>;
    latestAttestationNonce(_params?: QueryLatestAttestationNonceRequest): Promise<QueryLatestAttestationNonceResponseSDKType>;
    earliestAttestationNonce(_params?: QueryEarliestAttestationNonceRequest): Promise<QueryEarliestAttestationNonceResponseSDKType>;
    latestValsetRequestBeforeNonce(params: QueryLatestValsetRequestBeforeNonceRequest): Promise<QueryLatestValsetRequestBeforeNonceResponseSDKType>;
    latestUnbondingHeight(_params?: QueryLatestUnbondingHeightRequest): Promise<QueryLatestUnbondingHeightResponseSDKType>;
    dataCommitmentRangeForHeight(params: QueryDataCommitmentRangeForHeightRequest): Promise<QueryDataCommitmentRangeForHeightResponseSDKType>;
    latestDataCommitment(_params?: QueryLatestDataCommitmentRequest): Promise<QueryLatestDataCommitmentResponseSDKType>;
    eVMAddress(params: QueryEVMAddressRequest): Promise<QueryEVMAddressResponseSDKType>;
}
