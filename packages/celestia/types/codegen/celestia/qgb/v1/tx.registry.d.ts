import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterEVMAddress } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerEVMAddress(value: MsgRegisterEVMAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerEVMAddress(value: MsgRegisterEVMAddress): {
            typeUrl: string;
            value: MsgRegisterEVMAddress;
        };
    };
    fromJSON: {
        registerEVMAddress(value: any): {
            typeUrl: string;
            value: MsgRegisterEVMAddress;
        };
    };
    fromPartial: {
        registerEVMAddress(value: MsgRegisterEVMAddress): {
            typeUrl: string;
            value: MsgRegisterEVMAddress;
        };
    };
};
