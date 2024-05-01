import * as _0 from "./incentive/v1/genesis";
import * as _1 from "./incentive/v1/incentive";
import * as _2 from "./incentive/v1/query";
import * as _3 from "./incentive/v1/tx";
import * as _4 from "./leverage/v1/events";
import * as _5 from "./leverage/v1/genesis";
import * as _6 from "./leverage/v1/leverage";
import * as _7 from "./leverage/v1/query";
import * as _8 from "./leverage/v1/tx";
import * as _9 from "./metoken/v1/events";
import * as _10 from "./metoken/v1/genesis";
import * as _11 from "./metoken/v1/metoken";
import * as _12 from "./metoken/v1/query";
import * as _13 from "./metoken/v1/tx";
import * as _14 from "./oracle/v1/events";
import * as _15 from "./oracle/v1/genesis";
import * as _16 from "./oracle/v1/oracle";
import * as _17 from "./oracle/v1/query";
import * as _18 from "./oracle/v1/tx";
import * as _19 from "./ugov/v1/events";
import * as _20 from "./ugov/v1/genesis";
import * as _21 from "./ugov/v1/query";
import * as _22 from "./ugov/v1/tx";
import * as _23 from "./ugov/v1/ugov";
import * as _24 from "./uibc/v1/events";
import * as _25 from "./uibc/v1/genesis";
import * as _26 from "./uibc/v1/query";
import * as _27 from "./uibc/v1/quota";
import * as _28 from "./uibc/v1/tx";
import * as _29 from "./uibc/v1/uibc";
import * as _193 from "./incentive/v1/query.lcd";
import * as _194 from "./leverage/v1/query.lcd";
import * as _195 from "./metoken/v1/query.lcd";
import * as _196 from "./oracle/v1/query.lcd";
import * as _197 from "./ugov/v1/query.lcd";
import * as _198 from "./uibc/v1/query.lcd";
import * as _199 from "./incentive/v1/query.rpc.Query";
import * as _200 from "./leverage/v1/query.rpc.Query";
import * as _201 from "./metoken/v1/query.rpc.Query";
import * as _202 from "./oracle/v1/query.rpc.Query";
import * as _203 from "./ugov/v1/query.rpc.Query";
import * as _204 from "./uibc/v1/query.rpc.Query";
import * as _205 from "./incentive/v1/tx.rpc.msg";
import * as _206 from "./leverage/v1/tx.rpc.msg";
import * as _207 from "./metoken/v1/tx.rpc.msg";
import * as _208 from "./oracle/v1/tx.rpc.msg";
import * as _209 from "./ugov/v1/tx.rpc.msg";
import * as _210 from "./uibc/v1/tx.rpc.msg";
export declare namespace umee {
    namespace incentive {
        const v1: {
            MsgClientImpl: typeof _205.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
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
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
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
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _7.QueryParams): Promise<_7.QueryParamsResponse>;
                registeredTokens(request: _7.QueryRegisteredTokens): Promise<_7.QueryRegisteredTokensResponse>;
                registeredTokensWithMarkets(request?: _7.QueryRegisteredTokensWithMarkets): Promise<_7.QueryRegisteredTokensWithMarketsResponse>;
                specialAssets(request: _7.QuerySpecialAssets): Promise<_7.QuerySpecialAssetsResponse>;
                marketSummary(request: _7.QueryMarketSummary): Promise<_7.QueryMarketSummaryResponse>;
                accountBalances(request: _7.QueryAccountBalances): Promise<_7.QueryAccountBalancesResponse>;
                accountSummary(request: _7.QueryAccountSummary): Promise<_7.QueryAccountSummaryResponse>;
                liquidationTargets(request?: _7.QueryLiquidationTargets): Promise<_7.QueryLiquidationTargetsResponse>;
                badDebts(request?: _7.QueryBadDebts): Promise<_7.QueryBadDebtsResponse>;
                maxWithdraw(request: _7.QueryMaxWithdraw): Promise<_7.QueryMaxWithdrawResponse>;
                maxBorrow(request: _7.QueryMaxBorrow): Promise<_7.QueryMaxBorrowResponse>;
                inspect(request: _7.QueryInspect): Promise<_7.QueryInspectResponse>;
                inspectAccount(request: _7.QueryInspectAccount): Promise<_7.QueryInspectAccountResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
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
                    govUpdateSpecialAssets(value: _8.MsgGovUpdateSpecialAssets): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govSetParams(value: _8.MsgGovSetParams): {
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
                    govUpdateSpecialAssets(value: _8.MsgGovUpdateSpecialAssets): {
                        typeUrl: string;
                        value: _8.MsgGovUpdateSpecialAssets;
                    };
                    govSetParams(value: _8.MsgGovSetParams): {
                        typeUrl: string;
                        value: _8.MsgGovSetParams;
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
                    govUpdateSpecialAssets(value: any): {
                        typeUrl: string;
                        value: _8.MsgGovUpdateSpecialAssets;
                    };
                    govSetParams(value: any): {
                        typeUrl: string;
                        value: _8.MsgGovSetParams;
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
                    govUpdateSpecialAssets(value: _8.MsgGovUpdateSpecialAssets): {
                        typeUrl: string;
                        value: _8.MsgGovUpdateSpecialAssets;
                    };
                    govSetParams(value: _8.MsgGovSetParams): {
                        typeUrl: string;
                        value: _8.MsgGovSetParams;
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
                "/umee.leverage.v1.MsgGovUpdateSpecialAssets": {
                    aminoType: string;
                    toAmino: (message: _8.MsgGovUpdateSpecialAssets) => _8.MsgGovUpdateSpecialAssetsAmino;
                    fromAmino: (object: _8.MsgGovUpdateSpecialAssetsAmino) => _8.MsgGovUpdateSpecialAssets;
                };
                "/umee.leverage.v1.MsgGovSetParams": {
                    aminoType: string;
                    toAmino: (message: _8.MsgGovSetParams) => _8.MsgGovSetParamsAmino;
                    fromAmino: (object: _8.MsgGovSetParamsAmino) => _8.MsgGovSetParams;
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
            MsgGovUpdateSpecialAssets: {
                typeUrl: string;
                encode(message: _8.MsgGovUpdateSpecialAssets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgGovUpdateSpecialAssets;
                fromPartial(object: Partial<_8.MsgGovUpdateSpecialAssets>): _8.MsgGovUpdateSpecialAssets;
                fromAmino(object: _8.MsgGovUpdateSpecialAssetsAmino): _8.MsgGovUpdateSpecialAssets;
                toAmino(message: _8.MsgGovUpdateSpecialAssets): _8.MsgGovUpdateSpecialAssetsAmino;
                fromAminoMsg(object: _8.MsgGovUpdateSpecialAssetsAminoMsg): _8.MsgGovUpdateSpecialAssets;
                fromProtoMsg(message: _8.MsgGovUpdateSpecialAssetsProtoMsg): _8.MsgGovUpdateSpecialAssets;
                toProto(message: _8.MsgGovUpdateSpecialAssets): Uint8Array;
                toProtoMsg(message: _8.MsgGovUpdateSpecialAssets): _8.MsgGovUpdateSpecialAssetsProtoMsg;
            };
            MsgGovUpdateSpecialAssetsResponse: {
                typeUrl: string;
                encode(_: _8.MsgGovUpdateSpecialAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgGovUpdateSpecialAssetsResponse;
                fromPartial(_: Partial<_8.MsgGovUpdateSpecialAssetsResponse>): _8.MsgGovUpdateSpecialAssetsResponse;
                fromAmino(_: _8.MsgGovUpdateSpecialAssetsResponseAmino): _8.MsgGovUpdateSpecialAssetsResponse;
                toAmino(_: _8.MsgGovUpdateSpecialAssetsResponse): _8.MsgGovUpdateSpecialAssetsResponseAmino;
                fromAminoMsg(object: _8.MsgGovUpdateSpecialAssetsResponseAminoMsg): _8.MsgGovUpdateSpecialAssetsResponse;
                fromProtoMsg(message: _8.MsgGovUpdateSpecialAssetsResponseProtoMsg): _8.MsgGovUpdateSpecialAssetsResponse;
                toProto(message: _8.MsgGovUpdateSpecialAssetsResponse): Uint8Array;
                toProtoMsg(message: _8.MsgGovUpdateSpecialAssetsResponse): _8.MsgGovUpdateSpecialAssetsResponseProtoMsg;
            };
            MsgGovSetParams: {
                typeUrl: string;
                encode(message: _8.MsgGovSetParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.MsgGovSetParams;
                fromPartial(object: Partial<_8.MsgGovSetParams>): _8.MsgGovSetParams;
                fromAmino(object: _8.MsgGovSetParamsAmino): _8.MsgGovSetParams;
                toAmino(message: _8.MsgGovSetParams): _8.MsgGovSetParamsAmino;
                fromAminoMsg(object: _8.MsgGovSetParamsAminoMsg): _8.MsgGovSetParams;
                fromProtoMsg(message: _8.MsgGovSetParamsProtoMsg): _8.MsgGovSetParams;
                toProto(message: _8.MsgGovSetParams): Uint8Array;
                toProtoMsg(message: _8.MsgGovSetParams): _8.MsgGovSetParamsProtoMsg;
            };
            MsgGovSetParamsResponse: {
                typeUrl: string;
                encode(_: _8.MsgGovSetParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _8.MsgGovSetParamsResponse;
                fromPartial(_: Partial<_8.MsgGovSetParamsResponse>): _8.MsgGovSetParamsResponse;
                fromAmino(_: _8.MsgGovSetParamsResponseAmino): _8.MsgGovSetParamsResponse;
                toAmino(_: _8.MsgGovSetParamsResponse): _8.MsgGovSetParamsResponseAmino;
                fromAminoMsg(object: _8.MsgGovSetParamsResponseAminoMsg): _8.MsgGovSetParamsResponse;
                fromProtoMsg(message: _8.MsgGovSetParamsResponseProtoMsg): _8.MsgGovSetParamsResponse;
                toProto(message: _8.MsgGovSetParamsResponse): Uint8Array;
                toProtoMsg(message: _8.MsgGovSetParamsResponse): _8.MsgGovSetParamsResponseProtoMsg;
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
            QueryRegisteredTokensWithMarkets: {
                typeUrl: string;
                encode(_: _7.QueryRegisteredTokensWithMarkets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _7.QueryRegisteredTokensWithMarkets;
                fromPartial(_: Partial<_7.QueryRegisteredTokensWithMarkets>): _7.QueryRegisteredTokensWithMarkets;
                fromAmino(_: _7.QueryRegisteredTokensWithMarketsAmino): _7.QueryRegisteredTokensWithMarkets;
                toAmino(_: _7.QueryRegisteredTokensWithMarkets): _7.QueryRegisteredTokensWithMarketsAmino;
                fromAminoMsg(object: _7.QueryRegisteredTokensWithMarketsAminoMsg): _7.QueryRegisteredTokensWithMarkets;
                fromProtoMsg(message: _7.QueryRegisteredTokensWithMarketsProtoMsg): _7.QueryRegisteredTokensWithMarkets;
                toProto(message: _7.QueryRegisteredTokensWithMarkets): Uint8Array;
                toProtoMsg(message: _7.QueryRegisteredTokensWithMarkets): _7.QueryRegisteredTokensWithMarketsProtoMsg;
            };
            QueryRegisteredTokensWithMarketsResponse: {
                typeUrl: string;
                encode(message: _7.QueryRegisteredTokensWithMarketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryRegisteredTokensWithMarketsResponse;
                fromPartial(object: Partial<_7.QueryRegisteredTokensWithMarketsResponse>): _7.QueryRegisteredTokensWithMarketsResponse;
                fromAmino(object: _7.QueryRegisteredTokensWithMarketsResponseAmino): _7.QueryRegisteredTokensWithMarketsResponse;
                toAmino(message: _7.QueryRegisteredTokensWithMarketsResponse): _7.QueryRegisteredTokensWithMarketsResponseAmino;
                fromAminoMsg(object: _7.QueryRegisteredTokensWithMarketsResponseAminoMsg): _7.QueryRegisteredTokensWithMarketsResponse;
                fromProtoMsg(message: _7.QueryRegisteredTokensWithMarketsResponseProtoMsg): _7.QueryRegisteredTokensWithMarketsResponse;
                toProto(message: _7.QueryRegisteredTokensWithMarketsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryRegisteredTokensWithMarketsResponse): _7.QueryRegisteredTokensWithMarketsResponseProtoMsg;
            };
            TokenMarket: {
                typeUrl: string;
                encode(message: _7.TokenMarket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.TokenMarket;
                fromPartial(object: Partial<_7.TokenMarket>): _7.TokenMarket;
                fromAmino(object: _7.TokenMarketAmino): _7.TokenMarket;
                toAmino(message: _7.TokenMarket): _7.TokenMarketAmino;
                fromAminoMsg(object: _7.TokenMarketAminoMsg): _7.TokenMarket;
                fromProtoMsg(message: _7.TokenMarketProtoMsg): _7.TokenMarket;
                toProto(message: _7.TokenMarket): Uint8Array;
                toProtoMsg(message: _7.TokenMarket): _7.TokenMarketProtoMsg;
            };
            QuerySpecialAssets: {
                typeUrl: string;
                encode(message: _7.QuerySpecialAssets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QuerySpecialAssets;
                fromPartial(object: Partial<_7.QuerySpecialAssets>): _7.QuerySpecialAssets;
                fromAmino(object: _7.QuerySpecialAssetsAmino): _7.QuerySpecialAssets;
                toAmino(message: _7.QuerySpecialAssets): _7.QuerySpecialAssetsAmino;
                fromAminoMsg(object: _7.QuerySpecialAssetsAminoMsg): _7.QuerySpecialAssets;
                fromProtoMsg(message: _7.QuerySpecialAssetsProtoMsg): _7.QuerySpecialAssets;
                toProto(message: _7.QuerySpecialAssets): Uint8Array;
                toProtoMsg(message: _7.QuerySpecialAssets): _7.QuerySpecialAssetsProtoMsg;
            };
            QuerySpecialAssetsResponse: {
                typeUrl: string;
                encode(message: _7.QuerySpecialAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QuerySpecialAssetsResponse;
                fromPartial(object: Partial<_7.QuerySpecialAssetsResponse>): _7.QuerySpecialAssetsResponse;
                fromAmino(object: _7.QuerySpecialAssetsResponseAmino): _7.QuerySpecialAssetsResponse;
                toAmino(message: _7.QuerySpecialAssetsResponse): _7.QuerySpecialAssetsResponseAmino;
                fromAminoMsg(object: _7.QuerySpecialAssetsResponseAminoMsg): _7.QuerySpecialAssetsResponse;
                fromProtoMsg(message: _7.QuerySpecialAssetsResponseProtoMsg): _7.QuerySpecialAssetsResponse;
                toProto(message: _7.QuerySpecialAssetsResponse): Uint8Array;
                toProtoMsg(message: _7.QuerySpecialAssetsResponse): _7.QuerySpecialAssetsResponseProtoMsg;
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
            QueryInspectAccount: {
                typeUrl: string;
                encode(message: _7.QueryInspectAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryInspectAccount;
                fromPartial(object: Partial<_7.QueryInspectAccount>): _7.QueryInspectAccount;
                fromAmino(object: _7.QueryInspectAccountAmino): _7.QueryInspectAccount;
                toAmino(message: _7.QueryInspectAccount): _7.QueryInspectAccountAmino;
                fromAminoMsg(object: _7.QueryInspectAccountAminoMsg): _7.QueryInspectAccount;
                fromProtoMsg(message: _7.QueryInspectAccountProtoMsg): _7.QueryInspectAccount;
                toProto(message: _7.QueryInspectAccount): Uint8Array;
                toProtoMsg(message: _7.QueryInspectAccount): _7.QueryInspectAccountProtoMsg;
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
            QueryInspectAccountResponse: {
                typeUrl: string;
                encode(message: _7.QueryInspectAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.QueryInspectAccountResponse;
                fromPartial(object: Partial<_7.QueryInspectAccountResponse>): _7.QueryInspectAccountResponse;
                fromAmino(object: _7.QueryInspectAccountResponseAmino): _7.QueryInspectAccountResponse;
                toAmino(message: _7.QueryInspectAccountResponse): _7.QueryInspectAccountResponseAmino;
                fromAminoMsg(object: _7.QueryInspectAccountResponseAminoMsg): _7.QueryInspectAccountResponse;
                fromProtoMsg(message: _7.QueryInspectAccountResponseProtoMsg): _7.QueryInspectAccountResponse;
                toProto(message: _7.QueryInspectAccountResponse): Uint8Array;
                toProtoMsg(message: _7.QueryInspectAccountResponse): _7.QueryInspectAccountResponseProtoMsg;
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
            SpecialAssetPair: {
                typeUrl: string;
                encode(message: _6.SpecialAssetPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.SpecialAssetPair;
                fromPartial(object: Partial<_6.SpecialAssetPair>): _6.SpecialAssetPair;
                fromAmino(object: _6.SpecialAssetPairAmino): _6.SpecialAssetPair;
                toAmino(message: _6.SpecialAssetPair): _6.SpecialAssetPairAmino;
                fromAminoMsg(object: _6.SpecialAssetPairAminoMsg): _6.SpecialAssetPair;
                fromProtoMsg(message: _6.SpecialAssetPairProtoMsg): _6.SpecialAssetPair;
                toProto(message: _6.SpecialAssetPair): Uint8Array;
                toProtoMsg(message: _6.SpecialAssetPair): _6.SpecialAssetPairProtoMsg;
            };
            SpecialAssetSet: {
                typeUrl: string;
                encode(message: _6.SpecialAssetSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.SpecialAssetSet;
                fromPartial(object: Partial<_6.SpecialAssetSet>): _6.SpecialAssetSet;
                fromAmino(object: _6.SpecialAssetSetAmino): _6.SpecialAssetSet;
                toAmino(message: _6.SpecialAssetSet): _6.SpecialAssetSetAmino;
                fromAminoMsg(object: _6.SpecialAssetSetAminoMsg): _6.SpecialAssetSet;
                fromProtoMsg(message: _6.SpecialAssetSetProtoMsg): _6.SpecialAssetSet;
                toProto(message: _6.SpecialAssetSet): Uint8Array;
                toProtoMsg(message: _6.SpecialAssetSet): _6.SpecialAssetSetProtoMsg;
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
    namespace metoken {
        const v1: {
            MsgClientImpl: typeof _207.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _12.QueryParams): Promise<_12.QueryParamsResponse>;
                indexes(request: _12.QueryIndexes): Promise<_12.QueryIndexesResponse>;
                swapFee(request: _12.QuerySwapFee): Promise<_12.QuerySwapFeeResponse>;
                redeemFee(request: _12.QueryRedeemFee): Promise<_12.QueryRedeemFeeResponse>;
                indexBalances(request: _12.QueryIndexBalances): Promise<_12.QueryIndexBalancesResponse>;
                indexPrices(request: _12.QueryIndexPrices): Promise<_12.QueryIndexPricesResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    swap(value: _13.MsgSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeem(value: _13.MsgRedeem): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govSetParams(value: _13.MsgGovSetParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govUpdateRegistry(value: _13.MsgGovUpdateRegistry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swap(value: _13.MsgSwap): {
                        typeUrl: string;
                        value: _13.MsgSwap;
                    };
                    redeem(value: _13.MsgRedeem): {
                        typeUrl: string;
                        value: _13.MsgRedeem;
                    };
                    govSetParams(value: _13.MsgGovSetParams): {
                        typeUrl: string;
                        value: _13.MsgGovSetParams;
                    };
                    govUpdateRegistry(value: _13.MsgGovUpdateRegistry): {
                        typeUrl: string;
                        value: _13.MsgGovUpdateRegistry;
                    };
                };
                fromJSON: {
                    swap(value: any): {
                        typeUrl: string;
                        value: _13.MsgSwap;
                    };
                    redeem(value: any): {
                        typeUrl: string;
                        value: _13.MsgRedeem;
                    };
                    govSetParams(value: any): {
                        typeUrl: string;
                        value: _13.MsgGovSetParams;
                    };
                    govUpdateRegistry(value: any): {
                        typeUrl: string;
                        value: _13.MsgGovUpdateRegistry;
                    };
                };
                fromPartial: {
                    swap(value: _13.MsgSwap): {
                        typeUrl: string;
                        value: _13.MsgSwap;
                    };
                    redeem(value: _13.MsgRedeem): {
                        typeUrl: string;
                        value: _13.MsgRedeem;
                    };
                    govSetParams(value: _13.MsgGovSetParams): {
                        typeUrl: string;
                        value: _13.MsgGovSetParams;
                    };
                    govUpdateRegistry(value: _13.MsgGovUpdateRegistry): {
                        typeUrl: string;
                        value: _13.MsgGovUpdateRegistry;
                    };
                };
            };
            AminoConverter: {
                "/umee.metoken.v1.MsgSwap": {
                    aminoType: string;
                    toAmino: (message: _13.MsgSwap) => _13.MsgSwapAmino;
                    fromAmino: (object: _13.MsgSwapAmino) => _13.MsgSwap;
                };
                "/umee.metoken.v1.MsgRedeem": {
                    aminoType: string;
                    toAmino: (message: _13.MsgRedeem) => _13.MsgRedeemAmino;
                    fromAmino: (object: _13.MsgRedeemAmino) => _13.MsgRedeem;
                };
                "/umee.metoken.v1.MsgGovSetParams": {
                    aminoType: string;
                    toAmino: (message: _13.MsgGovSetParams) => _13.MsgGovSetParamsAmino;
                    fromAmino: (object: _13.MsgGovSetParamsAmino) => _13.MsgGovSetParams;
                };
                "/umee.metoken.v1.MsgGovUpdateRegistry": {
                    aminoType: string;
                    toAmino: (message: _13.MsgGovUpdateRegistry) => _13.MsgGovUpdateRegistryAmino;
                    fromAmino: (object: _13.MsgGovUpdateRegistryAmino) => _13.MsgGovUpdateRegistry;
                };
            };
            MsgSwap: {
                typeUrl: string;
                encode(message: _13.MsgSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgSwap;
                fromPartial(object: Partial<_13.MsgSwap>): _13.MsgSwap;
                fromAmino(object: _13.MsgSwapAmino): _13.MsgSwap;
                toAmino(message: _13.MsgSwap): _13.MsgSwapAmino;
                fromAminoMsg(object: _13.MsgSwapAminoMsg): _13.MsgSwap;
                fromProtoMsg(message: _13.MsgSwapProtoMsg): _13.MsgSwap;
                toProto(message: _13.MsgSwap): Uint8Array;
                toProtoMsg(message: _13.MsgSwap): _13.MsgSwapProtoMsg;
            };
            MsgSwapResponse: {
                typeUrl: string;
                encode(message: _13.MsgSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgSwapResponse;
                fromPartial(object: Partial<_13.MsgSwapResponse>): _13.MsgSwapResponse;
                fromAmino(object: _13.MsgSwapResponseAmino): _13.MsgSwapResponse;
                toAmino(message: _13.MsgSwapResponse): _13.MsgSwapResponseAmino;
                fromAminoMsg(object: _13.MsgSwapResponseAminoMsg): _13.MsgSwapResponse;
                fromProtoMsg(message: _13.MsgSwapResponseProtoMsg): _13.MsgSwapResponse;
                toProto(message: _13.MsgSwapResponse): Uint8Array;
                toProtoMsg(message: _13.MsgSwapResponse): _13.MsgSwapResponseProtoMsg;
            };
            MsgRedeem: {
                typeUrl: string;
                encode(message: _13.MsgRedeem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgRedeem;
                fromPartial(object: Partial<_13.MsgRedeem>): _13.MsgRedeem;
                fromAmino(object: _13.MsgRedeemAmino): _13.MsgRedeem;
                toAmino(message: _13.MsgRedeem): _13.MsgRedeemAmino;
                fromAminoMsg(object: _13.MsgRedeemAminoMsg): _13.MsgRedeem;
                fromProtoMsg(message: _13.MsgRedeemProtoMsg): _13.MsgRedeem;
                toProto(message: _13.MsgRedeem): Uint8Array;
                toProtoMsg(message: _13.MsgRedeem): _13.MsgRedeemProtoMsg;
            };
            MsgRedeemResponse: {
                typeUrl: string;
                encode(message: _13.MsgRedeemResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgRedeemResponse;
                fromPartial(object: Partial<_13.MsgRedeemResponse>): _13.MsgRedeemResponse;
                fromAmino(object: _13.MsgRedeemResponseAmino): _13.MsgRedeemResponse;
                toAmino(message: _13.MsgRedeemResponse): _13.MsgRedeemResponseAmino;
                fromAminoMsg(object: _13.MsgRedeemResponseAminoMsg): _13.MsgRedeemResponse;
                fromProtoMsg(message: _13.MsgRedeemResponseProtoMsg): _13.MsgRedeemResponse;
                toProto(message: _13.MsgRedeemResponse): Uint8Array;
                toProtoMsg(message: _13.MsgRedeemResponse): _13.MsgRedeemResponseProtoMsg;
            };
            MsgGovSetParams: {
                typeUrl: string;
                encode(message: _13.MsgGovSetParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgGovSetParams;
                fromPartial(object: Partial<_13.MsgGovSetParams>): _13.MsgGovSetParams;
                fromAmino(object: _13.MsgGovSetParamsAmino): _13.MsgGovSetParams;
                toAmino(message: _13.MsgGovSetParams): _13.MsgGovSetParamsAmino;
                fromAminoMsg(object: _13.MsgGovSetParamsAminoMsg): _13.MsgGovSetParams;
                fromProtoMsg(message: _13.MsgGovSetParamsProtoMsg): _13.MsgGovSetParams;
                toProto(message: _13.MsgGovSetParams): Uint8Array;
                toProtoMsg(message: _13.MsgGovSetParams): _13.MsgGovSetParamsProtoMsg;
            };
            MsgGovSetParamsResponse: {
                typeUrl: string;
                encode(_: _13.MsgGovSetParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgGovSetParamsResponse;
                fromPartial(_: Partial<_13.MsgGovSetParamsResponse>): _13.MsgGovSetParamsResponse;
                fromAmino(_: _13.MsgGovSetParamsResponseAmino): _13.MsgGovSetParamsResponse;
                toAmino(_: _13.MsgGovSetParamsResponse): _13.MsgGovSetParamsResponseAmino;
                fromAminoMsg(object: _13.MsgGovSetParamsResponseAminoMsg): _13.MsgGovSetParamsResponse;
                fromProtoMsg(message: _13.MsgGovSetParamsResponseProtoMsg): _13.MsgGovSetParamsResponse;
                toProto(message: _13.MsgGovSetParamsResponse): Uint8Array;
                toProtoMsg(message: _13.MsgGovSetParamsResponse): _13.MsgGovSetParamsResponseProtoMsg;
            };
            MsgGovUpdateRegistry: {
                typeUrl: string;
                encode(message: _13.MsgGovUpdateRegistry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.MsgGovUpdateRegistry;
                fromPartial(object: Partial<_13.MsgGovUpdateRegistry>): _13.MsgGovUpdateRegistry;
                fromAmino(object: _13.MsgGovUpdateRegistryAmino): _13.MsgGovUpdateRegistry;
                toAmino(message: _13.MsgGovUpdateRegistry): _13.MsgGovUpdateRegistryAmino;
                fromAminoMsg(object: _13.MsgGovUpdateRegistryAminoMsg): _13.MsgGovUpdateRegistry;
                fromProtoMsg(message: _13.MsgGovUpdateRegistryProtoMsg): _13.MsgGovUpdateRegistry;
                toProto(message: _13.MsgGovUpdateRegistry): Uint8Array;
                toProtoMsg(message: _13.MsgGovUpdateRegistry): _13.MsgGovUpdateRegistryProtoMsg;
            };
            MsgGovUpdateRegistryResponse: {
                typeUrl: string;
                encode(_: _13.MsgGovUpdateRegistryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _13.MsgGovUpdateRegistryResponse;
                fromPartial(_: Partial<_13.MsgGovUpdateRegistryResponse>): _13.MsgGovUpdateRegistryResponse;
                fromAmino(_: _13.MsgGovUpdateRegistryResponseAmino): _13.MsgGovUpdateRegistryResponse;
                toAmino(_: _13.MsgGovUpdateRegistryResponse): _13.MsgGovUpdateRegistryResponseAmino;
                fromAminoMsg(object: _13.MsgGovUpdateRegistryResponseAminoMsg): _13.MsgGovUpdateRegistryResponse;
                fromProtoMsg(message: _13.MsgGovUpdateRegistryResponseProtoMsg): _13.MsgGovUpdateRegistryResponse;
                toProto(message: _13.MsgGovUpdateRegistryResponse): Uint8Array;
                toProtoMsg(message: _13.MsgGovUpdateRegistryResponse): _13.MsgGovUpdateRegistryResponseProtoMsg;
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
            QueryIndexes: {
                typeUrl: string;
                encode(message: _12.QueryIndexes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryIndexes;
                fromPartial(object: Partial<_12.QueryIndexes>): _12.QueryIndexes;
                fromAmino(object: _12.QueryIndexesAmino): _12.QueryIndexes;
                toAmino(message: _12.QueryIndexes): _12.QueryIndexesAmino;
                fromAminoMsg(object: _12.QueryIndexesAminoMsg): _12.QueryIndexes;
                fromProtoMsg(message: _12.QueryIndexesProtoMsg): _12.QueryIndexes;
                toProto(message: _12.QueryIndexes): Uint8Array;
                toProtoMsg(message: _12.QueryIndexes): _12.QueryIndexesProtoMsg;
            };
            QueryIndexesResponse: {
                typeUrl: string;
                encode(message: _12.QueryIndexesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryIndexesResponse;
                fromPartial(object: Partial<_12.QueryIndexesResponse>): _12.QueryIndexesResponse;
                fromAmino(object: _12.QueryIndexesResponseAmino): _12.QueryIndexesResponse;
                toAmino(message: _12.QueryIndexesResponse): _12.QueryIndexesResponseAmino;
                fromAminoMsg(object: _12.QueryIndexesResponseAminoMsg): _12.QueryIndexesResponse;
                fromProtoMsg(message: _12.QueryIndexesResponseProtoMsg): _12.QueryIndexesResponse;
                toProto(message: _12.QueryIndexesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryIndexesResponse): _12.QueryIndexesResponseProtoMsg;
            };
            QuerySwapFee: {
                typeUrl: string;
                encode(message: _12.QuerySwapFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySwapFee;
                fromPartial(object: Partial<_12.QuerySwapFee>): _12.QuerySwapFee;
                fromAmino(object: _12.QuerySwapFeeAmino): _12.QuerySwapFee;
                toAmino(message: _12.QuerySwapFee): _12.QuerySwapFeeAmino;
                fromAminoMsg(object: _12.QuerySwapFeeAminoMsg): _12.QuerySwapFee;
                fromProtoMsg(message: _12.QuerySwapFeeProtoMsg): _12.QuerySwapFee;
                toProto(message: _12.QuerySwapFee): Uint8Array;
                toProtoMsg(message: _12.QuerySwapFee): _12.QuerySwapFeeProtoMsg;
            };
            QuerySwapFeeResponse: {
                typeUrl: string;
                encode(message: _12.QuerySwapFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QuerySwapFeeResponse;
                fromPartial(object: Partial<_12.QuerySwapFeeResponse>): _12.QuerySwapFeeResponse;
                fromAmino(object: _12.QuerySwapFeeResponseAmino): _12.QuerySwapFeeResponse;
                toAmino(message: _12.QuerySwapFeeResponse): _12.QuerySwapFeeResponseAmino;
                fromAminoMsg(object: _12.QuerySwapFeeResponseAminoMsg): _12.QuerySwapFeeResponse;
                fromProtoMsg(message: _12.QuerySwapFeeResponseProtoMsg): _12.QuerySwapFeeResponse;
                toProto(message: _12.QuerySwapFeeResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySwapFeeResponse): _12.QuerySwapFeeResponseProtoMsg;
            };
            QueryRedeemFee: {
                typeUrl: string;
                encode(message: _12.QueryRedeemFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryRedeemFee;
                fromPartial(object: Partial<_12.QueryRedeemFee>): _12.QueryRedeemFee;
                fromAmino(object: _12.QueryRedeemFeeAmino): _12.QueryRedeemFee;
                toAmino(message: _12.QueryRedeemFee): _12.QueryRedeemFeeAmino;
                fromAminoMsg(object: _12.QueryRedeemFeeAminoMsg): _12.QueryRedeemFee;
                fromProtoMsg(message: _12.QueryRedeemFeeProtoMsg): _12.QueryRedeemFee;
                toProto(message: _12.QueryRedeemFee): Uint8Array;
                toProtoMsg(message: _12.QueryRedeemFee): _12.QueryRedeemFeeProtoMsg;
            };
            QueryRedeemFeeResponse: {
                typeUrl: string;
                encode(message: _12.QueryRedeemFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryRedeemFeeResponse;
                fromPartial(object: Partial<_12.QueryRedeemFeeResponse>): _12.QueryRedeemFeeResponse;
                fromAmino(object: _12.QueryRedeemFeeResponseAmino): _12.QueryRedeemFeeResponse;
                toAmino(message: _12.QueryRedeemFeeResponse): _12.QueryRedeemFeeResponseAmino;
                fromAminoMsg(object: _12.QueryRedeemFeeResponseAminoMsg): _12.QueryRedeemFeeResponse;
                fromProtoMsg(message: _12.QueryRedeemFeeResponseProtoMsg): _12.QueryRedeemFeeResponse;
                toProto(message: _12.QueryRedeemFeeResponse): Uint8Array;
                toProtoMsg(message: _12.QueryRedeemFeeResponse): _12.QueryRedeemFeeResponseProtoMsg;
            };
            QueryIndexBalances: {
                typeUrl: string;
                encode(message: _12.QueryIndexBalances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryIndexBalances;
                fromPartial(object: Partial<_12.QueryIndexBalances>): _12.QueryIndexBalances;
                fromAmino(object: _12.QueryIndexBalancesAmino): _12.QueryIndexBalances;
                toAmino(message: _12.QueryIndexBalances): _12.QueryIndexBalancesAmino;
                fromAminoMsg(object: _12.QueryIndexBalancesAminoMsg): _12.QueryIndexBalances;
                fromProtoMsg(message: _12.QueryIndexBalancesProtoMsg): _12.QueryIndexBalances;
                toProto(message: _12.QueryIndexBalances): Uint8Array;
                toProtoMsg(message: _12.QueryIndexBalances): _12.QueryIndexBalancesProtoMsg;
            };
            QueryIndexBalancesResponse: {
                typeUrl: string;
                encode(message: _12.QueryIndexBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryIndexBalancesResponse;
                fromPartial(object: Partial<_12.QueryIndexBalancesResponse>): _12.QueryIndexBalancesResponse;
                fromAmino(object: _12.QueryIndexBalancesResponseAmino): _12.QueryIndexBalancesResponse;
                toAmino(message: _12.QueryIndexBalancesResponse): _12.QueryIndexBalancesResponseAmino;
                fromAminoMsg(object: _12.QueryIndexBalancesResponseAminoMsg): _12.QueryIndexBalancesResponse;
                fromProtoMsg(message: _12.QueryIndexBalancesResponseProtoMsg): _12.QueryIndexBalancesResponse;
                toProto(message: _12.QueryIndexBalancesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryIndexBalancesResponse): _12.QueryIndexBalancesResponseProtoMsg;
            };
            QueryIndexPrices: {
                typeUrl: string;
                encode(message: _12.QueryIndexPrices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryIndexPrices;
                fromPartial(object: Partial<_12.QueryIndexPrices>): _12.QueryIndexPrices;
                fromAmino(object: _12.QueryIndexPricesAmino): _12.QueryIndexPrices;
                toAmino(message: _12.QueryIndexPrices): _12.QueryIndexPricesAmino;
                fromAminoMsg(object: _12.QueryIndexPricesAminoMsg): _12.QueryIndexPrices;
                fromProtoMsg(message: _12.QueryIndexPricesProtoMsg): _12.QueryIndexPrices;
                toProto(message: _12.QueryIndexPrices): Uint8Array;
                toProtoMsg(message: _12.QueryIndexPrices): _12.QueryIndexPricesProtoMsg;
            };
            QueryIndexPricesResponse: {
                typeUrl: string;
                encode(message: _12.QueryIndexPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.QueryIndexPricesResponse;
                fromPartial(object: Partial<_12.QueryIndexPricesResponse>): _12.QueryIndexPricesResponse;
                fromAmino(object: _12.QueryIndexPricesResponseAmino): _12.QueryIndexPricesResponse;
                toAmino(message: _12.QueryIndexPricesResponse): _12.QueryIndexPricesResponseAmino;
                fromAminoMsg(object: _12.QueryIndexPricesResponseAminoMsg): _12.QueryIndexPricesResponse;
                fromProtoMsg(message: _12.QueryIndexPricesResponseProtoMsg): _12.QueryIndexPricesResponse;
                toProto(message: _12.QueryIndexPricesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryIndexPricesResponse): _12.QueryIndexPricesResponseProtoMsg;
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
            Index: {
                typeUrl: string;
                encode(message: _11.Index, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Index;
                fromPartial(object: Partial<_11.Index>): _11.Index;
                fromAmino(object: _11.IndexAmino): _11.Index;
                toAmino(message: _11.Index): _11.IndexAmino;
                fromAminoMsg(object: _11.IndexAminoMsg): _11.Index;
                fromProtoMsg(message: _11.IndexProtoMsg): _11.Index;
                toProto(message: _11.Index): Uint8Array;
                toProtoMsg(message: _11.Index): _11.IndexProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _11.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.Fee;
                fromPartial(object: Partial<_11.Fee>): _11.Fee;
                fromAmino(object: _11.FeeAmino): _11.Fee;
                toAmino(message: _11.Fee): _11.FeeAmino;
                fromAminoMsg(object: _11.FeeAminoMsg): _11.Fee;
                fromProtoMsg(message: _11.FeeProtoMsg): _11.Fee;
                toProto(message: _11.Fee): Uint8Array;
                toProtoMsg(message: _11.Fee): _11.FeeProtoMsg;
            };
            AcceptedAsset: {
                typeUrl: string;
                encode(message: _11.AcceptedAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.AcceptedAsset;
                fromPartial(object: Partial<_11.AcceptedAsset>): _11.AcceptedAsset;
                fromAmino(object: _11.AcceptedAssetAmino): _11.AcceptedAsset;
                toAmino(message: _11.AcceptedAsset): _11.AcceptedAssetAmino;
                fromAminoMsg(object: _11.AcceptedAssetAminoMsg): _11.AcceptedAsset;
                fromProtoMsg(message: _11.AcceptedAssetProtoMsg): _11.AcceptedAsset;
                toProto(message: _11.AcceptedAsset): Uint8Array;
                toProtoMsg(message: _11.AcceptedAsset): _11.AcceptedAssetProtoMsg;
            };
            IndexPrices: {
                typeUrl: string;
                encode(message: _11.IndexPrices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.IndexPrices;
                fromPartial(object: Partial<_11.IndexPrices>): _11.IndexPrices;
                fromAmino(object: _11.IndexPricesAmino): _11.IndexPrices;
                toAmino(message: _11.IndexPrices): _11.IndexPricesAmino;
                fromAminoMsg(object: _11.IndexPricesAminoMsg): _11.IndexPrices;
                fromProtoMsg(message: _11.IndexPricesProtoMsg): _11.IndexPrices;
                toProto(message: _11.IndexPrices): Uint8Array;
                toProtoMsg(message: _11.IndexPrices): _11.IndexPricesProtoMsg;
            };
            AssetPrice: {
                typeUrl: string;
                encode(message: _11.AssetPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.AssetPrice;
                fromPartial(object: Partial<_11.AssetPrice>): _11.AssetPrice;
                fromAmino(object: _11.AssetPriceAmino): _11.AssetPrice;
                toAmino(message: _11.AssetPrice): _11.AssetPriceAmino;
                fromAminoMsg(object: _11.AssetPriceAminoMsg): _11.AssetPrice;
                fromProtoMsg(message: _11.AssetPriceProtoMsg): _11.AssetPrice;
                toProto(message: _11.AssetPrice): Uint8Array;
                toProtoMsg(message: _11.AssetPrice): _11.AssetPriceProtoMsg;
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
            IndexBalances: {
                typeUrl: string;
                encode(message: _10.IndexBalances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.IndexBalances;
                fromPartial(object: Partial<_10.IndexBalances>): _10.IndexBalances;
                fromAmino(object: _10.IndexBalancesAmino): _10.IndexBalances;
                toAmino(message: _10.IndexBalances): _10.IndexBalancesAmino;
                fromAminoMsg(object: _10.IndexBalancesAminoMsg): _10.IndexBalances;
                fromProtoMsg(message: _10.IndexBalancesProtoMsg): _10.IndexBalances;
                toProto(message: _10.IndexBalances): Uint8Array;
                toProtoMsg(message: _10.IndexBalances): _10.IndexBalancesProtoMsg;
            };
            AssetBalance: {
                typeUrl: string;
                encode(message: _10.AssetBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.AssetBalance;
                fromPartial(object: Partial<_10.AssetBalance>): _10.AssetBalance;
                fromAmino(object: _10.AssetBalanceAmino): _10.AssetBalance;
                toAmino(message: _10.AssetBalance): _10.AssetBalanceAmino;
                fromAminoMsg(object: _10.AssetBalanceAminoMsg): _10.AssetBalance;
                fromProtoMsg(message: _10.AssetBalanceProtoMsg): _10.AssetBalance;
                toProto(message: _10.AssetBalance): Uint8Array;
                toProtoMsg(message: _10.AssetBalance): _10.AssetBalanceProtoMsg;
            };
            EventSwap: {
                typeUrl: string;
                encode(message: _9.EventSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EventSwap;
                fromPartial(object: Partial<_9.EventSwap>): _9.EventSwap;
                fromAmino(object: _9.EventSwapAmino): _9.EventSwap;
                toAmino(message: _9.EventSwap): _9.EventSwapAmino;
                fromAminoMsg(object: _9.EventSwapAminoMsg): _9.EventSwap;
                fromProtoMsg(message: _9.EventSwapProtoMsg): _9.EventSwap;
                toProto(message: _9.EventSwap): Uint8Array;
                toProtoMsg(message: _9.EventSwap): _9.EventSwapProtoMsg;
            };
            EventRedeem: {
                typeUrl: string;
                encode(message: _9.EventRedeem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EventRedeem;
                fromPartial(object: Partial<_9.EventRedeem>): _9.EventRedeem;
                fromAmino(object: _9.EventRedeemAmino): _9.EventRedeem;
                toAmino(message: _9.EventRedeem): _9.EventRedeemAmino;
                fromAminoMsg(object: _9.EventRedeemAminoMsg): _9.EventRedeem;
                fromProtoMsg(message: _9.EventRedeemProtoMsg): _9.EventRedeem;
                toProto(message: _9.EventRedeem): Uint8Array;
                toProtoMsg(message: _9.EventRedeem): _9.EventRedeemProtoMsg;
            };
            EventRebalancing: {
                typeUrl: string;
                encode(message: _9.EventRebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EventRebalancing;
                fromPartial(object: Partial<_9.EventRebalancing>): _9.EventRebalancing;
                fromAmino(object: _9.EventRebalancingAmino): _9.EventRebalancing;
                toAmino(message: _9.EventRebalancing): _9.EventRebalancingAmino;
                fromAminoMsg(object: _9.EventRebalancingAminoMsg): _9.EventRebalancing;
                fromProtoMsg(message: _9.EventRebalancingProtoMsg): _9.EventRebalancing;
                toProto(message: _9.EventRebalancing): Uint8Array;
                toProtoMsg(message: _9.EventRebalancing): _9.EventRebalancingProtoMsg;
            };
            RebalancingResult: {
                typeUrl: string;
                encode(message: _9.RebalancingResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.RebalancingResult;
                fromPartial(object: Partial<_9.RebalancingResult>): _9.RebalancingResult;
                fromAmino(object: _9.RebalancingResultAmino): _9.RebalancingResult;
                toAmino(message: _9.RebalancingResult): _9.RebalancingResultAmino;
                fromAminoMsg(object: _9.RebalancingResultAminoMsg): _9.RebalancingResult;
                fromProtoMsg(message: _9.RebalancingResultProtoMsg): _9.RebalancingResult;
                toProto(message: _9.RebalancingResult): Uint8Array;
                toProtoMsg(message: _9.RebalancingResult): _9.RebalancingResultProtoMsg;
            };
            EventInterestClaim: {
                typeUrl: string;
                encode(message: _9.EventInterestClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.EventInterestClaim;
                fromPartial(object: Partial<_9.EventInterestClaim>): _9.EventInterestClaim;
                fromAmino(object: _9.EventInterestClaimAmino): _9.EventInterestClaim;
                toAmino(message: _9.EventInterestClaim): _9.EventInterestClaimAmino;
                fromAminoMsg(object: _9.EventInterestClaimAminoMsg): _9.EventInterestClaim;
                fromProtoMsg(message: _9.EventInterestClaimProtoMsg): _9.EventInterestClaim;
                toProto(message: _9.EventInterestClaim): Uint8Array;
                toProtoMsg(message: _9.EventInterestClaim): _9.EventInterestClaimProtoMsg;
            };
        };
    }
    namespace oracle {
        const v1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            QueryClientImpl: typeof _202.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                exchangeRates(request: _17.QueryExchangeRates): Promise<_17.QueryExchangeRatesResponse>;
                activeExchangeRates(request?: _17.QueryActiveExchangeRates): Promise<_17.QueryActiveExchangeRatesResponse>;
                feederDelegation(request: _17.QueryFeederDelegation): Promise<_17.QueryFeederDelegationResponse>;
                missCounter(request: _17.QueryMissCounter): Promise<_17.QueryMissCounterResponse>;
                slashWindow(request?: _17.QuerySlashWindow): Promise<_17.QuerySlashWindowResponse>;
                aggregatePrevote(request: _17.QueryAggregatePrevote): Promise<_17.QueryAggregatePrevoteResponse>;
                aggregatePrevotes(request?: _17.QueryAggregatePrevotes): Promise<_17.QueryAggregatePrevotesResponse>;
                aggregateVote(request: _17.QueryAggregateVote): Promise<_17.QueryAggregateVoteResponse>;
                aggregateVotes(request?: _17.QueryAggregateVotes): Promise<_17.QueryAggregateVotesResponse>;
                params(request?: _17.QueryParams): Promise<_17.QueryParamsResponse>;
                medians(request: _17.QueryMedians): Promise<_17.QueryMediansResponse>;
                medianDeviations(request: _17.QueryMedianDeviations): Promise<_17.QueryMedianDeviationsResponse>;
                avgPrice(request: _17.QueryAvgPrice): Promise<_17.QueryAvgPriceResponse>;
                exgRatesWithTimestamp(request: _17.QueryExgRatesWithTimestamp): Promise<_17.QueryExgRatesWithTimestampResponse>;
                missCounters(request: _17.QueryMissCounters): Promise<_17.QueryMissCountersResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRatePrevote(value: _18.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    aggregateExchangeRateVote(value: _18.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _18.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRatePrevote(value: _18.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _18.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _18.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _18.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _18.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _18.MsgDelegateFeedConsent;
                    };
                };
                fromJSON: {
                    aggregateExchangeRatePrevote(value: any): {
                        typeUrl: string;
                        value: _18.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: any): {
                        typeUrl: string;
                        value: _18.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: any): {
                        typeUrl: string;
                        value: _18.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRatePrevote(value: _18.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _18.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _18.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _18.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _18.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _18.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
                    aminoType: string;
                    toAmino: (message: _18.MsgAggregateExchangeRatePrevote) => _18.MsgAggregateExchangeRatePrevoteAmino;
                    fromAmino: (object: _18.MsgAggregateExchangeRatePrevoteAmino) => _18.MsgAggregateExchangeRatePrevote;
                };
                "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _18.MsgAggregateExchangeRateVote) => _18.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _18.MsgAggregateExchangeRateVoteAmino) => _18.MsgAggregateExchangeRateVote;
                };
                "/umee.oracle.v1.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _18.MsgDelegateFeedConsent) => _18.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _18.MsgDelegateFeedConsentAmino) => _18.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _18.MsgAggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgAggregateExchangeRatePrevote;
                fromPartial(object: Partial<_18.MsgAggregateExchangeRatePrevote>): _18.MsgAggregateExchangeRatePrevote;
                fromAmino(object: _18.MsgAggregateExchangeRatePrevoteAmino): _18.MsgAggregateExchangeRatePrevote;
                toAmino(message: _18.MsgAggregateExchangeRatePrevote): _18.MsgAggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _18.MsgAggregateExchangeRatePrevoteAminoMsg): _18.MsgAggregateExchangeRatePrevote;
                fromProtoMsg(message: _18.MsgAggregateExchangeRatePrevoteProtoMsg): _18.MsgAggregateExchangeRatePrevote;
                toProto(message: _18.MsgAggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _18.MsgAggregateExchangeRatePrevote): _18.MsgAggregateExchangeRatePrevoteProtoMsg;
            };
            MsgAggregateExchangeRatePrevoteResponse: {
                typeUrl: string;
                encode(_: _18.MsgAggregateExchangeRatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgAggregateExchangeRatePrevoteResponse;
                fromPartial(_: Partial<_18.MsgAggregateExchangeRatePrevoteResponse>): _18.MsgAggregateExchangeRatePrevoteResponse;
                fromAmino(_: _18.MsgAggregateExchangeRatePrevoteResponseAmino): _18.MsgAggregateExchangeRatePrevoteResponse;
                toAmino(_: _18.MsgAggregateExchangeRatePrevoteResponse): _18.MsgAggregateExchangeRatePrevoteResponseAmino;
                fromAminoMsg(object: _18.MsgAggregateExchangeRatePrevoteResponseAminoMsg): _18.MsgAggregateExchangeRatePrevoteResponse;
                fromProtoMsg(message: _18.MsgAggregateExchangeRatePrevoteResponseProtoMsg): _18.MsgAggregateExchangeRatePrevoteResponse;
                toProto(message: _18.MsgAggregateExchangeRatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _18.MsgAggregateExchangeRatePrevoteResponse): _18.MsgAggregateExchangeRatePrevoteResponseProtoMsg;
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _18.MsgAggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgAggregateExchangeRateVote;
                fromPartial(object: Partial<_18.MsgAggregateExchangeRateVote>): _18.MsgAggregateExchangeRateVote;
                fromAmino(object: _18.MsgAggregateExchangeRateVoteAmino): _18.MsgAggregateExchangeRateVote;
                toAmino(message: _18.MsgAggregateExchangeRateVote): _18.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _18.MsgAggregateExchangeRateVoteAminoMsg): _18.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _18.MsgAggregateExchangeRateVoteProtoMsg): _18.MsgAggregateExchangeRateVote;
                toProto(message: _18.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _18.MsgAggregateExchangeRateVote): _18.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _18.MsgAggregateExchangeRateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: Partial<_18.MsgAggregateExchangeRateVoteResponse>): _18.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _18.MsgAggregateExchangeRateVoteResponseAmino): _18.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _18.MsgAggregateExchangeRateVoteResponse): _18.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _18.MsgAggregateExchangeRateVoteResponseAminoMsg): _18.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _18.MsgAggregateExchangeRateVoteResponseProtoMsg): _18.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _18.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _18.MsgAggregateExchangeRateVoteResponse): _18.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _18.MsgDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.MsgDelegateFeedConsent;
                fromPartial(object: Partial<_18.MsgDelegateFeedConsent>): _18.MsgDelegateFeedConsent;
                fromAmino(object: _18.MsgDelegateFeedConsentAmino): _18.MsgDelegateFeedConsent;
                toAmino(message: _18.MsgDelegateFeedConsent): _18.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _18.MsgDelegateFeedConsentAminoMsg): _18.MsgDelegateFeedConsent;
                fromProtoMsg(message: _18.MsgDelegateFeedConsentProtoMsg): _18.MsgDelegateFeedConsent;
                toProto(message: _18.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _18.MsgDelegateFeedConsent): _18.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _18.MsgDelegateFeedConsentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _18.MsgDelegateFeedConsentResponse;
                fromPartial(_: Partial<_18.MsgDelegateFeedConsentResponse>): _18.MsgDelegateFeedConsentResponse;
                fromAmino(_: _18.MsgDelegateFeedConsentResponseAmino): _18.MsgDelegateFeedConsentResponse;
                toAmino(_: _18.MsgDelegateFeedConsentResponse): _18.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _18.MsgDelegateFeedConsentResponseAminoMsg): _18.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _18.MsgDelegateFeedConsentResponseProtoMsg): _18.MsgDelegateFeedConsentResponse;
                toProto(message: _18.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _18.MsgDelegateFeedConsentResponse): _18.MsgDelegateFeedConsentResponseProtoMsg;
            };
            QueryMissCounters: {
                typeUrl: string;
                encode(message: _17.QueryMissCounters, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryMissCounters;
                fromPartial(object: Partial<_17.QueryMissCounters>): _17.QueryMissCounters;
                fromAmino(object: _17.QueryMissCountersAmino): _17.QueryMissCounters;
                toAmino(message: _17.QueryMissCounters): _17.QueryMissCountersAmino;
                fromAminoMsg(object: _17.QueryMissCountersAminoMsg): _17.QueryMissCounters;
                fromProtoMsg(message: _17.QueryMissCountersProtoMsg): _17.QueryMissCounters;
                toProto(message: _17.QueryMissCounters): Uint8Array;
                toProtoMsg(message: _17.QueryMissCounters): _17.QueryMissCountersProtoMsg;
            };
            QueryMissCountersResponse: {
                typeUrl: string;
                encode(message: _17.QueryMissCountersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryMissCountersResponse;
                fromPartial(object: Partial<_17.QueryMissCountersResponse>): _17.QueryMissCountersResponse;
                fromAmino(object: _17.QueryMissCountersResponseAmino): _17.QueryMissCountersResponse;
                toAmino(message: _17.QueryMissCountersResponse): _17.QueryMissCountersResponseAmino;
                fromAminoMsg(object: _17.QueryMissCountersResponseAminoMsg): _17.QueryMissCountersResponse;
                fromProtoMsg(message: _17.QueryMissCountersResponseProtoMsg): _17.QueryMissCountersResponse;
                toProto(message: _17.QueryMissCountersResponse): Uint8Array;
                toProtoMsg(message: _17.QueryMissCountersResponse): _17.QueryMissCountersResponseProtoMsg;
            };
            PriceMissCounter: {
                typeUrl: string;
                encode(message: _17.PriceMissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.PriceMissCounter;
                fromPartial(object: Partial<_17.PriceMissCounter>): _17.PriceMissCounter;
                fromAmino(object: _17.PriceMissCounterAmino): _17.PriceMissCounter;
                toAmino(message: _17.PriceMissCounter): _17.PriceMissCounterAmino;
                fromAminoMsg(object: _17.PriceMissCounterAminoMsg): _17.PriceMissCounter;
                fromProtoMsg(message: _17.PriceMissCounterProtoMsg): _17.PriceMissCounter;
                toProto(message: _17.PriceMissCounter): Uint8Array;
                toProtoMsg(message: _17.PriceMissCounter): _17.PriceMissCounterProtoMsg;
            };
            QueryExgRatesWithTimestamp: {
                typeUrl: string;
                encode(message: _17.QueryExgRatesWithTimestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryExgRatesWithTimestamp;
                fromPartial(object: Partial<_17.QueryExgRatesWithTimestamp>): _17.QueryExgRatesWithTimestamp;
                fromAmino(object: _17.QueryExgRatesWithTimestampAmino): _17.QueryExgRatesWithTimestamp;
                toAmino(message: _17.QueryExgRatesWithTimestamp): _17.QueryExgRatesWithTimestampAmino;
                fromAminoMsg(object: _17.QueryExgRatesWithTimestampAminoMsg): _17.QueryExgRatesWithTimestamp;
                fromProtoMsg(message: _17.QueryExgRatesWithTimestampProtoMsg): _17.QueryExgRatesWithTimestamp;
                toProto(message: _17.QueryExgRatesWithTimestamp): Uint8Array;
                toProtoMsg(message: _17.QueryExgRatesWithTimestamp): _17.QueryExgRatesWithTimestampProtoMsg;
            };
            QueryExgRatesWithTimestampResponse: {
                typeUrl: string;
                encode(message: _17.QueryExgRatesWithTimestampResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryExgRatesWithTimestampResponse;
                fromPartial(object: Partial<_17.QueryExgRatesWithTimestampResponse>): _17.QueryExgRatesWithTimestampResponse;
                fromAmino(object: _17.QueryExgRatesWithTimestampResponseAmino): _17.QueryExgRatesWithTimestampResponse;
                toAmino(message: _17.QueryExgRatesWithTimestampResponse): _17.QueryExgRatesWithTimestampResponseAmino;
                fromAminoMsg(object: _17.QueryExgRatesWithTimestampResponseAminoMsg): _17.QueryExgRatesWithTimestampResponse;
                fromProtoMsg(message: _17.QueryExgRatesWithTimestampResponseProtoMsg): _17.QueryExgRatesWithTimestampResponse;
                toProto(message: _17.QueryExgRatesWithTimestampResponse): Uint8Array;
                toProtoMsg(message: _17.QueryExgRatesWithTimestampResponse): _17.QueryExgRatesWithTimestampResponseProtoMsg;
            };
            QueryExchangeRates: {
                typeUrl: string;
                encode(message: _17.QueryExchangeRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryExchangeRates;
                fromPartial(object: Partial<_17.QueryExchangeRates>): _17.QueryExchangeRates;
                fromAmino(object: _17.QueryExchangeRatesAmino): _17.QueryExchangeRates;
                toAmino(message: _17.QueryExchangeRates): _17.QueryExchangeRatesAmino;
                fromAminoMsg(object: _17.QueryExchangeRatesAminoMsg): _17.QueryExchangeRates;
                fromProtoMsg(message: _17.QueryExchangeRatesProtoMsg): _17.QueryExchangeRates;
                toProto(message: _17.QueryExchangeRates): Uint8Array;
                toProtoMsg(message: _17.QueryExchangeRates): _17.QueryExchangeRatesProtoMsg;
            };
            QueryExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _17.QueryExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryExchangeRatesResponse;
                fromPartial(object: Partial<_17.QueryExchangeRatesResponse>): _17.QueryExchangeRatesResponse;
                fromAmino(object: _17.QueryExchangeRatesResponseAmino): _17.QueryExchangeRatesResponse;
                toAmino(message: _17.QueryExchangeRatesResponse): _17.QueryExchangeRatesResponseAmino;
                fromAminoMsg(object: _17.QueryExchangeRatesResponseAminoMsg): _17.QueryExchangeRatesResponse;
                fromProtoMsg(message: _17.QueryExchangeRatesResponseProtoMsg): _17.QueryExchangeRatesResponse;
                toProto(message: _17.QueryExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryExchangeRatesResponse): _17.QueryExchangeRatesResponseProtoMsg;
            };
            QueryActiveExchangeRates: {
                typeUrl: string;
                encode(_: _17.QueryActiveExchangeRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryActiveExchangeRates;
                fromPartial(_: Partial<_17.QueryActiveExchangeRates>): _17.QueryActiveExchangeRates;
                fromAmino(_: _17.QueryActiveExchangeRatesAmino): _17.QueryActiveExchangeRates;
                toAmino(_: _17.QueryActiveExchangeRates): _17.QueryActiveExchangeRatesAmino;
                fromAminoMsg(object: _17.QueryActiveExchangeRatesAminoMsg): _17.QueryActiveExchangeRates;
                fromProtoMsg(message: _17.QueryActiveExchangeRatesProtoMsg): _17.QueryActiveExchangeRates;
                toProto(message: _17.QueryActiveExchangeRates): Uint8Array;
                toProtoMsg(message: _17.QueryActiveExchangeRates): _17.QueryActiveExchangeRatesProtoMsg;
            };
            QueryActiveExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _17.QueryActiveExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryActiveExchangeRatesResponse;
                fromPartial(object: Partial<_17.QueryActiveExchangeRatesResponse>): _17.QueryActiveExchangeRatesResponse;
                fromAmino(object: _17.QueryActiveExchangeRatesResponseAmino): _17.QueryActiveExchangeRatesResponse;
                toAmino(message: _17.QueryActiveExchangeRatesResponse): _17.QueryActiveExchangeRatesResponseAmino;
                fromAminoMsg(object: _17.QueryActiveExchangeRatesResponseAminoMsg): _17.QueryActiveExchangeRatesResponse;
                fromProtoMsg(message: _17.QueryActiveExchangeRatesResponseProtoMsg): _17.QueryActiveExchangeRatesResponse;
                toProto(message: _17.QueryActiveExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryActiveExchangeRatesResponse): _17.QueryActiveExchangeRatesResponseProtoMsg;
            };
            QueryFeederDelegation: {
                typeUrl: string;
                encode(message: _17.QueryFeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryFeederDelegation;
                fromPartial(object: Partial<_17.QueryFeederDelegation>): _17.QueryFeederDelegation;
                fromAmino(object: _17.QueryFeederDelegationAmino): _17.QueryFeederDelegation;
                toAmino(message: _17.QueryFeederDelegation): _17.QueryFeederDelegationAmino;
                fromAminoMsg(object: _17.QueryFeederDelegationAminoMsg): _17.QueryFeederDelegation;
                fromProtoMsg(message: _17.QueryFeederDelegationProtoMsg): _17.QueryFeederDelegation;
                toProto(message: _17.QueryFeederDelegation): Uint8Array;
                toProtoMsg(message: _17.QueryFeederDelegation): _17.QueryFeederDelegationProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _17.QueryFeederDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryFeederDelegationResponse;
                fromPartial(object: Partial<_17.QueryFeederDelegationResponse>): _17.QueryFeederDelegationResponse;
                fromAmino(object: _17.QueryFeederDelegationResponseAmino): _17.QueryFeederDelegationResponse;
                toAmino(message: _17.QueryFeederDelegationResponse): _17.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _17.QueryFeederDelegationResponseAminoMsg): _17.QueryFeederDelegationResponse;
                fromProtoMsg(message: _17.QueryFeederDelegationResponseProtoMsg): _17.QueryFeederDelegationResponse;
                toProto(message: _17.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _17.QueryFeederDelegationResponse): _17.QueryFeederDelegationResponseProtoMsg;
            };
            QueryMissCounter: {
                typeUrl: string;
                encode(message: _17.QueryMissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryMissCounter;
                fromPartial(object: Partial<_17.QueryMissCounter>): _17.QueryMissCounter;
                fromAmino(object: _17.QueryMissCounterAmino): _17.QueryMissCounter;
                toAmino(message: _17.QueryMissCounter): _17.QueryMissCounterAmino;
                fromAminoMsg(object: _17.QueryMissCounterAminoMsg): _17.QueryMissCounter;
                fromProtoMsg(message: _17.QueryMissCounterProtoMsg): _17.QueryMissCounter;
                toProto(message: _17.QueryMissCounter): Uint8Array;
                toProtoMsg(message: _17.QueryMissCounter): _17.QueryMissCounterProtoMsg;
            };
            QueryMissCounterResponse: {
                typeUrl: string;
                encode(message: _17.QueryMissCounterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryMissCounterResponse;
                fromPartial(object: Partial<_17.QueryMissCounterResponse>): _17.QueryMissCounterResponse;
                fromAmino(object: _17.QueryMissCounterResponseAmino): _17.QueryMissCounterResponse;
                toAmino(message: _17.QueryMissCounterResponse): _17.QueryMissCounterResponseAmino;
                fromAminoMsg(object: _17.QueryMissCounterResponseAminoMsg): _17.QueryMissCounterResponse;
                fromProtoMsg(message: _17.QueryMissCounterResponseProtoMsg): _17.QueryMissCounterResponse;
                toProto(message: _17.QueryMissCounterResponse): Uint8Array;
                toProtoMsg(message: _17.QueryMissCounterResponse): _17.QueryMissCounterResponseProtoMsg;
            };
            QuerySlashWindow: {
                typeUrl: string;
                encode(_: _17.QuerySlashWindow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QuerySlashWindow;
                fromPartial(_: Partial<_17.QuerySlashWindow>): _17.QuerySlashWindow;
                fromAmino(_: _17.QuerySlashWindowAmino): _17.QuerySlashWindow;
                toAmino(_: _17.QuerySlashWindow): _17.QuerySlashWindowAmino;
                fromAminoMsg(object: _17.QuerySlashWindowAminoMsg): _17.QuerySlashWindow;
                fromProtoMsg(message: _17.QuerySlashWindowProtoMsg): _17.QuerySlashWindow;
                toProto(message: _17.QuerySlashWindow): Uint8Array;
                toProtoMsg(message: _17.QuerySlashWindow): _17.QuerySlashWindowProtoMsg;
            };
            QuerySlashWindowResponse: {
                typeUrl: string;
                encode(message: _17.QuerySlashWindowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QuerySlashWindowResponse;
                fromPartial(object: Partial<_17.QuerySlashWindowResponse>): _17.QuerySlashWindowResponse;
                fromAmino(object: _17.QuerySlashWindowResponseAmino): _17.QuerySlashWindowResponse;
                toAmino(message: _17.QuerySlashWindowResponse): _17.QuerySlashWindowResponseAmino;
                fromAminoMsg(object: _17.QuerySlashWindowResponseAminoMsg): _17.QuerySlashWindowResponse;
                fromProtoMsg(message: _17.QuerySlashWindowResponseProtoMsg): _17.QuerySlashWindowResponse;
                toProto(message: _17.QuerySlashWindowResponse): Uint8Array;
                toProtoMsg(message: _17.QuerySlashWindowResponse): _17.QuerySlashWindowResponseProtoMsg;
            };
            QueryAggregatePrevote: {
                typeUrl: string;
                encode(message: _17.QueryAggregatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAggregatePrevote;
                fromPartial(object: Partial<_17.QueryAggregatePrevote>): _17.QueryAggregatePrevote;
                fromAmino(object: _17.QueryAggregatePrevoteAmino): _17.QueryAggregatePrevote;
                toAmino(message: _17.QueryAggregatePrevote): _17.QueryAggregatePrevoteAmino;
                fromAminoMsg(object: _17.QueryAggregatePrevoteAminoMsg): _17.QueryAggregatePrevote;
                fromProtoMsg(message: _17.QueryAggregatePrevoteProtoMsg): _17.QueryAggregatePrevote;
                toProto(message: _17.QueryAggregatePrevote): Uint8Array;
                toProtoMsg(message: _17.QueryAggregatePrevote): _17.QueryAggregatePrevoteProtoMsg;
            };
            QueryAggregatePrevoteResponse: {
                typeUrl: string;
                encode(message: _17.QueryAggregatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAggregatePrevoteResponse;
                fromPartial(object: Partial<_17.QueryAggregatePrevoteResponse>): _17.QueryAggregatePrevoteResponse;
                fromAmino(object: _17.QueryAggregatePrevoteResponseAmino): _17.QueryAggregatePrevoteResponse;
                toAmino(message: _17.QueryAggregatePrevoteResponse): _17.QueryAggregatePrevoteResponseAmino;
                fromAminoMsg(object: _17.QueryAggregatePrevoteResponseAminoMsg): _17.QueryAggregatePrevoteResponse;
                fromProtoMsg(message: _17.QueryAggregatePrevoteResponseProtoMsg): _17.QueryAggregatePrevoteResponse;
                toProto(message: _17.QueryAggregatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAggregatePrevoteResponse): _17.QueryAggregatePrevoteResponseProtoMsg;
            };
            QueryAggregatePrevotes: {
                typeUrl: string;
                encode(_: _17.QueryAggregatePrevotes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryAggregatePrevotes;
                fromPartial(_: Partial<_17.QueryAggregatePrevotes>): _17.QueryAggregatePrevotes;
                fromAmino(_: _17.QueryAggregatePrevotesAmino): _17.QueryAggregatePrevotes;
                toAmino(_: _17.QueryAggregatePrevotes): _17.QueryAggregatePrevotesAmino;
                fromAminoMsg(object: _17.QueryAggregatePrevotesAminoMsg): _17.QueryAggregatePrevotes;
                fromProtoMsg(message: _17.QueryAggregatePrevotesProtoMsg): _17.QueryAggregatePrevotes;
                toProto(message: _17.QueryAggregatePrevotes): Uint8Array;
                toProtoMsg(message: _17.QueryAggregatePrevotes): _17.QueryAggregatePrevotesProtoMsg;
            };
            QueryAggregatePrevotesResponse: {
                typeUrl: string;
                encode(message: _17.QueryAggregatePrevotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAggregatePrevotesResponse;
                fromPartial(object: Partial<_17.QueryAggregatePrevotesResponse>): _17.QueryAggregatePrevotesResponse;
                fromAmino(object: _17.QueryAggregatePrevotesResponseAmino): _17.QueryAggregatePrevotesResponse;
                toAmino(message: _17.QueryAggregatePrevotesResponse): _17.QueryAggregatePrevotesResponseAmino;
                fromAminoMsg(object: _17.QueryAggregatePrevotesResponseAminoMsg): _17.QueryAggregatePrevotesResponse;
                fromProtoMsg(message: _17.QueryAggregatePrevotesResponseProtoMsg): _17.QueryAggregatePrevotesResponse;
                toProto(message: _17.QueryAggregatePrevotesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAggregatePrevotesResponse): _17.QueryAggregatePrevotesResponseProtoMsg;
            };
            QueryAggregateVote: {
                typeUrl: string;
                encode(message: _17.QueryAggregateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAggregateVote;
                fromPartial(object: Partial<_17.QueryAggregateVote>): _17.QueryAggregateVote;
                fromAmino(object: _17.QueryAggregateVoteAmino): _17.QueryAggregateVote;
                toAmino(message: _17.QueryAggregateVote): _17.QueryAggregateVoteAmino;
                fromAminoMsg(object: _17.QueryAggregateVoteAminoMsg): _17.QueryAggregateVote;
                fromProtoMsg(message: _17.QueryAggregateVoteProtoMsg): _17.QueryAggregateVote;
                toProto(message: _17.QueryAggregateVote): Uint8Array;
                toProtoMsg(message: _17.QueryAggregateVote): _17.QueryAggregateVoteProtoMsg;
            };
            QueryAggregateVoteResponse: {
                typeUrl: string;
                encode(message: _17.QueryAggregateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAggregateVoteResponse;
                fromPartial(object: Partial<_17.QueryAggregateVoteResponse>): _17.QueryAggregateVoteResponse;
                fromAmino(object: _17.QueryAggregateVoteResponseAmino): _17.QueryAggregateVoteResponse;
                toAmino(message: _17.QueryAggregateVoteResponse): _17.QueryAggregateVoteResponseAmino;
                fromAminoMsg(object: _17.QueryAggregateVoteResponseAminoMsg): _17.QueryAggregateVoteResponse;
                fromProtoMsg(message: _17.QueryAggregateVoteResponseProtoMsg): _17.QueryAggregateVoteResponse;
                toProto(message: _17.QueryAggregateVoteResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAggregateVoteResponse): _17.QueryAggregateVoteResponseProtoMsg;
            };
            QueryAggregateVotes: {
                typeUrl: string;
                encode(_: _17.QueryAggregateVotes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryAggregateVotes;
                fromPartial(_: Partial<_17.QueryAggregateVotes>): _17.QueryAggregateVotes;
                fromAmino(_: _17.QueryAggregateVotesAmino): _17.QueryAggregateVotes;
                toAmino(_: _17.QueryAggregateVotes): _17.QueryAggregateVotesAmino;
                fromAminoMsg(object: _17.QueryAggregateVotesAminoMsg): _17.QueryAggregateVotes;
                fromProtoMsg(message: _17.QueryAggregateVotesProtoMsg): _17.QueryAggregateVotes;
                toProto(message: _17.QueryAggregateVotes): Uint8Array;
                toProtoMsg(message: _17.QueryAggregateVotes): _17.QueryAggregateVotesProtoMsg;
            };
            QueryAggregateVotesResponse: {
                typeUrl: string;
                encode(message: _17.QueryAggregateVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAggregateVotesResponse;
                fromPartial(object: Partial<_17.QueryAggregateVotesResponse>): _17.QueryAggregateVotesResponse;
                fromAmino(object: _17.QueryAggregateVotesResponseAmino): _17.QueryAggregateVotesResponse;
                toAmino(message: _17.QueryAggregateVotesResponse): _17.QueryAggregateVotesResponseAmino;
                fromAminoMsg(object: _17.QueryAggregateVotesResponseAminoMsg): _17.QueryAggregateVotesResponse;
                fromProtoMsg(message: _17.QueryAggregateVotesResponseProtoMsg): _17.QueryAggregateVotesResponse;
                toProto(message: _17.QueryAggregateVotesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAggregateVotesResponse): _17.QueryAggregateVotesResponseProtoMsg;
            };
            QueryParams: {
                typeUrl: string;
                encode(_: _17.QueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.QueryParams;
                fromPartial(_: Partial<_17.QueryParams>): _17.QueryParams;
                fromAmino(_: _17.QueryParamsAmino): _17.QueryParams;
                toAmino(_: _17.QueryParams): _17.QueryParamsAmino;
                fromAminoMsg(object: _17.QueryParamsAminoMsg): _17.QueryParams;
                fromProtoMsg(message: _17.QueryParamsProtoMsg): _17.QueryParams;
                toProto(message: _17.QueryParams): Uint8Array;
                toProtoMsg(message: _17.QueryParams): _17.QueryParamsProtoMsg;
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
            QueryMedians: {
                typeUrl: string;
                encode(message: _17.QueryMedians, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryMedians;
                fromPartial(object: Partial<_17.QueryMedians>): _17.QueryMedians;
                fromAmino(object: _17.QueryMediansAmino): _17.QueryMedians;
                toAmino(message: _17.QueryMedians): _17.QueryMediansAmino;
                fromAminoMsg(object: _17.QueryMediansAminoMsg): _17.QueryMedians;
                fromProtoMsg(message: _17.QueryMediansProtoMsg): _17.QueryMedians;
                toProto(message: _17.QueryMedians): Uint8Array;
                toProtoMsg(message: _17.QueryMedians): _17.QueryMediansProtoMsg;
            };
            QueryMediansResponse: {
                typeUrl: string;
                encode(message: _17.QueryMediansResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryMediansResponse;
                fromPartial(object: Partial<_17.QueryMediansResponse>): _17.QueryMediansResponse;
                fromAmino(object: _17.QueryMediansResponseAmino): _17.QueryMediansResponse;
                toAmino(message: _17.QueryMediansResponse): _17.QueryMediansResponseAmino;
                fromAminoMsg(object: _17.QueryMediansResponseAminoMsg): _17.QueryMediansResponse;
                fromProtoMsg(message: _17.QueryMediansResponseProtoMsg): _17.QueryMediansResponse;
                toProto(message: _17.QueryMediansResponse): Uint8Array;
                toProtoMsg(message: _17.QueryMediansResponse): _17.QueryMediansResponseProtoMsg;
            };
            QueryMedianDeviations: {
                typeUrl: string;
                encode(message: _17.QueryMedianDeviations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryMedianDeviations;
                fromPartial(object: Partial<_17.QueryMedianDeviations>): _17.QueryMedianDeviations;
                fromAmino(object: _17.QueryMedianDeviationsAmino): _17.QueryMedianDeviations;
                toAmino(message: _17.QueryMedianDeviations): _17.QueryMedianDeviationsAmino;
                fromAminoMsg(object: _17.QueryMedianDeviationsAminoMsg): _17.QueryMedianDeviations;
                fromProtoMsg(message: _17.QueryMedianDeviationsProtoMsg): _17.QueryMedianDeviations;
                toProto(message: _17.QueryMedianDeviations): Uint8Array;
                toProtoMsg(message: _17.QueryMedianDeviations): _17.QueryMedianDeviationsProtoMsg;
            };
            QueryMedianDeviationsResponse: {
                typeUrl: string;
                encode(message: _17.QueryMedianDeviationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryMedianDeviationsResponse;
                fromPartial(object: Partial<_17.QueryMedianDeviationsResponse>): _17.QueryMedianDeviationsResponse;
                fromAmino(object: _17.QueryMedianDeviationsResponseAmino): _17.QueryMedianDeviationsResponse;
                toAmino(message: _17.QueryMedianDeviationsResponse): _17.QueryMedianDeviationsResponseAmino;
                fromAminoMsg(object: _17.QueryMedianDeviationsResponseAminoMsg): _17.QueryMedianDeviationsResponse;
                fromProtoMsg(message: _17.QueryMedianDeviationsResponseProtoMsg): _17.QueryMedianDeviationsResponse;
                toProto(message: _17.QueryMedianDeviationsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryMedianDeviationsResponse): _17.QueryMedianDeviationsResponseProtoMsg;
            };
            QueryAvgPrice: {
                typeUrl: string;
                encode(message: _17.QueryAvgPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAvgPrice;
                fromPartial(object: Partial<_17.QueryAvgPrice>): _17.QueryAvgPrice;
                fromAmino(object: _17.QueryAvgPriceAmino): _17.QueryAvgPrice;
                toAmino(message: _17.QueryAvgPrice): _17.QueryAvgPriceAmino;
                fromAminoMsg(object: _17.QueryAvgPriceAminoMsg): _17.QueryAvgPrice;
                fromProtoMsg(message: _17.QueryAvgPriceProtoMsg): _17.QueryAvgPrice;
                toProto(message: _17.QueryAvgPrice): Uint8Array;
                toProtoMsg(message: _17.QueryAvgPrice): _17.QueryAvgPriceProtoMsg;
            };
            QueryAvgPriceResponse: {
                typeUrl: string;
                encode(message: _17.QueryAvgPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.QueryAvgPriceResponse;
                fromPartial(object: Partial<_17.QueryAvgPriceResponse>): _17.QueryAvgPriceResponse;
                fromAmino(object: _17.QueryAvgPriceResponseAmino): _17.QueryAvgPriceResponse;
                toAmino(message: _17.QueryAvgPriceResponse): _17.QueryAvgPriceResponseAmino;
                fromAminoMsg(object: _17.QueryAvgPriceResponseAminoMsg): _17.QueryAvgPriceResponse;
                fromProtoMsg(message: _17.QueryAvgPriceResponseProtoMsg): _17.QueryAvgPriceResponse;
                toProto(message: _17.QueryAvgPriceResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAvgPriceResponse): _17.QueryAvgPriceResponseProtoMsg;
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
            AvgCounterParams: {
                typeUrl: string;
                encode(message: _16.AvgCounterParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.AvgCounterParams;
                fromPartial(object: Partial<_16.AvgCounterParams>): _16.AvgCounterParams;
                fromAmino(object: _16.AvgCounterParamsAmino): _16.AvgCounterParams;
                toAmino(message: _16.AvgCounterParams): _16.AvgCounterParamsAmino;
                fromAminoMsg(object: _16.AvgCounterParamsAminoMsg): _16.AvgCounterParams;
                fromProtoMsg(message: _16.AvgCounterParamsProtoMsg): _16.AvgCounterParams;
                toProto(message: _16.AvgCounterParams): Uint8Array;
                toProtoMsg(message: _16.AvgCounterParams): _16.AvgCounterParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _16.Denom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Denom;
                fromPartial(object: Partial<_16.Denom>): _16.Denom;
                fromAmino(object: _16.DenomAmino): _16.Denom;
                toAmino(message: _16.Denom): _16.DenomAmino;
                fromAminoMsg(object: _16.DenomAminoMsg): _16.Denom;
                fromProtoMsg(message: _16.DenomProtoMsg): _16.Denom;
                toProto(message: _16.Denom): Uint8Array;
                toProtoMsg(message: _16.Denom): _16.DenomProtoMsg;
            };
            AggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _16.AggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.AggregateExchangeRatePrevote;
                fromPartial(object: Partial<_16.AggregateExchangeRatePrevote>): _16.AggregateExchangeRatePrevote;
                fromAmino(object: _16.AggregateExchangeRatePrevoteAmino): _16.AggregateExchangeRatePrevote;
                toAmino(message: _16.AggregateExchangeRatePrevote): _16.AggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _16.AggregateExchangeRatePrevoteAminoMsg): _16.AggregateExchangeRatePrevote;
                fromProtoMsg(message: _16.AggregateExchangeRatePrevoteProtoMsg): _16.AggregateExchangeRatePrevote;
                toProto(message: _16.AggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _16.AggregateExchangeRatePrevote): _16.AggregateExchangeRatePrevoteProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _16.AggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.AggregateExchangeRateVote;
                fromPartial(object: Partial<_16.AggregateExchangeRateVote>): _16.AggregateExchangeRateVote;
                fromAmino(object: _16.AggregateExchangeRateVoteAmino): _16.AggregateExchangeRateVote;
                toAmino(message: _16.AggregateExchangeRateVote): _16.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _16.AggregateExchangeRateVoteAminoMsg): _16.AggregateExchangeRateVote;
                fromProtoMsg(message: _16.AggregateExchangeRateVoteProtoMsg): _16.AggregateExchangeRateVote;
                toProto(message: _16.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _16.AggregateExchangeRateVote): _16.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _16.ExchangeRateTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.ExchangeRateTuple;
                fromPartial(object: Partial<_16.ExchangeRateTuple>): _16.ExchangeRateTuple;
                fromAmino(object: _16.ExchangeRateTupleAmino): _16.ExchangeRateTuple;
                toAmino(message: _16.ExchangeRateTuple): _16.ExchangeRateTupleAmino;
                fromAminoMsg(object: _16.ExchangeRateTupleAminoMsg): _16.ExchangeRateTuple;
                fromProtoMsg(message: _16.ExchangeRateTupleProtoMsg): _16.ExchangeRateTuple;
                toProto(message: _16.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _16.ExchangeRateTuple): _16.ExchangeRateTupleProtoMsg;
            };
            AvgCounter: {
                typeUrl: string;
                encode(message: _16.AvgCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.AvgCounter;
                fromPartial(object: Partial<_16.AvgCounter>): _16.AvgCounter;
                fromAmino(object: _16.AvgCounterAmino): _16.AvgCounter;
                toAmino(message: _16.AvgCounter): _16.AvgCounterAmino;
                fromAminoMsg(object: _16.AvgCounterAminoMsg): _16.AvgCounter;
                fromProtoMsg(message: _16.AvgCounterProtoMsg): _16.AvgCounter;
                toProto(message: _16.AvgCounter): Uint8Array;
                toProtoMsg(message: _16.AvgCounter): _16.AvgCounterProtoMsg;
            };
            DenomExchangeRate: {
                typeUrl: string;
                encode(message: _16.DenomExchangeRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.DenomExchangeRate;
                fromPartial(object: Partial<_16.DenomExchangeRate>): _16.DenomExchangeRate;
                fromAmino(object: _16.DenomExchangeRateAmino): _16.DenomExchangeRate;
                toAmino(message: _16.DenomExchangeRate): _16.DenomExchangeRateAmino;
                fromAminoMsg(object: _16.DenomExchangeRateAminoMsg): _16.DenomExchangeRate;
                fromProtoMsg(message: _16.DenomExchangeRateProtoMsg): _16.DenomExchangeRate;
                toProto(message: _16.DenomExchangeRate): Uint8Array;
                toProtoMsg(message: _16.DenomExchangeRate): _16.DenomExchangeRateProtoMsg;
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
            FeederDelegation: {
                typeUrl: string;
                encode(message: _15.FeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.FeederDelegation;
                fromPartial(object: Partial<_15.FeederDelegation>): _15.FeederDelegation;
                fromAmino(object: _15.FeederDelegationAmino): _15.FeederDelegation;
                toAmino(message: _15.FeederDelegation): _15.FeederDelegationAmino;
                fromAminoMsg(object: _15.FeederDelegationAminoMsg): _15.FeederDelegation;
                fromProtoMsg(message: _15.FeederDelegationProtoMsg): _15.FeederDelegation;
                toProto(message: _15.FeederDelegation): Uint8Array;
                toProtoMsg(message: _15.FeederDelegation): _15.FeederDelegationProtoMsg;
            };
            MissCounter: {
                typeUrl: string;
                encode(message: _15.MissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.MissCounter;
                fromPartial(object: Partial<_15.MissCounter>): _15.MissCounter;
                fromAmino(object: _15.MissCounterAmino): _15.MissCounter;
                toAmino(message: _15.MissCounter): _15.MissCounterAmino;
                fromAminoMsg(object: _15.MissCounterAminoMsg): _15.MissCounter;
                fromProtoMsg(message: _15.MissCounterProtoMsg): _15.MissCounter;
                toProto(message: _15.MissCounter): Uint8Array;
                toProtoMsg(message: _15.MissCounter): _15.MissCounterProtoMsg;
            };
            Price: {
                typeUrl: string;
                encode(message: _15.Price, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Price;
                fromPartial(object: Partial<_15.Price>): _15.Price;
                fromAmino(object: _15.PriceAmino): _15.Price;
                toAmino(message: _15.Price): _15.PriceAmino;
                fromAminoMsg(object: _15.PriceAminoMsg): _15.Price;
                fromProtoMsg(message: _15.PriceProtoMsg): _15.Price;
                toProto(message: _15.Price): Uint8Array;
                toProtoMsg(message: _15.Price): _15.PriceProtoMsg;
            };
            EventDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _14.EventDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventDelegateFeedConsent;
                fromPartial(object: Partial<_14.EventDelegateFeedConsent>): _14.EventDelegateFeedConsent;
                fromAmino(object: _14.EventDelegateFeedConsentAmino): _14.EventDelegateFeedConsent;
                toAmino(message: _14.EventDelegateFeedConsent): _14.EventDelegateFeedConsentAmino;
                fromAminoMsg(object: _14.EventDelegateFeedConsentAminoMsg): _14.EventDelegateFeedConsent;
                fromProtoMsg(message: _14.EventDelegateFeedConsentProtoMsg): _14.EventDelegateFeedConsent;
                toProto(message: _14.EventDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _14.EventDelegateFeedConsent): _14.EventDelegateFeedConsentProtoMsg;
            };
            EventSetFxRate: {
                typeUrl: string;
                encode(message: _14.EventSetFxRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.EventSetFxRate;
                fromPartial(object: Partial<_14.EventSetFxRate>): _14.EventSetFxRate;
                fromAmino(object: _14.EventSetFxRateAmino): _14.EventSetFxRate;
                toAmino(message: _14.EventSetFxRate): _14.EventSetFxRateAmino;
                fromAminoMsg(object: _14.EventSetFxRateAminoMsg): _14.EventSetFxRate;
                fromProtoMsg(message: _14.EventSetFxRateProtoMsg): _14.EventSetFxRate;
                toProto(message: _14.EventSetFxRate): Uint8Array;
                toProtoMsg(message: _14.EventSetFxRate): _14.EventSetFxRateProtoMsg;
            };
        };
    }
    namespace ugov {
        const v1: {
            MsgClientImpl: typeof _209.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                minGasPrice(request?: _21.QueryMinGasPrice): Promise<_21.QueryMinGasPriceResponse>;
                emergencyGroup(request?: _21.QueryEmergencyGroup): Promise<_21.QueryEmergencyGroupResponse>;
                inflationParams(request?: _21.QueryInflationParams): Promise<_21.QueryInflationParamsResponse>;
                inflationCycleEnd(request?: _21.QueryInflationCycleEnd): Promise<_21.QueryInflationCycleEndResponse>;
            };
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    govUpdateMinGasPrice(value: _22.MsgGovUpdateMinGasPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govSetEmergencyGroup(value: _22.MsgGovSetEmergencyGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govUpdateInflationParams(value: _22.MsgGovUpdateInflationParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    govUpdateMinGasPrice(value: _22.MsgGovUpdateMinGasPrice): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateMinGasPrice;
                    };
                    govSetEmergencyGroup(value: _22.MsgGovSetEmergencyGroup): {
                        typeUrl: string;
                        value: _22.MsgGovSetEmergencyGroup;
                    };
                    govUpdateInflationParams(value: _22.MsgGovUpdateInflationParams): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateInflationParams;
                    };
                };
                fromJSON: {
                    govUpdateMinGasPrice(value: any): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateMinGasPrice;
                    };
                    govSetEmergencyGroup(value: any): {
                        typeUrl: string;
                        value: _22.MsgGovSetEmergencyGroup;
                    };
                    govUpdateInflationParams(value: any): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateInflationParams;
                    };
                };
                fromPartial: {
                    govUpdateMinGasPrice(value: _22.MsgGovUpdateMinGasPrice): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateMinGasPrice;
                    };
                    govSetEmergencyGroup(value: _22.MsgGovSetEmergencyGroup): {
                        typeUrl: string;
                        value: _22.MsgGovSetEmergencyGroup;
                    };
                    govUpdateInflationParams(value: _22.MsgGovUpdateInflationParams): {
                        typeUrl: string;
                        value: _22.MsgGovUpdateInflationParams;
                    };
                };
            };
            AminoConverter: {
                "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
                    aminoType: string;
                    toAmino: (message: _22.MsgGovUpdateMinGasPrice) => _22.MsgGovUpdateMinGasPriceAmino;
                    fromAmino: (object: _22.MsgGovUpdateMinGasPriceAmino) => _22.MsgGovUpdateMinGasPrice;
                };
                "/umee.ugov.v1.MsgGovSetEmergencyGroup": {
                    aminoType: string;
                    toAmino: (message: _22.MsgGovSetEmergencyGroup) => _22.MsgGovSetEmergencyGroupAmino;
                    fromAmino: (object: _22.MsgGovSetEmergencyGroupAmino) => _22.MsgGovSetEmergencyGroup;
                };
                "/umee.ugov.v1.MsgGovUpdateInflationParams": {
                    aminoType: string;
                    toAmino: (message: _22.MsgGovUpdateInflationParams) => _22.MsgGovUpdateInflationParamsAmino;
                    fromAmino: (object: _22.MsgGovUpdateInflationParamsAmino) => _22.MsgGovUpdateInflationParams;
                };
            };
            InflationParams: {
                typeUrl: string;
                encode(message: _23.InflationParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.InflationParams;
                fromPartial(object: Partial<_23.InflationParams>): _23.InflationParams;
                fromAmino(object: _23.InflationParamsAmino): _23.InflationParams;
                toAmino(message: _23.InflationParams): _23.InflationParamsAmino;
                fromAminoMsg(object: _23.InflationParamsAminoMsg): _23.InflationParams;
                fromProtoMsg(message: _23.InflationParamsProtoMsg): _23.InflationParams;
                toProto(message: _23.InflationParams): Uint8Array;
                toProtoMsg(message: _23.InflationParams): _23.InflationParamsProtoMsg;
            };
            MsgGovUpdateMinGasPrice: {
                typeUrl: string;
                encode(message: _22.MsgGovUpdateMinGasPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgGovUpdateMinGasPrice;
                fromPartial(object: Partial<_22.MsgGovUpdateMinGasPrice>): _22.MsgGovUpdateMinGasPrice;
                fromAmino(object: _22.MsgGovUpdateMinGasPriceAmino): _22.MsgGovUpdateMinGasPrice;
                toAmino(message: _22.MsgGovUpdateMinGasPrice): _22.MsgGovUpdateMinGasPriceAmino;
                fromAminoMsg(object: _22.MsgGovUpdateMinGasPriceAminoMsg): _22.MsgGovUpdateMinGasPrice;
                fromProtoMsg(message: _22.MsgGovUpdateMinGasPriceProtoMsg): _22.MsgGovUpdateMinGasPrice;
                toProto(message: _22.MsgGovUpdateMinGasPrice): Uint8Array;
                toProtoMsg(message: _22.MsgGovUpdateMinGasPrice): _22.MsgGovUpdateMinGasPriceProtoMsg;
            };
            MsgGovUpdateMinGasPriceResponse: {
                typeUrl: string;
                encode(_: _22.MsgGovUpdateMinGasPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgGovUpdateMinGasPriceResponse;
                fromPartial(_: Partial<_22.MsgGovUpdateMinGasPriceResponse>): _22.MsgGovUpdateMinGasPriceResponse;
                fromAmino(_: _22.MsgGovUpdateMinGasPriceResponseAmino): _22.MsgGovUpdateMinGasPriceResponse;
                toAmino(_: _22.MsgGovUpdateMinGasPriceResponse): _22.MsgGovUpdateMinGasPriceResponseAmino;
                fromAminoMsg(object: _22.MsgGovUpdateMinGasPriceResponseAminoMsg): _22.MsgGovUpdateMinGasPriceResponse;
                fromProtoMsg(message: _22.MsgGovUpdateMinGasPriceResponseProtoMsg): _22.MsgGovUpdateMinGasPriceResponse;
                toProto(message: _22.MsgGovUpdateMinGasPriceResponse): Uint8Array;
                toProtoMsg(message: _22.MsgGovUpdateMinGasPriceResponse): _22.MsgGovUpdateMinGasPriceResponseProtoMsg;
            };
            MsgGovSetEmergencyGroup: {
                typeUrl: string;
                encode(message: _22.MsgGovSetEmergencyGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgGovSetEmergencyGroup;
                fromPartial(object: Partial<_22.MsgGovSetEmergencyGroup>): _22.MsgGovSetEmergencyGroup;
                fromAmino(object: _22.MsgGovSetEmergencyGroupAmino): _22.MsgGovSetEmergencyGroup;
                toAmino(message: _22.MsgGovSetEmergencyGroup): _22.MsgGovSetEmergencyGroupAmino;
                fromAminoMsg(object: _22.MsgGovSetEmergencyGroupAminoMsg): _22.MsgGovSetEmergencyGroup;
                fromProtoMsg(message: _22.MsgGovSetEmergencyGroupProtoMsg): _22.MsgGovSetEmergencyGroup;
                toProto(message: _22.MsgGovSetEmergencyGroup): Uint8Array;
                toProtoMsg(message: _22.MsgGovSetEmergencyGroup): _22.MsgGovSetEmergencyGroupProtoMsg;
            };
            MsgGovSetEmergencyGroupResponse: {
                typeUrl: string;
                encode(_: _22.MsgGovSetEmergencyGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.MsgGovSetEmergencyGroupResponse;
                fromPartial(_: Partial<_22.MsgGovSetEmergencyGroupResponse>): _22.MsgGovSetEmergencyGroupResponse;
                fromAmino(_: _22.MsgGovSetEmergencyGroupResponseAmino): _22.MsgGovSetEmergencyGroupResponse;
                toAmino(_: _22.MsgGovSetEmergencyGroupResponse): _22.MsgGovSetEmergencyGroupResponseAmino;
                fromAminoMsg(object: _22.MsgGovSetEmergencyGroupResponseAminoMsg): _22.MsgGovSetEmergencyGroupResponse;
                fromProtoMsg(message: _22.MsgGovSetEmergencyGroupResponseProtoMsg): _22.MsgGovSetEmergencyGroupResponse;
                toProto(message: _22.MsgGovSetEmergencyGroupResponse): Uint8Array;
                toProtoMsg(message: _22.MsgGovSetEmergencyGroupResponse): _22.MsgGovSetEmergencyGroupResponseProtoMsg;
            };
            MsgGovUpdateInflationParams: {
                typeUrl: string;
                encode(message: _22.MsgGovUpdateInflationParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.MsgGovUpdateInflationParams;
                fromPartial(object: Partial<_22.MsgGovUpdateInflationParams>): _22.MsgGovUpdateInflationParams;
                fromAmino(object: _22.MsgGovUpdateInflationParamsAmino): _22.MsgGovUpdateInflationParams;
                toAmino(message: _22.MsgGovUpdateInflationParams): _22.MsgGovUpdateInflationParamsAmino;
                fromAminoMsg(object: _22.MsgGovUpdateInflationParamsAminoMsg): _22.MsgGovUpdateInflationParams;
                fromProtoMsg(message: _22.MsgGovUpdateInflationParamsProtoMsg): _22.MsgGovUpdateInflationParams;
                toProto(message: _22.MsgGovUpdateInflationParams): Uint8Array;
                toProtoMsg(message: _22.MsgGovUpdateInflationParams): _22.MsgGovUpdateInflationParamsProtoMsg;
            };
            GovUpdateInflationParamsResponse: {
                typeUrl: string;
                encode(_: _22.GovUpdateInflationParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _22.GovUpdateInflationParamsResponse;
                fromPartial(_: Partial<_22.GovUpdateInflationParamsResponse>): _22.GovUpdateInflationParamsResponse;
                fromAmino(_: _22.GovUpdateInflationParamsResponseAmino): _22.GovUpdateInflationParamsResponse;
                toAmino(_: _22.GovUpdateInflationParamsResponse): _22.GovUpdateInflationParamsResponseAmino;
                fromAminoMsg(object: _22.GovUpdateInflationParamsResponseAminoMsg): _22.GovUpdateInflationParamsResponse;
                fromProtoMsg(message: _22.GovUpdateInflationParamsResponseProtoMsg): _22.GovUpdateInflationParamsResponse;
                toProto(message: _22.GovUpdateInflationParamsResponse): Uint8Array;
                toProtoMsg(message: _22.GovUpdateInflationParamsResponse): _22.GovUpdateInflationParamsResponseProtoMsg;
            };
            QueryMinGasPrice: {
                typeUrl: string;
                encode(_: _21.QueryMinGasPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryMinGasPrice;
                fromPartial(_: Partial<_21.QueryMinGasPrice>): _21.QueryMinGasPrice;
                fromAmino(_: _21.QueryMinGasPriceAmino): _21.QueryMinGasPrice;
                toAmino(_: _21.QueryMinGasPrice): _21.QueryMinGasPriceAmino;
                fromAminoMsg(object: _21.QueryMinGasPriceAminoMsg): _21.QueryMinGasPrice;
                fromProtoMsg(message: _21.QueryMinGasPriceProtoMsg): _21.QueryMinGasPrice;
                toProto(message: _21.QueryMinGasPrice): Uint8Array;
                toProtoMsg(message: _21.QueryMinGasPrice): _21.QueryMinGasPriceProtoMsg;
            };
            QueryMinGasPriceResponse: {
                typeUrl: string;
                encode(message: _21.QueryMinGasPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryMinGasPriceResponse;
                fromPartial(object: Partial<_21.QueryMinGasPriceResponse>): _21.QueryMinGasPriceResponse;
                fromAmino(object: _21.QueryMinGasPriceResponseAmino): _21.QueryMinGasPriceResponse;
                toAmino(message: _21.QueryMinGasPriceResponse): _21.QueryMinGasPriceResponseAmino;
                fromAminoMsg(object: _21.QueryMinGasPriceResponseAminoMsg): _21.QueryMinGasPriceResponse;
                fromProtoMsg(message: _21.QueryMinGasPriceResponseProtoMsg): _21.QueryMinGasPriceResponse;
                toProto(message: _21.QueryMinGasPriceResponse): Uint8Array;
                toProtoMsg(message: _21.QueryMinGasPriceResponse): _21.QueryMinGasPriceResponseProtoMsg;
            };
            QueryEmergencyGroup: {
                typeUrl: string;
                encode(_: _21.QueryEmergencyGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryEmergencyGroup;
                fromPartial(_: Partial<_21.QueryEmergencyGroup>): _21.QueryEmergencyGroup;
                fromAmino(_: _21.QueryEmergencyGroupAmino): _21.QueryEmergencyGroup;
                toAmino(_: _21.QueryEmergencyGroup): _21.QueryEmergencyGroupAmino;
                fromAminoMsg(object: _21.QueryEmergencyGroupAminoMsg): _21.QueryEmergencyGroup;
                fromProtoMsg(message: _21.QueryEmergencyGroupProtoMsg): _21.QueryEmergencyGroup;
                toProto(message: _21.QueryEmergencyGroup): Uint8Array;
                toProtoMsg(message: _21.QueryEmergencyGroup): _21.QueryEmergencyGroupProtoMsg;
            };
            QueryEmergencyGroupResponse: {
                typeUrl: string;
                encode(message: _21.QueryEmergencyGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryEmergencyGroupResponse;
                fromPartial(object: Partial<_21.QueryEmergencyGroupResponse>): _21.QueryEmergencyGroupResponse;
                fromAmino(object: _21.QueryEmergencyGroupResponseAmino): _21.QueryEmergencyGroupResponse;
                toAmino(message: _21.QueryEmergencyGroupResponse): _21.QueryEmergencyGroupResponseAmino;
                fromAminoMsg(object: _21.QueryEmergencyGroupResponseAminoMsg): _21.QueryEmergencyGroupResponse;
                fromProtoMsg(message: _21.QueryEmergencyGroupResponseProtoMsg): _21.QueryEmergencyGroupResponse;
                toProto(message: _21.QueryEmergencyGroupResponse): Uint8Array;
                toProtoMsg(message: _21.QueryEmergencyGroupResponse): _21.QueryEmergencyGroupResponseProtoMsg;
            };
            QueryInflationParams: {
                typeUrl: string;
                encode(_: _21.QueryInflationParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryInflationParams;
                fromPartial(_: Partial<_21.QueryInflationParams>): _21.QueryInflationParams;
                fromAmino(_: _21.QueryInflationParamsAmino): _21.QueryInflationParams;
                toAmino(_: _21.QueryInflationParams): _21.QueryInflationParamsAmino;
                fromAminoMsg(object: _21.QueryInflationParamsAminoMsg): _21.QueryInflationParams;
                fromProtoMsg(message: _21.QueryInflationParamsProtoMsg): _21.QueryInflationParams;
                toProto(message: _21.QueryInflationParams): Uint8Array;
                toProtoMsg(message: _21.QueryInflationParams): _21.QueryInflationParamsProtoMsg;
            };
            QueryInflationParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryInflationParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryInflationParamsResponse;
                fromPartial(object: Partial<_21.QueryInflationParamsResponse>): _21.QueryInflationParamsResponse;
                fromAmino(object: _21.QueryInflationParamsResponseAmino): _21.QueryInflationParamsResponse;
                toAmino(message: _21.QueryInflationParamsResponse): _21.QueryInflationParamsResponseAmino;
                fromAminoMsg(object: _21.QueryInflationParamsResponseAminoMsg): _21.QueryInflationParamsResponse;
                fromProtoMsg(message: _21.QueryInflationParamsResponseProtoMsg): _21.QueryInflationParamsResponse;
                toProto(message: _21.QueryInflationParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryInflationParamsResponse): _21.QueryInflationParamsResponseProtoMsg;
            };
            QueryInflationCycleEnd: {
                typeUrl: string;
                encode(_: _21.QueryInflationCycleEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _21.QueryInflationCycleEnd;
                fromPartial(_: Partial<_21.QueryInflationCycleEnd>): _21.QueryInflationCycleEnd;
                fromAmino(_: _21.QueryInflationCycleEndAmino): _21.QueryInflationCycleEnd;
                toAmino(_: _21.QueryInflationCycleEnd): _21.QueryInflationCycleEndAmino;
                fromAminoMsg(object: _21.QueryInflationCycleEndAminoMsg): _21.QueryInflationCycleEnd;
                fromProtoMsg(message: _21.QueryInflationCycleEndProtoMsg): _21.QueryInflationCycleEnd;
                toProto(message: _21.QueryInflationCycleEnd): Uint8Array;
                toProtoMsg(message: _21.QueryInflationCycleEnd): _21.QueryInflationCycleEndProtoMsg;
            };
            QueryInflationCycleEndResponse: {
                typeUrl: string;
                encode(message: _21.QueryInflationCycleEndResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.QueryInflationCycleEndResponse;
                fromPartial(object: Partial<_21.QueryInflationCycleEndResponse>): _21.QueryInflationCycleEndResponse;
                fromAmino(object: _21.QueryInflationCycleEndResponseAmino): _21.QueryInflationCycleEndResponse;
                toAmino(message: _21.QueryInflationCycleEndResponse): _21.QueryInflationCycleEndResponseAmino;
                fromAminoMsg(object: _21.QueryInflationCycleEndResponseAminoMsg): _21.QueryInflationCycleEndResponse;
                fromProtoMsg(message: _21.QueryInflationCycleEndResponseProtoMsg): _21.QueryInflationCycleEndResponse;
                toProto(message: _21.QueryInflationCycleEndResponse): Uint8Array;
                toProtoMsg(message: _21.QueryInflationCycleEndResponse): _21.QueryInflationCycleEndResponseProtoMsg;
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
            EventMinGasPrice: {
                typeUrl: string;
                encode(message: _19.EventMinGasPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventMinGasPrice;
                fromPartial(object: Partial<_19.EventMinGasPrice>): _19.EventMinGasPrice;
                fromAmino(object: _19.EventMinGasPriceAmino): _19.EventMinGasPrice;
                toAmino(message: _19.EventMinGasPrice): _19.EventMinGasPriceAmino;
                fromAminoMsg(object: _19.EventMinGasPriceAminoMsg): _19.EventMinGasPrice;
                fromProtoMsg(message: _19.EventMinGasPriceProtoMsg): _19.EventMinGasPrice;
                toProto(message: _19.EventMinGasPrice): Uint8Array;
                toProtoMsg(message: _19.EventMinGasPrice): _19.EventMinGasPriceProtoMsg;
            };
            EventEmergencyGroup: {
                typeUrl: string;
                encode(message: _19.EventEmergencyGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventEmergencyGroup;
                fromPartial(object: Partial<_19.EventEmergencyGroup>): _19.EventEmergencyGroup;
                fromAmino(object: _19.EventEmergencyGroupAmino): _19.EventEmergencyGroup;
                toAmino(message: _19.EventEmergencyGroup): _19.EventEmergencyGroupAmino;
                fromAminoMsg(object: _19.EventEmergencyGroupAminoMsg): _19.EventEmergencyGroup;
                fromProtoMsg(message: _19.EventEmergencyGroupProtoMsg): _19.EventEmergencyGroup;
                toProto(message: _19.EventEmergencyGroup): Uint8Array;
                toProtoMsg(message: _19.EventEmergencyGroup): _19.EventEmergencyGroupProtoMsg;
            };
            EventInflationParams: {
                typeUrl: string;
                encode(message: _19.EventInflationParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.EventInflationParams;
                fromPartial(object: Partial<_19.EventInflationParams>): _19.EventInflationParams;
                fromAmino(object: _19.EventInflationParamsAmino): _19.EventInflationParams;
                toAmino(message: _19.EventInflationParams): _19.EventInflationParamsAmino;
                fromAminoMsg(object: _19.EventInflationParamsAminoMsg): _19.EventInflationParams;
                fromProtoMsg(message: _19.EventInflationParamsProtoMsg): _19.EventInflationParams;
                toProto(message: _19.EventInflationParams): Uint8Array;
                toProtoMsg(message: _19.EventInflationParams): _19.EventInflationParamsProtoMsg;
            };
        };
    }
    namespace uibc {
        const v1: {
            MsgClientImpl: typeof _210.MsgClientImpl;
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _26.QueryParams): Promise<_26.QueryParamsResponse>;
                outflows(request: _26.QueryOutflows): Promise<_26.QueryOutflowsResponse>;
                allOutflows(request?: _26.QueryAllOutflows): Promise<_26.QueryAllOutflowsResponse>;
                inflows(request: _26.QueryInflows): Promise<_26.QueryInflowsResponse>;
                quotaExpires(request?: _26.QueryQuotaExpires): Promise<_26.QueryQuotaExpiresResponse>;
            };
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    govUpdateQuota(value: _28.MsgGovUpdateQuota): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govSetIBCStatus(value: _28.MsgGovSetIBCStatus): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govToggleICS20Hooks(value: _28.MsgGovToggleICS20Hooks): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    govUpdateQuota(value: _28.MsgGovUpdateQuota): {
                        typeUrl: string;
                        value: _28.MsgGovUpdateQuota;
                    };
                    govSetIBCStatus(value: _28.MsgGovSetIBCStatus): {
                        typeUrl: string;
                        value: _28.MsgGovSetIBCStatus;
                    };
                    govToggleICS20Hooks(value: _28.MsgGovToggleICS20Hooks): {
                        typeUrl: string;
                        value: _28.MsgGovToggleICS20Hooks;
                    };
                };
                fromJSON: {
                    govUpdateQuota(value: any): {
                        typeUrl: string;
                        value: _28.MsgGovUpdateQuota;
                    };
                    govSetIBCStatus(value: any): {
                        typeUrl: string;
                        value: _28.MsgGovSetIBCStatus;
                    };
                    govToggleICS20Hooks(value: any): {
                        typeUrl: string;
                        value: _28.MsgGovToggleICS20Hooks;
                    };
                };
                fromPartial: {
                    govUpdateQuota(value: _28.MsgGovUpdateQuota): {
                        typeUrl: string;
                        value: _28.MsgGovUpdateQuota;
                    };
                    govSetIBCStatus(value: _28.MsgGovSetIBCStatus): {
                        typeUrl: string;
                        value: _28.MsgGovSetIBCStatus;
                    };
                    govToggleICS20Hooks(value: _28.MsgGovToggleICS20Hooks): {
                        typeUrl: string;
                        value: _28.MsgGovToggleICS20Hooks;
                    };
                };
            };
            AminoConverter: {
                "/umee.uibc.v1.MsgGovUpdateQuota": {
                    aminoType: string;
                    toAmino: (message: _28.MsgGovUpdateQuota) => _28.MsgGovUpdateQuotaAmino;
                    fromAmino: (object: _28.MsgGovUpdateQuotaAmino) => _28.MsgGovUpdateQuota;
                };
                "/umee.uibc.v1.MsgGovSetIBCStatus": {
                    aminoType: string;
                    toAmino: (message: _28.MsgGovSetIBCStatus) => _28.MsgGovSetIBCStatusAmino;
                    fromAmino: (object: _28.MsgGovSetIBCStatusAmino) => _28.MsgGovSetIBCStatus;
                };
                "/umee.uibc.v1.MsgGovToggleICS20Hooks": {
                    aminoType: string;
                    toAmino: (message: _28.MsgGovToggleICS20Hooks) => _28.MsgGovToggleICS20HooksAmino;
                    fromAmino: (object: _28.MsgGovToggleICS20HooksAmino) => _28.MsgGovToggleICS20Hooks;
                };
            };
            ICS20Memo: {
                typeUrl: string;
                encode(message: _29.ICS20Memo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.ICS20Memo;
                fromPartial(object: Partial<_29.ICS20Memo>): _29.ICS20Memo;
                fromAmino(object: _29.ICS20MemoAmino): _29.ICS20Memo;
                toAmino(message: _29.ICS20Memo): _29.ICS20MemoAmino;
                fromAminoMsg(object: _29.ICS20MemoAminoMsg): _29.ICS20Memo;
                fromProtoMsg(message: _29.ICS20MemoProtoMsg): _29.ICS20Memo;
                toProto(message: _29.ICS20Memo): Uint8Array;
                toProtoMsg(message: _29.ICS20Memo): _29.ICS20MemoProtoMsg;
            };
            DecCoinSymbol: {
                typeUrl: string;
                encode(message: _29.DecCoinSymbol, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _29.DecCoinSymbol;
                fromPartial(object: Partial<_29.DecCoinSymbol>): _29.DecCoinSymbol;
                fromAmino(object: _29.DecCoinSymbolAmino): _29.DecCoinSymbol;
                toAmino(message: _29.DecCoinSymbol): _29.DecCoinSymbolAmino;
                fromAminoMsg(object: _29.DecCoinSymbolAminoMsg): _29.DecCoinSymbol;
                fromProtoMsg(message: _29.DecCoinSymbolProtoMsg): _29.DecCoinSymbol;
                toProto(message: _29.DecCoinSymbol): Uint8Array;
                toProtoMsg(message: _29.DecCoinSymbol): _29.DecCoinSymbolProtoMsg;
            };
            MsgGovUpdateQuota: {
                typeUrl: string;
                encode(message: _28.MsgGovUpdateQuota, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgGovUpdateQuota;
                fromPartial(object: Partial<_28.MsgGovUpdateQuota>): _28.MsgGovUpdateQuota;
                fromAmino(object: _28.MsgGovUpdateQuotaAmino): _28.MsgGovUpdateQuota;
                toAmino(message: _28.MsgGovUpdateQuota): _28.MsgGovUpdateQuotaAmino;
                fromAminoMsg(object: _28.MsgGovUpdateQuotaAminoMsg): _28.MsgGovUpdateQuota;
                fromProtoMsg(message: _28.MsgGovUpdateQuotaProtoMsg): _28.MsgGovUpdateQuota;
                toProto(message: _28.MsgGovUpdateQuota): Uint8Array;
                toProtoMsg(message: _28.MsgGovUpdateQuota): _28.MsgGovUpdateQuotaProtoMsg;
            };
            MsgGovUpdateQuotaResponse: {
                typeUrl: string;
                encode(_: _28.MsgGovUpdateQuotaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgGovUpdateQuotaResponse;
                fromPartial(_: Partial<_28.MsgGovUpdateQuotaResponse>): _28.MsgGovUpdateQuotaResponse;
                fromAmino(_: _28.MsgGovUpdateQuotaResponseAmino): _28.MsgGovUpdateQuotaResponse;
                toAmino(_: _28.MsgGovUpdateQuotaResponse): _28.MsgGovUpdateQuotaResponseAmino;
                fromAminoMsg(object: _28.MsgGovUpdateQuotaResponseAminoMsg): _28.MsgGovUpdateQuotaResponse;
                fromProtoMsg(message: _28.MsgGovUpdateQuotaResponseProtoMsg): _28.MsgGovUpdateQuotaResponse;
                toProto(message: _28.MsgGovUpdateQuotaResponse): Uint8Array;
                toProtoMsg(message: _28.MsgGovUpdateQuotaResponse): _28.MsgGovUpdateQuotaResponseProtoMsg;
            };
            MsgGovSetIBCStatus: {
                typeUrl: string;
                encode(message: _28.MsgGovSetIBCStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgGovSetIBCStatus;
                fromPartial(object: Partial<_28.MsgGovSetIBCStatus>): _28.MsgGovSetIBCStatus;
                fromAmino(object: _28.MsgGovSetIBCStatusAmino): _28.MsgGovSetIBCStatus;
                toAmino(message: _28.MsgGovSetIBCStatus): _28.MsgGovSetIBCStatusAmino;
                fromAminoMsg(object: _28.MsgGovSetIBCStatusAminoMsg): _28.MsgGovSetIBCStatus;
                fromProtoMsg(message: _28.MsgGovSetIBCStatusProtoMsg): _28.MsgGovSetIBCStatus;
                toProto(message: _28.MsgGovSetIBCStatus): Uint8Array;
                toProtoMsg(message: _28.MsgGovSetIBCStatus): _28.MsgGovSetIBCStatusProtoMsg;
            };
            MsgGovSetIBCStatusResponse: {
                typeUrl: string;
                encode(_: _28.MsgGovSetIBCStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgGovSetIBCStatusResponse;
                fromPartial(_: Partial<_28.MsgGovSetIBCStatusResponse>): _28.MsgGovSetIBCStatusResponse;
                fromAmino(_: _28.MsgGovSetIBCStatusResponseAmino): _28.MsgGovSetIBCStatusResponse;
                toAmino(_: _28.MsgGovSetIBCStatusResponse): _28.MsgGovSetIBCStatusResponseAmino;
                fromAminoMsg(object: _28.MsgGovSetIBCStatusResponseAminoMsg): _28.MsgGovSetIBCStatusResponse;
                fromProtoMsg(message: _28.MsgGovSetIBCStatusResponseProtoMsg): _28.MsgGovSetIBCStatusResponse;
                toProto(message: _28.MsgGovSetIBCStatusResponse): Uint8Array;
                toProtoMsg(message: _28.MsgGovSetIBCStatusResponse): _28.MsgGovSetIBCStatusResponseProtoMsg;
            };
            MsgGovToggleICS20Hooks: {
                typeUrl: string;
                encode(message: _28.MsgGovToggleICS20Hooks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _28.MsgGovToggleICS20Hooks;
                fromPartial(object: Partial<_28.MsgGovToggleICS20Hooks>): _28.MsgGovToggleICS20Hooks;
                fromAmino(object: _28.MsgGovToggleICS20HooksAmino): _28.MsgGovToggleICS20Hooks;
                toAmino(message: _28.MsgGovToggleICS20Hooks): _28.MsgGovToggleICS20HooksAmino;
                fromAminoMsg(object: _28.MsgGovToggleICS20HooksAminoMsg): _28.MsgGovToggleICS20Hooks;
                fromProtoMsg(message: _28.MsgGovToggleICS20HooksProtoMsg): _28.MsgGovToggleICS20Hooks;
                toProto(message: _28.MsgGovToggleICS20Hooks): Uint8Array;
                toProtoMsg(message: _28.MsgGovToggleICS20Hooks): _28.MsgGovToggleICS20HooksProtoMsg;
            };
            MsgGovToggleICS20HooksResponse: {
                typeUrl: string;
                encode(_: _28.MsgGovToggleICS20HooksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _28.MsgGovToggleICS20HooksResponse;
                fromPartial(_: Partial<_28.MsgGovToggleICS20HooksResponse>): _28.MsgGovToggleICS20HooksResponse;
                fromAmino(_: _28.MsgGovToggleICS20HooksResponseAmino): _28.MsgGovToggleICS20HooksResponse;
                toAmino(_: _28.MsgGovToggleICS20HooksResponse): _28.MsgGovToggleICS20HooksResponseAmino;
                fromAminoMsg(object: _28.MsgGovToggleICS20HooksResponseAminoMsg): _28.MsgGovToggleICS20HooksResponse;
                fromProtoMsg(message: _28.MsgGovToggleICS20HooksResponseProtoMsg): _28.MsgGovToggleICS20HooksResponse;
                toProto(message: _28.MsgGovToggleICS20HooksResponse): Uint8Array;
                toProtoMsg(message: _28.MsgGovToggleICS20HooksResponse): _28.MsgGovToggleICS20HooksResponseProtoMsg;
            };
            iBCTransferStatusFromJSON(object: any): _27.IBCTransferStatus;
            iBCTransferStatusToJSON(object: _27.IBCTransferStatus): string;
            IBCTransferStatus: typeof _27.IBCTransferStatus;
            IBCTransferStatusSDKType: typeof _27.IBCTransferStatus;
            IBCTransferStatusAmino: typeof _27.IBCTransferStatus;
            Params: {
                typeUrl: string;
                encode(message: _27.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.Params;
                fromPartial(object: Partial<_27.Params>): _27.Params;
                fromAmino(object: _27.ParamsAmino): _27.Params;
                toAmino(message: _27.Params): _27.ParamsAmino;
                fromAminoMsg(object: _27.ParamsAminoMsg): _27.Params;
                fromProtoMsg(message: _27.ParamsProtoMsg): _27.Params;
                toProto(message: _27.Params): Uint8Array;
                toProtoMsg(message: _27.Params): _27.ParamsProtoMsg;
            };
            QueryQuotaExpires: {
                typeUrl: string;
                encode(_: _26.QueryQuotaExpires, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryQuotaExpires;
                fromPartial(_: Partial<_26.QueryQuotaExpires>): _26.QueryQuotaExpires;
                fromAmino(_: _26.QueryQuotaExpiresAmino): _26.QueryQuotaExpires;
                toAmino(_: _26.QueryQuotaExpires): _26.QueryQuotaExpiresAmino;
                fromAminoMsg(object: _26.QueryQuotaExpiresAminoMsg): _26.QueryQuotaExpires;
                fromProtoMsg(message: _26.QueryQuotaExpiresProtoMsg): _26.QueryQuotaExpires;
                toProto(message: _26.QueryQuotaExpires): Uint8Array;
                toProtoMsg(message: _26.QueryQuotaExpires): _26.QueryQuotaExpiresProtoMsg;
            };
            QueryQuotaExpiresResponse: {
                typeUrl: string;
                encode(message: _26.QueryQuotaExpiresResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryQuotaExpiresResponse;
                fromPartial(object: Partial<_26.QueryQuotaExpiresResponse>): _26.QueryQuotaExpiresResponse;
                fromAmino(object: _26.QueryQuotaExpiresResponseAmino): _26.QueryQuotaExpiresResponse;
                toAmino(message: _26.QueryQuotaExpiresResponse): _26.QueryQuotaExpiresResponseAmino;
                fromAminoMsg(object: _26.QueryQuotaExpiresResponseAminoMsg): _26.QueryQuotaExpiresResponse;
                fromProtoMsg(message: _26.QueryQuotaExpiresResponseProtoMsg): _26.QueryQuotaExpiresResponse;
                toProto(message: _26.QueryQuotaExpiresResponse): Uint8Array;
                toProtoMsg(message: _26.QueryQuotaExpiresResponse): _26.QueryQuotaExpiresResponseProtoMsg;
            };
            QueryInflows: {
                typeUrl: string;
                encode(message: _26.QueryInflows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryInflows;
                fromPartial(object: Partial<_26.QueryInflows>): _26.QueryInflows;
                fromAmino(object: _26.QueryInflowsAmino): _26.QueryInflows;
                toAmino(message: _26.QueryInflows): _26.QueryInflowsAmino;
                fromAminoMsg(object: _26.QueryInflowsAminoMsg): _26.QueryInflows;
                fromProtoMsg(message: _26.QueryInflowsProtoMsg): _26.QueryInflows;
                toProto(message: _26.QueryInflows): Uint8Array;
                toProtoMsg(message: _26.QueryInflows): _26.QueryInflowsProtoMsg;
            };
            QueryInflowsResponse: {
                typeUrl: string;
                encode(message: _26.QueryInflowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryInflowsResponse;
                fromPartial(object: Partial<_26.QueryInflowsResponse>): _26.QueryInflowsResponse;
                fromAmino(object: _26.QueryInflowsResponseAmino): _26.QueryInflowsResponse;
                toAmino(message: _26.QueryInflowsResponse): _26.QueryInflowsResponseAmino;
                fromAminoMsg(object: _26.QueryInflowsResponseAminoMsg): _26.QueryInflowsResponse;
                fromProtoMsg(message: _26.QueryInflowsResponseProtoMsg): _26.QueryInflowsResponse;
                toProto(message: _26.QueryInflowsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryInflowsResponse): _26.QueryInflowsResponseProtoMsg;
            };
            QueryParams: {
                typeUrl: string;
                encode(_: _26.QueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryParams;
                fromPartial(_: Partial<_26.QueryParams>): _26.QueryParams;
                fromAmino(_: _26.QueryParamsAmino): _26.QueryParams;
                toAmino(_: _26.QueryParams): _26.QueryParamsAmino;
                fromAminoMsg(object: _26.QueryParamsAminoMsg): _26.QueryParams;
                fromProtoMsg(message: _26.QueryParamsProtoMsg): _26.QueryParams;
                toProto(message: _26.QueryParams): Uint8Array;
                toProtoMsg(message: _26.QueryParams): _26.QueryParamsProtoMsg;
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
            QueryOutflows: {
                typeUrl: string;
                encode(message: _26.QueryOutflows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryOutflows;
                fromPartial(object: Partial<_26.QueryOutflows>): _26.QueryOutflows;
                fromAmino(object: _26.QueryOutflowsAmino): _26.QueryOutflows;
                toAmino(message: _26.QueryOutflows): _26.QueryOutflowsAmino;
                fromAminoMsg(object: _26.QueryOutflowsAminoMsg): _26.QueryOutflows;
                fromProtoMsg(message: _26.QueryOutflowsProtoMsg): _26.QueryOutflows;
                toProto(message: _26.QueryOutflows): Uint8Array;
                toProtoMsg(message: _26.QueryOutflows): _26.QueryOutflowsProtoMsg;
            };
            QueryOutflowsResponse: {
                typeUrl: string;
                encode(message: _26.QueryOutflowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryOutflowsResponse;
                fromPartial(object: Partial<_26.QueryOutflowsResponse>): _26.QueryOutflowsResponse;
                fromAmino(object: _26.QueryOutflowsResponseAmino): _26.QueryOutflowsResponse;
                toAmino(message: _26.QueryOutflowsResponse): _26.QueryOutflowsResponseAmino;
                fromAminoMsg(object: _26.QueryOutflowsResponseAminoMsg): _26.QueryOutflowsResponse;
                fromProtoMsg(message: _26.QueryOutflowsResponseProtoMsg): _26.QueryOutflowsResponse;
                toProto(message: _26.QueryOutflowsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryOutflowsResponse): _26.QueryOutflowsResponseProtoMsg;
            };
            QueryAllOutflows: {
                typeUrl: string;
                encode(_: _26.QueryAllOutflows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _26.QueryAllOutflows;
                fromPartial(_: Partial<_26.QueryAllOutflows>): _26.QueryAllOutflows;
                fromAmino(_: _26.QueryAllOutflowsAmino): _26.QueryAllOutflows;
                toAmino(_: _26.QueryAllOutflows): _26.QueryAllOutflowsAmino;
                fromAminoMsg(object: _26.QueryAllOutflowsAminoMsg): _26.QueryAllOutflows;
                fromProtoMsg(message: _26.QueryAllOutflowsProtoMsg): _26.QueryAllOutflows;
                toProto(message: _26.QueryAllOutflows): Uint8Array;
                toProtoMsg(message: _26.QueryAllOutflows): _26.QueryAllOutflowsProtoMsg;
            };
            QueryAllOutflowsResponse: {
                typeUrl: string;
                encode(message: _26.QueryAllOutflowsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.QueryAllOutflowsResponse;
                fromPartial(object: Partial<_26.QueryAllOutflowsResponse>): _26.QueryAllOutflowsResponse;
                fromAmino(object: _26.QueryAllOutflowsResponseAmino): _26.QueryAllOutflowsResponse;
                toAmino(message: _26.QueryAllOutflowsResponse): _26.QueryAllOutflowsResponseAmino;
                fromAminoMsg(object: _26.QueryAllOutflowsResponseAminoMsg): _26.QueryAllOutflowsResponse;
                fromProtoMsg(message: _26.QueryAllOutflowsResponseProtoMsg): _26.QueryAllOutflowsResponse;
                toProto(message: _26.QueryAllOutflowsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAllOutflowsResponse): _26.QueryAllOutflowsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.GenesisState;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            EventBadRevert: {
                typeUrl: string;
                encode(message: _24.EventBadRevert, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.EventBadRevert;
                fromPartial(object: Partial<_24.EventBadRevert>): _24.EventBadRevert;
                fromAmino(object: _24.EventBadRevertAmino): _24.EventBadRevert;
                toAmino(message: _24.EventBadRevert): _24.EventBadRevertAmino;
                fromAminoMsg(object: _24.EventBadRevertAminoMsg): _24.EventBadRevert;
                fromProtoMsg(message: _24.EventBadRevertProtoMsg): _24.EventBadRevert;
                toProto(message: _24.EventBadRevert): Uint8Array;
                toProtoMsg(message: _24.EventBadRevert): _24.EventBadRevertProtoMsg;
            };
            EventIBCTransferStatus: {
                typeUrl: string;
                encode(message: _24.EventIBCTransferStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.EventIBCTransferStatus;
                fromPartial(object: Partial<_24.EventIBCTransferStatus>): _24.EventIBCTransferStatus;
                fromAmino(object: _24.EventIBCTransferStatusAmino): _24.EventIBCTransferStatus;
                toAmino(message: _24.EventIBCTransferStatus): _24.EventIBCTransferStatusAmino;
                fromAminoMsg(object: _24.EventIBCTransferStatusAminoMsg): _24.EventIBCTransferStatus;
                fromProtoMsg(message: _24.EventIBCTransferStatusProtoMsg): _24.EventIBCTransferStatus;
                toProto(message: _24.EventIBCTransferStatus): Uint8Array;
                toProtoMsg(message: _24.EventIBCTransferStatus): _24.EventIBCTransferStatusProtoMsg;
            };
            EventICS20Hooks: {
                typeUrl: string;
                encode(message: _24.EventICS20Hooks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.EventICS20Hooks;
                fromPartial(object: Partial<_24.EventICS20Hooks>): _24.EventICS20Hooks;
                fromAmino(object: _24.EventICS20HooksAmino): _24.EventICS20Hooks;
                toAmino(message: _24.EventICS20Hooks): _24.EventICS20HooksAmino;
                fromAminoMsg(object: _24.EventICS20HooksAminoMsg): _24.EventICS20Hooks;
                fromProtoMsg(message: _24.EventICS20HooksProtoMsg): _24.EventICS20Hooks;
                toProto(message: _24.EventICS20Hooks): Uint8Array;
                toProtoMsg(message: _24.EventICS20Hooks): _24.EventICS20HooksProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            umee: {
                incentive: {
                    v1: _205.MsgClientImpl;
                };
                leverage: {
                    v1: _206.MsgClientImpl;
                };
                metoken: {
                    v1: _207.MsgClientImpl;
                };
                oracle: {
                    v1: _208.MsgClientImpl;
                };
                ugov: {
                    v1: _209.MsgClientImpl;
                };
                uibc: {
                    v1: _210.MsgClientImpl;
                };
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
            rpcEndpoint: any;
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
                        registeredTokensWithMarkets(request?: _7.QueryRegisteredTokensWithMarkets): Promise<_7.QueryRegisteredTokensWithMarketsResponse>;
                        specialAssets(request: _7.QuerySpecialAssets): Promise<_7.QuerySpecialAssetsResponse>;
                        marketSummary(request: _7.QueryMarketSummary): Promise<_7.QueryMarketSummaryResponse>;
                        accountBalances(request: _7.QueryAccountBalances): Promise<_7.QueryAccountBalancesResponse>;
                        accountSummary(request: _7.QueryAccountSummary): Promise<_7.QueryAccountSummaryResponse>;
                        liquidationTargets(request?: _7.QueryLiquidationTargets): Promise<_7.QueryLiquidationTargetsResponse>;
                        badDebts(request?: _7.QueryBadDebts): Promise<_7.QueryBadDebtsResponse>;
                        maxWithdraw(request: _7.QueryMaxWithdraw): Promise<_7.QueryMaxWithdrawResponse>;
                        maxBorrow(request: _7.QueryMaxBorrow): Promise<_7.QueryMaxBorrowResponse>;
                        inspect(request: _7.QueryInspect): Promise<_7.QueryInspectResponse>;
                        inspectAccount(request: _7.QueryInspectAccount): Promise<_7.QueryInspectAccountResponse>;
                    };
                };
                metoken: {
                    v1: {
                        params(request?: _12.QueryParams): Promise<_12.QueryParamsResponse>;
                        indexes(request: _12.QueryIndexes): Promise<_12.QueryIndexesResponse>;
                        swapFee(request: _12.QuerySwapFee): Promise<_12.QuerySwapFeeResponse>;
                        redeemFee(request: _12.QueryRedeemFee): Promise<_12.QueryRedeemFeeResponse>;
                        indexBalances(request: _12.QueryIndexBalances): Promise<_12.QueryIndexBalancesResponse>;
                        indexPrices(request: _12.QueryIndexPrices): Promise<_12.QueryIndexPricesResponse>;
                    };
                };
                oracle: {
                    v1: {
                        exchangeRates(request: _17.QueryExchangeRates): Promise<_17.QueryExchangeRatesResponse>;
                        activeExchangeRates(request?: _17.QueryActiveExchangeRates): Promise<_17.QueryActiveExchangeRatesResponse>;
                        feederDelegation(request: _17.QueryFeederDelegation): Promise<_17.QueryFeederDelegationResponse>;
                        missCounter(request: _17.QueryMissCounter): Promise<_17.QueryMissCounterResponse>;
                        slashWindow(request?: _17.QuerySlashWindow): Promise<_17.QuerySlashWindowResponse>;
                        aggregatePrevote(request: _17.QueryAggregatePrevote): Promise<_17.QueryAggregatePrevoteResponse>;
                        aggregatePrevotes(request?: _17.QueryAggregatePrevotes): Promise<_17.QueryAggregatePrevotesResponse>;
                        aggregateVote(request: _17.QueryAggregateVote): Promise<_17.QueryAggregateVoteResponse>;
                        aggregateVotes(request?: _17.QueryAggregateVotes): Promise<_17.QueryAggregateVotesResponse>;
                        params(request?: _17.QueryParams): Promise<_17.QueryParamsResponse>;
                        medians(request: _17.QueryMedians): Promise<_17.QueryMediansResponse>;
                        medianDeviations(request: _17.QueryMedianDeviations): Promise<_17.QueryMedianDeviationsResponse>;
                        avgPrice(request: _17.QueryAvgPrice): Promise<_17.QueryAvgPriceResponse>;
                        exgRatesWithTimestamp(request: _17.QueryExgRatesWithTimestamp): Promise<_17.QueryExgRatesWithTimestampResponse>;
                        missCounters(request: _17.QueryMissCounters): Promise<_17.QueryMissCountersResponse>;
                    };
                };
                ugov: {
                    v1: {
                        minGasPrice(request?: _21.QueryMinGasPrice): Promise<_21.QueryMinGasPriceResponse>;
                        emergencyGroup(request?: _21.QueryEmergencyGroup): Promise<_21.QueryEmergencyGroupResponse>;
                        inflationParams(request?: _21.QueryInflationParams): Promise<_21.QueryInflationParamsResponse>;
                        inflationCycleEnd(request?: _21.QueryInflationCycleEnd): Promise<_21.QueryInflationCycleEndResponse>;
                    };
                };
                uibc: {
                    v1: {
                        params(request?: _26.QueryParams): Promise<_26.QueryParamsResponse>;
                        outflows(request: _26.QueryOutflows): Promise<_26.QueryOutflowsResponse>;
                        allOutflows(request?: _26.QueryAllOutflows): Promise<_26.QueryAllOutflowsResponse>;
                        inflows(request: _26.QueryInflows): Promise<_26.QueryInflowsResponse>;
                        quotaExpires(request?: _26.QueryQuotaExpires): Promise<_26.QueryQuotaExpiresResponse>;
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
            umee: {
                incentive: {
                    v1: _193.LCDQueryClient;
                };
                leverage: {
                    v1: _194.LCDQueryClient;
                };
                metoken: {
                    v1: _195.LCDQueryClient;
                };
                oracle: {
                    v1: _196.LCDQueryClient;
                };
                ugov: {
                    v1: _197.LCDQueryClient;
                };
                uibc: {
                    v1: _198.LCDQueryClient;
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
