import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType, IncentiveProgram, IncentiveProgramAmino, IncentiveProgramSDKType } from "./incentive";
import { BinaryWriter } from "../../../binary";
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaim {
    account: string;
}
export interface MsgClaimProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgClaim";
    value: Uint8Array;
}
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaimAmino {
    account: string;
}
export interface MsgClaimAminoMsg {
    type: "/umee.incentive.v1.MsgClaim";
    value: MsgClaimAmino;
}
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaimSDKType {
    account: string;
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponse {
    amount: Coin[];
}
export interface MsgClaimResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgClaimResponse";
    value: Uint8Array;
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponseAmino {
    amount: CoinAmino[];
}
export interface MsgClaimResponseAminoMsg {
    type: "/umee.incentive.v1.MsgClaimResponse";
    value: MsgClaimResponseAmino;
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponseSDKType {
    amount: CoinSDKType[];
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBond {
    account: string;
    uToken: Coin;
}
export interface MsgBondProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgBond";
    value: Uint8Array;
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBondAmino {
    account: string;
    uToken?: CoinAmino;
}
export interface MsgBondAminoMsg {
    type: "/umee.incentive.v1.MsgBond";
    value: MsgBondAmino;
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBondSDKType {
    account: string;
    uToken: CoinSDKType;
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponse {
}
export interface MsgBondResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgBondResponse";
    value: Uint8Array;
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponseAmino {
}
export interface MsgBondResponseAminoMsg {
    type: "/umee.incentive.v1.MsgBondResponse";
    value: MsgBondResponseAmino;
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponseSDKType {
}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbonding {
    account: string;
    uToken: Coin;
}
export interface MsgBeginUnbondingProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgBeginUnbonding";
    value: Uint8Array;
}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbondingAmino {
    account: string;
    uToken?: CoinAmino;
}
export interface MsgBeginUnbondingAminoMsg {
    type: "/umee.incentive.v1.MsgBeginUnbonding";
    value: MsgBeginUnbondingAmino;
}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbondingSDKType {
    account: string;
    uToken: CoinSDKType;
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponse {
}
export interface MsgBeginUnbondingResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgBeginUnbondingResponse";
    value: Uint8Array;
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponseAmino {
}
export interface MsgBeginUnbondingResponseAminoMsg {
    type: "/umee.incentive.v1.MsgBeginUnbondingResponse";
    value: MsgBeginUnbondingResponseAmino;
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponseSDKType {
}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbond {
    account: string;
    uToken: Coin;
}
export interface MsgEmergencyUnbondProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgEmergencyUnbond";
    value: Uint8Array;
}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbondAmino {
    account: string;
    uToken?: CoinAmino;
}
export interface MsgEmergencyUnbondAminoMsg {
    type: "/umee.incentive.v1.MsgEmergencyUnbond";
    value: MsgEmergencyUnbondAmino;
}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbondSDKType {
    account: string;
    uToken: CoinSDKType;
}
/** MsgEmergencyUnbondResponse defines the Msg/EmergencyUnbond response type. */
export interface MsgEmergencyUnbondResponse {
}
export interface MsgEmergencyUnbondResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgEmergencyUnbondResponse";
    value: Uint8Array;
}
/** MsgEmergencyUnbondResponse defines the Msg/EmergencyUnbond response type. */
export interface MsgEmergencyUnbondResponseAmino {
}
export interface MsgEmergencyUnbondResponseAminoMsg {
    type: "/umee.incentive.v1.MsgEmergencyUnbondResponse";
    value: MsgEmergencyUnbondResponseAmino;
}
/** MsgEmergencyUnbondResponse defines the Msg/EmergencyUnbond response type. */
export interface MsgEmergencyUnbondResponseSDKType {
}
/**
 * MsgSponsor represents a sponsor's request to fund rewards for an incentive program.
 * The program must have been passed by governance, not yet started, and not yet funded.
 * Funded assets must be the full amount required by the program.
 */
export interface MsgSponsor {
    /** Sponsor bech32 account address */
    sponsor: string;
    program: number;
}
export interface MsgSponsorProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgSponsor";
    value: Uint8Array;
}
/**
 * MsgSponsor represents a sponsor's request to fund rewards for an incentive program.
 * The program must have been passed by governance, not yet started, and not yet funded.
 * Funded assets must be the full amount required by the program.
 */
export interface MsgSponsorAmino {
    /** Sponsor bech32 account address */
    sponsor: string;
    program: number;
}
export interface MsgSponsorAminoMsg {
    type: "/umee.incentive.v1.MsgSponsor";
    value: MsgSponsorAmino;
}
/**
 * MsgSponsor represents a sponsor's request to fund rewards for an incentive program.
 * The program must have been passed by governance, not yet started, and not yet funded.
 * Funded assets must be the full amount required by the program.
 */
export interface MsgSponsorSDKType {
    sponsor: string;
    program: number;
}
/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponse {
}
export interface MsgSponsorResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgSponsorResponse";
    value: Uint8Array;
}
/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponseAmino {
}
export interface MsgSponsorResponseAminoMsg {
    type: "/umee.incentive.v1.MsgSponsorResponse";
    value: MsgSponsorResponseAmino;
}
/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponseSDKType {
}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParams {
    /** authority must be the address of the governance account. */
    authority: string;
    params: Params;
}
export interface MsgGovSetParamsProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgGovSetParams";
    value: Uint8Array;
}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParamsAmino {
    /** authority must be the address of the governance account. */
    authority: string;
    params?: ParamsAmino;
}
export interface MsgGovSetParamsAminoMsg {
    type: "/umee.incentive.v1.MsgGovSetParams";
    value: MsgGovSetParamsAmino;
}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/** MsgGovSetParamsResponse defines the Msg/SetParams response type. */
export interface MsgGovSetParamsResponse {
}
export interface MsgGovSetParamsResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgGovSetParamsResponse";
    value: Uint8Array;
}
/** MsgGovSetParamsResponse defines the Msg/SetParams response type. */
export interface MsgGovSetParamsResponseAmino {
}
export interface MsgGovSetParamsResponseAminoMsg {
    type: "/umee.incentive.v1.MsgGovSetParamsResponse";
    value: MsgGovSetParamsResponseAmino;
}
/** MsgGovSetParamsResponse defines the Msg/SetParams response type. */
export interface MsgGovSetParamsResponseSDKType {
}
/**
 * MsgGovCreatePrograms is used by governance to create one or more incentive programs.
 * There are two funding scenarios, depending on from_community_fund.
 * If it is true,the programs' total rewards will be automatically withdrawn from
 * the (parameter) community_fund_address to the incentive module account when this
 * message is passed. (Insufficient funds cause the parameter to be treated as false.)
 * If it is false, a MsgSponsor funding each program's full amount must be submitted
 * after this message passes, but before the program's start_time, or the program
 * will be cancelled when it would otherwise start.
 */
export interface MsgGovCreatePrograms {
    /** authority must be the address of the governance account. */
    authority: string;
    programs: IncentiveProgram[];
    /** from_community_fund defines the source of funds for proposed incentive programs. */
    fromCommunityFund: boolean;
}
export interface MsgGovCreateProgramsProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgGovCreatePrograms";
    value: Uint8Array;
}
/**
 * MsgGovCreatePrograms is used by governance to create one or more incentive programs.
 * There are two funding scenarios, depending on from_community_fund.
 * If it is true,the programs' total rewards will be automatically withdrawn from
 * the (parameter) community_fund_address to the incentive module account when this
 * message is passed. (Insufficient funds cause the parameter to be treated as false.)
 * If it is false, a MsgSponsor funding each program's full amount must be submitted
 * after this message passes, but before the program's start_time, or the program
 * will be cancelled when it would otherwise start.
 */
