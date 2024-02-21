import * as _0 from "./contractmanager/failure";
import * as _1 from "./contractmanager/genesis";
import * as _2 from "./contractmanager/params";
import * as _3 from "./contractmanager/query";
import * as _4 from "./contractmanager/tx";
import * as _5 from "./cron/genesis";
import * as _6 from "./cron/params";
import * as _7 from "./cron/query";
import * as _8 from "./cron/schedule";
import * as _9 from "./cron/tx";
import * as _10 from "./dex/deposit_record";
import * as _11 from "./dex/genesis";
import * as _12 from "./dex/limit_order_expiration";
import * as _13 from "./dex/limit_order_tranche_user";
import * as _14 from "./dex/limit_order_tranche";
import * as _15 from "./dex/pair_id";
import * as _16 from "./dex/params";
import * as _17 from "./dex/pool_metadata";
import * as _18 from "./dex/pool_reserves";
import * as _19 from "./dex/pool";
import * as _20 from "./dex/query";
import * as _21 from "./dex/tick_liquidity";
import * as _22 from "./dex/trade_pair_id";
import * as _23 from "./dex/tx";
import * as _24 from "./feeburner/genesis";
import * as _25 from "./feeburner/params";
import * as _26 from "./feeburner/query";
import * as _27 from "./feeburner/total_burned_neutrons_amount";
import * as _28 from "./feeburner/tx";
import * as _29 from "./feerefunder/fee";
import * as _30 from "./feerefunder/genesis";
import * as _31 from "./feerefunder/params";
import * as _32 from "./feerefunder/query";
import * as _33 from "./feerefunder/tx";
import * as _34 from "./interchainqueries/genesis";
import * as _35 from "./interchainqueries/params";
import * as _36 from "./interchainqueries/query";
import * as _37 from "./interchainqueries/tx";
import * as _38 from "./interchaintxs/v1/genesis";
import * as _39 from "./interchaintxs/v1/params";
import * as _40 from "./interchaintxs/v1/query";
import * as _41 from "./interchaintxs/v1/tx";
import * as _43 from "./transfer/v1/tx";
import * as _257 from "./contractmanager/query.lcd";
import * as _258 from "./cron/query.lcd";
import * as _259 from "./dex/query.lcd";
import * as _260 from "./feeburner/query.lcd";
import * as _261 from "./feerefunder/query.lcd";
import * as _262 from "./interchainqueries/query.lcd";
import * as _263 from "./interchaintxs/v1/query.lcd";
import * as _264 from "./transfer/v1/query.lcd";
import * as _265 from "./contractmanager/query.rpc.Query";
import * as _266 from "./cron/query.rpc.Query";
import * as _267 from "./dex/query.rpc.Query";
import * as _268 from "./feeburner/query.rpc.Query";
import * as _269 from "./feerefunder/query.rpc.Query";
import * as _270 from "./interchainqueries/query.rpc.Query";
import * as _271 from "./interchaintxs/v1/query.rpc.Query";
import * as _272 from "./transfer/v1/query.rpc.Query";
import * as _273 from "./contractmanager/tx.rpc.msg";
import * as _274 from "./cron/tx.rpc.msg";
import * as _275 from "./dex/tx.rpc.msg";
import * as _276 from "./feeburner/tx.rpc.msg";
import * as _277 from "./feerefunder/tx.rpc.msg";
import * as _278 from "./interchainqueries/tx.rpc.msg";
import * as _279 from "./interchaintxs/v1/tx.rpc.msg";
import * as _280 from "./transfer/v1/tx.rpc.msg";
export declare namespace neutron {
    const contractmanager: {
        MsgClientImpl: typeof _273.MsgClientImpl;
        QueryClientImpl: typeof _265.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
            addressFailure(request: _3.QueryFailuresRequest): Promise<_3.QueryFailuresResponse>;
            addressFailures(request: _3.QueryFailuresRequest): Promise<_3.QueryFailuresResponse>;
            failures(request: _3.QueryFailuresRequest): Promise<_3.QueryFailuresResponse>;
        };
        LCDQueryClient: typeof _257.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
            };
            fromPartial: {
                updateParams(value: _4.MsgUpdateParams): {
                    typeUrl: string;
                    value: _4.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/neutron.contractmanager.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _4.MsgUpdateParams) => _4.MsgUpdateParamsAmino;
                fromAmino: (object: _4.MsgUpdateParamsAmino) => _4.MsgUpdateParams;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _4.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.MsgUpdateParams;
            fromPartial(object: Partial<_4.MsgUpdateParams>): _4.MsgUpdateParams;
            fromAmino(object: _4.MsgUpdateParamsAmino): _4.MsgUpdateParams;
            toAmino(message: _4.MsgUpdateParams): _4.MsgUpdateParamsAmino;
            fromAminoMsg(object: _4.MsgUpdateParamsAminoMsg): _4.MsgUpdateParams;
            toAminoMsg(message: _4.MsgUpdateParams): _4.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _4.MsgUpdateParamsProtoMsg): _4.MsgUpdateParams;
            toProto(message: _4.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _4.MsgUpdateParams): _4.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _4.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _4.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_4.MsgUpdateParamsResponse>): _4.MsgUpdateParamsResponse;
            fromAmino(_: _4.MsgUpdateParamsResponseAmino): _4.MsgUpdateParamsResponse;
            toAmino(_: _4.MsgUpdateParamsResponse): _4.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _4.MsgUpdateParamsResponseAminoMsg): _4.MsgUpdateParamsResponse;
            fromProtoMsg(message: _4.MsgUpdateParamsResponseProtoMsg): _4.MsgUpdateParamsResponse;
            toProto(message: _4.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _4.MsgUpdateParamsResponse): _4.MsgUpdateParamsResponseProtoMsg;
        };
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
        QueryFailuresRequest: {
            typeUrl: string;
            encode(message: _3.QueryFailuresRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryFailuresRequest;
            fromPartial(object: Partial<_3.QueryFailuresRequest>): _3.QueryFailuresRequest;
            fromAmino(object: _3.QueryFailuresRequestAmino): _3.QueryFailuresRequest;
            toAmino(message: _3.QueryFailuresRequest): _3.QueryFailuresRequestAmino;
            fromAminoMsg(object: _3.QueryFailuresRequestAminoMsg): _3.QueryFailuresRequest;
            fromProtoMsg(message: _3.QueryFailuresRequestProtoMsg): _3.QueryFailuresRequest;
            toProto(message: _3.QueryFailuresRequest): Uint8Array;
            toProtoMsg(message: _3.QueryFailuresRequest): _3.QueryFailuresRequestProtoMsg;
        };
        QueryFailuresResponse: {
            typeUrl: string;
            encode(message: _3.QueryFailuresResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.QueryFailuresResponse;
            fromPartial(object: Partial<_3.QueryFailuresResponse>): _3.QueryFailuresResponse;
            fromAmino(object: _3.QueryFailuresResponseAmino): _3.QueryFailuresResponse;
            toAmino(message: _3.QueryFailuresResponse): _3.QueryFailuresResponseAmino;
            fromAminoMsg(object: _3.QueryFailuresResponseAminoMsg): _3.QueryFailuresResponse;
            fromProtoMsg(message: _3.QueryFailuresResponseProtoMsg): _3.QueryFailuresResponse;
            toProto(message: _3.QueryFailuresResponse): Uint8Array;
            toProtoMsg(message: _3.QueryFailuresResponse): _3.QueryFailuresResponseProtoMsg;
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
        Failure: {
            typeUrl: string;
            encode(message: _0.Failure, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.Failure;
            fromPartial(object: Partial<_0.Failure>): _0.Failure;
            fromAmino(object: _0.FailureAmino): _0.Failure;
            toAmino(message: _0.Failure): _0.FailureAmino;
            fromAminoMsg(object: _0.FailureAminoMsg): _0.Failure;
            fromProtoMsg(message: _0.FailureProtoMsg): _0.Failure;
            toProto(message: _0.Failure): Uint8Array;
            toProtoMsg(message: _0.Failure): _0.FailureProtoMsg;
        };
    };
    const cron: {
        MsgClientImpl: typeof _274.MsgClientImpl;
        QueryClientImpl: typeof _266.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
            schedule(request: _7.QueryGetScheduleRequest): Promise<_7.QueryGetScheduleResponse>;
            schedules(request?: _7.QuerySchedulesRequest): Promise<_7.QuerySchedulesResponse>;
        };
        LCDQueryClient: typeof _258.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _9.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _9.MsgUpdateParams): {
                    typeUrl: string;
                    value: _9.MsgUpdateParams;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _9.MsgUpdateParams;
                };
            };
            fromPartial: {
                updateParams(value: _9.MsgUpdateParams): {
                    typeUrl: string;
                    value: _9.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/neutron.cron.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _9.MsgUpdateParams) => _9.MsgUpdateParamsAmino;
                fromAmino: (object: _9.MsgUpdateParamsAmino) => _9.MsgUpdateParams;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _9.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.MsgUpdateParams;
            fromPartial(object: Partial<_9.MsgUpdateParams>): _9.MsgUpdateParams;
            fromAmino(object: _9.MsgUpdateParamsAmino): _9.MsgUpdateParams;
            toAmino(message: _9.MsgUpdateParams): _9.MsgUpdateParamsAmino;
            fromAminoMsg(object: _9.MsgUpdateParamsAminoMsg): _9.MsgUpdateParams;
            toAminoMsg(message: _9.MsgUpdateParams): _9.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _9.MsgUpdateParamsProtoMsg): _9.MsgUpdateParams;
            toProto(message: _9.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _9.MsgUpdateParams): _9.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _9.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _9.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_9.MsgUpdateParamsResponse>): _9.MsgUpdateParamsResponse;
            fromAmino(_: _9.MsgUpdateParamsResponseAmino): _9.MsgUpdateParamsResponse;
            toAmino(_: _9.MsgUpdateParamsResponse): _9.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _9.MsgUpdateParamsResponseAminoMsg): _9.MsgUpdateParamsResponse;
            fromProtoMsg(message: _9.MsgUpdateParamsResponseProtoMsg): _9.MsgUpdateParamsResponse;
            toProto(message: _9.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _9.MsgUpdateParamsResponse): _9.MsgUpdateParamsResponseProtoMsg;
        };
        Schedule: {
            typeUrl: string;
            encode(message: _8.Schedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.Schedule;
            fromPartial(object: Partial<_8.Schedule>): _8.Schedule;
            fromAmino(object: _8.ScheduleAmino): _8.Schedule;
            toAmino(message: _8.Schedule): _8.ScheduleAmino;
            fromAminoMsg(object: _8.ScheduleAminoMsg): _8.Schedule;
            fromProtoMsg(message: _8.ScheduleProtoMsg): _8.Schedule;
            toProto(message: _8.Schedule): Uint8Array;
            toProtoMsg(message: _8.Schedule): _8.ScheduleProtoMsg;
        };
        MsgExecuteContract: {
            typeUrl: string;
            encode(message: _8.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.MsgExecuteContract;
            fromPartial(object: Partial<_8.MsgExecuteContract>): _8.MsgExecuteContract;
            fromAmino(object: _8.MsgExecuteContractAmino): _8.MsgExecuteContract;
            toAmino(message: _8.MsgExecuteContract): _8.MsgExecuteContractAmino;
            fromAminoMsg(object: _8.MsgExecuteContractAminoMsg): _8.MsgExecuteContract;
            fromProtoMsg(message: _8.MsgExecuteContractProtoMsg): _8.MsgExecuteContract;
            toProto(message: _8.MsgExecuteContract): Uint8Array;
            toProtoMsg(message: _8.MsgExecuteContract): _8.MsgExecuteContractProtoMsg;
        };
        ScheduleCount: {
            typeUrl: string;
            encode(message: _8.ScheduleCount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.ScheduleCount;
            fromPartial(object: Partial<_8.ScheduleCount>): _8.ScheduleCount;
            fromAmino(object: _8.ScheduleCountAmino): _8.ScheduleCount;
            toAmino(message: _8.ScheduleCount): _8.ScheduleCountAmino;
            fromAminoMsg(object: _8.ScheduleCountAminoMsg): _8.ScheduleCount;
            fromProtoMsg(message: _8.ScheduleCountProtoMsg): _8.ScheduleCount;
            toProto(message: _8.ScheduleCount): Uint8Array;
            toProtoMsg(message: _8.ScheduleCount): _8.ScheduleCountProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _7.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _7.QueryParamsRequest;
            fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
            fromAmino(_: _7.QueryParamsRequestAmino): _7.QueryParamsRequest;
            toAmino(_: _7.QueryParamsRequest): _7.QueryParamsRequestAmino;
            fromAminoMsg(object: _7.QueryParamsRequestAminoMsg): _7.QueryParamsRequest;
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
            fromProtoMsg(message: _7.QueryParamsResponseProtoMsg): _7.QueryParamsResponse;
            toProto(message: _7.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseProtoMsg;
        };
        QueryGetScheduleRequest: {
            typeUrl: string;
            encode(message: _7.QueryGetScheduleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.QueryGetScheduleRequest;
            fromPartial(object: Partial<_7.QueryGetScheduleRequest>): _7.QueryGetScheduleRequest;
            fromAmino(object: _7.QueryGetScheduleRequestAmino): _7.QueryGetScheduleRequest;
            toAmino(message: _7.QueryGetScheduleRequest): _7.QueryGetScheduleRequestAmino;
            fromAminoMsg(object: _7.QueryGetScheduleRequestAminoMsg): _7.QueryGetScheduleRequest;
            fromProtoMsg(message: _7.QueryGetScheduleRequestProtoMsg): _7.QueryGetScheduleRequest;
            toProto(message: _7.QueryGetScheduleRequest): Uint8Array;
            toProtoMsg(message: _7.QueryGetScheduleRequest): _7.QueryGetScheduleRequestProtoMsg;
        };
        QueryGetScheduleResponse: {
            typeUrl: string;
            encode(message: _7.QueryGetScheduleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.QueryGetScheduleResponse;
            fromPartial(object: Partial<_7.QueryGetScheduleResponse>): _7.QueryGetScheduleResponse;
            fromAmino(object: _7.QueryGetScheduleResponseAmino): _7.QueryGetScheduleResponse;
            toAmino(message: _7.QueryGetScheduleResponse): _7.QueryGetScheduleResponseAmino;
            fromAminoMsg(object: _7.QueryGetScheduleResponseAminoMsg): _7.QueryGetScheduleResponse;
            fromProtoMsg(message: _7.QueryGetScheduleResponseProtoMsg): _7.QueryGetScheduleResponse;
            toProto(message: _7.QueryGetScheduleResponse): Uint8Array;
            toProtoMsg(message: _7.QueryGetScheduleResponse): _7.QueryGetScheduleResponseProtoMsg;
        };
        QuerySchedulesRequest: {
            typeUrl: string;
            encode(message: _7.QuerySchedulesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.QuerySchedulesRequest;
            fromPartial(object: Partial<_7.QuerySchedulesRequest>): _7.QuerySchedulesRequest;
            fromAmino(object: _7.QuerySchedulesRequestAmino): _7.QuerySchedulesRequest;
            toAmino(message: _7.QuerySchedulesRequest): _7.QuerySchedulesRequestAmino;
            fromAminoMsg(object: _7.QuerySchedulesRequestAminoMsg): _7.QuerySchedulesRequest;
            fromProtoMsg(message: _7.QuerySchedulesRequestProtoMsg): _7.QuerySchedulesRequest;
            toProto(message: _7.QuerySchedulesRequest): Uint8Array;
            toProtoMsg(message: _7.QuerySchedulesRequest): _7.QuerySchedulesRequestProtoMsg;
        };
        QuerySchedulesResponse: {
            typeUrl: string;
            encode(message: _7.QuerySchedulesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.QuerySchedulesResponse;
            fromPartial(object: Partial<_7.QuerySchedulesResponse>): _7.QuerySchedulesResponse;
            fromAmino(object: _7.QuerySchedulesResponseAmino): _7.QuerySchedulesResponse;
            toAmino(message: _7.QuerySchedulesResponse): _7.QuerySchedulesResponseAmino;
            fromAminoMsg(object: _7.QuerySchedulesResponseAminoMsg): _7.QuerySchedulesResponse;
            fromProtoMsg(message: _7.QuerySchedulesResponseProtoMsg): _7.QuerySchedulesResponse;
            toProto(message: _7.QuerySchedulesResponse): Uint8Array;
            toProtoMsg(message: _7.QuerySchedulesResponse): _7.QuerySchedulesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _6.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.Params;
            fromPartial(object: Partial<_6.Params>): _6.Params;
            fromAmino(object: _6.ParamsAmino): _6.Params;
            toAmino(message: _6.Params): _6.ParamsAmino;
            fromAminoMsg(object: _6.ParamsAminoMsg): _6.Params;
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
            fromProtoMsg(message: _5.GenesisStateProtoMsg): _5.GenesisState;
            toProto(message: _5.GenesisState): Uint8Array;
            toProtoMsg(message: _5.GenesisState): _5.GenesisStateProtoMsg;
        };
    };
    const dex: {
        MsgClientImpl: typeof _275.MsgClientImpl;
        QueryClientImpl: typeof _267.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
            limitOrderTrancheUser(request: _20.QueryGetLimitOrderTrancheUserRequest): Promise<_20.QueryGetLimitOrderTrancheUserResponse>;
            limitOrderTrancheUserAll(request?: _20.QueryAllLimitOrderTrancheUserRequest): Promise<_20.QueryAllLimitOrderTrancheUserResponse>;
            limitOrderTrancheUserAllByAddress(request: _20.QueryAllUserLimitOrdersRequest): Promise<_20.QueryAllUserLimitOrdersResponse>;
            limitOrderTranche(request: _20.QueryGetLimitOrderTrancheRequest): Promise<_20.QueryGetLimitOrderTrancheResponse>;
            limitOrderTrancheAll(request: _20.QueryAllLimitOrderTrancheRequest): Promise<_20.QueryAllLimitOrderTrancheResponse>;
            userDepositsAll(request: _20.QueryAllUserDepositsRequest): Promise<_20.QueryAllUserDepositsResponse>;
            tickLiquidityAll(request: _20.QueryAllTickLiquidityRequest): Promise<_20.QueryAllTickLiquidityResponse>;
            inactiveLimitOrderTranche(request: _20.QueryGetInactiveLimitOrderTrancheRequest): Promise<_20.QueryGetInactiveLimitOrderTrancheResponse>;
            inactiveLimitOrderTrancheAll(request?: _20.QueryAllInactiveLimitOrderTrancheRequest): Promise<_20.QueryAllInactiveLimitOrderTrancheResponse>;
            poolReservesAll(request: _20.QueryAllPoolReservesRequest): Promise<_20.QueryAllPoolReservesResponse>;
            poolReserves(request: _20.QueryGetPoolReservesRequest): Promise<_20.QueryGetPoolReservesResponse>;
            estimateMultiHopSwap(request: _20.QueryEstimateMultiHopSwapRequest): Promise<_20.QueryEstimateMultiHopSwapResponse>;
            estimatePlaceLimitOrder(request: _20.QueryEstimatePlaceLimitOrderRequest): Promise<_20.QueryEstimatePlaceLimitOrderResponse>;
            pool(request: _20.QueryPoolRequest): Promise<_20.QueryPoolResponse>;
            poolByID(request: _20.QueryPoolByIDRequest): Promise<_20.QueryPoolResponse>;
            poolMetadata(request: _20.QueryGetPoolMetadataRequest): Promise<_20.QueryGetPoolMetadataResponse>;
            poolMetadataAll(request?: _20.QueryAllPoolMetadataRequest): Promise<_20.QueryAllPoolMetadataResponse>;
        };
        LCDQueryClient: typeof _259.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                deposit(value: _23.MsgDeposit): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                withdrawal(value: _23.MsgWithdrawal): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                placeLimitOrder(value: _23.MsgPlaceLimitOrder): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                withdrawFilledLimitOrder(value: _23.MsgWithdrawFilledLimitOrder): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelLimitOrder(value: _23.MsgCancelLimitOrder): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                multiHopSwap(value: _23.MsgMultiHopSwap): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _23.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                deposit(value: _23.MsgDeposit): {
                    typeUrl: string;
                    value: _23.MsgDeposit;
                };
                withdrawal(value: _23.MsgWithdrawal): {
                    typeUrl: string;
                    value: _23.MsgWithdrawal;
                };
                placeLimitOrder(value: _23.MsgPlaceLimitOrder): {
                    typeUrl: string;
                    value: _23.MsgPlaceLimitOrder;
                };
                withdrawFilledLimitOrder(value: _23.MsgWithdrawFilledLimitOrder): {
                    typeUrl: string;
                    value: _23.MsgWithdrawFilledLimitOrder;
                };
                cancelLimitOrder(value: _23.MsgCancelLimitOrder): {
                    typeUrl: string;
                    value: _23.MsgCancelLimitOrder;
                };
                multiHopSwap(value: _23.MsgMultiHopSwap): {
                    typeUrl: string;
                    value: _23.MsgMultiHopSwap;
                };
                updateParams(value: _23.MsgUpdateParams): {
                    typeUrl: string;
                    value: _23.MsgUpdateParams;
                };
            };
            fromJSON: {
                deposit(value: any): {
                    typeUrl: string;
                    value: _23.MsgDeposit;
                };
                withdrawal(value: any): {
                    typeUrl: string;
                    value: _23.MsgWithdrawal;
                };
                placeLimitOrder(value: any): {
                    typeUrl: string;
                    value: _23.MsgPlaceLimitOrder;
                };
                withdrawFilledLimitOrder(value: any): {
                    typeUrl: string;
                    value: _23.MsgWithdrawFilledLimitOrder;
                };
                cancelLimitOrder(value: any): {
                    typeUrl: string;
                    value: _23.MsgCancelLimitOrder;
                };
                multiHopSwap(value: any): {
                    typeUrl: string;
                    value: _23.MsgMultiHopSwap;
                };
                updateParams(value: any): {
                    typeUrl: string;
                    value: _23.MsgUpdateParams;
                };
            };
            fromPartial: {
                deposit(value: _23.MsgDeposit): {
                    typeUrl: string;
                    value: _23.MsgDeposit;
                };
                withdrawal(value: _23.MsgWithdrawal): {
                    typeUrl: string;
                    value: _23.MsgWithdrawal;
                };
                placeLimitOrder(value: _23.MsgPlaceLimitOrder): {
                    typeUrl: string;
                    value: _23.MsgPlaceLimitOrder;
                };
                withdrawFilledLimitOrder(value: _23.MsgWithdrawFilledLimitOrder): {
                    typeUrl: string;
                    value: _23.MsgWithdrawFilledLimitOrder;
                };
                cancelLimitOrder(value: _23.MsgCancelLimitOrder): {
                    typeUrl: string;
                    value: _23.MsgCancelLimitOrder;
                };
                multiHopSwap(value: _23.MsgMultiHopSwap): {
                    typeUrl: string;
                    value: _23.MsgMultiHopSwap;
                };
                updateParams(value: _23.MsgUpdateParams): {
                    typeUrl: string;
                    value: _23.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/neutron.dex.MsgDeposit": {
                aminoType: string;
                toAmino: (message: _23.MsgDeposit) => _23.MsgDepositAmino;
                fromAmino: (object: _23.MsgDepositAmino) => _23.MsgDeposit;
            };
            "/neutron.dex.MsgWithdrawal": {
                aminoType: string;
                toAmino: (message: _23.MsgWithdrawal) => _23.MsgWithdrawalAmino;
                fromAmino: (object: _23.MsgWithdrawalAmino) => _23.MsgWithdrawal;
            };
            "/neutron.dex.MsgPlaceLimitOrder": {
                aminoType: string;
                toAmino: (message: _23.MsgPlaceLimitOrder) => _23.MsgPlaceLimitOrderAmino;
                fromAmino: (object: _23.MsgPlaceLimitOrderAmino) => _23.MsgPlaceLimitOrder;
            };
            "/neutron.dex.MsgWithdrawFilledLimitOrder": {
                aminoType: string;
                toAmino: (message: _23.MsgWithdrawFilledLimitOrder) => _23.MsgWithdrawFilledLimitOrderAmino;
                fromAmino: (object: _23.MsgWithdrawFilledLimitOrderAmino) => _23.MsgWithdrawFilledLimitOrder;
            };
            "/neutron.dex.MsgCancelLimitOrder": {
                aminoType: string;
                toAmino: (message: _23.MsgCancelLimitOrder) => _23.MsgCancelLimitOrderAmino;
                fromAmino: (object: _23.MsgCancelLimitOrderAmino) => _23.MsgCancelLimitOrder;
            };
            "/neutron.dex.MsgMultiHopSwap": {
                aminoType: string;
                toAmino: (message: _23.MsgMultiHopSwap) => _23.MsgMultiHopSwapAmino;
                fromAmino: (object: _23.MsgMultiHopSwapAmino) => _23.MsgMultiHopSwap;
            };
            "/neutron.dex.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _23.MsgUpdateParams) => _23.MsgUpdateParamsAmino;
                fromAmino: (object: _23.MsgUpdateParamsAmino) => _23.MsgUpdateParams;
            };
        };
        limitOrderTypeFromJSON(object: any): _23.LimitOrderType;
        limitOrderTypeToJSON(object: _23.LimitOrderType): string;
        LimitOrderType: typeof _23.LimitOrderType;
        LimitOrderTypeSDKType: typeof _23.LimitOrderType;
        LimitOrderTypeAmino: typeof _23.LimitOrderType;
        DepositOptions: {
            typeUrl: string;
            encode(message: _23.DepositOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.DepositOptions;
            fromPartial(object: Partial<_23.DepositOptions>): _23.DepositOptions;
            fromAmino(object: _23.DepositOptionsAmino): _23.DepositOptions;
            toAmino(message: _23.DepositOptions): _23.DepositOptionsAmino;
            fromAminoMsg(object: _23.DepositOptionsAminoMsg): _23.DepositOptions;
            fromProtoMsg(message: _23.DepositOptionsProtoMsg): _23.DepositOptions;
            toProto(message: _23.DepositOptions): Uint8Array;
            toProtoMsg(message: _23.DepositOptions): _23.DepositOptionsProtoMsg;
        };
        MsgDeposit: {
            typeUrl: string;
            encode(message: _23.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgDeposit;
            fromPartial(object: Partial<_23.MsgDeposit>): _23.MsgDeposit;
            fromAmino(object: _23.MsgDepositAmino): _23.MsgDeposit;
            toAmino(message: _23.MsgDeposit): _23.MsgDepositAmino;
            fromAminoMsg(object: _23.MsgDepositAminoMsg): _23.MsgDeposit;
            fromProtoMsg(message: _23.MsgDepositProtoMsg): _23.MsgDeposit;
            toProto(message: _23.MsgDeposit): Uint8Array;
            toProtoMsg(message: _23.MsgDeposit): _23.MsgDepositProtoMsg;
        };
        MsgDepositResponse: {
            typeUrl: string;
            encode(message: _23.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgDepositResponse;
            fromPartial(object: Partial<_23.MsgDepositResponse>): _23.MsgDepositResponse;
            fromAmino(object: _23.MsgDepositResponseAmino): _23.MsgDepositResponse;
            toAmino(message: _23.MsgDepositResponse): _23.MsgDepositResponseAmino;
            fromAminoMsg(object: _23.MsgDepositResponseAminoMsg): _23.MsgDepositResponse;
            fromProtoMsg(message: _23.MsgDepositResponseProtoMsg): _23.MsgDepositResponse;
            toProto(message: _23.MsgDepositResponse): Uint8Array;
            toProtoMsg(message: _23.MsgDepositResponse): _23.MsgDepositResponseProtoMsg;
        };
        MsgWithdrawal: {
            typeUrl: string;
            encode(message: _23.MsgWithdrawal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgWithdrawal;
            fromPartial(object: Partial<_23.MsgWithdrawal>): _23.MsgWithdrawal;
            fromAmino(object: _23.MsgWithdrawalAmino): _23.MsgWithdrawal;
            toAmino(message: _23.MsgWithdrawal): _23.MsgWithdrawalAmino;
            fromAminoMsg(object: _23.MsgWithdrawalAminoMsg): _23.MsgWithdrawal;
            fromProtoMsg(message: _23.MsgWithdrawalProtoMsg): _23.MsgWithdrawal;
            toProto(message: _23.MsgWithdrawal): Uint8Array;
            toProtoMsg(message: _23.MsgWithdrawal): _23.MsgWithdrawalProtoMsg;
        };
        MsgWithdrawalResponse: {
            typeUrl: string;
            encode(_: _23.MsgWithdrawalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.MsgWithdrawalResponse;
            fromPartial(_: Partial<_23.MsgWithdrawalResponse>): _23.MsgWithdrawalResponse;
            fromAmino(_: _23.MsgWithdrawalResponseAmino): _23.MsgWithdrawalResponse;
            toAmino(_: _23.MsgWithdrawalResponse): _23.MsgWithdrawalResponseAmino;
            fromAminoMsg(object: _23.MsgWithdrawalResponseAminoMsg): _23.MsgWithdrawalResponse;
            fromProtoMsg(message: _23.MsgWithdrawalResponseProtoMsg): _23.MsgWithdrawalResponse;
            toProto(message: _23.MsgWithdrawalResponse): Uint8Array;
            toProtoMsg(message: _23.MsgWithdrawalResponse): _23.MsgWithdrawalResponseProtoMsg;
        };
        MsgPlaceLimitOrder: {
            typeUrl: string;
            encode(message: _23.MsgPlaceLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgPlaceLimitOrder;
            fromPartial(object: Partial<_23.MsgPlaceLimitOrder>): _23.MsgPlaceLimitOrder;
            fromAmino(object: _23.MsgPlaceLimitOrderAmino): _23.MsgPlaceLimitOrder;
            toAmino(message: _23.MsgPlaceLimitOrder): _23.MsgPlaceLimitOrderAmino;
            fromAminoMsg(object: _23.MsgPlaceLimitOrderAminoMsg): _23.MsgPlaceLimitOrder;
            fromProtoMsg(message: _23.MsgPlaceLimitOrderProtoMsg): _23.MsgPlaceLimitOrder;
            toProto(message: _23.MsgPlaceLimitOrder): Uint8Array;
            toProtoMsg(message: _23.MsgPlaceLimitOrder): _23.MsgPlaceLimitOrderProtoMsg;
        };
        MsgPlaceLimitOrderResponse: {
            typeUrl: string;
            encode(message: _23.MsgPlaceLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgPlaceLimitOrderResponse;
            fromPartial(object: Partial<_23.MsgPlaceLimitOrderResponse>): _23.MsgPlaceLimitOrderResponse;
            fromAmino(object: _23.MsgPlaceLimitOrderResponseAmino): _23.MsgPlaceLimitOrderResponse;
            toAmino(message: _23.MsgPlaceLimitOrderResponse): _23.MsgPlaceLimitOrderResponseAmino;
            fromAminoMsg(object: _23.MsgPlaceLimitOrderResponseAminoMsg): _23.MsgPlaceLimitOrderResponse;
            fromProtoMsg(message: _23.MsgPlaceLimitOrderResponseProtoMsg): _23.MsgPlaceLimitOrderResponse;
            toProto(message: _23.MsgPlaceLimitOrderResponse): Uint8Array;
            toProtoMsg(message: _23.MsgPlaceLimitOrderResponse): _23.MsgPlaceLimitOrderResponseProtoMsg;
        };
        MsgWithdrawFilledLimitOrder: {
            typeUrl: string;
            encode(message: _23.MsgWithdrawFilledLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgWithdrawFilledLimitOrder;
            fromPartial(object: Partial<_23.MsgWithdrawFilledLimitOrder>): _23.MsgWithdrawFilledLimitOrder;
            fromAmino(object: _23.MsgWithdrawFilledLimitOrderAmino): _23.MsgWithdrawFilledLimitOrder;
            toAmino(message: _23.MsgWithdrawFilledLimitOrder): _23.MsgWithdrawFilledLimitOrderAmino;
            fromAminoMsg(object: _23.MsgWithdrawFilledLimitOrderAminoMsg): _23.MsgWithdrawFilledLimitOrder;
            fromProtoMsg(message: _23.MsgWithdrawFilledLimitOrderProtoMsg): _23.MsgWithdrawFilledLimitOrder;
            toProto(message: _23.MsgWithdrawFilledLimitOrder): Uint8Array;
            toProtoMsg(message: _23.MsgWithdrawFilledLimitOrder): _23.MsgWithdrawFilledLimitOrderProtoMsg;
        };
        MsgWithdrawFilledLimitOrderResponse: {
            typeUrl: string;
            encode(_: _23.MsgWithdrawFilledLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.MsgWithdrawFilledLimitOrderResponse;
            fromPartial(_: Partial<_23.MsgWithdrawFilledLimitOrderResponse>): _23.MsgWithdrawFilledLimitOrderResponse;
            fromAmino(_: _23.MsgWithdrawFilledLimitOrderResponseAmino): _23.MsgWithdrawFilledLimitOrderResponse;
            toAmino(_: _23.MsgWithdrawFilledLimitOrderResponse): _23.MsgWithdrawFilledLimitOrderResponseAmino;
            fromAminoMsg(object: _23.MsgWithdrawFilledLimitOrderResponseAminoMsg): _23.MsgWithdrawFilledLimitOrderResponse;
            fromProtoMsg(message: _23.MsgWithdrawFilledLimitOrderResponseProtoMsg): _23.MsgWithdrawFilledLimitOrderResponse;
            toProto(message: _23.MsgWithdrawFilledLimitOrderResponse): Uint8Array;
            toProtoMsg(message: _23.MsgWithdrawFilledLimitOrderResponse): _23.MsgWithdrawFilledLimitOrderResponseProtoMsg;
        };
        MsgCancelLimitOrder: {
            typeUrl: string;
            encode(message: _23.MsgCancelLimitOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgCancelLimitOrder;
            fromPartial(object: Partial<_23.MsgCancelLimitOrder>): _23.MsgCancelLimitOrder;
            fromAmino(object: _23.MsgCancelLimitOrderAmino): _23.MsgCancelLimitOrder;
            toAmino(message: _23.MsgCancelLimitOrder): _23.MsgCancelLimitOrderAmino;
            fromAminoMsg(object: _23.MsgCancelLimitOrderAminoMsg): _23.MsgCancelLimitOrder;
            fromProtoMsg(message: _23.MsgCancelLimitOrderProtoMsg): _23.MsgCancelLimitOrder;
            toProto(message: _23.MsgCancelLimitOrder): Uint8Array;
            toProtoMsg(message: _23.MsgCancelLimitOrder): _23.MsgCancelLimitOrderProtoMsg;
        };
        MsgCancelLimitOrderResponse: {
            typeUrl: string;
            encode(_: _23.MsgCancelLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.MsgCancelLimitOrderResponse;
            fromPartial(_: Partial<_23.MsgCancelLimitOrderResponse>): _23.MsgCancelLimitOrderResponse;
            fromAmino(_: _23.MsgCancelLimitOrderResponseAmino): _23.MsgCancelLimitOrderResponse;
            toAmino(_: _23.MsgCancelLimitOrderResponse): _23.MsgCancelLimitOrderResponseAmino;
            fromAminoMsg(object: _23.MsgCancelLimitOrderResponseAminoMsg): _23.MsgCancelLimitOrderResponse;
            fromProtoMsg(message: _23.MsgCancelLimitOrderResponseProtoMsg): _23.MsgCancelLimitOrderResponse;
            toProto(message: _23.MsgCancelLimitOrderResponse): Uint8Array;
            toProtoMsg(message: _23.MsgCancelLimitOrderResponse): _23.MsgCancelLimitOrderResponseProtoMsg;
        };
        MultiHopRoute: {
            typeUrl: string;
            encode(message: _23.MultiHopRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MultiHopRoute;
            fromPartial(object: Partial<_23.MultiHopRoute>): _23.MultiHopRoute;
            fromAmino(object: _23.MultiHopRouteAmino): _23.MultiHopRoute;
            toAmino(message: _23.MultiHopRoute): _23.MultiHopRouteAmino;
            fromAminoMsg(object: _23.MultiHopRouteAminoMsg): _23.MultiHopRoute;
            fromProtoMsg(message: _23.MultiHopRouteProtoMsg): _23.MultiHopRoute;
            toProto(message: _23.MultiHopRoute): Uint8Array;
            toProtoMsg(message: _23.MultiHopRoute): _23.MultiHopRouteProtoMsg;
        };
        MsgMultiHopSwap: {
            typeUrl: string;
            encode(message: _23.MsgMultiHopSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgMultiHopSwap;
            fromPartial(object: Partial<_23.MsgMultiHopSwap>): _23.MsgMultiHopSwap;
            fromAmino(object: _23.MsgMultiHopSwapAmino): _23.MsgMultiHopSwap;
            toAmino(message: _23.MsgMultiHopSwap): _23.MsgMultiHopSwapAmino;
            fromAminoMsg(object: _23.MsgMultiHopSwapAminoMsg): _23.MsgMultiHopSwap;
            fromProtoMsg(message: _23.MsgMultiHopSwapProtoMsg): _23.MsgMultiHopSwap;
            toProto(message: _23.MsgMultiHopSwap): Uint8Array;
            toProtoMsg(message: _23.MsgMultiHopSwap): _23.MsgMultiHopSwapProtoMsg;
        };
        MsgMultiHopSwapResponse: {
            typeUrl: string;
            encode(message: _23.MsgMultiHopSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgMultiHopSwapResponse;
            fromPartial(object: Partial<_23.MsgMultiHopSwapResponse>): _23.MsgMultiHopSwapResponse;
            fromAmino(object: _23.MsgMultiHopSwapResponseAmino): _23.MsgMultiHopSwapResponse;
            toAmino(message: _23.MsgMultiHopSwapResponse): _23.MsgMultiHopSwapResponseAmino;
            fromAminoMsg(object: _23.MsgMultiHopSwapResponseAminoMsg): _23.MsgMultiHopSwapResponse;
            fromProtoMsg(message: _23.MsgMultiHopSwapResponseProtoMsg): _23.MsgMultiHopSwapResponse;
            toProto(message: _23.MsgMultiHopSwapResponse): Uint8Array;
            toProtoMsg(message: _23.MsgMultiHopSwapResponse): _23.MsgMultiHopSwapResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _23.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.MsgUpdateParams;
            fromPartial(object: Partial<_23.MsgUpdateParams>): _23.MsgUpdateParams;
            fromAmino(object: _23.MsgUpdateParamsAmino): _23.MsgUpdateParams;
            toAmino(message: _23.MsgUpdateParams): _23.MsgUpdateParamsAmino;
            fromAminoMsg(object: _23.MsgUpdateParamsAminoMsg): _23.MsgUpdateParams;
            toAminoMsg(message: _23.MsgUpdateParams): _23.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _23.MsgUpdateParamsProtoMsg): _23.MsgUpdateParams;
            toProto(message: _23.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _23.MsgUpdateParams): _23.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _23.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_23.MsgUpdateParamsResponse>): _23.MsgUpdateParamsResponse;
            fromAmino(_: _23.MsgUpdateParamsResponseAmino): _23.MsgUpdateParamsResponse;
            toAmino(_: _23.MsgUpdateParamsResponse): _23.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _23.MsgUpdateParamsResponseAminoMsg): _23.MsgUpdateParamsResponse;
            fromProtoMsg(message: _23.MsgUpdateParamsResponseProtoMsg): _23.MsgUpdateParamsResponse;
            toProto(message: _23.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _23.MsgUpdateParamsResponse): _23.MsgUpdateParamsResponseProtoMsg;
        };
        TradePairID: {
            typeUrl: string;
            encode(message: _22.TradePairID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.TradePairID;
            fromPartial(object: Partial<_22.TradePairID>): _22.TradePairID;
            fromAmino(object: _22.TradePairIDAmino): _22.TradePairID;
            toAmino(message: _22.TradePairID): _22.TradePairIDAmino;
            fromAminoMsg(object: _22.TradePairIDAminoMsg): _22.TradePairID;
            fromProtoMsg(message: _22.TradePairIDProtoMsg): _22.TradePairID;
            toProto(message: _22.TradePairID): Uint8Array;
            toProtoMsg(message: _22.TradePairID): _22.TradePairIDProtoMsg;
        };
        TickLiquidity: {
            typeUrl: string;
            encode(message: _21.TickLiquidity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.TickLiquidity;
            fromPartial(object: Partial<_21.TickLiquidity>): _21.TickLiquidity;
            fromAmino(object: _21.TickLiquidityAmino): _21.TickLiquidity;
            toAmino(message: _21.TickLiquidity): _21.TickLiquidityAmino;
            fromAminoMsg(object: _21.TickLiquidityAminoMsg): _21.TickLiquidity;
            fromProtoMsg(message: _21.TickLiquidityProtoMsg): _21.TickLiquidity;
            toProto(message: _21.TickLiquidity): Uint8Array;
            toProtoMsg(message: _21.TickLiquidity): _21.TickLiquidityProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _20.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _20.QueryParamsRequest;
            fromPartial(_: Partial<_20.QueryParamsRequest>): _20.QueryParamsRequest;
            fromAmino(_: _20.QueryParamsRequestAmino): _20.QueryParamsRequest;
            toAmino(_: _20.QueryParamsRequest): _20.QueryParamsRequestAmino;
            fromAminoMsg(object: _20.QueryParamsRequestAminoMsg): _20.QueryParamsRequest;
            fromProtoMsg(message: _20.QueryParamsRequestProtoMsg): _20.QueryParamsRequest;
            toProto(message: _20.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _20.QueryParamsRequest): _20.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _20.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryParamsResponse;
            fromPartial(object: Partial<_20.QueryParamsResponse>): _20.QueryParamsResponse;
            fromAmino(object: _20.QueryParamsResponseAmino): _20.QueryParamsResponse;
            toAmino(message: _20.QueryParamsResponse): _20.QueryParamsResponseAmino;
            fromAminoMsg(object: _20.QueryParamsResponseAminoMsg): _20.QueryParamsResponse;
            fromProtoMsg(message: _20.QueryParamsResponseProtoMsg): _20.QueryParamsResponse;
            toProto(message: _20.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _20.QueryParamsResponse): _20.QueryParamsResponseProtoMsg;
        };
        QueryGetLimitOrderTrancheUserRequest: {
            typeUrl: string;
            encode(message: _20.QueryGetLimitOrderTrancheUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetLimitOrderTrancheUserRequest;
            fromPartial(object: Partial<_20.QueryGetLimitOrderTrancheUserRequest>): _20.QueryGetLimitOrderTrancheUserRequest;
            fromAmino(object: _20.QueryGetLimitOrderTrancheUserRequestAmino): _20.QueryGetLimitOrderTrancheUserRequest;
            toAmino(message: _20.QueryGetLimitOrderTrancheUserRequest): _20.QueryGetLimitOrderTrancheUserRequestAmino;
            fromAminoMsg(object: _20.QueryGetLimitOrderTrancheUserRequestAminoMsg): _20.QueryGetLimitOrderTrancheUserRequest;
            fromProtoMsg(message: _20.QueryGetLimitOrderTrancheUserRequestProtoMsg): _20.QueryGetLimitOrderTrancheUserRequest;
            toProto(message: _20.QueryGetLimitOrderTrancheUserRequest): Uint8Array;
            toProtoMsg(message: _20.QueryGetLimitOrderTrancheUserRequest): _20.QueryGetLimitOrderTrancheUserRequestProtoMsg;
        };
        QueryGetLimitOrderTrancheUserResponse: {
            typeUrl: string;
            encode(message: _20.QueryGetLimitOrderTrancheUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetLimitOrderTrancheUserResponse;
            fromPartial(object: Partial<_20.QueryGetLimitOrderTrancheUserResponse>): _20.QueryGetLimitOrderTrancheUserResponse;
            fromAmino(object: _20.QueryGetLimitOrderTrancheUserResponseAmino): _20.QueryGetLimitOrderTrancheUserResponse;
            toAmino(message: _20.QueryGetLimitOrderTrancheUserResponse): _20.QueryGetLimitOrderTrancheUserResponseAmino;
            fromAminoMsg(object: _20.QueryGetLimitOrderTrancheUserResponseAminoMsg): _20.QueryGetLimitOrderTrancheUserResponse;
            fromProtoMsg(message: _20.QueryGetLimitOrderTrancheUserResponseProtoMsg): _20.QueryGetLimitOrderTrancheUserResponse;
            toProto(message: _20.QueryGetLimitOrderTrancheUserResponse): Uint8Array;
            toProtoMsg(message: _20.QueryGetLimitOrderTrancheUserResponse): _20.QueryGetLimitOrderTrancheUserResponseProtoMsg;
        };
        QueryAllLimitOrderTrancheUserRequest: {
            typeUrl: string;
            encode(message: _20.QueryAllLimitOrderTrancheUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllLimitOrderTrancheUserRequest;
            fromPartial(object: Partial<_20.QueryAllLimitOrderTrancheUserRequest>): _20.QueryAllLimitOrderTrancheUserRequest;
            fromAmino(object: _20.QueryAllLimitOrderTrancheUserRequestAmino): _20.QueryAllLimitOrderTrancheUserRequest;
            toAmino(message: _20.QueryAllLimitOrderTrancheUserRequest): _20.QueryAllLimitOrderTrancheUserRequestAmino;
            fromAminoMsg(object: _20.QueryAllLimitOrderTrancheUserRequestAminoMsg): _20.QueryAllLimitOrderTrancheUserRequest;
            fromProtoMsg(message: _20.QueryAllLimitOrderTrancheUserRequestProtoMsg): _20.QueryAllLimitOrderTrancheUserRequest;
            toProto(message: _20.QueryAllLimitOrderTrancheUserRequest): Uint8Array;
            toProtoMsg(message: _20.QueryAllLimitOrderTrancheUserRequest): _20.QueryAllLimitOrderTrancheUserRequestProtoMsg;
        };
        QueryAllLimitOrderTrancheUserResponse: {
            typeUrl: string;
            encode(message: _20.QueryAllLimitOrderTrancheUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllLimitOrderTrancheUserResponse;
            fromPartial(object: Partial<_20.QueryAllLimitOrderTrancheUserResponse>): _20.QueryAllLimitOrderTrancheUserResponse;
            fromAmino(object: _20.QueryAllLimitOrderTrancheUserResponseAmino): _20.QueryAllLimitOrderTrancheUserResponse;
            toAmino(message: _20.QueryAllLimitOrderTrancheUserResponse): _20.QueryAllLimitOrderTrancheUserResponseAmino;
            fromAminoMsg(object: _20.QueryAllLimitOrderTrancheUserResponseAminoMsg): _20.QueryAllLimitOrderTrancheUserResponse;
            fromProtoMsg(message: _20.QueryAllLimitOrderTrancheUserResponseProtoMsg): _20.QueryAllLimitOrderTrancheUserResponse;
            toProto(message: _20.QueryAllLimitOrderTrancheUserResponse): Uint8Array;
            toProtoMsg(message: _20.QueryAllLimitOrderTrancheUserResponse): _20.QueryAllLimitOrderTrancheUserResponseProtoMsg;
        };
        QueryGetLimitOrderTrancheRequest: {
            typeUrl: string;
            encode(message: _20.QueryGetLimitOrderTrancheRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetLimitOrderTrancheRequest;
            fromPartial(object: Partial<_20.QueryGetLimitOrderTrancheRequest>): _20.QueryGetLimitOrderTrancheRequest;
            fromAmino(object: _20.QueryGetLimitOrderTrancheRequestAmino): _20.QueryGetLimitOrderTrancheRequest;
            toAmino(message: _20.QueryGetLimitOrderTrancheRequest): _20.QueryGetLimitOrderTrancheRequestAmino;
            fromAminoMsg(object: _20.QueryGetLimitOrderTrancheRequestAminoMsg): _20.QueryGetLimitOrderTrancheRequest;
            fromProtoMsg(message: _20.QueryGetLimitOrderTrancheRequestProtoMsg): _20.QueryGetLimitOrderTrancheRequest;
            toProto(message: _20.QueryGetLimitOrderTrancheRequest): Uint8Array;
            toProtoMsg(message: _20.QueryGetLimitOrderTrancheRequest): _20.QueryGetLimitOrderTrancheRequestProtoMsg;
        };
        QueryGetLimitOrderTrancheResponse: {
            typeUrl: string;
            encode(message: _20.QueryGetLimitOrderTrancheResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetLimitOrderTrancheResponse;
            fromPartial(object: Partial<_20.QueryGetLimitOrderTrancheResponse>): _20.QueryGetLimitOrderTrancheResponse;
            fromAmino(object: _20.QueryGetLimitOrderTrancheResponseAmino): _20.QueryGetLimitOrderTrancheResponse;
            toAmino(message: _20.QueryGetLimitOrderTrancheResponse): _20.QueryGetLimitOrderTrancheResponseAmino;
            fromAminoMsg(object: _20.QueryGetLimitOrderTrancheResponseAminoMsg): _20.QueryGetLimitOrderTrancheResponse;
            fromProtoMsg(message: _20.QueryGetLimitOrderTrancheResponseProtoMsg): _20.QueryGetLimitOrderTrancheResponse;
            toProto(message: _20.QueryGetLimitOrderTrancheResponse): Uint8Array;
            toProtoMsg(message: _20.QueryGetLimitOrderTrancheResponse): _20.QueryGetLimitOrderTrancheResponseProtoMsg;
        };
        QueryAllLimitOrderTrancheRequest: {
            typeUrl: string;
            encode(message: _20.QueryAllLimitOrderTrancheRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllLimitOrderTrancheRequest;
            fromPartial(object: Partial<_20.QueryAllLimitOrderTrancheRequest>): _20.QueryAllLimitOrderTrancheRequest;
            fromAmino(object: _20.QueryAllLimitOrderTrancheRequestAmino): _20.QueryAllLimitOrderTrancheRequest;
            toAmino(message: _20.QueryAllLimitOrderTrancheRequest): _20.QueryAllLimitOrderTrancheRequestAmino;
            fromAminoMsg(object: _20.QueryAllLimitOrderTrancheRequestAminoMsg): _20.QueryAllLimitOrderTrancheRequest;
            fromProtoMsg(message: _20.QueryAllLimitOrderTrancheRequestProtoMsg): _20.QueryAllLimitOrderTrancheRequest;
            toProto(message: _20.QueryAllLimitOrderTrancheRequest): Uint8Array;
            toProtoMsg(message: _20.QueryAllLimitOrderTrancheRequest): _20.QueryAllLimitOrderTrancheRequestProtoMsg;
        };
        QueryAllLimitOrderTrancheResponse: {
            typeUrl: string;
            encode(message: _20.QueryAllLimitOrderTrancheResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllLimitOrderTrancheResponse;
            fromPartial(object: Partial<_20.QueryAllLimitOrderTrancheResponse>): _20.QueryAllLimitOrderTrancheResponse;
            fromAmino(object: _20.QueryAllLimitOrderTrancheResponseAmino): _20.QueryAllLimitOrderTrancheResponse;
            toAmino(message: _20.QueryAllLimitOrderTrancheResponse): _20.QueryAllLimitOrderTrancheResponseAmino;
            fromAminoMsg(object: _20.QueryAllLimitOrderTrancheResponseAminoMsg): _20.QueryAllLimitOrderTrancheResponse;
            fromProtoMsg(message: _20.QueryAllLimitOrderTrancheResponseProtoMsg): _20.QueryAllLimitOrderTrancheResponse;
            toProto(message: _20.QueryAllLimitOrderTrancheResponse): Uint8Array;
            toProtoMsg(message: _20.QueryAllLimitOrderTrancheResponse): _20.QueryAllLimitOrderTrancheResponseProtoMsg;
        };
        QueryAllUserDepositsRequest: {
            typeUrl: string;
            encode(message: _20.QueryAllUserDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllUserDepositsRequest;
            fromPartial(object: Partial<_20.QueryAllUserDepositsRequest>): _20.QueryAllUserDepositsRequest;
            fromAmino(object: _20.QueryAllUserDepositsRequestAmino): _20.QueryAllUserDepositsRequest;
            toAmino(message: _20.QueryAllUserDepositsRequest): _20.QueryAllUserDepositsRequestAmino;
            fromAminoMsg(object: _20.QueryAllUserDepositsRequestAminoMsg): _20.QueryAllUserDepositsRequest;
            fromProtoMsg(message: _20.QueryAllUserDepositsRequestProtoMsg): _20.QueryAllUserDepositsRequest;
            toProto(message: _20.QueryAllUserDepositsRequest): Uint8Array;
            toProtoMsg(message: _20.QueryAllUserDepositsRequest): _20.QueryAllUserDepositsRequestProtoMsg;
        };
        QueryAllUserDepositsResponse: {
            typeUrl: string;
            encode(message: _20.QueryAllUserDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllUserDepositsResponse;
            fromPartial(object: Partial<_20.QueryAllUserDepositsResponse>): _20.QueryAllUserDepositsResponse;
            fromAmino(object: _20.QueryAllUserDepositsResponseAmino): _20.QueryAllUserDepositsResponse;
            toAmino(message: _20.QueryAllUserDepositsResponse): _20.QueryAllUserDepositsResponseAmino;
            fromAminoMsg(object: _20.QueryAllUserDepositsResponseAminoMsg): _20.QueryAllUserDepositsResponse;
            fromProtoMsg(message: _20.QueryAllUserDepositsResponseProtoMsg): _20.QueryAllUserDepositsResponse;
            toProto(message: _20.QueryAllUserDepositsResponse): Uint8Array;
            toProtoMsg(message: _20.QueryAllUserDepositsResponse): _20.QueryAllUserDepositsResponseProtoMsg;
        };
        QueryAllUserLimitOrdersRequest: {
            typeUrl: string;
            encode(message: _20.QueryAllUserLimitOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllUserLimitOrdersRequest;
            fromPartial(object: Partial<_20.QueryAllUserLimitOrdersRequest>): _20.QueryAllUserLimitOrdersRequest;
            fromAmino(object: _20.QueryAllUserLimitOrdersRequestAmino): _20.QueryAllUserLimitOrdersRequest;
            toAmino(message: _20.QueryAllUserLimitOrdersRequest): _20.QueryAllUserLimitOrdersRequestAmino;
            fromAminoMsg(object: _20.QueryAllUserLimitOrdersRequestAminoMsg): _20.QueryAllUserLimitOrdersRequest;
            fromProtoMsg(message: _20.QueryAllUserLimitOrdersRequestProtoMsg): _20.QueryAllUserLimitOrdersRequest;
            toProto(message: _20.QueryAllUserLimitOrdersRequest): Uint8Array;
            toProtoMsg(message: _20.QueryAllUserLimitOrdersRequest): _20.QueryAllUserLimitOrdersRequestProtoMsg;
        };
        QueryAllUserLimitOrdersResponse: {
            typeUrl: string;
            encode(message: _20.QueryAllUserLimitOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllUserLimitOrdersResponse;
            fromPartial(object: Partial<_20.QueryAllUserLimitOrdersResponse>): _20.QueryAllUserLimitOrdersResponse;
            fromAmino(object: _20.QueryAllUserLimitOrdersResponseAmino): _20.QueryAllUserLimitOrdersResponse;
            toAmino(message: _20.QueryAllUserLimitOrdersResponse): _20.QueryAllUserLimitOrdersResponseAmino;
            fromAminoMsg(object: _20.QueryAllUserLimitOrdersResponseAminoMsg): _20.QueryAllUserLimitOrdersResponse;
            fromProtoMsg(message: _20.QueryAllUserLimitOrdersResponseProtoMsg): _20.QueryAllUserLimitOrdersResponse;
            toProto(message: _20.QueryAllUserLimitOrdersResponse): Uint8Array;
            toProtoMsg(message: _20.QueryAllUserLimitOrdersResponse): _20.QueryAllUserLimitOrdersResponseProtoMsg;
        };
        QueryAllTickLiquidityRequest: {
            typeUrl: string;
            encode(message: _20.QueryAllTickLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllTickLiquidityRequest;
            fromPartial(object: Partial<_20.QueryAllTickLiquidityRequest>): _20.QueryAllTickLiquidityRequest;
            fromAmino(object: _20.QueryAllTickLiquidityRequestAmino): _20.QueryAllTickLiquidityRequest;
            toAmino(message: _20.QueryAllTickLiquidityRequest): _20.QueryAllTickLiquidityRequestAmino;
            fromAminoMsg(object: _20.QueryAllTickLiquidityRequestAminoMsg): _20.QueryAllTickLiquidityRequest;
            fromProtoMsg(message: _20.QueryAllTickLiquidityRequestProtoMsg): _20.QueryAllTickLiquidityRequest;
            toProto(message: _20.QueryAllTickLiquidityRequest): Uint8Array;
            toProtoMsg(message: _20.QueryAllTickLiquidityRequest): _20.QueryAllTickLiquidityRequestProtoMsg;
        };
        QueryAllTickLiquidityResponse: {
            typeUrl: string;
            encode(message: _20.QueryAllTickLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllTickLiquidityResponse;
            fromPartial(object: Partial<_20.QueryAllTickLiquidityResponse>): _20.QueryAllTickLiquidityResponse;
            fromAmino(object: _20.QueryAllTickLiquidityResponseAmino): _20.QueryAllTickLiquidityResponse;
            toAmino(message: _20.QueryAllTickLiquidityResponse): _20.QueryAllTickLiquidityResponseAmino;
            fromAminoMsg(object: _20.QueryAllTickLiquidityResponseAminoMsg): _20.QueryAllTickLiquidityResponse;
            fromProtoMsg(message: _20.QueryAllTickLiquidityResponseProtoMsg): _20.QueryAllTickLiquidityResponse;
            toProto(message: _20.QueryAllTickLiquidityResponse): Uint8Array;
            toProtoMsg(message: _20.QueryAllTickLiquidityResponse): _20.QueryAllTickLiquidityResponseProtoMsg;
        };
        QueryGetInactiveLimitOrderTrancheRequest: {
            typeUrl: string;
            encode(message: _20.QueryGetInactiveLimitOrderTrancheRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetInactiveLimitOrderTrancheRequest;
            fromPartial(object: Partial<_20.QueryGetInactiveLimitOrderTrancheRequest>): _20.QueryGetInactiveLimitOrderTrancheRequest;
            fromAmino(object: _20.QueryGetInactiveLimitOrderTrancheRequestAmino): _20.QueryGetInactiveLimitOrderTrancheRequest;
            toAmino(message: _20.QueryGetInactiveLimitOrderTrancheRequest): _20.QueryGetInactiveLimitOrderTrancheRequestAmino;
            fromAminoMsg(object: _20.QueryGetInactiveLimitOrderTrancheRequestAminoMsg): _20.QueryGetInactiveLimitOrderTrancheRequest;
            fromProtoMsg(message: _20.QueryGetInactiveLimitOrderTrancheRequestProtoMsg): _20.QueryGetInactiveLimitOrderTrancheRequest;
            toProto(message: _20.QueryGetInactiveLimitOrderTrancheRequest): Uint8Array;
            toProtoMsg(message: _20.QueryGetInactiveLimitOrderTrancheRequest): _20.QueryGetInactiveLimitOrderTrancheRequestProtoMsg;
        };
        QueryGetInactiveLimitOrderTrancheResponse: {
            typeUrl: string;
            encode(message: _20.QueryGetInactiveLimitOrderTrancheResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetInactiveLimitOrderTrancheResponse;
            fromPartial(object: Partial<_20.QueryGetInactiveLimitOrderTrancheResponse>): _20.QueryGetInactiveLimitOrderTrancheResponse;
            fromAmino(object: _20.QueryGetInactiveLimitOrderTrancheResponseAmino): _20.QueryGetInactiveLimitOrderTrancheResponse;
            toAmino(message: _20.QueryGetInactiveLimitOrderTrancheResponse): _20.QueryGetInactiveLimitOrderTrancheResponseAmino;
            fromAminoMsg(object: _20.QueryGetInactiveLimitOrderTrancheResponseAminoMsg): _20.QueryGetInactiveLimitOrderTrancheResponse;
            fromProtoMsg(message: _20.QueryGetInactiveLimitOrderTrancheResponseProtoMsg): _20.QueryGetInactiveLimitOrderTrancheResponse;
            toProto(message: _20.QueryGetInactiveLimitOrderTrancheResponse): Uint8Array;
            toProtoMsg(message: _20.QueryGetInactiveLimitOrderTrancheResponse): _20.QueryGetInactiveLimitOrderTrancheResponseProtoMsg;
        };
        QueryAllInactiveLimitOrderTrancheRequest: {
            typeUrl: string;
            encode(message: _20.QueryAllInactiveLimitOrderTrancheRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllInactiveLimitOrderTrancheRequest;
            fromPartial(object: Partial<_20.QueryAllInactiveLimitOrderTrancheRequest>): _20.QueryAllInactiveLimitOrderTrancheRequest;
            fromAmino(object: _20.QueryAllInactiveLimitOrderTrancheRequestAmino): _20.QueryAllInactiveLimitOrderTrancheRequest;
            toAmino(message: _20.QueryAllInactiveLimitOrderTrancheRequest): _20.QueryAllInactiveLimitOrderTrancheRequestAmino;
            fromAminoMsg(object: _20.QueryAllInactiveLimitOrderTrancheRequestAminoMsg): _20.QueryAllInactiveLimitOrderTrancheRequest;
            fromProtoMsg(message: _20.QueryAllInactiveLimitOrderTrancheRequestProtoMsg): _20.QueryAllInactiveLimitOrderTrancheRequest;
            toProto(message: _20.QueryAllInactiveLimitOrderTrancheRequest): Uint8Array;
            toProtoMsg(message: _20.QueryAllInactiveLimitOrderTrancheRequest): _20.QueryAllInactiveLimitOrderTrancheRequestProtoMsg;
        };
        QueryAllInactiveLimitOrderTrancheResponse: {
            typeUrl: string;
            encode(message: _20.QueryAllInactiveLimitOrderTrancheResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllInactiveLimitOrderTrancheResponse;
            fromPartial(object: Partial<_20.QueryAllInactiveLimitOrderTrancheResponse>): _20.QueryAllInactiveLimitOrderTrancheResponse;
            fromAmino(object: _20.QueryAllInactiveLimitOrderTrancheResponseAmino): _20.QueryAllInactiveLimitOrderTrancheResponse;
            toAmino(message: _20.QueryAllInactiveLimitOrderTrancheResponse): _20.QueryAllInactiveLimitOrderTrancheResponseAmino;
            fromAminoMsg(object: _20.QueryAllInactiveLimitOrderTrancheResponseAminoMsg): _20.QueryAllInactiveLimitOrderTrancheResponse;
            fromProtoMsg(message: _20.QueryAllInactiveLimitOrderTrancheResponseProtoMsg): _20.QueryAllInactiveLimitOrderTrancheResponse;
            toProto(message: _20.QueryAllInactiveLimitOrderTrancheResponse): Uint8Array;
            toProtoMsg(message: _20.QueryAllInactiveLimitOrderTrancheResponse): _20.QueryAllInactiveLimitOrderTrancheResponseProtoMsg;
        };
        QueryAllPoolReservesRequest: {
            typeUrl: string;
            encode(message: _20.QueryAllPoolReservesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllPoolReservesRequest;
            fromPartial(object: Partial<_20.QueryAllPoolReservesRequest>): _20.QueryAllPoolReservesRequest;
            fromAmino(object: _20.QueryAllPoolReservesRequestAmino): _20.QueryAllPoolReservesRequest;
            toAmino(message: _20.QueryAllPoolReservesRequest): _20.QueryAllPoolReservesRequestAmino;
            fromAminoMsg(object: _20.QueryAllPoolReservesRequestAminoMsg): _20.QueryAllPoolReservesRequest;
            fromProtoMsg(message: _20.QueryAllPoolReservesRequestProtoMsg): _20.QueryAllPoolReservesRequest;
            toProto(message: _20.QueryAllPoolReservesRequest): Uint8Array;
            toProtoMsg(message: _20.QueryAllPoolReservesRequest): _20.QueryAllPoolReservesRequestProtoMsg;
        };
        QueryAllPoolReservesResponse: {
            typeUrl: string;
            encode(message: _20.QueryAllPoolReservesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllPoolReservesResponse;
            fromPartial(object: Partial<_20.QueryAllPoolReservesResponse>): _20.QueryAllPoolReservesResponse;
            fromAmino(object: _20.QueryAllPoolReservesResponseAmino): _20.QueryAllPoolReservesResponse;
            toAmino(message: _20.QueryAllPoolReservesResponse): _20.QueryAllPoolReservesResponseAmino;
            fromAminoMsg(object: _20.QueryAllPoolReservesResponseAminoMsg): _20.QueryAllPoolReservesResponse;
            fromProtoMsg(message: _20.QueryAllPoolReservesResponseProtoMsg): _20.QueryAllPoolReservesResponse;
            toProto(message: _20.QueryAllPoolReservesResponse): Uint8Array;
            toProtoMsg(message: _20.QueryAllPoolReservesResponse): _20.QueryAllPoolReservesResponseProtoMsg;
        };
        QueryGetPoolReservesRequest: {
            typeUrl: string;
            encode(message: _20.QueryGetPoolReservesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetPoolReservesRequest;
            fromPartial(object: Partial<_20.QueryGetPoolReservesRequest>): _20.QueryGetPoolReservesRequest;
            fromAmino(object: _20.QueryGetPoolReservesRequestAmino): _20.QueryGetPoolReservesRequest;
            toAmino(message: _20.QueryGetPoolReservesRequest): _20.QueryGetPoolReservesRequestAmino;
            fromAminoMsg(object: _20.QueryGetPoolReservesRequestAminoMsg): _20.QueryGetPoolReservesRequest;
            fromProtoMsg(message: _20.QueryGetPoolReservesRequestProtoMsg): _20.QueryGetPoolReservesRequest;
            toProto(message: _20.QueryGetPoolReservesRequest): Uint8Array;
            toProtoMsg(message: _20.QueryGetPoolReservesRequest): _20.QueryGetPoolReservesRequestProtoMsg;
        };
        QueryGetPoolReservesResponse: {
            typeUrl: string;
            encode(message: _20.QueryGetPoolReservesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetPoolReservesResponse;
            fromPartial(object: Partial<_20.QueryGetPoolReservesResponse>): _20.QueryGetPoolReservesResponse;
            fromAmino(object: _20.QueryGetPoolReservesResponseAmino): _20.QueryGetPoolReservesResponse;
            toAmino(message: _20.QueryGetPoolReservesResponse): _20.QueryGetPoolReservesResponseAmino;
            fromAminoMsg(object: _20.QueryGetPoolReservesResponseAminoMsg): _20.QueryGetPoolReservesResponse;
            fromProtoMsg(message: _20.QueryGetPoolReservesResponseProtoMsg): _20.QueryGetPoolReservesResponse;
            toProto(message: _20.QueryGetPoolReservesResponse): Uint8Array;
            toProtoMsg(message: _20.QueryGetPoolReservesResponse): _20.QueryGetPoolReservesResponseProtoMsg;
        };
        QueryEstimateMultiHopSwapRequest: {
            typeUrl: string;
            encode(message: _20.QueryEstimateMultiHopSwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryEstimateMultiHopSwapRequest;
            fromPartial(object: Partial<_20.QueryEstimateMultiHopSwapRequest>): _20.QueryEstimateMultiHopSwapRequest;
            fromAmino(object: _20.QueryEstimateMultiHopSwapRequestAmino): _20.QueryEstimateMultiHopSwapRequest;
            toAmino(message: _20.QueryEstimateMultiHopSwapRequest): _20.QueryEstimateMultiHopSwapRequestAmino;
            fromAminoMsg(object: _20.QueryEstimateMultiHopSwapRequestAminoMsg): _20.QueryEstimateMultiHopSwapRequest;
            fromProtoMsg(message: _20.QueryEstimateMultiHopSwapRequestProtoMsg): _20.QueryEstimateMultiHopSwapRequest;
            toProto(message: _20.QueryEstimateMultiHopSwapRequest): Uint8Array;
            toProtoMsg(message: _20.QueryEstimateMultiHopSwapRequest): _20.QueryEstimateMultiHopSwapRequestProtoMsg;
        };
        QueryEstimateMultiHopSwapResponse: {
            typeUrl: string;
            encode(message: _20.QueryEstimateMultiHopSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryEstimateMultiHopSwapResponse;
            fromPartial(object: Partial<_20.QueryEstimateMultiHopSwapResponse>): _20.QueryEstimateMultiHopSwapResponse;
            fromAmino(object: _20.QueryEstimateMultiHopSwapResponseAmino): _20.QueryEstimateMultiHopSwapResponse;
            toAmino(message: _20.QueryEstimateMultiHopSwapResponse): _20.QueryEstimateMultiHopSwapResponseAmino;
            fromAminoMsg(object: _20.QueryEstimateMultiHopSwapResponseAminoMsg): _20.QueryEstimateMultiHopSwapResponse;
            fromProtoMsg(message: _20.QueryEstimateMultiHopSwapResponseProtoMsg): _20.QueryEstimateMultiHopSwapResponse;
            toProto(message: _20.QueryEstimateMultiHopSwapResponse): Uint8Array;
            toProtoMsg(message: _20.QueryEstimateMultiHopSwapResponse): _20.QueryEstimateMultiHopSwapResponseProtoMsg;
        };
        QueryEstimatePlaceLimitOrderRequest: {
            typeUrl: string;
            encode(message: _20.QueryEstimatePlaceLimitOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryEstimatePlaceLimitOrderRequest;
            fromPartial(object: Partial<_20.QueryEstimatePlaceLimitOrderRequest>): _20.QueryEstimatePlaceLimitOrderRequest;
            fromAmino(object: _20.QueryEstimatePlaceLimitOrderRequestAmino): _20.QueryEstimatePlaceLimitOrderRequest;
            toAmino(message: _20.QueryEstimatePlaceLimitOrderRequest): _20.QueryEstimatePlaceLimitOrderRequestAmino;
            fromAminoMsg(object: _20.QueryEstimatePlaceLimitOrderRequestAminoMsg): _20.QueryEstimatePlaceLimitOrderRequest;
            fromProtoMsg(message: _20.QueryEstimatePlaceLimitOrderRequestProtoMsg): _20.QueryEstimatePlaceLimitOrderRequest;
            toProto(message: _20.QueryEstimatePlaceLimitOrderRequest): Uint8Array;
            toProtoMsg(message: _20.QueryEstimatePlaceLimitOrderRequest): _20.QueryEstimatePlaceLimitOrderRequestProtoMsg;
        };
        QueryEstimatePlaceLimitOrderResponse: {
            typeUrl: string;
            encode(message: _20.QueryEstimatePlaceLimitOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryEstimatePlaceLimitOrderResponse;
            fromPartial(object: Partial<_20.QueryEstimatePlaceLimitOrderResponse>): _20.QueryEstimatePlaceLimitOrderResponse;
            fromAmino(object: _20.QueryEstimatePlaceLimitOrderResponseAmino): _20.QueryEstimatePlaceLimitOrderResponse;
            toAmino(message: _20.QueryEstimatePlaceLimitOrderResponse): _20.QueryEstimatePlaceLimitOrderResponseAmino;
            fromAminoMsg(object: _20.QueryEstimatePlaceLimitOrderResponseAminoMsg): _20.QueryEstimatePlaceLimitOrderResponse;
            fromProtoMsg(message: _20.QueryEstimatePlaceLimitOrderResponseProtoMsg): _20.QueryEstimatePlaceLimitOrderResponse;
            toProto(message: _20.QueryEstimatePlaceLimitOrderResponse): Uint8Array;
            toProtoMsg(message: _20.QueryEstimatePlaceLimitOrderResponse): _20.QueryEstimatePlaceLimitOrderResponseProtoMsg;
        };
        QueryPoolRequest: {
            typeUrl: string;
            encode(message: _20.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryPoolRequest;
            fromPartial(object: Partial<_20.QueryPoolRequest>): _20.QueryPoolRequest;
            fromAmino(object: _20.QueryPoolRequestAmino): _20.QueryPoolRequest;
            toAmino(message: _20.QueryPoolRequest): _20.QueryPoolRequestAmino;
            fromAminoMsg(object: _20.QueryPoolRequestAminoMsg): _20.QueryPoolRequest;
            fromProtoMsg(message: _20.QueryPoolRequestProtoMsg): _20.QueryPoolRequest;
            toProto(message: _20.QueryPoolRequest): Uint8Array;
            toProtoMsg(message: _20.QueryPoolRequest): _20.QueryPoolRequestProtoMsg;
        };
        QueryPoolByIDRequest: {
            typeUrl: string;
            encode(message: _20.QueryPoolByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryPoolByIDRequest;
            fromPartial(object: Partial<_20.QueryPoolByIDRequest>): _20.QueryPoolByIDRequest;
            fromAmino(object: _20.QueryPoolByIDRequestAmino): _20.QueryPoolByIDRequest;
            toAmino(message: _20.QueryPoolByIDRequest): _20.QueryPoolByIDRequestAmino;
            fromAminoMsg(object: _20.QueryPoolByIDRequestAminoMsg): _20.QueryPoolByIDRequest;
            fromProtoMsg(message: _20.QueryPoolByIDRequestProtoMsg): _20.QueryPoolByIDRequest;
            toProto(message: _20.QueryPoolByIDRequest): Uint8Array;
            toProtoMsg(message: _20.QueryPoolByIDRequest): _20.QueryPoolByIDRequestProtoMsg;
        };
        QueryPoolResponse: {
            typeUrl: string;
            encode(message: _20.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryPoolResponse;
            fromPartial(object: Partial<_20.QueryPoolResponse>): _20.QueryPoolResponse;
            fromAmino(object: _20.QueryPoolResponseAmino): _20.QueryPoolResponse;
            toAmino(message: _20.QueryPoolResponse): _20.QueryPoolResponseAmino;
            fromAminoMsg(object: _20.QueryPoolResponseAminoMsg): _20.QueryPoolResponse;
            fromProtoMsg(message: _20.QueryPoolResponseProtoMsg): _20.QueryPoolResponse;
            toProto(message: _20.QueryPoolResponse): Uint8Array;
            toProtoMsg(message: _20.QueryPoolResponse): _20.QueryPoolResponseProtoMsg;
        };
        QueryGetPoolMetadataRequest: {
            typeUrl: string;
            encode(message: _20.QueryGetPoolMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetPoolMetadataRequest;
            fromPartial(object: Partial<_20.QueryGetPoolMetadataRequest>): _20.QueryGetPoolMetadataRequest;
            fromAmino(object: _20.QueryGetPoolMetadataRequestAmino): _20.QueryGetPoolMetadataRequest;
            toAmino(message: _20.QueryGetPoolMetadataRequest): _20.QueryGetPoolMetadataRequestAmino;
            fromAminoMsg(object: _20.QueryGetPoolMetadataRequestAminoMsg): _20.QueryGetPoolMetadataRequest;
            fromProtoMsg(message: _20.QueryGetPoolMetadataRequestProtoMsg): _20.QueryGetPoolMetadataRequest;
            toProto(message: _20.QueryGetPoolMetadataRequest): Uint8Array;
            toProtoMsg(message: _20.QueryGetPoolMetadataRequest): _20.QueryGetPoolMetadataRequestProtoMsg;
        };
        QueryGetPoolMetadataResponse: {
            typeUrl: string;
            encode(message: _20.QueryGetPoolMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryGetPoolMetadataResponse;
            fromPartial(object: Partial<_20.QueryGetPoolMetadataResponse>): _20.QueryGetPoolMetadataResponse;
            fromAmino(object: _20.QueryGetPoolMetadataResponseAmino): _20.QueryGetPoolMetadataResponse;
            toAmino(message: _20.QueryGetPoolMetadataResponse): _20.QueryGetPoolMetadataResponseAmino;
            fromAminoMsg(object: _20.QueryGetPoolMetadataResponseAminoMsg): _20.QueryGetPoolMetadataResponse;
            fromProtoMsg(message: _20.QueryGetPoolMetadataResponseProtoMsg): _20.QueryGetPoolMetadataResponse;
            toProto(message: _20.QueryGetPoolMetadataResponse): Uint8Array;
            toProtoMsg(message: _20.QueryGetPoolMetadataResponse): _20.QueryGetPoolMetadataResponseProtoMsg;
        };
        QueryAllPoolMetadataRequest: {
            typeUrl: string;
            encode(message: _20.QueryAllPoolMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllPoolMetadataRequest;
            fromPartial(object: Partial<_20.QueryAllPoolMetadataRequest>): _20.QueryAllPoolMetadataRequest;
            fromAmino(object: _20.QueryAllPoolMetadataRequestAmino): _20.QueryAllPoolMetadataRequest;
            toAmino(message: _20.QueryAllPoolMetadataRequest): _20.QueryAllPoolMetadataRequestAmino;
            fromAminoMsg(object: _20.QueryAllPoolMetadataRequestAminoMsg): _20.QueryAllPoolMetadataRequest;
            fromProtoMsg(message: _20.QueryAllPoolMetadataRequestProtoMsg): _20.QueryAllPoolMetadataRequest;
            toProto(message: _20.QueryAllPoolMetadataRequest): Uint8Array;
            toProtoMsg(message: _20.QueryAllPoolMetadataRequest): _20.QueryAllPoolMetadataRequestProtoMsg;
        };
        QueryAllPoolMetadataResponse: {
            typeUrl: string;
            encode(message: _20.QueryAllPoolMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.QueryAllPoolMetadataResponse;
            fromPartial(object: Partial<_20.QueryAllPoolMetadataResponse>): _20.QueryAllPoolMetadataResponse;
            fromAmino(object: _20.QueryAllPoolMetadataResponseAmino): _20.QueryAllPoolMetadataResponse;
            toAmino(message: _20.QueryAllPoolMetadataResponse): _20.QueryAllPoolMetadataResponseAmino;
            fromAminoMsg(object: _20.QueryAllPoolMetadataResponseAminoMsg): _20.QueryAllPoolMetadataResponse;
            fromProtoMsg(message: _20.QueryAllPoolMetadataResponseProtoMsg): _20.QueryAllPoolMetadataResponse;
            toProto(message: _20.QueryAllPoolMetadataResponse): Uint8Array;
            toProtoMsg(message: _20.QueryAllPoolMetadataResponse): _20.QueryAllPoolMetadataResponseProtoMsg;
        };
        Pool: {
            typeUrl: string;
            encode(message: _19.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.Pool;
            fromPartial(object: Partial<_19.Pool>): _19.Pool;
            fromAmino(object: _19.PoolAmino): _19.Pool;
            toAmino(message: _19.Pool): _19.PoolAmino;
            fromAminoMsg(object: _19.PoolAminoMsg): _19.Pool;
            fromProtoMsg(message: _19.PoolProtoMsg): _19.Pool;
            toProto(message: _19.Pool): Uint8Array;
            toProtoMsg(message: _19.Pool): _19.PoolProtoMsg;
        };
        PoolReservesKey: {
            typeUrl: string;
            encode(message: _18.PoolReservesKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.PoolReservesKey;
            fromPartial(object: Partial<_18.PoolReservesKey>): _18.PoolReservesKey;
            fromAmino(object: _18.PoolReservesKeyAmino): _18.PoolReservesKey;
            toAmino(message: _18.PoolReservesKey): _18.PoolReservesKeyAmino;
            fromAminoMsg(object: _18.PoolReservesKeyAminoMsg): _18.PoolReservesKey;
            fromProtoMsg(message: _18.PoolReservesKeyProtoMsg): _18.PoolReservesKey;
            toProto(message: _18.PoolReservesKey): Uint8Array;
            toProtoMsg(message: _18.PoolReservesKey): _18.PoolReservesKeyProtoMsg;
        };
        PoolReserves: {
            typeUrl: string;
            encode(message: _18.PoolReserves, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.PoolReserves;
            fromPartial(object: Partial<_18.PoolReserves>): _18.PoolReserves;
            fromAmino(object: _18.PoolReservesAmino): _18.PoolReserves;
            toAmino(message: _18.PoolReserves): _18.PoolReservesAmino;
            fromAminoMsg(object: _18.PoolReservesAminoMsg): _18.PoolReserves;
            fromProtoMsg(message: _18.PoolReservesProtoMsg): _18.PoolReserves;
            toProto(message: _18.PoolReserves): Uint8Array;
            toProtoMsg(message: _18.PoolReserves): _18.PoolReservesProtoMsg;
        };
        PoolMetadata: {
            typeUrl: string;
            encode(message: _17.PoolMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.PoolMetadata;
            fromPartial(object: Partial<_17.PoolMetadata>): _17.PoolMetadata;
            fromAmino(object: _17.PoolMetadataAmino): _17.PoolMetadata;
            toAmino(message: _17.PoolMetadata): _17.PoolMetadataAmino;
            fromAminoMsg(object: _17.PoolMetadataAminoMsg): _17.PoolMetadata;
            fromProtoMsg(message: _17.PoolMetadataProtoMsg): _17.PoolMetadata;
            toProto(message: _17.PoolMetadata): Uint8Array;
            toProtoMsg(message: _17.PoolMetadata): _17.PoolMetadataProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _16.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _16.Params;
            fromPartial(object: Partial<_16.Params>): _16.Params;
            fromAmino(object: _16.ParamsAmino): _16.Params;
            toAmino(message: _16.Params): _16.ParamsAmino;
            fromAminoMsg(object: _16.ParamsAminoMsg): _16.Params;
            fromProtoMsg(message: _16.ParamsProtoMsg): _16.Params;
            toProto(message: _16.Params): Uint8Array;
            toProtoMsg(message: _16.Params): _16.ParamsProtoMsg;
        };
        PairID: {
            typeUrl: string;
            encode(message: _15.PairID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.PairID;
            fromPartial(object: Partial<_15.PairID>): _15.PairID;
            fromAmino(object: _15.PairIDAmino): _15.PairID;
            toAmino(message: _15.PairID): _15.PairIDAmino;
            fromAminoMsg(object: _15.PairIDAminoMsg): _15.PairID;
            fromProtoMsg(message: _15.PairIDProtoMsg): _15.PairID;
            toProto(message: _15.PairID): Uint8Array;
            toProtoMsg(message: _15.PairID): _15.PairIDProtoMsg;
        };
        LimitOrderTrancheKey: {
            typeUrl: string;
            encode(message: _14.LimitOrderTrancheKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.LimitOrderTrancheKey;
            fromPartial(object: Partial<_14.LimitOrderTrancheKey>): _14.LimitOrderTrancheKey;
            fromAmino(object: _14.LimitOrderTrancheKeyAmino): _14.LimitOrderTrancheKey;
            toAmino(message: _14.LimitOrderTrancheKey): _14.LimitOrderTrancheKeyAmino;
            fromAminoMsg(object: _14.LimitOrderTrancheKeyAminoMsg): _14.LimitOrderTrancheKey;
            fromProtoMsg(message: _14.LimitOrderTrancheKeyProtoMsg): _14.LimitOrderTrancheKey;
            toProto(message: _14.LimitOrderTrancheKey): Uint8Array;
            toProtoMsg(message: _14.LimitOrderTrancheKey): _14.LimitOrderTrancheKeyProtoMsg;
        };
        LimitOrderTranche: {
            typeUrl: string;
            encode(message: _14.LimitOrderTranche, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.LimitOrderTranche;
            fromPartial(object: Partial<_14.LimitOrderTranche>): _14.LimitOrderTranche;
            fromAmino(object: _14.LimitOrderTrancheAmino): _14.LimitOrderTranche;
            toAmino(message: _14.LimitOrderTranche): _14.LimitOrderTrancheAmino;
            fromAminoMsg(object: _14.LimitOrderTrancheAminoMsg): _14.LimitOrderTranche;
            fromProtoMsg(message: _14.LimitOrderTrancheProtoMsg): _14.LimitOrderTranche;
            toProto(message: _14.LimitOrderTranche): Uint8Array;
            toProtoMsg(message: _14.LimitOrderTranche): _14.LimitOrderTrancheProtoMsg;
        };
        LimitOrderTrancheUser: {
            typeUrl: string;
            encode(message: _13.LimitOrderTrancheUser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.LimitOrderTrancheUser;
            fromPartial(object: Partial<_13.LimitOrderTrancheUser>): _13.LimitOrderTrancheUser;
            fromAmino(object: _13.LimitOrderTrancheUserAmino): _13.LimitOrderTrancheUser;
            toAmino(message: _13.LimitOrderTrancheUser): _13.LimitOrderTrancheUserAmino;
            fromAminoMsg(object: _13.LimitOrderTrancheUserAminoMsg): _13.LimitOrderTrancheUser;
            fromProtoMsg(message: _13.LimitOrderTrancheUserProtoMsg): _13.LimitOrderTrancheUser;
            toProto(message: _13.LimitOrderTrancheUser): Uint8Array;
            toProtoMsg(message: _13.LimitOrderTrancheUser): _13.LimitOrderTrancheUserProtoMsg;
        };
        LimitOrderExpiration: {
            typeUrl: string;
            encode(message: _12.LimitOrderExpiration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.LimitOrderExpiration;
            fromPartial(object: Partial<_12.LimitOrderExpiration>): _12.LimitOrderExpiration;
            fromAmino(object: _12.LimitOrderExpirationAmino): _12.LimitOrderExpiration;
            toAmino(message: _12.LimitOrderExpiration): _12.LimitOrderExpirationAmino;
            fromAminoMsg(object: _12.LimitOrderExpirationAminoMsg): _12.LimitOrderExpiration;
            fromProtoMsg(message: _12.LimitOrderExpirationProtoMsg): _12.LimitOrderExpiration;
            toProto(message: _12.LimitOrderExpiration): Uint8Array;
            toProtoMsg(message: _12.LimitOrderExpiration): _12.LimitOrderExpirationProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _11.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.GenesisState;
            fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
            toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
            fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
            fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
            toProto(message: _11.GenesisState): Uint8Array;
            toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _10.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.DepositRecord;
            fromPartial(object: Partial<_10.DepositRecord>): _10.DepositRecord;
            fromAmino(object: _10.DepositRecordAmino): _10.DepositRecord;
            toAmino(message: _10.DepositRecord): _10.DepositRecordAmino;
            fromAminoMsg(object: _10.DepositRecordAminoMsg): _10.DepositRecord;
            fromProtoMsg(message: _10.DepositRecordProtoMsg): _10.DepositRecord;
            toProto(message: _10.DepositRecord): Uint8Array;
            toProtoMsg(message: _10.DepositRecord): _10.DepositRecordProtoMsg;
        };
    };
    const feeburner: {
        MsgClientImpl: typeof _276.MsgClientImpl;
        QueryClientImpl: typeof _268.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
            totalBurnedNeutronsAmount(request?: _26.QueryTotalBurnedNeutronsAmountRequest): Promise<_26.QueryTotalBurnedNeutronsAmountResponse>;
        };
        LCDQueryClient: typeof _260.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _28.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _28.MsgUpdateParams): {
                    typeUrl: string;
                    value: _28.MsgUpdateParams;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _28.MsgUpdateParams;
                };
            };
            fromPartial: {
                updateParams(value: _28.MsgUpdateParams): {
                    typeUrl: string;
                    value: _28.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/neutron.feeburner.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _28.MsgUpdateParams) => _28.MsgUpdateParamsAmino;
                fromAmino: (object: _28.MsgUpdateParamsAmino) => _28.MsgUpdateParams;
            };
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
            fromProtoMsg(message: _28.MsgUpdateParamsResponseProtoMsg): _28.MsgUpdateParamsResponse;
            toProto(message: _28.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _28.MsgUpdateParamsResponse): _28.MsgUpdateParamsResponseProtoMsg;
        };
        TotalBurnedNeutronsAmount: {
            typeUrl: string;
            encode(message: _27.TotalBurnedNeutronsAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.TotalBurnedNeutronsAmount;
            fromPartial(object: Partial<_27.TotalBurnedNeutronsAmount>): _27.TotalBurnedNeutronsAmount;
            fromAmino(object: _27.TotalBurnedNeutronsAmountAmino): _27.TotalBurnedNeutronsAmount;
            toAmino(message: _27.TotalBurnedNeutronsAmount): _27.TotalBurnedNeutronsAmountAmino;
            fromAminoMsg(object: _27.TotalBurnedNeutronsAmountAminoMsg): _27.TotalBurnedNeutronsAmount;
            fromProtoMsg(message: _27.TotalBurnedNeutronsAmountProtoMsg): _27.TotalBurnedNeutronsAmount;
            toProto(message: _27.TotalBurnedNeutronsAmount): Uint8Array;
            toProtoMsg(message: _27.TotalBurnedNeutronsAmount): _27.TotalBurnedNeutronsAmountProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _26.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.QueryParamsRequest;
            fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
            fromAmino(_: _26.QueryParamsRequestAmino): _26.QueryParamsRequest;
            toAmino(_: _26.QueryParamsRequest): _26.QueryParamsRequestAmino;
            fromAminoMsg(object: _26.QueryParamsRequestAminoMsg): _26.QueryParamsRequest;
            fromProtoMsg(message: _26.QueryParamsRequestProtoMsg): _26.QueryParamsRequest;
            toProto(message: _26.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _26.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.QueryParamsResponse;
            fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
            fromAmino(object: _26.QueryParamsResponseAmino): _26.QueryParamsResponse;
            toAmino(message: _26.QueryParamsResponse): _26.QueryParamsResponseAmino;
            fromAminoMsg(object: _26.QueryParamsResponseAminoMsg): _26.QueryParamsResponse;
            fromProtoMsg(message: _26.QueryParamsResponseProtoMsg): _26.QueryParamsResponse;
            toProto(message: _26.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseProtoMsg;
        };
        QueryTotalBurnedNeutronsAmountRequest: {
            typeUrl: string;
            encode(_: _26.QueryTotalBurnedNeutronsAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.QueryTotalBurnedNeutronsAmountRequest;
            fromPartial(_: Partial<_26.QueryTotalBurnedNeutronsAmountRequest>): _26.QueryTotalBurnedNeutronsAmountRequest;
            fromAmino(_: _26.QueryTotalBurnedNeutronsAmountRequestAmino): _26.QueryTotalBurnedNeutronsAmountRequest;
            toAmino(_: _26.QueryTotalBurnedNeutronsAmountRequest): _26.QueryTotalBurnedNeutronsAmountRequestAmino;
            fromAminoMsg(object: _26.QueryTotalBurnedNeutronsAmountRequestAminoMsg): _26.QueryTotalBurnedNeutronsAmountRequest;
            fromProtoMsg(message: _26.QueryTotalBurnedNeutronsAmountRequestProtoMsg): _26.QueryTotalBurnedNeutronsAmountRequest;
            toProto(message: _26.QueryTotalBurnedNeutronsAmountRequest): Uint8Array;
            toProtoMsg(message: _26.QueryTotalBurnedNeutronsAmountRequest): _26.QueryTotalBurnedNeutronsAmountRequestProtoMsg;
        };
        QueryTotalBurnedNeutronsAmountResponse: {
            typeUrl: string;
            encode(message: _26.QueryTotalBurnedNeutronsAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.QueryTotalBurnedNeutronsAmountResponse;
            fromPartial(object: Partial<_26.QueryTotalBurnedNeutronsAmountResponse>): _26.QueryTotalBurnedNeutronsAmountResponse;
            fromAmino(object: _26.QueryTotalBurnedNeutronsAmountResponseAmino): _26.QueryTotalBurnedNeutronsAmountResponse;
            toAmino(message: _26.QueryTotalBurnedNeutronsAmountResponse): _26.QueryTotalBurnedNeutronsAmountResponseAmino;
            fromAminoMsg(object: _26.QueryTotalBurnedNeutronsAmountResponseAminoMsg): _26.QueryTotalBurnedNeutronsAmountResponse;
            fromProtoMsg(message: _26.QueryTotalBurnedNeutronsAmountResponseProtoMsg): _26.QueryTotalBurnedNeutronsAmountResponse;
            toProto(message: _26.QueryTotalBurnedNeutronsAmountResponse): Uint8Array;
            toProtoMsg(message: _26.QueryTotalBurnedNeutronsAmountResponse): _26.QueryTotalBurnedNeutronsAmountResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _25.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.Params;
            fromPartial(object: Partial<_25.Params>): _25.Params;
            fromAmino(object: _25.ParamsAmino): _25.Params;
            toAmino(message: _25.Params): _25.ParamsAmino;
            fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
            fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
            toProto(message: _25.Params): Uint8Array;
            toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _24.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.GenesisState;
            fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
            fromAmino(object: _24.GenesisStateAmino): _24.GenesisState;
            toAmino(message: _24.GenesisState): _24.GenesisStateAmino;
            fromAminoMsg(object: _24.GenesisStateAminoMsg): _24.GenesisState;
            fromProtoMsg(message: _24.GenesisStateProtoMsg): _24.GenesisState;
            toProto(message: _24.GenesisState): Uint8Array;
            toProtoMsg(message: _24.GenesisState): _24.GenesisStateProtoMsg;
        };
    };
    const feerefunder: {
        MsgClientImpl: typeof _277.MsgClientImpl;
        QueryClientImpl: typeof _269.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
            feeInfo(request: _32.FeeInfoRequest): Promise<_32.FeeInfoResponse>;
        };
        LCDQueryClient: typeof _261.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                updateParams(value: _33.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                updateParams(value: _33.MsgUpdateParams): {
                    typeUrl: string;
                    value: _33.MsgUpdateParams;
                };
            };
            fromJSON: {
                updateParams(value: any): {
                    typeUrl: string;
                    value: _33.MsgUpdateParams;
                };
            };
            fromPartial: {
                updateParams(value: _33.MsgUpdateParams): {
                    typeUrl: string;
                    value: _33.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/neutron.feerefunder.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _33.MsgUpdateParams) => _33.MsgUpdateParamsAmino;
                fromAmino: (object: _33.MsgUpdateParamsAmino) => _33.MsgUpdateParams;
            };
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _33.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _33.MsgUpdateParams;
            fromPartial(object: Partial<_33.MsgUpdateParams>): _33.MsgUpdateParams;
            fromAmino(object: _33.MsgUpdateParamsAmino): _33.MsgUpdateParams;
            toAmino(message: _33.MsgUpdateParams): _33.MsgUpdateParamsAmino;
            fromAminoMsg(object: _33.MsgUpdateParamsAminoMsg): _33.MsgUpdateParams;
            toAminoMsg(message: _33.MsgUpdateParams): _33.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _33.MsgUpdateParamsProtoMsg): _33.MsgUpdateParams;
            toProto(message: _33.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _33.MsgUpdateParams): _33.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _33.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _33.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_33.MsgUpdateParamsResponse>): _33.MsgUpdateParamsResponse;
            fromAmino(_: _33.MsgUpdateParamsResponseAmino): _33.MsgUpdateParamsResponse;
            toAmino(_: _33.MsgUpdateParamsResponse): _33.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _33.MsgUpdateParamsResponseAminoMsg): _33.MsgUpdateParamsResponse;
            fromProtoMsg(message: _33.MsgUpdateParamsResponseProtoMsg): _33.MsgUpdateParamsResponse;
            toProto(message: _33.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _33.MsgUpdateParamsResponse): _33.MsgUpdateParamsResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _32.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _32.QueryParamsRequest;
            fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
            fromAmino(_: _32.QueryParamsRequestAmino): _32.QueryParamsRequest;
            toAmino(_: _32.QueryParamsRequest): _32.QueryParamsRequestAmino;
            fromAminoMsg(object: _32.QueryParamsRequestAminoMsg): _32.QueryParamsRequest;
            fromProtoMsg(message: _32.QueryParamsRequestProtoMsg): _32.QueryParamsRequest;
            toProto(message: _32.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _32.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _32.QueryParamsResponse;
            fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
            fromAmino(object: _32.QueryParamsResponseAmino): _32.QueryParamsResponse;
            toAmino(message: _32.QueryParamsResponse): _32.QueryParamsResponseAmino;
            fromAminoMsg(object: _32.QueryParamsResponseAminoMsg): _32.QueryParamsResponse;
            fromProtoMsg(message: _32.QueryParamsResponseProtoMsg): _32.QueryParamsResponse;
            toProto(message: _32.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseProtoMsg;
        };
        FeeInfoRequest: {
            typeUrl: string;
            encode(message: _32.FeeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _32.FeeInfoRequest;
            fromPartial(object: Partial<_32.FeeInfoRequest>): _32.FeeInfoRequest;
            fromAmino(object: _32.FeeInfoRequestAmino): _32.FeeInfoRequest;
            toAmino(message: _32.FeeInfoRequest): _32.FeeInfoRequestAmino;
            fromAminoMsg(object: _32.FeeInfoRequestAminoMsg): _32.FeeInfoRequest;
            fromProtoMsg(message: _32.FeeInfoRequestProtoMsg): _32.FeeInfoRequest;
            toProto(message: _32.FeeInfoRequest): Uint8Array;
            toProtoMsg(message: _32.FeeInfoRequest): _32.FeeInfoRequestProtoMsg;
        };
        FeeInfoResponse: {
            typeUrl: string;
            encode(message: _32.FeeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _32.FeeInfoResponse;
            fromPartial(object: Partial<_32.FeeInfoResponse>): _32.FeeInfoResponse;
            fromAmino(object: _32.FeeInfoResponseAmino): _32.FeeInfoResponse;
            toAmino(message: _32.FeeInfoResponse): _32.FeeInfoResponseAmino;
            fromAminoMsg(object: _32.FeeInfoResponseAminoMsg): _32.FeeInfoResponse;
            fromProtoMsg(message: _32.FeeInfoResponseProtoMsg): _32.FeeInfoResponse;
            toProto(message: _32.FeeInfoResponse): Uint8Array;
            toProtoMsg(message: _32.FeeInfoResponse): _32.FeeInfoResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _31.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.Params;
            fromPartial(object: Partial<_31.Params>): _31.Params;
            fromAmino(object: _31.ParamsAmino): _31.Params;
            toAmino(message: _31.Params): _31.ParamsAmino;
            fromAminoMsg(object: _31.ParamsAminoMsg): _31.Params;
            fromProtoMsg(message: _31.ParamsProtoMsg): _31.Params;
            toProto(message: _31.Params): Uint8Array;
            toProtoMsg(message: _31.Params): _31.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _30.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _30.GenesisState;
            fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
            toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
            fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
            fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
            toProto(message: _30.GenesisState): Uint8Array;
            toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
        };
        FeeInfo: {
            typeUrl: string;
            encode(message: _30.FeeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _30.FeeInfo;
            fromPartial(object: Partial<_30.FeeInfo>): _30.FeeInfo;
            fromAmino(object: _30.FeeInfoAmino): _30.FeeInfo;
            toAmino(message: _30.FeeInfo): _30.FeeInfoAmino;
            fromAminoMsg(object: _30.FeeInfoAminoMsg): _30.FeeInfo;
            fromProtoMsg(message: _30.FeeInfoProtoMsg): _30.FeeInfo;
            toProto(message: _30.FeeInfo): Uint8Array;
            toProtoMsg(message: _30.FeeInfo): _30.FeeInfoProtoMsg;
        };
        Fee: {
            typeUrl: string;
            encode(message: _29.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.Fee;
            fromPartial(object: Partial<_29.Fee>): _29.Fee;
            fromAmino(object: _29.FeeAmino): _29.Fee;
            toAmino(message: _29.Fee): _29.FeeAmino;
            fromAminoMsg(object: _29.FeeAminoMsg): _29.Fee;
            fromProtoMsg(message: _29.FeeProtoMsg): _29.Fee;
            toProto(message: _29.Fee): Uint8Array;
            toProtoMsg(message: _29.Fee): _29.FeeProtoMsg;
        };
        PacketID: {
            typeUrl: string;
            encode(message: _29.PacketID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.PacketID;
            fromPartial(object: Partial<_29.PacketID>): _29.PacketID;
            fromAmino(object: _29.PacketIDAmino): _29.PacketID;
            toAmino(message: _29.PacketID): _29.PacketIDAmino;
            fromAminoMsg(object: _29.PacketIDAminoMsg): _29.PacketID;
            fromProtoMsg(message: _29.PacketIDProtoMsg): _29.PacketID;
            toProto(message: _29.PacketID): Uint8Array;
            toProtoMsg(message: _29.PacketID): _29.PacketIDProtoMsg;
        };
    };
    const interchainqueries: {
        MsgClientImpl: typeof _278.MsgClientImpl;
        QueryClientImpl: typeof _270.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
            registeredQueries(request: _36.QueryRegisteredQueriesRequest): Promise<_36.QueryRegisteredQueriesResponse>;
            registeredQuery(request: _36.QueryRegisteredQueryRequest): Promise<_36.QueryRegisteredQueryResponse>;
            queryResult(request: _36.QueryRegisteredQueryResultRequest): Promise<_36.QueryRegisteredQueryResultResponse>;
            lastRemoteHeight(request: _36.QueryLastRemoteHeight): Promise<_36.QueryLastRemoteHeightResponse>;
        };
        LCDQueryClient: typeof _262.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerInterchainQuery(value: _37.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitQueryResult(value: _37.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeInterchainQuery(value: _37.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInterchainQuery(value: _37.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateParams(value: _37.MsgUpdateParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerInterchainQuery(value: _37.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: _37.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: _37.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: _37.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: _37.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: _37.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: _37.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: _37.MsgUpdateInterchainQueryRequest;
                };
                updateParams(value: _37.MsgUpdateParams): {
                    typeUrl: string;
                    value: _37.MsgUpdateParams;
                };
            };
            fromJSON: {
                registerInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _37.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: any): {
                    typeUrl: string;
                    value: _37.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _37.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _37.MsgUpdateInterchainQueryRequest;
                };
                updateParams(value: any): {
                    typeUrl: string;
                    value: _37.MsgUpdateParams;
                };
            };
            fromPartial: {
                registerInterchainQuery(value: _37.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: _37.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: _37.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: _37.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: _37.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: _37.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: _37.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: _37.MsgUpdateInterchainQueryRequest;
                };
                updateParams(value: _37.MsgUpdateParams): {
                    typeUrl: string;
                    value: _37.MsgUpdateParams;
                };
            };
        };
        AminoConverter: {
            "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
                aminoType: string;
                toAmino: (message: _37.MsgRegisterInterchainQuery) => _37.MsgRegisterInterchainQueryAmino;
                fromAmino: (object: _37.MsgRegisterInterchainQueryAmino) => _37.MsgRegisterInterchainQuery;
            };
            "/neutron.interchainqueries.MsgSubmitQueryResult": {
                aminoType: string;
                toAmino: (message: _37.MsgSubmitQueryResult) => _37.MsgSubmitQueryResultAmino;
                fromAmino: (object: _37.MsgSubmitQueryResultAmino) => _37.MsgSubmitQueryResult;
            };
            "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
                aminoType: string;
                toAmino: (message: _37.MsgRemoveInterchainQueryRequest) => _37.MsgRemoveInterchainQueryRequestAmino;
                fromAmino: (object: _37.MsgRemoveInterchainQueryRequestAmino) => _37.MsgRemoveInterchainQueryRequest;
            };
            "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
                aminoType: string;
                toAmino: (message: _37.MsgUpdateInterchainQueryRequest) => _37.MsgUpdateInterchainQueryRequestAmino;
                fromAmino: (object: _37.MsgUpdateInterchainQueryRequestAmino) => _37.MsgUpdateInterchainQueryRequest;
            };
            "/neutron.interchainqueries.MsgUpdateParams": {
                aminoType: string;
                toAmino: (message: _37.MsgUpdateParams) => _37.MsgUpdateParamsAmino;
                fromAmino: (object: _37.MsgUpdateParamsAmino) => _37.MsgUpdateParams;
            };
        };
        MsgRegisterInterchainQuery: {
            typeUrl: string;
            encode(message: _37.MsgRegisterInterchainQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.MsgRegisterInterchainQuery;
            fromPartial(object: Partial<_37.MsgRegisterInterchainQuery>): _37.MsgRegisterInterchainQuery;
            fromAmino(object: _37.MsgRegisterInterchainQueryAmino): _37.MsgRegisterInterchainQuery;
            toAmino(message: _37.MsgRegisterInterchainQuery): _37.MsgRegisterInterchainQueryAmino;
            fromAminoMsg(object: _37.MsgRegisterInterchainQueryAminoMsg): _37.MsgRegisterInterchainQuery;
            fromProtoMsg(message: _37.MsgRegisterInterchainQueryProtoMsg): _37.MsgRegisterInterchainQuery;
            toProto(message: _37.MsgRegisterInterchainQuery): Uint8Array;
            toProtoMsg(message: _37.MsgRegisterInterchainQuery): _37.MsgRegisterInterchainQueryProtoMsg;
        };
        MsgRegisterInterchainQueryResponse: {
            typeUrl: string;
            encode(message: _37.MsgRegisterInterchainQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.MsgRegisterInterchainQueryResponse;
            fromPartial(object: Partial<_37.MsgRegisterInterchainQueryResponse>): _37.MsgRegisterInterchainQueryResponse;
            fromAmino(object: _37.MsgRegisterInterchainQueryResponseAmino): _37.MsgRegisterInterchainQueryResponse;
            toAmino(message: _37.MsgRegisterInterchainQueryResponse): _37.MsgRegisterInterchainQueryResponseAmino;
            fromAminoMsg(object: _37.MsgRegisterInterchainQueryResponseAminoMsg): _37.MsgRegisterInterchainQueryResponse;
            fromProtoMsg(message: _37.MsgRegisterInterchainQueryResponseProtoMsg): _37.MsgRegisterInterchainQueryResponse;
            toProto(message: _37.MsgRegisterInterchainQueryResponse): Uint8Array;
            toProtoMsg(message: _37.MsgRegisterInterchainQueryResponse): _37.MsgRegisterInterchainQueryResponseProtoMsg;
        };
        MsgSubmitQueryResult: {
            typeUrl: string;
            encode(message: _37.MsgSubmitQueryResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.MsgSubmitQueryResult;
            fromPartial(object: Partial<_37.MsgSubmitQueryResult>): _37.MsgSubmitQueryResult;
            fromAmino(object: _37.MsgSubmitQueryResultAmino): _37.MsgSubmitQueryResult;
            toAmino(message: _37.MsgSubmitQueryResult): _37.MsgSubmitQueryResultAmino;
            fromAminoMsg(object: _37.MsgSubmitQueryResultAminoMsg): _37.MsgSubmitQueryResult;
            fromProtoMsg(message: _37.MsgSubmitQueryResultProtoMsg): _37.MsgSubmitQueryResult;
            toProto(message: _37.MsgSubmitQueryResult): Uint8Array;
            toProtoMsg(message: _37.MsgSubmitQueryResult): _37.MsgSubmitQueryResultProtoMsg;
        };
        QueryResult: {
            typeUrl: string;
            encode(message: _37.QueryResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.QueryResult;
            fromPartial(object: Partial<_37.QueryResult>): _37.QueryResult;
            fromAmino(object: _37.QueryResultAmino): _37.QueryResult;
            toAmino(message: _37.QueryResult): _37.QueryResultAmino;
            fromAminoMsg(object: _37.QueryResultAminoMsg): _37.QueryResult;
            fromProtoMsg(message: _37.QueryResultProtoMsg): _37.QueryResult;
            toProto(message: _37.QueryResult): Uint8Array;
            toProtoMsg(message: _37.QueryResult): _37.QueryResultProtoMsg;
        };
        StorageValue: {
            typeUrl: string;
            encode(message: _37.StorageValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.StorageValue;
            fromPartial(object: Partial<_37.StorageValue>): _37.StorageValue;
            fromAmino(object: _37.StorageValueAmino): _37.StorageValue;
            toAmino(message: _37.StorageValue): _37.StorageValueAmino;
            fromAminoMsg(object: _37.StorageValueAminoMsg): _37.StorageValue;
            fromProtoMsg(message: _37.StorageValueProtoMsg): _37.StorageValue;
            toProto(message: _37.StorageValue): Uint8Array;
            toProtoMsg(message: _37.StorageValue): _37.StorageValueProtoMsg;
        };
        Block: {
            typeUrl: string;
            encode(message: _37.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.Block;
            fromPartial(object: Partial<_37.Block>): _37.Block;
            fromAmino(object: _37.BlockAmino): _37.Block;
            toAmino(message: _37.Block): _37.BlockAmino;
            fromAminoMsg(object: _37.BlockAminoMsg): _37.Block;
            fromProtoMsg(message: _37.BlockProtoMsg): _37.Block;
            toProto(message: _37.Block): Uint8Array;
            toProtoMsg(message: _37.Block): _37.BlockProtoMsg;
        };
        TxValue: {
            typeUrl: string;
            encode(message: _37.TxValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.TxValue;
            fromPartial(object: Partial<_37.TxValue>): _37.TxValue;
            fromAmino(object: _37.TxValueAmino): _37.TxValue;
            toAmino(message: _37.TxValue): _37.TxValueAmino;
            fromAminoMsg(object: _37.TxValueAminoMsg): _37.TxValue;
            fromProtoMsg(message: _37.TxValueProtoMsg): _37.TxValue;
            toProto(message: _37.TxValue): Uint8Array;
            toProtoMsg(message: _37.TxValue): _37.TxValueProtoMsg;
        };
        MsgSubmitQueryResultResponse: {
            typeUrl: string;
            encode(_: _37.MsgSubmitQueryResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _37.MsgSubmitQueryResultResponse;
            fromPartial(_: Partial<_37.MsgSubmitQueryResultResponse>): _37.MsgSubmitQueryResultResponse;
            fromAmino(_: _37.MsgSubmitQueryResultResponseAmino): _37.MsgSubmitQueryResultResponse;
            toAmino(_: _37.MsgSubmitQueryResultResponse): _37.MsgSubmitQueryResultResponseAmino;
            fromAminoMsg(object: _37.MsgSubmitQueryResultResponseAminoMsg): _37.MsgSubmitQueryResultResponse;
            fromProtoMsg(message: _37.MsgSubmitQueryResultResponseProtoMsg): _37.MsgSubmitQueryResultResponse;
            toProto(message: _37.MsgSubmitQueryResultResponse): Uint8Array;
            toProtoMsg(message: _37.MsgSubmitQueryResultResponse): _37.MsgSubmitQueryResultResponseProtoMsg;
        };
        MsgRemoveInterchainQueryRequest: {
            typeUrl: string;
            encode(message: _37.MsgRemoveInterchainQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.MsgRemoveInterchainQueryRequest;
            fromPartial(object: Partial<_37.MsgRemoveInterchainQueryRequest>): _37.MsgRemoveInterchainQueryRequest;
            fromAmino(object: _37.MsgRemoveInterchainQueryRequestAmino): _37.MsgRemoveInterchainQueryRequest;
            toAmino(message: _37.MsgRemoveInterchainQueryRequest): _37.MsgRemoveInterchainQueryRequestAmino;
            fromAminoMsg(object: _37.MsgRemoveInterchainQueryRequestAminoMsg): _37.MsgRemoveInterchainQueryRequest;
            fromProtoMsg(message: _37.MsgRemoveInterchainQueryRequestProtoMsg): _37.MsgRemoveInterchainQueryRequest;
            toProto(message: _37.MsgRemoveInterchainQueryRequest): Uint8Array;
            toProtoMsg(message: _37.MsgRemoveInterchainQueryRequest): _37.MsgRemoveInterchainQueryRequestProtoMsg;
        };
        MsgRemoveInterchainQueryResponse: {
            typeUrl: string;
            encode(_: _37.MsgRemoveInterchainQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _37.MsgRemoveInterchainQueryResponse;
            fromPartial(_: Partial<_37.MsgRemoveInterchainQueryResponse>): _37.MsgRemoveInterchainQueryResponse;
            fromAmino(_: _37.MsgRemoveInterchainQueryResponseAmino): _37.MsgRemoveInterchainQueryResponse;
            toAmino(_: _37.MsgRemoveInterchainQueryResponse): _37.MsgRemoveInterchainQueryResponseAmino;
            fromAminoMsg(object: _37.MsgRemoveInterchainQueryResponseAminoMsg): _37.MsgRemoveInterchainQueryResponse;
            fromProtoMsg(message: _37.MsgRemoveInterchainQueryResponseProtoMsg): _37.MsgRemoveInterchainQueryResponse;
            toProto(message: _37.MsgRemoveInterchainQueryResponse): Uint8Array;
            toProtoMsg(message: _37.MsgRemoveInterchainQueryResponse): _37.MsgRemoveInterchainQueryResponseProtoMsg;
        };
        MsgUpdateInterchainQueryRequest: {
            typeUrl: string;
            encode(message: _37.MsgUpdateInterchainQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.MsgUpdateInterchainQueryRequest;
            fromPartial(object: Partial<_37.MsgUpdateInterchainQueryRequest>): _37.MsgUpdateInterchainQueryRequest;
            fromAmino(object: _37.MsgUpdateInterchainQueryRequestAmino): _37.MsgUpdateInterchainQueryRequest;
            toAmino(message: _37.MsgUpdateInterchainQueryRequest): _37.MsgUpdateInterchainQueryRequestAmino;
            fromAminoMsg(object: _37.MsgUpdateInterchainQueryRequestAminoMsg): _37.MsgUpdateInterchainQueryRequest;
            fromProtoMsg(message: _37.MsgUpdateInterchainQueryRequestProtoMsg): _37.MsgUpdateInterchainQueryRequest;
            toProto(message: _37.MsgUpdateInterchainQueryRequest): Uint8Array;
            toProtoMsg(message: _37.MsgUpdateInterchainQueryRequest): _37.MsgUpdateInterchainQueryRequestProtoMsg;
        };
        MsgUpdateInterchainQueryResponse: {
            typeUrl: string;
            encode(_: _37.MsgUpdateInterchainQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _37.MsgUpdateInterchainQueryResponse;
            fromPartial(_: Partial<_37.MsgUpdateInterchainQueryResponse>): _37.MsgUpdateInterchainQueryResponse;
            fromAmino(_: _37.MsgUpdateInterchainQueryResponseAmino): _37.MsgUpdateInterchainQueryResponse;
            toAmino(_: _37.MsgUpdateInterchainQueryResponse): _37.MsgUpdateInterchainQueryResponseAmino;
            fromAminoMsg(object: _37.MsgUpdateInterchainQueryResponseAminoMsg): _37.MsgUpdateInterchainQueryResponse;
            fromProtoMsg(message: _37.MsgUpdateInterchainQueryResponseProtoMsg): _37.MsgUpdateInterchainQueryResponse;
            toProto(message: _37.MsgUpdateInterchainQueryResponse): Uint8Array;
            toProtoMsg(message: _37.MsgUpdateInterchainQueryResponse): _37.MsgUpdateInterchainQueryResponseProtoMsg;
        };
        MsgUpdateParams: {
            typeUrl: string;
            encode(message: _37.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.MsgUpdateParams;
            fromPartial(object: Partial<_37.MsgUpdateParams>): _37.MsgUpdateParams;
            fromAmino(object: _37.MsgUpdateParamsAmino): _37.MsgUpdateParams;
            toAmino(message: _37.MsgUpdateParams): _37.MsgUpdateParamsAmino;
            fromAminoMsg(object: _37.MsgUpdateParamsAminoMsg): _37.MsgUpdateParams;
            toAminoMsg(message: _37.MsgUpdateParams): _37.MsgUpdateParamsAminoMsg;
            fromProtoMsg(message: _37.MsgUpdateParamsProtoMsg): _37.MsgUpdateParams;
            toProto(message: _37.MsgUpdateParams): Uint8Array;
            toProtoMsg(message: _37.MsgUpdateParams): _37.MsgUpdateParamsProtoMsg;
        };
        MsgUpdateParamsResponse: {
            typeUrl: string;
            encode(_: _37.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _37.MsgUpdateParamsResponse;
            fromPartial(_: Partial<_37.MsgUpdateParamsResponse>): _37.MsgUpdateParamsResponse;
            fromAmino(_: _37.MsgUpdateParamsResponseAmino): _37.MsgUpdateParamsResponse;
            toAmino(_: _37.MsgUpdateParamsResponse): _37.MsgUpdateParamsResponseAmino;
            fromAminoMsg(object: _37.MsgUpdateParamsResponseAminoMsg): _37.MsgUpdateParamsResponse;
            fromProtoMsg(message: _37.MsgUpdateParamsResponseProtoMsg): _37.MsgUpdateParamsResponse;
            toProto(message: _37.MsgUpdateParamsResponse): Uint8Array;
            toProtoMsg(message: _37.MsgUpdateParamsResponse): _37.MsgUpdateParamsResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _36.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _36.QueryParamsRequest;
            fromPartial(_: Partial<_36.QueryParamsRequest>): _36.QueryParamsRequest;
            fromAmino(_: _36.QueryParamsRequestAmino): _36.QueryParamsRequest;
            toAmino(_: _36.QueryParamsRequest): _36.QueryParamsRequestAmino;
            fromAminoMsg(object: _36.QueryParamsRequestAminoMsg): _36.QueryParamsRequest;
            fromProtoMsg(message: _36.QueryParamsRequestProtoMsg): _36.QueryParamsRequest;
            toProto(message: _36.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _36.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryParamsResponse;
            fromPartial(object: Partial<_36.QueryParamsResponse>): _36.QueryParamsResponse;
            fromAmino(object: _36.QueryParamsResponseAmino): _36.QueryParamsResponse;
            toAmino(message: _36.QueryParamsResponse): _36.QueryParamsResponseAmino;
            fromAminoMsg(object: _36.QueryParamsResponseAminoMsg): _36.QueryParamsResponse;
            fromProtoMsg(message: _36.QueryParamsResponseProtoMsg): _36.QueryParamsResponse;
            toProto(message: _36.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseProtoMsg;
        };
        QueryRegisteredQueriesRequest: {
            typeUrl: string;
            encode(message: _36.QueryRegisteredQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryRegisteredQueriesRequest;
            fromPartial(object: Partial<_36.QueryRegisteredQueriesRequest>): _36.QueryRegisteredQueriesRequest;
            fromAmino(object: _36.QueryRegisteredQueriesRequestAmino): _36.QueryRegisteredQueriesRequest;
            toAmino(message: _36.QueryRegisteredQueriesRequest): _36.QueryRegisteredQueriesRequestAmino;
            fromAminoMsg(object: _36.QueryRegisteredQueriesRequestAminoMsg): _36.QueryRegisteredQueriesRequest;
            fromProtoMsg(message: _36.QueryRegisteredQueriesRequestProtoMsg): _36.QueryRegisteredQueriesRequest;
            toProto(message: _36.QueryRegisteredQueriesRequest): Uint8Array;
            toProtoMsg(message: _36.QueryRegisteredQueriesRequest): _36.QueryRegisteredQueriesRequestProtoMsg;
        };
        QueryRegisteredQueriesResponse: {
            typeUrl: string;
            encode(message: _36.QueryRegisteredQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryRegisteredQueriesResponse;
            fromPartial(object: Partial<_36.QueryRegisteredQueriesResponse>): _36.QueryRegisteredQueriesResponse;
            fromAmino(object: _36.QueryRegisteredQueriesResponseAmino): _36.QueryRegisteredQueriesResponse;
            toAmino(message: _36.QueryRegisteredQueriesResponse): _36.QueryRegisteredQueriesResponseAmino;
            fromAminoMsg(object: _36.QueryRegisteredQueriesResponseAminoMsg): _36.QueryRegisteredQueriesResponse;
            fromProtoMsg(message: _36.QueryRegisteredQueriesResponseProtoMsg): _36.QueryRegisteredQueriesResponse;
            toProto(message: _36.QueryRegisteredQueriesResponse): Uint8Array;
            toProtoMsg(message: _36.QueryRegisteredQueriesResponse): _36.QueryRegisteredQueriesResponseProtoMsg;
        };
        QueryRegisteredQueryRequest: {
            typeUrl: string;
            encode(message: _36.QueryRegisteredQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryRegisteredQueryRequest;
            fromPartial(object: Partial<_36.QueryRegisteredQueryRequest>): _36.QueryRegisteredQueryRequest;
            fromAmino(object: _36.QueryRegisteredQueryRequestAmino): _36.QueryRegisteredQueryRequest;
            toAmino(message: _36.QueryRegisteredQueryRequest): _36.QueryRegisteredQueryRequestAmino;
            fromAminoMsg(object: _36.QueryRegisteredQueryRequestAminoMsg): _36.QueryRegisteredQueryRequest;
            fromProtoMsg(message: _36.QueryRegisteredQueryRequestProtoMsg): _36.QueryRegisteredQueryRequest;
            toProto(message: _36.QueryRegisteredQueryRequest): Uint8Array;
            toProtoMsg(message: _36.QueryRegisteredQueryRequest): _36.QueryRegisteredQueryRequestProtoMsg;
        };
        QueryRegisteredQueryResponse: {
            typeUrl: string;
            encode(message: _36.QueryRegisteredQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryRegisteredQueryResponse;
            fromPartial(object: Partial<_36.QueryRegisteredQueryResponse>): _36.QueryRegisteredQueryResponse;
            fromAmino(object: _36.QueryRegisteredQueryResponseAmino): _36.QueryRegisteredQueryResponse;
            toAmino(message: _36.QueryRegisteredQueryResponse): _36.QueryRegisteredQueryResponseAmino;
            fromAminoMsg(object: _36.QueryRegisteredQueryResponseAminoMsg): _36.QueryRegisteredQueryResponse;
            fromProtoMsg(message: _36.QueryRegisteredQueryResponseProtoMsg): _36.QueryRegisteredQueryResponse;
            toProto(message: _36.QueryRegisteredQueryResponse): Uint8Array;
            toProtoMsg(message: _36.QueryRegisteredQueryResponse): _36.QueryRegisteredQueryResponseProtoMsg;
        };
        QueryRegisteredQueryResultRequest: {
            typeUrl: string;
            encode(message: _36.QueryRegisteredQueryResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryRegisteredQueryResultRequest;
            fromPartial(object: Partial<_36.QueryRegisteredQueryResultRequest>): _36.QueryRegisteredQueryResultRequest;
            fromAmino(object: _36.QueryRegisteredQueryResultRequestAmino): _36.QueryRegisteredQueryResultRequest;
            toAmino(message: _36.QueryRegisteredQueryResultRequest): _36.QueryRegisteredQueryResultRequestAmino;
            fromAminoMsg(object: _36.QueryRegisteredQueryResultRequestAminoMsg): _36.QueryRegisteredQueryResultRequest;
            fromProtoMsg(message: _36.QueryRegisteredQueryResultRequestProtoMsg): _36.QueryRegisteredQueryResultRequest;
            toProto(message: _36.QueryRegisteredQueryResultRequest): Uint8Array;
            toProtoMsg(message: _36.QueryRegisteredQueryResultRequest): _36.QueryRegisteredQueryResultRequestProtoMsg;
        };
        QueryRegisteredQueryResultResponse: {
            typeUrl: string;
            encode(message: _36.QueryRegisteredQueryResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryRegisteredQueryResultResponse;
            fromPartial(object: Partial<_36.QueryRegisteredQueryResultResponse>): _36.QueryRegisteredQueryResultResponse;
            fromAmino(object: _36.QueryRegisteredQueryResultResponseAmino): _36.QueryRegisteredQueryResultResponse;
            toAmino(message: _36.QueryRegisteredQueryResultResponse): _36.QueryRegisteredQueryResultResponseAmino;
            fromAminoMsg(object: _36.QueryRegisteredQueryResultResponseAminoMsg): _36.QueryRegisteredQueryResultResponse;
            fromProtoMsg(message: _36.QueryRegisteredQueryResultResponseProtoMsg): _36.QueryRegisteredQueryResultResponse;
            toProto(message: _36.QueryRegisteredQueryResultResponse): Uint8Array;
            toProtoMsg(message: _36.QueryRegisteredQueryResultResponse): _36.QueryRegisteredQueryResultResponseProtoMsg;
        };
        Transaction: {
            typeUrl: string;
            encode(message: _36.Transaction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.Transaction;
            fromPartial(object: Partial<_36.Transaction>): _36.Transaction;
            fromAmino(object: _36.TransactionAmino): _36.Transaction;
            toAmino(message: _36.Transaction): _36.TransactionAmino;
            fromAminoMsg(object: _36.TransactionAminoMsg): _36.Transaction;
            fromProtoMsg(message: _36.TransactionProtoMsg): _36.Transaction;
            toProto(message: _36.Transaction): Uint8Array;
            toProtoMsg(message: _36.Transaction): _36.TransactionProtoMsg;
        };
        QueryLastRemoteHeight: {
            typeUrl: string;
            encode(message: _36.QueryLastRemoteHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryLastRemoteHeight;
            fromPartial(object: Partial<_36.QueryLastRemoteHeight>): _36.QueryLastRemoteHeight;
            fromAmino(object: _36.QueryLastRemoteHeightAmino): _36.QueryLastRemoteHeight;
            toAmino(message: _36.QueryLastRemoteHeight): _36.QueryLastRemoteHeightAmino;
            fromAminoMsg(object: _36.QueryLastRemoteHeightAminoMsg): _36.QueryLastRemoteHeight;
            fromProtoMsg(message: _36.QueryLastRemoteHeightProtoMsg): _36.QueryLastRemoteHeight;
            toProto(message: _36.QueryLastRemoteHeight): Uint8Array;
            toProtoMsg(message: _36.QueryLastRemoteHeight): _36.QueryLastRemoteHeightProtoMsg;
        };
        QueryLastRemoteHeightResponse: {
            typeUrl: string;
            encode(message: _36.QueryLastRemoteHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.QueryLastRemoteHeightResponse;
            fromPartial(object: Partial<_36.QueryLastRemoteHeightResponse>): _36.QueryLastRemoteHeightResponse;
            fromAmino(object: _36.QueryLastRemoteHeightResponseAmino): _36.QueryLastRemoteHeightResponse;
            toAmino(message: _36.QueryLastRemoteHeightResponse): _36.QueryLastRemoteHeightResponseAmino;
            fromAminoMsg(object: _36.QueryLastRemoteHeightResponseAminoMsg): _36.QueryLastRemoteHeightResponse;
            fromProtoMsg(message: _36.QueryLastRemoteHeightResponseProtoMsg): _36.QueryLastRemoteHeightResponse;
            toProto(message: _36.QueryLastRemoteHeightResponse): Uint8Array;
            toProtoMsg(message: _36.QueryLastRemoteHeightResponse): _36.QueryLastRemoteHeightResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _35.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _35.Params;
            fromPartial(object: Partial<_35.Params>): _35.Params;
            fromAmino(object: _35.ParamsAmino): _35.Params;
            toAmino(message: _35.Params): _35.ParamsAmino;
            fromAminoMsg(object: _35.ParamsAminoMsg): _35.Params;
            fromProtoMsg(message: _35.ParamsProtoMsg): _35.Params;
            toProto(message: _35.Params): Uint8Array;
            toProtoMsg(message: _35.Params): _35.ParamsProtoMsg;
        };
        RegisteredQuery: {
            typeUrl: string;
            encode(message: _34.RegisteredQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _34.RegisteredQuery;
            fromPartial(object: Partial<_34.RegisteredQuery>): _34.RegisteredQuery;
            fromAmino(object: _34.RegisteredQueryAmino): _34.RegisteredQuery;
            toAmino(message: _34.RegisteredQuery): _34.RegisteredQueryAmino;
            fromAminoMsg(object: _34.RegisteredQueryAminoMsg): _34.RegisteredQuery;
            fromProtoMsg(message: _34.RegisteredQueryProtoMsg): _34.RegisteredQuery;
            toProto(message: _34.RegisteredQuery): Uint8Array;
            toProtoMsg(message: _34.RegisteredQuery): _34.RegisteredQueryProtoMsg;
        };
        KVKey: {
            typeUrl: string;
            encode(message: _34.KVKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _34.KVKey;
            fromPartial(object: Partial<_34.KVKey>): _34.KVKey;
            fromAmino(object: _34.KVKeyAmino): _34.KVKey;
            toAmino(message: _34.KVKey): _34.KVKeyAmino;
            fromAminoMsg(object: _34.KVKeyAminoMsg): _34.KVKey;
            fromProtoMsg(message: _34.KVKeyProtoMsg): _34.KVKey;
            toProto(message: _34.KVKey): Uint8Array;
            toProtoMsg(message: _34.KVKey): _34.KVKeyProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _34.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _34.GenesisState;
            fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            fromAmino(object: _34.GenesisStateAmino): _34.GenesisState;
            toAmino(message: _34.GenesisState): _34.GenesisStateAmino;
            fromAminoMsg(object: _34.GenesisStateAminoMsg): _34.GenesisState;
            fromProtoMsg(message: _34.GenesisStateProtoMsg): _34.GenesisState;
            toProto(message: _34.GenesisState): Uint8Array;
            toProtoMsg(message: _34.GenesisState): _34.GenesisStateProtoMsg;
        };
    };
    namespace interchaintxs {
        const v1: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                interchainAccountAddress(request: _40.QueryInterchainAccountAddressRequest): Promise<_40.QueryInterchainAccountAddressResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerInterchainAccount(value: _41.MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _41.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerInterchainAccount(value: _41.MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: _41.MsgRegisterInterchainAccount;
                    };
                    submitTx(value: _41.MsgSubmitTx): {
                        typeUrl: string;
                        value: _41.MsgSubmitTx;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    registerInterchainAccount(value: any): {
                        typeUrl: string;
                        value: _41.MsgRegisterInterchainAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _41.MsgSubmitTx;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerInterchainAccount(value: _41.MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: _41.MsgRegisterInterchainAccount;
                    };
                    submitTx(value: _41.MsgSubmitTx): {
                        typeUrl: string;
                        value: _41.MsgSubmitTx;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
                    aminoType: string;
                    toAmino: (message: _41.MsgRegisterInterchainAccount) => _41.MsgRegisterInterchainAccountAmino;
                    fromAmino: (object: _41.MsgRegisterInterchainAccountAmino) => _41.MsgRegisterInterchainAccount;
                };
                "/neutron.interchaintxs.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: _41.MsgSubmitTx) => _41.MsgSubmitTxAmino;
                    fromAmino: (object: _41.MsgSubmitTxAmino) => _41.MsgSubmitTx;
                };
                "/neutron.interchaintxs.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _41.MsgUpdateParams) => _41.MsgUpdateParamsAmino;
                    fromAmino: (object: _41.MsgUpdateParamsAmino) => _41.MsgUpdateParams;
                };
            };
            MsgRegisterInterchainAccount: {
                typeUrl: string;
                encode(message: _41.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgRegisterInterchainAccount;
                fromPartial(object: Partial<_41.MsgRegisterInterchainAccount>): _41.MsgRegisterInterchainAccount;
                fromAmino(object: _41.MsgRegisterInterchainAccountAmino): _41.MsgRegisterInterchainAccount;
                toAmino(message: _41.MsgRegisterInterchainAccount): _41.MsgRegisterInterchainAccountAmino;
                fromAminoMsg(object: _41.MsgRegisterInterchainAccountAminoMsg): _41.MsgRegisterInterchainAccount;
                fromProtoMsg(message: _41.MsgRegisterInterchainAccountProtoMsg): _41.MsgRegisterInterchainAccount;
                toProto(message: _41.MsgRegisterInterchainAccount): Uint8Array;
                toProtoMsg(message: _41.MsgRegisterInterchainAccount): _41.MsgRegisterInterchainAccountProtoMsg;
            };
            MsgRegisterInterchainAccountResponse: {
                typeUrl: string;
                encode(_: _41.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgRegisterInterchainAccountResponse;
                fromPartial(_: Partial<_41.MsgRegisterInterchainAccountResponse>): _41.MsgRegisterInterchainAccountResponse;
                fromAmino(_: _41.MsgRegisterInterchainAccountResponseAmino): _41.MsgRegisterInterchainAccountResponse;
                toAmino(_: _41.MsgRegisterInterchainAccountResponse): _41.MsgRegisterInterchainAccountResponseAmino;
                fromAminoMsg(object: _41.MsgRegisterInterchainAccountResponseAminoMsg): _41.MsgRegisterInterchainAccountResponse;
                fromProtoMsg(message: _41.MsgRegisterInterchainAccountResponseProtoMsg): _41.MsgRegisterInterchainAccountResponse;
                toProto(message: _41.MsgRegisterInterchainAccountResponse): Uint8Array;
                toProtoMsg(message: _41.MsgRegisterInterchainAccountResponse): _41.MsgRegisterInterchainAccountResponseProtoMsg;
            };
            MsgSubmitTx: {
                typeUrl: string;
                encode(message: _41.MsgSubmitTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgSubmitTx;
                fromPartial(object: Partial<_41.MsgSubmitTx>): _41.MsgSubmitTx;
                fromAmino(object: _41.MsgSubmitTxAmino): _41.MsgSubmitTx;
                toAmino(message: _41.MsgSubmitTx): _41.MsgSubmitTxAmino;
                fromAminoMsg(object: _41.MsgSubmitTxAminoMsg): _41.MsgSubmitTx;
                fromProtoMsg(message: _41.MsgSubmitTxProtoMsg): _41.MsgSubmitTx;
                toProto(message: _41.MsgSubmitTx): Uint8Array;
                toProtoMsg(message: _41.MsgSubmitTx): _41.MsgSubmitTxProtoMsg;
            };
            MsgSubmitTxResponse: {
                typeUrl: string;
                encode(message: _41.MsgSubmitTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgSubmitTxResponse;
                fromPartial(object: Partial<_41.MsgSubmitTxResponse>): _41.MsgSubmitTxResponse;
                fromAmino(object: _41.MsgSubmitTxResponseAmino): _41.MsgSubmitTxResponse;
                toAmino(message: _41.MsgSubmitTxResponse): _41.MsgSubmitTxResponseAmino;
                fromAminoMsg(object: _41.MsgSubmitTxResponseAminoMsg): _41.MsgSubmitTxResponse;
                fromProtoMsg(message: _41.MsgSubmitTxResponseProtoMsg): _41.MsgSubmitTxResponse;
                toProto(message: _41.MsgSubmitTxResponse): Uint8Array;
                toProtoMsg(message: _41.MsgSubmitTxResponse): _41.MsgSubmitTxResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _41.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgUpdateParams;
                fromPartial(object: Partial<_41.MsgUpdateParams>): _41.MsgUpdateParams;
                fromAmino(object: _41.MsgUpdateParamsAmino): _41.MsgUpdateParams;
                toAmino(message: _41.MsgUpdateParams): _41.MsgUpdateParamsAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsAminoMsg): _41.MsgUpdateParams;
                toAminoMsg(message: _41.MsgUpdateParams): _41.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _41.MsgUpdateParamsProtoMsg): _41.MsgUpdateParams;
                toProto(message: _41.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateParams): _41.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _41.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_41.MsgUpdateParamsResponse>): _41.MsgUpdateParamsResponse;
                fromAmino(_: _41.MsgUpdateParamsResponseAmino): _41.MsgUpdateParamsResponse;
                toAmino(_: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsResponseAminoMsg): _41.MsgUpdateParamsResponse;
                fromProtoMsg(message: _41.MsgUpdateParamsResponseProtoMsg): _41.MsgUpdateParamsResponse;
                toProto(message: _41.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _40.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                fromProtoMsg(message: _40.QueryParamsRequestProtoMsg): _40.QueryParamsRequest;
                toProto(message: _40.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _40.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
                fromAmino(object: _40.QueryParamsResponseAmino): _40.QueryParamsResponse;
                toAmino(message: _40.QueryParamsResponse): _40.QueryParamsResponseAmino;
                fromAminoMsg(object: _40.QueryParamsResponseAminoMsg): _40.QueryParamsResponse;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
            QueryInterchainAccountAddressRequest: {
                typeUrl: string;
                encode(message: _40.QueryInterchainAccountAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryInterchainAccountAddressRequest;
                fromPartial(object: Partial<_40.QueryInterchainAccountAddressRequest>): _40.QueryInterchainAccountAddressRequest;
                fromAmino(object: _40.QueryInterchainAccountAddressRequestAmino): _40.QueryInterchainAccountAddressRequest;
                toAmino(message: _40.QueryInterchainAccountAddressRequest): _40.QueryInterchainAccountAddressRequestAmino;
                fromAminoMsg(object: _40.QueryInterchainAccountAddressRequestAminoMsg): _40.QueryInterchainAccountAddressRequest;
                fromProtoMsg(message: _40.QueryInterchainAccountAddressRequestProtoMsg): _40.QueryInterchainAccountAddressRequest;
                toProto(message: _40.QueryInterchainAccountAddressRequest): Uint8Array;
                toProtoMsg(message: _40.QueryInterchainAccountAddressRequest): _40.QueryInterchainAccountAddressRequestProtoMsg;
            };
            QueryInterchainAccountAddressResponse: {
                typeUrl: string;
                encode(message: _40.QueryInterchainAccountAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.QueryInterchainAccountAddressResponse;
                fromPartial(object: Partial<_40.QueryInterchainAccountAddressResponse>): _40.QueryInterchainAccountAddressResponse;
                fromAmino(object: _40.QueryInterchainAccountAddressResponseAmino): _40.QueryInterchainAccountAddressResponse;
                toAmino(message: _40.QueryInterchainAccountAddressResponse): _40.QueryInterchainAccountAddressResponseAmino;
                fromAminoMsg(object: _40.QueryInterchainAccountAddressResponseAminoMsg): _40.QueryInterchainAccountAddressResponse;
                fromProtoMsg(message: _40.QueryInterchainAccountAddressResponseProtoMsg): _40.QueryInterchainAccountAddressResponse;
                toProto(message: _40.QueryInterchainAccountAddressResponse): Uint8Array;
                toProtoMsg(message: _40.QueryInterchainAccountAddressResponse): _40.QueryInterchainAccountAddressResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _39.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.Params;
                fromPartial(object: Partial<_39.Params>): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
        };
    }
    const transfer: {
        MsgClientImpl: typeof _280.MsgClientImpl;
        QueryClientImpl: typeof _272.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<ibc.applications.transfer.v1.QueryDenomTraceResponse>;
            denomTraces(request?: ibc.applications.transfer.v1.QueryDenomTracesRequest): Promise<ibc.applications.transfer.v1.QueryDenomTracesResponse>;
            params(request?: ibc.applications.transfer.v1.QueryParamsRequest): Promise<ibc.applications.transfer.v1.QueryParamsResponse>;
            denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<ibc.applications.transfer.v1.QueryDenomHashResponse>;
        };
        LCDQueryClient: typeof _264.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                transfer(value: _43.MsgTransfer): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                transfer(value: _43.MsgTransfer): {
                    typeUrl: string;
                    value: _43.MsgTransfer;
                };
            };
            fromJSON: {
                transfer(value: any): {
                    typeUrl: string;
                    value: _43.MsgTransfer;
                };
            };
            fromPartial: {
                transfer(value: _43.MsgTransfer): {
                    typeUrl: string;
                    value: _43.MsgTransfer;
                };
            };
        };
        AminoConverter: {
            "/neutron.transfer.MsgTransfer": {
                aminoType: string;
                toAmino: (message: _43.MsgTransfer) => _43.MsgTransferAmino;
                fromAmino: (object: _43.MsgTransferAmino) => _43.MsgTransfer;
            };
        };
        MsgTransfer: {
            typeUrl: string;
            encode(message: _43.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.MsgTransfer;
            fromPartial(object: Partial<_43.MsgTransfer>): _43.MsgTransfer;
            fromAmino(object: _43.MsgTransferAmino): _43.MsgTransfer;
            toAmino(message: _43.MsgTransfer): _43.MsgTransferAmino;
            fromAminoMsg(object: _43.MsgTransferAminoMsg): _43.MsgTransfer;
            fromProtoMsg(message: _43.MsgTransferProtoMsg): _43.MsgTransfer;
            toProto(message: _43.MsgTransfer): Uint8Array;
            toProtoMsg(message: _43.MsgTransfer): _43.MsgTransferProtoMsg;
        };
        MsgTransferResponse: {
            typeUrl: string;
            encode(message: _43.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.MsgTransferResponse;
            fromPartial(object: Partial<_43.MsgTransferResponse>): _43.MsgTransferResponse;
            fromAmino(object: _43.MsgTransferResponseAmino): _43.MsgTransferResponse;
            toAmino(message: _43.MsgTransferResponse): _43.MsgTransferResponseAmino;
            fromAminoMsg(object: _43.MsgTransferResponseAminoMsg): _43.MsgTransferResponse;
            fromProtoMsg(message: _43.MsgTransferResponseProtoMsg): _43.MsgTransferResponse;
            toProto(message: _43.MsgTransferResponse): Uint8Array;
            toProtoMsg(message: _43.MsgTransferResponse): _43.MsgTransferResponseProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            neutron: {
                contractmanager: _273.MsgClientImpl;
                cron: _274.MsgClientImpl;
                dex: _275.MsgClientImpl;
                feeburner: _276.MsgClientImpl;
                feerefunder: _277.MsgClientImpl;
                interchainqueries: _278.MsgClientImpl;
                interchaintxs: {
                    v1: _279.MsgClientImpl;
                };
                transfer: _280.MsgClientImpl;
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
            neutron: {
                contractmanager: {
                    params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    addressFailure(request: _3.QueryFailuresRequest): Promise<_3.QueryFailuresResponse>;
                    addressFailures(request: _3.QueryFailuresRequest): Promise<_3.QueryFailuresResponse>;
                    failures(request: _3.QueryFailuresRequest): Promise<_3.QueryFailuresResponse>;
                };
                cron: {
                    params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                    schedule(request: _7.QueryGetScheduleRequest): Promise<_7.QueryGetScheduleResponse>;
                    schedules(request?: _7.QuerySchedulesRequest): Promise<_7.QuerySchedulesResponse>;
                };
                dex: {
                    params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                    limitOrderTrancheUser(request: _20.QueryGetLimitOrderTrancheUserRequest): Promise<_20.QueryGetLimitOrderTrancheUserResponse>;
                    limitOrderTrancheUserAll(request?: _20.QueryAllLimitOrderTrancheUserRequest): Promise<_20.QueryAllLimitOrderTrancheUserResponse>;
                    limitOrderTrancheUserAllByAddress(request: _20.QueryAllUserLimitOrdersRequest): Promise<_20.QueryAllUserLimitOrdersResponse>;
                    limitOrderTranche(request: _20.QueryGetLimitOrderTrancheRequest): Promise<_20.QueryGetLimitOrderTrancheResponse>;
                    limitOrderTrancheAll(request: _20.QueryAllLimitOrderTrancheRequest): Promise<_20.QueryAllLimitOrderTrancheResponse>;
                    userDepositsAll(request: _20.QueryAllUserDepositsRequest): Promise<_20.QueryAllUserDepositsResponse>;
                    tickLiquidityAll(request: _20.QueryAllTickLiquidityRequest): Promise<_20.QueryAllTickLiquidityResponse>;
                    inactiveLimitOrderTranche(request: _20.QueryGetInactiveLimitOrderTrancheRequest): Promise<_20.QueryGetInactiveLimitOrderTrancheResponse>;
                    inactiveLimitOrderTrancheAll(request?: _20.QueryAllInactiveLimitOrderTrancheRequest): Promise<_20.QueryAllInactiveLimitOrderTrancheResponse>;
                    poolReservesAll(request: _20.QueryAllPoolReservesRequest): Promise<_20.QueryAllPoolReservesResponse>;
                    poolReserves(request: _20.QueryGetPoolReservesRequest): Promise<_20.QueryGetPoolReservesResponse>;
                    estimateMultiHopSwap(request: _20.QueryEstimateMultiHopSwapRequest): Promise<_20.QueryEstimateMultiHopSwapResponse>;
                    estimatePlaceLimitOrder(request: _20.QueryEstimatePlaceLimitOrderRequest): Promise<_20.QueryEstimatePlaceLimitOrderResponse>;
                    pool(request: _20.QueryPoolRequest): Promise<_20.QueryPoolResponse>;
                    poolByID(request: _20.QueryPoolByIDRequest): Promise<_20.QueryPoolResponse>;
                    poolMetadata(request: _20.QueryGetPoolMetadataRequest): Promise<_20.QueryGetPoolMetadataResponse>;
                    poolMetadataAll(request?: _20.QueryAllPoolMetadataRequest): Promise<_20.QueryAllPoolMetadataResponse>;
                };
                feeburner: {
                    params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                    totalBurnedNeutronsAmount(request?: _26.QueryTotalBurnedNeutronsAmountRequest): Promise<_26.QueryTotalBurnedNeutronsAmountResponse>;
                };
                feerefunder: {
                    params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                    feeInfo(request: _32.FeeInfoRequest): Promise<_32.FeeInfoResponse>;
                };
                interchainqueries: {
                    params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                    registeredQueries(request: _36.QueryRegisteredQueriesRequest): Promise<_36.QueryRegisteredQueriesResponse>;
                    registeredQuery(request: _36.QueryRegisteredQueryRequest): Promise<_36.QueryRegisteredQueryResponse>;
                    queryResult(request: _36.QueryRegisteredQueryResultRequest): Promise<_36.QueryRegisteredQueryResultResponse>;
                    lastRemoteHeight(request: _36.QueryLastRemoteHeight): Promise<_36.QueryLastRemoteHeightResponse>;
                };
                interchaintxs: {
                    v1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        interchainAccountAddress(request: _40.QueryInterchainAccountAddressRequest): Promise<_40.QueryInterchainAccountAddressResponse>;
                    };
                };
                transfer: {
                    denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<ibc.applications.transfer.v1.QueryDenomTraceResponse>;
                    denomTraces(request?: ibc.applications.transfer.v1.QueryDenomTracesRequest): Promise<ibc.applications.transfer.v1.QueryDenomTracesResponse>;
                    params(request?: ibc.applications.transfer.v1.QueryParamsRequest): Promise<ibc.applications.transfer.v1.QueryParamsResponse>;
                    denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<ibc.applications.transfer.v1.QueryDenomHashResponse>;
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
            neutron: {
                contractmanager: _257.LCDQueryClient;
                cron: _258.LCDQueryClient;
                dex: _259.LCDQueryClient;
                feeburner: _260.LCDQueryClient;
                feerefunder: _261.LCDQueryClient;
                interchainqueries: _262.LCDQueryClient;
                interchaintxs: {
                    v1: _263.LCDQueryClient;
                };
                transfer: _264.LCDQueryClient;
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
