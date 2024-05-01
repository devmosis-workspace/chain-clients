import { PageRequest } from "../../base/query/v1beta1/pagination";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRankRequest, QueryRankResponseSDKType, QuerySearchRequest, QuerySearchResponseSDKType, QueryIsLinkExistRequest, QueryLinkExistResponseSDKType, QueryIsAnyLinkExistRequest, QueryNegentropyPartilceRequest, QueryNegentropyParticleResponseSDKType, QueryNegentropyRequest, QueryNegentropyResponseSDKType, QueryKarmaRequest, QueryKarmaResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    rank(params: QueryRankRequest): Promise<QueryRankResponseSDKType>;
    search(params: QuerySearchRequest): Promise<QuerySearchResponseSDKType>;
    backlinks(params: QuerySearchRequest): Promise<QuerySearchResponseSDKType>;
    top(params: PageRequest): Promise<QuerySearchResponseSDKType>;
    isLinkExist(params: QueryIsLinkExistRequest): Promise<QueryLinkExistResponseSDKType>;
    isAnyLinkExist(params: QueryIsAnyLinkExistRequest): Promise<QueryLinkExistResponseSDKType>;
    particleNegentropy(params: QueryNegentropyPartilceRequest): Promise<QueryNegentropyParticleResponseSDKType>;
    negentropy(_params?: QueryNegentropyRequest): Promise<QueryNegentropyResponseSDKType>;
    karma(params: QueryKarmaRequest): Promise<QueryKarmaResponseSDKType>;
}
