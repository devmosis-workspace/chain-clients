import * as _24 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _25 from "./tokenfactory/v1beta1/genesis";
import * as _26 from "./tokenfactory/v1beta1/params";
import * as _27 from "./tokenfactory/v1beta1/query";
import * as _28 from "./tokenfactory/v1beta1/tx";
import * as _208 from "./tokenfactory/v1beta1/query.lcd";
import * as _209 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _210 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _210.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                denomAuthorityMetadata(request: _27.QueryDenomAuthorityMetadataRequest): Promise<_27.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _27.QueryDenomsFromCreatorRequest): Promise<_27.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _28.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _28.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _28.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _28.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _28.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _28.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _28.MsgCreateDenom): {
                        typeUrl: string;
                        value: _28.MsgCreateDenom;
                    };
                    mint(value: _28.MsgMint): {
                        typeUrl: string;
                        value: _28.MsgMint;
                    };
                    burn(value: _28.MsgBurn): {
                        typeUrl: string;
                        value: _28.MsgBurn;
                    };
                    changeAdmin(value: _28.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _28.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _28.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _28.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _28.MsgForceTransfer): {
                        typeUrl: string;
                        value: _28.MsgForceTransfer;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _28.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _28.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _28.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _28.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _28.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: any): {
                        typeUrl: string;
                        value: _28.MsgForceTransfer;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createDenom(value: _28.MsgCreateDenom): {
                        typeUrl: string;
                        value: _28.MsgCreateDenom;
                    };
                    mint(value: _28.MsgMint): {
                        typeUrl: string;
                        value: _28.MsgMint;
                    };
                    burn(value: _28.MsgBurn): {
                        typeUrl: string;
                        value: _28.MsgBurn;
                    };
                    changeAdmin(value: _28.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _28.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _28.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _28.MsgSetDenomMetadata;
                    };
                    forceTransfer(value: _28.MsgForceTransfer): {
                        typeUrl: string;
                        value: _28.MsgForceTransfer;
                    };
                    updateParams(value: _28.MsgUpdateParams): {
                        typeUrl: string;
                        value: _28.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _28.MsgCreateDenom) => _28.MsgCreateDenomAmino;
                    fromAmino: (object: _28.MsgCreateDenomAmino) => _28.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _28.MsgMint) => _28.MsgMintAmino;
                    fromAmino: (object: _28.MsgMintAmino) => _28.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _28.MsgBurn) => _28.MsgBurnAmino;
                    fromAmino: (object: _28.MsgBurnAmino) => _28.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _28.MsgChangeAdmin) => _28.MsgChangeAdminAmino;
                    fromAmino: (object: _28.MsgChangeAdminAmino) => _28.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _28.MsgSetDenomMetadata) => _28.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _28.MsgSetDenomMetadataAmino) => _28.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _28.MsgForceTransfer) => _28.MsgForceTransferAmino;
                    fromAmino: (object: _28.MsgForceTransferAmino) => _28.MsgForceTransfer;
                };
                "/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _28.MsgUpdateParams) => _28.MsgUpdateParamsAmino;
                    fromAmino: (object: _28.MsgUpdateParamsAmino) => _28.MsgUpdateParams;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _28.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgCreateDenom;
                fromPartial(object: Partial<_28.MsgCreateDenom>): _28.MsgCreateDenom;
                fromAmino(object: _28.MsgCreateDenomAmino): _28.MsgCreateDenom;
                toAmino(message: _28.MsgCreateDenom): _28.MsgCreateDenomAmino;
                fromAminoMsg(object: _28.MsgCreateDenomAminoMsg): _28.MsgCreateDenom;
                toAminoMsg(message: _28.MsgCreateDenom): _28.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _28.MsgCreateDenomProtoMsg): _28.MsgCreateDenom;
                toProto(message: _28.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _28.MsgCreateDenom): _28.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _28.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgCreateDenomResponse;
                fromPartial(object: Partial<_28.MsgCreateDenomResponse>): _28.MsgCreateDenomResponse;
                fromAmino(object: _28.MsgCreateDenomResponseAmino): _28.MsgCreateDenomResponse;
                toAmino(message: _28.MsgCreateDenomResponse): _28.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _28.MsgCreateDenomResponseAminoMsg): _28.MsgCreateDenomResponse;
                toAminoMsg(message: _28.MsgCreateDenomResponse): _28.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _28.MsgCreateDenomResponseProtoMsg): _28.MsgCreateDenomResponse;
                toProto(message: _28.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _28.MsgCreateDenomResponse): _28.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _28.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgMint;
                fromPartial(object: Partial<_28.MsgMint>): _28.MsgMint;
                fromAmino(object: _28.MsgMintAmino): _28.MsgMint;
                toAmino(message: _28.MsgMint): _28.MsgMintAmino;
                fromAminoMsg(object: _28.MsgMintAminoMsg): _28.MsgMint;
                toAminoMsg(message: _28.MsgMint): _28.MsgMintAminoMsg;
                fromProtoMsg(message: _28.MsgMintProtoMsg): _28.MsgMint;
                toProto(message: _28.MsgMint): Uint8Array;
                toProtoMsg(message: _28.MsgMint): _28.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _28.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgMintResponse;
                fromPartial(_: Partial<_28.MsgMintResponse>): _28.MsgMintResponse;
                fromAmino(_: _28.MsgMintResponseAmino): _28.MsgMintResponse;
                toAmino(_: _28.MsgMintResponse): _28.MsgMintResponseAmino;
                fromAminoMsg(object: _28.MsgMintResponseAminoMsg): _28.MsgMintResponse;
                toAminoMsg(message: _28.MsgMintResponse): _28.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _28.MsgMintResponseProtoMsg): _28.MsgMintResponse;
                toProto(message: _28.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _28.MsgMintResponse): _28.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _28.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgBurn;
                fromPartial(object: Partial<_28.MsgBurn>): _28.MsgBurn;
                fromAmino(object: _28.MsgBurnAmino): _28.MsgBurn;
                toAmino(message: _28.MsgBurn): _28.MsgBurnAmino;
                fromAminoMsg(object: _28.MsgBurnAminoMsg): _28.MsgBurn;
                toAminoMsg(message: _28.MsgBurn): _28.MsgBurnAminoMsg;
                fromProtoMsg(message: _28.MsgBurnProtoMsg): _28.MsgBurn;
                toProto(message: _28.MsgBurn): Uint8Array;
                toProtoMsg(message: _28.MsgBurn): _28.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _28.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgBurnResponse;
                fromPartial(_: Partial<_28.MsgBurnResponse>): _28.MsgBurnResponse;
                fromAmino(_: _28.MsgBurnResponseAmino): _28.MsgBurnResponse;
                toAmino(_: _28.MsgBurnResponse): _28.MsgBurnResponseAmino;
                fromAminoMsg(object: _28.MsgBurnResponseAminoMsg): _28.MsgBurnResponse;
                toAminoMsg(message: _28.MsgBurnResponse): _28.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _28.MsgBurnResponseProtoMsg): _28.MsgBurnResponse;
                toProto(message: _28.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _28.MsgBurnResponse): _28.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _28.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgChangeAdmin;
                fromPartial(object: Partial<_28.MsgChangeAdmin>): _28.MsgChangeAdmin;
                fromAmino(object: _28.MsgChangeAdminAmino): _28.MsgChangeAdmin;
                toAmino(message: _28.MsgChangeAdmin): _28.MsgChangeAdminAmino;
                fromAminoMsg(object: _28.MsgChangeAdminAminoMsg): _28.MsgChangeAdmin;
                toAminoMsg(message: _28.MsgChangeAdmin): _28.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _28.MsgChangeAdminProtoMsg): _28.MsgChangeAdmin;
                toProto(message: _28.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _28.MsgChangeAdmin): _28.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _28.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgChangeAdminResponse;
                fromPartial(_: Partial<_28.MsgChangeAdminResponse>): _28.MsgChangeAdminResponse;
                fromAmino(_: _28.MsgChangeAdminResponseAmino): _28.MsgChangeAdminResponse;
                toAmino(_: _28.MsgChangeAdminResponse): _28.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _28.MsgChangeAdminResponseAminoMsg): _28.MsgChangeAdminResponse;
                toAminoMsg(message: _28.MsgChangeAdminResponse): _28.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _28.MsgChangeAdminResponseProtoMsg): _28.MsgChangeAdminResponse;
                toProto(message: _28.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _28.MsgChangeAdminResponse): _28.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _28.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgSetDenomMetadata;
                fromPartial(object: Partial<_28.MsgSetDenomMetadata>): _28.MsgSetDenomMetadata;
                fromAmino(object: _28.MsgSetDenomMetadataAmino): _28.MsgSetDenomMetadata;
                toAmino(message: _28.MsgSetDenomMetadata): _28.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _28.MsgSetDenomMetadataAminoMsg): _28.MsgSetDenomMetadata;
                toAminoMsg(message: _28.MsgSetDenomMetadata): _28.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _28.MsgSetDenomMetadataProtoMsg): _28.MsgSetDenomMetadata;
                toProto(message: _28.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _28.MsgSetDenomMetadata): _28.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _28.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_28.MsgSetDenomMetadataResponse>): _28.MsgSetDenomMetadataResponse;
                fromAmino(_: _28.MsgSetDenomMetadataResponseAmino): _28.MsgSetDenomMetadataResponse;
                toAmino(_: _28.MsgSetDenomMetadataResponse): _28.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _28.MsgSetDenomMetadataResponseAminoMsg): _28.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _28.MsgSetDenomMetadataResponse): _28.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _28.MsgSetDenomMetadataResponseProtoMsg): _28.MsgSetDenomMetadataResponse;
                toProto(message: _28.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _28.MsgSetDenomMetadataResponse): _28.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _28.MsgForceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgForceTransfer;
                fromPartial(object: Partial<_28.MsgForceTransfer>): _28.MsgForceTransfer;
                fromAmino(object: _28.MsgForceTransferAmino): _28.MsgForceTransfer;
                toAmino(message: _28.MsgForceTransfer): _28.MsgForceTransferAmino;
                fromAminoMsg(object: _28.MsgForceTransferAminoMsg): _28.MsgForceTransfer;
                toAminoMsg(message: _28.MsgForceTransfer): _28.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _28.MsgForceTransferProtoMsg): _28.MsgForceTransfer;
                toProto(message: _28.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _28.MsgForceTransfer): _28.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _28.MsgForceTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgForceTransferResponse;
                fromPartial(_: Partial<_28.MsgForceTransferResponse>): _28.MsgForceTransferResponse;
                fromAmino(_: _28.MsgForceTransferResponseAmino): _28.MsgForceTransferResponse;
                toAmino(_: _28.MsgForceTransferResponse): _28.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _28.MsgForceTransferResponseAminoMsg): _28.MsgForceTransferResponse;
                toAminoMsg(message: _28.MsgForceTransferResponse): _28.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _28.MsgForceTransferResponseProtoMsg): _28.MsgForceTransferResponse;
                toProto(message: _28.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _28.MsgForceTransferResponse): _28.MsgForceTransferResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _28.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgUpdateParams;
                fromPartial(object: Partial<_28.MsgUpdateParams>): _28.MsgUpdateParams;
                fromAmino(object: _28.MsgUpdateParamsAmino): _28.MsgUpdateParams;
                toAmino(message: _28.MsgUpdateParams): _28.MsgUpdateParamsAmino;
                fromAminoMsg(object: _28.MsgUpdateParamsAminoMsg): _28.MsgUpdateParams;
                toAminoMsg(message: _28.MsgUpdateParams): _28.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _28.MsgUpdateParamsProtoMsg): _28.MsgUpdateParams;
                toProto(message: _28.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _28.MsgUpdateParams): _28.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _28.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_28.MsgUpdateParamsResponse>): _28.MsgUpdateParamsResponse;
                fromAmino(_: _28.MsgUpdateParamsResponseAmino): _28.MsgUpdateParamsResponse;
                toAmino(_: _28.MsgUpdateParamsResponse): _28.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _28.MsgUpdateParamsResponseAminoMsg): _28.MsgUpdateParamsResponse;
                toAminoMsg(message: _28.MsgUpdateParamsResponse): _28.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _28.MsgUpdateParamsResponseProtoMsg): _28.MsgUpdateParamsResponse;
                toProto(message: _28.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _28.MsgUpdateParamsResponse): _28.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _27.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.QueryParamsRequest;
                fromPartial(_: Partial<_27.QueryParamsRequest>): _27.QueryParamsRequest;
                fromAmino(_: _27.QueryParamsRequestAmino): _27.QueryParamsRequest;
                toAmino(_: _27.QueryParamsRequest): _27.QueryParamsRequestAmino;
                fromAminoMsg(object: _27.QueryParamsRequestAminoMsg): _27.QueryParamsRequest;
                toAminoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryParamsRequestProtoMsg): _27.QueryParamsRequest;
                toProto(message: _27.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _27.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryParamsResponse;
                fromPartial(object: Partial<_27.QueryParamsResponse>): _27.QueryParamsResponse;
                fromAmino(object: _27.QueryParamsResponseAmino): _27.QueryParamsResponse;
                toAmino(message: _27.QueryParamsResponse): _27.QueryParamsResponseAmino;
                fromAminoMsg(object: _27.QueryParamsResponseAminoMsg): _27.QueryParamsResponse;
                toAminoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryParamsResponseProtoMsg): _27.QueryParamsResponse;
                toProto(message: _27.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _27.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_27.QueryDenomAuthorityMetadataRequest>): _27.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _27.QueryDenomAuthorityMetadataRequestAmino): _27.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _27.QueryDenomAuthorityMetadataRequest): _27.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _27.QueryDenomAuthorityMetadataRequestAminoMsg): _27.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _27.QueryDenomAuthorityMetadataRequest): _27.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDenomAuthorityMetadataRequestProtoMsg): _27.QueryDenomAuthorityMetadataRequest;
                toProto(message: _27.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDenomAuthorityMetadataRequest): _27.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _27.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_27.QueryDenomAuthorityMetadataResponse>): _27.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _27.QueryDenomAuthorityMetadataResponseAmino): _27.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _27.QueryDenomAuthorityMetadataResponse): _27.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _27.QueryDenomAuthorityMetadataResponseAminoMsg): _27.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _27.QueryDenomAuthorityMetadataResponse): _27.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDenomAuthorityMetadataResponseProtoMsg): _27.QueryDenomAuthorityMetadataResponse;
                toProto(message: _27.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDenomAuthorityMetadataResponse): _27.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _27.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_27.QueryDenomsFromCreatorRequest>): _27.QueryDenomsFromCreatorRequest;
                fromAmino(object: _27.QueryDenomsFromCreatorRequestAmino): _27.QueryDenomsFromCreatorRequest;
                toAmino(message: _27.QueryDenomsFromCreatorRequest): _27.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _27.QueryDenomsFromCreatorRequestAminoMsg): _27.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _27.QueryDenomsFromCreatorRequest): _27.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDenomsFromCreatorRequestProtoMsg): _27.QueryDenomsFromCreatorRequest;
                toProto(message: _27.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDenomsFromCreatorRequest): _27.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _27.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_27.QueryDenomsFromCreatorResponse>): _27.QueryDenomsFromCreatorResponse;
                fromAmino(object: _27.QueryDenomsFromCreatorResponseAmino): _27.QueryDenomsFromCreatorResponse;
                toAmino(message: _27.QueryDenomsFromCreatorResponse): _27.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _27.QueryDenomsFromCreatorResponseAminoMsg): _27.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _27.QueryDenomsFromCreatorResponse): _27.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDenomsFromCreatorResponseProtoMsg): _27.QueryDenomsFromCreatorResponse;
                toProto(message: _27.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDenomsFromCreatorResponse): _27.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _26.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Params;
                fromPartial(object: Partial<_26.Params>): _26.Params;
                fromAmino(object: _26.ParamsAmino): _26.Params;
                toAmino(message: _26.Params): _26.ParamsAmino;
                fromAminoMsg(object: _26.ParamsAminoMsg): _26.Params;
                toAminoMsg(message: _26.Params): _26.ParamsAminoMsg;
                fromProtoMsg(message: _26.ParamsProtoMsg): _26.Params;
                toProto(message: _26.Params): Uint8Array;
                toProtoMsg(message: _26.Params): _26.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                toAminoMsg(message: _25.GenesisState): _25.GenesisStateAminoMsg;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _25.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisDenom;
                fromPartial(object: Partial<_25.GenesisDenom>): _25.GenesisDenom;
                fromAmino(object: _25.GenesisDenomAmino): _25.GenesisDenom;
                toAmino(message: _25.GenesisDenom): _25.GenesisDenomAmino;
                fromAminoMsg(object: _25.GenesisDenomAminoMsg): _25.GenesisDenom;
                toAminoMsg(message: _25.GenesisDenom): _25.GenesisDenomAminoMsg;
                fromProtoMsg(message: _25.GenesisDenomProtoMsg): _25.GenesisDenom;
                toProto(message: _25.GenesisDenom): Uint8Array;
                toProtoMsg(message: _25.GenesisDenom): _25.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _24.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.DenomAuthorityMetadata;
                fromPartial(object: Partial<_24.DenomAuthorityMetadata>): _24.DenomAuthorityMetadata;
                fromAmino(object: _24.DenomAuthorityMetadataAmino): _24.DenomAuthorityMetadata;
                toAmino(message: _24.DenomAuthorityMetadata): _24.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _24.DenomAuthorityMetadataAminoMsg): _24.DenomAuthorityMetadata;
                toAminoMsg(message: _24.DenomAuthorityMetadata): _24.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _24.DenomAuthorityMetadataProtoMsg): _24.DenomAuthorityMetadata;
                toProto(message: _24.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _24.DenomAuthorityMetadata): _24.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            osmosis: {
                tokenfactory: {
                    v1beta1: _210.MsgClientImpl;
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
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _27.QueryDenomAuthorityMetadataRequest): Promise<_27.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _27.QueryDenomsFromCreatorRequest): Promise<_27.QueryDenomsFromCreatorResponse>;
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
                    v1beta1: _208.LCDQueryClient;
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
