import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgMintDeposit, MsgDelegateMintDeposit, MsgWithdrawBurn, MsgWithdrawBurnUndelegate } from "./tx";
export interface MsgMintDepositAminoType extends AminoMsg {
  type: "/kava.router.v1beta1.MsgMintDeposit";
  value: {
    depositor: string;
    validator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgDelegateMintDepositAminoType extends AminoMsg {
  type: "/kava.router.v1beta1.MsgDelegateMintDeposit";
  value: {
    depositor: string;
    validator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgWithdrawBurnAminoType extends AminoMsg {
  type: "/kava.router.v1beta1.MsgWithdrawBurn";
  value: {
    from: string;
    validator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgWithdrawBurnUndelegateAminoType extends AminoMsg {
  type: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate";
  value: {
    from: string;
    validator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/kava.router.v1beta1.MsgMintDeposit": {
    aminoType: "/kava.router.v1beta1.MsgMintDeposit",
    toAmino: ({
      depositor,
      validator,
      amount
    }: MsgMintDeposit): MsgMintDepositAminoType["value"] => {
      return {
        depositor,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      depositor,
      validator,
      amount
    }: MsgMintDepositAminoType["value"]): MsgMintDeposit => {
      return {
        depositor,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.router.v1beta1.MsgDelegateMintDeposit": {
    aminoType: "/kava.router.v1beta1.MsgDelegateMintDeposit",
    toAmino: ({
      depositor,
      validator,
      amount
    }: MsgDelegateMintDeposit): MsgDelegateMintDepositAminoType["value"] => {
      return {
        depositor,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      depositor,
      validator,
      amount
    }: MsgDelegateMintDepositAminoType["value"]): MsgDelegateMintDeposit => {
      return {
        depositor,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.router.v1beta1.MsgWithdrawBurn": {
    aminoType: "/kava.router.v1beta1.MsgWithdrawBurn",
    toAmino: ({
      from,
      validator,
      amount
    }: MsgWithdrawBurn): MsgWithdrawBurnAminoType["value"] => {
      return {
        from,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      from,
      validator,
      amount
    }: MsgWithdrawBurnAminoType["value"]): MsgWithdrawBurn => {
      return {
        from,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
    aminoType: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
    toAmino: ({
      from,
      validator,
      amount
    }: MsgWithdrawBurnUndelegate): MsgWithdrawBurnUndelegateAminoType["value"] => {
      return {
        from,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      from,
      validator,
      amount
    }: MsgWithdrawBurnUndelegateAminoType["value"]): MsgWithdrawBurnUndelegate => {
      return {
        from,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};