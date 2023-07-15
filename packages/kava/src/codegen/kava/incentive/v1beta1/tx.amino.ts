import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimUSDXMintingReward, MsgClaimHardReward, MsgClaimDelegatorReward, MsgClaimSwapReward, MsgClaimSavingsReward, MsgClaimEarnReward } from "./tx";
export interface MsgClaimUSDXMintingRewardAminoType extends AminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward";
  value: {
    sender: string;
    multiplier_name: string;
  };
}
export interface MsgClaimHardRewardAminoType extends AminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimHardReward";
  value: {
    sender: string;
    denoms_to_claim: {
      denom: string;
      multiplier_name: string;
    }[];
  };
}
export interface MsgClaimDelegatorRewardAminoType extends AminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimDelegatorReward";
  value: {
    sender: string;
    denoms_to_claim: {
      denom: string;
      multiplier_name: string;
    }[];
  };
}
export interface MsgClaimSwapRewardAminoType extends AminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimSwapReward";
  value: {
    sender: string;
    denoms_to_claim: {
      denom: string;
      multiplier_name: string;
    }[];
  };
}
export interface MsgClaimSavingsRewardAminoType extends AminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimSavingsReward";
  value: {
    sender: string;
    denoms_to_claim: {
      denom: string;
      multiplier_name: string;
    }[];
  };
}
export interface MsgClaimEarnRewardAminoType extends AminoMsg {
  type: "/kava.incentive.v1beta1.MsgClaimEarnReward";
  value: {
    sender: string;
    denoms_to_claim: {
      denom: string;
      multiplier_name: string;
    }[];
  };
}
export const AminoConverter = {
  "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
    toAmino: ({
      sender,
      multiplierName
    }: MsgClaimUSDXMintingReward): MsgClaimUSDXMintingRewardAminoType["value"] => {
      return {
        sender,
        multiplier_name: multiplierName
      };
    },
    fromAmino: ({
      sender,
      multiplier_name
    }: MsgClaimUSDXMintingRewardAminoType["value"]): MsgClaimUSDXMintingReward => {
      return {
        sender,
        multiplierName: multiplier_name
      };
    }
  },
  "/kava.incentive.v1beta1.MsgClaimHardReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimHardReward",
    toAmino: ({
      sender,
      denomsToClaim
    }: MsgClaimHardReward): MsgClaimHardRewardAminoType["value"] => {
      return {
        sender,
        denoms_to_claim: denomsToClaim.map(el0 => ({
          denom: el0.denom,
          multiplier_name: el0.multiplierName
        }))
      };
    },
    fromAmino: ({
      sender,
      denoms_to_claim
    }: MsgClaimHardRewardAminoType["value"]): MsgClaimHardReward => {
      return {
        sender,
        denomsToClaim: denoms_to_claim.map(el0 => ({
          denom: el0.denom,
          multiplierName: el0.multiplier_name
        }))
      };
    }
  },
  "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
    toAmino: ({
      sender,
      denomsToClaim
    }: MsgClaimDelegatorReward): MsgClaimDelegatorRewardAminoType["value"] => {
      return {
        sender,
        denoms_to_claim: denomsToClaim.map(el0 => ({
          denom: el0.denom,
          multiplier_name: el0.multiplierName
        }))
      };
    },
    fromAmino: ({
      sender,
      denoms_to_claim
    }: MsgClaimDelegatorRewardAminoType["value"]): MsgClaimDelegatorReward => {
      return {
        sender,
        denomsToClaim: denoms_to_claim.map(el0 => ({
          denom: el0.denom,
          multiplierName: el0.multiplier_name
        }))
      };
    }
  },
  "/kava.incentive.v1beta1.MsgClaimSwapReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimSwapReward",
    toAmino: ({
      sender,
      denomsToClaim
    }: MsgClaimSwapReward): MsgClaimSwapRewardAminoType["value"] => {
      return {
        sender,
        denoms_to_claim: denomsToClaim.map(el0 => ({
          denom: el0.denom,
          multiplier_name: el0.multiplierName
        }))
      };
    },
    fromAmino: ({
      sender,
      denoms_to_claim
    }: MsgClaimSwapRewardAminoType["value"]): MsgClaimSwapReward => {
      return {
        sender,
        denomsToClaim: denoms_to_claim.map(el0 => ({
          denom: el0.denom,
          multiplierName: el0.multiplier_name
        }))
      };
    }
  },
  "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
    toAmino: ({
      sender,
      denomsToClaim
    }: MsgClaimSavingsReward): MsgClaimSavingsRewardAminoType["value"] => {
      return {
        sender,
        denoms_to_claim: denomsToClaim.map(el0 => ({
          denom: el0.denom,
          multiplier_name: el0.multiplierName
        }))
      };
    },
    fromAmino: ({
      sender,
      denoms_to_claim
    }: MsgClaimSavingsRewardAminoType["value"]): MsgClaimSavingsReward => {
      return {
        sender,
        denomsToClaim: denoms_to_claim.map(el0 => ({
          denom: el0.denom,
          multiplierName: el0.multiplier_name
        }))
      };
    }
  },
  "/kava.incentive.v1beta1.MsgClaimEarnReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimEarnReward",
    toAmino: ({
      sender,
      denomsToClaim
    }: MsgClaimEarnReward): MsgClaimEarnRewardAminoType["value"] => {
      return {
        sender,
        denoms_to_claim: denomsToClaim.map(el0 => ({
          denom: el0.denom,
          multiplier_name: el0.multiplierName
        }))
      };
    },
    fromAmino: ({
      sender,
      denoms_to_claim
    }: MsgClaimEarnRewardAminoType["value"]): MsgClaimEarnReward => {
      return {
        sender,
        denomsToClaim: denoms_to_claim.map(el0 => ({
          denom: el0.denom,
          multiplierName: el0.multiplier_name
        }))
      };
    }
  }
};