import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ValidatorCork, ValidatorCorkAmino, ValidatorCorkSDKType, ScheduledCork, ScheduledCorkAmino, ScheduledCorkSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
  params: Params;
  cellarIds: CellarIDSet;
  invalidationNonce: bigint;
  corks: ValidatorCork[];
  scheduledCorks: ScheduledCork[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cork.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  cellar_ids?: CellarIDSetAmino;
  invalidation_nonce: string;
  corks: ValidatorCorkAmino[];
  scheduled_corks: ScheduledCorkAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/cork.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  cellar_ids: CellarIDSetSDKType;
  invalidation_nonce: bigint;
  corks: ValidatorCorkSDKType[];
  scheduled_corks: ScheduledCorkSDKType[];
}
/** Params cork parameters */
export interface Params {
  /** VotePeriod defines the number of blocks to wait for votes before attempting to tally */
  votePeriod: bigint;
  /** VoteThreshold defines the percentage of bonded stake required to vote each period */
  voteThreshold: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/cork.v1.Params";
  value: Uint8Array;
}
/** Params cork parameters */
export interface ParamsAmino {
  /** VotePeriod defines the number of blocks to wait for votes before attempting to tally */
  vote_period: string;
  /** VoteThreshold defines the percentage of bonded stake required to vote each period */
  vote_threshold: string;
}
export interface ParamsAminoMsg {
  type: "/cork.v1.Params";
  value: ParamsAmino;
}
/** Params cork parameters */
export interface ParamsSDKType {
  vote_period: bigint;
  vote_threshold: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    cellarIds: CellarIDSet.fromPartial({}),
    invalidationNonce: BigInt(0),
    corks: [],
    scheduledCorks: []
  };
}
export const GenesisState = {
  typeUrl: "/cork.v1.GenesisState",
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
    for (const v of message.corks) {
      ValidatorCork.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.scheduledCorks) {
      ScheduledCork.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      cellarIds: isSet(object.cellarIds) ? CellarIDSet.fromJSON(object.cellarIds) : undefined,
      invalidationNonce: isSet(object.invalidationNonce) ? BigInt(object.invalidationNonce.toString()) : BigInt(0),
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ValidatorCork.fromJSON(e)) : [],
      scheduledCorks: Array.isArray(object?.scheduledCorks) ? object.scheduledCorks.map((e: any) => ScheduledCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce.toString()) : BigInt(0);
    message.corks = object.corks?.map(e => ValidatorCork.fromPartial(e)) || [];
    message.scheduledCorks = object.scheduledCorks?.map(e => ScheduledCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      cellarIds: object?.cellar_ids ? CellarIDSet.fromAmino(object.cellar_ids) : undefined,
      invalidationNonce: BigInt(object.invalidation_nonce),
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ValidatorCork.fromAmino(e)) : [],
      scheduledCorks: Array.isArray(object?.scheduled_corks) ? object.scheduled_corks.map((e: any) => ScheduledCork.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.cellar_ids = message.cellarIds ? CellarIDSet.toAmino(message.cellarIds) : undefined;
    obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ValidatorCork.toAmino(e) : undefined);
    } else {
      obj.corks = [];
    }
    if (message.scheduledCorks) {
      obj.scheduled_corks = message.scheduledCorks.map(e => e ? ScheduledCork.toAmino(e) : undefined);
    } else {
      obj.scheduled_corks = [];
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
      typeUrl: "/cork.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    votePeriod: BigInt(0),
    voteThreshold: ""
  };
}
export const Params = {
  typeUrl: "/cork.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votePeriod !== BigInt(0)) {
      writer.uint32(8).int64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      votePeriod: isSet(object.votePeriod) ? BigInt(object.votePeriod.toString()) : BigInt(0),
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? BigInt(object.votePeriod.toString()) : BigInt(0);
    message.voteThreshold = object.voteThreshold ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      votePeriod: BigInt(object.vote_period),
      voteThreshold: object.vote_threshold
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.vote_period = message.votePeriod ? message.votePeriod.toString() : undefined;
    obj.vote_threshold = message.voteThreshold;
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
      typeUrl: "/cork.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};