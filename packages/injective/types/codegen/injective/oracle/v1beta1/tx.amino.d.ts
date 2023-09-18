import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
        aminoType: string;
        toAmino: (message: MsgRelayProviderPrices) => import("./tx").MsgRelayProviderPricesAmino;
        fromAmino: (object: import("./tx").MsgRelayProviderPricesAmino) => MsgRelayProviderPrices;
    };
    "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
        aminoType: string;
        toAmino: (message: MsgRelayPriceFeedPrice) => import("./tx").MsgRelayPriceFeedPriceAmino;
        fromAmino: (object: import("./tx").MsgRelayPriceFeedPriceAmino) => MsgRelayPriceFeedPrice;
    };
    "/injective.oracle.v1beta1.MsgRelayBandRates": {
        aminoType: string;
        toAmino: (message: MsgRelayBandRates) => import("./tx").MsgRelayBandRatesAmino;
        fromAmino: (object: import("./tx").MsgRelayBandRatesAmino) => MsgRelayBandRates;
    };
    "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
        aminoType: string;
        toAmino: (message: MsgRequestBandIBCRates) => import("./tx").MsgRequestBandIBCRatesAmino;
        fromAmino: (object: import("./tx").MsgRequestBandIBCRatesAmino) => MsgRequestBandIBCRates;
    };
    "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
        aminoType: string;
        toAmino: (message: MsgRelayCoinbaseMessages) => import("./tx").MsgRelayCoinbaseMessagesAmino;
        fromAmino: (object: import("./tx").MsgRelayCoinbaseMessagesAmino) => MsgRelayCoinbaseMessages;
    };
    "/injective.oracle.v1beta1.MsgRelayPythPrices": {
        aminoType: string;
        toAmino: (message: MsgRelayPythPrices) => import("./tx").MsgRelayPythPricesAmino;
        fromAmino: (object: import("./tx").MsgRelayPythPricesAmino) => MsgRelayPythPrices;
    };
    "/injective.oracle.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
