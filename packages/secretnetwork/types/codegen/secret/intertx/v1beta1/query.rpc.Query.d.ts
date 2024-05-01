import { Rpc } from "../../../helpers";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair */
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
};
