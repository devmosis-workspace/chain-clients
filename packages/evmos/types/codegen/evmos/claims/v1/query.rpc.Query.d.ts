import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
    totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse>;
    /** Params returns the claims module parameters */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ClaimsRecords returns all claims records */
    claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse>;
    /** ClaimsRecord returns the claims record for a given address */
    claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse>;
    claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse>;
    claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse>;
};
