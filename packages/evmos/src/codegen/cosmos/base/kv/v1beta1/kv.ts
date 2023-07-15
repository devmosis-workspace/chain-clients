import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../../helpers";
/** Pairs defines a repeated slice of Pair objects. */
export interface Pairs {
  pairs: Pair[];
}
/** Pairs defines a repeated slice of Pair objects. */
export interface PairsSDKType {
  pairs: PairSDKType[];
}
/** Pair defines a key/value bytes tuple. */
export interface Pair {
  key: Uint8Array;
  value: Uint8Array;
}
/** Pair defines a key/value bytes tuple. */
export interface PairSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
function createBasePairs(): Pairs {
  return {
    pairs: []
  };
}
export const Pairs = {
  encode(message: Pairs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Pairs {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Pairs>): Pairs {
    const message = createBasePairs();
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    return message;
  }
};
function createBasePair(): Pair {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Pair {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Pair>): Pair {
    const message = createBasePair();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};