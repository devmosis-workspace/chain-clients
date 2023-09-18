import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export declare const AminoConverter: {
    "/secret.intertx.v1beta1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: MsgRegisterAccount) => import("./tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("./tx").MsgRegisterAccountAmino) => MsgRegisterAccount;
    };
    "/secret.intertx.v1beta1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: MsgSubmitTx) => import("./tx").MsgSubmitTxAmino;
        fromAmino: (object: import("./tx").MsgSubmitTxAmino) => MsgSubmitTx;
    };
};
