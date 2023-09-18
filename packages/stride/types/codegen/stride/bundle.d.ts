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
import * as _195 from "./autopilot/query.lcd";
import * as _196 from "./claim/query.lcd";
import * as _197 from "./epochs/query.lcd";
import * as _198 from "./icacallbacks/query.lcd";
import * as _199 from "./mint/v1beta1/query.lcd";
import * as _200 from "./ratelimit/query.lcd";
import * as _201 from "./records/query.lcd";
import * as _202 from "./stakeibc/query.lcd";
import * as _203 from "./autopilot/query.rpc.Query";
import * as _204 from "./claim/query.rpc.Query";
import * as _205 from "./epochs/query.rpc.Query";
import * as _206 from "./icacallbacks/query.rpc.Query";
import * as _207 from "./mint/v1beta1/query.rpc.Query";
import * as _208 from "./ratelimit/query.rpc.Query";
import * as _209 from "./records/query.rpc.Query";
import * as _210 from "./stakeibc/query.rpc.Query";
import * as _211 from "./claim/tx.rpc.msg";
import * as _212 from "./interchainquery/v1/messages.rpc.msg";
import * as _213 from "./stakeibc/tx.rpc.msg";
export declare namespace stride {
    const autopilot: {
        QueryClientImpl: typeof _203.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _195.LCDQueryClient;
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
    const claim: {
        MsgClientImpl: typeof _211.MsgClientImpl;
        QueryClientImpl: typeof _204.QueryClientImpl;
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
        LCDQueryClient: typeof _196.LCDQueryClient;
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
                toAmino: (message: _7.MsgSetAirdropAllocations) => _7.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _7.MsgSetAirdropAllocationsAmino) => _7.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _7.MsgClaimFreeAmount) => _7.MsgClaimFreeAmountAmino;
                fromAmino: (object: _7.MsgClaimFreeAmountAmino) => _7.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _7.MsgCreateAirdrop) => _7.MsgCreateAirdropAmino;
                fromAmino: (object: _7.MsgCreateAirdropAmino) => _7.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _7.MsgDeleteAirdrop) => _7.MsgDeleteAirdropAmino;
                fromAmino: (object: _7.MsgDeleteAirdropAmino) => _7.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _7.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_7.MsgSetAirdropAllocations>): _7.MsgSetAirdropAllocations;
            fromAmino(object: _7.MsgSetAirdropAllocationsAmino): _7.MsgSetAirdropAllocations;
            toAmino(message: _7.MsgSetAirdropAllocations): _7.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _7.MsgSetAirdropAllocationsAminoMsg): _7.MsgSetAirdropAllocations;
            fromProtoMsg(message: _7.MsgSetAirdropAllocationsProtoMsg): _7.MsgSetAirdropAllocations;
            toProto(message: _7.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _7.MsgSetAirdropAllocations): _7.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _7.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _7.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_7.MsgSetAirdropAllocationsResponse>): _7.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _7.MsgSetAirdropAllocationsResponseAmino): _7.MsgSetAirdropAllocationsResponse;
            toAmino(_: _7.MsgSetAirdropAllocationsResponse): _7.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _7.MsgSetAirdropAllocationsResponseAminoMsg): _7.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _7.MsgSetAirdropAllocationsResponseProtoMsg): _7.MsgSetAirdropAllocationsResponse;
            toProto(message: _7.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _7.MsgSetAirdropAllocationsResponse): _7.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _7.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.MsgClaimFreeAmount;
            fromPartial(object: Partial<_7.MsgClaimFreeAmount>): _7.MsgClaimFreeAmount;
            fromAmino(object: _7.MsgClaimFreeAmountAmino): _7.MsgClaimFreeAmount;
            toAmino(message: _7.MsgClaimFreeAmount): _7.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _7.MsgClaimFreeAmountAminoMsg): _7.MsgClaimFreeAmount;
            fromProtoMsg(message: _7.MsgClaimFreeAmountProtoMsg): _7.MsgClaimFreeAmount;
            toProto(message: _7.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _7.MsgClaimFreeAmount): _7.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _7.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_7.MsgClaimFreeAmountResponse>): _7.MsgClaimFreeAmountResponse;
            fromAmino(object: _7.MsgClaimFreeAmountResponseAmino): _7.MsgClaimFreeAmountResponse;
            toAmino(message: _7.MsgClaimFreeAmountResponse): _7.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _7.MsgClaimFreeAmountResponseAminoMsg): _7.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _7.MsgClaimFreeAmountResponseProtoMsg): _7.MsgClaimFreeAmountResponse;
            toProto(message: _7.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _7.MsgClaimFreeAmountResponse): _7.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _7.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.MsgCreateAirdrop;
            fromPartial(object: Partial<_7.MsgCreateAirdrop>): _7.MsgCreateAirdrop;
            fromAmino(object: _7.MsgCreateAirdropAmino): _7.MsgCreateAirdrop;
            toAmino(message: _7.MsgCreateAirdrop): _7.MsgCreateAirdropAmino;
            fromAminoMsg(object: _7.MsgCreateAirdropAminoMsg): _7.MsgCreateAirdrop;
            fromProtoMsg(message: _7.MsgCreateAirdropProtoMsg): _7.MsgCreateAirdrop;
            toProto(message: _7.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _7.MsgCreateAirdrop): _7.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _7.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _7.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_7.MsgCreateAirdropResponse>): _7.MsgCreateAirdropResponse;
            fromAmino(_: _7.MsgCreateAirdropResponseAmino): _7.MsgCreateAirdropResponse;
            toAmino(_: _7.MsgCreateAirdropResponse): _7.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _7.MsgCreateAirdropResponseAminoMsg): _7.MsgCreateAirdropResponse;
            fromProtoMsg(message: _7.MsgCreateAirdropResponseProtoMsg): _7.MsgCreateAirdropResponse;
            toProto(message: _7.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _7.MsgCreateAirdropResponse): _7.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _7.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _7.MsgDeleteAirdrop;
            fromPartial(object: Partial<_7.MsgDeleteAirdrop>): _7.MsgDeleteAirdrop;
            fromAmino(object: _7.MsgDeleteAirdropAmino): _7.MsgDeleteAirdrop;
            toAmino(message: _7.MsgDeleteAirdrop): _7.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _7.MsgDeleteAirdropAminoMsg): _7.MsgDeleteAirdrop;
            fromProtoMsg(message: _7.MsgDeleteAirdropProtoMsg): _7.MsgDeleteAirdrop;
            toProto(message: _7.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _7.MsgDeleteAirdrop): _7.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _7.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _7.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_7.MsgDeleteAirdropResponse>): _7.MsgDeleteAirdropResponse;
            fromAmino(_: _7.MsgDeleteAirdropResponseAmino): _7.MsgDeleteAirdropResponse;
            toAmino(_: _7.MsgDeleteAirdropResponse): _7.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _7.MsgDeleteAirdropResponseAminoMsg): _7.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _7.MsgDeleteAirdropResponseProtoMsg): _7.MsgDeleteAirdropResponse;
            toProto(message: _7.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _7.MsgDeleteAirdropResponse): _7.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _6.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.ClaimStatus;
            fromPartial(object: Partial<_6.ClaimStatus>): _6.ClaimStatus;
            fromAmino(object: _6.ClaimStatusAmino): _6.ClaimStatus;
            toAmino(message: _6.ClaimStatus): _6.ClaimStatusAmino;
            fromAminoMsg(object: _6.ClaimStatusAminoMsg): _6.ClaimStatus;
            fromProtoMsg(message: _6.ClaimStatusProtoMsg): _6.ClaimStatus;
            toProto(message: _6.ClaimStatus): Uint8Array;
            toProtoMsg(message: _6.ClaimStatus): _6.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _6.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryClaimStatusRequest;
            fromPartial(object: Partial<_6.QueryClaimStatusRequest>): _6.QueryClaimStatusRequest;
            fromAmino(object: _6.QueryClaimStatusRequestAmino): _6.QueryClaimStatusRequest;
            toAmino(message: _6.QueryClaimStatusRequest): _6.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _6.QueryClaimStatusRequestAminoMsg): _6.QueryClaimStatusRequest;
            fromProtoMsg(message: _6.QueryClaimStatusRequestProtoMsg): _6.QueryClaimStatusRequest;
            toProto(message: _6.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _6.QueryClaimStatusRequest): _6.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _6.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryClaimStatusResponse;
            fromPartial(object: Partial<_6.QueryClaimStatusResponse>): _6.QueryClaimStatusResponse;
            fromAmino(object: _6.QueryClaimStatusResponseAmino): _6.QueryClaimStatusResponse;
            toAmino(message: _6.QueryClaimStatusResponse): _6.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _6.QueryClaimStatusResponseAminoMsg): _6.QueryClaimStatusResponse;
            fromProtoMsg(message: _6.QueryClaimStatusResponseProtoMsg): _6.QueryClaimStatusResponse;
            toProto(message: _6.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _6.QueryClaimStatusResponse): _6.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _6.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.ClaimMetadata;
            fromPartial(object: Partial<_6.ClaimMetadata>): _6.ClaimMetadata;
            fromAmino(object: _6.ClaimMetadataAmino): _6.ClaimMetadata;
            toAmino(message: _6.ClaimMetadata): _6.ClaimMetadataAmino;
            fromAminoMsg(object: _6.ClaimMetadataAminoMsg): _6.ClaimMetadata;
            fromProtoMsg(message: _6.ClaimMetadataProtoMsg): _6.ClaimMetadata;
            toProto(message: _6.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _6.ClaimMetadata): _6.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _6.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _6.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_6.QueryClaimMetadataRequest>): _6.QueryClaimMetadataRequest;
            fromAmino(_: _6.QueryClaimMetadataRequestAmino): _6.QueryClaimMetadataRequest;
            toAmino(_: _6.QueryClaimMetadataRequest): _6.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _6.QueryClaimMetadataRequestAminoMsg): _6.QueryClaimMetadataRequest;
            fromProtoMsg(message: _6.QueryClaimMetadataRequestProtoMsg): _6.QueryClaimMetadataRequest;
            toProto(message: _6.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _6.QueryClaimMetadataRequest): _6.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _6.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_6.QueryClaimMetadataResponse>): _6.QueryClaimMetadataResponse;
            fromAmino(object: _6.QueryClaimMetadataResponseAmino): _6.QueryClaimMetadataResponse;
            toAmino(message: _6.QueryClaimMetadataResponse): _6.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _6.QueryClaimMetadataResponseAminoMsg): _6.QueryClaimMetadataResponse;
            fromProtoMsg(message: _6.QueryClaimMetadataResponseProtoMsg): _6.QueryClaimMetadataResponse;
            toProto(message: _6.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _6.QueryClaimMetadataResponse): _6.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _6.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_6.QueryDistributorAccountBalanceRequest>): _6.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _6.QueryDistributorAccountBalanceRequestAmino): _6.QueryDistributorAccountBalanceRequest;
            toAmino(message: _6.QueryDistributorAccountBalanceRequest): _6.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _6.QueryDistributorAccountBalanceRequestAminoMsg): _6.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _6.QueryDistributorAccountBalanceRequestProtoMsg): _6.QueryDistributorAccountBalanceRequest;
            toProto(message: _6.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _6.QueryDistributorAccountBalanceRequest): _6.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _6.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_6.QueryDistributorAccountBalanceResponse>): _6.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _6.QueryDistributorAccountBalanceResponseAmino): _6.QueryDistributorAccountBalanceResponse;
            toAmino(message: _6.QueryDistributorAccountBalanceResponse): _6.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _6.QueryDistributorAccountBalanceResponseAminoMsg): _6.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _6.QueryDistributorAccountBalanceResponseProtoMsg): _6.QueryDistributorAccountBalanceResponse;
            toProto(message: _6.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _6.QueryDistributorAccountBalanceResponse): _6.QueryDistributorAccountBalanceResponseProtoMsg;
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
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _6.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryClaimRecordRequest;
            fromPartial(object: Partial<_6.QueryClaimRecordRequest>): _6.QueryClaimRecordRequest;
            fromAmino(object: _6.QueryClaimRecordRequestAmino): _6.QueryClaimRecordRequest;
            toAmino(message: _6.QueryClaimRecordRequest): _6.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _6.QueryClaimRecordRequestAminoMsg): _6.QueryClaimRecordRequest;
            fromProtoMsg(message: _6.QueryClaimRecordRequestProtoMsg): _6.QueryClaimRecordRequest;
            toProto(message: _6.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _6.QueryClaimRecordRequest): _6.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _6.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryClaimRecordResponse;
            fromPartial(object: Partial<_6.QueryClaimRecordResponse>): _6.QueryClaimRecordResponse;
            fromAmino(object: _6.QueryClaimRecordResponseAmino): _6.QueryClaimRecordResponse;
            toAmino(message: _6.QueryClaimRecordResponse): _6.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _6.QueryClaimRecordResponseAminoMsg): _6.QueryClaimRecordResponse;
            fromProtoMsg(message: _6.QueryClaimRecordResponseProtoMsg): _6.QueryClaimRecordResponse;
            toProto(message: _6.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _6.QueryClaimRecordResponse): _6.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _6.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_6.QueryClaimableForActionRequest>): _6.QueryClaimableForActionRequest;
            fromAmino(object: _6.QueryClaimableForActionRequestAmino): _6.QueryClaimableForActionRequest;
            toAmino(message: _6.QueryClaimableForActionRequest): _6.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _6.QueryClaimableForActionRequestAminoMsg): _6.QueryClaimableForActionRequest;
            fromProtoMsg(message: _6.QueryClaimableForActionRequestProtoMsg): _6.QueryClaimableForActionRequest;
            toProto(message: _6.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _6.QueryClaimableForActionRequest): _6.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _6.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_6.QueryClaimableForActionResponse>): _6.QueryClaimableForActionResponse;
            fromAmino(object: _6.QueryClaimableForActionResponseAmino): _6.QueryClaimableForActionResponse;
            toAmino(message: _6.QueryClaimableForActionResponse): _6.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _6.QueryClaimableForActionResponseAminoMsg): _6.QueryClaimableForActionResponse;
            fromProtoMsg(message: _6.QueryClaimableForActionResponseProtoMsg): _6.QueryClaimableForActionResponse;
            toProto(message: _6.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _6.QueryClaimableForActionResponse): _6.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _6.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_6.QueryTotalClaimableRequest>): _6.QueryTotalClaimableRequest;
            fromAmino(object: _6.QueryTotalClaimableRequestAmino): _6.QueryTotalClaimableRequest;
            toAmino(message: _6.QueryTotalClaimableRequest): _6.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _6.QueryTotalClaimableRequestAminoMsg): _6.QueryTotalClaimableRequest;
            fromProtoMsg(message: _6.QueryTotalClaimableRequestProtoMsg): _6.QueryTotalClaimableRequest;
            toProto(message: _6.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _6.QueryTotalClaimableRequest): _6.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _6.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_6.QueryTotalClaimableResponse>): _6.QueryTotalClaimableResponse;
            fromAmino(object: _6.QueryTotalClaimableResponseAmino): _6.QueryTotalClaimableResponse;
            toAmino(message: _6.QueryTotalClaimableResponse): _6.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _6.QueryTotalClaimableResponseAminoMsg): _6.QueryTotalClaimableResponse;
            fromProtoMsg(message: _6.QueryTotalClaimableResponseProtoMsg): _6.QueryTotalClaimableResponse;
            toProto(message: _6.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _6.QueryTotalClaimableResponse): _6.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _6.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryUserVestingsRequest;
            fromPartial(object: Partial<_6.QueryUserVestingsRequest>): _6.QueryUserVestingsRequest;
            fromAmino(object: _6.QueryUserVestingsRequestAmino): _6.QueryUserVestingsRequest;
            toAmino(message: _6.QueryUserVestingsRequest): _6.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _6.QueryUserVestingsRequestAminoMsg): _6.QueryUserVestingsRequest;
            fromProtoMsg(message: _6.QueryUserVestingsRequestProtoMsg): _6.QueryUserVestingsRequest;
            toProto(message: _6.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _6.QueryUserVestingsRequest): _6.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _6.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _6.QueryUserVestingsResponse;
            fromPartial(object: Partial<_6.QueryUserVestingsResponse>): _6.QueryUserVestingsResponse;
            fromAmino(object: _6.QueryUserVestingsResponseAmino): _6.QueryUserVestingsResponse;
            toAmino(message: _6.QueryUserVestingsResponse): _6.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _6.QueryUserVestingsResponseAminoMsg): _6.QueryUserVestingsResponse;
            fromProtoMsg(message: _6.QueryUserVestingsResponseProtoMsg): _6.QueryUserVestingsResponse;
            toProto(message: _6.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _6.QueryUserVestingsResponse): _6.QueryUserVestingsResponseProtoMsg;
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
        Airdrop: {
            typeUrl: string;
            encode(message: _5.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _5.Airdrop;
            fromPartial(object: Partial<_5.Airdrop>): _5.Airdrop;
            fromAmino(object: _5.AirdropAmino): _5.Airdrop;
            toAmino(message: _5.Airdrop): _5.AirdropAmino;
            fromAminoMsg(object: _5.AirdropAminoMsg): _5.Airdrop;
            fromProtoMsg(message: _5.AirdropProtoMsg): _5.Airdrop;
            toProto(message: _5.Airdrop): Uint8Array;
            toProtoMsg(message: _5.Airdrop): _5.AirdropProtoMsg;
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
        actionFromJSON(object: any): _3.Action;
        actionToJSON(object: _3.Action): string;
        Action: typeof _3.Action;
        ActionSDKType: typeof _3.Action;
        ActionAmino: typeof _3.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _3.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _3.ClaimRecord;
            fromPartial(object: Partial<_3.ClaimRecord>): _3.ClaimRecord;
            fromAmino(object: _3.ClaimRecordAmino): _3.ClaimRecord;
            toAmino(message: _3.ClaimRecord): _3.ClaimRecordAmino;
            fromAminoMsg(object: _3.ClaimRecordAminoMsg): _3.ClaimRecord;
            fromProtoMsg(message: _3.ClaimRecordProtoMsg): _3.ClaimRecord;
            toProto(message: _3.ClaimRecord): Uint8Array;
            toProtoMsg(message: _3.ClaimRecord): _3.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _205.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _9.QueryEpochsInfoRequest): Promise<_9.QueryEpochsInfoResponse>;
            currentEpoch(request: _9.QueryCurrentEpochRequest): Promise<_9.QueryCurrentEpochResponse>;
            epochInfo(request: _9.QueryEpochInfoRequest): Promise<_9.QueryEpochInfoResponse>;
        };
        LCDQueryClient: typeof _197.LCDQueryClient;
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _9.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_9.QueryEpochsInfoRequest>): _9.QueryEpochsInfoRequest;
            fromAmino(object: _9.QueryEpochsInfoRequestAmino): _9.QueryEpochsInfoRequest;
            toAmino(message: _9.QueryEpochsInfoRequest): _9.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _9.QueryEpochsInfoRequestAminoMsg): _9.QueryEpochsInfoRequest;
            fromProtoMsg(message: _9.QueryEpochsInfoRequestProtoMsg): _9.QueryEpochsInfoRequest;
            toProto(message: _9.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _9.QueryEpochsInfoRequest): _9.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _9.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_9.QueryEpochsInfoResponse>): _9.QueryEpochsInfoResponse;
            fromAmino(object: _9.QueryEpochsInfoResponseAmino): _9.QueryEpochsInfoResponse;
            toAmino(message: _9.QueryEpochsInfoResponse): _9.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _9.QueryEpochsInfoResponseAminoMsg): _9.QueryEpochsInfoResponse;
            fromProtoMsg(message: _9.QueryEpochsInfoResponseProtoMsg): _9.QueryEpochsInfoResponse;
            toProto(message: _9.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _9.QueryEpochsInfoResponse): _9.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _9.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_9.QueryCurrentEpochRequest>): _9.QueryCurrentEpochRequest;
            fromAmino(object: _9.QueryCurrentEpochRequestAmino): _9.QueryCurrentEpochRequest;
            toAmino(message: _9.QueryCurrentEpochRequest): _9.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _9.QueryCurrentEpochRequestAminoMsg): _9.QueryCurrentEpochRequest;
            fromProtoMsg(message: _9.QueryCurrentEpochRequestProtoMsg): _9.QueryCurrentEpochRequest;
            toProto(message: _9.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _9.QueryCurrentEpochRequest): _9.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _9.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_9.QueryCurrentEpochResponse>): _9.QueryCurrentEpochResponse;
            fromAmino(object: _9.QueryCurrentEpochResponseAmino): _9.QueryCurrentEpochResponse;
            toAmino(message: _9.QueryCurrentEpochResponse): _9.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _9.QueryCurrentEpochResponseAminoMsg): _9.QueryCurrentEpochResponse;
            fromProtoMsg(message: _9.QueryCurrentEpochResponseProtoMsg): _9.QueryCurrentEpochResponse;
            toProto(message: _9.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _9.QueryCurrentEpochResponse): _9.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _9.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryEpochInfoRequest;
            fromPartial(object: Partial<_9.QueryEpochInfoRequest>): _9.QueryEpochInfoRequest;
            fromAmino(object: _9.QueryEpochInfoRequestAmino): _9.QueryEpochInfoRequest;
            toAmino(message: _9.QueryEpochInfoRequest): _9.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _9.QueryEpochInfoRequestAminoMsg): _9.QueryEpochInfoRequest;
            fromProtoMsg(message: _9.QueryEpochInfoRequestProtoMsg): _9.QueryEpochInfoRequest;
            toProto(message: _9.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _9.QueryEpochInfoRequest): _9.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _9.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _9.QueryEpochInfoResponse;
            fromPartial(object: Partial<_9.QueryEpochInfoResponse>): _9.QueryEpochInfoResponse;
            fromAmino(object: _9.QueryEpochInfoResponseAmino): _9.QueryEpochInfoResponse;
            toAmino(message: _9.QueryEpochInfoResponse): _9.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _9.QueryEpochInfoResponseAminoMsg): _9.QueryEpochInfoResponse;
            fromProtoMsg(message: _9.QueryEpochInfoResponseProtoMsg): _9.QueryEpochInfoResponse;
            toProto(message: _9.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _9.QueryEpochInfoResponse): _9.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _8.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _8.EpochInfo;
            fromPartial(object: Partial<_8.EpochInfo>): _8.EpochInfo;
            fromAmino(object: _8.EpochInfoAmino): _8.EpochInfo;
            toAmino(message: _8.EpochInfo): _8.EpochInfoAmino;
            fromAminoMsg(object: _8.EpochInfoAminoMsg): _8.EpochInfo;
            fromProtoMsg(message: _8.EpochInfoProtoMsg): _8.EpochInfo;
            toProto(message: _8.EpochInfo): Uint8Array;
            toProtoMsg(message: _8.EpochInfo): _8.EpochInfoProtoMsg;
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
    const icacallbacks: {
        QueryClientImpl: typeof _206.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
            callbackData(request: _14.QueryGetCallbackDataRequest): Promise<_14.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _14.QueryAllCallbackDataRequest): Promise<_14.QueryAllCallbackDataResponse>;
        };
        LCDQueryClient: typeof _198.LCDQueryClient;
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _14.QueryParamsRequest;
            fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
            fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
            toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
            fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
            fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
            toProto(message: _14.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _14.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryParamsResponse;
            fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
            fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
            toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
            fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
            fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
            toProto(message: _14.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _14.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_14.QueryGetCallbackDataRequest>): _14.QueryGetCallbackDataRequest;
            fromAmino(object: _14.QueryGetCallbackDataRequestAmino): _14.QueryGetCallbackDataRequest;
            toAmino(message: _14.QueryGetCallbackDataRequest): _14.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _14.QueryGetCallbackDataRequestAminoMsg): _14.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _14.QueryGetCallbackDataRequestProtoMsg): _14.QueryGetCallbackDataRequest;
            toProto(message: _14.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _14.QueryGetCallbackDataRequest): _14.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _14.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_14.QueryGetCallbackDataResponse>): _14.QueryGetCallbackDataResponse;
            fromAmino(object: _14.QueryGetCallbackDataResponseAmino): _14.QueryGetCallbackDataResponse;
            toAmino(message: _14.QueryGetCallbackDataResponse): _14.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _14.QueryGetCallbackDataResponseAminoMsg): _14.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _14.QueryGetCallbackDataResponseProtoMsg): _14.QueryGetCallbackDataResponse;
            toProto(message: _14.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _14.QueryGetCallbackDataResponse): _14.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _14.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_14.QueryAllCallbackDataRequest>): _14.QueryAllCallbackDataRequest;
            fromAmino(object: _14.QueryAllCallbackDataRequestAmino): _14.QueryAllCallbackDataRequest;
            toAmino(message: _14.QueryAllCallbackDataRequest): _14.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _14.QueryAllCallbackDataRequestAminoMsg): _14.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _14.QueryAllCallbackDataRequestProtoMsg): _14.QueryAllCallbackDataRequest;
            toProto(message: _14.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _14.QueryAllCallbackDataRequest): _14.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _14.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _14.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_14.QueryAllCallbackDataResponse>): _14.QueryAllCallbackDataResponse;
            fromAmino(object: _14.QueryAllCallbackDataResponseAmino): _14.QueryAllCallbackDataResponse;
            toAmino(message: _14.QueryAllCallbackDataResponse): _14.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _14.QueryAllCallbackDataResponseAminoMsg): _14.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _14.QueryAllCallbackDataResponseProtoMsg): _14.QueryAllCallbackDataResponse;
            toProto(message: _14.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _14.QueryAllCallbackDataResponse): _14.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _13.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _13.Params;
            fromPartial(_: Partial<_13.Params>): _13.Params;
            fromAmino(_: _13.ParamsAmino): _13.Params;
            toAmino(_: _13.Params): _13.ParamsAmino;
            fromAminoMsg(object: _13.ParamsAminoMsg): _13.Params;
            fromProtoMsg(message: _13.ParamsProtoMsg): _13.Params;
            toProto(message: _13.Params): Uint8Array;
            toProtoMsg(message: _13.Params): _13.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _12.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _12.IcacallbacksPacketData;
            fromPartial(object: Partial<_12.IcacallbacksPacketData>): _12.IcacallbacksPacketData;
            fromAmino(object: _12.IcacallbacksPacketDataAmino): _12.IcacallbacksPacketData;
            toAmino(message: _12.IcacallbacksPacketData): _12.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _12.IcacallbacksPacketDataAminoMsg): _12.IcacallbacksPacketData;
            fromProtoMsg(message: _12.IcacallbacksPacketDataProtoMsg): _12.IcacallbacksPacketData;
            toProto(message: _12.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _12.IcacallbacksPacketData): _12.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _12.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _12.NoData;
            fromPartial(_: Partial<_12.NoData>): _12.NoData;
            fromAmino(_: _12.NoDataAmino): _12.NoData;
            toAmino(_: _12.NoData): _12.NoDataAmino;
            fromAminoMsg(object: _12.NoDataAminoMsg): _12.NoData;
            fromProtoMsg(message: _12.NoDataProtoMsg): _12.NoData;
            toProto(message: _12.NoData): Uint8Array;
            toProtoMsg(message: _12.NoData): _12.NoDataProtoMsg;
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
        CallbackData: {
            typeUrl: string;
            encode(message: _10.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _10.CallbackData;
            fromPartial(object: Partial<_10.CallbackData>): _10.CallbackData;
            fromAmino(object: _10.CallbackDataAmino): _10.CallbackData;
            toAmino(message: _10.CallbackData): _10.CallbackDataAmino;
            fromAminoMsg(object: _10.CallbackDataAminoMsg): _10.CallbackData;
            fromProtoMsg(message: _10.CallbackDataProtoMsg): _10.CallbackData;
            toProto(message: _10.CallbackData): Uint8Array;
            toProtoMsg(message: _10.CallbackData): _10.CallbackDataProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _212.MsgClientImpl;
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
                    toAmino: (message: _17.MsgSubmitQueryResponse) => _17.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _17.MsgSubmitQueryResponseAmino) => _17.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _18.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_18.QueryPendingQueriesRequest>): _18.QueryPendingQueriesRequest;
                fromAmino(_: _18.QueryPendingQueriesRequestAmino): _18.QueryPendingQueriesRequest;
                toAmino(_: _18.QueryPendingQueriesRequest): _18.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _18.QueryPendingQueriesRequestAminoMsg): _18.QueryPendingQueriesRequest;
                fromProtoMsg(message: _18.QueryPendingQueriesRequestProtoMsg): _18.QueryPendingQueriesRequest;
                toProto(message: _18.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _18.QueryPendingQueriesRequest): _18.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _18.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_18.QueryPendingQueriesResponse>): _18.QueryPendingQueriesResponse;
                fromAmino(object: _18.QueryPendingQueriesResponseAmino): _18.QueryPendingQueriesResponse;
                toAmino(message: _18.QueryPendingQueriesResponse): _18.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _18.QueryPendingQueriesResponseAminoMsg): _18.QueryPendingQueriesResponse;
                fromProtoMsg(message: _18.QueryPendingQueriesResponseProtoMsg): _18.QueryPendingQueriesResponse;
                toProto(message: _18.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _18.QueryPendingQueriesResponse): _18.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _17.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_17.MsgSubmitQueryResponse>): _17.MsgSubmitQueryResponse;
                fromAmino(object: _17.MsgSubmitQueryResponseAmino): _17.MsgSubmitQueryResponse;
                toAmino(message: _17.MsgSubmitQueryResponse): _17.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _17.MsgSubmitQueryResponseAminoMsg): _17.MsgSubmitQueryResponse;
                fromProtoMsg(message: _17.MsgSubmitQueryResponseProtoMsg): _17.MsgSubmitQueryResponse;
                toProto(message: _17.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSubmitQueryResponse): _17.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _17.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_17.MsgSubmitQueryResponseResponse>): _17.MsgSubmitQueryResponseResponse;
                fromAmino(_: _17.MsgSubmitQueryResponseResponseAmino): _17.MsgSubmitQueryResponseResponse;
                toAmino(_: _17.MsgSubmitQueryResponseResponse): _17.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _17.MsgSubmitQueryResponseResponseAminoMsg): _17.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _17.MsgSubmitQueryResponseResponseProtoMsg): _17.MsgSubmitQueryResponseResponse;
                toProto(message: _17.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSubmitQueryResponseResponse): _17.MsgSubmitQueryResponseResponseProtoMsg;
            };
            Query: {
                typeUrl: string;
                encode(message: _16.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Query;
                fromPartial(object: Partial<_16.Query>): _16.Query;
                fromAmino(object: _16.QueryAmino): _16.Query;
                toAmino(message: _16.Query): _16.QueryAmino;
                fromAminoMsg(object: _16.QueryAminoMsg): _16.Query;
                fromProtoMsg(message: _16.QueryProtoMsg): _16.Query;
                toProto(message: _16.Query): Uint8Array;
                toProtoMsg(message: _16.Query): _16.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _16.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.DataPoint;
                fromPartial(object: Partial<_16.DataPoint>): _16.DataPoint;
                fromAmino(object: _16.DataPointAmino): _16.DataPoint;
                toAmino(message: _16.DataPoint): _16.DataPointAmino;
                fromAminoMsg(object: _16.DataPointAminoMsg): _16.DataPoint;
                fromProtoMsg(message: _16.DataPointProtoMsg): _16.DataPoint;
                toProto(message: _16.DataPoint): Uint8Array;
                toProtoMsg(message: _16.DataPoint): _16.DataPointProtoMsg;
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
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                epochProvisions(request?: _21.QueryEpochProvisionsRequest): Promise<_21.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _199.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _21.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryParamsRequest;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
                fromAmino(_: _21.QueryParamsRequestAmino): _21.QueryParamsRequest;
                toAmino(_: _21.QueryParamsRequest): _21.QueryParamsRequestAmino;
                fromAminoMsg(object: _21.QueryParamsRequestAminoMsg): _21.QueryParamsRequest;
                fromProtoMsg(message: _21.QueryParamsRequestProtoMsg): _21.QueryParamsRequest;
                toProto(message: _21.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryParamsRequest): _21.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryParamsResponse;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
                fromAmino(object: _21.QueryParamsResponseAmino): _21.QueryParamsResponse;
                toAmino(message: _21.QueryParamsResponse): _21.QueryParamsResponseAmino;
                fromAminoMsg(object: _21.QueryParamsResponseAminoMsg): _21.QueryParamsResponse;
                fromProtoMsg(message: _21.QueryParamsResponseProtoMsg): _21.QueryParamsResponse;
                toProto(message: _21.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryParamsResponse): _21.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _21.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_21.QueryEpochProvisionsRequest>): _21.QueryEpochProvisionsRequest;
                fromAmino(_: _21.QueryEpochProvisionsRequestAmino): _21.QueryEpochProvisionsRequest;
                toAmino(_: _21.QueryEpochProvisionsRequest): _21.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _21.QueryEpochProvisionsRequestAminoMsg): _21.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _21.QueryEpochProvisionsRequestProtoMsg): _21.QueryEpochProvisionsRequest;
                toProto(message: _21.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryEpochProvisionsRequest): _21.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _21.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_21.QueryEpochProvisionsResponse>): _21.QueryEpochProvisionsResponse;
                fromAmino(object: _21.QueryEpochProvisionsResponseAmino): _21.QueryEpochProvisionsResponse;
                toAmino(message: _21.QueryEpochProvisionsResponse): _21.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _21.QueryEpochProvisionsResponseAminoMsg): _21.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _21.QueryEpochProvisionsResponseProtoMsg): _21.QueryEpochProvisionsResponse;
                toProto(message: _21.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryEpochProvisionsResponse): _21.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _20.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Minter;
                fromPartial(object: Partial<_20.Minter>): _20.Minter;
                fromAmino(object: _20.MinterAmino): _20.Minter;
                toAmino(message: _20.Minter): _20.MinterAmino;
                fromAminoMsg(object: _20.MinterAminoMsg): _20.Minter;
                fromProtoMsg(message: _20.MinterProtoMsg): _20.Minter;
                toProto(message: _20.Minter): Uint8Array;
                toProtoMsg(message: _20.Minter): _20.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _20.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.DistributionProportions;
                fromPartial(object: Partial<_20.DistributionProportions>): _20.DistributionProportions;
                fromAmino(object: _20.DistributionProportionsAmino): _20.DistributionProportions;
                toAmino(message: _20.DistributionProportions): _20.DistributionProportionsAmino;
                fromAminoMsg(object: _20.DistributionProportionsAminoMsg): _20.DistributionProportions;
                fromProtoMsg(message: _20.DistributionProportionsProtoMsg): _20.DistributionProportions;
                toProto(message: _20.DistributionProportions): Uint8Array;
                toProtoMsg(message: _20.DistributionProportions): _20.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _20.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.Params;
                fromPartial(object: Partial<_20.Params>): _20.Params;
                fromAmino(object: _20.ParamsAmino): _20.Params;
                toAmino(message: _20.Params): _20.ParamsAmino;
                fromAminoMsg(object: _20.ParamsAminoMsg): _20.Params;
                fromProtoMsg(message: _20.ParamsProtoMsg): _20.Params;
                toProto(message: _20.Params): Uint8Array;
                toProtoMsg(message: _20.Params): _20.ParamsProtoMsg;
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
    const ratelimit: {
        QueryClientImpl: typeof _208.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            allRateLimits(request?: _25.QueryAllRateLimitsRequest): Promise<_25.QueryAllRateLimitsResponse>;
            rateLimit(request: _25.QueryRateLimitRequest): Promise<_25.QueryRateLimitResponse>;
            rateLimitsByChainId(request: _25.QueryRateLimitsByChainIdRequest): Promise<_25.QueryRateLimitsByChainIdResponse>;
            rateLimitsByChannelId(request: _25.QueryRateLimitsByChannelIdRequest): Promise<_25.QueryRateLimitsByChannelIdResponse>;
            allBlacklistedDenoms(request?: _25.QueryAllBlacklistedDenomsRequest): Promise<_25.QueryAllBlacklistedDenomsResponse>;
            allWhitelistedAddresses(request?: _25.QueryAllWhitelistedAddressesRequest): Promise<_25.QueryAllWhitelistedAddressesResponse>;
        };
        LCDQueryClient: typeof _200.LCDQueryClient;
        packetDirectionFromJSON(object: any): _26.PacketDirection;
        packetDirectionToJSON(object: _26.PacketDirection): string;
        PacketDirection: typeof _26.PacketDirection;
        PacketDirectionSDKType: typeof _26.PacketDirection;
        PacketDirectionAmino: typeof _26.PacketDirection;
        Path: {
            typeUrl: string;
            encode(message: _26.Path, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.Path;
            fromPartial(object: Partial<_26.Path>): _26.Path;
            fromAmino(object: _26.PathAmino): _26.Path;
            toAmino(message: _26.Path): _26.PathAmino;
            fromAminoMsg(object: _26.PathAminoMsg): _26.Path;
            fromProtoMsg(message: _26.PathProtoMsg): _26.Path;
            toProto(message: _26.Path): Uint8Array;
            toProtoMsg(message: _26.Path): _26.PathProtoMsg;
        };
        Quota: {
            typeUrl: string;
            encode(message: _26.Quota, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.Quota;
            fromPartial(object: Partial<_26.Quota>): _26.Quota;
            fromAmino(object: _26.QuotaAmino): _26.Quota;
            toAmino(message: _26.Quota): _26.QuotaAmino;
            fromAminoMsg(object: _26.QuotaAminoMsg): _26.Quota;
            fromProtoMsg(message: _26.QuotaProtoMsg): _26.Quota;
            toProto(message: _26.Quota): Uint8Array;
            toProtoMsg(message: _26.Quota): _26.QuotaProtoMsg;
        };
        Flow: {
            typeUrl: string;
            encode(message: _26.Flow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.Flow;
            fromPartial(object: Partial<_26.Flow>): _26.Flow;
            fromAmino(object: _26.FlowAmino): _26.Flow;
            toAmino(message: _26.Flow): _26.FlowAmino;
            fromAminoMsg(object: _26.FlowAminoMsg): _26.Flow;
            fromProtoMsg(message: _26.FlowProtoMsg): _26.Flow;
            toProto(message: _26.Flow): Uint8Array;
            toProtoMsg(message: _26.Flow): _26.FlowProtoMsg;
        };
        RateLimit: {
            typeUrl: string;
            encode(message: _26.RateLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.RateLimit;
            fromPartial(object: Partial<_26.RateLimit>): _26.RateLimit;
            fromAmino(object: _26.RateLimitAmino): _26.RateLimit;
            toAmino(message: _26.RateLimit): _26.RateLimitAmino;
            fromAminoMsg(object: _26.RateLimitAminoMsg): _26.RateLimit;
            fromProtoMsg(message: _26.RateLimitProtoMsg): _26.RateLimit;
            toProto(message: _26.RateLimit): Uint8Array;
            toProtoMsg(message: _26.RateLimit): _26.RateLimitProtoMsg;
        };
        WhitelistedAddressPair: {
            typeUrl: string;
            encode(message: _26.WhitelistedAddressPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.WhitelistedAddressPair;
            fromPartial(object: Partial<_26.WhitelistedAddressPair>): _26.WhitelistedAddressPair;
            fromAmino(object: _26.WhitelistedAddressPairAmino): _26.WhitelistedAddressPair;
            toAmino(message: _26.WhitelistedAddressPair): _26.WhitelistedAddressPairAmino;
            fromAminoMsg(object: _26.WhitelistedAddressPairAminoMsg): _26.WhitelistedAddressPair;
            fromProtoMsg(message: _26.WhitelistedAddressPairProtoMsg): _26.WhitelistedAddressPair;
            toProto(message: _26.WhitelistedAddressPair): Uint8Array;
            toProtoMsg(message: _26.WhitelistedAddressPair): _26.WhitelistedAddressPairProtoMsg;
        };
        QueryAllRateLimitsRequest: {
            typeUrl: string;
            encode(_: _25.QueryAllRateLimitsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QueryAllRateLimitsRequest;
            fromPartial(_: Partial<_25.QueryAllRateLimitsRequest>): _25.QueryAllRateLimitsRequest;
            fromAmino(_: _25.QueryAllRateLimitsRequestAmino): _25.QueryAllRateLimitsRequest;
            toAmino(_: _25.QueryAllRateLimitsRequest): _25.QueryAllRateLimitsRequestAmino;
            fromAminoMsg(object: _25.QueryAllRateLimitsRequestAminoMsg): _25.QueryAllRateLimitsRequest;
            fromProtoMsg(message: _25.QueryAllRateLimitsRequestProtoMsg): _25.QueryAllRateLimitsRequest;
            toProto(message: _25.QueryAllRateLimitsRequest): Uint8Array;
            toProtoMsg(message: _25.QueryAllRateLimitsRequest): _25.QueryAllRateLimitsRequestProtoMsg;
        };
        QueryAllRateLimitsResponse: {
            typeUrl: string;
            encode(message: _25.QueryAllRateLimitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryAllRateLimitsResponse;
            fromPartial(object: Partial<_25.QueryAllRateLimitsResponse>): _25.QueryAllRateLimitsResponse;
            fromAmino(object: _25.QueryAllRateLimitsResponseAmino): _25.QueryAllRateLimitsResponse;
            toAmino(message: _25.QueryAllRateLimitsResponse): _25.QueryAllRateLimitsResponseAmino;
            fromAminoMsg(object: _25.QueryAllRateLimitsResponseAminoMsg): _25.QueryAllRateLimitsResponse;
            fromProtoMsg(message: _25.QueryAllRateLimitsResponseProtoMsg): _25.QueryAllRateLimitsResponse;
            toProto(message: _25.QueryAllRateLimitsResponse): Uint8Array;
            toProtoMsg(message: _25.QueryAllRateLimitsResponse): _25.QueryAllRateLimitsResponseProtoMsg;
        };
        QueryRateLimitRequest: {
            typeUrl: string;
            encode(message: _25.QueryRateLimitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryRateLimitRequest;
            fromPartial(object: Partial<_25.QueryRateLimitRequest>): _25.QueryRateLimitRequest;
            fromAmino(object: _25.QueryRateLimitRequestAmino): _25.QueryRateLimitRequest;
            toAmino(message: _25.QueryRateLimitRequest): _25.QueryRateLimitRequestAmino;
            fromAminoMsg(object: _25.QueryRateLimitRequestAminoMsg): _25.QueryRateLimitRequest;
            fromProtoMsg(message: _25.QueryRateLimitRequestProtoMsg): _25.QueryRateLimitRequest;
            toProto(message: _25.QueryRateLimitRequest): Uint8Array;
            toProtoMsg(message: _25.QueryRateLimitRequest): _25.QueryRateLimitRequestProtoMsg;
        };
        QueryRateLimitResponse: {
            typeUrl: string;
            encode(message: _25.QueryRateLimitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryRateLimitResponse;
            fromPartial(object: Partial<_25.QueryRateLimitResponse>): _25.QueryRateLimitResponse;
            fromAmino(object: _25.QueryRateLimitResponseAmino): _25.QueryRateLimitResponse;
            toAmino(message: _25.QueryRateLimitResponse): _25.QueryRateLimitResponseAmino;
            fromAminoMsg(object: _25.QueryRateLimitResponseAminoMsg): _25.QueryRateLimitResponse;
            fromProtoMsg(message: _25.QueryRateLimitResponseProtoMsg): _25.QueryRateLimitResponse;
            toProto(message: _25.QueryRateLimitResponse): Uint8Array;
            toProtoMsg(message: _25.QueryRateLimitResponse): _25.QueryRateLimitResponseProtoMsg;
        };
        QueryRateLimitsByChainIdRequest: {
            typeUrl: string;
            encode(message: _25.QueryRateLimitsByChainIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryRateLimitsByChainIdRequest;
            fromPartial(object: Partial<_25.QueryRateLimitsByChainIdRequest>): _25.QueryRateLimitsByChainIdRequest;
            fromAmino(object: _25.QueryRateLimitsByChainIdRequestAmino): _25.QueryRateLimitsByChainIdRequest;
            toAmino(message: _25.QueryRateLimitsByChainIdRequest): _25.QueryRateLimitsByChainIdRequestAmino;
            fromAminoMsg(object: _25.QueryRateLimitsByChainIdRequestAminoMsg): _25.QueryRateLimitsByChainIdRequest;
            fromProtoMsg(message: _25.QueryRateLimitsByChainIdRequestProtoMsg): _25.QueryRateLimitsByChainIdRequest;
            toProto(message: _25.QueryRateLimitsByChainIdRequest): Uint8Array;
            toProtoMsg(message: _25.QueryRateLimitsByChainIdRequest): _25.QueryRateLimitsByChainIdRequestProtoMsg;
        };
        QueryRateLimitsByChainIdResponse: {
            typeUrl: string;
            encode(message: _25.QueryRateLimitsByChainIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryRateLimitsByChainIdResponse;
            fromPartial(object: Partial<_25.QueryRateLimitsByChainIdResponse>): _25.QueryRateLimitsByChainIdResponse;
            fromAmino(object: _25.QueryRateLimitsByChainIdResponseAmino): _25.QueryRateLimitsByChainIdResponse;
            toAmino(message: _25.QueryRateLimitsByChainIdResponse): _25.QueryRateLimitsByChainIdResponseAmino;
            fromAminoMsg(object: _25.QueryRateLimitsByChainIdResponseAminoMsg): _25.QueryRateLimitsByChainIdResponse;
            fromProtoMsg(message: _25.QueryRateLimitsByChainIdResponseProtoMsg): _25.QueryRateLimitsByChainIdResponse;
            toProto(message: _25.QueryRateLimitsByChainIdResponse): Uint8Array;
            toProtoMsg(message: _25.QueryRateLimitsByChainIdResponse): _25.QueryRateLimitsByChainIdResponseProtoMsg;
        };
        QueryRateLimitsByChannelIdRequest: {
            typeUrl: string;
            encode(message: _25.QueryRateLimitsByChannelIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryRateLimitsByChannelIdRequest;
            fromPartial(object: Partial<_25.QueryRateLimitsByChannelIdRequest>): _25.QueryRateLimitsByChannelIdRequest;
            fromAmino(object: _25.QueryRateLimitsByChannelIdRequestAmino): _25.QueryRateLimitsByChannelIdRequest;
            toAmino(message: _25.QueryRateLimitsByChannelIdRequest): _25.QueryRateLimitsByChannelIdRequestAmino;
            fromAminoMsg(object: _25.QueryRateLimitsByChannelIdRequestAminoMsg): _25.QueryRateLimitsByChannelIdRequest;
            fromProtoMsg(message: _25.QueryRateLimitsByChannelIdRequestProtoMsg): _25.QueryRateLimitsByChannelIdRequest;
            toProto(message: _25.QueryRateLimitsByChannelIdRequest): Uint8Array;
            toProtoMsg(message: _25.QueryRateLimitsByChannelIdRequest): _25.QueryRateLimitsByChannelIdRequestProtoMsg;
        };
        QueryRateLimitsByChannelIdResponse: {
            typeUrl: string;
            encode(message: _25.QueryRateLimitsByChannelIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryRateLimitsByChannelIdResponse;
            fromPartial(object: Partial<_25.QueryRateLimitsByChannelIdResponse>): _25.QueryRateLimitsByChannelIdResponse;
            fromAmino(object: _25.QueryRateLimitsByChannelIdResponseAmino): _25.QueryRateLimitsByChannelIdResponse;
            toAmino(message: _25.QueryRateLimitsByChannelIdResponse): _25.QueryRateLimitsByChannelIdResponseAmino;
            fromAminoMsg(object: _25.QueryRateLimitsByChannelIdResponseAminoMsg): _25.QueryRateLimitsByChannelIdResponse;
            fromProtoMsg(message: _25.QueryRateLimitsByChannelIdResponseProtoMsg): _25.QueryRateLimitsByChannelIdResponse;
            toProto(message: _25.QueryRateLimitsByChannelIdResponse): Uint8Array;
            toProtoMsg(message: _25.QueryRateLimitsByChannelIdResponse): _25.QueryRateLimitsByChannelIdResponseProtoMsg;
        };
        QueryAllBlacklistedDenomsRequest: {
            typeUrl: string;
            encode(_: _25.QueryAllBlacklistedDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QueryAllBlacklistedDenomsRequest;
            fromPartial(_: Partial<_25.QueryAllBlacklistedDenomsRequest>): _25.QueryAllBlacklistedDenomsRequest;
            fromAmino(_: _25.QueryAllBlacklistedDenomsRequestAmino): _25.QueryAllBlacklistedDenomsRequest;
            toAmino(_: _25.QueryAllBlacklistedDenomsRequest): _25.QueryAllBlacklistedDenomsRequestAmino;
            fromAminoMsg(object: _25.QueryAllBlacklistedDenomsRequestAminoMsg): _25.QueryAllBlacklistedDenomsRequest;
            fromProtoMsg(message: _25.QueryAllBlacklistedDenomsRequestProtoMsg): _25.QueryAllBlacklistedDenomsRequest;
            toProto(message: _25.QueryAllBlacklistedDenomsRequest): Uint8Array;
            toProtoMsg(message: _25.QueryAllBlacklistedDenomsRequest): _25.QueryAllBlacklistedDenomsRequestProtoMsg;
        };
        QueryAllBlacklistedDenomsResponse: {
            typeUrl: string;
            encode(message: _25.QueryAllBlacklistedDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryAllBlacklistedDenomsResponse;
            fromPartial(object: Partial<_25.QueryAllBlacklistedDenomsResponse>): _25.QueryAllBlacklistedDenomsResponse;
            fromAmino(object: _25.QueryAllBlacklistedDenomsResponseAmino): _25.QueryAllBlacklistedDenomsResponse;
            toAmino(message: _25.QueryAllBlacklistedDenomsResponse): _25.QueryAllBlacklistedDenomsResponseAmino;
            fromAminoMsg(object: _25.QueryAllBlacklistedDenomsResponseAminoMsg): _25.QueryAllBlacklistedDenomsResponse;
            fromProtoMsg(message: _25.QueryAllBlacklistedDenomsResponseProtoMsg): _25.QueryAllBlacklistedDenomsResponse;
            toProto(message: _25.QueryAllBlacklistedDenomsResponse): Uint8Array;
            toProtoMsg(message: _25.QueryAllBlacklistedDenomsResponse): _25.QueryAllBlacklistedDenomsResponseProtoMsg;
        };
        QueryAllWhitelistedAddressesRequest: {
            typeUrl: string;
            encode(_: _25.QueryAllWhitelistedAddressesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QueryAllWhitelistedAddressesRequest;
            fromPartial(_: Partial<_25.QueryAllWhitelistedAddressesRequest>): _25.QueryAllWhitelistedAddressesRequest;
            fromAmino(_: _25.QueryAllWhitelistedAddressesRequestAmino): _25.QueryAllWhitelistedAddressesRequest;
            toAmino(_: _25.QueryAllWhitelistedAddressesRequest): _25.QueryAllWhitelistedAddressesRequestAmino;
            fromAminoMsg(object: _25.QueryAllWhitelistedAddressesRequestAminoMsg): _25.QueryAllWhitelistedAddressesRequest;
            fromProtoMsg(message: _25.QueryAllWhitelistedAddressesRequestProtoMsg): _25.QueryAllWhitelistedAddressesRequest;
            toProto(message: _25.QueryAllWhitelistedAddressesRequest): Uint8Array;
            toProtoMsg(message: _25.QueryAllWhitelistedAddressesRequest): _25.QueryAllWhitelistedAddressesRequestProtoMsg;
        };
        QueryAllWhitelistedAddressesResponse: {
            typeUrl: string;
            encode(message: _25.QueryAllWhitelistedAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryAllWhitelistedAddressesResponse;
            fromPartial(object: Partial<_25.QueryAllWhitelistedAddressesResponse>): _25.QueryAllWhitelistedAddressesResponse;
            fromAmino(object: _25.QueryAllWhitelistedAddressesResponseAmino): _25.QueryAllWhitelistedAddressesResponse;
            toAmino(message: _25.QueryAllWhitelistedAddressesResponse): _25.QueryAllWhitelistedAddressesResponseAmino;
            fromAminoMsg(object: _25.QueryAllWhitelistedAddressesResponseAminoMsg): _25.QueryAllWhitelistedAddressesResponse;
            fromProtoMsg(message: _25.QueryAllWhitelistedAddressesResponseProtoMsg): _25.QueryAllWhitelistedAddressesResponse;
            toProto(message: _25.QueryAllWhitelistedAddressesResponse): Uint8Array;
            toProtoMsg(message: _25.QueryAllWhitelistedAddressesResponse): _25.QueryAllWhitelistedAddressesResponseProtoMsg;
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
        AddRateLimitProposal: {
            typeUrl: string;
            encode(message: _23.AddRateLimitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.AddRateLimitProposal;
            fromPartial(object: Partial<_23.AddRateLimitProposal>): _23.AddRateLimitProposal;
            fromAmino(object: _23.AddRateLimitProposalAmino): _23.AddRateLimitProposal;
            toAmino(message: _23.AddRateLimitProposal): _23.AddRateLimitProposalAmino;
            fromAminoMsg(object: _23.AddRateLimitProposalAminoMsg): _23.AddRateLimitProposal;
            fromProtoMsg(message: _23.AddRateLimitProposalProtoMsg): _23.AddRateLimitProposal;
            toProto(message: _23.AddRateLimitProposal): Uint8Array;
            toProtoMsg(message: _23.AddRateLimitProposal): _23.AddRateLimitProposalProtoMsg;
        };
        UpdateRateLimitProposal: {
            typeUrl: string;
            encode(message: _23.UpdateRateLimitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.UpdateRateLimitProposal;
            fromPartial(object: Partial<_23.UpdateRateLimitProposal>): _23.UpdateRateLimitProposal;
            fromAmino(object: _23.UpdateRateLimitProposalAmino): _23.UpdateRateLimitProposal;
            toAmino(message: _23.UpdateRateLimitProposal): _23.UpdateRateLimitProposalAmino;
            fromAminoMsg(object: _23.UpdateRateLimitProposalAminoMsg): _23.UpdateRateLimitProposal;
            fromProtoMsg(message: _23.UpdateRateLimitProposalProtoMsg): _23.UpdateRateLimitProposal;
            toProto(message: _23.UpdateRateLimitProposal): Uint8Array;
            toProtoMsg(message: _23.UpdateRateLimitProposal): _23.UpdateRateLimitProposalProtoMsg;
        };
        RemoveRateLimitProposal: {
            typeUrl: string;
            encode(message: _23.RemoveRateLimitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.RemoveRateLimitProposal;
            fromPartial(object: Partial<_23.RemoveRateLimitProposal>): _23.RemoveRateLimitProposal;
            fromAmino(object: _23.RemoveRateLimitProposalAmino): _23.RemoveRateLimitProposal;
            toAmino(message: _23.RemoveRateLimitProposal): _23.RemoveRateLimitProposalAmino;
            fromAminoMsg(object: _23.RemoveRateLimitProposalAminoMsg): _23.RemoveRateLimitProposal;
            fromProtoMsg(message: _23.RemoveRateLimitProposalProtoMsg): _23.RemoveRateLimitProposal;
            toProto(message: _23.RemoveRateLimitProposal): Uint8Array;
            toProtoMsg(message: _23.RemoveRateLimitProposal): _23.RemoveRateLimitProposalProtoMsg;
        };
        ResetRateLimitProposal: {
            typeUrl: string;
            encode(message: _23.ResetRateLimitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _23.ResetRateLimitProposal;
            fromPartial(object: Partial<_23.ResetRateLimitProposal>): _23.ResetRateLimitProposal;
            fromAmino(object: _23.ResetRateLimitProposalAmino): _23.ResetRateLimitProposal;
            toAmino(message: _23.ResetRateLimitProposal): _23.ResetRateLimitProposalAmino;
            fromAminoMsg(object: _23.ResetRateLimitProposalAminoMsg): _23.ResetRateLimitProposal;
            fromProtoMsg(message: _23.ResetRateLimitProposalProtoMsg): _23.ResetRateLimitProposal;
            toProto(message: _23.ResetRateLimitProposal): Uint8Array;
            toProtoMsg(message: _23.ResetRateLimitProposal): _23.ResetRateLimitProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _22.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.GenesisState;
            fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
            fromAmino(object: _22.GenesisStateAmino): _22.GenesisState;
            toAmino(message: _22.GenesisState): _22.GenesisStateAmino;
            fromAminoMsg(object: _22.GenesisStateAminoMsg): _22.GenesisState;
            fromProtoMsg(message: _22.GenesisStateProtoMsg): _22.GenesisState;
            toProto(message: _22.GenesisState): Uint8Array;
            toProtoMsg(message: _22.GenesisState): _22.GenesisStateProtoMsg;
        };
    };
    const records: {
        QueryClientImpl: typeof _209.QueryClientImpl;
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
        LCDQueryClient: typeof _201.LCDQueryClient;
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _29.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _29.QueryParamsRequest;
            fromPartial(_: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
            fromAmino(_: _29.QueryParamsRequestAmino): _29.QueryParamsRequest;
            toAmino(_: _29.QueryParamsRequest): _29.QueryParamsRequestAmino;
            fromAminoMsg(object: _29.QueryParamsRequestAminoMsg): _29.QueryParamsRequest;
            fromProtoMsg(message: _29.QueryParamsRequestProtoMsg): _29.QueryParamsRequest;
            toProto(message: _29.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _29.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryParamsResponse;
            fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
            fromAmino(object: _29.QueryParamsResponseAmino): _29.QueryParamsResponse;
            toAmino(message: _29.QueryParamsResponse): _29.QueryParamsResponseAmino;
            fromAminoMsg(object: _29.QueryParamsResponseAminoMsg): _29.QueryParamsResponse;
            fromProtoMsg(message: _29.QueryParamsResponseProtoMsg): _29.QueryParamsResponse;
            toProto(message: _29.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _29.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_29.QueryGetDepositRecordRequest>): _29.QueryGetDepositRecordRequest;
            fromAmino(object: _29.QueryGetDepositRecordRequestAmino): _29.QueryGetDepositRecordRequest;
            toAmino(message: _29.QueryGetDepositRecordRequest): _29.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _29.QueryGetDepositRecordRequestAminoMsg): _29.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _29.QueryGetDepositRecordRequestProtoMsg): _29.QueryGetDepositRecordRequest;
            toProto(message: _29.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _29.QueryGetDepositRecordRequest): _29.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _29.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_29.QueryGetDepositRecordResponse>): _29.QueryGetDepositRecordResponse;
            fromAmino(object: _29.QueryGetDepositRecordResponseAmino): _29.QueryGetDepositRecordResponse;
            toAmino(message: _29.QueryGetDepositRecordResponse): _29.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _29.QueryGetDepositRecordResponseAminoMsg): _29.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _29.QueryGetDepositRecordResponseProtoMsg): _29.QueryGetDepositRecordResponse;
            toProto(message: _29.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _29.QueryGetDepositRecordResponse): _29.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _29.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_29.QueryAllDepositRecordRequest>): _29.QueryAllDepositRecordRequest;
            fromAmino(object: _29.QueryAllDepositRecordRequestAmino): _29.QueryAllDepositRecordRequest;
            toAmino(message: _29.QueryAllDepositRecordRequest): _29.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _29.QueryAllDepositRecordRequestAminoMsg): _29.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _29.QueryAllDepositRecordRequestProtoMsg): _29.QueryAllDepositRecordRequest;
            toProto(message: _29.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _29.QueryAllDepositRecordRequest): _29.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _29.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_29.QueryAllDepositRecordResponse>): _29.QueryAllDepositRecordResponse;
            fromAmino(object: _29.QueryAllDepositRecordResponseAmino): _29.QueryAllDepositRecordResponse;
            toAmino(message: _29.QueryAllDepositRecordResponse): _29.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _29.QueryAllDepositRecordResponseAminoMsg): _29.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _29.QueryAllDepositRecordResponseProtoMsg): _29.QueryAllDepositRecordResponse;
            toProto(message: _29.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _29.QueryAllDepositRecordResponse): _29.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _29.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_29.QueryDepositRecordByHostRequest>): _29.QueryDepositRecordByHostRequest;
            fromAmino(object: _29.QueryDepositRecordByHostRequestAmino): _29.QueryDepositRecordByHostRequest;
            toAmino(message: _29.QueryDepositRecordByHostRequest): _29.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _29.QueryDepositRecordByHostRequestAminoMsg): _29.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _29.QueryDepositRecordByHostRequestProtoMsg): _29.QueryDepositRecordByHostRequest;
            toProto(message: _29.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _29.QueryDepositRecordByHostRequest): _29.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _29.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_29.QueryDepositRecordByHostResponse>): _29.QueryDepositRecordByHostResponse;
            fromAmino(object: _29.QueryDepositRecordByHostResponseAmino): _29.QueryDepositRecordByHostResponse;
            toAmino(message: _29.QueryDepositRecordByHostResponse): _29.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _29.QueryDepositRecordByHostResponseAminoMsg): _29.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _29.QueryDepositRecordByHostResponseProtoMsg): _29.QueryDepositRecordByHostResponse;
            toProto(message: _29.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _29.QueryDepositRecordByHostResponse): _29.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _29.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_29.QueryGetUserRedemptionRecordRequest>): _29.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _29.QueryGetUserRedemptionRecordRequestAmino): _29.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _29.QueryGetUserRedemptionRecordRequest): _29.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _29.QueryGetUserRedemptionRecordRequestAminoMsg): _29.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _29.QueryGetUserRedemptionRecordRequestProtoMsg): _29.QueryGetUserRedemptionRecordRequest;
            toProto(message: _29.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _29.QueryGetUserRedemptionRecordRequest): _29.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _29.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_29.QueryGetUserRedemptionRecordResponse>): _29.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _29.QueryGetUserRedemptionRecordResponseAmino): _29.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _29.QueryGetUserRedemptionRecordResponse): _29.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _29.QueryGetUserRedemptionRecordResponseAminoMsg): _29.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _29.QueryGetUserRedemptionRecordResponseProtoMsg): _29.QueryGetUserRedemptionRecordResponse;
            toProto(message: _29.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _29.QueryGetUserRedemptionRecordResponse): _29.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _29.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_29.QueryAllUserRedemptionRecordRequest>): _29.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _29.QueryAllUserRedemptionRecordRequestAmino): _29.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _29.QueryAllUserRedemptionRecordRequest): _29.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _29.QueryAllUserRedemptionRecordRequestAminoMsg): _29.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _29.QueryAllUserRedemptionRecordRequestProtoMsg): _29.QueryAllUserRedemptionRecordRequest;
            toProto(message: _29.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _29.QueryAllUserRedemptionRecordRequest): _29.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _29.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_29.QueryAllUserRedemptionRecordResponse>): _29.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _29.QueryAllUserRedemptionRecordResponseAmino): _29.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _29.QueryAllUserRedemptionRecordResponse): _29.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _29.QueryAllUserRedemptionRecordResponseAminoMsg): _29.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _29.QueryAllUserRedemptionRecordResponseProtoMsg): _29.QueryAllUserRedemptionRecordResponse;
            toProto(message: _29.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _29.QueryAllUserRedemptionRecordResponse): _29.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _29.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_29.QueryAllUserRedemptionRecordForUserRequest>): _29.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _29.QueryAllUserRedemptionRecordForUserRequestAmino): _29.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _29.QueryAllUserRedemptionRecordForUserRequest): _29.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _29.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _29.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _29.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _29.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _29.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _29.QueryAllUserRedemptionRecordForUserRequest): _29.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _29.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_29.QueryAllUserRedemptionRecordForUserResponse>): _29.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _29.QueryAllUserRedemptionRecordForUserResponseAmino): _29.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _29.QueryAllUserRedemptionRecordForUserResponse): _29.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _29.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _29.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _29.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _29.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _29.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _29.QueryAllUserRedemptionRecordForUserResponse): _29.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _29.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_29.QueryGetEpochUnbondingRecordRequest>): _29.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _29.QueryGetEpochUnbondingRecordRequestAmino): _29.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _29.QueryGetEpochUnbondingRecordRequest): _29.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _29.QueryGetEpochUnbondingRecordRequestAminoMsg): _29.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _29.QueryGetEpochUnbondingRecordRequestProtoMsg): _29.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _29.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _29.QueryGetEpochUnbondingRecordRequest): _29.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _29.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_29.QueryGetEpochUnbondingRecordResponse>): _29.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _29.QueryGetEpochUnbondingRecordResponseAmino): _29.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _29.QueryGetEpochUnbondingRecordResponse): _29.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _29.QueryGetEpochUnbondingRecordResponseAminoMsg): _29.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _29.QueryGetEpochUnbondingRecordResponseProtoMsg): _29.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _29.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _29.QueryGetEpochUnbondingRecordResponse): _29.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _29.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_29.QueryAllEpochUnbondingRecordRequest>): _29.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _29.QueryAllEpochUnbondingRecordRequestAmino): _29.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _29.QueryAllEpochUnbondingRecordRequest): _29.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _29.QueryAllEpochUnbondingRecordRequestAminoMsg): _29.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _29.QueryAllEpochUnbondingRecordRequestProtoMsg): _29.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _29.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _29.QueryAllEpochUnbondingRecordRequest): _29.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _29.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _29.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_29.QueryAllEpochUnbondingRecordResponse>): _29.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _29.QueryAllEpochUnbondingRecordResponseAmino): _29.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _29.QueryAllEpochUnbondingRecordResponse): _29.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _29.QueryAllEpochUnbondingRecordResponseAminoMsg): _29.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _29.QueryAllEpochUnbondingRecordResponseProtoMsg): _29.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _29.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _29.QueryAllEpochUnbondingRecordResponse): _29.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        depositRecord_StatusFromJSON(object: any): _28.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _28.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _28.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _28.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _28.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _28.HostZoneUnbonding_Status): string;
        DepositRecord_Status: typeof _28.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _28.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _28.DepositRecord_Status;
        DepositRecord_Source: typeof _28.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _28.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _28.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _28.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _28.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _28.HostZoneUnbonding_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _28.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.UserRedemptionRecord;
            fromPartial(object: Partial<_28.UserRedemptionRecord>): _28.UserRedemptionRecord;
            fromAmino(object: _28.UserRedemptionRecordAmino): _28.UserRedemptionRecord;
            toAmino(message: _28.UserRedemptionRecord): _28.UserRedemptionRecordAmino;
            fromAminoMsg(object: _28.UserRedemptionRecordAminoMsg): _28.UserRedemptionRecord;
            fromProtoMsg(message: _28.UserRedemptionRecordProtoMsg): _28.UserRedemptionRecord;
            toProto(message: _28.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _28.UserRedemptionRecord): _28.UserRedemptionRecordProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _28.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.Params;
            fromPartial(_: Partial<_28.Params>): _28.Params;
            fromAmino(_: _28.ParamsAmino): _28.Params;
            toAmino(_: _28.Params): _28.ParamsAmino;
            fromAminoMsg(object: _28.ParamsAminoMsg): _28.Params;
            fromProtoMsg(message: _28.ParamsProtoMsg): _28.Params;
            toProto(message: _28.Params): Uint8Array;
            toProtoMsg(message: _28.Params): _28.ParamsProtoMsg;
        };
        RecordsPacketData: {
            typeUrl: string;
            encode(message: _28.RecordsPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.RecordsPacketData;
            fromPartial(object: Partial<_28.RecordsPacketData>): _28.RecordsPacketData;
            fromAmino(object: _28.RecordsPacketDataAmino): _28.RecordsPacketData;
            toAmino(message: _28.RecordsPacketData): _28.RecordsPacketDataAmino;
            fromAminoMsg(object: _28.RecordsPacketDataAminoMsg): _28.RecordsPacketData;
            fromProtoMsg(message: _28.RecordsPacketDataProtoMsg): _28.RecordsPacketData;
            toProto(message: _28.RecordsPacketData): Uint8Array;
            toProtoMsg(message: _28.RecordsPacketData): _28.RecordsPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _28.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _28.NoData;
            fromPartial(_: Partial<_28.NoData>): _28.NoData;
            fromAmino(_: _28.NoDataAmino): _28.NoData;
            toAmino(_: _28.NoData): _28.NoDataAmino;
            fromAminoMsg(object: _28.NoDataAminoMsg): _28.NoData;
            fromProtoMsg(message: _28.NoDataProtoMsg): _28.NoData;
            toProto(message: _28.NoData): Uint8Array;
            toProtoMsg(message: _28.NoData): _28.NoDataProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _28.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.DepositRecord;
            fromPartial(object: Partial<_28.DepositRecord>): _28.DepositRecord;
            fromAmino(object: _28.DepositRecordAmino): _28.DepositRecord;
            toAmino(message: _28.DepositRecord): _28.DepositRecordAmino;
            fromAminoMsg(object: _28.DepositRecordAminoMsg): _28.DepositRecord;
            fromProtoMsg(message: _28.DepositRecordProtoMsg): _28.DepositRecord;
            toProto(message: _28.DepositRecord): Uint8Array;
            toProtoMsg(message: _28.DepositRecord): _28.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _28.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.HostZoneUnbonding;
            fromPartial(object: Partial<_28.HostZoneUnbonding>): _28.HostZoneUnbonding;
            fromAmino(object: _28.HostZoneUnbondingAmino): _28.HostZoneUnbonding;
            toAmino(message: _28.HostZoneUnbonding): _28.HostZoneUnbondingAmino;
            fromAminoMsg(object: _28.HostZoneUnbondingAminoMsg): _28.HostZoneUnbonding;
            fromProtoMsg(message: _28.HostZoneUnbondingProtoMsg): _28.HostZoneUnbonding;
            toProto(message: _28.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _28.HostZoneUnbonding): _28.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _28.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.EpochUnbondingRecord;
            fromPartial(object: Partial<_28.EpochUnbondingRecord>): _28.EpochUnbondingRecord;
            fromAmino(object: _28.EpochUnbondingRecordAmino): _28.EpochUnbondingRecord;
            toAmino(message: _28.EpochUnbondingRecord): _28.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _28.EpochUnbondingRecordAminoMsg): _28.EpochUnbondingRecord;
            fromProtoMsg(message: _28.EpochUnbondingRecordProtoMsg): _28.EpochUnbondingRecord;
            toProto(message: _28.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _28.EpochUnbondingRecord): _28.EpochUnbondingRecordProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _28.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _28.GenesisState;
            fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
            fromAmino(object: _28.GenesisStateAmino): _28.GenesisState;
            toAmino(message: _28.GenesisState): _28.GenesisStateAmino;
            fromAminoMsg(object: _28.GenesisStateAminoMsg): _28.GenesisState;
            fromProtoMsg(message: _28.GenesisStateProtoMsg): _28.GenesisState;
            toProto(message: _28.GenesisState): Uint8Array;
            toProtoMsg(message: _28.GenesisState): _28.GenesisStateProtoMsg;
        };
        TransferCallback: {
            typeUrl: string;
            encode(message: _27.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _27.TransferCallback;
            fromPartial(object: Partial<_27.TransferCallback>): _27.TransferCallback;
            fromAmino(object: _27.TransferCallbackAmino): _27.TransferCallback;
            toAmino(message: _27.TransferCallback): _27.TransferCallbackAmino;
            fromAminoMsg(object: _27.TransferCallbackAminoMsg): _27.TransferCallback;
            fromProtoMsg(message: _27.TransferCallbackProtoMsg): _27.TransferCallback;
            toProto(message: _27.TransferCallback): Uint8Array;
            toProtoMsg(message: _27.TransferCallback): _27.TransferCallbackProtoMsg;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _213.MsgClientImpl;
        QueryClientImpl: typeof _210.QueryClientImpl;
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
        LCDQueryClient: typeof _202.LCDQueryClient;
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
                toAmino: (message: _40.MsgLiquidStake) => _40.MsgLiquidStakeAmino;
                fromAmino: (object: _40.MsgLiquidStakeAmino) => _40.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _40.MsgRedeemStake) => _40.MsgRedeemStakeAmino;
                fromAmino: (object: _40.MsgRedeemStakeAmino) => _40.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _40.MsgRegisterHostZone) => _40.MsgRegisterHostZoneAmino;
                fromAmino: (object: _40.MsgRegisterHostZoneAmino) => _40.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _40.MsgClaimUndelegatedTokens) => _40.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _40.MsgClaimUndelegatedTokensAmino) => _40.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _40.MsgRebalanceValidators) => _40.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _40.MsgRebalanceValidatorsAmino) => _40.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _40.MsgAddValidators) => _40.MsgAddValidatorsAmino;
                fromAmino: (object: _40.MsgAddValidatorsAmino) => _40.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeight": {
                aminoType: string;
                toAmino: (message: _40.MsgChangeValidatorWeight) => _40.MsgChangeValidatorWeightAmino;
                fromAmino: (object: _40.MsgChangeValidatorWeightAmino) => _40.MsgChangeValidatorWeight;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _40.MsgDeleteValidator) => _40.MsgDeleteValidatorAmino;
                fromAmino: (object: _40.MsgDeleteValidatorAmino) => _40.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _40.MsgRestoreInterchainAccount) => _40.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _40.MsgRestoreInterchainAccountAmino) => _40.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _40.MsgUpdateValidatorSharesExchRate) => _40.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _40.MsgUpdateValidatorSharesExchRateAmino) => _40.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _40.MsgClearBalance) => _40.MsgClearBalanceAmino;
                fromAmino: (object: _40.MsgClearBalanceAmino) => _40.MsgClearBalance;
            };
        };
        ValidatorExchangeRate: {
            typeUrl: string;
            encode(message: _41.ValidatorExchangeRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _41.ValidatorExchangeRate;
            fromPartial(object: Partial<_41.ValidatorExchangeRate>): _41.ValidatorExchangeRate;
            fromAmino(object: _41.ValidatorExchangeRateAmino): _41.ValidatorExchangeRate;
            toAmino(message: _41.ValidatorExchangeRate): _41.ValidatorExchangeRateAmino;
            fromAminoMsg(object: _41.ValidatorExchangeRateAminoMsg): _41.ValidatorExchangeRate;
            fromProtoMsg(message: _41.ValidatorExchangeRateProtoMsg): _41.ValidatorExchangeRate;
            toProto(message: _41.ValidatorExchangeRate): Uint8Array;
            toProtoMsg(message: _41.ValidatorExchangeRate): _41.ValidatorExchangeRateProtoMsg;
        };
        Validator: {
            typeUrl: string;
            encode(message: _41.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _41.Validator;
            fromPartial(object: Partial<_41.Validator>): _41.Validator;
            fromAmino(object: _41.ValidatorAmino): _41.Validator;
            toAmino(message: _41.Validator): _41.ValidatorAmino;
            fromAminoMsg(object: _41.ValidatorAminoMsg): _41.Validator;
            fromProtoMsg(message: _41.ValidatorProtoMsg): _41.Validator;
            toProto(message: _41.Validator): Uint8Array;
            toProtoMsg(message: _41.Validator): _41.ValidatorProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _40.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgLiquidStake;
            fromPartial(object: Partial<_40.MsgLiquidStake>): _40.MsgLiquidStake;
            fromAmino(object: _40.MsgLiquidStakeAmino): _40.MsgLiquidStake;
            toAmino(message: _40.MsgLiquidStake): _40.MsgLiquidStakeAmino;
            fromAminoMsg(object: _40.MsgLiquidStakeAminoMsg): _40.MsgLiquidStake;
            fromProtoMsg(message: _40.MsgLiquidStakeProtoMsg): _40.MsgLiquidStake;
            toProto(message: _40.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _40.MsgLiquidStake): _40.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(_: _40.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgLiquidStakeResponse;
            fromPartial(_: Partial<_40.MsgLiquidStakeResponse>): _40.MsgLiquidStakeResponse;
            fromAmino(_: _40.MsgLiquidStakeResponseAmino): _40.MsgLiquidStakeResponse;
            toAmino(_: _40.MsgLiquidStakeResponse): _40.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _40.MsgLiquidStakeResponseAminoMsg): _40.MsgLiquidStakeResponse;
            fromProtoMsg(message: _40.MsgLiquidStakeResponseProtoMsg): _40.MsgLiquidStakeResponse;
            toProto(message: _40.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _40.MsgLiquidStakeResponse): _40.MsgLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _40.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgClearBalance;
            fromPartial(object: Partial<_40.MsgClearBalance>): _40.MsgClearBalance;
            fromAmino(object: _40.MsgClearBalanceAmino): _40.MsgClearBalance;
            toAmino(message: _40.MsgClearBalance): _40.MsgClearBalanceAmino;
            fromAminoMsg(object: _40.MsgClearBalanceAminoMsg): _40.MsgClearBalance;
            fromProtoMsg(message: _40.MsgClearBalanceProtoMsg): _40.MsgClearBalance;
            toProto(message: _40.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _40.MsgClearBalance): _40.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _40.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgClearBalanceResponse;
            fromPartial(_: Partial<_40.MsgClearBalanceResponse>): _40.MsgClearBalanceResponse;
            fromAmino(_: _40.MsgClearBalanceResponseAmino): _40.MsgClearBalanceResponse;
            toAmino(_: _40.MsgClearBalanceResponse): _40.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _40.MsgClearBalanceResponseAminoMsg): _40.MsgClearBalanceResponse;
            fromProtoMsg(message: _40.MsgClearBalanceResponseProtoMsg): _40.MsgClearBalanceResponse;
            toProto(message: _40.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _40.MsgClearBalanceResponse): _40.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _40.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgRedeemStake;
            fromPartial(object: Partial<_40.MsgRedeemStake>): _40.MsgRedeemStake;
            fromAmino(object: _40.MsgRedeemStakeAmino): _40.MsgRedeemStake;
            toAmino(message: _40.MsgRedeemStake): _40.MsgRedeemStakeAmino;
            fromAminoMsg(object: _40.MsgRedeemStakeAminoMsg): _40.MsgRedeemStake;
            fromProtoMsg(message: _40.MsgRedeemStakeProtoMsg): _40.MsgRedeemStake;
            toProto(message: _40.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _40.MsgRedeemStake): _40.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _40.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_40.MsgRedeemStakeResponse>): _40.MsgRedeemStakeResponse;
            fromAmino(_: _40.MsgRedeemStakeResponseAmino): _40.MsgRedeemStakeResponse;
            toAmino(_: _40.MsgRedeemStakeResponse): _40.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _40.MsgRedeemStakeResponseAminoMsg): _40.MsgRedeemStakeResponse;
            fromProtoMsg(message: _40.MsgRedeemStakeResponseProtoMsg): _40.MsgRedeemStakeResponse;
            toProto(message: _40.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _40.MsgRedeemStakeResponse): _40.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _40.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgRegisterHostZone;
            fromPartial(object: Partial<_40.MsgRegisterHostZone>): _40.MsgRegisterHostZone;
            fromAmino(object: _40.MsgRegisterHostZoneAmino): _40.MsgRegisterHostZone;
            toAmino(message: _40.MsgRegisterHostZone): _40.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _40.MsgRegisterHostZoneAminoMsg): _40.MsgRegisterHostZone;
            fromProtoMsg(message: _40.MsgRegisterHostZoneProtoMsg): _40.MsgRegisterHostZone;
            toProto(message: _40.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _40.MsgRegisterHostZone): _40.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _40.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_40.MsgRegisterHostZoneResponse>): _40.MsgRegisterHostZoneResponse;
            fromAmino(_: _40.MsgRegisterHostZoneResponseAmino): _40.MsgRegisterHostZoneResponse;
            toAmino(_: _40.MsgRegisterHostZoneResponse): _40.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _40.MsgRegisterHostZoneResponseAminoMsg): _40.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _40.MsgRegisterHostZoneResponseProtoMsg): _40.MsgRegisterHostZoneResponse;
            toProto(message: _40.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _40.MsgRegisterHostZoneResponse): _40.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _40.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_40.MsgClaimUndelegatedTokens>): _40.MsgClaimUndelegatedTokens;
            fromAmino(object: _40.MsgClaimUndelegatedTokensAmino): _40.MsgClaimUndelegatedTokens;
            toAmino(message: _40.MsgClaimUndelegatedTokens): _40.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _40.MsgClaimUndelegatedTokensAminoMsg): _40.MsgClaimUndelegatedTokens;
            fromProtoMsg(message: _40.MsgClaimUndelegatedTokensProtoMsg): _40.MsgClaimUndelegatedTokens;
            toProto(message: _40.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _40.MsgClaimUndelegatedTokens): _40.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _40.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_40.MsgClaimUndelegatedTokensResponse>): _40.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _40.MsgClaimUndelegatedTokensResponseAmino): _40.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _40.MsgClaimUndelegatedTokensResponse): _40.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _40.MsgClaimUndelegatedTokensResponseAminoMsg): _40.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _40.MsgClaimUndelegatedTokensResponseProtoMsg): _40.MsgClaimUndelegatedTokensResponse;
            toProto(message: _40.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _40.MsgClaimUndelegatedTokensResponse): _40.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _40.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgRebalanceValidators;
            fromPartial(object: Partial<_40.MsgRebalanceValidators>): _40.MsgRebalanceValidators;
            fromAmino(object: _40.MsgRebalanceValidatorsAmino): _40.MsgRebalanceValidators;
            toAmino(message: _40.MsgRebalanceValidators): _40.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _40.MsgRebalanceValidatorsAminoMsg): _40.MsgRebalanceValidators;
            fromProtoMsg(message: _40.MsgRebalanceValidatorsProtoMsg): _40.MsgRebalanceValidators;
            toProto(message: _40.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _40.MsgRebalanceValidators): _40.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _40.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_40.MsgRebalanceValidatorsResponse>): _40.MsgRebalanceValidatorsResponse;
            fromAmino(_: _40.MsgRebalanceValidatorsResponseAmino): _40.MsgRebalanceValidatorsResponse;
            toAmino(_: _40.MsgRebalanceValidatorsResponse): _40.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _40.MsgRebalanceValidatorsResponseAminoMsg): _40.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _40.MsgRebalanceValidatorsResponseProtoMsg): _40.MsgRebalanceValidatorsResponse;
            toProto(message: _40.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _40.MsgRebalanceValidatorsResponse): _40.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _40.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgAddValidators;
            fromPartial(object: Partial<_40.MsgAddValidators>): _40.MsgAddValidators;
            fromAmino(object: _40.MsgAddValidatorsAmino): _40.MsgAddValidators;
            toAmino(message: _40.MsgAddValidators): _40.MsgAddValidatorsAmino;
            fromAminoMsg(object: _40.MsgAddValidatorsAminoMsg): _40.MsgAddValidators;
            fromProtoMsg(message: _40.MsgAddValidatorsProtoMsg): _40.MsgAddValidators;
            toProto(message: _40.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _40.MsgAddValidators): _40.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _40.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_40.MsgAddValidatorsResponse>): _40.MsgAddValidatorsResponse;
            fromAmino(_: _40.MsgAddValidatorsResponseAmino): _40.MsgAddValidatorsResponse;
            toAmino(_: _40.MsgAddValidatorsResponse): _40.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _40.MsgAddValidatorsResponseAminoMsg): _40.MsgAddValidatorsResponse;
            fromProtoMsg(message: _40.MsgAddValidatorsResponseProtoMsg): _40.MsgAddValidatorsResponse;
            toProto(message: _40.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _40.MsgAddValidatorsResponse): _40.MsgAddValidatorsResponseProtoMsg;
        };
        MsgChangeValidatorWeight: {
            typeUrl: string;
            encode(message: _40.MsgChangeValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgChangeValidatorWeight;
            fromPartial(object: Partial<_40.MsgChangeValidatorWeight>): _40.MsgChangeValidatorWeight;
            fromAmino(object: _40.MsgChangeValidatorWeightAmino): _40.MsgChangeValidatorWeight;
            toAmino(message: _40.MsgChangeValidatorWeight): _40.MsgChangeValidatorWeightAmino;
            fromAminoMsg(object: _40.MsgChangeValidatorWeightAminoMsg): _40.MsgChangeValidatorWeight;
            fromProtoMsg(message: _40.MsgChangeValidatorWeightProtoMsg): _40.MsgChangeValidatorWeight;
            toProto(message: _40.MsgChangeValidatorWeight): Uint8Array;
            toProtoMsg(message: _40.MsgChangeValidatorWeight): _40.MsgChangeValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeightResponse: {
            typeUrl: string;
            encode(_: _40.MsgChangeValidatorWeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgChangeValidatorWeightResponse;
            fromPartial(_: Partial<_40.MsgChangeValidatorWeightResponse>): _40.MsgChangeValidatorWeightResponse;
            fromAmino(_: _40.MsgChangeValidatorWeightResponseAmino): _40.MsgChangeValidatorWeightResponse;
            toAmino(_: _40.MsgChangeValidatorWeightResponse): _40.MsgChangeValidatorWeightResponseAmino;
            fromAminoMsg(object: _40.MsgChangeValidatorWeightResponseAminoMsg): _40.MsgChangeValidatorWeightResponse;
            fromProtoMsg(message: _40.MsgChangeValidatorWeightResponseProtoMsg): _40.MsgChangeValidatorWeightResponse;
            toProto(message: _40.MsgChangeValidatorWeightResponse): Uint8Array;
            toProtoMsg(message: _40.MsgChangeValidatorWeightResponse): _40.MsgChangeValidatorWeightResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _40.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgDeleteValidator;
            fromPartial(object: Partial<_40.MsgDeleteValidator>): _40.MsgDeleteValidator;
            fromAmino(object: _40.MsgDeleteValidatorAmino): _40.MsgDeleteValidator;
            toAmino(message: _40.MsgDeleteValidator): _40.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _40.MsgDeleteValidatorAminoMsg): _40.MsgDeleteValidator;
            fromProtoMsg(message: _40.MsgDeleteValidatorProtoMsg): _40.MsgDeleteValidator;
            toProto(message: _40.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _40.MsgDeleteValidator): _40.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _40.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_40.MsgDeleteValidatorResponse>): _40.MsgDeleteValidatorResponse;
            fromAmino(_: _40.MsgDeleteValidatorResponseAmino): _40.MsgDeleteValidatorResponse;
            toAmino(_: _40.MsgDeleteValidatorResponse): _40.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _40.MsgDeleteValidatorResponseAminoMsg): _40.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _40.MsgDeleteValidatorResponseProtoMsg): _40.MsgDeleteValidatorResponse;
            toProto(message: _40.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _40.MsgDeleteValidatorResponse): _40.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _40.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_40.MsgRestoreInterchainAccount>): _40.MsgRestoreInterchainAccount;
            fromAmino(object: _40.MsgRestoreInterchainAccountAmino): _40.MsgRestoreInterchainAccount;
            toAmino(message: _40.MsgRestoreInterchainAccount): _40.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _40.MsgRestoreInterchainAccountAminoMsg): _40.MsgRestoreInterchainAccount;
            fromProtoMsg(message: _40.MsgRestoreInterchainAccountProtoMsg): _40.MsgRestoreInterchainAccount;
            toProto(message: _40.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _40.MsgRestoreInterchainAccount): _40.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _40.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_40.MsgRestoreInterchainAccountResponse>): _40.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _40.MsgRestoreInterchainAccountResponseAmino): _40.MsgRestoreInterchainAccountResponse;
            toAmino(_: _40.MsgRestoreInterchainAccountResponse): _40.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _40.MsgRestoreInterchainAccountResponseAminoMsg): _40.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _40.MsgRestoreInterchainAccountResponseProtoMsg): _40.MsgRestoreInterchainAccountResponse;
            toProto(message: _40.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _40.MsgRestoreInterchainAccountResponse): _40.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _40.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _40.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_40.MsgUpdateValidatorSharesExchRate>): _40.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _40.MsgUpdateValidatorSharesExchRateAmino): _40.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _40.MsgUpdateValidatorSharesExchRate): _40.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _40.MsgUpdateValidatorSharesExchRateAminoMsg): _40.MsgUpdateValidatorSharesExchRate;
            fromProtoMsg(message: _40.MsgUpdateValidatorSharesExchRateProtoMsg): _40.MsgUpdateValidatorSharesExchRate;
            toProto(message: _40.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _40.MsgUpdateValidatorSharesExchRate): _40.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _40.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _40.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_40.MsgUpdateValidatorSharesExchRateResponse>): _40.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _40.MsgUpdateValidatorSharesExchRateResponseAmino): _40.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _40.MsgUpdateValidatorSharesExchRateResponse): _40.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _40.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _40.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _40.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _40.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _40.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _40.MsgUpdateValidatorSharesExchRateResponse): _40.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _39.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_39.QueryInterchainAccountFromAddressRequest>): _39.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _39.QueryInterchainAccountFromAddressRequestAmino): _39.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _39.QueryInterchainAccountFromAddressRequest): _39.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _39.QueryInterchainAccountFromAddressRequestAminoMsg): _39.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _39.QueryInterchainAccountFromAddressRequestProtoMsg): _39.QueryInterchainAccountFromAddressRequest;
            toProto(message: _39.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _39.QueryInterchainAccountFromAddressRequest): _39.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _39.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_39.QueryInterchainAccountFromAddressResponse>): _39.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _39.QueryInterchainAccountFromAddressResponseAmino): _39.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _39.QueryInterchainAccountFromAddressResponse): _39.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _39.QueryInterchainAccountFromAddressResponseAminoMsg): _39.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _39.QueryInterchainAccountFromAddressResponseProtoMsg): _39.QueryInterchainAccountFromAddressResponse;
            toProto(message: _39.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _39.QueryInterchainAccountFromAddressResponse): _39.QueryInterchainAccountFromAddressResponseProtoMsg;
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
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _39.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_39.QueryGetValidatorsRequest>): _39.QueryGetValidatorsRequest;
            fromAmino(object: _39.QueryGetValidatorsRequestAmino): _39.QueryGetValidatorsRequest;
            toAmino(message: _39.QueryGetValidatorsRequest): _39.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _39.QueryGetValidatorsRequestAminoMsg): _39.QueryGetValidatorsRequest;
            fromProtoMsg(message: _39.QueryGetValidatorsRequestProtoMsg): _39.QueryGetValidatorsRequest;
            toProto(message: _39.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _39.QueryGetValidatorsRequest): _39.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _39.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_39.QueryGetValidatorsResponse>): _39.QueryGetValidatorsResponse;
            fromAmino(object: _39.QueryGetValidatorsResponseAmino): _39.QueryGetValidatorsResponse;
            toAmino(message: _39.QueryGetValidatorsResponse): _39.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _39.QueryGetValidatorsResponseAminoMsg): _39.QueryGetValidatorsResponse;
            fromProtoMsg(message: _39.QueryGetValidatorsResponseProtoMsg): _39.QueryGetValidatorsResponse;
            toProto(message: _39.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _39.QueryGetValidatorsResponse): _39.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _39.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_39.QueryGetHostZoneRequest>): _39.QueryGetHostZoneRequest;
            fromAmino(object: _39.QueryGetHostZoneRequestAmino): _39.QueryGetHostZoneRequest;
            toAmino(message: _39.QueryGetHostZoneRequest): _39.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _39.QueryGetHostZoneRequestAminoMsg): _39.QueryGetHostZoneRequest;
            fromProtoMsg(message: _39.QueryGetHostZoneRequestProtoMsg): _39.QueryGetHostZoneRequest;
            toProto(message: _39.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _39.QueryGetHostZoneRequest): _39.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _39.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_39.QueryGetHostZoneResponse>): _39.QueryGetHostZoneResponse;
            fromAmino(object: _39.QueryGetHostZoneResponseAmino): _39.QueryGetHostZoneResponse;
            toAmino(message: _39.QueryGetHostZoneResponse): _39.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _39.QueryGetHostZoneResponseAminoMsg): _39.QueryGetHostZoneResponse;
            fromProtoMsg(message: _39.QueryGetHostZoneResponseProtoMsg): _39.QueryGetHostZoneResponse;
            toProto(message: _39.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _39.QueryGetHostZoneResponse): _39.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _39.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_39.QueryAllHostZoneRequest>): _39.QueryAllHostZoneRequest;
            fromAmino(object: _39.QueryAllHostZoneRequestAmino): _39.QueryAllHostZoneRequest;
            toAmino(message: _39.QueryAllHostZoneRequest): _39.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _39.QueryAllHostZoneRequestAminoMsg): _39.QueryAllHostZoneRequest;
            fromProtoMsg(message: _39.QueryAllHostZoneRequestProtoMsg): _39.QueryAllHostZoneRequest;
            toProto(message: _39.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _39.QueryAllHostZoneRequest): _39.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _39.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_39.QueryAllHostZoneResponse>): _39.QueryAllHostZoneResponse;
            fromAmino(object: _39.QueryAllHostZoneResponseAmino): _39.QueryAllHostZoneResponse;
            toAmino(message: _39.QueryAllHostZoneResponse): _39.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _39.QueryAllHostZoneResponseAminoMsg): _39.QueryAllHostZoneResponse;
            fromProtoMsg(message: _39.QueryAllHostZoneResponseProtoMsg): _39.QueryAllHostZoneResponse;
            toProto(message: _39.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _39.QueryAllHostZoneResponse): _39.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _39.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryModuleAddressRequest;
            fromPartial(object: Partial<_39.QueryModuleAddressRequest>): _39.QueryModuleAddressRequest;
            fromAmino(object: _39.QueryModuleAddressRequestAmino): _39.QueryModuleAddressRequest;
            toAmino(message: _39.QueryModuleAddressRequest): _39.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _39.QueryModuleAddressRequestAminoMsg): _39.QueryModuleAddressRequest;
            fromProtoMsg(message: _39.QueryModuleAddressRequestProtoMsg): _39.QueryModuleAddressRequest;
            toProto(message: _39.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _39.QueryModuleAddressRequest): _39.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _39.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryModuleAddressResponse;
            fromPartial(object: Partial<_39.QueryModuleAddressResponse>): _39.QueryModuleAddressResponse;
            fromAmino(object: _39.QueryModuleAddressResponseAmino): _39.QueryModuleAddressResponse;
            toAmino(message: _39.QueryModuleAddressResponse): _39.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _39.QueryModuleAddressResponseAminoMsg): _39.QueryModuleAddressResponse;
            fromProtoMsg(message: _39.QueryModuleAddressResponseProtoMsg): _39.QueryModuleAddressResponse;
            toProto(message: _39.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _39.QueryModuleAddressResponse): _39.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _39.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_39.QueryGetEpochTrackerRequest>): _39.QueryGetEpochTrackerRequest;
            fromAmino(object: _39.QueryGetEpochTrackerRequestAmino): _39.QueryGetEpochTrackerRequest;
            toAmino(message: _39.QueryGetEpochTrackerRequest): _39.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _39.QueryGetEpochTrackerRequestAminoMsg): _39.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _39.QueryGetEpochTrackerRequestProtoMsg): _39.QueryGetEpochTrackerRequest;
            toProto(message: _39.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _39.QueryGetEpochTrackerRequest): _39.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _39.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_39.QueryGetEpochTrackerResponse>): _39.QueryGetEpochTrackerResponse;
            fromAmino(object: _39.QueryGetEpochTrackerResponseAmino): _39.QueryGetEpochTrackerResponse;
            toAmino(message: _39.QueryGetEpochTrackerResponse): _39.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _39.QueryGetEpochTrackerResponseAminoMsg): _39.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _39.QueryGetEpochTrackerResponseProtoMsg): _39.QueryGetEpochTrackerResponse;
            toProto(message: _39.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _39.QueryGetEpochTrackerResponse): _39.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _39.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _39.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_39.QueryAllEpochTrackerRequest>): _39.QueryAllEpochTrackerRequest;
            fromAmino(_: _39.QueryAllEpochTrackerRequestAmino): _39.QueryAllEpochTrackerRequest;
            toAmino(_: _39.QueryAllEpochTrackerRequest): _39.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _39.QueryAllEpochTrackerRequestAminoMsg): _39.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _39.QueryAllEpochTrackerRequestProtoMsg): _39.QueryAllEpochTrackerRequest;
            toProto(message: _39.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _39.QueryAllEpochTrackerRequest): _39.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _39.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_39.QueryAllEpochTrackerResponse>): _39.QueryAllEpochTrackerResponse;
            fromAmino(object: _39.QueryAllEpochTrackerResponseAmino): _39.QueryAllEpochTrackerResponse;
            toAmino(message: _39.QueryAllEpochTrackerResponse): _39.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _39.QueryAllEpochTrackerResponseAminoMsg): _39.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _39.QueryAllEpochTrackerResponseProtoMsg): _39.QueryAllEpochTrackerResponse;
            toProto(message: _39.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _39.QueryAllEpochTrackerResponse): _39.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _39.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_39.QueryGetNextPacketSequenceRequest>): _39.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _39.QueryGetNextPacketSequenceRequestAmino): _39.QueryGetNextPacketSequenceRequest;
            toAmino(message: _39.QueryGetNextPacketSequenceRequest): _39.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _39.QueryGetNextPacketSequenceRequestAminoMsg): _39.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _39.QueryGetNextPacketSequenceRequestProtoMsg): _39.QueryGetNextPacketSequenceRequest;
            toProto(message: _39.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _39.QueryGetNextPacketSequenceRequest): _39.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _39.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_39.QueryGetNextPacketSequenceResponse>): _39.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _39.QueryGetNextPacketSequenceResponseAmino): _39.QueryGetNextPacketSequenceResponse;
            toAmino(message: _39.QueryGetNextPacketSequenceResponse): _39.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _39.QueryGetNextPacketSequenceResponseAminoMsg): _39.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _39.QueryGetNextPacketSequenceResponseProtoMsg): _39.QueryGetNextPacketSequenceResponse;
            toProto(message: _39.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _39.QueryGetNextPacketSequenceResponse): _39.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _39.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryAddressUnbondings;
            fromPartial(object: Partial<_39.QueryAddressUnbondings>): _39.QueryAddressUnbondings;
            fromAmino(object: _39.QueryAddressUnbondingsAmino): _39.QueryAddressUnbondings;
            toAmino(message: _39.QueryAddressUnbondings): _39.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _39.QueryAddressUnbondingsAminoMsg): _39.QueryAddressUnbondings;
            fromProtoMsg(message: _39.QueryAddressUnbondingsProtoMsg): _39.QueryAddressUnbondings;
            toProto(message: _39.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _39.QueryAddressUnbondings): _39.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _39.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _39.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_39.QueryAddressUnbondingsResponse>): _39.QueryAddressUnbondingsResponse;
            fromAmino(object: _39.QueryAddressUnbondingsResponseAmino): _39.QueryAddressUnbondingsResponse;
            toAmino(message: _39.QueryAddressUnbondingsResponse): _39.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _39.QueryAddressUnbondingsResponseAminoMsg): _39.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _39.QueryAddressUnbondingsResponseProtoMsg): _39.QueryAddressUnbondingsResponse;
            toProto(message: _39.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _39.QueryAddressUnbondingsResponse): _39.QueryAddressUnbondingsResponseProtoMsg;
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
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _37.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _37.StakeibcPacketData;
            fromPartial(object: Partial<_37.StakeibcPacketData>): _37.StakeibcPacketData;
            fromAmino(object: _37.StakeibcPacketDataAmino): _37.StakeibcPacketData;
            toAmino(message: _37.StakeibcPacketData): _37.StakeibcPacketDataAmino;
            fromAminoMsg(object: _37.StakeibcPacketDataAminoMsg): _37.StakeibcPacketData;
            fromProtoMsg(message: _37.StakeibcPacketDataProtoMsg): _37.StakeibcPacketData;
            toProto(message: _37.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _37.StakeibcPacketData): _37.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _37.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _37.NoData;
            fromPartial(_: Partial<_37.NoData>): _37.NoData;
            fromAmino(_: _37.NoDataAmino): _37.NoData;
            toAmino(_: _37.NoData): _37.NoDataAmino;
            fromAminoMsg(object: _37.NoDataAminoMsg): _37.NoData;
            fromProtoMsg(message: _37.NoDataProtoMsg): _37.NoData;
            toProto(message: _37.NoData): Uint8Array;
            toProtoMsg(message: _37.NoData): _37.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _36.ICAAccountType;
        iCAAccountTypeToJSON(object: _36.ICAAccountType): string;
        ICAAccountType: typeof _36.ICAAccountType;
        ICAAccountTypeSDKType: typeof _36.ICAAccountType;
        ICAAccountTypeAmino: typeof _36.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _36.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _36.ICAAccount;
            fromPartial(object: Partial<_36.ICAAccount>): _36.ICAAccount;
            fromAmino(object: _36.ICAAccountAmino): _36.ICAAccount;
            toAmino(message: _36.ICAAccount): _36.ICAAccountAmino;
            fromAminoMsg(object: _36.ICAAccountAminoMsg): _36.ICAAccount;
            fromProtoMsg(message: _36.ICAAccountProtoMsg): _36.ICAAccount;
            toProto(message: _36.ICAAccount): Uint8Array;
            toProtoMsg(message: _36.ICAAccount): _36.ICAAccountProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _35.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _35.HostZone;
            fromPartial(object: Partial<_35.HostZone>): _35.HostZone;
            fromAmino(object: _35.HostZoneAmino): _35.HostZone;
            toAmino(message: _35.HostZone): _35.HostZoneAmino;
            fromAminoMsg(object: _35.HostZoneAminoMsg): _35.HostZone;
            fromProtoMsg(message: _35.HostZoneProtoMsg): _35.HostZone;
            toProto(message: _35.HostZone): Uint8Array;
            toProtoMsg(message: _35.HostZone): _35.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _34.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _34.AddValidatorsProposal;
            fromPartial(object: Partial<_34.AddValidatorsProposal>): _34.AddValidatorsProposal;
            fromAmino(object: _34.AddValidatorsProposalAmino): _34.AddValidatorsProposal;
            toAmino(message: _34.AddValidatorsProposal): _34.AddValidatorsProposalAmino;
            fromAminoMsg(object: _34.AddValidatorsProposalAminoMsg): _34.AddValidatorsProposal;
            fromProtoMsg(message: _34.AddValidatorsProposalProtoMsg): _34.AddValidatorsProposal;
            toProto(message: _34.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _34.AddValidatorsProposal): _34.AddValidatorsProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _33.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _33.GenesisState;
            fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
            fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
            toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
            fromAminoMsg(object: _33.GenesisStateAminoMsg): _33.GenesisState;
            fromProtoMsg(message: _33.GenesisStateProtoMsg): _33.GenesisState;
            toProto(message: _33.GenesisState): Uint8Array;
            toProtoMsg(message: _33.GenesisState): _33.GenesisStateProtoMsg;
        };
        EpochTracker: {
            typeUrl: string;
            encode(message: _32.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _32.EpochTracker;
            fromPartial(object: Partial<_32.EpochTracker>): _32.EpochTracker;
            fromAmino(object: _32.EpochTrackerAmino): _32.EpochTracker;
            toAmino(message: _32.EpochTracker): _32.EpochTrackerAmino;
            fromAminoMsg(object: _32.EpochTrackerAminoMsg): _32.EpochTracker;
            fromProtoMsg(message: _32.EpochTrackerProtoMsg): _32.EpochTracker;
            toProto(message: _32.EpochTracker): Uint8Array;
            toProtoMsg(message: _32.EpochTracker): _32.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _31.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.SplitDelegation;
            fromPartial(object: Partial<_31.SplitDelegation>): _31.SplitDelegation;
            fromAmino(object: _31.SplitDelegationAmino): _31.SplitDelegation;
            toAmino(message: _31.SplitDelegation): _31.SplitDelegationAmino;
            fromAminoMsg(object: _31.SplitDelegationAminoMsg): _31.SplitDelegation;
            fromProtoMsg(message: _31.SplitDelegationProtoMsg): _31.SplitDelegation;
            toProto(message: _31.SplitDelegation): Uint8Array;
            toProtoMsg(message: _31.SplitDelegation): _31.SplitDelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _31.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.DelegateCallback;
            fromPartial(object: Partial<_31.DelegateCallback>): _31.DelegateCallback;
            fromAmino(object: _31.DelegateCallbackAmino): _31.DelegateCallback;
            toAmino(message: _31.DelegateCallback): _31.DelegateCallbackAmino;
            fromAminoMsg(object: _31.DelegateCallbackAminoMsg): _31.DelegateCallback;
            fromProtoMsg(message: _31.DelegateCallbackProtoMsg): _31.DelegateCallback;
            toProto(message: _31.DelegateCallback): Uint8Array;
            toProtoMsg(message: _31.DelegateCallback): _31.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _31.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.ClaimCallback;
            fromPartial(object: Partial<_31.ClaimCallback>): _31.ClaimCallback;
            fromAmino(object: _31.ClaimCallbackAmino): _31.ClaimCallback;
            toAmino(message: _31.ClaimCallback): _31.ClaimCallbackAmino;
            fromAminoMsg(object: _31.ClaimCallbackAminoMsg): _31.ClaimCallback;
            fromProtoMsg(message: _31.ClaimCallbackProtoMsg): _31.ClaimCallback;
            toProto(message: _31.ClaimCallback): Uint8Array;
            toProtoMsg(message: _31.ClaimCallback): _31.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _31.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.ReinvestCallback;
            fromPartial(object: Partial<_31.ReinvestCallback>): _31.ReinvestCallback;
            fromAmino(object: _31.ReinvestCallbackAmino): _31.ReinvestCallback;
            toAmino(message: _31.ReinvestCallback): _31.ReinvestCallbackAmino;
            fromAminoMsg(object: _31.ReinvestCallbackAminoMsg): _31.ReinvestCallback;
            fromProtoMsg(message: _31.ReinvestCallbackProtoMsg): _31.ReinvestCallback;
            toProto(message: _31.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _31.ReinvestCallback): _31.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _31.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.UndelegateCallback;
            fromPartial(object: Partial<_31.UndelegateCallback>): _31.UndelegateCallback;
            fromAmino(object: _31.UndelegateCallbackAmino): _31.UndelegateCallback;
            toAmino(message: _31.UndelegateCallback): _31.UndelegateCallbackAmino;
            fromAminoMsg(object: _31.UndelegateCallbackAminoMsg): _31.UndelegateCallback;
            fromProtoMsg(message: _31.UndelegateCallbackProtoMsg): _31.UndelegateCallback;
            toProto(message: _31.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _31.UndelegateCallback): _31.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _31.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.RedemptionCallback;
            fromPartial(object: Partial<_31.RedemptionCallback>): _31.RedemptionCallback;
            fromAmino(object: _31.RedemptionCallbackAmino): _31.RedemptionCallback;
            toAmino(message: _31.RedemptionCallback): _31.RedemptionCallbackAmino;
            fromAminoMsg(object: _31.RedemptionCallbackAminoMsg): _31.RedemptionCallback;
            fromProtoMsg(message: _31.RedemptionCallbackProtoMsg): _31.RedemptionCallback;
            toProto(message: _31.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _31.RedemptionCallback): _31.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _31.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.Rebalancing;
            fromPartial(object: Partial<_31.Rebalancing>): _31.Rebalancing;
            fromAmino(object: _31.RebalancingAmino): _31.Rebalancing;
            toAmino(message: _31.Rebalancing): _31.RebalancingAmino;
            fromAminoMsg(object: _31.RebalancingAminoMsg): _31.Rebalancing;
            fromProtoMsg(message: _31.RebalancingProtoMsg): _31.Rebalancing;
            toProto(message: _31.Rebalancing): Uint8Array;
            toProtoMsg(message: _31.Rebalancing): _31.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _31.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _31.RebalanceCallback;
            fromPartial(object: Partial<_31.RebalanceCallback>): _31.RebalanceCallback;
            fromAmino(object: _31.RebalanceCallbackAmino): _31.RebalanceCallback;
            toAmino(message: _31.RebalanceCallback): _31.RebalanceCallbackAmino;
            fromAminoMsg(object: _31.RebalanceCallbackAminoMsg): _31.RebalanceCallback;
            fromProtoMsg(message: _31.RebalanceCallbackProtoMsg): _31.RebalanceCallback;
            toProto(message: _31.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _31.RebalanceCallback): _31.RebalanceCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _30.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _30.AddressUnbonding;
            fromPartial(object: Partial<_30.AddressUnbonding>): _30.AddressUnbonding;
            fromAmino(object: _30.AddressUnbondingAmino): _30.AddressUnbonding;
            toAmino(message: _30.AddressUnbonding): _30.AddressUnbondingAmino;
            fromAminoMsg(object: _30.AddressUnbondingAminoMsg): _30.AddressUnbonding;
            fromProtoMsg(message: _30.AddressUnbondingProtoMsg): _30.AddressUnbonding;
            toProto(message: _30.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _30.AddressUnbonding): _30.AddressUnbondingProtoMsg;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _43.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.BaseVestingAccount;
            fromPartial(object: Partial<_43.BaseVestingAccount>): _43.BaseVestingAccount;
            fromAmino(object: _43.BaseVestingAccountAmino): _43.BaseVestingAccount;
            toAmino(message: _43.BaseVestingAccount): _43.BaseVestingAccountAmino;
            fromAminoMsg(object: _43.BaseVestingAccountAminoMsg): _43.BaseVestingAccount;
            fromProtoMsg(message: _43.BaseVestingAccountProtoMsg): _43.BaseVestingAccount;
            toProto(message: _43.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _43.BaseVestingAccount): _43.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _43.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.Period;
            fromPartial(object: Partial<_43.Period>): _43.Period;
            fromAmino(object: _43.PeriodAmino): _43.Period;
            toAmino(message: _43.Period): _43.PeriodAmino;
            fromAminoMsg(object: _43.PeriodAminoMsg): _43.Period;
            fromProtoMsg(message: _43.PeriodProtoMsg): _43.Period;
            toProto(message: _43.Period): Uint8Array;
            toProtoMsg(message: _43.Period): _43.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _43.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _43.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_43.StridePeriodicVestingAccount>): _43.StridePeriodicVestingAccount;
            fromAmino(object: _43.StridePeriodicVestingAccountAmino): _43.StridePeriodicVestingAccount;
            toAmino(message: _43.StridePeriodicVestingAccount): _43.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _43.StridePeriodicVestingAccountAminoMsg): _43.StridePeriodicVestingAccount;
            fromProtoMsg(message: _43.StridePeriodicVestingAccountProtoMsg): _43.StridePeriodicVestingAccount;
            toProto(message: _43.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _43.StridePeriodicVestingAccount): _43.StridePeriodicVestingAccountProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            stride: {
                claim: _211.MsgClientImpl;
                interchainquery: {
                    v1: _212.MsgClientImpl;
                };
                stakeibc: _213.MsgClientImpl;
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
                autopilot: _195.LCDQueryClient;
                claim: _196.LCDQueryClient;
                epochs: _197.LCDQueryClient;
                icacallbacks: _198.LCDQueryClient;
                mint: {
                    v1beta1: _199.LCDQueryClient;
                };
                ratelimit: _200.LCDQueryClient;
                records: _201.LCDQueryClient;
                stakeibc: _202.LCDQueryClient;
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
