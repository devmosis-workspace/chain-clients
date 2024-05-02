import * as _131 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _132 from "./tokenfactory/v1beta1/genesis";
import * as _133 from "./tokenfactory/v1beta1/params";
import * as _134 from "./tokenfactory/v1beta1/query";
import * as _135 from "./tokenfactory/v1beta1/tx";
import * as _265 from "./tokenfactory/v1beta1/query.lcd";
import * as _266 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _267 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _267.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                denomAuthorityMetadata(request: _134.QueryDenomAuthorityMetadataRequest): Promise<_134.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _134.QueryDenomsFromCreatorRequest): Promise<_134.QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: _134.QueryBeforeSendHookAddressRequest): Promise<_134.QueryBeforeSendHookAddressResponse>;
            };
            LCDQueryClient: typeof _265.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDenom(value: _135.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _135.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _135.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _135.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _135.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBeforeSendHook(value: _135.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _135.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                    createDenom(value: _135.MsgCreateDenom): {
                        typeUrl: string;
                        value: _135.MsgCreateDenom;
                    };
                    mint(value: _135.MsgMint): {
                        typeUrl: string;
                        value: _135.MsgMint;
                    };
                    burn(value: _135.MsgBurn): {
                        typeUrl: string;
                        value: _135.MsgBurn;
                    };
                    changeAdmin(value: _135.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _135.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _135.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _135.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _135.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _135.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _135.MsgForceTransfer): {
                        typeUrl: string;
                        value: _135.MsgForceTransfer;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _135.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _135.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _135.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _135.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _135.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: any): {
                        typeUrl: string;
                        value: _135.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: any): {
                        typeUrl: string;
                        value: _135.MsgForceTransfer;
                    };
                };
                fromPartial: {
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                    createDenom(value: _135.MsgCreateDenom): {
                        typeUrl: string;
                        value: _135.MsgCreateDenom;
                    };
                    mint(value: _135.MsgMint): {
                        typeUrl: string;
                        value: _135.MsgMint;
                    };
                    burn(value: _135.MsgBurn): {
                        typeUrl: string;
                        value: _135.MsgBurn;
                    };
                    changeAdmin(value: _135.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _135.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _135.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _135.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _135.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _135.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _135.MsgForceTransfer): {
                        typeUrl: string;
                        value: _135.MsgForceTransfer;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _135.MsgUpdateParams) => _135.MsgUpdateParamsAmino;
                    fromAmino: (object: _135.MsgUpdateParamsAmino) => _135.MsgUpdateParams;
                };
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _135.MsgCreateDenom) => _135.MsgCreateDenomAmino;
                    fromAmino: (object: _135.MsgCreateDenomAmino) => _135.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _135.MsgMint) => _135.MsgMintAmino;
                    fromAmino: (object: _135.MsgMintAmino) => _135.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _135.MsgBurn) => _135.MsgBurnAmino;
                    fromAmino: (object: _135.MsgBurnAmino) => _135.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _135.MsgChangeAdmin) => _135.MsgChangeAdminAmino;
                    fromAmino: (object: _135.MsgChangeAdminAmino) => _135.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _135.MsgSetDenomMetadata) => _135.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _135.MsgSetDenomMetadataAmino) => _135.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
                    aminoType: string;
                    toAmino: (message: _135.MsgSetBeforeSendHook) => _135.MsgSetBeforeSendHookAmino;
                    fromAmino: (object: _135.MsgSetBeforeSendHookAmino) => _135.MsgSetBeforeSendHook;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _135.MsgForceTransfer) => _135.MsgForceTransferAmino;
                    fromAmino: (object: _135.MsgForceTransferAmino) => _135.MsgForceTransfer;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _135.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgUpdateParams;
                fromPartial(object: Partial<_135.MsgUpdateParams>): _135.MsgUpdateParams;
                fromAmino(object: _135.MsgUpdateParamsAmino): _135.MsgUpdateParams;
                toAmino(message: _135.MsgUpdateParams): _135.MsgUpdateParamsAmino;
                fromAminoMsg(object: _135.MsgUpdateParamsAminoMsg): _135.MsgUpdateParams;
                toAminoMsg(message: _135.MsgUpdateParams): _135.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _135.MsgUpdateParamsProtoMsg): _135.MsgUpdateParams;
                toProto(message: _135.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _135.MsgUpdateParams): _135.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _135.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_135.MsgUpdateParamsResponse>): _135.MsgUpdateParamsResponse;
                fromAmino(_: _135.MsgUpdateParamsResponseAmino): _135.MsgUpdateParamsResponse;
                toAmino(_: _135.MsgUpdateParamsResponse): _135.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _135.MsgUpdateParamsResponseAminoMsg): _135.MsgUpdateParamsResponse;
                toAminoMsg(message: _135.MsgUpdateParamsResponse): _135.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _135.MsgUpdateParamsResponseProtoMsg): _135.MsgUpdateParamsResponse;
                toProto(message: _135.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _135.MsgUpdateParamsResponse): _135.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _135.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgCreateDenom;
                fromPartial(object: Partial<_135.MsgCreateDenom>): _135.MsgCreateDenom;
                fromAmino(object: _135.MsgCreateDenomAmino): _135.MsgCreateDenom;
                toAmino(message: _135.MsgCreateDenom): _135.MsgCreateDenomAmino;
                fromAminoMsg(object: _135.MsgCreateDenomAminoMsg): _135.MsgCreateDenom;
                toAminoMsg(message: _135.MsgCreateDenom): _135.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _135.MsgCreateDenomProtoMsg): _135.MsgCreateDenom;
                toProto(message: _135.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _135.MsgCreateDenom): _135.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _135.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgCreateDenomResponse;
                fromPartial(object: Partial<_135.MsgCreateDenomResponse>): _135.MsgCreateDenomResponse;
                fromAmino(object: _135.MsgCreateDenomResponseAmino): _135.MsgCreateDenomResponse;
                toAmino(message: _135.MsgCreateDenomResponse): _135.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _135.MsgCreateDenomResponseAminoMsg): _135.MsgCreateDenomResponse;
                toAminoMsg(message: _135.MsgCreateDenomResponse): _135.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _135.MsgCreateDenomResponseProtoMsg): _135.MsgCreateDenomResponse;
                toProto(message: _135.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _135.MsgCreateDenomResponse): _135.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _135.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgMint;
                fromPartial(object: Partial<_135.MsgMint>): _135.MsgMint;
                fromAmino(object: _135.MsgMintAmino): _135.MsgMint;
                toAmino(message: _135.MsgMint): _135.MsgMintAmino;
                fromAminoMsg(object: _135.MsgMintAminoMsg): _135.MsgMint;
                toAminoMsg(message: _135.MsgMint): _135.MsgMintAminoMsg;
                fromProtoMsg(message: _135.MsgMintProtoMsg): _135.MsgMint;
                toProto(message: _135.MsgMint): Uint8Array;
                toProtoMsg(message: _135.MsgMint): _135.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _135.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgMintResponse;
                fromPartial(_: Partial<_135.MsgMintResponse>): _135.MsgMintResponse;
                fromAmino(_: _135.MsgMintResponseAmino): _135.MsgMintResponse;
                toAmino(_: _135.MsgMintResponse): _135.MsgMintResponseAmino;
                fromAminoMsg(object: _135.MsgMintResponseAminoMsg): _135.MsgMintResponse;
                toAminoMsg(message: _135.MsgMintResponse): _135.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _135.MsgMintResponseProtoMsg): _135.MsgMintResponse;
                toProto(message: _135.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _135.MsgMintResponse): _135.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _135.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgBurn;
                fromPartial(object: Partial<_135.MsgBurn>): _135.MsgBurn;
                fromAmino(object: _135.MsgBurnAmino): _135.MsgBurn;
                toAmino(message: _135.MsgBurn): _135.MsgBurnAmino;
                fromAminoMsg(object: _135.MsgBurnAminoMsg): _135.MsgBurn;
                toAminoMsg(message: _135.MsgBurn): _135.MsgBurnAminoMsg;
                fromProtoMsg(message: _135.MsgBurnProtoMsg): _135.MsgBurn;
                toProto(message: _135.MsgBurn): Uint8Array;
                toProtoMsg(message: _135.MsgBurn): _135.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _135.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgBurnResponse;
                fromPartial(_: Partial<_135.MsgBurnResponse>): _135.MsgBurnResponse;
                fromAmino(_: _135.MsgBurnResponseAmino): _135.MsgBurnResponse;
                toAmino(_: _135.MsgBurnResponse): _135.MsgBurnResponseAmino;
                fromAminoMsg(object: _135.MsgBurnResponseAminoMsg): _135.MsgBurnResponse;
                toAminoMsg(message: _135.MsgBurnResponse): _135.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _135.MsgBurnResponseProtoMsg): _135.MsgBurnResponse;
                toProto(message: _135.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _135.MsgBurnResponse): _135.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _135.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgChangeAdmin;
                fromPartial(object: Partial<_135.MsgChangeAdmin>): _135.MsgChangeAdmin;
                fromAmino(object: _135.MsgChangeAdminAmino): _135.MsgChangeAdmin;
                toAmino(message: _135.MsgChangeAdmin): _135.MsgChangeAdminAmino;
                fromAminoMsg(object: _135.MsgChangeAdminAminoMsg): _135.MsgChangeAdmin;
                toAminoMsg(message: _135.MsgChangeAdmin): _135.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _135.MsgChangeAdminProtoMsg): _135.MsgChangeAdmin;
                toProto(message: _135.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _135.MsgChangeAdmin): _135.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _135.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgChangeAdminResponse;
                fromPartial(_: Partial<_135.MsgChangeAdminResponse>): _135.MsgChangeAdminResponse;
                fromAmino(_: _135.MsgChangeAdminResponseAmino): _135.MsgChangeAdminResponse;
                toAmino(_: _135.MsgChangeAdminResponse): _135.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _135.MsgChangeAdminResponseAminoMsg): _135.MsgChangeAdminResponse;
                toAminoMsg(message: _135.MsgChangeAdminResponse): _135.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _135.MsgChangeAdminResponseProtoMsg): _135.MsgChangeAdminResponse;
                toProto(message: _135.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _135.MsgChangeAdminResponse): _135.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetBeforeSendHook: {
                typeUrl: string;
                encode(message: _135.MsgSetBeforeSendHook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgSetBeforeSendHook;
                fromPartial(object: Partial<_135.MsgSetBeforeSendHook>): _135.MsgSetBeforeSendHook;
                fromAmino(object: _135.MsgSetBeforeSendHookAmino): _135.MsgSetBeforeSendHook;
                toAmino(message: _135.MsgSetBeforeSendHook): _135.MsgSetBeforeSendHookAmino;
                fromAminoMsg(object: _135.MsgSetBeforeSendHookAminoMsg): _135.MsgSetBeforeSendHook;
                toAminoMsg(message: _135.MsgSetBeforeSendHook): _135.MsgSetBeforeSendHookAminoMsg;
                fromProtoMsg(message: _135.MsgSetBeforeSendHookProtoMsg): _135.MsgSetBeforeSendHook;
                toProto(message: _135.MsgSetBeforeSendHook): Uint8Array;
                toProtoMsg(message: _135.MsgSetBeforeSendHook): _135.MsgSetBeforeSendHookProtoMsg;
            };
            MsgSetBeforeSendHookResponse: {
                typeUrl: string;
                encode(_: _135.MsgSetBeforeSendHookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgSetBeforeSendHookResponse;
                fromPartial(_: Partial<_135.MsgSetBeforeSendHookResponse>): _135.MsgSetBeforeSendHookResponse;
                fromAmino(_: _135.MsgSetBeforeSendHookResponseAmino): _135.MsgSetBeforeSendHookResponse;
                toAmino(_: _135.MsgSetBeforeSendHookResponse): _135.MsgSetBeforeSendHookResponseAmino;
                fromAminoMsg(object: _135.MsgSetBeforeSendHookResponseAminoMsg): _135.MsgSetBeforeSendHookResponse;
                toAminoMsg(message: _135.MsgSetBeforeSendHookResponse): _135.MsgSetBeforeSendHookResponseAminoMsg;
                fromProtoMsg(message: _135.MsgSetBeforeSendHookResponseProtoMsg): _135.MsgSetBeforeSendHookResponse;
                toProto(message: _135.MsgSetBeforeSendHookResponse): Uint8Array;
                toProtoMsg(message: _135.MsgSetBeforeSendHookResponse): _135.MsgSetBeforeSendHookResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _135.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgSetDenomMetadata;
                fromPartial(object: Partial<_135.MsgSetDenomMetadata>): _135.MsgSetDenomMetadata;
                fromAmino(object: _135.MsgSetDenomMetadataAmino): _135.MsgSetDenomMetadata;
                toAmino(message: _135.MsgSetDenomMetadata): _135.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _135.MsgSetDenomMetadataAminoMsg): _135.MsgSetDenomMetadata;
                toAminoMsg(message: _135.MsgSetDenomMetadata): _135.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _135.MsgSetDenomMetadataProtoMsg): _135.MsgSetDenomMetadata;
                toProto(message: _135.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _135.MsgSetDenomMetadata): _135.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _135.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_135.MsgSetDenomMetadataResponse>): _135.MsgSetDenomMetadataResponse;
                fromAmino(_: _135.MsgSetDenomMetadataResponseAmino): _135.MsgSetDenomMetadataResponse;
                toAmino(_: _135.MsgSetDenomMetadataResponse): _135.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _135.MsgSetDenomMetadataResponseAminoMsg): _135.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _135.MsgSetDenomMetadataResponse): _135.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _135.MsgSetDenomMetadataResponseProtoMsg): _135.MsgSetDenomMetadataResponse;
                toProto(message: _135.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _135.MsgSetDenomMetadataResponse): _135.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _135.MsgForceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _135.MsgForceTransfer;
                fromPartial(object: Partial<_135.MsgForceTransfer>): _135.MsgForceTransfer;
                fromAmino(object: _135.MsgForceTransferAmino): _135.MsgForceTransfer;
                toAmino(message: _135.MsgForceTransfer): _135.MsgForceTransferAmino;
                fromAminoMsg(object: _135.MsgForceTransferAminoMsg): _135.MsgForceTransfer;
                toAminoMsg(message: _135.MsgForceTransfer): _135.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _135.MsgForceTransferProtoMsg): _135.MsgForceTransfer;
                toProto(message: _135.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _135.MsgForceTransfer): _135.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _135.MsgForceTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _135.MsgForceTransferResponse;
                fromPartial(_: Partial<_135.MsgForceTransferResponse>): _135.MsgForceTransferResponse;
                fromAmino(_: _135.MsgForceTransferResponseAmino): _135.MsgForceTransferResponse;
                toAmino(_: _135.MsgForceTransferResponse): _135.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _135.MsgForceTransferResponseAminoMsg): _135.MsgForceTransferResponse;
                toAminoMsg(message: _135.MsgForceTransferResponse): _135.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _135.MsgForceTransferResponseProtoMsg): _135.MsgForceTransferResponse;
                toProto(message: _135.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _135.MsgForceTransferResponse): _135.MsgForceTransferResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _134.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _134.QueryParamsRequest;
                fromPartial(_: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
                fromAmino(_: _134.QueryParamsRequestAmino): _134.QueryParamsRequest;
                toAmino(_: _134.QueryParamsRequest): _134.QueryParamsRequestAmino;
                fromAminoMsg(object: _134.QueryParamsRequestAminoMsg): _134.QueryParamsRequest;
                toAminoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryParamsRequestProtoMsg): _134.QueryParamsRequest;
                toProto(message: _134.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _134.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryParamsResponse;
                fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
                fromAmino(object: _134.QueryParamsResponseAmino): _134.QueryParamsResponse;
                toAmino(message: _134.QueryParamsResponse): _134.QueryParamsResponseAmino;
                fromAminoMsg(object: _134.QueryParamsResponseAminoMsg): _134.QueryParamsResponse;
                toAminoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryParamsResponseProtoMsg): _134.QueryParamsResponse;
                toProto(message: _134.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _134.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_134.QueryDenomAuthorityMetadataRequest>): _134.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _134.QueryDenomAuthorityMetadataRequestAmino): _134.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _134.QueryDenomAuthorityMetadataRequest): _134.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _134.QueryDenomAuthorityMetadataRequestAminoMsg): _134.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _134.QueryDenomAuthorityMetadataRequest): _134.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDenomAuthorityMetadataRequestProtoMsg): _134.QueryDenomAuthorityMetadataRequest;
                toProto(message: _134.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDenomAuthorityMetadataRequest): _134.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _134.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_134.QueryDenomAuthorityMetadataResponse>): _134.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _134.QueryDenomAuthorityMetadataResponseAmino): _134.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _134.QueryDenomAuthorityMetadataResponse): _134.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _134.QueryDenomAuthorityMetadataResponseAminoMsg): _134.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _134.QueryDenomAuthorityMetadataResponse): _134.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDenomAuthorityMetadataResponseProtoMsg): _134.QueryDenomAuthorityMetadataResponse;
                toProto(message: _134.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDenomAuthorityMetadataResponse): _134.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _134.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_134.QueryDenomsFromCreatorRequest>): _134.QueryDenomsFromCreatorRequest;
                fromAmino(object: _134.QueryDenomsFromCreatorRequestAmino): _134.QueryDenomsFromCreatorRequest;
                toAmino(message: _134.QueryDenomsFromCreatorRequest): _134.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _134.QueryDenomsFromCreatorRequestAminoMsg): _134.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _134.QueryDenomsFromCreatorRequest): _134.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _134.QueryDenomsFromCreatorRequestProtoMsg): _134.QueryDenomsFromCreatorRequest;
                toProto(message: _134.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _134.QueryDenomsFromCreatorRequest): _134.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _134.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_134.QueryDenomsFromCreatorResponse>): _134.QueryDenomsFromCreatorResponse;
                fromAmino(object: _134.QueryDenomsFromCreatorResponseAmino): _134.QueryDenomsFromCreatorResponse;
                toAmino(message: _134.QueryDenomsFromCreatorResponse): _134.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _134.QueryDenomsFromCreatorResponseAminoMsg): _134.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _134.QueryDenomsFromCreatorResponse): _134.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _134.QueryDenomsFromCreatorResponseProtoMsg): _134.QueryDenomsFromCreatorResponse;
                toProto(message: _134.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _134.QueryDenomsFromCreatorResponse): _134.QueryDenomsFromCreatorResponseProtoMsg;
            };
            QueryBeforeSendHookAddressRequest: {
                typeUrl: string;
                encode(message: _134.QueryBeforeSendHookAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryBeforeSendHookAddressRequest;
                fromPartial(object: Partial<_134.QueryBeforeSendHookAddressRequest>): _134.QueryBeforeSendHookAddressRequest;
                fromAmino(object: _134.QueryBeforeSendHookAddressRequestAmino): _134.QueryBeforeSendHookAddressRequest;
                toAmino(message: _134.QueryBeforeSendHookAddressRequest): _134.QueryBeforeSendHookAddressRequestAmino;
                fromAminoMsg(object: _134.QueryBeforeSendHookAddressRequestAminoMsg): _134.QueryBeforeSendHookAddressRequest;
                toAminoMsg(message: _134.QueryBeforeSendHookAddressRequest): _134.QueryBeforeSendHookAddressRequestAminoMsg;
                fromProtoMsg(message: _134.QueryBeforeSendHookAddressRequestProtoMsg): _134.QueryBeforeSendHookAddressRequest;
                toProto(message: _134.QueryBeforeSendHookAddressRequest): Uint8Array;
                toProtoMsg(message: _134.QueryBeforeSendHookAddressRequest): _134.QueryBeforeSendHookAddressRequestProtoMsg;
            };
            QueryBeforeSendHookAddressResponse: {
                typeUrl: string;
                encode(message: _134.QueryBeforeSendHookAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _134.QueryBeforeSendHookAddressResponse;
                fromPartial(object: Partial<_134.QueryBeforeSendHookAddressResponse>): _134.QueryBeforeSendHookAddressResponse;
                fromAmino(object: _134.QueryBeforeSendHookAddressResponseAmino): _134.QueryBeforeSendHookAddressResponse;
                toAmino(message: _134.QueryBeforeSendHookAddressResponse): _134.QueryBeforeSendHookAddressResponseAmino;
                fromAminoMsg(object: _134.QueryBeforeSendHookAddressResponseAminoMsg): _134.QueryBeforeSendHookAddressResponse;
                toAminoMsg(message: _134.QueryBeforeSendHookAddressResponse): _134.QueryBeforeSendHookAddressResponseAminoMsg;
                fromProtoMsg(message: _134.QueryBeforeSendHookAddressResponseProtoMsg): _134.QueryBeforeSendHookAddressResponse;
                toProto(message: _134.QueryBeforeSendHookAddressResponse): Uint8Array;
                toProtoMsg(message: _134.QueryBeforeSendHookAddressResponse): _134.QueryBeforeSendHookAddressResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _133.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Params;
                fromPartial(object: Partial<_133.Params>): _133.Params;
                fromAmino(object: _133.ParamsAmino): _133.Params;
                toAmino(message: _133.Params): _133.ParamsAmino;
                fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
                toAminoMsg(message: _133.Params): _133.ParamsAminoMsg;
                fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
                toProto(message: _133.Params): Uint8Array;
                toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _132.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.GenesisState;
                fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
                fromAmino(object: _132.GenesisStateAmino): _132.GenesisState;
                toAmino(message: _132.GenesisState): _132.GenesisStateAmino;
                fromAminoMsg(object: _132.GenesisStateAminoMsg): _132.GenesisState;
                toAminoMsg(message: _132.GenesisState): _132.GenesisStateAminoMsg;
                fromProtoMsg(message: _132.GenesisStateProtoMsg): _132.GenesisState;
                toProto(message: _132.GenesisState): Uint8Array;
                toProtoMsg(message: _132.GenesisState): _132.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _132.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.GenesisDenom;
                fromPartial(object: Partial<_132.GenesisDenom>): _132.GenesisDenom;
                fromAmino(object: _132.GenesisDenomAmino): _132.GenesisDenom;
                toAmino(message: _132.GenesisDenom): _132.GenesisDenomAmino;
                fromAminoMsg(object: _132.GenesisDenomAminoMsg): _132.GenesisDenom;
                toAminoMsg(message: _132.GenesisDenom): _132.GenesisDenomAminoMsg;
                fromProtoMsg(message: _132.GenesisDenomProtoMsg): _132.GenesisDenom;
                toProto(message: _132.GenesisDenom): Uint8Array;
                toProtoMsg(message: _132.GenesisDenom): _132.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _131.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.DenomAuthorityMetadata;
                fromPartial(object: Partial<_131.DenomAuthorityMetadata>): _131.DenomAuthorityMetadata;
                fromAmino(object: _131.DenomAuthorityMetadataAmino): _131.DenomAuthorityMetadata;
                toAmino(message: _131.DenomAuthorityMetadata): _131.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _131.DenomAuthorityMetadataAminoMsg): _131.DenomAuthorityMetadata;
                toAminoMsg(message: _131.DenomAuthorityMetadata): _131.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _131.DenomAuthorityMetadataProtoMsg): _131.DenomAuthorityMetadata;
                toProto(message: _131.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _131.DenomAuthorityMetadata): _131.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
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
            osmosis: {
                tokenfactory: {
                    v1beta1: _267.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
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
            osmosis: {
                tokenfactory: {
                    v1beta1: {
                        params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _134.QueryDenomAuthorityMetadataRequest): Promise<_134.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _134.QueryDenomsFromCreatorRequest): Promise<_134.QueryDenomsFromCreatorResponse>;
                        beforeSendHookAddress(request: _134.QueryBeforeSendHookAddressRequest): Promise<_134.QueryBeforeSendHookAddressResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
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
            osmosis: {
                tokenfactory: {
                    v1beta1: _265.LCDQueryClient;
                };
            };
        }>;
    };
}
