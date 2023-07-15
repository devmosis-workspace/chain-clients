import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
  block?: BlockParams;
  evidence?: EvidenceParams;
  validator?: ValidatorParams;
  version?: VersionParams;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsSDKType {
  block?: BlockParamsSDKType;
  evidence?: EvidenceParamsSDKType;
  validator?: ValidatorParamsSDKType;
  version?: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  maxBytes: Long;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  maxGas: Long;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
  max_bytes: Long;
  max_gas: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
  /**
   * Max age of evidence, in blocks.
   * 
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  maxAgeNumBlocks: Long;
  /**
   * Max age of evidence, in time.
   * 
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  maxAgeDuration?: Duration;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  maxBytes: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsSDKType {
  max_age_num_blocks: Long;
  max_age_duration?: DurationSDKType;
  max_bytes: Long;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pubKeyTypes: string[];
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsSDKType {
  pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
  app: Long;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsSDKType {
  app: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
  blockMaxBytes: Long;
  blockMaxGas: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsSDKType {
  block_max_bytes: Long;
  block_max_gas: Long;
}
function createBaseConsensusParams(): ConsensusParams {
  return {
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined
  };
}
export const ConsensusParams = {
  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConsensusParams {
    return {
      block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
      evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
      validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
      version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined
    };
  },
  fromPartial(object: Partial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  }
};
function createBaseBlockParams(): BlockParams {
  return {
    maxBytes: Long.ZERO,
    maxGas: Long.ZERO
  };
}
export const BlockParams = {
  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxBytes.isZero()) {
      writer.uint32(8).int64(message.maxBytes);
    }
    if (!message.maxGas.isZero()) {
      writer.uint32(16).int64(message.maxGas);
    }
    return writer;
  },
  fromJSON(object: any): BlockParams {
    return {
      maxBytes: isSet(object.maxBytes) ? Long.fromValue(object.maxBytes) : Long.ZERO,
      maxGas: isSet(object.maxGas) ? Long.fromValue(object.maxGas) : Long.ZERO
    };
  },
  fromPartial(object: Partial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? Long.fromValue(object.maxGas) : Long.ZERO;
    return message;
  }
};
function createBaseEvidenceParams(): EvidenceParams {
  return {
    maxAgeNumBlocks: Long.ZERO,
    maxAgeDuration: undefined,
    maxBytes: Long.ZERO
  };
}
export const EvidenceParams = {
  encode(message: EvidenceParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxAgeNumBlocks.isZero()) {
      writer.uint32(8).int64(message.maxAgeNumBlocks);
    }
    if (message.maxAgeDuration !== undefined) {
      Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.maxBytes.isZero()) {
      writer.uint32(24).int64(message.maxBytes);
    }
    return writer;
  },
  fromJSON(object: any): EvidenceParams {
    return {
      maxAgeNumBlocks: isSet(object.maxAgeNumBlocks) ? Long.fromValue(object.maxAgeNumBlocks) : Long.ZERO,
      maxAgeDuration: isSet(object.maxAgeDuration) ? Duration.fromJSON(object.maxAgeDuration) : undefined,
      maxBytes: isSet(object.maxBytes) ? Long.fromValue(object.maxBytes) : Long.ZERO
    };
  },
  fromPartial(object: Partial<EvidenceParams>): EvidenceParams {
    const message = createBaseEvidenceParams();
    message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? Long.fromValue(object.maxAgeNumBlocks) : Long.ZERO;
    message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? Duration.fromPartial(object.maxAgeDuration) : undefined;
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? Long.fromValue(object.maxBytes) : Long.ZERO;
    return message;
  }
};
function createBaseValidatorParams(): ValidatorParams {
  return {
    pubKeyTypes: []
  };
}
export const ValidatorParams = {
  encode(message: ValidatorParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pubKeyTypes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorParams {
    return {
      pubKeyTypes: Array.isArray(object?.pubKeyTypes) ? object.pubKeyTypes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ValidatorParams>): ValidatorParams {
    const message = createBaseValidatorParams();
    message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
    return message;
  }
};
function createBaseVersionParams(): VersionParams {
  return {
    app: Long.UZERO
  };
}
export const VersionParams = {
  encode(message: VersionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.app.isZero()) {
      writer.uint32(8).uint64(message.app);
    }
    return writer;
  },
  fromJSON(object: any): VersionParams {
    return {
      app: isSet(object.app) ? Long.fromValue(object.app) : Long.UZERO
    };
  },
  fromPartial(object: Partial<VersionParams>): VersionParams {
    const message = createBaseVersionParams();
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
    return message;
  }
};
function createBaseHashedParams(): HashedParams {
  return {
    blockMaxBytes: Long.ZERO,
    blockMaxGas: Long.ZERO
  };
}
export const HashedParams = {
  encode(message: HashedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockMaxBytes.isZero()) {
      writer.uint32(8).int64(message.blockMaxBytes);
    }
    if (!message.blockMaxGas.isZero()) {
      writer.uint32(16).int64(message.blockMaxGas);
    }
    return writer;
  },
  fromJSON(object: any): HashedParams {
    return {
      blockMaxBytes: isSet(object.blockMaxBytes) ? Long.fromValue(object.blockMaxBytes) : Long.ZERO,
      blockMaxGas: isSet(object.blockMaxGas) ? Long.fromValue(object.blockMaxGas) : Long.ZERO
    };
  },
  fromPartial(object: Partial<HashedParams>): HashedParams {
    const message = createBaseHashedParams();
    message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? Long.fromValue(object.blockMaxBytes) : Long.ZERO;
    message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? Long.fromValue(object.blockMaxGas) : Long.ZERO;
    return message;
  }
};