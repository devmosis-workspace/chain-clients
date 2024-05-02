import { MsgAddAccount, MsgRemoveAccount, MsgSetParams } from "./tx";
export declare const AminoConverter: {
    "/sifnode.admin.v1.MsgAddAccount": {
        aminoType: string;
        toAmino: (message: MsgAddAccount) => import("./tx").MsgAddAccountAmino;
        fromAmino: (object: import("./tx").MsgAddAccountAmino) => MsgAddAccount;
    };
    "/sifnode.admin.v1.MsgRemoveAccount": {
        aminoType: string;
        toAmino: (message: MsgRemoveAccount) => import("./tx").MsgRemoveAccountAmino;
        fromAmino: (object: import("./tx").MsgRemoveAccountAmino) => MsgRemoveAccount;
    };
    "/sifnode.admin.v1.MsgSetParams": {
        aminoType: string;
        toAmino: (message: MsgSetParams) => import("./tx").MsgSetParamsAmino;
        fromAmino: (object: import("./tx").MsgSetParamsAmino) => MsgSetParams;
    };
};
