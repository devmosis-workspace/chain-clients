import { LCDClient } from "@cosmology/lcd";
import { QueryFeePayContract, QueryFeePayContractResponseSDKType, QueryFeePayContracts, QueryFeePayContractsResponseSDKType, QueryFeePayContractUses, QueryFeePayContractUsesResponseSDKType, QueryFeePayWalletIsEligible, QueryFeePayWalletIsEligibleResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    feePayContract(params: QueryFeePayContract): Promise<QueryFeePayContractResponseSDKType>;
    feePayContracts(params?: QueryFeePayContracts): Promise<QueryFeePayContractsResponseSDKType>;
    feePayContractUses(params: QueryFeePayContractUses): Promise<QueryFeePayContractUsesResponseSDKType>;
    feePayWalletIsEligible(params: QueryFeePayWalletIsEligible): Promise<QueryFeePayWalletIsEligibleResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
