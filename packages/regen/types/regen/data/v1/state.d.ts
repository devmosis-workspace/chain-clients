import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
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
export declare const DataID: {
    typeUrl: string;
    encode(message: DataID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DataID;
    fromPartial(object: Partial<DataID>): DataID;
    fromAmino(object: DataIDAmino): DataID;
    toAmino(message: DataID): DataIDAmino;
    fromAminoMsg(object: DataIDAminoMsg): DataID;
    fromProtoMsg(message: DataIDProtoMsg): DataID;
    toProto(message: DataID): Uint8Array;
    toProtoMsg(message: DataID): DataIDProtoMsg;
};
export declare const DataAnchor: {
    typeUrl: string;
    encode(message: DataAnchor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DataAnchor;
    fromPartial(object: Partial<DataAnchor>): DataAnchor;
    fromAmino(object: DataAnchorAmino): DataAnchor;
    toAmino(message: DataAnchor): DataAnchorAmino;
    fromAminoMsg(object: DataAnchorAminoMsg): DataAnchor;
    fromProtoMsg(message: DataAnchorProtoMsg): DataAnchor;
    toProto(message: DataAnchor): Uint8Array;
    toProtoMsg(message: DataAnchor): DataAnchorProtoMsg;
};
export declare const DataAttestor: {
    typeUrl: string;
    encode(message: DataAttestor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DataAttestor;
    fromPartial(object: Partial<DataAttestor>): DataAttestor;
    fromAmino(object: DataAttestorAmino): DataAttestor;
    toAmino(message: DataAttestor): DataAttestorAmino;
    fromAminoMsg(object: DataAttestorAminoMsg): DataAttestor;
    fromProtoMsg(message: DataAttestorProtoMsg): DataAttestor;
    toProto(message: DataAttestor): Uint8Array;
    toProtoMsg(message: DataAttestor): DataAttestorProtoMsg;
};
export declare const Resolver: {
    typeUrl: string;
    encode(message: Resolver, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Resolver;
    fromPartial(object: Partial<Resolver>): Resolver;
    fromAmino(object: ResolverAmino): Resolver;
    toAmino(message: Resolver): ResolverAmino;
    fromAminoMsg(object: ResolverAminoMsg): Resolver;
    fromProtoMsg(message: ResolverProtoMsg): Resolver;
    toProto(message: Resolver): Uint8Array;
    toProtoMsg(message: Resolver): ResolverProtoMsg;
};
export declare const DataResolver: {
    typeUrl: string;
    encode(message: DataResolver, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DataResolver;
    fromPartial(object: Partial<DataResolver>): DataResolver;
    fromAmino(object: DataResolverAmino): DataResolver;
    toAmino(message: DataResolver): DataResolverAmino;
    fromAminoMsg(object: DataResolverAminoMsg): DataResolver;
    fromProtoMsg(message: DataResolverProtoMsg): DataResolver;
    toProto(message: DataResolver): Uint8Array;
    toProtoMsg(message: DataResolver): DataResolverProtoMsg;
};
