import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const cosmwasmAminoConverters: {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode, instantiatePermission }: import("./wasm/v1/tx").MsgStoreCode) => {
            sender: string;
            wasm_byte_code: string;
            instantiate_permission: {
                permission: number;
                address: string;
                addresses: string[];
            };
        };
        fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
            sender: string;
            wasm_byte_code: string;
            instantiate_permission: {
                permission: number;
                address: string;
                addresses: string[];
            };
        }) => import("./wasm/v1/tx").MsgStoreCode;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, admin, codeId, label, msg, funds }: import("./wasm/v1/tx").MsgInstantiateContract) => {
            sender: string;
            admin: string;
            code_id: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
            sender: string;
            admin: string;
            code_id: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        }) => import("./wasm/v1/tx").MsgInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: import("./wasm/v1/tx").MsgInstantiateContract2) => {
            sender: string;
            admin: string;
            code_id: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            salt: Uint8Array;
            fix_msg: boolean;
        };
        fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
            sender: string;
            admin: string;
            code_id: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            salt: Uint8Array;
            fix_msg: boolean;
        }) => import("./wasm/v1/tx").MsgInstantiateContract2;
    };
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds }: import("./wasm/v1/tx").MsgExecuteContract) => {
            sender: string;
            contract: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ sender, contract, msg, funds }: {
            sender: string;
            contract: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        }) => import("./wasm/v1/tx").MsgExecuteContract;
    };
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: ({ sender, contract, codeId, msg }: import("./wasm/v1/tx").MsgMigrateContract) => {
            sender: string;
            contract: string;
            code_id: string;
            msg: Uint8Array;
        };
        fromAmino: ({ sender, contract, code_id, msg }: {
            sender: string;
            contract: string;
            code_id: string;
            msg: Uint8Array;
        }) => import("./wasm/v1/tx").MsgMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: ({ sender, newAdmin, contract }: import("./wasm/v1/tx").MsgUpdateAdmin) => {
            sender: string;
            new_admin: string;
            contract: string;
        };
        fromAmino: ({ sender, new_admin, contract }: {
            sender: string;
            new_admin: string;
            contract: string;
        }) => import("./wasm/v1/tx").MsgUpdateAdmin;
    };
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: string;
        toAmino: ({ sender, contract }: import("./wasm/v1/tx").MsgClearAdmin) => {
            sender: string;
            contract: string;
        };
        fromAmino: ({ sender, contract }: {
            sender: string;
            contract: string;
        }) => import("./wasm/v1/tx").MsgClearAdmin;
    };
    "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
        aminoType: string;
        toAmino: ({ sender, codeId, newInstantiatePermission }: import("./wasm/v1/tx").MsgUpdateInstantiateConfig) => {
            sender: string;
            code_id: string;
            new_instantiate_permission: {
                permission: number;
                address: string;
                addresses: string[];
            };
        };
        fromAmino: ({ sender, code_id, new_instantiate_permission }: {
            sender: string;
            code_id: string;
            new_instantiate_permission: {
                permission: number;
                address: string;
                addresses: string[];
            };
        }) => import("./wasm/v1/tx").MsgUpdateInstantiateConfig;
    };
    "/cosmwasm.wasm.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./wasm/v1/tx").MsgUpdateParams) => {
            authority: string;
            params: {
                code_upload_access: {
                    permission: number;
                    address: string;
                    addresses: string[];
                };
                instantiate_default_permission: number;
            };
        };
        fromAmino: ({ authority, params }: {
            authority: string;
            params: {
                code_upload_access: {
                    permission: number;
                    address: string;
                    addresses: string[];
                };
                instantiate_default_permission: number;
            };
        }) => import("./wasm/v1/tx").MsgUpdateParams;
    };
    "/cosmwasm.wasm.v1.MsgSudoContract": {
        aminoType: string;
        toAmino: ({ authority, contract, msg }: import("./wasm/v1/tx").MsgSudoContract) => {
            authority: string;
            contract: string;
            msg: Uint8Array;
        };
        fromAmino: ({ authority, contract, msg }: {
            authority: string;
            contract: string;
            msg: Uint8Array;
        }) => import("./wasm/v1/tx").MsgSudoContract;
    };
    "/cosmwasm.wasm.v1.MsgPinCodes": {
        aminoType: string;
        toAmino: ({ authority, codeIds }: import("./wasm/v1/tx").MsgPinCodes) => {
            authority: string;
            code_ids: string[];
        };
        fromAmino: ({ authority, code_ids }: {
            authority: string;
            code_ids: string[];
        }) => import("./wasm/v1/tx").MsgPinCodes;
    };
    "/cosmwasm.wasm.v1.MsgUnpinCodes": {
        aminoType: string;
        toAmino: ({ authority, codeIds }: import("./wasm/v1/tx").MsgUnpinCodes) => {
            authority: string;
            code_ids: string[];
        };
        fromAmino: ({ authority, code_ids }: {
            authority: string;
            code_ids: string[];
        }) => import("./wasm/v1/tx").MsgUnpinCodes;
    };
    "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
        aminoType: string;
        toAmino: ({ authority, wasmByteCode, instantiatePermission, unpinCode, admin, label, msg, funds, source, builder, codeHash }: import("./wasm/v1/tx").MsgStoreAndInstantiateContract) => {
            authority: string;
            wasm_byte_code: string;
            instantiate_permission: {
                permission: number;
                address: string;
                addresses: string[];
            };
            unpin_code: boolean;
            admin: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            source: string;
            builder: string;
            code_hash: Uint8Array;
        };
        fromAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash }: {
            authority: string;
            wasm_byte_code: string;
            instantiate_permission: {
                permission: number;
                address: string;
                addresses: string[];
            };
            unpin_code: boolean;
            admin: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            source: string;
            builder: string;
            code_hash: Uint8Array;
        }) => import("./wasm/v1/tx").MsgStoreAndInstantiateContract;
    };
};
export declare const cosmwasmProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCosmwasmClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmwasmClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
