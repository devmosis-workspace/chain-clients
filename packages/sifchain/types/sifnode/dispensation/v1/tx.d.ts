import { DistributionType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface MsgCreateDistribution {
    distributor: string;
    authorizedRunner: string;
    distributionType: DistributionType;
    output: string[];
}
export interface MsgCreateDistributionProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.MsgCreateDistribution";
    value: Uint8Array;
}
export interface MsgCreateDistributionAmino {
    distributor?: string;
    authorized_runner?: string;
    distribution_type?: DistributionType;
    output?: string[];
}
export interface MsgCreateDistributionAminoMsg {
    type: "/sifnode.dispensation.v1.MsgCreateDistribution";
    value: MsgCreateDistributionAmino;
}
export interface MsgCreateDistributionSDKType {
    distributor: string;
    authorized_runner: string;
    distribution_type: DistributionType;
    output: string[];
}
export interface MsgCreateDistributionResponse {
}
export interface MsgCreateDistributionResponseProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.MsgCreateDistributionResponse";
    value: Uint8Array;
}
export interface MsgCreateDistributionResponseAmino {
}
export interface MsgCreateDistributionResponseAminoMsg {
    type: "/sifnode.dispensation.v1.MsgCreateDistributionResponse";
    value: MsgCreateDistributionResponseAmino;
}
export interface MsgCreateDistributionResponseSDKType {
}
export interface MsgCreateClaimResponse {
}
export interface MsgCreateClaimResponseProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.MsgCreateClaimResponse";
    value: Uint8Array;
}
export interface MsgCreateClaimResponseAmino {
}
export interface MsgCreateClaimResponseAminoMsg {
    type: "/sifnode.dispensation.v1.MsgCreateClaimResponse";
    value: MsgCreateClaimResponseAmino;
}
export interface MsgCreateClaimResponseSDKType {
}
export interface MsgRunDistributionResponse {
}
export interface MsgRunDistributionResponseProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.MsgRunDistributionResponse";
    value: Uint8Array;
}
export interface MsgRunDistributionResponseAmino {
}
export interface MsgRunDistributionResponseAminoMsg {
    type: "/sifnode.dispensation.v1.MsgRunDistributionResponse";
    value: MsgRunDistributionResponseAmino;
}
export interface MsgRunDistributionResponseSDKType {
}
export interface MsgCreateUserClaim {
    userClaimAddress: string;
    userClaimType: DistributionType;
}
export interface MsgCreateUserClaimProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.MsgCreateUserClaim";
    value: Uint8Array;
}
export interface MsgCreateUserClaimAmino {
    user_claim_address?: string;
    user_claim_type?: DistributionType;
}
export interface MsgCreateUserClaimAminoMsg {
    type: "/sifnode.dispensation.v1.MsgCreateUserClaim";
    value: MsgCreateUserClaimAmino;
}
export interface MsgCreateUserClaimSDKType {
    user_claim_address: string;
    user_claim_type: DistributionType;
}
export interface MsgRunDistribution {
    authorizedRunner: string;
    distributionName: string;
    distributionType: DistributionType;
    distributionCount: bigint;
}
export interface MsgRunDistributionProtoMsg {
    typeUrl: "/sifnode.dispensation.v1.MsgRunDistribution";
    value: Uint8Array;
}
export interface MsgRunDistributionAmino {
    authorized_runner?: string;
    distribution_name?: string;
    distribution_type?: DistributionType;
    distribution_count?: string;
}
export interface MsgRunDistributionAminoMsg {
    type: "/sifnode.dispensation.v1.MsgRunDistribution";
    value: MsgRunDistributionAmino;
}
export interface MsgRunDistributionSDKType {
    authorized_runner: string;
    distribution_name: string;
    distribution_type: DistributionType;
    distribution_count: bigint;
}
export declare const MsgCreateDistribution: {
    typeUrl: string;
    encode(message: MsgCreateDistribution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDistribution;
    fromPartial(object: Partial<MsgCreateDistribution>): MsgCreateDistribution;
    fromAmino(object: MsgCreateDistributionAmino): MsgCreateDistribution;
    toAmino(message: MsgCreateDistribution): MsgCreateDistributionAmino;
    fromAminoMsg(object: MsgCreateDistributionAminoMsg): MsgCreateDistribution;
    fromProtoMsg(message: MsgCreateDistributionProtoMsg): MsgCreateDistribution;
    toProto(message: MsgCreateDistribution): Uint8Array;
    toProtoMsg(message: MsgCreateDistribution): MsgCreateDistributionProtoMsg;
};
export declare const MsgCreateDistributionResponse: {
    typeUrl: string;
    encode(_: MsgCreateDistributionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateDistributionResponse;
    fromPartial(_: Partial<MsgCreateDistributionResponse>): MsgCreateDistributionResponse;
    fromAmino(_: MsgCreateDistributionResponseAmino): MsgCreateDistributionResponse;
    toAmino(_: MsgCreateDistributionResponse): MsgCreateDistributionResponseAmino;
    fromAminoMsg(object: MsgCreateDistributionResponseAminoMsg): MsgCreateDistributionResponse;
    fromProtoMsg(message: MsgCreateDistributionResponseProtoMsg): MsgCreateDistributionResponse;
    toProto(message: MsgCreateDistributionResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDistributionResponse): MsgCreateDistributionResponseProtoMsg;
};
export declare const MsgCreateClaimResponse: {
    typeUrl: string;
    encode(_: MsgCreateClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateClaimResponse;
    fromPartial(_: Partial<MsgCreateClaimResponse>): MsgCreateClaimResponse;
    fromAmino(_: MsgCreateClaimResponseAmino): MsgCreateClaimResponse;
    toAmino(_: MsgCreateClaimResponse): MsgCreateClaimResponseAmino;
    fromAminoMsg(object: MsgCreateClaimResponseAminoMsg): MsgCreateClaimResponse;
    fromProtoMsg(message: MsgCreateClaimResponseProtoMsg): MsgCreateClaimResponse;
    toProto(message: MsgCreateClaimResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClaimResponse): MsgCreateClaimResponseProtoMsg;
};
export declare const MsgRunDistributionResponse: {
    typeUrl: string;
    encode(_: MsgRunDistributionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRunDistributionResponse;
    fromPartial(_: Partial<MsgRunDistributionResponse>): MsgRunDistributionResponse;
    fromAmino(_: MsgRunDistributionResponseAmino): MsgRunDistributionResponse;
    toAmino(_: MsgRunDistributionResponse): MsgRunDistributionResponseAmino;
    fromAminoMsg(object: MsgRunDistributionResponseAminoMsg): MsgRunDistributionResponse;
    fromProtoMsg(message: MsgRunDistributionResponseProtoMsg): MsgRunDistributionResponse;
    toProto(message: MsgRunDistributionResponse): Uint8Array;
    toProtoMsg(message: MsgRunDistributionResponse): MsgRunDistributionResponseProtoMsg;
};
export declare const MsgCreateUserClaim: {
    typeUrl: string;
    encode(message: MsgCreateUserClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateUserClaim;
    fromPartial(object: Partial<MsgCreateUserClaim>): MsgCreateUserClaim;
    fromAmino(object: MsgCreateUserClaimAmino): MsgCreateUserClaim;
    toAmino(message: MsgCreateUserClaim): MsgCreateUserClaimAmino;
    fromAminoMsg(object: MsgCreateUserClaimAminoMsg): MsgCreateUserClaim;
    fromProtoMsg(message: MsgCreateUserClaimProtoMsg): MsgCreateUserClaim;
    toProto(message: MsgCreateUserClaim): Uint8Array;
    toProtoMsg(message: MsgCreateUserClaim): MsgCreateUserClaimProtoMsg;
};
export declare const MsgRunDistribution: {
    typeUrl: string;
    encode(message: MsgRunDistribution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRunDistribution;
    fromPartial(object: Partial<MsgRunDistribution>): MsgRunDistribution;
    fromAmino(object: MsgRunDistributionAmino): MsgRunDistribution;
    toAmino(message: MsgRunDistribution): MsgRunDistributionAmino;
    fromAminoMsg(object: MsgRunDistributionAminoMsg): MsgRunDistribution;
    fromProtoMsg(message: MsgRunDistributionProtoMsg): MsgRunDistribution;
    toProto(message: MsgRunDistribution): Uint8Array;
    toProtoMsg(message: MsgRunDistribution): MsgRunDistributionProtoMsg;
};
