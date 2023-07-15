import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryByAccountRequest, QueryByAccountResponse, QueryInstrumentsRequest, QueryInstrumentsResponse, QueryInstrumentRequest, QueryInstrumentResponse } from "./query";
export interface Query {
    byAccount(request: QueryByAccountRequest): Promise<QueryByAccountResponse>;
    instruments(request?: QueryInstrumentsRequest): Promise<QueryInstrumentsResponse>;
    instrument(request: QueryInstrumentRequest): Promise<QueryInstrumentResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    byAccount(request: QueryByAccountRequest): Promise<QueryByAccountResponse>;
    instruments(request?: QueryInstrumentsRequest): Promise<QueryInstrumentsResponse>;
    instrument(request: QueryInstrumentRequest): Promise<QueryInstrumentResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    byAccount(request: QueryByAccountRequest): Promise<QueryByAccountResponse>;
    instruments(request?: QueryInstrumentsRequest): Promise<QueryInstrumentsResponse>;
    instrument(request: QueryInstrumentRequest): Promise<QueryInstrumentResponse>;
};
