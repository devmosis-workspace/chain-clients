import { LCDClient } from "@cosmology/lcd";
import { QueryClassTraceRequest, QueryClassTraceResponseSDKType, QueryClassTracesRequest, QueryClassTracesResponseSDKType, QueryClassHashRequest, QueryClassHashResponseSDKType, QueryEscrowAddressRequest, QueryEscrowAddressResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    classTrace(params: QueryClassTraceRequest): Promise<QueryClassTraceResponseSDKType>;
    classTraces(params?: QueryClassTracesRequest): Promise<QueryClassTracesResponseSDKType>;
    classHash(params: QueryClassHashRequest): Promise<QueryClassHashResponseSDKType>;
    escrowAddress(params: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponseSDKType>;
}
