import { GeneratedType, Registry } from "@cosmjs/proto-signing";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerAccount(value: noble.forwarding.v1.MsgRegisterAccount): {
            typeUrl: string;
            value: any;
        };
        clearAccount(value: noble.forwarding.v1.MsgClearAccount): {
            typeUrl: string;
            value: any;
        };
    };
    withTypeUrl: {
        registerAccount(value: noble.forwarding.v1.MsgRegisterAccount): {
            typeUrl: string;
            value: noble.forwarding.v1.MsgRegisterAccount;
        };
        clearAccount(value: noble.forwarding.v1.MsgClearAccount): {
            typeUrl: string;
            value: noble.forwarding.v1.MsgClearAccount;
        };
    };
    fromJSON: {
        registerAccount(value: any): {
            typeUrl: string;
            value: any;
        };
        clearAccount(value: any): {
            typeUrl: string;
            value: any;
        };
    };
    fromPartial: {
        registerAccount(value: noble.forwarding.v1.MsgRegisterAccount): {
            typeUrl: string;
            value: any;
        };
        clearAccount(value: noble.forwarding.v1.MsgClearAccount): {
            typeUrl: string;
            value: any;
        };
    };
};
