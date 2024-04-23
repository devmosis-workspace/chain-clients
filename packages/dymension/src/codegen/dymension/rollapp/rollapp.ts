import { TokenMetadata, TokenMetadataAmino, TokenMetadataSDKType } from "./bank";
import { StateInfoIndex, StateInfoIndexAmino, StateInfoIndexSDKType } from "./state_info";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface Rollapp {
  /**
   * The unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId: string;
  /** creator is the bech32-encoded address of the rollapp creator. */
  creator: string;
  /**
   * version is the software and configuration version.
   * starts from 1 and increases by one on every MsgUpdateState
   */
  version: bigint;
  /** codeStamp is a generated hash for unique identification of the rollapp code. */
  /** @deprecated */
  codeStamp: string;
  /** genesisPath is the description of the genesis file location on the DA. */
  /** @deprecated */
  genesisPath: string;
  /**
   * maxWithholdingBlocks is the maximum number of blocks for
   * an active sequencer to send a state update (MsgUpdateState).
   */
  /** @deprecated */
  maxWithholdingBlocks: bigint;
  /** maxSequencers is the maximum number of sequencers. */
  maxSequencers: bigint;
  /**
   * permissionedAddresses is a bech32-encoded address list of the sequencers that are allowed to serve this rollappId.
   * In the case of an empty list, the rollapp is considered permissionless.
   */
  permissionedAddresses: string[];
  /** tokenMetadata is a list of TokenMetadata that are registered on this rollapp */
  tokenMetadata: TokenMetadata[];
}
export interface RollappProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.Rollapp";
  value: Uint8Array;
}
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface RollappAmino {
  /**
   * The unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId?: string;
  /** creator is the bech32-encoded address of the rollapp creator. */
  creator?: string;
  /**
   * version is the software and configuration version.
   * starts from 1 and increases by one on every MsgUpdateState
   */
  version?: string;
  /** codeStamp is a generated hash for unique identification of the rollapp code. */
  /** @deprecated */
  codeStamp?: string;
  /** genesisPath is the description of the genesis file location on the DA. */
  /** @deprecated */
  genesisPath?: string;
  /**
   * maxWithholdingBlocks is the maximum number of blocks for
   * an active sequencer to send a state update (MsgUpdateState).
   */
  /** @deprecated */
  maxWithholdingBlocks?: string;
  /** maxSequencers is the maximum number of sequencers. */
  maxSequencers?: string;
  /**
   * permissionedAddresses is a bech32-encoded address list of the sequencers that are allowed to serve this rollappId.
   * In the case of an empty list, the rollapp is considered permissionless.
   */
  permissionedAddresses?: string[];
  /** tokenMetadata is a list of TokenMetadata that are registered on this rollapp */
  tokenMetadata?: TokenMetadataAmino[];
}
export interface RollappAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.Rollapp";
  value: RollappAmino;
}
/**
 * Rollapp defines a rollapp object. First the RollApp is created and then
 * sequencers can be created and attached. The RollApp is identified by rollappId
 */
