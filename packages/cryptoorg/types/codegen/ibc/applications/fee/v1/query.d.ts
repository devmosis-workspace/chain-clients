import { PageRequest, PageRequestSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelSDKType } from "./genesis";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** block height at which to query */
    queryHeight: Long;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestSDKType {
    pagination?: PageRequestSDKType;
    query_height: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
    /** list of identified fees for incentivized packets */
    incentivizedPackets: IdentifiedPacketFees[];
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseSDKType {
    incentivized_packets: IdentifiedPacketFeesSDKType[];
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packetId?: PacketId;
    /** block height at which to query */
    queryHeight: Long;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestSDKType {
    packet_id?: PacketIdSDKType;
    query_height: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
    /** the identified fees for the incentivized packet */
    incentivizedPacket?: IdentifiedPacketFees;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseSDKType {
    incentivized_packet?: IdentifiedPacketFeesSDKType;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    portId: string;
    channelId: string;
    /** Height to query at */
    queryHeight: Long;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestSDKType {
    pagination?: PageRequestSDKType;
    port_id: string;
    channel_id: string;
    query_height: Long;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
    /** Map of all incentivized_packets */
    incentivizedPackets: IdentifiedPacketFees[];
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseSDKType {
    incentivized_packets: IdentifiedPacketFeesSDKType[];
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestSDKType {
    packet_id?: PacketIdSDKType;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
    /** the total packet receive fees */
    recvFees: Coin[];
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseSDKType {
    recv_fees: CoinSDKType[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestSDKType {
    packet_id?: PacketIdSDKType;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
    /** the total packet acknowledgement fees */
    ackFees: Coin[];
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseSDKType {
    ack_fees: CoinSDKType[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
    /** the packet identifier for the associated fees */
    packetId?: PacketId;
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestSDKType {
    packet_id?: PacketIdSDKType;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
    /** the total packet timeout fees */
    timeoutFees: Coin[];
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseSDKType {
    timeout_fees: CoinSDKType[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestSDKType {
    channel_id: string;
    relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
    /** the payee address to which packet fees are paid out */
    payeeAddress: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseSDKType {
    payee_address: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestSDKType {
    channel_id: string;
    relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
    /** the counterparty payee address used to compensate forward relaying */
    counterpartyPayee: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseSDKType {
    counterparty_payee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** block height at which to query */
    queryHeight: Long;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestSDKType {
    pagination?: PageRequestSDKType;
    query_height: Long;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseSDKType {
    fee_enabled_channels: FeeEnabledChannelSDKType[];
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestSDKType {
    port_id: string;
    channel_id: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
    /** boolean flag representing the fee enabled channel status */
    feeEnabled: boolean;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseSDKType {
    fee_enabled: boolean;
}
export declare const QueryIncentivizedPacketsRequest: {
    encode(message: QueryIncentivizedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentivizedPacketsRequest;
    fromPartial(object: Partial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest;
};
export declare const QueryIncentivizedPacketsResponse: {
    encode(message: QueryIncentivizedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentivizedPacketsResponse;
    fromPartial(object: Partial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse;
};
export declare const QueryIncentivizedPacketRequest: {
    encode(message: QueryIncentivizedPacketRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentivizedPacketRequest;
    fromPartial(object: Partial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest;
};
export declare const QueryIncentivizedPacketResponse: {
    encode(message: QueryIncentivizedPacketResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentivizedPacketResponse;
    fromPartial(object: Partial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse;
};
export declare const QueryIncentivizedPacketsForChannelRequest: {
    encode(message: QueryIncentivizedPacketsForChannelRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest;
    fromPartial(object: Partial<QueryIncentivizedPacketsForChannelRequest>): QueryIncentivizedPacketsForChannelRequest;
};
export declare const QueryIncentivizedPacketsForChannelResponse: {
    encode(message: QueryIncentivizedPacketsForChannelResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse;
    fromPartial(object: Partial<QueryIncentivizedPacketsForChannelResponse>): QueryIncentivizedPacketsForChannelResponse;
};
export declare const QueryTotalRecvFeesRequest: {
    encode(message: QueryTotalRecvFeesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalRecvFeesRequest;
    fromPartial(object: Partial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest;
};
export declare const QueryTotalRecvFeesResponse: {
    encode(message: QueryTotalRecvFeesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalRecvFeesResponse;
    fromPartial(object: Partial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse;
};
export declare const QueryTotalAckFeesRequest: {
    encode(message: QueryTotalAckFeesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalAckFeesRequest;
    fromPartial(object: Partial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest;
};
export declare const QueryTotalAckFeesResponse: {
    encode(message: QueryTotalAckFeesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalAckFeesResponse;
    fromPartial(object: Partial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse;
};
export declare const QueryTotalTimeoutFeesRequest: {
    encode(message: QueryTotalTimeoutFeesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalTimeoutFeesRequest;
    fromPartial(object: Partial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest;
};
export declare const QueryTotalTimeoutFeesResponse: {
    encode(message: QueryTotalTimeoutFeesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalTimeoutFeesResponse;
    fromPartial(object: Partial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse;
};
export declare const QueryPayeeRequest: {
    encode(message: QueryPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPayeeRequest;
    fromPartial(object: Partial<QueryPayeeRequest>): QueryPayeeRequest;
};
export declare const QueryPayeeResponse: {
    encode(message: QueryPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPayeeResponse;
    fromPartial(object: Partial<QueryPayeeResponse>): QueryPayeeResponse;
};
export declare const QueryCounterpartyPayeeRequest: {
    encode(message: QueryCounterpartyPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCounterpartyPayeeRequest;
    fromPartial(object: Partial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest;
};
export declare const QueryCounterpartyPayeeResponse: {
    encode(message: QueryCounterpartyPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCounterpartyPayeeResponse;
    fromPartial(object: Partial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse;
};
export declare const QueryFeeEnabledChannelsRequest: {
    encode(message: QueryFeeEnabledChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeEnabledChannelsRequest;
    fromPartial(object: Partial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest;
};
export declare const QueryFeeEnabledChannelsResponse: {
    encode(message: QueryFeeEnabledChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeEnabledChannelsResponse;
    fromPartial(object: Partial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse;
};
export declare const QueryFeeEnabledChannelRequest: {
    encode(message: QueryFeeEnabledChannelRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeEnabledChannelRequest;
    fromPartial(object: Partial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest;
};
export declare const QueryFeeEnabledChannelResponse: {
    encode(message: QueryFeeEnabledChannelResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeeEnabledChannelResponse;
    fromPartial(object: Partial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse;
};
