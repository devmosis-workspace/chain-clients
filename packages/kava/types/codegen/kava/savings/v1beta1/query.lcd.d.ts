import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
    totalSupply(_params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
}
