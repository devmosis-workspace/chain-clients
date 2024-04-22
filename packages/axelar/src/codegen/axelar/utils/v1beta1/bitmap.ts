import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Bitmap {
  trueCountCache?: CircularBuffer;
}
export interface BitmapProtoMsg {
  typeUrl: "/axelar.utils.v1beta1.Bitmap";
  value: Uint8Array;
}
export interface BitmapAmino {
  true_count_cache?: CircularBufferAmino;
}
export interface BitmapAminoMsg {
  type: "/axelar.utils.v1beta1.Bitmap";
  value: BitmapAmino;
}
export interface BitmapSDKType {
  true_count_cache?: CircularBufferSDKType;
}
export interface CircularBuffer {
  cumulativeValue: bigint[];
  index: number;
  maxSize: number;
}
export interface CircularBufferProtoMsg {
  typeUrl: "/axelar.utils.v1beta1.CircularBuffer";
  value: Uint8Array;
}
export interface CircularBufferAmino {
  cumulative_value?: string[];
  index?: number;
  max_size?: number;
}
export interface CircularBufferAminoMsg {
  type: "/axelar.utils.v1beta1.CircularBuffer";
  value: CircularBufferAmino;
}
export interface CircularBufferSDKType {
  cumulative_value: bigint[];
  index: number;
  max_size: number;
}
function createBaseBitmap(): Bitmap {
  return {
    trueCountCache: undefined
  };
}
export const Bitmap = {
  typeUrl: "/axelar.utils.v1beta1.Bitmap",
  encode(message: Bitmap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BitmapAmino): Bitmap {
    const message = createBaseBitmap();
    if (object.true_count_cache !== undefined && object.true_count_cache !== null) {
      message.trueCountCache = CircularBuffer.fromAmino(object.true_count_cache);
    }
    return message;
  },
  toAmino(message: Bitmap): BitmapAmino {
    const obj: any = {};
    obj.true_count_cache = message.trueCountCache ? CircularBuffer.toAmino(message.trueCountCache) : undefined;
    return obj;
  },
  fromAminoMsg(object: BitmapAminoMsg): Bitmap {
    return Bitmap.fromAmino(object.value);
  },
  fromProtoMsg(message: BitmapProtoMsg): Bitmap {
    return Bitmap.decode(message.value);
  },
  toProto(message: Bitmap): Uint8Array {
    return Bitmap.encode(message).finish();
  },
  toProtoMsg(message: Bitmap): BitmapProtoMsg {
    return {
      typeUrl: "/axelar.utils.v1beta1.Bitmap",
      value: Bitmap.encode(message).finish()
    };
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
  typeUrl: "/axelar.utils.v1beta1.CircularBuffer",
  encode(message: CircularBuffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      cumulativeValue: Array.isArray(object?.cumulativeValue) ? object.cumulativeValue.map((e: any) => BigInt(e.toString())) : [],
      index: isSet(object.index) ? Number(object.index) : 0,
      maxSize: isSet(object.maxSize) ? Number(object.maxSize) : 0
    };
  },
  fromPartial(object: Partial<CircularBuffer>): CircularBuffer {
    const message = createBaseCircularBuffer();
    message.cumulativeValue = object.cumulativeValue?.map(e => BigInt(e.toString())) || [];
    message.index = object.index ?? 0;
    message.maxSize = object.maxSize ?? 0;
    return message;
  },
  fromAmino(object: CircularBufferAmino): CircularBuffer {
    const message = createBaseCircularBuffer();
    message.cumulativeValue = object.cumulative_value?.map(e => BigInt(e)) || [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.max_size !== undefined && object.max_size !== null) {
      message.maxSize = object.max_size;
    }
    return message;
  },
  toAmino(message: CircularBuffer): CircularBufferAmino {
    const obj: any = {};
    if (message.cumulativeValue) {
      obj.cumulative_value = message.cumulativeValue.map(e => e.toString());
    } else {
      obj.cumulative_value = [];
    }
    obj.index = message.index;
    obj.max_size = message.maxSize;
    return obj;
  },
  fromAminoMsg(object: CircularBufferAminoMsg): CircularBuffer {
    return CircularBuffer.fromAmino(object.value);
  },
  fromProtoMsg(message: CircularBufferProtoMsg): CircularBuffer {
    return CircularBuffer.decode(message.value);
  },
  toProto(message: CircularBuffer): Uint8Array {
    return CircularBuffer.encode(message).finish();
  },
  toProtoMsg(message: CircularBuffer): CircularBufferProtoMsg {
    return {
      typeUrl: "/axelar.utils.v1beta1.CircularBuffer",
      value: CircularBuffer.encode(message).finish()
    };
  }
};