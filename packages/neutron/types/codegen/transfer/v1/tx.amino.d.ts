import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight } from "../../helpers";
import { MsgTransfer } from "./tx";
export interface MsgTransferAminoType extends AminoMsg {
    type: "/neutron.transfer.MsgTransfer";
    value: {
        source_port: string;
        source_channel: string;
        token: {
            denom: string;
            amount: string;
        };
        sender: string;
        receiver: string;
        timeout_height: AminoHeight;
        timeout_timestamp: string;
        memo: string;
        fee: {
            recv_fee: {
                denom: string;
                amount: string;
            }[];
            ack_fee: {
                denom: string;
                amount: string;
            }[];
            timeout_fee: {
                denom: string;
                amount: string;
            }[];
        };
    };
}
export declare const AminoConverter: {
    "/neutron.transfer.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo, fee }: MsgTransfer) => MsgTransferAminoType["value"];
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo, fee }: MsgTransferAminoType["value"]) => MsgTransfer;
    };
};
