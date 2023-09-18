import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE - erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - OWNER_EXTERNAL - erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}
export const OwnerSDKType = Owner;
export const OwnerAmino = Owner;
export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;
    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}
export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";
    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";
    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";
    case Owner.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseTokenPair(): TokenPair {
  return {
    erc20Address: "",
    denom: "",
    enabled: false,
    contractOwner: 0
  };
}
export const TokenPair = {
  typeUrl: "/evmos.erc20.v1.TokenPair",
  encode(message: TokenPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.erc20Address !== "") {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.contractOwner !== 0) {
      writer.uint32(32).int32(message.contractOwner);
    }
    return writer;
  },
  fromJSON(object: any): TokenPair {
    return {
      erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      contractOwner: isSet(object.contractOwner) ? ownerFromJSON(object.contractOwner) : -1
    };
  },
  fromPartial(object: Partial<TokenPair>): TokenPair {
    const message = createBaseTokenPair();
    message.erc20Address = object.erc20Address ?? "";
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    message.contractOwner = object.contractOwner ?? 0;
    return message;
  },
  fromAmino(object: TokenPairAmino): TokenPair {
    return {
      erc20Address: object.erc20_address,
      denom: object.denom,
      enabled: object.enabled,
      contractOwner: isSet(object.contract_owner) ? ownerFromJSON(object.contract_owner) : -1
    };
  },
  toAmino(message: TokenPair): TokenPairAmino {
    const obj: any = {};
    obj.erc20_address = message.erc20Address;
    obj.denom = message.denom;
    obj.enabled = message.enabled;
    obj.contract_owner = message.contractOwner;
    return obj;
  },
  fromAminoMsg(object: TokenPairAminoMsg): TokenPair {
    return TokenPair.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenPairProtoMsg): TokenPair {
    return TokenPair.decode(message.value);
  },
  toProto(message: TokenPair): Uint8Array {
    return TokenPair.encode(message).finish();
  },
  toProtoMsg(message: TokenPair): TokenPairProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.TokenPair",
      value: TokenPair.encode(message).finish()
    };
  }
};
function createBaseRegisterCoinProposal(): RegisterCoinProposal {
  return {
    title: "",
    description: "",
    metadata: []
  };
}
export const RegisterCoinProposal = {
  typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
  encode(message: RegisterCoinProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RegisterCoinProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RegisterCoinProposal>): RegisterCoinProposal {
    const message = createBaseRegisterCoinProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RegisterCoinProposalAmino): RegisterCoinProposal {
    return {
      title: object.title,
      description: object.description,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromAmino(e)) : []
    };
  },
  toAmino(message: RegisterCoinProposal): RegisterCoinProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromAminoMsg(object: RegisterCoinProposalAminoMsg): RegisterCoinProposal {
    return RegisterCoinProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterCoinProposalProtoMsg): RegisterCoinProposal {
    return RegisterCoinProposal.decode(message.value);
  },
  toProto(message: RegisterCoinProposal): Uint8Array {
    return RegisterCoinProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterCoinProposal): RegisterCoinProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
      value: RegisterCoinProposal.encode(message).finish()
    };
  }
};
function createBaseRegisterERC20Proposal(): RegisterERC20Proposal {
  return {
    title: "",
    description: "",
    erc20addresses: []
  };
}
export const RegisterERC20Proposal = {
  typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
  encode(message: RegisterERC20Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.erc20addresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RegisterERC20Proposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      erc20addresses: Array.isArray(object?.erc20addresses) ? object.erc20addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RegisterERC20Proposal>): RegisterERC20Proposal {
    const message = createBaseRegisterERC20Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.erc20addresses = object.erc20addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RegisterERC20ProposalAmino): RegisterERC20Proposal {
    return {
      title: object.title,
      description: object.description,
      erc20addresses: Array.isArray(object?.erc20addresses) ? object.erc20addresses.map((e: any) => e) : []
    };
  },
  toAmino(message: RegisterERC20Proposal): RegisterERC20ProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.erc20addresses) {
      obj.erc20addresses = message.erc20addresses.map(e => e);
    } else {
      obj.erc20addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: RegisterERC20ProposalAminoMsg): RegisterERC20Proposal {
    return RegisterERC20Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterERC20ProposalProtoMsg): RegisterERC20Proposal {
    return RegisterERC20Proposal.decode(message.value);
  },
  toProto(message: RegisterERC20Proposal): Uint8Array {
    return RegisterERC20Proposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterERC20Proposal): RegisterERC20ProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
      value: RegisterERC20Proposal.encode(message).finish()
    };
  }
};
function createBaseToggleTokenConversionProposal(): ToggleTokenConversionProposal {
  return {
    title: "",
    description: "",
    token: ""
  };
}
export const ToggleTokenConversionProposal = {
  typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
  encode(message: ToggleTokenConversionProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },
  fromJSON(object: any): ToggleTokenConversionProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      token: isSet(object.token) ? String(object.token) : ""
    };
  },
  fromPartial(object: Partial<ToggleTokenConversionProposal>): ToggleTokenConversionProposal {
    const message = createBaseToggleTokenConversionProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: ToggleTokenConversionProposalAmino): ToggleTokenConversionProposal {
    return {
      title: object.title,
      description: object.description,
      token: object.token
    };
  },
  toAmino(message: ToggleTokenConversionProposal): ToggleTokenConversionProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.token = message.token;
    return obj;
  },
  fromAminoMsg(object: ToggleTokenConversionProposalAminoMsg): ToggleTokenConversionProposal {
    return ToggleTokenConversionProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ToggleTokenConversionProposalProtoMsg): ToggleTokenConversionProposal {
    return ToggleTokenConversionProposal.decode(message.value);
  },
  toProto(message: ToggleTokenConversionProposal): Uint8Array {
    return ToggleTokenConversionProposal.encode(message).finish();
  },
  toProtoMsg(message: ToggleTokenConversionProposal): ToggleTokenConversionProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
      value: ToggleTokenConversionProposal.encode(message).finish()
    };
  }
};
function createBaseProposalMetadata(): ProposalMetadata {
  return {
    metadata: []
  };
}
export const ProposalMetadata = {
  typeUrl: "/evmos.erc20.v1.ProposalMetadata",
  encode(message: ProposalMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProposalMetadata {
    return {
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ProposalMetadata>): ProposalMetadata {
    const message = createBaseProposalMetadata();
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalMetadataAmino): ProposalMetadata {
    return {
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => Metadata.fromAmino(e)) : []
    };
  },
  toAmino(message: ProposalMetadata): ProposalMetadataAmino {
    const obj: any = {};
    if (message.metadata) {
      obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.metadata = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProposalMetadataAminoMsg): ProposalMetadata {
    return ProposalMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalMetadataProtoMsg): ProposalMetadata {
    return ProposalMetadata.decode(message.value);
  },
  toProto(message: ProposalMetadata): Uint8Array {
    return ProposalMetadata.encode(message).finish();
  },
  toProtoMsg(message: ProposalMetadata): ProposalMetadataProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.ProposalMetadata",
      value: ProposalMetadata.encode(message).finish()
    };
  }
};