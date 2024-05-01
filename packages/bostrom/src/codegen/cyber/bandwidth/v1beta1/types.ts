import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface Params {
  recoveryPeriod: bigint;
  adjustPricePeriod: bigint;
  basePrice: string;
  baseLoad: string;
  maxBlockBandwidth: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  recovery_period?: string;
  adjust_price_period?: string;
  base_price?: string;
  base_load?: string;
  max_block_bandwidth?: string;
}
export interface ParamsAminoMsg {
  type: "/cyber.bandwidth.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  recovery_period: bigint;
  adjust_price_period: bigint;
  base_price: string;
  base_load: string;
  max_block_bandwidth: bigint;
}
export interface NeuronBandwidth {
  neuron: string;
  remainedValue: bigint;
  lastUpdatedBlock: bigint;
  maxValue: bigint;
}
export interface NeuronBandwidthProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.NeuronBandwidth";
  value: Uint8Array;
}
export interface NeuronBandwidthAmino {
  neuron?: string;
  remained_value?: string;
  last_updated_block?: string;
  max_value?: string;
}
export interface NeuronBandwidthAminoMsg {
  type: "/cyber.bandwidth.v1beta1.NeuronBandwidth";
  value: NeuronBandwidthAmino;
}
export interface NeuronBandwidthSDKType {
  neuron: string;
  remained_value: bigint;
  last_updated_block: bigint;
  max_value: bigint;
}
export interface Price {
  price: string;
}
export interface PriceProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.Price";
  value: Uint8Array;
}
export interface PriceAmino {
  price?: string;
}
export interface PriceAminoMsg {
  type: "/cyber.bandwidth.v1beta1.Price";
  value: PriceAmino;
}
export interface PriceSDKType {
  price: string;
}
function createBaseParams(): Params {
  return {
    recoveryPeriod: BigInt(0),
    adjustPricePeriod: BigInt(0),
    basePrice: "",
    baseLoad: "",
    maxBlockBandwidth: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cyber.bandwidth.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recoveryPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.recoveryPeriod);
    }
    if (message.adjustPricePeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.adjustPricePeriod);
    }
    if (message.basePrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.basePrice, 18).atomics);
    }
    if (message.baseLoad !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.baseLoad, 18).atomics);
    }
    if (message.maxBlockBandwidth !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxBlockBandwidth);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      recoveryPeriod: isSet(object.recoveryPeriod) ? BigInt(object.recoveryPeriod.toString()) : BigInt(0),
      adjustPricePeriod: isSet(object.adjustPricePeriod) ? BigInt(object.adjustPricePeriod.toString()) : BigInt(0),
      basePrice: isSet(object.basePrice) ? String(object.basePrice) : "",
      baseLoad: isSet(object.baseLoad) ? String(object.baseLoad) : "",
      maxBlockBandwidth: isSet(object.maxBlockBandwidth) ? BigInt(object.maxBlockBandwidth.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.recoveryPeriod = object.recoveryPeriod !== undefined && object.recoveryPeriod !== null ? BigInt(object.recoveryPeriod.toString()) : BigInt(0);
    message.adjustPricePeriod = object.adjustPricePeriod !== undefined && object.adjustPricePeriod !== null ? BigInt(object.adjustPricePeriod.toString()) : BigInt(0);
    message.basePrice = object.basePrice ?? "";
    message.baseLoad = object.baseLoad ?? "";
    message.maxBlockBandwidth = object.maxBlockBandwidth !== undefined && object.maxBlockBandwidth !== null ? BigInt(object.maxBlockBandwidth.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.recovery_period !== undefined && object.recovery_period !== null) {
      message.recoveryPeriod = BigInt(object.recovery_period);
    }
    if (object.adjust_price_period !== undefined && object.adjust_price_period !== null) {
      message.adjustPricePeriod = BigInt(object.adjust_price_period);
    }
    if (object.base_price !== undefined && object.base_price !== null) {
      message.basePrice = object.base_price;
    }
    if (object.base_load !== undefined && object.base_load !== null) {
      message.baseLoad = object.base_load;
    }
    if (object.max_block_bandwidth !== undefined && object.max_block_bandwidth !== null) {
      message.maxBlockBandwidth = BigInt(object.max_block_bandwidth);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.recovery_period = message.recoveryPeriod !== BigInt(0) ? message.recoveryPeriod.toString() : undefined;
    obj.adjust_price_period = message.adjustPricePeriod !== BigInt(0) ? message.adjustPricePeriod.toString() : undefined;
    obj.base_price = message.basePrice === "" ? undefined : message.basePrice;
    obj.base_load = message.baseLoad === "" ? undefined : message.baseLoad;
    obj.max_block_bandwidth = message.maxBlockBandwidth !== BigInt(0) ? message.maxBlockBandwidth.toString() : undefined;
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
      typeUrl: "/cyber.bandwidth.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseNeuronBandwidth(): NeuronBandwidth {
  return {
    neuron: "",
    remainedValue: BigInt(0),
    lastUpdatedBlock: BigInt(0),
    maxValue: BigInt(0)
  };
}
export const NeuronBandwidth = {
  typeUrl: "/cyber.bandwidth.v1beta1.NeuronBandwidth",
  encode(message: NeuronBandwidth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.neuron !== "") {
      writer.uint32(10).string(message.neuron);
    }
    if (message.remainedValue !== BigInt(0)) {
      writer.uint32(16).uint64(message.remainedValue);
    }
    if (message.lastUpdatedBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.lastUpdatedBlock);
    }
    if (message.maxValue !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxValue);
    }
    return writer;
  },
  fromJSON(object: any): NeuronBandwidth {
    return {
      neuron: isSet(object.neuron) ? String(object.neuron) : "",
      remainedValue: isSet(object.remainedValue) ? BigInt(object.remainedValue.toString()) : BigInt(0),
      lastUpdatedBlock: isSet(object.lastUpdatedBlock) ? BigInt(object.lastUpdatedBlock.toString()) : BigInt(0),
      maxValue: isSet(object.maxValue) ? BigInt(object.maxValue.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<NeuronBandwidth>): NeuronBandwidth {
    const message = createBaseNeuronBandwidth();
    message.neuron = object.neuron ?? "";
    message.remainedValue = object.remainedValue !== undefined && object.remainedValue !== null ? BigInt(object.remainedValue.toString()) : BigInt(0);
    message.lastUpdatedBlock = object.lastUpdatedBlock !== undefined && object.lastUpdatedBlock !== null ? BigInt(object.lastUpdatedBlock.toString()) : BigInt(0);
    message.maxValue = object.maxValue !== undefined && object.maxValue !== null ? BigInt(object.maxValue.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NeuronBandwidthAmino): NeuronBandwidth {
    const message = createBaseNeuronBandwidth();
    if (object.neuron !== undefined && object.neuron !== null) {
      message.neuron = object.neuron;
    }
    if (object.remained_value !== undefined && object.remained_value !== null) {
      message.remainedValue = BigInt(object.remained_value);
    }
    if (object.last_updated_block !== undefined && object.last_updated_block !== null) {
      message.lastUpdatedBlock = BigInt(object.last_updated_block);
    }
    if (object.max_value !== undefined && object.max_value !== null) {
      message.maxValue = BigInt(object.max_value);
    }
    return message;
  },
  toAmino(message: NeuronBandwidth): NeuronBandwidthAmino {
    const obj: any = {};
    obj.neuron = message.neuron === "" ? undefined : message.neuron;
    obj.remained_value = message.remainedValue !== BigInt(0) ? message.remainedValue.toString() : undefined;
    obj.last_updated_block = message.lastUpdatedBlock !== BigInt(0) ? message.lastUpdatedBlock.toString() : undefined;
    obj.max_value = message.maxValue !== BigInt(0) ? message.maxValue.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NeuronBandwidthAminoMsg): NeuronBandwidth {
    return NeuronBandwidth.fromAmino(object.value);
  },
  fromProtoMsg(message: NeuronBandwidthProtoMsg): NeuronBandwidth {
    return NeuronBandwidth.decode(message.value);
  },
  toProto(message: NeuronBandwidth): Uint8Array {
    return NeuronBandwidth.encode(message).finish();
  },
  toProtoMsg(message: NeuronBandwidth): NeuronBandwidthProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.NeuronBandwidth",
      value: NeuronBandwidth.encode(message).finish()
    };
  }
};
function createBasePrice(): Price {
  return {
    price: ""
  };
}
export const Price = {
  typeUrl: "/cyber.bandwidth.v1beta1.Price",
  encode(message: Price, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Price {
    return {
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  fromPartial(object: Partial<Price>): Price {
    const message = createBasePrice();
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: PriceAmino): Price {
    const message = createBasePrice();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: Price): PriceAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: PriceAminoMsg): Price {
    return Price.fromAmino(object.value);
  },
  fromProtoMsg(message: PriceProtoMsg): Price {
    return Price.decode(message.value);
  },
  toProto(message: Price): Uint8Array {
    return Price.encode(message).finish();
  },
  toProtoMsg(message: Price): PriceProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.Price",
      value: Price.encode(message).finish()
    };
  }
};