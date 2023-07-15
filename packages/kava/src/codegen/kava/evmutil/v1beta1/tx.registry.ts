import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin, MsgConvertCosmosCoinToERC20, MsgConvertCosmosCoinFromERC20 } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.evmutil.v1beta1.MsgConvertCoinToERC20", MsgConvertCoinToERC20], ["/kava.evmutil.v1beta1.MsgConvertERC20ToCoin", MsgConvertERC20ToCoin], ["/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20", MsgConvertCosmosCoinToERC20], ["/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20", MsgConvertCosmosCoinFromERC20]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    convertCoinToERC20(value: MsgConvertCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value: MsgConvertCoinToERC20.encode(value).finish()
      };
    },
    convertERC20ToCoin(value: MsgConvertERC20ToCoin) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value: MsgConvertERC20ToCoin.encode(value).finish()
      };
    },
    convertCosmosCoinToERC20(value: MsgConvertCosmosCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
        value: MsgConvertCosmosCoinToERC20.encode(value).finish()
      };
    },
    convertCosmosCoinFromERC20(value: MsgConvertCosmosCoinFromERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
        value: MsgConvertCosmosCoinFromERC20.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    convertCoinToERC20(value: MsgConvertCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value
      };
    },
    convertERC20ToCoin(value: MsgConvertERC20ToCoin) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value
      };
    },
    convertCosmosCoinToERC20(value: MsgConvertCosmosCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
        value
      };
    },
    convertCosmosCoinFromERC20(value: MsgConvertCosmosCoinFromERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
        value
      };
    }
  },
  fromJSON: {
    convertCoinToERC20(value: any) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value: MsgConvertCoinToERC20.fromJSON(value)
      };
    },
    convertERC20ToCoin(value: any) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value: MsgConvertERC20ToCoin.fromJSON(value)
      };
    },
    convertCosmosCoinToERC20(value: any) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
        value: MsgConvertCosmosCoinToERC20.fromJSON(value)
      };
    },
    convertCosmosCoinFromERC20(value: any) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
        value: MsgConvertCosmosCoinFromERC20.fromJSON(value)
      };
    }
  },
  fromPartial: {
    convertCoinToERC20(value: MsgConvertCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value: MsgConvertCoinToERC20.fromPartial(value)
      };
    },
    convertERC20ToCoin(value: MsgConvertERC20ToCoin) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value: MsgConvertERC20ToCoin.fromPartial(value)
      };
    },
    convertCosmosCoinToERC20(value: MsgConvertCosmosCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
        value: MsgConvertCosmosCoinToERC20.fromPartial(value)
      };
    },
    convertCosmosCoinFromERC20(value: MsgConvertCosmosCoinFromERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
        value: MsgConvertCosmosCoinFromERC20.fromPartial(value)
      };
    }
  }
};