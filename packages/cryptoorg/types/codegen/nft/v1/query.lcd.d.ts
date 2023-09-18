import { LCDClient } from "@cosmology/lcd";
import { QuerySupplyRequest, QuerySupplyResponseSDKType, QueryOwnerRequest, QueryOwnerResponseSDKType, QueryCollectionRequest, QueryCollectionResponseSDKType, QueryDenomRequest, QueryDenomResponseSDKType, QueryDenomByNameRequest, QueryDenomByNameResponseSDKType, QueryDenomsRequest, QueryDenomsResponseSDKType, QueryNFTRequest, QueryNFTResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
    owner(params: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType>;
    collection(params: QueryCollectionRequest): Promise<QueryCollectionResponseSDKType>;
    denom(params: QueryDenomRequest): Promise<QueryDenomResponseSDKType>;
    denomByName(params: QueryDenomByNameRequest): Promise<QueryDenomByNameResponseSDKType>;
    denoms(params?: QueryDenomsRequest): Promise<QueryDenomsResponseSDKType>;
    nFT(params: QueryNFTRequest): Promise<QueryNFTResponseSDKType>;
}
