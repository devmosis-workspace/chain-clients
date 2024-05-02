import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAddAccount, MsgRemoveAccount, MsgSetParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addAccount(value: MsgAddAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeAccount(value: MsgRemoveAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        setParams(value: MsgSetParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addAccount(value: MsgAddAccount): {
            typeUrl: string;
            value: MsgAddAccount;
        };
        removeAccount(value: MsgRemoveAccount): {
            typeUrl: string;
            value: MsgRemoveAccount;
        };
        setParams(value: MsgSetParams): {
            typeUrl: string;
            value: MsgSetParams;
        };
    };
    fromJSON: {
        addAccount(value: any): {
            typeUrl: string;
            value: MsgAddAccount;
        };
        removeAccount(value: any): {
            typeUrl: string;
            value: MsgRemoveAccount;
        };
        setParams(value: any): {
            typeUrl: string;
            value: MsgSetParams;
        };
    };
    fromPartial: {
        addAccount(value: MsgAddAccount): {
            typeUrl: string;
            value: MsgAddAccount;
        };
        removeAccount(value: MsgRemoveAccount): {
            typeUrl: string;
            value: MsgRemoveAccount;
        };
        setParams(value: MsgSetParams): {
            typeUrl: string;
            value: MsgSetParams;
        };
    };
};
