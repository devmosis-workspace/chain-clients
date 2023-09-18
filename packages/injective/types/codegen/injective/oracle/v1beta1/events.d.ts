import { PythPriceState, PythPriceStateAmino, PythPriceStateSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
export interface SetChainlinkPriceEvent {
    feedId: string;
    answer: string;
    timestamp: bigint;
}
export interface SetChainlinkPriceEventProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent";
    value: Uint8Array;
}
export interface SetChainlinkPriceEventAmino {
    feed_id: string;
    answer: string;
    timestamp: string;
}
export interface SetChainlinkPriceEventAminoMsg {
    type: "/injective.oracle.v1beta1.SetChainlinkPriceEvent";
    value: SetChainlinkPriceEventAmino;
}
export interface SetChainlinkPriceEventSDKType {
    feed_id: string;
    answer: string;
    timestamp: bigint;
}
/** Event type upon set ref */
export interface SetBandPriceEvent {
    relayer: string;
    symbol: string;
    price: string;
    resolveTime: bigint;
    requestId: bigint;
}
export interface SetBandPriceEventProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent";
    value: Uint8Array;
}
/** Event type upon set ref */
export interface SetBandPriceEventAmino {
    relayer: string;
    symbol: string;
    price: string;
    resolve_time: string;
    request_id: string;
}
export interface SetBandPriceEventAminoMsg {
    type: "/injective.oracle.v1beta1.SetBandPriceEvent";
    value: SetBandPriceEventAmino;
}
/** Event type upon set ref */
export interface SetBandPriceEventSDKType {
    relayer: string;
    symbol: string;
    price: string;
    resolve_time: bigint;
    request_id: bigint;
}
export interface SetBandIBCPriceEvent {
    relayer: string;
    symbols: string[];
    prices: string[];
    resolveTime: bigint;
    requestId: bigint;
    clientId: bigint;
}
export interface SetBandIBCPriceEventProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent";
    value: Uint8Array;
}
export interface SetBandIBCPriceEventAmino {
    relayer: string;
    symbols: string[];
    prices: string[];
    resolve_time: string;
    request_id: string;
    client_id: string;
}
export interface SetBandIBCPriceEventAminoMsg {
    type: "/injective.oracle.v1beta1.SetBandIBCPriceEvent";
    value: SetBandIBCPriceEventAmino;
}
export interface SetBandIBCPriceEventSDKType {
    relayer: string;
    symbols: string[];
    prices: string[];
    resolve_time: bigint;
    request_id: bigint;
    client_id: bigint;
}
export interface EventBandIBCAckSuccess {
    ackResult: string;
    clientId: bigint;
}
export interface EventBandIBCAckSuccessProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess";
    value: Uint8Array;
}
export interface EventBandIBCAckSuccessAmino {
    ack_result: string;
    client_id: string;
}
export interface EventBandIBCAckSuccessAminoMsg {
    type: "/injective.oracle.v1beta1.EventBandIBCAckSuccess";
    value: EventBandIBCAckSuccessAmino;
}
export interface EventBandIBCAckSuccessSDKType {
    ack_result: string;
    client_id: bigint;
}
export interface EventBandIBCAckError {
    ackError: string;
    clientId: bigint;
}
export interface EventBandIBCAckErrorProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError";
    value: Uint8Array;
}
export interface EventBandIBCAckErrorAmino {
    ack_error: string;
    client_id: string;
}
export interface EventBandIBCAckErrorAminoMsg {
    type: "/injective.oracle.v1beta1.EventBandIBCAckError";
    value: EventBandIBCAckErrorAmino;
}
export interface EventBandIBCAckErrorSDKType {
    ack_error: string;
    client_id: bigint;
}
export interface EventBandIBCResponseTimeout {
    clientId: bigint;
}
export interface EventBandIBCResponseTimeoutProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout";
    value: Uint8Array;
}
export interface EventBandIBCResponseTimeoutAmino {
    client_id: string;
}
export interface EventBandIBCResponseTimeoutAminoMsg {
    type: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout";
    value: EventBandIBCResponseTimeoutAmino;
}
export interface EventBandIBCResponseTimeoutSDKType {
    client_id: bigint;
}
export interface SetPriceFeedPriceEvent {
    relayer: string;
    base: string;
    quote: string;
    /** price defines the price of the oracle base and quote */
    price: string;
}
export interface SetPriceFeedPriceEventProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent";
    value: Uint8Array;
}
export interface SetPriceFeedPriceEventAmino {
    relayer: string;
    base: string;
    quote: string;
    /** price defines the price of the oracle base and quote */
    price: string;
}
export interface SetPriceFeedPriceEventAminoMsg {
    type: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent";
    value: SetPriceFeedPriceEventAmino;
}
export interface SetPriceFeedPriceEventSDKType {
    relayer: string;
    base: string;
    quote: string;
    price: string;
}
export interface SetProviderPriceEvent {
    provider: string;
    relayer: string;
    symbol: string;
    price: string;
}
export interface SetProviderPriceEventProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent";
    value: Uint8Array;
}
export interface SetProviderPriceEventAmino {
    provider: string;
    relayer: string;
    symbol: string;
    price: string;
}
export interface SetProviderPriceEventAminoMsg {
    type: "/injective.oracle.v1beta1.SetProviderPriceEvent";
    value: SetProviderPriceEventAmino;
}
export interface SetProviderPriceEventSDKType {
    provider: string;
    relayer: string;
    symbol: string;
    price: string;
}
export interface SetCoinbasePriceEvent {
    symbol: string;
    price: string;
    timestamp: bigint;
}
export interface SetCoinbasePriceEventProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent";
    value: Uint8Array;
}
export interface SetCoinbasePriceEventAmino {
    symbol: string;
    price: string;
    timestamp: string;
}
export interface SetCoinbasePriceEventAminoMsg {
    type: "/injective.oracle.v1beta1.SetCoinbasePriceEvent";
    value: SetCoinbasePriceEventAmino;
}
export interface SetCoinbasePriceEventSDKType {
    symbol: string;
    price: string;
    timestamp: bigint;
}
export interface EventSetPythPrices {
    prices: PythPriceState[];
}
export interface EventSetPythPricesProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.EventSetPythPrices";
    value: Uint8Array;
}
export interface EventSetPythPricesAmino {
    prices: PythPriceStateAmino[];
}
export interface EventSetPythPricesAminoMsg {
    type: "/injective.oracle.v1beta1.EventSetPythPrices";
    value: EventSetPythPricesAmino;
}
export interface EventSetPythPricesSDKType {
    prices: PythPriceStateSDKType[];
}
export declare const SetChainlinkPriceEvent: {
    typeUrl: string;
    encode(message: SetChainlinkPriceEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetChainlinkPriceEvent;
    fromPartial(object: Partial<SetChainlinkPriceEvent>): SetChainlinkPriceEvent;
    fromAmino(object: SetChainlinkPriceEventAmino): SetChainlinkPriceEvent;
    toAmino(message: SetChainlinkPriceEvent): SetChainlinkPriceEventAmino;
    fromAminoMsg(object: SetChainlinkPriceEventAminoMsg): SetChainlinkPriceEvent;
    fromProtoMsg(message: SetChainlinkPriceEventProtoMsg): SetChainlinkPriceEvent;
    toProto(message: SetChainlinkPriceEvent): Uint8Array;
    toProtoMsg(message: SetChainlinkPriceEvent): SetChainlinkPriceEventProtoMsg;
};
export declare const SetBandPriceEvent: {
    typeUrl: string;
    encode(message: SetBandPriceEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetBandPriceEvent;
    fromPartial(object: Partial<SetBandPriceEvent>): SetBandPriceEvent;
    fromAmino(object: SetBandPriceEventAmino): SetBandPriceEvent;
    toAmino(message: SetBandPriceEvent): SetBandPriceEventAmino;
    fromAminoMsg(object: SetBandPriceEventAminoMsg): SetBandPriceEvent;
    fromProtoMsg(message: SetBandPriceEventProtoMsg): SetBandPriceEvent;
    toProto(message: SetBandPriceEvent): Uint8Array;
    toProtoMsg(message: SetBandPriceEvent): SetBandPriceEventProtoMsg;
};
export declare const SetBandIBCPriceEvent: {
    typeUrl: string;
    encode(message: SetBandIBCPriceEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetBandIBCPriceEvent;
    fromPartial(object: Partial<SetBandIBCPriceEvent>): SetBandIBCPriceEvent;
    fromAmino(object: SetBandIBCPriceEventAmino): SetBandIBCPriceEvent;
    toAmino(message: SetBandIBCPriceEvent): SetBandIBCPriceEventAmino;
    fromAminoMsg(object: SetBandIBCPriceEventAminoMsg): SetBandIBCPriceEvent;
    fromProtoMsg(message: SetBandIBCPriceEventProtoMsg): SetBandIBCPriceEvent;
    toProto(message: SetBandIBCPriceEvent): Uint8Array;
    toProtoMsg(message: SetBandIBCPriceEvent): SetBandIBCPriceEventProtoMsg;
};
export declare const EventBandIBCAckSuccess: {
    typeUrl: string;
    encode(message: EventBandIBCAckSuccess, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBandIBCAckSuccess;
    fromPartial(object: Partial<EventBandIBCAckSuccess>): EventBandIBCAckSuccess;
    fromAmino(object: EventBandIBCAckSuccessAmino): EventBandIBCAckSuccess;
    toAmino(message: EventBandIBCAckSuccess): EventBandIBCAckSuccessAmino;
    fromAminoMsg(object: EventBandIBCAckSuccessAminoMsg): EventBandIBCAckSuccess;
    fromProtoMsg(message: EventBandIBCAckSuccessProtoMsg): EventBandIBCAckSuccess;
    toProto(message: EventBandIBCAckSuccess): Uint8Array;
    toProtoMsg(message: EventBandIBCAckSuccess): EventBandIBCAckSuccessProtoMsg;
};
export declare const EventBandIBCAckError: {
    typeUrl: string;
    encode(message: EventBandIBCAckError, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBandIBCAckError;
    fromPartial(object: Partial<EventBandIBCAckError>): EventBandIBCAckError;
    fromAmino(object: EventBandIBCAckErrorAmino): EventBandIBCAckError;
    toAmino(message: EventBandIBCAckError): EventBandIBCAckErrorAmino;
    fromAminoMsg(object: EventBandIBCAckErrorAminoMsg): EventBandIBCAckError;
    fromProtoMsg(message: EventBandIBCAckErrorProtoMsg): EventBandIBCAckError;
    toProto(message: EventBandIBCAckError): Uint8Array;
    toProtoMsg(message: EventBandIBCAckError): EventBandIBCAckErrorProtoMsg;
};
export declare const EventBandIBCResponseTimeout: {
    typeUrl: string;
    encode(message: EventBandIBCResponseTimeout, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBandIBCResponseTimeout;
    fromPartial(object: Partial<EventBandIBCResponseTimeout>): EventBandIBCResponseTimeout;
    fromAmino(object: EventBandIBCResponseTimeoutAmino): EventBandIBCResponseTimeout;
    toAmino(message: EventBandIBCResponseTimeout): EventBandIBCResponseTimeoutAmino;
    fromAminoMsg(object: EventBandIBCResponseTimeoutAminoMsg): EventBandIBCResponseTimeout;
    fromProtoMsg(message: EventBandIBCResponseTimeoutProtoMsg): EventBandIBCResponseTimeout;
    toProto(message: EventBandIBCResponseTimeout): Uint8Array;
    toProtoMsg(message: EventBandIBCResponseTimeout): EventBandIBCResponseTimeoutProtoMsg;
};
export declare const SetPriceFeedPriceEvent: {
    typeUrl: string;
    encode(message: SetPriceFeedPriceEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetPriceFeedPriceEvent;
    fromPartial(object: Partial<SetPriceFeedPriceEvent>): SetPriceFeedPriceEvent;
    fromAmino(object: SetPriceFeedPriceEventAmino): SetPriceFeedPriceEvent;
    toAmino(message: SetPriceFeedPriceEvent): SetPriceFeedPriceEventAmino;
    fromAminoMsg(object: SetPriceFeedPriceEventAminoMsg): SetPriceFeedPriceEvent;
    fromProtoMsg(message: SetPriceFeedPriceEventProtoMsg): SetPriceFeedPriceEvent;
    toProto(message: SetPriceFeedPriceEvent): Uint8Array;
    toProtoMsg(message: SetPriceFeedPriceEvent): SetPriceFeedPriceEventProtoMsg;
};
export declare const SetProviderPriceEvent: {
    typeUrl: string;
    encode(message: SetProviderPriceEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetProviderPriceEvent;
    fromPartial(object: Partial<SetProviderPriceEvent>): SetProviderPriceEvent;
    fromAmino(object: SetProviderPriceEventAmino): SetProviderPriceEvent;
    toAmino(message: SetProviderPriceEvent): SetProviderPriceEventAmino;
    fromAminoMsg(object: SetProviderPriceEventAminoMsg): SetProviderPriceEvent;
    fromProtoMsg(message: SetProviderPriceEventProtoMsg): SetProviderPriceEvent;
    toProto(message: SetProviderPriceEvent): Uint8Array;
    toProtoMsg(message: SetProviderPriceEvent): SetProviderPriceEventProtoMsg;
};
export declare const SetCoinbasePriceEvent: {
    typeUrl: string;
    encode(message: SetCoinbasePriceEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetCoinbasePriceEvent;
    fromPartial(object: Partial<SetCoinbasePriceEvent>): SetCoinbasePriceEvent;
    fromAmino(object: SetCoinbasePriceEventAmino): SetCoinbasePriceEvent;
    toAmino(message: SetCoinbasePriceEvent): SetCoinbasePriceEventAmino;
    fromAminoMsg(object: SetCoinbasePriceEventAminoMsg): SetCoinbasePriceEvent;
    fromProtoMsg(message: SetCoinbasePriceEventProtoMsg): SetCoinbasePriceEvent;
    toProto(message: SetCoinbasePriceEvent): Uint8Array;
    toProtoMsg(message: SetCoinbasePriceEvent): SetCoinbasePriceEventProtoMsg;
};
export declare const EventSetPythPrices: {
    typeUrl: string;
    encode(message: EventSetPythPrices, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSetPythPrices;
    fromPartial(object: Partial<EventSetPythPrices>): EventSetPythPrices;
    fromAmino(object: EventSetPythPricesAmino): EventSetPythPrices;
    toAmino(message: EventSetPythPrices): EventSetPythPricesAmino;
    fromAminoMsg(object: EventSetPythPricesAminoMsg): EventSetPythPrices;
    fromProtoMsg(message: EventSetPythPricesProtoMsg): EventSetPythPrices;
    toProto(message: EventSetPythPrices): Uint8Array;
    toProtoMsg(message: EventSetPythPrices): EventSetPythPricesProtoMsg;
};
