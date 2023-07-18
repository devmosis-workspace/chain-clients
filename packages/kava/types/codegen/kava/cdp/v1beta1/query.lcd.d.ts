import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAccountsRequest, QueryAccountsResponseSDKType, QueryTotalPrincipalRequest, QueryTotalPrincipalResponseSDKType, QueryTotalCollateralRequest, QueryTotalCollateralResponseSDKType, QueryCdpsRequest, QueryCdpsResponseSDKType, QueryCdpRequest, QueryCdpResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    accounts(_params?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
    totalPrincipal(params: QueryTotalPrincipalRequest): Promise<QueryTotalPrincipalResponseSDKType>;
    totalCollateral(params: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponseSDKType>;
    cdps(params: QueryCdpsRequest): Promise<QueryCdpsResponseSDKType>;
    cdp(params: QueryCdpRequest): Promise<QueryCdpResponseSDKType>;
    deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
}
