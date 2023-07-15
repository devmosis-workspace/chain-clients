import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgConvertCoin, MsgConvertERC20, MsgUpdateParams } from "./tx";
export interface MsgConvertCoinAminoType extends AminoMsg {
  type: "/evmos.erc20.v1.MsgConvertCoin";
  value: {
    coin: {
      denom: string;
      amount: string;
    };
    receiver: string;
    sender: string;
  };
}
export interface MsgConvertERC20AminoType extends AminoMsg {
  type: "/evmos.erc20.v1.MsgConvertERC20";
  value: {
    contract_address: string;
    amount: string;
    receiver: string;
    sender: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/evmos.erc20.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      enable_erc20: boolean;
      enable_evm_hook: boolean;
    };
  };
}
export const AminoConverter = {
  "/evmos.erc20.v1.MsgConvertCoin": {
    aminoType: "/evmos.erc20.v1.MsgConvertCoin",
    toAmino: ({
      coin,
      receiver,
      sender
    }: MsgConvertCoin): MsgConvertCoinAminoType["value"] => {
      return {
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        },
        receiver,
        sender
      };
    },
    fromAmino: ({
      coin,
      receiver,
      sender
    }: MsgConvertCoinAminoType["value"]): MsgConvertCoin => {
      return {
        coin: {
          denom: coin.denom,
          amount: coin.amount
        },
        receiver,
        sender
      };
    }
  },
  "/evmos.erc20.v1.MsgConvertERC20": {
    aminoType: "/evmos.erc20.v1.MsgConvertERC20",
    toAmino: ({
      contractAddress,
      amount,
      receiver,
      sender
    }: MsgConvertERC20): MsgConvertERC20AminoType["value"] => {
      return {
        contract_address: contractAddress,
        amount,
        receiver,
        sender
      };
    },
    fromAmino: ({
      contract_address,
      amount,
      receiver,
      sender
    }: MsgConvertERC20AminoType["value"]): MsgConvertERC20 => {
      return {
        contractAddress: contract_address,
        amount,
        receiver,
        sender
      };
    }
  },
  "/evmos.erc20.v1.MsgUpdateParams": {
    aminoType: "/evmos.erc20.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          enable_erc20: params.enableErc20,
          enable_evm_hook: params.enableEvmHook
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          enableErc20: params.enable_erc20,
          enableEvmHook: params.enable_evm_hook
        }
      };
    }
  }
};