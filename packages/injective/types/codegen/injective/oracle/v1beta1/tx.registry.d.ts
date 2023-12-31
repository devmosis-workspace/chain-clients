import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        relayProviderPrices(value: MsgRelayProviderPrices): {
            typeUrl: string;
            value: Uint8Array;
        };
        relayPriceFeedPrice(value: MsgRelayPriceFeedPrice): {
            typeUrl: string;
            value: Uint8Array;
        };
        relayBandRates(value: MsgRelayBandRates): {
            typeUrl: string;
            value: Uint8Array;
        };
        requestBandIBCRates(value: MsgRequestBandIBCRates): {
            typeUrl: string;
            value: Uint8Array;
        };
        relayCoinbaseMessages(value: MsgRelayCoinbaseMessages): {
            typeUrl: string;
            value: Uint8Array;
        };
        relayPythPrices(value: MsgRelayPythPrices): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        relayProviderPrices(value: MsgRelayProviderPrices): {
            typeUrl: string;
            value: MsgRelayProviderPrices;
        };
        relayPriceFeedPrice(value: MsgRelayPriceFeedPrice): {
            typeUrl: string;
            value: MsgRelayPriceFeedPrice;
        };
        relayBandRates(value: MsgRelayBandRates): {
            typeUrl: string;
            value: MsgRelayBandRates;
        };
        requestBandIBCRates(value: MsgRequestBandIBCRates): {
            typeUrl: string;
            value: MsgRequestBandIBCRates;
        };
        relayCoinbaseMessages(value: MsgRelayCoinbaseMessages): {
            typeUrl: string;
            value: MsgRelayCoinbaseMessages;
        };
        relayPythPrices(value: MsgRelayPythPrices): {
            typeUrl: string;
            value: MsgRelayPythPrices;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromJSON: {
        relayProviderPrices(value: any): {
            typeUrl: string;
            value: MsgRelayProviderPrices;
        };
        relayPriceFeedPrice(value: any): {
            typeUrl: string;
            value: MsgRelayPriceFeedPrice;
        };
        relayBandRates(value: any): {
            typeUrl: string;
            value: MsgRelayBandRates;
        };
        requestBandIBCRates(value: any): {
            typeUrl: string;
            value: MsgRequestBandIBCRates;
        };
        relayCoinbaseMessages(value: any): {
            typeUrl: string;
            value: MsgRelayCoinbaseMessages;
        };
        relayPythPrices(value: any): {
            typeUrl: string;
            value: MsgRelayPythPrices;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        relayProviderPrices(value: MsgRelayProviderPrices): {
            typeUrl: string;
            value: MsgRelayProviderPrices;
        };
        relayPriceFeedPrice(value: MsgRelayPriceFeedPrice): {
            typeUrl: string;
            value: MsgRelayPriceFeedPrice;
        };
        relayBandRates(value: MsgRelayBandRates): {
            typeUrl: string;
            value: MsgRelayBandRates;
        };
        requestBandIBCRates(value: MsgRequestBandIBCRates): {
            typeUrl: string;
            value: MsgRequestBandIBCRates;
        };
        relayCoinbaseMessages(value: MsgRelayCoinbaseMessages): {
            typeUrl: string;
            value: MsgRelayCoinbaseMessages;
        };
        relayPythPrices(value: MsgRelayPythPrices): {
            typeUrl: string;
            value: MsgRelayPythPrices;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
