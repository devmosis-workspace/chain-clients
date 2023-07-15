import { Height, HeightSDKType } from "../../ibc/core/client/v1/client";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgTransfer defines a msg to transfer non fungible tokens between
 * ICS721 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface MsgTransfer {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** the class_id of tokens to be transferred */
    classId: string;
    /** the non fungible tokens to be transferred */
    tokenIds: string[];
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight?: Height;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: Long;
}
/**
 * MsgTransfer defines a msg to transfer non fungible tokens between
 * ICS721 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface MsgTransferSDKType {
    source_port: string;
    source_channel: string;
    class_id: string;
    token_ids: string[];
    sender: string;
    receiver: string;
    timeout_height?: HeightSDKType;
    timeout_timestamp: Long;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {
}
export declare const MsgTransfer: {
    encode(message: MsgTransfer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransfer;
    fromPartial(object: Partial<MsgTransfer>): MsgTransfer;
};
export declare const MsgTransferResponse: {
    encode(_: MsgTransferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgTransferResponse;
    fromPartial(_: Partial<MsgTransferResponse>): MsgTransferResponse;
};
