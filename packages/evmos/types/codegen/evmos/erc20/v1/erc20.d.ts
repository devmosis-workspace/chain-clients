import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
/** Owner enumerates the ownership of a ERC20 contract. */
export declare enum Owner {
    /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
    OWNER_UNSPECIFIED = 0,
    /** OWNER_MODULE - OWNER_MODULE - erc20 is owned by the erc20 module account. */
    OWNER_MODULE = 1,
    /** OWNER_EXTERNAL - OWNER_EXTERNAL - erc20 is owned by an external account. */
    OWNER_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare const OwnerSDKType: typeof Owner;
export declare function ownerFromJSON(object: any): Owner;
export declare function ownerToJSON(object: Owner): string;
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPair {
    /** erc20_address is the hex address of ERC20 contract token */
    erc20Address: string;
    /** denom defines the cosmos base denomination to be mapped to */
    denom: string;
    /** enabled defines the token mapping enable status */
    enabled: boolean;
    /** contract_owner is the an ENUM specifying the type of ERC20 owner (0 invalid, 1 ModuleAccount, 2 external address) */
    contractOwner: Owner;
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPairSDKType {
    erc20_address: string;
    denom: string;
    enabled: boolean;
    contract_owner: Owner;
}
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** metadata slice of the native Cosmos coins */
    metadata: Metadata[];
}
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposalSDKType {
    title: string;
    description: string;
    metadata: MetadataSDKType[];
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20Proposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** erc20addresses is a slice of  ERC20 token contract addresses */
    erc20addresses: string[];
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20ProposalSDKType {
    title: string;
    description: string;
    erc20addresses: string[];
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /**
     * token identifier can be either the hex contract address of the ERC20 or the
     * Cosmos base denomination
     */
    token: string;
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposalSDKType {
    title: string;
    description: string;
    token: string;
}
/**
 * ProposalMetadata is used to parse a slice of denom metadata and generate
 * the RegisterCoinProposal content.
 */
export interface ProposalMetadata {
    /** metadata slice of the native Cosmos coins */
    metadata: Metadata[];
}
/**
 * ProposalMetadata is used to parse a slice of denom metadata and generate
 * the RegisterCoinProposal content.
 */
export interface ProposalMetadataSDKType {
    metadata: MetadataSDKType[];
}
export declare const TokenPair: {
    encode(message: TokenPair, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TokenPair;
    fromPartial(object: Partial<TokenPair>): TokenPair;
};
export declare const RegisterCoinProposal: {
    encode(message: RegisterCoinProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterCoinProposal;
    fromPartial(object: Partial<RegisterCoinProposal>): RegisterCoinProposal;
};
export declare const RegisterERC20Proposal: {
    encode(message: RegisterERC20Proposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterERC20Proposal;
    fromPartial(object: Partial<RegisterERC20Proposal>): RegisterERC20Proposal;
};
export declare const ToggleTokenConversionProposal: {
    encode(message: ToggleTokenConversionProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ToggleTokenConversionProposal;
    fromPartial(object: Partial<ToggleTokenConversionProposal>): ToggleTokenConversionProposal;
};
export declare const ProposalMetadata: {
    encode(message: ProposalMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProposalMetadata;
    fromPartial(object: Partial<ProposalMetadata>): ProposalMetadata;
};
