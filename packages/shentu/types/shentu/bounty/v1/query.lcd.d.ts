import { LCDClient } from "@cosmology/lcd";
import { QueryProgramsRequest, QueryProgramsResponseSDKType, QueryProgramRequest, QueryProgramResponseSDKType, QueryFindingsRequest, QueryFindingsResponseSDKType, QueryFindingRequest, QueryFindingResponseSDKType, QueryFindingFingerprintRequest, QueryFindingFingerprintResponseSDKType, QueryProgramFingerprintRequest, QueryProgramFingerprintResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    programs(params?: QueryProgramsRequest): Promise<QueryProgramsResponseSDKType>;
    program(params: QueryProgramRequest): Promise<QueryProgramResponseSDKType>;
    findings(params: QueryFindingsRequest): Promise<QueryFindingsResponseSDKType>;
    finding(params: QueryFindingRequest): Promise<QueryFindingResponseSDKType>;
    findingFingerprint(params: QueryFindingFingerprintRequest): Promise<QueryFindingFingerprintResponseSDKType>;
    programFingerprint(params: QueryProgramFingerprintRequest): Promise<QueryProgramFingerprintResponseSDKType>;
}
