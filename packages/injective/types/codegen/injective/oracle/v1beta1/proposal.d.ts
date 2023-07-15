import { BandOracleRequest, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsSDKType } from "./oracle";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GrantBandOraclePrivilegeProposal {
    title: string;
    description: string;
    relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalSDKType {
    title: string;
    description: string;
    relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposal {
    title: string;
    description: string;
    relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalSDKType {
    title: string;
    description: string;
    relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposal {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalSDKType {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface GrantProviderPrivilegeProposal {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface GrantProviderPrivilegeProposalSDKType {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokeProviderPrivilegeProposal {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokeProviderPrivilegeProposalSDKType {
    title: string;
    description: string;
    provider: string;
    relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposal {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalSDKType {
    title: string;
    description: string;
    base: string;
    quote: string;
    relayers: string[];
}
export interface AuthorizeBandOracleRequestProposal {
    title: string;
    description: string;
    request?: BandOracleRequest;
}
export interface AuthorizeBandOracleRequestProposalSDKType {
    title: string;
    description: string;
    request?: BandOracleRequestSDKType;
}
export interface UpdateBandOracleRequestProposal {
    title: string;
    description: string;
    deleteRequestIds: Long[];
    updateOracleRequest?: BandOracleRequest;
}
export interface UpdateBandOracleRequestProposalSDKType {
    title: string;
    description: string;
    delete_request_ids: Long[];
    update_oracle_request?: BandOracleRequestSDKType;
}
export interface EnableBandIBCProposal {
    title: string;
    description: string;
    bandIbcParams?: BandIBCParams;
}
export interface EnableBandIBCProposalSDKType {
    title: string;
    description: string;
    band_ibc_params?: BandIBCParamsSDKType;
}
export declare const GrantBandOraclePrivilegeProposal: {
    encode(message: GrantBandOraclePrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GrantBandOraclePrivilegeProposal;
    fromPartial(object: Partial<GrantBandOraclePrivilegeProposal>): GrantBandOraclePrivilegeProposal;
};
export declare const RevokeBandOraclePrivilegeProposal: {
    encode(message: RevokeBandOraclePrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RevokeBandOraclePrivilegeProposal;
    fromPartial(object: Partial<RevokeBandOraclePrivilegeProposal>): RevokeBandOraclePrivilegeProposal;
};
export declare const GrantPriceFeederPrivilegeProposal: {
    encode(message: GrantPriceFeederPrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GrantPriceFeederPrivilegeProposal;
    fromPartial(object: Partial<GrantPriceFeederPrivilegeProposal>): GrantPriceFeederPrivilegeProposal;
};
export declare const GrantProviderPrivilegeProposal: {
    encode(message: GrantProviderPrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GrantProviderPrivilegeProposal;
    fromPartial(object: Partial<GrantProviderPrivilegeProposal>): GrantProviderPrivilegeProposal;
};
export declare const RevokeProviderPrivilegeProposal: {
    encode(message: RevokeProviderPrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RevokeProviderPrivilegeProposal;
    fromPartial(object: Partial<RevokeProviderPrivilegeProposal>): RevokeProviderPrivilegeProposal;
};
export declare const RevokePriceFeederPrivilegeProposal: {
    encode(message: RevokePriceFeederPrivilegeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RevokePriceFeederPrivilegeProposal;
    fromPartial(object: Partial<RevokePriceFeederPrivilegeProposal>): RevokePriceFeederPrivilegeProposal;
};
export declare const AuthorizeBandOracleRequestProposal: {
    encode(message: AuthorizeBandOracleRequestProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AuthorizeBandOracleRequestProposal;
    fromPartial(object: Partial<AuthorizeBandOracleRequestProposal>): AuthorizeBandOracleRequestProposal;
};
export declare const UpdateBandOracleRequestProposal: {
    encode(message: UpdateBandOracleRequestProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateBandOracleRequestProposal;
    fromPartial(object: Partial<UpdateBandOracleRequestProposal>): UpdateBandOracleRequestProposal;
};
export declare const EnableBandIBCProposal: {
    encode(message: EnableBandIBCProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EnableBandIBCProposal;
    fromPartial(object: Partial<EnableBandIBCProposal>): EnableBandIBCProposal;
};
