import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType, IncentiveProgram, IncentiveProgramSDKType } from "./incentive";
import * as _m0 from "protobufjs/minimal";
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaim {
    account: string;
}
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaimSDKType {
    account: string;
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponse {
    amount: Coin[];
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponseSDKType {
    amount: CoinSDKType[];
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBond {
    account: string;
    uToken?: Coin;
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBondSDKType {
    account: string;
    uToken?: CoinSDKType;
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponse {
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponseSDKType {
}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbonding {
    account: string;
    uToken?: Coin;
}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbondingSDKType {
    account: string;
    uToken?: CoinSDKType;
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponse {
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponseSDKType {
}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbond {
    account: string;
    uToken?: Coin;
}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbondSDKType {
    account: string;
    uToken?: CoinSDKType;
}
/** MsgEmergencyUnbondResponse defines the Msg/EmergencyUnbond response type. */
export interface MsgEmergencyUnbondResponse {
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
/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponseSDKType {
}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParams {
    /** authority must be the address of the governance account. */
    authority: string;
    params?: Params;
}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
/** MsgGovSetParamsResponse defines the Msg/SetParams response type. */
export interface MsgGovSetParamsResponse {
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
/** MsgGovCreateProgramsResponse defines the Msg/CreatePrograms response type. */
export interface MsgGovCreateProgramsResponseSDKType {
}
export declare const MsgClaim: {
    encode(message: MsgClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaim;
    fromPartial(object: Partial<MsgClaim>): MsgClaim;
};
export declare const MsgClaimResponse: {
    encode(message: MsgClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimResponse;
    fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse;
};
export declare const MsgBond: {
    encode(message: MsgBond, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBond;
    fromPartial(object: Partial<MsgBond>): MsgBond;
};
export declare const MsgBondResponse: {
    encode(_: MsgBondResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBondResponse;
    fromPartial(_: Partial<MsgBondResponse>): MsgBondResponse;
};
export declare const MsgBeginUnbonding: {
    encode(message: MsgBeginUnbonding, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBeginUnbonding;
    fromPartial(object: Partial<MsgBeginUnbonding>): MsgBeginUnbonding;
};
export declare const MsgBeginUnbondingResponse: {
    encode(_: MsgBeginUnbondingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBeginUnbondingResponse;
    fromPartial(_: Partial<MsgBeginUnbondingResponse>): MsgBeginUnbondingResponse;
};
export declare const MsgEmergencyUnbond: {
    encode(message: MsgEmergencyUnbond, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgEmergencyUnbond;
    fromPartial(object: Partial<MsgEmergencyUnbond>): MsgEmergencyUnbond;
};
export declare const MsgEmergencyUnbondResponse: {
    encode(_: MsgEmergencyUnbondResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgEmergencyUnbondResponse;
    fromPartial(_: Partial<MsgEmergencyUnbondResponse>): MsgEmergencyUnbondResponse;
};
export declare const MsgSponsor: {
    encode(message: MsgSponsor, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSponsor;
    fromPartial(object: Partial<MsgSponsor>): MsgSponsor;
};
export declare const MsgSponsorResponse: {
    encode(_: MsgSponsorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSponsorResponse;
    fromPartial(_: Partial<MsgSponsorResponse>): MsgSponsorResponse;
};
export declare const MsgGovSetParams: {
    encode(message: MsgGovSetParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgGovSetParams;
    fromPartial(object: Partial<MsgGovSetParams>): MsgGovSetParams;
};
export declare const MsgGovSetParamsResponse: {
    encode(_: MsgGovSetParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgGovSetParamsResponse;
    fromPartial(_: Partial<MsgGovSetParamsResponse>): MsgGovSetParamsResponse;
};
export declare const MsgGovCreatePrograms: {
    encode(message: MsgGovCreatePrograms, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgGovCreatePrograms;
    fromPartial(object: Partial<MsgGovCreatePrograms>): MsgGovCreatePrograms;
};
export declare const MsgGovCreateProgramsResponse: {
    encode(_: MsgGovCreateProgramsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgGovCreateProgramsResponse;
    fromPartial(_: Partial<MsgGovCreateProgramsResponse>): MsgGovCreateProgramsResponse;
};
