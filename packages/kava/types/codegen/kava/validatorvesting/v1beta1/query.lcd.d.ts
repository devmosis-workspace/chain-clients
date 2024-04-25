import { LCDClient } from "@cosmology/lcd";
import { QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QueryCirculatingSupplyHARDRequest, QueryCirculatingSupplyHARDResponseSDKType, QueryCirculatingSupplyUSDXRequest, QueryCirculatingSupplyUSDXResponseSDKType, QueryCirculatingSupplySWPRequest, QueryCirculatingSupplySWPResponseSDKType, QueryTotalSupplyHARDRequest, QueryTotalSupplyHARDResponseSDKType, QueryTotalSupplyUSDXRequest, QueryTotalSupplyUSDXResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    circulatingSupply(_params?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponseSDKType>;
    totalSupply(_params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
    circulatingSupplyHARD(_params?: QueryCirculatingSupplyHARDRequest): Promise<QueryCirculatingSupplyHARDResponseSDKType>;
    circulatingSupplyUSDX(_params?: QueryCirculatingSupplyUSDXRequest): Promise<QueryCirculatingSupplyUSDXResponseSDKType>;
    circulatingSupplySWP(_params?: QueryCirculatingSupplySWPRequest): Promise<QueryCirculatingSupplySWPResponseSDKType>;
    totalSupplyHARD(_params?: QueryTotalSupplyHARDRequest): Promise<QueryTotalSupplyHARDResponseSDKType>;
    totalSupplyUSDX(_params?: QueryTotalSupplyUSDXRequest): Promise<QueryTotalSupplyUSDXResponseSDKType>;
}
