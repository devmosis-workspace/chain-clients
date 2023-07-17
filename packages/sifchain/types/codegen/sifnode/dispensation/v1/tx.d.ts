import { DistributionType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateDistribution {
    distributor: string;
    authorizedRunner: string;
    distributionType: DistributionType;
    output: string[];
}
export interface MsgCreateDistributionSDKType {
    distributor: string;
    authorized_runner: string;
    distribution_type: DistributionType;
    output: string[];
}
export interface MsgCreateDistributionResponse {
}
export interface MsgCreateDistributionResponseSDKType {
}
export interface MsgCreateClaimResponse {
}
export interface MsgCreateClaimResponseSDKType {
}
export interface MsgRunDistributionResponse {
}
export interface MsgRunDistributionResponseSDKType {
}
export interface MsgCreateUserClaim {
    userClaimAddress: string;
    userClaimType: DistributionType;
}
export interface MsgCreateUserClaimSDKType {
    user_claim_address: string;
    user_claim_type: DistributionType;
}
export interface MsgRunDistribution {
    authorizedRunner: string;
    distributionName: string;
    distributionType: DistributionType;
    distributionCount: Long;
}
export interface MsgRunDistributionSDKType {
    authorized_runner: string;
    distribution_name: string;
    distribution_type: DistributionType;
    distribution_count: Long;
}
export declare const MsgCreateDistribution: {
    encode(message: MsgCreateDistribution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDistribution;
    fromPartial(object: Partial<MsgCreateDistribution>): MsgCreateDistribution;
};
export declare const MsgCreateDistributionResponse: {
    encode(_: MsgCreateDistributionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateDistributionResponse;
    fromPartial(_: Partial<MsgCreateDistributionResponse>): MsgCreateDistributionResponse;
};
export declare const MsgCreateClaimResponse: {
    encode(_: MsgCreateClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateClaimResponse;
    fromPartial(_: Partial<MsgCreateClaimResponse>): MsgCreateClaimResponse;
};
export declare const MsgRunDistributionResponse: {
    encode(_: MsgRunDistributionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRunDistributionResponse;
    fromPartial(_: Partial<MsgRunDistributionResponse>): MsgRunDistributionResponse;
};
export declare const MsgCreateUserClaim: {
    encode(message: MsgCreateUserClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateUserClaim;
    fromPartial(object: Partial<MsgCreateUserClaim>): MsgCreateUserClaim;
};
export declare const MsgRunDistribution: {
    encode(message: MsgRunDistribution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRunDistribution;
    fromPartial(object: Partial<MsgRunDistribution>): MsgRunDistribution;
};
