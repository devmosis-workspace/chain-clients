import { MsgLockedSend } from "./tx";
export declare const AminoConverter: {
    "/shentu.bank.v1alpha1.MsgLockedSend": {
        aminoType: string;
        toAmino: (message: MsgLockedSend) => import("./tx").MsgLockedSendAmino;
        fromAmino: (object: import("./tx").MsgLockedSendAmino) => MsgLockedSend;
    };
};
