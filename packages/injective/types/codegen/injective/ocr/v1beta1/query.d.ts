import { Params, ParamsSDKType, FeedConfigInfo, FeedConfigInfoSDKType, FeedConfig, FeedConfigSDKType, EpochAndRound, EpochAndRoundSDKType, Transmission, TransmissionSDKType } from "./ocr";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryFeedConfigRequest {
    feedId: string;
}
export interface QueryFeedConfigRequestSDKType {
    feed_id: string;
}
export interface QueryFeedConfigResponse {
    feedConfigInfo?: FeedConfigInfo;
    feedConfig?: FeedConfig;
}
export interface QueryFeedConfigResponseSDKType {
    feed_config_info?: FeedConfigInfoSDKType;
    feed_config?: FeedConfigSDKType;
}
export interface QueryFeedConfigInfoRequest {
    feedId: string;
}
export interface QueryFeedConfigInfoRequestSDKType {
    feed_id: string;
}
export interface QueryFeedConfigInfoResponse {
    feedConfigInfo?: FeedConfigInfo;
    epochAndRound?: EpochAndRound;
}
export interface QueryFeedConfigInfoResponseSDKType {
    feed_config_info?: FeedConfigInfoSDKType;
    epoch_and_round?: EpochAndRoundSDKType;
}
export interface QueryLatestRoundRequest {
    feedId: string;
}
export interface QueryLatestRoundRequestSDKType {
    feed_id: string;
}
export interface QueryLatestRoundResponse {
    latestRoundId: Long;
    data?: Transmission;
}
export interface QueryLatestRoundResponseSDKType {
    latest_round_id: Long;
    data?: TransmissionSDKType;
}
export interface QueryLatestTransmissionDetailsRequest {
    feedId: string;
}
export interface QueryLatestTransmissionDetailsRequestSDKType {
    feed_id: string;
}
export interface QueryLatestTransmissionDetailsResponse {
    configDigest: Uint8Array;
    epochAndRound?: EpochAndRound;
    data?: Transmission;
}
export interface QueryLatestTransmissionDetailsResponseSDKType {
    config_digest: Uint8Array;
    epoch_and_round?: EpochAndRoundSDKType;
    data?: TransmissionSDKType;
}
export interface QueryOwedAmountRequest {
    transmitter: string;
}
export interface QueryOwedAmountRequestSDKType {
    transmitter: string;
}
export interface QueryOwedAmountResponse {
    amount?: Coin;
}
export interface QueryOwedAmountResponseSDKType {
    amount?: CoinSDKType;
}
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestSDKType {
}
export interface QueryModuleStateResponse {
    state?: GenesisState;
}
export interface QueryModuleStateResponseSDKType {
    state?: GenesisStateSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryFeedConfigRequest: {
    encode(message: QueryFeedConfigRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeedConfigRequest;
    fromPartial(object: Partial<QueryFeedConfigRequest>): QueryFeedConfigRequest;
};
export declare const QueryFeedConfigResponse: {
    encode(message: QueryFeedConfigResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeedConfigResponse;
    fromPartial(object: Partial<QueryFeedConfigResponse>): QueryFeedConfigResponse;
};
export declare const QueryFeedConfigInfoRequest: {
    encode(message: QueryFeedConfigInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeedConfigInfoRequest;
    fromPartial(object: Partial<QueryFeedConfigInfoRequest>): QueryFeedConfigInfoRequest;
};
export declare const QueryFeedConfigInfoResponse: {
    encode(message: QueryFeedConfigInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryFeedConfigInfoResponse;
    fromPartial(object: Partial<QueryFeedConfigInfoResponse>): QueryFeedConfigInfoResponse;
};
export declare const QueryLatestRoundRequest: {
    encode(message: QueryLatestRoundRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLatestRoundRequest;
    fromPartial(object: Partial<QueryLatestRoundRequest>): QueryLatestRoundRequest;
};
export declare const QueryLatestRoundResponse: {
    encode(message: QueryLatestRoundResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLatestRoundResponse;
    fromPartial(object: Partial<QueryLatestRoundResponse>): QueryLatestRoundResponse;
};
export declare const QueryLatestTransmissionDetailsRequest: {
    encode(message: QueryLatestTransmissionDetailsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLatestTransmissionDetailsRequest;
    fromPartial(object: Partial<QueryLatestTransmissionDetailsRequest>): QueryLatestTransmissionDetailsRequest;
};
export declare const QueryLatestTransmissionDetailsResponse: {
    encode(message: QueryLatestTransmissionDetailsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLatestTransmissionDetailsResponse;
    fromPartial(object: Partial<QueryLatestTransmissionDetailsResponse>): QueryLatestTransmissionDetailsResponse;
};
export declare const QueryOwedAmountRequest: {
    encode(message: QueryOwedAmountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOwedAmountRequest;
    fromPartial(object: Partial<QueryOwedAmountRequest>): QueryOwedAmountRequest;
};
export declare const QueryOwedAmountResponse: {
    encode(message: QueryOwedAmountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOwedAmountResponse;
    fromPartial(object: Partial<QueryOwedAmountResponse>): QueryOwedAmountResponse;
};
export declare const QueryModuleStateRequest: {
    encode(_: QueryModuleStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
};
export declare const QueryModuleStateResponse: {
    encode(message: QueryModuleStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
};
