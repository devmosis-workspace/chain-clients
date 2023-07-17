import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgIBCSend */
export interface MsgIBCSend {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: Long;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: Long;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
/** MsgIBCSend */
export interface MsgIBCSendSDKType {
    channel: string;
    timeout_height: Long;
    timeout_timestamp: Long;
    data: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
    channel: string;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelSDKType {
    channel: string;
}
export declare const MsgIBCSend: {
    encode(message: MsgIBCSend, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgIBCSend;
    fromPartial(object: Partial<MsgIBCSend>): MsgIBCSend;
};
export declare const MsgIBCCloseChannel: {
    encode(message: MsgIBCCloseChannel, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgIBCCloseChannel;
    fromPartial(object: Partial<MsgIBCCloseChannel>): MsgIBCCloseChannel;
};
