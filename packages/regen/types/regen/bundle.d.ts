import * as _0 from "./data/v1/events";
import * as _1 from "./data/v1/query";
import * as _2 from "./data/v1/state";
import * as _3 from "./data/v1/tx";
import * as _4 from "./data/v1/types";
import * as _5 from "./ecocredit/basket/v1/events";
import * as _6 from "./ecocredit/basket/v1/query";
import * as _7 from "./ecocredit/basket/v1/state";
import * as _8 from "./ecocredit/basket/v1/tx";
import * as _9 from "./ecocredit/basket/v1/types";
import * as _10 from "./ecocredit/marketplace/v1/events";
import * as _11 from "./ecocredit/marketplace/v1/query";
import * as _12 from "./ecocredit/marketplace/v1/state";
import * as _13 from "./ecocredit/marketplace/v1/tx";
import * as _14 from "./ecocredit/marketplace/v1/types";
import * as _15 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _16 from "./ecocredit/v1/events";
import * as _17 from "./ecocredit/v1/query";
import * as _18 from "./ecocredit/v1/state";
import * as _19 from "./ecocredit/v1/tx";
import * as _20 from "./ecocredit/v1/types";
import * as _21 from "./ecocredit/v1alpha1/events";
import * as _22 from "./ecocredit/v1alpha1/genesis";
import * as _23 from "./ecocredit/v1alpha1/query";
import * as _24 from "./ecocredit/v1alpha1/tx";
import * as _25 from "./ecocredit/v1alpha1/types";
import * as _26 from "./group/v1alpha1/events";
import * as _27 from "./group/v1alpha1/genesis";
import * as _28 from "./group/v1alpha1/query";
import * as _29 from "./group/v1alpha1/tx";
import * as _30 from "./group/v1alpha1/types";
import * as _31 from "./intertx/v1/query";
import * as _32 from "./intertx/v1/tx";
import * as _163 from "./data/v1/query.lcd";
import * as _164 from "./ecocredit/basket/v1/query.lcd";
import * as _165 from "./ecocredit/marketplace/v1/query.lcd";
import * as _166 from "./ecocredit/v1/query.lcd";
import * as _167 from "./ecocredit/v1alpha1/query.lcd";
import * as _168 from "./group/v1alpha1/query.lcd";
import * as _169 from "./intertx/v1/query.lcd";
import * as _170 from "./data/v1/query.rpc.Query";
import * as _171 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _172 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _173 from "./ecocredit/v1/query.rpc.Query";
import * as _174 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _175 from "./group/v1alpha1/query.rpc.Query";
import * as _176 from "./intertx/v1/query.rpc.Query";
import * as _177 from "./data/v1/tx.rpc.msg";
import * as _178 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _179 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _180 from "./ecocredit/v1/tx.rpc.msg";
import * as _181 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _182 from "./group/v1alpha1/tx.rpc.msg";
import * as _183 from "./intertx/v1/tx.rpc.msg";
export declare namespace regen {
    namespace data {
        const v1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                anchorByIRI(request: _1.QueryAnchorByIRIRequest): Promise<_1.QueryAnchorByIRIResponse>;
                anchorByHash(request: _1.QueryAnchorByHashRequest): Promise<_1.QueryAnchorByHashResponse>;
                attestationsByAttestor(request: _1.QueryAttestationsByAttestorRequest): Promise<_1.QueryAttestationsByAttestorResponse>;
                attestationsByIRI(request: _1.QueryAttestationsByIRIRequest): Promise<_1.QueryAttestationsByIRIResponse>;
                attestationsByHash(request: _1.QueryAttestationsByHashRequest): Promise<_1.QueryAttestationsByHashResponse>;
                resolver(request: _1.QueryResolverRequest): Promise<_1.QueryResolverResponse>;
                resolversByIRI(request: _1.QueryResolversByIRIRequest): Promise<_1.QueryResolversByIRIResponse>;
                resolversByHash(request: _1.QueryResolversByHashRequest): Promise<_1.QueryResolversByHashResponse>;
                resolversByURL(request: _1.QueryResolversByURLRequest): Promise<_1.QueryResolversByURLResponse>;
                convertIRIToHash(request: _1.ConvertIRIToHashRequest): Promise<_1.ConvertIRIToHashResponse>;
                convertHashToIRI(request: _1.ConvertHashToIRIRequest): Promise<_1.ConvertHashToIRIResponse>;
            };
            LCDQueryClient: typeof _163.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _3.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _3.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _3.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _3.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _3.MsgAnchor): {
                        typeUrl: string;
                        value: _3.MsgAnchor;
                    };
                    attest(value: _3.MsgAttest): {
                        typeUrl: string;
                        value: _3.MsgAttest;
                    };
                    defineResolver(value: _3.MsgDefineResolver): {
                        typeUrl: string;
                        value: _3.MsgDefineResolver;
                    };
                    registerResolver(value: _3.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _3.MsgRegisterResolver;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _3.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _3.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _3.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _3.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _3.MsgAnchor): {
                        typeUrl: string;
                        value: _3.MsgAnchor;
                    };
                    attest(value: _3.MsgAttest): {
                        typeUrl: string;
                        value: _3.MsgAttest;
                    };
                    defineResolver(value: _3.MsgDefineResolver): {
                        typeUrl: string;
                        value: _3.MsgDefineResolver;
                    };
                    registerResolver(value: _3.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _3.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: (message: _3.MsgAnchor) => _3.MsgAnchorAmino;
                    fromAmino: (object: _3.MsgAnchorAmino) => _3.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: (message: _3.MsgAttest) => _3.MsgAttestAmino;
                    fromAmino: (object: _3.MsgAttestAmino) => _3.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: (message: _3.MsgDefineResolver) => _3.MsgDefineResolverAmino;
                    fromAmino: (object: _3.MsgDefineResolverAmino) => _3.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: (message: _3.MsgRegisterResolver) => _3.MsgRegisterResolverAmino;
                    fromAmino: (object: _3.MsgRegisterResolverAmino) => _3.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _4.DigestAlgorithm;
            digestAlgorithmToJSON(object: _4.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _4.RawMediaType;
            rawMediaTypeToJSON(object: _4.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _4.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _4.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _4.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _4.GraphMerkleTree): string;
            DigestAlgorithm: typeof _4.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _4.DigestAlgorithm;
            DigestAlgorithmAmino: typeof _4.DigestAlgorithm;
            RawMediaType: typeof _4.RawMediaType;
            RawMediaTypeSDKType: typeof _4.RawMediaType;
            RawMediaTypeAmino: typeof _4.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _4.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _4.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmAmino: typeof _4.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _4.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _4.GraphMerkleTree;
            GraphMerkleTreeAmino: typeof _4.GraphMerkleTree;
            ContentHash: {
                typeUrl: string;
                encode(message: _4.ContentHash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ContentHash;
                fromPartial(object: Partial<_4.ContentHash>): _4.ContentHash;
                fromAmino(object: _4.ContentHashAmino): _4.ContentHash;
                toAmino(message: _4.ContentHash): _4.ContentHashAmino;
                fromAminoMsg(object: _4.ContentHashAminoMsg): _4.ContentHash;
                fromProtoMsg(message: _4.ContentHashProtoMsg): _4.ContentHash;
                toProto(message: _4.ContentHash): Uint8Array;
                toProtoMsg(message: _4.ContentHash): _4.ContentHashProtoMsg;
            };
            ContentHash_Raw: {
                typeUrl: string;
                encode(message: _4.ContentHash_Raw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ContentHash_Raw;
                fromPartial(object: Partial<_4.ContentHash_Raw>): _4.ContentHash_Raw;
                fromAmino(object: _4.ContentHash_RawAmino): _4.ContentHash_Raw;
                toAmino(message: _4.ContentHash_Raw): _4.ContentHash_RawAmino;
                fromAminoMsg(object: _4.ContentHash_RawAminoMsg): _4.ContentHash_Raw;
                fromProtoMsg(message: _4.ContentHash_RawProtoMsg): _4.ContentHash_Raw;
                toProto(message: _4.ContentHash_Raw): Uint8Array;
                toProtoMsg(message: _4.ContentHash_Raw): _4.ContentHash_RawProtoMsg;
            };
            ContentHash_Graph: {
                typeUrl: string;
                encode(message: _4.ContentHash_Graph, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ContentHash_Graph;
                fromPartial(object: Partial<_4.ContentHash_Graph>): _4.ContentHash_Graph;
                fromAmino(object: _4.ContentHash_GraphAmino): _4.ContentHash_Graph;
                toAmino(message: _4.ContentHash_Graph): _4.ContentHash_GraphAmino;
                fromAminoMsg(object: _4.ContentHash_GraphAminoMsg): _4.ContentHash_Graph;
                fromProtoMsg(message: _4.ContentHash_GraphProtoMsg): _4.ContentHash_Graph;
                toProto(message: _4.ContentHash_Graph): Uint8Array;
                toProtoMsg(message: _4.ContentHash_Graph): _4.ContentHash_GraphProtoMsg;
            };
            ContentHashes: {
                typeUrl: string;
                encode(message: _4.ContentHashes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.ContentHashes;
                fromPartial(object: Partial<_4.ContentHashes>): _4.ContentHashes;
                fromAmino(object: _4.ContentHashesAmino): _4.ContentHashes;
                toAmino(message: _4.ContentHashes): _4.ContentHashesAmino;
                fromAminoMsg(object: _4.ContentHashesAminoMsg): _4.ContentHashes;
                fromProtoMsg(message: _4.ContentHashesProtoMsg): _4.ContentHashes;
                toProto(message: _4.ContentHashes): Uint8Array;
                toProtoMsg(message: _4.ContentHashes): _4.ContentHashesProtoMsg;
            };
            MsgAnchor: {
                typeUrl: string;
                encode(message: _3.MsgAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgAnchor;
                fromPartial(object: Partial<_3.MsgAnchor>): _3.MsgAnchor;
                fromAmino(object: _3.MsgAnchorAmino): _3.MsgAnchor;
                toAmino(message: _3.MsgAnchor): _3.MsgAnchorAmino;
                fromAminoMsg(object: _3.MsgAnchorAminoMsg): _3.MsgAnchor;
                fromProtoMsg(message: _3.MsgAnchorProtoMsg): _3.MsgAnchor;
                toProto(message: _3.MsgAnchor): Uint8Array;
                toProtoMsg(message: _3.MsgAnchor): _3.MsgAnchorProtoMsg;
            };
            MsgAnchorResponse: {
                typeUrl: string;
                encode(message: _3.MsgAnchorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgAnchorResponse;
                fromPartial(object: Partial<_3.MsgAnchorResponse>): _3.MsgAnchorResponse;
                fromAmino(object: _3.MsgAnchorResponseAmino): _3.MsgAnchorResponse;
                toAmino(message: _3.MsgAnchorResponse): _3.MsgAnchorResponseAmino;
                fromAminoMsg(object: _3.MsgAnchorResponseAminoMsg): _3.MsgAnchorResponse;
                fromProtoMsg(message: _3.MsgAnchorResponseProtoMsg): _3.MsgAnchorResponse;
                toProto(message: _3.MsgAnchorResponse): Uint8Array;
                toProtoMsg(message: _3.MsgAnchorResponse): _3.MsgAnchorResponseProtoMsg;
            };
            MsgAttest: {
                typeUrl: string;
                encode(message: _3.MsgAttest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgAttest;
                fromPartial(object: Partial<_3.MsgAttest>): _3.MsgAttest;
                fromAmino(object: _3.MsgAttestAmino): _3.MsgAttest;
                toAmino(message: _3.MsgAttest): _3.MsgAttestAmino;
                fromAminoMsg(object: _3.MsgAttestAminoMsg): _3.MsgAttest;
                fromProtoMsg(message: _3.MsgAttestProtoMsg): _3.MsgAttest;
                toProto(message: _3.MsgAttest): Uint8Array;
                toProtoMsg(message: _3.MsgAttest): _3.MsgAttestProtoMsg;
            };
            MsgAttestResponse: {
                typeUrl: string;
                encode(message: _3.MsgAttestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgAttestResponse;
                fromPartial(object: Partial<_3.MsgAttestResponse>): _3.MsgAttestResponse;
                fromAmino(object: _3.MsgAttestResponseAmino): _3.MsgAttestResponse;
                toAmino(message: _3.MsgAttestResponse): _3.MsgAttestResponseAmino;
                fromAminoMsg(object: _3.MsgAttestResponseAminoMsg): _3.MsgAttestResponse;
                fromProtoMsg(message: _3.MsgAttestResponseProtoMsg): _3.MsgAttestResponse;
                toProto(message: _3.MsgAttestResponse): Uint8Array;
                toProtoMsg(message: _3.MsgAttestResponse): _3.MsgAttestResponseProtoMsg;
            };
            MsgDefineResolver: {
                typeUrl: string;
                encode(message: _3.MsgDefineResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgDefineResolver;
                fromPartial(object: Partial<_3.MsgDefineResolver>): _3.MsgDefineResolver;
                fromAmino(object: _3.MsgDefineResolverAmino): _3.MsgDefineResolver;
                toAmino(message: _3.MsgDefineResolver): _3.MsgDefineResolverAmino;
                fromAminoMsg(object: _3.MsgDefineResolverAminoMsg): _3.MsgDefineResolver;
                fromProtoMsg(message: _3.MsgDefineResolverProtoMsg): _3.MsgDefineResolver;
                toProto(message: _3.MsgDefineResolver): Uint8Array;
                toProtoMsg(message: _3.MsgDefineResolver): _3.MsgDefineResolverProtoMsg;
            };
            MsgDefineResolverResponse: {
                typeUrl: string;
                encode(message: _3.MsgDefineResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgDefineResolverResponse;
                fromPartial(object: Partial<_3.MsgDefineResolverResponse>): _3.MsgDefineResolverResponse;
                fromAmino(object: _3.MsgDefineResolverResponseAmino): _3.MsgDefineResolverResponse;
                toAmino(message: _3.MsgDefineResolverResponse): _3.MsgDefineResolverResponseAmino;
                fromAminoMsg(object: _3.MsgDefineResolverResponseAminoMsg): _3.MsgDefineResolverResponse;
                fromProtoMsg(message: _3.MsgDefineResolverResponseProtoMsg): _3.MsgDefineResolverResponse;
                toProto(message: _3.MsgDefineResolverResponse): Uint8Array;
                toProtoMsg(message: _3.MsgDefineResolverResponse): _3.MsgDefineResolverResponseProtoMsg;
            };
            MsgRegisterResolver: {
                typeUrl: string;
                encode(message: _3.MsgRegisterResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgRegisterResolver;
                fromPartial(object: Partial<_3.MsgRegisterResolver>): _3.MsgRegisterResolver;
                fromAmino(object: _3.MsgRegisterResolverAmino): _3.MsgRegisterResolver;
                toAmino(message: _3.MsgRegisterResolver): _3.MsgRegisterResolverAmino;
                fromAminoMsg(object: _3.MsgRegisterResolverAminoMsg): _3.MsgRegisterResolver;
                fromProtoMsg(message: _3.MsgRegisterResolverProtoMsg): _3.MsgRegisterResolver;
                toProto(message: _3.MsgRegisterResolver): Uint8Array;
                toProtoMsg(message: _3.MsgRegisterResolver): _3.MsgRegisterResolverProtoMsg;
            };
            MsgRegisterResolverResponse: {
                typeUrl: string;
                encode(_: _3.MsgRegisterResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgRegisterResolverResponse;
                fromPartial(_: Partial<_3.MsgRegisterResolverResponse>): _3.MsgRegisterResolverResponse;
                fromAmino(_: _3.MsgRegisterResolverResponseAmino): _3.MsgRegisterResolverResponse;
                toAmino(_: _3.MsgRegisterResolverResponse): _3.MsgRegisterResolverResponseAmino;
                fromAminoMsg(object: _3.MsgRegisterResolverResponseAminoMsg): _3.MsgRegisterResolverResponse;
                fromProtoMsg(message: _3.MsgRegisterResolverResponseProtoMsg): _3.MsgRegisterResolverResponse;
                toProto(message: _3.MsgRegisterResolverResponse): Uint8Array;
                toProtoMsg(message: _3.MsgRegisterResolverResponse): _3.MsgRegisterResolverResponseProtoMsg;
            };
            DataID: {
                typeUrl: string;
                encode(message: _2.DataID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.DataID;
                fromPartial(object: Partial<_2.DataID>): _2.DataID;
                fromAmino(object: _2.DataIDAmino): _2.DataID;
                toAmino(message: _2.DataID): _2.DataIDAmino;
                fromAminoMsg(object: _2.DataIDAminoMsg): _2.DataID;
                fromProtoMsg(message: _2.DataIDProtoMsg): _2.DataID;
                toProto(message: _2.DataID): Uint8Array;
                toProtoMsg(message: _2.DataID): _2.DataIDProtoMsg;
            };
            DataAnchor: {
                typeUrl: string;
                encode(message: _2.DataAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.DataAnchor;
                fromPartial(object: Partial<_2.DataAnchor>): _2.DataAnchor;
                fromAmino(object: _2.DataAnchorAmino): _2.DataAnchor;
                toAmino(message: _2.DataAnchor): _2.DataAnchorAmino;
                fromAminoMsg(object: _2.DataAnchorAminoMsg): _2.DataAnchor;
                fromProtoMsg(message: _2.DataAnchorProtoMsg): _2.DataAnchor;
                toProto(message: _2.DataAnchor): Uint8Array;
                toProtoMsg(message: _2.DataAnchor): _2.DataAnchorProtoMsg;
            };
            DataAttestor: {
                typeUrl: string;
                encode(message: _2.DataAttestor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.DataAttestor;
                fromPartial(object: Partial<_2.DataAttestor>): _2.DataAttestor;
                fromAmino(object: _2.DataAttestorAmino): _2.DataAttestor;
                toAmino(message: _2.DataAttestor): _2.DataAttestorAmino;
                fromAminoMsg(object: _2.DataAttestorAminoMsg): _2.DataAttestor;
                fromProtoMsg(message: _2.DataAttestorProtoMsg): _2.DataAttestor;
                toProto(message: _2.DataAttestor): Uint8Array;
                toProtoMsg(message: _2.DataAttestor): _2.DataAttestorProtoMsg;
            };
            Resolver: {
                typeUrl: string;
                encode(message: _2.Resolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Resolver;
                fromPartial(object: Partial<_2.Resolver>): _2.Resolver;
                fromAmino(object: _2.ResolverAmino): _2.Resolver;
                toAmino(message: _2.Resolver): _2.ResolverAmino;
                fromAminoMsg(object: _2.ResolverAminoMsg): _2.Resolver;
                fromProtoMsg(message: _2.ResolverProtoMsg): _2.Resolver;
                toProto(message: _2.Resolver): Uint8Array;
                toProtoMsg(message: _2.Resolver): _2.ResolverProtoMsg;
            };
            DataResolver: {
                typeUrl: string;
                encode(message: _2.DataResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.DataResolver;
                fromPartial(object: Partial<_2.DataResolver>): _2.DataResolver;
                fromAmino(object: _2.DataResolverAmino): _2.DataResolver;
                toAmino(message: _2.DataResolver): _2.DataResolverAmino;
                fromAminoMsg(object: _2.DataResolverAminoMsg): _2.DataResolver;
                fromProtoMsg(message: _2.DataResolverProtoMsg): _2.DataResolver;
                toProto(message: _2.DataResolver): Uint8Array;
                toProtoMsg(message: _2.DataResolver): _2.DataResolverProtoMsg;
            };
            QueryAnchorByIRIRequest: {
                typeUrl: string;
                encode(message: _1.QueryAnchorByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAnchorByIRIRequest;
                fromPartial(object: Partial<_1.QueryAnchorByIRIRequest>): _1.QueryAnchorByIRIRequest;
                fromAmino(object: _1.QueryAnchorByIRIRequestAmino): _1.QueryAnchorByIRIRequest;
                toAmino(message: _1.QueryAnchorByIRIRequest): _1.QueryAnchorByIRIRequestAmino;
                fromAminoMsg(object: _1.QueryAnchorByIRIRequestAminoMsg): _1.QueryAnchorByIRIRequest;
                fromProtoMsg(message: _1.QueryAnchorByIRIRequestProtoMsg): _1.QueryAnchorByIRIRequest;
                toProto(message: _1.QueryAnchorByIRIRequest): Uint8Array;
                toProtoMsg(message: _1.QueryAnchorByIRIRequest): _1.QueryAnchorByIRIRequestProtoMsg;
            };
            QueryAnchorByIRIResponse: {
                typeUrl: string;
                encode(message: _1.QueryAnchorByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAnchorByIRIResponse;
                fromPartial(object: Partial<_1.QueryAnchorByIRIResponse>): _1.QueryAnchorByIRIResponse;
                fromAmino(object: _1.QueryAnchorByIRIResponseAmino): _1.QueryAnchorByIRIResponse;
                toAmino(message: _1.QueryAnchorByIRIResponse): _1.QueryAnchorByIRIResponseAmino;
                fromAminoMsg(object: _1.QueryAnchorByIRIResponseAminoMsg): _1.QueryAnchorByIRIResponse;
                fromProtoMsg(message: _1.QueryAnchorByIRIResponseProtoMsg): _1.QueryAnchorByIRIResponse;
                toProto(message: _1.QueryAnchorByIRIResponse): Uint8Array;
                toProtoMsg(message: _1.QueryAnchorByIRIResponse): _1.QueryAnchorByIRIResponseProtoMsg;
            };
            QueryAnchorByHashRequest: {
                typeUrl: string;
                encode(message: _1.QueryAnchorByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAnchorByHashRequest;
                fromPartial(object: Partial<_1.QueryAnchorByHashRequest>): _1.QueryAnchorByHashRequest;
                fromAmino(object: _1.QueryAnchorByHashRequestAmino): _1.QueryAnchorByHashRequest;
                toAmino(message: _1.QueryAnchorByHashRequest): _1.QueryAnchorByHashRequestAmino;
                fromAminoMsg(object: _1.QueryAnchorByHashRequestAminoMsg): _1.QueryAnchorByHashRequest;
                fromProtoMsg(message: _1.QueryAnchorByHashRequestProtoMsg): _1.QueryAnchorByHashRequest;
                toProto(message: _1.QueryAnchorByHashRequest): Uint8Array;
                toProtoMsg(message: _1.QueryAnchorByHashRequest): _1.QueryAnchorByHashRequestProtoMsg;
            };
            QueryAnchorByHashResponse: {
                typeUrl: string;
                encode(message: _1.QueryAnchorByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAnchorByHashResponse;
                fromPartial(object: Partial<_1.QueryAnchorByHashResponse>): _1.QueryAnchorByHashResponse;
                fromAmino(object: _1.QueryAnchorByHashResponseAmino): _1.QueryAnchorByHashResponse;
                toAmino(message: _1.QueryAnchorByHashResponse): _1.QueryAnchorByHashResponseAmino;
                fromAminoMsg(object: _1.QueryAnchorByHashResponseAminoMsg): _1.QueryAnchorByHashResponse;
                fromProtoMsg(message: _1.QueryAnchorByHashResponseProtoMsg): _1.QueryAnchorByHashResponse;
                toProto(message: _1.QueryAnchorByHashResponse): Uint8Array;
                toProtoMsg(message: _1.QueryAnchorByHashResponse): _1.QueryAnchorByHashResponseProtoMsg;
            };
            QueryAttestationsByAttestorRequest: {
                typeUrl: string;
                encode(message: _1.QueryAttestationsByAttestorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAttestationsByAttestorRequest;
                fromPartial(object: Partial<_1.QueryAttestationsByAttestorRequest>): _1.QueryAttestationsByAttestorRequest;
                fromAmino(object: _1.QueryAttestationsByAttestorRequestAmino): _1.QueryAttestationsByAttestorRequest;
                toAmino(message: _1.QueryAttestationsByAttestorRequest): _1.QueryAttestationsByAttestorRequestAmino;
                fromAminoMsg(object: _1.QueryAttestationsByAttestorRequestAminoMsg): _1.QueryAttestationsByAttestorRequest;
                fromProtoMsg(message: _1.QueryAttestationsByAttestorRequestProtoMsg): _1.QueryAttestationsByAttestorRequest;
                toProto(message: _1.QueryAttestationsByAttestorRequest): Uint8Array;
                toProtoMsg(message: _1.QueryAttestationsByAttestorRequest): _1.QueryAttestationsByAttestorRequestProtoMsg;
            };
            QueryAttestationsByAttestorResponse: {
                typeUrl: string;
                encode(message: _1.QueryAttestationsByAttestorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAttestationsByAttestorResponse;
                fromPartial(object: Partial<_1.QueryAttestationsByAttestorResponse>): _1.QueryAttestationsByAttestorResponse;
                fromAmino(object: _1.QueryAttestationsByAttestorResponseAmino): _1.QueryAttestationsByAttestorResponse;
                toAmino(message: _1.QueryAttestationsByAttestorResponse): _1.QueryAttestationsByAttestorResponseAmino;
                fromAminoMsg(object: _1.QueryAttestationsByAttestorResponseAminoMsg): _1.QueryAttestationsByAttestorResponse;
                fromProtoMsg(message: _1.QueryAttestationsByAttestorResponseProtoMsg): _1.QueryAttestationsByAttestorResponse;
                toProto(message: _1.QueryAttestationsByAttestorResponse): Uint8Array;
                toProtoMsg(message: _1.QueryAttestationsByAttestorResponse): _1.QueryAttestationsByAttestorResponseProtoMsg;
            };
            QueryAttestationsByIRIRequest: {
                typeUrl: string;
                encode(message: _1.QueryAttestationsByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAttestationsByIRIRequest;
                fromPartial(object: Partial<_1.QueryAttestationsByIRIRequest>): _1.QueryAttestationsByIRIRequest;
                fromAmino(object: _1.QueryAttestationsByIRIRequestAmino): _1.QueryAttestationsByIRIRequest;
                toAmino(message: _1.QueryAttestationsByIRIRequest): _1.QueryAttestationsByIRIRequestAmino;
                fromAminoMsg(object: _1.QueryAttestationsByIRIRequestAminoMsg): _1.QueryAttestationsByIRIRequest;
                fromProtoMsg(message: _1.QueryAttestationsByIRIRequestProtoMsg): _1.QueryAttestationsByIRIRequest;
                toProto(message: _1.QueryAttestationsByIRIRequest): Uint8Array;
                toProtoMsg(message: _1.QueryAttestationsByIRIRequest): _1.QueryAttestationsByIRIRequestProtoMsg;
            };
            QueryAttestationsByIRIResponse: {
                typeUrl: string;
                encode(message: _1.QueryAttestationsByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAttestationsByIRIResponse;
                fromPartial(object: Partial<_1.QueryAttestationsByIRIResponse>): _1.QueryAttestationsByIRIResponse;
                fromAmino(object: _1.QueryAttestationsByIRIResponseAmino): _1.QueryAttestationsByIRIResponse;
                toAmino(message: _1.QueryAttestationsByIRIResponse): _1.QueryAttestationsByIRIResponseAmino;
                fromAminoMsg(object: _1.QueryAttestationsByIRIResponseAminoMsg): _1.QueryAttestationsByIRIResponse;
                fromProtoMsg(message: _1.QueryAttestationsByIRIResponseProtoMsg): _1.QueryAttestationsByIRIResponse;
                toProto(message: _1.QueryAttestationsByIRIResponse): Uint8Array;
                toProtoMsg(message: _1.QueryAttestationsByIRIResponse): _1.QueryAttestationsByIRIResponseProtoMsg;
            };
            QueryAttestationsByHashRequest: {
                typeUrl: string;
                encode(message: _1.QueryAttestationsByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAttestationsByHashRequest;
                fromPartial(object: Partial<_1.QueryAttestationsByHashRequest>): _1.QueryAttestationsByHashRequest;
                fromAmino(object: _1.QueryAttestationsByHashRequestAmino): _1.QueryAttestationsByHashRequest;
                toAmino(message: _1.QueryAttestationsByHashRequest): _1.QueryAttestationsByHashRequestAmino;
                fromAminoMsg(object: _1.QueryAttestationsByHashRequestAminoMsg): _1.QueryAttestationsByHashRequest;
                fromProtoMsg(message: _1.QueryAttestationsByHashRequestProtoMsg): _1.QueryAttestationsByHashRequest;
                toProto(message: _1.QueryAttestationsByHashRequest): Uint8Array;
                toProtoMsg(message: _1.QueryAttestationsByHashRequest): _1.QueryAttestationsByHashRequestProtoMsg;
            };
            QueryAttestationsByHashResponse: {
                typeUrl: string;
                encode(message: _1.QueryAttestationsByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryAttestationsByHashResponse;
                fromPartial(object: Partial<_1.QueryAttestationsByHashResponse>): _1.QueryAttestationsByHashResponse;
                fromAmino(object: _1.QueryAttestationsByHashResponseAmino): _1.QueryAttestationsByHashResponse;
                toAmino(message: _1.QueryAttestationsByHashResponse): _1.QueryAttestationsByHashResponseAmino;
                fromAminoMsg(object: _1.QueryAttestationsByHashResponseAminoMsg): _1.QueryAttestationsByHashResponse;
                fromProtoMsg(message: _1.QueryAttestationsByHashResponseProtoMsg): _1.QueryAttestationsByHashResponse;
                toProto(message: _1.QueryAttestationsByHashResponse): Uint8Array;
                toProtoMsg(message: _1.QueryAttestationsByHashResponse): _1.QueryAttestationsByHashResponseProtoMsg;
            };
            QueryResolverRequest: {
                typeUrl: string;
                encode(message: _1.QueryResolverRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryResolverRequest;
                fromPartial(object: Partial<_1.QueryResolverRequest>): _1.QueryResolverRequest;
                fromAmino(object: _1.QueryResolverRequestAmino): _1.QueryResolverRequest;
                toAmino(message: _1.QueryResolverRequest): _1.QueryResolverRequestAmino;
                fromAminoMsg(object: _1.QueryResolverRequestAminoMsg): _1.QueryResolverRequest;
                fromProtoMsg(message: _1.QueryResolverRequestProtoMsg): _1.QueryResolverRequest;
                toProto(message: _1.QueryResolverRequest): Uint8Array;
                toProtoMsg(message: _1.QueryResolverRequest): _1.QueryResolverRequestProtoMsg;
            };
            QueryResolverResponse: {
                typeUrl: string;
                encode(message: _1.QueryResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryResolverResponse;
                fromPartial(object: Partial<_1.QueryResolverResponse>): _1.QueryResolverResponse;
                fromAmino(object: _1.QueryResolverResponseAmino): _1.QueryResolverResponse;
                toAmino(message: _1.QueryResolverResponse): _1.QueryResolverResponseAmino;
                fromAminoMsg(object: _1.QueryResolverResponseAminoMsg): _1.QueryResolverResponse;
                fromProtoMsg(message: _1.QueryResolverResponseProtoMsg): _1.QueryResolverResponse;
                toProto(message: _1.QueryResolverResponse): Uint8Array;
                toProtoMsg(message: _1.QueryResolverResponse): _1.QueryResolverResponseProtoMsg;
            };
            QueryResolversByIRIRequest: {
                typeUrl: string;
                encode(message: _1.QueryResolversByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryResolversByIRIRequest;
                fromPartial(object: Partial<_1.QueryResolversByIRIRequest>): _1.QueryResolversByIRIRequest;
                fromAmino(object: _1.QueryResolversByIRIRequestAmino): _1.QueryResolversByIRIRequest;
                toAmino(message: _1.QueryResolversByIRIRequest): _1.QueryResolversByIRIRequestAmino;
                fromAminoMsg(object: _1.QueryResolversByIRIRequestAminoMsg): _1.QueryResolversByIRIRequest;
                fromProtoMsg(message: _1.QueryResolversByIRIRequestProtoMsg): _1.QueryResolversByIRIRequest;
                toProto(message: _1.QueryResolversByIRIRequest): Uint8Array;
                toProtoMsg(message: _1.QueryResolversByIRIRequest): _1.QueryResolversByIRIRequestProtoMsg;
            };
            QueryResolversByIRIResponse: {
                typeUrl: string;
                encode(message: _1.QueryResolversByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryResolversByIRIResponse;
                fromPartial(object: Partial<_1.QueryResolversByIRIResponse>): _1.QueryResolversByIRIResponse;
                fromAmino(object: _1.QueryResolversByIRIResponseAmino): _1.QueryResolversByIRIResponse;
                toAmino(message: _1.QueryResolversByIRIResponse): _1.QueryResolversByIRIResponseAmino;
                fromAminoMsg(object: _1.QueryResolversByIRIResponseAminoMsg): _1.QueryResolversByIRIResponse;
                fromProtoMsg(message: _1.QueryResolversByIRIResponseProtoMsg): _1.QueryResolversByIRIResponse;
                toProto(message: _1.QueryResolversByIRIResponse): Uint8Array;
                toProtoMsg(message: _1.QueryResolversByIRIResponse): _1.QueryResolversByIRIResponseProtoMsg;
            };
            QueryResolversByHashRequest: {
                typeUrl: string;
                encode(message: _1.QueryResolversByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryResolversByHashRequest;
                fromPartial(object: Partial<_1.QueryResolversByHashRequest>): _1.QueryResolversByHashRequest;
                fromAmino(object: _1.QueryResolversByHashRequestAmino): _1.QueryResolversByHashRequest;
                toAmino(message: _1.QueryResolversByHashRequest): _1.QueryResolversByHashRequestAmino;
                fromAminoMsg(object: _1.QueryResolversByHashRequestAminoMsg): _1.QueryResolversByHashRequest;
                fromProtoMsg(message: _1.QueryResolversByHashRequestProtoMsg): _1.QueryResolversByHashRequest;
                toProto(message: _1.QueryResolversByHashRequest): Uint8Array;
                toProtoMsg(message: _1.QueryResolversByHashRequest): _1.QueryResolversByHashRequestProtoMsg;
            };
            QueryResolversByHashResponse: {
                typeUrl: string;
                encode(message: _1.QueryResolversByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryResolversByHashResponse;
                fromPartial(object: Partial<_1.QueryResolversByHashResponse>): _1.QueryResolversByHashResponse;
                fromAmino(object: _1.QueryResolversByHashResponseAmino): _1.QueryResolversByHashResponse;
                toAmino(message: _1.QueryResolversByHashResponse): _1.QueryResolversByHashResponseAmino;
                fromAminoMsg(object: _1.QueryResolversByHashResponseAminoMsg): _1.QueryResolversByHashResponse;
                fromProtoMsg(message: _1.QueryResolversByHashResponseProtoMsg): _1.QueryResolversByHashResponse;
                toProto(message: _1.QueryResolversByHashResponse): Uint8Array;
                toProtoMsg(message: _1.QueryResolversByHashResponse): _1.QueryResolversByHashResponseProtoMsg;
            };
            QueryResolversByURLRequest: {
                typeUrl: string;
                encode(message: _1.QueryResolversByURLRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryResolversByURLRequest;
                fromPartial(object: Partial<_1.QueryResolversByURLRequest>): _1.QueryResolversByURLRequest;
                fromAmino(object: _1.QueryResolversByURLRequestAmino): _1.QueryResolversByURLRequest;
                toAmino(message: _1.QueryResolversByURLRequest): _1.QueryResolversByURLRequestAmino;
                fromAminoMsg(object: _1.QueryResolversByURLRequestAminoMsg): _1.QueryResolversByURLRequest;
                fromProtoMsg(message: _1.QueryResolversByURLRequestProtoMsg): _1.QueryResolversByURLRequest;
                toProto(message: _1.QueryResolversByURLRequest): Uint8Array;
                toProtoMsg(message: _1.QueryResolversByURLRequest): _1.QueryResolversByURLRequestProtoMsg;
            };
            QueryResolversByURLResponse: {
                typeUrl: string;
                encode(message: _1.QueryResolversByURLResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryResolversByURLResponse;
                fromPartial(object: Partial<_1.QueryResolversByURLResponse>): _1.QueryResolversByURLResponse;
                fromAmino(object: _1.QueryResolversByURLResponseAmino): _1.QueryResolversByURLResponse;
                toAmino(message: _1.QueryResolversByURLResponse): _1.QueryResolversByURLResponseAmino;
                fromAminoMsg(object: _1.QueryResolversByURLResponseAminoMsg): _1.QueryResolversByURLResponse;
                fromProtoMsg(message: _1.QueryResolversByURLResponseProtoMsg): _1.QueryResolversByURLResponse;
                toProto(message: _1.QueryResolversByURLResponse): Uint8Array;
                toProtoMsg(message: _1.QueryResolversByURLResponse): _1.QueryResolversByURLResponseProtoMsg;
            };
            ConvertIRIToHashRequest: {
                typeUrl: string;
                encode(message: _1.ConvertIRIToHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.ConvertIRIToHashRequest;
                fromPartial(object: Partial<_1.ConvertIRIToHashRequest>): _1.ConvertIRIToHashRequest;
                fromAmino(object: _1.ConvertIRIToHashRequestAmino): _1.ConvertIRIToHashRequest;
                toAmino(message: _1.ConvertIRIToHashRequest): _1.ConvertIRIToHashRequestAmino;
                fromAminoMsg(object: _1.ConvertIRIToHashRequestAminoMsg): _1.ConvertIRIToHashRequest;
                fromProtoMsg(message: _1.ConvertIRIToHashRequestProtoMsg): _1.ConvertIRIToHashRequest;
                toProto(message: _1.ConvertIRIToHashRequest): Uint8Array;
                toProtoMsg(message: _1.ConvertIRIToHashRequest): _1.ConvertIRIToHashRequestProtoMsg;
            };
            ConvertIRIToHashResponse: {
                typeUrl: string;
                encode(message: _1.ConvertIRIToHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.ConvertIRIToHashResponse;
                fromPartial(object: Partial<_1.ConvertIRIToHashResponse>): _1.ConvertIRIToHashResponse;
                fromAmino(object: _1.ConvertIRIToHashResponseAmino): _1.ConvertIRIToHashResponse;
                toAmino(message: _1.ConvertIRIToHashResponse): _1.ConvertIRIToHashResponseAmino;
                fromAminoMsg(object: _1.ConvertIRIToHashResponseAminoMsg): _1.ConvertIRIToHashResponse;
                fromProtoMsg(message: _1.ConvertIRIToHashResponseProtoMsg): _1.ConvertIRIToHashResponse;
                toProto(message: _1.ConvertIRIToHashResponse): Uint8Array;
                toProtoMsg(message: _1.ConvertIRIToHashResponse): _1.ConvertIRIToHashResponseProtoMsg;
            };
            ConvertHashToIRIRequest: {
                typeUrl: string;
                encode(message: _1.ConvertHashToIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.ConvertHashToIRIRequest;
                fromPartial(object: Partial<_1.ConvertHashToIRIRequest>): _1.ConvertHashToIRIRequest;
                fromAmino(object: _1.ConvertHashToIRIRequestAmino): _1.ConvertHashToIRIRequest;
                toAmino(message: _1.ConvertHashToIRIRequest): _1.ConvertHashToIRIRequestAmino;
                fromAminoMsg(object: _1.ConvertHashToIRIRequestAminoMsg): _1.ConvertHashToIRIRequest;
                fromProtoMsg(message: _1.ConvertHashToIRIRequestProtoMsg): _1.ConvertHashToIRIRequest;
                toProto(message: _1.ConvertHashToIRIRequest): Uint8Array;
                toProtoMsg(message: _1.ConvertHashToIRIRequest): _1.ConvertHashToIRIRequestProtoMsg;
            };
            ConvertHashToIRIResponse: {
                typeUrl: string;
                encode(message: _1.ConvertHashToIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.ConvertHashToIRIResponse;
                fromPartial(object: Partial<_1.ConvertHashToIRIResponse>): _1.ConvertHashToIRIResponse;
                fromAmino(object: _1.ConvertHashToIRIResponseAmino): _1.ConvertHashToIRIResponse;
                toAmino(message: _1.ConvertHashToIRIResponse): _1.ConvertHashToIRIResponseAmino;
                fromAminoMsg(object: _1.ConvertHashToIRIResponseAminoMsg): _1.ConvertHashToIRIResponse;
                fromProtoMsg(message: _1.ConvertHashToIRIResponseProtoMsg): _1.ConvertHashToIRIResponse;
                toProto(message: _1.ConvertHashToIRIResponse): Uint8Array;
                toProtoMsg(message: _1.ConvertHashToIRIResponse): _1.ConvertHashToIRIResponseProtoMsg;
            };
            AnchorInfo: {
                typeUrl: string;
                encode(message: _1.AnchorInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.AnchorInfo;
                fromPartial(object: Partial<_1.AnchorInfo>): _1.AnchorInfo;
                fromAmino(object: _1.AnchorInfoAmino): _1.AnchorInfo;
                toAmino(message: _1.AnchorInfo): _1.AnchorInfoAmino;
                fromAminoMsg(object: _1.AnchorInfoAminoMsg): _1.AnchorInfo;
                fromProtoMsg(message: _1.AnchorInfoProtoMsg): _1.AnchorInfo;
                toProto(message: _1.AnchorInfo): Uint8Array;
                toProtoMsg(message: _1.AnchorInfo): _1.AnchorInfoProtoMsg;
            };
            AttestationInfo: {
                typeUrl: string;
                encode(message: _1.AttestationInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.AttestationInfo;
                fromPartial(object: Partial<_1.AttestationInfo>): _1.AttestationInfo;
                fromAmino(object: _1.AttestationInfoAmino): _1.AttestationInfo;
                toAmino(message: _1.AttestationInfo): _1.AttestationInfoAmino;
                fromAminoMsg(object: _1.AttestationInfoAminoMsg): _1.AttestationInfo;
                fromProtoMsg(message: _1.AttestationInfoProtoMsg): _1.AttestationInfo;
                toProto(message: _1.AttestationInfo): Uint8Array;
                toProtoMsg(message: _1.AttestationInfo): _1.AttestationInfoProtoMsg;
            };
            ResolverInfo: {
                typeUrl: string;
                encode(message: _1.ResolverInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.ResolverInfo;
                fromPartial(object: Partial<_1.ResolverInfo>): _1.ResolverInfo;
                fromAmino(object: _1.ResolverInfoAmino): _1.ResolverInfo;
                toAmino(message: _1.ResolverInfo): _1.ResolverInfoAmino;
                fromAminoMsg(object: _1.ResolverInfoAminoMsg): _1.ResolverInfo;
                fromProtoMsg(message: _1.ResolverInfoProtoMsg): _1.ResolverInfo;
                toProto(message: _1.ResolverInfo): Uint8Array;
                toProtoMsg(message: _1.ResolverInfo): _1.ResolverInfoProtoMsg;
            };
            EventAnchor: {
                typeUrl: string;
                encode(message: _0.EventAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EventAnchor;
                fromPartial(object: Partial<_0.EventAnchor>): _0.EventAnchor;
                fromAmino(object: _0.EventAnchorAmino): _0.EventAnchor;
                toAmino(message: _0.EventAnchor): _0.EventAnchorAmino;
                fromAminoMsg(object: _0.EventAnchorAminoMsg): _0.EventAnchor;
                fromProtoMsg(message: _0.EventAnchorProtoMsg): _0.EventAnchor;
                toProto(message: _0.EventAnchor): Uint8Array;
                toProtoMsg(message: _0.EventAnchor): _0.EventAnchorProtoMsg;
            };
            EventAttest: {
                typeUrl: string;
                encode(message: _0.EventAttest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EventAttest;
                fromPartial(object: Partial<_0.EventAttest>): _0.EventAttest;
                fromAmino(object: _0.EventAttestAmino): _0.EventAttest;
                toAmino(message: _0.EventAttest): _0.EventAttestAmino;
                fromAminoMsg(object: _0.EventAttestAminoMsg): _0.EventAttest;
                fromProtoMsg(message: _0.EventAttestProtoMsg): _0.EventAttest;
                toProto(message: _0.EventAttest): Uint8Array;
                toProtoMsg(message: _0.EventAttest): _0.EventAttestProtoMsg;
            };
            EventDefineResolver: {
                typeUrl: string;
                encode(message: _0.EventDefineResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EventDefineResolver;
                fromPartial(object: Partial<_0.EventDefineResolver>): _0.EventDefineResolver;
                fromAmino(object: _0.EventDefineResolverAmino): _0.EventDefineResolver;
                toAmino(message: _0.EventDefineResolver): _0.EventDefineResolverAmino;
                fromAminoMsg(object: _0.EventDefineResolverAminoMsg): _0.EventDefineResolver;
                fromProtoMsg(message: _0.EventDefineResolverProtoMsg): _0.EventDefineResolver;
                toProto(message: _0.EventDefineResolver): Uint8Array;
                toProtoMsg(message: _0.EventDefineResolver): _0.EventDefineResolverProtoMsg;
            };
            EventRegisterResolver: {
                typeUrl: string;
                encode(message: _0.EventRegisterResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.EventRegisterResolver;
                fromPartial(object: Partial<_0.EventRegisterResolver>): _0.EventRegisterResolver;
                fromAmino(object: _0.EventRegisterResolverAmino): _0.EventRegisterResolver;
                toAmino(message: _0.EventRegisterResolver): _0.EventRegisterResolverAmino;
                fromAminoMsg(object: _0.EventRegisterResolverAminoMsg): _0.EventRegisterResolver;
                fromProtoMsg(message: _0.EventRegisterResolverProtoMsg): _0.EventRegisterResolver;
                toProto(message: _0.EventRegisterResolver): Uint8Array;
                toProtoMsg(message: _0.EventRegisterResolver): _0.EventRegisterResolverProtoMsg;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                MsgClientImpl: typeof _178.MsgClientImpl;
                QueryClientImpl: typeof _171.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    basket(request: _6.QueryBasketRequest): Promise<_6.QueryBasketResponse>;
                    baskets(request?: _6.QueryBasketsRequest): Promise<_6.QueryBasketsResponse>;
                    basketBalances(request: _6.QueryBasketBalancesRequest): Promise<_6.QueryBasketBalancesResponse>;
                    basketBalance(request: _6.QueryBasketBalanceRequest): Promise<_6.QueryBasketBalanceResponse>;
                    basketFee(request?: _6.QueryBasketFeeRequest): Promise<_6.QueryBasketFeeResponse>;
                };
                LCDQueryClient: typeof _164.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _8.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _8.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _8.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateBasketFee(value: _8.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateCurator(value: _8.MsgUpdateCurator): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateDateCriteria(value: _8.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _8.MsgCreate): {
                            typeUrl: string;
                            value: _8.MsgCreate;
                        };
                        put(value: _8.MsgPut): {
                            typeUrl: string;
                            value: _8.MsgPut;
                        };
                        take(value: _8.MsgTake): {
                            typeUrl: string;
                            value: _8.MsgTake;
                        };
                        updateBasketFee(value: _8.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _8.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _8.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _8.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _8.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _8.MsgUpdateDateCriteria;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _8.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _8.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _8.MsgTake;
                        };
                        updateBasketFee(value: any): {
                            typeUrl: string;
                            value: _8.MsgUpdateBasketFee;
                        };
                        updateCurator(value: any): {
                            typeUrl: string;
                            value: _8.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: any): {
                            typeUrl: string;
                            value: _8.MsgUpdateDateCriteria;
                        };
                    };
                    fromPartial: {
                        create(value: _8.MsgCreate): {
                            typeUrl: string;
                            value: _8.MsgCreate;
                        };
                        put(value: _8.MsgPut): {
                            typeUrl: string;
                            value: _8.MsgPut;
                        };
                        take(value: _8.MsgTake): {
                            typeUrl: string;
                            value: _8.MsgTake;
                        };
                        updateBasketFee(value: _8.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _8.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _8.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _8.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _8.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _8.MsgUpdateDateCriteria;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: (message: _8.MsgCreate) => _8.MsgCreateAmino;
                        fromAmino: (object: _8.MsgCreateAmino) => _8.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: (message: _8.MsgPut) => _8.MsgPutAmino;
                        fromAmino: (object: _8.MsgPutAmino) => _8.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: (message: _8.MsgTake) => _8.MsgTakeAmino;
                        fromAmino: (object: _8.MsgTakeAmino) => _8.MsgTake;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
                        aminoType: string;
                        toAmino: (message: _8.MsgUpdateBasketFee) => _8.MsgUpdateBasketFeeAmino;
                        fromAmino: (object: _8.MsgUpdateBasketFeeAmino) => _8.MsgUpdateBasketFee;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
                        aminoType: string;
                        toAmino: (message: _8.MsgUpdateCurator) => _8.MsgUpdateCuratorAmino;
                        fromAmino: (object: _8.MsgUpdateCuratorAmino) => _8.MsgUpdateCurator;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
                        aminoType: string;
                        toAmino: (message: _8.MsgUpdateDateCriteria) => _8.MsgUpdateDateCriteriaAmino;
                        fromAmino: (object: _8.MsgUpdateDateCriteriaAmino) => _8.MsgUpdateDateCriteria;
                    };
                };
                BasketCredit: {
                    typeUrl: string;
                    encode(message: _9.BasketCredit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.BasketCredit;
                    fromPartial(object: Partial<_9.BasketCredit>): _9.BasketCredit;
                    fromAmino(object: _9.BasketCreditAmino): _9.BasketCredit;
                    toAmino(message: _9.BasketCredit): _9.BasketCreditAmino;
                    fromAminoMsg(object: _9.BasketCreditAminoMsg): _9.BasketCredit;
                    fromProtoMsg(message: _9.BasketCreditProtoMsg): _9.BasketCredit;
                    toProto(message: _9.BasketCredit): Uint8Array;
                    toProtoMsg(message: _9.BasketCredit): _9.BasketCreditProtoMsg;
                };
                DateCriteria: {
                    typeUrl: string;
                    encode(message: _9.DateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _9.DateCriteria;
                    fromPartial(object: Partial<_9.DateCriteria>): _9.DateCriteria;
                    fromAmino(object: _9.DateCriteriaAmino): _9.DateCriteria;
                    toAmino(message: _9.DateCriteria): _9.DateCriteriaAmino;
                    fromAminoMsg(object: _9.DateCriteriaAminoMsg): _9.DateCriteria;
                    fromProtoMsg(message: _9.DateCriteriaProtoMsg): _9.DateCriteria;
                    toProto(message: _9.DateCriteria): Uint8Array;
                    toProtoMsg(message: _9.DateCriteria): _9.DateCriteriaProtoMsg;
                };
                MsgCreate: {
                    typeUrl: string;
                    encode(message: _8.MsgCreate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgCreate;
                    fromPartial(object: Partial<_8.MsgCreate>): _8.MsgCreate;
                    fromAmino(object: _8.MsgCreateAmino): _8.MsgCreate;
                    toAmino(message: _8.MsgCreate): _8.MsgCreateAmino;
                    fromAminoMsg(object: _8.MsgCreateAminoMsg): _8.MsgCreate;
                    fromProtoMsg(message: _8.MsgCreateProtoMsg): _8.MsgCreate;
                    toProto(message: _8.MsgCreate): Uint8Array;
                    toProtoMsg(message: _8.MsgCreate): _8.MsgCreateProtoMsg;
                };
                MsgCreateResponse: {
                    typeUrl: string;
                    encode(message: _8.MsgCreateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgCreateResponse;
                    fromPartial(object: Partial<_8.MsgCreateResponse>): _8.MsgCreateResponse;
                    fromAmino(object: _8.MsgCreateResponseAmino): _8.MsgCreateResponse;
                    toAmino(message: _8.MsgCreateResponse): _8.MsgCreateResponseAmino;
                    fromAminoMsg(object: _8.MsgCreateResponseAminoMsg): _8.MsgCreateResponse;
                    fromProtoMsg(message: _8.MsgCreateResponseProtoMsg): _8.MsgCreateResponse;
                    toProto(message: _8.MsgCreateResponse): Uint8Array;
                    toProtoMsg(message: _8.MsgCreateResponse): _8.MsgCreateResponseProtoMsg;
                };
                MsgPut: {
                    typeUrl: string;
                    encode(message: _8.MsgPut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgPut;
                    fromPartial(object: Partial<_8.MsgPut>): _8.MsgPut;
                    fromAmino(object: _8.MsgPutAmino): _8.MsgPut;
                    toAmino(message: _8.MsgPut): _8.MsgPutAmino;
                    fromAminoMsg(object: _8.MsgPutAminoMsg): _8.MsgPut;
                    fromProtoMsg(message: _8.MsgPutProtoMsg): _8.MsgPut;
                    toProto(message: _8.MsgPut): Uint8Array;
                    toProtoMsg(message: _8.MsgPut): _8.MsgPutProtoMsg;
                };
                MsgPutResponse: {
                    typeUrl: string;
                    encode(message: _8.MsgPutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgPutResponse;
                    fromPartial(object: Partial<_8.MsgPutResponse>): _8.MsgPutResponse;
                    fromAmino(object: _8.MsgPutResponseAmino): _8.MsgPutResponse;
                    toAmino(message: _8.MsgPutResponse): _8.MsgPutResponseAmino;
                    fromAminoMsg(object: _8.MsgPutResponseAminoMsg): _8.MsgPutResponse;
                    fromProtoMsg(message: _8.MsgPutResponseProtoMsg): _8.MsgPutResponse;
                    toProto(message: _8.MsgPutResponse): Uint8Array;
                    toProtoMsg(message: _8.MsgPutResponse): _8.MsgPutResponseProtoMsg;
                };
                MsgTake: {
                    typeUrl: string;
                    encode(message: _8.MsgTake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgTake;
                    fromPartial(object: Partial<_8.MsgTake>): _8.MsgTake;
                    fromAmino(object: _8.MsgTakeAmino): _8.MsgTake;
                    toAmino(message: _8.MsgTake): _8.MsgTakeAmino;
                    fromAminoMsg(object: _8.MsgTakeAminoMsg): _8.MsgTake;
                    fromProtoMsg(message: _8.MsgTakeProtoMsg): _8.MsgTake;
                    toProto(message: _8.MsgTake): Uint8Array;
                    toProtoMsg(message: _8.MsgTake): _8.MsgTakeProtoMsg;
                };
                MsgTakeResponse: {
                    typeUrl: string;
                    encode(message: _8.MsgTakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgTakeResponse;
                    fromPartial(object: Partial<_8.MsgTakeResponse>): _8.MsgTakeResponse;
                    fromAmino(object: _8.MsgTakeResponseAmino): _8.MsgTakeResponse;
                    toAmino(message: _8.MsgTakeResponse): _8.MsgTakeResponseAmino;
                    fromAminoMsg(object: _8.MsgTakeResponseAminoMsg): _8.MsgTakeResponse;
                    fromProtoMsg(message: _8.MsgTakeResponseProtoMsg): _8.MsgTakeResponse;
                    toProto(message: _8.MsgTakeResponse): Uint8Array;
                    toProtoMsg(message: _8.MsgTakeResponse): _8.MsgTakeResponseProtoMsg;
                };
                MsgUpdateBasketFee: {
                    typeUrl: string;
                    encode(message: _8.MsgUpdateBasketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgUpdateBasketFee;
                    fromPartial(object: Partial<_8.MsgUpdateBasketFee>): _8.MsgUpdateBasketFee;
                    fromAmino(object: _8.MsgUpdateBasketFeeAmino): _8.MsgUpdateBasketFee;
                    toAmino(message: _8.MsgUpdateBasketFee): _8.MsgUpdateBasketFeeAmino;
                    fromAminoMsg(object: _8.MsgUpdateBasketFeeAminoMsg): _8.MsgUpdateBasketFee;
                    fromProtoMsg(message: _8.MsgUpdateBasketFeeProtoMsg): _8.MsgUpdateBasketFee;
                    toProto(message: _8.MsgUpdateBasketFee): Uint8Array;
                    toProtoMsg(message: _8.MsgUpdateBasketFee): _8.MsgUpdateBasketFeeProtoMsg;
                };
                MsgUpdateBasketFeeResponse: {
                    typeUrl: string;
                    encode(_: _8.MsgUpdateBasketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _8.MsgUpdateBasketFeeResponse;
                    fromPartial(_: Partial<_8.MsgUpdateBasketFeeResponse>): _8.MsgUpdateBasketFeeResponse;
                    fromAmino(_: _8.MsgUpdateBasketFeeResponseAmino): _8.MsgUpdateBasketFeeResponse;
                    toAmino(_: _8.MsgUpdateBasketFeeResponse): _8.MsgUpdateBasketFeeResponseAmino;
                    fromAminoMsg(object: _8.MsgUpdateBasketFeeResponseAminoMsg): _8.MsgUpdateBasketFeeResponse;
                    fromProtoMsg(message: _8.MsgUpdateBasketFeeResponseProtoMsg): _8.MsgUpdateBasketFeeResponse;
                    toProto(message: _8.MsgUpdateBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _8.MsgUpdateBasketFeeResponse): _8.MsgUpdateBasketFeeResponseProtoMsg;
                };
                MsgUpdateCurator: {
                    typeUrl: string;
                    encode(message: _8.MsgUpdateCurator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgUpdateCurator;
                    fromPartial(object: Partial<_8.MsgUpdateCurator>): _8.MsgUpdateCurator;
                    fromAmino(object: _8.MsgUpdateCuratorAmino): _8.MsgUpdateCurator;
                    toAmino(message: _8.MsgUpdateCurator): _8.MsgUpdateCuratorAmino;
                    fromAminoMsg(object: _8.MsgUpdateCuratorAminoMsg): _8.MsgUpdateCurator;
                    fromProtoMsg(message: _8.MsgUpdateCuratorProtoMsg): _8.MsgUpdateCurator;
                    toProto(message: _8.MsgUpdateCurator): Uint8Array;
                    toProtoMsg(message: _8.MsgUpdateCurator): _8.MsgUpdateCuratorProtoMsg;
                };
                MsgUpdateCuratorResponse: {
                    typeUrl: string;
                    encode(_: _8.MsgUpdateCuratorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _8.MsgUpdateCuratorResponse;
                    fromPartial(_: Partial<_8.MsgUpdateCuratorResponse>): _8.MsgUpdateCuratorResponse;
                    fromAmino(_: _8.MsgUpdateCuratorResponseAmino): _8.MsgUpdateCuratorResponse;
                    toAmino(_: _8.MsgUpdateCuratorResponse): _8.MsgUpdateCuratorResponseAmino;
                    fromAminoMsg(object: _8.MsgUpdateCuratorResponseAminoMsg): _8.MsgUpdateCuratorResponse;
                    fromProtoMsg(message: _8.MsgUpdateCuratorResponseProtoMsg): _8.MsgUpdateCuratorResponse;
                    toProto(message: _8.MsgUpdateCuratorResponse): Uint8Array;
                    toProtoMsg(message: _8.MsgUpdateCuratorResponse): _8.MsgUpdateCuratorResponseProtoMsg;
                };
                MsgUpdateDateCriteria: {
                    typeUrl: string;
                    encode(message: _8.MsgUpdateDateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _8.MsgUpdateDateCriteria;
                    fromPartial(object: Partial<_8.MsgUpdateDateCriteria>): _8.MsgUpdateDateCriteria;
                    fromAmino(object: _8.MsgUpdateDateCriteriaAmino): _8.MsgUpdateDateCriteria;
                    toAmino(message: _8.MsgUpdateDateCriteria): _8.MsgUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _8.MsgUpdateDateCriteriaAminoMsg): _8.MsgUpdateDateCriteria;
                    fromProtoMsg(message: _8.MsgUpdateDateCriteriaProtoMsg): _8.MsgUpdateDateCriteria;
                    toProto(message: _8.MsgUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _8.MsgUpdateDateCriteria): _8.MsgUpdateDateCriteriaProtoMsg;
                };
                MsgUpdateDateCriteriaResponse: {
                    typeUrl: string;
                    encode(_: _8.MsgUpdateDateCriteriaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _8.MsgUpdateDateCriteriaResponse;
                    fromPartial(_: Partial<_8.MsgUpdateDateCriteriaResponse>): _8.MsgUpdateDateCriteriaResponse;
                    fromAmino(_: _8.MsgUpdateDateCriteriaResponseAmino): _8.MsgUpdateDateCriteriaResponse;
                    toAmino(_: _8.MsgUpdateDateCriteriaResponse): _8.MsgUpdateDateCriteriaResponseAmino;
                    fromAminoMsg(object: _8.MsgUpdateDateCriteriaResponseAminoMsg): _8.MsgUpdateDateCriteriaResponse;
                    fromProtoMsg(message: _8.MsgUpdateDateCriteriaResponseProtoMsg): _8.MsgUpdateDateCriteriaResponse;
                    toProto(message: _8.MsgUpdateDateCriteriaResponse): Uint8Array;
                    toProtoMsg(message: _8.MsgUpdateDateCriteriaResponse): _8.MsgUpdateDateCriteriaResponseProtoMsg;
                };
                Basket: {
                    typeUrl: string;
                    encode(message: _7.Basket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.Basket;
                    fromPartial(object: Partial<_7.Basket>): _7.Basket;
                    fromAmino(object: _7.BasketAmino): _7.Basket;
                    toAmino(message: _7.Basket): _7.BasketAmino;
                    fromAminoMsg(object: _7.BasketAminoMsg): _7.Basket;
                    fromProtoMsg(message: _7.BasketProtoMsg): _7.Basket;
                    toProto(message: _7.Basket): Uint8Array;
                    toProtoMsg(message: _7.Basket): _7.BasketProtoMsg;
                };
                BasketClass: {
                    typeUrl: string;
                    encode(message: _7.BasketClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.BasketClass;
                    fromPartial(object: Partial<_7.BasketClass>): _7.BasketClass;
                    fromAmino(object: _7.BasketClassAmino): _7.BasketClass;
                    toAmino(message: _7.BasketClass): _7.BasketClassAmino;
                    fromAminoMsg(object: _7.BasketClassAminoMsg): _7.BasketClass;
                    fromProtoMsg(message: _7.BasketClassProtoMsg): _7.BasketClass;
                    toProto(message: _7.BasketClass): Uint8Array;
                    toProtoMsg(message: _7.BasketClass): _7.BasketClassProtoMsg;
                };
                BasketBalance: {
                    typeUrl: string;
                    encode(message: _7.BasketBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.BasketBalance;
                    fromPartial(object: Partial<_7.BasketBalance>): _7.BasketBalance;
                    fromAmino(object: _7.BasketBalanceAmino): _7.BasketBalance;
                    toAmino(message: _7.BasketBalance): _7.BasketBalanceAmino;
                    fromAminoMsg(object: _7.BasketBalanceAminoMsg): _7.BasketBalance;
                    fromProtoMsg(message: _7.BasketBalanceProtoMsg): _7.BasketBalance;
                    toProto(message: _7.BasketBalance): Uint8Array;
                    toProtoMsg(message: _7.BasketBalance): _7.BasketBalanceProtoMsg;
                };
                BasketFee: {
                    typeUrl: string;
                    encode(message: _7.BasketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _7.BasketFee;
                    fromPartial(object: Partial<_7.BasketFee>): _7.BasketFee;
                    fromAmino(object: _7.BasketFeeAmino): _7.BasketFee;
                    toAmino(message: _7.BasketFee): _7.BasketFeeAmino;
                    fromAminoMsg(object: _7.BasketFeeAminoMsg): _7.BasketFee;
                    fromProtoMsg(message: _7.BasketFeeProtoMsg): _7.BasketFee;
                    toProto(message: _7.BasketFee): Uint8Array;
                    toProtoMsg(message: _7.BasketFee): _7.BasketFeeProtoMsg;
                };
                QueryBasketRequest: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketRequest;
                    fromPartial(object: Partial<_6.QueryBasketRequest>): _6.QueryBasketRequest;
                    fromAmino(object: _6.QueryBasketRequestAmino): _6.QueryBasketRequest;
                    toAmino(message: _6.QueryBasketRequest): _6.QueryBasketRequestAmino;
                    fromAminoMsg(object: _6.QueryBasketRequestAminoMsg): _6.QueryBasketRequest;
                    fromProtoMsg(message: _6.QueryBasketRequestProtoMsg): _6.QueryBasketRequest;
                    toProto(message: _6.QueryBasketRequest): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketRequest): _6.QueryBasketRequestProtoMsg;
                };
                QueryBasketResponse: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketResponse;
                    fromPartial(object: Partial<_6.QueryBasketResponse>): _6.QueryBasketResponse;
                    fromAmino(object: _6.QueryBasketResponseAmino): _6.QueryBasketResponse;
                    toAmino(message: _6.QueryBasketResponse): _6.QueryBasketResponseAmino;
                    fromAminoMsg(object: _6.QueryBasketResponseAminoMsg): _6.QueryBasketResponse;
                    fromProtoMsg(message: _6.QueryBasketResponseProtoMsg): _6.QueryBasketResponse;
                    toProto(message: _6.QueryBasketResponse): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketResponse): _6.QueryBasketResponseProtoMsg;
                };
                QueryBasketsRequest: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketsRequest;
                    fromPartial(object: Partial<_6.QueryBasketsRequest>): _6.QueryBasketsRequest;
                    fromAmino(object: _6.QueryBasketsRequestAmino): _6.QueryBasketsRequest;
                    toAmino(message: _6.QueryBasketsRequest): _6.QueryBasketsRequestAmino;
                    fromAminoMsg(object: _6.QueryBasketsRequestAminoMsg): _6.QueryBasketsRequest;
                    fromProtoMsg(message: _6.QueryBasketsRequestProtoMsg): _6.QueryBasketsRequest;
                    toProto(message: _6.QueryBasketsRequest): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketsRequest): _6.QueryBasketsRequestProtoMsg;
                };
                QueryBasketsResponse: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketsResponse;
                    fromPartial(object: Partial<_6.QueryBasketsResponse>): _6.QueryBasketsResponse;
                    fromAmino(object: _6.QueryBasketsResponseAmino): _6.QueryBasketsResponse;
                    toAmino(message: _6.QueryBasketsResponse): _6.QueryBasketsResponseAmino;
                    fromAminoMsg(object: _6.QueryBasketsResponseAminoMsg): _6.QueryBasketsResponse;
                    fromProtoMsg(message: _6.QueryBasketsResponseProtoMsg): _6.QueryBasketsResponse;
                    toProto(message: _6.QueryBasketsResponse): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketsResponse): _6.QueryBasketsResponseProtoMsg;
                };
                QueryBasketBalancesRequest: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketBalancesRequest;
                    fromPartial(object: Partial<_6.QueryBasketBalancesRequest>): _6.QueryBasketBalancesRequest;
                    fromAmino(object: _6.QueryBasketBalancesRequestAmino): _6.QueryBasketBalancesRequest;
                    toAmino(message: _6.QueryBasketBalancesRequest): _6.QueryBasketBalancesRequestAmino;
                    fromAminoMsg(object: _6.QueryBasketBalancesRequestAminoMsg): _6.QueryBasketBalancesRequest;
                    fromProtoMsg(message: _6.QueryBasketBalancesRequestProtoMsg): _6.QueryBasketBalancesRequest;
                    toProto(message: _6.QueryBasketBalancesRequest): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketBalancesRequest): _6.QueryBasketBalancesRequestProtoMsg;
                };
                QueryBasketBalancesResponse: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketBalancesResponse;
                    fromPartial(object: Partial<_6.QueryBasketBalancesResponse>): _6.QueryBasketBalancesResponse;
                    fromAmino(object: _6.QueryBasketBalancesResponseAmino): _6.QueryBasketBalancesResponse;
                    toAmino(message: _6.QueryBasketBalancesResponse): _6.QueryBasketBalancesResponseAmino;
                    fromAminoMsg(object: _6.QueryBasketBalancesResponseAminoMsg): _6.QueryBasketBalancesResponse;
                    fromProtoMsg(message: _6.QueryBasketBalancesResponseProtoMsg): _6.QueryBasketBalancesResponse;
                    toProto(message: _6.QueryBasketBalancesResponse): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketBalancesResponse): _6.QueryBasketBalancesResponseProtoMsg;
                };
                QueryBasketBalanceRequest: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketBalanceRequest;
                    fromPartial(object: Partial<_6.QueryBasketBalanceRequest>): _6.QueryBasketBalanceRequest;
                    fromAmino(object: _6.QueryBasketBalanceRequestAmino): _6.QueryBasketBalanceRequest;
                    toAmino(message: _6.QueryBasketBalanceRequest): _6.QueryBasketBalanceRequestAmino;
                    fromAminoMsg(object: _6.QueryBasketBalanceRequestAminoMsg): _6.QueryBasketBalanceRequest;
                    fromProtoMsg(message: _6.QueryBasketBalanceRequestProtoMsg): _6.QueryBasketBalanceRequest;
                    toProto(message: _6.QueryBasketBalanceRequest): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketBalanceRequest): _6.QueryBasketBalanceRequestProtoMsg;
                };
                QueryBasketBalanceResponse: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketBalanceResponse;
                    fromPartial(object: Partial<_6.QueryBasketBalanceResponse>): _6.QueryBasketBalanceResponse;
                    fromAmino(object: _6.QueryBasketBalanceResponseAmino): _6.QueryBasketBalanceResponse;
                    toAmino(message: _6.QueryBasketBalanceResponse): _6.QueryBasketBalanceResponseAmino;
                    fromAminoMsg(object: _6.QueryBasketBalanceResponseAminoMsg): _6.QueryBasketBalanceResponse;
                    fromProtoMsg(message: _6.QueryBasketBalanceResponseProtoMsg): _6.QueryBasketBalanceResponse;
                    toProto(message: _6.QueryBasketBalanceResponse): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketBalanceResponse): _6.QueryBasketBalanceResponseProtoMsg;
                };
                BasketInfo: {
                    typeUrl: string;
                    encode(message: _6.BasketInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.BasketInfo;
                    fromPartial(object: Partial<_6.BasketInfo>): _6.BasketInfo;
                    fromAmino(object: _6.BasketInfoAmino): _6.BasketInfo;
                    toAmino(message: _6.BasketInfo): _6.BasketInfoAmino;
                    fromAminoMsg(object: _6.BasketInfoAminoMsg): _6.BasketInfo;
                    fromProtoMsg(message: _6.BasketInfoProtoMsg): _6.BasketInfo;
                    toProto(message: _6.BasketInfo): Uint8Array;
                    toProtoMsg(message: _6.BasketInfo): _6.BasketInfoProtoMsg;
                };
                BasketBalanceInfo: {
                    typeUrl: string;
                    encode(message: _6.BasketBalanceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.BasketBalanceInfo;
                    fromPartial(object: Partial<_6.BasketBalanceInfo>): _6.BasketBalanceInfo;
                    fromAmino(object: _6.BasketBalanceInfoAmino): _6.BasketBalanceInfo;
                    toAmino(message: _6.BasketBalanceInfo): _6.BasketBalanceInfoAmino;
                    fromAminoMsg(object: _6.BasketBalanceInfoAminoMsg): _6.BasketBalanceInfo;
                    fromProtoMsg(message: _6.BasketBalanceInfoProtoMsg): _6.BasketBalanceInfo;
                    toProto(message: _6.BasketBalanceInfo): Uint8Array;
                    toProtoMsg(message: _6.BasketBalanceInfo): _6.BasketBalanceInfoProtoMsg;
                };
                QueryBasketFeeRequest: {
                    typeUrl: string;
                    encode(_: _6.QueryBasketFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _6.QueryBasketFeeRequest;
                    fromPartial(_: Partial<_6.QueryBasketFeeRequest>): _6.QueryBasketFeeRequest;
                    fromAmino(_: _6.QueryBasketFeeRequestAmino): _6.QueryBasketFeeRequest;
                    toAmino(_: _6.QueryBasketFeeRequest): _6.QueryBasketFeeRequestAmino;
                    fromAminoMsg(object: _6.QueryBasketFeeRequestAminoMsg): _6.QueryBasketFeeRequest;
                    fromProtoMsg(message: _6.QueryBasketFeeRequestProtoMsg): _6.QueryBasketFeeRequest;
                    toProto(message: _6.QueryBasketFeeRequest): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketFeeRequest): _6.QueryBasketFeeRequestProtoMsg;
                };
                QueryBasketFeeResponse: {
                    typeUrl: string;
                    encode(message: _6.QueryBasketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _6.QueryBasketFeeResponse;
                    fromPartial(object: Partial<_6.QueryBasketFeeResponse>): _6.QueryBasketFeeResponse;
                    fromAmino(object: _6.QueryBasketFeeResponseAmino): _6.QueryBasketFeeResponse;
                    toAmino(message: _6.QueryBasketFeeResponse): _6.QueryBasketFeeResponseAmino;
                    fromAminoMsg(object: _6.QueryBasketFeeResponseAminoMsg): _6.QueryBasketFeeResponse;
                    fromProtoMsg(message: _6.QueryBasketFeeResponseProtoMsg): _6.QueryBasketFeeResponse;
                    toProto(message: _6.QueryBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _6.QueryBasketFeeResponse): _6.QueryBasketFeeResponseProtoMsg;
                };
                EventCreate: {
                    typeUrl: string;
                    encode(message: _5.EventCreate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.EventCreate;
                    fromPartial(object: Partial<_5.EventCreate>): _5.EventCreate;
                    fromAmino(object: _5.EventCreateAmino): _5.EventCreate;
                    toAmino(message: _5.EventCreate): _5.EventCreateAmino;
                    fromAminoMsg(object: _5.EventCreateAminoMsg): _5.EventCreate;
                    fromProtoMsg(message: _5.EventCreateProtoMsg): _5.EventCreate;
                    toProto(message: _5.EventCreate): Uint8Array;
                    toProtoMsg(message: _5.EventCreate): _5.EventCreateProtoMsg;
                };
                EventPut: {
                    typeUrl: string;
                    encode(message: _5.EventPut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.EventPut;
                    fromPartial(object: Partial<_5.EventPut>): _5.EventPut;
                    fromAmino(object: _5.EventPutAmino): _5.EventPut;
                    toAmino(message: _5.EventPut): _5.EventPutAmino;
                    fromAminoMsg(object: _5.EventPutAminoMsg): _5.EventPut;
                    fromProtoMsg(message: _5.EventPutProtoMsg): _5.EventPut;
                    toProto(message: _5.EventPut): Uint8Array;
                    toProtoMsg(message: _5.EventPut): _5.EventPutProtoMsg;
                };
                EventTake: {
                    typeUrl: string;
                    encode(message: _5.EventTake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.EventTake;
                    fromPartial(object: Partial<_5.EventTake>): _5.EventTake;
                    fromAmino(object: _5.EventTakeAmino): _5.EventTake;
                    toAmino(message: _5.EventTake): _5.EventTakeAmino;
                    fromAminoMsg(object: _5.EventTakeAminoMsg): _5.EventTake;
                    fromProtoMsg(message: _5.EventTakeProtoMsg): _5.EventTake;
                    toProto(message: _5.EventTake): Uint8Array;
                    toProtoMsg(message: _5.EventTake): _5.EventTakeProtoMsg;
                };
                EventUpdateCurator: {
                    typeUrl: string;
                    encode(message: _5.EventUpdateCurator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.EventUpdateCurator;
                    fromPartial(object: Partial<_5.EventUpdateCurator>): _5.EventUpdateCurator;
                    fromAmino(object: _5.EventUpdateCuratorAmino): _5.EventUpdateCurator;
                    toAmino(message: _5.EventUpdateCurator): _5.EventUpdateCuratorAmino;
                    fromAminoMsg(object: _5.EventUpdateCuratorAminoMsg): _5.EventUpdateCurator;
                    fromProtoMsg(message: _5.EventUpdateCuratorProtoMsg): _5.EventUpdateCurator;
                    toProto(message: _5.EventUpdateCurator): Uint8Array;
                    toProtoMsg(message: _5.EventUpdateCurator): _5.EventUpdateCuratorProtoMsg;
                };
                EventUpdateDateCriteria: {
                    typeUrl: string;
                    encode(message: _5.EventUpdateDateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _5.EventUpdateDateCriteria;
                    fromPartial(object: Partial<_5.EventUpdateDateCriteria>): _5.EventUpdateDateCriteria;
                    fromAmino(object: _5.EventUpdateDateCriteriaAmino): _5.EventUpdateDateCriteria;
                    toAmino(message: _5.EventUpdateDateCriteria): _5.EventUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _5.EventUpdateDateCriteriaAminoMsg): _5.EventUpdateDateCriteria;
                    fromProtoMsg(message: _5.EventUpdateDateCriteriaProtoMsg): _5.EventUpdateDateCriteria;
                    toProto(message: _5.EventUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _5.EventUpdateDateCriteria): _5.EventUpdateDateCriteriaProtoMsg;
                };
            };
        }
        namespace marketplace {
            const v1: {
                MsgClientImpl: typeof _179.MsgClientImpl;
                QueryClientImpl: typeof _172.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    sellOrder(request: _11.QuerySellOrderRequest): Promise<_11.QuerySellOrderResponse>;
                    sellOrders(request?: _11.QuerySellOrdersRequest): Promise<_11.QuerySellOrdersResponse>;
                    sellOrdersByBatch(request: _11.QuerySellOrdersByBatchRequest): Promise<_11.QuerySellOrdersByBatchResponse>;
                    sellOrdersBySeller(request: _11.QuerySellOrdersBySellerRequest): Promise<_11.QuerySellOrdersBySellerResponse>;
                    allowedDenoms(request?: _11.QueryAllowedDenomsRequest): Promise<_11.QueryAllowedDenomsResponse>;
                };
                LCDQueryClient: typeof _165.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _13.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _13.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _13.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _13.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        addAllowedDenom(value: _13.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeAllowedDenom(value: _13.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _13.MsgSell): {
                            typeUrl: string;
                            value: _13.MsgSell;
                        };
                        updateSellOrders(value: _13.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _13.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _13.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _13.MsgCancelSellOrder;
                        };
                        buyDirect(value: _13.MsgBuyDirect): {
                            typeUrl: string;
                            value: _13.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _13.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _13.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _13.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _13.MsgRemoveAllowedDenom;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _13.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _13.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _13.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _13.MsgBuyDirect;
                        };
                        addAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _13.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _13.MsgRemoveAllowedDenom;
                        };
                    };
                    fromPartial: {
                        sell(value: _13.MsgSell): {
                            typeUrl: string;
                            value: _13.MsgSell;
                        };
                        updateSellOrders(value: _13.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _13.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _13.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _13.MsgCancelSellOrder;
                        };
                        buyDirect(value: _13.MsgBuyDirect): {
                            typeUrl: string;
                            value: _13.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _13.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _13.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _13.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _13.MsgRemoveAllowedDenom;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: (message: _13.MsgSell) => _13.MsgSellAmino;
                        fromAmino: (object: _13.MsgSellAmino) => _13.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: (message: _13.MsgUpdateSellOrders) => _13.MsgUpdateSellOrdersAmino;
                        fromAmino: (object: _13.MsgUpdateSellOrdersAmino) => _13.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: (message: _13.MsgCancelSellOrder) => _13.MsgCancelSellOrderAmino;
                        fromAmino: (object: _13.MsgCancelSellOrderAmino) => _13.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: (message: _13.MsgBuyDirect) => _13.MsgBuyDirectAmino;
                        fromAmino: (object: _13.MsgBuyDirectAmino) => _13.MsgBuyDirect;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _13.MsgAddAllowedDenom) => _13.MsgAddAllowedDenomAmino;
                        fromAmino: (object: _13.MsgAddAllowedDenomAmino) => _13.MsgAddAllowedDenom;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _13.MsgRemoveAllowedDenom) => _13.MsgRemoveAllowedDenomAmino;
                        fromAmino: (object: _13.MsgRemoveAllowedDenomAmino) => _13.MsgRemoveAllowedDenom;
                    };
                };
                AllowDenomProposal: {
                    typeUrl: string;
                    encode(message: _14.AllowDenomProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _14.AllowDenomProposal;
                    fromPartial(object: Partial<_14.AllowDenomProposal>): _14.AllowDenomProposal;
                    fromAmino(object: _14.AllowDenomProposalAmino): _14.AllowDenomProposal;
                    toAmino(message: _14.AllowDenomProposal): _14.AllowDenomProposalAmino;
                    fromAminoMsg(object: _14.AllowDenomProposalAminoMsg): _14.AllowDenomProposal;
                    fromProtoMsg(message: _14.AllowDenomProposalProtoMsg): _14.AllowDenomProposal;
                    toProto(message: _14.AllowDenomProposal): Uint8Array;
                    toProtoMsg(message: _14.AllowDenomProposal): _14.AllowDenomProposalProtoMsg;
                };
                MsgSell: {
                    typeUrl: string;
                    encode(message: _13.MsgSell, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgSell;
                    fromPartial(object: Partial<_13.MsgSell>): _13.MsgSell;
                    fromAmino(object: _13.MsgSellAmino): _13.MsgSell;
                    toAmino(message: _13.MsgSell): _13.MsgSellAmino;
                    fromAminoMsg(object: _13.MsgSellAminoMsg): _13.MsgSell;
                    fromProtoMsg(message: _13.MsgSellProtoMsg): _13.MsgSell;
                    toProto(message: _13.MsgSell): Uint8Array;
                    toProtoMsg(message: _13.MsgSell): _13.MsgSellProtoMsg;
                };
                MsgSell_Order: {
                    typeUrl: string;
                    encode(message: _13.MsgSell_Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgSell_Order;
                    fromPartial(object: Partial<_13.MsgSell_Order>): _13.MsgSell_Order;
                    fromAmino(object: _13.MsgSell_OrderAmino): _13.MsgSell_Order;
                    toAmino(message: _13.MsgSell_Order): _13.MsgSell_OrderAmino;
                    fromAminoMsg(object: _13.MsgSell_OrderAminoMsg): _13.MsgSell_Order;
                    fromProtoMsg(message: _13.MsgSell_OrderProtoMsg): _13.MsgSell_Order;
                    toProto(message: _13.MsgSell_Order): Uint8Array;
                    toProtoMsg(message: _13.MsgSell_Order): _13.MsgSell_OrderProtoMsg;
                };
                MsgSellResponse: {
                    typeUrl: string;
                    encode(message: _13.MsgSellResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgSellResponse;
                    fromPartial(object: Partial<_13.MsgSellResponse>): _13.MsgSellResponse;
                    fromAmino(object: _13.MsgSellResponseAmino): _13.MsgSellResponse;
                    toAmino(message: _13.MsgSellResponse): _13.MsgSellResponseAmino;
                    fromAminoMsg(object: _13.MsgSellResponseAminoMsg): _13.MsgSellResponse;
                    fromProtoMsg(message: _13.MsgSellResponseProtoMsg): _13.MsgSellResponse;
                    toProto(message: _13.MsgSellResponse): Uint8Array;
                    toProtoMsg(message: _13.MsgSellResponse): _13.MsgSellResponseProtoMsg;
                };
                MsgUpdateSellOrders: {
                    typeUrl: string;
                    encode(message: _13.MsgUpdateSellOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgUpdateSellOrders;
                    fromPartial(object: Partial<_13.MsgUpdateSellOrders>): _13.MsgUpdateSellOrders;
                    fromAmino(object: _13.MsgUpdateSellOrdersAmino): _13.MsgUpdateSellOrders;
                    toAmino(message: _13.MsgUpdateSellOrders): _13.MsgUpdateSellOrdersAmino;
                    fromAminoMsg(object: _13.MsgUpdateSellOrdersAminoMsg): _13.MsgUpdateSellOrders;
                    fromProtoMsg(message: _13.MsgUpdateSellOrdersProtoMsg): _13.MsgUpdateSellOrders;
                    toProto(message: _13.MsgUpdateSellOrders): Uint8Array;
                    toProtoMsg(message: _13.MsgUpdateSellOrders): _13.MsgUpdateSellOrdersProtoMsg;
                };
                MsgUpdateSellOrders_Update: {
                    typeUrl: string;
                    encode(message: _13.MsgUpdateSellOrders_Update, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgUpdateSellOrders_Update;
                    fromPartial(object: Partial<_13.MsgUpdateSellOrders_Update>): _13.MsgUpdateSellOrders_Update;
                    fromAmino(object: _13.MsgUpdateSellOrders_UpdateAmino): _13.MsgUpdateSellOrders_Update;
                    toAmino(message: _13.MsgUpdateSellOrders_Update): _13.MsgUpdateSellOrders_UpdateAmino;
                    fromAminoMsg(object: _13.MsgUpdateSellOrders_UpdateAminoMsg): _13.MsgUpdateSellOrders_Update;
                    fromProtoMsg(message: _13.MsgUpdateSellOrders_UpdateProtoMsg): _13.MsgUpdateSellOrders_Update;
                    toProto(message: _13.MsgUpdateSellOrders_Update): Uint8Array;
                    toProtoMsg(message: _13.MsgUpdateSellOrders_Update): _13.MsgUpdateSellOrders_UpdateProtoMsg;
                };
                MsgUpdateSellOrdersResponse: {
                    typeUrl: string;
                    encode(_: _13.MsgUpdateSellOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _13.MsgUpdateSellOrdersResponse;
                    fromPartial(_: Partial<_13.MsgUpdateSellOrdersResponse>): _13.MsgUpdateSellOrdersResponse;
                    fromAmino(_: _13.MsgUpdateSellOrdersResponseAmino): _13.MsgUpdateSellOrdersResponse;
                    toAmino(_: _13.MsgUpdateSellOrdersResponse): _13.MsgUpdateSellOrdersResponseAmino;
                    fromAminoMsg(object: _13.MsgUpdateSellOrdersResponseAminoMsg): _13.MsgUpdateSellOrdersResponse;
                    fromProtoMsg(message: _13.MsgUpdateSellOrdersResponseProtoMsg): _13.MsgUpdateSellOrdersResponse;
                    toProto(message: _13.MsgUpdateSellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _13.MsgUpdateSellOrdersResponse): _13.MsgUpdateSellOrdersResponseProtoMsg;
                };
                MsgCancelSellOrder: {
                    typeUrl: string;
                    encode(message: _13.MsgCancelSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgCancelSellOrder;
                    fromPartial(object: Partial<_13.MsgCancelSellOrder>): _13.MsgCancelSellOrder;
                    fromAmino(object: _13.MsgCancelSellOrderAmino): _13.MsgCancelSellOrder;
                    toAmino(message: _13.MsgCancelSellOrder): _13.MsgCancelSellOrderAmino;
                    fromAminoMsg(object: _13.MsgCancelSellOrderAminoMsg): _13.MsgCancelSellOrder;
                    fromProtoMsg(message: _13.MsgCancelSellOrderProtoMsg): _13.MsgCancelSellOrder;
                    toProto(message: _13.MsgCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _13.MsgCancelSellOrder): _13.MsgCancelSellOrderProtoMsg;
                };
                MsgCancelSellOrderResponse: {
                    typeUrl: string;
                    encode(_: _13.MsgCancelSellOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _13.MsgCancelSellOrderResponse;
                    fromPartial(_: Partial<_13.MsgCancelSellOrderResponse>): _13.MsgCancelSellOrderResponse;
                    fromAmino(_: _13.MsgCancelSellOrderResponseAmino): _13.MsgCancelSellOrderResponse;
                    toAmino(_: _13.MsgCancelSellOrderResponse): _13.MsgCancelSellOrderResponseAmino;
                    fromAminoMsg(object: _13.MsgCancelSellOrderResponseAminoMsg): _13.MsgCancelSellOrderResponse;
                    fromProtoMsg(message: _13.MsgCancelSellOrderResponseProtoMsg): _13.MsgCancelSellOrderResponse;
                    toProto(message: _13.MsgCancelSellOrderResponse): Uint8Array;
                    toProtoMsg(message: _13.MsgCancelSellOrderResponse): _13.MsgCancelSellOrderResponseProtoMsg;
                };
                MsgBuyDirect: {
                    typeUrl: string;
                    encode(message: _13.MsgBuyDirect, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgBuyDirect;
                    fromPartial(object: Partial<_13.MsgBuyDirect>): _13.MsgBuyDirect;
                    fromAmino(object: _13.MsgBuyDirectAmino): _13.MsgBuyDirect;
                    toAmino(message: _13.MsgBuyDirect): _13.MsgBuyDirectAmino;
                    fromAminoMsg(object: _13.MsgBuyDirectAminoMsg): _13.MsgBuyDirect;
                    fromProtoMsg(message: _13.MsgBuyDirectProtoMsg): _13.MsgBuyDirect;
                    toProto(message: _13.MsgBuyDirect): Uint8Array;
                    toProtoMsg(message: _13.MsgBuyDirect): _13.MsgBuyDirectProtoMsg;
                };
                MsgBuyDirect_Order: {
                    typeUrl: string;
                    encode(message: _13.MsgBuyDirect_Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgBuyDirect_Order;
                    fromPartial(object: Partial<_13.MsgBuyDirect_Order>): _13.MsgBuyDirect_Order;
                    fromAmino(object: _13.MsgBuyDirect_OrderAmino): _13.MsgBuyDirect_Order;
                    toAmino(message: _13.MsgBuyDirect_Order): _13.MsgBuyDirect_OrderAmino;
                    fromAminoMsg(object: _13.MsgBuyDirect_OrderAminoMsg): _13.MsgBuyDirect_Order;
                    fromProtoMsg(message: _13.MsgBuyDirect_OrderProtoMsg): _13.MsgBuyDirect_Order;
                    toProto(message: _13.MsgBuyDirect_Order): Uint8Array;
                    toProtoMsg(message: _13.MsgBuyDirect_Order): _13.MsgBuyDirect_OrderProtoMsg;
                };
                MsgBuyDirectResponse: {
                    typeUrl: string;
                    encode(_: _13.MsgBuyDirectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _13.MsgBuyDirectResponse;
                    fromPartial(_: Partial<_13.MsgBuyDirectResponse>): _13.MsgBuyDirectResponse;
                    fromAmino(_: _13.MsgBuyDirectResponseAmino): _13.MsgBuyDirectResponse;
                    toAmino(_: _13.MsgBuyDirectResponse): _13.MsgBuyDirectResponseAmino;
                    fromAminoMsg(object: _13.MsgBuyDirectResponseAminoMsg): _13.MsgBuyDirectResponse;
                    fromProtoMsg(message: _13.MsgBuyDirectResponseProtoMsg): _13.MsgBuyDirectResponse;
                    toProto(message: _13.MsgBuyDirectResponse): Uint8Array;
                    toProtoMsg(message: _13.MsgBuyDirectResponse): _13.MsgBuyDirectResponseProtoMsg;
                };
                MsgAddAllowedDenom: {
                    typeUrl: string;
                    encode(message: _13.MsgAddAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgAddAllowedDenom;
                    fromPartial(object: Partial<_13.MsgAddAllowedDenom>): _13.MsgAddAllowedDenom;
                    fromAmino(object: _13.MsgAddAllowedDenomAmino): _13.MsgAddAllowedDenom;
                    toAmino(message: _13.MsgAddAllowedDenom): _13.MsgAddAllowedDenomAmino;
                    fromAminoMsg(object: _13.MsgAddAllowedDenomAminoMsg): _13.MsgAddAllowedDenom;
                    fromProtoMsg(message: _13.MsgAddAllowedDenomProtoMsg): _13.MsgAddAllowedDenom;
                    toProto(message: _13.MsgAddAllowedDenom): Uint8Array;
                    toProtoMsg(message: _13.MsgAddAllowedDenom): _13.MsgAddAllowedDenomProtoMsg;
                };
                MsgAddAllowedDenomResponse: {
                    typeUrl: string;
                    encode(_: _13.MsgAddAllowedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _13.MsgAddAllowedDenomResponse;
                    fromPartial(_: Partial<_13.MsgAddAllowedDenomResponse>): _13.MsgAddAllowedDenomResponse;
                    fromAmino(_: _13.MsgAddAllowedDenomResponseAmino): _13.MsgAddAllowedDenomResponse;
                    toAmino(_: _13.MsgAddAllowedDenomResponse): _13.MsgAddAllowedDenomResponseAmino;
                    fromAminoMsg(object: _13.MsgAddAllowedDenomResponseAminoMsg): _13.MsgAddAllowedDenomResponse;
                    fromProtoMsg(message: _13.MsgAddAllowedDenomResponseProtoMsg): _13.MsgAddAllowedDenomResponse;
                    toProto(message: _13.MsgAddAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _13.MsgAddAllowedDenomResponse): _13.MsgAddAllowedDenomResponseProtoMsg;
                };
                MsgRemoveAllowedDenom: {
                    typeUrl: string;
                    encode(message: _13.MsgRemoveAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _13.MsgRemoveAllowedDenom;
                    fromPartial(object: Partial<_13.MsgRemoveAllowedDenom>): _13.MsgRemoveAllowedDenom;
                    fromAmino(object: _13.MsgRemoveAllowedDenomAmino): _13.MsgRemoveAllowedDenom;
                    toAmino(message: _13.MsgRemoveAllowedDenom): _13.MsgRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _13.MsgRemoveAllowedDenomAminoMsg): _13.MsgRemoveAllowedDenom;
                    fromProtoMsg(message: _13.MsgRemoveAllowedDenomProtoMsg): _13.MsgRemoveAllowedDenom;
                    toProto(message: _13.MsgRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _13.MsgRemoveAllowedDenom): _13.MsgRemoveAllowedDenomProtoMsg;
                };
                MsgRemoveAllowedDenomResponse: {
                    typeUrl: string;
                    encode(_: _13.MsgRemoveAllowedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _13.MsgRemoveAllowedDenomResponse;
                    fromPartial(_: Partial<_13.MsgRemoveAllowedDenomResponse>): _13.MsgRemoveAllowedDenomResponse;
                    fromAmino(_: _13.MsgRemoveAllowedDenomResponseAmino): _13.MsgRemoveAllowedDenomResponse;
                    toAmino(_: _13.MsgRemoveAllowedDenomResponse): _13.MsgRemoveAllowedDenomResponseAmino;
                    fromAminoMsg(object: _13.MsgRemoveAllowedDenomResponseAminoMsg): _13.MsgRemoveAllowedDenomResponse;
                    fromProtoMsg(message: _13.MsgRemoveAllowedDenomResponseProtoMsg): _13.MsgRemoveAllowedDenomResponse;
                    toProto(message: _13.MsgRemoveAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _13.MsgRemoveAllowedDenomResponse): _13.MsgRemoveAllowedDenomResponseProtoMsg;
                };
                SellOrder: {
                    typeUrl: string;
                    encode(message: _12.SellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.SellOrder;
                    fromPartial(object: Partial<_12.SellOrder>): _12.SellOrder;
                    fromAmino(object: _12.SellOrderAmino): _12.SellOrder;
                    toAmino(message: _12.SellOrder): _12.SellOrderAmino;
                    fromAminoMsg(object: _12.SellOrderAminoMsg): _12.SellOrder;
                    fromProtoMsg(message: _12.SellOrderProtoMsg): _12.SellOrder;
                    toProto(message: _12.SellOrder): Uint8Array;
                    toProtoMsg(message: _12.SellOrder): _12.SellOrderProtoMsg;
                };
                AllowedDenom: {
                    typeUrl: string;
                    encode(message: _12.AllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.AllowedDenom;
                    fromPartial(object: Partial<_12.AllowedDenom>): _12.AllowedDenom;
                    fromAmino(object: _12.AllowedDenomAmino): _12.AllowedDenom;
                    toAmino(message: _12.AllowedDenom): _12.AllowedDenomAmino;
                    fromAminoMsg(object: _12.AllowedDenomAminoMsg): _12.AllowedDenom;
                    fromProtoMsg(message: _12.AllowedDenomProtoMsg): _12.AllowedDenom;
                    toProto(message: _12.AllowedDenom): Uint8Array;
                    toProtoMsg(message: _12.AllowedDenom): _12.AllowedDenomProtoMsg;
                };
                Market: {
                    typeUrl: string;
                    encode(message: _12.Market, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _12.Market;
                    fromPartial(object: Partial<_12.Market>): _12.Market;
                    fromAmino(object: _12.MarketAmino): _12.Market;
                    toAmino(message: _12.Market): _12.MarketAmino;
                    fromAminoMsg(object: _12.MarketAminoMsg): _12.Market;
                    fromProtoMsg(message: _12.MarketProtoMsg): _12.Market;
                    toProto(message: _12.Market): Uint8Array;
                    toProtoMsg(message: _12.Market): _12.MarketProtoMsg;
                };
                QuerySellOrderRequest: {
                    typeUrl: string;
                    encode(message: _11.QuerySellOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QuerySellOrderRequest;
                    fromPartial(object: Partial<_11.QuerySellOrderRequest>): _11.QuerySellOrderRequest;
                    fromAmino(object: _11.QuerySellOrderRequestAmino): _11.QuerySellOrderRequest;
                    toAmino(message: _11.QuerySellOrderRequest): _11.QuerySellOrderRequestAmino;
                    fromAminoMsg(object: _11.QuerySellOrderRequestAminoMsg): _11.QuerySellOrderRequest;
                    fromProtoMsg(message: _11.QuerySellOrderRequestProtoMsg): _11.QuerySellOrderRequest;
                    toProto(message: _11.QuerySellOrderRequest): Uint8Array;
                    toProtoMsg(message: _11.QuerySellOrderRequest): _11.QuerySellOrderRequestProtoMsg;
                };
                QuerySellOrderResponse: {
                    typeUrl: string;
                    encode(message: _11.QuerySellOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QuerySellOrderResponse;
                    fromPartial(object: Partial<_11.QuerySellOrderResponse>): _11.QuerySellOrderResponse;
                    fromAmino(object: _11.QuerySellOrderResponseAmino): _11.QuerySellOrderResponse;
                    toAmino(message: _11.QuerySellOrderResponse): _11.QuerySellOrderResponseAmino;
                    fromAminoMsg(object: _11.QuerySellOrderResponseAminoMsg): _11.QuerySellOrderResponse;
                    fromProtoMsg(message: _11.QuerySellOrderResponseProtoMsg): _11.QuerySellOrderResponse;
                    toProto(message: _11.QuerySellOrderResponse): Uint8Array;
                    toProtoMsg(message: _11.QuerySellOrderResponse): _11.QuerySellOrderResponseProtoMsg;
                };
                QuerySellOrdersRequest: {
                    typeUrl: string;
                    encode(message: _11.QuerySellOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QuerySellOrdersRequest;
                    fromPartial(object: Partial<_11.QuerySellOrdersRequest>): _11.QuerySellOrdersRequest;
                    fromAmino(object: _11.QuerySellOrdersRequestAmino): _11.QuerySellOrdersRequest;
                    toAmino(message: _11.QuerySellOrdersRequest): _11.QuerySellOrdersRequestAmino;
                    fromAminoMsg(object: _11.QuerySellOrdersRequestAminoMsg): _11.QuerySellOrdersRequest;
                    fromProtoMsg(message: _11.QuerySellOrdersRequestProtoMsg): _11.QuerySellOrdersRequest;
                    toProto(message: _11.QuerySellOrdersRequest): Uint8Array;
                    toProtoMsg(message: _11.QuerySellOrdersRequest): _11.QuerySellOrdersRequestProtoMsg;
                };
                QuerySellOrdersResponse: {
                    typeUrl: string;
                    encode(message: _11.QuerySellOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QuerySellOrdersResponse;
                    fromPartial(object: Partial<_11.QuerySellOrdersResponse>): _11.QuerySellOrdersResponse;
                    fromAmino(object: _11.QuerySellOrdersResponseAmino): _11.QuerySellOrdersResponse;
                    toAmino(message: _11.QuerySellOrdersResponse): _11.QuerySellOrdersResponseAmino;
                    fromAminoMsg(object: _11.QuerySellOrdersResponseAminoMsg): _11.QuerySellOrdersResponse;
                    fromProtoMsg(message: _11.QuerySellOrdersResponseProtoMsg): _11.QuerySellOrdersResponse;
                    toProto(message: _11.QuerySellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _11.QuerySellOrdersResponse): _11.QuerySellOrdersResponseProtoMsg;
                };
                QuerySellOrdersByBatchRequest: {
                    typeUrl: string;
                    encode(message: _11.QuerySellOrdersByBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QuerySellOrdersByBatchRequest;
                    fromPartial(object: Partial<_11.QuerySellOrdersByBatchRequest>): _11.QuerySellOrdersByBatchRequest;
                    fromAmino(object: _11.QuerySellOrdersByBatchRequestAmino): _11.QuerySellOrdersByBatchRequest;
                    toAmino(message: _11.QuerySellOrdersByBatchRequest): _11.QuerySellOrdersByBatchRequestAmino;
                    fromAminoMsg(object: _11.QuerySellOrdersByBatchRequestAminoMsg): _11.QuerySellOrdersByBatchRequest;
                    fromProtoMsg(message: _11.QuerySellOrdersByBatchRequestProtoMsg): _11.QuerySellOrdersByBatchRequest;
                    toProto(message: _11.QuerySellOrdersByBatchRequest): Uint8Array;
                    toProtoMsg(message: _11.QuerySellOrdersByBatchRequest): _11.QuerySellOrdersByBatchRequestProtoMsg;
                };
                QuerySellOrdersByBatchResponse: {
                    typeUrl: string;
                    encode(message: _11.QuerySellOrdersByBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QuerySellOrdersByBatchResponse;
                    fromPartial(object: Partial<_11.QuerySellOrdersByBatchResponse>): _11.QuerySellOrdersByBatchResponse;
                    fromAmino(object: _11.QuerySellOrdersByBatchResponseAmino): _11.QuerySellOrdersByBatchResponse;
                    toAmino(message: _11.QuerySellOrdersByBatchResponse): _11.QuerySellOrdersByBatchResponseAmino;
                    fromAminoMsg(object: _11.QuerySellOrdersByBatchResponseAminoMsg): _11.QuerySellOrdersByBatchResponse;
                    fromProtoMsg(message: _11.QuerySellOrdersByBatchResponseProtoMsg): _11.QuerySellOrdersByBatchResponse;
                    toProto(message: _11.QuerySellOrdersByBatchResponse): Uint8Array;
                    toProtoMsg(message: _11.QuerySellOrdersByBatchResponse): _11.QuerySellOrdersByBatchResponseProtoMsg;
                };
                QuerySellOrdersBySellerRequest: {
                    typeUrl: string;
                    encode(message: _11.QuerySellOrdersBySellerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QuerySellOrdersBySellerRequest;
                    fromPartial(object: Partial<_11.QuerySellOrdersBySellerRequest>): _11.QuerySellOrdersBySellerRequest;
                    fromAmino(object: _11.QuerySellOrdersBySellerRequestAmino): _11.QuerySellOrdersBySellerRequest;
                    toAmino(message: _11.QuerySellOrdersBySellerRequest): _11.QuerySellOrdersBySellerRequestAmino;
                    fromAminoMsg(object: _11.QuerySellOrdersBySellerRequestAminoMsg): _11.QuerySellOrdersBySellerRequest;
                    fromProtoMsg(message: _11.QuerySellOrdersBySellerRequestProtoMsg): _11.QuerySellOrdersBySellerRequest;
                    toProto(message: _11.QuerySellOrdersBySellerRequest): Uint8Array;
                    toProtoMsg(message: _11.QuerySellOrdersBySellerRequest): _11.QuerySellOrdersBySellerRequestProtoMsg;
                };
                QuerySellOrdersBySellerResponse: {
                    typeUrl: string;
                    encode(message: _11.QuerySellOrdersBySellerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QuerySellOrdersBySellerResponse;
                    fromPartial(object: Partial<_11.QuerySellOrdersBySellerResponse>): _11.QuerySellOrdersBySellerResponse;
                    fromAmino(object: _11.QuerySellOrdersBySellerResponseAmino): _11.QuerySellOrdersBySellerResponse;
                    toAmino(message: _11.QuerySellOrdersBySellerResponse): _11.QuerySellOrdersBySellerResponseAmino;
                    fromAminoMsg(object: _11.QuerySellOrdersBySellerResponseAminoMsg): _11.QuerySellOrdersBySellerResponse;
                    fromProtoMsg(message: _11.QuerySellOrdersBySellerResponseProtoMsg): _11.QuerySellOrdersBySellerResponse;
                    toProto(message: _11.QuerySellOrdersBySellerResponse): Uint8Array;
                    toProtoMsg(message: _11.QuerySellOrdersBySellerResponse): _11.QuerySellOrdersBySellerResponseProtoMsg;
                };
                QueryAllowedDenomsRequest: {
                    typeUrl: string;
                    encode(message: _11.QueryAllowedDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryAllowedDenomsRequest;
                    fromPartial(object: Partial<_11.QueryAllowedDenomsRequest>): _11.QueryAllowedDenomsRequest;
                    fromAmino(object: _11.QueryAllowedDenomsRequestAmino): _11.QueryAllowedDenomsRequest;
                    toAmino(message: _11.QueryAllowedDenomsRequest): _11.QueryAllowedDenomsRequestAmino;
                    fromAminoMsg(object: _11.QueryAllowedDenomsRequestAminoMsg): _11.QueryAllowedDenomsRequest;
                    fromProtoMsg(message: _11.QueryAllowedDenomsRequestProtoMsg): _11.QueryAllowedDenomsRequest;
                    toProto(message: _11.QueryAllowedDenomsRequest): Uint8Array;
                    toProtoMsg(message: _11.QueryAllowedDenomsRequest): _11.QueryAllowedDenomsRequestProtoMsg;
                };
                QueryAllowedDenomsResponse: {
                    typeUrl: string;
                    encode(message: _11.QueryAllowedDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.QueryAllowedDenomsResponse;
                    fromPartial(object: Partial<_11.QueryAllowedDenomsResponse>): _11.QueryAllowedDenomsResponse;
                    fromAmino(object: _11.QueryAllowedDenomsResponseAmino): _11.QueryAllowedDenomsResponse;
                    toAmino(message: _11.QueryAllowedDenomsResponse): _11.QueryAllowedDenomsResponseAmino;
                    fromAminoMsg(object: _11.QueryAllowedDenomsResponseAminoMsg): _11.QueryAllowedDenomsResponse;
                    fromProtoMsg(message: _11.QueryAllowedDenomsResponseProtoMsg): _11.QueryAllowedDenomsResponse;
                    toProto(message: _11.QueryAllowedDenomsResponse): Uint8Array;
                    toProtoMsg(message: _11.QueryAllowedDenomsResponse): _11.QueryAllowedDenomsResponseProtoMsg;
                };
                SellOrderInfo: {
                    typeUrl: string;
                    encode(message: _11.SellOrderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _11.SellOrderInfo;
                    fromPartial(object: Partial<_11.SellOrderInfo>): _11.SellOrderInfo;
                    fromAmino(object: _11.SellOrderInfoAmino): _11.SellOrderInfo;
                    toAmino(message: _11.SellOrderInfo): _11.SellOrderInfoAmino;
                    fromAminoMsg(object: _11.SellOrderInfoAminoMsg): _11.SellOrderInfo;
                    fromProtoMsg(message: _11.SellOrderInfoProtoMsg): _11.SellOrderInfo;
                    toProto(message: _11.SellOrderInfo): Uint8Array;
                    toProtoMsg(message: _11.SellOrderInfo): _11.SellOrderInfoProtoMsg;
                };
                EventSell: {
                    typeUrl: string;
                    encode(message: _10.EventSell, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.EventSell;
                    fromPartial(object: Partial<_10.EventSell>): _10.EventSell;
                    fromAmino(object: _10.EventSellAmino): _10.EventSell;
                    toAmino(message: _10.EventSell): _10.EventSellAmino;
                    fromAminoMsg(object: _10.EventSellAminoMsg): _10.EventSell;
                    fromProtoMsg(message: _10.EventSellProtoMsg): _10.EventSell;
                    toProto(message: _10.EventSell): Uint8Array;
                    toProtoMsg(message: _10.EventSell): _10.EventSellProtoMsg;
                };
                EventBuyDirect: {
                    typeUrl: string;
                    encode(message: _10.EventBuyDirect, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.EventBuyDirect;
                    fromPartial(object: Partial<_10.EventBuyDirect>): _10.EventBuyDirect;
                    fromAmino(object: _10.EventBuyDirectAmino): _10.EventBuyDirect;
                    toAmino(message: _10.EventBuyDirect): _10.EventBuyDirectAmino;
                    fromAminoMsg(object: _10.EventBuyDirectAminoMsg): _10.EventBuyDirect;
                    fromProtoMsg(message: _10.EventBuyDirectProtoMsg): _10.EventBuyDirect;
                    toProto(message: _10.EventBuyDirect): Uint8Array;
                    toProtoMsg(message: _10.EventBuyDirect): _10.EventBuyDirectProtoMsg;
                };
                EventUpdateSellOrder: {
                    typeUrl: string;
                    encode(message: _10.EventUpdateSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.EventUpdateSellOrder;
                    fromPartial(object: Partial<_10.EventUpdateSellOrder>): _10.EventUpdateSellOrder;
                    fromAmino(object: _10.EventUpdateSellOrderAmino): _10.EventUpdateSellOrder;
                    toAmino(message: _10.EventUpdateSellOrder): _10.EventUpdateSellOrderAmino;
                    fromAminoMsg(object: _10.EventUpdateSellOrderAminoMsg): _10.EventUpdateSellOrder;
                    fromProtoMsg(message: _10.EventUpdateSellOrderProtoMsg): _10.EventUpdateSellOrder;
                    toProto(message: _10.EventUpdateSellOrder): Uint8Array;
                    toProtoMsg(message: _10.EventUpdateSellOrder): _10.EventUpdateSellOrderProtoMsg;
                };
                EventCancelSellOrder: {
                    typeUrl: string;
                    encode(message: _10.EventCancelSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.EventCancelSellOrder;
                    fromPartial(object: Partial<_10.EventCancelSellOrder>): _10.EventCancelSellOrder;
                    fromAmino(object: _10.EventCancelSellOrderAmino): _10.EventCancelSellOrder;
                    toAmino(message: _10.EventCancelSellOrder): _10.EventCancelSellOrderAmino;
                    fromAminoMsg(object: _10.EventCancelSellOrderAminoMsg): _10.EventCancelSellOrder;
                    fromProtoMsg(message: _10.EventCancelSellOrderProtoMsg): _10.EventCancelSellOrder;
                    toProto(message: _10.EventCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _10.EventCancelSellOrder): _10.EventCancelSellOrderProtoMsg;
                };
                EventAllowDenom: {
                    typeUrl: string;
                    encode(message: _10.EventAllowDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.EventAllowDenom;
                    fromPartial(object: Partial<_10.EventAllowDenom>): _10.EventAllowDenom;
                    fromAmino(object: _10.EventAllowDenomAmino): _10.EventAllowDenom;
                    toAmino(message: _10.EventAllowDenom): _10.EventAllowDenomAmino;
                    fromAminoMsg(object: _10.EventAllowDenomAminoMsg): _10.EventAllowDenom;
                    fromProtoMsg(message: _10.EventAllowDenomProtoMsg): _10.EventAllowDenom;
                    toProto(message: _10.EventAllowDenom): Uint8Array;
                    toProtoMsg(message: _10.EventAllowDenom): _10.EventAllowDenomProtoMsg;
                };
                EventRemoveAllowedDenom: {
                    typeUrl: string;
                    encode(message: _10.EventRemoveAllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _10.EventRemoveAllowedDenom;
                    fromPartial(object: Partial<_10.EventRemoveAllowedDenom>): _10.EventRemoveAllowedDenom;
                    fromAmino(object: _10.EventRemoveAllowedDenomAmino): _10.EventRemoveAllowedDenom;
                    toAmino(message: _10.EventRemoveAllowedDenom): _10.EventRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _10.EventRemoveAllowedDenomAminoMsg): _10.EventRemoveAllowedDenom;
                    fromProtoMsg(message: _10.EventRemoveAllowedDenomProtoMsg): _10.EventRemoveAllowedDenom;
                    toProto(message: _10.EventRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _10.EventRemoveAllowedDenom): _10.EventRemoveAllowedDenomProtoMsg;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    typeUrl: string;
                    encode(message: _15.BuyOrderSellOrderMatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.BuyOrderSellOrderMatch;
                    fromPartial(object: Partial<_15.BuyOrderSellOrderMatch>): _15.BuyOrderSellOrderMatch;
                    fromAmino(object: _15.BuyOrderSellOrderMatchAmino): _15.BuyOrderSellOrderMatch;
                    toAmino(message: _15.BuyOrderSellOrderMatch): _15.BuyOrderSellOrderMatchAmino;
                    fromAminoMsg(object: _15.BuyOrderSellOrderMatchAminoMsg): _15.BuyOrderSellOrderMatch;
                    fromProtoMsg(message: _15.BuyOrderSellOrderMatchProtoMsg): _15.BuyOrderSellOrderMatch;
                    toProto(message: _15.BuyOrderSellOrderMatch): Uint8Array;
                    toProtoMsg(message: _15.BuyOrderSellOrderMatch): _15.BuyOrderSellOrderMatchProtoMsg;
                };
                BuyOrderClassSelector: {
                    typeUrl: string;
                    encode(message: _15.BuyOrderClassSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.BuyOrderClassSelector;
                    fromPartial(object: Partial<_15.BuyOrderClassSelector>): _15.BuyOrderClassSelector;
                    fromAmino(object: _15.BuyOrderClassSelectorAmino): _15.BuyOrderClassSelector;
                    toAmino(message: _15.BuyOrderClassSelector): _15.BuyOrderClassSelectorAmino;
                    fromAminoMsg(object: _15.BuyOrderClassSelectorAminoMsg): _15.BuyOrderClassSelector;
                    fromProtoMsg(message: _15.BuyOrderClassSelectorProtoMsg): _15.BuyOrderClassSelector;
                    toProto(message: _15.BuyOrderClassSelector): Uint8Array;
                    toProtoMsg(message: _15.BuyOrderClassSelector): _15.BuyOrderClassSelectorProtoMsg;
                };
                BuyOrderProjectSelector: {
                    typeUrl: string;
                    encode(message: _15.BuyOrderProjectSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.BuyOrderProjectSelector;
                    fromPartial(object: Partial<_15.BuyOrderProjectSelector>): _15.BuyOrderProjectSelector;
                    fromAmino(object: _15.BuyOrderProjectSelectorAmino): _15.BuyOrderProjectSelector;
                    toAmino(message: _15.BuyOrderProjectSelector): _15.BuyOrderProjectSelectorAmino;
                    fromAminoMsg(object: _15.BuyOrderProjectSelectorAminoMsg): _15.BuyOrderProjectSelector;
                    fromProtoMsg(message: _15.BuyOrderProjectSelectorProtoMsg): _15.BuyOrderProjectSelector;
                    toProto(message: _15.BuyOrderProjectSelector): Uint8Array;
                    toProtoMsg(message: _15.BuyOrderProjectSelector): _15.BuyOrderProjectSelectorProtoMsg;
                };
                BuyOrderBatchSelector: {
                    typeUrl: string;
                    encode(message: _15.BuyOrderBatchSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _15.BuyOrderBatchSelector;
                    fromPartial(object: Partial<_15.BuyOrderBatchSelector>): _15.BuyOrderBatchSelector;
                    fromAmino(object: _15.BuyOrderBatchSelectorAmino): _15.BuyOrderBatchSelector;
                    toAmino(message: _15.BuyOrderBatchSelector): _15.BuyOrderBatchSelectorAmino;
                    fromAminoMsg(object: _15.BuyOrderBatchSelectorAminoMsg): _15.BuyOrderBatchSelector;
                    fromProtoMsg(message: _15.BuyOrderBatchSelectorProtoMsg): _15.BuyOrderBatchSelector;
                    toProto(message: _15.BuyOrderBatchSelector): Uint8Array;
                    toProtoMsg(message: _15.BuyOrderBatchSelector): _15.BuyOrderBatchSelectorProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classes(request?: _17.QueryClassesRequest): Promise<_17.QueryClassesResponse>;
                classesByAdmin(request: _17.QueryClassesByAdminRequest): Promise<_17.QueryClassesByAdminResponse>;
                class(request: _17.QueryClassRequest): Promise<_17.QueryClassResponse>;
                classIssuers(request: _17.QueryClassIssuersRequest): Promise<_17.QueryClassIssuersResponse>;
                projects(request?: _17.QueryProjectsRequest): Promise<_17.QueryProjectsResponse>;
                projectsByClass(request: _17.QueryProjectsByClassRequest): Promise<_17.QueryProjectsByClassResponse>;
                projectsByReferenceId(request: _17.QueryProjectsByReferenceIdRequest): Promise<_17.QueryProjectsByReferenceIdResponse>;
                projectsByAdmin(request: _17.QueryProjectsByAdminRequest): Promise<_17.QueryProjectsByAdminResponse>;
                project(request: _17.QueryProjectRequest): Promise<_17.QueryProjectResponse>;
                batches(request?: _17.QueryBatchesRequest): Promise<_17.QueryBatchesResponse>;
                batchesByIssuer(request: _17.QueryBatchesByIssuerRequest): Promise<_17.QueryBatchesByIssuerResponse>;
                batchesByClass(request: _17.QueryBatchesByClassRequest): Promise<_17.QueryBatchesByClassResponse>;
                batchesByProject(request: _17.QueryBatchesByProjectRequest): Promise<_17.QueryBatchesByProjectResponse>;
                batch(request: _17.QueryBatchRequest): Promise<_17.QueryBatchResponse>;
                balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                balances(request: _17.QueryBalancesRequest): Promise<_17.QueryBalancesResponse>;
                balancesByBatch(request: _17.QueryBalancesByBatchRequest): Promise<_17.QueryBalancesByBatchResponse>;
                allBalances(request?: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                supply(request: _17.QuerySupplyRequest): Promise<_17.QuerySupplyResponse>;
                creditTypes(request?: _17.QueryCreditTypesRequest): Promise<_17.QueryCreditTypesResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                creditType(request: _17.QueryCreditTypeRequest): Promise<_17.QueryCreditTypeResponse>;
                classCreatorAllowlist(request?: _17.QueryClassCreatorAllowlistRequest): Promise<_17.QueryClassCreatorAllowlistResponse>;
                allowedClassCreators(request?: _17.QueryAllowedClassCreatorsRequest): Promise<_17.QueryAllowedClassCreatorsResponse>;
                classFee(request?: _17.QueryClassFeeRequest): Promise<_17.QueryClassFeeResponse>;
                allowedBridgeChains(request?: _17.QueryAllowedBridgeChainsRequest): Promise<_17.QueryAllowedBridgeChainsResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _19.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _19.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _19.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _19.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _19.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _19.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _19.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _19.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _19.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _19.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _19.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _19.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBatchMetadata(value: _19.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridge(value: _19.MsgBridge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridgeReceive(value: _19.MsgBridgeReceive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCreditType(value: _19.MsgAddCreditType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setClassCreatorAllowlist(value: _19.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addClassCreator(value: _19.MsgAddClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeClassCreator(value: _19.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassFee(value: _19.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBridgeChain(value: _19.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAllowedBridgeChain(value: _19.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _19.MsgCreateClass): {
                        typeUrl: string;
                        value: _19.MsgCreateClass;
                    };
                    createProject(value: _19.MsgCreateProject): {
                        typeUrl: string;
                        value: _19.MsgCreateProject;
                    };
                    createBatch(value: _19.MsgCreateBatch): {
                        typeUrl: string;
                        value: _19.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _19.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _19.MsgMintBatchCredits;
                    };
                    sealBatch(value: _19.MsgSealBatch): {
                        typeUrl: string;
                        value: _19.MsgSealBatch;
                    };
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    retire(value: _19.MsgRetire): {
                        typeUrl: string;
                        value: _19.MsgRetire;
                    };
                    cancel(value: _19.MsgCancel): {
                        typeUrl: string;
                        value: _19.MsgCancel;
                    };
                    updateClassAdmin(value: _19.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _19.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _19.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _19.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _19.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _19.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _19.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _19.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _19.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _19.MsgBridge): {
                        typeUrl: string;
                        value: _19.MsgBridge;
                    };
                    bridgeReceive(value: _19.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _19.MsgBridgeReceive;
                    };
                    addCreditType(value: _19.MsgAddCreditType): {
                        typeUrl: string;
                        value: _19.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _19.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _19.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _19.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _19.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _19.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _19.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _19.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _19.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _19.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _19.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _19.MsgRemoveAllowedBridgeChain;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _19.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _19.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _19.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _19.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _19.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _19.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _19.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _19.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _19.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: any): {
                        typeUrl: string;
                        value: _19.MsgUpdateBatchMetadata;
                    };
                    bridge(value: any): {
                        typeUrl: string;
                        value: _19.MsgBridge;
                    };
                    bridgeReceive(value: any): {
                        typeUrl: string;
                        value: _19.MsgBridgeReceive;
                    };
                    addCreditType(value: any): {
                        typeUrl: string;
                        value: _19.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: any): {
                        typeUrl: string;
                        value: _19.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: any): {
                        typeUrl: string;
                        value: _19.MsgAddClassCreator;
                    };
                    removeClassCreator(value: any): {
                        typeUrl: string;
                        value: _19.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: any): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _19.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _19.MsgRemoveAllowedBridgeChain;
                    };
                };
                fromPartial: {
                    createClass(value: _19.MsgCreateClass): {
                        typeUrl: string;
                        value: _19.MsgCreateClass;
                    };
                    createProject(value: _19.MsgCreateProject): {
                        typeUrl: string;
                        value: _19.MsgCreateProject;
                    };
                    createBatch(value: _19.MsgCreateBatch): {
                        typeUrl: string;
                        value: _19.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _19.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _19.MsgMintBatchCredits;
                    };
                    sealBatch(value: _19.MsgSealBatch): {
                        typeUrl: string;
                        value: _19.MsgSealBatch;
                    };
                    send(value: _19.MsgSend): {
                        typeUrl: string;
                        value: _19.MsgSend;
                    };
                    retire(value: _19.MsgRetire): {
                        typeUrl: string;
                        value: _19.MsgRetire;
                    };
                    cancel(value: _19.MsgCancel): {
                        typeUrl: string;
                        value: _19.MsgCancel;
                    };
                    updateClassAdmin(value: _19.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _19.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _19.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _19.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _19.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _19.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _19.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _19.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _19.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _19.MsgBridge): {
                        typeUrl: string;
                        value: _19.MsgBridge;
                    };
                    bridgeReceive(value: _19.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _19.MsgBridgeReceive;
                    };
                    addCreditType(value: _19.MsgAddCreditType): {
                        typeUrl: string;
                        value: _19.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _19.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _19.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _19.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _19.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _19.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _19.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _19.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _19.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _19.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _19.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _19.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _19.MsgRemoveAllowedBridgeChain;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCreateClass) => _19.MsgCreateClassAmino;
                    fromAmino: (object: _19.MsgCreateClassAmino) => _19.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCreateProject) => _19.MsgCreateProjectAmino;
                    fromAmino: (object: _19.MsgCreateProjectAmino) => _19.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCreateBatch) => _19.MsgCreateBatchAmino;
                    fromAmino: (object: _19.MsgCreateBatchAmino) => _19.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: (message: _19.MsgMintBatchCredits) => _19.MsgMintBatchCreditsAmino;
                    fromAmino: (object: _19.MsgMintBatchCreditsAmino) => _19.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: (message: _19.MsgSealBatch) => _19.MsgSealBatchAmino;
                    fromAmino: (object: _19.MsgSealBatchAmino) => _19.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _19.MsgSend) => _19.MsgSendAmino;
                    fromAmino: (object: _19.MsgSendAmino) => _19.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _19.MsgRetire) => _19.MsgRetireAmino;
                    fromAmino: (object: _19.MsgRetireAmino) => _19.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCancel) => _19.MsgCancelAmino;
                    fromAmino: (object: _19.MsgCancelAmino) => _19.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _19.MsgUpdateClassAdmin) => _19.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _19.MsgUpdateClassAdminAmino) => _19.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _19.MsgUpdateClassIssuers) => _19.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _19.MsgUpdateClassIssuersAmino) => _19.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _19.MsgUpdateClassMetadata) => _19.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _19.MsgUpdateClassMetadataAmino) => _19.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: (message: _19.MsgUpdateProjectAdmin) => _19.MsgUpdateProjectAdminAmino;
                    fromAmino: (object: _19.MsgUpdateProjectAdminAmino) => _19.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: (message: _19.MsgUpdateProjectMetadata) => _19.MsgUpdateProjectMetadataAmino;
                    fromAmino: (object: _19.MsgUpdateProjectMetadataAmino) => _19.MsgUpdateProjectMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
                    aminoType: string;
                    toAmino: (message: _19.MsgUpdateBatchMetadata) => _19.MsgUpdateBatchMetadataAmino;
                    fromAmino: (object: _19.MsgUpdateBatchMetadataAmino) => _19.MsgUpdateBatchMetadata;
                };
                "/regen.ecocredit.v1.MsgBridge": {
                    aminoType: string;
                    toAmino: (message: _19.MsgBridge) => _19.MsgBridgeAmino;
                    fromAmino: (object: _19.MsgBridgeAmino) => _19.MsgBridge;
                };
                "/regen.ecocredit.v1.MsgBridgeReceive": {
                    aminoType: string;
                    toAmino: (message: _19.MsgBridgeReceive) => _19.MsgBridgeReceiveAmino;
                    fromAmino: (object: _19.MsgBridgeReceiveAmino) => _19.MsgBridgeReceive;
                };
                "/regen.ecocredit.v1.MsgAddCreditType": {
                    aminoType: string;
                    toAmino: (message: _19.MsgAddCreditType) => _19.MsgAddCreditTypeAmino;
                    fromAmino: (object: _19.MsgAddCreditTypeAmino) => _19.MsgAddCreditType;
                };
                "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
                    aminoType: string;
                    toAmino: (message: _19.MsgSetClassCreatorAllowlist) => _19.MsgSetClassCreatorAllowlistAmino;
                    fromAmino: (object: _19.MsgSetClassCreatorAllowlistAmino) => _19.MsgSetClassCreatorAllowlist;
                };
                "/regen.ecocredit.v1.MsgAddClassCreator": {
                    aminoType: string;
                    toAmino: (message: _19.MsgAddClassCreator) => _19.MsgAddClassCreatorAmino;
                    fromAmino: (object: _19.MsgAddClassCreatorAmino) => _19.MsgAddClassCreator;
                };
                "/regen.ecocredit.v1.MsgRemoveClassCreator": {
                    aminoType: string;
                    toAmino: (message: _19.MsgRemoveClassCreator) => _19.MsgRemoveClassCreatorAmino;
                    fromAmino: (object: _19.MsgRemoveClassCreatorAmino) => _19.MsgRemoveClassCreator;
                };
                "/regen.ecocredit.v1.MsgUpdateClassFee": {
                    aminoType: string;
                    toAmino: (message: _19.MsgUpdateClassFee) => _19.MsgUpdateClassFeeAmino;
                    fromAmino: (object: _19.MsgUpdateClassFeeAmino) => _19.MsgUpdateClassFee;
                };
                "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _19.MsgAddAllowedBridgeChain) => _19.MsgAddAllowedBridgeChainAmino;
                    fromAmino: (object: _19.MsgAddAllowedBridgeChainAmino) => _19.MsgAddAllowedBridgeChain;
                };
                "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _19.MsgRemoveAllowedBridgeChain) => _19.MsgRemoveAllowedBridgeChainAmino;
                    fromAmino: (object: _19.MsgRemoveAllowedBridgeChainAmino) => _19.MsgRemoveAllowedBridgeChain;
                };
            };
            Params: {
                typeUrl: string;
                encode(message: _20.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Params;
                fromPartial(object: Partial<_20.Params>): _20.Params;
                fromAmino(object: _20.ParamsAmino): _20.Params;
                toAmino(message: _20.Params): _20.ParamsAmino;
                fromAminoMsg(object: _20.ParamsAminoMsg): _20.Params;
                fromProtoMsg(message: _20.ParamsProtoMsg): _20.Params;
                toProto(message: _20.Params): Uint8Array;
                toProtoMsg(message: _20.Params): _20.ParamsProtoMsg;
            };
            Credits: {
                typeUrl: string;
                encode(message: _20.Credits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Credits;
                fromPartial(object: Partial<_20.Credits>): _20.Credits;
                fromAmino(object: _20.CreditsAmino): _20.Credits;
                toAmino(message: _20.Credits): _20.CreditsAmino;
                fromAminoMsg(object: _20.CreditsAminoMsg): _20.Credits;
                fromProtoMsg(message: _20.CreditsProtoMsg): _20.Credits;
                toProto(message: _20.Credits): Uint8Array;
                toProtoMsg(message: _20.Credits): _20.CreditsProtoMsg;
            };
            BatchIssuance: {
                typeUrl: string;
                encode(message: _20.BatchIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.BatchIssuance;
                fromPartial(object: Partial<_20.BatchIssuance>): _20.BatchIssuance;
                fromAmino(object: _20.BatchIssuanceAmino): _20.BatchIssuance;
                toAmino(message: _20.BatchIssuance): _20.BatchIssuanceAmino;
                fromAminoMsg(object: _20.BatchIssuanceAminoMsg): _20.BatchIssuance;
                fromProtoMsg(message: _20.BatchIssuanceProtoMsg): _20.BatchIssuance;
                toProto(message: _20.BatchIssuance): Uint8Array;
                toProtoMsg(message: _20.BatchIssuance): _20.BatchIssuanceProtoMsg;
            };
            OriginTx: {
                typeUrl: string;
                encode(message: _20.OriginTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.OriginTx;
                fromPartial(object: Partial<_20.OriginTx>): _20.OriginTx;
                fromAmino(object: _20.OriginTxAmino): _20.OriginTx;
                toAmino(message: _20.OriginTx): _20.OriginTxAmino;
                fromAminoMsg(object: _20.OriginTxAminoMsg): _20.OriginTx;
                fromProtoMsg(message: _20.OriginTxProtoMsg): _20.OriginTx;
                toProto(message: _20.OriginTx): Uint8Array;
                toProtoMsg(message: _20.OriginTx): _20.OriginTxProtoMsg;
            };
            CreditTypeProposal: {
                typeUrl: string;
                encode(message: _20.CreditTypeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.CreditTypeProposal;
                fromPartial(object: Partial<_20.CreditTypeProposal>): _20.CreditTypeProposal;
                fromAmino(object: _20.CreditTypeProposalAmino): _20.CreditTypeProposal;
                toAmino(message: _20.CreditTypeProposal): _20.CreditTypeProposalAmino;
                fromAminoMsg(object: _20.CreditTypeProposalAminoMsg): _20.CreditTypeProposal;
                fromProtoMsg(message: _20.CreditTypeProposalProtoMsg): _20.CreditTypeProposal;
                toProto(message: _20.CreditTypeProposal): Uint8Array;
                toProtoMsg(message: _20.CreditTypeProposal): _20.CreditTypeProposalProtoMsg;
            };
            AllowedDenom: {
                typeUrl: string;
                encode(message: _20.AllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.AllowedDenom;
                fromPartial(object: Partial<_20.AllowedDenom>): _20.AllowedDenom;
                fromAmino(object: _20.AllowedDenomAmino): _20.AllowedDenom;
                toAmino(message: _20.AllowedDenom): _20.AllowedDenomAmino;
                fromAminoMsg(object: _20.AllowedDenomAminoMsg): _20.AllowedDenom;
                fromProtoMsg(message: _20.AllowedDenomProtoMsg): _20.AllowedDenom;
                toProto(message: _20.AllowedDenom): Uint8Array;
                toProtoMsg(message: _20.AllowedDenom): _20.AllowedDenomProtoMsg;
            };
            MsgAddCreditType: {
                typeUrl: string;
                encode(message: _19.MsgAddCreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgAddCreditType;
                fromPartial(object: Partial<_19.MsgAddCreditType>): _19.MsgAddCreditType;
                fromAmino(object: _19.MsgAddCreditTypeAmino): _19.MsgAddCreditType;
                toAmino(message: _19.MsgAddCreditType): _19.MsgAddCreditTypeAmino;
                fromAminoMsg(object: _19.MsgAddCreditTypeAminoMsg): _19.MsgAddCreditType;
                fromProtoMsg(message: _19.MsgAddCreditTypeProtoMsg): _19.MsgAddCreditType;
                toProto(message: _19.MsgAddCreditType): Uint8Array;
                toProtoMsg(message: _19.MsgAddCreditType): _19.MsgAddCreditTypeProtoMsg;
            };
            MsgAddCreditTypeResponse: {
                typeUrl: string;
                encode(_: _19.MsgAddCreditTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgAddCreditTypeResponse;
                fromPartial(_: Partial<_19.MsgAddCreditTypeResponse>): _19.MsgAddCreditTypeResponse;
                fromAmino(_: _19.MsgAddCreditTypeResponseAmino): _19.MsgAddCreditTypeResponse;
                toAmino(_: _19.MsgAddCreditTypeResponse): _19.MsgAddCreditTypeResponseAmino;
                fromAminoMsg(object: _19.MsgAddCreditTypeResponseAminoMsg): _19.MsgAddCreditTypeResponse;
                fromProtoMsg(message: _19.MsgAddCreditTypeResponseProtoMsg): _19.MsgAddCreditTypeResponse;
                toProto(message: _19.MsgAddCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _19.MsgAddCreditTypeResponse): _19.MsgAddCreditTypeResponseProtoMsg;
            };
            MsgCreateClass: {
                typeUrl: string;
                encode(message: _19.MsgCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateClass;
                fromPartial(object: Partial<_19.MsgCreateClass>): _19.MsgCreateClass;
                fromAmino(object: _19.MsgCreateClassAmino): _19.MsgCreateClass;
                toAmino(message: _19.MsgCreateClass): _19.MsgCreateClassAmino;
                fromAminoMsg(object: _19.MsgCreateClassAminoMsg): _19.MsgCreateClass;
                fromProtoMsg(message: _19.MsgCreateClassProtoMsg): _19.MsgCreateClass;
                toProto(message: _19.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _19.MsgCreateClass): _19.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                typeUrl: string;
                encode(message: _19.MsgCreateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateClassResponse;
                fromPartial(object: Partial<_19.MsgCreateClassResponse>): _19.MsgCreateClassResponse;
                fromAmino(object: _19.MsgCreateClassResponseAmino): _19.MsgCreateClassResponse;
                toAmino(message: _19.MsgCreateClassResponse): _19.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _19.MsgCreateClassResponseAminoMsg): _19.MsgCreateClassResponse;
                fromProtoMsg(message: _19.MsgCreateClassResponseProtoMsg): _19.MsgCreateClassResponse;
                toProto(message: _19.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCreateClassResponse): _19.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateProject: {
                typeUrl: string;
                encode(message: _19.MsgCreateProject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateProject;
                fromPartial(object: Partial<_19.MsgCreateProject>): _19.MsgCreateProject;
                fromAmino(object: _19.MsgCreateProjectAmino): _19.MsgCreateProject;
                toAmino(message: _19.MsgCreateProject): _19.MsgCreateProjectAmino;
                fromAminoMsg(object: _19.MsgCreateProjectAminoMsg): _19.MsgCreateProject;
                fromProtoMsg(message: _19.MsgCreateProjectProtoMsg): _19.MsgCreateProject;
                toProto(message: _19.MsgCreateProject): Uint8Array;
                toProtoMsg(message: _19.MsgCreateProject): _19.MsgCreateProjectProtoMsg;
            };
            MsgCreateProjectResponse: {
                typeUrl: string;
                encode(message: _19.MsgCreateProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateProjectResponse;
                fromPartial(object: Partial<_19.MsgCreateProjectResponse>): _19.MsgCreateProjectResponse;
                fromAmino(object: _19.MsgCreateProjectResponseAmino): _19.MsgCreateProjectResponse;
                toAmino(message: _19.MsgCreateProjectResponse): _19.MsgCreateProjectResponseAmino;
                fromAminoMsg(object: _19.MsgCreateProjectResponseAminoMsg): _19.MsgCreateProjectResponse;
                fromProtoMsg(message: _19.MsgCreateProjectResponseProtoMsg): _19.MsgCreateProjectResponse;
                toProto(message: _19.MsgCreateProjectResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCreateProjectResponse): _19.MsgCreateProjectResponseProtoMsg;
            };
            MsgCreateBatch: {
                typeUrl: string;
                encode(message: _19.MsgCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateBatch;
                fromPartial(object: Partial<_19.MsgCreateBatch>): _19.MsgCreateBatch;
                fromAmino(object: _19.MsgCreateBatchAmino): _19.MsgCreateBatch;
                toAmino(message: _19.MsgCreateBatch): _19.MsgCreateBatchAmino;
                fromAminoMsg(object: _19.MsgCreateBatchAminoMsg): _19.MsgCreateBatch;
                fromProtoMsg(message: _19.MsgCreateBatchProtoMsg): _19.MsgCreateBatch;
                toProto(message: _19.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _19.MsgCreateBatch): _19.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatchResponse: {
                typeUrl: string;
                encode(message: _19.MsgCreateBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateBatchResponse;
                fromPartial(object: Partial<_19.MsgCreateBatchResponse>): _19.MsgCreateBatchResponse;
                fromAmino(object: _19.MsgCreateBatchResponseAmino): _19.MsgCreateBatchResponse;
                toAmino(message: _19.MsgCreateBatchResponse): _19.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _19.MsgCreateBatchResponseAminoMsg): _19.MsgCreateBatchResponse;
                fromProtoMsg(message: _19.MsgCreateBatchResponseProtoMsg): _19.MsgCreateBatchResponse;
                toProto(message: _19.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCreateBatchResponse): _19.MsgCreateBatchResponseProtoMsg;
            };
            MsgMintBatchCredits: {
                typeUrl: string;
                encode(message: _19.MsgMintBatchCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgMintBatchCredits;
                fromPartial(object: Partial<_19.MsgMintBatchCredits>): _19.MsgMintBatchCredits;
                fromAmino(object: _19.MsgMintBatchCreditsAmino): _19.MsgMintBatchCredits;
                toAmino(message: _19.MsgMintBatchCredits): _19.MsgMintBatchCreditsAmino;
                fromAminoMsg(object: _19.MsgMintBatchCreditsAminoMsg): _19.MsgMintBatchCredits;
                fromProtoMsg(message: _19.MsgMintBatchCreditsProtoMsg): _19.MsgMintBatchCredits;
                toProto(message: _19.MsgMintBatchCredits): Uint8Array;
                toProtoMsg(message: _19.MsgMintBatchCredits): _19.MsgMintBatchCreditsProtoMsg;
            };
            MsgMintBatchCreditsResponse: {
                typeUrl: string;
                encode(_: _19.MsgMintBatchCreditsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgMintBatchCreditsResponse;
                fromPartial(_: Partial<_19.MsgMintBatchCreditsResponse>): _19.MsgMintBatchCreditsResponse;
                fromAmino(_: _19.MsgMintBatchCreditsResponseAmino): _19.MsgMintBatchCreditsResponse;
                toAmino(_: _19.MsgMintBatchCreditsResponse): _19.MsgMintBatchCreditsResponseAmino;
                fromAminoMsg(object: _19.MsgMintBatchCreditsResponseAminoMsg): _19.MsgMintBatchCreditsResponse;
                fromProtoMsg(message: _19.MsgMintBatchCreditsResponseProtoMsg): _19.MsgMintBatchCreditsResponse;
                toProto(message: _19.MsgMintBatchCreditsResponse): Uint8Array;
                toProtoMsg(message: _19.MsgMintBatchCreditsResponse): _19.MsgMintBatchCreditsResponseProtoMsg;
            };
            MsgSealBatch: {
                typeUrl: string;
                encode(message: _19.MsgSealBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgSealBatch;
                fromPartial(object: Partial<_19.MsgSealBatch>): _19.MsgSealBatch;
                fromAmino(object: _19.MsgSealBatchAmino): _19.MsgSealBatch;
                toAmino(message: _19.MsgSealBatch): _19.MsgSealBatchAmino;
                fromAminoMsg(object: _19.MsgSealBatchAminoMsg): _19.MsgSealBatch;
                fromProtoMsg(message: _19.MsgSealBatchProtoMsg): _19.MsgSealBatch;
                toProto(message: _19.MsgSealBatch): Uint8Array;
                toProtoMsg(message: _19.MsgSealBatch): _19.MsgSealBatchProtoMsg;
            };
            MsgSealBatchResponse: {
                typeUrl: string;
                encode(_: _19.MsgSealBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgSealBatchResponse;
                fromPartial(_: Partial<_19.MsgSealBatchResponse>): _19.MsgSealBatchResponse;
                fromAmino(_: _19.MsgSealBatchResponseAmino): _19.MsgSealBatchResponse;
                toAmino(_: _19.MsgSealBatchResponse): _19.MsgSealBatchResponseAmino;
                fromAminoMsg(object: _19.MsgSealBatchResponseAminoMsg): _19.MsgSealBatchResponse;
                fromProtoMsg(message: _19.MsgSealBatchResponseProtoMsg): _19.MsgSealBatchResponse;
                toProto(message: _19.MsgSealBatchResponse): Uint8Array;
                toProtoMsg(message: _19.MsgSealBatchResponse): _19.MsgSealBatchResponseProtoMsg;
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _19.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgSend;
                fromPartial(object: Partial<_19.MsgSend>): _19.MsgSend;
                fromAmino(object: _19.MsgSendAmino): _19.MsgSend;
                toAmino(message: _19.MsgSend): _19.MsgSendAmino;
                fromAminoMsg(object: _19.MsgSendAminoMsg): _19.MsgSend;
                fromProtoMsg(message: _19.MsgSendProtoMsg): _19.MsgSend;
                toProto(message: _19.MsgSend): Uint8Array;
                toProtoMsg(message: _19.MsgSend): _19.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                typeUrl: string;
                encode(message: _19.MsgSend_SendCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgSend_SendCredits;
                fromPartial(object: Partial<_19.MsgSend_SendCredits>): _19.MsgSend_SendCredits;
                fromAmino(object: _19.MsgSend_SendCreditsAmino): _19.MsgSend_SendCredits;
                toAmino(message: _19.MsgSend_SendCredits): _19.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _19.MsgSend_SendCreditsAminoMsg): _19.MsgSend_SendCredits;
                fromProtoMsg(message: _19.MsgSend_SendCreditsProtoMsg): _19.MsgSend_SendCredits;
                toProto(message: _19.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _19.MsgSend_SendCredits): _19.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _19.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgSendResponse;
                fromPartial(_: Partial<_19.MsgSendResponse>): _19.MsgSendResponse;
                fromAmino(_: _19.MsgSendResponseAmino): _19.MsgSendResponse;
                toAmino(_: _19.MsgSendResponse): _19.MsgSendResponseAmino;
                fromAminoMsg(object: _19.MsgSendResponseAminoMsg): _19.MsgSendResponse;
                fromProtoMsg(message: _19.MsgSendResponseProtoMsg): _19.MsgSendResponse;
                toProto(message: _19.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _19.MsgSendResponse): _19.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                typeUrl: string;
                encode(message: _19.MsgRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgRetire;
                fromPartial(object: Partial<_19.MsgRetire>): _19.MsgRetire;
                fromAmino(object: _19.MsgRetireAmino): _19.MsgRetire;
                toAmino(message: _19.MsgRetire): _19.MsgRetireAmino;
                fromAminoMsg(object: _19.MsgRetireAminoMsg): _19.MsgRetire;
                fromProtoMsg(message: _19.MsgRetireProtoMsg): _19.MsgRetire;
                toProto(message: _19.MsgRetire): Uint8Array;
                toProtoMsg(message: _19.MsgRetire): _19.MsgRetireProtoMsg;
            };
            MsgRetireResponse: {
                typeUrl: string;
                encode(_: _19.MsgRetireResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgRetireResponse;
                fromPartial(_: Partial<_19.MsgRetireResponse>): _19.MsgRetireResponse;
                fromAmino(_: _19.MsgRetireResponseAmino): _19.MsgRetireResponse;
                toAmino(_: _19.MsgRetireResponse): _19.MsgRetireResponseAmino;
                fromAminoMsg(object: _19.MsgRetireResponseAminoMsg): _19.MsgRetireResponse;
                fromProtoMsg(message: _19.MsgRetireResponseProtoMsg): _19.MsgRetireResponse;
                toProto(message: _19.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _19.MsgRetireResponse): _19.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                typeUrl: string;
                encode(message: _19.MsgCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCancel;
                fromPartial(object: Partial<_19.MsgCancel>): _19.MsgCancel;
                fromAmino(object: _19.MsgCancelAmino): _19.MsgCancel;
                toAmino(message: _19.MsgCancel): _19.MsgCancelAmino;
                fromAminoMsg(object: _19.MsgCancelAminoMsg): _19.MsgCancel;
                fromProtoMsg(message: _19.MsgCancelProtoMsg): _19.MsgCancel;
                toProto(message: _19.MsgCancel): Uint8Array;
                toProtoMsg(message: _19.MsgCancel): _19.MsgCancelProtoMsg;
            };
            MsgCancelResponse: {
                typeUrl: string;
                encode(_: _19.MsgCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgCancelResponse;
                fromPartial(_: Partial<_19.MsgCancelResponse>): _19.MsgCancelResponse;
                fromAmino(_: _19.MsgCancelResponseAmino): _19.MsgCancelResponse;
                toAmino(_: _19.MsgCancelResponse): _19.MsgCancelResponseAmino;
                fromAminoMsg(object: _19.MsgCancelResponseAminoMsg): _19.MsgCancelResponse;
                fromProtoMsg(message: _19.MsgCancelResponseProtoMsg): _19.MsgCancelResponse;
                toProto(message: _19.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCancelResponse): _19.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _19.MsgUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgUpdateClassAdmin;
                fromPartial(object: Partial<_19.MsgUpdateClassAdmin>): _19.MsgUpdateClassAdmin;
                fromAmino(object: _19.MsgUpdateClassAdminAmino): _19.MsgUpdateClassAdmin;
                toAmino(message: _19.MsgUpdateClassAdmin): _19.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _19.MsgUpdateClassAdminAminoMsg): _19.MsgUpdateClassAdmin;
                fromProtoMsg(message: _19.MsgUpdateClassAdminProtoMsg): _19.MsgUpdateClassAdmin;
                toProto(message: _19.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateClassAdmin): _19.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                typeUrl: string;
                encode(_: _19.MsgUpdateClassAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgUpdateClassAdminResponse;
                fromPartial(_: Partial<_19.MsgUpdateClassAdminResponse>): _19.MsgUpdateClassAdminResponse;
                fromAmino(_: _19.MsgUpdateClassAdminResponseAmino): _19.MsgUpdateClassAdminResponse;
                toAmino(_: _19.MsgUpdateClassAdminResponse): _19.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _19.MsgUpdateClassAdminResponseAminoMsg): _19.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _19.MsgUpdateClassAdminResponseProtoMsg): _19.MsgUpdateClassAdminResponse;
                toProto(message: _19.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateClassAdminResponse): _19.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _19.MsgUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgUpdateClassIssuers;
                fromPartial(object: Partial<_19.MsgUpdateClassIssuers>): _19.MsgUpdateClassIssuers;
                fromAmino(object: _19.MsgUpdateClassIssuersAmino): _19.MsgUpdateClassIssuers;
                toAmino(message: _19.MsgUpdateClassIssuers): _19.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _19.MsgUpdateClassIssuersAminoMsg): _19.MsgUpdateClassIssuers;
                fromProtoMsg(message: _19.MsgUpdateClassIssuersProtoMsg): _19.MsgUpdateClassIssuers;
                toProto(message: _19.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateClassIssuers): _19.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                typeUrl: string;
                encode(_: _19.MsgUpdateClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgUpdateClassIssuersResponse;
                fromPartial(_: Partial<_19.MsgUpdateClassIssuersResponse>): _19.MsgUpdateClassIssuersResponse;
                fromAmino(_: _19.MsgUpdateClassIssuersResponseAmino): _19.MsgUpdateClassIssuersResponse;
                toAmino(_: _19.MsgUpdateClassIssuersResponse): _19.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _19.MsgUpdateClassIssuersResponseAminoMsg): _19.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _19.MsgUpdateClassIssuersResponseProtoMsg): _19.MsgUpdateClassIssuersResponse;
                toProto(message: _19.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateClassIssuersResponse): _19.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _19.MsgUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgUpdateClassMetadata;
                fromPartial(object: Partial<_19.MsgUpdateClassMetadata>): _19.MsgUpdateClassMetadata;
                fromAmino(object: _19.MsgUpdateClassMetadataAmino): _19.MsgUpdateClassMetadata;
                toAmino(message: _19.MsgUpdateClassMetadata): _19.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _19.MsgUpdateClassMetadataAminoMsg): _19.MsgUpdateClassMetadata;
                fromProtoMsg(message: _19.MsgUpdateClassMetadataProtoMsg): _19.MsgUpdateClassMetadata;
                toProto(message: _19.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateClassMetadata): _19.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                typeUrl: string;
                encode(_: _19.MsgUpdateClassMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgUpdateClassMetadataResponse;
                fromPartial(_: Partial<_19.MsgUpdateClassMetadataResponse>): _19.MsgUpdateClassMetadataResponse;
                fromAmino(_: _19.MsgUpdateClassMetadataResponseAmino): _19.MsgUpdateClassMetadataResponse;
                toAmino(_: _19.MsgUpdateClassMetadataResponse): _19.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _19.MsgUpdateClassMetadataResponseAminoMsg): _19.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _19.MsgUpdateClassMetadataResponseProtoMsg): _19.MsgUpdateClassMetadataResponse;
                toProto(message: _19.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateClassMetadataResponse): _19.MsgUpdateClassMetadataResponseProtoMsg;
            };
            MsgUpdateProjectAdmin: {
                typeUrl: string;
                encode(message: _19.MsgUpdateProjectAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgUpdateProjectAdmin;
                fromPartial(object: Partial<_19.MsgUpdateProjectAdmin>): _19.MsgUpdateProjectAdmin;
                fromAmino(object: _19.MsgUpdateProjectAdminAmino): _19.MsgUpdateProjectAdmin;
                toAmino(message: _19.MsgUpdateProjectAdmin): _19.MsgUpdateProjectAdminAmino;
                fromAminoMsg(object: _19.MsgUpdateProjectAdminAminoMsg): _19.MsgUpdateProjectAdmin;
                fromProtoMsg(message: _19.MsgUpdateProjectAdminProtoMsg): _19.MsgUpdateProjectAdmin;
                toProto(message: _19.MsgUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateProjectAdmin): _19.MsgUpdateProjectAdminProtoMsg;
            };
            MsgUpdateProjectAdminResponse: {
                typeUrl: string;
                encode(_: _19.MsgUpdateProjectAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgUpdateProjectAdminResponse;
                fromPartial(_: Partial<_19.MsgUpdateProjectAdminResponse>): _19.MsgUpdateProjectAdminResponse;
                fromAmino(_: _19.MsgUpdateProjectAdminResponseAmino): _19.MsgUpdateProjectAdminResponse;
                toAmino(_: _19.MsgUpdateProjectAdminResponse): _19.MsgUpdateProjectAdminResponseAmino;
                fromAminoMsg(object: _19.MsgUpdateProjectAdminResponseAminoMsg): _19.MsgUpdateProjectAdminResponse;
                fromProtoMsg(message: _19.MsgUpdateProjectAdminResponseProtoMsg): _19.MsgUpdateProjectAdminResponse;
                toProto(message: _19.MsgUpdateProjectAdminResponse): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateProjectAdminResponse): _19.MsgUpdateProjectAdminResponseProtoMsg;
            };
            MsgUpdateProjectMetadata: {
                typeUrl: string;
                encode(message: _19.MsgUpdateProjectMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgUpdateProjectMetadata;
                fromPartial(object: Partial<_19.MsgUpdateProjectMetadata>): _19.MsgUpdateProjectMetadata;
                fromAmino(object: _19.MsgUpdateProjectMetadataAmino): _19.MsgUpdateProjectMetadata;
                toAmino(message: _19.MsgUpdateProjectMetadata): _19.MsgUpdateProjectMetadataAmino;
                fromAminoMsg(object: _19.MsgUpdateProjectMetadataAminoMsg): _19.MsgUpdateProjectMetadata;
                fromProtoMsg(message: _19.MsgUpdateProjectMetadataProtoMsg): _19.MsgUpdateProjectMetadata;
                toProto(message: _19.MsgUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateProjectMetadata): _19.MsgUpdateProjectMetadataProtoMsg;
            };
            MsgUpdateProjectMetadataResponse: {
                typeUrl: string;
                encode(_: _19.MsgUpdateProjectMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgUpdateProjectMetadataResponse;
                fromPartial(_: Partial<_19.MsgUpdateProjectMetadataResponse>): _19.MsgUpdateProjectMetadataResponse;
                fromAmino(_: _19.MsgUpdateProjectMetadataResponseAmino): _19.MsgUpdateProjectMetadataResponse;
                toAmino(_: _19.MsgUpdateProjectMetadataResponse): _19.MsgUpdateProjectMetadataResponseAmino;
                fromAminoMsg(object: _19.MsgUpdateProjectMetadataResponseAminoMsg): _19.MsgUpdateProjectMetadataResponse;
                fromProtoMsg(message: _19.MsgUpdateProjectMetadataResponseProtoMsg): _19.MsgUpdateProjectMetadataResponse;
                toProto(message: _19.MsgUpdateProjectMetadataResponse): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateProjectMetadataResponse): _19.MsgUpdateProjectMetadataResponseProtoMsg;
            };
            MsgBridge: {
                typeUrl: string;
                encode(message: _19.MsgBridge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgBridge;
                fromPartial(object: Partial<_19.MsgBridge>): _19.MsgBridge;
                fromAmino(object: _19.MsgBridgeAmino): _19.MsgBridge;
                toAmino(message: _19.MsgBridge): _19.MsgBridgeAmino;
                fromAminoMsg(object: _19.MsgBridgeAminoMsg): _19.MsgBridge;
                fromProtoMsg(message: _19.MsgBridgeProtoMsg): _19.MsgBridge;
                toProto(message: _19.MsgBridge): Uint8Array;
                toProtoMsg(message: _19.MsgBridge): _19.MsgBridgeProtoMsg;
            };
            MsgUpdateBatchMetadata: {
                typeUrl: string;
                encode(message: _19.MsgUpdateBatchMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgUpdateBatchMetadata;
                fromPartial(object: Partial<_19.MsgUpdateBatchMetadata>): _19.MsgUpdateBatchMetadata;
                fromAmino(object: _19.MsgUpdateBatchMetadataAmino): _19.MsgUpdateBatchMetadata;
                toAmino(message: _19.MsgUpdateBatchMetadata): _19.MsgUpdateBatchMetadataAmino;
                fromAminoMsg(object: _19.MsgUpdateBatchMetadataAminoMsg): _19.MsgUpdateBatchMetadata;
                fromProtoMsg(message: _19.MsgUpdateBatchMetadataProtoMsg): _19.MsgUpdateBatchMetadata;
                toProto(message: _19.MsgUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateBatchMetadata): _19.MsgUpdateBatchMetadataProtoMsg;
            };
            MsgUpdateBatchMetadataResponse: {
                typeUrl: string;
                encode(_: _19.MsgUpdateBatchMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgUpdateBatchMetadataResponse;
                fromPartial(_: Partial<_19.MsgUpdateBatchMetadataResponse>): _19.MsgUpdateBatchMetadataResponse;
                fromAmino(_: _19.MsgUpdateBatchMetadataResponseAmino): _19.MsgUpdateBatchMetadataResponse;
                toAmino(_: _19.MsgUpdateBatchMetadataResponse): _19.MsgUpdateBatchMetadataResponseAmino;
                fromAminoMsg(object: _19.MsgUpdateBatchMetadataResponseAminoMsg): _19.MsgUpdateBatchMetadataResponse;
                fromProtoMsg(message: _19.MsgUpdateBatchMetadataResponseProtoMsg): _19.MsgUpdateBatchMetadataResponse;
                toProto(message: _19.MsgUpdateBatchMetadataResponse): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateBatchMetadataResponse): _19.MsgUpdateBatchMetadataResponseProtoMsg;
            };
            MsgBridgeResponse: {
                typeUrl: string;
                encode(_: _19.MsgBridgeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgBridgeResponse;
                fromPartial(_: Partial<_19.MsgBridgeResponse>): _19.MsgBridgeResponse;
                fromAmino(_: _19.MsgBridgeResponseAmino): _19.MsgBridgeResponse;
                toAmino(_: _19.MsgBridgeResponse): _19.MsgBridgeResponseAmino;
                fromAminoMsg(object: _19.MsgBridgeResponseAminoMsg): _19.MsgBridgeResponse;
                fromProtoMsg(message: _19.MsgBridgeResponseProtoMsg): _19.MsgBridgeResponse;
                toProto(message: _19.MsgBridgeResponse): Uint8Array;
                toProtoMsg(message: _19.MsgBridgeResponse): _19.MsgBridgeResponseProtoMsg;
            };
            MsgBridgeReceive: {
                typeUrl: string;
                encode(message: _19.MsgBridgeReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgBridgeReceive;
                fromPartial(object: Partial<_19.MsgBridgeReceive>): _19.MsgBridgeReceive;
                fromAmino(object: _19.MsgBridgeReceiveAmino): _19.MsgBridgeReceive;
                toAmino(message: _19.MsgBridgeReceive): _19.MsgBridgeReceiveAmino;
                fromAminoMsg(object: _19.MsgBridgeReceiveAminoMsg): _19.MsgBridgeReceive;
                fromProtoMsg(message: _19.MsgBridgeReceiveProtoMsg): _19.MsgBridgeReceive;
                toProto(message: _19.MsgBridgeReceive): Uint8Array;
                toProtoMsg(message: _19.MsgBridgeReceive): _19.MsgBridgeReceiveProtoMsg;
            };
            MsgBridgeReceive_Batch: {
                typeUrl: string;
                encode(message: _19.MsgBridgeReceive_Batch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgBridgeReceive_Batch;
                fromPartial(object: Partial<_19.MsgBridgeReceive_Batch>): _19.MsgBridgeReceive_Batch;
                fromAmino(object: _19.MsgBridgeReceive_BatchAmino): _19.MsgBridgeReceive_Batch;
                toAmino(message: _19.MsgBridgeReceive_Batch): _19.MsgBridgeReceive_BatchAmino;
                fromAminoMsg(object: _19.MsgBridgeReceive_BatchAminoMsg): _19.MsgBridgeReceive_Batch;
                fromProtoMsg(message: _19.MsgBridgeReceive_BatchProtoMsg): _19.MsgBridgeReceive_Batch;
                toProto(message: _19.MsgBridgeReceive_Batch): Uint8Array;
                toProtoMsg(message: _19.MsgBridgeReceive_Batch): _19.MsgBridgeReceive_BatchProtoMsg;
            };
            MsgBridgeReceive_Project: {
                typeUrl: string;
                encode(message: _19.MsgBridgeReceive_Project, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgBridgeReceive_Project;
                fromPartial(object: Partial<_19.MsgBridgeReceive_Project>): _19.MsgBridgeReceive_Project;
                fromAmino(object: _19.MsgBridgeReceive_ProjectAmino): _19.MsgBridgeReceive_Project;
                toAmino(message: _19.MsgBridgeReceive_Project): _19.MsgBridgeReceive_ProjectAmino;
                fromAminoMsg(object: _19.MsgBridgeReceive_ProjectAminoMsg): _19.MsgBridgeReceive_Project;
                fromProtoMsg(message: _19.MsgBridgeReceive_ProjectProtoMsg): _19.MsgBridgeReceive_Project;
                toProto(message: _19.MsgBridgeReceive_Project): Uint8Array;
                toProtoMsg(message: _19.MsgBridgeReceive_Project): _19.MsgBridgeReceive_ProjectProtoMsg;
            };
            MsgBridgeReceiveResponse: {
                typeUrl: string;
                encode(message: _19.MsgBridgeReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgBridgeReceiveResponse;
                fromPartial(object: Partial<_19.MsgBridgeReceiveResponse>): _19.MsgBridgeReceiveResponse;
                fromAmino(object: _19.MsgBridgeReceiveResponseAmino): _19.MsgBridgeReceiveResponse;
                toAmino(message: _19.MsgBridgeReceiveResponse): _19.MsgBridgeReceiveResponseAmino;
                fromAminoMsg(object: _19.MsgBridgeReceiveResponseAminoMsg): _19.MsgBridgeReceiveResponse;
                fromProtoMsg(message: _19.MsgBridgeReceiveResponseProtoMsg): _19.MsgBridgeReceiveResponse;
                toProto(message: _19.MsgBridgeReceiveResponse): Uint8Array;
                toProtoMsg(message: _19.MsgBridgeReceiveResponse): _19.MsgBridgeReceiveResponseProtoMsg;
            };
            MsgAddClassCreator: {
                typeUrl: string;
                encode(message: _19.MsgAddClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgAddClassCreator;
                fromPartial(object: Partial<_19.MsgAddClassCreator>): _19.MsgAddClassCreator;
                fromAmino(object: _19.MsgAddClassCreatorAmino): _19.MsgAddClassCreator;
                toAmino(message: _19.MsgAddClassCreator): _19.MsgAddClassCreatorAmino;
                fromAminoMsg(object: _19.MsgAddClassCreatorAminoMsg): _19.MsgAddClassCreator;
                fromProtoMsg(message: _19.MsgAddClassCreatorProtoMsg): _19.MsgAddClassCreator;
                toProto(message: _19.MsgAddClassCreator): Uint8Array;
                toProtoMsg(message: _19.MsgAddClassCreator): _19.MsgAddClassCreatorProtoMsg;
            };
            MsgAddClassCreatorResponse: {
                typeUrl: string;
                encode(_: _19.MsgAddClassCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgAddClassCreatorResponse;
                fromPartial(_: Partial<_19.MsgAddClassCreatorResponse>): _19.MsgAddClassCreatorResponse;
                fromAmino(_: _19.MsgAddClassCreatorResponseAmino): _19.MsgAddClassCreatorResponse;
                toAmino(_: _19.MsgAddClassCreatorResponse): _19.MsgAddClassCreatorResponseAmino;
                fromAminoMsg(object: _19.MsgAddClassCreatorResponseAminoMsg): _19.MsgAddClassCreatorResponse;
                fromProtoMsg(message: _19.MsgAddClassCreatorResponseProtoMsg): _19.MsgAddClassCreatorResponse;
                toProto(message: _19.MsgAddClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _19.MsgAddClassCreatorResponse): _19.MsgAddClassCreatorResponseProtoMsg;
            };
            MsgSetClassCreatorAllowlist: {
                typeUrl: string;
                encode(message: _19.MsgSetClassCreatorAllowlist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgSetClassCreatorAllowlist;
                fromPartial(object: Partial<_19.MsgSetClassCreatorAllowlist>): _19.MsgSetClassCreatorAllowlist;
                fromAmino(object: _19.MsgSetClassCreatorAllowlistAmino): _19.MsgSetClassCreatorAllowlist;
                toAmino(message: _19.MsgSetClassCreatorAllowlist): _19.MsgSetClassCreatorAllowlistAmino;
                fromAminoMsg(object: _19.MsgSetClassCreatorAllowlistAminoMsg): _19.MsgSetClassCreatorAllowlist;
                fromProtoMsg(message: _19.MsgSetClassCreatorAllowlistProtoMsg): _19.MsgSetClassCreatorAllowlist;
                toProto(message: _19.MsgSetClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _19.MsgSetClassCreatorAllowlist): _19.MsgSetClassCreatorAllowlistProtoMsg;
            };
            MsgSetClassCreatorAllowlistResponse: {
                typeUrl: string;
                encode(_: _19.MsgSetClassCreatorAllowlistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgSetClassCreatorAllowlistResponse;
                fromPartial(_: Partial<_19.MsgSetClassCreatorAllowlistResponse>): _19.MsgSetClassCreatorAllowlistResponse;
                fromAmino(_: _19.MsgSetClassCreatorAllowlistResponseAmino): _19.MsgSetClassCreatorAllowlistResponse;
                toAmino(_: _19.MsgSetClassCreatorAllowlistResponse): _19.MsgSetClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _19.MsgSetClassCreatorAllowlistResponseAminoMsg): _19.MsgSetClassCreatorAllowlistResponse;
                fromProtoMsg(message: _19.MsgSetClassCreatorAllowlistResponseProtoMsg): _19.MsgSetClassCreatorAllowlistResponse;
                toProto(message: _19.MsgSetClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _19.MsgSetClassCreatorAllowlistResponse): _19.MsgSetClassCreatorAllowlistResponseProtoMsg;
            };
            MsgRemoveClassCreator: {
                typeUrl: string;
                encode(message: _19.MsgRemoveClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgRemoveClassCreator;
                fromPartial(object: Partial<_19.MsgRemoveClassCreator>): _19.MsgRemoveClassCreator;
                fromAmino(object: _19.MsgRemoveClassCreatorAmino): _19.MsgRemoveClassCreator;
                toAmino(message: _19.MsgRemoveClassCreator): _19.MsgRemoveClassCreatorAmino;
                fromAminoMsg(object: _19.MsgRemoveClassCreatorAminoMsg): _19.MsgRemoveClassCreator;
                fromProtoMsg(message: _19.MsgRemoveClassCreatorProtoMsg): _19.MsgRemoveClassCreator;
                toProto(message: _19.MsgRemoveClassCreator): Uint8Array;
                toProtoMsg(message: _19.MsgRemoveClassCreator): _19.MsgRemoveClassCreatorProtoMsg;
            };
            MsgRemoveClassCreatorResponse: {
                typeUrl: string;
                encode(_: _19.MsgRemoveClassCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgRemoveClassCreatorResponse;
                fromPartial(_: Partial<_19.MsgRemoveClassCreatorResponse>): _19.MsgRemoveClassCreatorResponse;
                fromAmino(_: _19.MsgRemoveClassCreatorResponseAmino): _19.MsgRemoveClassCreatorResponse;
                toAmino(_: _19.MsgRemoveClassCreatorResponse): _19.MsgRemoveClassCreatorResponseAmino;
                fromAminoMsg(object: _19.MsgRemoveClassCreatorResponseAminoMsg): _19.MsgRemoveClassCreatorResponse;
                fromProtoMsg(message: _19.MsgRemoveClassCreatorResponseProtoMsg): _19.MsgRemoveClassCreatorResponse;
                toProto(message: _19.MsgRemoveClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _19.MsgRemoveClassCreatorResponse): _19.MsgRemoveClassCreatorResponseProtoMsg;
            };
            MsgUpdateClassFee: {
                typeUrl: string;
                encode(message: _19.MsgUpdateClassFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgUpdateClassFee;
                fromPartial(object: Partial<_19.MsgUpdateClassFee>): _19.MsgUpdateClassFee;
                fromAmino(object: _19.MsgUpdateClassFeeAmino): _19.MsgUpdateClassFee;
                toAmino(message: _19.MsgUpdateClassFee): _19.MsgUpdateClassFeeAmino;
                fromAminoMsg(object: _19.MsgUpdateClassFeeAminoMsg): _19.MsgUpdateClassFee;
                fromProtoMsg(message: _19.MsgUpdateClassFeeProtoMsg): _19.MsgUpdateClassFee;
                toProto(message: _19.MsgUpdateClassFee): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateClassFee): _19.MsgUpdateClassFeeProtoMsg;
            };
            MsgUpdateClassFeeResponse: {
                typeUrl: string;
                encode(_: _19.MsgUpdateClassFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgUpdateClassFeeResponse;
                fromPartial(_: Partial<_19.MsgUpdateClassFeeResponse>): _19.MsgUpdateClassFeeResponse;
                fromAmino(_: _19.MsgUpdateClassFeeResponseAmino): _19.MsgUpdateClassFeeResponse;
                toAmino(_: _19.MsgUpdateClassFeeResponse): _19.MsgUpdateClassFeeResponseAmino;
                fromAminoMsg(object: _19.MsgUpdateClassFeeResponseAminoMsg): _19.MsgUpdateClassFeeResponse;
                fromProtoMsg(message: _19.MsgUpdateClassFeeResponseProtoMsg): _19.MsgUpdateClassFeeResponse;
                toProto(message: _19.MsgUpdateClassFeeResponse): Uint8Array;
                toProtoMsg(message: _19.MsgUpdateClassFeeResponse): _19.MsgUpdateClassFeeResponseProtoMsg;
            };
            MsgAddAllowedBridgeChain: {
                typeUrl: string;
                encode(message: _19.MsgAddAllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgAddAllowedBridgeChain;
                fromPartial(object: Partial<_19.MsgAddAllowedBridgeChain>): _19.MsgAddAllowedBridgeChain;
                fromAmino(object: _19.MsgAddAllowedBridgeChainAmino): _19.MsgAddAllowedBridgeChain;
                toAmino(message: _19.MsgAddAllowedBridgeChain): _19.MsgAddAllowedBridgeChainAmino;
                fromAminoMsg(object: _19.MsgAddAllowedBridgeChainAminoMsg): _19.MsgAddAllowedBridgeChain;
                fromProtoMsg(message: _19.MsgAddAllowedBridgeChainProtoMsg): _19.MsgAddAllowedBridgeChain;
                toProto(message: _19.MsgAddAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _19.MsgAddAllowedBridgeChain): _19.MsgAddAllowedBridgeChainProtoMsg;
            };
            MsgAddAllowedBridgeChainResponse: {
                typeUrl: string;
                encode(_: _19.MsgAddAllowedBridgeChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgAddAllowedBridgeChainResponse;
                fromPartial(_: Partial<_19.MsgAddAllowedBridgeChainResponse>): _19.MsgAddAllowedBridgeChainResponse;
                fromAmino(_: _19.MsgAddAllowedBridgeChainResponseAmino): _19.MsgAddAllowedBridgeChainResponse;
                toAmino(_: _19.MsgAddAllowedBridgeChainResponse): _19.MsgAddAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _19.MsgAddAllowedBridgeChainResponseAminoMsg): _19.MsgAddAllowedBridgeChainResponse;
                fromProtoMsg(message: _19.MsgAddAllowedBridgeChainResponseProtoMsg): _19.MsgAddAllowedBridgeChainResponse;
                toProto(message: _19.MsgAddAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _19.MsgAddAllowedBridgeChainResponse): _19.MsgAddAllowedBridgeChainResponseProtoMsg;
            };
            MsgRemoveAllowedBridgeChain: {
                typeUrl: string;
                encode(message: _19.MsgRemoveAllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgRemoveAllowedBridgeChain;
                fromPartial(object: Partial<_19.MsgRemoveAllowedBridgeChain>): _19.MsgRemoveAllowedBridgeChain;
                fromAmino(object: _19.MsgRemoveAllowedBridgeChainAmino): _19.MsgRemoveAllowedBridgeChain;
                toAmino(message: _19.MsgRemoveAllowedBridgeChain): _19.MsgRemoveAllowedBridgeChainAmino;
                fromAminoMsg(object: _19.MsgRemoveAllowedBridgeChainAminoMsg): _19.MsgRemoveAllowedBridgeChain;
                fromProtoMsg(message: _19.MsgRemoveAllowedBridgeChainProtoMsg): _19.MsgRemoveAllowedBridgeChain;
                toProto(message: _19.MsgRemoveAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _19.MsgRemoveAllowedBridgeChain): _19.MsgRemoveAllowedBridgeChainProtoMsg;
            };
            MsgRemoveAllowedBridgeChainResponse: {
                typeUrl: string;
                encode(_: _19.MsgRemoveAllowedBridgeChainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgRemoveAllowedBridgeChainResponse;
                fromPartial(_: Partial<_19.MsgRemoveAllowedBridgeChainResponse>): _19.MsgRemoveAllowedBridgeChainResponse;
                fromAmino(_: _19.MsgRemoveAllowedBridgeChainResponseAmino): _19.MsgRemoveAllowedBridgeChainResponse;
                toAmino(_: _19.MsgRemoveAllowedBridgeChainResponse): _19.MsgRemoveAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _19.MsgRemoveAllowedBridgeChainResponseAminoMsg): _19.MsgRemoveAllowedBridgeChainResponse;
                fromProtoMsg(message: _19.MsgRemoveAllowedBridgeChainResponseProtoMsg): _19.MsgRemoveAllowedBridgeChainResponse;
                toProto(message: _19.MsgRemoveAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _19.MsgRemoveAllowedBridgeChainResponse): _19.MsgRemoveAllowedBridgeChainResponseProtoMsg;
            };
            CreditType: {
                typeUrl: string;
                encode(message: _18.CreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.CreditType;
                fromPartial(object: Partial<_18.CreditType>): _18.CreditType;
                fromAmino(object: _18.CreditTypeAmino): _18.CreditType;
                toAmino(message: _18.CreditType): _18.CreditTypeAmino;
                fromAminoMsg(object: _18.CreditTypeAminoMsg): _18.CreditType;
                fromProtoMsg(message: _18.CreditTypeProtoMsg): _18.CreditType;
                toProto(message: _18.CreditType): Uint8Array;
                toProtoMsg(message: _18.CreditType): _18.CreditTypeProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _18.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Class;
                fromPartial(object: Partial<_18.Class>): _18.Class;
                fromAmino(object: _18.ClassAmino): _18.Class;
                toAmino(message: _18.Class): _18.ClassAmino;
                fromAminoMsg(object: _18.ClassAminoMsg): _18.Class;
                fromProtoMsg(message: _18.ClassProtoMsg): _18.Class;
                toProto(message: _18.Class): Uint8Array;
                toProtoMsg(message: _18.Class): _18.ClassProtoMsg;
            };
            ClassIssuer: {
                typeUrl: string;
                encode(message: _18.ClassIssuer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ClassIssuer;
                fromPartial(object: Partial<_18.ClassIssuer>): _18.ClassIssuer;
                fromAmino(object: _18.ClassIssuerAmino): _18.ClassIssuer;
                toAmino(message: _18.ClassIssuer): _18.ClassIssuerAmino;
                fromAminoMsg(object: _18.ClassIssuerAminoMsg): _18.ClassIssuer;
                fromProtoMsg(message: _18.ClassIssuerProtoMsg): _18.ClassIssuer;
                toProto(message: _18.ClassIssuer): Uint8Array;
                toProtoMsg(message: _18.ClassIssuer): _18.ClassIssuerProtoMsg;
            };
            Project: {
                typeUrl: string;
                encode(message: _18.Project, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Project;
                fromPartial(object: Partial<_18.Project>): _18.Project;
                fromAmino(object: _18.ProjectAmino): _18.Project;
                toAmino(message: _18.Project): _18.ProjectAmino;
                fromAminoMsg(object: _18.ProjectAminoMsg): _18.Project;
                fromProtoMsg(message: _18.ProjectProtoMsg): _18.Project;
                toProto(message: _18.Project): Uint8Array;
                toProtoMsg(message: _18.Project): _18.ProjectProtoMsg;
            };
            Batch: {
                typeUrl: string;
                encode(message: _18.Batch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Batch;
                fromPartial(object: Partial<_18.Batch>): _18.Batch;
                fromAmino(object: _18.BatchAmino): _18.Batch;
                toAmino(message: _18.Batch): _18.BatchAmino;
                fromAminoMsg(object: _18.BatchAminoMsg): _18.Batch;
                fromProtoMsg(message: _18.BatchProtoMsg): _18.Batch;
                toProto(message: _18.Batch): Uint8Array;
                toProtoMsg(message: _18.Batch): _18.BatchProtoMsg;
            };
            ClassSequence: {
                typeUrl: string;
                encode(message: _18.ClassSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ClassSequence;
                fromPartial(object: Partial<_18.ClassSequence>): _18.ClassSequence;
                fromAmino(object: _18.ClassSequenceAmino): _18.ClassSequence;
                toAmino(message: _18.ClassSequence): _18.ClassSequenceAmino;
                fromAminoMsg(object: _18.ClassSequenceAminoMsg): _18.ClassSequence;
                fromProtoMsg(message: _18.ClassSequenceProtoMsg): _18.ClassSequence;
                toProto(message: _18.ClassSequence): Uint8Array;
                toProtoMsg(message: _18.ClassSequence): _18.ClassSequenceProtoMsg;
            };
            ProjectSequence: {
                typeUrl: string;
                encode(message: _18.ProjectSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ProjectSequence;
                fromPartial(object: Partial<_18.ProjectSequence>): _18.ProjectSequence;
                fromAmino(object: _18.ProjectSequenceAmino): _18.ProjectSequence;
                toAmino(message: _18.ProjectSequence): _18.ProjectSequenceAmino;
                fromAminoMsg(object: _18.ProjectSequenceAminoMsg): _18.ProjectSequence;
                fromProtoMsg(message: _18.ProjectSequenceProtoMsg): _18.ProjectSequence;
                toProto(message: _18.ProjectSequence): Uint8Array;
                toProtoMsg(message: _18.ProjectSequence): _18.ProjectSequenceProtoMsg;
            };
            BatchSequence: {
                typeUrl: string;
                encode(message: _18.BatchSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.BatchSequence;
                fromPartial(object: Partial<_18.BatchSequence>): _18.BatchSequence;
                fromAmino(object: _18.BatchSequenceAmino): _18.BatchSequence;
                toAmino(message: _18.BatchSequence): _18.BatchSequenceAmino;
                fromAminoMsg(object: _18.BatchSequenceAminoMsg): _18.BatchSequence;
                fromProtoMsg(message: _18.BatchSequenceProtoMsg): _18.BatchSequence;
                toProto(message: _18.BatchSequence): Uint8Array;
                toProtoMsg(message: _18.BatchSequence): _18.BatchSequenceProtoMsg;
            };
            BatchBalance: {
                typeUrl: string;
                encode(message: _18.BatchBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.BatchBalance;
                fromPartial(object: Partial<_18.BatchBalance>): _18.BatchBalance;
                fromAmino(object: _18.BatchBalanceAmino): _18.BatchBalance;
                toAmino(message: _18.BatchBalance): _18.BatchBalanceAmino;
                fromAminoMsg(object: _18.BatchBalanceAminoMsg): _18.BatchBalance;
                fromProtoMsg(message: _18.BatchBalanceProtoMsg): _18.BatchBalance;
                toProto(message: _18.BatchBalance): Uint8Array;
                toProtoMsg(message: _18.BatchBalance): _18.BatchBalanceProtoMsg;
            };
            BatchSupply: {
                typeUrl: string;
                encode(message: _18.BatchSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.BatchSupply;
                fromPartial(object: Partial<_18.BatchSupply>): _18.BatchSupply;
                fromAmino(object: _18.BatchSupplyAmino): _18.BatchSupply;
                toAmino(message: _18.BatchSupply): _18.BatchSupplyAmino;
                fromAminoMsg(object: _18.BatchSupplyAminoMsg): _18.BatchSupply;
                fromProtoMsg(message: _18.BatchSupplyProtoMsg): _18.BatchSupply;
                toProto(message: _18.BatchSupply): Uint8Array;
                toProtoMsg(message: _18.BatchSupply): _18.BatchSupplyProtoMsg;
            };
            OriginTxIndex: {
                typeUrl: string;
                encode(message: _18.OriginTxIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.OriginTxIndex;
                fromPartial(object: Partial<_18.OriginTxIndex>): _18.OriginTxIndex;
                fromAmino(object: _18.OriginTxIndexAmino): _18.OriginTxIndex;
                toAmino(message: _18.OriginTxIndex): _18.OriginTxIndexAmino;
                fromAminoMsg(object: _18.OriginTxIndexAminoMsg): _18.OriginTxIndex;
                fromProtoMsg(message: _18.OriginTxIndexProtoMsg): _18.OriginTxIndex;
                toProto(message: _18.OriginTxIndex): Uint8Array;
                toProtoMsg(message: _18.OriginTxIndex): _18.OriginTxIndexProtoMsg;
            };
            BatchContract: {
                typeUrl: string;
                encode(message: _18.BatchContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.BatchContract;
                fromPartial(object: Partial<_18.BatchContract>): _18.BatchContract;
                fromAmino(object: _18.BatchContractAmino): _18.BatchContract;
                toAmino(message: _18.BatchContract): _18.BatchContractAmino;
                fromAminoMsg(object: _18.BatchContractAminoMsg): _18.BatchContract;
                fromProtoMsg(message: _18.BatchContractProtoMsg): _18.BatchContract;
                toProto(message: _18.BatchContract): Uint8Array;
                toProtoMsg(message: _18.BatchContract): _18.BatchContractProtoMsg;
            };
            ClassCreatorAllowlist: {
                typeUrl: string;
                encode(message: _18.ClassCreatorAllowlist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ClassCreatorAllowlist;
                fromPartial(object: Partial<_18.ClassCreatorAllowlist>): _18.ClassCreatorAllowlist;
                fromAmino(object: _18.ClassCreatorAllowlistAmino): _18.ClassCreatorAllowlist;
                toAmino(message: _18.ClassCreatorAllowlist): _18.ClassCreatorAllowlistAmino;
                fromAminoMsg(object: _18.ClassCreatorAllowlistAminoMsg): _18.ClassCreatorAllowlist;
                fromProtoMsg(message: _18.ClassCreatorAllowlistProtoMsg): _18.ClassCreatorAllowlist;
                toProto(message: _18.ClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _18.ClassCreatorAllowlist): _18.ClassCreatorAllowlistProtoMsg;
            };
            AllowedClassCreator: {
                typeUrl: string;
                encode(message: _18.AllowedClassCreator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.AllowedClassCreator;
                fromPartial(object: Partial<_18.AllowedClassCreator>): _18.AllowedClassCreator;
                fromAmino(object: _18.AllowedClassCreatorAmino): _18.AllowedClassCreator;
                toAmino(message: _18.AllowedClassCreator): _18.AllowedClassCreatorAmino;
                fromAminoMsg(object: _18.AllowedClassCreatorAminoMsg): _18.AllowedClassCreator;
                fromProtoMsg(message: _18.AllowedClassCreatorProtoMsg): _18.AllowedClassCreator;
                toProto(message: _18.AllowedClassCreator): Uint8Array;
                toProtoMsg(message: _18.AllowedClassCreator): _18.AllowedClassCreatorProtoMsg;
            };
            ClassFee: {
                typeUrl: string;
                encode(message: _18.ClassFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.ClassFee;
                fromPartial(object: Partial<_18.ClassFee>): _18.ClassFee;
                fromAmino(object: _18.ClassFeeAmino): _18.ClassFee;
                toAmino(message: _18.ClassFee): _18.ClassFeeAmino;
                fromAminoMsg(object: _18.ClassFeeAminoMsg): _18.ClassFee;
                fromProtoMsg(message: _18.ClassFeeProtoMsg): _18.ClassFee;
                toProto(message: _18.ClassFee): Uint8Array;
                toProtoMsg(message: _18.ClassFee): _18.ClassFeeProtoMsg;
            };
            AllowedBridgeChain: {
                typeUrl: string;
                encode(message: _18.AllowedBridgeChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.AllowedBridgeChain;
                fromPartial(object: Partial<_18.AllowedBridgeChain>): _18.AllowedBridgeChain;
                fromAmino(object: _18.AllowedBridgeChainAmino): _18.AllowedBridgeChain;
                toAmino(message: _18.AllowedBridgeChain): _18.AllowedBridgeChainAmino;
                fromAminoMsg(object: _18.AllowedBridgeChainAminoMsg): _18.AllowedBridgeChain;
                fromProtoMsg(message: _18.AllowedBridgeChainProtoMsg): _18.AllowedBridgeChain;
                toProto(message: _18.AllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _18.AllowedBridgeChain): _18.AllowedBridgeChainProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _17.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassesRequest;
                fromPartial(object: Partial<_17.QueryClassesRequest>): _17.QueryClassesRequest;
                fromAmino(object: _17.QueryClassesRequestAmino): _17.QueryClassesRequest;
                toAmino(message: _17.QueryClassesRequest): _17.QueryClassesRequestAmino;
                fromAminoMsg(object: _17.QueryClassesRequestAminoMsg): _17.QueryClassesRequest;
                fromProtoMsg(message: _17.QueryClassesRequestProtoMsg): _17.QueryClassesRequest;
                toProto(message: _17.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _17.QueryClassesRequest): _17.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _17.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassesResponse;
                fromPartial(object: Partial<_17.QueryClassesResponse>): _17.QueryClassesResponse;
                fromAmino(object: _17.QueryClassesResponseAmino): _17.QueryClassesResponse;
                toAmino(message: _17.QueryClassesResponse): _17.QueryClassesResponseAmino;
                fromAminoMsg(object: _17.QueryClassesResponseAminoMsg): _17.QueryClassesResponse;
                fromProtoMsg(message: _17.QueryClassesResponseProtoMsg): _17.QueryClassesResponse;
                toProto(message: _17.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryClassesResponse): _17.QueryClassesResponseProtoMsg;
            };
            QueryClassesByAdminRequest: {
                typeUrl: string;
                encode(message: _17.QueryClassesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassesByAdminRequest;
                fromPartial(object: Partial<_17.QueryClassesByAdminRequest>): _17.QueryClassesByAdminRequest;
                fromAmino(object: _17.QueryClassesByAdminRequestAmino): _17.QueryClassesByAdminRequest;
                toAmino(message: _17.QueryClassesByAdminRequest): _17.QueryClassesByAdminRequestAmino;
                fromAminoMsg(object: _17.QueryClassesByAdminRequestAminoMsg): _17.QueryClassesByAdminRequest;
                fromProtoMsg(message: _17.QueryClassesByAdminRequestProtoMsg): _17.QueryClassesByAdminRequest;
                toProto(message: _17.QueryClassesByAdminRequest): Uint8Array;
                toProtoMsg(message: _17.QueryClassesByAdminRequest): _17.QueryClassesByAdminRequestProtoMsg;
            };
            QueryClassesByAdminResponse: {
                typeUrl: string;
                encode(message: _17.QueryClassesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassesByAdminResponse;
                fromPartial(object: Partial<_17.QueryClassesByAdminResponse>): _17.QueryClassesByAdminResponse;
                fromAmino(object: _17.QueryClassesByAdminResponseAmino): _17.QueryClassesByAdminResponse;
                toAmino(message: _17.QueryClassesByAdminResponse): _17.QueryClassesByAdminResponseAmino;
                fromAminoMsg(object: _17.QueryClassesByAdminResponseAminoMsg): _17.QueryClassesByAdminResponse;
                fromProtoMsg(message: _17.QueryClassesByAdminResponseProtoMsg): _17.QueryClassesByAdminResponse;
                toProto(message: _17.QueryClassesByAdminResponse): Uint8Array;
                toProtoMsg(message: _17.QueryClassesByAdminResponse): _17.QueryClassesByAdminResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _17.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassRequest;
                fromPartial(object: Partial<_17.QueryClassRequest>): _17.QueryClassRequest;
                fromAmino(object: _17.QueryClassRequestAmino): _17.QueryClassRequest;
                toAmino(message: _17.QueryClassRequest): _17.QueryClassRequestAmino;
                fromAminoMsg(object: _17.QueryClassRequestAminoMsg): _17.QueryClassRequest;
                fromProtoMsg(message: _17.QueryClassRequestProtoMsg): _17.QueryClassRequest;
                toProto(message: _17.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _17.QueryClassRequest): _17.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _17.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassResponse;
                fromPartial(object: Partial<_17.QueryClassResponse>): _17.QueryClassResponse;
                fromAmino(object: _17.QueryClassResponseAmino): _17.QueryClassResponse;
                toAmino(message: _17.QueryClassResponse): _17.QueryClassResponseAmino;
                fromAminoMsg(object: _17.QueryClassResponseAminoMsg): _17.QueryClassResponse;
                fromProtoMsg(message: _17.QueryClassResponseProtoMsg): _17.QueryClassResponse;
                toProto(message: _17.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _17.QueryClassResponse): _17.QueryClassResponseProtoMsg;
            };
            QueryClassIssuersRequest: {
                typeUrl: string;
                encode(message: _17.QueryClassIssuersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassIssuersRequest;
                fromPartial(object: Partial<_17.QueryClassIssuersRequest>): _17.QueryClassIssuersRequest;
                fromAmino(object: _17.QueryClassIssuersRequestAmino): _17.QueryClassIssuersRequest;
                toAmino(message: _17.QueryClassIssuersRequest): _17.QueryClassIssuersRequestAmino;
                fromAminoMsg(object: _17.QueryClassIssuersRequestAminoMsg): _17.QueryClassIssuersRequest;
                fromProtoMsg(message: _17.QueryClassIssuersRequestProtoMsg): _17.QueryClassIssuersRequest;
                toProto(message: _17.QueryClassIssuersRequest): Uint8Array;
                toProtoMsg(message: _17.QueryClassIssuersRequest): _17.QueryClassIssuersRequestProtoMsg;
            };
            QueryClassIssuersResponse: {
                typeUrl: string;
                encode(message: _17.QueryClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassIssuersResponse;
                fromPartial(object: Partial<_17.QueryClassIssuersResponse>): _17.QueryClassIssuersResponse;
                fromAmino(object: _17.QueryClassIssuersResponseAmino): _17.QueryClassIssuersResponse;
                toAmino(message: _17.QueryClassIssuersResponse): _17.QueryClassIssuersResponseAmino;
                fromAminoMsg(object: _17.QueryClassIssuersResponseAminoMsg): _17.QueryClassIssuersResponse;
                fromProtoMsg(message: _17.QueryClassIssuersResponseProtoMsg): _17.QueryClassIssuersResponse;
                toProto(message: _17.QueryClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _17.QueryClassIssuersResponse): _17.QueryClassIssuersResponseProtoMsg;
            };
            QueryProjectsRequest: {
                typeUrl: string;
                encode(message: _17.QueryProjectsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectsRequest;
                fromPartial(object: Partial<_17.QueryProjectsRequest>): _17.QueryProjectsRequest;
                fromAmino(object: _17.QueryProjectsRequestAmino): _17.QueryProjectsRequest;
                toAmino(message: _17.QueryProjectsRequest): _17.QueryProjectsRequestAmino;
                fromAminoMsg(object: _17.QueryProjectsRequestAminoMsg): _17.QueryProjectsRequest;
                fromProtoMsg(message: _17.QueryProjectsRequestProtoMsg): _17.QueryProjectsRequest;
                toProto(message: _17.QueryProjectsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryProjectsRequest): _17.QueryProjectsRequestProtoMsg;
            };
            QueryProjectsResponse: {
                typeUrl: string;
                encode(message: _17.QueryProjectsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectsResponse;
                fromPartial(object: Partial<_17.QueryProjectsResponse>): _17.QueryProjectsResponse;
                fromAmino(object: _17.QueryProjectsResponseAmino): _17.QueryProjectsResponse;
                toAmino(message: _17.QueryProjectsResponse): _17.QueryProjectsResponseAmino;
                fromAminoMsg(object: _17.QueryProjectsResponseAminoMsg): _17.QueryProjectsResponse;
                fromProtoMsg(message: _17.QueryProjectsResponseProtoMsg): _17.QueryProjectsResponse;
                toProto(message: _17.QueryProjectsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryProjectsResponse): _17.QueryProjectsResponseProtoMsg;
            };
            QueryProjectsByClassRequest: {
                typeUrl: string;
                encode(message: _17.QueryProjectsByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectsByClassRequest;
                fromPartial(object: Partial<_17.QueryProjectsByClassRequest>): _17.QueryProjectsByClassRequest;
                fromAmino(object: _17.QueryProjectsByClassRequestAmino): _17.QueryProjectsByClassRequest;
                toAmino(message: _17.QueryProjectsByClassRequest): _17.QueryProjectsByClassRequestAmino;
                fromAminoMsg(object: _17.QueryProjectsByClassRequestAminoMsg): _17.QueryProjectsByClassRequest;
                fromProtoMsg(message: _17.QueryProjectsByClassRequestProtoMsg): _17.QueryProjectsByClassRequest;
                toProto(message: _17.QueryProjectsByClassRequest): Uint8Array;
                toProtoMsg(message: _17.QueryProjectsByClassRequest): _17.QueryProjectsByClassRequestProtoMsg;
            };
            QueryProjectsByClassResponse: {
                typeUrl: string;
                encode(message: _17.QueryProjectsByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectsByClassResponse;
                fromPartial(object: Partial<_17.QueryProjectsByClassResponse>): _17.QueryProjectsByClassResponse;
                fromAmino(object: _17.QueryProjectsByClassResponseAmino): _17.QueryProjectsByClassResponse;
                toAmino(message: _17.QueryProjectsByClassResponse): _17.QueryProjectsByClassResponseAmino;
                fromAminoMsg(object: _17.QueryProjectsByClassResponseAminoMsg): _17.QueryProjectsByClassResponse;
                fromProtoMsg(message: _17.QueryProjectsByClassResponseProtoMsg): _17.QueryProjectsByClassResponse;
                toProto(message: _17.QueryProjectsByClassResponse): Uint8Array;
                toProtoMsg(message: _17.QueryProjectsByClassResponse): _17.QueryProjectsByClassResponseProtoMsg;
            };
            QueryProjectsByReferenceIdRequest: {
                typeUrl: string;
                encode(message: _17.QueryProjectsByReferenceIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectsByReferenceIdRequest;
                fromPartial(object: Partial<_17.QueryProjectsByReferenceIdRequest>): _17.QueryProjectsByReferenceIdRequest;
                fromAmino(object: _17.QueryProjectsByReferenceIdRequestAmino): _17.QueryProjectsByReferenceIdRequest;
                toAmino(message: _17.QueryProjectsByReferenceIdRequest): _17.QueryProjectsByReferenceIdRequestAmino;
                fromAminoMsg(object: _17.QueryProjectsByReferenceIdRequestAminoMsg): _17.QueryProjectsByReferenceIdRequest;
                fromProtoMsg(message: _17.QueryProjectsByReferenceIdRequestProtoMsg): _17.QueryProjectsByReferenceIdRequest;
                toProto(message: _17.QueryProjectsByReferenceIdRequest): Uint8Array;
                toProtoMsg(message: _17.QueryProjectsByReferenceIdRequest): _17.QueryProjectsByReferenceIdRequestProtoMsg;
            };
            QueryProjectsByReferenceIdResponse: {
                typeUrl: string;
                encode(message: _17.QueryProjectsByReferenceIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectsByReferenceIdResponse;
                fromPartial(object: Partial<_17.QueryProjectsByReferenceIdResponse>): _17.QueryProjectsByReferenceIdResponse;
                fromAmino(object: _17.QueryProjectsByReferenceIdResponseAmino): _17.QueryProjectsByReferenceIdResponse;
                toAmino(message: _17.QueryProjectsByReferenceIdResponse): _17.QueryProjectsByReferenceIdResponseAmino;
                fromAminoMsg(object: _17.QueryProjectsByReferenceIdResponseAminoMsg): _17.QueryProjectsByReferenceIdResponse;
                fromProtoMsg(message: _17.QueryProjectsByReferenceIdResponseProtoMsg): _17.QueryProjectsByReferenceIdResponse;
                toProto(message: _17.QueryProjectsByReferenceIdResponse): Uint8Array;
                toProtoMsg(message: _17.QueryProjectsByReferenceIdResponse): _17.QueryProjectsByReferenceIdResponseProtoMsg;
            };
            QueryProjectsByAdminRequest: {
                typeUrl: string;
                encode(message: _17.QueryProjectsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectsByAdminRequest;
                fromPartial(object: Partial<_17.QueryProjectsByAdminRequest>): _17.QueryProjectsByAdminRequest;
                fromAmino(object: _17.QueryProjectsByAdminRequestAmino): _17.QueryProjectsByAdminRequest;
                toAmino(message: _17.QueryProjectsByAdminRequest): _17.QueryProjectsByAdminRequestAmino;
                fromAminoMsg(object: _17.QueryProjectsByAdminRequestAminoMsg): _17.QueryProjectsByAdminRequest;
                fromProtoMsg(message: _17.QueryProjectsByAdminRequestProtoMsg): _17.QueryProjectsByAdminRequest;
                toProto(message: _17.QueryProjectsByAdminRequest): Uint8Array;
                toProtoMsg(message: _17.QueryProjectsByAdminRequest): _17.QueryProjectsByAdminRequestProtoMsg;
            };
            QueryProjectsByAdminResponse: {
                typeUrl: string;
                encode(message: _17.QueryProjectsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectsByAdminResponse;
                fromPartial(object: Partial<_17.QueryProjectsByAdminResponse>): _17.QueryProjectsByAdminResponse;
                fromAmino(object: _17.QueryProjectsByAdminResponseAmino): _17.QueryProjectsByAdminResponse;
                toAmino(message: _17.QueryProjectsByAdminResponse): _17.QueryProjectsByAdminResponseAmino;
                fromAminoMsg(object: _17.QueryProjectsByAdminResponseAminoMsg): _17.QueryProjectsByAdminResponse;
                fromProtoMsg(message: _17.QueryProjectsByAdminResponseProtoMsg): _17.QueryProjectsByAdminResponse;
                toProto(message: _17.QueryProjectsByAdminResponse): Uint8Array;
                toProtoMsg(message: _17.QueryProjectsByAdminResponse): _17.QueryProjectsByAdminResponseProtoMsg;
            };
            QueryProjectRequest: {
                typeUrl: string;
                encode(message: _17.QueryProjectRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectRequest;
                fromPartial(object: Partial<_17.QueryProjectRequest>): _17.QueryProjectRequest;
                fromAmino(object: _17.QueryProjectRequestAmino): _17.QueryProjectRequest;
                toAmino(message: _17.QueryProjectRequest): _17.QueryProjectRequestAmino;
                fromAminoMsg(object: _17.QueryProjectRequestAminoMsg): _17.QueryProjectRequest;
                fromProtoMsg(message: _17.QueryProjectRequestProtoMsg): _17.QueryProjectRequest;
                toProto(message: _17.QueryProjectRequest): Uint8Array;
                toProtoMsg(message: _17.QueryProjectRequest): _17.QueryProjectRequestProtoMsg;
            };
            QueryProjectResponse: {
                typeUrl: string;
                encode(message: _17.QueryProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryProjectResponse;
                fromPartial(object: Partial<_17.QueryProjectResponse>): _17.QueryProjectResponse;
                fromAmino(object: _17.QueryProjectResponseAmino): _17.QueryProjectResponse;
                toAmino(message: _17.QueryProjectResponse): _17.QueryProjectResponseAmino;
                fromAminoMsg(object: _17.QueryProjectResponseAminoMsg): _17.QueryProjectResponse;
                fromProtoMsg(message: _17.QueryProjectResponseProtoMsg): _17.QueryProjectResponse;
                toProto(message: _17.QueryProjectResponse): Uint8Array;
                toProtoMsg(message: _17.QueryProjectResponse): _17.QueryProjectResponseProtoMsg;
            };
            QueryBatchesRequest: {
                typeUrl: string;
                encode(message: _17.QueryBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchesRequest;
                fromPartial(object: Partial<_17.QueryBatchesRequest>): _17.QueryBatchesRequest;
                fromAmino(object: _17.QueryBatchesRequestAmino): _17.QueryBatchesRequest;
                toAmino(message: _17.QueryBatchesRequest): _17.QueryBatchesRequestAmino;
                fromAminoMsg(object: _17.QueryBatchesRequestAminoMsg): _17.QueryBatchesRequest;
                fromProtoMsg(message: _17.QueryBatchesRequestProtoMsg): _17.QueryBatchesRequest;
                toProto(message: _17.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBatchesRequest): _17.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                typeUrl: string;
                encode(message: _17.QueryBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchesResponse;
                fromPartial(object: Partial<_17.QueryBatchesResponse>): _17.QueryBatchesResponse;
                fromAmino(object: _17.QueryBatchesResponseAmino): _17.QueryBatchesResponse;
                toAmino(message: _17.QueryBatchesResponse): _17.QueryBatchesResponseAmino;
                fromAminoMsg(object: _17.QueryBatchesResponseAminoMsg): _17.QueryBatchesResponse;
                fromProtoMsg(message: _17.QueryBatchesResponseProtoMsg): _17.QueryBatchesResponse;
                toProto(message: _17.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBatchesResponse): _17.QueryBatchesResponseProtoMsg;
            };
            QueryBatchesByIssuerRequest: {
                typeUrl: string;
                encode(message: _17.QueryBatchesByIssuerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchesByIssuerRequest;
                fromPartial(object: Partial<_17.QueryBatchesByIssuerRequest>): _17.QueryBatchesByIssuerRequest;
                fromAmino(object: _17.QueryBatchesByIssuerRequestAmino): _17.QueryBatchesByIssuerRequest;
                toAmino(message: _17.QueryBatchesByIssuerRequest): _17.QueryBatchesByIssuerRequestAmino;
                fromAminoMsg(object: _17.QueryBatchesByIssuerRequestAminoMsg): _17.QueryBatchesByIssuerRequest;
                fromProtoMsg(message: _17.QueryBatchesByIssuerRequestProtoMsg): _17.QueryBatchesByIssuerRequest;
                toProto(message: _17.QueryBatchesByIssuerRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBatchesByIssuerRequest): _17.QueryBatchesByIssuerRequestProtoMsg;
            };
            QueryBatchesByIssuerResponse: {
                typeUrl: string;
                encode(message: _17.QueryBatchesByIssuerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchesByIssuerResponse;
                fromPartial(object: Partial<_17.QueryBatchesByIssuerResponse>): _17.QueryBatchesByIssuerResponse;
                fromAmino(object: _17.QueryBatchesByIssuerResponseAmino): _17.QueryBatchesByIssuerResponse;
                toAmino(message: _17.QueryBatchesByIssuerResponse): _17.QueryBatchesByIssuerResponseAmino;
                fromAminoMsg(object: _17.QueryBatchesByIssuerResponseAminoMsg): _17.QueryBatchesByIssuerResponse;
                fromProtoMsg(message: _17.QueryBatchesByIssuerResponseProtoMsg): _17.QueryBatchesByIssuerResponse;
                toProto(message: _17.QueryBatchesByIssuerResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBatchesByIssuerResponse): _17.QueryBatchesByIssuerResponseProtoMsg;
            };
            QueryBatchesByClassRequest: {
                typeUrl: string;
                encode(message: _17.QueryBatchesByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchesByClassRequest;
                fromPartial(object: Partial<_17.QueryBatchesByClassRequest>): _17.QueryBatchesByClassRequest;
                fromAmino(object: _17.QueryBatchesByClassRequestAmino): _17.QueryBatchesByClassRequest;
                toAmino(message: _17.QueryBatchesByClassRequest): _17.QueryBatchesByClassRequestAmino;
                fromAminoMsg(object: _17.QueryBatchesByClassRequestAminoMsg): _17.QueryBatchesByClassRequest;
                fromProtoMsg(message: _17.QueryBatchesByClassRequestProtoMsg): _17.QueryBatchesByClassRequest;
                toProto(message: _17.QueryBatchesByClassRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBatchesByClassRequest): _17.QueryBatchesByClassRequestProtoMsg;
            };
            QueryBatchesByProjectRequest: {
                typeUrl: string;
                encode(message: _17.QueryBatchesByProjectRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchesByProjectRequest;
                fromPartial(object: Partial<_17.QueryBatchesByProjectRequest>): _17.QueryBatchesByProjectRequest;
                fromAmino(object: _17.QueryBatchesByProjectRequestAmino): _17.QueryBatchesByProjectRequest;
                toAmino(message: _17.QueryBatchesByProjectRequest): _17.QueryBatchesByProjectRequestAmino;
                fromAminoMsg(object: _17.QueryBatchesByProjectRequestAminoMsg): _17.QueryBatchesByProjectRequest;
                fromProtoMsg(message: _17.QueryBatchesByProjectRequestProtoMsg): _17.QueryBatchesByProjectRequest;
                toProto(message: _17.QueryBatchesByProjectRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBatchesByProjectRequest): _17.QueryBatchesByProjectRequestProtoMsg;
            };
            QueryBatchesByProjectResponse: {
                typeUrl: string;
                encode(message: _17.QueryBatchesByProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchesByProjectResponse;
                fromPartial(object: Partial<_17.QueryBatchesByProjectResponse>): _17.QueryBatchesByProjectResponse;
                fromAmino(object: _17.QueryBatchesByProjectResponseAmino): _17.QueryBatchesByProjectResponse;
                toAmino(message: _17.QueryBatchesByProjectResponse): _17.QueryBatchesByProjectResponseAmino;
                fromAminoMsg(object: _17.QueryBatchesByProjectResponseAminoMsg): _17.QueryBatchesByProjectResponse;
                fromProtoMsg(message: _17.QueryBatchesByProjectResponseProtoMsg): _17.QueryBatchesByProjectResponse;
                toProto(message: _17.QueryBatchesByProjectResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBatchesByProjectResponse): _17.QueryBatchesByProjectResponseProtoMsg;
            };
            QueryBatchesByClassResponse: {
                typeUrl: string;
                encode(message: _17.QueryBatchesByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchesByClassResponse;
                fromPartial(object: Partial<_17.QueryBatchesByClassResponse>): _17.QueryBatchesByClassResponse;
                fromAmino(object: _17.QueryBatchesByClassResponseAmino): _17.QueryBatchesByClassResponse;
                toAmino(message: _17.QueryBatchesByClassResponse): _17.QueryBatchesByClassResponseAmino;
                fromAminoMsg(object: _17.QueryBatchesByClassResponseAminoMsg): _17.QueryBatchesByClassResponse;
                fromProtoMsg(message: _17.QueryBatchesByClassResponseProtoMsg): _17.QueryBatchesByClassResponse;
                toProto(message: _17.QueryBatchesByClassResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBatchesByClassResponse): _17.QueryBatchesByClassResponseProtoMsg;
            };
            QueryBatchRequest: {
                typeUrl: string;
                encode(message: _17.QueryBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchRequest;
                fromPartial(object: Partial<_17.QueryBatchRequest>): _17.QueryBatchRequest;
                fromAmino(object: _17.QueryBatchRequestAmino): _17.QueryBatchRequest;
                toAmino(message: _17.QueryBatchRequest): _17.QueryBatchRequestAmino;
                fromAminoMsg(object: _17.QueryBatchRequestAminoMsg): _17.QueryBatchRequest;
                fromProtoMsg(message: _17.QueryBatchRequestProtoMsg): _17.QueryBatchRequest;
                toProto(message: _17.QueryBatchRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBatchRequest): _17.QueryBatchRequestProtoMsg;
            };
            QueryBatchResponse: {
                typeUrl: string;
                encode(message: _17.QueryBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBatchResponse;
                fromPartial(object: Partial<_17.QueryBatchResponse>): _17.QueryBatchResponse;
                fromAmino(object: _17.QueryBatchResponseAmino): _17.QueryBatchResponse;
                toAmino(message: _17.QueryBatchResponse): _17.QueryBatchResponseAmino;
                fromAminoMsg(object: _17.QueryBatchResponseAminoMsg): _17.QueryBatchResponse;
                fromProtoMsg(message: _17.QueryBatchResponseProtoMsg): _17.QueryBatchResponse;
                toProto(message: _17.QueryBatchResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBatchResponse): _17.QueryBatchResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _17.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBalanceRequest;
                fromPartial(object: Partial<_17.QueryBalanceRequest>): _17.QueryBalanceRequest;
                fromAmino(object: _17.QueryBalanceRequestAmino): _17.QueryBalanceRequest;
                toAmino(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestAmino;
                fromAminoMsg(object: _17.QueryBalanceRequestAminoMsg): _17.QueryBalanceRequest;
                fromProtoMsg(message: _17.QueryBalanceRequestProtoMsg): _17.QueryBalanceRequest;
                toProto(message: _17.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _17.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBalanceResponse;
                fromPartial(object: Partial<_17.QueryBalanceResponse>): _17.QueryBalanceResponse;
                fromAmino(object: _17.QueryBalanceResponseAmino): _17.QueryBalanceResponse;
                toAmino(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseAmino;
                fromAminoMsg(object: _17.QueryBalanceResponseAminoMsg): _17.QueryBalanceResponse;
                fromProtoMsg(message: _17.QueryBalanceResponseProtoMsg): _17.QueryBalanceResponse;
                toProto(message: _17.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(message: _17.QueryBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBalancesRequest;
                fromPartial(object: Partial<_17.QueryBalancesRequest>): _17.QueryBalancesRequest;
                fromAmino(object: _17.QueryBalancesRequestAmino): _17.QueryBalancesRequest;
                toAmino(message: _17.QueryBalancesRequest): _17.QueryBalancesRequestAmino;
                fromAminoMsg(object: _17.QueryBalancesRequestAminoMsg): _17.QueryBalancesRequest;
                fromProtoMsg(message: _17.QueryBalancesRequestProtoMsg): _17.QueryBalancesRequest;
                toProto(message: _17.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBalancesRequest): _17.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _17.QueryBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBalancesResponse;
                fromPartial(object: Partial<_17.QueryBalancesResponse>): _17.QueryBalancesResponse;
                fromAmino(object: _17.QueryBalancesResponseAmino): _17.QueryBalancesResponse;
                toAmino(message: _17.QueryBalancesResponse): _17.QueryBalancesResponseAmino;
                fromAminoMsg(object: _17.QueryBalancesResponseAminoMsg): _17.QueryBalancesResponse;
                fromProtoMsg(message: _17.QueryBalancesResponseProtoMsg): _17.QueryBalancesResponse;
                toProto(message: _17.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBalancesResponse): _17.QueryBalancesResponseProtoMsg;
            };
            QueryBalancesByBatchRequest: {
                typeUrl: string;
                encode(message: _17.QueryBalancesByBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBalancesByBatchRequest;
                fromPartial(object: Partial<_17.QueryBalancesByBatchRequest>): _17.QueryBalancesByBatchRequest;
                fromAmino(object: _17.QueryBalancesByBatchRequestAmino): _17.QueryBalancesByBatchRequest;
                toAmino(message: _17.QueryBalancesByBatchRequest): _17.QueryBalancesByBatchRequestAmino;
                fromAminoMsg(object: _17.QueryBalancesByBatchRequestAminoMsg): _17.QueryBalancesByBatchRequest;
                fromProtoMsg(message: _17.QueryBalancesByBatchRequestProtoMsg): _17.QueryBalancesByBatchRequest;
                toProto(message: _17.QueryBalancesByBatchRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBalancesByBatchRequest): _17.QueryBalancesByBatchRequestProtoMsg;
            };
            QueryBalancesByBatchResponse: {
                typeUrl: string;
                encode(message: _17.QueryBalancesByBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryBalancesByBatchResponse;
                fromPartial(object: Partial<_17.QueryBalancesByBatchResponse>): _17.QueryBalancesByBatchResponse;
                fromAmino(object: _17.QueryBalancesByBatchResponseAmino): _17.QueryBalancesByBatchResponse;
                toAmino(message: _17.QueryBalancesByBatchResponse): _17.QueryBalancesByBatchResponseAmino;
                fromAminoMsg(object: _17.QueryBalancesByBatchResponseAminoMsg): _17.QueryBalancesByBatchResponse;
                fromProtoMsg(message: _17.QueryBalancesByBatchResponseProtoMsg): _17.QueryBalancesByBatchResponse;
                toProto(message: _17.QueryBalancesByBatchResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBalancesByBatchResponse): _17.QueryBalancesByBatchResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _17.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAllBalancesRequest;
                fromPartial(object: Partial<_17.QueryAllBalancesRequest>): _17.QueryAllBalancesRequest;
                fromAmino(object: _17.QueryAllBalancesRequestAmino): _17.QueryAllBalancesRequest;
                toAmino(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _17.QueryAllBalancesRequestAminoMsg): _17.QueryAllBalancesRequest;
                fromProtoMsg(message: _17.QueryAllBalancesRequestProtoMsg): _17.QueryAllBalancesRequest;
                toProto(message: _17.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _17.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAllBalancesResponse;
                fromPartial(object: Partial<_17.QueryAllBalancesResponse>): _17.QueryAllBalancesResponse;
                fromAmino(object: _17.QueryAllBalancesResponseAmino): _17.QueryAllBalancesResponse;
                toAmino(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _17.QueryAllBalancesResponseAminoMsg): _17.QueryAllBalancesResponse;
                fromProtoMsg(message: _17.QueryAllBalancesResponseProtoMsg): _17.QueryAllBalancesResponse;
                toProto(message: _17.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _17.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QuerySupplyRequest;
                fromPartial(object: Partial<_17.QuerySupplyRequest>): _17.QuerySupplyRequest;
                fromAmino(object: _17.QuerySupplyRequestAmino): _17.QuerySupplyRequest;
                toAmino(message: _17.QuerySupplyRequest): _17.QuerySupplyRequestAmino;
                fromAminoMsg(object: _17.QuerySupplyRequestAminoMsg): _17.QuerySupplyRequest;
                fromProtoMsg(message: _17.QuerySupplyRequestProtoMsg): _17.QuerySupplyRequest;
                toProto(message: _17.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _17.QuerySupplyRequest): _17.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _17.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QuerySupplyResponse;
                fromPartial(object: Partial<_17.QuerySupplyResponse>): _17.QuerySupplyResponse;
                fromAmino(object: _17.QuerySupplyResponseAmino): _17.QuerySupplyResponse;
                toAmino(message: _17.QuerySupplyResponse): _17.QuerySupplyResponseAmino;
                fromAminoMsg(object: _17.QuerySupplyResponseAminoMsg): _17.QuerySupplyResponse;
                fromProtoMsg(message: _17.QuerySupplyResponseProtoMsg): _17.QuerySupplyResponse;
                toProto(message: _17.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _17.QuerySupplyResponse): _17.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                typeUrl: string;
                encode(_: _17.QueryCreditTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryCreditTypesRequest;
                fromPartial(_: Partial<_17.QueryCreditTypesRequest>): _17.QueryCreditTypesRequest;
                fromAmino(_: _17.QueryCreditTypesRequestAmino): _17.QueryCreditTypesRequest;
                toAmino(_: _17.QueryCreditTypesRequest): _17.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _17.QueryCreditTypesRequestAminoMsg): _17.QueryCreditTypesRequest;
                fromProtoMsg(message: _17.QueryCreditTypesRequestProtoMsg): _17.QueryCreditTypesRequest;
                toProto(message: _17.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _17.QueryCreditTypesRequest): _17.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                typeUrl: string;
                encode(message: _17.QueryCreditTypesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryCreditTypesResponse;
                fromPartial(object: Partial<_17.QueryCreditTypesResponse>): _17.QueryCreditTypesResponse;
                fromAmino(object: _17.QueryCreditTypesResponseAmino): _17.QueryCreditTypesResponse;
                toAmino(message: _17.QueryCreditTypesResponse): _17.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _17.QueryCreditTypesResponseAminoMsg): _17.QueryCreditTypesResponse;
                fromProtoMsg(message: _17.QueryCreditTypesResponseProtoMsg): _17.QueryCreditTypesResponse;
                toProto(message: _17.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryCreditTypesResponse): _17.QueryCreditTypesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _17.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryParamsRequest;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
                fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
                fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
                fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
                toProto(message: _17.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _17.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryParamsResponse;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
                fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
                fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
                fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
                toProto(message: _17.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
            };
            QueryCreditTypeRequest: {
                typeUrl: string;
                encode(message: _17.QueryCreditTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryCreditTypeRequest;
                fromPartial(object: Partial<_17.QueryCreditTypeRequest>): _17.QueryCreditTypeRequest;
                fromAmino(object: _17.QueryCreditTypeRequestAmino): _17.QueryCreditTypeRequest;
                toAmino(message: _17.QueryCreditTypeRequest): _17.QueryCreditTypeRequestAmino;
                fromAminoMsg(object: _17.QueryCreditTypeRequestAminoMsg): _17.QueryCreditTypeRequest;
                fromProtoMsg(message: _17.QueryCreditTypeRequestProtoMsg): _17.QueryCreditTypeRequest;
                toProto(message: _17.QueryCreditTypeRequest): Uint8Array;
                toProtoMsg(message: _17.QueryCreditTypeRequest): _17.QueryCreditTypeRequestProtoMsg;
            };
            QueryCreditTypeResponse: {
                typeUrl: string;
                encode(message: _17.QueryCreditTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryCreditTypeResponse;
                fromPartial(object: Partial<_17.QueryCreditTypeResponse>): _17.QueryCreditTypeResponse;
                fromAmino(object: _17.QueryCreditTypeResponseAmino): _17.QueryCreditTypeResponse;
                toAmino(message: _17.QueryCreditTypeResponse): _17.QueryCreditTypeResponseAmino;
                fromAminoMsg(object: _17.QueryCreditTypeResponseAminoMsg): _17.QueryCreditTypeResponse;
                fromProtoMsg(message: _17.QueryCreditTypeResponseProtoMsg): _17.QueryCreditTypeResponse;
                toProto(message: _17.QueryCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _17.QueryCreditTypeResponse): _17.QueryCreditTypeResponseProtoMsg;
            };
            ClassInfo: {
                typeUrl: string;
                encode(message: _17.ClassInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.ClassInfo;
                fromPartial(object: Partial<_17.ClassInfo>): _17.ClassInfo;
                fromAmino(object: _17.ClassInfoAmino): _17.ClassInfo;
                toAmino(message: _17.ClassInfo): _17.ClassInfoAmino;
                fromAminoMsg(object: _17.ClassInfoAminoMsg): _17.ClassInfo;
                fromProtoMsg(message: _17.ClassInfoProtoMsg): _17.ClassInfo;
                toProto(message: _17.ClassInfo): Uint8Array;
                toProtoMsg(message: _17.ClassInfo): _17.ClassInfoProtoMsg;
            };
            ProjectInfo: {
                typeUrl: string;
                encode(message: _17.ProjectInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.ProjectInfo;
                fromPartial(object: Partial<_17.ProjectInfo>): _17.ProjectInfo;
                fromAmino(object: _17.ProjectInfoAmino): _17.ProjectInfo;
                toAmino(message: _17.ProjectInfo): _17.ProjectInfoAmino;
                fromAminoMsg(object: _17.ProjectInfoAminoMsg): _17.ProjectInfo;
                fromProtoMsg(message: _17.ProjectInfoProtoMsg): _17.ProjectInfo;
                toProto(message: _17.ProjectInfo): Uint8Array;
                toProtoMsg(message: _17.ProjectInfo): _17.ProjectInfoProtoMsg;
            };
            BatchInfo: {
                typeUrl: string;
                encode(message: _17.BatchInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.BatchInfo;
                fromPartial(object: Partial<_17.BatchInfo>): _17.BatchInfo;
                fromAmino(object: _17.BatchInfoAmino): _17.BatchInfo;
                toAmino(message: _17.BatchInfo): _17.BatchInfoAmino;
                fromAminoMsg(object: _17.BatchInfoAminoMsg): _17.BatchInfo;
                fromProtoMsg(message: _17.BatchInfoProtoMsg): _17.BatchInfo;
                toProto(message: _17.BatchInfo): Uint8Array;
                toProtoMsg(message: _17.BatchInfo): _17.BatchInfoProtoMsg;
            };
            BatchBalanceInfo: {
                typeUrl: string;
                encode(message: _17.BatchBalanceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.BatchBalanceInfo;
                fromPartial(object: Partial<_17.BatchBalanceInfo>): _17.BatchBalanceInfo;
                fromAmino(object: _17.BatchBalanceInfoAmino): _17.BatchBalanceInfo;
                toAmino(message: _17.BatchBalanceInfo): _17.BatchBalanceInfoAmino;
                fromAminoMsg(object: _17.BatchBalanceInfoAminoMsg): _17.BatchBalanceInfo;
                fromProtoMsg(message: _17.BatchBalanceInfoProtoMsg): _17.BatchBalanceInfo;
                toProto(message: _17.BatchBalanceInfo): Uint8Array;
                toProtoMsg(message: _17.BatchBalanceInfo): _17.BatchBalanceInfoProtoMsg;
            };
            QueryClassCreatorAllowlistRequest: {
                typeUrl: string;
                encode(_: _17.QueryClassCreatorAllowlistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryClassCreatorAllowlistRequest;
                fromPartial(_: Partial<_17.QueryClassCreatorAllowlistRequest>): _17.QueryClassCreatorAllowlistRequest;
                fromAmino(_: _17.QueryClassCreatorAllowlistRequestAmino): _17.QueryClassCreatorAllowlistRequest;
                toAmino(_: _17.QueryClassCreatorAllowlistRequest): _17.QueryClassCreatorAllowlistRequestAmino;
                fromAminoMsg(object: _17.QueryClassCreatorAllowlistRequestAminoMsg): _17.QueryClassCreatorAllowlistRequest;
                fromProtoMsg(message: _17.QueryClassCreatorAllowlistRequestProtoMsg): _17.QueryClassCreatorAllowlistRequest;
                toProto(message: _17.QueryClassCreatorAllowlistRequest): Uint8Array;
                toProtoMsg(message: _17.QueryClassCreatorAllowlistRequest): _17.QueryClassCreatorAllowlistRequestProtoMsg;
            };
            QueryClassCreatorAllowlistResponse: {
                typeUrl: string;
                encode(message: _17.QueryClassCreatorAllowlistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassCreatorAllowlistResponse;
                fromPartial(object: Partial<_17.QueryClassCreatorAllowlistResponse>): _17.QueryClassCreatorAllowlistResponse;
                fromAmino(object: _17.QueryClassCreatorAllowlistResponseAmino): _17.QueryClassCreatorAllowlistResponse;
                toAmino(message: _17.QueryClassCreatorAllowlistResponse): _17.QueryClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _17.QueryClassCreatorAllowlistResponseAminoMsg): _17.QueryClassCreatorAllowlistResponse;
                fromProtoMsg(message: _17.QueryClassCreatorAllowlistResponseProtoMsg): _17.QueryClassCreatorAllowlistResponse;
                toProto(message: _17.QueryClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _17.QueryClassCreatorAllowlistResponse): _17.QueryClassCreatorAllowlistResponseProtoMsg;
            };
            QueryAllowedClassCreatorsRequest: {
                typeUrl: string;
                encode(message: _17.QueryAllowedClassCreatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAllowedClassCreatorsRequest;
                fromPartial(object: Partial<_17.QueryAllowedClassCreatorsRequest>): _17.QueryAllowedClassCreatorsRequest;
                fromAmino(object: _17.QueryAllowedClassCreatorsRequestAmino): _17.QueryAllowedClassCreatorsRequest;
                toAmino(message: _17.QueryAllowedClassCreatorsRequest): _17.QueryAllowedClassCreatorsRequestAmino;
                fromAminoMsg(object: _17.QueryAllowedClassCreatorsRequestAminoMsg): _17.QueryAllowedClassCreatorsRequest;
                fromProtoMsg(message: _17.QueryAllowedClassCreatorsRequestProtoMsg): _17.QueryAllowedClassCreatorsRequest;
                toProto(message: _17.QueryAllowedClassCreatorsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAllowedClassCreatorsRequest): _17.QueryAllowedClassCreatorsRequestProtoMsg;
            };
            QueryAllowedClassCreatorsResponse: {
                typeUrl: string;
                encode(message: _17.QueryAllowedClassCreatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAllowedClassCreatorsResponse;
                fromPartial(object: Partial<_17.QueryAllowedClassCreatorsResponse>): _17.QueryAllowedClassCreatorsResponse;
                fromAmino(object: _17.QueryAllowedClassCreatorsResponseAmino): _17.QueryAllowedClassCreatorsResponse;
                toAmino(message: _17.QueryAllowedClassCreatorsResponse): _17.QueryAllowedClassCreatorsResponseAmino;
                fromAminoMsg(object: _17.QueryAllowedClassCreatorsResponseAminoMsg): _17.QueryAllowedClassCreatorsResponse;
                fromProtoMsg(message: _17.QueryAllowedClassCreatorsResponseProtoMsg): _17.QueryAllowedClassCreatorsResponse;
                toProto(message: _17.QueryAllowedClassCreatorsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAllowedClassCreatorsResponse): _17.QueryAllowedClassCreatorsResponseProtoMsg;
            };
            QueryClassFeeRequest: {
                typeUrl: string;
                encode(_: _17.QueryClassFeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryClassFeeRequest;
                fromPartial(_: Partial<_17.QueryClassFeeRequest>): _17.QueryClassFeeRequest;
                fromAmino(_: _17.QueryClassFeeRequestAmino): _17.QueryClassFeeRequest;
                toAmino(_: _17.QueryClassFeeRequest): _17.QueryClassFeeRequestAmino;
                fromAminoMsg(object: _17.QueryClassFeeRequestAminoMsg): _17.QueryClassFeeRequest;
                fromProtoMsg(message: _17.QueryClassFeeRequestProtoMsg): _17.QueryClassFeeRequest;
                toProto(message: _17.QueryClassFeeRequest): Uint8Array;
                toProtoMsg(message: _17.QueryClassFeeRequest): _17.QueryClassFeeRequestProtoMsg;
            };
            QueryClassFeeResponse: {
                typeUrl: string;
                encode(message: _17.QueryClassFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClassFeeResponse;
                fromPartial(object: Partial<_17.QueryClassFeeResponse>): _17.QueryClassFeeResponse;
                fromAmino(object: _17.QueryClassFeeResponseAmino): _17.QueryClassFeeResponse;
                toAmino(message: _17.QueryClassFeeResponse): _17.QueryClassFeeResponseAmino;
                fromAminoMsg(object: _17.QueryClassFeeResponseAminoMsg): _17.QueryClassFeeResponse;
                fromProtoMsg(message: _17.QueryClassFeeResponseProtoMsg): _17.QueryClassFeeResponse;
                toProto(message: _17.QueryClassFeeResponse): Uint8Array;
                toProtoMsg(message: _17.QueryClassFeeResponse): _17.QueryClassFeeResponseProtoMsg;
            };
            QueryAllowedBridgeChainsRequest: {
                typeUrl: string;
                encode(_: _17.QueryAllowedBridgeChainsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryAllowedBridgeChainsRequest;
                fromPartial(_: Partial<_17.QueryAllowedBridgeChainsRequest>): _17.QueryAllowedBridgeChainsRequest;
                fromAmino(_: _17.QueryAllowedBridgeChainsRequestAmino): _17.QueryAllowedBridgeChainsRequest;
                toAmino(_: _17.QueryAllowedBridgeChainsRequest): _17.QueryAllowedBridgeChainsRequestAmino;
                fromAminoMsg(object: _17.QueryAllowedBridgeChainsRequestAminoMsg): _17.QueryAllowedBridgeChainsRequest;
                fromProtoMsg(message: _17.QueryAllowedBridgeChainsRequestProtoMsg): _17.QueryAllowedBridgeChainsRequest;
                toProto(message: _17.QueryAllowedBridgeChainsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAllowedBridgeChainsRequest): _17.QueryAllowedBridgeChainsRequestProtoMsg;
            };
            QueryAllowedBridgeChainsResponse: {
                typeUrl: string;
                encode(message: _17.QueryAllowedBridgeChainsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAllowedBridgeChainsResponse;
                fromPartial(object: Partial<_17.QueryAllowedBridgeChainsResponse>): _17.QueryAllowedBridgeChainsResponse;
                fromAmino(object: _17.QueryAllowedBridgeChainsResponseAmino): _17.QueryAllowedBridgeChainsResponse;
                toAmino(message: _17.QueryAllowedBridgeChainsResponse): _17.QueryAllowedBridgeChainsResponseAmino;
                fromAminoMsg(object: _17.QueryAllowedBridgeChainsResponseAminoMsg): _17.QueryAllowedBridgeChainsResponse;
                fromProtoMsg(message: _17.QueryAllowedBridgeChainsResponseProtoMsg): _17.QueryAllowedBridgeChainsResponse;
                toProto(message: _17.QueryAllowedBridgeChainsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAllowedBridgeChainsResponse): _17.QueryAllowedBridgeChainsResponseProtoMsg;
            };
            EventCreateClass: {
                typeUrl: string;
                encode(message: _16.EventCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventCreateClass;
                fromPartial(object: Partial<_16.EventCreateClass>): _16.EventCreateClass;
                fromAmino(object: _16.EventCreateClassAmino): _16.EventCreateClass;
                toAmino(message: _16.EventCreateClass): _16.EventCreateClassAmino;
                fromAminoMsg(object: _16.EventCreateClassAminoMsg): _16.EventCreateClass;
                fromProtoMsg(message: _16.EventCreateClassProtoMsg): _16.EventCreateClass;
                toProto(message: _16.EventCreateClass): Uint8Array;
                toProtoMsg(message: _16.EventCreateClass): _16.EventCreateClassProtoMsg;
            };
            EventCreateProject: {
                typeUrl: string;
                encode(message: _16.EventCreateProject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventCreateProject;
                fromPartial(object: Partial<_16.EventCreateProject>): _16.EventCreateProject;
                fromAmino(object: _16.EventCreateProjectAmino): _16.EventCreateProject;
                toAmino(message: _16.EventCreateProject): _16.EventCreateProjectAmino;
                fromAminoMsg(object: _16.EventCreateProjectAminoMsg): _16.EventCreateProject;
                fromProtoMsg(message: _16.EventCreateProjectProtoMsg): _16.EventCreateProject;
                toProto(message: _16.EventCreateProject): Uint8Array;
                toProtoMsg(message: _16.EventCreateProject): _16.EventCreateProjectProtoMsg;
            };
            EventCreateBatch: {
                typeUrl: string;
                encode(message: _16.EventCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventCreateBatch;
                fromPartial(object: Partial<_16.EventCreateBatch>): _16.EventCreateBatch;
                fromAmino(object: _16.EventCreateBatchAmino): _16.EventCreateBatch;
                toAmino(message: _16.EventCreateBatch): _16.EventCreateBatchAmino;
                fromAminoMsg(object: _16.EventCreateBatchAminoMsg): _16.EventCreateBatch;
                fromProtoMsg(message: _16.EventCreateBatchProtoMsg): _16.EventCreateBatch;
                toProto(message: _16.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _16.EventCreateBatch): _16.EventCreateBatchProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _16.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventMint;
                fromPartial(object: Partial<_16.EventMint>): _16.EventMint;
                fromAmino(object: _16.EventMintAmino): _16.EventMint;
                toAmino(message: _16.EventMint): _16.EventMintAmino;
                fromAminoMsg(object: _16.EventMintAminoMsg): _16.EventMint;
                fromProtoMsg(message: _16.EventMintProtoMsg): _16.EventMint;
                toProto(message: _16.EventMint): Uint8Array;
                toProtoMsg(message: _16.EventMint): _16.EventMintProtoMsg;
            };
            EventMintBatchCredits: {
                typeUrl: string;
                encode(message: _16.EventMintBatchCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventMintBatchCredits;
                fromPartial(object: Partial<_16.EventMintBatchCredits>): _16.EventMintBatchCredits;
                fromAmino(object: _16.EventMintBatchCreditsAmino): _16.EventMintBatchCredits;
                toAmino(message: _16.EventMintBatchCredits): _16.EventMintBatchCreditsAmino;
                fromAminoMsg(object: _16.EventMintBatchCreditsAminoMsg): _16.EventMintBatchCredits;
                fromProtoMsg(message: _16.EventMintBatchCreditsProtoMsg): _16.EventMintBatchCredits;
                toProto(message: _16.EventMintBatchCredits): Uint8Array;
                toProtoMsg(message: _16.EventMintBatchCredits): _16.EventMintBatchCreditsProtoMsg;
            };
            EventTransfer: {
                typeUrl: string;
                encode(message: _16.EventTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventTransfer;
                fromPartial(object: Partial<_16.EventTransfer>): _16.EventTransfer;
                fromAmino(object: _16.EventTransferAmino): _16.EventTransfer;
                toAmino(message: _16.EventTransfer): _16.EventTransferAmino;
                fromAminoMsg(object: _16.EventTransferAminoMsg): _16.EventTransfer;
                fromProtoMsg(message: _16.EventTransferProtoMsg): _16.EventTransfer;
                toProto(message: _16.EventTransfer): Uint8Array;
                toProtoMsg(message: _16.EventTransfer): _16.EventTransferProtoMsg;
            };
            EventRetire: {
                typeUrl: string;
                encode(message: _16.EventRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventRetire;
                fromPartial(object: Partial<_16.EventRetire>): _16.EventRetire;
                fromAmino(object: _16.EventRetireAmino): _16.EventRetire;
                toAmino(message: _16.EventRetire): _16.EventRetireAmino;
                fromAminoMsg(object: _16.EventRetireAminoMsg): _16.EventRetire;
                fromProtoMsg(message: _16.EventRetireProtoMsg): _16.EventRetire;
                toProto(message: _16.EventRetire): Uint8Array;
                toProtoMsg(message: _16.EventRetire): _16.EventRetireProtoMsg;
            };
            EventCancel: {
                typeUrl: string;
                encode(message: _16.EventCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventCancel;
                fromPartial(object: Partial<_16.EventCancel>): _16.EventCancel;
                fromAmino(object: _16.EventCancelAmino): _16.EventCancel;
                toAmino(message: _16.EventCancel): _16.EventCancelAmino;
                fromAminoMsg(object: _16.EventCancelAminoMsg): _16.EventCancel;
                fromProtoMsg(message: _16.EventCancelProtoMsg): _16.EventCancel;
                toProto(message: _16.EventCancel): Uint8Array;
                toProtoMsg(message: _16.EventCancel): _16.EventCancelProtoMsg;
            };
            EventUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _16.EventUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventUpdateClassAdmin;
                fromPartial(object: Partial<_16.EventUpdateClassAdmin>): _16.EventUpdateClassAdmin;
                fromAmino(object: _16.EventUpdateClassAdminAmino): _16.EventUpdateClassAdmin;
                toAmino(message: _16.EventUpdateClassAdmin): _16.EventUpdateClassAdminAmino;
                fromAminoMsg(object: _16.EventUpdateClassAdminAminoMsg): _16.EventUpdateClassAdmin;
                fromProtoMsg(message: _16.EventUpdateClassAdminProtoMsg): _16.EventUpdateClassAdmin;
                toProto(message: _16.EventUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _16.EventUpdateClassAdmin): _16.EventUpdateClassAdminProtoMsg;
            };
            EventUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _16.EventUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventUpdateClassIssuers;
                fromPartial(object: Partial<_16.EventUpdateClassIssuers>): _16.EventUpdateClassIssuers;
                fromAmino(object: _16.EventUpdateClassIssuersAmino): _16.EventUpdateClassIssuers;
                toAmino(message: _16.EventUpdateClassIssuers): _16.EventUpdateClassIssuersAmino;
                fromAminoMsg(object: _16.EventUpdateClassIssuersAminoMsg): _16.EventUpdateClassIssuers;
                fromProtoMsg(message: _16.EventUpdateClassIssuersProtoMsg): _16.EventUpdateClassIssuers;
                toProto(message: _16.EventUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _16.EventUpdateClassIssuers): _16.EventUpdateClassIssuersProtoMsg;
            };
            EventUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _16.EventUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventUpdateClassMetadata;
                fromPartial(object: Partial<_16.EventUpdateClassMetadata>): _16.EventUpdateClassMetadata;
                fromAmino(object: _16.EventUpdateClassMetadataAmino): _16.EventUpdateClassMetadata;
                toAmino(message: _16.EventUpdateClassMetadata): _16.EventUpdateClassMetadataAmino;
                fromAminoMsg(object: _16.EventUpdateClassMetadataAminoMsg): _16.EventUpdateClassMetadata;
                fromProtoMsg(message: _16.EventUpdateClassMetadataProtoMsg): _16.EventUpdateClassMetadata;
                toProto(message: _16.EventUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _16.EventUpdateClassMetadata): _16.EventUpdateClassMetadataProtoMsg;
            };
            EventUpdateProjectAdmin: {
                typeUrl: string;
                encode(message: _16.EventUpdateProjectAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventUpdateProjectAdmin;
                fromPartial(object: Partial<_16.EventUpdateProjectAdmin>): _16.EventUpdateProjectAdmin;
                fromAmino(object: _16.EventUpdateProjectAdminAmino): _16.EventUpdateProjectAdmin;
                toAmino(message: _16.EventUpdateProjectAdmin): _16.EventUpdateProjectAdminAmino;
                fromAminoMsg(object: _16.EventUpdateProjectAdminAminoMsg): _16.EventUpdateProjectAdmin;
                fromProtoMsg(message: _16.EventUpdateProjectAdminProtoMsg): _16.EventUpdateProjectAdmin;
                toProto(message: _16.EventUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _16.EventUpdateProjectAdmin): _16.EventUpdateProjectAdminProtoMsg;
            };
            EventUpdateProjectMetadata: {
                typeUrl: string;
                encode(message: _16.EventUpdateProjectMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventUpdateProjectMetadata;
                fromPartial(object: Partial<_16.EventUpdateProjectMetadata>): _16.EventUpdateProjectMetadata;
                fromAmino(object: _16.EventUpdateProjectMetadataAmino): _16.EventUpdateProjectMetadata;
                toAmino(message: _16.EventUpdateProjectMetadata): _16.EventUpdateProjectMetadataAmino;
                fromAminoMsg(object: _16.EventUpdateProjectMetadataAminoMsg): _16.EventUpdateProjectMetadata;
                fromProtoMsg(message: _16.EventUpdateProjectMetadataProtoMsg): _16.EventUpdateProjectMetadata;
                toProto(message: _16.EventUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _16.EventUpdateProjectMetadata): _16.EventUpdateProjectMetadataProtoMsg;
            };
            EventUpdateBatchMetadata: {
                typeUrl: string;
                encode(message: _16.EventUpdateBatchMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventUpdateBatchMetadata;
                fromPartial(object: Partial<_16.EventUpdateBatchMetadata>): _16.EventUpdateBatchMetadata;
                fromAmino(object: _16.EventUpdateBatchMetadataAmino): _16.EventUpdateBatchMetadata;
                toAmino(message: _16.EventUpdateBatchMetadata): _16.EventUpdateBatchMetadataAmino;
                fromAminoMsg(object: _16.EventUpdateBatchMetadataAminoMsg): _16.EventUpdateBatchMetadata;
                fromProtoMsg(message: _16.EventUpdateBatchMetadataProtoMsg): _16.EventUpdateBatchMetadata;
                toProto(message: _16.EventUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _16.EventUpdateBatchMetadata): _16.EventUpdateBatchMetadataProtoMsg;
            };
            EventSealBatch: {
                typeUrl: string;
                encode(message: _16.EventSealBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventSealBatch;
                fromPartial(object: Partial<_16.EventSealBatch>): _16.EventSealBatch;
                fromAmino(object: _16.EventSealBatchAmino): _16.EventSealBatch;
                toAmino(message: _16.EventSealBatch): _16.EventSealBatchAmino;
                fromAminoMsg(object: _16.EventSealBatchAminoMsg): _16.EventSealBatch;
                fromProtoMsg(message: _16.EventSealBatchProtoMsg): _16.EventSealBatch;
                toProto(message: _16.EventSealBatch): Uint8Array;
                toProtoMsg(message: _16.EventSealBatch): _16.EventSealBatchProtoMsg;
            };
            EventAddCreditType: {
                typeUrl: string;
                encode(message: _16.EventAddCreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventAddCreditType;
                fromPartial(object: Partial<_16.EventAddCreditType>): _16.EventAddCreditType;
                fromAmino(object: _16.EventAddCreditTypeAmino): _16.EventAddCreditType;
                toAmino(message: _16.EventAddCreditType): _16.EventAddCreditTypeAmino;
                fromAminoMsg(object: _16.EventAddCreditTypeAminoMsg): _16.EventAddCreditType;
                fromProtoMsg(message: _16.EventAddCreditTypeProtoMsg): _16.EventAddCreditType;
                toProto(message: _16.EventAddCreditType): Uint8Array;
                toProtoMsg(message: _16.EventAddCreditType): _16.EventAddCreditTypeProtoMsg;
            };
            EventBridge: {
                typeUrl: string;
                encode(message: _16.EventBridge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventBridge;
                fromPartial(object: Partial<_16.EventBridge>): _16.EventBridge;
                fromAmino(object: _16.EventBridgeAmino): _16.EventBridge;
                toAmino(message: _16.EventBridge): _16.EventBridgeAmino;
                fromAminoMsg(object: _16.EventBridgeAminoMsg): _16.EventBridge;
                fromProtoMsg(message: _16.EventBridgeProtoMsg): _16.EventBridge;
                toProto(message: _16.EventBridge): Uint8Array;
                toProtoMsg(message: _16.EventBridge): _16.EventBridgeProtoMsg;
            };
            EventBridgeReceive: {
                typeUrl: string;
                encode(message: _16.EventBridgeReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.EventBridgeReceive;
                fromPartial(object: Partial<_16.EventBridgeReceive>): _16.EventBridgeReceive;
                fromAmino(object: _16.EventBridgeReceiveAmino): _16.EventBridgeReceive;
                toAmino(message: _16.EventBridgeReceive): _16.EventBridgeReceiveAmino;
                fromAminoMsg(object: _16.EventBridgeReceiveAminoMsg): _16.EventBridgeReceive;
                fromProtoMsg(message: _16.EventBridgeReceiveProtoMsg): _16.EventBridgeReceive;
                toProto(message: _16.EventBridgeReceive): Uint8Array;
                toProtoMsg(message: _16.EventBridgeReceive): _16.EventBridgeReceiveProtoMsg;
            };
        };
        const v1alpha1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classes(request?: _23.QueryClassesRequest): Promise<_23.QueryClassesResponse>;
                classInfo(request: _23.QueryClassInfoRequest): Promise<_23.QueryClassInfoResponse>;
                batches(request: _23.QueryBatchesRequest): Promise<_23.QueryBatchesResponse>;
                batchInfo(request: _23.QueryBatchInfoRequest): Promise<_23.QueryBatchInfoResponse>;
                balance(request: _23.QueryBalanceRequest): Promise<_23.QueryBalanceResponse>;
                supply(request: _23.QuerySupplyRequest): Promise<_23.QuerySupplyResponse>;
                creditTypes(request?: _23.QueryCreditTypesRequest): Promise<_23.QueryCreditTypesResponse>;
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _24.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _24.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _24.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _24.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _24.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _24.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _24.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _24.MsgCreateClass): {
                        typeUrl: string;
                        value: _24.MsgCreateClass;
                    };
                    createBatch(value: _24.MsgCreateBatch): {
                        typeUrl: string;
                        value: _24.MsgCreateBatch;
                    };
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    retire(value: _24.MsgRetire): {
                        typeUrl: string;
                        value: _24.MsgRetire;
                    };
                    cancel(value: _24.MsgCancel): {
                        typeUrl: string;
                        value: _24.MsgCancel;
                    };
                    updateClassAdmin(value: _24.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _24.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _24.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassMetadata;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _24.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _24.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _24.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _24.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _24.MsgCreateClass): {
                        typeUrl: string;
                        value: _24.MsgCreateClass;
                    };
                    createBatch(value: _24.MsgCreateBatch): {
                        typeUrl: string;
                        value: _24.MsgCreateBatch;
                    };
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    retire(value: _24.MsgRetire): {
                        typeUrl: string;
                        value: _24.MsgRetire;
                    };
                    cancel(value: _24.MsgCancel): {
                        typeUrl: string;
                        value: _24.MsgCancel;
                    };
                    updateClassAdmin(value: _24.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _24.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _24.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _24.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _24.MsgCreateClass) => _24.MsgCreateClassAmino;
                    fromAmino: (object: _24.MsgCreateClassAmino) => _24.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _24.MsgCreateBatch) => _24.MsgCreateBatchAmino;
                    fromAmino: (object: _24.MsgCreateBatchAmino) => _24.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _24.MsgSend) => _24.MsgSendAmino;
                    fromAmino: (object: _24.MsgSendAmino) => _24.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRetire) => _24.MsgRetireAmino;
                    fromAmino: (object: _24.MsgRetireAmino) => _24.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _24.MsgCancel) => _24.MsgCancelAmino;
                    fromAmino: (object: _24.MsgCancelAmino) => _24.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _24.MsgUpdateClassAdmin) => _24.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _24.MsgUpdateClassAdminAmino) => _24.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _24.MsgUpdateClassIssuers) => _24.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _24.MsgUpdateClassIssuersAmino) => _24.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _24.MsgUpdateClassMetadata) => _24.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _24.MsgUpdateClassMetadataAmino) => _24.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                typeUrl: string;
                encode(message: _25.ClassInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ClassInfo;
                fromPartial(object: Partial<_25.ClassInfo>): _25.ClassInfo;
                fromAmino(object: _25.ClassInfoAmino): _25.ClassInfo;
                toAmino(message: _25.ClassInfo): _25.ClassInfoAmino;
                fromAminoMsg(object: _25.ClassInfoAminoMsg): _25.ClassInfo;
                fromProtoMsg(message: _25.ClassInfoProtoMsg): _25.ClassInfo;
                toProto(message: _25.ClassInfo): Uint8Array;
                toProtoMsg(message: _25.ClassInfo): _25.ClassInfoProtoMsg;
            };
            BatchInfo: {
                typeUrl: string;
                encode(message: _25.BatchInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.BatchInfo;
                fromPartial(object: Partial<_25.BatchInfo>): _25.BatchInfo;
                fromAmino(object: _25.BatchInfoAmino): _25.BatchInfo;
                toAmino(message: _25.BatchInfo): _25.BatchInfoAmino;
                fromAminoMsg(object: _25.BatchInfoAminoMsg): _25.BatchInfo;
                fromProtoMsg(message: _25.BatchInfoProtoMsg): _25.BatchInfo;
                toProto(message: _25.BatchInfo): Uint8Array;
                toProtoMsg(message: _25.BatchInfo): _25.BatchInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _25.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Params;
                fromPartial(object: Partial<_25.Params>): _25.Params;
                fromAmino(object: _25.ParamsAmino): _25.Params;
                toAmino(message: _25.Params): _25.ParamsAmino;
                fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
                fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
                toProto(message: _25.Params): Uint8Array;
                toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
            };
            CreditType: {
                typeUrl: string;
                encode(message: _25.CreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.CreditType;
                fromPartial(object: Partial<_25.CreditType>): _25.CreditType;
                fromAmino(object: _25.CreditTypeAmino): _25.CreditType;
                toAmino(message: _25.CreditType): _25.CreditTypeAmino;
                fromAminoMsg(object: _25.CreditTypeAminoMsg): _25.CreditType;
                fromProtoMsg(message: _25.CreditTypeProtoMsg): _25.CreditType;
                toProto(message: _25.CreditType): Uint8Array;
                toProtoMsg(message: _25.CreditType): _25.CreditTypeProtoMsg;
            };
            CreditTypeSeq: {
                typeUrl: string;
                encode(message: _25.CreditTypeSeq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.CreditTypeSeq;
                fromPartial(object: Partial<_25.CreditTypeSeq>): _25.CreditTypeSeq;
                fromAmino(object: _25.CreditTypeSeqAmino): _25.CreditTypeSeq;
                toAmino(message: _25.CreditTypeSeq): _25.CreditTypeSeqAmino;
                fromAminoMsg(object: _25.CreditTypeSeqAminoMsg): _25.CreditTypeSeq;
                fromProtoMsg(message: _25.CreditTypeSeqProtoMsg): _25.CreditTypeSeq;
                toProto(message: _25.CreditTypeSeq): Uint8Array;
                toProtoMsg(message: _25.CreditTypeSeq): _25.CreditTypeSeqProtoMsg;
            };
            MsgCreateClass: {
                typeUrl: string;
                encode(message: _24.MsgCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCreateClass;
                fromPartial(object: Partial<_24.MsgCreateClass>): _24.MsgCreateClass;
                fromAmino(object: _24.MsgCreateClassAmino): _24.MsgCreateClass;
                toAmino(message: _24.MsgCreateClass): _24.MsgCreateClassAmino;
                fromAminoMsg(object: _24.MsgCreateClassAminoMsg): _24.MsgCreateClass;
                fromProtoMsg(message: _24.MsgCreateClassProtoMsg): _24.MsgCreateClass;
                toProto(message: _24.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _24.MsgCreateClass): _24.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                typeUrl: string;
                encode(message: _24.MsgCreateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCreateClassResponse;
                fromPartial(object: Partial<_24.MsgCreateClassResponse>): _24.MsgCreateClassResponse;
                fromAmino(object: _24.MsgCreateClassResponseAmino): _24.MsgCreateClassResponse;
                toAmino(message: _24.MsgCreateClassResponse): _24.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _24.MsgCreateClassResponseAminoMsg): _24.MsgCreateClassResponse;
                fromProtoMsg(message: _24.MsgCreateClassResponseProtoMsg): _24.MsgCreateClassResponse;
                toProto(message: _24.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _24.MsgCreateClassResponse): _24.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateBatch: {
                typeUrl: string;
                encode(message: _24.MsgCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCreateBatch;
                fromPartial(object: Partial<_24.MsgCreateBatch>): _24.MsgCreateBatch;
                fromAmino(object: _24.MsgCreateBatchAmino): _24.MsgCreateBatch;
                toAmino(message: _24.MsgCreateBatch): _24.MsgCreateBatchAmino;
                fromAminoMsg(object: _24.MsgCreateBatchAminoMsg): _24.MsgCreateBatch;
                fromProtoMsg(message: _24.MsgCreateBatchProtoMsg): _24.MsgCreateBatch;
                toProto(message: _24.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _24.MsgCreateBatch): _24.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatch_BatchIssuance: {
                typeUrl: string;
                encode(message: _24.MsgCreateBatch_BatchIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCreateBatch_BatchIssuance;
                fromPartial(object: Partial<_24.MsgCreateBatch_BatchIssuance>): _24.MsgCreateBatch_BatchIssuance;
                fromAmino(object: _24.MsgCreateBatch_BatchIssuanceAmino): _24.MsgCreateBatch_BatchIssuance;
                toAmino(message: _24.MsgCreateBatch_BatchIssuance): _24.MsgCreateBatch_BatchIssuanceAmino;
                fromAminoMsg(object: _24.MsgCreateBatch_BatchIssuanceAminoMsg): _24.MsgCreateBatch_BatchIssuance;
                fromProtoMsg(message: _24.MsgCreateBatch_BatchIssuanceProtoMsg): _24.MsgCreateBatch_BatchIssuance;
                toProto(message: _24.MsgCreateBatch_BatchIssuance): Uint8Array;
                toProtoMsg(message: _24.MsgCreateBatch_BatchIssuance): _24.MsgCreateBatch_BatchIssuanceProtoMsg;
            };
            MsgCreateBatchResponse: {
                typeUrl: string;
                encode(message: _24.MsgCreateBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCreateBatchResponse;
                fromPartial(object: Partial<_24.MsgCreateBatchResponse>): _24.MsgCreateBatchResponse;
                fromAmino(object: _24.MsgCreateBatchResponseAmino): _24.MsgCreateBatchResponse;
                toAmino(message: _24.MsgCreateBatchResponse): _24.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _24.MsgCreateBatchResponseAminoMsg): _24.MsgCreateBatchResponse;
                fromProtoMsg(message: _24.MsgCreateBatchResponseProtoMsg): _24.MsgCreateBatchResponse;
                toProto(message: _24.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _24.MsgCreateBatchResponse): _24.MsgCreateBatchResponseProtoMsg;
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _24.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgSend;
                fromPartial(object: Partial<_24.MsgSend>): _24.MsgSend;
                fromAmino(object: _24.MsgSendAmino): _24.MsgSend;
                toAmino(message: _24.MsgSend): _24.MsgSendAmino;
                fromAminoMsg(object: _24.MsgSendAminoMsg): _24.MsgSend;
                fromProtoMsg(message: _24.MsgSendProtoMsg): _24.MsgSend;
                toProto(message: _24.MsgSend): Uint8Array;
                toProtoMsg(message: _24.MsgSend): _24.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                typeUrl: string;
                encode(message: _24.MsgSend_SendCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgSend_SendCredits;
                fromPartial(object: Partial<_24.MsgSend_SendCredits>): _24.MsgSend_SendCredits;
                fromAmino(object: _24.MsgSend_SendCreditsAmino): _24.MsgSend_SendCredits;
                toAmino(message: _24.MsgSend_SendCredits): _24.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _24.MsgSend_SendCreditsAminoMsg): _24.MsgSend_SendCredits;
                fromProtoMsg(message: _24.MsgSend_SendCreditsProtoMsg): _24.MsgSend_SendCredits;
                toProto(message: _24.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _24.MsgSend_SendCredits): _24.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _24.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgSendResponse;
                fromPartial(_: Partial<_24.MsgSendResponse>): _24.MsgSendResponse;
                fromAmino(_: _24.MsgSendResponseAmino): _24.MsgSendResponse;
                toAmino(_: _24.MsgSendResponse): _24.MsgSendResponseAmino;
                fromAminoMsg(object: _24.MsgSendResponseAminoMsg): _24.MsgSendResponse;
                fromProtoMsg(message: _24.MsgSendResponseProtoMsg): _24.MsgSendResponse;
                toProto(message: _24.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _24.MsgSendResponse): _24.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                typeUrl: string;
                encode(message: _24.MsgRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRetire;
                fromPartial(object: Partial<_24.MsgRetire>): _24.MsgRetire;
                fromAmino(object: _24.MsgRetireAmino): _24.MsgRetire;
                toAmino(message: _24.MsgRetire): _24.MsgRetireAmino;
                fromAminoMsg(object: _24.MsgRetireAminoMsg): _24.MsgRetire;
                fromProtoMsg(message: _24.MsgRetireProtoMsg): _24.MsgRetire;
                toProto(message: _24.MsgRetire): Uint8Array;
                toProtoMsg(message: _24.MsgRetire): _24.MsgRetireProtoMsg;
            };
            MsgRetire_RetireCredits: {
                typeUrl: string;
                encode(message: _24.MsgRetire_RetireCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRetire_RetireCredits;
                fromPartial(object: Partial<_24.MsgRetire_RetireCredits>): _24.MsgRetire_RetireCredits;
                fromAmino(object: _24.MsgRetire_RetireCreditsAmino): _24.MsgRetire_RetireCredits;
                toAmino(message: _24.MsgRetire_RetireCredits): _24.MsgRetire_RetireCreditsAmino;
                fromAminoMsg(object: _24.MsgRetire_RetireCreditsAminoMsg): _24.MsgRetire_RetireCredits;
                fromProtoMsg(message: _24.MsgRetire_RetireCreditsProtoMsg): _24.MsgRetire_RetireCredits;
                toProto(message: _24.MsgRetire_RetireCredits): Uint8Array;
                toProtoMsg(message: _24.MsgRetire_RetireCredits): _24.MsgRetire_RetireCreditsProtoMsg;
            };
            MsgRetireResponse: {
                typeUrl: string;
                encode(_: _24.MsgRetireResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRetireResponse;
                fromPartial(_: Partial<_24.MsgRetireResponse>): _24.MsgRetireResponse;
                fromAmino(_: _24.MsgRetireResponseAmino): _24.MsgRetireResponse;
                toAmino(_: _24.MsgRetireResponse): _24.MsgRetireResponseAmino;
                fromAminoMsg(object: _24.MsgRetireResponseAminoMsg): _24.MsgRetireResponse;
                fromProtoMsg(message: _24.MsgRetireResponseProtoMsg): _24.MsgRetireResponse;
                toProto(message: _24.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRetireResponse): _24.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                typeUrl: string;
                encode(message: _24.MsgCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCancel;
                fromPartial(object: Partial<_24.MsgCancel>): _24.MsgCancel;
                fromAmino(object: _24.MsgCancelAmino): _24.MsgCancel;
                toAmino(message: _24.MsgCancel): _24.MsgCancelAmino;
                fromAminoMsg(object: _24.MsgCancelAminoMsg): _24.MsgCancel;
                fromProtoMsg(message: _24.MsgCancelProtoMsg): _24.MsgCancel;
                toProto(message: _24.MsgCancel): Uint8Array;
                toProtoMsg(message: _24.MsgCancel): _24.MsgCancelProtoMsg;
            };
            MsgCancel_CancelCredits: {
                typeUrl: string;
                encode(message: _24.MsgCancel_CancelCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCancel_CancelCredits;
                fromPartial(object: Partial<_24.MsgCancel_CancelCredits>): _24.MsgCancel_CancelCredits;
                fromAmino(object: _24.MsgCancel_CancelCreditsAmino): _24.MsgCancel_CancelCredits;
                toAmino(message: _24.MsgCancel_CancelCredits): _24.MsgCancel_CancelCreditsAmino;
                fromAminoMsg(object: _24.MsgCancel_CancelCreditsAminoMsg): _24.MsgCancel_CancelCredits;
                fromProtoMsg(message: _24.MsgCancel_CancelCreditsProtoMsg): _24.MsgCancel_CancelCredits;
                toProto(message: _24.MsgCancel_CancelCredits): Uint8Array;
                toProtoMsg(message: _24.MsgCancel_CancelCredits): _24.MsgCancel_CancelCreditsProtoMsg;
            };
            MsgCancelResponse: {
                typeUrl: string;
                encode(_: _24.MsgCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgCancelResponse;
                fromPartial(_: Partial<_24.MsgCancelResponse>): _24.MsgCancelResponse;
                fromAmino(_: _24.MsgCancelResponseAmino): _24.MsgCancelResponse;
                toAmino(_: _24.MsgCancelResponse): _24.MsgCancelResponseAmino;
                fromAminoMsg(object: _24.MsgCancelResponseAminoMsg): _24.MsgCancelResponse;
                fromProtoMsg(message: _24.MsgCancelResponseProtoMsg): _24.MsgCancelResponse;
                toProto(message: _24.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _24.MsgCancelResponse): _24.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _24.MsgUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgUpdateClassAdmin;
                fromPartial(object: Partial<_24.MsgUpdateClassAdmin>): _24.MsgUpdateClassAdmin;
                fromAmino(object: _24.MsgUpdateClassAdminAmino): _24.MsgUpdateClassAdmin;
                toAmino(message: _24.MsgUpdateClassAdmin): _24.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _24.MsgUpdateClassAdminAminoMsg): _24.MsgUpdateClassAdmin;
                fromProtoMsg(message: _24.MsgUpdateClassAdminProtoMsg): _24.MsgUpdateClassAdmin;
                toProto(message: _24.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateClassAdmin): _24.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                typeUrl: string;
                encode(_: _24.MsgUpdateClassAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgUpdateClassAdminResponse;
                fromPartial(_: Partial<_24.MsgUpdateClassAdminResponse>): _24.MsgUpdateClassAdminResponse;
                fromAmino(_: _24.MsgUpdateClassAdminResponseAmino): _24.MsgUpdateClassAdminResponse;
                toAmino(_: _24.MsgUpdateClassAdminResponse): _24.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _24.MsgUpdateClassAdminResponseAminoMsg): _24.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _24.MsgUpdateClassAdminResponseProtoMsg): _24.MsgUpdateClassAdminResponse;
                toProto(message: _24.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateClassAdminResponse): _24.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _24.MsgUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgUpdateClassIssuers;
                fromPartial(object: Partial<_24.MsgUpdateClassIssuers>): _24.MsgUpdateClassIssuers;
                fromAmino(object: _24.MsgUpdateClassIssuersAmino): _24.MsgUpdateClassIssuers;
                toAmino(message: _24.MsgUpdateClassIssuers): _24.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _24.MsgUpdateClassIssuersAminoMsg): _24.MsgUpdateClassIssuers;
                fromProtoMsg(message: _24.MsgUpdateClassIssuersProtoMsg): _24.MsgUpdateClassIssuers;
                toProto(message: _24.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateClassIssuers): _24.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                typeUrl: string;
                encode(_: _24.MsgUpdateClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgUpdateClassIssuersResponse;
                fromPartial(_: Partial<_24.MsgUpdateClassIssuersResponse>): _24.MsgUpdateClassIssuersResponse;
                fromAmino(_: _24.MsgUpdateClassIssuersResponseAmino): _24.MsgUpdateClassIssuersResponse;
                toAmino(_: _24.MsgUpdateClassIssuersResponse): _24.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _24.MsgUpdateClassIssuersResponseAminoMsg): _24.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _24.MsgUpdateClassIssuersResponseProtoMsg): _24.MsgUpdateClassIssuersResponse;
                toProto(message: _24.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateClassIssuersResponse): _24.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _24.MsgUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgUpdateClassMetadata;
                fromPartial(object: Partial<_24.MsgUpdateClassMetadata>): _24.MsgUpdateClassMetadata;
                fromAmino(object: _24.MsgUpdateClassMetadataAmino): _24.MsgUpdateClassMetadata;
                toAmino(message: _24.MsgUpdateClassMetadata): _24.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _24.MsgUpdateClassMetadataAminoMsg): _24.MsgUpdateClassMetadata;
                fromProtoMsg(message: _24.MsgUpdateClassMetadataProtoMsg): _24.MsgUpdateClassMetadata;
                toProto(message: _24.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateClassMetadata): _24.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                typeUrl: string;
                encode(_: _24.MsgUpdateClassMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgUpdateClassMetadataResponse;
                fromPartial(_: Partial<_24.MsgUpdateClassMetadataResponse>): _24.MsgUpdateClassMetadataResponse;
                fromAmino(_: _24.MsgUpdateClassMetadataResponseAmino): _24.MsgUpdateClassMetadataResponse;
                toAmino(_: _24.MsgUpdateClassMetadataResponse): _24.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _24.MsgUpdateClassMetadataResponseAminoMsg): _24.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _24.MsgUpdateClassMetadataResponseProtoMsg): _24.MsgUpdateClassMetadataResponse;
                toProto(message: _24.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateClassMetadataResponse): _24.MsgUpdateClassMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _23.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryParamsRequest;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
                fromAmino(_: _23.QueryParamsRequestAmino): _23.QueryParamsRequest;
                toAmino(_: _23.QueryParamsRequest): _23.QueryParamsRequestAmino;
                fromAminoMsg(object: _23.QueryParamsRequestAminoMsg): _23.QueryParamsRequest;
                fromProtoMsg(message: _23.QueryParamsRequestProtoMsg): _23.QueryParamsRequest;
                toProto(message: _23.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _23.QueryParamsRequest): _23.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _23.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryParamsResponse;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
                fromAmino(object: _23.QueryParamsResponseAmino): _23.QueryParamsResponse;
                toAmino(message: _23.QueryParamsResponse): _23.QueryParamsResponseAmino;
                fromAminoMsg(object: _23.QueryParamsResponseAminoMsg): _23.QueryParamsResponse;
                fromProtoMsg(message: _23.QueryParamsResponseProtoMsg): _23.QueryParamsResponse;
                toProto(message: _23.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _23.QueryParamsResponse): _23.QueryParamsResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _23.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesRequest;
                fromPartial(object: Partial<_23.QueryClassesRequest>): _23.QueryClassesRequest;
                fromAmino(object: _23.QueryClassesRequestAmino): _23.QueryClassesRequest;
                toAmino(message: _23.QueryClassesRequest): _23.QueryClassesRequestAmino;
                fromAminoMsg(object: _23.QueryClassesRequestAminoMsg): _23.QueryClassesRequest;
                fromProtoMsg(message: _23.QueryClassesRequestProtoMsg): _23.QueryClassesRequest;
                toProto(message: _23.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryClassesRequest): _23.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _23.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassesResponse;
                fromPartial(object: Partial<_23.QueryClassesResponse>): _23.QueryClassesResponse;
                fromAmino(object: _23.QueryClassesResponseAmino): _23.QueryClassesResponse;
                toAmino(message: _23.QueryClassesResponse): _23.QueryClassesResponseAmino;
                fromAminoMsg(object: _23.QueryClassesResponseAminoMsg): _23.QueryClassesResponse;
                fromProtoMsg(message: _23.QueryClassesResponseProtoMsg): _23.QueryClassesResponse;
                toProto(message: _23.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryClassesResponse): _23.QueryClassesResponseProtoMsg;
            };
            QueryClassInfoRequest: {
                typeUrl: string;
                encode(message: _23.QueryClassInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassInfoRequest;
                fromPartial(object: Partial<_23.QueryClassInfoRequest>): _23.QueryClassInfoRequest;
                fromAmino(object: _23.QueryClassInfoRequestAmino): _23.QueryClassInfoRequest;
                toAmino(message: _23.QueryClassInfoRequest): _23.QueryClassInfoRequestAmino;
                fromAminoMsg(object: _23.QueryClassInfoRequestAminoMsg): _23.QueryClassInfoRequest;
                fromProtoMsg(message: _23.QueryClassInfoRequestProtoMsg): _23.QueryClassInfoRequest;
                toProto(message: _23.QueryClassInfoRequest): Uint8Array;
                toProtoMsg(message: _23.QueryClassInfoRequest): _23.QueryClassInfoRequestProtoMsg;
            };
            QueryClassInfoResponse: {
                typeUrl: string;
                encode(message: _23.QueryClassInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryClassInfoResponse;
                fromPartial(object: Partial<_23.QueryClassInfoResponse>): _23.QueryClassInfoResponse;
                fromAmino(object: _23.QueryClassInfoResponseAmino): _23.QueryClassInfoResponse;
                toAmino(message: _23.QueryClassInfoResponse): _23.QueryClassInfoResponseAmino;
                fromAminoMsg(object: _23.QueryClassInfoResponseAminoMsg): _23.QueryClassInfoResponse;
                fromProtoMsg(message: _23.QueryClassInfoResponseProtoMsg): _23.QueryClassInfoResponse;
                toProto(message: _23.QueryClassInfoResponse): Uint8Array;
                toProtoMsg(message: _23.QueryClassInfoResponse): _23.QueryClassInfoResponseProtoMsg;
            };
            QueryBatchesRequest: {
                typeUrl: string;
                encode(message: _23.QueryBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBatchesRequest;
                fromPartial(object: Partial<_23.QueryBatchesRequest>): _23.QueryBatchesRequest;
                fromAmino(object: _23.QueryBatchesRequestAmino): _23.QueryBatchesRequest;
                toAmino(message: _23.QueryBatchesRequest): _23.QueryBatchesRequestAmino;
                fromAminoMsg(object: _23.QueryBatchesRequestAminoMsg): _23.QueryBatchesRequest;
                fromProtoMsg(message: _23.QueryBatchesRequestProtoMsg): _23.QueryBatchesRequest;
                toProto(message: _23.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBatchesRequest): _23.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                typeUrl: string;
                encode(message: _23.QueryBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBatchesResponse;
                fromPartial(object: Partial<_23.QueryBatchesResponse>): _23.QueryBatchesResponse;
                fromAmino(object: _23.QueryBatchesResponseAmino): _23.QueryBatchesResponse;
                toAmino(message: _23.QueryBatchesResponse): _23.QueryBatchesResponseAmino;
                fromAminoMsg(object: _23.QueryBatchesResponseAminoMsg): _23.QueryBatchesResponse;
                fromProtoMsg(message: _23.QueryBatchesResponseProtoMsg): _23.QueryBatchesResponse;
                toProto(message: _23.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBatchesResponse): _23.QueryBatchesResponseProtoMsg;
            };
            QueryBatchInfoRequest: {
                typeUrl: string;
                encode(message: _23.QueryBatchInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBatchInfoRequest;
                fromPartial(object: Partial<_23.QueryBatchInfoRequest>): _23.QueryBatchInfoRequest;
                fromAmino(object: _23.QueryBatchInfoRequestAmino): _23.QueryBatchInfoRequest;
                toAmino(message: _23.QueryBatchInfoRequest): _23.QueryBatchInfoRequestAmino;
                fromAminoMsg(object: _23.QueryBatchInfoRequestAminoMsg): _23.QueryBatchInfoRequest;
                fromProtoMsg(message: _23.QueryBatchInfoRequestProtoMsg): _23.QueryBatchInfoRequest;
                toProto(message: _23.QueryBatchInfoRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBatchInfoRequest): _23.QueryBatchInfoRequestProtoMsg;
            };
            QueryBatchInfoResponse: {
                typeUrl: string;
                encode(message: _23.QueryBatchInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBatchInfoResponse;
                fromPartial(object: Partial<_23.QueryBatchInfoResponse>): _23.QueryBatchInfoResponse;
                fromAmino(object: _23.QueryBatchInfoResponseAmino): _23.QueryBatchInfoResponse;
                toAmino(message: _23.QueryBatchInfoResponse): _23.QueryBatchInfoResponseAmino;
                fromAminoMsg(object: _23.QueryBatchInfoResponseAminoMsg): _23.QueryBatchInfoResponse;
                fromProtoMsg(message: _23.QueryBatchInfoResponseProtoMsg): _23.QueryBatchInfoResponse;
                toProto(message: _23.QueryBatchInfoResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBatchInfoResponse): _23.QueryBatchInfoResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _23.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBalanceRequest;
                fromPartial(object: Partial<_23.QueryBalanceRequest>): _23.QueryBalanceRequest;
                fromAmino(object: _23.QueryBalanceRequestAmino): _23.QueryBalanceRequest;
                toAmino(message: _23.QueryBalanceRequest): _23.QueryBalanceRequestAmino;
                fromAminoMsg(object: _23.QueryBalanceRequestAminoMsg): _23.QueryBalanceRequest;
                fromProtoMsg(message: _23.QueryBalanceRequestProtoMsg): _23.QueryBalanceRequest;
                toProto(message: _23.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _23.QueryBalanceRequest): _23.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _23.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryBalanceResponse;
                fromPartial(object: Partial<_23.QueryBalanceResponse>): _23.QueryBalanceResponse;
                fromAmino(object: _23.QueryBalanceResponseAmino): _23.QueryBalanceResponse;
                toAmino(message: _23.QueryBalanceResponse): _23.QueryBalanceResponseAmino;
                fromAminoMsg(object: _23.QueryBalanceResponseAminoMsg): _23.QueryBalanceResponse;
                fromProtoMsg(message: _23.QueryBalanceResponseProtoMsg): _23.QueryBalanceResponse;
                toProto(message: _23.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _23.QueryBalanceResponse): _23.QueryBalanceResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _23.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QuerySupplyRequest;
                fromPartial(object: Partial<_23.QuerySupplyRequest>): _23.QuerySupplyRequest;
                fromAmino(object: _23.QuerySupplyRequestAmino): _23.QuerySupplyRequest;
                toAmino(message: _23.QuerySupplyRequest): _23.QuerySupplyRequestAmino;
                fromAminoMsg(object: _23.QuerySupplyRequestAminoMsg): _23.QuerySupplyRequest;
                fromProtoMsg(message: _23.QuerySupplyRequestProtoMsg): _23.QuerySupplyRequest;
                toProto(message: _23.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _23.QuerySupplyRequest): _23.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _23.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QuerySupplyResponse;
                fromPartial(object: Partial<_23.QuerySupplyResponse>): _23.QuerySupplyResponse;
                fromAmino(object: _23.QuerySupplyResponseAmino): _23.QuerySupplyResponse;
                toAmino(message: _23.QuerySupplyResponse): _23.QuerySupplyResponseAmino;
                fromAminoMsg(object: _23.QuerySupplyResponseAminoMsg): _23.QuerySupplyResponse;
                fromProtoMsg(message: _23.QuerySupplyResponseProtoMsg): _23.QuerySupplyResponse;
                toProto(message: _23.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _23.QuerySupplyResponse): _23.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                typeUrl: string;
                encode(_: _23.QueryCreditTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _23.QueryCreditTypesRequest;
                fromPartial(_: Partial<_23.QueryCreditTypesRequest>): _23.QueryCreditTypesRequest;
                fromAmino(_: _23.QueryCreditTypesRequestAmino): _23.QueryCreditTypesRequest;
                toAmino(_: _23.QueryCreditTypesRequest): _23.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _23.QueryCreditTypesRequestAminoMsg): _23.QueryCreditTypesRequest;
                fromProtoMsg(message: _23.QueryCreditTypesRequestProtoMsg): _23.QueryCreditTypesRequest;
                toProto(message: _23.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _23.QueryCreditTypesRequest): _23.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                typeUrl: string;
                encode(message: _23.QueryCreditTypesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.QueryCreditTypesResponse;
                fromPartial(object: Partial<_23.QueryCreditTypesResponse>): _23.QueryCreditTypesResponse;
                fromAmino(object: _23.QueryCreditTypesResponseAmino): _23.QueryCreditTypesResponse;
                toAmino(message: _23.QueryCreditTypesResponse): _23.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _23.QueryCreditTypesResponseAminoMsg): _23.QueryCreditTypesResponse;
                fromProtoMsg(message: _23.QueryCreditTypesResponseProtoMsg): _23.QueryCreditTypesResponse;
                toProto(message: _23.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _23.QueryCreditTypesResponse): _23.QueryCreditTypesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _22.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.GenesisState;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
                fromAmino(object: _22.GenesisStateAmino): _22.GenesisState;
                toAmino(message: _22.GenesisState): _22.GenesisStateAmino;
                fromAminoMsg(object: _22.GenesisStateAminoMsg): _22.GenesisState;
                fromProtoMsg(message: _22.GenesisStateProtoMsg): _22.GenesisState;
                toProto(message: _22.GenesisState): Uint8Array;
                toProtoMsg(message: _22.GenesisState): _22.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _22.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Balance;
                fromPartial(object: Partial<_22.Balance>): _22.Balance;
                fromAmino(object: _22.BalanceAmino): _22.Balance;
                toAmino(message: _22.Balance): _22.BalanceAmino;
                fromAminoMsg(object: _22.BalanceAminoMsg): _22.Balance;
                fromProtoMsg(message: _22.BalanceProtoMsg): _22.Balance;
                toProto(message: _22.Balance): Uint8Array;
                toProtoMsg(message: _22.Balance): _22.BalanceProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _22.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Supply;
                fromPartial(object: Partial<_22.Supply>): _22.Supply;
                fromAmino(object: _22.SupplyAmino): _22.Supply;
                toAmino(message: _22.Supply): _22.SupplyAmino;
                fromAminoMsg(object: _22.SupplyAminoMsg): _22.Supply;
                fromProtoMsg(message: _22.SupplyProtoMsg): _22.Supply;
                toProto(message: _22.Supply): Uint8Array;
                toProtoMsg(message: _22.Supply): _22.SupplyProtoMsg;
            };
            EventCreateClass: {
                typeUrl: string;
                encode(message: _21.EventCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.EventCreateClass;
                fromPartial(object: Partial<_21.EventCreateClass>): _21.EventCreateClass;
                fromAmino(object: _21.EventCreateClassAmino): _21.EventCreateClass;
                toAmino(message: _21.EventCreateClass): _21.EventCreateClassAmino;
                fromAminoMsg(object: _21.EventCreateClassAminoMsg): _21.EventCreateClass;
                fromProtoMsg(message: _21.EventCreateClassProtoMsg): _21.EventCreateClass;
                toProto(message: _21.EventCreateClass): Uint8Array;
                toProtoMsg(message: _21.EventCreateClass): _21.EventCreateClassProtoMsg;
            };
            EventCreateBatch: {
                typeUrl: string;
                encode(message: _21.EventCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.EventCreateBatch;
                fromPartial(object: Partial<_21.EventCreateBatch>): _21.EventCreateBatch;
                fromAmino(object: _21.EventCreateBatchAmino): _21.EventCreateBatch;
                toAmino(message: _21.EventCreateBatch): _21.EventCreateBatchAmino;
                fromAminoMsg(object: _21.EventCreateBatchAminoMsg): _21.EventCreateBatch;
                fromProtoMsg(message: _21.EventCreateBatchProtoMsg): _21.EventCreateBatch;
                toProto(message: _21.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _21.EventCreateBatch): _21.EventCreateBatchProtoMsg;
            };
            EventReceive: {
                typeUrl: string;
                encode(message: _21.EventReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.EventReceive;
                fromPartial(object: Partial<_21.EventReceive>): _21.EventReceive;
                fromAmino(object: _21.EventReceiveAmino): _21.EventReceive;
                toAmino(message: _21.EventReceive): _21.EventReceiveAmino;
                fromAminoMsg(object: _21.EventReceiveAminoMsg): _21.EventReceive;
                fromProtoMsg(message: _21.EventReceiveProtoMsg): _21.EventReceive;
                toProto(message: _21.EventReceive): Uint8Array;
                toProtoMsg(message: _21.EventReceive): _21.EventReceiveProtoMsg;
            };
            EventRetire: {
                typeUrl: string;
                encode(message: _21.EventRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.EventRetire;
                fromPartial(object: Partial<_21.EventRetire>): _21.EventRetire;
                fromAmino(object: _21.EventRetireAmino): _21.EventRetire;
                toAmino(message: _21.EventRetire): _21.EventRetireAmino;
                fromAminoMsg(object: _21.EventRetireAminoMsg): _21.EventRetire;
                fromProtoMsg(message: _21.EventRetireProtoMsg): _21.EventRetire;
                toProto(message: _21.EventRetire): Uint8Array;
                toProtoMsg(message: _21.EventRetire): _21.EventRetireProtoMsg;
            };
            EventCancel: {
                typeUrl: string;
                encode(message: _21.EventCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.EventCancel;
                fromPartial(object: Partial<_21.EventCancel>): _21.EventCancel;
                fromAmino(object: _21.EventCancelAmino): _21.EventCancel;
                toAmino(message: _21.EventCancel): _21.EventCancelAmino;
                fromAminoMsg(object: _21.EventCancelAminoMsg): _21.EventCancel;
                fromProtoMsg(message: _21.EventCancelProtoMsg): _21.EventCancel;
                toProto(message: _21.EventCancel): Uint8Array;
                toProtoMsg(message: _21.EventCancel): _21.EventCancelProtoMsg;
            };
        };
    }
    namespace group {
        const v1alpha1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _28.QueryGroupInfoRequest): Promise<_28.QueryGroupInfoResponse>;
                groupAccountInfo(request: _28.QueryGroupAccountInfoRequest): Promise<_28.QueryGroupAccountInfoResponse>;
                groupMembers(request: _28.QueryGroupMembersRequest): Promise<_28.QueryGroupMembersResponse>;
                groupsByAdmin(request: _28.QueryGroupsByAdminRequest): Promise<_28.QueryGroupsByAdminResponse>;
                groupAccountsByGroup(request: _28.QueryGroupAccountsByGroupRequest): Promise<_28.QueryGroupAccountsByGroupResponse>;
                groupAccountsByAdmin(request: _28.QueryGroupAccountsByAdminRequest): Promise<_28.QueryGroupAccountsByAdminResponse>;
                proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                proposalsByGroupAccount(request: _28.QueryProposalsByGroupAccountRequest): Promise<_28.QueryProposalsByGroupAccountResponse>;
                voteByProposalVoter(request: _28.QueryVoteByProposalVoterRequest): Promise<_28.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _28.QueryVotesByProposalRequest): Promise<_28.QueryVotesByProposalResponse>;
                votesByVoter(request: _28.QueryVotesByVoterRequest): Promise<_28.QueryVotesByVoterResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _29.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _29.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _29.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _29.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupAccount(value: _29.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountAdmin(value: _29.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountDecisionPolicy(value: _29.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountMetadata(value: _29.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProposal(value: _29.MsgCreateProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _29.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _29.MsgCreateGroup): {
                        typeUrl: string;
                        value: _29.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _29.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _29.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _29.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _29.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _29.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _29.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _29.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _29.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _29.MsgCreateProposal): {
                        typeUrl: string;
                        value: _29.MsgCreateProposal;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    exec(value: _29.MsgExec): {
                        typeUrl: string;
                        value: _29.MsgExec;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _29.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: any): {
                        typeUrl: string;
                        value: _29.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: any): {
                        typeUrl: string;
                        value: _29.MsgCreateProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _29.MsgExec;
                    };
                };
                fromPartial: {
                    createGroup(value: _29.MsgCreateGroup): {
                        typeUrl: string;
                        value: _29.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _29.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _29.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _29.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _29.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _29.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _29.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _29.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _29.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _29.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _29.MsgCreateProposal): {
                        typeUrl: string;
                        value: _29.MsgCreateProposal;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    exec(value: _29.MsgExec): {
                        typeUrl: string;
                        value: _29.MsgExec;
                    };
                };
            };
            AminoConverter: {
                "/regen.group.v1alpha1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _29.MsgCreateGroup) => _29.MsgCreateGroupAmino;
                    fromAmino: (object: _29.MsgCreateGroupAmino) => _29.MsgCreateGroup;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _29.MsgUpdateGroupMembers) => _29.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _29.MsgUpdateGroupMembersAmino) => _29.MsgUpdateGroupMembers;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _29.MsgUpdateGroupAdmin) => _29.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _29.MsgUpdateGroupAdminAmino) => _29.MsgUpdateGroupAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _29.MsgUpdateGroupMetadata) => _29.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _29.MsgUpdateGroupMetadataAmino) => _29.MsgUpdateGroupMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateGroupAccount": {
                    aminoType: string;
                    toAmino: (message: _29.MsgCreateGroupAccount) => _29.MsgCreateGroupAccountAmino;
                    fromAmino: (object: _29.MsgCreateGroupAccountAmino) => _29.MsgCreateGroupAccount;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
                    aminoType: string;
                    toAmino: (message: _29.MsgUpdateGroupAccountAdmin) => _29.MsgUpdateGroupAccountAdminAmino;
                    fromAmino: (object: _29.MsgUpdateGroupAccountAdminAmino) => _29.MsgUpdateGroupAccountAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _29.MsgUpdateGroupAccountDecisionPolicy) => _29.MsgUpdateGroupAccountDecisionPolicyAmino;
                    fromAmino: (object: _29.MsgUpdateGroupAccountDecisionPolicyAmino) => _29.MsgUpdateGroupAccountDecisionPolicy;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
                    aminoType: string;
                    toAmino: (message: _29.MsgUpdateGroupAccountMetadata) => _29.MsgUpdateGroupAccountMetadataAmino;
                    fromAmino: (object: _29.MsgUpdateGroupAccountMetadataAmino) => _29.MsgUpdateGroupAccountMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateProposal": {
                    aminoType: string;
                    toAmino: (message: _29.MsgCreateProposal) => _29.MsgCreateProposalAmino;
                    fromAmino: (object: _29.MsgCreateProposalAmino) => _29.MsgCreateProposal;
                };
                "/regen.group.v1alpha1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _29.MsgVote) => _29.MsgVoteAmino;
                    fromAmino: (object: _29.MsgVoteAmino) => _29.MsgVote;
                };
                "/regen.group.v1alpha1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _29.MsgExec) => _29.MsgExecAmino;
                    fromAmino: (object: _29.MsgExecAmino) => _29.MsgExec;
                };
            };
            choiceFromJSON(object: any): _30.Choice;
            choiceToJSON(object: _30.Choice): string;
            proposal_StatusFromJSON(object: any): _30.Proposal_Status;
            proposal_StatusToJSON(object: _30.Proposal_Status): string;
            proposal_ResultFromJSON(object: any): _30.Proposal_Result;
            proposal_ResultToJSON(object: _30.Proposal_Result): string;
            proposal_ExecutorResultFromJSON(object: any): _30.Proposal_ExecutorResult;
            proposal_ExecutorResultToJSON(object: _30.Proposal_ExecutorResult): string;
            Choice: typeof _30.Choice;
            ChoiceSDKType: typeof _30.Choice;
            ChoiceAmino: typeof _30.Choice;
            Proposal_Status: typeof _30.Proposal_Status;
            Proposal_StatusSDKType: typeof _30.Proposal_Status;
            Proposal_StatusAmino: typeof _30.Proposal_Status;
            Proposal_Result: typeof _30.Proposal_Result;
            Proposal_ResultSDKType: typeof _30.Proposal_Result;
            Proposal_ResultAmino: typeof _30.Proposal_Result;
            Proposal_ExecutorResult: typeof _30.Proposal_ExecutorResult;
            Proposal_ExecutorResultSDKType: typeof _30.Proposal_ExecutorResult;
            Proposal_ExecutorResultAmino: typeof _30.Proposal_ExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _30.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Member;
                fromPartial(object: Partial<_30.Member>): _30.Member;
                fromAmino(object: _30.MemberAmino): _30.Member;
                toAmino(message: _30.Member): _30.MemberAmino;
                fromAminoMsg(object: _30.MemberAminoMsg): _30.Member;
                fromProtoMsg(message: _30.MemberProtoMsg): _30.Member;
                toProto(message: _30.Member): Uint8Array;
                toProtoMsg(message: _30.Member): _30.MemberProtoMsg;
            };
            Members: {
                typeUrl: string;
                encode(message: _30.Members, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Members;
                fromPartial(object: Partial<_30.Members>): _30.Members;
                fromAmino(object: _30.MembersAmino): _30.Members;
                toAmino(message: _30.Members): _30.MembersAmino;
                fromAminoMsg(object: _30.MembersAminoMsg): _30.Members;
                fromProtoMsg(message: _30.MembersProtoMsg): _30.Members;
                toProto(message: _30.Members): Uint8Array;
                toProtoMsg(message: _30.Members): _30.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _30.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_30.ThresholdDecisionPolicy>): _30.ThresholdDecisionPolicy;
                fromAmino(object: _30.ThresholdDecisionPolicyAmino): _30.ThresholdDecisionPolicy;
                toAmino(message: _30.ThresholdDecisionPolicy): _30.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _30.ThresholdDecisionPolicyAminoMsg): _30.ThresholdDecisionPolicy;
                fromProtoMsg(message: _30.ThresholdDecisionPolicyProtoMsg): _30.ThresholdDecisionPolicy;
                toProto(message: _30.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _30.ThresholdDecisionPolicy): _30.ThresholdDecisionPolicyProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _30.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GroupInfo;
                fromPartial(object: Partial<_30.GroupInfo>): _30.GroupInfo;
                fromAmino(object: _30.GroupInfoAmino): _30.GroupInfo;
                toAmino(message: _30.GroupInfo): _30.GroupInfoAmino;
                fromAminoMsg(object: _30.GroupInfoAminoMsg): _30.GroupInfo;
                fromProtoMsg(message: _30.GroupInfoProtoMsg): _30.GroupInfo;
                toProto(message: _30.GroupInfo): Uint8Array;
                toProtoMsg(message: _30.GroupInfo): _30.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _30.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GroupMember;
                fromPartial(object: Partial<_30.GroupMember>): _30.GroupMember;
                fromAmino(object: _30.GroupMemberAmino): _30.GroupMember;
                toAmino(message: _30.GroupMember): _30.GroupMemberAmino;
                fromAminoMsg(object: _30.GroupMemberAminoMsg): _30.GroupMember;
                fromProtoMsg(message: _30.GroupMemberProtoMsg): _30.GroupMember;
                toProto(message: _30.GroupMember): Uint8Array;
                toProtoMsg(message: _30.GroupMember): _30.GroupMemberProtoMsg;
            };
            GroupAccountInfo: {
                typeUrl: string;
                encode(message: _30.GroupAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.GroupAccountInfo;
                fromPartial(object: Partial<_30.GroupAccountInfo>): _30.GroupAccountInfo;
                fromAmino(object: _30.GroupAccountInfoAmino): _30.GroupAccountInfo;
                toAmino(message: _30.GroupAccountInfo): _30.GroupAccountInfoAmino;
                fromAminoMsg(object: _30.GroupAccountInfoAminoMsg): _30.GroupAccountInfo;
                fromProtoMsg(message: _30.GroupAccountInfoProtoMsg): _30.GroupAccountInfo;
                toProto(message: _30.GroupAccountInfo): Uint8Array;
                toProtoMsg(message: _30.GroupAccountInfo): _30.GroupAccountInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _30.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Proposal;
                fromPartial(object: Partial<_30.Proposal>): _30.Proposal;
                fromAmino(object: _30.ProposalAmino): _30.Proposal;
                toAmino(message: _30.Proposal): _30.ProposalAmino;
                fromAminoMsg(object: _30.ProposalAminoMsg): _30.Proposal;
                fromProtoMsg(message: _30.ProposalProtoMsg): _30.Proposal;
                toProto(message: _30.Proposal): Uint8Array;
                toProtoMsg(message: _30.Proposal): _30.ProposalProtoMsg;
            };
            Tally: {
                typeUrl: string;
                encode(message: _30.Tally, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Tally;
                fromPartial(object: Partial<_30.Tally>): _30.Tally;
                fromAmino(object: _30.TallyAmino): _30.Tally;
                toAmino(message: _30.Tally): _30.TallyAmino;
                fromAminoMsg(object: _30.TallyAminoMsg): _30.Tally;
                fromProtoMsg(message: _30.TallyProtoMsg): _30.Tally;
                toProto(message: _30.Tally): Uint8Array;
                toProtoMsg(message: _30.Tally): _30.TallyProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _30.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Vote;
                fromPartial(object: Partial<_30.Vote>): _30.Vote;
                fromAmino(object: _30.VoteAmino): _30.Vote;
                toAmino(message: _30.Vote): _30.VoteAmino;
                fromAminoMsg(object: _30.VoteAminoMsg): _30.Vote;
                fromProtoMsg(message: _30.VoteProtoMsg): _30.Vote;
                toProto(message: _30.Vote): Uint8Array;
                toProtoMsg(message: _30.Vote): _30.VoteProtoMsg;
            };
            DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | import("../cosmos/group/v1/types").ThresholdDecisionPolicy | import("../cosmos/group/v1/types").PercentageDecisionPolicy | _30.ThresholdDecisionPolicy;
            DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _29.Exec;
            execToJSON(object: _29.Exec): string;
            Exec: typeof _29.Exec;
            ExecSDKType: typeof _29.Exec;
            ExecAmino: typeof _29.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _29.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgCreateGroup;
                fromPartial(object: Partial<_29.MsgCreateGroup>): _29.MsgCreateGroup;
                fromAmino(object: _29.MsgCreateGroupAmino): _29.MsgCreateGroup;
                toAmino(message: _29.MsgCreateGroup): _29.MsgCreateGroupAmino;
                fromAminoMsg(object: _29.MsgCreateGroupAminoMsg): _29.MsgCreateGroup;
                fromProtoMsg(message: _29.MsgCreateGroupProtoMsg): _29.MsgCreateGroup;
                toProto(message: _29.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _29.MsgCreateGroup): _29.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _29.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgCreateGroupResponse;
                fromPartial(object: Partial<_29.MsgCreateGroupResponse>): _29.MsgCreateGroupResponse;
                fromAmino(object: _29.MsgCreateGroupResponseAmino): _29.MsgCreateGroupResponse;
                toAmino(message: _29.MsgCreateGroupResponse): _29.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _29.MsgCreateGroupResponseAminoMsg): _29.MsgCreateGroupResponse;
                fromProtoMsg(message: _29.MsgCreateGroupResponseProtoMsg): _29.MsgCreateGroupResponse;
                toProto(message: _29.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _29.MsgCreateGroupResponse): _29.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _29.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_29.MsgUpdateGroupMembers>): _29.MsgUpdateGroupMembers;
                fromAmino(object: _29.MsgUpdateGroupMembersAmino): _29.MsgUpdateGroupMembers;
                toAmino(message: _29.MsgUpdateGroupMembers): _29.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupMembersAminoMsg): _29.MsgUpdateGroupMembers;
                fromProtoMsg(message: _29.MsgUpdateGroupMembersProtoMsg): _29.MsgUpdateGroupMembers;
                toProto(message: _29.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupMembers): _29.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _29.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_29.MsgUpdateGroupMembersResponse>): _29.MsgUpdateGroupMembersResponse;
                fromAmino(_: _29.MsgUpdateGroupMembersResponseAmino): _29.MsgUpdateGroupMembersResponse;
                toAmino(_: _29.MsgUpdateGroupMembersResponse): _29.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupMembersResponseAminoMsg): _29.MsgUpdateGroupMembersResponse;
                fromProtoMsg(message: _29.MsgUpdateGroupMembersResponseProtoMsg): _29.MsgUpdateGroupMembersResponse;
                toProto(message: _29.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupMembersResponse): _29.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _29.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_29.MsgUpdateGroupAdmin>): _29.MsgUpdateGroupAdmin;
                fromAmino(object: _29.MsgUpdateGroupAdminAmino): _29.MsgUpdateGroupAdmin;
                toAmino(message: _29.MsgUpdateGroupAdmin): _29.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupAdminAminoMsg): _29.MsgUpdateGroupAdmin;
                fromProtoMsg(message: _29.MsgUpdateGroupAdminProtoMsg): _29.MsgUpdateGroupAdmin;
                toProto(message: _29.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupAdmin): _29.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _29.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_29.MsgUpdateGroupAdminResponse>): _29.MsgUpdateGroupAdminResponse;
                fromAmino(_: _29.MsgUpdateGroupAdminResponseAmino): _29.MsgUpdateGroupAdminResponse;
                toAmino(_: _29.MsgUpdateGroupAdminResponse): _29.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupAdminResponseAminoMsg): _29.MsgUpdateGroupAdminResponse;
                fromProtoMsg(message: _29.MsgUpdateGroupAdminResponseProtoMsg): _29.MsgUpdateGroupAdminResponse;
                toProto(message: _29.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupAdminResponse): _29.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _29.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_29.MsgUpdateGroupMetadata>): _29.MsgUpdateGroupMetadata;
                fromAmino(object: _29.MsgUpdateGroupMetadataAmino): _29.MsgUpdateGroupMetadata;
                toAmino(message: _29.MsgUpdateGroupMetadata): _29.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupMetadataAminoMsg): _29.MsgUpdateGroupMetadata;
                fromProtoMsg(message: _29.MsgUpdateGroupMetadataProtoMsg): _29.MsgUpdateGroupMetadata;
                toProto(message: _29.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupMetadata): _29.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _29.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_29.MsgUpdateGroupMetadataResponse>): _29.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _29.MsgUpdateGroupMetadataResponseAmino): _29.MsgUpdateGroupMetadataResponse;
                toAmino(_: _29.MsgUpdateGroupMetadataResponse): _29.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupMetadataResponseAminoMsg): _29.MsgUpdateGroupMetadataResponse;
                fromProtoMsg(message: _29.MsgUpdateGroupMetadataResponseProtoMsg): _29.MsgUpdateGroupMetadataResponse;
                toProto(message: _29.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupMetadataResponse): _29.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupAccount: {
                typeUrl: string;
                encode(message: _29.MsgCreateGroupAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgCreateGroupAccount;
                fromPartial(object: Partial<_29.MsgCreateGroupAccount>): _29.MsgCreateGroupAccount;
                fromAmino(object: _29.MsgCreateGroupAccountAmino): _29.MsgCreateGroupAccount;
                toAmino(message: _29.MsgCreateGroupAccount): _29.MsgCreateGroupAccountAmino;
                fromAminoMsg(object: _29.MsgCreateGroupAccountAminoMsg): _29.MsgCreateGroupAccount;
                fromProtoMsg(message: _29.MsgCreateGroupAccountProtoMsg): _29.MsgCreateGroupAccount;
                toProto(message: _29.MsgCreateGroupAccount): Uint8Array;
                toProtoMsg(message: _29.MsgCreateGroupAccount): _29.MsgCreateGroupAccountProtoMsg;
            };
            MsgCreateGroupAccountResponse: {
                typeUrl: string;
                encode(message: _29.MsgCreateGroupAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgCreateGroupAccountResponse;
                fromPartial(object: Partial<_29.MsgCreateGroupAccountResponse>): _29.MsgCreateGroupAccountResponse;
                fromAmino(object: _29.MsgCreateGroupAccountResponseAmino): _29.MsgCreateGroupAccountResponse;
                toAmino(message: _29.MsgCreateGroupAccountResponse): _29.MsgCreateGroupAccountResponseAmino;
                fromAminoMsg(object: _29.MsgCreateGroupAccountResponseAminoMsg): _29.MsgCreateGroupAccountResponse;
                fromProtoMsg(message: _29.MsgCreateGroupAccountResponseProtoMsg): _29.MsgCreateGroupAccountResponse;
                toProto(message: _29.MsgCreateGroupAccountResponse): Uint8Array;
                toProtoMsg(message: _29.MsgCreateGroupAccountResponse): _29.MsgCreateGroupAccountResponseProtoMsg;
            };
            MsgUpdateGroupAccountAdmin: {
                typeUrl: string;
                encode(message: _29.MsgUpdateGroupAccountAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgUpdateGroupAccountAdmin;
                fromPartial(object: Partial<_29.MsgUpdateGroupAccountAdmin>): _29.MsgUpdateGroupAccountAdmin;
                fromAmino(object: _29.MsgUpdateGroupAccountAdminAmino): _29.MsgUpdateGroupAccountAdmin;
                toAmino(message: _29.MsgUpdateGroupAccountAdmin): _29.MsgUpdateGroupAccountAdminAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupAccountAdminAminoMsg): _29.MsgUpdateGroupAccountAdmin;
                fromProtoMsg(message: _29.MsgUpdateGroupAccountAdminProtoMsg): _29.MsgUpdateGroupAccountAdmin;
                toProto(message: _29.MsgUpdateGroupAccountAdmin): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupAccountAdmin): _29.MsgUpdateGroupAccountAdminProtoMsg;
            };
            MsgUpdateGroupAccountAdminResponse: {
                typeUrl: string;
                encode(_: _29.MsgUpdateGroupAccountAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgUpdateGroupAccountAdminResponse;
                fromPartial(_: Partial<_29.MsgUpdateGroupAccountAdminResponse>): _29.MsgUpdateGroupAccountAdminResponse;
                fromAmino(_: _29.MsgUpdateGroupAccountAdminResponseAmino): _29.MsgUpdateGroupAccountAdminResponse;
                toAmino(_: _29.MsgUpdateGroupAccountAdminResponse): _29.MsgUpdateGroupAccountAdminResponseAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupAccountAdminResponseAminoMsg): _29.MsgUpdateGroupAccountAdminResponse;
                fromProtoMsg(message: _29.MsgUpdateGroupAccountAdminResponseProtoMsg): _29.MsgUpdateGroupAccountAdminResponse;
                toProto(message: _29.MsgUpdateGroupAccountAdminResponse): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupAccountAdminResponse): _29.MsgUpdateGroupAccountAdminResponseProtoMsg;
            };
            MsgUpdateGroupAccountDecisionPolicy: {
                typeUrl: string;
                encode(message: _29.MsgUpdateGroupAccountDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgUpdateGroupAccountDecisionPolicy;
                fromPartial(object: Partial<_29.MsgUpdateGroupAccountDecisionPolicy>): _29.MsgUpdateGroupAccountDecisionPolicy;
                fromAmino(object: _29.MsgUpdateGroupAccountDecisionPolicyAmino): _29.MsgUpdateGroupAccountDecisionPolicy;
                toAmino(message: _29.MsgUpdateGroupAccountDecisionPolicy): _29.MsgUpdateGroupAccountDecisionPolicyAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupAccountDecisionPolicyAminoMsg): _29.MsgUpdateGroupAccountDecisionPolicy;
                fromProtoMsg(message: _29.MsgUpdateGroupAccountDecisionPolicyProtoMsg): _29.MsgUpdateGroupAccountDecisionPolicy;
                toProto(message: _29.MsgUpdateGroupAccountDecisionPolicy): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupAccountDecisionPolicy): _29.MsgUpdateGroupAccountDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupAccountDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _29.MsgUpdateGroupAccountDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromPartial(_: Partial<_29.MsgUpdateGroupAccountDecisionPolicyResponse>): _29.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromAmino(_: _29.MsgUpdateGroupAccountDecisionPolicyResponseAmino): _29.MsgUpdateGroupAccountDecisionPolicyResponse;
                toAmino(_: _29.MsgUpdateGroupAccountDecisionPolicyResponse): _29.MsgUpdateGroupAccountDecisionPolicyResponseAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupAccountDecisionPolicyResponseAminoMsg): _29.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromProtoMsg(message: _29.MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg): _29.MsgUpdateGroupAccountDecisionPolicyResponse;
                toProto(message: _29.MsgUpdateGroupAccountDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupAccountDecisionPolicyResponse): _29.MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupAccountMetadata: {
                typeUrl: string;
                encode(message: _29.MsgUpdateGroupAccountMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgUpdateGroupAccountMetadata;
                fromPartial(object: Partial<_29.MsgUpdateGroupAccountMetadata>): _29.MsgUpdateGroupAccountMetadata;
                fromAmino(object: _29.MsgUpdateGroupAccountMetadataAmino): _29.MsgUpdateGroupAccountMetadata;
                toAmino(message: _29.MsgUpdateGroupAccountMetadata): _29.MsgUpdateGroupAccountMetadataAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupAccountMetadataAminoMsg): _29.MsgUpdateGroupAccountMetadata;
                fromProtoMsg(message: _29.MsgUpdateGroupAccountMetadataProtoMsg): _29.MsgUpdateGroupAccountMetadata;
                toProto(message: _29.MsgUpdateGroupAccountMetadata): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupAccountMetadata): _29.MsgUpdateGroupAccountMetadataProtoMsg;
            };
            MsgUpdateGroupAccountMetadataResponse: {
                typeUrl: string;
                encode(_: _29.MsgUpdateGroupAccountMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgUpdateGroupAccountMetadataResponse;
                fromPartial(_: Partial<_29.MsgUpdateGroupAccountMetadataResponse>): _29.MsgUpdateGroupAccountMetadataResponse;
                fromAmino(_: _29.MsgUpdateGroupAccountMetadataResponseAmino): _29.MsgUpdateGroupAccountMetadataResponse;
                toAmino(_: _29.MsgUpdateGroupAccountMetadataResponse): _29.MsgUpdateGroupAccountMetadataResponseAmino;
                fromAminoMsg(object: _29.MsgUpdateGroupAccountMetadataResponseAminoMsg): _29.MsgUpdateGroupAccountMetadataResponse;
                fromProtoMsg(message: _29.MsgUpdateGroupAccountMetadataResponseProtoMsg): _29.MsgUpdateGroupAccountMetadataResponse;
                toProto(message: _29.MsgUpdateGroupAccountMetadataResponse): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateGroupAccountMetadataResponse): _29.MsgUpdateGroupAccountMetadataResponseProtoMsg;
            };
            MsgCreateProposal: {
                typeUrl: string;
                encode(message: _29.MsgCreateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgCreateProposal;
                fromPartial(object: Partial<_29.MsgCreateProposal>): _29.MsgCreateProposal;
                fromAmino(object: _29.MsgCreateProposalAmino): _29.MsgCreateProposal;
                toAmino(message: _29.MsgCreateProposal): _29.MsgCreateProposalAmino;
                fromAminoMsg(object: _29.MsgCreateProposalAminoMsg): _29.MsgCreateProposal;
                fromProtoMsg(message: _29.MsgCreateProposalProtoMsg): _29.MsgCreateProposal;
                toProto(message: _29.MsgCreateProposal): Uint8Array;
                toProtoMsg(message: _29.MsgCreateProposal): _29.MsgCreateProposalProtoMsg;
            };
            MsgCreateProposalResponse: {
                typeUrl: string;
                encode(message: _29.MsgCreateProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgCreateProposalResponse;
                fromPartial(object: Partial<_29.MsgCreateProposalResponse>): _29.MsgCreateProposalResponse;
                fromAmino(object: _29.MsgCreateProposalResponseAmino): _29.MsgCreateProposalResponse;
                toAmino(message: _29.MsgCreateProposalResponse): _29.MsgCreateProposalResponseAmino;
                fromAminoMsg(object: _29.MsgCreateProposalResponseAminoMsg): _29.MsgCreateProposalResponse;
                fromProtoMsg(message: _29.MsgCreateProposalResponseProtoMsg): _29.MsgCreateProposalResponse;
                toProto(message: _29.MsgCreateProposalResponse): Uint8Array;
                toProtoMsg(message: _29.MsgCreateProposalResponse): _29.MsgCreateProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _29.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgVote;
                fromPartial(object: Partial<_29.MsgVote>): _29.MsgVote;
                fromAmino(object: _29.MsgVoteAmino): _29.MsgVote;
                toAmino(message: _29.MsgVote): _29.MsgVoteAmino;
                fromAminoMsg(object: _29.MsgVoteAminoMsg): _29.MsgVote;
                fromProtoMsg(message: _29.MsgVoteProtoMsg): _29.MsgVote;
                toProto(message: _29.MsgVote): Uint8Array;
                toProtoMsg(message: _29.MsgVote): _29.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _29.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgVoteResponse;
                fromPartial(_: Partial<_29.MsgVoteResponse>): _29.MsgVoteResponse;
                fromAmino(_: _29.MsgVoteResponseAmino): _29.MsgVoteResponse;
                toAmino(_: _29.MsgVoteResponse): _29.MsgVoteResponseAmino;
                fromAminoMsg(object: _29.MsgVoteResponseAminoMsg): _29.MsgVoteResponse;
                fromProtoMsg(message: _29.MsgVoteResponseProtoMsg): _29.MsgVoteResponse;
                toProto(message: _29.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _29.MsgVoteResponse): _29.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _29.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgExec;
                fromPartial(object: Partial<_29.MsgExec>): _29.MsgExec;
                fromAmino(object: _29.MsgExecAmino): _29.MsgExec;
                toAmino(message: _29.MsgExec): _29.MsgExecAmino;
                fromAminoMsg(object: _29.MsgExecAminoMsg): _29.MsgExec;
                fromProtoMsg(message: _29.MsgExecProtoMsg): _29.MsgExec;
                toProto(message: _29.MsgExec): Uint8Array;
                toProtoMsg(message: _29.MsgExec): _29.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(_: _29.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgExecResponse;
                fromPartial(_: Partial<_29.MsgExecResponse>): _29.MsgExecResponse;
                fromAmino(_: _29.MsgExecResponseAmino): _29.MsgExecResponse;
                toAmino(_: _29.MsgExecResponse): _29.MsgExecResponseAmino;
                fromAminoMsg(object: _29.MsgExecResponseAminoMsg): _29.MsgExecResponse;
                fromProtoMsg(message: _29.MsgExecResponseProtoMsg): _29.MsgExecResponse;
                toProto(message: _29.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _29.MsgExecResponse): _29.MsgExecResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _28.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupInfoRequest;
                fromPartial(object: Partial<_28.QueryGroupInfoRequest>): _28.QueryGroupInfoRequest;
                fromAmino(object: _28.QueryGroupInfoRequestAmino): _28.QueryGroupInfoRequest;
                toAmino(message: _28.QueryGroupInfoRequest): _28.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _28.QueryGroupInfoRequestAminoMsg): _28.QueryGroupInfoRequest;
                fromProtoMsg(message: _28.QueryGroupInfoRequestProtoMsg): _28.QueryGroupInfoRequest;
                toProto(message: _28.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGroupInfoRequest): _28.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _28.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupInfoResponse;
                fromPartial(object: Partial<_28.QueryGroupInfoResponse>): _28.QueryGroupInfoResponse;
                fromAmino(object: _28.QueryGroupInfoResponseAmino): _28.QueryGroupInfoResponse;
                toAmino(message: _28.QueryGroupInfoResponse): _28.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _28.QueryGroupInfoResponseAminoMsg): _28.QueryGroupInfoResponse;
                fromProtoMsg(message: _28.QueryGroupInfoResponseProtoMsg): _28.QueryGroupInfoResponse;
                toProto(message: _28.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGroupInfoResponse): _28.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupAccountInfoRequest: {
                typeUrl: string;
                encode(message: _28.QueryGroupAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupAccountInfoRequest;
                fromPartial(object: Partial<_28.QueryGroupAccountInfoRequest>): _28.QueryGroupAccountInfoRequest;
                fromAmino(object: _28.QueryGroupAccountInfoRequestAmino): _28.QueryGroupAccountInfoRequest;
                toAmino(message: _28.QueryGroupAccountInfoRequest): _28.QueryGroupAccountInfoRequestAmino;
                fromAminoMsg(object: _28.QueryGroupAccountInfoRequestAminoMsg): _28.QueryGroupAccountInfoRequest;
                fromProtoMsg(message: _28.QueryGroupAccountInfoRequestProtoMsg): _28.QueryGroupAccountInfoRequest;
                toProto(message: _28.QueryGroupAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGroupAccountInfoRequest): _28.QueryGroupAccountInfoRequestProtoMsg;
            };
            QueryGroupAccountInfoResponse: {
                typeUrl: string;
                encode(message: _28.QueryGroupAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupAccountInfoResponse;
                fromPartial(object: Partial<_28.QueryGroupAccountInfoResponse>): _28.QueryGroupAccountInfoResponse;
                fromAmino(object: _28.QueryGroupAccountInfoResponseAmino): _28.QueryGroupAccountInfoResponse;
                toAmino(message: _28.QueryGroupAccountInfoResponse): _28.QueryGroupAccountInfoResponseAmino;
                fromAminoMsg(object: _28.QueryGroupAccountInfoResponseAminoMsg): _28.QueryGroupAccountInfoResponse;
                fromProtoMsg(message: _28.QueryGroupAccountInfoResponseProtoMsg): _28.QueryGroupAccountInfoResponse;
                toProto(message: _28.QueryGroupAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGroupAccountInfoResponse): _28.QueryGroupAccountInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _28.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupMembersRequest;
                fromPartial(object: Partial<_28.QueryGroupMembersRequest>): _28.QueryGroupMembersRequest;
                fromAmino(object: _28.QueryGroupMembersRequestAmino): _28.QueryGroupMembersRequest;
                toAmino(message: _28.QueryGroupMembersRequest): _28.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _28.QueryGroupMembersRequestAminoMsg): _28.QueryGroupMembersRequest;
                fromProtoMsg(message: _28.QueryGroupMembersRequestProtoMsg): _28.QueryGroupMembersRequest;
                toProto(message: _28.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGroupMembersRequest): _28.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _28.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupMembersResponse;
                fromPartial(object: Partial<_28.QueryGroupMembersResponse>): _28.QueryGroupMembersResponse;
                fromAmino(object: _28.QueryGroupMembersResponseAmino): _28.QueryGroupMembersResponse;
                toAmino(message: _28.QueryGroupMembersResponse): _28.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _28.QueryGroupMembersResponseAminoMsg): _28.QueryGroupMembersResponse;
                fromProtoMsg(message: _28.QueryGroupMembersResponseProtoMsg): _28.QueryGroupMembersResponse;
                toProto(message: _28.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGroupMembersResponse): _28.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _28.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_28.QueryGroupsByAdminRequest>): _28.QueryGroupsByAdminRequest;
                fromAmino(object: _28.QueryGroupsByAdminRequestAmino): _28.QueryGroupsByAdminRequest;
                toAmino(message: _28.QueryGroupsByAdminRequest): _28.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _28.QueryGroupsByAdminRequestAminoMsg): _28.QueryGroupsByAdminRequest;
                fromProtoMsg(message: _28.QueryGroupsByAdminRequestProtoMsg): _28.QueryGroupsByAdminRequest;
                toProto(message: _28.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGroupsByAdminRequest): _28.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _28.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_28.QueryGroupsByAdminResponse>): _28.QueryGroupsByAdminResponse;
                fromAmino(object: _28.QueryGroupsByAdminResponseAmino): _28.QueryGroupsByAdminResponse;
                toAmino(message: _28.QueryGroupsByAdminResponse): _28.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _28.QueryGroupsByAdminResponseAminoMsg): _28.QueryGroupsByAdminResponse;
                fromProtoMsg(message: _28.QueryGroupsByAdminResponseProtoMsg): _28.QueryGroupsByAdminResponse;
                toProto(message: _28.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGroupsByAdminResponse): _28.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupAccountsByGroupRequest: {
                typeUrl: string;
                encode(message: _28.QueryGroupAccountsByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupAccountsByGroupRequest;
                fromPartial(object: Partial<_28.QueryGroupAccountsByGroupRequest>): _28.QueryGroupAccountsByGroupRequest;
                fromAmino(object: _28.QueryGroupAccountsByGroupRequestAmino): _28.QueryGroupAccountsByGroupRequest;
                toAmino(message: _28.QueryGroupAccountsByGroupRequest): _28.QueryGroupAccountsByGroupRequestAmino;
                fromAminoMsg(object: _28.QueryGroupAccountsByGroupRequestAminoMsg): _28.QueryGroupAccountsByGroupRequest;
                fromProtoMsg(message: _28.QueryGroupAccountsByGroupRequestProtoMsg): _28.QueryGroupAccountsByGroupRequest;
                toProto(message: _28.QueryGroupAccountsByGroupRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGroupAccountsByGroupRequest): _28.QueryGroupAccountsByGroupRequestProtoMsg;
            };
            QueryGroupAccountsByGroupResponse: {
                typeUrl: string;
                encode(message: _28.QueryGroupAccountsByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupAccountsByGroupResponse;
                fromPartial(object: Partial<_28.QueryGroupAccountsByGroupResponse>): _28.QueryGroupAccountsByGroupResponse;
                fromAmino(object: _28.QueryGroupAccountsByGroupResponseAmino): _28.QueryGroupAccountsByGroupResponse;
                toAmino(message: _28.QueryGroupAccountsByGroupResponse): _28.QueryGroupAccountsByGroupResponseAmino;
                fromAminoMsg(object: _28.QueryGroupAccountsByGroupResponseAminoMsg): _28.QueryGroupAccountsByGroupResponse;
                fromProtoMsg(message: _28.QueryGroupAccountsByGroupResponseProtoMsg): _28.QueryGroupAccountsByGroupResponse;
                toProto(message: _28.QueryGroupAccountsByGroupResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGroupAccountsByGroupResponse): _28.QueryGroupAccountsByGroupResponseProtoMsg;
            };
            QueryGroupAccountsByAdminRequest: {
                typeUrl: string;
                encode(message: _28.QueryGroupAccountsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupAccountsByAdminRequest;
                fromPartial(object: Partial<_28.QueryGroupAccountsByAdminRequest>): _28.QueryGroupAccountsByAdminRequest;
                fromAmino(object: _28.QueryGroupAccountsByAdminRequestAmino): _28.QueryGroupAccountsByAdminRequest;
                toAmino(message: _28.QueryGroupAccountsByAdminRequest): _28.QueryGroupAccountsByAdminRequestAmino;
                fromAminoMsg(object: _28.QueryGroupAccountsByAdminRequestAminoMsg): _28.QueryGroupAccountsByAdminRequest;
                fromProtoMsg(message: _28.QueryGroupAccountsByAdminRequestProtoMsg): _28.QueryGroupAccountsByAdminRequest;
                toProto(message: _28.QueryGroupAccountsByAdminRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGroupAccountsByAdminRequest): _28.QueryGroupAccountsByAdminRequestProtoMsg;
            };
            QueryGroupAccountsByAdminResponse: {
                typeUrl: string;
                encode(message: _28.QueryGroupAccountsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGroupAccountsByAdminResponse;
                fromPartial(object: Partial<_28.QueryGroupAccountsByAdminResponse>): _28.QueryGroupAccountsByAdminResponse;
                fromAmino(object: _28.QueryGroupAccountsByAdminResponseAmino): _28.QueryGroupAccountsByAdminResponse;
                toAmino(message: _28.QueryGroupAccountsByAdminResponse): _28.QueryGroupAccountsByAdminResponseAmino;
                fromAminoMsg(object: _28.QueryGroupAccountsByAdminResponseAminoMsg): _28.QueryGroupAccountsByAdminResponse;
                fromProtoMsg(message: _28.QueryGroupAccountsByAdminResponseProtoMsg): _28.QueryGroupAccountsByAdminResponse;
                toProto(message: _28.QueryGroupAccountsByAdminResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGroupAccountsByAdminResponse): _28.QueryGroupAccountsByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _28.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryProposalRequest;
                fromPartial(object: Partial<_28.QueryProposalRequest>): _28.QueryProposalRequest;
                fromAmino(object: _28.QueryProposalRequestAmino): _28.QueryProposalRequest;
                toAmino(message: _28.QueryProposalRequest): _28.QueryProposalRequestAmino;
                fromAminoMsg(object: _28.QueryProposalRequestAminoMsg): _28.QueryProposalRequest;
                fromProtoMsg(message: _28.QueryProposalRequestProtoMsg): _28.QueryProposalRequest;
                toProto(message: _28.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _28.QueryProposalRequest): _28.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _28.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryProposalResponse;
                fromPartial(object: Partial<_28.QueryProposalResponse>): _28.QueryProposalResponse;
                fromAmino(object: _28.QueryProposalResponseAmino): _28.QueryProposalResponse;
                toAmino(message: _28.QueryProposalResponse): _28.QueryProposalResponseAmino;
                fromAminoMsg(object: _28.QueryProposalResponseAminoMsg): _28.QueryProposalResponse;
                fromProtoMsg(message: _28.QueryProposalResponseProtoMsg): _28.QueryProposalResponse;
                toProto(message: _28.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _28.QueryProposalResponse): _28.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupAccountRequest: {
                typeUrl: string;
                encode(message: _28.QueryProposalsByGroupAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryProposalsByGroupAccountRequest;
                fromPartial(object: Partial<_28.QueryProposalsByGroupAccountRequest>): _28.QueryProposalsByGroupAccountRequest;
                fromAmino(object: _28.QueryProposalsByGroupAccountRequestAmino): _28.QueryProposalsByGroupAccountRequest;
                toAmino(message: _28.QueryProposalsByGroupAccountRequest): _28.QueryProposalsByGroupAccountRequestAmino;
                fromAminoMsg(object: _28.QueryProposalsByGroupAccountRequestAminoMsg): _28.QueryProposalsByGroupAccountRequest;
                fromProtoMsg(message: _28.QueryProposalsByGroupAccountRequestProtoMsg): _28.QueryProposalsByGroupAccountRequest;
                toProto(message: _28.QueryProposalsByGroupAccountRequest): Uint8Array;
                toProtoMsg(message: _28.QueryProposalsByGroupAccountRequest): _28.QueryProposalsByGroupAccountRequestProtoMsg;
            };
            QueryProposalsByGroupAccountResponse: {
                typeUrl: string;
                encode(message: _28.QueryProposalsByGroupAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryProposalsByGroupAccountResponse;
                fromPartial(object: Partial<_28.QueryProposalsByGroupAccountResponse>): _28.QueryProposalsByGroupAccountResponse;
                fromAmino(object: _28.QueryProposalsByGroupAccountResponseAmino): _28.QueryProposalsByGroupAccountResponse;
                toAmino(message: _28.QueryProposalsByGroupAccountResponse): _28.QueryProposalsByGroupAccountResponseAmino;
                fromAminoMsg(object: _28.QueryProposalsByGroupAccountResponseAminoMsg): _28.QueryProposalsByGroupAccountResponse;
                fromProtoMsg(message: _28.QueryProposalsByGroupAccountResponseProtoMsg): _28.QueryProposalsByGroupAccountResponse;
                toProto(message: _28.QueryProposalsByGroupAccountResponse): Uint8Array;
                toProtoMsg(message: _28.QueryProposalsByGroupAccountResponse): _28.QueryProposalsByGroupAccountResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _28.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_28.QueryVoteByProposalVoterRequest>): _28.QueryVoteByProposalVoterRequest;
                fromAmino(object: _28.QueryVoteByProposalVoterRequestAmino): _28.QueryVoteByProposalVoterRequest;
                toAmino(message: _28.QueryVoteByProposalVoterRequest): _28.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _28.QueryVoteByProposalVoterRequestAminoMsg): _28.QueryVoteByProposalVoterRequest;
                fromProtoMsg(message: _28.QueryVoteByProposalVoterRequestProtoMsg): _28.QueryVoteByProposalVoterRequest;
                toProto(message: _28.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _28.QueryVoteByProposalVoterRequest): _28.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _28.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_28.QueryVoteByProposalVoterResponse>): _28.QueryVoteByProposalVoterResponse;
                fromAmino(object: _28.QueryVoteByProposalVoterResponseAmino): _28.QueryVoteByProposalVoterResponse;
                toAmino(message: _28.QueryVoteByProposalVoterResponse): _28.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _28.QueryVoteByProposalVoterResponseAminoMsg): _28.QueryVoteByProposalVoterResponse;
                fromProtoMsg(message: _28.QueryVoteByProposalVoterResponseProtoMsg): _28.QueryVoteByProposalVoterResponse;
                toProto(message: _28.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _28.QueryVoteByProposalVoterResponse): _28.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _28.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_28.QueryVotesByProposalRequest>): _28.QueryVotesByProposalRequest;
                fromAmino(object: _28.QueryVotesByProposalRequestAmino): _28.QueryVotesByProposalRequest;
                toAmino(message: _28.QueryVotesByProposalRequest): _28.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _28.QueryVotesByProposalRequestAminoMsg): _28.QueryVotesByProposalRequest;
                fromProtoMsg(message: _28.QueryVotesByProposalRequestProtoMsg): _28.QueryVotesByProposalRequest;
                toProto(message: _28.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _28.QueryVotesByProposalRequest): _28.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _28.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_28.QueryVotesByProposalResponse>): _28.QueryVotesByProposalResponse;
                fromAmino(object: _28.QueryVotesByProposalResponseAmino): _28.QueryVotesByProposalResponse;
                toAmino(message: _28.QueryVotesByProposalResponse): _28.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _28.QueryVotesByProposalResponseAminoMsg): _28.QueryVotesByProposalResponse;
                fromProtoMsg(message: _28.QueryVotesByProposalResponseProtoMsg): _28.QueryVotesByProposalResponse;
                toProto(message: _28.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _28.QueryVotesByProposalResponse): _28.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _28.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_28.QueryVotesByVoterRequest>): _28.QueryVotesByVoterRequest;
                fromAmino(object: _28.QueryVotesByVoterRequestAmino): _28.QueryVotesByVoterRequest;
                toAmino(message: _28.QueryVotesByVoterRequest): _28.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _28.QueryVotesByVoterRequestAminoMsg): _28.QueryVotesByVoterRequest;
                fromProtoMsg(message: _28.QueryVotesByVoterRequestProtoMsg): _28.QueryVotesByVoterRequest;
                toProto(message: _28.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _28.QueryVotesByVoterRequest): _28.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _28.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_28.QueryVotesByVoterResponse>): _28.QueryVotesByVoterResponse;
                fromAmino(object: _28.QueryVotesByVoterResponseAmino): _28.QueryVotesByVoterResponse;
                toAmino(message: _28.QueryVotesByVoterResponse): _28.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _28.QueryVotesByVoterResponseAminoMsg): _28.QueryVotesByVoterResponse;
                fromProtoMsg(message: _28.QueryVotesByVoterResponseProtoMsg): _28.QueryVotesByVoterResponse;
                toProto(message: _28.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _28.QueryVotesByVoterResponse): _28.QueryVotesByVoterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _27.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _26.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventCreateGroup;
                fromPartial(object: Partial<_26.EventCreateGroup>): _26.EventCreateGroup;
                fromAmino(object: _26.EventCreateGroupAmino): _26.EventCreateGroup;
                toAmino(message: _26.EventCreateGroup): _26.EventCreateGroupAmino;
                fromAminoMsg(object: _26.EventCreateGroupAminoMsg): _26.EventCreateGroup;
                fromProtoMsg(message: _26.EventCreateGroupProtoMsg): _26.EventCreateGroup;
                toProto(message: _26.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _26.EventCreateGroup): _26.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _26.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventUpdateGroup;
                fromPartial(object: Partial<_26.EventUpdateGroup>): _26.EventUpdateGroup;
                fromAmino(object: _26.EventUpdateGroupAmino): _26.EventUpdateGroup;
                toAmino(message: _26.EventUpdateGroup): _26.EventUpdateGroupAmino;
                fromAminoMsg(object: _26.EventUpdateGroupAminoMsg): _26.EventUpdateGroup;
                fromProtoMsg(message: _26.EventUpdateGroupProtoMsg): _26.EventUpdateGroup;
                toProto(message: _26.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _26.EventUpdateGroup): _26.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupAccount: {
                typeUrl: string;
                encode(message: _26.EventCreateGroupAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventCreateGroupAccount;
                fromPartial(object: Partial<_26.EventCreateGroupAccount>): _26.EventCreateGroupAccount;
                fromAmino(object: _26.EventCreateGroupAccountAmino): _26.EventCreateGroupAccount;
                toAmino(message: _26.EventCreateGroupAccount): _26.EventCreateGroupAccountAmino;
                fromAminoMsg(object: _26.EventCreateGroupAccountAminoMsg): _26.EventCreateGroupAccount;
                fromProtoMsg(message: _26.EventCreateGroupAccountProtoMsg): _26.EventCreateGroupAccount;
                toProto(message: _26.EventCreateGroupAccount): Uint8Array;
                toProtoMsg(message: _26.EventCreateGroupAccount): _26.EventCreateGroupAccountProtoMsg;
            };
            EventUpdateGroupAccount: {
                typeUrl: string;
                encode(message: _26.EventUpdateGroupAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventUpdateGroupAccount;
                fromPartial(object: Partial<_26.EventUpdateGroupAccount>): _26.EventUpdateGroupAccount;
                fromAmino(object: _26.EventUpdateGroupAccountAmino): _26.EventUpdateGroupAccount;
                toAmino(message: _26.EventUpdateGroupAccount): _26.EventUpdateGroupAccountAmino;
                fromAminoMsg(object: _26.EventUpdateGroupAccountAminoMsg): _26.EventUpdateGroupAccount;
                fromProtoMsg(message: _26.EventUpdateGroupAccountProtoMsg): _26.EventUpdateGroupAccount;
                toProto(message: _26.EventUpdateGroupAccount): Uint8Array;
                toProtoMsg(message: _26.EventUpdateGroupAccount): _26.EventUpdateGroupAccountProtoMsg;
            };
            EventCreateProposal: {
                typeUrl: string;
                encode(message: _26.EventCreateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventCreateProposal;
                fromPartial(object: Partial<_26.EventCreateProposal>): _26.EventCreateProposal;
                fromAmino(object: _26.EventCreateProposalAmino): _26.EventCreateProposal;
                toAmino(message: _26.EventCreateProposal): _26.EventCreateProposalAmino;
                fromAminoMsg(object: _26.EventCreateProposalAminoMsg): _26.EventCreateProposal;
                fromProtoMsg(message: _26.EventCreateProposalProtoMsg): _26.EventCreateProposal;
                toProto(message: _26.EventCreateProposal): Uint8Array;
                toProtoMsg(message: _26.EventCreateProposal): _26.EventCreateProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _26.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventVote;
                fromPartial(object: Partial<_26.EventVote>): _26.EventVote;
                fromAmino(object: _26.EventVoteAmino): _26.EventVote;
                toAmino(message: _26.EventVote): _26.EventVoteAmino;
                fromAminoMsg(object: _26.EventVoteAminoMsg): _26.EventVote;
                fromProtoMsg(message: _26.EventVoteProtoMsg): _26.EventVote;
                toProto(message: _26.EventVote): Uint8Array;
                toProtoMsg(message: _26.EventVote): _26.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _26.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.EventExec;
                fromPartial(object: Partial<_26.EventExec>): _26.EventExec;
                fromAmino(object: _26.EventExecAmino): _26.EventExec;
                toAmino(message: _26.EventExec): _26.EventExecAmino;
                fromAminoMsg(object: _26.EventExecAminoMsg): _26.EventExec;
                fromProtoMsg(message: _26.EventExecProtoMsg): _26.EventExec;
                toProto(message: _26.EventExec): Uint8Array;
                toProtoMsg(message: _26.EventExec): _26.EventExecProtoMsg;
            };
        };
    }
    namespace intertx {
        const v1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                interchainAccount(request: _31.QueryInterchainAccountRequest): Promise<_31.QueryInterchainAccountResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _32.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _32.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _32.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _32.MsgRegisterAccount;
                    };
                    submitTx(value: _32.MsgSubmitTx): {
                        typeUrl: string;
                        value: _32.MsgSubmitTx;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _32.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _32.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _32.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _32.MsgRegisterAccount;
                    };
                    submitTx(value: _32.MsgSubmitTx): {
                        typeUrl: string;
                        value: _32.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/regen.intertx.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: (message: _32.MsgRegisterAccount) => _32.MsgRegisterAccountAmino;
                    fromAmino: (object: _32.MsgRegisterAccountAmino) => _32.MsgRegisterAccount;
                };
                "/regen.intertx.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: _32.MsgSubmitTx) => _32.MsgSubmitTxAmino;
                    fromAmino: (object: _32.MsgSubmitTxAmino) => _32.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                typeUrl: string;
                encode(message: _32.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgRegisterAccount;
                fromPartial(object: Partial<_32.MsgRegisterAccount>): _32.MsgRegisterAccount;
                fromAmino(object: _32.MsgRegisterAccountAmino): _32.MsgRegisterAccount;
                toAmino(message: _32.MsgRegisterAccount): _32.MsgRegisterAccountAmino;
                fromAminoMsg(object: _32.MsgRegisterAccountAminoMsg): _32.MsgRegisterAccount;
                fromProtoMsg(message: _32.MsgRegisterAccountProtoMsg): _32.MsgRegisterAccount;
                toProto(message: _32.MsgRegisterAccount): Uint8Array;
                toProtoMsg(message: _32.MsgRegisterAccount): _32.MsgRegisterAccountProtoMsg;
            };
            MsgRegisterAccountResponse: {
                typeUrl: string;
                encode(_: _32.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgRegisterAccountResponse;
                fromPartial(_: Partial<_32.MsgRegisterAccountResponse>): _32.MsgRegisterAccountResponse;
                fromAmino(_: _32.MsgRegisterAccountResponseAmino): _32.MsgRegisterAccountResponse;
                toAmino(_: _32.MsgRegisterAccountResponse): _32.MsgRegisterAccountResponseAmino;
                fromAminoMsg(object: _32.MsgRegisterAccountResponseAminoMsg): _32.MsgRegisterAccountResponse;
                fromProtoMsg(message: _32.MsgRegisterAccountResponseProtoMsg): _32.MsgRegisterAccountResponse;
                toProto(message: _32.MsgRegisterAccountResponse): Uint8Array;
                toProtoMsg(message: _32.MsgRegisterAccountResponse): _32.MsgRegisterAccountResponseProtoMsg;
            };
            MsgSubmitTx: {
                typeUrl: string;
                encode(message: _32.MsgSubmitTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.MsgSubmitTx;
                fromPartial(object: Partial<_32.MsgSubmitTx>): _32.MsgSubmitTx;
                fromAmino(object: _32.MsgSubmitTxAmino): _32.MsgSubmitTx;
                toAmino(message: _32.MsgSubmitTx): _32.MsgSubmitTxAmino;
                fromAminoMsg(object: _32.MsgSubmitTxAminoMsg): _32.MsgSubmitTx;
                fromProtoMsg(message: _32.MsgSubmitTxProtoMsg): _32.MsgSubmitTx;
                toProto(message: _32.MsgSubmitTx): Uint8Array;
                toProtoMsg(message: _32.MsgSubmitTx): _32.MsgSubmitTxProtoMsg;
            };
            MsgSubmitTxResponse: {
                typeUrl: string;
                encode(_: _32.MsgSubmitTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.MsgSubmitTxResponse;
                fromPartial(_: Partial<_32.MsgSubmitTxResponse>): _32.MsgSubmitTxResponse;
                fromAmino(_: _32.MsgSubmitTxResponseAmino): _32.MsgSubmitTxResponse;
                toAmino(_: _32.MsgSubmitTxResponse): _32.MsgSubmitTxResponseAmino;
                fromAminoMsg(object: _32.MsgSubmitTxResponseAminoMsg): _32.MsgSubmitTxResponse;
                fromProtoMsg(message: _32.MsgSubmitTxResponseProtoMsg): _32.MsgSubmitTxResponse;
                toProto(message: _32.MsgSubmitTxResponse): Uint8Array;
                toProtoMsg(message: _32.MsgSubmitTxResponse): _32.MsgSubmitTxResponseProtoMsg;
            };
            QueryInterchainAccountRequest: {
                typeUrl: string;
                encode(message: _31.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryInterchainAccountRequest;
                fromPartial(object: Partial<_31.QueryInterchainAccountRequest>): _31.QueryInterchainAccountRequest;
                fromAmino(object: _31.QueryInterchainAccountRequestAmino): _31.QueryInterchainAccountRequest;
                toAmino(message: _31.QueryInterchainAccountRequest): _31.QueryInterchainAccountRequestAmino;
                fromAminoMsg(object: _31.QueryInterchainAccountRequestAminoMsg): _31.QueryInterchainAccountRequest;
                fromProtoMsg(message: _31.QueryInterchainAccountRequestProtoMsg): _31.QueryInterchainAccountRequest;
                toProto(message: _31.QueryInterchainAccountRequest): Uint8Array;
                toProtoMsg(message: _31.QueryInterchainAccountRequest): _31.QueryInterchainAccountRequestProtoMsg;
            };
            QueryInterchainAccountResponse: {
                typeUrl: string;
                encode(message: _31.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryInterchainAccountResponse;
                fromPartial(object: Partial<_31.QueryInterchainAccountResponse>): _31.QueryInterchainAccountResponse;
                fromAmino(object: _31.QueryInterchainAccountResponseAmino): _31.QueryInterchainAccountResponse;
                toAmino(message: _31.QueryInterchainAccountResponse): _31.QueryInterchainAccountResponseAmino;
                fromAminoMsg(object: _31.QueryInterchainAccountResponseAminoMsg): _31.QueryInterchainAccountResponse;
                fromProtoMsg(message: _31.QueryInterchainAccountResponseProtoMsg): _31.QueryInterchainAccountResponse;
                toProto(message: _31.QueryInterchainAccountResponse): Uint8Array;
                toProtoMsg(message: _31.QueryInterchainAccountResponse): _31.QueryInterchainAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            regen: {
                data: {
                    v1: _177.MsgClientImpl;
                };
                ecocredit: {
                    basket: {
                        v1: _178.MsgClientImpl;
                    };
                    marketplace: {
                        v1: _179.MsgClientImpl;
                    };
                    v1: _180.MsgClientImpl;
                    v1alpha1: _181.MsgClientImpl;
                };
                group: {
                    v1alpha1: _182.MsgClientImpl;
                };
                intertx: {
                    v1: _183.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            regen: {
                data: {
                    v1: {
                        anchorByIRI(request: _1.QueryAnchorByIRIRequest): Promise<_1.QueryAnchorByIRIResponse>;
                        anchorByHash(request: _1.QueryAnchorByHashRequest): Promise<_1.QueryAnchorByHashResponse>;
                        attestationsByAttestor(request: _1.QueryAttestationsByAttestorRequest): Promise<_1.QueryAttestationsByAttestorResponse>;
                        attestationsByIRI(request: _1.QueryAttestationsByIRIRequest): Promise<_1.QueryAttestationsByIRIResponse>;
                        attestationsByHash(request: _1.QueryAttestationsByHashRequest): Promise<_1.QueryAttestationsByHashResponse>;
                        resolver(request: _1.QueryResolverRequest): Promise<_1.QueryResolverResponse>;
                        resolversByIRI(request: _1.QueryResolversByIRIRequest): Promise<_1.QueryResolversByIRIResponse>;
                        resolversByHash(request: _1.QueryResolversByHashRequest): Promise<_1.QueryResolversByHashResponse>;
                        resolversByURL(request: _1.QueryResolversByURLRequest): Promise<_1.QueryResolversByURLResponse>;
                        convertIRIToHash(request: _1.ConvertIRIToHashRequest): Promise<_1.ConvertIRIToHashResponse>;
                        convertHashToIRI(request: _1.ConvertHashToIRIRequest): Promise<_1.ConvertHashToIRIResponse>;
                    };
                };
                ecocredit: {
                    basket: {
                        v1: {
                            basket(request: _6.QueryBasketRequest): Promise<_6.QueryBasketResponse>;
                            baskets(request?: _6.QueryBasketsRequest): Promise<_6.QueryBasketsResponse>;
                            basketBalances(request: _6.QueryBasketBalancesRequest): Promise<_6.QueryBasketBalancesResponse>;
                            basketBalance(request: _6.QueryBasketBalanceRequest): Promise<_6.QueryBasketBalanceResponse>;
                            basketFee(request?: _6.QueryBasketFeeRequest): Promise<_6.QueryBasketFeeResponse>;
                        };
                    };
                    marketplace: {
                        v1: {
                            sellOrder(request: _11.QuerySellOrderRequest): Promise<_11.QuerySellOrderResponse>;
                            sellOrders(request?: _11.QuerySellOrdersRequest): Promise<_11.QuerySellOrdersResponse>;
                            sellOrdersByBatch(request: _11.QuerySellOrdersByBatchRequest): Promise<_11.QuerySellOrdersByBatchResponse>;
                            sellOrdersBySeller(request: _11.QuerySellOrdersBySellerRequest): Promise<_11.QuerySellOrdersBySellerResponse>;
                            allowedDenoms(request?: _11.QueryAllowedDenomsRequest): Promise<_11.QueryAllowedDenomsResponse>;
                        };
                    };
                    v1: {
                        classes(request?: _17.QueryClassesRequest): Promise<_17.QueryClassesResponse>;
                        classesByAdmin(request: _17.QueryClassesByAdminRequest): Promise<_17.QueryClassesByAdminResponse>;
                        class(request: _17.QueryClassRequest): Promise<_17.QueryClassResponse>;
                        classIssuers(request: _17.QueryClassIssuersRequest): Promise<_17.QueryClassIssuersResponse>;
                        projects(request?: _17.QueryProjectsRequest): Promise<_17.QueryProjectsResponse>;
                        projectsByClass(request: _17.QueryProjectsByClassRequest): Promise<_17.QueryProjectsByClassResponse>;
                        projectsByReferenceId(request: _17.QueryProjectsByReferenceIdRequest): Promise<_17.QueryProjectsByReferenceIdResponse>;
                        projectsByAdmin(request: _17.QueryProjectsByAdminRequest): Promise<_17.QueryProjectsByAdminResponse>;
                        project(request: _17.QueryProjectRequest): Promise<_17.QueryProjectResponse>;
                        batches(request?: _17.QueryBatchesRequest): Promise<_17.QueryBatchesResponse>;
                        batchesByIssuer(request: _17.QueryBatchesByIssuerRequest): Promise<_17.QueryBatchesByIssuerResponse>;
                        batchesByClass(request: _17.QueryBatchesByClassRequest): Promise<_17.QueryBatchesByClassResponse>;
                        batchesByProject(request: _17.QueryBatchesByProjectRequest): Promise<_17.QueryBatchesByProjectResponse>;
                        batch(request: _17.QueryBatchRequest): Promise<_17.QueryBatchResponse>;
                        balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                        balances(request: _17.QueryBalancesRequest): Promise<_17.QueryBalancesResponse>;
                        balancesByBatch(request: _17.QueryBalancesByBatchRequest): Promise<_17.QueryBalancesByBatchResponse>;
                        allBalances(request?: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                        supply(request: _17.QuerySupplyRequest): Promise<_17.QuerySupplyResponse>;
                        creditTypes(request?: _17.QueryCreditTypesRequest): Promise<_17.QueryCreditTypesResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        creditType(request: _17.QueryCreditTypeRequest): Promise<_17.QueryCreditTypeResponse>;
                        classCreatorAllowlist(request?: _17.QueryClassCreatorAllowlistRequest): Promise<_17.QueryClassCreatorAllowlistResponse>;
                        allowedClassCreators(request?: _17.QueryAllowedClassCreatorsRequest): Promise<_17.QueryAllowedClassCreatorsResponse>;
                        classFee(request?: _17.QueryClassFeeRequest): Promise<_17.QueryClassFeeResponse>;
                        allowedBridgeChains(request?: _17.QueryAllowedBridgeChainsRequest): Promise<_17.QueryAllowedBridgeChainsResponse>;
                    };
                    v1alpha1: {
                        classes(request?: _23.QueryClassesRequest): Promise<_23.QueryClassesResponse>;
                        classInfo(request: _23.QueryClassInfoRequest): Promise<_23.QueryClassInfoResponse>;
                        batches(request: _23.QueryBatchesRequest): Promise<_23.QueryBatchesResponse>;
                        batchInfo(request: _23.QueryBatchInfoRequest): Promise<_23.QueryBatchInfoResponse>;
                        balance(request: _23.QueryBalanceRequest): Promise<_23.QueryBalanceResponse>;
                        supply(request: _23.QuerySupplyRequest): Promise<_23.QuerySupplyResponse>;
                        creditTypes(request?: _23.QueryCreditTypesRequest): Promise<_23.QueryCreditTypesResponse>;
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                    };
                };
                group: {
                    v1alpha1: {
                        groupInfo(request: _28.QueryGroupInfoRequest): Promise<_28.QueryGroupInfoResponse>;
                        groupAccountInfo(request: _28.QueryGroupAccountInfoRequest): Promise<_28.QueryGroupAccountInfoResponse>;
                        groupMembers(request: _28.QueryGroupMembersRequest): Promise<_28.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _28.QueryGroupsByAdminRequest): Promise<_28.QueryGroupsByAdminResponse>;
                        groupAccountsByGroup(request: _28.QueryGroupAccountsByGroupRequest): Promise<_28.QueryGroupAccountsByGroupResponse>;
                        groupAccountsByAdmin(request: _28.QueryGroupAccountsByAdminRequest): Promise<_28.QueryGroupAccountsByAdminResponse>;
                        proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                        proposalsByGroupAccount(request: _28.QueryProposalsByGroupAccountRequest): Promise<_28.QueryProposalsByGroupAccountResponse>;
                        voteByProposalVoter(request: _28.QueryVoteByProposalVoterRequest): Promise<_28.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _28.QueryVotesByProposalRequest): Promise<_28.QueryVotesByProposalResponse>;
                        votesByVoter(request: _28.QueryVotesByVoterRequest): Promise<_28.QueryVotesByVoterResponse>;
                    };
                };
                intertx: {
                    v1: {
                        interchainAccount(request: _31.QueryInterchainAccountRequest): Promise<_31.QueryInterchainAccountResponse>;
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            regen: {
                data: {
                    v1: _163.LCDQueryClient;
                };
                ecocredit: {
                    basket: {
                        v1: _164.LCDQueryClient;
                    };
                    marketplace: {
                        v1: _165.LCDQueryClient;
                    };
                    v1: _166.LCDQueryClient;
                    v1alpha1: _167.LCDQueryClient;
                };
                group: {
                    v1alpha1: _168.LCDQueryClient;
                };
                intertx: {
                    v1: _169.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
