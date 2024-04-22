import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGovernanceKeyRequest, QueryGovernanceKeyResponse, ParamsRequest, ParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** GovernanceKey returns the multisig governance key */
    governanceKey(request?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    governanceKey(request?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    governanceKey(request?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
};
