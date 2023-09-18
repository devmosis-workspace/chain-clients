import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin, MsgConvertCosmosCoinToERC20, MsgConvertCosmosCoinFromERC20 } from "./tx";
export const AminoConverter = {
  "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
    toAmino: MsgConvertCoinToERC20.toAmino,
    fromAmino: MsgConvertCoinToERC20.fromAmino
  },
  "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
    toAmino: MsgConvertERC20ToCoin.toAmino,
    fromAmino: MsgConvertERC20ToCoin.fromAmino
  },
  "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
    toAmino: MsgConvertCosmosCoinToERC20.toAmino,
    fromAmino: MsgConvertCosmosCoinToERC20.fromAmino
  },
  "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
    toAmino: MsgConvertCosmosCoinFromERC20.toAmino,
    fromAmino: MsgConvertCosmosCoinFromERC20.fromAmino
  }
};