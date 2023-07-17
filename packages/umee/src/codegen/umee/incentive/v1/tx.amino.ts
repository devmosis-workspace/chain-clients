import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgClaim, MsgBond, MsgBeginUnbonding, MsgEmergencyUnbond, MsgSponsor, MsgGovSetParams, MsgGovCreatePrograms } from "./tx";
export interface MsgClaimAminoType extends AminoMsg {
  type: "/umee.incentive.v1.MsgClaim";
  value: {
    account: string;
  };
}
export interface MsgBondAminoType extends AminoMsg {
  type: "/umee.incentive.v1.MsgBond";
  value: {
    account: string;
    uToken: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBeginUnbondingAminoType extends AminoMsg {
  type: "/umee.incentive.v1.MsgBeginUnbonding";
  value: {
    account: string;
    uToken: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgEmergencyUnbondAminoType extends AminoMsg {
  type: "/umee.incentive.v1.MsgEmergencyUnbond";
  value: {
    account: string;
    uToken: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgSponsorAminoType extends AminoMsg {
  type: "/umee.incentive.v1.MsgSponsor";
  value: {
    sponsor: string;
    program: number;
  };
}
export interface MsgGovSetParamsAminoType extends AminoMsg {
  type: "/umee.incentive.v1.MsgGovSetParams";
  value: {
    authority: string;
    params: {
      max_unbondings: number;
      unbonding_duration: string;
      emergency_unbond_fee: string;
    };
  };
}
export interface MsgGovCreateProgramsAminoType extends AminoMsg {
  type: "/umee.incentive.v1.MsgGovCreatePrograms";
  value: {
    authority: string;
    programs: {
      ID: number;
      start_time: string;
      duration: string;
      uToken: string;
      funded: boolean;
      total_rewards: {
        denom: string;
        amount: string;
      };
      remaining_rewards: {
        denom: string;
        amount: string;
      };
    }[];
    from_community_fund: boolean;
  };
}
export const AminoConverter = {
  "/umee.incentive.v1.MsgClaim": {
    aminoType: "/umee.incentive.v1.MsgClaim",
    toAmino: ({
      account
    }: MsgClaim): MsgClaimAminoType["value"] => {
      return {
        account
      };
    },
    fromAmino: ({
      account
    }: MsgClaimAminoType["value"]): MsgClaim => {
      return {
        account
      };
    }
  },
  "/umee.incentive.v1.MsgBond": {
    aminoType: "/umee.incentive.v1.MsgBond",
    toAmino: ({
      account,
      uToken
    }: MsgBond): MsgBondAminoType["value"] => {
      return {
        account,
        uToken: {
          denom: uToken.denom,
          amount: Long.fromValue(uToken.amount).toString()
        }
      };
    },
    fromAmino: ({
      account,
      uToken
    }: MsgBondAminoType["value"]): MsgBond => {
      return {
        account,
        uToken: {
          denom: uToken.denom,
          amount: uToken.amount
        }
      };
    }
  },
  "/umee.incentive.v1.MsgBeginUnbonding": {
    aminoType: "/umee.incentive.v1.MsgBeginUnbonding",
    toAmino: ({
      account,
      uToken
    }: MsgBeginUnbonding): MsgBeginUnbondingAminoType["value"] => {
      return {
        account,
        uToken: {
          denom: uToken.denom,
          amount: Long.fromValue(uToken.amount).toString()
        }
      };
    },
    fromAmino: ({
      account,
      uToken
    }: MsgBeginUnbondingAminoType["value"]): MsgBeginUnbonding => {
      return {
        account,
        uToken: {
          denom: uToken.denom,
          amount: uToken.amount
        }
      };
    }
  },
  "/umee.incentive.v1.MsgEmergencyUnbond": {
    aminoType: "/umee.incentive.v1.MsgEmergencyUnbond",
    toAmino: ({
      account,
      uToken
    }: MsgEmergencyUnbond): MsgEmergencyUnbondAminoType["value"] => {
      return {
        account,
        uToken: {
          denom: uToken.denom,
          amount: Long.fromValue(uToken.amount).toString()
        }
      };
    },
    fromAmino: ({
      account,
      uToken
    }: MsgEmergencyUnbondAminoType["value"]): MsgEmergencyUnbond => {
      return {
        account,
        uToken: {
          denom: uToken.denom,
          amount: uToken.amount
        }
      };
    }
  },
  "/umee.incentive.v1.MsgSponsor": {
    aminoType: "/umee.incentive.v1.MsgSponsor",
    toAmino: ({
      sponsor,
      program
    }: MsgSponsor): MsgSponsorAminoType["value"] => {
      return {
        sponsor,
        program
      };
    },
    fromAmino: ({
      sponsor,
      program
    }: MsgSponsorAminoType["value"]): MsgSponsor => {
      return {
        sponsor,
        program
      };
    }
  },
  "/umee.incentive.v1.MsgGovSetParams": {
    aminoType: "/umee.incentive.v1.MsgGovSetParams",
    toAmino: ({
      authority,
      params
    }: MsgGovSetParams): MsgGovSetParamsAminoType["value"] => {
      return {
        authority,
        params: {
          max_unbondings: params.maxUnbondings,
          unbonding_duration: params.unbondingDuration.toString(),
          emergency_unbond_fee: params.emergencyUnbondFee
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgGovSetParamsAminoType["value"]): MsgGovSetParams => {
      return {
        authority,
        params: {
          maxUnbondings: params.max_unbondings,
          unbondingDuration: Long.fromString(params.unbonding_duration),
          emergencyUnbondFee: params.emergency_unbond_fee
        }
      };
    }
  },
  "/umee.incentive.v1.MsgGovCreatePrograms": {
    aminoType: "/umee.incentive.v1.MsgGovCreatePrograms",
    toAmino: ({
      authority,
      programs,
      fromCommunityFund
    }: MsgGovCreatePrograms): MsgGovCreateProgramsAminoType["value"] => {
      return {
        authority,
        programs: programs.map(el0 => ({
          ID: el0.ID,
          start_time: el0.startTime.toString(),
          duration: el0.duration.toString(),
          uToken: el0.uToken,
          funded: el0.funded,
          total_rewards: {
            denom: el0.totalRewards.denom,
            amount: Long.fromValue(el0.totalRewards.amount).toString()
          },
          remaining_rewards: {
            denom: el0.remainingRewards.denom,
            amount: Long.fromValue(el0.remainingRewards.amount).toString()
          }
        })),
        from_community_fund: fromCommunityFund
      };
    },
    fromAmino: ({
      authority,
      programs,
      from_community_fund
    }: MsgGovCreateProgramsAminoType["value"]): MsgGovCreatePrograms => {
      return {
        authority,
        programs: programs.map(el0 => ({
          ID: el0.ID,
          startTime: Long.fromString(el0.start_time),
          duration: Long.fromString(el0.duration),
          uToken: el0.uToken,
          funded: el0.funded,
          totalRewards: {
            denom: el0.total_rewards.denom,
            amount: el0.total_rewards.amount
          },
          remainingRewards: {
            denom: el0.remaining_rewards.denom,
            amount: el0.remaining_rewards.amount
          }
        })),
        fromCommunityFund: from_community_fund
      };
    }
  }
};