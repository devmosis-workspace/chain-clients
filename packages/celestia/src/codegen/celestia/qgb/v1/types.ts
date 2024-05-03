import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
  /** Voting power of the validator. */
  power: bigint;
  /** EVM address that will be used by the validator to sign messages. */
  evmAddress: string;
}
export interface BridgeValidatorProtoMsg {
  typeUrl: "/celestia.qgb.v1.BridgeValidator";
  value: Uint8Array;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorAmino {
  /** Voting power of the validator. */
  power?: string;
  /** EVM address that will be used by the validator to sign messages. */
  evm_address?: string;
}
export interface BridgeValidatorAminoMsg {
  type: "/celestia.qgb.v1.BridgeValidator";
  value: BridgeValidatorAmino;
}
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidatorSDKType {
  power: bigint;
  evm_address: string;
}
/**
 * Valset is the EVM Bridge Multsig Set, each qgb validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
  $typeUrl?: "/celestia.qgb.v1.Valset";
  /**
   * Universal nonce defined under:
   * https://github.com/celestiaorg/celestia-app/pull/464
   */
  nonce: bigint;
  /** List of BridgeValidator containing the current validator set. */
  members: BridgeValidator[];
  /** Current chain height */
  height: bigint;
  /** Block time where this valset was created */
  time: Timestamp;
}
export interface ValsetProtoMsg {
  typeUrl: "/celestia.qgb.v1.Valset";
  value: Uint8Array;
}
/**
 * Valset is the EVM Bridge Multsig Set, each qgb validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetAmino {
  /**
   * Universal nonce defined under:
   * https://github.com/celestiaorg/celestia-app/pull/464
   */
  nonce?: string;
  /** List of BridgeValidator containing the current validator set. */
  members?: BridgeValidatorAmino[];
  /** Current chain height */
  height?: string;
  /** Block time where this valset was created */
  time?: string;
}
export interface ValsetAminoMsg {
  type: "/celestia.qgb.v1.Valset";
  value: ValsetAmino;
}
/**
 * Valset is the EVM Bridge Multsig Set, each qgb validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface ValsetSDKType {
  $typeUrl?: "/celestia.qgb.v1.Valset";
  nonce: bigint;
  members: BridgeValidatorSDKType[];
  height: bigint;
  time: TimestampSDKType;
}
/**
 * DataCommitment is the data commitment request message that will be signed
 * using orchestrators.
 * It does not contain a `commitment` field as this message will be created
 * inside the state machine and it doesn't make sense to ask tendermint for the
 * commitment there.
 * The range defined by begin_block and end_block is end exclusive.
 */
export interface DataCommitment {
  $typeUrl?: "/celestia.qgb.v1.DataCommitment";
  /**
   * Universal nonce defined under:
   * https://github.com/celestiaorg/celestia-app/pull/464
   */
  nonce: bigint;
  /**
   * First block defining the ordered set of blocks used to create the
   * commitment.
   */
  beginBlock: bigint;
  /**
   * End exclusive last block defining the ordered set of blocks used to create
   * the commitment.
   */
  endBlock: bigint;
  /** Block time where this data commitment was created */
  time: Timestamp;
}
export interface DataCommitmentProtoMsg {
  typeUrl: "/celestia.qgb.v1.DataCommitment";
  value: Uint8Array;
}
/**
 * DataCommitment is the data commitment request message that will be signed
 * using orchestrators.
 * It does not contain a `commitment` field as this message will be created
 * inside the state machine and it doesn't make sense to ask tendermint for the
 * commitment there.
 * The range defined by begin_block and end_block is end exclusive.
 */
export interface DataCommitmentAmino {
  /**
   * Universal nonce defined under:
   * https://github.com/celestiaorg/celestia-app/pull/464
   */
  nonce?: string;
  /**
   * First block defining the ordered set of blocks used to create the
   * commitment.
   */
  begin_block?: string;
  /**
   * End exclusive last block defining the ordered set of blocks used to create
   * the commitment.
   */
  end_block?: string;
  /** Block time where this data commitment was created */
  time?: string;
}
export interface DataCommitmentAminoMsg {
  type: "/celestia.qgb.v1.DataCommitment";
  value: DataCommitmentAmino;
}
/**
 * DataCommitment is the data commitment request message that will be signed
 * using orchestrators.
 * It does not contain a `commitment` field as this message will be created
 * inside the state machine and it doesn't make sense to ask tendermint for the
 * commitment there.
 * The range defined by begin_block and end_block is end exclusive.
 */
