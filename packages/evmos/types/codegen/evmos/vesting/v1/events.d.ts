import * as _m0 from "protobufjs/minimal";
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccount {
    /** sender is the address of the sender */
    sender: string;
    /** coins to be vested */
    coins: string;
    /** start_time is the time when the coins start to vest */
    startTime: string;
    /** merge */
    merge: string;
    /** account address of recipient */
    account: string;
}
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccountSDKType {
    sender: string;
    coins: string;
    start_time: string;
    merge: string;
    account: string;
}
/** EventClawback defines the event type for clawback */
export interface EventClawback {
    /** funder is the address of the funder */
    funder: string;
    /** account is the address of the account */
    account: string;
    /** destination is the address of the destination */
    destination: string;
}
/** EventClawback defines the event type for clawback */
export interface EventClawbackSDKType {
    funder: string;
    account: string;
    destination: string;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunder {
    /** funder is the address of the funder */
    funder: string;
    /** account is the address of the account */
    account: string;
    /** new_funder is the address of the new funder */
    newFunder: string;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunderSDKType {
    funder: string;
    account: string;
    new_funder: string;
}
export declare const EventCreateClawbackVestingAccount: {
    encode(message: EventCreateClawbackVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateClawbackVestingAccount;
    fromPartial(object: Partial<EventCreateClawbackVestingAccount>): EventCreateClawbackVestingAccount;
};
export declare const EventClawback: {
    encode(message: EventClawback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventClawback;
    fromPartial(object: Partial<EventClawback>): EventClawback;
};
export declare const EventUpdateVestingFunder: {
    encode(message: EventUpdateVestingFunder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateVestingFunder;
    fromPartial(object: Partial<EventUpdateVestingFunder>): EventUpdateVestingFunder;
};
