import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export declare const AminoConverter: {
    "/chainmain.icaauth.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: MsgRegisterAccount) => import("./tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("./tx").MsgRegisterAccountAmino) => MsgRegisterAccount;
    };
    "/chainmain.icaauth.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: MsgSubmitTx) => import("./tx").MsgSubmitTxAmino;
        fromAmino: (object: import("./tx").MsgSubmitTxAmino) => MsgSubmitTx;
    };
};
