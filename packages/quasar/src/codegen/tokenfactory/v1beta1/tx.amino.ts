import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const AminoConverter = {
  "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgCreateDenom": {
    aminoType: "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgCreateDenom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino
  },
  "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgMint": {
    aminoType: "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgBurn": {
    aminoType: "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgChangeAdmin": {
    aminoType: "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgChangeAdmin",
    toAmino: MsgChangeAdmin.toAmino,
    fromAmino: MsgChangeAdmin.fromAmino
  },
  "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgSetDenomMetadata": {
    aminoType: "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgSetDenomMetadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino
  }
};