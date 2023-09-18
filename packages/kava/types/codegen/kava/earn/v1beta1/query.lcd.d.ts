import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryVaultsRequest, QueryVaultsResponseSDKType, QueryVaultRequest, QueryVaultResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    vaults(_params?: QueryVaultsRequest): Promise<QueryVaultsResponseSDKType>;
    vault(params: QueryVaultRequest): Promise<QueryVaultResponseSDKType>;
    deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
    totalSupply(_params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
}
