import { LCDClient } from "@cosmology/lcd";
import { QueryClockContracts, QueryClockContractsResponseSDKType, QueryClockContract, QueryClockContractResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    clockContracts(params?: QueryClockContracts): Promise<QueryClockContractsResponseSDKType>;
    clockContract(params: QueryClockContract): Promise<QueryClockContractResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
