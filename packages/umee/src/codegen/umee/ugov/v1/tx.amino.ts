import { MsgGovUpdateMinGasPrice, MsgGovSetEmergencyGroup, MsgGovUpdateInflationParams } from "./tx";
export const AminoConverter = {
  "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
    aminoType: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
    toAmino: MsgGovUpdateMinGasPrice.toAmino,
    fromAmino: MsgGovUpdateMinGasPrice.fromAmino
  },
  "/umee.ugov.v1.MsgGovSetEmergencyGroup": {
    aminoType: "/umee.ugov.v1.MsgGovSetEmergencyGroup",
    toAmino: MsgGovSetEmergencyGroup.toAmino,
    fromAmino: MsgGovSetEmergencyGroup.fromAmino
  },
  "/umee.ugov.v1.MsgGovUpdateInflationParams": {
    aminoType: "/umee.ugov.v1.MsgGovUpdateInflationParams",
    toAmino: MsgGovUpdateInflationParams.toAmino,
    fromAmino: MsgGovUpdateInflationParams.fromAmino
  }
};