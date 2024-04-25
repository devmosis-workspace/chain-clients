import { MsgCreatePool, MsgUpdatePool, MsgDisablePool, MsgEnablePool, MsgScheduleRuntimeUpgrade, MsgCancelRuntimeUpgrade, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/kyve.pool.v1beta1.MsgCreatePool": {
    aminoType: "/kyve.pool.v1beta1.MsgCreatePool",
    toAmino: MsgCreatePool.toAmino,
    fromAmino: MsgCreatePool.fromAmino
  },
  "/kyve.pool.v1beta1.MsgUpdatePool": {
    aminoType: "/kyve.pool.v1beta1.MsgUpdatePool",
    toAmino: MsgUpdatePool.toAmino,
    fromAmino: MsgUpdatePool.fromAmino
  },
  "/kyve.pool.v1beta1.MsgDisablePool": {
    aminoType: "/kyve.pool.v1beta1.MsgDisablePool",
    toAmino: MsgDisablePool.toAmino,
    fromAmino: MsgDisablePool.fromAmino
  },
  "/kyve.pool.v1beta1.MsgEnablePool": {
    aminoType: "/kyve.pool.v1beta1.MsgEnablePool",
    toAmino: MsgEnablePool.toAmino,
    fromAmino: MsgEnablePool.fromAmino
  },
  "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
    aminoType: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
    toAmino: MsgScheduleRuntimeUpgrade.toAmino,
    fromAmino: MsgScheduleRuntimeUpgrade.fromAmino
  },
  "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
    aminoType: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
    toAmino: MsgCancelRuntimeUpgrade.toAmino,
    fromAmino: MsgCancelRuntimeUpgrade.fromAmino
  },
  "/kyve.pool.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.pool.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};