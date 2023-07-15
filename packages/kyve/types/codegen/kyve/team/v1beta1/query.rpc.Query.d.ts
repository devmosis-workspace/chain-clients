import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryTeamInfoRequest, QueryTeamInfoResponse, QueryTeamVestingAccountsRequest, QueryTeamVestingAccountsResponse, QueryTeamVestingAccountRequest, QueryTeamVestingAccountResponse, QueryTeamVestingStatusRequest, QueryTeamVestingStatusResponse, QueryTeamVestingStatusByTimeRequest, QueryTeamVestingStatusByTimeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** TeamInfo queries all important information from the team module */
    teamInfo(request?: QueryTeamInfoRequest): Promise<QueryTeamInfoResponse>;
    /** TeamVestingAccounts queries all team vesting accounts of the module. */
    teamVestingAccounts(request?: QueryTeamVestingAccountsRequest): Promise<QueryTeamVestingAccountsResponse>;
    /** TeamVestingAccount queries the team vesting accounts of the module. */
    teamVestingAccount(request: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponse>;
    /** TeamCurrentVestingStatus queries the current vesting progress of a team vesting account */
    teamVestingStatus(request: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponse>;
    /** TeamCurrentVestingStatus queries the current vesting progress of a team vesting account */
    teamVestingStatusByTime(request: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    teamInfo(request?: QueryTeamInfoRequest): Promise<QueryTeamInfoResponse>;
    teamVestingAccounts(request?: QueryTeamVestingAccountsRequest): Promise<QueryTeamVestingAccountsResponse>;
    teamVestingAccount(request: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponse>;
    teamVestingStatus(request: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponse>;
    teamVestingStatusByTime(request: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    teamInfo(request?: QueryTeamInfoRequest): Promise<QueryTeamInfoResponse>;
    teamVestingAccounts(request?: QueryTeamVestingAccountsRequest): Promise<QueryTeamVestingAccountsResponse>;
    teamVestingAccount(request: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponse>;
    teamVestingStatus(request: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponse>;
    teamVestingStatusByTime(request: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponse>;
};
