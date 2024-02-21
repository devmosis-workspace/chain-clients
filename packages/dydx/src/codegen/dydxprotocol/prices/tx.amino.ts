import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateMarketPrices, MsgCreateOracleMarket, MsgUpdateMarketParam } from "./tx";
export interface MsgUpdateMarketPricesAminoType extends AminoMsg {
  type: "/dydxprotocol.prices.MsgUpdateMarketPrices";
  value: {
    market_price_updates: {
      market_id: number;
      price: string;
    }[];
  };
}
export interface MsgCreateOracleMarketAminoType extends AminoMsg {
  type: "/dydxprotocol.prices.MsgCreateOracleMarket";
  value: {
    authority: string;
    params: {
      id: number;
      pair: string;
      exponent: number;
      min_exchanges: number;
      min_price_change_ppm: number;
      exchange_config_json: string;
    };
  };
}
export interface MsgUpdateMarketParamAminoType extends AminoMsg {
  type: "/dydxprotocol.prices.MsgUpdateMarketParam";
  value: {
    authority: string;
    market_param: {
      id: number;
      pair: string;
      exponent: number;
      min_exchanges: number;
      min_price_change_ppm: number;
      exchange_config_json: string;
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.prices.MsgUpdateMarketPrices": {
    aminoType: "/dydxprotocol.prices.MsgUpdateMarketPrices",
    toAmino: ({
      marketPriceUpdates
    }: MsgUpdateMarketPrices): MsgUpdateMarketPricesAminoType["value"] => {
      return {
        market_price_updates: marketPriceUpdates.map(el0 => ({
          market_id: el0.marketId,
          price: el0.price.toString()
        }))
      };
    },
    fromAmino: ({
      market_price_updates
    }: MsgUpdateMarketPricesAminoType["value"]): MsgUpdateMarketPrices => {
      return {
        marketPriceUpdates: market_price_updates.map(el0 => ({
          marketId: el0.market_id,
          price: BigInt(el0.price)
        }))
      };
    }
  },
  "/dydxprotocol.prices.MsgCreateOracleMarket": {
    aminoType: "/dydxprotocol.prices.MsgCreateOracleMarket",
    toAmino: ({
      authority,
      params
    }: MsgCreateOracleMarket): MsgCreateOracleMarketAminoType["value"] => {
      return {
        authority,
        params: {
          id: params.id,
          pair: params.pair,
          exponent: params.exponent,
          min_exchanges: params.minExchanges,
          min_price_change_ppm: params.minPriceChangePpm,
          exchange_config_json: params.exchangeConfigJson
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgCreateOracleMarketAminoType["value"]): MsgCreateOracleMarket => {
      return {
        authority,
        params: {
          id: params.id,
          pair: params.pair,
          exponent: params.exponent,
          minExchanges: params.min_exchanges,
          minPriceChangePpm: params.min_price_change_ppm,
          exchangeConfigJson: params.exchange_config_json
        }
      };
    }
  },
  "/dydxprotocol.prices.MsgUpdateMarketParam": {
    aminoType: "/dydxprotocol.prices.MsgUpdateMarketParam",
    toAmino: ({
      authority,
      marketParam
    }: MsgUpdateMarketParam): MsgUpdateMarketParamAminoType["value"] => {
      return {
        authority,
        market_param: {
          id: marketParam.id,
          pair: marketParam.pair,
          exponent: marketParam.exponent,
          min_exchanges: marketParam.minExchanges,
          min_price_change_ppm: marketParam.minPriceChangePpm,
          exchange_config_json: marketParam.exchangeConfigJson
        }
      };
    },
    fromAmino: ({
      authority,
      market_param
    }: MsgUpdateMarketParamAminoType["value"]): MsgUpdateMarketParam => {
      return {
        authority,
        marketParam: {
          id: market_param.id,
          pair: market_param.pair,
          exponent: market_param.exponent,
          minExchanges: market_param.min_exchanges,
          minPriceChangePpm: market_param.min_price_change_ppm,
          exchangeConfigJson: market_param.exchange_config_json
        }
      };
    }
  }
};