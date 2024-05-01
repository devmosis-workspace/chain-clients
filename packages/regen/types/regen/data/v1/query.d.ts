import { ContentHash, ContentHashAmino, ContentHashSDKType } from "./types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */
export interface QueryAnchorByIRIRequest {
    /** iri is the IRI of the anchored data. */
    iri: string;
}
export interface QueryAnchorByIRIRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryAnchorByIRIRequest";
    value: Uint8Array;
}
/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */
export interface QueryAnchorByIRIRequestAmino {
    /** iri is the IRI of the anchored data. */
    iri?: string;
}
export interface QueryAnchorByIRIRequestAminoMsg {
    type: "/regen.data.v1.QueryAnchorByIRIRequest";
    value: QueryAnchorByIRIRequestAmino;
}
/** QueryAnchorByIRIRequest is the Query/AnchorByIRI request type. */
export interface QueryAnchorByIRIRequestSDKType {
    iri: string;
}
/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */
export interface QueryAnchorByIRIResponse {
    /** anchor is information about the data anchor. */
    anchor?: AnchorInfo;
}
export interface QueryAnchorByIRIResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryAnchorByIRIResponse";
    value: Uint8Array;
}
/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */
export interface QueryAnchorByIRIResponseAmino {
    /** anchor is information about the data anchor. */
    anchor?: AnchorInfoAmino;
}
export interface QueryAnchorByIRIResponseAminoMsg {
    type: "/regen.data.v1.QueryAnchorByIRIResponse";
    value: QueryAnchorByIRIResponseAmino;
}
/** QueryAnchorByIRIResponse is the Query/AnchorByIRI response type. */
export interface QueryAnchorByIRIResponseSDKType {
    anchor?: AnchorInfoSDKType;
}
/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */
export interface QueryAnchorByHashRequest {
    /** content_hash is the ContentHash of the anchored data. */
    contentHash?: ContentHash;
}
export interface QueryAnchorByHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryAnchorByHashRequest";
    value: Uint8Array;
}
/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */
export interface QueryAnchorByHashRequestAmino {
    /** content_hash is the ContentHash of the anchored data. */
    content_hash?: ContentHashAmino;
}
export interface QueryAnchorByHashRequestAminoMsg {
    type: "/regen.data.v1.QueryAnchorByHashRequest";
    value: QueryAnchorByHashRequestAmino;
}
/** QueryAnchorByHashRequest is the Query/AnchorByHash request type. */
export interface QueryAnchorByHashRequestSDKType {
    content_hash?: ContentHashSDKType;
}
/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */
export interface QueryAnchorByHashResponse {
    /** anchor is information about the data anchor. */
    anchor?: AnchorInfo;
}
export interface QueryAnchorByHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryAnchorByHashResponse";
    value: Uint8Array;
}
/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */
export interface QueryAnchorByHashResponseAmino {
    /** anchor is information about the data anchor. */
    anchor?: AnchorInfoAmino;
}
export interface QueryAnchorByHashResponseAminoMsg {
    type: "/regen.data.v1.QueryAnchorByHashResponse";
    value: QueryAnchorByHashResponseAmino;
}
/** QueryAnchorByHashResponse is the Query/AnchorByHash response type. */
export interface QueryAnchorByHashResponseSDKType {
    anchor?: AnchorInfoSDKType;
}
/**
 * QueryAttestationsByAttestorRequest is the Query/AttestationsByAttestor
 * request type.
 */
export interface QueryAttestationsByAttestorRequest {
    /** attestor is the address of the attestor. */
    attestor: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryAttestationsByAttestorRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestationsByAttestorRequest";
    value: Uint8Array;
}
/**
 * QueryAttestationsByAttestorRequest is the Query/AttestationsByAttestor
 * request type.
 */
