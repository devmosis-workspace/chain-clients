import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../ibc/core/client/v1/client";
import { Fee, FeeSDKType } from "../../feerefunder/fee";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgTransfer {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** the tokens to be transferred */
    token?: Coin;
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
    memo: string;
    fee?: Fee;
}
export interface MsgTransferSDKType {
    source_port: string;
    source_channel: string;
    token?: CoinSDKType;
    sender: string;
    receiver: string;
    timeout_height?: HeightSDKType;
    timeout_timestamp: Long;
    memo: string;
    fee?: FeeSDKType;
}
/**
 * MsgTransferResponse is the modified response type for
 * ibc-go MsgTransfer.
 */
export interface MsgTransferResponse {
    /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
    sequenceId: Long;
    /** channel src channel on neutron side trasaction was submitted from */
    channel: string;
}
/**
 * MsgTransferResponse is the modified response type for
 * ibc-go MsgTransfer.
 */
export interface MsgTransferResponseSDKType {
    sequence_id: Long;
    channel: string;
}
export declare const MsgTransfer: {
    encode(message: MsgTransfer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransfer;
    fromPartial(object: Partial<MsgTransfer>): MsgTransfer;
};
export declare const MsgTransferResponse: {
    encode(message: MsgTransferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransferResponse;
    fromPartial(object: Partial<MsgTransferResponse>): MsgTransferResponse;
};
