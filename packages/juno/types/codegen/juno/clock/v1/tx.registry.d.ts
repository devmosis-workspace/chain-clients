import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterClockContract, MsgUnregisterClockContract, MsgUnjailClockContract, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerClockContract(value: MsgRegisterClockContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        unregisterClockContract(value: MsgUnregisterClockContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        unjailClockContract(value: MsgUnjailClockContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerClockContract(value: MsgRegisterClockContract): {
            typeUrl: string;
            value: MsgRegisterClockContract;
        };
        unregisterClockContract(value: MsgUnregisterClockContract): {
            typeUrl: string;
            value: MsgUnregisterClockContract;
        };
        unjailClockContract(value: MsgUnjailClockContract): {
            typeUrl: string;
            value: MsgUnjailClockContract;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        registerClockContract(value: any): {
            typeUrl: string;
            value: MsgRegisterClockContract;
        };
        unregisterClockContract(value: any): {
            typeUrl: string;
            value: MsgUnregisterClockContract;
        };
        unjailClockContract(value: any): {
            typeUrl: string;
            value: MsgUnjailClockContract;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerClockContract(value: MsgRegisterClockContract): {
            typeUrl: string;
            value: MsgRegisterClockContract;
        };
        unregisterClockContract(value: MsgUnregisterClockContract): {
            typeUrl: string;
            value: MsgUnregisterClockContract;
        };
        unjailClockContract(value: MsgUnjailClockContract): {
            typeUrl: string;
            value: MsgUnjailClockContract;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
