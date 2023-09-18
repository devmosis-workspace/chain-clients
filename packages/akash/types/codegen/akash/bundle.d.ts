import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./base/v1beta1/attribute";
import * as _5 from "./base/v1beta1/endpoint";
import * as _6 from "./base/v1beta1/resource";
import * as _7 from "./base/v1beta1/resourcevalue";
import * as _8 from "./base/v1beta2/attribute";
import * as _9 from "./base/v1beta2/endpoint";
import * as _10 from "./base/v1beta2/resource";
import * as _11 from "./base/v1beta2/resourceunits";
import * as _12 from "./base/v1beta2/resourcevalue";
import * as _13 from "./cert/v1beta2/cert";
import * as _14 from "./cert/v1beta2/genesis";
import * as _15 from "./cert/v1beta2/query";
import * as _16 from "./deployment/v1beta1/authz";
import * as _17 from "./deployment/v1beta1/deployment";
import * as _18 from "./deployment/v1beta1/genesis";
import * as _19 from "./deployment/v1beta1/group";
import * as _20 from "./deployment/v1beta1/params";
import * as _21 from "./deployment/v1beta1/query";
import * as _22 from "./deployment/v1beta2/authz";
import * as _23 from "./deployment/v1beta2/deployment";
import * as _24 from "./deployment/v1beta2/deploymentmsg";
import * as _25 from "./deployment/v1beta2/genesis";
import * as _26 from "./deployment/v1beta2/group";
import * as _27 from "./deployment/v1beta2/groupid";
import * as _28 from "./deployment/v1beta2/groupmsg";
import * as _29 from "./deployment/v1beta2/groupspec";
import * as _30 from "./deployment/v1beta2/params";
import * as _31 from "./deployment/v1beta2/query";
import * as _32 from "./deployment/v1beta2/resource";
import * as _34 from "./escrow/v1beta1/genesis";
import * as _35 from "./escrow/v1beta1/query";
import * as _36 from "./escrow/v1beta1/types";
import * as _37 from "./escrow/v1beta2/genesis";
import * as _38 from "./escrow/v1beta2/query";
import * as _39 from "./escrow/v1beta2/types";
import * as _40 from "./inflation/v1beta2/genesis";
import * as _41 from "./inflation/v1beta2/params";
import * as _42 from "./market/v1beta2/bid";
import * as _43 from "./market/v1beta2/genesis";
import * as _44 from "./market/v1beta2/lease";
import * as _45 from "./market/v1beta2/order";
import * as _46 from "./market/v1beta2/params";
import * as _47 from "./market/v1beta2/query";
import * as _49 from "./provider/v1beta1/provider";
import * as _50 from "./provider/v1beta2/genesis";
import * as _51 from "./provider/v1beta2/provider";
import * as _52 from "./provider/v1beta2/query";
import * as _170 from "./audit/v1beta2/query.lcd";
import * as _171 from "./cert/v1beta2/query.lcd";
import * as _172 from "./deployment/v1beta1/query.lcd";
import * as _173 from "./deployment/v1beta2/query.lcd";
import * as _174 from "./escrow/v1beta1/query.lcd";
import * as _175 from "./escrow/v1beta2/query.lcd";
import * as _176 from "./market/v1beta2/query.lcd";
import * as _177 from "./provider/v1beta2/query.lcd";
import * as _178 from "./audit/v1beta2/query.rpc.Query";
import * as _179 from "./cert/v1beta2/query.rpc.Query";
import * as _180 from "./deployment/v1beta1/query.rpc.Query";
import * as _181 from "./deployment/v1beta2/query.rpc.Query";
import * as _182 from "./escrow/v1beta1/query.rpc.Query";
import * as _183 from "./escrow/v1beta2/query.rpc.Query";
import * as _184 from "./market/v1beta2/query.rpc.Query";
import * as _185 from "./provider/v1beta2/query.rpc.Query";
import * as _186 from "./audit/v1beta1/audit.rpc.msg";
import * as _187 from "./audit/v1beta2/audit.rpc.msg";
import * as _188 from "./cert/v1beta2/cert.rpc.msg";
import * as _189 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _190 from "./deployment/v1beta2/service.rpc.msg";
import * as _191 from "./market/v1beta2/service.rpc.msg";
import * as _192 from "./provider/v1beta1/provider.rpc.msg";
import * as _193 from "./provider/v1beta2/provider.rpc.msg";
export declare namespace akash {
    namespace audit {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
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
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allProvidersAttributes(request?: _3.QueryAllProvidersAttributesRequest): Promise<_3.QueryProvidersResponse>;
                providerAttributes(request: _3.QueryProviderAttributesRequest): Promise<_3.QueryProvidersResponse>;
                providerAuditorAttributes(request: _3.QueryProviderAuditorRequest): Promise<_3.QueryProvidersResponse>;
                auditorAttributes(request: _3.QueryAuditorAttributesRequest): Promise<_3.QueryProvidersResponse>;
            };
            LCDQueryClient: typeof _170.LCDQueryClient;
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
    }
    namespace base {
        const v1beta1: {
            ResourceValue: {
                typeUrl: string;
                encode(message: _7.ResourceValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.ResourceValue;
                fromPartial(object: Partial<_7.ResourceValue>): _7.ResourceValue;
                fromAmino(object: _7.ResourceValueAmino): _7.ResourceValue;
                toAmino(message: _7.ResourceValue): _7.ResourceValueAmino;
                fromAminoMsg(object: _7.ResourceValueAminoMsg): _7.ResourceValue;
                fromProtoMsg(message: _7.ResourceValueProtoMsg): _7.ResourceValue;
                toProto(message: _7.ResourceValue): Uint8Array;
                toProtoMsg(message: _7.ResourceValue): _7.ResourceValueProtoMsg;
            };
            CPU: {
                typeUrl: string;
                encode(message: _6.CPU, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.CPU;
                fromPartial(object: Partial<_6.CPU>): _6.CPU;
                fromAmino(object: _6.CPUAmino): _6.CPU;
                toAmino(message: _6.CPU): _6.CPUAmino;
                fromAminoMsg(object: _6.CPUAminoMsg): _6.CPU;
                fromProtoMsg(message: _6.CPUProtoMsg): _6.CPU;
                toProto(message: _6.CPU): Uint8Array;
                toProtoMsg(message: _6.CPU): _6.CPUProtoMsg;
            };
            Memory: {
                typeUrl: string;
                encode(message: _6.Memory, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Memory;
                fromPartial(object: Partial<_6.Memory>): _6.Memory;
                fromAmino(object: _6.MemoryAmino): _6.Memory;
                toAmino(message: _6.Memory): _6.MemoryAmino;
                fromAminoMsg(object: _6.MemoryAminoMsg): _6.Memory;
                fromProtoMsg(message: _6.MemoryProtoMsg): _6.Memory;
                toProto(message: _6.Memory): Uint8Array;
                toProtoMsg(message: _6.Memory): _6.MemoryProtoMsg;
            };
            Storage: {
                typeUrl: string;
                encode(message: _6.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Storage;
                fromPartial(object: Partial<_6.Storage>): _6.Storage;
                fromAmino(object: _6.StorageAmino): _6.Storage;
                toAmino(message: _6.Storage): _6.StorageAmino;
                fromAminoMsg(object: _6.StorageAminoMsg): _6.Storage;
                fromProtoMsg(message: _6.StorageProtoMsg): _6.Storage;
                toProto(message: _6.Storage): Uint8Array;
                toProtoMsg(message: _6.Storage): _6.StorageProtoMsg;
            };
            ResourceUnits: {
                typeUrl: string;
                encode(message: _6.ResourceUnits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.ResourceUnits;
                fromPartial(object: Partial<_6.ResourceUnits>): _6.ResourceUnits;
                fromAmino(object: _6.ResourceUnitsAmino): _6.ResourceUnits;
                toAmino(message: _6.ResourceUnits): _6.ResourceUnitsAmino;
                fromAminoMsg(object: _6.ResourceUnitsAminoMsg): _6.ResourceUnits;
                fromProtoMsg(message: _6.ResourceUnitsProtoMsg): _6.ResourceUnits;
                toProto(message: _6.ResourceUnits): Uint8Array;
                toProtoMsg(message: _6.ResourceUnits): _6.ResourceUnitsProtoMsg;
            };
            endpoint_KindFromJSON(object: any): _5.Endpoint_Kind;
            endpoint_KindToJSON(object: _5.Endpoint_Kind): string;
            Endpoint_Kind: typeof _5.Endpoint_Kind;
            Endpoint_KindSDKType: typeof _5.Endpoint_Kind;
            Endpoint_KindAmino: typeof _5.Endpoint_Kind;
            Endpoint: {
                typeUrl: string;
                encode(message: _5.Endpoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Endpoint;
                fromPartial(object: Partial<_5.Endpoint>): _5.Endpoint;
                fromAmino(object: _5.EndpointAmino): _5.Endpoint;
                toAmino(message: _5.Endpoint): _5.EndpointAmino;
                fromAminoMsg(object: _5.EndpointAminoMsg): _5.Endpoint;
                fromProtoMsg(message: _5.EndpointProtoMsg): _5.Endpoint;
                toProto(message: _5.Endpoint): Uint8Array;
                toProtoMsg(message: _5.Endpoint): _5.EndpointProtoMsg;
            };
            Attribute: {
                typeUrl: string;
                encode(message: _4.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Attribute;
                fromPartial(object: Partial<_4.Attribute>): _4.Attribute;
                fromAmino(object: _4.AttributeAmino): _4.Attribute;
                toAmino(message: _4.Attribute): _4.AttributeAmino;
                fromAminoMsg(object: _4.AttributeAminoMsg): _4.Attribute;
                fromProtoMsg(message: _4.AttributeProtoMsg): _4.Attribute;
                toProto(message: _4.Attribute): Uint8Array;
                toProtoMsg(message: _4.Attribute): _4.AttributeProtoMsg;
            };
            SignedBy: {
                typeUrl: string;
                encode(message: _4.SignedBy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.SignedBy;
                fromPartial(object: Partial<_4.SignedBy>): _4.SignedBy;
                fromAmino(object: _4.SignedByAmino): _4.SignedBy;
                toAmino(message: _4.SignedBy): _4.SignedByAmino;
                fromAminoMsg(object: _4.SignedByAminoMsg): _4.SignedBy;
                fromProtoMsg(message: _4.SignedByProtoMsg): _4.SignedBy;
                toProto(message: _4.SignedBy): Uint8Array;
                toProtoMsg(message: _4.SignedBy): _4.SignedByProtoMsg;
            };
            PlacementRequirements: {
                typeUrl: string;
                encode(message: _4.PlacementRequirements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.PlacementRequirements;
                fromPartial(object: Partial<_4.PlacementRequirements>): _4.PlacementRequirements;
                fromAmino(object: _4.PlacementRequirementsAmino): _4.PlacementRequirements;
                toAmino(message: _4.PlacementRequirements): _4.PlacementRequirementsAmino;
                fromAminoMsg(object: _4.PlacementRequirementsAminoMsg): _4.PlacementRequirements;
                fromProtoMsg(message: _4.PlacementRequirementsProtoMsg): _4.PlacementRequirements;
                toProto(message: _4.PlacementRequirements): Uint8Array;
                toProtoMsg(message: _4.PlacementRequirements): _4.PlacementRequirementsProtoMsg;
            };
        };
        const v1beta2: {
            ResourceValue: {
                typeUrl: string;
                encode(message: _12.ResourceValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.ResourceValue;
                fromPartial(object: Partial<_12.ResourceValue>): _12.ResourceValue;
                fromAmino(object: _12.ResourceValueAmino): _12.ResourceValue;
                toAmino(message: _12.ResourceValue): _12.ResourceValueAmino;
                fromAminoMsg(object: _12.ResourceValueAminoMsg): _12.ResourceValue;
                fromProtoMsg(message: _12.ResourceValueProtoMsg): _12.ResourceValue;
                toProto(message: _12.ResourceValue): Uint8Array;
                toProtoMsg(message: _12.ResourceValue): _12.ResourceValueProtoMsg;
            };
            ResourceUnits: {
                typeUrl: string;
                encode(message: _11.ResourceUnits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ResourceUnits;
                fromPartial(object: Partial<_11.ResourceUnits>): _11.ResourceUnits;
                fromAmino(object: _11.ResourceUnitsAmino): _11.ResourceUnits;
                toAmino(message: _11.ResourceUnits): _11.ResourceUnitsAmino;
                fromAminoMsg(object: _11.ResourceUnitsAminoMsg): _11.ResourceUnits;
                fromProtoMsg(message: _11.ResourceUnitsProtoMsg): _11.ResourceUnits;
                toProto(message: _11.ResourceUnits): Uint8Array;
                toProtoMsg(message: _11.ResourceUnits): _11.ResourceUnitsProtoMsg;
            };
            CPU: {
                typeUrl: string;
                encode(message: _10.CPU, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.CPU;
                fromPartial(object: Partial<_10.CPU>): _10.CPU;
                fromAmino(object: _10.CPUAmino): _10.CPU;
                toAmino(message: _10.CPU): _10.CPUAmino;
                fromAminoMsg(object: _10.CPUAminoMsg): _10.CPU;
                fromProtoMsg(message: _10.CPUProtoMsg): _10.CPU;
                toProto(message: _10.CPU): Uint8Array;
                toProtoMsg(message: _10.CPU): _10.CPUProtoMsg;
            };
            Memory: {
                typeUrl: string;
                encode(message: _10.Memory, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Memory;
                fromPartial(object: Partial<_10.Memory>): _10.Memory;
                fromAmino(object: _10.MemoryAmino): _10.Memory;
                toAmino(message: _10.Memory): _10.MemoryAmino;
                fromAminoMsg(object: _10.MemoryAminoMsg): _10.Memory;
                fromProtoMsg(message: _10.MemoryProtoMsg): _10.Memory;
                toProto(message: _10.Memory): Uint8Array;
                toProtoMsg(message: _10.Memory): _10.MemoryProtoMsg;
            };
            Storage: {
                typeUrl: string;
                encode(message: _10.Storage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Storage;
                fromPartial(object: Partial<_10.Storage>): _10.Storage;
                fromAmino(object: _10.StorageAmino): _10.Storage;
                toAmino(message: _10.Storage): _10.StorageAmino;
                fromAminoMsg(object: _10.StorageAminoMsg): _10.Storage;
                fromProtoMsg(message: _10.StorageProtoMsg): _10.Storage;
                toProto(message: _10.Storage): Uint8Array;
                toProtoMsg(message: _10.Storage): _10.StorageProtoMsg;
            };
            endpoint_KindFromJSON(object: any): _9.Endpoint_Kind;
            endpoint_KindToJSON(object: _9.Endpoint_Kind): string;
            Endpoint_Kind: typeof _9.Endpoint_Kind;
            Endpoint_KindSDKType: typeof _9.Endpoint_Kind;
            Endpoint_KindAmino: typeof _9.Endpoint_Kind;
            Endpoint: {
                typeUrl: string;
                encode(message: _9.Endpoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Endpoint;
                fromPartial(object: Partial<_9.Endpoint>): _9.Endpoint;
                fromAmino(object: _9.EndpointAmino): _9.Endpoint;
                toAmino(message: _9.Endpoint): _9.EndpointAmino;
                fromAminoMsg(object: _9.EndpointAminoMsg): _9.Endpoint;
                fromProtoMsg(message: _9.EndpointProtoMsg): _9.Endpoint;
                toProto(message: _9.Endpoint): Uint8Array;
                toProtoMsg(message: _9.Endpoint): _9.EndpointProtoMsg;
            };
            Attribute: {
                typeUrl: string;
                encode(message: _8.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Attribute;
                fromPartial(object: Partial<_8.Attribute>): _8.Attribute;
                fromAmino(object: _8.AttributeAmino): _8.Attribute;
                toAmino(message: _8.Attribute): _8.AttributeAmino;
                fromAminoMsg(object: _8.AttributeAminoMsg): _8.Attribute;
                fromProtoMsg(message: _8.AttributeProtoMsg): _8.Attribute;
                toProto(message: _8.Attribute): Uint8Array;
                toProtoMsg(message: _8.Attribute): _8.AttributeProtoMsg;
            };
            SignedBy: {
                typeUrl: string;
                encode(message: _8.SignedBy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.SignedBy;
                fromPartial(object: Partial<_8.SignedBy>): _8.SignedBy;
                fromAmino(object: _8.SignedByAmino): _8.SignedBy;
                toAmino(message: _8.SignedBy): _8.SignedByAmino;
                fromAminoMsg(object: _8.SignedByAminoMsg): _8.SignedBy;
                fromProtoMsg(message: _8.SignedByProtoMsg): _8.SignedBy;
                toProto(message: _8.SignedBy): Uint8Array;
                toProtoMsg(message: _8.SignedBy): _8.SignedByProtoMsg;
            };
            PlacementRequirements: {
                typeUrl: string;
                encode(message: _8.PlacementRequirements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.PlacementRequirements;
                fromPartial(object: Partial<_8.PlacementRequirements>): _8.PlacementRequirements;
                fromAmino(object: _8.PlacementRequirementsAmino): _8.PlacementRequirements;
                toAmino(message: _8.PlacementRequirements): _8.PlacementRequirementsAmino;
                fromAminoMsg(object: _8.PlacementRequirementsAminoMsg): _8.PlacementRequirements;
                fromProtoMsg(message: _8.PlacementRequirementsProtoMsg): _8.PlacementRequirements;
                toProto(message: _8.PlacementRequirements): Uint8Array;
                toProtoMsg(message: _8.PlacementRequirements): _8.PlacementRequirementsProtoMsg;
            };
        };
    }
    namespace cert {
        const v1beta2: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                certificates(request: _15.QueryCertificatesRequest): Promise<_15.QueryCertificatesResponse>;
            };
            LCDQueryClient: typeof _171.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCertificate(value: _13.MsgCreateCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeCertificate(value: _13.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCertificate(value: _13.MsgCreateCertificate): {
                        typeUrl: string;
                        value: _13.MsgCreateCertificate;
                    };
                    revokeCertificate(value: _13.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _13.MsgRevokeCertificate;
                    };
                };
                fromJSON: {
                    createCertificate(value: any): {
                        typeUrl: string;
                        value: _13.MsgCreateCertificate;
                    };
                    revokeCertificate(value: any): {
                        typeUrl: string;
                        value: _13.MsgRevokeCertificate;
                    };
                };
                fromPartial: {
                    createCertificate(value: _13.MsgCreateCertificate): {
                        typeUrl: string;
                        value: _13.MsgCreateCertificate;
                    };
                    revokeCertificate(value: _13.MsgRevokeCertificate): {
                        typeUrl: string;
                        value: _13.MsgRevokeCertificate;
                    };
                };
            };
            AminoConverter: {
                "/akash.cert.v1beta2.MsgCreateCertificate": {
                    aminoType: string;
                    toAmino: (message: _13.MsgCreateCertificate) => _13.MsgCreateCertificateAmino;
                    fromAmino: (object: _13.MsgCreateCertificateAmino) => _13.MsgCreateCertificate;
                };
                "/akash.cert.v1beta2.MsgRevokeCertificate": {
                    aminoType: string;
                    toAmino: (message: _13.MsgRevokeCertificate) => _13.MsgRevokeCertificateAmino;
                    fromAmino: (object: _13.MsgRevokeCertificateAmino) => _13.MsgRevokeCertificate;
                };
            };
            CertificateResponse: {
                typeUrl: string;
                encode(message: _15.CertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.CertificateResponse;
                fromPartial(object: Partial<_15.CertificateResponse>): _15.CertificateResponse;
                fromAmino(object: _15.CertificateResponseAmino): _15.CertificateResponse;
                toAmino(message: _15.CertificateResponse): _15.CertificateResponseAmino;
                fromAminoMsg(object: _15.CertificateResponseAminoMsg): _15.CertificateResponse;
                fromProtoMsg(message: _15.CertificateResponseProtoMsg): _15.CertificateResponse;
                toProto(message: _15.CertificateResponse): Uint8Array;
                toProtoMsg(message: _15.CertificateResponse): _15.CertificateResponseProtoMsg;
            };
            QueryCertificatesRequest: {
                typeUrl: string;
                encode(message: _15.QueryCertificatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryCertificatesRequest;
                fromPartial(object: Partial<_15.QueryCertificatesRequest>): _15.QueryCertificatesRequest;
                fromAmino(object: _15.QueryCertificatesRequestAmino): _15.QueryCertificatesRequest;
                toAmino(message: _15.QueryCertificatesRequest): _15.QueryCertificatesRequestAmino;
                fromAminoMsg(object: _15.QueryCertificatesRequestAminoMsg): _15.QueryCertificatesRequest;
                fromProtoMsg(message: _15.QueryCertificatesRequestProtoMsg): _15.QueryCertificatesRequest;
                toProto(message: _15.QueryCertificatesRequest): Uint8Array;
                toProtoMsg(message: _15.QueryCertificatesRequest): _15.QueryCertificatesRequestProtoMsg;
            };
            QueryCertificatesResponse: {
                typeUrl: string;
                encode(message: _15.QueryCertificatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryCertificatesResponse;
                fromPartial(object: Partial<_15.QueryCertificatesResponse>): _15.QueryCertificatesResponse;
                fromAmino(object: _15.QueryCertificatesResponseAmino): _15.QueryCertificatesResponse;
                toAmino(message: _15.QueryCertificatesResponse): _15.QueryCertificatesResponseAmino;
                fromAminoMsg(object: _15.QueryCertificatesResponseAminoMsg): _15.QueryCertificatesResponse;
                fromProtoMsg(message: _15.QueryCertificatesResponseProtoMsg): _15.QueryCertificatesResponse;
                toProto(message: _15.QueryCertificatesResponse): Uint8Array;
                toProtoMsg(message: _15.QueryCertificatesResponse): _15.QueryCertificatesResponseProtoMsg;
            };
            GenesisCertificate: {
                typeUrl: string;
                encode(message: _14.GenesisCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GenesisCertificate;
                fromPartial(object: Partial<_14.GenesisCertificate>): _14.GenesisCertificate;
                fromAmino(object: _14.GenesisCertificateAmino): _14.GenesisCertificate;
                toAmino(message: _14.GenesisCertificate): _14.GenesisCertificateAmino;
                fromAminoMsg(object: _14.GenesisCertificateAminoMsg): _14.GenesisCertificate;
                fromProtoMsg(message: _14.GenesisCertificateProtoMsg): _14.GenesisCertificate;
                toProto(message: _14.GenesisCertificate): Uint8Array;
                toProtoMsg(message: _14.GenesisCertificate): _14.GenesisCertificateProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _14.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
                fromAmino(object: _14.GenesisStateAmino): _14.GenesisState;
                toAmino(message: _14.GenesisState): _14.GenesisStateAmino;
                fromAminoMsg(object: _14.GenesisStateAminoMsg): _14.GenesisState;
                fromProtoMsg(message: _14.GenesisStateProtoMsg): _14.GenesisState;
                toProto(message: _14.GenesisState): Uint8Array;
                toProtoMsg(message: _14.GenesisState): _14.GenesisStateProtoMsg;
            };
            certificate_StateFromJSON(object: any): _13.Certificate_State;
            certificate_StateToJSON(object: _13.Certificate_State): string;
            Certificate_State: typeof _13.Certificate_State;
            Certificate_StateSDKType: typeof _13.Certificate_State;
            Certificate_StateAmino: typeof _13.Certificate_State;
            CertificateID: {
                typeUrl: string;
                encode(message: _13.CertificateID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CertificateID;
                fromPartial(object: Partial<_13.CertificateID>): _13.CertificateID;
                fromAmino(object: _13.CertificateIDAmino): _13.CertificateID;
                toAmino(message: _13.CertificateID): _13.CertificateIDAmino;
                fromAminoMsg(object: _13.CertificateIDAminoMsg): _13.CertificateID;
                fromProtoMsg(message: _13.CertificateIDProtoMsg): _13.CertificateID;
                toProto(message: _13.CertificateID): Uint8Array;
                toProtoMsg(message: _13.CertificateID): _13.CertificateIDProtoMsg;
            };
            Certificate: {
                typeUrl: string;
                encode(message: _13.Certificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Certificate;
                fromPartial(object: Partial<_13.Certificate>): _13.Certificate;
                fromAmino(object: _13.CertificateAmino): _13.Certificate;
                toAmino(message: _13.Certificate): _13.CertificateAmino;
                fromAminoMsg(object: _13.CertificateAminoMsg): _13.Certificate;
                fromProtoMsg(message: _13.CertificateProtoMsg): _13.Certificate;
                toProto(message: _13.Certificate): Uint8Array;
                toProtoMsg(message: _13.Certificate): _13.CertificateProtoMsg;
            };
            CertificateFilter: {
                typeUrl: string;
                encode(message: _13.CertificateFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.CertificateFilter;
                fromPartial(object: Partial<_13.CertificateFilter>): _13.CertificateFilter;
                fromAmino(object: _13.CertificateFilterAmino): _13.CertificateFilter;
                toAmino(message: _13.CertificateFilter): _13.CertificateFilterAmino;
                fromAminoMsg(object: _13.CertificateFilterAminoMsg): _13.CertificateFilter;
                fromProtoMsg(message: _13.CertificateFilterProtoMsg): _13.CertificateFilter;
                toProto(message: _13.CertificateFilter): Uint8Array;
                toProtoMsg(message: _13.CertificateFilter): _13.CertificateFilterProtoMsg;
            };
            MsgCreateCertificate: {
                typeUrl: string;
                encode(message: _13.MsgCreateCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgCreateCertificate;
                fromPartial(object: Partial<_13.MsgCreateCertificate>): _13.MsgCreateCertificate;
                fromAmino(object: _13.MsgCreateCertificateAmino): _13.MsgCreateCertificate;
                toAmino(message: _13.MsgCreateCertificate): _13.MsgCreateCertificateAmino;
                fromAminoMsg(object: _13.MsgCreateCertificateAminoMsg): _13.MsgCreateCertificate;
                fromProtoMsg(message: _13.MsgCreateCertificateProtoMsg): _13.MsgCreateCertificate;
                toProto(message: _13.MsgCreateCertificate): Uint8Array;
                toProtoMsg(message: _13.MsgCreateCertificate): _13.MsgCreateCertificateProtoMsg;
            };
            MsgCreateCertificateResponse: {
                typeUrl: string;
                encode(_: _13.MsgCreateCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgCreateCertificateResponse;
                fromPartial(_: Partial<_13.MsgCreateCertificateResponse>): _13.MsgCreateCertificateResponse;
                fromAmino(_: _13.MsgCreateCertificateResponseAmino): _13.MsgCreateCertificateResponse;
                toAmino(_: _13.MsgCreateCertificateResponse): _13.MsgCreateCertificateResponseAmino;
                fromAminoMsg(object: _13.MsgCreateCertificateResponseAminoMsg): _13.MsgCreateCertificateResponse;
                fromProtoMsg(message: _13.MsgCreateCertificateResponseProtoMsg): _13.MsgCreateCertificateResponse;
                toProto(message: _13.MsgCreateCertificateResponse): Uint8Array;
                toProtoMsg(message: _13.MsgCreateCertificateResponse): _13.MsgCreateCertificateResponseProtoMsg;
            };
            MsgRevokeCertificate: {
                typeUrl: string;
                encode(message: _13.MsgRevokeCertificate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgRevokeCertificate;
                fromPartial(object: Partial<_13.MsgRevokeCertificate>): _13.MsgRevokeCertificate;
                fromAmino(object: _13.MsgRevokeCertificateAmino): _13.MsgRevokeCertificate;
                toAmino(message: _13.MsgRevokeCertificate): _13.MsgRevokeCertificateAmino;
                fromAminoMsg(object: _13.MsgRevokeCertificateAminoMsg): _13.MsgRevokeCertificate;
                fromProtoMsg(message: _13.MsgRevokeCertificateProtoMsg): _13.MsgRevokeCertificate;
                toProto(message: _13.MsgRevokeCertificate): Uint8Array;
                toProtoMsg(message: _13.MsgRevokeCertificate): _13.MsgRevokeCertificateProtoMsg;
            };
            MsgRevokeCertificateResponse: {
                typeUrl: string;
                encode(_: _13.MsgRevokeCertificateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgRevokeCertificateResponse;
                fromPartial(_: Partial<_13.MsgRevokeCertificateResponse>): _13.MsgRevokeCertificateResponse;
                fromAmino(_: _13.MsgRevokeCertificateResponseAmino): _13.MsgRevokeCertificateResponse;
                toAmino(_: _13.MsgRevokeCertificateResponse): _13.MsgRevokeCertificateResponseAmino;
                fromAminoMsg(object: _13.MsgRevokeCertificateResponseAminoMsg): _13.MsgRevokeCertificateResponse;
                fromProtoMsg(message: _13.MsgRevokeCertificateResponseProtoMsg): _13.MsgRevokeCertificateResponse;
                toProto(message: _13.MsgRevokeCertificateResponse): Uint8Array;
                toProtoMsg(message: _13.MsgRevokeCertificateResponse): _13.MsgRevokeCertificateResponseProtoMsg;
            };
        };
    }
    namespace deployment {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                deployments(request: _21.QueryDeploymentsRequest): Promise<_21.QueryDeploymentsResponse>;
                deployment(request: _21.QueryDeploymentRequest): Promise<_21.QueryDeploymentResponse>;
                group(request: _21.QueryGroupRequest): Promise<_21.QueryGroupResponse>;
            };
            LCDQueryClient: typeof _172.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDeployment(value: _17.MsgCreateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositDeployment(value: _17.MsgDepositDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDeployment(value: _17.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeDeployment(value: _17.MsgCloseDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeGroup(value: _19.MsgCloseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pauseGroup(value: _19.MsgPauseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startGroup(value: _19.MsgStartGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDeployment(value: _17.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _17.MsgCreateDeployment;
                    };
                    depositDeployment(value: _17.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _17.MsgDepositDeployment;
                    };
                    updateDeployment(value: _17.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _17.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _17.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _17.MsgCloseDeployment;
                    };
                    closeGroup(value: _19.MsgCloseGroup): {
                        typeUrl: string;
                        value: _19.MsgCloseGroup;
                    };
                    pauseGroup(value: _19.MsgPauseGroup): {
                        typeUrl: string;
                        value: _19.MsgPauseGroup;
                    };
                    startGroup(value: _19.MsgStartGroup): {
                        typeUrl: string;
                        value: _19.MsgStartGroup;
                    };
                };
                fromJSON: {
                    createDeployment(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateDeployment;
                    };
                    depositDeployment(value: any): {
                        typeUrl: string;
                        value: _17.MsgDepositDeployment;
                    };
                    updateDeployment(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateDeployment;
                    };
                    closeDeployment(value: any): {
                        typeUrl: string;
                        value: _17.MsgCloseDeployment;
                    };
                    closeGroup(value: any): {
                        typeUrl: string;
                        value: _19.MsgCloseGroup;
                    };
                    pauseGroup(value: any): {
                        typeUrl: string;
                        value: _19.MsgPauseGroup;
                    };
                    startGroup(value: any): {
                        typeUrl: string;
                        value: _19.MsgStartGroup;
                    };
                };
                fromPartial: {
                    createDeployment(value: _17.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _17.MsgCreateDeployment;
                    };
                    depositDeployment(value: _17.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _17.MsgDepositDeployment;
                    };
                    updateDeployment(value: _17.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _17.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _17.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _17.MsgCloseDeployment;
                    };
                    closeGroup(value: _19.MsgCloseGroup): {
                        typeUrl: string;
                        value: _19.MsgCloseGroup;
                    };
                    pauseGroup(value: _19.MsgPauseGroup): {
                        typeUrl: string;
                        value: _19.MsgPauseGroup;
                    };
                    startGroup(value: _19.MsgStartGroup): {
                        typeUrl: string;
                        value: _19.MsgStartGroup;
                    };
                };
            };
            AminoConverter: {
                "/akash.deployment.v1beta1.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateDeployment) => _17.MsgCreateDeploymentAmino;
                    fromAmino: (object: _17.MsgCreateDeploymentAmino) => _17.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta1.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDepositDeployment) => _17.MsgDepositDeploymentAmino;
                    fromAmino: (object: _17.MsgDepositDeploymentAmino) => _17.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta1.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateDeployment) => _17.MsgUpdateDeploymentAmino;
                    fromAmino: (object: _17.MsgUpdateDeploymentAmino) => _17.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCloseDeployment) => _17.MsgCloseDeploymentAmino;
                    fromAmino: (object: _17.MsgCloseDeploymentAmino) => _17.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCloseGroup) => _19.MsgCloseGroupAmino;
                    fromAmino: (object: _19.MsgCloseGroupAmino) => _19.MsgCloseGroup;
                };
                "/akash.deployment.v1beta1.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: (message: _19.MsgPauseGroup) => _19.MsgPauseGroupAmino;
                    fromAmino: (object: _19.MsgPauseGroupAmino) => _19.MsgPauseGroup;
                };
                "/akash.deployment.v1beta1.MsgStartGroup": {
                    aminoType: string;
                    toAmino: (message: _19.MsgStartGroup) => _19.MsgStartGroupAmino;
                    fromAmino: (object: _19.MsgStartGroupAmino) => _19.MsgStartGroup;
                };
            };
            QueryDeploymentsRequest: {
                typeUrl: string;
                encode(message: _21.QueryDeploymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDeploymentsRequest;
                fromPartial(object: Partial<_21.QueryDeploymentsRequest>): _21.QueryDeploymentsRequest;
                fromAmino(object: _21.QueryDeploymentsRequestAmino): _21.QueryDeploymentsRequest;
                toAmino(message: _21.QueryDeploymentsRequest): _21.QueryDeploymentsRequestAmino;
                fromAminoMsg(object: _21.QueryDeploymentsRequestAminoMsg): _21.QueryDeploymentsRequest;
                fromProtoMsg(message: _21.QueryDeploymentsRequestProtoMsg): _21.QueryDeploymentsRequest;
                toProto(message: _21.QueryDeploymentsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryDeploymentsRequest): _21.QueryDeploymentsRequestProtoMsg;
            };
            QueryDeploymentsResponse: {
                typeUrl: string;
                encode(message: _21.QueryDeploymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDeploymentsResponse;
                fromPartial(object: Partial<_21.QueryDeploymentsResponse>): _21.QueryDeploymentsResponse;
                fromAmino(object: _21.QueryDeploymentsResponseAmino): _21.QueryDeploymentsResponse;
                toAmino(message: _21.QueryDeploymentsResponse): _21.QueryDeploymentsResponseAmino;
                fromAminoMsg(object: _21.QueryDeploymentsResponseAminoMsg): _21.QueryDeploymentsResponse;
                fromProtoMsg(message: _21.QueryDeploymentsResponseProtoMsg): _21.QueryDeploymentsResponse;
                toProto(message: _21.QueryDeploymentsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryDeploymentsResponse): _21.QueryDeploymentsResponseProtoMsg;
            };
            QueryDeploymentRequest: {
                typeUrl: string;
                encode(message: _21.QueryDeploymentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDeploymentRequest;
                fromPartial(object: Partial<_21.QueryDeploymentRequest>): _21.QueryDeploymentRequest;
                fromAmino(object: _21.QueryDeploymentRequestAmino): _21.QueryDeploymentRequest;
                toAmino(message: _21.QueryDeploymentRequest): _21.QueryDeploymentRequestAmino;
                fromAminoMsg(object: _21.QueryDeploymentRequestAminoMsg): _21.QueryDeploymentRequest;
                fromProtoMsg(message: _21.QueryDeploymentRequestProtoMsg): _21.QueryDeploymentRequest;
                toProto(message: _21.QueryDeploymentRequest): Uint8Array;
                toProtoMsg(message: _21.QueryDeploymentRequest): _21.QueryDeploymentRequestProtoMsg;
            };
            QueryDeploymentResponse: {
                typeUrl: string;
                encode(message: _21.QueryDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryDeploymentResponse;
                fromPartial(object: Partial<_21.QueryDeploymentResponse>): _21.QueryDeploymentResponse;
                fromAmino(object: _21.QueryDeploymentResponseAmino): _21.QueryDeploymentResponse;
                toAmino(message: _21.QueryDeploymentResponse): _21.QueryDeploymentResponseAmino;
                fromAminoMsg(object: _21.QueryDeploymentResponseAminoMsg): _21.QueryDeploymentResponse;
                fromProtoMsg(message: _21.QueryDeploymentResponseProtoMsg): _21.QueryDeploymentResponse;
                toProto(message: _21.QueryDeploymentResponse): Uint8Array;
                toProtoMsg(message: _21.QueryDeploymentResponse): _21.QueryDeploymentResponseProtoMsg;
            };
            QueryGroupRequest: {
                typeUrl: string;
                encode(message: _21.QueryGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryGroupRequest;
                fromPartial(object: Partial<_21.QueryGroupRequest>): _21.QueryGroupRequest;
                fromAmino(object: _21.QueryGroupRequestAmino): _21.QueryGroupRequest;
                toAmino(message: _21.QueryGroupRequest): _21.QueryGroupRequestAmino;
                fromAminoMsg(object: _21.QueryGroupRequestAminoMsg): _21.QueryGroupRequest;
                fromProtoMsg(message: _21.QueryGroupRequestProtoMsg): _21.QueryGroupRequest;
                toProto(message: _21.QueryGroupRequest): Uint8Array;
                toProtoMsg(message: _21.QueryGroupRequest): _21.QueryGroupRequestProtoMsg;
            };
            QueryGroupResponse: {
                typeUrl: string;
                encode(message: _21.QueryGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryGroupResponse;
                fromPartial(object: Partial<_21.QueryGroupResponse>): _21.QueryGroupResponse;
                fromAmino(object: _21.QueryGroupResponseAmino): _21.QueryGroupResponse;
                toAmino(message: _21.QueryGroupResponse): _21.QueryGroupResponseAmino;
                fromAminoMsg(object: _21.QueryGroupResponseAminoMsg): _21.QueryGroupResponse;
                fromProtoMsg(message: _21.QueryGroupResponseProtoMsg): _21.QueryGroupResponse;
                toProto(message: _21.QueryGroupResponse): Uint8Array;
                toProtoMsg(message: _21.QueryGroupResponse): _21.QueryGroupResponseProtoMsg;
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
            group_StateFromJSON(object: any): _19.Group_State;
            group_StateToJSON(object: _19.Group_State): string;
            Group_State: typeof _19.Group_State;
            Group_StateSDKType: typeof _19.Group_State;
            Group_StateAmino: typeof _19.Group_State;
            MsgCloseGroup: {
                typeUrl: string;
                encode(message: _19.MsgCloseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCloseGroup;
                fromPartial(object: Partial<_19.MsgCloseGroup>): _19.MsgCloseGroup;
                fromAmino(object: _19.MsgCloseGroupAmino): _19.MsgCloseGroup;
                toAmino(message: _19.MsgCloseGroup): _19.MsgCloseGroupAmino;
                fromAminoMsg(object: _19.MsgCloseGroupAminoMsg): _19.MsgCloseGroup;
                fromProtoMsg(message: _19.MsgCloseGroupProtoMsg): _19.MsgCloseGroup;
                toProto(message: _19.MsgCloseGroup): Uint8Array;
                toProtoMsg(message: _19.MsgCloseGroup): _19.MsgCloseGroupProtoMsg;
            };
            MsgCloseGroupResponse: {
                typeUrl: string;
                encode(_: _19.MsgCloseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgCloseGroupResponse;
                fromPartial(_: Partial<_19.MsgCloseGroupResponse>): _19.MsgCloseGroupResponse;
                fromAmino(_: _19.MsgCloseGroupResponseAmino): _19.MsgCloseGroupResponse;
                toAmino(_: _19.MsgCloseGroupResponse): _19.MsgCloseGroupResponseAmino;
                fromAminoMsg(object: _19.MsgCloseGroupResponseAminoMsg): _19.MsgCloseGroupResponse;
                fromProtoMsg(message: _19.MsgCloseGroupResponseProtoMsg): _19.MsgCloseGroupResponse;
                toProto(message: _19.MsgCloseGroupResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCloseGroupResponse): _19.MsgCloseGroupResponseProtoMsg;
            };
            MsgPauseGroup: {
                typeUrl: string;
                encode(message: _19.MsgPauseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgPauseGroup;
                fromPartial(object: Partial<_19.MsgPauseGroup>): _19.MsgPauseGroup;
                fromAmino(object: _19.MsgPauseGroupAmino): _19.MsgPauseGroup;
                toAmino(message: _19.MsgPauseGroup): _19.MsgPauseGroupAmino;
                fromAminoMsg(object: _19.MsgPauseGroupAminoMsg): _19.MsgPauseGroup;
                fromProtoMsg(message: _19.MsgPauseGroupProtoMsg): _19.MsgPauseGroup;
                toProto(message: _19.MsgPauseGroup): Uint8Array;
                toProtoMsg(message: _19.MsgPauseGroup): _19.MsgPauseGroupProtoMsg;
            };
            MsgPauseGroupResponse: {
                typeUrl: string;
                encode(_: _19.MsgPauseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgPauseGroupResponse;
                fromPartial(_: Partial<_19.MsgPauseGroupResponse>): _19.MsgPauseGroupResponse;
                fromAmino(_: _19.MsgPauseGroupResponseAmino): _19.MsgPauseGroupResponse;
                toAmino(_: _19.MsgPauseGroupResponse): _19.MsgPauseGroupResponseAmino;
                fromAminoMsg(object: _19.MsgPauseGroupResponseAminoMsg): _19.MsgPauseGroupResponse;
                fromProtoMsg(message: _19.MsgPauseGroupResponseProtoMsg): _19.MsgPauseGroupResponse;
                toProto(message: _19.MsgPauseGroupResponse): Uint8Array;
                toProtoMsg(message: _19.MsgPauseGroupResponse): _19.MsgPauseGroupResponseProtoMsg;
            };
            MsgStartGroup: {
                typeUrl: string;
                encode(message: _19.MsgStartGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgStartGroup;
                fromPartial(object: Partial<_19.MsgStartGroup>): _19.MsgStartGroup;
                fromAmino(object: _19.MsgStartGroupAmino): _19.MsgStartGroup;
                toAmino(message: _19.MsgStartGroup): _19.MsgStartGroupAmino;
                fromAminoMsg(object: _19.MsgStartGroupAminoMsg): _19.MsgStartGroup;
                fromProtoMsg(message: _19.MsgStartGroupProtoMsg): _19.MsgStartGroup;
                toProto(message: _19.MsgStartGroup): Uint8Array;
                toProtoMsg(message: _19.MsgStartGroup): _19.MsgStartGroupProtoMsg;
            };
            MsgStartGroupResponse: {
                typeUrl: string;
                encode(_: _19.MsgStartGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgStartGroupResponse;
                fromPartial(_: Partial<_19.MsgStartGroupResponse>): _19.MsgStartGroupResponse;
                fromAmino(_: _19.MsgStartGroupResponseAmino): _19.MsgStartGroupResponse;
                toAmino(_: _19.MsgStartGroupResponse): _19.MsgStartGroupResponseAmino;
                fromAminoMsg(object: _19.MsgStartGroupResponseAminoMsg): _19.MsgStartGroupResponse;
                fromProtoMsg(message: _19.MsgStartGroupResponseProtoMsg): _19.MsgStartGroupResponse;
                toProto(message: _19.MsgStartGroupResponse): Uint8Array;
                toProtoMsg(message: _19.MsgStartGroupResponse): _19.MsgStartGroupResponseProtoMsg;
            };
            GroupID: {
                typeUrl: string;
                encode(message: _19.GroupID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GroupID;
                fromPartial(object: Partial<_19.GroupID>): _19.GroupID;
                fromAmino(object: _19.GroupIDAmino): _19.GroupID;
                toAmino(message: _19.GroupID): _19.GroupIDAmino;
                fromAminoMsg(object: _19.GroupIDAminoMsg): _19.GroupID;
                fromProtoMsg(message: _19.GroupIDProtoMsg): _19.GroupID;
                toProto(message: _19.GroupID): Uint8Array;
                toProtoMsg(message: _19.GroupID): _19.GroupIDProtoMsg;
            };
            GroupSpec: {
                typeUrl: string;
                encode(message: _19.GroupSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GroupSpec;
                fromPartial(object: Partial<_19.GroupSpec>): _19.GroupSpec;
                fromAmino(object: _19.GroupSpecAmino): _19.GroupSpec;
                toAmino(message: _19.GroupSpec): _19.GroupSpecAmino;
                fromAminoMsg(object: _19.GroupSpecAminoMsg): _19.GroupSpec;
                fromProtoMsg(message: _19.GroupSpecProtoMsg): _19.GroupSpec;
                toProto(message: _19.GroupSpec): Uint8Array;
                toProtoMsg(message: _19.GroupSpec): _19.GroupSpecProtoMsg;
            };
            Group: {
                typeUrl: string;
                encode(message: _19.Group, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Group;
                fromPartial(object: Partial<_19.Group>): _19.Group;
                fromAmino(object: _19.GroupAmino): _19.Group;
                toAmino(message: _19.Group): _19.GroupAmino;
                fromAminoMsg(object: _19.GroupAminoMsg): _19.Group;
                fromProtoMsg(message: _19.GroupProtoMsg): _19.Group;
                toProto(message: _19.Group): Uint8Array;
                toProtoMsg(message: _19.Group): _19.GroupProtoMsg;
            };
            Resource: {
                typeUrl: string;
                encode(message: _19.Resource, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Resource;
                fromPartial(object: Partial<_19.Resource>): _19.Resource;
                fromAmino(object: _19.ResourceAmino): _19.Resource;
                toAmino(message: _19.Resource): _19.ResourceAmino;
                fromAminoMsg(object: _19.ResourceAminoMsg): _19.Resource;
                fromProtoMsg(message: _19.ResourceProtoMsg): _19.Resource;
                toProto(message: _19.Resource): Uint8Array;
                toProtoMsg(message: _19.Resource): _19.ResourceProtoMsg;
            };
            GenesisDeployment: {
                typeUrl: string;
                encode(message: _18.GenesisDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenesisDeployment;
                fromPartial(object: Partial<_18.GenesisDeployment>): _18.GenesisDeployment;
                fromAmino(object: _18.GenesisDeploymentAmino): _18.GenesisDeployment;
                toAmino(message: _18.GenesisDeployment): _18.GenesisDeploymentAmino;
                fromAminoMsg(object: _18.GenesisDeploymentAminoMsg): _18.GenesisDeployment;
                fromProtoMsg(message: _18.GenesisDeploymentProtoMsg): _18.GenesisDeployment;
                toProto(message: _18.GenesisDeployment): Uint8Array;
                toProtoMsg(message: _18.GenesisDeployment): _18.GenesisDeploymentProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _18.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
                fromAmino(object: _18.GenesisStateAmino): _18.GenesisState;
                toAmino(message: _18.GenesisState): _18.GenesisStateAmino;
                fromAminoMsg(object: _18.GenesisStateAminoMsg): _18.GenesisState;
                fromProtoMsg(message: _18.GenesisStateProtoMsg): _18.GenesisState;
                toProto(message: _18.GenesisState): Uint8Array;
                toProtoMsg(message: _18.GenesisState): _18.GenesisStateProtoMsg;
            };
            deployment_StateFromJSON(object: any): _17.Deployment_State;
            deployment_StateToJSON(object: _17.Deployment_State): string;
            Deployment_State: typeof _17.Deployment_State;
            Deployment_StateSDKType: typeof _17.Deployment_State;
            Deployment_StateAmino: typeof _17.Deployment_State;
            MsgCreateDeployment: {
                typeUrl: string;
                encode(message: _17.MsgCreateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateDeployment;
                fromPartial(object: Partial<_17.MsgCreateDeployment>): _17.MsgCreateDeployment;
                fromAmino(object: _17.MsgCreateDeploymentAmino): _17.MsgCreateDeployment;
                toAmino(message: _17.MsgCreateDeployment): _17.MsgCreateDeploymentAmino;
                fromAminoMsg(object: _17.MsgCreateDeploymentAminoMsg): _17.MsgCreateDeployment;
                fromProtoMsg(message: _17.MsgCreateDeploymentProtoMsg): _17.MsgCreateDeployment;
                toProto(message: _17.MsgCreateDeployment): Uint8Array;
                toProtoMsg(message: _17.MsgCreateDeployment): _17.MsgCreateDeploymentProtoMsg;
            };
            MsgCreateDeploymentResponse: {
                typeUrl: string;
                encode(_: _17.MsgCreateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgCreateDeploymentResponse;
                fromPartial(_: Partial<_17.MsgCreateDeploymentResponse>): _17.MsgCreateDeploymentResponse;
                fromAmino(_: _17.MsgCreateDeploymentResponseAmino): _17.MsgCreateDeploymentResponse;
                toAmino(_: _17.MsgCreateDeploymentResponse): _17.MsgCreateDeploymentResponseAmino;
                fromAminoMsg(object: _17.MsgCreateDeploymentResponseAminoMsg): _17.MsgCreateDeploymentResponse;
                fromProtoMsg(message: _17.MsgCreateDeploymentResponseProtoMsg): _17.MsgCreateDeploymentResponse;
                toProto(message: _17.MsgCreateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateDeploymentResponse): _17.MsgCreateDeploymentResponseProtoMsg;
            };
            MsgDepositDeployment: {
                typeUrl: string;
                encode(message: _17.MsgDepositDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDepositDeployment;
                fromPartial(object: Partial<_17.MsgDepositDeployment>): _17.MsgDepositDeployment;
                fromAmino(object: _17.MsgDepositDeploymentAmino): _17.MsgDepositDeployment;
                toAmino(message: _17.MsgDepositDeployment): _17.MsgDepositDeploymentAmino;
                fromAminoMsg(object: _17.MsgDepositDeploymentAminoMsg): _17.MsgDepositDeployment;
                fromProtoMsg(message: _17.MsgDepositDeploymentProtoMsg): _17.MsgDepositDeployment;
                toProto(message: _17.MsgDepositDeployment): Uint8Array;
                toProtoMsg(message: _17.MsgDepositDeployment): _17.MsgDepositDeploymentProtoMsg;
            };
            MsgDepositDeploymentResponse: {
                typeUrl: string;
                encode(_: _17.MsgDepositDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDepositDeploymentResponse;
                fromPartial(_: Partial<_17.MsgDepositDeploymentResponse>): _17.MsgDepositDeploymentResponse;
                fromAmino(_: _17.MsgDepositDeploymentResponseAmino): _17.MsgDepositDeploymentResponse;
                toAmino(_: _17.MsgDepositDeploymentResponse): _17.MsgDepositDeploymentResponseAmino;
                fromAminoMsg(object: _17.MsgDepositDeploymentResponseAminoMsg): _17.MsgDepositDeploymentResponse;
                fromProtoMsg(message: _17.MsgDepositDeploymentResponseProtoMsg): _17.MsgDepositDeploymentResponse;
                toProto(message: _17.MsgDepositDeploymentResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDepositDeploymentResponse): _17.MsgDepositDeploymentResponseProtoMsg;
            };
            MsgUpdateDeployment: {
                typeUrl: string;
                encode(message: _17.MsgUpdateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateDeployment;
                fromPartial(object: Partial<_17.MsgUpdateDeployment>): _17.MsgUpdateDeployment;
                fromAmino(object: _17.MsgUpdateDeploymentAmino): _17.MsgUpdateDeployment;
                toAmino(message: _17.MsgUpdateDeployment): _17.MsgUpdateDeploymentAmino;
                fromAminoMsg(object: _17.MsgUpdateDeploymentAminoMsg): _17.MsgUpdateDeployment;
                fromProtoMsg(message: _17.MsgUpdateDeploymentProtoMsg): _17.MsgUpdateDeployment;
                toProto(message: _17.MsgUpdateDeployment): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDeployment): _17.MsgUpdateDeploymentProtoMsg;
            };
            MsgUpdateDeploymentResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateDeploymentResponse;
                fromPartial(_: Partial<_17.MsgUpdateDeploymentResponse>): _17.MsgUpdateDeploymentResponse;
                fromAmino(_: _17.MsgUpdateDeploymentResponseAmino): _17.MsgUpdateDeploymentResponse;
                toAmino(_: _17.MsgUpdateDeploymentResponse): _17.MsgUpdateDeploymentResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateDeploymentResponseAminoMsg): _17.MsgUpdateDeploymentResponse;
                fromProtoMsg(message: _17.MsgUpdateDeploymentResponseProtoMsg): _17.MsgUpdateDeploymentResponse;
                toProto(message: _17.MsgUpdateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDeploymentResponse): _17.MsgUpdateDeploymentResponseProtoMsg;
            };
            MsgCloseDeployment: {
                typeUrl: string;
                encode(message: _17.MsgCloseDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCloseDeployment;
                fromPartial(object: Partial<_17.MsgCloseDeployment>): _17.MsgCloseDeployment;
                fromAmino(object: _17.MsgCloseDeploymentAmino): _17.MsgCloseDeployment;
                toAmino(message: _17.MsgCloseDeployment): _17.MsgCloseDeploymentAmino;
                fromAminoMsg(object: _17.MsgCloseDeploymentAminoMsg): _17.MsgCloseDeployment;
                fromProtoMsg(message: _17.MsgCloseDeploymentProtoMsg): _17.MsgCloseDeployment;
                toProto(message: _17.MsgCloseDeployment): Uint8Array;
                toProtoMsg(message: _17.MsgCloseDeployment): _17.MsgCloseDeploymentProtoMsg;
            };
            MsgCloseDeploymentResponse: {
                typeUrl: string;
                encode(_: _17.MsgCloseDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgCloseDeploymentResponse;
                fromPartial(_: Partial<_17.MsgCloseDeploymentResponse>): _17.MsgCloseDeploymentResponse;
                fromAmino(_: _17.MsgCloseDeploymentResponseAmino): _17.MsgCloseDeploymentResponse;
                toAmino(_: _17.MsgCloseDeploymentResponse): _17.MsgCloseDeploymentResponseAmino;
                fromAminoMsg(object: _17.MsgCloseDeploymentResponseAminoMsg): _17.MsgCloseDeploymentResponse;
                fromProtoMsg(message: _17.MsgCloseDeploymentResponseProtoMsg): _17.MsgCloseDeploymentResponse;
                toProto(message: _17.MsgCloseDeploymentResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCloseDeploymentResponse): _17.MsgCloseDeploymentResponseProtoMsg;
            };
            DeploymentID: {
                typeUrl: string;
                encode(message: _17.DeploymentID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.DeploymentID;
                fromPartial(object: Partial<_17.DeploymentID>): _17.DeploymentID;
                fromAmino(object: _17.DeploymentIDAmino): _17.DeploymentID;
                toAmino(message: _17.DeploymentID): _17.DeploymentIDAmino;
                fromAminoMsg(object: _17.DeploymentIDAminoMsg): _17.DeploymentID;
                fromProtoMsg(message: _17.DeploymentIDProtoMsg): _17.DeploymentID;
                toProto(message: _17.DeploymentID): Uint8Array;
                toProtoMsg(message: _17.DeploymentID): _17.DeploymentIDProtoMsg;
            };
            Deployment: {
                typeUrl: string;
                encode(message: _17.Deployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Deployment;
                fromPartial(object: Partial<_17.Deployment>): _17.Deployment;
                fromAmino(object: _17.DeploymentAmino): _17.Deployment;
                toAmino(message: _17.Deployment): _17.DeploymentAmino;
                fromAminoMsg(object: _17.DeploymentAminoMsg): _17.Deployment;
                fromProtoMsg(message: _17.DeploymentProtoMsg): _17.Deployment;
                toProto(message: _17.Deployment): Uint8Array;
                toProtoMsg(message: _17.Deployment): _17.DeploymentProtoMsg;
            };
            DeploymentFilters: {
                typeUrl: string;
                encode(message: _17.DeploymentFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.DeploymentFilters;
                fromPartial(object: Partial<_17.DeploymentFilters>): _17.DeploymentFilters;
                fromAmino(object: _17.DeploymentFiltersAmino): _17.DeploymentFilters;
                toAmino(message: _17.DeploymentFilters): _17.DeploymentFiltersAmino;
                fromAminoMsg(object: _17.DeploymentFiltersAminoMsg): _17.DeploymentFilters;
                fromProtoMsg(message: _17.DeploymentFiltersProtoMsg): _17.DeploymentFilters;
                toProto(message: _17.DeploymentFilters): Uint8Array;
                toProtoMsg(message: _17.DeploymentFilters): _17.DeploymentFiltersProtoMsg;
            };
            DepositDeploymentAuthorization: {
                typeUrl: string;
                encode(message: _16.DepositDeploymentAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.DepositDeploymentAuthorization;
                fromPartial(object: Partial<_16.DepositDeploymentAuthorization>): _16.DepositDeploymentAuthorization;
                fromAmino(object: _16.DepositDeploymentAuthorizationAmino): _16.DepositDeploymentAuthorization;
                toAmino(message: _16.DepositDeploymentAuthorization): _16.DepositDeploymentAuthorizationAmino;
                fromAminoMsg(object: _16.DepositDeploymentAuthorizationAminoMsg): _16.DepositDeploymentAuthorization;
                fromProtoMsg(message: _16.DepositDeploymentAuthorizationProtoMsg): _16.DepositDeploymentAuthorization;
                toProto(message: _16.DepositDeploymentAuthorization): Uint8Array;
                toProtoMsg(message: _16.DepositDeploymentAuthorization): _16.DepositDeploymentAuthorizationProtoMsg;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                deployments(request: _31.QueryDeploymentsRequest): Promise<_31.QueryDeploymentsResponse>;
                deployment(request: _31.QueryDeploymentRequest): Promise<_31.QueryDeploymentResponse>;
                group(request: _31.QueryGroupRequest): Promise<_31.QueryGroupResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDeployment(value: _24.MsgCreateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositDeployment(value: _24.MsgDepositDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDeployment(value: _24.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeDeployment(value: _24.MsgCloseDeployment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeGroup(value: _28.MsgCloseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pauseGroup(value: _28.MsgPauseGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startGroup(value: _28.MsgStartGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDeployment(value: _24.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _24.MsgCreateDeployment;
                    };
                    depositDeployment(value: _24.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _24.MsgDepositDeployment;
                    };
                    updateDeployment(value: _24.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _24.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _24.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _24.MsgCloseDeployment;
                    };
                    closeGroup(value: _28.MsgCloseGroup): {
                        typeUrl: string;
                        value: _28.MsgCloseGroup;
                    };
                    pauseGroup(value: _28.MsgPauseGroup): {
                        typeUrl: string;
                        value: _28.MsgPauseGroup;
                    };
                    startGroup(value: _28.MsgStartGroup): {
                        typeUrl: string;
                        value: _28.MsgStartGroup;
                    };
                };
                fromJSON: {
                    createDeployment(value: any): {
                        typeUrl: string;
                        value: _24.MsgCreateDeployment;
                    };
                    depositDeployment(value: any): {
                        typeUrl: string;
                        value: _24.MsgDepositDeployment;
                    };
                    updateDeployment(value: any): {
                        typeUrl: string;
                        value: _24.MsgUpdateDeployment;
                    };
                    closeDeployment(value: any): {
                        typeUrl: string;
                        value: _24.MsgCloseDeployment;
                    };
                    closeGroup(value: any): {
                        typeUrl: string;
                        value: _28.MsgCloseGroup;
                    };
                    pauseGroup(value: any): {
                        typeUrl: string;
                        value: _28.MsgPauseGroup;
                    };
                    startGroup(value: any): {
                        typeUrl: string;
                        value: _28.MsgStartGroup;
                    };
                };
                fromPartial: {
                    createDeployment(value: _24.MsgCreateDeployment): {
                        typeUrl: string;
                        value: _24.MsgCreateDeployment;
                    };
                    depositDeployment(value: _24.MsgDepositDeployment): {
                        typeUrl: string;
                        value: _24.MsgDepositDeployment;
                    };
                    updateDeployment(value: _24.MsgUpdateDeployment): {
                        typeUrl: string;
                        value: _24.MsgUpdateDeployment;
                    };
                    closeDeployment(value: _24.MsgCloseDeployment): {
                        typeUrl: string;
                        value: _24.MsgCloseDeployment;
                    };
                    closeGroup(value: _28.MsgCloseGroup): {
                        typeUrl: string;
                        value: _28.MsgCloseGroup;
                    };
                    pauseGroup(value: _28.MsgPauseGroup): {
                        typeUrl: string;
                        value: _28.MsgPauseGroup;
                    };
                    startGroup(value: _28.MsgStartGroup): {
                        typeUrl: string;
                        value: _28.MsgStartGroup;
                    };
                };
            };
            AminoConverter: {
                "/akash.deployment.v1beta2.MsgCreateDeployment": {
                    aminoType: string;
                    toAmino: (message: _24.MsgCreateDeployment) => _24.MsgCreateDeploymentAmino;
                    fromAmino: (object: _24.MsgCreateDeploymentAmino) => _24.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta2.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: (message: _24.MsgDepositDeployment) => _24.MsgDepositDeploymentAmino;
                    fromAmino: (object: _24.MsgDepositDeploymentAmino) => _24.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta2.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: (message: _24.MsgUpdateDeployment) => _24.MsgUpdateDeploymentAmino;
                    fromAmino: (object: _24.MsgUpdateDeploymentAmino) => _24.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: (message: _24.MsgCloseDeployment) => _24.MsgCloseDeploymentAmino;
                    fromAmino: (object: _24.MsgCloseDeploymentAmino) => _24.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: (message: _28.MsgCloseGroup) => _28.MsgCloseGroupAmino;
                    fromAmino: (object: _28.MsgCloseGroupAmino) => _28.MsgCloseGroup;
                };
                "/akash.deployment.v1beta2.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: (message: _28.MsgPauseGroup) => _28.MsgPauseGroupAmino;
                    fromAmino: (object: _28.MsgPauseGroupAmino) => _28.MsgPauseGroup;
                };
                "/akash.deployment.v1beta2.MsgStartGroup": {
                    aminoType: string;
                    toAmino: (message: _28.MsgStartGroup) => _28.MsgStartGroupAmino;
                    fromAmino: (object: _28.MsgStartGroupAmino) => _28.MsgStartGroup;
                };
            };
            Resource: {
                typeUrl: string;
                encode(message: _32.Resource, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.Resource;
                fromPartial(object: Partial<_32.Resource>): _32.Resource;
                fromAmino(object: _32.ResourceAmino): _32.Resource;
                toAmino(message: _32.Resource): _32.ResourceAmino;
                fromAminoMsg(object: _32.ResourceAminoMsg): _32.Resource;
                fromProtoMsg(message: _32.ResourceProtoMsg): _32.Resource;
                toProto(message: _32.Resource): Uint8Array;
                toProtoMsg(message: _32.Resource): _32.ResourceProtoMsg;
            };
            QueryDeploymentsRequest: {
                typeUrl: string;
                encode(message: _31.QueryDeploymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDeploymentsRequest;
                fromPartial(object: Partial<_31.QueryDeploymentsRequest>): _31.QueryDeploymentsRequest;
                fromAmino(object: _31.QueryDeploymentsRequestAmino): _31.QueryDeploymentsRequest;
                toAmino(message: _31.QueryDeploymentsRequest): _31.QueryDeploymentsRequestAmino;
                fromAminoMsg(object: _31.QueryDeploymentsRequestAminoMsg): _31.QueryDeploymentsRequest;
                fromProtoMsg(message: _31.QueryDeploymentsRequestProtoMsg): _31.QueryDeploymentsRequest;
                toProto(message: _31.QueryDeploymentsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDeploymentsRequest): _31.QueryDeploymentsRequestProtoMsg;
            };
            QueryDeploymentsResponse: {
                typeUrl: string;
                encode(message: _31.QueryDeploymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDeploymentsResponse;
                fromPartial(object: Partial<_31.QueryDeploymentsResponse>): _31.QueryDeploymentsResponse;
                fromAmino(object: _31.QueryDeploymentsResponseAmino): _31.QueryDeploymentsResponse;
                toAmino(message: _31.QueryDeploymentsResponse): _31.QueryDeploymentsResponseAmino;
                fromAminoMsg(object: _31.QueryDeploymentsResponseAminoMsg): _31.QueryDeploymentsResponse;
                fromProtoMsg(message: _31.QueryDeploymentsResponseProtoMsg): _31.QueryDeploymentsResponse;
                toProto(message: _31.QueryDeploymentsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDeploymentsResponse): _31.QueryDeploymentsResponseProtoMsg;
            };
            QueryDeploymentRequest: {
                typeUrl: string;
                encode(message: _31.QueryDeploymentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDeploymentRequest;
                fromPartial(object: Partial<_31.QueryDeploymentRequest>): _31.QueryDeploymentRequest;
                fromAmino(object: _31.QueryDeploymentRequestAmino): _31.QueryDeploymentRequest;
                toAmino(message: _31.QueryDeploymentRequest): _31.QueryDeploymentRequestAmino;
                fromAminoMsg(object: _31.QueryDeploymentRequestAminoMsg): _31.QueryDeploymentRequest;
                fromProtoMsg(message: _31.QueryDeploymentRequestProtoMsg): _31.QueryDeploymentRequest;
                toProto(message: _31.QueryDeploymentRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDeploymentRequest): _31.QueryDeploymentRequestProtoMsg;
            };
            QueryDeploymentResponse: {
                typeUrl: string;
                encode(message: _31.QueryDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryDeploymentResponse;
                fromPartial(object: Partial<_31.QueryDeploymentResponse>): _31.QueryDeploymentResponse;
                fromAmino(object: _31.QueryDeploymentResponseAmino): _31.QueryDeploymentResponse;
                toAmino(message: _31.QueryDeploymentResponse): _31.QueryDeploymentResponseAmino;
                fromAminoMsg(object: _31.QueryDeploymentResponseAminoMsg): _31.QueryDeploymentResponse;
                fromProtoMsg(message: _31.QueryDeploymentResponseProtoMsg): _31.QueryDeploymentResponse;
                toProto(message: _31.QueryDeploymentResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDeploymentResponse): _31.QueryDeploymentResponseProtoMsg;
            };
            QueryGroupRequest: {
                typeUrl: string;
                encode(message: _31.QueryGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGroupRequest;
                fromPartial(object: Partial<_31.QueryGroupRequest>): _31.QueryGroupRequest;
                fromAmino(object: _31.QueryGroupRequestAmino): _31.QueryGroupRequest;
                toAmino(message: _31.QueryGroupRequest): _31.QueryGroupRequestAmino;
                fromAminoMsg(object: _31.QueryGroupRequestAminoMsg): _31.QueryGroupRequest;
                fromProtoMsg(message: _31.QueryGroupRequestProtoMsg): _31.QueryGroupRequest;
                toProto(message: _31.QueryGroupRequest): Uint8Array;
                toProtoMsg(message: _31.QueryGroupRequest): _31.QueryGroupRequestProtoMsg;
            };
            QueryGroupResponse: {
                typeUrl: string;
                encode(message: _31.QueryGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.QueryGroupResponse;
                fromPartial(object: Partial<_31.QueryGroupResponse>): _31.QueryGroupResponse;
                fromAmino(object: _31.QueryGroupResponseAmino): _31.QueryGroupResponse;
                toAmino(message: _31.QueryGroupResponse): _31.QueryGroupResponseAmino;
                fromAminoMsg(object: _31.QueryGroupResponseAminoMsg): _31.QueryGroupResponse;
                fromProtoMsg(message: _31.QueryGroupResponseProtoMsg): _31.QueryGroupResponse;
                toProto(message: _31.QueryGroupResponse): Uint8Array;
                toProtoMsg(message: _31.QueryGroupResponse): _31.QueryGroupResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _30.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
                fromAmino(object: _30.ParamsAmino): _30.Params;
                toAmino(message: _30.Params): _30.ParamsAmino;
                fromAminoMsg(object: _30.ParamsAminoMsg): _30.Params;
                fromProtoMsg(message: _30.ParamsProtoMsg): _30.Params;
                toProto(message: _30.Params): Uint8Array;
                toProtoMsg(message: _30.Params): _30.ParamsProtoMsg;
            };
            GroupSpec: {
                typeUrl: string;
                encode(message: _29.GroupSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.GroupSpec;
                fromPartial(object: Partial<_29.GroupSpec>): _29.GroupSpec;
                fromAmino(object: _29.GroupSpecAmino): _29.GroupSpec;
                toAmino(message: _29.GroupSpec): _29.GroupSpecAmino;
                fromAminoMsg(object: _29.GroupSpecAminoMsg): _29.GroupSpec;
                fromProtoMsg(message: _29.GroupSpecProtoMsg): _29.GroupSpec;
                toProto(message: _29.GroupSpec): Uint8Array;
                toProtoMsg(message: _29.GroupSpec): _29.GroupSpecProtoMsg;
            };
            MsgCloseGroup: {
                typeUrl: string;
                encode(message: _28.MsgCloseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgCloseGroup;
                fromPartial(object: Partial<_28.MsgCloseGroup>): _28.MsgCloseGroup;
                fromAmino(object: _28.MsgCloseGroupAmino): _28.MsgCloseGroup;
                toAmino(message: _28.MsgCloseGroup): _28.MsgCloseGroupAmino;
                fromAminoMsg(object: _28.MsgCloseGroupAminoMsg): _28.MsgCloseGroup;
                fromProtoMsg(message: _28.MsgCloseGroupProtoMsg): _28.MsgCloseGroup;
                toProto(message: _28.MsgCloseGroup): Uint8Array;
                toProtoMsg(message: _28.MsgCloseGroup): _28.MsgCloseGroupProtoMsg;
            };
            MsgCloseGroupResponse: {
                typeUrl: string;
                encode(_: _28.MsgCloseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgCloseGroupResponse;
                fromPartial(_: Partial<_28.MsgCloseGroupResponse>): _28.MsgCloseGroupResponse;
                fromAmino(_: _28.MsgCloseGroupResponseAmino): _28.MsgCloseGroupResponse;
                toAmino(_: _28.MsgCloseGroupResponse): _28.MsgCloseGroupResponseAmino;
                fromAminoMsg(object: _28.MsgCloseGroupResponseAminoMsg): _28.MsgCloseGroupResponse;
                fromProtoMsg(message: _28.MsgCloseGroupResponseProtoMsg): _28.MsgCloseGroupResponse;
                toProto(message: _28.MsgCloseGroupResponse): Uint8Array;
                toProtoMsg(message: _28.MsgCloseGroupResponse): _28.MsgCloseGroupResponseProtoMsg;
            };
            MsgPauseGroup: {
                typeUrl: string;
                encode(message: _28.MsgPauseGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgPauseGroup;
                fromPartial(object: Partial<_28.MsgPauseGroup>): _28.MsgPauseGroup;
                fromAmino(object: _28.MsgPauseGroupAmino): _28.MsgPauseGroup;
                toAmino(message: _28.MsgPauseGroup): _28.MsgPauseGroupAmino;
                fromAminoMsg(object: _28.MsgPauseGroupAminoMsg): _28.MsgPauseGroup;
                fromProtoMsg(message: _28.MsgPauseGroupProtoMsg): _28.MsgPauseGroup;
                toProto(message: _28.MsgPauseGroup): Uint8Array;
                toProtoMsg(message: _28.MsgPauseGroup): _28.MsgPauseGroupProtoMsg;
            };
            MsgPauseGroupResponse: {
                typeUrl: string;
                encode(_: _28.MsgPauseGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgPauseGroupResponse;
                fromPartial(_: Partial<_28.MsgPauseGroupResponse>): _28.MsgPauseGroupResponse;
                fromAmino(_: _28.MsgPauseGroupResponseAmino): _28.MsgPauseGroupResponse;
                toAmino(_: _28.MsgPauseGroupResponse): _28.MsgPauseGroupResponseAmino;
                fromAminoMsg(object: _28.MsgPauseGroupResponseAminoMsg): _28.MsgPauseGroupResponse;
                fromProtoMsg(message: _28.MsgPauseGroupResponseProtoMsg): _28.MsgPauseGroupResponse;
                toProto(message: _28.MsgPauseGroupResponse): Uint8Array;
                toProtoMsg(message: _28.MsgPauseGroupResponse): _28.MsgPauseGroupResponseProtoMsg;
            };
            MsgStartGroup: {
                typeUrl: string;
                encode(message: _28.MsgStartGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgStartGroup;
                fromPartial(object: Partial<_28.MsgStartGroup>): _28.MsgStartGroup;
                fromAmino(object: _28.MsgStartGroupAmino): _28.MsgStartGroup;
                toAmino(message: _28.MsgStartGroup): _28.MsgStartGroupAmino;
                fromAminoMsg(object: _28.MsgStartGroupAminoMsg): _28.MsgStartGroup;
                fromProtoMsg(message: _28.MsgStartGroupProtoMsg): _28.MsgStartGroup;
                toProto(message: _28.MsgStartGroup): Uint8Array;
                toProtoMsg(message: _28.MsgStartGroup): _28.MsgStartGroupProtoMsg;
            };
            MsgStartGroupResponse: {
                typeUrl: string;
                encode(_: _28.MsgStartGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgStartGroupResponse;
                fromPartial(_: Partial<_28.MsgStartGroupResponse>): _28.MsgStartGroupResponse;
                fromAmino(_: _28.MsgStartGroupResponseAmino): _28.MsgStartGroupResponse;
                toAmino(_: _28.MsgStartGroupResponse): _28.MsgStartGroupResponseAmino;
                fromAminoMsg(object: _28.MsgStartGroupResponseAminoMsg): _28.MsgStartGroupResponse;
                fromProtoMsg(message: _28.MsgStartGroupResponseProtoMsg): _28.MsgStartGroupResponse;
                toProto(message: _28.MsgStartGroupResponse): Uint8Array;
                toProtoMsg(message: _28.MsgStartGroupResponse): _28.MsgStartGroupResponseProtoMsg;
            };
            GroupID: {
                typeUrl: string;
                encode(message: _27.GroupID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GroupID;
                fromPartial(object: Partial<_27.GroupID>): _27.GroupID;
                fromAmino(object: _27.GroupIDAmino): _27.GroupID;
                toAmino(message: _27.GroupID): _27.GroupIDAmino;
                fromAminoMsg(object: _27.GroupIDAminoMsg): _27.GroupID;
                fromProtoMsg(message: _27.GroupIDProtoMsg): _27.GroupID;
                toProto(message: _27.GroupID): Uint8Array;
                toProtoMsg(message: _27.GroupID): _27.GroupIDProtoMsg;
            };
            group_StateFromJSON(object: any): _26.Group_State;
            group_StateToJSON(object: _26.Group_State): string;
            Group_State: typeof _26.Group_State;
            Group_StateSDKType: typeof _26.Group_State;
            Group_StateAmino: typeof _26.Group_State;
            Group: {
                typeUrl: string;
                encode(message: _26.Group, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Group;
                fromPartial(object: Partial<_26.Group>): _26.Group;
                fromAmino(object: _26.GroupAmino): _26.Group;
                toAmino(message: _26.Group): _26.GroupAmino;
                fromAminoMsg(object: _26.GroupAminoMsg): _26.Group;
                fromProtoMsg(message: _26.GroupProtoMsg): _26.Group;
                toProto(message: _26.Group): Uint8Array;
                toProtoMsg(message: _26.Group): _26.GroupProtoMsg;
            };
            GenesisDeployment: {
                typeUrl: string;
                encode(message: _25.GenesisDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisDeployment;
                fromPartial(object: Partial<_25.GenesisDeployment>): _25.GenesisDeployment;
                fromAmino(object: _25.GenesisDeploymentAmino): _25.GenesisDeployment;
                toAmino(message: _25.GenesisDeployment): _25.GenesisDeploymentAmino;
                fromAminoMsg(object: _25.GenesisDeploymentAminoMsg): _25.GenesisDeployment;
                fromProtoMsg(message: _25.GenesisDeploymentProtoMsg): _25.GenesisDeployment;
                toProto(message: _25.GenesisDeployment): Uint8Array;
                toProtoMsg(message: _25.GenesisDeployment): _25.GenesisDeploymentProtoMsg;
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
            MsgCreateDeployment: {
                typeUrl: string;
                encode(message: _24.MsgCreateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCreateDeployment;
                fromPartial(object: Partial<_24.MsgCreateDeployment>): _24.MsgCreateDeployment;
                fromAmino(object: _24.MsgCreateDeploymentAmino): _24.MsgCreateDeployment;
                toAmino(message: _24.MsgCreateDeployment): _24.MsgCreateDeploymentAmino;
                fromAminoMsg(object: _24.MsgCreateDeploymentAminoMsg): _24.MsgCreateDeployment;
                fromProtoMsg(message: _24.MsgCreateDeploymentProtoMsg): _24.MsgCreateDeployment;
                toProto(message: _24.MsgCreateDeployment): Uint8Array;
                toProtoMsg(message: _24.MsgCreateDeployment): _24.MsgCreateDeploymentProtoMsg;
            };
            MsgCreateDeploymentResponse: {
                typeUrl: string;
                encode(_: _24.MsgCreateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgCreateDeploymentResponse;
                fromPartial(_: Partial<_24.MsgCreateDeploymentResponse>): _24.MsgCreateDeploymentResponse;
                fromAmino(_: _24.MsgCreateDeploymentResponseAmino): _24.MsgCreateDeploymentResponse;
                toAmino(_: _24.MsgCreateDeploymentResponse): _24.MsgCreateDeploymentResponseAmino;
                fromAminoMsg(object: _24.MsgCreateDeploymentResponseAminoMsg): _24.MsgCreateDeploymentResponse;
                fromProtoMsg(message: _24.MsgCreateDeploymentResponseProtoMsg): _24.MsgCreateDeploymentResponse;
                toProto(message: _24.MsgCreateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _24.MsgCreateDeploymentResponse): _24.MsgCreateDeploymentResponseProtoMsg;
            };
            MsgDepositDeployment: {
                typeUrl: string;
                encode(message: _24.MsgDepositDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgDepositDeployment;
                fromPartial(object: Partial<_24.MsgDepositDeployment>): _24.MsgDepositDeployment;
                fromAmino(object: _24.MsgDepositDeploymentAmino): _24.MsgDepositDeployment;
                toAmino(message: _24.MsgDepositDeployment): _24.MsgDepositDeploymentAmino;
                fromAminoMsg(object: _24.MsgDepositDeploymentAminoMsg): _24.MsgDepositDeployment;
                fromProtoMsg(message: _24.MsgDepositDeploymentProtoMsg): _24.MsgDepositDeployment;
                toProto(message: _24.MsgDepositDeployment): Uint8Array;
                toProtoMsg(message: _24.MsgDepositDeployment): _24.MsgDepositDeploymentProtoMsg;
            };
            MsgDepositDeploymentResponse: {
                typeUrl: string;
                encode(_: _24.MsgDepositDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgDepositDeploymentResponse;
                fromPartial(_: Partial<_24.MsgDepositDeploymentResponse>): _24.MsgDepositDeploymentResponse;
                fromAmino(_: _24.MsgDepositDeploymentResponseAmino): _24.MsgDepositDeploymentResponse;
                toAmino(_: _24.MsgDepositDeploymentResponse): _24.MsgDepositDeploymentResponseAmino;
                fromAminoMsg(object: _24.MsgDepositDeploymentResponseAminoMsg): _24.MsgDepositDeploymentResponse;
                fromProtoMsg(message: _24.MsgDepositDeploymentResponseProtoMsg): _24.MsgDepositDeploymentResponse;
                toProto(message: _24.MsgDepositDeploymentResponse): Uint8Array;
                toProtoMsg(message: _24.MsgDepositDeploymentResponse): _24.MsgDepositDeploymentResponseProtoMsg;
            };
            MsgUpdateDeployment: {
                typeUrl: string;
                encode(message: _24.MsgUpdateDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgUpdateDeployment;
                fromPartial(object: Partial<_24.MsgUpdateDeployment>): _24.MsgUpdateDeployment;
                fromAmino(object: _24.MsgUpdateDeploymentAmino): _24.MsgUpdateDeployment;
                toAmino(message: _24.MsgUpdateDeployment): _24.MsgUpdateDeploymentAmino;
                fromAminoMsg(object: _24.MsgUpdateDeploymentAminoMsg): _24.MsgUpdateDeployment;
                fromProtoMsg(message: _24.MsgUpdateDeploymentProtoMsg): _24.MsgUpdateDeployment;
                toProto(message: _24.MsgUpdateDeployment): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateDeployment): _24.MsgUpdateDeploymentProtoMsg;
            };
            MsgUpdateDeploymentResponse: {
                typeUrl: string;
                encode(_: _24.MsgUpdateDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgUpdateDeploymentResponse;
                fromPartial(_: Partial<_24.MsgUpdateDeploymentResponse>): _24.MsgUpdateDeploymentResponse;
                fromAmino(_: _24.MsgUpdateDeploymentResponseAmino): _24.MsgUpdateDeploymentResponse;
                toAmino(_: _24.MsgUpdateDeploymentResponse): _24.MsgUpdateDeploymentResponseAmino;
                fromAminoMsg(object: _24.MsgUpdateDeploymentResponseAminoMsg): _24.MsgUpdateDeploymentResponse;
                fromProtoMsg(message: _24.MsgUpdateDeploymentResponseProtoMsg): _24.MsgUpdateDeploymentResponse;
                toProto(message: _24.MsgUpdateDeploymentResponse): Uint8Array;
                toProtoMsg(message: _24.MsgUpdateDeploymentResponse): _24.MsgUpdateDeploymentResponseProtoMsg;
            };
            MsgCloseDeployment: {
                typeUrl: string;
                encode(message: _24.MsgCloseDeployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.MsgCloseDeployment;
                fromPartial(object: Partial<_24.MsgCloseDeployment>): _24.MsgCloseDeployment;
                fromAmino(object: _24.MsgCloseDeploymentAmino): _24.MsgCloseDeployment;
                toAmino(message: _24.MsgCloseDeployment): _24.MsgCloseDeploymentAmino;
                fromAminoMsg(object: _24.MsgCloseDeploymentAminoMsg): _24.MsgCloseDeployment;
                fromProtoMsg(message: _24.MsgCloseDeploymentProtoMsg): _24.MsgCloseDeployment;
                toProto(message: _24.MsgCloseDeployment): Uint8Array;
                toProtoMsg(message: _24.MsgCloseDeployment): _24.MsgCloseDeploymentProtoMsg;
            };
            MsgCloseDeploymentResponse: {
                typeUrl: string;
                encode(_: _24.MsgCloseDeploymentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.MsgCloseDeploymentResponse;
                fromPartial(_: Partial<_24.MsgCloseDeploymentResponse>): _24.MsgCloseDeploymentResponse;
                fromAmino(_: _24.MsgCloseDeploymentResponseAmino): _24.MsgCloseDeploymentResponse;
                toAmino(_: _24.MsgCloseDeploymentResponse): _24.MsgCloseDeploymentResponseAmino;
                fromAminoMsg(object: _24.MsgCloseDeploymentResponseAminoMsg): _24.MsgCloseDeploymentResponse;
                fromProtoMsg(message: _24.MsgCloseDeploymentResponseProtoMsg): _24.MsgCloseDeploymentResponse;
                toProto(message: _24.MsgCloseDeploymentResponse): Uint8Array;
                toProtoMsg(message: _24.MsgCloseDeploymentResponse): _24.MsgCloseDeploymentResponseProtoMsg;
            };
            deployment_StateFromJSON(object: any): _23.Deployment_State;
            deployment_StateToJSON(object: _23.Deployment_State): string;
            Deployment_State: typeof _23.Deployment_State;
            Deployment_StateSDKType: typeof _23.Deployment_State;
            Deployment_StateAmino: typeof _23.Deployment_State;
            DeploymentID: {
                typeUrl: string;
                encode(message: _23.DeploymentID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.DeploymentID;
                fromPartial(object: Partial<_23.DeploymentID>): _23.DeploymentID;
                fromAmino(object: _23.DeploymentIDAmino): _23.DeploymentID;
                toAmino(message: _23.DeploymentID): _23.DeploymentIDAmino;
                fromAminoMsg(object: _23.DeploymentIDAminoMsg): _23.DeploymentID;
                fromProtoMsg(message: _23.DeploymentIDProtoMsg): _23.DeploymentID;
                toProto(message: _23.DeploymentID): Uint8Array;
                toProtoMsg(message: _23.DeploymentID): _23.DeploymentIDProtoMsg;
            };
            Deployment: {
                typeUrl: string;
                encode(message: _23.Deployment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Deployment;
                fromPartial(object: Partial<_23.Deployment>): _23.Deployment;
                fromAmino(object: _23.DeploymentAmino): _23.Deployment;
                toAmino(message: _23.Deployment): _23.DeploymentAmino;
                fromAminoMsg(object: _23.DeploymentAminoMsg): _23.Deployment;
                fromProtoMsg(message: _23.DeploymentProtoMsg): _23.Deployment;
                toProto(message: _23.Deployment): Uint8Array;
                toProtoMsg(message: _23.Deployment): _23.DeploymentProtoMsg;
            };
            DeploymentFilters: {
                typeUrl: string;
                encode(message: _23.DeploymentFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.DeploymentFilters;
                fromPartial(object: Partial<_23.DeploymentFilters>): _23.DeploymentFilters;
                fromAmino(object: _23.DeploymentFiltersAmino): _23.DeploymentFilters;
                toAmino(message: _23.DeploymentFilters): _23.DeploymentFiltersAmino;
                fromAminoMsg(object: _23.DeploymentFiltersAminoMsg): _23.DeploymentFilters;
                fromProtoMsg(message: _23.DeploymentFiltersProtoMsg): _23.DeploymentFilters;
                toProto(message: _23.DeploymentFilters): Uint8Array;
                toProtoMsg(message: _23.DeploymentFilters): _23.DeploymentFiltersProtoMsg;
            };
            DepositDeploymentAuthorization: {
                typeUrl: string;
                encode(message: _22.DepositDeploymentAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.DepositDeploymentAuthorization;
                fromPartial(object: Partial<_22.DepositDeploymentAuthorization>): _22.DepositDeploymentAuthorization;
                fromAmino(object: _22.DepositDeploymentAuthorizationAmino): _22.DepositDeploymentAuthorization;
                toAmino(message: _22.DepositDeploymentAuthorization): _22.DepositDeploymentAuthorizationAmino;
                fromAminoMsg(object: _22.DepositDeploymentAuthorizationAminoMsg): _22.DepositDeploymentAuthorization;
                fromProtoMsg(message: _22.DepositDeploymentAuthorizationProtoMsg): _22.DepositDeploymentAuthorization;
                toProto(message: _22.DepositDeploymentAuthorization): Uint8Array;
                toProtoMsg(message: _22.DepositDeploymentAuthorization): _22.DepositDeploymentAuthorizationProtoMsg;
            };
        };
    }
    namespace escrow {
        const v1beta1: {
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request: _35.QueryAccountsRequest): Promise<_35.QueryAccountsResponse>;
                payments(request: _35.QueryPaymentsRequest): Promise<_35.QueryPaymentsResponse>;
            };
            LCDQueryClient: typeof _174.LCDQueryClient;
            account_StateFromJSON(object: any): _36.Account_State;
            account_StateToJSON(object: _36.Account_State): string;
            payment_StateFromJSON(object: any): _36.Payment_State;
            payment_StateToJSON(object: _36.Payment_State): string;
            Account_State: typeof _36.Account_State;
            Account_StateSDKType: typeof _36.Account_State;
            Account_StateAmino: typeof _36.Account_State;
            Payment_State: typeof _36.Payment_State;
            Payment_StateSDKType: typeof _36.Payment_State;
            Payment_StateAmino: typeof _36.Payment_State;
            AccountID: {
                typeUrl: string;
                encode(message: _36.AccountID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.AccountID;
                fromPartial(object: Partial<_36.AccountID>): _36.AccountID;
                fromAmino(object: _36.AccountIDAmino): _36.AccountID;
                toAmino(message: _36.AccountID): _36.AccountIDAmino;
                fromAminoMsg(object: _36.AccountIDAminoMsg): _36.AccountID;
                fromProtoMsg(message: _36.AccountIDProtoMsg): _36.AccountID;
                toProto(message: _36.AccountID): Uint8Array;
                toProtoMsg(message: _36.AccountID): _36.AccountIDProtoMsg;
            };
            Account: {
                typeUrl: string;
                encode(message: _36.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Account;
                fromPartial(object: Partial<_36.Account>): _36.Account;
                fromAmino(object: _36.AccountAmino): _36.Account;
                toAmino(message: _36.Account): _36.AccountAmino;
                fromAminoMsg(object: _36.AccountAminoMsg): _36.Account;
                fromProtoMsg(message: _36.AccountProtoMsg): _36.Account;
                toProto(message: _36.Account): Uint8Array;
                toProtoMsg(message: _36.Account): _36.AccountProtoMsg;
            };
            Payment: {
                typeUrl: string;
                encode(message: _36.Payment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.Payment;
                fromPartial(object: Partial<_36.Payment>): _36.Payment;
                fromAmino(object: _36.PaymentAmino): _36.Payment;
                toAmino(message: _36.Payment): _36.PaymentAmino;
                fromAminoMsg(object: _36.PaymentAminoMsg): _36.Payment;
                fromProtoMsg(message: _36.PaymentProtoMsg): _36.Payment;
                toProto(message: _36.Payment): Uint8Array;
                toProtoMsg(message: _36.Payment): _36.PaymentProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _35.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryAccountsRequest;
                fromPartial(object: Partial<_35.QueryAccountsRequest>): _35.QueryAccountsRequest;
                fromAmino(object: _35.QueryAccountsRequestAmino): _35.QueryAccountsRequest;
                toAmino(message: _35.QueryAccountsRequest): _35.QueryAccountsRequestAmino;
                fromAminoMsg(object: _35.QueryAccountsRequestAminoMsg): _35.QueryAccountsRequest;
                fromProtoMsg(message: _35.QueryAccountsRequestProtoMsg): _35.QueryAccountsRequest;
                toProto(message: _35.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryAccountsRequest): _35.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _35.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryAccountsResponse;
                fromPartial(object: Partial<_35.QueryAccountsResponse>): _35.QueryAccountsResponse;
                fromAmino(object: _35.QueryAccountsResponseAmino): _35.QueryAccountsResponse;
                toAmino(message: _35.QueryAccountsResponse): _35.QueryAccountsResponseAmino;
                fromAminoMsg(object: _35.QueryAccountsResponseAminoMsg): _35.QueryAccountsResponse;
                fromProtoMsg(message: _35.QueryAccountsResponseProtoMsg): _35.QueryAccountsResponse;
                toProto(message: _35.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryAccountsResponse): _35.QueryAccountsResponseProtoMsg;
            };
            QueryPaymentsRequest: {
                typeUrl: string;
                encode(message: _35.QueryPaymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryPaymentsRequest;
                fromPartial(object: Partial<_35.QueryPaymentsRequest>): _35.QueryPaymentsRequest;
                fromAmino(object: _35.QueryPaymentsRequestAmino): _35.QueryPaymentsRequest;
                toAmino(message: _35.QueryPaymentsRequest): _35.QueryPaymentsRequestAmino;
                fromAminoMsg(object: _35.QueryPaymentsRequestAminoMsg): _35.QueryPaymentsRequest;
                fromProtoMsg(message: _35.QueryPaymentsRequestProtoMsg): _35.QueryPaymentsRequest;
                toProto(message: _35.QueryPaymentsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryPaymentsRequest): _35.QueryPaymentsRequestProtoMsg;
            };
            QueryPaymentsResponse: {
                typeUrl: string;
                encode(message: _35.QueryPaymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryPaymentsResponse;
                fromPartial(object: Partial<_35.QueryPaymentsResponse>): _35.QueryPaymentsResponse;
                fromAmino(object: _35.QueryPaymentsResponseAmino): _35.QueryPaymentsResponse;
                toAmino(message: _35.QueryPaymentsResponse): _35.QueryPaymentsResponseAmino;
                fromAminoMsg(object: _35.QueryPaymentsResponseAminoMsg): _35.QueryPaymentsResponse;
                fromProtoMsg(message: _35.QueryPaymentsResponseProtoMsg): _35.QueryPaymentsResponse;
                toProto(message: _35.QueryPaymentsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryPaymentsResponse): _35.QueryPaymentsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _34.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
                fromAmino(object: _34.GenesisStateAmino): _34.GenesisState;
                toAmino(message: _34.GenesisState): _34.GenesisStateAmino;
                fromAminoMsg(object: _34.GenesisStateAminoMsg): _34.GenesisState;
                fromProtoMsg(message: _34.GenesisStateProtoMsg): _34.GenesisState;
                toProto(message: _34.GenesisState): Uint8Array;
                toProtoMsg(message: _34.GenesisState): _34.GenesisStateProtoMsg;
            };
        };
        const v1beta2: {
            QueryClientImpl: typeof _183.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request: _38.QueryAccountsRequest): Promise<_38.QueryAccountsResponse>;
                payments(request: _38.QueryPaymentsRequest): Promise<_38.QueryPaymentsResponse>;
            };
            LCDQueryClient: typeof _175.LCDQueryClient;
            account_StateFromJSON(object: any): _39.Account_State;
            account_StateToJSON(object: _39.Account_State): string;
            fractionalPayment_StateFromJSON(object: any): _39.FractionalPayment_State;
            fractionalPayment_StateToJSON(object: _39.FractionalPayment_State): string;
            Account_State: typeof _39.Account_State;
            Account_StateSDKType: typeof _39.Account_State;
            Account_StateAmino: typeof _39.Account_State;
            FractionalPayment_State: typeof _39.FractionalPayment_State;
            FractionalPayment_StateSDKType: typeof _39.FractionalPayment_State;
            FractionalPayment_StateAmino: typeof _39.FractionalPayment_State;
            AccountID: {
                typeUrl: string;
                encode(message: _39.AccountID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.AccountID;
                fromPartial(object: Partial<_39.AccountID>): _39.AccountID;
                fromAmino(object: _39.AccountIDAmino): _39.AccountID;
                toAmino(message: _39.AccountID): _39.AccountIDAmino;
                fromAminoMsg(object: _39.AccountIDAminoMsg): _39.AccountID;
                fromProtoMsg(message: _39.AccountIDProtoMsg): _39.AccountID;
                toProto(message: _39.AccountID): Uint8Array;
                toProtoMsg(message: _39.AccountID): _39.AccountIDProtoMsg;
            };
            Account: {
                typeUrl: string;
                encode(message: _39.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Account;
                fromPartial(object: Partial<_39.Account>): _39.Account;
                fromAmino(object: _39.AccountAmino): _39.Account;
                toAmino(message: _39.Account): _39.AccountAmino;
                fromAminoMsg(object: _39.AccountAminoMsg): _39.Account;
                fromProtoMsg(message: _39.AccountProtoMsg): _39.Account;
                toProto(message: _39.Account): Uint8Array;
                toProtoMsg(message: _39.Account): _39.AccountProtoMsg;
            };
            FractionalPayment: {
                typeUrl: string;
                encode(message: _39.FractionalPayment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.FractionalPayment;
                fromPartial(object: Partial<_39.FractionalPayment>): _39.FractionalPayment;
                fromAmino(object: _39.FractionalPaymentAmino): _39.FractionalPayment;
                toAmino(message: _39.FractionalPayment): _39.FractionalPaymentAmino;
                fromAminoMsg(object: _39.FractionalPaymentAminoMsg): _39.FractionalPayment;
                fromProtoMsg(message: _39.FractionalPaymentProtoMsg): _39.FractionalPayment;
                toProto(message: _39.FractionalPayment): Uint8Array;
                toProtoMsg(message: _39.FractionalPayment): _39.FractionalPaymentProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _38.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountsRequest;
                fromPartial(object: Partial<_38.QueryAccountsRequest>): _38.QueryAccountsRequest;
                fromAmino(object: _38.QueryAccountsRequestAmino): _38.QueryAccountsRequest;
                toAmino(message: _38.QueryAccountsRequest): _38.QueryAccountsRequestAmino;
                fromAminoMsg(object: _38.QueryAccountsRequestAminoMsg): _38.QueryAccountsRequest;
                fromProtoMsg(message: _38.QueryAccountsRequestProtoMsg): _38.QueryAccountsRequest;
                toProto(message: _38.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAccountsRequest): _38.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _38.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryAccountsResponse;
                fromPartial(object: Partial<_38.QueryAccountsResponse>): _38.QueryAccountsResponse;
                fromAmino(object: _38.QueryAccountsResponseAmino): _38.QueryAccountsResponse;
                toAmino(message: _38.QueryAccountsResponse): _38.QueryAccountsResponseAmino;
                fromAminoMsg(object: _38.QueryAccountsResponseAminoMsg): _38.QueryAccountsResponse;
                fromProtoMsg(message: _38.QueryAccountsResponseProtoMsg): _38.QueryAccountsResponse;
                toProto(message: _38.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAccountsResponse): _38.QueryAccountsResponseProtoMsg;
            };
            QueryPaymentsRequest: {
                typeUrl: string;
                encode(message: _38.QueryPaymentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryPaymentsRequest;
                fromPartial(object: Partial<_38.QueryPaymentsRequest>): _38.QueryPaymentsRequest;
                fromAmino(object: _38.QueryPaymentsRequestAmino): _38.QueryPaymentsRequest;
                toAmino(message: _38.QueryPaymentsRequest): _38.QueryPaymentsRequestAmino;
                fromAminoMsg(object: _38.QueryPaymentsRequestAminoMsg): _38.QueryPaymentsRequest;
                fromProtoMsg(message: _38.QueryPaymentsRequestProtoMsg): _38.QueryPaymentsRequest;
                toProto(message: _38.QueryPaymentsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryPaymentsRequest): _38.QueryPaymentsRequestProtoMsg;
            };
            QueryPaymentsResponse: {
                typeUrl: string;
                encode(message: _38.QueryPaymentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.QueryPaymentsResponse;
                fromPartial(object: Partial<_38.QueryPaymentsResponse>): _38.QueryPaymentsResponse;
                fromAmino(object: _38.QueryPaymentsResponseAmino): _38.QueryPaymentsResponse;
                toAmino(message: _38.QueryPaymentsResponse): _38.QueryPaymentsResponseAmino;
                fromAminoMsg(object: _38.QueryPaymentsResponseAminoMsg): _38.QueryPaymentsResponse;
                fromProtoMsg(message: _38.QueryPaymentsResponseProtoMsg): _38.QueryPaymentsResponse;
                toProto(message: _38.QueryPaymentsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryPaymentsResponse): _38.QueryPaymentsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
        };
    }
    namespace inflation {
        const v1beta2: {
            Params: {
                typeUrl: string;
                encode(message: _41.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.Params;
                fromPartial(object: Partial<_41.Params>): _41.Params;
                fromAmino(object: _41.ParamsAmino): _41.Params;
                toAmino(message: _41.Params): _41.ParamsAmino;
                fromAminoMsg(object: _41.ParamsAminoMsg): _41.Params;
                fromProtoMsg(message: _41.ParamsProtoMsg): _41.Params;
                toProto(message: _41.Params): Uint8Array;
                toProtoMsg(message: _41.Params): _41.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _40.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
                fromAmino(object: _40.GenesisStateAmino): _40.GenesisState;
                toAmino(message: _40.GenesisState): _40.GenesisStateAmino;
                fromAminoMsg(object: _40.GenesisStateAminoMsg): _40.GenesisState;
                fromProtoMsg(message: _40.GenesisStateProtoMsg): _40.GenesisState;
                toProto(message: _40.GenesisState): Uint8Array;
                toProtoMsg(message: _40.GenesisState): _40.GenesisStateProtoMsg;
            };
        };
    }
    namespace market {
        const v1beta2: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                orders(request: _47.QueryOrdersRequest): Promise<_47.QueryOrdersResponse>;
                order(request: _47.QueryOrderRequest): Promise<_47.QueryOrderResponse>;
                bids(request: _47.QueryBidsRequest): Promise<_47.QueryBidsResponse>;
                bid(request: _47.QueryBidRequest): Promise<_47.QueryBidResponse>;
                leases(request: _47.QueryLeasesRequest): Promise<_47.QueryLeasesResponse>;
                lease(request: _47.QueryLeaseRequest): Promise<_47.QueryLeaseResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBid(value: _42.MsgCreateBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeBid(value: _42.MsgCloseBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawLease(value: _44.MsgWithdrawLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createLease(value: _44.MsgCreateLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeLease(value: _44.MsgCloseLease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBid(value: _42.MsgCreateBid): {
                        typeUrl: string;
                        value: _42.MsgCreateBid;
                    };
                    closeBid(value: _42.MsgCloseBid): {
                        typeUrl: string;
                        value: _42.MsgCloseBid;
                    };
                    withdrawLease(value: _44.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _44.MsgWithdrawLease;
                    };
                    createLease(value: _44.MsgCreateLease): {
                        typeUrl: string;
                        value: _44.MsgCreateLease;
                    };
                    closeLease(value: _44.MsgCloseLease): {
                        typeUrl: string;
                        value: _44.MsgCloseLease;
                    };
                };
                fromJSON: {
                    createBid(value: any): {
                        typeUrl: string;
                        value: _42.MsgCreateBid;
                    };
                    closeBid(value: any): {
                        typeUrl: string;
                        value: _42.MsgCloseBid;
                    };
                    withdrawLease(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawLease;
                    };
                    createLease(value: any): {
                        typeUrl: string;
                        value: _44.MsgCreateLease;
                    };
                    closeLease(value: any): {
                        typeUrl: string;
                        value: _44.MsgCloseLease;
                    };
                };
                fromPartial: {
                    createBid(value: _42.MsgCreateBid): {
                        typeUrl: string;
                        value: _42.MsgCreateBid;
                    };
                    closeBid(value: _42.MsgCloseBid): {
                        typeUrl: string;
                        value: _42.MsgCloseBid;
                    };
                    withdrawLease(value: _44.MsgWithdrawLease): {
                        typeUrl: string;
                        value: _44.MsgWithdrawLease;
                    };
                    createLease(value: _44.MsgCreateLease): {
                        typeUrl: string;
                        value: _44.MsgCreateLease;
                    };
                    closeLease(value: _44.MsgCloseLease): {
                        typeUrl: string;
                        value: _44.MsgCloseLease;
                    };
                };
            };
            AminoConverter: {
                "/akash.market.v1beta2.MsgCreateBid": {
                    aminoType: string;
                    toAmino: (message: _42.MsgCreateBid) => _42.MsgCreateBidAmino;
                    fromAmino: (object: _42.MsgCreateBidAmino) => _42.MsgCreateBid;
                };
                "/akash.market.v1beta2.MsgCloseBid": {
                    aminoType: string;
                    toAmino: (message: _42.MsgCloseBid) => _42.MsgCloseBidAmino;
                    fromAmino: (object: _42.MsgCloseBidAmino) => _42.MsgCloseBid;
                };
                "/akash.market.v1beta2.MsgWithdrawLease": {
                    aminoType: string;
                    toAmino: (message: _44.MsgWithdrawLease) => _44.MsgWithdrawLeaseAmino;
                    fromAmino: (object: _44.MsgWithdrawLeaseAmino) => _44.MsgWithdrawLease;
                };
                "/akash.market.v1beta2.MsgCreateLease": {
                    aminoType: string;
                    toAmino: (message: _44.MsgCreateLease) => _44.MsgCreateLeaseAmino;
                    fromAmino: (object: _44.MsgCreateLeaseAmino) => _44.MsgCreateLease;
                };
                "/akash.market.v1beta2.MsgCloseLease": {
                    aminoType: string;
                    toAmino: (message: _44.MsgCloseLease) => _44.MsgCloseLeaseAmino;
                    fromAmino: (object: _44.MsgCloseLeaseAmino) => _44.MsgCloseLease;
                };
            };
            QueryOrdersRequest: {
                typeUrl: string;
                encode(message: _47.QueryOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryOrdersRequest;
                fromPartial(object: Partial<_47.QueryOrdersRequest>): _47.QueryOrdersRequest;
                fromAmino(object: _47.QueryOrdersRequestAmino): _47.QueryOrdersRequest;
                toAmino(message: _47.QueryOrdersRequest): _47.QueryOrdersRequestAmino;
                fromAminoMsg(object: _47.QueryOrdersRequestAminoMsg): _47.QueryOrdersRequest;
                fromProtoMsg(message: _47.QueryOrdersRequestProtoMsg): _47.QueryOrdersRequest;
                toProto(message: _47.QueryOrdersRequest): Uint8Array;
                toProtoMsg(message: _47.QueryOrdersRequest): _47.QueryOrdersRequestProtoMsg;
            };
            QueryOrdersResponse: {
                typeUrl: string;
                encode(message: _47.QueryOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryOrdersResponse;
                fromPartial(object: Partial<_47.QueryOrdersResponse>): _47.QueryOrdersResponse;
                fromAmino(object: _47.QueryOrdersResponseAmino): _47.QueryOrdersResponse;
                toAmino(message: _47.QueryOrdersResponse): _47.QueryOrdersResponseAmino;
                fromAminoMsg(object: _47.QueryOrdersResponseAminoMsg): _47.QueryOrdersResponse;
                fromProtoMsg(message: _47.QueryOrdersResponseProtoMsg): _47.QueryOrdersResponse;
                toProto(message: _47.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _47.QueryOrdersResponse): _47.QueryOrdersResponseProtoMsg;
            };
            QueryOrderRequest: {
                typeUrl: string;
                encode(message: _47.QueryOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryOrderRequest;
                fromPartial(object: Partial<_47.QueryOrderRequest>): _47.QueryOrderRequest;
                fromAmino(object: _47.QueryOrderRequestAmino): _47.QueryOrderRequest;
                toAmino(message: _47.QueryOrderRequest): _47.QueryOrderRequestAmino;
                fromAminoMsg(object: _47.QueryOrderRequestAminoMsg): _47.QueryOrderRequest;
                fromProtoMsg(message: _47.QueryOrderRequestProtoMsg): _47.QueryOrderRequest;
                toProto(message: _47.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _47.QueryOrderRequest): _47.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                typeUrl: string;
                encode(message: _47.QueryOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryOrderResponse;
                fromPartial(object: Partial<_47.QueryOrderResponse>): _47.QueryOrderResponse;
                fromAmino(object: _47.QueryOrderResponseAmino): _47.QueryOrderResponse;
                toAmino(message: _47.QueryOrderResponse): _47.QueryOrderResponseAmino;
                fromAminoMsg(object: _47.QueryOrderResponseAminoMsg): _47.QueryOrderResponse;
                fromProtoMsg(message: _47.QueryOrderResponseProtoMsg): _47.QueryOrderResponse;
                toProto(message: _47.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _47.QueryOrderResponse): _47.QueryOrderResponseProtoMsg;
            };
            QueryBidsRequest: {
                typeUrl: string;
                encode(message: _47.QueryBidsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryBidsRequest;
                fromPartial(object: Partial<_47.QueryBidsRequest>): _47.QueryBidsRequest;
                fromAmino(object: _47.QueryBidsRequestAmino): _47.QueryBidsRequest;
                toAmino(message: _47.QueryBidsRequest): _47.QueryBidsRequestAmino;
                fromAminoMsg(object: _47.QueryBidsRequestAminoMsg): _47.QueryBidsRequest;
                fromProtoMsg(message: _47.QueryBidsRequestProtoMsg): _47.QueryBidsRequest;
                toProto(message: _47.QueryBidsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryBidsRequest): _47.QueryBidsRequestProtoMsg;
            };
            QueryBidsResponse: {
                typeUrl: string;
                encode(message: _47.QueryBidsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryBidsResponse;
                fromPartial(object: Partial<_47.QueryBidsResponse>): _47.QueryBidsResponse;
                fromAmino(object: _47.QueryBidsResponseAmino): _47.QueryBidsResponse;
                toAmino(message: _47.QueryBidsResponse): _47.QueryBidsResponseAmino;
                fromAminoMsg(object: _47.QueryBidsResponseAminoMsg): _47.QueryBidsResponse;
                fromProtoMsg(message: _47.QueryBidsResponseProtoMsg): _47.QueryBidsResponse;
                toProto(message: _47.QueryBidsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryBidsResponse): _47.QueryBidsResponseProtoMsg;
            };
            QueryBidRequest: {
                typeUrl: string;
                encode(message: _47.QueryBidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryBidRequest;
                fromPartial(object: Partial<_47.QueryBidRequest>): _47.QueryBidRequest;
                fromAmino(object: _47.QueryBidRequestAmino): _47.QueryBidRequest;
                toAmino(message: _47.QueryBidRequest): _47.QueryBidRequestAmino;
                fromAminoMsg(object: _47.QueryBidRequestAminoMsg): _47.QueryBidRequest;
                fromProtoMsg(message: _47.QueryBidRequestProtoMsg): _47.QueryBidRequest;
                toProto(message: _47.QueryBidRequest): Uint8Array;
                toProtoMsg(message: _47.QueryBidRequest): _47.QueryBidRequestProtoMsg;
            };
            QueryBidResponse: {
                typeUrl: string;
                encode(message: _47.QueryBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryBidResponse;
                fromPartial(object: Partial<_47.QueryBidResponse>): _47.QueryBidResponse;
                fromAmino(object: _47.QueryBidResponseAmino): _47.QueryBidResponse;
                toAmino(message: _47.QueryBidResponse): _47.QueryBidResponseAmino;
                fromAminoMsg(object: _47.QueryBidResponseAminoMsg): _47.QueryBidResponse;
                fromProtoMsg(message: _47.QueryBidResponseProtoMsg): _47.QueryBidResponse;
                toProto(message: _47.QueryBidResponse): Uint8Array;
                toProtoMsg(message: _47.QueryBidResponse): _47.QueryBidResponseProtoMsg;
            };
            QueryLeasesRequest: {
                typeUrl: string;
                encode(message: _47.QueryLeasesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryLeasesRequest;
                fromPartial(object: Partial<_47.QueryLeasesRequest>): _47.QueryLeasesRequest;
                fromAmino(object: _47.QueryLeasesRequestAmino): _47.QueryLeasesRequest;
                toAmino(message: _47.QueryLeasesRequest): _47.QueryLeasesRequestAmino;
                fromAminoMsg(object: _47.QueryLeasesRequestAminoMsg): _47.QueryLeasesRequest;
                fromProtoMsg(message: _47.QueryLeasesRequestProtoMsg): _47.QueryLeasesRequest;
                toProto(message: _47.QueryLeasesRequest): Uint8Array;
                toProtoMsg(message: _47.QueryLeasesRequest): _47.QueryLeasesRequestProtoMsg;
            };
            QueryLeasesResponse: {
                typeUrl: string;
                encode(message: _47.QueryLeasesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryLeasesResponse;
                fromPartial(object: Partial<_47.QueryLeasesResponse>): _47.QueryLeasesResponse;
                fromAmino(object: _47.QueryLeasesResponseAmino): _47.QueryLeasesResponse;
                toAmino(message: _47.QueryLeasesResponse): _47.QueryLeasesResponseAmino;
                fromAminoMsg(object: _47.QueryLeasesResponseAminoMsg): _47.QueryLeasesResponse;
                fromProtoMsg(message: _47.QueryLeasesResponseProtoMsg): _47.QueryLeasesResponse;
                toProto(message: _47.QueryLeasesResponse): Uint8Array;
                toProtoMsg(message: _47.QueryLeasesResponse): _47.QueryLeasesResponseProtoMsg;
            };
            QueryLeaseRequest: {
                typeUrl: string;
                encode(message: _47.QueryLeaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryLeaseRequest;
                fromPartial(object: Partial<_47.QueryLeaseRequest>): _47.QueryLeaseRequest;
                fromAmino(object: _47.QueryLeaseRequestAmino): _47.QueryLeaseRequest;
                toAmino(message: _47.QueryLeaseRequest): _47.QueryLeaseRequestAmino;
                fromAminoMsg(object: _47.QueryLeaseRequestAminoMsg): _47.QueryLeaseRequest;
                fromProtoMsg(message: _47.QueryLeaseRequestProtoMsg): _47.QueryLeaseRequest;
                toProto(message: _47.QueryLeaseRequest): Uint8Array;
                toProtoMsg(message: _47.QueryLeaseRequest): _47.QueryLeaseRequestProtoMsg;
            };
            QueryLeaseResponse: {
                typeUrl: string;
                encode(message: _47.QueryLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryLeaseResponse;
                fromPartial(object: Partial<_47.QueryLeaseResponse>): _47.QueryLeaseResponse;
                fromAmino(object: _47.QueryLeaseResponseAmino): _47.QueryLeaseResponse;
                toAmino(message: _47.QueryLeaseResponse): _47.QueryLeaseResponseAmino;
                fromAminoMsg(object: _47.QueryLeaseResponseAminoMsg): _47.QueryLeaseResponse;
                fromProtoMsg(message: _47.QueryLeaseResponseProtoMsg): _47.QueryLeaseResponse;
                toProto(message: _47.QueryLeaseResponse): Uint8Array;
                toProtoMsg(message: _47.QueryLeaseResponse): _47.QueryLeaseResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _46.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
                fromAmino(object: _46.ParamsAmino): _46.Params;
                toAmino(message: _46.Params): _46.ParamsAmino;
                fromAminoMsg(object: _46.ParamsAminoMsg): _46.Params;
                fromProtoMsg(message: _46.ParamsProtoMsg): _46.Params;
                toProto(message: _46.Params): Uint8Array;
                toProtoMsg(message: _46.Params): _46.ParamsProtoMsg;
            };
            order_StateFromJSON(object: any): _45.Order_State;
            order_StateToJSON(object: _45.Order_State): string;
            Order_State: typeof _45.Order_State;
            Order_StateSDKType: typeof _45.Order_State;
            Order_StateAmino: typeof _45.Order_State;
            OrderID: {
                typeUrl: string;
                encode(message: _45.OrderID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.OrderID;
                fromPartial(object: Partial<_45.OrderID>): _45.OrderID;
                fromAmino(object: _45.OrderIDAmino): _45.OrderID;
                toAmino(message: _45.OrderID): _45.OrderIDAmino;
                fromAminoMsg(object: _45.OrderIDAminoMsg): _45.OrderID;
                fromProtoMsg(message: _45.OrderIDProtoMsg): _45.OrderID;
                toProto(message: _45.OrderID): Uint8Array;
                toProtoMsg(message: _45.OrderID): _45.OrderIDProtoMsg;
            };
            Order: {
                typeUrl: string;
                encode(message: _45.Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.Order;
                fromPartial(object: Partial<_45.Order>): _45.Order;
                fromAmino(object: _45.OrderAmino): _45.Order;
                toAmino(message: _45.Order): _45.OrderAmino;
                fromAminoMsg(object: _45.OrderAminoMsg): _45.Order;
                fromProtoMsg(message: _45.OrderProtoMsg): _45.Order;
                toProto(message: _45.Order): Uint8Array;
                toProtoMsg(message: _45.Order): _45.OrderProtoMsg;
            };
            OrderFilters: {
                typeUrl: string;
                encode(message: _45.OrderFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.OrderFilters;
                fromPartial(object: Partial<_45.OrderFilters>): _45.OrderFilters;
                fromAmino(object: _45.OrderFiltersAmino): _45.OrderFilters;
                toAmino(message: _45.OrderFilters): _45.OrderFiltersAmino;
                fromAminoMsg(object: _45.OrderFiltersAminoMsg): _45.OrderFilters;
                fromProtoMsg(message: _45.OrderFiltersProtoMsg): _45.OrderFilters;
                toProto(message: _45.OrderFilters): Uint8Array;
                toProtoMsg(message: _45.OrderFilters): _45.OrderFiltersProtoMsg;
            };
            lease_StateFromJSON(object: any): _44.Lease_State;
            lease_StateToJSON(object: _44.Lease_State): string;
            Lease_State: typeof _44.Lease_State;
            Lease_StateSDKType: typeof _44.Lease_State;
            Lease_StateAmino: typeof _44.Lease_State;
            LeaseID: {
                typeUrl: string;
                encode(message: _44.LeaseID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.LeaseID;
                fromPartial(object: Partial<_44.LeaseID>): _44.LeaseID;
                fromAmino(object: _44.LeaseIDAmino): _44.LeaseID;
                toAmino(message: _44.LeaseID): _44.LeaseIDAmino;
                fromAminoMsg(object: _44.LeaseIDAminoMsg): _44.LeaseID;
                fromProtoMsg(message: _44.LeaseIDProtoMsg): _44.LeaseID;
                toProto(message: _44.LeaseID): Uint8Array;
                toProtoMsg(message: _44.LeaseID): _44.LeaseIDProtoMsg;
            };
            Lease: {
                typeUrl: string;
                encode(message: _44.Lease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.Lease;
                fromPartial(object: Partial<_44.Lease>): _44.Lease;
                fromAmino(object: _44.LeaseAmino): _44.Lease;
                toAmino(message: _44.Lease): _44.LeaseAmino;
                fromAminoMsg(object: _44.LeaseAminoMsg): _44.Lease;
                fromProtoMsg(message: _44.LeaseProtoMsg): _44.Lease;
                toProto(message: _44.Lease): Uint8Array;
                toProtoMsg(message: _44.Lease): _44.LeaseProtoMsg;
            };
            LeaseFilters: {
                typeUrl: string;
                encode(message: _44.LeaseFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.LeaseFilters;
                fromPartial(object: Partial<_44.LeaseFilters>): _44.LeaseFilters;
                fromAmino(object: _44.LeaseFiltersAmino): _44.LeaseFilters;
                toAmino(message: _44.LeaseFilters): _44.LeaseFiltersAmino;
                fromAminoMsg(object: _44.LeaseFiltersAminoMsg): _44.LeaseFilters;
                fromProtoMsg(message: _44.LeaseFiltersProtoMsg): _44.LeaseFilters;
                toProto(message: _44.LeaseFilters): Uint8Array;
                toProtoMsg(message: _44.LeaseFilters): _44.LeaseFiltersProtoMsg;
            };
            MsgCreateLease: {
                typeUrl: string;
                encode(message: _44.MsgCreateLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgCreateLease;
                fromPartial(object: Partial<_44.MsgCreateLease>): _44.MsgCreateLease;
                fromAmino(object: _44.MsgCreateLeaseAmino): _44.MsgCreateLease;
                toAmino(message: _44.MsgCreateLease): _44.MsgCreateLeaseAmino;
                fromAminoMsg(object: _44.MsgCreateLeaseAminoMsg): _44.MsgCreateLease;
                fromProtoMsg(message: _44.MsgCreateLeaseProtoMsg): _44.MsgCreateLease;
                toProto(message: _44.MsgCreateLease): Uint8Array;
                toProtoMsg(message: _44.MsgCreateLease): _44.MsgCreateLeaseProtoMsg;
            };
            MsgCreateLeaseResponse: {
                typeUrl: string;
                encode(_: _44.MsgCreateLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgCreateLeaseResponse;
                fromPartial(_: Partial<_44.MsgCreateLeaseResponse>): _44.MsgCreateLeaseResponse;
                fromAmino(_: _44.MsgCreateLeaseResponseAmino): _44.MsgCreateLeaseResponse;
                toAmino(_: _44.MsgCreateLeaseResponse): _44.MsgCreateLeaseResponseAmino;
                fromAminoMsg(object: _44.MsgCreateLeaseResponseAminoMsg): _44.MsgCreateLeaseResponse;
                fromProtoMsg(message: _44.MsgCreateLeaseResponseProtoMsg): _44.MsgCreateLeaseResponse;
                toProto(message: _44.MsgCreateLeaseResponse): Uint8Array;
                toProtoMsg(message: _44.MsgCreateLeaseResponse): _44.MsgCreateLeaseResponseProtoMsg;
            };
            MsgWithdrawLease: {
                typeUrl: string;
                encode(message: _44.MsgWithdrawLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgWithdrawLease;
                fromPartial(object: Partial<_44.MsgWithdrawLease>): _44.MsgWithdrawLease;
                fromAmino(object: _44.MsgWithdrawLeaseAmino): _44.MsgWithdrawLease;
                toAmino(message: _44.MsgWithdrawLease): _44.MsgWithdrawLeaseAmino;
                fromAminoMsg(object: _44.MsgWithdrawLeaseAminoMsg): _44.MsgWithdrawLease;
                fromProtoMsg(message: _44.MsgWithdrawLeaseProtoMsg): _44.MsgWithdrawLease;
                toProto(message: _44.MsgWithdrawLease): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawLease): _44.MsgWithdrawLeaseProtoMsg;
            };
            MsgWithdrawLeaseResponse: {
                typeUrl: string;
                encode(_: _44.MsgWithdrawLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgWithdrawLeaseResponse;
                fromPartial(_: Partial<_44.MsgWithdrawLeaseResponse>): _44.MsgWithdrawLeaseResponse;
                fromAmino(_: _44.MsgWithdrawLeaseResponseAmino): _44.MsgWithdrawLeaseResponse;
                toAmino(_: _44.MsgWithdrawLeaseResponse): _44.MsgWithdrawLeaseResponseAmino;
                fromAminoMsg(object: _44.MsgWithdrawLeaseResponseAminoMsg): _44.MsgWithdrawLeaseResponse;
                fromProtoMsg(message: _44.MsgWithdrawLeaseResponseProtoMsg): _44.MsgWithdrawLeaseResponse;
                toProto(message: _44.MsgWithdrawLeaseResponse): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawLeaseResponse): _44.MsgWithdrawLeaseResponseProtoMsg;
            };
            MsgCloseLease: {
                typeUrl: string;
                encode(message: _44.MsgCloseLease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgCloseLease;
                fromPartial(object: Partial<_44.MsgCloseLease>): _44.MsgCloseLease;
                fromAmino(object: _44.MsgCloseLeaseAmino): _44.MsgCloseLease;
                toAmino(message: _44.MsgCloseLease): _44.MsgCloseLeaseAmino;
                fromAminoMsg(object: _44.MsgCloseLeaseAminoMsg): _44.MsgCloseLease;
                fromProtoMsg(message: _44.MsgCloseLeaseProtoMsg): _44.MsgCloseLease;
                toProto(message: _44.MsgCloseLease): Uint8Array;
                toProtoMsg(message: _44.MsgCloseLease): _44.MsgCloseLeaseProtoMsg;
            };
            MsgCloseLeaseResponse: {
                typeUrl: string;
                encode(_: _44.MsgCloseLeaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgCloseLeaseResponse;
                fromPartial(_: Partial<_44.MsgCloseLeaseResponse>): _44.MsgCloseLeaseResponse;
                fromAmino(_: _44.MsgCloseLeaseResponseAmino): _44.MsgCloseLeaseResponse;
                toAmino(_: _44.MsgCloseLeaseResponse): _44.MsgCloseLeaseResponseAmino;
                fromAminoMsg(object: _44.MsgCloseLeaseResponseAminoMsg): _44.MsgCloseLeaseResponse;
                fromProtoMsg(message: _44.MsgCloseLeaseResponseProtoMsg): _44.MsgCloseLeaseResponse;
                toProto(message: _44.MsgCloseLeaseResponse): Uint8Array;
                toProtoMsg(message: _44.MsgCloseLeaseResponse): _44.MsgCloseLeaseResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _43.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
                fromAmino(object: _43.GenesisStateAmino): _43.GenesisState;
                toAmino(message: _43.GenesisState): _43.GenesisStateAmino;
                fromAminoMsg(object: _43.GenesisStateAminoMsg): _43.GenesisState;
                fromProtoMsg(message: _43.GenesisStateProtoMsg): _43.GenesisState;
                toProto(message: _43.GenesisState): Uint8Array;
                toProtoMsg(message: _43.GenesisState): _43.GenesisStateProtoMsg;
            };
            bid_StateFromJSON(object: any): _42.Bid_State;
            bid_StateToJSON(object: _42.Bid_State): string;
            Bid_State: typeof _42.Bid_State;
            Bid_StateSDKType: typeof _42.Bid_State;
            Bid_StateAmino: typeof _42.Bid_State;
            MsgCreateBid: {
                typeUrl: string;
                encode(message: _42.MsgCreateBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgCreateBid;
                fromPartial(object: Partial<_42.MsgCreateBid>): _42.MsgCreateBid;
                fromAmino(object: _42.MsgCreateBidAmino): _42.MsgCreateBid;
                toAmino(message: _42.MsgCreateBid): _42.MsgCreateBidAmino;
                fromAminoMsg(object: _42.MsgCreateBidAminoMsg): _42.MsgCreateBid;
                fromProtoMsg(message: _42.MsgCreateBidProtoMsg): _42.MsgCreateBid;
                toProto(message: _42.MsgCreateBid): Uint8Array;
                toProtoMsg(message: _42.MsgCreateBid): _42.MsgCreateBidProtoMsg;
            };
            MsgCreateBidResponse: {
                typeUrl: string;
                encode(_: _42.MsgCreateBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgCreateBidResponse;
                fromPartial(_: Partial<_42.MsgCreateBidResponse>): _42.MsgCreateBidResponse;
                fromAmino(_: _42.MsgCreateBidResponseAmino): _42.MsgCreateBidResponse;
                toAmino(_: _42.MsgCreateBidResponse): _42.MsgCreateBidResponseAmino;
                fromAminoMsg(object: _42.MsgCreateBidResponseAminoMsg): _42.MsgCreateBidResponse;
                fromProtoMsg(message: _42.MsgCreateBidResponseProtoMsg): _42.MsgCreateBidResponse;
                toProto(message: _42.MsgCreateBidResponse): Uint8Array;
                toProtoMsg(message: _42.MsgCreateBidResponse): _42.MsgCreateBidResponseProtoMsg;
            };
            MsgCloseBid: {
                typeUrl: string;
                encode(message: _42.MsgCloseBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.MsgCloseBid;
                fromPartial(object: Partial<_42.MsgCloseBid>): _42.MsgCloseBid;
                fromAmino(object: _42.MsgCloseBidAmino): _42.MsgCloseBid;
                toAmino(message: _42.MsgCloseBid): _42.MsgCloseBidAmino;
                fromAminoMsg(object: _42.MsgCloseBidAminoMsg): _42.MsgCloseBid;
                fromProtoMsg(message: _42.MsgCloseBidProtoMsg): _42.MsgCloseBid;
                toProto(message: _42.MsgCloseBid): Uint8Array;
                toProtoMsg(message: _42.MsgCloseBid): _42.MsgCloseBidProtoMsg;
            };
            MsgCloseBidResponse: {
                typeUrl: string;
                encode(_: _42.MsgCloseBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _42.MsgCloseBidResponse;
                fromPartial(_: Partial<_42.MsgCloseBidResponse>): _42.MsgCloseBidResponse;
                fromAmino(_: _42.MsgCloseBidResponseAmino): _42.MsgCloseBidResponse;
                toAmino(_: _42.MsgCloseBidResponse): _42.MsgCloseBidResponseAmino;
                fromAminoMsg(object: _42.MsgCloseBidResponseAminoMsg): _42.MsgCloseBidResponse;
                fromProtoMsg(message: _42.MsgCloseBidResponseProtoMsg): _42.MsgCloseBidResponse;
                toProto(message: _42.MsgCloseBidResponse): Uint8Array;
                toProtoMsg(message: _42.MsgCloseBidResponse): _42.MsgCloseBidResponseProtoMsg;
            };
            BidID: {
                typeUrl: string;
                encode(message: _42.BidID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.BidID;
                fromPartial(object: Partial<_42.BidID>): _42.BidID;
                fromAmino(object: _42.BidIDAmino): _42.BidID;
                toAmino(message: _42.BidID): _42.BidIDAmino;
                fromAminoMsg(object: _42.BidIDAminoMsg): _42.BidID;
                fromProtoMsg(message: _42.BidIDProtoMsg): _42.BidID;
                toProto(message: _42.BidID): Uint8Array;
                toProtoMsg(message: _42.BidID): _42.BidIDProtoMsg;
            };
            Bid: {
                typeUrl: string;
                encode(message: _42.Bid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.Bid;
                fromPartial(object: Partial<_42.Bid>): _42.Bid;
                fromAmino(object: _42.BidAmino): _42.Bid;
                toAmino(message: _42.Bid): _42.BidAmino;
                fromAminoMsg(object: _42.BidAminoMsg): _42.Bid;
                fromProtoMsg(message: _42.BidProtoMsg): _42.Bid;
                toProto(message: _42.Bid): Uint8Array;
                toProtoMsg(message: _42.Bid): _42.BidProtoMsg;
            };
            BidFilters: {
                typeUrl: string;
                encode(message: _42.BidFilters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.BidFilters;
                fromPartial(object: Partial<_42.BidFilters>): _42.BidFilters;
                fromAmino(object: _42.BidFiltersAmino): _42.BidFilters;
                toAmino(message: _42.BidFilters): _42.BidFiltersAmino;
                fromAminoMsg(object: _42.BidFiltersAminoMsg): _42.BidFilters;
                fromProtoMsg(message: _42.BidFiltersProtoMsg): _42.BidFilters;
                toProto(message: _42.BidFilters): Uint8Array;
                toProtoMsg(message: _42.BidFilters): _42.BidFiltersProtoMsg;
            };
        };
    }
    namespace provider {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createProvider(value: _49.MsgCreateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProvider(value: _49.MsgUpdateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProvider(value: _49.MsgDeleteProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createProvider(value: _49.MsgCreateProvider): {
                        typeUrl: string;
                        value: _49.MsgCreateProvider;
                    };
                    updateProvider(value: _49.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _49.MsgUpdateProvider;
                    };
                    deleteProvider(value: _49.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _49.MsgDeleteProvider;
                    };
                };
                fromJSON: {
                    createProvider(value: any): {
                        typeUrl: string;
                        value: _49.MsgCreateProvider;
                    };
                    updateProvider(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateProvider;
                    };
                    deleteProvider(value: any): {
                        typeUrl: string;
                        value: _49.MsgDeleteProvider;
                    };
                };
                fromPartial: {
                    createProvider(value: _49.MsgCreateProvider): {
                        typeUrl: string;
                        value: _49.MsgCreateProvider;
                    };
                    updateProvider(value: _49.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _49.MsgUpdateProvider;
                    };
                    deleteProvider(value: _49.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _49.MsgDeleteProvider;
                    };
                };
            };
            AminoConverter: {
                "/akash.provider.v1beta1.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: (message: _49.MsgCreateProvider) => _49.MsgCreateProviderAmino;
                    fromAmino: (object: _49.MsgCreateProviderAmino) => _49.MsgCreateProvider;
                };
                "/akash.provider.v1beta1.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: (message: _49.MsgUpdateProvider) => _49.MsgUpdateProviderAmino;
                    fromAmino: (object: _49.MsgUpdateProviderAmino) => _49.MsgUpdateProvider;
                };
                "/akash.provider.v1beta1.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: (message: _49.MsgDeleteProvider) => _49.MsgDeleteProviderAmino;
                    fromAmino: (object: _49.MsgDeleteProviderAmino) => _49.MsgDeleteProvider;
                };
            };
            ProviderInfo: {
                typeUrl: string;
                encode(message: _49.ProviderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.ProviderInfo;
                fromPartial(object: Partial<_49.ProviderInfo>): _49.ProviderInfo;
                fromAmino(object: _49.ProviderInfoAmino): _49.ProviderInfo;
                toAmino(message: _49.ProviderInfo): _49.ProviderInfoAmino;
                fromAminoMsg(object: _49.ProviderInfoAminoMsg): _49.ProviderInfo;
                fromProtoMsg(message: _49.ProviderInfoProtoMsg): _49.ProviderInfo;
                toProto(message: _49.ProviderInfo): Uint8Array;
                toProtoMsg(message: _49.ProviderInfo): _49.ProviderInfoProtoMsg;
            };
            MsgCreateProvider: {
                typeUrl: string;
                encode(message: _49.MsgCreateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgCreateProvider;
                fromPartial(object: Partial<_49.MsgCreateProvider>): _49.MsgCreateProvider;
                fromAmino(object: _49.MsgCreateProviderAmino): _49.MsgCreateProvider;
                toAmino(message: _49.MsgCreateProvider): _49.MsgCreateProviderAmino;
                fromAminoMsg(object: _49.MsgCreateProviderAminoMsg): _49.MsgCreateProvider;
                fromProtoMsg(message: _49.MsgCreateProviderProtoMsg): _49.MsgCreateProvider;
                toProto(message: _49.MsgCreateProvider): Uint8Array;
                toProtoMsg(message: _49.MsgCreateProvider): _49.MsgCreateProviderProtoMsg;
            };
            MsgCreateProviderResponse: {
                typeUrl: string;
                encode(_: _49.MsgCreateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgCreateProviderResponse;
                fromPartial(_: Partial<_49.MsgCreateProviderResponse>): _49.MsgCreateProviderResponse;
                fromAmino(_: _49.MsgCreateProviderResponseAmino): _49.MsgCreateProviderResponse;
                toAmino(_: _49.MsgCreateProviderResponse): _49.MsgCreateProviderResponseAmino;
                fromAminoMsg(object: _49.MsgCreateProviderResponseAminoMsg): _49.MsgCreateProviderResponse;
                fromProtoMsg(message: _49.MsgCreateProviderResponseProtoMsg): _49.MsgCreateProviderResponse;
                toProto(message: _49.MsgCreateProviderResponse): Uint8Array;
                toProtoMsg(message: _49.MsgCreateProviderResponse): _49.MsgCreateProviderResponseProtoMsg;
            };
            MsgUpdateProvider: {
                typeUrl: string;
                encode(message: _49.MsgUpdateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgUpdateProvider;
                fromPartial(object: Partial<_49.MsgUpdateProvider>): _49.MsgUpdateProvider;
                fromAmino(object: _49.MsgUpdateProviderAmino): _49.MsgUpdateProvider;
                toAmino(message: _49.MsgUpdateProvider): _49.MsgUpdateProviderAmino;
                fromAminoMsg(object: _49.MsgUpdateProviderAminoMsg): _49.MsgUpdateProvider;
                fromProtoMsg(message: _49.MsgUpdateProviderProtoMsg): _49.MsgUpdateProvider;
                toProto(message: _49.MsgUpdateProvider): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateProvider): _49.MsgUpdateProviderProtoMsg;
            };
            MsgUpdateProviderResponse: {
                typeUrl: string;
                encode(_: _49.MsgUpdateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgUpdateProviderResponse;
                fromPartial(_: Partial<_49.MsgUpdateProviderResponse>): _49.MsgUpdateProviderResponse;
                fromAmino(_: _49.MsgUpdateProviderResponseAmino): _49.MsgUpdateProviderResponse;
                toAmino(_: _49.MsgUpdateProviderResponse): _49.MsgUpdateProviderResponseAmino;
                fromAminoMsg(object: _49.MsgUpdateProviderResponseAminoMsg): _49.MsgUpdateProviderResponse;
                fromProtoMsg(message: _49.MsgUpdateProviderResponseProtoMsg): _49.MsgUpdateProviderResponse;
                toProto(message: _49.MsgUpdateProviderResponse): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateProviderResponse): _49.MsgUpdateProviderResponseProtoMsg;
            };
            MsgDeleteProvider: {
                typeUrl: string;
                encode(message: _49.MsgDeleteProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.MsgDeleteProvider;
                fromPartial(object: Partial<_49.MsgDeleteProvider>): _49.MsgDeleteProvider;
                fromAmino(object: _49.MsgDeleteProviderAmino): _49.MsgDeleteProvider;
                toAmino(message: _49.MsgDeleteProvider): _49.MsgDeleteProviderAmino;
                fromAminoMsg(object: _49.MsgDeleteProviderAminoMsg): _49.MsgDeleteProvider;
                fromProtoMsg(message: _49.MsgDeleteProviderProtoMsg): _49.MsgDeleteProvider;
                toProto(message: _49.MsgDeleteProvider): Uint8Array;
                toProtoMsg(message: _49.MsgDeleteProvider): _49.MsgDeleteProviderProtoMsg;
            };
            MsgDeleteProviderResponse: {
                typeUrl: string;
                encode(_: _49.MsgDeleteProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _49.MsgDeleteProviderResponse;
                fromPartial(_: Partial<_49.MsgDeleteProviderResponse>): _49.MsgDeleteProviderResponse;
                fromAmino(_: _49.MsgDeleteProviderResponseAmino): _49.MsgDeleteProviderResponse;
                toAmino(_: _49.MsgDeleteProviderResponse): _49.MsgDeleteProviderResponseAmino;
                fromAminoMsg(object: _49.MsgDeleteProviderResponseAminoMsg): _49.MsgDeleteProviderResponse;
                fromProtoMsg(message: _49.MsgDeleteProviderResponseProtoMsg): _49.MsgDeleteProviderResponse;
                toProto(message: _49.MsgDeleteProviderResponse): Uint8Array;
                toProtoMsg(message: _49.MsgDeleteProviderResponse): _49.MsgDeleteProviderResponseProtoMsg;
            };
            Provider: {
                typeUrl: string;
                encode(message: _49.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _49.Provider;
                fromPartial(object: Partial<_49.Provider>): _49.Provider;
                fromAmino(object: _49.ProviderAmino): _49.Provider;
                toAmino(message: _49.Provider): _49.ProviderAmino;
                fromAminoMsg(object: _49.ProviderAminoMsg): _49.Provider;
                fromProtoMsg(message: _49.ProviderProtoMsg): _49.Provider;
                toProto(message: _49.Provider): Uint8Array;
                toProtoMsg(message: _49.Provider): _49.ProviderProtoMsg;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _193.MsgClientImpl;
            QueryClientImpl: typeof _185.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                providers(request?: _52.QueryProvidersRequest): Promise<_52.QueryProvidersResponse>;
                provider(request: _52.QueryProviderRequest): Promise<_52.QueryProviderResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createProvider(value: _51.MsgCreateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProvider(value: _51.MsgUpdateProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteProvider(value: _51.MsgDeleteProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createProvider(value: _51.MsgCreateProvider): {
                        typeUrl: string;
                        value: _51.MsgCreateProvider;
                    };
                    updateProvider(value: _51.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _51.MsgUpdateProvider;
                    };
                    deleteProvider(value: _51.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _51.MsgDeleteProvider;
                    };
                };
                fromJSON: {
                    createProvider(value: any): {
                        typeUrl: string;
                        value: _51.MsgCreateProvider;
                    };
                    updateProvider(value: any): {
                        typeUrl: string;
                        value: _51.MsgUpdateProvider;
                    };
                    deleteProvider(value: any): {
                        typeUrl: string;
                        value: _51.MsgDeleteProvider;
                    };
                };
                fromPartial: {
                    createProvider(value: _51.MsgCreateProvider): {
                        typeUrl: string;
                        value: _51.MsgCreateProvider;
                    };
                    updateProvider(value: _51.MsgUpdateProvider): {
                        typeUrl: string;
                        value: _51.MsgUpdateProvider;
                    };
                    deleteProvider(value: _51.MsgDeleteProvider): {
                        typeUrl: string;
                        value: _51.MsgDeleteProvider;
                    };
                };
            };
            AminoConverter: {
                "/akash.provider.v1beta2.MsgCreateProvider": {
                    aminoType: string;
                    toAmino: (message: _51.MsgCreateProvider) => _51.MsgCreateProviderAmino;
                    fromAmino: (object: _51.MsgCreateProviderAmino) => _51.MsgCreateProvider;
                };
                "/akash.provider.v1beta2.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: (message: _51.MsgUpdateProvider) => _51.MsgUpdateProviderAmino;
                    fromAmino: (object: _51.MsgUpdateProviderAmino) => _51.MsgUpdateProvider;
                };
                "/akash.provider.v1beta2.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: (message: _51.MsgDeleteProvider) => _51.MsgDeleteProviderAmino;
                    fromAmino: (object: _51.MsgDeleteProviderAmino) => _51.MsgDeleteProvider;
                };
            };
            QueryProvidersRequest: {
                typeUrl: string;
                encode(message: _52.QueryProvidersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryProvidersRequest;
                fromPartial(object: Partial<_52.QueryProvidersRequest>): _52.QueryProvidersRequest;
                fromAmino(object: _52.QueryProvidersRequestAmino): _52.QueryProvidersRequest;
                toAmino(message: _52.QueryProvidersRequest): _52.QueryProvidersRequestAmino;
                fromAminoMsg(object: _52.QueryProvidersRequestAminoMsg): _52.QueryProvidersRequest;
                fromProtoMsg(message: _52.QueryProvidersRequestProtoMsg): _52.QueryProvidersRequest;
                toProto(message: _52.QueryProvidersRequest): Uint8Array;
                toProtoMsg(message: _52.QueryProvidersRequest): _52.QueryProvidersRequestProtoMsg;
            };
            QueryProvidersResponse: {
                typeUrl: string;
                encode(message: _52.QueryProvidersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryProvidersResponse;
                fromPartial(object: Partial<_52.QueryProvidersResponse>): _52.QueryProvidersResponse;
                fromAmino(object: _52.QueryProvidersResponseAmino): _52.QueryProvidersResponse;
                toAmino(message: _52.QueryProvidersResponse): _52.QueryProvidersResponseAmino;
                fromAminoMsg(object: _52.QueryProvidersResponseAminoMsg): _52.QueryProvidersResponse;
                fromProtoMsg(message: _52.QueryProvidersResponseProtoMsg): _52.QueryProvidersResponse;
                toProto(message: _52.QueryProvidersResponse): Uint8Array;
                toProtoMsg(message: _52.QueryProvidersResponse): _52.QueryProvidersResponseProtoMsg;
            };
            QueryProviderRequest: {
                typeUrl: string;
                encode(message: _52.QueryProviderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryProviderRequest;
                fromPartial(object: Partial<_52.QueryProviderRequest>): _52.QueryProviderRequest;
                fromAmino(object: _52.QueryProviderRequestAmino): _52.QueryProviderRequest;
                toAmino(message: _52.QueryProviderRequest): _52.QueryProviderRequestAmino;
                fromAminoMsg(object: _52.QueryProviderRequestAminoMsg): _52.QueryProviderRequest;
                fromProtoMsg(message: _52.QueryProviderRequestProtoMsg): _52.QueryProviderRequest;
                toProto(message: _52.QueryProviderRequest): Uint8Array;
                toProtoMsg(message: _52.QueryProviderRequest): _52.QueryProviderRequestProtoMsg;
            };
            QueryProviderResponse: {
                typeUrl: string;
                encode(message: _52.QueryProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _52.QueryProviderResponse;
                fromPartial(object: Partial<_52.QueryProviderResponse>): _52.QueryProviderResponse;
                fromAmino(object: _52.QueryProviderResponseAmino): _52.QueryProviderResponse;
                toAmino(message: _52.QueryProviderResponse): _52.QueryProviderResponseAmino;
                fromAminoMsg(object: _52.QueryProviderResponseAminoMsg): _52.QueryProviderResponse;
                fromProtoMsg(message: _52.QueryProviderResponseProtoMsg): _52.QueryProviderResponse;
                toProto(message: _52.QueryProviderResponse): Uint8Array;
                toProtoMsg(message: _52.QueryProviderResponse): _52.QueryProviderResponseProtoMsg;
            };
            ProviderInfo: {
                typeUrl: string;
                encode(message: _51.ProviderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.ProviderInfo;
                fromPartial(object: Partial<_51.ProviderInfo>): _51.ProviderInfo;
                fromAmino(object: _51.ProviderInfoAmino): _51.ProviderInfo;
                toAmino(message: _51.ProviderInfo): _51.ProviderInfoAmino;
                fromAminoMsg(object: _51.ProviderInfoAminoMsg): _51.ProviderInfo;
                fromProtoMsg(message: _51.ProviderInfoProtoMsg): _51.ProviderInfo;
                toProto(message: _51.ProviderInfo): Uint8Array;
                toProtoMsg(message: _51.ProviderInfo): _51.ProviderInfoProtoMsg;
            };
            MsgCreateProvider: {
                typeUrl: string;
                encode(message: _51.MsgCreateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.MsgCreateProvider;
                fromPartial(object: Partial<_51.MsgCreateProvider>): _51.MsgCreateProvider;
                fromAmino(object: _51.MsgCreateProviderAmino): _51.MsgCreateProvider;
                toAmino(message: _51.MsgCreateProvider): _51.MsgCreateProviderAmino;
                fromAminoMsg(object: _51.MsgCreateProviderAminoMsg): _51.MsgCreateProvider;
                fromProtoMsg(message: _51.MsgCreateProviderProtoMsg): _51.MsgCreateProvider;
                toProto(message: _51.MsgCreateProvider): Uint8Array;
                toProtoMsg(message: _51.MsgCreateProvider): _51.MsgCreateProviderProtoMsg;
            };
            MsgCreateProviderResponse: {
                typeUrl: string;
                encode(_: _51.MsgCreateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.MsgCreateProviderResponse;
                fromPartial(_: Partial<_51.MsgCreateProviderResponse>): _51.MsgCreateProviderResponse;
                fromAmino(_: _51.MsgCreateProviderResponseAmino): _51.MsgCreateProviderResponse;
                toAmino(_: _51.MsgCreateProviderResponse): _51.MsgCreateProviderResponseAmino;
                fromAminoMsg(object: _51.MsgCreateProviderResponseAminoMsg): _51.MsgCreateProviderResponse;
                fromProtoMsg(message: _51.MsgCreateProviderResponseProtoMsg): _51.MsgCreateProviderResponse;
                toProto(message: _51.MsgCreateProviderResponse): Uint8Array;
                toProtoMsg(message: _51.MsgCreateProviderResponse): _51.MsgCreateProviderResponseProtoMsg;
            };
            MsgUpdateProvider: {
                typeUrl: string;
                encode(message: _51.MsgUpdateProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.MsgUpdateProvider;
                fromPartial(object: Partial<_51.MsgUpdateProvider>): _51.MsgUpdateProvider;
                fromAmino(object: _51.MsgUpdateProviderAmino): _51.MsgUpdateProvider;
                toAmino(message: _51.MsgUpdateProvider): _51.MsgUpdateProviderAmino;
                fromAminoMsg(object: _51.MsgUpdateProviderAminoMsg): _51.MsgUpdateProvider;
                fromProtoMsg(message: _51.MsgUpdateProviderProtoMsg): _51.MsgUpdateProvider;
                toProto(message: _51.MsgUpdateProvider): Uint8Array;
                toProtoMsg(message: _51.MsgUpdateProvider): _51.MsgUpdateProviderProtoMsg;
            };
            MsgUpdateProviderResponse: {
                typeUrl: string;
                encode(_: _51.MsgUpdateProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.MsgUpdateProviderResponse;
                fromPartial(_: Partial<_51.MsgUpdateProviderResponse>): _51.MsgUpdateProviderResponse;
                fromAmino(_: _51.MsgUpdateProviderResponseAmino): _51.MsgUpdateProviderResponse;
                toAmino(_: _51.MsgUpdateProviderResponse): _51.MsgUpdateProviderResponseAmino;
                fromAminoMsg(object: _51.MsgUpdateProviderResponseAminoMsg): _51.MsgUpdateProviderResponse;
                fromProtoMsg(message: _51.MsgUpdateProviderResponseProtoMsg): _51.MsgUpdateProviderResponse;
                toProto(message: _51.MsgUpdateProviderResponse): Uint8Array;
                toProtoMsg(message: _51.MsgUpdateProviderResponse): _51.MsgUpdateProviderResponseProtoMsg;
            };
            MsgDeleteProvider: {
                typeUrl: string;
                encode(message: _51.MsgDeleteProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.MsgDeleteProvider;
                fromPartial(object: Partial<_51.MsgDeleteProvider>): _51.MsgDeleteProvider;
                fromAmino(object: _51.MsgDeleteProviderAmino): _51.MsgDeleteProvider;
                toAmino(message: _51.MsgDeleteProvider): _51.MsgDeleteProviderAmino;
                fromAminoMsg(object: _51.MsgDeleteProviderAminoMsg): _51.MsgDeleteProvider;
                fromProtoMsg(message: _51.MsgDeleteProviderProtoMsg): _51.MsgDeleteProvider;
                toProto(message: _51.MsgDeleteProvider): Uint8Array;
                toProtoMsg(message: _51.MsgDeleteProvider): _51.MsgDeleteProviderProtoMsg;
            };
            MsgDeleteProviderResponse: {
                typeUrl: string;
                encode(_: _51.MsgDeleteProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _51.MsgDeleteProviderResponse;
                fromPartial(_: Partial<_51.MsgDeleteProviderResponse>): _51.MsgDeleteProviderResponse;
                fromAmino(_: _51.MsgDeleteProviderResponseAmino): _51.MsgDeleteProviderResponse;
                toAmino(_: _51.MsgDeleteProviderResponse): _51.MsgDeleteProviderResponseAmino;
                fromAminoMsg(object: _51.MsgDeleteProviderResponseAminoMsg): _51.MsgDeleteProviderResponse;
                fromProtoMsg(message: _51.MsgDeleteProviderResponseProtoMsg): _51.MsgDeleteProviderResponse;
                toProto(message: _51.MsgDeleteProviderResponse): Uint8Array;
                toProtoMsg(message: _51.MsgDeleteProviderResponse): _51.MsgDeleteProviderResponseProtoMsg;
            };
            Provider: {
                typeUrl: string;
                encode(message: _51.Provider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _51.Provider;
                fromPartial(object: Partial<_51.Provider>): _51.Provider;
                fromAmino(object: _51.ProviderAmino): _51.Provider;
                toAmino(message: _51.Provider): _51.ProviderAmino;
                fromAminoMsg(object: _51.ProviderAminoMsg): _51.Provider;
                fromProtoMsg(message: _51.ProviderProtoMsg): _51.Provider;
                toProto(message: _51.Provider): Uint8Array;
                toProtoMsg(message: _51.Provider): _51.ProviderProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _50.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
                fromAminoMsg(object: _50.GenesisStateAminoMsg): _50.GenesisState;
                fromProtoMsg(message: _50.GenesisStateProtoMsg): _50.GenesisState;
                toProto(message: _50.GenesisState): Uint8Array;
                toProtoMsg(message: _50.GenesisState): _50.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            akash: {
                audit: {
                    v1beta1: _186.MsgClientImpl;
                    v1beta2: _187.MsgClientImpl;
                };
                cert: {
                    v1beta2: _188.MsgClientImpl;
                };
                deployment: {
                    v1beta1: _189.MsgClientImpl;
                    v1beta2: _190.MsgClientImpl;
                };
                market: {
                    v1beta2: _191.MsgClientImpl;
                };
                provider: {
                    v1beta1: _192.MsgClientImpl;
                    v1beta2: _193.MsgClientImpl;
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
                };
                cert: {
                    v1beta2: {
                        certificates(request: _15.QueryCertificatesRequest): Promise<_15.QueryCertificatesResponse>;
                    };
                };
                deployment: {
                    v1beta1: {
                        deployments(request: _21.QueryDeploymentsRequest): Promise<_21.QueryDeploymentsResponse>;
                        deployment(request: _21.QueryDeploymentRequest): Promise<_21.QueryDeploymentResponse>;
                        group(request: _21.QueryGroupRequest): Promise<_21.QueryGroupResponse>;
                    };
                    v1beta2: {
                        deployments(request: _31.QueryDeploymentsRequest): Promise<_31.QueryDeploymentsResponse>;
                        deployment(request: _31.QueryDeploymentRequest): Promise<_31.QueryDeploymentResponse>;
                        group(request: _31.QueryGroupRequest): Promise<_31.QueryGroupResponse>;
                    };
                };
                escrow: {
                    v1beta1: {
                        accounts(request: _35.QueryAccountsRequest): Promise<_35.QueryAccountsResponse>;
                        payments(request: _35.QueryPaymentsRequest): Promise<_35.QueryPaymentsResponse>;
                    };
                    v1beta2: {
                        accounts(request: _38.QueryAccountsRequest): Promise<_38.QueryAccountsResponse>;
                        payments(request: _38.QueryPaymentsRequest): Promise<_38.QueryPaymentsResponse>;
                    };
                };
                market: {
                    v1beta2: {
                        orders(request: _47.QueryOrdersRequest): Promise<_47.QueryOrdersResponse>;
                        order(request: _47.QueryOrderRequest): Promise<_47.QueryOrderResponse>;
                        bids(request: _47.QueryBidsRequest): Promise<_47.QueryBidsResponse>;
                        bid(request: _47.QueryBidRequest): Promise<_47.QueryBidResponse>;
                        leases(request: _47.QueryLeasesRequest): Promise<_47.QueryLeasesResponse>;
                        lease(request: _47.QueryLeaseRequest): Promise<_47.QueryLeaseResponse>;
                    };
                };
                provider: {
                    v1beta2: {
                        providers(request?: _52.QueryProvidersRequest): Promise<_52.QueryProvidersResponse>;
                        provider(request: _52.QueryProviderRequest): Promise<_52.QueryProviderResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
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
                    v1beta2: _170.LCDQueryClient;
                };
                cert: {
                    v1beta2: _171.LCDQueryClient;
                };
                deployment: {
                    v1beta1: _172.LCDQueryClient;
                    v1beta2: _173.LCDQueryClient;
                };
                escrow: {
                    v1beta1: _174.LCDQueryClient;
                    v1beta2: _175.LCDQueryClient;
                };
                market: {
                    v1beta2: _176.LCDQueryClient;
                };
                provider: {
                    v1beta2: _177.LCDQueryClient;
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
