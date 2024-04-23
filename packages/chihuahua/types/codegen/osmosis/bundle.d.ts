import * as _4 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _5 from "./tokenfactory/v1beta1/genesis";
import * as _6 from "./tokenfactory/v1beta1/params";
import * as _7 from "./tokenfactory/v1beta1/query";
import * as _8 from "./tokenfactory/v1beta1/tx";
import * as _161 from "./tokenfactory/v1beta1/query.lcd";
import * as _162 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _163 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _163.MsgClientImpl;
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                denomAuthorityMetadata(request: _7.QueryDenomAuthorityMetadataRequest): Promise<_7.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _7.QueryDenomsFromCreatorRequest): Promise<_7.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _161.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _8.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _8.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _8.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _8.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _8.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _8.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _8.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _8.MsgCreateDenom): {
                        typeUrl: string;
                        value: _8.MsgCreateDenom;
                    };
                    mint(value: _8.MsgMint): {
                        typeUrl: string;
                        value: _8.MsgMint;
                    };
                    burn(value: _8.MsgBurn): {
                        typeUrl: string;
                        value: _8.MsgBurn;
                    };
                    changeAdmin(value: _8.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _8.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _8.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _8.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _8.MsgForceTransfer): {
                        typeUrl: string;
                        value: _8.MsgForceTransfer;
                    };
                    updateParams(value: _8.MsgUpdateParams): {
                        typeUrl: string;
                        value: _8.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _8.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _8.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _8.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _8.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _8.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: any): {
                        typeUrl: string;
                        value: _8.MsgForceTransfer;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _8.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createDenom(value: _8.MsgCreateDenom): {
                        typeUrl: string;
                        value: _8.MsgCreateDenom;
                    };
                    mint(value: _8.MsgMint): {
                        typeUrl: string;
                        value: _8.MsgMint;
                    };
                    burn(value: _8.MsgBurn): {
                        typeUrl: string;
                        value: _8.MsgBurn;
                    };
                    changeAdmin(value: _8.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _8.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _8.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _8.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _8.MsgForceTransfer): {
                        typeUrl: string;
                        value: _8.MsgForceTransfer;
                    };
                    updateParams(value: _8.MsgUpdateParams): {
                        typeUrl: string;
                        value: _8.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _8.MsgCreateDenom) => _8.MsgCreateDenomAmino;
                    fromAmino: (object: _8.MsgCreateDenomAmino) => _8.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _8.MsgMint) => _8.MsgMintAmino;
                    fromAmino: (object: _8.MsgMintAmino) => _8.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _8.MsgBurn) => _8.MsgBurnAmino;
                    fromAmino: (object: _8.MsgBurnAmino) => _8.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _8.MsgChangeAdmin) => _8.MsgChangeAdminAmino;
                    fromAmino: (object: _8.MsgChangeAdminAmino) => _8.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _8.MsgSetDenomMetadata) => _8.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _8.MsgSetDenomMetadataAmino) => _8.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _8.MsgForceTransfer) => _8.MsgForceTransferAmino;
                    fromAmino: (object: _8.MsgForceTransferAmino) => _8.MsgForceTransfer;
                };
                "/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _8.MsgUpdateParams) => _8.MsgUpdateParamsAmino;
                    fromAmino: (object: _8.MsgUpdateParamsAmino) => _8.MsgUpdateParams;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _8.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgCreateDenom;
                fromPartial(object: Partial<_8.MsgCreateDenom>): _8.MsgCreateDenom;
                fromAmino(object: _8.MsgCreateDenomAmino): _8.MsgCreateDenom;
                toAmino(message: _8.MsgCreateDenom): _8.MsgCreateDenomAmino;
                fromAminoMsg(object: _8.MsgCreateDenomAminoMsg): _8.MsgCreateDenom;
                toAminoMsg(message: _8.MsgCreateDenom): _8.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _8.MsgCreateDenomProtoMsg): _8.MsgCreateDenom;
                toProto(message: _8.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _8.MsgCreateDenom): _8.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _8.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgCreateDenomResponse;
                fromPartial(object: Partial<_8.MsgCreateDenomResponse>): _8.MsgCreateDenomResponse;
                fromAmino(object: _8.MsgCreateDenomResponseAmino): _8.MsgCreateDenomResponse;
                toAmino(message: _8.MsgCreateDenomResponse): _8.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _8.MsgCreateDenomResponseAminoMsg): _8.MsgCreateDenomResponse;
                toAminoMsg(message: _8.MsgCreateDenomResponse): _8.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _8.MsgCreateDenomResponseProtoMsg): _8.MsgCreateDenomResponse;
                toProto(message: _8.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _8.MsgCreateDenomResponse): _8.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _8.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgMint;
                fromPartial(object: Partial<_8.MsgMint>): _8.MsgMint;
                fromAmino(object: _8.MsgMintAmino): _8.MsgMint;
                toAmino(message: _8.MsgMint): _8.MsgMintAmino;
                fromAminoMsg(object: _8.MsgMintAminoMsg): _8.MsgMint;
                toAminoMsg(message: _8.MsgMint): _8.MsgMintAminoMsg;
                fromProtoMsg(message: _8.MsgMintProtoMsg): _8.MsgMint;
                toProto(message: _8.MsgMint): Uint8Array;
                toProtoMsg(message: _8.MsgMint): _8.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _8.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgMintResponse;
                fromPartial(_: Partial<_8.MsgMintResponse>): _8.MsgMintResponse;
                fromAmino(_: _8.MsgMintResponseAmino): _8.MsgMintResponse;
                toAmino(_: _8.MsgMintResponse): _8.MsgMintResponseAmino;
                fromAminoMsg(object: _8.MsgMintResponseAminoMsg): _8.MsgMintResponse;
                toAminoMsg(message: _8.MsgMintResponse): _8.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _8.MsgMintResponseProtoMsg): _8.MsgMintResponse;
                toProto(message: _8.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _8.MsgMintResponse): _8.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _8.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgBurn;
                fromPartial(object: Partial<_8.MsgBurn>): _8.MsgBurn;
                fromAmino(object: _8.MsgBurnAmino): _8.MsgBurn;
                toAmino(message: _8.MsgBurn): _8.MsgBurnAmino;
                fromAminoMsg(object: _8.MsgBurnAminoMsg): _8.MsgBurn;
                toAminoMsg(message: _8.MsgBurn): _8.MsgBurnAminoMsg;
                fromProtoMsg(message: _8.MsgBurnProtoMsg): _8.MsgBurn;
                toProto(message: _8.MsgBurn): Uint8Array;
                toProtoMsg(message: _8.MsgBurn): _8.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _8.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgBurnResponse;
                fromPartial(_: Partial<_8.MsgBurnResponse>): _8.MsgBurnResponse;
                fromAmino(_: _8.MsgBurnResponseAmino): _8.MsgBurnResponse;
                toAmino(_: _8.MsgBurnResponse): _8.MsgBurnResponseAmino;
                fromAminoMsg(object: _8.MsgBurnResponseAminoMsg): _8.MsgBurnResponse;
                toAminoMsg(message: _8.MsgBurnResponse): _8.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _8.MsgBurnResponseProtoMsg): _8.MsgBurnResponse;
                toProto(message: _8.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _8.MsgBurnResponse): _8.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _8.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgChangeAdmin;
                fromPartial(object: Partial<_8.MsgChangeAdmin>): _8.MsgChangeAdmin;
                fromAmino(object: _8.MsgChangeAdminAmino): _8.MsgChangeAdmin;
                toAmino(message: _8.MsgChangeAdmin): _8.MsgChangeAdminAmino;
                fromAminoMsg(object: _8.MsgChangeAdminAminoMsg): _8.MsgChangeAdmin;
                toAminoMsg(message: _8.MsgChangeAdmin): _8.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _8.MsgChangeAdminProtoMsg): _8.MsgChangeAdmin;
                toProto(message: _8.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _8.MsgChangeAdmin): _8.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _8.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgChangeAdminResponse;
                fromPartial(_: Partial<_8.MsgChangeAdminResponse>): _8.MsgChangeAdminResponse;
                fromAmino(_: _8.MsgChangeAdminResponseAmino): _8.MsgChangeAdminResponse;
                toAmino(_: _8.MsgChangeAdminResponse): _8.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _8.MsgChangeAdminResponseAminoMsg): _8.MsgChangeAdminResponse;
                toAminoMsg(message: _8.MsgChangeAdminResponse): _8.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _8.MsgChangeAdminResponseProtoMsg): _8.MsgChangeAdminResponse;
                toProto(message: _8.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _8.MsgChangeAdminResponse): _8.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _8.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgSetDenomMetadata;
                fromPartial(object: Partial<_8.MsgSetDenomMetadata>): _8.MsgSetDenomMetadata;
                fromAmino(object: _8.MsgSetDenomMetadataAmino): _8.MsgSetDenomMetadata;
                toAmino(message: _8.MsgSetDenomMetadata): _8.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _8.MsgSetDenomMetadataAminoMsg): _8.MsgSetDenomMetadata;
                toAminoMsg(message: _8.MsgSetDenomMetadata): _8.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _8.MsgSetDenomMetadataProtoMsg): _8.MsgSetDenomMetadata;
                toProto(message: _8.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _8.MsgSetDenomMetadata): _8.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _8.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_8.MsgSetDenomMetadataResponse>): _8.MsgSetDenomMetadataResponse;
                fromAmino(_: _8.MsgSetDenomMetadataResponseAmino): _8.MsgSetDenomMetadataResponse;
                toAmino(_: _8.MsgSetDenomMetadataResponse): _8.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _8.MsgSetDenomMetadataResponseAminoMsg): _8.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _8.MsgSetDenomMetadataResponse): _8.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _8.MsgSetDenomMetadataResponseProtoMsg): _8.MsgSetDenomMetadataResponse;
                toProto(message: _8.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _8.MsgSetDenomMetadataResponse): _8.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _8.MsgForceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgForceTransfer;
                fromPartial(object: Partial<_8.MsgForceTransfer>): _8.MsgForceTransfer;
                fromAmino(object: _8.MsgForceTransferAmino): _8.MsgForceTransfer;
                toAmino(message: _8.MsgForceTransfer): _8.MsgForceTransferAmino;
                fromAminoMsg(object: _8.MsgForceTransferAminoMsg): _8.MsgForceTransfer;
                toAminoMsg(message: _8.MsgForceTransfer): _8.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _8.MsgForceTransferProtoMsg): _8.MsgForceTransfer;
                toProto(message: _8.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _8.MsgForceTransfer): _8.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _8.MsgForceTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgForceTransferResponse;
                fromPartial(_: Partial<_8.MsgForceTransferResponse>): _8.MsgForceTransferResponse;
                fromAmino(_: _8.MsgForceTransferResponseAmino): _8.MsgForceTransferResponse;
                toAmino(_: _8.MsgForceTransferResponse): _8.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _8.MsgForceTransferResponseAminoMsg): _8.MsgForceTransferResponse;
                toAminoMsg(message: _8.MsgForceTransferResponse): _8.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _8.MsgForceTransferResponseProtoMsg): _8.MsgForceTransferResponse;
                toProto(message: _8.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _8.MsgForceTransferResponse): _8.MsgForceTransferResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _8.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgUpdateParams;
                fromPartial(object: Partial<_8.MsgUpdateParams>): _8.MsgUpdateParams;
                fromAmino(object: _8.MsgUpdateParamsAmino): _8.MsgUpdateParams;
                toAmino(message: _8.MsgUpdateParams): _8.MsgUpdateParamsAmino;
                fromAminoMsg(object: _8.MsgUpdateParamsAminoMsg): _8.MsgUpdateParams;
                toAminoMsg(message: _8.MsgUpdateParams): _8.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _8.MsgUpdateParamsProtoMsg): _8.MsgUpdateParams;
                toProto(message: _8.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _8.MsgUpdateParams): _8.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _8.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_8.MsgUpdateParamsResponse>): _8.MsgUpdateParamsResponse;
                fromAmino(_: _8.MsgUpdateParamsResponseAmino): _8.MsgUpdateParamsResponse;
                toAmino(_: _8.MsgUpdateParamsResponse): _8.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _8.MsgUpdateParamsResponseAminoMsg): _8.MsgUpdateParamsResponse;
                toAminoMsg(message: _8.MsgUpdateParamsResponse): _8.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _8.MsgUpdateParamsResponseProtoMsg): _8.MsgUpdateParamsResponse;
                toProto(message: _8.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _8.MsgUpdateParamsResponse): _8.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _7.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.QueryParamsRequest;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
                fromAmino(_: _7.QueryParamsRequestAmino): _7.QueryParamsRequest;
                toAmino(_: _7.QueryParamsRequest): _7.QueryParamsRequestAmino;
                fromAminoMsg(object: _7.QueryParamsRequestAminoMsg): _7.QueryParamsRequest;
                toAminoMsg(message: _7.QueryParamsRequest): _7.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryParamsRequestProtoMsg): _7.QueryParamsRequest;
                toProto(message: _7.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryParamsRequest): _7.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _7.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryParamsResponse;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
                fromAmino(object: _7.QueryParamsResponseAmino): _7.QueryParamsResponse;
                toAmino(message: _7.QueryParamsResponse): _7.QueryParamsResponseAmino;
                fromAminoMsg(object: _7.QueryParamsResponseAminoMsg): _7.QueryParamsResponse;
                toAminoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryParamsResponseProtoMsg): _7.QueryParamsResponse;
                toProto(message: _7.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _7.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_7.QueryDenomAuthorityMetadataRequest>): _7.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _7.QueryDenomAuthorityMetadataRequestAmino): _7.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _7.QueryDenomAuthorityMetadataRequest): _7.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _7.QueryDenomAuthorityMetadataRequestAminoMsg): _7.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _7.QueryDenomAuthorityMetadataRequest): _7.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _7.QueryDenomAuthorityMetadataRequestProtoMsg): _7.QueryDenomAuthorityMetadataRequest;
                toProto(message: _7.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _7.QueryDenomAuthorityMetadataRequest): _7.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _7.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_7.QueryDenomAuthorityMetadataResponse>): _7.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _7.QueryDenomAuthorityMetadataResponseAmino): _7.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _7.QueryDenomAuthorityMetadataResponse): _7.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _7.QueryDenomAuthorityMetadataResponseAminoMsg): _7.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _7.QueryDenomAuthorityMetadataResponse): _7.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _7.QueryDenomAuthorityMetadataResponseProtoMsg): _7.QueryDenomAuthorityMetadataResponse;
                toProto(message: _7.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _7.QueryDenomAuthorityMetadataResponse): _7.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _7.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_7.QueryDenomsFromCreatorRequest>): _7.QueryDenomsFromCreatorRequest;
                fromAmino(object: _7.QueryDenomsFromCreatorRequestAmino): _7.QueryDenomsFromCreatorRequest;
                toAmino(message: _7.QueryDenomsFromCreatorRequest): _7.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _7.QueryDenomsFromCreatorRequestAminoMsg): _7.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _7.QueryDenomsFromCreatorRequest): _7.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _7.QueryDenomsFromCreatorRequestProtoMsg): _7.QueryDenomsFromCreatorRequest;
                toProto(message: _7.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _7.QueryDenomsFromCreatorRequest): _7.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _7.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_7.QueryDenomsFromCreatorResponse>): _7.QueryDenomsFromCreatorResponse;
                fromAmino(object: _7.QueryDenomsFromCreatorResponseAmino): _7.QueryDenomsFromCreatorResponse;
                toAmino(message: _7.QueryDenomsFromCreatorResponse): _7.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _7.QueryDenomsFromCreatorResponseAminoMsg): _7.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _7.QueryDenomsFromCreatorResponse): _7.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _7.QueryDenomsFromCreatorResponseProtoMsg): _7.QueryDenomsFromCreatorResponse;
                toProto(message: _7.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _7.QueryDenomsFromCreatorResponse): _7.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _6.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Params;
                fromPartial(object: Partial<_6.Params>): _6.Params;
                fromAmino(object: _6.ParamsAmino): _6.Params;
                toAmino(message: _6.Params): _6.ParamsAmino;
                fromAminoMsg(object: _6.ParamsAminoMsg): _6.Params;
                toAminoMsg(message: _6.Params): _6.ParamsAminoMsg;
                fromProtoMsg(message: _6.ParamsProtoMsg): _6.Params;
                toProto(message: _6.Params): Uint8Array;
                toProtoMsg(message: _6.Params): _6.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _5.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
                fromAmino(object: _5.GenesisStateAmino): _5.GenesisState;
                toAmino(message: _5.GenesisState): _5.GenesisStateAmino;
                fromAminoMsg(object: _5.GenesisStateAminoMsg): _5.GenesisState;
                toAminoMsg(message: _5.GenesisState): _5.GenesisStateAminoMsg;
                fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
                toProto(message: _5.GenesisState): Uint8Array;
                toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _5.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.GenesisDenom;
                fromPartial(object: Partial<_5.GenesisDenom>): _5.GenesisDenom;
                fromAmino(object: _5.GenesisDenomAmino): _5.GenesisDenom;
                toAmino(message: _5.GenesisDenom): _5.GenesisDenomAmino;
                fromAminoMsg(object: _5.GenesisDenomAminoMsg): _5.GenesisDenom;
                toAminoMsg(message: _5.GenesisDenom): _5.GenesisDenomAminoMsg;
                fromProtoMsg(message: _5.GenesisDenomProtoMsg): _5.GenesisDenom;
                toProto(message: _5.GenesisDenom): Uint8Array;
                toProtoMsg(message: _5.GenesisDenom): _5.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _4.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.DenomAuthorityMetadata;
                fromPartial(object: Partial<_4.DenomAuthorityMetadata>): _4.DenomAuthorityMetadata;
                fromAmino(object: _4.DenomAuthorityMetadataAmino): _4.DenomAuthorityMetadata;
                toAmino(message: _4.DenomAuthorityMetadata): _4.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _4.DenomAuthorityMetadataAminoMsg): _4.DenomAuthorityMetadata;
                toAminoMsg(message: _4.DenomAuthorityMetadata): _4.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _4.DenomAuthorityMetadataProtoMsg): _4.DenomAuthorityMetadata;
                toProto(message: _4.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _4.DenomAuthorityMetadata): _4.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            osmosis: {
                tokenfactory: {
                    v1beta1: _163.MsgClientImpl;
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
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            osmosis: {
                tokenfactory: {
                    v1beta1: {
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _7.QueryDenomAuthorityMetadataRequest): Promise<_7.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _7.QueryDenomsFromCreatorRequest): Promise<_7.QueryDenomsFromCreatorResponse>;
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
                    v1beta1: _161.LCDQueryClient;
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
