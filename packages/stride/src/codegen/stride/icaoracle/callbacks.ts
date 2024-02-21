import { Metric, MetricAmino, MetricSDKType } from "./icaoracle";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallback {
  /** Callback data for instantiating an oracle */
  oracleChainId: string;
}
export interface InstantiateOracleCallbackProtoMsg {
  typeUrl: "/stride.icaoracle.InstantiateOracleCallback";
  value: Uint8Array;
}
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallbackAmino {
  /** Callback data for instantiating an oracle */
  oracle_chain_id?: string;
}
export interface InstantiateOracleCallbackAminoMsg {
  type: "/stride.icaoracle.InstantiateOracleCallback";
  value: InstantiateOracleCallbackAmino;
}
/** Callback data for instantiating an oracle */
export interface InstantiateOracleCallbackSDKType {
  oracle_chain_id: string;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallback {
  oracleChainId: string;
  metric?: Metric;
}
export interface UpdateOracleCallbackProtoMsg {
  typeUrl: "/stride.icaoracle.UpdateOracleCallback";
  value: Uint8Array;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallbackAmino {
  oracle_chain_id?: string;
  metric?: MetricAmino;
}
export interface UpdateOracleCallbackAminoMsg {
  type: "/stride.icaoracle.UpdateOracleCallback";
  value: UpdateOracleCallbackAmino;
}
/** Callback data for updating a value in the oracle */
export interface UpdateOracleCallbackSDKType {
  oracle_chain_id: string;
  metric?: MetricSDKType;
}
function createBaseInstantiateOracleCallback(): InstantiateOracleCallback {
  return {
    oracleChainId: ""
  };
}
export const InstantiateOracleCallback = {
  typeUrl: "/stride.icaoracle.InstantiateOracleCallback",
  encode(message: InstantiateOracleCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }
    return writer;
  },
  fromJSON(object: any): InstantiateOracleCallback {
    return {
      oracleChainId: isSet(object.oracleChainId) ? String(object.oracleChainId) : ""
    };
  },
  fromPartial(object: Partial<InstantiateOracleCallback>): InstantiateOracleCallback {
    const message = createBaseInstantiateOracleCallback();
    message.oracleChainId = object.oracleChainId ?? "";
    return message;
  },
  fromAmino(object: InstantiateOracleCallbackAmino): InstantiateOracleCallback {
    const message = createBaseInstantiateOracleCallback();
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    return message;
  },
  toAmino(message: InstantiateOracleCallback): InstantiateOracleCallbackAmino {
    const obj: any = {};
    obj.oracle_chain_id = message.oracleChainId;
    return obj;
  },
  fromAminoMsg(object: InstantiateOracleCallbackAminoMsg): InstantiateOracleCallback {
    return InstantiateOracleCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: InstantiateOracleCallbackProtoMsg): InstantiateOracleCallback {
    return InstantiateOracleCallback.decode(message.value);
  },
  toProto(message: InstantiateOracleCallback): Uint8Array {
    return InstantiateOracleCallback.encode(message).finish();
  },
  toProtoMsg(message: InstantiateOracleCallback): InstantiateOracleCallbackProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.InstantiateOracleCallback",
      value: InstantiateOracleCallback.encode(message).finish()
    };
  }
};
function createBaseUpdateOracleCallback(): UpdateOracleCallback {
  return {
    oracleChainId: "",
    metric: undefined
  };
}
export const UpdateOracleCallback = {
  typeUrl: "/stride.icaoracle.UpdateOracleCallback",
  encode(message: UpdateOracleCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleChainId !== "") {
      writer.uint32(10).string(message.oracleChainId);
    }
    if (message.metric !== undefined) {
      Metric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpdateOracleCallback {
    return {
      oracleChainId: isSet(object.oracleChainId) ? String(object.oracleChainId) : "",
      metric: isSet(object.metric) ? Metric.fromJSON(object.metric) : undefined
    };
  },
  fromPartial(object: Partial<UpdateOracleCallback>): UpdateOracleCallback {
    const message = createBaseUpdateOracleCallback();
    message.oracleChainId = object.oracleChainId ?? "";
    message.metric = object.metric !== undefined && object.metric !== null ? Metric.fromPartial(object.metric) : undefined;
    return message;
  },
  fromAmino(object: UpdateOracleCallbackAmino): UpdateOracleCallback {
    const message = createBaseUpdateOracleCallback();
    if (object.oracle_chain_id !== undefined && object.oracle_chain_id !== null) {
      message.oracleChainId = object.oracle_chain_id;
    }
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = Metric.fromAmino(object.metric);
    }
    return message;
  },
  toAmino(message: UpdateOracleCallback): UpdateOracleCallbackAmino {
    const obj: any = {};
    obj.oracle_chain_id = message.oracleChainId;
    obj.metric = message.metric ? Metric.toAmino(message.metric) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateOracleCallbackAminoMsg): UpdateOracleCallback {
    return UpdateOracleCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateOracleCallbackProtoMsg): UpdateOracleCallback {
    return UpdateOracleCallback.decode(message.value);
  },
  toProto(message: UpdateOracleCallback): Uint8Array {
    return UpdateOracleCallback.encode(message).finish();
  },
  toProtoMsg(message: UpdateOracleCallback): UpdateOracleCallbackProtoMsg {
    return {
      typeUrl: "/stride.icaoracle.UpdateOracleCallback",
      value: UpdateOracleCallback.encode(message).finish()
    };
  }
};