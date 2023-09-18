import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/injective.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "/injective.tokenfactory.v1beta1.MsgCreateDenom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgMint": {
    aminoType: "/injective.tokenfactory.v1beta1.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "/injective.tokenfactory.v1beta1.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "/injective.tokenfactory.v1beta1.MsgChangeAdmin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  },
  "/injective.tokenfactory.v1beta1.MsgUpdateParams": {
    aminoType: "/injective.tokenfactory.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};