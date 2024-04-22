import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./audit/v1beta3/audit";
import * as _5 from "./audit/v1beta3/genesis";
import * as _6 from "./audit/v1beta3/query";
import * as _7 from "./base/v1beta1/attribute";
import * as _8 from "./base/v1beta1/endpoint";
import * as _9 from "./base/v1beta1/resource";
import * as _10 from "./base/v1beta1/resourcevalue";
import * as _11 from "./base/v1beta2/attribute";
import * as _12 from "./base/v1beta2/endpoint";
import * as _13 from "./base/v1beta2/resource";
import * as _14 from "./base/v1beta2/resourceunits";
import * as _15 from "./base/v1beta2/resourcevalue";
import * as _16 from "./base/v1beta3/attribute";
import * as _17 from "./base/v1beta3/cpu";
import * as _18 from "./base/v1beta3/endpoint";
import * as _19 from "./base/v1beta3/gpu";
import * as _20 from "./base/v1beta3/memory";
import * as _21 from "./base/v1beta3/resources";
import * as _22 from "./base/v1beta3/resourcevalue";
import * as _23 from "./base/v1beta3/storage";
import * as _24 from "./cert/v1beta2/cert";
import * as _25 from "./cert/v1beta2/genesis";
import * as _26 from "./cert/v1beta2/query";
import * as _27 from "./cert/v1beta3/cert";
import * as _28 from "./cert/v1beta3/genesis";
import * as _29 from "./cert/v1beta3/query";
import * as _30 from "./deployment/v1beta1/authz";
import * as _31 from "./deployment/v1beta1/deployment";
import * as _32 from "./deployment/v1beta1/genesis";
import * as _33 from "./deployment/v1beta1/group";
import * as _34 from "./deployment/v1beta1/params";
import * as _35 from "./deployment/v1beta1/query";
import * as _36 from "./deployment/v1beta2/authz";
import * as _37 from "./deployment/v1beta2/deployment";
import * as _38 from "./deployment/v1beta2/deploymentmsg";
import * as _39 from "./deployment/v1beta2/genesis";
import * as _40 from "./deployment/v1beta2/group";
import * as _41 from "./deployment/v1beta2/groupid";
import * as _42 from "./deployment/v1beta2/groupmsg";
import * as _43 from "./deployment/v1beta2/groupspec";
import * as _44 from "./deployment/v1beta2/params";
import * as _45 from "./deployment/v1beta2/query";
import * as _46 from "./deployment/v1beta2/resource";
import * as _48 from "./deployment/v1beta3/authz";
import * as _49 from "./deployment/v1beta3/deployment";
import * as _50 from "./deployment/v1beta3/deploymentmsg";
import * as _51 from "./deployment/v1beta3/genesis";
import * as _52 from "./deployment/v1beta3/group";
import * as _53 from "./deployment/v1beta3/groupid";
import * as _54 from "./deployment/v1beta3/groupmsg";
import * as _55 from "./deployment/v1beta3/groupspec";
import * as _56 from "./deployment/v1beta3/params";
import * as _57 from "./deployment/v1beta3/query";
import * as _58 from "./deployment/v1beta3/resourceunit";
import * as _60 from "./discovery/v1/akash";
import * as _61 from "./discovery/v1/client_info";
import * as _62 from "./escrow/v1beta1/genesis";
import * as _63 from "./escrow/v1beta1/query";
import * as _64 from "./escrow/v1beta1/types";
import * as _65 from "./escrow/v1beta2/genesis";
import * as _66 from "./escrow/v1beta2/query";
import * as _67 from "./escrow/v1beta2/types";
import * as _68 from "./escrow/v1beta3/genesis";
import * as _69 from "./escrow/v1beta3/query";
import * as _70 from "./escrow/v1beta3/types";
import * as _71 from "./gov/v1beta3/genesis";
import * as _72 from "./gov/v1beta3/params";
import * as _73 from "./inflation/v1beta2/genesis";
import * as _74 from "./inflation/v1beta2/params";
import * as _75 from "./inflation/v1beta3/genesis";
import * as _76 from "./inflation/v1beta3/params";
import * as _77 from "./market/v1beta2/bid";
import * as _78 from "./market/v1beta2/genesis";
import * as _79 from "./market/v1beta2/lease";
import * as _80 from "./market/v1beta2/order";
import * as _81 from "./market/v1beta2/params";
import * as _82 from "./market/v1beta2/query";
import * as _84 from "./market/v1beta3/bid";
import * as _85 from "./market/v1beta3/genesis";
import * as _86 from "./market/v1beta3/lease";
import * as _87 from "./market/v1beta3/order";
import * as _88 from "./market/v1beta3/params";
import * as _89 from "./market/v1beta3/query";
import * as _91 from "./market/v1beta4/bid";
import * as _92 from "./market/v1beta4/genesis";
import * as _93 from "./market/v1beta4/lease";
import * as _94 from "./market/v1beta4/order";
import * as _95 from "./market/v1beta4/params";
import * as _96 from "./market/v1beta4/query";
import * as _98 from "./provider/v1beta1/provider";
import * as _99 from "./provider/v1beta2/genesis";
import * as _100 from "./provider/v1beta2/provider";
import * as _101 from "./provider/v1beta2/query";
import * as _102 from "./provider/v1beta3/genesis";
import * as _103 from "./provider/v1beta3/provider";
import * as _104 from "./provider/v1beta3/query";
import * as _105 from "./staking/v1beta3/genesis";
import * as _106 from "./staking/v1beta3/params";
import * as _107 from "./take/v1beta3/genesis";
import * as _108 from "./take/v1beta3/params";
import * as _240 from "./audit/v1beta2/query.lcd";
import * as _241 from "./audit/v1beta3/query.lcd";
import * as _242 from "./cert/v1beta2/query.lcd";
import * as _243 from "./cert/v1beta3/query.lcd";
import * as _244 from "./deployment/v1beta1/query.lcd";
import * as _245 from "./deployment/v1beta2/query.lcd";
import * as _246 from "./deployment/v1beta3/query.lcd";
import * as _247 from "./escrow/v1beta1/query.lcd";
import * as _248 from "./escrow/v1beta2/query.lcd";
import * as _249 from "./escrow/v1beta3/query.lcd";
import * as _250 from "./market/v1beta2/query.lcd";
import * as _251 from "./market/v1beta3/query.lcd";
import * as _252 from "./market/v1beta4/query.lcd";
import * as _253 from "./provider/v1beta2/query.lcd";
import * as _254 from "./provider/v1beta3/query.lcd";
import * as _255 from "./audit/v1beta2/query.rpc.Query";
import * as _256 from "./audit/v1beta3/query.rpc.Query";
import * as _257 from "./cert/v1beta2/query.rpc.Query";
import * as _258 from "./cert/v1beta3/query.rpc.Query";
import * as _259 from "./deployment/v1beta1/query.rpc.Query";
import * as _260 from "./deployment/v1beta2/query.rpc.Query";
import * as _261 from "./deployment/v1beta3/query.rpc.Query";
import * as _262 from "./escrow/v1beta1/query.rpc.Query";
import * as _263 from "./escrow/v1beta2/query.rpc.Query";
import * as _264 from "./escrow/v1beta3/query.rpc.Query";
import * as _265 from "./market/v1beta2/query.rpc.Query";
import * as _266 from "./market/v1beta3/query.rpc.Query";
import * as _267 from "./market/v1beta4/query.rpc.Query";
import * as _268 from "./provider/v1beta2/query.rpc.Query";
import * as _269 from "./provider/v1beta3/query.rpc.Query";
import * as _270 from "./take/v1beta3/query.rpc.Query";
import * as _271 from "./audit/v1beta1/audit.rpc.msg";
import * as _272 from "./audit/v1beta2/audit.rpc.msg";
import * as _273 from "./audit/v1beta3/audit.rpc.msg";
import * as _274 from "./cert/v1beta2/cert.rpc.msg";
import * as _275 from "./cert/v1beta3/cert.rpc.msg";
import * as _276 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _277 from "./deployment/v1beta2/service.rpc.msg";
import * as _278 from "./deployment/v1beta3/service.rpc.msg";
import * as _279 from "./market/v1beta2/service.rpc.msg";
import * as _280 from "./market/v1beta3/service.rpc.msg";
import * as _281 from "./market/v1beta4/service.rpc.msg";
import * as _282 from "./provider/v1beta1/provider.rpc.msg";
import * as _283 from "./provider/v1beta2/provider.rpc.msg";
import * as _284 from "./provider/v1beta3/provider.rpc.msg";
export declare namespace akash {
    namespace audit {
        const v1beta1: {
            MsgClientImpl: typeof _271.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    signProviderAttributes(value: _0.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProviderAttributes(value: _0.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    signProviderAttributes(value: _0.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _0.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _0.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _0.MsgDeleteProviderAttributes;
                    };
                };
                fromJSON: {
                    signProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _0.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _0.MsgDeleteProviderAttributes;
                    };
                };
                fromPartial: {
                    signProviderAttributes(value: _0.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _0.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _0.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _0.MsgDeleteProviderAttributes;
                    };
                };
            };
            AminoConverter: {
                "/akash.audit.v1beta1.MsgSignProviderAttributes": {
                    aminoType: string;
                    toAmino: (message: _0.MsgSignProviderAttributes) => _0.MsgSignProviderAttributesAmino;
                    fromAmino: (object: _0.MsgSignProviderAttributesAmino) => _0.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: (message: _0.MsgDeleteProviderAttributes) => _0.MsgDeleteProviderAttributesAmino;
                    fromAmino: (object: _0.MsgDeleteProviderAttributesAmino) => _0.MsgDeleteProviderAttributes;
                };
            };
            Provider: {
                typeUrl: string;
                encode(message: _0.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Provider;
                fromPartial(object: Partial<_0.Provider>): _0.Provider;
                fromAmino(object: _0.ProviderAmino): _0.Provider;
                toAmino(message: _0.Provider): _0.ProviderAmino;
                fromAminoMsg(object: _0.ProviderAminoMsg): _0.Provider;
                fromProtoMsg(message: _0.ProviderProtoMsg): _0.Provider;
                toProto(message: _0.Provider): Uint8Array;
                toProtoMsg(message: _0.Provider): _0.ProviderProtoMsg;
            };
            AuditedAttributes: {
                typeUrl: string;
                encode(message: _0.AuditedAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.AuditedAttributes;
                fromPartial(object: Partial<_0.AuditedAttributes>): _0.AuditedAttributes;
                fromAmino(object: _0.AuditedAttributesAmino): _0.AuditedAttributes;
                toAmino(message: _0.AuditedAttributes): _0.AuditedAttributesAmino;
                fromAminoMsg(object: _0.AuditedAttributesAminoMsg): _0.AuditedAttributes;
                fromProtoMsg(message: _0.AuditedAttributesProtoMsg): _0.AuditedAttributes;
                toProto(message: _0.AuditedAttributes): Uint8Array;
                toProtoMsg(message: _0.AuditedAttributes): _0.AuditedAttributesProtoMsg;
            };
            AttributesResponse: {
                typeUrl: string;
                encode(message: _0.AttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.AttributesResponse;
                fromPartial(object: Partial<_0.AttributesResponse>): _0.AttributesResponse;
                fromAmino(object: _0.AttributesResponseAmino): _0.AttributesResponse;
                toAmino(message: _0.AttributesResponse): _0.AttributesResponseAmino;
                fromAminoMsg(object: _0.AttributesResponseAminoMsg): _0.AttributesResponse;
                fromProtoMsg(message: _0.AttributesResponseProtoMsg): _0.AttributesResponse;
                toProto(message: _0.AttributesResponse): Uint8Array;
                toProtoMsg(message: _0.AttributesResponse): _0.AttributesResponseProtoMsg;
            };
            AttributesFilters: {
                typeUrl: string;
                encode(message: _0.AttributesFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.AttributesFilters;
                fromPartial(object: Partial<_0.AttributesFilters>): _0.AttributesFilters;
                fromAmino(object: _0.AttributesFiltersAmino): _0.AttributesFilters;
                toAmino(message: _0.AttributesFilters): _0.AttributesFiltersAmino;
                fromAminoMsg(object: _0.AttributesFiltersAminoMsg): _0.AttributesFilters;
                fromProtoMsg(message: _0.AttributesFiltersProtoMsg): _0.AttributesFilters;
                toProto(message: _0.AttributesFilters): Uint8Array;
                toProtoMsg(message: _0.AttributesFilters): _0.AttributesFiltersProtoMsg;
            };
            MsgSignProviderAttributes: {
                typeUrl: string;
                encode(message: _0.MsgSignProviderAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.MsgSignProviderAttributes;
                fromPartial(object: Partial<_0.MsgSignProviderAttributes>): _0.MsgSignProviderAttributes;
                fromAmino(object: _0.MsgSignProviderAttributesAmino): _0.MsgSignProviderAttributes;
                toAmino(message: _0.MsgSignProviderAttributes): _0.MsgSignProviderAttributesAmino;
                fromAminoMsg(object: _0.MsgSignProviderAttributesAminoMsg): _0.MsgSignProviderAttributes;
                fromProtoMsg(message: _0.MsgSignProviderAttributesProtoMsg): _0.MsgSignProviderAttributes;
                toProto(message: _0.MsgSignProviderAttributes): Uint8Array;
                toProtoMsg(message: _0.MsgSignProviderAttributes): _0.MsgSignProviderAttributesProtoMsg;
            };
            MsgSignProviderAttributesResponse: {
                typeUrl: string;
                encode(_: _0.MsgSignProviderAttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _0.MsgSignProviderAttributesResponse;
                fromPartial(_: Partial<_0.MsgSignProviderAttributesResponse>): _0.MsgSignProviderAttributesResponse;
                fromAmino(_: _0.MsgSignProviderAttributesResponseAmino): _0.MsgSignProviderAttributesResponse;
                toAmino(_: _0.MsgSignProviderAttributesResponse): _0.MsgSignProviderAttributesResponseAmino;
                fromAminoMsg(object: _0.MsgSignProviderAttributesResponseAminoMsg): _0.MsgSignProviderAttributesResponse;
                fromProtoMsg(message: _0.MsgSignProviderAttributesResponseProtoMsg): _0.MsgSignProviderAttributesResponse;
                toProto(message: _0.MsgSignProviderAttributesResponse): Uint8Array;
                toProtoMsg(message: _0.MsgSignProviderAttributesResponse): _0.MsgSignProviderAttributesResponseProtoMsg;
            };
            MsgDeleteProviderAttributes: {
                typeUrl: string;
                encode(message: _0.MsgDeleteProviderAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.MsgDeleteProviderAttributes;
                fromPartial(object: Partial<_0.MsgDeleteProviderAttributes>): _0.MsgDeleteProviderAttributes;
                fromAmino(object: _0.MsgDeleteProviderAttributesAmino): _0.MsgDeleteProviderAttributes;
                toAmino(message: _0.MsgDeleteProviderAttributes): _0.MsgDeleteProviderAttributesAmino;
                fromAminoMsg(object: _0.MsgDeleteProviderAttributesAminoMsg): _0.MsgDeleteProviderAttributes;
                fromProtoMsg(message: _0.MsgDeleteProviderAttributesProtoMsg): _0.MsgDeleteProviderAttributes;
                toProto(message: _0.MsgDeleteProviderAttributes): Uint8Array;
                toProtoMsg(message: _0.MsgDeleteProviderAttributes): _0.MsgDeleteProviderAttributesProtoMsg;
            };
            MsgDeleteProviderAttributesResponse: {
                typeUrl: string;
                encode(_: _0.MsgDeleteProviderAttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _0.MsgDeleteProviderAttributesResponse;
                fromPartial(_: Partial<_0.MsgDeleteProviderAttributesResponse>): _0.MsgDeleteProviderAttributesResponse;
                fromAmino(_: _0.MsgDeleteProviderAttributesResponseAmino): _0.MsgDeleteProviderAttributesResponse;
                toAmino(_: _0.MsgDeleteProviderAttributesResponse): _0.MsgDeleteProviderAttributesResponseAmino;
                fromAminoMsg(object: _0.MsgDeleteProviderAttributesResponseAminoMsg): _0.MsgDeleteProviderAttributesResponse;
                fromProtoMsg(message: _0.MsgDeleteProviderAttributesResponseProtoMsg): _0.MsgDeleteProviderAttributesResponse;
                toProto(message: _0.MsgDeleteProviderAttributesResponse): Uint8Array;
                toProtoMsg(message: _0.MsgDeleteProviderAttributesResponse): _0.MsgDeleteProviderAttributesResponseProtoMsg;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _272.MsgClientImpl;
            QueryClientImpl: typeof _255.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allProvidersAttributes(request?: _3.QueryAllProvidersAttributesRequest): Promise<_3.QueryProvidersResponse>;
                providerAttributes(request: _3.QueryProviderAttributesRequest): Promise<_3.QueryProvidersResponse>;
                providerAuditorAttributes(request: _3.QueryProviderAuditorRequest): Promise<_3.QueryProvidersResponse>;
                auditorAttributes(request: _3.QueryAuditorAttributesRequest): Promise<_3.QueryProvidersResponse>;
            };
            LCDQueryClient: typeof _240.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    signProviderAttributes(value: _1.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProviderAttributes(value: _1.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    signProviderAttributes(value: _1.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _1.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _1.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _1.MsgDeleteProviderAttributes;
                    };
                };
                fromJSON: {
                    signProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _1.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _1.MsgDeleteProviderAttributes;
                    };
                };
                fromPartial: {
                    signProviderAttributes(value: _1.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _1.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _1.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _1.MsgDeleteProviderAttributes;
                    };
                };
            };
            AminoConverter: {
                "/akash.audit.v1beta2.MsgSignProviderAttributes": {
                    aminoType: string;
                    toAmino: (message: _1.MsgSignProviderAttributes) => _1.MsgSignProviderAttributesAmino;
                    fromAmino: (object: _1.MsgSignProviderAttributesAmino) => _1.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: (message: _1.MsgDeleteProviderAttributes) => _1.MsgDeleteProviderAttributesAmino;
                    fromAmino: (object: _1.MsgDeleteProviderAttributesAmino) => _1.MsgDeleteProviderAttributes;
                };
            };
            QueryProvidersResponse: {
                typeUrl: string;
                encode(message: _3.QueryProvidersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryProvidersResponse;
                fromPartial(object: Partial<_3.QueryProvidersResponse>): _3.QueryProvidersResponse;
                fromAmino(object: _3.QueryProvidersResponseAmino): _3.QueryProvidersResponse;
                toAmino(message: _3.QueryProvidersResponse): _3.QueryProvidersResponseAmino;
                fromAminoMsg(object: _3.QueryProvidersResponseAminoMsg): _3.QueryProvidersResponse;
                fromProtoMsg(message: _3.QueryProvidersResponseProtoMsg): _3.QueryProvidersResponse;
                toProto(message: _3.QueryProvidersResponse): Uint8Array;
                toProtoMsg(message: _3.QueryProvidersResponse): _3.QueryProvidersResponseProtoMsg;
            };
            QueryProviderRequest: {
                typeUrl: string;
                encode(message: _3.QueryProviderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryProviderRequest;
                fromPartial(object: Partial<_3.QueryProviderRequest>): _3.QueryProviderRequest;
                fromAmino(object: _3.QueryProviderRequestAmino): _3.QueryProviderRequest;
                toAmino(message: _3.QueryProviderRequest): _3.QueryProviderRequestAmino;
                fromAminoMsg(object: _3.QueryProviderRequestAminoMsg): _3.QueryProviderRequest;
                fromProtoMsg(message: _3.QueryProviderRequestProtoMsg): _3.QueryProviderRequest;
                toProto(message: _3.QueryProviderRequest): Uint8Array;
                toProtoMsg(message: _3.QueryProviderRequest): _3.QueryProviderRequestProtoMsg;
            };
            QueryAllProvidersAttributesRequest: {
                typeUrl: string;
                encode(message: _3.QueryAllProvidersAttributesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryAllProvidersAttributesRequest;
                fromPartial(object: Partial<_3.QueryAllProvidersAttributesRequest>): _3.QueryAllProvidersAttributesRequest;
                fromAmino(object: _3.QueryAllProvidersAttributesRequestAmino): _3.QueryAllProvidersAttributesRequest;
                toAmino(message: _3.QueryAllProvidersAttributesRequest): _3.QueryAllProvidersAttributesRequestAmino;
                fromAminoMsg(object: _3.QueryAllProvidersAttributesRequestAminoMsg): _3.QueryAllProvidersAttributesRequest;
                fromProtoMsg(message: _3.QueryAllProvidersAttributesRequestProtoMsg): _3.QueryAllProvidersAttributesRequest;
                toProto(message: _3.QueryAllProvidersAttributesRequest): Uint8Array;
                toProtoMsg(message: _3.QueryAllProvidersAttributesRequest): _3.QueryAllProvidersAttributesRequestProtoMsg;
            };
            QueryProviderAttributesRequest: {
                typeUrl: string;
                encode(message: _3.QueryProviderAttributesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryProviderAttributesRequest;
                fromPartial(object: Partial<_3.QueryProviderAttributesRequest>): _3.QueryProviderAttributesRequest;
                fromAmino(object: _3.QueryProviderAttributesRequestAmino): _3.QueryProviderAttributesRequest;
                toAmino(message: _3.QueryProviderAttributesRequest): _3.QueryProviderAttributesRequestAmino;
                fromAminoMsg(object: _3.QueryProviderAttributesRequestAminoMsg): _3.QueryProviderAttributesRequest;
                fromProtoMsg(message: _3.QueryProviderAttributesRequestProtoMsg): _3.QueryProviderAttributesRequest;
                toProto(message: _3.QueryProviderAttributesRequest): Uint8Array;
                toProtoMsg(message: _3.QueryProviderAttributesRequest): _3.QueryProviderAttributesRequestProtoMsg;
            };
            QueryProviderAuditorRequest: {
                typeUrl: string;
                encode(message: _3.QueryProviderAuditorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryProviderAuditorRequest;
                fromPartial(object: Partial<_3.QueryProviderAuditorRequest>): _3.QueryProviderAuditorRequest;
                fromAmino(object: _3.QueryProviderAuditorRequestAmino): _3.QueryProviderAuditorRequest;
                toAmino(message: _3.QueryProviderAuditorRequest): _3.QueryProviderAuditorRequestAmino;
                fromAminoMsg(object: _3.QueryProviderAuditorRequestAminoMsg): _3.QueryProviderAuditorRequest;
                fromProtoMsg(message: _3.QueryProviderAuditorRequestProtoMsg): _3.QueryProviderAuditorRequest;
                toProto(message: _3.QueryProviderAuditorRequest): Uint8Array;
                toProtoMsg(message: _3.QueryProviderAuditorRequest): _3.QueryProviderAuditorRequestProtoMsg;
            };
            QueryAuditorAttributesRequest: {
                typeUrl: string;
                encode(message: _3.QueryAuditorAttributesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryAuditorAttributesRequest;
                fromPartial(object: Partial<_3.QueryAuditorAttributesRequest>): _3.QueryAuditorAttributesRequest;
                fromAmino(object: _3.QueryAuditorAttributesRequestAmino): _3.QueryAuditorAttributesRequest;
                toAmino(message: _3.QueryAuditorAttributesRequest): _3.QueryAuditorAttributesRequestAmino;
                fromAminoMsg(object: _3.QueryAuditorAttributesRequestAminoMsg): _3.QueryAuditorAttributesRequest;
                fromProtoMsg(message: _3.QueryAuditorAttributesRequestProtoMsg): _3.QueryAuditorAttributesRequest;
                toProto(message: _3.QueryAuditorAttributesRequest): Uint8Array;
                toProtoMsg(message: _3.QueryAuditorAttributesRequest): _3.QueryAuditorAttributesRequestProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
            Provider: {
                typeUrl: string;
                encode(message: _1.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.Provider;
                fromPartial(object: Partial<_1.Provider>): _1.Provider;
                fromAmino(object: _1.ProviderAmino): _1.Provider;
                toAmino(message: _1.Provider): _1.ProviderAmino;
                fromAminoMsg(object: _1.ProviderAminoMsg): _1.Provider;
                fromProtoMsg(message: _1.ProviderProtoMsg): _1.Provider;
                toProto(message: _1.Provider): Uint8Array;
                toProtoMsg(message: _1.Provider): _1.ProviderProtoMsg;
            };
            AuditedAttributes: {
                typeUrl: string;
                encode(message: _1.AuditedAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.AuditedAttributes;
                fromPartial(object: Partial<_1.AuditedAttributes>): _1.AuditedAttributes;
                fromAmino(object: _1.AuditedAttributesAmino): _1.AuditedAttributes;
                toAmino(message: _1.AuditedAttributes): _1.AuditedAttributesAmino;
                fromAminoMsg(object: _1.AuditedAttributesAminoMsg): _1.AuditedAttributes;
                fromProtoMsg(message: _1.AuditedAttributesProtoMsg): _1.AuditedAttributes;
                toProto(message: _1.AuditedAttributes): Uint8Array;
                toProtoMsg(message: _1.AuditedAttributes): _1.AuditedAttributesProtoMsg;
            };
            AttributesResponse: {
                typeUrl: string;
                encode(message: _1.AttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.AttributesResponse;
                fromPartial(object: Partial<_1.AttributesResponse>): _1.AttributesResponse;
                fromAmino(object: _1.AttributesResponseAmino): _1.AttributesResponse;
                toAmino(message: _1.AttributesResponse): _1.AttributesResponseAmino;
                fromAminoMsg(object: _1.AttributesResponseAminoMsg): _1.AttributesResponse;
                fromProtoMsg(message: _1.AttributesResponseProtoMsg): _1.AttributesResponse;
                toProto(message: _1.AttributesResponse): Uint8Array;
                toProtoMsg(message: _1.AttributesResponse): _1.AttributesResponseProtoMsg;
            };
            AttributesFilters: {
                typeUrl: string;
                encode(message: _1.AttributesFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.AttributesFilters;
                fromPartial(object: Partial<_1.AttributesFilters>): _1.AttributesFilters;
                fromAmino(object: _1.AttributesFiltersAmino): _1.AttributesFilters;
                toAmino(message: _1.AttributesFilters): _1.AttributesFiltersAmino;
                fromAminoMsg(object: _1.AttributesFiltersAminoMsg): _1.AttributesFilters;
                fromProtoMsg(message: _1.AttributesFiltersProtoMsg): _1.AttributesFilters;
                toProto(message: _1.AttributesFilters): Uint8Array;
                toProtoMsg(message: _1.AttributesFilters): _1.AttributesFiltersProtoMsg;
            };
            MsgSignProviderAttributes: {
                typeUrl: string;
                encode(message: _1.MsgSignProviderAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgSignProviderAttributes;
                fromPartial(object: Partial<_1.MsgSignProviderAttributes>): _1.MsgSignProviderAttributes;
                fromAmino(object: _1.MsgSignProviderAttributesAmino): _1.MsgSignProviderAttributes;
                toAmino(message: _1.MsgSignProviderAttributes): _1.MsgSignProviderAttributesAmino;
                fromAminoMsg(object: _1.MsgSignProviderAttributesAminoMsg): _1.MsgSignProviderAttributes;
                fromProtoMsg(message: _1.MsgSignProviderAttributesProtoMsg): _1.MsgSignProviderAttributes;
                toProto(message: _1.MsgSignProviderAttributes): Uint8Array;
                toProtoMsg(message: _1.MsgSignProviderAttributes): _1.MsgSignProviderAttributesProtoMsg;
            };
            MsgSignProviderAttributesResponse: {
                typeUrl: string;
                encode(_: _1.MsgSignProviderAttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.MsgSignProviderAttributesResponse;
                fromPartial(_: Partial<_1.MsgSignProviderAttributesResponse>): _1.MsgSignProviderAttributesResponse;
                fromAmino(_: _1.MsgSignProviderAttributesResponseAmino): _1.MsgSignProviderAttributesResponse;
                toAmino(_: _1.MsgSignProviderAttributesResponse): _1.MsgSignProviderAttributesResponseAmino;
                fromAminoMsg(object: _1.MsgSignProviderAttributesResponseAminoMsg): _1.MsgSignProviderAttributesResponse;
                fromProtoMsg(message: _1.MsgSignProviderAttributesResponseProtoMsg): _1.MsgSignProviderAttributesResponse;
                toProto(message: _1.MsgSignProviderAttributesResponse): Uint8Array;
                toProtoMsg(message: _1.MsgSignProviderAttributesResponse): _1.MsgSignProviderAttributesResponseProtoMsg;
            };
            MsgDeleteProviderAttributes: {
                typeUrl: string;
                encode(message: _1.MsgDeleteProviderAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgDeleteProviderAttributes;
                fromPartial(object: Partial<_1.MsgDeleteProviderAttributes>): _1.MsgDeleteProviderAttributes;
                fromAmino(object: _1.MsgDeleteProviderAttributesAmino): _1.MsgDeleteProviderAttributes;
                toAmino(message: _1.MsgDeleteProviderAttributes): _1.MsgDeleteProviderAttributesAmino;
                fromAminoMsg(object: _1.MsgDeleteProviderAttributesAminoMsg): _1.MsgDeleteProviderAttributes;
                fromProtoMsg(message: _1.MsgDeleteProviderAttributesProtoMsg): _1.MsgDeleteProviderAttributes;
                toProto(message: _1.MsgDeleteProviderAttributes): Uint8Array;
                toProtoMsg(message: _1.MsgDeleteProviderAttributes): _1.MsgDeleteProviderAttributesProtoMsg;
            };
            MsgDeleteProviderAttributesResponse: {
                typeUrl: string;
                encode(_: _1.MsgDeleteProviderAttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.MsgDeleteProviderAttributesResponse;
                fromPartial(_: Partial<_1.MsgDeleteProviderAttributesResponse>): _1.MsgDeleteProviderAttributesResponse;
                fromAmino(_: _1.MsgDeleteProviderAttributesResponseAmino): _1.MsgDeleteProviderAttributesResponse;
                toAmino(_: _1.MsgDeleteProviderAttributesResponse): _1.MsgDeleteProviderAttributesResponseAmino;
                fromAminoMsg(object: _1.MsgDeleteProviderAttributesResponseAminoMsg): _1.MsgDeleteProviderAttributesResponse;
                fromProtoMsg(message: _1.MsgDeleteProviderAttributesResponseProtoMsg): _1.MsgDeleteProviderAttributesResponse;
                toProto(message: _1.MsgDeleteProviderAttributesResponse): Uint8Array;
                toProtoMsg(message: _1.MsgDeleteProviderAttributesResponse): _1.MsgDeleteProviderAttributesResponseProtoMsg;
            };
        };
        const v1beta3: {
            MsgClientImpl: typeof _273.MsgClientImpl;
            QueryClientImpl: typeof _256.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allProvidersAttributes(request?: _6.QueryAllProvidersAttributesRequest): Promise<_6.QueryProvidersResponse>;
                providerAttributes(request: _6.QueryProviderAttributesRequest): Promise<_6.QueryProvidersResponse>;
                providerAuditorAttributes(request: _6.QueryProviderAuditorRequest): Promise<_6.QueryProvidersResponse>;
                auditorAttributes(request: _6.QueryAuditorAttributesRequest): Promise<_6.QueryProvidersResponse>;
            };
            LCDQueryClient: typeof _241.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    signProviderAttributes(value: _4.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProviderAttributes(value: _4.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    signProviderAttributes(value: _4.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _4.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _4.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _4.MsgDeleteProviderAttributes;
                    };
                };
                fromJSON: {
                    signProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _4.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: any): {
                        typeUrl: string;
                        value: _4.MsgDeleteProviderAttributes;
                    };
                };
                fromPartial: {
                    signProviderAttributes(value: _4.MsgSignProviderAttributes): {
                        typeUrl: string;
                        value: _4.MsgSignProviderAttributes;
                    };
                    deleteProviderAttributes(value: _4.MsgDeleteProviderAttributes): {
                        typeUrl: string;
                        value: _4.MsgDeleteProviderAttributes;
                    };
                };
            };
            AminoConverter: {
                "/akash.audit.v1beta3.MsgSignProviderAttributes": {
                    aminoType: string;
                    toAmino: (message: _4.MsgSignProviderAttributes) => _4.MsgSignProviderAttributesAmino;
                    fromAmino: (object: _4.MsgSignProviderAttributesAmino) => _4.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta3.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: (message: _4.MsgDeleteProviderAttributes) => _4.MsgDeleteProviderAttributesAmino;
                    fromAmino: (object: _4.MsgDeleteProviderAttributesAmino) => _4.MsgDeleteProviderAttributes;
                };
            };
            QueryProvidersResponse: {
                typeUrl: string;
                encode(message: _6.QueryProvidersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryProvidersResponse;
                fromPartial(object: Partial<_6.QueryProvidersResponse>): _6.QueryProvidersResponse;
                fromAmino(object: _6.QueryProvidersResponseAmino): _6.QueryProvidersResponse;
                toAmino(message: _6.QueryProvidersResponse): _6.QueryProvidersResponseAmino;
                fromAminoMsg(object: _6.QueryProvidersResponseAminoMsg): _6.QueryProvidersResponse;
                fromProtoMsg(message: _6.QueryProvidersResponseProtoMsg): _6.QueryProvidersResponse;
                toProto(message: _6.QueryProvidersResponse): Uint8Array;
                toProtoMsg(message: _6.QueryProvidersResponse): _6.QueryProvidersResponseProtoMsg;
            };
            QueryProviderRequest: {
                typeUrl: string;
                encode(message: _6.QueryProviderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryProviderRequest;
                fromPartial(object: Partial<_6.QueryProviderRequest>): _6.QueryProviderRequest;
                fromAmino(object: _6.QueryProviderRequestAmino): _6.QueryProviderRequest;
                toAmino(message: _6.QueryProviderRequest): _6.QueryProviderRequestAmino;
                fromAminoMsg(object: _6.QueryProviderRequestAminoMsg): _6.QueryProviderRequest;
                fromProtoMsg(message: _6.QueryProviderRequestProtoMsg): _6.QueryProviderRequest;
                toProto(message: _6.QueryProviderRequest): Uint8Array;
                toProtoMsg(message: _6.QueryProviderRequest): _6.QueryProviderRequestProtoMsg;
            };
            QueryAllProvidersAttributesRequest: {
                typeUrl: string;
                encode(message: _6.QueryAllProvidersAttributesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAllProvidersAttributesRequest;
                fromPartial(object: Partial<_6.QueryAllProvidersAttributesRequest>): _6.QueryAllProvidersAttributesRequest;
                fromAmino(object: _6.QueryAllProvidersAttributesRequestAmino): _6.QueryAllProvidersAttributesRequest;
                toAmino(message: _6.QueryAllProvidersAttributesRequest): _6.QueryAllProvidersAttributesRequestAmino;
                fromAminoMsg(object: _6.QueryAllProvidersAttributesRequestAminoMsg): _6.QueryAllProvidersAttributesRequest;
                fromProtoMsg(message: _6.QueryAllProvidersAttributesRequestProtoMsg): _6.QueryAllProvidersAttributesRequest;
                toProto(message: _6.QueryAllProvidersAttributesRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAllProvidersAttributesRequest): _6.QueryAllProvidersAttributesRequestProtoMsg;
            };
            QueryProviderAttributesRequest: {
                typeUrl: string;
                encode(message: _6.QueryProviderAttributesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryProviderAttributesRequest;
                fromPartial(object: Partial<_6.QueryProviderAttributesRequest>): _6.QueryProviderAttributesRequest;
                fromAmino(object: _6.QueryProviderAttributesRequestAmino): _6.QueryProviderAttributesRequest;
                toAmino(message: _6.QueryProviderAttributesRequest): _6.QueryProviderAttributesRequestAmino;
                fromAminoMsg(object: _6.QueryProviderAttributesRequestAminoMsg): _6.QueryProviderAttributesRequest;
                fromProtoMsg(message: _6.QueryProviderAttributesRequestProtoMsg): _6.QueryProviderAttributesRequest;
                toProto(message: _6.QueryProviderAttributesRequest): Uint8Array;
                toProtoMsg(message: _6.QueryProviderAttributesRequest): _6.QueryProviderAttributesRequestProtoMsg;
            };
            QueryProviderAuditorRequest: {
                typeUrl: string;
                encode(message: _6.QueryProviderAuditorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryProviderAuditorRequest;
                fromPartial(object: Partial<_6.QueryProviderAuditorRequest>): _6.QueryProviderAuditorRequest;
                fromAmino(object: _6.QueryProviderAuditorRequestAmino): _6.QueryProviderAuditorRequest;
                toAmino(message: _6.QueryProviderAuditorRequest): _6.QueryProviderAuditorRequestAmino;
                fromAminoMsg(object: _6.QueryProviderAuditorRequestAminoMsg): _6.QueryProviderAuditorRequest;
                fromProtoMsg(message: _6.QueryProviderAuditorRequestProtoMsg): _6.QueryProviderAuditorRequest;
                toProto(message: _6.QueryProviderAuditorRequest): Uint8Array;
                toProtoMsg(message: _6.QueryProviderAuditorRequest): _6.QueryProviderAuditorRequestProtoMsg;
            };
            QueryAuditorAttributesRequest: {
                typeUrl: string;
                encode(message: _6.QueryAuditorAttributesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAuditorAttributesRequest;
                fromPartial(object: Partial<_6.QueryAuditorAttributesRequest>): _6.QueryAuditorAttributesRequest;
                fromAmino(object: _6.QueryAuditorAttributesRequestAmino): _6.QueryAuditorAttributesRequest;
                toAmino(message: _6.QueryAuditorAttributesRequest): _6.QueryAuditorAttributesRequestAmino;
                fromAminoMsg(object: _6.QueryAuditorAttributesRequestAminoMsg): _6.QueryAuditorAttributesRequest;
                fromProtoMsg(message: _6.QueryAuditorAttributesRequestProtoMsg): _6.QueryAuditorAttributesRequest;
                toProto(message: _6.QueryAuditorAttributesRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAuditorAttributesRequest): _6.QueryAuditorAttributesRequestProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
            Provider: {
                typeUrl: string;
                encode(message: _4.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Provider;
                fromPartial(object: Partial<_4.Provider>): _4.Provider;
                fromAmino(object: _4.ProviderAmino): _4.Provider;
                toAmino(message: _4.Provider): _4.ProviderAmino;
                fromAminoMsg(object: _4.ProviderAminoMsg): _4.Provider;
                fromProtoMsg(message: _4.ProviderProtoMsg): _4.Provider;
                toProto(message: _4.Provider): Uint8Array;
                toProtoMsg(message: _4.Provider): _4.ProviderProtoMsg;
            };
            AuditedAttributes: {
                typeUrl: string;
                encode(message: _4.AuditedAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.AuditedAttributes;
                fromPartial(object: Partial<_4.AuditedAttributes>): _4.AuditedAttributes;
                fromAmino(object: _4.AuditedAttributesAmino): _4.AuditedAttributes;
                toAmino(message: _4.AuditedAttributes): _4.AuditedAttributesAmino;
                fromAminoMsg(object: _4.AuditedAttributesAminoMsg): _4.AuditedAttributes;
                fromProtoMsg(message: _4.AuditedAttributesProtoMsg): _4.AuditedAttributes;
                toProto(message: _4.AuditedAttributes): Uint8Array;
                toProtoMsg(message: _4.AuditedAttributes): _4.AuditedAttributesProtoMsg;
            };
            AttributesResponse: {
                typeUrl: string;
                encode(message: _4.AttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.AttributesResponse;
                fromPartial(object: Partial<_4.AttributesResponse>): _4.AttributesResponse;
                fromAmino(object: _4.AttributesResponseAmino): _4.AttributesResponse;
                toAmino(message: _4.AttributesResponse): _4.AttributesResponseAmino;
                fromAminoMsg(object: _4.AttributesResponseAminoMsg): _4.AttributesResponse;
                fromProtoMsg(message: _4.AttributesResponseProtoMsg): _4.AttributesResponse;
                toProto(message: _4.AttributesResponse): Uint8Array;
                toProtoMsg(message: _4.AttributesResponse): _4.AttributesResponseProtoMsg;
            };
            AttributesFilters: {
                typeUrl: string;
                encode(message: _4.AttributesFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.AttributesFilters;
                fromPartial(object: Partial<_4.AttributesFilters>): _4.AttributesFilters;
                fromAmino(object: _4.AttributesFiltersAmino): _4.AttributesFilters;
                toAmino(message: _4.AttributesFilters): _4.AttributesFiltersAmino;
                fromAminoMsg(object: _4.AttributesFiltersAminoMsg): _4.AttributesFilters;
                fromProtoMsg(message: _4.AttributesFiltersProtoMsg): _4.AttributesFilters;
                toProto(message: _4.AttributesFilters): Uint8Array;
                toProtoMsg(message: _4.AttributesFilters): _4.AttributesFiltersProtoMsg;
            };
            MsgSignProviderAttributes: {
                typeUrl: string;
                encode(message: _4.MsgSignProviderAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgSignProviderAttributes;
                fromPartial(object: Partial<_4.MsgSignProviderAttributes>): _4.MsgSignProviderAttributes;
                fromAmino(object: _4.MsgSignProviderAttributesAmino): _4.MsgSignProviderAttributes;
                toAmino(message: _4.MsgSignProviderAttributes): _4.MsgSignProviderAttributesAmino;
                fromAminoMsg(object: _4.MsgSignProviderAttributesAminoMsg): _4.MsgSignProviderAttributes;
                fromProtoMsg(message: _4.MsgSignProviderAttributesProtoMsg): _4.MsgSignProviderAttributes;
                toProto(message: _4.MsgSignProviderAttributes): Uint8Array;
                toProtoMsg(message: _4.MsgSignProviderAttributes): _4.MsgSignProviderAttributesProtoMsg;
            };
            MsgSignProviderAttributesResponse: {
                typeUrl: string;
                encode(_: _4.MsgSignProviderAttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.MsgSignProviderAttributesResponse;
                fromPartial(_: Partial<_4.MsgSignProviderAttributesResponse>): _4.MsgSignProviderAttributesResponse;
                fromAmino(_: _4.MsgSignProviderAttributesResponseAmino): _4.MsgSignProviderAttributesResponse;
                toAmino(_: _4.MsgSignProviderAttributesResponse): _4.MsgSignProviderAttributesResponseAmino;
                fromAminoMsg(object: _4.MsgSignProviderAttributesResponseAminoMsg): _4.MsgSignProviderAttributesResponse;
                fromProtoMsg(message: _4.MsgSignProviderAttributesResponseProtoMsg): _4.MsgSignProviderAttributesResponse;
                toProto(message: _4.MsgSignProviderAttributesResponse): Uint8Array;
                toProtoMsg(message: _4.MsgSignProviderAttributesResponse): _4.MsgSignProviderAttributesResponseProtoMsg;
            };
            MsgDeleteProviderAttributes: {
                typeUrl: string;
                encode(message: _4.MsgDeleteProviderAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgDeleteProviderAttributes;
                fromPartial(object: Partial<_4.MsgDeleteProviderAttributes>): _4.MsgDeleteProviderAttributes;
                fromAmino(object: _4.MsgDeleteProviderAttributesAmino): _4.MsgDeleteProviderAttributes;
                toAmino(message: _4.MsgDeleteProviderAttributes): _4.MsgDeleteProviderAttributesAmino;
                fromAminoMsg(object: _4.MsgDeleteProviderAttributesAminoMsg): _4.MsgDeleteProviderAttributes;
                fromProtoMsg(message: _4.MsgDeleteProviderAttributesProtoMsg): _4.MsgDeleteProviderAttributes;
                toProto(message: _4.MsgDeleteProviderAttributes): Uint8Array;
                toProtoMsg(message: _4.MsgDeleteProviderAttributes): _4.MsgDeleteProviderAttributesProtoMsg;
            };
            MsgDeleteProviderAttributesResponse: {
                typeUrl: string;
                encode(_: _4.MsgDeleteProviderAttributesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.MsgDeleteProviderAttributesResponse;
                fromPartial(_: Partial<_4.MsgDeleteProviderAttributesResponse>): _4.MsgDeleteProviderAttributesResponse;
                fromAmino(_: _4.MsgDeleteProviderAttributesResponseAmino): _4.MsgDeleteProviderAttributesResponse;
                toAmino(_: _4.MsgDeleteProviderAttributesResponse): _4.MsgDeleteProviderAttributesResponseAmino;
                fromAminoMsg(object: _4.MsgDeleteProviderAttributesResponseAminoMsg): _4.MsgDeleteProviderAttributesResponse;
                fromProtoMsg(message: _4.MsgDeleteProviderAttributesResponseProtoMsg): _4.MsgDeleteProviderAttributesResponse;
                toProto(message: _4.MsgDeleteProviderAttributesResponse): Uint8Array;
                toProtoMsg(message: _4.MsgDeleteProviderAttributesResponse): _4.MsgDeleteProviderAttributesResponseProtoMsg;
            };
        };
    }
    namespace base {
        const v1beta1: {
            ResourceValue: {
                typeUrl: string;
                encode(message: _10.ResourceValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.ResourceValue;
                fromPartial(object: Partial<_10.ResourceValue>): _10.ResourceValue;
                fromAmino(object: _10.ResourceValueAmino): _10.ResourceValue;
                toAmino(message: _10.ResourceValue): _10.ResourceValueAmino;
                fromAminoMsg(object: _10.ResourceValueAminoMsg): _10.ResourceValue;
                fromProtoMsg(message: _10.ResourceValueProtoMsg): _10.ResourceValue;
                toProto(message: _10.ResourceValue): Uint8Array;
                toProtoMsg(message: _10.ResourceValue): _10.ResourceValueProtoMsg;
            };
            CPU: {
                typeUrl: string;
                encode(message: _9.CPU, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.CPU;
                fromPartial(object: Partial<_9.CPU>): _9.CPU;
                fromAmino(object: _9.CPUAmino): _9.CPU;
                toAmino(message: _9.CPU): _9.CPUAmino;
                fromAminoMsg(object: _9.CPUAminoMsg): _9.CPU;
                fromProtoMsg(message: _9.CPUProtoMsg): _9.CPU;
                toProto(message: _9.CPU): Uint8Array;
                toProtoMsg(message: _9.CPU): _9.CPUProtoMsg;
            };
            Memory: {
                typeUrl: string;
                encode(message: _9.Memory, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Memory;
                fromPartial(object: Partial<_9.Memory>): _9.Memory;
                fromAmino(object: _9.MemoryAmino): _9.Memory;
                toAmino(message: _9.Memory): _9.MemoryAmino;
                fromAminoMsg(object: _9.MemoryAminoMsg): _9.Memory;
                fromProtoMsg(message: _9.MemoryProtoMsg): _9.Memory;
                toProto(message: _9.Memory): Uint8Array;
                toProtoMsg(message: _9.Memory): _9.MemoryProtoMsg;
            };
            Storage: {
                typeUrl: string;
                encode(message: _9.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Storage;
                fromPartial(object: Partial<_9.Storage>): _9.Storage;
                fromAmino(object: _9.StorageAmino): _9.Storage;
                toAmino(message: _9.Storage): _9.StorageAmino;
                fromAminoMsg(object: _9.StorageAminoMsg): _9.Storage;
                fromProtoMsg(message: _9.StorageProtoMsg): _9.Storage;
                toProto(message: _9.Storage): Uint8Array;
                toProtoMsg(message: _9.Storage): _9.StorageProtoMsg;
            };
            ResourceUnits: {
                typeUrl: string;
                encode(message: _9.ResourceUnits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.ResourceUnits;
                fromPartial(object: Partial<_9.ResourceUnits>): _9.ResourceUnits;
                fromAmino(object: _9.ResourceUnitsAmino): _9.ResourceUnits;
                toAmino(message: _9.ResourceUnits): _9.ResourceUnitsAmino;
                fromAminoMsg(object: _9.ResourceUnitsAminoMsg): _9.ResourceUnits;
                fromProtoMsg(message: _9.ResourceUnitsProtoMsg): _9.ResourceUnits;
                toProto(message: _9.ResourceUnits): Uint8Array;
                toProtoMsg(message: _9.ResourceUnits): _9.ResourceUnitsProtoMsg;
            };
            endpoint_KindFromJSON(object: any): _8.Endpoint_Kind;
            endpoint_KindToJSON(object: _8.Endpoint_Kind): string;
            Endpoint_Kind: typeof _8.Endpoint_Kind;
            Endpoint_KindSDKType: typeof _8.Endpoint_Kind;
            Endpoint_KindAmino: typeof _8.Endpoint_Kind;
            Endpoint: {
                typeUrl: string;
                encode(message: _8.Endpoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Endpoint;
                fromPartial(object: Partial<_8.Endpoint>): _8.Endpoint;
                fromAmino(object: _8.EndpointAmino): _8.Endpoint;
                toAmino(message: _8.Endpoint): _8.EndpointAmino;
                fromAminoMsg(object: _8.EndpointAminoMsg): _8.Endpoint;
                fromProtoMsg(message: _8.EndpointProtoMsg): _8.Endpoint;
                toProto(message: _8.Endpoint): Uint8Array;
                toProtoMsg(message: _8.Endpoint): _8.EndpointProtoMsg;
            };
            Attribute: {
                typeUrl: string;
                encode(message: _7.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Attribute;
                fromPartial(object: Partial<_7.Attribute>): _7.Attribute;
                fromAmino(object: _7.AttributeAmino): _7.Attribute;
                toAmino(message: _7.Attribute): _7.AttributeAmino;
                fromAminoMsg(object: _7.AttributeAminoMsg): _7.Attribute;
                fromProtoMsg(message: _7.AttributeProtoMsg): _7.Attribute;
                toProto(message: _7.Attribute): Uint8Array;
                toProtoMsg(message: _7.Attribute): _7.AttributeProtoMsg;
            };
            SignedBy: {
                typeUrl: string;
                encode(message: _7.SignedBy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.SignedBy;
                fromPartial(object: Partial<_7.SignedBy>): _7.SignedBy;
                fromAmino(object: _7.SignedByAmino): _7.SignedBy;
                toAmino(message: _7.SignedBy): _7.SignedByAmino;
                fromAminoMsg(object: _7.SignedByAminoMsg): _7.SignedBy;
                fromProtoMsg(message: _7.SignedByProtoMsg): _7.SignedBy;
                toProto(message: _7.SignedBy): Uint8Array;
                toProtoMsg(message: _7.SignedBy): _7.SignedByProtoMsg;
            };
            PlacementRequirements: {
                typeUrl: string;
                encode(message: _7.PlacementRequirements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.PlacementRequirements;
                fromPartial(object: Partial<_7.PlacementRequirements>): _7.PlacementRequirements;
                fromAmino(object: _7.PlacementRequirementsAmino): _7.PlacementRequirements;
                toAmino(message: _7.PlacementRequirements): _7.PlacementRequirementsAmino;
                fromAminoMsg(object: _7.PlacementRequirementsAminoMsg): _7.PlacementRequirements;
                fromProtoMsg(message: _7.PlacementRequirementsProtoMsg): _7.PlacementRequirements;
                toProto(message: _7.PlacementRequirements): Uint8Array;
                toProtoMsg(message: _7.PlacementRequirements): _7.PlacementRequirementsProtoMsg;
            };
        };
        const v1beta2: {
            ResourceValue: {
                typeUrl: string;
                encode(message: _15.ResourceValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ResourceValue;
                fromPartial(object: Partial<_15.ResourceValue>): _15.ResourceValue;
                fromAmino(object: _15.ResourceValueAmino): _15.ResourceValue;
                toAmino(message: _15.ResourceValue): _15.ResourceValueAmino;
                fromAminoMsg(object: _15.ResourceValueAminoMsg): _15.ResourceValue;
                fromProtoMsg(message: _15.ResourceValueProtoMsg): _15.ResourceValue;
                toProto(message: _15.ResourceValue): Uint8Array;
                toProtoMsg(message: _15.ResourceValue): _15.ResourceValueProtoMsg;
            };
            ResourceUnits: {
                typeUrl: string;
                encode(message: _14.ResourceUnits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.ResourceUnits;
                fromPartial(object: Partial<_14.ResourceUnits>): _14.ResourceUnits;
                fromAmino(object: _14.ResourceUnitsAmino): _14.ResourceUnits;
                toAmino(message: _14.ResourceUnits): _14.ResourceUnitsAmino;
                fromAminoMsg(object: _14.ResourceUnitsAminoMsg): _14.ResourceUnits;
                fromProtoMsg(message: _14.ResourceUnitsProtoMsg): _14.ResourceUnits;
                toProto(message: _14.ResourceUnits): Uint8Array;
                toProtoMsg(message: _14.ResourceUnits): _14.ResourceUnitsProtoMsg;
            };
            CPU: {
                typeUrl: string;
                encode(message: _13.CPU, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CPU;
                fromPartial(object: Partial<_13.CPU>): _13.CPU;
                fromAmino(object: _13.CPUAmino): _13.CPU;
                toAmino(message: _13.CPU): _13.CPUAmino;
                fromAminoMsg(object: _13.CPUAminoMsg): _13.CPU;
                fromProtoMsg(message: _13.CPUProtoMsg): _13.CPU;
                toProto(message: _13.CPU): Uint8Array;
                toProtoMsg(message: _13.CPU): _13.CPUProtoMsg;
            };
            Memory: {
                typeUrl: string;
                encode(message: _13.Memory, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Memory;
                fromPartial(object: Partial<_13.Memory>): _13.Memory;
                fromAmino(object: _13.MemoryAmino): _13.Memory;
                toAmino(message: _13.Memory): _13.MemoryAmino;
                fromAminoMsg(object: _13.MemoryAminoMsg): _13.Memory;
                fromProtoMsg(message: _13.MemoryProtoMsg): _13.Memory;
                toProto(message: _13.Memory): Uint8Array;
                toProtoMsg(message: _13.Memory): _13.MemoryProtoMsg;
            };
            Storage: {
                typeUrl: string;
                encode(message: _13.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Storage;
                fromPartial(object: Partial<_13.Storage>): _13.Storage;
                fromAmino(object: _13.StorageAmino): _13.Storage;
                toAmino(message: _13.Storage): _13.StorageAmino;
                fromAminoMsg(object: _13.StorageAminoMsg): _13.Storage;
                fromProtoMsg(message: _13.StorageProtoMsg): _13.Storage;
                toProto(message: _13.Storage): Uint8Array;
                toProtoMsg(message: _13.Storage): _13.StorageProtoMsg;
            };
            endpoint_KindFromJSON(object: any): _12.Endpoint_Kind;
            endpoint_KindToJSON(object: _12.Endpoint_Kind): string;
            Endpoint_Kind: typeof _12.Endpoint_Kind;
            Endpoint_KindSDKType: typeof _12.Endpoint_Kind;
            Endpoint_KindAmino: typeof _12.Endpoint_Kind;
            Endpoint: {
                typeUrl: string;
                encode(message: _12.Endpoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Endpoint;
                fromPartial(object: Partial<_12.Endpoint>): _12.Endpoint;
                fromAmino(object: _12.EndpointAmino): _12.Endpoint;
                toAmino(message: _12.Endpoint): _12.EndpointAmino;
                fromAminoMsg(object: _12.EndpointAminoMsg): _12.Endpoint;
                fromProtoMsg(message: _12.EndpointProtoMsg): _12.Endpoint;
                toProto(message: _12.Endpoint): Uint8Array;
                toProtoMsg(message: _12.Endpoint): _12.EndpointProtoMsg;
            };
            Attribute: {
                typeUrl: string;
                encode(message: _11.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Attribute;
                fromPartial(object: Partial<_11.Attribute>): _11.Attribute;
                fromAmino(object: _11.AttributeAmino): _11.Attribute;
                toAmino(message: _11.Attribute): _11.AttributeAmino;
                fromAminoMsg(object: _11.AttributeAminoMsg): _11.Attribute;
                fromProtoMsg(message: _11.AttributeProtoMsg): _11.Attribute;
                toProto(message: _11.Attribute): Uint8Array;
                toProtoMsg(message: _11.Attribute): _11.AttributeProtoMsg;
            };
            SignedBy: {
                typeUrl: string;
                encode(message: _11.SignedBy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.SignedBy;
                fromPartial(object: Partial<_11.SignedBy>): _11.SignedBy;
                fromAmino(object: _11.SignedByAmino): _11.SignedBy;
                toAmino(message: _11.SignedBy): _11.SignedByAmino;
                fromAminoMsg(object: _11.SignedByAminoMsg): _11.SignedBy;
                fromProtoMsg(message: _11.SignedByProtoMsg): _11.SignedBy;
                toProto(message: _11.SignedBy): Uint8Array;
                toProtoMsg(message: _11.SignedBy): _11.SignedByProtoMsg;
            };
            PlacementRequirements: {
                typeUrl: string;
                encode(message: _11.PlacementRequirements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.PlacementRequirements;
                fromPartial(object: Partial<_11.PlacementRequirements>): _11.PlacementRequirements;
                fromAmino(object: _11.PlacementRequirementsAmino): _11.PlacementRequirements;
                toAmino(message: _11.PlacementRequirements): _11.PlacementRequirementsAmino;
                fromAminoMsg(object: _11.PlacementRequirementsAminoMsg): _11.PlacementRequirements;
                fromProtoMsg(message: _11.PlacementRequirementsProtoMsg): _11.PlacementRequirements;
                toProto(message: _11.PlacementRequirements): Uint8Array;
                toProtoMsg(message: _11.PlacementRequirements): _11.PlacementRequirementsProtoMsg;
            };
        };
        const v1beta3: {
            Storage: {
                typeUrl: string;
                encode(message: _23.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Storage;
                fromPartial(object: Partial<_23.Storage>): _23.Storage;
                fromAmino(object: _23.StorageAmino): _23.Storage;
                toAmino(message: _23.Storage): _23.StorageAmino;
                fromAminoMsg(object: _23.StorageAminoMsg): _23.Storage;
                fromProtoMsg(message: _23.StorageProtoMsg): _23.Storage;
                toProto(message: _23.Storage): Uint8Array;
                toProtoMsg(message: _23.Storage): _23.StorageProtoMsg;
            };
            ResourceValue: {
                typeUrl: string;
                encode(message: _22.ResourceValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ResourceValue;
                fromPartial(object: Partial<_22.ResourceValue>): _22.ResourceValue;
                fromAmino(object: _22.ResourceValueAmino): _22.ResourceValue;
                toAmino(message: _22.ResourceValue): _22.ResourceValueAmino;
                fromAminoMsg(object: _22.ResourceValueAminoMsg): _22.ResourceValue;
                fromProtoMsg(message: _22.ResourceValueProtoMsg): _22.ResourceValue;
                toProto(message: _22.ResourceValue): Uint8Array;
                toProtoMsg(message: _22.ResourceValue): _22.ResourceValueProtoMsg;
            };
            Resources: {
                typeUrl: string;
                encode(message: _21.Resources, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.Resources;
                fromPartial(object: Partial<_21.Resources>): _21.Resources;
                fromAmino(object: _21.ResourcesAmino): _21.Resources;
                toAmino(message: _21.Resources): _21.ResourcesAmino;
                fromAminoMsg(object: _21.ResourcesAminoMsg): _21.Resources;
                fromProtoMsg(message: _21.ResourcesProtoMsg): _21.Resources;
                toProto(message: _21.Resources): Uint8Array;
                toProtoMsg(message: _21.Resources): _21.ResourcesProtoMsg;
            };
            Memory: {
                typeUrl: string;
                encode(message: _20.Memory, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Memory;
                fromPartial(object: Partial<_20.Memory>): _20.Memory;
                fromAmino(object: _20.MemoryAmino): _20.Memory;
                toAmino(message: _20.Memory): _20.MemoryAmino;
                fromAminoMsg(object: _20.MemoryAminoMsg): _20.Memory;
                fromProtoMsg(message: _20.MemoryProtoMsg): _20.Memory;
                toProto(message: _20.Memory): Uint8Array;
                toProtoMsg(message: _20.Memory): _20.MemoryProtoMsg;
            };
            GPU: {
                typeUrl: string;
                encode(message: _19.GPU, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GPU;
                fromPartial(object: Partial<_19.GPU>): _19.GPU;
                fromAmino(object: _19.GPUAmino): _19.GPU;
                toAmino(message: _19.GPU): _19.GPUAmino;
                fromAminoMsg(object: _19.GPUAminoMsg): _19.GPU;
                fromProtoMsg(message: _19.GPUProtoMsg): _19.GPU;
                toProto(message: _19.GPU): Uint8Array;
                toProtoMsg(message: _19.GPU): _19.GPUProtoMsg;
            };
            endpoint_KindFromJSON(object: any): _18.Endpoint_Kind;
            endpoint_KindToJSON(object: _18.Endpoint_Kind): string;
            Endpoint_Kind: typeof _18.Endpoint_Kind;
            Endpoint_KindSDKType: typeof _18.Endpoint_Kind;
            Endpoint_KindAmino: typeof _18.Endpoint_Kind;
            Endpoint: {
                typeUrl: string;
                encode(message: _18.Endpoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Endpoint;
                fromPartial(object: Partial<_18.Endpoint>): _18.Endpoint;
                fromAmino(object: _18.EndpointAmino): _18.Endpoint;
                toAmino(message: _18.Endpoint): _18.EndpointAmino;
                fromAminoMsg(object: _18.EndpointAminoMsg): _18.Endpoint;
                fromProtoMsg(message: _18.EndpointProtoMsg): _18.Endpoint;
                toProto(message: _18.Endpoint): Uint8Array;
                toProtoMsg(message: _18.Endpoint): _18.EndpointProtoMsg;
            };
            CPU: {
                typeUrl: string;
                encode(message: _17.CPU, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.CPU;
                fromPartial(object: Partial<_17.CPU>): _17.CPU;
                fromAmino(object: _17.CPUAmino): _17.CPU;
                toAmino(message: _17.CPU): _17.CPUAmino;
                fromAminoMsg(object: _17.CPUAminoMsg): _17.CPU;
                fromProtoMsg(message: _17.CPUProtoMsg): _17.CPU;
                toProto(message: _17.CPU): Uint8Array;
                toProtoMsg(message: _17.CPU): _17.CPUProtoMsg;
            };
            Attribute: {
                typeUrl: string;
                encode(message: _16.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Attribute;
                fromPartial(object: Partial<_16.Attribute>): _16.Attribute;
                fromAmino(object: _16.AttributeAmino): _16.Attribute;
                toAmino(message: _16.Attribute): _16.AttributeAmino;
                fromAminoMsg(object: _16.AttributeAminoMsg): _16.Attribute;
                fromProtoMsg(message: _16.AttributeProtoMsg): _16.Attribute;
                toProto(message: _16.Attribute): Uint8Array;
                toProtoMsg(message: _16.Attribute): _16.AttributeProtoMsg;
            };
            SignedBy: {
                typeUrl: string;
                encode(message: _16.SignedBy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SignedBy;
                fromPartial(object: Partial<_16.SignedBy>): _16.SignedBy;
                fromAmino(object: _16.SignedByAmino): _16.SignedBy;
                toAmino(message: _16.SignedBy): _16.SignedByAmino;
                fromAminoMsg(object: _16.SignedByAminoMsg): _16.SignedBy;
                fromProtoMsg(message: _16.SignedByProtoMsg): _16.SignedBy;
                toProto(message: _16.SignedBy): Uint8Array;
                toProtoMsg(message: _16.SignedBy): _16.SignedByProtoMsg;
            };
            PlacementRequirements: {
                typeUrl: string;
                encode(message: _16.PlacementRequirements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.PlacementRequirements;
                fromPartial(object: Partial<_16.PlacementRequirements>): _16.PlacementRequirements;
                fromAmino(object: _16.PlacementRequirementsAmino): _16.PlacementRequirements;
                toAmino(message: _16.PlacementRequirements): _16.PlacementRequirementsAmino;
                fromAminoMsg(object: _16.PlacementRequirementsAminoMsg): _16.PlacementRequirements;
                fromProtoMsg(message: _16.PlacementRequirementsProtoMsg): _16.PlacementRequirements;
                toProto(message: _16.PlacementRequirements): Uint8Array;
                toProtoMsg(message: _16.PlacementRequirements): _16.PlacementRequirementsProtoMsg;
            };
        };
    }
    namespace cert {
        const v1beta2: {
            MsgClientImpl: typeof _274.MsgClientImpl;
            QueryClientImpl: typeof _257.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                certificates(request: _26.QueryCertificatesRequest): Promise<_26.QueryCertificatesResponse>;
            };
            LCDQueryClient: typeof _242.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCertificate(value: _24.MsgCreateCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeCertificate(value: _24.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCertificate(value: _24.MsgCreateCertificate): {
                        typeUrl: string;
                        value: _24.MsgCreateCertificate;
                    };
                    revokeCertificate(value: _24.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _24.MsgRevokeCertificate;
                    };
                };
                fromJSON: {
                    createCertificate(value: any): {
                        typeUrl: string;
                        value: _24.MsgCreateCertificate;
                    };
                    revokeCertificate(value: any): {
                        typeUrl: string;
                        value: _24.MsgRevokeCertificate;
                    };
                };
                fromPartial: {
                    createCertificate(value: _24.MsgCreateCertificate): {
                        typeUrl: string;
                        value: _24.MsgCreateCertificate;
                    };
                    revokeCertificate(value: _24.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _24.MsgRevokeCertificate;
                    };
                };
            };
            AminoConverter: {
                "/akash.cert.v1beta2.MsgCreateCertificate": {
                    aminoType: string;
                    toAmino: (message: _24.MsgCreateCertificate) => _24.MsgCreateCertificateAmino;
                    fromAmino: (object: _24.MsgCreateCertificateAmino) => _24.MsgCreateCertificate;
                };
                "/akash.cert.v1beta2.MsgRevokeCertificate": {
                    aminoType: string;
                    toAmino: (message: _24.MsgRevokeCertificate) => _24.MsgRevokeCertificateAmino;
                    fromAmino: (object: _24.MsgRevokeCertificateAmino) => _24.MsgRevokeCertificate;
                };
            };
            CertificateResponse: {
                typeUrl: string;
                encode(message: _26.CertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.CertificateResponse;
                fromPartial(object: Partial<_26.CertificateResponse>): _26.CertificateResponse;
                fromAmino(object: _26.CertificateResponseAmino): _26.CertificateResponse;
                toAmino(message: _26.CertificateResponse): _26.CertificateResponseAmino;
                fromAminoMsg(object: _26.CertificateResponseAminoMsg): _26.CertificateResponse;
                fromProtoMsg(message: _26.CertificateResponseProtoMsg): _26.CertificateResponse;
                toProto(message: _26.CertificateResponse): Uint8Array;
                toProtoMsg(message: _26.CertificateResponse): _26.CertificateResponseProtoMsg;
            };
            QueryCertificatesRequest: {
                typeUrl: string;
                encode(message: _26.QueryCertificatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryCertificatesRequest;
                fromPartial(object: Partial<_26.QueryCertificatesRequest>): _26.QueryCertificatesRequest;
                fromAmino(object: _26.QueryCertificatesRequestAmino): _26.QueryCertificatesRequest;
                toAmino(message: _26.QueryCertificatesRequest): _26.QueryCertificatesRequestAmino;
                fromAminoMsg(object: _26.QueryCertificatesRequestAminoMsg): _26.QueryCertificatesRequest;
                fromProtoMsg(message: _26.QueryCertificatesRequestProtoMsg): _26.QueryCertificatesRequest;
                toProto(message: _26.QueryCertificatesRequest): Uint8Array;
                toProtoMsg(message: _26.QueryCertificatesRequest): _26.QueryCertificatesRequestProtoMsg;
            };
            QueryCertificatesResponse: {
                typeUrl: string;
                encode(message: _26.QueryCertificatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryCertificatesResponse;
                fromPartial(object: Partial<_26.QueryCertificatesResponse>): _26.QueryCertificatesResponse;
                fromAmino(object: _26.QueryCertificatesResponseAmino): _26.QueryCertificatesResponse;
                toAmino(message: _26.QueryCertificatesResponse): _26.QueryCertificatesResponseAmino;
                fromAminoMsg(object: _26.QueryCertificatesResponseAminoMsg): _26.QueryCertificatesResponse;
                fromProtoMsg(message: _26.QueryCertificatesResponseProtoMsg): _26.QueryCertificatesResponse;
                toProto(message: _26.QueryCertificatesResponse): Uint8Array;
                toProtoMsg(message: _26.QueryCertificatesResponse): _26.QueryCertificatesResponseProtoMsg;
            };
            GenesisCertificate: {
                typeUrl: string;
                encode(message: _25.GenesisCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisCertificate;
                fromPartial(object: Partial<_25.GenesisCertificate>): _25.GenesisCertificate;
                fromAmino(object: _25.GenesisCertificateAmino): _25.GenesisCertificate;
                toAmino(message: _25.GenesisCertificate): _25.GenesisCertificateAmino;
                fromAminoMsg(object: _25.GenesisCertificateAminoMsg): _25.GenesisCertificate;
                fromProtoMsg(message: _25.GenesisCertificateProtoMsg): _25.GenesisCertificate;
                toProto(message: _25.GenesisCertificate): Uint8Array;
                toProtoMsg(message: _25.GenesisCertificate): _25.GenesisCertificateProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            certificate_StateFromJSON(object: any): _24.Certificate_State;
            certificate_StateToJSON(object: _24.Certificate_State): string;
            Certificate_State: typeof _24.Certificate_State;
            Certificate_StateSDKType: typeof _24.Certificate_State;
            Certificate_StateAmino: typeof _24.Certificate_State;
            CertificateID: {
                typeUrl: string;
                encode(message: _24.CertificateID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.CertificateID;
                fromPartial(object: Partial<_24.CertificateID>): _24.CertificateID;
                fromAmino(object: _24.CertificateIDAmino): _24.CertificateID;
                toAmino(message: _24.CertificateID): _24.CertificateIDAmino;
                fromAminoMsg(object: _24.CertificateIDAminoMsg): _24.CertificateID;
                fromProtoMsg(message: _24.CertificateIDProtoMsg): _24.CertificateID;
                toProto(message: _24.CertificateID): Uint8Array;
                toProtoMsg(message: _24.CertificateID): _24.CertificateIDProtoMsg;
            };
            Certificate: {
                typeUrl: string;
                encode(message: _24.Certificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.Certificate;
                fromPartial(object: Partial<_24.Certificate>): _24.Certificate;
                fromAmino(object: _24.CertificateAmino): _24.Certificate;
                toAmino(message: _24.Certificate): _24.CertificateAmino;
                fromAminoMsg(object: _24.CertificateAminoMsg): _24.Certificate;
                fromProtoMsg(message: _24.CertificateProtoMsg): _24.Certificate;
                toProto(message: _24.Certificate): Uint8Array;
                toProtoMsg(message: _24.Certificate): _24.CertificateProtoMsg;
            };
            CertificateFilter: {
                typeUrl: string;
                encode(message: _24.CertificateFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.CertificateFilter;
                fromPartial(object: Partial<_24.CertificateFilter>): _24.CertificateFilter;
                fromAmino(object: _24.CertificateFilterAmino): _24.CertificateFilter;
                toAmino(message: _24.CertificateFilter): _24.CertificateFilterAmino;
                fromAminoMsg(object: _24.CertificateFilterAminoMsg): _24.CertificateFilter;
                fromProtoMsg(message: _24.CertificateFilterProtoMsg): _24.CertificateFilter;
                toProto(message: _24.CertificateFilter): Uint8Array;
                toProtoMsg(message: _24.CertificateFilter): _24.CertificateFilterProtoMsg;
            };
            MsgCreateCertificate: {
                typeUrl: string;
                encode(message: _24.MsgCreateCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCreateCertificate;
                fromPartial(object: Partial<_24.MsgCreateCertificate>): _24.MsgCreateCertificate;
                fromAmino(object: _24.MsgCreateCertificateAmino): _24.MsgCreateCertificate;
                toAmino(message: _24.MsgCreateCertificate): _24.MsgCreateCertificateAmino;
                fromAminoMsg(object: _24.MsgCreateCertificateAminoMsg): _24.MsgCreateCertificate;
                fromProtoMsg(message: _24.MsgCreateCertificateProtoMsg): _24.MsgCreateCertificate;
                toProto(message: _24.MsgCreateCertificate): Uint8Array;
                toProtoMsg(message: _24.MsgCreateCertificate): _24.MsgCreateCertificateProtoMsg;
            };
            MsgCreateCertificateResponse: {
                typeUrl: string;
                encode(_: _24.MsgCreateCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgCreateCertificateResponse;
                fromPartial(_: Partial<_24.MsgCreateCertificateResponse>): _24.MsgCreateCertificateResponse;
                fromAmino(_: _24.MsgCreateCertificateResponseAmino): _24.MsgCreateCertificateResponse;
                toAmino(_: _24.MsgCreateCertificateResponse): _24.MsgCreateCertificateResponseAmino;
                fromAminoMsg(object: _24.MsgCreateCertificateResponseAminoMsg): _24.MsgCreateCertificateResponse;
                fromProtoMsg(message: _24.MsgCreateCertificateResponseProtoMsg): _24.MsgCreateCertificateResponse;
                toProto(message: _24.MsgCreateCertificateResponse): Uint8Array;
                toProtoMsg(message: _24.MsgCreateCertificateResponse): _24.MsgCreateCertificateResponseProtoMsg;
            };
            MsgRevokeCertificate: {
                typeUrl: string;
                encode(message: _24.MsgRevokeCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgRevokeCertificate;
                fromPartial(object: Partial<_24.MsgRevokeCertificate>): _24.MsgRevokeCertificate;
                fromAmino(object: _24.MsgRevokeCertificateAmino): _24.MsgRevokeCertificate;
                toAmino(message: _24.MsgRevokeCertificate): _24.MsgRevokeCertificateAmino;
                fromAminoMsg(object: _24.MsgRevokeCertificateAminoMsg): _24.MsgRevokeCertificate;
                fromProtoMsg(message: _24.MsgRevokeCertificateProtoMsg): _24.MsgRevokeCertificate;
                toProto(message: _24.MsgRevokeCertificate): Uint8Array;
                toProtoMsg(message: _24.MsgRevokeCertificate): _24.MsgRevokeCertificateProtoMsg;
            };
            MsgRevokeCertificateResponse: {
                typeUrl: string;
                encode(_: _24.MsgRevokeCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgRevokeCertificateResponse;
                fromPartial(_: Partial<_24.MsgRevokeCertificateResponse>): _24.MsgRevokeCertificateResponse;
                fromAmino(_: _24.MsgRevokeCertificateResponseAmino): _24.MsgRevokeCertificateResponse;
                toAmino(_: _24.MsgRevokeCertificateResponse): _24.MsgRevokeCertificateResponseAmino;
                fromAminoMsg(object: _24.MsgRevokeCertificateResponseAminoMsg): _24.MsgRevokeCertificateResponse;
                fromProtoMsg(message: _24.MsgRevokeCertificateResponseProtoMsg): _24.MsgRevokeCertificateResponse;
                toProto(message: _24.MsgRevokeCertificateResponse): Uint8Array;
                toProtoMsg(message: _24.MsgRevokeCertificateResponse): _24.MsgRevokeCertificateResponseProtoMsg;
            };
        };
        const v1beta3: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            QueryClientImpl: typeof _258.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                certificates(request: _29.QueryCertificatesRequest): Promise<_29.QueryCertificatesResponse>;
            };
            LCDQueryClient: typeof _243.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCertificate(value: _27.MsgCreateCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeCertificate(value: _27.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCertificate(value: _27.MsgCreateCertificate): {
                        typeUrl: string;
                        value: _27.MsgCreateCertificate;
                    };
                    revokeCertificate(value: _27.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _27.MsgRevokeCertificate;
                    };
                };
                fromJSON: {
                    createCertificate(value: any): {
                        typeUrl: string;
                        value: _27.MsgCreateCertificate;
                    };
                    revokeCertificate(value: any): {
                        typeUrl: string;
                        value: _27.MsgRevokeCertificate;
                    };
                };
                fromPartial: {
                    createCertificate(value: _27.MsgCreateCertificate): {
                        typeUrl: string;
                        value: _27.MsgCreateCertificate;
                    };
                    revokeCertificate(value: _27.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _27.MsgRevokeCertificate;
                    };
                };
            };
            AminoConverter: {
                "/akash.cert.v1beta3.MsgCreateCertificate": {
                    aminoType: string;
                    toAmino: (message: _27.MsgCreateCertificate) => _27.MsgCreateCertificateAmino;
                    fromAmino: (object: _27.MsgCreateCertificateAmino) => _27.MsgCreateCertificate;
                };
                "/akash.cert.v1beta3.MsgRevokeCertificate": {
                    aminoType: string;
                    toAmino: (message: _27.MsgRevokeCertificate) => _27.MsgRevokeCertificateAmino;
                    fromAmino: (object: _27.MsgRevokeCertificateAmino) => _27.MsgRevokeCertificate;
                };
            };
            CertificateResponse: {
                typeUrl: string;
                encode(message: _29.CertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.CertificateResponse;
                fromPartial(object: Partial<_29.CertificateResponse>): _29.CertificateResponse;
                fromAmino(object: _29.CertificateResponseAmino): _29.CertificateResponse;
                toAmino(message: _29.CertificateResponse): _29.CertificateResponseAmino;
                fromAminoMsg(object: _29.CertificateResponseAminoMsg): _29.CertificateResponse;
                fromProtoMsg(message: _29.CertificateResponseProtoMsg): _29.CertificateResponse;
                toProto(message: _29.CertificateResponse): Uint8Array;
                toProtoMsg(message: _29.CertificateResponse): _29.CertificateResponseProtoMsg;
            };
            QueryCertificatesRequest: {
                typeUrl: string;
                encode(message: _29.QueryCertificatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryCertificatesRequest;
                fromPartial(object: Partial<_29.QueryCertificatesRequest>): _29.QueryCertificatesRequest;
                fromAmino(object: _29.QueryCertificatesRequestAmino): _29.QueryCertificatesRequest;
                toAmino(message: _29.QueryCertificatesRequest): _29.QueryCertificatesRequestAmino;
                fromAminoMsg(object: _29.QueryCertificatesRequestAminoMsg): _29.QueryCertificatesRequest;
                fromProtoMsg(message: _29.QueryCertificatesRequestProtoMsg): _29.QueryCertificatesRequest;
                toProto(message: _29.QueryCertificatesRequest): Uint8Array;
                toProtoMsg(message: _29.QueryCertificatesRequest): _29.QueryCertificatesRequestProtoMsg;
            };
            QueryCertificatesResponse: {
                typeUrl: string;
                encode(message: _29.QueryCertificatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.QueryCertificatesResponse;
                fromPartial(object: Partial<_29.QueryCertificatesResponse>): _29.QueryCertificatesResponse;
                fromAmino(object: _29.QueryCertificatesResponseAmino): _29.QueryCertificatesResponse;
                toAmino(message: _29.QueryCertificatesResponse): _29.QueryCertificatesResponseAmino;
                fromAminoMsg(object: _29.QueryCertificatesResponseAminoMsg): _29.QueryCertificatesResponse;
                fromProtoMsg(message: _29.QueryCertificatesResponseProtoMsg): _29.QueryCertificatesResponse;
                toProto(message: _29.QueryCertificatesResponse): Uint8Array;
                toProtoMsg(message: _29.QueryCertificatesResponse): _29.QueryCertificatesResponseProtoMsg;
            };
            GenesisCertificate: {
                typeUrl: string;
                encode(message: _28.GenesisCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.GenesisCertificate;
                fromPartial(object: Partial<_28.GenesisCertificate>): _28.GenesisCertificate;
                fromAmino(object: _28.GenesisCertificateAmino): _28.GenesisCertificate;
                toAmino(message: _28.GenesisCertificate): _28.GenesisCertificateAmino;
                fromAminoMsg(object: _28.GenesisCertificateAminoMsg): _28.GenesisCertificate;
                fromProtoMsg(message: _28.GenesisCertificateProtoMsg): _28.GenesisCertificate;
                toProto(message: _28.GenesisCertificate): Uint8Array;
                toProtoMsg(message: _28.GenesisCertificate): _28.GenesisCertificateProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _28.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
                fromAmino(object: _28.GenesisStateAmino): _28.GenesisState;
                toAmino(message: _28.GenesisState): _28.GenesisStateAmino;
                fromAminoMsg(object: _28.GenesisStateAminoMsg): _28.GenesisState;
                fromProtoMsg(message: _28.GenesisStateProtoMsg): _28.GenesisState;
                toProto(message: _28.GenesisState): Uint8Array;
                toProtoMsg(message: _28.GenesisState): _28.GenesisStateProtoMsg;
            };
            certificate_StateFromJSON(object: any): _27.Certificate_State;
            certificate_StateToJSON(object: _27.Certificate_State): string;
            Certificate_State: typeof _27.Certificate_State;
            Certificate_StateSDKType: typeof _27.Certificate_State;
            Certificate_StateAmino: typeof _27.Certificate_State;
            CertificateID: {
                typeUrl: string;
                encode(message: _27.CertificateID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.CertificateID;
                fromPartial(object: Partial<_27.CertificateID>): _27.CertificateID;
                fromAmino(object: _27.CertificateIDAmino): _27.CertificateID;
                toAmino(message: _27.CertificateID): _27.CertificateIDAmino;
                fromAminoMsg(object: _27.CertificateIDAminoMsg): _27.CertificateID;
                fromProtoMsg(message: _27.CertificateIDProtoMsg): _27.CertificateID;
                toProto(message: _27.CertificateID): Uint8Array;
                toProtoMsg(message: _27.CertificateID): _27.CertificateIDProtoMsg;
            };
            Certificate: {
                typeUrl: string;
                encode(message: _27.Certificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Certificate;
                fromPartial(object: Partial<_27.Certificate>): _27.Certificate;
                fromAmino(object: _27.CertificateAmino): _27.Certificate;
                toAmino(message: _27.Certificate): _27.CertificateAmino;
                fromAminoMsg(object: _27.CertificateAminoMsg): _27.Certificate;
                fromProtoMsg(message: _27.CertificateProtoMsg): _27.Certificate;
                toProto(message: _27.Certificate): Uint8Array;
                toProtoMsg(message: _27.Certificate): _27.CertificateProtoMsg;
            };
            CertificateFilter: {
                typeUrl: string;
                encode(message: _27.CertificateFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.CertificateFilter;
                fromPartial(object: Partial<_27.CertificateFilter>): _27.CertificateFilter;
                fromAmino(object: _27.CertificateFilterAmino): _27.CertificateFilter;
                toAmino(message: _27.CertificateFilter): _27.CertificateFilterAmino;
                fromAminoMsg(object: _27.CertificateFilterAminoMsg): _27.CertificateFilter;
                fromProtoMsg(message: _27.CertificateFilterProtoMsg): _27.CertificateFilter;
                toProto(message: _27.CertificateFilter): Uint8Array;
                toProtoMsg(message: _27.CertificateFilter): _27.CertificateFilterProtoMsg;
            };
            MsgCreateCertificate: {
                typeUrl: string;
                encode(message: _27.MsgCreateCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgCreateCertificate;
                fromPartial(object: Partial<_27.MsgCreateCertificate>): _27.MsgCreateCertificate;
                fromAmino(object: _27.MsgCreateCertificateAmino): _27.MsgCreateCertificate;
                toAmino(message: _27.MsgCreateCertificate): _27.MsgCreateCertificateAmino;
                fromAminoMsg(object: _27.MsgCreateCertificateAminoMsg): _27.MsgCreateCertificate;
                fromProtoMsg(message: _27.MsgCreateCertificateProtoMsg): _27.MsgCreateCertificate;
                toProto(message: _27.MsgCreateCertificate): Uint8Array;
                toProtoMsg(message: _27.MsgCreateCertificate): _27.MsgCreateCertificateProtoMsg;
            };
            MsgCreateCertificateResponse: {
                typeUrl: string;
                encode(_: _27.MsgCreateCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgCreateCertificateResponse;
                fromPartial(_: Partial<_27.MsgCreateCertificateResponse>): _27.MsgCreateCertificateResponse;
                fromAmino(_: _27.MsgCreateCertificateResponseAmino): _27.MsgCreateCertificateResponse;
                toAmino(_: _27.MsgCreateCertificateResponse): _27.MsgCreateCertificateResponseAmino;
                fromAminoMsg(object: _27.MsgCreateCertificateResponseAminoMsg): _27.MsgCreateCertificateResponse;
                fromProtoMsg(message: _27.MsgCreateCertificateResponseProtoMsg): _27.MsgCreateCertificateResponse;
                toProto(message: _27.MsgCreateCertificateResponse): Uint8Array;
                toProtoMsg(message: _27.MsgCreateCertificateResponse): _27.MsgCreateCertificateResponseProtoMsg;
            };
            MsgRevokeCertificate: {
                typeUrl: string;
                encode(message: _27.MsgRevokeCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgRevokeCertificate;
                fromPartial(object: Partial<_27.MsgRevokeCertificate>): _27.MsgRevokeCertificate;
                fromAmino(object: _27.MsgRevokeCertificateAmino): _27.MsgRevokeCertificate;
                toAmino(message: _27.MsgRevokeCertificate): _27.MsgRevokeCertificateAmino;
                fromAminoMsg(object: _27.MsgRevokeCertificateAminoMsg): _27.MsgRevokeCertificate;
                fromProtoMsg(message: _27.MsgRevokeCertificateProtoMsg): _27.MsgRevokeCertificate;
                toProto(message: _27.MsgRevokeCertificate): Uint8Array;
                toProtoMsg(message: _27.MsgRevokeCertificate): _27.MsgRevokeCertificateProtoMsg;
            };
            MsgRevokeCertificateResponse: {
                typeUrl: string;
                encode(_: _27.MsgRevokeCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgRevokeCertificateResponse;
                fromPartial(_: Partial<_27.MsgRevokeCertificateResponse>): _27.MsgRevokeCertificateResponse;
                fromAmino(_: _27.MsgRevokeCertificateResponseAmino): _27.MsgRevokeCertificateResponse;
                toAmino(_: _27.MsgRevokeCertificateResponse): _27.MsgRevokeCertificateResponseAmino;
                fromAminoMsg(object: _27.MsgRevokeCertificateResponseAminoMsg): _27.MsgRevokeCertificateResponse;
                fromProtoMsg(message: _27.MsgRevokeCertificateResponseProtoMsg): _27.MsgRevokeCertificateResponse;
                toProto(message: _27.MsgRevokeCertificateResponse): Uint8Array;
                toProtoMsg(message: _27.MsgRevokeCertificateResponse): _27.MsgRevokeCertificateResponseProtoMsg;
            };
        };
    }
    namespace deployment {
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                deployments(request: _35.QueryDeploymentsRequest): Promise<_35.QueryDeploymentsResponse>;
                deployment(request: _35.QueryDeploymentRequest): Promise<_35.QueryDeploymentResponse>;
                group(request: _35.QueryGroupRequest): Promise<_35.QueryGroupResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDeployment(value: _31.MsgCreateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositDeployment(value: _31.MsgDepositDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDeployment(value: _31.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeDeployment(value: _31.MsgCloseDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeGroup(value: _33.MsgCloseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pauseGroup(value: _33.MsgPauseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startGroup(value: _33.MsgStartGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDeployment(value: _31.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _31.MsgCreateDeployment;
                    };
                    depositDeployment(value: _31.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _31.MsgDepositDeployment;
                    };
                    updateDeployment(value: _31.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _31.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _31.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _31.MsgCloseDeployment;
                    };
                    closeGroup(value: _33.MsgCloseGroup): {
                        typeUrl: string;
                        value: _33.MsgCloseGroup;
                    };
                    pauseGroup(value: _33.MsgPauseGroup): {
                        typeUrl: string;
                        value: _33.MsgPauseGroup;
                    };
                    startGroup(value: _33.MsgStartGroup): {
                        typeUrl: string;
                        value: _33.MsgStartGroup;
                    };
                };
                fromJSON: {
                    createDeployment(value: any): {
                        typeUrl: string;
                        value: _31.MsgCreateDeployment;
                    };
                    depositDeployment(value: any): {
                        typeUrl: string;
                        value: _31.MsgDepositDeployment;
                    };
                    updateDeployment(value: any): {
                        typeUrl: string;
                        value: _31.MsgUpdateDeployment;
                    };
                    closeDeployment(value: any): {
                        typeUrl: string;
                        value: _31.MsgCloseDeployment;
                    };
                    closeGroup(value: any): {
                        typeUrl: string;
                        value: _33.MsgCloseGroup;
                    };
                    pauseGroup(value: any): {
                        typeUrl: string;
                        value: _33.MsgPauseGroup;
                    };
                    startGroup(value: any): {
                        typeUrl: string;
                        value: _33.MsgStartGroup;
                    };
                };
                fromPartial: {
                    createDeployment(value: _31.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _31.MsgCreateDeployment;
                    };
                    depositDeployment(value: _31.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _31.MsgDepositDeployment;
                    };
                    updateDeployment(value: _31.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _31.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _31.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _31.MsgCloseDeployment;
                    };
                    closeGroup(value: _33.MsgCloseGroup): {
                        typeUrl: string;
                        value: _33.MsgCloseGroup;
                    };
                    pauseGroup(value: _33.MsgPauseGroup): {
                        typeUrl: string;
                        value: _33.MsgPauseGroup;
                    };
                    startGroup(value: _33.MsgStartGroup): {
                        typeUrl: string;
                        value: _33.MsgStartGroup;
                    };
                };
            };
            AminoConverter: {
                "/akash.deployment.v1beta1.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: (message: _31.MsgCreateDeployment) => _31.MsgCreateDeploymentAmino;
                    fromAmino: (object: _31.MsgCreateDeploymentAmino) => _31.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta1.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: (message: _31.MsgDepositDeployment) => _31.MsgDepositDeploymentAmino;
                    fromAmino: (object: _31.MsgDepositDeploymentAmino) => _31.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta1.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: (message: _31.MsgUpdateDeployment) => _31.MsgUpdateDeploymentAmino;
                    fromAmino: (object: _31.MsgUpdateDeploymentAmino) => _31.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: (message: _31.MsgCloseDeployment) => _31.MsgCloseDeploymentAmino;
                    fromAmino: (object: _31.MsgCloseDeploymentAmino) => _31.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: (message: _33.MsgCloseGroup) => _33.MsgCloseGroupAmino;
                    fromAmino: (object: _33.MsgCloseGroupAmino) => _33.MsgCloseGroup;
                };
                "/akash.deployment.v1beta1.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: (message: _33.MsgPauseGroup) => _33.MsgPauseGroupAmino;
                    fromAmino: (object: _33.MsgPauseGroupAmino) => _33.MsgPauseGroup;
                };
                "/akash.deployment.v1beta1.MsgStartGroup": {
                    aminoType: string;
                    toAmino: (message: _33.MsgStartGroup) => _33.MsgStartGroupAmino;
                    fromAmino: (object: _33.MsgStartGroupAmino) => _33.MsgStartGroup;
                };
            };
            QueryDeploymentsRequest: {
                typeUrl: string;
                encode(message: _35.QueryDeploymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDeploymentsRequest;
                fromPartial(object: Partial<_35.QueryDeploymentsRequest>): _35.QueryDeploymentsRequest;
                fromAmino(object: _35.QueryDeploymentsRequestAmino): _35.QueryDeploymentsRequest;
                toAmino(message: _35.QueryDeploymentsRequest): _35.QueryDeploymentsRequestAmino;
                fromAminoMsg(object: _35.QueryDeploymentsRequestAminoMsg): _35.QueryDeploymentsRequest;
                fromProtoMsg(message: _35.QueryDeploymentsRequestProtoMsg): _35.QueryDeploymentsRequest;
                toProto(message: _35.QueryDeploymentsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDeploymentsRequest): _35.QueryDeploymentsRequestProtoMsg;
            };
            QueryDeploymentsResponse: {
                typeUrl: string;
                encode(message: _35.QueryDeploymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDeploymentsResponse;
                fromPartial(object: Partial<_35.QueryDeploymentsResponse>): _35.QueryDeploymentsResponse;
                fromAmino(object: _35.QueryDeploymentsResponseAmino): _35.QueryDeploymentsResponse;
                toAmino(message: _35.QueryDeploymentsResponse): _35.QueryDeploymentsResponseAmino;
                fromAminoMsg(object: _35.QueryDeploymentsResponseAminoMsg): _35.QueryDeploymentsResponse;
                fromProtoMsg(message: _35.QueryDeploymentsResponseProtoMsg): _35.QueryDeploymentsResponse;
                toProto(message: _35.QueryDeploymentsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDeploymentsResponse): _35.QueryDeploymentsResponseProtoMsg;
            };
            QueryDeploymentRequest: {
                typeUrl: string;
                encode(message: _35.QueryDeploymentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDeploymentRequest;
                fromPartial(object: Partial<_35.QueryDeploymentRequest>): _35.QueryDeploymentRequest;
                fromAmino(object: _35.QueryDeploymentRequestAmino): _35.QueryDeploymentRequest;
                toAmino(message: _35.QueryDeploymentRequest): _35.QueryDeploymentRequestAmino;
                fromAminoMsg(object: _35.QueryDeploymentRequestAminoMsg): _35.QueryDeploymentRequest;
                fromProtoMsg(message: _35.QueryDeploymentRequestProtoMsg): _35.QueryDeploymentRequest;
                toProto(message: _35.QueryDeploymentRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDeploymentRequest): _35.QueryDeploymentRequestProtoMsg;
            };
            QueryDeploymentResponse: {
                typeUrl: string;
                encode(message: _35.QueryDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryDeploymentResponse;
                fromPartial(object: Partial<_35.QueryDeploymentResponse>): _35.QueryDeploymentResponse;
                fromAmino(object: _35.QueryDeploymentResponseAmino): _35.QueryDeploymentResponse;
                toAmino(message: _35.QueryDeploymentResponse): _35.QueryDeploymentResponseAmino;
                fromAminoMsg(object: _35.QueryDeploymentResponseAminoMsg): _35.QueryDeploymentResponse;
                fromProtoMsg(message: _35.QueryDeploymentResponseProtoMsg): _35.QueryDeploymentResponse;
                toProto(message: _35.QueryDeploymentResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDeploymentResponse): _35.QueryDeploymentResponseProtoMsg;
            };
            QueryGroupRequest: {
                typeUrl: string;
                encode(message: _35.QueryGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGroupRequest;
                fromPartial(object: Partial<_35.QueryGroupRequest>): _35.QueryGroupRequest;
                fromAmino(object: _35.QueryGroupRequestAmino): _35.QueryGroupRequest;
                toAmino(message: _35.QueryGroupRequest): _35.QueryGroupRequestAmino;
                fromAminoMsg(object: _35.QueryGroupRequestAminoMsg): _35.QueryGroupRequest;
                fromProtoMsg(message: _35.QueryGroupRequestProtoMsg): _35.QueryGroupRequest;
                toProto(message: _35.QueryGroupRequest): Uint8Array;
                toProtoMsg(message: _35.QueryGroupRequest): _35.QueryGroupRequestProtoMsg;
            };
            QueryGroupResponse: {
                typeUrl: string;
                encode(message: _35.QueryGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryGroupResponse;
                fromPartial(object: Partial<_35.QueryGroupResponse>): _35.QueryGroupResponse;
                fromAmino(object: _35.QueryGroupResponseAmino): _35.QueryGroupResponse;
                toAmino(message: _35.QueryGroupResponse): _35.QueryGroupResponseAmino;
                fromAminoMsg(object: _35.QueryGroupResponseAminoMsg): _35.QueryGroupResponse;
                fromProtoMsg(message: _35.QueryGroupResponseProtoMsg): _35.QueryGroupResponse;
                toProto(message: _35.QueryGroupResponse): Uint8Array;
                toProtoMsg(message: _35.QueryGroupResponse): _35.QueryGroupResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _34.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
                fromAmino(object: _34.ParamsAmino): _34.Params;
                toAmino(message: _34.Params): _34.ParamsAmino;
                fromAminoMsg(object: _34.ParamsAminoMsg): _34.Params;
                fromProtoMsg(message: _34.ParamsProtoMsg): _34.Params;
                toProto(message: _34.Params): Uint8Array;
                toProtoMsg(message: _34.Params): _34.ParamsProtoMsg;
            };
            group_StateFromJSON(object: any): _33.Group_State;
            group_StateToJSON(object: _33.Group_State): string;
            Group_State: typeof _33.Group_State;
            Group_StateSDKType: typeof _33.Group_State;
            Group_StateAmino: typeof _33.Group_State;
            MsgCloseGroup: {
                typeUrl: string;
                encode(message: _33.MsgCloseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MsgCloseGroup;
                fromPartial(object: Partial<_33.MsgCloseGroup>): _33.MsgCloseGroup;
                fromAmino(object: _33.MsgCloseGroupAmino): _33.MsgCloseGroup;
                toAmino(message: _33.MsgCloseGroup): _33.MsgCloseGroupAmino;
                fromAminoMsg(object: _33.MsgCloseGroupAminoMsg): _33.MsgCloseGroup;
                fromProtoMsg(message: _33.MsgCloseGroupProtoMsg): _33.MsgCloseGroup;
                toProto(message: _33.MsgCloseGroup): Uint8Array;
                toProtoMsg(message: _33.MsgCloseGroup): _33.MsgCloseGroupProtoMsg;
            };
            MsgCloseGroupResponse: {
                typeUrl: string;
                encode(_: _33.MsgCloseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.MsgCloseGroupResponse;
                fromPartial(_: Partial<_33.MsgCloseGroupResponse>): _33.MsgCloseGroupResponse;
                fromAmino(_: _33.MsgCloseGroupResponseAmino): _33.MsgCloseGroupResponse;
                toAmino(_: _33.MsgCloseGroupResponse): _33.MsgCloseGroupResponseAmino;
                fromAminoMsg(object: _33.MsgCloseGroupResponseAminoMsg): _33.MsgCloseGroupResponse;
                fromProtoMsg(message: _33.MsgCloseGroupResponseProtoMsg): _33.MsgCloseGroupResponse;
                toProto(message: _33.MsgCloseGroupResponse): Uint8Array;
                toProtoMsg(message: _33.MsgCloseGroupResponse): _33.MsgCloseGroupResponseProtoMsg;
            };
            MsgPauseGroup: {
                typeUrl: string;
                encode(message: _33.MsgPauseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MsgPauseGroup;
                fromPartial(object: Partial<_33.MsgPauseGroup>): _33.MsgPauseGroup;
                fromAmino(object: _33.MsgPauseGroupAmino): _33.MsgPauseGroup;
                toAmino(message: _33.MsgPauseGroup): _33.MsgPauseGroupAmino;
                fromAminoMsg(object: _33.MsgPauseGroupAminoMsg): _33.MsgPauseGroup;
                fromProtoMsg(message: _33.MsgPauseGroupProtoMsg): _33.MsgPauseGroup;
                toProto(message: _33.MsgPauseGroup): Uint8Array;
                toProtoMsg(message: _33.MsgPauseGroup): _33.MsgPauseGroupProtoMsg;
            };
            MsgPauseGroupResponse: {
                typeUrl: string;
                encode(_: _33.MsgPauseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.MsgPauseGroupResponse;
                fromPartial(_: Partial<_33.MsgPauseGroupResponse>): _33.MsgPauseGroupResponse;
                fromAmino(_: _33.MsgPauseGroupResponseAmino): _33.MsgPauseGroupResponse;
                toAmino(_: _33.MsgPauseGroupResponse): _33.MsgPauseGroupResponseAmino;
                fromAminoMsg(object: _33.MsgPauseGroupResponseAminoMsg): _33.MsgPauseGroupResponse;
                fromProtoMsg(message: _33.MsgPauseGroupResponseProtoMsg): _33.MsgPauseGroupResponse;
                toProto(message: _33.MsgPauseGroupResponse): Uint8Array;
                toProtoMsg(message: _33.MsgPauseGroupResponse): _33.MsgPauseGroupResponseProtoMsg;
            };
            MsgStartGroup: {
                typeUrl: string;
                encode(message: _33.MsgStartGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.MsgStartGroup;
                fromPartial(object: Partial<_33.MsgStartGroup>): _33.MsgStartGroup;
                fromAmino(object: _33.MsgStartGroupAmino): _33.MsgStartGroup;
                toAmino(message: _33.MsgStartGroup): _33.MsgStartGroupAmino;
                fromAminoMsg(object: _33.MsgStartGroupAminoMsg): _33.MsgStartGroup;
                fromProtoMsg(message: _33.MsgStartGroupProtoMsg): _33.MsgStartGroup;
                toProto(message: _33.MsgStartGroup): Uint8Array;
                toProtoMsg(message: _33.MsgStartGroup): _33.MsgStartGroupProtoMsg;
            };
            MsgStartGroupResponse: {
                typeUrl: string;
                encode(_: _33.MsgStartGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _33.MsgStartGroupResponse;
                fromPartial(_: Partial<_33.MsgStartGroupResponse>): _33.MsgStartGroupResponse;
                fromAmino(_: _33.MsgStartGroupResponseAmino): _33.MsgStartGroupResponse;
                toAmino(_: _33.MsgStartGroupResponse): _33.MsgStartGroupResponseAmino;
                fromAminoMsg(object: _33.MsgStartGroupResponseAminoMsg): _33.MsgStartGroupResponse;
                fromProtoMsg(message: _33.MsgStartGroupResponseProtoMsg): _33.MsgStartGroupResponse;
                toProto(message: _33.MsgStartGroupResponse): Uint8Array;
                toProtoMsg(message: _33.MsgStartGroupResponse): _33.MsgStartGroupResponseProtoMsg;
            };
            GroupID: {
                typeUrl: string;
                encode(message: _33.GroupID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GroupID;
                fromPartial(object: Partial<_33.GroupID>): _33.GroupID;
                fromAmino(object: _33.GroupIDAmino): _33.GroupID;
                toAmino(message: _33.GroupID): _33.GroupIDAmino;
                fromAminoMsg(object: _33.GroupIDAminoMsg): _33.GroupID;
                fromProtoMsg(message: _33.GroupIDProtoMsg): _33.GroupID;
                toProto(message: _33.GroupID): Uint8Array;
                toProtoMsg(message: _33.GroupID): _33.GroupIDProtoMsg;
            };
            GroupSpec: {
                typeUrl: string;
                encode(message: _33.GroupSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.GroupSpec;
                fromPartial(object: Partial<_33.GroupSpec>): _33.GroupSpec;
                fromAmino(object: _33.GroupSpecAmino): _33.GroupSpec;
                toAmino(message: _33.GroupSpec): _33.GroupSpecAmino;
                fromAminoMsg(object: _33.GroupSpecAminoMsg): _33.GroupSpec;
                fromProtoMsg(message: _33.GroupSpecProtoMsg): _33.GroupSpec;
                toProto(message: _33.GroupSpec): Uint8Array;
                toProtoMsg(message: _33.GroupSpec): _33.GroupSpecProtoMsg;
            };
            Group: {
                typeUrl: string;
                encode(message: _33.Group, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Group;
                fromPartial(object: Partial<_33.Group>): _33.Group;
                fromAmino(object: _33.GroupAmino): _33.Group;
                toAmino(message: _33.Group): _33.GroupAmino;
                fromAminoMsg(object: _33.GroupAminoMsg): _33.Group;
                fromProtoMsg(message: _33.GroupProtoMsg): _33.Group;
                toProto(message: _33.Group): Uint8Array;
                toProtoMsg(message: _33.Group): _33.GroupProtoMsg;
            };
            Resource: {
                typeUrl: string;
                encode(message: _33.Resource, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _33.Resource;
                fromPartial(object: Partial<_33.Resource>): _33.Resource;
                fromAmino(object: _33.ResourceAmino): _33.Resource;
                toAmino(message: _33.Resource): _33.ResourceAmino;
                fromAminoMsg(object: _33.ResourceAminoMsg): _33.Resource;
                fromProtoMsg(message: _33.ResourceProtoMsg): _33.Resource;
                toProto(message: _33.Resource): Uint8Array;
                toProtoMsg(message: _33.Resource): _33.ResourceProtoMsg;
            };
            GenesisDeployment: {
                typeUrl: string;
                encode(message: _32.GenesisDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisDeployment;
                fromPartial(object: Partial<_32.GenesisDeployment>): _32.GenesisDeployment;
                fromAmino(object: _32.GenesisDeploymentAmino): _32.GenesisDeployment;
                toAmino(message: _32.GenesisDeployment): _32.GenesisDeploymentAmino;
                fromAminoMsg(object: _32.GenesisDeploymentAminoMsg): _32.GenesisDeployment;
                fromProtoMsg(message: _32.GenesisDeploymentProtoMsg): _32.GenesisDeployment;
                toProto(message: _32.GenesisDeployment): Uint8Array;
                toProtoMsg(message: _32.GenesisDeployment): _32.GenesisDeploymentProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            deployment_StateFromJSON(object: any): _31.Deployment_State;
            deployment_StateToJSON(object: _31.Deployment_State): string;
            Deployment_State: typeof _31.Deployment_State;
            Deployment_StateSDKType: typeof _31.Deployment_State;
            Deployment_StateAmino: typeof _31.Deployment_State;
            MsgCreateDeployment: {
                typeUrl: string;
                encode(message: _31.MsgCreateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgCreateDeployment;
                fromPartial(object: Partial<_31.MsgCreateDeployment>): _31.MsgCreateDeployment;
                fromAmino(object: _31.MsgCreateDeploymentAmino): _31.MsgCreateDeployment;
                toAmino(message: _31.MsgCreateDeployment): _31.MsgCreateDeploymentAmino;
                fromAminoMsg(object: _31.MsgCreateDeploymentAminoMsg): _31.MsgCreateDeployment;
                fromProtoMsg(message: _31.MsgCreateDeploymentProtoMsg): _31.MsgCreateDeployment;
                toProto(message: _31.MsgCreateDeployment): Uint8Array;
                toProtoMsg(message: _31.MsgCreateDeployment): _31.MsgCreateDeploymentProtoMsg;
            };
            MsgCreateDeploymentResponse: {
                typeUrl: string;
                encode(_: _31.MsgCreateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgCreateDeploymentResponse;
                fromPartial(_: Partial<_31.MsgCreateDeploymentResponse>): _31.MsgCreateDeploymentResponse;
                fromAmino(_: _31.MsgCreateDeploymentResponseAmino): _31.MsgCreateDeploymentResponse;
                toAmino(_: _31.MsgCreateDeploymentResponse): _31.MsgCreateDeploymentResponseAmino;
                fromAminoMsg(object: _31.MsgCreateDeploymentResponseAminoMsg): _31.MsgCreateDeploymentResponse;
                fromProtoMsg(message: _31.MsgCreateDeploymentResponseProtoMsg): _31.MsgCreateDeploymentResponse;
                toProto(message: _31.MsgCreateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _31.MsgCreateDeploymentResponse): _31.MsgCreateDeploymentResponseProtoMsg;
            };
            MsgDepositDeployment: {
                typeUrl: string;
                encode(message: _31.MsgDepositDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgDepositDeployment;
                fromPartial(object: Partial<_31.MsgDepositDeployment>): _31.MsgDepositDeployment;
                fromAmino(object: _31.MsgDepositDeploymentAmino): _31.MsgDepositDeployment;
                toAmino(message: _31.MsgDepositDeployment): _31.MsgDepositDeploymentAmino;
                fromAminoMsg(object: _31.MsgDepositDeploymentAminoMsg): _31.MsgDepositDeployment;
                fromProtoMsg(message: _31.MsgDepositDeploymentProtoMsg): _31.MsgDepositDeployment;
                toProto(message: _31.MsgDepositDeployment): Uint8Array;
                toProtoMsg(message: _31.MsgDepositDeployment): _31.MsgDepositDeploymentProtoMsg;
            };
            MsgDepositDeploymentResponse: {
                typeUrl: string;
                encode(_: _31.MsgDepositDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgDepositDeploymentResponse;
                fromPartial(_: Partial<_31.MsgDepositDeploymentResponse>): _31.MsgDepositDeploymentResponse;
                fromAmino(_: _31.MsgDepositDeploymentResponseAmino): _31.MsgDepositDeploymentResponse;
                toAmino(_: _31.MsgDepositDeploymentResponse): _31.MsgDepositDeploymentResponseAmino;
                fromAminoMsg(object: _31.MsgDepositDeploymentResponseAminoMsg): _31.MsgDepositDeploymentResponse;
                fromProtoMsg(message: _31.MsgDepositDeploymentResponseProtoMsg): _31.MsgDepositDeploymentResponse;
                toProto(message: _31.MsgDepositDeploymentResponse): Uint8Array;
                toProtoMsg(message: _31.MsgDepositDeploymentResponse): _31.MsgDepositDeploymentResponseProtoMsg;
            };
            MsgUpdateDeployment: {
                typeUrl: string;
                encode(message: _31.MsgUpdateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgUpdateDeployment;
                fromPartial(object: Partial<_31.MsgUpdateDeployment>): _31.MsgUpdateDeployment;
                fromAmino(object: _31.MsgUpdateDeploymentAmino): _31.MsgUpdateDeployment;
                toAmino(message: _31.MsgUpdateDeployment): _31.MsgUpdateDeploymentAmino;
                fromAminoMsg(object: _31.MsgUpdateDeploymentAminoMsg): _31.MsgUpdateDeployment;
                fromProtoMsg(message: _31.MsgUpdateDeploymentProtoMsg): _31.MsgUpdateDeployment;
                toProto(message: _31.MsgUpdateDeployment): Uint8Array;
                toProtoMsg(message: _31.MsgUpdateDeployment): _31.MsgUpdateDeploymentProtoMsg;
            };
            MsgUpdateDeploymentResponse: {
                typeUrl: string;
                encode(_: _31.MsgUpdateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgUpdateDeploymentResponse;
                fromPartial(_: Partial<_31.MsgUpdateDeploymentResponse>): _31.MsgUpdateDeploymentResponse;
                fromAmino(_: _31.MsgUpdateDeploymentResponseAmino): _31.MsgUpdateDeploymentResponse;
                toAmino(_: _31.MsgUpdateDeploymentResponse): _31.MsgUpdateDeploymentResponseAmino;
                fromAminoMsg(object: _31.MsgUpdateDeploymentResponseAminoMsg): _31.MsgUpdateDeploymentResponse;
                fromProtoMsg(message: _31.MsgUpdateDeploymentResponseProtoMsg): _31.MsgUpdateDeploymentResponse;
                toProto(message: _31.MsgUpdateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _31.MsgUpdateDeploymentResponse): _31.MsgUpdateDeploymentResponseProtoMsg;
            };
            MsgCloseDeployment: {
                typeUrl: string;
                encode(message: _31.MsgCloseDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.MsgCloseDeployment;
                fromPartial(object: Partial<_31.MsgCloseDeployment>): _31.MsgCloseDeployment;
                fromAmino(object: _31.MsgCloseDeploymentAmino): _31.MsgCloseDeployment;
                toAmino(message: _31.MsgCloseDeployment): _31.MsgCloseDeploymentAmino;
                fromAminoMsg(object: _31.MsgCloseDeploymentAminoMsg): _31.MsgCloseDeployment;
                fromProtoMsg(message: _31.MsgCloseDeploymentProtoMsg): _31.MsgCloseDeployment;
                toProto(message: _31.MsgCloseDeployment): Uint8Array;
                toProtoMsg(message: _31.MsgCloseDeployment): _31.MsgCloseDeploymentProtoMsg;
            };
            MsgCloseDeploymentResponse: {
                typeUrl: string;
                encode(_: _31.MsgCloseDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _31.MsgCloseDeploymentResponse;
                fromPartial(_: Partial<_31.MsgCloseDeploymentResponse>): _31.MsgCloseDeploymentResponse;
                fromAmino(_: _31.MsgCloseDeploymentResponseAmino): _31.MsgCloseDeploymentResponse;
                toAmino(_: _31.MsgCloseDeploymentResponse): _31.MsgCloseDeploymentResponseAmino;
                fromAminoMsg(object: _31.MsgCloseDeploymentResponseAminoMsg): _31.MsgCloseDeploymentResponse;
                fromProtoMsg(message: _31.MsgCloseDeploymentResponseProtoMsg): _31.MsgCloseDeploymentResponse;
                toProto(message: _31.MsgCloseDeploymentResponse): Uint8Array;
                toProtoMsg(message: _31.MsgCloseDeploymentResponse): _31.MsgCloseDeploymentResponseProtoMsg;
            };
            DeploymentID: {
                typeUrl: string;
                encode(message: _31.DeploymentID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.DeploymentID;
                fromPartial(object: Partial<_31.DeploymentID>): _31.DeploymentID;
                fromAmino(object: _31.DeploymentIDAmino): _31.DeploymentID;
                toAmino(message: _31.DeploymentID): _31.DeploymentIDAmino;
                fromAminoMsg(object: _31.DeploymentIDAminoMsg): _31.DeploymentID;
                fromProtoMsg(message: _31.DeploymentIDProtoMsg): _31.DeploymentID;
                toProto(message: _31.DeploymentID): Uint8Array;
                toProtoMsg(message: _31.DeploymentID): _31.DeploymentIDProtoMsg;
            };
            Deployment: {
                typeUrl: string;
                encode(message: _31.Deployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.Deployment;
                fromPartial(object: Partial<_31.Deployment>): _31.Deployment;
                fromAmino(object: _31.DeploymentAmino): _31.Deployment;
                toAmino(message: _31.Deployment): _31.DeploymentAmino;
                fromAminoMsg(object: _31.DeploymentAminoMsg): _31.Deployment;
                fromProtoMsg(message: _31.DeploymentProtoMsg): _31.Deployment;
                toProto(message: _31.Deployment): Uint8Array;
                toProtoMsg(message: _31.Deployment): _31.DeploymentProtoMsg;
            };
            DeploymentFilters: {
                typeUrl: string;
                encode(message: _31.DeploymentFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.DeploymentFilters;
                fromPartial(object: Partial<_31.DeploymentFilters>): _31.DeploymentFilters;
                fromAmino(object: _31.DeploymentFiltersAmino): _31.DeploymentFilters;
                toAmino(message: _31.DeploymentFilters): _31.DeploymentFiltersAmino;
                fromAminoMsg(object: _31.DeploymentFiltersAminoMsg): _31.DeploymentFilters;
                fromProtoMsg(message: _31.DeploymentFiltersProtoMsg): _31.DeploymentFilters;
                toProto(message: _31.DeploymentFilters): Uint8Array;
                toProtoMsg(message: _31.DeploymentFilters): _31.DeploymentFiltersProtoMsg;
            };
            DepositDeploymentAuthorization: {
                typeUrl: string;
                encode(message: _30.DepositDeploymentAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.DepositDeploymentAuthorization;
                fromPartial(object: Partial<_30.DepositDeploymentAuthorization>): _30.DepositDeploymentAuthorization;
                fromAmino(object: _30.DepositDeploymentAuthorizationAmino): _30.DepositDeploymentAuthorization;
                toAmino(message: _30.DepositDeploymentAuthorization): _30.DepositDeploymentAuthorizationAmino;
                fromAminoMsg(object: _30.DepositDeploymentAuthorizationAminoMsg): _30.DepositDeploymentAuthorization;
                fromProtoMsg(message: _30.DepositDeploymentAuthorizationProtoMsg): _30.DepositDeploymentAuthorization;
                toProto(message: _30.DepositDeploymentAuthorization): Uint8Array;
                toProtoMsg(message: _30.DepositDeploymentAuthorization): _30.DepositDeploymentAuthorizationProtoMsg;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _277.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                deployments(request: _45.QueryDeploymentsRequest): Promise<_45.QueryDeploymentsResponse>;
                deployment(request: _45.QueryDeploymentRequest): Promise<_45.QueryDeploymentResponse>;
                group(request: _45.QueryGroupRequest): Promise<_45.QueryGroupResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDeployment(value: _38.MsgCreateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositDeployment(value: _38.MsgDepositDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDeployment(value: _38.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeDeployment(value: _38.MsgCloseDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeGroup(value: _42.MsgCloseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pauseGroup(value: _42.MsgPauseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startGroup(value: _42.MsgStartGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDeployment(value: _38.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _38.MsgCreateDeployment;
                    };
                    depositDeployment(value: _38.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _38.MsgDepositDeployment;
                    };
                    updateDeployment(value: _38.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _38.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _38.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _38.MsgCloseDeployment;
                    };
                    closeGroup(value: _42.MsgCloseGroup): {
                        typeUrl: string;
                        value: _42.MsgCloseGroup;
                    };
                    pauseGroup(value: _42.MsgPauseGroup): {
                        typeUrl: string;
                        value: _42.MsgPauseGroup;
                    };
                    startGroup(value: _42.MsgStartGroup): {
                        typeUrl: string;
                        value: _42.MsgStartGroup;
                    };
                };
                fromJSON: {
                    createDeployment(value: any): {
                        typeUrl: string;
                        value: _38.MsgCreateDeployment;
                    };
                    depositDeployment(value: any): {
                        typeUrl: string;
                        value: _38.MsgDepositDeployment;
                    };
                    updateDeployment(value: any): {
                        typeUrl: string;
                        value: _38.MsgUpdateDeployment;
                    };
                    closeDeployment(value: any): {
                        typeUrl: string;
                        value: _38.MsgCloseDeployment;
                    };
                    closeGroup(value: any): {
                        typeUrl: string;
                        value: _42.MsgCloseGroup;
                    };
                    pauseGroup(value: any): {
                        typeUrl: string;
                        value: _42.MsgPauseGroup;
                    };
                    startGroup(value: any): {
                        typeUrl: string;
                        value: _42.MsgStartGroup;
                    };
                };
                fromPartial: {
                    createDeployment(value: _38.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _38.MsgCreateDeployment;
                    };
                    depositDeployment(value: _38.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _38.MsgDepositDeployment;
                    };
                    updateDeployment(value: _38.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _38.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _38.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _38.MsgCloseDeployment;
                    };
                    closeGroup(value: _42.MsgCloseGroup): {
                        typeUrl: string;
                        value: _42.MsgCloseGroup;
                    };
                    pauseGroup(value: _42.MsgPauseGroup): {
                        typeUrl: string;
                        value: _42.MsgPauseGroup;
                    };
                    startGroup(value: _42.MsgStartGroup): {
                        typeUrl: string;
                        value: _42.MsgStartGroup;
                    };
                };
            };
            AminoConverter: {
                "/akash.deployment.v1beta2.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: (message: _38.MsgCreateDeployment) => _38.MsgCreateDeploymentAmino;
                    fromAmino: (object: _38.MsgCreateDeploymentAmino) => _38.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta2.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: (message: _38.MsgDepositDeployment) => _38.MsgDepositDeploymentAmino;
                    fromAmino: (object: _38.MsgDepositDeploymentAmino) => _38.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta2.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: (message: _38.MsgUpdateDeployment) => _38.MsgUpdateDeploymentAmino;
                    fromAmino: (object: _38.MsgUpdateDeploymentAmino) => _38.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: (message: _38.MsgCloseDeployment) => _38.MsgCloseDeploymentAmino;
                    fromAmino: (object: _38.MsgCloseDeploymentAmino) => _38.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: (message: _42.MsgCloseGroup) => _42.MsgCloseGroupAmino;
                    fromAmino: (object: _42.MsgCloseGroupAmino) => _42.MsgCloseGroup;
                };
                "/akash.deployment.v1beta2.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: (message: _42.MsgPauseGroup) => _42.MsgPauseGroupAmino;
                    fromAmino: (object: _42.MsgPauseGroupAmino) => _42.MsgPauseGroup;
                };
                "/akash.deployment.v1beta2.MsgStartGroup": {
                    aminoType: string;
                    toAmino: (message: _42.MsgStartGroup) => _42.MsgStartGroupAmino;
                    fromAmino: (object: _42.MsgStartGroupAmino) => _42.MsgStartGroup;
                };
            };
            Resource: {
                typeUrl: string;
                encode(message: _46.Resource, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Resource;
                fromPartial(object: Partial<_46.Resource>): _46.Resource;
                fromAmino(object: _46.ResourceAmino): _46.Resource;
                toAmino(message: _46.Resource): _46.ResourceAmino;
                fromAminoMsg(object: _46.ResourceAminoMsg): _46.Resource;
                fromProtoMsg(message: _46.ResourceProtoMsg): _46.Resource;
                toProto(message: _46.Resource): Uint8Array;
                toProtoMsg(message: _46.Resource): _46.ResourceProtoMsg;
            };
            QueryDeploymentsRequest: {
                typeUrl: string;
                encode(message: _45.QueryDeploymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDeploymentsRequest;
                fromPartial(object: Partial<_45.QueryDeploymentsRequest>): _45.QueryDeploymentsRequest;
                fromAmino(object: _45.QueryDeploymentsRequestAmino): _45.QueryDeploymentsRequest;
                toAmino(message: _45.QueryDeploymentsRequest): _45.QueryDeploymentsRequestAmino;
                fromAminoMsg(object: _45.QueryDeploymentsRequestAminoMsg): _45.QueryDeploymentsRequest;
                fromProtoMsg(message: _45.QueryDeploymentsRequestProtoMsg): _45.QueryDeploymentsRequest;
                toProto(message: _45.QueryDeploymentsRequest): Uint8Array;
                toProtoMsg(message: _45.QueryDeploymentsRequest): _45.QueryDeploymentsRequestProtoMsg;
            };
            QueryDeploymentsResponse: {
                typeUrl: string;
                encode(message: _45.QueryDeploymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDeploymentsResponse;
                fromPartial(object: Partial<_45.QueryDeploymentsResponse>): _45.QueryDeploymentsResponse;
                fromAmino(object: _45.QueryDeploymentsResponseAmino): _45.QueryDeploymentsResponse;
                toAmino(message: _45.QueryDeploymentsResponse): _45.QueryDeploymentsResponseAmino;
                fromAminoMsg(object: _45.QueryDeploymentsResponseAminoMsg): _45.QueryDeploymentsResponse;
                fromProtoMsg(message: _45.QueryDeploymentsResponseProtoMsg): _45.QueryDeploymentsResponse;
                toProto(message: _45.QueryDeploymentsResponse): Uint8Array;
                toProtoMsg(message: _45.QueryDeploymentsResponse): _45.QueryDeploymentsResponseProtoMsg;
            };
            QueryDeploymentRequest: {
                typeUrl: string;
                encode(message: _45.QueryDeploymentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDeploymentRequest;
                fromPartial(object: Partial<_45.QueryDeploymentRequest>): _45.QueryDeploymentRequest;
                fromAmino(object: _45.QueryDeploymentRequestAmino): _45.QueryDeploymentRequest;
                toAmino(message: _45.QueryDeploymentRequest): _45.QueryDeploymentRequestAmino;
                fromAminoMsg(object: _45.QueryDeploymentRequestAminoMsg): _45.QueryDeploymentRequest;
                fromProtoMsg(message: _45.QueryDeploymentRequestProtoMsg): _45.QueryDeploymentRequest;
                toProto(message: _45.QueryDeploymentRequest): Uint8Array;
                toProtoMsg(message: _45.QueryDeploymentRequest): _45.QueryDeploymentRequestProtoMsg;
            };
            QueryDeploymentResponse: {
                typeUrl: string;
                encode(message: _45.QueryDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryDeploymentResponse;
                fromPartial(object: Partial<_45.QueryDeploymentResponse>): _45.QueryDeploymentResponse;
                fromAmino(object: _45.QueryDeploymentResponseAmino): _45.QueryDeploymentResponse;
                toAmino(message: _45.QueryDeploymentResponse): _45.QueryDeploymentResponseAmino;
                fromAminoMsg(object: _45.QueryDeploymentResponseAminoMsg): _45.QueryDeploymentResponse;
                fromProtoMsg(message: _45.QueryDeploymentResponseProtoMsg): _45.QueryDeploymentResponse;
                toProto(message: _45.QueryDeploymentResponse): Uint8Array;
                toProtoMsg(message: _45.QueryDeploymentResponse): _45.QueryDeploymentResponseProtoMsg;
            };
            QueryGroupRequest: {
                typeUrl: string;
                encode(message: _45.QueryGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryGroupRequest;
                fromPartial(object: Partial<_45.QueryGroupRequest>): _45.QueryGroupRequest;
                fromAmino(object: _45.QueryGroupRequestAmino): _45.QueryGroupRequest;
                toAmino(message: _45.QueryGroupRequest): _45.QueryGroupRequestAmino;
                fromAminoMsg(object: _45.QueryGroupRequestAminoMsg): _45.QueryGroupRequest;
                fromProtoMsg(message: _45.QueryGroupRequestProtoMsg): _45.QueryGroupRequest;
                toProto(message: _45.QueryGroupRequest): Uint8Array;
                toProtoMsg(message: _45.QueryGroupRequest): _45.QueryGroupRequestProtoMsg;
            };
            QueryGroupResponse: {
                typeUrl: string;
                encode(message: _45.QueryGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.QueryGroupResponse;
                fromPartial(object: Partial<_45.QueryGroupResponse>): _45.QueryGroupResponse;
                fromAmino(object: _45.QueryGroupResponseAmino): _45.QueryGroupResponse;
                toAmino(message: _45.QueryGroupResponse): _45.QueryGroupResponseAmino;
                fromAminoMsg(object: _45.QueryGroupResponseAminoMsg): _45.QueryGroupResponse;
                fromProtoMsg(message: _45.QueryGroupResponseProtoMsg): _45.QueryGroupResponse;
                toProto(message: _45.QueryGroupResponse): Uint8Array;
                toProtoMsg(message: _45.QueryGroupResponse): _45.QueryGroupResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _44.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.Params;
                fromPartial(object: Partial<_44.Params>): _44.Params;
                fromAmino(object: _44.ParamsAmino): _44.Params;
                toAmino(message: _44.Params): _44.ParamsAmino;
                fromAminoMsg(object: _44.ParamsAminoMsg): _44.Params;
                fromProtoMsg(message: _44.ParamsProtoMsg): _44.Params;
                toProto(message: _44.Params): Uint8Array;
                toProtoMsg(message: _44.Params): _44.ParamsProtoMsg;
            };
            GroupSpec: {
                typeUrl: string;
                encode(message: _43.GroupSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.GroupSpec;
                fromPartial(object: Partial<_43.GroupSpec>): _43.GroupSpec;
                fromAmino(object: _43.GroupSpecAmino): _43.GroupSpec;
                toAmino(message: _43.GroupSpec): _43.GroupSpecAmino;
                fromAminoMsg(object: _43.GroupSpecAminoMsg): _43.GroupSpec;
                fromProtoMsg(message: _43.GroupSpecProtoMsg): _43.GroupSpec;
                toProto(message: _43.GroupSpec): Uint8Array;
                toProtoMsg(message: _43.GroupSpec): _43.GroupSpecProtoMsg;
            };
            MsgCloseGroup: {
                typeUrl: string;
                encode(message: _42.MsgCloseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgCloseGroup;
                fromPartial(object: Partial<_42.MsgCloseGroup>): _42.MsgCloseGroup;
                fromAmino(object: _42.MsgCloseGroupAmino): _42.MsgCloseGroup;
                toAmino(message: _42.MsgCloseGroup): _42.MsgCloseGroupAmino;
                fromAminoMsg(object: _42.MsgCloseGroupAminoMsg): _42.MsgCloseGroup;
                fromProtoMsg(message: _42.MsgCloseGroupProtoMsg): _42.MsgCloseGroup;
                toProto(message: _42.MsgCloseGroup): Uint8Array;
                toProtoMsg(message: _42.MsgCloseGroup): _42.MsgCloseGroupProtoMsg;
            };
            MsgCloseGroupResponse: {
                typeUrl: string;
                encode(_: _42.MsgCloseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgCloseGroupResponse;
                fromPartial(_: Partial<_42.MsgCloseGroupResponse>): _42.MsgCloseGroupResponse;
                fromAmino(_: _42.MsgCloseGroupResponseAmino): _42.MsgCloseGroupResponse;
                toAmino(_: _42.MsgCloseGroupResponse): _42.MsgCloseGroupResponseAmino;
                fromAminoMsg(object: _42.MsgCloseGroupResponseAminoMsg): _42.MsgCloseGroupResponse;
                fromProtoMsg(message: _42.MsgCloseGroupResponseProtoMsg): _42.MsgCloseGroupResponse;
                toProto(message: _42.MsgCloseGroupResponse): Uint8Array;
                toProtoMsg(message: _42.MsgCloseGroupResponse): _42.MsgCloseGroupResponseProtoMsg;
            };
            MsgPauseGroup: {
                typeUrl: string;
                encode(message: _42.MsgPauseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgPauseGroup;
                fromPartial(object: Partial<_42.MsgPauseGroup>): _42.MsgPauseGroup;
                fromAmino(object: _42.MsgPauseGroupAmino): _42.MsgPauseGroup;
                toAmino(message: _42.MsgPauseGroup): _42.MsgPauseGroupAmino;
                fromAminoMsg(object: _42.MsgPauseGroupAminoMsg): _42.MsgPauseGroup;
                fromProtoMsg(message: _42.MsgPauseGroupProtoMsg): _42.MsgPauseGroup;
                toProto(message: _42.MsgPauseGroup): Uint8Array;
                toProtoMsg(message: _42.MsgPauseGroup): _42.MsgPauseGroupProtoMsg;
            };
            MsgPauseGroupResponse: {
                typeUrl: string;
                encode(_: _42.MsgPauseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgPauseGroupResponse;
                fromPartial(_: Partial<_42.MsgPauseGroupResponse>): _42.MsgPauseGroupResponse;
                fromAmino(_: _42.MsgPauseGroupResponseAmino): _42.MsgPauseGroupResponse;
                toAmino(_: _42.MsgPauseGroupResponse): _42.MsgPauseGroupResponseAmino;
                fromAminoMsg(object: _42.MsgPauseGroupResponseAminoMsg): _42.MsgPauseGroupResponse;
                fromProtoMsg(message: _42.MsgPauseGroupResponseProtoMsg): _42.MsgPauseGroupResponse;
                toProto(message: _42.MsgPauseGroupResponse): Uint8Array;
                toProtoMsg(message: _42.MsgPauseGroupResponse): _42.MsgPauseGroupResponseProtoMsg;
            };
            MsgStartGroup: {
                typeUrl: string;
                encode(message: _42.MsgStartGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgStartGroup;
                fromPartial(object: Partial<_42.MsgStartGroup>): _42.MsgStartGroup;
                fromAmino(object: _42.MsgStartGroupAmino): _42.MsgStartGroup;
                toAmino(message: _42.MsgStartGroup): _42.MsgStartGroupAmino;
                fromAminoMsg(object: _42.MsgStartGroupAminoMsg): _42.MsgStartGroup;
                fromProtoMsg(message: _42.MsgStartGroupProtoMsg): _42.MsgStartGroup;
                toProto(message: _42.MsgStartGroup): Uint8Array;
                toProtoMsg(message: _42.MsgStartGroup): _42.MsgStartGroupProtoMsg;
            };
            MsgStartGroupResponse: {
                typeUrl: string;
                encode(_: _42.MsgStartGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgStartGroupResponse;
                fromPartial(_: Partial<_42.MsgStartGroupResponse>): _42.MsgStartGroupResponse;
                fromAmino(_: _42.MsgStartGroupResponseAmino): _42.MsgStartGroupResponse;
                toAmino(_: _42.MsgStartGroupResponse): _42.MsgStartGroupResponseAmino;
                fromAminoMsg(object: _42.MsgStartGroupResponseAminoMsg): _42.MsgStartGroupResponse;
                fromProtoMsg(message: _42.MsgStartGroupResponseProtoMsg): _42.MsgStartGroupResponse;
                toProto(message: _42.MsgStartGroupResponse): Uint8Array;
                toProtoMsg(message: _42.MsgStartGroupResponse): _42.MsgStartGroupResponseProtoMsg;
            };
            GroupID: {
                typeUrl: string;
                encode(message: _41.GroupID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.GroupID;
                fromPartial(object: Partial<_41.GroupID>): _41.GroupID;
                fromAmino(object: _41.GroupIDAmino): _41.GroupID;
                toAmino(message: _41.GroupID): _41.GroupIDAmino;
                fromAminoMsg(object: _41.GroupIDAminoMsg): _41.GroupID;
                fromProtoMsg(message: _41.GroupIDProtoMsg): _41.GroupID;
                toProto(message: _41.GroupID): Uint8Array;
                toProtoMsg(message: _41.GroupID): _41.GroupIDProtoMsg;
            };
            group_StateFromJSON(object: any): _40.Group_State;
            group_StateToJSON(object: _40.Group_State): string;
            Group_State: typeof _40.Group_State;
            Group_StateSDKType: typeof _40.Group_State;
            Group_StateAmino: typeof _40.Group_State;
            Group: {
                typeUrl: string;
                encode(message: _40.Group, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Group;
                fromPartial(object: Partial<_40.Group>): _40.Group;
                fromAmino(object: _40.GroupAmino): _40.Group;
                toAmino(message: _40.Group): _40.GroupAmino;
                fromAminoMsg(object: _40.GroupAminoMsg): _40.Group;
                fromProtoMsg(message: _40.GroupProtoMsg): _40.Group;
                toProto(message: _40.Group): Uint8Array;
                toProtoMsg(message: _40.Group): _40.GroupProtoMsg;
            };
            GenesisDeployment: {
                typeUrl: string;
                encode(message: _39.GenesisDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.GenesisDeployment;
                fromPartial(object: Partial<_39.GenesisDeployment>): _39.GenesisDeployment;
                fromAmino(object: _39.GenesisDeploymentAmino): _39.GenesisDeployment;
                toAmino(message: _39.GenesisDeployment): _39.GenesisDeploymentAmino;
                fromAminoMsg(object: _39.GenesisDeploymentAminoMsg): _39.GenesisDeployment;
                fromProtoMsg(message: _39.GenesisDeploymentProtoMsg): _39.GenesisDeployment;
                toProto(message: _39.GenesisDeployment): Uint8Array;
                toProtoMsg(message: _39.GenesisDeployment): _39.GenesisDeploymentProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _39.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.GenesisState;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
                fromAmino(object: _39.GenesisStateAmino): _39.GenesisState;
                toAmino(message: _39.GenesisState): _39.GenesisStateAmino;
                fromAminoMsg(object: _39.GenesisStateAminoMsg): _39.GenesisState;
                fromProtoMsg(message: _39.GenesisStateProtoMsg): _39.GenesisState;
                toProto(message: _39.GenesisState): Uint8Array;
                toProtoMsg(message: _39.GenesisState): _39.GenesisStateProtoMsg;
            };
            MsgCreateDeployment: {
                typeUrl: string;
                encode(message: _38.MsgCreateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgCreateDeployment;
                fromPartial(object: Partial<_38.MsgCreateDeployment>): _38.MsgCreateDeployment;
                fromAmino(object: _38.MsgCreateDeploymentAmino): _38.MsgCreateDeployment;
                toAmino(message: _38.MsgCreateDeployment): _38.MsgCreateDeploymentAmino;
                fromAminoMsg(object: _38.MsgCreateDeploymentAminoMsg): _38.MsgCreateDeployment;
                fromProtoMsg(message: _38.MsgCreateDeploymentProtoMsg): _38.MsgCreateDeployment;
                toProto(message: _38.MsgCreateDeployment): Uint8Array;
                toProtoMsg(message: _38.MsgCreateDeployment): _38.MsgCreateDeploymentProtoMsg;
            };
            MsgCreateDeploymentResponse: {
                typeUrl: string;
                encode(_: _38.MsgCreateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgCreateDeploymentResponse;
                fromPartial(_: Partial<_38.MsgCreateDeploymentResponse>): _38.MsgCreateDeploymentResponse;
                fromAmino(_: _38.MsgCreateDeploymentResponseAmino): _38.MsgCreateDeploymentResponse;
                toAmino(_: _38.MsgCreateDeploymentResponse): _38.MsgCreateDeploymentResponseAmino;
                fromAminoMsg(object: _38.MsgCreateDeploymentResponseAminoMsg): _38.MsgCreateDeploymentResponse;
                fromProtoMsg(message: _38.MsgCreateDeploymentResponseProtoMsg): _38.MsgCreateDeploymentResponse;
                toProto(message: _38.MsgCreateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _38.MsgCreateDeploymentResponse): _38.MsgCreateDeploymentResponseProtoMsg;
            };
            MsgDepositDeployment: {
                typeUrl: string;
                encode(message: _38.MsgDepositDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgDepositDeployment;
                fromPartial(object: Partial<_38.MsgDepositDeployment>): _38.MsgDepositDeployment;
                fromAmino(object: _38.MsgDepositDeploymentAmino): _38.MsgDepositDeployment;
                toAmino(message: _38.MsgDepositDeployment): _38.MsgDepositDeploymentAmino;
                fromAminoMsg(object: _38.MsgDepositDeploymentAminoMsg): _38.MsgDepositDeployment;
                fromProtoMsg(message: _38.MsgDepositDeploymentProtoMsg): _38.MsgDepositDeployment;
                toProto(message: _38.MsgDepositDeployment): Uint8Array;
                toProtoMsg(message: _38.MsgDepositDeployment): _38.MsgDepositDeploymentProtoMsg;
            };
            MsgDepositDeploymentResponse: {
                typeUrl: string;
                encode(_: _38.MsgDepositDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgDepositDeploymentResponse;
                fromPartial(_: Partial<_38.MsgDepositDeploymentResponse>): _38.MsgDepositDeploymentResponse;
                fromAmino(_: _38.MsgDepositDeploymentResponseAmino): _38.MsgDepositDeploymentResponse;
                toAmino(_: _38.MsgDepositDeploymentResponse): _38.MsgDepositDeploymentResponseAmino;
                fromAminoMsg(object: _38.MsgDepositDeploymentResponseAminoMsg): _38.MsgDepositDeploymentResponse;
                fromProtoMsg(message: _38.MsgDepositDeploymentResponseProtoMsg): _38.MsgDepositDeploymentResponse;
                toProto(message: _38.MsgDepositDeploymentResponse): Uint8Array;
                toProtoMsg(message: _38.MsgDepositDeploymentResponse): _38.MsgDepositDeploymentResponseProtoMsg;
            };
            MsgUpdateDeployment: {
                typeUrl: string;
                encode(message: _38.MsgUpdateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgUpdateDeployment;
                fromPartial(object: Partial<_38.MsgUpdateDeployment>): _38.MsgUpdateDeployment;
                fromAmino(object: _38.MsgUpdateDeploymentAmino): _38.MsgUpdateDeployment;
                toAmino(message: _38.MsgUpdateDeployment): _38.MsgUpdateDeploymentAmino;
                fromAminoMsg(object: _38.MsgUpdateDeploymentAminoMsg): _38.MsgUpdateDeployment;
                fromProtoMsg(message: _38.MsgUpdateDeploymentProtoMsg): _38.MsgUpdateDeployment;
                toProto(message: _38.MsgUpdateDeployment): Uint8Array;
                toProtoMsg(message: _38.MsgUpdateDeployment): _38.MsgUpdateDeploymentProtoMsg;
            };
            MsgUpdateDeploymentResponse: {
                typeUrl: string;
                encode(_: _38.MsgUpdateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgUpdateDeploymentResponse;
                fromPartial(_: Partial<_38.MsgUpdateDeploymentResponse>): _38.MsgUpdateDeploymentResponse;
                fromAmino(_: _38.MsgUpdateDeploymentResponseAmino): _38.MsgUpdateDeploymentResponse;
                toAmino(_: _38.MsgUpdateDeploymentResponse): _38.MsgUpdateDeploymentResponseAmino;
                fromAminoMsg(object: _38.MsgUpdateDeploymentResponseAminoMsg): _38.MsgUpdateDeploymentResponse;
                fromProtoMsg(message: _38.MsgUpdateDeploymentResponseProtoMsg): _38.MsgUpdateDeploymentResponse;
                toProto(message: _38.MsgUpdateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _38.MsgUpdateDeploymentResponse): _38.MsgUpdateDeploymentResponseProtoMsg;
            };
            MsgCloseDeployment: {
                typeUrl: string;
                encode(message: _38.MsgCloseDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.MsgCloseDeployment;
                fromPartial(object: Partial<_38.MsgCloseDeployment>): _38.MsgCloseDeployment;
                fromAmino(object: _38.MsgCloseDeploymentAmino): _38.MsgCloseDeployment;
                toAmino(message: _38.MsgCloseDeployment): _38.MsgCloseDeploymentAmino;
                fromAminoMsg(object: _38.MsgCloseDeploymentAminoMsg): _38.MsgCloseDeployment;
                fromProtoMsg(message: _38.MsgCloseDeploymentProtoMsg): _38.MsgCloseDeployment;
                toProto(message: _38.MsgCloseDeployment): Uint8Array;
                toProtoMsg(message: _38.MsgCloseDeployment): _38.MsgCloseDeploymentProtoMsg;
            };
            MsgCloseDeploymentResponse: {
                typeUrl: string;
                encode(_: _38.MsgCloseDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _38.MsgCloseDeploymentResponse;
                fromPartial(_: Partial<_38.MsgCloseDeploymentResponse>): _38.MsgCloseDeploymentResponse;
                fromAmino(_: _38.MsgCloseDeploymentResponseAmino): _38.MsgCloseDeploymentResponse;
                toAmino(_: _38.MsgCloseDeploymentResponse): _38.MsgCloseDeploymentResponseAmino;
                fromAminoMsg(object: _38.MsgCloseDeploymentResponseAminoMsg): _38.MsgCloseDeploymentResponse;
                fromProtoMsg(message: _38.MsgCloseDeploymentResponseProtoMsg): _38.MsgCloseDeploymentResponse;
                toProto(message: _38.MsgCloseDeploymentResponse): Uint8Array;
                toProtoMsg(message: _38.MsgCloseDeploymentResponse): _38.MsgCloseDeploymentResponseProtoMsg;
            };
            deployment_StateFromJSON(object: any): _37.Deployment_State;
            deployment_StateToJSON(object: _37.Deployment_State): string;
            Deployment_State: typeof _37.Deployment_State;
            Deployment_StateSDKType: typeof _37.Deployment_State;
            Deployment_StateAmino: typeof _37.Deployment_State;
            DeploymentID: {
                typeUrl: string;
                encode(message: _37.DeploymentID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.DeploymentID;
                fromPartial(object: Partial<_37.DeploymentID>): _37.DeploymentID;
                fromAmino(object: _37.DeploymentIDAmino): _37.DeploymentID;
                toAmino(message: _37.DeploymentID): _37.DeploymentIDAmino;
                fromAminoMsg(object: _37.DeploymentIDAminoMsg): _37.DeploymentID;
                fromProtoMsg(message: _37.DeploymentIDProtoMsg): _37.DeploymentID;
                toProto(message: _37.DeploymentID): Uint8Array;
                toProtoMsg(message: _37.DeploymentID): _37.DeploymentIDProtoMsg;
            };
            Deployment: {
                typeUrl: string;
                encode(message: _37.Deployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.Deployment;
                fromPartial(object: Partial<_37.Deployment>): _37.Deployment;
                fromAmino(object: _37.DeploymentAmino): _37.Deployment;
                toAmino(message: _37.Deployment): _37.DeploymentAmino;
                fromAminoMsg(object: _37.DeploymentAminoMsg): _37.Deployment;
                fromProtoMsg(message: _37.DeploymentProtoMsg): _37.Deployment;
                toProto(message: _37.Deployment): Uint8Array;
                toProtoMsg(message: _37.Deployment): _37.DeploymentProtoMsg;
            };
            DeploymentFilters: {
                typeUrl: string;
                encode(message: _37.DeploymentFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.DeploymentFilters;
                fromPartial(object: Partial<_37.DeploymentFilters>): _37.DeploymentFilters;
                fromAmino(object: _37.DeploymentFiltersAmino): _37.DeploymentFilters;
                toAmino(message: _37.DeploymentFilters): _37.DeploymentFiltersAmino;
                fromAminoMsg(object: _37.DeploymentFiltersAminoMsg): _37.DeploymentFilters;
                fromProtoMsg(message: _37.DeploymentFiltersProtoMsg): _37.DeploymentFilters;
                toProto(message: _37.DeploymentFilters): Uint8Array;
                toProtoMsg(message: _37.DeploymentFilters): _37.DeploymentFiltersProtoMsg;
            };
            DepositDeploymentAuthorization: {
                typeUrl: string;
                encode(message: _36.DepositDeploymentAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.DepositDeploymentAuthorization;
                fromPartial(object: Partial<_36.DepositDeploymentAuthorization>): _36.DepositDeploymentAuthorization;
                fromAmino(object: _36.DepositDeploymentAuthorizationAmino): _36.DepositDeploymentAuthorization;
                toAmino(message: _36.DepositDeploymentAuthorization): _36.DepositDeploymentAuthorizationAmino;
                fromAminoMsg(object: _36.DepositDeploymentAuthorizationAminoMsg): _36.DepositDeploymentAuthorization;
                fromProtoMsg(message: _36.DepositDeploymentAuthorizationProtoMsg): _36.DepositDeploymentAuthorization;
                toProto(message: _36.DepositDeploymentAuthorization): Uint8Array;
                toProtoMsg(message: _36.DepositDeploymentAuthorization): _36.DepositDeploymentAuthorizationProtoMsg;
            };
        };
        const v1beta3: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                deployments(request: _57.QueryDeploymentsRequest): Promise<_57.QueryDeploymentsResponse>;
                deployment(request: _57.QueryDeploymentRequest): Promise<_57.QueryDeploymentResponse>;
                group(request: _57.QueryGroupRequest): Promise<_57.QueryGroupResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDeployment(value: _50.MsgCreateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositDeployment(value: _50.MsgDepositDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDeployment(value: _50.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeDeployment(value: _50.MsgCloseDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeGroup(value: _54.MsgCloseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pauseGroup(value: _54.MsgPauseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startGroup(value: _54.MsgStartGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDeployment(value: _50.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _50.MsgCreateDeployment;
                    };
                    depositDeployment(value: _50.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _50.MsgDepositDeployment;
                    };
                    updateDeployment(value: _50.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _50.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _50.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _50.MsgCloseDeployment;
                    };
                    closeGroup(value: _54.MsgCloseGroup): {
                        typeUrl: string;
                        value: _54.MsgCloseGroup;
                    };
                    pauseGroup(value: _54.MsgPauseGroup): {
                        typeUrl: string;
                        value: _54.MsgPauseGroup;
                    };
                    startGroup(value: _54.MsgStartGroup): {
                        typeUrl: string;
                        value: _54.MsgStartGroup;
                    };
                };
                fromJSON: {
                    createDeployment(value: any): {
                        typeUrl: string;
                        value: _50.MsgCreateDeployment;
                    };
                    depositDeployment(value: any): {
                        typeUrl: string;
                        value: _50.MsgDepositDeployment;
                    };
                    updateDeployment(value: any): {
                        typeUrl: string;
                        value: _50.MsgUpdateDeployment;
                    };
                    closeDeployment(value: any): {
                        typeUrl: string;
                        value: _50.MsgCloseDeployment;
                    };
                    closeGroup(value: any): {
                        typeUrl: string;
                        value: _54.MsgCloseGroup;
                    };
                    pauseGroup(value: any): {
                        typeUrl: string;
                        value: _54.MsgPauseGroup;
                    };
                    startGroup(value: any): {
                        typeUrl: string;
                        value: _54.MsgStartGroup;
                    };
                };
                fromPartial: {
                    createDeployment(value: _50.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _50.MsgCreateDeployment;
                    };
                    depositDeployment(value: _50.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _50.MsgDepositDeployment;
                    };
                    updateDeployment(value: _50.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _50.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _50.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _50.MsgCloseDeployment;
                    };
                    closeGroup(value: _54.MsgCloseGroup): {
                        typeUrl: string;
                        value: _54.MsgCloseGroup;
                    };
                    pauseGroup(value: _54.MsgPauseGroup): {
                        typeUrl: string;
                        value: _54.MsgPauseGroup;
                    };
                    startGroup(value: _54.MsgStartGroup): {
                        typeUrl: string;
                        value: _54.MsgStartGroup;
                    };
                };
            };
            AminoConverter: {
                "/akash.deployment.v1beta3.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: (message: _50.MsgCreateDeployment) => _50.MsgCreateDeploymentAmino;
                    fromAmino: (object: _50.MsgCreateDeploymentAmino) => _50.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta3.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: (message: _50.MsgDepositDeployment) => _50.MsgDepositDeploymentAmino;
                    fromAmino: (object: _50.MsgDepositDeploymentAmino) => _50.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta3.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: (message: _50.MsgUpdateDeployment) => _50.MsgUpdateDeploymentAmino;
                    fromAmino: (object: _50.MsgUpdateDeploymentAmino) => _50.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta3.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: (message: _50.MsgCloseDeployment) => _50.MsgCloseDeploymentAmino;
                    fromAmino: (object: _50.MsgCloseDeploymentAmino) => _50.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta3.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: (message: _54.MsgCloseGroup) => _54.MsgCloseGroupAmino;
                    fromAmino: (object: _54.MsgCloseGroupAmino) => _54.MsgCloseGroup;
                };
                "/akash.deployment.v1beta3.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: (message: _54.MsgPauseGroup) => _54.MsgPauseGroupAmino;
                    fromAmino: (object: _54.MsgPauseGroupAmino) => _54.MsgPauseGroup;
                };
                "/akash.deployment.v1beta3.MsgStartGroup": {
                    aminoType: string;
                    toAmino: (message: _54.MsgStartGroup) => _54.MsgStartGroupAmino;
                    fromAmino: (object: _54.MsgStartGroupAmino) => _54.MsgStartGroup;
                };
            };
            ResourceUnit: {
                typeUrl: string;
                encode(message: _58.ResourceUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _58.ResourceUnit;
                fromPartial(object: Partial<_58.ResourceUnit>): _58.ResourceUnit;
                fromAmino(object: _58.ResourceUnitAmino): _58.ResourceUnit;
                toAmino(message: _58.ResourceUnit): _58.ResourceUnitAmino;
                fromAminoMsg(object: _58.ResourceUnitAminoMsg): _58.ResourceUnit;
                fromProtoMsg(message: _58.ResourceUnitProtoMsg): _58.ResourceUnit;
                toProto(message: _58.ResourceUnit): Uint8Array;
                toProtoMsg(message: _58.ResourceUnit): _58.ResourceUnitProtoMsg;
            };
            QueryDeploymentsRequest: {
                typeUrl: string;
                encode(message: _57.QueryDeploymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDeploymentsRequest;
                fromPartial(object: Partial<_57.QueryDeploymentsRequest>): _57.QueryDeploymentsRequest;
                fromAmino(object: _57.QueryDeploymentsRequestAmino): _57.QueryDeploymentsRequest;
                toAmino(message: _57.QueryDeploymentsRequest): _57.QueryDeploymentsRequestAmino;
                fromAminoMsg(object: _57.QueryDeploymentsRequestAminoMsg): _57.QueryDeploymentsRequest;
                fromProtoMsg(message: _57.QueryDeploymentsRequestProtoMsg): _57.QueryDeploymentsRequest;
                toProto(message: _57.QueryDeploymentsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDeploymentsRequest): _57.QueryDeploymentsRequestProtoMsg;
            };
            QueryDeploymentsResponse: {
                typeUrl: string;
                encode(message: _57.QueryDeploymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDeploymentsResponse;
                fromPartial(object: Partial<_57.QueryDeploymentsResponse>): _57.QueryDeploymentsResponse;
                fromAmino(object: _57.QueryDeploymentsResponseAmino): _57.QueryDeploymentsResponse;
                toAmino(message: _57.QueryDeploymentsResponse): _57.QueryDeploymentsResponseAmino;
                fromAminoMsg(object: _57.QueryDeploymentsResponseAminoMsg): _57.QueryDeploymentsResponse;
                fromProtoMsg(message: _57.QueryDeploymentsResponseProtoMsg): _57.QueryDeploymentsResponse;
                toProto(message: _57.QueryDeploymentsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDeploymentsResponse): _57.QueryDeploymentsResponseProtoMsg;
            };
            QueryDeploymentRequest: {
                typeUrl: string;
                encode(message: _57.QueryDeploymentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDeploymentRequest;
                fromPartial(object: Partial<_57.QueryDeploymentRequest>): _57.QueryDeploymentRequest;
                fromAmino(object: _57.QueryDeploymentRequestAmino): _57.QueryDeploymentRequest;
                toAmino(message: _57.QueryDeploymentRequest): _57.QueryDeploymentRequestAmino;
                fromAminoMsg(object: _57.QueryDeploymentRequestAminoMsg): _57.QueryDeploymentRequest;
                fromProtoMsg(message: _57.QueryDeploymentRequestProtoMsg): _57.QueryDeploymentRequest;
                toProto(message: _57.QueryDeploymentRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDeploymentRequest): _57.QueryDeploymentRequestProtoMsg;
            };
            QueryDeploymentResponse: {
                typeUrl: string;
                encode(message: _57.QueryDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryDeploymentResponse;
                fromPartial(object: Partial<_57.QueryDeploymentResponse>): _57.QueryDeploymentResponse;
                fromAmino(object: _57.QueryDeploymentResponseAmino): _57.QueryDeploymentResponse;
                toAmino(message: _57.QueryDeploymentResponse): _57.QueryDeploymentResponseAmino;
                fromAminoMsg(object: _57.QueryDeploymentResponseAminoMsg): _57.QueryDeploymentResponse;
                fromProtoMsg(message: _57.QueryDeploymentResponseProtoMsg): _57.QueryDeploymentResponse;
                toProto(message: _57.QueryDeploymentResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDeploymentResponse): _57.QueryDeploymentResponseProtoMsg;
            };
            QueryGroupRequest: {
                typeUrl: string;
                encode(message: _57.QueryGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryGroupRequest;
                fromPartial(object: Partial<_57.QueryGroupRequest>): _57.QueryGroupRequest;
                fromAmino(object: _57.QueryGroupRequestAmino): _57.QueryGroupRequest;
                toAmino(message: _57.QueryGroupRequest): _57.QueryGroupRequestAmino;
                fromAminoMsg(object: _57.QueryGroupRequestAminoMsg): _57.QueryGroupRequest;
                fromProtoMsg(message: _57.QueryGroupRequestProtoMsg): _57.QueryGroupRequest;
                toProto(message: _57.QueryGroupRequest): Uint8Array;
                toProtoMsg(message: _57.QueryGroupRequest): _57.QueryGroupRequestProtoMsg;
            };
            QueryGroupResponse: {
                typeUrl: string;
                encode(message: _57.QueryGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _57.QueryGroupResponse;
                fromPartial(object: Partial<_57.QueryGroupResponse>): _57.QueryGroupResponse;
                fromAmino(object: _57.QueryGroupResponseAmino): _57.QueryGroupResponse;
                toAmino(message: _57.QueryGroupResponse): _57.QueryGroupResponseAmino;
                fromAminoMsg(object: _57.QueryGroupResponseAminoMsg): _57.QueryGroupResponse;
                fromProtoMsg(message: _57.QueryGroupResponseProtoMsg): _57.QueryGroupResponse;
                toProto(message: _57.QueryGroupResponse): Uint8Array;
                toProtoMsg(message: _57.QueryGroupResponse): _57.QueryGroupResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _56.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _56.Params;
                fromPartial(object: Partial<_56.Params>): _56.Params;
                fromAmino(object: _56.ParamsAmino): _56.Params;
                toAmino(message: _56.Params): _56.ParamsAmino;
                fromAminoMsg(object: _56.ParamsAminoMsg): _56.Params;
                fromProtoMsg(message: _56.ParamsProtoMsg): _56.Params;
                toProto(message: _56.Params): Uint8Array;
                toProtoMsg(message: _56.Params): _56.ParamsProtoMsg;
            };
            GroupSpec: {
                typeUrl: string;
                encode(message: _55.GroupSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _55.GroupSpec;
                fromPartial(object: Partial<_55.GroupSpec>): _55.GroupSpec;
                fromAmino(object: _55.GroupSpecAmino): _55.GroupSpec;
                toAmino(message: _55.GroupSpec): _55.GroupSpecAmino;
                fromAminoMsg(object: _55.GroupSpecAminoMsg): _55.GroupSpec;
                fromProtoMsg(message: _55.GroupSpecProtoMsg): _55.GroupSpec;
                toProto(message: _55.GroupSpec): Uint8Array;
                toProtoMsg(message: _55.GroupSpec): _55.GroupSpecProtoMsg;
            };
            MsgCloseGroup: {
                typeUrl: string;
                encode(message: _54.MsgCloseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgCloseGroup;
                fromPartial(object: Partial<_54.MsgCloseGroup>): _54.MsgCloseGroup;
                fromAmino(object: _54.MsgCloseGroupAmino): _54.MsgCloseGroup;
                toAmino(message: _54.MsgCloseGroup): _54.MsgCloseGroupAmino;
                fromAminoMsg(object: _54.MsgCloseGroupAminoMsg): _54.MsgCloseGroup;
                fromProtoMsg(message: _54.MsgCloseGroupProtoMsg): _54.MsgCloseGroup;
                toProto(message: _54.MsgCloseGroup): Uint8Array;
                toProtoMsg(message: _54.MsgCloseGroup): _54.MsgCloseGroupProtoMsg;
            };
            MsgCloseGroupResponse: {
                typeUrl: string;
                encode(_: _54.MsgCloseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgCloseGroupResponse;
                fromPartial(_: Partial<_54.MsgCloseGroupResponse>): _54.MsgCloseGroupResponse;
                fromAmino(_: _54.MsgCloseGroupResponseAmino): _54.MsgCloseGroupResponse;
                toAmino(_: _54.MsgCloseGroupResponse): _54.MsgCloseGroupResponseAmino;
                fromAminoMsg(object: _54.MsgCloseGroupResponseAminoMsg): _54.MsgCloseGroupResponse;
                fromProtoMsg(message: _54.MsgCloseGroupResponseProtoMsg): _54.MsgCloseGroupResponse;
                toProto(message: _54.MsgCloseGroupResponse): Uint8Array;
                toProtoMsg(message: _54.MsgCloseGroupResponse): _54.MsgCloseGroupResponseProtoMsg;
            };
            MsgPauseGroup: {
                typeUrl: string;
                encode(message: _54.MsgPauseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgPauseGroup;
                fromPartial(object: Partial<_54.MsgPauseGroup>): _54.MsgPauseGroup;
                fromAmino(object: _54.MsgPauseGroupAmino): _54.MsgPauseGroup;
                toAmino(message: _54.MsgPauseGroup): _54.MsgPauseGroupAmino;
                fromAminoMsg(object: _54.MsgPauseGroupAminoMsg): _54.MsgPauseGroup;
                fromProtoMsg(message: _54.MsgPauseGroupProtoMsg): _54.MsgPauseGroup;
                toProto(message: _54.MsgPauseGroup): Uint8Array;
                toProtoMsg(message: _54.MsgPauseGroup): _54.MsgPauseGroupProtoMsg;
            };
            MsgPauseGroupResponse: {
                typeUrl: string;
                encode(_: _54.MsgPauseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgPauseGroupResponse;
                fromPartial(_: Partial<_54.MsgPauseGroupResponse>): _54.MsgPauseGroupResponse;
                fromAmino(_: _54.MsgPauseGroupResponseAmino): _54.MsgPauseGroupResponse;
                toAmino(_: _54.MsgPauseGroupResponse): _54.MsgPauseGroupResponseAmino;
                fromAminoMsg(object: _54.MsgPauseGroupResponseAminoMsg): _54.MsgPauseGroupResponse;
                fromProtoMsg(message: _54.MsgPauseGroupResponseProtoMsg): _54.MsgPauseGroupResponse;
                toProto(message: _54.MsgPauseGroupResponse): Uint8Array;
                toProtoMsg(message: _54.MsgPauseGroupResponse): _54.MsgPauseGroupResponseProtoMsg;
            };
            MsgStartGroup: {
                typeUrl: string;
                encode(message: _54.MsgStartGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _54.MsgStartGroup;
                fromPartial(object: Partial<_54.MsgStartGroup>): _54.MsgStartGroup;
                fromAmino(object: _54.MsgStartGroupAmino): _54.MsgStartGroup;
                toAmino(message: _54.MsgStartGroup): _54.MsgStartGroupAmino;
                fromAminoMsg(object: _54.MsgStartGroupAminoMsg): _54.MsgStartGroup;
                fromProtoMsg(message: _54.MsgStartGroupProtoMsg): _54.MsgStartGroup;
                toProto(message: _54.MsgStartGroup): Uint8Array;
                toProtoMsg(message: _54.MsgStartGroup): _54.MsgStartGroupProtoMsg;
            };
            MsgStartGroupResponse: {
                typeUrl: string;
                encode(_: _54.MsgStartGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _54.MsgStartGroupResponse;
                fromPartial(_: Partial<_54.MsgStartGroupResponse>): _54.MsgStartGroupResponse;
                fromAmino(_: _54.MsgStartGroupResponseAmino): _54.MsgStartGroupResponse;
                toAmino(_: _54.MsgStartGroupResponse): _54.MsgStartGroupResponseAmino;
                fromAminoMsg(object: _54.MsgStartGroupResponseAminoMsg): _54.MsgStartGroupResponse;
                fromProtoMsg(message: _54.MsgStartGroupResponseProtoMsg): _54.MsgStartGroupResponse;
                toProto(message: _54.MsgStartGroupResponse): Uint8Array;
                toProtoMsg(message: _54.MsgStartGroupResponse): _54.MsgStartGroupResponseProtoMsg;
            };
            GroupID: {
                typeUrl: string;
                encode(message: _53.GroupID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _53.GroupID;
                fromPartial(object: Partial<_53.GroupID>): _53.GroupID;
                fromAmino(object: _53.GroupIDAmino): _53.GroupID;
                toAmino(message: _53.GroupID): _53.GroupIDAmino;
                fromAminoMsg(object: _53.GroupIDAminoMsg): _53.GroupID;
                fromProtoMsg(message: _53.GroupIDProtoMsg): _53.GroupID;
                toProto(message: _53.GroupID): Uint8Array;
                toProtoMsg(message: _53.GroupID): _53.GroupIDProtoMsg;
            };
            group_StateFromJSON(object: any): _52.Group_State;
            group_StateToJSON(object: _52.Group_State): string;
            Group_State: typeof _52.Group_State;
            Group_StateSDKType: typeof _52.Group_State;
            Group_StateAmino: typeof _52.Group_State;
            Group: {
                typeUrl: string;
                encode(message: _52.Group, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.Group;
                fromPartial(object: Partial<_52.Group>): _52.Group;
                fromAmino(object: _52.GroupAmino): _52.Group;
                toAmino(message: _52.Group): _52.GroupAmino;
                fromAminoMsg(object: _52.GroupAminoMsg): _52.Group;
                fromProtoMsg(message: _52.GroupProtoMsg): _52.Group;
                toProto(message: _52.Group): Uint8Array;
                toProtoMsg(message: _52.Group): _52.GroupProtoMsg;
            };
            GenesisDeployment: {
                typeUrl: string;
                encode(message: _51.GenesisDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.GenesisDeployment;
                fromPartial(object: Partial<_51.GenesisDeployment>): _51.GenesisDeployment;
                fromAmino(object: _51.GenesisDeploymentAmino): _51.GenesisDeployment;
                toAmino(message: _51.GenesisDeployment): _51.GenesisDeploymentAmino;
                fromAminoMsg(object: _51.GenesisDeploymentAminoMsg): _51.GenesisDeployment;
                fromProtoMsg(message: _51.GenesisDeploymentProtoMsg): _51.GenesisDeployment;
                toProto(message: _51.GenesisDeployment): Uint8Array;
                toProtoMsg(message: _51.GenesisDeployment): _51.GenesisDeploymentProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _51.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
            MsgCreateDeployment: {
                typeUrl: string;
                encode(message: _50.MsgCreateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgCreateDeployment;
                fromPartial(object: Partial<_50.MsgCreateDeployment>): _50.MsgCreateDeployment;
                fromAmino(object: _50.MsgCreateDeploymentAmino): _50.MsgCreateDeployment;
                toAmino(message: _50.MsgCreateDeployment): _50.MsgCreateDeploymentAmino;
                fromAminoMsg(object: _50.MsgCreateDeploymentAminoMsg): _50.MsgCreateDeployment;
                fromProtoMsg(message: _50.MsgCreateDeploymentProtoMsg): _50.MsgCreateDeployment;
                toProto(message: _50.MsgCreateDeployment): Uint8Array;
                toProtoMsg(message: _50.MsgCreateDeployment): _50.MsgCreateDeploymentProtoMsg;
            };
            MsgCreateDeploymentResponse: {
                typeUrl: string;
                encode(_: _50.MsgCreateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgCreateDeploymentResponse;
                fromPartial(_: Partial<_50.MsgCreateDeploymentResponse>): _50.MsgCreateDeploymentResponse;
                fromAmino(_: _50.MsgCreateDeploymentResponseAmino): _50.MsgCreateDeploymentResponse;
                toAmino(_: _50.MsgCreateDeploymentResponse): _50.MsgCreateDeploymentResponseAmino;
                fromAminoMsg(object: _50.MsgCreateDeploymentResponseAminoMsg): _50.MsgCreateDeploymentResponse;
                fromProtoMsg(message: _50.MsgCreateDeploymentResponseProtoMsg): _50.MsgCreateDeploymentResponse;
                toProto(message: _50.MsgCreateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _50.MsgCreateDeploymentResponse): _50.MsgCreateDeploymentResponseProtoMsg;
            };
            MsgDepositDeployment: {
                typeUrl: string;
                encode(message: _50.MsgDepositDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgDepositDeployment;
                fromPartial(object: Partial<_50.MsgDepositDeployment>): _50.MsgDepositDeployment;
                fromAmino(object: _50.MsgDepositDeploymentAmino): _50.MsgDepositDeployment;
                toAmino(message: _50.MsgDepositDeployment): _50.MsgDepositDeploymentAmino;
                fromAminoMsg(object: _50.MsgDepositDeploymentAminoMsg): _50.MsgDepositDeployment;
                fromProtoMsg(message: _50.MsgDepositDeploymentProtoMsg): _50.MsgDepositDeployment;
                toProto(message: _50.MsgDepositDeployment): Uint8Array;
                toProtoMsg(message: _50.MsgDepositDeployment): _50.MsgDepositDeploymentProtoMsg;
            };
            MsgDepositDeploymentResponse: {
                typeUrl: string;
                encode(_: _50.MsgDepositDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgDepositDeploymentResponse;
                fromPartial(_: Partial<_50.MsgDepositDeploymentResponse>): _50.MsgDepositDeploymentResponse;
                fromAmino(_: _50.MsgDepositDeploymentResponseAmino): _50.MsgDepositDeploymentResponse;
                toAmino(_: _50.MsgDepositDeploymentResponse): _50.MsgDepositDeploymentResponseAmino;
                fromAminoMsg(object: _50.MsgDepositDeploymentResponseAminoMsg): _50.MsgDepositDeploymentResponse;
                fromProtoMsg(message: _50.MsgDepositDeploymentResponseProtoMsg): _50.MsgDepositDeploymentResponse;
                toProto(message: _50.MsgDepositDeploymentResponse): Uint8Array;
                toProtoMsg(message: _50.MsgDepositDeploymentResponse): _50.MsgDepositDeploymentResponseProtoMsg;
            };
            MsgUpdateDeployment: {
                typeUrl: string;
                encode(message: _50.MsgUpdateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgUpdateDeployment;
                fromPartial(object: Partial<_50.MsgUpdateDeployment>): _50.MsgUpdateDeployment;
                fromAmino(object: _50.MsgUpdateDeploymentAmino): _50.MsgUpdateDeployment;
                toAmino(message: _50.MsgUpdateDeployment): _50.MsgUpdateDeploymentAmino;
                fromAminoMsg(object: _50.MsgUpdateDeploymentAminoMsg): _50.MsgUpdateDeployment;
                fromProtoMsg(message: _50.MsgUpdateDeploymentProtoMsg): _50.MsgUpdateDeployment;
                toProto(message: _50.MsgUpdateDeployment): Uint8Array;
                toProtoMsg(message: _50.MsgUpdateDeployment): _50.MsgUpdateDeploymentProtoMsg;
            };
            MsgUpdateDeploymentResponse: {
                typeUrl: string;
                encode(_: _50.MsgUpdateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgUpdateDeploymentResponse;
                fromPartial(_: Partial<_50.MsgUpdateDeploymentResponse>): _50.MsgUpdateDeploymentResponse;
                fromAmino(_: _50.MsgUpdateDeploymentResponseAmino): _50.MsgUpdateDeploymentResponse;
                toAmino(_: _50.MsgUpdateDeploymentResponse): _50.MsgUpdateDeploymentResponseAmino;
                fromAminoMsg(object: _50.MsgUpdateDeploymentResponseAminoMsg): _50.MsgUpdateDeploymentResponse;
                fromProtoMsg(message: _50.MsgUpdateDeploymentResponseProtoMsg): _50.MsgUpdateDeploymentResponse;
                toProto(message: _50.MsgUpdateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _50.MsgUpdateDeploymentResponse): _50.MsgUpdateDeploymentResponseProtoMsg;
            };
            MsgCloseDeployment: {
                typeUrl: string;
                encode(message: _50.MsgCloseDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.MsgCloseDeployment;
                fromPartial(object: Partial<_50.MsgCloseDeployment>): _50.MsgCloseDeployment;
                fromAmino(object: _50.MsgCloseDeploymentAmino): _50.MsgCloseDeployment;
                toAmino(message: _50.MsgCloseDeployment): _50.MsgCloseDeploymentAmino;
                fromAminoMsg(object: _50.MsgCloseDeploymentAminoMsg): _50.MsgCloseDeployment;
                fromProtoMsg(message: _50.MsgCloseDeploymentProtoMsg): _50.MsgCloseDeployment;
                toProto(message: _50.MsgCloseDeployment): Uint8Array;
                toProtoMsg(message: _50.MsgCloseDeployment): _50.MsgCloseDeploymentProtoMsg;
            };
            MsgCloseDeploymentResponse: {
                typeUrl: string;
                encode(_: _50.MsgCloseDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _50.MsgCloseDeploymentResponse;
                fromPartial(_: Partial<_50.MsgCloseDeploymentResponse>): _50.MsgCloseDeploymentResponse;
                fromAmino(_: _50.MsgCloseDeploymentResponseAmino): _50.MsgCloseDeploymentResponse;
                toAmino(_: _50.MsgCloseDeploymentResponse): _50.MsgCloseDeploymentResponseAmino;
                fromAminoMsg(object: _50.MsgCloseDeploymentResponseAminoMsg): _50.MsgCloseDeploymentResponse;
                fromProtoMsg(message: _50.MsgCloseDeploymentResponseProtoMsg): _50.MsgCloseDeploymentResponse;
                toProto(message: _50.MsgCloseDeploymentResponse): Uint8Array;
                toProtoMsg(message: _50.MsgCloseDeploymentResponse): _50.MsgCloseDeploymentResponseProtoMsg;
            };
            deployment_StateFromJSON(object: any): _49.Deployment_State;
            deployment_StateToJSON(object: _49.Deployment_State): string;
            Deployment_State: typeof _49.Deployment_State;
            Deployment_StateSDKType: typeof _49.Deployment_State;
            Deployment_StateAmino: typeof _49.Deployment_State;
            DeploymentID: {
                typeUrl: string;
                encode(message: _49.DeploymentID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.DeploymentID;
                fromPartial(object: Partial<_49.DeploymentID>): _49.DeploymentID;
                fromAmino(object: _49.DeploymentIDAmino): _49.DeploymentID;
                toAmino(message: _49.DeploymentID): _49.DeploymentIDAmino;
                fromAminoMsg(object: _49.DeploymentIDAminoMsg): _49.DeploymentID;
                fromProtoMsg(message: _49.DeploymentIDProtoMsg): _49.DeploymentID;
                toProto(message: _49.DeploymentID): Uint8Array;
                toProtoMsg(message: _49.DeploymentID): _49.DeploymentIDProtoMsg;
            };
            Deployment: {
                typeUrl: string;
                encode(message: _49.Deployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Deployment;
                fromPartial(object: Partial<_49.Deployment>): _49.Deployment;
                fromAmino(object: _49.DeploymentAmino): _49.Deployment;
                toAmino(message: _49.Deployment): _49.DeploymentAmino;
                fromAminoMsg(object: _49.DeploymentAminoMsg): _49.Deployment;
                fromProtoMsg(message: _49.DeploymentProtoMsg): _49.Deployment;
                toProto(message: _49.Deployment): Uint8Array;
                toProtoMsg(message: _49.Deployment): _49.DeploymentProtoMsg;
            };
            DeploymentFilters: {
                typeUrl: string;
                encode(message: _49.DeploymentFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.DeploymentFilters;
                fromPartial(object: Partial<_49.DeploymentFilters>): _49.DeploymentFilters;
                fromAmino(object: _49.DeploymentFiltersAmino): _49.DeploymentFilters;
                toAmino(message: _49.DeploymentFilters): _49.DeploymentFiltersAmino;
                fromAminoMsg(object: _49.DeploymentFiltersAminoMsg): _49.DeploymentFilters;
                fromProtoMsg(message: _49.DeploymentFiltersProtoMsg): _49.DeploymentFilters;
                toProto(message: _49.DeploymentFilters): Uint8Array;
                toProtoMsg(message: _49.DeploymentFilters): _49.DeploymentFiltersProtoMsg;
            };
            DepositDeploymentAuthorization: {
                typeUrl: string;
                encode(message: _48.DepositDeploymentAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.DepositDeploymentAuthorization;
                fromPartial(object: Partial<_48.DepositDeploymentAuthorization>): _48.DepositDeploymentAuthorization;
                fromAmino(object: _48.DepositDeploymentAuthorizationAmino): _48.DepositDeploymentAuthorization;
                toAmino(message: _48.DepositDeploymentAuthorization): _48.DepositDeploymentAuthorizationAmino;
                fromAminoMsg(object: _48.DepositDeploymentAuthorizationAminoMsg): _48.DepositDeploymentAuthorization;
                fromProtoMsg(message: _48.DepositDeploymentAuthorizationProtoMsg): _48.DepositDeploymentAuthorization;
                toProto(message: _48.DepositDeploymentAuthorization): Uint8Array;
                toProtoMsg(message: _48.DepositDeploymentAuthorization): _48.DepositDeploymentAuthorizationProtoMsg;
            };
        };
    }
    namespace discovery {
        const v1: {
            ClientInfo: {
                typeUrl: string;
                encode(message: _61.ClientInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _61.ClientInfo;
                fromPartial(object: Partial<_61.ClientInfo>): _61.ClientInfo;
                fromAmino(object: _61.ClientInfoAmino): _61.ClientInfo;
                toAmino(message: _61.ClientInfo): _61.ClientInfoAmino;
                fromAminoMsg(object: _61.ClientInfoAminoMsg): _61.ClientInfo;
                fromProtoMsg(message: _61.ClientInfoProtoMsg): _61.ClientInfo;
                toProto(message: _61.ClientInfo): Uint8Array;
                toProtoMsg(message: _61.ClientInfo): _61.ClientInfoProtoMsg;
            };
            Akash: {
                typeUrl: string;
                encode(message: _60.Akash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _60.Akash;
                fromPartial(object: Partial<_60.Akash>): _60.Akash;
                fromAmino(object: _60.AkashAmino): _60.Akash;
                toAmino(message: _60.Akash): _60.AkashAmino;
                fromAminoMsg(object: _60.AkashAminoMsg): _60.Akash;
                fromProtoMsg(message: _60.AkashProtoMsg): _60.Akash;
                toProto(message: _60.Akash): Uint8Array;
                toProtoMsg(message: _60.Akash): _60.AkashProtoMsg;
            };
        };
    }
    namespace escrow {
        const v1beta1: {
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request: _63.QueryAccountsRequest): Promise<_63.QueryAccountsResponse>;
                payments(request: _63.QueryPaymentsRequest): Promise<_63.QueryPaymentsResponse>;
            };
            LCDQueryClient: typeof _247.LCDQueryClient;
            account_StateFromJSON(object: any): _64.Account_State;
            account_StateToJSON(object: _64.Account_State): string;
            payment_StateFromJSON(object: any): _64.Payment_State;
            payment_StateToJSON(object: _64.Payment_State): string;
            Account_State: typeof _64.Account_State;
            Account_StateSDKType: typeof _64.Account_State;
            Account_StateAmino: typeof _64.Account_State;
            Payment_State: typeof _64.Payment_State;
            Payment_StateSDKType: typeof _64.Payment_State;
            Payment_StateAmino: typeof _64.Payment_State;
            AccountID: {
                typeUrl: string;
                encode(message: _64.AccountID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.AccountID;
                fromPartial(object: Partial<_64.AccountID>): _64.AccountID;
                fromAmino(object: _64.AccountIDAmino): _64.AccountID;
                toAmino(message: _64.AccountID): _64.AccountIDAmino;
                fromAminoMsg(object: _64.AccountIDAminoMsg): _64.AccountID;
                fromProtoMsg(message: _64.AccountIDProtoMsg): _64.AccountID;
                toProto(message: _64.AccountID): Uint8Array;
                toProtoMsg(message: _64.AccountID): _64.AccountIDProtoMsg;
            };
            Account: {
                typeUrl: string;
                encode(message: _64.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Account;
                fromPartial(object: Partial<_64.Account>): _64.Account;
                fromAmino(object: _64.AccountAmino): _64.Account;
                toAmino(message: _64.Account): _64.AccountAmino;
                fromAminoMsg(object: _64.AccountAminoMsg): _64.Account;
                fromProtoMsg(message: _64.AccountProtoMsg): _64.Account;
                toProto(message: _64.Account): Uint8Array;
                toProtoMsg(message: _64.Account): _64.AccountProtoMsg;
            };
            Payment: {
                typeUrl: string;
                encode(message: _64.Payment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _64.Payment;
                fromPartial(object: Partial<_64.Payment>): _64.Payment;
                fromAmino(object: _64.PaymentAmino): _64.Payment;
                toAmino(message: _64.Payment): _64.PaymentAmino;
                fromAminoMsg(object: _64.PaymentAminoMsg): _64.Payment;
                fromProtoMsg(message: _64.PaymentProtoMsg): _64.Payment;
                toProto(message: _64.Payment): Uint8Array;
                toProtoMsg(message: _64.Payment): _64.PaymentProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _63.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAccountsRequest;
                fromPartial(object: Partial<_63.QueryAccountsRequest>): _63.QueryAccountsRequest;
                fromAmino(object: _63.QueryAccountsRequestAmino): _63.QueryAccountsRequest;
                toAmino(message: _63.QueryAccountsRequest): _63.QueryAccountsRequestAmino;
                fromAminoMsg(object: _63.QueryAccountsRequestAminoMsg): _63.QueryAccountsRequest;
                fromProtoMsg(message: _63.QueryAccountsRequestProtoMsg): _63.QueryAccountsRequest;
                toProto(message: _63.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryAccountsRequest): _63.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _63.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryAccountsResponse;
                fromPartial(object: Partial<_63.QueryAccountsResponse>): _63.QueryAccountsResponse;
                fromAmino(object: _63.QueryAccountsResponseAmino): _63.QueryAccountsResponse;
                toAmino(message: _63.QueryAccountsResponse): _63.QueryAccountsResponseAmino;
                fromAminoMsg(object: _63.QueryAccountsResponseAminoMsg): _63.QueryAccountsResponse;
                fromProtoMsg(message: _63.QueryAccountsResponseProtoMsg): _63.QueryAccountsResponse;
                toProto(message: _63.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryAccountsResponse): _63.QueryAccountsResponseProtoMsg;
            };
            QueryPaymentsRequest: {
                typeUrl: string;
                encode(message: _63.QueryPaymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryPaymentsRequest;
                fromPartial(object: Partial<_63.QueryPaymentsRequest>): _63.QueryPaymentsRequest;
                fromAmino(object: _63.QueryPaymentsRequestAmino): _63.QueryPaymentsRequest;
                toAmino(message: _63.QueryPaymentsRequest): _63.QueryPaymentsRequestAmino;
                fromAminoMsg(object: _63.QueryPaymentsRequestAminoMsg): _63.QueryPaymentsRequest;
                fromProtoMsg(message: _63.QueryPaymentsRequestProtoMsg): _63.QueryPaymentsRequest;
                toProto(message: _63.QueryPaymentsRequest): Uint8Array;
                toProtoMsg(message: _63.QueryPaymentsRequest): _63.QueryPaymentsRequestProtoMsg;
            };
            QueryPaymentsResponse: {
                typeUrl: string;
                encode(message: _63.QueryPaymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _63.QueryPaymentsResponse;
                fromPartial(object: Partial<_63.QueryPaymentsResponse>): _63.QueryPaymentsResponse;
                fromAmino(object: _63.QueryPaymentsResponseAmino): _63.QueryPaymentsResponse;
                toAmino(message: _63.QueryPaymentsResponse): _63.QueryPaymentsResponseAmino;
                fromAminoMsg(object: _63.QueryPaymentsResponseAminoMsg): _63.QueryPaymentsResponse;
                fromProtoMsg(message: _63.QueryPaymentsResponseProtoMsg): _63.QueryPaymentsResponse;
                toProto(message: _63.QueryPaymentsResponse): Uint8Array;
                toProtoMsg(message: _63.QueryPaymentsResponse): _63.QueryPaymentsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _62.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _62.GenesisState;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
                fromAmino(object: _62.GenesisStateAmino): _62.GenesisState;
                toAmino(message: _62.GenesisState): _62.GenesisStateAmino;
                fromAminoMsg(object: _62.GenesisStateAminoMsg): _62.GenesisState;
                fromProtoMsg(message: _62.GenesisStateProtoMsg): _62.GenesisState;
                toProto(message: _62.GenesisState): Uint8Array;
                toProtoMsg(message: _62.GenesisState): _62.GenesisStateProtoMsg;
            };
        };
        const v1beta2: {
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request: _66.QueryAccountsRequest): Promise<_66.QueryAccountsResponse>;
                payments(request: _66.QueryPaymentsRequest): Promise<_66.QueryPaymentsResponse>;
            };
            LCDQueryClient: typeof _248.LCDQueryClient;
            account_StateFromJSON(object: any): _67.Account_State;
            account_StateToJSON(object: _67.Account_State): string;
            fractionalPayment_StateFromJSON(object: any): _67.FractionalPayment_State;
            fractionalPayment_StateToJSON(object: _67.FractionalPayment_State): string;
            Account_State: typeof _67.Account_State;
            Account_StateSDKType: typeof _67.Account_State;
            Account_StateAmino: typeof _67.Account_State;
            FractionalPayment_State: typeof _67.FractionalPayment_State;
            FractionalPayment_StateSDKType: typeof _67.FractionalPayment_State;
            FractionalPayment_StateAmino: typeof _67.FractionalPayment_State;
            AccountID: {
                typeUrl: string;
                encode(message: _67.AccountID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.AccountID;
                fromPartial(object: Partial<_67.AccountID>): _67.AccountID;
                fromAmino(object: _67.AccountIDAmino): _67.AccountID;
                toAmino(message: _67.AccountID): _67.AccountIDAmino;
                fromAminoMsg(object: _67.AccountIDAminoMsg): _67.AccountID;
                fromProtoMsg(message: _67.AccountIDProtoMsg): _67.AccountID;
                toProto(message: _67.AccountID): Uint8Array;
                toProtoMsg(message: _67.AccountID): _67.AccountIDProtoMsg;
            };
            Account: {
                typeUrl: string;
                encode(message: _67.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.Account;
                fromPartial(object: Partial<_67.Account>): _67.Account;
                fromAmino(object: _67.AccountAmino): _67.Account;
                toAmino(message: _67.Account): _67.AccountAmino;
                fromAminoMsg(object: _67.AccountAminoMsg): _67.Account;
                fromProtoMsg(message: _67.AccountProtoMsg): _67.Account;
                toProto(message: _67.Account): Uint8Array;
                toProtoMsg(message: _67.Account): _67.AccountProtoMsg;
            };
            FractionalPayment: {
                typeUrl: string;
                encode(message: _67.FractionalPayment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _67.FractionalPayment;
                fromPartial(object: Partial<_67.FractionalPayment>): _67.FractionalPayment;
                fromAmino(object: _67.FractionalPaymentAmino): _67.FractionalPayment;
                toAmino(message: _67.FractionalPayment): _67.FractionalPaymentAmino;
                fromAminoMsg(object: _67.FractionalPaymentAminoMsg): _67.FractionalPayment;
                fromProtoMsg(message: _67.FractionalPaymentProtoMsg): _67.FractionalPayment;
                toProto(message: _67.FractionalPayment): Uint8Array;
                toProtoMsg(message: _67.FractionalPayment): _67.FractionalPaymentProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _66.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAccountsRequest;
                fromPartial(object: Partial<_66.QueryAccountsRequest>): _66.QueryAccountsRequest;
                fromAmino(object: _66.QueryAccountsRequestAmino): _66.QueryAccountsRequest;
                toAmino(message: _66.QueryAccountsRequest): _66.QueryAccountsRequestAmino;
                fromAminoMsg(object: _66.QueryAccountsRequestAminoMsg): _66.QueryAccountsRequest;
                fromProtoMsg(message: _66.QueryAccountsRequestProtoMsg): _66.QueryAccountsRequest;
                toProto(message: _66.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAccountsRequest): _66.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _66.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryAccountsResponse;
                fromPartial(object: Partial<_66.QueryAccountsResponse>): _66.QueryAccountsResponse;
                fromAmino(object: _66.QueryAccountsResponseAmino): _66.QueryAccountsResponse;
                toAmino(message: _66.QueryAccountsResponse): _66.QueryAccountsResponseAmino;
                fromAminoMsg(object: _66.QueryAccountsResponseAminoMsg): _66.QueryAccountsResponse;
                fromProtoMsg(message: _66.QueryAccountsResponseProtoMsg): _66.QueryAccountsResponse;
                toProto(message: _66.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAccountsResponse): _66.QueryAccountsResponseProtoMsg;
            };
            QueryPaymentsRequest: {
                typeUrl: string;
                encode(message: _66.QueryPaymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryPaymentsRequest;
                fromPartial(object: Partial<_66.QueryPaymentsRequest>): _66.QueryPaymentsRequest;
                fromAmino(object: _66.QueryPaymentsRequestAmino): _66.QueryPaymentsRequest;
                toAmino(message: _66.QueryPaymentsRequest): _66.QueryPaymentsRequestAmino;
                fromAminoMsg(object: _66.QueryPaymentsRequestAminoMsg): _66.QueryPaymentsRequest;
                fromProtoMsg(message: _66.QueryPaymentsRequestProtoMsg): _66.QueryPaymentsRequest;
                toProto(message: _66.QueryPaymentsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryPaymentsRequest): _66.QueryPaymentsRequestProtoMsg;
            };
            QueryPaymentsResponse: {
                typeUrl: string;
                encode(message: _66.QueryPaymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _66.QueryPaymentsResponse;
                fromPartial(object: Partial<_66.QueryPaymentsResponse>): _66.QueryPaymentsResponse;
                fromAmino(object: _66.QueryPaymentsResponseAmino): _66.QueryPaymentsResponse;
                toAmino(message: _66.QueryPaymentsResponse): _66.QueryPaymentsResponseAmino;
                fromAminoMsg(object: _66.QueryPaymentsResponseAminoMsg): _66.QueryPaymentsResponse;
                fromProtoMsg(message: _66.QueryPaymentsResponseProtoMsg): _66.QueryPaymentsResponse;
                toProto(message: _66.QueryPaymentsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryPaymentsResponse): _66.QueryPaymentsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _65.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
                fromAmino(object: _65.GenesisStateAmino): _65.GenesisState;
                toAmino(message: _65.GenesisState): _65.GenesisStateAmino;
                fromAminoMsg(object: _65.GenesisStateAminoMsg): _65.GenesisState;
                fromProtoMsg(message: _65.GenesisStateProtoMsg): _65.GenesisState;
                toProto(message: _65.GenesisState): Uint8Array;
                toProtoMsg(message: _65.GenesisState): _65.GenesisStateProtoMsg;
            };
        };
        const v1beta3: {
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request: _69.QueryAccountsRequest): Promise<_69.QueryAccountsResponse>;
                payments(request: _69.QueryPaymentsRequest): Promise<_69.QueryPaymentsResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            account_StateFromJSON(object: any): _70.Account_State;
            account_StateToJSON(object: _70.Account_State): string;
            fractionalPayment_StateFromJSON(object: any): _70.FractionalPayment_State;
            fractionalPayment_StateToJSON(object: _70.FractionalPayment_State): string;
            Account_State: typeof _70.Account_State;
            Account_StateSDKType: typeof _70.Account_State;
            Account_StateAmino: typeof _70.Account_State;
            FractionalPayment_State: typeof _70.FractionalPayment_State;
            FractionalPayment_StateSDKType: typeof _70.FractionalPayment_State;
            FractionalPayment_StateAmino: typeof _70.FractionalPayment_State;
            AccountID: {
                typeUrl: string;
                encode(message: _70.AccountID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.AccountID;
                fromPartial(object: Partial<_70.AccountID>): _70.AccountID;
                fromAmino(object: _70.AccountIDAmino): _70.AccountID;
                toAmino(message: _70.AccountID): _70.AccountIDAmino;
                fromAminoMsg(object: _70.AccountIDAminoMsg): _70.AccountID;
                fromProtoMsg(message: _70.AccountIDProtoMsg): _70.AccountID;
                toProto(message: _70.AccountID): Uint8Array;
                toProtoMsg(message: _70.AccountID): _70.AccountIDProtoMsg;
            };
            Account: {
                typeUrl: string;
                encode(message: _70.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.Account;
                fromPartial(object: Partial<_70.Account>): _70.Account;
                fromAmino(object: _70.AccountAmino): _70.Account;
                toAmino(message: _70.Account): _70.AccountAmino;
                fromAminoMsg(object: _70.AccountAminoMsg): _70.Account;
                fromProtoMsg(message: _70.AccountProtoMsg): _70.Account;
                toProto(message: _70.Account): Uint8Array;
                toProtoMsg(message: _70.Account): _70.AccountProtoMsg;
            };
            FractionalPayment: {
                typeUrl: string;
                encode(message: _70.FractionalPayment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _70.FractionalPayment;
                fromPartial(object: Partial<_70.FractionalPayment>): _70.FractionalPayment;
                fromAmino(object: _70.FractionalPaymentAmino): _70.FractionalPayment;
                toAmino(message: _70.FractionalPayment): _70.FractionalPaymentAmino;
                fromAminoMsg(object: _70.FractionalPaymentAminoMsg): _70.FractionalPayment;
                fromProtoMsg(message: _70.FractionalPaymentProtoMsg): _70.FractionalPayment;
                toProto(message: _70.FractionalPayment): Uint8Array;
                toProtoMsg(message: _70.FractionalPayment): _70.FractionalPaymentProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _69.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryAccountsRequest;
                fromPartial(object: Partial<_69.QueryAccountsRequest>): _69.QueryAccountsRequest;
                fromAmino(object: _69.QueryAccountsRequestAmino): _69.QueryAccountsRequest;
                toAmino(message: _69.QueryAccountsRequest): _69.QueryAccountsRequestAmino;
                fromAminoMsg(object: _69.QueryAccountsRequestAminoMsg): _69.QueryAccountsRequest;
                fromProtoMsg(message: _69.QueryAccountsRequestProtoMsg): _69.QueryAccountsRequest;
                toProto(message: _69.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryAccountsRequest): _69.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _69.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryAccountsResponse;
                fromPartial(object: Partial<_69.QueryAccountsResponse>): _69.QueryAccountsResponse;
                fromAmino(object: _69.QueryAccountsResponseAmino): _69.QueryAccountsResponse;
                toAmino(message: _69.QueryAccountsResponse): _69.QueryAccountsResponseAmino;
                fromAminoMsg(object: _69.QueryAccountsResponseAminoMsg): _69.QueryAccountsResponse;
                fromProtoMsg(message: _69.QueryAccountsResponseProtoMsg): _69.QueryAccountsResponse;
                toProto(message: _69.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryAccountsResponse): _69.QueryAccountsResponseProtoMsg;
            };
            QueryPaymentsRequest: {
                typeUrl: string;
                encode(message: _69.QueryPaymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryPaymentsRequest;
                fromPartial(object: Partial<_69.QueryPaymentsRequest>): _69.QueryPaymentsRequest;
                fromAmino(object: _69.QueryPaymentsRequestAmino): _69.QueryPaymentsRequest;
                toAmino(message: _69.QueryPaymentsRequest): _69.QueryPaymentsRequestAmino;
                fromAminoMsg(object: _69.QueryPaymentsRequestAminoMsg): _69.QueryPaymentsRequest;
                fromProtoMsg(message: _69.QueryPaymentsRequestProtoMsg): _69.QueryPaymentsRequest;
                toProto(message: _69.QueryPaymentsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryPaymentsRequest): _69.QueryPaymentsRequestProtoMsg;
            };
            QueryPaymentsResponse: {
                typeUrl: string;
                encode(message: _69.QueryPaymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _69.QueryPaymentsResponse;
                fromPartial(object: Partial<_69.QueryPaymentsResponse>): _69.QueryPaymentsResponse;
                fromAmino(object: _69.QueryPaymentsResponseAmino): _69.QueryPaymentsResponse;
                toAmino(message: _69.QueryPaymentsResponse): _69.QueryPaymentsResponseAmino;
                fromAminoMsg(object: _69.QueryPaymentsResponseAminoMsg): _69.QueryPaymentsResponse;
                fromProtoMsg(message: _69.QueryPaymentsResponseProtoMsg): _69.QueryPaymentsResponse;
                toProto(message: _69.QueryPaymentsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryPaymentsResponse): _69.QueryPaymentsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _68.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _68.GenesisState;
                fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                toProto(message: _68.GenesisState): Uint8Array;
                toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta3: {
            DepositParams: {
                typeUrl: string;
                encode(message: _72.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _72.DepositParams;
                fromPartial(object: Partial<_72.DepositParams>): _72.DepositParams;
                fromAmino(object: _72.DepositParamsAmino): _72.DepositParams;
                toAmino(message: _72.DepositParams): _72.DepositParamsAmino;
                fromAminoMsg(object: _72.DepositParamsAminoMsg): _72.DepositParams;
                fromProtoMsg(message: _72.DepositParamsProtoMsg): _72.DepositParams;
                toProto(message: _72.DepositParams): Uint8Array;
                toProtoMsg(message: _72.DepositParams): _72.DepositParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _71.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _71.GenesisState;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
                fromAmino(object: _71.GenesisStateAmino): _71.GenesisState;
                toAmino(message: _71.GenesisState): _71.GenesisStateAmino;
                fromAminoMsg(object: _71.GenesisStateAminoMsg): _71.GenesisState;
                fromProtoMsg(message: _71.GenesisStateProtoMsg): _71.GenesisState;
                toProto(message: _71.GenesisState): Uint8Array;
                toProtoMsg(message: _71.GenesisState): _71.GenesisStateProtoMsg;
            };
        };
    }
    namespace inflation {
        const v1beta2: {
            Params: {
                typeUrl: string;
                encode(message: _74.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _74.Params;
                fromPartial(object: Partial<_74.Params>): _74.Params;
                fromAmino(object: _74.ParamsAmino): _74.Params;
                toAmino(message: _74.Params): _74.ParamsAmino;
                fromAminoMsg(object: _74.ParamsAminoMsg): _74.Params;
                fromProtoMsg(message: _74.ParamsProtoMsg): _74.Params;
                toProto(message: _74.Params): Uint8Array;
                toProtoMsg(message: _74.Params): _74.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _73.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                toProto(message: _73.GenesisState): Uint8Array;
                toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
            };
        };
        const v1beta3: {
            Params: {
                typeUrl: string;
                encode(message: _76.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Params;
                fromPartial(object: Partial<_76.Params>): _76.Params;
                fromAmino(object: _76.ParamsAmino): _76.Params;
                toAmino(message: _76.Params): _76.ParamsAmino;
                fromAminoMsg(object: _76.ParamsAminoMsg): _76.Params;
                fromProtoMsg(message: _76.ParamsProtoMsg): _76.Params;
                toProto(message: _76.Params): Uint8Array;
                toProtoMsg(message: _76.Params): _76.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _75.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
                fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                toProto(message: _75.GenesisState): Uint8Array;
                toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
            };
        };
    }
    namespace market {
        const v1beta2: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                orders(request: _82.QueryOrdersRequest): Promise<_82.QueryOrdersResponse>;
                order(request: _82.QueryOrderRequest): Promise<_82.QueryOrderResponse>;
                bids(request: _82.QueryBidsRequest): Promise<_82.QueryBidsResponse>;
                bid(request: _82.QueryBidRequest): Promise<_82.QueryBidResponse>;
                leases(request: _82.QueryLeasesRequest): Promise<_82.QueryLeasesResponse>;
                lease(request: _82.QueryLeaseRequest): Promise<_82.QueryLeaseResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBid(value: _77.MsgCreateBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeBid(value: _77.MsgCloseBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawLease(value: _79.MsgWithdrawLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createLease(value: _79.MsgCreateLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeLease(value: _79.MsgCloseLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBid(value: _77.MsgCreateBid): {
                        typeUrl: string;
                        value: _77.MsgCreateBid;
                    };
                    closeBid(value: _77.MsgCloseBid): {
                        typeUrl: string;
                        value: _77.MsgCloseBid;
                    };
                    withdrawLease(value: _79.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _79.MsgWithdrawLease;
                    };
                    createLease(value: _79.MsgCreateLease): {
                        typeUrl: string;
                        value: _79.MsgCreateLease;
                    };
                    closeLease(value: _79.MsgCloseLease): {
                        typeUrl: string;
                        value: _79.MsgCloseLease;
                    };
                };
                fromJSON: {
                    createBid(value: any): {
                        typeUrl: string;
                        value: _77.MsgCreateBid;
                    };
                    closeBid(value: any): {
                        typeUrl: string;
                        value: _77.MsgCloseBid;
                    };
                    withdrawLease(value: any): {
                        typeUrl: string;
                        value: _79.MsgWithdrawLease;
                    };
                    createLease(value: any): {
                        typeUrl: string;
                        value: _79.MsgCreateLease;
                    };
                    closeLease(value: any): {
                        typeUrl: string;
                        value: _79.MsgCloseLease;
                    };
                };
                fromPartial: {
                    createBid(value: _77.MsgCreateBid): {
                        typeUrl: string;
                        value: _77.MsgCreateBid;
                    };
                    closeBid(value: _77.MsgCloseBid): {
                        typeUrl: string;
                        value: _77.MsgCloseBid;
                    };
                    withdrawLease(value: _79.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _79.MsgWithdrawLease;
                    };
                    createLease(value: _79.MsgCreateLease): {
                        typeUrl: string;
                        value: _79.MsgCreateLease;
                    };
                    closeLease(value: _79.MsgCloseLease): {
                        typeUrl: string;
                        value: _79.MsgCloseLease;
                    };
                };
            };
            AminoConverter: {
                "/akash.market.v1beta2.MsgCreateBid": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCreateBid) => _77.MsgCreateBidAmino;
                    fromAmino: (object: _77.MsgCreateBidAmino) => _77.MsgCreateBid;
                };
                "/akash.market.v1beta2.MsgCloseBid": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCloseBid) => _77.MsgCloseBidAmino;
                    fromAmino: (object: _77.MsgCloseBidAmino) => _77.MsgCloseBid;
                };
                "/akash.market.v1beta2.MsgWithdrawLease": {
                    aminoType: string;
                    toAmino: (message: _79.MsgWithdrawLease) => _79.MsgWithdrawLeaseAmino;
                    fromAmino: (object: _79.MsgWithdrawLeaseAmino) => _79.MsgWithdrawLease;
                };
                "/akash.market.v1beta2.MsgCreateLease": {
                    aminoType: string;
                    toAmino: (message: _79.MsgCreateLease) => _79.MsgCreateLeaseAmino;
                    fromAmino: (object: _79.MsgCreateLeaseAmino) => _79.MsgCreateLease;
                };
                "/akash.market.v1beta2.MsgCloseLease": {
                    aminoType: string;
                    toAmino: (message: _79.MsgCloseLease) => _79.MsgCloseLeaseAmino;
                    fromAmino: (object: _79.MsgCloseLeaseAmino) => _79.MsgCloseLease;
                };
            };
            QueryOrdersRequest: {
                typeUrl: string;
                encode(message: _82.QueryOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryOrdersRequest;
                fromPartial(object: Partial<_82.QueryOrdersRequest>): _82.QueryOrdersRequest;
                fromAmino(object: _82.QueryOrdersRequestAmino): _82.QueryOrdersRequest;
                toAmino(message: _82.QueryOrdersRequest): _82.QueryOrdersRequestAmino;
                fromAminoMsg(object: _82.QueryOrdersRequestAminoMsg): _82.QueryOrdersRequest;
                fromProtoMsg(message: _82.QueryOrdersRequestProtoMsg): _82.QueryOrdersRequest;
                toProto(message: _82.QueryOrdersRequest): Uint8Array;
                toProtoMsg(message: _82.QueryOrdersRequest): _82.QueryOrdersRequestProtoMsg;
            };
            QueryOrdersResponse: {
                typeUrl: string;
                encode(message: _82.QueryOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryOrdersResponse;
                fromPartial(object: Partial<_82.QueryOrdersResponse>): _82.QueryOrdersResponse;
                fromAmino(object: _82.QueryOrdersResponseAmino): _82.QueryOrdersResponse;
                toAmino(message: _82.QueryOrdersResponse): _82.QueryOrdersResponseAmino;
                fromAminoMsg(object: _82.QueryOrdersResponseAminoMsg): _82.QueryOrdersResponse;
                fromProtoMsg(message: _82.QueryOrdersResponseProtoMsg): _82.QueryOrdersResponse;
                toProto(message: _82.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _82.QueryOrdersResponse): _82.QueryOrdersResponseProtoMsg;
            };
            QueryOrderRequest: {
                typeUrl: string;
                encode(message: _82.QueryOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryOrderRequest;
                fromPartial(object: Partial<_82.QueryOrderRequest>): _82.QueryOrderRequest;
                fromAmino(object: _82.QueryOrderRequestAmino): _82.QueryOrderRequest;
                toAmino(message: _82.QueryOrderRequest): _82.QueryOrderRequestAmino;
                fromAminoMsg(object: _82.QueryOrderRequestAminoMsg): _82.QueryOrderRequest;
                fromProtoMsg(message: _82.QueryOrderRequestProtoMsg): _82.QueryOrderRequest;
                toProto(message: _82.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _82.QueryOrderRequest): _82.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                typeUrl: string;
                encode(message: _82.QueryOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryOrderResponse;
                fromPartial(object: Partial<_82.QueryOrderResponse>): _82.QueryOrderResponse;
                fromAmino(object: _82.QueryOrderResponseAmino): _82.QueryOrderResponse;
                toAmino(message: _82.QueryOrderResponse): _82.QueryOrderResponseAmino;
                fromAminoMsg(object: _82.QueryOrderResponseAminoMsg): _82.QueryOrderResponse;
                fromProtoMsg(message: _82.QueryOrderResponseProtoMsg): _82.QueryOrderResponse;
                toProto(message: _82.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _82.QueryOrderResponse): _82.QueryOrderResponseProtoMsg;
            };
            QueryBidsRequest: {
                typeUrl: string;
                encode(message: _82.QueryBidsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryBidsRequest;
                fromPartial(object: Partial<_82.QueryBidsRequest>): _82.QueryBidsRequest;
                fromAmino(object: _82.QueryBidsRequestAmino): _82.QueryBidsRequest;
                toAmino(message: _82.QueryBidsRequest): _82.QueryBidsRequestAmino;
                fromAminoMsg(object: _82.QueryBidsRequestAminoMsg): _82.QueryBidsRequest;
                fromProtoMsg(message: _82.QueryBidsRequestProtoMsg): _82.QueryBidsRequest;
                toProto(message: _82.QueryBidsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryBidsRequest): _82.QueryBidsRequestProtoMsg;
            };
            QueryBidsResponse: {
                typeUrl: string;
                encode(message: _82.QueryBidsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryBidsResponse;
                fromPartial(object: Partial<_82.QueryBidsResponse>): _82.QueryBidsResponse;
                fromAmino(object: _82.QueryBidsResponseAmino): _82.QueryBidsResponse;
                toAmino(message: _82.QueryBidsResponse): _82.QueryBidsResponseAmino;
                fromAminoMsg(object: _82.QueryBidsResponseAminoMsg): _82.QueryBidsResponse;
                fromProtoMsg(message: _82.QueryBidsResponseProtoMsg): _82.QueryBidsResponse;
                toProto(message: _82.QueryBidsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryBidsResponse): _82.QueryBidsResponseProtoMsg;
            };
            QueryBidRequest: {
                typeUrl: string;
                encode(message: _82.QueryBidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryBidRequest;
                fromPartial(object: Partial<_82.QueryBidRequest>): _82.QueryBidRequest;
                fromAmino(object: _82.QueryBidRequestAmino): _82.QueryBidRequest;
                toAmino(message: _82.QueryBidRequest): _82.QueryBidRequestAmino;
                fromAminoMsg(object: _82.QueryBidRequestAminoMsg): _82.QueryBidRequest;
                fromProtoMsg(message: _82.QueryBidRequestProtoMsg): _82.QueryBidRequest;
                toProto(message: _82.QueryBidRequest): Uint8Array;
                toProtoMsg(message: _82.QueryBidRequest): _82.QueryBidRequestProtoMsg;
            };
            QueryBidResponse: {
                typeUrl: string;
                encode(message: _82.QueryBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryBidResponse;
                fromPartial(object: Partial<_82.QueryBidResponse>): _82.QueryBidResponse;
                fromAmino(object: _82.QueryBidResponseAmino): _82.QueryBidResponse;
                toAmino(message: _82.QueryBidResponse): _82.QueryBidResponseAmino;
                fromAminoMsg(object: _82.QueryBidResponseAminoMsg): _82.QueryBidResponse;
                fromProtoMsg(message: _82.QueryBidResponseProtoMsg): _82.QueryBidResponse;
                toProto(message: _82.QueryBidResponse): Uint8Array;
                toProtoMsg(message: _82.QueryBidResponse): _82.QueryBidResponseProtoMsg;
            };
            QueryLeasesRequest: {
                typeUrl: string;
                encode(message: _82.QueryLeasesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryLeasesRequest;
                fromPartial(object: Partial<_82.QueryLeasesRequest>): _82.QueryLeasesRequest;
                fromAmino(object: _82.QueryLeasesRequestAmino): _82.QueryLeasesRequest;
                toAmino(message: _82.QueryLeasesRequest): _82.QueryLeasesRequestAmino;
                fromAminoMsg(object: _82.QueryLeasesRequestAminoMsg): _82.QueryLeasesRequest;
                fromProtoMsg(message: _82.QueryLeasesRequestProtoMsg): _82.QueryLeasesRequest;
                toProto(message: _82.QueryLeasesRequest): Uint8Array;
                toProtoMsg(message: _82.QueryLeasesRequest): _82.QueryLeasesRequestProtoMsg;
            };
            QueryLeasesResponse: {
                typeUrl: string;
                encode(message: _82.QueryLeasesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryLeasesResponse;
                fromPartial(object: Partial<_82.QueryLeasesResponse>): _82.QueryLeasesResponse;
                fromAmino(object: _82.QueryLeasesResponseAmino): _82.QueryLeasesResponse;
                toAmino(message: _82.QueryLeasesResponse): _82.QueryLeasesResponseAmino;
                fromAminoMsg(object: _82.QueryLeasesResponseAminoMsg): _82.QueryLeasesResponse;
                fromProtoMsg(message: _82.QueryLeasesResponseProtoMsg): _82.QueryLeasesResponse;
                toProto(message: _82.QueryLeasesResponse): Uint8Array;
                toProtoMsg(message: _82.QueryLeasesResponse): _82.QueryLeasesResponseProtoMsg;
            };
            QueryLeaseRequest: {
                typeUrl: string;
                encode(message: _82.QueryLeaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryLeaseRequest;
                fromPartial(object: Partial<_82.QueryLeaseRequest>): _82.QueryLeaseRequest;
                fromAmino(object: _82.QueryLeaseRequestAmino): _82.QueryLeaseRequest;
                toAmino(message: _82.QueryLeaseRequest): _82.QueryLeaseRequestAmino;
                fromAminoMsg(object: _82.QueryLeaseRequestAminoMsg): _82.QueryLeaseRequest;
                fromProtoMsg(message: _82.QueryLeaseRequestProtoMsg): _82.QueryLeaseRequest;
                toProto(message: _82.QueryLeaseRequest): Uint8Array;
                toProtoMsg(message: _82.QueryLeaseRequest): _82.QueryLeaseRequestProtoMsg;
            };
            QueryLeaseResponse: {
                typeUrl: string;
                encode(message: _82.QueryLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _82.QueryLeaseResponse;
                fromPartial(object: Partial<_82.QueryLeaseResponse>): _82.QueryLeaseResponse;
                fromAmino(object: _82.QueryLeaseResponseAmino): _82.QueryLeaseResponse;
                toAmino(message: _82.QueryLeaseResponse): _82.QueryLeaseResponseAmino;
                fromAminoMsg(object: _82.QueryLeaseResponseAminoMsg): _82.QueryLeaseResponse;
                fromProtoMsg(message: _82.QueryLeaseResponseProtoMsg): _82.QueryLeaseResponse;
                toProto(message: _82.QueryLeaseResponse): Uint8Array;
                toProtoMsg(message: _82.QueryLeaseResponse): _82.QueryLeaseResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _81.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Params;
                fromPartial(object: Partial<_81.Params>): _81.Params;
                fromAmino(object: _81.ParamsAmino): _81.Params;
                toAmino(message: _81.Params): _81.ParamsAmino;
                fromAminoMsg(object: _81.ParamsAminoMsg): _81.Params;
                fromProtoMsg(message: _81.ParamsProtoMsg): _81.Params;
                toProto(message: _81.Params): Uint8Array;
                toProtoMsg(message: _81.Params): _81.ParamsProtoMsg;
            };
            order_StateFromJSON(object: any): _80.Order_State;
            order_StateToJSON(object: _80.Order_State): string;
            Order_State: typeof _80.Order_State;
            Order_StateSDKType: typeof _80.Order_State;
            Order_StateAmino: typeof _80.Order_State;
            OrderID: {
                typeUrl: string;
                encode(message: _80.OrderID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.OrderID;
                fromPartial(object: Partial<_80.OrderID>): _80.OrderID;
                fromAmino(object: _80.OrderIDAmino): _80.OrderID;
                toAmino(message: _80.OrderID): _80.OrderIDAmino;
                fromAminoMsg(object: _80.OrderIDAminoMsg): _80.OrderID;
                fromProtoMsg(message: _80.OrderIDProtoMsg): _80.OrderID;
                toProto(message: _80.OrderID): Uint8Array;
                toProtoMsg(message: _80.OrderID): _80.OrderIDProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _80.Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.Order;
                fromPartial(object: Partial<_80.Order>): _80.Order;
                fromAmino(object: _80.OrderAmino): _80.Order;
                toAmino(message: _80.Order): _80.OrderAmino;
                fromAminoMsg(object: _80.OrderAminoMsg): _80.Order;
                fromProtoMsg(message: _80.OrderProtoMsg): _80.Order;
                toProto(message: _80.Order): Uint8Array;
                toProtoMsg(message: _80.Order): _80.OrderProtoMsg;
            };
            OrderFilters: {
                typeUrl: string;
                encode(message: _80.OrderFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.OrderFilters;
                fromPartial(object: Partial<_80.OrderFilters>): _80.OrderFilters;
                fromAmino(object: _80.OrderFiltersAmino): _80.OrderFilters;
                toAmino(message: _80.OrderFilters): _80.OrderFiltersAmino;
                fromAminoMsg(object: _80.OrderFiltersAminoMsg): _80.OrderFilters;
                fromProtoMsg(message: _80.OrderFiltersProtoMsg): _80.OrderFilters;
                toProto(message: _80.OrderFilters): Uint8Array;
                toProtoMsg(message: _80.OrderFilters): _80.OrderFiltersProtoMsg;
            };
            lease_StateFromJSON(object: any): _79.Lease_State;
            lease_StateToJSON(object: _79.Lease_State): string;
            Lease_State: typeof _79.Lease_State;
            Lease_StateSDKType: typeof _79.Lease_State;
            Lease_StateAmino: typeof _79.Lease_State;
            LeaseID: {
                typeUrl: string;
                encode(message: _79.LeaseID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.LeaseID;
                fromPartial(object: Partial<_79.LeaseID>): _79.LeaseID;
                fromAmino(object: _79.LeaseIDAmino): _79.LeaseID;
                toAmino(message: _79.LeaseID): _79.LeaseIDAmino;
                fromAminoMsg(object: _79.LeaseIDAminoMsg): _79.LeaseID;
                fromProtoMsg(message: _79.LeaseIDProtoMsg): _79.LeaseID;
                toProto(message: _79.LeaseID): Uint8Array;
                toProtoMsg(message: _79.LeaseID): _79.LeaseIDProtoMsg;
            };
            Lease: {
                typeUrl: string;
                encode(message: _79.Lease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.Lease;
                fromPartial(object: Partial<_79.Lease>): _79.Lease;
                fromAmino(object: _79.LeaseAmino): _79.Lease;
                toAmino(message: _79.Lease): _79.LeaseAmino;
                fromAminoMsg(object: _79.LeaseAminoMsg): _79.Lease;
                fromProtoMsg(message: _79.LeaseProtoMsg): _79.Lease;
                toProto(message: _79.Lease): Uint8Array;
                toProtoMsg(message: _79.Lease): _79.LeaseProtoMsg;
            };
            LeaseFilters: {
                typeUrl: string;
                encode(message: _79.LeaseFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.LeaseFilters;
                fromPartial(object: Partial<_79.LeaseFilters>): _79.LeaseFilters;
                fromAmino(object: _79.LeaseFiltersAmino): _79.LeaseFilters;
                toAmino(message: _79.LeaseFilters): _79.LeaseFiltersAmino;
                fromAminoMsg(object: _79.LeaseFiltersAminoMsg): _79.LeaseFilters;
                fromProtoMsg(message: _79.LeaseFiltersProtoMsg): _79.LeaseFilters;
                toProto(message: _79.LeaseFilters): Uint8Array;
                toProtoMsg(message: _79.LeaseFilters): _79.LeaseFiltersProtoMsg;
            };
            MsgCreateLease: {
                typeUrl: string;
                encode(message: _79.MsgCreateLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgCreateLease;
                fromPartial(object: Partial<_79.MsgCreateLease>): _79.MsgCreateLease;
                fromAmino(object: _79.MsgCreateLeaseAmino): _79.MsgCreateLease;
                toAmino(message: _79.MsgCreateLease): _79.MsgCreateLeaseAmino;
                fromAminoMsg(object: _79.MsgCreateLeaseAminoMsg): _79.MsgCreateLease;
                fromProtoMsg(message: _79.MsgCreateLeaseProtoMsg): _79.MsgCreateLease;
                toProto(message: _79.MsgCreateLease): Uint8Array;
                toProtoMsg(message: _79.MsgCreateLease): _79.MsgCreateLeaseProtoMsg;
            };
            MsgCreateLeaseResponse: {
                typeUrl: string;
                encode(_: _79.MsgCreateLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgCreateLeaseResponse;
                fromPartial(_: Partial<_79.MsgCreateLeaseResponse>): _79.MsgCreateLeaseResponse;
                fromAmino(_: _79.MsgCreateLeaseResponseAmino): _79.MsgCreateLeaseResponse;
                toAmino(_: _79.MsgCreateLeaseResponse): _79.MsgCreateLeaseResponseAmino;
                fromAminoMsg(object: _79.MsgCreateLeaseResponseAminoMsg): _79.MsgCreateLeaseResponse;
                fromProtoMsg(message: _79.MsgCreateLeaseResponseProtoMsg): _79.MsgCreateLeaseResponse;
                toProto(message: _79.MsgCreateLeaseResponse): Uint8Array;
                toProtoMsg(message: _79.MsgCreateLeaseResponse): _79.MsgCreateLeaseResponseProtoMsg;
            };
            MsgWithdrawLease: {
                typeUrl: string;
                encode(message: _79.MsgWithdrawLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgWithdrawLease;
                fromPartial(object: Partial<_79.MsgWithdrawLease>): _79.MsgWithdrawLease;
                fromAmino(object: _79.MsgWithdrawLeaseAmino): _79.MsgWithdrawLease;
                toAmino(message: _79.MsgWithdrawLease): _79.MsgWithdrawLeaseAmino;
                fromAminoMsg(object: _79.MsgWithdrawLeaseAminoMsg): _79.MsgWithdrawLease;
                fromProtoMsg(message: _79.MsgWithdrawLeaseProtoMsg): _79.MsgWithdrawLease;
                toProto(message: _79.MsgWithdrawLease): Uint8Array;
                toProtoMsg(message: _79.MsgWithdrawLease): _79.MsgWithdrawLeaseProtoMsg;
            };
            MsgWithdrawLeaseResponse: {
                typeUrl: string;
                encode(_: _79.MsgWithdrawLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgWithdrawLeaseResponse;
                fromPartial(_: Partial<_79.MsgWithdrawLeaseResponse>): _79.MsgWithdrawLeaseResponse;
                fromAmino(_: _79.MsgWithdrawLeaseResponseAmino): _79.MsgWithdrawLeaseResponse;
                toAmino(_: _79.MsgWithdrawLeaseResponse): _79.MsgWithdrawLeaseResponseAmino;
                fromAminoMsg(object: _79.MsgWithdrawLeaseResponseAminoMsg): _79.MsgWithdrawLeaseResponse;
                fromProtoMsg(message: _79.MsgWithdrawLeaseResponseProtoMsg): _79.MsgWithdrawLeaseResponse;
                toProto(message: _79.MsgWithdrawLeaseResponse): Uint8Array;
                toProtoMsg(message: _79.MsgWithdrawLeaseResponse): _79.MsgWithdrawLeaseResponseProtoMsg;
            };
            MsgCloseLease: {
                typeUrl: string;
                encode(message: _79.MsgCloseLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.MsgCloseLease;
                fromPartial(object: Partial<_79.MsgCloseLease>): _79.MsgCloseLease;
                fromAmino(object: _79.MsgCloseLeaseAmino): _79.MsgCloseLease;
                toAmino(message: _79.MsgCloseLease): _79.MsgCloseLeaseAmino;
                fromAminoMsg(object: _79.MsgCloseLeaseAminoMsg): _79.MsgCloseLease;
                fromProtoMsg(message: _79.MsgCloseLeaseProtoMsg): _79.MsgCloseLease;
                toProto(message: _79.MsgCloseLease): Uint8Array;
                toProtoMsg(message: _79.MsgCloseLease): _79.MsgCloseLeaseProtoMsg;
            };
            MsgCloseLeaseResponse: {
                typeUrl: string;
                encode(_: _79.MsgCloseLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.MsgCloseLeaseResponse;
                fromPartial(_: Partial<_79.MsgCloseLeaseResponse>): _79.MsgCloseLeaseResponse;
                fromAmino(_: _79.MsgCloseLeaseResponseAmino): _79.MsgCloseLeaseResponse;
                toAmino(_: _79.MsgCloseLeaseResponse): _79.MsgCloseLeaseResponseAmino;
                fromAminoMsg(object: _79.MsgCloseLeaseResponseAminoMsg): _79.MsgCloseLeaseResponse;
                fromProtoMsg(message: _79.MsgCloseLeaseResponseProtoMsg): _79.MsgCloseLeaseResponse;
                toProto(message: _79.MsgCloseLeaseResponse): Uint8Array;
                toProtoMsg(message: _79.MsgCloseLeaseResponse): _79.MsgCloseLeaseResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _78.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.GenesisState;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
                fromAmino(object: _78.GenesisStateAmino): _78.GenesisState;
                toAmino(message: _78.GenesisState): _78.GenesisStateAmino;
                fromAminoMsg(object: _78.GenesisStateAminoMsg): _78.GenesisState;
                fromProtoMsg(message: _78.GenesisStateProtoMsg): _78.GenesisState;
                toProto(message: _78.GenesisState): Uint8Array;
                toProtoMsg(message: _78.GenesisState): _78.GenesisStateProtoMsg;
            };
            bid_StateFromJSON(object: any): _77.Bid_State;
            bid_StateToJSON(object: _77.Bid_State): string;
            Bid_State: typeof _77.Bid_State;
            Bid_StateSDKType: typeof _77.Bid_State;
            Bid_StateAmino: typeof _77.Bid_State;
            MsgCreateBid: {
                typeUrl: string;
                encode(message: _77.MsgCreateBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCreateBid;
                fromPartial(object: Partial<_77.MsgCreateBid>): _77.MsgCreateBid;
                fromAmino(object: _77.MsgCreateBidAmino): _77.MsgCreateBid;
                toAmino(message: _77.MsgCreateBid): _77.MsgCreateBidAmino;
                fromAminoMsg(object: _77.MsgCreateBidAminoMsg): _77.MsgCreateBid;
                fromProtoMsg(message: _77.MsgCreateBidProtoMsg): _77.MsgCreateBid;
                toProto(message: _77.MsgCreateBid): Uint8Array;
                toProtoMsg(message: _77.MsgCreateBid): _77.MsgCreateBidProtoMsg;
            };
            MsgCreateBidResponse: {
                typeUrl: string;
                encode(_: _77.MsgCreateBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgCreateBidResponse;
                fromPartial(_: Partial<_77.MsgCreateBidResponse>): _77.MsgCreateBidResponse;
                fromAmino(_: _77.MsgCreateBidResponseAmino): _77.MsgCreateBidResponse;
                toAmino(_: _77.MsgCreateBidResponse): _77.MsgCreateBidResponseAmino;
                fromAminoMsg(object: _77.MsgCreateBidResponseAminoMsg): _77.MsgCreateBidResponse;
                fromProtoMsg(message: _77.MsgCreateBidResponseProtoMsg): _77.MsgCreateBidResponse;
                toProto(message: _77.MsgCreateBidResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCreateBidResponse): _77.MsgCreateBidResponseProtoMsg;
            };
            MsgCloseBid: {
                typeUrl: string;
                encode(message: _77.MsgCloseBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgCloseBid;
                fromPartial(object: Partial<_77.MsgCloseBid>): _77.MsgCloseBid;
                fromAmino(object: _77.MsgCloseBidAmino): _77.MsgCloseBid;
                toAmino(message: _77.MsgCloseBid): _77.MsgCloseBidAmino;
                fromAminoMsg(object: _77.MsgCloseBidAminoMsg): _77.MsgCloseBid;
                fromProtoMsg(message: _77.MsgCloseBidProtoMsg): _77.MsgCloseBid;
                toProto(message: _77.MsgCloseBid): Uint8Array;
                toProtoMsg(message: _77.MsgCloseBid): _77.MsgCloseBidProtoMsg;
            };
            MsgCloseBidResponse: {
                typeUrl: string;
                encode(_: _77.MsgCloseBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _77.MsgCloseBidResponse;
                fromPartial(_: Partial<_77.MsgCloseBidResponse>): _77.MsgCloseBidResponse;
                fromAmino(_: _77.MsgCloseBidResponseAmino): _77.MsgCloseBidResponse;
                toAmino(_: _77.MsgCloseBidResponse): _77.MsgCloseBidResponseAmino;
                fromAminoMsg(object: _77.MsgCloseBidResponseAminoMsg): _77.MsgCloseBidResponse;
                fromProtoMsg(message: _77.MsgCloseBidResponseProtoMsg): _77.MsgCloseBidResponse;
                toProto(message: _77.MsgCloseBidResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCloseBidResponse): _77.MsgCloseBidResponseProtoMsg;
            };
            BidID: {
                typeUrl: string;
                encode(message: _77.BidID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.BidID;
                fromPartial(object: Partial<_77.BidID>): _77.BidID;
                fromAmino(object: _77.BidIDAmino): _77.BidID;
                toAmino(message: _77.BidID): _77.BidIDAmino;
                fromAminoMsg(object: _77.BidIDAminoMsg): _77.BidID;
                fromProtoMsg(message: _77.BidIDProtoMsg): _77.BidID;
                toProto(message: _77.BidID): Uint8Array;
                toProtoMsg(message: _77.BidID): _77.BidIDProtoMsg;
            };
            Bid: {
                typeUrl: string;
                encode(message: _77.Bid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.Bid;
                fromPartial(object: Partial<_77.Bid>): _77.Bid;
                fromAmino(object: _77.BidAmino): _77.Bid;
                toAmino(message: _77.Bid): _77.BidAmino;
                fromAminoMsg(object: _77.BidAminoMsg): _77.Bid;
                fromProtoMsg(message: _77.BidProtoMsg): _77.Bid;
                toProto(message: _77.Bid): Uint8Array;
                toProtoMsg(message: _77.Bid): _77.BidProtoMsg;
            };
            BidFilters: {
                typeUrl: string;
                encode(message: _77.BidFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.BidFilters;
                fromPartial(object: Partial<_77.BidFilters>): _77.BidFilters;
                fromAmino(object: _77.BidFiltersAmino): _77.BidFilters;
                toAmino(message: _77.BidFilters): _77.BidFiltersAmino;
                fromAminoMsg(object: _77.BidFiltersAminoMsg): _77.BidFilters;
                fromProtoMsg(message: _77.BidFiltersProtoMsg): _77.BidFilters;
                toProto(message: _77.BidFilters): Uint8Array;
                toProtoMsg(message: _77.BidFilters): _77.BidFiltersProtoMsg;
            };
        };
        const v1beta3: {
            MsgClientImpl: typeof _280.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                orders(request: _89.QueryOrdersRequest): Promise<_89.QueryOrdersResponse>;
                order(request: _89.QueryOrderRequest): Promise<_89.QueryOrderResponse>;
                bids(request: _89.QueryBidsRequest): Promise<_89.QueryBidsResponse>;
                bid(request: _89.QueryBidRequest): Promise<_89.QueryBidResponse>;
                leases(request: _89.QueryLeasesRequest): Promise<_89.QueryLeasesResponse>;
                lease(request: _89.QueryLeaseRequest): Promise<_89.QueryLeaseResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBid(value: _84.MsgCreateBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeBid(value: _84.MsgCloseBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawLease(value: _86.MsgWithdrawLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createLease(value: _86.MsgCreateLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeLease(value: _86.MsgCloseLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBid(value: _84.MsgCreateBid): {
                        typeUrl: string;
                        value: _84.MsgCreateBid;
                    };
                    closeBid(value: _84.MsgCloseBid): {
                        typeUrl: string;
                        value: _84.MsgCloseBid;
                    };
                    withdrawLease(value: _86.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _86.MsgWithdrawLease;
                    };
                    createLease(value: _86.MsgCreateLease): {
                        typeUrl: string;
                        value: _86.MsgCreateLease;
                    };
                    closeLease(value: _86.MsgCloseLease): {
                        typeUrl: string;
                        value: _86.MsgCloseLease;
                    };
                };
                fromJSON: {
                    createBid(value: any): {
                        typeUrl: string;
                        value: _84.MsgCreateBid;
                    };
                    closeBid(value: any): {
                        typeUrl: string;
                        value: _84.MsgCloseBid;
                    };
                    withdrawLease(value: any): {
                        typeUrl: string;
                        value: _86.MsgWithdrawLease;
                    };
                    createLease(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateLease;
                    };
                    closeLease(value: any): {
                        typeUrl: string;
                        value: _86.MsgCloseLease;
                    };
                };
                fromPartial: {
                    createBid(value: _84.MsgCreateBid): {
                        typeUrl: string;
                        value: _84.MsgCreateBid;
                    };
                    closeBid(value: _84.MsgCloseBid): {
                        typeUrl: string;
                        value: _84.MsgCloseBid;
                    };
                    withdrawLease(value: _86.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _86.MsgWithdrawLease;
                    };
                    createLease(value: _86.MsgCreateLease): {
                        typeUrl: string;
                        value: _86.MsgCreateLease;
                    };
                    closeLease(value: _86.MsgCloseLease): {
                        typeUrl: string;
                        value: _86.MsgCloseLease;
                    };
                };
            };
            AminoConverter: {
                "/akash.market.v1beta3.MsgCreateBid": {
                    aminoType: string;
                    toAmino: (message: _84.MsgCreateBid) => _84.MsgCreateBidAmino;
                    fromAmino: (object: _84.MsgCreateBidAmino) => _84.MsgCreateBid;
                };
                "/akash.market.v1beta3.MsgCloseBid": {
                    aminoType: string;
                    toAmino: (message: _84.MsgCloseBid) => _84.MsgCloseBidAmino;
                    fromAmino: (object: _84.MsgCloseBidAmino) => _84.MsgCloseBid;
                };
                "/akash.market.v1beta3.MsgWithdrawLease": {
                    aminoType: string;
                    toAmino: (message: _86.MsgWithdrawLease) => _86.MsgWithdrawLeaseAmino;
                    fromAmino: (object: _86.MsgWithdrawLeaseAmino) => _86.MsgWithdrawLease;
                };
                "/akash.market.v1beta3.MsgCreateLease": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateLease) => _86.MsgCreateLeaseAmino;
                    fromAmino: (object: _86.MsgCreateLeaseAmino) => _86.MsgCreateLease;
                };
                "/akash.market.v1beta3.MsgCloseLease": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCloseLease) => _86.MsgCloseLeaseAmino;
                    fromAmino: (object: _86.MsgCloseLeaseAmino) => _86.MsgCloseLease;
                };
            };
            QueryOrdersRequest: {
                typeUrl: string;
                encode(message: _89.QueryOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryOrdersRequest;
                fromPartial(object: Partial<_89.QueryOrdersRequest>): _89.QueryOrdersRequest;
                fromAmino(object: _89.QueryOrdersRequestAmino): _89.QueryOrdersRequest;
                toAmino(message: _89.QueryOrdersRequest): _89.QueryOrdersRequestAmino;
                fromAminoMsg(object: _89.QueryOrdersRequestAminoMsg): _89.QueryOrdersRequest;
                fromProtoMsg(message: _89.QueryOrdersRequestProtoMsg): _89.QueryOrdersRequest;
                toProto(message: _89.QueryOrdersRequest): Uint8Array;
                toProtoMsg(message: _89.QueryOrdersRequest): _89.QueryOrdersRequestProtoMsg;
            };
            QueryOrdersResponse: {
                typeUrl: string;
                encode(message: _89.QueryOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryOrdersResponse;
                fromPartial(object: Partial<_89.QueryOrdersResponse>): _89.QueryOrdersResponse;
                fromAmino(object: _89.QueryOrdersResponseAmino): _89.QueryOrdersResponse;
                toAmino(message: _89.QueryOrdersResponse): _89.QueryOrdersResponseAmino;
                fromAminoMsg(object: _89.QueryOrdersResponseAminoMsg): _89.QueryOrdersResponse;
                fromProtoMsg(message: _89.QueryOrdersResponseProtoMsg): _89.QueryOrdersResponse;
                toProto(message: _89.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _89.QueryOrdersResponse): _89.QueryOrdersResponseProtoMsg;
            };
            QueryOrderRequest: {
                typeUrl: string;
                encode(message: _89.QueryOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryOrderRequest;
                fromPartial(object: Partial<_89.QueryOrderRequest>): _89.QueryOrderRequest;
                fromAmino(object: _89.QueryOrderRequestAmino): _89.QueryOrderRequest;
                toAmino(message: _89.QueryOrderRequest): _89.QueryOrderRequestAmino;
                fromAminoMsg(object: _89.QueryOrderRequestAminoMsg): _89.QueryOrderRequest;
                fromProtoMsg(message: _89.QueryOrderRequestProtoMsg): _89.QueryOrderRequest;
                toProto(message: _89.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _89.QueryOrderRequest): _89.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                typeUrl: string;
                encode(message: _89.QueryOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryOrderResponse;
                fromPartial(object: Partial<_89.QueryOrderResponse>): _89.QueryOrderResponse;
                fromAmino(object: _89.QueryOrderResponseAmino): _89.QueryOrderResponse;
                toAmino(message: _89.QueryOrderResponse): _89.QueryOrderResponseAmino;
                fromAminoMsg(object: _89.QueryOrderResponseAminoMsg): _89.QueryOrderResponse;
                fromProtoMsg(message: _89.QueryOrderResponseProtoMsg): _89.QueryOrderResponse;
                toProto(message: _89.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _89.QueryOrderResponse): _89.QueryOrderResponseProtoMsg;
            };
            QueryBidsRequest: {
                typeUrl: string;
                encode(message: _89.QueryBidsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryBidsRequest;
                fromPartial(object: Partial<_89.QueryBidsRequest>): _89.QueryBidsRequest;
                fromAmino(object: _89.QueryBidsRequestAmino): _89.QueryBidsRequest;
                toAmino(message: _89.QueryBidsRequest): _89.QueryBidsRequestAmino;
                fromAminoMsg(object: _89.QueryBidsRequestAminoMsg): _89.QueryBidsRequest;
                fromProtoMsg(message: _89.QueryBidsRequestProtoMsg): _89.QueryBidsRequest;
                toProto(message: _89.QueryBidsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryBidsRequest): _89.QueryBidsRequestProtoMsg;
            };
            QueryBidsResponse: {
                typeUrl: string;
                encode(message: _89.QueryBidsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryBidsResponse;
                fromPartial(object: Partial<_89.QueryBidsResponse>): _89.QueryBidsResponse;
                fromAmino(object: _89.QueryBidsResponseAmino): _89.QueryBidsResponse;
                toAmino(message: _89.QueryBidsResponse): _89.QueryBidsResponseAmino;
                fromAminoMsg(object: _89.QueryBidsResponseAminoMsg): _89.QueryBidsResponse;
                fromProtoMsg(message: _89.QueryBidsResponseProtoMsg): _89.QueryBidsResponse;
                toProto(message: _89.QueryBidsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryBidsResponse): _89.QueryBidsResponseProtoMsg;
            };
            QueryBidRequest: {
                typeUrl: string;
                encode(message: _89.QueryBidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryBidRequest;
                fromPartial(object: Partial<_89.QueryBidRequest>): _89.QueryBidRequest;
                fromAmino(object: _89.QueryBidRequestAmino): _89.QueryBidRequest;
                toAmino(message: _89.QueryBidRequest): _89.QueryBidRequestAmino;
                fromAminoMsg(object: _89.QueryBidRequestAminoMsg): _89.QueryBidRequest;
                fromProtoMsg(message: _89.QueryBidRequestProtoMsg): _89.QueryBidRequest;
                toProto(message: _89.QueryBidRequest): Uint8Array;
                toProtoMsg(message: _89.QueryBidRequest): _89.QueryBidRequestProtoMsg;
            };
            QueryBidResponse: {
                typeUrl: string;
                encode(message: _89.QueryBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryBidResponse;
                fromPartial(object: Partial<_89.QueryBidResponse>): _89.QueryBidResponse;
                fromAmino(object: _89.QueryBidResponseAmino): _89.QueryBidResponse;
                toAmino(message: _89.QueryBidResponse): _89.QueryBidResponseAmino;
                fromAminoMsg(object: _89.QueryBidResponseAminoMsg): _89.QueryBidResponse;
                fromProtoMsg(message: _89.QueryBidResponseProtoMsg): _89.QueryBidResponse;
                toProto(message: _89.QueryBidResponse): Uint8Array;
                toProtoMsg(message: _89.QueryBidResponse): _89.QueryBidResponseProtoMsg;
            };
            QueryLeasesRequest: {
                typeUrl: string;
                encode(message: _89.QueryLeasesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryLeasesRequest;
                fromPartial(object: Partial<_89.QueryLeasesRequest>): _89.QueryLeasesRequest;
                fromAmino(object: _89.QueryLeasesRequestAmino): _89.QueryLeasesRequest;
                toAmino(message: _89.QueryLeasesRequest): _89.QueryLeasesRequestAmino;
                fromAminoMsg(object: _89.QueryLeasesRequestAminoMsg): _89.QueryLeasesRequest;
                fromProtoMsg(message: _89.QueryLeasesRequestProtoMsg): _89.QueryLeasesRequest;
                toProto(message: _89.QueryLeasesRequest): Uint8Array;
                toProtoMsg(message: _89.QueryLeasesRequest): _89.QueryLeasesRequestProtoMsg;
            };
            QueryLeasesResponse: {
                typeUrl: string;
                encode(message: _89.QueryLeasesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryLeasesResponse;
                fromPartial(object: Partial<_89.QueryLeasesResponse>): _89.QueryLeasesResponse;
                fromAmino(object: _89.QueryLeasesResponseAmino): _89.QueryLeasesResponse;
                toAmino(message: _89.QueryLeasesResponse): _89.QueryLeasesResponseAmino;
                fromAminoMsg(object: _89.QueryLeasesResponseAminoMsg): _89.QueryLeasesResponse;
                fromProtoMsg(message: _89.QueryLeasesResponseProtoMsg): _89.QueryLeasesResponse;
                toProto(message: _89.QueryLeasesResponse): Uint8Array;
                toProtoMsg(message: _89.QueryLeasesResponse): _89.QueryLeasesResponseProtoMsg;
            };
            QueryLeaseRequest: {
                typeUrl: string;
                encode(message: _89.QueryLeaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryLeaseRequest;
                fromPartial(object: Partial<_89.QueryLeaseRequest>): _89.QueryLeaseRequest;
                fromAmino(object: _89.QueryLeaseRequestAmino): _89.QueryLeaseRequest;
                toAmino(message: _89.QueryLeaseRequest): _89.QueryLeaseRequestAmino;
                fromAminoMsg(object: _89.QueryLeaseRequestAminoMsg): _89.QueryLeaseRequest;
                fromProtoMsg(message: _89.QueryLeaseRequestProtoMsg): _89.QueryLeaseRequest;
                toProto(message: _89.QueryLeaseRequest): Uint8Array;
                toProtoMsg(message: _89.QueryLeaseRequest): _89.QueryLeaseRequestProtoMsg;
            };
            QueryLeaseResponse: {
                typeUrl: string;
                encode(message: _89.QueryLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _89.QueryLeaseResponse;
                fromPartial(object: Partial<_89.QueryLeaseResponse>): _89.QueryLeaseResponse;
                fromAmino(object: _89.QueryLeaseResponseAmino): _89.QueryLeaseResponse;
                toAmino(message: _89.QueryLeaseResponse): _89.QueryLeaseResponseAmino;
                fromAminoMsg(object: _89.QueryLeaseResponseAminoMsg): _89.QueryLeaseResponse;
                fromProtoMsg(message: _89.QueryLeaseResponseProtoMsg): _89.QueryLeaseResponse;
                toProto(message: _89.QueryLeaseResponse): Uint8Array;
                toProtoMsg(message: _89.QueryLeaseResponse): _89.QueryLeaseResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _88.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _88.Params;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
            order_StateFromJSON(object: any): _87.Order_State;
            order_StateToJSON(object: _87.Order_State): string;
            Order_State: typeof _87.Order_State;
            Order_StateSDKType: typeof _87.Order_State;
            Order_StateAmino: typeof _87.Order_State;
            OrderID: {
                typeUrl: string;
                encode(message: _87.OrderID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.OrderID;
                fromPartial(object: Partial<_87.OrderID>): _87.OrderID;
                fromAmino(object: _87.OrderIDAmino): _87.OrderID;
                toAmino(message: _87.OrderID): _87.OrderIDAmino;
                fromAminoMsg(object: _87.OrderIDAminoMsg): _87.OrderID;
                fromProtoMsg(message: _87.OrderIDProtoMsg): _87.OrderID;
                toProto(message: _87.OrderID): Uint8Array;
                toProtoMsg(message: _87.OrderID): _87.OrderIDProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _87.Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.Order;
                fromPartial(object: Partial<_87.Order>): _87.Order;
                fromAmino(object: _87.OrderAmino): _87.Order;
                toAmino(message: _87.Order): _87.OrderAmino;
                fromAminoMsg(object: _87.OrderAminoMsg): _87.Order;
                fromProtoMsg(message: _87.OrderProtoMsg): _87.Order;
                toProto(message: _87.Order): Uint8Array;
                toProtoMsg(message: _87.Order): _87.OrderProtoMsg;
            };
            OrderFilters: {
                typeUrl: string;
                encode(message: _87.OrderFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _87.OrderFilters;
                fromPartial(object: Partial<_87.OrderFilters>): _87.OrderFilters;
                fromAmino(object: _87.OrderFiltersAmino): _87.OrderFilters;
                toAmino(message: _87.OrderFilters): _87.OrderFiltersAmino;
                fromAminoMsg(object: _87.OrderFiltersAminoMsg): _87.OrderFilters;
                fromProtoMsg(message: _87.OrderFiltersProtoMsg): _87.OrderFilters;
                toProto(message: _87.OrderFilters): Uint8Array;
                toProtoMsg(message: _87.OrderFilters): _87.OrderFiltersProtoMsg;
            };
            lease_StateFromJSON(object: any): _86.Lease_State;
            lease_StateToJSON(object: _86.Lease_State): string;
            Lease_State: typeof _86.Lease_State;
            Lease_StateSDKType: typeof _86.Lease_State;
            Lease_StateAmino: typeof _86.Lease_State;
            LeaseID: {
                typeUrl: string;
                encode(message: _86.LeaseID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.LeaseID;
                fromPartial(object: Partial<_86.LeaseID>): _86.LeaseID;
                fromAmino(object: _86.LeaseIDAmino): _86.LeaseID;
                toAmino(message: _86.LeaseID): _86.LeaseIDAmino;
                fromAminoMsg(object: _86.LeaseIDAminoMsg): _86.LeaseID;
                fromProtoMsg(message: _86.LeaseIDProtoMsg): _86.LeaseID;
                toProto(message: _86.LeaseID): Uint8Array;
                toProtoMsg(message: _86.LeaseID): _86.LeaseIDProtoMsg;
            };
            Lease: {
                typeUrl: string;
                encode(message: _86.Lease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.Lease;
                fromPartial(object: Partial<_86.Lease>): _86.Lease;
                fromAmino(object: _86.LeaseAmino): _86.Lease;
                toAmino(message: _86.Lease): _86.LeaseAmino;
                fromAminoMsg(object: _86.LeaseAminoMsg): _86.Lease;
                fromProtoMsg(message: _86.LeaseProtoMsg): _86.Lease;
                toProto(message: _86.Lease): Uint8Array;
                toProtoMsg(message: _86.Lease): _86.LeaseProtoMsg;
            };
            LeaseFilters: {
                typeUrl: string;
                encode(message: _86.LeaseFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.LeaseFilters;
                fromPartial(object: Partial<_86.LeaseFilters>): _86.LeaseFilters;
                fromAmino(object: _86.LeaseFiltersAmino): _86.LeaseFilters;
                toAmino(message: _86.LeaseFilters): _86.LeaseFiltersAmino;
                fromAminoMsg(object: _86.LeaseFiltersAminoMsg): _86.LeaseFilters;
                fromProtoMsg(message: _86.LeaseFiltersProtoMsg): _86.LeaseFilters;
                toProto(message: _86.LeaseFilters): Uint8Array;
                toProtoMsg(message: _86.LeaseFilters): _86.LeaseFiltersProtoMsg;
            };
            MsgCreateLease: {
                typeUrl: string;
                encode(message: _86.MsgCreateLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCreateLease;
                fromPartial(object: Partial<_86.MsgCreateLease>): _86.MsgCreateLease;
                fromAmino(object: _86.MsgCreateLeaseAmino): _86.MsgCreateLease;
                toAmino(message: _86.MsgCreateLease): _86.MsgCreateLeaseAmino;
                fromAminoMsg(object: _86.MsgCreateLeaseAminoMsg): _86.MsgCreateLease;
                fromProtoMsg(message: _86.MsgCreateLeaseProtoMsg): _86.MsgCreateLease;
                toProto(message: _86.MsgCreateLease): Uint8Array;
                toProtoMsg(message: _86.MsgCreateLease): _86.MsgCreateLeaseProtoMsg;
            };
            MsgCreateLeaseResponse: {
                typeUrl: string;
                encode(_: _86.MsgCreateLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgCreateLeaseResponse;
                fromPartial(_: Partial<_86.MsgCreateLeaseResponse>): _86.MsgCreateLeaseResponse;
                fromAmino(_: _86.MsgCreateLeaseResponseAmino): _86.MsgCreateLeaseResponse;
                toAmino(_: _86.MsgCreateLeaseResponse): _86.MsgCreateLeaseResponseAmino;
                fromAminoMsg(object: _86.MsgCreateLeaseResponseAminoMsg): _86.MsgCreateLeaseResponse;
                fromProtoMsg(message: _86.MsgCreateLeaseResponseProtoMsg): _86.MsgCreateLeaseResponse;
                toProto(message: _86.MsgCreateLeaseResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateLeaseResponse): _86.MsgCreateLeaseResponseProtoMsg;
            };
            MsgWithdrawLease: {
                typeUrl: string;
                encode(message: _86.MsgWithdrawLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgWithdrawLease;
                fromPartial(object: Partial<_86.MsgWithdrawLease>): _86.MsgWithdrawLease;
                fromAmino(object: _86.MsgWithdrawLeaseAmino): _86.MsgWithdrawLease;
                toAmino(message: _86.MsgWithdrawLease): _86.MsgWithdrawLeaseAmino;
                fromAminoMsg(object: _86.MsgWithdrawLeaseAminoMsg): _86.MsgWithdrawLease;
                fromProtoMsg(message: _86.MsgWithdrawLeaseProtoMsg): _86.MsgWithdrawLease;
                toProto(message: _86.MsgWithdrawLease): Uint8Array;
                toProtoMsg(message: _86.MsgWithdrawLease): _86.MsgWithdrawLeaseProtoMsg;
            };
            MsgWithdrawLeaseResponse: {
                typeUrl: string;
                encode(_: _86.MsgWithdrawLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgWithdrawLeaseResponse;
                fromPartial(_: Partial<_86.MsgWithdrawLeaseResponse>): _86.MsgWithdrawLeaseResponse;
                fromAmino(_: _86.MsgWithdrawLeaseResponseAmino): _86.MsgWithdrawLeaseResponse;
                toAmino(_: _86.MsgWithdrawLeaseResponse): _86.MsgWithdrawLeaseResponseAmino;
                fromAminoMsg(object: _86.MsgWithdrawLeaseResponseAminoMsg): _86.MsgWithdrawLeaseResponse;
                fromProtoMsg(message: _86.MsgWithdrawLeaseResponseProtoMsg): _86.MsgWithdrawLeaseResponse;
                toProto(message: _86.MsgWithdrawLeaseResponse): Uint8Array;
                toProtoMsg(message: _86.MsgWithdrawLeaseResponse): _86.MsgWithdrawLeaseResponseProtoMsg;
            };
            MsgCloseLease: {
                typeUrl: string;
                encode(message: _86.MsgCloseLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _86.MsgCloseLease;
                fromPartial(object: Partial<_86.MsgCloseLease>): _86.MsgCloseLease;
                fromAmino(object: _86.MsgCloseLeaseAmino): _86.MsgCloseLease;
                toAmino(message: _86.MsgCloseLease): _86.MsgCloseLeaseAmino;
                fromAminoMsg(object: _86.MsgCloseLeaseAminoMsg): _86.MsgCloseLease;
                fromProtoMsg(message: _86.MsgCloseLeaseProtoMsg): _86.MsgCloseLease;
                toProto(message: _86.MsgCloseLease): Uint8Array;
                toProtoMsg(message: _86.MsgCloseLease): _86.MsgCloseLeaseProtoMsg;
            };
            MsgCloseLeaseResponse: {
                typeUrl: string;
                encode(_: _86.MsgCloseLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _86.MsgCloseLeaseResponse;
                fromPartial(_: Partial<_86.MsgCloseLeaseResponse>): _86.MsgCloseLeaseResponse;
                fromAmino(_: _86.MsgCloseLeaseResponseAmino): _86.MsgCloseLeaseResponse;
                toAmino(_: _86.MsgCloseLeaseResponse): _86.MsgCloseLeaseResponseAmino;
                fromAminoMsg(object: _86.MsgCloseLeaseResponseAminoMsg): _86.MsgCloseLeaseResponse;
                fromProtoMsg(message: _86.MsgCloseLeaseResponseProtoMsg): _86.MsgCloseLeaseResponse;
                toProto(message: _86.MsgCloseLeaseResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCloseLeaseResponse): _86.MsgCloseLeaseResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _85.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _85.GenesisState;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
                fromAmino(object: _85.GenesisStateAmino): _85.GenesisState;
                toAmino(message: _85.GenesisState): _85.GenesisStateAmino;
                fromAminoMsg(object: _85.GenesisStateAminoMsg): _85.GenesisState;
                fromProtoMsg(message: _85.GenesisStateProtoMsg): _85.GenesisState;
                toProto(message: _85.GenesisState): Uint8Array;
                toProtoMsg(message: _85.GenesisState): _85.GenesisStateProtoMsg;
            };
            bid_StateFromJSON(object: any): _84.Bid_State;
            bid_StateToJSON(object: _84.Bid_State): string;
            Bid_State: typeof _84.Bid_State;
            Bid_StateSDKType: typeof _84.Bid_State;
            Bid_StateAmino: typeof _84.Bid_State;
            MsgCreateBid: {
                typeUrl: string;
                encode(message: _84.MsgCreateBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgCreateBid;
                fromPartial(object: Partial<_84.MsgCreateBid>): _84.MsgCreateBid;
                fromAmino(object: _84.MsgCreateBidAmino): _84.MsgCreateBid;
                toAmino(message: _84.MsgCreateBid): _84.MsgCreateBidAmino;
                fromAminoMsg(object: _84.MsgCreateBidAminoMsg): _84.MsgCreateBid;
                fromProtoMsg(message: _84.MsgCreateBidProtoMsg): _84.MsgCreateBid;
                toProto(message: _84.MsgCreateBid): Uint8Array;
                toProtoMsg(message: _84.MsgCreateBid): _84.MsgCreateBidProtoMsg;
            };
            MsgCreateBidResponse: {
                typeUrl: string;
                encode(_: _84.MsgCreateBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgCreateBidResponse;
                fromPartial(_: Partial<_84.MsgCreateBidResponse>): _84.MsgCreateBidResponse;
                fromAmino(_: _84.MsgCreateBidResponseAmino): _84.MsgCreateBidResponse;
                toAmino(_: _84.MsgCreateBidResponse): _84.MsgCreateBidResponseAmino;
                fromAminoMsg(object: _84.MsgCreateBidResponseAminoMsg): _84.MsgCreateBidResponse;
                fromProtoMsg(message: _84.MsgCreateBidResponseProtoMsg): _84.MsgCreateBidResponse;
                toProto(message: _84.MsgCreateBidResponse): Uint8Array;
                toProtoMsg(message: _84.MsgCreateBidResponse): _84.MsgCreateBidResponseProtoMsg;
            };
            MsgCloseBid: {
                typeUrl: string;
                encode(message: _84.MsgCloseBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.MsgCloseBid;
                fromPartial(object: Partial<_84.MsgCloseBid>): _84.MsgCloseBid;
                fromAmino(object: _84.MsgCloseBidAmino): _84.MsgCloseBid;
                toAmino(message: _84.MsgCloseBid): _84.MsgCloseBidAmino;
                fromAminoMsg(object: _84.MsgCloseBidAminoMsg): _84.MsgCloseBid;
                fromProtoMsg(message: _84.MsgCloseBidProtoMsg): _84.MsgCloseBid;
                toProto(message: _84.MsgCloseBid): Uint8Array;
                toProtoMsg(message: _84.MsgCloseBid): _84.MsgCloseBidProtoMsg;
            };
            MsgCloseBidResponse: {
                typeUrl: string;
                encode(_: _84.MsgCloseBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _84.MsgCloseBidResponse;
                fromPartial(_: Partial<_84.MsgCloseBidResponse>): _84.MsgCloseBidResponse;
                fromAmino(_: _84.MsgCloseBidResponseAmino): _84.MsgCloseBidResponse;
                toAmino(_: _84.MsgCloseBidResponse): _84.MsgCloseBidResponseAmino;
                fromAminoMsg(object: _84.MsgCloseBidResponseAminoMsg): _84.MsgCloseBidResponse;
                fromProtoMsg(message: _84.MsgCloseBidResponseProtoMsg): _84.MsgCloseBidResponse;
                toProto(message: _84.MsgCloseBidResponse): Uint8Array;
                toProtoMsg(message: _84.MsgCloseBidResponse): _84.MsgCloseBidResponseProtoMsg;
            };
            BidID: {
                typeUrl: string;
                encode(message: _84.BidID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.BidID;
                fromPartial(object: Partial<_84.BidID>): _84.BidID;
                fromAmino(object: _84.BidIDAmino): _84.BidID;
                toAmino(message: _84.BidID): _84.BidIDAmino;
                fromAminoMsg(object: _84.BidIDAminoMsg): _84.BidID;
                fromProtoMsg(message: _84.BidIDProtoMsg): _84.BidID;
                toProto(message: _84.BidID): Uint8Array;
                toProtoMsg(message: _84.BidID): _84.BidIDProtoMsg;
            };
            Bid: {
                typeUrl: string;
                encode(message: _84.Bid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.Bid;
                fromPartial(object: Partial<_84.Bid>): _84.Bid;
                fromAmino(object: _84.BidAmino): _84.Bid;
                toAmino(message: _84.Bid): _84.BidAmino;
                fromAminoMsg(object: _84.BidAminoMsg): _84.Bid;
                fromProtoMsg(message: _84.BidProtoMsg): _84.Bid;
                toProto(message: _84.Bid): Uint8Array;
                toProtoMsg(message: _84.Bid): _84.BidProtoMsg;
            };
            BidFilters: {
                typeUrl: string;
                encode(message: _84.BidFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _84.BidFilters;
                fromPartial(object: Partial<_84.BidFilters>): _84.BidFilters;
                fromAmino(object: _84.BidFiltersAmino): _84.BidFilters;
                toAmino(message: _84.BidFilters): _84.BidFiltersAmino;
                fromAminoMsg(object: _84.BidFiltersAminoMsg): _84.BidFilters;
                fromProtoMsg(message: _84.BidFiltersProtoMsg): _84.BidFilters;
                toProto(message: _84.BidFilters): Uint8Array;
                toProtoMsg(message: _84.BidFilters): _84.BidFiltersProtoMsg;
            };
        };
        const v1beta4: {
            MsgClientImpl: typeof _281.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                orders(request: _96.QueryOrdersRequest): Promise<_96.QueryOrdersResponse>;
                order(request: _96.QueryOrderRequest): Promise<_96.QueryOrderResponse>;
                bids(request: _96.QueryBidsRequest): Promise<_96.QueryBidsResponse>;
                bid(request: _96.QueryBidRequest): Promise<_96.QueryBidResponse>;
                leases(request: _96.QueryLeasesRequest): Promise<_96.QueryLeasesResponse>;
                lease(request: _96.QueryLeaseRequest): Promise<_96.QueryLeaseResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBid(value: _91.MsgCreateBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeBid(value: _91.MsgCloseBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawLease(value: _93.MsgWithdrawLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createLease(value: _93.MsgCreateLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeLease(value: _93.MsgCloseLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBid(value: _91.MsgCreateBid): {
                        typeUrl: string;
                        value: _91.MsgCreateBid;
                    };
                    closeBid(value: _91.MsgCloseBid): {
                        typeUrl: string;
                        value: _91.MsgCloseBid;
                    };
                    withdrawLease(value: _93.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _93.MsgWithdrawLease;
                    };
                    createLease(value: _93.MsgCreateLease): {
                        typeUrl: string;
                        value: _93.MsgCreateLease;
                    };
                    closeLease(value: _93.MsgCloseLease): {
                        typeUrl: string;
                        value: _93.MsgCloseLease;
                    };
                };
                fromJSON: {
                    createBid(value: any): {
                        typeUrl: string;
                        value: _91.MsgCreateBid;
                    };
                    closeBid(value: any): {
                        typeUrl: string;
                        value: _91.MsgCloseBid;
                    };
                    withdrawLease(value: any): {
                        typeUrl: string;
                        value: _93.MsgWithdrawLease;
                    };
                    createLease(value: any): {
                        typeUrl: string;
                        value: _93.MsgCreateLease;
                    };
                    closeLease(value: any): {
                        typeUrl: string;
                        value: _93.MsgCloseLease;
                    };
                };
                fromPartial: {
                    createBid(value: _91.MsgCreateBid): {
                        typeUrl: string;
                        value: _91.MsgCreateBid;
                    };
                    closeBid(value: _91.MsgCloseBid): {
                        typeUrl: string;
                        value: _91.MsgCloseBid;
                    };
                    withdrawLease(value: _93.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _93.MsgWithdrawLease;
                    };
                    createLease(value: _93.MsgCreateLease): {
                        typeUrl: string;
                        value: _93.MsgCreateLease;
                    };
                    closeLease(value: _93.MsgCloseLease): {
                        typeUrl: string;
                        value: _93.MsgCloseLease;
                    };
                };
            };
            AminoConverter: {
                "/akash.market.v1beta4.MsgCreateBid": {
                    aminoType: string;
                    toAmino: (message: _91.MsgCreateBid) => _91.MsgCreateBidAmino;
                    fromAmino: (object: _91.MsgCreateBidAmino) => _91.MsgCreateBid;
                };
                "/akash.market.v1beta4.MsgCloseBid": {
                    aminoType: string;
                    toAmino: (message: _91.MsgCloseBid) => _91.MsgCloseBidAmino;
                    fromAmino: (object: _91.MsgCloseBidAmino) => _91.MsgCloseBid;
                };
                "/akash.market.v1beta4.MsgWithdrawLease": {
                    aminoType: string;
                    toAmino: (message: _93.MsgWithdrawLease) => _93.MsgWithdrawLeaseAmino;
                    fromAmino: (object: _93.MsgWithdrawLeaseAmino) => _93.MsgWithdrawLease;
                };
                "/akash.market.v1beta4.MsgCreateLease": {
                    aminoType: string;
                    toAmino: (message: _93.MsgCreateLease) => _93.MsgCreateLeaseAmino;
                    fromAmino: (object: _93.MsgCreateLeaseAmino) => _93.MsgCreateLease;
                };
                "/akash.market.v1beta4.MsgCloseLease": {
                    aminoType: string;
                    toAmino: (message: _93.MsgCloseLease) => _93.MsgCloseLeaseAmino;
                    fromAmino: (object: _93.MsgCloseLeaseAmino) => _93.MsgCloseLease;
                };
            };
            QueryOrdersRequest: {
                typeUrl: string;
                encode(message: _96.QueryOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryOrdersRequest;
                fromPartial(object: Partial<_96.QueryOrdersRequest>): _96.QueryOrdersRequest;
                fromAmino(object: _96.QueryOrdersRequestAmino): _96.QueryOrdersRequest;
                toAmino(message: _96.QueryOrdersRequest): _96.QueryOrdersRequestAmino;
                fromAminoMsg(object: _96.QueryOrdersRequestAminoMsg): _96.QueryOrdersRequest;
                fromProtoMsg(message: _96.QueryOrdersRequestProtoMsg): _96.QueryOrdersRequest;
                toProto(message: _96.QueryOrdersRequest): Uint8Array;
                toProtoMsg(message: _96.QueryOrdersRequest): _96.QueryOrdersRequestProtoMsg;
            };
            QueryOrdersResponse: {
                typeUrl: string;
                encode(message: _96.QueryOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryOrdersResponse;
                fromPartial(object: Partial<_96.QueryOrdersResponse>): _96.QueryOrdersResponse;
                fromAmino(object: _96.QueryOrdersResponseAmino): _96.QueryOrdersResponse;
                toAmino(message: _96.QueryOrdersResponse): _96.QueryOrdersResponseAmino;
                fromAminoMsg(object: _96.QueryOrdersResponseAminoMsg): _96.QueryOrdersResponse;
                fromProtoMsg(message: _96.QueryOrdersResponseProtoMsg): _96.QueryOrdersResponse;
                toProto(message: _96.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _96.QueryOrdersResponse): _96.QueryOrdersResponseProtoMsg;
            };
            QueryOrderRequest: {
                typeUrl: string;
                encode(message: _96.QueryOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryOrderRequest;
                fromPartial(object: Partial<_96.QueryOrderRequest>): _96.QueryOrderRequest;
                fromAmino(object: _96.QueryOrderRequestAmino): _96.QueryOrderRequest;
                toAmino(message: _96.QueryOrderRequest): _96.QueryOrderRequestAmino;
                fromAminoMsg(object: _96.QueryOrderRequestAminoMsg): _96.QueryOrderRequest;
                fromProtoMsg(message: _96.QueryOrderRequestProtoMsg): _96.QueryOrderRequest;
                toProto(message: _96.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _96.QueryOrderRequest): _96.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                typeUrl: string;
                encode(message: _96.QueryOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryOrderResponse;
                fromPartial(object: Partial<_96.QueryOrderResponse>): _96.QueryOrderResponse;
                fromAmino(object: _96.QueryOrderResponseAmino): _96.QueryOrderResponse;
                toAmino(message: _96.QueryOrderResponse): _96.QueryOrderResponseAmino;
                fromAminoMsg(object: _96.QueryOrderResponseAminoMsg): _96.QueryOrderResponse;
                fromProtoMsg(message: _96.QueryOrderResponseProtoMsg): _96.QueryOrderResponse;
                toProto(message: _96.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _96.QueryOrderResponse): _96.QueryOrderResponseProtoMsg;
            };
            QueryBidsRequest: {
                typeUrl: string;
                encode(message: _96.QueryBidsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryBidsRequest;
                fromPartial(object: Partial<_96.QueryBidsRequest>): _96.QueryBidsRequest;
                fromAmino(object: _96.QueryBidsRequestAmino): _96.QueryBidsRequest;
                toAmino(message: _96.QueryBidsRequest): _96.QueryBidsRequestAmino;
                fromAminoMsg(object: _96.QueryBidsRequestAminoMsg): _96.QueryBidsRequest;
                fromProtoMsg(message: _96.QueryBidsRequestProtoMsg): _96.QueryBidsRequest;
                toProto(message: _96.QueryBidsRequest): Uint8Array;
                toProtoMsg(message: _96.QueryBidsRequest): _96.QueryBidsRequestProtoMsg;
            };
            QueryBidsResponse: {
                typeUrl: string;
                encode(message: _96.QueryBidsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryBidsResponse;
                fromPartial(object: Partial<_96.QueryBidsResponse>): _96.QueryBidsResponse;
                fromAmino(object: _96.QueryBidsResponseAmino): _96.QueryBidsResponse;
                toAmino(message: _96.QueryBidsResponse): _96.QueryBidsResponseAmino;
                fromAminoMsg(object: _96.QueryBidsResponseAminoMsg): _96.QueryBidsResponse;
                fromProtoMsg(message: _96.QueryBidsResponseProtoMsg): _96.QueryBidsResponse;
                toProto(message: _96.QueryBidsResponse): Uint8Array;
                toProtoMsg(message: _96.QueryBidsResponse): _96.QueryBidsResponseProtoMsg;
            };
            QueryBidRequest: {
                typeUrl: string;
                encode(message: _96.QueryBidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryBidRequest;
                fromPartial(object: Partial<_96.QueryBidRequest>): _96.QueryBidRequest;
                fromAmino(object: _96.QueryBidRequestAmino): _96.QueryBidRequest;
                toAmino(message: _96.QueryBidRequest): _96.QueryBidRequestAmino;
                fromAminoMsg(object: _96.QueryBidRequestAminoMsg): _96.QueryBidRequest;
                fromProtoMsg(message: _96.QueryBidRequestProtoMsg): _96.QueryBidRequest;
                toProto(message: _96.QueryBidRequest): Uint8Array;
                toProtoMsg(message: _96.QueryBidRequest): _96.QueryBidRequestProtoMsg;
            };
            QueryBidResponse: {
                typeUrl: string;
                encode(message: _96.QueryBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryBidResponse;
                fromPartial(object: Partial<_96.QueryBidResponse>): _96.QueryBidResponse;
                fromAmino(object: _96.QueryBidResponseAmino): _96.QueryBidResponse;
                toAmino(message: _96.QueryBidResponse): _96.QueryBidResponseAmino;
                fromAminoMsg(object: _96.QueryBidResponseAminoMsg): _96.QueryBidResponse;
                fromProtoMsg(message: _96.QueryBidResponseProtoMsg): _96.QueryBidResponse;
                toProto(message: _96.QueryBidResponse): Uint8Array;
                toProtoMsg(message: _96.QueryBidResponse): _96.QueryBidResponseProtoMsg;
            };
            QueryLeasesRequest: {
                typeUrl: string;
                encode(message: _96.QueryLeasesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryLeasesRequest;
                fromPartial(object: Partial<_96.QueryLeasesRequest>): _96.QueryLeasesRequest;
                fromAmino(object: _96.QueryLeasesRequestAmino): _96.QueryLeasesRequest;
                toAmino(message: _96.QueryLeasesRequest): _96.QueryLeasesRequestAmino;
                fromAminoMsg(object: _96.QueryLeasesRequestAminoMsg): _96.QueryLeasesRequest;
                fromProtoMsg(message: _96.QueryLeasesRequestProtoMsg): _96.QueryLeasesRequest;
                toProto(message: _96.QueryLeasesRequest): Uint8Array;
                toProtoMsg(message: _96.QueryLeasesRequest): _96.QueryLeasesRequestProtoMsg;
            };
            QueryLeasesResponse: {
                typeUrl: string;
                encode(message: _96.QueryLeasesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryLeasesResponse;
                fromPartial(object: Partial<_96.QueryLeasesResponse>): _96.QueryLeasesResponse;
                fromAmino(object: _96.QueryLeasesResponseAmino): _96.QueryLeasesResponse;
                toAmino(message: _96.QueryLeasesResponse): _96.QueryLeasesResponseAmino;
                fromAminoMsg(object: _96.QueryLeasesResponseAminoMsg): _96.QueryLeasesResponse;
                fromProtoMsg(message: _96.QueryLeasesResponseProtoMsg): _96.QueryLeasesResponse;
                toProto(message: _96.QueryLeasesResponse): Uint8Array;
                toProtoMsg(message: _96.QueryLeasesResponse): _96.QueryLeasesResponseProtoMsg;
            };
            QueryLeaseRequest: {
                typeUrl: string;
                encode(message: _96.QueryLeaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryLeaseRequest;
                fromPartial(object: Partial<_96.QueryLeaseRequest>): _96.QueryLeaseRequest;
                fromAmino(object: _96.QueryLeaseRequestAmino): _96.QueryLeaseRequest;
                toAmino(message: _96.QueryLeaseRequest): _96.QueryLeaseRequestAmino;
                fromAminoMsg(object: _96.QueryLeaseRequestAminoMsg): _96.QueryLeaseRequest;
                fromProtoMsg(message: _96.QueryLeaseRequestProtoMsg): _96.QueryLeaseRequest;
                toProto(message: _96.QueryLeaseRequest): Uint8Array;
                toProtoMsg(message: _96.QueryLeaseRequest): _96.QueryLeaseRequestProtoMsg;
            };
            QueryLeaseResponse: {
                typeUrl: string;
                encode(message: _96.QueryLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryLeaseResponse;
                fromPartial(object: Partial<_96.QueryLeaseResponse>): _96.QueryLeaseResponse;
                fromAmino(object: _96.QueryLeaseResponseAmino): _96.QueryLeaseResponse;
                toAmino(message: _96.QueryLeaseResponse): _96.QueryLeaseResponseAmino;
                fromAminoMsg(object: _96.QueryLeaseResponseAminoMsg): _96.QueryLeaseResponse;
                fromProtoMsg(message: _96.QueryLeaseResponseProtoMsg): _96.QueryLeaseResponse;
                toProto(message: _96.QueryLeaseResponse): Uint8Array;
                toProtoMsg(message: _96.QueryLeaseResponse): _96.QueryLeaseResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _95.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.Params;
                fromPartial(object: Partial<_95.Params>): _95.Params;
                fromAmino(object: _95.ParamsAmino): _95.Params;
                toAmino(message: _95.Params): _95.ParamsAmino;
                fromAminoMsg(object: _95.ParamsAminoMsg): _95.Params;
                fromProtoMsg(message: _95.ParamsProtoMsg): _95.Params;
                toProto(message: _95.Params): Uint8Array;
                toProtoMsg(message: _95.Params): _95.ParamsProtoMsg;
            };
            order_StateFromJSON(object: any): _94.Order_State;
            order_StateToJSON(object: _94.Order_State): string;
            Order_State: typeof _94.Order_State;
            Order_StateSDKType: typeof _94.Order_State;
            Order_StateAmino: typeof _94.Order_State;
            OrderID: {
                typeUrl: string;
                encode(message: _94.OrderID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.OrderID;
                fromPartial(object: Partial<_94.OrderID>): _94.OrderID;
                fromAmino(object: _94.OrderIDAmino): _94.OrderID;
                toAmino(message: _94.OrderID): _94.OrderIDAmino;
                fromAminoMsg(object: _94.OrderIDAminoMsg): _94.OrderID;
                fromProtoMsg(message: _94.OrderIDProtoMsg): _94.OrderID;
                toProto(message: _94.OrderID): Uint8Array;
                toProtoMsg(message: _94.OrderID): _94.OrderIDProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _94.Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.Order;
                fromPartial(object: Partial<_94.Order>): _94.Order;
                fromAmino(object: _94.OrderAmino): _94.Order;
                toAmino(message: _94.Order): _94.OrderAmino;
                fromAminoMsg(object: _94.OrderAminoMsg): _94.Order;
                fromProtoMsg(message: _94.OrderProtoMsg): _94.Order;
                toProto(message: _94.Order): Uint8Array;
                toProtoMsg(message: _94.Order): _94.OrderProtoMsg;
            };
            OrderFilters: {
                typeUrl: string;
                encode(message: _94.OrderFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.OrderFilters;
                fromPartial(object: Partial<_94.OrderFilters>): _94.OrderFilters;
                fromAmino(object: _94.OrderFiltersAmino): _94.OrderFilters;
                toAmino(message: _94.OrderFilters): _94.OrderFiltersAmino;
                fromAminoMsg(object: _94.OrderFiltersAminoMsg): _94.OrderFilters;
                fromProtoMsg(message: _94.OrderFiltersProtoMsg): _94.OrderFilters;
                toProto(message: _94.OrderFilters): Uint8Array;
                toProtoMsg(message: _94.OrderFilters): _94.OrderFiltersProtoMsg;
            };
            lease_StateFromJSON(object: any): _93.Lease_State;
            lease_StateToJSON(object: _93.Lease_State): string;
            Lease_State: typeof _93.Lease_State;
            Lease_StateSDKType: typeof _93.Lease_State;
            Lease_StateAmino: typeof _93.Lease_State;
            LeaseID: {
                typeUrl: string;
                encode(message: _93.LeaseID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.LeaseID;
                fromPartial(object: Partial<_93.LeaseID>): _93.LeaseID;
                fromAmino(object: _93.LeaseIDAmino): _93.LeaseID;
                toAmino(message: _93.LeaseID): _93.LeaseIDAmino;
                fromAminoMsg(object: _93.LeaseIDAminoMsg): _93.LeaseID;
                fromProtoMsg(message: _93.LeaseIDProtoMsg): _93.LeaseID;
                toProto(message: _93.LeaseID): Uint8Array;
                toProtoMsg(message: _93.LeaseID): _93.LeaseIDProtoMsg;
            };
            Lease: {
                typeUrl: string;
                encode(message: _93.Lease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Lease;
                fromPartial(object: Partial<_93.Lease>): _93.Lease;
                fromAmino(object: _93.LeaseAmino): _93.Lease;
                toAmino(message: _93.Lease): _93.LeaseAmino;
                fromAminoMsg(object: _93.LeaseAminoMsg): _93.Lease;
                fromProtoMsg(message: _93.LeaseProtoMsg): _93.Lease;
                toProto(message: _93.Lease): Uint8Array;
                toProtoMsg(message: _93.Lease): _93.LeaseProtoMsg;
            };
            LeaseFilters: {
                typeUrl: string;
                encode(message: _93.LeaseFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.LeaseFilters;
                fromPartial(object: Partial<_93.LeaseFilters>): _93.LeaseFilters;
                fromAmino(object: _93.LeaseFiltersAmino): _93.LeaseFilters;
                toAmino(message: _93.LeaseFilters): _93.LeaseFiltersAmino;
                fromAminoMsg(object: _93.LeaseFiltersAminoMsg): _93.LeaseFilters;
                fromProtoMsg(message: _93.LeaseFiltersProtoMsg): _93.LeaseFilters;
                toProto(message: _93.LeaseFilters): Uint8Array;
                toProtoMsg(message: _93.LeaseFilters): _93.LeaseFiltersProtoMsg;
            };
            MsgCreateLease: {
                typeUrl: string;
                encode(message: _93.MsgCreateLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgCreateLease;
                fromPartial(object: Partial<_93.MsgCreateLease>): _93.MsgCreateLease;
                fromAmino(object: _93.MsgCreateLeaseAmino): _93.MsgCreateLease;
                toAmino(message: _93.MsgCreateLease): _93.MsgCreateLeaseAmino;
                fromAminoMsg(object: _93.MsgCreateLeaseAminoMsg): _93.MsgCreateLease;
                fromProtoMsg(message: _93.MsgCreateLeaseProtoMsg): _93.MsgCreateLease;
                toProto(message: _93.MsgCreateLease): Uint8Array;
                toProtoMsg(message: _93.MsgCreateLease): _93.MsgCreateLeaseProtoMsg;
            };
            MsgCreateLeaseResponse: {
                typeUrl: string;
                encode(_: _93.MsgCreateLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.MsgCreateLeaseResponse;
                fromPartial(_: Partial<_93.MsgCreateLeaseResponse>): _93.MsgCreateLeaseResponse;
                fromAmino(_: _93.MsgCreateLeaseResponseAmino): _93.MsgCreateLeaseResponse;
                toAmino(_: _93.MsgCreateLeaseResponse): _93.MsgCreateLeaseResponseAmino;
                fromAminoMsg(object: _93.MsgCreateLeaseResponseAminoMsg): _93.MsgCreateLeaseResponse;
                fromProtoMsg(message: _93.MsgCreateLeaseResponseProtoMsg): _93.MsgCreateLeaseResponse;
                toProto(message: _93.MsgCreateLeaseResponse): Uint8Array;
                toProtoMsg(message: _93.MsgCreateLeaseResponse): _93.MsgCreateLeaseResponseProtoMsg;
            };
            MsgWithdrawLease: {
                typeUrl: string;
                encode(message: _93.MsgWithdrawLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgWithdrawLease;
                fromPartial(object: Partial<_93.MsgWithdrawLease>): _93.MsgWithdrawLease;
                fromAmino(object: _93.MsgWithdrawLeaseAmino): _93.MsgWithdrawLease;
                toAmino(message: _93.MsgWithdrawLease): _93.MsgWithdrawLeaseAmino;
                fromAminoMsg(object: _93.MsgWithdrawLeaseAminoMsg): _93.MsgWithdrawLease;
                fromProtoMsg(message: _93.MsgWithdrawLeaseProtoMsg): _93.MsgWithdrawLease;
                toProto(message: _93.MsgWithdrawLease): Uint8Array;
                toProtoMsg(message: _93.MsgWithdrawLease): _93.MsgWithdrawLeaseProtoMsg;
            };
            MsgWithdrawLeaseResponse: {
                typeUrl: string;
                encode(_: _93.MsgWithdrawLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.MsgWithdrawLeaseResponse;
                fromPartial(_: Partial<_93.MsgWithdrawLeaseResponse>): _93.MsgWithdrawLeaseResponse;
                fromAmino(_: _93.MsgWithdrawLeaseResponseAmino): _93.MsgWithdrawLeaseResponse;
                toAmino(_: _93.MsgWithdrawLeaseResponse): _93.MsgWithdrawLeaseResponseAmino;
                fromAminoMsg(object: _93.MsgWithdrawLeaseResponseAminoMsg): _93.MsgWithdrawLeaseResponse;
                fromProtoMsg(message: _93.MsgWithdrawLeaseResponseProtoMsg): _93.MsgWithdrawLeaseResponse;
                toProto(message: _93.MsgWithdrawLeaseResponse): Uint8Array;
                toProtoMsg(message: _93.MsgWithdrawLeaseResponse): _93.MsgWithdrawLeaseResponseProtoMsg;
            };
            MsgCloseLease: {
                typeUrl: string;
                encode(message: _93.MsgCloseLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.MsgCloseLease;
                fromPartial(object: Partial<_93.MsgCloseLease>): _93.MsgCloseLease;
                fromAmino(object: _93.MsgCloseLeaseAmino): _93.MsgCloseLease;
                toAmino(message: _93.MsgCloseLease): _93.MsgCloseLeaseAmino;
                fromAminoMsg(object: _93.MsgCloseLeaseAminoMsg): _93.MsgCloseLease;
                fromProtoMsg(message: _93.MsgCloseLeaseProtoMsg): _93.MsgCloseLease;
                toProto(message: _93.MsgCloseLease): Uint8Array;
                toProtoMsg(message: _93.MsgCloseLease): _93.MsgCloseLeaseProtoMsg;
            };
            MsgCloseLeaseResponse: {
                typeUrl: string;
                encode(_: _93.MsgCloseLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _93.MsgCloseLeaseResponse;
                fromPartial(_: Partial<_93.MsgCloseLeaseResponse>): _93.MsgCloseLeaseResponse;
                fromAmino(_: _93.MsgCloseLeaseResponseAmino): _93.MsgCloseLeaseResponse;
                toAmino(_: _93.MsgCloseLeaseResponse): _93.MsgCloseLeaseResponseAmino;
                fromAminoMsg(object: _93.MsgCloseLeaseResponseAminoMsg): _93.MsgCloseLeaseResponse;
                fromProtoMsg(message: _93.MsgCloseLeaseResponseProtoMsg): _93.MsgCloseLeaseResponse;
                toProto(message: _93.MsgCloseLeaseResponse): Uint8Array;
                toProtoMsg(message: _93.MsgCloseLeaseResponse): _93.MsgCloseLeaseResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.GenesisState;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                toProto(message: _92.GenesisState): Uint8Array;
                toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
            };
            bid_StateFromJSON(object: any): _91.Bid_State;
            bid_StateToJSON(object: _91.Bid_State): string;
            Bid_State: typeof _91.Bid_State;
            Bid_StateSDKType: typeof _91.Bid_State;
            Bid_StateAmino: typeof _91.Bid_State;
            ResourceOffer: {
                typeUrl: string;
                encode(message: _91.ResourceOffer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.ResourceOffer;
                fromPartial(object: Partial<_91.ResourceOffer>): _91.ResourceOffer;
                fromAmino(object: _91.ResourceOfferAmino): _91.ResourceOffer;
                toAmino(message: _91.ResourceOffer): _91.ResourceOfferAmino;
                fromAminoMsg(object: _91.ResourceOfferAminoMsg): _91.ResourceOffer;
                fromProtoMsg(message: _91.ResourceOfferProtoMsg): _91.ResourceOffer;
                toProto(message: _91.ResourceOffer): Uint8Array;
                toProtoMsg(message: _91.ResourceOffer): _91.ResourceOfferProtoMsg;
            };
            MsgCreateBid: {
                typeUrl: string;
                encode(message: _91.MsgCreateBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgCreateBid;
                fromPartial(object: Partial<_91.MsgCreateBid>): _91.MsgCreateBid;
                fromAmino(object: _91.MsgCreateBidAmino): _91.MsgCreateBid;
                toAmino(message: _91.MsgCreateBid): _91.MsgCreateBidAmino;
                fromAminoMsg(object: _91.MsgCreateBidAminoMsg): _91.MsgCreateBid;
                fromProtoMsg(message: _91.MsgCreateBidProtoMsg): _91.MsgCreateBid;
                toProto(message: _91.MsgCreateBid): Uint8Array;
                toProtoMsg(message: _91.MsgCreateBid): _91.MsgCreateBidProtoMsg;
            };
            MsgCreateBidResponse: {
                typeUrl: string;
                encode(_: _91.MsgCreateBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgCreateBidResponse;
                fromPartial(_: Partial<_91.MsgCreateBidResponse>): _91.MsgCreateBidResponse;
                fromAmino(_: _91.MsgCreateBidResponseAmino): _91.MsgCreateBidResponse;
                toAmino(_: _91.MsgCreateBidResponse): _91.MsgCreateBidResponseAmino;
                fromAminoMsg(object: _91.MsgCreateBidResponseAminoMsg): _91.MsgCreateBidResponse;
                fromProtoMsg(message: _91.MsgCreateBidResponseProtoMsg): _91.MsgCreateBidResponse;
                toProto(message: _91.MsgCreateBidResponse): Uint8Array;
                toProtoMsg(message: _91.MsgCreateBidResponse): _91.MsgCreateBidResponseProtoMsg;
            };
            MsgCloseBid: {
                typeUrl: string;
                encode(message: _91.MsgCloseBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.MsgCloseBid;
                fromPartial(object: Partial<_91.MsgCloseBid>): _91.MsgCloseBid;
                fromAmino(object: _91.MsgCloseBidAmino): _91.MsgCloseBid;
                toAmino(message: _91.MsgCloseBid): _91.MsgCloseBidAmino;
                fromAminoMsg(object: _91.MsgCloseBidAminoMsg): _91.MsgCloseBid;
                fromProtoMsg(message: _91.MsgCloseBidProtoMsg): _91.MsgCloseBid;
                toProto(message: _91.MsgCloseBid): Uint8Array;
                toProtoMsg(message: _91.MsgCloseBid): _91.MsgCloseBidProtoMsg;
            };
            MsgCloseBidResponse: {
                typeUrl: string;
                encode(_: _91.MsgCloseBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _91.MsgCloseBidResponse;
                fromPartial(_: Partial<_91.MsgCloseBidResponse>): _91.MsgCloseBidResponse;
                fromAmino(_: _91.MsgCloseBidResponseAmino): _91.MsgCloseBidResponse;
                toAmino(_: _91.MsgCloseBidResponse): _91.MsgCloseBidResponseAmino;
                fromAminoMsg(object: _91.MsgCloseBidResponseAminoMsg): _91.MsgCloseBidResponse;
                fromProtoMsg(message: _91.MsgCloseBidResponseProtoMsg): _91.MsgCloseBidResponse;
                toProto(message: _91.MsgCloseBidResponse): Uint8Array;
                toProtoMsg(message: _91.MsgCloseBidResponse): _91.MsgCloseBidResponseProtoMsg;
            };
            BidID: {
                typeUrl: string;
                encode(message: _91.BidID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.BidID;
                fromPartial(object: Partial<_91.BidID>): _91.BidID;
                fromAmino(object: _91.BidIDAmino): _91.BidID;
                toAmino(message: _91.BidID): _91.BidIDAmino;
                fromAminoMsg(object: _91.BidIDAminoMsg): _91.BidID;
                fromProtoMsg(message: _91.BidIDProtoMsg): _91.BidID;
                toProto(message: _91.BidID): Uint8Array;
                toProtoMsg(message: _91.BidID): _91.BidIDProtoMsg;
            };
            Bid: {
                typeUrl: string;
                encode(message: _91.Bid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.Bid;
                fromPartial(object: Partial<_91.Bid>): _91.Bid;
                fromAmino(object: _91.BidAmino): _91.Bid;
                toAmino(message: _91.Bid): _91.BidAmino;
                fromAminoMsg(object: _91.BidAminoMsg): _91.Bid;
                fromProtoMsg(message: _91.BidProtoMsg): _91.Bid;
                toProto(message: _91.Bid): Uint8Array;
                toProtoMsg(message: _91.Bid): _91.BidProtoMsg;
            };
            BidFilters: {
                typeUrl: string;
                encode(message: _91.BidFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _91.BidFilters;
                fromPartial(object: Partial<_91.BidFilters>): _91.BidFilters;
                fromAmino(object: _91.BidFiltersAmino): _91.BidFilters;
                toAmino(message: _91.BidFilters): _91.BidFiltersAmino;
                fromAminoMsg(object: _91.BidFiltersAminoMsg): _91.BidFilters;
                fromProtoMsg(message: _91.BidFiltersProtoMsg): _91.BidFilters;
                toProto(message: _91.BidFilters): Uint8Array;
                toProtoMsg(message: _91.BidFilters): _91.BidFiltersProtoMsg;
            };
        };
    }
    namespace provider {
        const v1beta1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createProvider(value: _98.MsgCreateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProvider(value: _98.MsgUpdateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProvider(value: _98.MsgDeleteProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createProvider(value: _98.MsgCreateProvider): {
                        typeUrl: string;
                        value: _98.MsgCreateProvider;
                    };
                    updateProvider(value: _98.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _98.MsgUpdateProvider;
                    };
                    deleteProvider(value: _98.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _98.MsgDeleteProvider;
                    };
                };
                fromJSON: {
                    createProvider(value: any): {
                        typeUrl: string;
                        value: _98.MsgCreateProvider;
                    };
                    updateProvider(value: any): {
                        typeUrl: string;
                        value: _98.MsgUpdateProvider;
                    };
                    deleteProvider(value: any): {
                        typeUrl: string;
                        value: _98.MsgDeleteProvider;
                    };
                };
                fromPartial: {
                    createProvider(value: _98.MsgCreateProvider): {
                        typeUrl: string;
                        value: _98.MsgCreateProvider;
                    };
                    updateProvider(value: _98.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _98.MsgUpdateProvider;
                    };
                    deleteProvider(value: _98.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _98.MsgDeleteProvider;
                    };
                };
            };
            AminoConverter: {
                "/akash.provider.v1beta1.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: (message: _98.MsgCreateProvider) => _98.MsgCreateProviderAmino;
                    fromAmino: (object: _98.MsgCreateProviderAmino) => _98.MsgCreateProvider;
                };
                "/akash.provider.v1beta1.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: (message: _98.MsgUpdateProvider) => _98.MsgUpdateProviderAmino;
                    fromAmino: (object: _98.MsgUpdateProviderAmino) => _98.MsgUpdateProvider;
                };
                "/akash.provider.v1beta1.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: (message: _98.MsgDeleteProvider) => _98.MsgDeleteProviderAmino;
                    fromAmino: (object: _98.MsgDeleteProviderAmino) => _98.MsgDeleteProvider;
                };
            };
            ProviderInfo: {
                typeUrl: string;
                encode(message: _98.ProviderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.ProviderInfo;
                fromPartial(object: Partial<_98.ProviderInfo>): _98.ProviderInfo;
                fromAmino(object: _98.ProviderInfoAmino): _98.ProviderInfo;
                toAmino(message: _98.ProviderInfo): _98.ProviderInfoAmino;
                fromAminoMsg(object: _98.ProviderInfoAminoMsg): _98.ProviderInfo;
                fromProtoMsg(message: _98.ProviderInfoProtoMsg): _98.ProviderInfo;
                toProto(message: _98.ProviderInfo): Uint8Array;
                toProtoMsg(message: _98.ProviderInfo): _98.ProviderInfoProtoMsg;
            };
            MsgCreateProvider: {
                typeUrl: string;
                encode(message: _98.MsgCreateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgCreateProvider;
                fromPartial(object: Partial<_98.MsgCreateProvider>): _98.MsgCreateProvider;
                fromAmino(object: _98.MsgCreateProviderAmino): _98.MsgCreateProvider;
                toAmino(message: _98.MsgCreateProvider): _98.MsgCreateProviderAmino;
                fromAminoMsg(object: _98.MsgCreateProviderAminoMsg): _98.MsgCreateProvider;
                fromProtoMsg(message: _98.MsgCreateProviderProtoMsg): _98.MsgCreateProvider;
                toProto(message: _98.MsgCreateProvider): Uint8Array;
                toProtoMsg(message: _98.MsgCreateProvider): _98.MsgCreateProviderProtoMsg;
            };
            MsgCreateProviderResponse: {
                typeUrl: string;
                encode(_: _98.MsgCreateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.MsgCreateProviderResponse;
                fromPartial(_: Partial<_98.MsgCreateProviderResponse>): _98.MsgCreateProviderResponse;
                fromAmino(_: _98.MsgCreateProviderResponseAmino): _98.MsgCreateProviderResponse;
                toAmino(_: _98.MsgCreateProviderResponse): _98.MsgCreateProviderResponseAmino;
                fromAminoMsg(object: _98.MsgCreateProviderResponseAminoMsg): _98.MsgCreateProviderResponse;
                fromProtoMsg(message: _98.MsgCreateProviderResponseProtoMsg): _98.MsgCreateProviderResponse;
                toProto(message: _98.MsgCreateProviderResponse): Uint8Array;
                toProtoMsg(message: _98.MsgCreateProviderResponse): _98.MsgCreateProviderResponseProtoMsg;
            };
            MsgUpdateProvider: {
                typeUrl: string;
                encode(message: _98.MsgUpdateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgUpdateProvider;
                fromPartial(object: Partial<_98.MsgUpdateProvider>): _98.MsgUpdateProvider;
                fromAmino(object: _98.MsgUpdateProviderAmino): _98.MsgUpdateProvider;
                toAmino(message: _98.MsgUpdateProvider): _98.MsgUpdateProviderAmino;
                fromAminoMsg(object: _98.MsgUpdateProviderAminoMsg): _98.MsgUpdateProvider;
                fromProtoMsg(message: _98.MsgUpdateProviderProtoMsg): _98.MsgUpdateProvider;
                toProto(message: _98.MsgUpdateProvider): Uint8Array;
                toProtoMsg(message: _98.MsgUpdateProvider): _98.MsgUpdateProviderProtoMsg;
            };
            MsgUpdateProviderResponse: {
                typeUrl: string;
                encode(_: _98.MsgUpdateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.MsgUpdateProviderResponse;
                fromPartial(_: Partial<_98.MsgUpdateProviderResponse>): _98.MsgUpdateProviderResponse;
                fromAmino(_: _98.MsgUpdateProviderResponseAmino): _98.MsgUpdateProviderResponse;
                toAmino(_: _98.MsgUpdateProviderResponse): _98.MsgUpdateProviderResponseAmino;
                fromAminoMsg(object: _98.MsgUpdateProviderResponseAminoMsg): _98.MsgUpdateProviderResponse;
                fromProtoMsg(message: _98.MsgUpdateProviderResponseProtoMsg): _98.MsgUpdateProviderResponse;
                toProto(message: _98.MsgUpdateProviderResponse): Uint8Array;
                toProtoMsg(message: _98.MsgUpdateProviderResponse): _98.MsgUpdateProviderResponseProtoMsg;
            };
            MsgDeleteProvider: {
                typeUrl: string;
                encode(message: _98.MsgDeleteProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.MsgDeleteProvider;
                fromPartial(object: Partial<_98.MsgDeleteProvider>): _98.MsgDeleteProvider;
                fromAmino(object: _98.MsgDeleteProviderAmino): _98.MsgDeleteProvider;
                toAmino(message: _98.MsgDeleteProvider): _98.MsgDeleteProviderAmino;
                fromAminoMsg(object: _98.MsgDeleteProviderAminoMsg): _98.MsgDeleteProvider;
                fromProtoMsg(message: _98.MsgDeleteProviderProtoMsg): _98.MsgDeleteProvider;
                toProto(message: _98.MsgDeleteProvider): Uint8Array;
                toProtoMsg(message: _98.MsgDeleteProvider): _98.MsgDeleteProviderProtoMsg;
            };
            MsgDeleteProviderResponse: {
                typeUrl: string;
                encode(_: _98.MsgDeleteProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _98.MsgDeleteProviderResponse;
                fromPartial(_: Partial<_98.MsgDeleteProviderResponse>): _98.MsgDeleteProviderResponse;
                fromAmino(_: _98.MsgDeleteProviderResponseAmino): _98.MsgDeleteProviderResponse;
                toAmino(_: _98.MsgDeleteProviderResponse): _98.MsgDeleteProviderResponseAmino;
                fromAminoMsg(object: _98.MsgDeleteProviderResponseAminoMsg): _98.MsgDeleteProviderResponse;
                fromProtoMsg(message: _98.MsgDeleteProviderResponseProtoMsg): _98.MsgDeleteProviderResponse;
                toProto(message: _98.MsgDeleteProviderResponse): Uint8Array;
                toProtoMsg(message: _98.MsgDeleteProviderResponse): _98.MsgDeleteProviderResponseProtoMsg;
            };
            Provider: {
                typeUrl: string;
                encode(message: _98.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Provider;
                fromPartial(object: Partial<_98.Provider>): _98.Provider;
                fromAmino(object: _98.ProviderAmino): _98.Provider;
                toAmino(message: _98.Provider): _98.ProviderAmino;
                fromAminoMsg(object: _98.ProviderAminoMsg): _98.Provider;
                fromProtoMsg(message: _98.ProviderProtoMsg): _98.Provider;
                toProto(message: _98.Provider): Uint8Array;
                toProtoMsg(message: _98.Provider): _98.ProviderProtoMsg;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                providers(request?: _101.QueryProvidersRequest): Promise<_101.QueryProvidersResponse>;
                provider(request: _101.QueryProviderRequest): Promise<_101.QueryProviderResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createProvider(value: _100.MsgCreateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProvider(value: _100.MsgUpdateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProvider(value: _100.MsgDeleteProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createProvider(value: _100.MsgCreateProvider): {
                        typeUrl: string;
                        value: _100.MsgCreateProvider;
                    };
                    updateProvider(value: _100.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _100.MsgUpdateProvider;
                    };
                    deleteProvider(value: _100.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _100.MsgDeleteProvider;
                    };
                };
                fromJSON: {
                    createProvider(value: any): {
                        typeUrl: string;
                        value: _100.MsgCreateProvider;
                    };
                    updateProvider(value: any): {
                        typeUrl: string;
                        value: _100.MsgUpdateProvider;
                    };
                    deleteProvider(value: any): {
                        typeUrl: string;
                        value: _100.MsgDeleteProvider;
                    };
                };
                fromPartial: {
                    createProvider(value: _100.MsgCreateProvider): {
                        typeUrl: string;
                        value: _100.MsgCreateProvider;
                    };
                    updateProvider(value: _100.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _100.MsgUpdateProvider;
                    };
                    deleteProvider(value: _100.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _100.MsgDeleteProvider;
                    };
                };
            };
            AminoConverter: {
                "/akash.provider.v1beta2.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: (message: _100.MsgCreateProvider) => _100.MsgCreateProviderAmino;
                    fromAmino: (object: _100.MsgCreateProviderAmino) => _100.MsgCreateProvider;
                };
                "/akash.provider.v1beta2.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: (message: _100.MsgUpdateProvider) => _100.MsgUpdateProviderAmino;
                    fromAmino: (object: _100.MsgUpdateProviderAmino) => _100.MsgUpdateProvider;
                };
                "/akash.provider.v1beta2.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: (message: _100.MsgDeleteProvider) => _100.MsgDeleteProviderAmino;
                    fromAmino: (object: _100.MsgDeleteProviderAmino) => _100.MsgDeleteProvider;
                };
            };
            QueryProvidersRequest: {
                typeUrl: string;
                encode(message: _101.QueryProvidersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryProvidersRequest;
                fromPartial(object: Partial<_101.QueryProvidersRequest>): _101.QueryProvidersRequest;
                fromAmino(object: _101.QueryProvidersRequestAmino): _101.QueryProvidersRequest;
                toAmino(message: _101.QueryProvidersRequest): _101.QueryProvidersRequestAmino;
                fromAminoMsg(object: _101.QueryProvidersRequestAminoMsg): _101.QueryProvidersRequest;
                fromProtoMsg(message: _101.QueryProvidersRequestProtoMsg): _101.QueryProvidersRequest;
                toProto(message: _101.QueryProvidersRequest): Uint8Array;
                toProtoMsg(message: _101.QueryProvidersRequest): _101.QueryProvidersRequestProtoMsg;
            };
            QueryProvidersResponse: {
                typeUrl: string;
                encode(message: _101.QueryProvidersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryProvidersResponse;
                fromPartial(object: Partial<_101.QueryProvidersResponse>): _101.QueryProvidersResponse;
                fromAmino(object: _101.QueryProvidersResponseAmino): _101.QueryProvidersResponse;
                toAmino(message: _101.QueryProvidersResponse): _101.QueryProvidersResponseAmino;
                fromAminoMsg(object: _101.QueryProvidersResponseAminoMsg): _101.QueryProvidersResponse;
                fromProtoMsg(message: _101.QueryProvidersResponseProtoMsg): _101.QueryProvidersResponse;
                toProto(message: _101.QueryProvidersResponse): Uint8Array;
                toProtoMsg(message: _101.QueryProvidersResponse): _101.QueryProvidersResponseProtoMsg;
            };
            QueryProviderRequest: {
                typeUrl: string;
                encode(message: _101.QueryProviderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryProviderRequest;
                fromPartial(object: Partial<_101.QueryProviderRequest>): _101.QueryProviderRequest;
                fromAmino(object: _101.QueryProviderRequestAmino): _101.QueryProviderRequest;
                toAmino(message: _101.QueryProviderRequest): _101.QueryProviderRequestAmino;
                fromAminoMsg(object: _101.QueryProviderRequestAminoMsg): _101.QueryProviderRequest;
                fromProtoMsg(message: _101.QueryProviderRequestProtoMsg): _101.QueryProviderRequest;
                toProto(message: _101.QueryProviderRequest): Uint8Array;
                toProtoMsg(message: _101.QueryProviderRequest): _101.QueryProviderRequestProtoMsg;
            };
            QueryProviderResponse: {
                typeUrl: string;
                encode(message: _101.QueryProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _101.QueryProviderResponse;
                fromPartial(object: Partial<_101.QueryProviderResponse>): _101.QueryProviderResponse;
                fromAmino(object: _101.QueryProviderResponseAmino): _101.QueryProviderResponse;
                toAmino(message: _101.QueryProviderResponse): _101.QueryProviderResponseAmino;
                fromAminoMsg(object: _101.QueryProviderResponseAminoMsg): _101.QueryProviderResponse;
                fromProtoMsg(message: _101.QueryProviderResponseProtoMsg): _101.QueryProviderResponse;
                toProto(message: _101.QueryProviderResponse): Uint8Array;
                toProtoMsg(message: _101.QueryProviderResponse): _101.QueryProviderResponseProtoMsg;
            };
            ProviderInfo: {
                typeUrl: string;
                encode(message: _100.ProviderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.ProviderInfo;
                fromPartial(object: Partial<_100.ProviderInfo>): _100.ProviderInfo;
                fromAmino(object: _100.ProviderInfoAmino): _100.ProviderInfo;
                toAmino(message: _100.ProviderInfo): _100.ProviderInfoAmino;
                fromAminoMsg(object: _100.ProviderInfoAminoMsg): _100.ProviderInfo;
                fromProtoMsg(message: _100.ProviderInfoProtoMsg): _100.ProviderInfo;
                toProto(message: _100.ProviderInfo): Uint8Array;
                toProtoMsg(message: _100.ProviderInfo): _100.ProviderInfoProtoMsg;
            };
            MsgCreateProvider: {
                typeUrl: string;
                encode(message: _100.MsgCreateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgCreateProvider;
                fromPartial(object: Partial<_100.MsgCreateProvider>): _100.MsgCreateProvider;
                fromAmino(object: _100.MsgCreateProviderAmino): _100.MsgCreateProvider;
                toAmino(message: _100.MsgCreateProvider): _100.MsgCreateProviderAmino;
                fromAminoMsg(object: _100.MsgCreateProviderAminoMsg): _100.MsgCreateProvider;
                fromProtoMsg(message: _100.MsgCreateProviderProtoMsg): _100.MsgCreateProvider;
                toProto(message: _100.MsgCreateProvider): Uint8Array;
                toProtoMsg(message: _100.MsgCreateProvider): _100.MsgCreateProviderProtoMsg;
            };
            MsgCreateProviderResponse: {
                typeUrl: string;
                encode(_: _100.MsgCreateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgCreateProviderResponse;
                fromPartial(_: Partial<_100.MsgCreateProviderResponse>): _100.MsgCreateProviderResponse;
                fromAmino(_: _100.MsgCreateProviderResponseAmino): _100.MsgCreateProviderResponse;
                toAmino(_: _100.MsgCreateProviderResponse): _100.MsgCreateProviderResponseAmino;
                fromAminoMsg(object: _100.MsgCreateProviderResponseAminoMsg): _100.MsgCreateProviderResponse;
                fromProtoMsg(message: _100.MsgCreateProviderResponseProtoMsg): _100.MsgCreateProviderResponse;
                toProto(message: _100.MsgCreateProviderResponse): Uint8Array;
                toProtoMsg(message: _100.MsgCreateProviderResponse): _100.MsgCreateProviderResponseProtoMsg;
            };
            MsgUpdateProvider: {
                typeUrl: string;
                encode(message: _100.MsgUpdateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgUpdateProvider;
                fromPartial(object: Partial<_100.MsgUpdateProvider>): _100.MsgUpdateProvider;
                fromAmino(object: _100.MsgUpdateProviderAmino): _100.MsgUpdateProvider;
                toAmino(message: _100.MsgUpdateProvider): _100.MsgUpdateProviderAmino;
                fromAminoMsg(object: _100.MsgUpdateProviderAminoMsg): _100.MsgUpdateProvider;
                fromProtoMsg(message: _100.MsgUpdateProviderProtoMsg): _100.MsgUpdateProvider;
                toProto(message: _100.MsgUpdateProvider): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateProvider): _100.MsgUpdateProviderProtoMsg;
            };
            MsgUpdateProviderResponse: {
                typeUrl: string;
                encode(_: _100.MsgUpdateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgUpdateProviderResponse;
                fromPartial(_: Partial<_100.MsgUpdateProviderResponse>): _100.MsgUpdateProviderResponse;
                fromAmino(_: _100.MsgUpdateProviderResponseAmino): _100.MsgUpdateProviderResponse;
                toAmino(_: _100.MsgUpdateProviderResponse): _100.MsgUpdateProviderResponseAmino;
                fromAminoMsg(object: _100.MsgUpdateProviderResponseAminoMsg): _100.MsgUpdateProviderResponse;
                fromProtoMsg(message: _100.MsgUpdateProviderResponseProtoMsg): _100.MsgUpdateProviderResponse;
                toProto(message: _100.MsgUpdateProviderResponse): Uint8Array;
                toProtoMsg(message: _100.MsgUpdateProviderResponse): _100.MsgUpdateProviderResponseProtoMsg;
            };
            MsgDeleteProvider: {
                typeUrl: string;
                encode(message: _100.MsgDeleteProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.MsgDeleteProvider;
                fromPartial(object: Partial<_100.MsgDeleteProvider>): _100.MsgDeleteProvider;
                fromAmino(object: _100.MsgDeleteProviderAmino): _100.MsgDeleteProvider;
                toAmino(message: _100.MsgDeleteProvider): _100.MsgDeleteProviderAmino;
                fromAminoMsg(object: _100.MsgDeleteProviderAminoMsg): _100.MsgDeleteProvider;
                fromProtoMsg(message: _100.MsgDeleteProviderProtoMsg): _100.MsgDeleteProvider;
                toProto(message: _100.MsgDeleteProvider): Uint8Array;
                toProtoMsg(message: _100.MsgDeleteProvider): _100.MsgDeleteProviderProtoMsg;
            };
            MsgDeleteProviderResponse: {
                typeUrl: string;
                encode(_: _100.MsgDeleteProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _100.MsgDeleteProviderResponse;
                fromPartial(_: Partial<_100.MsgDeleteProviderResponse>): _100.MsgDeleteProviderResponse;
                fromAmino(_: _100.MsgDeleteProviderResponseAmino): _100.MsgDeleteProviderResponse;
                toAmino(_: _100.MsgDeleteProviderResponse): _100.MsgDeleteProviderResponseAmino;
                fromAminoMsg(object: _100.MsgDeleteProviderResponseAminoMsg): _100.MsgDeleteProviderResponse;
                fromProtoMsg(message: _100.MsgDeleteProviderResponseProtoMsg): _100.MsgDeleteProviderResponse;
                toProto(message: _100.MsgDeleteProviderResponse): Uint8Array;
                toProtoMsg(message: _100.MsgDeleteProviderResponse): _100.MsgDeleteProviderResponseProtoMsg;
            };
            Provider: {
                typeUrl: string;
                encode(message: _100.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _100.Provider;
                fromPartial(object: Partial<_100.Provider>): _100.Provider;
                fromAmino(object: _100.ProviderAmino): _100.Provider;
                toAmino(message: _100.Provider): _100.ProviderAmino;
                fromAminoMsg(object: _100.ProviderAminoMsg): _100.Provider;
                fromProtoMsg(message: _100.ProviderProtoMsg): _100.Provider;
                toProto(message: _100.Provider): Uint8Array;
                toProtoMsg(message: _100.Provider): _100.ProviderProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _99.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _99.GenesisState;
                fromPartial(object: Partial<_99.GenesisState>): _99.GenesisState;
                fromAmino(object: _99.GenesisStateAmino): _99.GenesisState;
                toAmino(message: _99.GenesisState): _99.GenesisStateAmino;
                fromAminoMsg(object: _99.GenesisStateAminoMsg): _99.GenesisState;
                fromProtoMsg(message: _99.GenesisStateProtoMsg): _99.GenesisState;
                toProto(message: _99.GenesisState): Uint8Array;
                toProtoMsg(message: _99.GenesisState): _99.GenesisStateProtoMsg;
            };
        };
        const v1beta3: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                providers(request?: _104.QueryProvidersRequest): Promise<_104.QueryProvidersResponse>;
                provider(request: _104.QueryProviderRequest): Promise<_104.QueryProviderResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createProvider(value: _103.MsgCreateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProvider(value: _103.MsgUpdateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProvider(value: _103.MsgDeleteProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createProvider(value: _103.MsgCreateProvider): {
                        typeUrl: string;
                        value: _103.MsgCreateProvider;
                    };
                    updateProvider(value: _103.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _103.MsgUpdateProvider;
                    };
                    deleteProvider(value: _103.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _103.MsgDeleteProvider;
                    };
                };
                fromJSON: {
                    createProvider(value: any): {
                        typeUrl: string;
                        value: _103.MsgCreateProvider;
                    };
                    updateProvider(value: any): {
                        typeUrl: string;
                        value: _103.MsgUpdateProvider;
                    };
                    deleteProvider(value: any): {
                        typeUrl: string;
                        value: _103.MsgDeleteProvider;
                    };
                };
                fromPartial: {
                    createProvider(value: _103.MsgCreateProvider): {
                        typeUrl: string;
                        value: _103.MsgCreateProvider;
                    };
                    updateProvider(value: _103.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _103.MsgUpdateProvider;
                    };
                    deleteProvider(value: _103.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _103.MsgDeleteProvider;
                    };
                };
            };
            AminoConverter: {
                "/akash.provider.v1beta3.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: (message: _103.MsgCreateProvider) => _103.MsgCreateProviderAmino;
                    fromAmino: (object: _103.MsgCreateProviderAmino) => _103.MsgCreateProvider;
                };
                "/akash.provider.v1beta3.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: (message: _103.MsgUpdateProvider) => _103.MsgUpdateProviderAmino;
                    fromAmino: (object: _103.MsgUpdateProviderAmino) => _103.MsgUpdateProvider;
                };
                "/akash.provider.v1beta3.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: (message: _103.MsgDeleteProvider) => _103.MsgDeleteProviderAmino;
                    fromAmino: (object: _103.MsgDeleteProviderAmino) => _103.MsgDeleteProvider;
                };
            };
            QueryProvidersRequest: {
                typeUrl: string;
                encode(message: _104.QueryProvidersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProvidersRequest;
                fromPartial(object: Partial<_104.QueryProvidersRequest>): _104.QueryProvidersRequest;
                fromAmino(object: _104.QueryProvidersRequestAmino): _104.QueryProvidersRequest;
                toAmino(message: _104.QueryProvidersRequest): _104.QueryProvidersRequestAmino;
                fromAminoMsg(object: _104.QueryProvidersRequestAminoMsg): _104.QueryProvidersRequest;
                fromProtoMsg(message: _104.QueryProvidersRequestProtoMsg): _104.QueryProvidersRequest;
                toProto(message: _104.QueryProvidersRequest): Uint8Array;
                toProtoMsg(message: _104.QueryProvidersRequest): _104.QueryProvidersRequestProtoMsg;
            };
            QueryProvidersResponse: {
                typeUrl: string;
                encode(message: _104.QueryProvidersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProvidersResponse;
                fromPartial(object: Partial<_104.QueryProvidersResponse>): _104.QueryProvidersResponse;
                fromAmino(object: _104.QueryProvidersResponseAmino): _104.QueryProvidersResponse;
                toAmino(message: _104.QueryProvidersResponse): _104.QueryProvidersResponseAmino;
                fromAminoMsg(object: _104.QueryProvidersResponseAminoMsg): _104.QueryProvidersResponse;
                fromProtoMsg(message: _104.QueryProvidersResponseProtoMsg): _104.QueryProvidersResponse;
                toProto(message: _104.QueryProvidersResponse): Uint8Array;
                toProtoMsg(message: _104.QueryProvidersResponse): _104.QueryProvidersResponseProtoMsg;
            };
            QueryProviderRequest: {
                typeUrl: string;
                encode(message: _104.QueryProviderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProviderRequest;
                fromPartial(object: Partial<_104.QueryProviderRequest>): _104.QueryProviderRequest;
                fromAmino(object: _104.QueryProviderRequestAmino): _104.QueryProviderRequest;
                toAmino(message: _104.QueryProviderRequest): _104.QueryProviderRequestAmino;
                fromAminoMsg(object: _104.QueryProviderRequestAminoMsg): _104.QueryProviderRequest;
                fromProtoMsg(message: _104.QueryProviderRequestProtoMsg): _104.QueryProviderRequest;
                toProto(message: _104.QueryProviderRequest): Uint8Array;
                toProtoMsg(message: _104.QueryProviderRequest): _104.QueryProviderRequestProtoMsg;
            };
            QueryProviderResponse: {
                typeUrl: string;
                encode(message: _104.QueryProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _104.QueryProviderResponse;
                fromPartial(object: Partial<_104.QueryProviderResponse>): _104.QueryProviderResponse;
                fromAmino(object: _104.QueryProviderResponseAmino): _104.QueryProviderResponse;
                toAmino(message: _104.QueryProviderResponse): _104.QueryProviderResponseAmino;
                fromAminoMsg(object: _104.QueryProviderResponseAminoMsg): _104.QueryProviderResponse;
                fromProtoMsg(message: _104.QueryProviderResponseProtoMsg): _104.QueryProviderResponse;
                toProto(message: _104.QueryProviderResponse): Uint8Array;
                toProtoMsg(message: _104.QueryProviderResponse): _104.QueryProviderResponseProtoMsg;
            };
            ProviderInfo: {
                typeUrl: string;
                encode(message: _103.ProviderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.ProviderInfo;
                fromPartial(object: Partial<_103.ProviderInfo>): _103.ProviderInfo;
                fromAmino(object: _103.ProviderInfoAmino): _103.ProviderInfo;
                toAmino(message: _103.ProviderInfo): _103.ProviderInfoAmino;
                fromAminoMsg(object: _103.ProviderInfoAminoMsg): _103.ProviderInfo;
                fromProtoMsg(message: _103.ProviderInfoProtoMsg): _103.ProviderInfo;
                toProto(message: _103.ProviderInfo): Uint8Array;
                toProtoMsg(message: _103.ProviderInfo): _103.ProviderInfoProtoMsg;
            };
            MsgCreateProvider: {
                typeUrl: string;
                encode(message: _103.MsgCreateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgCreateProvider;
                fromPartial(object: Partial<_103.MsgCreateProvider>): _103.MsgCreateProvider;
                fromAmino(object: _103.MsgCreateProviderAmino): _103.MsgCreateProvider;
                toAmino(message: _103.MsgCreateProvider): _103.MsgCreateProviderAmino;
                fromAminoMsg(object: _103.MsgCreateProviderAminoMsg): _103.MsgCreateProvider;
                fromProtoMsg(message: _103.MsgCreateProviderProtoMsg): _103.MsgCreateProvider;
                toProto(message: _103.MsgCreateProvider): Uint8Array;
                toProtoMsg(message: _103.MsgCreateProvider): _103.MsgCreateProviderProtoMsg;
            };
            MsgCreateProviderResponse: {
                typeUrl: string;
                encode(_: _103.MsgCreateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgCreateProviderResponse;
                fromPartial(_: Partial<_103.MsgCreateProviderResponse>): _103.MsgCreateProviderResponse;
                fromAmino(_: _103.MsgCreateProviderResponseAmino): _103.MsgCreateProviderResponse;
                toAmino(_: _103.MsgCreateProviderResponse): _103.MsgCreateProviderResponseAmino;
                fromAminoMsg(object: _103.MsgCreateProviderResponseAminoMsg): _103.MsgCreateProviderResponse;
                fromProtoMsg(message: _103.MsgCreateProviderResponseProtoMsg): _103.MsgCreateProviderResponse;
                toProto(message: _103.MsgCreateProviderResponse): Uint8Array;
                toProtoMsg(message: _103.MsgCreateProviderResponse): _103.MsgCreateProviderResponseProtoMsg;
            };
            MsgUpdateProvider: {
                typeUrl: string;
                encode(message: _103.MsgUpdateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgUpdateProvider;
                fromPartial(object: Partial<_103.MsgUpdateProvider>): _103.MsgUpdateProvider;
                fromAmino(object: _103.MsgUpdateProviderAmino): _103.MsgUpdateProvider;
                toAmino(message: _103.MsgUpdateProvider): _103.MsgUpdateProviderAmino;
                fromAminoMsg(object: _103.MsgUpdateProviderAminoMsg): _103.MsgUpdateProvider;
                fromProtoMsg(message: _103.MsgUpdateProviderProtoMsg): _103.MsgUpdateProvider;
                toProto(message: _103.MsgUpdateProvider): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateProvider): _103.MsgUpdateProviderProtoMsg;
            };
            MsgUpdateProviderResponse: {
                typeUrl: string;
                encode(_: _103.MsgUpdateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgUpdateProviderResponse;
                fromPartial(_: Partial<_103.MsgUpdateProviderResponse>): _103.MsgUpdateProviderResponse;
                fromAmino(_: _103.MsgUpdateProviderResponseAmino): _103.MsgUpdateProviderResponse;
                toAmino(_: _103.MsgUpdateProviderResponse): _103.MsgUpdateProviderResponseAmino;
                fromAminoMsg(object: _103.MsgUpdateProviderResponseAminoMsg): _103.MsgUpdateProviderResponse;
                fromProtoMsg(message: _103.MsgUpdateProviderResponseProtoMsg): _103.MsgUpdateProviderResponse;
                toProto(message: _103.MsgUpdateProviderResponse): Uint8Array;
                toProtoMsg(message: _103.MsgUpdateProviderResponse): _103.MsgUpdateProviderResponseProtoMsg;
            };
            MsgDeleteProvider: {
                typeUrl: string;
                encode(message: _103.MsgDeleteProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.MsgDeleteProvider;
                fromPartial(object: Partial<_103.MsgDeleteProvider>): _103.MsgDeleteProvider;
                fromAmino(object: _103.MsgDeleteProviderAmino): _103.MsgDeleteProvider;
                toAmino(message: _103.MsgDeleteProvider): _103.MsgDeleteProviderAmino;
                fromAminoMsg(object: _103.MsgDeleteProviderAminoMsg): _103.MsgDeleteProvider;
                fromProtoMsg(message: _103.MsgDeleteProviderProtoMsg): _103.MsgDeleteProvider;
                toProto(message: _103.MsgDeleteProvider): Uint8Array;
                toProtoMsg(message: _103.MsgDeleteProvider): _103.MsgDeleteProviderProtoMsg;
            };
            MsgDeleteProviderResponse: {
                typeUrl: string;
                encode(_: _103.MsgDeleteProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _103.MsgDeleteProviderResponse;
                fromPartial(_: Partial<_103.MsgDeleteProviderResponse>): _103.MsgDeleteProviderResponse;
                fromAmino(_: _103.MsgDeleteProviderResponseAmino): _103.MsgDeleteProviderResponse;
                toAmino(_: _103.MsgDeleteProviderResponse): _103.MsgDeleteProviderResponseAmino;
                fromAminoMsg(object: _103.MsgDeleteProviderResponseAminoMsg): _103.MsgDeleteProviderResponse;
                fromProtoMsg(message: _103.MsgDeleteProviderResponseProtoMsg): _103.MsgDeleteProviderResponse;
                toProto(message: _103.MsgDeleteProviderResponse): Uint8Array;
                toProtoMsg(message: _103.MsgDeleteProviderResponse): _103.MsgDeleteProviderResponseProtoMsg;
            };
            Provider: {
                typeUrl: string;
                encode(message: _103.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _103.Provider;
                fromPartial(object: Partial<_103.Provider>): _103.Provider;
                fromAmino(object: _103.ProviderAmino): _103.Provider;
                toAmino(message: _103.Provider): _103.ProviderAmino;
                fromAminoMsg(object: _103.ProviderAminoMsg): _103.Provider;
                fromProtoMsg(message: _103.ProviderProtoMsg): _103.Provider;
                toProto(message: _103.Provider): Uint8Array;
                toProtoMsg(message: _103.Provider): _103.ProviderProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _102.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _102.GenesisState;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                fromAmino(object: _102.GenesisStateAmino): _102.GenesisState;
                toAmino(message: _102.GenesisState): _102.GenesisStateAmino;
                fromAminoMsg(object: _102.GenesisStateAminoMsg): _102.GenesisState;
                fromProtoMsg(message: _102.GenesisStateProtoMsg): _102.GenesisState;
                toProto(message: _102.GenesisState): Uint8Array;
                toProtoMsg(message: _102.GenesisState): _102.GenesisStateProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta3: {
            Params: {
                typeUrl: string;
                encode(message: _106.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _106.Params;
                fromPartial(object: Partial<_106.Params>): _106.Params;
                fromAmino(object: _106.ParamsAmino): _106.Params;
                toAmino(message: _106.Params): _106.ParamsAmino;
                fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                toProto(message: _106.Params): Uint8Array;
                toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _105.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _105.GenesisState;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
                fromAmino(object: _105.GenesisStateAmino): _105.GenesisState;
                toAmino(message: _105.GenesisState): _105.GenesisStateAmino;
                fromAminoMsg(object: _105.GenesisStateAminoMsg): _105.GenesisState;
                fromProtoMsg(message: _105.GenesisStateProtoMsg): _105.GenesisState;
                toProto(message: _105.GenesisState): Uint8Array;
                toProtoMsg(message: _105.GenesisState): _105.GenesisStateProtoMsg;
            };
        };
    }
    namespace take {
        const v1beta3: {
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {};
            DenomTakeRate: {
                typeUrl: string;
                encode(message: _108.DenomTakeRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.DenomTakeRate;
                fromPartial(object: Partial<_108.DenomTakeRate>): _108.DenomTakeRate;
                fromAmino(object: _108.DenomTakeRateAmino): _108.DenomTakeRate;
                toAmino(message: _108.DenomTakeRate): _108.DenomTakeRateAmino;
                fromAminoMsg(object: _108.DenomTakeRateAminoMsg): _108.DenomTakeRate;
                fromProtoMsg(message: _108.DenomTakeRateProtoMsg): _108.DenomTakeRate;
                toProto(message: _108.DenomTakeRate): Uint8Array;
                toProtoMsg(message: _108.DenomTakeRate): _108.DenomTakeRateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _108.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _108.Params;
                fromPartial(object: Partial<_108.Params>): _108.Params;
                fromAmino(object: _108.ParamsAmino): _108.Params;
                toAmino(message: _108.Params): _108.ParamsAmino;
                fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
                fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
                toProto(message: _108.Params): Uint8Array;
                toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _107.GenesisState;
                fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
                toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
                fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
                fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
                toProto(message: _107.GenesisState): Uint8Array;
                toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            akash: {
                audit: {
                    v1beta1: _271.MsgClientImpl;
                    v1beta2: _272.MsgClientImpl;
                    v1beta3: _273.MsgClientImpl;
                };
                cert: {
                    v1beta2: _274.MsgClientImpl;
                    v1beta3: _275.MsgClientImpl;
                };
                deployment: {
                    v1beta1: _276.MsgClientImpl;
                    v1beta2: _277.MsgClientImpl;
                    v1beta3: _278.MsgClientImpl;
                };
                market: {
                    v1beta2: _279.MsgClientImpl;
                    v1beta3: _280.MsgClientImpl;
                    v1beta4: _281.MsgClientImpl;
                };
                provider: {
                    v1beta1: _282.MsgClientImpl;
                    v1beta2: _283.MsgClientImpl;
                    v1beta3: _284.MsgClientImpl;
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
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            akash: {
                audit: {
                    v1beta2: {
                        allProvidersAttributes(request?: _3.QueryAllProvidersAttributesRequest): Promise<_3.QueryProvidersResponse>;
                        providerAttributes(request: _3.QueryProviderAttributesRequest): Promise<_3.QueryProvidersResponse>;
                        providerAuditorAttributes(request: _3.QueryProviderAuditorRequest): Promise<_3.QueryProvidersResponse>;
                        auditorAttributes(request: _3.QueryAuditorAttributesRequest): Promise<_3.QueryProvidersResponse>;
                    };
                    v1beta3: {
                        allProvidersAttributes(request?: _6.QueryAllProvidersAttributesRequest): Promise<_6.QueryProvidersResponse>;
                        providerAttributes(request: _6.QueryProviderAttributesRequest): Promise<_6.QueryProvidersResponse>;
                        providerAuditorAttributes(request: _6.QueryProviderAuditorRequest): Promise<_6.QueryProvidersResponse>;
                        auditorAttributes(request: _6.QueryAuditorAttributesRequest): Promise<_6.QueryProvidersResponse>;
                    };
                };
                cert: {
                    v1beta2: {
                        certificates(request: _26.QueryCertificatesRequest): Promise<_26.QueryCertificatesResponse>;
                    };
                    v1beta3: {
                        certificates(request: _29.QueryCertificatesRequest): Promise<_29.QueryCertificatesResponse>;
                    };
                };
                deployment: {
                    v1beta1: {
                        deployments(request: _35.QueryDeploymentsRequest): Promise<_35.QueryDeploymentsResponse>;
                        deployment(request: _35.QueryDeploymentRequest): Promise<_35.QueryDeploymentResponse>;
                        group(request: _35.QueryGroupRequest): Promise<_35.QueryGroupResponse>;
                    };
                    v1beta2: {
                        deployments(request: _45.QueryDeploymentsRequest): Promise<_45.QueryDeploymentsResponse>;
                        deployment(request: _45.QueryDeploymentRequest): Promise<_45.QueryDeploymentResponse>;
                        group(request: _45.QueryGroupRequest): Promise<_45.QueryGroupResponse>;
                    };
                    v1beta3: {
                        deployments(request: _57.QueryDeploymentsRequest): Promise<_57.QueryDeploymentsResponse>;
                        deployment(request: _57.QueryDeploymentRequest): Promise<_57.QueryDeploymentResponse>;
                        group(request: _57.QueryGroupRequest): Promise<_57.QueryGroupResponse>;
                    };
                };
                escrow: {
                    v1beta1: {
                        accounts(request: _63.QueryAccountsRequest): Promise<_63.QueryAccountsResponse>;
                        payments(request: _63.QueryPaymentsRequest): Promise<_63.QueryPaymentsResponse>;
                    };
                    v1beta2: {
                        accounts(request: _66.QueryAccountsRequest): Promise<_66.QueryAccountsResponse>;
                        payments(request: _66.QueryPaymentsRequest): Promise<_66.QueryPaymentsResponse>;
                    };
                    v1beta3: {
                        accounts(request: _69.QueryAccountsRequest): Promise<_69.QueryAccountsResponse>;
                        payments(request: _69.QueryPaymentsRequest): Promise<_69.QueryPaymentsResponse>;
                    };
                };
                market: {
                    v1beta2: {
                        orders(request: _82.QueryOrdersRequest): Promise<_82.QueryOrdersResponse>;
                        order(request: _82.QueryOrderRequest): Promise<_82.QueryOrderResponse>;
                        bids(request: _82.QueryBidsRequest): Promise<_82.QueryBidsResponse>;
                        bid(request: _82.QueryBidRequest): Promise<_82.QueryBidResponse>;
                        leases(request: _82.QueryLeasesRequest): Promise<_82.QueryLeasesResponse>;
                        lease(request: _82.QueryLeaseRequest): Promise<_82.QueryLeaseResponse>;
                    };
                    v1beta3: {
                        orders(request: _89.QueryOrdersRequest): Promise<_89.QueryOrdersResponse>;
                        order(request: _89.QueryOrderRequest): Promise<_89.QueryOrderResponse>;
                        bids(request: _89.QueryBidsRequest): Promise<_89.QueryBidsResponse>;
                        bid(request: _89.QueryBidRequest): Promise<_89.QueryBidResponse>;
                        leases(request: _89.QueryLeasesRequest): Promise<_89.QueryLeasesResponse>;
                        lease(request: _89.QueryLeaseRequest): Promise<_89.QueryLeaseResponse>;
                    };
                    v1beta4: {
                        orders(request: _96.QueryOrdersRequest): Promise<_96.QueryOrdersResponse>;
                        order(request: _96.QueryOrderRequest): Promise<_96.QueryOrderResponse>;
                        bids(request: _96.QueryBidsRequest): Promise<_96.QueryBidsResponse>;
                        bid(request: _96.QueryBidRequest): Promise<_96.QueryBidResponse>;
                        leases(request: _96.QueryLeasesRequest): Promise<_96.QueryLeasesResponse>;
                        lease(request: _96.QueryLeaseRequest): Promise<_96.QueryLeaseResponse>;
                    };
                };
                provider: {
                    v1beta2: {
                        providers(request?: _101.QueryProvidersRequest): Promise<_101.QueryProvidersResponse>;
                        provider(request: _101.QueryProviderRequest): Promise<_101.QueryProviderResponse>;
                    };
                    v1beta3: {
                        providers(request?: _104.QueryProvidersRequest): Promise<_104.QueryProvidersResponse>;
                        provider(request: _104.QueryProviderRequest): Promise<_104.QueryProviderResponse>;
                    };
                };
                take: {
                    v1beta3: {};
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
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
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            akash: {
                audit: {
                    v1beta2: _240.LCDQueryClient;
                    v1beta3: _241.LCDQueryClient;
                };
                cert: {
                    v1beta2: _242.LCDQueryClient;
                    v1beta3: _243.LCDQueryClient;
                };
                deployment: {
                    v1beta1: _244.LCDQueryClient;
                    v1beta2: _245.LCDQueryClient;
                    v1beta3: _246.LCDQueryClient;
                };
                escrow: {
                    v1beta1: _247.LCDQueryClient;
                    v1beta2: _248.LCDQueryClient;
                    v1beta3: _249.LCDQueryClient;
                };
                market: {
                    v1beta2: _250.LCDQueryClient;
                    v1beta3: _251.LCDQueryClient;
                    v1beta4: _252.LCDQueryClient;
                };
                provider: {
                    v1beta2: _253.LCDQueryClient;
                    v1beta3: _254.LCDQueryClient;
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
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
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
