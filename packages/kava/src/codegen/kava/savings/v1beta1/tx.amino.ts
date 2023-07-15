import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
  type: "/kava.savings.v1beta1.MsgDeposit";
  value: {
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgWithdrawAminoType extends AminoMsg {
  type: "/kava.savings.v1beta1.MsgWithdraw";
  value: {
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/kava.savings.v1beta1.MsgDeposit": {
    aminoType: "/kava.savings.v1beta1.MsgDeposit",
    toAmino: ({
      depositor,
      amount
    }: MsgDeposit): MsgDepositAminoType["value"] => {
      return {
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      depositor,
      amount
    }: MsgDepositAminoType["value"]): MsgDeposit => {
      return {
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/kava.savings.v1beta1.MsgWithdraw": {
    aminoType: "/kava.savings.v1beta1.MsgWithdraw",
    toAmino: ({
      depositor,
      amount
    }: MsgWithdraw): MsgWithdrawAminoType["value"] => {
      return {
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      depositor,
      amount
    }: MsgWithdrawAminoType["value"]): MsgWithdraw => {
      return {
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};