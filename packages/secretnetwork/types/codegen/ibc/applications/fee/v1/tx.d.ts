import { Fee, FeeSDKType, PacketFee, PacketFeeSDKType } from "./fee";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayeeSDKType {
    port_id: string;
    channel_id: string;
    relayer: string;
    payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponseSDKType {
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterpartyPayee: string;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeSDKType {
    port_id: string;
    channel_id: string;
    relayer: string;
    counterparty_payee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponseSDKType {
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: Fee;
    /** the source port unique identifier */
    sourcePortId: string;
    /** the source channel unique identifer */
    sourceChannelId: string;
    /** account address to refund fee if necessary */
    signer: string;
    /** optional list of relayers permitted to the receive packet fees */
    relayers: string[];
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFeeSDKType {
    fee?: FeeSDKType;
    source_port_id: string;
    source_channel_id: string;
    signer: string;
    relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponseSDKType {
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
    /** the packet fee associated with a particular IBC packet */
    packetFee?: PacketFee;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsyncSDKType {
    packet_id?: PacketIdSDKType;
    packet_fee?: PacketFeeSDKType;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponseSDKType {
}
export declare const MsgRegisterPayee: {
    encode(message: MsgRegisterPayee, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterPayee;
    fromPartial(object: Partial<MsgRegisterPayee>): MsgRegisterPayee;
};
export declare const MsgRegisterPayeeResponse: {
    encode(_: MsgRegisterPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterPayeeResponse;
    fromPartial(_: Partial<MsgRegisterPayeeResponse>): MsgRegisterPayeeResponse;
};
export declare const MsgRegisterCounterpartyPayee: {
    encode(message: MsgRegisterCounterpartyPayee, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterCounterpartyPayee;
    fromPartial(object: Partial<MsgRegisterCounterpartyPayee>): MsgRegisterCounterpartyPayee;
};
export declare const MsgRegisterCounterpartyPayeeResponse: {
    encode(_: MsgRegisterCounterpartyPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse;
    fromPartial(_: Partial<MsgRegisterCounterpartyPayeeResponse>): MsgRegisterCounterpartyPayeeResponse;
};
export declare const MsgPayPacketFee: {
    encode(message: MsgPayPacketFee, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgPayPacketFee;
    fromPartial(object: Partial<MsgPayPacketFee>): MsgPayPacketFee;
};
export declare const MsgPayPacketFeeResponse: {
    encode(_: MsgPayPacketFeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgPayPacketFeeResponse;
    fromPartial(_: Partial<MsgPayPacketFeeResponse>): MsgPayPacketFeeResponse;
};
export declare const MsgPayPacketFeeAsync: {
    encode(message: MsgPayPacketFeeAsync, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgPayPacketFeeAsync;
    fromPartial(object: Partial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync;
};
export declare const MsgPayPacketFeeAsyncResponse: {
    encode(_: MsgPayPacketFeeAsyncResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgPayPacketFeeAsyncResponse;
    fromPartial(_: Partial<MsgPayPacketFeeAsyncResponse>): MsgPayPacketFeeAsyncResponse;
};
