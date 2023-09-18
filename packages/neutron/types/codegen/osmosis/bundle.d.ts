import * as _25 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _26 from "./tokenfactory/v1beta1/genesis";
import * as _27 from "./tokenfactory/v1beta1/params";
import * as _28 from "./tokenfactory/v1beta1/query";
import * as _29 from "./tokenfactory/v1beta1/tx";
import * as _194 from "./tokenfactory/v1beta1/query.lcd";
import * as _195 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _196 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _196.MsgClientImpl;
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                denomAuthorityMetadata(request: _28.QueryDenomAuthorityMetadataRequest): Promise<_28.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _28.QueryDenomsFromCreatorRequest): Promise<_28.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _29.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _29.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _29.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _29.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _29.MsgCreateDenom): {
                        typeUrl: string;
                        value: _29.MsgCreateDenom;
                    };
                    mint(value: _29.MsgMint): {
                        typeUrl: string;
                        value: _29.MsgMint;
                    };
                    burn(value: _29.MsgBurn): {
                        typeUrl: string;
                        value: _29.MsgBurn;
                    };
                    changeAdmin(value: _29.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _29.MsgChangeAdmin;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _29.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _29.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _29.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _29.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _29.MsgCreateDenom): {
                        typeUrl: string;
                        value: _29.MsgCreateDenom;
                    };
                    mint(value: _29.MsgMint): {
                        typeUrl: string;
                        value: _29.MsgMint;
                    };
                    burn(value: _29.MsgBurn): {
                        typeUrl: string;
                        value: _29.MsgBurn;
                    };
                    changeAdmin(value: _29.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _29.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _29.MsgCreateDenom) => _29.MsgCreateDenomAmino;
                    fromAmino: (object: _29.MsgCreateDenomAmino) => _29.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _29.MsgMint) => _29.MsgMintAmino;
                    fromAmino: (object: _29.MsgMintAmino) => _29.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _29.MsgBurn) => _29.MsgBurnAmino;
                    fromAmino: (object: _29.MsgBurnAmino) => _29.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _29.MsgChangeAdmin) => _29.MsgChangeAdminAmino;
                    fromAmino: (object: _29.MsgChangeAdminAmino) => _29.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _29.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgCreateDenom;
                fromPartial(object: Partial<_29.MsgCreateDenom>): _29.MsgCreateDenom;
                fromAmino(object: _29.MsgCreateDenomAmino): _29.MsgCreateDenom;
                toAmino(message: _29.MsgCreateDenom): _29.MsgCreateDenomAmino;
                fromAminoMsg(object: _29.MsgCreateDenomAminoMsg): _29.MsgCreateDenom;
                toAminoMsg(message: _29.MsgCreateDenom): _29.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _29.MsgCreateDenomProtoMsg): _29.MsgCreateDenom;
                toProto(message: _29.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _29.MsgCreateDenom): _29.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _29.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgCreateDenomResponse;
                fromPartial(object: Partial<_29.MsgCreateDenomResponse>): _29.MsgCreateDenomResponse;
                fromAmino(object: _29.MsgCreateDenomResponseAmino): _29.MsgCreateDenomResponse;
                toAmino(message: _29.MsgCreateDenomResponse): _29.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _29.MsgCreateDenomResponseAminoMsg): _29.MsgCreateDenomResponse;
                toAminoMsg(message: _29.MsgCreateDenomResponse): _29.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _29.MsgCreateDenomResponseProtoMsg): _29.MsgCreateDenomResponse;
                toProto(message: _29.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _29.MsgCreateDenomResponse): _29.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _29.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgMint;
                fromPartial(object: Partial<_29.MsgMint>): _29.MsgMint;
                fromAmino(object: _29.MsgMintAmino): _29.MsgMint;
                toAmino(message: _29.MsgMint): _29.MsgMintAmino;
                fromAminoMsg(object: _29.MsgMintAminoMsg): _29.MsgMint;
                toAminoMsg(message: _29.MsgMint): _29.MsgMintAminoMsg;
                fromProtoMsg(message: _29.MsgMintProtoMsg): _29.MsgMint;
                toProto(message: _29.MsgMint): Uint8Array;
                toProtoMsg(message: _29.MsgMint): _29.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _29.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgMintResponse;
                fromPartial(_: Partial<_29.MsgMintResponse>): _29.MsgMintResponse;
                fromAmino(_: _29.MsgMintResponseAmino): _29.MsgMintResponse;
                toAmino(_: _29.MsgMintResponse): _29.MsgMintResponseAmino;
                fromAminoMsg(object: _29.MsgMintResponseAminoMsg): _29.MsgMintResponse;
                toAminoMsg(message: _29.MsgMintResponse): _29.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _29.MsgMintResponseProtoMsg): _29.MsgMintResponse;
                toProto(message: _29.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _29.MsgMintResponse): _29.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _29.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgBurn;
                fromPartial(object: Partial<_29.MsgBurn>): _29.MsgBurn;
                fromAmino(object: _29.MsgBurnAmino): _29.MsgBurn;
                toAmino(message: _29.MsgBurn): _29.MsgBurnAmino;
                fromAminoMsg(object: _29.MsgBurnAminoMsg): _29.MsgBurn;
                toAminoMsg(message: _29.MsgBurn): _29.MsgBurnAminoMsg;
                fromProtoMsg(message: _29.MsgBurnProtoMsg): _29.MsgBurn;
                toProto(message: _29.MsgBurn): Uint8Array;
                toProtoMsg(message: _29.MsgBurn): _29.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _29.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgBurnResponse;
                fromPartial(_: Partial<_29.MsgBurnResponse>): _29.MsgBurnResponse;
                fromAmino(_: _29.MsgBurnResponseAmino): _29.MsgBurnResponse;
                toAmino(_: _29.MsgBurnResponse): _29.MsgBurnResponseAmino;
                fromAminoMsg(object: _29.MsgBurnResponseAminoMsg): _29.MsgBurnResponse;
                toAminoMsg(message: _29.MsgBurnResponse): _29.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _29.MsgBurnResponseProtoMsg): _29.MsgBurnResponse;
                toProto(message: _29.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _29.MsgBurnResponse): _29.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _29.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgChangeAdmin;
                fromPartial(object: Partial<_29.MsgChangeAdmin>): _29.MsgChangeAdmin;
                fromAmino(object: _29.MsgChangeAdminAmino): _29.MsgChangeAdmin;
                toAmino(message: _29.MsgChangeAdmin): _29.MsgChangeAdminAmino;
                fromAminoMsg(object: _29.MsgChangeAdminAminoMsg): _29.MsgChangeAdmin;
                toAminoMsg(message: _29.MsgChangeAdmin): _29.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _29.MsgChangeAdminProtoMsg): _29.MsgChangeAdmin;
                toProto(message: _29.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _29.MsgChangeAdmin): _29.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _29.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgChangeAdminResponse;
                fromPartial(_: Partial<_29.MsgChangeAdminResponse>): _29.MsgChangeAdminResponse;
                fromAmino(_: _29.MsgChangeAdminResponseAmino): _29.MsgChangeAdminResponse;
                toAmino(_: _29.MsgChangeAdminResponse): _29.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _29.MsgChangeAdminResponseAminoMsg): _29.MsgChangeAdminResponse;
                toAminoMsg(message: _29.MsgChangeAdminResponse): _29.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _29.MsgChangeAdminResponseProtoMsg): _29.MsgChangeAdminResponse;
                toProto(message: _29.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _29.MsgChangeAdminResponse): _29.MsgChangeAdminResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _28.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.QueryParamsRequest;
                fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
                fromAmino(_: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(_: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                toAminoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _28.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                toAminoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _28.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_28.QueryDenomAuthorityMetadataRequest>): _28.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _28.QueryDenomAuthorityMetadataRequestAmino): _28.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _28.QueryDenomAuthorityMetadataRequest): _28.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _28.QueryDenomAuthorityMetadataRequestAminoMsg): _28.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _28.QueryDenomAuthorityMetadataRequest): _28.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDenomAuthorityMetadataRequestProtoMsg): _28.QueryDenomAuthorityMetadataRequest;
                toProto(message: _28.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDenomAuthorityMetadataRequest): _28.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _28.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_28.QueryDenomAuthorityMetadataResponse>): _28.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _28.QueryDenomAuthorityMetadataResponseAmino): _28.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _28.QueryDenomAuthorityMetadataResponse): _28.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _28.QueryDenomAuthorityMetadataResponseAminoMsg): _28.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _28.QueryDenomAuthorityMetadataResponse): _28.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDenomAuthorityMetadataResponseProtoMsg): _28.QueryDenomAuthorityMetadataResponse;
                toProto(message: _28.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDenomAuthorityMetadataResponse): _28.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _28.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_28.QueryDenomsFromCreatorRequest>): _28.QueryDenomsFromCreatorRequest;
                fromAmino(object: _28.QueryDenomsFromCreatorRequestAmino): _28.QueryDenomsFromCreatorRequest;
                toAmino(message: _28.QueryDenomsFromCreatorRequest): _28.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _28.QueryDenomsFromCreatorRequestAminoMsg): _28.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _28.QueryDenomsFromCreatorRequest): _28.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDenomsFromCreatorRequestProtoMsg): _28.QueryDenomsFromCreatorRequest;
                toProto(message: _28.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDenomsFromCreatorRequest): _28.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _28.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_28.QueryDenomsFromCreatorResponse>): _28.QueryDenomsFromCreatorResponse;
                fromAmino(object: _28.QueryDenomsFromCreatorResponseAmino): _28.QueryDenomsFromCreatorResponse;
                toAmino(message: _28.QueryDenomsFromCreatorResponse): _28.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _28.QueryDenomsFromCreatorResponseAminoMsg): _28.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _28.QueryDenomsFromCreatorResponse): _28.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDenomsFromCreatorResponseProtoMsg): _28.QueryDenomsFromCreatorResponse;
                toProto(message: _28.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDenomsFromCreatorResponse): _28.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _27.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Params;
                fromPartial(object: Partial<_27.Params>): _27.Params;
                fromAmino(object: _27.ParamsAmino): _27.Params;
                toAmino(message: _27.Params): _27.ParamsAmino;
                fromAminoMsg(object: _27.ParamsAminoMsg): _27.Params;
                toAminoMsg(message: _27.Params): _27.ParamsAminoMsg;
                fromProtoMsg(message: _27.ParamsProtoMsg): _27.Params;
                toProto(message: _27.Params): Uint8Array;
                toProtoMsg(message: _27.Params): _27.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _26.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
                fromAmino(object: _26.GenesisStateAmino): _26.GenesisState;
                toAmino(message: _26.GenesisState): _26.GenesisStateAmino;
                fromAminoMsg(object: _26.GenesisStateAminoMsg): _26.GenesisState;
                toAminoMsg(message: _26.GenesisState): _26.GenesisStateAminoMsg;
                fromProtoMsg(message: _26.GenesisStateProtoMsg): _26.GenesisState;
                toProto(message: _26.GenesisState): Uint8Array;
                toProtoMsg(message: _26.GenesisState): _26.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _26.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.GenesisDenom;
                fromPartial(object: Partial<_26.GenesisDenom>): _26.GenesisDenom;
                fromAmino(object: _26.GenesisDenomAmino): _26.GenesisDenom;
                toAmino(message: _26.GenesisDenom): _26.GenesisDenomAmino;
                fromAminoMsg(object: _26.GenesisDenomAminoMsg): _26.GenesisDenom;
                toAminoMsg(message: _26.GenesisDenom): _26.GenesisDenomAminoMsg;
                fromProtoMsg(message: _26.GenesisDenomProtoMsg): _26.GenesisDenom;
                toProto(message: _26.GenesisDenom): Uint8Array;
                toProtoMsg(message: _26.GenesisDenom): _26.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _25.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.DenomAuthorityMetadata;
                fromPartial(object: Partial<_25.DenomAuthorityMetadata>): _25.DenomAuthorityMetadata;
                fromAmino(object: _25.DenomAuthorityMetadataAmino): _25.DenomAuthorityMetadata;
                toAmino(message: _25.DenomAuthorityMetadata): _25.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _25.DenomAuthorityMetadataAminoMsg): _25.DenomAuthorityMetadata;
                toAminoMsg(message: _25.DenomAuthorityMetadata): _25.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _25.DenomAuthorityMetadataProtoMsg): _25.DenomAuthorityMetadata;
                toProto(message: _25.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _25.DenomAuthorityMetadata): _25.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            osmosis: {
                tokenfactory: {
                    v1beta1: _196.MsgClientImpl;
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
            osmosis: {
                tokenfactory: {
                    v1beta1: {
                        params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _28.QueryDenomAuthorityMetadataRequest): Promise<_28.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _28.QueryDenomsFromCreatorRequest): Promise<_28.QueryDenomsFromCreatorResponse>;
                    };
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
            osmosis: {
                tokenfactory: {
                    v1beta1: _194.LCDQueryClient;
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
