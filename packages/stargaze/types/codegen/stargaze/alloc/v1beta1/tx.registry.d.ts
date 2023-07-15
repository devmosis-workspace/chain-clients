import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount, MsgFundFairburnPool } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        fundFairburnPool(value: MsgFundFairburnPool): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        fundFairburnPool(value: MsgFundFairburnPool): {
            typeUrl: string;
            value: MsgFundFairburnPool;
        };
    };
    fromJSON: {
        createVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        fundFairburnPool(value: any): {
            typeUrl: string;
            value: MsgFundFairburnPool;
        };
    };
    fromPartial: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        fundFairburnPool(value: MsgFundFairburnPool): {
            typeUrl: string;
            value: MsgFundFairburnPool;
        };
    };
};
