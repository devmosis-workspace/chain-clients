import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./msg";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
    };
    fromJSON: {
        storeCode(value: any): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        executeContract(value: any): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
    };
};
