import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin, MsgConvertCosmosCoinToERC20, MsgConvertCosmosCoinFromERC20 } from "./tx";
export declare const AminoConverter: {
    "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
        aminoType: string;
        toAmino: (message: MsgConvertCoinToERC20) => import("./tx").MsgConvertCoinToERC20Amino;
        fromAmino: (object: import("./tx").MsgConvertCoinToERC20Amino) => MsgConvertCoinToERC20;
    };
    "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
        aminoType: string;
        toAmino: (message: MsgConvertERC20ToCoin) => import("./tx").MsgConvertERC20ToCoinAmino;
        fromAmino: (object: import("./tx").MsgConvertERC20ToCoinAmino) => MsgConvertERC20ToCoin;
    };
    "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20": {
        aminoType: string;
        toAmino: (message: MsgConvertCosmosCoinToERC20) => import("./tx").MsgConvertCosmosCoinToERC20Amino;
        fromAmino: (object: import("./tx").MsgConvertCosmosCoinToERC20Amino) => MsgConvertCosmosCoinToERC20;
    };
    "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20": {
        aminoType: string;
        toAmino: (message: MsgConvertCosmosCoinFromERC20) => import("./tx").MsgConvertCosmosCoinFromERC20Amino;
        fromAmino: (object: import("./tx").MsgConvertCosmosCoinFromERC20Amino) => MsgConvertCosmosCoinFromERC20;
    };
};
