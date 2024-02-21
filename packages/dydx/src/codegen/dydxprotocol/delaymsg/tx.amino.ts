import { AminoMsg } from "@cosmjs/amino";
import { MsgDelayMessage } from "./tx";
export interface MsgDelayMessageAminoType extends AminoMsg {
  type: "/dydxprotocol.delaymsg.MsgDelayMessage";
  value: {
    authority: string;
    msg: {
      type_url: string;
      value: Uint8Array;
    };
    delay_blocks: number;
  };
}
export const AminoConverter = {
  "/dydxprotocol.delaymsg.MsgDelayMessage": {
    aminoType: "/dydxprotocol.delaymsg.MsgDelayMessage",
    toAmino: ({
      authority,
      msg,
      delayBlocks
    }: MsgDelayMessage): MsgDelayMessageAminoType["value"] => {
      return {
        authority,
        msg: {
          type_url: msg.typeUrl,
          value: msg.value
        },
        delay_blocks: delayBlocks
      };
    },
    fromAmino: ({
      authority,
      msg,
      delay_blocks
    }: MsgDelayMessageAminoType["value"]): MsgDelayMessage => {
      return {
        authority,
        msg: {
          typeUrl: msg.type_url,
          value: msg.value
        },
        delayBlocks: delay_blocks
      };
    }
  }
};