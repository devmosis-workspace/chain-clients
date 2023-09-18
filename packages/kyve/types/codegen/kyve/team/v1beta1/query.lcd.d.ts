import { LCDClient } from "@cosmology/lcd";
import { QueryTeamInfoRequest, QueryTeamInfoResponseSDKType, QueryTeamVestingAccountsRequest, QueryTeamVestingAccountsResponseSDKType, QueryTeamVestingAccountRequest, QueryTeamVestingAccountResponseSDKType, QueryTeamVestingStatusRequest, QueryTeamVestingStatusResponseSDKType, QueryTeamVestingStatusByTimeRequest, QueryTeamVestingStatusByTimeResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    teamInfo(_params?: QueryTeamInfoRequest): Promise<QueryTeamInfoResponseSDKType>;
    teamVestingAccounts(_params?: QueryTeamVestingAccountsRequest): Promise<QueryTeamVestingAccountsResponseSDKType>;
    teamVestingAccount(params: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponseSDKType>;
    teamVestingStatus(params: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponseSDKType>;
    teamVestingStatusByTime(params: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponseSDKType>;
}
