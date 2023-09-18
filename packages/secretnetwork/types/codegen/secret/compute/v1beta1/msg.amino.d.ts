import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./msg";
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
};
