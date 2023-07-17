import { CellarIDSet, CellarIDSetSDKType, ValidatorCork, ValidatorCorkSDKType, ScheduledCork, ScheduledCorkSDKType } from "./cork";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
  params?: Params;
  cellarIds?: CellarIDSet;
  invalidationNonce: Long;
  corks: ValidatorCork[];
  scheduledCorks: ScheduledCork[];
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  cellar_ids?: CellarIDSetSDKType;
  invalidation_nonce: Long;
  corks: ValidatorCorkSDKType[];
  scheduled_corks: ScheduledCorkSDKType[];
}
/** Params cork parameters */
export interface Params {
  /** VotePeriod defines the number of blocks to wait for votes before attempting to tally */
  votePeriod: Long;
  /** VoteThreshold defines the percentage of bonded stake required to vote each period */
  voteThreshold: string;
}
/** Params cork parameters */
export interface ParamsSDKType {
  vote_period: Long;
  vote_threshold: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    cellarIds: undefined,
    invalidationNonce: Long.UZERO,
    corks: [],
    scheduledCorks: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.cellarIds !== undefined) {
      CellarIDSet.encode(message.cellarIds, writer.uint32(18).fork()).ldelim();
    }
    if (!message.invalidationNonce.isZero()) {
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
      invalidationNonce: isSet(object.invalidationNonce) ? Long.fromValue(object.invalidationNonce) : Long.UZERO,
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ValidatorCork.fromJSON(e)) : [],
      scheduledCorks: Array.isArray(object?.scheduledCorks) ? object.scheduledCorks.map((e: any) => ScheduledCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.cellarIds = object.cellarIds !== undefined && object.cellarIds !== null ? CellarIDSet.fromPartial(object.cellarIds) : undefined;
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
    message.corks = object.corks?.map(e => ValidatorCork.fromPartial(e)) || [];
    message.scheduledCorks = object.scheduledCorks?.map(e => ScheduledCork.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    votePeriod: Long.ZERO,
    voteThreshold: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).int64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      votePeriod: isSet(object.votePeriod) ? Long.fromValue(object.votePeriod) : Long.ZERO,
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? Long.fromValue(object.votePeriod) : Long.ZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    return message;
  }
};