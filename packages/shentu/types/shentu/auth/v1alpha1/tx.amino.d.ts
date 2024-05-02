import { MsgUnlock } from "./tx";
export declare const AminoConverter: {
    "/shentu.auth.v1alpha1.MsgUnlock": {
        aminoType: string;
        toAmino: (message: MsgUnlock) => import("./tx").MsgUnlockAmino;
        fromAmino: (object: import("./tx").MsgUnlockAmino) => MsgUnlock;
    };
};
