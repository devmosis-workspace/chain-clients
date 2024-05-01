import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp } from "../../../helpers";
/** DataID stores a compact data ID and its full IRI. */
export interface DataID {
  /** id is the compact automatically-generated data ID. */
  id: Uint8Array;
  /** iri is the IRI of the data which contains its full ContentHash. */
  iri: string;
}
export interface DataIDProtoMsg {
  typeUrl: "/regen.data.v1.DataID";
  value: Uint8Array;
}
/** DataID stores a compact data ID and its full IRI. */
export interface DataIDAmino {
  /** id is the compact automatically-generated data ID. */
  id?: string;
  /** iri is the IRI of the data which contains its full ContentHash. */
  iri?: string;
}
export interface DataIDAminoMsg {
  type: "/regen.data.v1.DataID";
  value: DataIDAmino;
}
/** DataID stores a compact data ID and its full IRI. */
export interface DataIDSDKType {
  id: Uint8Array;
  iri: string;
}
/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchor {
  /** id is the compact data ID. */
  id: Uint8Array;
  /**
   * timestamp is the anchor timestamp for this object - the time at which
   * it was first known to the blockchain.
   */
  timestamp?: Timestamp;
}
export interface DataAnchorProtoMsg {
  typeUrl: "/regen.data.v1.DataAnchor";
  value: Uint8Array;
}
/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchorAmino {
  /** id is the compact data ID. */
  id?: string;
  /**
   * timestamp is the anchor timestamp for this object - the time at which
   * it was first known to the blockchain.
   */
  timestamp?: string;
}
export interface DataAnchorAminoMsg {
  type: "/regen.data.v1.DataAnchor";
  value: DataAnchorAmino;
}
/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchorSDKType {
  id: Uint8Array;
  timestamp?: TimestampSDKType;
}
/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestor {
  /** id is the compact data ID. */
  id: Uint8Array;
  /** attestor is the account address of the attestor. */
  attestor: Uint8Array;
  /** timestamp is the time at which the attestor signed this data object. */
  timestamp?: Timestamp;
}
export interface DataAttestorProtoMsg {
  typeUrl: "/regen.data.v1.DataAttestor";
  value: Uint8Array;
}
/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestorAmino {
  /** id is the compact data ID. */
  id?: string;
  /** attestor is the account address of the attestor. */
  attestor?: string;
  /** timestamp is the time at which the attestor signed this data object. */
  timestamp?: string;
}
export interface DataAttestorAminoMsg {
  type: "/regen.data.v1.DataAttestor";
  value: DataAttestorAmino;
}
/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestorSDKType {
  id: Uint8Array;
  attestor: Uint8Array;
  timestamp?: TimestampSDKType;
}
/** Resolver describes a data resolver. */
export interface Resolver {
  /** id is the ID of the resolver. */
  id: bigint;
  /** url is the URL of the resolver. */
  url: string;
  /**
   * manager is the bytes address of the resolver manager who is allowed
   * to make calls to Msg/RegisterResolver for this resolver.
   */
  manager: Uint8Array;
}
export interface ResolverProtoMsg {
  typeUrl: "/regen.data.v1.Resolver";
  value: Uint8Array;
}
/** Resolver describes a data resolver. */
export interface ResolverAmino {
  /** id is the ID of the resolver. */
  id?: string;
  /** url is the URL of the resolver. */
  url?: string;
  /**
   * manager is the bytes address of the resolver manager who is allowed
   * to make calls to Msg/RegisterResolver for this resolver.
   */
  manager?: string;
}
export interface ResolverAminoMsg {
  type: "/regen.data.v1.Resolver";
  value: ResolverAmino;
}
/** Resolver describes a data resolver. */
export interface ResolverSDKType {
  id: bigint;
  url: string;
  manager: Uint8Array;
}
/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolver {
  /** id is the compact data ID. */
  id: Uint8Array;
  /** resolver_id is the ID of the resolver. */
  resolverId: bigint;
}
export interface DataResolverProtoMsg {
  typeUrl: "/regen.data.v1.DataResolver";
  value: Uint8Array;
}
/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolverAmino {
  /** id is the compact data ID. */
  id?: string;
  /** resolver_id is the ID of the resolver. */
  resolver_id?: string;
}
export interface DataResolverAminoMsg {
  type: "/regen.data.v1.DataResolver";
  value: DataResolverAmino;
}
/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolverSDKType {
  id: Uint8Array;
  resolver_id: bigint;
}
function createBaseDataID(): DataID {
  return {
    id: new Uint8Array(),
    iri: ""
  };
}
export const DataID = {
  typeUrl: "/regen.data.v1.DataID",
  encode(message: DataID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.iri !== "") {
      writer.uint32(18).string(message.iri);
    }
    return writer;
  },
  fromJSON(object: any): DataID {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  fromPartial(object: Partial<DataID>): DataID {
    const message = createBaseDataID();
    message.id = object.id ?? new Uint8Array();
    message.iri = object.iri ?? "";
    return message;
  },
  fromAmino(object: DataIDAmino): DataID {
    const message = createBaseDataID();
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: DataID): DataIDAmino {
    const obj: any = {};
    obj.id = message.id ? base64FromBytes(message.id) : undefined;
    obj.iri = message.iri;
    return obj;
  },
  fromAminoMsg(object: DataIDAminoMsg): DataID {
    return DataID.fromAmino(object.value);
  },
  fromProtoMsg(message: DataIDProtoMsg): DataID {
    return DataID.decode(message.value);
  },
  toProto(message: DataID): Uint8Array {
    return DataID.encode(message).finish();
  },
  toProtoMsg(message: DataID): DataIDProtoMsg {
    return {
      typeUrl: "/regen.data.v1.DataID",
      value: DataID.encode(message).finish()
    };
  }
};
function createBaseDataAnchor(): DataAnchor {
  return {
    id: new Uint8Array(),
    timestamp: undefined
  };
}
export const DataAnchor = {
  typeUrl: "/regen.data.v1.DataAnchor",
  encode(message: DataAnchor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DataAnchor {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<DataAnchor>): DataAnchor {
    const message = createBaseDataAnchor();
    message.id = object.id ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },
  fromAmino(object: DataAnchorAmino): DataAnchor {
    const message = createBaseDataAnchor();
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    return message;
  },
  toAmino(message: DataAnchor): DataAnchorAmino {
    const obj: any = {};
    obj.id = message.id ? base64FromBytes(message.id) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },
  fromAminoMsg(object: DataAnchorAminoMsg): DataAnchor {
    return DataAnchor.fromAmino(object.value);
  },
  fromProtoMsg(message: DataAnchorProtoMsg): DataAnchor {
    return DataAnchor.decode(message.value);
  },
  toProto(message: DataAnchor): Uint8Array {
    return DataAnchor.encode(message).finish();
  },
  toProtoMsg(message: DataAnchor): DataAnchorProtoMsg {
    return {
      typeUrl: "/regen.data.v1.DataAnchor",
      value: DataAnchor.encode(message).finish()
    };
  }
};
function createBaseDataAttestor(): DataAttestor {
  return {
    id: new Uint8Array(),
    attestor: new Uint8Array(),
    timestamp: undefined
  };
}
export const DataAttestor = {
  typeUrl: "/regen.data.v1.DataAttestor",
  encode(message: DataAttestor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.attestor.length !== 0) {
      writer.uint32(18).bytes(message.attestor);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DataAttestor {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      attestor: isSet(object.attestor) ? bytesFromBase64(object.attestor) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  fromPartial(object: Partial<DataAttestor>): DataAttestor {
    const message = createBaseDataAttestor();
    message.id = object.id ?? new Uint8Array();
    message.attestor = object.attestor ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },
  fromAmino(object: DataAttestorAmino): DataAttestor {
    const message = createBaseDataAttestor();
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    if (object.attestor !== undefined && object.attestor !== null) {
      message.attestor = bytesFromBase64(object.attestor);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    return message;
  },
  toAmino(message: DataAttestor): DataAttestorAmino {
    const obj: any = {};
    obj.id = message.id ? base64FromBytes(message.id) : undefined;
    obj.attestor = message.attestor ? base64FromBytes(message.attestor) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },
  fromAminoMsg(object: DataAttestorAminoMsg): DataAttestor {
    return DataAttestor.fromAmino(object.value);
  },
  fromProtoMsg(message: DataAttestorProtoMsg): DataAttestor {
    return DataAttestor.decode(message.value);
  },
  toProto(message: DataAttestor): Uint8Array {
    return DataAttestor.encode(message).finish();
  },
  toProtoMsg(message: DataAttestor): DataAttestorProtoMsg {
    return {
      typeUrl: "/regen.data.v1.DataAttestor",
      value: DataAttestor.encode(message).finish()
    };
  }
};
function createBaseResolver(): Resolver {
  return {
    id: BigInt(0),
    url: "",
    manager: new Uint8Array()
  };
}
export const Resolver = {
  typeUrl: "/regen.data.v1.Resolver",
  encode(message: Resolver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.manager.length !== 0) {
      writer.uint32(26).bytes(message.manager);
    }
    return writer;
  },
  fromJSON(object: any): Resolver {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      url: isSet(object.url) ? String(object.url) : "",
      manager: isSet(object.manager) ? bytesFromBase64(object.manager) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Resolver>): Resolver {
    const message = createBaseResolver();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.url = object.url ?? "";
    message.manager = object.manager ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResolverAmino): Resolver {
    const message = createBaseResolver();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.manager !== undefined && object.manager !== null) {
      message.manager = bytesFromBase64(object.manager);
    }
    return message;
  },
  toAmino(message: Resolver): ResolverAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.url = message.url;
    obj.manager = message.manager ? base64FromBytes(message.manager) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResolverAminoMsg): Resolver {
    return Resolver.fromAmino(object.value);
  },
  fromProtoMsg(message: ResolverProtoMsg): Resolver {
    return Resolver.decode(message.value);
  },
  toProto(message: Resolver): Uint8Array {
    return Resolver.encode(message).finish();
  },
  toProtoMsg(message: Resolver): ResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.Resolver",
      value: Resolver.encode(message).finish()
    };
  }
};
function createBaseDataResolver(): DataResolver {
  return {
    id: new Uint8Array(),
    resolverId: BigInt(0)
  };
}
export const DataResolver = {
  typeUrl: "/regen.data.v1.DataResolver",
  encode(message: DataResolver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.resolverId !== BigInt(0)) {
      writer.uint32(16).uint64(message.resolverId);
    }
    return writer;
  },
  fromJSON(object: any): DataResolver {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      resolverId: isSet(object.resolverId) ? BigInt(object.resolverId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<DataResolver>): DataResolver {
    const message = createBaseDataResolver();
    message.id = object.id ?? new Uint8Array();
    message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? BigInt(object.resolverId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DataResolverAmino): DataResolver {
    const message = createBaseDataResolver();
    if (object.id !== undefined && object.id !== null) {
      message.id = bytesFromBase64(object.id);
    }
    if (object.resolver_id !== undefined && object.resolver_id !== null) {
      message.resolverId = BigInt(object.resolver_id);
    }
    return message;
  },
  toAmino(message: DataResolver): DataResolverAmino {
    const obj: any = {};
    obj.id = message.id ? base64FromBytes(message.id) : undefined;
    obj.resolver_id = message.resolverId ? message.resolverId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DataResolverAminoMsg): DataResolver {
    return DataResolver.fromAmino(object.value);
  },
  fromProtoMsg(message: DataResolverProtoMsg): DataResolver {
    return DataResolver.decode(message.value);
  },
  toProto(message: DataResolver): Uint8Array {
    return DataResolver.encode(message).finish();
  },
  toProtoMsg(message: DataResolver): DataResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.DataResolver",
      value: DataResolver.encode(message).finish()
    };
  }
};