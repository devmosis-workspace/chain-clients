import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages, MsgRelayPythPrices, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/injective.oracle.v1beta1.MsgRelayProviderPrices", MsgRelayProviderPrices], ["/injective.oracle.v1beta1.MsgRelayPriceFeedPrice", MsgRelayPriceFeedPrice], ["/injective.oracle.v1beta1.MsgRelayBandRates", MsgRelayBandRates], ["/injective.oracle.v1beta1.MsgRequestBandIBCRates", MsgRequestBandIBCRates], ["/injective.oracle.v1beta1.MsgRelayCoinbaseMessages", MsgRelayCoinbaseMessages], ["/injective.oracle.v1beta1.MsgRelayPythPrices", MsgRelayPythPrices], ["/injective.oracle.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value: MsgRelayProviderPrices.encode(value).finish()
      };
    },
    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value: MsgRelayPriceFeedPrice.encode(value).finish()
      };
    },
    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value: MsgRelayBandRates.encode(value).finish()
      };
    },
    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value: MsgRequestBandIBCRates.encode(value).finish()
      };
    },
    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value: MsgRelayCoinbaseMessages.encode(value).finish()
      };
    },
    relayPythPrices(value: MsgRelayPythPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
        value: MsgRelayPythPrices.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value
      };
    },
    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value
      };
    },
    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value
      };
    },
    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value
      };
    },
    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value
      };
    },
    relayPythPrices(value: MsgRelayPythPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    relayProviderPrices(value: any) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value: MsgRelayProviderPrices.fromJSON(value)
      };
    },
    relayPriceFeedPrice(value: any) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value: MsgRelayPriceFeedPrice.fromJSON(value)
      };
    },
    relayBandRates(value: any) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value: MsgRelayBandRates.fromJSON(value)
      };
    },
    requestBandIBCRates(value: any) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value: MsgRequestBandIBCRates.fromJSON(value)
      };
    },
    relayCoinbaseMessages(value: any) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value: MsgRelayCoinbaseMessages.fromJSON(value)
      };
    },
    relayPythPrices(value: any) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
        value: MsgRelayPythPrices.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    relayProviderPrices(value: MsgRelayProviderPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        value: MsgRelayProviderPrices.fromPartial(value)
      };
    },
    relayPriceFeedPrice(value: MsgRelayPriceFeedPrice) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        value: MsgRelayPriceFeedPrice.fromPartial(value)
      };
    },
    relayBandRates(value: MsgRelayBandRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
        value: MsgRelayBandRates.fromPartial(value)
      };
    },
    requestBandIBCRates(value: MsgRequestBandIBCRates) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        value: MsgRequestBandIBCRates.fromPartial(value)
      };
    },
    relayCoinbaseMessages(value: MsgRelayCoinbaseMessages) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        value: MsgRelayCoinbaseMessages.fromPartial(value)
      };
    },
    relayPythPrices(value: MsgRelayPythPrices) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
        value: MsgRelayPythPrices.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};