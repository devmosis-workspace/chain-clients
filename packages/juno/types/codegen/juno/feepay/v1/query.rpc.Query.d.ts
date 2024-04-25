import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryFeePayContract, QueryFeePayContractResponse, QueryFeePayContracts, QueryFeePayContractsResponse, QueryFeePayContractUses, QueryFeePayContractUsesResponse, QueryFeePayWalletIsEligible, QueryFeePayWalletIsEligibleResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** FeePayContract queries a single fee pay contract by address */
    feePayContract(request: QueryFeePayContract): Promise<QueryFeePayContractResponse>;
    /** Retrieve all fee pay contracts */
    feePayContracts(request?: QueryFeePayContracts): Promise<QueryFeePayContractsResponse>;
    /** Retrieve the number of uses on a fee pay contract by wallet */
    feePayContractUses(request: QueryFeePayContractUses): Promise<QueryFeePayContractUsesResponse>;
    /** Query if sender is eligible for fee pay contract interaction */
    feePayWalletIsEligible(request: QueryFeePayWalletIsEligible): Promise<QueryFeePayWalletIsEligibleResponse>;
    /** Params retrieves the FeePay module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    feePayContract(request: QueryFeePayContract): Promise<QueryFeePayContractResponse>;
    feePayContracts(request?: QueryFeePayContracts): Promise<QueryFeePayContractsResponse>;
    feePayContractUses(request: QueryFeePayContractUses): Promise<QueryFeePayContractUsesResponse>;
    feePayWalletIsEligible(request: QueryFeePayWalletIsEligible): Promise<QueryFeePayWalletIsEligibleResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    feePayContract(request: QueryFeePayContract): Promise<QueryFeePayContractResponse>;
    feePayContracts(request?: QueryFeePayContracts): Promise<QueryFeePayContractsResponse>;
    feePayContractUses(request: QueryFeePayContractUses): Promise<QueryFeePayContractUsesResponse>;
    feePayWalletIsEligible(request: QueryFeePayWalletIsEligible): Promise<QueryFeePayWalletIsEligibleResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
