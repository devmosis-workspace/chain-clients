import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClassTraceRequest, QueryClassTraceResponse, QueryClassTracesRequest, QueryClassTracesResponse, QueryClassHashRequest, QueryClassHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** ClassTrace queries a class trace information. */
    classTrace(request: QueryClassTraceRequest): Promise<QueryClassTraceResponse>;
    /** ClassTraces queries all class traces. */
    classTraces(request?: QueryClassTracesRequest): Promise<QueryClassTracesResponse>;
    /** ClassHash queries a class hash information. */
    classHash(request: QueryClassHashRequest): Promise<QueryClassHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    classTrace(request: QueryClassTraceRequest): Promise<QueryClassTraceResponse>;
    classTraces(request?: QueryClassTracesRequest): Promise<QueryClassTracesResponse>;
    classHash(request: QueryClassHashRequest): Promise<QueryClassHashResponse>;
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    classTrace(request: QueryClassTraceRequest): Promise<QueryClassTraceResponse>;
    classTraces(request?: QueryClassTracesRequest): Promise<QueryClassTracesResponse>;
    classHash(request: QueryClassHashRequest): Promise<QueryClassHashResponse>;
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
};
