import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.teamInfo = this.teamInfo.bind(this);
    this.teamVestingAccounts = this.teamVestingAccounts.bind(this);
    this.teamVestingAccount = this.teamVestingAccount.bind(this);
    this.teamVestingStatus = this.teamVestingStatus.bind(this);
    this.teamVestingStatusByTime = this.teamVestingStatusByTime.bind(this);
  }
  teamInfo(request: QueryTeamInfoRequest = {}): Promise<QueryTeamInfoResponse> {
    const data = QueryTeamInfoRequest.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Query", "TeamInfo", data);
    return promise.then(data => QueryTeamInfoResponse.decode(new _m0.Reader(data)));
  }
  teamVestingAccounts(request: QueryTeamVestingAccountsRequest = {}): Promise<QueryTeamVestingAccountsResponse> {
    const data = QueryTeamVestingAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Query", "TeamVestingAccounts", data);
    return promise.then(data => QueryTeamVestingAccountsResponse.decode(new _m0.Reader(data)));
  }
  teamVestingAccount(request: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponse> {
    const data = QueryTeamVestingAccountRequest.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Query", "TeamVestingAccount", data);
    return promise.then(data => QueryTeamVestingAccountResponse.decode(new _m0.Reader(data)));
  }
  teamVestingStatus(request: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponse> {
    const data = QueryTeamVestingStatusRequest.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Query", "TeamVestingStatus", data);
    return promise.then(data => QueryTeamVestingStatusResponse.decode(new _m0.Reader(data)));
  }
  teamVestingStatusByTime(request: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponse> {
    const data = QueryTeamVestingStatusByTimeRequest.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Query", "TeamVestingStatusByTime", data);
    return promise.then(data => QueryTeamVestingStatusByTimeResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    teamInfo(request?: QueryTeamInfoRequest): Promise<QueryTeamInfoResponse> {
      return queryService.teamInfo(request);
    },
    teamVestingAccounts(request?: QueryTeamVestingAccountsRequest): Promise<QueryTeamVestingAccountsResponse> {
      return queryService.teamVestingAccounts(request);
    },
    teamVestingAccount(request: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponse> {
      return queryService.teamVestingAccount(request);
    },
    teamVestingStatus(request: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponse> {
      return queryService.teamVestingStatus(request);
    },
    teamVestingStatusByTime(request: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponse> {
      return queryService.teamVestingStatusByTime(request);
    }
  };
};