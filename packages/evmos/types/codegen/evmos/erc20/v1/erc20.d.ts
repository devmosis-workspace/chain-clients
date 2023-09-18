import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryWriter } from "../../../binary";
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
export declare const OwnerAmino: typeof Owner;
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
export interface TokenPairProtoMsg {
    typeUrl: "/evmos.erc20.v1.TokenPair";
    value: Uint8Array;
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPairAmino {
    /** erc20_address is the hex address of ERC20 contract token */
    erc20_address: string;
    /** denom defines the cosmos base denomination to be mapped to */
    denom: string;
    /** enabled defines the token mapping enable status */
    enabled: boolean;
    /** contract_owner is the an ENUM specifying the type of ERC20 owner (0 invalid, 1 ModuleAccount, 2 external address) */
    contract_owner: Owner;
}
export interface TokenPairAminoMsg {
    type: "/evmos.erc20.v1.TokenPair";
    value: TokenPairAmino;
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
export interface RegisterCoinProposalProtoMsg {
    typeUrl: "/evmos.erc20.v1.RegisterCoinProposal";
    value: Uint8Array;
}
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposalAmino {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** metadata slice of the native Cosmos coins */
    metadata: MetadataAmino[];
}
export interface RegisterCoinProposalAminoMsg {
    type: "/evmos.erc20.v1.RegisterCoinProposal";
    value: RegisterCoinProposalAmino;
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
export interface RegisterERC20ProposalProtoMsg {
    typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal";
    value: Uint8Array;
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20ProposalAmino {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** erc20addresses is a slice of  ERC20 token contract addresses */
    erc20addresses: string[];
}
export interface RegisterERC20ProposalAminoMsg {
    type: "/evmos.erc20.v1.RegisterERC20Proposal";
    value: RegisterERC20ProposalAmino;
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
export interface ToggleTokenConversionProposalProtoMsg {
    typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal";
    value: Uint8Array;
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposalAmino {
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
export interface ToggleTokenConversionProposalAminoMsg {
    type: "/evmos.erc20.v1.ToggleTokenConversionProposal";
    value: ToggleTokenConversionProposalAmino;
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
export interface ProposalMetadataProtoMsg {
    typeUrl: "/evmos.erc20.v1.ProposalMetadata";
    value: Uint8Array;
}
/**
 * ProposalMetadata is used to parse a slice of denom metadata and generate
 * the RegisterCoinProposal content.
 */
export interface ProposalMetadataAmino {
    /** metadata slice of the native Cosmos coins */
    metadata: MetadataAmino[];
}
export interface ProposalMetadataAminoMsg {
    type: "/evmos.erc20.v1.ProposalMetadata";
    value: ProposalMetadataAmino;
}
/**
 * ProposalMetadata is used to parse a slice of denom metadata and generate
 * the RegisterCoinProposal content.
 */
export interface ProposalMetadataSDKType {
    metadata: MetadataSDKType[];
}
export declare const TokenPair: {
    typeUrl: string;
    encode(message: TokenPair, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenPair;
    fromPartial(object: Partial<TokenPair>): TokenPair;
    fromAmino(object: TokenPairAmino): TokenPair;
    toAmino(message: TokenPair): TokenPairAmino;
    fromAminoMsg(object: TokenPairAminoMsg): TokenPair;
    fromProtoMsg(message: TokenPairProtoMsg): TokenPair;
    toProto(message: TokenPair): Uint8Array;
    toProtoMsg(message: TokenPair): TokenPairProtoMsg;
};
export declare const RegisterCoinProposal: {
    typeUrl: string;
    encode(message: RegisterCoinProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterCoinProposal;
    fromPartial(object: Partial<RegisterCoinProposal>): RegisterCoinProposal;
    fromAmino(object: RegisterCoinProposalAmino): RegisterCoinProposal;
    toAmino(message: RegisterCoinProposal): RegisterCoinProposalAmino;
    fromAminoMsg(object: RegisterCoinProposalAminoMsg): RegisterCoinProposal;
    fromProtoMsg(message: RegisterCoinProposalProtoMsg): RegisterCoinProposal;
    toProto(message: RegisterCoinProposal): Uint8Array;
    toProtoMsg(message: RegisterCoinProposal): RegisterCoinProposalProtoMsg;
};
export declare const RegisterERC20Proposal: {
    typeUrl: string;
    encode(message: RegisterERC20Proposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterERC20Proposal;
    fromPartial(object: Partial<RegisterERC20Proposal>): RegisterERC20Proposal;
    fromAmino(object: RegisterERC20ProposalAmino): RegisterERC20Proposal;
    toAmino(message: RegisterERC20Proposal): RegisterERC20ProposalAmino;
    fromAminoMsg(object: RegisterERC20ProposalAminoMsg): RegisterERC20Proposal;
    fromProtoMsg(message: RegisterERC20ProposalProtoMsg): RegisterERC20Proposal;
    toProto(message: RegisterERC20Proposal): Uint8Array;
    toProtoMsg(message: RegisterERC20Proposal): RegisterERC20ProposalProtoMsg;
};
export declare const ToggleTokenConversionProposal: {
    typeUrl: string;
    encode(message: ToggleTokenConversionProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ToggleTokenConversionProposal;
    fromPartial(object: Partial<ToggleTokenConversionProposal>): ToggleTokenConversionProposal;
    fromAmino(object: ToggleTokenConversionProposalAmino): ToggleTokenConversionProposal;
    toAmino(message: ToggleTokenConversionProposal): ToggleTokenConversionProposalAmino;
    fromAminoMsg(object: ToggleTokenConversionProposalAminoMsg): ToggleTokenConversionProposal;
    fromProtoMsg(message: ToggleTokenConversionProposalProtoMsg): ToggleTokenConversionProposal;
    toProto(message: ToggleTokenConversionProposal): Uint8Array;
    toProtoMsg(message: ToggleTokenConversionProposal): ToggleTokenConversionProposalProtoMsg;
};
export declare const ProposalMetadata: {
    typeUrl: string;
    encode(message: ProposalMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProposalMetadata;
    fromPartial(object: Partial<ProposalMetadata>): ProposalMetadata;
    fromAmino(object: ProposalMetadataAmino): ProposalMetadata;
    toAmino(message: ProposalMetadata): ProposalMetadataAmino;
    fromAminoMsg(object: ProposalMetadataAminoMsg): ProposalMetadata;
    fromProtoMsg(message: ProposalMetadataProtoMsg): ProposalMetadata;
    toProto(message: ProposalMetadata): Uint8Array;
    toProtoMsg(message: ProposalMetadata): ProposalMetadataProtoMsg;
};
