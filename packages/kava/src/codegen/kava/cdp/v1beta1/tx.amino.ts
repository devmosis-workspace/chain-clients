import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateCDP, MsgDeposit, MsgWithdraw, MsgDrawDebt, MsgRepayDebt, MsgLiquidate } from "./tx";
export interface MsgCreateCDPAminoType extends AminoMsg {
  type: "/kava.cdp.v1beta1.MsgCreateCDP";
  value: {
    sender: string;
    collateral: {
      denom: string;
      amount: string;
    };
    principal: {
      denom: string;
      amount: string;
    };
    collateral_type: string;
  };
}
export interface MsgDepositAminoType extends AminoMsg {
  type: "/kava.cdp.v1beta1.MsgDeposit";
  value: {
    depositor: string;
    owner: string;
    collateral: {
      denom: string;
      amount: string;
    };
    collateral_type: string;
  };
}
export interface MsgWithdrawAminoType extends AminoMsg {
  type: "/kava.cdp.v1beta1.MsgWithdraw";
  value: {
    depositor: string;
    owner: string;
    collateral: {
      denom: string;
      amount: string;
    };
    collateral_type: string;
  };
}
export interface MsgDrawDebtAminoType extends AminoMsg {
  type: "/kava.cdp.v1beta1.MsgDrawDebt";
  value: {
    sender: string;
    collateral_type: string;
    principal: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRepayDebtAminoType extends AminoMsg {
  type: "/kava.cdp.v1beta1.MsgRepayDebt";
  value: {
    sender: string;
    collateral_type: string;
    payment: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgLiquidateAminoType extends AminoMsg {
  type: "/kava.cdp.v1beta1.MsgLiquidate";
  value: {
    keeper: string;
    borrower: string;
    collateral_type: string;
  };
}
export const AminoConverter = {
  "/kava.cdp.v1beta1.MsgCreateCDP": {
    aminoType: "/kava.cdp.v1beta1.MsgCreateCDP",
    toAmino: ({
      sender,
      collateral,
      principal,
      collateralType
    }: MsgCreateCDP): MsgCreateCDPAminoType["value"] => {
      return {
        sender,
        collateral: {
          denom: collateral.denom,
          amount: Long.fromValue(collateral.amount).toString()
        },
        principal: {
          denom: principal.denom,
          amount: Long.fromValue(principal.amount).toString()
        },
        collateral_type: collateralType
      };
    },
    fromAmino: ({
      sender,
      collateral,
      principal,
      collateral_type
    }: MsgCreateCDPAminoType["value"]): MsgCreateCDP => {
      return {
        sender,
        collateral: {
          denom: collateral.denom,
          amount: collateral.amount
        },
        principal: {
          denom: principal.denom,
          amount: principal.amount
        },
        collateralType: collateral_type
      };
    }
  },
  "/kava.cdp.v1beta1.MsgDeposit": {
    aminoType: "/kava.cdp.v1beta1.MsgDeposit",
    toAmino: ({
      depositor,
      owner,
      collateral,
      collateralType
    }: MsgDeposit): MsgDepositAminoType["value"] => {
      return {
        depositor,
        owner,
        collateral: {
          denom: collateral.denom,
          amount: Long.fromValue(collateral.amount).toString()
        },
        collateral_type: collateralType
      };
    },
    fromAmino: ({
      depositor,
      owner,
      collateral,
      collateral_type
    }: MsgDepositAminoType["value"]): MsgDeposit => {
      return {
        depositor,
        owner,
        collateral: {
          denom: collateral.denom,
          amount: collateral.amount
        },
        collateralType: collateral_type
      };
    }
  },
  "/kava.cdp.v1beta1.MsgWithdraw": {
    aminoType: "/kava.cdp.v1beta1.MsgWithdraw",
    toAmino: ({
      depositor,
      owner,
      collateral,
      collateralType
    }: MsgWithdraw): MsgWithdrawAminoType["value"] => {
      return {
        depositor,
        owner,
        collateral: {
          denom: collateral.denom,
          amount: Long.fromValue(collateral.amount).toString()
        },
        collateral_type: collateralType
      };
    },
    fromAmino: ({
      depositor,
      owner,
      collateral,
      collateral_type
    }: MsgWithdrawAminoType["value"]): MsgWithdraw => {
      return {
        depositor,
        owner,
        collateral: {
          denom: collateral.denom,
          amount: collateral.amount
        },
        collateralType: collateral_type
      };
    }
  },
  "/kava.cdp.v1beta1.MsgDrawDebt": {
    aminoType: "/kava.cdp.v1beta1.MsgDrawDebt",
    toAmino: ({
      sender,
      collateralType,
      principal
    }: MsgDrawDebt): MsgDrawDebtAminoType["value"] => {
      return {
        sender,
        collateral_type: collateralType,
        principal: {
          denom: principal.denom,
          amount: Long.fromValue(principal.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      collateral_type,
      principal
    }: MsgDrawDebtAminoType["value"]): MsgDrawDebt => {
      return {
        sender,
        collateralType: collateral_type,
        principal: {
          denom: principal.denom,
          amount: principal.amount
        }
      };
    }
  },
  "/kava.cdp.v1beta1.MsgRepayDebt": {
    aminoType: "/kava.cdp.v1beta1.MsgRepayDebt",
    toAmino: ({
      sender,
      collateralType,
      payment
    }: MsgRepayDebt): MsgRepayDebtAminoType["value"] => {
      return {
        sender,
        collateral_type: collateralType,
        payment: {
          denom: payment.denom,
          amount: Long.fromValue(payment.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      collateral_type,
      payment
    }: MsgRepayDebtAminoType["value"]): MsgRepayDebt => {
      return {
        sender,
        collateralType: collateral_type,
        payment: {
          denom: payment.denom,
          amount: payment.amount
        }
      };
    }
  },
  "/kava.cdp.v1beta1.MsgLiquidate": {
    aminoType: "/kava.cdp.v1beta1.MsgLiquidate",
    toAmino: ({
      keeper,
      borrower,
      collateralType
    }: MsgLiquidate): MsgLiquidateAminoType["value"] => {
      return {
        keeper,
        borrower,
        collateral_type: collateralType
      };
    },
    fromAmino: ({
      keeper,
      borrower,
      collateral_type
    }: MsgLiquidateAminoType["value"]): MsgLiquidate => {
      return {
        keeper,
        borrower,
        collateralType: collateral_type
      };
    }
  }
};