import * as _0 from "./v1/genesis";
import * as _1 from "../icaauth/v1/genesis";
import * as _2 from "../icaauth/v1/params";
import * as _3 from "../icaauth/v1/query";
import * as _4 from "../icaauth/v1/tx";
import * as _5 from "../nft_transfer/v1/genesis";
import * as _6 from "../nft_transfer/v1/packet";
import * as _7 from "../nft_transfer/v1/query";
import * as _8 from "../nft_transfer/v1/trace";
import * as _9 from "../nft_transfer/v1/tx";
import * as _10 from "../nft/v1/genesis";
import * as _11 from "../nft/v1/nft";
import * as _12 from "../nft/v1/query";
import * as _13 from "../nft/v1/tx";
import * as _14 from "../supply/v1/accounts";
import * as _15 from "../supply/v1/genesis";
import * as _16 from "../supply/v1/query";
import * as _176 from "../icaauth/v1/query.lcd";
import * as _177 from "../nft_transfer/v1/query.lcd";
import * as _178 from "../nft/v1/query.lcd";
import * as _179 from "../supply/v1/query.lcd";
import * as _180 from "../icaauth/v1/query.rpc.Query";
import * as _181 from "../nft_transfer/v1/query.rpc.Query";
import * as _182 from "../nft/v1/query.rpc.Query";
import * as _183 from "../supply/v1/query.rpc.Query";
import * as _184 from "../icaauth/v1/tx.rpc.msg";
import * as _185 from "../nft_transfer/v1/tx.rpc.msg";
import * as _186 from "../nft/v1/tx.rpc.msg";
export declare namespace chainmain {
    namespace chainmain {
        const v1: {
            GenesisState: {
                typeUrl: string;
                encode(_: _0.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _0.GenesisState;
                fromPartial(_: Partial<_0.GenesisState>): _0.GenesisState;
                fromAmino(_: _0.GenesisStateAmino): _0.GenesisState;
                toAmino(_: _0.GenesisState): _0.GenesisStateAmino;
                fromAminoMsg(object: _0.GenesisStateAminoMsg): _0.GenesisState;
                fromProtoMsg(message: _0.GenesisStateProtoMsg): _0.GenesisState;
                toProto(message: _0.GenesisState): Uint8Array;
                toProtoMsg(message: _0.GenesisState): _0.GenesisStateProtoMsg;
            };
        };
    }
    namespace icaauth {
        const v1: {
            MsgClientImpl: typeof _184.MsgClientImpl;
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                interchainAccountAddress(request: _3.QueryInterchainAccountAddressRequest): Promise<_3.QueryInterchainAccountAddressResponse>;
            };
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _4.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _4.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _4.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _4.MsgRegisterAccount;
                    };
                    submitTx(value: _4.MsgSubmitTx): {
                        typeUrl: string;
                        value: _4.MsgSubmitTx;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _4.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _4.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _4.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _4.MsgRegisterAccount;
                    };
                    submitTx(value: _4.MsgSubmitTx): {
                        typeUrl: string;
                        value: _4.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/chainmain.icaauth.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: (message: _4.MsgRegisterAccount) => _4.MsgRegisterAccountAmino;
                    fromAmino: (object: _4.MsgRegisterAccountAmino) => _4.MsgRegisterAccount;
                };
                "/chainmain.icaauth.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: _4.MsgSubmitTx) => _4.MsgSubmitTxAmino;
                    fromAmino: (object: _4.MsgSubmitTxAmino) => _4.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                typeUrl: string;
                encode(message: _4.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgRegisterAccount;
                fromPartial(object: Partial<_4.MsgRegisterAccount>): _4.MsgRegisterAccount;
                fromAmino(object: _4.MsgRegisterAccountAmino): _4.MsgRegisterAccount;
                toAmino(message: _4.MsgRegisterAccount): _4.MsgRegisterAccountAmino;
                fromAminoMsg(object: _4.MsgRegisterAccountAminoMsg): _4.MsgRegisterAccount;
                fromProtoMsg(message: _4.MsgRegisterAccountProtoMsg): _4.MsgRegisterAccount;
                toProto(message: _4.MsgRegisterAccount): Uint8Array;
                toProtoMsg(message: _4.MsgRegisterAccount): _4.MsgRegisterAccountProtoMsg;
            };
            MsgRegisterAccountResponse: {
                typeUrl: string;
                encode(_: _4.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.MsgRegisterAccountResponse;
                fromPartial(_: Partial<_4.MsgRegisterAccountResponse>): _4.MsgRegisterAccountResponse;
                fromAmino(_: _4.MsgRegisterAccountResponseAmino): _4.MsgRegisterAccountResponse;
                toAmino(_: _4.MsgRegisterAccountResponse): _4.MsgRegisterAccountResponseAmino;
                fromAminoMsg(object: _4.MsgRegisterAccountResponseAminoMsg): _4.MsgRegisterAccountResponse;
                fromProtoMsg(message: _4.MsgRegisterAccountResponseProtoMsg): _4.MsgRegisterAccountResponse;
                toProto(message: _4.MsgRegisterAccountResponse): Uint8Array;
                toProtoMsg(message: _4.MsgRegisterAccountResponse): _4.MsgRegisterAccountResponseProtoMsg;
            };
            MsgSubmitTx: {
                typeUrl: string;
                encode(message: _4.MsgSubmitTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgSubmitTx;
                fromPartial(object: Partial<_4.MsgSubmitTx>): _4.MsgSubmitTx;
                fromAmino(object: _4.MsgSubmitTxAmino): _4.MsgSubmitTx;
                toAmino(message: _4.MsgSubmitTx): _4.MsgSubmitTxAmino;
                fromAminoMsg(object: _4.MsgSubmitTxAminoMsg): _4.MsgSubmitTx;
                fromProtoMsg(message: _4.MsgSubmitTxProtoMsg): _4.MsgSubmitTx;
                toProto(message: _4.MsgSubmitTx): Uint8Array;
                toProtoMsg(message: _4.MsgSubmitTx): _4.MsgSubmitTxProtoMsg;
            };
            MsgSubmitTxResponse: {
                typeUrl: string;
                encode(_: _4.MsgSubmitTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.MsgSubmitTxResponse;
                fromPartial(_: Partial<_4.MsgSubmitTxResponse>): _4.MsgSubmitTxResponse;
                fromAmino(_: _4.MsgSubmitTxResponseAmino): _4.MsgSubmitTxResponse;
                toAmino(_: _4.MsgSubmitTxResponse): _4.MsgSubmitTxResponseAmino;
                fromAminoMsg(object: _4.MsgSubmitTxResponseAminoMsg): _4.MsgSubmitTxResponse;
                fromProtoMsg(message: _4.MsgSubmitTxResponseProtoMsg): _4.MsgSubmitTxResponse;
                toProto(message: _4.MsgSubmitTxResponse): Uint8Array;
                toProtoMsg(message: _4.MsgSubmitTxResponse): _4.MsgSubmitTxResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
                fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
                toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
                fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
                fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
                toProto(message: _3.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _3.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
                fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
                toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
                fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
                fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
                toProto(message: _3.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
            };
            QueryInterchainAccountAddressRequest: {
                typeUrl: string;
                encode(message: _3.QueryInterchainAccountAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryInterchainAccountAddressRequest;
                fromPartial(object: Partial<_3.QueryInterchainAccountAddressRequest>): _3.QueryInterchainAccountAddressRequest;
                fromAmino(object: _3.QueryInterchainAccountAddressRequestAmino): _3.QueryInterchainAccountAddressRequest;
                toAmino(message: _3.QueryInterchainAccountAddressRequest): _3.QueryInterchainAccountAddressRequestAmino;
                fromAminoMsg(object: _3.QueryInterchainAccountAddressRequestAminoMsg): _3.QueryInterchainAccountAddressRequest;
                fromProtoMsg(message: _3.QueryInterchainAccountAddressRequestProtoMsg): _3.QueryInterchainAccountAddressRequest;
                toProto(message: _3.QueryInterchainAccountAddressRequest): Uint8Array;
                toProtoMsg(message: _3.QueryInterchainAccountAddressRequest): _3.QueryInterchainAccountAddressRequestProtoMsg;
            };
            QueryInterchainAccountAddressResponse: {
                typeUrl: string;
                encode(message: _3.QueryInterchainAccountAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryInterchainAccountAddressResponse;
                fromPartial(object: Partial<_3.QueryInterchainAccountAddressResponse>): _3.QueryInterchainAccountAddressResponse;
                fromAmino(object: _3.QueryInterchainAccountAddressResponseAmino): _3.QueryInterchainAccountAddressResponse;
                toAmino(message: _3.QueryInterchainAccountAddressResponse): _3.QueryInterchainAccountAddressResponseAmino;
                fromAminoMsg(object: _3.QueryInterchainAccountAddressResponseAminoMsg): _3.QueryInterchainAccountAddressResponse;
                fromProtoMsg(message: _3.QueryInterchainAccountAddressResponseProtoMsg): _3.QueryInterchainAccountAddressResponse;
                toProto(message: _3.QueryInterchainAccountAddressResponse): Uint8Array;
                toProtoMsg(message: _3.QueryInterchainAccountAddressResponse): _3.QueryInterchainAccountAddressResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _1.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
                fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
                toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
                fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
                fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
                toProto(message: _1.GenesisState): Uint8Array;
                toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
            };
        };
    }
    namespace nft_transfer {
        const v1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classTrace(request: _7.QueryClassTraceRequest): Promise<_7.QueryClassTraceResponse>;
                classTraces(request?: _7.QueryClassTracesRequest): Promise<_7.QueryClassTracesResponse>;
                classHash(request: _7.QueryClassHashRequest): Promise<_7.QueryClassHashResponse>;
                escrowAddress(request: _7.QueryEscrowAddressRequest): Promise<_7.QueryEscrowAddressResponse>;
            };
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    transfer(value: _9.MsgTransfer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    transfer(value: _9.MsgTransfer): {
                        typeUrl: string;
                        value: _9.MsgTransfer;
                    };
                };
                fromJSON: {
                    transfer(value: any): {
                        typeUrl: string;
                        value: _9.MsgTransfer;
                    };
                };
                fromPartial: {
                    transfer(value: _9.MsgTransfer): {
                        typeUrl: string;
                        value: _9.MsgTransfer;
                    };
                };
            };
            AminoConverter: {
                "/chainmain.nft_transfer.v1.MsgTransfer": {
                    aminoType: string;
                    toAmino: (message: _9.MsgTransfer) => _9.MsgTransferAmino;
                    fromAmino: (object: _9.MsgTransferAmino) => _9.MsgTransfer;
                };
            };
            MsgTransfer: {
                typeUrl: string;
                encode(message: _9.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.MsgTransfer;
                fromPartial(object: Partial<_9.MsgTransfer>): _9.MsgTransfer;
                fromAmino(object: _9.MsgTransferAmino): _9.MsgTransfer;
                toAmino(message: _9.MsgTransfer): _9.MsgTransferAmino;
                fromAminoMsg(object: _9.MsgTransferAminoMsg): _9.MsgTransfer;
                fromProtoMsg(message: _9.MsgTransferProtoMsg): _9.MsgTransfer;
                toProto(message: _9.MsgTransfer): Uint8Array;
                toProtoMsg(message: _9.MsgTransfer): _9.MsgTransferProtoMsg;
            };
            MsgTransferResponse: {
                typeUrl: string;
                encode(_: _9.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _9.MsgTransferResponse;
                fromPartial(_: Partial<_9.MsgTransferResponse>): _9.MsgTransferResponse;
                fromAmino(_: _9.MsgTransferResponseAmino): _9.MsgTransferResponse;
                toAmino(_: _9.MsgTransferResponse): _9.MsgTransferResponseAmino;
                fromAminoMsg(object: _9.MsgTransferResponseAminoMsg): _9.MsgTransferResponse;
                fromProtoMsg(message: _9.MsgTransferResponseProtoMsg): _9.MsgTransferResponse;
                toProto(message: _9.MsgTransferResponse): Uint8Array;
                toProtoMsg(message: _9.MsgTransferResponse): _9.MsgTransferResponseProtoMsg;
            };
            ClassTrace: {
                typeUrl: string;
                encode(message: _8.ClassTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.ClassTrace;
                fromPartial(object: Partial<_8.ClassTrace>): _8.ClassTrace;
                fromAmino(object: _8.ClassTraceAmino): _8.ClassTrace;
                toAmino(message: _8.ClassTrace): _8.ClassTraceAmino;
                fromAminoMsg(object: _8.ClassTraceAminoMsg): _8.ClassTrace;
                fromProtoMsg(message: _8.ClassTraceProtoMsg): _8.ClassTrace;
                toProto(message: _8.ClassTrace): Uint8Array;
                toProtoMsg(message: _8.ClassTrace): _8.ClassTraceProtoMsg;
            };
            QueryClassTraceRequest: {
                typeUrl: string;
                encode(message: _7.QueryClassTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryClassTraceRequest;
                fromPartial(object: Partial<_7.QueryClassTraceRequest>): _7.QueryClassTraceRequest;
                fromAmino(object: _7.QueryClassTraceRequestAmino): _7.QueryClassTraceRequest;
                toAmino(message: _7.QueryClassTraceRequest): _7.QueryClassTraceRequestAmino;
                fromAminoMsg(object: _7.QueryClassTraceRequestAminoMsg): _7.QueryClassTraceRequest;
                fromProtoMsg(message: _7.QueryClassTraceRequestProtoMsg): _7.QueryClassTraceRequest;
                toProto(message: _7.QueryClassTraceRequest): Uint8Array;
                toProtoMsg(message: _7.QueryClassTraceRequest): _7.QueryClassTraceRequestProtoMsg;
            };
            QueryClassTraceResponse: {
                typeUrl: string;
                encode(message: _7.QueryClassTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryClassTraceResponse;
                fromPartial(object: Partial<_7.QueryClassTraceResponse>): _7.QueryClassTraceResponse;
                fromAmino(object: _7.QueryClassTraceResponseAmino): _7.QueryClassTraceResponse;
                toAmino(message: _7.QueryClassTraceResponse): _7.QueryClassTraceResponseAmino;
                fromAminoMsg(object: _7.QueryClassTraceResponseAminoMsg): _7.QueryClassTraceResponse;
                fromProtoMsg(message: _7.QueryClassTraceResponseProtoMsg): _7.QueryClassTraceResponse;
                toProto(message: _7.QueryClassTraceResponse): Uint8Array;
                toProtoMsg(message: _7.QueryClassTraceResponse): _7.QueryClassTraceResponseProtoMsg;
            };
            QueryClassTracesRequest: {
                typeUrl: string;
                encode(message: _7.QueryClassTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryClassTracesRequest;
                fromPartial(object: Partial<_7.QueryClassTracesRequest>): _7.QueryClassTracesRequest;
                fromAmino(object: _7.QueryClassTracesRequestAmino): _7.QueryClassTracesRequest;
                toAmino(message: _7.QueryClassTracesRequest): _7.QueryClassTracesRequestAmino;
                fromAminoMsg(object: _7.QueryClassTracesRequestAminoMsg): _7.QueryClassTracesRequest;
                fromProtoMsg(message: _7.QueryClassTracesRequestProtoMsg): _7.QueryClassTracesRequest;
                toProto(message: _7.QueryClassTracesRequest): Uint8Array;
                toProtoMsg(message: _7.QueryClassTracesRequest): _7.QueryClassTracesRequestProtoMsg;
            };
            QueryClassTracesResponse: {
                typeUrl: string;
                encode(message: _7.QueryClassTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryClassTracesResponse;
                fromPartial(object: Partial<_7.QueryClassTracesResponse>): _7.QueryClassTracesResponse;
                fromAmino(object: _7.QueryClassTracesResponseAmino): _7.QueryClassTracesResponse;
                toAmino(message: _7.QueryClassTracesResponse): _7.QueryClassTracesResponseAmino;
                fromAminoMsg(object: _7.QueryClassTracesResponseAminoMsg): _7.QueryClassTracesResponse;
                fromProtoMsg(message: _7.QueryClassTracesResponseProtoMsg): _7.QueryClassTracesResponse;
                toProto(message: _7.QueryClassTracesResponse): Uint8Array;
                toProtoMsg(message: _7.QueryClassTracesResponse): _7.QueryClassTracesResponseProtoMsg;
            };
            QueryClassHashRequest: {
                typeUrl: string;
                encode(message: _7.QueryClassHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryClassHashRequest;
                fromPartial(object: Partial<_7.QueryClassHashRequest>): _7.QueryClassHashRequest;
                fromAmino(object: _7.QueryClassHashRequestAmino): _7.QueryClassHashRequest;
                toAmino(message: _7.QueryClassHashRequest): _7.QueryClassHashRequestAmino;
                fromAminoMsg(object: _7.QueryClassHashRequestAminoMsg): _7.QueryClassHashRequest;
                fromProtoMsg(message: _7.QueryClassHashRequestProtoMsg): _7.QueryClassHashRequest;
                toProto(message: _7.QueryClassHashRequest): Uint8Array;
                toProtoMsg(message: _7.QueryClassHashRequest): _7.QueryClassHashRequestProtoMsg;
            };
            QueryClassHashResponse: {
                typeUrl: string;
                encode(message: _7.QueryClassHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryClassHashResponse;
                fromPartial(object: Partial<_7.QueryClassHashResponse>): _7.QueryClassHashResponse;
                fromAmino(object: _7.QueryClassHashResponseAmino): _7.QueryClassHashResponse;
                toAmino(message: _7.QueryClassHashResponse): _7.QueryClassHashResponseAmino;
                fromAminoMsg(object: _7.QueryClassHashResponseAminoMsg): _7.QueryClassHashResponse;
                fromProtoMsg(message: _7.QueryClassHashResponseProtoMsg): _7.QueryClassHashResponse;
                toProto(message: _7.QueryClassHashResponse): Uint8Array;
                toProtoMsg(message: _7.QueryClassHashResponse): _7.QueryClassHashResponseProtoMsg;
            };
            QueryEscrowAddressRequest: {
                typeUrl: string;
                encode(message: _7.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryEscrowAddressRequest;
                fromPartial(object: Partial<_7.QueryEscrowAddressRequest>): _7.QueryEscrowAddressRequest;
                fromAmino(object: _7.QueryEscrowAddressRequestAmino): _7.QueryEscrowAddressRequest;
                toAmino(message: _7.QueryEscrowAddressRequest): _7.QueryEscrowAddressRequestAmino;
                fromAminoMsg(object: _7.QueryEscrowAddressRequestAminoMsg): _7.QueryEscrowAddressRequest;
                fromProtoMsg(message: _7.QueryEscrowAddressRequestProtoMsg): _7.QueryEscrowAddressRequest;
                toProto(message: _7.QueryEscrowAddressRequest): Uint8Array;
                toProtoMsg(message: _7.QueryEscrowAddressRequest): _7.QueryEscrowAddressRequestProtoMsg;
            };
            QueryEscrowAddressResponse: {
                typeUrl: string;
                encode(message: _7.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryEscrowAddressResponse;
                fromPartial(object: Partial<_7.QueryEscrowAddressResponse>): _7.QueryEscrowAddressResponse;
                fromAmino(object: _7.QueryEscrowAddressResponseAmino): _7.QueryEscrowAddressResponse;
                toAmino(message: _7.QueryEscrowAddressResponse): _7.QueryEscrowAddressResponseAmino;
                fromAminoMsg(object: _7.QueryEscrowAddressResponseAminoMsg): _7.QueryEscrowAddressResponse;
                fromProtoMsg(message: _7.QueryEscrowAddressResponseProtoMsg): _7.QueryEscrowAddressResponse;
                toProto(message: _7.QueryEscrowAddressResponse): Uint8Array;
                toProtoMsg(message: _7.QueryEscrowAddressResponse): _7.QueryEscrowAddressResponseProtoMsg;
            };
            NonFungibleTokenPacketData: {
                typeUrl: string;
                encode(message: _6.NonFungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.NonFungibleTokenPacketData;
                fromPartial(object: Partial<_6.NonFungibleTokenPacketData>): _6.NonFungibleTokenPacketData;
                fromAmino(object: _6.NonFungibleTokenPacketDataAmino): _6.NonFungibleTokenPacketData;
                toAmino(message: _6.NonFungibleTokenPacketData): _6.NonFungibleTokenPacketDataAmino;
                fromAminoMsg(object: _6.NonFungibleTokenPacketDataAminoMsg): _6.NonFungibleTokenPacketData;
                fromProtoMsg(message: _6.NonFungibleTokenPacketDataProtoMsg): _6.NonFungibleTokenPacketData;
                toProto(message: _6.NonFungibleTokenPacketData): Uint8Array;
                toProtoMsg(message: _6.NonFungibleTokenPacketData): _6.NonFungibleTokenPacketDataProtoMsg;
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
        };
    }
    namespace nft {
        const v1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                supply(request: _12.QuerySupplyRequest): Promise<_12.QuerySupplyResponse>;
                owner(request: _12.QueryOwnerRequest): Promise<_12.QueryOwnerResponse>;
                collection(request: _12.QueryCollectionRequest): Promise<_12.QueryCollectionResponse>;
                denom(request: _12.QueryDenomRequest): Promise<_12.QueryDenomResponse>;
                denomByName(request: _12.QueryDenomByNameRequest): Promise<_12.QueryDenomByNameResponse>;
                denoms(request?: _12.QueryDenomsRequest): Promise<_12.QueryDenomsResponse>;
                nFT(request: _12.QueryNFTRequest): Promise<_12.QueryNFTResponse>;
            };
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueDenom(value: _13.MsgIssueDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintNFT(value: _13.MsgMintNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editNFT(value: _13.MsgEditNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferNFT(value: _13.MsgTransferNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnNFT(value: _13.MsgBurnNFT): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueDenom(value: _13.MsgIssueDenom): {
                        typeUrl: string;
                        value: _13.MsgIssueDenom;
                    };
                    mintNFT(value: _13.MsgMintNFT): {
                        typeUrl: string;
                        value: _13.MsgMintNFT;
                    };
                    editNFT(value: _13.MsgEditNFT): {
                        typeUrl: string;
                        value: _13.MsgEditNFT;
                    };
                    transferNFT(value: _13.MsgTransferNFT): {
                        typeUrl: string;
                        value: _13.MsgTransferNFT;
                    };
                    burnNFT(value: _13.MsgBurnNFT): {
                        typeUrl: string;
                        value: _13.MsgBurnNFT;
                    };
                };
                fromJSON: {
                    issueDenom(value: any): {
                        typeUrl: string;
                        value: _13.MsgIssueDenom;
                    };
                    mintNFT(value: any): {
                        typeUrl: string;
                        value: _13.MsgMintNFT;
                    };
                    editNFT(value: any): {
                        typeUrl: string;
                        value: _13.MsgEditNFT;
                    };
                    transferNFT(value: any): {
                        typeUrl: string;
                        value: _13.MsgTransferNFT;
                    };
                    burnNFT(value: any): {
                        typeUrl: string;
                        value: _13.MsgBurnNFT;
                    };
                };
                fromPartial: {
                    issueDenom(value: _13.MsgIssueDenom): {
                        typeUrl: string;
                        value: _13.MsgIssueDenom;
                    };
                    mintNFT(value: _13.MsgMintNFT): {
                        typeUrl: string;
                        value: _13.MsgMintNFT;
                    };
                    editNFT(value: _13.MsgEditNFT): {
                        typeUrl: string;
                        value: _13.MsgEditNFT;
                    };
                    transferNFT(value: _13.MsgTransferNFT): {
                        typeUrl: string;
                        value: _13.MsgTransferNFT;
                    };
                    burnNFT(value: _13.MsgBurnNFT): {
                        typeUrl: string;
                        value: _13.MsgBurnNFT;
                    };
                };
            };
            AminoConverter: {
                "/chainmain.nft.v1.MsgIssueDenom": {
                    aminoType: string;
                    toAmino: (message: _13.MsgIssueDenom) => _13.MsgIssueDenomAmino;
                    fromAmino: (object: _13.MsgIssueDenomAmino) => _13.MsgIssueDenom;
                };
                "/chainmain.nft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: (message: _13.MsgMintNFT) => _13.MsgMintNFTAmino;
                    fromAmino: (object: _13.MsgMintNFTAmino) => _13.MsgMintNFT;
                };
                "/chainmain.nft.v1.MsgEditNFT": {
                    aminoType: string;
                    toAmino: (message: _13.MsgEditNFT) => _13.MsgEditNFTAmino;
                    fromAmino: (object: _13.MsgEditNFTAmino) => _13.MsgEditNFT;
                };
                "/chainmain.nft.v1.MsgTransferNFT": {
                    aminoType: string;
                    toAmino: (message: _13.MsgTransferNFT) => _13.MsgTransferNFTAmino;
                    fromAmino: (object: _13.MsgTransferNFTAmino) => _13.MsgTransferNFT;
                };
                "/chainmain.nft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: (message: _13.MsgBurnNFT) => _13.MsgBurnNFTAmino;
                    fromAmino: (object: _13.MsgBurnNFTAmino) => _13.MsgBurnNFT;
                };
            };
            MsgIssueDenom: {
                typeUrl: string;
                encode(message: _13.MsgIssueDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgIssueDenom;
                fromPartial(object: Partial<_13.MsgIssueDenom>): _13.MsgIssueDenom;
                fromAmino(object: _13.MsgIssueDenomAmino): _13.MsgIssueDenom;
                toAmino(message: _13.MsgIssueDenom): _13.MsgIssueDenomAmino;
                fromAminoMsg(object: _13.MsgIssueDenomAminoMsg): _13.MsgIssueDenom;
                fromProtoMsg(message: _13.MsgIssueDenomProtoMsg): _13.MsgIssueDenom;
                toProto(message: _13.MsgIssueDenom): Uint8Array;
                toProtoMsg(message: _13.MsgIssueDenom): _13.MsgIssueDenomProtoMsg;
            };
            MsgIssueDenomResponse: {
                typeUrl: string;
                encode(_: _13.MsgIssueDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgIssueDenomResponse;
                fromPartial(_: Partial<_13.MsgIssueDenomResponse>): _13.MsgIssueDenomResponse;
                fromAmino(_: _13.MsgIssueDenomResponseAmino): _13.MsgIssueDenomResponse;
                toAmino(_: _13.MsgIssueDenomResponse): _13.MsgIssueDenomResponseAmino;
                fromAminoMsg(object: _13.MsgIssueDenomResponseAminoMsg): _13.MsgIssueDenomResponse;
                fromProtoMsg(message: _13.MsgIssueDenomResponseProtoMsg): _13.MsgIssueDenomResponse;
                toProto(message: _13.MsgIssueDenomResponse): Uint8Array;
                toProtoMsg(message: _13.MsgIssueDenomResponse): _13.MsgIssueDenomResponseProtoMsg;
            };
            MsgTransferNFT: {
                typeUrl: string;
                encode(message: _13.MsgTransferNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgTransferNFT;
                fromPartial(object: Partial<_13.MsgTransferNFT>): _13.MsgTransferNFT;
                fromAmino(object: _13.MsgTransferNFTAmino): _13.MsgTransferNFT;
                toAmino(message: _13.MsgTransferNFT): _13.MsgTransferNFTAmino;
                fromAminoMsg(object: _13.MsgTransferNFTAminoMsg): _13.MsgTransferNFT;
                fromProtoMsg(message: _13.MsgTransferNFTProtoMsg): _13.MsgTransferNFT;
                toProto(message: _13.MsgTransferNFT): Uint8Array;
                toProtoMsg(message: _13.MsgTransferNFT): _13.MsgTransferNFTProtoMsg;
            };
            MsgTransferNFTResponse: {
                typeUrl: string;
                encode(_: _13.MsgTransferNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgTransferNFTResponse;
                fromPartial(_: Partial<_13.MsgTransferNFTResponse>): _13.MsgTransferNFTResponse;
                fromAmino(_: _13.MsgTransferNFTResponseAmino): _13.MsgTransferNFTResponse;
                toAmino(_: _13.MsgTransferNFTResponse): _13.MsgTransferNFTResponseAmino;
                fromAminoMsg(object: _13.MsgTransferNFTResponseAminoMsg): _13.MsgTransferNFTResponse;
                fromProtoMsg(message: _13.MsgTransferNFTResponseProtoMsg): _13.MsgTransferNFTResponse;
                toProto(message: _13.MsgTransferNFTResponse): Uint8Array;
                toProtoMsg(message: _13.MsgTransferNFTResponse): _13.MsgTransferNFTResponseProtoMsg;
            };
            MsgEditNFT: {
                typeUrl: string;
                encode(message: _13.MsgEditNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgEditNFT;
                fromPartial(object: Partial<_13.MsgEditNFT>): _13.MsgEditNFT;
                fromAmino(object: _13.MsgEditNFTAmino): _13.MsgEditNFT;
                toAmino(message: _13.MsgEditNFT): _13.MsgEditNFTAmino;
                fromAminoMsg(object: _13.MsgEditNFTAminoMsg): _13.MsgEditNFT;
                fromProtoMsg(message: _13.MsgEditNFTProtoMsg): _13.MsgEditNFT;
                toProto(message: _13.MsgEditNFT): Uint8Array;
                toProtoMsg(message: _13.MsgEditNFT): _13.MsgEditNFTProtoMsg;
            };
            MsgEditNFTResponse: {
                typeUrl: string;
                encode(_: _13.MsgEditNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgEditNFTResponse;
                fromPartial(_: Partial<_13.MsgEditNFTResponse>): _13.MsgEditNFTResponse;
                fromAmino(_: _13.MsgEditNFTResponseAmino): _13.MsgEditNFTResponse;
                toAmino(_: _13.MsgEditNFTResponse): _13.MsgEditNFTResponseAmino;
                fromAminoMsg(object: _13.MsgEditNFTResponseAminoMsg): _13.MsgEditNFTResponse;
                fromProtoMsg(message: _13.MsgEditNFTResponseProtoMsg): _13.MsgEditNFTResponse;
                toProto(message: _13.MsgEditNFTResponse): Uint8Array;
                toProtoMsg(message: _13.MsgEditNFTResponse): _13.MsgEditNFTResponseProtoMsg;
            };
            MsgMintNFT: {
                typeUrl: string;
                encode(message: _13.MsgMintNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgMintNFT;
                fromPartial(object: Partial<_13.MsgMintNFT>): _13.MsgMintNFT;
                fromAmino(object: _13.MsgMintNFTAmino): _13.MsgMintNFT;
                toAmino(message: _13.MsgMintNFT): _13.MsgMintNFTAmino;
                fromAminoMsg(object: _13.MsgMintNFTAminoMsg): _13.MsgMintNFT;
                fromProtoMsg(message: _13.MsgMintNFTProtoMsg): _13.MsgMintNFT;
                toProto(message: _13.MsgMintNFT): Uint8Array;
                toProtoMsg(message: _13.MsgMintNFT): _13.MsgMintNFTProtoMsg;
            };
            MsgMintNFTResponse: {
                typeUrl: string;
                encode(_: _13.MsgMintNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgMintNFTResponse;
                fromPartial(_: Partial<_13.MsgMintNFTResponse>): _13.MsgMintNFTResponse;
                fromAmino(_: _13.MsgMintNFTResponseAmino): _13.MsgMintNFTResponse;
                toAmino(_: _13.MsgMintNFTResponse): _13.MsgMintNFTResponseAmino;
                fromAminoMsg(object: _13.MsgMintNFTResponseAminoMsg): _13.MsgMintNFTResponse;
                fromProtoMsg(message: _13.MsgMintNFTResponseProtoMsg): _13.MsgMintNFTResponse;
                toProto(message: _13.MsgMintNFTResponse): Uint8Array;
                toProtoMsg(message: _13.MsgMintNFTResponse): _13.MsgMintNFTResponseProtoMsg;
            };
            MsgBurnNFT: {
                typeUrl: string;
                encode(message: _13.MsgBurnNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgBurnNFT;
                fromPartial(object: Partial<_13.MsgBurnNFT>): _13.MsgBurnNFT;
                fromAmino(object: _13.MsgBurnNFTAmino): _13.MsgBurnNFT;
                toAmino(message: _13.MsgBurnNFT): _13.MsgBurnNFTAmino;
                fromAminoMsg(object: _13.MsgBurnNFTAminoMsg): _13.MsgBurnNFT;
                fromProtoMsg(message: _13.MsgBurnNFTProtoMsg): _13.MsgBurnNFT;
                toProto(message: _13.MsgBurnNFT): Uint8Array;
                toProtoMsg(message: _13.MsgBurnNFT): _13.MsgBurnNFTProtoMsg;
            };
            MsgBurnNFTResponse: {
                typeUrl: string;
                encode(_: _13.MsgBurnNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgBurnNFTResponse;
                fromPartial(_: Partial<_13.MsgBurnNFTResponse>): _13.MsgBurnNFTResponse;
                fromAmino(_: _13.MsgBurnNFTResponseAmino): _13.MsgBurnNFTResponse;
                toAmino(_: _13.MsgBurnNFTResponse): _13.MsgBurnNFTResponseAmino;
                fromAminoMsg(object: _13.MsgBurnNFTResponseAminoMsg): _13.MsgBurnNFTResponse;
                fromProtoMsg(message: _13.MsgBurnNFTResponseProtoMsg): _13.MsgBurnNFTResponse;
                toProto(message: _13.MsgBurnNFTResponse): Uint8Array;
                toProtoMsg(message: _13.MsgBurnNFTResponse): _13.MsgBurnNFTResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _12.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySupplyRequest;
                fromPartial(object: Partial<_12.QuerySupplyRequest>): _12.QuerySupplyRequest;
                fromAmino(object: _12.QuerySupplyRequestAmino): _12.QuerySupplyRequest;
                toAmino(message: _12.QuerySupplyRequest): _12.QuerySupplyRequestAmino;
                fromAminoMsg(object: _12.QuerySupplyRequestAminoMsg): _12.QuerySupplyRequest;
                fromProtoMsg(message: _12.QuerySupplyRequestProtoMsg): _12.QuerySupplyRequest;
                toProto(message: _12.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyRequest): _12.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _12.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySupplyResponse;
                fromPartial(object: Partial<_12.QuerySupplyResponse>): _12.QuerySupplyResponse;
                fromAmino(object: _12.QuerySupplyResponseAmino): _12.QuerySupplyResponse;
                toAmino(message: _12.QuerySupplyResponse): _12.QuerySupplyResponseAmino;
                fromAminoMsg(object: _12.QuerySupplyResponseAminoMsg): _12.QuerySupplyResponse;
                fromProtoMsg(message: _12.QuerySupplyResponseProtoMsg): _12.QuerySupplyResponse;
                toProto(message: _12.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyResponse): _12.QuerySupplyResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _12.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryOwnerRequest;
                fromPartial(object: Partial<_12.QueryOwnerRequest>): _12.QueryOwnerRequest;
                fromAmino(object: _12.QueryOwnerRequestAmino): _12.QueryOwnerRequest;
                toAmino(message: _12.QueryOwnerRequest): _12.QueryOwnerRequestAmino;
                fromAminoMsg(object: _12.QueryOwnerRequestAminoMsg): _12.QueryOwnerRequest;
                fromProtoMsg(message: _12.QueryOwnerRequestProtoMsg): _12.QueryOwnerRequest;
                toProto(message: _12.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _12.QueryOwnerRequest): _12.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _12.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryOwnerResponse;
                fromPartial(object: Partial<_12.QueryOwnerResponse>): _12.QueryOwnerResponse;
                fromAmino(object: _12.QueryOwnerResponseAmino): _12.QueryOwnerResponse;
                toAmino(message: _12.QueryOwnerResponse): _12.QueryOwnerResponseAmino;
                fromAminoMsg(object: _12.QueryOwnerResponseAminoMsg): _12.QueryOwnerResponse;
                fromProtoMsg(message: _12.QueryOwnerResponseProtoMsg): _12.QueryOwnerResponse;
                toProto(message: _12.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _12.QueryOwnerResponse): _12.QueryOwnerResponseProtoMsg;
            };
            QueryCollectionRequest: {
                typeUrl: string;
                encode(message: _12.QueryCollectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryCollectionRequest;
                fromPartial(object: Partial<_12.QueryCollectionRequest>): _12.QueryCollectionRequest;
                fromAmino(object: _12.QueryCollectionRequestAmino): _12.QueryCollectionRequest;
                toAmino(message: _12.QueryCollectionRequest): _12.QueryCollectionRequestAmino;
                fromAminoMsg(object: _12.QueryCollectionRequestAminoMsg): _12.QueryCollectionRequest;
                fromProtoMsg(message: _12.QueryCollectionRequestProtoMsg): _12.QueryCollectionRequest;
                toProto(message: _12.QueryCollectionRequest): Uint8Array;
                toProtoMsg(message: _12.QueryCollectionRequest): _12.QueryCollectionRequestProtoMsg;
            };
            QueryCollectionResponse: {
                typeUrl: string;
                encode(message: _12.QueryCollectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryCollectionResponse;
                fromPartial(object: Partial<_12.QueryCollectionResponse>): _12.QueryCollectionResponse;
                fromAmino(object: _12.QueryCollectionResponseAmino): _12.QueryCollectionResponse;
                toAmino(message: _12.QueryCollectionResponse): _12.QueryCollectionResponseAmino;
                fromAminoMsg(object: _12.QueryCollectionResponseAminoMsg): _12.QueryCollectionResponse;
                fromProtoMsg(message: _12.QueryCollectionResponseProtoMsg): _12.QueryCollectionResponse;
                toProto(message: _12.QueryCollectionResponse): Uint8Array;
                toProtoMsg(message: _12.QueryCollectionResponse): _12.QueryCollectionResponseProtoMsg;
            };
            QueryDenomRequest: {
                typeUrl: string;
                encode(message: _12.QueryDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomRequest;
                fromPartial(object: Partial<_12.QueryDenomRequest>): _12.QueryDenomRequest;
                fromAmino(object: _12.QueryDenomRequestAmino): _12.QueryDenomRequest;
                toAmino(message: _12.QueryDenomRequest): _12.QueryDenomRequestAmino;
                fromAminoMsg(object: _12.QueryDenomRequestAminoMsg): _12.QueryDenomRequest;
                fromProtoMsg(message: _12.QueryDenomRequestProtoMsg): _12.QueryDenomRequest;
                toProto(message: _12.QueryDenomRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomRequest): _12.QueryDenomRequestProtoMsg;
            };
            QueryDenomResponse: {
                typeUrl: string;
                encode(message: _12.QueryDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomResponse;
                fromPartial(object: Partial<_12.QueryDenomResponse>): _12.QueryDenomResponse;
                fromAmino(object: _12.QueryDenomResponseAmino): _12.QueryDenomResponse;
                toAmino(message: _12.QueryDenomResponse): _12.QueryDenomResponseAmino;
                fromAminoMsg(object: _12.QueryDenomResponseAminoMsg): _12.QueryDenomResponse;
                fromProtoMsg(message: _12.QueryDenomResponseProtoMsg): _12.QueryDenomResponse;
                toProto(message: _12.QueryDenomResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomResponse): _12.QueryDenomResponseProtoMsg;
            };
            QueryDenomByNameRequest: {
                typeUrl: string;
                encode(message: _12.QueryDenomByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomByNameRequest;
                fromPartial(object: Partial<_12.QueryDenomByNameRequest>): _12.QueryDenomByNameRequest;
                fromAmino(object: _12.QueryDenomByNameRequestAmino): _12.QueryDenomByNameRequest;
                toAmino(message: _12.QueryDenomByNameRequest): _12.QueryDenomByNameRequestAmino;
                fromAminoMsg(object: _12.QueryDenomByNameRequestAminoMsg): _12.QueryDenomByNameRequest;
                fromProtoMsg(message: _12.QueryDenomByNameRequestProtoMsg): _12.QueryDenomByNameRequest;
                toProto(message: _12.QueryDenomByNameRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomByNameRequest): _12.QueryDenomByNameRequestProtoMsg;
            };
            QueryDenomByNameResponse: {
                typeUrl: string;
                encode(message: _12.QueryDenomByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomByNameResponse;
                fromPartial(object: Partial<_12.QueryDenomByNameResponse>): _12.QueryDenomByNameResponse;
                fromAmino(object: _12.QueryDenomByNameResponseAmino): _12.QueryDenomByNameResponse;
                toAmino(message: _12.QueryDenomByNameResponse): _12.QueryDenomByNameResponseAmino;
                fromAminoMsg(object: _12.QueryDenomByNameResponseAminoMsg): _12.QueryDenomByNameResponse;
                fromProtoMsg(message: _12.QueryDenomByNameResponseProtoMsg): _12.QueryDenomByNameResponse;
                toProto(message: _12.QueryDenomByNameResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomByNameResponse): _12.QueryDenomByNameResponseProtoMsg;
            };
            QueryDenomsRequest: {
                typeUrl: string;
                encode(message: _12.QueryDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomsRequest;
                fromPartial(object: Partial<_12.QueryDenomsRequest>): _12.QueryDenomsRequest;
                fromAmino(object: _12.QueryDenomsRequestAmino): _12.QueryDenomsRequest;
                toAmino(message: _12.QueryDenomsRequest): _12.QueryDenomsRequestAmino;
                fromAminoMsg(object: _12.QueryDenomsRequestAminoMsg): _12.QueryDenomsRequest;
                fromProtoMsg(message: _12.QueryDenomsRequestProtoMsg): _12.QueryDenomsRequest;
                toProto(message: _12.QueryDenomsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomsRequest): _12.QueryDenomsRequestProtoMsg;
            };
            QueryDenomsResponse: {
                typeUrl: string;
                encode(message: _12.QueryDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryDenomsResponse;
                fromPartial(object: Partial<_12.QueryDenomsResponse>): _12.QueryDenomsResponse;
                fromAmino(object: _12.QueryDenomsResponseAmino): _12.QueryDenomsResponse;
                toAmino(message: _12.QueryDenomsResponse): _12.QueryDenomsResponseAmino;
                fromAminoMsg(object: _12.QueryDenomsResponseAminoMsg): _12.QueryDenomsResponse;
                fromProtoMsg(message: _12.QueryDenomsResponseProtoMsg): _12.QueryDenomsResponse;
                toProto(message: _12.QueryDenomsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomsResponse): _12.QueryDenomsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _12.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryNFTRequest;
                fromPartial(object: Partial<_12.QueryNFTRequest>): _12.QueryNFTRequest;
                fromAmino(object: _12.QueryNFTRequestAmino): _12.QueryNFTRequest;
                toAmino(message: _12.QueryNFTRequest): _12.QueryNFTRequestAmino;
                fromAminoMsg(object: _12.QueryNFTRequestAminoMsg): _12.QueryNFTRequest;
                fromProtoMsg(message: _12.QueryNFTRequestProtoMsg): _12.QueryNFTRequest;
                toProto(message: _12.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _12.QueryNFTRequest): _12.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _12.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryNFTResponse;
                fromPartial(object: Partial<_12.QueryNFTResponse>): _12.QueryNFTResponse;
                fromAmino(object: _12.QueryNFTResponseAmino): _12.QueryNFTResponse;
                toAmino(message: _12.QueryNFTResponse): _12.QueryNFTResponseAmino;
                fromAminoMsg(object: _12.QueryNFTResponseAminoMsg): _12.QueryNFTResponse;
                fromProtoMsg(message: _12.QueryNFTResponseProtoMsg): _12.QueryNFTResponse;
                toProto(message: _12.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _12.QueryNFTResponse): _12.QueryNFTResponseProtoMsg;
            };
            BaseNFT: {
                typeUrl: string;
                encode(message: _11.BaseNFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.BaseNFT;
                fromPartial(object: Partial<_11.BaseNFT>): _11.BaseNFT;
                fromAmino(object: _11.BaseNFTAmino): _11.BaseNFT;
                toAmino(message: _11.BaseNFT): _11.BaseNFTAmino;
                fromAminoMsg(object: _11.BaseNFTAminoMsg): _11.BaseNFT;
                fromProtoMsg(message: _11.BaseNFTProtoMsg): _11.BaseNFT;
                toProto(message: _11.BaseNFT): Uint8Array;
                toProtoMsg(message: _11.BaseNFT): _11.BaseNFTProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _11.Denom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Denom;
                fromPartial(object: Partial<_11.Denom>): _11.Denom;
                fromAmino(object: _11.DenomAmino): _11.Denom;
                toAmino(message: _11.Denom): _11.DenomAmino;
                fromAminoMsg(object: _11.DenomAminoMsg): _11.Denom;
                fromProtoMsg(message: _11.DenomProtoMsg): _11.Denom;
                toProto(message: _11.Denom): Uint8Array;
                toProtoMsg(message: _11.Denom): _11.DenomProtoMsg;
            };
            IDCollection: {
                typeUrl: string;
                encode(message: _11.IDCollection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.IDCollection;
                fromPartial(object: Partial<_11.IDCollection>): _11.IDCollection;
                fromAmino(object: _11.IDCollectionAmino): _11.IDCollection;
                toAmino(message: _11.IDCollection): _11.IDCollectionAmino;
                fromAminoMsg(object: _11.IDCollectionAminoMsg): _11.IDCollection;
                fromProtoMsg(message: _11.IDCollectionProtoMsg): _11.IDCollection;
                toProto(message: _11.IDCollection): Uint8Array;
                toProtoMsg(message: _11.IDCollection): _11.IDCollectionProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _11.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Owner;
                fromPartial(object: Partial<_11.Owner>): _11.Owner;
                fromAmino(object: _11.OwnerAmino): _11.Owner;
                toAmino(message: _11.Owner): _11.OwnerAmino;
                fromAminoMsg(object: _11.OwnerAminoMsg): _11.Owner;
                fromProtoMsg(message: _11.OwnerProtoMsg): _11.Owner;
                toProto(message: _11.Owner): Uint8Array;
                toProtoMsg(message: _11.Owner): _11.OwnerProtoMsg;
            };
            Collection: {
                typeUrl: string;
                encode(message: _11.Collection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Collection;
                fromPartial(object: Partial<_11.Collection>): _11.Collection;
                fromAmino(object: _11.CollectionAmino): _11.Collection;
                toAmino(message: _11.Collection): _11.CollectionAmino;
                fromAminoMsg(object: _11.CollectionAminoMsg): _11.Collection;
                fromProtoMsg(message: _11.CollectionProtoMsg): _11.Collection;
                toProto(message: _11.Collection): Uint8Array;
                toProtoMsg(message: _11.Collection): _11.CollectionProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
        };
    }
    namespace supply {
        const v1: {
            QueryClientImpl: typeof _183.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                totalSupply(request?: _16.SupplyRequest): Promise<_16.SupplyResponse>;
                liquidSupply(request?: _16.SupplyRequest): Promise<_16.SupplyResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            SupplyRequest: {
                typeUrl: string;
                encode(_: _16.SupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.SupplyRequest;
                fromPartial(_: Partial<_16.SupplyRequest>): _16.SupplyRequest;
                fromAmino(_: _16.SupplyRequestAmino): _16.SupplyRequest;
                toAmino(_: _16.SupplyRequest): _16.SupplyRequestAmino;
                fromAminoMsg(object: _16.SupplyRequestAminoMsg): _16.SupplyRequest;
                fromProtoMsg(message: _16.SupplyRequestProtoMsg): _16.SupplyRequest;
                toProto(message: _16.SupplyRequest): Uint8Array;
                toProtoMsg(message: _16.SupplyRequest): _16.SupplyRequestProtoMsg;
            };
            SupplyResponse: {
                typeUrl: string;
                encode(message: _16.SupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.SupplyResponse;
                fromPartial(object: Partial<_16.SupplyResponse>): _16.SupplyResponse;
                fromAmino(object: _16.SupplyResponseAmino): _16.SupplyResponse;
                toAmino(message: _16.SupplyResponse): _16.SupplyResponseAmino;
                fromAminoMsg(object: _16.SupplyResponseAminoMsg): _16.SupplyResponse;
                fromProtoMsg(message: _16.SupplyResponseProtoMsg): _16.SupplyResponse;
                toProto(message: _16.SupplyResponse): Uint8Array;
                toProtoMsg(message: _16.SupplyResponse): _16.SupplyResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(_: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _15.GenesisState;
                fromPartial(_: Partial<_15.GenesisState>): _15.GenesisState;
                fromAmino(_: _15.GenesisStateAmino): _15.GenesisState;
                toAmino(_: _15.GenesisState): _15.GenesisStateAmino;
                fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                toProto(message: _15.GenesisState): Uint8Array;
                toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
            };
            VestingAccounts: {
                typeUrl: string;
                encode(message: _14.VestingAccounts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.VestingAccounts;
                fromPartial(object: Partial<_14.VestingAccounts>): _14.VestingAccounts;
                fromAmino(object: _14.VestingAccountsAmino): _14.VestingAccounts;
                toAmino(message: _14.VestingAccounts): _14.VestingAccountsAmino;
                fromAminoMsg(object: _14.VestingAccountsAminoMsg): _14.VestingAccounts;
                fromProtoMsg(message: _14.VestingAccountsProtoMsg): _14.VestingAccounts;
                toProto(message: _14.VestingAccounts): Uint8Array;
                toProtoMsg(message: _14.VestingAccounts): _14.VestingAccountsProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            chainmain: {
                icaauth: {
                    v1: _184.MsgClientImpl;
                };
                nft_transfer: {
                    v1: _185.MsgClientImpl;
                };
                nft: {
                    v1: _186.MsgClientImpl;
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
            chainmain: {
                icaauth: {
                    v1: {
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                        interchainAccountAddress(request: _3.QueryInterchainAccountAddressRequest): Promise<_3.QueryInterchainAccountAddressResponse>;
                    };
                };
                nft_transfer: {
                    v1: {
                        classTrace(request: _7.QueryClassTraceRequest): Promise<_7.QueryClassTraceResponse>;
                        classTraces(request?: _7.QueryClassTracesRequest): Promise<_7.QueryClassTracesResponse>;
                        classHash(request: _7.QueryClassHashRequest): Promise<_7.QueryClassHashResponse>;
                        escrowAddress(request: _7.QueryEscrowAddressRequest): Promise<_7.QueryEscrowAddressResponse>;
                    };
                };
                nft: {
                    v1: {
                        supply(request: _12.QuerySupplyRequest): Promise<_12.QuerySupplyResponse>;
                        owner(request: _12.QueryOwnerRequest): Promise<_12.QueryOwnerResponse>;
                        collection(request: _12.QueryCollectionRequest): Promise<_12.QueryCollectionResponse>;
                        denom(request: _12.QueryDenomRequest): Promise<_12.QueryDenomResponse>;
                        denomByName(request: _12.QueryDenomByNameRequest): Promise<_12.QueryDenomByNameResponse>;
                        denoms(request?: _12.QueryDenomsRequest): Promise<_12.QueryDenomsResponse>;
                        nFT(request: _12.QueryNFTRequest): Promise<_12.QueryNFTResponse>;
                    };
                };
                supply: {
                    v1: {
                        totalSupply(request?: _16.SupplyRequest): Promise<_16.SupplyResponse>;
                        liquidSupply(request?: _16.SupplyRequest): Promise<_16.SupplyResponse>;
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
            chainmain: {
                icaauth: {
                    v1: _176.LCDQueryClient;
                };
                nft_transfer: {
                    v1: _177.LCDQueryClient;
                };
                nft: {
                    v1: _178.LCDQueryClient;
                };
                supply: {
                    v1: _179.LCDQueryClient;
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
