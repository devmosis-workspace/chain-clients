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
import * as _169 from "./audit/v1beta2/query.rpc.Query";
import * as _170 from "./cert/v1beta2/query.rpc.Query";
import * as _171 from "./deployment/v1beta1/query.rpc.Query";
import * as _172 from "./deployment/v1beta2/query.rpc.Query";
import * as _173 from "./escrow/v1beta1/query.rpc.Query";
import * as _174 from "./escrow/v1beta2/query.rpc.Query";
import * as _175 from "./market/v1beta2/query.rpc.Query";
import * as _176 from "./provider/v1beta2/query.rpc.Query";
import * as _177 from "./audit/v1beta1/audit.rpc.msg";
import * as _178 from "./audit/v1beta2/audit.rpc.msg";
import * as _179 from "./cert/v1beta2/cert.rpc.msg";
import * as _180 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _181 from "./deployment/v1beta2/service.rpc.msg";
import * as _182 from "./market/v1beta2/service.rpc.msg";
import * as _183 from "./provider/v1beta1/provider.rpc.msg";
import * as _184 from "./provider/v1beta2/provider.rpc.msg";
export declare namespace akash {
    namespace audit {
        const v1beta1: {
            MsgClientImpl: typeof _177.MsgClientImpl;
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
                    toAmino: ({ owner, auditor, attributes }: _0.MsgSignProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    fromAmino: ({ owner, auditor, attributes }: {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    }) => _0.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta1.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, keys }: _0.MsgDeleteProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    };
                    fromAmino: ({ owner, auditor, keys }: {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    }) => _0.MsgDeleteProviderAttributes;
                };
            };
            Provider: {
                encode(message: _0.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Provider;
                fromPartial(object: Partial<_0.Provider>): _0.Provider;
            };
            AuditedAttributes: {
                encode(message: _0.AuditedAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.AuditedAttributes;
                fromPartial(object: Partial<_0.AuditedAttributes>): _0.AuditedAttributes;
            };
            AttributesResponse: {
                encode(message: _0.AttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.AttributesResponse;
                fromPartial(object: Partial<_0.AttributesResponse>): _0.AttributesResponse;
            };
            AttributesFilters: {
                encode(message: _0.AttributesFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.AttributesFilters;
                fromPartial(object: Partial<_0.AttributesFilters>): _0.AttributesFilters;
            };
            MsgSignProviderAttributes: {
                encode(message: _0.MsgSignProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.MsgSignProviderAttributes;
                fromPartial(object: Partial<_0.MsgSignProviderAttributes>): _0.MsgSignProviderAttributes;
            };
            MsgSignProviderAttributesResponse: {
                encode(_: _0.MsgSignProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _0.MsgSignProviderAttributesResponse;
                fromPartial(_: Partial<_0.MsgSignProviderAttributesResponse>): _0.MsgSignProviderAttributesResponse;
            };
            MsgDeleteProviderAttributes: {
                encode(message: _0.MsgDeleteProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.MsgDeleteProviderAttributes;
                fromPartial(object: Partial<_0.MsgDeleteProviderAttributes>): _0.MsgDeleteProviderAttributes;
            };
            MsgDeleteProviderAttributesResponse: {
                encode(_: _0.MsgDeleteProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _0.MsgDeleteProviderAttributesResponse;
                fromPartial(_: Partial<_0.MsgDeleteProviderAttributesResponse>): _0.MsgDeleteProviderAttributesResponse;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allProvidersAttributes(request?: _3.QueryAllProvidersAttributesRequest): Promise<_3.QueryProvidersResponse>;
                providerAttributes(request: _3.QueryProviderAttributesRequest): Promise<_3.QueryProvidersResponse>;
                providerAuditorAttributes(request: _3.QueryProviderAuditorRequest): Promise<_3.QueryProvidersResponse>;
                auditorAttributes(request: _3.QueryAuditorAttributesRequest): Promise<_3.QueryProvidersResponse>;
            };
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
                    toAmino: ({ owner, auditor, attributes }: _1.MsgSignProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    fromAmino: ({ owner, auditor, attributes }: {
                        owner: string;
                        auditor: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    }) => _1.MsgSignProviderAttributes;
                };
                "/akash.audit.v1beta2.MsgDeleteProviderAttributes": {
                    aminoType: string;
                    toAmino: ({ owner, auditor, keys }: _1.MsgDeleteProviderAttributes) => {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    };
                    fromAmino: ({ owner, auditor, keys }: {
                        owner: string;
                        auditor: string;
                        keys: string[];
                    }) => _1.MsgDeleteProviderAttributes;
                };
            };
            QueryProvidersResponse: {
                encode(message: _3.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryProvidersResponse;
                fromPartial(object: Partial<_3.QueryProvidersResponse>): _3.QueryProvidersResponse;
            };
            QueryProviderRequest: {
                encode(message: _3.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryProviderRequest;
                fromPartial(object: Partial<_3.QueryProviderRequest>): _3.QueryProviderRequest;
            };
            QueryAllProvidersAttributesRequest: {
                encode(message: _3.QueryAllProvidersAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryAllProvidersAttributesRequest;
                fromPartial(object: Partial<_3.QueryAllProvidersAttributesRequest>): _3.QueryAllProvidersAttributesRequest;
            };
            QueryProviderAttributesRequest: {
                encode(message: _3.QueryProviderAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryProviderAttributesRequest;
                fromPartial(object: Partial<_3.QueryProviderAttributesRequest>): _3.QueryProviderAttributesRequest;
            };
            QueryProviderAuditorRequest: {
                encode(message: _3.QueryProviderAuditorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryProviderAuditorRequest;
                fromPartial(object: Partial<_3.QueryProviderAuditorRequest>): _3.QueryProviderAuditorRequest;
            };
            QueryAuditorAttributesRequest: {
                encode(message: _3.QueryAuditorAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryAuditorAttributesRequest;
                fromPartial(object: Partial<_3.QueryAuditorAttributesRequest>): _3.QueryAuditorAttributesRequest;
            };
            GenesisState: {
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.GenesisState;
                fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
            };
            Provider: {
                encode(message: _1.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.Provider;
                fromPartial(object: Partial<_1.Provider>): _1.Provider;
            };
            AuditedAttributes: {
                encode(message: _1.AuditedAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.AuditedAttributes;
                fromPartial(object: Partial<_1.AuditedAttributes>): _1.AuditedAttributes;
            };
            AttributesResponse: {
                encode(message: _1.AttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.AttributesResponse;
                fromPartial(object: Partial<_1.AttributesResponse>): _1.AttributesResponse;
            };
            AttributesFilters: {
                encode(message: _1.AttributesFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.AttributesFilters;
                fromPartial(object: Partial<_1.AttributesFilters>): _1.AttributesFilters;
            };
            MsgSignProviderAttributes: {
                encode(message: _1.MsgSignProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgSignProviderAttributes;
                fromPartial(object: Partial<_1.MsgSignProviderAttributes>): _1.MsgSignProviderAttributes;
            };
            MsgSignProviderAttributesResponse: {
                encode(_: _1.MsgSignProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _1.MsgSignProviderAttributesResponse;
                fromPartial(_: Partial<_1.MsgSignProviderAttributesResponse>): _1.MsgSignProviderAttributesResponse;
            };
            MsgDeleteProviderAttributes: {
                encode(message: _1.MsgDeleteProviderAttributes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgDeleteProviderAttributes;
                fromPartial(object: Partial<_1.MsgDeleteProviderAttributes>): _1.MsgDeleteProviderAttributes;
            };
            MsgDeleteProviderAttributesResponse: {
                encode(_: _1.MsgDeleteProviderAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _1.MsgDeleteProviderAttributesResponse;
                fromPartial(_: Partial<_1.MsgDeleteProviderAttributesResponse>): _1.MsgDeleteProviderAttributesResponse;
            };
        };
    }
    namespace base {
        const v1beta1: {
            ResourceValue: {
                encode(message: _7.ResourceValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.ResourceValue;
                fromPartial(object: Partial<_7.ResourceValue>): _7.ResourceValue;
            };
            CPU: {
                encode(message: _6.CPU, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.CPU;
                fromPartial(object: Partial<_6.CPU>): _6.CPU;
            };
            Memory: {
                encode(message: _6.Memory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Memory;
                fromPartial(object: Partial<_6.Memory>): _6.Memory;
            };
            Storage: {
                encode(message: _6.Storage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Storage;
                fromPartial(object: Partial<_6.Storage>): _6.Storage;
            };
            ResourceUnits: {
                encode(message: _6.ResourceUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.ResourceUnits;
                fromPartial(object: Partial<_6.ResourceUnits>): _6.ResourceUnits;
            };
            endpoint_KindFromJSON(object: any): _5.Endpoint_Kind;
            endpoint_KindToJSON(object: _5.Endpoint_Kind): string;
            Endpoint_Kind: typeof _5.Endpoint_Kind;
            Endpoint_KindSDKType: typeof _5.Endpoint_Kind;
            Endpoint: {
                encode(message: _5.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Endpoint;
                fromPartial(object: Partial<_5.Endpoint>): _5.Endpoint;
            };
            Attribute: {
                encode(message: _4.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.Attribute;
                fromPartial(object: Partial<_4.Attribute>): _4.Attribute;
            };
            SignedBy: {
                encode(message: _4.SignedBy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.SignedBy;
                fromPartial(object: Partial<_4.SignedBy>): _4.SignedBy;
            };
            PlacementRequirements: {
                encode(message: _4.PlacementRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.PlacementRequirements;
                fromPartial(object: Partial<_4.PlacementRequirements>): _4.PlacementRequirements;
            };
        };
        const v1beta2: {
            ResourceValue: {
                encode(message: _12.ResourceValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.ResourceValue;
                fromPartial(object: Partial<_12.ResourceValue>): _12.ResourceValue;
            };
            ResourceUnits: {
                encode(message: _11.ResourceUnits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.ResourceUnits;
                fromPartial(object: Partial<_11.ResourceUnits>): _11.ResourceUnits;
            };
            CPU: {
                encode(message: _10.CPU, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.CPU;
                fromPartial(object: Partial<_10.CPU>): _10.CPU;
            };
            Memory: {
                encode(message: _10.Memory, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.Memory;
                fromPartial(object: Partial<_10.Memory>): _10.Memory;
            };
            Storage: {
                encode(message: _10.Storage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.Storage;
                fromPartial(object: Partial<_10.Storage>): _10.Storage;
            };
            endpoint_KindFromJSON(object: any): _9.Endpoint_Kind;
            endpoint_KindToJSON(object: _9.Endpoint_Kind): string;
            Endpoint_Kind: typeof _9.Endpoint_Kind;
            Endpoint_KindSDKType: typeof _9.Endpoint_Kind;
            Endpoint: {
                encode(message: _9.Endpoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.Endpoint;
                fromPartial(object: Partial<_9.Endpoint>): _9.Endpoint;
            };
            Attribute: {
                encode(message: _8.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.Attribute;
                fromPartial(object: Partial<_8.Attribute>): _8.Attribute;
            };
            SignedBy: {
                encode(message: _8.SignedBy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.SignedBy;
                fromPartial(object: Partial<_8.SignedBy>): _8.SignedBy;
            };
            PlacementRequirements: {
                encode(message: _8.PlacementRequirements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.PlacementRequirements;
                fromPartial(object: Partial<_8.PlacementRequirements>): _8.PlacementRequirements;
            };
        };
    }
    namespace cert {
        const v1beta2: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                certificates(request: _15.QueryCertificatesRequest): Promise<_15.QueryCertificatesResponse>;
            };
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
                    toAmino: ({ owner, cert, pubkey }: _13.MsgCreateCertificate) => {
                        owner: string;
                        cert: Uint8Array;
                        pubkey: Uint8Array;
                    };
                    fromAmino: ({ owner, cert, pubkey }: {
                        owner: string;
                        cert: Uint8Array;
                        pubkey: Uint8Array;
                    }) => _13.MsgCreateCertificate;
                };
                "/akash.cert.v1beta2.MsgRevokeCertificate": {
                    aminoType: string;
                    toAmino: ({ id }: _13.MsgRevokeCertificate) => {
                        id: {
                            owner: string;
                            serial: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            serial: string;
                        };
                    }) => _13.MsgRevokeCertificate;
                };
            };
            CertificateResponse: {
                encode(message: _15.CertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.CertificateResponse;
                fromPartial(object: Partial<_15.CertificateResponse>): _15.CertificateResponse;
            };
            QueryCertificatesRequest: {
                encode(message: _15.QueryCertificatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryCertificatesRequest;
                fromPartial(object: Partial<_15.QueryCertificatesRequest>): _15.QueryCertificatesRequest;
            };
            QueryCertificatesResponse: {
                encode(message: _15.QueryCertificatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.QueryCertificatesResponse;
                fromPartial(object: Partial<_15.QueryCertificatesResponse>): _15.QueryCertificatesResponse;
            };
            GenesisCertificate: {
                encode(message: _14.GenesisCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.GenesisCertificate;
                fromPartial(object: Partial<_14.GenesisCertificate>): _14.GenesisCertificate;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
            };
            certificate_StateFromJSON(object: any): _13.Certificate_State;
            certificate_StateToJSON(object: _13.Certificate_State): string;
            Certificate_State: typeof _13.Certificate_State;
            Certificate_StateSDKType: typeof _13.Certificate_State;
            CertificateID: {
                encode(message: _13.CertificateID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.CertificateID;
                fromPartial(object: Partial<_13.CertificateID>): _13.CertificateID;
            };
            Certificate: {
                encode(message: _13.Certificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.Certificate;
                fromPartial(object: Partial<_13.Certificate>): _13.Certificate;
            };
            CertificateFilter: {
                encode(message: _13.CertificateFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.CertificateFilter;
                fromPartial(object: Partial<_13.CertificateFilter>): _13.CertificateFilter;
            };
            MsgCreateCertificate: {
                encode(message: _13.MsgCreateCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgCreateCertificate;
                fromPartial(object: Partial<_13.MsgCreateCertificate>): _13.MsgCreateCertificate;
            };
            MsgCreateCertificateResponse: {
                encode(_: _13.MsgCreateCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgCreateCertificateResponse;
                fromPartial(_: Partial<_13.MsgCreateCertificateResponse>): _13.MsgCreateCertificateResponse;
            };
            MsgRevokeCertificate: {
                encode(message: _13.MsgRevokeCertificate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgRevokeCertificate;
                fromPartial(object: Partial<_13.MsgRevokeCertificate>): _13.MsgRevokeCertificate;
            };
            MsgRevokeCertificateResponse: {
                encode(_: _13.MsgRevokeCertificateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgRevokeCertificateResponse;
                fromPartial(_: Partial<_13.MsgRevokeCertificateResponse>): _13.MsgRevokeCertificateResponse;
            };
        };
    }
    namespace deployment {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                deployments(request: _21.QueryDeploymentsRequest): Promise<_21.QueryDeploymentsResponse>;
                deployment(request: _21.QueryDeploymentRequest): Promise<_21.QueryDeploymentResponse>;
                group(request: _21.QueryGroupRequest): Promise<_21.QueryGroupResponse>;
            };
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
                    toAmino: ({ id, groups, version, deposit }: _17.MsgCreateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ id, groups, version, deposit }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _17.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta1.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: ({ id, amount }: _17.MsgDepositDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ id, amount }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _17.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta1.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, groups, version }: _17.MsgUpdateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                    };
                    fromAmino: ({ id, groups, version }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    endpoints: {
                                        kind: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                    }) => _17.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: ({ id }: _17.MsgCloseDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    }) => _17.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta1.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _19.MsgCloseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _19.MsgCloseGroup;
                };
                "/akash.deployment.v1beta1.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _19.MsgPauseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _19.MsgPauseGroup;
                };
                "/akash.deployment.v1beta1.MsgStartGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _19.MsgStartGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _19.MsgStartGroup;
                };
            };
            QueryDeploymentsRequest: {
                encode(message: _21.QueryDeploymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryDeploymentsRequest;
                fromPartial(object: Partial<_21.QueryDeploymentsRequest>): _21.QueryDeploymentsRequest;
            };
            QueryDeploymentsResponse: {
                encode(message: _21.QueryDeploymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryDeploymentsResponse;
                fromPartial(object: Partial<_21.QueryDeploymentsResponse>): _21.QueryDeploymentsResponse;
            };
            QueryDeploymentRequest: {
                encode(message: _21.QueryDeploymentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryDeploymentRequest;
                fromPartial(object: Partial<_21.QueryDeploymentRequest>): _21.QueryDeploymentRequest;
            };
            QueryDeploymentResponse: {
                encode(message: _21.QueryDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryDeploymentResponse;
                fromPartial(object: Partial<_21.QueryDeploymentResponse>): _21.QueryDeploymentResponse;
            };
            QueryGroupRequest: {
                encode(message: _21.QueryGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryGroupRequest;
                fromPartial(object: Partial<_21.QueryGroupRequest>): _21.QueryGroupRequest;
            };
            QueryGroupResponse: {
                encode(message: _21.QueryGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryGroupResponse;
                fromPartial(object: Partial<_21.QueryGroupResponse>): _21.QueryGroupResponse;
            };
            Params: {
                encode(message: _20.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Params;
                fromPartial(object: Partial<_20.Params>): _20.Params;
            };
            group_StateFromJSON(object: any): _19.Group_State;
            group_StateToJSON(object: _19.Group_State): string;
            Group_State: typeof _19.Group_State;
            Group_StateSDKType: typeof _19.Group_State;
            MsgCloseGroup: {
                encode(message: _19.MsgCloseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgCloseGroup;
                fromPartial(object: Partial<_19.MsgCloseGroup>): _19.MsgCloseGroup;
            };
            MsgCloseGroupResponse: {
                encode(_: _19.MsgCloseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgCloseGroupResponse;
                fromPartial(_: Partial<_19.MsgCloseGroupResponse>): _19.MsgCloseGroupResponse;
            };
            MsgPauseGroup: {
                encode(message: _19.MsgPauseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgPauseGroup;
                fromPartial(object: Partial<_19.MsgPauseGroup>): _19.MsgPauseGroup;
            };
            MsgPauseGroupResponse: {
                encode(_: _19.MsgPauseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgPauseGroupResponse;
                fromPartial(_: Partial<_19.MsgPauseGroupResponse>): _19.MsgPauseGroupResponse;
            };
            MsgStartGroup: {
                encode(message: _19.MsgStartGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.MsgStartGroup;
                fromPartial(object: Partial<_19.MsgStartGroup>): _19.MsgStartGroup;
            };
            MsgStartGroupResponse: {
                encode(_: _19.MsgStartGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _19.MsgStartGroupResponse;
                fromPartial(_: Partial<_19.MsgStartGroupResponse>): _19.MsgStartGroupResponse;
            };
            GroupID: {
                encode(message: _19.GroupID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.GroupID;
                fromPartial(object: Partial<_19.GroupID>): _19.GroupID;
            };
            GroupSpec: {
                encode(message: _19.GroupSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.GroupSpec;
                fromPartial(object: Partial<_19.GroupSpec>): _19.GroupSpec;
            };
            Group: {
                encode(message: _19.Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Group;
                fromPartial(object: Partial<_19.Group>): _19.Group;
            };
            Resource: {
                encode(message: _19.Resource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.Resource;
                fromPartial(object: Partial<_19.Resource>): _19.Resource;
            };
            GenesisDeployment: {
                encode(message: _18.GenesisDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.GenesisDeployment;
                fromPartial(object: Partial<_18.GenesisDeployment>): _18.GenesisDeployment;
            };
            GenesisState: {
                encode(message: _18.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.GenesisState;
                fromPartial(object: Partial<_18.GenesisState>): _18.GenesisState;
            };
            deployment_StateFromJSON(object: any): _17.Deployment_State;
            deployment_StateToJSON(object: _17.Deployment_State): string;
            Deployment_State: typeof _17.Deployment_State;
            Deployment_StateSDKType: typeof _17.Deployment_State;
            MsgCreateDeployment: {
                encode(message: _17.MsgCreateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgCreateDeployment;
                fromPartial(object: Partial<_17.MsgCreateDeployment>): _17.MsgCreateDeployment;
            };
            MsgCreateDeploymentResponse: {
                encode(_: _17.MsgCreateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgCreateDeploymentResponse;
                fromPartial(_: Partial<_17.MsgCreateDeploymentResponse>): _17.MsgCreateDeploymentResponse;
            };
            MsgDepositDeployment: {
                encode(message: _17.MsgDepositDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgDepositDeployment;
                fromPartial(object: Partial<_17.MsgDepositDeployment>): _17.MsgDepositDeployment;
            };
            MsgDepositDeploymentResponse: {
                encode(_: _17.MsgDepositDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgDepositDeploymentResponse;
                fromPartial(_: Partial<_17.MsgDepositDeploymentResponse>): _17.MsgDepositDeploymentResponse;
            };
            MsgUpdateDeployment: {
                encode(message: _17.MsgUpdateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgUpdateDeployment;
                fromPartial(object: Partial<_17.MsgUpdateDeployment>): _17.MsgUpdateDeployment;
            };
            MsgUpdateDeploymentResponse: {
                encode(_: _17.MsgUpdateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgUpdateDeploymentResponse;
                fromPartial(_: Partial<_17.MsgUpdateDeploymentResponse>): _17.MsgUpdateDeploymentResponse;
            };
            MsgCloseDeployment: {
                encode(message: _17.MsgCloseDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgCloseDeployment;
                fromPartial(object: Partial<_17.MsgCloseDeployment>): _17.MsgCloseDeployment;
            };
            MsgCloseDeploymentResponse: {
                encode(_: _17.MsgCloseDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgCloseDeploymentResponse;
                fromPartial(_: Partial<_17.MsgCloseDeploymentResponse>): _17.MsgCloseDeploymentResponse;
            };
            DeploymentID: {
                encode(message: _17.DeploymentID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.DeploymentID;
                fromPartial(object: Partial<_17.DeploymentID>): _17.DeploymentID;
            };
            Deployment: {
                encode(message: _17.Deployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.Deployment;
                fromPartial(object: Partial<_17.Deployment>): _17.Deployment;
            };
            DeploymentFilters: {
                encode(message: _17.DeploymentFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.DeploymentFilters;
                fromPartial(object: Partial<_17.DeploymentFilters>): _17.DeploymentFilters;
            };
            DepositDeploymentAuthorization: {
                encode(message: _16.DepositDeploymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.DepositDeploymentAuthorization;
                fromPartial(object: Partial<_16.DepositDeploymentAuthorization>): _16.DepositDeploymentAuthorization;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                deployments(request: _31.QueryDeploymentsRequest): Promise<_31.QueryDeploymentsResponse>;
                deployment(request: _31.QueryDeploymentRequest): Promise<_31.QueryDeploymentResponse>;
                group(request: _31.QueryGroupRequest): Promise<_31.QueryGroupResponse>;
            };
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
                    toAmino: ({ id, groups, version, deposit, depositor }: _24.MsgCreateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        name: string;
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    }[];
                                    endpoints: {
                                        kind: number;
                                        sequence_number: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                        depositor: string;
                    };
                    fromAmino: ({ id, groups, version, deposit, depositor }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        groups: {
                            name: string;
                            requirements: {
                                signed_by: {
                                    all_of: string[];
                                    any_of: string[];
                                };
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                            resources: {
                                resources: {
                                    cpu: {
                                        units: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    memory: {
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    };
                                    storage: {
                                        name: string;
                                        quantity: {
                                            val: Uint8Array;
                                        };
                                        attributes: {
                                            key: string;
                                            value: string;
                                        }[];
                                    }[];
                                    endpoints: {
                                        kind: number;
                                        sequence_number: number;
                                    }[];
                                };
                                count: number;
                                price: {
                                    denom: string;
                                    amount: string;
                                };
                            }[];
                        }[];
                        version: Uint8Array;
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                        depositor: string;
                    }) => _24.MsgCreateDeployment;
                };
                "/akash.deployment.v1beta2.MsgDepositDeployment": {
                    aminoType: string;
                    toAmino: ({ id, amount, depositor }: _24.MsgDepositDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        depositor: string;
                    };
                    fromAmino: ({ id, amount, depositor }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        depositor: string;
                    }) => _24.MsgDepositDeployment;
                };
                "/akash.deployment.v1beta2.MsgUpdateDeployment": {
                    aminoType: string;
                    toAmino: ({ id, version }: _24.MsgUpdateDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        version: Uint8Array;
                    };
                    fromAmino: ({ id, version }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                        version: Uint8Array;
                    }) => _24.MsgUpdateDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseDeployment": {
                    aminoType: string;
                    toAmino: ({ id }: _24.MsgCloseDeployment) => {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                        };
                    }) => _24.MsgCloseDeployment;
                };
                "/akash.deployment.v1beta2.MsgCloseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _28.MsgCloseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _28.MsgCloseGroup;
                };
                "/akash.deployment.v1beta2.MsgPauseGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _28.MsgPauseGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _28.MsgPauseGroup;
                };
                "/akash.deployment.v1beta2.MsgStartGroup": {
                    aminoType: string;
                    toAmino: ({ id }: _28.MsgStartGroup) => {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    };
                    fromAmino: ({ id }: {
                        id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                        };
                    }) => _28.MsgStartGroup;
                };
            };
            Resource: {
                encode(message: _32.Resource, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _32.Resource;
                fromPartial(object: Partial<_32.Resource>): _32.Resource;
            };
            QueryDeploymentsRequest: {
                encode(message: _31.QueryDeploymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.QueryDeploymentsRequest;
                fromPartial(object: Partial<_31.QueryDeploymentsRequest>): _31.QueryDeploymentsRequest;
            };
            QueryDeploymentsResponse: {
                encode(message: _31.QueryDeploymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.QueryDeploymentsResponse;
                fromPartial(object: Partial<_31.QueryDeploymentsResponse>): _31.QueryDeploymentsResponse;
            };
            QueryDeploymentRequest: {
                encode(message: _31.QueryDeploymentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.QueryDeploymentRequest;
                fromPartial(object: Partial<_31.QueryDeploymentRequest>): _31.QueryDeploymentRequest;
            };
            QueryDeploymentResponse: {
                encode(message: _31.QueryDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.QueryDeploymentResponse;
                fromPartial(object: Partial<_31.QueryDeploymentResponse>): _31.QueryDeploymentResponse;
            };
            QueryGroupRequest: {
                encode(message: _31.QueryGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.QueryGroupRequest;
                fromPartial(object: Partial<_31.QueryGroupRequest>): _31.QueryGroupRequest;
            };
            QueryGroupResponse: {
                encode(message: _31.QueryGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _31.QueryGroupResponse;
                fromPartial(object: Partial<_31.QueryGroupResponse>): _31.QueryGroupResponse;
            };
            Params: {
                encode(message: _30.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
            };
            GroupSpec: {
                encode(message: _29.GroupSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _29.GroupSpec;
                fromPartial(object: Partial<_29.GroupSpec>): _29.GroupSpec;
            };
            MsgCloseGroup: {
                encode(message: _28.MsgCloseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgCloseGroup;
                fromPartial(object: Partial<_28.MsgCloseGroup>): _28.MsgCloseGroup;
            };
            MsgCloseGroupResponse: {
                encode(_: _28.MsgCloseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.MsgCloseGroupResponse;
                fromPartial(_: Partial<_28.MsgCloseGroupResponse>): _28.MsgCloseGroupResponse;
            };
            MsgPauseGroup: {
                encode(message: _28.MsgPauseGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgPauseGroup;
                fromPartial(object: Partial<_28.MsgPauseGroup>): _28.MsgPauseGroup;
            };
            MsgPauseGroupResponse: {
                encode(_: _28.MsgPauseGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.MsgPauseGroupResponse;
                fromPartial(_: Partial<_28.MsgPauseGroupResponse>): _28.MsgPauseGroupResponse;
            };
            MsgStartGroup: {
                encode(message: _28.MsgStartGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _28.MsgStartGroup;
                fromPartial(object: Partial<_28.MsgStartGroup>): _28.MsgStartGroup;
            };
            MsgStartGroupResponse: {
                encode(_: _28.MsgStartGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _28.MsgStartGroupResponse;
                fromPartial(_: Partial<_28.MsgStartGroupResponse>): _28.MsgStartGroupResponse;
            };
            GroupID: {
                encode(message: _27.GroupID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _27.GroupID;
                fromPartial(object: Partial<_27.GroupID>): _27.GroupID;
            };
            group_StateFromJSON(object: any): _26.Group_State;
            group_StateToJSON(object: _26.Group_State): string;
            Group_State: typeof _26.Group_State;
            Group_StateSDKType: typeof _26.Group_State;
            Group: {
                encode(message: _26.Group, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _26.Group;
                fromPartial(object: Partial<_26.Group>): _26.Group;
            };
            GenesisDeployment: {
                encode(message: _25.GenesisDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.GenesisDeployment;
                fromPartial(object: Partial<_25.GenesisDeployment>): _25.GenesisDeployment;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
            };
            MsgCreateDeployment: {
                encode(message: _24.MsgCreateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgCreateDeployment;
                fromPartial(object: Partial<_24.MsgCreateDeployment>): _24.MsgCreateDeployment;
            };
            MsgCreateDeploymentResponse: {
                encode(_: _24.MsgCreateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgCreateDeploymentResponse;
                fromPartial(_: Partial<_24.MsgCreateDeploymentResponse>): _24.MsgCreateDeploymentResponse;
            };
            MsgDepositDeployment: {
                encode(message: _24.MsgDepositDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgDepositDeployment;
                fromPartial(object: Partial<_24.MsgDepositDeployment>): _24.MsgDepositDeployment;
            };
            MsgDepositDeploymentResponse: {
                encode(_: _24.MsgDepositDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgDepositDeploymentResponse;
                fromPartial(_: Partial<_24.MsgDepositDeploymentResponse>): _24.MsgDepositDeploymentResponse;
            };
            MsgUpdateDeployment: {
                encode(message: _24.MsgUpdateDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgUpdateDeployment;
                fromPartial(object: Partial<_24.MsgUpdateDeployment>): _24.MsgUpdateDeployment;
            };
            MsgUpdateDeploymentResponse: {
                encode(_: _24.MsgUpdateDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgUpdateDeploymentResponse;
                fromPartial(_: Partial<_24.MsgUpdateDeploymentResponse>): _24.MsgUpdateDeploymentResponse;
            };
            MsgCloseDeployment: {
                encode(message: _24.MsgCloseDeployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _24.MsgCloseDeployment;
                fromPartial(object: Partial<_24.MsgCloseDeployment>): _24.MsgCloseDeployment;
            };
            MsgCloseDeploymentResponse: {
                encode(_: _24.MsgCloseDeploymentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _24.MsgCloseDeploymentResponse;
                fromPartial(_: Partial<_24.MsgCloseDeploymentResponse>): _24.MsgCloseDeploymentResponse;
            };
            deployment_StateFromJSON(object: any): _23.Deployment_State;
            deployment_StateToJSON(object: _23.Deployment_State): string;
            Deployment_State: typeof _23.Deployment_State;
            Deployment_StateSDKType: typeof _23.Deployment_State;
            DeploymentID: {
                encode(message: _23.DeploymentID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.DeploymentID;
                fromPartial(object: Partial<_23.DeploymentID>): _23.DeploymentID;
            };
            Deployment: {
                encode(message: _23.Deployment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.Deployment;
                fromPartial(object: Partial<_23.Deployment>): _23.Deployment;
            };
            DeploymentFilters: {
                encode(message: _23.DeploymentFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _23.DeploymentFilters;
                fromPartial(object: Partial<_23.DeploymentFilters>): _23.DeploymentFilters;
            };
            DepositDeploymentAuthorization: {
                encode(message: _22.DepositDeploymentAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.DepositDeploymentAuthorization;
                fromPartial(object: Partial<_22.DepositDeploymentAuthorization>): _22.DepositDeploymentAuthorization;
            };
        };
    }
    namespace escrow {
        const v1beta1: {
            QueryClientImpl: typeof _173.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request: _35.QueryAccountsRequest): Promise<_35.QueryAccountsResponse>;
                payments(request: _35.QueryPaymentsRequest): Promise<_35.QueryPaymentsResponse>;
            };
            account_StateFromJSON(object: any): _36.Account_State;
            account_StateToJSON(object: _36.Account_State): string;
            payment_StateFromJSON(object: any): _36.Payment_State;
            payment_StateToJSON(object: _36.Payment_State): string;
            Account_State: typeof _36.Account_State;
            Account_StateSDKType: typeof _36.Account_State;
            Payment_State: typeof _36.Payment_State;
            Payment_StateSDKType: typeof _36.Payment_State;
            AccountID: {
                encode(message: _36.AccountID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.AccountID;
                fromPartial(object: Partial<_36.AccountID>): _36.AccountID;
            };
            Account: {
                encode(message: _36.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Account;
                fromPartial(object: Partial<_36.Account>): _36.Account;
            };
            Payment: {
                encode(message: _36.Payment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _36.Payment;
                fromPartial(object: Partial<_36.Payment>): _36.Payment;
            };
            QueryAccountsRequest: {
                encode(message: _35.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryAccountsRequest;
                fromPartial(object: Partial<_35.QueryAccountsRequest>): _35.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _35.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryAccountsResponse;
                fromPartial(object: Partial<_35.QueryAccountsResponse>): _35.QueryAccountsResponse;
            };
            QueryPaymentsRequest: {
                encode(message: _35.QueryPaymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryPaymentsRequest;
                fromPartial(object: Partial<_35.QueryPaymentsRequest>): _35.QueryPaymentsRequest;
            };
            QueryPaymentsResponse: {
                encode(message: _35.QueryPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _35.QueryPaymentsResponse;
                fromPartial(object: Partial<_35.QueryPaymentsResponse>): _35.QueryPaymentsResponse;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
        };
        const v1beta2: {
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request: _38.QueryAccountsRequest): Promise<_38.QueryAccountsResponse>;
                payments(request: _38.QueryPaymentsRequest): Promise<_38.QueryPaymentsResponse>;
            };
            account_StateFromJSON(object: any): _39.Account_State;
            account_StateToJSON(object: _39.Account_State): string;
            fractionalPayment_StateFromJSON(object: any): _39.FractionalPayment_State;
            fractionalPayment_StateToJSON(object: _39.FractionalPayment_State): string;
            Account_State: typeof _39.Account_State;
            Account_StateSDKType: typeof _39.Account_State;
            FractionalPayment_State: typeof _39.FractionalPayment_State;
            FractionalPayment_StateSDKType: typeof _39.FractionalPayment_State;
            AccountID: {
                encode(message: _39.AccountID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.AccountID;
                fromPartial(object: Partial<_39.AccountID>): _39.AccountID;
            };
            Account: {
                encode(message: _39.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.Account;
                fromPartial(object: Partial<_39.Account>): _39.Account;
            };
            FractionalPayment: {
                encode(message: _39.FractionalPayment, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _39.FractionalPayment;
                fromPartial(object: Partial<_39.FractionalPayment>): _39.FractionalPayment;
            };
            QueryAccountsRequest: {
                encode(message: _38.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryAccountsRequest;
                fromPartial(object: Partial<_38.QueryAccountsRequest>): _38.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _38.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryAccountsResponse;
                fromPartial(object: Partial<_38.QueryAccountsResponse>): _38.QueryAccountsResponse;
            };
            QueryPaymentsRequest: {
                encode(message: _38.QueryPaymentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryPaymentsRequest;
                fromPartial(object: Partial<_38.QueryPaymentsRequest>): _38.QueryPaymentsRequest;
            };
            QueryPaymentsResponse: {
                encode(message: _38.QueryPaymentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _38.QueryPaymentsResponse;
                fromPartial(object: Partial<_38.QueryPaymentsResponse>): _38.QueryPaymentsResponse;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _37.GenesisState;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
            };
        };
    }
    namespace inflation {
        const v1beta2: {
            Params: {
                encode(message: _41.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _41.Params;
                fromPartial(object: Partial<_41.Params>): _41.Params;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _40.GenesisState;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
            };
        };
    }
    namespace market {
        const v1beta2: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                orders(request: _47.QueryOrdersRequest): Promise<_47.QueryOrdersResponse>;
                order(request: _47.QueryOrderRequest): Promise<_47.QueryOrderResponse>;
                bids(request: _47.QueryBidsRequest): Promise<_47.QueryBidsResponse>;
                bid(request: _47.QueryBidRequest): Promise<_47.QueryBidResponse>;
                leases(request: _47.QueryLeasesRequest): Promise<_47.QueryLeasesResponse>;
                lease(request: _47.QueryLeaseRequest): Promise<_47.QueryLeaseResponse>;
            };
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
                    toAmino: ({ order, provider, price, deposit }: _42.MsgCreateBid) => {
                        order: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                        };
                        provider: string;
                        price: {
                            denom: string;
                            amount: string;
                        };
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ order, provider, price, deposit }: {
                        order: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                        };
                        provider: string;
                        price: {
                            denom: string;
                            amount: string;
                        };
                        deposit: {
                            denom: string;
                            amount: string;
                        };
                    }) => _42.MsgCreateBid;
                };
                "/akash.market.v1beta2.MsgCloseBid": {
                    aminoType: string;
                    toAmino: ({ bidId }: _42.MsgCloseBid) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _42.MsgCloseBid;
                };
                "/akash.market.v1beta2.MsgWithdrawLease": {
                    aminoType: string;
                    toAmino: ({ bidId }: _44.MsgWithdrawLease) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _44.MsgWithdrawLease;
                };
                "/akash.market.v1beta2.MsgCreateLease": {
                    aminoType: string;
                    toAmino: ({ bidId }: _44.MsgCreateLease) => {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ bid_id }: {
                        bid_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _44.MsgCreateLease;
                };
                "/akash.market.v1beta2.MsgCloseLease": {
                    aminoType: string;
                    toAmino: ({ leaseId }: _44.MsgCloseLease) => {
                        lease_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    };
                    fromAmino: ({ lease_id }: {
                        lease_id: {
                            owner: string;
                            dseq: string;
                            gseq: number;
                            oseq: number;
                            provider: string;
                        };
                    }) => _44.MsgCloseLease;
                };
            };
            QueryOrdersRequest: {
                encode(message: _47.QueryOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryOrdersRequest;
                fromPartial(object: Partial<_47.QueryOrdersRequest>): _47.QueryOrdersRequest;
            };
            QueryOrdersResponse: {
                encode(message: _47.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryOrdersResponse;
                fromPartial(object: Partial<_47.QueryOrdersResponse>): _47.QueryOrdersResponse;
            };
            QueryOrderRequest: {
                encode(message: _47.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryOrderRequest;
                fromPartial(object: Partial<_47.QueryOrderRequest>): _47.QueryOrderRequest;
            };
            QueryOrderResponse: {
                encode(message: _47.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryOrderResponse;
                fromPartial(object: Partial<_47.QueryOrderResponse>): _47.QueryOrderResponse;
            };
            QueryBidsRequest: {
                encode(message: _47.QueryBidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryBidsRequest;
                fromPartial(object: Partial<_47.QueryBidsRequest>): _47.QueryBidsRequest;
            };
            QueryBidsResponse: {
                encode(message: _47.QueryBidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryBidsResponse;
                fromPartial(object: Partial<_47.QueryBidsResponse>): _47.QueryBidsResponse;
            };
            QueryBidRequest: {
                encode(message: _47.QueryBidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryBidRequest;
                fromPartial(object: Partial<_47.QueryBidRequest>): _47.QueryBidRequest;
            };
            QueryBidResponse: {
                encode(message: _47.QueryBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryBidResponse;
                fromPartial(object: Partial<_47.QueryBidResponse>): _47.QueryBidResponse;
            };
            QueryLeasesRequest: {
                encode(message: _47.QueryLeasesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryLeasesRequest;
                fromPartial(object: Partial<_47.QueryLeasesRequest>): _47.QueryLeasesRequest;
            };
            QueryLeasesResponse: {
                encode(message: _47.QueryLeasesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryLeasesResponse;
                fromPartial(object: Partial<_47.QueryLeasesResponse>): _47.QueryLeasesResponse;
            };
            QueryLeaseRequest: {
                encode(message: _47.QueryLeaseRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryLeaseRequest;
                fromPartial(object: Partial<_47.QueryLeaseRequest>): _47.QueryLeaseRequest;
            };
            QueryLeaseResponse: {
                encode(message: _47.QueryLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _47.QueryLeaseResponse;
                fromPartial(object: Partial<_47.QueryLeaseResponse>): _47.QueryLeaseResponse;
            };
            Params: {
                encode(message: _46.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
            };
            order_StateFromJSON(object: any): _45.Order_State;
            order_StateToJSON(object: _45.Order_State): string;
            Order_State: typeof _45.Order_State;
            Order_StateSDKType: typeof _45.Order_State;
            OrderID: {
                encode(message: _45.OrderID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.OrderID;
                fromPartial(object: Partial<_45.OrderID>): _45.OrderID;
            };
            Order: {
                encode(message: _45.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.Order;
                fromPartial(object: Partial<_45.Order>): _45.Order;
            };
            OrderFilters: {
                encode(message: _45.OrderFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _45.OrderFilters;
                fromPartial(object: Partial<_45.OrderFilters>): _45.OrderFilters;
            };
            lease_StateFromJSON(object: any): _44.Lease_State;
            lease_StateToJSON(object: _44.Lease_State): string;
            Lease_State: typeof _44.Lease_State;
            Lease_StateSDKType: typeof _44.Lease_State;
            LeaseID: {
                encode(message: _44.LeaseID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.LeaseID;
                fromPartial(object: Partial<_44.LeaseID>): _44.LeaseID;
            };
            Lease: {
                encode(message: _44.Lease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.Lease;
                fromPartial(object: Partial<_44.Lease>): _44.Lease;
            };
            LeaseFilters: {
                encode(message: _44.LeaseFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.LeaseFilters;
                fromPartial(object: Partial<_44.LeaseFilters>): _44.LeaseFilters;
            };
            MsgCreateLease: {
                encode(message: _44.MsgCreateLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgCreateLease;
                fromPartial(object: Partial<_44.MsgCreateLease>): _44.MsgCreateLease;
            };
            MsgCreateLeaseResponse: {
                encode(_: _44.MsgCreateLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgCreateLeaseResponse;
                fromPartial(_: Partial<_44.MsgCreateLeaseResponse>): _44.MsgCreateLeaseResponse;
            };
            MsgWithdrawLease: {
                encode(message: _44.MsgWithdrawLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgWithdrawLease;
                fromPartial(object: Partial<_44.MsgWithdrawLease>): _44.MsgWithdrawLease;
            };
            MsgWithdrawLeaseResponse: {
                encode(_: _44.MsgWithdrawLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgWithdrawLeaseResponse;
                fromPartial(_: Partial<_44.MsgWithdrawLeaseResponse>): _44.MsgWithdrawLeaseResponse;
            };
            MsgCloseLease: {
                encode(message: _44.MsgCloseLease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _44.MsgCloseLease;
                fromPartial(object: Partial<_44.MsgCloseLease>): _44.MsgCloseLease;
            };
            MsgCloseLeaseResponse: {
                encode(_: _44.MsgCloseLeaseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _44.MsgCloseLeaseResponse;
                fromPartial(_: Partial<_44.MsgCloseLeaseResponse>): _44.MsgCloseLeaseResponse;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            };
            bid_StateFromJSON(object: any): _42.Bid_State;
            bid_StateToJSON(object: _42.Bid_State): string;
            Bid_State: typeof _42.Bid_State;
            Bid_StateSDKType: typeof _42.Bid_State;
            MsgCreateBid: {
                encode(message: _42.MsgCreateBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgCreateBid;
                fromPartial(object: Partial<_42.MsgCreateBid>): _42.MsgCreateBid;
            };
            MsgCreateBidResponse: {
                encode(_: _42.MsgCreateBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgCreateBidResponse;
                fromPartial(_: Partial<_42.MsgCreateBidResponse>): _42.MsgCreateBidResponse;
            };
            MsgCloseBid: {
                encode(message: _42.MsgCloseBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.MsgCloseBid;
                fromPartial(object: Partial<_42.MsgCloseBid>): _42.MsgCloseBid;
            };
            MsgCloseBidResponse: {
                encode(_: _42.MsgCloseBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _42.MsgCloseBidResponse;
                fromPartial(_: Partial<_42.MsgCloseBidResponse>): _42.MsgCloseBidResponse;
            };
            BidID: {
                encode(message: _42.BidID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.BidID;
                fromPartial(object: Partial<_42.BidID>): _42.BidID;
            };
            Bid: {
                encode(message: _42.Bid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.Bid;
                fromPartial(object: Partial<_42.Bid>): _42.Bid;
            };
            BidFilters: {
                encode(message: _42.BidFilters, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _42.BidFilters;
                fromPartial(object: Partial<_42.BidFilters>): _42.BidFilters;
            };
        };
    }
    namespace provider {
        const v1beta1: {
            MsgClientImpl: typeof _183.MsgClientImpl;
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
                    toAmino: ({ owner, hostUri, attributes, info }: _49.MsgCreateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _49.MsgCreateProvider;
                };
                "/akash.provider.v1beta1.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _49.MsgUpdateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _49.MsgUpdateProvider;
                };
                "/akash.provider.v1beta1.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: ({ owner }: _49.MsgDeleteProvider) => {
                        owner: string;
                    };
                    fromAmino: ({ owner }: {
                        owner: string;
                    }) => _49.MsgDeleteProvider;
                };
            };
            ProviderInfo: {
                encode(message: _49.ProviderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.ProviderInfo;
                fromPartial(object: Partial<_49.ProviderInfo>): _49.ProviderInfo;
            };
            MsgCreateProvider: {
                encode(message: _49.MsgCreateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgCreateProvider;
                fromPartial(object: Partial<_49.MsgCreateProvider>): _49.MsgCreateProvider;
            };
            MsgCreateProviderResponse: {
                encode(_: _49.MsgCreateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgCreateProviderResponse;
                fromPartial(_: Partial<_49.MsgCreateProviderResponse>): _49.MsgCreateProviderResponse;
            };
            MsgUpdateProvider: {
                encode(message: _49.MsgUpdateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgUpdateProvider;
                fromPartial(object: Partial<_49.MsgUpdateProvider>): _49.MsgUpdateProvider;
            };
            MsgUpdateProviderResponse: {
                encode(_: _49.MsgUpdateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgUpdateProviderResponse;
                fromPartial(_: Partial<_49.MsgUpdateProviderResponse>): _49.MsgUpdateProviderResponse;
            };
            MsgDeleteProvider: {
                encode(message: _49.MsgDeleteProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.MsgDeleteProvider;
                fromPartial(object: Partial<_49.MsgDeleteProvider>): _49.MsgDeleteProvider;
            };
            MsgDeleteProviderResponse: {
                encode(_: _49.MsgDeleteProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _49.MsgDeleteProviderResponse;
                fromPartial(_: Partial<_49.MsgDeleteProviderResponse>): _49.MsgDeleteProviderResponse;
            };
            Provider: {
                encode(message: _49.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _49.Provider;
                fromPartial(object: Partial<_49.Provider>): _49.Provider;
            };
        };
        const v1beta2: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                providers(request?: _52.QueryProvidersRequest): Promise<_52.QueryProvidersResponse>;
                provider(request: _52.QueryProviderRequest): Promise<_52.QueryProviderResponse>;
            };
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
                    toAmino: ({ owner, hostUri, attributes, info }: _51.MsgCreateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _51.MsgCreateProvider;
                };
                "/akash.provider.v1beta2.MsgUpdateProvider": {
                    aminoType: string;
                    toAmino: ({ owner, hostUri, attributes, info }: _51.MsgUpdateProvider) => {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    };
                    fromAmino: ({ owner, host_uri, attributes, info }: {
                        owner: string;
                        host_uri: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                        info: {
                            email: string;
                            website: string;
                        };
                    }) => _51.MsgUpdateProvider;
                };
                "/akash.provider.v1beta2.MsgDeleteProvider": {
                    aminoType: string;
                    toAmino: ({ owner }: _51.MsgDeleteProvider) => {
                        owner: string;
                    };
                    fromAmino: ({ owner }: {
                        owner: string;
                    }) => _51.MsgDeleteProvider;
                };
            };
            QueryProvidersRequest: {
                encode(message: _52.QueryProvidersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryProvidersRequest;
                fromPartial(object: Partial<_52.QueryProvidersRequest>): _52.QueryProvidersRequest;
            };
            QueryProvidersResponse: {
                encode(message: _52.QueryProvidersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryProvidersResponse;
                fromPartial(object: Partial<_52.QueryProvidersResponse>): _52.QueryProvidersResponse;
            };
            QueryProviderRequest: {
                encode(message: _52.QueryProviderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryProviderRequest;
                fromPartial(object: Partial<_52.QueryProviderRequest>): _52.QueryProviderRequest;
            };
            QueryProviderResponse: {
                encode(message: _52.QueryProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _52.QueryProviderResponse;
                fromPartial(object: Partial<_52.QueryProviderResponse>): _52.QueryProviderResponse;
            };
            ProviderInfo: {
                encode(message: _51.ProviderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.ProviderInfo;
                fromPartial(object: Partial<_51.ProviderInfo>): _51.ProviderInfo;
            };
            MsgCreateProvider: {
                encode(message: _51.MsgCreateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.MsgCreateProvider;
                fromPartial(object: Partial<_51.MsgCreateProvider>): _51.MsgCreateProvider;
            };
            MsgCreateProviderResponse: {
                encode(_: _51.MsgCreateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _51.MsgCreateProviderResponse;
                fromPartial(_: Partial<_51.MsgCreateProviderResponse>): _51.MsgCreateProviderResponse;
            };
            MsgUpdateProvider: {
                encode(message: _51.MsgUpdateProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.MsgUpdateProvider;
                fromPartial(object: Partial<_51.MsgUpdateProvider>): _51.MsgUpdateProvider;
            };
            MsgUpdateProviderResponse: {
                encode(_: _51.MsgUpdateProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _51.MsgUpdateProviderResponse;
                fromPartial(_: Partial<_51.MsgUpdateProviderResponse>): _51.MsgUpdateProviderResponse;
            };
            MsgDeleteProvider: {
                encode(message: _51.MsgDeleteProvider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.MsgDeleteProvider;
                fromPartial(object: Partial<_51.MsgDeleteProvider>): _51.MsgDeleteProvider;
            };
            MsgDeleteProviderResponse: {
                encode(_: _51.MsgDeleteProviderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _51.MsgDeleteProviderResponse;
                fromPartial(_: Partial<_51.MsgDeleteProviderResponse>): _51.MsgDeleteProviderResponse;
            };
            Provider: {
                encode(message: _51.Provider, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _51.Provider;
                fromPartial(object: Partial<_51.Provider>): _51.Provider;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _50.GenesisState;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            akash: {
                audit: {
                    v1beta1: _177.MsgClientImpl;
                    v1beta2: _178.MsgClientImpl;
                };
                cert: {
                    v1beta2: _179.MsgClientImpl;
                };
                deployment: {
                    v1beta1: _180.MsgClientImpl;
                    v1beta2: _181.MsgClientImpl;
                };
                market: {
                    v1beta2: _182.MsgClientImpl;
                };
                provider: {
                    v1beta1: _183.MsgClientImpl;
                    v1beta2: _184.MsgClientImpl;
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
    };
}
