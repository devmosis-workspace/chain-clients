import { MsgIncreaseMintable, MsgDecreaseMintable, MsgRevokeLiquidityProvider, MsgSetInflation } from "./tx";
export const AminoConverter = {
  "/em.issuer.v1.MsgIncreaseMintable": {
    aminoType: "/em.issuer.v1.MsgIncreaseMintable",
    toAmino: MsgIncreaseMintable.toAmino,
    fromAmino: MsgIncreaseMintable.fromAmino
  },
  "/em.issuer.v1.MsgDecreaseMintable": {
    aminoType: "/em.issuer.v1.MsgDecreaseMintable",
    toAmino: MsgDecreaseMintable.toAmino,
    fromAmino: MsgDecreaseMintable.fromAmino
  },
  "/em.issuer.v1.MsgRevokeLiquidityProvider": {
    aminoType: "/em.issuer.v1.MsgRevokeLiquidityProvider",
    toAmino: MsgRevokeLiquidityProvider.toAmino,
    fromAmino: MsgRevokeLiquidityProvider.fromAmino
  },
  "/em.issuer.v1.MsgSetInflation": {
    aminoType: "/em.issuer.v1.MsgSetInflation",
    toAmino: MsgSetInflation.toAmino,
    fromAmino: MsgSetInflation.fromAmino
  }
};