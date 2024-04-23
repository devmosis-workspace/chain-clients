import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Stream, StreamAmino, StreamSDKType } from "./stream";
import { BinaryWriter } from "../../binary";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsRequest";
    value: Uint8Array;
}
export interface ModuleToDistributeCoinsRequestAmino {
}
export interface ModuleToDistributeCoinsRequestAminoMsg {
    type: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsRequest";
    value: ModuleToDistributeCoinsRequestAmino;
}
export interface ModuleToDistributeCoinsRequestSDKType {
}
export interface ModuleToDistributeCoinsResponse {
    /** Coins that have yet to be distributed */
    coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsResponse";
    value: Uint8Array;
}
export interface ModuleToDistributeCoinsResponseAmino {
    /** Coins that have yet to be distributed */
    coins?: CoinAmino[];
}
export interface ModuleToDistributeCoinsResponseAminoMsg {
    type: "/dymensionxyz.dymension.streamer.ModuleToDistributeCoinsResponse";
    value: ModuleToDistributeCoinsResponseAmino;
}
export interface ModuleToDistributeCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface StreamByIDRequest {
    /** Gague ID being queried */
    id: bigint;
}
export interface StreamByIDRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.StreamByIDRequest";
    value: Uint8Array;
}
export interface StreamByIDRequestAmino {
    /** Gague ID being queried */
    id?: string;
}
export interface StreamByIDRequestAminoMsg {
    type: "/dymensionxyz.dymension.streamer.StreamByIDRequest";
    value: StreamByIDRequestAmino;
}
export interface StreamByIDRequestSDKType {
    id: bigint;
}
export interface StreamByIDResponse {
    /** Stream that corresponds to provided gague ID */
    stream?: Stream;
}
export interface StreamByIDResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.StreamByIDResponse";
    value: Uint8Array;
}
export interface StreamByIDResponseAmino {
    /** Stream that corresponds to provided gague ID */
    stream?: StreamAmino;
}
export interface StreamByIDResponseAminoMsg {
    type: "/dymensionxyz.dymension.streamer.StreamByIDResponse";
    value: StreamByIDResponseAmino;
}
export interface StreamByIDResponseSDKType {
    stream?: StreamSDKType;
}
export interface StreamsRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface StreamsRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.StreamsRequest";
    value: Uint8Array;
}
export interface StreamsRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface StreamsRequestAminoMsg {
    type: "/dymensionxyz.dymension.streamer.StreamsRequest";
    value: StreamsRequestAmino;
}
export interface StreamsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface StreamsResponse {
    /** Upcoming and active streams */
    data: Stream[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface StreamsResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.StreamsResponse";
    value: Uint8Array;
}
export interface StreamsResponseAmino {
    /** Upcoming and active streams */
    data?: StreamAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface StreamsResponseAminoMsg {
    type: "/dymensionxyz.dymension.streamer.StreamsResponse";
    value: StreamsResponseAmino;
}
export interface StreamsResponseSDKType {
    data: StreamSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ActiveStreamsRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveStreamsRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.ActiveStreamsRequest";
    value: Uint8Array;
}
export interface ActiveStreamsRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface ActiveStreamsRequestAminoMsg {
    type: "/dymensionxyz.dymension.streamer.ActiveStreamsRequest";
    value: ActiveStreamsRequestAmino;
}
export interface ActiveStreamsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface ActiveStreamsResponse {
    /** Active gagues only */
    data: Stream[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveStreamsResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.ActiveStreamsResponse";
    value: Uint8Array;
}
export interface ActiveStreamsResponseAmino {
    /** Active gagues only */
    data?: StreamAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface ActiveStreamsResponseAminoMsg {
    type: "/dymensionxyz.dymension.streamer.ActiveStreamsResponse";
    value: ActiveStreamsResponseAmino;
}
export interface ActiveStreamsResponseSDKType {
    data: StreamSDKType[];
    pagination?: PageResponseSDKType;
}
export interface UpcomingStreamsRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingStreamsRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.UpcomingStreamsRequest";
    value: Uint8Array;
}
export interface UpcomingStreamsRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface UpcomingStreamsRequestAminoMsg {
    type: "/dymensionxyz.dymension.streamer.UpcomingStreamsRequest";
    value: UpcomingStreamsRequestAmino;
}
export interface UpcomingStreamsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface UpcomingStreamsResponse {
    /** Streams whose distribution is upcoming */
    data: Stream[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingStreamsResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.UpcomingStreamsResponse";
    value: Uint8Array;
}
export interface UpcomingStreamsResponseAmino {
    /** Streams whose distribution is upcoming */
    data?: StreamAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface UpcomingStreamsResponseAminoMsg {
    type: "/dymensionxyz.dymension.streamer.UpcomingStreamsResponse";
    value: UpcomingStreamsResponseAmino;
}
export interface UpcomingStreamsResponseSDKType {
    data: StreamSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const ModuleToDistributeCoinsRequest: {
    typeUrl: string;
    encode(_: ModuleToDistributeCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ModuleToDistributeCoinsRequest;
    fromPartial(_: Partial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest;
    fromAmino(_: ModuleToDistributeCoinsRequestAmino): ModuleToDistributeCoinsRequest;
    toAmino(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAmino;
    fromAminoMsg(object: ModuleToDistributeCoinsRequestAminoMsg): ModuleToDistributeCoinsRequest;
    fromProtoMsg(message: ModuleToDistributeCoinsRequestProtoMsg): ModuleToDistributeCoinsRequest;
    toProto(message: ModuleToDistributeCoinsRequest): Uint8Array;
    toProtoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestProtoMsg;
};
export declare const ModuleToDistributeCoinsResponse: {
    typeUrl: string;
    encode(message: ModuleToDistributeCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ModuleToDistributeCoinsResponse;
    fromPartial(object: Partial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse;
    fromAmino(object: ModuleToDistributeCoinsResponseAmino): ModuleToDistributeCoinsResponse;
    toAmino(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAmino;
    fromAminoMsg(object: ModuleToDistributeCoinsResponseAminoMsg): ModuleToDistributeCoinsResponse;
    fromProtoMsg(message: ModuleToDistributeCoinsResponseProtoMsg): ModuleToDistributeCoinsResponse;
    toProto(message: ModuleToDistributeCoinsResponse): Uint8Array;
    toProtoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseProtoMsg;
};
export declare const StreamByIDRequest: {
    typeUrl: string;
    encode(message: StreamByIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StreamByIDRequest;
    fromPartial(object: Partial<StreamByIDRequest>): StreamByIDRequest;
    fromAmino(object: StreamByIDRequestAmino): StreamByIDRequest;
    toAmino(message: StreamByIDRequest): StreamByIDRequestAmino;
    fromAminoMsg(object: StreamByIDRequestAminoMsg): StreamByIDRequest;
    fromProtoMsg(message: StreamByIDRequestProtoMsg): StreamByIDRequest;
    toProto(message: StreamByIDRequest): Uint8Array;
    toProtoMsg(message: StreamByIDRequest): StreamByIDRequestProtoMsg;
};
export declare const StreamByIDResponse: {
    typeUrl: string;
    encode(message: StreamByIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StreamByIDResponse;
    fromPartial(object: Partial<StreamByIDResponse>): StreamByIDResponse;
    fromAmino(object: StreamByIDResponseAmino): StreamByIDResponse;
    toAmino(message: StreamByIDResponse): StreamByIDResponseAmino;
    fromAminoMsg(object: StreamByIDResponseAminoMsg): StreamByIDResponse;
    fromProtoMsg(message: StreamByIDResponseProtoMsg): StreamByIDResponse;
    toProto(message: StreamByIDResponse): Uint8Array;
    toProtoMsg(message: StreamByIDResponse): StreamByIDResponseProtoMsg;
};
export declare const StreamsRequest: {
    typeUrl: string;
    encode(message: StreamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StreamsRequest;
    fromPartial(object: Partial<StreamsRequest>): StreamsRequest;
    fromAmino(object: StreamsRequestAmino): StreamsRequest;
    toAmino(message: StreamsRequest): StreamsRequestAmino;
    fromAminoMsg(object: StreamsRequestAminoMsg): StreamsRequest;
    fromProtoMsg(message: StreamsRequestProtoMsg): StreamsRequest;
    toProto(message: StreamsRequest): Uint8Array;
    toProtoMsg(message: StreamsRequest): StreamsRequestProtoMsg;
};
export declare const StreamsResponse: {
    typeUrl: string;
    encode(message: StreamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StreamsResponse;
    fromPartial(object: Partial<StreamsResponse>): StreamsResponse;
    fromAmino(object: StreamsResponseAmino): StreamsResponse;
    toAmino(message: StreamsResponse): StreamsResponseAmino;
    fromAminoMsg(object: StreamsResponseAminoMsg): StreamsResponse;
    fromProtoMsg(message: StreamsResponseProtoMsg): StreamsResponse;
    toProto(message: StreamsResponse): Uint8Array;
    toProtoMsg(message: StreamsResponse): StreamsResponseProtoMsg;
};
export declare const ActiveStreamsRequest: {
    typeUrl: string;
    encode(message: ActiveStreamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ActiveStreamsRequest;
    fromPartial(object: Partial<ActiveStreamsRequest>): ActiveStreamsRequest;
    fromAmino(object: ActiveStreamsRequestAmino): ActiveStreamsRequest;
    toAmino(message: ActiveStreamsRequest): ActiveStreamsRequestAmino;
    fromAminoMsg(object: ActiveStreamsRequestAminoMsg): ActiveStreamsRequest;
    fromProtoMsg(message: ActiveStreamsRequestProtoMsg): ActiveStreamsRequest;
    toProto(message: ActiveStreamsRequest): Uint8Array;
    toProtoMsg(message: ActiveStreamsRequest): ActiveStreamsRequestProtoMsg;
};
export declare const ActiveStreamsResponse: {
    typeUrl: string;
    encode(message: ActiveStreamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ActiveStreamsResponse;
    fromPartial(object: Partial<ActiveStreamsResponse>): ActiveStreamsResponse;
    fromAmino(object: ActiveStreamsResponseAmino): ActiveStreamsResponse;
    toAmino(message: ActiveStreamsResponse): ActiveStreamsResponseAmino;
    fromAminoMsg(object: ActiveStreamsResponseAminoMsg): ActiveStreamsResponse;
    fromProtoMsg(message: ActiveStreamsResponseProtoMsg): ActiveStreamsResponse;
    toProto(message: ActiveStreamsResponse): Uint8Array;
    toProtoMsg(message: ActiveStreamsResponse): ActiveStreamsResponseProtoMsg;
};
export declare const UpcomingStreamsRequest: {
    typeUrl: string;
    encode(message: UpcomingStreamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpcomingStreamsRequest;
    fromPartial(object: Partial<UpcomingStreamsRequest>): UpcomingStreamsRequest;
    fromAmino(object: UpcomingStreamsRequestAmino): UpcomingStreamsRequest;
    toAmino(message: UpcomingStreamsRequest): UpcomingStreamsRequestAmino;
    fromAminoMsg(object: UpcomingStreamsRequestAminoMsg): UpcomingStreamsRequest;
    fromProtoMsg(message: UpcomingStreamsRequestProtoMsg): UpcomingStreamsRequest;
    toProto(message: UpcomingStreamsRequest): Uint8Array;
    toProtoMsg(message: UpcomingStreamsRequest): UpcomingStreamsRequestProtoMsg;
};
export declare const UpcomingStreamsResponse: {
    typeUrl: string;
    encode(message: UpcomingStreamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpcomingStreamsResponse;
    fromPartial(object: Partial<UpcomingStreamsResponse>): UpcomingStreamsResponse;
    fromAmino(object: UpcomingStreamsResponseAmino): UpcomingStreamsResponse;
    toAmino(message: UpcomingStreamsResponse): UpcomingStreamsResponseAmino;
    fromAminoMsg(object: UpcomingStreamsResponseAminoMsg): UpcomingStreamsResponse;
    fromProtoMsg(message: UpcomingStreamsResponseProtoMsg): UpcomingStreamsResponse;
    toProto(message: UpcomingStreamsResponse): Uint8Array;
    toProtoMsg(message: UpcomingStreamsResponse): UpcomingStreamsResponseProtoMsg;
};
