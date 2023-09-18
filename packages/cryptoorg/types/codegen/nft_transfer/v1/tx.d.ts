import { Height, HeightAmino, HeightSDKType } from "../../ibc/core/client/v1/client";
import { BinaryWriter } from "../../binary";
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
    timeoutHeight: Height;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: bigint;
}
export interface MsgTransferProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.MsgTransfer";
    value: Uint8Array;
}
/**
 * MsgTransfer defines a msg to transfer non fungible tokens between
 * ICS721 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface MsgTransferAmino {
    /** the port on which the packet will be sent */
    source_port: string;
    /** the channel by which the packet will be sent */
    source_channel: string;
    /** the class_id of tokens to be transferred */
    class_id: string;
    /** the non fungible tokens to be transferred */
    token_ids: string[];
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeout_height?: HeightAmino;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     */
    timeout_timestamp: string;
}
export interface MsgTransferAminoMsg {
    type: "/chainmain.nft_transfer.v1.MsgTransfer";
    value: MsgTransferAmino;
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
    timeout_height: HeightSDKType;
    timeout_timestamp: bigint;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {
}
export interface MsgTransferResponseProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.MsgTransferResponse";
    value: Uint8Array;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseAmino {
}
export interface MsgTransferResponseAminoMsg {
    type: "/chainmain.nft_transfer.v1.MsgTransferResponse";
    value: MsgTransferResponseAmino;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {
}
export declare const MsgTransfer: {
    typeUrl: string;
    encode(message: MsgTransfer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransfer;
    fromPartial(object: Partial<MsgTransfer>): MsgTransfer;
    fromAmino(object: MsgTransferAmino): MsgTransfer;
    toAmino(message: MsgTransfer): MsgTransferAmino;
    fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer;
    fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer;
    toProto(message: MsgTransfer): Uint8Array;
    toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg;
};
export declare const MsgTransferResponse: {
    typeUrl: string;
    encode(_: MsgTransferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferResponse;
    fromPartial(_: Partial<MsgTransferResponse>): MsgTransferResponse;
    fromAmino(_: MsgTransferResponseAmino): MsgTransferResponse;
    toAmino(_: MsgTransferResponse): MsgTransferResponseAmino;
    fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse;
    fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse;
    toProto(message: MsgTransferResponse): Uint8Array;
    toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg;
};