export interface DataCommitmentSDKType {
  $typeUrl?: "/celestia.qgb.v1.DataCommitment";
  nonce: bigint;
  begin_block: bigint;
  end_block: bigint;
  time: TimestampSDKType;
}
function createBaseBridgeValidator(): BridgeValidator {
  return {
    power: BigInt(0),
    evmAddress: ""
  };
}
export const BridgeValidator = {
  typeUrl: "/celestia.qgb.v1.BridgeValidator",
  encode(message: BridgeValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.power !== BigInt(0)) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.evmAddress !== "") {
      writer.uint32(18).string(message.evmAddress);
    }
    return writer;
  },
  fromJSON(object: any): BridgeValidator {
    return {
      power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0),
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : ""
    };
  },
  fromPartial(object: Partial<BridgeValidator>): BridgeValidator {
    const message = createBaseBridgeValidator();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    message.evmAddress = object.evmAddress ?? "";
    return message;
  },
  fromAmino(object: BridgeValidatorAmino): BridgeValidator {
    const message = createBaseBridgeValidator();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.evm_address !== undefined && object.evm_address !== null) {
      message.evmAddress = object.evm_address;
    }
    return message;
  },
  toAmino(message: BridgeValidator): BridgeValidatorAmino {
    const obj: any = {};
    obj.power = message.power !== BigInt(0) ? message.power.toString() : undefined;
    obj.evm_address = message.evmAddress === "" ? undefined : message.evmAddress;
    return obj;
  },
  fromAminoMsg(object: BridgeValidatorAminoMsg): BridgeValidator {
    return BridgeValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: BridgeValidatorProtoMsg): BridgeValidator {
    return BridgeValidator.decode(message.value);
  },
  toProto(message: BridgeValidator): Uint8Array {
    return BridgeValidator.encode(message).finish();
  },
  toProtoMsg(message: BridgeValidator): BridgeValidatorProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.BridgeValidator",
      value: BridgeValidator.encode(message).finish()
    };
  }
};
function createBaseValset(): Valset {
  return {
    $typeUrl: "/celestia.qgb.v1.Valset",
    nonce: BigInt(0),
    members: [],
    height: BigInt(0),
    time: Timestamp.fromPartial({})
  };
}
export const Valset = {
  typeUrl: "/celestia.qgb.v1.Valset",
  encode(message: Valset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Valset {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromJSON(e)) : [],
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined
    };
  },
  fromPartial(object: Partial<Valset>): Valset {
    const message = createBaseValset();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    return message;
  },
  fromAmino(object: ValsetAmino): Valset {
    const message = createBaseValset();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    message.members = object.members?.map(e => BridgeValidator.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    return message;
  },
  toAmino(message: Valset): ValsetAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValsetAminoMsg): Valset {
    return Valset.fromAmino(object.value);
  },
  fromProtoMsg(message: ValsetProtoMsg): Valset {
    return Valset.decode(message.value);
  },
  toProto(message: Valset): Uint8Array {
    return Valset.encode(message).finish();
  },
  toProtoMsg(message: Valset): ValsetProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.Valset",
      value: Valset.encode(message).finish()
    };
  }
};
function createBaseDataCommitment(): DataCommitment {
  return {
    $typeUrl: "/celestia.qgb.v1.DataCommitment",
    nonce: BigInt(0),
    beginBlock: BigInt(0),
    endBlock: BigInt(0),
    time: Timestamp.fromPartial({})
  };
}
export const DataCommitment = {
  typeUrl: "/celestia.qgb.v1.DataCommitment",
  encode(message: DataCommitment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.beginBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.beginBlock);
    }
    if (message.endBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.endBlock);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DataCommitment {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      beginBlock: isSet(object.beginBlock) ? BigInt(object.beginBlock.toString()) : BigInt(0),
      endBlock: isSet(object.endBlock) ? BigInt(object.endBlock.toString()) : BigInt(0),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined
    };
  },
  fromPartial(object: Partial<DataCommitment>): DataCommitment {
    const message = createBaseDataCommitment();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? BigInt(object.beginBlock.toString()) : BigInt(0);
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? BigInt(object.endBlock.toString()) : BigInt(0);
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    return message;
  },
  fromAmino(object: DataCommitmentAmino): DataCommitment {
    const message = createBaseDataCommitment();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce);
    }
    if (object.begin_block !== undefined && object.begin_block !== null) {
      message.beginBlock = BigInt(object.begin_block);
    }
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = BigInt(object.end_block);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    return message;
  },
  toAmino(message: DataCommitment): DataCommitmentAmino {
    const obj: any = {};
    obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
    obj.begin_block = message.beginBlock !== BigInt(0) ? message.beginBlock.toString() : undefined;
    obj.end_block = message.endBlock !== BigInt(0) ? message.endBlock.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    return obj;
  },
  fromAminoMsg(object: DataCommitmentAminoMsg): DataCommitment {
    return DataCommitment.fromAmino(object.value);
  },
  fromProtoMsg(message: DataCommitmentProtoMsg): DataCommitment {
    return DataCommitment.decode(message.value);
  },
  toProto(message: DataCommitment): Uint8Array {
    return DataCommitment.encode(message).finish();
  },
  toProtoMsg(message: DataCommitment): DataCommitmentProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.DataCommitment",
      value: DataCommitment.encode(message).finish()
    };
  }
};