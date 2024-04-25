import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRegisterStaking, MsgUnregisterStaking, MsgRegisterGovernance, MsgUnregisterGovernance } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerStaking(value: MsgRegisterStaking): {
            typeUrl: string;
            value: Uint8Array;
        };
        unregisterStaking(value: MsgUnregisterStaking): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerGovernance(value: MsgRegisterGovernance): {
            typeUrl: string;
            value: Uint8Array;
        };
        unregisterGovernance(value: MsgUnregisterGovernance): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        registerStaking(value: MsgRegisterStaking): {
            typeUrl: string;
            value: MsgRegisterStaking;
        };
        unregisterStaking(value: MsgUnregisterStaking): {
            typeUrl: string;
            value: MsgUnregisterStaking;
        };
        registerGovernance(value: MsgRegisterGovernance): {
            typeUrl: string;
            value: MsgRegisterGovernance;
        };
        unregisterGovernance(value: MsgUnregisterGovernance): {
            typeUrl: string;
            value: MsgUnregisterGovernance;
        };
    };
    fromJSON: {
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        registerStaking(value: any): {
            typeUrl: string;
            value: MsgRegisterStaking;
        };
        unregisterStaking(value: any): {
            typeUrl: string;
            value: MsgUnregisterStaking;
        };
        registerGovernance(value: any): {
            typeUrl: string;
            value: MsgRegisterGovernance;
        };
        unregisterGovernance(value: any): {
            typeUrl: string;
            value: MsgUnregisterGovernance;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        registerStaking(value: MsgRegisterStaking): {
            typeUrl: string;
            value: MsgRegisterStaking;
        };
        unregisterStaking(value: MsgUnregisterStaking): {
            typeUrl: string;
            value: MsgUnregisterStaking;
        };
        registerGovernance(value: MsgRegisterGovernance): {
            typeUrl: string;
            value: MsgRegisterGovernance;
        };
        unregisterGovernance(value: MsgUnregisterGovernance): {
            typeUrl: string;
            value: MsgUnregisterGovernance;
        };
    };
};
