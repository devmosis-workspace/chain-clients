import { MsgRegisterFeeShare, MsgUpdateFeeShare, MsgCancelFeeShare } from "./tx";
export declare const AminoConverter: {
    "/juno.feeshare.v1.MsgRegisterFeeShare": {
        aminoType: string;
        toAmino: (message: MsgRegisterFeeShare) => import("./tx").MsgRegisterFeeShareAmino;
        fromAmino: (object: import("./tx").MsgRegisterFeeShareAmino) => MsgRegisterFeeShare;
    };
    "/juno.feeshare.v1.MsgUpdateFeeShare": {
        aminoType: string;
        toAmino: (message: MsgUpdateFeeShare) => import("./tx").MsgUpdateFeeShareAmino;
        fromAmino: (object: import("./tx").MsgUpdateFeeShareAmino) => MsgUpdateFeeShare;
    };
    "/juno.feeshare.v1.MsgCancelFeeShare": {
        aminoType: string;
        toAmino: (message: MsgCancelFeeShare) => import("./tx").MsgCancelFeeShareAmino;
        fromAmino: (object: import("./tx").MsgCancelFeeShareAmino) => MsgCancelFeeShare;
    };
};
