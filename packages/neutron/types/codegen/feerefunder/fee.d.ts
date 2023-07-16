import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
    /** the packet receive fee */
    recvFee: Coin[];
    /** the packet acknowledgement fee */
    ackFee: Coin[];
    /** the packet timeout fee */
    timeoutFee: Coin[];
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeSDKType {
    recv_fee: CoinSDKType[];
    ack_fee: CoinSDKType[];
    timeout_fee: CoinSDKType[];
}
export interface PacketID {
    channelId: string;
    portId: string;
    sequence: Long;
}
export interface PacketIDSDKType {
    channel_id: string;
    port_id: string;
    sequence: Long;
}
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Fee;
    fromPartial(object: Partial<Fee>): Fee;
};
export declare const PacketID: {
    encode(message: PacketID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PacketID;
    fromPartial(object: Partial<PacketID>): PacketID;
};
