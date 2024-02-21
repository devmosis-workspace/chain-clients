import * as _44 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _45 from "./tokenfactory/v1beta1/genesis";
import * as _46 from "./tokenfactory/v1beta1/params";
import * as _47 from "./tokenfactory/v1beta1/query";
import * as _48 from "./tokenfactory/v1beta1/tx";
import * as _283 from "./tokenfactory/v1beta1/query.lcd";
import * as _284 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _285 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                denomAuthorityMetadata(request: _47.QueryDenomAuthorityMetadataRequest): Promise<_47.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _47.QueryDenomsFromCreatorRequest): Promise<_47.QueryDenomsFromCreatorResponse>;
                beforeSendHookAddress(request: _47.QueryBeforeSendHookAddressRequest): Promise<_47.QueryBeforeSendHookAddressResponse>;
            };
            LCDQueryClient: typeof _283.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _48.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _48.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _48.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _48.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _48.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBeforeSendHook(value: _48.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forceTransfer(value: _48.MsgForceTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _48.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _48.MsgCreateDenom): {
                        typeUrl: string;
                        value: _48.MsgCreateDenom;
                    };
                    mint(value: _48.MsgMint): {
                        typeUrl: string;
                        value: _48.MsgMint;
                    };
                    burn(value: _48.MsgBurn): {
                        typeUrl: string;
                        value: _48.MsgBurn;
                    };
                    changeAdmin(value: _48.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _48.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _48.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _48.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _48.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _48.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _48.MsgForceTransfer): {
                        typeUrl: string;
                        value: _48.MsgForceTransfer;
                    };
                    updateParams(value: _48.MsgUpdateParams): {
                        typeUrl: string;
                        value: _48.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _48.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _48.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _48.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _48.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _48.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: any): {
                        typeUrl: string;
                        value: _48.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: any): {
                        typeUrl: string;
                        value: _48.MsgForceTransfer;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _48.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createDenom(value: _48.MsgCreateDenom): {
                        typeUrl: string;
                        value: _48.MsgCreateDenom;
                    };
                    mint(value: _48.MsgMint): {
                        typeUrl: string;
                        value: _48.MsgMint;
                    };
                    burn(value: _48.MsgBurn): {
                        typeUrl: string;
                        value: _48.MsgBurn;
                    };
                    changeAdmin(value: _48.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _48.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _48.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _48.MsgSetDenomMetadata;
                    };
                    setBeforeSendHook(value: _48.MsgSetBeforeSendHook): {
                        typeUrl: string;
                        value: _48.MsgSetBeforeSendHook;
                    };
                    forceTransfer(value: _48.MsgForceTransfer): {
                        typeUrl: string;
                        value: _48.MsgForceTransfer;
                    };
                    updateParams(value: _48.MsgUpdateParams): {
                        typeUrl: string;
                        value: _48.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _48.MsgCreateDenom) => _48.MsgCreateDenomAmino;
                    fromAmino: (object: _48.MsgCreateDenomAmino) => _48.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _48.MsgMint) => _48.MsgMintAmino;
                    fromAmino: (object: _48.MsgMintAmino) => _48.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _48.MsgBurn) => _48.MsgBurnAmino;
                    fromAmino: (object: _48.MsgBurnAmino) => _48.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _48.MsgChangeAdmin) => _48.MsgChangeAdminAmino;
                    fromAmino: (object: _48.MsgChangeAdminAmino) => _48.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _48.MsgSetDenomMetadata) => _48.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _48.MsgSetDenomMetadataAmino) => _48.MsgSetDenomMetadata;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
                    aminoType: string;
                    toAmino: (message: _48.MsgSetBeforeSendHook) => _48.MsgSetBeforeSendHookAmino;
                    fromAmino: (object: _48.MsgSetBeforeSendHookAmino) => _48.MsgSetBeforeSendHook;
                };
                "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
                    aminoType: string;
                    toAmino: (message: _48.MsgForceTransfer) => _48.MsgForceTransferAmino;
                    fromAmino: (object: _48.MsgForceTransferAmino) => _48.MsgForceTransfer;
                };
                "/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _48.MsgUpdateParams) => _48.MsgUpdateParamsAmino;
                    fromAmino: (object: _48.MsgUpdateParamsAmino) => _48.MsgUpdateParams;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _48.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgCreateDenom;
                fromPartial(object: Partial<_48.MsgCreateDenom>): _48.MsgCreateDenom;
                fromAmino(object: _48.MsgCreateDenomAmino): _48.MsgCreateDenom;
                toAmino(message: _48.MsgCreateDenom): _48.MsgCreateDenomAmino;
                fromAminoMsg(object: _48.MsgCreateDenomAminoMsg): _48.MsgCreateDenom;
                toAminoMsg(message: _48.MsgCreateDenom): _48.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _48.MsgCreateDenomProtoMsg): _48.MsgCreateDenom;
                toProto(message: _48.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _48.MsgCreateDenom): _48.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _48.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgCreateDenomResponse;
                fromPartial(object: Partial<_48.MsgCreateDenomResponse>): _48.MsgCreateDenomResponse;
                fromAmino(object: _48.MsgCreateDenomResponseAmino): _48.MsgCreateDenomResponse;
                toAmino(message: _48.MsgCreateDenomResponse): _48.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _48.MsgCreateDenomResponseAminoMsg): _48.MsgCreateDenomResponse;
                toAminoMsg(message: _48.MsgCreateDenomResponse): _48.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _48.MsgCreateDenomResponseProtoMsg): _48.MsgCreateDenomResponse;
                toProto(message: _48.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _48.MsgCreateDenomResponse): _48.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _48.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgMint;
                fromPartial(object: Partial<_48.MsgMint>): _48.MsgMint;
                fromAmino(object: _48.MsgMintAmino): _48.MsgMint;
                toAmino(message: _48.MsgMint): _48.MsgMintAmino;
                fromAminoMsg(object: _48.MsgMintAminoMsg): _48.MsgMint;
                toAminoMsg(message: _48.MsgMint): _48.MsgMintAminoMsg;
                fromProtoMsg(message: _48.MsgMintProtoMsg): _48.MsgMint;
                toProto(message: _48.MsgMint): Uint8Array;
                toProtoMsg(message: _48.MsgMint): _48.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _48.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgMintResponse;
                fromPartial(_: Partial<_48.MsgMintResponse>): _48.MsgMintResponse;
                fromAmino(_: _48.MsgMintResponseAmino): _48.MsgMintResponse;
                toAmino(_: _48.MsgMintResponse): _48.MsgMintResponseAmino;
                fromAminoMsg(object: _48.MsgMintResponseAminoMsg): _48.MsgMintResponse;
                toAminoMsg(message: _48.MsgMintResponse): _48.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _48.MsgMintResponseProtoMsg): _48.MsgMintResponse;
                toProto(message: _48.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _48.MsgMintResponse): _48.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _48.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgBurn;
                fromPartial(object: Partial<_48.MsgBurn>): _48.MsgBurn;
                fromAmino(object: _48.MsgBurnAmino): _48.MsgBurn;
                toAmino(message: _48.MsgBurn): _48.MsgBurnAmino;
                fromAminoMsg(object: _48.MsgBurnAminoMsg): _48.MsgBurn;
                toAminoMsg(message: _48.MsgBurn): _48.MsgBurnAminoMsg;
                fromProtoMsg(message: _48.MsgBurnProtoMsg): _48.MsgBurn;
                toProto(message: _48.MsgBurn): Uint8Array;
                toProtoMsg(message: _48.MsgBurn): _48.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _48.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgBurnResponse;
                fromPartial(_: Partial<_48.MsgBurnResponse>): _48.MsgBurnResponse;
                fromAmino(_: _48.MsgBurnResponseAmino): _48.MsgBurnResponse;
                toAmino(_: _48.MsgBurnResponse): _48.MsgBurnResponseAmino;
                fromAminoMsg(object: _48.MsgBurnResponseAminoMsg): _48.MsgBurnResponse;
                toAminoMsg(message: _48.MsgBurnResponse): _48.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _48.MsgBurnResponseProtoMsg): _48.MsgBurnResponse;
                toProto(message: _48.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _48.MsgBurnResponse): _48.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _48.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgChangeAdmin;
                fromPartial(object: Partial<_48.MsgChangeAdmin>): _48.MsgChangeAdmin;
                fromAmino(object: _48.MsgChangeAdminAmino): _48.MsgChangeAdmin;
                toAmino(message: _48.MsgChangeAdmin): _48.MsgChangeAdminAmino;
                fromAminoMsg(object: _48.MsgChangeAdminAminoMsg): _48.MsgChangeAdmin;
                toAminoMsg(message: _48.MsgChangeAdmin): _48.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _48.MsgChangeAdminProtoMsg): _48.MsgChangeAdmin;
                toProto(message: _48.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _48.MsgChangeAdmin): _48.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _48.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgChangeAdminResponse;
                fromPartial(_: Partial<_48.MsgChangeAdminResponse>): _48.MsgChangeAdminResponse;
                fromAmino(_: _48.MsgChangeAdminResponseAmino): _48.MsgChangeAdminResponse;
                toAmino(_: _48.MsgChangeAdminResponse): _48.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _48.MsgChangeAdminResponseAminoMsg): _48.MsgChangeAdminResponse;
                toAminoMsg(message: _48.MsgChangeAdminResponse): _48.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _48.MsgChangeAdminResponseProtoMsg): _48.MsgChangeAdminResponse;
                toProto(message: _48.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _48.MsgChangeAdminResponse): _48.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetBeforeSendHook: {
                typeUrl: string;
                encode(message: _48.MsgSetBeforeSendHook, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgSetBeforeSendHook;
                fromPartial(object: Partial<_48.MsgSetBeforeSendHook>): _48.MsgSetBeforeSendHook;
                fromAmino(object: _48.MsgSetBeforeSendHookAmino): _48.MsgSetBeforeSendHook;
                toAmino(message: _48.MsgSetBeforeSendHook): _48.MsgSetBeforeSendHookAmino;
                fromAminoMsg(object: _48.MsgSetBeforeSendHookAminoMsg): _48.MsgSetBeforeSendHook;
                toAminoMsg(message: _48.MsgSetBeforeSendHook): _48.MsgSetBeforeSendHookAminoMsg;
                fromProtoMsg(message: _48.MsgSetBeforeSendHookProtoMsg): _48.MsgSetBeforeSendHook;
                toProto(message: _48.MsgSetBeforeSendHook): Uint8Array;
                toProtoMsg(message: _48.MsgSetBeforeSendHook): _48.MsgSetBeforeSendHookProtoMsg;
            };
            MsgSetBeforeSendHookResponse: {
                typeUrl: string;
                encode(_: _48.MsgSetBeforeSendHookResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgSetBeforeSendHookResponse;
                fromPartial(_: Partial<_48.MsgSetBeforeSendHookResponse>): _48.MsgSetBeforeSendHookResponse;
                fromAmino(_: _48.MsgSetBeforeSendHookResponseAmino): _48.MsgSetBeforeSendHookResponse;
                toAmino(_: _48.MsgSetBeforeSendHookResponse): _48.MsgSetBeforeSendHookResponseAmino;
                fromAminoMsg(object: _48.MsgSetBeforeSendHookResponseAminoMsg): _48.MsgSetBeforeSendHookResponse;
                toAminoMsg(message: _48.MsgSetBeforeSendHookResponse): _48.MsgSetBeforeSendHookResponseAminoMsg;
                fromProtoMsg(message: _48.MsgSetBeforeSendHookResponseProtoMsg): _48.MsgSetBeforeSendHookResponse;
                toProto(message: _48.MsgSetBeforeSendHookResponse): Uint8Array;
                toProtoMsg(message: _48.MsgSetBeforeSendHookResponse): _48.MsgSetBeforeSendHookResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _48.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgSetDenomMetadata;
                fromPartial(object: Partial<_48.MsgSetDenomMetadata>): _48.MsgSetDenomMetadata;
                fromAmino(object: _48.MsgSetDenomMetadataAmino): _48.MsgSetDenomMetadata;
                toAmino(message: _48.MsgSetDenomMetadata): _48.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _48.MsgSetDenomMetadataAminoMsg): _48.MsgSetDenomMetadata;
                toAminoMsg(message: _48.MsgSetDenomMetadata): _48.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _48.MsgSetDenomMetadataProtoMsg): _48.MsgSetDenomMetadata;
                toProto(message: _48.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _48.MsgSetDenomMetadata): _48.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _48.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_48.MsgSetDenomMetadataResponse>): _48.MsgSetDenomMetadataResponse;
                fromAmino(_: _48.MsgSetDenomMetadataResponseAmino): _48.MsgSetDenomMetadataResponse;
                toAmino(_: _48.MsgSetDenomMetadataResponse): _48.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _48.MsgSetDenomMetadataResponseAminoMsg): _48.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _48.MsgSetDenomMetadataResponse): _48.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _48.MsgSetDenomMetadataResponseProtoMsg): _48.MsgSetDenomMetadataResponse;
                toProto(message: _48.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _48.MsgSetDenomMetadataResponse): _48.MsgSetDenomMetadataResponseProtoMsg;
            };
            MsgForceTransfer: {
                typeUrl: string;
                encode(message: _48.MsgForceTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgForceTransfer;
                fromPartial(object: Partial<_48.MsgForceTransfer>): _48.MsgForceTransfer;
                fromAmino(object: _48.MsgForceTransferAmino): _48.MsgForceTransfer;
                toAmino(message: _48.MsgForceTransfer): _48.MsgForceTransferAmino;
                fromAminoMsg(object: _48.MsgForceTransferAminoMsg): _48.MsgForceTransfer;
                toAminoMsg(message: _48.MsgForceTransfer): _48.MsgForceTransferAminoMsg;
                fromProtoMsg(message: _48.MsgForceTransferProtoMsg): _48.MsgForceTransfer;
                toProto(message: _48.MsgForceTransfer): Uint8Array;
                toProtoMsg(message: _48.MsgForceTransfer): _48.MsgForceTransferProtoMsg;
            };
            MsgForceTransferResponse: {
                typeUrl: string;
                encode(_: _48.MsgForceTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgForceTransferResponse;
                fromPartial(_: Partial<_48.MsgForceTransferResponse>): _48.MsgForceTransferResponse;
                fromAmino(_: _48.MsgForceTransferResponseAmino): _48.MsgForceTransferResponse;
                toAmino(_: _48.MsgForceTransferResponse): _48.MsgForceTransferResponseAmino;
                fromAminoMsg(object: _48.MsgForceTransferResponseAminoMsg): _48.MsgForceTransferResponse;
                toAminoMsg(message: _48.MsgForceTransferResponse): _48.MsgForceTransferResponseAminoMsg;
                fromProtoMsg(message: _48.MsgForceTransferResponseProtoMsg): _48.MsgForceTransferResponse;
                toProto(message: _48.MsgForceTransferResponse): Uint8Array;
                toProtoMsg(message: _48.MsgForceTransferResponse): _48.MsgForceTransferResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _48.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _48.MsgUpdateParams;
                fromPartial(object: Partial<_48.MsgUpdateParams>): _48.MsgUpdateParams;
                fromAmino(object: _48.MsgUpdateParamsAmino): _48.MsgUpdateParams;
                toAmino(message: _48.MsgUpdateParams): _48.MsgUpdateParamsAmino;
                fromAminoMsg(object: _48.MsgUpdateParamsAminoMsg): _48.MsgUpdateParams;
                toAminoMsg(message: _48.MsgUpdateParams): _48.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _48.MsgUpdateParamsProtoMsg): _48.MsgUpdateParams;
                toProto(message: _48.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _48.MsgUpdateParams): _48.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _48.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _48.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_48.MsgUpdateParamsResponse>): _48.MsgUpdateParamsResponse;
                fromAmino(_: _48.MsgUpdateParamsResponseAmino): _48.MsgUpdateParamsResponse;
                toAmino(_: _48.MsgUpdateParamsResponse): _48.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _48.MsgUpdateParamsResponseAminoMsg): _48.MsgUpdateParamsResponse;
                toAminoMsg(message: _48.MsgUpdateParamsResponse): _48.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _48.MsgUpdateParamsResponseProtoMsg): _48.MsgUpdateParamsResponse;
                toProto(message: _48.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _48.MsgUpdateParamsResponse): _48.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _47.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _47.QueryParamsRequest;
                fromPartial(_: Partial<_47.QueryParamsRequest>): _47.QueryParamsRequest;
                fromAmino(_: _47.QueryParamsRequestAmino): _47.QueryParamsRequest;
                toAmino(_: _47.QueryParamsRequest): _47.QueryParamsRequestAmino;
                fromAminoMsg(object: _47.QueryParamsRequestAminoMsg): _47.QueryParamsRequest;
                toAminoMsg(message: _47.QueryParamsRequest): _47.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryParamsRequestProtoMsg): _47.QueryParamsRequest;
                toProto(message: _47.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryParamsRequest): _47.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _47.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryParamsResponse;
                fromPartial(object: Partial<_47.QueryParamsResponse>): _47.QueryParamsResponse;
                fromAmino(object: _47.QueryParamsResponseAmino): _47.QueryParamsResponse;
                toAmino(message: _47.QueryParamsResponse): _47.QueryParamsResponseAmino;
                fromAminoMsg(object: _47.QueryParamsResponseAminoMsg): _47.QueryParamsResponse;
                toAminoMsg(message: _47.QueryParamsResponse): _47.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryParamsResponseProtoMsg): _47.QueryParamsResponse;
                toProto(message: _47.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryParamsResponse): _47.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _47.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_47.QueryDenomAuthorityMetadataRequest>): _47.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _47.QueryDenomAuthorityMetadataRequestAmino): _47.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _47.QueryDenomAuthorityMetadataRequest): _47.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _47.QueryDenomAuthorityMetadataRequestAminoMsg): _47.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _47.QueryDenomAuthorityMetadataRequest): _47.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _47.QueryDenomAuthorityMetadataRequestProtoMsg): _47.QueryDenomAuthorityMetadataRequest;
                toProto(message: _47.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _47.QueryDenomAuthorityMetadataRequest): _47.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _47.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_47.QueryDenomAuthorityMetadataResponse>): _47.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _47.QueryDenomAuthorityMetadataResponseAmino): _47.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _47.QueryDenomAuthorityMetadataResponse): _47.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _47.QueryDenomAuthorityMetadataResponseAminoMsg): _47.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _47.QueryDenomAuthorityMetadataResponse): _47.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _47.QueryDenomAuthorityMetadataResponseProtoMsg): _47.QueryDenomAuthorityMetadataResponse;
                toProto(message: _47.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _47.QueryDenomAuthorityMetadataResponse): _47.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _47.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_47.QueryDenomsFromCreatorRequest>): _47.QueryDenomsFromCreatorRequest;
                fromAmino(object: _47.QueryDenomsFromCreatorRequestAmino): _47.QueryDenomsFromCreatorRequest;
                toAmino(message: _47.QueryDenomsFromCreatorRequest): _47.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _47.QueryDenomsFromCreatorRequestAminoMsg): _47.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _47.QueryDenomsFromCreatorRequest): _47.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _47.QueryDenomsFromCreatorRequestProtoMsg): _47.QueryDenomsFromCreatorRequest;
                toProto(message: _47.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _47.QueryDenomsFromCreatorRequest): _47.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _47.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_47.QueryDenomsFromCreatorResponse>): _47.QueryDenomsFromCreatorResponse;
                fromAmino(object: _47.QueryDenomsFromCreatorResponseAmino): _47.QueryDenomsFromCreatorResponse;
                toAmino(message: _47.QueryDenomsFromCreatorResponse): _47.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _47.QueryDenomsFromCreatorResponseAminoMsg): _47.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _47.QueryDenomsFromCreatorResponse): _47.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _47.QueryDenomsFromCreatorResponseProtoMsg): _47.QueryDenomsFromCreatorResponse;
                toProto(message: _47.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _47.QueryDenomsFromCreatorResponse): _47.QueryDenomsFromCreatorResponseProtoMsg;
            };
            QueryBeforeSendHookAddressRequest: {
                typeUrl: string;
                encode(message: _47.QueryBeforeSendHookAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryBeforeSendHookAddressRequest;
                fromPartial(object: Partial<_47.QueryBeforeSendHookAddressRequest>): _47.QueryBeforeSendHookAddressRequest;
                fromAmino(object: _47.QueryBeforeSendHookAddressRequestAmino): _47.QueryBeforeSendHookAddressRequest;
                toAmino(message: _47.QueryBeforeSendHookAddressRequest): _47.QueryBeforeSendHookAddressRequestAmino;
                fromAminoMsg(object: _47.QueryBeforeSendHookAddressRequestAminoMsg): _47.QueryBeforeSendHookAddressRequest;
                toAminoMsg(message: _47.QueryBeforeSendHookAddressRequest): _47.QueryBeforeSendHookAddressRequestAminoMsg;
                fromProtoMsg(message: _47.QueryBeforeSendHookAddressRequestProtoMsg): _47.QueryBeforeSendHookAddressRequest;
                toProto(message: _47.QueryBeforeSendHookAddressRequest): Uint8Array;
                toProtoMsg(message: _47.QueryBeforeSendHookAddressRequest): _47.QueryBeforeSendHookAddressRequestProtoMsg;
            };
            QueryBeforeSendHookAddressResponse: {
                typeUrl: string;
                encode(message: _47.QueryBeforeSendHookAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _47.QueryBeforeSendHookAddressResponse;
                fromPartial(object: Partial<_47.QueryBeforeSendHookAddressResponse>): _47.QueryBeforeSendHookAddressResponse;
                fromAmino(object: _47.QueryBeforeSendHookAddressResponseAmino): _47.QueryBeforeSendHookAddressResponse;
                toAmino(message: _47.QueryBeforeSendHookAddressResponse): _47.QueryBeforeSendHookAddressResponseAmino;
                fromAminoMsg(object: _47.QueryBeforeSendHookAddressResponseAminoMsg): _47.QueryBeforeSendHookAddressResponse;
                toAminoMsg(message: _47.QueryBeforeSendHookAddressResponse): _47.QueryBeforeSendHookAddressResponseAminoMsg;
                fromProtoMsg(message: _47.QueryBeforeSendHookAddressResponseProtoMsg): _47.QueryBeforeSendHookAddressResponse;
                toProto(message: _47.QueryBeforeSendHookAddressResponse): Uint8Array;
                toProtoMsg(message: _47.QueryBeforeSendHookAddressResponse): _47.QueryBeforeSendHookAddressResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _46.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _46.Params;
                fromPartial(object: Partial<_46.Params>): _46.Params;
                fromAmino(object: _46.ParamsAmino): _46.Params;
                toAmino(message: _46.Params): _46.ParamsAmino;
                fromAminoMsg(object: _46.ParamsAminoMsg): _46.Params;
                toAminoMsg(message: _46.Params): _46.ParamsAminoMsg;
                fromProtoMsg(message: _46.ParamsProtoMsg): _46.Params;
                toProto(message: _46.Params): Uint8Array;
                toProtoMsg(message: _46.Params): _46.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _45.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.GenesisState;
                fromPartial(object: Partial<_45.GenesisState>): _45.GenesisState;
                fromAmino(object: _45.GenesisStateAmino): _45.GenesisState;
                toAmino(message: _45.GenesisState): _45.GenesisStateAmino;
                fromAminoMsg(object: _45.GenesisStateAminoMsg): _45.GenesisState;
                toAminoMsg(message: _45.GenesisState): _45.GenesisStateAminoMsg;
                fromProtoMsg(message: _45.GenesisStateProtoMsg): _45.GenesisState;
                toProto(message: _45.GenesisState): Uint8Array;
                toProtoMsg(message: _45.GenesisState): _45.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _45.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.GenesisDenom;
                fromPartial(object: Partial<_45.GenesisDenom>): _45.GenesisDenom;
                fromAmino(object: _45.GenesisDenomAmino): _45.GenesisDenom;
                toAmino(message: _45.GenesisDenom): _45.GenesisDenomAmino;
                fromAminoMsg(object: _45.GenesisDenomAminoMsg): _45.GenesisDenom;
                toAminoMsg(message: _45.GenesisDenom): _45.GenesisDenomAminoMsg;
                fromProtoMsg(message: _45.GenesisDenomProtoMsg): _45.GenesisDenom;
                toProto(message: _45.GenesisDenom): Uint8Array;
                toProtoMsg(message: _45.GenesisDenom): _45.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _44.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.DenomAuthorityMetadata;
                fromPartial(object: Partial<_44.DenomAuthorityMetadata>): _44.DenomAuthorityMetadata;
                fromAmino(object: _44.DenomAuthorityMetadataAmino): _44.DenomAuthorityMetadata;
                toAmino(message: _44.DenomAuthorityMetadata): _44.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _44.DenomAuthorityMetadataAminoMsg): _44.DenomAuthorityMetadata;
                toAminoMsg(message: _44.DenomAuthorityMetadata): _44.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _44.DenomAuthorityMetadataProtoMsg): _44.DenomAuthorityMetadata;
                toProto(message: _44.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _44.DenomAuthorityMetadata): _44.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            osmosis: {
                tokenfactory: {
                    v1beta1: _285.MsgClientImpl;
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
                        params(request?: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _47.QueryDenomAuthorityMetadataRequest): Promise<_47.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _47.QueryDenomsFromCreatorRequest): Promise<_47.QueryDenomsFromCreatorResponse>;
                        beforeSendHookAddress(request: _47.QueryBeforeSendHookAddressRequest): Promise<_47.QueryBeforeSendHookAddressResponse>;
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
                    v1beta1: _283.LCDQueryClient;
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
