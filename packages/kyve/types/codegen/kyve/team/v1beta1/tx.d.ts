import { BinaryWriter } from "../../../binary";
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlocked {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** id is the unique identifier of the team member */
    id: bigint;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the unlocked amount. */
    amount: bigint;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
export interface MsgClaimUnlockedProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgClaimUnlocked";
    value: Uint8Array;
}
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlockedAmino {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** id is the unique identifier of the team member */
    id: string;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the unlocked amount. */
    amount: string;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
export interface MsgClaimUnlockedAminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimUnlocked";
    value: MsgClaimUnlockedAmino;
}
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlockedSDKType {
    authority: string;
    id: bigint;
    amount: bigint;
    recipient: string;
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponse {
}
export interface MsgClaimUnlockedResponseProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgClaimUnlockedResponse";
    value: Uint8Array;
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponseAmino {
}
export interface MsgClaimUnlockedResponseAminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimUnlockedResponse";
    value: MsgClaimUnlockedResponseAmino;
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponseSDKType {
}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewards {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the authority inflation rewards */
    amount: bigint;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
export interface MsgClaimAuthorityRewardsProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewards";
    value: Uint8Array;
}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewardsAmino {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the authority inflation rewards */
    amount: string;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
export interface MsgClaimAuthorityRewardsAminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimAuthorityRewards";
    value: MsgClaimAuthorityRewardsAmino;
}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewardsSDKType {
    authority: string;
    amount: bigint;
    recipient: string;
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponse {
}
export interface MsgClaimAuthorityRewardsResponseProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewardsResponse";
    value: Uint8Array;
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponseAmino {
}
export interface MsgClaimAuthorityRewardsResponseAminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimAuthorityRewardsResponse";
    value: MsgClaimAuthorityRewardsResponseAmino;
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponseSDKType {
}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewards {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** id is the unique identifier of the team member */
    id: bigint;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the inflation rewards */
    amount: bigint;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
export interface MsgClaimAccountRewardsProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewards";
    value: Uint8Array;
}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewardsAmino {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** id is the unique identifier of the team member */
    id: string;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the inflation rewards */
    amount: string;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
export interface MsgClaimAccountRewardsAminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimAccountRewards";
    value: MsgClaimAccountRewardsAmino;
}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewardsSDKType {
    authority: string;
    id: bigint;
    amount: bigint;
    recipient: string;
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponse {
}
export interface MsgClaimAccountRewardsResponseProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewardsResponse";
    value: Uint8Array;
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponseAmino {
}
export interface MsgClaimAccountRewardsResponseAminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimAccountRewardsResponse";
    value: MsgClaimAccountRewardsResponseAmino;
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponseSDKType {
}
/** MsgClawback ... */
export interface MsgClawback {
    /** authority is the foundation which is allowed to modify team accounts */
    authority: string;
    /** id is the unique identifier of the team member */
    id: bigint;
    /** clawback is a unix timestamp (in seconds) of when the clawback should be applied */
    clawback: bigint;
}
export interface MsgClawbackProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgClawback";
    value: Uint8Array;
}
/** MsgClawback ... */
export interface MsgClawbackAmino {
    /** authority is the foundation which is allowed to modify team accounts */
    authority: string;
    /** id is the unique identifier of the team member */
    id: string;
    /** clawback is a unix timestamp (in seconds) of when the clawback should be applied */
    clawback: string;
}
export interface MsgClawbackAminoMsg {
    type: "/kyve.team.v1beta1.MsgClawback";
    value: MsgClawbackAmino;
}
/** MsgClawback ... */
export interface MsgClawbackSDKType {
    authority: string;
    id: bigint;
    clawback: bigint;
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponse {
}
export interface MsgClawbackResponseProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgClawbackResponse";
    value: Uint8Array;
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponseAmino {
}
export interface MsgClawbackResponseAminoMsg {
    type: "/kyve.team.v1beta1.MsgClawbackResponse";
    value: MsgClawbackResponseAmino;
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponseSDKType {
}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccount {
    /** authority ... */
    authority: string;
    /** total_allocation is the number of tokens reserved for this team member. */
    totalAllocation: bigint;
    /** commencement is the unix timestamp of the member's official start date. */
    commencement: bigint;
}
export interface MsgCreateTeamVestingAccountProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount";
    value: Uint8Array;
}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccountAmino {
    /** authority ... */
    authority: string;
    /** total_allocation is the number of tokens reserved for this team member. */
    total_allocation: string;
    /** commencement is the unix timestamp of the member's official start date. */
    commencement: string;
}
export interface MsgCreateTeamVestingAccountAminoMsg {
    type: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount";
    value: MsgCreateTeamVestingAccountAmino;
}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccountSDKType {
    authority: string;
    total_allocation: bigint;
    commencement: bigint;
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponse {
}
export interface MsgCreateTeamVestingAccountResponseProtoMsg {
    typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccountResponse";
    value: Uint8Array;
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponseAmino {
}
export interface MsgCreateTeamVestingAccountResponseAminoMsg {
    type: "/kyve.team.v1beta1.MsgCreateTeamVestingAccountResponse";
    value: MsgCreateTeamVestingAccountResponseAmino;
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponseSDKType {
}
export declare const MsgClaimUnlocked: {
    typeUrl: string;
    encode(message: MsgClaimUnlocked, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimUnlocked;
    fromPartial(object: Partial<MsgClaimUnlocked>): MsgClaimUnlocked;
    fromAmino(object: MsgClaimUnlockedAmino): MsgClaimUnlocked;
    toAmino(message: MsgClaimUnlocked): MsgClaimUnlockedAmino;
    fromAminoMsg(object: MsgClaimUnlockedAminoMsg): MsgClaimUnlocked;
    fromProtoMsg(message: MsgClaimUnlockedProtoMsg): MsgClaimUnlocked;
    toProto(message: MsgClaimUnlocked): Uint8Array;
    toProtoMsg(message: MsgClaimUnlocked): MsgClaimUnlockedProtoMsg;
};
export declare const MsgClaimUnlockedResponse: {
    typeUrl: string;
    encode(_: MsgClaimUnlockedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimUnlockedResponse;
    fromPartial(_: Partial<MsgClaimUnlockedResponse>): MsgClaimUnlockedResponse;
    fromAmino(_: MsgClaimUnlockedResponseAmino): MsgClaimUnlockedResponse;
    toAmino(_: MsgClaimUnlockedResponse): MsgClaimUnlockedResponseAmino;
    fromAminoMsg(object: MsgClaimUnlockedResponseAminoMsg): MsgClaimUnlockedResponse;
    fromProtoMsg(message: MsgClaimUnlockedResponseProtoMsg): MsgClaimUnlockedResponse;
    toProto(message: MsgClaimUnlockedResponse): Uint8Array;
    toProtoMsg(message: MsgClaimUnlockedResponse): MsgClaimUnlockedResponseProtoMsg;
};
export declare const MsgClaimAuthorityRewards: {
    typeUrl: string;
    encode(message: MsgClaimAuthorityRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimAuthorityRewards;
    fromPartial(object: Partial<MsgClaimAuthorityRewards>): MsgClaimAuthorityRewards;
    fromAmino(object: MsgClaimAuthorityRewardsAmino): MsgClaimAuthorityRewards;
    toAmino(message: MsgClaimAuthorityRewards): MsgClaimAuthorityRewardsAmino;
    fromAminoMsg(object: MsgClaimAuthorityRewardsAminoMsg): MsgClaimAuthorityRewards;
    fromProtoMsg(message: MsgClaimAuthorityRewardsProtoMsg): MsgClaimAuthorityRewards;
    toProto(message: MsgClaimAuthorityRewards): Uint8Array;
    toProtoMsg(message: MsgClaimAuthorityRewards): MsgClaimAuthorityRewardsProtoMsg;
};
export declare const MsgClaimAuthorityRewardsResponse: {
    typeUrl: string;
    encode(_: MsgClaimAuthorityRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimAuthorityRewardsResponse;
    fromPartial(_: Partial<MsgClaimAuthorityRewardsResponse>): MsgClaimAuthorityRewardsResponse;
    fromAmino(_: MsgClaimAuthorityRewardsResponseAmino): MsgClaimAuthorityRewardsResponse;
    toAmino(_: MsgClaimAuthorityRewardsResponse): MsgClaimAuthorityRewardsResponseAmino;
    fromAminoMsg(object: MsgClaimAuthorityRewardsResponseAminoMsg): MsgClaimAuthorityRewardsResponse;
    fromProtoMsg(message: MsgClaimAuthorityRewardsResponseProtoMsg): MsgClaimAuthorityRewardsResponse;
    toProto(message: MsgClaimAuthorityRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgClaimAuthorityRewardsResponse): MsgClaimAuthorityRewardsResponseProtoMsg;
};
export declare const MsgClaimAccountRewards: {
    typeUrl: string;
    encode(message: MsgClaimAccountRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimAccountRewards;
    fromPartial(object: Partial<MsgClaimAccountRewards>): MsgClaimAccountRewards;
    fromAmino(object: MsgClaimAccountRewardsAmino): MsgClaimAccountRewards;
    toAmino(message: MsgClaimAccountRewards): MsgClaimAccountRewardsAmino;
    fromAminoMsg(object: MsgClaimAccountRewardsAminoMsg): MsgClaimAccountRewards;
    fromProtoMsg(message: MsgClaimAccountRewardsProtoMsg): MsgClaimAccountRewards;
    toProto(message: MsgClaimAccountRewards): Uint8Array;
    toProtoMsg(message: MsgClaimAccountRewards): MsgClaimAccountRewardsProtoMsg;
};
export declare const MsgClaimAccountRewardsResponse: {
    typeUrl: string;
    encode(_: MsgClaimAccountRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimAccountRewardsResponse;
    fromPartial(_: Partial<MsgClaimAccountRewardsResponse>): MsgClaimAccountRewardsResponse;
    fromAmino(_: MsgClaimAccountRewardsResponseAmino): MsgClaimAccountRewardsResponse;
    toAmino(_: MsgClaimAccountRewardsResponse): MsgClaimAccountRewardsResponseAmino;
    fromAminoMsg(object: MsgClaimAccountRewardsResponseAminoMsg): MsgClaimAccountRewardsResponse;
    fromProtoMsg(message: MsgClaimAccountRewardsResponseProtoMsg): MsgClaimAccountRewardsResponse;
    toProto(message: MsgClaimAccountRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgClaimAccountRewardsResponse): MsgClaimAccountRewardsResponseProtoMsg;
};
export declare const MsgClawback: {
    typeUrl: string;
    encode(message: MsgClawback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClawback;
    fromPartial(object: Partial<MsgClawback>): MsgClawback;
    fromAmino(object: MsgClawbackAmino): MsgClawback;
    toAmino(message: MsgClawback): MsgClawbackAmino;
    fromAminoMsg(object: MsgClawbackAminoMsg): MsgClawback;
    fromProtoMsg(message: MsgClawbackProtoMsg): MsgClawback;
    toProto(message: MsgClawback): Uint8Array;
    toProtoMsg(message: MsgClawback): MsgClawbackProtoMsg;
};
export declare const MsgClawbackResponse: {
    typeUrl: string;
    encode(_: MsgClawbackResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClawbackResponse;
    fromPartial(_: Partial<MsgClawbackResponse>): MsgClawbackResponse;
    fromAmino(_: MsgClawbackResponseAmino): MsgClawbackResponse;
    toAmino(_: MsgClawbackResponse): MsgClawbackResponseAmino;
    fromAminoMsg(object: MsgClawbackResponseAminoMsg): MsgClawbackResponse;
    fromProtoMsg(message: MsgClawbackResponseProtoMsg): MsgClawbackResponse;
    toProto(message: MsgClawbackResponse): Uint8Array;
    toProtoMsg(message: MsgClawbackResponse): MsgClawbackResponseProtoMsg;
};
export declare const MsgCreateTeamVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateTeamVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateTeamVestingAccount;
    fromPartial(object: Partial<MsgCreateTeamVestingAccount>): MsgCreateTeamVestingAccount;
    fromAmino(object: MsgCreateTeamVestingAccountAmino): MsgCreateTeamVestingAccount;
    toAmino(message: MsgCreateTeamVestingAccount): MsgCreateTeamVestingAccountAmino;
    fromAminoMsg(object: MsgCreateTeamVestingAccountAminoMsg): MsgCreateTeamVestingAccount;
    fromProtoMsg(message: MsgCreateTeamVestingAccountProtoMsg): MsgCreateTeamVestingAccount;
    toProto(message: MsgCreateTeamVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateTeamVestingAccount): MsgCreateTeamVestingAccountProtoMsg;
};
export declare const MsgCreateTeamVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreateTeamVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateTeamVestingAccountResponse;
    fromPartial(_: Partial<MsgCreateTeamVestingAccountResponse>): MsgCreateTeamVestingAccountResponse;
    fromAmino(_: MsgCreateTeamVestingAccountResponseAmino): MsgCreateTeamVestingAccountResponse;
    toAmino(_: MsgCreateTeamVestingAccountResponse): MsgCreateTeamVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateTeamVestingAccountResponseAminoMsg): MsgCreateTeamVestingAccountResponse;
    fromProtoMsg(message: MsgCreateTeamVestingAccountResponseProtoMsg): MsgCreateTeamVestingAccountResponse;
    toProto(message: MsgCreateTeamVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateTeamVestingAccountResponse): MsgCreateTeamVestingAccountResponseProtoMsg;
};
