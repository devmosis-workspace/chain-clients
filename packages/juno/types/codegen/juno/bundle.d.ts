import * as _0 from "./feeshare/v1/feeshare";
import * as _1 from "./feeshare/v1/genesis";
import * as _2 from "./feeshare/v1/query";
import * as _3 from "./feeshare/v1/tx";
import * as _4 from "./mint/genesis";
import * as _5 from "./mint/mint";
import * as _6 from "./mint/query";
import * as _111 from "./feeshare/v1/query.lcd";
import * as _112 from "./mint/query.lcd";
import * as _113 from "./feeshare/v1/query.rpc.Query";
import * as _114 from "./mint/query.rpc.Query";
import * as _115 from "./feeshare/v1/tx.rpc.msg";
export declare namespace juno {
    namespace feeshare {
        const v1: {
            MsgClientImpl: typeof _115.MsgClientImpl;
            QueryClientImpl: typeof _113.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeShares(request?: _2.QueryFeeSharesRequest): Promise<_2.QueryFeeSharesResponse>;
                feeShare(request: _2.QueryFeeShareRequest): Promise<_2.QueryFeeShareResponse>;
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                deployerFeeShares(request: _2.QueryDeployerFeeSharesRequest): Promise<_2.QueryDeployerFeeSharesResponse>;
                withdrawerFeeShares(request: _2.QueryWithdrawerFeeSharesRequest): Promise<_2.QueryWithdrawerFeeSharesResponse>;
            };
            LCDQueryClient: typeof _111.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeeShare(value: _3.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeeShare(value: _3.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelFeeShare(value: _3.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeeShare(value: _3.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _3.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _3.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _3.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _3.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _3.MsgCancelFeeShare;
                    };
                };
                fromJSON: {
                    registerFeeShare(value: any): {
                        typeUrl: string;
                        value: _3.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: any): {
                        typeUrl: string;
                        value: _3.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: any): {
                        typeUrl: string;
                        value: _3.MsgCancelFeeShare;
                    };
                };
                fromPartial: {
                    registerFeeShare(value: _3.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _3.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _3.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _3.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _3.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _3.MsgCancelFeeShare;
                    };
                };
            };
            AminoConverter: {
                "/juno.feeshare.v1.MsgRegisterFeeShare": {
                    aminoType: string;
                    toAmino: (message: _3.MsgRegisterFeeShare) => _3.MsgRegisterFeeShareAmino;
                    fromAmino: (object: _3.MsgRegisterFeeShareAmino) => _3.MsgRegisterFeeShare;
                };
                "/juno.feeshare.v1.MsgUpdateFeeShare": {
                    aminoType: string;
                    toAmino: (message: _3.MsgUpdateFeeShare) => _3.MsgUpdateFeeShareAmino;
                    fromAmino: (object: _3.MsgUpdateFeeShareAmino) => _3.MsgUpdateFeeShare;
                };
                "/juno.feeshare.v1.MsgCancelFeeShare": {
                    aminoType: string;
                    toAmino: (message: _3.MsgCancelFeeShare) => _3.MsgCancelFeeShareAmino;
                    fromAmino: (object: _3.MsgCancelFeeShareAmino) => _3.MsgCancelFeeShare;
                };
            };
            MsgRegisterFeeShare: {
                typeUrl: string;
                encode(message: _3.MsgRegisterFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgRegisterFeeShare;
                fromPartial(object: Partial<_3.MsgRegisterFeeShare>): _3.MsgRegisterFeeShare;
                fromAmino(object: _3.MsgRegisterFeeShareAmino): _3.MsgRegisterFeeShare;
                toAmino(message: _3.MsgRegisterFeeShare): _3.MsgRegisterFeeShareAmino;
                fromAminoMsg(object: _3.MsgRegisterFeeShareAminoMsg): _3.MsgRegisterFeeShare;
                fromProtoMsg(message: _3.MsgRegisterFeeShareProtoMsg): _3.MsgRegisterFeeShare;
                toProto(message: _3.MsgRegisterFeeShare): Uint8Array;
                toProtoMsg(message: _3.MsgRegisterFeeShare): _3.MsgRegisterFeeShareProtoMsg;
            };
            MsgRegisterFeeShareResponse: {
                typeUrl: string;
                encode(_: _3.MsgRegisterFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgRegisterFeeShareResponse;
                fromPartial(_: Partial<_3.MsgRegisterFeeShareResponse>): _3.MsgRegisterFeeShareResponse;
                fromAmino(_: _3.MsgRegisterFeeShareResponseAmino): _3.MsgRegisterFeeShareResponse;
                toAmino(_: _3.MsgRegisterFeeShareResponse): _3.MsgRegisterFeeShareResponseAmino;
                fromAminoMsg(object: _3.MsgRegisterFeeShareResponseAminoMsg): _3.MsgRegisterFeeShareResponse;
                fromProtoMsg(message: _3.MsgRegisterFeeShareResponseProtoMsg): _3.MsgRegisterFeeShareResponse;
                toProto(message: _3.MsgRegisterFeeShareResponse): Uint8Array;
                toProtoMsg(message: _3.MsgRegisterFeeShareResponse): _3.MsgRegisterFeeShareResponseProtoMsg;
            };
            MsgUpdateFeeShare: {
                typeUrl: string;
                encode(message: _3.MsgUpdateFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgUpdateFeeShare;
                fromPartial(object: Partial<_3.MsgUpdateFeeShare>): _3.MsgUpdateFeeShare;
                fromAmino(object: _3.MsgUpdateFeeShareAmino): _3.MsgUpdateFeeShare;
                toAmino(message: _3.MsgUpdateFeeShare): _3.MsgUpdateFeeShareAmino;
                fromAminoMsg(object: _3.MsgUpdateFeeShareAminoMsg): _3.MsgUpdateFeeShare;
                fromProtoMsg(message: _3.MsgUpdateFeeShareProtoMsg): _3.MsgUpdateFeeShare;
                toProto(message: _3.MsgUpdateFeeShare): Uint8Array;
                toProtoMsg(message: _3.MsgUpdateFeeShare): _3.MsgUpdateFeeShareProtoMsg;
            };
            MsgUpdateFeeShareResponse: {
                typeUrl: string;
                encode(_: _3.MsgUpdateFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgUpdateFeeShareResponse;
                fromPartial(_: Partial<_3.MsgUpdateFeeShareResponse>): _3.MsgUpdateFeeShareResponse;
                fromAmino(_: _3.MsgUpdateFeeShareResponseAmino): _3.MsgUpdateFeeShareResponse;
                toAmino(_: _3.MsgUpdateFeeShareResponse): _3.MsgUpdateFeeShareResponseAmino;
                fromAminoMsg(object: _3.MsgUpdateFeeShareResponseAminoMsg): _3.MsgUpdateFeeShareResponse;
                fromProtoMsg(message: _3.MsgUpdateFeeShareResponseProtoMsg): _3.MsgUpdateFeeShareResponse;
                toProto(message: _3.MsgUpdateFeeShareResponse): Uint8Array;
                toProtoMsg(message: _3.MsgUpdateFeeShareResponse): _3.MsgUpdateFeeShareResponseProtoMsg;
            };
            MsgCancelFeeShare: {
                typeUrl: string;
                encode(message: _3.MsgCancelFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgCancelFeeShare;
                fromPartial(object: Partial<_3.MsgCancelFeeShare>): _3.MsgCancelFeeShare;
                fromAmino(object: _3.MsgCancelFeeShareAmino): _3.MsgCancelFeeShare;
                toAmino(message: _3.MsgCancelFeeShare): _3.MsgCancelFeeShareAmino;
                fromAminoMsg(object: _3.MsgCancelFeeShareAminoMsg): _3.MsgCancelFeeShare;
                fromProtoMsg(message: _3.MsgCancelFeeShareProtoMsg): _3.MsgCancelFeeShare;
                toProto(message: _3.MsgCancelFeeShare): Uint8Array;
                toProtoMsg(message: _3.MsgCancelFeeShare): _3.MsgCancelFeeShareProtoMsg;
            };
            MsgCancelFeeShareResponse: {
                typeUrl: string;
                encode(_: _3.MsgCancelFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgCancelFeeShareResponse;
                fromPartial(_: Partial<_3.MsgCancelFeeShareResponse>): _3.MsgCancelFeeShareResponse;
                fromAmino(_: _3.MsgCancelFeeShareResponseAmino): _3.MsgCancelFeeShareResponse;
                toAmino(_: _3.MsgCancelFeeShareResponse): _3.MsgCancelFeeShareResponseAmino;
                fromAminoMsg(object: _3.MsgCancelFeeShareResponseAminoMsg): _3.MsgCancelFeeShareResponse;
                fromProtoMsg(message: _3.MsgCancelFeeShareResponseProtoMsg): _3.MsgCancelFeeShareResponse;
                toProto(message: _3.MsgCancelFeeShareResponse): Uint8Array;
                toProtoMsg(message: _3.MsgCancelFeeShareResponse): _3.MsgCancelFeeShareResponseProtoMsg;
            };
            QueryFeeSharesRequest: {
                typeUrl: string;
                encode(message: _2.QueryFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryFeeSharesRequest;
                fromPartial(object: Partial<_2.QueryFeeSharesRequest>): _2.QueryFeeSharesRequest;
                fromAmino(object: _2.QueryFeeSharesRequestAmino): _2.QueryFeeSharesRequest;
                toAmino(message: _2.QueryFeeSharesRequest): _2.QueryFeeSharesRequestAmino;
                fromAminoMsg(object: _2.QueryFeeSharesRequestAminoMsg): _2.QueryFeeSharesRequest;
                fromProtoMsg(message: _2.QueryFeeSharesRequestProtoMsg): _2.QueryFeeSharesRequest;
                toProto(message: _2.QueryFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _2.QueryFeeSharesRequest): _2.QueryFeeSharesRequestProtoMsg;
            };
            QueryFeeSharesResponse: {
                typeUrl: string;
                encode(message: _2.QueryFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryFeeSharesResponse;
                fromPartial(object: Partial<_2.QueryFeeSharesResponse>): _2.QueryFeeSharesResponse;
                fromAmino(object: _2.QueryFeeSharesResponseAmino): _2.QueryFeeSharesResponse;
                toAmino(message: _2.QueryFeeSharesResponse): _2.QueryFeeSharesResponseAmino;
                fromAminoMsg(object: _2.QueryFeeSharesResponseAminoMsg): _2.QueryFeeSharesResponse;
                fromProtoMsg(message: _2.QueryFeeSharesResponseProtoMsg): _2.QueryFeeSharesResponse;
                toProto(message: _2.QueryFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _2.QueryFeeSharesResponse): _2.QueryFeeSharesResponseProtoMsg;
            };
            QueryFeeShareRequest: {
                typeUrl: string;
                encode(message: _2.QueryFeeShareRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryFeeShareRequest;
                fromPartial(object: Partial<_2.QueryFeeShareRequest>): _2.QueryFeeShareRequest;
                fromAmino(object: _2.QueryFeeShareRequestAmino): _2.QueryFeeShareRequest;
                toAmino(message: _2.QueryFeeShareRequest): _2.QueryFeeShareRequestAmino;
                fromAminoMsg(object: _2.QueryFeeShareRequestAminoMsg): _2.QueryFeeShareRequest;
                fromProtoMsg(message: _2.QueryFeeShareRequestProtoMsg): _2.QueryFeeShareRequest;
                toProto(message: _2.QueryFeeShareRequest): Uint8Array;
                toProtoMsg(message: _2.QueryFeeShareRequest): _2.QueryFeeShareRequestProtoMsg;
            };
            QueryFeeShareResponse: {
                typeUrl: string;
                encode(message: _2.QueryFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryFeeShareResponse;
                fromPartial(object: Partial<_2.QueryFeeShareResponse>): _2.QueryFeeShareResponse;
                fromAmino(object: _2.QueryFeeShareResponseAmino): _2.QueryFeeShareResponse;
                toAmino(message: _2.QueryFeeShareResponse): _2.QueryFeeShareResponseAmino;
                fromAminoMsg(object: _2.QueryFeeShareResponseAminoMsg): _2.QueryFeeShareResponse;
                fromProtoMsg(message: _2.QueryFeeShareResponseProtoMsg): _2.QueryFeeShareResponse;
                toProto(message: _2.QueryFeeShareResponse): Uint8Array;
                toProtoMsg(message: _2.QueryFeeShareResponse): _2.QueryFeeShareResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _2.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
                fromAmino(_: _2.QueryParamsRequestAmino): _2.QueryParamsRequest;
                toAmino(_: _2.QueryParamsRequest): _2.QueryParamsRequestAmino;
                fromAminoMsg(object: _2.QueryParamsRequestAminoMsg): _2.QueryParamsRequest;
                fromProtoMsg(message: _2.QueryParamsRequestProtoMsg): _2.QueryParamsRequest;
                toProto(message: _2.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryParamsRequest): _2.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _2.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
                fromAmino(object: _2.QueryParamsResponseAmino): _2.QueryParamsResponse;
                toAmino(message: _2.QueryParamsResponse): _2.QueryParamsResponseAmino;
                fromAminoMsg(object: _2.QueryParamsResponseAminoMsg): _2.QueryParamsResponse;
                fromProtoMsg(message: _2.QueryParamsResponseProtoMsg): _2.QueryParamsResponse;
                toProto(message: _2.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryParamsResponse): _2.QueryParamsResponseProtoMsg;
            };
            QueryDeployerFeeSharesRequest: {
                typeUrl: string;
                encode(message: _2.QueryDeployerFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryDeployerFeeSharesRequest;
                fromPartial(object: Partial<_2.QueryDeployerFeeSharesRequest>): _2.QueryDeployerFeeSharesRequest;
                fromAmino(object: _2.QueryDeployerFeeSharesRequestAmino): _2.QueryDeployerFeeSharesRequest;
                toAmino(message: _2.QueryDeployerFeeSharesRequest): _2.QueryDeployerFeeSharesRequestAmino;
                fromAminoMsg(object: _2.QueryDeployerFeeSharesRequestAminoMsg): _2.QueryDeployerFeeSharesRequest;
                fromProtoMsg(message: _2.QueryDeployerFeeSharesRequestProtoMsg): _2.QueryDeployerFeeSharesRequest;
                toProto(message: _2.QueryDeployerFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _2.QueryDeployerFeeSharesRequest): _2.QueryDeployerFeeSharesRequestProtoMsg;
            };
            QueryDeployerFeeSharesResponse: {
                typeUrl: string;
                encode(message: _2.QueryDeployerFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryDeployerFeeSharesResponse;
                fromPartial(object: Partial<_2.QueryDeployerFeeSharesResponse>): _2.QueryDeployerFeeSharesResponse;
                fromAmino(object: _2.QueryDeployerFeeSharesResponseAmino): _2.QueryDeployerFeeSharesResponse;
                toAmino(message: _2.QueryDeployerFeeSharesResponse): _2.QueryDeployerFeeSharesResponseAmino;
                fromAminoMsg(object: _2.QueryDeployerFeeSharesResponseAminoMsg): _2.QueryDeployerFeeSharesResponse;
                fromProtoMsg(message: _2.QueryDeployerFeeSharesResponseProtoMsg): _2.QueryDeployerFeeSharesResponse;
                toProto(message: _2.QueryDeployerFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _2.QueryDeployerFeeSharesResponse): _2.QueryDeployerFeeSharesResponseProtoMsg;
            };
            QueryWithdrawerFeeSharesRequest: {
                typeUrl: string;
                encode(message: _2.QueryWithdrawerFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryWithdrawerFeeSharesRequest;
                fromPartial(object: Partial<_2.QueryWithdrawerFeeSharesRequest>): _2.QueryWithdrawerFeeSharesRequest;
                fromAmino(object: _2.QueryWithdrawerFeeSharesRequestAmino): _2.QueryWithdrawerFeeSharesRequest;
                toAmino(message: _2.QueryWithdrawerFeeSharesRequest): _2.QueryWithdrawerFeeSharesRequestAmino;
                fromAminoMsg(object: _2.QueryWithdrawerFeeSharesRequestAminoMsg): _2.QueryWithdrawerFeeSharesRequest;
                fromProtoMsg(message: _2.QueryWithdrawerFeeSharesRequestProtoMsg): _2.QueryWithdrawerFeeSharesRequest;
                toProto(message: _2.QueryWithdrawerFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _2.QueryWithdrawerFeeSharesRequest): _2.QueryWithdrawerFeeSharesRequestProtoMsg;
            };
            QueryWithdrawerFeeSharesResponse: {
                typeUrl: string;
                encode(message: _2.QueryWithdrawerFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryWithdrawerFeeSharesResponse;
                fromPartial(object: Partial<_2.QueryWithdrawerFeeSharesResponse>): _2.QueryWithdrawerFeeSharesResponse;
                fromAmino(object: _2.QueryWithdrawerFeeSharesResponseAmino): _2.QueryWithdrawerFeeSharesResponse;
                toAmino(message: _2.QueryWithdrawerFeeSharesResponse): _2.QueryWithdrawerFeeSharesResponseAmino;
                fromAminoMsg(object: _2.QueryWithdrawerFeeSharesResponseAminoMsg): _2.QueryWithdrawerFeeSharesResponse;
                fromProtoMsg(message: _2.QueryWithdrawerFeeSharesResponseProtoMsg): _2.QueryWithdrawerFeeSharesResponse;
                toProto(message: _2.QueryWithdrawerFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _2.QueryWithdrawerFeeSharesResponse): _2.QueryWithdrawerFeeSharesResponseProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _1.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.Params;
                fromPartial(object: Partial<_1.Params>): _1.Params;
                fromAmino(object: _1.ParamsAmino): _1.Params;
                toAmino(message: _1.Params): _1.ParamsAmino;
                fromAminoMsg(object: _1.ParamsAminoMsg): _1.Params;
                fromProtoMsg(message: _1.ParamsProtoMsg): _1.Params;
                toProto(message: _1.Params): Uint8Array;
                toProtoMsg(message: _1.Params): _1.ParamsProtoMsg;
            };
            FeeShare: {
                typeUrl: string;
                encode(message: _0.FeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.FeeShare;
                fromPartial(object: Partial<_0.FeeShare>): _0.FeeShare;
                fromAmino(object: _0.FeeShareAmino): _0.FeeShare;
                toAmino(message: _0.FeeShare): _0.FeeShareAmino;
                fromAminoMsg(object: _0.FeeShareAminoMsg): _0.FeeShare;
                fromProtoMsg(message: _0.FeeShareProtoMsg): _0.FeeShare;
                toProto(message: _0.FeeShare): Uint8Array;
                toProtoMsg(message: _0.FeeShare): _0.FeeShareProtoMsg;
            };
        };
    }
    const mint: {
        QueryClientImpl: typeof _114.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
            inflation(request?: _6.QueryInflationRequest): Promise<_6.QueryInflationResponse>;
            annualProvisions(request?: _6.QueryAnnualProvisionsRequest): Promise<_6.QueryAnnualProvisionsResponse>;
        };
        LCDQueryClient: typeof _112.LCDQueryClient;
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _6.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryParamsRequest;
            fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
            fromAmino(_: _6.QueryParamsRequestAmino): _6.QueryParamsRequest;
            toAmino(_: _6.QueryParamsRequest): _6.QueryParamsRequestAmino;
            fromAminoMsg(object: _6.QueryParamsRequestAminoMsg): _6.QueryParamsRequest;
            fromProtoMsg(message: _6.QueryParamsRequestProtoMsg): _6.QueryParamsRequest;
            toProto(message: _6.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryParamsRequest): _6.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _6.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryParamsResponse;
            fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
            fromAmino(object: _6.QueryParamsResponseAmino): _6.QueryParamsResponse;
            toAmino(message: _6.QueryParamsResponse): _6.QueryParamsResponseAmino;
            fromAminoMsg(object: _6.QueryParamsResponseAminoMsg): _6.QueryParamsResponse;
            fromProtoMsg(message: _6.QueryParamsResponseProtoMsg): _6.QueryParamsResponse;
            toProto(message: _6.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryParamsResponse): _6.QueryParamsResponseProtoMsg;
        };
        QueryInflationRequest: {
            typeUrl: string;
            encode(_: _6.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryInflationRequest;
            fromPartial(_: Partial<_6.QueryInflationRequest>): _6.QueryInflationRequest;
            fromAmino(_: _6.QueryInflationRequestAmino): _6.QueryInflationRequest;
            toAmino(_: _6.QueryInflationRequest): _6.QueryInflationRequestAmino;
            fromAminoMsg(object: _6.QueryInflationRequestAminoMsg): _6.QueryInflationRequest;
            fromProtoMsg(message: _6.QueryInflationRequestProtoMsg): _6.QueryInflationRequest;
            toProto(message: _6.QueryInflationRequest): Uint8Array;
            toProtoMsg(message: _6.QueryInflationRequest): _6.QueryInflationRequestProtoMsg;
        };
        QueryInflationResponse: {
            typeUrl: string;
            encode(message: _6.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryInflationResponse;
            fromPartial(object: Partial<_6.QueryInflationResponse>): _6.QueryInflationResponse;
            fromAmino(object: _6.QueryInflationResponseAmino): _6.QueryInflationResponse;
            toAmino(message: _6.QueryInflationResponse): _6.QueryInflationResponseAmino;
            fromAminoMsg(object: _6.QueryInflationResponseAminoMsg): _6.QueryInflationResponse;
            fromProtoMsg(message: _6.QueryInflationResponseProtoMsg): _6.QueryInflationResponse;
            toProto(message: _6.QueryInflationResponse): Uint8Array;
            toProtoMsg(message: _6.QueryInflationResponse): _6.QueryInflationResponseProtoMsg;
        };
        QueryAnnualProvisionsRequest: {
            typeUrl: string;
            encode(_: _6.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryAnnualProvisionsRequest;
            fromPartial(_: Partial<_6.QueryAnnualProvisionsRequest>): _6.QueryAnnualProvisionsRequest;
            fromAmino(_: _6.QueryAnnualProvisionsRequestAmino): _6.QueryAnnualProvisionsRequest;
            toAmino(_: _6.QueryAnnualProvisionsRequest): _6.QueryAnnualProvisionsRequestAmino;
            fromAminoMsg(object: _6.QueryAnnualProvisionsRequestAminoMsg): _6.QueryAnnualProvisionsRequest;
            fromProtoMsg(message: _6.QueryAnnualProvisionsRequestProtoMsg): _6.QueryAnnualProvisionsRequest;
            toProto(message: _6.QueryAnnualProvisionsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryAnnualProvisionsRequest): _6.QueryAnnualProvisionsRequestProtoMsg;
        };
        QueryAnnualProvisionsResponse: {
            typeUrl: string;
            encode(message: _6.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryAnnualProvisionsResponse;
            fromPartial(object: Partial<_6.QueryAnnualProvisionsResponse>): _6.QueryAnnualProvisionsResponse;
            fromAmino(object: _6.QueryAnnualProvisionsResponseAmino): _6.QueryAnnualProvisionsResponse;
            toAmino(message: _6.QueryAnnualProvisionsResponse): _6.QueryAnnualProvisionsResponseAmino;
            fromAminoMsg(object: _6.QueryAnnualProvisionsResponseAminoMsg): _6.QueryAnnualProvisionsResponse;
            fromProtoMsg(message: _6.QueryAnnualProvisionsResponseProtoMsg): _6.QueryAnnualProvisionsResponse;
            toProto(message: _6.QueryAnnualProvisionsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryAnnualProvisionsResponse): _6.QueryAnnualProvisionsResponseProtoMsg;
        };
        Minter: {
            typeUrl: string;
            encode(message: _5.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.Minter;
            fromPartial(object: Partial<_5.Minter>): _5.Minter;
            fromAmino(object: _5.MinterAmino): _5.Minter;
            toAmino(message: _5.Minter): _5.MinterAmino;
            fromAminoMsg(object: _5.MinterAminoMsg): _5.Minter;
            fromProtoMsg(message: _5.MinterProtoMsg): _5.Minter;
            toProto(message: _5.Minter): Uint8Array;
            toProtoMsg(message: _5.Minter): _5.MinterProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _5.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.Params;
            fromPartial(object: Partial<_5.Params>): _5.Params;
            fromAmino(object: _5.ParamsAmino): _5.Params;
            toAmino(message: _5.Params): _5.ParamsAmino;
            fromAminoMsg(object: _5.ParamsAminoMsg): _5.Params;
            fromProtoMsg(message: _5.ParamsProtoMsg): _5.Params;
            toProto(message: _5.Params): Uint8Array;
            toProtoMsg(message: _5.Params): _5.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.GenesisState;
            fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
            fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
            toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
            fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
            fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
            toProto(message: _4.GenesisState): Uint8Array;
            toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            juno: {
                feeshare: {
                    v1: _115.MsgClientImpl;
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
            juno: {
                feeshare: {
                    v1: {
                        feeShares(request?: _2.QueryFeeSharesRequest): Promise<_2.QueryFeeSharesResponse>;
                        feeShare(request: _2.QueryFeeShareRequest): Promise<_2.QueryFeeShareResponse>;
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        deployerFeeShares(request: _2.QueryDeployerFeeSharesRequest): Promise<_2.QueryDeployerFeeSharesResponse>;
                        withdrawerFeeShares(request: _2.QueryWithdrawerFeeSharesRequest): Promise<_2.QueryWithdrawerFeeSharesResponse>;
                    };
                };
                mint: {
                    params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                    inflation(request?: _6.QueryInflationRequest): Promise<_6.QueryInflationResponse>;
                    annualProvisions(request?: _6.QueryAnnualProvisionsRequest): Promise<_6.QueryAnnualProvisionsResponse>;
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
            juno: {
                feeshare: {
                    v1: _111.LCDQueryClient;
                };
                mint: _112.LCDQueryClient;
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
