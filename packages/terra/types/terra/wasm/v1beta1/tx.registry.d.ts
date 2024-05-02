import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgMigrateCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateContractAdmin, MsgClearContractAdmin } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: Uint8Array;
        };
        migrateCode(value: MsgMigrateCode): {
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
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateContractAdmin(value: MsgUpdateContractAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        clearContractAdmin(value: MsgClearContractAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        migrateCode(value: MsgMigrateCode): {
            typeUrl: string;
            value: MsgMigrateCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateContractAdmin(value: MsgUpdateContractAdmin): {
            typeUrl: string;
            value: MsgUpdateContractAdmin;
        };
        clearContractAdmin(value: MsgClearContractAdmin): {
            typeUrl: string;
            value: MsgClearContractAdmin;
        };
    };
    fromJSON: {
        storeCode(value: any): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        migrateCode(value: any): {
            typeUrl: string;
            value: MsgMigrateCode;
        };
        instantiateContract(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        executeContract(value: any): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: any): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateContractAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateContractAdmin;
        };
        clearContractAdmin(value: any): {
            typeUrl: string;
            value: MsgClearContractAdmin;
        };
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        migrateCode(value: MsgMigrateCode): {
            typeUrl: string;
            value: MsgMigrateCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateContractAdmin(value: MsgUpdateContractAdmin): {
            typeUrl: string;
            value: MsgUpdateContractAdmin;
        };
        clearContractAdmin(value: MsgClearContractAdmin): {
            typeUrl: string;
            value: MsgClearContractAdmin;
        };
    };
};
