import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBlacklistedRequest, QueryGetBlacklistedResponse, QueryAllBlacklistedRequest, QueryAllBlacklistedResponse, QueryGetPausedRequest, QueryGetPausedResponse, QueryGetMasterMinterRequest, QueryGetMasterMinterResponse, QueryGetMintersRequest, QueryGetMintersResponse, QueryAllMintersRequest, QueryAllMintersResponse, QueryGetPauserRequest, QueryGetPauserResponse, QueryGetBlacklisterRequest, QueryGetBlacklisterResponse, QueryGetOwnerRequest, QueryGetOwnerResponse, QueryGetMinterControllerRequest, QueryGetMinterControllerResponse, QueryAllMinterControllerRequest, QueryAllMinterControllerResponse, QueryGetMintingDenomRequest, QueryGetMintingDenomResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Blacklisted by index. */
    blacklisted(request: QueryGetBlacklistedRequest): Promise<QueryGetBlacklistedResponse>;
    /** Queries a list of Blacklisted items. */
    blacklistedAll(request?: QueryAllBlacklistedRequest): Promise<QueryAllBlacklistedResponse>;
    /** Queries a Paused by index. */
    paused(request?: QueryGetPausedRequest): Promise<QueryGetPausedResponse>;
    /** Queries a MasterMinter by index. */
    masterMinter(request?: QueryGetMasterMinterRequest): Promise<QueryGetMasterMinterResponse>;
    /** Queries a Minters by index. */
    minters(request: QueryGetMintersRequest): Promise<QueryGetMintersResponse>;
    /** Queries a list of Minters items. */
    mintersAll(request?: QueryAllMintersRequest): Promise<QueryAllMintersResponse>;
    /** Queries a Pauser by index. */
    pauser(request?: QueryGetPauserRequest): Promise<QueryGetPauserResponse>;
    /** Queries a Blacklister by index. */
    blacklister(request?: QueryGetBlacklisterRequest): Promise<QueryGetBlacklisterResponse>;
    /** Queries a Owner by index. */
    owner(request?: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse>;
    /** Queries a MinterController by index. */
    minterController(request: QueryGetMinterControllerRequest): Promise<QueryGetMinterControllerResponse>;
    /** Queries a list of MinterController items. */
    minterControllerAll(request?: QueryAllMinterControllerRequest): Promise<QueryAllMinterControllerResponse>;
    /** Queries a MintingDenom by index. */
    mintingDenom(request?: QueryGetMintingDenomRequest): Promise<QueryGetMintingDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    blacklisted(request: QueryGetBlacklistedRequest): Promise<QueryGetBlacklistedResponse>;
    blacklistedAll(request?: QueryAllBlacklistedRequest): Promise<QueryAllBlacklistedResponse>;
    paused(request?: QueryGetPausedRequest): Promise<QueryGetPausedResponse>;
    masterMinter(request?: QueryGetMasterMinterRequest): Promise<QueryGetMasterMinterResponse>;
    minters(request: QueryGetMintersRequest): Promise<QueryGetMintersResponse>;
    mintersAll(request?: QueryAllMintersRequest): Promise<QueryAllMintersResponse>;
    pauser(request?: QueryGetPauserRequest): Promise<QueryGetPauserResponse>;
    blacklister(request?: QueryGetBlacklisterRequest): Promise<QueryGetBlacklisterResponse>;
    owner(request?: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse>;
    minterController(request: QueryGetMinterControllerRequest): Promise<QueryGetMinterControllerResponse>;
    minterControllerAll(request?: QueryAllMinterControllerRequest): Promise<QueryAllMinterControllerResponse>;
    mintingDenom(request?: QueryGetMintingDenomRequest): Promise<QueryGetMintingDenomResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    blacklisted(request: QueryGetBlacklistedRequest): Promise<QueryGetBlacklistedResponse>;
    blacklistedAll(request?: QueryAllBlacklistedRequest): Promise<QueryAllBlacklistedResponse>;
    paused(request?: QueryGetPausedRequest): Promise<QueryGetPausedResponse>;
    masterMinter(request?: QueryGetMasterMinterRequest): Promise<QueryGetMasterMinterResponse>;
    minters(request: QueryGetMintersRequest): Promise<QueryGetMintersResponse>;
    mintersAll(request?: QueryAllMintersRequest): Promise<QueryAllMintersResponse>;
    pauser(request?: QueryGetPauserRequest): Promise<QueryGetPauserResponse>;
    blacklister(request?: QueryGetBlacklisterRequest): Promise<QueryGetBlacklisterResponse>;
    owner(request?: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse>;
    minterController(request: QueryGetMinterControllerRequest): Promise<QueryGetMinterControllerResponse>;
    minterControllerAll(request?: QueryAllMinterControllerRequest): Promise<QueryAllMinterControllerResponse>;
    mintingDenom(request?: QueryGetMintingDenomRequest): Promise<QueryGetMintingDenomResponse>;
};
