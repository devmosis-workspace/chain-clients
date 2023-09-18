import { TeamVestingAccount, TeamVestingAccountAmino, TeamVestingAccountSDKType } from "./team";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequest {}
export interface QueryTeamInfoRequestProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamInfoRequest";
  value: Uint8Array;
}
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequestAmino {}
export interface QueryTeamInfoRequestAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamInfoRequest";
  value: QueryTeamInfoRequestAmino;
}
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequestSDKType {}
/** QueryAccountsResponse is response type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoResponse {
  /** foundation is the authority foundation address */
  foundationAuthority: string;
  /** bcp is the authority bcp address */
  bcpAuthority: string;
  /** total_team_allocation is the total allocation in $KYVE the team module has in order to reward team members */
  totalTeamAllocation: bigint;
  /** issued_team_allocation is the amount in $KYVE tied to team vesting accounts and which are not available anymore */
  issuedTeamAllocation: bigint;
  /**
   * available_team_allocation is the amount in $KYVE with which further team vesting accounts can be created.
   * if the available amount is zero no new vesting accounts can be created
   */
  availableTeamAllocation: bigint;
  /**
   * total_authority_rewards is the amount in $KYVE the authority has earned in total with inflation rewards.
   * Those rewards can be payed out for different purposes
   */
  totalAuthorityRewards: bigint;
  /** claimed_authority_rewards is the amount in $KYVE of how much the authority already claimed */
  claimedAuthorityRewards: bigint;
  /** available_authority_rewards is the amount in $KYVE of how much rewards the authority can claim right now */
  availableAuthorityRewards: bigint;
  /** total_account_rewards is the amount in $KYVE all team vesting accounts have ever received */
  totalAccountRewards: bigint;
  /** claimed_account_rewards is the amount in $KYVE all team vesting accounts have ever claimed */
  claimedAccountRewards: bigint;
  /** available_account_rewards is the total amount of $KYVE all team vesting accounts can currently claim */
  availableAccountRewards: bigint;
  /**
   * required_module_balance is the balance the team module should have. If this is less than the module balance
   * something went wrong
   */
  requiredModuleBalance: bigint;
  /** team_module_balance is the team module balance in $KYVE */
  teamModuleBalance: bigint;
}
export interface QueryTeamInfoResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamInfoResponse";
  value: Uint8Array;
}
/** QueryAccountsResponse is response type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoResponseAmino {
  /** foundation is the authority foundation address */
  foundation_authority: string;
  /** bcp is the authority bcp address */
  bcp_authority: string;
  /** total_team_allocation is the total allocation in $KYVE the team module has in order to reward team members */
  total_team_allocation: string;
  /** issued_team_allocation is the amount in $KYVE tied to team vesting accounts and which are not available anymore */
  issued_team_allocation: string;
  /**
   * available_team_allocation is the amount in $KYVE with which further team vesting accounts can be created.
   * if the available amount is zero no new vesting accounts can be created
   */
  available_team_allocation: string;
  /**
   * total_authority_rewards is the amount in $KYVE the authority has earned in total with inflation rewards.
   * Those rewards can be payed out for different purposes
   */
  total_authority_rewards: string;
  /** claimed_authority_rewards is the amount in $KYVE of how much the authority already claimed */
  claimed_authority_rewards: string;
  /** available_authority_rewards is the amount in $KYVE of how much rewards the authority can claim right now */
  available_authority_rewards: string;
  /** total_account_rewards is the amount in $KYVE all team vesting accounts have ever received */
  total_account_rewards: string;
  /** claimed_account_rewards is the amount in $KYVE all team vesting accounts have ever claimed */
  claimed_account_rewards: string;
  /** available_account_rewards is the total amount of $KYVE all team vesting accounts can currently claim */
  available_account_rewards: string;
  /**
   * required_module_balance is the balance the team module should have. If this is less than the module balance
   * something went wrong
   */
  required_module_balance: string;
  /** team_module_balance is the team module balance in $KYVE */
  team_module_balance: string;
}
export interface QueryTeamInfoResponseAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamInfoResponse";
  value: QueryTeamInfoResponseAmino;
}
/** QueryAccountsResponse is response type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoResponseSDKType {
  foundation_authority: string;
  bcp_authority: string;
  total_team_allocation: bigint;
  issued_team_allocation: bigint;
  available_team_allocation: bigint;
  total_authority_rewards: bigint;
  claimed_authority_rewards: bigint;
  available_authority_rewards: bigint;
  total_account_rewards: bigint;
  claimed_account_rewards: bigint;
  available_account_rewards: bigint;
  required_module_balance: bigint;
  team_module_balance: bigint;
}
/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequest {}
export interface QueryTeamVestingAccountsRequestProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountsRequest";
  value: Uint8Array;
}
/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequestAmino {}
export interface QueryTeamVestingAccountsRequestAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamVestingAccountsRequest";
  value: QueryTeamVestingAccountsRequestAmino;
}
/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequestSDKType {}
/** QueryAccountsResponse is response type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsResponse {
  /** accounts holds all the team vesting accounts of this module. */
  accounts: TeamVestingAccount[];
}
export interface QueryTeamVestingAccountsResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountsResponse";
  value: Uint8Array;
}
/** QueryAccountsResponse is response type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsResponseAmino {
  /** accounts holds all the team vesting accounts of this module. */
  accounts: TeamVestingAccountAmino[];
}
export interface QueryTeamVestingAccountsResponseAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamVestingAccountsResponse";
  value: QueryTeamVestingAccountsResponseAmino;
}
/** QueryAccountsResponse is response type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsResponseSDKType {
  accounts: TeamVestingAccountSDKType[];
}
/** QueryTeamVestingAccountRequest is request type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: bigint;
}
export interface QueryTeamVestingAccountRequestProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountRequest";
  value: Uint8Array;
}
/** QueryTeamVestingAccountRequest is request type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountRequestAmino {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
}
export interface QueryTeamVestingAccountRequestAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamVestingAccountRequest";
  value: QueryTeamVestingAccountRequestAmino;
}
/** QueryTeamVestingAccountRequest is request type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountRequestSDKType {
  id: bigint;
}
/** QueryTeamVestingAccountResponse is the response type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountResponse {
  /** account holds the requested team vesting account */
  account: TeamVestingAccount;
}
export interface QueryTeamVestingAccountResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountResponse";
  value: Uint8Array;
}
/** QueryTeamVestingAccountResponse is the response type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountResponseAmino {
  /** account holds the requested team vesting account */
  account?: TeamVestingAccountAmino;
}
export interface QueryTeamVestingAccountResponseAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamVestingAccountResponse";
  value: QueryTeamVestingAccountResponseAmino;
}
/** QueryTeamVestingAccountResponse is the response type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountResponseSDKType {
  account: TeamVestingAccountSDKType;
}
/** QueryTeamCurrentVestingStatusRequest is request type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: bigint;
}
export interface QueryTeamVestingStatusRequestProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusRequest";
  value: Uint8Array;
}
/** QueryTeamCurrentVestingStatusRequest is request type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusRequestAmino {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
}
export interface QueryTeamVestingStatusRequestAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamVestingStatusRequest";
  value: QueryTeamVestingStatusRequestAmino;
}
/** QueryTeamCurrentVestingStatusRequest is request type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusRequestSDKType {
  id: bigint;
}
/** QueryTeamCurrentVestingStatusResponse is the response type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusResponse {
  /** request_date .. */
  requestDate: string;
  /** plan ... */
  plan: QueryVestingPlan;
  /** status .. */
  status: QueryVestingStatus;
}
export interface QueryTeamVestingStatusResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusResponse";
  value: Uint8Array;
}
/** QueryTeamCurrentVestingStatusResponse is the response type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusResponseAmino {
  /** request_date .. */
  request_date: string;
  /** plan ... */
  plan?: QueryVestingPlanAmino;
  /** status .. */
  status?: QueryVestingStatusAmino;
}
export interface QueryTeamVestingStatusResponseAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamVestingStatusResponse";
  value: QueryTeamVestingStatusResponseAmino;
}
/** QueryTeamCurrentVestingStatusResponse is the response type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusResponseSDKType {
  request_date: string;
  plan: QueryVestingPlanSDKType;
  status: QueryVestingStatusSDKType;
}
/** QueryTeamVestingStatusByTimeRequest is request type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: bigint;
  /** time is a unix timestamp of the time the vesting progress should be calculated */
  time: bigint;
}
export interface QueryTeamVestingStatusByTimeRequestProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeRequest";
  value: Uint8Array;
}
/** QueryTeamVestingStatusByTimeRequest is request type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeRequestAmino {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** time is a unix timestamp of the time the vesting progress should be calculated */
  time: string;
}
export interface QueryTeamVestingStatusByTimeRequestAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeRequest";
  value: QueryTeamVestingStatusByTimeRequestAmino;
}
/** QueryTeamVestingStatusByTimeRequest is request type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeRequestSDKType {
  id: bigint;
  time: bigint;
}
/** QueryTeamVestingStatusByTimeResponse is the response type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeResponse {
  /** request_date .. */
  requestDate: string;
  /** plan ... */
  plan: QueryVestingPlan;
  /** status .. */
  status: QueryVestingStatus;
}
export interface QueryTeamVestingStatusByTimeResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeResponse";
  value: Uint8Array;
}
/** QueryTeamVestingStatusByTimeResponse is the response type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeResponseAmino {
  /** request_date .. */
  request_date: string;
  /** plan ... */
  plan?: QueryVestingPlanAmino;
  /** status .. */
  status?: QueryVestingStatusAmino;
}
export interface QueryTeamVestingStatusByTimeResponseAminoMsg {
  type: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeResponse";
  value: QueryTeamVestingStatusByTimeResponseAmino;
}
/** QueryTeamVestingStatusByTimeResponse is the response type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeResponseSDKType {
  request_date: string;
  plan: QueryVestingPlanSDKType;
  status: QueryVestingStatusSDKType;
}
/** QueryVestingStatus is a type holding information about the account's vesting progress */
export interface QueryVestingStatus {
  /** total_vested_amount ... */
  totalVestedAmount: bigint;
  /** total_unlocked_amount ... */
  totalUnlockedAmount: bigint;
  /** current_claimable_amount ... */
  currentClaimableAmount: bigint;
  /** locked_vested_amount ... */
  lockedVestedAmount: bigint;
  /** remaining_unvested_amount ... */
  remainingUnvestedAmount: bigint;
  /** claimed_amount ... */
  claimedAmount: bigint;
  /** total_rewards ... */
  totalRewards: bigint;
  /** claimed_rewards ... */
  claimedRewards: bigint;
  /** available_rewards ... */
  availableRewards: bigint;
}
export interface QueryVestingStatusProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryVestingStatus";
  value: Uint8Array;
}
/** QueryVestingStatus is a type holding information about the account's vesting progress */
export interface QueryVestingStatusAmino {
  /** total_vested_amount ... */
  total_vested_amount: string;
  /** total_unlocked_amount ... */
  total_unlocked_amount: string;
  /** current_claimable_amount ... */
  current_claimable_amount: string;
  /** locked_vested_amount ... */
  locked_vested_amount: string;
  /** remaining_unvested_amount ... */
  remaining_unvested_amount: string;
  /** claimed_amount ... */
  claimed_amount: string;
  /** total_rewards ... */
  total_rewards: string;
  /** claimed_rewards ... */
  claimed_rewards: string;
  /** available_rewards ... */
  available_rewards: string;
}
export interface QueryVestingStatusAminoMsg {
  type: "/kyve.team.v1beta1.QueryVestingStatus";
  value: QueryVestingStatusAmino;
}
/** QueryVestingStatus is a type holding information about the account's vesting progress */
export interface QueryVestingStatusSDKType {
  total_vested_amount: bigint;
  total_unlocked_amount: bigint;
  current_claimable_amount: bigint;
  locked_vested_amount: bigint;
  remaining_unvested_amount: bigint;
  claimed_amount: bigint;
  total_rewards: bigint;
  claimed_rewards: bigint;
  available_rewards: bigint;
}
/** QueryVestingPlan is a type holding information about the account's vesting data which does not change */
export interface QueryVestingPlan {
  /** commencement ... */
  commencement: string;
  /** token_vesting_start ... */
  tokenVestingStart: string;
  /** token_vesting_finished ... */
  tokenVestingFinished: string;
  /** token_unlock_start ... */
  tokenUnlockStart: string;
  /** token_unlock_finished ... */
  tokenUnlockFinished: string;
  /** clawback ... */
  clawback: bigint;
  /** clawback_amount ... */
  clawbackAmount: bigint;
  /** maximum_vesting_amount ... */
  maximumVestingAmount: bigint;
}
export interface QueryVestingPlanProtoMsg {
  typeUrl: "/kyve.team.v1beta1.QueryVestingPlan";
  value: Uint8Array;
}
/** QueryVestingPlan is a type holding information about the account's vesting data which does not change */
export interface QueryVestingPlanAmino {
  /** commencement ... */
  commencement: string;
  /** token_vesting_start ... */
  token_vesting_start: string;
  /** token_vesting_finished ... */
  token_vesting_finished: string;
  /** token_unlock_start ... */
  token_unlock_start: string;
  /** token_unlock_finished ... */
  token_unlock_finished: string;
  /** clawback ... */
  clawback: string;
  /** clawback_amount ... */
  clawback_amount: string;
  /** maximum_vesting_amount ... */
  maximum_vesting_amount: string;
}
export interface QueryVestingPlanAminoMsg {
  type: "/kyve.team.v1beta1.QueryVestingPlan";
  value: QueryVestingPlanAmino;
}
/** QueryVestingPlan is a type holding information about the account's vesting data which does not change */
export interface QueryVestingPlanSDKType {
  commencement: string;
  token_vesting_start: string;
  token_vesting_finished: string;
  token_unlock_start: string;
  token_unlock_finished: string;
  clawback: bigint;
  clawback_amount: bigint;
  maximum_vesting_amount: bigint;
}
function createBaseQueryTeamInfoRequest(): QueryTeamInfoRequest {
  return {};
}
export const QueryTeamInfoRequest = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamInfoRequest",
  encode(_: QueryTeamInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTeamInfoRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTeamInfoRequest>): QueryTeamInfoRequest {
    const message = createBaseQueryTeamInfoRequest();
    return message;
  },
  fromAmino(_: QueryTeamInfoRequestAmino): QueryTeamInfoRequest {
    return {};
  },
  toAmino(_: QueryTeamInfoRequest): QueryTeamInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTeamInfoRequestAminoMsg): QueryTeamInfoRequest {
    return QueryTeamInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamInfoRequestProtoMsg): QueryTeamInfoRequest {
    return QueryTeamInfoRequest.decode(message.value);
  },
  toProto(message: QueryTeamInfoRequest): Uint8Array {
    return QueryTeamInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamInfoRequest): QueryTeamInfoRequestProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamInfoRequest",
      value: QueryTeamInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTeamInfoResponse(): QueryTeamInfoResponse {
  return {
    foundationAuthority: "",
    bcpAuthority: "",
    totalTeamAllocation: BigInt(0),
    issuedTeamAllocation: BigInt(0),
    availableTeamAllocation: BigInt(0),
    totalAuthorityRewards: BigInt(0),
    claimedAuthorityRewards: BigInt(0),
    availableAuthorityRewards: BigInt(0),
    totalAccountRewards: BigInt(0),
    claimedAccountRewards: BigInt(0),
    availableAccountRewards: BigInt(0),
    requiredModuleBalance: BigInt(0),
    teamModuleBalance: BigInt(0)
  };
}
export const QueryTeamInfoResponse = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamInfoResponse",
  encode(message: QueryTeamInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.foundationAuthority !== "") {
      writer.uint32(10).string(message.foundationAuthority);
    }
    if (message.bcpAuthority !== "") {
      writer.uint32(18).string(message.bcpAuthority);
    }
    if (message.totalTeamAllocation !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalTeamAllocation);
    }
    if (message.issuedTeamAllocation !== BigInt(0)) {
      writer.uint32(32).uint64(message.issuedTeamAllocation);
    }
    if (message.availableTeamAllocation !== BigInt(0)) {
      writer.uint32(40).uint64(message.availableTeamAllocation);
    }
    if (message.totalAuthorityRewards !== BigInt(0)) {
      writer.uint32(48).uint64(message.totalAuthorityRewards);
    }
    if (message.claimedAuthorityRewards !== BigInt(0)) {
      writer.uint32(56).uint64(message.claimedAuthorityRewards);
    }
    if (message.availableAuthorityRewards !== BigInt(0)) {
      writer.uint32(64).uint64(message.availableAuthorityRewards);
    }
    if (message.totalAccountRewards !== BigInt(0)) {
      writer.uint32(72).uint64(message.totalAccountRewards);
    }
    if (message.claimedAccountRewards !== BigInt(0)) {
      writer.uint32(80).uint64(message.claimedAccountRewards);
    }
    if (message.availableAccountRewards !== BigInt(0)) {
      writer.uint32(88).uint64(message.availableAccountRewards);
    }
    if (message.requiredModuleBalance !== BigInt(0)) {
      writer.uint32(96).uint64(message.requiredModuleBalance);
    }
    if (message.teamModuleBalance !== BigInt(0)) {
      writer.uint32(104).uint64(message.teamModuleBalance);
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamInfoResponse {
    return {
      foundationAuthority: isSet(object.foundationAuthority) ? String(object.foundationAuthority) : "",
      bcpAuthority: isSet(object.bcpAuthority) ? String(object.bcpAuthority) : "",
      totalTeamAllocation: isSet(object.totalTeamAllocation) ? BigInt(object.totalTeamAllocation.toString()) : BigInt(0),
      issuedTeamAllocation: isSet(object.issuedTeamAllocation) ? BigInt(object.issuedTeamAllocation.toString()) : BigInt(0),
      availableTeamAllocation: isSet(object.availableTeamAllocation) ? BigInt(object.availableTeamAllocation.toString()) : BigInt(0),
      totalAuthorityRewards: isSet(object.totalAuthorityRewards) ? BigInt(object.totalAuthorityRewards.toString()) : BigInt(0),
      claimedAuthorityRewards: isSet(object.claimedAuthorityRewards) ? BigInt(object.claimedAuthorityRewards.toString()) : BigInt(0),
      availableAuthorityRewards: isSet(object.availableAuthorityRewards) ? BigInt(object.availableAuthorityRewards.toString()) : BigInt(0),
      totalAccountRewards: isSet(object.totalAccountRewards) ? BigInt(object.totalAccountRewards.toString()) : BigInt(0),
      claimedAccountRewards: isSet(object.claimedAccountRewards) ? BigInt(object.claimedAccountRewards.toString()) : BigInt(0),
      availableAccountRewards: isSet(object.availableAccountRewards) ? BigInt(object.availableAccountRewards.toString()) : BigInt(0),
      requiredModuleBalance: isSet(object.requiredModuleBalance) ? BigInt(object.requiredModuleBalance.toString()) : BigInt(0),
      teamModuleBalance: isSet(object.teamModuleBalance) ? BigInt(object.teamModuleBalance.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryTeamInfoResponse>): QueryTeamInfoResponse {
    const message = createBaseQueryTeamInfoResponse();
    message.foundationAuthority = object.foundationAuthority ?? "";
    message.bcpAuthority = object.bcpAuthority ?? "";
    message.totalTeamAllocation = object.totalTeamAllocation !== undefined && object.totalTeamAllocation !== null ? BigInt(object.totalTeamAllocation.toString()) : BigInt(0);
    message.issuedTeamAllocation = object.issuedTeamAllocation !== undefined && object.issuedTeamAllocation !== null ? BigInt(object.issuedTeamAllocation.toString()) : BigInt(0);
    message.availableTeamAllocation = object.availableTeamAllocation !== undefined && object.availableTeamAllocation !== null ? BigInt(object.availableTeamAllocation.toString()) : BigInt(0);
    message.totalAuthorityRewards = object.totalAuthorityRewards !== undefined && object.totalAuthorityRewards !== null ? BigInt(object.totalAuthorityRewards.toString()) : BigInt(0);
    message.claimedAuthorityRewards = object.claimedAuthorityRewards !== undefined && object.claimedAuthorityRewards !== null ? BigInt(object.claimedAuthorityRewards.toString()) : BigInt(0);
    message.availableAuthorityRewards = object.availableAuthorityRewards !== undefined && object.availableAuthorityRewards !== null ? BigInt(object.availableAuthorityRewards.toString()) : BigInt(0);
    message.totalAccountRewards = object.totalAccountRewards !== undefined && object.totalAccountRewards !== null ? BigInt(object.totalAccountRewards.toString()) : BigInt(0);
    message.claimedAccountRewards = object.claimedAccountRewards !== undefined && object.claimedAccountRewards !== null ? BigInt(object.claimedAccountRewards.toString()) : BigInt(0);
    message.availableAccountRewards = object.availableAccountRewards !== undefined && object.availableAccountRewards !== null ? BigInt(object.availableAccountRewards.toString()) : BigInt(0);
    message.requiredModuleBalance = object.requiredModuleBalance !== undefined && object.requiredModuleBalance !== null ? BigInt(object.requiredModuleBalance.toString()) : BigInt(0);
    message.teamModuleBalance = object.teamModuleBalance !== undefined && object.teamModuleBalance !== null ? BigInt(object.teamModuleBalance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTeamInfoResponseAmino): QueryTeamInfoResponse {
    return {
      foundationAuthority: object.foundation_authority,
      bcpAuthority: object.bcp_authority,
      totalTeamAllocation: BigInt(object.total_team_allocation),
      issuedTeamAllocation: BigInt(object.issued_team_allocation),
      availableTeamAllocation: BigInt(object.available_team_allocation),
      totalAuthorityRewards: BigInt(object.total_authority_rewards),
      claimedAuthorityRewards: BigInt(object.claimed_authority_rewards),
      availableAuthorityRewards: BigInt(object.available_authority_rewards),
      totalAccountRewards: BigInt(object.total_account_rewards),
      claimedAccountRewards: BigInt(object.claimed_account_rewards),
      availableAccountRewards: BigInt(object.available_account_rewards),
      requiredModuleBalance: BigInt(object.required_module_balance),
      teamModuleBalance: BigInt(object.team_module_balance)
    };
  },
  toAmino(message: QueryTeamInfoResponse): QueryTeamInfoResponseAmino {
    const obj: any = {};
    obj.foundation_authority = message.foundationAuthority;
    obj.bcp_authority = message.bcpAuthority;
    obj.total_team_allocation = message.totalTeamAllocation ? message.totalTeamAllocation.toString() : undefined;
    obj.issued_team_allocation = message.issuedTeamAllocation ? message.issuedTeamAllocation.toString() : undefined;
    obj.available_team_allocation = message.availableTeamAllocation ? message.availableTeamAllocation.toString() : undefined;
    obj.total_authority_rewards = message.totalAuthorityRewards ? message.totalAuthorityRewards.toString() : undefined;
    obj.claimed_authority_rewards = message.claimedAuthorityRewards ? message.claimedAuthorityRewards.toString() : undefined;
    obj.available_authority_rewards = message.availableAuthorityRewards ? message.availableAuthorityRewards.toString() : undefined;
    obj.total_account_rewards = message.totalAccountRewards ? message.totalAccountRewards.toString() : undefined;
    obj.claimed_account_rewards = message.claimedAccountRewards ? message.claimedAccountRewards.toString() : undefined;
    obj.available_account_rewards = message.availableAccountRewards ? message.availableAccountRewards.toString() : undefined;
    obj.required_module_balance = message.requiredModuleBalance ? message.requiredModuleBalance.toString() : undefined;
    obj.team_module_balance = message.teamModuleBalance ? message.teamModuleBalance.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTeamInfoResponseAminoMsg): QueryTeamInfoResponse {
    return QueryTeamInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamInfoResponseProtoMsg): QueryTeamInfoResponse {
    return QueryTeamInfoResponse.decode(message.value);
  },
  toProto(message: QueryTeamInfoResponse): Uint8Array {
    return QueryTeamInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamInfoResponse): QueryTeamInfoResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamInfoResponse",
      value: QueryTeamInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTeamVestingAccountsRequest(): QueryTeamVestingAccountsRequest {
  return {};
}
export const QueryTeamVestingAccountsRequest = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountsRequest",
  encode(_: QueryTeamVestingAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTeamVestingAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTeamVestingAccountsRequest>): QueryTeamVestingAccountsRequest {
    const message = createBaseQueryTeamVestingAccountsRequest();
    return message;
  },
  fromAmino(_: QueryTeamVestingAccountsRequestAmino): QueryTeamVestingAccountsRequest {
    return {};
  },
  toAmino(_: QueryTeamVestingAccountsRequest): QueryTeamVestingAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTeamVestingAccountsRequestAminoMsg): QueryTeamVestingAccountsRequest {
    return QueryTeamVestingAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamVestingAccountsRequestProtoMsg): QueryTeamVestingAccountsRequest {
    return QueryTeamVestingAccountsRequest.decode(message.value);
  },
  toProto(message: QueryTeamVestingAccountsRequest): Uint8Array {
    return QueryTeamVestingAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamVestingAccountsRequest): QueryTeamVestingAccountsRequestProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountsRequest",
      value: QueryTeamVestingAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTeamVestingAccountsResponse(): QueryTeamVestingAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryTeamVestingAccountsResponse = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountsResponse",
  encode(message: QueryTeamVestingAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      TeamVestingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => TeamVestingAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTeamVestingAccountsResponse>): QueryTeamVestingAccountsResponse {
    const message = createBaseQueryTeamVestingAccountsResponse();
    message.accounts = object.accounts?.map(e => TeamVestingAccount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTeamVestingAccountsResponseAmino): QueryTeamVestingAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => TeamVestingAccount.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTeamVestingAccountsResponse): QueryTeamVestingAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? TeamVestingAccount.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTeamVestingAccountsResponseAminoMsg): QueryTeamVestingAccountsResponse {
    return QueryTeamVestingAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamVestingAccountsResponseProtoMsg): QueryTeamVestingAccountsResponse {
    return QueryTeamVestingAccountsResponse.decode(message.value);
  },
  toProto(message: QueryTeamVestingAccountsResponse): Uint8Array {
    return QueryTeamVestingAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamVestingAccountsResponse): QueryTeamVestingAccountsResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountsResponse",
      value: QueryTeamVestingAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTeamVestingAccountRequest(): QueryTeamVestingAccountRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryTeamVestingAccountRequest = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountRequest",
  encode(message: QueryTeamVestingAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingAccountRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryTeamVestingAccountRequest>): QueryTeamVestingAccountRequest {
    const message = createBaseQueryTeamVestingAccountRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTeamVestingAccountRequestAmino): QueryTeamVestingAccountRequest {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: QueryTeamVestingAccountRequest): QueryTeamVestingAccountRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTeamVestingAccountRequestAminoMsg): QueryTeamVestingAccountRequest {
    return QueryTeamVestingAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamVestingAccountRequestProtoMsg): QueryTeamVestingAccountRequest {
    return QueryTeamVestingAccountRequest.decode(message.value);
  },
  toProto(message: QueryTeamVestingAccountRequest): Uint8Array {
    return QueryTeamVestingAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamVestingAccountRequest): QueryTeamVestingAccountRequestProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountRequest",
      value: QueryTeamVestingAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTeamVestingAccountResponse(): QueryTeamVestingAccountResponse {
  return {
    account: TeamVestingAccount.fromPartial({})
  };
}
export const QueryTeamVestingAccountResponse = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountResponse",
  encode(message: QueryTeamVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== undefined) {
      TeamVestingAccount.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingAccountResponse {
    return {
      account: isSet(object.account) ? TeamVestingAccount.fromJSON(object.account) : undefined
    };
  },
  fromPartial(object: Partial<QueryTeamVestingAccountResponse>): QueryTeamVestingAccountResponse {
    const message = createBaseQueryTeamVestingAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? TeamVestingAccount.fromPartial(object.account) : undefined;
    return message;
  },
  fromAmino(object: QueryTeamVestingAccountResponseAmino): QueryTeamVestingAccountResponse {
    return {
      account: object?.account ? TeamVestingAccount.fromAmino(object.account) : undefined
    };
  },
  toAmino(message: QueryTeamVestingAccountResponse): QueryTeamVestingAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? TeamVestingAccount.toAmino(message.account) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTeamVestingAccountResponseAminoMsg): QueryTeamVestingAccountResponse {
    return QueryTeamVestingAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamVestingAccountResponseProtoMsg): QueryTeamVestingAccountResponse {
    return QueryTeamVestingAccountResponse.decode(message.value);
  },
  toProto(message: QueryTeamVestingAccountResponse): Uint8Array {
    return QueryTeamVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamVestingAccountResponse): QueryTeamVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountResponse",
      value: QueryTeamVestingAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTeamVestingStatusRequest(): QueryTeamVestingStatusRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryTeamVestingStatusRequest = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusRequest",
  encode(message: QueryTeamVestingStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingStatusRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryTeamVestingStatusRequest>): QueryTeamVestingStatusRequest {
    const message = createBaseQueryTeamVestingStatusRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTeamVestingStatusRequestAmino): QueryTeamVestingStatusRequest {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: QueryTeamVestingStatusRequest): QueryTeamVestingStatusRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTeamVestingStatusRequestAminoMsg): QueryTeamVestingStatusRequest {
    return QueryTeamVestingStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamVestingStatusRequestProtoMsg): QueryTeamVestingStatusRequest {
    return QueryTeamVestingStatusRequest.decode(message.value);
  },
  toProto(message: QueryTeamVestingStatusRequest): Uint8Array {
    return QueryTeamVestingStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamVestingStatusRequest): QueryTeamVestingStatusRequestProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusRequest",
      value: QueryTeamVestingStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTeamVestingStatusResponse(): QueryTeamVestingStatusResponse {
  return {
    requestDate: "",
    plan: QueryVestingPlan.fromPartial({}),
    status: QueryVestingStatus.fromPartial({})
  };
}
export const QueryTeamVestingStatusResponse = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusResponse",
  encode(message: QueryTeamVestingStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestDate !== "") {
      writer.uint32(10).string(message.requestDate);
    }
    if (message.plan !== undefined) {
      QueryVestingPlan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      QueryVestingStatus.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingStatusResponse {
    return {
      requestDate: isSet(object.requestDate) ? String(object.requestDate) : "",
      plan: isSet(object.plan) ? QueryVestingPlan.fromJSON(object.plan) : undefined,
      status: isSet(object.status) ? QueryVestingStatus.fromJSON(object.status) : undefined
    };
  },
  fromPartial(object: Partial<QueryTeamVestingStatusResponse>): QueryTeamVestingStatusResponse {
    const message = createBaseQueryTeamVestingStatusResponse();
    message.requestDate = object.requestDate ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? QueryVestingPlan.fromPartial(object.plan) : undefined;
    message.status = object.status !== undefined && object.status !== null ? QueryVestingStatus.fromPartial(object.status) : undefined;
    return message;
  },
  fromAmino(object: QueryTeamVestingStatusResponseAmino): QueryTeamVestingStatusResponse {
    return {
      requestDate: object.request_date,
      plan: object?.plan ? QueryVestingPlan.fromAmino(object.plan) : undefined,
      status: object?.status ? QueryVestingStatus.fromAmino(object.status) : undefined
    };
  },
  toAmino(message: QueryTeamVestingStatusResponse): QueryTeamVestingStatusResponseAmino {
    const obj: any = {};
    obj.request_date = message.requestDate;
    obj.plan = message.plan ? QueryVestingPlan.toAmino(message.plan) : undefined;
    obj.status = message.status ? QueryVestingStatus.toAmino(message.status) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTeamVestingStatusResponseAminoMsg): QueryTeamVestingStatusResponse {
    return QueryTeamVestingStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamVestingStatusResponseProtoMsg): QueryTeamVestingStatusResponse {
    return QueryTeamVestingStatusResponse.decode(message.value);
  },
  toProto(message: QueryTeamVestingStatusResponse): Uint8Array {
    return QueryTeamVestingStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamVestingStatusResponse): QueryTeamVestingStatusResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusResponse",
      value: QueryTeamVestingStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTeamVestingStatusByTimeRequest(): QueryTeamVestingStatusByTimeRequest {
  return {
    id: BigInt(0),
    time: BigInt(0)
  };
}
export const QueryTeamVestingStatusByTimeRequest = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeRequest",
  encode(message: QueryTeamVestingStatusByTimeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.time !== BigInt(0)) {
      writer.uint32(16).uint64(message.time);
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingStatusByTimeRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      time: isSet(object.time) ? BigInt(object.time.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryTeamVestingStatusByTimeRequest>): QueryTeamVestingStatusByTimeRequest {
    const message = createBaseQueryTeamVestingStatusByTimeRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.time = object.time !== undefined && object.time !== null ? BigInt(object.time.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTeamVestingStatusByTimeRequestAmino): QueryTeamVestingStatusByTimeRequest {
    return {
      id: BigInt(object.id),
      time: BigInt(object.time)
    };
  },
  toAmino(message: QueryTeamVestingStatusByTimeRequest): QueryTeamVestingStatusByTimeRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.time = message.time ? message.time.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTeamVestingStatusByTimeRequestAminoMsg): QueryTeamVestingStatusByTimeRequest {
    return QueryTeamVestingStatusByTimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamVestingStatusByTimeRequestProtoMsg): QueryTeamVestingStatusByTimeRequest {
    return QueryTeamVestingStatusByTimeRequest.decode(message.value);
  },
  toProto(message: QueryTeamVestingStatusByTimeRequest): Uint8Array {
    return QueryTeamVestingStatusByTimeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamVestingStatusByTimeRequest): QueryTeamVestingStatusByTimeRequestProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeRequest",
      value: QueryTeamVestingStatusByTimeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTeamVestingStatusByTimeResponse(): QueryTeamVestingStatusByTimeResponse {
  return {
    requestDate: "",
    plan: QueryVestingPlan.fromPartial({}),
    status: QueryVestingStatus.fromPartial({})
  };
}
export const QueryTeamVestingStatusByTimeResponse = {
  typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeResponse",
  encode(message: QueryTeamVestingStatusByTimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestDate !== "") {
      writer.uint32(10).string(message.requestDate);
    }
    if (message.plan !== undefined) {
      QueryVestingPlan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      QueryVestingStatus.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingStatusByTimeResponse {
    return {
      requestDate: isSet(object.requestDate) ? String(object.requestDate) : "",
      plan: isSet(object.plan) ? QueryVestingPlan.fromJSON(object.plan) : undefined,
      status: isSet(object.status) ? QueryVestingStatus.fromJSON(object.status) : undefined
    };
  },
  fromPartial(object: Partial<QueryTeamVestingStatusByTimeResponse>): QueryTeamVestingStatusByTimeResponse {
    const message = createBaseQueryTeamVestingStatusByTimeResponse();
    message.requestDate = object.requestDate ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? QueryVestingPlan.fromPartial(object.plan) : undefined;
    message.status = object.status !== undefined && object.status !== null ? QueryVestingStatus.fromPartial(object.status) : undefined;
    return message;
  },
  fromAmino(object: QueryTeamVestingStatusByTimeResponseAmino): QueryTeamVestingStatusByTimeResponse {
    return {
      requestDate: object.request_date,
      plan: object?.plan ? QueryVestingPlan.fromAmino(object.plan) : undefined,
      status: object?.status ? QueryVestingStatus.fromAmino(object.status) : undefined
    };
  },
  toAmino(message: QueryTeamVestingStatusByTimeResponse): QueryTeamVestingStatusByTimeResponseAmino {
    const obj: any = {};
    obj.request_date = message.requestDate;
    obj.plan = message.plan ? QueryVestingPlan.toAmino(message.plan) : undefined;
    obj.status = message.status ? QueryVestingStatus.toAmino(message.status) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTeamVestingStatusByTimeResponseAminoMsg): QueryTeamVestingStatusByTimeResponse {
    return QueryTeamVestingStatusByTimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTeamVestingStatusByTimeResponseProtoMsg): QueryTeamVestingStatusByTimeResponse {
    return QueryTeamVestingStatusByTimeResponse.decode(message.value);
  },
  toProto(message: QueryTeamVestingStatusByTimeResponse): Uint8Array {
    return QueryTeamVestingStatusByTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTeamVestingStatusByTimeResponse): QueryTeamVestingStatusByTimeResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeResponse",
      value: QueryTeamVestingStatusByTimeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVestingStatus(): QueryVestingStatus {
  return {
    totalVestedAmount: BigInt(0),
    totalUnlockedAmount: BigInt(0),
    currentClaimableAmount: BigInt(0),
    lockedVestedAmount: BigInt(0),
    remainingUnvestedAmount: BigInt(0),
    claimedAmount: BigInt(0),
    totalRewards: BigInt(0),
    claimedRewards: BigInt(0),
    availableRewards: BigInt(0)
  };
}
export const QueryVestingStatus = {
  typeUrl: "/kyve.team.v1beta1.QueryVestingStatus",
  encode(message: QueryVestingStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalVestedAmount !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalVestedAmount);
    }
    if (message.totalUnlockedAmount !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalUnlockedAmount);
    }
    if (message.currentClaimableAmount !== BigInt(0)) {
      writer.uint32(24).uint64(message.currentClaimableAmount);
    }
    if (message.lockedVestedAmount !== BigInt(0)) {
      writer.uint32(32).uint64(message.lockedVestedAmount);
    }
    if (message.remainingUnvestedAmount !== BigInt(0)) {
      writer.uint32(40).uint64(message.remainingUnvestedAmount);
    }
    if (message.claimedAmount !== BigInt(0)) {
      writer.uint32(48).uint64(message.claimedAmount);
    }
    if (message.totalRewards !== BigInt(0)) {
      writer.uint32(56).uint64(message.totalRewards);
    }
    if (message.claimedRewards !== BigInt(0)) {
      writer.uint32(64).uint64(message.claimedRewards);
    }
    if (message.availableRewards !== BigInt(0)) {
      writer.uint32(72).uint64(message.availableRewards);
    }
    return writer;
  },
  fromJSON(object: any): QueryVestingStatus {
    return {
      totalVestedAmount: isSet(object.totalVestedAmount) ? BigInt(object.totalVestedAmount.toString()) : BigInt(0),
      totalUnlockedAmount: isSet(object.totalUnlockedAmount) ? BigInt(object.totalUnlockedAmount.toString()) : BigInt(0),
      currentClaimableAmount: isSet(object.currentClaimableAmount) ? BigInt(object.currentClaimableAmount.toString()) : BigInt(0),
      lockedVestedAmount: isSet(object.lockedVestedAmount) ? BigInt(object.lockedVestedAmount.toString()) : BigInt(0),
      remainingUnvestedAmount: isSet(object.remainingUnvestedAmount) ? BigInt(object.remainingUnvestedAmount.toString()) : BigInt(0),
      claimedAmount: isSet(object.claimedAmount) ? BigInt(object.claimedAmount.toString()) : BigInt(0),
      totalRewards: isSet(object.totalRewards) ? BigInt(object.totalRewards.toString()) : BigInt(0),
      claimedRewards: isSet(object.claimedRewards) ? BigInt(object.claimedRewards.toString()) : BigInt(0),
      availableRewards: isSet(object.availableRewards) ? BigInt(object.availableRewards.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryVestingStatus>): QueryVestingStatus {
    const message = createBaseQueryVestingStatus();
    message.totalVestedAmount = object.totalVestedAmount !== undefined && object.totalVestedAmount !== null ? BigInt(object.totalVestedAmount.toString()) : BigInt(0);
    message.totalUnlockedAmount = object.totalUnlockedAmount !== undefined && object.totalUnlockedAmount !== null ? BigInt(object.totalUnlockedAmount.toString()) : BigInt(0);
    message.currentClaimableAmount = object.currentClaimableAmount !== undefined && object.currentClaimableAmount !== null ? BigInt(object.currentClaimableAmount.toString()) : BigInt(0);
    message.lockedVestedAmount = object.lockedVestedAmount !== undefined && object.lockedVestedAmount !== null ? BigInt(object.lockedVestedAmount.toString()) : BigInt(0);
    message.remainingUnvestedAmount = object.remainingUnvestedAmount !== undefined && object.remainingUnvestedAmount !== null ? BigInt(object.remainingUnvestedAmount.toString()) : BigInt(0);
    message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? BigInt(object.claimedAmount.toString()) : BigInt(0);
    message.totalRewards = object.totalRewards !== undefined && object.totalRewards !== null ? BigInt(object.totalRewards.toString()) : BigInt(0);
    message.claimedRewards = object.claimedRewards !== undefined && object.claimedRewards !== null ? BigInt(object.claimedRewards.toString()) : BigInt(0);
    message.availableRewards = object.availableRewards !== undefined && object.availableRewards !== null ? BigInt(object.availableRewards.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryVestingStatusAmino): QueryVestingStatus {
    return {
      totalVestedAmount: BigInt(object.total_vested_amount),
      totalUnlockedAmount: BigInt(object.total_unlocked_amount),
      currentClaimableAmount: BigInt(object.current_claimable_amount),
      lockedVestedAmount: BigInt(object.locked_vested_amount),
      remainingUnvestedAmount: BigInt(object.remaining_unvested_amount),
      claimedAmount: BigInt(object.claimed_amount),
      totalRewards: BigInt(object.total_rewards),
      claimedRewards: BigInt(object.claimed_rewards),
      availableRewards: BigInt(object.available_rewards)
    };
  },
  toAmino(message: QueryVestingStatus): QueryVestingStatusAmino {
    const obj: any = {};
    obj.total_vested_amount = message.totalVestedAmount ? message.totalVestedAmount.toString() : undefined;
    obj.total_unlocked_amount = message.totalUnlockedAmount ? message.totalUnlockedAmount.toString() : undefined;
    obj.current_claimable_amount = message.currentClaimableAmount ? message.currentClaimableAmount.toString() : undefined;
    obj.locked_vested_amount = message.lockedVestedAmount ? message.lockedVestedAmount.toString() : undefined;
    obj.remaining_unvested_amount = message.remainingUnvestedAmount ? message.remainingUnvestedAmount.toString() : undefined;
    obj.claimed_amount = message.claimedAmount ? message.claimedAmount.toString() : undefined;
    obj.total_rewards = message.totalRewards ? message.totalRewards.toString() : undefined;
    obj.claimed_rewards = message.claimedRewards ? message.claimedRewards.toString() : undefined;
    obj.available_rewards = message.availableRewards ? message.availableRewards.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVestingStatusAminoMsg): QueryVestingStatus {
    return QueryVestingStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestingStatusProtoMsg): QueryVestingStatus {
    return QueryVestingStatus.decode(message.value);
  },
  toProto(message: QueryVestingStatus): Uint8Array {
    return QueryVestingStatus.encode(message).finish();
  },
  toProtoMsg(message: QueryVestingStatus): QueryVestingStatusProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryVestingStatus",
      value: QueryVestingStatus.encode(message).finish()
    };
  }
};
function createBaseQueryVestingPlan(): QueryVestingPlan {
  return {
    commencement: "",
    tokenVestingStart: "",
    tokenVestingFinished: "",
    tokenUnlockStart: "",
    tokenUnlockFinished: "",
    clawback: BigInt(0),
    clawbackAmount: BigInt(0),
    maximumVestingAmount: BigInt(0)
  };
}
export const QueryVestingPlan = {
  typeUrl: "/kyve.team.v1beta1.QueryVestingPlan",
  encode(message: QueryVestingPlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commencement !== "") {
      writer.uint32(10).string(message.commencement);
    }
    if (message.tokenVestingStart !== "") {
      writer.uint32(18).string(message.tokenVestingStart);
    }
    if (message.tokenVestingFinished !== "") {
      writer.uint32(26).string(message.tokenVestingFinished);
    }
    if (message.tokenUnlockStart !== "") {
      writer.uint32(34).string(message.tokenUnlockStart);
    }
    if (message.tokenUnlockFinished !== "") {
      writer.uint32(42).string(message.tokenUnlockFinished);
    }
    if (message.clawback !== BigInt(0)) {
      writer.uint32(48).uint64(message.clawback);
    }
    if (message.clawbackAmount !== BigInt(0)) {
      writer.uint32(56).uint64(message.clawbackAmount);
    }
    if (message.maximumVestingAmount !== BigInt(0)) {
      writer.uint32(64).uint64(message.maximumVestingAmount);
    }
    return writer;
  },
  fromJSON(object: any): QueryVestingPlan {
    return {
      commencement: isSet(object.commencement) ? String(object.commencement) : "",
      tokenVestingStart: isSet(object.tokenVestingStart) ? String(object.tokenVestingStart) : "",
      tokenVestingFinished: isSet(object.tokenVestingFinished) ? String(object.tokenVestingFinished) : "",
      tokenUnlockStart: isSet(object.tokenUnlockStart) ? String(object.tokenUnlockStart) : "",
      tokenUnlockFinished: isSet(object.tokenUnlockFinished) ? String(object.tokenUnlockFinished) : "",
      clawback: isSet(object.clawback) ? BigInt(object.clawback.toString()) : BigInt(0),
      clawbackAmount: isSet(object.clawbackAmount) ? BigInt(object.clawbackAmount.toString()) : BigInt(0),
      maximumVestingAmount: isSet(object.maximumVestingAmount) ? BigInt(object.maximumVestingAmount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryVestingPlan>): QueryVestingPlan {
    const message = createBaseQueryVestingPlan();
    message.commencement = object.commencement ?? "";
    message.tokenVestingStart = object.tokenVestingStart ?? "";
    message.tokenVestingFinished = object.tokenVestingFinished ?? "";
    message.tokenUnlockStart = object.tokenUnlockStart ?? "";
    message.tokenUnlockFinished = object.tokenUnlockFinished ?? "";
    message.clawback = object.clawback !== undefined && object.clawback !== null ? BigInt(object.clawback.toString()) : BigInt(0);
    message.clawbackAmount = object.clawbackAmount !== undefined && object.clawbackAmount !== null ? BigInt(object.clawbackAmount.toString()) : BigInt(0);
    message.maximumVestingAmount = object.maximumVestingAmount !== undefined && object.maximumVestingAmount !== null ? BigInt(object.maximumVestingAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryVestingPlanAmino): QueryVestingPlan {
    return {
      commencement: object.commencement,
      tokenVestingStart: object.token_vesting_start,
      tokenVestingFinished: object.token_vesting_finished,
      tokenUnlockStart: object.token_unlock_start,
      tokenUnlockFinished: object.token_unlock_finished,
      clawback: BigInt(object.clawback),
      clawbackAmount: BigInt(object.clawback_amount),
      maximumVestingAmount: BigInt(object.maximum_vesting_amount)
    };
  },
  toAmino(message: QueryVestingPlan): QueryVestingPlanAmino {
    const obj: any = {};
    obj.commencement = message.commencement;
    obj.token_vesting_start = message.tokenVestingStart;
    obj.token_vesting_finished = message.tokenVestingFinished;
    obj.token_unlock_start = message.tokenUnlockStart;
    obj.token_unlock_finished = message.tokenUnlockFinished;
    obj.clawback = message.clawback ? message.clawback.toString() : undefined;
    obj.clawback_amount = message.clawbackAmount ? message.clawbackAmount.toString() : undefined;
    obj.maximum_vesting_amount = message.maximumVestingAmount ? message.maximumVestingAmount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVestingPlanAminoMsg): QueryVestingPlan {
    return QueryVestingPlan.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestingPlanProtoMsg): QueryVestingPlan {
    return QueryVestingPlan.decode(message.value);
  },
  toProto(message: QueryVestingPlan): Uint8Array {
    return QueryVestingPlan.encode(message).finish();
  },
  toProtoMsg(message: QueryVestingPlan): QueryVestingPlanProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.QueryVestingPlan",
      value: QueryVestingPlan.encode(message).finish()
    };
  }
};