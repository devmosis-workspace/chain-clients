import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Params {
  maxSlots: number;
  maxGas: number;
  feeTtl: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  max_slots?: number;
  max_gas?: number;
  fee_ttl?: number;
}
export interface ParamsAminoMsg {
  type: "/cyber.dmn.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  max_slots: number;
  max_gas: number;
  fee_ttl: number;
}
export interface Thought {
  program: string;
  trigger: Trigger;
  load: Load;
  name: string;
  particle: string;
}
export interface ThoughtProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.Thought";
  value: Uint8Array;
}
export interface ThoughtAmino {
  program?: string;
  trigger?: TriggerAmino;
  load?: LoadAmino;
  name?: string;
  particle?: string;
}
export interface ThoughtAminoMsg {
  type: "/cyber.dmn.v1beta1.Thought";
  value: ThoughtAmino;
}
export interface ThoughtSDKType {
  program: string;
  trigger: TriggerSDKType;
  load: LoadSDKType;
  name: string;
  particle: string;
}
export interface Trigger {
  period: bigint;
  block: bigint;
}
export interface TriggerProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.Trigger";
  value: Uint8Array;
}
export interface TriggerAmino {
  period?: string;
  block?: string;
}
export interface TriggerAminoMsg {
  type: "/cyber.dmn.v1beta1.Trigger";
  value: TriggerAmino;
}
export interface TriggerSDKType {
  period: bigint;
  block: bigint;
}
export interface Load {
  input: string;
  gasPrice: Coin;
}
export interface LoadProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.Load";
  value: Uint8Array;
}
export interface LoadAmino {
  input?: string;
  gas_price?: CoinAmino;
}
export interface LoadAminoMsg {
  type: "/cyber.dmn.v1beta1.Load";
  value: LoadAmino;
}
export interface LoadSDKType {
  input: string;
  gas_price: CoinSDKType;
}
export interface ThoughtStats {
  program: string;
  name: string;
  calls: bigint;
  fees: bigint;
  gas: bigint;
  lastBlock: bigint;
}
export interface ThoughtStatsProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.ThoughtStats";
  value: Uint8Array;
}
export interface ThoughtStatsAmino {
  program?: string;
  name?: string;
  calls?: string;
  fees?: string;
  gas?: string;
  last_block?: string;
}
export interface ThoughtStatsAminoMsg {
  type: "/cyber.dmn.v1beta1.ThoughtStats";
  value: ThoughtStatsAmino;
}
export interface ThoughtStatsSDKType {
  program: string;
  name: string;
  calls: bigint;
  fees: bigint;
  gas: bigint;
  last_block: bigint;
}
function createBaseParams(): Params {
  return {
    maxSlots: 0,
    maxGas: 0,
    feeTtl: 0
  };
}
export const Params = {
  typeUrl: "/cyber.dmn.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxSlots !== 0) {
      writer.uint32(8).uint32(message.maxSlots);
    }
    if (message.maxGas !== 0) {
      writer.uint32(16).uint32(message.maxGas);
    }
    if (message.feeTtl !== 0) {
      writer.uint32(24).uint32(message.feeTtl);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      maxSlots: isSet(object.maxSlots) ? Number(object.maxSlots) : 0,
      maxGas: isSet(object.maxGas) ? Number(object.maxGas) : 0,
      feeTtl: isSet(object.feeTtl) ? Number(object.feeTtl) : 0
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxSlots = object.maxSlots ?? 0;
    message.maxGas = object.maxGas ?? 0;
    message.feeTtl = object.feeTtl ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_slots !== undefined && object.max_slots !== null) {
      message.maxSlots = object.max_slots;
    }
    if (object.max_gas !== undefined && object.max_gas !== null) {
      message.maxGas = object.max_gas;
    }
    if (object.fee_ttl !== undefined && object.fee_ttl !== null) {
      message.feeTtl = object.fee_ttl;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_slots = message.maxSlots === 0 ? undefined : message.maxSlots;
    obj.max_gas = message.maxGas === 0 ? undefined : message.maxGas;
    obj.fee_ttl = message.feeTtl === 0 ? undefined : message.feeTtl;
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
      typeUrl: "/cyber.dmn.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseThought(): Thought {
  return {
    program: "",
    trigger: Trigger.fromPartial({}),
    load: Load.fromPartial({}),
    name: "",
    particle: ""
  };
}
export const Thought = {
  typeUrl: "/cyber.dmn.v1beta1.Thought",
  encode(message: Thought, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.trigger !== undefined) {
      Trigger.encode(message.trigger, writer.uint32(18).fork()).ldelim();
    }
    if (message.load !== undefined) {
      Load.encode(message.load, writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.particle !== "") {
      writer.uint32(42).string(message.particle);
    }
    return writer;
  },
  fromJSON(object: any): Thought {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      trigger: isSet(object.trigger) ? Trigger.fromJSON(object.trigger) : undefined,
      load: isSet(object.load) ? Load.fromJSON(object.load) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      particle: isSet(object.particle) ? String(object.particle) : ""
    };
  },
  fromPartial(object: Partial<Thought>): Thought {
    const message = createBaseThought();
    message.program = object.program ?? "";
    message.trigger = object.trigger !== undefined && object.trigger !== null ? Trigger.fromPartial(object.trigger) : undefined;
    message.load = object.load !== undefined && object.load !== null ? Load.fromPartial(object.load) : undefined;
    message.name = object.name ?? "";
    message.particle = object.particle ?? "";
    return message;
  },
  fromAmino(object: ThoughtAmino): Thought {
    const message = createBaseThought();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.trigger !== undefined && object.trigger !== null) {
      message.trigger = Trigger.fromAmino(object.trigger);
    }
    if (object.load !== undefined && object.load !== null) {
      message.load = Load.fromAmino(object.load);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.particle !== undefined && object.particle !== null) {
      message.particle = object.particle;
    }
    return message;
  },
  toAmino(message: Thought): ThoughtAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.trigger = message.trigger ? Trigger.toAmino(message.trigger) : undefined;
    obj.load = message.load ? Load.toAmino(message.load) : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.particle = message.particle === "" ? undefined : message.particle;
    return obj;
  },
  fromAminoMsg(object: ThoughtAminoMsg): Thought {
    return Thought.fromAmino(object.value);
  },
  fromProtoMsg(message: ThoughtProtoMsg): Thought {
    return Thought.decode(message.value);
  },
  toProto(message: Thought): Uint8Array {
    return Thought.encode(message).finish();
  },
  toProtoMsg(message: Thought): ThoughtProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.Thought",
      value: Thought.encode(message).finish()
    };
  }
};
function createBaseTrigger(): Trigger {
  return {
    period: BigInt(0),
    block: BigInt(0)
  };
}
export const Trigger = {
  typeUrl: "/cyber.dmn.v1beta1.Trigger",
  encode(message: Trigger, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.period !== BigInt(0)) {
      writer.uint32(8).uint64(message.period);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(16).uint64(message.block);
    }
    return writer;
  },
  fromJSON(object: any): Trigger {
    return {
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0),
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Trigger>): Trigger {
    const message = createBaseTrigger();
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TriggerAmino): Trigger {
    const message = createBaseTrigger();
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    return message;
  },
  toAmino(message: Trigger): TriggerAmino {
    const obj: any = {};
    obj.period = message.period !== BigInt(0) ? message.period.toString() : undefined;
    obj.block = message.block !== BigInt(0) ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TriggerAminoMsg): Trigger {
    return Trigger.fromAmino(object.value);
  },
  fromProtoMsg(message: TriggerProtoMsg): Trigger {
    return Trigger.decode(message.value);
  },
  toProto(message: Trigger): Uint8Array {
    return Trigger.encode(message).finish();
  },
  toProtoMsg(message: Trigger): TriggerProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.Trigger",
      value: Trigger.encode(message).finish()
    };
  }
};
function createBaseLoad(): Load {
  return {
    input: "",
    gasPrice: Coin.fromPartial({})
  };
}
export const Load = {
  typeUrl: "/cyber.dmn.v1beta1.Load",
  encode(message: Load, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.input !== "") {
      writer.uint32(10).string(message.input);
    }
    if (message.gasPrice !== undefined) {
      Coin.encode(message.gasPrice, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Load {
    return {
      input: isSet(object.input) ? String(object.input) : "",
      gasPrice: isSet(object.gasPrice) ? Coin.fromJSON(object.gasPrice) : undefined
    };
  },
  fromPartial(object: Partial<Load>): Load {
    const message = createBaseLoad();
    message.input = object.input ?? "";
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? Coin.fromPartial(object.gasPrice) : undefined;
    return message;
  },
  fromAmino(object: LoadAmino): Load {
    const message = createBaseLoad();
    if (object.input !== undefined && object.input !== null) {
      message.input = object.input;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gasPrice = Coin.fromAmino(object.gas_price);
    }
    return message;
  },
  toAmino(message: Load): LoadAmino {
    const obj: any = {};
    obj.input = message.input === "" ? undefined : message.input;
    obj.gas_price = message.gasPrice ? Coin.toAmino(message.gasPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: LoadAminoMsg): Load {
    return Load.fromAmino(object.value);
  },
  fromProtoMsg(message: LoadProtoMsg): Load {
    return Load.decode(message.value);
  },
  toProto(message: Load): Uint8Array {
    return Load.encode(message).finish();
  },
  toProtoMsg(message: Load): LoadProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.Load",
      value: Load.encode(message).finish()
    };
  }
};
function createBaseThoughtStats(): ThoughtStats {
  return {
    program: "",
    name: "",
    calls: BigInt(0),
    fees: BigInt(0),
    gas: BigInt(0),
    lastBlock: BigInt(0)
  };
}
export const ThoughtStats = {
  typeUrl: "/cyber.dmn.v1beta1.ThoughtStats",
  encode(message: ThoughtStats, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.calls !== BigInt(0)) {
      writer.uint32(24).uint64(message.calls);
    }
    if (message.fees !== BigInt(0)) {
      writer.uint32(32).uint64(message.fees);
    }
    if (message.gas !== BigInt(0)) {
      writer.uint32(40).uint64(message.gas);
    }
    if (message.lastBlock !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastBlock);
    }
    return writer;
  },
  fromJSON(object: any): ThoughtStats {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      calls: isSet(object.calls) ? BigInt(object.calls.toString()) : BigInt(0),
      fees: isSet(object.fees) ? BigInt(object.fees.toString()) : BigInt(0),
      gas: isSet(object.gas) ? BigInt(object.gas.toString()) : BigInt(0),
      lastBlock: isSet(object.lastBlock) ? BigInt(object.lastBlock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ThoughtStats>): ThoughtStats {
    const message = createBaseThoughtStats();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.calls = object.calls !== undefined && object.calls !== null ? BigInt(object.calls.toString()) : BigInt(0);
    message.fees = object.fees !== undefined && object.fees !== null ? BigInt(object.fees.toString()) : BigInt(0);
    message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
    message.lastBlock = object.lastBlock !== undefined && object.lastBlock !== null ? BigInt(object.lastBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ThoughtStatsAmino): ThoughtStats {
    const message = createBaseThoughtStats();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.calls !== undefined && object.calls !== null) {
      message.calls = BigInt(object.calls);
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = BigInt(object.fees);
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = BigInt(object.gas);
    }
    if (object.last_block !== undefined && object.last_block !== null) {
      message.lastBlock = BigInt(object.last_block);
    }
    return message;
  },
  toAmino(message: ThoughtStats): ThoughtStatsAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    obj.calls = message.calls !== BigInt(0) ? message.calls.toString() : undefined;
    obj.fees = message.fees !== BigInt(0) ? message.fees.toString() : undefined;
    obj.gas = message.gas !== BigInt(0) ? message.gas.toString() : undefined;
    obj.last_block = message.lastBlock !== BigInt(0) ? message.lastBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ThoughtStatsAminoMsg): ThoughtStats {
    return ThoughtStats.fromAmino(object.value);
  },
  fromProtoMsg(message: ThoughtStatsProtoMsg): ThoughtStats {
    return ThoughtStats.decode(message.value);
  },
  toProto(message: ThoughtStats): Uint8Array {
    return ThoughtStats.encode(message).finish();
  },
  toProtoMsg(message: ThoughtStats): ThoughtStatsProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.ThoughtStats",
      value: ThoughtStats.encode(message).finish()
    };
  }
};