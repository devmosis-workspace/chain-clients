import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegister, MsgDeregister, MsgSetRegistry } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        register(value: MsgRegister): {
            typeUrl: string;
            value: Uint8Array;
        };
        deregister(value: MsgDeregister): {
            typeUrl: string;
            value: Uint8Array;
        };
        setRegistry(value: MsgSetRegistry): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        register(value: MsgRegister): {
            typeUrl: string;
            value: MsgRegister;
        };
        deregister(value: MsgDeregister): {
            typeUrl: string;
            value: MsgDeregister;
        };
        setRegistry(value: MsgSetRegistry): {
            typeUrl: string;
            value: MsgSetRegistry;
        };
    };
    fromJSON: {
        register(value: any): {
            typeUrl: string;
            value: MsgRegister;
        };
        deregister(value: any): {
            typeUrl: string;
            value: MsgDeregister;
        };
        setRegistry(value: any): {
            typeUrl: string;
            value: MsgSetRegistry;
        };
    };
    fromPartial: {
        register(value: MsgRegister): {
            typeUrl: string;
            value: MsgRegister;
        };
        deregister(value: MsgDeregister): {
            typeUrl: string;
            value: MsgDeregister;
        };
        setRegistry(value: MsgSetRegistry): {
            typeUrl: string;
            value: MsgSetRegistry;
        };
    };
};
