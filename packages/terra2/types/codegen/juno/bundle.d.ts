import * as _126 from "./feeshare/v1/events";
import * as _127 from "./feeshare/v1/feeshare";
import * as _128 from "./feeshare/v1/genesis";
import * as _129 from "./feeshare/v1/query";
import * as _130 from "./feeshare/v1/tx";
import * as _260 from "./feeshare/v1/query.lcd";
import * as _261 from "./feeshare/v1/query.rpc.Query";
import * as _262 from "./feeshare/v1/tx.rpc.msg";
export declare namespace juno {
    namespace feeshare {
        const v1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                feeShares(request?: _129.QueryFeeSharesRequest): Promise<_129.QueryFeeSharesResponse>;
                feeShare(request: _129.QueryFeeShareRequest): Promise<_129.QueryFeeShareResponse>;
                params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                deployerFeeShares(request: _129.QueryDeployerFeeSharesRequest): Promise<_129.QueryDeployerFeeSharesResponse>;
                withdrawerFeeShares(request: _129.QueryWithdrawerFeeSharesRequest): Promise<_129.QueryWithdrawerFeeSharesResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    registerFeeShare(value: _130.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateFeeShare(value: _130.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelFeeShare(value: _130.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerFeeShare(value: _130.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _130.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _130.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _130.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _130.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _130.MsgCancelFeeShare;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    registerFeeShare(value: any): {
                        typeUrl: string;
                        value: _130.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: any): {
                        typeUrl: string;
                        value: _130.MsgCancelFeeShare;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerFeeShare(value: _130.MsgRegisterFeeShare): {
                        typeUrl: string;
                        value: _130.MsgRegisterFeeShare;
                    };
                    updateFeeShare(value: _130.MsgUpdateFeeShare): {
                        typeUrl: string;
                        value: _130.MsgUpdateFeeShare;
                    };
                    cancelFeeShare(value: _130.MsgCancelFeeShare): {
                        typeUrl: string;
                        value: _130.MsgCancelFeeShare;
                    };
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/juno.feeshare.v1.MsgRegisterFeeShare": {
                    aminoType: string;
                    toAmino: (message: _130.MsgRegisterFeeShare) => _130.MsgRegisterFeeShareAmino;
                    fromAmino: (object: _130.MsgRegisterFeeShareAmino) => _130.MsgRegisterFeeShare;
                };
                "/juno.feeshare.v1.MsgUpdateFeeShare": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateFeeShare) => _130.MsgUpdateFeeShareAmino;
                    fromAmino: (object: _130.MsgUpdateFeeShareAmino) => _130.MsgUpdateFeeShare;
                };
                "/juno.feeshare.v1.MsgCancelFeeShare": {
                    aminoType: string;
                    toAmino: (message: _130.MsgCancelFeeShare) => _130.MsgCancelFeeShareAmino;
                    fromAmino: (object: _130.MsgCancelFeeShareAmino) => _130.MsgCancelFeeShare;
                };
                "/juno.feeshare.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateParams) => _130.MsgUpdateParamsAmino;
                    fromAmino: (object: _130.MsgUpdateParamsAmino) => _130.MsgUpdateParams;
                };
            };
            MsgRegisterFeeShare: {
                typeUrl: string;
                encode(message: _130.MsgRegisterFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgRegisterFeeShare;
                fromPartial(object: Partial<_130.MsgRegisterFeeShare>): _130.MsgRegisterFeeShare;
                fromAmino(object: _130.MsgRegisterFeeShareAmino): _130.MsgRegisterFeeShare;
                toAmino(message: _130.MsgRegisterFeeShare): _130.MsgRegisterFeeShareAmino;
                fromAminoMsg(object: _130.MsgRegisterFeeShareAminoMsg): _130.MsgRegisterFeeShare;
                fromProtoMsg(message: _130.MsgRegisterFeeShareProtoMsg): _130.MsgRegisterFeeShare;
                toProto(message: _130.MsgRegisterFeeShare): Uint8Array;
                toProtoMsg(message: _130.MsgRegisterFeeShare): _130.MsgRegisterFeeShareProtoMsg;
            };
            MsgRegisterFeeShareResponse: {
                typeUrl: string;
                encode(_: _130.MsgRegisterFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgRegisterFeeShareResponse;
                fromPartial(_: Partial<_130.MsgRegisterFeeShareResponse>): _130.MsgRegisterFeeShareResponse;
                fromAmino(_: _130.MsgRegisterFeeShareResponseAmino): _130.MsgRegisterFeeShareResponse;
                toAmino(_: _130.MsgRegisterFeeShareResponse): _130.MsgRegisterFeeShareResponseAmino;
                fromAminoMsg(object: _130.MsgRegisterFeeShareResponseAminoMsg): _130.MsgRegisterFeeShareResponse;
                fromProtoMsg(message: _130.MsgRegisterFeeShareResponseProtoMsg): _130.MsgRegisterFeeShareResponse;
                toProto(message: _130.MsgRegisterFeeShareResponse): Uint8Array;
                toProtoMsg(message: _130.MsgRegisterFeeShareResponse): _130.MsgRegisterFeeShareResponseProtoMsg;
            };
            MsgUpdateFeeShare: {
                typeUrl: string;
                encode(message: _130.MsgUpdateFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateFeeShare;
                fromPartial(object: Partial<_130.MsgUpdateFeeShare>): _130.MsgUpdateFeeShare;
                fromAmino(object: _130.MsgUpdateFeeShareAmino): _130.MsgUpdateFeeShare;
                toAmino(message: _130.MsgUpdateFeeShare): _130.MsgUpdateFeeShareAmino;
                fromAminoMsg(object: _130.MsgUpdateFeeShareAminoMsg): _130.MsgUpdateFeeShare;
                fromProtoMsg(message: _130.MsgUpdateFeeShareProtoMsg): _130.MsgUpdateFeeShare;
                toProto(message: _130.MsgUpdateFeeShare): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateFeeShare): _130.MsgUpdateFeeShareProtoMsg;
            };
            MsgUpdateFeeShareResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateFeeShareResponse;
                fromPartial(_: Partial<_130.MsgUpdateFeeShareResponse>): _130.MsgUpdateFeeShareResponse;
                fromAmino(_: _130.MsgUpdateFeeShareResponseAmino): _130.MsgUpdateFeeShareResponse;
                toAmino(_: _130.MsgUpdateFeeShareResponse): _130.MsgUpdateFeeShareResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateFeeShareResponseAminoMsg): _130.MsgUpdateFeeShareResponse;
                fromProtoMsg(message: _130.MsgUpdateFeeShareResponseProtoMsg): _130.MsgUpdateFeeShareResponse;
                toProto(message: _130.MsgUpdateFeeShareResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateFeeShareResponse): _130.MsgUpdateFeeShareResponseProtoMsg;
            };
            MsgCancelFeeShare: {
                typeUrl: string;
                encode(message: _130.MsgCancelFeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgCancelFeeShare;
                fromPartial(object: Partial<_130.MsgCancelFeeShare>): _130.MsgCancelFeeShare;
                fromAmino(object: _130.MsgCancelFeeShareAmino): _130.MsgCancelFeeShare;
                toAmino(message: _130.MsgCancelFeeShare): _130.MsgCancelFeeShareAmino;
                fromAminoMsg(object: _130.MsgCancelFeeShareAminoMsg): _130.MsgCancelFeeShare;
                fromProtoMsg(message: _130.MsgCancelFeeShareProtoMsg): _130.MsgCancelFeeShare;
                toProto(message: _130.MsgCancelFeeShare): Uint8Array;
                toProtoMsg(message: _130.MsgCancelFeeShare): _130.MsgCancelFeeShareProtoMsg;
            };
            MsgCancelFeeShareResponse: {
                typeUrl: string;
                encode(_: _130.MsgCancelFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgCancelFeeShareResponse;
                fromPartial(_: Partial<_130.MsgCancelFeeShareResponse>): _130.MsgCancelFeeShareResponse;
                fromAmino(_: _130.MsgCancelFeeShareResponseAmino): _130.MsgCancelFeeShareResponse;
                toAmino(_: _130.MsgCancelFeeShareResponse): _130.MsgCancelFeeShareResponseAmino;
                fromAminoMsg(object: _130.MsgCancelFeeShareResponseAminoMsg): _130.MsgCancelFeeShareResponse;
                fromProtoMsg(message: _130.MsgCancelFeeShareResponseProtoMsg): _130.MsgCancelFeeShareResponse;
                toProto(message: _130.MsgCancelFeeShareResponse): Uint8Array;
                toProtoMsg(message: _130.MsgCancelFeeShareResponse): _130.MsgCancelFeeShareResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _130.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MsgUpdateParams;
                fromPartial(object: Partial<_130.MsgUpdateParams>): _130.MsgUpdateParams;
                fromAmino(object: _130.MsgUpdateParamsAmino): _130.MsgUpdateParams;
                toAmino(message: _130.MsgUpdateParams): _130.MsgUpdateParamsAmino;
                fromAminoMsg(object: _130.MsgUpdateParamsAminoMsg): _130.MsgUpdateParams;
                fromProtoMsg(message: _130.MsgUpdateParamsProtoMsg): _130.MsgUpdateParams;
                toProto(message: _130.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateParams): _130.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _130.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_130.MsgUpdateParamsResponse>): _130.MsgUpdateParamsResponse;
                fromAmino(_: _130.MsgUpdateParamsResponseAmino): _130.MsgUpdateParamsResponse;
                toAmino(_: _130.MsgUpdateParamsResponse): _130.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateParamsResponseAminoMsg): _130.MsgUpdateParamsResponse;
                fromProtoMsg(message: _130.MsgUpdateParamsResponseProtoMsg): _130.MsgUpdateParamsResponse;
                toProto(message: _130.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateParamsResponse): _130.MsgUpdateParamsResponseProtoMsg;
            };
            QueryFeeSharesRequest: {
                typeUrl: string;
                encode(message: _129.QueryFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryFeeSharesRequest;
                fromPartial(object: Partial<_129.QueryFeeSharesRequest>): _129.QueryFeeSharesRequest;
                fromAmino(object: _129.QueryFeeSharesRequestAmino): _129.QueryFeeSharesRequest;
                toAmino(message: _129.QueryFeeSharesRequest): _129.QueryFeeSharesRequestAmino;
                fromAminoMsg(object: _129.QueryFeeSharesRequestAminoMsg): _129.QueryFeeSharesRequest;
                fromProtoMsg(message: _129.QueryFeeSharesRequestProtoMsg): _129.QueryFeeSharesRequest;
                toProto(message: _129.QueryFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryFeeSharesRequest): _129.QueryFeeSharesRequestProtoMsg;
            };
            QueryFeeSharesResponse: {
                typeUrl: string;
                encode(message: _129.QueryFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryFeeSharesResponse;
                fromPartial(object: Partial<_129.QueryFeeSharesResponse>): _129.QueryFeeSharesResponse;
                fromAmino(object: _129.QueryFeeSharesResponseAmino): _129.QueryFeeSharesResponse;
                toAmino(message: _129.QueryFeeSharesResponse): _129.QueryFeeSharesResponseAmino;
                fromAminoMsg(object: _129.QueryFeeSharesResponseAminoMsg): _129.QueryFeeSharesResponse;
                fromProtoMsg(message: _129.QueryFeeSharesResponseProtoMsg): _129.QueryFeeSharesResponse;
                toProto(message: _129.QueryFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryFeeSharesResponse): _129.QueryFeeSharesResponseProtoMsg;
            };
            QueryFeeShareRequest: {
                typeUrl: string;
                encode(message: _129.QueryFeeShareRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryFeeShareRequest;
                fromPartial(object: Partial<_129.QueryFeeShareRequest>): _129.QueryFeeShareRequest;
                fromAmino(object: _129.QueryFeeShareRequestAmino): _129.QueryFeeShareRequest;
                toAmino(message: _129.QueryFeeShareRequest): _129.QueryFeeShareRequestAmino;
                fromAminoMsg(object: _129.QueryFeeShareRequestAminoMsg): _129.QueryFeeShareRequest;
                fromProtoMsg(message: _129.QueryFeeShareRequestProtoMsg): _129.QueryFeeShareRequest;
                toProto(message: _129.QueryFeeShareRequest): Uint8Array;
                toProtoMsg(message: _129.QueryFeeShareRequest): _129.QueryFeeShareRequestProtoMsg;
            };
            QueryFeeShareResponse: {
                typeUrl: string;
                encode(message: _129.QueryFeeShareResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryFeeShareResponse;
                fromPartial(object: Partial<_129.QueryFeeShareResponse>): _129.QueryFeeShareResponse;
                fromAmino(object: _129.QueryFeeShareResponseAmino): _129.QueryFeeShareResponse;
                toAmino(message: _129.QueryFeeShareResponse): _129.QueryFeeShareResponseAmino;
                fromAminoMsg(object: _129.QueryFeeShareResponseAminoMsg): _129.QueryFeeShareResponse;
                fromProtoMsg(message: _129.QueryFeeShareResponseProtoMsg): _129.QueryFeeShareResponse;
                toProto(message: _129.QueryFeeShareResponse): Uint8Array;
                toProtoMsg(message: _129.QueryFeeShareResponse): _129.QueryFeeShareResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _129.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _129.QueryParamsRequest;
                fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
                fromAmino(_: _129.QueryParamsRequestAmino): _129.QueryParamsRequest;
                toAmino(_: _129.QueryParamsRequest): _129.QueryParamsRequestAmino;
                fromAminoMsg(object: _129.QueryParamsRequestAminoMsg): _129.QueryParamsRequest;
                fromProtoMsg(message: _129.QueryParamsRequestProtoMsg): _129.QueryParamsRequest;
                toProto(message: _129.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _129.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryParamsResponse;
                fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
                fromAmino(object: _129.QueryParamsResponseAmino): _129.QueryParamsResponse;
                toAmino(message: _129.QueryParamsResponse): _129.QueryParamsResponseAmino;
                fromAminoMsg(object: _129.QueryParamsResponseAminoMsg): _129.QueryParamsResponse;
                fromProtoMsg(message: _129.QueryParamsResponseProtoMsg): _129.QueryParamsResponse;
                toProto(message: _129.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseProtoMsg;
            };
            QueryDeployerFeeSharesRequest: {
                typeUrl: string;
                encode(message: _129.QueryDeployerFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDeployerFeeSharesRequest;
                fromPartial(object: Partial<_129.QueryDeployerFeeSharesRequest>): _129.QueryDeployerFeeSharesRequest;
                fromAmino(object: _129.QueryDeployerFeeSharesRequestAmino): _129.QueryDeployerFeeSharesRequest;
                toAmino(message: _129.QueryDeployerFeeSharesRequest): _129.QueryDeployerFeeSharesRequestAmino;
                fromAminoMsg(object: _129.QueryDeployerFeeSharesRequestAminoMsg): _129.QueryDeployerFeeSharesRequest;
                fromProtoMsg(message: _129.QueryDeployerFeeSharesRequestProtoMsg): _129.QueryDeployerFeeSharesRequest;
                toProto(message: _129.QueryDeployerFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryDeployerFeeSharesRequest): _129.QueryDeployerFeeSharesRequestProtoMsg;
            };
            QueryDeployerFeeSharesResponse: {
                typeUrl: string;
                encode(message: _129.QueryDeployerFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryDeployerFeeSharesResponse;
                fromPartial(object: Partial<_129.QueryDeployerFeeSharesResponse>): _129.QueryDeployerFeeSharesResponse;
                fromAmino(object: _129.QueryDeployerFeeSharesResponseAmino): _129.QueryDeployerFeeSharesResponse;
                toAmino(message: _129.QueryDeployerFeeSharesResponse): _129.QueryDeployerFeeSharesResponseAmino;
                fromAminoMsg(object: _129.QueryDeployerFeeSharesResponseAminoMsg): _129.QueryDeployerFeeSharesResponse;
                fromProtoMsg(message: _129.QueryDeployerFeeSharesResponseProtoMsg): _129.QueryDeployerFeeSharesResponse;
                toProto(message: _129.QueryDeployerFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryDeployerFeeSharesResponse): _129.QueryDeployerFeeSharesResponseProtoMsg;
            };
            QueryWithdrawerFeeSharesRequest: {
                typeUrl: string;
                encode(message: _129.QueryWithdrawerFeeSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryWithdrawerFeeSharesRequest;
                fromPartial(object: Partial<_129.QueryWithdrawerFeeSharesRequest>): _129.QueryWithdrawerFeeSharesRequest;
                fromAmino(object: _129.QueryWithdrawerFeeSharesRequestAmino): _129.QueryWithdrawerFeeSharesRequest;
                toAmino(message: _129.QueryWithdrawerFeeSharesRequest): _129.QueryWithdrawerFeeSharesRequestAmino;
                fromAminoMsg(object: _129.QueryWithdrawerFeeSharesRequestAminoMsg): _129.QueryWithdrawerFeeSharesRequest;
                fromProtoMsg(message: _129.QueryWithdrawerFeeSharesRequestProtoMsg): _129.QueryWithdrawerFeeSharesRequest;
                toProto(message: _129.QueryWithdrawerFeeSharesRequest): Uint8Array;
                toProtoMsg(message: _129.QueryWithdrawerFeeSharesRequest): _129.QueryWithdrawerFeeSharesRequestProtoMsg;
            };
            QueryWithdrawerFeeSharesResponse: {
                typeUrl: string;
                encode(message: _129.QueryWithdrawerFeeSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.QueryWithdrawerFeeSharesResponse;
                fromPartial(object: Partial<_129.QueryWithdrawerFeeSharesResponse>): _129.QueryWithdrawerFeeSharesResponse;
                fromAmino(object: _129.QueryWithdrawerFeeSharesResponseAmino): _129.QueryWithdrawerFeeSharesResponse;
                toAmino(message: _129.QueryWithdrawerFeeSharesResponse): _129.QueryWithdrawerFeeSharesResponseAmino;
                fromAminoMsg(object: _129.QueryWithdrawerFeeSharesResponseAminoMsg): _129.QueryWithdrawerFeeSharesResponse;
                fromProtoMsg(message: _129.QueryWithdrawerFeeSharesResponseProtoMsg): _129.QueryWithdrawerFeeSharesResponse;
                toProto(message: _129.QueryWithdrawerFeeSharesResponse): Uint8Array;
                toProtoMsg(message: _129.QueryWithdrawerFeeSharesResponse): _129.QueryWithdrawerFeeSharesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _128.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
                fromAmino(object: _128.GenesisStateAmino): _128.GenesisState;
                toAmino(message: _128.GenesisState): _128.GenesisStateAmino;
                fromAminoMsg(object: _128.GenesisStateAminoMsg): _128.GenesisState;
                fromProtoMsg(message: _128.GenesisStateProtoMsg): _128.GenesisState;
                toProto(message: _128.GenesisState): Uint8Array;
                toProtoMsg(message: _128.GenesisState): _128.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _128.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Params;
                fromPartial(object: Partial<_128.Params>): _128.Params;
                fromAmino(object: _128.ParamsAmino): _128.Params;
                toAmino(message: _128.Params): _128.ParamsAmino;
                fromAminoMsg(object: _128.ParamsAminoMsg): _128.Params;
                fromProtoMsg(message: _128.ParamsProtoMsg): _128.Params;
                toProto(message: _128.Params): Uint8Array;
                toProtoMsg(message: _128.Params): _128.ParamsProtoMsg;
            };
            FeeShare: {
                typeUrl: string;
                encode(message: _127.FeeShare, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.FeeShare;
                fromPartial(object: Partial<_127.FeeShare>): _127.FeeShare;
                fromAmino(object: _127.FeeShareAmino): _127.FeeShare;
                toAmino(message: _127.FeeShare): _127.FeeShareAmino;
                fromAminoMsg(object: _127.FeeShareAminoMsg): _127.FeeShare;
                fromProtoMsg(message: _127.FeeShareProtoMsg): _127.FeeShare;
                toProto(message: _127.FeeShare): Uint8Array;
                toProtoMsg(message: _127.FeeShare): _127.FeeShareProtoMsg;
            };
            FeePayoutEvent: {
                typeUrl: string;
                encode(message: _126.FeePayoutEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.FeePayoutEvent;
                fromPartial(object: Partial<_126.FeePayoutEvent>): _126.FeePayoutEvent;
                fromAmino(object: _126.FeePayoutEventAmino): _126.FeePayoutEvent;
                toAmino(message: _126.FeePayoutEvent): _126.FeePayoutEventAmino;
                fromAminoMsg(object: _126.FeePayoutEventAminoMsg): _126.FeePayoutEvent;
                fromProtoMsg(message: _126.FeePayoutEventProtoMsg): _126.FeePayoutEvent;
                toProto(message: _126.FeePayoutEvent): Uint8Array;
                toProtoMsg(message: _126.FeePayoutEvent): _126.FeePayoutEventProtoMsg;
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
            juno: {
                feeshare: {
                    v1: _262.MsgClientImpl;
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
            juno: {
                feeshare: {
                    v1: {
                        feeShares(request?: _129.QueryFeeSharesRequest): Promise<_129.QueryFeeSharesResponse>;
                        feeShare(request: _129.QueryFeeShareRequest): Promise<_129.QueryFeeShareResponse>;
                        params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                        deployerFeeShares(request: _129.QueryDeployerFeeSharesRequest): Promise<_129.QueryDeployerFeeSharesResponse>;
                        withdrawerFeeShares(request: _129.QueryWithdrawerFeeSharesRequest): Promise<_129.QueryWithdrawerFeeSharesResponse>;
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
            juno: {
                feeshare: {
                    v1: _260.LCDQueryClient;
                };
            };
        }>;
    };
}
