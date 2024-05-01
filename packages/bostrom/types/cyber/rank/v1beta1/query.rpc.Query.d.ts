import { PageRequest } from "../../base/query/v1beta1/pagination";
import { Rpc } from "../../../helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryRankRequest, QueryRankResponse, QuerySearchRequest, QuerySearchResponse, QueryIsLinkExistRequest, QueryLinkExistResponse, QueryIsAnyLinkExistRequest, QueryNegentropyPartilceRequest, QueryNegentropyParticleResponse, QueryNegentropyRequest, QueryNegentropyResponse, QueryKarmaRequest, QueryKarmaResponse } from "./query";
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rank(request: QueryRankRequest): Promise<QueryRankResponse>;
    search(request: QuerySearchRequest): Promise<QuerySearchResponse>;
    backlinks(request: QuerySearchRequest): Promise<QuerySearchResponse>;
    top(request: PageRequest): Promise<QuerySearchResponse>;
    isLinkExist(request: QueryIsLinkExistRequest): Promise<QueryLinkExistResponse>;
    isAnyLinkExist(request: QueryIsAnyLinkExistRequest): Promise<QueryLinkExistResponse>;
    particleNegentropy(request: QueryNegentropyPartilceRequest): Promise<QueryNegentropyParticleResponse>;
    negentropy(request?: QueryNegentropyRequest): Promise<QueryNegentropyResponse>;
    karma(request: QueryKarmaRequest): Promise<QueryKarmaResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rank(request: QueryRankRequest): Promise<QueryRankResponse>;
    search(request: QuerySearchRequest): Promise<QuerySearchResponse>;
    backlinks(request: QuerySearchRequest): Promise<QuerySearchResponse>;
    top(request: PageRequest): Promise<QuerySearchResponse>;
    isLinkExist(request: QueryIsLinkExistRequest): Promise<QueryLinkExistResponse>;
    isAnyLinkExist(request: QueryIsAnyLinkExistRequest): Promise<QueryLinkExistResponse>;
    particleNegentropy(request: QueryNegentropyPartilceRequest): Promise<QueryNegentropyParticleResponse>;
    negentropy(request?: QueryNegentropyRequest): Promise<QueryNegentropyResponse>;
    karma(request: QueryKarmaRequest): Promise<QueryKarmaResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rank(request: QueryRankRequest): Promise<QueryRankResponse>;
    search(request: QuerySearchRequest): Promise<QuerySearchResponse>;
    backlinks(request: QuerySearchRequest): Promise<QuerySearchResponse>;
    top(request: PageRequest): Promise<QuerySearchResponse>;
    isLinkExist(request: QueryIsLinkExistRequest): Promise<QueryLinkExistResponse>;
    isAnyLinkExist(request: QueryIsAnyLinkExistRequest): Promise<QueryLinkExistResponse>;
    particleNegentropy(request: QueryNegentropyPartilceRequest): Promise<QueryNegentropyParticleResponse>;
    negentropy(request?: QueryNegentropyRequest): Promise<QueryNegentropyResponse>;
    karma(request: QueryKarmaRequest): Promise<QueryKarmaResponse>;
};
