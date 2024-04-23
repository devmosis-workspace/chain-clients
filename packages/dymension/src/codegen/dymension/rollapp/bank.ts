import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */
  exponent: number;
  /** aliases is a list of string aliases for the given denom */
  aliases: string[];
}
export interface DenomUnitProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.DenomUnit";
  value: Uint8Array;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnitAmino {
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom?: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */
  exponent?: number;
  /** aliases is a list of string aliases for the given denom */
  aliases?: string[];
}
export interface DenomUnitAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.DenomUnit";
  value: DenomUnitAmino;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnitSDKType {
  denom: string;
  exponent: number;
  aliases: string[];
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface TokenMetadata {
  description: string;
  /** denom_units represents the list of DenomUnit's for a given coin */
  denomUnits: DenomUnit[];
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  /**
   * name defines the name of the token (eg: Cosmos Atom)
   * 
   * Since: cosmos-sdk 0.43
   */
  name: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   * 
   * Since: cosmos-sdk 0.43
   */
  symbol: string;
  /**
   * URI to a document (on or off-chain) that contains additional information. Optional.
   * 
   * Since: cosmos-sdk 0.46
   */
  uri: string;
  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
   * the document didn't change. Optional.
   * 
   * Since: cosmos-sdk 0.46
   */
  uriHash: string;
}
export interface TokenMetadataProtoMsg {
  typeUrl: "/dymensionxyz.dymension.rollapp.TokenMetadata";
  value: Uint8Array;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface TokenMetadataAmino {
  description?: string;
  /** denom_units represents the list of DenomUnit's for a given coin */
  denom_units?: DenomUnitAmino[];
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base?: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display?: string;
  /**
   * name defines the name of the token (eg: Cosmos Atom)
   * 
   * Since: cosmos-sdk 0.43
   */
  name?: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   * 
   * Since: cosmos-sdk 0.43
   */
  symbol?: string;
  /**
   * URI to a document (on or off-chain) that contains additional information. Optional.
   * 
   * Since: cosmos-sdk 0.46
   */
  uri?: string;
  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
   * the document didn't change. Optional.
   * 
   * Since: cosmos-sdk 0.46
   */
  uri_hash?: string;
}
export interface TokenMetadataAminoMsg {
  type: "/dymensionxyz.dymension.rollapp.TokenMetadata";
  value: TokenMetadataAmino;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface TokenMetadataSDKType {
  description: string;
  denom_units: DenomUnitSDKType[];
  base: string;
  display: string;
  name: string;
  symbol: string;
  uri: string;
  uri_hash: string;
}
function createBaseDenomUnit(): DenomUnit {
  return {
    denom: "",
    exponent: 0,
    aliases: []
  };
}
export const DenomUnit = {
  typeUrl: "/dymensionxyz.dymension.rollapp.DenomUnit",
  encode(message: DenomUnit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    for (const v of message.aliases) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): DenomUnit {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<DenomUnit>): DenomUnit {
    const message = createBaseDenomUnit();
    message.denom = object.denom ?? "";
    message.exponent = object.exponent ?? 0;
    message.aliases = object.aliases?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DenomUnitAmino): DenomUnit {
    const message = createBaseDenomUnit();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    message.aliases = object.aliases?.map(e => e) || [];
    return message;
  },
  toAmino(message: DenomUnit): DenomUnitAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.exponent = message.exponent;
    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = [];
    }
    return obj;
  },
  fromAminoMsg(object: DenomUnitAminoMsg): DenomUnit {
    return DenomUnit.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomUnitProtoMsg): DenomUnit {
    return DenomUnit.decode(message.value);
  },
  toProto(message: DenomUnit): Uint8Array {
    return DenomUnit.encode(message).finish();
  },
  toProtoMsg(message: DenomUnit): DenomUnitProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.DenomUnit",
      value: DenomUnit.encode(message).finish()
    };
  }
};
function createBaseTokenMetadata(): TokenMetadata {
  return {
    description: "",
    denomUnits: [],
    base: "",
    display: "",
    name: "",
    symbol: "",
    uri: "",
    uriHash: ""
  };
}
export const TokenMetadata = {
  typeUrl: "/dymensionxyz.dymension.rollapp.TokenMetadata",
  encode(message: TokenMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    for (const v of message.denomUnits) {
      DenomUnit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(34).string(message.display);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }
    return writer;
  },
  fromJSON(object: any): TokenMetadata {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      denomUnits: Array.isArray(object?.denomUnits) ? object.denomUnits.map((e: any) => DenomUnit.fromJSON(e)) : [],
      base: isSet(object.base) ? String(object.base) : "",
      display: isSet(object.display) ? String(object.display) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : ""
    };
  },
  fromPartial(object: Partial<TokenMetadata>): TokenMetadata {
    const message = createBaseTokenMetadata();
    message.description = object.description ?? "";
    message.denomUnits = object.denomUnits?.map(e => DenomUnit.fromPartial(e)) || [];
    message.base = object.base ?? "";
    message.display = object.display ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object: TokenMetadataAmino): TokenMetadata {
    const message = createBaseTokenMetadata();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.denomUnits = object.denom_units?.map(e => DenomUnit.fromAmino(e)) || [];
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.display !== undefined && object.display !== null) {
      message.display = object.display;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message: TokenMetadata): TokenMetadataAmino {
    const obj: any = {};
    obj.description = message.description;
    if (message.denomUnits) {
      obj.denom_units = message.denomUnits.map(e => e ? DenomUnit.toAmino(e) : undefined);
    } else {
      obj.denom_units = [];
    }
    obj.base = message.base;
    obj.display = message.display;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    return obj;
  },
  fromAminoMsg(object: TokenMetadataAminoMsg): TokenMetadata {
    return TokenMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenMetadataProtoMsg): TokenMetadata {
    return TokenMetadata.decode(message.value);
  },
  toProto(message: TokenMetadata): Uint8Array {
    return TokenMetadata.encode(message).finish();
  },
  toProtoMsg(message: TokenMetadata): TokenMetadataProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.rollapp.TokenMetadata",
      value: TokenMetadata.encode(message).finish()
    };
  }
};