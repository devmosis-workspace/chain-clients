import { Trigger, TriggerAmino, TriggerSDKType, Load, LoadAmino, LoadSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgCreateThought {
  program: string;
  trigger: Trigger;
  load: Load;
  name: string;
  particle: string;
}
export interface MsgCreateThoughtProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgCreateThought";
  value: Uint8Array;
}
export interface MsgCreateThoughtAmino {
  program?: string;
  trigger?: TriggerAmino;
  load?: LoadAmino;
  name?: string;
  particle?: string;
}
export interface MsgCreateThoughtAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgCreateThought";
  value: MsgCreateThoughtAmino;
}
export interface MsgCreateThoughtSDKType {
  program: string;
  trigger: TriggerSDKType;
  load: LoadSDKType;
  name: string;
  particle: string;
}
export interface MsgForgetThought {
  program: string;
  name: string;
}
export interface MsgForgetThoughtProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgForgetThought";
  value: Uint8Array;
}
export interface MsgForgetThoughtAmino {
  program?: string;
  name?: string;
}
export interface MsgForgetThoughtAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgForgetThought";
  value: MsgForgetThoughtAmino;
}
export interface MsgForgetThoughtSDKType {
  program: string;
  name: string;
}
export interface MsgChangeThoughtParticle {
  program: string;
  name: string;
  particle: string;
}
export interface MsgChangeThoughtParticleProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle";
  value: Uint8Array;
}
export interface MsgChangeThoughtParticleAmino {
  program?: string;
  name?: string;
  particle?: string;
}
export interface MsgChangeThoughtParticleAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle";
  value: MsgChangeThoughtParticleAmino;
}
export interface MsgChangeThoughtParticleSDKType {
  program: string;
  name: string;
  particle: string;
}
export interface MsgChangeThoughtName {
  program: string;
  name: string;
  newName: string;
}
export interface MsgChangeThoughtNameProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtName";
  value: Uint8Array;
}
export interface MsgChangeThoughtNameAmino {
  program?: string;
  name?: string;
  new_name?: string;
}
export interface MsgChangeThoughtNameAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtName";
  value: MsgChangeThoughtNameAmino;
}
export interface MsgChangeThoughtNameSDKType {
  program: string;
  name: string;
  new_name: string;
}
export interface MsgChangeThoughtInput {
  program: string;
  name: string;
  input: string;
}
export interface MsgChangeThoughtInputProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtInput";
  value: Uint8Array;
}
export interface MsgChangeThoughtInputAmino {
  program?: string;
  name?: string;
  input?: string;
}
export interface MsgChangeThoughtInputAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtInput";
  value: MsgChangeThoughtInputAmino;
}
export interface MsgChangeThoughtInputSDKType {
  program: string;
  name: string;
  input: string;
}
export interface MsgChangeThoughtGasPrice {
  program: string;
  name: string;
  gasPrice: Coin;
}
export interface MsgChangeThoughtGasPriceProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice";
  value: Uint8Array;
}
export interface MsgChangeThoughtGasPriceAmino {
  program?: string;
  name?: string;
  gas_price?: CoinAmino;
}
export interface MsgChangeThoughtGasPriceAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice";
  value: MsgChangeThoughtGasPriceAmino;
}
export interface MsgChangeThoughtGasPriceSDKType {
  program: string;
  name: string;
  gas_price: CoinSDKType;
}
export interface MsgChangeThoughtPeriod {
  program: string;
  name: string;
  period: bigint;
}
export interface MsgChangeThoughtPeriodProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod";
  value: Uint8Array;
}
export interface MsgChangeThoughtPeriodAmino {
  program?: string;
  name?: string;
  period?: string;
}
export interface MsgChangeThoughtPeriodAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod";
  value: MsgChangeThoughtPeriodAmino;
}
export interface MsgChangeThoughtPeriodSDKType {
  program: string;
  name: string;
  period: bigint;
}
export interface MsgChangeThoughtBlock {
  program: string;
  name: string;
  block: bigint;
}
export interface MsgChangeThoughtBlockProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock";
  value: Uint8Array;
}
export interface MsgChangeThoughtBlockAmino {
  program?: string;
  name?: string;
  block?: string;
}
export interface MsgChangeThoughtBlockAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock";
  value: MsgChangeThoughtBlockAmino;
}
export interface MsgChangeThoughtBlockSDKType {
  program: string;
  name: string;
  block: bigint;
}
export interface MsgCreateThoughtResponse {}
export interface MsgCreateThoughtResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgCreateThoughtResponse";
  value: Uint8Array;
}
export interface MsgCreateThoughtResponseAmino {}
export interface MsgCreateThoughtResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgCreateThoughtResponse";
  value: MsgCreateThoughtResponseAmino;
}
export interface MsgCreateThoughtResponseSDKType {}
export interface MsgForgetThoughtResponse {}
export interface MsgForgetThoughtResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgForgetThoughtResponse";
  value: Uint8Array;
}
export interface MsgForgetThoughtResponseAmino {}
export interface MsgForgetThoughtResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgForgetThoughtResponse";
  value: MsgForgetThoughtResponseAmino;
}
export interface MsgForgetThoughtResponseSDKType {}
export interface MsgChangeThoughtParticleResponse {}
export interface MsgChangeThoughtParticleResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtParticleResponse";
  value: Uint8Array;
}
export interface MsgChangeThoughtParticleResponseAmino {}
export interface MsgChangeThoughtParticleResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtParticleResponse";
  value: MsgChangeThoughtParticleResponseAmino;
}
export interface MsgChangeThoughtParticleResponseSDKType {}
export interface MsgChangeThoughtNameResponse {}
export interface MsgChangeThoughtNameResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtNameResponse";
  value: Uint8Array;
}
export interface MsgChangeThoughtNameResponseAmino {}
export interface MsgChangeThoughtNameResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtNameResponse";
  value: MsgChangeThoughtNameResponseAmino;
}
export interface MsgChangeThoughtNameResponseSDKType {}
export interface MsgChangeThoughtInputResponse {}
export interface MsgChangeThoughtInputResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtInputResponse";
  value: Uint8Array;
}
export interface MsgChangeThoughtInputResponseAmino {}
export interface MsgChangeThoughtInputResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtInputResponse";
  value: MsgChangeThoughtInputResponseAmino;
}
export interface MsgChangeThoughtInputResponseSDKType {}
export interface MsgChangeThoughtGasPriceResponse {}
export interface MsgChangeThoughtGasPriceResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPriceResponse";
  value: Uint8Array;
}
export interface MsgChangeThoughtGasPriceResponseAmino {}
export interface MsgChangeThoughtGasPriceResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPriceResponse";
  value: MsgChangeThoughtGasPriceResponseAmino;
}
export interface MsgChangeThoughtGasPriceResponseSDKType {}
export interface MsgChangeThoughtPeriodResponse {}
export interface MsgChangeThoughtPeriodResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriodResponse";
  value: Uint8Array;
}
export interface MsgChangeThoughtPeriodResponseAmino {}
export interface MsgChangeThoughtPeriodResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriodResponse";
  value: MsgChangeThoughtPeriodResponseAmino;
}
export interface MsgChangeThoughtPeriodResponseSDKType {}
export interface MsgChangeThoughtBlockResponse {}
export interface MsgChangeThoughtBlockResponseProtoMsg {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtBlockResponse";
  value: Uint8Array;
}
export interface MsgChangeThoughtBlockResponseAmino {}
export interface MsgChangeThoughtBlockResponseAminoMsg {
  type: "/cyber.dmn.v1beta1.MsgChangeThoughtBlockResponse";
  value: MsgChangeThoughtBlockResponseAmino;
}
export interface MsgChangeThoughtBlockResponseSDKType {}
function createBaseMsgCreateThought(): MsgCreateThought {
  return {
    program: "",
    trigger: Trigger.fromPartial({}),
    load: Load.fromPartial({}),
    name: "",
    particle: ""
  };
}
export const MsgCreateThought = {
  typeUrl: "/cyber.dmn.v1beta1.MsgCreateThought",
  encode(message: MsgCreateThought, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): MsgCreateThought {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      trigger: isSet(object.trigger) ? Trigger.fromJSON(object.trigger) : undefined,
      load: isSet(object.load) ? Load.fromJSON(object.load) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      particle: isSet(object.particle) ? String(object.particle) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateThought>): MsgCreateThought {
    const message = createBaseMsgCreateThought();
    message.program = object.program ?? "";
    message.trigger = object.trigger !== undefined && object.trigger !== null ? Trigger.fromPartial(object.trigger) : undefined;
    message.load = object.load !== undefined && object.load !== null ? Load.fromPartial(object.load) : undefined;
    message.name = object.name ?? "";
    message.particle = object.particle ?? "";
    return message;
  },
  fromAmino(object: MsgCreateThoughtAmino): MsgCreateThought {
    const message = createBaseMsgCreateThought();
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
  toAmino(message: MsgCreateThought): MsgCreateThoughtAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.trigger = message.trigger ? Trigger.toAmino(message.trigger) : undefined;
    obj.load = message.load ? Load.toAmino(message.load) : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.particle = message.particle === "" ? undefined : message.particle;
    return obj;
  },
  fromAminoMsg(object: MsgCreateThoughtAminoMsg): MsgCreateThought {
    return MsgCreateThought.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateThoughtProtoMsg): MsgCreateThought {
    return MsgCreateThought.decode(message.value);
  },
  toProto(message: MsgCreateThought): Uint8Array {
    return MsgCreateThought.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateThought): MsgCreateThoughtProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgCreateThought",
      value: MsgCreateThought.encode(message).finish()
    };
  }
};
function createBaseMsgForgetThought(): MsgForgetThought {
  return {
    program: "",
    name: ""
  };
}
export const MsgForgetThought = {
  typeUrl: "/cyber.dmn.v1beta1.MsgForgetThought",
  encode(message: MsgForgetThought, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): MsgForgetThought {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<MsgForgetThought>): MsgForgetThought {
    const message = createBaseMsgForgetThought();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgForgetThoughtAmino): MsgForgetThought {
    const message = createBaseMsgForgetThought();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgForgetThought): MsgForgetThoughtAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgForgetThoughtAminoMsg): MsgForgetThought {
    return MsgForgetThought.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForgetThoughtProtoMsg): MsgForgetThought {
    return MsgForgetThought.decode(message.value);
  },
  toProto(message: MsgForgetThought): Uint8Array {
    return MsgForgetThought.encode(message).finish();
  },
  toProtoMsg(message: MsgForgetThought): MsgForgetThoughtProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgForgetThought",
      value: MsgForgetThought.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtParticle(): MsgChangeThoughtParticle {
  return {
    program: "",
    name: "",
    particle: ""
  };
}
export const MsgChangeThoughtParticle = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle",
  encode(message: MsgChangeThoughtParticle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.particle !== "") {
      writer.uint32(26).string(message.particle);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeThoughtParticle {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      particle: isSet(object.particle) ? String(object.particle) : ""
    };
  },
  fromPartial(object: Partial<MsgChangeThoughtParticle>): MsgChangeThoughtParticle {
    const message = createBaseMsgChangeThoughtParticle();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.particle = object.particle ?? "";
    return message;
  },
  fromAmino(object: MsgChangeThoughtParticleAmino): MsgChangeThoughtParticle {
    const message = createBaseMsgChangeThoughtParticle();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.particle !== undefined && object.particle !== null) {
      message.particle = object.particle;
    }
    return message;
  },
  toAmino(message: MsgChangeThoughtParticle): MsgChangeThoughtParticleAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    obj.particle = message.particle === "" ? undefined : message.particle;
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtParticleAminoMsg): MsgChangeThoughtParticle {
    return MsgChangeThoughtParticle.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtParticleProtoMsg): MsgChangeThoughtParticle {
    return MsgChangeThoughtParticle.decode(message.value);
  },
  toProto(message: MsgChangeThoughtParticle): Uint8Array {
    return MsgChangeThoughtParticle.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtParticle): MsgChangeThoughtParticleProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtParticle",
      value: MsgChangeThoughtParticle.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtName(): MsgChangeThoughtName {
  return {
    program: "",
    name: "",
    newName: ""
  };
}
export const MsgChangeThoughtName = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtName",
  encode(message: MsgChangeThoughtName, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.newName !== "") {
      writer.uint32(26).string(message.newName);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeThoughtName {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      newName: isSet(object.newName) ? String(object.newName) : ""
    };
  },
  fromPartial(object: Partial<MsgChangeThoughtName>): MsgChangeThoughtName {
    const message = createBaseMsgChangeThoughtName();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.newName = object.newName ?? "";
    return message;
  },
  fromAmino(object: MsgChangeThoughtNameAmino): MsgChangeThoughtName {
    const message = createBaseMsgChangeThoughtName();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.new_name !== undefined && object.new_name !== null) {
      message.newName = object.new_name;
    }
    return message;
  },
  toAmino(message: MsgChangeThoughtName): MsgChangeThoughtNameAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    obj.new_name = message.newName === "" ? undefined : message.newName;
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtNameAminoMsg): MsgChangeThoughtName {
    return MsgChangeThoughtName.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtNameProtoMsg): MsgChangeThoughtName {
    return MsgChangeThoughtName.decode(message.value);
  },
  toProto(message: MsgChangeThoughtName): Uint8Array {
    return MsgChangeThoughtName.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtName): MsgChangeThoughtNameProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtName",
      value: MsgChangeThoughtName.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtInput(): MsgChangeThoughtInput {
  return {
    program: "",
    name: "",
    input: ""
  };
}
export const MsgChangeThoughtInput = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtInput",
  encode(message: MsgChangeThoughtInput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.input !== "") {
      writer.uint32(26).string(message.input);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeThoughtInput {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      input: isSet(object.input) ? String(object.input) : ""
    };
  },
  fromPartial(object: Partial<MsgChangeThoughtInput>): MsgChangeThoughtInput {
    const message = createBaseMsgChangeThoughtInput();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.input = object.input ?? "";
    return message;
  },
  fromAmino(object: MsgChangeThoughtInputAmino): MsgChangeThoughtInput {
    const message = createBaseMsgChangeThoughtInput();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = object.input;
    }
    return message;
  },
  toAmino(message: MsgChangeThoughtInput): MsgChangeThoughtInputAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    obj.input = message.input === "" ? undefined : message.input;
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtInputAminoMsg): MsgChangeThoughtInput {
    return MsgChangeThoughtInput.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtInputProtoMsg): MsgChangeThoughtInput {
    return MsgChangeThoughtInput.decode(message.value);
  },
  toProto(message: MsgChangeThoughtInput): Uint8Array {
    return MsgChangeThoughtInput.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtInput): MsgChangeThoughtInputProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtInput",
      value: MsgChangeThoughtInput.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtGasPrice(): MsgChangeThoughtGasPrice {
  return {
    program: "",
    name: "",
    gasPrice: Coin.fromPartial({})
  };
}
export const MsgChangeThoughtGasPrice = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice",
  encode(message: MsgChangeThoughtGasPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.gasPrice !== undefined) {
      Coin.encode(message.gasPrice, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeThoughtGasPrice {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      gasPrice: isSet(object.gasPrice) ? Coin.fromJSON(object.gasPrice) : undefined
    };
  },
  fromPartial(object: Partial<MsgChangeThoughtGasPrice>): MsgChangeThoughtGasPrice {
    const message = createBaseMsgChangeThoughtGasPrice();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? Coin.fromPartial(object.gasPrice) : undefined;
    return message;
  },
  fromAmino(object: MsgChangeThoughtGasPriceAmino): MsgChangeThoughtGasPrice {
    const message = createBaseMsgChangeThoughtGasPrice();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gasPrice = Coin.fromAmino(object.gas_price);
    }
    return message;
  },
  toAmino(message: MsgChangeThoughtGasPrice): MsgChangeThoughtGasPriceAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    obj.gas_price = message.gasPrice ? Coin.toAmino(message.gasPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtGasPriceAminoMsg): MsgChangeThoughtGasPrice {
    return MsgChangeThoughtGasPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtGasPriceProtoMsg): MsgChangeThoughtGasPrice {
    return MsgChangeThoughtGasPrice.decode(message.value);
  },
  toProto(message: MsgChangeThoughtGasPrice): Uint8Array {
    return MsgChangeThoughtGasPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtGasPrice): MsgChangeThoughtGasPriceProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice",
      value: MsgChangeThoughtGasPrice.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtPeriod(): MsgChangeThoughtPeriod {
  return {
    program: "",
    name: "",
    period: BigInt(0)
  };
}
export const MsgChangeThoughtPeriod = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod",
  encode(message: MsgChangeThoughtPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeThoughtPeriod {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      period: isSet(object.period) ? BigInt(object.period.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgChangeThoughtPeriod>): MsgChangeThoughtPeriod {
    const message = createBaseMsgChangeThoughtPeriod();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgChangeThoughtPeriodAmino): MsgChangeThoughtPeriod {
    const message = createBaseMsgChangeThoughtPeriod();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    return message;
  },
  toAmino(message: MsgChangeThoughtPeriod): MsgChangeThoughtPeriodAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    obj.period = message.period !== BigInt(0) ? message.period.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtPeriodAminoMsg): MsgChangeThoughtPeriod {
    return MsgChangeThoughtPeriod.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtPeriodProtoMsg): MsgChangeThoughtPeriod {
    return MsgChangeThoughtPeriod.decode(message.value);
  },
  toProto(message: MsgChangeThoughtPeriod): Uint8Array {
    return MsgChangeThoughtPeriod.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtPeriod): MsgChangeThoughtPeriodProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod",
      value: MsgChangeThoughtPeriod.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtBlock(): MsgChangeThoughtBlock {
  return {
    program: "",
    name: "",
    block: BigInt(0)
  };
}
export const MsgChangeThoughtBlock = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock",
  encode(message: MsgChangeThoughtBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.program !== "") {
      writer.uint32(10).string(message.program);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.block !== BigInt(0)) {
      writer.uint32(24).uint64(message.block);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeThoughtBlock {
    return {
      program: isSet(object.program) ? String(object.program) : "",
      name: isSet(object.name) ? String(object.name) : "",
      block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgChangeThoughtBlock>): MsgChangeThoughtBlock {
    const message = createBaseMsgChangeThoughtBlock();
    message.program = object.program ?? "";
    message.name = object.name ?? "";
    message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgChangeThoughtBlockAmino): MsgChangeThoughtBlock {
    const message = createBaseMsgChangeThoughtBlock();
    if (object.program !== undefined && object.program !== null) {
      message.program = object.program;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = BigInt(object.block);
    }
    return message;
  },
  toAmino(message: MsgChangeThoughtBlock): MsgChangeThoughtBlockAmino {
    const obj: any = {};
    obj.program = message.program === "" ? undefined : message.program;
    obj.name = message.name === "" ? undefined : message.name;
    obj.block = message.block !== BigInt(0) ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtBlockAminoMsg): MsgChangeThoughtBlock {
    return MsgChangeThoughtBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtBlockProtoMsg): MsgChangeThoughtBlock {
    return MsgChangeThoughtBlock.decode(message.value);
  },
  toProto(message: MsgChangeThoughtBlock): Uint8Array {
    return MsgChangeThoughtBlock.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtBlock): MsgChangeThoughtBlockProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtBlock",
      value: MsgChangeThoughtBlock.encode(message).finish()
    };
  }
};
function createBaseMsgCreateThoughtResponse(): MsgCreateThoughtResponse {
  return {};
}
export const MsgCreateThoughtResponse = {
  typeUrl: "/cyber.dmn.v1beta1.MsgCreateThoughtResponse",
  encode(_: MsgCreateThoughtResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateThoughtResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateThoughtResponse>): MsgCreateThoughtResponse {
    const message = createBaseMsgCreateThoughtResponse();
    return message;
  },
  fromAmino(_: MsgCreateThoughtResponseAmino): MsgCreateThoughtResponse {
    const message = createBaseMsgCreateThoughtResponse();
    return message;
  },
  toAmino(_: MsgCreateThoughtResponse): MsgCreateThoughtResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateThoughtResponseAminoMsg): MsgCreateThoughtResponse {
    return MsgCreateThoughtResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateThoughtResponseProtoMsg): MsgCreateThoughtResponse {
    return MsgCreateThoughtResponse.decode(message.value);
  },
  toProto(message: MsgCreateThoughtResponse): Uint8Array {
    return MsgCreateThoughtResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateThoughtResponse): MsgCreateThoughtResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgCreateThoughtResponse",
      value: MsgCreateThoughtResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForgetThoughtResponse(): MsgForgetThoughtResponse {
  return {};
}
export const MsgForgetThoughtResponse = {
  typeUrl: "/cyber.dmn.v1beta1.MsgForgetThoughtResponse",
  encode(_: MsgForgetThoughtResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgForgetThoughtResponse {
    return {};
  },
  fromPartial(_: Partial<MsgForgetThoughtResponse>): MsgForgetThoughtResponse {
    const message = createBaseMsgForgetThoughtResponse();
    return message;
  },
  fromAmino(_: MsgForgetThoughtResponseAmino): MsgForgetThoughtResponse {
    const message = createBaseMsgForgetThoughtResponse();
    return message;
  },
  toAmino(_: MsgForgetThoughtResponse): MsgForgetThoughtResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgForgetThoughtResponseAminoMsg): MsgForgetThoughtResponse {
    return MsgForgetThoughtResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForgetThoughtResponseProtoMsg): MsgForgetThoughtResponse {
    return MsgForgetThoughtResponse.decode(message.value);
  },
  toProto(message: MsgForgetThoughtResponse): Uint8Array {
    return MsgForgetThoughtResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForgetThoughtResponse): MsgForgetThoughtResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgForgetThoughtResponse",
      value: MsgForgetThoughtResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtParticleResponse(): MsgChangeThoughtParticleResponse {
  return {};
}
export const MsgChangeThoughtParticleResponse = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtParticleResponse",
  encode(_: MsgChangeThoughtParticleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeThoughtParticleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeThoughtParticleResponse>): MsgChangeThoughtParticleResponse {
    const message = createBaseMsgChangeThoughtParticleResponse();
    return message;
  },
  fromAmino(_: MsgChangeThoughtParticleResponseAmino): MsgChangeThoughtParticleResponse {
    const message = createBaseMsgChangeThoughtParticleResponse();
    return message;
  },
  toAmino(_: MsgChangeThoughtParticleResponse): MsgChangeThoughtParticleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtParticleResponseAminoMsg): MsgChangeThoughtParticleResponse {
    return MsgChangeThoughtParticleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtParticleResponseProtoMsg): MsgChangeThoughtParticleResponse {
    return MsgChangeThoughtParticleResponse.decode(message.value);
  },
  toProto(message: MsgChangeThoughtParticleResponse): Uint8Array {
    return MsgChangeThoughtParticleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtParticleResponse): MsgChangeThoughtParticleResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtParticleResponse",
      value: MsgChangeThoughtParticleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtNameResponse(): MsgChangeThoughtNameResponse {
  return {};
}
export const MsgChangeThoughtNameResponse = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtNameResponse",
  encode(_: MsgChangeThoughtNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeThoughtNameResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeThoughtNameResponse>): MsgChangeThoughtNameResponse {
    const message = createBaseMsgChangeThoughtNameResponse();
    return message;
  },
  fromAmino(_: MsgChangeThoughtNameResponseAmino): MsgChangeThoughtNameResponse {
    const message = createBaseMsgChangeThoughtNameResponse();
    return message;
  },
  toAmino(_: MsgChangeThoughtNameResponse): MsgChangeThoughtNameResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtNameResponseAminoMsg): MsgChangeThoughtNameResponse {
    return MsgChangeThoughtNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtNameResponseProtoMsg): MsgChangeThoughtNameResponse {
    return MsgChangeThoughtNameResponse.decode(message.value);
  },
  toProto(message: MsgChangeThoughtNameResponse): Uint8Array {
    return MsgChangeThoughtNameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtNameResponse): MsgChangeThoughtNameResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtNameResponse",
      value: MsgChangeThoughtNameResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtInputResponse(): MsgChangeThoughtInputResponse {
  return {};
}
export const MsgChangeThoughtInputResponse = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtInputResponse",
  encode(_: MsgChangeThoughtInputResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeThoughtInputResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeThoughtInputResponse>): MsgChangeThoughtInputResponse {
    const message = createBaseMsgChangeThoughtInputResponse();
    return message;
  },
  fromAmino(_: MsgChangeThoughtInputResponseAmino): MsgChangeThoughtInputResponse {
    const message = createBaseMsgChangeThoughtInputResponse();
    return message;
  },
  toAmino(_: MsgChangeThoughtInputResponse): MsgChangeThoughtInputResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtInputResponseAminoMsg): MsgChangeThoughtInputResponse {
    return MsgChangeThoughtInputResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtInputResponseProtoMsg): MsgChangeThoughtInputResponse {
    return MsgChangeThoughtInputResponse.decode(message.value);
  },
  toProto(message: MsgChangeThoughtInputResponse): Uint8Array {
    return MsgChangeThoughtInputResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtInputResponse): MsgChangeThoughtInputResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtInputResponse",
      value: MsgChangeThoughtInputResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtGasPriceResponse(): MsgChangeThoughtGasPriceResponse {
  return {};
}
export const MsgChangeThoughtGasPriceResponse = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPriceResponse",
  encode(_: MsgChangeThoughtGasPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeThoughtGasPriceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeThoughtGasPriceResponse>): MsgChangeThoughtGasPriceResponse {
    const message = createBaseMsgChangeThoughtGasPriceResponse();
    return message;
  },
  fromAmino(_: MsgChangeThoughtGasPriceResponseAmino): MsgChangeThoughtGasPriceResponse {
    const message = createBaseMsgChangeThoughtGasPriceResponse();
    return message;
  },
  toAmino(_: MsgChangeThoughtGasPriceResponse): MsgChangeThoughtGasPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtGasPriceResponseAminoMsg): MsgChangeThoughtGasPriceResponse {
    return MsgChangeThoughtGasPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtGasPriceResponseProtoMsg): MsgChangeThoughtGasPriceResponse {
    return MsgChangeThoughtGasPriceResponse.decode(message.value);
  },
  toProto(message: MsgChangeThoughtGasPriceResponse): Uint8Array {
    return MsgChangeThoughtGasPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtGasPriceResponse): MsgChangeThoughtGasPriceResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtGasPriceResponse",
      value: MsgChangeThoughtGasPriceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtPeriodResponse(): MsgChangeThoughtPeriodResponse {
  return {};
}
export const MsgChangeThoughtPeriodResponse = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriodResponse",
  encode(_: MsgChangeThoughtPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeThoughtPeriodResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeThoughtPeriodResponse>): MsgChangeThoughtPeriodResponse {
    const message = createBaseMsgChangeThoughtPeriodResponse();
    return message;
  },
  fromAmino(_: MsgChangeThoughtPeriodResponseAmino): MsgChangeThoughtPeriodResponse {
    const message = createBaseMsgChangeThoughtPeriodResponse();
    return message;
  },
  toAmino(_: MsgChangeThoughtPeriodResponse): MsgChangeThoughtPeriodResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtPeriodResponseAminoMsg): MsgChangeThoughtPeriodResponse {
    return MsgChangeThoughtPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtPeriodResponseProtoMsg): MsgChangeThoughtPeriodResponse {
    return MsgChangeThoughtPeriodResponse.decode(message.value);
  },
  toProto(message: MsgChangeThoughtPeriodResponse): Uint8Array {
    return MsgChangeThoughtPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtPeriodResponse): MsgChangeThoughtPeriodResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtPeriodResponse",
      value: MsgChangeThoughtPeriodResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeThoughtBlockResponse(): MsgChangeThoughtBlockResponse {
  return {};
}
export const MsgChangeThoughtBlockResponse = {
  typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtBlockResponse",
  encode(_: MsgChangeThoughtBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeThoughtBlockResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeThoughtBlockResponse>): MsgChangeThoughtBlockResponse {
    const message = createBaseMsgChangeThoughtBlockResponse();
    return message;
  },
  fromAmino(_: MsgChangeThoughtBlockResponseAmino): MsgChangeThoughtBlockResponse {
    const message = createBaseMsgChangeThoughtBlockResponse();
    return message;
  },
  toAmino(_: MsgChangeThoughtBlockResponse): MsgChangeThoughtBlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeThoughtBlockResponseAminoMsg): MsgChangeThoughtBlockResponse {
    return MsgChangeThoughtBlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeThoughtBlockResponseProtoMsg): MsgChangeThoughtBlockResponse {
    return MsgChangeThoughtBlockResponse.decode(message.value);
  },
  toProto(message: MsgChangeThoughtBlockResponse): Uint8Array {
    return MsgChangeThoughtBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeThoughtBlockResponse): MsgChangeThoughtBlockResponseProtoMsg {
    return {
      typeUrl: "/cyber.dmn.v1beta1.MsgChangeThoughtBlockResponse",
      value: MsgChangeThoughtBlockResponse.encode(message).finish()
    };
  }
};