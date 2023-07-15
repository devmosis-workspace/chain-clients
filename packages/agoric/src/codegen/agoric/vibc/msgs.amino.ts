import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault, Long } from "../../helpers";
import { MsgSendPacket } from "./msgs";
export interface MsgSendPacketAminoType extends AminoMsg {
  type: "/agoric.vibc.MsgSendPacket";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: AminoHeight;
      timeout_timestamp: string;
    };
    sender: Uint8Array;
  };
}
export const AminoConverter = {
  "/agoric.vibc.MsgSendPacket": {
    aminoType: "/agoric.vibc.MsgSendPacket",
    toAmino: ({
      packet,
      sender
    }: MsgSendPacket): MsgSendPacketAminoType["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: omitDefault(packet.timeoutHeight.revisionHeight)?.toString(),
            revision_number: omitDefault(packet.timeoutHeight.revisionNumber)?.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        sender
      };
    },
    fromAmino: ({
      packet,
      sender
    }: MsgSendPacketAminoType["value"]): MsgSendPacket => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: Long.fromString(packet.timeout_timestamp)
        },
        sender
      };
    }
  }
};