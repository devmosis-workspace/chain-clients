import { TeamVestingAccount, TeamVestingAccountSDKType } from "./team";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequest {
}
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequestSDKType {
}
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
export interface QueryTeamVestingAccountsRequest {
}
/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequestSDKType {
}
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
export declare const QueryTeamInfoRequest: {
    encode(_: QueryTeamInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTeamInfoRequest;
    fromPartial(_: Partial<QueryTeamInfoRequest>): QueryTeamInfoRequest;
};
export declare const QueryTeamInfoResponse: {
    encode(message: QueryTeamInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTeamInfoResponse;
    fromPartial(object: Partial<QueryTeamInfoResponse>): QueryTeamInfoResponse;
};
export declare const QueryTeamVestingAccountsRequest: {
    encode(_: QueryTeamVestingAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryTeamVestingAccountsRequest;
    fromPartial(_: Partial<QueryTeamVestingAccountsRequest>): QueryTeamVestingAccountsRequest;
};
export declare const QueryTeamVestingAccountsResponse: {
    encode(message: QueryTeamVestingAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTeamVestingAccountsResponse;
    fromPartial(object: Partial<QueryTeamVestingAccountsResponse>): QueryTeamVestingAccountsResponse;
};
export declare const QueryTeamVestingAccountRequest: {
    encode(message: QueryTeamVestingAccountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTeamVestingAccountRequest;
    fromPartial(object: Partial<QueryTeamVestingAccountRequest>): QueryTeamVestingAccountRequest;
};
export declare const QueryTeamVestingAccountResponse: {
    encode(message: QueryTeamVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTeamVestingAccountResponse;
    fromPartial(object: Partial<QueryTeamVestingAccountResponse>): QueryTeamVestingAccountResponse;
};
export declare const QueryTeamVestingStatusRequest: {
    encode(message: QueryTeamVestingStatusRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTeamVestingStatusRequest;
    fromPartial(object: Partial<QueryTeamVestingStatusRequest>): QueryTeamVestingStatusRequest;
};
export declare const QueryTeamVestingStatusResponse: {
    encode(message: QueryTeamVestingStatusResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTeamVestingStatusResponse;
    fromPartial(object: Partial<QueryTeamVestingStatusResponse>): QueryTeamVestingStatusResponse;
};
export declare const QueryTeamVestingStatusByTimeRequest: {
    encode(message: QueryTeamVestingStatusByTimeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTeamVestingStatusByTimeRequest;
    fromPartial(object: Partial<QueryTeamVestingStatusByTimeRequest>): QueryTeamVestingStatusByTimeRequest;
};
export declare const QueryTeamVestingStatusByTimeResponse: {
    encode(message: QueryTeamVestingStatusByTimeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTeamVestingStatusByTimeResponse;
    fromPartial(object: Partial<QueryTeamVestingStatusByTimeResponse>): QueryTeamVestingStatusByTimeResponse;
};
export declare const QueryVestingStatus: {
    encode(message: QueryVestingStatus, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVestingStatus;
    fromPartial(object: Partial<QueryVestingStatus>): QueryVestingStatus;
};
export declare const QueryVestingPlan: {
    encode(message: QueryVestingPlan, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryVestingPlan;
    fromPartial(object: Partial<QueryVestingPlan>): QueryVestingPlan;
};
