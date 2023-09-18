import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** IDSet represents a set of IDs */
export interface IDSet {
  /** IDSet represents a set of IDs */
  ids: bigint[];
}
export interface IDSetProtoMsg {
  typeUrl: "/injective.peggy.v1.IDSet";
  value: Uint8Array;
}
/** IDSet represents a set of IDs */
export interface IDSetAmino {
  /** IDSet represents a set of IDs */
  ids: string[];
}
export interface IDSetAminoMsg {
  type: "/injective.peggy.v1.IDSet";
  value: IDSetAmino;
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
  ids: bigint[];
}
export interface BatchFees {
  token: string;
  totalFees: string;
}
export interface BatchFeesProtoMsg {
  typeUrl: "/injective.peggy.v1.BatchFees";
  value: Uint8Array;
}
export interface BatchFeesAmino {
  token: string;
  total_fees: string;
}
export interface BatchFeesAminoMsg {
  type: "/injective.peggy.v1.BatchFees";
  value: BatchFeesAmino;
}
export interface BatchFeesSDKType {
  token: string;
  total_fees: string;
}
function createBaseIDSet(): IDSet {
  return {
    ids: []
  };
}
export const IDSet = {
  typeUrl: "/injective.peggy.v1.IDSet",
  encode(message: IDSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<IDSet>): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: IDSetAmino): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: IDSet): IDSetAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: IDSetAminoMsg): IDSet {
    return IDSet.fromAmino(object.value);
  },
  fromProtoMsg(message: IDSetProtoMsg): IDSet {
    return IDSet.decode(message.value);
  },
  toProto(message: IDSet): Uint8Array {
    return IDSet.encode(message).finish();
  },
  toProtoMsg(message: IDSet): IDSetProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.IDSet",
      value: IDSet.encode(message).finish()
    };
  }
};
function createBaseBatchFees(): BatchFees {
  return {
    token: "",
    totalFees: ""
  };
}
export const BatchFees = {
  typeUrl: "/injective.peggy.v1.BatchFees",
  encode(message: BatchFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.totalFees !== "") {
      writer.uint32(18).string(message.totalFees);
    }
    return writer;
  },
  fromJSON(object: any): BatchFees {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      totalFees: isSet(object.totalFees) ? String(object.totalFees) : ""
    };
  },
  fromPartial(object: Partial<BatchFees>): BatchFees {
    const message = createBaseBatchFees();
    message.token = object.token ?? "";
    message.totalFees = object.totalFees ?? "";
    return message;
  },
  fromAmino(object: BatchFeesAmino): BatchFees {
    return {
      token: object.token,
      totalFees: object.total_fees
    };
  },
  toAmino(message: BatchFees): BatchFeesAmino {
    const obj: any = {};
    obj.token = message.token;
    obj.total_fees = message.totalFees;
    return obj;
  },
  fromAminoMsg(object: BatchFeesAminoMsg): BatchFees {
    return BatchFees.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchFeesProtoMsg): BatchFees {
    return BatchFees.decode(message.value);
  },
  toProto(message: BatchFees): Uint8Array {
    return BatchFees.encode(message).finish();
  },
  toProtoMsg(message: BatchFees): BatchFeesProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.BatchFees",
      value: BatchFees.encode(message).finish()
    };
  }
};