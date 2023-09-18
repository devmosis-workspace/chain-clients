import { MsgClaimUSDXMintingReward, MsgClaimHardReward, MsgClaimDelegatorReward, MsgClaimSwapReward, MsgClaimSavingsReward, MsgClaimEarnReward } from "./tx";
export declare const AminoConverter: {
    "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
        aminoType: string;
        toAmino: (message: MsgClaimUSDXMintingReward) => import("./tx").MsgClaimUSDXMintingRewardAmino;
        fromAmino: (object: import("./tx").MsgClaimUSDXMintingRewardAmino) => MsgClaimUSDXMintingReward;
    };
    "/kava.incentive.v1beta1.MsgClaimHardReward": {
        aminoType: string;
        toAmino: (message: MsgClaimHardReward) => import("./tx").MsgClaimHardRewardAmino;
        fromAmino: (object: import("./tx").MsgClaimHardRewardAmino) => MsgClaimHardReward;
    };
    "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
        aminoType: string;
        toAmino: (message: MsgClaimDelegatorReward) => import("./tx").MsgClaimDelegatorRewardAmino;
        fromAmino: (object: import("./tx").MsgClaimDelegatorRewardAmino) => MsgClaimDelegatorReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSwapReward": {
        aminoType: string;
        toAmino: (message: MsgClaimSwapReward) => import("./tx").MsgClaimSwapRewardAmino;
        fromAmino: (object: import("./tx").MsgClaimSwapRewardAmino) => MsgClaimSwapReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
        aminoType: string;
        toAmino: (message: MsgClaimSavingsReward) => import("./tx").MsgClaimSavingsRewardAmino;
        fromAmino: (object: import("./tx").MsgClaimSavingsRewardAmino) => MsgClaimSavingsReward;
    };
    "/kava.incentive.v1beta1.MsgClaimEarnReward": {
        aminoType: string;
        toAmino: (message: MsgClaimEarnReward) => import("./tx").MsgClaimEarnRewardAmino;
        fromAmino: (object: import("./tx").MsgClaimEarnRewardAmino) => MsgClaimEarnReward;
    };
};
