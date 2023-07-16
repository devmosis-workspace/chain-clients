import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount, MsgSubmitTx } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: MsgSubmitTx;
        };
    };
    fromJSON: {
        registerInterchainAccount(value: any): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        submitTx(value: any): {
            typeUrl: string;
            value: MsgSubmitTx;
        };
    };
    fromPartial: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: MsgSubmitTx;
        };
    };
};
