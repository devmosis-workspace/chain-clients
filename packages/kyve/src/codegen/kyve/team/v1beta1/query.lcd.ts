import { LCDClient } from "@osmonauts/lcd";
import { QueryTeamInfoRequest, QueryTeamInfoResponseSDKType, QueryTeamVestingAccountsRequest, QueryTeamVestingAccountsResponseSDKType, QueryTeamVestingAccountRequest, QueryTeamVestingAccountResponseSDKType, QueryTeamVestingStatusRequest, QueryTeamVestingStatusResponseSDKType, QueryTeamVestingStatusByTimeRequest, QueryTeamVestingStatusByTimeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.teamInfo = this.teamInfo.bind(this);
    this.teamVestingAccounts = this.teamVestingAccounts.bind(this);
    this.teamVestingAccount = this.teamVestingAccount.bind(this);
    this.teamVestingStatus = this.teamVestingStatus.bind(this);
    this.teamVestingStatusByTime = this.teamVestingStatusByTime.bind(this);
  }
  /* TeamInfo queries all important information from the team module */
  async teamInfo(_params: QueryTeamInfoRequest = {}): Promise<QueryTeamInfoResponseSDKType> {
    const endpoint = `kyve/team/v1beta1/team_info`;
    return await this.req.get<QueryTeamInfoResponseSDKType>(endpoint);
  }
  /* TeamVestingAccounts queries all team vesting accounts of the module. */
  async teamVestingAccounts(_params: QueryTeamVestingAccountsRequest = {}): Promise<QueryTeamVestingAccountsResponseSDKType> {
    const endpoint = `kyve/team/v1beta1/team_vesting_accounts`;
    return await this.req.get<QueryTeamVestingAccountsResponseSDKType>(endpoint);
  }
  /* TeamVestingAccount queries the team vesting accounts of the module. */
  async teamVestingAccount(params: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponseSDKType> {
    const endpoint = `kyve/team/v1beta1/team_vesting_account/${params.id}`;
    return await this.req.get<QueryTeamVestingAccountResponseSDKType>(endpoint);
  }
  /* TeamCurrentVestingStatus queries the current vesting progress of a team vesting account */
  async teamVestingStatus(params: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponseSDKType> {
    const endpoint = `kyve/team/v1beta1/team_vesting_status/${params.id}`;
    return await this.req.get<QueryTeamVestingStatusResponseSDKType>(endpoint);
  }
  /* TeamCurrentVestingStatus queries the current vesting progress of a team vesting account */
  async teamVestingStatusByTime(params: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponseSDKType> {
    const endpoint = `kyve/team/v1beta1/team_vesting_status_by_time/${params.id}/${params.time}`;
    return await this.req.get<QueryTeamVestingStatusByTimeResponseSDKType>(endpoint);
  }
}