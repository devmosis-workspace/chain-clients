import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCertificatesRequest, QueryCertificatesResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** Certificates queries certificates */
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
};
