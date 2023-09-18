import { MsgCreateStaker, MsgUpdateMetadata, MsgUpdateCommission, MsgClaimCommissionRewards, MsgJoinPool, MsgLeavePool, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/kyve.stakers.v1beta1.MsgCreateStaker": {
        aminoType: string;
        toAmino: (message: MsgCreateStaker) => import("./tx").MsgCreateStakerAmino;
        fromAmino: (object: import("./tx").MsgCreateStakerAmino) => MsgCreateStaker;
    };
    "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateMetadata) => import("./tx").MsgUpdateMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateMetadataAmino) => MsgUpdateMetadata;
    };
    "/kyve.stakers.v1beta1.MsgUpdateCommission": {
        aminoType: string;
        toAmino: (message: MsgUpdateCommission) => import("./tx").MsgUpdateCommissionAmino;
        fromAmino: (object: import("./tx").MsgUpdateCommissionAmino) => MsgUpdateCommission;
    };
    "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
        aminoType: string;
        toAmino: (message: MsgClaimCommissionRewards) => import("./tx").MsgClaimCommissionRewardsAmino;
        fromAmino: (object: import("./tx").MsgClaimCommissionRewardsAmino) => MsgClaimCommissionRewards;
    };
    "/kyve.stakers.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: (message: MsgJoinPool) => import("./tx").MsgJoinPoolAmino;
        fromAmino: (object: import("./tx").MsgJoinPoolAmino) => MsgJoinPool;
    };
    "/kyve.stakers.v1beta1.MsgLeavePool": {
        aminoType: string;
        toAmino: (message: MsgLeavePool) => import("./tx").MsgLeavePoolAmino;
        fromAmino: (object: import("./tx").MsgLeavePoolAmino) => MsgLeavePool;
    };
    "/kyve.stakers.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
