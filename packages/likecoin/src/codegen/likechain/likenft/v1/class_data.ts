import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum ClassParentType {
  UNKNOWN = 0,
  ISCN = 1,
  ACCOUNT = 2,
  UNRECOGNIZED = -1,
}
export const ClassParentTypeSDKType = ClassParentType;
export function classParentTypeFromJSON(object: any): ClassParentType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ClassParentType.UNKNOWN;
    case 1:
    case "ISCN":
      return ClassParentType.ISCN;
    case 2:
    case "ACCOUNT":
      return ClassParentType.ACCOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClassParentType.UNRECOGNIZED;
  }
}
export function classParentTypeToJSON(object: ClassParentType): string {
  switch (object) {
    case ClassParentType.UNKNOWN:
      return "UNKNOWN";
    case ClassParentType.ISCN:
      return "ISCN";
    case ClassParentType.ACCOUNT:
      return "ACCOUNT";
    case ClassParentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ClassData {
  metadata: Uint8Array;
  parent?: ClassParent;
  config?: ClassConfig;
  blindBoxState?: BlindBoxState;
}
export interface ClassDataSDKType {
  metadata: Uint8Array;
  parent?: ClassParentSDKType;
  config?: ClassConfigSDKType;
  blind_box_state?: BlindBoxStateSDKType;
}
export interface ClassParent {
  type: ClassParentType;
  iscnIdPrefix: string;
  iscnVersionAtMint: Long;
  account: string;
}
export interface ClassParentSDKType {
  type: ClassParentType;
  iscn_id_prefix: string;
  iscn_version_at_mint: Long;
  account: string;
}
export interface MintPeriod {
  startTime?: Timestamp;
  allowedAddresses: string[];
  mintPrice: Long;
}
export interface MintPeriodSDKType {
  start_time?: TimestampSDKType;
  allowed_addresses: string[];
  mint_price: Long;
}
export interface ClassConfig {
  burnable: boolean;
  maxSupply: Long;
  blindBoxConfig?: BlindBoxConfig;
}
export interface ClassConfigSDKType {
  burnable: boolean;
  max_supply: Long;
  blind_box_config?: BlindBoxConfigSDKType;
}
export interface BlindBoxConfig {
  mintPeriods: MintPeriod[];
  revealTime?: Timestamp;
}
export interface BlindBoxConfigSDKType {
  mint_periods: MintPeriodSDKType[];
  reveal_time?: TimestampSDKType;
}
export interface BlindBoxState {
  contentCount: Long;
  toBeRevealed: boolean;
}
export interface BlindBoxStateSDKType {
  content_count: Long;
  to_be_revealed: boolean;
}
function createBaseClassData(): ClassData {
  return {
    metadata: new Uint8Array(),
    parent: undefined,
    config: undefined,
    blindBoxState: undefined
  };
}
export const ClassData = {
  encode(message: ClassData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata.length !== 0) {
      writer.uint32(10).bytes(message.metadata);
    }
    if (message.parent !== undefined) {
      ClassParent.encode(message.parent, writer.uint32(18).fork()).ldelim();
    }
    if (message.config !== undefined) {
      ClassConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    if (message.blindBoxState !== undefined) {
      BlindBoxState.encode(message.blindBoxState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClassData {
    return {
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      parent: isSet(object.parent) ? ClassParent.fromJSON(object.parent) : undefined,
      config: isSet(object.config) ? ClassConfig.fromJSON(object.config) : undefined,
      blindBoxState: isSet(object.blindBoxState) ? BlindBoxState.fromJSON(object.blindBoxState) : undefined
    };
  },
  fromPartial(object: Partial<ClassData>): ClassData {
    const message = createBaseClassData();
    message.metadata = object.metadata ?? new Uint8Array();
    message.parent = object.parent !== undefined && object.parent !== null ? ClassParent.fromPartial(object.parent) : undefined;
    message.config = object.config !== undefined && object.config !== null ? ClassConfig.fromPartial(object.config) : undefined;
    message.blindBoxState = object.blindBoxState !== undefined && object.blindBoxState !== null ? BlindBoxState.fromPartial(object.blindBoxState) : undefined;
    return message;
  }
};
function createBaseClassParent(): ClassParent {
  return {
    type: 0,
    iscnIdPrefix: undefined,
    iscnVersionAtMint: undefined,
    account: undefined
  };
}
export const ClassParent = {
  encode(message: ClassParent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.iscnIdPrefix !== undefined) {
      writer.uint32(18).string(message.iscnIdPrefix);
    }
    if (message.iscnVersionAtMint !== undefined) {
      writer.uint32(24).uint64(message.iscnVersionAtMint);
    }
    if (message.account !== undefined) {
      writer.uint32(34).string(message.account);
    }
    return writer;
  },
  fromJSON(object: any): ClassParent {
    return {
      type: isSet(object.type) ? classParentTypeFromJSON(object.type) : 0,
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : undefined,
      iscnVersionAtMint: isSet(object.iscnVersionAtMint) ? Long.fromValue(object.iscnVersionAtMint) : undefined,
      account: isSet(object.account) ? String(object.account) : undefined
    };
  },
  fromPartial(object: Partial<ClassParent>): ClassParent {
    const message = createBaseClassParent();
    message.type = object.type ?? 0;
    message.iscnIdPrefix = object.iscnIdPrefix ?? undefined;
    message.iscnVersionAtMint = object.iscnVersionAtMint !== undefined && object.iscnVersionAtMint !== null ? Long.fromValue(object.iscnVersionAtMint) : undefined;
    message.account = object.account ?? undefined;
    return message;
  }
};
function createBaseMintPeriod(): MintPeriod {
  return {
    startTime: undefined,
    allowedAddresses: [],
    mintPrice: Long.UZERO
  };
}
export const MintPeriod = {
  encode(message: MintPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedAddresses) {
      writer.uint32(18).string(v!);
    }
    if (!message.mintPrice.isZero()) {
      writer.uint32(24).uint64(message.mintPrice);
    }
    return writer;
  },
  fromJSON(object: any): MintPeriod {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      allowedAddresses: Array.isArray(object?.allowedAddresses) ? object.allowedAddresses.map((e: any) => String(e)) : [],
      mintPrice: isSet(object.mintPrice) ? Long.fromValue(object.mintPrice) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MintPeriod>): MintPeriod {
    const message = createBaseMintPeriod();
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.allowedAddresses = object.allowedAddresses?.map(e => e) || [];
    message.mintPrice = object.mintPrice !== undefined && object.mintPrice !== null ? Long.fromValue(object.mintPrice) : Long.UZERO;
    return message;
  }
};
function createBaseClassConfig(): ClassConfig {
  return {
    burnable: false,
    maxSupply: Long.UZERO,
    blindBoxConfig: undefined
  };
}
export const ClassConfig = {
  encode(message: ClassConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnable === true) {
      writer.uint32(8).bool(message.burnable);
    }
    if (!message.maxSupply.isZero()) {
      writer.uint32(16).uint64(message.maxSupply);
    }
    if (message.blindBoxConfig !== undefined) {
      BlindBoxConfig.encode(message.blindBoxConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClassConfig {
    return {
      burnable: isSet(object.burnable) ? Boolean(object.burnable) : false,
      maxSupply: isSet(object.maxSupply) ? Long.fromValue(object.maxSupply) : Long.UZERO,
      blindBoxConfig: isSet(object.blindBoxConfig) ? BlindBoxConfig.fromJSON(object.blindBoxConfig) : undefined
    };
  },
  fromPartial(object: Partial<ClassConfig>): ClassConfig {
    const message = createBaseClassConfig();
    message.burnable = object.burnable ?? false;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Long.fromValue(object.maxSupply) : Long.UZERO;
    message.blindBoxConfig = object.blindBoxConfig !== undefined && object.blindBoxConfig !== null ? BlindBoxConfig.fromPartial(object.blindBoxConfig) : undefined;
    return message;
  }
};
function createBaseBlindBoxConfig(): BlindBoxConfig {
  return {
    mintPeriods: [],
    revealTime: undefined
  };
}
export const BlindBoxConfig = {
  encode(message: BlindBoxConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mintPeriods) {
      MintPeriod.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.revealTime !== undefined) {
      Timestamp.encode(message.revealTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BlindBoxConfig {
    return {
      mintPeriods: Array.isArray(object?.mintPeriods) ? object.mintPeriods.map((e: any) => MintPeriod.fromJSON(e)) : [],
      revealTime: isSet(object.revealTime) ? fromJsonTimestamp(object.revealTime) : undefined
    };
  },
  fromPartial(object: Partial<BlindBoxConfig>): BlindBoxConfig {
    const message = createBaseBlindBoxConfig();
    message.mintPeriods = object.mintPeriods?.map(e => MintPeriod.fromPartial(e)) || [];
    message.revealTime = object.revealTime !== undefined && object.revealTime !== null ? Timestamp.fromPartial(object.revealTime) : undefined;
    return message;
  }
};
function createBaseBlindBoxState(): BlindBoxState {
  return {
    contentCount: Long.UZERO,
    toBeRevealed: false
  };
}
export const BlindBoxState = {
  encode(message: BlindBoxState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.contentCount.isZero()) {
      writer.uint32(8).uint64(message.contentCount);
    }
    if (message.toBeRevealed === true) {
      writer.uint32(16).bool(message.toBeRevealed);
    }
    return writer;
  },
  fromJSON(object: any): BlindBoxState {
    return {
      contentCount: isSet(object.contentCount) ? Long.fromValue(object.contentCount) : Long.UZERO,
      toBeRevealed: isSet(object.toBeRevealed) ? Boolean(object.toBeRevealed) : false
    };
  },
  fromPartial(object: Partial<BlindBoxState>): BlindBoxState {
    const message = createBaseBlindBoxState();
    message.contentCount = object.contentCount !== undefined && object.contentCount !== null ? Long.fromValue(object.contentCount) : Long.UZERO;
    message.toBeRevealed = object.toBeRevealed ?? false;
    return message;
  }
};