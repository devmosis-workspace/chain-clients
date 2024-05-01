import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./msg";
export declare const AminoConverter: {
    "/secret.compute.v1beta1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: MsgStoreCode) => import("./msg").MsgStoreCodeAmino;
        fromAmino: (object: import("./msg").MsgStoreCodeAmino) => MsgStoreCode;
    };
    "/secret.compute.v1beta1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: (message: MsgInstantiateContract) => import("./msg").MsgInstantiateContractAmino;
        fromAmino: (object: import("./msg").MsgInstantiateContractAmino) => MsgInstantiateContract;
    };
    "/secret.compute.v1beta1.MsgExecuteContract": {
        aminoType: string;
        toAmino: (message: MsgExecuteContract) => import("./msg").MsgExecuteContractAmino;
        fromAmino: (object: import("./msg").MsgExecuteContractAmino) => MsgExecuteContract;
    };
    "/secret.compute.v1beta1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: MsgMigrateContract) => import("./msg").MsgMigrateContractAmino;
        fromAmino: (object: import("./msg").MsgMigrateContractAmino) => MsgMigrateContract;
    };
    "/secret.compute.v1beta1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateAdmin) => import("./msg").MsgUpdateAdminAmino;
        fromAmino: (object: import("./msg").MsgUpdateAdminAmino) => MsgUpdateAdmin;
    };
    "/secret.compute.v1beta1.MsgClearAdmin": {
        aminoType: string;
        toAmino: (message: MsgClearAdmin) => import("./msg").MsgClearAdminAmino;
        fromAmino: (object: import("./msg").MsgClearAdminAmino) => MsgClearAdmin;
    };
};
