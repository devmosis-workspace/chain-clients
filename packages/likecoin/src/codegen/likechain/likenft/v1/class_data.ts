import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
export enum ClassParentType {
  UNKNOWN = 0,
  ISCN = 1,
  ACCOUNT = 2,
  UNRECOGNIZED = -1,
}
export const ClassParentTypeSDKType = ClassParentType;
export const ClassParentTypeAmino = ClassParentType;
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
  parent: ClassParent;
  config: ClassConfig;
  blindBoxState: BlindBoxState;
}
export interface ClassDataProtoMsg {
  typeUrl: "/likechain.likenft.v1.ClassData";
  value: Uint8Array;
}
export interface ClassDataAmino {
  metadata: Uint8Array;
  parent?: ClassParentAmino;
  config?: ClassConfigAmino;
  blind_box_state?: BlindBoxStateAmino;
}
export interface ClassDataAminoMsg {
  type: "/likechain.likenft.v1.ClassData";
  value: ClassDataAmino;
}
export interface ClassDataSDKType {
  metadata: Uint8Array;
  parent: ClassParentSDKType;
  config: ClassConfigSDKType;
  blind_box_state: BlindBoxStateSDKType;
}
export interface ClassParent {
  type: ClassParentType;
  iscnIdPrefix?: string;
  iscnVersionAtMint?: bigint;
  account?: string;
}
export interface ClassParentProtoMsg {
  typeUrl: "/likechain.likenft.v1.ClassParent";
  value: Uint8Array;
}
export interface ClassParentAmino {
  type: ClassParentType;
  iscn_id_prefix: string;
  iscn_version_at_mint: string;
  account: string;
}
export interface ClassParentAminoMsg {
  type: "/likechain.likenft.v1.ClassParent";
  value: ClassParentAmino;
}
export interface ClassParentSDKType {
  type: ClassParentType;
  iscn_id_prefix?: string;
  iscn_version_at_mint?: bigint;
  account?: string;
}
export interface MintPeriod {
  startTime: Timestamp;
  allowedAddresses: string[];
  mintPrice: bigint;
}
export interface MintPeriodProtoMsg {
  typeUrl: "/likechain.likenft.v1.MintPeriod";
  value: Uint8Array;
}
export interface MintPeriodAmino {
  start_time?: TimestampAmino;
  allowed_addresses: string[];
  mint_price: string;
}
export interface MintPeriodAminoMsg {
  type: "/likechain.likenft.v1.MintPeriod";
  value: MintPeriodAmino;
}
export interface MintPeriodSDKType {
  start_time: TimestampSDKType;
  allowed_addresses: string[];
  mint_price: bigint;
}
export interface ClassConfig {
  burnable: boolean;
  maxSupply: bigint;
  blindBoxConfig?: BlindBoxConfig;
}
export interface ClassConfigProtoMsg {
  typeUrl: "/likechain.likenft.v1.ClassConfig";
  value: Uint8Array;
}
export interface ClassConfigAmino {
  burnable: boolean;
  max_supply: string;
  blind_box_config?: BlindBoxConfigAmino;
}
export interface ClassConfigAminoMsg {
  type: "/likechain.likenft.v1.ClassConfig";
  value: ClassConfigAmino;
}
export interface ClassConfigSDKType {
  burnable: boolean;
  max_supply: bigint;
  blind_box_config?: BlindBoxConfigSDKType;
}
export interface BlindBoxConfig {
  mintPeriods: MintPeriod[];
  revealTime: Timestamp;
}
export interface BlindBoxConfigProtoMsg {
  typeUrl: "/likechain.likenft.v1.BlindBoxConfig";
  value: Uint8Array;
}
export interface BlindBoxConfigAmino {
  mint_periods: MintPeriodAmino[];
  reveal_time?: TimestampAmino;
}
export interface BlindBoxConfigAminoMsg {
  type: "/likechain.likenft.v1.BlindBoxConfig";
  value: BlindBoxConfigAmino;
}
export interface BlindBoxConfigSDKType {
  mint_periods: MintPeriodSDKType[];
  reveal_time: TimestampSDKType;
}
export interface BlindBoxState {
  contentCount: bigint;
  toBeRevealed: boolean;
}
export interface BlindBoxStateProtoMsg {
  typeUrl: "/likechain.likenft.v1.BlindBoxState";
  value: Uint8Array;
}
export interface BlindBoxStateAmino {
  content_count: string;
  to_be_revealed: boolean;
}
export interface BlindBoxStateAminoMsg {
  type: "/likechain.likenft.v1.BlindBoxState";
  value: BlindBoxStateAmino;
}
export interface BlindBoxStateSDKType {
  content_count: bigint;
  to_be_revealed: boolean;
}
function createBaseClassData(): ClassData {
  return {
    metadata: new Uint8Array(),
    parent: ClassParent.fromPartial({}),
    config: ClassConfig.fromPartial({}),
    blindBoxState: BlindBoxState.fromPartial({})
  };
}
export const ClassData = {
  typeUrl: "/likechain.likenft.v1.ClassData",
  encode(message: ClassData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ClassDataAmino): ClassData {
    return {
      metadata: object.metadata,
      parent: object?.parent ? ClassParent.fromAmino(object.parent) : undefined,
      config: object?.config ? ClassConfig.fromAmino(object.config) : undefined,
      blindBoxState: object?.blind_box_state ? BlindBoxState.fromAmino(object.blind_box_state) : undefined
    };
  },
  toAmino(message: ClassData): ClassDataAmino {
    const obj: any = {};
    obj.metadata = message.metadata;
    obj.parent = message.parent ? ClassParent.toAmino(message.parent) : undefined;
    obj.config = message.config ? ClassConfig.toAmino(message.config) : undefined;
    obj.blind_box_state = message.blindBoxState ? BlindBoxState.toAmino(message.blindBoxState) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassDataAminoMsg): ClassData {
    return ClassData.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassDataProtoMsg): ClassData {
    return ClassData.decode(message.value);
  },
  toProto(message: ClassData): Uint8Array {
    return ClassData.encode(message).finish();
  },
  toProtoMsg(message: ClassData): ClassDataProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassData",
      value: ClassData.encode(message).finish()
    };
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
  typeUrl: "/likechain.likenft.v1.ClassParent",
  encode(message: ClassParent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      type: isSet(object.type) ? classParentTypeFromJSON(object.type) : -1,
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : undefined,
      iscnVersionAtMint: isSet(object.iscnVersionAtMint) ? BigInt(object.iscnVersionAtMint.toString()) : undefined,
      account: isSet(object.account) ? String(object.account) : undefined
    };
  },
  fromPartial(object: Partial<ClassParent>): ClassParent {
    const message = createBaseClassParent();
    message.type = object.type ?? 0;
    message.iscnIdPrefix = object.iscnIdPrefix ?? undefined;
    message.iscnVersionAtMint = object.iscnVersionAtMint !== undefined && object.iscnVersionAtMint !== null ? BigInt(object.iscnVersionAtMint.toString()) : undefined;
    message.account = object.account ?? undefined;
    return message;
  },
  fromAmino(object: ClassParentAmino): ClassParent {
    return {
      type: isSet(object.type) ? classParentTypeFromJSON(object.type) : -1,
      iscnIdPrefix: object?.iscn_id_prefix,
      iscnVersionAtMint: object?.iscn_version_at_mint ? BigInt(object.iscn_version_at_mint) : undefined,
      account: object?.account
    };
  },
  toAmino(message: ClassParent): ClassParentAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.iscn_id_prefix = message.iscnIdPrefix;
    obj.iscn_version_at_mint = message.iscnVersionAtMint ? message.iscnVersionAtMint.toString() : undefined;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: ClassParentAminoMsg): ClassParent {
    return ClassParent.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassParentProtoMsg): ClassParent {
    return ClassParent.decode(message.value);
  },
  toProto(message: ClassParent): Uint8Array {
    return ClassParent.encode(message).finish();
  },
  toProtoMsg(message: ClassParent): ClassParentProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassParent",
      value: ClassParent.encode(message).finish()
    };
  }
};
function createBaseMintPeriod(): MintPeriod {
  return {
    startTime: Timestamp.fromPartial({}),
    allowedAddresses: [],
    mintPrice: BigInt(0)
  };
}
export const MintPeriod = {
  typeUrl: "/likechain.likenft.v1.MintPeriod",
  encode(message: MintPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedAddresses) {
      writer.uint32(18).string(v!);
    }
    if (message.mintPrice !== BigInt(0)) {
      writer.uint32(24).uint64(message.mintPrice);
    }
    return writer;
  },
  fromJSON(object: any): MintPeriod {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      allowedAddresses: Array.isArray(object?.allowedAddresses) ? object.allowedAddresses.map((e: any) => String(e)) : [],
      mintPrice: isSet(object.mintPrice) ? BigInt(object.mintPrice.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MintPeriod>): MintPeriod {
    const message = createBaseMintPeriod();
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.allowedAddresses = object.allowedAddresses?.map(e => e) || [];
    message.mintPrice = object.mintPrice !== undefined && object.mintPrice !== null ? BigInt(object.mintPrice.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MintPeriodAmino): MintPeriod {
    return {
      startTime: object.start_time,
      allowedAddresses: Array.isArray(object?.allowed_addresses) ? object.allowed_addresses.map((e: any) => e) : [],
      mintPrice: BigInt(object.mint_price)
    };
  },
  toAmino(message: MintPeriod): MintPeriodAmino {
    const obj: any = {};
    obj.start_time = message.startTime;
    if (message.allowedAddresses) {
      obj.allowed_addresses = message.allowedAddresses.map(e => e);
    } else {
      obj.allowed_addresses = [];
    }
    obj.mint_price = message.mintPrice ? message.mintPrice.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MintPeriodAminoMsg): MintPeriod {
    return MintPeriod.fromAmino(object.value);
  },
  fromProtoMsg(message: MintPeriodProtoMsg): MintPeriod {
    return MintPeriod.decode(message.value);
  },
  toProto(message: MintPeriod): Uint8Array {
    return MintPeriod.encode(message).finish();
  },
  toProtoMsg(message: MintPeriod): MintPeriodProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.MintPeriod",
      value: MintPeriod.encode(message).finish()
    };
  }
};
function createBaseClassConfig(): ClassConfig {
  return {
    burnable: false,
    maxSupply: BigInt(0),
    blindBoxConfig: undefined
  };
}
export const ClassConfig = {
  typeUrl: "/likechain.likenft.v1.ClassConfig",
  encode(message: ClassConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burnable === true) {
      writer.uint32(8).bool(message.burnable);
    }
    if (message.maxSupply !== BigInt(0)) {
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
      maxSupply: isSet(object.maxSupply) ? BigInt(object.maxSupply.toString()) : BigInt(0),
      blindBoxConfig: isSet(object.blindBoxConfig) ? BlindBoxConfig.fromJSON(object.blindBoxConfig) : undefined
    };
  },
  fromPartial(object: Partial<ClassConfig>): ClassConfig {
    const message = createBaseClassConfig();
    message.burnable = object.burnable ?? false;
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? BigInt(object.maxSupply.toString()) : BigInt(0);
    message.blindBoxConfig = object.blindBoxConfig !== undefined && object.blindBoxConfig !== null ? BlindBoxConfig.fromPartial(object.blindBoxConfig) : undefined;
    return message;
  },
  fromAmino(object: ClassConfigAmino): ClassConfig {
    return {
      burnable: object.burnable,
      maxSupply: BigInt(object.max_supply),
      blindBoxConfig: object?.blind_box_config ? BlindBoxConfig.fromAmino(object.blind_box_config) : undefined
    };
  },
  toAmino(message: ClassConfig): ClassConfigAmino {
    const obj: any = {};
    obj.burnable = message.burnable;
    obj.max_supply = message.maxSupply ? message.maxSupply.toString() : undefined;
    obj.blind_box_config = message.blindBoxConfig ? BlindBoxConfig.toAmino(message.blindBoxConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassConfigAminoMsg): ClassConfig {
    return ClassConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassConfigProtoMsg): ClassConfig {
    return ClassConfig.decode(message.value);
  },
  toProto(message: ClassConfig): Uint8Array {
    return ClassConfig.encode(message).finish();
  },
  toProtoMsg(message: ClassConfig): ClassConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ClassConfig",
      value: ClassConfig.encode(message).finish()
    };
  }
};
function createBaseBlindBoxConfig(): BlindBoxConfig {
  return {
    mintPeriods: [],
    revealTime: Timestamp.fromPartial({})
  };
}
export const BlindBoxConfig = {
  typeUrl: "/likechain.likenft.v1.BlindBoxConfig",
  encode(message: BlindBoxConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BlindBoxConfigAmino): BlindBoxConfig {
    return {
      mintPeriods: Array.isArray(object?.mint_periods) ? object.mint_periods.map((e: any) => MintPeriod.fromAmino(e)) : [],
      revealTime: object.reveal_time
    };
  },
  toAmino(message: BlindBoxConfig): BlindBoxConfigAmino {
    const obj: any = {};
    if (message.mintPeriods) {
      obj.mint_periods = message.mintPeriods.map(e => e ? MintPeriod.toAmino(e) : undefined);
    } else {
      obj.mint_periods = [];
    }
    obj.reveal_time = message.revealTime;
    return obj;
  },
  fromAminoMsg(object: BlindBoxConfigAminoMsg): BlindBoxConfig {
    return BlindBoxConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: BlindBoxConfigProtoMsg): BlindBoxConfig {
    return BlindBoxConfig.decode(message.value);
  },
  toProto(message: BlindBoxConfig): Uint8Array {
    return BlindBoxConfig.encode(message).finish();
  },
  toProtoMsg(message: BlindBoxConfig): BlindBoxConfigProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.BlindBoxConfig",
      value: BlindBoxConfig.encode(message).finish()
    };
  }
};
function createBaseBlindBoxState(): BlindBoxState {
  return {
    contentCount: BigInt(0),
    toBeRevealed: false
  };
}
export const BlindBoxState = {
  typeUrl: "/likechain.likenft.v1.BlindBoxState",
  encode(message: BlindBoxState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.contentCount);
    }
    if (message.toBeRevealed === true) {
      writer.uint32(16).bool(message.toBeRevealed);
    }
    return writer;
  },
  fromJSON(object: any): BlindBoxState {
    return {
      contentCount: isSet(object.contentCount) ? BigInt(object.contentCount.toString()) : BigInt(0),
      toBeRevealed: isSet(object.toBeRevealed) ? Boolean(object.toBeRevealed) : false
    };
  },
  fromPartial(object: Partial<BlindBoxState>): BlindBoxState {
    const message = createBaseBlindBoxState();
    message.contentCount = object.contentCount !== undefined && object.contentCount !== null ? BigInt(object.contentCount.toString()) : BigInt(0);
    message.toBeRevealed = object.toBeRevealed ?? false;
    return message;
  },
  fromAmino(object: BlindBoxStateAmino): BlindBoxState {
    return {
      contentCount: BigInt(object.content_count),
      toBeRevealed: object.to_be_revealed
    };
  },
  toAmino(message: BlindBoxState): BlindBoxStateAmino {
    const obj: any = {};
    obj.content_count = message.contentCount ? message.contentCount.toString() : undefined;
    obj.to_be_revealed = message.toBeRevealed;
    return obj;
  },
  fromAminoMsg(object: BlindBoxStateAminoMsg): BlindBoxState {
    return BlindBoxState.fromAmino(object.value);
  },
  fromProtoMsg(message: BlindBoxStateProtoMsg): BlindBoxState {
    return BlindBoxState.decode(message.value);
  },
  toProto(message: BlindBoxState): Uint8Array {
    return BlindBoxState.encode(message).finish();
  },
  toProtoMsg(message: BlindBoxState): BlindBoxStateProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.BlindBoxState",
      value: BlindBoxState.encode(message).finish()
    };
  }
};