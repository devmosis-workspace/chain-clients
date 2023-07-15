import { PriceAttestation, PriceAttestationSDKType, Params, ParamsSDKType } from "./oracle";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgRelayProviderPrice defines a SDK message for setting a price through the
 * provider oracle.
 */
export interface MsgRelayProviderPrices {
    sender: string;
    provider: string;
    symbols: string[];
    prices: string[];
}
/**
 * MsgRelayProviderPrice defines a SDK message for setting a price through the
 * provider oracle.
 */
export interface MsgRelayProviderPricesSDKType {
    sender: string;
    provider: string;
    symbols: string[];
    prices: string[];
}
export interface MsgRelayProviderPricesResponse {
}
export interface MsgRelayProviderPricesResponseSDKType {
}
/**
 * MsgRelayPriceFeedPrice defines a SDK message for setting a price through the
 * pricefeed oracle.
 */
export interface MsgRelayPriceFeedPrice {
    sender: string;
    base: string[];
    quote: string[];
    /** price defines the price of the oracle base and quote */
    price: string[];
}
/**
 * MsgRelayPriceFeedPrice defines a SDK message for setting a price through the
 * pricefeed oracle.
 */
export interface MsgRelayPriceFeedPriceSDKType {
    sender: string;
    base: string[];
    quote: string[];
    price: string[];
}
export interface MsgRelayPriceFeedPriceResponse {
}
export interface MsgRelayPriceFeedPriceResponseSDKType {
}
export interface MsgRelayBandRates {
    relayer: string;
    symbols: string[];
    rates: Long[];
    resolveTimes: Long[];
    requestIDs: Long[];
}
export interface MsgRelayBandRatesSDKType {
    relayer: string;
    symbols: string[];
    rates: Long[];
    resolve_times: Long[];
    requestIDs: Long[];
}
export interface MsgRelayBandRatesResponse {
}
export interface MsgRelayBandRatesResponseSDKType {
}
/**
 * MsgRelayCoinbaseMessages defines a SDK message for relaying price messages
 * from Coinbase API.
 */
export interface MsgRelayCoinbaseMessages {
    sender: string;
    messages: Uint8Array[];
    signatures: Uint8Array[];
}
/**
 * MsgRelayCoinbaseMessages defines a SDK message for relaying price messages
 * from Coinbase API.
 */
export interface MsgRelayCoinbaseMessagesSDKType {
    sender: string;
    messages: Uint8Array[];
    signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesResponse {
}
export interface MsgRelayCoinbaseMessagesResponseSDKType {
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRates {
    sender: string;
    requestId: Long;
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRatesSDKType {
    sender: string;
    request_id: Long;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponse {
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponseSDKType {
}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPrices {
    sender: string;
    priceAttestations: PriceAttestation[];
}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPricesSDKType {
    sender: string;
    price_attestations: PriceAttestationSDKType[];
}
/** MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type. */
export interface MsgRelayPythPricesResponse {
}
/** MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type. */
export interface MsgRelayPythPricesResponseSDKType {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the oracle parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRelayProviderPrices: {
    encode(message: MsgRelayProviderPrices, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRelayProviderPrices;
    fromPartial(object: Partial<MsgRelayProviderPrices>): MsgRelayProviderPrices;
};
export declare const MsgRelayProviderPricesResponse: {
    encode(_: MsgRelayProviderPricesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRelayProviderPricesResponse;
    fromPartial(_: Partial<MsgRelayProviderPricesResponse>): MsgRelayProviderPricesResponse;
};
export declare const MsgRelayPriceFeedPrice: {
    encode(message: MsgRelayPriceFeedPrice, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRelayPriceFeedPrice;
    fromPartial(object: Partial<MsgRelayPriceFeedPrice>): MsgRelayPriceFeedPrice;
};
export declare const MsgRelayPriceFeedPriceResponse: {
    encode(_: MsgRelayPriceFeedPriceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRelayPriceFeedPriceResponse;
    fromPartial(_: Partial<MsgRelayPriceFeedPriceResponse>): MsgRelayPriceFeedPriceResponse;
};
export declare const MsgRelayBandRates: {
    encode(message: MsgRelayBandRates, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRelayBandRates;
    fromPartial(object: Partial<MsgRelayBandRates>): MsgRelayBandRates;
};
export declare const MsgRelayBandRatesResponse: {
    encode(_: MsgRelayBandRatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRelayBandRatesResponse;
    fromPartial(_: Partial<MsgRelayBandRatesResponse>): MsgRelayBandRatesResponse;
};
export declare const MsgRelayCoinbaseMessages: {
    encode(message: MsgRelayCoinbaseMessages, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRelayCoinbaseMessages;
    fromPartial(object: Partial<MsgRelayCoinbaseMessages>): MsgRelayCoinbaseMessages;
};
export declare const MsgRelayCoinbaseMessagesResponse: {
    encode(_: MsgRelayCoinbaseMessagesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRelayCoinbaseMessagesResponse;
    fromPartial(_: Partial<MsgRelayCoinbaseMessagesResponse>): MsgRelayCoinbaseMessagesResponse;
};
export declare const MsgRequestBandIBCRates: {
    encode(message: MsgRequestBandIBCRates, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRequestBandIBCRates;
    fromPartial(object: Partial<MsgRequestBandIBCRates>): MsgRequestBandIBCRates;
};
export declare const MsgRequestBandIBCRatesResponse: {
    encode(_: MsgRequestBandIBCRatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRequestBandIBCRatesResponse;
    fromPartial(_: Partial<MsgRequestBandIBCRatesResponse>): MsgRequestBandIBCRatesResponse;
};
export declare const MsgRelayPythPrices: {
    encode(message: MsgRelayPythPrices, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRelayPythPrices;
    fromPartial(object: Partial<MsgRelayPythPrices>): MsgRelayPythPrices;
};
export declare const MsgRelayPythPricesResponse: {
    encode(_: MsgRelayPythPricesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRelayPythPricesResponse;
    fromPartial(_: Partial<MsgRelayPythPricesResponse>): MsgRelayPythPricesResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
