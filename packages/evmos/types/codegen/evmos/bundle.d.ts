import * as _15 from "./claims/v1/claims";
import * as _16 from "./claims/v1/genesis";
import * as _17 from "./claims/v1/query";
import * as _18 from "./claims/v1/tx";
import * as _19 from "./epochs/v1/genesis";
import * as _20 from "./epochs/v1/query";
import * as _21 from "./erc20/v1/erc20";
import * as _22 from "./erc20/v1/events";
import * as _23 from "./erc20/v1/genesis";
import * as _24 from "./erc20/v1/query";
import * as _25 from "./erc20/v1/tx";
import * as _26 from "./incentives/v1/genesis";
import * as _27 from "./incentives/v1/incentives";
import * as _28 from "./incentives/v1/query";
import * as _29 from "./incentives/v1/tx";
import * as _30 from "./inflation/v1/genesis";
import * as _31 from "./inflation/v1/inflation";
import * as _32 from "./inflation/v1/query";
import * as _33 from "./inflation/v1/tx";
import * as _34 from "./recovery/v1/genesis";
import * as _35 from "./recovery/v1/query";
import * as _36 from "./recovery/v1/tx";
import * as _37 from "./revenue/v1/events";
import * as _38 from "./revenue/v1/genesis";
import * as _39 from "./revenue/v1/query";
import * as _40 from "./revenue/v1/revenue";
import * as _41 from "./revenue/v1/tx";
import * as _42 from "./vesting/v1/events";
import * as _43 from "./vesting/v1/query";
import * as _44 from "./vesting/v1/tx";
import * as _45 from "./vesting/v1/vesting";
import * as _186 from "./claims/v1/query.lcd";
import * as _187 from "./epochs/v1/query.lcd";
import * as _188 from "./erc20/v1/query.lcd";
import * as _189 from "./incentives/v1/query.lcd";
import * as _190 from "./inflation/v1/query.lcd";
import * as _191 from "./recovery/v1/query.lcd";
import * as _192 from "./revenue/v1/query.lcd";
import * as _193 from "./vesting/v1/query.lcd";
import * as _194 from "./claims/v1/query.rpc.Query";
import * as _195 from "./epochs/v1/query.rpc.Query";
import * as _196 from "./erc20/v1/query.rpc.Query";
import * as _197 from "./incentives/v1/query.rpc.Query";
import * as _198 from "./inflation/v1/query.rpc.Query";
import * as _199 from "./recovery/v1/query.rpc.Query";
import * as _200 from "./revenue/v1/query.rpc.Query";
import * as _201 from "./vesting/v1/query.rpc.Query";
import * as _202 from "./claims/v1/tx.rpc.msg";
import * as _203 from "./erc20/v1/tx.rpc.msg";
import * as _204 from "./incentives/v1/tx.rpc.msg";
import * as _205 from "./inflation/v1/tx.rpc.msg";
import * as _206 from "./recovery/v1/tx.rpc.msg";
import * as _207 from "./revenue/v1/tx.rpc.msg";
import * as _208 from "./vesting/v1/tx.rpc.msg";
export declare namespace evmos {
    namespace claims {
        const v1: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _194.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                totalUnclaimed(request?: _17.QueryTotalUnclaimedRequest): Promise<_17.QueryTotalUnclaimedResponse>;
                params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                claimsRecords(request?: _17.QueryClaimsRecordsRequest): Promise<_17.QueryClaimsRecordsResponse>;
                claimsRecord(request: _17.QueryClaimsRecordRequest): Promise<_17.QueryClaimsRecordResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _18.MsgUpdateParams): {
                        typeUrl: string;
                        value: _18.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.claims.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _18.MsgUpdateParams) => _18.MsgUpdateParamsAmino;
                    fromAmino: (object: _18.MsgUpdateParamsAmino) => _18.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _18.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgUpdateParams;
                fromPartial(object: Partial<_18.MsgUpdateParams>): _18.MsgUpdateParams;
                fromAmino(object: _18.MsgUpdateParamsAmino): _18.MsgUpdateParams;
                toAmino(message: _18.MsgUpdateParams): _18.MsgUpdateParamsAmino;
                fromAminoMsg(object: _18.MsgUpdateParamsAminoMsg): _18.MsgUpdateParams;
                fromProtoMsg(message: _18.MsgUpdateParamsProtoMsg): _18.MsgUpdateParams;
                toProto(message: _18.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateParams): _18.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _18.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_18.MsgUpdateParamsResponse>): _18.MsgUpdateParamsResponse;
                fromAmino(_: _18.MsgUpdateParamsResponseAmino): _18.MsgUpdateParamsResponse;
                toAmino(_: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _18.MsgUpdateParamsResponseAminoMsg): _18.MsgUpdateParamsResponse;
                fromProtoMsg(message: _18.MsgUpdateParamsResponseProtoMsg): _18.MsgUpdateParamsResponse;
                toProto(message: _18.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _18.MsgUpdateParamsResponse): _18.MsgUpdateParamsResponseProtoMsg;
            };
            QueryTotalUnclaimedRequest: {
                typeUrl: string;
                encode(_: _17.QueryTotalUnclaimedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryTotalUnclaimedRequest;
                fromPartial(_: Partial<_17.QueryTotalUnclaimedRequest>): _17.QueryTotalUnclaimedRequest;
                fromAmino(_: _17.QueryTotalUnclaimedRequestAmino): _17.QueryTotalUnclaimedRequest;
                toAmino(_: _17.QueryTotalUnclaimedRequest): _17.QueryTotalUnclaimedRequestAmino;
                fromAminoMsg(object: _17.QueryTotalUnclaimedRequestAminoMsg): _17.QueryTotalUnclaimedRequest;
                fromProtoMsg(message: _17.QueryTotalUnclaimedRequestProtoMsg): _17.QueryTotalUnclaimedRequest;
                toProto(message: _17.QueryTotalUnclaimedRequest): Uint8Array;
                toProtoMsg(message: _17.QueryTotalUnclaimedRequest): _17.QueryTotalUnclaimedRequestProtoMsg;
            };
            QueryTotalUnclaimedResponse: {
                typeUrl: string;
                encode(message: _17.QueryTotalUnclaimedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryTotalUnclaimedResponse;
                fromPartial(object: Partial<_17.QueryTotalUnclaimedResponse>): _17.QueryTotalUnclaimedResponse;
                fromAmino(object: _17.QueryTotalUnclaimedResponseAmino): _17.QueryTotalUnclaimedResponse;
                toAmino(message: _17.QueryTotalUnclaimedResponse): _17.QueryTotalUnclaimedResponseAmino;
                fromAminoMsg(object: _17.QueryTotalUnclaimedResponseAminoMsg): _17.QueryTotalUnclaimedResponse;
                fromProtoMsg(message: _17.QueryTotalUnclaimedResponseProtoMsg): _17.QueryTotalUnclaimedResponse;
                toProto(message: _17.QueryTotalUnclaimedResponse): Uint8Array;
                toProtoMsg(message: _17.QueryTotalUnclaimedResponse): _17.QueryTotalUnclaimedResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _17.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryParamsRequest;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
                fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
                fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
                fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
                toProto(message: _17.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _17.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryParamsResponse;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
                fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
                fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
                fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
                toProto(message: _17.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
            };
            QueryClaimsRecordsRequest: {
                typeUrl: string;
                encode(message: _17.QueryClaimsRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClaimsRecordsRequest;
                fromPartial(object: Partial<_17.QueryClaimsRecordsRequest>): _17.QueryClaimsRecordsRequest;
                fromAmino(object: _17.QueryClaimsRecordsRequestAmino): _17.QueryClaimsRecordsRequest;
                toAmino(message: _17.QueryClaimsRecordsRequest): _17.QueryClaimsRecordsRequestAmino;
                fromAminoMsg(object: _17.QueryClaimsRecordsRequestAminoMsg): _17.QueryClaimsRecordsRequest;
                fromProtoMsg(message: _17.QueryClaimsRecordsRequestProtoMsg): _17.QueryClaimsRecordsRequest;
                toProto(message: _17.QueryClaimsRecordsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryClaimsRecordsRequest): _17.QueryClaimsRecordsRequestProtoMsg;
            };
            QueryClaimsRecordsResponse: {
                typeUrl: string;
                encode(message: _17.QueryClaimsRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClaimsRecordsResponse;
                fromPartial(object: Partial<_17.QueryClaimsRecordsResponse>): _17.QueryClaimsRecordsResponse;
                fromAmino(object: _17.QueryClaimsRecordsResponseAmino): _17.QueryClaimsRecordsResponse;
                toAmino(message: _17.QueryClaimsRecordsResponse): _17.QueryClaimsRecordsResponseAmino;
                fromAminoMsg(object: _17.QueryClaimsRecordsResponseAminoMsg): _17.QueryClaimsRecordsResponse;
                fromProtoMsg(message: _17.QueryClaimsRecordsResponseProtoMsg): _17.QueryClaimsRecordsResponse;
                toProto(message: _17.QueryClaimsRecordsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryClaimsRecordsResponse): _17.QueryClaimsRecordsResponseProtoMsg;
            };
            QueryClaimsRecordRequest: {
                typeUrl: string;
                encode(message: _17.QueryClaimsRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClaimsRecordRequest;
                fromPartial(object: Partial<_17.QueryClaimsRecordRequest>): _17.QueryClaimsRecordRequest;
                fromAmino(object: _17.QueryClaimsRecordRequestAmino): _17.QueryClaimsRecordRequest;
                toAmino(message: _17.QueryClaimsRecordRequest): _17.QueryClaimsRecordRequestAmino;
                fromAminoMsg(object: _17.QueryClaimsRecordRequestAminoMsg): _17.QueryClaimsRecordRequest;
                fromProtoMsg(message: _17.QueryClaimsRecordRequestProtoMsg): _17.QueryClaimsRecordRequest;
                toProto(message: _17.QueryClaimsRecordRequest): Uint8Array;
                toProtoMsg(message: _17.QueryClaimsRecordRequest): _17.QueryClaimsRecordRequestProtoMsg;
            };
            QueryClaimsRecordResponse: {
                typeUrl: string;
                encode(message: _17.QueryClaimsRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryClaimsRecordResponse;
                fromPartial(object: Partial<_17.QueryClaimsRecordResponse>): _17.QueryClaimsRecordResponse;
                fromAmino(object: _17.QueryClaimsRecordResponseAmino): _17.QueryClaimsRecordResponse;
                toAmino(message: _17.QueryClaimsRecordResponse): _17.QueryClaimsRecordResponseAmino;
                fromAminoMsg(object: _17.QueryClaimsRecordResponseAminoMsg): _17.QueryClaimsRecordResponse;
                fromProtoMsg(message: _17.QueryClaimsRecordResponseProtoMsg): _17.QueryClaimsRecordResponse;
                toProto(message: _17.QueryClaimsRecordResponse): Uint8Array;
                toProtoMsg(message: _17.QueryClaimsRecordResponse): _17.QueryClaimsRecordResponseProtoMsg;
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
            actionFromJSON(object: any): _15.Action;
            actionToJSON(object: _15.Action): string;
            Action: typeof _15.Action;
            ActionSDKType: typeof _15.Action;
            ActionAmino: typeof _15.Action;
            Claim: {
                typeUrl: string;
                encode(message: _15.Claim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Claim;
                fromPartial(object: Partial<_15.Claim>): _15.Claim;
                fromAmino(object: _15.ClaimAmino): _15.Claim;
                toAmino(message: _15.Claim): _15.ClaimAmino;
                fromAminoMsg(object: _15.ClaimAminoMsg): _15.Claim;
                fromProtoMsg(message: _15.ClaimProtoMsg): _15.Claim;
                toProto(message: _15.Claim): Uint8Array;
                toProtoMsg(message: _15.Claim): _15.ClaimProtoMsg;
            };
            ClaimsRecordAddress: {
                typeUrl: string;
                encode(message: _15.ClaimsRecordAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ClaimsRecordAddress;
                fromPartial(object: Partial<_15.ClaimsRecordAddress>): _15.ClaimsRecordAddress;
                fromAmino(object: _15.ClaimsRecordAddressAmino): _15.ClaimsRecordAddress;
                toAmino(message: _15.ClaimsRecordAddress): _15.ClaimsRecordAddressAmino;
                fromAminoMsg(object: _15.ClaimsRecordAddressAminoMsg): _15.ClaimsRecordAddress;
                fromProtoMsg(message: _15.ClaimsRecordAddressProtoMsg): _15.ClaimsRecordAddress;
                toProto(message: _15.ClaimsRecordAddress): Uint8Array;
                toProtoMsg(message: _15.ClaimsRecordAddress): _15.ClaimsRecordAddressProtoMsg;
            };
            ClaimsRecord: {
                typeUrl: string;
                encode(message: _15.ClaimsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.ClaimsRecord;
                fromPartial(object: Partial<_15.ClaimsRecord>): _15.ClaimsRecord;
                fromAmino(object: _15.ClaimsRecordAmino): _15.ClaimsRecord;
                toAmino(message: _15.ClaimsRecord): _15.ClaimsRecordAmino;
                fromAminoMsg(object: _15.ClaimsRecordAminoMsg): _15.ClaimsRecord;
                fromProtoMsg(message: _15.ClaimsRecordProtoMsg): _15.ClaimsRecord;
                toProto(message: _15.ClaimsRecord): Uint8Array;
                toProtoMsg(message: _15.ClaimsRecord): _15.ClaimsRecordProtoMsg;
            };
        };
    }
    namespace epochs {
        const v1: {
            QueryClientImpl: typeof _195.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _20.QueryEpochsInfoRequest): Promise<_20.QueryEpochsInfoResponse>;
                currentEpoch(request: _20.QueryCurrentEpochRequest): Promise<_20.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(message: _20.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryEpochsInfoRequest;
                fromPartial(object: Partial<_20.QueryEpochsInfoRequest>): _20.QueryEpochsInfoRequest;
                fromAmino(object: _20.QueryEpochsInfoRequestAmino): _20.QueryEpochsInfoRequest;
                toAmino(message: _20.QueryEpochsInfoRequest): _20.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _20.QueryEpochsInfoRequestAminoMsg): _20.QueryEpochsInfoRequest;
                fromProtoMsg(message: _20.QueryEpochsInfoRequestProtoMsg): _20.QueryEpochsInfoRequest;
                toProto(message: _20.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _20.QueryEpochsInfoRequest): _20.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _20.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_20.QueryEpochsInfoResponse>): _20.QueryEpochsInfoResponse;
                fromAmino(object: _20.QueryEpochsInfoResponseAmino): _20.QueryEpochsInfoResponse;
                toAmino(message: _20.QueryEpochsInfoResponse): _20.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _20.QueryEpochsInfoResponseAminoMsg): _20.QueryEpochsInfoResponse;
                fromProtoMsg(message: _20.QueryEpochsInfoResponseProtoMsg): _20.QueryEpochsInfoResponse;
                toProto(message: _20.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _20.QueryEpochsInfoResponse): _20.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _20.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_20.QueryCurrentEpochRequest>): _20.QueryCurrentEpochRequest;
                fromAmino(object: _20.QueryCurrentEpochRequestAmino): _20.QueryCurrentEpochRequest;
                toAmino(message: _20.QueryCurrentEpochRequest): _20.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _20.QueryCurrentEpochRequestAminoMsg): _20.QueryCurrentEpochRequest;
                fromProtoMsg(message: _20.QueryCurrentEpochRequestProtoMsg): _20.QueryCurrentEpochRequest;
                toProto(message: _20.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _20.QueryCurrentEpochRequest): _20.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _20.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_20.QueryCurrentEpochResponse>): _20.QueryCurrentEpochResponse;
                fromAmino(object: _20.QueryCurrentEpochResponseAmino): _20.QueryCurrentEpochResponse;
                toAmino(message: _20.QueryCurrentEpochResponse): _20.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _20.QueryCurrentEpochResponseAminoMsg): _20.QueryCurrentEpochResponse;
                fromProtoMsg(message: _20.QueryCurrentEpochResponseProtoMsg): _20.QueryCurrentEpochResponse;
                toProto(message: _20.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _20.QueryCurrentEpochResponse): _20.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _19.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EpochInfo;
                fromPartial(object: Partial<_19.EpochInfo>): _19.EpochInfo;
                fromAmino(object: _19.EpochInfoAmino): _19.EpochInfo;
                toAmino(message: _19.EpochInfo): _19.EpochInfoAmino;
                fromAminoMsg(object: _19.EpochInfoAminoMsg): _19.EpochInfo;
                fromProtoMsg(message: _19.EpochInfoProtoMsg): _19.EpochInfo;
                toProto(message: _19.EpochInfo): Uint8Array;
                toProtoMsg(message: _19.EpochInfo): _19.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
                fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
                toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
                fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
                fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
                toProto(message: _19.GenesisState): Uint8Array;
                toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
            };
        };
    }
    namespace erc20 {
        const v1: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenPairs(request?: _24.QueryTokenPairsRequest): Promise<_24.QueryTokenPairsResponse>;
                tokenPair(request: _24.QueryTokenPairRequest): Promise<_24.QueryTokenPairResponse>;
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _25.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _25.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _25.MsgConvertCoin): {
                        typeUrl: string;
                        value: _25.MsgConvertCoin;
                    };
                    convertERC20(value: _25.MsgConvertERC20): {
                        typeUrl: string;
                        value: _25.MsgConvertERC20;
                    };
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _25.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _25.MsgConvertERC20;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    convertCoin(value: _25.MsgConvertCoin): {
                        typeUrl: string;
                        value: _25.MsgConvertCoin;
                    };
                    convertERC20(value: _25.MsgConvertERC20): {
                        typeUrl: string;
                        value: _25.MsgConvertERC20;
                    };
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: (message: _25.MsgConvertCoin) => _25.MsgConvertCoinAmino;
                    fromAmino: (object: _25.MsgConvertCoinAmino) => _25.MsgConvertCoin;
                };
                "/evmos.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: (message: _25.MsgConvertERC20) => _25.MsgConvertERC20Amino;
                    fromAmino: (object: _25.MsgConvertERC20Amino) => _25.MsgConvertERC20;
                };
                "/evmos.erc20.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _25.MsgUpdateParams) => _25.MsgUpdateParamsAmino;
                    fromAmino: (object: _25.MsgUpdateParamsAmino) => _25.MsgUpdateParams;
                };
            };
            MsgConvertCoin: {
                typeUrl: string;
                encode(message: _25.MsgConvertCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgConvertCoin;
                fromPartial(object: Partial<_25.MsgConvertCoin>): _25.MsgConvertCoin;
                fromAmino(object: _25.MsgConvertCoinAmino): _25.MsgConvertCoin;
                toAmino(message: _25.MsgConvertCoin): _25.MsgConvertCoinAmino;
                fromAminoMsg(object: _25.MsgConvertCoinAminoMsg): _25.MsgConvertCoin;
                fromProtoMsg(message: _25.MsgConvertCoinProtoMsg): _25.MsgConvertCoin;
                toProto(message: _25.MsgConvertCoin): Uint8Array;
                toProtoMsg(message: _25.MsgConvertCoin): _25.MsgConvertCoinProtoMsg;
            };
            MsgConvertCoinResponse: {
                typeUrl: string;
                encode(_: _25.MsgConvertCoinResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgConvertCoinResponse;
                fromPartial(_: Partial<_25.MsgConvertCoinResponse>): _25.MsgConvertCoinResponse;
                fromAmino(_: _25.MsgConvertCoinResponseAmino): _25.MsgConvertCoinResponse;
                toAmino(_: _25.MsgConvertCoinResponse): _25.MsgConvertCoinResponseAmino;
                fromAminoMsg(object: _25.MsgConvertCoinResponseAminoMsg): _25.MsgConvertCoinResponse;
                fromProtoMsg(message: _25.MsgConvertCoinResponseProtoMsg): _25.MsgConvertCoinResponse;
                toProto(message: _25.MsgConvertCoinResponse): Uint8Array;
                toProtoMsg(message: _25.MsgConvertCoinResponse): _25.MsgConvertCoinResponseProtoMsg;
            };
            MsgConvertERC20: {
                typeUrl: string;
                encode(message: _25.MsgConvertERC20, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgConvertERC20;
                fromPartial(object: Partial<_25.MsgConvertERC20>): _25.MsgConvertERC20;
                fromAmino(object: _25.MsgConvertERC20Amino): _25.MsgConvertERC20;
                toAmino(message: _25.MsgConvertERC20): _25.MsgConvertERC20Amino;
                fromAminoMsg(object: _25.MsgConvertERC20AminoMsg): _25.MsgConvertERC20;
                fromProtoMsg(message: _25.MsgConvertERC20ProtoMsg): _25.MsgConvertERC20;
                toProto(message: _25.MsgConvertERC20): Uint8Array;
                toProtoMsg(message: _25.MsgConvertERC20): _25.MsgConvertERC20ProtoMsg;
            };
            MsgConvertERC20Response: {
                typeUrl: string;
                encode(_: _25.MsgConvertERC20Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgConvertERC20Response;
                fromPartial(_: Partial<_25.MsgConvertERC20Response>): _25.MsgConvertERC20Response;
                fromAmino(_: _25.MsgConvertERC20ResponseAmino): _25.MsgConvertERC20Response;
                toAmino(_: _25.MsgConvertERC20Response): _25.MsgConvertERC20ResponseAmino;
                fromAminoMsg(object: _25.MsgConvertERC20ResponseAminoMsg): _25.MsgConvertERC20Response;
                fromProtoMsg(message: _25.MsgConvertERC20ResponseProtoMsg): _25.MsgConvertERC20Response;
                toProto(message: _25.MsgConvertERC20Response): Uint8Array;
                toProtoMsg(message: _25.MsgConvertERC20Response): _25.MsgConvertERC20ResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _25.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.MsgUpdateParams;
                fromPartial(object: Partial<_25.MsgUpdateParams>): _25.MsgUpdateParams;
                fromAmino(object: _25.MsgUpdateParamsAmino): _25.MsgUpdateParams;
                toAmino(message: _25.MsgUpdateParams): _25.MsgUpdateParamsAmino;
                fromAminoMsg(object: _25.MsgUpdateParamsAminoMsg): _25.MsgUpdateParams;
                fromProtoMsg(message: _25.MsgUpdateParamsProtoMsg): _25.MsgUpdateParams;
                toProto(message: _25.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateParams): _25.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _25.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _25.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_25.MsgUpdateParamsResponse>): _25.MsgUpdateParamsResponse;
                fromAmino(_: _25.MsgUpdateParamsResponseAmino): _25.MsgUpdateParamsResponse;
                toAmino(_: _25.MsgUpdateParamsResponse): _25.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _25.MsgUpdateParamsResponseAminoMsg): _25.MsgUpdateParamsResponse;
                fromProtoMsg(message: _25.MsgUpdateParamsResponseProtoMsg): _25.MsgUpdateParamsResponse;
                toProto(message: _25.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateParamsResponse): _25.MsgUpdateParamsResponseProtoMsg;
            };
            QueryTokenPairsRequest: {
                typeUrl: string;
                encode(message: _24.QueryTokenPairsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryTokenPairsRequest;
                fromPartial(object: Partial<_24.QueryTokenPairsRequest>): _24.QueryTokenPairsRequest;
                fromAmino(object: _24.QueryTokenPairsRequestAmino): _24.QueryTokenPairsRequest;
                toAmino(message: _24.QueryTokenPairsRequest): _24.QueryTokenPairsRequestAmino;
                fromAminoMsg(object: _24.QueryTokenPairsRequestAminoMsg): _24.QueryTokenPairsRequest;
                fromProtoMsg(message: _24.QueryTokenPairsRequestProtoMsg): _24.QueryTokenPairsRequest;
                toProto(message: _24.QueryTokenPairsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryTokenPairsRequest): _24.QueryTokenPairsRequestProtoMsg;
            };
            QueryTokenPairsResponse: {
                typeUrl: string;
                encode(message: _24.QueryTokenPairsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryTokenPairsResponse;
                fromPartial(object: Partial<_24.QueryTokenPairsResponse>): _24.QueryTokenPairsResponse;
                fromAmino(object: _24.QueryTokenPairsResponseAmino): _24.QueryTokenPairsResponse;
                toAmino(message: _24.QueryTokenPairsResponse): _24.QueryTokenPairsResponseAmino;
                fromAminoMsg(object: _24.QueryTokenPairsResponseAminoMsg): _24.QueryTokenPairsResponse;
                fromProtoMsg(message: _24.QueryTokenPairsResponseProtoMsg): _24.QueryTokenPairsResponse;
                toProto(message: _24.QueryTokenPairsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryTokenPairsResponse): _24.QueryTokenPairsResponseProtoMsg;
            };
            QueryTokenPairRequest: {
                typeUrl: string;
                encode(message: _24.QueryTokenPairRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryTokenPairRequest;
                fromPartial(object: Partial<_24.QueryTokenPairRequest>): _24.QueryTokenPairRequest;
                fromAmino(object: _24.QueryTokenPairRequestAmino): _24.QueryTokenPairRequest;
                toAmino(message: _24.QueryTokenPairRequest): _24.QueryTokenPairRequestAmino;
                fromAminoMsg(object: _24.QueryTokenPairRequestAminoMsg): _24.QueryTokenPairRequest;
                fromProtoMsg(message: _24.QueryTokenPairRequestProtoMsg): _24.QueryTokenPairRequest;
                toProto(message: _24.QueryTokenPairRequest): Uint8Array;
                toProtoMsg(message: _24.QueryTokenPairRequest): _24.QueryTokenPairRequestProtoMsg;
            };
            QueryTokenPairResponse: {
                typeUrl: string;
                encode(message: _24.QueryTokenPairResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryTokenPairResponse;
                fromPartial(object: Partial<_24.QueryTokenPairResponse>): _24.QueryTokenPairResponse;
                fromAmino(object: _24.QueryTokenPairResponseAmino): _24.QueryTokenPairResponse;
                toAmino(message: _24.QueryTokenPairResponse): _24.QueryTokenPairResponseAmino;
                fromAminoMsg(object: _24.QueryTokenPairResponseAminoMsg): _24.QueryTokenPairResponse;
                fromProtoMsg(message: _24.QueryTokenPairResponseProtoMsg): _24.QueryTokenPairResponse;
                toProto(message: _24.QueryTokenPairResponse): Uint8Array;
                toProtoMsg(message: _24.QueryTokenPairResponse): _24.QueryTokenPairResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _24.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.QueryParamsRequest;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
                fromAmino(_: _24.QueryParamsRequestAmino): _24.QueryParamsRequest;
                toAmino(_: _24.QueryParamsRequest): _24.QueryParamsRequestAmino;
                fromAminoMsg(object: _24.QueryParamsRequestAminoMsg): _24.QueryParamsRequest;
                fromProtoMsg(message: _24.QueryParamsRequestProtoMsg): _24.QueryParamsRequest;
                toProto(message: _24.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _24.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
                fromAmino(object: _24.QueryParamsResponseAmino): _24.QueryParamsResponse;
                toAmino(message: _24.QueryParamsResponse): _24.QueryParamsResponseAmino;
                fromAminoMsg(object: _24.QueryParamsResponseAminoMsg): _24.QueryParamsResponse;
                fromProtoMsg(message: _24.QueryParamsResponseProtoMsg): _24.QueryParamsResponse;
                toProto(message: _24.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _23.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.GenesisState;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
                fromAmino(object: _23.GenesisStateAmino): _23.GenesisState;
                toAmino(message: _23.GenesisState): _23.GenesisStateAmino;
                fromAminoMsg(object: _23.GenesisStateAminoMsg): _23.GenesisState;
                fromProtoMsg(message: _23.GenesisStateProtoMsg): _23.GenesisState;
                toProto(message: _23.GenesisState): Uint8Array;
                toProtoMsg(message: _23.GenesisState): _23.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _23.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
                fromAmino(object: _23.ParamsAmino): _23.Params;
                toAmino(message: _23.Params): _23.ParamsAmino;
                fromAminoMsg(object: _23.ParamsAminoMsg): _23.Params;
                fromProtoMsg(message: _23.ParamsProtoMsg): _23.Params;
                toProto(message: _23.Params): Uint8Array;
                toProtoMsg(message: _23.Params): _23.ParamsProtoMsg;
            };
            EventRegisterPair: {
                typeUrl: string;
                encode(message: _22.EventRegisterPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.EventRegisterPair;
                fromPartial(object: Partial<_22.EventRegisterPair>): _22.EventRegisterPair;
                fromAmino(object: _22.EventRegisterPairAmino): _22.EventRegisterPair;
                toAmino(message: _22.EventRegisterPair): _22.EventRegisterPairAmino;
                fromAminoMsg(object: _22.EventRegisterPairAminoMsg): _22.EventRegisterPair;
                fromProtoMsg(message: _22.EventRegisterPairProtoMsg): _22.EventRegisterPair;
                toProto(message: _22.EventRegisterPair): Uint8Array;
                toProtoMsg(message: _22.EventRegisterPair): _22.EventRegisterPairProtoMsg;
            };
            EventToggleTokenConversion: {
                typeUrl: string;
                encode(message: _22.EventToggleTokenConversion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.EventToggleTokenConversion;
                fromPartial(object: Partial<_22.EventToggleTokenConversion>): _22.EventToggleTokenConversion;
                fromAmino(object: _22.EventToggleTokenConversionAmino): _22.EventToggleTokenConversion;
                toAmino(message: _22.EventToggleTokenConversion): _22.EventToggleTokenConversionAmino;
                fromAminoMsg(object: _22.EventToggleTokenConversionAminoMsg): _22.EventToggleTokenConversion;
                fromProtoMsg(message: _22.EventToggleTokenConversionProtoMsg): _22.EventToggleTokenConversion;
                toProto(message: _22.EventToggleTokenConversion): Uint8Array;
                toProtoMsg(message: _22.EventToggleTokenConversion): _22.EventToggleTokenConversionProtoMsg;
            };
            EventConvertCoin: {
                typeUrl: string;
                encode(message: _22.EventConvertCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.EventConvertCoin;
                fromPartial(object: Partial<_22.EventConvertCoin>): _22.EventConvertCoin;
                fromAmino(object: _22.EventConvertCoinAmino): _22.EventConvertCoin;
                toAmino(message: _22.EventConvertCoin): _22.EventConvertCoinAmino;
                fromAminoMsg(object: _22.EventConvertCoinAminoMsg): _22.EventConvertCoin;
                fromProtoMsg(message: _22.EventConvertCoinProtoMsg): _22.EventConvertCoin;
                toProto(message: _22.EventConvertCoin): Uint8Array;
                toProtoMsg(message: _22.EventConvertCoin): _22.EventConvertCoinProtoMsg;
            };
            EventConvertERC20: {
                typeUrl: string;
                encode(message: _22.EventConvertERC20, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.EventConvertERC20;
                fromPartial(object: Partial<_22.EventConvertERC20>): _22.EventConvertERC20;
                fromAmino(object: _22.EventConvertERC20Amino): _22.EventConvertERC20;
                toAmino(message: _22.EventConvertERC20): _22.EventConvertERC20Amino;
                fromAminoMsg(object: _22.EventConvertERC20AminoMsg): _22.EventConvertERC20;
                fromProtoMsg(message: _22.EventConvertERC20ProtoMsg): _22.EventConvertERC20;
                toProto(message: _22.EventConvertERC20): Uint8Array;
                toProtoMsg(message: _22.EventConvertERC20): _22.EventConvertERC20ProtoMsg;
            };
            ownerFromJSON(object: any): _21.Owner;
            ownerToJSON(object: _21.Owner): string;
            Owner: typeof _21.Owner;
            OwnerSDKType: typeof _21.Owner;
            OwnerAmino: typeof _21.Owner;
            TokenPair: {
                typeUrl: string;
                encode(message: _21.TokenPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.TokenPair;
                fromPartial(object: Partial<_21.TokenPair>): _21.TokenPair;
                fromAmino(object: _21.TokenPairAmino): _21.TokenPair;
                toAmino(message: _21.TokenPair): _21.TokenPairAmino;
                fromAminoMsg(object: _21.TokenPairAminoMsg): _21.TokenPair;
                fromProtoMsg(message: _21.TokenPairProtoMsg): _21.TokenPair;
                toProto(message: _21.TokenPair): Uint8Array;
                toProtoMsg(message: _21.TokenPair): _21.TokenPairProtoMsg;
            };
            RegisterCoinProposal: {
                typeUrl: string;
                encode(message: _21.RegisterCoinProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.RegisterCoinProposal;
                fromPartial(object: Partial<_21.RegisterCoinProposal>): _21.RegisterCoinProposal;
                fromAmino(object: _21.RegisterCoinProposalAmino): _21.RegisterCoinProposal;
                toAmino(message: _21.RegisterCoinProposal): _21.RegisterCoinProposalAmino;
                fromAminoMsg(object: _21.RegisterCoinProposalAminoMsg): _21.RegisterCoinProposal;
                fromProtoMsg(message: _21.RegisterCoinProposalProtoMsg): _21.RegisterCoinProposal;
                toProto(message: _21.RegisterCoinProposal): Uint8Array;
                toProtoMsg(message: _21.RegisterCoinProposal): _21.RegisterCoinProposalProtoMsg;
            };
            RegisterERC20Proposal: {
                typeUrl: string;
                encode(message: _21.RegisterERC20Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.RegisterERC20Proposal;
                fromPartial(object: Partial<_21.RegisterERC20Proposal>): _21.RegisterERC20Proposal;
                fromAmino(object: _21.RegisterERC20ProposalAmino): _21.RegisterERC20Proposal;
                toAmino(message: _21.RegisterERC20Proposal): _21.RegisterERC20ProposalAmino;
                fromAminoMsg(object: _21.RegisterERC20ProposalAminoMsg): _21.RegisterERC20Proposal;
                fromProtoMsg(message: _21.RegisterERC20ProposalProtoMsg): _21.RegisterERC20Proposal;
                toProto(message: _21.RegisterERC20Proposal): Uint8Array;
                toProtoMsg(message: _21.RegisterERC20Proposal): _21.RegisterERC20ProposalProtoMsg;
            };
            ToggleTokenConversionProposal: {
                typeUrl: string;
                encode(message: _21.ToggleTokenConversionProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ToggleTokenConversionProposal;
                fromPartial(object: Partial<_21.ToggleTokenConversionProposal>): _21.ToggleTokenConversionProposal;
                fromAmino(object: _21.ToggleTokenConversionProposalAmino): _21.ToggleTokenConversionProposal;
                toAmino(message: _21.ToggleTokenConversionProposal): _21.ToggleTokenConversionProposalAmino;
                fromAminoMsg(object: _21.ToggleTokenConversionProposalAminoMsg): _21.ToggleTokenConversionProposal;
                fromProtoMsg(message: _21.ToggleTokenConversionProposalProtoMsg): _21.ToggleTokenConversionProposal;
                toProto(message: _21.ToggleTokenConversionProposal): Uint8Array;
                toProtoMsg(message: _21.ToggleTokenConversionProposal): _21.ToggleTokenConversionProposalProtoMsg;
            };
            ProposalMetadata: {
                typeUrl: string;
                encode(message: _21.ProposalMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.ProposalMetadata;
                fromPartial(object: Partial<_21.ProposalMetadata>): _21.ProposalMetadata;
                fromAmino(object: _21.ProposalMetadataAmino): _21.ProposalMetadata;
                toAmino(message: _21.ProposalMetadata): _21.ProposalMetadataAmino;
                fromAminoMsg(object: _21.ProposalMetadataAminoMsg): _21.ProposalMetadata;
                fromProtoMsg(message: _21.ProposalMetadataProtoMsg): _21.ProposalMetadata;
                toProto(message: _21.ProposalMetadata): Uint8Array;
                toProtoMsg(message: _21.ProposalMetadata): _21.ProposalMetadataProtoMsg;
            };
        };
    }
    namespace incentives {
        const v1: {
            MsgClientImpl: typeof _204.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                incentives(request?: _28.QueryIncentivesRequest): Promise<_28.QueryIncentivesResponse>;
                incentive(request: _28.QueryIncentiveRequest): Promise<_28.QueryIncentiveResponse>;
                gasMeters(request: _28.QueryGasMetersRequest): Promise<_28.QueryGasMetersResponse>;
                gasMeter(request: _28.QueryGasMeterRequest): Promise<_28.QueryGasMeterResponse>;
                allocationMeters(request?: _28.QueryAllocationMetersRequest): Promise<_28.QueryAllocationMetersResponse>;
                allocationMeter(request: _28.QueryAllocationMeterRequest): Promise<_28.QueryAllocationMeterResponse>;
                params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _29.MsgUpdateParams): {
                        typeUrl: string;
                        value: _29.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.incentives.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _29.MsgUpdateParams) => _29.MsgUpdateParamsAmino;
                    fromAmino: (object: _29.MsgUpdateParamsAmino) => _29.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _29.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.MsgUpdateParams;
                fromPartial(object: Partial<_29.MsgUpdateParams>): _29.MsgUpdateParams;
                fromAmino(object: _29.MsgUpdateParamsAmino): _29.MsgUpdateParams;
                toAmino(message: _29.MsgUpdateParams): _29.MsgUpdateParamsAmino;
                fromAminoMsg(object: _29.MsgUpdateParamsAminoMsg): _29.MsgUpdateParams;
                fromProtoMsg(message: _29.MsgUpdateParamsProtoMsg): _29.MsgUpdateParams;
                toProto(message: _29.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateParams): _29.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _29.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _29.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_29.MsgUpdateParamsResponse>): _29.MsgUpdateParamsResponse;
                fromAmino(_: _29.MsgUpdateParamsResponseAmino): _29.MsgUpdateParamsResponse;
                toAmino(_: _29.MsgUpdateParamsResponse): _29.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _29.MsgUpdateParamsResponseAminoMsg): _29.MsgUpdateParamsResponse;
                fromProtoMsg(message: _29.MsgUpdateParamsResponseProtoMsg): _29.MsgUpdateParamsResponse;
                toProto(message: _29.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _29.MsgUpdateParamsResponse): _29.MsgUpdateParamsResponseProtoMsg;
            };
            QueryIncentivesRequest: {
                typeUrl: string;
                encode(message: _28.QueryIncentivesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryIncentivesRequest;
                fromPartial(object: Partial<_28.QueryIncentivesRequest>): _28.QueryIncentivesRequest;
                fromAmino(object: _28.QueryIncentivesRequestAmino): _28.QueryIncentivesRequest;
                toAmino(message: _28.QueryIncentivesRequest): _28.QueryIncentivesRequestAmino;
                fromAminoMsg(object: _28.QueryIncentivesRequestAminoMsg): _28.QueryIncentivesRequest;
                fromProtoMsg(message: _28.QueryIncentivesRequestProtoMsg): _28.QueryIncentivesRequest;
                toProto(message: _28.QueryIncentivesRequest): Uint8Array;
                toProtoMsg(message: _28.QueryIncentivesRequest): _28.QueryIncentivesRequestProtoMsg;
            };
            QueryIncentivesResponse: {
                typeUrl: string;
                encode(message: _28.QueryIncentivesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryIncentivesResponse;
                fromPartial(object: Partial<_28.QueryIncentivesResponse>): _28.QueryIncentivesResponse;
                fromAmino(object: _28.QueryIncentivesResponseAmino): _28.QueryIncentivesResponse;
                toAmino(message: _28.QueryIncentivesResponse): _28.QueryIncentivesResponseAmino;
                fromAminoMsg(object: _28.QueryIncentivesResponseAminoMsg): _28.QueryIncentivesResponse;
                fromProtoMsg(message: _28.QueryIncentivesResponseProtoMsg): _28.QueryIncentivesResponse;
                toProto(message: _28.QueryIncentivesResponse): Uint8Array;
                toProtoMsg(message: _28.QueryIncentivesResponse): _28.QueryIncentivesResponseProtoMsg;
            };
            QueryIncentiveRequest: {
                typeUrl: string;
                encode(message: _28.QueryIncentiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryIncentiveRequest;
                fromPartial(object: Partial<_28.QueryIncentiveRequest>): _28.QueryIncentiveRequest;
                fromAmino(object: _28.QueryIncentiveRequestAmino): _28.QueryIncentiveRequest;
                toAmino(message: _28.QueryIncentiveRequest): _28.QueryIncentiveRequestAmino;
                fromAminoMsg(object: _28.QueryIncentiveRequestAminoMsg): _28.QueryIncentiveRequest;
                fromProtoMsg(message: _28.QueryIncentiveRequestProtoMsg): _28.QueryIncentiveRequest;
                toProto(message: _28.QueryIncentiveRequest): Uint8Array;
                toProtoMsg(message: _28.QueryIncentiveRequest): _28.QueryIncentiveRequestProtoMsg;
            };
            QueryIncentiveResponse: {
                typeUrl: string;
                encode(message: _28.QueryIncentiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryIncentiveResponse;
                fromPartial(object: Partial<_28.QueryIncentiveResponse>): _28.QueryIncentiveResponse;
                fromAmino(object: _28.QueryIncentiveResponseAmino): _28.QueryIncentiveResponse;
                toAmino(message: _28.QueryIncentiveResponse): _28.QueryIncentiveResponseAmino;
                fromAminoMsg(object: _28.QueryIncentiveResponseAminoMsg): _28.QueryIncentiveResponse;
                fromProtoMsg(message: _28.QueryIncentiveResponseProtoMsg): _28.QueryIncentiveResponse;
                toProto(message: _28.QueryIncentiveResponse): Uint8Array;
                toProtoMsg(message: _28.QueryIncentiveResponse): _28.QueryIncentiveResponseProtoMsg;
            };
            QueryGasMetersRequest: {
                typeUrl: string;
                encode(message: _28.QueryGasMetersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGasMetersRequest;
                fromPartial(object: Partial<_28.QueryGasMetersRequest>): _28.QueryGasMetersRequest;
                fromAmino(object: _28.QueryGasMetersRequestAmino): _28.QueryGasMetersRequest;
                toAmino(message: _28.QueryGasMetersRequest): _28.QueryGasMetersRequestAmino;
                fromAminoMsg(object: _28.QueryGasMetersRequestAminoMsg): _28.QueryGasMetersRequest;
                fromProtoMsg(message: _28.QueryGasMetersRequestProtoMsg): _28.QueryGasMetersRequest;
                toProto(message: _28.QueryGasMetersRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGasMetersRequest): _28.QueryGasMetersRequestProtoMsg;
            };
            QueryGasMetersResponse: {
                typeUrl: string;
                encode(message: _28.QueryGasMetersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGasMetersResponse;
                fromPartial(object: Partial<_28.QueryGasMetersResponse>): _28.QueryGasMetersResponse;
                fromAmino(object: _28.QueryGasMetersResponseAmino): _28.QueryGasMetersResponse;
                toAmino(message: _28.QueryGasMetersResponse): _28.QueryGasMetersResponseAmino;
                fromAminoMsg(object: _28.QueryGasMetersResponseAminoMsg): _28.QueryGasMetersResponse;
                fromProtoMsg(message: _28.QueryGasMetersResponseProtoMsg): _28.QueryGasMetersResponse;
                toProto(message: _28.QueryGasMetersResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGasMetersResponse): _28.QueryGasMetersResponseProtoMsg;
            };
            QueryGasMeterRequest: {
                typeUrl: string;
                encode(message: _28.QueryGasMeterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGasMeterRequest;
                fromPartial(object: Partial<_28.QueryGasMeterRequest>): _28.QueryGasMeterRequest;
                fromAmino(object: _28.QueryGasMeterRequestAmino): _28.QueryGasMeterRequest;
                toAmino(message: _28.QueryGasMeterRequest): _28.QueryGasMeterRequestAmino;
                fromAminoMsg(object: _28.QueryGasMeterRequestAminoMsg): _28.QueryGasMeterRequest;
                fromProtoMsg(message: _28.QueryGasMeterRequestProtoMsg): _28.QueryGasMeterRequest;
                toProto(message: _28.QueryGasMeterRequest): Uint8Array;
                toProtoMsg(message: _28.QueryGasMeterRequest): _28.QueryGasMeterRequestProtoMsg;
            };
            QueryGasMeterResponse: {
                typeUrl: string;
                encode(message: _28.QueryGasMeterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryGasMeterResponse;
                fromPartial(object: Partial<_28.QueryGasMeterResponse>): _28.QueryGasMeterResponse;
                fromAmino(object: _28.QueryGasMeterResponseAmino): _28.QueryGasMeterResponse;
                toAmino(message: _28.QueryGasMeterResponse): _28.QueryGasMeterResponseAmino;
                fromAminoMsg(object: _28.QueryGasMeterResponseAminoMsg): _28.QueryGasMeterResponse;
                fromProtoMsg(message: _28.QueryGasMeterResponseProtoMsg): _28.QueryGasMeterResponse;
                toProto(message: _28.QueryGasMeterResponse): Uint8Array;
                toProtoMsg(message: _28.QueryGasMeterResponse): _28.QueryGasMeterResponseProtoMsg;
            };
            QueryAllocationMetersRequest: {
                typeUrl: string;
                encode(message: _28.QueryAllocationMetersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryAllocationMetersRequest;
                fromPartial(object: Partial<_28.QueryAllocationMetersRequest>): _28.QueryAllocationMetersRequest;
                fromAmino(object: _28.QueryAllocationMetersRequestAmino): _28.QueryAllocationMetersRequest;
                toAmino(message: _28.QueryAllocationMetersRequest): _28.QueryAllocationMetersRequestAmino;
                fromAminoMsg(object: _28.QueryAllocationMetersRequestAminoMsg): _28.QueryAllocationMetersRequest;
                fromProtoMsg(message: _28.QueryAllocationMetersRequestProtoMsg): _28.QueryAllocationMetersRequest;
                toProto(message: _28.QueryAllocationMetersRequest): Uint8Array;
                toProtoMsg(message: _28.QueryAllocationMetersRequest): _28.QueryAllocationMetersRequestProtoMsg;
            };
            QueryAllocationMetersResponse: {
                typeUrl: string;
                encode(message: _28.QueryAllocationMetersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryAllocationMetersResponse;
                fromPartial(object: Partial<_28.QueryAllocationMetersResponse>): _28.QueryAllocationMetersResponse;
                fromAmino(object: _28.QueryAllocationMetersResponseAmino): _28.QueryAllocationMetersResponse;
                toAmino(message: _28.QueryAllocationMetersResponse): _28.QueryAllocationMetersResponseAmino;
                fromAminoMsg(object: _28.QueryAllocationMetersResponseAminoMsg): _28.QueryAllocationMetersResponse;
                fromProtoMsg(message: _28.QueryAllocationMetersResponseProtoMsg): _28.QueryAllocationMetersResponse;
                toProto(message: _28.QueryAllocationMetersResponse): Uint8Array;
                toProtoMsg(message: _28.QueryAllocationMetersResponse): _28.QueryAllocationMetersResponseProtoMsg;
            };
            QueryAllocationMeterRequest: {
                typeUrl: string;
                encode(message: _28.QueryAllocationMeterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryAllocationMeterRequest;
                fromPartial(object: Partial<_28.QueryAllocationMeterRequest>): _28.QueryAllocationMeterRequest;
                fromAmino(object: _28.QueryAllocationMeterRequestAmino): _28.QueryAllocationMeterRequest;
                toAmino(message: _28.QueryAllocationMeterRequest): _28.QueryAllocationMeterRequestAmino;
                fromAminoMsg(object: _28.QueryAllocationMeterRequestAminoMsg): _28.QueryAllocationMeterRequest;
                fromProtoMsg(message: _28.QueryAllocationMeterRequestProtoMsg): _28.QueryAllocationMeterRequest;
                toProto(message: _28.QueryAllocationMeterRequest): Uint8Array;
                toProtoMsg(message: _28.QueryAllocationMeterRequest): _28.QueryAllocationMeterRequestProtoMsg;
            };
            QueryAllocationMeterResponse: {
                typeUrl: string;
                encode(message: _28.QueryAllocationMeterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryAllocationMeterResponse;
                fromPartial(object: Partial<_28.QueryAllocationMeterResponse>): _28.QueryAllocationMeterResponse;
                fromAmino(object: _28.QueryAllocationMeterResponseAmino): _28.QueryAllocationMeterResponse;
                toAmino(message: _28.QueryAllocationMeterResponse): _28.QueryAllocationMeterResponseAmino;
                fromAminoMsg(object: _28.QueryAllocationMeterResponseAminoMsg): _28.QueryAllocationMeterResponse;
                fromProtoMsg(message: _28.QueryAllocationMeterResponseProtoMsg): _28.QueryAllocationMeterResponse;
                toProto(message: _28.QueryAllocationMeterResponse): Uint8Array;
                toProtoMsg(message: _28.QueryAllocationMeterResponse): _28.QueryAllocationMeterResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _28.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.QueryParamsRequest;
                fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
                fromAmino(_: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(_: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _28.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            Incentive: {
                typeUrl: string;
                encode(message: _27.Incentive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Incentive;
                fromPartial(object: Partial<_27.Incentive>): _27.Incentive;
                fromAmino(object: _27.IncentiveAmino): _27.Incentive;
                toAmino(message: _27.Incentive): _27.IncentiveAmino;
                fromAminoMsg(object: _27.IncentiveAminoMsg): _27.Incentive;
                fromProtoMsg(message: _27.IncentiveProtoMsg): _27.Incentive;
                toProto(message: _27.Incentive): Uint8Array;
                toProtoMsg(message: _27.Incentive): _27.IncentiveProtoMsg;
            };
            GasMeter: {
                typeUrl: string;
                encode(message: _27.GasMeter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.GasMeter;
                fromPartial(object: Partial<_27.GasMeter>): _27.GasMeter;
                fromAmino(object: _27.GasMeterAmino): _27.GasMeter;
                toAmino(message: _27.GasMeter): _27.GasMeterAmino;
                fromAminoMsg(object: _27.GasMeterAminoMsg): _27.GasMeter;
                fromProtoMsg(message: _27.GasMeterProtoMsg): _27.GasMeter;
                toProto(message: _27.GasMeter): Uint8Array;
                toProtoMsg(message: _27.GasMeter): _27.GasMeterProtoMsg;
            };
            RegisterIncentiveProposal: {
                typeUrl: string;
                encode(message: _27.RegisterIncentiveProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.RegisterIncentiveProposal;
                fromPartial(object: Partial<_27.RegisterIncentiveProposal>): _27.RegisterIncentiveProposal;
                fromAmino(object: _27.RegisterIncentiveProposalAmino): _27.RegisterIncentiveProposal;
                toAmino(message: _27.RegisterIncentiveProposal): _27.RegisterIncentiveProposalAmino;
                fromAminoMsg(object: _27.RegisterIncentiveProposalAminoMsg): _27.RegisterIncentiveProposal;
                fromProtoMsg(message: _27.RegisterIncentiveProposalProtoMsg): _27.RegisterIncentiveProposal;
                toProto(message: _27.RegisterIncentiveProposal): Uint8Array;
                toProtoMsg(message: _27.RegisterIncentiveProposal): _27.RegisterIncentiveProposalProtoMsg;
            };
            CancelIncentiveProposal: {
                typeUrl: string;
                encode(message: _27.CancelIncentiveProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.CancelIncentiveProposal;
                fromPartial(object: Partial<_27.CancelIncentiveProposal>): _27.CancelIncentiveProposal;
                fromAmino(object: _27.CancelIncentiveProposalAmino): _27.CancelIncentiveProposal;
                toAmino(message: _27.CancelIncentiveProposal): _27.CancelIncentiveProposalAmino;
                fromAminoMsg(object: _27.CancelIncentiveProposalAminoMsg): _27.CancelIncentiveProposal;
                fromProtoMsg(message: _27.CancelIncentiveProposalProtoMsg): _27.CancelIncentiveProposal;
                toProto(message: _27.CancelIncentiveProposal): Uint8Array;
                toProtoMsg(message: _27.CancelIncentiveProposal): _27.CancelIncentiveProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _26.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
                fromAmino(object: _26.GenesisStateAmino): _26.GenesisState;
                toAmino(message: _26.GenesisState): _26.GenesisStateAmino;
                fromAminoMsg(object: _26.GenesisStateAminoMsg): _26.GenesisState;
                fromProtoMsg(message: _26.GenesisStateProtoMsg): _26.GenesisState;
                toProto(message: _26.GenesisState): Uint8Array;
                toProtoMsg(message: _26.GenesisState): _26.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _26.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Params;
                fromPartial(object: Partial<_26.Params>): _26.Params;
                fromAmino(object: _26.ParamsAmino): _26.Params;
                toAmino(message: _26.Params): _26.ParamsAmino;
                fromAminoMsg(object: _26.ParamsAminoMsg): _26.Params;
                fromProtoMsg(message: _26.ParamsProtoMsg): _26.Params;
                toProto(message: _26.Params): Uint8Array;
                toProtoMsg(message: _26.Params): _26.ParamsProtoMsg;
            };
        };
    }
    namespace inflation {
        const v1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                period(request?: _32.QueryPeriodRequest): Promise<_32.QueryPeriodResponse>;
                epochMintProvision(request?: _32.QueryEpochMintProvisionRequest): Promise<_32.QueryEpochMintProvisionResponse>;
                skippedEpochs(request?: _32.QuerySkippedEpochsRequest): Promise<_32.QuerySkippedEpochsResponse>;
                circulatingSupply(request?: _32.QueryCirculatingSupplyRequest): Promise<_32.QueryCirculatingSupplyResponse>;
                inflationRate(request?: _32.QueryInflationRateRequest): Promise<_32.QueryInflationRateResponse>;
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
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
                "/evmos.inflation.v1.MsgUpdateParams": {
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
            QueryPeriodRequest: {
                typeUrl: string;
                encode(_: _32.QueryPeriodRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.QueryPeriodRequest;
                fromPartial(_: Partial<_32.QueryPeriodRequest>): _32.QueryPeriodRequest;
                fromAmino(_: _32.QueryPeriodRequestAmino): _32.QueryPeriodRequest;
                toAmino(_: _32.QueryPeriodRequest): _32.QueryPeriodRequestAmino;
                fromAminoMsg(object: _32.QueryPeriodRequestAminoMsg): _32.QueryPeriodRequest;
                fromProtoMsg(message: _32.QueryPeriodRequestProtoMsg): _32.QueryPeriodRequest;
                toProto(message: _32.QueryPeriodRequest): Uint8Array;
                toProtoMsg(message: _32.QueryPeriodRequest): _32.QueryPeriodRequestProtoMsg;
            };
            QueryPeriodResponse: {
                typeUrl: string;
                encode(message: _32.QueryPeriodResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryPeriodResponse;
                fromPartial(object: Partial<_32.QueryPeriodResponse>): _32.QueryPeriodResponse;
                fromAmino(object: _32.QueryPeriodResponseAmino): _32.QueryPeriodResponse;
                toAmino(message: _32.QueryPeriodResponse): _32.QueryPeriodResponseAmino;
                fromAminoMsg(object: _32.QueryPeriodResponseAminoMsg): _32.QueryPeriodResponse;
                fromProtoMsg(message: _32.QueryPeriodResponseProtoMsg): _32.QueryPeriodResponse;
                toProto(message: _32.QueryPeriodResponse): Uint8Array;
                toProtoMsg(message: _32.QueryPeriodResponse): _32.QueryPeriodResponseProtoMsg;
            };
            QueryEpochMintProvisionRequest: {
                typeUrl: string;
                encode(_: _32.QueryEpochMintProvisionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.QueryEpochMintProvisionRequest;
                fromPartial(_: Partial<_32.QueryEpochMintProvisionRequest>): _32.QueryEpochMintProvisionRequest;
                fromAmino(_: _32.QueryEpochMintProvisionRequestAmino): _32.QueryEpochMintProvisionRequest;
                toAmino(_: _32.QueryEpochMintProvisionRequest): _32.QueryEpochMintProvisionRequestAmino;
                fromAminoMsg(object: _32.QueryEpochMintProvisionRequestAminoMsg): _32.QueryEpochMintProvisionRequest;
                fromProtoMsg(message: _32.QueryEpochMintProvisionRequestProtoMsg): _32.QueryEpochMintProvisionRequest;
                toProto(message: _32.QueryEpochMintProvisionRequest): Uint8Array;
                toProtoMsg(message: _32.QueryEpochMintProvisionRequest): _32.QueryEpochMintProvisionRequestProtoMsg;
            };
            QueryEpochMintProvisionResponse: {
                typeUrl: string;
                encode(message: _32.QueryEpochMintProvisionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryEpochMintProvisionResponse;
                fromPartial(object: Partial<_32.QueryEpochMintProvisionResponse>): _32.QueryEpochMintProvisionResponse;
                fromAmino(object: _32.QueryEpochMintProvisionResponseAmino): _32.QueryEpochMintProvisionResponse;
                toAmino(message: _32.QueryEpochMintProvisionResponse): _32.QueryEpochMintProvisionResponseAmino;
                fromAminoMsg(object: _32.QueryEpochMintProvisionResponseAminoMsg): _32.QueryEpochMintProvisionResponse;
                fromProtoMsg(message: _32.QueryEpochMintProvisionResponseProtoMsg): _32.QueryEpochMintProvisionResponse;
                toProto(message: _32.QueryEpochMintProvisionResponse): Uint8Array;
                toProtoMsg(message: _32.QueryEpochMintProvisionResponse): _32.QueryEpochMintProvisionResponseProtoMsg;
            };
            QuerySkippedEpochsRequest: {
                typeUrl: string;
                encode(_: _32.QuerySkippedEpochsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.QuerySkippedEpochsRequest;
                fromPartial(_: Partial<_32.QuerySkippedEpochsRequest>): _32.QuerySkippedEpochsRequest;
                fromAmino(_: _32.QuerySkippedEpochsRequestAmino): _32.QuerySkippedEpochsRequest;
                toAmino(_: _32.QuerySkippedEpochsRequest): _32.QuerySkippedEpochsRequestAmino;
                fromAminoMsg(object: _32.QuerySkippedEpochsRequestAminoMsg): _32.QuerySkippedEpochsRequest;
                fromProtoMsg(message: _32.QuerySkippedEpochsRequestProtoMsg): _32.QuerySkippedEpochsRequest;
                toProto(message: _32.QuerySkippedEpochsRequest): Uint8Array;
                toProtoMsg(message: _32.QuerySkippedEpochsRequest): _32.QuerySkippedEpochsRequestProtoMsg;
            };
            QuerySkippedEpochsResponse: {
                typeUrl: string;
                encode(message: _32.QuerySkippedEpochsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QuerySkippedEpochsResponse;
                fromPartial(object: Partial<_32.QuerySkippedEpochsResponse>): _32.QuerySkippedEpochsResponse;
                fromAmino(object: _32.QuerySkippedEpochsResponseAmino): _32.QuerySkippedEpochsResponse;
                toAmino(message: _32.QuerySkippedEpochsResponse): _32.QuerySkippedEpochsResponseAmino;
                fromAminoMsg(object: _32.QuerySkippedEpochsResponseAminoMsg): _32.QuerySkippedEpochsResponse;
                fromProtoMsg(message: _32.QuerySkippedEpochsResponseProtoMsg): _32.QuerySkippedEpochsResponse;
                toProto(message: _32.QuerySkippedEpochsResponse): Uint8Array;
                toProtoMsg(message: _32.QuerySkippedEpochsResponse): _32.QuerySkippedEpochsResponseProtoMsg;
            };
            QueryCirculatingSupplyRequest: {
                typeUrl: string;
                encode(_: _32.QueryCirculatingSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.QueryCirculatingSupplyRequest;
                fromPartial(_: Partial<_32.QueryCirculatingSupplyRequest>): _32.QueryCirculatingSupplyRequest;
                fromAmino(_: _32.QueryCirculatingSupplyRequestAmino): _32.QueryCirculatingSupplyRequest;
                toAmino(_: _32.QueryCirculatingSupplyRequest): _32.QueryCirculatingSupplyRequestAmino;
                fromAminoMsg(object: _32.QueryCirculatingSupplyRequestAminoMsg): _32.QueryCirculatingSupplyRequest;
                fromProtoMsg(message: _32.QueryCirculatingSupplyRequestProtoMsg): _32.QueryCirculatingSupplyRequest;
                toProto(message: _32.QueryCirculatingSupplyRequest): Uint8Array;
                toProtoMsg(message: _32.QueryCirculatingSupplyRequest): _32.QueryCirculatingSupplyRequestProtoMsg;
            };
            QueryCirculatingSupplyResponse: {
                typeUrl: string;
                encode(message: _32.QueryCirculatingSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryCirculatingSupplyResponse;
                fromPartial(object: Partial<_32.QueryCirculatingSupplyResponse>): _32.QueryCirculatingSupplyResponse;
                fromAmino(object: _32.QueryCirculatingSupplyResponseAmino): _32.QueryCirculatingSupplyResponse;
                toAmino(message: _32.QueryCirculatingSupplyResponse): _32.QueryCirculatingSupplyResponseAmino;
                fromAminoMsg(object: _32.QueryCirculatingSupplyResponseAminoMsg): _32.QueryCirculatingSupplyResponse;
                fromProtoMsg(message: _32.QueryCirculatingSupplyResponseProtoMsg): _32.QueryCirculatingSupplyResponse;
                toProto(message: _32.QueryCirculatingSupplyResponse): Uint8Array;
                toProtoMsg(message: _32.QueryCirculatingSupplyResponse): _32.QueryCirculatingSupplyResponseProtoMsg;
            };
            QueryInflationRateRequest: {
                typeUrl: string;
                encode(_: _32.QueryInflationRateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _32.QueryInflationRateRequest;
                fromPartial(_: Partial<_32.QueryInflationRateRequest>): _32.QueryInflationRateRequest;
                fromAmino(_: _32.QueryInflationRateRequestAmino): _32.QueryInflationRateRequest;
                toAmino(_: _32.QueryInflationRateRequest): _32.QueryInflationRateRequestAmino;
                fromAminoMsg(object: _32.QueryInflationRateRequestAminoMsg): _32.QueryInflationRateRequest;
                fromProtoMsg(message: _32.QueryInflationRateRequestProtoMsg): _32.QueryInflationRateRequest;
                toProto(message: _32.QueryInflationRateRequest): Uint8Array;
                toProtoMsg(message: _32.QueryInflationRateRequest): _32.QueryInflationRateRequestProtoMsg;
            };
            QueryInflationRateResponse: {
                typeUrl: string;
                encode(message: _32.QueryInflationRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _32.QueryInflationRateResponse;
                fromPartial(object: Partial<_32.QueryInflationRateResponse>): _32.QueryInflationRateResponse;
                fromAmino(object: _32.QueryInflationRateResponseAmino): _32.QueryInflationRateResponse;
                toAmino(message: _32.QueryInflationRateResponse): _32.QueryInflationRateResponseAmino;
                fromAminoMsg(object: _32.QueryInflationRateResponseAminoMsg): _32.QueryInflationRateResponse;
                fromProtoMsg(message: _32.QueryInflationRateResponseProtoMsg): _32.QueryInflationRateResponse;
                toProto(message: _32.QueryInflationRateResponse): Uint8Array;
                toProtoMsg(message: _32.QueryInflationRateResponse): _32.QueryInflationRateResponseProtoMsg;
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
            InflationDistribution: {
                typeUrl: string;
                encode(message: _31.InflationDistribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.InflationDistribution;
                fromPartial(object: Partial<_31.InflationDistribution>): _31.InflationDistribution;
                fromAmino(object: _31.InflationDistributionAmino): _31.InflationDistribution;
                toAmino(message: _31.InflationDistribution): _31.InflationDistributionAmino;
                fromAminoMsg(object: _31.InflationDistributionAminoMsg): _31.InflationDistribution;
                fromProtoMsg(message: _31.InflationDistributionProtoMsg): _31.InflationDistribution;
                toProto(message: _31.InflationDistribution): Uint8Array;
                toProtoMsg(message: _31.InflationDistribution): _31.InflationDistributionProtoMsg;
            };
            ExponentialCalculation: {
                typeUrl: string;
                encode(message: _31.ExponentialCalculation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _31.ExponentialCalculation;
                fromPartial(object: Partial<_31.ExponentialCalculation>): _31.ExponentialCalculation;
                fromAmino(object: _31.ExponentialCalculationAmino): _31.ExponentialCalculation;
                toAmino(message: _31.ExponentialCalculation): _31.ExponentialCalculationAmino;
                fromAminoMsg(object: _31.ExponentialCalculationAminoMsg): _31.ExponentialCalculation;
                fromProtoMsg(message: _31.ExponentialCalculationProtoMsg): _31.ExponentialCalculation;
                toProto(message: _31.ExponentialCalculation): Uint8Array;
                toProtoMsg(message: _31.ExponentialCalculation): _31.ExponentialCalculationProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _30.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _30.Params;
                fromPartial(object: Partial<_30.Params>): _30.Params;
                fromAmino(object: _30.ParamsAmino): _30.Params;
                toAmino(message: _30.Params): _30.ParamsAmino;
                fromAminoMsg(object: _30.ParamsAminoMsg): _30.Params;
                fromProtoMsg(message: _30.ParamsProtoMsg): _30.Params;
                toProto(message: _30.Params): Uint8Array;
                toProtoMsg(message: _30.Params): _30.ParamsProtoMsg;
            };
        };
    }
    namespace recovery {
        const v1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _36.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _36.MsgUpdateParams): {
                        typeUrl: string;
                        value: _36.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _36.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _36.MsgUpdateParams): {
                        typeUrl: string;
                        value: _36.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.recovery.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _36.MsgUpdateParams) => _36.MsgUpdateParamsAmino;
                    fromAmino: (object: _36.MsgUpdateParamsAmino) => _36.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _36.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _36.MsgUpdateParams;
                fromPartial(object: Partial<_36.MsgUpdateParams>): _36.MsgUpdateParams;
                fromAmino(object: _36.MsgUpdateParamsAmino): _36.MsgUpdateParams;
                toAmino(message: _36.MsgUpdateParams): _36.MsgUpdateParamsAmino;
                fromAminoMsg(object: _36.MsgUpdateParamsAminoMsg): _36.MsgUpdateParams;
                fromProtoMsg(message: _36.MsgUpdateParamsProtoMsg): _36.MsgUpdateParams;
                toProto(message: _36.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _36.MsgUpdateParams): _36.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _36.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _36.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_36.MsgUpdateParamsResponse>): _36.MsgUpdateParamsResponse;
                fromAmino(_: _36.MsgUpdateParamsResponseAmino): _36.MsgUpdateParamsResponse;
                toAmino(_: _36.MsgUpdateParamsResponse): _36.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _36.MsgUpdateParamsResponseAminoMsg): _36.MsgUpdateParamsResponse;
                fromProtoMsg(message: _36.MsgUpdateParamsResponseProtoMsg): _36.MsgUpdateParamsResponse;
                toProto(message: _36.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _36.MsgUpdateParamsResponse): _36.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _35.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _35.QueryParamsRequest;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
                fromAmino(_: _35.QueryParamsRequestAmino): _35.QueryParamsRequest;
                toAmino(_: _35.QueryParamsRequest): _35.QueryParamsRequestAmino;
                fromAminoMsg(object: _35.QueryParamsRequestAminoMsg): _35.QueryParamsRequest;
                fromProtoMsg(message: _35.QueryParamsRequestProtoMsg): _35.QueryParamsRequest;
                toProto(message: _35.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _35.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
                fromAmino(object: _35.QueryParamsResponseAmino): _35.QueryParamsResponse;
                toAmino(message: _35.QueryParamsResponse): _35.QueryParamsResponseAmino;
                fromAminoMsg(object: _35.QueryParamsResponseAminoMsg): _35.QueryParamsResponse;
                fromProtoMsg(message: _35.QueryParamsResponseProtoMsg): _35.QueryParamsResponse;
                toProto(message: _35.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _34.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
                fromAmino(object: _34.ParamsAmino): _34.Params;
                toAmino(message: _34.Params): _34.ParamsAmino;
                fromAminoMsg(object: _34.ParamsAminoMsg): _34.Params;
                fromProtoMsg(message: _34.ParamsProtoMsg): _34.Params;
                toProto(message: _34.Params): Uint8Array;
                toProtoMsg(message: _34.Params): _34.ParamsProtoMsg;
            };
        };
    }
    namespace revenue {
        const v1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                revenues(request?: _39.QueryRevenuesRequest): Promise<_39.QueryRevenuesResponse>;
                revenue(request: _39.QueryRevenueRequest): Promise<_39.QueryRevenueResponse>;
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                deployerRevenues(request: _39.QueryDeployerRevenuesRequest): Promise<_39.QueryDeployerRevenuesResponse>;
                withdrawerRevenues(request: _39.QueryWithdrawerRevenuesRequest): Promise<_39.QueryWithdrawerRevenuesResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerRevenue(value: _41.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRevenue(value: _41.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRevenue(value: _41.MsgCancelRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerRevenue(value: _41.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _41.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _41.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _41.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _41.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _41.MsgCancelRevenue;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    registerRevenue(value: any): {
                        typeUrl: string;
                        value: _41.MsgRegisterRevenue;
                    };
                    updateRevenue(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: any): {
                        typeUrl: string;
                        value: _41.MsgCancelRevenue;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerRevenue(value: _41.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _41.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _41.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _41.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _41.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _41.MsgCancelRevenue;
                    };
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.revenue.v1.MsgRegisterRevenue": {
                    aminoType: string;
                    toAmino: (message: _41.MsgRegisterRevenue) => _41.MsgRegisterRevenueAmino;
                    fromAmino: (object: _41.MsgRegisterRevenueAmino) => _41.MsgRegisterRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateRevenue": {
                    aminoType: string;
                    toAmino: (message: _41.MsgUpdateRevenue) => _41.MsgUpdateRevenueAmino;
                    fromAmino: (object: _41.MsgUpdateRevenueAmino) => _41.MsgUpdateRevenue;
                };
                "/evmos.revenue.v1.MsgCancelRevenue": {
                    aminoType: string;
                    toAmino: (message: _41.MsgCancelRevenue) => _41.MsgCancelRevenueAmino;
                    fromAmino: (object: _41.MsgCancelRevenueAmino) => _41.MsgCancelRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _41.MsgUpdateParams) => _41.MsgUpdateParamsAmino;
                    fromAmino: (object: _41.MsgUpdateParamsAmino) => _41.MsgUpdateParams;
                };
            };
            MsgRegisterRevenue: {
                typeUrl: string;
                encode(message: _41.MsgRegisterRevenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgRegisterRevenue;
                fromPartial(object: Partial<_41.MsgRegisterRevenue>): _41.MsgRegisterRevenue;
                fromAmino(object: _41.MsgRegisterRevenueAmino): _41.MsgRegisterRevenue;
                toAmino(message: _41.MsgRegisterRevenue): _41.MsgRegisterRevenueAmino;
                fromAminoMsg(object: _41.MsgRegisterRevenueAminoMsg): _41.MsgRegisterRevenue;
                fromProtoMsg(message: _41.MsgRegisterRevenueProtoMsg): _41.MsgRegisterRevenue;
                toProto(message: _41.MsgRegisterRevenue): Uint8Array;
                toProtoMsg(message: _41.MsgRegisterRevenue): _41.MsgRegisterRevenueProtoMsg;
            };
            MsgRegisterRevenueResponse: {
                typeUrl: string;
                encode(_: _41.MsgRegisterRevenueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgRegisterRevenueResponse;
                fromPartial(_: Partial<_41.MsgRegisterRevenueResponse>): _41.MsgRegisterRevenueResponse;
                fromAmino(_: _41.MsgRegisterRevenueResponseAmino): _41.MsgRegisterRevenueResponse;
                toAmino(_: _41.MsgRegisterRevenueResponse): _41.MsgRegisterRevenueResponseAmino;
                fromAminoMsg(object: _41.MsgRegisterRevenueResponseAminoMsg): _41.MsgRegisterRevenueResponse;
                fromProtoMsg(message: _41.MsgRegisterRevenueResponseProtoMsg): _41.MsgRegisterRevenueResponse;
                toProto(message: _41.MsgRegisterRevenueResponse): Uint8Array;
                toProtoMsg(message: _41.MsgRegisterRevenueResponse): _41.MsgRegisterRevenueResponseProtoMsg;
            };
            MsgUpdateRevenue: {
                typeUrl: string;
                encode(message: _41.MsgUpdateRevenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgUpdateRevenue;
                fromPartial(object: Partial<_41.MsgUpdateRevenue>): _41.MsgUpdateRevenue;
                fromAmino(object: _41.MsgUpdateRevenueAmino): _41.MsgUpdateRevenue;
                toAmino(message: _41.MsgUpdateRevenue): _41.MsgUpdateRevenueAmino;
                fromAminoMsg(object: _41.MsgUpdateRevenueAminoMsg): _41.MsgUpdateRevenue;
                fromProtoMsg(message: _41.MsgUpdateRevenueProtoMsg): _41.MsgUpdateRevenue;
                toProto(message: _41.MsgUpdateRevenue): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateRevenue): _41.MsgUpdateRevenueProtoMsg;
            };
            MsgUpdateRevenueResponse: {
                typeUrl: string;
                encode(_: _41.MsgUpdateRevenueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgUpdateRevenueResponse;
                fromPartial(_: Partial<_41.MsgUpdateRevenueResponse>): _41.MsgUpdateRevenueResponse;
                fromAmino(_: _41.MsgUpdateRevenueResponseAmino): _41.MsgUpdateRevenueResponse;
                toAmino(_: _41.MsgUpdateRevenueResponse): _41.MsgUpdateRevenueResponseAmino;
                fromAminoMsg(object: _41.MsgUpdateRevenueResponseAminoMsg): _41.MsgUpdateRevenueResponse;
                fromProtoMsg(message: _41.MsgUpdateRevenueResponseProtoMsg): _41.MsgUpdateRevenueResponse;
                toProto(message: _41.MsgUpdateRevenueResponse): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateRevenueResponse): _41.MsgUpdateRevenueResponseProtoMsg;
            };
            MsgCancelRevenue: {
                typeUrl: string;
                encode(message: _41.MsgCancelRevenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgCancelRevenue;
                fromPartial(object: Partial<_41.MsgCancelRevenue>): _41.MsgCancelRevenue;
                fromAmino(object: _41.MsgCancelRevenueAmino): _41.MsgCancelRevenue;
                toAmino(message: _41.MsgCancelRevenue): _41.MsgCancelRevenueAmino;
                fromAminoMsg(object: _41.MsgCancelRevenueAminoMsg): _41.MsgCancelRevenue;
                fromProtoMsg(message: _41.MsgCancelRevenueProtoMsg): _41.MsgCancelRevenue;
                toProto(message: _41.MsgCancelRevenue): Uint8Array;
                toProtoMsg(message: _41.MsgCancelRevenue): _41.MsgCancelRevenueProtoMsg;
            };
            MsgCancelRevenueResponse: {
                typeUrl: string;
                encode(_: _41.MsgCancelRevenueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _41.MsgCancelRevenueResponse;
                fromPartial(_: Partial<_41.MsgCancelRevenueResponse>): _41.MsgCancelRevenueResponse;
                fromAmino(_: _41.MsgCancelRevenueResponseAmino): _41.MsgCancelRevenueResponse;
                toAmino(_: _41.MsgCancelRevenueResponse): _41.MsgCancelRevenueResponseAmino;
                fromAminoMsg(object: _41.MsgCancelRevenueResponseAminoMsg): _41.MsgCancelRevenueResponse;
                fromProtoMsg(message: _41.MsgCancelRevenueResponseProtoMsg): _41.MsgCancelRevenueResponse;
                toProto(message: _41.MsgCancelRevenueResponse): Uint8Array;
                toProtoMsg(message: _41.MsgCancelRevenueResponse): _41.MsgCancelRevenueResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _41.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _41.MsgUpdateParams;
                fromPartial(object: Partial<_41.MsgUpdateParams>): _41.MsgUpdateParams;
                fromAmino(object: _41.MsgUpdateParamsAmino): _41.MsgUpdateParams;
                toAmino(message: _41.MsgUpdateParams): _41.MsgUpdateParamsAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsAminoMsg): _41.MsgUpdateParams;
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
            Revenue: {
                typeUrl: string;
                encode(message: _40.Revenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _40.Revenue;
                fromPartial(object: Partial<_40.Revenue>): _40.Revenue;
                fromAmino(object: _40.RevenueAmino): _40.Revenue;
                toAmino(message: _40.Revenue): _40.RevenueAmino;
                fromAminoMsg(object: _40.RevenueAminoMsg): _40.Revenue;
                fromProtoMsg(message: _40.RevenueProtoMsg): _40.Revenue;
                toProto(message: _40.Revenue): Uint8Array;
                toProtoMsg(message: _40.Revenue): _40.RevenueProtoMsg;
            };
            QueryRevenuesRequest: {
                typeUrl: string;
                encode(message: _39.QueryRevenuesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryRevenuesRequest;
                fromPartial(object: Partial<_39.QueryRevenuesRequest>): _39.QueryRevenuesRequest;
                fromAmino(object: _39.QueryRevenuesRequestAmino): _39.QueryRevenuesRequest;
                toAmino(message: _39.QueryRevenuesRequest): _39.QueryRevenuesRequestAmino;
                fromAminoMsg(object: _39.QueryRevenuesRequestAminoMsg): _39.QueryRevenuesRequest;
                fromProtoMsg(message: _39.QueryRevenuesRequestProtoMsg): _39.QueryRevenuesRequest;
                toProto(message: _39.QueryRevenuesRequest): Uint8Array;
                toProtoMsg(message: _39.QueryRevenuesRequest): _39.QueryRevenuesRequestProtoMsg;
            };
            QueryRevenuesResponse: {
                typeUrl: string;
                encode(message: _39.QueryRevenuesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryRevenuesResponse;
                fromPartial(object: Partial<_39.QueryRevenuesResponse>): _39.QueryRevenuesResponse;
                fromAmino(object: _39.QueryRevenuesResponseAmino): _39.QueryRevenuesResponse;
                toAmino(message: _39.QueryRevenuesResponse): _39.QueryRevenuesResponseAmino;
                fromAminoMsg(object: _39.QueryRevenuesResponseAminoMsg): _39.QueryRevenuesResponse;
                fromProtoMsg(message: _39.QueryRevenuesResponseProtoMsg): _39.QueryRevenuesResponse;
                toProto(message: _39.QueryRevenuesResponse): Uint8Array;
                toProtoMsg(message: _39.QueryRevenuesResponse): _39.QueryRevenuesResponseProtoMsg;
            };
            QueryRevenueRequest: {
                typeUrl: string;
                encode(message: _39.QueryRevenueRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryRevenueRequest;
                fromPartial(object: Partial<_39.QueryRevenueRequest>): _39.QueryRevenueRequest;
                fromAmino(object: _39.QueryRevenueRequestAmino): _39.QueryRevenueRequest;
                toAmino(message: _39.QueryRevenueRequest): _39.QueryRevenueRequestAmino;
                fromAminoMsg(object: _39.QueryRevenueRequestAminoMsg): _39.QueryRevenueRequest;
                fromProtoMsg(message: _39.QueryRevenueRequestProtoMsg): _39.QueryRevenueRequest;
                toProto(message: _39.QueryRevenueRequest): Uint8Array;
                toProtoMsg(message: _39.QueryRevenueRequest): _39.QueryRevenueRequestProtoMsg;
            };
            QueryRevenueResponse: {
                typeUrl: string;
                encode(message: _39.QueryRevenueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryRevenueResponse;
                fromPartial(object: Partial<_39.QueryRevenueResponse>): _39.QueryRevenueResponse;
                fromAmino(object: _39.QueryRevenueResponseAmino): _39.QueryRevenueResponse;
                toAmino(message: _39.QueryRevenueResponse): _39.QueryRevenueResponseAmino;
                fromAminoMsg(object: _39.QueryRevenueResponseAminoMsg): _39.QueryRevenueResponse;
                fromProtoMsg(message: _39.QueryRevenueResponseProtoMsg): _39.QueryRevenueResponse;
                toProto(message: _39.QueryRevenueResponse): Uint8Array;
                toProtoMsg(message: _39.QueryRevenueResponse): _39.QueryRevenueResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _39.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _39.QueryParamsRequest;
                fromPartial(_: Partial<_39.QueryParamsRequest>): _39.QueryParamsRequest;
                fromAmino(_: _39.QueryParamsRequestAmino): _39.QueryParamsRequest;
                toAmino(_: _39.QueryParamsRequest): _39.QueryParamsRequestAmino;
                fromAminoMsg(object: _39.QueryParamsRequestAminoMsg): _39.QueryParamsRequest;
                fromProtoMsg(message: _39.QueryParamsRequestProtoMsg): _39.QueryParamsRequest;
                toProto(message: _39.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _39.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryParamsResponse;
                fromPartial(object: Partial<_39.QueryParamsResponse>): _39.QueryParamsResponse;
                fromAmino(object: _39.QueryParamsResponseAmino): _39.QueryParamsResponse;
                toAmino(message: _39.QueryParamsResponse): _39.QueryParamsResponseAmino;
                fromAminoMsg(object: _39.QueryParamsResponseAminoMsg): _39.QueryParamsResponse;
                fromProtoMsg(message: _39.QueryParamsResponseProtoMsg): _39.QueryParamsResponse;
                toProto(message: _39.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseProtoMsg;
            };
            QueryDeployerRevenuesRequest: {
                typeUrl: string;
                encode(message: _39.QueryDeployerRevenuesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDeployerRevenuesRequest;
                fromPartial(object: Partial<_39.QueryDeployerRevenuesRequest>): _39.QueryDeployerRevenuesRequest;
                fromAmino(object: _39.QueryDeployerRevenuesRequestAmino): _39.QueryDeployerRevenuesRequest;
                toAmino(message: _39.QueryDeployerRevenuesRequest): _39.QueryDeployerRevenuesRequestAmino;
                fromAminoMsg(object: _39.QueryDeployerRevenuesRequestAminoMsg): _39.QueryDeployerRevenuesRequest;
                fromProtoMsg(message: _39.QueryDeployerRevenuesRequestProtoMsg): _39.QueryDeployerRevenuesRequest;
                toProto(message: _39.QueryDeployerRevenuesRequest): Uint8Array;
                toProtoMsg(message: _39.QueryDeployerRevenuesRequest): _39.QueryDeployerRevenuesRequestProtoMsg;
            };
            QueryDeployerRevenuesResponse: {
                typeUrl: string;
                encode(message: _39.QueryDeployerRevenuesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryDeployerRevenuesResponse;
                fromPartial(object: Partial<_39.QueryDeployerRevenuesResponse>): _39.QueryDeployerRevenuesResponse;
                fromAmino(object: _39.QueryDeployerRevenuesResponseAmino): _39.QueryDeployerRevenuesResponse;
                toAmino(message: _39.QueryDeployerRevenuesResponse): _39.QueryDeployerRevenuesResponseAmino;
                fromAminoMsg(object: _39.QueryDeployerRevenuesResponseAminoMsg): _39.QueryDeployerRevenuesResponse;
                fromProtoMsg(message: _39.QueryDeployerRevenuesResponseProtoMsg): _39.QueryDeployerRevenuesResponse;
                toProto(message: _39.QueryDeployerRevenuesResponse): Uint8Array;
                toProtoMsg(message: _39.QueryDeployerRevenuesResponse): _39.QueryDeployerRevenuesResponseProtoMsg;
            };
            QueryWithdrawerRevenuesRequest: {
                typeUrl: string;
                encode(message: _39.QueryWithdrawerRevenuesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryWithdrawerRevenuesRequest;
                fromPartial(object: Partial<_39.QueryWithdrawerRevenuesRequest>): _39.QueryWithdrawerRevenuesRequest;
                fromAmino(object: _39.QueryWithdrawerRevenuesRequestAmino): _39.QueryWithdrawerRevenuesRequest;
                toAmino(message: _39.QueryWithdrawerRevenuesRequest): _39.QueryWithdrawerRevenuesRequestAmino;
                fromAminoMsg(object: _39.QueryWithdrawerRevenuesRequestAminoMsg): _39.QueryWithdrawerRevenuesRequest;
                fromProtoMsg(message: _39.QueryWithdrawerRevenuesRequestProtoMsg): _39.QueryWithdrawerRevenuesRequest;
                toProto(message: _39.QueryWithdrawerRevenuesRequest): Uint8Array;
                toProtoMsg(message: _39.QueryWithdrawerRevenuesRequest): _39.QueryWithdrawerRevenuesRequestProtoMsg;
            };
            QueryWithdrawerRevenuesResponse: {
                typeUrl: string;
                encode(message: _39.QueryWithdrawerRevenuesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _39.QueryWithdrawerRevenuesResponse;
                fromPartial(object: Partial<_39.QueryWithdrawerRevenuesResponse>): _39.QueryWithdrawerRevenuesResponse;
                fromAmino(object: _39.QueryWithdrawerRevenuesResponseAmino): _39.QueryWithdrawerRevenuesResponse;
                toAmino(message: _39.QueryWithdrawerRevenuesResponse): _39.QueryWithdrawerRevenuesResponseAmino;
                fromAminoMsg(object: _39.QueryWithdrawerRevenuesResponseAminoMsg): _39.QueryWithdrawerRevenuesResponse;
                fromProtoMsg(message: _39.QueryWithdrawerRevenuesResponseProtoMsg): _39.QueryWithdrawerRevenuesResponse;
                toProto(message: _39.QueryWithdrawerRevenuesResponse): Uint8Array;
                toProtoMsg(message: _39.QueryWithdrawerRevenuesResponse): _39.QueryWithdrawerRevenuesResponseProtoMsg;
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
            Params: {
                typeUrl: string;
                encode(message: _38.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _38.Params;
                fromPartial(object: Partial<_38.Params>): _38.Params;
                fromAmino(object: _38.ParamsAmino): _38.Params;
                toAmino(message: _38.Params): _38.ParamsAmino;
                fromAminoMsg(object: _38.ParamsAminoMsg): _38.Params;
                fromProtoMsg(message: _38.ParamsProtoMsg): _38.Params;
                toProto(message: _38.Params): Uint8Array;
                toProtoMsg(message: _38.Params): _38.ParamsProtoMsg;
            };
            EventRegisterRevenue: {
                typeUrl: string;
                encode(message: _37.EventRegisterRevenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventRegisterRevenue;
                fromPartial(object: Partial<_37.EventRegisterRevenue>): _37.EventRegisterRevenue;
                fromAmino(object: _37.EventRegisterRevenueAmino): _37.EventRegisterRevenue;
                toAmino(message: _37.EventRegisterRevenue): _37.EventRegisterRevenueAmino;
                fromAminoMsg(object: _37.EventRegisterRevenueAminoMsg): _37.EventRegisterRevenue;
                fromProtoMsg(message: _37.EventRegisterRevenueProtoMsg): _37.EventRegisterRevenue;
                toProto(message: _37.EventRegisterRevenue): Uint8Array;
                toProtoMsg(message: _37.EventRegisterRevenue): _37.EventRegisterRevenueProtoMsg;
            };
            EventUpdateRevenue: {
                typeUrl: string;
                encode(message: _37.EventUpdateRevenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventUpdateRevenue;
                fromPartial(object: Partial<_37.EventUpdateRevenue>): _37.EventUpdateRevenue;
                fromAmino(object: _37.EventUpdateRevenueAmino): _37.EventUpdateRevenue;
                toAmino(message: _37.EventUpdateRevenue): _37.EventUpdateRevenueAmino;
                fromAminoMsg(object: _37.EventUpdateRevenueAminoMsg): _37.EventUpdateRevenue;
                fromProtoMsg(message: _37.EventUpdateRevenueProtoMsg): _37.EventUpdateRevenue;
                toProto(message: _37.EventUpdateRevenue): Uint8Array;
                toProtoMsg(message: _37.EventUpdateRevenue): _37.EventUpdateRevenueProtoMsg;
            };
            EventCancelRevenue: {
                typeUrl: string;
                encode(message: _37.EventCancelRevenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventCancelRevenue;
                fromPartial(object: Partial<_37.EventCancelRevenue>): _37.EventCancelRevenue;
                fromAmino(object: _37.EventCancelRevenueAmino): _37.EventCancelRevenue;
                toAmino(message: _37.EventCancelRevenue): _37.EventCancelRevenueAmino;
                fromAminoMsg(object: _37.EventCancelRevenueAminoMsg): _37.EventCancelRevenue;
                fromProtoMsg(message: _37.EventCancelRevenueProtoMsg): _37.EventCancelRevenue;
                toProto(message: _37.EventCancelRevenue): Uint8Array;
                toProtoMsg(message: _37.EventCancelRevenue): _37.EventCancelRevenueProtoMsg;
            };
            EventDistributeRevenue: {
                typeUrl: string;
                encode(message: _37.EventDistributeRevenue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _37.EventDistributeRevenue;
                fromPartial(object: Partial<_37.EventDistributeRevenue>): _37.EventDistributeRevenue;
                fromAmino(object: _37.EventDistributeRevenueAmino): _37.EventDistributeRevenue;
                toAmino(message: _37.EventDistributeRevenue): _37.EventDistributeRevenueAmino;
                fromAminoMsg(object: _37.EventDistributeRevenueAminoMsg): _37.EventDistributeRevenue;
                fromProtoMsg(message: _37.EventDistributeRevenueProtoMsg): _37.EventDistributeRevenue;
                toProto(message: _37.EventDistributeRevenue): Uint8Array;
                toProtoMsg(message: _37.EventDistributeRevenue): _37.EventDistributeRevenueProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balances(request: _43.QueryBalancesRequest): Promise<_43.QueryBalancesResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _44.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _44.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateVestingFunder(value: _44.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertVestingAccount(value: _44.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _44.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _44.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _44.MsgClawback): {
                        typeUrl: string;
                        value: _44.MsgClawback;
                    };
                    updateVestingFunder(value: _44.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _44.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _44.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _44.MsgConvertVestingAccount;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _44.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _44.MsgClawback;
                    };
                    updateVestingFunder(value: any): {
                        typeUrl: string;
                        value: _44.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: any): {
                        typeUrl: string;
                        value: _44.MsgConvertVestingAccount;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _44.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _44.MsgCreateClawbackVestingAccount;
                    };
                    clawback(value: _44.MsgClawback): {
                        typeUrl: string;
                        value: _44.MsgClawback;
                    };
                    updateVestingFunder(value: _44.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _44.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _44.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _44.MsgConvertVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _44.MsgCreateClawbackVestingAccount) => _44.MsgCreateClawbackVestingAccountAmino;
                    fromAmino: (object: _44.MsgCreateClawbackVestingAccountAmino) => _44.MsgCreateClawbackVestingAccount;
                };
                "/evmos.vesting.v1.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _44.MsgClawback) => _44.MsgClawbackAmino;
                    fromAmino: (object: _44.MsgClawbackAmino) => _44.MsgClawback;
                };
                "/evmos.vesting.v1.MsgUpdateVestingFunder": {
                    aminoType: string;
                    toAmino: (message: _44.MsgUpdateVestingFunder) => _44.MsgUpdateVestingFunderAmino;
                    fromAmino: (object: _44.MsgUpdateVestingFunderAmino) => _44.MsgUpdateVestingFunder;
                };
                "/evmos.vesting.v1.MsgConvertVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _44.MsgConvertVestingAccount) => _44.MsgConvertVestingAccountAmino;
                    fromAmino: (object: _44.MsgConvertVestingAccountAmino) => _44.MsgConvertVestingAccount;
                };
            };
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _45.ClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _45.ClawbackVestingAccount;
                fromPartial(object: Partial<_45.ClawbackVestingAccount>): _45.ClawbackVestingAccount;
                fromAmino(object: _45.ClawbackVestingAccountAmino): _45.ClawbackVestingAccount;
                toAmino(message: _45.ClawbackVestingAccount): _45.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _45.ClawbackVestingAccountAminoMsg): _45.ClawbackVestingAccount;
                fromProtoMsg(message: _45.ClawbackVestingAccountProtoMsg): _45.ClawbackVestingAccount;
                toProto(message: _45.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _45.ClawbackVestingAccount): _45.ClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _44.MsgCreateClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgCreateClawbackVestingAccount;
                fromPartial(object: Partial<_44.MsgCreateClawbackVestingAccount>): _44.MsgCreateClawbackVestingAccount;
                fromAmino(object: _44.MsgCreateClawbackVestingAccountAmino): _44.MsgCreateClawbackVestingAccount;
                toAmino(message: _44.MsgCreateClawbackVestingAccount): _44.MsgCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _44.MsgCreateClawbackVestingAccountAminoMsg): _44.MsgCreateClawbackVestingAccount;
                fromProtoMsg(message: _44.MsgCreateClawbackVestingAccountProtoMsg): _44.MsgCreateClawbackVestingAccount;
                toProto(message: _44.MsgCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _44.MsgCreateClawbackVestingAccount): _44.MsgCreateClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccountResponse: {
                typeUrl: string;
                encode(_: _44.MsgCreateClawbackVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgCreateClawbackVestingAccountResponse;
                fromPartial(_: Partial<_44.MsgCreateClawbackVestingAccountResponse>): _44.MsgCreateClawbackVestingAccountResponse;
                fromAmino(_: _44.MsgCreateClawbackVestingAccountResponseAmino): _44.MsgCreateClawbackVestingAccountResponse;
                toAmino(_: _44.MsgCreateClawbackVestingAccountResponse): _44.MsgCreateClawbackVestingAccountResponseAmino;
                fromAminoMsg(object: _44.MsgCreateClawbackVestingAccountResponseAminoMsg): _44.MsgCreateClawbackVestingAccountResponse;
                fromProtoMsg(message: _44.MsgCreateClawbackVestingAccountResponseProtoMsg): _44.MsgCreateClawbackVestingAccountResponse;
                toProto(message: _44.MsgCreateClawbackVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _44.MsgCreateClawbackVestingAccountResponse): _44.MsgCreateClawbackVestingAccountResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _44.MsgClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgClawback;
                fromPartial(object: Partial<_44.MsgClawback>): _44.MsgClawback;
                fromAmino(object: _44.MsgClawbackAmino): _44.MsgClawback;
                toAmino(message: _44.MsgClawback): _44.MsgClawbackAmino;
                fromAminoMsg(object: _44.MsgClawbackAminoMsg): _44.MsgClawback;
                fromProtoMsg(message: _44.MsgClawbackProtoMsg): _44.MsgClawback;
                toProto(message: _44.MsgClawback): Uint8Array;
                toProtoMsg(message: _44.MsgClawback): _44.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(_: _44.MsgClawbackResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgClawbackResponse;
                fromPartial(_: Partial<_44.MsgClawbackResponse>): _44.MsgClawbackResponse;
                fromAmino(_: _44.MsgClawbackResponseAmino): _44.MsgClawbackResponse;
                toAmino(_: _44.MsgClawbackResponse): _44.MsgClawbackResponseAmino;
                fromAminoMsg(object: _44.MsgClawbackResponseAminoMsg): _44.MsgClawbackResponse;
                fromProtoMsg(message: _44.MsgClawbackResponseProtoMsg): _44.MsgClawbackResponse;
                toProto(message: _44.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _44.MsgClawbackResponse): _44.MsgClawbackResponseProtoMsg;
            };
            MsgUpdateVestingFunder: {
                typeUrl: string;
                encode(message: _44.MsgUpdateVestingFunder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgUpdateVestingFunder;
                fromPartial(object: Partial<_44.MsgUpdateVestingFunder>): _44.MsgUpdateVestingFunder;
                fromAmino(object: _44.MsgUpdateVestingFunderAmino): _44.MsgUpdateVestingFunder;
                toAmino(message: _44.MsgUpdateVestingFunder): _44.MsgUpdateVestingFunderAmino;
                fromAminoMsg(object: _44.MsgUpdateVestingFunderAminoMsg): _44.MsgUpdateVestingFunder;
                fromProtoMsg(message: _44.MsgUpdateVestingFunderProtoMsg): _44.MsgUpdateVestingFunder;
                toProto(message: _44.MsgUpdateVestingFunder): Uint8Array;
                toProtoMsg(message: _44.MsgUpdateVestingFunder): _44.MsgUpdateVestingFunderProtoMsg;
            };
            MsgUpdateVestingFunderResponse: {
                typeUrl: string;
                encode(_: _44.MsgUpdateVestingFunderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgUpdateVestingFunderResponse;
                fromPartial(_: Partial<_44.MsgUpdateVestingFunderResponse>): _44.MsgUpdateVestingFunderResponse;
                fromAmino(_: _44.MsgUpdateVestingFunderResponseAmino): _44.MsgUpdateVestingFunderResponse;
                toAmino(_: _44.MsgUpdateVestingFunderResponse): _44.MsgUpdateVestingFunderResponseAmino;
                fromAminoMsg(object: _44.MsgUpdateVestingFunderResponseAminoMsg): _44.MsgUpdateVestingFunderResponse;
                fromProtoMsg(message: _44.MsgUpdateVestingFunderResponseProtoMsg): _44.MsgUpdateVestingFunderResponse;
                toProto(message: _44.MsgUpdateVestingFunderResponse): Uint8Array;
                toProtoMsg(message: _44.MsgUpdateVestingFunderResponse): _44.MsgUpdateVestingFunderResponseProtoMsg;
            };
            MsgConvertVestingAccount: {
                typeUrl: string;
                encode(message: _44.MsgConvertVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _44.MsgConvertVestingAccount;
                fromPartial(object: Partial<_44.MsgConvertVestingAccount>): _44.MsgConvertVestingAccount;
                fromAmino(object: _44.MsgConvertVestingAccountAmino): _44.MsgConvertVestingAccount;
                toAmino(message: _44.MsgConvertVestingAccount): _44.MsgConvertVestingAccountAmino;
                fromAminoMsg(object: _44.MsgConvertVestingAccountAminoMsg): _44.MsgConvertVestingAccount;
                fromProtoMsg(message: _44.MsgConvertVestingAccountProtoMsg): _44.MsgConvertVestingAccount;
                toProto(message: _44.MsgConvertVestingAccount): Uint8Array;
                toProtoMsg(message: _44.MsgConvertVestingAccount): _44.MsgConvertVestingAccountProtoMsg;
            };
            MsgConvertVestingAccountResponse: {
                typeUrl: string;
                encode(_: _44.MsgConvertVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _44.MsgConvertVestingAccountResponse;
                fromPartial(_: Partial<_44.MsgConvertVestingAccountResponse>): _44.MsgConvertVestingAccountResponse;
                fromAmino(_: _44.MsgConvertVestingAccountResponseAmino): _44.MsgConvertVestingAccountResponse;
                toAmino(_: _44.MsgConvertVestingAccountResponse): _44.MsgConvertVestingAccountResponseAmino;
                fromAminoMsg(object: _44.MsgConvertVestingAccountResponseAminoMsg): _44.MsgConvertVestingAccountResponse;
                fromProtoMsg(message: _44.MsgConvertVestingAccountResponseProtoMsg): _44.MsgConvertVestingAccountResponse;
                toProto(message: _44.MsgConvertVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _44.MsgConvertVestingAccountResponse): _44.MsgConvertVestingAccountResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(message: _43.QueryBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryBalancesRequest;
                fromPartial(object: Partial<_43.QueryBalancesRequest>): _43.QueryBalancesRequest;
                fromAmino(object: _43.QueryBalancesRequestAmino): _43.QueryBalancesRequest;
                toAmino(message: _43.QueryBalancesRequest): _43.QueryBalancesRequestAmino;
                fromAminoMsg(object: _43.QueryBalancesRequestAminoMsg): _43.QueryBalancesRequest;
                fromProtoMsg(message: _43.QueryBalancesRequestProtoMsg): _43.QueryBalancesRequest;
                toProto(message: _43.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _43.QueryBalancesRequest): _43.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _43.QueryBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _43.QueryBalancesResponse;
                fromPartial(object: Partial<_43.QueryBalancesResponse>): _43.QueryBalancesResponse;
                fromAmino(object: _43.QueryBalancesResponseAmino): _43.QueryBalancesResponse;
                toAmino(message: _43.QueryBalancesResponse): _43.QueryBalancesResponseAmino;
                fromAminoMsg(object: _43.QueryBalancesResponseAminoMsg): _43.QueryBalancesResponse;
                fromProtoMsg(message: _43.QueryBalancesResponseProtoMsg): _43.QueryBalancesResponse;
                toProto(message: _43.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _43.QueryBalancesResponse): _43.QueryBalancesResponseProtoMsg;
            };
            EventCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _42.EventCreateClawbackVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.EventCreateClawbackVestingAccount;
                fromPartial(object: Partial<_42.EventCreateClawbackVestingAccount>): _42.EventCreateClawbackVestingAccount;
                fromAmino(object: _42.EventCreateClawbackVestingAccountAmino): _42.EventCreateClawbackVestingAccount;
                toAmino(message: _42.EventCreateClawbackVestingAccount): _42.EventCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _42.EventCreateClawbackVestingAccountAminoMsg): _42.EventCreateClawbackVestingAccount;
                fromProtoMsg(message: _42.EventCreateClawbackVestingAccountProtoMsg): _42.EventCreateClawbackVestingAccount;
                toProto(message: _42.EventCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _42.EventCreateClawbackVestingAccount): _42.EventCreateClawbackVestingAccountProtoMsg;
            };
            EventClawback: {
                typeUrl: string;
                encode(message: _42.EventClawback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.EventClawback;
                fromPartial(object: Partial<_42.EventClawback>): _42.EventClawback;
                fromAmino(object: _42.EventClawbackAmino): _42.EventClawback;
                toAmino(message: _42.EventClawback): _42.EventClawbackAmino;
                fromAminoMsg(object: _42.EventClawbackAminoMsg): _42.EventClawback;
                fromProtoMsg(message: _42.EventClawbackProtoMsg): _42.EventClawback;
                toProto(message: _42.EventClawback): Uint8Array;
                toProtoMsg(message: _42.EventClawback): _42.EventClawbackProtoMsg;
            };
            EventUpdateVestingFunder: {
                typeUrl: string;
                encode(message: _42.EventUpdateVestingFunder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _42.EventUpdateVestingFunder;
                fromPartial(object: Partial<_42.EventUpdateVestingFunder>): _42.EventUpdateVestingFunder;
                fromAmino(object: _42.EventUpdateVestingFunderAmino): _42.EventUpdateVestingFunder;
                toAmino(message: _42.EventUpdateVestingFunder): _42.EventUpdateVestingFunderAmino;
                fromAminoMsg(object: _42.EventUpdateVestingFunderAminoMsg): _42.EventUpdateVestingFunder;
                fromProtoMsg(message: _42.EventUpdateVestingFunderProtoMsg): _42.EventUpdateVestingFunder;
                toProto(message: _42.EventUpdateVestingFunder): Uint8Array;
                toProtoMsg(message: _42.EventUpdateVestingFunder): _42.EventUpdateVestingFunderProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            evmos: {
                claims: {
                    v1: _202.MsgClientImpl;
                };
                erc20: {
                    v1: _203.MsgClientImpl;
                };
                incentives: {
                    v1: _204.MsgClientImpl;
                };
                inflation: {
                    v1: _205.MsgClientImpl;
                };
                recovery: {
                    v1: _206.MsgClientImpl;
                };
                revenue: {
                    v1: _207.MsgClientImpl;
                };
                vesting: {
                    v1: _208.MsgClientImpl;
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
            evmos: {
                claims: {
                    v1: {
                        totalUnclaimed(request?: _17.QueryTotalUnclaimedRequest): Promise<_17.QueryTotalUnclaimedResponse>;
                        params(request?: _17.QueryParamsRequest): Promise<_17.QueryParamsResponse>;
                        claimsRecords(request?: _17.QueryClaimsRecordsRequest): Promise<_17.QueryClaimsRecordsResponse>;
                        claimsRecord(request: _17.QueryClaimsRecordRequest): Promise<_17.QueryClaimsRecordResponse>;
                    };
                };
                epochs: {
                    v1: {
                        epochInfos(request?: _20.QueryEpochsInfoRequest): Promise<_20.QueryEpochsInfoResponse>;
                        currentEpoch(request: _20.QueryCurrentEpochRequest): Promise<_20.QueryCurrentEpochResponse>;
                    };
                };
                erc20: {
                    v1: {
                        tokenPairs(request?: _24.QueryTokenPairsRequest): Promise<_24.QueryTokenPairsResponse>;
                        tokenPair(request: _24.QueryTokenPairRequest): Promise<_24.QueryTokenPairResponse>;
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                    };
                };
                incentives: {
                    v1: {
                        incentives(request?: _28.QueryIncentivesRequest): Promise<_28.QueryIncentivesResponse>;
                        incentive(request: _28.QueryIncentiveRequest): Promise<_28.QueryIncentiveResponse>;
                        gasMeters(request: _28.QueryGasMetersRequest): Promise<_28.QueryGasMetersResponse>;
                        gasMeter(request: _28.QueryGasMeterRequest): Promise<_28.QueryGasMeterResponse>;
                        allocationMeters(request?: _28.QueryAllocationMetersRequest): Promise<_28.QueryAllocationMetersResponse>;
                        allocationMeter(request: _28.QueryAllocationMeterRequest): Promise<_28.QueryAllocationMeterResponse>;
                        params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                    };
                };
                inflation: {
                    v1: {
                        period(request?: _32.QueryPeriodRequest): Promise<_32.QueryPeriodResponse>;
                        epochMintProvision(request?: _32.QueryEpochMintProvisionRequest): Promise<_32.QueryEpochMintProvisionResponse>;
                        skippedEpochs(request?: _32.QuerySkippedEpochsRequest): Promise<_32.QuerySkippedEpochsResponse>;
                        circulatingSupply(request?: _32.QueryCirculatingSupplyRequest): Promise<_32.QueryCirculatingSupplyResponse>;
                        inflationRate(request?: _32.QueryInflationRateRequest): Promise<_32.QueryInflationRateResponse>;
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                    };
                };
                recovery: {
                    v1: {
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                    };
                };
                revenue: {
                    v1: {
                        revenues(request?: _39.QueryRevenuesRequest): Promise<_39.QueryRevenuesResponse>;
                        revenue(request: _39.QueryRevenueRequest): Promise<_39.QueryRevenueResponse>;
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                        deployerRevenues(request: _39.QueryDeployerRevenuesRequest): Promise<_39.QueryDeployerRevenuesResponse>;
                        withdrawerRevenues(request: _39.QueryWithdrawerRevenuesRequest): Promise<_39.QueryWithdrawerRevenuesResponse>;
                    };
                };
                vesting: {
                    v1: {
                        balances(request: _43.QueryBalancesRequest): Promise<_43.QueryBalancesResponse>;
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
            evmos: {
                claims: {
                    v1: _186.LCDQueryClient;
                };
                epochs: {
                    v1: _187.LCDQueryClient;
                };
                erc20: {
                    v1: _188.LCDQueryClient;
                };
                incentives: {
                    v1: _189.LCDQueryClient;
                };
                inflation: {
                    v1: _190.LCDQueryClient;
                };
                recovery: {
                    v1: _191.LCDQueryClient;
                };
                revenue: {
                    v1: _192.LCDQueryClient;
                };
                vesting: {
                    v1: _193.LCDQueryClient;
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
