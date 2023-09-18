import { MsgSendPacket } from "./msgs";
export const AminoConverter = {
  "/agoric.vibc.MsgSendPacket": {
    aminoType: "/agoric.vibc.MsgSendPacket",
    toAmino: MsgSendPacket.toAmino,
    fromAmino: MsgSendPacket.fromAmino
  }
};