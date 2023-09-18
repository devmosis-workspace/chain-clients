import { BinaryWriter } from "../../../binary";
/** Action defines the list of available actions to claim the airdrop tokens. */
export declare enum Action {
    /** ACTION_UNSPECIFIED - ACTION_UNSPECIFIED defines an invalid action. */
    ACTION_UNSPECIFIED = 0,
    /** ACTION_VOTE - ACTION_VOTE defines a proposal vote. */
    ACTION_VOTE = 1,
    /** ACTION_DELEGATE - ACTION_DELEGATE defines an staking delegation. */
    ACTION_DELEGATE = 2,
    /** ACTION_EVM - ACTION_EVM defines an EVM transaction. */
    ACTION_EVM = 3,
    /** ACTION_IBC_TRANSFER - ACTION_IBC_TRANSFER defines a fungible token transfer transaction via IBC. */
    ACTION_IBC_TRANSFER = 4,
    UNRECOGNIZED = -1
}
export declare const ActionSDKType: typeof Action;
export declare const ActionAmino: typeof Action;
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface Claim {
    /** action enum */
    action: Action;
    /** completed is true if the action has been completed */
    completed: boolean;
    /** claimable_amount of tokens for the action. Zero if completed */
    claimableAmount: string;
}
export interface ClaimProtoMsg {
    typeUrl: "/evmos.claims.v1.Claim";
    value: Uint8Array;
}
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface ClaimAmino {
    /** action enum */
    action: Action;
    /** completed is true if the action has been completed */
    completed: boolean;
    /** claimable_amount of tokens for the action. Zero if completed */
    claimable_amount: string;
}
export interface ClaimAminoMsg {
    type: "/evmos.claims.v1.Claim";
    value: ClaimAmino;
}
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface ClaimSDKType {
    action: Action;
    completed: boolean;
    claimable_amount: string;
}
/**
 * ClaimsRecordAddress is the claims metadata per address that is used at
 * Genesis.
 */
export interface ClaimsRecordAddress {
    /** address of claiming user in either bech32 or hex format */
    address: string;
    /** initial_claimable_amount for the user */
    initialClaimableAmount: string;
    /** actions_completed is a slice that describes which actions were completed */
    actionsCompleted: boolean[];
}
export interface ClaimsRecordAddressProtoMsg {
    typeUrl: "/evmos.claims.v1.ClaimsRecordAddress";
    value: Uint8Array;
}
/**
 * ClaimsRecordAddress is the claims metadata per address that is used at
 * Genesis.
 */
export interface ClaimsRecordAddressAmino {
    /** address of claiming user in either bech32 or hex format */
    address: string;
    /** initial_claimable_amount for the user */
    initial_claimable_amount: string;
    /** actions_completed is a slice that describes which actions were completed */
    actions_completed: boolean[];
}
export interface ClaimsRecordAddressAminoMsg {
    type: "/evmos.claims.v1.ClaimsRecordAddress";
    value: ClaimsRecordAddressAmino;
}
/**
 * ClaimsRecordAddress is the claims metadata per address that is used at
 * Genesis.
 */
export interface ClaimsRecordAddressSDKType {
    address: string;
    initial_claimable_amount: string;
    actions_completed: boolean[];
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecord {
    /** initial_claimable_amount for the user */
    initialClaimableAmount: string;
    /** actions_completed is a slice that describes which actions were completed */
    actionsCompleted: boolean[];
}
export interface ClaimsRecordProtoMsg {
    typeUrl: "/evmos.claims.v1.ClaimsRecord";
    value: Uint8Array;
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecordAmino {
    /** initial_claimable_amount for the user */
    initial_claimable_amount: string;
    /** actions_completed is a slice that describes which actions were completed */
    actions_completed: boolean[];
}
export interface ClaimsRecordAminoMsg {
    type: "/evmos.claims.v1.ClaimsRecord";
    value: ClaimsRecordAmino;
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecordSDKType {
    initial_claimable_amount: string;
    actions_completed: boolean[];
}
export declare const Claim: {
    typeUrl: string;
    encode(message: Claim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Claim;
    fromPartial(object: Partial<Claim>): Claim;
    fromAmino(object: ClaimAmino): Claim;
    toAmino(message: Claim): ClaimAmino;
    fromAminoMsg(object: ClaimAminoMsg): Claim;
    fromProtoMsg(message: ClaimProtoMsg): Claim;
    toProto(message: Claim): Uint8Array;
    toProtoMsg(message: Claim): ClaimProtoMsg;
};
export declare const ClaimsRecordAddress: {
    typeUrl: string;
    encode(message: ClaimsRecordAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClaimsRecordAddress;
    fromPartial(object: Partial<ClaimsRecordAddress>): ClaimsRecordAddress;
    fromAmino(object: ClaimsRecordAddressAmino): ClaimsRecordAddress;
    toAmino(message: ClaimsRecordAddress): ClaimsRecordAddressAmino;
    fromAminoMsg(object: ClaimsRecordAddressAminoMsg): ClaimsRecordAddress;
    fromProtoMsg(message: ClaimsRecordAddressProtoMsg): ClaimsRecordAddress;
    toProto(message: ClaimsRecordAddress): Uint8Array;
    toProtoMsg(message: ClaimsRecordAddress): ClaimsRecordAddressProtoMsg;
};
export declare const ClaimsRecord: {
    typeUrl: string;
    encode(message: ClaimsRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClaimsRecord;
    fromPartial(object: Partial<ClaimsRecord>): ClaimsRecord;
    fromAmino(object: ClaimsRecordAmino): ClaimsRecord;
    toAmino(message: ClaimsRecord): ClaimsRecordAmino;
    fromAminoMsg(object: ClaimsRecordAminoMsg): ClaimsRecord;
    fromProtoMsg(message: ClaimsRecordProtoMsg): ClaimsRecord;
    toProto(message: ClaimsRecord): Uint8Array;
    toProtoMsg(message: ClaimsRecord): ClaimsRecordProtoMsg;
};
