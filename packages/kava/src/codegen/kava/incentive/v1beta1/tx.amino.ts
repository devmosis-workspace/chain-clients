import { MsgClaimUSDXMintingReward, MsgClaimHardReward, MsgClaimDelegatorReward, MsgClaimSwapReward, MsgClaimSavingsReward, MsgClaimEarnReward } from "./tx";
export const AminoConverter = {
  "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
    toAmino: MsgClaimUSDXMintingReward.toAmino,
    fromAmino: MsgClaimUSDXMintingReward.fromAmino
  },
  "/kava.incentive.v1beta1.MsgClaimHardReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimHardReward",
    toAmino: MsgClaimHardReward.toAmino,
    fromAmino: MsgClaimHardReward.fromAmino
  },
  "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
    toAmino: MsgClaimDelegatorReward.toAmino,
    fromAmino: MsgClaimDelegatorReward.fromAmino
  },
  "/kava.incentive.v1beta1.MsgClaimSwapReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimSwapReward",
    toAmino: MsgClaimSwapReward.toAmino,
    fromAmino: MsgClaimSwapReward.fromAmino
  },
  "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
    toAmino: MsgClaimSavingsReward.toAmino,
    fromAmino: MsgClaimSavingsReward.fromAmino
  },
  "/kava.incentive.v1beta1.MsgClaimEarnReward": {
    aminoType: "/kava.incentive.v1beta1.MsgClaimEarnReward",
    toAmino: MsgClaimEarnReward.toAmino,
    fromAmino: MsgClaimEarnReward.fromAmino
  }
};