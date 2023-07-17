import { ResponseDeliverTx, ResponseDeliverTxSDKType, ResponseEndBlock, ResponseEndBlockSDKType, ResponseBeginBlock, ResponseBeginBlockSDKType } from "../abci/types";
import { ValidatorSet, ValidatorSetSDKType } from "../types/validator";
import { ConsensusParams, ConsensusParamsSDKType } from "../types/params";
import { Consensus, ConsensusSDKType } from "../version/types";
import { BlockID, BlockIDSDKType } from "../types/types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponses {
  deliverTxs: ResponseDeliverTx[];
  endBlock?: ResponseEndBlock;
  beginBlock?: ResponseBeginBlock;
}
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponsesSDKType {
  deliver_txs: ResponseDeliverTxSDKType[];
  end_block?: ResponseEndBlockSDKType;
  begin_block?: ResponseBeginBlockSDKType;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
  validatorSet?: ValidatorSet;
  lastHeightChanged: Long;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfoSDKType {
  validator_set?: ValidatorSetSDKType;
  last_height_changed: Long;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
  consensusParams?: ConsensusParams;
  lastHeightChanged: Long;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfoSDKType {
  consensus_params?: ConsensusParamsSDKType;
  last_height_changed: Long;
}
export interface Version {
  consensus?: Consensus;
  software: string;
}
export interface VersionSDKType {
  consensus?: ConsensusSDKType;
  software: string;
}
export interface State {
  version?: Version;
  /** immutable */
  chainId: string;
  initialHeight: Long;
  /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
  lastBlockHeight: Long;
  lastBlockId?: BlockID;
  lastBlockTime?: Timestamp;
  /**
   * LastValidators is used to validate block.LastCommit.
   * Validators are persisted to the database separately every time they change,
   * so we can query for historical validator sets.
   * Note that if s.LastBlockHeight causes a valset change,
   * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
   * Extra +1 due to nextValSet delay.
   */
  nextValidators?: ValidatorSet;
  validators?: ValidatorSet;
  lastValidators?: ValidatorSet;
  lastHeightValidatorsChanged: Long;
  /**
   * Consensus parameters used for validating blocks.
   * Changes returned by EndBlock and updated after Commit.
   */
  consensusParams?: ConsensusParams;
  lastHeightConsensusParamsChanged: Long;
  /** Merkle root of the results from executing prev block */
  lastResultsHash: Uint8Array;
  /** the latest AppHash we've received from calling abci.Commit() */
  appHash: Uint8Array;
}
export interface StateSDKType {
  version?: VersionSDKType;
  chain_id: string;
  initial_height: Long;
  last_block_height: Long;
  last_block_id?: BlockIDSDKType;
  last_block_time?: TimestampSDKType;
  next_validators?: ValidatorSetSDKType;
  validators?: ValidatorSetSDKType;
  last_validators?: ValidatorSetSDKType;
  last_height_validators_changed: Long;
  consensus_params?: ConsensusParamsSDKType;
  last_height_consensus_params_changed: Long;
  last_results_hash: Uint8Array;
  app_hash: Uint8Array;
}
function createBaseABCIResponses(): ABCIResponses {
  return {
    deliverTxs: [],
    endBlock: undefined,
    beginBlock: undefined
  };
}
export const ABCIResponses = {
  encode(message: ABCIResponses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseValidatorsInfo(): ValidatorsInfo {
  return {
    validatorSet: undefined,
    lastHeightChanged: Long.ZERO
  };
}
export const ValidatorsInfo = {
  encode(message: ValidatorsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastHeightChanged.isZero()) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorsInfo {
    return {
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? Long.fromValue(object.lastHeightChanged) : Long.ZERO
    };
  },
  fromPartial(object: Partial<ValidatorsInfo>): ValidatorsInfo {
    const message = createBaseValidatorsInfo();
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? Long.fromValue(object.lastHeightChanged) : Long.ZERO;
    return message;
  }
};
function createBaseConsensusParamsInfo(): ConsensusParamsInfo {
  return {
    consensusParams: undefined,
    lastHeightChanged: Long.ZERO
  };
}
export const ConsensusParamsInfo = {
  encode(message: ConsensusParamsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastHeightChanged.isZero()) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },
  fromJSON(object: any): ConsensusParamsInfo {
    return {
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? Long.fromValue(object.lastHeightChanged) : Long.ZERO
    };
  },
  fromPartial(object: Partial<ConsensusParamsInfo>): ConsensusParamsInfo {
    const message = createBaseConsensusParamsInfo();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? Long.fromValue(object.lastHeightChanged) : Long.ZERO;
    return message;
  }
};
function createBaseVersion(): Version {
  return {
    consensus: undefined,
    software: ""
  };
}
export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseState(): State {
  return {
    version: undefined,
    chainId: "",
    initialHeight: Long.ZERO,
    lastBlockHeight: Long.ZERO,
    lastBlockId: undefined,
    lastBlockTime: undefined,
    nextValidators: undefined,
    validators: undefined,
    lastValidators: undefined,
    lastHeightValidatorsChanged: Long.ZERO,
    consensusParams: undefined,
    lastHeightConsensusParamsChanged: Long.ZERO,
    lastResultsHash: new Uint8Array(),
    appHash: new Uint8Array()
  };
}
export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.initialHeight.isZero()) {
      writer.uint32(112).int64(message.initialHeight);
    }
    if (!message.lastBlockHeight.isZero()) {
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
    if (!message.lastHeightValidatorsChanged.isZero()) {
      writer.uint32(72).int64(message.lastHeightValidatorsChanged);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim();
    }
    if (!message.lastHeightConsensusParamsChanged.isZero()) {
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
      initialHeight: isSet(object.initialHeight) ? Long.fromValue(object.initialHeight) : Long.ZERO,
      lastBlockHeight: isSet(object.lastBlockHeight) ? Long.fromValue(object.lastBlockHeight) : Long.ZERO,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined,
      nextValidators: isSet(object.nextValidators) ? ValidatorSet.fromJSON(object.nextValidators) : undefined,
      validators: isSet(object.validators) ? ValidatorSet.fromJSON(object.validators) : undefined,
      lastValidators: isSet(object.lastValidators) ? ValidatorSet.fromJSON(object.lastValidators) : undefined,
      lastHeightValidatorsChanged: isSet(object.lastHeightValidatorsChanged) ? Long.fromValue(object.lastHeightValidatorsChanged) : Long.ZERO,
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightConsensusParamsChanged: isSet(object.lastHeightConsensusParamsChanged) ? Long.fromValue(object.lastHeightConsensusParamsChanged) : Long.ZERO,
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.chainId = object.chainId ?? "";
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? Long.fromValue(object.initialHeight) : Long.ZERO;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? Long.fromValue(object.lastBlockHeight) : Long.ZERO;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastBlockTime = object.lastBlockTime !== undefined && object.lastBlockTime !== null ? Timestamp.fromPartial(object.lastBlockTime) : undefined;
    message.nextValidators = object.nextValidators !== undefined && object.nextValidators !== null ? ValidatorSet.fromPartial(object.nextValidators) : undefined;
    message.validators = object.validators !== undefined && object.validators !== null ? ValidatorSet.fromPartial(object.validators) : undefined;
    message.lastValidators = object.lastValidators !== undefined && object.lastValidators !== null ? ValidatorSet.fromPartial(object.lastValidators) : undefined;
    message.lastHeightValidatorsChanged = object.lastHeightValidatorsChanged !== undefined && object.lastHeightValidatorsChanged !== null ? Long.fromValue(object.lastHeightValidatorsChanged) : Long.ZERO;
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightConsensusParamsChanged = object.lastHeightConsensusParamsChanged !== undefined && object.lastHeightConsensusParamsChanged !== null ? Long.fromValue(object.lastHeightConsensusParamsChanged) : Long.ZERO;
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  }
};