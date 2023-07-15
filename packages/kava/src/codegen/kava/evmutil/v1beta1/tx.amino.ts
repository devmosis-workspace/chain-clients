import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin, MsgConvertCosmosCoinToERC20, MsgConvertCosmosCoinFromERC20 } from "./tx";
export interface MsgConvertCoinToERC20AminoType extends AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20";
  value: {
    initiator: string;
    receiver: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgConvertERC20ToCoinAminoType extends AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin";
  value: {
    initiator: string;
    receiver: string;
    kava_erc20_address: string;
    amount: string;
  };
}
export interface MsgConvertCosmosCoinToERC20AminoType extends AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20";
  value: {
    initiator: string;
    receiver: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgConvertCosmosCoinFromERC20AminoType extends AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20";
  value: {
    initiator: string;
    receiver: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
    toAmino: ({
      initiator,
      receiver,
      amount
    }: MsgConvertCoinToERC20): MsgConvertCoinToERC20AminoType["value"] => {
      return {
        initiator,
        receiver,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      initiator,
      receiver,
      amount
    }: MsgConvertCoinToERC20AminoType["value"]): MsgConvertCoinToERC20 => {
      return {
        initiator,
        receiver,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
    toAmino: ({
      initiator,
      receiver,
      kavaErc20Address,
      amount
    }: MsgConvertERC20ToCoin): MsgConvertERC20ToCoinAminoType["value"] => {
      return {
        initiator,
        receiver,
        kava_erc20_address: kavaErc20Address,
        amount
      };
    },
    fromAmino: ({
      initiator,
      receiver,
      kava_erc20_address,
      amount
    }: MsgConvertERC20ToCoinAminoType["value"]): MsgConvertERC20ToCoin => {
      return {
        initiator,
        receiver,
        kavaErc20Address: kava_erc20_address,
        amount
      };
    }
  },
  "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
    toAmino: ({
      initiator,
      receiver,
      amount
    }: MsgConvertCosmosCoinToERC20): MsgConvertCosmosCoinToERC20AminoType["value"] => {
      return {
        initiator,
        receiver,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      initiator,
      receiver,
      amount
    }: MsgConvertCosmosCoinToERC20AminoType["value"]): MsgConvertCosmosCoinToERC20 => {
      return {
        initiator,
        receiver,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
    toAmino: ({
      initiator,
      receiver,
      amount
    }: MsgConvertCosmosCoinFromERC20): MsgConvertCosmosCoinFromERC20AminoType["value"] => {
      return {
        initiator,
        receiver,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      initiator,
      receiver,
      amount
    }: MsgConvertCosmosCoinFromERC20AminoType["value"]): MsgConvertCosmosCoinFromERC20 => {
      return {
        initiator,
        receiver,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};