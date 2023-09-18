import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/ethermint.evm.v1.MsgEthereumTx": {
        aminoType: string;
        toAmino: (message: MsgEthereumTx) => import("./tx").MsgEthereumTxAmino;
        fromAmino: (object: import("./tx").MsgEthereumTxAmino) => MsgEthereumTx;
    };
    "/ethermint.evm.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
