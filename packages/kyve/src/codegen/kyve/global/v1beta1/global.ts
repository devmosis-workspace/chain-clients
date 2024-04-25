import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
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
  /** @deprecated */
  minInitialDepositRatio: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/kyve.global.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the global module parameters. */
export interface ParamsAmino {
  /** min_gas_price defines the minimum gas price value for all transactions. */
  min_gas_price?: string;
  /** burn_ratio defines the ratio of transaction fees burnt. */
  burn_ratio?: string;
  /**
   * gas_adjustments can add a constant amount of gas to a specific message type.
   * This gives more control to make certain messages more expensive to avoid spamming
   * of certain types of messages.
   */
  gas_adjustments?: GasAdjustmentAmino[];
  /**
   * gas_refunds lets the governance specify a fraction of how much gas
   * a user gets refunded for a certain type of transaction.
   * This could be used to make transactions which support to network cheaper.
   * Gas refunds only work if the transaction only included one message.
   */
  gas_refunds?: GasRefundAmino[];
  /**
   * min_initial_deposit_ratio sets a minimum fraction of initial deposit for a
   * governance proposal. This is used to avoid spamming of proposals and
   * polluting the proposals page.
   */
  /** @deprecated */
  min_initial_deposit_ratio?: string;
}
export interface ParamsAminoMsg {
  type: "/kyve.global.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the global module parameters. */
export interface ParamsSDKType {
  min_gas_price: string;
  burn_ratio: string;
  gas_adjustments: GasAdjustmentSDKType[];
  gas_refunds: GasRefundSDKType[];
  /** @deprecated */
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
  amount: bigint;
}
export interface GasAdjustmentProtoMsg {
  typeUrl: "/kyve.global.v1beta1.GasAdjustment";
  value: Uint8Array;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustmentAmino {
  /** type of the sdk-message */
  type?: string;
  /** amount of gas which is added to the message */
  amount?: string;
}
export interface GasAdjustmentAminoMsg {
  type: "/kyve.global.v1beta1.GasAdjustment";
  value: GasAdjustmentAmino;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustmentSDKType {
  type: string;
  amount: bigint;
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
export interface GasRefundProtoMsg {
  typeUrl: "/kyve.global.v1beta1.GasRefund";
  value: Uint8Array;
}
/**
 * GasRefund stores the fraction of gas which will be refunded for a given
 * type of message.
 * This only works if the transaction only includes one message.
 */
export interface GasRefundAmino {
  /** type of the sdk-message */
  type?: string;
  /** fraction in decimal representation between 0 and 1 */
  fraction?: string;
}
export interface GasRefundAminoMsg {
  type: "/kyve.global.v1beta1.GasRefund";
  value: GasRefundAmino;
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
  typeUrl: "/kyve.global.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minGasPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minGasPrice, 18).atomics);
    }
    if (message.burnRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.burnRatio, 18).atomics);
    }
    for (const v of message.gasAdjustments) {
      GasAdjustment.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.gasRefunds) {
      GasRefund.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.minInitialDepositRatio !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.minInitialDepositRatio, 18).atomics);
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
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.minGasPrice = object.min_gas_price;
    }
    if (object.burn_ratio !== undefined && object.burn_ratio !== null) {
      message.burnRatio = object.burn_ratio;
    }
    message.gasAdjustments = object.gas_adjustments?.map(e => GasAdjustment.fromAmino(e)) || [];
    message.gasRefunds = object.gas_refunds?.map(e => GasRefund.fromAmino(e)) || [];
    if (object.min_initial_deposit_ratio !== undefined && object.min_initial_deposit_ratio !== null) {
      message.minInitialDepositRatio = object.min_initial_deposit_ratio;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_gas_price = message.minGasPrice;
    obj.burn_ratio = message.burnRatio;
    if (message.gasAdjustments) {
      obj.gas_adjustments = message.gasAdjustments.map(e => e ? GasAdjustment.toAmino(e) : undefined);
    } else {
      obj.gas_adjustments = [];
    }
    if (message.gasRefunds) {
      obj.gas_refunds = message.gasRefunds.map(e => e ? GasRefund.toAmino(e) : undefined);
    } else {
      obj.gas_refunds = [];
    }
    obj.min_initial_deposit_ratio = message.minInitialDepositRatio;
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
      typeUrl: "/kyve.global.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseGasAdjustment(): GasAdjustment {
  return {
    type: "",
    amount: BigInt(0)
  };
}
export const GasAdjustment = {
  typeUrl: "/kyve.global.v1beta1.GasAdjustment",
  encode(message: GasAdjustment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): GasAdjustment {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GasAdjustment>): GasAdjustment {
    const message = createBaseGasAdjustment();
    message.type = object.type ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GasAdjustmentAmino): GasAdjustment {
    const message = createBaseGasAdjustment();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: GasAdjustment): GasAdjustmentAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasAdjustmentAminoMsg): GasAdjustment {
    return GasAdjustment.fromAmino(object.value);
  },
  fromProtoMsg(message: GasAdjustmentProtoMsg): GasAdjustment {
    return GasAdjustment.decode(message.value);
  },
  toProto(message: GasAdjustment): Uint8Array {
    return GasAdjustment.encode(message).finish();
  },
  toProtoMsg(message: GasAdjustment): GasAdjustmentProtoMsg {
    return {
      typeUrl: "/kyve.global.v1beta1.GasAdjustment",
      value: GasAdjustment.encode(message).finish()
    };
  }
};
function createBaseGasRefund(): GasRefund {
  return {
    type: "",
    fraction: ""
  };
}
export const GasRefund = {
  typeUrl: "/kyve.global.v1beta1.GasRefund",
  encode(message: GasRefund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.fraction, 18).atomics);
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
  },
  fromAmino(object: GasRefundAmino): GasRefund {
    const message = createBaseGasRefund();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.fraction !== undefined && object.fraction !== null) {
      message.fraction = object.fraction;
    }
    return message;
  },
  toAmino(message: GasRefund): GasRefundAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.fraction = message.fraction;
    return obj;
  },
  fromAminoMsg(object: GasRefundAminoMsg): GasRefund {
    return GasRefund.fromAmino(object.value);
  },
  fromProtoMsg(message: GasRefundProtoMsg): GasRefund {
    return GasRefund.decode(message.value);
  },
  toProto(message: GasRefund): Uint8Array {
    return GasRefund.encode(message).finish();
  },
  toProtoMsg(message: GasRefund): GasRefundProtoMsg {
    return {
      typeUrl: "/kyve.global.v1beta1.GasRefund",
      value: GasRefund.encode(message).finish()
    };
  }
};