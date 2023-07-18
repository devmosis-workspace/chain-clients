import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDeployedCosmosCoinContractsRequest, QueryDeployedCosmosCoinContractsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    deployedCosmosCoinContracts(params: QueryDeployedCosmosCoinContractsRequest): Promise<QueryDeployedCosmosCoinContractsResponseSDKType>;
}
