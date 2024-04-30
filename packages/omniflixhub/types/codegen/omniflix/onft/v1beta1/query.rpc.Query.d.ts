import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCollectionRequest, QueryCollectionResponse, QueryIBCCollectionRequest, QueryDenomRequest, QueryDenomResponse, QueryIBCDenomRequest, QueryDenomsRequest, QueryDenomsResponse, QueryONFTRequest, QueryONFTResponse, QueryIBCDenomONFTRequest, QueryOwnerONFTsRequest, QueryOwnerONFTsResponse, QueryOwnerIBCDenomONFTsRequest, QuerySupplyRequest, QuerySupplyResponse, QueryIBCDenomSupplyRequest, QueryParamsRequest, QueryParamsResponse } from "./query";
export interface Query {
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    iBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    iBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse>;
    denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    oNFT(request: QueryONFTRequest): Promise<QueryONFTResponse>;
    iBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse>;
    ownerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse>;
    ownerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    iBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    iBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    iBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse>;
    denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    oNFT(request: QueryONFTRequest): Promise<QueryONFTResponse>;
    iBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse>;
    ownerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse>;
    ownerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    iBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    iBCCollection(request: QueryIBCCollectionRequest): Promise<QueryCollectionResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    iBCDenom(request: QueryIBCDenomRequest): Promise<QueryDenomResponse>;
    denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    oNFT(request: QueryONFTRequest): Promise<QueryONFTResponse>;
    iBCDenomONFT(request: QueryIBCDenomONFTRequest): Promise<QueryONFTResponse>;
    ownerONFTs(request: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponse>;
    ownerIBCDenomONFTs(request: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponse>;
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    iBCDenomSupply(request: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
