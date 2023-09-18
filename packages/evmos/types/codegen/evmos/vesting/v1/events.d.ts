import { BinaryWriter } from "../../../binary";
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
export interface EventCreateClawbackVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v1.EventCreateClawbackVestingAccount";
    value: Uint8Array;
}
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccountAmino {
    /** sender is the address of the sender */
    sender: string;
    /** coins to be vested */
    coins: string;
    /** start_time is the time when the coins start to vest */
    start_time: string;
    /** merge */
    merge: string;
    /** account address of recipient */
    account: string;
}
export interface EventCreateClawbackVestingAccountAminoMsg {
    type: "/evmos.vesting.v1.EventCreateClawbackVestingAccount";
    value: EventCreateClawbackVestingAccountAmino;
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
export interface EventClawbackProtoMsg {
    typeUrl: "/evmos.vesting.v1.EventClawback";
    value: Uint8Array;
}
/** EventClawback defines the event type for clawback */
export interface EventClawbackAmino {
    /** funder is the address of the funder */
    funder: string;
    /** account is the address of the account */
    account: string;
    /** destination is the address of the destination */
    destination: string;
}
export interface EventClawbackAminoMsg {
    type: "/evmos.vesting.v1.EventClawback";
    value: EventClawbackAmino;
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
export interface EventUpdateVestingFunderProtoMsg {
    typeUrl: "/evmos.vesting.v1.EventUpdateVestingFunder";
    value: Uint8Array;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunderAmino {
    /** funder is the address of the funder */
    funder: string;
    /** account is the address of the account */
    account: string;
    /** new_funder is the address of the new funder */
    new_funder: string;
}
export interface EventUpdateVestingFunderAminoMsg {
    type: "/evmos.vesting.v1.EventUpdateVestingFunder";
    value: EventUpdateVestingFunderAmino;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunderSDKType {
    funder: string;
    account: string;
    new_funder: string;
}
export declare const EventCreateClawbackVestingAccount: {
    typeUrl: string;
    encode(message: EventCreateClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateClawbackVestingAccount;
    fromPartial(object: Partial<EventCreateClawbackVestingAccount>): EventCreateClawbackVestingAccount;
    fromAmino(object: EventCreateClawbackVestingAccountAmino): EventCreateClawbackVestingAccount;
    toAmino(message: EventCreateClawbackVestingAccount): EventCreateClawbackVestingAccountAmino;
    fromAminoMsg(object: EventCreateClawbackVestingAccountAminoMsg): EventCreateClawbackVestingAccount;
    fromProtoMsg(message: EventCreateClawbackVestingAccountProtoMsg): EventCreateClawbackVestingAccount;
    toProto(message: EventCreateClawbackVestingAccount): Uint8Array;
    toProtoMsg(message: EventCreateClawbackVestingAccount): EventCreateClawbackVestingAccountProtoMsg;
};
export declare const EventClawback: {
    typeUrl: string;
    encode(message: EventClawback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventClawback;
    fromPartial(object: Partial<EventClawback>): EventClawback;
    fromAmino(object: EventClawbackAmino): EventClawback;
    toAmino(message: EventClawback): EventClawbackAmino;
    fromAminoMsg(object: EventClawbackAminoMsg): EventClawback;
    fromProtoMsg(message: EventClawbackProtoMsg): EventClawback;
    toProto(message: EventClawback): Uint8Array;
    toProtoMsg(message: EventClawback): EventClawbackProtoMsg;
};
export declare const EventUpdateVestingFunder: {
    typeUrl: string;
    encode(message: EventUpdateVestingFunder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateVestingFunder;
    fromPartial(object: Partial<EventUpdateVestingFunder>): EventUpdateVestingFunder;
    fromAmino(object: EventUpdateVestingFunderAmino): EventUpdateVestingFunder;
    toAmino(message: EventUpdateVestingFunder): EventUpdateVestingFunderAmino;
    fromAminoMsg(object: EventUpdateVestingFunderAminoMsg): EventUpdateVestingFunder;
    fromProtoMsg(message: EventUpdateVestingFunderProtoMsg): EventUpdateVestingFunder;
    toProto(message: EventUpdateVestingFunder): Uint8Array;
    toProtoMsg(message: EventUpdateVestingFunder): EventUpdateVestingFunderProtoMsg;
};
