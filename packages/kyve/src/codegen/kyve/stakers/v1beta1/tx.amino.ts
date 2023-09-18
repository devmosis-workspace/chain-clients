import { MsgCreateStaker, MsgUpdateMetadata, MsgUpdateCommission, MsgClaimCommissionRewards, MsgJoinPool, MsgLeavePool, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/kyve.stakers.v1beta1.MsgCreateStaker": {
    aminoType: "/kyve.stakers.v1beta1.MsgCreateStaker",
    toAmino: MsgCreateStaker.toAmino,
    fromAmino: MsgCreateStaker.fromAmino
  },
  "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
    aminoType: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
    toAmino: MsgUpdateMetadata.toAmino,
    fromAmino: MsgUpdateMetadata.fromAmino
  },
  "/kyve.stakers.v1beta1.MsgUpdateCommission": {
    aminoType: "/kyve.stakers.v1beta1.MsgUpdateCommission",
    toAmino: MsgUpdateCommission.toAmino,
    fromAmino: MsgUpdateCommission.fromAmino
  },
  "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
    aminoType: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards",
    toAmino: MsgClaimCommissionRewards.toAmino,
    fromAmino: MsgClaimCommissionRewards.fromAmino
  },
  "/kyve.stakers.v1beta1.MsgJoinPool": {
    aminoType: "/kyve.stakers.v1beta1.MsgJoinPool",
    toAmino: MsgJoinPool.toAmino,
    fromAmino: MsgJoinPool.fromAmino
  },
  "/kyve.stakers.v1beta1.MsgLeavePool": {
    aminoType: "/kyve.stakers.v1beta1.MsgLeavePool",
    toAmino: MsgLeavePool.toAmino,
    fromAmino: MsgLeavePool.fromAmino
  },
  "/kyve.stakers.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.stakers.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};