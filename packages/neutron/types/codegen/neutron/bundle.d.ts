import * as _0 from "../contractmanager/genesis";
import * as _1 from "../contractmanager/params";
import * as _2 from "../contractmanager/query";
import * as _3 from "../cron/genesis";
import * as _4 from "../cron/params";
import * as _5 from "../cron/query";
import * as _6 from "../cron/schedule";
import * as _8 from "../feeburner/genesis";
import * as _9 from "../feeburner/params";
import * as _10 from "../feeburner/query";
import * as _11 from "../feeburner/total_burned_neutrons_amount";
import * as _12 from "../feerefunder/fee";
import * as _13 from "../feerefunder/genesis";
import * as _14 from "../feerefunder/params";
import * as _15 from "../feerefunder/query";
import * as _16 from "../interchainqueries/genesis";
import * as _17 from "../interchainqueries/params";
import * as _18 from "../interchainqueries/query";
import * as _19 from "../interchainqueries/tx";
import * as _20 from "../interchaintxs/v1/genesis";
import * as _21 from "../interchaintxs/v1/params";
import * as _22 from "../interchaintxs/v1/query";
import * as _24 from "../transfer/v1/tx";
import * as _176 from "../contractmanager/query.lcd";
import * as _177 from "../cron/query.lcd";
import * as _178 from "../feeburner/query.lcd";
import * as _179 from "../feerefunder/query.lcd";
import * as _180 from "../interchainqueries/query.lcd";
import * as _181 from "../transfer/v1/query.lcd";
import * as _182 from "../contractmanager/query.rpc.Query";
import * as _183 from "../cron/query.rpc.Query";
import * as _184 from "../feeburner/query.rpc.Query";
import * as _185 from "../feerefunder/query.rpc.Query";
import * as _186 from "../interchainqueries/query.rpc.Query";
import * as _187 from "../interchaintxs/v1/query.rpc.Query";
import * as _188 from "../transfer/v1/query.rpc.Query";
import * as _189 from "../interchainqueries/tx.rpc.msg";
import * as _190 from "../interchaintxs/v1/tx.rpc.msg";
import * as _191 from "../transfer/v1/tx.rpc.msg";
export declare namespace neutron {
    const contractmanager: {
        QueryClientImpl: typeof _182.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
            addressFailures(request: _2.QueryFailuresRequest): Promise<_2.QueryFailuresResponse>;
            failures(request: _2.QueryFailuresRequest): Promise<_2.QueryFailuresResponse>;
        };
        LCDQueryClient: typeof _176.LCDQueryClient;
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
        QueryFailuresRequest: {
            typeUrl: string;
            encode(message: _2.QueryFailuresRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.QueryFailuresRequest;
            fromPartial(object: Partial<_2.QueryFailuresRequest>): _2.QueryFailuresRequest;
            fromAmino(object: _2.QueryFailuresRequestAmino): _2.QueryFailuresRequest;
            toAmino(message: _2.QueryFailuresRequest): _2.QueryFailuresRequestAmino;
            fromAminoMsg(object: _2.QueryFailuresRequestAminoMsg): _2.QueryFailuresRequest;
            fromProtoMsg(message: _2.QueryFailuresRequestProtoMsg): _2.QueryFailuresRequest;
            toProto(message: _2.QueryFailuresRequest): Uint8Array;
            toProtoMsg(message: _2.QueryFailuresRequest): _2.QueryFailuresRequestProtoMsg;
        };
        QueryFailuresResponse: {
            typeUrl: string;
            encode(message: _2.QueryFailuresResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _2.QueryFailuresResponse;
            fromPartial(object: Partial<_2.QueryFailuresResponse>): _2.QueryFailuresResponse;
            fromAmino(object: _2.QueryFailuresResponseAmino): _2.QueryFailuresResponse;
            toAmino(message: _2.QueryFailuresResponse): _2.QueryFailuresResponseAmino;
            fromAminoMsg(object: _2.QueryFailuresResponseAminoMsg): _2.QueryFailuresResponse;
            fromProtoMsg(message: _2.QueryFailuresResponseProtoMsg): _2.QueryFailuresResponse;
            toProto(message: _2.QueryFailuresResponse): Uint8Array;
            toProtoMsg(message: _2.QueryFailuresResponse): _2.QueryFailuresResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _1.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _1.Params;
            fromPartial(_: Partial<_1.Params>): _1.Params;
            fromAmino(_: _1.ParamsAmino): _1.Params;
            toAmino(_: _1.Params): _1.ParamsAmino;
            fromAminoMsg(object: _1.ParamsAminoMsg): _1.Params;
            fromProtoMsg(message: _1.ParamsProtoMsg): _1.Params;
            toProto(message: _1.Params): Uint8Array;
            toProtoMsg(message: _1.Params): _1.ParamsProtoMsg;
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
        GenesisState: {
            typeUrl: string;
            encode(message: _0.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _0.GenesisState;
            fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
            fromAmino(object: _0.GenesisStateAmino): _0.GenesisState;
            toAmino(message: _0.GenesisState): _0.GenesisStateAmino;
            fromAminoMsg(object: _0.GenesisStateAminoMsg): _0.GenesisState;
            fromProtoMsg(message: _0.GenesisStateProtoMsg): _0.GenesisState;
            toProto(message: _0.GenesisState): Uint8Array;
            toProtoMsg(message: _0.GenesisState): _0.GenesisStateProtoMsg;
        };
    };
    const cron: {
        QueryClientImpl: typeof _183.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
            schedule(request: _5.QueryGetScheduleRequest): Promise<_5.QueryGetScheduleResponse>;
            schedules(request?: _5.QuerySchedulesRequest): Promise<_5.QuerySchedulesResponse>;
        };
        LCDQueryClient: typeof _177.LCDQueryClient;
        Schedule: {
            typeUrl: string;
            encode(message: _6.Schedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.Schedule;
            fromPartial(object: Partial<_6.Schedule>): _6.Schedule;
            fromAmino(object: _6.ScheduleAmino): _6.Schedule;
            toAmino(message: _6.Schedule): _6.ScheduleAmino;
            fromAminoMsg(object: _6.ScheduleAminoMsg): _6.Schedule;
            fromProtoMsg(message: _6.ScheduleProtoMsg): _6.Schedule;
            toProto(message: _6.Schedule): Uint8Array;
            toProtoMsg(message: _6.Schedule): _6.ScheduleProtoMsg;
        };
        MsgExecuteContract: {
            typeUrl: string;
            encode(message: _6.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.MsgExecuteContract;
            fromPartial(object: Partial<_6.MsgExecuteContract>): _6.MsgExecuteContract;
            fromAmino(object: _6.MsgExecuteContractAmino): _6.MsgExecuteContract;
            toAmino(message: _6.MsgExecuteContract): _6.MsgExecuteContractAmino;
            fromAminoMsg(object: _6.MsgExecuteContractAminoMsg): _6.MsgExecuteContract;
            fromProtoMsg(message: _6.MsgExecuteContractProtoMsg): _6.MsgExecuteContract;
            toProto(message: _6.MsgExecuteContract): Uint8Array;
            toProtoMsg(message: _6.MsgExecuteContract): _6.MsgExecuteContractProtoMsg;
        };
        ScheduleCount: {
            typeUrl: string;
            encode(message: _6.ScheduleCount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.ScheduleCount;
            fromPartial(object: Partial<_6.ScheduleCount>): _6.ScheduleCount;
            fromAmino(object: _6.ScheduleCountAmino): _6.ScheduleCount;
            toAmino(message: _6.ScheduleCount): _6.ScheduleCountAmino;
            fromAminoMsg(object: _6.ScheduleCountAminoMsg): _6.ScheduleCount;
            fromProtoMsg(message: _6.ScheduleCountProtoMsg): _6.ScheduleCount;
            toProto(message: _6.ScheduleCount): Uint8Array;
            toProtoMsg(message: _6.ScheduleCount): _6.ScheduleCountProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _5.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _5.QueryParamsRequest;
            fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
            fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
            toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
            fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
            fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
            toProto(message: _5.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _5.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.QueryParamsResponse;
            fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
            fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
            toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
            fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
            fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
            toProto(message: _5.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
        };
        QueryGetScheduleRequest: {
            typeUrl: string;
            encode(message: _5.QueryGetScheduleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.QueryGetScheduleRequest;
            fromPartial(object: Partial<_5.QueryGetScheduleRequest>): _5.QueryGetScheduleRequest;
            fromAmino(object: _5.QueryGetScheduleRequestAmino): _5.QueryGetScheduleRequest;
            toAmino(message: _5.QueryGetScheduleRequest): _5.QueryGetScheduleRequestAmino;
            fromAminoMsg(object: _5.QueryGetScheduleRequestAminoMsg): _5.QueryGetScheduleRequest;
            fromProtoMsg(message: _5.QueryGetScheduleRequestProtoMsg): _5.QueryGetScheduleRequest;
            toProto(message: _5.QueryGetScheduleRequest): Uint8Array;
            toProtoMsg(message: _5.QueryGetScheduleRequest): _5.QueryGetScheduleRequestProtoMsg;
        };
        QueryGetScheduleResponse: {
            typeUrl: string;
            encode(message: _5.QueryGetScheduleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.QueryGetScheduleResponse;
            fromPartial(object: Partial<_5.QueryGetScheduleResponse>): _5.QueryGetScheduleResponse;
            fromAmino(object: _5.QueryGetScheduleResponseAmino): _5.QueryGetScheduleResponse;
            toAmino(message: _5.QueryGetScheduleResponse): _5.QueryGetScheduleResponseAmino;
            fromAminoMsg(object: _5.QueryGetScheduleResponseAminoMsg): _5.QueryGetScheduleResponse;
            fromProtoMsg(message: _5.QueryGetScheduleResponseProtoMsg): _5.QueryGetScheduleResponse;
            toProto(message: _5.QueryGetScheduleResponse): Uint8Array;
            toProtoMsg(message: _5.QueryGetScheduleResponse): _5.QueryGetScheduleResponseProtoMsg;
        };
        QuerySchedulesRequest: {
            typeUrl: string;
            encode(message: _5.QuerySchedulesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.QuerySchedulesRequest;
            fromPartial(object: Partial<_5.QuerySchedulesRequest>): _5.QuerySchedulesRequest;
            fromAmino(object: _5.QuerySchedulesRequestAmino): _5.QuerySchedulesRequest;
            toAmino(message: _5.QuerySchedulesRequest): _5.QuerySchedulesRequestAmino;
            fromAminoMsg(object: _5.QuerySchedulesRequestAminoMsg): _5.QuerySchedulesRequest;
            fromProtoMsg(message: _5.QuerySchedulesRequestProtoMsg): _5.QuerySchedulesRequest;
            toProto(message: _5.QuerySchedulesRequest): Uint8Array;
            toProtoMsg(message: _5.QuerySchedulesRequest): _5.QuerySchedulesRequestProtoMsg;
        };
        QuerySchedulesResponse: {
            typeUrl: string;
            encode(message: _5.QuerySchedulesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.QuerySchedulesResponse;
            fromPartial(object: Partial<_5.QuerySchedulesResponse>): _5.QuerySchedulesResponse;
            fromAmino(object: _5.QuerySchedulesResponseAmino): _5.QuerySchedulesResponse;
            toAmino(message: _5.QuerySchedulesResponse): _5.QuerySchedulesResponseAmino;
            fromAminoMsg(object: _5.QuerySchedulesResponseAminoMsg): _5.QuerySchedulesResponse;
            fromProtoMsg(message: _5.QuerySchedulesResponseProtoMsg): _5.QuerySchedulesResponse;
            toProto(message: _5.QuerySchedulesResponse): Uint8Array;
            toProtoMsg(message: _5.QuerySchedulesResponse): _5.QuerySchedulesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _4.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _4.Params;
            fromPartial(object: Partial<_4.Params>): _4.Params;
            fromAmino(object: _4.ParamsAmino): _4.Params;
            toAmino(message: _4.Params): _4.ParamsAmino;
            fromAminoMsg(object: _4.ParamsAminoMsg): _4.Params;
            fromProtoMsg(message: _4.ParamsProtoMsg): _4.Params;
            toProto(message: _4.Params): Uint8Array;
            toProtoMsg(message: _4.Params): _4.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _3.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.GenesisState;
            fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
            fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
            toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
            fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
            fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
            toProto(message: _3.GenesisState): Uint8Array;
            toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
        };
    };
    const feeburner: {
        QueryClientImpl: typeof _184.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
            totalBurnedNeutronsAmount(request?: _10.QueryTotalBurnedNeutronsAmountRequest): Promise<_10.QueryTotalBurnedNeutronsAmountResponse>;
        };
        LCDQueryClient: typeof _178.LCDQueryClient;
        TotalBurnedNeutronsAmount: {
            typeUrl: string;
            encode(message: _11.TotalBurnedNeutronsAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _11.TotalBurnedNeutronsAmount;
            fromPartial(object: Partial<_11.TotalBurnedNeutronsAmount>): _11.TotalBurnedNeutronsAmount;
            fromAmino(object: _11.TotalBurnedNeutronsAmountAmino): _11.TotalBurnedNeutronsAmount;
            toAmino(message: _11.TotalBurnedNeutronsAmount): _11.TotalBurnedNeutronsAmountAmino;
            fromAminoMsg(object: _11.TotalBurnedNeutronsAmountAminoMsg): _11.TotalBurnedNeutronsAmount;
            fromProtoMsg(message: _11.TotalBurnedNeutronsAmountProtoMsg): _11.TotalBurnedNeutronsAmount;
            toProto(message: _11.TotalBurnedNeutronsAmount): Uint8Array;
            toProtoMsg(message: _11.TotalBurnedNeutronsAmount): _11.TotalBurnedNeutronsAmountProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _10.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _10.QueryParamsRequest;
            fromPartial(_: Partial<_10.QueryParamsRequest>): _10.QueryParamsRequest;
            fromAmino(_: _10.QueryParamsRequestAmino): _10.QueryParamsRequest;
            toAmino(_: _10.QueryParamsRequest): _10.QueryParamsRequestAmino;
            fromAminoMsg(object: _10.QueryParamsRequestAminoMsg): _10.QueryParamsRequest;
            fromProtoMsg(message: _10.QueryParamsRequestProtoMsg): _10.QueryParamsRequest;
            toProto(message: _10.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _10.QueryParamsRequest): _10.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _10.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.QueryParamsResponse;
            fromPartial(object: Partial<_10.QueryParamsResponse>): _10.QueryParamsResponse;
            fromAmino(object: _10.QueryParamsResponseAmino): _10.QueryParamsResponse;
            toAmino(message: _10.QueryParamsResponse): _10.QueryParamsResponseAmino;
            fromAminoMsg(object: _10.QueryParamsResponseAminoMsg): _10.QueryParamsResponse;
            fromProtoMsg(message: _10.QueryParamsResponseProtoMsg): _10.QueryParamsResponse;
            toProto(message: _10.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _10.QueryParamsResponse): _10.QueryParamsResponseProtoMsg;
        };
        QueryTotalBurnedNeutronsAmountRequest: {
            typeUrl: string;
            encode(_: _10.QueryTotalBurnedNeutronsAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _10.QueryTotalBurnedNeutronsAmountRequest;
            fromPartial(_: Partial<_10.QueryTotalBurnedNeutronsAmountRequest>): _10.QueryTotalBurnedNeutronsAmountRequest;
            fromAmino(_: _10.QueryTotalBurnedNeutronsAmountRequestAmino): _10.QueryTotalBurnedNeutronsAmountRequest;
            toAmino(_: _10.QueryTotalBurnedNeutronsAmountRequest): _10.QueryTotalBurnedNeutronsAmountRequestAmino;
            fromAminoMsg(object: _10.QueryTotalBurnedNeutronsAmountRequestAminoMsg): _10.QueryTotalBurnedNeutronsAmountRequest;
            fromProtoMsg(message: _10.QueryTotalBurnedNeutronsAmountRequestProtoMsg): _10.QueryTotalBurnedNeutronsAmountRequest;
            toProto(message: _10.QueryTotalBurnedNeutronsAmountRequest): Uint8Array;
            toProtoMsg(message: _10.QueryTotalBurnedNeutronsAmountRequest): _10.QueryTotalBurnedNeutronsAmountRequestProtoMsg;
        };
        QueryTotalBurnedNeutronsAmountResponse: {
            typeUrl: string;
            encode(message: _10.QueryTotalBurnedNeutronsAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.QueryTotalBurnedNeutronsAmountResponse;
            fromPartial(object: Partial<_10.QueryTotalBurnedNeutronsAmountResponse>): _10.QueryTotalBurnedNeutronsAmountResponse;
            fromAmino(object: _10.QueryTotalBurnedNeutronsAmountResponseAmino): _10.QueryTotalBurnedNeutronsAmountResponse;
            toAmino(message: _10.QueryTotalBurnedNeutronsAmountResponse): _10.QueryTotalBurnedNeutronsAmountResponseAmino;
            fromAminoMsg(object: _10.QueryTotalBurnedNeutronsAmountResponseAminoMsg): _10.QueryTotalBurnedNeutronsAmountResponse;
            fromProtoMsg(message: _10.QueryTotalBurnedNeutronsAmountResponseProtoMsg): _10.QueryTotalBurnedNeutronsAmountResponse;
            toProto(message: _10.QueryTotalBurnedNeutronsAmountResponse): Uint8Array;
            toProtoMsg(message: _10.QueryTotalBurnedNeutronsAmountResponse): _10.QueryTotalBurnedNeutronsAmountResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.Params;
            fromPartial(object: Partial<_9.Params>): _9.Params;
            fromAmino(object: _9.ParamsAmino): _9.Params;
            toAmino(message: _9.Params): _9.ParamsAmino;
            fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
            fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
            toProto(message: _9.Params): Uint8Array;
            toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.GenesisState;
            fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
            fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
            toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
            fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
            fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
            toProto(message: _8.GenesisState): Uint8Array;
            toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
        };
    };
    const feerefunder: {
        QueryClientImpl: typeof _185.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
            feeInfo(request: _15.FeeInfoRequest): Promise<_15.FeeInfoResponse>;
        };
        LCDQueryClient: typeof _179.LCDQueryClient;
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _15.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _15.QueryParamsRequest;
            fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
            fromAmino(_: _15.QueryParamsRequestAmino): _15.QueryParamsRequest;
            toAmino(_: _15.QueryParamsRequest): _15.QueryParamsRequestAmino;
            fromAminoMsg(object: _15.QueryParamsRequestAminoMsg): _15.QueryParamsRequest;
            fromProtoMsg(message: _15.QueryParamsRequestProtoMsg): _15.QueryParamsRequest;
            toProto(message: _15.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _15.QueryParamsRequest): _15.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _15.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.QueryParamsResponse;
            fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
            fromAmino(object: _15.QueryParamsResponseAmino): _15.QueryParamsResponse;
            toAmino(message: _15.QueryParamsResponse): _15.QueryParamsResponseAmino;
            fromAminoMsg(object: _15.QueryParamsResponseAminoMsg): _15.QueryParamsResponse;
            fromProtoMsg(message: _15.QueryParamsResponseProtoMsg): _15.QueryParamsResponse;
            toProto(message: _15.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _15.QueryParamsResponse): _15.QueryParamsResponseProtoMsg;
        };
        FeeInfoRequest: {
            typeUrl: string;
            encode(message: _15.FeeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.FeeInfoRequest;
            fromPartial(object: Partial<_15.FeeInfoRequest>): _15.FeeInfoRequest;
            fromAmino(object: _15.FeeInfoRequestAmino): _15.FeeInfoRequest;
            toAmino(message: _15.FeeInfoRequest): _15.FeeInfoRequestAmino;
            fromAminoMsg(object: _15.FeeInfoRequestAminoMsg): _15.FeeInfoRequest;
            fromProtoMsg(message: _15.FeeInfoRequestProtoMsg): _15.FeeInfoRequest;
            toProto(message: _15.FeeInfoRequest): Uint8Array;
            toProtoMsg(message: _15.FeeInfoRequest): _15.FeeInfoRequestProtoMsg;
        };
        FeeInfoResponse: {
            typeUrl: string;
            encode(message: _15.FeeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _15.FeeInfoResponse;
            fromPartial(object: Partial<_15.FeeInfoResponse>): _15.FeeInfoResponse;
            fromAmino(object: _15.FeeInfoResponseAmino): _15.FeeInfoResponse;
            toAmino(message: _15.FeeInfoResponse): _15.FeeInfoResponseAmino;
            fromAminoMsg(object: _15.FeeInfoResponseAminoMsg): _15.FeeInfoResponse;
            fromProtoMsg(message: _15.FeeInfoResponseProtoMsg): _15.FeeInfoResponse;
            toProto(message: _15.FeeInfoResponse): Uint8Array;
            toProtoMsg(message: _15.FeeInfoResponse): _15.FeeInfoResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _14.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.Params;
            fromPartial(object: Partial<_14.Params>): _14.Params;
            fromAmino(object: _14.ParamsAmino): _14.Params;
            toAmino(message: _14.Params): _14.ParamsAmino;
            fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
            fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
            toProto(message: _14.Params): Uint8Array;
            toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.GenesisState;
            fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
            fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
            toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
            fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
            fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
            toProto(message: _13.GenesisState): Uint8Array;
            toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
        };
        FeeInfo: {
            typeUrl: string;
            encode(message: _13.FeeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _13.FeeInfo;
            fromPartial(object: Partial<_13.FeeInfo>): _13.FeeInfo;
            fromAmino(object: _13.FeeInfoAmino): _13.FeeInfo;
            toAmino(message: _13.FeeInfo): _13.FeeInfoAmino;
            fromAminoMsg(object: _13.FeeInfoAminoMsg): _13.FeeInfo;
            fromProtoMsg(message: _13.FeeInfoProtoMsg): _13.FeeInfo;
            toProto(message: _13.FeeInfo): Uint8Array;
            toProtoMsg(message: _13.FeeInfo): _13.FeeInfoProtoMsg;
        };
        Fee: {
            typeUrl: string;
            encode(message: _12.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.Fee;
            fromPartial(object: Partial<_12.Fee>): _12.Fee;
            fromAmino(object: _12.FeeAmino): _12.Fee;
            toAmino(message: _12.Fee): _12.FeeAmino;
            fromAminoMsg(object: _12.FeeAminoMsg): _12.Fee;
            fromProtoMsg(message: _12.FeeProtoMsg): _12.Fee;
            toProto(message: _12.Fee): Uint8Array;
            toProtoMsg(message: _12.Fee): _12.FeeProtoMsg;
        };
        PacketID: {
            typeUrl: string;
            encode(message: _12.PacketID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.PacketID;
            fromPartial(object: Partial<_12.PacketID>): _12.PacketID;
            fromAmino(object: _12.PacketIDAmino): _12.PacketID;
            toAmino(message: _12.PacketID): _12.PacketIDAmino;
            fromAminoMsg(object: _12.PacketIDAminoMsg): _12.PacketID;
            fromProtoMsg(message: _12.PacketIDProtoMsg): _12.PacketID;
            toProto(message: _12.PacketID): Uint8Array;
            toProtoMsg(message: _12.PacketID): _12.PacketIDProtoMsg;
        };
    };
    const interchainqueries: {
        MsgClientImpl: typeof _189.MsgClientImpl;
        QueryClientImpl: typeof _186.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
            registeredQueries(request: _18.QueryRegisteredQueriesRequest): Promise<_18.QueryRegisteredQueriesResponse>;
            registeredQuery(request: _18.QueryRegisteredQueryRequest): Promise<_18.QueryRegisteredQueryResponse>;
            queryResult(request: _18.QueryRegisteredQueryResultRequest): Promise<_18.QueryRegisteredQueryResultResponse>;
            lastRemoteHeight(request: _18.QueryLastRemoteHeight): Promise<_18.QueryLastRemoteHeightResponse>;
        };
        LCDQueryClient: typeof _180.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerInterchainQuery(value: _19.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitQueryResult(value: _19.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeInterchainQuery(value: _19.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInterchainQuery(value: _19.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerInterchainQuery(value: _19.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: _19.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: _19.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: _19.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: _19.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: _19.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: _19.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: _19.MsgUpdateInterchainQueryRequest;
                };
            };
            fromJSON: {
                registerInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _19.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: any): {
                    typeUrl: string;
                    value: _19.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _19.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: any): {
                    typeUrl: string;
                    value: _19.MsgUpdateInterchainQueryRequest;
                };
            };
            fromPartial: {
                registerInterchainQuery(value: _19.MsgRegisterInterchainQuery): {
                    typeUrl: string;
                    value: _19.MsgRegisterInterchainQuery;
                };
                submitQueryResult(value: _19.MsgSubmitQueryResult): {
                    typeUrl: string;
                    value: _19.MsgSubmitQueryResult;
                };
                removeInterchainQuery(value: _19.MsgRemoveInterchainQueryRequest): {
                    typeUrl: string;
                    value: _19.MsgRemoveInterchainQueryRequest;
                };
                updateInterchainQuery(value: _19.MsgUpdateInterchainQueryRequest): {
                    typeUrl: string;
                    value: _19.MsgUpdateInterchainQueryRequest;
                };
            };
        };
        AminoConverter: {
            "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
                aminoType: string;
                toAmino: (message: _19.MsgRegisterInterchainQuery) => _19.MsgRegisterInterchainQueryAmino;
                fromAmino: (object: _19.MsgRegisterInterchainQueryAmino) => _19.MsgRegisterInterchainQuery;
            };
            "/neutron.interchainqueries.MsgSubmitQueryResult": {
                aminoType: string;
                toAmino: (message: _19.MsgSubmitQueryResult) => _19.MsgSubmitQueryResultAmino;
                fromAmino: (object: _19.MsgSubmitQueryResultAmino) => _19.MsgSubmitQueryResult;
            };
            "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
                aminoType: string;
                toAmino: (message: _19.MsgRemoveInterchainQueryRequest) => _19.MsgRemoveInterchainQueryRequestAmino;
                fromAmino: (object: _19.MsgRemoveInterchainQueryRequestAmino) => _19.MsgRemoveInterchainQueryRequest;
            };
            "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
                aminoType: string;
                toAmino: (message: _19.MsgUpdateInterchainQueryRequest) => _19.MsgUpdateInterchainQueryRequestAmino;
                fromAmino: (object: _19.MsgUpdateInterchainQueryRequestAmino) => _19.MsgUpdateInterchainQueryRequest;
            };
        };
        MsgRegisterInterchainQuery: {
            typeUrl: string;
            encode(message: _19.MsgRegisterInterchainQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.MsgRegisterInterchainQuery;
            fromPartial(object: Partial<_19.MsgRegisterInterchainQuery>): _19.MsgRegisterInterchainQuery;
            fromAmino(object: _19.MsgRegisterInterchainQueryAmino): _19.MsgRegisterInterchainQuery;
            toAmino(message: _19.MsgRegisterInterchainQuery): _19.MsgRegisterInterchainQueryAmino;
            fromAminoMsg(object: _19.MsgRegisterInterchainQueryAminoMsg): _19.MsgRegisterInterchainQuery;
            fromProtoMsg(message: _19.MsgRegisterInterchainQueryProtoMsg): _19.MsgRegisterInterchainQuery;
            toProto(message: _19.MsgRegisterInterchainQuery): Uint8Array;
            toProtoMsg(message: _19.MsgRegisterInterchainQuery): _19.MsgRegisterInterchainQueryProtoMsg;
        };
        MsgRegisterInterchainQueryResponse: {
            typeUrl: string;
            encode(message: _19.MsgRegisterInterchainQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.MsgRegisterInterchainQueryResponse;
            fromPartial(object: Partial<_19.MsgRegisterInterchainQueryResponse>): _19.MsgRegisterInterchainQueryResponse;
            fromAmino(object: _19.MsgRegisterInterchainQueryResponseAmino): _19.MsgRegisterInterchainQueryResponse;
            toAmino(message: _19.MsgRegisterInterchainQueryResponse): _19.MsgRegisterInterchainQueryResponseAmino;
            fromAminoMsg(object: _19.MsgRegisterInterchainQueryResponseAminoMsg): _19.MsgRegisterInterchainQueryResponse;
            fromProtoMsg(message: _19.MsgRegisterInterchainQueryResponseProtoMsg): _19.MsgRegisterInterchainQueryResponse;
            toProto(message: _19.MsgRegisterInterchainQueryResponse): Uint8Array;
            toProtoMsg(message: _19.MsgRegisterInterchainQueryResponse): _19.MsgRegisterInterchainQueryResponseProtoMsg;
        };
        MsgSubmitQueryResult: {
            typeUrl: string;
            encode(message: _19.MsgSubmitQueryResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.MsgSubmitQueryResult;
            fromPartial(object: Partial<_19.MsgSubmitQueryResult>): _19.MsgSubmitQueryResult;
            fromAmino(object: _19.MsgSubmitQueryResultAmino): _19.MsgSubmitQueryResult;
            toAmino(message: _19.MsgSubmitQueryResult): _19.MsgSubmitQueryResultAmino;
            fromAminoMsg(object: _19.MsgSubmitQueryResultAminoMsg): _19.MsgSubmitQueryResult;
            fromProtoMsg(message: _19.MsgSubmitQueryResultProtoMsg): _19.MsgSubmitQueryResult;
            toProto(message: _19.MsgSubmitQueryResult): Uint8Array;
            toProtoMsg(message: _19.MsgSubmitQueryResult): _19.MsgSubmitQueryResultProtoMsg;
        };
        QueryResult: {
            typeUrl: string;
            encode(message: _19.QueryResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.QueryResult;
            fromPartial(object: Partial<_19.QueryResult>): _19.QueryResult;
            fromAmino(object: _19.QueryResultAmino): _19.QueryResult;
            toAmino(message: _19.QueryResult): _19.QueryResultAmino;
            fromAminoMsg(object: _19.QueryResultAminoMsg): _19.QueryResult;
            fromProtoMsg(message: _19.QueryResultProtoMsg): _19.QueryResult;
            toProto(message: _19.QueryResult): Uint8Array;
            toProtoMsg(message: _19.QueryResult): _19.QueryResultProtoMsg;
        };
        StorageValue: {
            typeUrl: string;
            encode(message: _19.StorageValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.StorageValue;
            fromPartial(object: Partial<_19.StorageValue>): _19.StorageValue;
            fromAmino(object: _19.StorageValueAmino): _19.StorageValue;
            toAmino(message: _19.StorageValue): _19.StorageValueAmino;
            fromAminoMsg(object: _19.StorageValueAminoMsg): _19.StorageValue;
            fromProtoMsg(message: _19.StorageValueProtoMsg): _19.StorageValue;
            toProto(message: _19.StorageValue): Uint8Array;
            toProtoMsg(message: _19.StorageValue): _19.StorageValueProtoMsg;
        };
        Block: {
            typeUrl: string;
            encode(message: _19.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.Block;
            fromPartial(object: Partial<_19.Block>): _19.Block;
            fromAmino(object: _19.BlockAmino): _19.Block;
            toAmino(message: _19.Block): _19.BlockAmino;
            fromAminoMsg(object: _19.BlockAminoMsg): _19.Block;
            fromProtoMsg(message: _19.BlockProtoMsg): _19.Block;
            toProto(message: _19.Block): Uint8Array;
            toProtoMsg(message: _19.Block): _19.BlockProtoMsg;
        };
        TxValue: {
            typeUrl: string;
            encode(message: _19.TxValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.TxValue;
            fromPartial(object: Partial<_19.TxValue>): _19.TxValue;
            fromAmino(object: _19.TxValueAmino): _19.TxValue;
            toAmino(message: _19.TxValue): _19.TxValueAmino;
            fromAminoMsg(object: _19.TxValueAminoMsg): _19.TxValue;
            fromProtoMsg(message: _19.TxValueProtoMsg): _19.TxValue;
            toProto(message: _19.TxValue): Uint8Array;
            toProtoMsg(message: _19.TxValue): _19.TxValueProtoMsg;
        };
        MsgSubmitQueryResultResponse: {
            typeUrl: string;
            encode(_: _19.MsgSubmitQueryResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _19.MsgSubmitQueryResultResponse;
            fromPartial(_: Partial<_19.MsgSubmitQueryResultResponse>): _19.MsgSubmitQueryResultResponse;
            fromAmino(_: _19.MsgSubmitQueryResultResponseAmino): _19.MsgSubmitQueryResultResponse;
            toAmino(_: _19.MsgSubmitQueryResultResponse): _19.MsgSubmitQueryResultResponseAmino;
            fromAminoMsg(object: _19.MsgSubmitQueryResultResponseAminoMsg): _19.MsgSubmitQueryResultResponse;
            fromProtoMsg(message: _19.MsgSubmitQueryResultResponseProtoMsg): _19.MsgSubmitQueryResultResponse;
            toProto(message: _19.MsgSubmitQueryResultResponse): Uint8Array;
            toProtoMsg(message: _19.MsgSubmitQueryResultResponse): _19.MsgSubmitQueryResultResponseProtoMsg;
        };
        MsgRemoveInterchainQueryRequest: {
            typeUrl: string;
            encode(message: _19.MsgRemoveInterchainQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.MsgRemoveInterchainQueryRequest;
            fromPartial(object: Partial<_19.MsgRemoveInterchainQueryRequest>): _19.MsgRemoveInterchainQueryRequest;
            fromAmino(object: _19.MsgRemoveInterchainQueryRequestAmino): _19.MsgRemoveInterchainQueryRequest;
            toAmino(message: _19.MsgRemoveInterchainQueryRequest): _19.MsgRemoveInterchainQueryRequestAmino;
            fromAminoMsg(object: _19.MsgRemoveInterchainQueryRequestAminoMsg): _19.MsgRemoveInterchainQueryRequest;
            fromProtoMsg(message: _19.MsgRemoveInterchainQueryRequestProtoMsg): _19.MsgRemoveInterchainQueryRequest;
            toProto(message: _19.MsgRemoveInterchainQueryRequest): Uint8Array;
            toProtoMsg(message: _19.MsgRemoveInterchainQueryRequest): _19.MsgRemoveInterchainQueryRequestProtoMsg;
        };
        MsgRemoveInterchainQueryResponse: {
            typeUrl: string;
            encode(_: _19.MsgRemoveInterchainQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _19.MsgRemoveInterchainQueryResponse;
            fromPartial(_: Partial<_19.MsgRemoveInterchainQueryResponse>): _19.MsgRemoveInterchainQueryResponse;
            fromAmino(_: _19.MsgRemoveInterchainQueryResponseAmino): _19.MsgRemoveInterchainQueryResponse;
            toAmino(_: _19.MsgRemoveInterchainQueryResponse): _19.MsgRemoveInterchainQueryResponseAmino;
            fromAminoMsg(object: _19.MsgRemoveInterchainQueryResponseAminoMsg): _19.MsgRemoveInterchainQueryResponse;
            fromProtoMsg(message: _19.MsgRemoveInterchainQueryResponseProtoMsg): _19.MsgRemoveInterchainQueryResponse;
            toProto(message: _19.MsgRemoveInterchainQueryResponse): Uint8Array;
            toProtoMsg(message: _19.MsgRemoveInterchainQueryResponse): _19.MsgRemoveInterchainQueryResponseProtoMsg;
        };
        MsgUpdateInterchainQueryRequest: {
            typeUrl: string;
            encode(message: _19.MsgUpdateInterchainQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _19.MsgUpdateInterchainQueryRequest;
            fromPartial(object: Partial<_19.MsgUpdateInterchainQueryRequest>): _19.MsgUpdateInterchainQueryRequest;
            fromAmino(object: _19.MsgUpdateInterchainQueryRequestAmino): _19.MsgUpdateInterchainQueryRequest;
            toAmino(message: _19.MsgUpdateInterchainQueryRequest): _19.MsgUpdateInterchainQueryRequestAmino;
            fromAminoMsg(object: _19.MsgUpdateInterchainQueryRequestAminoMsg): _19.MsgUpdateInterchainQueryRequest;
            fromProtoMsg(message: _19.MsgUpdateInterchainQueryRequestProtoMsg): _19.MsgUpdateInterchainQueryRequest;
            toProto(message: _19.MsgUpdateInterchainQueryRequest): Uint8Array;
            toProtoMsg(message: _19.MsgUpdateInterchainQueryRequest): _19.MsgUpdateInterchainQueryRequestProtoMsg;
        };
        MsgUpdateInterchainQueryResponse: {
            typeUrl: string;
            encode(_: _19.MsgUpdateInterchainQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _19.MsgUpdateInterchainQueryResponse;
            fromPartial(_: Partial<_19.MsgUpdateInterchainQueryResponse>): _19.MsgUpdateInterchainQueryResponse;
            fromAmino(_: _19.MsgUpdateInterchainQueryResponseAmino): _19.MsgUpdateInterchainQueryResponse;
            toAmino(_: _19.MsgUpdateInterchainQueryResponse): _19.MsgUpdateInterchainQueryResponseAmino;
            fromAminoMsg(object: _19.MsgUpdateInterchainQueryResponseAminoMsg): _19.MsgUpdateInterchainQueryResponse;
            fromProtoMsg(message: _19.MsgUpdateInterchainQueryResponseProtoMsg): _19.MsgUpdateInterchainQueryResponse;
            toProto(message: _19.MsgUpdateInterchainQueryResponse): Uint8Array;
            toProtoMsg(message: _19.MsgUpdateInterchainQueryResponse): _19.MsgUpdateInterchainQueryResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _18.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _18.QueryParamsRequest;
            fromPartial(_: Partial<_18.QueryParamsRequest>): _18.QueryParamsRequest;
            fromAmino(_: _18.QueryParamsRequestAmino): _18.QueryParamsRequest;
            toAmino(_: _18.QueryParamsRequest): _18.QueryParamsRequestAmino;
            fromAminoMsg(object: _18.QueryParamsRequestAminoMsg): _18.QueryParamsRequest;
            fromProtoMsg(message: _18.QueryParamsRequestProtoMsg): _18.QueryParamsRequest;
            toProto(message: _18.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _18.QueryParamsRequest): _18.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _18.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryParamsResponse;
            fromPartial(object: Partial<_18.QueryParamsResponse>): _18.QueryParamsResponse;
            fromAmino(object: _18.QueryParamsResponseAmino): _18.QueryParamsResponse;
            toAmino(message: _18.QueryParamsResponse): _18.QueryParamsResponseAmino;
            fromAminoMsg(object: _18.QueryParamsResponseAminoMsg): _18.QueryParamsResponse;
            fromProtoMsg(message: _18.QueryParamsResponseProtoMsg): _18.QueryParamsResponse;
            toProto(message: _18.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _18.QueryParamsResponse): _18.QueryParamsResponseProtoMsg;
        };
        QueryRegisteredQueriesRequest: {
            typeUrl: string;
            encode(message: _18.QueryRegisteredQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryRegisteredQueriesRequest;
            fromPartial(object: Partial<_18.QueryRegisteredQueriesRequest>): _18.QueryRegisteredQueriesRequest;
            fromAmino(object: _18.QueryRegisteredQueriesRequestAmino): _18.QueryRegisteredQueriesRequest;
            toAmino(message: _18.QueryRegisteredQueriesRequest): _18.QueryRegisteredQueriesRequestAmino;
            fromAminoMsg(object: _18.QueryRegisteredQueriesRequestAminoMsg): _18.QueryRegisteredQueriesRequest;
            fromProtoMsg(message: _18.QueryRegisteredQueriesRequestProtoMsg): _18.QueryRegisteredQueriesRequest;
            toProto(message: _18.QueryRegisteredQueriesRequest): Uint8Array;
            toProtoMsg(message: _18.QueryRegisteredQueriesRequest): _18.QueryRegisteredQueriesRequestProtoMsg;
        };
        QueryRegisteredQueriesResponse: {
            typeUrl: string;
            encode(message: _18.QueryRegisteredQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryRegisteredQueriesResponse;
            fromPartial(object: Partial<_18.QueryRegisteredQueriesResponse>): _18.QueryRegisteredQueriesResponse;
            fromAmino(object: _18.QueryRegisteredQueriesResponseAmino): _18.QueryRegisteredQueriesResponse;
            toAmino(message: _18.QueryRegisteredQueriesResponse): _18.QueryRegisteredQueriesResponseAmino;
            fromAminoMsg(object: _18.QueryRegisteredQueriesResponseAminoMsg): _18.QueryRegisteredQueriesResponse;
            fromProtoMsg(message: _18.QueryRegisteredQueriesResponseProtoMsg): _18.QueryRegisteredQueriesResponse;
            toProto(message: _18.QueryRegisteredQueriesResponse): Uint8Array;
            toProtoMsg(message: _18.QueryRegisteredQueriesResponse): _18.QueryRegisteredQueriesResponseProtoMsg;
        };
        QueryRegisteredQueryRequest: {
            typeUrl: string;
            encode(message: _18.QueryRegisteredQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryRegisteredQueryRequest;
            fromPartial(object: Partial<_18.QueryRegisteredQueryRequest>): _18.QueryRegisteredQueryRequest;
            fromAmino(object: _18.QueryRegisteredQueryRequestAmino): _18.QueryRegisteredQueryRequest;
            toAmino(message: _18.QueryRegisteredQueryRequest): _18.QueryRegisteredQueryRequestAmino;
            fromAminoMsg(object: _18.QueryRegisteredQueryRequestAminoMsg): _18.QueryRegisteredQueryRequest;
            fromProtoMsg(message: _18.QueryRegisteredQueryRequestProtoMsg): _18.QueryRegisteredQueryRequest;
            toProto(message: _18.QueryRegisteredQueryRequest): Uint8Array;
            toProtoMsg(message: _18.QueryRegisteredQueryRequest): _18.QueryRegisteredQueryRequestProtoMsg;
        };
        QueryRegisteredQueryResponse: {
            typeUrl: string;
            encode(message: _18.QueryRegisteredQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryRegisteredQueryResponse;
            fromPartial(object: Partial<_18.QueryRegisteredQueryResponse>): _18.QueryRegisteredQueryResponse;
            fromAmino(object: _18.QueryRegisteredQueryResponseAmino): _18.QueryRegisteredQueryResponse;
            toAmino(message: _18.QueryRegisteredQueryResponse): _18.QueryRegisteredQueryResponseAmino;
            fromAminoMsg(object: _18.QueryRegisteredQueryResponseAminoMsg): _18.QueryRegisteredQueryResponse;
            fromProtoMsg(message: _18.QueryRegisteredQueryResponseProtoMsg): _18.QueryRegisteredQueryResponse;
            toProto(message: _18.QueryRegisteredQueryResponse): Uint8Array;
            toProtoMsg(message: _18.QueryRegisteredQueryResponse): _18.QueryRegisteredQueryResponseProtoMsg;
        };
        QueryRegisteredQueryResultRequest: {
            typeUrl: string;
            encode(message: _18.QueryRegisteredQueryResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryRegisteredQueryResultRequest;
            fromPartial(object: Partial<_18.QueryRegisteredQueryResultRequest>): _18.QueryRegisteredQueryResultRequest;
            fromAmino(object: _18.QueryRegisteredQueryResultRequestAmino): _18.QueryRegisteredQueryResultRequest;
            toAmino(message: _18.QueryRegisteredQueryResultRequest): _18.QueryRegisteredQueryResultRequestAmino;
            fromAminoMsg(object: _18.QueryRegisteredQueryResultRequestAminoMsg): _18.QueryRegisteredQueryResultRequest;
            fromProtoMsg(message: _18.QueryRegisteredQueryResultRequestProtoMsg): _18.QueryRegisteredQueryResultRequest;
            toProto(message: _18.QueryRegisteredQueryResultRequest): Uint8Array;
            toProtoMsg(message: _18.QueryRegisteredQueryResultRequest): _18.QueryRegisteredQueryResultRequestProtoMsg;
        };
        QueryRegisteredQueryResultResponse: {
            typeUrl: string;
            encode(message: _18.QueryRegisteredQueryResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryRegisteredQueryResultResponse;
            fromPartial(object: Partial<_18.QueryRegisteredQueryResultResponse>): _18.QueryRegisteredQueryResultResponse;
            fromAmino(object: _18.QueryRegisteredQueryResultResponseAmino): _18.QueryRegisteredQueryResultResponse;
            toAmino(message: _18.QueryRegisteredQueryResultResponse): _18.QueryRegisteredQueryResultResponseAmino;
            fromAminoMsg(object: _18.QueryRegisteredQueryResultResponseAminoMsg): _18.QueryRegisteredQueryResultResponse;
            fromProtoMsg(message: _18.QueryRegisteredQueryResultResponseProtoMsg): _18.QueryRegisteredQueryResultResponse;
            toProto(message: _18.QueryRegisteredQueryResultResponse): Uint8Array;
            toProtoMsg(message: _18.QueryRegisteredQueryResultResponse): _18.QueryRegisteredQueryResultResponseProtoMsg;
        };
        Transaction: {
            typeUrl: string;
            encode(message: _18.Transaction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.Transaction;
            fromPartial(object: Partial<_18.Transaction>): _18.Transaction;
            fromAmino(object: _18.TransactionAmino): _18.Transaction;
            toAmino(message: _18.Transaction): _18.TransactionAmino;
            fromAminoMsg(object: _18.TransactionAminoMsg): _18.Transaction;
            fromProtoMsg(message: _18.TransactionProtoMsg): _18.Transaction;
            toProto(message: _18.Transaction): Uint8Array;
            toProtoMsg(message: _18.Transaction): _18.TransactionProtoMsg;
        };
        QueryLastRemoteHeight: {
            typeUrl: string;
            encode(message: _18.QueryLastRemoteHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryLastRemoteHeight;
            fromPartial(object: Partial<_18.QueryLastRemoteHeight>): _18.QueryLastRemoteHeight;
            fromAmino(object: _18.QueryLastRemoteHeightAmino): _18.QueryLastRemoteHeight;
            toAmino(message: _18.QueryLastRemoteHeight): _18.QueryLastRemoteHeightAmino;
            fromAminoMsg(object: _18.QueryLastRemoteHeightAminoMsg): _18.QueryLastRemoteHeight;
            fromProtoMsg(message: _18.QueryLastRemoteHeightProtoMsg): _18.QueryLastRemoteHeight;
            toProto(message: _18.QueryLastRemoteHeight): Uint8Array;
            toProtoMsg(message: _18.QueryLastRemoteHeight): _18.QueryLastRemoteHeightProtoMsg;
        };
        QueryLastRemoteHeightResponse: {
            typeUrl: string;
            encode(message: _18.QueryLastRemoteHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _18.QueryLastRemoteHeightResponse;
            fromPartial(object: Partial<_18.QueryLastRemoteHeightResponse>): _18.QueryLastRemoteHeightResponse;
            fromAmino(object: _18.QueryLastRemoteHeightResponseAmino): _18.QueryLastRemoteHeightResponse;
            toAmino(message: _18.QueryLastRemoteHeightResponse): _18.QueryLastRemoteHeightResponseAmino;
            fromAminoMsg(object: _18.QueryLastRemoteHeightResponseAminoMsg): _18.QueryLastRemoteHeightResponse;
            fromProtoMsg(message: _18.QueryLastRemoteHeightResponseProtoMsg): _18.QueryLastRemoteHeightResponse;
            toProto(message: _18.QueryLastRemoteHeightResponse): Uint8Array;
            toProtoMsg(message: _18.QueryLastRemoteHeightResponse): _18.QueryLastRemoteHeightResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _17.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _17.Params;
            fromPartial(object: Partial<_17.Params>): _17.Params;
            fromAmino(object: _17.ParamsAmino): _17.Params;
            toAmino(message: _17.Params): _17.ParamsAmino;
            fromAminoMsg(object: _17.ParamsAminoMsg): _17.Params;
            fromProtoMsg(message: _17.ParamsProtoMsg): _17.Params;
            toProto(message: _17.Params): Uint8Array;
            toProtoMsg(message: _17.Params): _17.ParamsProtoMsg;
        };
        RegisteredQuery: {
            typeUrl: string;
            encode(message: _16.RegisteredQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _16.RegisteredQuery;
            fromPartial(object: Partial<_16.RegisteredQuery>): _16.RegisteredQuery;
            fromAmino(object: _16.RegisteredQueryAmino): _16.RegisteredQuery;
            toAmino(message: _16.RegisteredQuery): _16.RegisteredQueryAmino;
            fromAminoMsg(object: _16.RegisteredQueryAminoMsg): _16.RegisteredQuery;
            fromProtoMsg(message: _16.RegisteredQueryProtoMsg): _16.RegisteredQuery;
            toProto(message: _16.RegisteredQuery): Uint8Array;
            toProtoMsg(message: _16.RegisteredQuery): _16.RegisteredQueryProtoMsg;
        };
        KVKey: {
            typeUrl: string;
            encode(message: _16.KVKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _16.KVKey;
            fromPartial(object: Partial<_16.KVKey>): _16.KVKey;
            fromAmino(object: _16.KVKeyAmino): _16.KVKey;
            toAmino(message: _16.KVKey): _16.KVKeyAmino;
            fromAminoMsg(object: _16.KVKeyAminoMsg): _16.KVKey;
            fromProtoMsg(message: _16.KVKeyProtoMsg): _16.KVKey;
            toProto(message: _16.KVKey): Uint8Array;
            toProtoMsg(message: _16.KVKey): _16.KVKeyProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _16.GenesisState;
            fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
            toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
            fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
            fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
            toProto(message: _16.GenesisState): Uint8Array;
            toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
        };
    };
    const interchaintxs: {
        v1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerInterchainAccount(value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: import("../interchaintxs/v1/tx").MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerInterchainAccount(value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
                    };
                    submitTx(value: import("../interchaintxs/v1/tx").MsgSubmitTx): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgSubmitTx;
                    };
                };
                fromJSON: {
                    registerInterchainAccount(value: any): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerInterchainAccount(value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
                    };
                    submitTx(value: import("../interchaintxs/v1/tx").MsgSubmitTx): {
                        typeUrl: string;
                        value: import("../interchaintxs/v1/tx").MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
                    aminoType: string;
                    toAmino: (message: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount) => import("../interchaintxs/v1/tx").MsgRegisterInterchainAccountAmino;
                    fromAmino: (object: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccountAmino) => import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
                };
                "/neutron.interchaintxs.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: import("../interchaintxs/v1/tx").MsgSubmitTx) => import("../interchaintxs/v1/tx").MsgSubmitTxAmino;
                    fromAmino: (object: import("../interchaintxs/v1/tx").MsgSubmitTxAmino) => import("../interchaintxs/v1/tx").MsgSubmitTx;
                };
            };
        };
        QueryClientImpl: typeof _187.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
            interchainAccountAddress(request: _22.QueryInterchainAccountAddressRequest): Promise<_22.QueryInterchainAccountAddressResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _22.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _22.QueryParamsRequest;
            fromPartial(_: Partial<_22.QueryParamsRequest>): _22.QueryParamsRequest;
            fromAmino(_: _22.QueryParamsRequestAmino): _22.QueryParamsRequest;
            toAmino(_: _22.QueryParamsRequest): _22.QueryParamsRequestAmino;
            fromAminoMsg(object: _22.QueryParamsRequestAminoMsg): _22.QueryParamsRequest;
            fromProtoMsg(message: _22.QueryParamsRequestProtoMsg): _22.QueryParamsRequest;
            toProto(message: _22.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _22.QueryParamsRequest): _22.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _22.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.QueryParamsResponse;
            fromPartial(object: Partial<_22.QueryParamsResponse>): _22.QueryParamsResponse;
            fromAmino(object: _22.QueryParamsResponseAmino): _22.QueryParamsResponse;
            toAmino(message: _22.QueryParamsResponse): _22.QueryParamsResponseAmino;
            fromAminoMsg(object: _22.QueryParamsResponseAminoMsg): _22.QueryParamsResponse;
            fromProtoMsg(message: _22.QueryParamsResponseProtoMsg): _22.QueryParamsResponse;
            toProto(message: _22.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _22.QueryParamsResponse): _22.QueryParamsResponseProtoMsg;
        };
        QueryInterchainAccountAddressRequest: {
            typeUrl: string;
            encode(message: _22.QueryInterchainAccountAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.QueryInterchainAccountAddressRequest;
            fromPartial(object: Partial<_22.QueryInterchainAccountAddressRequest>): _22.QueryInterchainAccountAddressRequest;
            fromAmino(object: _22.QueryInterchainAccountAddressRequestAmino): _22.QueryInterchainAccountAddressRequest;
            toAmino(message: _22.QueryInterchainAccountAddressRequest): _22.QueryInterchainAccountAddressRequestAmino;
            fromAminoMsg(object: _22.QueryInterchainAccountAddressRequestAminoMsg): _22.QueryInterchainAccountAddressRequest;
            fromProtoMsg(message: _22.QueryInterchainAccountAddressRequestProtoMsg): _22.QueryInterchainAccountAddressRequest;
            toProto(message: _22.QueryInterchainAccountAddressRequest): Uint8Array;
            toProtoMsg(message: _22.QueryInterchainAccountAddressRequest): _22.QueryInterchainAccountAddressRequestProtoMsg;
        };
        QueryInterchainAccountAddressResponse: {
            typeUrl: string;
            encode(message: _22.QueryInterchainAccountAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.QueryInterchainAccountAddressResponse;
            fromPartial(object: Partial<_22.QueryInterchainAccountAddressResponse>): _22.QueryInterchainAccountAddressResponse;
            fromAmino(object: _22.QueryInterchainAccountAddressResponseAmino): _22.QueryInterchainAccountAddressResponse;
            toAmino(message: _22.QueryInterchainAccountAddressResponse): _22.QueryInterchainAccountAddressResponseAmino;
            fromAminoMsg(object: _22.QueryInterchainAccountAddressResponseAminoMsg): _22.QueryInterchainAccountAddressResponse;
            fromProtoMsg(message: _22.QueryInterchainAccountAddressResponseProtoMsg): _22.QueryInterchainAccountAddressResponse;
            toProto(message: _22.QueryInterchainAccountAddressResponse): Uint8Array;
            toProtoMsg(message: _22.QueryInterchainAccountAddressResponse): _22.QueryInterchainAccountAddressResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _21.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _21.Params;
            fromPartial(object: Partial<_21.Params>): _21.Params;
            fromAmino(object: _21.ParamsAmino): _21.Params;
            toAmino(message: _21.Params): _21.ParamsAmino;
            fromAminoMsg(object: _21.ParamsAminoMsg): _21.Params;
            fromProtoMsg(message: _21.ParamsProtoMsg): _21.Params;
            toProto(message: _21.Params): Uint8Array;
            toProtoMsg(message: _21.Params): _21.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _20.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _20.GenesisState;
            fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
            fromAmino(object: _20.GenesisStateAmino): _20.GenesisState;
            toAmino(message: _20.GenesisState): _20.GenesisStateAmino;
            fromAminoMsg(object: _20.GenesisStateAminoMsg): _20.GenesisState;
            fromProtoMsg(message: _20.GenesisStateProtoMsg): _20.GenesisState;
            toProto(message: _20.GenesisState): Uint8Array;
            toProtoMsg(message: _20.GenesisState): _20.GenesisStateProtoMsg;
        };
    };
    const transfer: {
        MsgClientImpl: typeof _191.MsgClientImpl;
        QueryClientImpl: typeof _188.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<ibc.applications.transfer.v1.QueryDenomTraceResponse>;
            denomTraces(request?: ibc.applications.transfer.v1.QueryDenomTracesRequest): Promise<ibc.applications.transfer.v1.QueryDenomTracesResponse>;
            params(request?: ibc.applications.transfer.v1.QueryParamsRequest): Promise<ibc.applications.transfer.v1.QueryParamsResponse>;
            denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<ibc.applications.transfer.v1.QueryDenomHashResponse>;
        };
        LCDQueryClient: typeof _181.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                transfer(value: _24.MsgTransfer): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                transfer(value: _24.MsgTransfer): {
                    typeUrl: string;
                    value: _24.MsgTransfer;
                };
            };
            fromJSON: {
                transfer(value: any): {
                    typeUrl: string;
                    value: _24.MsgTransfer;
                };
            };
            fromPartial: {
                transfer(value: _24.MsgTransfer): {
                    typeUrl: string;
                    value: _24.MsgTransfer;
                };
            };
        };
        AminoConverter: {
            "/neutron.transfer.MsgTransfer": {
                aminoType: string;
                toAmino: (message: _24.MsgTransfer) => _24.MsgTransferAmino;
                fromAmino: (object: _24.MsgTransferAmino) => _24.MsgTransfer;
            };
        };
        MsgTransfer: {
            typeUrl: string;
            encode(message: _24.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.MsgTransfer;
            fromPartial(object: Partial<_24.MsgTransfer>): _24.MsgTransfer;
            fromAmino(object: _24.MsgTransferAmino): _24.MsgTransfer;
            toAmino(message: _24.MsgTransfer): _24.MsgTransferAmino;
            fromAminoMsg(object: _24.MsgTransferAminoMsg): _24.MsgTransfer;
            fromProtoMsg(message: _24.MsgTransferProtoMsg): _24.MsgTransfer;
            toProto(message: _24.MsgTransfer): Uint8Array;
            toProtoMsg(message: _24.MsgTransfer): _24.MsgTransferProtoMsg;
        };
        MsgTransferResponse: {
            typeUrl: string;
            encode(message: _24.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.MsgTransferResponse;
            fromPartial(object: Partial<_24.MsgTransferResponse>): _24.MsgTransferResponse;
            fromAmino(object: _24.MsgTransferResponseAmino): _24.MsgTransferResponse;
            toAmino(message: _24.MsgTransferResponse): _24.MsgTransferResponseAmino;
            fromAminoMsg(object: _24.MsgTransferResponseAminoMsg): _24.MsgTransferResponse;
            fromProtoMsg(message: _24.MsgTransferResponseProtoMsg): _24.MsgTransferResponse;
            toProto(message: _24.MsgTransferResponse): Uint8Array;
            toProtoMsg(message: _24.MsgTransferResponse): _24.MsgTransferResponseProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            neutron: {
                interchainqueries: _189.MsgClientImpl;
                interchaintxs: {
                    v1: _190.MsgClientImpl;
                };
                transfer: _191.MsgClientImpl;
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
            neutron: {
                contractmanager: {
                    params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                    addressFailures(request: _2.QueryFailuresRequest): Promise<_2.QueryFailuresResponse>;
                    failures(request: _2.QueryFailuresRequest): Promise<_2.QueryFailuresResponse>;
                };
                cron: {
                    params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                    schedule(request: _5.QueryGetScheduleRequest): Promise<_5.QueryGetScheduleResponse>;
                    schedules(request?: _5.QuerySchedulesRequest): Promise<_5.QuerySchedulesResponse>;
                };
                feeburner: {
                    params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                    totalBurnedNeutronsAmount(request?: _10.QueryTotalBurnedNeutronsAmountRequest): Promise<_10.QueryTotalBurnedNeutronsAmountResponse>;
                };
                feerefunder: {
                    params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                    feeInfo(request: _15.FeeInfoRequest): Promise<_15.FeeInfoResponse>;
                };
                interchainqueries: {
                    params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                    registeredQueries(request: _18.QueryRegisteredQueriesRequest): Promise<_18.QueryRegisteredQueriesResponse>;
                    registeredQuery(request: _18.QueryRegisteredQueryRequest): Promise<_18.QueryRegisteredQueryResponse>;
                    queryResult(request: _18.QueryRegisteredQueryResultRequest): Promise<_18.QueryRegisteredQueryResultResponse>;
                    lastRemoteHeight(request: _18.QueryLastRemoteHeight): Promise<_18.QueryLastRemoteHeightResponse>;
                };
                interchaintxs: {
                    params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                    interchainAccountAddress(request: _22.QueryInterchainAccountAddressRequest): Promise<_22.QueryInterchainAccountAddressResponse>;
                };
                transfer: {
                    denomTrace(request: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<ibc.applications.transfer.v1.QueryDenomTraceResponse>;
                    denomTraces(request?: ibc.applications.transfer.v1.QueryDenomTracesRequest): Promise<ibc.applications.transfer.v1.QueryDenomTracesResponse>;
                    params(request?: ibc.applications.transfer.v1.QueryParamsRequest): Promise<ibc.applications.transfer.v1.QueryParamsResponse>;
                    denomHash(request: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<ibc.applications.transfer.v1.QueryDenomHashResponse>;
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
            neutron: {
                contractmanager: _176.LCDQueryClient;
                cron: _177.LCDQueryClient;
                feeburner: _178.LCDQueryClient;
                feerefunder: _179.LCDQueryClient;
                interchainqueries: _180.LCDQueryClient;
                transfer: _181.LCDQueryClient;
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
