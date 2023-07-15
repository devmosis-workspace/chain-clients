import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Bitmap {
  trueCountCache?: CircularBuffer;
}
export interface BitmapSDKType {
  true_count_cache?: CircularBufferSDKType;
}
export interface CircularBuffer {
  cumulativeValue: Long[];
  index: number;
  maxSize: number;
}
export interface CircularBufferSDKType {
  cumulative_value: Long[];
  index: number;
  max_size: number;
}
function createBaseBitmap(): Bitmap {
  return {
    trueCountCache: undefined
  };
}
export const Bitmap = {
  encode(message: Bitmap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trueCountCache !== undefined) {
      CircularBuffer.encode(message.trueCountCache, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Bitmap {
    return {
      trueCountCache: isSet(object.trueCountCache) ? CircularBuffer.fromJSON(object.trueCountCache) : undefined
    };
  },
  fromPartial(object: Partial<Bitmap>): Bitmap {
    const message = createBaseBitmap();
    message.trueCountCache = object.trueCountCache !== undefined && object.trueCountCache !== null ? CircularBuffer.fromPartial(object.trueCountCache) : undefined;
    return message;
  }
};
function createBaseCircularBuffer(): CircularBuffer {
  return {
    cumulativeValue: [],
    index: 0,
    maxSize: 0
  };
}
export const CircularBuffer = {
  encode(message: CircularBuffer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.cumulativeValue) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }
    if (message.maxSize !== 0) {
      writer.uint32(24).int32(message.maxSize);
    }
    return writer;
  },
  fromJSON(object: any): CircularBuffer {
    return {
      cumulativeValue: Array.isArray(object?.cumulativeValue) ? object.cumulativeValue.map((e: any) => Long.fromValue(e)) : [],
      index: isSet(object.index) ? Number(object.index) : 0,
      maxSize: isSet(object.maxSize) ? Number(object.maxSize) : 0
    };
  },
  fromPartial(object: Partial<CircularBuffer>): CircularBuffer {
    const message = createBaseCircularBuffer();
    message.cumulativeValue = object.cumulativeValue?.map(e => Long.fromValue(e)) || [];
    message.index = object.index ?? 0;
    message.maxSize = object.maxSize ?? 0;
    return message;
  }
};