import { AminoMsg } from "@cosmjs/amino";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export interface MsgRelayProviderPricesAminoType extends AminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayProviderPrices";
    value: {
        sender: string;
        provider: string;
        symbols: string[];
        prices: string[];
    };
}
export interface MsgRelayPriceFeedPriceAminoType extends AminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
    value: {
        sender: string;
        base: string[];
        quote: string[];
        price: string[];
    };
}
export interface MsgRelayBandRatesAminoType extends AminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayBandRates";
    value: {
        relayer: string;
        symbols: string[];
        rates: string[];
        resolve_times: string[];
        requestIDs: string[];
    };
}
export interface MsgRequestBandIBCRatesAminoType extends AminoMsg {
    type: "/injective.oracle.v1beta1.MsgRequestBandIBCRates";
    value: {
        sender: string;
        request_id: string;
    };
}
export interface MsgRelayCoinbaseMessagesAminoType extends AminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
    value: {
        sender: string;
        messages: Uint8Array[];
        signatures: Uint8Array[];
    };
}
export interface MsgRelayPythPricesAminoType extends AminoMsg {
    type: "/injective.oracle.v1beta1.MsgRelayPythPrices";
    value: {
        sender: string;
        price_attestations: {
            price_id: string;
            price: string;
            conf: string;
            expo: number;
            ema_price: string;
            ema_conf: string;
            ema_expo: number;
            publish_time: string;
        }[];
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/injective.oracle.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        params: {
            pyth_contract: string;
        };
    };
}
export declare const AminoConverter: {
    "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
        aminoType: string;
        toAmino: ({ sender, provider, symbols, prices }: MsgRelayProviderPrices) => MsgRelayProviderPricesAminoType["value"];
        fromAmino: ({ sender, provider, symbols, prices }: MsgRelayProviderPricesAminoType["value"]) => MsgRelayProviderPrices;
    };
    "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
        aminoType: string;
        toAmino: ({ sender, base, quote, price }: MsgRelayPriceFeedPrice) => MsgRelayPriceFeedPriceAminoType["value"];
        fromAmino: ({ sender, base, quote, price }: MsgRelayPriceFeedPriceAminoType["value"]) => MsgRelayPriceFeedPrice;
    };
    "/injective.oracle.v1beta1.MsgRelayBandRates": {
        aminoType: string;
        toAmino: ({ relayer, symbols, rates, resolveTimes, requestIDs }: MsgRelayBandRates) => MsgRelayBandRatesAminoType["value"];
        fromAmino: ({ relayer, symbols, rates, resolve_times, requestIDs }: MsgRelayBandRatesAminoType["value"]) => MsgRelayBandRates;
    };
    "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
        aminoType: string;
        toAmino: ({ sender, requestId }: MsgRequestBandIBCRates) => MsgRequestBandIBCRatesAminoType["value"];
        fromAmino: ({ sender, request_id }: MsgRequestBandIBCRatesAminoType["value"]) => MsgRequestBandIBCRates;
    };
    "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
        aminoType: string;
        toAmino: ({ sender, messages, signatures }: MsgRelayCoinbaseMessages) => MsgRelayCoinbaseMessagesAminoType["value"];
        fromAmino: ({ sender, messages, signatures }: MsgRelayCoinbaseMessagesAminoType["value"]) => MsgRelayCoinbaseMessages;
    };
    "/injective.oracle.v1beta1.MsgRelayPythPrices": {
        aminoType: string;
        toAmino: ({ sender, priceAttestations }: MsgRelayPythPrices) => MsgRelayPythPricesAminoType["value"];
        fromAmino: ({ sender, price_attestations }: MsgRelayPythPricesAminoType["value"]) => MsgRelayPythPrices;
    };
    "/injective.oracle.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
