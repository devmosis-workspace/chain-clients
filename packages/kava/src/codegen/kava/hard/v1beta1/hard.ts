import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the hard module. */
export interface Params {
  moneyMarkets: MoneyMarket[];
  minimumBorrowUsdValue: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.hard.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the hard module. */
export interface ParamsAmino {
  money_markets: MoneyMarketAmino[];
  minimum_borrow_usd_value: string;
}
export interface ParamsAminoMsg {
  type: "/kava.hard.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the hard module. */
export interface ParamsSDKType {
  money_markets: MoneyMarketSDKType[];
  minimum_borrow_usd_value: string;
}
/** MoneyMarket is a money market for an individual asset. */
export interface MoneyMarket {
  denom: string;
  borrowLimit: BorrowLimit;
  spotMarketId: string;
  conversionFactor: string;
  interestRateModel: InterestRateModel;
  reserveFactor: string;
  keeperRewardPercentage: string;
}
export interface MoneyMarketProtoMsg {
  typeUrl: "/kava.hard.v1beta1.MoneyMarket";
  value: Uint8Array;
}
/** MoneyMarket is a money market for an individual asset. */
export interface MoneyMarketAmino {
  denom: string;
  borrow_limit?: BorrowLimitAmino;
  spot_market_id: string;
  conversion_factor: string;
  interest_rate_model?: InterestRateModelAmino;
  reserve_factor: string;
  keeper_reward_percentage: string;
}
export interface MoneyMarketAminoMsg {
  type: "/kava.hard.v1beta1.MoneyMarket";
  value: MoneyMarketAmino;
}
/** MoneyMarket is a money market for an individual asset. */
export interface MoneyMarketSDKType {
  denom: string;
  borrow_limit: BorrowLimitSDKType;
  spot_market_id: string;
  conversion_factor: string;
  interest_rate_model: InterestRateModelSDKType;
  reserve_factor: string;
  keeper_reward_percentage: string;
}
/** BorrowLimit enforces restrictions on a money market. */
export interface BorrowLimit {
  hasMaxLimit: boolean;
  maximumLimit: string;
  loanToValue: string;
}
export interface BorrowLimitProtoMsg {
  typeUrl: "/kava.hard.v1beta1.BorrowLimit";
  value: Uint8Array;
}
/** BorrowLimit enforces restrictions on a money market. */
export interface BorrowLimitAmino {
  has_max_limit: boolean;
  maximum_limit: string;
  loan_to_value: string;
}
export interface BorrowLimitAminoMsg {
  type: "/kava.hard.v1beta1.BorrowLimit";
  value: BorrowLimitAmino;
}
/** BorrowLimit enforces restrictions on a money market. */
export interface BorrowLimitSDKType {
  has_max_limit: boolean;
  maximum_limit: string;
  loan_to_value: string;
}
/** InterestRateModel contains information about an asset's interest rate. */
export interface InterestRateModel {
  baseRateApy: string;
  baseMultiplier: string;
  kink: string;
  jumpMultiplier: string;
}
export interface InterestRateModelProtoMsg {
  typeUrl: "/kava.hard.v1beta1.InterestRateModel";
  value: Uint8Array;
}
/** InterestRateModel contains information about an asset's interest rate. */
export interface InterestRateModelAmino {
  base_rate_apy: string;
  base_multiplier: string;
  kink: string;
  jump_multiplier: string;
}
export interface InterestRateModelAminoMsg {
  type: "/kava.hard.v1beta1.InterestRateModel";
  value: InterestRateModelAmino;
}
/** InterestRateModel contains information about an asset's interest rate. */
export interface InterestRateModelSDKType {
  base_rate_apy: string;
  base_multiplier: string;
  kink: string;
  jump_multiplier: string;
}
/** Deposit defines an amount of coins deposited into a hard module account. */
export interface Deposit {
  depositor: string;
  amount: Coin[];
  index: SupplyInterestFactor[];
}
export interface DepositProtoMsg {
  typeUrl: "/kava.hard.v1beta1.Deposit";
  value: Uint8Array;
}
/** Deposit defines an amount of coins deposited into a hard module account. */
export interface DepositAmino {
  depositor: string;
  amount: CoinAmino[];
  index: SupplyInterestFactorAmino[];
}
export interface DepositAminoMsg {
  type: "/kava.hard.v1beta1.Deposit";
  value: DepositAmino;
}
/** Deposit defines an amount of coins deposited into a hard module account. */
export interface DepositSDKType {
  depositor: string;
  amount: CoinSDKType[];
  index: SupplyInterestFactorSDKType[];
}
/** Borrow defines an amount of coins borrowed from a hard module account. */
export interface Borrow {
  borrower: string;
  amount: Coin[];
  index: BorrowInterestFactor[];
}
export interface BorrowProtoMsg {
  typeUrl: "/kava.hard.v1beta1.Borrow";
  value: Uint8Array;
}
/** Borrow defines an amount of coins borrowed from a hard module account. */
export interface BorrowAmino {
  borrower: string;
  amount: CoinAmino[];
  index: BorrowInterestFactorAmino[];
}
export interface BorrowAminoMsg {
  type: "/kava.hard.v1beta1.Borrow";
  value: BorrowAmino;
}
/** Borrow defines an amount of coins borrowed from a hard module account. */
export interface BorrowSDKType {
  borrower: string;
  amount: CoinSDKType[];
  index: BorrowInterestFactorSDKType[];
}
/** SupplyInterestFactor defines an individual borrow interest factor. */
export interface SupplyInterestFactor {
  denom: string;
  value: string;
}
export interface SupplyInterestFactorProtoMsg {
  typeUrl: "/kava.hard.v1beta1.SupplyInterestFactor";
  value: Uint8Array;
}
/** SupplyInterestFactor defines an individual borrow interest factor. */
export interface SupplyInterestFactorAmino {
  denom: string;
  value: string;
}
export interface SupplyInterestFactorAminoMsg {
  type: "/kava.hard.v1beta1.SupplyInterestFactor";
  value: SupplyInterestFactorAmino;
}
/** SupplyInterestFactor defines an individual borrow interest factor. */
export interface SupplyInterestFactorSDKType {
  denom: string;
  value: string;
}
/** BorrowInterestFactor defines an individual borrow interest factor. */
export interface BorrowInterestFactor {
  denom: string;
  value: string;
}
export interface BorrowInterestFactorProtoMsg {
  typeUrl: "/kava.hard.v1beta1.BorrowInterestFactor";
  value: Uint8Array;
}
/** BorrowInterestFactor defines an individual borrow interest factor. */
export interface BorrowInterestFactorAmino {
  denom: string;
  value: string;
}
export interface BorrowInterestFactorAminoMsg {
  type: "/kava.hard.v1beta1.BorrowInterestFactor";
  value: BorrowInterestFactorAmino;
}
/** BorrowInterestFactor defines an individual borrow interest factor. */
export interface BorrowInterestFactorSDKType {
  denom: string;
  value: string;
}
/** CoinsProto defines a Protobuf wrapper around a Coins slice */
export interface CoinsProto {
  coins: Coin[];
}
export interface CoinsProtoProtoMsg {
  typeUrl: "/kava.hard.v1beta1.CoinsProto";
  value: Uint8Array;
}
/** CoinsProto defines a Protobuf wrapper around a Coins slice */
export interface CoinsProtoAmino {
  coins: CoinAmino[];
}
export interface CoinsProtoAminoMsg {
  type: "/kava.hard.v1beta1.CoinsProto";
  value: CoinsProtoAmino;
}
/** CoinsProto defines a Protobuf wrapper around a Coins slice */
export interface CoinsProtoSDKType {
  coins: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    moneyMarkets: [],
    minimumBorrowUsdValue: ""
  };
}
export const Params = {
  typeUrl: "/kava.hard.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.moneyMarkets) {
      MoneyMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.minimumBorrowUsdValue !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minimumBorrowUsdValue, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      moneyMarkets: Array.isArray(object?.moneyMarkets) ? object.moneyMarkets.map((e: any) => MoneyMarket.fromJSON(e)) : [],
      minimumBorrowUsdValue: isSet(object.minimumBorrowUsdValue) ? String(object.minimumBorrowUsdValue) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.moneyMarkets = object.moneyMarkets?.map(e => MoneyMarket.fromPartial(e)) || [];
    message.minimumBorrowUsdValue = object.minimumBorrowUsdValue ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      moneyMarkets: Array.isArray(object?.money_markets) ? object.money_markets.map((e: any) => MoneyMarket.fromAmino(e)) : [],
      minimumBorrowUsdValue: object.minimum_borrow_usd_value
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.moneyMarkets) {
      obj.money_markets = message.moneyMarkets.map(e => e ? MoneyMarket.toAmino(e) : undefined);
    } else {
      obj.money_markets = [];
    }
    obj.minimum_borrow_usd_value = message.minimumBorrowUsdValue;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseMoneyMarket(): MoneyMarket {
  return {
    denom: "",
    borrowLimit: BorrowLimit.fromPartial({}),
    spotMarketId: "",
    conversionFactor: "",
    interestRateModel: InterestRateModel.fromPartial({}),
    reserveFactor: "",
    keeperRewardPercentage: ""
  };
}
export const MoneyMarket = {
  typeUrl: "/kava.hard.v1beta1.MoneyMarket",
  encode(message: MoneyMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.borrowLimit !== undefined) {
      BorrowLimit.encode(message.borrowLimit, writer.uint32(18).fork()).ldelim();
    }
    if (message.spotMarketId !== "") {
      writer.uint32(26).string(message.spotMarketId);
    }
    if (message.conversionFactor !== "") {
      writer.uint32(34).string(message.conversionFactor);
    }
    if (message.interestRateModel !== undefined) {
      InterestRateModel.encode(message.interestRateModel, writer.uint32(42).fork()).ldelim();
    }
    if (message.reserveFactor !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.reserveFactor, 18).atomics);
    }
    if (message.keeperRewardPercentage !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.keeperRewardPercentage, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MoneyMarket {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      borrowLimit: isSet(object.borrowLimit) ? BorrowLimit.fromJSON(object.borrowLimit) : undefined,
      spotMarketId: isSet(object.spotMarketId) ? String(object.spotMarketId) : "",
      conversionFactor: isSet(object.conversionFactor) ? String(object.conversionFactor) : "",
      interestRateModel: isSet(object.interestRateModel) ? InterestRateModel.fromJSON(object.interestRateModel) : undefined,
      reserveFactor: isSet(object.reserveFactor) ? String(object.reserveFactor) : "",
      keeperRewardPercentage: isSet(object.keeperRewardPercentage) ? String(object.keeperRewardPercentage) : ""
    };
  },
  fromPartial(object: Partial<MoneyMarket>): MoneyMarket {
    const message = createBaseMoneyMarket();
    message.denom = object.denom ?? "";
    message.borrowLimit = object.borrowLimit !== undefined && object.borrowLimit !== null ? BorrowLimit.fromPartial(object.borrowLimit) : undefined;
    message.spotMarketId = object.spotMarketId ?? "";
    message.conversionFactor = object.conversionFactor ?? "";
    message.interestRateModel = object.interestRateModel !== undefined && object.interestRateModel !== null ? InterestRateModel.fromPartial(object.interestRateModel) : undefined;
    message.reserveFactor = object.reserveFactor ?? "";
    message.keeperRewardPercentage = object.keeperRewardPercentage ?? "";
    return message;
  },
  fromAmino(object: MoneyMarketAmino): MoneyMarket {
    return {
      denom: object.denom,
      borrowLimit: object?.borrow_limit ? BorrowLimit.fromAmino(object.borrow_limit) : undefined,
      spotMarketId: object.spot_market_id,
      conversionFactor: object.conversion_factor,
      interestRateModel: object?.interest_rate_model ? InterestRateModel.fromAmino(object.interest_rate_model) : undefined,
      reserveFactor: object.reserve_factor,
      keeperRewardPercentage: object.keeper_reward_percentage
    };
  },
  toAmino(message: MoneyMarket): MoneyMarketAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.borrow_limit = message.borrowLimit ? BorrowLimit.toAmino(message.borrowLimit) : undefined;
    obj.spot_market_id = message.spotMarketId;
    obj.conversion_factor = message.conversionFactor;
    obj.interest_rate_model = message.interestRateModel ? InterestRateModel.toAmino(message.interestRateModel) : undefined;
    obj.reserve_factor = message.reserveFactor;
    obj.keeper_reward_percentage = message.keeperRewardPercentage;
    return obj;
  },
  fromAminoMsg(object: MoneyMarketAminoMsg): MoneyMarket {
    return MoneyMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: MoneyMarketProtoMsg): MoneyMarket {
    return MoneyMarket.decode(message.value);
  },
  toProto(message: MoneyMarket): Uint8Array {
    return MoneyMarket.encode(message).finish();
  },
  toProtoMsg(message: MoneyMarket): MoneyMarketProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.MoneyMarket",
      value: MoneyMarket.encode(message).finish()
    };
  }
};
function createBaseBorrowLimit(): BorrowLimit {
  return {
    hasMaxLimit: false,
    maximumLimit: "",
    loanToValue: ""
  };
}
export const BorrowLimit = {
  typeUrl: "/kava.hard.v1beta1.BorrowLimit",
  encode(message: BorrowLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hasMaxLimit === true) {
      writer.uint32(8).bool(message.hasMaxLimit);
    }
    if (message.maximumLimit !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.maximumLimit, 18).atomics);
    }
    if (message.loanToValue !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.loanToValue, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): BorrowLimit {
    return {
      hasMaxLimit: isSet(object.hasMaxLimit) ? Boolean(object.hasMaxLimit) : false,
      maximumLimit: isSet(object.maximumLimit) ? String(object.maximumLimit) : "",
      loanToValue: isSet(object.loanToValue) ? String(object.loanToValue) : ""
    };
  },
  fromPartial(object: Partial<BorrowLimit>): BorrowLimit {
    const message = createBaseBorrowLimit();
    message.hasMaxLimit = object.hasMaxLimit ?? false;
    message.maximumLimit = object.maximumLimit ?? "";
    message.loanToValue = object.loanToValue ?? "";
    return message;
  },
  fromAmino(object: BorrowLimitAmino): BorrowLimit {
    return {
      hasMaxLimit: object.has_max_limit,
      maximumLimit: object.maximum_limit,
      loanToValue: object.loan_to_value
    };
  },
  toAmino(message: BorrowLimit): BorrowLimitAmino {
    const obj: any = {};
    obj.has_max_limit = message.hasMaxLimit;
    obj.maximum_limit = message.maximumLimit;
    obj.loan_to_value = message.loanToValue;
    return obj;
  },
  fromAminoMsg(object: BorrowLimitAminoMsg): BorrowLimit {
    return BorrowLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: BorrowLimitProtoMsg): BorrowLimit {
    return BorrowLimit.decode(message.value);
  },
  toProto(message: BorrowLimit): Uint8Array {
    return BorrowLimit.encode(message).finish();
  },
  toProtoMsg(message: BorrowLimit): BorrowLimitProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.BorrowLimit",
      value: BorrowLimit.encode(message).finish()
    };
  }
};
function createBaseInterestRateModel(): InterestRateModel {
  return {
    baseRateApy: "",
    baseMultiplier: "",
    kink: "",
    jumpMultiplier: ""
  };
}
export const InterestRateModel = {
  typeUrl: "/kava.hard.v1beta1.InterestRateModel",
  encode(message: InterestRateModel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseRateApy !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.baseRateApy, 18).atomics);
    }
    if (message.baseMultiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.baseMultiplier, 18).atomics);
    }
    if (message.kink !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.kink, 18).atomics);
    }
    if (message.jumpMultiplier !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.jumpMultiplier, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): InterestRateModel {
    return {
      baseRateApy: isSet(object.baseRateApy) ? String(object.baseRateApy) : "",
      baseMultiplier: isSet(object.baseMultiplier) ? String(object.baseMultiplier) : "",
      kink: isSet(object.kink) ? String(object.kink) : "",
      jumpMultiplier: isSet(object.jumpMultiplier) ? String(object.jumpMultiplier) : ""
    };
  },
  fromPartial(object: Partial<InterestRateModel>): InterestRateModel {
    const message = createBaseInterestRateModel();
    message.baseRateApy = object.baseRateApy ?? "";
    message.baseMultiplier = object.baseMultiplier ?? "";
    message.kink = object.kink ?? "";
    message.jumpMultiplier = object.jumpMultiplier ?? "";
    return message;
  },
  fromAmino(object: InterestRateModelAmino): InterestRateModel {
    return {
      baseRateApy: object.base_rate_apy,
      baseMultiplier: object.base_multiplier,
      kink: object.kink,
      jumpMultiplier: object.jump_multiplier
    };
  },
  toAmino(message: InterestRateModel): InterestRateModelAmino {
    const obj: any = {};
    obj.base_rate_apy = message.baseRateApy;
    obj.base_multiplier = message.baseMultiplier;
    obj.kink = message.kink;
    obj.jump_multiplier = message.jumpMultiplier;
    return obj;
  },
  fromAminoMsg(object: InterestRateModelAminoMsg): InterestRateModel {
    return InterestRateModel.fromAmino(object.value);
  },
  fromProtoMsg(message: InterestRateModelProtoMsg): InterestRateModel {
    return InterestRateModel.decode(message.value);
  },
  toProto(message: InterestRateModel): Uint8Array {
    return InterestRateModel.encode(message).finish();
  },
  toProtoMsg(message: InterestRateModel): InterestRateModelProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.InterestRateModel",
      value: InterestRateModel.encode(message).finish()
    };
  }
};
function createBaseDeposit(): Deposit {
  return {
    depositor: "",
    amount: [],
    index: []
  };
}
export const Deposit = {
  typeUrl: "/kava.hard.v1beta1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.index) {
      SupplyInterestFactor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Deposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SupplyInterestFactor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.index = object.index?.map(e => SupplyInterestFactor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    return {
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      index: Array.isArray(object?.index) ? object.index.map((e: any) => SupplyInterestFactor.fromAmino(e)) : []
    };
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    if (message.index) {
      obj.index = message.index.map(e => e ? SupplyInterestFactor.toAmino(e) : undefined);
    } else {
      obj.index = [];
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseBorrow(): Borrow {
  return {
    borrower: "",
    amount: [],
    index: []
  };
}
export const Borrow = {
  typeUrl: "/kava.hard.v1beta1.Borrow",
  encode(message: Borrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.index) {
      BorrowInterestFactor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Borrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      index: Array.isArray(object?.index) ? object.index.map((e: any) => BorrowInterestFactor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Borrow>): Borrow {
    const message = createBaseBorrow();
    message.borrower = object.borrower ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.index = object.index?.map(e => BorrowInterestFactor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BorrowAmino): Borrow {
    return {
      borrower: object.borrower,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      index: Array.isArray(object?.index) ? object.index.map((e: any) => BorrowInterestFactor.fromAmino(e)) : []
    };
  },
  toAmino(message: Borrow): BorrowAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    if (message.index) {
      obj.index = message.index.map(e => e ? BorrowInterestFactor.toAmino(e) : undefined);
    } else {
      obj.index = [];
    }
    return obj;
  },
  fromAminoMsg(object: BorrowAminoMsg): Borrow {
    return Borrow.fromAmino(object.value);
  },
  fromProtoMsg(message: BorrowProtoMsg): Borrow {
    return Borrow.decode(message.value);
  },
  toProto(message: Borrow): Uint8Array {
    return Borrow.encode(message).finish();
  },
  toProtoMsg(message: Borrow): BorrowProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.Borrow",
      value: Borrow.encode(message).finish()
    };
  }
};
function createBaseSupplyInterestFactor(): SupplyInterestFactor {
  return {
    denom: "",
    value: ""
  };
}
export const SupplyInterestFactor = {
  typeUrl: "/kava.hard.v1beta1.SupplyInterestFactor",
  encode(message: SupplyInterestFactor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.value !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.value, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): SupplyInterestFactor {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<SupplyInterestFactor>): SupplyInterestFactor {
    const message = createBaseSupplyInterestFactor();
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: SupplyInterestFactorAmino): SupplyInterestFactor {
    return {
      denom: object.denom,
      value: object.value
    };
  },
  toAmino(message: SupplyInterestFactor): SupplyInterestFactorAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: SupplyInterestFactorAminoMsg): SupplyInterestFactor {
    return SupplyInterestFactor.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplyInterestFactorProtoMsg): SupplyInterestFactor {
    return SupplyInterestFactor.decode(message.value);
  },
  toProto(message: SupplyInterestFactor): Uint8Array {
    return SupplyInterestFactor.encode(message).finish();
  },
  toProtoMsg(message: SupplyInterestFactor): SupplyInterestFactorProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.SupplyInterestFactor",
      value: SupplyInterestFactor.encode(message).finish()
    };
  }
};
function createBaseBorrowInterestFactor(): BorrowInterestFactor {
  return {
    denom: "",
    value: ""
  };
}
export const BorrowInterestFactor = {
  typeUrl: "/kava.hard.v1beta1.BorrowInterestFactor",
  encode(message: BorrowInterestFactor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.value !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.value, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): BorrowInterestFactor {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<BorrowInterestFactor>): BorrowInterestFactor {
    const message = createBaseBorrowInterestFactor();
    message.denom = object.denom ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: BorrowInterestFactorAmino): BorrowInterestFactor {
    return {
      denom: object.denom,
      value: object.value
    };
  },
  toAmino(message: BorrowInterestFactor): BorrowInterestFactorAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: BorrowInterestFactorAminoMsg): BorrowInterestFactor {
    return BorrowInterestFactor.fromAmino(object.value);
  },
  fromProtoMsg(message: BorrowInterestFactorProtoMsg): BorrowInterestFactor {
    return BorrowInterestFactor.decode(message.value);
  },
  toProto(message: BorrowInterestFactor): Uint8Array {
    return BorrowInterestFactor.encode(message).finish();
  },
  toProtoMsg(message: BorrowInterestFactor): BorrowInterestFactorProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.BorrowInterestFactor",
      value: BorrowInterestFactor.encode(message).finish()
    };
  }
};
function createBaseCoinsProto(): CoinsProto {
  return {
    coins: []
  };
}
export const CoinsProto = {
  typeUrl: "/kava.hard.v1beta1.CoinsProto",
  encode(message: CoinsProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CoinsProto {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CoinsProto>): CoinsProto {
    const message = createBaseCoinsProto();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CoinsProtoAmino): CoinsProto {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: CoinsProto): CoinsProtoAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: CoinsProtoAminoMsg): CoinsProto {
    return CoinsProto.fromAmino(object.value);
  },
  fromProtoMsg(message: CoinsProtoProtoMsg): CoinsProto {
    return CoinsProto.decode(message.value);
  },
  toProto(message: CoinsProto): Uint8Array {
    return CoinsProto.encode(message).finish();
  },
  toProtoMsg(message: CoinsProto): CoinsProtoProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.CoinsProto",
      value: CoinsProto.encode(message).finish()
    };
  }
};