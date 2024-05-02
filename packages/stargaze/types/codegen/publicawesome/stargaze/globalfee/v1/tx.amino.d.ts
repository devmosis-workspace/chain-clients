import { MsgSetCodeAuthorization, MsgRemoveCodeAuthorization, MsgSetContractAuthorization, MsgRemoveContractAuthorization, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization": {
        aminoType: string;
        toAmino: (message: MsgSetCodeAuthorization) => import("./tx").MsgSetCodeAuthorizationAmino;
        fromAmino: (object: import("./tx").MsgSetCodeAuthorizationAmino) => MsgSetCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization": {
        aminoType: string;
        toAmino: (message: MsgRemoveCodeAuthorization) => import("./tx").MsgRemoveCodeAuthorizationAmino;
        fromAmino: (object: import("./tx").MsgRemoveCodeAuthorizationAmino) => MsgRemoveCodeAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization": {
        aminoType: string;
        toAmino: (message: MsgSetContractAuthorization) => import("./tx").MsgSetContractAuthorizationAmino;
        fromAmino: (object: import("./tx").MsgSetContractAuthorizationAmino) => MsgSetContractAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization": {
        aminoType: string;
        toAmino: (message: MsgRemoveContractAuthorization) => import("./tx").MsgRemoveContractAuthorizationAmino;
        fromAmino: (object: import("./tx").MsgRemoveContractAuthorizationAmino) => MsgRemoveContractAuthorization;
    };
    "/publicawesome.stargaze.globalfee.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
