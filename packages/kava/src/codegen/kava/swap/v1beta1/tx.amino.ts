import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgDeposit, MsgWithdraw, MsgSwapExactForTokens, MsgSwapForExactTokens } from "./tx";
export interface MsgDepositAminoType extends AminoMsg {
  type: "/kava.swap.v1beta1.MsgDeposit";
  value: {
    depositor: string;
    token_a: {
      denom: string;
      amount: string;
    };
    token_b: {
      denom: string;
      amount: string;
    };
    slippage: string;
    deadline: string;
  };
}
export interface MsgWithdrawAminoType extends AminoMsg {
  type: "/kava.swap.v1beta1.MsgWithdraw";
  value: {
    from: string;
    shares: string;
    min_token_a: {
      denom: string;
      amount: string;
    };
    min_token_b: {
      denom: string;
      amount: string;
    };
    deadline: string;
  };
}
export interface MsgSwapExactForTokensAminoType extends AminoMsg {
  type: "/kava.swap.v1beta1.MsgSwapExactForTokens";
  value: {
    requester: string;
    exact_token_a: {
      denom: string;
      amount: string;
    };
    token_b: {
      denom: string;
      amount: string;
    };
    slippage: string;
    deadline: string;
  };
}
export interface MsgSwapForExactTokensAminoType extends AminoMsg {
  type: "/kava.swap.v1beta1.MsgSwapForExactTokens";
  value: {
    requester: string;
    token_a: {
      denom: string;
      amount: string;
    };
    exact_token_b: {
      denom: string;
      amount: string;
    };
    slippage: string;
    deadline: string;
  };
}
export const AminoConverter = {
  "/kava.swap.v1beta1.MsgDeposit": {
    aminoType: "/kava.swap.v1beta1.MsgDeposit",
    toAmino: ({
      depositor,
      tokenA,
      tokenB,
      slippage,
      deadline
    }: MsgDeposit): MsgDepositAminoType["value"] => {
      return {
        depositor,
        token_a: {
          denom: tokenA.denom,
          amount: Long.fromValue(tokenA.amount).toString()
        },
        token_b: {
          denom: tokenB.denom,
          amount: Long.fromValue(tokenB.amount).toString()
        },
        slippage,
        deadline: deadline.toString()
      };
    },
    fromAmino: ({
      depositor,
      token_a,
      token_b,
      slippage,
      deadline
    }: MsgDepositAminoType["value"]): MsgDeposit => {
      return {
        depositor,
        tokenA: {
          denom: token_a.denom,
          amount: token_a.amount
        },
        tokenB: {
          denom: token_b.denom,
          amount: token_b.amount
        },
        slippage,
        deadline: Long.fromString(deadline)
      };
    }
  },
  "/kava.swap.v1beta1.MsgWithdraw": {
    aminoType: "/kava.swap.v1beta1.MsgWithdraw",
    toAmino: ({
      from,
      shares,
      minTokenA,
      minTokenB,
      deadline
    }: MsgWithdraw): MsgWithdrawAminoType["value"] => {
      return {
        from,
        shares,
        min_token_a: {
          denom: minTokenA.denom,
          amount: Long.fromValue(minTokenA.amount).toString()
        },
        min_token_b: {
          denom: minTokenB.denom,
          amount: Long.fromValue(minTokenB.amount).toString()
        },
        deadline: deadline.toString()
      };
    },
    fromAmino: ({
      from,
      shares,
      min_token_a,
      min_token_b,
      deadline
    }: MsgWithdrawAminoType["value"]): MsgWithdraw => {
      return {
        from,
        shares,
        minTokenA: {
          denom: min_token_a.denom,
          amount: min_token_a.amount
        },
        minTokenB: {
          denom: min_token_b.denom,
          amount: min_token_b.amount
        },
        deadline: Long.fromString(deadline)
      };
    }
  },
  "/kava.swap.v1beta1.MsgSwapExactForTokens": {
    aminoType: "/kava.swap.v1beta1.MsgSwapExactForTokens",
    toAmino: ({
      requester,
      exactTokenA,
      tokenB,
      slippage,
      deadline
    }: MsgSwapExactForTokens): MsgSwapExactForTokensAminoType["value"] => {
      return {
        requester,
        exact_token_a: {
          denom: exactTokenA.denom,
          amount: Long.fromValue(exactTokenA.amount).toString()
        },
        token_b: {
          denom: tokenB.denom,
          amount: Long.fromValue(tokenB.amount).toString()
        },
        slippage,
        deadline: deadline.toString()
      };
    },
    fromAmino: ({
      requester,
      exact_token_a,
      token_b,
      slippage,
      deadline
    }: MsgSwapExactForTokensAminoType["value"]): MsgSwapExactForTokens => {
      return {
        requester,
        exactTokenA: {
          denom: exact_token_a.denom,
          amount: exact_token_a.amount
        },
        tokenB: {
          denom: token_b.denom,
          amount: token_b.amount
        },
        slippage,
        deadline: Long.fromString(deadline)
      };
    }
  },
  "/kava.swap.v1beta1.MsgSwapForExactTokens": {
    aminoType: "/kava.swap.v1beta1.MsgSwapForExactTokens",
    toAmino: ({
      requester,
      tokenA,
      exactTokenB,
      slippage,
      deadline
    }: MsgSwapForExactTokens): MsgSwapForExactTokensAminoType["value"] => {
      return {
        requester,
        token_a: {
          denom: tokenA.denom,
          amount: Long.fromValue(tokenA.amount).toString()
        },
        exact_token_b: {
          denom: exactTokenB.denom,
          amount: Long.fromValue(exactTokenB.amount).toString()
        },
        slippage,
        deadline: deadline.toString()
      };
    },
    fromAmino: ({
      requester,
      token_a,
      exact_token_b,
      slippage,
      deadline
    }: MsgSwapForExactTokensAminoType["value"]): MsgSwapForExactTokens => {
      return {
        requester,
        tokenA: {
          denom: token_a.denom,
          amount: token_a.amount
        },
        exactTokenB: {
          denom: exact_token_b.denom,
          amount: exact_token_b.amount
        },
        slippage,
        deadline: Long.fromString(deadline)
      };
    }
  }
};