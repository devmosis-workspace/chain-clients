import { MsgGovUpdateMinGasPrice } from "./tx";
export const AminoConverter = {
  "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
    aminoType: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
    toAmino: MsgGovUpdateMinGasPrice.toAmino,
    fromAmino: MsgGovUpdateMinGasPrice.fromAmino
  }
};