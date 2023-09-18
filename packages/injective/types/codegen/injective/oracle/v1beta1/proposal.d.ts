import { BandOracleRequest, BandOracleRequestAmino, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsAmino, BandIBCParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
export interface GrantBandOraclePrivilegeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
    value: Uint8Array;
}
export interface GrantBandOraclePrivilegeProposalAmino {
    title: string;
    description: string;
    relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalAminoMsg {
    type: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
    value: GrantBandOraclePrivilegeProposalAmino;
}
export interface GrantBandOraclePrivilegeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
    value: Uint8Array;
}
export interface RevokeBandOraclePrivilegeProposalAmino {
    title: string;
    description: string;
    relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalAminoMsg {
    type: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
    value: RevokeBandOraclePrivilegeProposalAmino;
}
export interface RevokeBandOraclePrivilegeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
    value: Uint8Array;
}
export interface GrantPriceFeederPrivilegeProposalAmino {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalAminoMsg {
    type: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
    value: GrantPriceFeederPrivilegeProposalAmino;
}
export interface GrantPriceFeederPrivilegeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface GrantProviderPrivilegeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface GrantProviderPrivilegeProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
    value: Uint8Array;
}
export interface GrantProviderPrivilegeProposalAmino {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface GrantProviderPrivilegeProposalAminoMsg {
    type: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
    value: GrantProviderPrivilegeProposalAmino;
}
export interface GrantProviderPrivilegeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokeProviderPrivilegeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokeProviderPrivilegeProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
    value: Uint8Array;
}
export interface RevokeProviderPrivilegeProposalAmino {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokeProviderPrivilegeProposalAminoMsg {
    type: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
    value: RevokeProviderPrivilegeProposalAmino;
}
export interface RevokeProviderPrivilegeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
    value: Uint8Array;
}
export interface RevokePriceFeederPrivilegeProposalAmino {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalAminoMsg {
    type: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
    value: RevokePriceFeederPrivilegeProposalAmino;
}
export interface RevokePriceFeederPrivilegeProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface AuthorizeBandOracleRequestProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    request: BandOracleRequest;
}
export interface AuthorizeBandOracleRequestProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
    value: Uint8Array;
}
export interface AuthorizeBandOracleRequestProposalAmino {
    title: string;
    description: string;
    request?: BandOracleRequestAmino;
}
export interface AuthorizeBandOracleRequestProposalAminoMsg {
    type: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
    value: AuthorizeBandOracleRequestProposalAmino;
}
export interface AuthorizeBandOracleRequestProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    request: BandOracleRequestSDKType;
}
export interface UpdateBandOracleRequestProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    deleteRequestIds: bigint[];
    updateOracleRequest: BandOracleRequest;
}
export interface UpdateBandOracleRequestProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
    value: Uint8Array;
}
export interface UpdateBandOracleRequestProposalAmino {
    title: string;
    description: string;
    delete_request_ids: string[];
    update_oracle_request?: BandOracleRequestAmino;
}
export interface UpdateBandOracleRequestProposalAminoMsg {
    type: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
    value: UpdateBandOracleRequestProposalAmino;
}
export interface UpdateBandOracleRequestProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    delete_request_ids: bigint[];
    update_oracle_request: BandOracleRequestSDKType;
}
export interface EnableBandIBCProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    bandIbcParams: BandIBCParams;
}
export interface EnableBandIBCProposalProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal";
    value: Uint8Array;
}
export interface EnableBandIBCProposalAmino {
    title: string;
    description: string;
    band_ibc_params?: BandIBCParamsAmino;
}
export interface EnableBandIBCProposalAminoMsg {
    type: "/injective.oracle.v1beta1.EnableBandIBCProposal";
    value: EnableBandIBCProposalAmino;
}
export interface EnableBandIBCProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    band_ibc_params: BandIBCParamsSDKType;
}
export declare const GrantBandOraclePrivilegeProposal: {
    typeUrl: string;
    encode(message: GrantBandOraclePrivilegeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GrantBandOraclePrivilegeProposal;
    fromPartial(object: Partial<GrantBandOraclePrivilegeProposal>): GrantBandOraclePrivilegeProposal;
    fromAmino(object: GrantBandOraclePrivilegeProposalAmino): GrantBandOraclePrivilegeProposal;
    toAmino(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalAmino;
    fromAminoMsg(object: GrantBandOraclePrivilegeProposalAminoMsg): GrantBandOraclePrivilegeProposal;
    fromProtoMsg(message: GrantBandOraclePrivilegeProposalProtoMsg): GrantBandOraclePrivilegeProposal;
    toProto(message: GrantBandOraclePrivilegeProposal): Uint8Array;
    toProtoMsg(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalProtoMsg;
};
export declare const RevokeBandOraclePrivilegeProposal: {
    typeUrl: string;
    encode(message: RevokeBandOraclePrivilegeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RevokeBandOraclePrivilegeProposal;
    fromPartial(object: Partial<RevokeBandOraclePrivilegeProposal>): RevokeBandOraclePrivilegeProposal;
    fromAmino(object: RevokeBandOraclePrivilegeProposalAmino): RevokeBandOraclePrivilegeProposal;
    toAmino(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalAmino;
    fromAminoMsg(object: RevokeBandOraclePrivilegeProposalAminoMsg): RevokeBandOraclePrivilegeProposal;
    fromProtoMsg(message: RevokeBandOraclePrivilegeProposalProtoMsg): RevokeBandOraclePrivilegeProposal;
    toProto(message: RevokeBandOraclePrivilegeProposal): Uint8Array;
    toProtoMsg(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalProtoMsg;
};
export declare const GrantPriceFeederPrivilegeProposal: {
    typeUrl: string;
    encode(message: GrantPriceFeederPrivilegeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GrantPriceFeederPrivilegeProposal;
    fromPartial(object: Partial<GrantPriceFeederPrivilegeProposal>): GrantPriceFeederPrivilegeProposal;
    fromAmino(object: GrantPriceFeederPrivilegeProposalAmino): GrantPriceFeederPrivilegeProposal;
    toAmino(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalAmino;
    fromAminoMsg(object: GrantPriceFeederPrivilegeProposalAminoMsg): GrantPriceFeederPrivilegeProposal;
    fromProtoMsg(message: GrantPriceFeederPrivilegeProposalProtoMsg): GrantPriceFeederPrivilegeProposal;
    toProto(message: GrantPriceFeederPrivilegeProposal): Uint8Array;
    toProtoMsg(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalProtoMsg;
};
export declare const GrantProviderPrivilegeProposal: {
    typeUrl: string;
    encode(message: GrantProviderPrivilegeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GrantProviderPrivilegeProposal;
    fromPartial(object: Partial<GrantProviderPrivilegeProposal>): GrantProviderPrivilegeProposal;
    fromAmino(object: GrantProviderPrivilegeProposalAmino): GrantProviderPrivilegeProposal;
    toAmino(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalAmino;
    fromAminoMsg(object: GrantProviderPrivilegeProposalAminoMsg): GrantProviderPrivilegeProposal;
    fromProtoMsg(message: GrantProviderPrivilegeProposalProtoMsg): GrantProviderPrivilegeProposal;
    toProto(message: GrantProviderPrivilegeProposal): Uint8Array;
    toProtoMsg(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalProtoMsg;
};
export declare const RevokeProviderPrivilegeProposal: {
    typeUrl: string;
    encode(message: RevokeProviderPrivilegeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RevokeProviderPrivilegeProposal;
    fromPartial(object: Partial<RevokeProviderPrivilegeProposal>): RevokeProviderPrivilegeProposal;
    fromAmino(object: RevokeProviderPrivilegeProposalAmino): RevokeProviderPrivilegeProposal;
    toAmino(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalAmino;
    fromAminoMsg(object: RevokeProviderPrivilegeProposalAminoMsg): RevokeProviderPrivilegeProposal;
    fromProtoMsg(message: RevokeProviderPrivilegeProposalProtoMsg): RevokeProviderPrivilegeProposal;
    toProto(message: RevokeProviderPrivilegeProposal): Uint8Array;
    toProtoMsg(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalProtoMsg;
};
export declare const RevokePriceFeederPrivilegeProposal: {
    typeUrl: string;
    encode(message: RevokePriceFeederPrivilegeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RevokePriceFeederPrivilegeProposal;
    fromPartial(object: Partial<RevokePriceFeederPrivilegeProposal>): RevokePriceFeederPrivilegeProposal;
    fromAmino(object: RevokePriceFeederPrivilegeProposalAmino): RevokePriceFeederPrivilegeProposal;
    toAmino(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalAmino;
    fromAminoMsg(object: RevokePriceFeederPrivilegeProposalAminoMsg): RevokePriceFeederPrivilegeProposal;
    fromProtoMsg(message: RevokePriceFeederPrivilegeProposalProtoMsg): RevokePriceFeederPrivilegeProposal;
    toProto(message: RevokePriceFeederPrivilegeProposal): Uint8Array;
    toProtoMsg(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalProtoMsg;
};
export declare const AuthorizeBandOracleRequestProposal: {
    typeUrl: string;
    encode(message: AuthorizeBandOracleRequestProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AuthorizeBandOracleRequestProposal;
    fromPartial(object: Partial<AuthorizeBandOracleRequestProposal>): AuthorizeBandOracleRequestProposal;
    fromAmino(object: AuthorizeBandOracleRequestProposalAmino): AuthorizeBandOracleRequestProposal;
    toAmino(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalAmino;
    fromAminoMsg(object: AuthorizeBandOracleRequestProposalAminoMsg): AuthorizeBandOracleRequestProposal;
    fromProtoMsg(message: AuthorizeBandOracleRequestProposalProtoMsg): AuthorizeBandOracleRequestProposal;
    toProto(message: AuthorizeBandOracleRequestProposal): Uint8Array;
    toProtoMsg(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalProtoMsg;
};
export declare const UpdateBandOracleRequestProposal: {
    typeUrl: string;
    encode(message: UpdateBandOracleRequestProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpdateBandOracleRequestProposal;
    fromPartial(object: Partial<UpdateBandOracleRequestProposal>): UpdateBandOracleRequestProposal;
    fromAmino(object: UpdateBandOracleRequestProposalAmino): UpdateBandOracleRequestProposal;
    toAmino(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalAmino;
    fromAminoMsg(object: UpdateBandOracleRequestProposalAminoMsg): UpdateBandOracleRequestProposal;
    fromProtoMsg(message: UpdateBandOracleRequestProposalProtoMsg): UpdateBandOracleRequestProposal;
    toProto(message: UpdateBandOracleRequestProposal): Uint8Array;
    toProtoMsg(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalProtoMsg;
};
export declare const EnableBandIBCProposal: {
    typeUrl: string;
    encode(message: EnableBandIBCProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EnableBandIBCProposal;
    fromPartial(object: Partial<EnableBandIBCProposal>): EnableBandIBCProposal;
    fromAmino(object: EnableBandIBCProposalAmino): EnableBandIBCProposal;
    toAmino(message: EnableBandIBCProposal): EnableBandIBCProposalAmino;
    fromAminoMsg(object: EnableBandIBCProposalAminoMsg): EnableBandIBCProposal;
    fromProtoMsg(message: EnableBandIBCProposalProtoMsg): EnableBandIBCProposal;
    toProto(message: EnableBandIBCProposal): Uint8Array;
    toProtoMsg(message: EnableBandIBCProposal): EnableBandIBCProposalProtoMsg;
};
