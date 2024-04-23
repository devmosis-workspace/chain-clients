import { TokenMetadata, TokenMetadataAmino, TokenMetadataSDKType } from "./bank";
import { BlockDescriptors, BlockDescriptorsAmino, BlockDescriptorsSDKType } from "./block_descriptor";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** ===================== MsgCreateRollapp */
export interface MsgCreateRollapp {
  /** creator is the bech32-encoded address of the rollapp creator */
  creator: string;
  /**
   * rollappId is the unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /** @deprecated */
  codeStamp: string;
  /** genesisPath is the description of the genesis file location on the DA */
  /** @deprecated */
  genesisPath: string;
  /**
   * maxWithholdingBlocks is the maximum number of blocks for
   * an active sequencer to send a state update (MsgUpdateState)
   */
  /** @deprecated */
  maxWithholdingBlocks: bigint;
  /** maxSequencers is the maximum number of sequencers */
  maxSequencers: bigint;
  /**
   * permissionedAddresses is a bech32-encoded address list of the
   * sequencers that are allowed to serve this rollappId.
   * In the case of an empty list, the rollapp is considered permissionless
   */
  permissionedAddresses: string[];
  /** metadata provides the client information for all the registered tokens. */
  metadatas: TokenMetadata[];
}
export interface MsgCreateRollappProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp";
  value: Uint8Array;
}
/** ===================== MsgCreateRollapp */
export interface MsgCreateRollappAmino {
  /** creator is the bech32-encoded address of the rollapp creator */
  creator?: string;
  /**
   * rollappId is the unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId?: string;
  /** @deprecated */
  codeStamp?: string;
  /** genesisPath is the description of the genesis file location on the DA */
  /** @deprecated */
  genesisPath?: string;
  /**
   * maxWithholdingBlocks is the maximum number of blocks for
   * an active sequencer to send a state update (MsgUpdateState)
   */
  /** @deprecated */
  maxWithholdingBlocks?: string;
  /** maxSequencers is the maximum number of sequencers */
  maxSequencers?: string;
  /**
   * permissionedAddresses is a bech32-encoded address list of the
   * sequencers that are allowed to serve this rollappId.
   * In the case of an empty list, the rollapp is considered permissionless
   */
  permissionedAddresses?: string[];
  /** metadata provides the client information for all the registered tokens. */
  metadatas?: TokenMetadataAmino[];
}
export interface MsgCreateRollappAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp";
  value: MsgCreateRollappAmino;
}
/** ===================== MsgCreateRollapp */
export interface MsgCreateRollappSDKType {
  creator: string;
  rollappId: string;
  /** @deprecated */
  codeStamp: string;
  /** @deprecated */
  genesisPath: string;
  /** @deprecated */
  maxWithholdingBlocks: bigint;
  maxSequencers: bigint;
  permissionedAddresses: string[];
  metadatas: TokenMetadataSDKType[];
}
export interface MsgCreateRollappResponse {}
export interface MsgCreateRollappResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollappResponse";
  value: Uint8Array;
}
export interface MsgCreateRollappResponseAmino {}
export interface MsgCreateRollappResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgCreateRollappResponse";
  value: MsgCreateRollappResponseAmino;
}
export interface MsgCreateRollappResponseSDKType {}
/**
 * ===================== MsgUpdateState
 * Updating a rollapp state with a block batch
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateState {
  /** creator is the bech32-encoded address of the sequencer sending the update */
  creator: string;
  /**
   * rollappId is the rollapp that the sequencer belongs to and asking to update
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId: string;
  /** startHeight is the block height of the first block in the batch */
  startHeight: bigint;
  /** numBlocks is the number of blocks included in this batch update */
  numBlocks: bigint;
  /** DAPath is the description of the location on the DA layer */
  DAPath: string;
  /** version is the version of the rollapp */
  version: bigint;
  /**
   * BDs is a list of block description objects (one per block)
   * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
   */
  BDs: BlockDescriptors;
}
export interface MsgUpdateStateProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState";
  value: Uint8Array;
}
/**
 * ===================== MsgUpdateState
 * Updating a rollapp state with a block batch
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateStateAmino {
  /** creator is the bech32-encoded address of the sequencer sending the update */
  creator?: string;
  /**
   * rollappId is the rollapp that the sequencer belongs to and asking to update
   * The rollappId follows the same standard as cosmos chain_id
   */
  rollappId?: string;
  /** startHeight is the block height of the first block in the batch */
  startHeight?: string;
  /** numBlocks is the number of blocks included in this batch update */
  numBlocks?: string;
  /** DAPath is the description of the location on the DA layer */
  DAPath?: string;
  /** version is the version of the rollapp */
  version?: string;
  /**
   * BDs is a list of block description objects (one per block)
   * the list must be ordered by height, starting from startHeight to startHeight+numBlocks-1
   */
  BDs?: BlockDescriptorsAmino;
}
export interface MsgUpdateStateAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgUpdateState";
  value: MsgUpdateStateAmino;
}
/**
 * ===================== MsgUpdateState
 * Updating a rollapp state with a block batch
 * a block batch is a list of ordered blocks (by height)
 */
