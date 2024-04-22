import { MsgScheduleAxelarCorkRequest, MsgRelayAxelarCorkRequest, MsgBumpAxelarCorkGasRequest, MsgCancelAxelarCorkRequest } from "./tx";
export const AminoConverter = {
  "/axelarcork.v1.MsgScheduleAxelarCorkRequest": {
    aminoType: "/axelarcork.v1.MsgScheduleAxelarCorkRequest",
    toAmino: MsgScheduleAxelarCorkRequest.toAmino,
    fromAmino: MsgScheduleAxelarCorkRequest.fromAmino
  },
  "/axelarcork.v1.MsgRelayAxelarCorkRequest": {
    aminoType: "/axelarcork.v1.MsgRelayAxelarCorkRequest",
    toAmino: MsgRelayAxelarCorkRequest.toAmino,
    fromAmino: MsgRelayAxelarCorkRequest.fromAmino
  },
  "/axelarcork.v1.MsgBumpAxelarCorkGasRequest": {
    aminoType: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest",
    toAmino: MsgBumpAxelarCorkGasRequest.toAmino,
    fromAmino: MsgBumpAxelarCorkGasRequest.fromAmino
  },
  "/axelarcork.v1.MsgCancelAxelarCorkRequest": {
    aminoType: "/axelarcork.v1.MsgCancelAxelarCorkRequest",
    toAmino: MsgCancelAxelarCorkRequest.toAmino,
    fromAmino: MsgCancelAxelarCorkRequest.fromAmino
  }
};