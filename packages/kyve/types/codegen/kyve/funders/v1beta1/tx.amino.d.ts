import { MsgCreateFunder, MsgUpdateFunder, MsgFundPool, MsgDefundPool, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/kyve.funders.v1beta1.MsgCreateFunder": {
        aminoType: string;
        toAmino: (message: MsgCreateFunder) => import("./tx").MsgCreateFunderAmino;
        fromAmino: (object: import("./tx").MsgCreateFunderAmino) => MsgCreateFunder;
    };
    "/kyve.funders.v1beta1.MsgUpdateFunder": {
        aminoType: string;
        toAmino: (message: MsgUpdateFunder) => import("./tx").MsgUpdateFunderAmino;
        fromAmino: (object: import("./tx").MsgUpdateFunderAmino) => MsgUpdateFunder;
    };
    "/kyve.funders.v1beta1.MsgFundPool": {
        aminoType: string;
        toAmino: (message: MsgFundPool) => import("./tx").MsgFundPoolAmino;
        fromAmino: (object: import("./tx").MsgFundPoolAmino) => MsgFundPool;
    };
    "/kyve.funders.v1beta1.MsgDefundPool": {
        aminoType: string;
        toAmino: (message: MsgDefundPool) => import("./tx").MsgDefundPoolAmino;
        fromAmino: (object: import("./tx").MsgDefundPoolAmino) => MsgDefundPool;
    };
    "/kyve.funders.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
