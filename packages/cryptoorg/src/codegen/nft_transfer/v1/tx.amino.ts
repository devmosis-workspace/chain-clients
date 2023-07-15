import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault, Long } from "../../helpers";
import { MsgTransfer } from "./tx";
export interface MsgTransferAminoType extends AminoMsg {
  type: "/chainmain.nft_transfer.v1.MsgTransfer";
  value: {
    source_port: string;
    source_channel: string;
    class_id: string;
    token_ids: string[];
    sender: string;
    receiver: string;
    timeout_height: AminoHeight;
    timeout_timestamp: string;
  };
}
export const AminoConverter = {
  "/chainmain.nft_transfer.v1.MsgTransfer": {
    aminoType: "/chainmain.nft_transfer.v1.MsgTransfer",
    toAmino: ({
      sourcePort,
      sourceChannel,
      classId,
      tokenIds,
      sender,
      receiver,
      timeoutHeight,
      timeoutTimestamp
    }: MsgTransfer): MsgTransferAminoType["value"] => {
      return {
        source_port: sourcePort,
        source_channel: sourceChannel,
        class_id: classId,
        token_ids: tokenIds,
        sender,
        receiver,
        timeout_height: timeoutHeight ? {
          revision_height: omitDefault(timeoutHeight.revisionHeight)?.toString(),
          revision_number: omitDefault(timeoutHeight.revisionNumber)?.toString()
        } : {},
        timeout_timestamp: timeoutTimestamp.toString()
      };
    },
    fromAmino: ({
      source_port,
      source_channel,
      class_id,
      token_ids,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp
    }: MsgTransferAminoType["value"]): MsgTransfer => {
      return {
        sourcePort: source_port,
        sourceChannel: source_channel,
        classId: class_id,
        tokenIds: token_ids,
        sender,
        receiver,
        timeoutHeight: timeout_height ? {
          revisionHeight: Long.fromString(timeout_height.revision_height || "0", true),
          revisionNumber: Long.fromString(timeout_height.revision_number || "0", true)
        } : undefined,
        timeoutTimestamp: Long.fromString(timeout_timestamp)
      };
    }
  }
};