export interface MsgGovCreateProgramsAmino {
    /** authority must be the address of the governance account. */
    authority: string;
    programs: IncentiveProgramAmino[];
    /** from_community_fund defines the source of funds for proposed incentive programs. */
    from_community_fund: boolean;
}
export interface MsgGovCreateProgramsAminoMsg {
    type: "/umee.incentive.v1.MsgGovCreatePrograms";
    value: MsgGovCreateProgramsAmino;
}
/**
 * MsgGovCreatePrograms is used by governance to create one or more incentive programs.
 * There are two funding scenarios, depending on from_community_fund.
 * If it is true,the programs' total rewards will be automatically withdrawn from
 * the (parameter) community_fund_address to the incentive module account when this
 * message is passed. (Insufficient funds cause the parameter to be treated as false.)
 * If it is false, a MsgSponsor funding each program's full amount must be submitted
 * after this message passes, but before the program's start_time, or the program
 * will be cancelled when it would otherwise start.
 */
export interface MsgGovCreateProgramsSDKType {
    authority: string;
    programs: IncentiveProgramSDKType[];
    from_community_fund: boolean;
}
/** MsgGovCreateProgramsResponse defines the Msg/CreatePrograms response type. */
export interface MsgGovCreateProgramsResponse {
}
export interface MsgGovCreateProgramsResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.MsgGovCreateProgramsResponse";
    value: Uint8Array;
}
/** MsgGovCreateProgramsResponse defines the Msg/CreatePrograms response type. */
export interface MsgGovCreateProgramsResponseAmino {
}
export interface MsgGovCreateProgramsResponseAminoMsg {
    type: "/umee.incentive.v1.MsgGovCreateProgramsResponse";
    value: MsgGovCreateProgramsResponseAmino;
}
/** MsgGovCreateProgramsResponse defines the Msg/CreatePrograms response type. */
export interface MsgGovCreateProgramsResponseSDKType {
}
export declare const MsgClaim: {
    typeUrl: string;
    encode(message: MsgClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaim;
    fromPartial(object: Partial<MsgClaim>): MsgClaim;
    fromAmino(object: MsgClaimAmino): MsgClaim;
    toAmino(message: MsgClaim): MsgClaimAmino;
    fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim;
    fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim;
    toProto(message: MsgClaim): Uint8Array;
    toProtoMsg(message: MsgClaim): MsgClaimProtoMsg;
};
export declare const MsgClaimResponse: {
    typeUrl: string;
    encode(message: MsgClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimResponse;
    fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse;
    fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse;
    toAmino(message: MsgClaimResponse): MsgClaimResponseAmino;
    fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse;
    fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse;
    toProto(message: MsgClaimResponse): Uint8Array;
    toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg;
};
export declare const MsgBond: {
    typeUrl: string;
    encode(message: MsgBond, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBond;
    fromPartial(object: Partial<MsgBond>): MsgBond;
    fromAmino(object: MsgBondAmino): MsgBond;
    toAmino(message: MsgBond): MsgBondAmino;
    fromAminoMsg(object: MsgBondAminoMsg): MsgBond;
    fromProtoMsg(message: MsgBondProtoMsg): MsgBond;
    toProto(message: MsgBond): Uint8Array;
    toProtoMsg(message: MsgBond): MsgBondProtoMsg;
};
export declare const MsgBondResponse: {
    typeUrl: string;
    encode(_: MsgBondResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBondResponse;
    fromPartial(_: Partial<MsgBondResponse>): MsgBondResponse;
    fromAmino(_: MsgBondResponseAmino): MsgBondResponse;
    toAmino(_: MsgBondResponse): MsgBondResponseAmino;
    fromAminoMsg(object: MsgBondResponseAminoMsg): MsgBondResponse;
    fromProtoMsg(message: MsgBondResponseProtoMsg): MsgBondResponse;
    toProto(message: MsgBondResponse): Uint8Array;
    toProtoMsg(message: MsgBondResponse): MsgBondResponseProtoMsg;
};
export declare const MsgBeginUnbonding: {
    typeUrl: string;
    encode(message: MsgBeginUnbonding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBeginUnbonding;
    fromPartial(object: Partial<MsgBeginUnbonding>): MsgBeginUnbonding;
    fromAmino(object: MsgBeginUnbondingAmino): MsgBeginUnbonding;
    toAmino(message: MsgBeginUnbonding): MsgBeginUnbondingAmino;
    fromAminoMsg(object: MsgBeginUnbondingAminoMsg): MsgBeginUnbonding;
    fromProtoMsg(message: MsgBeginUnbondingProtoMsg): MsgBeginUnbonding;
    toProto(message: MsgBeginUnbonding): Uint8Array;
    toProtoMsg(message: MsgBeginUnbonding): MsgBeginUnbondingProtoMsg;
};
export declare const MsgBeginUnbondingResponse: {
    typeUrl: string;
    encode(_: MsgBeginUnbondingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBeginUnbondingResponse;
    fromPartial(_: Partial<MsgBeginUnbondingResponse>): MsgBeginUnbondingResponse;
    fromAmino(_: MsgBeginUnbondingResponseAmino): MsgBeginUnbondingResponse;
    toAmino(_: MsgBeginUnbondingResponse): MsgBeginUnbondingResponseAmino;
    fromAminoMsg(object: MsgBeginUnbondingResponseAminoMsg): MsgBeginUnbondingResponse;
    fromProtoMsg(message: MsgBeginUnbondingResponseProtoMsg): MsgBeginUnbondingResponse;
    toProto(message: MsgBeginUnbondingResponse): Uint8Array;
    toProtoMsg(message: MsgBeginUnbondingResponse): MsgBeginUnbondingResponseProtoMsg;
};
export declare const MsgEmergencyUnbond: {
    typeUrl: string;
    encode(message: MsgEmergencyUnbond, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEmergencyUnbond;
    fromPartial(object: Partial<MsgEmergencyUnbond>): MsgEmergencyUnbond;
    fromAmino(object: MsgEmergencyUnbondAmino): MsgEmergencyUnbond;
    toAmino(message: MsgEmergencyUnbond): MsgEmergencyUnbondAmino;
    fromAminoMsg(object: MsgEmergencyUnbondAminoMsg): MsgEmergencyUnbond;
    fromProtoMsg(message: MsgEmergencyUnbondProtoMsg): MsgEmergencyUnbond;
    toProto(message: MsgEmergencyUnbond): Uint8Array;
    toProtoMsg(message: MsgEmergencyUnbond): MsgEmergencyUnbondProtoMsg;
};
export declare const MsgEmergencyUnbondResponse: {
    typeUrl: string;
    encode(_: MsgEmergencyUnbondResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEmergencyUnbondResponse;
    fromPartial(_: Partial<MsgEmergencyUnbondResponse>): MsgEmergencyUnbondResponse;
    fromAmino(_: MsgEmergencyUnbondResponseAmino): MsgEmergencyUnbondResponse;
    toAmino(_: MsgEmergencyUnbondResponse): MsgEmergencyUnbondResponseAmino;
    fromAminoMsg(object: MsgEmergencyUnbondResponseAminoMsg): MsgEmergencyUnbondResponse;
    fromProtoMsg(message: MsgEmergencyUnbondResponseProtoMsg): MsgEmergencyUnbondResponse;
    toProto(message: MsgEmergencyUnbondResponse): Uint8Array;
    toProtoMsg(message: MsgEmergencyUnbondResponse): MsgEmergencyUnbondResponseProtoMsg;
};
export declare const MsgSponsor: {
    typeUrl: string;
    encode(message: MsgSponsor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSponsor;
    fromPartial(object: Partial<MsgSponsor>): MsgSponsor;
    fromAmino(object: MsgSponsorAmino): MsgSponsor;
    toAmino(message: MsgSponsor): MsgSponsorAmino;
    fromAminoMsg(object: MsgSponsorAminoMsg): MsgSponsor;
    fromProtoMsg(message: MsgSponsorProtoMsg): MsgSponsor;
    toProto(message: MsgSponsor): Uint8Array;
    toProtoMsg(message: MsgSponsor): MsgSponsorProtoMsg;
};
export declare const MsgSponsorResponse: {
    typeUrl: string;
    encode(_: MsgSponsorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSponsorResponse;
    fromPartial(_: Partial<MsgSponsorResponse>): MsgSponsorResponse;
    fromAmino(_: MsgSponsorResponseAmino): MsgSponsorResponse;
    toAmino(_: MsgSponsorResponse): MsgSponsorResponseAmino;
    fromAminoMsg(object: MsgSponsorResponseAminoMsg): MsgSponsorResponse;
    fromProtoMsg(message: MsgSponsorResponseProtoMsg): MsgSponsorResponse;
    toProto(message: MsgSponsorResponse): Uint8Array;
    toProtoMsg(message: MsgSponsorResponse): MsgSponsorResponseProtoMsg;
};
export declare const MsgGovSetParams: {
    typeUrl: string;
    encode(message: MsgGovSetParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovSetParams;
    fromPartial(object: Partial<MsgGovSetParams>): MsgGovSetParams;
    fromAmino(object: MsgGovSetParamsAmino): MsgGovSetParams;
    toAmino(message: MsgGovSetParams): MsgGovSetParamsAmino;
    fromAminoMsg(object: MsgGovSetParamsAminoMsg): MsgGovSetParams;
    fromProtoMsg(message: MsgGovSetParamsProtoMsg): MsgGovSetParams;
    toProto(message: MsgGovSetParams): Uint8Array;
    toProtoMsg(message: MsgGovSetParams): MsgGovSetParamsProtoMsg;
};
export declare const MsgGovSetParamsResponse: {
    typeUrl: string;
    encode(_: MsgGovSetParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovSetParamsResponse;
    fromPartial(_: Partial<MsgGovSetParamsResponse>): MsgGovSetParamsResponse;
    fromAmino(_: MsgGovSetParamsResponseAmino): MsgGovSetParamsResponse;
    toAmino(_: MsgGovSetParamsResponse): MsgGovSetParamsResponseAmino;
    fromAminoMsg(object: MsgGovSetParamsResponseAminoMsg): MsgGovSetParamsResponse;
    fromProtoMsg(message: MsgGovSetParamsResponseProtoMsg): MsgGovSetParamsResponse;
    toProto(message: MsgGovSetParamsResponse): Uint8Array;
    toProtoMsg(message: MsgGovSetParamsResponse): MsgGovSetParamsResponseProtoMsg;
};
export declare const MsgGovCreatePrograms: {
    typeUrl: string;
    encode(message: MsgGovCreatePrograms, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgGovCreatePrograms;
    fromPartial(object: Partial<MsgGovCreatePrograms>): MsgGovCreatePrograms;
    fromAmino(object: MsgGovCreateProgramsAmino): MsgGovCreatePrograms;
    toAmino(message: MsgGovCreatePrograms): MsgGovCreateProgramsAmino;
    fromAminoMsg(object: MsgGovCreateProgramsAminoMsg): MsgGovCreatePrograms;
    fromProtoMsg(message: MsgGovCreateProgramsProtoMsg): MsgGovCreatePrograms;
    toProto(message: MsgGovCreatePrograms): Uint8Array;
    toProtoMsg(message: MsgGovCreatePrograms): MsgGovCreateProgramsProtoMsg;
};
export declare const MsgGovCreateProgramsResponse: {
    typeUrl: string;
    encode(_: MsgGovCreateProgramsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgGovCreateProgramsResponse;
    fromPartial(_: Partial<MsgGovCreateProgramsResponse>): MsgGovCreateProgramsResponse;
    fromAmino(_: MsgGovCreateProgramsResponseAmino): MsgGovCreateProgramsResponse;
    toAmino(_: MsgGovCreateProgramsResponse): MsgGovCreateProgramsResponseAmino;
    fromAminoMsg(object: MsgGovCreateProgramsResponseAminoMsg): MsgGovCreateProgramsResponse;
    fromProtoMsg(message: MsgGovCreateProgramsResponseProtoMsg): MsgGovCreateProgramsResponse;
    toProto(message: MsgGovCreateProgramsResponse): Uint8Array;
    toProtoMsg(message: MsgGovCreateProgramsResponse): MsgGovCreateProgramsResponseProtoMsg;
};
