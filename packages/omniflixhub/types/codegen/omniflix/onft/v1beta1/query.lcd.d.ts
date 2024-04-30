import { LCDClient } from "@cosmology/lcd";
import { QueryCollectionRequest, QueryCollectionResponseSDKType, QueryIBCCollectionRequest, QueryDenomRequest, QueryDenomResponseSDKType, QueryIBCDenomRequest, QueryDenomsRequest, QueryDenomsResponseSDKType, QueryONFTRequest, QueryONFTResponseSDKType, QueryIBCDenomONFTRequest, QueryOwnerONFTsRequest, QueryOwnerONFTsResponseSDKType, QueryOwnerIBCDenomONFTsRequest, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryIBCDenomSupplyRequest, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    collection(params: QueryCollectionRequest): Promise<QueryCollectionResponseSDKType>;
    iBCCollection(params: QueryIBCCollectionRequest): Promise<QueryCollectionResponseSDKType>;
    denom(params: QueryDenomRequest): Promise<QueryDenomResponseSDKType>;
    iBCDenom(params: QueryIBCDenomRequest): Promise<QueryDenomResponseSDKType>;
    denoms(params: QueryDenomsRequest): Promise<QueryDenomsResponseSDKType>;
    oNFT(params: QueryONFTRequest): Promise<QueryONFTResponseSDKType>;
    iBCDenomONFT(params: QueryIBCDenomONFTRequest): Promise<QueryONFTResponseSDKType>;
    ownerONFTs(params: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponseSDKType>;
    ownerIBCDenomONFTs(params: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponseSDKType>;
    supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType>;
    iBCDenomSupply(params: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
