import { MsgCreateFunder, MsgUpdateFunder, MsgFundPool, MsgDefundPool, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/kyve.funders.v1beta1.MsgCreateFunder": {
    aminoType: "/kyve.funders.v1beta1.MsgCreateFunder",
    toAmino: MsgCreateFunder.toAmino,
    fromAmino: MsgCreateFunder.fromAmino
  },
  "/kyve.funders.v1beta1.MsgUpdateFunder": {
    aminoType: "/kyve.funders.v1beta1.MsgUpdateFunder",
    toAmino: MsgUpdateFunder.toAmino,
    fromAmino: MsgUpdateFunder.fromAmino
  },
  "/kyve.funders.v1beta1.MsgFundPool": {
    aminoType: "/kyve.funders.v1beta1.MsgFundPool",
    toAmino: MsgFundPool.toAmino,
    fromAmino: MsgFundPool.fromAmino
  },
  "/kyve.funders.v1beta1.MsgDefundPool": {
    aminoType: "/kyve.funders.v1beta1.MsgDefundPool",
    toAmino: MsgDefundPool.toAmino,
    fromAmino: MsgDefundPool.fromAmino
  },
  "/kyve.funders.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.funders.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};