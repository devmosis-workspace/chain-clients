import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight } from "../../helpers";
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
export declare const AminoConverter: {
    "/agoric.vibc.MsgSendPacket": {
        aminoType: string;
        toAmino: ({ packet, sender }: MsgSendPacket) => MsgSendPacketAminoType["value"];
        fromAmino: ({ packet, sender }: MsgSendPacketAminoType["value"]) => MsgSendPacket;
    };
};
