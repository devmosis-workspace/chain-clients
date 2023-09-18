import { PriceAttestation, PriceAttestationAmino, PriceAttestationSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
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
export interface MsgRelayProviderPricesProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices";
    value: Uint8Array;
}
/**
 * MsgRelayProviderPrice defines a SDK message for setting a price through the
 * provider oracle.
 */
export interface MsgRelayProviderPricesAmino {
    sender: string;
    provider: string;
    symbols: string[];
    prices: string[];
}
export interface MsgRelayProviderPricesAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayProviderPrices";
    value: MsgRelayProviderPricesAmino;
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
export interface MsgRelayProviderPricesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse";
    value: Uint8Array;
}
export interface MsgRelayProviderPricesResponseAmino {
}
export interface MsgRelayProviderPricesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse";
    value: MsgRelayProviderPricesResponseAmino;
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
export interface MsgRelayPriceFeedPriceProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
    value: Uint8Array;
}
/**
 * MsgRelayPriceFeedPrice defines a SDK message for setting a price through the
 * pricefeed oracle.
 */
export interface MsgRelayPriceFeedPriceAmino {
    sender: string;
    base: string[];
    quote: string[];
    /** price defines the price of the oracle base and quote */
    price: string[];
}
export interface MsgRelayPriceFeedPriceAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
    value: MsgRelayPriceFeedPriceAmino;
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
export interface MsgRelayPriceFeedPriceResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse";
    value: Uint8Array;
}
export interface MsgRelayPriceFeedPriceResponseAmino {
}
export interface MsgRelayPriceFeedPriceResponseAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse";
    value: MsgRelayPriceFeedPriceResponseAmino;
}
export interface MsgRelayPriceFeedPriceResponseSDKType {
}
export interface MsgRelayBandRates {
    relayer: string;
    symbols: string[];
    rates: bigint[];
    resolveTimes: bigint[];
    requestIDs: bigint[];
}
export interface MsgRelayBandRatesProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates";
    value: Uint8Array;
}
export interface MsgRelayBandRatesAmino {
    relayer: string;
    symbols: string[];
    rates: string[];
    resolve_times: string[];
    requestIDs: string[];
}
export interface MsgRelayBandRatesAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayBandRates";
    value: MsgRelayBandRatesAmino;
}
export interface MsgRelayBandRatesSDKType {
    relayer: string;
    symbols: string[];
    rates: bigint[];
    resolve_times: bigint[];
    requestIDs: bigint[];
}
export interface MsgRelayBandRatesResponse {
}
export interface MsgRelayBandRatesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse";
    value: Uint8Array;
}
export interface MsgRelayBandRatesResponseAmino {
}
export interface MsgRelayBandRatesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse";
    value: MsgRelayBandRatesResponseAmino;
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
export interface MsgRelayCoinbaseMessagesProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
    value: Uint8Array;
}
/**
 * MsgRelayCoinbaseMessages defines a SDK message for relaying price messages
 * from Coinbase API.
 */
