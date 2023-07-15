import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
  type: "/kava.hard.v1beta1.MsgDeposit";
  value: {
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgWithdrawAminoType extends AminoMsg {
  type: "/kava.hard.v1beta1.MsgWithdraw";
  value: {
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgBorrowAminoType extends AminoMsg {
  type: "/kava.hard.v1beta1.MsgBorrow";
  value: {
    borrower: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgRepayAminoType extends AminoMsg {
  type: "/kava.hard.v1beta1.MsgRepay";
  value: {
    sender: string;
    owner: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface MsgLiquidateAminoType extends AminoMsg {
  type: "/kava.hard.v1beta1.MsgLiquidate";
  value: {
    keeper: string;
    borrower: string;
  };
}
export const AminoConverter = {
  "/kava.hard.v1beta1.MsgDeposit": {
    aminoType: "/kava.hard.v1beta1.MsgDeposit",
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
  "/kava.hard.v1beta1.MsgWithdraw": {
    aminoType: "/kava.hard.v1beta1.MsgWithdraw",
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
  },
  "/kava.hard.v1beta1.MsgBorrow": {
    aminoType: "/kava.hard.v1beta1.MsgBorrow",
    toAmino: ({
      borrower,
      amount
    }: MsgBorrow): MsgBorrowAminoType["value"] => {
      return {
        borrower,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      borrower,
      amount
    }: MsgBorrowAminoType["value"]): MsgBorrow => {
      return {
        borrower,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/kava.hard.v1beta1.MsgRepay": {
    aminoType: "/kava.hard.v1beta1.MsgRepay",
    toAmino: ({
      sender,
      owner,
      amount
    }: MsgRepay): MsgRepayAminoType["value"] => {
      return {
        sender,
        owner,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      owner,
      amount
    }: MsgRepayAminoType["value"]): MsgRepay => {
      return {
        sender,
        owner,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/kava.hard.v1beta1.MsgLiquidate": {
    aminoType: "/kava.hard.v1beta1.MsgLiquidate",
    toAmino: ({
      keeper,
      borrower
    }: MsgLiquidate): MsgLiquidateAminoType["value"] => {
      return {
        keeper,
        borrower
      };
    },
    fromAmino: ({
      keeper,
      borrower
    }: MsgLiquidateAminoType["value"]): MsgLiquidate => {
      return {
        keeper,
        borrower
      };
    }
  }
};