export interface QueryAttestationsByAttestorRequestAmino {
    /** attestor is the address of the attestor. */
    attestor?: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryAttestationsByAttestorRequestAminoMsg {
    type: "/regen.data.v1.QueryAttestationsByAttestorRequest";
    value: QueryAttestationsByAttestorRequestAmino;
}
/**
 * QueryAttestationsByAttestorRequest is the Query/AttestationsByAttestor
 * request type.
 */
export interface QueryAttestationsByAttestorRequestSDKType {
    attestor: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryAttestationsByAttestorResponse is the Query/AttestationsByAttestor
 * response type.
 */
export interface QueryAttestationsByAttestorResponse {
    /** attestations are the attestations by the attestor. */
    attestations: AttestationInfo[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponse;
}
export interface QueryAttestationsByAttestorResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestationsByAttestorResponse";
    value: Uint8Array;
}
/**
 * QueryAttestationsByAttestorResponse is the Query/AttestationsByAttestor
 * response type.
 */
export interface QueryAttestationsByAttestorResponseAmino {
    /** attestations are the attestations by the attestor. */
    attestations?: AttestationInfoAmino[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponseAmino;
}
export interface QueryAttestationsByAttestorResponseAminoMsg {
    type: "/regen.data.v1.QueryAttestationsByAttestorResponse";
    value: QueryAttestationsByAttestorResponseAmino;
}
/**
 * QueryAttestationsByAttestorResponse is the Query/AttestationsByAttestor
 * response type.
 */
export interface QueryAttestationsByAttestorResponseSDKType {
    attestations: AttestationInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */
export interface QueryAttestationsByIRIRequest {
    /** iri is the IRI of the anchored data. */
    iri: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryAttestationsByIRIRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestationsByIRIRequest";
    value: Uint8Array;
}
/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */
export interface QueryAttestationsByIRIRequestAmino {
    /** iri is the IRI of the anchored data. */
    iri?: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryAttestationsByIRIRequestAminoMsg {
    type: "/regen.data.v1.QueryAttestationsByIRIRequest";
    value: QueryAttestationsByIRIRequestAmino;
}
/** QueryAttestationsByIRIRequest is the Query/AttestationsByIRI request type. */
export interface QueryAttestationsByIRIRequestSDKType {
    iri: string;
    pagination?: PageRequestSDKType;
}
/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */
export interface QueryAttestationsByIRIResponse {
    /** attestations are the attestations that have been made to the anchored data. */
    attestations: AttestationInfo[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponse;
}
export interface QueryAttestationsByIRIResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestationsByIRIResponse";
    value: Uint8Array;
}
/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */
export interface QueryAttestationsByIRIResponseAmino {
    /** attestations are the attestations that have been made to the anchored data. */
    attestations?: AttestationInfoAmino[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponseAmino;
}
export interface QueryAttestationsByIRIResponseAminoMsg {
    type: "/regen.data.v1.QueryAttestationsByIRIResponse";
    value: QueryAttestationsByIRIResponseAmino;
}
/** QueryAttestationsByIRIResponse is the Query/AttestationsByIRI response type. */
export interface QueryAttestationsByIRIResponseSDKType {
    attestations: AttestationInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */
export interface QueryAttestationsByHashRequest {
    /** content_hash is the ContentHash of the anchored data. */
    contentHash?: ContentHash;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryAttestationsByHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestationsByHashRequest";
    value: Uint8Array;
}
/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */
export interface QueryAttestationsByHashRequestAmino {
    /** content_hash is the ContentHash of the anchored data. */
    content_hash?: ContentHashAmino;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryAttestationsByHashRequestAminoMsg {
    type: "/regen.data.v1.QueryAttestationsByHashRequest";
    value: QueryAttestationsByHashRequestAmino;
}
/** QueryAttestationsByHashRequest is the Query/AttestationsByHash request type. */
export interface QueryAttestationsByHashRequestSDKType {
    content_hash?: ContentHashSDKType;
    pagination?: PageRequestSDKType;
}
/**
 * QueryAttestationsByHashResponse is the Query/AttestationsByHash response
 * type.
 */
export interface QueryAttestationsByHashResponse {
    /** attestations are the attestations that have been made to the anchored data. */
    attestations: AttestationInfo[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponse;
}
export interface QueryAttestationsByHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryAttestationsByHashResponse";
    value: Uint8Array;
}
/**
 * QueryAttestationsByHashResponse is the Query/AttestationsByHash response
 * type.
 */
export interface QueryAttestationsByHashResponseAmino {
    /** attestations are the attestations that have been made to the anchored data. */
    attestations?: AttestationInfoAmino[];
    /** pagination is the pagination PageResponse. */
    pagination?: PageResponseAmino;
}
export interface QueryAttestationsByHashResponseAminoMsg {
    type: "/regen.data.v1.QueryAttestationsByHashResponse";
    value: QueryAttestationsByHashResponseAmino;
}
/**
 * QueryAttestationsByHashResponse is the Query/AttestationsByHash response
 * type.
 */
export interface QueryAttestationsByHashResponseSDKType {
    attestations: AttestationInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryResolverRequest is the Query/Resolver request type. */
export interface QueryResolverRequest {
    /** id is the ID of the resolver. */
    id: bigint;
}
export interface QueryResolverRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolverRequest";
    value: Uint8Array;
}
/** QueryResolverRequest is the Query/Resolver request type. */
export interface QueryResolverRequestAmino {
    /** id is the ID of the resolver. */
    id?: string;
}
export interface QueryResolverRequestAminoMsg {
    type: "/regen.data.v1.QueryResolverRequest";
    value: QueryResolverRequestAmino;
}
/** QueryResolverRequest is the Query/Resolver request type. */
export interface QueryResolverRequestSDKType {
    id: bigint;
}
/** QueryResolverResponse is the Query/Resolver response type. */
export interface QueryResolverResponse {
    /** resolver is information about the resolver. */
    resolver?: ResolverInfo;
}
export interface QueryResolverResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolverResponse";
    value: Uint8Array;
}
/** QueryResolverResponse is the Query/Resolver response type. */
export interface QueryResolverResponseAmino {
    /** resolver is information about the resolver. */
    resolver?: ResolverInfoAmino;
}
export interface QueryResolverResponseAminoMsg {
    type: "/regen.data.v1.QueryResolverResponse";
    value: QueryResolverResponseAmino;
}
/** QueryResolverResponse is the Query/Resolver response type. */
export interface QueryResolverResponseSDKType {
    resolver?: ResolverInfoSDKType;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequest {
    /** iri is the IRI of the anchored data. */
    iri: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryResolversByIRIRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByIRIRequest";
    value: Uint8Array;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequestAmino {
    /** iri is the IRI of the anchored data. */
    iri?: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryResolversByIRIRequestAminoMsg {
    type: "/regen.data.v1.QueryResolversByIRIRequest";
    value: QueryResolversByIRIRequestAmino;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequestSDKType {
    iri: string;
    pagination?: PageRequestSDKType;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponse {
    /** resolvers are the resolvers that have registered the anchored data. */
    resolvers: ResolverInfo[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponse;
}
export interface QueryResolversByIRIResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByIRIResponse";
    value: Uint8Array;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponseAmino {
    /** resolvers are the resolvers that have registered the anchored data. */
    resolvers?: ResolverInfoAmino[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponseAmino;
}
export interface QueryResolversByIRIResponseAminoMsg {
    type: "/regen.data.v1.QueryResolversByIRIResponse";
    value: QueryResolversByIRIResponseAmino;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponseSDKType {
    resolvers: ResolverInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequest {
    /** content_hash is the ContentHash of the anchored data. */
    contentHash?: ContentHash;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryResolversByHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByHashRequest";
    value: Uint8Array;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequestAmino {
    /** content_hash is the ContentHash of the anchored data. */
    content_hash?: ContentHashAmino;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryResolversByHashRequestAminoMsg {
    type: "/regen.data.v1.QueryResolversByHashRequest";
    value: QueryResolversByHashRequestAmino;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequestSDKType {
    content_hash?: ContentHashSDKType;
    pagination?: PageRequestSDKType;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponse {
    /** resolvers are the resolvers that have registered the data. */
    resolvers: ResolverInfo[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponse;
}
export interface QueryResolversByHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByHashResponse";
    value: Uint8Array;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponseAmino {
    /** resolvers are the resolvers that have registered the data. */
    resolvers?: ResolverInfoAmino[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponseAmino;
}
export interface QueryResolversByHashResponseAminoMsg {
    type: "/regen.data.v1.QueryResolversByHashResponse";
    value: QueryResolversByHashResponseAmino;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponseSDKType {
    resolvers: ResolverInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */
export interface QueryResolversByURLRequest {
    /** url is the URL of the resolver. */
    url: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequest;
}
export interface QueryResolversByURLRequestProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByURLRequest";
    value: Uint8Array;
}
/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */
export interface QueryResolversByURLRequestAmino {
    /** url is the URL of the resolver. */
    url?: string;
    /** pagination is the PageRequest to use for pagination. */
    pagination?: PageRequestAmino;
}
export interface QueryResolversByURLRequestAminoMsg {
    type: "/regen.data.v1.QueryResolversByURLRequest";
    value: QueryResolversByURLRequestAmino;
}
/** QueryResolversByURLRequest is the Query/ResolversByURL request type. */
export interface QueryResolversByURLRequestSDKType {
    url: string;
    pagination?: PageRequestSDKType;
}
/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */
export interface QueryResolversByURLResponse {
    /** resolvers are the resolvers that have a matching URL. */
    resolvers: ResolverInfo[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponse;
}
export interface QueryResolversByURLResponseProtoMsg {
    typeUrl: "/regen.data.v1.QueryResolversByURLResponse";
    value: Uint8Array;
}
/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */
export interface QueryResolversByURLResponseAmino {
    /** resolvers are the resolvers that have a matching URL. */
    resolvers?: ResolverInfoAmino[];
    /** pagination is the PageResponse to use for pagination. */
    pagination?: PageResponseAmino;
}
export interface QueryResolversByURLResponseAminoMsg {
    type: "/regen.data.v1.QueryResolversByURLResponse";
    value: QueryResolversByURLResponseAmino;
}
/** QueryResolversByURLResponse is the Query/ResolversByURL response type. */
export interface QueryResolversByURLResponseSDKType {
    resolvers: ResolverInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */
export interface ConvertIRIToHashRequest {
    /** iri is the IRI to convert to a ContentHash. */
    iri: string;
}
export interface ConvertIRIToHashRequestProtoMsg {
    typeUrl: "/regen.data.v1.ConvertIRIToHashRequest";
    value: Uint8Array;
}
/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */
export interface ConvertIRIToHashRequestAmino {
    /** iri is the IRI to convert to a ContentHash. */
    iri?: string;
}
export interface ConvertIRIToHashRequestAminoMsg {
    type: "/regen.data.v1.ConvertIRIToHashRequest";
    value: ConvertIRIToHashRequestAmino;
}
/** ConvertIRIToHashRequest is the Query/ConvertIRIToHash request type. */
export interface ConvertIRIToHashRequestSDKType {
    iri: string;
}
/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */
export interface ConvertIRIToHashResponse {
    /** content_hash is the ContentHash converted from the IRI. */
    contentHash?: ContentHash;
}
export interface ConvertIRIToHashResponseProtoMsg {
    typeUrl: "/regen.data.v1.ConvertIRIToHashResponse";
    value: Uint8Array;
}
/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */
export interface ConvertIRIToHashResponseAmino {
    /** content_hash is the ContentHash converted from the IRI. */
    content_hash?: ContentHashAmino;
}
export interface ConvertIRIToHashResponseAminoMsg {
    type: "/regen.data.v1.ConvertIRIToHashResponse";
    value: ConvertIRIToHashResponseAmino;
}
/** ConvertIRIToHashResponse is the Query/ConvertIRIToHash response type. */
export interface ConvertIRIToHashResponseSDKType {
    content_hash?: ContentHashSDKType;
}
/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */
export interface ConvertHashToIRIRequest {
    /** content_hash is the ContentHash to convert to an IRI. */
    contentHash?: ContentHash;
}
export interface ConvertHashToIRIRequestProtoMsg {
    typeUrl: "/regen.data.v1.ConvertHashToIRIRequest";
    value: Uint8Array;
}
/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */
export interface ConvertHashToIRIRequestAmino {
    /** content_hash is the ContentHash to convert to an IRI. */
    content_hash?: ContentHashAmino;
}
export interface ConvertHashToIRIRequestAminoMsg {
    type: "/regen.data.v1.ConvertHashToIRIRequest";
    value: ConvertHashToIRIRequestAmino;
}
/** ConvertHashToIRIRequest is the Query/ConvertHashToIRI request type. */
export interface ConvertHashToIRIRequestSDKType {
    content_hash?: ContentHashSDKType;
}
/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */
export interface ConvertHashToIRIResponse {
    /** iri is the IRI converted from the ContentHash. */
    iri: string;
}
export interface ConvertHashToIRIResponseProtoMsg {
    typeUrl: "/regen.data.v1.ConvertHashToIRIResponse";
    value: Uint8Array;
}
/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */
export interface ConvertHashToIRIResponseAmino {
    /** iri is the IRI converted from the ContentHash. */
    iri?: string;
}
export interface ConvertHashToIRIResponseAminoMsg {
    type: "/regen.data.v1.ConvertHashToIRIResponse";
    value: ConvertHashToIRIResponseAmino;
}
/** ConvertHashToIRIResponse is the Query/ConvertHashToIRI response type. */
export interface ConvertHashToIRIResponseSDKType {
    iri: string;
}
/** AnchorInfo is the information for a data anchor. */
export interface AnchorInfo {
    /** iri is the IRI of the anchored data. */
    iri: string;
    /** content_hash is the ContentHash of the anchored data. */
    contentHash?: ContentHash;
    /** timestamp is the time at which the data was anchored. */
    timestamp?: Timestamp;
}
export interface AnchorInfoProtoMsg {
    typeUrl: "/regen.data.v1.AnchorInfo";
    value: Uint8Array;
}
/** AnchorInfo is the information for a data anchor. */
export interface AnchorInfoAmino {
    /** iri is the IRI of the anchored data. */
    iri?: string;
    /** content_hash is the ContentHash of the anchored data. */
    content_hash?: ContentHashAmino;
    /** timestamp is the time at which the data was anchored. */
    timestamp?: string;
}
export interface AnchorInfoAminoMsg {
    type: "/regen.data.v1.AnchorInfo";
    value: AnchorInfoAmino;
}
/** AnchorInfo is the information for a data anchor. */
export interface AnchorInfoSDKType {
    iri: string;
    content_hash?: ContentHashSDKType;
    timestamp?: TimestampSDKType;
}
/** AttestationInfo is the information for an attestation. */
export interface AttestationInfo {
    /** iri is the IRI of the anchored data. */
    iri: string;
    /** attestor is the address of the account that attested to the anchored data. */
    attestor: string;
    /** timestamp is the time at which the data was attested to. */
    timestamp?: Timestamp;
}
export interface AttestationInfoProtoMsg {
    typeUrl: "/regen.data.v1.AttestationInfo";
    value: Uint8Array;
}
/** AttestationInfo is the information for an attestation. */
export interface AttestationInfoAmino {
    /** iri is the IRI of the anchored data. */
    iri?: string;
    /** attestor is the address of the account that attested to the anchored data. */
    attestor?: string;
    /** timestamp is the time at which the data was attested to. */
    timestamp?: string;
}
export interface AttestationInfoAminoMsg {
    type: "/regen.data.v1.AttestationInfo";
    value: AttestationInfoAmino;
}
/** AttestationInfo is the information for an attestation. */
export interface AttestationInfoSDKType {
    iri: string;
    attestor: string;
    timestamp?: TimestampSDKType;
}
/** ResolverInfo is the information for a resolver. */
export interface ResolverInfo {
    /** id is the ID of the resolver. */
    id: bigint;
    /** url is the URL of the resolver. */
    url: string;
    /** manager is the address of the account that manages the resolver. */
    manager: string;
}
export interface ResolverInfoProtoMsg {
    typeUrl: "/regen.data.v1.ResolverInfo";
    value: Uint8Array;
}
/** ResolverInfo is the information for a resolver. */
export interface ResolverInfoAmino {
    /** id is the ID of the resolver. */
    id?: string;
    /** url is the URL of the resolver. */
    url?: string;
    /** manager is the address of the account that manages the resolver. */
    manager?: string;
}
export interface ResolverInfoAminoMsg {
    type: "/regen.data.v1.ResolverInfo";
    value: ResolverInfoAmino;
}
/** ResolverInfo is the information for a resolver. */
export interface ResolverInfoSDKType {
    id: bigint;
    url: string;
    manager: string;
}
export declare const QueryAnchorByIRIRequest: {
    typeUrl: string;
    encode(message: QueryAnchorByIRIRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAnchorByIRIRequest;
    fromPartial(object: Partial<QueryAnchorByIRIRequest>): QueryAnchorByIRIRequest;
    fromAmino(object: QueryAnchorByIRIRequestAmino): QueryAnchorByIRIRequest;
    toAmino(message: QueryAnchorByIRIRequest): QueryAnchorByIRIRequestAmino;
    fromAminoMsg(object: QueryAnchorByIRIRequestAminoMsg): QueryAnchorByIRIRequest;
    fromProtoMsg(message: QueryAnchorByIRIRequestProtoMsg): QueryAnchorByIRIRequest;
    toProto(message: QueryAnchorByIRIRequest): Uint8Array;
    toProtoMsg(message: QueryAnchorByIRIRequest): QueryAnchorByIRIRequestProtoMsg;
};
export declare const QueryAnchorByIRIResponse: {
    typeUrl: string;
    encode(message: QueryAnchorByIRIResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAnchorByIRIResponse;
    fromPartial(object: Partial<QueryAnchorByIRIResponse>): QueryAnchorByIRIResponse;
    fromAmino(object: QueryAnchorByIRIResponseAmino): QueryAnchorByIRIResponse;
    toAmino(message: QueryAnchorByIRIResponse): QueryAnchorByIRIResponseAmino;
    fromAminoMsg(object: QueryAnchorByIRIResponseAminoMsg): QueryAnchorByIRIResponse;
    fromProtoMsg(message: QueryAnchorByIRIResponseProtoMsg): QueryAnchorByIRIResponse;
    toProto(message: QueryAnchorByIRIResponse): Uint8Array;
    toProtoMsg(message: QueryAnchorByIRIResponse): QueryAnchorByIRIResponseProtoMsg;
};
export declare const QueryAnchorByHashRequest: {
    typeUrl: string;
    encode(message: QueryAnchorByHashRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAnchorByHashRequest;
    fromPartial(object: Partial<QueryAnchorByHashRequest>): QueryAnchorByHashRequest;
    fromAmino(object: QueryAnchorByHashRequestAmino): QueryAnchorByHashRequest;
    toAmino(message: QueryAnchorByHashRequest): QueryAnchorByHashRequestAmino;
    fromAminoMsg(object: QueryAnchorByHashRequestAminoMsg): QueryAnchorByHashRequest;
    fromProtoMsg(message: QueryAnchorByHashRequestProtoMsg): QueryAnchorByHashRequest;
    toProto(message: QueryAnchorByHashRequest): Uint8Array;
    toProtoMsg(message: QueryAnchorByHashRequest): QueryAnchorByHashRequestProtoMsg;
};
export declare const QueryAnchorByHashResponse: {
    typeUrl: string;
    encode(message: QueryAnchorByHashResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAnchorByHashResponse;
    fromPartial(object: Partial<QueryAnchorByHashResponse>): QueryAnchorByHashResponse;
    fromAmino(object: QueryAnchorByHashResponseAmino): QueryAnchorByHashResponse;
    toAmino(message: QueryAnchorByHashResponse): QueryAnchorByHashResponseAmino;
    fromAminoMsg(object: QueryAnchorByHashResponseAminoMsg): QueryAnchorByHashResponse;
    fromProtoMsg(message: QueryAnchorByHashResponseProtoMsg): QueryAnchorByHashResponse;
    toProto(message: QueryAnchorByHashResponse): Uint8Array;
    toProtoMsg(message: QueryAnchorByHashResponse): QueryAnchorByHashResponseProtoMsg;
};
export declare const QueryAttestationsByAttestorRequest: {
    typeUrl: string;
    encode(message: QueryAttestationsByAttestorRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationsByAttestorRequest;
    fromPartial(object: Partial<QueryAttestationsByAttestorRequest>): QueryAttestationsByAttestorRequest;
    fromAmino(object: QueryAttestationsByAttestorRequestAmino): QueryAttestationsByAttestorRequest;
    toAmino(message: QueryAttestationsByAttestorRequest): QueryAttestationsByAttestorRequestAmino;
    fromAminoMsg(object: QueryAttestationsByAttestorRequestAminoMsg): QueryAttestationsByAttestorRequest;
    fromProtoMsg(message: QueryAttestationsByAttestorRequestProtoMsg): QueryAttestationsByAttestorRequest;
    toProto(message: QueryAttestationsByAttestorRequest): Uint8Array;
    toProtoMsg(message: QueryAttestationsByAttestorRequest): QueryAttestationsByAttestorRequestProtoMsg;
};
export declare const QueryAttestationsByAttestorResponse: {
    typeUrl: string;
    encode(message: QueryAttestationsByAttestorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationsByAttestorResponse;
    fromPartial(object: Partial<QueryAttestationsByAttestorResponse>): QueryAttestationsByAttestorResponse;
    fromAmino(object: QueryAttestationsByAttestorResponseAmino): QueryAttestationsByAttestorResponse;
    toAmino(message: QueryAttestationsByAttestorResponse): QueryAttestationsByAttestorResponseAmino;
    fromAminoMsg(object: QueryAttestationsByAttestorResponseAminoMsg): QueryAttestationsByAttestorResponse;
    fromProtoMsg(message: QueryAttestationsByAttestorResponseProtoMsg): QueryAttestationsByAttestorResponse;
    toProto(message: QueryAttestationsByAttestorResponse): Uint8Array;
    toProtoMsg(message: QueryAttestationsByAttestorResponse): QueryAttestationsByAttestorResponseProtoMsg;
};
export declare const QueryAttestationsByIRIRequest: {
    typeUrl: string;
    encode(message: QueryAttestationsByIRIRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationsByIRIRequest;
    fromPartial(object: Partial<QueryAttestationsByIRIRequest>): QueryAttestationsByIRIRequest;
    fromAmino(object: QueryAttestationsByIRIRequestAmino): QueryAttestationsByIRIRequest;
    toAmino(message: QueryAttestationsByIRIRequest): QueryAttestationsByIRIRequestAmino;
    fromAminoMsg(object: QueryAttestationsByIRIRequestAminoMsg): QueryAttestationsByIRIRequest;
    fromProtoMsg(message: QueryAttestationsByIRIRequestProtoMsg): QueryAttestationsByIRIRequest;
    toProto(message: QueryAttestationsByIRIRequest): Uint8Array;
    toProtoMsg(message: QueryAttestationsByIRIRequest): QueryAttestationsByIRIRequestProtoMsg;
};
export declare const QueryAttestationsByIRIResponse: {
    typeUrl: string;
    encode(message: QueryAttestationsByIRIResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationsByIRIResponse;
    fromPartial(object: Partial<QueryAttestationsByIRIResponse>): QueryAttestationsByIRIResponse;
    fromAmino(object: QueryAttestationsByIRIResponseAmino): QueryAttestationsByIRIResponse;
    toAmino(message: QueryAttestationsByIRIResponse): QueryAttestationsByIRIResponseAmino;
    fromAminoMsg(object: QueryAttestationsByIRIResponseAminoMsg): QueryAttestationsByIRIResponse;
    fromProtoMsg(message: QueryAttestationsByIRIResponseProtoMsg): QueryAttestationsByIRIResponse;
    toProto(message: QueryAttestationsByIRIResponse): Uint8Array;
    toProtoMsg(message: QueryAttestationsByIRIResponse): QueryAttestationsByIRIResponseProtoMsg;
};
export declare const QueryAttestationsByHashRequest: {
    typeUrl: string;
    encode(message: QueryAttestationsByHashRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationsByHashRequest;
    fromPartial(object: Partial<QueryAttestationsByHashRequest>): QueryAttestationsByHashRequest;
    fromAmino(object: QueryAttestationsByHashRequestAmino): QueryAttestationsByHashRequest;
    toAmino(message: QueryAttestationsByHashRequest): QueryAttestationsByHashRequestAmino;
    fromAminoMsg(object: QueryAttestationsByHashRequestAminoMsg): QueryAttestationsByHashRequest;
    fromProtoMsg(message: QueryAttestationsByHashRequestProtoMsg): QueryAttestationsByHashRequest;
    toProto(message: QueryAttestationsByHashRequest): Uint8Array;
    toProtoMsg(message: QueryAttestationsByHashRequest): QueryAttestationsByHashRequestProtoMsg;
};
export declare const QueryAttestationsByHashResponse: {
    typeUrl: string;
    encode(message: QueryAttestationsByHashResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationsByHashResponse;
    fromPartial(object: Partial<QueryAttestationsByHashResponse>): QueryAttestationsByHashResponse;
    fromAmino(object: QueryAttestationsByHashResponseAmino): QueryAttestationsByHashResponse;
    toAmino(message: QueryAttestationsByHashResponse): QueryAttestationsByHashResponseAmino;
    fromAminoMsg(object: QueryAttestationsByHashResponseAminoMsg): QueryAttestationsByHashResponse;
    fromProtoMsg(message: QueryAttestationsByHashResponseProtoMsg): QueryAttestationsByHashResponse;
    toProto(message: QueryAttestationsByHashResponse): Uint8Array;
    toProtoMsg(message: QueryAttestationsByHashResponse): QueryAttestationsByHashResponseProtoMsg;
};
export declare const QueryResolverRequest: {
    typeUrl: string;
    encode(message: QueryResolverRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResolverRequest;
    fromPartial(object: Partial<QueryResolverRequest>): QueryResolverRequest;
    fromAmino(object: QueryResolverRequestAmino): QueryResolverRequest;
    toAmino(message: QueryResolverRequest): QueryResolverRequestAmino;
    fromAminoMsg(object: QueryResolverRequestAminoMsg): QueryResolverRequest;
    fromProtoMsg(message: QueryResolverRequestProtoMsg): QueryResolverRequest;
    toProto(message: QueryResolverRequest): Uint8Array;
    toProtoMsg(message: QueryResolverRequest): QueryResolverRequestProtoMsg;
};
export declare const QueryResolverResponse: {
    typeUrl: string;
    encode(message: QueryResolverResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResolverResponse;
    fromPartial(object: Partial<QueryResolverResponse>): QueryResolverResponse;
    fromAmino(object: QueryResolverResponseAmino): QueryResolverResponse;
    toAmino(message: QueryResolverResponse): QueryResolverResponseAmino;
    fromAminoMsg(object: QueryResolverResponseAminoMsg): QueryResolverResponse;
    fromProtoMsg(message: QueryResolverResponseProtoMsg): QueryResolverResponse;
    toProto(message: QueryResolverResponse): Uint8Array;
    toProtoMsg(message: QueryResolverResponse): QueryResolverResponseProtoMsg;
};
export declare const QueryResolversByIRIRequest: {
    typeUrl: string;
    encode(message: QueryResolversByIRIRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResolversByIRIRequest;
    fromPartial(object: Partial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest;
    fromAmino(object: QueryResolversByIRIRequestAmino): QueryResolversByIRIRequest;
    toAmino(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestAmino;
    fromAminoMsg(object: QueryResolversByIRIRequestAminoMsg): QueryResolversByIRIRequest;
    fromProtoMsg(message: QueryResolversByIRIRequestProtoMsg): QueryResolversByIRIRequest;
    toProto(message: QueryResolversByIRIRequest): Uint8Array;
    toProtoMsg(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestProtoMsg;
};
export declare const QueryResolversByIRIResponse: {
    typeUrl: string;
    encode(message: QueryResolversByIRIResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResolversByIRIResponse;
    fromPartial(object: Partial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse;
    fromAmino(object: QueryResolversByIRIResponseAmino): QueryResolversByIRIResponse;
    toAmino(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseAmino;
    fromAminoMsg(object: QueryResolversByIRIResponseAminoMsg): QueryResolversByIRIResponse;
    fromProtoMsg(message: QueryResolversByIRIResponseProtoMsg): QueryResolversByIRIResponse;
    toProto(message: QueryResolversByIRIResponse): Uint8Array;
    toProtoMsg(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseProtoMsg;
};
export declare const QueryResolversByHashRequest: {
    typeUrl: string;
    encode(message: QueryResolversByHashRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResolversByHashRequest;
    fromPartial(object: Partial<QueryResolversByHashRequest>): QueryResolversByHashRequest;
    fromAmino(object: QueryResolversByHashRequestAmino): QueryResolversByHashRequest;
    toAmino(message: QueryResolversByHashRequest): QueryResolversByHashRequestAmino;
    fromAminoMsg(object: QueryResolversByHashRequestAminoMsg): QueryResolversByHashRequest;
    fromProtoMsg(message: QueryResolversByHashRequestProtoMsg): QueryResolversByHashRequest;
    toProto(message: QueryResolversByHashRequest): Uint8Array;
    toProtoMsg(message: QueryResolversByHashRequest): QueryResolversByHashRequestProtoMsg;
};
export declare const QueryResolversByHashResponse: {
    typeUrl: string;
    encode(message: QueryResolversByHashResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResolversByHashResponse;
    fromPartial(object: Partial<QueryResolversByHashResponse>): QueryResolversByHashResponse;
    fromAmino(object: QueryResolversByHashResponseAmino): QueryResolversByHashResponse;
    toAmino(message: QueryResolversByHashResponse): QueryResolversByHashResponseAmino;
    fromAminoMsg(object: QueryResolversByHashResponseAminoMsg): QueryResolversByHashResponse;
    fromProtoMsg(message: QueryResolversByHashResponseProtoMsg): QueryResolversByHashResponse;
    toProto(message: QueryResolversByHashResponse): Uint8Array;
    toProtoMsg(message: QueryResolversByHashResponse): QueryResolversByHashResponseProtoMsg;
};
export declare const QueryResolversByURLRequest: {
    typeUrl: string;
    encode(message: QueryResolversByURLRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResolversByURLRequest;
    fromPartial(object: Partial<QueryResolversByURLRequest>): QueryResolversByURLRequest;
    fromAmino(object: QueryResolversByURLRequestAmino): QueryResolversByURLRequest;
    toAmino(message: QueryResolversByURLRequest): QueryResolversByURLRequestAmino;
    fromAminoMsg(object: QueryResolversByURLRequestAminoMsg): QueryResolversByURLRequest;
    fromProtoMsg(message: QueryResolversByURLRequestProtoMsg): QueryResolversByURLRequest;
    toProto(message: QueryResolversByURLRequest): Uint8Array;
    toProtoMsg(message: QueryResolversByURLRequest): QueryResolversByURLRequestProtoMsg;
};
export declare const QueryResolversByURLResponse: {
    typeUrl: string;
    encode(message: QueryResolversByURLResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResolversByURLResponse;
    fromPartial(object: Partial<QueryResolversByURLResponse>): QueryResolversByURLResponse;
    fromAmino(object: QueryResolversByURLResponseAmino): QueryResolversByURLResponse;
    toAmino(message: QueryResolversByURLResponse): QueryResolversByURLResponseAmino;
    fromAminoMsg(object: QueryResolversByURLResponseAminoMsg): QueryResolversByURLResponse;
    fromProtoMsg(message: QueryResolversByURLResponseProtoMsg): QueryResolversByURLResponse;
    toProto(message: QueryResolversByURLResponse): Uint8Array;
    toProtoMsg(message: QueryResolversByURLResponse): QueryResolversByURLResponseProtoMsg;
};
export declare const ConvertIRIToHashRequest: {
    typeUrl: string;
    encode(message: ConvertIRIToHashRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConvertIRIToHashRequest;
    fromPartial(object: Partial<ConvertIRIToHashRequest>): ConvertIRIToHashRequest;
    fromAmino(object: ConvertIRIToHashRequestAmino): ConvertIRIToHashRequest;
    toAmino(message: ConvertIRIToHashRequest): ConvertIRIToHashRequestAmino;
    fromAminoMsg(object: ConvertIRIToHashRequestAminoMsg): ConvertIRIToHashRequest;
    fromProtoMsg(message: ConvertIRIToHashRequestProtoMsg): ConvertIRIToHashRequest;
    toProto(message: ConvertIRIToHashRequest): Uint8Array;
    toProtoMsg(message: ConvertIRIToHashRequest): ConvertIRIToHashRequestProtoMsg;
};
export declare const ConvertIRIToHashResponse: {
    typeUrl: string;
    encode(message: ConvertIRIToHashResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConvertIRIToHashResponse;
    fromPartial(object: Partial<ConvertIRIToHashResponse>): ConvertIRIToHashResponse;
    fromAmino(object: ConvertIRIToHashResponseAmino): ConvertIRIToHashResponse;
    toAmino(message: ConvertIRIToHashResponse): ConvertIRIToHashResponseAmino;
    fromAminoMsg(object: ConvertIRIToHashResponseAminoMsg): ConvertIRIToHashResponse;
    fromProtoMsg(message: ConvertIRIToHashResponseProtoMsg): ConvertIRIToHashResponse;
    toProto(message: ConvertIRIToHashResponse): Uint8Array;
    toProtoMsg(message: ConvertIRIToHashResponse): ConvertIRIToHashResponseProtoMsg;
};
export declare const ConvertHashToIRIRequest: {
    typeUrl: string;
    encode(message: ConvertHashToIRIRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConvertHashToIRIRequest;
    fromPartial(object: Partial<ConvertHashToIRIRequest>): ConvertHashToIRIRequest;
    fromAmino(object: ConvertHashToIRIRequestAmino): ConvertHashToIRIRequest;
    toAmino(message: ConvertHashToIRIRequest): ConvertHashToIRIRequestAmino;
    fromAminoMsg(object: ConvertHashToIRIRequestAminoMsg): ConvertHashToIRIRequest;
    fromProtoMsg(message: ConvertHashToIRIRequestProtoMsg): ConvertHashToIRIRequest;
    toProto(message: ConvertHashToIRIRequest): Uint8Array;
    toProtoMsg(message: ConvertHashToIRIRequest): ConvertHashToIRIRequestProtoMsg;
};
export declare const ConvertHashToIRIResponse: {
    typeUrl: string;
    encode(message: ConvertHashToIRIResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConvertHashToIRIResponse;
    fromPartial(object: Partial<ConvertHashToIRIResponse>): ConvertHashToIRIResponse;
    fromAmino(object: ConvertHashToIRIResponseAmino): ConvertHashToIRIResponse;
    toAmino(message: ConvertHashToIRIResponse): ConvertHashToIRIResponseAmino;
    fromAminoMsg(object: ConvertHashToIRIResponseAminoMsg): ConvertHashToIRIResponse;
    fromProtoMsg(message: ConvertHashToIRIResponseProtoMsg): ConvertHashToIRIResponse;
    toProto(message: ConvertHashToIRIResponse): Uint8Array;
    toProtoMsg(message: ConvertHashToIRIResponse): ConvertHashToIRIResponseProtoMsg;
};
export declare const AnchorInfo: {
    typeUrl: string;
    encode(message: AnchorInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AnchorInfo;
    fromPartial(object: Partial<AnchorInfo>): AnchorInfo;
    fromAmino(object: AnchorInfoAmino): AnchorInfo;
    toAmino(message: AnchorInfo): AnchorInfoAmino;
    fromAminoMsg(object: AnchorInfoAminoMsg): AnchorInfo;
    fromProtoMsg(message: AnchorInfoProtoMsg): AnchorInfo;
    toProto(message: AnchorInfo): Uint8Array;
    toProtoMsg(message: AnchorInfo): AnchorInfoProtoMsg;
};
export declare const AttestationInfo: {
    typeUrl: string;
    encode(message: AttestationInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AttestationInfo;
    fromPartial(object: Partial<AttestationInfo>): AttestationInfo;
    fromAmino(object: AttestationInfoAmino): AttestationInfo;
    toAmino(message: AttestationInfo): AttestationInfoAmino;
    fromAminoMsg(object: AttestationInfoAminoMsg): AttestationInfo;
    fromProtoMsg(message: AttestationInfoProtoMsg): AttestationInfo;
    toProto(message: AttestationInfo): Uint8Array;
    toProtoMsg(message: AttestationInfo): AttestationInfoProtoMsg;
};
export declare const ResolverInfo: {
    typeUrl: string;
    encode(message: ResolverInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ResolverInfo;
    fromPartial(object: Partial<ResolverInfo>): ResolverInfo;
    fromAmino(object: ResolverInfoAmino): ResolverInfo;
    toAmino(message: ResolverInfo): ResolverInfoAmino;
    fromAminoMsg(object: ResolverInfoAminoMsg): ResolverInfo;
    fromProtoMsg(message: ResolverInfoProtoMsg): ResolverInfo;
    toProto(message: ResolverInfo): Uint8Array;
    toProtoMsg(message: ResolverInfo): ResolverInfoProtoMsg;
};
