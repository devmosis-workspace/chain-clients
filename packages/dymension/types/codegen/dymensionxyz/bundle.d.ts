import * as _0 from "../dymension/delayedack/genesis";
import * as _1 from "../dymension/delayedack/rollapp_packet";
import * as _2 from "../dymension/rollapp/bank";
import * as _3 from "../dymension/rollapp/block_descriptor";
import * as _4 from "../dymension/rollapp/genesis";
import * as _5 from "../dymension/rollapp/params";
import * as _6 from "../dymension/rollapp/query";
import * as _7 from "../dymension/rollapp/rollapp";
import * as _8 from "../dymension/rollapp/state_info";
import * as _9 from "../dymension/rollapp/state_status";
import * as _10 from "../dymension/rollapp/tx";
import * as _11 from "../dymension/sequencer/description";
import * as _12 from "../dymension/sequencer/genesis";
import * as _13 from "../dymension/sequencer/operating_status";
import * as _14 from "../dymension/sequencer/params";
import * as _15 from "../dymension/sequencer/query";
import * as _16 from "../dymension/sequencer/scheduler";
import * as _17 from "../dymension/sequencer/sequencer";
import * as _18 from "../dymension/sequencer/sequencers_by_rollapp";
import * as _19 from "../dymension/sequencer/tx";
import * as _20 from "../dymension/streamer/distr_info";
import * as _21 from "../dymension/streamer/genesis";
import * as _22 from "../dymension/streamer/gov_distribution";
import * as _23 from "../dymension/streamer/gov_stream";
import * as _24 from "../dymension/streamer/params";
import * as _25 from "../dymension/streamer/query";
import * as _26 from "../dymension/streamer/stream";
import * as _148 from "../dymension/rollapp/query.lcd";
import * as _149 from "../dymension/sequencer/query.lcd";
import * as _150 from "../dymension/streamer/query.lcd";
import * as _151 from "../dymension/rollapp/query.rpc.Query";
import * as _152 from "../dymension/sequencer/query.rpc.Query";
import * as _153 from "../dymension/streamer/query.rpc.Query";
import * as _154 from "../dymension/rollapp/tx.rpc.msg";
import * as _155 from "../dymension/sequencer/tx.rpc.msg";
export declare namespace dymensionxyz {
    namespace dymension {
        const delayedack: {
            rollappPacket_StatusFromJSON(object: any): _1.RollappPacket_Status;
            rollappPacket_StatusToJSON(object: _1.RollappPacket_Status): string;
            RollappPacket_Status: typeof _1.RollappPacket_Status;
            RollappPacket_StatusSDKType: typeof _1.RollappPacket_Status;
            RollappPacket_StatusAmino: typeof _1.RollappPacket_Status;
            RollappPacket: {
                typeUrl: string;
                encode(message: _1.RollappPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.RollappPacket;
                fromPartial(object: Partial<_1.RollappPacket>): _1.RollappPacket;
                fromAmino(object: _1.RollappPacketAmino): _1.RollappPacket;
                toAmino(message: _1.RollappPacket): _1.RollappPacketAmino;
                fromAminoMsg(object: _1.RollappPacketAminoMsg): _1.RollappPacket;
                fromProtoMsg(message: _1.RollappPacketProtoMsg): _1.RollappPacket;
                toProto(message: _1.RollappPacket): Uint8Array;
                toProtoMsg(message: _1.RollappPacket): _1.RollappPacketProtoMsg;
            };
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
        const rollapp: {
            MsgClientImpl: typeof _154.MsgClientImpl;
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                rollapp(request: _6.QueryGetRollappRequest): Promise<_6.QueryGetRollappResponse>;
                rollappByEIP155(request: _6.QueryGetRollappByEIP155Request): Promise<_6.QueryGetRollappResponse>;
                rollappAll(request?: _6.QueryAllRollappRequest): Promise<_6.QueryAllRollappResponse>;
                latestStateIndex(request: _6.QueryGetLatestStateIndexRequest): Promise<_6.QueryGetLatestStateIndexResponse>;
                stateInfo(request: _6.QueryGetStateInfoRequest): Promise<_6.QueryGetStateInfoResponse>;
                stateInfoAll(request: _6.QueryAllStateInfoRequest): Promise<_6.QueryAllStateInfoResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createRollapp(value: _10.MsgCreateRollapp): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateState(value: _10.MsgUpdateState): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRollapp(value: _10.MsgCreateRollapp): {
                        typeUrl: string;
                        value: _10.MsgCreateRollapp;
                    };
                    updateState(value: _10.MsgUpdateState): {
                        typeUrl: string;
                        value: _10.MsgUpdateState;
                    };
                };
                fromJSON: {
                    createRollapp(value: any): {
                        typeUrl: string;
                        value: _10.MsgCreateRollapp;
                    };
                    updateState(value: any): {
                        typeUrl: string;
                        value: _10.MsgUpdateState;
                    };
                };
                fromPartial: {
                    createRollapp(value: _10.MsgCreateRollapp): {
                        typeUrl: string;
                        value: _10.MsgCreateRollapp;
                    };
                    updateState(value: _10.MsgUpdateState): {
                        typeUrl: string;
                        value: _10.MsgUpdateState;
                    };
                };
            };
            AminoConverter: {
                "/dymensionxyz.dymension.rollapp.MsgCreateRollapp": {
                    aminoType: string;
                    toAmino: (message: _10.MsgCreateRollapp) => _10.MsgCreateRollappAmino;
                    fromAmino: (object: _10.MsgCreateRollappAmino) => _10.MsgCreateRollapp;
                };
                "/dymensionxyz.dymension.rollapp.MsgUpdateState": {
                    aminoType: string;
                    toAmino: (message: _10.MsgUpdateState) => _10.MsgUpdateStateAmino;
                    fromAmino: (object: _10.MsgUpdateStateAmino) => _10.MsgUpdateState;
                };
            };
            MsgCreateRollapp: {
                typeUrl: string;
                encode(message: _10.MsgCreateRollapp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgCreateRollapp;
                fromPartial(object: Partial<_10.MsgCreateRollapp>): _10.MsgCreateRollapp;
                fromAmino(object: _10.MsgCreateRollappAmino): _10.MsgCreateRollapp;
                toAmino(message: _10.MsgCreateRollapp): _10.MsgCreateRollappAmino;
                fromAminoMsg(object: _10.MsgCreateRollappAminoMsg): _10.MsgCreateRollapp;
                fromProtoMsg(message: _10.MsgCreateRollappProtoMsg): _10.MsgCreateRollapp;
                toProto(message: _10.MsgCreateRollapp): Uint8Array;
                toProtoMsg(message: _10.MsgCreateRollapp): _10.MsgCreateRollappProtoMsg;
            };
            MsgCreateRollappResponse: {
                typeUrl: string;
                encode(_: _10.MsgCreateRollappResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgCreateRollappResponse;
                fromPartial(_: Partial<_10.MsgCreateRollappResponse>): _10.MsgCreateRollappResponse;
                fromAmino(_: _10.MsgCreateRollappResponseAmino): _10.MsgCreateRollappResponse;
                toAmino(_: _10.MsgCreateRollappResponse): _10.MsgCreateRollappResponseAmino;
                fromAminoMsg(object: _10.MsgCreateRollappResponseAminoMsg): _10.MsgCreateRollappResponse;
                fromProtoMsg(message: _10.MsgCreateRollappResponseProtoMsg): _10.MsgCreateRollappResponse;
                toProto(message: _10.MsgCreateRollappResponse): Uint8Array;
                toProtoMsg(message: _10.MsgCreateRollappResponse): _10.MsgCreateRollappResponseProtoMsg;
            };
            MsgUpdateState: {
                typeUrl: string;
                encode(message: _10.MsgUpdateState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MsgUpdateState;
                fromPartial(object: Partial<_10.MsgUpdateState>): _10.MsgUpdateState;
                fromAmino(object: _10.MsgUpdateStateAmino): _10.MsgUpdateState;
                toAmino(message: _10.MsgUpdateState): _10.MsgUpdateStateAmino;
                fromAminoMsg(object: _10.MsgUpdateStateAminoMsg): _10.MsgUpdateState;
                fromProtoMsg(message: _10.MsgUpdateStateProtoMsg): _10.MsgUpdateState;
                toProto(message: _10.MsgUpdateState): Uint8Array;
                toProtoMsg(message: _10.MsgUpdateState): _10.MsgUpdateStateProtoMsg;
            };
            MsgUpdateStateResponse: {
                typeUrl: string;
                encode(_: _10.MsgUpdateStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _10.MsgUpdateStateResponse;
                fromPartial(_: Partial<_10.MsgUpdateStateResponse>): _10.MsgUpdateStateResponse;
                fromAmino(_: _10.MsgUpdateStateResponseAmino): _10.MsgUpdateStateResponse;
                toAmino(_: _10.MsgUpdateStateResponse): _10.MsgUpdateStateResponseAmino;
                fromAminoMsg(object: _10.MsgUpdateStateResponseAminoMsg): _10.MsgUpdateStateResponse;
                fromProtoMsg(message: _10.MsgUpdateStateResponseProtoMsg): _10.MsgUpdateStateResponse;
                toProto(message: _10.MsgUpdateStateResponse): Uint8Array;
                toProtoMsg(message: _10.MsgUpdateStateResponse): _10.MsgUpdateStateResponseProtoMsg;
            };
            stateStatusFromJSON(object: any): _9.StateStatus;
            stateStatusToJSON(object: _9.StateStatus): string;
            StateStatus: typeof _9.StateStatus;
            StateStatusSDKType: typeof _9.StateStatus;
            StateStatusAmino: typeof _9.StateStatus;
            StateInfoIndex: {
                typeUrl: string;
                encode(message: _8.StateInfoIndex, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.StateInfoIndex;
                fromPartial(object: Partial<_8.StateInfoIndex>): _8.StateInfoIndex;
                fromAmino(object: _8.StateInfoIndexAmino): _8.StateInfoIndex;
                toAmino(message: _8.StateInfoIndex): _8.StateInfoIndexAmino;
                fromAminoMsg(object: _8.StateInfoIndexAminoMsg): _8.StateInfoIndex;
                fromProtoMsg(message: _8.StateInfoIndexProtoMsg): _8.StateInfoIndex;
                toProto(message: _8.StateInfoIndex): Uint8Array;
                toProtoMsg(message: _8.StateInfoIndex): _8.StateInfoIndexProtoMsg;
            };
            StateInfo: {
                typeUrl: string;
                encode(message: _8.StateInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.StateInfo;
                fromPartial(object: Partial<_8.StateInfo>): _8.StateInfo;
                fromAmino(object: _8.StateInfoAmino): _8.StateInfo;
                toAmino(message: _8.StateInfo): _8.StateInfoAmino;
                fromAminoMsg(object: _8.StateInfoAminoMsg): _8.StateInfo;
                fromProtoMsg(message: _8.StateInfoProtoMsg): _8.StateInfo;
                toProto(message: _8.StateInfo): Uint8Array;
                toProtoMsg(message: _8.StateInfo): _8.StateInfoProtoMsg;
            };
            StateInfoSummary: {
                typeUrl: string;
                encode(message: _8.StateInfoSummary, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.StateInfoSummary;
                fromPartial(object: Partial<_8.StateInfoSummary>): _8.StateInfoSummary;
                fromAmino(object: _8.StateInfoSummaryAmino): _8.StateInfoSummary;
                toAmino(message: _8.StateInfoSummary): _8.StateInfoSummaryAmino;
                fromAminoMsg(object: _8.StateInfoSummaryAminoMsg): _8.StateInfoSummary;
                fromProtoMsg(message: _8.StateInfoSummaryProtoMsg): _8.StateInfoSummary;
                toProto(message: _8.StateInfoSummary): Uint8Array;
                toProtoMsg(message: _8.StateInfoSummary): _8.StateInfoSummaryProtoMsg;
            };
            BlockHeightToFinalizationQueue: {
                typeUrl: string;
                encode(message: _8.BlockHeightToFinalizationQueue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.BlockHeightToFinalizationQueue;
                fromPartial(object: Partial<_8.BlockHeightToFinalizationQueue>): _8.BlockHeightToFinalizationQueue;
                fromAmino(object: _8.BlockHeightToFinalizationQueueAmino): _8.BlockHeightToFinalizationQueue;
                toAmino(message: _8.BlockHeightToFinalizationQueue): _8.BlockHeightToFinalizationQueueAmino;
                fromAminoMsg(object: _8.BlockHeightToFinalizationQueueAminoMsg): _8.BlockHeightToFinalizationQueue;
                fromProtoMsg(message: _8.BlockHeightToFinalizationQueueProtoMsg): _8.BlockHeightToFinalizationQueue;
                toProto(message: _8.BlockHeightToFinalizationQueue): Uint8Array;
                toProtoMsg(message: _8.BlockHeightToFinalizationQueue): _8.BlockHeightToFinalizationQueueProtoMsg;
            };
            Rollapp: {
                typeUrl: string;
                encode(message: _7.Rollapp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Rollapp;
                fromPartial(object: Partial<_7.Rollapp>): _7.Rollapp;
                fromAmino(object: _7.RollappAmino): _7.Rollapp;
                toAmino(message: _7.Rollapp): _7.RollappAmino;
                fromAminoMsg(object: _7.RollappAminoMsg): _7.Rollapp;
                fromProtoMsg(message: _7.RollappProtoMsg): _7.Rollapp;
                toProto(message: _7.Rollapp): Uint8Array;
                toProtoMsg(message: _7.Rollapp): _7.RollappProtoMsg;
            };
            RollappSummary: {
                typeUrl: string;
                encode(message: _7.RollappSummary, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.RollappSummary;
                fromPartial(object: Partial<_7.RollappSummary>): _7.RollappSummary;
                fromAmino(object: _7.RollappSummaryAmino): _7.RollappSummary;
                toAmino(message: _7.RollappSummary): _7.RollappSummaryAmino;
                fromAminoMsg(object: _7.RollappSummaryAminoMsg): _7.RollappSummary;
                fromProtoMsg(message: _7.RollappSummaryProtoMsg): _7.RollappSummary;
                toProto(message: _7.RollappSummary): Uint8Array;
                toProtoMsg(message: _7.RollappSummary): _7.RollappSummaryProtoMsg;
            };
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
            QueryGetRollappRequest: {
                typeUrl: string;
                encode(message: _6.QueryGetRollappRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGetRollappRequest;
                fromPartial(object: Partial<_6.QueryGetRollappRequest>): _6.QueryGetRollappRequest;
                fromAmino(object: _6.QueryGetRollappRequestAmino): _6.QueryGetRollappRequest;
                toAmino(message: _6.QueryGetRollappRequest): _6.QueryGetRollappRequestAmino;
                fromAminoMsg(object: _6.QueryGetRollappRequestAminoMsg): _6.QueryGetRollappRequest;
                fromProtoMsg(message: _6.QueryGetRollappRequestProtoMsg): _6.QueryGetRollappRequest;
                toProto(message: _6.QueryGetRollappRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGetRollappRequest): _6.QueryGetRollappRequestProtoMsg;
            };
            QueryGetRollappByEIP155Request: {
                typeUrl: string;
                encode(message: _6.QueryGetRollappByEIP155Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGetRollappByEIP155Request;
                fromPartial(object: Partial<_6.QueryGetRollappByEIP155Request>): _6.QueryGetRollappByEIP155Request;
                fromAmino(object: _6.QueryGetRollappByEIP155RequestAmino): _6.QueryGetRollappByEIP155Request;
                toAmino(message: _6.QueryGetRollappByEIP155Request): _6.QueryGetRollappByEIP155RequestAmino;
                fromAminoMsg(object: _6.QueryGetRollappByEIP155RequestAminoMsg): _6.QueryGetRollappByEIP155Request;
                fromProtoMsg(message: _6.QueryGetRollappByEIP155RequestProtoMsg): _6.QueryGetRollappByEIP155Request;
                toProto(message: _6.QueryGetRollappByEIP155Request): Uint8Array;
                toProtoMsg(message: _6.QueryGetRollappByEIP155Request): _6.QueryGetRollappByEIP155RequestProtoMsg;
            };
            QueryGetLatestStateIndexRequest: {
                typeUrl: string;
                encode(message: _6.QueryGetLatestStateIndexRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGetLatestStateIndexRequest;
                fromPartial(object: Partial<_6.QueryGetLatestStateIndexRequest>): _6.QueryGetLatestStateIndexRequest;
                fromAmino(object: _6.QueryGetLatestStateIndexRequestAmino): _6.QueryGetLatestStateIndexRequest;
                toAmino(message: _6.QueryGetLatestStateIndexRequest): _6.QueryGetLatestStateIndexRequestAmino;
                fromAminoMsg(object: _6.QueryGetLatestStateIndexRequestAminoMsg): _6.QueryGetLatestStateIndexRequest;
                fromProtoMsg(message: _6.QueryGetLatestStateIndexRequestProtoMsg): _6.QueryGetLatestStateIndexRequest;
                toProto(message: _6.QueryGetLatestStateIndexRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGetLatestStateIndexRequest): _6.QueryGetLatestStateIndexRequestProtoMsg;
            };
            QueryGetLatestStateIndexResponse: {
                typeUrl: string;
                encode(message: _6.QueryGetLatestStateIndexResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGetLatestStateIndexResponse;
                fromPartial(object: Partial<_6.QueryGetLatestStateIndexResponse>): _6.QueryGetLatestStateIndexResponse;
                fromAmino(object: _6.QueryGetLatestStateIndexResponseAmino): _6.QueryGetLatestStateIndexResponse;
                toAmino(message: _6.QueryGetLatestStateIndexResponse): _6.QueryGetLatestStateIndexResponseAmino;
                fromAminoMsg(object: _6.QueryGetLatestStateIndexResponseAminoMsg): _6.QueryGetLatestStateIndexResponse;
                fromProtoMsg(message: _6.QueryGetLatestStateIndexResponseProtoMsg): _6.QueryGetLatestStateIndexResponse;
                toProto(message: _6.QueryGetLatestStateIndexResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGetLatestStateIndexResponse): _6.QueryGetLatestStateIndexResponseProtoMsg;
            };
            QueryGetRollappResponse: {
                typeUrl: string;
                encode(message: _6.QueryGetRollappResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGetRollappResponse;
                fromPartial(object: Partial<_6.QueryGetRollappResponse>): _6.QueryGetRollappResponse;
                fromAmino(object: _6.QueryGetRollappResponseAmino): _6.QueryGetRollappResponse;
                toAmino(message: _6.QueryGetRollappResponse): _6.QueryGetRollappResponseAmino;
                fromAminoMsg(object: _6.QueryGetRollappResponseAminoMsg): _6.QueryGetRollappResponse;
                fromProtoMsg(message: _6.QueryGetRollappResponseProtoMsg): _6.QueryGetRollappResponse;
                toProto(message: _6.QueryGetRollappResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGetRollappResponse): _6.QueryGetRollappResponseProtoMsg;
            };
            QueryAllRollappRequest: {
                typeUrl: string;
                encode(message: _6.QueryAllRollappRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAllRollappRequest;
                fromPartial(object: Partial<_6.QueryAllRollappRequest>): _6.QueryAllRollappRequest;
                fromAmino(object: _6.QueryAllRollappRequestAmino): _6.QueryAllRollappRequest;
                toAmino(message: _6.QueryAllRollappRequest): _6.QueryAllRollappRequestAmino;
                fromAminoMsg(object: _6.QueryAllRollappRequestAminoMsg): _6.QueryAllRollappRequest;
                fromProtoMsg(message: _6.QueryAllRollappRequestProtoMsg): _6.QueryAllRollappRequest;
                toProto(message: _6.QueryAllRollappRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAllRollappRequest): _6.QueryAllRollappRequestProtoMsg;
            };
            QueryAllRollappResponse: {
                typeUrl: string;
                encode(message: _6.QueryAllRollappResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAllRollappResponse;
                fromPartial(object: Partial<_6.QueryAllRollappResponse>): _6.QueryAllRollappResponse;
                fromAmino(object: _6.QueryAllRollappResponseAmino): _6.QueryAllRollappResponse;
                toAmino(message: _6.QueryAllRollappResponse): _6.QueryAllRollappResponseAmino;
                fromAminoMsg(object: _6.QueryAllRollappResponseAminoMsg): _6.QueryAllRollappResponse;
                fromProtoMsg(message: _6.QueryAllRollappResponseProtoMsg): _6.QueryAllRollappResponse;
                toProto(message: _6.QueryAllRollappResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAllRollappResponse): _6.QueryAllRollappResponseProtoMsg;
            };
            QueryGetStateInfoRequest: {
                typeUrl: string;
                encode(message: _6.QueryGetStateInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGetStateInfoRequest;
                fromPartial(object: Partial<_6.QueryGetStateInfoRequest>): _6.QueryGetStateInfoRequest;
                fromAmino(object: _6.QueryGetStateInfoRequestAmino): _6.QueryGetStateInfoRequest;
                toAmino(message: _6.QueryGetStateInfoRequest): _6.QueryGetStateInfoRequestAmino;
                fromAminoMsg(object: _6.QueryGetStateInfoRequestAminoMsg): _6.QueryGetStateInfoRequest;
                fromProtoMsg(message: _6.QueryGetStateInfoRequestProtoMsg): _6.QueryGetStateInfoRequest;
                toProto(message: _6.QueryGetStateInfoRequest): Uint8Array;
                toProtoMsg(message: _6.QueryGetStateInfoRequest): _6.QueryGetStateInfoRequestProtoMsg;
            };
            QueryGetStateInfoResponse: {
                typeUrl: string;
                encode(message: _6.QueryGetStateInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryGetStateInfoResponse;
                fromPartial(object: Partial<_6.QueryGetStateInfoResponse>): _6.QueryGetStateInfoResponse;
                fromAmino(object: _6.QueryGetStateInfoResponseAmino): _6.QueryGetStateInfoResponse;
                toAmino(message: _6.QueryGetStateInfoResponse): _6.QueryGetStateInfoResponseAmino;
                fromAminoMsg(object: _6.QueryGetStateInfoResponseAminoMsg): _6.QueryGetStateInfoResponse;
                fromProtoMsg(message: _6.QueryGetStateInfoResponseProtoMsg): _6.QueryGetStateInfoResponse;
                toProto(message: _6.QueryGetStateInfoResponse): Uint8Array;
                toProtoMsg(message: _6.QueryGetStateInfoResponse): _6.QueryGetStateInfoResponseProtoMsg;
            };
            QueryAllStateInfoRequest: {
                typeUrl: string;
                encode(message: _6.QueryAllStateInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAllStateInfoRequest;
                fromPartial(object: Partial<_6.QueryAllStateInfoRequest>): _6.QueryAllStateInfoRequest;
                fromAmino(object: _6.QueryAllStateInfoRequestAmino): _6.QueryAllStateInfoRequest;
                toAmino(message: _6.QueryAllStateInfoRequest): _6.QueryAllStateInfoRequestAmino;
                fromAminoMsg(object: _6.QueryAllStateInfoRequestAminoMsg): _6.QueryAllStateInfoRequest;
                fromProtoMsg(message: _6.QueryAllStateInfoRequestProtoMsg): _6.QueryAllStateInfoRequest;
                toProto(message: _6.QueryAllStateInfoRequest): Uint8Array;
                toProtoMsg(message: _6.QueryAllStateInfoRequest): _6.QueryAllStateInfoRequestProtoMsg;
            };
            QueryAllStateInfoResponse: {
                typeUrl: string;
                encode(message: _6.QueryAllStateInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.QueryAllStateInfoResponse;
                fromPartial(object: Partial<_6.QueryAllStateInfoResponse>): _6.QueryAllStateInfoResponse;
                fromAmino(object: _6.QueryAllStateInfoResponseAmino): _6.QueryAllStateInfoResponse;
                toAmino(message: _6.QueryAllStateInfoResponse): _6.QueryAllStateInfoResponseAmino;
                fromAminoMsg(object: _6.QueryAllStateInfoResponseAminoMsg): _6.QueryAllStateInfoResponse;
                fromProtoMsg(message: _6.QueryAllStateInfoResponseProtoMsg): _6.QueryAllStateInfoResponse;
                toProto(message: _6.QueryAllStateInfoResponse): Uint8Array;
                toProtoMsg(message: _6.QueryAllStateInfoResponse): _6.QueryAllStateInfoResponseProtoMsg;
            };
            DeployerParams: {
                typeUrl: string;
                encode(message: _5.DeployerParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.DeployerParams;
                fromPartial(object: Partial<_5.DeployerParams>): _5.DeployerParams;
                fromAmino(object: _5.DeployerParamsAmino): _5.DeployerParams;
                toAmino(message: _5.DeployerParams): _5.DeployerParamsAmino;
                fromAminoMsg(object: _5.DeployerParamsAminoMsg): _5.DeployerParams;
                fromProtoMsg(message: _5.DeployerParamsProtoMsg): _5.DeployerParams;
                toProto(message: _5.DeployerParams): Uint8Array;
                toProtoMsg(message: _5.DeployerParams): _5.DeployerParamsProtoMsg;
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
            BlockDescriptor: {
                typeUrl: string;
                encode(message: _3.BlockDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.BlockDescriptor;
                fromPartial(object: Partial<_3.BlockDescriptor>): _3.BlockDescriptor;
                fromAmino(object: _3.BlockDescriptorAmino): _3.BlockDescriptor;
                toAmino(message: _3.BlockDescriptor): _3.BlockDescriptorAmino;
                fromAminoMsg(object: _3.BlockDescriptorAminoMsg): _3.BlockDescriptor;
                fromProtoMsg(message: _3.BlockDescriptorProtoMsg): _3.BlockDescriptor;
                toProto(message: _3.BlockDescriptor): Uint8Array;
                toProtoMsg(message: _3.BlockDescriptor): _3.BlockDescriptorProtoMsg;
            };
            BlockDescriptors: {
                typeUrl: string;
                encode(message: _3.BlockDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.BlockDescriptors;
                fromPartial(object: Partial<_3.BlockDescriptors>): _3.BlockDescriptors;
                fromAmino(object: _3.BlockDescriptorsAmino): _3.BlockDescriptors;
                toAmino(message: _3.BlockDescriptors): _3.BlockDescriptorsAmino;
                fromAminoMsg(object: _3.BlockDescriptorsAminoMsg): _3.BlockDescriptors;
                fromProtoMsg(message: _3.BlockDescriptorsProtoMsg): _3.BlockDescriptors;
                toProto(message: _3.BlockDescriptors): Uint8Array;
                toProtoMsg(message: _3.BlockDescriptors): _3.BlockDescriptorsProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _2.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.DenomUnit;
                fromPartial(object: Partial<_2.DenomUnit>): _2.DenomUnit;
                fromAmino(object: _2.DenomUnitAmino): _2.DenomUnit;
                toAmino(message: _2.DenomUnit): _2.DenomUnitAmino;
                fromAminoMsg(object: _2.DenomUnitAminoMsg): _2.DenomUnit;
                fromProtoMsg(message: _2.DenomUnitProtoMsg): _2.DenomUnit;
                toProto(message: _2.DenomUnit): Uint8Array;
                toProtoMsg(message: _2.DenomUnit): _2.DenomUnitProtoMsg;
            };
            TokenMetadata: {
                typeUrl: string;
                encode(message: _2.TokenMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.TokenMetadata;
                fromPartial(object: Partial<_2.TokenMetadata>): _2.TokenMetadata;
                fromAmino(object: _2.TokenMetadataAmino): _2.TokenMetadata;
                toAmino(message: _2.TokenMetadata): _2.TokenMetadataAmino;
                fromAminoMsg(object: _2.TokenMetadataAminoMsg): _2.TokenMetadata;
                fromProtoMsg(message: _2.TokenMetadataProtoMsg): _2.TokenMetadata;
                toProto(message: _2.TokenMetadata): Uint8Array;
                toProtoMsg(message: _2.TokenMetadata): _2.TokenMetadataProtoMsg;
            };
        };
        const sequencer: {
            MsgClientImpl: typeof _155.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                sequencer(request: _15.QueryGetSequencerRequest): Promise<_15.QueryGetSequencerResponse>;
                sequencerAll(request?: _15.QueryAllSequencerRequest): Promise<_15.QueryAllSequencerResponse>;
                sequencersByRollapp(request: _15.QueryGetSequencersByRollappRequest): Promise<_15.QueryGetSequencersByRollappResponse>;
                sequencersByRollappAll(request?: _15.QueryAllSequencersByRollappRequest): Promise<_15.QueryAllSequencersByRollappResponse>;
                scheduler(request: _15.QueryGetSchedulerRequest): Promise<_15.QueryGetSchedulerResponse>;
                schedulerAll(request?: _15.QueryAllSchedulerRequest): Promise<_15.QueryAllSchedulerResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createSequencer(value: _19.MsgCreateSequencer): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createSequencer(value: _19.MsgCreateSequencer): {
                        typeUrl: string;
                        value: _19.MsgCreateSequencer;
                    };
                };
                fromJSON: {
                    createSequencer(value: any): {
                        typeUrl: string;
                        value: _19.MsgCreateSequencer;
                    };
                };
                fromPartial: {
                    createSequencer(value: _19.MsgCreateSequencer): {
                        typeUrl: string;
                        value: _19.MsgCreateSequencer;
                    };
                };
            };
            AminoConverter: {
                "/dymensionxyz.dymension.sequencer.MsgCreateSequencer": {
                    aminoType: string;
                    toAmino: (message: _19.MsgCreateSequencer) => _19.MsgCreateSequencerAmino;
                    fromAmino: (object: _19.MsgCreateSequencerAmino) => _19.MsgCreateSequencer;
                };
            };
            MsgCreateSequencer: {
                typeUrl: string;
                encode(message: _19.MsgCreateSequencer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.MsgCreateSequencer;
                fromPartial(object: Partial<_19.MsgCreateSequencer>): _19.MsgCreateSequencer;
                fromAmino(object: _19.MsgCreateSequencerAmino): _19.MsgCreateSequencer;
                toAmino(message: _19.MsgCreateSequencer): _19.MsgCreateSequencerAmino;
                fromAminoMsg(object: _19.MsgCreateSequencerAminoMsg): _19.MsgCreateSequencer;
                fromProtoMsg(message: _19.MsgCreateSequencerProtoMsg): _19.MsgCreateSequencer;
                toProto(message: _19.MsgCreateSequencer): Uint8Array;
                toProtoMsg(message: _19.MsgCreateSequencer): _19.MsgCreateSequencerProtoMsg;
            };
            MsgCreateSequencerResponse: {
                typeUrl: string;
                encode(_: _19.MsgCreateSequencerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _19.MsgCreateSequencerResponse;
                fromPartial(_: Partial<_19.MsgCreateSequencerResponse>): _19.MsgCreateSequencerResponse;
                fromAmino(_: _19.MsgCreateSequencerResponseAmino): _19.MsgCreateSequencerResponse;
                toAmino(_: _19.MsgCreateSequencerResponse): _19.MsgCreateSequencerResponseAmino;
                fromAminoMsg(object: _19.MsgCreateSequencerResponseAminoMsg): _19.MsgCreateSequencerResponse;
                fromProtoMsg(message: _19.MsgCreateSequencerResponseProtoMsg): _19.MsgCreateSequencerResponse;
                toProto(message: _19.MsgCreateSequencerResponse): Uint8Array;
                toProtoMsg(message: _19.MsgCreateSequencerResponse): _19.MsgCreateSequencerResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            SequencersByRollapp: {
                typeUrl: string;
                encode(message: _18.SequencersByRollapp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.SequencersByRollapp;
                fromPartial(object: Partial<_18.SequencersByRollapp>): _18.SequencersByRollapp;
                fromAmino(object: _18.SequencersByRollappAmino): _18.SequencersByRollapp;
                toAmino(message: _18.SequencersByRollapp): _18.SequencersByRollappAmino;
                fromAminoMsg(object: _18.SequencersByRollappAminoMsg): _18.SequencersByRollapp;
                fromProtoMsg(message: _18.SequencersByRollappProtoMsg): _18.SequencersByRollapp;
                toProto(message: _18.SequencersByRollapp): Uint8Array;
                toProtoMsg(message: _18.SequencersByRollapp): _18.SequencersByRollappProtoMsg;
            };
            Sequencers: {
                typeUrl: string;
                encode(message: _18.Sequencers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.Sequencers;
                fromPartial(object: Partial<_18.Sequencers>): _18.Sequencers;
                fromAmino(object: _18.SequencersAmino): _18.Sequencers;
                toAmino(message: _18.Sequencers): _18.SequencersAmino;
                fromAminoMsg(object: _18.SequencersAminoMsg): _18.Sequencers;
                fromProtoMsg(message: _18.SequencersProtoMsg): _18.Sequencers;
                toProto(message: _18.Sequencers): Uint8Array;
                toProtoMsg(message: _18.Sequencers): _18.SequencersProtoMsg;
            };
            Sequencer: {
                typeUrl: string;
                encode(message: _17.Sequencer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.Sequencer;
                fromPartial(object: Partial<_17.Sequencer>): _17.Sequencer;
                fromAmino(object: _17.SequencerAmino): _17.Sequencer;
                toAmino(message: _17.Sequencer): _17.SequencerAmino;
                fromAminoMsg(object: _17.SequencerAminoMsg): _17.Sequencer;
                fromProtoMsg(message: _17.SequencerProtoMsg): _17.Sequencer;
                toProto(message: _17.Sequencer): Uint8Array;
                toProtoMsg(message: _17.Sequencer): _17.SequencerProtoMsg;
            };
            Scheduler: {
                typeUrl: string;
                encode(message: _16.Scheduler, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Scheduler;
                fromPartial(object: Partial<_16.Scheduler>): _16.Scheduler;
                fromAmino(object: _16.SchedulerAmino): _16.Scheduler;
                toAmino(message: _16.Scheduler): _16.SchedulerAmino;
                fromAminoMsg(object: _16.SchedulerAminoMsg): _16.Scheduler;
                fromProtoMsg(message: _16.SchedulerProtoMsg): _16.Scheduler;
                toProto(message: _16.Scheduler): Uint8Array;
                toProtoMsg(message: _16.Scheduler): _16.SchedulerProtoMsg;
            };
            SequencerInfo: {
                typeUrl: string;
                encode(message: _15.SequencerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.SequencerInfo;
                fromPartial(object: Partial<_15.SequencerInfo>): _15.SequencerInfo;
                fromAmino(object: _15.SequencerInfoAmino): _15.SequencerInfo;
                toAmino(message: _15.SequencerInfo): _15.SequencerInfoAmino;
                fromAminoMsg(object: _15.SequencerInfoAminoMsg): _15.SequencerInfo;
                fromProtoMsg(message: _15.SequencerInfoProtoMsg): _15.SequencerInfo;
                toProto(message: _15.SequencerInfo): Uint8Array;
                toProtoMsg(message: _15.SequencerInfo): _15.SequencerInfoProtoMsg;
            };
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
            QueryGetSequencerRequest: {
                typeUrl: string;
                encode(message: _15.QueryGetSequencerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryGetSequencerRequest;
                fromPartial(object: Partial<_15.QueryGetSequencerRequest>): _15.QueryGetSequencerRequest;
                fromAmino(object: _15.QueryGetSequencerRequestAmino): _15.QueryGetSequencerRequest;
                toAmino(message: _15.QueryGetSequencerRequest): _15.QueryGetSequencerRequestAmino;
                fromAminoMsg(object: _15.QueryGetSequencerRequestAminoMsg): _15.QueryGetSequencerRequest;
                fromProtoMsg(message: _15.QueryGetSequencerRequestProtoMsg): _15.QueryGetSequencerRequest;
                toProto(message: _15.QueryGetSequencerRequest): Uint8Array;
                toProtoMsg(message: _15.QueryGetSequencerRequest): _15.QueryGetSequencerRequestProtoMsg;
            };
            QueryGetSequencerResponse: {
                typeUrl: string;
                encode(message: _15.QueryGetSequencerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryGetSequencerResponse;
                fromPartial(object: Partial<_15.QueryGetSequencerResponse>): _15.QueryGetSequencerResponse;
                fromAmino(object: _15.QueryGetSequencerResponseAmino): _15.QueryGetSequencerResponse;
                toAmino(message: _15.QueryGetSequencerResponse): _15.QueryGetSequencerResponseAmino;
                fromAminoMsg(object: _15.QueryGetSequencerResponseAminoMsg): _15.QueryGetSequencerResponse;
                fromProtoMsg(message: _15.QueryGetSequencerResponseProtoMsg): _15.QueryGetSequencerResponse;
                toProto(message: _15.QueryGetSequencerResponse): Uint8Array;
                toProtoMsg(message: _15.QueryGetSequencerResponse): _15.QueryGetSequencerResponseProtoMsg;
            };
            QueryAllSequencerRequest: {
                typeUrl: string;
                encode(message: _15.QueryAllSequencerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryAllSequencerRequest;
                fromPartial(object: Partial<_15.QueryAllSequencerRequest>): _15.QueryAllSequencerRequest;
                fromAmino(object: _15.QueryAllSequencerRequestAmino): _15.QueryAllSequencerRequest;
                toAmino(message: _15.QueryAllSequencerRequest): _15.QueryAllSequencerRequestAmino;
                fromAminoMsg(object: _15.QueryAllSequencerRequestAminoMsg): _15.QueryAllSequencerRequest;
                fromProtoMsg(message: _15.QueryAllSequencerRequestProtoMsg): _15.QueryAllSequencerRequest;
                toProto(message: _15.QueryAllSequencerRequest): Uint8Array;
                toProtoMsg(message: _15.QueryAllSequencerRequest): _15.QueryAllSequencerRequestProtoMsg;
            };
            QueryAllSequencerResponse: {
                typeUrl: string;
                encode(message: _15.QueryAllSequencerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryAllSequencerResponse;
                fromPartial(object: Partial<_15.QueryAllSequencerResponse>): _15.QueryAllSequencerResponse;
                fromAmino(object: _15.QueryAllSequencerResponseAmino): _15.QueryAllSequencerResponse;
                toAmino(message: _15.QueryAllSequencerResponse): _15.QueryAllSequencerResponseAmino;
                fromAminoMsg(object: _15.QueryAllSequencerResponseAminoMsg): _15.QueryAllSequencerResponse;
                fromProtoMsg(message: _15.QueryAllSequencerResponseProtoMsg): _15.QueryAllSequencerResponse;
                toProto(message: _15.QueryAllSequencerResponse): Uint8Array;
                toProtoMsg(message: _15.QueryAllSequencerResponse): _15.QueryAllSequencerResponseProtoMsg;
            };
            QueryGetSequencersByRollappRequest: {
                typeUrl: string;
                encode(message: _15.QueryGetSequencersByRollappRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryGetSequencersByRollappRequest;
                fromPartial(object: Partial<_15.QueryGetSequencersByRollappRequest>): _15.QueryGetSequencersByRollappRequest;
                fromAmino(object: _15.QueryGetSequencersByRollappRequestAmino): _15.QueryGetSequencersByRollappRequest;
                toAmino(message: _15.QueryGetSequencersByRollappRequest): _15.QueryGetSequencersByRollappRequestAmino;
                fromAminoMsg(object: _15.QueryGetSequencersByRollappRequestAminoMsg): _15.QueryGetSequencersByRollappRequest;
                fromProtoMsg(message: _15.QueryGetSequencersByRollappRequestProtoMsg): _15.QueryGetSequencersByRollappRequest;
                toProto(message: _15.QueryGetSequencersByRollappRequest): Uint8Array;
                toProtoMsg(message: _15.QueryGetSequencersByRollappRequest): _15.QueryGetSequencersByRollappRequestProtoMsg;
            };
            QueryGetSequencersByRollappResponse: {
                typeUrl: string;
                encode(message: _15.QueryGetSequencersByRollappResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryGetSequencersByRollappResponse;
                fromPartial(object: Partial<_15.QueryGetSequencersByRollappResponse>): _15.QueryGetSequencersByRollappResponse;
                fromAmino(object: _15.QueryGetSequencersByRollappResponseAmino): _15.QueryGetSequencersByRollappResponse;
                toAmino(message: _15.QueryGetSequencersByRollappResponse): _15.QueryGetSequencersByRollappResponseAmino;
                fromAminoMsg(object: _15.QueryGetSequencersByRollappResponseAminoMsg): _15.QueryGetSequencersByRollappResponse;
                fromProtoMsg(message: _15.QueryGetSequencersByRollappResponseProtoMsg): _15.QueryGetSequencersByRollappResponse;
                toProto(message: _15.QueryGetSequencersByRollappResponse): Uint8Array;
                toProtoMsg(message: _15.QueryGetSequencersByRollappResponse): _15.QueryGetSequencersByRollappResponseProtoMsg;
            };
            QueryAllSequencersByRollappRequest: {
                typeUrl: string;
                encode(message: _15.QueryAllSequencersByRollappRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryAllSequencersByRollappRequest;
                fromPartial(object: Partial<_15.QueryAllSequencersByRollappRequest>): _15.QueryAllSequencersByRollappRequest;
                fromAmino(object: _15.QueryAllSequencersByRollappRequestAmino): _15.QueryAllSequencersByRollappRequest;
                toAmino(message: _15.QueryAllSequencersByRollappRequest): _15.QueryAllSequencersByRollappRequestAmino;
                fromAminoMsg(object: _15.QueryAllSequencersByRollappRequestAminoMsg): _15.QueryAllSequencersByRollappRequest;
                fromProtoMsg(message: _15.QueryAllSequencersByRollappRequestProtoMsg): _15.QueryAllSequencersByRollappRequest;
                toProto(message: _15.QueryAllSequencersByRollappRequest): Uint8Array;
                toProtoMsg(message: _15.QueryAllSequencersByRollappRequest): _15.QueryAllSequencersByRollappRequestProtoMsg;
            };
            QueryAllSequencersByRollappResponse: {
                typeUrl: string;
                encode(message: _15.QueryAllSequencersByRollappResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryAllSequencersByRollappResponse;
                fromPartial(object: Partial<_15.QueryAllSequencersByRollappResponse>): _15.QueryAllSequencersByRollappResponse;
                fromAmino(object: _15.QueryAllSequencersByRollappResponseAmino): _15.QueryAllSequencersByRollappResponse;
                toAmino(message: _15.QueryAllSequencersByRollappResponse): _15.QueryAllSequencersByRollappResponseAmino;
                fromAminoMsg(object: _15.QueryAllSequencersByRollappResponseAminoMsg): _15.QueryAllSequencersByRollappResponse;
                fromProtoMsg(message: _15.QueryAllSequencersByRollappResponseProtoMsg): _15.QueryAllSequencersByRollappResponse;
                toProto(message: _15.QueryAllSequencersByRollappResponse): Uint8Array;
                toProtoMsg(message: _15.QueryAllSequencersByRollappResponse): _15.QueryAllSequencersByRollappResponseProtoMsg;
            };
            QueryGetSchedulerRequest: {
                typeUrl: string;
                encode(message: _15.QueryGetSchedulerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryGetSchedulerRequest;
                fromPartial(object: Partial<_15.QueryGetSchedulerRequest>): _15.QueryGetSchedulerRequest;
                fromAmino(object: _15.QueryGetSchedulerRequestAmino): _15.QueryGetSchedulerRequest;
                toAmino(message: _15.QueryGetSchedulerRequest): _15.QueryGetSchedulerRequestAmino;
                fromAminoMsg(object: _15.QueryGetSchedulerRequestAminoMsg): _15.QueryGetSchedulerRequest;
                fromProtoMsg(message: _15.QueryGetSchedulerRequestProtoMsg): _15.QueryGetSchedulerRequest;
                toProto(message: _15.QueryGetSchedulerRequest): Uint8Array;
                toProtoMsg(message: _15.QueryGetSchedulerRequest): _15.QueryGetSchedulerRequestProtoMsg;
            };
            QueryGetSchedulerResponse: {
                typeUrl: string;
                encode(message: _15.QueryGetSchedulerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryGetSchedulerResponse;
                fromPartial(object: Partial<_15.QueryGetSchedulerResponse>): _15.QueryGetSchedulerResponse;
                fromAmino(object: _15.QueryGetSchedulerResponseAmino): _15.QueryGetSchedulerResponse;
                toAmino(message: _15.QueryGetSchedulerResponse): _15.QueryGetSchedulerResponseAmino;
                fromAminoMsg(object: _15.QueryGetSchedulerResponseAminoMsg): _15.QueryGetSchedulerResponse;
                fromProtoMsg(message: _15.QueryGetSchedulerResponseProtoMsg): _15.QueryGetSchedulerResponse;
                toProto(message: _15.QueryGetSchedulerResponse): Uint8Array;
                toProtoMsg(message: _15.QueryGetSchedulerResponse): _15.QueryGetSchedulerResponseProtoMsg;
            };
            QueryAllSchedulerRequest: {
                typeUrl: string;
                encode(message: _15.QueryAllSchedulerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryAllSchedulerRequest;
                fromPartial(object: Partial<_15.QueryAllSchedulerRequest>): _15.QueryAllSchedulerRequest;
                fromAmino(object: _15.QueryAllSchedulerRequestAmino): _15.QueryAllSchedulerRequest;
                toAmino(message: _15.QueryAllSchedulerRequest): _15.QueryAllSchedulerRequestAmino;
                fromAminoMsg(object: _15.QueryAllSchedulerRequestAminoMsg): _15.QueryAllSchedulerRequest;
                fromProtoMsg(message: _15.QueryAllSchedulerRequestProtoMsg): _15.QueryAllSchedulerRequest;
                toProto(message: _15.QueryAllSchedulerRequest): Uint8Array;
                toProtoMsg(message: _15.QueryAllSchedulerRequest): _15.QueryAllSchedulerRequestProtoMsg;
            };
            QueryAllSchedulerResponse: {
                typeUrl: string;
                encode(message: _15.QueryAllSchedulerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.QueryAllSchedulerResponse;
                fromPartial(object: Partial<_15.QueryAllSchedulerResponse>): _15.QueryAllSchedulerResponse;
                fromAmino(object: _15.QueryAllSchedulerResponseAmino): _15.QueryAllSchedulerResponse;
                toAmino(message: _15.QueryAllSchedulerResponse): _15.QueryAllSchedulerResponseAmino;
                fromAminoMsg(object: _15.QueryAllSchedulerResponseAminoMsg): _15.QueryAllSchedulerResponse;
                fromProtoMsg(message: _15.QueryAllSchedulerResponseProtoMsg): _15.QueryAllSchedulerResponse;
                toProto(message: _15.QueryAllSchedulerResponse): Uint8Array;
                toProtoMsg(message: _15.QueryAllSchedulerResponse): _15.QueryAllSchedulerResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _14.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _14.Params;
                fromPartial(_: Partial<_14.Params>): _14.Params;
                fromAmino(_: _14.ParamsAmino): _14.Params;
                toAmino(_: _14.Params): _14.ParamsAmino;
                fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
                fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
                toProto(message: _14.Params): Uint8Array;
                toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
            };
            operatingStatusFromJSON(object: any): _13.OperatingStatus;
            operatingStatusToJSON(object: _13.OperatingStatus): string;
            OperatingStatus: typeof _13.OperatingStatus;
            OperatingStatusSDKType: typeof _13.OperatingStatus;
            OperatingStatusAmino: typeof _13.OperatingStatus;
            GenesisState: {
                typeUrl: string;
                encode(message: _12.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.GenesisState;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _11.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Description;
                fromPartial(object: Partial<_11.Description>): _11.Description;
                fromAmino(object: _11.DescriptionAmino): _11.Description;
                toAmino(message: _11.Description): _11.DescriptionAmino;
                fromAminoMsg(object: _11.DescriptionAminoMsg): _11.Description;
                fromProtoMsg(message: _11.DescriptionProtoMsg): _11.Description;
                toProto(message: _11.Description): Uint8Array;
                toProtoMsg(message: _11.Description): _11.DescriptionProtoMsg;
            };
        };
        const streamer: {
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleToDistributeCoins(request?: _25.ModuleToDistributeCoinsRequest): Promise<_25.ModuleToDistributeCoinsResponse>;
                streamByID(request: _25.StreamByIDRequest): Promise<_25.StreamByIDResponse>;
                streams(request?: _25.StreamsRequest): Promise<_25.StreamsResponse>;
                activeStreams(request?: _25.ActiveStreamsRequest): Promise<_25.ActiveStreamsResponse>;
                upcomingStreams(request?: _25.UpcomingStreamsRequest): Promise<_25.UpcomingStreamsResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            Stream: {
                typeUrl: string;
                encode(message: _26.Stream, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Stream;
                fromPartial(object: Partial<_26.Stream>): _26.Stream;
                fromAmino(object: _26.StreamAmino): _26.Stream;
                toAmino(message: _26.Stream): _26.StreamAmino;
                fromAminoMsg(object: _26.StreamAminoMsg): _26.Stream;
                fromProtoMsg(message: _26.StreamProtoMsg): _26.Stream;
                toProto(message: _26.Stream): Uint8Array;
                toProtoMsg(message: _26.Stream): _26.StreamProtoMsg;
            };
            ModuleToDistributeCoinsRequest: {
                typeUrl: string;
                encode(_: _25.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.ModuleToDistributeCoinsRequest;
                fromPartial(_: Partial<_25.ModuleToDistributeCoinsRequest>): _25.ModuleToDistributeCoinsRequest;
                fromAmino(_: _25.ModuleToDistributeCoinsRequestAmino): _25.ModuleToDistributeCoinsRequest;
                toAmino(_: _25.ModuleToDistributeCoinsRequest): _25.ModuleToDistributeCoinsRequestAmino;
                fromAminoMsg(object: _25.ModuleToDistributeCoinsRequestAminoMsg): _25.ModuleToDistributeCoinsRequest;
                fromProtoMsg(message: _25.ModuleToDistributeCoinsRequestProtoMsg): _25.ModuleToDistributeCoinsRequest;
                toProto(message: _25.ModuleToDistributeCoinsRequest): Uint8Array;
                toProtoMsg(message: _25.ModuleToDistributeCoinsRequest): _25.ModuleToDistributeCoinsRequestProtoMsg;
            };
            ModuleToDistributeCoinsResponse: {
                typeUrl: string;
                encode(message: _25.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ModuleToDistributeCoinsResponse;
                fromPartial(object: Partial<_25.ModuleToDistributeCoinsResponse>): _25.ModuleToDistributeCoinsResponse;
                fromAmino(object: _25.ModuleToDistributeCoinsResponseAmino): _25.ModuleToDistributeCoinsResponse;
                toAmino(message: _25.ModuleToDistributeCoinsResponse): _25.ModuleToDistributeCoinsResponseAmino;
                fromAminoMsg(object: _25.ModuleToDistributeCoinsResponseAminoMsg): _25.ModuleToDistributeCoinsResponse;
                fromProtoMsg(message: _25.ModuleToDistributeCoinsResponseProtoMsg): _25.ModuleToDistributeCoinsResponse;
                toProto(message: _25.ModuleToDistributeCoinsResponse): Uint8Array;
                toProtoMsg(message: _25.ModuleToDistributeCoinsResponse): _25.ModuleToDistributeCoinsResponseProtoMsg;
            };
            StreamByIDRequest: {
                typeUrl: string;
                encode(message: _25.StreamByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.StreamByIDRequest;
                fromPartial(object: Partial<_25.StreamByIDRequest>): _25.StreamByIDRequest;
                fromAmino(object: _25.StreamByIDRequestAmino): _25.StreamByIDRequest;
                toAmino(message: _25.StreamByIDRequest): _25.StreamByIDRequestAmino;
                fromAminoMsg(object: _25.StreamByIDRequestAminoMsg): _25.StreamByIDRequest;
                fromProtoMsg(message: _25.StreamByIDRequestProtoMsg): _25.StreamByIDRequest;
                toProto(message: _25.StreamByIDRequest): Uint8Array;
                toProtoMsg(message: _25.StreamByIDRequest): _25.StreamByIDRequestProtoMsg;
            };
            StreamByIDResponse: {
                typeUrl: string;
                encode(message: _25.StreamByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.StreamByIDResponse;
                fromPartial(object: Partial<_25.StreamByIDResponse>): _25.StreamByIDResponse;
                fromAmino(object: _25.StreamByIDResponseAmino): _25.StreamByIDResponse;
                toAmino(message: _25.StreamByIDResponse): _25.StreamByIDResponseAmino;
                fromAminoMsg(object: _25.StreamByIDResponseAminoMsg): _25.StreamByIDResponse;
                fromProtoMsg(message: _25.StreamByIDResponseProtoMsg): _25.StreamByIDResponse;
                toProto(message: _25.StreamByIDResponse): Uint8Array;
                toProtoMsg(message: _25.StreamByIDResponse): _25.StreamByIDResponseProtoMsg;
            };
            StreamsRequest: {
                typeUrl: string;
                encode(message: _25.StreamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.StreamsRequest;
                fromPartial(object: Partial<_25.StreamsRequest>): _25.StreamsRequest;
                fromAmino(object: _25.StreamsRequestAmino): _25.StreamsRequest;
                toAmino(message: _25.StreamsRequest): _25.StreamsRequestAmino;
                fromAminoMsg(object: _25.StreamsRequestAminoMsg): _25.StreamsRequest;
                fromProtoMsg(message: _25.StreamsRequestProtoMsg): _25.StreamsRequest;
                toProto(message: _25.StreamsRequest): Uint8Array;
                toProtoMsg(message: _25.StreamsRequest): _25.StreamsRequestProtoMsg;
            };
            StreamsResponse: {
                typeUrl: string;
                encode(message: _25.StreamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.StreamsResponse;
                fromPartial(object: Partial<_25.StreamsResponse>): _25.StreamsResponse;
                fromAmino(object: _25.StreamsResponseAmino): _25.StreamsResponse;
                toAmino(message: _25.StreamsResponse): _25.StreamsResponseAmino;
                fromAminoMsg(object: _25.StreamsResponseAminoMsg): _25.StreamsResponse;
                fromProtoMsg(message: _25.StreamsResponseProtoMsg): _25.StreamsResponse;
                toProto(message: _25.StreamsResponse): Uint8Array;
                toProtoMsg(message: _25.StreamsResponse): _25.StreamsResponseProtoMsg;
            };
            ActiveStreamsRequest: {
                typeUrl: string;
                encode(message: _25.ActiveStreamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ActiveStreamsRequest;
                fromPartial(object: Partial<_25.ActiveStreamsRequest>): _25.ActiveStreamsRequest;
                fromAmino(object: _25.ActiveStreamsRequestAmino): _25.ActiveStreamsRequest;
                toAmino(message: _25.ActiveStreamsRequest): _25.ActiveStreamsRequestAmino;
                fromAminoMsg(object: _25.ActiveStreamsRequestAminoMsg): _25.ActiveStreamsRequest;
                fromProtoMsg(message: _25.ActiveStreamsRequestProtoMsg): _25.ActiveStreamsRequest;
                toProto(message: _25.ActiveStreamsRequest): Uint8Array;
                toProtoMsg(message: _25.ActiveStreamsRequest): _25.ActiveStreamsRequestProtoMsg;
            };
            ActiveStreamsResponse: {
                typeUrl: string;
                encode(message: _25.ActiveStreamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.ActiveStreamsResponse;
                fromPartial(object: Partial<_25.ActiveStreamsResponse>): _25.ActiveStreamsResponse;
                fromAmino(object: _25.ActiveStreamsResponseAmino): _25.ActiveStreamsResponse;
                toAmino(message: _25.ActiveStreamsResponse): _25.ActiveStreamsResponseAmino;
                fromAminoMsg(object: _25.ActiveStreamsResponseAminoMsg): _25.ActiveStreamsResponse;
                fromProtoMsg(message: _25.ActiveStreamsResponseProtoMsg): _25.ActiveStreamsResponse;
                toProto(message: _25.ActiveStreamsResponse): Uint8Array;
                toProtoMsg(message: _25.ActiveStreamsResponse): _25.ActiveStreamsResponseProtoMsg;
            };
            UpcomingStreamsRequest: {
                typeUrl: string;
                encode(message: _25.UpcomingStreamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.UpcomingStreamsRequest;
                fromPartial(object: Partial<_25.UpcomingStreamsRequest>): _25.UpcomingStreamsRequest;
                fromAmino(object: _25.UpcomingStreamsRequestAmino): _25.UpcomingStreamsRequest;
                toAmino(message: _25.UpcomingStreamsRequest): _25.UpcomingStreamsRequestAmino;
                fromAminoMsg(object: _25.UpcomingStreamsRequestAminoMsg): _25.UpcomingStreamsRequest;
                fromProtoMsg(message: _25.UpcomingStreamsRequestProtoMsg): _25.UpcomingStreamsRequest;
                toProto(message: _25.UpcomingStreamsRequest): Uint8Array;
                toProtoMsg(message: _25.UpcomingStreamsRequest): _25.UpcomingStreamsRequestProtoMsg;
            };
            UpcomingStreamsResponse: {
                typeUrl: string;
                encode(message: _25.UpcomingStreamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.UpcomingStreamsResponse;
                fromPartial(object: Partial<_25.UpcomingStreamsResponse>): _25.UpcomingStreamsResponse;
                fromAmino(object: _25.UpcomingStreamsResponseAmino): _25.UpcomingStreamsResponse;
                toAmino(message: _25.UpcomingStreamsResponse): _25.UpcomingStreamsResponseAmino;
                fromAminoMsg(object: _25.UpcomingStreamsResponseAminoMsg): _25.UpcomingStreamsResponse;
                fromProtoMsg(message: _25.UpcomingStreamsResponseProtoMsg): _25.UpcomingStreamsResponse;
                toProto(message: _25.UpcomingStreamsResponse): Uint8Array;
                toProtoMsg(message: _25.UpcomingStreamsResponse): _25.UpcomingStreamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _24.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.Params;
                fromPartial(_: Partial<_24.Params>): _24.Params;
                fromAmino(_: _24.ParamsAmino): _24.Params;
                toAmino(_: _24.Params): _24.ParamsAmino;
                fromAminoMsg(object: _24.ParamsAminoMsg): _24.Params;
                fromProtoMsg(message: _24.ParamsProtoMsg): _24.Params;
                toProto(message: _24.Params): Uint8Array;
                toProtoMsg(message: _24.Params): _24.ParamsProtoMsg;
            };
            CreateStreamProposal: {
                typeUrl: string;
                encode(message: _23.CreateStreamProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.CreateStreamProposal;
                fromPartial(object: Partial<_23.CreateStreamProposal>): _23.CreateStreamProposal;
                fromAmino(object: _23.CreateStreamProposalAmino): _23.CreateStreamProposal;
                toAmino(message: _23.CreateStreamProposal): _23.CreateStreamProposalAmino;
                fromAminoMsg(object: _23.CreateStreamProposalAminoMsg): _23.CreateStreamProposal;
                fromProtoMsg(message: _23.CreateStreamProposalProtoMsg): _23.CreateStreamProposal;
                toProto(message: _23.CreateStreamProposal): Uint8Array;
                toProtoMsg(message: _23.CreateStreamProposal): _23.CreateStreamProposalProtoMsg;
            };
            TerminateStreamProposal: {
                typeUrl: string;
                encode(message: _23.TerminateStreamProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.TerminateStreamProposal;
                fromPartial(object: Partial<_23.TerminateStreamProposal>): _23.TerminateStreamProposal;
                fromAmino(object: _23.TerminateStreamProposalAmino): _23.TerminateStreamProposal;
                toAmino(message: _23.TerminateStreamProposal): _23.TerminateStreamProposalAmino;
                fromAminoMsg(object: _23.TerminateStreamProposalAminoMsg): _23.TerminateStreamProposal;
                fromProtoMsg(message: _23.TerminateStreamProposalProtoMsg): _23.TerminateStreamProposal;
                toProto(message: _23.TerminateStreamProposal): Uint8Array;
                toProtoMsg(message: _23.TerminateStreamProposal): _23.TerminateStreamProposalProtoMsg;
            };
            ReplaceStreamDistributionProposal: {
                typeUrl: string;
                encode(message: _22.ReplaceStreamDistributionProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.ReplaceStreamDistributionProposal;
                fromPartial(object: Partial<_22.ReplaceStreamDistributionProposal>): _22.ReplaceStreamDistributionProposal;
                fromAmino(object: _22.ReplaceStreamDistributionProposalAmino): _22.ReplaceStreamDistributionProposal;
                toAmino(message: _22.ReplaceStreamDistributionProposal): _22.ReplaceStreamDistributionProposalAmino;
                fromAminoMsg(object: _22.ReplaceStreamDistributionProposalAminoMsg): _22.ReplaceStreamDistributionProposal;
                fromProtoMsg(message: _22.ReplaceStreamDistributionProposalProtoMsg): _22.ReplaceStreamDistributionProposal;
                toProto(message: _22.ReplaceStreamDistributionProposal): Uint8Array;
                toProtoMsg(message: _22.ReplaceStreamDistributionProposal): _22.ReplaceStreamDistributionProposalProtoMsg;
            };
            UpdateStreamDistributionProposal: {
                typeUrl: string;
                encode(message: _22.UpdateStreamDistributionProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.UpdateStreamDistributionProposal;
                fromPartial(object: Partial<_22.UpdateStreamDistributionProposal>): _22.UpdateStreamDistributionProposal;
                fromAmino(object: _22.UpdateStreamDistributionProposalAmino): _22.UpdateStreamDistributionProposal;
                toAmino(message: _22.UpdateStreamDistributionProposal): _22.UpdateStreamDistributionProposalAmino;
                fromAminoMsg(object: _22.UpdateStreamDistributionProposalAminoMsg): _22.UpdateStreamDistributionProposal;
                fromProtoMsg(message: _22.UpdateStreamDistributionProposalProtoMsg): _22.UpdateStreamDistributionProposal;
                toProto(message: _22.UpdateStreamDistributionProposal): Uint8Array;
                toProtoMsg(message: _22.UpdateStreamDistributionProposal): _22.UpdateStreamDistributionProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _21.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
                fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
                toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
                fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
                fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
                toProto(message: _21.GenesisState): Uint8Array;
                toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _20.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.DistrInfo;
                fromPartial(object: Partial<_20.DistrInfo>): _20.DistrInfo;
                fromAmino(object: _20.DistrInfoAmino): _20.DistrInfo;
                toAmino(message: _20.DistrInfo): _20.DistrInfoAmino;
                fromAminoMsg(object: _20.DistrInfoAminoMsg): _20.DistrInfo;
                fromProtoMsg(message: _20.DistrInfoProtoMsg): _20.DistrInfo;
                toProto(message: _20.DistrInfo): Uint8Array;
                toProtoMsg(message: _20.DistrInfo): _20.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _20.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.DistrRecord;
                fromPartial(object: Partial<_20.DistrRecord>): _20.DistrRecord;
                fromAmino(object: _20.DistrRecordAmino): _20.DistrRecord;
                toAmino(message: _20.DistrRecord): _20.DistrRecordAmino;
                fromAminoMsg(object: _20.DistrRecordAminoMsg): _20.DistrRecord;
                fromProtoMsg(message: _20.DistrRecordProtoMsg): _20.DistrRecord;
                toProto(message: _20.DistrRecord): Uint8Array;
                toProtoMsg(message: _20.DistrRecord): _20.DistrRecordProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            dymensionxyz: {
                dymension: {
                    rollapp: _154.MsgClientImpl;
                    sequencer: _155.MsgClientImpl;
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
            dymensionxyz: {
                dymension: {
                    rollapp: {
                        params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        rollapp(request: _6.QueryGetRollappRequest): Promise<_6.QueryGetRollappResponse>;
                        rollappByEIP155(request: _6.QueryGetRollappByEIP155Request): Promise<_6.QueryGetRollappResponse>;
                        rollappAll(request?: _6.QueryAllRollappRequest): Promise<_6.QueryAllRollappResponse>;
                        latestStateIndex(request: _6.QueryGetLatestStateIndexRequest): Promise<_6.QueryGetLatestStateIndexResponse>;
                        stateInfo(request: _6.QueryGetStateInfoRequest): Promise<_6.QueryGetStateInfoResponse>;
                        stateInfoAll(request: _6.QueryAllStateInfoRequest): Promise<_6.QueryAllStateInfoResponse>;
                    };
                    sequencer: {
                        params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                        sequencer(request: _15.QueryGetSequencerRequest): Promise<_15.QueryGetSequencerResponse>;
                        sequencerAll(request?: _15.QueryAllSequencerRequest): Promise<_15.QueryAllSequencerResponse>;
                        sequencersByRollapp(request: _15.QueryGetSequencersByRollappRequest): Promise<_15.QueryGetSequencersByRollappResponse>;
                        sequencersByRollappAll(request?: _15.QueryAllSequencersByRollappRequest): Promise<_15.QueryAllSequencersByRollappResponse>;
                        scheduler(request: _15.QueryGetSchedulerRequest): Promise<_15.QueryGetSchedulerResponse>;
                        schedulerAll(request?: _15.QueryAllSchedulerRequest): Promise<_15.QueryAllSchedulerResponse>;
                    };
                    streamer: {
                        moduleToDistributeCoins(request?: _25.ModuleToDistributeCoinsRequest): Promise<_25.ModuleToDistributeCoinsResponse>;
                        streamByID(request: _25.StreamByIDRequest): Promise<_25.StreamByIDResponse>;
                        streams(request?: _25.StreamsRequest): Promise<_25.StreamsResponse>;
                        activeStreams(request?: _25.ActiveStreamsRequest): Promise<_25.ActiveStreamsResponse>;
                        upcomingStreams(request?: _25.UpcomingStreamsRequest): Promise<_25.UpcomingStreamsResponse>;
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
            dymensionxyz: {
                dymension: {
                    rollapp: _148.LCDQueryClient;
                    sequencer: _149.LCDQueryClient;
                    streamer: _150.LCDQueryClient;
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
