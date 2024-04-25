import { TeamVestingAccount, TeamVestingAccountAmino, TeamVestingAccountSDKType } from "./team";
import { BinaryWriter } from "../../../binary";
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequest {
}
export interface QueryTeamInfoRequestProtoMsg {
    typeUrl: "/kyve.team.v1beta1.QueryTeamInfoRequest";
    value: Uint8Array;
}
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequestAmino {
}
export interface QueryTeamInfoRequestAminoMsg {
    type: "/kyve.team.v1beta1.QueryTeamInfoRequest";
    value: QueryTeamInfoRequestAmino;
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
    foundation_authority?: string;
    /** bcp is the authority bcp address */
    bcp_authority?: string;
    /** total_team_allocation is the total allocation in $KYVE the team module has in order to reward team members */
    total_team_allocation?: string;
    /** issued_team_allocation is the amount in $KYVE tied to team vesting accounts and which are not available anymore */
    issued_team_allocation?: string;
    /**
     * available_team_allocation is the amount in $KYVE with which further team vesting accounts can be created.
     * if the available amount is zero no new vesting accounts can be created
     */
    available_team_allocation?: string;
    /**
     * total_authority_rewards is the amount in $KYVE the authority has earned in total with inflation rewards.
     * Those rewards can be payed out for different purposes
     */
    total_authority_rewards?: string;
    /** claimed_authority_rewards is the amount in $KYVE of how much the authority already claimed */
    claimed_authority_rewards?: string;
    /** available_authority_rewards is the amount in $KYVE of how much rewards the authority can claim right now */
    available_authority_rewards?: string;
    /** total_account_rewards is the amount in $KYVE all team vesting accounts have ever received */
    total_account_rewards?: string;
    /** claimed_account_rewards is the amount in $KYVE all team vesting accounts have ever claimed */
    claimed_account_rewards?: string;
    /** available_account_rewards is the total amount of $KYVE all team vesting accounts can currently claim */
    available_account_rewards?: string;
    /**
     * required_module_balance is the balance the team module should have. If this is less than the module balance
     * something went wrong
     */
    required_module_balance?: string;
    /** team_module_balance is the team module balance in $KYVE */
    team_module_balance?: string;
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
export interface QueryTeamVestingAccountsRequest {
}
export interface QueryTeamVestingAccountsRequestProtoMsg {
    typeUrl: "/kyve.team.v1beta1.QueryTeamVestingAccountsRequest";
    value: Uint8Array;
}
/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequestAmino {
}
export interface QueryTeamVestingAccountsRequestAminoMsg {
    type: "/kyve.team.v1beta1.QueryTeamVestingAccountsRequest";
    value: QueryTeamVestingAccountsRequestAmino;
}
/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequestSDKType {
}
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
    accounts?: TeamVestingAccountAmino[];
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
    id?: string;
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
    id?: string;
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
    plan?: QueryVestingPlan;
    /** status .. */
    status?: QueryVestingStatus;
}
export interface QueryTeamVestingStatusResponseProtoMsg {
    typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusResponse";
    value: Uint8Array;
}
/** QueryTeamCurrentVestingStatusResponse is the response type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusResponseAmino {
    /** request_date .. */
    request_date?: string;
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
    plan?: QueryVestingPlanSDKType;
    status?: QueryVestingStatusSDKType;
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
    id?: string;
    /** time is a unix timestamp of the time the vesting progress should be calculated */
    time?: string;
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
    plan?: QueryVestingPlan;
    /** status .. */
    status?: QueryVestingStatus;
}
export interface QueryTeamVestingStatusByTimeResponseProtoMsg {
    typeUrl: "/kyve.team.v1beta1.QueryTeamVestingStatusByTimeResponse";
    value: Uint8Array;
}
/** QueryTeamVestingStatusByTimeResponse is the response type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeResponseAmino {
    /** request_date .. */
    request_date?: string;
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
    plan?: QueryVestingPlanSDKType;
    status?: QueryVestingStatusSDKType;
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
    total_vested_amount?: string;
    /** total_unlocked_amount ... */
    total_unlocked_amount?: string;
    /** current_claimable_amount ... */
    current_claimable_amount?: string;
    /** locked_vested_amount ... */
    locked_vested_amount?: string;
    /** remaining_unvested_amount ... */
    remaining_unvested_amount?: string;
    /** claimed_amount ... */
    claimed_amount?: string;
    /** total_rewards ... */
    total_rewards?: string;
    /** claimed_rewards ... */
    claimed_rewards?: string;
    /** available_rewards ... */
    available_rewards?: string;
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
    commencement?: string;
    /** token_vesting_start ... */
    token_vesting_start?: string;
    /** token_vesting_finished ... */
    token_vesting_finished?: string;
    /** token_unlock_start ... */
    token_unlock_start?: string;
    /** token_unlock_finished ... */
    token_unlock_finished?: string;
    /** clawback ... */
    clawback?: string;
    /** clawback_amount ... */
    clawback_amount?: string;
    /** maximum_vesting_amount ... */
    maximum_vesting_amount?: string;
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
export declare const QueryTeamInfoRequest: {
    typeUrl: string;
    encode(_: QueryTeamInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTeamInfoRequest;
    fromPartial(_: Partial<QueryTeamInfoRequest>): QueryTeamInfoRequest;
    fromAmino(_: QueryTeamInfoRequestAmino): QueryTeamInfoRequest;
    toAmino(_: QueryTeamInfoRequest): QueryTeamInfoRequestAmino;
    fromAminoMsg(object: QueryTeamInfoRequestAminoMsg): QueryTeamInfoRequest;
    fromProtoMsg(message: QueryTeamInfoRequestProtoMsg): QueryTeamInfoRequest;
    toProto(message: QueryTeamInfoRequest): Uint8Array;
    toProtoMsg(message: QueryTeamInfoRequest): QueryTeamInfoRequestProtoMsg;
};
export declare const QueryTeamInfoResponse: {
    typeUrl: string;
    encode(message: QueryTeamInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTeamInfoResponse;
    fromPartial(object: Partial<QueryTeamInfoResponse>): QueryTeamInfoResponse;
    fromAmino(object: QueryTeamInfoResponseAmino): QueryTeamInfoResponse;
    toAmino(message: QueryTeamInfoResponse): QueryTeamInfoResponseAmino;
    fromAminoMsg(object: QueryTeamInfoResponseAminoMsg): QueryTeamInfoResponse;
    fromProtoMsg(message: QueryTeamInfoResponseProtoMsg): QueryTeamInfoResponse;
    toProto(message: QueryTeamInfoResponse): Uint8Array;
    toProtoMsg(message: QueryTeamInfoResponse): QueryTeamInfoResponseProtoMsg;
};
export declare const QueryTeamVestingAccountsRequest: {
    typeUrl: string;
    encode(_: QueryTeamVestingAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTeamVestingAccountsRequest;
    fromPartial(_: Partial<QueryTeamVestingAccountsRequest>): QueryTeamVestingAccountsRequest;
    fromAmino(_: QueryTeamVestingAccountsRequestAmino): QueryTeamVestingAccountsRequest;
    toAmino(_: QueryTeamVestingAccountsRequest): QueryTeamVestingAccountsRequestAmino;
    fromAminoMsg(object: QueryTeamVestingAccountsRequestAminoMsg): QueryTeamVestingAccountsRequest;
    fromProtoMsg(message: QueryTeamVestingAccountsRequestProtoMsg): QueryTeamVestingAccountsRequest;
    toProto(message: QueryTeamVestingAccountsRequest): Uint8Array;
    toProtoMsg(message: QueryTeamVestingAccountsRequest): QueryTeamVestingAccountsRequestProtoMsg;
};
export declare const QueryTeamVestingAccountsResponse: {
    typeUrl: string;
    encode(message: QueryTeamVestingAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTeamVestingAccountsResponse;
    fromPartial(object: Partial<QueryTeamVestingAccountsResponse>): QueryTeamVestingAccountsResponse;
    fromAmino(object: QueryTeamVestingAccountsResponseAmino): QueryTeamVestingAccountsResponse;
    toAmino(message: QueryTeamVestingAccountsResponse): QueryTeamVestingAccountsResponseAmino;
    fromAminoMsg(object: QueryTeamVestingAccountsResponseAminoMsg): QueryTeamVestingAccountsResponse;
    fromProtoMsg(message: QueryTeamVestingAccountsResponseProtoMsg): QueryTeamVestingAccountsResponse;
    toProto(message: QueryTeamVestingAccountsResponse): Uint8Array;
    toProtoMsg(message: QueryTeamVestingAccountsResponse): QueryTeamVestingAccountsResponseProtoMsg;
};
export declare const QueryTeamVestingAccountRequest: {
    typeUrl: string;
    encode(message: QueryTeamVestingAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTeamVestingAccountRequest;
    fromPartial(object: Partial<QueryTeamVestingAccountRequest>): QueryTeamVestingAccountRequest;
    fromAmino(object: QueryTeamVestingAccountRequestAmino): QueryTeamVestingAccountRequest;
    toAmino(message: QueryTeamVestingAccountRequest): QueryTeamVestingAccountRequestAmino;
    fromAminoMsg(object: QueryTeamVestingAccountRequestAminoMsg): QueryTeamVestingAccountRequest;
    fromProtoMsg(message: QueryTeamVestingAccountRequestProtoMsg): QueryTeamVestingAccountRequest;
    toProto(message: QueryTeamVestingAccountRequest): Uint8Array;
    toProtoMsg(message: QueryTeamVestingAccountRequest): QueryTeamVestingAccountRequestProtoMsg;
};
export declare const QueryTeamVestingAccountResponse: {
    typeUrl: string;
    encode(message: QueryTeamVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTeamVestingAccountResponse;
    fromPartial(object: Partial<QueryTeamVestingAccountResponse>): QueryTeamVestingAccountResponse;
    fromAmino(object: QueryTeamVestingAccountResponseAmino): QueryTeamVestingAccountResponse;
    toAmino(message: QueryTeamVestingAccountResponse): QueryTeamVestingAccountResponseAmino;
    fromAminoMsg(object: QueryTeamVestingAccountResponseAminoMsg): QueryTeamVestingAccountResponse;
    fromProtoMsg(message: QueryTeamVestingAccountResponseProtoMsg): QueryTeamVestingAccountResponse;
    toProto(message: QueryTeamVestingAccountResponse): Uint8Array;
    toProtoMsg(message: QueryTeamVestingAccountResponse): QueryTeamVestingAccountResponseProtoMsg;
};
export declare const QueryTeamVestingStatusRequest: {
    typeUrl: string;
    encode(message: QueryTeamVestingStatusRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTeamVestingStatusRequest;
    fromPartial(object: Partial<QueryTeamVestingStatusRequest>): QueryTeamVestingStatusRequest;
    fromAmino(object: QueryTeamVestingStatusRequestAmino): QueryTeamVestingStatusRequest;
    toAmino(message: QueryTeamVestingStatusRequest): QueryTeamVestingStatusRequestAmino;
    fromAminoMsg(object: QueryTeamVestingStatusRequestAminoMsg): QueryTeamVestingStatusRequest;
    fromProtoMsg(message: QueryTeamVestingStatusRequestProtoMsg): QueryTeamVestingStatusRequest;
    toProto(message: QueryTeamVestingStatusRequest): Uint8Array;
    toProtoMsg(message: QueryTeamVestingStatusRequest): QueryTeamVestingStatusRequestProtoMsg;
};
export declare const QueryTeamVestingStatusResponse: {
    typeUrl: string;
    encode(message: QueryTeamVestingStatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTeamVestingStatusResponse;
    fromPartial(object: Partial<QueryTeamVestingStatusResponse>): QueryTeamVestingStatusResponse;
    fromAmino(object: QueryTeamVestingStatusResponseAmino): QueryTeamVestingStatusResponse;
    toAmino(message: QueryTeamVestingStatusResponse): QueryTeamVestingStatusResponseAmino;
    fromAminoMsg(object: QueryTeamVestingStatusResponseAminoMsg): QueryTeamVestingStatusResponse;
    fromProtoMsg(message: QueryTeamVestingStatusResponseProtoMsg): QueryTeamVestingStatusResponse;
    toProto(message: QueryTeamVestingStatusResponse): Uint8Array;
    toProtoMsg(message: QueryTeamVestingStatusResponse): QueryTeamVestingStatusResponseProtoMsg;
};
export declare const QueryTeamVestingStatusByTimeRequest: {
    typeUrl: string;
    encode(message: QueryTeamVestingStatusByTimeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTeamVestingStatusByTimeRequest;
    fromPartial(object: Partial<QueryTeamVestingStatusByTimeRequest>): QueryTeamVestingStatusByTimeRequest;
    fromAmino(object: QueryTeamVestingStatusByTimeRequestAmino): QueryTeamVestingStatusByTimeRequest;
    toAmino(message: QueryTeamVestingStatusByTimeRequest): QueryTeamVestingStatusByTimeRequestAmino;
    fromAminoMsg(object: QueryTeamVestingStatusByTimeRequestAminoMsg): QueryTeamVestingStatusByTimeRequest;
    fromProtoMsg(message: QueryTeamVestingStatusByTimeRequestProtoMsg): QueryTeamVestingStatusByTimeRequest;
    toProto(message: QueryTeamVestingStatusByTimeRequest): Uint8Array;
    toProtoMsg(message: QueryTeamVestingStatusByTimeRequest): QueryTeamVestingStatusByTimeRequestProtoMsg;
};
export declare const QueryTeamVestingStatusByTimeResponse: {
    typeUrl: string;
    encode(message: QueryTeamVestingStatusByTimeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTeamVestingStatusByTimeResponse;
    fromPartial(object: Partial<QueryTeamVestingStatusByTimeResponse>): QueryTeamVestingStatusByTimeResponse;
    fromAmino(object: QueryTeamVestingStatusByTimeResponseAmino): QueryTeamVestingStatusByTimeResponse;
    toAmino(message: QueryTeamVestingStatusByTimeResponse): QueryTeamVestingStatusByTimeResponseAmino;
    fromAminoMsg(object: QueryTeamVestingStatusByTimeResponseAminoMsg): QueryTeamVestingStatusByTimeResponse;
    fromProtoMsg(message: QueryTeamVestingStatusByTimeResponseProtoMsg): QueryTeamVestingStatusByTimeResponse;
    toProto(message: QueryTeamVestingStatusByTimeResponse): Uint8Array;
    toProtoMsg(message: QueryTeamVestingStatusByTimeResponse): QueryTeamVestingStatusByTimeResponseProtoMsg;
};
export declare const QueryVestingStatus: {
    typeUrl: string;
    encode(message: QueryVestingStatus, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVestingStatus;
    fromPartial(object: Partial<QueryVestingStatus>): QueryVestingStatus;
    fromAmino(object: QueryVestingStatusAmino): QueryVestingStatus;
    toAmino(message: QueryVestingStatus): QueryVestingStatusAmino;
    fromAminoMsg(object: QueryVestingStatusAminoMsg): QueryVestingStatus;
    fromProtoMsg(message: QueryVestingStatusProtoMsg): QueryVestingStatus;
    toProto(message: QueryVestingStatus): Uint8Array;
    toProtoMsg(message: QueryVestingStatus): QueryVestingStatusProtoMsg;
};
export declare const QueryVestingPlan: {
    typeUrl: string;
    encode(message: QueryVestingPlan, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVestingPlan;
    fromPartial(object: Partial<QueryVestingPlan>): QueryVestingPlan;
    fromAmino(object: QueryVestingPlanAmino): QueryVestingPlan;
    toAmino(message: QueryVestingPlan): QueryVestingPlanAmino;
    fromAminoMsg(object: QueryVestingPlanAminoMsg): QueryVestingPlan;
    fromProtoMsg(message: QueryVestingPlanProtoMsg): QueryVestingPlan;
    toProto(message: QueryVestingPlan): Uint8Array;
    toProtoMsg(message: QueryVestingPlan): QueryVestingPlanProtoMsg;
};
