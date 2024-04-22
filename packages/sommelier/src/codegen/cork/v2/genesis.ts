import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ScheduledCork, ScheduledCorkAmino, ScheduledCorkSDKType, CorkResult, CorkResultAmino, CorkResultSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
  params: Params;
  cellarIds: CellarIDSet;
  invalidationNonce: bigint;
  scheduledCorks: ScheduledCork[];
  corkResults: CorkResult[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cork.v2.GenesisState";
  value: Uint8Array;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  cellar_ids?: CellarIDSetAmino;
  invalidation_nonce?: string;
  scheduled_corks?: ScheduledCorkAmino[];
  cork_results?: CorkResultAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/cork.v2.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  cellar_ids: CellarIDSetSDKType;
  invalidation_nonce: bigint;
  scheduled_corks: ScheduledCorkSDKType[];
  cork_results: CorkResultSDKType[];
}
/** Params cork parameters */
export interface Params {
  /**
   * Deprecated
   * VoteThreshold defines the percentage of bonded stake required to vote for a scheduled cork to be approved
   */
  voteThreshold: string;
  maxCorksPerValidator: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/cork.v2.Params";
  value: Uint8Array;
}
/** Params cork parameters */
export interface ParamsAmino {
  /**
   * Deprecated
   * VoteThreshold defines the percentage of bonded stake required to vote for a scheduled cork to be approved
   */
  vote_threshold?: string;
  max_corks_per_validator?: string;
}
export interface ParamsAminoMsg {
  type: "/cork.v2.Params";
  value: ParamsAmino;
}
/** Params cork parameters */
export interface ParamsSDKType {
  vote_threshold: string;
  max_corks_per_validator: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    cellarIds: CellarIDSet.fromPartial({}),
    invalidationNonce: BigInt(0),
    scheduledCorks: [],
    corkResults: []
  };
}
export const GenesisState = {
  typeUrl: "/cork.v2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(18).fork()).ldelim();
    }
    if (message.invalidationNonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.invalidationNonce);
    }
    for (const v of message.scheduledCorks) {
      ScheduledCork.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.corkResults) {
      CorkResult.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined,
      invalidationNonce: isSet(object.invalidationNonce) ? BigInt(object.invalidationNonce.toString()) : BigInt(0),
      scheduledCorks: Array.isArray(object?.scheduledCorks) ? object.scheduledCorks.map((e: any) => ScheduledCork.fromJSON(e)) : [],
      corkResults: Array.isArray(object?.corkResults) ? object.corkResults.map((e: any) => CorkResult.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce.toString()) : BigInt(0);
    message.scheduledCorks = object.scheduledCorks?.map(e => ScheduledCork.fromPartial(e)) || [];
    message.corkResults = object.corkResults?.map(e => CorkResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.cellar_ids !== undefined && object.cellar_ids !== null) {
      message.cellarIds = CellarIDSet.fromAmino(object.cellar_ids);
    }
    if (object.invalidation_nonce !== undefined && object.invalidation_nonce !== null) {
      message.invalidationNonce = BigInt(object.invalidation_nonce);
    }
    message.scheduledCorks = object.scheduled_corks?.map(e => ScheduledCork.fromAmino(e)) || [];
    message.corkResults = object.cork_results?.map(e => CorkResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.cellar_ids = message.cellarIds ? CellarIDSet.toAmino(message.cellarIds) : undefined;
    obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
    if (message.scheduledCorks) {
      obj.scheduled_corks = message.scheduledCorks.map(e => e ? ScheduledCork.toAmino(e) : undefined);
    } else {
      obj.scheduled_corks = [];
    }
    if (message.corkResults) {
      obj.cork_results = message.corkResults.map(e => e ? CorkResult.toAmino(e) : undefined);
    } else {
      obj.cork_results = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cork.v2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    voteThreshold: "",
    maxCorksPerValidator: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cork.v2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteThreshold !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.maxCorksPerValidator !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxCorksPerValidator);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      maxCorksPerValidator: isSet(object.maxCorksPerValidator) ? BigInt(object.maxCorksPerValidator.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.voteThreshold = object.voteThreshold ?? "";
    message.maxCorksPerValidator = object.maxCorksPerValidator !== undefined && object.maxCorksPerValidator !== null ? BigInt(object.maxCorksPerValidator.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.voteThreshold = object.vote_threshold;
    }
    if (object.max_corks_per_validator !== undefined && object.max_corks_per_validator !== null) {
      message.maxCorksPerValidator = BigInt(object.max_corks_per_validator);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.vote_threshold = message.voteThreshold;
    obj.max_corks_per_validator = message.maxCorksPerValidator ? message.maxCorksPerValidator.toString() : undefined;
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
      typeUrl: "/cork.v2.Params",
      value: Params.encode(message).finish()
    };
  }
};