import { Rpc } from "../../../helpers";
import { QueryProgramsRequest, QueryProgramsResponse, QueryProgramRequest, QueryProgramResponse, QueryFindingsRequest, QueryFindingsResponse, QueryFindingRequest, QueryFindingResponse, QueryFindingFingerprintRequest, QueryFindingFingerprintResponse, QueryProgramFingerprintRequest, QueryProgramFingerprintResponse } from "./query";
/** Query defines the gRPC querier service for bounty module */
export interface Query {
    /** Programs queries all programs based on given status. */
    programs(request?: QueryProgramsRequest): Promise<QueryProgramsResponse>;
    /** Program queries program details based on ProgramId. */
    program(request: QueryProgramRequest): Promise<QueryProgramResponse>;
    /** Findings queries findings of a given program. */
    findings(request: QueryFindingsRequest): Promise<QueryFindingsResponse>;
    /** Finding queries Finding information based on programID, FindingId. */
    finding(request: QueryFindingRequest): Promise<QueryFindingResponse>;
    /** FindingFingerprint queries finding fingerprint based on findingId. */
    findingFingerprint(request: QueryFindingFingerprintRequest): Promise<QueryFindingFingerprintResponse>;
    /** ProgramFingerprint queries program fingerprint based on programId. */
    programFingerprint(request: QueryProgramFingerprintRequest): Promise<QueryProgramFingerprintResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    programs(request?: QueryProgramsRequest): Promise<QueryProgramsResponse>;
    program(request: QueryProgramRequest): Promise<QueryProgramResponse>;
    findings(request: QueryFindingsRequest): Promise<QueryFindingsResponse>;
    finding(request: QueryFindingRequest): Promise<QueryFindingResponse>;
    findingFingerprint(request: QueryFindingFingerprintRequest): Promise<QueryFindingFingerprintResponse>;
    programFingerprint(request: QueryProgramFingerprintRequest): Promise<QueryProgramFingerprintResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    programs(request?: QueryProgramsRequest): Promise<QueryProgramsResponse>;
    program(request: QueryProgramRequest): Promise<QueryProgramResponse>;
    findings(request: QueryFindingsRequest): Promise<QueryFindingsResponse>;
    finding(request: QueryFindingRequest): Promise<QueryFindingResponse>;
    findingFingerprint(request: QueryFindingFingerprintRequest): Promise<QueryFindingFingerprintResponse>;
    programFingerprint(request: QueryProgramFingerprintRequest): Promise<QueryProgramFingerprintResponse>;
};
