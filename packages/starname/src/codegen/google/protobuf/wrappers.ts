import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
  /** The double value. */
  value: number;
}
/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValueSDKType {
  value: number;
}
/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
  /** The float value. */
  value: number;
}
/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValueSDKType {
  value: number;
}
/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
  /** The int64 value. */
  value: Long;
}
/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueSDKType {
  value: Long;
}
/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
  /** The uint64 value. */
  value: Long;
}
/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueSDKType {
  value: Long;
}
/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
  /** The int32 value. */
  value: number;
}
/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32ValueSDKType {
  value: number;
}
/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
  /** The uint32 value. */
  value: number;
}
/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32ValueSDKType {
  value: number;
}
/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
  /** The bool value. */
  value: boolean;
}
/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValueSDKType {
  value: boolean;
}
/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
  /** The string value. */
  value: string;
}
/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValueSDKType {
  value: string;
}
/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
  /** The bytes value. */
  value: Uint8Array;
}
/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValueSDKType {
  value: Uint8Array;
}
function createBaseDoubleValue(): DoubleValue {
  return {
    value: 0
  };
}
export const DoubleValue = {
  encode(message: DoubleValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },
  fromJSON(object: any): DoubleValue {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  fromPartial(object: Partial<DoubleValue>): DoubleValue {
    const message = createBaseDoubleValue();
    message.value = object.value ?? 0;
    return message;
  }
};
function createBaseFloatValue(): FloatValue {
  return {
    value: 0
  };
}
export const FloatValue = {
  encode(message: FloatValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    return writer;
  },
  fromJSON(object: any): FloatValue {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  fromPartial(object: Partial<FloatValue>): FloatValue {
    const message = createBaseFloatValue();
    message.value = object.value ?? 0;
    return message;
  }
};
function createBaseInt64Value(): Int64Value {
  return {
    value: Long.ZERO
  };
}
export const Int64Value = {
  encode(message: Int64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Int64Value {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Int64Value>): Int64Value {
    const message = createBaseInt64Value();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  }
};
function createBaseUInt64Value(): UInt64Value {
  return {
    value: Long.UZERO
  };
}
export const UInt64Value = {
  encode(message: UInt64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },
  fromJSON(object: any): UInt64Value {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },
  fromPartial(object: Partial<UInt64Value>): UInt64Value {
    const message = createBaseUInt64Value();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }
};
function createBaseInt32Value(): Int32Value {
  return {
    value: 0
  };
}
export const Int32Value = {
  encode(message: Int32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Int32Value {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  fromPartial(object: Partial<Int32Value>): Int32Value {
    const message = createBaseInt32Value();
    message.value = object.value ?? 0;
    return message;
  }
};
function createBaseUInt32Value(): UInt32Value {
  return {
    value: 0
  };
}
export const UInt32Value = {
  encode(message: UInt32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }
    return writer;
  },
  fromJSON(object: any): UInt32Value {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },
  fromPartial(object: Partial<UInt32Value>): UInt32Value {
    const message = createBaseUInt32Value();
    message.value = object.value ?? 0;
    return message;
  }
};
function createBaseBoolValue(): BoolValue {
  return {
    value: false
  };
}
export const BoolValue = {
  encode(message: BoolValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },
  fromJSON(object: any): BoolValue {
    return {
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  fromPartial(object: Partial<BoolValue>): BoolValue {
    const message = createBaseBoolValue();
    message.value = object.value ?? false;
    return message;
  }
};
function createBaseStringValue(): StringValue {
  return {
    value: ""
  };
}
export const StringValue = {
  encode(message: StringValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): StringValue {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<StringValue>): StringValue {
    const message = createBaseStringValue();
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseBytesValue(): BytesValue {
  return {
    value: new Uint8Array()
  };
}
export const BytesValue = {
  encode(message: BytesValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },
  fromJSON(object: any): BytesValue {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<BytesValue>): BytesValue {
    const message = createBaseBytesValue();
    message.value = object.value ?? new Uint8Array();
    return message;
  }
};