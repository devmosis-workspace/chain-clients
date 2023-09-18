import { MsgConvertCoin, MsgConvertERC20, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/evmos.erc20.v1.MsgConvertCoin": {
        aminoType: string;
        toAmino: (message: MsgConvertCoin) => import("./tx").MsgConvertCoinAmino;
        fromAmino: (object: import("./tx").MsgConvertCoinAmino) => MsgConvertCoin;
    };
    "/evmos.erc20.v1.MsgConvertERC20": {
        aminoType: string;
        toAmino: (message: MsgConvertERC20) => import("./tx").MsgConvertERC20Amino;
        fromAmino: (object: import("./tx").MsgConvertERC20Amino) => MsgConvertERC20;
    };
    "/evmos.erc20.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
