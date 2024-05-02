import { Rpc } from "../../../helpers";
import { QueryAllDistributionsRequest, QueryAllDistributionsResponse, QueryRecordsByDistributionNameRequest, QueryRecordsByDistributionNameResponse, QueryRecordsByRecipientAddrRequest, QueryRecordsByRecipientAddrResponse, QueryClaimsByTypeRequest, QueryClaimsResponse } from "./query";
export interface Query {
    allDistributions(request?: QueryAllDistributionsRequest): Promise<QueryAllDistributionsResponse>;
    recordsByDistributionName(request: QueryRecordsByDistributionNameRequest): Promise<QueryRecordsByDistributionNameResponse>;
    recordsByRecipient(request: QueryRecordsByRecipientAddrRequest): Promise<QueryRecordsByRecipientAddrResponse>;
    claimsByType(request: QueryClaimsByTypeRequest): Promise<QueryClaimsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allDistributions(request?: QueryAllDistributionsRequest): Promise<QueryAllDistributionsResponse>;
    recordsByDistributionName(request: QueryRecordsByDistributionNameRequest): Promise<QueryRecordsByDistributionNameResponse>;
    recordsByRecipient(request: QueryRecordsByRecipientAddrRequest): Promise<QueryRecordsByRecipientAddrResponse>;
    claimsByType(request: QueryClaimsByTypeRequest): Promise<QueryClaimsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allDistributions(request?: QueryAllDistributionsRequest): Promise<QueryAllDistributionsResponse>;
    recordsByDistributionName(request: QueryRecordsByDistributionNameRequest): Promise<QueryRecordsByDistributionNameResponse>;
    recordsByRecipient(request: QueryRecordsByRecipientAddrRequest): Promise<QueryRecordsByRecipientAddrResponse>;
    claimsByType(request: QueryClaimsByTypeRequest): Promise<QueryClaimsResponse>;
};
