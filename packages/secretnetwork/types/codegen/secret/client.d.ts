import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const secretAminoConverters: {
    "/secret.intertx.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version }: import("./intertx/v1beta1/tx").MsgRegisterAccount) => {
            owner: string;
            connection_id: string;
            version: string;
        };
        fromAmino: ({ owner, connection_id, version }: {
            owner: string;
            connection_id: string;
            version: string;
        }) => import("./intertx/v1beta1/tx").MsgRegisterAccount;
    };
    "/secret.intertx.v1beta1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, msg }: import("./intertx/v1beta1/tx").MsgSubmitTx) => {
            owner: Uint8Array;
            connection_id: string;
            msg: {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromAmino: ({ owner, connection_id, msg }: {
            owner: Uint8Array;
            connection_id: string;
            msg: {
                type_url: string;
                value: Uint8Array;
            };
        }) => import("./intertx/v1beta1/tx").MsgSubmitTx;
    };
    "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch": {
        aminoType: string;
        toAmino: ({ sender }: import("./emergencybutton/v1beta1/tx").MsgToggleIbcSwitch) => {
            sender: string;
        };
        fromAmino: ({ sender }: {
            sender: string;
        }) => import("./emergencybutton/v1beta1/tx").MsgToggleIbcSwitch;
    };
    "/secret.compute.v1beta1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode, source, builder }: import("./compute/v1beta1/msg").MsgStoreCode) => {
            sender: Uint8Array;
            wasm_byte_code: string;
            source: string;
            builder: string;
        };
        fromAmino: ({ sender, wasm_byte_code, source, builder }: {
            sender: Uint8Array;
            wasm_byte_code: string;
            source: string;
            builder: string;
        }) => import("./compute/v1beta1/msg").MsgStoreCode;
    };
    "/secret.compute.v1beta1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, callbackCodeHash, codeId, label, initMsg, initFunds, callbackSig }: import("./compute/v1beta1/msg").MsgInstantiateContract) => {
            sender: Uint8Array;
            callback_code_hash: string;
            code_id: string;
            label: string;
            init_msg: Uint8Array;
            init_funds: {
                denom: string;
                amount: string;
            }[];
            callback_sig: Uint8Array;
        };
        fromAmino: ({ sender, callback_code_hash, code_id, label, init_msg, init_funds, callback_sig }: {
            sender: Uint8Array;
            callback_code_hash: string;
            code_id: string;
            label: string;
            init_msg: Uint8Array;
            init_funds: {
                denom: string;
                amount: string;
            }[];
            callback_sig: Uint8Array;
        }) => import("./compute/v1beta1/msg").MsgInstantiateContract;
    };
    "/secret.compute.v1beta1.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, callbackCodeHash, sentFunds, callbackSig }: import("./compute/v1beta1/msg").MsgExecuteContract) => {
            sender: Uint8Array;
            contract: Uint8Array;
            msg: Uint8Array;
            callback_code_hash: string;
            sent_funds: {
                denom: string;
                amount: string;
            }[];
            callback_sig: Uint8Array;
        };
        fromAmino: ({ sender, contract, msg, callback_code_hash, sent_funds, callback_sig }: {
            sender: Uint8Array;
            contract: Uint8Array;
            msg: Uint8Array;
            callback_code_hash: string;
            sent_funds: {
                denom: string;
                amount: string;
            }[];
            callback_sig: Uint8Array;
        }) => import("./compute/v1beta1/msg").MsgExecuteContract;
    };
};
export declare const secretProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningSecretClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningSecretClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
