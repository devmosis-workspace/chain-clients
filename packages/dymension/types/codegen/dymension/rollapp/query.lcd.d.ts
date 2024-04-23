import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetRollappRequest, QueryGetRollappResponseSDKType, QueryGetRollappByEIP155Request, QueryAllRollappRequest, QueryAllRollappResponseSDKType, QueryGetLatestStateIndexRequest, QueryGetLatestStateIndexResponseSDKType, QueryGetStateInfoRequest, QueryGetStateInfoResponseSDKType, QueryAllStateInfoRequest, QueryAllStateInfoResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    rollapp(params: QueryGetRollappRequest): Promise<QueryGetRollappResponseSDKType>;
    rollappByEIP155(params: QueryGetRollappByEIP155Request): Promise<QueryGetRollappResponseSDKType>;
    rollappAll(params?: QueryAllRollappRequest): Promise<QueryAllRollappResponseSDKType>;
    latestStateIndex(params: QueryGetLatestStateIndexRequest): Promise<QueryGetLatestStateIndexResponseSDKType>;
    stateInfo(params: QueryGetStateInfoRequest): Promise<QueryGetStateInfoResponseSDKType>;
    stateInfoAll(params: QueryAllStateInfoRequest): Promise<QueryAllStateInfoResponseSDKType>;
}
