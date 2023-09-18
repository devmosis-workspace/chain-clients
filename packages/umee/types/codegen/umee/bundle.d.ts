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
import * as _148 from "./incentive/v1/query.lcd";
import * as _149 from "./leverage/v1/query.lcd";
import * as _150 from "./oracle/v1/query.lcd";
import * as _151 from "./ugov/v1/query.lcd";
import * as _152 from "./uibc/v1/query.lcd";
import * as _153 from "./incentive/v1/query.rpc.Query";
import * as _154 from "./leverage/v1/query.rpc.Query";
import * as _155 from "./oracle/v1/query.rpc.Query";
import * as _156 from "./ugov/v1/query.rpc.Query";
import * as _157 from "./uibc/v1/query.rpc.Query";
import * as _158 from "./incentive/v1/tx.rpc.msg";
import * as _159 from "./leverage/v1/tx.rpc.msg";
import * as _160 from "./oracle/v1/tx.rpc.msg";
import * as _161 from "./ugov/v1/tx.rpc.msg";
import * as _162 from "./uibc/v1/tx.rpc.msg";
export declare namespace umee {
    namespace incentive {
        const v1: {
            MsgClientImpl: typeof _158.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
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
            LCDQueryClient: typeof _148.LCDQueryClient;
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
                    toAmino: (message: _3.MsgClaim) => _3.MsgClaimAmino;
                    fromAmino: (object: _3.MsgClaimAmino) => _3.MsgClaim;
                };
                "/umee.incentive.v1.MsgBond": {
                    aminoType: string;
                    toAmino: (message: _3.MsgBond) => _3.MsgBondAmino;
                    fromAmino: (object: _3.MsgBondAmino) => _3.MsgBond;
                };
                "/umee.incentive.v1.MsgBeginUnbonding": {
                    aminoType: string;
                    toAmino: (message: _3.MsgBeginUnbonding) => _3.MsgBeginUnbondingAmino;
                    fromAmino: (object: _3.MsgBeginUnbondingAmino) => _3.MsgBeginUnbonding;
                };
                "/umee.incentive.v1.MsgEmergencyUnbond": {
                    aminoType: string;
                    toAmino: (message: _3.MsgEmergencyUnbond) => _3.MsgEmergencyUnbondAmino;
                    fromAmino: (object: _3.MsgEmergencyUnbondAmino) => _3.MsgEmergencyUnbond;
                };
                "/umee.incentive.v1.MsgSponsor": {
                    aminoType: string;
                    toAmino: (message: _3.MsgSponsor) => _3.MsgSponsorAmino;
                    fromAmino: (object: _3.MsgSponsorAmino) => _3.MsgSponsor;
                };
                "/umee.incentive.v1.MsgGovSetParams": {
                    aminoType: string;
                    toAmino: (message: _3.MsgGovSetParams) => _3.MsgGovSetParamsAmino;
                    fromAmino: (object: _3.MsgGovSetParamsAmino) => _3.MsgGovSetParams;
                };
                "/umee.incentive.v1.MsgGovCreatePrograms": {
                    aminoType: string;
                    toAmino: (message: _3.MsgGovCreatePrograms) => _3.MsgGovCreateProgramsAmino;
                    fromAmino: (object: _3.MsgGovCreateProgramsAmino) => _3.MsgGovCreatePrograms;
                };
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _3.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgClaim;
                fromPartial(object: Partial<_3.MsgClaim>): _3.MsgClaim;
                fromAmino(object: _3.MsgClaimAmino): _3.MsgClaim;
                toAmino(message: _3.MsgClaim): _3.MsgClaimAmino;
                fromAminoMsg(object: _3.MsgClaimAminoMsg): _3.MsgClaim;
                fromProtoMsg(message: _3.MsgClaimProtoMsg): _3.MsgClaim;
                toProto(message: _3.MsgClaim): Uint8Array;
                toProtoMsg(message: _3.MsgClaim): _3.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(message: _3.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgClaimResponse;
                fromPartial(object: Partial<_3.MsgClaimResponse>): _3.MsgClaimResponse;
                fromAmino(object: _3.MsgClaimResponseAmino): _3.MsgClaimResponse;
                toAmino(message: _3.MsgClaimResponse): _3.MsgClaimResponseAmino;
                fromAminoMsg(object: _3.MsgClaimResponseAminoMsg): _3.MsgClaimResponse;
                fromProtoMsg(message: _3.MsgClaimResponseProtoMsg): _3.MsgClaimResponse;
                toProto(message: _3.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _3.MsgClaimResponse): _3.MsgClaimResponseProtoMsg;
            };
            MsgBond: {
                typeUrl: string;
                encode(message: _3.MsgBond, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgBond;
                fromPartial(object: Partial<_3.MsgBond>): _3.MsgBond;
                fromAmino(object: _3.MsgBondAmino): _3.MsgBond;
                toAmino(message: _3.MsgBond): _3.MsgBondAmino;
                fromAminoMsg(object: _3.MsgBondAminoMsg): _3.MsgBond;
                fromProtoMsg(message: _3.MsgBondProtoMsg): _3.MsgBond;
                toProto(message: _3.MsgBond): Uint8Array;
                toProtoMsg(message: _3.MsgBond): _3.MsgBondProtoMsg;
            };
            MsgBondResponse: {
                typeUrl: string;
                encode(_: _3.MsgBondResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgBondResponse;
                fromPartial(_: Partial<_3.MsgBondResponse>): _3.MsgBondResponse;
                fromAmino(_: _3.MsgBondResponseAmino): _3.MsgBondResponse;
                toAmino(_: _3.MsgBondResponse): _3.MsgBondResponseAmino;
                fromAminoMsg(object: _3.MsgBondResponseAminoMsg): _3.MsgBondResponse;
                fromProtoMsg(message: _3.MsgBondResponseProtoMsg): _3.MsgBondResponse;
                toProto(message: _3.MsgBondResponse): Uint8Array;
                toProtoMsg(message: _3.MsgBondResponse): _3.MsgBondResponseProtoMsg;
            };
            MsgBeginUnbonding: {
                typeUrl: string;
                encode(message: _3.MsgBeginUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgBeginUnbonding;
                fromPartial(object: Partial<_3.MsgBeginUnbonding>): _3.MsgBeginUnbonding;
                fromAmino(object: _3.MsgBeginUnbondingAmino): _3.MsgBeginUnbonding;
                toAmino(message: _3.MsgBeginUnbonding): _3.MsgBeginUnbondingAmino;
                fromAminoMsg(object: _3.MsgBeginUnbondingAminoMsg): _3.MsgBeginUnbonding;
                fromProtoMsg(message: _3.MsgBeginUnbondingProtoMsg): _3.MsgBeginUnbonding;
                toProto(message: _3.MsgBeginUnbonding): Uint8Array;
                toProtoMsg(message: _3.MsgBeginUnbonding): _3.MsgBeginUnbondingProtoMsg;
            };
            MsgBeginUnbondingResponse: {
                typeUrl: string;
                encode(_: _3.MsgBeginUnbondingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgBeginUnbondingResponse;
                fromPartial(_: Partial<_3.MsgBeginUnbondingResponse>): _3.MsgBeginUnbondingResponse;
                fromAmino(_: _3.MsgBeginUnbondingResponseAmino): _3.MsgBeginUnbondingResponse;
                toAmino(_: _3.MsgBeginUnbondingResponse): _3.MsgBeginUnbondingResponseAmino;
                fromAminoMsg(object: _3.MsgBeginUnbondingResponseAminoMsg): _3.MsgBeginUnbondingResponse;
                fromProtoMsg(message: _3.MsgBeginUnbondingResponseProtoMsg): _3.MsgBeginUnbondingResponse;
                toProto(message: _3.MsgBeginUnbondingResponse): Uint8Array;
                toProtoMsg(message: _3.MsgBeginUnbondingResponse): _3.MsgBeginUnbondingResponseProtoMsg;
            };
            MsgEmergencyUnbond: {
                typeUrl: string;
                encode(message: _3.MsgEmergencyUnbond, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgEmergencyUnbond;
                fromPartial(object: Partial<_3.MsgEmergencyUnbond>): _3.MsgEmergencyUnbond;
                fromAmino(object: _3.MsgEmergencyUnbondAmino): _3.MsgEmergencyUnbond;
                toAmino(message: _3.MsgEmergencyUnbond): _3.MsgEmergencyUnbondAmino;
                fromAminoMsg(object: _3.MsgEmergencyUnbondAminoMsg): _3.MsgEmergencyUnbond;
                fromProtoMsg(message: _3.MsgEmergencyUnbondProtoMsg): _3.MsgEmergencyUnbond;
                toProto(message: _3.MsgEmergencyUnbond): Uint8Array;
                toProtoMsg(message: _3.MsgEmergencyUnbond): _3.MsgEmergencyUnbondProtoMsg;
            };
            MsgEmergencyUnbondResponse: {
                typeUrl: string;
                encode(_: _3.MsgEmergencyUnbondResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgEmergencyUnbondResponse;
                fromPartial(_: Partial<_3.MsgEmergencyUnbondResponse>): _3.MsgEmergencyUnbondResponse;
                fromAmino(_: _3.MsgEmergencyUnbondResponseAmino): _3.MsgEmergencyUnbondResponse;
                toAmino(_: _3.MsgEmergencyUnbondResponse): _3.MsgEmergencyUnbondResponseAmino;
                fromAminoMsg(object: _3.MsgEmergencyUnbondResponseAminoMsg): _3.MsgEmergencyUnbondResponse;
                fromProtoMsg(message: _3.MsgEmergencyUnbondResponseProtoMsg): _3.MsgEmergencyUnbondResponse;
                toProto(message: _3.MsgEmergencyUnbondResponse): Uint8Array;
                toProtoMsg(message: _3.MsgEmergencyUnbondResponse): _3.MsgEmergencyUnbondResponseProtoMsg;
            };
            MsgSponsor: {
                typeUrl: string;
                encode(message: _3.MsgSponsor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgSponsor;
                fromPartial(object: Partial<_3.MsgSponsor>): _3.MsgSponsor;
                fromAmino(object: _3.MsgSponsorAmino): _3.MsgSponsor;
                toAmino(message: _3.MsgSponsor): _3.MsgSponsorAmino;
                fromAminoMsg(object: _3.MsgSponsorAminoMsg): _3.MsgSponsor;
                fromProtoMsg(message: _3.MsgSponsorProtoMsg): _3.MsgSponsor;
                toProto(message: _3.MsgSponsor): Uint8Array;
                toProtoMsg(message: _3.MsgSponsor): _3.MsgSponsorProtoMsg;
            };
            MsgSponsorResponse: {
                typeUrl: string;
                encode(_: _3.MsgSponsorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgSponsorResponse;
                fromPartial(_: Partial<_3.MsgSponsorResponse>): _3.MsgSponsorResponse;
                fromAmino(_: _3.MsgSponsorResponseAmino): _3.MsgSponsorResponse;
                toAmino(_: _3.MsgSponsorResponse): _3.MsgSponsorResponseAmino;
                fromAminoMsg(object: _3.MsgSponsorResponseAminoMsg): _3.MsgSponsorResponse;
                fromProtoMsg(message: _3.MsgSponsorResponseProtoMsg): _3.MsgSponsorResponse;
                toProto(message: _3.MsgSponsorResponse): Uint8Array;
                toProtoMsg(message: _3.MsgSponsorResponse): _3.MsgSponsorResponseProtoMsg;
            };
            MsgGovSetParams: {
                typeUrl: string;
                encode(message: _3.MsgGovSetParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgGovSetParams;
                fromPartial(object: Partial<_3.MsgGovSetParams>): _3.MsgGovSetParams;
                fromAmino(object: _3.MsgGovSetParamsAmino): _3.MsgGovSetParams;
                toAmino(message: _3.MsgGovSetParams): _3.MsgGovSetParamsAmino;
                fromAminoMsg(object: _3.MsgGovSetParamsAminoMsg): _3.MsgGovSetParams;
                fromProtoMsg(message: _3.MsgGovSetParamsProtoMsg): _3.MsgGovSetParams;
                toProto(message: _3.MsgGovSetParams): Uint8Array;
                toProtoMsg(message: _3.MsgGovSetParams): _3.MsgGovSetParamsProtoMsg;
            };
            MsgGovSetParamsResponse: {
                typeUrl: string;
                encode(_: _3.MsgGovSetParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgGovSetParamsResponse;
                fromPartial(_: Partial<_3.MsgGovSetParamsResponse>): _3.MsgGovSetParamsResponse;
                fromAmino(_: _3.MsgGovSetParamsResponseAmino): _3.MsgGovSetParamsResponse;
                toAmino(_: _3.MsgGovSetParamsResponse): _3.MsgGovSetParamsResponseAmino;
                fromAminoMsg(object: _3.MsgGovSetParamsResponseAminoMsg): _3.MsgGovSetParamsResponse;
                fromProtoMsg(message: _3.MsgGovSetParamsResponseProtoMsg): _3.MsgGovSetParamsResponse;
                toProto(message: _3.MsgGovSetParamsResponse): Uint8Array;
                toProtoMsg(message: _3.MsgGovSetParamsResponse): _3.MsgGovSetParamsResponseProtoMsg;
            };
            MsgGovCreatePrograms: {
                typeUrl: string;
                encode(message: _3.MsgGovCreatePrograms, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.MsgGovCreatePrograms;
                fromPartial(object: Partial<_3.MsgGovCreatePrograms>): _3.MsgGovCreatePrograms;
                fromAmino(object: _3.MsgGovCreateProgramsAmino): _3.MsgGovCreatePrograms;
                toAmino(message: _3.MsgGovCreatePrograms): _3.MsgGovCreateProgramsAmino;
                fromAminoMsg(object: _3.MsgGovCreateProgramsAminoMsg): _3.MsgGovCreatePrograms;
                fromProtoMsg(message: _3.MsgGovCreateProgramsProtoMsg): _3.MsgGovCreatePrograms;
                toProto(message: _3.MsgGovCreatePrograms): Uint8Array;
                toProtoMsg(message: _3.MsgGovCreatePrograms): _3.MsgGovCreateProgramsProtoMsg;
            };
            MsgGovCreateProgramsResponse: {
                typeUrl: string;
                encode(_: _3.MsgGovCreateProgramsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.MsgGovCreateProgramsResponse;
                fromPartial(_: Partial<_3.MsgGovCreateProgramsResponse>): _3.MsgGovCreateProgramsResponse;
                fromAmino(_: _3.MsgGovCreateProgramsResponseAmino): _3.MsgGovCreateProgramsResponse;
                toAmino(_: _3.MsgGovCreateProgramsResponse): _3.MsgGovCreateProgramsResponseAmino;
                fromAminoMsg(object: _3.MsgGovCreateProgramsResponseAminoMsg): _3.MsgGovCreateProgramsResponse;
                fromProtoMsg(message: _3.MsgGovCreateProgramsResponseProtoMsg): _3.MsgGovCreateProgramsResponse;
                toProto(message: _3.MsgGovCreateProgramsResponse): Uint8Array;
                toProtoMsg(message: _3.MsgGovCreateProgramsResponse): _3.MsgGovCreateProgramsResponseProtoMsg;
            };
            QueryParams: {
                typeUrl: string;
                encode(_: _2.QueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryParams;
                fromPartial(_: Partial<_2.QueryParams>): _2.QueryParams;
                fromAmino(_: _2.QueryParamsAmino): _2.QueryParams;
                toAmino(_: _2.QueryParams): _2.QueryParamsAmino;
                fromAminoMsg(object: _2.QueryParamsAminoMsg): _2.QueryParams;
                fromProtoMsg(message: _2.QueryParamsProtoMsg): _2.QueryParams;
                toProto(message: _2.QueryParams): Uint8Array;
                toProtoMsg(message: _2.QueryParams): _2.QueryParamsProtoMsg;
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
            QueryPendingRewards: {
                typeUrl: string;
                encode(message: _2.QueryPendingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryPendingRewards;
                fromPartial(object: Partial<_2.QueryPendingRewards>): _2.QueryPendingRewards;
                fromAmino(object: _2.QueryPendingRewardsAmino): _2.QueryPendingRewards;
                toAmino(message: _2.QueryPendingRewards): _2.QueryPendingRewardsAmino;
                fromAminoMsg(object: _2.QueryPendingRewardsAminoMsg): _2.QueryPendingRewards;
                fromProtoMsg(message: _2.QueryPendingRewardsProtoMsg): _2.QueryPendingRewards;
                toProto(message: _2.QueryPendingRewards): Uint8Array;
                toProtoMsg(message: _2.QueryPendingRewards): _2.QueryPendingRewardsProtoMsg;
            };
            QueryPendingRewardsResponse: {
                typeUrl: string;
                encode(message: _2.QueryPendingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryPendingRewardsResponse;
                fromPartial(object: Partial<_2.QueryPendingRewardsResponse>): _2.QueryPendingRewardsResponse;
                fromAmino(object: _2.QueryPendingRewardsResponseAmino): _2.QueryPendingRewardsResponse;
                toAmino(message: _2.QueryPendingRewardsResponse): _2.QueryPendingRewardsResponseAmino;
                fromAminoMsg(object: _2.QueryPendingRewardsResponseAminoMsg): _2.QueryPendingRewardsResponse;
                fromProtoMsg(message: _2.QueryPendingRewardsResponseProtoMsg): _2.QueryPendingRewardsResponse;
                toProto(message: _2.QueryPendingRewardsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryPendingRewardsResponse): _2.QueryPendingRewardsResponseProtoMsg;
            };
            QueryAccountBonds: {
                typeUrl: string;
                encode(message: _2.QueryAccountBonds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAccountBonds;
                fromPartial(object: Partial<_2.QueryAccountBonds>): _2.QueryAccountBonds;
                fromAmino(object: _2.QueryAccountBondsAmino): _2.QueryAccountBonds;
                toAmino(message: _2.QueryAccountBonds): _2.QueryAccountBondsAmino;
                fromAminoMsg(object: _2.QueryAccountBondsAminoMsg): _2.QueryAccountBonds;
                fromProtoMsg(message: _2.QueryAccountBondsProtoMsg): _2.QueryAccountBonds;
                toProto(message: _2.QueryAccountBonds): Uint8Array;
                toProtoMsg(message: _2.QueryAccountBonds): _2.QueryAccountBondsProtoMsg;
            };
            QueryAccountBondsResponse: {
                typeUrl: string;
                encode(message: _2.QueryAccountBondsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryAccountBondsResponse;
                fromPartial(object: Partial<_2.QueryAccountBondsResponse>): _2.QueryAccountBondsResponse;
                fromAmino(object: _2.QueryAccountBondsResponseAmino): _2.QueryAccountBondsResponse;
                toAmino(message: _2.QueryAccountBondsResponse): _2.QueryAccountBondsResponseAmino;
                fromAminoMsg(object: _2.QueryAccountBondsResponseAminoMsg): _2.QueryAccountBondsResponse;
                fromProtoMsg(message: _2.QueryAccountBondsResponseProtoMsg): _2.QueryAccountBondsResponse;
                toProto(message: _2.QueryAccountBondsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryAccountBondsResponse): _2.QueryAccountBondsResponseProtoMsg;
            };
            QueryTotalBonded: {
                typeUrl: string;
                encode(message: _2.QueryTotalBonded, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryTotalBonded;
                fromPartial(object: Partial<_2.QueryTotalBonded>): _2.QueryTotalBonded;
                fromAmino(object: _2.QueryTotalBondedAmino): _2.QueryTotalBonded;
                toAmino(message: _2.QueryTotalBonded): _2.QueryTotalBondedAmino;
                fromAminoMsg(object: _2.QueryTotalBondedAminoMsg): _2.QueryTotalBonded;
                fromProtoMsg(message: _2.QueryTotalBondedProtoMsg): _2.QueryTotalBonded;
                toProto(message: _2.QueryTotalBonded): Uint8Array;
                toProtoMsg(message: _2.QueryTotalBonded): _2.QueryTotalBondedProtoMsg;
            };
            QueryTotalBondedResponse: {
                typeUrl: string;
                encode(message: _2.QueryTotalBondedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryTotalBondedResponse;
                fromPartial(object: Partial<_2.QueryTotalBondedResponse>): _2.QueryTotalBondedResponse;
                fromAmino(object: _2.QueryTotalBondedResponseAmino): _2.QueryTotalBondedResponse;
                toAmino(message: _2.QueryTotalBondedResponse): _2.QueryTotalBondedResponseAmino;
                fromAminoMsg(object: _2.QueryTotalBondedResponseAminoMsg): _2.QueryTotalBondedResponse;
                fromProtoMsg(message: _2.QueryTotalBondedResponseProtoMsg): _2.QueryTotalBondedResponse;
                toProto(message: _2.QueryTotalBondedResponse): Uint8Array;
                toProtoMsg(message: _2.QueryTotalBondedResponse): _2.QueryTotalBondedResponseProtoMsg;
            };
            QueryTotalUnbonding: {
                typeUrl: string;
                encode(message: _2.QueryTotalUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryTotalUnbonding;
                fromPartial(object: Partial<_2.QueryTotalUnbonding>): _2.QueryTotalUnbonding;
                fromAmino(object: _2.QueryTotalUnbondingAmino): _2.QueryTotalUnbonding;
                toAmino(message: _2.QueryTotalUnbonding): _2.QueryTotalUnbondingAmino;
                fromAminoMsg(object: _2.QueryTotalUnbondingAminoMsg): _2.QueryTotalUnbonding;
                fromProtoMsg(message: _2.QueryTotalUnbondingProtoMsg): _2.QueryTotalUnbonding;
                toProto(message: _2.QueryTotalUnbonding): Uint8Array;
                toProtoMsg(message: _2.QueryTotalUnbonding): _2.QueryTotalUnbondingProtoMsg;
            };
            QueryTotalUnbondingResponse: {
                typeUrl: string;
                encode(message: _2.QueryTotalUnbondingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryTotalUnbondingResponse;
                fromPartial(object: Partial<_2.QueryTotalUnbondingResponse>): _2.QueryTotalUnbondingResponse;
                fromAmino(object: _2.QueryTotalUnbondingResponseAmino): _2.QueryTotalUnbondingResponse;
                toAmino(message: _2.QueryTotalUnbondingResponse): _2.QueryTotalUnbondingResponseAmino;
                fromAminoMsg(object: _2.QueryTotalUnbondingResponseAminoMsg): _2.QueryTotalUnbondingResponse;
                fromProtoMsg(message: _2.QueryTotalUnbondingResponseProtoMsg): _2.QueryTotalUnbondingResponse;
                toProto(message: _2.QueryTotalUnbondingResponse): Uint8Array;
                toProtoMsg(message: _2.QueryTotalUnbondingResponse): _2.QueryTotalUnbondingResponseProtoMsg;
            };
            QueryUpcomingIncentivePrograms: {
                typeUrl: string;
                encode(_: _2.QueryUpcomingIncentivePrograms, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryUpcomingIncentivePrograms;
                fromPartial(_: Partial<_2.QueryUpcomingIncentivePrograms>): _2.QueryUpcomingIncentivePrograms;
                fromAmino(_: _2.QueryUpcomingIncentiveProgramsAmino): _2.QueryUpcomingIncentivePrograms;
                toAmino(_: _2.QueryUpcomingIncentivePrograms): _2.QueryUpcomingIncentiveProgramsAmino;
                fromAminoMsg(object: _2.QueryUpcomingIncentiveProgramsAminoMsg): _2.QueryUpcomingIncentivePrograms;
                fromProtoMsg(message: _2.QueryUpcomingIncentiveProgramsProtoMsg): _2.QueryUpcomingIncentivePrograms;
                toProto(message: _2.QueryUpcomingIncentivePrograms): Uint8Array;
                toProtoMsg(message: _2.QueryUpcomingIncentivePrograms): _2.QueryUpcomingIncentiveProgramsProtoMsg;
            };
            QueryUpcomingIncentiveProgramsResponse: {
                typeUrl: string;
                encode(message: _2.QueryUpcomingIncentiveProgramsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryUpcomingIncentiveProgramsResponse;
                fromPartial(object: Partial<_2.QueryUpcomingIncentiveProgramsResponse>): _2.QueryUpcomingIncentiveProgramsResponse;
                fromAmino(object: _2.QueryUpcomingIncentiveProgramsResponseAmino): _2.QueryUpcomingIncentiveProgramsResponse;
                toAmino(message: _2.QueryUpcomingIncentiveProgramsResponse): _2.QueryUpcomingIncentiveProgramsResponseAmino;
                fromAminoMsg(object: _2.QueryUpcomingIncentiveProgramsResponseAminoMsg): _2.QueryUpcomingIncentiveProgramsResponse;
                fromProtoMsg(message: _2.QueryUpcomingIncentiveProgramsResponseProtoMsg): _2.QueryUpcomingIncentiveProgramsResponse;
                toProto(message: _2.QueryUpcomingIncentiveProgramsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryUpcomingIncentiveProgramsResponse): _2.QueryUpcomingIncentiveProgramsResponseProtoMsg;
            };
            QueryOngoingIncentivePrograms: {
                typeUrl: string;
                encode(_: _2.QueryOngoingIncentivePrograms, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryOngoingIncentivePrograms;
                fromPartial(_: Partial<_2.QueryOngoingIncentivePrograms>): _2.QueryOngoingIncentivePrograms;
                fromAmino(_: _2.QueryOngoingIncentiveProgramsAmino): _2.QueryOngoingIncentivePrograms;
                toAmino(_: _2.QueryOngoingIncentivePrograms): _2.QueryOngoingIncentiveProgramsAmino;
                fromAminoMsg(object: _2.QueryOngoingIncentiveProgramsAminoMsg): _2.QueryOngoingIncentivePrograms;
                fromProtoMsg(message: _2.QueryOngoingIncentiveProgramsProtoMsg): _2.QueryOngoingIncentivePrograms;
                toProto(message: _2.QueryOngoingIncentivePrograms): Uint8Array;
                toProtoMsg(message: _2.QueryOngoingIncentivePrograms): _2.QueryOngoingIncentiveProgramsProtoMsg;
            };
            QueryOngoingIncentiveProgramsResponse: {
                typeUrl: string;
                encode(message: _2.QueryOngoingIncentiveProgramsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryOngoingIncentiveProgramsResponse;
                fromPartial(object: Partial<_2.QueryOngoingIncentiveProgramsResponse>): _2.QueryOngoingIncentiveProgramsResponse;
                fromAmino(object: _2.QueryOngoingIncentiveProgramsResponseAmino): _2.QueryOngoingIncentiveProgramsResponse;
                toAmino(message: _2.QueryOngoingIncentiveProgramsResponse): _2.QueryOngoingIncentiveProgramsResponseAmino;
                fromAminoMsg(object: _2.QueryOngoingIncentiveProgramsResponseAminoMsg): _2.QueryOngoingIncentiveProgramsResponse;
                fromProtoMsg(message: _2.QueryOngoingIncentiveProgramsResponseProtoMsg): _2.QueryOngoingIncentiveProgramsResponse;
                toProto(message: _2.QueryOngoingIncentiveProgramsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryOngoingIncentiveProgramsResponse): _2.QueryOngoingIncentiveProgramsResponseProtoMsg;
            };
            QueryCompletedIncentivePrograms: {
                typeUrl: string;
                encode(_: _2.QueryCompletedIncentivePrograms, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryCompletedIncentivePrograms;
                fromPartial(_: Partial<_2.QueryCompletedIncentivePrograms>): _2.QueryCompletedIncentivePrograms;
                fromAmino(_: _2.QueryCompletedIncentiveProgramsAmino): _2.QueryCompletedIncentivePrograms;
                toAmino(_: _2.QueryCompletedIncentivePrograms): _2.QueryCompletedIncentiveProgramsAmino;
                fromAminoMsg(object: _2.QueryCompletedIncentiveProgramsAminoMsg): _2.QueryCompletedIncentivePrograms;
                fromProtoMsg(message: _2.QueryCompletedIncentiveProgramsProtoMsg): _2.QueryCompletedIncentivePrograms;
                toProto(message: _2.QueryCompletedIncentivePrograms): Uint8Array;
                toProtoMsg(message: _2.QueryCompletedIncentivePrograms): _2.QueryCompletedIncentiveProgramsProtoMsg;
            };
            QueryCompletedIncentiveProgramsResponse: {
                typeUrl: string;
                encode(message: _2.QueryCompletedIncentiveProgramsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryCompletedIncentiveProgramsResponse;
                fromPartial(object: Partial<_2.QueryCompletedIncentiveProgramsResponse>): _2.QueryCompletedIncentiveProgramsResponse;
                fromAmino(object: _2.QueryCompletedIncentiveProgramsResponseAmino): _2.QueryCompletedIncentiveProgramsResponse;
                toAmino(message: _2.QueryCompletedIncentiveProgramsResponse): _2.QueryCompletedIncentiveProgramsResponseAmino;
                fromAminoMsg(object: _2.QueryCompletedIncentiveProgramsResponseAminoMsg): _2.QueryCompletedIncentiveProgramsResponse;
                fromProtoMsg(message: _2.QueryCompletedIncentiveProgramsResponseProtoMsg): _2.QueryCompletedIncentiveProgramsResponse;
                toProto(message: _2.QueryCompletedIncentiveProgramsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryCompletedIncentiveProgramsResponse): _2.QueryCompletedIncentiveProgramsResponseProtoMsg;
            };
            QueryIncentiveProgram: {
                typeUrl: string;
                encode(message: _2.QueryIncentiveProgram, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryIncentiveProgram;
                fromPartial(object: Partial<_2.QueryIncentiveProgram>): _2.QueryIncentiveProgram;
                fromAmino(object: _2.QueryIncentiveProgramAmino): _2.QueryIncentiveProgram;
                toAmino(message: _2.QueryIncentiveProgram): _2.QueryIncentiveProgramAmino;
                fromAminoMsg(object: _2.QueryIncentiveProgramAminoMsg): _2.QueryIncentiveProgram;
                fromProtoMsg(message: _2.QueryIncentiveProgramProtoMsg): _2.QueryIncentiveProgram;
                toProto(message: _2.QueryIncentiveProgram): Uint8Array;
                toProtoMsg(message: _2.QueryIncentiveProgram): _2.QueryIncentiveProgramProtoMsg;
            };
            QueryIncentiveProgramResponse: {
                typeUrl: string;
                encode(message: _2.QueryIncentiveProgramResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryIncentiveProgramResponse;
                fromPartial(object: Partial<_2.QueryIncentiveProgramResponse>): _2.QueryIncentiveProgramResponse;
                fromAmino(object: _2.QueryIncentiveProgramResponseAmino): _2.QueryIncentiveProgramResponse;
                toAmino(message: _2.QueryIncentiveProgramResponse): _2.QueryIncentiveProgramResponseAmino;
                fromAminoMsg(object: _2.QueryIncentiveProgramResponseAminoMsg): _2.QueryIncentiveProgramResponse;
                fromProtoMsg(message: _2.QueryIncentiveProgramResponseProtoMsg): _2.QueryIncentiveProgramResponse;
                toProto(message: _2.QueryIncentiveProgramResponse): Uint8Array;
                toProtoMsg(message: _2.QueryIncentiveProgramResponse): _2.QueryIncentiveProgramResponseProtoMsg;
            };
            QueryCurrentRates: {
                typeUrl: string;
                encode(message: _2.QueryCurrentRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryCurrentRates;
                fromPartial(object: Partial<_2.QueryCurrentRates>): _2.QueryCurrentRates;
                fromAmino(object: _2.QueryCurrentRatesAmino): _2.QueryCurrentRates;
                toAmino(message: _2.QueryCurrentRates): _2.QueryCurrentRatesAmino;
                fromAminoMsg(object: _2.QueryCurrentRatesAminoMsg): _2.QueryCurrentRates;
                fromProtoMsg(message: _2.QueryCurrentRatesProtoMsg): _2.QueryCurrentRates;
                toProto(message: _2.QueryCurrentRates): Uint8Array;
                toProtoMsg(message: _2.QueryCurrentRates): _2.QueryCurrentRatesProtoMsg;
            };
            QueryCurrentRatesResponse: {
                typeUrl: string;
                encode(message: _2.QueryCurrentRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryCurrentRatesResponse;
                fromPartial(object: Partial<_2.QueryCurrentRatesResponse>): _2.QueryCurrentRatesResponse;
                fromAmino(object: _2.QueryCurrentRatesResponseAmino): _2.QueryCurrentRatesResponse;
                toAmino(message: _2.QueryCurrentRatesResponse): _2.QueryCurrentRatesResponseAmino;
                fromAminoMsg(object: _2.QueryCurrentRatesResponseAminoMsg): _2.QueryCurrentRatesResponse;
                fromProtoMsg(message: _2.QueryCurrentRatesResponseProtoMsg): _2.QueryCurrentRatesResponse;
                toProto(message: _2.QueryCurrentRatesResponse): Uint8Array;
                toProtoMsg(message: _2.QueryCurrentRatesResponse): _2.QueryCurrentRatesResponseProtoMsg;
            };
            QueryLastRewardTime: {
                typeUrl: string;
                encode(_: _2.QueryLastRewardTime, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _2.QueryLastRewardTime;
                fromPartial(_: Partial<_2.QueryLastRewardTime>): _2.QueryLastRewardTime;
                fromAmino(_: _2.QueryLastRewardTimeAmino): _2.QueryLastRewardTime;
                toAmino(_: _2.QueryLastRewardTime): _2.QueryLastRewardTimeAmino;
                fromAminoMsg(object: _2.QueryLastRewardTimeAminoMsg): _2.QueryLastRewardTime;
                fromProtoMsg(message: _2.QueryLastRewardTimeProtoMsg): _2.QueryLastRewardTime;
                toProto(message: _2.QueryLastRewardTime): Uint8Array;
                toProtoMsg(message: _2.QueryLastRewardTime): _2.QueryLastRewardTimeProtoMsg;
            };
            QueryLastRewardTimeResponse: {
                typeUrl: string;
                encode(message: _2.QueryLastRewardTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryLastRewardTimeResponse;
                fromPartial(object: Partial<_2.QueryLastRewardTimeResponse>): _2.QueryLastRewardTimeResponse;
                fromAmino(object: _2.QueryLastRewardTimeResponseAmino): _2.QueryLastRewardTimeResponse;
                toAmino(message: _2.QueryLastRewardTimeResponse): _2.QueryLastRewardTimeResponseAmino;
                fromAminoMsg(object: _2.QueryLastRewardTimeResponseAminoMsg): _2.QueryLastRewardTimeResponse;
                fromProtoMsg(message: _2.QueryLastRewardTimeResponseProtoMsg): _2.QueryLastRewardTimeResponse;
                toProto(message: _2.QueryLastRewardTimeResponse): Uint8Array;
                toProtoMsg(message: _2.QueryLastRewardTimeResponse): _2.QueryLastRewardTimeResponseProtoMsg;
            };
            QueryActualRates: {
                typeUrl: string;
                encode(message: _2.QueryActualRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryActualRates;
                fromPartial(object: Partial<_2.QueryActualRates>): _2.QueryActualRates;
                fromAmino(object: _2.QueryActualRatesAmino): _2.QueryActualRates;
                toAmino(message: _2.QueryActualRates): _2.QueryActualRatesAmino;
                fromAminoMsg(object: _2.QueryActualRatesAminoMsg): _2.QueryActualRates;
                fromProtoMsg(message: _2.QueryActualRatesProtoMsg): _2.QueryActualRates;
                toProto(message: _2.QueryActualRates): Uint8Array;
                toProtoMsg(message: _2.QueryActualRates): _2.QueryActualRatesProtoMsg;
            };
            QueryActualRatesResponse: {
                typeUrl: string;
                encode(message: _2.QueryActualRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.QueryActualRatesResponse;
                fromPartial(object: Partial<_2.QueryActualRatesResponse>): _2.QueryActualRatesResponse;
                fromAmino(object: _2.QueryActualRatesResponseAmino): _2.QueryActualRatesResponse;
                toAmino(message: _2.QueryActualRatesResponse): _2.QueryActualRatesResponseAmino;
                fromAminoMsg(object: _2.QueryActualRatesResponseAminoMsg): _2.QueryActualRatesResponse;
                fromProtoMsg(message: _2.QueryActualRatesResponseProtoMsg): _2.QueryActualRatesResponse;
                toProto(message: _2.QueryActualRatesResponse): Uint8Array;
                toProtoMsg(message: _2.QueryActualRatesResponse): _2.QueryActualRatesResponseProtoMsg;
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
            IncentiveProgram: {
                typeUrl: string;
                encode(message: _1.IncentiveProgram, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.IncentiveProgram;
                fromPartial(object: Partial<_1.IncentiveProgram>): _1.IncentiveProgram;
                fromAmino(object: _1.IncentiveProgramAmino): _1.IncentiveProgram;
                toAmino(message: _1.IncentiveProgram): _1.IncentiveProgramAmino;
                fromAminoMsg(object: _1.IncentiveProgramAminoMsg): _1.IncentiveProgram;
                fromProtoMsg(message: _1.IncentiveProgramProtoMsg): _1.IncentiveProgram;
                toProto(message: _1.IncentiveProgram): Uint8Array;
                toProtoMsg(message: _1.IncentiveProgram): _1.IncentiveProgramProtoMsg;
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
            Bond: {
                typeUrl: string;
                encode(message: _0.Bond, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Bond;
                fromPartial(object: Partial<_0.Bond>): _0.Bond;
                fromAmino(object: _0.BondAmino): _0.Bond;
                toAmino(message: _0.Bond): _0.BondAmino;
                fromAminoMsg(object: _0.BondAminoMsg): _0.Bond;
                fromProtoMsg(message: _0.BondProtoMsg): _0.Bond;
                toProto(message: _0.Bond): Uint8Array;
                toProtoMsg(message: _0.Bond): _0.BondProtoMsg;
            };
            RewardTracker: {
                typeUrl: string;
                encode(message: _0.RewardTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.RewardTracker;
                fromPartial(object: Partial<_0.RewardTracker>): _0.RewardTracker;
                fromAmino(object: _0.RewardTrackerAmino): _0.RewardTracker;
                toAmino(message: _0.RewardTracker): _0.RewardTrackerAmino;
                fromAminoMsg(object: _0.RewardTrackerAminoMsg): _0.RewardTracker;
                fromProtoMsg(message: _0.RewardTrackerProtoMsg): _0.RewardTracker;
                toProto(message: _0.RewardTracker): Uint8Array;
                toProtoMsg(message: _0.RewardTracker): _0.RewardTrackerProtoMsg;
            };
            RewardAccumulator: {
                typeUrl: string;
                encode(message: _0.RewardAccumulator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.RewardAccumulator;
                fromPartial(object: Partial<_0.RewardAccumulator>): _0.RewardAccumulator;
                fromAmino(object: _0.RewardAccumulatorAmino): _0.RewardAccumulator;
                toAmino(message: _0.RewardAccumulator): _0.RewardAccumulatorAmino;
                fromAminoMsg(object: _0.RewardAccumulatorAminoMsg): _0.RewardAccumulator;
                fromProtoMsg(message: _0.RewardAccumulatorProtoMsg): _0.RewardAccumulator;
                toProto(message: _0.RewardAccumulator): Uint8Array;
                toProtoMsg(message: _0.RewardAccumulator): _0.RewardAccumulatorProtoMsg;
            };
            Unbonding: {
                typeUrl: string;
                encode(message: _0.Unbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Unbonding;
                fromPartial(object: Partial<_0.Unbonding>): _0.Unbonding;
                fromAmino(object: _0.UnbondingAmino): _0.Unbonding;
                toAmino(message: _0.Unbonding): _0.UnbondingAmino;
                fromAminoMsg(object: _0.UnbondingAminoMsg): _0.Unbonding;
                fromProtoMsg(message: _0.UnbondingProtoMsg): _0.Unbonding;
                toProto(message: _0.Unbonding): Uint8Array;
                toProtoMsg(message: _0.Unbonding): _0.UnbondingProtoMsg;
            };
            AccountUnbondings: {
                typeUrl: string;
                encode(message: _0.AccountUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.AccountUnbondings;
                fromPartial(object: Partial<_0.AccountUnbondings>): _0.AccountUnbondings;
                fromAmino(object: _0.AccountUnbondingsAmino): _0.AccountUnbondings;
                toAmino(message: _0.AccountUnbondings): _0.AccountUnbondingsAmino;
                fromAminoMsg(object: _0.AccountUnbondingsAminoMsg): _0.AccountUnbondings;
                fromProtoMsg(message: _0.AccountUnbondingsProtoMsg): _0.AccountUnbondings;
                toProto(message: _0.AccountUnbondings): Uint8Array;
                toProtoMsg(message: _0.AccountUnbondings): _0.AccountUnbondingsProtoMsg;
            };
        };
    }
    namespace leverage {
        const v1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            QueryClientImpl: typeof _154.QueryClientImpl;
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
            LCDQueryClient: typeof _149.LCDQueryClient;
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
                    toAmino: (message: _8.MsgSupply) => _8.MsgSupplyAmino;
                    fromAmino: (object: _8.MsgSupplyAmino) => _8.MsgSupply;
                };
                "/umee.leverage.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _8.MsgWithdraw) => _8.MsgWithdrawAmino;
                    fromAmino: (object: _8.MsgWithdrawAmino) => _8.MsgWithdraw;
                };
                "/umee.leverage.v1.MsgMaxWithdraw": {
                    aminoType: string;
                    toAmino: (message: _8.MsgMaxWithdraw) => _8.MsgMaxWithdrawAmino;
                    fromAmino: (object: _8.MsgMaxWithdrawAmino) => _8.MsgMaxWithdraw;
                };
                "/umee.leverage.v1.MsgCollateralize": {
                    aminoType: string;
                    toAmino: (message: _8.MsgCollateralize) => _8.MsgCollateralizeAmino;
                    fromAmino: (object: _8.MsgCollateralizeAmino) => _8.MsgCollateralize;
                };
                "/umee.leverage.v1.MsgDecollateralize": {
                    aminoType: string;
                    toAmino: (message: _8.MsgDecollateralize) => _8.MsgDecollateralizeAmino;
                    fromAmino: (object: _8.MsgDecollateralizeAmino) => _8.MsgDecollateralize;
                };
                "/umee.leverage.v1.MsgBorrow": {
                    aminoType: string;
                    toAmino: (message: _8.MsgBorrow) => _8.MsgBorrowAmino;
                    fromAmino: (object: _8.MsgBorrowAmino) => _8.MsgBorrow;
                };
                "/umee.leverage.v1.MsgMaxBorrow": {
                    aminoType: string;
                    toAmino: (message: _8.MsgMaxBorrow) => _8.MsgMaxBorrowAmino;
                    fromAmino: (object: _8.MsgMaxBorrowAmino) => _8.MsgMaxBorrow;
                };
                "/umee.leverage.v1.MsgRepay": {
                    aminoType: string;
                    toAmino: (message: _8.MsgRepay) => _8.MsgRepayAmino;
                    fromAmino: (object: _8.MsgRepayAmino) => _8.MsgRepay;
                };
                "/umee.leverage.v1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: (message: _8.MsgLiquidate) => _8.MsgLiquidateAmino;
                    fromAmino: (object: _8.MsgLiquidateAmino) => _8.MsgLiquidate;
                };
                "/umee.leverage.v1.MsgLeveragedLiquidate": {
                    aminoType: string;
                    toAmino: (message: _8.MsgLeveragedLiquidate) => _8.MsgLeveragedLiquidateAmino;
                    fromAmino: (object: _8.MsgLeveragedLiquidateAmino) => _8.MsgLeveragedLiquidate;
                };
                "/umee.leverage.v1.MsgSupplyCollateral": {
                    aminoType: string;
                    toAmino: (message: _8.MsgSupplyCollateral) => _8.MsgSupplyCollateralAmino;
                    fromAmino: (object: _8.MsgSupplyCollateralAmino) => _8.MsgSupplyCollateral;
                };
                "/umee.leverage.v1.MsgGovUpdateRegistry": {
                    aminoType: string;
                    toAmino: (message: _8.MsgGovUpdateRegistry) => _8.MsgGovUpdateRegistryAmino;
                    fromAmino: (object: _8.MsgGovUpdateRegistryAmino) => _8.MsgGovUpdateRegistry;
                };
            };
            MsgSupply: {
                typeUrl: string;
                encode(message: _8.MsgSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgSupply;
                fromPartial(object: Partial<_8.MsgSupply>): _8.MsgSupply;
                fromAmino(object: _8.MsgSupplyAmino): _8.MsgSupply;
                toAmino(message: _8.MsgSupply): _8.MsgSupplyAmino;
                fromAminoMsg(object: _8.MsgSupplyAminoMsg): _8.MsgSupply;
                fromProtoMsg(message: _8.MsgSupplyProtoMsg): _8.MsgSupply;
                toProto(message: _8.MsgSupply): Uint8Array;
                toProtoMsg(message: _8.MsgSupply): _8.MsgSupplyProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _8.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgWithdraw;
                fromPartial(object: Partial<_8.MsgWithdraw>): _8.MsgWithdraw;
                fromAmino(object: _8.MsgWithdrawAmino): _8.MsgWithdraw;
                toAmino(message: _8.MsgWithdraw): _8.MsgWithdrawAmino;
                fromAminoMsg(object: _8.MsgWithdrawAminoMsg): _8.MsgWithdraw;
                fromProtoMsg(message: _8.MsgWithdrawProtoMsg): _8.MsgWithdraw;
                toProto(message: _8.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _8.MsgWithdraw): _8.MsgWithdrawProtoMsg;
            };
            MsgMaxWithdraw: {
                typeUrl: string;
                encode(message: _8.MsgMaxWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgMaxWithdraw;
                fromPartial(object: Partial<_8.MsgMaxWithdraw>): _8.MsgMaxWithdraw;
                fromAmino(object: _8.MsgMaxWithdrawAmino): _8.MsgMaxWithdraw;
                toAmino(message: _8.MsgMaxWithdraw): _8.MsgMaxWithdrawAmino;
                fromAminoMsg(object: _8.MsgMaxWithdrawAminoMsg): _8.MsgMaxWithdraw;
                fromProtoMsg(message: _8.MsgMaxWithdrawProtoMsg): _8.MsgMaxWithdraw;
                toProto(message: _8.MsgMaxWithdraw): Uint8Array;
                toProtoMsg(message: _8.MsgMaxWithdraw): _8.MsgMaxWithdrawProtoMsg;
            };
            MsgCollateralize: {
                typeUrl: string;
                encode(message: _8.MsgCollateralize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgCollateralize;
                fromPartial(object: Partial<_8.MsgCollateralize>): _8.MsgCollateralize;
                fromAmino(object: _8.MsgCollateralizeAmino): _8.MsgCollateralize;
                toAmino(message: _8.MsgCollateralize): _8.MsgCollateralizeAmino;
                fromAminoMsg(object: _8.MsgCollateralizeAminoMsg): _8.MsgCollateralize;
                fromProtoMsg(message: _8.MsgCollateralizeProtoMsg): _8.MsgCollateralize;
                toProto(message: _8.MsgCollateralize): Uint8Array;
                toProtoMsg(message: _8.MsgCollateralize): _8.MsgCollateralizeProtoMsg;
            };
            MsgDecollateralize: {
                typeUrl: string;
                encode(message: _8.MsgDecollateralize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgDecollateralize;
                fromPartial(object: Partial<_8.MsgDecollateralize>): _8.MsgDecollateralize;
                fromAmino(object: _8.MsgDecollateralizeAmino): _8.MsgDecollateralize;
                toAmino(message: _8.MsgDecollateralize): _8.MsgDecollateralizeAmino;
                fromAminoMsg(object: _8.MsgDecollateralizeAminoMsg): _8.MsgDecollateralize;
                fromProtoMsg(message: _8.MsgDecollateralizeProtoMsg): _8.MsgDecollateralize;
                toProto(message: _8.MsgDecollateralize): Uint8Array;
                toProtoMsg(message: _8.MsgDecollateralize): _8.MsgDecollateralizeProtoMsg;
            };
            MsgBorrow: {
                typeUrl: string;
                encode(message: _8.MsgBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgBorrow;
                fromPartial(object: Partial<_8.MsgBorrow>): _8.MsgBorrow;
                fromAmino(object: _8.MsgBorrowAmino): _8.MsgBorrow;
                toAmino(message: _8.MsgBorrow): _8.MsgBorrowAmino;
                fromAminoMsg(object: _8.MsgBorrowAminoMsg): _8.MsgBorrow;
                fromProtoMsg(message: _8.MsgBorrowProtoMsg): _8.MsgBorrow;
                toProto(message: _8.MsgBorrow): Uint8Array;
                toProtoMsg(message: _8.MsgBorrow): _8.MsgBorrowProtoMsg;
            };
            MsgMaxBorrow: {
                typeUrl: string;
                encode(message: _8.MsgMaxBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgMaxBorrow;
                fromPartial(object: Partial<_8.MsgMaxBorrow>): _8.MsgMaxBorrow;
                fromAmino(object: _8.MsgMaxBorrowAmino): _8.MsgMaxBorrow;
                toAmino(message: _8.MsgMaxBorrow): _8.MsgMaxBorrowAmino;
                fromAminoMsg(object: _8.MsgMaxBorrowAminoMsg): _8.MsgMaxBorrow;
                fromProtoMsg(message: _8.MsgMaxBorrowProtoMsg): _8.MsgMaxBorrow;
                toProto(message: _8.MsgMaxBorrow): Uint8Array;
                toProtoMsg(message: _8.MsgMaxBorrow): _8.MsgMaxBorrowProtoMsg;
            };
            MsgRepay: {
                typeUrl: string;
                encode(message: _8.MsgRepay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgRepay;
                fromPartial(object: Partial<_8.MsgRepay>): _8.MsgRepay;
                fromAmino(object: _8.MsgRepayAmino): _8.MsgRepay;
                toAmino(message: _8.MsgRepay): _8.MsgRepayAmino;
                fromAminoMsg(object: _8.MsgRepayAminoMsg): _8.MsgRepay;
                fromProtoMsg(message: _8.MsgRepayProtoMsg): _8.MsgRepay;
                toProto(message: _8.MsgRepay): Uint8Array;
                toProtoMsg(message: _8.MsgRepay): _8.MsgRepayProtoMsg;
            };
            MsgLiquidate: {
                typeUrl: string;
                encode(message: _8.MsgLiquidate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgLiquidate;
                fromPartial(object: Partial<_8.MsgLiquidate>): _8.MsgLiquidate;
                fromAmino(object: _8.MsgLiquidateAmino): _8.MsgLiquidate;
                toAmino(message: _8.MsgLiquidate): _8.MsgLiquidateAmino;
                fromAminoMsg(object: _8.MsgLiquidateAminoMsg): _8.MsgLiquidate;
                fromProtoMsg(message: _8.MsgLiquidateProtoMsg): _8.MsgLiquidate;
                toProto(message: _8.MsgLiquidate): Uint8Array;
                toProtoMsg(message: _8.MsgLiquidate): _8.MsgLiquidateProtoMsg;
            };
            MsgLeveragedLiquidate: {
                typeUrl: string;
                encode(message: _8.MsgLeveragedLiquidate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgLeveragedLiquidate;
                fromPartial(object: Partial<_8.MsgLeveragedLiquidate>): _8.MsgLeveragedLiquidate;
                fromAmino(object: _8.MsgLeveragedLiquidateAmino): _8.MsgLeveragedLiquidate;
                toAmino(message: _8.MsgLeveragedLiquidate): _8.MsgLeveragedLiquidateAmino;
                fromAminoMsg(object: _8.MsgLeveragedLiquidateAminoMsg): _8.MsgLeveragedLiquidate;
                fromProtoMsg(message: _8.MsgLeveragedLiquidateProtoMsg): _8.MsgLeveragedLiquidate;
                toProto(message: _8.MsgLeveragedLiquidate): Uint8Array;
                toProtoMsg(message: _8.MsgLeveragedLiquidate): _8.MsgLeveragedLiquidateProtoMsg;
            };
            MsgSupplyCollateral: {
                typeUrl: string;
                encode(message: _8.MsgSupplyCollateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgSupplyCollateral;
                fromPartial(object: Partial<_8.MsgSupplyCollateral>): _8.MsgSupplyCollateral;
                fromAmino(object: _8.MsgSupplyCollateralAmino): _8.MsgSupplyCollateral;
                toAmino(message: _8.MsgSupplyCollateral): _8.MsgSupplyCollateralAmino;
                fromAminoMsg(object: _8.MsgSupplyCollateralAminoMsg): _8.MsgSupplyCollateral;
                fromProtoMsg(message: _8.MsgSupplyCollateralProtoMsg): _8.MsgSupplyCollateral;
                toProto(message: _8.MsgSupplyCollateral): Uint8Array;
                toProtoMsg(message: _8.MsgSupplyCollateral): _8.MsgSupplyCollateralProtoMsg;
            };
            MsgSupplyResponse: {
                typeUrl: string;
                encode(message: _8.MsgSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgSupplyResponse;
                fromPartial(object: Partial<_8.MsgSupplyResponse>): _8.MsgSupplyResponse;
                fromAmino(object: _8.MsgSupplyResponseAmino): _8.MsgSupplyResponse;
                toAmino(message: _8.MsgSupplyResponse): _8.MsgSupplyResponseAmino;
                fromAminoMsg(object: _8.MsgSupplyResponseAminoMsg): _8.MsgSupplyResponse;
                fromProtoMsg(message: _8.MsgSupplyResponseProtoMsg): _8.MsgSupplyResponse;
                toProto(message: _8.MsgSupplyResponse): Uint8Array;
                toProtoMsg(message: _8.MsgSupplyResponse): _8.MsgSupplyResponseProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(message: _8.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgWithdrawResponse;
                fromPartial(object: Partial<_8.MsgWithdrawResponse>): _8.MsgWithdrawResponse;
                fromAmino(object: _8.MsgWithdrawResponseAmino): _8.MsgWithdrawResponse;
                toAmino(message: _8.MsgWithdrawResponse): _8.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _8.MsgWithdrawResponseAminoMsg): _8.MsgWithdrawResponse;
                fromProtoMsg(message: _8.MsgWithdrawResponseProtoMsg): _8.MsgWithdrawResponse;
                toProto(message: _8.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _8.MsgWithdrawResponse): _8.MsgWithdrawResponseProtoMsg;
            };
            MsgMaxWithdrawResponse: {
                typeUrl: string;
                encode(message: _8.MsgMaxWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgMaxWithdrawResponse;
                fromPartial(object: Partial<_8.MsgMaxWithdrawResponse>): _8.MsgMaxWithdrawResponse;
                fromAmino(object: _8.MsgMaxWithdrawResponseAmino): _8.MsgMaxWithdrawResponse;
                toAmino(message: _8.MsgMaxWithdrawResponse): _8.MsgMaxWithdrawResponseAmino;
                fromAminoMsg(object: _8.MsgMaxWithdrawResponseAminoMsg): _8.MsgMaxWithdrawResponse;
                fromProtoMsg(message: _8.MsgMaxWithdrawResponseProtoMsg): _8.MsgMaxWithdrawResponse;
                toProto(message: _8.MsgMaxWithdrawResponse): Uint8Array;
                toProtoMsg(message: _8.MsgMaxWithdrawResponse): _8.MsgMaxWithdrawResponseProtoMsg;
            };
            MsgCollateralizeResponse: {
                typeUrl: string;
                encode(_: _8.MsgCollateralizeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgCollateralizeResponse;
                fromPartial(_: Partial<_8.MsgCollateralizeResponse>): _8.MsgCollateralizeResponse;
                fromAmino(_: _8.MsgCollateralizeResponseAmino): _8.MsgCollateralizeResponse;
                toAmino(_: _8.MsgCollateralizeResponse): _8.MsgCollateralizeResponseAmino;
                fromAminoMsg(object: _8.MsgCollateralizeResponseAminoMsg): _8.MsgCollateralizeResponse;
                fromProtoMsg(message: _8.MsgCollateralizeResponseProtoMsg): _8.MsgCollateralizeResponse;
                toProto(message: _8.MsgCollateralizeResponse): Uint8Array;
                toProtoMsg(message: _8.MsgCollateralizeResponse): _8.MsgCollateralizeResponseProtoMsg;
            };
            MsgDecollateralizeResponse: {
                typeUrl: string;
                encode(_: _8.MsgDecollateralizeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgDecollateralizeResponse;
                fromPartial(_: Partial<_8.MsgDecollateralizeResponse>): _8.MsgDecollateralizeResponse;
                fromAmino(_: _8.MsgDecollateralizeResponseAmino): _8.MsgDecollateralizeResponse;
                toAmino(_: _8.MsgDecollateralizeResponse): _8.MsgDecollateralizeResponseAmino;
                fromAminoMsg(object: _8.MsgDecollateralizeResponseAminoMsg): _8.MsgDecollateralizeResponse;
                fromProtoMsg(message: _8.MsgDecollateralizeResponseProtoMsg): _8.MsgDecollateralizeResponse;
                toProto(message: _8.MsgDecollateralizeResponse): Uint8Array;
                toProtoMsg(message: _8.MsgDecollateralizeResponse): _8.MsgDecollateralizeResponseProtoMsg;
            };
            MsgBorrowResponse: {
                typeUrl: string;
                encode(_: _8.MsgBorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgBorrowResponse;
                fromPartial(_: Partial<_8.MsgBorrowResponse>): _8.MsgBorrowResponse;
                fromAmino(_: _8.MsgBorrowResponseAmino): _8.MsgBorrowResponse;
                toAmino(_: _8.MsgBorrowResponse): _8.MsgBorrowResponseAmino;
                fromAminoMsg(object: _8.MsgBorrowResponseAminoMsg): _8.MsgBorrowResponse;
                fromProtoMsg(message: _8.MsgBorrowResponseProtoMsg): _8.MsgBorrowResponse;
                toProto(message: _8.MsgBorrowResponse): Uint8Array;
                toProtoMsg(message: _8.MsgBorrowResponse): _8.MsgBorrowResponseProtoMsg;
            };
            MsgMaxBorrowResponse: {
                typeUrl: string;
                encode(message: _8.MsgMaxBorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgMaxBorrowResponse;
                fromPartial(object: Partial<_8.MsgMaxBorrowResponse>): _8.MsgMaxBorrowResponse;
                fromAmino(object: _8.MsgMaxBorrowResponseAmino): _8.MsgMaxBorrowResponse;
                toAmino(message: _8.MsgMaxBorrowResponse): _8.MsgMaxBorrowResponseAmino;
                fromAminoMsg(object: _8.MsgMaxBorrowResponseAminoMsg): _8.MsgMaxBorrowResponse;
                fromProtoMsg(message: _8.MsgMaxBorrowResponseProtoMsg): _8.MsgMaxBorrowResponse;
                toProto(message: _8.MsgMaxBorrowResponse): Uint8Array;
                toProtoMsg(message: _8.MsgMaxBorrowResponse): _8.MsgMaxBorrowResponseProtoMsg;
            };
            MsgRepayResponse: {
                typeUrl: string;
                encode(message: _8.MsgRepayResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgRepayResponse;
                fromPartial(object: Partial<_8.MsgRepayResponse>): _8.MsgRepayResponse;
                fromAmino(object: _8.MsgRepayResponseAmino): _8.MsgRepayResponse;
                toAmino(message: _8.MsgRepayResponse): _8.MsgRepayResponseAmino;
                fromAminoMsg(object: _8.MsgRepayResponseAminoMsg): _8.MsgRepayResponse;
                fromProtoMsg(message: _8.MsgRepayResponseProtoMsg): _8.MsgRepayResponse;
                toProto(message: _8.MsgRepayResponse): Uint8Array;
                toProtoMsg(message: _8.MsgRepayResponse): _8.MsgRepayResponseProtoMsg;
            };
            MsgLiquidateResponse: {
                typeUrl: string;
                encode(message: _8.MsgLiquidateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgLiquidateResponse;
                fromPartial(object: Partial<_8.MsgLiquidateResponse>): _8.MsgLiquidateResponse;
                fromAmino(object: _8.MsgLiquidateResponseAmino): _8.MsgLiquidateResponse;
                toAmino(message: _8.MsgLiquidateResponse): _8.MsgLiquidateResponseAmino;
                fromAminoMsg(object: _8.MsgLiquidateResponseAminoMsg): _8.MsgLiquidateResponse;
                fromProtoMsg(message: _8.MsgLiquidateResponseProtoMsg): _8.MsgLiquidateResponse;
                toProto(message: _8.MsgLiquidateResponse): Uint8Array;
                toProtoMsg(message: _8.MsgLiquidateResponse): _8.MsgLiquidateResponseProtoMsg;
            };
            MsgLeveragedLiquidateResponse: {
                typeUrl: string;
                encode(message: _8.MsgLeveragedLiquidateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgLeveragedLiquidateResponse;
                fromPartial(object: Partial<_8.MsgLeveragedLiquidateResponse>): _8.MsgLeveragedLiquidateResponse;
                fromAmino(object: _8.MsgLeveragedLiquidateResponseAmino): _8.MsgLeveragedLiquidateResponse;
                toAmino(message: _8.MsgLeveragedLiquidateResponse): _8.MsgLeveragedLiquidateResponseAmino;
                fromAminoMsg(object: _8.MsgLeveragedLiquidateResponseAminoMsg): _8.MsgLeveragedLiquidateResponse;
                fromProtoMsg(message: _8.MsgLeveragedLiquidateResponseProtoMsg): _8.MsgLeveragedLiquidateResponse;
                toProto(message: _8.MsgLeveragedLiquidateResponse): Uint8Array;
                toProtoMsg(message: _8.MsgLeveragedLiquidateResponse): _8.MsgLeveragedLiquidateResponseProtoMsg;
            };
            MsgSupplyCollateralResponse: {
                typeUrl: string;
                encode(message: _8.MsgSupplyCollateralResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgSupplyCollateralResponse;
                fromPartial(object: Partial<_8.MsgSupplyCollateralResponse>): _8.MsgSupplyCollateralResponse;
                fromAmino(object: _8.MsgSupplyCollateralResponseAmino): _8.MsgSupplyCollateralResponse;
                toAmino(message: _8.MsgSupplyCollateralResponse): _8.MsgSupplyCollateralResponseAmino;
                fromAminoMsg(object: _8.MsgSupplyCollateralResponseAminoMsg): _8.MsgSupplyCollateralResponse;
                fromProtoMsg(message: _8.MsgSupplyCollateralResponseProtoMsg): _8.MsgSupplyCollateralResponse;
                toProto(message: _8.MsgSupplyCollateralResponse): Uint8Array;
                toProtoMsg(message: _8.MsgSupplyCollateralResponse): _8.MsgSupplyCollateralResponseProtoMsg;
            };
            MsgGovUpdateRegistry: {
                typeUrl: string;
                encode(message: _8.MsgGovUpdateRegistry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgGovUpdateRegistry;
                fromPartial(object: Partial<_8.MsgGovUpdateRegistry>): _8.MsgGovUpdateRegistry;
                fromAmino(object: _8.MsgGovUpdateRegistryAmino): _8.MsgGovUpdateRegistry;
                toAmino(message: _8.MsgGovUpdateRegistry): _8.MsgGovUpdateRegistryAmino;
                fromAminoMsg(object: _8.MsgGovUpdateRegistryAminoMsg): _8.MsgGovUpdateRegistry;
                fromProtoMsg(message: _8.MsgGovUpdateRegistryProtoMsg): _8.MsgGovUpdateRegistry;
                toProto(message: _8.MsgGovUpdateRegistry): Uint8Array;
                toProtoMsg(message: _8.MsgGovUpdateRegistry): _8.MsgGovUpdateRegistryProtoMsg;
            };
            MsgGovUpdateRegistryResponse: {
                typeUrl: string;
                encode(_: _8.MsgGovUpdateRegistryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgGovUpdateRegistryResponse;
                fromPartial(_: Partial<_8.MsgGovUpdateRegistryResponse>): _8.MsgGovUpdateRegistryResponse;
                fromAmino(_: _8.MsgGovUpdateRegistryResponseAmino): _8.MsgGovUpdateRegistryResponse;
                toAmino(_: _8.MsgGovUpdateRegistryResponse): _8.MsgGovUpdateRegistryResponseAmino;
                fromAminoMsg(object: _8.MsgGovUpdateRegistryResponseAminoMsg): _8.MsgGovUpdateRegistryResponse;
                fromProtoMsg(message: _8.MsgGovUpdateRegistryResponseProtoMsg): _8.MsgGovUpdateRegistryResponse;
                toProto(message: _8.MsgGovUpdateRegistryResponse): Uint8Array;
                toProtoMsg(message: _8.MsgGovUpdateRegistryResponse): _8.MsgGovUpdateRegistryResponseProtoMsg;
            };
            QueryParams: {
                typeUrl: string;
                encode(_: _7.QueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.QueryParams;
                fromPartial(_: Partial<_7.QueryParams>): _7.QueryParams;
                fromAmino(_: _7.QueryParamsAmino): _7.QueryParams;
                toAmino(_: _7.QueryParams): _7.QueryParamsAmino;
                fromAminoMsg(object: _7.QueryParamsAminoMsg): _7.QueryParams;
                fromProtoMsg(message: _7.QueryParamsProtoMsg): _7.QueryParams;
                toProto(message: _7.QueryParams): Uint8Array;
                toProtoMsg(message: _7.QueryParams): _7.QueryParamsProtoMsg;
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
            QueryRegisteredTokens: {
                typeUrl: string;
                encode(message: _7.QueryRegisteredTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryRegisteredTokens;
                fromPartial(object: Partial<_7.QueryRegisteredTokens>): _7.QueryRegisteredTokens;
                fromAmino(object: _7.QueryRegisteredTokensAmino): _7.QueryRegisteredTokens;
                toAmino(message: _7.QueryRegisteredTokens): _7.QueryRegisteredTokensAmino;
                fromAminoMsg(object: _7.QueryRegisteredTokensAminoMsg): _7.QueryRegisteredTokens;
                fromProtoMsg(message: _7.QueryRegisteredTokensProtoMsg): _7.QueryRegisteredTokens;
                toProto(message: _7.QueryRegisteredTokens): Uint8Array;
                toProtoMsg(message: _7.QueryRegisteredTokens): _7.QueryRegisteredTokensProtoMsg;
            };
            QueryRegisteredTokensResponse: {
                typeUrl: string;
                encode(message: _7.QueryRegisteredTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryRegisteredTokensResponse;
                fromPartial(object: Partial<_7.QueryRegisteredTokensResponse>): _7.QueryRegisteredTokensResponse;
                fromAmino(object: _7.QueryRegisteredTokensResponseAmino): _7.QueryRegisteredTokensResponse;
                toAmino(message: _7.QueryRegisteredTokensResponse): _7.QueryRegisteredTokensResponseAmino;
                fromAminoMsg(object: _7.QueryRegisteredTokensResponseAminoMsg): _7.QueryRegisteredTokensResponse;
                fromProtoMsg(message: _7.QueryRegisteredTokensResponseProtoMsg): _7.QueryRegisteredTokensResponse;
                toProto(message: _7.QueryRegisteredTokensResponse): Uint8Array;
                toProtoMsg(message: _7.QueryRegisteredTokensResponse): _7.QueryRegisteredTokensResponseProtoMsg;
            };
            QueryMarketSummary: {
                typeUrl: string;
                encode(message: _7.QueryMarketSummary, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryMarketSummary;
                fromPartial(object: Partial<_7.QueryMarketSummary>): _7.QueryMarketSummary;
                fromAmino(object: _7.QueryMarketSummaryAmino): _7.QueryMarketSummary;
                toAmino(message: _7.QueryMarketSummary): _7.QueryMarketSummaryAmino;
                fromAminoMsg(object: _7.QueryMarketSummaryAminoMsg): _7.QueryMarketSummary;
                fromProtoMsg(message: _7.QueryMarketSummaryProtoMsg): _7.QueryMarketSummary;
                toProto(message: _7.QueryMarketSummary): Uint8Array;
                toProtoMsg(message: _7.QueryMarketSummary): _7.QueryMarketSummaryProtoMsg;
            };
            QueryMarketSummaryResponse: {
                typeUrl: string;
                encode(message: _7.QueryMarketSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryMarketSummaryResponse;
                fromPartial(object: Partial<_7.QueryMarketSummaryResponse>): _7.QueryMarketSummaryResponse;
                fromAmino(object: _7.QueryMarketSummaryResponseAmino): _7.QueryMarketSummaryResponse;
                toAmino(message: _7.QueryMarketSummaryResponse): _7.QueryMarketSummaryResponseAmino;
                fromAminoMsg(object: _7.QueryMarketSummaryResponseAminoMsg): _7.QueryMarketSummaryResponse;
                fromProtoMsg(message: _7.QueryMarketSummaryResponseProtoMsg): _7.QueryMarketSummaryResponse;
                toProto(message: _7.QueryMarketSummaryResponse): Uint8Array;
                toProtoMsg(message: _7.QueryMarketSummaryResponse): _7.QueryMarketSummaryResponseProtoMsg;
            };
            QueryAccountBalances: {
                typeUrl: string;
                encode(message: _7.QueryAccountBalances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryAccountBalances;
                fromPartial(object: Partial<_7.QueryAccountBalances>): _7.QueryAccountBalances;
                fromAmino(object: _7.QueryAccountBalancesAmino): _7.QueryAccountBalances;
                toAmino(message: _7.QueryAccountBalances): _7.QueryAccountBalancesAmino;
                fromAminoMsg(object: _7.QueryAccountBalancesAminoMsg): _7.QueryAccountBalances;
                fromProtoMsg(message: _7.QueryAccountBalancesProtoMsg): _7.QueryAccountBalances;
                toProto(message: _7.QueryAccountBalances): Uint8Array;
                toProtoMsg(message: _7.QueryAccountBalances): _7.QueryAccountBalancesProtoMsg;
            };
            QueryAccountBalancesResponse: {
                typeUrl: string;
                encode(message: _7.QueryAccountBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryAccountBalancesResponse;
                fromPartial(object: Partial<_7.QueryAccountBalancesResponse>): _7.QueryAccountBalancesResponse;
                fromAmino(object: _7.QueryAccountBalancesResponseAmino): _7.QueryAccountBalancesResponse;
                toAmino(message: _7.QueryAccountBalancesResponse): _7.QueryAccountBalancesResponseAmino;
                fromAminoMsg(object: _7.QueryAccountBalancesResponseAminoMsg): _7.QueryAccountBalancesResponse;
                fromProtoMsg(message: _7.QueryAccountBalancesResponseProtoMsg): _7.QueryAccountBalancesResponse;
                toProto(message: _7.QueryAccountBalancesResponse): Uint8Array;
                toProtoMsg(message: _7.QueryAccountBalancesResponse): _7.QueryAccountBalancesResponseProtoMsg;
            };
            QueryAccountSummary: {
                typeUrl: string;
                encode(message: _7.QueryAccountSummary, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryAccountSummary;
                fromPartial(object: Partial<_7.QueryAccountSummary>): _7.QueryAccountSummary;
                fromAmino(object: _7.QueryAccountSummaryAmino): _7.QueryAccountSummary;
                toAmino(message: _7.QueryAccountSummary): _7.QueryAccountSummaryAmino;
                fromAminoMsg(object: _7.QueryAccountSummaryAminoMsg): _7.QueryAccountSummary;
                fromProtoMsg(message: _7.QueryAccountSummaryProtoMsg): _7.QueryAccountSummary;
                toProto(message: _7.QueryAccountSummary): Uint8Array;
                toProtoMsg(message: _7.QueryAccountSummary): _7.QueryAccountSummaryProtoMsg;
            };
            QueryAccountSummaryResponse: {
                typeUrl: string;
                encode(message: _7.QueryAccountSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryAccountSummaryResponse;
                fromPartial(object: Partial<_7.QueryAccountSummaryResponse>): _7.QueryAccountSummaryResponse;
                fromAmino(object: _7.QueryAccountSummaryResponseAmino): _7.QueryAccountSummaryResponse;
                toAmino(message: _7.QueryAccountSummaryResponse): _7.QueryAccountSummaryResponseAmino;
                fromAminoMsg(object: _7.QueryAccountSummaryResponseAminoMsg): _7.QueryAccountSummaryResponse;
                fromProtoMsg(message: _7.QueryAccountSummaryResponseProtoMsg): _7.QueryAccountSummaryResponse;
                toProto(message: _7.QueryAccountSummaryResponse): Uint8Array;
                toProtoMsg(message: _7.QueryAccountSummaryResponse): _7.QueryAccountSummaryResponseProtoMsg;
            };
            QueryLiquidationTargets: {
                typeUrl: string;
                encode(_: _7.QueryLiquidationTargets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.QueryLiquidationTargets;
                fromPartial(_: Partial<_7.QueryLiquidationTargets>): _7.QueryLiquidationTargets;
                fromAmino(_: _7.QueryLiquidationTargetsAmino): _7.QueryLiquidationTargets;
                toAmino(_: _7.QueryLiquidationTargets): _7.QueryLiquidationTargetsAmino;
                fromAminoMsg(object: _7.QueryLiquidationTargetsAminoMsg): _7.QueryLiquidationTargets;
                fromProtoMsg(message: _7.QueryLiquidationTargetsProtoMsg): _7.QueryLiquidationTargets;
                toProto(message: _7.QueryLiquidationTargets): Uint8Array;
                toProtoMsg(message: _7.QueryLiquidationTargets): _7.QueryLiquidationTargetsProtoMsg;
            };
            QueryLiquidationTargetsResponse: {
                typeUrl: string;
                encode(message: _7.QueryLiquidationTargetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryLiquidationTargetsResponse;
                fromPartial(object: Partial<_7.QueryLiquidationTargetsResponse>): _7.QueryLiquidationTargetsResponse;
                fromAmino(object: _7.QueryLiquidationTargetsResponseAmino): _7.QueryLiquidationTargetsResponse;
                toAmino(message: _7.QueryLiquidationTargetsResponse): _7.QueryLiquidationTargetsResponseAmino;
                fromAminoMsg(object: _7.QueryLiquidationTargetsResponseAminoMsg): _7.QueryLiquidationTargetsResponse;
                fromProtoMsg(message: _7.QueryLiquidationTargetsResponseProtoMsg): _7.QueryLiquidationTargetsResponse;
                toProto(message: _7.QueryLiquidationTargetsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryLiquidationTargetsResponse): _7.QueryLiquidationTargetsResponseProtoMsg;
            };
            QueryBadDebts: {
                typeUrl: string;
                encode(_: _7.QueryBadDebts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.QueryBadDebts;
                fromPartial(_: Partial<_7.QueryBadDebts>): _7.QueryBadDebts;
                fromAmino(_: _7.QueryBadDebtsAmino): _7.QueryBadDebts;
                toAmino(_: _7.QueryBadDebts): _7.QueryBadDebtsAmino;
                fromAminoMsg(object: _7.QueryBadDebtsAminoMsg): _7.QueryBadDebts;
                fromProtoMsg(message: _7.QueryBadDebtsProtoMsg): _7.QueryBadDebts;
                toProto(message: _7.QueryBadDebts): Uint8Array;
                toProtoMsg(message: _7.QueryBadDebts): _7.QueryBadDebtsProtoMsg;
            };
            QueryBadDebtsResponse: {
                typeUrl: string;
                encode(message: _7.QueryBadDebtsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryBadDebtsResponse;
                fromPartial(object: Partial<_7.QueryBadDebtsResponse>): _7.QueryBadDebtsResponse;
                fromAmino(object: _7.QueryBadDebtsResponseAmino): _7.QueryBadDebtsResponse;
                toAmino(message: _7.QueryBadDebtsResponse): _7.QueryBadDebtsResponseAmino;
                fromAminoMsg(object: _7.QueryBadDebtsResponseAminoMsg): _7.QueryBadDebtsResponse;
                fromProtoMsg(message: _7.QueryBadDebtsResponseProtoMsg): _7.QueryBadDebtsResponse;
                toProto(message: _7.QueryBadDebtsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryBadDebtsResponse): _7.QueryBadDebtsResponseProtoMsg;
            };
            QueryMaxWithdraw: {
                typeUrl: string;
                encode(message: _7.QueryMaxWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryMaxWithdraw;
                fromPartial(object: Partial<_7.QueryMaxWithdraw>): _7.QueryMaxWithdraw;
                fromAmino(object: _7.QueryMaxWithdrawAmino): _7.QueryMaxWithdraw;
                toAmino(message: _7.QueryMaxWithdraw): _7.QueryMaxWithdrawAmino;
                fromAminoMsg(object: _7.QueryMaxWithdrawAminoMsg): _7.QueryMaxWithdraw;
                fromProtoMsg(message: _7.QueryMaxWithdrawProtoMsg): _7.QueryMaxWithdraw;
                toProto(message: _7.QueryMaxWithdraw): Uint8Array;
                toProtoMsg(message: _7.QueryMaxWithdraw): _7.QueryMaxWithdrawProtoMsg;
            };
            QueryMaxWithdrawResponse: {
                typeUrl: string;
                encode(message: _7.QueryMaxWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryMaxWithdrawResponse;
                fromPartial(object: Partial<_7.QueryMaxWithdrawResponse>): _7.QueryMaxWithdrawResponse;
                fromAmino(object: _7.QueryMaxWithdrawResponseAmino): _7.QueryMaxWithdrawResponse;
                toAmino(message: _7.QueryMaxWithdrawResponse): _7.QueryMaxWithdrawResponseAmino;
                fromAminoMsg(object: _7.QueryMaxWithdrawResponseAminoMsg): _7.QueryMaxWithdrawResponse;
                fromProtoMsg(message: _7.QueryMaxWithdrawResponseProtoMsg): _7.QueryMaxWithdrawResponse;
                toProto(message: _7.QueryMaxWithdrawResponse): Uint8Array;
                toProtoMsg(message: _7.QueryMaxWithdrawResponse): _7.QueryMaxWithdrawResponseProtoMsg;
            };
            QueryMaxBorrow: {
                typeUrl: string;
                encode(message: _7.QueryMaxBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryMaxBorrow;
                fromPartial(object: Partial<_7.QueryMaxBorrow>): _7.QueryMaxBorrow;
                fromAmino(object: _7.QueryMaxBorrowAmino): _7.QueryMaxBorrow;
                toAmino(message: _7.QueryMaxBorrow): _7.QueryMaxBorrowAmino;
                fromAminoMsg(object: _7.QueryMaxBorrowAminoMsg): _7.QueryMaxBorrow;
                fromProtoMsg(message: _7.QueryMaxBorrowProtoMsg): _7.QueryMaxBorrow;
                toProto(message: _7.QueryMaxBorrow): Uint8Array;
                toProtoMsg(message: _7.QueryMaxBorrow): _7.QueryMaxBorrowProtoMsg;
            };
            QueryMaxBorrowResponse: {
                typeUrl: string;
                encode(message: _7.QueryMaxBorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryMaxBorrowResponse;
                fromPartial(object: Partial<_7.QueryMaxBorrowResponse>): _7.QueryMaxBorrowResponse;
                fromAmino(object: _7.QueryMaxBorrowResponseAmino): _7.QueryMaxBorrowResponse;
                toAmino(message: _7.QueryMaxBorrowResponse): _7.QueryMaxBorrowResponseAmino;
                fromAminoMsg(object: _7.QueryMaxBorrowResponseAminoMsg): _7.QueryMaxBorrowResponse;
                fromProtoMsg(message: _7.QueryMaxBorrowResponseProtoMsg): _7.QueryMaxBorrowResponse;
                toProto(message: _7.QueryMaxBorrowResponse): Uint8Array;
                toProtoMsg(message: _7.QueryMaxBorrowResponse): _7.QueryMaxBorrowResponseProtoMsg;
            };
            QueryInspect: {
                typeUrl: string;
                encode(message: _7.QueryInspect, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryInspect;
                fromPartial(object: Partial<_7.QueryInspect>): _7.QueryInspect;
                fromAmino(object: _7.QueryInspectAmino): _7.QueryInspect;
                toAmino(message: _7.QueryInspect): _7.QueryInspectAmino;
                fromAminoMsg(object: _7.QueryInspectAminoMsg): _7.QueryInspect;
                fromProtoMsg(message: _7.QueryInspectProtoMsg): _7.QueryInspect;
                toProto(message: _7.QueryInspect): Uint8Array;
                toProtoMsg(message: _7.QueryInspect): _7.QueryInspectProtoMsg;
            };
            QueryInspectResponse: {
                typeUrl: string;
                encode(message: _7.QueryInspectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryInspectResponse;
                fromPartial(object: Partial<_7.QueryInspectResponse>): _7.QueryInspectResponse;
                fromAmino(object: _7.QueryInspectResponseAmino): _7.QueryInspectResponse;
                toAmino(message: _7.QueryInspectResponse): _7.QueryInspectResponseAmino;
                fromAminoMsg(object: _7.QueryInspectResponseAminoMsg): _7.QueryInspectResponse;
                fromProtoMsg(message: _7.QueryInspectResponseProtoMsg): _7.QueryInspectResponse;
                toProto(message: _7.QueryInspectResponse): Uint8Array;
                toProtoMsg(message: _7.QueryInspectResponse): _7.QueryInspectResponseProtoMsg;
            };
            InspectAccount: {
                typeUrl: string;
                encode(message: _7.InspectAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.InspectAccount;
                fromPartial(object: Partial<_7.InspectAccount>): _7.InspectAccount;
                fromAmino(object: _7.InspectAccountAmino): _7.InspectAccount;
                toAmino(message: _7.InspectAccount): _7.InspectAccountAmino;
                fromAminoMsg(object: _7.InspectAccountAminoMsg): _7.InspectAccount;
                fromProtoMsg(message: _7.InspectAccountProtoMsg): _7.InspectAccount;
                toProto(message: _7.InspectAccount): Uint8Array;
                toProtoMsg(message: _7.InspectAccount): _7.InspectAccountProtoMsg;
            };
            RiskInfo: {
                typeUrl: string;
                encode(message: _7.RiskInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.RiskInfo;
                fromPartial(object: Partial<_7.RiskInfo>): _7.RiskInfo;
                fromAmino(object: _7.RiskInfoAmino): _7.RiskInfo;
                toAmino(message: _7.RiskInfo): _7.RiskInfoAmino;
                fromAminoMsg(object: _7.RiskInfoAminoMsg): _7.RiskInfo;
                fromProtoMsg(message: _7.RiskInfoProtoMsg): _7.RiskInfo;
                toProto(message: _7.RiskInfo): Uint8Array;
                toProtoMsg(message: _7.RiskInfo): _7.RiskInfoProtoMsg;
            };
            DecBalances: {
                typeUrl: string;
                encode(message: _7.DecBalances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.DecBalances;
                fromPartial(object: Partial<_7.DecBalances>): _7.DecBalances;
                fromAmino(object: _7.DecBalancesAmino): _7.DecBalances;
                toAmino(message: _7.DecBalances): _7.DecBalancesAmino;
                fromAminoMsg(object: _7.DecBalancesAminoMsg): _7.DecBalances;
                fromProtoMsg(message: _7.DecBalancesProtoMsg): _7.DecBalances;
                toProto(message: _7.DecBalances): Uint8Array;
                toProtoMsg(message: _7.DecBalances): _7.DecBalancesProtoMsg;
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
            Token: {
                typeUrl: string;
                encode(message: _6.Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.Token;
                fromPartial(object: Partial<_6.Token>): _6.Token;
                fromAmino(object: _6.TokenAmino): _6.Token;
                toAmino(message: _6.Token): _6.TokenAmino;
                fromAminoMsg(object: _6.TokenAminoMsg): _6.Token;
                fromProtoMsg(message: _6.TokenProtoMsg): _6.Token;
                toProto(message: _6.Token): Uint8Array;
                toProtoMsg(message: _6.Token): _6.TokenProtoMsg;
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
            AdjustedBorrow: {
                typeUrl: string;
                encode(message: _5.AdjustedBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AdjustedBorrow;
                fromPartial(object: Partial<_5.AdjustedBorrow>): _5.AdjustedBorrow;
                fromAmino(object: _5.AdjustedBorrowAmino): _5.AdjustedBorrow;
                toAmino(message: _5.AdjustedBorrow): _5.AdjustedBorrowAmino;
                fromAminoMsg(object: _5.AdjustedBorrowAminoMsg): _5.AdjustedBorrow;
                fromProtoMsg(message: _5.AdjustedBorrowProtoMsg): _5.AdjustedBorrow;
                toProto(message: _5.AdjustedBorrow): Uint8Array;
                toProtoMsg(message: _5.AdjustedBorrow): _5.AdjustedBorrowProtoMsg;
            };
            Collateral: {
                typeUrl: string;
                encode(message: _5.Collateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Collateral;
                fromPartial(object: Partial<_5.Collateral>): _5.Collateral;
                fromAmino(object: _5.CollateralAmino): _5.Collateral;
                toAmino(message: _5.Collateral): _5.CollateralAmino;
                fromAminoMsg(object: _5.CollateralAminoMsg): _5.Collateral;
                fromProtoMsg(message: _5.CollateralProtoMsg): _5.Collateral;
                toProto(message: _5.Collateral): Uint8Array;
                toProtoMsg(message: _5.Collateral): _5.CollateralProtoMsg;
            };
            BadDebt: {
                typeUrl: string;
                encode(message: _5.BadDebt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.BadDebt;
                fromPartial(object: Partial<_5.BadDebt>): _5.BadDebt;
                fromAmino(object: _5.BadDebtAmino): _5.BadDebt;
                toAmino(message: _5.BadDebt): _5.BadDebtAmino;
                fromAminoMsg(object: _5.BadDebtAminoMsg): _5.BadDebt;
                fromProtoMsg(message: _5.BadDebtProtoMsg): _5.BadDebt;
                toProto(message: _5.BadDebt): Uint8Array;
                toProtoMsg(message: _5.BadDebt): _5.BadDebtProtoMsg;
            };
            InterestScalar: {
                typeUrl: string;
                encode(message: _5.InterestScalar, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.InterestScalar;
                fromPartial(object: Partial<_5.InterestScalar>): _5.InterestScalar;
                fromAmino(object: _5.InterestScalarAmino): _5.InterestScalar;
                toAmino(message: _5.InterestScalar): _5.InterestScalarAmino;
                fromAminoMsg(object: _5.InterestScalarAminoMsg): _5.InterestScalar;
                fromProtoMsg(message: _5.InterestScalarProtoMsg): _5.InterestScalar;
                toProto(message: _5.InterestScalar): Uint8Array;
                toProtoMsg(message: _5.InterestScalar): _5.InterestScalarProtoMsg;
            };
            EventSupply: {
                typeUrl: string;
                encode(message: _4.EventSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventSupply;
                fromPartial(object: Partial<_4.EventSupply>): _4.EventSupply;
                fromAmino(object: _4.EventSupplyAmino): _4.EventSupply;
                toAmino(message: _4.EventSupply): _4.EventSupplyAmino;
                fromAminoMsg(object: _4.EventSupplyAminoMsg): _4.EventSupply;
                fromProtoMsg(message: _4.EventSupplyProtoMsg): _4.EventSupply;
                toProto(message: _4.EventSupply): Uint8Array;
                toProtoMsg(message: _4.EventSupply): _4.EventSupplyProtoMsg;
            };
            EventWithdraw: {
                typeUrl: string;
                encode(message: _4.EventWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventWithdraw;
                fromPartial(object: Partial<_4.EventWithdraw>): _4.EventWithdraw;
                fromAmino(object: _4.EventWithdrawAmino): _4.EventWithdraw;
                toAmino(message: _4.EventWithdraw): _4.EventWithdrawAmino;
                fromAminoMsg(object: _4.EventWithdrawAminoMsg): _4.EventWithdraw;
                fromProtoMsg(message: _4.EventWithdrawProtoMsg): _4.EventWithdraw;
                toProto(message: _4.EventWithdraw): Uint8Array;
                toProtoMsg(message: _4.EventWithdraw): _4.EventWithdrawProtoMsg;
            };
            EventCollaterize: {
                typeUrl: string;
                encode(message: _4.EventCollaterize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventCollaterize;
                fromPartial(object: Partial<_4.EventCollaterize>): _4.EventCollaterize;
                fromAmino(object: _4.EventCollaterizeAmino): _4.EventCollaterize;
                toAmino(message: _4.EventCollaterize): _4.EventCollaterizeAmino;
                fromAminoMsg(object: _4.EventCollaterizeAminoMsg): _4.EventCollaterize;
                fromProtoMsg(message: _4.EventCollaterizeProtoMsg): _4.EventCollaterize;
                toProto(message: _4.EventCollaterize): Uint8Array;
                toProtoMsg(message: _4.EventCollaterize): _4.EventCollaterizeProtoMsg;
            };
            EventDecollaterize: {
                typeUrl: string;
                encode(message: _4.EventDecollaterize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventDecollaterize;
                fromPartial(object: Partial<_4.EventDecollaterize>): _4.EventDecollaterize;
                fromAmino(object: _4.EventDecollaterizeAmino): _4.EventDecollaterize;
                toAmino(message: _4.EventDecollaterize): _4.EventDecollaterizeAmino;
                fromAminoMsg(object: _4.EventDecollaterizeAminoMsg): _4.EventDecollaterize;
                fromProtoMsg(message: _4.EventDecollaterizeProtoMsg): _4.EventDecollaterize;
                toProto(message: _4.EventDecollaterize): Uint8Array;
                toProtoMsg(message: _4.EventDecollaterize): _4.EventDecollaterizeProtoMsg;
            };
            EventBorrow: {
                typeUrl: string;
                encode(message: _4.EventBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventBorrow;
                fromPartial(object: Partial<_4.EventBorrow>): _4.EventBorrow;
                fromAmino(object: _4.EventBorrowAmino): _4.EventBorrow;
                toAmino(message: _4.EventBorrow): _4.EventBorrowAmino;
                fromAminoMsg(object: _4.EventBorrowAminoMsg): _4.EventBorrow;
                fromProtoMsg(message: _4.EventBorrowProtoMsg): _4.EventBorrow;
                toProto(message: _4.EventBorrow): Uint8Array;
                toProtoMsg(message: _4.EventBorrow): _4.EventBorrowProtoMsg;
            };
            EventRepay: {
                typeUrl: string;
                encode(message: _4.EventRepay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventRepay;
                fromPartial(object: Partial<_4.EventRepay>): _4.EventRepay;
                fromAmino(object: _4.EventRepayAmino): _4.EventRepay;
                toAmino(message: _4.EventRepay): _4.EventRepayAmino;
                fromAminoMsg(object: _4.EventRepayAminoMsg): _4.EventRepay;
                fromProtoMsg(message: _4.EventRepayProtoMsg): _4.EventRepay;
                toProto(message: _4.EventRepay): Uint8Array;
                toProtoMsg(message: _4.EventRepay): _4.EventRepayProtoMsg;
            };
            EventLiquidate: {
                typeUrl: string;
                encode(message: _4.EventLiquidate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventLiquidate;
                fromPartial(object: Partial<_4.EventLiquidate>): _4.EventLiquidate;
                fromAmino(object: _4.EventLiquidateAmino): _4.EventLiquidate;
                toAmino(message: _4.EventLiquidate): _4.EventLiquidateAmino;
                fromAminoMsg(object: _4.EventLiquidateAminoMsg): _4.EventLiquidate;
                fromProtoMsg(message: _4.EventLiquidateProtoMsg): _4.EventLiquidate;
                toProto(message: _4.EventLiquidate): Uint8Array;
                toProtoMsg(message: _4.EventLiquidate): _4.EventLiquidateProtoMsg;
            };
            EventInterestAccrual: {
                typeUrl: string;
                encode(message: _4.EventInterestAccrual, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventInterestAccrual;
                fromPartial(object: Partial<_4.EventInterestAccrual>): _4.EventInterestAccrual;
                fromAmino(object: _4.EventInterestAccrualAmino): _4.EventInterestAccrual;
                toAmino(message: _4.EventInterestAccrual): _4.EventInterestAccrualAmino;
                fromAminoMsg(object: _4.EventInterestAccrualAminoMsg): _4.EventInterestAccrual;
                fromProtoMsg(message: _4.EventInterestAccrualProtoMsg): _4.EventInterestAccrual;
                toProto(message: _4.EventInterestAccrual): Uint8Array;
                toProtoMsg(message: _4.EventInterestAccrual): _4.EventInterestAccrualProtoMsg;
            };
            EventRepayBadDebt: {
                typeUrl: string;
                encode(message: _4.EventRepayBadDebt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventRepayBadDebt;
                fromPartial(object: Partial<_4.EventRepayBadDebt>): _4.EventRepayBadDebt;
                fromAmino(object: _4.EventRepayBadDebtAmino): _4.EventRepayBadDebt;
                toAmino(message: _4.EventRepayBadDebt): _4.EventRepayBadDebtAmino;
                fromAminoMsg(object: _4.EventRepayBadDebtAminoMsg): _4.EventRepayBadDebt;
                fromProtoMsg(message: _4.EventRepayBadDebtProtoMsg): _4.EventRepayBadDebt;
                toProto(message: _4.EventRepayBadDebt): Uint8Array;
                toProtoMsg(message: _4.EventRepayBadDebt): _4.EventRepayBadDebtProtoMsg;
            };
            EventReservesExhausted: {
                typeUrl: string;
                encode(message: _4.EventReservesExhausted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventReservesExhausted;
                fromPartial(object: Partial<_4.EventReservesExhausted>): _4.EventReservesExhausted;
                fromAmino(object: _4.EventReservesExhaustedAmino): _4.EventReservesExhausted;
                toAmino(message: _4.EventReservesExhausted): _4.EventReservesExhaustedAmino;
                fromAminoMsg(object: _4.EventReservesExhaustedAminoMsg): _4.EventReservesExhausted;
                fromProtoMsg(message: _4.EventReservesExhaustedProtoMsg): _4.EventReservesExhausted;
                toProto(message: _4.EventReservesExhausted): Uint8Array;
                toProtoMsg(message: _4.EventReservesExhausted): _4.EventReservesExhaustedProtoMsg;
            };
            EventFundOracle: {
                typeUrl: string;
                encode(message: _4.EventFundOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.EventFundOracle;
                fromPartial(object: Partial<_4.EventFundOracle>): _4.EventFundOracle;
                fromAmino(object: _4.EventFundOracleAmino): _4.EventFundOracle;
                toAmino(message: _4.EventFundOracle): _4.EventFundOracleAmino;
                fromAminoMsg(object: _4.EventFundOracleAminoMsg): _4.EventFundOracle;
                fromProtoMsg(message: _4.EventFundOracleProtoMsg): _4.EventFundOracle;
                toProto(message: _4.EventFundOracle): Uint8Array;
                toProtoMsg(message: _4.EventFundOracle): _4.EventFundOracleProtoMsg;
            };
        };
    }
    namespace oracle {
        const v1: {
            MsgClientImpl: typeof _160.MsgClientImpl;
            QueryClientImpl: typeof _155.QueryClientImpl;
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
            LCDQueryClient: typeof _150.LCDQueryClient;
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
                    toAmino: (message: _13.MsgAggregateExchangeRatePrevote) => _13.MsgAggregateExchangeRatePrevoteAmino;
                    fromAmino: (object: _13.MsgAggregateExchangeRatePrevoteAmino) => _13.MsgAggregateExchangeRatePrevote;
                };
                "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _13.MsgAggregateExchangeRateVote) => _13.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _13.MsgAggregateExchangeRateVoteAmino) => _13.MsgAggregateExchangeRateVote;
                };
                "/umee.oracle.v1.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _13.MsgDelegateFeedConsent) => _13.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _13.MsgDelegateFeedConsentAmino) => _13.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _13.MsgAggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgAggregateExchangeRatePrevote;
                fromPartial(object: Partial<_13.MsgAggregateExchangeRatePrevote>): _13.MsgAggregateExchangeRatePrevote;
                fromAmino(object: _13.MsgAggregateExchangeRatePrevoteAmino): _13.MsgAggregateExchangeRatePrevote;
                toAmino(message: _13.MsgAggregateExchangeRatePrevote): _13.MsgAggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _13.MsgAggregateExchangeRatePrevoteAminoMsg): _13.MsgAggregateExchangeRatePrevote;
                fromProtoMsg(message: _13.MsgAggregateExchangeRatePrevoteProtoMsg): _13.MsgAggregateExchangeRatePrevote;
                toProto(message: _13.MsgAggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _13.MsgAggregateExchangeRatePrevote): _13.MsgAggregateExchangeRatePrevoteProtoMsg;
            };
            MsgAggregateExchangeRatePrevoteResponse: {
                typeUrl: string;
                encode(_: _13.MsgAggregateExchangeRatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgAggregateExchangeRatePrevoteResponse;
                fromPartial(_: Partial<_13.MsgAggregateExchangeRatePrevoteResponse>): _13.MsgAggregateExchangeRatePrevoteResponse;
                fromAmino(_: _13.MsgAggregateExchangeRatePrevoteResponseAmino): _13.MsgAggregateExchangeRatePrevoteResponse;
                toAmino(_: _13.MsgAggregateExchangeRatePrevoteResponse): _13.MsgAggregateExchangeRatePrevoteResponseAmino;
                fromAminoMsg(object: _13.MsgAggregateExchangeRatePrevoteResponseAminoMsg): _13.MsgAggregateExchangeRatePrevoteResponse;
                fromProtoMsg(message: _13.MsgAggregateExchangeRatePrevoteResponseProtoMsg): _13.MsgAggregateExchangeRatePrevoteResponse;
                toProto(message: _13.MsgAggregateExchangeRatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _13.MsgAggregateExchangeRatePrevoteResponse): _13.MsgAggregateExchangeRatePrevoteResponseProtoMsg;
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _13.MsgAggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgAggregateExchangeRateVote;
                fromPartial(object: Partial<_13.MsgAggregateExchangeRateVote>): _13.MsgAggregateExchangeRateVote;
                fromAmino(object: _13.MsgAggregateExchangeRateVoteAmino): _13.MsgAggregateExchangeRateVote;
                toAmino(message: _13.MsgAggregateExchangeRateVote): _13.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _13.MsgAggregateExchangeRateVoteAminoMsg): _13.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _13.MsgAggregateExchangeRateVoteProtoMsg): _13.MsgAggregateExchangeRateVote;
                toProto(message: _13.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _13.MsgAggregateExchangeRateVote): _13.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _13.MsgAggregateExchangeRateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: Partial<_13.MsgAggregateExchangeRateVoteResponse>): _13.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _13.MsgAggregateExchangeRateVoteResponseAmino): _13.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _13.MsgAggregateExchangeRateVoteResponse): _13.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _13.MsgAggregateExchangeRateVoteResponseAminoMsg): _13.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _13.MsgAggregateExchangeRateVoteResponseProtoMsg): _13.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _13.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _13.MsgAggregateExchangeRateVoteResponse): _13.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _13.MsgDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgDelegateFeedConsent;
                fromPartial(object: Partial<_13.MsgDelegateFeedConsent>): _13.MsgDelegateFeedConsent;
                fromAmino(object: _13.MsgDelegateFeedConsentAmino): _13.MsgDelegateFeedConsent;
                toAmino(message: _13.MsgDelegateFeedConsent): _13.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _13.MsgDelegateFeedConsentAminoMsg): _13.MsgDelegateFeedConsent;
                fromProtoMsg(message: _13.MsgDelegateFeedConsentProtoMsg): _13.MsgDelegateFeedConsent;
                toProto(message: _13.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _13.MsgDelegateFeedConsent): _13.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _13.MsgDelegateFeedConsentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgDelegateFeedConsentResponse;
                fromPartial(_: Partial<_13.MsgDelegateFeedConsentResponse>): _13.MsgDelegateFeedConsentResponse;
                fromAmino(_: _13.MsgDelegateFeedConsentResponseAmino): _13.MsgDelegateFeedConsentResponse;
                toAmino(_: _13.MsgDelegateFeedConsentResponse): _13.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _13.MsgDelegateFeedConsentResponseAminoMsg): _13.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _13.MsgDelegateFeedConsentResponseProtoMsg): _13.MsgDelegateFeedConsentResponse;
                toProto(message: _13.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _13.MsgDelegateFeedConsentResponse): _13.MsgDelegateFeedConsentResponseProtoMsg;
            };
            QueryExchangeRates: {
                typeUrl: string;
                encode(message: _12.QueryExchangeRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryExchangeRates;
                fromPartial(object: Partial<_12.QueryExchangeRates>): _12.QueryExchangeRates;
                fromAmino(object: _12.QueryExchangeRatesAmino): _12.QueryExchangeRates;
                toAmino(message: _12.QueryExchangeRates): _12.QueryExchangeRatesAmino;
                fromAminoMsg(object: _12.QueryExchangeRatesAminoMsg): _12.QueryExchangeRates;
                fromProtoMsg(message: _12.QueryExchangeRatesProtoMsg): _12.QueryExchangeRates;
                toProto(message: _12.QueryExchangeRates): Uint8Array;
                toProtoMsg(message: _12.QueryExchangeRates): _12.QueryExchangeRatesProtoMsg;
            };
            QueryExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _12.QueryExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryExchangeRatesResponse;
                fromPartial(object: Partial<_12.QueryExchangeRatesResponse>): _12.QueryExchangeRatesResponse;
                fromAmino(object: _12.QueryExchangeRatesResponseAmino): _12.QueryExchangeRatesResponse;
                toAmino(message: _12.QueryExchangeRatesResponse): _12.QueryExchangeRatesResponseAmino;
                fromAminoMsg(object: _12.QueryExchangeRatesResponseAminoMsg): _12.QueryExchangeRatesResponse;
                fromProtoMsg(message: _12.QueryExchangeRatesResponseProtoMsg): _12.QueryExchangeRatesResponse;
                toProto(message: _12.QueryExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryExchangeRatesResponse): _12.QueryExchangeRatesResponseProtoMsg;
            };
            QueryActiveExchangeRates: {
                typeUrl: string;
                encode(_: _12.QueryActiveExchangeRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryActiveExchangeRates;
                fromPartial(_: Partial<_12.QueryActiveExchangeRates>): _12.QueryActiveExchangeRates;
                fromAmino(_: _12.QueryActiveExchangeRatesAmino): _12.QueryActiveExchangeRates;
                toAmino(_: _12.QueryActiveExchangeRates): _12.QueryActiveExchangeRatesAmino;
                fromAminoMsg(object: _12.QueryActiveExchangeRatesAminoMsg): _12.QueryActiveExchangeRates;
                fromProtoMsg(message: _12.QueryActiveExchangeRatesProtoMsg): _12.QueryActiveExchangeRates;
                toProto(message: _12.QueryActiveExchangeRates): Uint8Array;
                toProtoMsg(message: _12.QueryActiveExchangeRates): _12.QueryActiveExchangeRatesProtoMsg;
            };
            QueryActiveExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _12.QueryActiveExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryActiveExchangeRatesResponse;
                fromPartial(object: Partial<_12.QueryActiveExchangeRatesResponse>): _12.QueryActiveExchangeRatesResponse;
                fromAmino(object: _12.QueryActiveExchangeRatesResponseAmino): _12.QueryActiveExchangeRatesResponse;
                toAmino(message: _12.QueryActiveExchangeRatesResponse): _12.QueryActiveExchangeRatesResponseAmino;
                fromAminoMsg(object: _12.QueryActiveExchangeRatesResponseAminoMsg): _12.QueryActiveExchangeRatesResponse;
                fromProtoMsg(message: _12.QueryActiveExchangeRatesResponseProtoMsg): _12.QueryActiveExchangeRatesResponse;
                toProto(message: _12.QueryActiveExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryActiveExchangeRatesResponse): _12.QueryActiveExchangeRatesResponseProtoMsg;
            };
            QueryFeederDelegation: {
                typeUrl: string;
                encode(message: _12.QueryFeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryFeederDelegation;
                fromPartial(object: Partial<_12.QueryFeederDelegation>): _12.QueryFeederDelegation;
                fromAmino(object: _12.QueryFeederDelegationAmino): _12.QueryFeederDelegation;
                toAmino(message: _12.QueryFeederDelegation): _12.QueryFeederDelegationAmino;
                fromAminoMsg(object: _12.QueryFeederDelegationAminoMsg): _12.QueryFeederDelegation;
                fromProtoMsg(message: _12.QueryFeederDelegationProtoMsg): _12.QueryFeederDelegation;
                toProto(message: _12.QueryFeederDelegation): Uint8Array;
                toProtoMsg(message: _12.QueryFeederDelegation): _12.QueryFeederDelegationProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _12.QueryFeederDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryFeederDelegationResponse;
                fromPartial(object: Partial<_12.QueryFeederDelegationResponse>): _12.QueryFeederDelegationResponse;
                fromAmino(object: _12.QueryFeederDelegationResponseAmino): _12.QueryFeederDelegationResponse;
                toAmino(message: _12.QueryFeederDelegationResponse): _12.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _12.QueryFeederDelegationResponseAminoMsg): _12.QueryFeederDelegationResponse;
                fromProtoMsg(message: _12.QueryFeederDelegationResponseProtoMsg): _12.QueryFeederDelegationResponse;
                toProto(message: _12.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _12.QueryFeederDelegationResponse): _12.QueryFeederDelegationResponseProtoMsg;
            };
            QueryMissCounter: {
                typeUrl: string;
                encode(message: _12.QueryMissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryMissCounter;
                fromPartial(object: Partial<_12.QueryMissCounter>): _12.QueryMissCounter;
                fromAmino(object: _12.QueryMissCounterAmino): _12.QueryMissCounter;
                toAmino(message: _12.QueryMissCounter): _12.QueryMissCounterAmino;
                fromAminoMsg(object: _12.QueryMissCounterAminoMsg): _12.QueryMissCounter;
                fromProtoMsg(message: _12.QueryMissCounterProtoMsg): _12.QueryMissCounter;
                toProto(message: _12.QueryMissCounter): Uint8Array;
                toProtoMsg(message: _12.QueryMissCounter): _12.QueryMissCounterProtoMsg;
            };
            QueryMissCounterResponse: {
                typeUrl: string;
                encode(message: _12.QueryMissCounterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryMissCounterResponse;
                fromPartial(object: Partial<_12.QueryMissCounterResponse>): _12.QueryMissCounterResponse;
                fromAmino(object: _12.QueryMissCounterResponseAmino): _12.QueryMissCounterResponse;
                toAmino(message: _12.QueryMissCounterResponse): _12.QueryMissCounterResponseAmino;
                fromAminoMsg(object: _12.QueryMissCounterResponseAminoMsg): _12.QueryMissCounterResponse;
                fromProtoMsg(message: _12.QueryMissCounterResponseProtoMsg): _12.QueryMissCounterResponse;
                toProto(message: _12.QueryMissCounterResponse): Uint8Array;
                toProtoMsg(message: _12.QueryMissCounterResponse): _12.QueryMissCounterResponseProtoMsg;
            };
            QuerySlashWindow: {
                typeUrl: string;
                encode(_: _12.QuerySlashWindow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QuerySlashWindow;
                fromPartial(_: Partial<_12.QuerySlashWindow>): _12.QuerySlashWindow;
                fromAmino(_: _12.QuerySlashWindowAmino): _12.QuerySlashWindow;
                toAmino(_: _12.QuerySlashWindow): _12.QuerySlashWindowAmino;
                fromAminoMsg(object: _12.QuerySlashWindowAminoMsg): _12.QuerySlashWindow;
                fromProtoMsg(message: _12.QuerySlashWindowProtoMsg): _12.QuerySlashWindow;
                toProto(message: _12.QuerySlashWindow): Uint8Array;
                toProtoMsg(message: _12.QuerySlashWindow): _12.QuerySlashWindowProtoMsg;
            };
            QuerySlashWindowResponse: {
                typeUrl: string;
                encode(message: _12.QuerySlashWindowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySlashWindowResponse;
                fromPartial(object: Partial<_12.QuerySlashWindowResponse>): _12.QuerySlashWindowResponse;
                fromAmino(object: _12.QuerySlashWindowResponseAmino): _12.QuerySlashWindowResponse;
                toAmino(message: _12.QuerySlashWindowResponse): _12.QuerySlashWindowResponseAmino;
                fromAminoMsg(object: _12.QuerySlashWindowResponseAminoMsg): _12.QuerySlashWindowResponse;
                fromProtoMsg(message: _12.QuerySlashWindowResponseProtoMsg): _12.QuerySlashWindowResponse;
                toProto(message: _12.QuerySlashWindowResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySlashWindowResponse): _12.QuerySlashWindowResponseProtoMsg;
            };
            QueryAggregatePrevote: {
                typeUrl: string;
                encode(message: _12.QueryAggregatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAggregatePrevote;
                fromPartial(object: Partial<_12.QueryAggregatePrevote>): _12.QueryAggregatePrevote;
                fromAmino(object: _12.QueryAggregatePrevoteAmino): _12.QueryAggregatePrevote;
                toAmino(message: _12.QueryAggregatePrevote): _12.QueryAggregatePrevoteAmino;
                fromAminoMsg(object: _12.QueryAggregatePrevoteAminoMsg): _12.QueryAggregatePrevote;
                fromProtoMsg(message: _12.QueryAggregatePrevoteProtoMsg): _12.QueryAggregatePrevote;
                toProto(message: _12.QueryAggregatePrevote): Uint8Array;
                toProtoMsg(message: _12.QueryAggregatePrevote): _12.QueryAggregatePrevoteProtoMsg;
            };
            QueryAggregatePrevoteResponse: {
                typeUrl: string;
                encode(message: _12.QueryAggregatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAggregatePrevoteResponse;
                fromPartial(object: Partial<_12.QueryAggregatePrevoteResponse>): _12.QueryAggregatePrevoteResponse;
                fromAmino(object: _12.QueryAggregatePrevoteResponseAmino): _12.QueryAggregatePrevoteResponse;
                toAmino(message: _12.QueryAggregatePrevoteResponse): _12.QueryAggregatePrevoteResponseAmino;
                fromAminoMsg(object: _12.QueryAggregatePrevoteResponseAminoMsg): _12.QueryAggregatePrevoteResponse;
                fromProtoMsg(message: _12.QueryAggregatePrevoteResponseProtoMsg): _12.QueryAggregatePrevoteResponse;
                toProto(message: _12.QueryAggregatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAggregatePrevoteResponse): _12.QueryAggregatePrevoteResponseProtoMsg;
            };
            QueryAggregatePrevotes: {
                typeUrl: string;
                encode(_: _12.QueryAggregatePrevotes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryAggregatePrevotes;
                fromPartial(_: Partial<_12.QueryAggregatePrevotes>): _12.QueryAggregatePrevotes;
                fromAmino(_: _12.QueryAggregatePrevotesAmino): _12.QueryAggregatePrevotes;
                toAmino(_: _12.QueryAggregatePrevotes): _12.QueryAggregatePrevotesAmino;
                fromAminoMsg(object: _12.QueryAggregatePrevotesAminoMsg): _12.QueryAggregatePrevotes;
                fromProtoMsg(message: _12.QueryAggregatePrevotesProtoMsg): _12.QueryAggregatePrevotes;
                toProto(message: _12.QueryAggregatePrevotes): Uint8Array;
                toProtoMsg(message: _12.QueryAggregatePrevotes): _12.QueryAggregatePrevotesProtoMsg;
            };
            QueryAggregatePrevotesResponse: {
                typeUrl: string;
                encode(message: _12.QueryAggregatePrevotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAggregatePrevotesResponse;
                fromPartial(object: Partial<_12.QueryAggregatePrevotesResponse>): _12.QueryAggregatePrevotesResponse;
                fromAmino(object: _12.QueryAggregatePrevotesResponseAmino): _12.QueryAggregatePrevotesResponse;
                toAmino(message: _12.QueryAggregatePrevotesResponse): _12.QueryAggregatePrevotesResponseAmino;
                fromAminoMsg(object: _12.QueryAggregatePrevotesResponseAminoMsg): _12.QueryAggregatePrevotesResponse;
                fromProtoMsg(message: _12.QueryAggregatePrevotesResponseProtoMsg): _12.QueryAggregatePrevotesResponse;
                toProto(message: _12.QueryAggregatePrevotesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAggregatePrevotesResponse): _12.QueryAggregatePrevotesResponseProtoMsg;
            };
            QueryAggregateVote: {
                typeUrl: string;
                encode(message: _12.QueryAggregateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAggregateVote;
                fromPartial(object: Partial<_12.QueryAggregateVote>): _12.QueryAggregateVote;
                fromAmino(object: _12.QueryAggregateVoteAmino): _12.QueryAggregateVote;
                toAmino(message: _12.QueryAggregateVote): _12.QueryAggregateVoteAmino;
                fromAminoMsg(object: _12.QueryAggregateVoteAminoMsg): _12.QueryAggregateVote;
                fromProtoMsg(message: _12.QueryAggregateVoteProtoMsg): _12.QueryAggregateVote;
                toProto(message: _12.QueryAggregateVote): Uint8Array;
                toProtoMsg(message: _12.QueryAggregateVote): _12.QueryAggregateVoteProtoMsg;
            };
            QueryAggregateVoteResponse: {
                typeUrl: string;
                encode(message: _12.QueryAggregateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAggregateVoteResponse;
                fromPartial(object: Partial<_12.QueryAggregateVoteResponse>): _12.QueryAggregateVoteResponse;
                fromAmino(object: _12.QueryAggregateVoteResponseAmino): _12.QueryAggregateVoteResponse;
                toAmino(message: _12.QueryAggregateVoteResponse): _12.QueryAggregateVoteResponseAmino;
                fromAminoMsg(object: _12.QueryAggregateVoteResponseAminoMsg): _12.QueryAggregateVoteResponse;
                fromProtoMsg(message: _12.QueryAggregateVoteResponseProtoMsg): _12.QueryAggregateVoteResponse;
                toProto(message: _12.QueryAggregateVoteResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAggregateVoteResponse): _12.QueryAggregateVoteResponseProtoMsg;
            };
            QueryAggregateVotes: {
                typeUrl: string;
                encode(_: _12.QueryAggregateVotes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryAggregateVotes;
                fromPartial(_: Partial<_12.QueryAggregateVotes>): _12.QueryAggregateVotes;
                fromAmino(_: _12.QueryAggregateVotesAmino): _12.QueryAggregateVotes;
                toAmino(_: _12.QueryAggregateVotes): _12.QueryAggregateVotesAmino;
                fromAminoMsg(object: _12.QueryAggregateVotesAminoMsg): _12.QueryAggregateVotes;
                fromProtoMsg(message: _12.QueryAggregateVotesProtoMsg): _12.QueryAggregateVotes;
                toProto(message: _12.QueryAggregateVotes): Uint8Array;
                toProtoMsg(message: _12.QueryAggregateVotes): _12.QueryAggregateVotesProtoMsg;
            };
            QueryAggregateVotesResponse: {
                typeUrl: string;
                encode(message: _12.QueryAggregateVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAggregateVotesResponse;
                fromPartial(object: Partial<_12.QueryAggregateVotesResponse>): _12.QueryAggregateVotesResponse;
                fromAmino(object: _12.QueryAggregateVotesResponseAmino): _12.QueryAggregateVotesResponse;
                toAmino(message: _12.QueryAggregateVotesResponse): _12.QueryAggregateVotesResponseAmino;
                fromAminoMsg(object: _12.QueryAggregateVotesResponseAminoMsg): _12.QueryAggregateVotesResponse;
                fromProtoMsg(message: _12.QueryAggregateVotesResponseProtoMsg): _12.QueryAggregateVotesResponse;
                toProto(message: _12.QueryAggregateVotesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAggregateVotesResponse): _12.QueryAggregateVotesResponseProtoMsg;
            };
            QueryParams: {
                typeUrl: string;
                encode(_: _12.QueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _12.QueryParams;
                fromPartial(_: Partial<_12.QueryParams>): _12.QueryParams;
                fromAmino(_: _12.QueryParamsAmino): _12.QueryParams;
                toAmino(_: _12.QueryParams): _12.QueryParamsAmino;
                fromAminoMsg(object: _12.QueryParamsAminoMsg): _12.QueryParams;
                fromProtoMsg(message: _12.QueryParamsProtoMsg): _12.QueryParams;
                toProto(message: _12.QueryParams): Uint8Array;
                toProtoMsg(message: _12.QueryParams): _12.QueryParamsProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _12.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
                fromAmino(object: _12.QueryParamsResponseAmino): _12.QueryParamsResponse;
                toAmino(message: _12.QueryParamsResponse): _12.QueryParamsResponseAmino;
                fromAminoMsg(object: _12.QueryParamsResponseAminoMsg): _12.QueryParamsResponse;
                fromProtoMsg(message: _12.QueryParamsResponseProtoMsg): _12.QueryParamsResponse;
                toProto(message: _12.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseProtoMsg;
            };
            QueryMedians: {
                typeUrl: string;
                encode(message: _12.QueryMedians, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryMedians;
                fromPartial(object: Partial<_12.QueryMedians>): _12.QueryMedians;
                fromAmino(object: _12.QueryMediansAmino): _12.QueryMedians;
                toAmino(message: _12.QueryMedians): _12.QueryMediansAmino;
                fromAminoMsg(object: _12.QueryMediansAminoMsg): _12.QueryMedians;
                fromProtoMsg(message: _12.QueryMediansProtoMsg): _12.QueryMedians;
                toProto(message: _12.QueryMedians): Uint8Array;
                toProtoMsg(message: _12.QueryMedians): _12.QueryMediansProtoMsg;
            };
            QueryMediansResponse: {
                typeUrl: string;
                encode(message: _12.QueryMediansResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryMediansResponse;
                fromPartial(object: Partial<_12.QueryMediansResponse>): _12.QueryMediansResponse;
                fromAmino(object: _12.QueryMediansResponseAmino): _12.QueryMediansResponse;
                toAmino(message: _12.QueryMediansResponse): _12.QueryMediansResponseAmino;
                fromAminoMsg(object: _12.QueryMediansResponseAminoMsg): _12.QueryMediansResponse;
                fromProtoMsg(message: _12.QueryMediansResponseProtoMsg): _12.QueryMediansResponse;
                toProto(message: _12.QueryMediansResponse): Uint8Array;
                toProtoMsg(message: _12.QueryMediansResponse): _12.QueryMediansResponseProtoMsg;
            };
            QueryMedianDeviations: {
                typeUrl: string;
                encode(message: _12.QueryMedianDeviations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryMedianDeviations;
                fromPartial(object: Partial<_12.QueryMedianDeviations>): _12.QueryMedianDeviations;
                fromAmino(object: _12.QueryMedianDeviationsAmino): _12.QueryMedianDeviations;
                toAmino(message: _12.QueryMedianDeviations): _12.QueryMedianDeviationsAmino;
                fromAminoMsg(object: _12.QueryMedianDeviationsAminoMsg): _12.QueryMedianDeviations;
                fromProtoMsg(message: _12.QueryMedianDeviationsProtoMsg): _12.QueryMedianDeviations;
                toProto(message: _12.QueryMedianDeviations): Uint8Array;
                toProtoMsg(message: _12.QueryMedianDeviations): _12.QueryMedianDeviationsProtoMsg;
            };
            QueryMedianDeviationsResponse: {
                typeUrl: string;
                encode(message: _12.QueryMedianDeviationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryMedianDeviationsResponse;
                fromPartial(object: Partial<_12.QueryMedianDeviationsResponse>): _12.QueryMedianDeviationsResponse;
                fromAmino(object: _12.QueryMedianDeviationsResponseAmino): _12.QueryMedianDeviationsResponse;
                toAmino(message: _12.QueryMedianDeviationsResponse): _12.QueryMedianDeviationsResponseAmino;
                fromAminoMsg(object: _12.QueryMedianDeviationsResponseAminoMsg): _12.QueryMedianDeviationsResponse;
                fromProtoMsg(message: _12.QueryMedianDeviationsResponseProtoMsg): _12.QueryMedianDeviationsResponse;
                toProto(message: _12.QueryMedianDeviationsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryMedianDeviationsResponse): _12.QueryMedianDeviationsResponseProtoMsg;
            };
            QueryAvgPrice: {
                typeUrl: string;
                encode(message: _12.QueryAvgPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAvgPrice;
                fromPartial(object: Partial<_12.QueryAvgPrice>): _12.QueryAvgPrice;
                fromAmino(object: _12.QueryAvgPriceAmino): _12.QueryAvgPrice;
                toAmino(message: _12.QueryAvgPrice): _12.QueryAvgPriceAmino;
                fromAminoMsg(object: _12.QueryAvgPriceAminoMsg): _12.QueryAvgPrice;
                fromProtoMsg(message: _12.QueryAvgPriceProtoMsg): _12.QueryAvgPrice;
                toProto(message: _12.QueryAvgPrice): Uint8Array;
                toProtoMsg(message: _12.QueryAvgPrice): _12.QueryAvgPriceProtoMsg;
            };
            QueryAvgPriceResponse: {
                typeUrl: string;
                encode(message: _12.QueryAvgPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryAvgPriceResponse;
                fromPartial(object: Partial<_12.QueryAvgPriceResponse>): _12.QueryAvgPriceResponse;
                fromAmino(object: _12.QueryAvgPriceResponseAmino): _12.QueryAvgPriceResponse;
                toAmino(message: _12.QueryAvgPriceResponse): _12.QueryAvgPriceResponseAmino;
                fromAminoMsg(object: _12.QueryAvgPriceResponseAminoMsg): _12.QueryAvgPriceResponse;
                fromProtoMsg(message: _12.QueryAvgPriceResponseProtoMsg): _12.QueryAvgPriceResponse;
                toProto(message: _12.QueryAvgPriceResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAvgPriceResponse): _12.QueryAvgPriceResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _11.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Params;
                fromPartial(object: Partial<_11.Params>): _11.Params;
                fromAmino(object: _11.ParamsAmino): _11.Params;
                toAmino(message: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _11.Denom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Denom;
                fromPartial(object: Partial<_11.Denom>): _11.Denom;
                fromAmino(object: _11.DenomAmino): _11.Denom;
                toAmino(message: _11.Denom): _11.DenomAmino;
                fromAminoMsg(object: _11.DenomAminoMsg): _11.Denom;
                fromProtoMsg(message: _11.DenomProtoMsg): _11.Denom;
                toProto(message: _11.Denom): Uint8Array;
                toProtoMsg(message: _11.Denom): _11.DenomProtoMsg;
            };
            AggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _11.AggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.AggregateExchangeRatePrevote;
                fromPartial(object: Partial<_11.AggregateExchangeRatePrevote>): _11.AggregateExchangeRatePrevote;
                fromAmino(object: _11.AggregateExchangeRatePrevoteAmino): _11.AggregateExchangeRatePrevote;
                toAmino(message: _11.AggregateExchangeRatePrevote): _11.AggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _11.AggregateExchangeRatePrevoteAminoMsg): _11.AggregateExchangeRatePrevote;
                fromProtoMsg(message: _11.AggregateExchangeRatePrevoteProtoMsg): _11.AggregateExchangeRatePrevote;
                toProto(message: _11.AggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _11.AggregateExchangeRatePrevote): _11.AggregateExchangeRatePrevoteProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _11.AggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.AggregateExchangeRateVote;
                fromPartial(object: Partial<_11.AggregateExchangeRateVote>): _11.AggregateExchangeRateVote;
                fromAmino(object: _11.AggregateExchangeRateVoteAmino): _11.AggregateExchangeRateVote;
                toAmino(message: _11.AggregateExchangeRateVote): _11.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _11.AggregateExchangeRateVoteAminoMsg): _11.AggregateExchangeRateVote;
                fromProtoMsg(message: _11.AggregateExchangeRateVoteProtoMsg): _11.AggregateExchangeRateVote;
                toProto(message: _11.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _11.AggregateExchangeRateVote): _11.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _11.ExchangeRateTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.ExchangeRateTuple;
                fromPartial(object: Partial<_11.ExchangeRateTuple>): _11.ExchangeRateTuple;
                fromAmino(object: _11.ExchangeRateTupleAmino): _11.ExchangeRateTuple;
                toAmino(message: _11.ExchangeRateTuple): _11.ExchangeRateTupleAmino;
                fromAminoMsg(object: _11.ExchangeRateTupleAminoMsg): _11.ExchangeRateTuple;
                fromProtoMsg(message: _11.ExchangeRateTupleProtoMsg): _11.ExchangeRateTuple;
                toProto(message: _11.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _11.ExchangeRateTuple): _11.ExchangeRateTupleProtoMsg;
            };
            AvgCounter: {
                typeUrl: string;
                encode(message: _11.AvgCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.AvgCounter;
                fromPartial(object: Partial<_11.AvgCounter>): _11.AvgCounter;
                fromAmino(object: _11.AvgCounterAmino): _11.AvgCounter;
                toAmino(message: _11.AvgCounter): _11.AvgCounterAmino;
                fromAminoMsg(object: _11.AvgCounterAminoMsg): _11.AvgCounter;
                fromProtoMsg(message: _11.AvgCounterProtoMsg): _11.AvgCounter;
                toProto(message: _11.AvgCounter): Uint8Array;
                toProtoMsg(message: _11.AvgCounter): _11.AvgCounterProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
            FeederDelegation: {
                typeUrl: string;
                encode(message: _10.FeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.FeederDelegation;
                fromPartial(object: Partial<_10.FeederDelegation>): _10.FeederDelegation;
                fromAmino(object: _10.FeederDelegationAmino): _10.FeederDelegation;
                toAmino(message: _10.FeederDelegation): _10.FeederDelegationAmino;
                fromAminoMsg(object: _10.FeederDelegationAminoMsg): _10.FeederDelegation;
                fromProtoMsg(message: _10.FeederDelegationProtoMsg): _10.FeederDelegation;
                toProto(message: _10.FeederDelegation): Uint8Array;
                toProtoMsg(message: _10.FeederDelegation): _10.FeederDelegationProtoMsg;
            };
            MissCounter: {
                typeUrl: string;
                encode(message: _10.MissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.MissCounter;
                fromPartial(object: Partial<_10.MissCounter>): _10.MissCounter;
                fromAmino(object: _10.MissCounterAmino): _10.MissCounter;
                toAmino(message: _10.MissCounter): _10.MissCounterAmino;
                fromAminoMsg(object: _10.MissCounterAminoMsg): _10.MissCounter;
                fromProtoMsg(message: _10.MissCounterProtoMsg): _10.MissCounter;
                toProto(message: _10.MissCounter): Uint8Array;
                toProtoMsg(message: _10.MissCounter): _10.MissCounterProtoMsg;
            };
            Price: {
                typeUrl: string;
                encode(message: _10.Price, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.Price;
                fromPartial(object: Partial<_10.Price>): _10.Price;
                fromAmino(object: _10.PriceAmino): _10.Price;
                toAmino(message: _10.Price): _10.PriceAmino;
                fromAminoMsg(object: _10.PriceAminoMsg): _10.Price;
                fromProtoMsg(message: _10.PriceProtoMsg): _10.Price;
                toProto(message: _10.Price): Uint8Array;
                toProtoMsg(message: _10.Price): _10.PriceProtoMsg;
            };
            EventDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _9.EventDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EventDelegateFeedConsent;
                fromPartial(object: Partial<_9.EventDelegateFeedConsent>): _9.EventDelegateFeedConsent;
                fromAmino(object: _9.EventDelegateFeedConsentAmino): _9.EventDelegateFeedConsent;
                toAmino(message: _9.EventDelegateFeedConsent): _9.EventDelegateFeedConsentAmino;
                fromAminoMsg(object: _9.EventDelegateFeedConsentAminoMsg): _9.EventDelegateFeedConsent;
                fromProtoMsg(message: _9.EventDelegateFeedConsentProtoMsg): _9.EventDelegateFeedConsent;
                toProto(message: _9.EventDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _9.EventDelegateFeedConsent): _9.EventDelegateFeedConsentProtoMsg;
            };
            EventSetFxRate: {
                typeUrl: string;
                encode(message: _9.EventSetFxRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EventSetFxRate;
                fromPartial(object: Partial<_9.EventSetFxRate>): _9.EventSetFxRate;
                fromAmino(object: _9.EventSetFxRateAmino): _9.EventSetFxRate;
                toAmino(message: _9.EventSetFxRate): _9.EventSetFxRateAmino;
                fromAminoMsg(object: _9.EventSetFxRateAminoMsg): _9.EventSetFxRate;
                fromProtoMsg(message: _9.EventSetFxRateProtoMsg): _9.EventSetFxRate;
                toProto(message: _9.EventSetFxRate): Uint8Array;
                toProtoMsg(message: _9.EventSetFxRate): _9.EventSetFxRateProtoMsg;
            };
        };
    }
    namespace ugov {
        const v1: {
            MsgClientImpl: typeof _161.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                minGasPrice(request?: _16.QueryMinGasPrice): Promise<_16.QueryMinGasPriceResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
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
                    toAmino: (message: _17.MsgGovUpdateMinGasPrice) => _17.MsgGovUpdateMinGasPriceAmino;
                    fromAmino: (object: _17.MsgGovUpdateMinGasPriceAmino) => _17.MsgGovUpdateMinGasPrice;
                };
            };
            MsgGovUpdateMinGasPrice: {
                typeUrl: string;
                encode(message: _17.MsgGovUpdateMinGasPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgGovUpdateMinGasPrice;
                fromPartial(object: Partial<_17.MsgGovUpdateMinGasPrice>): _17.MsgGovUpdateMinGasPrice;
                fromAmino(object: _17.MsgGovUpdateMinGasPriceAmino): _17.MsgGovUpdateMinGasPrice;
                toAmino(message: _17.MsgGovUpdateMinGasPrice): _17.MsgGovUpdateMinGasPriceAmino;
                fromAminoMsg(object: _17.MsgGovUpdateMinGasPriceAminoMsg): _17.MsgGovUpdateMinGasPrice;
                fromProtoMsg(message: _17.MsgGovUpdateMinGasPriceProtoMsg): _17.MsgGovUpdateMinGasPrice;
                toProto(message: _17.MsgGovUpdateMinGasPrice): Uint8Array;
                toProtoMsg(message: _17.MsgGovUpdateMinGasPrice): _17.MsgGovUpdateMinGasPriceProtoMsg;
            };
            MsgGovUpdateMinGasPriceResponse: {
                typeUrl: string;
                encode(_: _17.MsgGovUpdateMinGasPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgGovUpdateMinGasPriceResponse;
                fromPartial(_: Partial<_17.MsgGovUpdateMinGasPriceResponse>): _17.MsgGovUpdateMinGasPriceResponse;
                fromAmino(_: _17.MsgGovUpdateMinGasPriceResponseAmino): _17.MsgGovUpdateMinGasPriceResponse;
                toAmino(_: _17.MsgGovUpdateMinGasPriceResponse): _17.MsgGovUpdateMinGasPriceResponseAmino;
                fromAminoMsg(object: _17.MsgGovUpdateMinGasPriceResponseAminoMsg): _17.MsgGovUpdateMinGasPriceResponse;
                fromProtoMsg(message: _17.MsgGovUpdateMinGasPriceResponseProtoMsg): _17.MsgGovUpdateMinGasPriceResponse;
                toProto(message: _17.MsgGovUpdateMinGasPriceResponse): Uint8Array;
                toProtoMsg(message: _17.MsgGovUpdateMinGasPriceResponse): _17.MsgGovUpdateMinGasPriceResponseProtoMsg;
            };
            QueryMinGasPrice: {
                typeUrl: string;
                encode(_: _16.QueryMinGasPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _16.QueryMinGasPrice;
                fromPartial(_: Partial<_16.QueryMinGasPrice>): _16.QueryMinGasPrice;
                fromAmino(_: _16.QueryMinGasPriceAmino): _16.QueryMinGasPrice;
                toAmino(_: _16.QueryMinGasPrice): _16.QueryMinGasPriceAmino;
                fromAminoMsg(object: _16.QueryMinGasPriceAminoMsg): _16.QueryMinGasPrice;
                fromProtoMsg(message: _16.QueryMinGasPriceProtoMsg): _16.QueryMinGasPrice;
                toProto(message: _16.QueryMinGasPrice): Uint8Array;
                toProtoMsg(message: _16.QueryMinGasPrice): _16.QueryMinGasPriceProtoMsg;
            };
            QueryMinGasPriceResponse: {
                typeUrl: string;
                encode(message: _16.QueryMinGasPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.QueryMinGasPriceResponse;
                fromPartial(object: Partial<_16.QueryMinGasPriceResponse>): _16.QueryMinGasPriceResponse;
                fromAmino(object: _16.QueryMinGasPriceResponseAmino): _16.QueryMinGasPriceResponse;
                toAmino(message: _16.QueryMinGasPriceResponse): _16.QueryMinGasPriceResponseAmino;
                fromAminoMsg(object: _16.QueryMinGasPriceResponseAminoMsg): _16.QueryMinGasPriceResponse;
                fromProtoMsg(message: _16.QueryMinGasPriceResponseProtoMsg): _16.QueryMinGasPriceResponse;
                toProto(message: _16.QueryMinGasPriceResponse): Uint8Array;
                toProtoMsg(message: _16.QueryMinGasPriceResponse): _16.QueryMinGasPriceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _15.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.GenesisState;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
                fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
                toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
                fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                toProto(message: _15.GenesisState): Uint8Array;
                toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
            };
            EventMinTxFees: {
                typeUrl: string;
                encode(message: _14.EventMinTxFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventMinTxFees;
                fromPartial(object: Partial<_14.EventMinTxFees>): _14.EventMinTxFees;
                fromAmino(object: _14.EventMinTxFeesAmino): _14.EventMinTxFees;
                toAmino(message: _14.EventMinTxFees): _14.EventMinTxFeesAmino;
                fromAminoMsg(object: _14.EventMinTxFeesAminoMsg): _14.EventMinTxFees;
                fromProtoMsg(message: _14.EventMinTxFeesProtoMsg): _14.EventMinTxFees;
                toProto(message: _14.EventMinTxFees): Uint8Array;
                toProtoMsg(message: _14.EventMinTxFees): _14.EventMinTxFeesProtoMsg;
            };
        };
    }
    namespace uibc {
        const v1: {
            MsgClientImpl: typeof _162.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _20.QueryParams): Promise<_20.QueryParamsResponse>;
                outflows(request: _20.QueryOutflows): Promise<_20.QueryOutflowsResponse>;
                allOutflows(request?: _20.QueryAllOutflows): Promise<_20.QueryAllOutflowsResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
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
                    toAmino: (message: _22.MsgGovUpdateQuota) => _22.MsgGovUpdateQuotaAmino;
                    fromAmino: (object: _22.MsgGovUpdateQuotaAmino) => _22.MsgGovUpdateQuota;
                };
                "/umee.uibc.v1.MsgGovSetIBCStatus": {
                    aminoType: string;
                    toAmino: (message: _22.MsgGovSetIBCStatus) => _22.MsgGovSetIBCStatusAmino;
                    fromAmino: (object: _22.MsgGovSetIBCStatusAmino) => _22.MsgGovSetIBCStatus;
                };
            };
            MsgGovUpdateQuota: {
                typeUrl: string;
                encode(message: _22.MsgGovUpdateQuota, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgGovUpdateQuota;
                fromPartial(object: Partial<_22.MsgGovUpdateQuota>): _22.MsgGovUpdateQuota;
                fromAmino(object: _22.MsgGovUpdateQuotaAmino): _22.MsgGovUpdateQuota;
                toAmino(message: _22.MsgGovUpdateQuota): _22.MsgGovUpdateQuotaAmino;
                fromAminoMsg(object: _22.MsgGovUpdateQuotaAminoMsg): _22.MsgGovUpdateQuota;
                fromProtoMsg(message: _22.MsgGovUpdateQuotaProtoMsg): _22.MsgGovUpdateQuota;
                toProto(message: _22.MsgGovUpdateQuota): Uint8Array;
                toProtoMsg(message: _22.MsgGovUpdateQuota): _22.MsgGovUpdateQuotaProtoMsg;
            };
            MsgGovUpdateQuotaResponse: {
                typeUrl: string;
                encode(_: _22.MsgGovUpdateQuotaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgGovUpdateQuotaResponse;
                fromPartial(_: Partial<_22.MsgGovUpdateQuotaResponse>): _22.MsgGovUpdateQuotaResponse;
                fromAmino(_: _22.MsgGovUpdateQuotaResponseAmino): _22.MsgGovUpdateQuotaResponse;
                toAmino(_: _22.MsgGovUpdateQuotaResponse): _22.MsgGovUpdateQuotaResponseAmino;
                fromAminoMsg(object: _22.MsgGovUpdateQuotaResponseAminoMsg): _22.MsgGovUpdateQuotaResponse;
                fromProtoMsg(message: _22.MsgGovUpdateQuotaResponseProtoMsg): _22.MsgGovUpdateQuotaResponse;
                toProto(message: _22.MsgGovUpdateQuotaResponse): Uint8Array;
                toProtoMsg(message: _22.MsgGovUpdateQuotaResponse): _22.MsgGovUpdateQuotaResponseProtoMsg;
            };
            MsgGovSetIBCStatus: {
                typeUrl: string;
                encode(message: _22.MsgGovSetIBCStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgGovSetIBCStatus;
                fromPartial(object: Partial<_22.MsgGovSetIBCStatus>): _22.MsgGovSetIBCStatus;
                fromAmino(object: _22.MsgGovSetIBCStatusAmino): _22.MsgGovSetIBCStatus;
                toAmino(message: _22.MsgGovSetIBCStatus): _22.MsgGovSetIBCStatusAmino;
                fromAminoMsg(object: _22.MsgGovSetIBCStatusAminoMsg): _22.MsgGovSetIBCStatus;
                fromProtoMsg(message: _22.MsgGovSetIBCStatusProtoMsg): _22.MsgGovSetIBCStatus;
                toProto(message: _22.MsgGovSetIBCStatus): Uint8Array;
                toProtoMsg(message: _22.MsgGovSetIBCStatus): _22.MsgGovSetIBCStatusProtoMsg;
            };
            MsgGovSetIBCStatusResponse: {
                typeUrl: string;
                encode(_: _22.MsgGovSetIBCStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgGovSetIBCStatusResponse;
                fromPartial(_: Partial<_22.MsgGovSetIBCStatusResponse>): _22.MsgGovSetIBCStatusResponse;
                fromAmino(_: _22.MsgGovSetIBCStatusResponseAmino): _22.MsgGovSetIBCStatusResponse;
                toAmino(_: _22.MsgGovSetIBCStatusResponse): _22.MsgGovSetIBCStatusResponseAmino;
                fromAminoMsg(object: _22.MsgGovSetIBCStatusResponseAminoMsg): _22.MsgGovSetIBCStatusResponse;
                fromProtoMsg(message: _22.MsgGovSetIBCStatusResponseProtoMsg): _22.MsgGovSetIBCStatusResponse;
                toProto(message: _22.MsgGovSetIBCStatusResponse): Uint8Array;
                toProtoMsg(message: _22.MsgGovSetIBCStatusResponse): _22.MsgGovSetIBCStatusResponseProtoMsg;
            };
            iBCTransferStatusFromJSON(object: any): _21.IBCTransferStatus;
            iBCTransferStatusToJSON(object: _21.IBCTransferStatus): string;
            IBCTransferStatus: typeof _21.IBCTransferStatus;
            IBCTransferStatusSDKType: typeof _21.IBCTransferStatus;
            IBCTransferStatusAmino: typeof _21.IBCTransferStatus;
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
            QueryParams: {
                typeUrl: string;
                encode(_: _20.QueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryParams;
                fromPartial(_: Partial<_20.QueryParams>): _20.QueryParams;
                fromAmino(_: _20.QueryParamsAmino): _20.QueryParams;
                toAmino(_: _20.QueryParams): _20.QueryParamsAmino;
                fromAminoMsg(object: _20.QueryParamsAminoMsg): _20.QueryParams;
                fromProtoMsg(message: _20.QueryParamsProtoMsg): _20.QueryParams;
                toProto(message: _20.QueryParams): Uint8Array;
                toProtoMsg(message: _20.QueryParams): _20.QueryParamsProtoMsg;
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
            QueryOutflows: {
                typeUrl: string;
                encode(message: _20.QueryOutflows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryOutflows;
                fromPartial(object: Partial<_20.QueryOutflows>): _20.QueryOutflows;
                fromAmino(object: _20.QueryOutflowsAmino): _20.QueryOutflows;
                toAmino(message: _20.QueryOutflows): _20.QueryOutflowsAmino;
                fromAminoMsg(object: _20.QueryOutflowsAminoMsg): _20.QueryOutflows;
                fromProtoMsg(message: _20.QueryOutflowsProtoMsg): _20.QueryOutflows;
                toProto(message: _20.QueryOutflows): Uint8Array;
                toProtoMsg(message: _20.QueryOutflows): _20.QueryOutflowsProtoMsg;
            };
            QueryOutflowsResponse: {
                typeUrl: string;
                encode(message: _20.QueryOutflowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryOutflowsResponse;
                fromPartial(object: Partial<_20.QueryOutflowsResponse>): _20.QueryOutflowsResponse;
                fromAmino(object: _20.QueryOutflowsResponseAmino): _20.QueryOutflowsResponse;
                toAmino(message: _20.QueryOutflowsResponse): _20.QueryOutflowsResponseAmino;
                fromAminoMsg(object: _20.QueryOutflowsResponseAminoMsg): _20.QueryOutflowsResponse;
                fromProtoMsg(message: _20.QueryOutflowsResponseProtoMsg): _20.QueryOutflowsResponse;
                toProto(message: _20.QueryOutflowsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryOutflowsResponse): _20.QueryOutflowsResponseProtoMsg;
            };
            QueryAllOutflows: {
                typeUrl: string;
                encode(_: _20.QueryAllOutflows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _20.QueryAllOutflows;
                fromPartial(_: Partial<_20.QueryAllOutflows>): _20.QueryAllOutflows;
                fromAmino(_: _20.QueryAllOutflowsAmino): _20.QueryAllOutflows;
                toAmino(_: _20.QueryAllOutflows): _20.QueryAllOutflowsAmino;
                fromAminoMsg(object: _20.QueryAllOutflowsAminoMsg): _20.QueryAllOutflows;
                fromProtoMsg(message: _20.QueryAllOutflowsProtoMsg): _20.QueryAllOutflows;
                toProto(message: _20.QueryAllOutflows): Uint8Array;
                toProtoMsg(message: _20.QueryAllOutflows): _20.QueryAllOutflowsProtoMsg;
            };
            QueryAllOutflowsResponse: {
                typeUrl: string;
                encode(message: _20.QueryAllOutflowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.QueryAllOutflowsResponse;
                fromPartial(object: Partial<_20.QueryAllOutflowsResponse>): _20.QueryAllOutflowsResponse;
                fromAmino(object: _20.QueryAllOutflowsResponseAmino): _20.QueryAllOutflowsResponse;
                toAmino(message: _20.QueryAllOutflowsResponse): _20.QueryAllOutflowsResponseAmino;
                fromAminoMsg(object: _20.QueryAllOutflowsResponseAminoMsg): _20.QueryAllOutflowsResponse;
                fromProtoMsg(message: _20.QueryAllOutflowsResponseProtoMsg): _20.QueryAllOutflowsResponse;
                toProto(message: _20.QueryAllOutflowsResponse): Uint8Array;
                toProtoMsg(message: _20.QueryAllOutflowsResponse): _20.QueryAllOutflowsResponseProtoMsg;
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
            EventBadRevert: {
                typeUrl: string;
                encode(message: _18.EventBadRevert, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.EventBadRevert;
                fromPartial(object: Partial<_18.EventBadRevert>): _18.EventBadRevert;
                fromAmino(object: _18.EventBadRevertAmino): _18.EventBadRevert;
                toAmino(message: _18.EventBadRevert): _18.EventBadRevertAmino;
                fromAminoMsg(object: _18.EventBadRevertAminoMsg): _18.EventBadRevert;
                fromProtoMsg(message: _18.EventBadRevertProtoMsg): _18.EventBadRevert;
                toProto(message: _18.EventBadRevert): Uint8Array;
                toProtoMsg(message: _18.EventBadRevert): _18.EventBadRevertProtoMsg;
            };
            EventIBCTransferStatus: {
                typeUrl: string;
                encode(message: _18.EventIBCTransferStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.EventIBCTransferStatus;
                fromPartial(object: Partial<_18.EventIBCTransferStatus>): _18.EventIBCTransferStatus;
                fromAmino(object: _18.EventIBCTransferStatusAmino): _18.EventIBCTransferStatus;
                toAmino(message: _18.EventIBCTransferStatus): _18.EventIBCTransferStatusAmino;
                fromAminoMsg(object: _18.EventIBCTransferStatusAminoMsg): _18.EventIBCTransferStatus;
                fromProtoMsg(message: _18.EventIBCTransferStatusProtoMsg): _18.EventIBCTransferStatus;
                toProto(message: _18.EventIBCTransferStatus): Uint8Array;
                toProtoMsg(message: _18.EventIBCTransferStatus): _18.EventIBCTransferStatusProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            umee: {
                incentive: {
                    v1: _158.MsgClientImpl;
                };
                leverage: {
                    v1: _159.MsgClientImpl;
                };
                oracle: {
                    v1: _160.MsgClientImpl;
                };
                ugov: {
                    v1: _161.MsgClientImpl;
                };
                uibc: {
                    v1: _162.MsgClientImpl;
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
                    v1: _148.LCDQueryClient;
                };
                leverage: {
                    v1: _149.LCDQueryClient;
                };
                oracle: {
                    v1: _150.LCDQueryClient;
                };
                ugov: {
                    v1: _151.LCDQueryClient;
                };
                uibc: {
                    v1: _152.LCDQueryClient;
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
