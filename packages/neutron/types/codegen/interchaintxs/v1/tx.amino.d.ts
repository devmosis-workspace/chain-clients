import { MsgRegisterInterchainAccount, MsgSubmitTx } from "./tx";
export declare const AminoConverter: {
    "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: (message: MsgRegisterInterchainAccount) => import("./tx").MsgRegisterInterchainAccountAmino;
        fromAmino: (object: import("./tx").MsgRegisterInterchainAccountAmino) => MsgRegisterInterchainAccount;
    };
    "/neutron.interchaintxs.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: MsgSubmitTx) => import("./tx").MsgSubmitTxAmino;
        fromAmino: (object: import("./tx").MsgSubmitTxAmino) => MsgSubmitTx;
    };
};
