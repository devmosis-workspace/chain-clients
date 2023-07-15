import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight } from "../../helpers";
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
export declare const AminoConverter: {
    "/chainmain.nft_transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, classId, tokenIds, sender, receiver, timeoutHeight, timeoutTimestamp }: MsgTransfer) => MsgTransferAminoType["value"];
        fromAmino: ({ source_port, source_channel, class_id, token_ids, sender, receiver, timeout_height, timeout_timestamp }: MsgTransferAminoType["value"]) => MsgTransfer;
    };
};
