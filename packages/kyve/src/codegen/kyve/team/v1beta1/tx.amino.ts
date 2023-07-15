import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgClaimUnlocked, MsgClawback, MsgCreateTeamVestingAccount, MsgClaimAuthorityRewards, MsgClaimAccountRewards } from "./tx";
export interface MsgClaimUnlockedAminoType extends AminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimUnlocked";
  value: {
    authority: string;
    id: string;
    amount: string;
    recipient: string;
  };
}
export interface MsgClawbackAminoType extends AminoMsg {
  type: "/kyve.team.v1beta1.MsgClawback";
  value: {
    authority: string;
    id: string;
    clawback: string;
  };
}
export interface MsgCreateTeamVestingAccountAminoType extends AminoMsg {
  type: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount";
  value: {
    authority: string;
    total_allocation: string;
    commencement: string;
  };
}
export interface MsgClaimAuthorityRewardsAminoType extends AminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimAuthorityRewards";
  value: {
    authority: string;
    amount: string;
    recipient: string;
  };
}
export interface MsgClaimAccountRewardsAminoType extends AminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimAccountRewards";
  value: {
    authority: string;
    id: string;
    amount: string;
    recipient: string;
  };
}
export const AminoConverter = {
  "/kyve.team.v1beta1.MsgClaimUnlocked": {
    aminoType: "/kyve.team.v1beta1.MsgClaimUnlocked",
    toAmino: ({
      authority,
      id,
      amount,
      recipient
    }: MsgClaimUnlocked): MsgClaimUnlockedAminoType["value"] => {
      return {
        authority,
        id: id.toString(),
        amount: amount.toString(),
        recipient
      };
    },
    fromAmino: ({
      authority,
      id,
      amount,
      recipient
    }: MsgClaimUnlockedAminoType["value"]): MsgClaimUnlocked => {
      return {
        authority,
        id: Long.fromString(id),
        amount: Long.fromString(amount),
        recipient
      };
    }
  },
  "/kyve.team.v1beta1.MsgClawback": {
    aminoType: "/kyve.team.v1beta1.MsgClawback",
    toAmino: ({
      authority,
      id,
      clawback
    }: MsgClawback): MsgClawbackAminoType["value"] => {
      return {
        authority,
        id: id.toString(),
        clawback: clawback.toString()
      };
    },
    fromAmino: ({
      authority,
      id,
      clawback
    }: MsgClawbackAminoType["value"]): MsgClawback => {
      return {
        authority,
        id: Long.fromString(id),
        clawback: Long.fromString(clawback)
      };
    }
  },
  "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
    aminoType: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount",
    toAmino: ({
      authority,
      totalAllocation,
      commencement
    }: MsgCreateTeamVestingAccount): MsgCreateTeamVestingAccountAminoType["value"] => {
      return {
        authority,
        total_allocation: totalAllocation.toString(),
        commencement: commencement.toString()
      };
    },
    fromAmino: ({
      authority,
      total_allocation,
      commencement
    }: MsgCreateTeamVestingAccountAminoType["value"]): MsgCreateTeamVestingAccount => {
      return {
        authority,
        totalAllocation: Long.fromString(total_allocation),
        commencement: Long.fromString(commencement)
      };
    }
  },
  "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
    aminoType: "/kyve.team.v1beta1.MsgClaimAuthorityRewards",
    toAmino: ({
      authority,
      amount,
      recipient
    }: MsgClaimAuthorityRewards): MsgClaimAuthorityRewardsAminoType["value"] => {
      return {
        authority,
        amount: amount.toString(),
        recipient
      };
    },
    fromAmino: ({
      authority,
      amount,
      recipient
    }: MsgClaimAuthorityRewardsAminoType["value"]): MsgClaimAuthorityRewards => {
      return {
        authority,
        amount: Long.fromString(amount),
        recipient
      };
    }
  },
  "/kyve.team.v1beta1.MsgClaimAccountRewards": {
    aminoType: "/kyve.team.v1beta1.MsgClaimAccountRewards",
    toAmino: ({
      authority,
      id,
      amount,
      recipient
    }: MsgClaimAccountRewards): MsgClaimAccountRewardsAminoType["value"] => {
      return {
        authority,
        id: id.toString(),
        amount: amount.toString(),
        recipient
      };
    },
    fromAmino: ({
      authority,
      id,
      amount,
      recipient
    }: MsgClaimAccountRewardsAminoType["value"]): MsgClaimAccountRewards => {
      return {
        authority,
        id: Long.fromString(id),
        amount: Long.fromString(amount),
        recipient
      };
    }
  }
};