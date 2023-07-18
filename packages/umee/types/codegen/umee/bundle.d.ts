import * as _0 from "./incentive/v1/genesis";
import * as _1 from "./incentive/v1/incentive";
import * as _2 from "./incentive/v1/query";
import * as _3 from "./incentive/v1/tx";
import * as _4 from "./leverage/v1/events";
import * as _5 from "./leverage/v1/genesis";
import * as _6 from "./leverage/v1/leverage";
import * as _7 from "./leverage/v1/query";
import * as _8 from "./leverage/v1/tx";
import * as _9 from "./oracle/v1/events";
import * as _10 from "./oracle/v1/genesis";
import * as _11 from "./oracle/v1/oracle";
import * as _12 from "./oracle/v1/query";
import * as _13 from "./oracle/v1/tx";
import * as _14 from "./ugov/v1/events";
import * as _15 from "./ugov/v1/genesis";
import * as _16 from "./ugov/v1/query";
import * as _17 from "./ugov/v1/tx";
import * as _18 from "./uibc/v1/events";
import * as _19 from "./uibc/v1/genesis";
import * as _20 from "./uibc/v1/query";
import * as _21 from "./uibc/v1/quota";
import * as _22 from "./uibc/v1/tx";
import * as _147 from "./incentive/v1/query.lcd";
import * as _148 from "./leverage/v1/query.lcd";
import * as _149 from "./oracle/v1/query.lcd";
import * as _150 from "./ugov/v1/query.lcd";
import * as _151 from "./uibc/v1/query.lcd";
import * as _152 from "./incentive/v1/query.rpc.Query";
import * as _153 from "./leverage/v1/query.rpc.Query";
import * as _154 from "./oracle/v1/query.rpc.Query";
import * as _155 from "./ugov/v1/query.rpc.Query";
import * as _156 from "./uibc/v1/query.rpc.Query";
import * as _157 from "./incentive/v1/tx.rpc.msg";
import * as _158 from "./leverage/v1/tx.rpc.msg";
import * as _159 from "./oracle/v1/tx.rpc.msg";
import * as _160 from "./ugov/v1/tx.rpc.msg";
import * as _161 from "./uibc/v1/tx.rpc.msg";
export declare namespace umee {
    namespace incentive {
        const v1: {
            MsgClientImpl: typeof _157.MsgClientImpl;
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _2.QueryParams): Promise<_2.QueryParamsResponse>;
                totalBonded(request: _2.QueryTotalBonded): Promise<_2.QueryTotalBondedResponse>;
                totalUnbonding(request: _2.QueryTotalUnbonding): Promise<_2.QueryTotalUnbondingResponse>;
                accountBonds(request: _2.QueryAccountBonds): Promise<_2.QueryAccountBondsResponse>;
                pendingRewards(request: _2.QueryPendingRewards): Promise<_2.QueryPendingRewardsResponse>;
                completedIncentivePrograms(request?: _2.QueryCompletedIncentivePrograms): Promise<_2.QueryCompletedIncentiveProgramsResponse>;
                ongoingIncentivePrograms(request?: _2.QueryOngoingIncentivePrograms): Promise<_2.QueryOngoingIncentiveProgramsResponse>;
                upcomingIncentivePrograms(request?: _2.QueryUpcomingIncentivePrograms): Promise<_2.QueryUpcomingIncentiveProgramsResponse>;
                incentiveProgram(request: _2.QueryIncentiveProgram): Promise<_2.QueryIncentiveProgramResponse>;
                currentRates(request: _2.QueryCurrentRates): Promise<_2.QueryCurrentRatesResponse>;
                actualRates(request: _2.QueryActualRates): Promise<_2.QueryActualRatesResponse>;
                lastRewardTime(request?: _2.QueryLastRewardTime): Promise<_2.QueryLastRewardTimeResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _3.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bond(value: _3.MsgBond): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginUnbonding(value: _3.MsgBeginUnbonding): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    emergencyUnbond(value: _3.MsgEmergencyUnbond): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sponsor(value: _3.MsgSponsor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govSetParams(value: _3.MsgGovSetParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govCreatePrograms(value: _3.MsgGovCreatePrograms): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _3.MsgClaim): {
                        typeUrl: string;
                        value: _3.MsgClaim;
                    };
                    bond(value: _3.MsgBond): {
                        typeUrl: string;
                        value: _3.MsgBond;
                    };
                    beginUnbonding(value: _3.MsgBeginUnbonding): {
                        typeUrl: string;
                        value: _3.MsgBeginUnbonding;
                    };
                    emergencyUnbond(value: _3.MsgEmergencyUnbond): {
                        typeUrl: string;
                        value: _3.MsgEmergencyUnbond;
                    };
                    sponsor(value: _3.MsgSponsor): {
                        typeUrl: string;
                        value: _3.MsgSponsor;
                    };
                    govSetParams(value: _3.MsgGovSetParams): {
                        typeUrl: string;
                        value: _3.MsgGovSetParams;
                    };
                    govCreatePrograms(value: _3.MsgGovCreatePrograms): {
                        typeUrl: string;
                        value: _3.MsgGovCreatePrograms;
                    };
                };
                fromJSON: {
                    claim(value: any): {
                        typeUrl: string;
                        value: _3.MsgClaim;
                    };
                    bond(value: any): {
                        typeUrl: string;
                        value: _3.MsgBond;
                    };
                    beginUnbonding(value: any): {
                        typeUrl: string;
                        value: _3.MsgBeginUnbonding;
                    };
                    emergencyUnbond(value: any): {
                        typeUrl: string;
                        value: _3.MsgEmergencyUnbond;
                    };
                    sponsor(value: any): {
                        typeUrl: string;
                        value: _3.MsgSponsor;
                    };
                    govSetParams(value: any): {
                        typeUrl: string;
                        value: _3.MsgGovSetParams;
                    };
                    govCreatePrograms(value: any): {
                        typeUrl: string;
                        value: _3.MsgGovCreatePrograms;
                    };
                };
                fromPartial: {
                    claim(value: _3.MsgClaim): {
                        typeUrl: string;
                        value: _3.MsgClaim;
                    };
                    bond(value: _3.MsgBond): {
                        typeUrl: string;
                        value: _3.MsgBond;
                    };
                    beginUnbonding(value: _3.MsgBeginUnbonding): {
                        typeUrl: string;
                        value: _3.MsgBeginUnbonding;
                    };
                    emergencyUnbond(value: _3.MsgEmergencyUnbond): {
                        typeUrl: string;
                        value: _3.MsgEmergencyUnbond;
                    };
                    sponsor(value: _3.MsgSponsor): {
                        typeUrl: string;
                        value: _3.MsgSponsor;
                    };
                    govSetParams(value: _3.MsgGovSetParams): {
                        typeUrl: string;
                        value: _3.MsgGovSetParams;
                    };
                    govCreatePrograms(value: _3.MsgGovCreatePrograms): {
                        typeUrl: string;
                        value: _3.MsgGovCreatePrograms;
                    };
                };
            };
            AminoConverter: {
                "/umee.incentive.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: ({ account }: _3.MsgClaim) => {
                        account: string;
                    };
                    fromAmino: ({ account }: {
                        account: string;
                    }) => _3.MsgClaim;
                };
                "/umee.incentive.v1.MsgBond": {
                    aminoType: string;
                    toAmino: ({ account, uToken }: _3.MsgBond) => {
                        account: string;
                        uToken: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ account, uToken }: {
                        account: string;
                        uToken: {
                            denom: string;
                            amount: string;
                        };
                    }) => _3.MsgBond;
                };
                "/umee.incentive.v1.MsgBeginUnbonding": {
                    aminoType: string;
                    toAmino: ({ account, uToken }: _3.MsgBeginUnbonding) => {
                        account: string;
                        uToken: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ account, uToken }: {
                        account: string;
                        uToken: {
                            denom: string;
                            amount: string;
                        };
                    }) => _3.MsgBeginUnbonding;
                };
                "/umee.incentive.v1.MsgEmergencyUnbond": {
                    aminoType: string;
                    toAmino: ({ account, uToken }: _3.MsgEmergencyUnbond) => {
                        account: string;
                        uToken: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ account, uToken }: {
                        account: string;
                        uToken: {
                            denom: string;
                            amount: string;
                        };
                    }) => _3.MsgEmergencyUnbond;
                };
                "/umee.incentive.v1.MsgSponsor": {
                    aminoType: string;
                    toAmino: ({ sponsor, program }: _3.MsgSponsor) => {
                        sponsor: string;
                        program: number;
                    };
                    fromAmino: ({ sponsor, program }: {
                        sponsor: string;
                        program: number;
                    }) => _3.MsgSponsor;
                };
                "/umee.incentive.v1.MsgGovSetParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _3.MsgGovSetParams) => {
                        authority: string;
                        params: {
                            max_unbondings: number;
                            unbonding_duration: string;
                            emergency_unbond_fee: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            max_unbondings: number;
                            unbonding_duration: string;
                            emergency_unbond_fee: string;
                        };
                    }) => _3.MsgGovSetParams;
                };
                "/umee.incentive.v1.MsgGovCreatePrograms": {
                    aminoType: string;
                    toAmino: ({ authority, programs, fromCommunityFund }: _3.MsgGovCreatePrograms) => {
                        authority: string;
                        programs: {
                            ID: number;
                            start_time: string;
                            duration: string;
                            uToken: string;
                            funded: boolean;
                            total_rewards: {
                                denom: string;
                                amount: string;
                            };
                            remaining_rewards: {
                                denom: string;
                                amount: string;
                            };
                        }[];
                        from_community_fund: boolean;
                    };
                    fromAmino: ({ authority, programs, from_community_fund }: {
                        authority: string;
                        programs: {
                            ID: number;
                            start_time: string;
                            duration: string;
                            uToken: string;
                            funded: boolean;
                            total_rewards: {
                                denom: string;
                                amount: string;
                            };
                            remaining_rewards: {
                                denom: string;
                                amount: string;
                            };
                        }[];
                        from_community_fund: boolean;
                    }) => _3.MsgGovCreatePrograms;
                };
            };
            MsgClaim: {
                encode(message: _3.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgClaim;
                fromPartial(object: Partial<_3.MsgClaim>): _3.MsgClaim;
            };
            MsgClaimResponse: {
                encode(message: _3.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgClaimResponse;
                fromPartial(object: Partial<_3.MsgClaimResponse>): _3.MsgClaimResponse;
            };
            MsgBond: {
                encode(message: _3.MsgBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgBond;
                fromPartial(object: Partial<_3.MsgBond>): _3.MsgBond;
            };
            MsgBondResponse: {
                encode(_: _3.MsgBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgBondResponse;
                fromPartial(_: Partial<_3.MsgBondResponse>): _3.MsgBondResponse;
            };
            MsgBeginUnbonding: {
                encode(message: _3.MsgBeginUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgBeginUnbonding;
                fromPartial(object: Partial<_3.MsgBeginUnbonding>): _3.MsgBeginUnbonding;
            };
            MsgBeginUnbondingResponse: {
                encode(_: _3.MsgBeginUnbondingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgBeginUnbondingResponse;
                fromPartial(_: Partial<_3.MsgBeginUnbondingResponse>): _3.MsgBeginUnbondingResponse;
            };
            MsgEmergencyUnbond: {
                encode(message: _3.MsgEmergencyUnbond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgEmergencyUnbond;
                fromPartial(object: Partial<_3.MsgEmergencyUnbond>): _3.MsgEmergencyUnbond;
            };
            MsgEmergencyUnbondResponse: {
                encode(_: _3.MsgEmergencyUnbondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgEmergencyUnbondResponse;
                fromPartial(_: Partial<_3.MsgEmergencyUnbondResponse>): _3.MsgEmergencyUnbondResponse;
            };
            MsgSponsor: {
                encode(message: _3.MsgSponsor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgSponsor;
                fromPartial(object: Partial<_3.MsgSponsor>): _3.MsgSponsor;
            };
            MsgSponsorResponse: {
                encode(_: _3.MsgSponsorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgSponsorResponse;
                fromPartial(_: Partial<_3.MsgSponsorResponse>): _3.MsgSponsorResponse;
            };
            MsgGovSetParams: {
                encode(message: _3.MsgGovSetParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgGovSetParams;
                fromPartial(object: Partial<_3.MsgGovSetParams>): _3.MsgGovSetParams;
            };
            MsgGovSetParamsResponse: {
                encode(_: _3.MsgGovSetParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgGovSetParamsResponse;
                fromPartial(_: Partial<_3.MsgGovSetParamsResponse>): _3.MsgGovSetParamsResponse;
            };
            MsgGovCreatePrograms: {
                encode(message: _3.MsgGovCreatePrograms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.MsgGovCreatePrograms;
                fromPartial(object: Partial<_3.MsgGovCreatePrograms>): _3.MsgGovCreatePrograms;
            };
            MsgGovCreateProgramsResponse: {
                encode(_: _3.MsgGovCreateProgramsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.MsgGovCreateProgramsResponse;
                fromPartial(_: Partial<_3.MsgGovCreateProgramsResponse>): _3.MsgGovCreateProgramsResponse;
            };
            QueryParams: {
                encode(_: _2.QueryParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryParams;
                fromPartial(_: Partial<_2.QueryParams>): _2.QueryParams;
            };
            QueryParamsResponse: {
                encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
            };
            QueryPendingRewards: {
                encode(message: _2.QueryPendingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryPendingRewards;
                fromPartial(object: Partial<_2.QueryPendingRewards>): _2.QueryPendingRewards;
            };
            QueryPendingRewardsResponse: {
                encode(message: _2.QueryPendingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryPendingRewardsResponse;
                fromPartial(object: Partial<_2.QueryPendingRewardsResponse>): _2.QueryPendingRewardsResponse;
            };
            QueryAccountBonds: {
                encode(message: _2.QueryAccountBonds, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryAccountBonds;
                fromPartial(object: Partial<_2.QueryAccountBonds>): _2.QueryAccountBonds;
            };
            QueryAccountBondsResponse: {
                encode(message: _2.QueryAccountBondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryAccountBondsResponse;
                fromPartial(object: Partial<_2.QueryAccountBondsResponse>): _2.QueryAccountBondsResponse;
            };
            QueryTotalBonded: {
                encode(message: _2.QueryTotalBonded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryTotalBonded;
                fromPartial(object: Partial<_2.QueryTotalBonded>): _2.QueryTotalBonded;
            };
            QueryTotalBondedResponse: {
                encode(message: _2.QueryTotalBondedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryTotalBondedResponse;
                fromPartial(object: Partial<_2.QueryTotalBondedResponse>): _2.QueryTotalBondedResponse;
            };
            QueryTotalUnbonding: {
                encode(message: _2.QueryTotalUnbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryTotalUnbonding;
                fromPartial(object: Partial<_2.QueryTotalUnbonding>): _2.QueryTotalUnbonding;
            };
            QueryTotalUnbondingResponse: {
                encode(message: _2.QueryTotalUnbondingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryTotalUnbondingResponse;
                fromPartial(object: Partial<_2.QueryTotalUnbondingResponse>): _2.QueryTotalUnbondingResponse;
            };
            QueryUpcomingIncentivePrograms: {
                encode(_: _2.QueryUpcomingIncentivePrograms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryUpcomingIncentivePrograms;
                fromPartial(_: Partial<_2.QueryUpcomingIncentivePrograms>): _2.QueryUpcomingIncentivePrograms;
            };
            QueryUpcomingIncentiveProgramsResponse: {
                encode(message: _2.QueryUpcomingIncentiveProgramsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryUpcomingIncentiveProgramsResponse;
                fromPartial(object: Partial<_2.QueryUpcomingIncentiveProgramsResponse>): _2.QueryUpcomingIncentiveProgramsResponse;
            };
            QueryOngoingIncentivePrograms: {
                encode(_: _2.QueryOngoingIncentivePrograms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryOngoingIncentivePrograms;
                fromPartial(_: Partial<_2.QueryOngoingIncentivePrograms>): _2.QueryOngoingIncentivePrograms;
            };
            QueryOngoingIncentiveProgramsResponse: {
                encode(message: _2.QueryOngoingIncentiveProgramsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryOngoingIncentiveProgramsResponse;
                fromPartial(object: Partial<_2.QueryOngoingIncentiveProgramsResponse>): _2.QueryOngoingIncentiveProgramsResponse;
            };
            QueryCompletedIncentivePrograms: {
                encode(_: _2.QueryCompletedIncentivePrograms, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryCompletedIncentivePrograms;
                fromPartial(_: Partial<_2.QueryCompletedIncentivePrograms>): _2.QueryCompletedIncentivePrograms;
            };
            QueryCompletedIncentiveProgramsResponse: {
                encode(message: _2.QueryCompletedIncentiveProgramsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryCompletedIncentiveProgramsResponse;
                fromPartial(object: Partial<_2.QueryCompletedIncentiveProgramsResponse>): _2.QueryCompletedIncentiveProgramsResponse;
            };
            QueryIncentiveProgram: {
                encode(message: _2.QueryIncentiveProgram, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryIncentiveProgram;
                fromPartial(object: Partial<_2.QueryIncentiveProgram>): _2.QueryIncentiveProgram;
            };
            QueryIncentiveProgramResponse: {
                encode(message: _2.QueryIncentiveProgramResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryIncentiveProgramResponse;
                fromPartial(object: Partial<_2.QueryIncentiveProgramResponse>): _2.QueryIncentiveProgramResponse;
            };
            QueryCurrentRates: {
                encode(message: _2.QueryCurrentRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryCurrentRates;
                fromPartial(object: Partial<_2.QueryCurrentRates>): _2.QueryCurrentRates;
            };
            QueryCurrentRatesResponse: {
                encode(message: _2.QueryCurrentRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryCurrentRatesResponse;
                fromPartial(object: Partial<_2.QueryCurrentRatesResponse>): _2.QueryCurrentRatesResponse;
            };
            QueryLastRewardTime: {
                encode(_: _2.QueryLastRewardTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _2.QueryLastRewardTime;
                fromPartial(_: Partial<_2.QueryLastRewardTime>): _2.QueryLastRewardTime;
            };
            QueryLastRewardTimeResponse: {
                encode(message: _2.QueryLastRewardTimeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryLastRewardTimeResponse;
                fromPartial(object: Partial<_2.QueryLastRewardTimeResponse>): _2.QueryLastRewardTimeResponse;
            };
            QueryActualRates: {
                encode(message: _2.QueryActualRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryActualRates;
                fromPartial(object: Partial<_2.QueryActualRates>): _2.QueryActualRates;
            };
            QueryActualRatesResponse: {
                encode(message: _2.QueryActualRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.QueryActualRatesResponse;
                fromPartial(object: Partial<_2.QueryActualRatesResponse>): _2.QueryActualRatesResponse;
            };
            Params: {
                encode(message: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.Params;
                fromPartial(object: Partial<_1.Params>): _1.Params;
            };
            IncentiveProgram: {
                encode(message: _1.IncentiveProgram, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.IncentiveProgram;
                fromPartial(object: Partial<_1.IncentiveProgram>): _1.IncentiveProgram;
            };
            GenesisState: {
                encode(message: _0.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.GenesisState;
                fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
            };
            Bond: {
                encode(message: _0.Bond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Bond;
                fromPartial(object: Partial<_0.Bond>): _0.Bond;
            };
            RewardTracker: {
                encode(message: _0.RewardTracker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.RewardTracker;
                fromPartial(object: Partial<_0.RewardTracker>): _0.RewardTracker;
            };
            RewardAccumulator: {
                encode(message: _0.RewardAccumulator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.RewardAccumulator;
                fromPartial(object: Partial<_0.RewardAccumulator>): _0.RewardAccumulator;
            };
            Unbonding: {
                encode(message: _0.Unbonding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Unbonding;
                fromPartial(object: Partial<_0.Unbonding>): _0.Unbonding;
            };
            AccountUnbondings: {
                encode(message: _0.AccountUnbondings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.AccountUnbondings;
                fromPartial(object: Partial<_0.AccountUnbondings>): _0.AccountUnbondings;
            };
        };
    }
    namespace leverage {
        const v1: {
            MsgClientImpl: typeof _158.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _7.QueryParams): Promise<_7.QueryParamsResponse>;
                registeredTokens(request: _7.QueryRegisteredTokens): Promise<_7.QueryRegisteredTokensResponse>;
                marketSummary(request: _7.QueryMarketSummary): Promise<_7.QueryMarketSummaryResponse>;
                accountBalances(request: _7.QueryAccountBalances): Promise<_7.QueryAccountBalancesResponse>;
                accountSummary(request: _7.QueryAccountSummary): Promise<_7.QueryAccountSummaryResponse>;
                liquidationTargets(request?: _7.QueryLiquidationTargets): Promise<_7.QueryLiquidationTargetsResponse>;
                badDebts(request?: _7.QueryBadDebts): Promise<_7.QueryBadDebtsResponse>;
                maxWithdraw(request: _7.QueryMaxWithdraw): Promise<_7.QueryMaxWithdrawResponse>;
                maxBorrow(request: _7.QueryMaxBorrow): Promise<_7.QueryMaxBorrowResponse>;
                inspect(request: _7.QueryInspect): Promise<_7.QueryInspectResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    supply(value: _8.MsgSupply): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _8.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    maxWithdraw(value: _8.MsgMaxWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    collateralize(value: _8.MsgCollateralize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    decollateralize(value: _8.MsgDecollateralize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    borrow(value: _8.MsgBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    maxBorrow(value: _8.MsgMaxBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repay(value: _8.MsgRepay): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _8.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leveragedLiquidate(value: _8.MsgLeveragedLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    supplyCollateral(value: _8.MsgSupplyCollateral): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govUpdateRegistry(value: _8.MsgGovUpdateRegistry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    supply(value: _8.MsgSupply): {
                        typeUrl: string;
                        value: _8.MsgSupply;
                    };
                    withdraw(value: _8.MsgWithdraw): {
                        typeUrl: string;
                        value: _8.MsgWithdraw;
                    };
                    maxWithdraw(value: _8.MsgMaxWithdraw): {
                        typeUrl: string;
                        value: _8.MsgMaxWithdraw;
                    };
                    collateralize(value: _8.MsgCollateralize): {
                        typeUrl: string;
                        value: _8.MsgCollateralize;
                    };
                    decollateralize(value: _8.MsgDecollateralize): {
                        typeUrl: string;
                        value: _8.MsgDecollateralize;
                    };
                    borrow(value: _8.MsgBorrow): {
                        typeUrl: string;
                        value: _8.MsgBorrow;
                    };
                    maxBorrow(value: _8.MsgMaxBorrow): {
                        typeUrl: string;
                        value: _8.MsgMaxBorrow;
                    };
                    repay(value: _8.MsgRepay): {
                        typeUrl: string;
                        value: _8.MsgRepay;
                    };
                    liquidate(value: _8.MsgLiquidate): {
                        typeUrl: string;
                        value: _8.MsgLiquidate;
                    };
                    leveragedLiquidate(value: _8.MsgLeveragedLiquidate): {
                        typeUrl: string;
                        value: _8.MsgLeveragedLiquidate;
                    };
                    supplyCollateral(value: _8.MsgSupplyCollateral): {
                        typeUrl: string;
                        value: _8.MsgSupplyCollateral;
                    };
                    govUpdateRegistry(value: _8.MsgGovUpdateRegistry): {
                        typeUrl: string;
                        value: _8.MsgGovUpdateRegistry;
                    };
                };
                fromJSON: {
                    supply(value: any): {
                        typeUrl: string;
                        value: _8.MsgSupply;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _8.MsgWithdraw;
                    };
                    maxWithdraw(value: any): {
                        typeUrl: string;
                        value: _8.MsgMaxWithdraw;
                    };
                    collateralize(value: any): {
                        typeUrl: string;
                        value: _8.MsgCollateralize;
                    };
                    decollateralize(value: any): {
                        typeUrl: string;
                        value: _8.MsgDecollateralize;
                    };
                    borrow(value: any): {
                        typeUrl: string;
                        value: _8.MsgBorrow;
                    };
                    maxBorrow(value: any): {
                        typeUrl: string;
                        value: _8.MsgMaxBorrow;
                    };
                    repay(value: any): {
                        typeUrl: string;
                        value: _8.MsgRepay;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _8.MsgLiquidate;
                    };
                    leveragedLiquidate(value: any): {
                        typeUrl: string;
                        value: _8.MsgLeveragedLiquidate;
                    };
                    supplyCollateral(value: any): {
                        typeUrl: string;
                        value: _8.MsgSupplyCollateral;
                    };
                    govUpdateRegistry(value: any): {
                        typeUrl: string;
                        value: _8.MsgGovUpdateRegistry;
                    };
                };
                fromPartial: {
                    supply(value: _8.MsgSupply): {
                        typeUrl: string;
                        value: _8.MsgSupply;
                    };
                    withdraw(value: _8.MsgWithdraw): {
                        typeUrl: string;
                        value: _8.MsgWithdraw;
                    };
                    maxWithdraw(value: _8.MsgMaxWithdraw): {
                        typeUrl: string;
                        value: _8.MsgMaxWithdraw;
                    };
                    collateralize(value: _8.MsgCollateralize): {
                        typeUrl: string;
                        value: _8.MsgCollateralize;
                    };
                    decollateralize(value: _8.MsgDecollateralize): {
                        typeUrl: string;
                        value: _8.MsgDecollateralize;
                    };
                    borrow(value: _8.MsgBorrow): {
                        typeUrl: string;
                        value: _8.MsgBorrow;
                    };
                    maxBorrow(value: _8.MsgMaxBorrow): {
                        typeUrl: string;
                        value: _8.MsgMaxBorrow;
                    };
                    repay(value: _8.MsgRepay): {
                        typeUrl: string;
                        value: _8.MsgRepay;
                    };
                    liquidate(value: _8.MsgLiquidate): {
                        typeUrl: string;
                        value: _8.MsgLiquidate;
                    };
                    leveragedLiquidate(value: _8.MsgLeveragedLiquidate): {
                        typeUrl: string;
                        value: _8.MsgLeveragedLiquidate;
                    };
                    supplyCollateral(value: _8.MsgSupplyCollateral): {
                        typeUrl: string;
                        value: _8.MsgSupplyCollateral;
                    };
                    govUpdateRegistry(value: _8.MsgGovUpdateRegistry): {
                        typeUrl: string;
                        value: _8.MsgGovUpdateRegistry;
                    };
                };
            };
            AminoConverter: {
                "/umee.leverage.v1.MsgSupply": {
                    aminoType: string;
                    toAmino: ({ supplier, asset }: _8.MsgSupply) => {
                        supplier: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ supplier, asset }: {
                        supplier: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    }) => _8.MsgSupply;
                };
                "/umee.leverage.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ supplier, asset }: _8.MsgWithdraw) => {
                        supplier: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ supplier, asset }: {
                        supplier: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    }) => _8.MsgWithdraw;
                };
                "/umee.leverage.v1.MsgMaxWithdraw": {
                    aminoType: string;
                    toAmino: ({ supplier, denom }: _8.MsgMaxWithdraw) => {
                        supplier: string;
                        denom: string;
                    };
                    fromAmino: ({ supplier, denom }: {
                        supplier: string;
                        denom: string;
                    }) => _8.MsgMaxWithdraw;
                };
                "/umee.leverage.v1.MsgCollateralize": {
                    aminoType: string;
                    toAmino: ({ borrower, asset }: _8.MsgCollateralize) => {
                        borrower: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ borrower, asset }: {
                        borrower: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    }) => _8.MsgCollateralize;
                };
                "/umee.leverage.v1.MsgDecollateralize": {
                    aminoType: string;
                    toAmino: ({ borrower, asset }: _8.MsgDecollateralize) => {
                        borrower: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ borrower, asset }: {
                        borrower: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    }) => _8.MsgDecollateralize;
                };
                "/umee.leverage.v1.MsgBorrow": {
                    aminoType: string;
                    toAmino: ({ borrower, asset }: _8.MsgBorrow) => {
                        borrower: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ borrower, asset }: {
                        borrower: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    }) => _8.MsgBorrow;
                };
                "/umee.leverage.v1.MsgMaxBorrow": {
                    aminoType: string;
                    toAmino: ({ borrower, denom }: _8.MsgMaxBorrow) => {
                        borrower: string;
                        denom: string;
                    };
                    fromAmino: ({ borrower, denom }: {
                        borrower: string;
                        denom: string;
                    }) => _8.MsgMaxBorrow;
                };
                "/umee.leverage.v1.MsgRepay": {
                    aminoType: string;
                    toAmino: ({ borrower, asset }: _8.MsgRepay) => {
                        borrower: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ borrower, asset }: {
                        borrower: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    }) => _8.MsgRepay;
                };
                "/umee.leverage.v1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ liquidator, borrower, repayment, rewardDenom }: _8.MsgLiquidate) => {
                        liquidator: string;
                        borrower: string;
                        repayment: {
                            denom: string;
                            amount: string;
                        };
                        reward_denom: string;
                    };
                    fromAmino: ({ liquidator, borrower, repayment, reward_denom }: {
                        liquidator: string;
                        borrower: string;
                        repayment: {
                            denom: string;
                            amount: string;
                        };
                        reward_denom: string;
                    }) => _8.MsgLiquidate;
                };
                "/umee.leverage.v1.MsgLeveragedLiquidate": {
                    aminoType: string;
                    toAmino: ({ liquidator, borrower, repayDenom, rewardDenom }: _8.MsgLeveragedLiquidate) => {
                        liquidator: string;
                        borrower: string;
                        repay_denom: string;
                        reward_denom: string;
                    };
                    fromAmino: ({ liquidator, borrower, repay_denom, reward_denom }: {
                        liquidator: string;
                        borrower: string;
                        repay_denom: string;
                        reward_denom: string;
                    }) => _8.MsgLeveragedLiquidate;
                };
                "/umee.leverage.v1.MsgSupplyCollateral": {
                    aminoType: string;
                    toAmino: ({ supplier, asset }: _8.MsgSupplyCollateral) => {
                        supplier: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ supplier, asset }: {
                        supplier: string;
                        asset: {
                            denom: string;
                            amount: string;
                        };
                    }) => _8.MsgSupplyCollateral;
                };
                "/umee.leverage.v1.MsgGovUpdateRegistry": {
                    aminoType: string;
                    toAmino: ({ authority, title, description, addTokens, updateTokens }: _8.MsgGovUpdateRegistry) => {
                        authority: string;
                        title: string;
                        description: string;
                        add_tokens: {
                            base_denom: string;
                            reserve_factor: string;
                            collateral_weight: string;
                            liquidation_threshold: string;
                            base_borrow_rate: string;
                            kink_borrow_rate: string;
                            max_borrow_rate: string;
                            kink_utilization: string;
                            liquidation_incentive: string;
                            symbol_denom: string;
                            exponent: number;
                            enable_msg_supply: boolean;
                            enable_msg_borrow: boolean;
                            blacklist: boolean;
                            max_collateral_share: string;
                            max_supply_utilization: string;
                            min_collateral_liquidity: string;
                            max_supply: string;
                            historic_medians: number;
                        }[];
                        update_tokens: {
                            base_denom: string;
                            reserve_factor: string;
                            collateral_weight: string;
                            liquidation_threshold: string;
                            base_borrow_rate: string;
                            kink_borrow_rate: string;
                            max_borrow_rate: string;
                            kink_utilization: string;
                            liquidation_incentive: string;
                            symbol_denom: string;
                            exponent: number;
                            enable_msg_supply: boolean;
                            enable_msg_borrow: boolean;
                            blacklist: boolean;
                            max_collateral_share: string;
                            max_supply_utilization: string;
                            min_collateral_liquidity: string;
                            max_supply: string;
                            historic_medians: number;
                        }[];
                    };
                    fromAmino: ({ authority, title, description, add_tokens, update_tokens }: {
                        authority: string;
                        title: string;
                        description: string;
                        add_tokens: {
                            base_denom: string;
                            reserve_factor: string;
                            collateral_weight: string;
                            liquidation_threshold: string;
                            base_borrow_rate: string;
                            kink_borrow_rate: string;
                            max_borrow_rate: string;
                            kink_utilization: string;
                            liquidation_incentive: string;
                            symbol_denom: string;
                            exponent: number;
                            enable_msg_supply: boolean;
                            enable_msg_borrow: boolean;
                            blacklist: boolean;
                            max_collateral_share: string;
                            max_supply_utilization: string;
                            min_collateral_liquidity: string;
                            max_supply: string;
                            historic_medians: number;
                        }[];
                        update_tokens: {
                            base_denom: string;
                            reserve_factor: string;
                            collateral_weight: string;
                            liquidation_threshold: string;
                            base_borrow_rate: string;
                            kink_borrow_rate: string;
                            max_borrow_rate: string;
                            kink_utilization: string;
                            liquidation_incentive: string;
                            symbol_denom: string;
                            exponent: number;
                            enable_msg_supply: boolean;
                            enable_msg_borrow: boolean;
                            blacklist: boolean;
                            max_collateral_share: string;
                            max_supply_utilization: string;
                            min_collateral_liquidity: string;
                            max_supply: string;
                            historic_medians: number;
                        }[];
                    }) => _8.MsgGovUpdateRegistry;
                };
            };
            MsgSupply: {
                encode(message: _8.MsgSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgSupply;
                fromPartial(object: Partial<_8.MsgSupply>): _8.MsgSupply;
            };
            MsgWithdraw: {
                encode(message: _8.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgWithdraw;
                fromPartial(object: Partial<_8.MsgWithdraw>): _8.MsgWithdraw;
            };
            MsgMaxWithdraw: {
                encode(message: _8.MsgMaxWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgMaxWithdraw;
                fromPartial(object: Partial<_8.MsgMaxWithdraw>): _8.MsgMaxWithdraw;
            };
            MsgCollateralize: {
                encode(message: _8.MsgCollateralize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgCollateralize;
                fromPartial(object: Partial<_8.MsgCollateralize>): _8.MsgCollateralize;
            };
            MsgDecollateralize: {
                encode(message: _8.MsgDecollateralize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgDecollateralize;
                fromPartial(object: Partial<_8.MsgDecollateralize>): _8.MsgDecollateralize;
            };
            MsgBorrow: {
                encode(message: _8.MsgBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgBorrow;
                fromPartial(object: Partial<_8.MsgBorrow>): _8.MsgBorrow;
            };
            MsgMaxBorrow: {
                encode(message: _8.MsgMaxBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgMaxBorrow;
                fromPartial(object: Partial<_8.MsgMaxBorrow>): _8.MsgMaxBorrow;
            };
            MsgRepay: {
                encode(message: _8.MsgRepay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgRepay;
                fromPartial(object: Partial<_8.MsgRepay>): _8.MsgRepay;
            };
            MsgLiquidate: {
                encode(message: _8.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgLiquidate;
                fromPartial(object: Partial<_8.MsgLiquidate>): _8.MsgLiquidate;
            };
            MsgLeveragedLiquidate: {
                encode(message: _8.MsgLeveragedLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgLeveragedLiquidate;
                fromPartial(object: Partial<_8.MsgLeveragedLiquidate>): _8.MsgLeveragedLiquidate;
            };
            MsgSupplyCollateral: {
                encode(message: _8.MsgSupplyCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgSupplyCollateral;
                fromPartial(object: Partial<_8.MsgSupplyCollateral>): _8.MsgSupplyCollateral;
            };
            MsgSupplyResponse: {
                encode(message: _8.MsgSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgSupplyResponse;
                fromPartial(object: Partial<_8.MsgSupplyResponse>): _8.MsgSupplyResponse;
            };
            MsgWithdrawResponse: {
                encode(message: _8.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgWithdrawResponse;
                fromPartial(object: Partial<_8.MsgWithdrawResponse>): _8.MsgWithdrawResponse;
            };
            MsgMaxWithdrawResponse: {
                encode(message: _8.MsgMaxWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgMaxWithdrawResponse;
                fromPartial(object: Partial<_8.MsgMaxWithdrawResponse>): _8.MsgMaxWithdrawResponse;
            };
            MsgCollateralizeResponse: {
                encode(_: _8.MsgCollateralizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.MsgCollateralizeResponse;
                fromPartial(_: Partial<_8.MsgCollateralizeResponse>): _8.MsgCollateralizeResponse;
            };
            MsgDecollateralizeResponse: {
                encode(_: _8.MsgDecollateralizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.MsgDecollateralizeResponse;
                fromPartial(_: Partial<_8.MsgDecollateralizeResponse>): _8.MsgDecollateralizeResponse;
            };
            MsgBorrowResponse: {
                encode(_: _8.MsgBorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.MsgBorrowResponse;
                fromPartial(_: Partial<_8.MsgBorrowResponse>): _8.MsgBorrowResponse;
            };
            MsgMaxBorrowResponse: {
                encode(message: _8.MsgMaxBorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgMaxBorrowResponse;
                fromPartial(object: Partial<_8.MsgMaxBorrowResponse>): _8.MsgMaxBorrowResponse;
            };
            MsgRepayResponse: {
                encode(message: _8.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgRepayResponse;
                fromPartial(object: Partial<_8.MsgRepayResponse>): _8.MsgRepayResponse;
            };
            MsgLiquidateResponse: {
                encode(message: _8.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgLiquidateResponse;
                fromPartial(object: Partial<_8.MsgLiquidateResponse>): _8.MsgLiquidateResponse;
            };
            MsgLeveragedLiquidateResponse: {
                encode(message: _8.MsgLeveragedLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgLeveragedLiquidateResponse;
                fromPartial(object: Partial<_8.MsgLeveragedLiquidateResponse>): _8.MsgLeveragedLiquidateResponse;
            };
            MsgSupplyCollateralResponse: {
                encode(message: _8.MsgSupplyCollateralResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgSupplyCollateralResponse;
                fromPartial(object: Partial<_8.MsgSupplyCollateralResponse>): _8.MsgSupplyCollateralResponse;
            };
            MsgGovUpdateRegistry: {
                encode(message: _8.MsgGovUpdateRegistry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _8.MsgGovUpdateRegistry;
                fromPartial(object: Partial<_8.MsgGovUpdateRegistry>): _8.MsgGovUpdateRegistry;
            };
            MsgGovUpdateRegistryResponse: {
                encode(_: _8.MsgGovUpdateRegistryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _8.MsgGovUpdateRegistryResponse;
                fromPartial(_: Partial<_8.MsgGovUpdateRegistryResponse>): _8.MsgGovUpdateRegistryResponse;
            };
            QueryParams: {
                encode(_: _7.QueryParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _7.QueryParams;
                fromPartial(_: Partial<_7.QueryParams>): _7.QueryParams;
            };
            QueryParamsResponse: {
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryParamsResponse;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
            };
            QueryRegisteredTokens: {
                encode(message: _7.QueryRegisteredTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryRegisteredTokens;
                fromPartial(object: Partial<_7.QueryRegisteredTokens>): _7.QueryRegisteredTokens;
            };
            QueryRegisteredTokensResponse: {
                encode(message: _7.QueryRegisteredTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryRegisteredTokensResponse;
                fromPartial(object: Partial<_7.QueryRegisteredTokensResponse>): _7.QueryRegisteredTokensResponse;
            };
            QueryMarketSummary: {
                encode(message: _7.QueryMarketSummary, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryMarketSummary;
                fromPartial(object: Partial<_7.QueryMarketSummary>): _7.QueryMarketSummary;
            };
            QueryMarketSummaryResponse: {
                encode(message: _7.QueryMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryMarketSummaryResponse;
                fromPartial(object: Partial<_7.QueryMarketSummaryResponse>): _7.QueryMarketSummaryResponse;
            };
            QueryAccountBalances: {
                encode(message: _7.QueryAccountBalances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryAccountBalances;
                fromPartial(object: Partial<_7.QueryAccountBalances>): _7.QueryAccountBalances;
            };
            QueryAccountBalancesResponse: {
                encode(message: _7.QueryAccountBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryAccountBalancesResponse;
                fromPartial(object: Partial<_7.QueryAccountBalancesResponse>): _7.QueryAccountBalancesResponse;
            };
            QueryAccountSummary: {
                encode(message: _7.QueryAccountSummary, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryAccountSummary;
                fromPartial(object: Partial<_7.QueryAccountSummary>): _7.QueryAccountSummary;
            };
            QueryAccountSummaryResponse: {
                encode(message: _7.QueryAccountSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryAccountSummaryResponse;
                fromPartial(object: Partial<_7.QueryAccountSummaryResponse>): _7.QueryAccountSummaryResponse;
            };
            QueryLiquidationTargets: {
                encode(_: _7.QueryLiquidationTargets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _7.QueryLiquidationTargets;
                fromPartial(_: Partial<_7.QueryLiquidationTargets>): _7.QueryLiquidationTargets;
            };
            QueryLiquidationTargetsResponse: {
                encode(message: _7.QueryLiquidationTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryLiquidationTargetsResponse;
                fromPartial(object: Partial<_7.QueryLiquidationTargetsResponse>): _7.QueryLiquidationTargetsResponse;
            };
            QueryBadDebts: {
                encode(_: _7.QueryBadDebts, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _7.QueryBadDebts;
                fromPartial(_: Partial<_7.QueryBadDebts>): _7.QueryBadDebts;
            };
            QueryBadDebtsResponse: {
                encode(message: _7.QueryBadDebtsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryBadDebtsResponse;
                fromPartial(object: Partial<_7.QueryBadDebtsResponse>): _7.QueryBadDebtsResponse;
            };
            QueryMaxWithdraw: {
                encode(message: _7.QueryMaxWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryMaxWithdraw;
                fromPartial(object: Partial<_7.QueryMaxWithdraw>): _7.QueryMaxWithdraw;
            };
            QueryMaxWithdrawResponse: {
                encode(message: _7.QueryMaxWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryMaxWithdrawResponse;
                fromPartial(object: Partial<_7.QueryMaxWithdrawResponse>): _7.QueryMaxWithdrawResponse;
            };
            QueryMaxBorrow: {
                encode(message: _7.QueryMaxBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryMaxBorrow;
                fromPartial(object: Partial<_7.QueryMaxBorrow>): _7.QueryMaxBorrow;
            };
            QueryMaxBorrowResponse: {
                encode(message: _7.QueryMaxBorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryMaxBorrowResponse;
                fromPartial(object: Partial<_7.QueryMaxBorrowResponse>): _7.QueryMaxBorrowResponse;
            };
            QueryInspect: {
                encode(message: _7.QueryInspect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryInspect;
                fromPartial(object: Partial<_7.QueryInspect>): _7.QueryInspect;
            };
            QueryInspectResponse: {
                encode(message: _7.QueryInspectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.QueryInspectResponse;
                fromPartial(object: Partial<_7.QueryInspectResponse>): _7.QueryInspectResponse;
            };
            InspectAccount: {
                encode(message: _7.InspectAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.InspectAccount;
                fromPartial(object: Partial<_7.InspectAccount>): _7.InspectAccount;
            };
            RiskInfo: {
                encode(message: _7.RiskInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.RiskInfo;
                fromPartial(object: Partial<_7.RiskInfo>): _7.RiskInfo;
            };
            DecBalances: {
                encode(message: _7.DecBalances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _7.DecBalances;
                fromPartial(object: Partial<_7.DecBalances>): _7.DecBalances;
            };
            Params: {
                encode(message: _6.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Params;
                fromPartial(object: Partial<_6.Params>): _6.Params;
            };
            Token: {
                encode(message: _6.Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _6.Token;
                fromPartial(object: Partial<_6.Token>): _6.Token;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            };
            AdjustedBorrow: {
                encode(message: _5.AdjustedBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.AdjustedBorrow;
                fromPartial(object: Partial<_5.AdjustedBorrow>): _5.AdjustedBorrow;
            };
            Collateral: {
                encode(message: _5.Collateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Collateral;
                fromPartial(object: Partial<_5.Collateral>): _5.Collateral;
            };
            BadDebt: {
                encode(message: _5.BadDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.BadDebt;
                fromPartial(object: Partial<_5.BadDebt>): _5.BadDebt;
            };
            InterestScalar: {
                encode(message: _5.InterestScalar, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.InterestScalar;
                fromPartial(object: Partial<_5.InterestScalar>): _5.InterestScalar;
            };
            EventSupply: {
                encode(message: _4.EventSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventSupply;
                fromPartial(object: Partial<_4.EventSupply>): _4.EventSupply;
            };
            EventWithdraw: {
                encode(message: _4.EventWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventWithdraw;
                fromPartial(object: Partial<_4.EventWithdraw>): _4.EventWithdraw;
            };
            EventCollaterize: {
                encode(message: _4.EventCollaterize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventCollaterize;
                fromPartial(object: Partial<_4.EventCollaterize>): _4.EventCollaterize;
            };
            EventDecollaterize: {
                encode(message: _4.EventDecollaterize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventDecollaterize;
                fromPartial(object: Partial<_4.EventDecollaterize>): _4.EventDecollaterize;
            };
            EventBorrow: {
                encode(message: _4.EventBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventBorrow;
                fromPartial(object: Partial<_4.EventBorrow>): _4.EventBorrow;
            };
            EventRepay: {
                encode(message: _4.EventRepay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventRepay;
                fromPartial(object: Partial<_4.EventRepay>): _4.EventRepay;
            };
            EventLiquidate: {
                encode(message: _4.EventLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventLiquidate;
                fromPartial(object: Partial<_4.EventLiquidate>): _4.EventLiquidate;
            };
            EventInterestAccrual: {
                encode(message: _4.EventInterestAccrual, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventInterestAccrual;
                fromPartial(object: Partial<_4.EventInterestAccrual>): _4.EventInterestAccrual;
            };
            EventRepayBadDebt: {
                encode(message: _4.EventRepayBadDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventRepayBadDebt;
                fromPartial(object: Partial<_4.EventRepayBadDebt>): _4.EventRepayBadDebt;
            };
            EventReservesExhausted: {
                encode(message: _4.EventReservesExhausted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventReservesExhausted;
                fromPartial(object: Partial<_4.EventReservesExhausted>): _4.EventReservesExhausted;
            };
            EventFundOracle: {
                encode(message: _4.EventFundOracle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.EventFundOracle;
                fromPartial(object: Partial<_4.EventFundOracle>): _4.EventFundOracle;
            };
        };
    }
    namespace oracle {
        const v1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                exchangeRates(request: _12.QueryExchangeRates): Promise<_12.QueryExchangeRatesResponse>;
                activeExchangeRates(request?: _12.QueryActiveExchangeRates): Promise<_12.QueryActiveExchangeRatesResponse>;
                feederDelegation(request: _12.QueryFeederDelegation): Promise<_12.QueryFeederDelegationResponse>;
                missCounter(request: _12.QueryMissCounter): Promise<_12.QueryMissCounterResponse>;
                slashWindow(request?: _12.QuerySlashWindow): Promise<_12.QuerySlashWindowResponse>;
                aggregatePrevote(request: _12.QueryAggregatePrevote): Promise<_12.QueryAggregatePrevoteResponse>;
                aggregatePrevotes(request?: _12.QueryAggregatePrevotes): Promise<_12.QueryAggregatePrevotesResponse>;
                aggregateVote(request: _12.QueryAggregateVote): Promise<_12.QueryAggregateVoteResponse>;
                aggregateVotes(request?: _12.QueryAggregateVotes): Promise<_12.QueryAggregateVotesResponse>;
                params(request?: _12.QueryParams): Promise<_12.QueryParamsResponse>;
                medians(request: _12.QueryMedians): Promise<_12.QueryMediansResponse>;
                medianDeviations(request: _12.QueryMedianDeviations): Promise<_12.QueryMedianDeviationsResponse>;
                avgPrice(request: _12.QueryAvgPrice): Promise<_12.QueryAvgPriceResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRatePrevote(value: _13.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    aggregateExchangeRateVote(value: _13.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _13.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRatePrevote(value: _13.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _13.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _13.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _13.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _13.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _13.MsgDelegateFeedConsent;
                    };
                };
                fromJSON: {
                    aggregateExchangeRatePrevote(value: any): {
                        typeUrl: string;
                        value: _13.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: any): {
                        typeUrl: string;
                        value: _13.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: any): {
                        typeUrl: string;
                        value: _13.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRatePrevote(value: _13.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _13.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _13.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _13.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _13.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _13.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
                    aminoType: string;
                    toAmino: ({ hash, feeder, validator }: _13.MsgAggregateExchangeRatePrevote) => {
                        hash: string;
                        feeder: string;
                        validator: string;
                    };
                    fromAmino: ({ hash, feeder, validator }: {
                        hash: string;
                        feeder: string;
                        validator: string;
                    }) => _13.MsgAggregateExchangeRatePrevote;
                };
                "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: ({ salt, exchangeRates, feeder, validator }: _13.MsgAggregateExchangeRateVote) => {
                        salt: string;
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    };
                    fromAmino: ({ salt, exchange_rates, feeder, validator }: {
                        salt: string;
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    }) => _13.MsgAggregateExchangeRateVote;
                };
                "/umee.oracle.v1.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: ({ operator, delegate }: _13.MsgDelegateFeedConsent) => {
                        operator: string;
                        delegate: string;
                    };
                    fromAmino: ({ operator, delegate }: {
                        operator: string;
                        delegate: string;
                    }) => _13.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRatePrevote: {
                encode(message: _13.MsgAggregateExchangeRatePrevote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgAggregateExchangeRatePrevote;
                fromPartial(object: Partial<_13.MsgAggregateExchangeRatePrevote>): _13.MsgAggregateExchangeRatePrevote;
            };
            MsgAggregateExchangeRatePrevoteResponse: {
                encode(_: _13.MsgAggregateExchangeRatePrevoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgAggregateExchangeRatePrevoteResponse;
                fromPartial(_: Partial<_13.MsgAggregateExchangeRatePrevoteResponse>): _13.MsgAggregateExchangeRatePrevoteResponse;
            };
            MsgAggregateExchangeRateVote: {
                encode(message: _13.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgAggregateExchangeRateVote;
                fromPartial(object: Partial<_13.MsgAggregateExchangeRateVote>): _13.MsgAggregateExchangeRateVote;
            };
            MsgAggregateExchangeRateVoteResponse: {
                encode(_: _13.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: Partial<_13.MsgAggregateExchangeRateVoteResponse>): _13.MsgAggregateExchangeRateVoteResponse;
            };
            MsgDelegateFeedConsent: {
                encode(message: _13.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _13.MsgDelegateFeedConsent;
                fromPartial(object: Partial<_13.MsgDelegateFeedConsent>): _13.MsgDelegateFeedConsent;
            };
            MsgDelegateFeedConsentResponse: {
                encode(_: _13.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _13.MsgDelegateFeedConsentResponse;
                fromPartial(_: Partial<_13.MsgDelegateFeedConsentResponse>): _13.MsgDelegateFeedConsentResponse;
            };
            QueryExchangeRates: {
                encode(message: _12.QueryExchangeRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryExchangeRates;
                fromPartial(object: Partial<_12.QueryExchangeRates>): _12.QueryExchangeRates;
            };
            QueryExchangeRatesResponse: {
                encode(message: _12.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryExchangeRatesResponse;
                fromPartial(object: Partial<_12.QueryExchangeRatesResponse>): _12.QueryExchangeRatesResponse;
            };
            QueryActiveExchangeRates: {
                encode(_: _12.QueryActiveExchangeRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.QueryActiveExchangeRates;
                fromPartial(_: Partial<_12.QueryActiveExchangeRates>): _12.QueryActiveExchangeRates;
            };
            QueryActiveExchangeRatesResponse: {
                encode(message: _12.QueryActiveExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryActiveExchangeRatesResponse;
                fromPartial(object: Partial<_12.QueryActiveExchangeRatesResponse>): _12.QueryActiveExchangeRatesResponse;
            };
            QueryFeederDelegation: {
                encode(message: _12.QueryFeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryFeederDelegation;
                fromPartial(object: Partial<_12.QueryFeederDelegation>): _12.QueryFeederDelegation;
            };
            QueryFeederDelegationResponse: {
                encode(message: _12.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryFeederDelegationResponse;
                fromPartial(object: Partial<_12.QueryFeederDelegationResponse>): _12.QueryFeederDelegationResponse;
            };
            QueryMissCounter: {
                encode(message: _12.QueryMissCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryMissCounter;
                fromPartial(object: Partial<_12.QueryMissCounter>): _12.QueryMissCounter;
            };
            QueryMissCounterResponse: {
                encode(message: _12.QueryMissCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryMissCounterResponse;
                fromPartial(object: Partial<_12.QueryMissCounterResponse>): _12.QueryMissCounterResponse;
            };
            QuerySlashWindow: {
                encode(_: _12.QuerySlashWindow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.QuerySlashWindow;
                fromPartial(_: Partial<_12.QuerySlashWindow>): _12.QuerySlashWindow;
            };
            QuerySlashWindowResponse: {
                encode(message: _12.QuerySlashWindowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QuerySlashWindowResponse;
                fromPartial(object: Partial<_12.QuerySlashWindowResponse>): _12.QuerySlashWindowResponse;
            };
            QueryAggregatePrevote: {
                encode(message: _12.QueryAggregatePrevote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAggregatePrevote;
                fromPartial(object: Partial<_12.QueryAggregatePrevote>): _12.QueryAggregatePrevote;
            };
            QueryAggregatePrevoteResponse: {
                encode(message: _12.QueryAggregatePrevoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAggregatePrevoteResponse;
                fromPartial(object: Partial<_12.QueryAggregatePrevoteResponse>): _12.QueryAggregatePrevoteResponse;
            };
            QueryAggregatePrevotes: {
                encode(_: _12.QueryAggregatePrevotes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.QueryAggregatePrevotes;
                fromPartial(_: Partial<_12.QueryAggregatePrevotes>): _12.QueryAggregatePrevotes;
            };
            QueryAggregatePrevotesResponse: {
                encode(message: _12.QueryAggregatePrevotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAggregatePrevotesResponse;
                fromPartial(object: Partial<_12.QueryAggregatePrevotesResponse>): _12.QueryAggregatePrevotesResponse;
            };
            QueryAggregateVote: {
                encode(message: _12.QueryAggregateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAggregateVote;
                fromPartial(object: Partial<_12.QueryAggregateVote>): _12.QueryAggregateVote;
            };
            QueryAggregateVoteResponse: {
                encode(message: _12.QueryAggregateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAggregateVoteResponse;
                fromPartial(object: Partial<_12.QueryAggregateVoteResponse>): _12.QueryAggregateVoteResponse;
            };
            QueryAggregateVotes: {
                encode(_: _12.QueryAggregateVotes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.QueryAggregateVotes;
                fromPartial(_: Partial<_12.QueryAggregateVotes>): _12.QueryAggregateVotes;
            };
            QueryAggregateVotesResponse: {
                encode(message: _12.QueryAggregateVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAggregateVotesResponse;
                fromPartial(object: Partial<_12.QueryAggregateVotesResponse>): _12.QueryAggregateVotesResponse;
            };
            QueryParams: {
                encode(_: _12.QueryParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _12.QueryParams;
                fromPartial(_: Partial<_12.QueryParams>): _12.QueryParams;
            };
            QueryParamsResponse: {
                encode(message: _12.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
            };
            QueryMedians: {
                encode(message: _12.QueryMedians, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryMedians;
                fromPartial(object: Partial<_12.QueryMedians>): _12.QueryMedians;
            };
            QueryMediansResponse: {
                encode(message: _12.QueryMediansResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryMediansResponse;
                fromPartial(object: Partial<_12.QueryMediansResponse>): _12.QueryMediansResponse;
            };
            QueryMedianDeviations: {
                encode(message: _12.QueryMedianDeviations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryMedianDeviations;
                fromPartial(object: Partial<_12.QueryMedianDeviations>): _12.QueryMedianDeviations;
            };
            QueryMedianDeviationsResponse: {
                encode(message: _12.QueryMedianDeviationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryMedianDeviationsResponse;
                fromPartial(object: Partial<_12.QueryMedianDeviationsResponse>): _12.QueryMedianDeviationsResponse;
            };
            QueryAvgPrice: {
                encode(message: _12.QueryAvgPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAvgPrice;
                fromPartial(object: Partial<_12.QueryAvgPrice>): _12.QueryAvgPrice;
            };
            QueryAvgPriceResponse: {
                encode(message: _12.QueryAvgPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _12.QueryAvgPriceResponse;
                fromPartial(object: Partial<_12.QueryAvgPriceResponse>): _12.QueryAvgPriceResponse;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Params;
                fromPartial(object: Partial<_11.Params>): _11.Params;
            };
            Denom: {
                encode(message: _11.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.Denom;
                fromPartial(object: Partial<_11.Denom>): _11.Denom;
            };
            AggregateExchangeRatePrevote: {
                encode(message: _11.AggregateExchangeRatePrevote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.AggregateExchangeRatePrevote;
                fromPartial(object: Partial<_11.AggregateExchangeRatePrevote>): _11.AggregateExchangeRatePrevote;
            };
            AggregateExchangeRateVote: {
                encode(message: _11.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.AggregateExchangeRateVote;
                fromPartial(object: Partial<_11.AggregateExchangeRateVote>): _11.AggregateExchangeRateVote;
            };
            ExchangeRateTuple: {
                encode(message: _11.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.ExchangeRateTuple;
                fromPartial(object: Partial<_11.ExchangeRateTuple>): _11.ExchangeRateTuple;
            };
            AvgCounter: {
                encode(message: _11.AvgCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _11.AvgCounter;
                fromPartial(object: Partial<_11.AvgCounter>): _11.AvgCounter;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
            };
            FeederDelegation: {
                encode(message: _10.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.FeederDelegation;
                fromPartial(object: Partial<_10.FeederDelegation>): _10.FeederDelegation;
            };
            MissCounter: {
                encode(message: _10.MissCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.MissCounter;
                fromPartial(object: Partial<_10.MissCounter>): _10.MissCounter;
            };
            Price: {
                encode(message: _10.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _10.Price;
                fromPartial(object: Partial<_10.Price>): _10.Price;
            };
            EventDelegateFeedConsent: {
                encode(message: _9.EventDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.EventDelegateFeedConsent;
                fromPartial(object: Partial<_9.EventDelegateFeedConsent>): _9.EventDelegateFeedConsent;
            };
            EventSetFxRate: {
                encode(message: _9.EventSetFxRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _9.EventSetFxRate;
                fromPartial(object: Partial<_9.EventSetFxRate>): _9.EventSetFxRate;
            };
        };
    }
    namespace ugov {
        const v1: {
            MsgClientImpl: typeof _160.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                minGasPrice(request?: _16.QueryMinGasPrice): Promise<_16.QueryMinGasPriceResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    govUpdateMinGasPrice(value: _17.MsgGovUpdateMinGasPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    govUpdateMinGasPrice(value: _17.MsgGovUpdateMinGasPrice): {
                        typeUrl: string;
                        value: _17.MsgGovUpdateMinGasPrice;
                    };
                };
                fromJSON: {
                    govUpdateMinGasPrice(value: any): {
                        typeUrl: string;
                        value: _17.MsgGovUpdateMinGasPrice;
                    };
                };
                fromPartial: {
                    govUpdateMinGasPrice(value: _17.MsgGovUpdateMinGasPrice): {
                        typeUrl: string;
                        value: _17.MsgGovUpdateMinGasPrice;
                    };
                };
            };
            AminoConverter: {
                "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
                    aminoType: string;
                    toAmino: ({ authority, minGasPrice }: _17.MsgGovUpdateMinGasPrice) => {
                        authority: string;
                        min_gas_price: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ authority, min_gas_price }: {
                        authority: string;
                        min_gas_price: {
                            denom: string;
                            amount: string;
                        };
                    }) => _17.MsgGovUpdateMinGasPrice;
                };
            };
            MsgGovUpdateMinGasPrice: {
                encode(message: _17.MsgGovUpdateMinGasPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _17.MsgGovUpdateMinGasPrice;
                fromPartial(object: Partial<_17.MsgGovUpdateMinGasPrice>): _17.MsgGovUpdateMinGasPrice;
            };
            MsgGovUpdateMinGasPriceResponse: {
                encode(_: _17.MsgGovUpdateMinGasPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _17.MsgGovUpdateMinGasPriceResponse;
                fromPartial(_: Partial<_17.MsgGovUpdateMinGasPriceResponse>): _17.MsgGovUpdateMinGasPriceResponse;
            };
            QueryMinGasPrice: {
                encode(_: _16.QueryMinGasPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _16.QueryMinGasPrice;
                fromPartial(_: Partial<_16.QueryMinGasPrice>): _16.QueryMinGasPrice;
            };
            QueryMinGasPriceResponse: {
                encode(message: _16.QueryMinGasPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _16.QueryMinGasPriceResponse;
                fromPartial(object: Partial<_16.QueryMinGasPriceResponse>): _16.QueryMinGasPriceResponse;
            };
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
            };
            EventMinTxFees: {
                encode(message: _14.EventMinTxFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _14.EventMinTxFees;
                fromPartial(object: Partial<_14.EventMinTxFees>): _14.EventMinTxFees;
            };
        };
    }
    namespace uibc {
        const v1: {
            MsgClientImpl: typeof _161.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _20.QueryParams): Promise<_20.QueryParamsResponse>;
                outflows(request: _20.QueryOutflows): Promise<_20.QueryOutflowsResponse>;
                allOutflows(request?: _20.QueryAllOutflows): Promise<_20.QueryAllOutflowsResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    govUpdateQuota(value: _22.MsgGovUpdateQuota): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govSetIBCStatus(value: _22.MsgGovSetIBCStatus): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    govUpdateQuota(value: _22.MsgGovUpdateQuota): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateQuota;
                    };
                    govSetIBCStatus(value: _22.MsgGovSetIBCStatus): {
                        typeUrl: string;
                        value: _22.MsgGovSetIBCStatus;
                    };
                };
                fromJSON: {
                    govUpdateQuota(value: any): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateQuota;
                    };
                    govSetIBCStatus(value: any): {
                        typeUrl: string;
                        value: _22.MsgGovSetIBCStatus;
                    };
                };
                fromPartial: {
                    govUpdateQuota(value: _22.MsgGovUpdateQuota): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateQuota;
                    };
                    govSetIBCStatus(value: _22.MsgGovSetIBCStatus): {
                        typeUrl: string;
                        value: _22.MsgGovSetIBCStatus;
                    };
                };
            };
            AminoConverter: {
                "/umee.uibc.v1.MsgGovUpdateQuota": {
                    aminoType: string;
                    toAmino: ({ authority, title, description, total, perDenom, quotaDuration }: _22.MsgGovUpdateQuota) => {
                        authority: string;
                        title: string;
                        description: string;
                        total: string;
                        per_denom: string;
                        quota_duration: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ authority, title, description, total, per_denom, quota_duration }: {
                        authority: string;
                        title: string;
                        description: string;
                        total: string;
                        per_denom: string;
                        quota_duration: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _22.MsgGovUpdateQuota;
                };
                "/umee.uibc.v1.MsgGovSetIBCStatus": {
                    aminoType: string;
                    toAmino: ({ authority, title, description, ibcStatus }: _22.MsgGovSetIBCStatus) => {
                        authority: string;
                        title: string;
                        description: string;
                        ibc_status: number;
                    };
                    fromAmino: ({ authority, title, description, ibc_status }: {
                        authority: string;
                        title: string;
                        description: string;
                        ibc_status: number;
                    }) => _22.MsgGovSetIBCStatus;
                };
            };
            MsgGovUpdateQuota: {
                encode(message: _22.MsgGovUpdateQuota, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgGovUpdateQuota;
                fromPartial(object: Partial<_22.MsgGovUpdateQuota>): _22.MsgGovUpdateQuota;
            };
            MsgGovUpdateQuotaResponse: {
                encode(_: _22.MsgGovUpdateQuotaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgGovUpdateQuotaResponse;
                fromPartial(_: Partial<_22.MsgGovUpdateQuotaResponse>): _22.MsgGovUpdateQuotaResponse;
            };
            MsgGovSetIBCStatus: {
                encode(message: _22.MsgGovSetIBCStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _22.MsgGovSetIBCStatus;
                fromPartial(object: Partial<_22.MsgGovSetIBCStatus>): _22.MsgGovSetIBCStatus;
            };
            MsgGovSetIBCStatusResponse: {
                encode(_: _22.MsgGovSetIBCStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _22.MsgGovSetIBCStatusResponse;
                fromPartial(_: Partial<_22.MsgGovSetIBCStatusResponse>): _22.MsgGovSetIBCStatusResponse;
            };
            iBCTransferStatusFromJSON(object: any): _21.IBCTransferStatus;
            iBCTransferStatusToJSON(object: _21.IBCTransferStatus): string;
            IBCTransferStatus: typeof _21.IBCTransferStatus;
            IBCTransferStatusSDKType: typeof _21.IBCTransferStatus;
            Params: {
                encode(message: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _21.Params;
                fromPartial(object: Partial<_21.Params>): _21.Params;
            };
            QueryParams: {
                encode(_: _20.QueryParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.QueryParams;
                fromPartial(_: Partial<_20.QueryParams>): _20.QueryParams;
            };
            QueryParamsResponse: {
                encode(message: _20.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryParamsResponse;
                fromPartial(object: Partial<_20.QueryParamsResponse>): _20.QueryParamsResponse;
            };
            QueryOutflows: {
                encode(message: _20.QueryOutflows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryOutflows;
                fromPartial(object: Partial<_20.QueryOutflows>): _20.QueryOutflows;
            };
            QueryOutflowsResponse: {
                encode(message: _20.QueryOutflowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryOutflowsResponse;
                fromPartial(object: Partial<_20.QueryOutflowsResponse>): _20.QueryOutflowsResponse;
            };
            QueryAllOutflows: {
                encode(_: _20.QueryAllOutflows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _20.QueryAllOutflows;
                fromPartial(_: Partial<_20.QueryAllOutflows>): _20.QueryAllOutflows;
            };
            QueryAllOutflowsResponse: {
                encode(message: _20.QueryAllOutflowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _20.QueryAllOutflowsResponse;
                fromPartial(object: Partial<_20.QueryAllOutflowsResponse>): _20.QueryAllOutflowsResponse;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            };
            EventBadRevert: {
                encode(message: _18.EventBadRevert, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.EventBadRevert;
                fromPartial(object: Partial<_18.EventBadRevert>): _18.EventBadRevert;
            };
            EventIBCTransferStatus: {
                encode(message: _18.EventIBCTransferStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _18.EventIBCTransferStatus;
                fromPartial(object: Partial<_18.EventIBCTransferStatus>): _18.EventIBCTransferStatus;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            umee: {
                incentive: {
                    v1: _157.MsgClientImpl;
                };
                leverage: {
                    v1: _158.MsgClientImpl;
                };
                oracle: {
                    v1: _159.MsgClientImpl;
                };
                ugov: {
                    v1: _160.MsgClientImpl;
                };
                uibc: {
                    v1: _161.MsgClientImpl;
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
            umee: {
                incentive: {
                    v1: {
                        params(request?: _2.QueryParams): Promise<_2.QueryParamsResponse>;
                        totalBonded(request: _2.QueryTotalBonded): Promise<_2.QueryTotalBondedResponse>;
                        totalUnbonding(request: _2.QueryTotalUnbonding): Promise<_2.QueryTotalUnbondingResponse>;
                        accountBonds(request: _2.QueryAccountBonds): Promise<_2.QueryAccountBondsResponse>;
                        pendingRewards(request: _2.QueryPendingRewards): Promise<_2.QueryPendingRewardsResponse>;
                        completedIncentivePrograms(request?: _2.QueryCompletedIncentivePrograms): Promise<_2.QueryCompletedIncentiveProgramsResponse>;
                        ongoingIncentivePrograms(request?: _2.QueryOngoingIncentivePrograms): Promise<_2.QueryOngoingIncentiveProgramsResponse>;
                        upcomingIncentivePrograms(request?: _2.QueryUpcomingIncentivePrograms): Promise<_2.QueryUpcomingIncentiveProgramsResponse>;
                        incentiveProgram(request: _2.QueryIncentiveProgram): Promise<_2.QueryIncentiveProgramResponse>;
                        currentRates(request: _2.QueryCurrentRates): Promise<_2.QueryCurrentRatesResponse>;
                        actualRates(request: _2.QueryActualRates): Promise<_2.QueryActualRatesResponse>;
                        lastRewardTime(request?: _2.QueryLastRewardTime): Promise<_2.QueryLastRewardTimeResponse>;
                    };
                };
                leverage: {
                    v1: {
                        params(request?: _7.QueryParams): Promise<_7.QueryParamsResponse>;
                        registeredTokens(request: _7.QueryRegisteredTokens): Promise<_7.QueryRegisteredTokensResponse>;
                        marketSummary(request: _7.QueryMarketSummary): Promise<_7.QueryMarketSummaryResponse>;
                        accountBalances(request: _7.QueryAccountBalances): Promise<_7.QueryAccountBalancesResponse>;
                        accountSummary(request: _7.QueryAccountSummary): Promise<_7.QueryAccountSummaryResponse>;
                        liquidationTargets(request?: _7.QueryLiquidationTargets): Promise<_7.QueryLiquidationTargetsResponse>;
                        badDebts(request?: _7.QueryBadDebts): Promise<_7.QueryBadDebtsResponse>;
                        maxWithdraw(request: _7.QueryMaxWithdraw): Promise<_7.QueryMaxWithdrawResponse>;
                        maxBorrow(request: _7.QueryMaxBorrow): Promise<_7.QueryMaxBorrowResponse>;
                        inspect(request: _7.QueryInspect): Promise<_7.QueryInspectResponse>;
                    };
                };
                oracle: {
                    v1: {
                        exchangeRates(request: _12.QueryExchangeRates): Promise<_12.QueryExchangeRatesResponse>;
                        activeExchangeRates(request?: _12.QueryActiveExchangeRates): Promise<_12.QueryActiveExchangeRatesResponse>;
                        feederDelegation(request: _12.QueryFeederDelegation): Promise<_12.QueryFeederDelegationResponse>;
                        missCounter(request: _12.QueryMissCounter): Promise<_12.QueryMissCounterResponse>;
                        slashWindow(request?: _12.QuerySlashWindow): Promise<_12.QuerySlashWindowResponse>;
                        aggregatePrevote(request: _12.QueryAggregatePrevote): Promise<_12.QueryAggregatePrevoteResponse>;
                        aggregatePrevotes(request?: _12.QueryAggregatePrevotes): Promise<_12.QueryAggregatePrevotesResponse>;
                        aggregateVote(request: _12.QueryAggregateVote): Promise<_12.QueryAggregateVoteResponse>;
                        aggregateVotes(request?: _12.QueryAggregateVotes): Promise<_12.QueryAggregateVotesResponse>;
                        params(request?: _12.QueryParams): Promise<_12.QueryParamsResponse>;
                        medians(request: _12.QueryMedians): Promise<_12.QueryMediansResponse>;
                        medianDeviations(request: _12.QueryMedianDeviations): Promise<_12.QueryMedianDeviationsResponse>;
                        avgPrice(request: _12.QueryAvgPrice): Promise<_12.QueryAvgPriceResponse>;
                    };
                };
                ugov: {
                    v1: {
                        minGasPrice(request?: _16.QueryMinGasPrice): Promise<_16.QueryMinGasPriceResponse>;
                    };
                };
                uibc: {
                    v1: {
                        params(request?: _20.QueryParams): Promise<_20.QueryParamsResponse>;
                        outflows(request: _20.QueryOutflows): Promise<_20.QueryOutflowsResponse>;
                        allOutflows(request?: _20.QueryAllOutflows): Promise<_20.QueryAllOutflowsResponse>;
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
            umee: {
                incentive: {
                    v1: _147.LCDQueryClient;
                };
                leverage: {
                    v1: _148.LCDQueryClient;
                };
                oracle: {
                    v1: _149.LCDQueryClient;
                };
                ugov: {
                    v1: _150.LCDQueryClient;
                };
                uibc: {
                    v1: _151.LCDQueryClient;
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
