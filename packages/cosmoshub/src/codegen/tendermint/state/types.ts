import { ResponseDeliverTx, ResponseDeliverTxAmino, ResponseDeliverTxSDKType, ResponseEndBlock, ResponseEndBlockAmino, ResponseEndBlockSDKType, ResponseBeginBlock, ResponseBeginBlockAmino, ResponseBeginBlockSDKType } from "../abci/types";
import { ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "../types/validator";
import { ConsensusParams, ConsensusParamsAmino, ConsensusParamsSDKType } from "../types/params";
import { Consensus, ConsensusAmino, ConsensusSDKType } from "../version/types";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../types/types";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64 } from "../../helpers";
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponses {
  deliverTxs: ResponseDeliverTx[];
  endBlock: ResponseEndBlock;
  beginBlock: ResponseBeginBlock;
}
export interface ABCIResponsesProtoMsg {
  typeUrl: "/tendermint.state.ABCIResponses";
  value: Uint8Array;
}
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponsesAmino {
  deliver_txs: ResponseDeliverTxAmino[];
  end_block?: ResponseEndBlockAmino;
  begin_block?: ResponseBeginBlockAmino;
}
export interface ABCIResponsesAminoMsg {
  type: "/tendermint.state.ABCIResponses";
  value: ABCIResponsesAmino;
}
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponsesSDKType {
  deliver_txs: ResponseDeliverTxSDKType[];
  end_block: ResponseEndBlockSDKType;
  begin_block: ResponseBeginBlockSDKType;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
  validatorSet: ValidatorSet;
  lastHeightChanged: bigint;
}
export interface ValidatorsInfoProtoMsg {
  typeUrl: "/tendermint.state.ValidatorsInfo";
  value: Uint8Array;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfoAmino {
  validator_set?: ValidatorSetAmino;
  last_height_changed: string;
}
export interface ValidatorsInfoAminoMsg {
  type: "/tendermint.state.ValidatorsInfo";
  value: ValidatorsInfoAmino;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfoSDKType {
  validator_set: ValidatorSetSDKType;
  last_height_changed: bigint;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
  consensusParams: ConsensusParams;
  lastHeightChanged: bigint;
}
export interface ConsensusParamsInfoProtoMsg {
  typeUrl: "/tendermint.state.ConsensusParamsInfo";
  value: Uint8Array;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfoAmino {
  consensus_params?: ConsensusParamsAmino;
  last_height_changed: string;
}
export interface ConsensusParamsInfoAminoMsg {
  type: "/tendermint.state.ConsensusParamsInfo";
  value: ConsensusParamsInfoAmino;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfoSDKType {
  consensus_params: ConsensusParamsSDKType;
  last_height_changed: bigint;
}
export interface ABCIResponsesInfo {
  abciResponses: ABCIResponses;
  height: bigint;
}
export interface ABCIResponsesInfoProtoMsg {
  typeUrl: "/tendermint.state.ABCIResponsesInfo";
  value: Uint8Array;
}
export interface ABCIResponsesInfoAmino {
  abci_responses?: ABCIResponsesAmino;
  height: string;
}
export interface ABCIResponsesInfoAminoMsg {
  type: "/tendermint.state.ABCIResponsesInfo";
  value: ABCIResponsesInfoAmino;
}
export interface ABCIResponsesInfoSDKType {
  abci_responses: ABCIResponsesSDKType;
  height: bigint;
}
export interface Version {
  consensus: Consensus;
  software: string;
}
export interface VersionProtoMsg {
  typeUrl: "/tendermint.state.Version";
  value: Uint8Array;
}
export interface VersionAmino {
  consensus?: ConsensusAmino;
  software: string;
}
export interface VersionAminoMsg {
  type: "/tendermint.state.Version";
  value: VersionAmino;
}
export interface VersionSDKType {
  consensus: ConsensusSDKType;
  software: string;
}
export interface State {
  version: Version;
  /** immutable */
  chainId: string;
  initialHeight: bigint;
  /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
  lastBlockHeight: bigint;
  lastBlockId: BlockID;
  lastBlockTime: Timestamp;
  /**
   * LastValidators is used to validate block.LastCommit.
   * Validators are persisted to the database separately every time they change,
   * so we can query for historical validator sets.
   * Note that if s.LastBlockHeight causes a valset change,
   * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
   * Extra +1 due to nextValSet delay.
   */
  nextValidators: ValidatorSet;
  validators: ValidatorSet;
  lastValidators: ValidatorSet;
  lastHeightValidatorsChanged: bigint;
  /**
   * Consensus parameters used for validating blocks.
   * Changes returned by EndBlock and updated after Commit.
   */
  consensusParams: ConsensusParams;
  lastHeightConsensusParamsChanged: bigint;
  /** Merkle root of the results from executing prev block */
  lastResultsHash: Uint8Array;
  /** the latest AppHash we've received from calling abci.Commit() */
  appHash: Uint8Array;
}
export interface StateProtoMsg {
  typeUrl: "/tendermint.state.State";
  value: Uint8Array;
}
export interface StateAmino {
  version?: VersionAmino;
  /** immutable */
  chain_id: string;
  initial_height: string;
  /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
  last_block_height: string;
  last_block_id?: BlockIDAmino;
  last_block_time?: TimestampAmino;
  /**
   * LastValidators is used to validate block.LastCommit.
   * Validators are persisted to the database separately every time they change,
   * so we can query for historical validator sets.
   * Note that if s.LastBlockHeight causes a valset change,
   * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
   * Extra +1 due to nextValSet delay.
   */
  next_validators?: ValidatorSetAmino;
  validators?: ValidatorSetAmino;
  last_validators?: ValidatorSetAmino;
  last_height_validators_changed: string;
  /**
   * Consensus parameters used for validating blocks.
   * Changes returned by EndBlock and updated after Commit.
   */
  consensus_params?: ConsensusParamsAmino;
  last_height_consensus_params_changed: string;
  /** Merkle root of the results from executing prev block */
  last_results_hash: Uint8Array;
  /** the latest AppHash we've received from calling abci.Commit() */
  app_hash: Uint8Array;
}
export interface StateAminoMsg {
  type: "/tendermint.state.State";
  value: StateAmino;
}
export interface StateSDKType {
  version: VersionSDKType;
  chain_id: string;
  initial_height: bigint;
  last_block_height: bigint;
  last_block_id: BlockIDSDKType;
  last_block_time: TimestampSDKType;
  next_validators: ValidatorSetSDKType;
  validators: ValidatorSetSDKType;
  last_validators: ValidatorSetSDKType;
  last_height_validators_changed: bigint;
  consensus_params: ConsensusParamsSDKType;
  last_height_consensus_params_changed: bigint;
  last_results_hash: Uint8Array;
  app_hash: Uint8Array;
}
function createBaseABCIResponses(): ABCIResponses {
  return {
    deliverTxs: [],
    endBlock: ResponseEndBlock.fromPartial({}),
    beginBlock: ResponseBeginBlock.fromPartial({})
  };
}
export const ABCIResponses = {
  typeUrl: "/tendermint.state.ABCIResponses",
  encode(message: ABCIResponses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deliverTxs) {
      ResponseDeliverTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(18).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ABCIResponses {
    return {
      deliverTxs: Array.isArray(object?.deliverTxs) ? object.deliverTxs.map((e: any) => ResponseDeliverTx.fromJSON(e)) : [],
      endBlock: isSet(object.endBlock) ? ResponseEndBlock.fromJSON(object.endBlock) : undefined,
      beginBlock: isSet(object.beginBlock) ? ResponseBeginBlock.fromJSON(object.beginBlock) : undefined
    };
  },
  fromPartial(object: Partial<ABCIResponses>): ABCIResponses {
    const message = createBaseABCIResponses();
    message.deliverTxs = object.deliverTxs?.map(e => ResponseDeliverTx.fromPartial(e)) || [];
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    return message;
  },
  fromAmino(object: ABCIResponsesAmino): ABCIResponses {
    return {
      deliverTxs: Array.isArray(object?.deliver_txs) ? object.deliver_txs.map((e: any) => ResponseDeliverTx.fromAmino(e)) : [],
      endBlock: object?.end_block ? ResponseEndBlock.fromAmino(object.end_block) : undefined,
      beginBlock: object?.begin_block ? ResponseBeginBlock.fromAmino(object.begin_block) : undefined
    };
  },
  toAmino(message: ABCIResponses): ABCIResponsesAmino {
    const obj: any = {};
    if (message.deliverTxs) {
      obj.deliver_txs = message.deliverTxs.map(e => e ? ResponseDeliverTx.toAmino(e) : undefined);
    } else {
      obj.deliver_txs = [];
    }
    obj.end_block = message.endBlock ? ResponseEndBlock.toAmino(message.endBlock) : undefined;
    obj.begin_block = message.beginBlock ? ResponseBeginBlock.toAmino(message.beginBlock) : undefined;
    return obj;
  },
  fromAminoMsg(object: ABCIResponsesAminoMsg): ABCIResponses {
    return ABCIResponses.fromAmino(object.value);
  },
  fromProtoMsg(message: ABCIResponsesProtoMsg): ABCIResponses {
    return ABCIResponses.decode(message.value);
  },
  toProto(message: ABCIResponses): Uint8Array {
    return ABCIResponses.encode(message).finish();
  },
  toProtoMsg(message: ABCIResponses): ABCIResponsesProtoMsg {
    return {
      typeUrl: "/tendermint.state.ABCIResponses",
      value: ABCIResponses.encode(message).finish()
    };
  }
};
function createBaseValidatorsInfo(): ValidatorsInfo {
  return {
    validatorSet: ValidatorSet.fromPartial({}),
    lastHeightChanged: BigInt(0)
  };
}
export const ValidatorsInfo = {
  typeUrl: "/tendermint.state.ValidatorsInfo",
  encode(message: ValidatorsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastHeightChanged !== BigInt(0)) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorsInfo {
    return {
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? BigInt(object.lastHeightChanged.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ValidatorsInfo>): ValidatorsInfo {
    const message = createBaseValidatorsInfo();
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? BigInt(object.lastHeightChanged.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorsInfoAmino): ValidatorsInfo {
    return {
      validatorSet: object?.validator_set ? ValidatorSet.fromAmino(object.validator_set) : undefined,
      lastHeightChanged: BigInt(object.last_height_changed)
    };
  },
  toAmino(message: ValidatorsInfo): ValidatorsInfoAmino {
    const obj: any = {};
    obj.validator_set = message.validatorSet ? ValidatorSet.toAmino(message.validatorSet) : undefined;
    obj.last_height_changed = message.lastHeightChanged ? message.lastHeightChanged.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorsInfoAminoMsg): ValidatorsInfo {
    return ValidatorsInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorsInfoProtoMsg): ValidatorsInfo {
    return ValidatorsInfo.decode(message.value);
  },
  toProto(message: ValidatorsInfo): Uint8Array {
    return ValidatorsInfo.encode(message).finish();
  },
  toProtoMsg(message: ValidatorsInfo): ValidatorsInfoProtoMsg {
    return {
      typeUrl: "/tendermint.state.ValidatorsInfo",
      value: ValidatorsInfo.encode(message).finish()
    };
  }
};
function createBaseConsensusParamsInfo(): ConsensusParamsInfo {
  return {
    consensusParams: ConsensusParams.fromPartial({}),
    lastHeightChanged: BigInt(0)
  };
}
export const ConsensusParamsInfo = {
  typeUrl: "/tendermint.state.ConsensusParamsInfo",
  encode(message: ConsensusParamsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastHeightChanged !== BigInt(0)) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },
  fromJSON(object: any): ConsensusParamsInfo {
    return {
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? BigInt(object.lastHeightChanged.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ConsensusParamsInfo>): ConsensusParamsInfo {
    const message = createBaseConsensusParamsInfo();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? BigInt(object.lastHeightChanged.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ConsensusParamsInfoAmino): ConsensusParamsInfo {
    return {
      consensusParams: object?.consensus_params ? ConsensusParams.fromAmino(object.consensus_params) : undefined,
      lastHeightChanged: BigInt(object.last_height_changed)
    };
  },
  toAmino(message: ConsensusParamsInfo): ConsensusParamsInfoAmino {
    const obj: any = {};
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    obj.last_height_changed = message.lastHeightChanged ? message.lastHeightChanged.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusParamsInfoAminoMsg): ConsensusParamsInfo {
    return ConsensusParamsInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ConsensusParamsInfoProtoMsg): ConsensusParamsInfo {
    return ConsensusParamsInfo.decode(message.value);
  },
  toProto(message: ConsensusParamsInfo): Uint8Array {
    return ConsensusParamsInfo.encode(message).finish();
  },
  toProtoMsg(message: ConsensusParamsInfo): ConsensusParamsInfoProtoMsg {
    return {
      typeUrl: "/tendermint.state.ConsensusParamsInfo",
      value: ConsensusParamsInfo.encode(message).finish()
    };
  }
};
function createBaseABCIResponsesInfo(): ABCIResponsesInfo {
  return {
    abciResponses: ABCIResponses.fromPartial({}),
    height: BigInt(0)
  };
}
export const ABCIResponsesInfo = {
  typeUrl: "/tendermint.state.ABCIResponsesInfo",
  encode(message: ABCIResponsesInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.abciResponses !== undefined) {
      ABCIResponses.encode(message.abciResponses, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): ABCIResponsesInfo {
    return {
      abciResponses: isSet(object.abciResponses) ? ABCIResponses.fromJSON(object.abciResponses) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ABCIResponsesInfo>): ABCIResponsesInfo {
    const message = createBaseABCIResponsesInfo();
    message.abciResponses = object.abciResponses !== undefined && object.abciResponses !== null ? ABCIResponses.fromPartial(object.abciResponses) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ABCIResponsesInfoAmino): ABCIResponsesInfo {
    return {
      abciResponses: object?.abci_responses ? ABCIResponses.fromAmino(object.abci_responses) : undefined,
      height: BigInt(object.height)
    };
  },
  toAmino(message: ABCIResponsesInfo): ABCIResponsesInfoAmino {
    const obj: any = {};
    obj.abci_responses = message.abciResponses ? ABCIResponses.toAmino(message.abciResponses) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ABCIResponsesInfoAminoMsg): ABCIResponsesInfo {
    return ABCIResponsesInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ABCIResponsesInfoProtoMsg): ABCIResponsesInfo {
    return ABCIResponsesInfo.decode(message.value);
  },
  toProto(message: ABCIResponsesInfo): Uint8Array {
    return ABCIResponsesInfo.encode(message).finish();
  },
  toProtoMsg(message: ABCIResponsesInfo): ABCIResponsesInfoProtoMsg {
    return {
      typeUrl: "/tendermint.state.ABCIResponsesInfo",
      value: ABCIResponsesInfo.encode(message).finish()
    };
  }
};
function createBaseVersion(): Version {
  return {
    consensus: Consensus.fromPartial({}),
    software: ""
  };
}
export const Version = {
  typeUrl: "/tendermint.state.Version",
  encode(message: Version, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensus !== undefined) {
      Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  fromJSON(object: any): Version {
    return {
      consensus: isSet(object.consensus) ? Consensus.fromJSON(object.consensus) : undefined,
      software: isSet(object.software) ? String(object.software) : ""
    };
  },
  fromPartial(object: Partial<Version>): Version {
    const message = createBaseVersion();
    message.consensus = object.consensus !== undefined && object.consensus !== null ? Consensus.fromPartial(object.consensus) : undefined;
    message.software = object.software ?? "";
    return message;
  },
  fromAmino(object: VersionAmino): Version {
    return {
      consensus: object?.consensus ? Consensus.fromAmino(object.consensus) : undefined,
      software: object.software
    };
  },
  toAmino(message: Version): VersionAmino {
    const obj: any = {};
    obj.consensus = message.consensus ? Consensus.toAmino(message.consensus) : undefined;
    obj.software = message.software;
    return obj;
  },
  fromAminoMsg(object: VersionAminoMsg): Version {
    return Version.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionProtoMsg): Version {
    return Version.decode(message.value);
  },
  toProto(message: Version): Uint8Array {
    return Version.encode(message).finish();
  },
  toProtoMsg(message: Version): VersionProtoMsg {
    return {
      typeUrl: "/tendermint.state.Version",
      value: Version.encode(message).finish()
    };
  }
};
function createBaseState(): State {
  return {
    version: Version.fromPartial({}),
    chainId: "",
    initialHeight: BigInt(0),
    lastBlockHeight: BigInt(0),
    lastBlockId: BlockID.fromPartial({}),
    lastBlockTime: Timestamp.fromPartial({}),
    nextValidators: ValidatorSet.fromPartial({}),
    validators: ValidatorSet.fromPartial({}),
    lastValidators: ValidatorSet.fromPartial({}),
    lastHeightValidatorsChanged: BigInt(0),
    consensusParams: ConsensusParams.fromPartial({}),
    lastHeightConsensusParamsChanged: BigInt(0),
    lastResultsHash: new Uint8Array(),
    appHash: new Uint8Array()
  };
}
export const State = {
  typeUrl: "/tendermint.state.State",
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(112).int64(message.initialHeight);
    }
    if (message.lastBlockHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.lastBlockHeight);
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(message.lastBlockTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.nextValidators !== undefined) {
      ValidatorSet.encode(message.nextValidators, writer.uint32(50).fork()).ldelim();
    }
    if (message.validators !== undefined) {
      ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastValidators !== undefined) {
      ValidatorSet.encode(message.lastValidators, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastHeightValidatorsChanged !== BigInt(0)) {
      writer.uint32(72).int64(message.lastHeightValidatorsChanged);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastHeightConsensusParamsChanged !== BigInt(0)) {
      writer.uint32(88).int64(message.lastHeightConsensusParamsChanged);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(106).bytes(message.appHash);
    }
    return writer;
  },
  fromJSON(object: any): State {
    return {
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      initialHeight: isSet(object.initialHeight) ? BigInt(object.initialHeight.toString()) : BigInt(0),
      lastBlockHeight: isSet(object.lastBlockHeight) ? BigInt(object.lastBlockHeight.toString()) : BigInt(0),
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined,
      nextValidators: isSet(object.nextValidators) ? ValidatorSet.fromJSON(object.nextValidators) : undefined,
      validators: isSet(object.validators) ? ValidatorSet.fromJSON(object.validators) : undefined,
      lastValidators: isSet(object.lastValidators) ? ValidatorSet.fromJSON(object.lastValidators) : undefined,
      lastHeightValidatorsChanged: isSet(object.lastHeightValidatorsChanged) ? BigInt(object.lastHeightValidatorsChanged.toString()) : BigInt(0),
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightConsensusParamsChanged: isSet(object.lastHeightConsensusParamsChanged) ? BigInt(object.lastHeightConsensusParamsChanged.toString()) : BigInt(0),
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.chainId = object.chainId ?? "";
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt(0);
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt(0);
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastBlockTime = object.lastBlockTime !== undefined && object.lastBlockTime !== null ? Timestamp.fromPartial(object.lastBlockTime) : undefined;
    message.nextValidators = object.nextValidators !== undefined && object.nextValidators !== null ? ValidatorSet.fromPartial(object.nextValidators) : undefined;
    message.validators = object.validators !== undefined && object.validators !== null ? ValidatorSet.fromPartial(object.validators) : undefined;
    message.lastValidators = object.lastValidators !== undefined && object.lastValidators !== null ? ValidatorSet.fromPartial(object.lastValidators) : undefined;
    message.lastHeightValidatorsChanged = object.lastHeightValidatorsChanged !== undefined && object.lastHeightValidatorsChanged !== null ? BigInt(object.lastHeightValidatorsChanged.toString()) : BigInt(0);
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightConsensusParamsChanged = object.lastHeightConsensusParamsChanged !== undefined && object.lastHeightConsensusParamsChanged !== null ? BigInt(object.lastHeightConsensusParamsChanged.toString()) : BigInt(0);
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StateAmino): State {
    return {
      version: object?.version ? Version.fromAmino(object.version) : undefined,
      chainId: object.chain_id,
      initialHeight: BigInt(object.initial_height),
      lastBlockHeight: BigInt(object.last_block_height),
      lastBlockId: object?.last_block_id ? BlockID.fromAmino(object.last_block_id) : undefined,
      lastBlockTime: object.last_block_time,
      nextValidators: object?.next_validators ? ValidatorSet.fromAmino(object.next_validators) : undefined,
      validators: object?.validators ? ValidatorSet.fromAmino(object.validators) : undefined,
      lastValidators: object?.last_validators ? ValidatorSet.fromAmino(object.last_validators) : undefined,
      lastHeightValidatorsChanged: BigInt(object.last_height_validators_changed),
      consensusParams: object?.consensus_params ? ConsensusParams.fromAmino(object.consensus_params) : undefined,
      lastHeightConsensusParamsChanged: BigInt(object.last_height_consensus_params_changed),
      lastResultsHash: object.last_results_hash,
      appHash: object.app_hash
    };
  },
  toAmino(message: State): StateAmino {
    const obj: any = {};
    obj.version = message.version ? Version.toAmino(message.version) : undefined;
    obj.chain_id = message.chainId;
    obj.initial_height = message.initialHeight ? message.initialHeight.toString() : undefined;
    obj.last_block_height = message.lastBlockHeight ? message.lastBlockHeight.toString() : undefined;
    obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : undefined;
    obj.last_block_time = message.lastBlockTime;
    obj.next_validators = message.nextValidators ? ValidatorSet.toAmino(message.nextValidators) : undefined;
    obj.validators = message.validators ? ValidatorSet.toAmino(message.validators) : undefined;
    obj.last_validators = message.lastValidators ? ValidatorSet.toAmino(message.lastValidators) : undefined;
    obj.last_height_validators_changed = message.lastHeightValidatorsChanged ? message.lastHeightValidatorsChanged.toString() : undefined;
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    obj.last_height_consensus_params_changed = message.lastHeightConsensusParamsChanged ? message.lastHeightConsensusParamsChanged.toString() : undefined;
    obj.last_results_hash = message.lastResultsHash;
    obj.app_hash = message.appHash;
    return obj;
  },
  fromAminoMsg(object: StateAminoMsg): State {
    return State.fromAmino(object.value);
  },
  fromProtoMsg(message: StateProtoMsg): State {
    return State.decode(message.value);
  },
  toProto(message: State): Uint8Array {
    return State.encode(message).finish();
  },
  toProtoMsg(message: State): StateProtoMsg {
    return {
      typeUrl: "/tendermint.state.State",
      value: State.encode(message).finish()
    };
  }
};