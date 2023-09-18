import { MsgClaim, MsgBond, MsgBeginUnbonding, MsgEmergencyUnbond, MsgSponsor, MsgGovSetParams, MsgGovCreatePrograms } from "./tx";
export const AminoConverter = {
  "/umee.incentive.v1.MsgClaim": {
    aminoType: "/umee.incentive.v1.MsgClaim",
    toAmino: MsgClaim.toAmino,
    fromAmino: MsgClaim.fromAmino
  },
  "/umee.incentive.v1.MsgBond": {
    aminoType: "/umee.incentive.v1.MsgBond",
    toAmino: MsgBond.toAmino,
    fromAmino: MsgBond.fromAmino
  },
  "/umee.incentive.v1.MsgBeginUnbonding": {
    aminoType: "/umee.incentive.v1.MsgBeginUnbonding",
    toAmino: MsgBeginUnbonding.toAmino,
    fromAmino: MsgBeginUnbonding.fromAmino
  },
  "/umee.incentive.v1.MsgEmergencyUnbond": {
    aminoType: "/umee.incentive.v1.MsgEmergencyUnbond",
    toAmino: MsgEmergencyUnbond.toAmino,
    fromAmino: MsgEmergencyUnbond.fromAmino
  },
  "/umee.incentive.v1.MsgSponsor": {
    aminoType: "/umee.incentive.v1.MsgSponsor",
    toAmino: MsgSponsor.toAmino,
    fromAmino: MsgSponsor.fromAmino
  },
  "/umee.incentive.v1.MsgGovSetParams": {
    aminoType: "/umee.incentive.v1.MsgGovSetParams",
    toAmino: MsgGovSetParams.toAmino,
    fromAmino: MsgGovSetParams.fromAmino
  },
  "/umee.incentive.v1.MsgGovCreatePrograms": {
    aminoType: "/umee.incentive.v1.MsgGovCreatePrograms",
    toAmino: MsgGovCreatePrograms.toAmino,
    fromAmino: MsgGovCreatePrograms.fromAmino
  }
};