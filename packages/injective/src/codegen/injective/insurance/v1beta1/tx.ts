import { OracleType, oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./insurance";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  expiry: bigint;
  /** Initial deposit of the insurance fund */
  initialDeposit: Coin;
}
export interface MsgCreateInsuranceFundProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: Uint8Array;
}
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 */
export interface MsgCreateInsuranceFundAmino {
  /** Creator of the insurance fund. */
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** Coin denom to use for the market quote denom */
  quote_denom: string;
  /**
   * Oracle base currency of the derivative market OR the oracle symbol for the
   * binary options market.
   */
  oracle_base: string;
  /**
   * Oracle quote currency of the derivative market OR the oracle provider for
   * the binary options market.
   */
  oracle_quote: string;
  /** Oracle type of the binary options or derivative market */
  oracle_type: OracleType;
  /**
   * Expiration time of the derivative market. Should be -1 for perpetual or -2
   * for binary options markets.
   */
  expiry: string;
  /** Initial deposit of the insurance fund */
  initial_deposit?: CoinAmino;
}
export interface MsgCreateInsuranceFundAminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: MsgCreateInsuranceFundAmino;
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
  expiry: bigint;
  initial_deposit: CoinSDKType;
}
export interface MsgCreateInsuranceFundResponse {}
export interface MsgCreateInsuranceFundResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  value: Uint8Array;
}
export interface MsgCreateInsuranceFundResponseAmino {}
export interface MsgCreateInsuranceFundResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  value: MsgCreateInsuranceFundResponseAmino;
}
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
  deposit: Coin;
}
export interface MsgUnderwriteProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: Uint8Array;
}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 */
export interface MsgUnderwriteAmino {
  /** Address of the underwriter. */
  sender: string;
  /** MarketID of the insurance fund. */
  market_id: string;
  /** Amount of quote_denom to underwrite the insurance fund. */
  deposit?: CoinAmino;
}
export interface MsgUnderwriteAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: MsgUnderwriteAmino;
}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 */
export interface MsgUnderwriteSDKType {
  sender: string;
  market_id: string;
  deposit: CoinSDKType;
}
export interface MsgUnderwriteResponse {}
export interface MsgUnderwriteResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
  value: Uint8Array;
}
export interface MsgUnderwriteResponseAmino {}
export interface MsgUnderwriteResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
  value: MsgUnderwriteResponseAmino;
}
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
  amount: Coin;
}
export interface MsgRequestRedemptionProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: Uint8Array;
}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 */
export interface MsgRequestRedemptionAmino {
  /** Address of the underwriter requesting a redemption. */
  sender: string;
  /** MarketID of the insurance fund. */
  market_id: string;
  /** Insurance fund share token amount to be redeemed. */
  amount?: CoinAmino;
}
export interface MsgRequestRedemptionAminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: MsgRequestRedemptionAmino;
}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 */
export interface MsgRequestRedemptionSDKType {
  sender: string;
  market_id: string;
  amount: CoinSDKType;
}
export interface MsgRequestRedemptionResponse {}
export interface MsgRequestRedemptionResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  value: Uint8Array;
}
export interface MsgRequestRedemptionResponseAmino {}
export interface MsgRequestRedemptionResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  value: MsgRequestRedemptionResponseAmino;
}
export interface MsgRequestRedemptionResponseSDKType {}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the insurance parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the insurance parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateInsuranceFund(): MsgCreateInsuranceFund {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: BigInt(0),
    initialDeposit: Coin.fromPartial({})
  };
}
export const MsgCreateInsuranceFund = {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
  encode(message: MsgCreateInsuranceFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.expiry !== BigInt(0)) {
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
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : -1,
      expiry: isSet(object.expiry) ? BigInt(object.expiry.toString()) : BigInt(0),
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
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    message.initialDeposit = object.initialDeposit !== undefined && object.initialDeposit !== null ? Coin.fromPartial(object.initialDeposit) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateInsuranceFundAmino): MsgCreateInsuranceFund {
    return {
      sender: object.sender,
      ticker: object.ticker,
      quoteDenom: object.quote_denom,
      oracleBase: object.oracle_base,
      oracleQuote: object.oracle_quote,
      oracleType: isSet(object.oracle_type) ? oracleTypeFromJSON(object.oracle_type) : -1,
      expiry: BigInt(object.expiry),
      initialDeposit: object?.initial_deposit ? Coin.fromAmino(object.initial_deposit) : undefined
    };
  },
  toAmino(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.ticker = message.ticker;
    obj.quote_denom = message.quoteDenom;
    obj.oracle_base = message.oracleBase;
    obj.oracle_quote = message.oracleQuote;
    obj.oracle_type = message.oracleType;
    obj.expiry = message.expiry ? message.expiry.toString() : undefined;
    obj.initial_deposit = message.initialDeposit ? Coin.toAmino(message.initialDeposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateInsuranceFundAminoMsg): MsgCreateInsuranceFund {
    return MsgCreateInsuranceFund.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInsuranceFundProtoMsg): MsgCreateInsuranceFund {
    return MsgCreateInsuranceFund.decode(message.value);
  },
  toProto(message: MsgCreateInsuranceFund): Uint8Array {
    return MsgCreateInsuranceFund.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
      value: MsgCreateInsuranceFund.encode(message).finish()
    };
  }
};
function createBaseMsgCreateInsuranceFundResponse(): MsgCreateInsuranceFundResponse {
  return {};
}
export const MsgCreateInsuranceFundResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
  encode(_: MsgCreateInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateInsuranceFundResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse {
    const message = createBaseMsgCreateInsuranceFundResponse();
    return message;
  },
  fromAmino(_: MsgCreateInsuranceFundResponseAmino): MsgCreateInsuranceFundResponse {
    return {};
  },
  toAmino(_: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateInsuranceFundResponseAminoMsg): MsgCreateInsuranceFundResponse {
    return MsgCreateInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInsuranceFundResponseProtoMsg): MsgCreateInsuranceFundResponse {
    return MsgCreateInsuranceFundResponse.decode(message.value);
  },
  toProto(message: MsgCreateInsuranceFundResponse): Uint8Array {
    return MsgCreateInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
      value: MsgCreateInsuranceFundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnderwrite(): MsgUnderwrite {
  return {
    sender: "",
    marketId: "",
    deposit: Coin.fromPartial({})
  };
}
export const MsgUnderwrite = {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
  encode(message: MsgUnderwrite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgUnderwriteAmino): MsgUnderwrite {
    return {
      sender: object.sender,
      marketId: object.market_id,
      deposit: object?.deposit ? Coin.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message: MsgUnderwrite): MsgUnderwriteAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnderwriteAminoMsg): MsgUnderwrite {
    return MsgUnderwrite.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnderwriteProtoMsg): MsgUnderwrite {
    return MsgUnderwrite.decode(message.value);
  },
  toProto(message: MsgUnderwrite): Uint8Array {
    return MsgUnderwrite.encode(message).finish();
  },
  toProtoMsg(message: MsgUnderwrite): MsgUnderwriteProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
      value: MsgUnderwrite.encode(message).finish()
    };
  }
};
function createBaseMsgUnderwriteResponse(): MsgUnderwriteResponse {
  return {};
}
export const MsgUnderwriteResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
  encode(_: MsgUnderwriteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnderwriteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnderwriteResponse>): MsgUnderwriteResponse {
    const message = createBaseMsgUnderwriteResponse();
    return message;
  },
  fromAmino(_: MsgUnderwriteResponseAmino): MsgUnderwriteResponse {
    return {};
  },
  toAmino(_: MsgUnderwriteResponse): MsgUnderwriteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnderwriteResponseAminoMsg): MsgUnderwriteResponse {
    return MsgUnderwriteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnderwriteResponseProtoMsg): MsgUnderwriteResponse {
    return MsgUnderwriteResponse.decode(message.value);
  },
  toProto(message: MsgUnderwriteResponse): Uint8Array {
    return MsgUnderwriteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnderwriteResponse): MsgUnderwriteResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
      value: MsgUnderwriteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestRedemption(): MsgRequestRedemption {
  return {
    sender: "",
    marketId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRequestRedemption = {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
  encode(message: MsgRequestRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgRequestRedemptionAmino): MsgRequestRedemption {
    return {
      sender: object.sender,
      marketId: object.market_id,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgRequestRedemption): MsgRequestRedemptionAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.market_id = message.marketId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionAminoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionProtoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.decode(message.value);
  },
  toProto(message: MsgRequestRedemption): Uint8Array {
    return MsgRequestRedemption.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemption): MsgRequestRedemptionProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
      value: MsgRequestRedemption.encode(message).finish()
    };
  }
};
function createBaseMsgRequestRedemptionResponse(): MsgRequestRedemptionResponse {
  return {};
}
export const MsgRequestRedemptionResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
  encode(_: MsgRequestRedemptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRequestRedemptionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  },
  fromAmino(_: MsgRequestRedemptionResponseAmino): MsgRequestRedemptionResponse {
    return {};
  },
  toAmino(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionResponseAminoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionResponseProtoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.decode(message.value);
  },
  toProto(message: MsgRequestRedemptionResponse): Uint8Array {
    return MsgRequestRedemptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
      value: MsgRequestRedemptionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};