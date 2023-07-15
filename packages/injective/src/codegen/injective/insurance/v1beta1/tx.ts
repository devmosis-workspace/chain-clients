import { OracleType, oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./insurance";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 */
export interface MsgCreateInsuranceFund {
  /** Creator of the insurance fund. */
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** Coin denom to use for the market quote denom */
  quoteDenom: string;
  /**
   * Oracle base currency of the derivative market OR the oracle symbol for the
   * binary options market.
   */
  oracleBase: string;
  /**
   * Oracle quote currency of the derivative market OR the oracle provider for
   * the binary options market.
   */
  oracleQuote: string;
  /** Oracle type of the binary options or derivative market */
  oracleType: OracleType;
  /**
   * Expiration time of the derivative market. Should be -1 for perpetual or -2
   * for binary options markets.
   */
  expiry: Long;
  /** Initial deposit of the insurance fund */
  initialDeposit?: Coin;
}
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 */
export interface MsgCreateInsuranceFundSDKType {
  sender: string;
  ticker: string;
  quote_denom: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_type: OracleType;
  expiry: Long;
  initial_deposit?: CoinSDKType;
}
export interface MsgCreateInsuranceFundResponse {}
export interface MsgCreateInsuranceFundResponseSDKType {}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 */
export interface MsgUnderwrite {
  /** Address of the underwriter. */
  sender: string;
  /** MarketID of the insurance fund. */
  marketId: string;
  /** Amount of quote_denom to underwrite the insurance fund. */
  deposit?: Coin;
}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 */
export interface MsgUnderwriteSDKType {
  sender: string;
  market_id: string;
  deposit?: CoinSDKType;
}
export interface MsgUnderwriteResponse {}
export interface MsgUnderwriteResponseSDKType {}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 */
export interface MsgRequestRedemption {
  /** Address of the underwriter requesting a redemption. */
  sender: string;
  /** MarketID of the insurance fund. */
  marketId: string;
  /** Insurance fund share token amount to be redeemed. */
  amount?: Coin;
}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 */
export interface MsgRequestRedemptionSDKType {
  sender: string;
  market_id: string;
  amount?: CoinSDKType;
}
export interface MsgRequestRedemptionResponse {}
export interface MsgRequestRedemptionResponseSDKType {}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the insurance parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateInsuranceFund(): MsgCreateInsuranceFund {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: Long.ZERO,
    initialDeposit: undefined
  };
}
export const MsgCreateInsuranceFund = {
  encode(message: MsgCreateInsuranceFund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }
    if (!message.expiry.isZero()) {
      writer.uint32(56).int64(message.expiry);
    }
    if (message.initialDeposit !== undefined) {
      Coin.encode(message.initialDeposit, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateInsuranceFund {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      expiry: isSet(object.expiry) ? Long.fromValue(object.expiry) : Long.ZERO,
      initialDeposit: isSet(object.initialDeposit) ? Coin.fromJSON(object.initialDeposit) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateInsuranceFund>): MsgCreateInsuranceFund {
    const message = createBaseMsgCreateInsuranceFund();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Long.fromValue(object.expiry) : Long.ZERO;
    message.initialDeposit = object.initialDeposit !== undefined && object.initialDeposit !== null ? Coin.fromPartial(object.initialDeposit) : undefined;
    return message;
  }
};
function createBaseMsgCreateInsuranceFundResponse(): MsgCreateInsuranceFundResponse {
  return {};
}
export const MsgCreateInsuranceFundResponse = {
  encode(_: MsgCreateInsuranceFundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateInsuranceFundResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse {
    const message = createBaseMsgCreateInsuranceFundResponse();
    return message;
  }
};
function createBaseMsgUnderwrite(): MsgUnderwrite {
  return {
    sender: "",
    marketId: "",
    deposit: undefined
  };
}
export const MsgUnderwrite = {
  encode(message: MsgUnderwrite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUnderwrite {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },
  fromPartial(object: Partial<MsgUnderwrite>): MsgUnderwrite {
    const message = createBaseMsgUnderwrite();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  }
};
function createBaseMsgUnderwriteResponse(): MsgUnderwriteResponse {
  return {};
}
export const MsgUnderwriteResponse = {
  encode(_: MsgUnderwriteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUnderwriteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnderwriteResponse>): MsgUnderwriteResponse {
    const message = createBaseMsgUnderwriteResponse();
    return message;
  }
};
function createBaseMsgRequestRedemption(): MsgRequestRedemption {
  return {
    sender: "",
    marketId: "",
    amount: undefined
  };
}
export const MsgRequestRedemption = {
  encode(message: MsgRequestRedemption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRequestRedemption {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgRequestRedemption>): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseMsgRequestRedemptionResponse(): MsgRequestRedemptionResponse {
  return {};
}
export const MsgRequestRedemptionResponse = {
  encode(_: MsgRequestRedemptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRequestRedemptionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};