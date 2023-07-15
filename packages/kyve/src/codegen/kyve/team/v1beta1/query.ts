import { TeamVestingAccount, TeamVestingAccountSDKType } from "./team";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequest {}
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequestSDKType {}
/** QueryAccountsResponse is response type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoResponse {
  /** foundation is the authority foundation address */
  foundationAuthority: string;
  /** bcp is the authority bcp address */
  bcpAuthority: string;
  /** total_team_allocation is the total allocation in $KYVE the team module has in order to reward team members */
  totalTeamAllocation: Long;
  /** issued_team_allocation is the amount in $KYVE tied to team vesting accounts and which are not available anymore */
  issuedTeamAllocation: Long;
  /**
   * available_team_allocation is the amount in $KYVE with which further team vesting accounts can be created.
   * if the available amount is zero no new vesting accounts can be created
   */
  availableTeamAllocation: Long;
  /**
   * total_authority_rewards is the amount in $KYVE the authority has earned in total with inflation rewards.
   * Those rewards can be payed out for different purposes
   */
  totalAuthorityRewards: Long;
  /** claimed_authority_rewards is the amount in $KYVE of how much the authority already claimed */
  claimedAuthorityRewards: Long;
  /** available_authority_rewards is the amount in $KYVE of how much rewards the authority can claim right now */
  availableAuthorityRewards: Long;
  /** total_account_rewards is the amount in $KYVE all team vesting accounts have ever received */
  totalAccountRewards: Long;
  /** claimed_account_rewards is the amount in $KYVE all team vesting accounts have ever claimed */
  claimedAccountRewards: Long;
  /** available_account_rewards is the total amount of $KYVE all team vesting accounts can currently claim */
  availableAccountRewards: Long;
  /**
   * required_module_balance is the balance the team module should have. If this is less than the module balance
   * something went wrong
   */
  requiredModuleBalance: Long;
  /** team_module_balance is the team module balance in $KYVE */
  teamModuleBalance: Long;
}
/** QueryAccountsResponse is response type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoResponseSDKType {
  foundation_authority: string;
  bcp_authority: string;
  total_team_allocation: Long;
  issued_team_allocation: Long;
  available_team_allocation: Long;
  total_authority_rewards: Long;
  claimed_authority_rewards: Long;
  available_authority_rewards: Long;
  total_account_rewards: Long;
  claimed_account_rewards: Long;
  available_account_rewards: Long;
  required_module_balance: Long;
  team_module_balance: Long;
}
/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequest {}
/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequestSDKType {}
/** QueryAccountsResponse is response type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsResponse {
  /** accounts holds all the team vesting accounts of this module. */
  accounts: TeamVestingAccount[];
}
/** QueryAccountsResponse is response type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsResponseSDKType {
  accounts: TeamVestingAccountSDKType[];
}
/** QueryTeamVestingAccountRequest is request type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: Long;
}
/** QueryTeamVestingAccountRequest is request type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountRequestSDKType {
  id: Long;
}
/** QueryTeamVestingAccountResponse is the response type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountResponse {
  /** account holds the requested team vesting account */
  account?: TeamVestingAccount;
}
/** QueryTeamVestingAccountResponse is the response type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountResponseSDKType {
  account?: TeamVestingAccountSDKType;
}
/** QueryTeamCurrentVestingStatusRequest is request type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: Long;
}
/** QueryTeamCurrentVestingStatusRequest is request type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusRequestSDKType {
  id: Long;
}
/** QueryTeamCurrentVestingStatusResponse is the response type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusResponse {
  /** request_date .. */
  requestDate: string;
  /** plan ... */
  plan?: QueryVestingPlan;
  /** status .. */
  status?: QueryVestingStatus;
}
/** QueryTeamCurrentVestingStatusResponse is the response type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusResponseSDKType {
  request_date: string;
  plan?: QueryVestingPlanSDKType;
  status?: QueryVestingStatusSDKType;
}
/** QueryTeamVestingStatusByTimeRequest is request type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: Long;
  /** time is a unix timestamp of the time the vesting progress should be calculated */
  time: Long;
}
/** QueryTeamVestingStatusByTimeRequest is request type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeRequestSDKType {
  id: Long;
  time: Long;
}
/** QueryTeamVestingStatusByTimeResponse is the response type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeResponse {
  /** request_date .. */
  requestDate: string;
  /** plan ... */
  plan?: QueryVestingPlan;
  /** status .. */
  status?: QueryVestingStatus;
}
/** QueryTeamVestingStatusByTimeResponse is the response type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeResponseSDKType {
  request_date: string;
  plan?: QueryVestingPlanSDKType;
  status?: QueryVestingStatusSDKType;
}
/** QueryVestingStatus is a type holding information about the account's vesting progress */
export interface QueryVestingStatus {
  /** total_vested_amount ... */
  totalVestedAmount: Long;
  /** total_unlocked_amount ... */
  totalUnlockedAmount: Long;
  /** current_claimable_amount ... */
  currentClaimableAmount: Long;
  /** locked_vested_amount ... */
  lockedVestedAmount: Long;
  /** remaining_unvested_amount ... */
  remainingUnvestedAmount: Long;
  /** claimed_amount ... */
  claimedAmount: Long;
  /** total_rewards ... */
  totalRewards: Long;
  /** claimed_rewards ... */
  claimedRewards: Long;
  /** available_rewards ... */
  availableRewards: Long;
}
/** QueryVestingStatus is a type holding information about the account's vesting progress */
export interface QueryVestingStatusSDKType {
  total_vested_amount: Long;
  total_unlocked_amount: Long;
  current_claimable_amount: Long;
  locked_vested_amount: Long;
  remaining_unvested_amount: Long;
  claimed_amount: Long;
  total_rewards: Long;
  claimed_rewards: Long;
  available_rewards: Long;
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
  clawback: Long;
  /** clawback_amount ... */
  clawbackAmount: Long;
  /** maximum_vesting_amount ... */
  maximumVestingAmount: Long;
}
/** QueryVestingPlan is a type holding information about the account's vesting data which does not change */
export interface QueryVestingPlanSDKType {
  commencement: string;
  token_vesting_start: string;
  token_vesting_finished: string;
  token_unlock_start: string;
  token_unlock_finished: string;
  clawback: Long;
  clawback_amount: Long;
  maximum_vesting_amount: Long;
}
function createBaseQueryTeamInfoRequest(): QueryTeamInfoRequest {
  return {};
}
export const QueryTeamInfoRequest = {
  encode(_: QueryTeamInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryTeamInfoRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTeamInfoRequest>): QueryTeamInfoRequest {
    const message = createBaseQueryTeamInfoRequest();
    return message;
  }
};
function createBaseQueryTeamInfoResponse(): QueryTeamInfoResponse {
  return {
    foundationAuthority: "",
    bcpAuthority: "",
    totalTeamAllocation: Long.UZERO,
    issuedTeamAllocation: Long.UZERO,
    availableTeamAllocation: Long.UZERO,
    totalAuthorityRewards: Long.UZERO,
    claimedAuthorityRewards: Long.UZERO,
    availableAuthorityRewards: Long.UZERO,
    totalAccountRewards: Long.UZERO,
    claimedAccountRewards: Long.UZERO,
    availableAccountRewards: Long.UZERO,
    requiredModuleBalance: Long.UZERO,
    teamModuleBalance: Long.UZERO
  };
}
export const QueryTeamInfoResponse = {
  encode(message: QueryTeamInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.foundationAuthority !== "") {
      writer.uint32(10).string(message.foundationAuthority);
    }
    if (message.bcpAuthority !== "") {
      writer.uint32(18).string(message.bcpAuthority);
    }
    if (!message.totalTeamAllocation.isZero()) {
      writer.uint32(24).uint64(message.totalTeamAllocation);
    }
    if (!message.issuedTeamAllocation.isZero()) {
      writer.uint32(32).uint64(message.issuedTeamAllocation);
    }
    if (!message.availableTeamAllocation.isZero()) {
      writer.uint32(40).uint64(message.availableTeamAllocation);
    }
    if (!message.totalAuthorityRewards.isZero()) {
      writer.uint32(48).uint64(message.totalAuthorityRewards);
    }
    if (!message.claimedAuthorityRewards.isZero()) {
      writer.uint32(56).uint64(message.claimedAuthorityRewards);
    }
    if (!message.availableAuthorityRewards.isZero()) {
      writer.uint32(64).uint64(message.availableAuthorityRewards);
    }
    if (!message.totalAccountRewards.isZero()) {
      writer.uint32(72).uint64(message.totalAccountRewards);
    }
    if (!message.claimedAccountRewards.isZero()) {
      writer.uint32(80).uint64(message.claimedAccountRewards);
    }
    if (!message.availableAccountRewards.isZero()) {
      writer.uint32(88).uint64(message.availableAccountRewards);
    }
    if (!message.requiredModuleBalance.isZero()) {
      writer.uint32(96).uint64(message.requiredModuleBalance);
    }
    if (!message.teamModuleBalance.isZero()) {
      writer.uint32(104).uint64(message.teamModuleBalance);
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamInfoResponse {
    return {
      foundationAuthority: isSet(object.foundationAuthority) ? String(object.foundationAuthority) : "",
      bcpAuthority: isSet(object.bcpAuthority) ? String(object.bcpAuthority) : "",
      totalTeamAllocation: isSet(object.totalTeamAllocation) ? Long.fromValue(object.totalTeamAllocation) : Long.UZERO,
      issuedTeamAllocation: isSet(object.issuedTeamAllocation) ? Long.fromValue(object.issuedTeamAllocation) : Long.UZERO,
      availableTeamAllocation: isSet(object.availableTeamAllocation) ? Long.fromValue(object.availableTeamAllocation) : Long.UZERO,
      totalAuthorityRewards: isSet(object.totalAuthorityRewards) ? Long.fromValue(object.totalAuthorityRewards) : Long.UZERO,
      claimedAuthorityRewards: isSet(object.claimedAuthorityRewards) ? Long.fromValue(object.claimedAuthorityRewards) : Long.UZERO,
      availableAuthorityRewards: isSet(object.availableAuthorityRewards) ? Long.fromValue(object.availableAuthorityRewards) : Long.UZERO,
      totalAccountRewards: isSet(object.totalAccountRewards) ? Long.fromValue(object.totalAccountRewards) : Long.UZERO,
      claimedAccountRewards: isSet(object.claimedAccountRewards) ? Long.fromValue(object.claimedAccountRewards) : Long.UZERO,
      availableAccountRewards: isSet(object.availableAccountRewards) ? Long.fromValue(object.availableAccountRewards) : Long.UZERO,
      requiredModuleBalance: isSet(object.requiredModuleBalance) ? Long.fromValue(object.requiredModuleBalance) : Long.UZERO,
      teamModuleBalance: isSet(object.teamModuleBalance) ? Long.fromValue(object.teamModuleBalance) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryTeamInfoResponse>): QueryTeamInfoResponse {
    const message = createBaseQueryTeamInfoResponse();
    message.foundationAuthority = object.foundationAuthority ?? "";
    message.bcpAuthority = object.bcpAuthority ?? "";
    message.totalTeamAllocation = object.totalTeamAllocation !== undefined && object.totalTeamAllocation !== null ? Long.fromValue(object.totalTeamAllocation) : Long.UZERO;
    message.issuedTeamAllocation = object.issuedTeamAllocation !== undefined && object.issuedTeamAllocation !== null ? Long.fromValue(object.issuedTeamAllocation) : Long.UZERO;
    message.availableTeamAllocation = object.availableTeamAllocation !== undefined && object.availableTeamAllocation !== null ? Long.fromValue(object.availableTeamAllocation) : Long.UZERO;
    message.totalAuthorityRewards = object.totalAuthorityRewards !== undefined && object.totalAuthorityRewards !== null ? Long.fromValue(object.totalAuthorityRewards) : Long.UZERO;
    message.claimedAuthorityRewards = object.claimedAuthorityRewards !== undefined && object.claimedAuthorityRewards !== null ? Long.fromValue(object.claimedAuthorityRewards) : Long.UZERO;
    message.availableAuthorityRewards = object.availableAuthorityRewards !== undefined && object.availableAuthorityRewards !== null ? Long.fromValue(object.availableAuthorityRewards) : Long.UZERO;
    message.totalAccountRewards = object.totalAccountRewards !== undefined && object.totalAccountRewards !== null ? Long.fromValue(object.totalAccountRewards) : Long.UZERO;
    message.claimedAccountRewards = object.claimedAccountRewards !== undefined && object.claimedAccountRewards !== null ? Long.fromValue(object.claimedAccountRewards) : Long.UZERO;
    message.availableAccountRewards = object.availableAccountRewards !== undefined && object.availableAccountRewards !== null ? Long.fromValue(object.availableAccountRewards) : Long.UZERO;
    message.requiredModuleBalance = object.requiredModuleBalance !== undefined && object.requiredModuleBalance !== null ? Long.fromValue(object.requiredModuleBalance) : Long.UZERO;
    message.teamModuleBalance = object.teamModuleBalance !== undefined && object.teamModuleBalance !== null ? Long.fromValue(object.teamModuleBalance) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTeamVestingAccountsRequest(): QueryTeamVestingAccountsRequest {
  return {};
}
export const QueryTeamVestingAccountsRequest = {
  encode(_: QueryTeamVestingAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryTeamVestingAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTeamVestingAccountsRequest>): QueryTeamVestingAccountsRequest {
    const message = createBaseQueryTeamVestingAccountsRequest();
    return message;
  }
};
function createBaseQueryTeamVestingAccountsResponse(): QueryTeamVestingAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryTeamVestingAccountsResponse = {
  encode(message: QueryTeamVestingAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryTeamVestingAccountRequest(): QueryTeamVestingAccountRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryTeamVestingAccountRequest = {
  encode(message: QueryTeamVestingAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingAccountRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryTeamVestingAccountRequest>): QueryTeamVestingAccountRequest {
    const message = createBaseQueryTeamVestingAccountRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTeamVestingAccountResponse(): QueryTeamVestingAccountResponse {
  return {
    account: undefined
  };
}
export const QueryTeamVestingAccountResponse = {
  encode(message: QueryTeamVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryTeamVestingStatusRequest(): QueryTeamVestingStatusRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryTeamVestingStatusRequest = {
  encode(message: QueryTeamVestingStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingStatusRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryTeamVestingStatusRequest>): QueryTeamVestingStatusRequest {
    const message = createBaseQueryTeamVestingStatusRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTeamVestingStatusResponse(): QueryTeamVestingStatusResponse {
  return {
    requestDate: "",
    plan: undefined,
    status: undefined
  };
}
export const QueryTeamVestingStatusResponse = {
  encode(message: QueryTeamVestingStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryTeamVestingStatusByTimeRequest(): QueryTeamVestingStatusByTimeRequest {
  return {
    id: Long.UZERO,
    time: Long.UZERO
  };
}
export const QueryTeamVestingStatusByTimeRequest = {
  encode(message: QueryTeamVestingStatusByTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.time.isZero()) {
      writer.uint32(16).uint64(message.time);
    }
    return writer;
  },
  fromJSON(object: any): QueryTeamVestingStatusByTimeRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      time: isSet(object.time) ? Long.fromValue(object.time) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryTeamVestingStatusByTimeRequest>): QueryTeamVestingStatusByTimeRequest {
    const message = createBaseQueryTeamVestingStatusByTimeRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTeamVestingStatusByTimeResponse(): QueryTeamVestingStatusByTimeResponse {
  return {
    requestDate: "",
    plan: undefined,
    status: undefined
  };
}
export const QueryTeamVestingStatusByTimeResponse = {
  encode(message: QueryTeamVestingStatusByTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryVestingStatus(): QueryVestingStatus {
  return {
    totalVestedAmount: Long.UZERO,
    totalUnlockedAmount: Long.UZERO,
    currentClaimableAmount: Long.UZERO,
    lockedVestedAmount: Long.UZERO,
    remainingUnvestedAmount: Long.UZERO,
    claimedAmount: Long.UZERO,
    totalRewards: Long.UZERO,
    claimedRewards: Long.UZERO,
    availableRewards: Long.UZERO
  };
}
export const QueryVestingStatus = {
  encode(message: QueryVestingStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.totalVestedAmount.isZero()) {
      writer.uint32(8).uint64(message.totalVestedAmount);
    }
    if (!message.totalUnlockedAmount.isZero()) {
      writer.uint32(16).uint64(message.totalUnlockedAmount);
    }
    if (!message.currentClaimableAmount.isZero()) {
      writer.uint32(24).uint64(message.currentClaimableAmount);
    }
    if (!message.lockedVestedAmount.isZero()) {
      writer.uint32(32).uint64(message.lockedVestedAmount);
    }
    if (!message.remainingUnvestedAmount.isZero()) {
      writer.uint32(40).uint64(message.remainingUnvestedAmount);
    }
    if (!message.claimedAmount.isZero()) {
      writer.uint32(48).uint64(message.claimedAmount);
    }
    if (!message.totalRewards.isZero()) {
      writer.uint32(56).uint64(message.totalRewards);
    }
    if (!message.claimedRewards.isZero()) {
      writer.uint32(64).uint64(message.claimedRewards);
    }
    if (!message.availableRewards.isZero()) {
      writer.uint32(72).uint64(message.availableRewards);
    }
    return writer;
  },
  fromJSON(object: any): QueryVestingStatus {
    return {
      totalVestedAmount: isSet(object.totalVestedAmount) ? Long.fromValue(object.totalVestedAmount) : Long.UZERO,
      totalUnlockedAmount: isSet(object.totalUnlockedAmount) ? Long.fromValue(object.totalUnlockedAmount) : Long.UZERO,
      currentClaimableAmount: isSet(object.currentClaimableAmount) ? Long.fromValue(object.currentClaimableAmount) : Long.UZERO,
      lockedVestedAmount: isSet(object.lockedVestedAmount) ? Long.fromValue(object.lockedVestedAmount) : Long.UZERO,
      remainingUnvestedAmount: isSet(object.remainingUnvestedAmount) ? Long.fromValue(object.remainingUnvestedAmount) : Long.UZERO,
      claimedAmount: isSet(object.claimedAmount) ? Long.fromValue(object.claimedAmount) : Long.UZERO,
      totalRewards: isSet(object.totalRewards) ? Long.fromValue(object.totalRewards) : Long.UZERO,
      claimedRewards: isSet(object.claimedRewards) ? Long.fromValue(object.claimedRewards) : Long.UZERO,
      availableRewards: isSet(object.availableRewards) ? Long.fromValue(object.availableRewards) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryVestingStatus>): QueryVestingStatus {
    const message = createBaseQueryVestingStatus();
    message.totalVestedAmount = object.totalVestedAmount !== undefined && object.totalVestedAmount !== null ? Long.fromValue(object.totalVestedAmount) : Long.UZERO;
    message.totalUnlockedAmount = object.totalUnlockedAmount !== undefined && object.totalUnlockedAmount !== null ? Long.fromValue(object.totalUnlockedAmount) : Long.UZERO;
    message.currentClaimableAmount = object.currentClaimableAmount !== undefined && object.currentClaimableAmount !== null ? Long.fromValue(object.currentClaimableAmount) : Long.UZERO;
    message.lockedVestedAmount = object.lockedVestedAmount !== undefined && object.lockedVestedAmount !== null ? Long.fromValue(object.lockedVestedAmount) : Long.UZERO;
    message.remainingUnvestedAmount = object.remainingUnvestedAmount !== undefined && object.remainingUnvestedAmount !== null ? Long.fromValue(object.remainingUnvestedAmount) : Long.UZERO;
    message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? Long.fromValue(object.claimedAmount) : Long.UZERO;
    message.totalRewards = object.totalRewards !== undefined && object.totalRewards !== null ? Long.fromValue(object.totalRewards) : Long.UZERO;
    message.claimedRewards = object.claimedRewards !== undefined && object.claimedRewards !== null ? Long.fromValue(object.claimedRewards) : Long.UZERO;
    message.availableRewards = object.availableRewards !== undefined && object.availableRewards !== null ? Long.fromValue(object.availableRewards) : Long.UZERO;
    return message;
  }
};
function createBaseQueryVestingPlan(): QueryVestingPlan {
  return {
    commencement: "",
    tokenVestingStart: "",
    tokenVestingFinished: "",
    tokenUnlockStart: "",
    tokenUnlockFinished: "",
    clawback: Long.UZERO,
    clawbackAmount: Long.UZERO,
    maximumVestingAmount: Long.UZERO
  };
}
export const QueryVestingPlan = {
  encode(message: QueryVestingPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.clawback.isZero()) {
      writer.uint32(48).uint64(message.clawback);
    }
    if (!message.clawbackAmount.isZero()) {
      writer.uint32(56).uint64(message.clawbackAmount);
    }
    if (!message.maximumVestingAmount.isZero()) {
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
      clawback: isSet(object.clawback) ? Long.fromValue(object.clawback) : Long.UZERO,
      clawbackAmount: isSet(object.clawbackAmount) ? Long.fromValue(object.clawbackAmount) : Long.UZERO,
      maximumVestingAmount: isSet(object.maximumVestingAmount) ? Long.fromValue(object.maximumVestingAmount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryVestingPlan>): QueryVestingPlan {
    const message = createBaseQueryVestingPlan();
    message.commencement = object.commencement ?? "";
    message.tokenVestingStart = object.tokenVestingStart ?? "";
    message.tokenVestingFinished = object.tokenVestingFinished ?? "";
    message.tokenUnlockStart = object.tokenUnlockStart ?? "";
    message.tokenUnlockFinished = object.tokenUnlockFinished ?? "";
    message.clawback = object.clawback !== undefined && object.clawback !== null ? Long.fromValue(object.clawback) : Long.UZERO;
    message.clawbackAmount = object.clawbackAmount !== undefined && object.clawbackAmount !== null ? Long.fromValue(object.clawbackAmount) : Long.UZERO;
    message.maximumVestingAmount = object.maximumVestingAmount !== undefined && object.maximumVestingAmount !== null ? Long.fromValue(object.maximumVestingAmount) : Long.UZERO;
    return message;
  }
};