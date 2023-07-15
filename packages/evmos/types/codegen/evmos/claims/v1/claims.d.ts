import * as _m0 from "protobufjs/minimal";
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
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecordSDKType {
    initial_claimable_amount: string;
    actions_completed: boolean[];
}
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Claim;
    fromPartial(object: Partial<Claim>): Claim;
};
export declare const ClaimsRecordAddress: {
    encode(message: ClaimsRecordAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimsRecordAddress;
    fromPartial(object: Partial<ClaimsRecordAddress>): ClaimsRecordAddress;
};
export declare const ClaimsRecord: {
    encode(message: ClaimsRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClaimsRecord;
    fromPartial(object: Partial<ClaimsRecord>): ClaimsRecord;
};
