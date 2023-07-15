import { PythPriceState, PythPriceStateSDKType } from "./oracle";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SetChainlinkPriceEvent {
    feedId: string;
    answer: string;
    timestamp: Long;
}
export interface SetChainlinkPriceEventSDKType {
    feed_id: string;
    answer: string;
    timestamp: Long;
}
/** Event type upon set ref */
export interface SetBandPriceEvent {
    relayer: string;
    symbol: string;
    price: string;
    resolveTime: Long;
    requestId: Long;
}
/** Event type upon set ref */
export interface SetBandPriceEventSDKType {
    relayer: string;
    symbol: string;
    price: string;
    resolve_time: Long;
    request_id: Long;
}
export interface SetBandIBCPriceEvent {
    relayer: string;
    symbols: string[];
    prices: string[];
    resolveTime: Long;
    requestId: Long;
    clientId: Long;
}
export interface SetBandIBCPriceEventSDKType {
    relayer: string;
    symbols: string[];
    prices: string[];
    resolve_time: Long;
    request_id: Long;
    client_id: Long;
}
export interface EventBandIBCAckSuccess {
    ackResult: string;
    clientId: Long;
}
export interface EventBandIBCAckSuccessSDKType {
    ack_result: string;
    client_id: Long;
}
export interface EventBandIBCAckError {
    ackError: string;
    clientId: Long;
}
export interface EventBandIBCAckErrorSDKType {
    ack_error: string;
    client_id: Long;
}
export interface EventBandIBCResponseTimeout {
    clientId: Long;
}
export interface EventBandIBCResponseTimeoutSDKType {
    client_id: Long;
}
export interface SetPriceFeedPriceEvent {
    relayer: string;
    base: string;
    quote: string;
    /** price defines the price of the oracle base and quote */
    price: string;
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
export interface SetProviderPriceEventSDKType {
    provider: string;
    relayer: string;
    symbol: string;
    price: string;
}
export interface SetCoinbasePriceEvent {
    symbol: string;
    price: string;
    timestamp: Long;
}
export interface SetCoinbasePriceEventSDKType {
    symbol: string;
    price: string;
    timestamp: Long;
}
export interface EventSetPythPrices {
    prices: PythPriceState[];
}
export interface EventSetPythPricesSDKType {
    prices: PythPriceStateSDKType[];
}
export declare const SetChainlinkPriceEvent: {
    encode(message: SetChainlinkPriceEvent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetChainlinkPriceEvent;
    fromPartial(object: Partial<SetChainlinkPriceEvent>): SetChainlinkPriceEvent;
};
export declare const SetBandPriceEvent: {
    encode(message: SetBandPriceEvent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetBandPriceEvent;
    fromPartial(object: Partial<SetBandPriceEvent>): SetBandPriceEvent;
};
export declare const SetBandIBCPriceEvent: {
    encode(message: SetBandIBCPriceEvent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetBandIBCPriceEvent;
    fromPartial(object: Partial<SetBandIBCPriceEvent>): SetBandIBCPriceEvent;
};
export declare const EventBandIBCAckSuccess: {
    encode(message: EventBandIBCAckSuccess, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBandIBCAckSuccess;
    fromPartial(object: Partial<EventBandIBCAckSuccess>): EventBandIBCAckSuccess;
};
export declare const EventBandIBCAckError: {
    encode(message: EventBandIBCAckError, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBandIBCAckError;
    fromPartial(object: Partial<EventBandIBCAckError>): EventBandIBCAckError;
};
export declare const EventBandIBCResponseTimeout: {
    encode(message: EventBandIBCResponseTimeout, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBandIBCResponseTimeout;
    fromPartial(object: Partial<EventBandIBCResponseTimeout>): EventBandIBCResponseTimeout;
};
export declare const SetPriceFeedPriceEvent: {
    encode(message: SetPriceFeedPriceEvent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetPriceFeedPriceEvent;
    fromPartial(object: Partial<SetPriceFeedPriceEvent>): SetPriceFeedPriceEvent;
};
export declare const SetProviderPriceEvent: {
    encode(message: SetProviderPriceEvent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetProviderPriceEvent;
    fromPartial(object: Partial<SetProviderPriceEvent>): SetProviderPriceEvent;
};
export declare const SetCoinbasePriceEvent: {
    encode(message: SetCoinbasePriceEvent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetCoinbasePriceEvent;
    fromPartial(object: Partial<SetCoinbasePriceEvent>): SetCoinbasePriceEvent;
};
export declare const EventSetPythPrices: {
    encode(message: EventSetPythPrices, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSetPythPrices;
    fromPartial(object: Partial<EventSetPythPrices>): EventSetPythPrices;
};
