import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgDelegate, MsgWithdrawRewards, MsgUndelegate, MsgRedelegate, MsgUpdateParams } from "./tx";
export interface MsgDelegateAminoType extends AminoMsg {
  type: "/kyve.delegation.v1beta1.MsgDelegate";
  value: {
    creator: string;
    staker: string;
    amount: string;
  };
}
export interface MsgWithdrawRewardsAminoType extends AminoMsg {
  type: "/kyve.delegation.v1beta1.MsgWithdrawRewards";
  value: {
    creator: string;
    staker: string;
  };
}
export interface MsgUndelegateAminoType extends AminoMsg {
  type: "/kyve.delegation.v1beta1.MsgUndelegate";
  value: {
    creator: string;
    staker: string;
    amount: string;
  };
}
export interface MsgRedelegateAminoType extends AminoMsg {
  type: "/kyve.delegation.v1beta1.MsgRedelegate";
  value: {
    creator: string;
    from_staker: string;
    to_staker: string;
    amount: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/kyve.delegation.v1beta1.MsgUpdateParams";
  value: {
    authority: string;
    payload: string;
  };
}
export const AminoConverter = {
  "/kyve.delegation.v1beta1.MsgDelegate": {
    aminoType: "/kyve.delegation.v1beta1.MsgDelegate",
    toAmino: ({
      creator,
      staker,
      amount
    }: MsgDelegate): MsgDelegateAminoType["value"] => {
      return {
        creator,
        staker,
        amount: amount.toString()
      };
    },
    fromAmino: ({
      creator,
      staker,
      amount
    }: MsgDelegateAminoType["value"]): MsgDelegate => {
      return {
        creator,
        staker,
        amount: Long.fromString(amount)
      };
    }
  },
  "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
    aminoType: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
    toAmino: ({
      creator,
      staker
    }: MsgWithdrawRewards): MsgWithdrawRewardsAminoType["value"] => {
      return {
        creator,
        staker
      };
    },
    fromAmino: ({
      creator,
      staker
    }: MsgWithdrawRewardsAminoType["value"]): MsgWithdrawRewards => {
      return {
        creator,
        staker
      };
    }
  },
  "/kyve.delegation.v1beta1.MsgUndelegate": {
    aminoType: "/kyve.delegation.v1beta1.MsgUndelegate",
    toAmino: ({
      creator,
      staker,
      amount
    }: MsgUndelegate): MsgUndelegateAminoType["value"] => {
      return {
        creator,
        staker,
        amount: amount.toString()
      };
    },
    fromAmino: ({
      creator,
      staker,
      amount
    }: MsgUndelegateAminoType["value"]): MsgUndelegate => {
      return {
        creator,
        staker,
        amount: Long.fromString(amount)
      };
    }
  },
  "/kyve.delegation.v1beta1.MsgRedelegate": {
    aminoType: "/kyve.delegation.v1beta1.MsgRedelegate",
    toAmino: ({
      creator,
      fromStaker,
      toStaker,
      amount
    }: MsgRedelegate): MsgRedelegateAminoType["value"] => {
      return {
        creator,
        from_staker: fromStaker,
        to_staker: toStaker,
        amount: amount.toString()
      };
    },
    fromAmino: ({
      creator,
      from_staker,
      to_staker,
      amount
    }: MsgRedelegateAminoType["value"]): MsgRedelegate => {
      return {
        creator,
        fromStaker: from_staker,
        toStaker: to_staker,
        amount: Long.fromString(amount)
      };
    }
  },
  "/kyve.delegation.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.delegation.v1beta1.MsgUpdateParams",
    toAmino: ({
      authority,
      payload
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        payload
      };
    },
    fromAmino: ({
      authority,
      payload
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        payload
      };
    }
  }
};