import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig } from "./tx";
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
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
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
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
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
        instantiateContract2(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: any): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: any): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: any): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: any): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
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
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
        };
    };
};
