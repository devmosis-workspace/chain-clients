import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface ScheduleCorkEvent {
  signer: string;
  validator: string;
  cork: string;
  blockHeight: bigint;
  chainId: bigint;
}
export interface ScheduleCorkEventProtoMsg {
  typeUrl: "/axelarcork.v1.ScheduleCorkEvent";
  value: Uint8Array;
}
export interface ScheduleCorkEventAmino {
  signer?: string;
  validator?: string;
  cork?: string;
  block_height?: string;
  chain_id?: string;
}
export interface ScheduleCorkEventAminoMsg {
  type: "/axelarcork.v1.ScheduleCorkEvent";
  value: ScheduleCorkEventAmino;
}
export interface ScheduleCorkEventSDKType {
  signer: string;
  validator: string;
  cork: string;
  block_height: bigint;
  chain_id: bigint;
}
function createBaseScheduleCorkEvent(): ScheduleCorkEvent {
  return {
    signer: "",
    validator: "",
    cork: "",
    blockHeight: BigInt(0),
    chainId: BigInt(0)
  };
}
export const ScheduleCorkEvent = {
  typeUrl: "/axelarcork.v1.ScheduleCorkEvent",
  encode(message: ScheduleCorkEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.cork !== "") {
      writer.uint32(26).string(message.cork);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.blockHeight);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(40).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): ScheduleCorkEvent {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      cork: isSet(object.cork) ? String(object.cork) : "",
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ScheduleCorkEvent>): ScheduleCorkEvent {
    const message = createBaseScheduleCorkEvent();
    message.signer = object.signer ?? "";
    message.validator = object.validator ?? "";
    message.cork = object.cork ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ScheduleCorkEventAmino): ScheduleCorkEvent {
    const message = createBaseScheduleCorkEvent();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = object.cork;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: ScheduleCorkEvent): ScheduleCorkEventAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.validator = message.validator;
    obj.cork = message.cork;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ScheduleCorkEventAminoMsg): ScheduleCorkEvent {
    return ScheduleCorkEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduleCorkEventProtoMsg): ScheduleCorkEvent {
    return ScheduleCorkEvent.decode(message.value);
  },
  toProto(message: ScheduleCorkEvent): Uint8Array {
    return ScheduleCorkEvent.encode(message).finish();
  },
  toProtoMsg(message: ScheduleCorkEvent): ScheduleCorkEventProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.ScheduleCorkEvent",
      value: ScheduleCorkEvent.encode(message).finish()
    };
  }
};