import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet, bytesFromBase64, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface TalliedVote_IsVoterLateEntry {
  key: string;
  value: boolean;
}
export interface TalliedVote_IsVoterLateEntrySDKType {
  key: string;
  value: boolean;
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVote {
  tally: Uint8Array;
  data?: Any;
  pollId: Long;
  isVoterLate: {
    [key: string]: boolean;
  };
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVoteSDKType {
  tally: Uint8Array;
  data?: AnySDKType;
  poll_id: Long;
  is_voter_late: {
    [key: string]: boolean;
  };
}
function createBaseTalliedVote_IsVoterLateEntry(): TalliedVote_IsVoterLateEntry {
  return {
    key: "",
    value: false
  };
}
export const TalliedVote_IsVoterLateEntry = {
  encode(message: TalliedVote_IsVoterLateEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value === true) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },
  fromJSON(object: any): TalliedVote_IsVoterLateEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  fromPartial(object: Partial<TalliedVote_IsVoterLateEntry>): TalliedVote_IsVoterLateEntry {
    const message = createBaseTalliedVote_IsVoterLateEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? false;
    return message;
  }
};
function createBaseTalliedVote(): TalliedVote {
  return {
    tally: new Uint8Array(),
    data: undefined,
    pollId: Long.UZERO,
    isVoterLate: {}
  };
}
export const TalliedVote = {
  encode(message: TalliedVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tally.length !== 0) {
      writer.uint32(10).bytes(message.tally);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    if (!message.pollId.isZero()) {
      writer.uint32(32).uint64(message.pollId);
    }
    Object.entries(message.isVoterLate).forEach(([key, value]) => {
      TalliedVote_IsVoterLateEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(40).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): TalliedVote {
    return {
      tally: isSet(object.tally) ? bytesFromBase64(object.tally) : new Uint8Array(),
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      pollId: isSet(object.pollId) ? Long.fromValue(object.pollId) : Long.UZERO,
      isVoterLate: isObject(object.isVoterLate) ? Object.entries(object.isVoterLate).reduce<{
        [key: string]: bool;
      }>((acc, [key, value]) => {
        acc[key] = bool.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<TalliedVote>): TalliedVote {
    const message = createBaseTalliedVote();
    message.tally = object.tally ?? new Uint8Array();
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    message.pollId = object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    message.isVoterLate = Object.entries(object.isVoterLate ?? {}).reduce<{
      [key: string]: bool;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bool.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};