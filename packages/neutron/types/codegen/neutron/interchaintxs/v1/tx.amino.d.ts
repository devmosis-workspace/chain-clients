import { MsgRegisterInterchainAccount, MsgSubmitTx, MsgUpdateParams } from "./tx";
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
    "/neutron.interchaintxs.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
