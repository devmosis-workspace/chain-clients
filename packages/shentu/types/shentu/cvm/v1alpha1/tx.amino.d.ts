import { MsgCall, MsgDeploy } from "./tx";
export declare const AminoConverter: {
    "/shentu.cvm.v1alpha1.MsgCall": {
        aminoType: string;
        toAmino: (message: MsgCall) => import("./tx").MsgCallAmino;
        fromAmino: (object: import("./tx").MsgCallAmino) => MsgCall;
    };
    "/shentu.cvm.v1alpha1.MsgDeploy": {
        aminoType: string;
        toAmino: (message: MsgDeploy) => import("./tx").MsgDeployAmino;
        fromAmino: (object: import("./tx").MsgDeployAmino) => MsgDeploy;
    };
};
