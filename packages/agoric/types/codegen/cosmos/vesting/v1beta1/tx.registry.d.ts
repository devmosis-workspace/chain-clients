import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount, MsgCreatePeriodicVestingAccount, MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
    fromJSON: {
        createVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPeriodicVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
        createClawbackVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: any): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
    fromPartial: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
};
