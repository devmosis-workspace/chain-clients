import * as _0 from "./autopilot/genesis";
import * as _1 from "./autopilot/params";
import * as _2 from "./autopilot/query";
import * as _3 from "./claim/claim";
import * as _4 from "./claim/genesis";
import * as _5 from "./claim/params";
import * as _6 from "./claim/query";
import * as _7 from "./claim/tx";
import * as _8 from "./epochs/genesis";
import * as _9 from "./epochs/query";
import * as _10 from "./icacallbacks/callback_data";
import * as _11 from "./icacallbacks/genesis";
import * as _12 from "./icacallbacks/packet";
import * as _13 from "./icacallbacks/params";
import * as _14 from "./icacallbacks/query";
import * as _16 from "./interchainquery/v1/genesis";
import * as _17 from "./interchainquery/v1/messages";
import * as _18 from "./interchainquery/v1/query";
import * as _19 from "./mint/v1beta1/genesis";
import * as _20 from "./mint/v1beta1/mint";
import * as _21 from "./mint/v1beta1/query";
import * as _22 from "./ratelimit/genesis";
import * as _23 from "./ratelimit/gov";
import * as _24 from "./ratelimit/params";
import * as _25 from "./ratelimit/query";
import * as _26 from "./ratelimit/ratelimit";
import * as _27 from "./records/callbacks";
import * as _28 from "./records/genesis";
import * as _29 from "./records/query";
import * as _30 from "./stakeibc/address_unbonding";
import * as _31 from "./stakeibc/callbacks";
import * as _32 from "./stakeibc/epoch_tracker";
import * as _33 from "./stakeibc/genesis";
import * as _34 from "./stakeibc/gov";
import * as _35 from "./stakeibc/host_zone";
import * as _36 from "./stakeibc/ica_account";
import * as _37 from "./stakeibc/packet";
import * as _38 from "./stakeibc/params";
import * as _39 from "./stakeibc/query";
import * as _40 from "./stakeibc/tx";
import * as _41 from "./stakeibc/validator";
import * as _43 from "./vesting/vesting";
import * as _194 from "./autopilot/query.lcd";
import * as _195 from "./claim/query.lcd";
import * as _196 from "./epochs/query.lcd";
import * as _197 from "./icacallbacks/query.lcd";
import * as _198 from "./mint/v1beta1/query.lcd";
import * as _199 from "./ratelimit/query.lcd";
import * as _200 from "./records/query.lcd";
import * as _201 from "./stakeibc/query.lcd";
import * as _202 from "./autopilot/query.rpc.Query";
import * as _203 from "./claim/query.rpc.Query";
import * as _204 from "./epochs/query.rpc.Query";
import * as _205 from "./icacallbacks/query.rpc.Query";
import * as _206 from "./mint/v1beta1/query.rpc.Query";
import * as _207 from "./ratelimit/query.rpc.Query";
import * as _208 from "./records/query.rpc.Query";
import * as _209 from "./stakeibc/query.rpc.Query";
import * as _210 from "./claim/tx.rpc.msg";
import * as _211 from "./interchainquery/v1/messages.rpc.msg";
import * as _212 from "./stakeibc/tx.rpc.msg";
export declare namespace stride {
    const autopilot: {
        QueryClientImpl: typeof _202.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _194.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _2.QueryParamsRequest;
            fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _2.QueryParamsResponse;
            fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
        };
        Params: {
            encode(message: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _1.Params;
            fromPartial(object: Partial<_1.Params>): _1.Params;
        };
        GenesisState: {
            encode(message: _0.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _0.GenesisState;
            fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
        };
    };
    const claim: {
        MsgClientImpl: typeof _210.MsgClientImpl;
        QueryClientImpl: typeof _203.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _6.QueryDistributorAccountBalanceRequest): Promise<_6.QueryDistributorAccountBalanceResponse>;
            params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
            claimRecord(request: _6.QueryClaimRecordRequest): Promise<_6.QueryClaimRecordResponse>;
            claimableForAction(request: _6.QueryClaimableForActionRequest): Promise<_6.QueryClaimableForActionResponse>;
            totalClaimable(request: _6.QueryTotalClaimableRequest): Promise<_6.QueryTotalClaimableResponse>;
            userVestings(request: _6.QueryUserVestingsRequest): Promise<_6.QueryUserVestingsResponse>;
            claimStatus(request: _6.QueryClaimStatusRequest): Promise<_6.QueryClaimStatusResponse>;
            claimMetadata(request?: _6.QueryClaimMetadataRequest): Promise<_6.QueryClaimMetadataResponse>;
        };
        LCDQueryClient: typeof _195.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _7.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _7.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _7.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _7.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _7.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _7.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _7.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _7.MsgClaimFreeAmount;
                };
                createAirdrop(value: _7.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _7.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _7.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _7.MsgDeleteAirdrop;
                };
            };
            fromJSON: {
                setAirdropAllocations(value: any): {
                    typeUrl: string;
                    value: _7.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: any): {
                    typeUrl: string;
                    value: _7.MsgClaimFreeAmount;
                };
                createAirdrop(value: any): {
                    typeUrl: string;
                    value: _7.MsgCreateAirdrop;
                };
                deleteAirdrop(value: any): {
                    typeUrl: string;
                    value: _7.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _7.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _7.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _7.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _7.MsgClaimFreeAmount;
                };
                createAirdrop(value: _7.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _7.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _7.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _7.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: ({ allocator, airdropIdentifier, users, weights }: _7.MsgSetAirdropAllocations) => {
                    allocator: string;
                    airdrop_identifier: string;
                    users: string[];
                    weights: string[];
                };
                fromAmino: ({ allocator, airdrop_identifier, users, weights }: {
                    allocator: string;
                    airdrop_identifier: string;
                    users: string[];
                    weights: string[];
                }) => _7.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: ({ user }: _7.MsgClaimFreeAmount) => {
                    user: string;
                };
                fromAmino: ({ user }: {
                    user: string;
                }) => _7.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: ({ distributor, identifier, chainId, denom, startTime, duration, autopilotEnabled }: _7.MsgCreateAirdrop) => {
                    distributor: string;
                    identifier: string;
                    chain_id: string;
                    denom: string;
                    start_time: string;
                    duration: string;
                    autopilot_enabled: boolean;
                };
                fromAmino: ({ distributor, identifier, chain_id, denom, start_time, duration, autopilot_enabled }: {
                    distributor: string;
                    identifier: string;
                    chain_id: string;
                    denom: string;
                    start_time: string;
                    duration: string;
                    autopilot_enabled: boolean;
                }) => _7.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: ({ distributor, identifier }: _7.MsgDeleteAirdrop) => {
                    distributor: string;
                    identifier: string;
                };
                fromAmino: ({ distributor, identifier }: {
                    distributor: string;
                    identifier: string;
                }) => _7.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            encode(message: _7.MsgSetAirdropAllocations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_7.MsgSetAirdropAllocations>): _7.MsgSetAirdropAllocations;
        };
        MsgSetAirdropAllocationsResponse: {
            encode(_: _7.MsgSetAirdropAllocationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _7.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_7.MsgSetAirdropAllocationsResponse>): _7.MsgSetAirdropAllocationsResponse;
        };
        MsgClaimFreeAmount: {
            encode(message: _7.MsgClaimFreeAmount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.MsgClaimFreeAmount;
            fromPartial(object: Partial<_7.MsgClaimFreeAmount>): _7.MsgClaimFreeAmount;
        };
        MsgClaimFreeAmountResponse: {
            encode(message: _7.MsgClaimFreeAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_7.MsgClaimFreeAmountResponse>): _7.MsgClaimFreeAmountResponse;
        };
        MsgCreateAirdrop: {
            encode(message: _7.MsgCreateAirdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.MsgCreateAirdrop;
            fromPartial(object: Partial<_7.MsgCreateAirdrop>): _7.MsgCreateAirdrop;
        };
        MsgCreateAirdropResponse: {
            encode(_: _7.MsgCreateAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _7.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_7.MsgCreateAirdropResponse>): _7.MsgCreateAirdropResponse;
        };
        MsgDeleteAirdrop: {
            encode(message: _7.MsgDeleteAirdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _7.MsgDeleteAirdrop;
            fromPartial(object: Partial<_7.MsgDeleteAirdrop>): _7.MsgDeleteAirdrop;
        };
        MsgDeleteAirdropResponse: {
            encode(_: _7.MsgDeleteAirdropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _7.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_7.MsgDeleteAirdropResponse>): _7.MsgDeleteAirdropResponse;
        };
        ClaimStatus: {
            encode(message: _6.ClaimStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.ClaimStatus;
            fromPartial(object: Partial<_6.ClaimStatus>): _6.ClaimStatus;
        };
        QueryClaimStatusRequest: {
            encode(message: _6.QueryClaimStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryClaimStatusRequest;
            fromPartial(object: Partial<_6.QueryClaimStatusRequest>): _6.QueryClaimStatusRequest;
        };
        QueryClaimStatusResponse: {
            encode(message: _6.QueryClaimStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryClaimStatusResponse;
            fromPartial(object: Partial<_6.QueryClaimStatusResponse>): _6.QueryClaimStatusResponse;
        };
        ClaimMetadata: {
            encode(message: _6.ClaimMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.ClaimMetadata;
            fromPartial(object: Partial<_6.ClaimMetadata>): _6.ClaimMetadata;
        };
        QueryClaimMetadataRequest: {
            encode(_: _6.QueryClaimMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_6.QueryClaimMetadataRequest>): _6.QueryClaimMetadataRequest;
        };
        QueryClaimMetadataResponse: {
            encode(message: _6.QueryClaimMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_6.QueryClaimMetadataResponse>): _6.QueryClaimMetadataResponse;
        };
        QueryDistributorAccountBalanceRequest: {
            encode(message: _6.QueryDistributorAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_6.QueryDistributorAccountBalanceRequest>): _6.QueryDistributorAccountBalanceRequest;
        };
        QueryDistributorAccountBalanceResponse: {
            encode(message: _6.QueryDistributorAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_6.QueryDistributorAccountBalanceResponse>): _6.QueryDistributorAccountBalanceResponse;
        };
        QueryParamsRequest: {
            encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _6.QueryParamsRequest;
            fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryParamsResponse;
            fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
        };
        QueryClaimRecordRequest: {
            encode(message: _6.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryClaimRecordRequest;
            fromPartial(object: Partial<_6.QueryClaimRecordRequest>): _6.QueryClaimRecordRequest;
        };
        QueryClaimRecordResponse: {
            encode(message: _6.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryClaimRecordResponse;
            fromPartial(object: Partial<_6.QueryClaimRecordResponse>): _6.QueryClaimRecordResponse;
        };
        QueryClaimableForActionRequest: {
            encode(message: _6.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_6.QueryClaimableForActionRequest>): _6.QueryClaimableForActionRequest;
        };
        QueryClaimableForActionResponse: {
            encode(message: _6.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_6.QueryClaimableForActionResponse>): _6.QueryClaimableForActionResponse;
        };
        QueryTotalClaimableRequest: {
            encode(message: _6.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_6.QueryTotalClaimableRequest>): _6.QueryTotalClaimableRequest;
        };
        QueryTotalClaimableResponse: {
            encode(message: _6.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_6.QueryTotalClaimableResponse>): _6.QueryTotalClaimableResponse;
        };
        QueryUserVestingsRequest: {
            encode(message: _6.QueryUserVestingsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryUserVestingsRequest;
            fromPartial(object: Partial<_6.QueryUserVestingsRequest>): _6.QueryUserVestingsRequest;
        };
        QueryUserVestingsResponse: {
            encode(message: _6.QueryUserVestingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _6.QueryUserVestingsResponse;
            fromPartial(object: Partial<_6.QueryUserVestingsResponse>): _6.QueryUserVestingsResponse;
        };
        Params: {
            encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.Params;
            fromPartial(object: Partial<_5.Params>): _5.Params;
        };
        Airdrop: {
            encode(message: _5.Airdrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _5.Airdrop;
            fromPartial(object: Partial<_5.Airdrop>): _5.Airdrop;
        };
        GenesisState: {
            encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _4.GenesisState;
            fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
        };
        actionFromJSON(object: any): _3.Action;
        actionToJSON(object: _3.Action): string;
        Action: typeof _3.Action;
        ActionSDKType: typeof _3.Action;
        ClaimRecord: {
            encode(message: _3.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _3.ClaimRecord;
            fromPartial(object: Partial<_3.ClaimRecord>): _3.ClaimRecord;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _204.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _9.QueryEpochsInfoRequest): Promise<_9.QueryEpochsInfoResponse>;
            currentEpoch(request: _9.QueryCurrentEpochRequest): Promise<_9.QueryCurrentEpochResponse>;
            epochInfo(request: _9.QueryEpochInfoRequest): Promise<_9.QueryEpochInfoResponse>;
        };
        LCDQueryClient: typeof _196.LCDQueryClient;
        QueryEpochsInfoRequest: {
            encode(message: _9.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_9.QueryEpochsInfoRequest>): _9.QueryEpochsInfoRequest;
        };
        QueryEpochsInfoResponse: {
            encode(message: _9.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_9.QueryEpochsInfoResponse>): _9.QueryEpochsInfoResponse;
        };
        QueryCurrentEpochRequest: {
            encode(message: _9.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_9.QueryCurrentEpochRequest>): _9.QueryCurrentEpochRequest;
        };
        QueryCurrentEpochResponse: {
            encode(message: _9.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_9.QueryCurrentEpochResponse>): _9.QueryCurrentEpochResponse;
        };
        QueryEpochInfoRequest: {
            encode(message: _9.QueryEpochInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.QueryEpochInfoRequest;
            fromPartial(object: Partial<_9.QueryEpochInfoRequest>): _9.QueryEpochInfoRequest;
        };
        QueryEpochInfoResponse: {
            encode(message: _9.QueryEpochInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _9.QueryEpochInfoResponse;
            fromPartial(object: Partial<_9.QueryEpochInfoResponse>): _9.QueryEpochInfoResponse;
        };
        EpochInfo: {
            encode(message: _8.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _8.EpochInfo;
            fromPartial(object: Partial<_8.EpochInfo>): _8.EpochInfo;
        };
        GenesisState: {
            encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _8.GenesisState;
            fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _205.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
            callbackData(request: _14.QueryGetCallbackDataRequest): Promise<_14.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _14.QueryAllCallbackDataRequest): Promise<_14.QueryAllCallbackDataResponse>;
        };
        LCDQueryClient: typeof _197.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _14.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _14.QueryParamsRequest;
            fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _14.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _14.QueryParamsResponse;
            fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
        };
        QueryGetCallbackDataRequest: {
            encode(message: _14.QueryGetCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _14.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_14.QueryGetCallbackDataRequest>): _14.QueryGetCallbackDataRequest;
        };
        QueryGetCallbackDataResponse: {
            encode(message: _14.QueryGetCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _14.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_14.QueryGetCallbackDataResponse>): _14.QueryGetCallbackDataResponse;
        };
        QueryAllCallbackDataRequest: {
            encode(message: _14.QueryAllCallbackDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _14.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_14.QueryAllCallbackDataRequest>): _14.QueryAllCallbackDataRequest;
        };
        QueryAllCallbackDataResponse: {
            encode(message: _14.QueryAllCallbackDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _14.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_14.QueryAllCallbackDataResponse>): _14.QueryAllCallbackDataResponse;
        };
        Params: {
            encode(_: _13.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _13.Params;
            fromPartial(_: Partial<_13.Params>): _13.Params;
        };
        IcacallbacksPacketData: {
            encode(message: _12.IcacallbacksPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _12.IcacallbacksPacketData;
            fromPartial(object: Partial<_12.IcacallbacksPacketData>): _12.IcacallbacksPacketData;
        };
        NoData: {
            encode(_: _12.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _12.NoData;
            fromPartial(_: Partial<_12.NoData>): _12.NoData;
        };
        GenesisState: {
            encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _11.GenesisState;
            fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
        };
        CallbackData: {
            encode(message: _10.CallbackData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _10.CallbackData;
            fromPartial(object: Partial<_10.CallbackData>): _10.CallbackData;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _211.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _17.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _17.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _17.MsgSubmitQueryResponse;
                    };
                };
                fromJSON: {
                    submitQueryResponse(value: any): {
                        typeUrl: string;
                        value: _17.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _17.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _17.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: ({ chainId, queryId, result, proofOps, height, fromAddress }: _17.MsgSubmitQueryResponse) => {
                        chain_id: string;
                        query_id: string;
                        result: Uint8Array;
                        proof_ops: {
                            ops: {
                                type: string;
                                key: Uint8Array;
                                data: Uint8Array;
                            }[];
                        };
                        height: string;
                        from_address: string;
                    };
                    fromAmino: ({ chain_id, query_id, result, proof_ops, height, from_address }: {
                        chain_id: string;
                        query_id: string;
                        result: Uint8Array;
                        proof_ops: {
                            ops: {
                                type: string;
                                key: Uint8Array;
                                data: Uint8Array;
                            }[];
                        };
                        height: string;
                        from_address: string;
                    }) => _17.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                encode(_: _18.QueryPendingQueriesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _18.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_18.QueryPendingQueriesRequest>): _18.QueryPendingQueriesRequest;
            };
            QueryPendingQueriesResponse: {
                encode(message: _18.QueryPendingQueriesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_18.QueryPendingQueriesResponse>): _18.QueryPendingQueriesResponse;
            };
            MsgSubmitQueryResponse: {
                encode(message: _17.MsgSubmitQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_17.MsgSubmitQueryResponse>): _17.MsgSubmitQueryResponse;
            };
            MsgSubmitQueryResponseResponse: {
                encode(_: _17.MsgSubmitQueryResponseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_17.MsgSubmitQueryResponseResponse>): _17.MsgSubmitQueryResponseResponse;
            };
            Query: {
                encode(message: _16.Query, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.Query;
                fromPartial(object: Partial<_16.Query>): _16.Query;
            };
            DataPoint: {
                encode(message: _16.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.DataPoint;
                fromPartial(object: Partial<_16.DataPoint>): _16.DataPoint;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                epochProvisions(request?: _21.QueryEpochProvisionsRequest): Promise<_21.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _21.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _21.QueryParamsRequest;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _21.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryParamsResponse;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _21.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _21.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_21.QueryEpochProvisionsRequest>): _21.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _21.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_21.QueryEpochProvisionsResponse>): _21.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _20.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Minter;
                fromPartial(object: Partial<_20.Minter>): _20.Minter;
            };
            DistributionProportions: {
                encode(message: _20.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.DistributionProportions;
                fromPartial(object: Partial<_20.DistributionProportions>): _20.DistributionProportions;
            };
            Params: {
                encode(message: _20.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.Params;
                fromPartial(object: Partial<_20.Params>): _20.Params;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            };
        };
    }
    const ratelimit: {
        QueryClientImpl: typeof _207.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            allRateLimits(request?: _25.QueryAllRateLimitsRequest): Promise<_25.QueryAllRateLimitsResponse>;
            rateLimit(request: _25.QueryRateLimitRequest): Promise<_25.QueryRateLimitResponse>;
            rateLimitsByChainId(request: _25.QueryRateLimitsByChainIdRequest): Promise<_25.QueryRateLimitsByChainIdResponse>;
            rateLimitsByChannelId(request: _25.QueryRateLimitsByChannelIdRequest): Promise<_25.QueryRateLimitsByChannelIdResponse>;
            allBlacklistedDenoms(request?: _25.QueryAllBlacklistedDenomsRequest): Promise<_25.QueryAllBlacklistedDenomsResponse>;
            allWhitelistedAddresses(request?: _25.QueryAllWhitelistedAddressesRequest): Promise<_25.QueryAllWhitelistedAddressesResponse>;
        };
        LCDQueryClient: typeof _199.LCDQueryClient;
        packetDirectionFromJSON(object: any): _26.PacketDirection;
        packetDirectionToJSON(object: _26.PacketDirection): string;
        PacketDirection: typeof _26.PacketDirection;
        PacketDirectionSDKType: typeof _26.PacketDirection;
        Path: {
            encode(message: _26.Path, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _26.Path;
            fromPartial(object: Partial<_26.Path>): _26.Path;
        };
        Quota: {
            encode(message: _26.Quota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _26.Quota;
            fromPartial(object: Partial<_26.Quota>): _26.Quota;
        };
        Flow: {
            encode(message: _26.Flow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _26.Flow;
            fromPartial(object: Partial<_26.Flow>): _26.Flow;
        };
        RateLimit: {
            encode(message: _26.RateLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _26.RateLimit;
            fromPartial(object: Partial<_26.RateLimit>): _26.RateLimit;
        };
        WhitelistedAddressPair: {
            encode(message: _26.WhitelistedAddressPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _26.WhitelistedAddressPair;
            fromPartial(object: Partial<_26.WhitelistedAddressPair>): _26.WhitelistedAddressPair;
        };
        QueryAllRateLimitsRequest: {
            encode(_: _25.QueryAllRateLimitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _25.QueryAllRateLimitsRequest;
            fromPartial(_: Partial<_25.QueryAllRateLimitsRequest>): _25.QueryAllRateLimitsRequest;
        };
        QueryAllRateLimitsResponse: {
            encode(message: _25.QueryAllRateLimitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryAllRateLimitsResponse;
            fromPartial(object: Partial<_25.QueryAllRateLimitsResponse>): _25.QueryAllRateLimitsResponse;
        };
        QueryRateLimitRequest: {
            encode(message: _25.QueryRateLimitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryRateLimitRequest;
            fromPartial(object: Partial<_25.QueryRateLimitRequest>): _25.QueryRateLimitRequest;
        };
        QueryRateLimitResponse: {
            encode(message: _25.QueryRateLimitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryRateLimitResponse;
            fromPartial(object: Partial<_25.QueryRateLimitResponse>): _25.QueryRateLimitResponse;
        };
        QueryRateLimitsByChainIdRequest: {
            encode(message: _25.QueryRateLimitsByChainIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryRateLimitsByChainIdRequest;
            fromPartial(object: Partial<_25.QueryRateLimitsByChainIdRequest>): _25.QueryRateLimitsByChainIdRequest;
        };
        QueryRateLimitsByChainIdResponse: {
            encode(message: _25.QueryRateLimitsByChainIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryRateLimitsByChainIdResponse;
            fromPartial(object: Partial<_25.QueryRateLimitsByChainIdResponse>): _25.QueryRateLimitsByChainIdResponse;
        };
        QueryRateLimitsByChannelIdRequest: {
            encode(message: _25.QueryRateLimitsByChannelIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryRateLimitsByChannelIdRequest;
            fromPartial(object: Partial<_25.QueryRateLimitsByChannelIdRequest>): _25.QueryRateLimitsByChannelIdRequest;
        };
        QueryRateLimitsByChannelIdResponse: {
            encode(message: _25.QueryRateLimitsByChannelIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryRateLimitsByChannelIdResponse;
            fromPartial(object: Partial<_25.QueryRateLimitsByChannelIdResponse>): _25.QueryRateLimitsByChannelIdResponse;
        };
        QueryAllBlacklistedDenomsRequest: {
            encode(_: _25.QueryAllBlacklistedDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _25.QueryAllBlacklistedDenomsRequest;
            fromPartial(_: Partial<_25.QueryAllBlacklistedDenomsRequest>): _25.QueryAllBlacklistedDenomsRequest;
        };
        QueryAllBlacklistedDenomsResponse: {
            encode(message: _25.QueryAllBlacklistedDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryAllBlacklistedDenomsResponse;
            fromPartial(object: Partial<_25.QueryAllBlacklistedDenomsResponse>): _25.QueryAllBlacklistedDenomsResponse;
        };
        QueryAllWhitelistedAddressesRequest: {
            encode(_: _25.QueryAllWhitelistedAddressesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _25.QueryAllWhitelistedAddressesRequest;
            fromPartial(_: Partial<_25.QueryAllWhitelistedAddressesRequest>): _25.QueryAllWhitelistedAddressesRequest;
        };
        QueryAllWhitelistedAddressesResponse: {
            encode(message: _25.QueryAllWhitelistedAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _25.QueryAllWhitelistedAddressesResponse;
            fromPartial(object: Partial<_25.QueryAllWhitelistedAddressesResponse>): _25.QueryAllWhitelistedAddressesResponse;
        };
        Params: {
            encode(_: _24.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _24.Params;
            fromPartial(_: Partial<_24.Params>): _24.Params;
        };
        AddRateLimitProposal: {
            encode(message: _23.AddRateLimitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _23.AddRateLimitProposal;
            fromPartial(object: Partial<_23.AddRateLimitProposal>): _23.AddRateLimitProposal;
        };
        UpdateRateLimitProposal: {
            encode(message: _23.UpdateRateLimitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _23.UpdateRateLimitProposal;
            fromPartial(object: Partial<_23.UpdateRateLimitProposal>): _23.UpdateRateLimitProposal;
        };
        RemoveRateLimitProposal: {
            encode(message: _23.RemoveRateLimitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _23.RemoveRateLimitProposal;
            fromPartial(object: Partial<_23.RemoveRateLimitProposal>): _23.RemoveRateLimitProposal;
        };
        ResetRateLimitProposal: {
            encode(message: _23.ResetRateLimitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _23.ResetRateLimitProposal;
            fromPartial(object: Partial<_23.ResetRateLimitProposal>): _23.ResetRateLimitProposal;
        };
        GenesisState: {
            encode(message: _22.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _22.GenesisState;
            fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
        };
    };
    const records: {
        QueryClientImpl: typeof _208.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
            userRedemptionRecord(request: _29.QueryGetUserRedemptionRecordRequest): Promise<_29.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _29.QueryAllUserRedemptionRecordRequest): Promise<_29.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _29.QueryAllUserRedemptionRecordForUserRequest): Promise<_29.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _29.QueryGetEpochUnbondingRecordRequest): Promise<_29.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _29.QueryAllEpochUnbondingRecordRequest): Promise<_29.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _29.QueryGetDepositRecordRequest): Promise<_29.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _29.QueryAllDepositRecordRequest): Promise<_29.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _29.QueryDepositRecordByHostRequest): Promise<_29.QueryDepositRecordByHostResponse>;
        };
        LCDQueryClient: typeof _200.LCDQueryClient;
        QueryParamsRequest: {
            encode(_: _29.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _29.QueryParamsRequest;
            fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _29.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryParamsResponse;
            fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
        };
        QueryGetDepositRecordRequest: {
            encode(message: _29.QueryGetDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_29.QueryGetDepositRecordRequest>): _29.QueryGetDepositRecordRequest;
        };
        QueryGetDepositRecordResponse: {
            encode(message: _29.QueryGetDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_29.QueryGetDepositRecordResponse>): _29.QueryGetDepositRecordResponse;
        };
        QueryAllDepositRecordRequest: {
            encode(message: _29.QueryAllDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_29.QueryAllDepositRecordRequest>): _29.QueryAllDepositRecordRequest;
        };
        QueryAllDepositRecordResponse: {
            encode(message: _29.QueryAllDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_29.QueryAllDepositRecordResponse>): _29.QueryAllDepositRecordResponse;
        };
        QueryDepositRecordByHostRequest: {
            encode(message: _29.QueryDepositRecordByHostRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_29.QueryDepositRecordByHostRequest>): _29.QueryDepositRecordByHostRequest;
        };
        QueryDepositRecordByHostResponse: {
            encode(message: _29.QueryDepositRecordByHostResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_29.QueryDepositRecordByHostResponse>): _29.QueryDepositRecordByHostResponse;
        };
        QueryGetUserRedemptionRecordRequest: {
            encode(message: _29.QueryGetUserRedemptionRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_29.QueryGetUserRedemptionRecordRequest>): _29.QueryGetUserRedemptionRecordRequest;
        };
        QueryGetUserRedemptionRecordResponse: {
            encode(message: _29.QueryGetUserRedemptionRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_29.QueryGetUserRedemptionRecordResponse>): _29.QueryGetUserRedemptionRecordResponse;
        };
        QueryAllUserRedemptionRecordRequest: {
            encode(message: _29.QueryAllUserRedemptionRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_29.QueryAllUserRedemptionRecordRequest>): _29.QueryAllUserRedemptionRecordRequest;
        };
        QueryAllUserRedemptionRecordResponse: {
            encode(message: _29.QueryAllUserRedemptionRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_29.QueryAllUserRedemptionRecordResponse>): _29.QueryAllUserRedemptionRecordResponse;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            encode(message: _29.QueryAllUserRedemptionRecordForUserRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_29.QueryAllUserRedemptionRecordForUserRequest>): _29.QueryAllUserRedemptionRecordForUserRequest;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            encode(message: _29.QueryAllUserRedemptionRecordForUserResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_29.QueryAllUserRedemptionRecordForUserResponse>): _29.QueryAllUserRedemptionRecordForUserResponse;
        };
        QueryGetEpochUnbondingRecordRequest: {
            encode(message: _29.QueryGetEpochUnbondingRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_29.QueryGetEpochUnbondingRecordRequest>): _29.QueryGetEpochUnbondingRecordRequest;
        };
        QueryGetEpochUnbondingRecordResponse: {
            encode(message: _29.QueryGetEpochUnbondingRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_29.QueryGetEpochUnbondingRecordResponse>): _29.QueryGetEpochUnbondingRecordResponse;
        };
        QueryAllEpochUnbondingRecordRequest: {
            encode(message: _29.QueryAllEpochUnbondingRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_29.QueryAllEpochUnbondingRecordRequest>): _29.QueryAllEpochUnbondingRecordRequest;
        };
        QueryAllEpochUnbondingRecordResponse: {
            encode(message: _29.QueryAllEpochUnbondingRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _29.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_29.QueryAllEpochUnbondingRecordResponse>): _29.QueryAllEpochUnbondingRecordResponse;
        };
        depositRecord_StatusFromJSON(object: any): _28.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _28.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _28.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _28.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _28.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _28.HostZoneUnbonding_Status): string;
        DepositRecord_Status: typeof _28.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _28.DepositRecord_Status;
        DepositRecord_Source: typeof _28.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _28.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _28.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _28.HostZoneUnbonding_Status;
        UserRedemptionRecord: {
            encode(message: _28.UserRedemptionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.UserRedemptionRecord;
            fromPartial(object: Partial<_28.UserRedemptionRecord>): _28.UserRedemptionRecord;
        };
        Params: {
            encode(_: _28.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.Params;
            fromPartial(_: Partial<_28.Params>): _28.Params;
        };
        RecordsPacketData: {
            encode(message: _28.RecordsPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.RecordsPacketData;
            fromPartial(object: Partial<_28.RecordsPacketData>): _28.RecordsPacketData;
        };
        NoData: {
            encode(_: _28.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _28.NoData;
            fromPartial(_: Partial<_28.NoData>): _28.NoData;
        };
        DepositRecord: {
            encode(message: _28.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.DepositRecord;
            fromPartial(object: Partial<_28.DepositRecord>): _28.DepositRecord;
        };
        HostZoneUnbonding: {
            encode(message: _28.HostZoneUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.HostZoneUnbonding;
            fromPartial(object: Partial<_28.HostZoneUnbonding>): _28.HostZoneUnbonding;
        };
        EpochUnbondingRecord: {
            encode(message: _28.EpochUnbondingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.EpochUnbondingRecord;
            fromPartial(object: Partial<_28.EpochUnbondingRecord>): _28.EpochUnbondingRecord;
        };
        GenesisState: {
            encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _28.GenesisState;
            fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
        };
        TransferCallback: {
            encode(message: _27.TransferCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _27.TransferCallback;
            fromPartial(object: Partial<_27.TransferCallback>): _27.TransferCallback;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _212.MsgClientImpl;
        QueryClientImpl: typeof _209.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
            validators(request: _39.QueryGetValidatorsRequest): Promise<_39.QueryGetValidatorsResponse>;
            hostZone(request: _39.QueryGetHostZoneRequest): Promise<_39.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _39.QueryAllHostZoneRequest): Promise<_39.QueryAllHostZoneResponse>;
            moduleAddress(request: _39.QueryModuleAddressRequest): Promise<_39.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _39.QueryInterchainAccountFromAddressRequest): Promise<_39.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _39.QueryGetEpochTrackerRequest): Promise<_39.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _39.QueryAllEpochTrackerRequest): Promise<_39.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _39.QueryGetNextPacketSequenceRequest): Promise<_39.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _39.QueryAddressUnbondings): Promise<_39.QueryAddressUnbondingsResponse>;
        };
        LCDQueryClient: typeof _201.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _40.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _40.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _40.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _40.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _40.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _40.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _40.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _40.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _40.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _40.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _40.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _40.MsgLiquidStake): {
                    typeUrl: string;
                    value: _40.MsgLiquidStake;
                };
                redeemStake(value: _40.MsgRedeemStake): {
                    typeUrl: string;
                    value: _40.MsgRedeemStake;
                };
                registerHostZone(value: _40.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _40.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _40.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _40.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _40.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _40.MsgRebalanceValidators;
                };
                addValidators(value: _40.MsgAddValidators): {
                    typeUrl: string;
                    value: _40.MsgAddValidators;
                };
                changeValidatorWeight(value: _40.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: _40.MsgChangeValidatorWeight;
                };
                deleteValidator(value: _40.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _40.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _40.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _40.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _40.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _40.MsgUpdateValidatorSharesExchRate;
                };
                clearBalance(value: _40.MsgClearBalance): {
                    typeUrl: string;
                    value: _40.MsgClearBalance;
                };
            };
            fromJSON: {
                liquidStake(value: any): {
                    typeUrl: string;
                    value: _40.MsgLiquidStake;
                };
                redeemStake(value: any): {
                    typeUrl: string;
                    value: _40.MsgRedeemStake;
                };
                registerHostZone(value: any): {
                    typeUrl: string;
                    value: _40.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: any): {
                    typeUrl: string;
                    value: _40.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: any): {
                    typeUrl: string;
                    value: _40.MsgRebalanceValidators;
                };
                addValidators(value: any): {
                    typeUrl: string;
                    value: _40.MsgAddValidators;
                };
                changeValidatorWeight(value: any): {
                    typeUrl: string;
                    value: _40.MsgChangeValidatorWeight;
                };
                deleteValidator(value: any): {
                    typeUrl: string;
                    value: _40.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: any): {
                    typeUrl: string;
                    value: _40.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: any): {
                    typeUrl: string;
                    value: _40.MsgUpdateValidatorSharesExchRate;
                };
                clearBalance(value: any): {
                    typeUrl: string;
                    value: _40.MsgClearBalance;
                };
            };
            fromPartial: {
                liquidStake(value: _40.MsgLiquidStake): {
                    typeUrl: string;
                    value: _40.MsgLiquidStake;
                };
                redeemStake(value: _40.MsgRedeemStake): {
                    typeUrl: string;
                    value: _40.MsgRedeemStake;
                };
                registerHostZone(value: _40.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _40.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _40.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _40.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _40.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _40.MsgRebalanceValidators;
                };
                addValidators(value: _40.MsgAddValidators): {
                    typeUrl: string;
                    value: _40.MsgAddValidators;
                };
                changeValidatorWeight(value: _40.MsgChangeValidatorWeight): {
                    typeUrl: string;
                    value: _40.MsgChangeValidatorWeight;
                };
                deleteValidator(value: _40.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _40.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _40.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _40.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _40.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _40.MsgUpdateValidatorSharesExchRate;
                };
                clearBalance(value: _40.MsgClearBalance): {
                    typeUrl: string;
                    value: _40.MsgClearBalance;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: ({ creator, amount, hostDenom }: _40.MsgLiquidStake) => {
                    creator: string;
                    amount: string;
                    host_denom: string;
                };
                fromAmino: ({ creator, amount, host_denom }: {
                    creator: string;
                    amount: string;
                    host_denom: string;
                }) => _40.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: ({ creator, amount, hostZone, receiver }: _40.MsgRedeemStake) => {
                    creator: string;
                    amount: string;
                    host_zone: string;
                    receiver: string;
                };
                fromAmino: ({ creator, amount, host_zone, receiver }: {
                    creator: string;
                    amount: string;
                    host_zone: string;
                    receiver: string;
                }) => _40.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingFrequency, minRedemptionRate, maxRedemptionRate }: _40.MsgRegisterHostZone) => {
                    connection_id: string;
                    bech32prefix: string;
                    host_denom: string;
                    ibc_denom: string;
                    creator: string;
                    transfer_channel_id: string;
                    unbonding_frequency: string;
                    min_redemption_rate: string;
                    max_redemption_rate: string;
                };
                fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_frequency, min_redemption_rate, max_redemption_rate }: {
                    connection_id: string;
                    bech32prefix: string;
                    host_denom: string;
                    ibc_denom: string;
                    creator: string;
                    transfer_channel_id: string;
                    unbonding_frequency: string;
                    min_redemption_rate: string;
                    max_redemption_rate: string;
                }) => _40.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: ({ creator, hostZoneId, epoch, sender }: _40.MsgClaimUndelegatedTokens) => {
                    creator: string;
                    host_zone_id: string;
                    epoch: string;
                    sender: string;
                };
                fromAmino: ({ creator, host_zone_id, epoch, sender }: {
                    creator: string;
                    host_zone_id: string;
                    epoch: string;
                    sender: string;
                }) => _40.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: ({ creator, hostZone, numRebalance }: _40.MsgRebalanceValidators) => {
                    creator: string;
                    host_zone: string;
                    num_rebalance: string;
                };
                fromAmino: ({ creator, host_zone, num_rebalance }: {
                    creator: string;
                    host_zone: string;
                    num_rebalance: string;
                }) => _40.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: ({ creator, hostZone, validators }: _40.MsgAddValidators) => {
                    creator: string;
                    host_zone: string;
                    validators: {
                        name: string;
                        address: string;
                        delegation_amt: string;
                        weight: string;
                        internal_exchange_rate: {
                            internal_tokens_to_shares_rate: string;
                            epoch_number: string;
                        };
                    }[];
                };
                fromAmino: ({ creator, host_zone, validators }: {
                    creator: string;
                    host_zone: string;
                    validators: {
                        name: string;
                        address: string;
                        delegation_amt: string;
                        weight: string;
                        internal_exchange_rate: {
                            internal_tokens_to_shares_rate: string;
                            epoch_number: string;
                        };
                    }[];
                }) => _40.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeight": {
                aminoType: string;
                toAmino: ({ creator, hostZone, valAddr, weight }: _40.MsgChangeValidatorWeight) => {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                    weight: string;
                };
                fromAmino: ({ creator, host_zone, val_addr, weight }: {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                    weight: string;
                }) => _40.MsgChangeValidatorWeight;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: ({ creator, hostZone, valAddr }: _40.MsgDeleteValidator) => {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                };
                fromAmino: ({ creator, host_zone, val_addr }: {
                    creator: string;
                    host_zone: string;
                    val_addr: string;
                }) => _40.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: ({ creator, chainId, accountType }: _40.MsgRestoreInterchainAccount) => {
                    creator: string;
                    chain_id: string;
                    account_type: number;
                };
                fromAmino: ({ creator, chain_id, account_type }: {
                    creator: string;
                    chain_id: string;
                    account_type: number;
                }) => _40.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: ({ creator, chainId, valoper }: _40.MsgUpdateValidatorSharesExchRate) => {
                    creator: string;
                    chain_id: string;
                    valoper: string;
                };
                fromAmino: ({ creator, chain_id, valoper }: {
                    creator: string;
                    chain_id: string;
                    valoper: string;
                }) => _40.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: ({ creator, chainId, amount, channel }: _40.MsgClearBalance) => {
                    creator: string;
                    chain_id: string;
                    amount: string;
                    channel: string;
                };
                fromAmino: ({ creator, chain_id, amount, channel }: {
                    creator: string;
                    chain_id: string;
                    amount: string;
                    channel: string;
                }) => _40.MsgClearBalance;
            };
        };
        ValidatorExchangeRate: {
            encode(message: _41.ValidatorExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.ValidatorExchangeRate;
            fromPartial(object: Partial<_41.ValidatorExchangeRate>): _41.ValidatorExchangeRate;
        };
        Validator: {
            encode(message: _41.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _41.Validator;
            fromPartial(object: Partial<_41.Validator>): _41.Validator;
        };
        MsgLiquidStake: {
            encode(message: _40.MsgLiquidStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgLiquidStake;
            fromPartial(object: Partial<_40.MsgLiquidStake>): _40.MsgLiquidStake;
        };
        MsgLiquidStakeResponse: {
            encode(_: _40.MsgLiquidStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgLiquidStakeResponse;
            fromPartial(_: Partial<_40.MsgLiquidStakeResponse>): _40.MsgLiquidStakeResponse;
        };
        MsgClearBalance: {
            encode(message: _40.MsgClearBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgClearBalance;
            fromPartial(object: Partial<_40.MsgClearBalance>): _40.MsgClearBalance;
        };
        MsgClearBalanceResponse: {
            encode(_: _40.MsgClearBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgClearBalanceResponse;
            fromPartial(_: Partial<_40.MsgClearBalanceResponse>): _40.MsgClearBalanceResponse;
        };
        MsgRedeemStake: {
            encode(message: _40.MsgRedeemStake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgRedeemStake;
            fromPartial(object: Partial<_40.MsgRedeemStake>): _40.MsgRedeemStake;
        };
        MsgRedeemStakeResponse: {
            encode(_: _40.MsgRedeemStakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_40.MsgRedeemStakeResponse>): _40.MsgRedeemStakeResponse;
        };
        MsgRegisterHostZone: {
            encode(message: _40.MsgRegisterHostZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgRegisterHostZone;
            fromPartial(object: Partial<_40.MsgRegisterHostZone>): _40.MsgRegisterHostZone;
        };
        MsgRegisterHostZoneResponse: {
            encode(_: _40.MsgRegisterHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_40.MsgRegisterHostZoneResponse>): _40.MsgRegisterHostZoneResponse;
        };
        MsgClaimUndelegatedTokens: {
            encode(message: _40.MsgClaimUndelegatedTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_40.MsgClaimUndelegatedTokens>): _40.MsgClaimUndelegatedTokens;
        };
        MsgClaimUndelegatedTokensResponse: {
            encode(_: _40.MsgClaimUndelegatedTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_40.MsgClaimUndelegatedTokensResponse>): _40.MsgClaimUndelegatedTokensResponse;
        };
        MsgRebalanceValidators: {
            encode(message: _40.MsgRebalanceValidators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgRebalanceValidators;
            fromPartial(object: Partial<_40.MsgRebalanceValidators>): _40.MsgRebalanceValidators;
        };
        MsgRebalanceValidatorsResponse: {
            encode(_: _40.MsgRebalanceValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_40.MsgRebalanceValidatorsResponse>): _40.MsgRebalanceValidatorsResponse;
        };
        MsgAddValidators: {
            encode(message: _40.MsgAddValidators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgAddValidators;
            fromPartial(object: Partial<_40.MsgAddValidators>): _40.MsgAddValidators;
        };
        MsgAddValidatorsResponse: {
            encode(_: _40.MsgAddValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_40.MsgAddValidatorsResponse>): _40.MsgAddValidatorsResponse;
        };
        MsgChangeValidatorWeight: {
            encode(message: _40.MsgChangeValidatorWeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgChangeValidatorWeight;
            fromPartial(object: Partial<_40.MsgChangeValidatorWeight>): _40.MsgChangeValidatorWeight;
        };
        MsgChangeValidatorWeightResponse: {
            encode(_: _40.MsgChangeValidatorWeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgChangeValidatorWeightResponse;
            fromPartial(_: Partial<_40.MsgChangeValidatorWeightResponse>): _40.MsgChangeValidatorWeightResponse;
        };
        MsgDeleteValidator: {
            encode(message: _40.MsgDeleteValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgDeleteValidator;
            fromPartial(object: Partial<_40.MsgDeleteValidator>): _40.MsgDeleteValidator;
        };
        MsgDeleteValidatorResponse: {
            encode(_: _40.MsgDeleteValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_40.MsgDeleteValidatorResponse>): _40.MsgDeleteValidatorResponse;
        };
        MsgRestoreInterchainAccount: {
            encode(message: _40.MsgRestoreInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_40.MsgRestoreInterchainAccount>): _40.MsgRestoreInterchainAccount;
        };
        MsgRestoreInterchainAccountResponse: {
            encode(_: _40.MsgRestoreInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_40.MsgRestoreInterchainAccountResponse>): _40.MsgRestoreInterchainAccountResponse;
        };
        MsgUpdateValidatorSharesExchRate: {
            encode(message: _40.MsgUpdateValidatorSharesExchRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _40.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_40.MsgUpdateValidatorSharesExchRate>): _40.MsgUpdateValidatorSharesExchRate;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            encode(_: _40.MsgUpdateValidatorSharesExchRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _40.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_40.MsgUpdateValidatorSharesExchRateResponse>): _40.MsgUpdateValidatorSharesExchRateResponse;
        };
        QueryInterchainAccountFromAddressRequest: {
            encode(message: _39.QueryInterchainAccountFromAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_39.QueryInterchainAccountFromAddressRequest>): _39.QueryInterchainAccountFromAddressRequest;
        };
        QueryInterchainAccountFromAddressResponse: {
            encode(message: _39.QueryInterchainAccountFromAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_39.QueryInterchainAccountFromAddressResponse>): _39.QueryInterchainAccountFromAddressResponse;
        };
        QueryParamsRequest: {
            encode(_: _39.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _39.QueryParamsRequest;
            fromPartial(_: Partial<_39.QueryParamsRequest>): _39.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _39.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryParamsResponse;
            fromPartial(object: Partial<_39.QueryParamsResponse>): _39.QueryParamsResponse;
        };
        QueryGetValidatorsRequest: {
            encode(message: _39.QueryGetValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_39.QueryGetValidatorsRequest>): _39.QueryGetValidatorsRequest;
        };
        QueryGetValidatorsResponse: {
            encode(message: _39.QueryGetValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_39.QueryGetValidatorsResponse>): _39.QueryGetValidatorsResponse;
        };
        QueryGetHostZoneRequest: {
            encode(message: _39.QueryGetHostZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_39.QueryGetHostZoneRequest>): _39.QueryGetHostZoneRequest;
        };
        QueryGetHostZoneResponse: {
            encode(message: _39.QueryGetHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_39.QueryGetHostZoneResponse>): _39.QueryGetHostZoneResponse;
        };
        QueryAllHostZoneRequest: {
            encode(message: _39.QueryAllHostZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_39.QueryAllHostZoneRequest>): _39.QueryAllHostZoneRequest;
        };
        QueryAllHostZoneResponse: {
            encode(message: _39.QueryAllHostZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_39.QueryAllHostZoneResponse>): _39.QueryAllHostZoneResponse;
        };
        QueryModuleAddressRequest: {
            encode(message: _39.QueryModuleAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryModuleAddressRequest;
            fromPartial(object: Partial<_39.QueryModuleAddressRequest>): _39.QueryModuleAddressRequest;
        };
        QueryModuleAddressResponse: {
            encode(message: _39.QueryModuleAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryModuleAddressResponse;
            fromPartial(object: Partial<_39.QueryModuleAddressResponse>): _39.QueryModuleAddressResponse;
        };
        QueryGetEpochTrackerRequest: {
            encode(message: _39.QueryGetEpochTrackerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_39.QueryGetEpochTrackerRequest>): _39.QueryGetEpochTrackerRequest;
        };
        QueryGetEpochTrackerResponse: {
            encode(message: _39.QueryGetEpochTrackerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_39.QueryGetEpochTrackerResponse>): _39.QueryGetEpochTrackerResponse;
        };
        QueryAllEpochTrackerRequest: {
            encode(_: _39.QueryAllEpochTrackerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _39.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_39.QueryAllEpochTrackerRequest>): _39.QueryAllEpochTrackerRequest;
        };
        QueryAllEpochTrackerResponse: {
            encode(message: _39.QueryAllEpochTrackerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_39.QueryAllEpochTrackerResponse>): _39.QueryAllEpochTrackerResponse;
        };
        QueryGetNextPacketSequenceRequest: {
            encode(message: _39.QueryGetNextPacketSequenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_39.QueryGetNextPacketSequenceRequest>): _39.QueryGetNextPacketSequenceRequest;
        };
        QueryGetNextPacketSequenceResponse: {
            encode(message: _39.QueryGetNextPacketSequenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_39.QueryGetNextPacketSequenceResponse>): _39.QueryGetNextPacketSequenceResponse;
        };
        QueryAddressUnbondings: {
            encode(message: _39.QueryAddressUnbondings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryAddressUnbondings;
            fromPartial(object: Partial<_39.QueryAddressUnbondings>): _39.QueryAddressUnbondings;
        };
        QueryAddressUnbondingsResponse: {
            encode(message: _39.QueryAddressUnbondingsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _39.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_39.QueryAddressUnbondingsResponse>): _39.QueryAddressUnbondingsResponse;
        };
        Params: {
            encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _38.Params;
            fromPartial(object: Partial<_38.Params>): _38.Params;
        };
        StakeibcPacketData: {
            encode(message: _37.StakeibcPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _37.StakeibcPacketData;
            fromPartial(object: Partial<_37.StakeibcPacketData>): _37.StakeibcPacketData;
        };
        NoData: {
            encode(_: _37.NoData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _37.NoData;
            fromPartial(_: Partial<_37.NoData>): _37.NoData;
        };
        iCAAccountTypeFromJSON(object: any): _36.ICAAccountType;
        iCAAccountTypeToJSON(object: _36.ICAAccountType): string;
        ICAAccountType: typeof _36.ICAAccountType;
        ICAAccountTypeSDKType: typeof _36.ICAAccountType;
        ICAAccount: {
            encode(message: _36.ICAAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _36.ICAAccount;
            fromPartial(object: Partial<_36.ICAAccount>): _36.ICAAccount;
        };
        HostZone: {
            encode(message: _35.HostZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _35.HostZone;
            fromPartial(object: Partial<_35.HostZone>): _35.HostZone;
        };
        AddValidatorsProposal: {
            encode(message: _34.AddValidatorsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _34.AddValidatorsProposal;
            fromPartial(object: Partial<_34.AddValidatorsProposal>): _34.AddValidatorsProposal;
        };
        GenesisState: {
            encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _33.GenesisState;
            fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
        };
        EpochTracker: {
            encode(message: _32.EpochTracker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _32.EpochTracker;
            fromPartial(object: Partial<_32.EpochTracker>): _32.EpochTracker;
        };
        SplitDelegation: {
            encode(message: _31.SplitDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _31.SplitDelegation;
            fromPartial(object: Partial<_31.SplitDelegation>): _31.SplitDelegation;
        };
        DelegateCallback: {
            encode(message: _31.DelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _31.DelegateCallback;
            fromPartial(object: Partial<_31.DelegateCallback>): _31.DelegateCallback;
        };
        ClaimCallback: {
            encode(message: _31.ClaimCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _31.ClaimCallback;
            fromPartial(object: Partial<_31.ClaimCallback>): _31.ClaimCallback;
        };
        ReinvestCallback: {
            encode(message: _31.ReinvestCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _31.ReinvestCallback;
            fromPartial(object: Partial<_31.ReinvestCallback>): _31.ReinvestCallback;
        };
        UndelegateCallback: {
            encode(message: _31.UndelegateCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _31.UndelegateCallback;
            fromPartial(object: Partial<_31.UndelegateCallback>): _31.UndelegateCallback;
        };
        RedemptionCallback: {
            encode(message: _31.RedemptionCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _31.RedemptionCallback;
            fromPartial(object: Partial<_31.RedemptionCallback>): _31.RedemptionCallback;
        };
        Rebalancing: {
            encode(message: _31.Rebalancing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _31.Rebalancing;
            fromPartial(object: Partial<_31.Rebalancing>): _31.Rebalancing;
        };
        RebalanceCallback: {
            encode(message: _31.RebalanceCallback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _31.RebalanceCallback;
            fromPartial(object: Partial<_31.RebalanceCallback>): _31.RebalanceCallback;
        };
        AddressUnbonding: {
            encode(message: _30.AddressUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _30.AddressUnbonding;
            fromPartial(object: Partial<_30.AddressUnbonding>): _30.AddressUnbonding;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            encode(message: _43.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _43.BaseVestingAccount;
            fromPartial(object: Partial<_43.BaseVestingAccount>): _43.BaseVestingAccount;
        };
        Period: {
            encode(message: _43.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _43.Period;
            fromPartial(object: Partial<_43.Period>): _43.Period;
        };
        StridePeriodicVestingAccount: {
            encode(message: _43.StridePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _43.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_43.StridePeriodicVestingAccount>): _43.StridePeriodicVestingAccount;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            stride: {
                claim: _210.MsgClientImpl;
                interchainquery: {
                    v1: _211.MsgClientImpl;
                };
                stakeibc: _212.MsgClientImpl;
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
            stride: {
                autopilot: {
                    params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _6.QueryDistributorAccountBalanceRequest): Promise<_6.QueryDistributorAccountBalanceResponse>;
                    params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                    claimRecord(request: _6.QueryClaimRecordRequest): Promise<_6.QueryClaimRecordResponse>;
                    claimableForAction(request: _6.QueryClaimableForActionRequest): Promise<_6.QueryClaimableForActionResponse>;
                    totalClaimable(request: _6.QueryTotalClaimableRequest): Promise<_6.QueryTotalClaimableResponse>;
                    userVestings(request: _6.QueryUserVestingsRequest): Promise<_6.QueryUserVestingsResponse>;
                    claimStatus(request: _6.QueryClaimStatusRequest): Promise<_6.QueryClaimStatusResponse>;
                    claimMetadata(request?: _6.QueryClaimMetadataRequest): Promise<_6.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _9.QueryEpochsInfoRequest): Promise<_9.QueryEpochsInfoResponse>;
                    currentEpoch(request: _9.QueryCurrentEpochRequest): Promise<_9.QueryCurrentEpochResponse>;
                    epochInfo(request: _9.QueryEpochInfoRequest): Promise<_9.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                    callbackData(request: _14.QueryGetCallbackDataRequest): Promise<_14.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _14.QueryAllCallbackDataRequest): Promise<_14.QueryAllCallbackDataResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                        epochProvisions(request?: _21.QueryEpochProvisionsRequest): Promise<_21.QueryEpochProvisionsResponse>;
                    };
                };
                ratelimit: {
                    allRateLimits(request?: _25.QueryAllRateLimitsRequest): Promise<_25.QueryAllRateLimitsResponse>;
                    rateLimit(request: _25.QueryRateLimitRequest): Promise<_25.QueryRateLimitResponse>;
                    rateLimitsByChainId(request: _25.QueryRateLimitsByChainIdRequest): Promise<_25.QueryRateLimitsByChainIdResponse>;
                    rateLimitsByChannelId(request: _25.QueryRateLimitsByChannelIdRequest): Promise<_25.QueryRateLimitsByChannelIdResponse>;
                    allBlacklistedDenoms(request?: _25.QueryAllBlacklistedDenomsRequest): Promise<_25.QueryAllBlacklistedDenomsResponse>;
                    allWhitelistedAddresses(request?: _25.QueryAllWhitelistedAddressesRequest): Promise<_25.QueryAllWhitelistedAddressesResponse>;
                };
                records: {
                    params(request?: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                    userRedemptionRecord(request: _29.QueryGetUserRedemptionRecordRequest): Promise<_29.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _29.QueryAllUserRedemptionRecordRequest): Promise<_29.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _29.QueryAllUserRedemptionRecordForUserRequest): Promise<_29.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _29.QueryGetEpochUnbondingRecordRequest): Promise<_29.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _29.QueryAllEpochUnbondingRecordRequest): Promise<_29.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _29.QueryGetDepositRecordRequest): Promise<_29.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _29.QueryAllDepositRecordRequest): Promise<_29.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _29.QueryDepositRecordByHostRequest): Promise<_29.QueryDepositRecordByHostResponse>;
                };
                stakeibc: {
                    params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                    validators(request: _39.QueryGetValidatorsRequest): Promise<_39.QueryGetValidatorsResponse>;
                    hostZone(request: _39.QueryGetHostZoneRequest): Promise<_39.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _39.QueryAllHostZoneRequest): Promise<_39.QueryAllHostZoneResponse>;
                    moduleAddress(request: _39.QueryModuleAddressRequest): Promise<_39.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _39.QueryInterchainAccountFromAddressRequest): Promise<_39.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _39.QueryGetEpochTrackerRequest): Promise<_39.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _39.QueryAllEpochTrackerRequest): Promise<_39.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _39.QueryGetNextPacketSequenceRequest): Promise<_39.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _39.QueryAddressUnbondings): Promise<_39.QueryAddressUnbondingsResponse>;
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
            stride: {
                autopilot: _194.LCDQueryClient;
                claim: _195.LCDQueryClient;
                epochs: _196.LCDQueryClient;
                icacallbacks: _197.LCDQueryClient;
                mint: {
                    v1beta1: _198.LCDQueryClient;
                };
                ratelimit: _199.LCDQueryClient;
                records: _200.LCDQueryClient;
                stakeibc: _201.LCDQueryClient;
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
