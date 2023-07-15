import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the global module parameters. */
export interface Params {
  /** min_gas_price defines the minimum gas price value for all transactions. */
  minGasPrice: string;
  /** burn_ratio defines the ratio of transaction fees burnt. */
  burnRatio: string;
  /**
   * gas_adjustments can add a constant amount of gas to a specific message type.
   * This gives more control to make certain messages more expensive to avoid spamming
   * of certain types of messages.
   */
  gasAdjustments: GasAdjustment[];
  /**
   * gas_refunds lets the governance specify a fraction of how much gas
   * a user gets refunded for a certain type of transaction.
   * This could be used to make transactions which support to network cheaper.
   * Gas refunds only work if the transaction only included one message.
   */
  gasRefunds: GasRefund[];
  /**
   * min_initial_deposit_ratio sets a minimum fraction of initial deposit for a
   * governance proposal. This is used to avoid spamming of proposals and
   * polluting the proposals page.
   */
  minInitialDepositRatio: string;
}
/** Params defines the global module parameters. */
export interface ParamsSDKType {
  min_gas_price: string;
  burn_ratio: string;
  gas_adjustments: GasAdjustmentSDKType[];
  gas_refunds: GasRefundSDKType[];
  min_initial_deposit_ratio: string;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustment {
  /** type of the sdk-message */
  type: string;
  /** amount of gas which is added to the message */
  amount: Long;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustmentSDKType {
  type: string;
  amount: Long;
}
/**
 * GasRefund stores the fraction of gas which will be refunded for a given
 * type of message.
 * This only works if the transaction only includes one message.
 */
export interface GasRefund {
  /** type of the sdk-message */
  type: string;
  /** fraction in decimal representation between 0 and 1 */
  fraction: string;
}
/**
 * GasRefund stores the fraction of gas which will be refunded for a given
 * type of message.
 * This only works if the transaction only includes one message.
 */
export interface GasRefundSDKType {
  type: string;
  fraction: string;
}
function createBaseParams(): Params {
  return {
    minGasPrice: "",
    burnRatio: "",
    gasAdjustments: [],
    gasRefunds: [],
    minInitialDepositRatio: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minGasPrice !== "") {
      writer.uint32(10).string(message.minGasPrice);
    }
    if (message.burnRatio !== "") {
      writer.uint32(18).string(message.burnRatio);
    }
    for (const v of message.gasAdjustments) {
      GasAdjustment.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.gasRefunds) {
      GasRefund.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.minInitialDepositRatio !== "") {
      writer.uint32(42).string(message.minInitialDepositRatio);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minGasPrice: isSet(object.minGasPrice) ? String(object.minGasPrice) : "",
      burnRatio: isSet(object.burnRatio) ? String(object.burnRatio) : "",
      gasAdjustments: Array.isArray(object?.gasAdjustments) ? object.gasAdjustments.map((e: any) => GasAdjustment.fromJSON(e)) : [],
      gasRefunds: Array.isArray(object?.gasRefunds) ? object.gasRefunds.map((e: any) => GasRefund.fromJSON(e)) : [],
      minInitialDepositRatio: isSet(object.minInitialDepositRatio) ? String(object.minInitialDepositRatio) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minGasPrice = object.minGasPrice ?? "";
    message.burnRatio = object.burnRatio ?? "";
    message.gasAdjustments = object.gasAdjustments?.map(e => GasAdjustment.fromPartial(e)) || [];
    message.gasRefunds = object.gasRefunds?.map(e => GasRefund.fromPartial(e)) || [];
    message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
    return message;
  }
};
function createBaseGasAdjustment(): GasAdjustment {
  return {
    type: "",
    amount: Long.UZERO
  };
}
export const GasAdjustment = {
  encode(message: GasAdjustment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): GasAdjustment {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GasAdjustment>): GasAdjustment {
    const message = createBaseGasAdjustment();
    message.type = object.type ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseGasRefund(): GasRefund {
  return {
    type: "",
    fraction: ""
  };
}
export const GasRefund = {
  encode(message: GasRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },
  fromJSON(object: any): GasRefund {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      fraction: isSet(object.fraction) ? String(object.fraction) : ""
    };
  },
  fromPartial(object: Partial<GasRefund>): GasRefund {
    const message = createBaseGasRefund();
    message.type = object.type ?? "";
    message.fraction = object.fraction ?? "";
    return message;
  }
};