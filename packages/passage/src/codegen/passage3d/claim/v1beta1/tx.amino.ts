import { MsgClaim } from "./tx";
export const AminoConverter = {
  "/passage3d.claim.v1beta1.MsgClaim": {
    aminoType: "/passage3d.claim.v1beta1.MsgClaim",
    toAmino: MsgClaim.toAmino,
    fromAmino: MsgClaim.fromAmino
  }
};