export interface RollappSDKType {
  rollappId: string;
  creator: string;
  version: bigint;
  /** @deprecated */
  codeStamp: string;
  /** @deprecated */
  genesisPath: string;
  /** @deprecated */
  maxWithholdingBlocks: bigint;
  maxSequencers: bigint;
  permissionedAddresses: string[];
  tokenMetadata: TokenMetadataSDKType[];
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummary {
  /**
   * The unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId: string;
  /** Defines the index of the last rollapp UpdateState. */
  latestStateIndex?: StateInfoIndex;
  /** Defines the index of the last rollapp UpdateState that was finalized. */
  latestFinalizedStateIndex?: StateInfoIndex;
}
export interface RollappSummaryProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.RollappSummary";
  value: Uint8Array;
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummaryAmino {
  /**
   * The unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId?: string;
  /** Defines the index of the last rollapp UpdateState. */
  latestStateIndex?: StateInfoIndexAmino;
  /** Defines the index of the last rollapp UpdateState that was finalized. */
  latestFinalizedStateIndex?: StateInfoIndexAmino;
}
export interface RollappSummaryAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.RollappSummary";
  value: RollappSummaryAmino;
}
/** Rollapp summary is a compact representation of Rollapp */
export interface RollappSummarySDKType {
  rollappId: string;
  latestStateIndex?: StateInfoIndexSDKType;
  latestFinalizedStateIndex?: StateInfoIndexSDKType;
}
function createBaseRollapp(): Rollapp {
  return {
    rollappId: "",
    creator: "",
    version: BigInt(0),
    codeStamp: "",
    genesisPath: "",
    maxWithholdingBlocks: BigInt(0),
    maxSequencers: BigInt(0),
    permissionedAddresses: [],
    tokenMetadata: []
  };
}
export const Rollapp = {
  typeUrl: "/dymensionxyz.dymension.rollapp.Rollapp",
  encode(message: Rollapp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(24).uint64(message.version);
    }
    if (message.codeStamp !== "") {
      writer.uint32(34).string(message.codeStamp);
    }
    if (message.genesisPath !== "") {
      writer.uint32(42).string(message.genesisPath);
    }
    if (message.maxWithholdingBlocks !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxWithholdingBlocks);
    }
    if (message.maxSequencers !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxSequencers);
    }
    for (const v of message.permissionedAddresses) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.tokenMetadata) {
      TokenMetadata.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Rollapp {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      codeStamp: isSet(object.codeStamp) ? String(object.codeStamp) : "",
      genesisPath: isSet(object.genesisPath) ? String(object.genesisPath) : "",
      maxWithholdingBlocks: isSet(object.maxWithholdingBlocks) ? BigInt(object.maxWithholdingBlocks.toString()) : BigInt(0),
      maxSequencers: isSet(object.maxSequencers) ? BigInt(object.maxSequencers.toString()) : BigInt(0),
      permissionedAddresses: Array.isArray(object?.permissionedAddresses) ? object.permissionedAddresses.map((e: any) => String(e)) : [],
      tokenMetadata: Array.isArray(object?.tokenMetadata) ? object.tokenMetadata.map((e: any) => TokenMetadata.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Rollapp>): Rollapp {
    const message = createBaseRollapp();
    message.rollappId = object.rollappId ?? "";
    message.creator = object.creator ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.codeStamp = object.codeStamp ?? "";
    message.genesisPath = object.genesisPath ?? "";
    message.maxWithholdingBlocks = object.maxWithholdingBlocks !== undefined && object.maxWithholdingBlocks !== null ? BigInt(object.maxWithholdingBlocks.toString()) : BigInt(0);
    message.maxSequencers = object.maxSequencers !== undefined && object.maxSequencers !== null ? BigInt(object.maxSequencers.toString()) : BigInt(0);
    message.permissionedAddresses = object.permissionedAddresses?.map(e => e) || [];
    message.tokenMetadata = object.tokenMetadata?.map(e => TokenMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RollappAmino): Rollapp {
    const message = createBaseRollapp();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
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
    message.tokenMetadata = object.tokenMetadata?.map(e => TokenMetadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Rollapp): RollappAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    obj.creator = message.creator;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.codeStamp = message.codeStamp;
    obj.genesisPath = message.genesisPath;
    obj.maxWithholdingBlocks = message.maxWithholdingBlocks ? message.maxWithholdingBlocks.toString() : undefined;
    obj.maxSequencers = message.maxSequencers ? message.maxSequencers.toString() : undefined;
    if (message.permissionedAddresses) {
      obj.permissionedAddresses = message.permissionedAddresses.map(e => e);
    } else {
      obj.permissionedAddresses = [];
    }
    if (message.tokenMetadata) {
      obj.tokenMetadata = message.tokenMetadata.map(e => e ? TokenMetadata.toAmino(e) : undefined);
    } else {
      obj.tokenMetadata = [];
    }
    return obj;
  },
  fromAminoMsg(object: RollappAminoMsg): Rollapp {
    return Rollapp.fromAmino(object.value);
  },
  fromProtoMsg(message: RollappProtoMsg): Rollapp {
    return Rollapp.decode(message.value);
  },
  toProto(message: Rollapp): Uint8Array {
    return Rollapp.encode(message).finish();
  },
  toProtoMsg(message: Rollapp): RollappProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.Rollapp",
      value: Rollapp.encode(message).finish()
    };
  }
};
function createBaseRollappSummary(): RollappSummary {
  return {
    rollappId: "",
    latestStateIndex: undefined,
    latestFinalizedStateIndex: undefined
  };
}
export const RollappSummary = {
  typeUrl: "/dymensionxyz.dymension.rollapp.RollappSummary",
  encode(message: RollappSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    if (message.latestStateIndex !== undefined) {
      StateInfoIndex.encode(message.latestStateIndex, writer.uint32(18).fork()).ldelim();
    }
    if (message.latestFinalizedStateIndex !== undefined) {
      StateInfoIndex.encode(message.latestFinalizedStateIndex, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RollappSummary {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      latestStateIndex: isSet(object.latestStateIndex) ? StateInfoIndex.fromJSON(object.latestStateIndex) : undefined,
      latestFinalizedStateIndex: isSet(object.latestFinalizedStateIndex) ? StateInfoIndex.fromJSON(object.latestFinalizedStateIndex) : undefined
    };
  },
  fromPartial(object: Partial<RollappSummary>): RollappSummary {
    const message = createBaseRollappSummary();
    message.rollappId = object.rollappId ?? "";
    message.latestStateIndex = object.latestStateIndex !== undefined && object.latestStateIndex !== null ? StateInfoIndex.fromPartial(object.latestStateIndex) : undefined;
    message.latestFinalizedStateIndex = object.latestFinalizedStateIndex !== undefined && object.latestFinalizedStateIndex !== null ? StateInfoIndex.fromPartial(object.latestFinalizedStateIndex) : undefined;
    return message;
  },
  fromAmino(object: RollappSummaryAmino): RollappSummary {
    const message = createBaseRollappSummary();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.latestStateIndex !== undefined && object.latestStateIndex !== null) {
      message.latestStateIndex = StateInfoIndex.fromAmino(object.latestStateIndex);
    }
    if (object.latestFinalizedStateIndex !== undefined && object.latestFinalizedStateIndex !== null) {
      message.latestFinalizedStateIndex = StateInfoIndex.fromAmino(object.latestFinalizedStateIndex);
    }
    return message;
  },
  toAmino(message: RollappSummary): RollappSummaryAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    obj.latestStateIndex = message.latestStateIndex ? StateInfoIndex.toAmino(message.latestStateIndex) : undefined;
    obj.latestFinalizedStateIndex = message.latestFinalizedStateIndex ? StateInfoIndex.toAmino(message.latestFinalizedStateIndex) : undefined;
    return obj;
  },
  fromAminoMsg(object: RollappSummaryAminoMsg): RollappSummary {
    return RollappSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: RollappSummaryProtoMsg): RollappSummary {
    return RollappSummary.decode(message.value);
  },
  toProto(message: RollappSummary): Uint8Array {
    return RollappSummary.encode(message).finish();
  },
  toProtoMsg(message: RollappSummary): RollappSummaryProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.RollappSummary",
      value: RollappSummary.encode(message).finish()
    };
  }
};