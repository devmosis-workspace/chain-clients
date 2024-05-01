import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const AminoConverter = {
  "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/quicksilver.tokenfactory.v1beta1.MsgMint": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/quicksilver.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  }
};