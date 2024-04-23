import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptor {
  /** height is the height of the block */
  height: bigint;
  /** stateRoot is a 32 byte array of the hash of the block (state root of the block) */
  stateRoot: Uint8Array;
  /**
   * intermediateStatesRoot is a 32 byte array representing
   * the root of a Merkle tree built from the ISRs of the block (Intermediate State Roots)
   */
  intermediateStatesRoot: Uint8Array;
}
export interface BlockDescriptorProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptor";
  value: Uint8Array;
}
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptorAmino {
  /** height is the height of the block */
  height?: string;
  /** stateRoot is a 32 byte array of the hash of the block (state root of the block) */
  stateRoot?: string;
  /**
   * intermediateStatesRoot is a 32 byte array representing
   * the root of a Merkle tree built from the ISRs of the block (Intermediate State Roots)
   */
  intermediateStatesRoot?: string;
}
export interface BlockDescriptorAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.BlockDescriptor";
  value: BlockDescriptorAmino;
}
/** BlockDescriptor defines a single rollapp chain block description. */
export interface BlockDescriptorSDKType {
  height: bigint;
  stateRoot: Uint8Array;
  intermediateStatesRoot: Uint8Array;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptors {
  BD: BlockDescriptor[];
}
export interface BlockDescriptorsProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptors";
  value: Uint8Array;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptorsAmino {
  BD?: BlockDescriptorAmino[];
}
export interface BlockDescriptorsAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.BlockDescriptors";
  value: BlockDescriptorsAmino;
}
/** BlockDescriptors defines list of BlockDescriptor. */
export interface BlockDescriptorsSDKType {
  BD: BlockDescriptorSDKType[];
}
function createBaseBlockDescriptor(): BlockDescriptor {
  return {
    height: BigInt(0),
    stateRoot: new Uint8Array(),
    intermediateStatesRoot: new Uint8Array()
  };
}
export const BlockDescriptor = {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptor",
  encode(message: BlockDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.stateRoot.length !== 0) {
      writer.uint32(18).bytes(message.stateRoot);
    }
    if (message.intermediateStatesRoot.length !== 0) {
      writer.uint32(26).bytes(message.intermediateStatesRoot);
    }
    return writer;
  },
  fromJSON(object: any): BlockDescriptor {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      stateRoot: isSet(object.stateRoot) ? bytesFromBase64(object.stateRoot) : new Uint8Array(),
      intermediateStatesRoot: isSet(object.intermediateStatesRoot) ? bytesFromBase64(object.intermediateStatesRoot) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<BlockDescriptor>): BlockDescriptor {
    const message = createBaseBlockDescriptor();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.stateRoot = object.stateRoot ?? new Uint8Array();
    message.intermediateStatesRoot = object.intermediateStatesRoot ?? new Uint8Array();
    return message;
  },
  fromAmino(object: BlockDescriptorAmino): BlockDescriptor {
    const message = createBaseBlockDescriptor();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.stateRoot !== undefined && object.stateRoot !== null) {
      message.stateRoot = bytesFromBase64(object.stateRoot);
    }
    if (object.intermediateStatesRoot !== undefined && object.intermediateStatesRoot !== null) {
      message.intermediateStatesRoot = bytesFromBase64(object.intermediateStatesRoot);
    }
    return message;
  },
  toAmino(message: BlockDescriptor): BlockDescriptorAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.stateRoot = message.stateRoot ? base64FromBytes(message.stateRoot) : undefined;
    obj.intermediateStatesRoot = message.intermediateStatesRoot ? base64FromBytes(message.intermediateStatesRoot) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockDescriptorAminoMsg): BlockDescriptor {
    return BlockDescriptor.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockDescriptorProtoMsg): BlockDescriptor {
    return BlockDescriptor.decode(message.value);
  },
  toProto(message: BlockDescriptor): Uint8Array {
    return BlockDescriptor.encode(message).finish();
  },
  toProtoMsg(message: BlockDescriptor): BlockDescriptorProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptor",
      value: BlockDescriptor.encode(message).finish()
    };
  }
};
function createBaseBlockDescriptors(): BlockDescriptors {
  return {
    BD: []
  };
}
export const BlockDescriptors = {
  typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptors",
  encode(message: BlockDescriptors, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.BD) {
      BlockDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BlockDescriptors {
    return {
      BD: Array.isArray(object?.BD) ? object.BD.map((e: any) => BlockDescriptor.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BlockDescriptors>): BlockDescriptors {
    const message = createBaseBlockDescriptors();
    message.BD = object.BD?.map(e => BlockDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BlockDescriptorsAmino): BlockDescriptors {
    const message = createBaseBlockDescriptors();
    message.BD = object.BD?.map(e => BlockDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BlockDescriptors): BlockDescriptorsAmino {
    const obj: any = {};
    if (message.BD) {
      obj.BD = message.BD.map(e => e ? BlockDescriptor.toAmino(e) : undefined);
    } else {
      obj.BD = [];
    }
    return obj;
  },
  fromAminoMsg(object: BlockDescriptorsAminoMsg): BlockDescriptors {
    return BlockDescriptors.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockDescriptorsProtoMsg): BlockDescriptors {
    return BlockDescriptors.decode(message.value);
  },
  toProto(message: BlockDescriptors): Uint8Array {
    return BlockDescriptors.encode(message).finish();
  },
  toProtoMsg(message: BlockDescriptors): BlockDescriptorsProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.BlockDescriptors",
      value: BlockDescriptors.encode(message).finish()
    };
  }
};