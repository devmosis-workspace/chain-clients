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
import * as _176 from "../icaauth/v1/query.rpc.Query";
import * as _177 from "../nft_transfer/v1/query.rpc.Query";
import * as _178 from "../nft/v1/query.rpc.Query";
import * as _179 from "../supply/v1/query.rpc.Query";
import * as _180 from "../icaauth/v1/tx.rpc.msg";
import * as _181 from "../nft_transfer/v1/tx.rpc.msg";
import * as _182 from "../nft/v1/tx.rpc.msg";
export declare namespace chainmain {
    namespace chainmain {
        const v1: {
            GenesisState: {
                encode(_: _0.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _0.GenesisState;
                fromPartial(_: Partial<_0.GenesisState>): _0.GenesisState;
            };
        };
    }
    namespace icaauth {
        const v1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                interchainAccountAddress(request: _3.QueryInterchainAccountAddressRequest): Promise<_3.QueryInterchainAccountAddressResponse>;
            };
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
                    toAmino: ({ owner, connectionId, version }: _4.MsgRegisterAccount) => {
                        owner: string;
                        connectionId: string;
                        version: string;
                    };
                    fromAmino: ({ owner, connectionId, version }: {
                        owner: string;
                        connectionId: string;
                        version: string;
                    }) => _4.MsgRegisterAccount;
                };
                "/chainmain.icaauth.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: ({ owner, connectionId, msgs, timeoutDuration }: _4.MsgSubmitTx) => {
                        owner: string;
                        connectionId: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        timeoutDuration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ owner, connectionId, msgs, timeoutDuration }: {
                        owner: string;
                        connectionId: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        timeoutDuration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _4.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _4.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgRegisterAccount;
                fromPartial(object: Partial<_4.MsgRegisterAccount>): _4.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _4.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _4.MsgRegisterAccountResponse;
                fromPartial(_: Partial<_4.MsgRegisterAccountResponse>): _4.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _4.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgSubmitTx;
                fromPartial(object: Partial<_4.MsgSubmitTx>): _4.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _4.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _4.MsgSubmitTxResponse;
                fromPartial(_: Partial<_4.MsgSubmitTxResponse>): _4.MsgSubmitTxResponse;
            };
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
            };
            QueryInterchainAccountAddressRequest: {
                encode(message: _3.QueryInterchainAccountAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryInterchainAccountAddressRequest;
                fromPartial(object: Partial<_3.QueryInterchainAccountAddressRequest>): _3.QueryInterchainAccountAddressRequest;
            };
            QueryInterchainAccountAddressResponse: {
                encode(message: _3.QueryInterchainAccountAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryInterchainAccountAddressResponse;
                fromPartial(object: Partial<_3.QueryInterchainAccountAddressResponse>): _3.QueryInterchainAccountAddressResponse;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            };
        };
    }
    namespace nft_transfer {
        const v1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classTrace(request: _7.QueryClassTraceRequest): Promise<_7.QueryClassTraceResponse>;
                classTraces(request?: _7.QueryClassTracesRequest): Promise<_7.QueryClassTracesResponse>;
                classHash(request: _7.QueryClassHashRequest): Promise<_7.QueryClassHashResponse>;
                escrowAddress(request: _7.QueryEscrowAddressRequest): Promise<_7.QueryEscrowAddressResponse>;
            };
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
                    toAmino: ({ sourcePort, sourceChannel, classId, tokenIds, sender, receiver, timeoutHeight, timeoutTimestamp }: _9.MsgTransfer) => {
                        source_port: string;
                        source_channel: string;
                        class_id: string;
                        token_ids: string[];
                        sender: string;
                        receiver: string;
                        timeout_height: import("../helpers").AminoHeight;
                        timeout_timestamp: string;
                    };
                    fromAmino: ({ source_port, source_channel, class_id, token_ids, sender, receiver, timeout_height, timeout_timestamp }: {
                        source_port: string;
                        source_channel: string;
                        class_id: string;
                        token_ids: string[];
                        sender: string;
                        receiver: string;
                        timeout_height: import("../helpers").AminoHeight;
                        timeout_timestamp: string;
                    }) => _9.MsgTransfer;
                };
            };
            MsgTransfer: {
                encode(message: _9.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.MsgTransfer;
                fromPartial(object: Partial<_9.MsgTransfer>): _9.MsgTransfer;
            };
            MsgTransferResponse: {
                encode(_: _9.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _9.MsgTransferResponse;
                fromPartial(_: Partial<_9.MsgTransferResponse>): _9.MsgTransferResponse;
            };
            ClassTrace: {
                encode(message: _8.ClassTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.ClassTrace;
                fromPartial(object: Partial<_8.ClassTrace>): _8.ClassTrace;
            };
            QueryClassTraceRequest: {
                encode(message: _7.QueryClassTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryClassTraceRequest;
                fromPartial(object: Partial<_7.QueryClassTraceRequest>): _7.QueryClassTraceRequest;
            };
            QueryClassTraceResponse: {
                encode(message: _7.QueryClassTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryClassTraceResponse;
                fromPartial(object: Partial<_7.QueryClassTraceResponse>): _7.QueryClassTraceResponse;
            };
            QueryClassTracesRequest: {
                encode(message: _7.QueryClassTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryClassTracesRequest;
                fromPartial(object: Partial<_7.QueryClassTracesRequest>): _7.QueryClassTracesRequest;
            };
            QueryClassTracesResponse: {
                encode(message: _7.QueryClassTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryClassTracesResponse;
                fromPartial(object: Partial<_7.QueryClassTracesResponse>): _7.QueryClassTracesResponse;
            };
            QueryClassHashRequest: {
                encode(message: _7.QueryClassHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryClassHashRequest;
                fromPartial(object: Partial<_7.QueryClassHashRequest>): _7.QueryClassHashRequest;
            };
            QueryClassHashResponse: {
                encode(message: _7.QueryClassHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryClassHashResponse;
                fromPartial(object: Partial<_7.QueryClassHashResponse>): _7.QueryClassHashResponse;
            };
            QueryEscrowAddressRequest: {
                encode(message: _7.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryEscrowAddressRequest;
                fromPartial(object: Partial<_7.QueryEscrowAddressRequest>): _7.QueryEscrowAddressRequest;
            };
            QueryEscrowAddressResponse: {
                encode(message: _7.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryEscrowAddressResponse;
                fromPartial(object: Partial<_7.QueryEscrowAddressResponse>): _7.QueryEscrowAddressResponse;
            };
            NonFungibleTokenPacketData: {
                encode(message: _6.NonFungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.NonFungibleTokenPacketData;
                fromPartial(object: Partial<_6.NonFungibleTokenPacketData>): _6.NonFungibleTokenPacketData;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            };
        };
    }
    namespace nft {
        const v1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                supply(request: _12.QuerySupplyRequest): Promise<_12.QuerySupplyResponse>;
                owner(request: _12.QueryOwnerRequest): Promise<_12.QueryOwnerResponse>;
                collection(request: _12.QueryCollectionRequest): Promise<_12.QueryCollectionResponse>;
                denom(request: _12.QueryDenomRequest): Promise<_12.QueryDenomResponse>;
                denomByName(request: _12.QueryDenomByNameRequest): Promise<_12.QueryDenomByNameResponse>;
                denoms(request?: _12.QueryDenomsRequest): Promise<_12.QueryDenomsResponse>;
                nFT(request: _12.QueryNFTRequest): Promise<_12.QueryNFTResponse>;
            };
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
                    toAmino: ({ id, name, schema, sender, uri }: _13.MsgIssueDenom) => {
                        id: string;
                        name: string;
                        schema: string;
                        sender: string;
                        uri: string;
                    };
                    fromAmino: ({ id, name, schema, sender, uri }: {
                        id: string;
                        name: string;
                        schema: string;
                        sender: string;
                        uri: string;
                    }) => _13.MsgIssueDenom;
                };
                "/chainmain.nft.v1.MsgMintNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender, recipient }: _13.MsgMintNFT) => {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                        recipient: string;
                    };
                    fromAmino: ({ id, denom_id, name, uri, data, sender, recipient }: {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                        recipient: string;
                    }) => _13.MsgMintNFT;
                };
                "/chainmain.nft.v1.MsgEditNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, name, uri, data, sender }: _13.MsgEditNFT) => {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                    };
                    fromAmino: ({ id, denom_id, name, uri, data, sender }: {
                        id: string;
                        denom_id: string;
                        name: string;
                        uri: string;
                        data: string;
                        sender: string;
                    }) => _13.MsgEditNFT;
                };
                "/chainmain.nft.v1.MsgTransferNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, sender, recipient }: _13.MsgTransferNFT) => {
                        id: string;
                        denom_id: string;
                        sender: string;
                        recipient: string;
                    };
                    fromAmino: ({ id, denom_id, sender, recipient }: {
                        id: string;
                        denom_id: string;
                        sender: string;
                        recipient: string;
                    }) => _13.MsgTransferNFT;
                };
                "/chainmain.nft.v1.MsgBurnNFT": {
                    aminoType: string;
                    toAmino: ({ id, denomId, sender }: _13.MsgBurnNFT) => {
                        id: string;
                        denom_id: string;
                        sender: string;
                    };
                    fromAmino: ({ id, denom_id, sender }: {
                        id: string;
                        denom_id: string;
                        sender: string;
                    }) => _13.MsgBurnNFT;
                };
            };
            MsgIssueDenom: {
                encode(message: _13.MsgIssueDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgIssueDenom;
                fromPartial(object: Partial<_13.MsgIssueDenom>): _13.MsgIssueDenom;
            };
            MsgIssueDenomResponse: {
                encode(_: _13.MsgIssueDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgIssueDenomResponse;
                fromPartial(_: Partial<_13.MsgIssueDenomResponse>): _13.MsgIssueDenomResponse;
            };
            MsgTransferNFT: {
                encode(message: _13.MsgTransferNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgTransferNFT;
                fromPartial(object: Partial<_13.MsgTransferNFT>): _13.MsgTransferNFT;
            };
            MsgTransferNFTResponse: {
                encode(_: _13.MsgTransferNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgTransferNFTResponse;
                fromPartial(_: Partial<_13.MsgTransferNFTResponse>): _13.MsgTransferNFTResponse;
            };
            MsgEditNFT: {
                encode(message: _13.MsgEditNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgEditNFT;
                fromPartial(object: Partial<_13.MsgEditNFT>): _13.MsgEditNFT;
            };
            MsgEditNFTResponse: {
                encode(_: _13.MsgEditNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgEditNFTResponse;
                fromPartial(_: Partial<_13.MsgEditNFTResponse>): _13.MsgEditNFTResponse;
            };
            MsgMintNFT: {
                encode(message: _13.MsgMintNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgMintNFT;
                fromPartial(object: Partial<_13.MsgMintNFT>): _13.MsgMintNFT;
            };
            MsgMintNFTResponse: {
                encode(_: _13.MsgMintNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgMintNFTResponse;
                fromPartial(_: Partial<_13.MsgMintNFTResponse>): _13.MsgMintNFTResponse;
            };
            MsgBurnNFT: {
                encode(message: _13.MsgBurnNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgBurnNFT;
                fromPartial(object: Partial<_13.MsgBurnNFT>): _13.MsgBurnNFT;
            };
            MsgBurnNFTResponse: {
                encode(_: _13.MsgBurnNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgBurnNFTResponse;
                fromPartial(_: Partial<_13.MsgBurnNFTResponse>): _13.MsgBurnNFTResponse;
            };
            QuerySupplyRequest: {
                encode(message: _12.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QuerySupplyRequest;
                fromPartial(object: Partial<_12.QuerySupplyRequest>): _12.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _12.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QuerySupplyResponse;
                fromPartial(object: Partial<_12.QuerySupplyResponse>): _12.QuerySupplyResponse;
            };
            QueryOwnerRequest: {
                encode(message: _12.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryOwnerRequest;
                fromPartial(object: Partial<_12.QueryOwnerRequest>): _12.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _12.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryOwnerResponse;
                fromPartial(object: Partial<_12.QueryOwnerResponse>): _12.QueryOwnerResponse;
            };
            QueryCollectionRequest: {
                encode(message: _12.QueryCollectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryCollectionRequest;
                fromPartial(object: Partial<_12.QueryCollectionRequest>): _12.QueryCollectionRequest;
            };
            QueryCollectionResponse: {
                encode(message: _12.QueryCollectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryCollectionResponse;
                fromPartial(object: Partial<_12.QueryCollectionResponse>): _12.QueryCollectionResponse;
            };
            QueryDenomRequest: {
                encode(message: _12.QueryDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomRequest;
                fromPartial(object: Partial<_12.QueryDenomRequest>): _12.QueryDenomRequest;
            };
            QueryDenomResponse: {
                encode(message: _12.QueryDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomResponse;
                fromPartial(object: Partial<_12.QueryDenomResponse>): _12.QueryDenomResponse;
            };
            QueryDenomByNameRequest: {
                encode(message: _12.QueryDenomByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomByNameRequest;
                fromPartial(object: Partial<_12.QueryDenomByNameRequest>): _12.QueryDenomByNameRequest;
            };
            QueryDenomByNameResponse: {
                encode(message: _12.QueryDenomByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomByNameResponse;
                fromPartial(object: Partial<_12.QueryDenomByNameResponse>): _12.QueryDenomByNameResponse;
            };
            QueryDenomsRequest: {
                encode(message: _12.QueryDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomsRequest;
                fromPartial(object: Partial<_12.QueryDenomsRequest>): _12.QueryDenomsRequest;
            };
            QueryDenomsResponse: {
                encode(message: _12.QueryDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryDenomsResponse;
                fromPartial(object: Partial<_12.QueryDenomsResponse>): _12.QueryDenomsResponse;
            };
            QueryNFTRequest: {
                encode(message: _12.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryNFTRequest;
                fromPartial(object: Partial<_12.QueryNFTRequest>): _12.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _12.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryNFTResponse;
                fromPartial(object: Partial<_12.QueryNFTResponse>): _12.QueryNFTResponse;
            };
            BaseNFT: {
                encode(message: _11.BaseNFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.BaseNFT;
                fromPartial(object: Partial<_11.BaseNFT>): _11.BaseNFT;
            };
            Denom: {
                encode(message: _11.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Denom;
                fromPartial(object: Partial<_11.Denom>): _11.Denom;
            };
            IDCollection: {
                encode(message: _11.IDCollection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.IDCollection;
                fromPartial(object: Partial<_11.IDCollection>): _11.IDCollection;
            };
            Owner: {
                encode(message: _11.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Owner;
                fromPartial(object: Partial<_11.Owner>): _11.Owner;
            };
            Collection: {
                encode(message: _11.Collection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Collection;
                fromPartial(object: Partial<_11.Collection>): _11.Collection;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
            };
        };
    }
    namespace supply {
        const v1: {
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                totalSupply(request?: _16.SupplyRequest): Promise<_16.SupplyResponse>;
                liquidSupply(request?: _16.SupplyRequest): Promise<_16.SupplyResponse>;
            };
            SupplyRequest: {
                encode(_: _16.SupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.SupplyRequest;
                fromPartial(_: Partial<_16.SupplyRequest>): _16.SupplyRequest;
            };
            SupplyResponse: {
                encode(message: _16.SupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.SupplyResponse;
                fromPartial(object: Partial<_16.SupplyResponse>): _16.SupplyResponse;
            };
            GenesisState: {
                encode(_: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _15.GenesisState;
                fromPartial(_: Partial<_15.GenesisState>): _15.GenesisState;
            };
            VestingAccounts: {
                encode(message: _14.VestingAccounts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.VestingAccounts;
                fromPartial(object: Partial<_14.VestingAccounts>): _14.VestingAccounts;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            chainmain: {
                icaauth: {
                    v1: _180.MsgClientImpl;
                };
                nft_transfer: {
                    v1: _181.MsgClientImpl;
                };
                nft: {
                    v1: _182.MsgClientImpl;
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
    };
}
