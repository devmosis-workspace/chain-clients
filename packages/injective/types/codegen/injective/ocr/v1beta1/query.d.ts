import { Params, ParamsAmino, ParamsSDKType, FeedConfigInfo, FeedConfigInfoAmino, FeedConfigInfoSDKType, FeedConfig, FeedConfigAmino, FeedConfigSDKType, EpochAndRound, EpochAndRoundAmino, EpochAndRoundSDKType, Transmission, TransmissionAmino, TransmissionSDKType } from "./ocr";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/injective.ocr.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/injective.ocr.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryFeedConfigRequest {
    feedId: string;
}
export interface QueryFeedConfigRequestProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest";
    value: Uint8Array;
}
export interface QueryFeedConfigRequestAmino {
    feed_id: string;
}
export interface QueryFeedConfigRequestAminoMsg {
    type: "/injective.ocr.v1beta1.QueryFeedConfigRequest";
    value: QueryFeedConfigRequestAmino;
}
export interface QueryFeedConfigRequestSDKType {
    feed_id: string;
}
export interface QueryFeedConfigResponse {
    feedConfigInfo: FeedConfigInfo;
    feedConfig: FeedConfig;
}
export interface QueryFeedConfigResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse";
    value: Uint8Array;
}
export interface QueryFeedConfigResponseAmino {
    feed_config_info?: FeedConfigInfoAmino;
    feed_config?: FeedConfigAmino;
}
export interface QueryFeedConfigResponseAminoMsg {
    type: "/injective.ocr.v1beta1.QueryFeedConfigResponse";
    value: QueryFeedConfigResponseAmino;
}
export interface QueryFeedConfigResponseSDKType {
    feed_config_info: FeedConfigInfoSDKType;
    feed_config: FeedConfigSDKType;
}
export interface QueryFeedConfigInfoRequest {
    feedId: string;
}
export interface QueryFeedConfigInfoRequestProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest";
    value: Uint8Array;
}
export interface QueryFeedConfigInfoRequestAmino {
    feed_id: string;
}
export interface QueryFeedConfigInfoRequestAminoMsg {
    type: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest";
    value: QueryFeedConfigInfoRequestAmino;
}
export interface QueryFeedConfigInfoRequestSDKType {
    feed_id: string;
}
export interface QueryFeedConfigInfoResponse {
    feedConfigInfo: FeedConfigInfo;
    epochAndRound: EpochAndRound;
}
export interface QueryFeedConfigInfoResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse";
    value: Uint8Array;
}
export interface QueryFeedConfigInfoResponseAmino {
    feed_config_info?: FeedConfigInfoAmino;
    epoch_and_round?: EpochAndRoundAmino;
}
export interface QueryFeedConfigInfoResponseAminoMsg {
    type: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse";
    value: QueryFeedConfigInfoResponseAmino;
}
export interface QueryFeedConfigInfoResponseSDKType {
    feed_config_info: FeedConfigInfoSDKType;
    epoch_and_round: EpochAndRoundSDKType;
}
export interface QueryLatestRoundRequest {
    feedId: string;
}
export interface QueryLatestRoundRequestProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest";
    value: Uint8Array;
}
export interface QueryLatestRoundRequestAmino {
    feed_id: string;
}
export interface QueryLatestRoundRequestAminoMsg {
    type: "/injective.ocr.v1beta1.QueryLatestRoundRequest";
    value: QueryLatestRoundRequestAmino;
}
export interface QueryLatestRoundRequestSDKType {
    feed_id: string;
}
export interface QueryLatestRoundResponse {
    latestRoundId: bigint;
    data: Transmission;
}
export interface QueryLatestRoundResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse";
    value: Uint8Array;
}
export interface QueryLatestRoundResponseAmino {
    latest_round_id: string;
    data?: TransmissionAmino;
}
export interface QueryLatestRoundResponseAminoMsg {
    type: "/injective.ocr.v1beta1.QueryLatestRoundResponse";
    value: QueryLatestRoundResponseAmino;
}
export interface QueryLatestRoundResponseSDKType {
    latest_round_id: bigint;
    data: TransmissionSDKType;
}
export interface QueryLatestTransmissionDetailsRequest {
    feedId: string;
}
export interface QueryLatestTransmissionDetailsRequestProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest";
    value: Uint8Array;
}
export interface QueryLatestTransmissionDetailsRequestAmino {
    feed_id: string;
}
export interface QueryLatestTransmissionDetailsRequestAminoMsg {
    type: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest";
    value: QueryLatestTransmissionDetailsRequestAmino;
}
export interface QueryLatestTransmissionDetailsRequestSDKType {
    feed_id: string;
}
export interface QueryLatestTransmissionDetailsResponse {
    configDigest: Uint8Array;
    epochAndRound: EpochAndRound;
    data: Transmission;
}
export interface QueryLatestTransmissionDetailsResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse";
    value: Uint8Array;
}
export interface QueryLatestTransmissionDetailsResponseAmino {
    config_digest: Uint8Array;
    epoch_and_round?: EpochAndRoundAmino;
    data?: TransmissionAmino;
}
export interface QueryLatestTransmissionDetailsResponseAminoMsg {
    type: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse";
    value: QueryLatestTransmissionDetailsResponseAmino;
}
export interface QueryLatestTransmissionDetailsResponseSDKType {
    config_digest: Uint8Array;
    epoch_and_round: EpochAndRoundSDKType;
    data: TransmissionSDKType;
}
export interface QueryOwedAmountRequest {
    transmitter: string;
}
export interface QueryOwedAmountRequestProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest";
    value: Uint8Array;
}
export interface QueryOwedAmountRequestAmino {
    transmitter: string;
}
export interface QueryOwedAmountRequestAminoMsg {
    type: "/injective.ocr.v1beta1.QueryOwedAmountRequest";
    value: QueryOwedAmountRequestAmino;
}
export interface QueryOwedAmountRequestSDKType {
    transmitter: string;
}
export interface QueryOwedAmountResponse {
    amount: Coin;
}
export interface QueryOwedAmountResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse";
    value: Uint8Array;
}
export interface QueryOwedAmountResponseAmino {
    amount?: CoinAmino;
}
export interface QueryOwedAmountResponseAminoMsg {
    type: "/injective.ocr.v1beta1.QueryOwedAmountResponse";
    value: QueryOwedAmountResponseAmino;
}
export interface QueryOwedAmountResponseSDKType {
    amount: CoinSDKType;
}
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest";
    value: Uint8Array;
}
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.ocr.v1beta1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
}
export interface QueryModuleStateRequestSDKType {
}
export interface QueryModuleStateResponse {
    state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse";
    value: Uint8Array;
}
export interface QueryModuleStateResponseAmino {
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.ocr.v1beta1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryFeedConfigRequest: {
    typeUrl: string;
    encode(message: QueryFeedConfigRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeedConfigRequest;
    fromPartial(object: Partial<QueryFeedConfigRequest>): QueryFeedConfigRequest;
    fromAmino(object: QueryFeedConfigRequestAmino): QueryFeedConfigRequest;
    toAmino(message: QueryFeedConfigRequest): QueryFeedConfigRequestAmino;
    fromAminoMsg(object: QueryFeedConfigRequestAminoMsg): QueryFeedConfigRequest;
    fromProtoMsg(message: QueryFeedConfigRequestProtoMsg): QueryFeedConfigRequest;
    toProto(message: QueryFeedConfigRequest): Uint8Array;
    toProtoMsg(message: QueryFeedConfigRequest): QueryFeedConfigRequestProtoMsg;
};
export declare const QueryFeedConfigResponse: {
    typeUrl: string;
    encode(message: QueryFeedConfigResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeedConfigResponse;
    fromPartial(object: Partial<QueryFeedConfigResponse>): QueryFeedConfigResponse;
    fromAmino(object: QueryFeedConfigResponseAmino): QueryFeedConfigResponse;
    toAmino(message: QueryFeedConfigResponse): QueryFeedConfigResponseAmino;
    fromAminoMsg(object: QueryFeedConfigResponseAminoMsg): QueryFeedConfigResponse;
    fromProtoMsg(message: QueryFeedConfigResponseProtoMsg): QueryFeedConfigResponse;
    toProto(message: QueryFeedConfigResponse): Uint8Array;
    toProtoMsg(message: QueryFeedConfigResponse): QueryFeedConfigResponseProtoMsg;
};
export declare const QueryFeedConfigInfoRequest: {
    typeUrl: string;
    encode(message: QueryFeedConfigInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeedConfigInfoRequest;
    fromPartial(object: Partial<QueryFeedConfigInfoRequest>): QueryFeedConfigInfoRequest;
    fromAmino(object: QueryFeedConfigInfoRequestAmino): QueryFeedConfigInfoRequest;
    toAmino(message: QueryFeedConfigInfoRequest): QueryFeedConfigInfoRequestAmino;
    fromAminoMsg(object: QueryFeedConfigInfoRequestAminoMsg): QueryFeedConfigInfoRequest;
    fromProtoMsg(message: QueryFeedConfigInfoRequestProtoMsg): QueryFeedConfigInfoRequest;
    toProto(message: QueryFeedConfigInfoRequest): Uint8Array;
    toProtoMsg(message: QueryFeedConfigInfoRequest): QueryFeedConfigInfoRequestProtoMsg;
};
export declare const QueryFeedConfigInfoResponse: {
    typeUrl: string;
    encode(message: QueryFeedConfigInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryFeedConfigInfoResponse;
    fromPartial(object: Partial<QueryFeedConfigInfoResponse>): QueryFeedConfigInfoResponse;
    fromAmino(object: QueryFeedConfigInfoResponseAmino): QueryFeedConfigInfoResponse;
    toAmino(message: QueryFeedConfigInfoResponse): QueryFeedConfigInfoResponseAmino;
    fromAminoMsg(object: QueryFeedConfigInfoResponseAminoMsg): QueryFeedConfigInfoResponse;
    fromProtoMsg(message: QueryFeedConfigInfoResponseProtoMsg): QueryFeedConfigInfoResponse;
    toProto(message: QueryFeedConfigInfoResponse): Uint8Array;
    toProtoMsg(message: QueryFeedConfigInfoResponse): QueryFeedConfigInfoResponseProtoMsg;
};
export declare const QueryLatestRoundRequest: {
    typeUrl: string;
    encode(message: QueryLatestRoundRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestRoundRequest;
    fromPartial(object: Partial<QueryLatestRoundRequest>): QueryLatestRoundRequest;
    fromAmino(object: QueryLatestRoundRequestAmino): QueryLatestRoundRequest;
    toAmino(message: QueryLatestRoundRequest): QueryLatestRoundRequestAmino;
    fromAminoMsg(object: QueryLatestRoundRequestAminoMsg): QueryLatestRoundRequest;
    fromProtoMsg(message: QueryLatestRoundRequestProtoMsg): QueryLatestRoundRequest;
    toProto(message: QueryLatestRoundRequest): Uint8Array;
    toProtoMsg(message: QueryLatestRoundRequest): QueryLatestRoundRequestProtoMsg;
};
export declare const QueryLatestRoundResponse: {
    typeUrl: string;
    encode(message: QueryLatestRoundResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestRoundResponse;
    fromPartial(object: Partial<QueryLatestRoundResponse>): QueryLatestRoundResponse;
    fromAmino(object: QueryLatestRoundResponseAmino): QueryLatestRoundResponse;
    toAmino(message: QueryLatestRoundResponse): QueryLatestRoundResponseAmino;
    fromAminoMsg(object: QueryLatestRoundResponseAminoMsg): QueryLatestRoundResponse;
    fromProtoMsg(message: QueryLatestRoundResponseProtoMsg): QueryLatestRoundResponse;
    toProto(message: QueryLatestRoundResponse): Uint8Array;
    toProtoMsg(message: QueryLatestRoundResponse): QueryLatestRoundResponseProtoMsg;
};
export declare const QueryLatestTransmissionDetailsRequest: {
    typeUrl: string;
    encode(message: QueryLatestTransmissionDetailsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestTransmissionDetailsRequest;
    fromPartial(object: Partial<QueryLatestTransmissionDetailsRequest>): QueryLatestTransmissionDetailsRequest;
    fromAmino(object: QueryLatestTransmissionDetailsRequestAmino): QueryLatestTransmissionDetailsRequest;
    toAmino(message: QueryLatestTransmissionDetailsRequest): QueryLatestTransmissionDetailsRequestAmino;
    fromAminoMsg(object: QueryLatestTransmissionDetailsRequestAminoMsg): QueryLatestTransmissionDetailsRequest;
    fromProtoMsg(message: QueryLatestTransmissionDetailsRequestProtoMsg): QueryLatestTransmissionDetailsRequest;
    toProto(message: QueryLatestTransmissionDetailsRequest): Uint8Array;
    toProtoMsg(message: QueryLatestTransmissionDetailsRequest): QueryLatestTransmissionDetailsRequestProtoMsg;
};
export declare const QueryLatestTransmissionDetailsResponse: {
    typeUrl: string;
    encode(message: QueryLatestTransmissionDetailsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestTransmissionDetailsResponse;
    fromPartial(object: Partial<QueryLatestTransmissionDetailsResponse>): QueryLatestTransmissionDetailsResponse;
    fromAmino(object: QueryLatestTransmissionDetailsResponseAmino): QueryLatestTransmissionDetailsResponse;
    toAmino(message: QueryLatestTransmissionDetailsResponse): QueryLatestTransmissionDetailsResponseAmino;
    fromAminoMsg(object: QueryLatestTransmissionDetailsResponseAminoMsg): QueryLatestTransmissionDetailsResponse;
    fromProtoMsg(message: QueryLatestTransmissionDetailsResponseProtoMsg): QueryLatestTransmissionDetailsResponse;
    toProto(message: QueryLatestTransmissionDetailsResponse): Uint8Array;
    toProtoMsg(message: QueryLatestTransmissionDetailsResponse): QueryLatestTransmissionDetailsResponseProtoMsg;
};
export declare const QueryOwedAmountRequest: {
    typeUrl: string;
    encode(message: QueryOwedAmountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwedAmountRequest;
    fromPartial(object: Partial<QueryOwedAmountRequest>): QueryOwedAmountRequest;
    fromAmino(object: QueryOwedAmountRequestAmino): QueryOwedAmountRequest;
    toAmino(message: QueryOwedAmountRequest): QueryOwedAmountRequestAmino;
    fromAminoMsg(object: QueryOwedAmountRequestAminoMsg): QueryOwedAmountRequest;
    fromProtoMsg(message: QueryOwedAmountRequestProtoMsg): QueryOwedAmountRequest;
    toProto(message: QueryOwedAmountRequest): Uint8Array;
    toProtoMsg(message: QueryOwedAmountRequest): QueryOwedAmountRequestProtoMsg;
};
export declare const QueryOwedAmountResponse: {
    typeUrl: string;
    encode(message: QueryOwedAmountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwedAmountResponse;
    fromPartial(object: Partial<QueryOwedAmountResponse>): QueryOwedAmountResponse;
    fromAmino(object: QueryOwedAmountResponseAmino): QueryOwedAmountResponse;
    toAmino(message: QueryOwedAmountResponse): QueryOwedAmountResponseAmino;
    fromAminoMsg(object: QueryOwedAmountResponseAminoMsg): QueryOwedAmountResponse;
    fromProtoMsg(message: QueryOwedAmountResponseProtoMsg): QueryOwedAmountResponse;
    toProto(message: QueryOwedAmountResponse): Uint8Array;
    toProtoMsg(message: QueryOwedAmountResponse): QueryOwedAmountResponseProtoMsg;
};
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
