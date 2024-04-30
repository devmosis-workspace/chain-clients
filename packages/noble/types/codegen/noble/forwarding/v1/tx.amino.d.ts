import { MsgRegisterAccount, MsgClearAccount } from "./tx";
export declare const AminoConverter: {
    "/noble.forwarding.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: MsgRegisterAccount) => import("./tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("./tx").MsgRegisterAccountAmino) => MsgRegisterAccount;
    };
    "/noble.forwarding.v1.MsgClearAccount": {
        aminoType: string;
        toAmino: (message: MsgClearAccount) => import("./tx").MsgClearAccountAmino;
        fromAmino: (object: import("./tx").MsgClearAccountAmino) => MsgClearAccount;
    };
};
