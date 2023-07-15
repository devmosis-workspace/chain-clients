import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
    toAmino: ({
      sender,
      provider,
      symbols,
      prices
    }: MsgRelayProviderPrices): MsgRelayProviderPricesAminoType["value"] => {
      return {
        sender,
        provider,
        symbols,
        prices
      };
    },
    fromAmino: ({
      sender,
      provider,
      symbols,
      prices
    }: MsgRelayProviderPricesAminoType["value"]): MsgRelayProviderPrices => {
      return {
        sender,
        provider,
        symbols,
        prices
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
    toAmino: ({
      sender,
      base,
      quote,
      price
    }: MsgRelayPriceFeedPrice): MsgRelayPriceFeedPriceAminoType["value"] => {
      return {
        sender,
        base,
        quote,
        price
      };
    },
    fromAmino: ({
      sender,
      base,
      quote,
      price
    }: MsgRelayPriceFeedPriceAminoType["value"]): MsgRelayPriceFeedPrice => {
      return {
        sender,
        base,
        quote,
        price
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRelayBandRates": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayBandRates",
    toAmino: ({
      relayer,
      symbols,
      rates,
      resolveTimes,
      requestIDs
    }: MsgRelayBandRates): MsgRelayBandRatesAminoType["value"] => {
      return {
        relayer,
        symbols,
        rates: rates.map(el0 => el0.toString()),
        resolve_times: resolveTimes.map(el0 => el0.toString()),
        requestIDs: requestIDs.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      relayer,
      symbols,
      rates,
      resolve_times,
      requestIDs
    }: MsgRelayBandRatesAminoType["value"]): MsgRelayBandRates => {
      return {
        relayer,
        symbols,
        rates: rates.map(el0 => Long.fromString(el0)),
        resolveTimes: resolve_times.map(el0 => Long.fromString(el0)),
        requestIDs: requestIDs.map(el0 => Long.fromString(el0))
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
    aminoType: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
    toAmino: ({
      sender,
      requestId
    }: MsgRequestBandIBCRates): MsgRequestBandIBCRatesAminoType["value"] => {
      return {
        sender,
        request_id: requestId.toString()
      };
    },
    fromAmino: ({
      sender,
      request_id
    }: MsgRequestBandIBCRatesAminoType["value"]): MsgRequestBandIBCRates => {
      return {
        sender,
        requestId: Long.fromString(request_id)
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
    toAmino: ({
      sender,
      messages,
      signatures
    }: MsgRelayCoinbaseMessages): MsgRelayCoinbaseMessagesAminoType["value"] => {
      return {
        sender,
        messages,
        signatures
      };
    },
    fromAmino: ({
      sender,
      messages,
      signatures
    }: MsgRelayCoinbaseMessagesAminoType["value"]): MsgRelayCoinbaseMessages => {
      return {
        sender,
        messages,
        signatures
      };
    }
  },
  "/injective.oracle.v1beta1.MsgRelayPythPrices": {
    aminoType: "/injective.oracle.v1beta1.MsgRelayPythPrices",
    toAmino: ({
      sender,
      priceAttestations
    }: MsgRelayPythPrices): MsgRelayPythPricesAminoType["value"] => {
      return {
        sender,
        price_attestations: priceAttestations.map(el0 => ({
          price_id: el0.priceId,
          price: el0.price.toString(),
          conf: el0.conf.toString(),
          expo: el0.expo,
          ema_price: el0.emaPrice.toString(),
          ema_conf: el0.emaConf.toString(),
          ema_expo: el0.emaExpo,
          publish_time: el0.publishTime.toString()
        }))
      };
    },
    fromAmino: ({
      sender,
      price_attestations
    }: MsgRelayPythPricesAminoType["value"]): MsgRelayPythPrices => {
      return {
        sender,
        priceAttestations: price_attestations.map(el0 => ({
          priceId: el0.price_id,
          price: Long.fromString(el0.price),
          conf: Long.fromString(el0.conf),
          expo: el0.expo,
          emaPrice: Long.fromString(el0.ema_price),
          emaConf: Long.fromString(el0.ema_conf),
          emaExpo: el0.ema_expo,
          publishTime: Long.fromString(el0.publish_time)
        }))
      };
    }
  },
  "/injective.oracle.v1beta1.MsgUpdateParams": {
    aminoType: "/injective.oracle.v1beta1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          pyth_contract: params.pythContract
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          pythContract: params.pyth_contract
        }
      };
    }
  }
};