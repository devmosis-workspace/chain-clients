import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClaimsRequest, QueryClaimsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Claims returns all zone claims from the current epoch. */
    claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    /** LastEpochClaims returns all zone claims from the last epoch. */
    lastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    /** UserClaims returns all zone claims for a given address from the current epoch. */
    userClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    /** UserLastEpochClaims returns all zone claims for a given address from the last epoch. */
    userLastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    lastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    userClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    userLastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    lastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    userClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
    userLastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
};
