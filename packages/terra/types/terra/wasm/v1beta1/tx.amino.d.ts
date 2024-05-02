import { MsgStoreCode, MsgMigrateCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateContractAdmin, MsgClearContractAdmin } from "./tx";
export declare const AminoConverter: {
    "/terra.wasm.v1beta1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: MsgStoreCode) => import("./tx").MsgStoreCodeAmino;
        fromAmino: (object: import("./tx").MsgStoreCodeAmino) => MsgStoreCode;
    };
    "/terra.wasm.v1beta1.MsgMigrateCode": {
        aminoType: string;
        toAmino: (message: MsgMigrateCode) => import("./tx").MsgMigrateCodeAmino;
        fromAmino: (object: import("./tx").MsgMigrateCodeAmino) => MsgMigrateCode;
    };
    "/terra.wasm.v1beta1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: (message: MsgInstantiateContract) => import("./tx").MsgInstantiateContractAmino;
        fromAmino: (object: import("./tx").MsgInstantiateContractAmino) => MsgInstantiateContract;
    };
    "/terra.wasm.v1beta1.MsgExecuteContract": {
        aminoType: string;
        toAmino: (message: MsgExecuteContract) => import("./tx").MsgExecuteContractAmino;
        fromAmino: (object: import("./tx").MsgExecuteContractAmino) => MsgExecuteContract;
    };
    "/terra.wasm.v1beta1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: MsgMigrateContract) => import("./tx").MsgMigrateContractAmino;
        fromAmino: (object: import("./tx").MsgMigrateContractAmino) => MsgMigrateContract;
    };
    "/terra.wasm.v1beta1.MsgUpdateContractAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateContractAdmin) => import("./tx").MsgUpdateContractAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateContractAdminAmino) => MsgUpdateContractAdmin;
    };
    "/terra.wasm.v1beta1.MsgClearContractAdmin": {
        aminoType: string;
        toAmino: (message: MsgClearContractAdmin) => import("./tx").MsgClearContractAdminAmino;
        fromAmino: (object: import("./tx").MsgClearContractAdminAmino) => MsgClearContractAdmin;
    };
};
