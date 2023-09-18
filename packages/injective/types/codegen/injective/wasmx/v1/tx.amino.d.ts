import { MsgUpdateContract, MsgActivateContract, MsgDeactivateContract, MsgExecuteContractCompat, MsgUpdateParams, MsgRegisterContract } from "./tx";
export declare const AminoConverter: {
    "/injective.wasmx.v1.MsgUpdateContract": {
        aminoType: string;
        toAmino: (message: MsgUpdateContract) => import("./tx").MsgUpdateContractAmino;
        fromAmino: (object: import("./tx").MsgUpdateContractAmino) => MsgUpdateContract;
    };
    "/injective.wasmx.v1.MsgActivateContract": {
        aminoType: string;
        toAmino: (message: MsgActivateContract) => import("./tx").MsgActivateContractAmino;
        fromAmino: (object: import("./tx").MsgActivateContractAmino) => MsgActivateContract;
    };
    "/injective.wasmx.v1.MsgDeactivateContract": {
        aminoType: string;
        toAmino: (message: MsgDeactivateContract) => import("./tx").MsgDeactivateContractAmino;
        fromAmino: (object: import("./tx").MsgDeactivateContractAmino) => MsgDeactivateContract;
    };
    "/injective.wasmx.v1.MsgExecuteContractCompat": {
        aminoType: string;
        toAmino: (message: MsgExecuteContractCompat) => import("./tx").MsgExecuteContractCompatAmino;
        fromAmino: (object: import("./tx").MsgExecuteContractCompatAmino) => MsgExecuteContractCompat;
    };
    "/injective.wasmx.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/injective.wasmx.v1.MsgRegisterContract": {
        aminoType: string;
        toAmino: (message: MsgRegisterContract) => import("./tx").MsgRegisterContractAmino;
        fromAmino: (object: import("./tx").MsgRegisterContractAmino) => MsgRegisterContract;
    };
};
