import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const secretAminoConverters: {
    "/secret.intertx.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: import("./intertx/v1beta1/tx").MsgRegisterAccount) => import("./intertx/v1beta1/tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("./intertx/v1beta1/tx").MsgRegisterAccountAmino) => import("./intertx/v1beta1/tx").MsgRegisterAccount;
    };
    "/secret.intertx.v1beta1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: import("./intertx/v1beta1/tx").MsgSubmitTx) => import("./intertx/v1beta1/tx").MsgSubmitTxAmino;
        fromAmino: (object: import("./intertx/v1beta1/tx").MsgSubmitTxAmino) => import("./intertx/v1beta1/tx").MsgSubmitTx;
    };
    "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch": {
        aminoType: string;
        toAmino: (message: import("./emergencybutton/v1beta1/tx").MsgToggleIbcSwitch) => import("./emergencybutton/v1beta1/tx").MsgToggleIbcSwitchAmino;
        fromAmino: (object: import("./emergencybutton/v1beta1/tx").MsgToggleIbcSwitchAmino) => import("./emergencybutton/v1beta1/tx").MsgToggleIbcSwitch;
    };
    "/secret.compute.v1beta1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: import("./compute/v1beta1/msg").MsgStoreCode) => import("./compute/v1beta1/msg").MsgStoreCodeAmino;
        fromAmino: (object: import("./compute/v1beta1/msg").MsgStoreCodeAmino) => import("./compute/v1beta1/msg").MsgStoreCode;
    };
    "/secret.compute.v1beta1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: (message: import("./compute/v1beta1/msg").MsgInstantiateContract) => import("./compute/v1beta1/msg").MsgInstantiateContractAmino;
        fromAmino: (object: import("./compute/v1beta1/msg").MsgInstantiateContractAmino) => import("./compute/v1beta1/msg").MsgInstantiateContract;
    };
    "/secret.compute.v1beta1.MsgExecuteContract": {
        aminoType: string;
        toAmino: (message: import("./compute/v1beta1/msg").MsgExecuteContract) => import("./compute/v1beta1/msg").MsgExecuteContractAmino;
        fromAmino: (object: import("./compute/v1beta1/msg").MsgExecuteContractAmino) => import("./compute/v1beta1/msg").MsgExecuteContract;
    };
    "/secret.compute.v1beta1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: import("./compute/v1beta1/msg").MsgMigrateContract) => import("./compute/v1beta1/msg").MsgMigrateContractAmino;
        fromAmino: (object: import("./compute/v1beta1/msg").MsgMigrateContractAmino) => import("./compute/v1beta1/msg").MsgMigrateContract;
    };
    "/secret.compute.v1beta1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: (message: import("./compute/v1beta1/msg").MsgUpdateAdmin) => import("./compute/v1beta1/msg").MsgUpdateAdminAmino;
        fromAmino: (object: import("./compute/v1beta1/msg").MsgUpdateAdminAmino) => import("./compute/v1beta1/msg").MsgUpdateAdmin;
    };
    "/secret.compute.v1beta1.MsgClearAdmin": {
        aminoType: string;
        toAmino: (message: import("./compute/v1beta1/msg").MsgClearAdmin) => import("./compute/v1beta1/msg").MsgClearAdminAmino;
        fromAmino: (object: import("./compute/v1beta1/msg").MsgClearAdminAmino) => import("./compute/v1beta1/msg").MsgClearAdmin;
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
}) => Promise<any>;
