import * as _0 from "./incentives/v1beta1/genesis";
import * as _1 from "./incentives/v1beta1/query";
import * as _2 from "./incentives/v1beta1/store";
import * as _3 from "./incentives/v1beta1/tx";
import * as _4 from "./safety/v1beta1/genesis";
import * as _5 from "./safety/v1beta1/query";
import * as _6 from "./safety/v1beta1/tx";
import * as _133 from "./incentives/v1beta1/query.lcd";
import * as _134 from "./safety/v1beta1/query.lcd";
import * as _135 from "./incentives/v1beta1/query.rpc.Query";
import * as _136 from "./safety/v1beta1/query.rpc.Query";
import * as _137 from "./incentives/v1beta1/tx.rpc.msg";
import * as _138 from "./safety/v1beta1/tx.rpc.msg";
export declare namespace mars {
    namespace incentives {
        const v1beta1: {
            MsgClientImpl: typeof _137.MsgClientImpl;
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                schedule(request: _1.QueryScheduleRequest): Promise<_1.QueryScheduleResponse>;
                schedules(request?: _1.QuerySchedulesRequest): Promise<_1.QuerySchedulesResponse>;
            };
            LCDQueryClient: typeof _133.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createSchedule(value: _3.MsgCreateSchedule): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    terminateSchedules(value: _3.MsgTerminateSchedules): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createSchedule(value: _3.MsgCreateSchedule): {
                        typeUrl: string;
                        value: _3.MsgCreateSchedule;
                    };
                    terminateSchedules(value: _3.MsgTerminateSchedules): {
                        typeUrl: string;
                        value: _3.MsgTerminateSchedules;
                    };
                };
                fromJSON: {
                    createSchedule(value: any): {
                        typeUrl: string;
                        value: _3.MsgCreateSchedule;
                    };
                    terminateSchedules(value: any): {
                        typeUrl: string;
                        value: _3.MsgTerminateSchedules;
                    };
                };
                fromPartial: {
                    createSchedule(value: _3.MsgCreateSchedule): {
                        typeUrl: string;
                        value: _3.MsgCreateSchedule;
                    };
                    terminateSchedules(value: _3.MsgTerminateSchedules): {
                        typeUrl: string;
                        value: _3.MsgTerminateSchedules;
                    };
                };
            };
            AminoConverter: {
                "/mars.incentives.v1beta1.MsgCreateSchedule": {
                    aminoType: string;
                    toAmino: (message: _3.MsgCreateSchedule) => _3.MsgCreateScheduleAmino;
                    fromAmino: (object: _3.MsgCreateScheduleAmino) => _3.MsgCreateSchedule;
                };
                "/mars.incentives.v1beta1.MsgTerminateSchedules": {
                    aminoType: string;
                    toAmino: (message: _3.MsgTerminateSchedules) => _3.MsgTerminateSchedulesAmino;
                    fromAmino: (object: _3.MsgTerminateSchedulesAmino) => _3.MsgTerminateSchedules;
                };
            };
            MsgCreateSchedule: {
                typeUrl: string;
                encode(message: _3.MsgCreateSchedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgCreateSchedule;
                fromPartial(object: Partial<_3.MsgCreateSchedule>): _3.MsgCreateSchedule;
                fromAmino(object: _3.MsgCreateScheduleAmino): _3.MsgCreateSchedule;
                toAmino(message: _3.MsgCreateSchedule): _3.MsgCreateScheduleAmino;
                fromAminoMsg(object: _3.MsgCreateScheduleAminoMsg): _3.MsgCreateSchedule;
                fromProtoMsg(message: _3.MsgCreateScheduleProtoMsg): _3.MsgCreateSchedule;
                toProto(message: _3.MsgCreateSchedule): Uint8Array;
                toProtoMsg(message: _3.MsgCreateSchedule): _3.MsgCreateScheduleProtoMsg;
            };
            MsgCreateScheduleResponse: {
                typeUrl: string;
                encode(_: _3.MsgCreateScheduleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgCreateScheduleResponse;
                fromPartial(_: Partial<_3.MsgCreateScheduleResponse>): _3.MsgCreateScheduleResponse;
                fromAmino(_: _3.MsgCreateScheduleResponseAmino): _3.MsgCreateScheduleResponse;
                toAmino(_: _3.MsgCreateScheduleResponse): _3.MsgCreateScheduleResponseAmino;
                fromAminoMsg(object: _3.MsgCreateScheduleResponseAminoMsg): _3.MsgCreateScheduleResponse;
                fromProtoMsg(message: _3.MsgCreateScheduleResponseProtoMsg): _3.MsgCreateScheduleResponse;
                toProto(message: _3.MsgCreateScheduleResponse): Uint8Array;
                toProtoMsg(message: _3.MsgCreateScheduleResponse): _3.MsgCreateScheduleResponseProtoMsg;
            };
            MsgTerminateSchedules: {
                typeUrl: string;
                encode(message: _3.MsgTerminateSchedules, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgTerminateSchedules;
                fromPartial(object: Partial<_3.MsgTerminateSchedules>): _3.MsgTerminateSchedules;
                fromAmino(object: _3.MsgTerminateSchedulesAmino): _3.MsgTerminateSchedules;
                toAmino(message: _3.MsgTerminateSchedules): _3.MsgTerminateSchedulesAmino;
                fromAminoMsg(object: _3.MsgTerminateSchedulesAminoMsg): _3.MsgTerminateSchedules;
                fromProtoMsg(message: _3.MsgTerminateSchedulesProtoMsg): _3.MsgTerminateSchedules;
                toProto(message: _3.MsgTerminateSchedules): Uint8Array;
                toProtoMsg(message: _3.MsgTerminateSchedules): _3.MsgTerminateSchedulesProtoMsg;
            };
            MsgTerminateSchedulesResponse: {
                typeUrl: string;
                encode(message: _3.MsgTerminateSchedulesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgTerminateSchedulesResponse;
                fromPartial(object: Partial<_3.MsgTerminateSchedulesResponse>): _3.MsgTerminateSchedulesResponse;
                fromAmino(object: _3.MsgTerminateSchedulesResponseAmino): _3.MsgTerminateSchedulesResponse;
                toAmino(message: _3.MsgTerminateSchedulesResponse): _3.MsgTerminateSchedulesResponseAmino;
                fromAminoMsg(object: _3.MsgTerminateSchedulesResponseAminoMsg): _3.MsgTerminateSchedulesResponse;
                fromProtoMsg(message: _3.MsgTerminateSchedulesResponseProtoMsg): _3.MsgTerminateSchedulesResponse;
                toProto(message: _3.MsgTerminateSchedulesResponse): Uint8Array;
                toProtoMsg(message: _3.MsgTerminateSchedulesResponse): _3.MsgTerminateSchedulesResponseProtoMsg;
            };
            Schedule: {
                typeUrl: string;
                encode(message: _2.Schedule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Schedule;
                fromPartial(object: Partial<_2.Schedule>): _2.Schedule;
                fromAmino(object: _2.ScheduleAmino): _2.Schedule;
                toAmino(message: _2.Schedule): _2.ScheduleAmino;
                fromAminoMsg(object: _2.ScheduleAminoMsg): _2.Schedule;
                fromProtoMsg(message: _2.ScheduleProtoMsg): _2.Schedule;
                toProto(message: _2.Schedule): Uint8Array;
                toProtoMsg(message: _2.Schedule): _2.ScheduleProtoMsg;
            };
            QueryScheduleRequest: {
                typeUrl: string;
                encode(message: _1.QueryScheduleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryScheduleRequest;
                fromPartial(object: Partial<_1.QueryScheduleRequest>): _1.QueryScheduleRequest;
                fromAmino(object: _1.QueryScheduleRequestAmino): _1.QueryScheduleRequest;
                toAmino(message: _1.QueryScheduleRequest): _1.QueryScheduleRequestAmino;
                fromAminoMsg(object: _1.QueryScheduleRequestAminoMsg): _1.QueryScheduleRequest;
                fromProtoMsg(message: _1.QueryScheduleRequestProtoMsg): _1.QueryScheduleRequest;
                toProto(message: _1.QueryScheduleRequest): Uint8Array;
                toProtoMsg(message: _1.QueryScheduleRequest): _1.QueryScheduleRequestProtoMsg;
            };
            QueryScheduleResponse: {
                typeUrl: string;
                encode(message: _1.QueryScheduleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QueryScheduleResponse;
                fromPartial(object: Partial<_1.QueryScheduleResponse>): _1.QueryScheduleResponse;
                fromAmino(object: _1.QueryScheduleResponseAmino): _1.QueryScheduleResponse;
                toAmino(message: _1.QueryScheduleResponse): _1.QueryScheduleResponseAmino;
                fromAminoMsg(object: _1.QueryScheduleResponseAminoMsg): _1.QueryScheduleResponse;
                fromProtoMsg(message: _1.QueryScheduleResponseProtoMsg): _1.QueryScheduleResponse;
                toProto(message: _1.QueryScheduleResponse): Uint8Array;
                toProtoMsg(message: _1.QueryScheduleResponse): _1.QueryScheduleResponseProtoMsg;
            };
            QuerySchedulesRequest: {
                typeUrl: string;
                encode(message: _1.QuerySchedulesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QuerySchedulesRequest;
                fromPartial(object: Partial<_1.QuerySchedulesRequest>): _1.QuerySchedulesRequest;
                fromAmino(object: _1.QuerySchedulesRequestAmino): _1.QuerySchedulesRequest;
                toAmino(message: _1.QuerySchedulesRequest): _1.QuerySchedulesRequestAmino;
                fromAminoMsg(object: _1.QuerySchedulesRequestAminoMsg): _1.QuerySchedulesRequest;
                fromProtoMsg(message: _1.QuerySchedulesRequestProtoMsg): _1.QuerySchedulesRequest;
                toProto(message: _1.QuerySchedulesRequest): Uint8Array;
                toProtoMsg(message: _1.QuerySchedulesRequest): _1.QuerySchedulesRequestProtoMsg;
            };
            QuerySchedulesResponse: {
                typeUrl: string;
                encode(message: _1.QuerySchedulesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.QuerySchedulesResponse;
                fromPartial(object: Partial<_1.QuerySchedulesResponse>): _1.QuerySchedulesResponse;
                fromAmino(object: _1.QuerySchedulesResponseAmino): _1.QuerySchedulesResponse;
                toAmino(message: _1.QuerySchedulesResponse): _1.QuerySchedulesResponseAmino;
                fromAminoMsg(object: _1.QuerySchedulesResponseAminoMsg): _1.QuerySchedulesResponse;
                fromProtoMsg(message: _1.QuerySchedulesResponseProtoMsg): _1.QuerySchedulesResponse;
                toProto(message: _1.QuerySchedulesResponse): Uint8Array;
                toProtoMsg(message: _1.QuerySchedulesResponse): _1.QuerySchedulesResponseProtoMsg;
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
    }
    namespace safety {
        const v1beta1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balances(request?: _5.QueryBalancesRequest): Promise<_5.QueryBalancesResponse>;
            };
            LCDQueryClient: typeof _134.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    safetyFundSpend(value: _6.MsgSafetyFundSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    safetyFundSpend(value: _6.MsgSafetyFundSpend): {
                        typeUrl: string;
                        value: _6.MsgSafetyFundSpend;
                    };
                };
                fromJSON: {
                    safetyFundSpend(value: any): {
                        typeUrl: string;
                        value: _6.MsgSafetyFundSpend;
                    };
                };
                fromPartial: {
                    safetyFundSpend(value: _6.MsgSafetyFundSpend): {
                        typeUrl: string;
                        value: _6.MsgSafetyFundSpend;
                    };
                };
            };
            AminoConverter: {
                "/mars.safety.v1beta1.MsgSafetyFundSpend": {
                    aminoType: string;
                    toAmino: (message: _6.MsgSafetyFundSpend) => _6.MsgSafetyFundSpendAmino;
                    fromAmino: (object: _6.MsgSafetyFundSpendAmino) => _6.MsgSafetyFundSpend;
                };
            };
            MsgSafetyFundSpend: {
                typeUrl: string;
                encode(message: _6.MsgSafetyFundSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.MsgSafetyFundSpend;
                fromPartial(object: Partial<_6.MsgSafetyFundSpend>): _6.MsgSafetyFundSpend;
                fromAmino(object: _6.MsgSafetyFundSpendAmino): _6.MsgSafetyFundSpend;
                toAmino(message: _6.MsgSafetyFundSpend): _6.MsgSafetyFundSpendAmino;
                fromAminoMsg(object: _6.MsgSafetyFundSpendAminoMsg): _6.MsgSafetyFundSpend;
                fromProtoMsg(message: _6.MsgSafetyFundSpendProtoMsg): _6.MsgSafetyFundSpend;
                toProto(message: _6.MsgSafetyFundSpend): Uint8Array;
                toProtoMsg(message: _6.MsgSafetyFundSpend): _6.MsgSafetyFundSpendProtoMsg;
            };
            MsgSafetyFundSpendResponse: {
                typeUrl: string;
                encode(_: _6.MsgSafetyFundSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _6.MsgSafetyFundSpendResponse;
                fromPartial(_: Partial<_6.MsgSafetyFundSpendResponse>): _6.MsgSafetyFundSpendResponse;
                fromAmino(_: _6.MsgSafetyFundSpendResponseAmino): _6.MsgSafetyFundSpendResponse;
                toAmino(_: _6.MsgSafetyFundSpendResponse): _6.MsgSafetyFundSpendResponseAmino;
                fromAminoMsg(object: _6.MsgSafetyFundSpendResponseAminoMsg): _6.MsgSafetyFundSpendResponse;
                fromProtoMsg(message: _6.MsgSafetyFundSpendResponseProtoMsg): _6.MsgSafetyFundSpendResponse;
                toProto(message: _6.MsgSafetyFundSpendResponse): Uint8Array;
                toProtoMsg(message: _6.MsgSafetyFundSpendResponse): _6.MsgSafetyFundSpendResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(_: _5.QueryBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _5.QueryBalancesRequest;
                fromPartial(_: Partial<_5.QueryBalancesRequest>): _5.QueryBalancesRequest;
                fromAmino(_: _5.QueryBalancesRequestAmino): _5.QueryBalancesRequest;
                toAmino(_: _5.QueryBalancesRequest): _5.QueryBalancesRequestAmino;
                fromAminoMsg(object: _5.QueryBalancesRequestAminoMsg): _5.QueryBalancesRequest;
                fromProtoMsg(message: _5.QueryBalancesRequestProtoMsg): _5.QueryBalancesRequest;
                toProto(message: _5.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _5.QueryBalancesRequest): _5.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _5.QueryBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.QueryBalancesResponse;
                fromPartial(object: Partial<_5.QueryBalancesResponse>): _5.QueryBalancesResponse;
                fromAmino(object: _5.QueryBalancesResponseAmino): _5.QueryBalancesResponse;
                toAmino(message: _5.QueryBalancesResponse): _5.QueryBalancesResponseAmino;
                fromAminoMsg(object: _5.QueryBalancesResponseAminoMsg): _5.QueryBalancesResponse;
                fromProtoMsg(message: _5.QueryBalancesResponseProtoMsg): _5.QueryBalancesResponse;
                toProto(message: _5.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _5.QueryBalancesResponse): _5.QueryBalancesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(_: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.GenesisState;
                fromPartial(_: Partial<_4.GenesisState>): _4.GenesisState;
                fromAmino(_: _4.GenesisStateAmino): _4.GenesisState;
                toAmino(_: _4.GenesisState): _4.GenesisStateAmino;
                fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                toProto(message: _4.GenesisState): Uint8Array;
                toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            mars: {
                incentives: {
                    v1beta1: _137.MsgClientImpl;
                };
                safety: {
                    v1beta1: _138.MsgClientImpl;
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
            mars: {
                incentives: {
                    v1beta1: {
                        schedule(request: _1.QueryScheduleRequest): Promise<_1.QueryScheduleResponse>;
                        schedules(request?: _1.QuerySchedulesRequest): Promise<_1.QuerySchedulesResponse>;
                    };
                };
                safety: {
                    v1beta1: {
                        balances(request?: _5.QueryBalancesRequest): Promise<_5.QueryBalancesResponse>;
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
            mars: {
                incentives: {
                    v1beta1: _133.LCDQueryClient;
                };
                safety: {
                    v1beta1: _134.LCDQueryClient;
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