export interface MsgRelayCoinbaseMessagesAmino {
    sender: string;
    messages: Uint8Array[];
    signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
    value: MsgRelayCoinbaseMessagesAmino;
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
export interface MsgRelayCoinbaseMessagesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse";
    value: Uint8Array;
}
export interface MsgRelayCoinbaseMessagesResponseAmino {
}
export interface MsgRelayCoinbaseMessagesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse";
    value: MsgRelayCoinbaseMessagesResponseAmino;
}
export interface MsgRelayCoinbaseMessagesResponseSDKType {
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRates {
    sender: string;
    requestId: bigint;
}
export interface MsgRequestBandIBCRatesProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates";
    value: Uint8Array;
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRatesAmino {
    sender: string;
    request_id: string;
}
export interface MsgRequestBandIBCRatesAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRequestBandIBCRates";
    value: MsgRequestBandIBCRatesAmino;
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRatesSDKType {
    sender: string;
    request_id: bigint;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponse {
}
export interface MsgRequestBandIBCRatesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse";
    value: Uint8Array;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponseAmino {
}
export interface MsgRequestBandIBCRatesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse";
    value: MsgRequestBandIBCRatesResponseAmino;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponseSDKType {
}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPrices {
    sender: string;
    priceAttestations: PriceAttestation[];
}
export interface MsgRelayPythPricesProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices";
    value: Uint8Array;
}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPricesAmino {
    sender: string;
    price_attestations: PriceAttestationAmino[];
}
export interface MsgRelayPythPricesAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayPythPrices";
    value: MsgRelayPythPricesAmino;
}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPricesSDKType {
    sender: string;
    price_attestations: PriceAttestationSDKType[];
}
/** MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type. */
export interface MsgRelayPythPricesResponse {
}
export interface MsgRelayPythPricesResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPricesResponse";
    value: Uint8Array;
}
/** MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type. */
export interface MsgRelayPythPricesResponseAmino {
}
export interface MsgRelayPythPricesResponseAminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayPythPricesResponse";
    value: MsgRelayPythPricesResponseAmino;
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
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the oracle parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/injective.oracle.v1beta1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/injective.oracle.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRelayProviderPrices: {
    typeUrl: string;
    encode(message: MsgRelayProviderPrices, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRelayProviderPrices;
    fromPartial(object: Partial<MsgRelayProviderPrices>): MsgRelayProviderPrices;
    fromAmino(object: MsgRelayProviderPricesAmino): MsgRelayProviderPrices;
    toAmino(message: MsgRelayProviderPrices): MsgRelayProviderPricesAmino;
    fromAminoMsg(object: MsgRelayProviderPricesAminoMsg): MsgRelayProviderPrices;
    fromProtoMsg(message: MsgRelayProviderPricesProtoMsg): MsgRelayProviderPrices;
    toProto(message: MsgRelayProviderPrices): Uint8Array;
    toProtoMsg(message: MsgRelayProviderPrices): MsgRelayProviderPricesProtoMsg;
};
export declare const MsgRelayProviderPricesResponse: {
    typeUrl: string;
    encode(_: MsgRelayProviderPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRelayProviderPricesResponse;
    fromPartial(_: Partial<MsgRelayProviderPricesResponse>): MsgRelayProviderPricesResponse;
    fromAmino(_: MsgRelayProviderPricesResponseAmino): MsgRelayProviderPricesResponse;
    toAmino(_: MsgRelayProviderPricesResponse): MsgRelayProviderPricesResponseAmino;
    fromAminoMsg(object: MsgRelayProviderPricesResponseAminoMsg): MsgRelayProviderPricesResponse;
    fromProtoMsg(message: MsgRelayProviderPricesResponseProtoMsg): MsgRelayProviderPricesResponse;
    toProto(message: MsgRelayProviderPricesResponse): Uint8Array;
    toProtoMsg(message: MsgRelayProviderPricesResponse): MsgRelayProviderPricesResponseProtoMsg;
};
export declare const MsgRelayPriceFeedPrice: {
    typeUrl: string;
    encode(message: MsgRelayPriceFeedPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRelayPriceFeedPrice;
    fromPartial(object: Partial<MsgRelayPriceFeedPrice>): MsgRelayPriceFeedPrice;
    fromAmino(object: MsgRelayPriceFeedPriceAmino): MsgRelayPriceFeedPrice;
    toAmino(message: MsgRelayPriceFeedPrice): MsgRelayPriceFeedPriceAmino;
    fromAminoMsg(object: MsgRelayPriceFeedPriceAminoMsg): MsgRelayPriceFeedPrice;
    fromProtoMsg(message: MsgRelayPriceFeedPriceProtoMsg): MsgRelayPriceFeedPrice;
    toProto(message: MsgRelayPriceFeedPrice): Uint8Array;
    toProtoMsg(message: MsgRelayPriceFeedPrice): MsgRelayPriceFeedPriceProtoMsg;
};
export declare const MsgRelayPriceFeedPriceResponse: {
    typeUrl: string;
    encode(_: MsgRelayPriceFeedPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRelayPriceFeedPriceResponse;
    fromPartial(_: Partial<MsgRelayPriceFeedPriceResponse>): MsgRelayPriceFeedPriceResponse;
    fromAmino(_: MsgRelayPriceFeedPriceResponseAmino): MsgRelayPriceFeedPriceResponse;
    toAmino(_: MsgRelayPriceFeedPriceResponse): MsgRelayPriceFeedPriceResponseAmino;
    fromAminoMsg(object: MsgRelayPriceFeedPriceResponseAminoMsg): MsgRelayPriceFeedPriceResponse;
    fromProtoMsg(message: MsgRelayPriceFeedPriceResponseProtoMsg): MsgRelayPriceFeedPriceResponse;
    toProto(message: MsgRelayPriceFeedPriceResponse): Uint8Array;
    toProtoMsg(message: MsgRelayPriceFeedPriceResponse): MsgRelayPriceFeedPriceResponseProtoMsg;
};
export declare const MsgRelayBandRates: {
    typeUrl: string;
    encode(message: MsgRelayBandRates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRelayBandRates;
    fromPartial(object: Partial<MsgRelayBandRates>): MsgRelayBandRates;
    fromAmino(object: MsgRelayBandRatesAmino): MsgRelayBandRates;
    toAmino(message: MsgRelayBandRates): MsgRelayBandRatesAmino;
    fromAminoMsg(object: MsgRelayBandRatesAminoMsg): MsgRelayBandRates;
    fromProtoMsg(message: MsgRelayBandRatesProtoMsg): MsgRelayBandRates;
    toProto(message: MsgRelayBandRates): Uint8Array;
    toProtoMsg(message: MsgRelayBandRates): MsgRelayBandRatesProtoMsg;
};
export declare const MsgRelayBandRatesResponse: {
    typeUrl: string;
    encode(_: MsgRelayBandRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRelayBandRatesResponse;
    fromPartial(_: Partial<MsgRelayBandRatesResponse>): MsgRelayBandRatesResponse;
    fromAmino(_: MsgRelayBandRatesResponseAmino): MsgRelayBandRatesResponse;
    toAmino(_: MsgRelayBandRatesResponse): MsgRelayBandRatesResponseAmino;
    fromAminoMsg(object: MsgRelayBandRatesResponseAminoMsg): MsgRelayBandRatesResponse;
    fromProtoMsg(message: MsgRelayBandRatesResponseProtoMsg): MsgRelayBandRatesResponse;
    toProto(message: MsgRelayBandRatesResponse): Uint8Array;
    toProtoMsg(message: MsgRelayBandRatesResponse): MsgRelayBandRatesResponseProtoMsg;
};
export declare const MsgRelayCoinbaseMessages: {
    typeUrl: string;
    encode(message: MsgRelayCoinbaseMessages, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRelayCoinbaseMessages;
    fromPartial(object: Partial<MsgRelayCoinbaseMessages>): MsgRelayCoinbaseMessages;
    fromAmino(object: MsgRelayCoinbaseMessagesAmino): MsgRelayCoinbaseMessages;
    toAmino(message: MsgRelayCoinbaseMessages): MsgRelayCoinbaseMessagesAmino;
    fromAminoMsg(object: MsgRelayCoinbaseMessagesAminoMsg): MsgRelayCoinbaseMessages;
    fromProtoMsg(message: MsgRelayCoinbaseMessagesProtoMsg): MsgRelayCoinbaseMessages;
    toProto(message: MsgRelayCoinbaseMessages): Uint8Array;
    toProtoMsg(message: MsgRelayCoinbaseMessages): MsgRelayCoinbaseMessagesProtoMsg;
};
export declare const MsgRelayCoinbaseMessagesResponse: {
    typeUrl: string;
    encode(_: MsgRelayCoinbaseMessagesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRelayCoinbaseMessagesResponse;
    fromPartial(_: Partial<MsgRelayCoinbaseMessagesResponse>): MsgRelayCoinbaseMessagesResponse;
    fromAmino(_: MsgRelayCoinbaseMessagesResponseAmino): MsgRelayCoinbaseMessagesResponse;
    toAmino(_: MsgRelayCoinbaseMessagesResponse): MsgRelayCoinbaseMessagesResponseAmino;
    fromAminoMsg(object: MsgRelayCoinbaseMessagesResponseAminoMsg): MsgRelayCoinbaseMessagesResponse;
    fromProtoMsg(message: MsgRelayCoinbaseMessagesResponseProtoMsg): MsgRelayCoinbaseMessagesResponse;
    toProto(message: MsgRelayCoinbaseMessagesResponse): Uint8Array;
    toProtoMsg(message: MsgRelayCoinbaseMessagesResponse): MsgRelayCoinbaseMessagesResponseProtoMsg;
};
export declare const MsgRequestBandIBCRates: {
    typeUrl: string;
    encode(message: MsgRequestBandIBCRates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRequestBandIBCRates;
    fromPartial(object: Partial<MsgRequestBandIBCRates>): MsgRequestBandIBCRates;
    fromAmino(object: MsgRequestBandIBCRatesAmino): MsgRequestBandIBCRates;
    toAmino(message: MsgRequestBandIBCRates): MsgRequestBandIBCRatesAmino;
    fromAminoMsg(object: MsgRequestBandIBCRatesAminoMsg): MsgRequestBandIBCRates;
    fromProtoMsg(message: MsgRequestBandIBCRatesProtoMsg): MsgRequestBandIBCRates;
    toProto(message: MsgRequestBandIBCRates): Uint8Array;
    toProtoMsg(message: MsgRequestBandIBCRates): MsgRequestBandIBCRatesProtoMsg;
};
export declare const MsgRequestBandIBCRatesResponse: {
    typeUrl: string;
    encode(_: MsgRequestBandIBCRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRequestBandIBCRatesResponse;
    fromPartial(_: Partial<MsgRequestBandIBCRatesResponse>): MsgRequestBandIBCRatesResponse;
    fromAmino(_: MsgRequestBandIBCRatesResponseAmino): MsgRequestBandIBCRatesResponse;
    toAmino(_: MsgRequestBandIBCRatesResponse): MsgRequestBandIBCRatesResponseAmino;
    fromAminoMsg(object: MsgRequestBandIBCRatesResponseAminoMsg): MsgRequestBandIBCRatesResponse;
    fromProtoMsg(message: MsgRequestBandIBCRatesResponseProtoMsg): MsgRequestBandIBCRatesResponse;
    toProto(message: MsgRequestBandIBCRatesResponse): Uint8Array;
    toProtoMsg(message: MsgRequestBandIBCRatesResponse): MsgRequestBandIBCRatesResponseProtoMsg;
};
export declare const MsgRelayPythPrices: {
    typeUrl: string;
    encode(message: MsgRelayPythPrices, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRelayPythPrices;
    fromPartial(object: Partial<MsgRelayPythPrices>): MsgRelayPythPrices;
    fromAmino(object: MsgRelayPythPricesAmino): MsgRelayPythPrices;
    toAmino(message: MsgRelayPythPrices): MsgRelayPythPricesAmino;
    fromAminoMsg(object: MsgRelayPythPricesAminoMsg): MsgRelayPythPrices;
    fromProtoMsg(message: MsgRelayPythPricesProtoMsg): MsgRelayPythPrices;
    toProto(message: MsgRelayPythPrices): Uint8Array;
    toProtoMsg(message: MsgRelayPythPrices): MsgRelayPythPricesProtoMsg;
};
export declare const MsgRelayPythPricesResponse: {
    typeUrl: string;
    encode(_: MsgRelayPythPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRelayPythPricesResponse;
    fromPartial(_: Partial<MsgRelayPythPricesResponse>): MsgRelayPythPricesResponse;
    fromAmino(_: MsgRelayPythPricesResponseAmino): MsgRelayPythPricesResponse;
    toAmino(_: MsgRelayPythPricesResponse): MsgRelayPythPricesResponseAmino;
    fromAminoMsg(object: MsgRelayPythPricesResponseAminoMsg): MsgRelayPythPricesResponse;
    fromProtoMsg(message: MsgRelayPythPricesResponseProtoMsg): MsgRelayPythPricesResponse;
    toProto(message: MsgRelayPythPricesResponse): Uint8Array;
    toProtoMsg(message: MsgRelayPythPricesResponse): MsgRelayPythPricesResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
