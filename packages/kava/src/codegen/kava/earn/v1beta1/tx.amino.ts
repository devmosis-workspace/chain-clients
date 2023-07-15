import { strategyTypeFromJSON } from "./strategy";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgDeposit, MsgWithdraw } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
  type: "/kava.earn.v1beta1.MsgDeposit";
  value: {
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    };
    strategy: number;
  };
}
export interface MsgWithdrawAminoType extends AminoMsg {
  type: "/kava.earn.v1beta1.MsgWithdraw";
  value: {
    from: string;
    amount: {
      denom: string;
      amount: string;
    };
    strategy: number;
  };
}
export const AminoConverter = {
  "/kava.earn.v1beta1.MsgDeposit": {
    aminoType: "/kava.earn.v1beta1.MsgDeposit",
    toAmino: ({
      depositor,
      amount,
      strategy
    }: MsgDeposit): MsgDepositAminoType["value"] => {
      return {
        depositor,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        strategy
      };
    },
    fromAmino: ({
      depositor,
      amount,
      strategy
    }: MsgDepositAminoType["value"]): MsgDeposit => {
      return {
        depositor,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        strategy: strategyTypeFromJSON(strategy)
      };
    }
  },
  "/kava.earn.v1beta1.MsgWithdraw": {
    aminoType: "/kava.earn.v1beta1.MsgWithdraw",
    toAmino: ({
      from,
      amount,
      strategy
    }: MsgWithdraw): MsgWithdrawAminoType["value"] => {
      return {
        from,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        strategy
      };
    },
    fromAmino: ({
      from,
      amount,
      strategy
    }: MsgWithdrawAminoType["value"]): MsgWithdraw => {
      return {
        from,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        strategy: strategyTypeFromJSON(strategy)
      };
    }
  }
};