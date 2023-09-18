import { MsgMintTokens, MsgBurnTokens } from "./tx";
export const AminoConverter = {
  "/em.liquidityprovider.v1.MsgMintTokens": {
    aminoType: "/em.liquidityprovider.v1.MsgMintTokens",
    toAmino: MsgMintTokens.toAmino,
    fromAmino: MsgMintTokens.fromAmino
  },
  "/em.liquidityprovider.v1.MsgBurnTokens": {
    aminoType: "/em.liquidityprovider.v1.MsgBurnTokens",
    toAmino: MsgBurnTokens.toAmino,
    fromAmino: MsgBurnTokens.fromAmino
  }
};