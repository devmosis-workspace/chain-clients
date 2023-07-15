import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySupplyRequest, QuerySupplyResponse, QueryOwnerRequest, QueryOwnerResponse, QueryCollectionRequest, QueryCollectionResponse, QueryDenomRequest, QueryDenomResponse, QueryDenomByNameRequest, QueryDenomByNameResponse, QueryDenomsRequest, QueryDenomsResponse, QueryNFTRequest, QueryNFTResponse } from "./query";
/** Query defines the gRPC querier service for NFT module */
export interface Query {
    /** Supply queries the total supply of a given denom or owner */
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /** Owner queries the NFTs of the specified owner */
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    /** Collection queries the NFTs of the specified denom */
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    /** Denom queries the definition of a given denom */
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    /** DenomByName queries the definition of a given denom by name */
    denomByName(request: QueryDenomByNameRequest): Promise<QueryDenomByNameResponse>;
    /** Denoms queries all the denoms */
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    /** NFT queries the NFT for the given denom and token ID */
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    denomByName(request: QueryDenomByNameRequest): Promise<QueryDenomByNameResponse>;
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    denomByName(request: QueryDenomByNameRequest): Promise<QueryDenomByNameResponse>;
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
};
