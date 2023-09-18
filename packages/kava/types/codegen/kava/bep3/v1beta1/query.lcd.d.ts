import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAssetSupplyRequest, QueryAssetSupplyResponseSDKType, QueryAssetSuppliesRequest, QueryAssetSuppliesResponseSDKType, QueryAtomicSwapRequest, QueryAtomicSwapResponseSDKType, QueryAtomicSwapsRequest, QueryAtomicSwapsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    assetSupply(params: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponseSDKType>;
    assetSupplies(_params?: QueryAssetSuppliesRequest): Promise<QueryAssetSuppliesResponseSDKType>;
    atomicSwap(params: QueryAtomicSwapRequest): Promise<QueryAtomicSwapResponseSDKType>;
    atomicSwaps(params: QueryAtomicSwapsRequest): Promise<QueryAtomicSwapsResponseSDKType>;
}
