import { MsgCreateDistribution, MsgCreateUserClaim, MsgRunDistribution } from "./tx";
export const AminoConverter = {
  "/sifnode.dispensation.v1.MsgCreateDistribution": {
    aminoType: "/sifnode.dispensation.v1.MsgCreateDistribution",
    toAmino: MsgCreateDistribution.toAmino,
    fromAmino: MsgCreateDistribution.fromAmino
  },
  "/sifnode.dispensation.v1.MsgCreateUserClaim": {
    aminoType: "/sifnode.dispensation.v1.MsgCreateUserClaim",
    toAmino: MsgCreateUserClaim.toAmino,
    fromAmino: MsgCreateUserClaim.fromAmino
  },
  "/sifnode.dispensation.v1.MsgRunDistribution": {
    aminoType: "/sifnode.dispensation.v1.MsgRunDistribution",
    toAmino: MsgRunDistribution.toAmino,
    fromAmino: MsgRunDistribution.fromAmino
  }
};