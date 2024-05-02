import * as _0 from "./tokenfactory/v1beta1/genesis";
import * as _1 from "./tokenfactory/v1beta1/query";
import * as _2 from "./tokenfactory/v1beta1/tokenfactory";
import * as _3 from "./tokenfactory/v1beta1/tx";
import * as _176 from "./tokenfactory/v1beta1/query.lcd";
import * as _177 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _178 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _178.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _1.QueryParamsRequest): Promise<_1.QueryParamsResponse>;
                denomAuthorityMetadata(request: _1.QueryDenomAuthorityMetadataRequest): Promise<_1.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _1.QueryDenomsFromCreatorRequest): Promise<_1.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _3.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _3.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _3.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _3.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _3.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _3.MsgCreateDenom): {
                        typeUrl: string;
                        value: _3.MsgCreateDenom;
                    };
                    mint(value: _3.MsgMint): {
                        typeUrl: string;
                        value: _3.MsgMint;
                    };
                    burn(value: _3.MsgBurn): {
                        typeUrl: string;
                        value: _3.MsgBurn;
                    };
                    changeAdmin(value: _3.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _3.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _3.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _3.MsgSetDenomMetadata;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _3.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _3.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _3.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _3.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _3.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _3.MsgCreateDenom): {
                        typeUrl: string;
                        value: _3.MsgCreateDenom;
                    };
                    mint(value: _3.MsgMint): {
                        typeUrl: string;
                        value: _3.MsgMint;
                    };
                    burn(value: _3.MsgBurn): {
                        typeUrl: string;
                        value: _3.MsgBurn;
                    };
                    changeAdmin(value: _3.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _3.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _3.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _3.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _3.MsgCreateDenom) => _3.MsgCreateDenomAmino;
                    fromAmino: (object: _3.MsgCreateDenomAmino) => _3.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _3.MsgMint) => _3.MsgMintAmino;
                    fromAmino: (object: _3.MsgMintAmino) => _3.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _3.MsgBurn) => _3.MsgBurnAmino;
                    fromAmino: (object: _3.MsgBurnAmino) => _3.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _3.MsgChangeAdmin) => _3.MsgChangeAdminAmino;
                    fromAmino: (object: _3.MsgChangeAdminAmino) => _3.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _3.MsgSetDenomMetadata) => _3.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _3.MsgSetDenomMetadataAmino) => _3.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _3.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgCreateDenom;
                fromPartial(object: Partial<_3.MsgCreateDenom>): _3.MsgCreateDenom;
                fromAmino(object: _3.MsgCreateDenomAmino): _3.MsgCreateDenom;
                toAmino(message: _3.MsgCreateDenom): _3.MsgCreateDenomAmino;
                fromAminoMsg(object: _3.MsgCreateDenomAminoMsg): _3.MsgCreateDenom;
                toAminoMsg(message: _3.MsgCreateDenom): _3.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _3.MsgCreateDenomProtoMsg): _3.MsgCreateDenom;
                toProto(message: _3.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _3.MsgCreateDenom): _3.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _3.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgCreateDenomResponse;
                fromPartial(object: Partial<_3.MsgCreateDenomResponse>): _3.MsgCreateDenomResponse;
                fromAmino(object: _3.MsgCreateDenomResponseAmino): _3.MsgCreateDenomResponse;
                toAmino(message: _3.MsgCreateDenomResponse): _3.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _3.MsgCreateDenomResponseAminoMsg): _3.MsgCreateDenomResponse;
                toAminoMsg(message: _3.MsgCreateDenomResponse): _3.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _3.MsgCreateDenomResponseProtoMsg): _3.MsgCreateDenomResponse;
                toProto(message: _3.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _3.MsgCreateDenomResponse): _3.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _3.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgMint;
                fromPartial(object: Partial<_3.MsgMint>): _3.MsgMint;
                fromAmino(object: _3.MsgMintAmino): _3.MsgMint;
                toAmino(message: _3.MsgMint): _3.MsgMintAmino;
                fromAminoMsg(object: _3.MsgMintAminoMsg): _3.MsgMint;
                toAminoMsg(message: _3.MsgMint): _3.MsgMintAminoMsg;
                fromProtoMsg(message: _3.MsgMintProtoMsg): _3.MsgMint;
                toProto(message: _3.MsgMint): Uint8Array;
                toProtoMsg(message: _3.MsgMint): _3.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _3.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgMintResponse;
                fromPartial(_: Partial<_3.MsgMintResponse>): _3.MsgMintResponse;
                fromAmino(_: _3.MsgMintResponseAmino): _3.MsgMintResponse;
                toAmino(_: _3.MsgMintResponse): _3.MsgMintResponseAmino;
                fromAminoMsg(object: _3.MsgMintResponseAminoMsg): _3.MsgMintResponse;
                toAminoMsg(message: _3.MsgMintResponse): _3.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _3.MsgMintResponseProtoMsg): _3.MsgMintResponse;
                toProto(message: _3.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _3.MsgMintResponse): _3.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _3.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgBurn;
                fromPartial(object: Partial<_3.MsgBurn>): _3.MsgBurn;
                fromAmino(object: _3.MsgBurnAmino): _3.MsgBurn;
                toAmino(message: _3.MsgBurn): _3.MsgBurnAmino;
                fromAminoMsg(object: _3.MsgBurnAminoMsg): _3.MsgBurn;
                toAminoMsg(message: _3.MsgBurn): _3.MsgBurnAminoMsg;
                fromProtoMsg(message: _3.MsgBurnProtoMsg): _3.MsgBurn;
                toProto(message: _3.MsgBurn): Uint8Array;
                toProtoMsg(message: _3.MsgBurn): _3.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _3.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgBurnResponse;
                fromPartial(_: Partial<_3.MsgBurnResponse>): _3.MsgBurnResponse;
                fromAmino(_: _3.MsgBurnResponseAmino): _3.MsgBurnResponse;
                toAmino(_: _3.MsgBurnResponse): _3.MsgBurnResponseAmino;
                fromAminoMsg(object: _3.MsgBurnResponseAminoMsg): _3.MsgBurnResponse;
                toAminoMsg(message: _3.MsgBurnResponse): _3.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _3.MsgBurnResponseProtoMsg): _3.MsgBurnResponse;
                toProto(message: _3.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _3.MsgBurnResponse): _3.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _3.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgChangeAdmin;
                fromPartial(object: Partial<_3.MsgChangeAdmin>): _3.MsgChangeAdmin;
                fromAmino(object: _3.MsgChangeAdminAmino): _3.MsgChangeAdmin;
                toAmino(message: _3.MsgChangeAdmin): _3.MsgChangeAdminAmino;
                fromAminoMsg(object: _3.MsgChangeAdminAminoMsg): _3.MsgChangeAdmin;
                toAminoMsg(message: _3.MsgChangeAdmin): _3.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _3.MsgChangeAdminProtoMsg): _3.MsgChangeAdmin;
                toProto(message: _3.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _3.MsgChangeAdmin): _3.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _3.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgChangeAdminResponse;
                fromPartial(_: Partial<_3.MsgChangeAdminResponse>): _3.MsgChangeAdminResponse;
                fromAmino(_: _3.MsgChangeAdminResponseAmino): _3.MsgChangeAdminResponse;
                toAmino(_: _3.MsgChangeAdminResponse): _3.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _3.MsgChangeAdminResponseAminoMsg): _3.MsgChangeAdminResponse;
                toAminoMsg(message: _3.MsgChangeAdminResponse): _3.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _3.MsgChangeAdminResponseProtoMsg): _3.MsgChangeAdminResponse;
                toProto(message: _3.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _3.MsgChangeAdminResponse): _3.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _3.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgSetDenomMetadata;
                fromPartial(object: Partial<_3.MsgSetDenomMetadata>): _3.MsgSetDenomMetadata;
                fromAmino(object: _3.MsgSetDenomMetadataAmino): _3.MsgSetDenomMetadata;
                toAmino(message: _3.MsgSetDenomMetadata): _3.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _3.MsgSetDenomMetadataAminoMsg): _3.MsgSetDenomMetadata;
                toAminoMsg(message: _3.MsgSetDenomMetadata): _3.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _3.MsgSetDenomMetadataProtoMsg): _3.MsgSetDenomMetadata;
                toProto(message: _3.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _3.MsgSetDenomMetadata): _3.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _3.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_3.MsgSetDenomMetadataResponse>): _3.MsgSetDenomMetadataResponse;
                fromAmino(_: _3.MsgSetDenomMetadataResponseAmino): _3.MsgSetDenomMetadataResponse;
                toAmino(_: _3.MsgSetDenomMetadataResponse): _3.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _3.MsgSetDenomMetadataResponseAminoMsg): _3.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _3.MsgSetDenomMetadataResponse): _3.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _3.MsgSetDenomMetadataResponseProtoMsg): _3.MsgSetDenomMetadataResponse;
                toProto(message: _3.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _3.MsgSetDenomMetadataResponse): _3.MsgSetDenomMetadataResponseProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _2.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.DenomAuthorityMetadata;
                fromPartial(object: Partial<_2.DenomAuthorityMetadata>): _2.DenomAuthorityMetadata;
                fromAmino(object: _2.DenomAuthorityMetadataAmino): _2.DenomAuthorityMetadata;
                toAmino(message: _2.DenomAuthorityMetadata): _2.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _2.DenomAuthorityMetadataAminoMsg): _2.DenomAuthorityMetadata;
                toAminoMsg(message: _2.DenomAuthorityMetadata): _2.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _2.DenomAuthorityMetadataProtoMsg): _2.DenomAuthorityMetadata;
                toProto(message: _2.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _2.DenomAuthorityMetadata): _2.DenomAuthorityMetadataProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                toAminoMsg(message: _2.Params): _2.ParamsAminoMsg;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _1.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _1.QueryParamsRequest;
                fromPartial(_: Partial<_1.QueryParamsRequest>): _1.QueryParamsRequest;
                fromAmino(_: _1.QueryParamsRequestAmino): _1.QueryParamsRequest;
                toAmino(_: _1.QueryParamsRequest): _1.QueryParamsRequestAmino;
                fromAminoMsg(object: _1.QueryParamsRequestAminoMsg): _1.QueryParamsRequest;
                toAminoMsg(message: _1.QueryParamsRequest): _1.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _1.QueryParamsRequestProtoMsg): _1.QueryParamsRequest;
                toProto(message: _1.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _1.QueryParamsRequest): _1.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _1.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryParamsResponse;
                fromPartial(object: Partial<_1.QueryParamsResponse>): _1.QueryParamsResponse;
                fromAmino(object: _1.QueryParamsResponseAmino): _1.QueryParamsResponse;
                toAmino(message: _1.QueryParamsResponse): _1.QueryParamsResponseAmino;
                fromAminoMsg(object: _1.QueryParamsResponseAminoMsg): _1.QueryParamsResponse;
                toAminoMsg(message: _1.QueryParamsResponse): _1.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _1.QueryParamsResponseProtoMsg): _1.QueryParamsResponse;
                toProto(message: _1.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _1.QueryParamsResponse): _1.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _1.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_1.QueryDenomAuthorityMetadataRequest>): _1.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _1.QueryDenomAuthorityMetadataRequestAmino): _1.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _1.QueryDenomAuthorityMetadataRequest): _1.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _1.QueryDenomAuthorityMetadataRequestAminoMsg): _1.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _1.QueryDenomAuthorityMetadataRequest): _1.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _1.QueryDenomAuthorityMetadataRequestProtoMsg): _1.QueryDenomAuthorityMetadataRequest;
                toProto(message: _1.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _1.QueryDenomAuthorityMetadataRequest): _1.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _1.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_1.QueryDenomAuthorityMetadataResponse>): _1.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _1.QueryDenomAuthorityMetadataResponseAmino): _1.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _1.QueryDenomAuthorityMetadataResponse): _1.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _1.QueryDenomAuthorityMetadataResponseAminoMsg): _1.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _1.QueryDenomAuthorityMetadataResponse): _1.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _1.QueryDenomAuthorityMetadataResponseProtoMsg): _1.QueryDenomAuthorityMetadataResponse;
                toProto(message: _1.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _1.QueryDenomAuthorityMetadataResponse): _1.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _1.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_1.QueryDenomsFromCreatorRequest>): _1.QueryDenomsFromCreatorRequest;
                fromAmino(object: _1.QueryDenomsFromCreatorRequestAmino): _1.QueryDenomsFromCreatorRequest;
                toAmino(message: _1.QueryDenomsFromCreatorRequest): _1.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _1.QueryDenomsFromCreatorRequestAminoMsg): _1.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _1.QueryDenomsFromCreatorRequest): _1.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _1.QueryDenomsFromCreatorRequestProtoMsg): _1.QueryDenomsFromCreatorRequest;
                toProto(message: _1.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _1.QueryDenomsFromCreatorRequest): _1.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _1.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_1.QueryDenomsFromCreatorResponse>): _1.QueryDenomsFromCreatorResponse;
                fromAmino(object: _1.QueryDenomsFromCreatorResponseAmino): _1.QueryDenomsFromCreatorResponse;
                toAmino(message: _1.QueryDenomsFromCreatorResponse): _1.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _1.QueryDenomsFromCreatorResponseAminoMsg): _1.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _1.QueryDenomsFromCreatorResponse): _1.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _1.QueryDenomsFromCreatorResponseProtoMsg): _1.QueryDenomsFromCreatorResponse;
                toProto(message: _1.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _1.QueryDenomsFromCreatorResponse): _1.QueryDenomsFromCreatorResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _0.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GenesisState;
                fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
                fromAmino(object: _0.GenesisStateAmino): _0.GenesisState;
                toAmino(message: _0.GenesisState): _0.GenesisStateAmino;
                fromAminoMsg(object: _0.GenesisStateAminoMsg): _0.GenesisState;
                toAminoMsg(message: _0.GenesisState): _0.GenesisStateAminoMsg;
                fromProtoMsg(message: _0.GenesisStateProtoMsg): _0.GenesisState;
                toProto(message: _0.GenesisState): Uint8Array;
                toProtoMsg(message: _0.GenesisState): _0.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _0.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GenesisDenom;
                fromPartial(object: Partial<_0.GenesisDenom>): _0.GenesisDenom;
                fromAmino(object: _0.GenesisDenomAmino): _0.GenesisDenom;
                toAmino(message: _0.GenesisDenom): _0.GenesisDenomAmino;
                fromAminoMsg(object: _0.GenesisDenomAminoMsg): _0.GenesisDenom;
                toAminoMsg(message: _0.GenesisDenom): _0.GenesisDenomAminoMsg;
                fromProtoMsg(message: _0.GenesisDenomProtoMsg): _0.GenesisDenom;
                toProto(message: _0.GenesisDenom): Uint8Array;
                toProtoMsg(message: _0.GenesisDenom): _0.GenesisDenomProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            osmosis: {
                tokenfactory: {
                    v1beta1: _178.MsgClientImpl;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
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
            rpcEndpoint: any;
        }) => Promise<{
            osmosis: {
                tokenfactory: {
                    v1beta1: {
                        params(request?: _1.QueryParamsRequest): Promise<_1.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _1.QueryDenomAuthorityMetadataRequest): Promise<_1.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _1.QueryDenomsFromCreatorRequest): Promise<_1.QueryDenomsFromCreatorResponse>;
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
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
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
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
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
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
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
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
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
            osmosis: {
                tokenfactory: {
                    v1beta1: _176.LCDQueryClient;
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
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
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
