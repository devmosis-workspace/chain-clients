import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateRegistryContractParams(value: MsgUpdateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        activateRegistryContract(value: MsgActivateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        deactivateRegistryContract(value: MsgDeactivateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeContractCompat(value: MsgExecuteContractCompat): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerContract(value: MsgRegisterContract): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateRegistryContractParams(value: MsgUpdateContract): {
            typeUrl: string;
            value: MsgUpdateContract;
        };
        activateRegistryContract(value: MsgActivateContract): {
            typeUrl: string;
            value: MsgActivateContract;
        };
        deactivateRegistryContract(value: MsgDeactivateContract): {
            typeUrl: string;
            value: MsgDeactivateContract;
        };
        executeContractCompat(value: MsgExecuteContractCompat): {
            typeUrl: string;
            value: MsgExecuteContractCompat;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        registerContract(value: MsgRegisterContract): {
            typeUrl: string;
            value: MsgRegisterContract;
        };
    };
    fromJSON: {
        updateRegistryContractParams(value: any): {
            typeUrl: string;
            value: MsgUpdateContract;
        };
        activateRegistryContract(value: any): {
            typeUrl: string;
            value: MsgActivateContract;
        };
        deactivateRegistryContract(value: any): {
            typeUrl: string;
            value: MsgDeactivateContract;
        };
        executeContractCompat(value: any): {
            typeUrl: string;
            value: MsgExecuteContractCompat;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        registerContract(value: any): {
            typeUrl: string;
            value: MsgRegisterContract;
        };
    };
    fromPartial: {
        updateRegistryContractParams(value: MsgUpdateContract): {
            typeUrl: string;
            value: MsgUpdateContract;
        };
        activateRegistryContract(value: MsgActivateContract): {
            typeUrl: string;
            value: MsgActivateContract;
        };
        deactivateRegistryContract(value: MsgDeactivateContract): {
            typeUrl: string;
            value: MsgDeactivateContract;
        };
        executeContractCompat(value: MsgExecuteContractCompat): {
            typeUrl: string;
            value: MsgExecuteContractCompat;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        registerContract(value: MsgRegisterContract): {
            typeUrl: string;
            value: MsgRegisterContract;
        };
    };
};
