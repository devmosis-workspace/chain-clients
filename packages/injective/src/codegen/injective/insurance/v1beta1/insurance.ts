import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { OracleType, oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
  /**
   * default_redemption_notice_period_duration defines the default minimum
   * notice period duration that must pass after an underwriter sends a
   * redemption request before the underwriter can claim his tokens
   */
  defaultRedemptionNoticePeriodDuration?: Duration;
}
export interface ParamsSDKType {
  default_redemption_notice_period_duration?: DurationSDKType;
}
export interface InsuranceFund {
  /** deposit denomination for the given insurance fund */
  depositDenom: string;
  /** insurance fund pool token denomination for the given insurance fund */
  insurancePoolTokenDenom: string;
  /**
   * redemption_notice_period_duration defines the minimum notice period
   * duration that must pass after an underwriter sends a redemption request
   * before the underwriter can claim his tokens
   */
  redemptionNoticePeriodDuration?: Duration;
  /** balance of fund */
  balance: string;
  /** total share tokens minted */
  totalShare: string;
  /** marketID of the derivative market */
  marketId: string;
  /** ticker of the derivative market */
  marketTicker: string;
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
}
export interface InsuranceFundSDKType {
  deposit_denom: string;
  insurance_pool_token_denom: string;
  redemption_notice_period_duration?: DurationSDKType;
  balance: string;
  total_share: string;
  market_id: string;
  market_ticker: string;
  oracle_base: string;
  oracle_quote: string;
  oracle_type: OracleType;
  expiry: Long;
}
export interface RedemptionSchedule {
  /** id of redemption schedule */
  id: Long;
  /** marketId of insurance fund for the redemption */
  marketId: string;
  /** address of the redeemer */
  redeemer: string;
  /** the time after which the redemption can be claimed */
  claimableRedemptionTime?: Timestamp;
  /** the insurance_pool_token amount to redeem */
  redemptionAmount?: Coin;
}
export interface RedemptionScheduleSDKType {
  id: Long;
  marketId: string;
  redeemer: string;
  claimable_redemption_time?: TimestampSDKType;
  redemption_amount?: CoinSDKType;
}
export interface EventInsuranceFundUpdate {
  fund?: InsuranceFund;
}
export interface EventInsuranceFundUpdateSDKType {
  fund?: InsuranceFundSDKType;
}
export interface EventRequestRedemption {
  schedule?: RedemptionSchedule;
}
export interface EventRequestRedemptionSDKType {
  schedule?: RedemptionScheduleSDKType;
}
export interface EventWithdrawRedemption {
  /** redemption schedule triggered withdraw */
  schedule?: RedemptionSchedule;
  /** redeem coin amount in base_currency */
  redeemCoin?: Coin;
}
export interface EventWithdrawRedemptionSDKType {
  schedule?: RedemptionScheduleSDKType;
  redeem_coin?: CoinSDKType;
}
export interface EventUnderwrite {
  /** address of the underwriter */
  underwriter: string;
  /** marketId of insurance fund for the redemption */
  marketId: string;
  /** deposit coin amount */
  deposit?: Coin;
  /** share coin amount */
  shares?: Coin;
}
export interface EventUnderwriteSDKType {
  underwriter: string;
  marketId: string;
  deposit?: CoinSDKType;
  shares?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    defaultRedemptionNoticePeriodDuration: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultRedemptionNoticePeriodDuration !== undefined) {
      Duration.encode(message.defaultRedemptionNoticePeriodDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      defaultRedemptionNoticePeriodDuration: isSet(object.defaultRedemptionNoticePeriodDuration) ? Duration.fromJSON(object.defaultRedemptionNoticePeriodDuration) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.defaultRedemptionNoticePeriodDuration = object.defaultRedemptionNoticePeriodDuration !== undefined && object.defaultRedemptionNoticePeriodDuration !== null ? Duration.fromPartial(object.defaultRedemptionNoticePeriodDuration) : undefined;
    return message;
  }
};
function createBaseInsuranceFund(): InsuranceFund {
  return {
    depositDenom: "",
    insurancePoolTokenDenom: "",
    redemptionNoticePeriodDuration: undefined,
    balance: "",
    totalShare: "",
    marketId: "",
    marketTicker: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: Long.ZERO
  };
}
export const InsuranceFund = {
  encode(message: InsuranceFund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }
    if (message.insurancePoolTokenDenom !== "") {
      writer.uint32(18).string(message.insurancePoolTokenDenom);
    }
    if (message.redemptionNoticePeriodDuration !== undefined) {
      Duration.encode(message.redemptionNoticePeriodDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.totalShare !== "") {
      writer.uint32(42).string(message.totalShare);
    }
    if (message.marketId !== "") {
      writer.uint32(50).string(message.marketId);
    }
    if (message.marketTicker !== "") {
      writer.uint32(58).string(message.marketTicker);
    }
    if (message.oracleBase !== "") {
      writer.uint32(66).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(74).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(80).int32(message.oracleType);
    }
    if (!message.expiry.isZero()) {
      writer.uint32(88).int64(message.expiry);
    }
    return writer;
  },
  fromJSON(object: any): InsuranceFund {
    return {
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      insurancePoolTokenDenom: isSet(object.insurancePoolTokenDenom) ? String(object.insurancePoolTokenDenom) : "",
      redemptionNoticePeriodDuration: isSet(object.redemptionNoticePeriodDuration) ? Duration.fromJSON(object.redemptionNoticePeriodDuration) : undefined,
      balance: isSet(object.balance) ? String(object.balance) : "",
      totalShare: isSet(object.totalShare) ? String(object.totalShare) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      marketTicker: isSet(object.marketTicker) ? String(object.marketTicker) : "",
      oracleBase: isSet(object.oracleBase) ? String(object.oracleBase) : "",
      oracleQuote: isSet(object.oracleQuote) ? String(object.oracleQuote) : "",
      oracleType: isSet(object.oracleType) ? oracleTypeFromJSON(object.oracleType) : 0,
      expiry: isSet(object.expiry) ? Long.fromValue(object.expiry) : Long.ZERO
    };
  },
  fromPartial(object: Partial<InsuranceFund>): InsuranceFund {
    const message = createBaseInsuranceFund();
    message.depositDenom = object.depositDenom ?? "";
    message.insurancePoolTokenDenom = object.insurancePoolTokenDenom ?? "";
    message.redemptionNoticePeriodDuration = object.redemptionNoticePeriodDuration !== undefined && object.redemptionNoticePeriodDuration !== null ? Duration.fromPartial(object.redemptionNoticePeriodDuration) : undefined;
    message.balance = object.balance ?? "";
    message.totalShare = object.totalShare ?? "";
    message.marketId = object.marketId ?? "";
    message.marketTicker = object.marketTicker ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Long.fromValue(object.expiry) : Long.ZERO;
    return message;
  }
};
function createBaseRedemptionSchedule(): RedemptionSchedule {
  return {
    id: Long.UZERO,
    marketId: "",
    redeemer: "",
    claimableRedemptionTime: undefined,
    redemptionAmount: undefined
  };
}
export const RedemptionSchedule = {
  encode(message: RedemptionSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.redeemer !== "") {
      writer.uint32(26).string(message.redeemer);
    }
    if (message.claimableRedemptionTime !== undefined) {
      Timestamp.encode(message.claimableRedemptionTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.redemptionAmount !== undefined) {
      Coin.encode(message.redemptionAmount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RedemptionSchedule {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      redeemer: isSet(object.redeemer) ? String(object.redeemer) : "",
      claimableRedemptionTime: isSet(object.claimableRedemptionTime) ? fromJsonTimestamp(object.claimableRedemptionTime) : undefined,
      redemptionAmount: isSet(object.redemptionAmount) ? Coin.fromJSON(object.redemptionAmount) : undefined
    };
  },
  fromPartial(object: Partial<RedemptionSchedule>): RedemptionSchedule {
    const message = createBaseRedemptionSchedule();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.marketId = object.marketId ?? "";
    message.redeemer = object.redeemer ?? "";
    message.claimableRedemptionTime = object.claimableRedemptionTime !== undefined && object.claimableRedemptionTime !== null ? Timestamp.fromPartial(object.claimableRedemptionTime) : undefined;
    message.redemptionAmount = object.redemptionAmount !== undefined && object.redemptionAmount !== null ? Coin.fromPartial(object.redemptionAmount) : undefined;
    return message;
  }
};
function createBaseEventInsuranceFundUpdate(): EventInsuranceFundUpdate {
  return {
    fund: undefined
  };
}
export const EventInsuranceFundUpdate = {
  encode(message: EventInsuranceFundUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fund !== undefined) {
      InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventInsuranceFundUpdate {
    return {
      fund: isSet(object.fund) ? InsuranceFund.fromJSON(object.fund) : undefined
    };
  },
  fromPartial(object: Partial<EventInsuranceFundUpdate>): EventInsuranceFundUpdate {
    const message = createBaseEventInsuranceFundUpdate();
    message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
    return message;
  }
};
function createBaseEventRequestRedemption(): EventRequestRedemption {
  return {
    schedule: undefined
  };
}
export const EventRequestRedemption = {
  encode(message: EventRequestRedemption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventRequestRedemption {
    return {
      schedule: isSet(object.schedule) ? RedemptionSchedule.fromJSON(object.schedule) : undefined
    };
  },
  fromPartial(object: Partial<EventRequestRedemption>): EventRequestRedemption {
    const message = createBaseEventRequestRedemption();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
    return message;
  }
};
function createBaseEventWithdrawRedemption(): EventWithdrawRedemption {
  return {
    schedule: undefined,
    redeemCoin: undefined
  };
}
export const EventWithdrawRedemption = {
  encode(message: EventWithdrawRedemption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    if (message.redeemCoin !== undefined) {
      Coin.encode(message.redeemCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventWithdrawRedemption {
    return {
      schedule: isSet(object.schedule) ? RedemptionSchedule.fromJSON(object.schedule) : undefined,
      redeemCoin: isSet(object.redeemCoin) ? Coin.fromJSON(object.redeemCoin) : undefined
    };
  },
  fromPartial(object: Partial<EventWithdrawRedemption>): EventWithdrawRedemption {
    const message = createBaseEventWithdrawRedemption();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
    message.redeemCoin = object.redeemCoin !== undefined && object.redeemCoin !== null ? Coin.fromPartial(object.redeemCoin) : undefined;
    return message;
  }
};
function createBaseEventUnderwrite(): EventUnderwrite {
  return {
    underwriter: "",
    marketId: "",
    deposit: undefined,
    shares: undefined
  };
}
export const EventUnderwrite = {
  encode(message: EventUnderwrite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.underwriter !== "") {
      writer.uint32(10).string(message.underwriter);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.shares !== undefined) {
      Coin.encode(message.shares, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventUnderwrite {
    return {
      underwriter: isSet(object.underwriter) ? String(object.underwriter) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      shares: isSet(object.shares) ? Coin.fromJSON(object.shares) : undefined
    };
  },
  fromPartial(object: Partial<EventUnderwrite>): EventUnderwrite {
    const message = createBaseEventUnderwrite();
    message.underwriter = object.underwriter ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.shares = object.shares !== undefined && object.shares !== null ? Coin.fromPartial(object.shares) : undefined;
    return message;
  }
};