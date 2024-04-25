import { MsgRegisterClockContract, MsgUnregisterClockContract, MsgUnjailClockContract, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/juno.clock.v1.MsgRegisterClockContract": {
    aminoType: "/juno.clock.v1.MsgRegisterClockContract",
    toAmino: MsgRegisterClockContract.toAmino,
    fromAmino: MsgRegisterClockContract.fromAmino
  },
  "/juno.clock.v1.MsgUnregisterClockContract": {
    aminoType: "/juno.clock.v1.MsgUnregisterClockContract",
    toAmino: MsgUnregisterClockContract.toAmino,
    fromAmino: MsgUnregisterClockContract.fromAmino
  },
  "/juno.clock.v1.MsgUnjailClockContract": {
    aminoType: "/juno.clock.v1.MsgUnjailClockContract",
    toAmino: MsgUnjailClockContract.toAmino,
    fromAmino: MsgUnjailClockContract.fromAmino
  },
  "/juno.clock.v1.MsgUpdateParams": {
    aminoType: "/juno.clock.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};