export interface MsgUpdateStateSDKType {
  creator: string;
  rollappId: string;
  startHeight: bigint;
  numBlocks: bigint;
  DAPath: string;
  version: bigint;
  BDs: BlockDescriptorsSDKType;
}
export interface MsgUpdateStateResponse {}
export interface MsgUpdateStateResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateStateResponse";
  value: Uint8Array;
}
export interface MsgUpdateStateResponseAmino {}
export interface MsgUpdateStateResponseAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.MsgUpdateStateResponse";
  value: MsgUpdateStateResponseAmino;
}
export interface MsgUpdateStateResponseSDKType {}
function createBaseMsgCreateRollapp(): MsgCreateRollapp {
  return {
    creator: "",
    rollappId: "",
    codeStamp: "",
    genesisPath: "",
    maxWithholdingBlocks: BigInt(0),
    maxSequencers: BigInt(0),
    permissionedAddresses: [],
    metadatas: []
  };
}
export const MsgCreateRollapp = {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp",
  encode(message: MsgCreateRollapp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rollappId !== "") {
      writer.uint32(18).string(message.rollappId);
    }
    if (message.codeStamp !== "") {
      writer.uint32(26).string(message.codeStamp);
    }
    if (message.genesisPath !== "") {
      writer.uint32(34).string(message.genesisPath);
    }
    if (message.maxWithholdingBlocks !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxWithholdingBlocks);
    }
    if (message.maxSequencers !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxSequencers);
    }
    for (const v of message.permissionedAddresses) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.metadatas) {
      TokenMetadata.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRollapp {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      codeStamp: isSet(object.codeStamp) ? String(object.codeStamp) : "",
      genesisPath: isSet(object.genesisPath) ? String(object.genesisPath) : "",
      maxWithholdingBlocks: isSet(object.maxWithholdingBlocks) ? BigInt(object.maxWithholdingBlocks.toString()) : BigInt(0),
      maxSequencers: isSet(object.maxSequencers) ? BigInt(object.maxSequencers.toString()) : BigInt(0),
      permissionedAddresses: Array.isArray(object?.permissionedAddresses) ? object.permissionedAddresses.map((e: any) => String(e)) : [],
      metadatas: Array.isArray(object?.metadatas) ? object.metadatas.map((e: any) => TokenMetadata.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCreateRollapp>): MsgCreateRollapp {
    const message = createBaseMsgCreateRollapp();
    message.creator = object.creator ?? "";
    message.rollappId = object.rollappId ?? "";
    message.codeStamp = object.codeStamp ?? "";
    message.genesisPath = object.genesisPath ?? "";
    message.maxWithholdingBlocks = object.maxWithholdingBlocks !== undefined && object.maxWithholdingBlocks !== null ? BigInt(object.maxWithholdingBlocks.toString()) : BigInt(0);
    message.maxSequencers = object.maxSequencers !== undefined && object.maxSequencers !== null ? BigInt(object.maxSequencers.toString()) : BigInt(0);
    message.permissionedAddresses = object.permissionedAddresses?.map(e => e) || [];
    message.metadatas = object.metadatas?.map(e => TokenMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateRollappAmino): MsgCreateRollapp {
    const message = createBaseMsgCreateRollapp();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.codeStamp !== undefined && object.codeStamp !== null) {
      message.codeStamp = object.codeStamp;
    }
    if (object.genesisPath !== undefined && object.genesisPath !== null) {
      message.genesisPath = object.genesisPath;
    }
    if (object.maxWithholdingBlocks !== undefined && object.maxWithholdingBlocks !== null) {
      message.maxWithholdingBlocks = BigInt(object.maxWithholdingBlocks);
    }
    if (object.maxSequencers !== undefined && object.maxSequencers !== null) {
      message.maxSequencers = BigInt(object.maxSequencers);
    }
    message.permissionedAddresses = object.permissionedAddresses?.map(e => e) || [];
    message.metadatas = object.metadatas?.map(e => TokenMetadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateRollapp): MsgCreateRollappAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.rollappId = message.rollappId;
    obj.codeStamp = message.codeStamp;
    obj.genesisPath = message.genesisPath;
    obj.maxWithholdingBlocks = message.maxWithholdingBlocks ? message.maxWithholdingBlocks.toString() : undefined;
    obj.maxSequencers = message.maxSequencers ? message.maxSequencers.toString() : undefined;
    if (message.permissionedAddresses) {
      obj.permissionedAddresses = message.permissionedAddresses.map(e => e);
    } else {
      obj.permissionedAddresses = [];
    }
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map(e => e ? TokenMetadata.toAmino(e) : undefined);
    } else {
      obj.metadatas = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateRollappAminoMsg): MsgCreateRollapp {
    return MsgCreateRollapp.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRollappProtoMsg): MsgCreateRollapp {
    return MsgCreateRollapp.decode(message.value);
  },
  toProto(message: MsgCreateRollapp): Uint8Array {
    return MsgCreateRollapp.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRollapp): MsgCreateRollappProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollapp",
      value: MsgCreateRollapp.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRollappResponse(): MsgCreateRollappResponse {
  return {};
}
export const MsgCreateRollappResponse = {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollappResponse",
  encode(_: MsgCreateRollappResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateRollappResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateRollappResponse>): MsgCreateRollappResponse {
    const message = createBaseMsgCreateRollappResponse();
    return message;
  },
  fromAmino(_: MsgCreateRollappResponseAmino): MsgCreateRollappResponse {
    const message = createBaseMsgCreateRollappResponse();
    return message;
  },
  toAmino(_: MsgCreateRollappResponse): MsgCreateRollappResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateRollappResponseAminoMsg): MsgCreateRollappResponse {
    return MsgCreateRollappResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRollappResponseProtoMsg): MsgCreateRollappResponse {
    return MsgCreateRollappResponse.decode(message.value);
  },
  toProto(message: MsgCreateRollappResponse): Uint8Array {
    return MsgCreateRollappResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRollappResponse): MsgCreateRollappResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.MsgCreateRollappResponse",
      value: MsgCreateRollappResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateState(): MsgUpdateState {
  return {
    creator: "",
    rollappId: "",
    startHeight: BigInt(0),
    numBlocks: BigInt(0),
    DAPath: "",
    version: BigInt(0),
    BDs: BlockDescriptors.fromPartial({})
  };
}
export const MsgUpdateState = {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState",
  encode(message: MsgUpdateState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rollappId !== "") {
      writer.uint32(18).string(message.rollappId);
    }
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.startHeight);
    }
    if (message.numBlocks !== BigInt(0)) {
      writer.uint32(32).uint64(message.numBlocks);
    }
    if (message.DAPath !== "") {
      writer.uint32(42).string(message.DAPath);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(48).uint64(message.version);
    }
    if (message.BDs !== undefined) {
      BlockDescriptors.encode(message.BDs, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateState {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      startHeight: isSet(object.startHeight) ? BigInt(object.startHeight.toString()) : BigInt(0),
      numBlocks: isSet(object.numBlocks) ? BigInt(object.numBlocks.toString()) : BigInt(0),
      DAPath: isSet(object.DAPath) ? String(object.DAPath) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      BDs: isSet(object.BDs) ? BlockDescriptors.fromJSON(object.BDs) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateState>): MsgUpdateState {
    const message = createBaseMsgUpdateState();
    message.creator = object.creator ?? "";
    message.rollappId = object.rollappId ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
    message.numBlocks = object.numBlocks !== undefined && object.numBlocks !== null ? BigInt(object.numBlocks.toString()) : BigInt(0);
    message.DAPath = object.DAPath ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.BDs = object.BDs !== undefined && object.BDs !== null ? BlockDescriptors.fromPartial(object.BDs) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateStateAmino): MsgUpdateState {
    const message = createBaseMsgUpdateState();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = BigInt(object.startHeight);
    }
    if (object.numBlocks !== undefined && object.numBlocks !== null) {
      message.numBlocks = BigInt(object.numBlocks);
    }
    if (object.DAPath !== undefined && object.DAPath !== null) {
      message.DAPath = object.DAPath;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.BDs !== undefined && object.BDs !== null) {
      message.BDs = BlockDescriptors.fromAmino(object.BDs);
    }
    return message;
  },
  toAmino(message: MsgUpdateState): MsgUpdateStateAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.rollappId = message.rollappId;
    obj.startHeight = message.startHeight ? message.startHeight.toString() : undefined;
    obj.numBlocks = message.numBlocks ? message.numBlocks.toString() : undefined;
    obj.DAPath = message.DAPath;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.BDs = message.BDs ? BlockDescriptors.toAmino(message.BDs) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStateAminoMsg): MsgUpdateState {
    return MsgUpdateState.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStateProtoMsg): MsgUpdateState {
    return MsgUpdateState.decode(message.value);
  },
  toProto(message: MsgUpdateState): Uint8Array {
    return MsgUpdateState.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateState): MsgUpdateStateProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateState",
      value: MsgUpdateState.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStateResponse(): MsgUpdateStateResponse {
  return {};
}
export const MsgUpdateStateResponse = {
  typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateStateResponse",
  encode(_: MsgUpdateStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateStateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateStateResponse>): MsgUpdateStateResponse {
    const message = createBaseMsgUpdateStateResponse();
    return message;
  },
  fromAmino(_: MsgUpdateStateResponseAmino): MsgUpdateStateResponse {
    const message = createBaseMsgUpdateStateResponse();
    return message;
  },
  toAmino(_: MsgUpdateStateResponse): MsgUpdateStateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStateResponseAminoMsg): MsgUpdateStateResponse {
    return MsgUpdateStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStateResponseProtoMsg): MsgUpdateStateResponse {
    return MsgUpdateStateResponse.decode(message.value);
  },
  toProto(message: MsgUpdateStateResponse): Uint8Array {
    return MsgUpdateStateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStateResponse): MsgUpdateStateResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.MsgUpdateStateResponse",
      value: MsgUpdateStateResponse.encode(message).finish()
    };
  }
};