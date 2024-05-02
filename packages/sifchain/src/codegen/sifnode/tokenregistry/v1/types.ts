import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export enum Permission {
  UNSPECIFIED = 0,
  CLP = 1,
  IBCEXPORT = 2,
  IBCIMPORT = 3,
  DISABLE_BUY = 4,
  DISABLE_SELL = 5,
  UNRECOGNIZED = -1,
}
export const PermissionSDKType = Permission;
export const PermissionAmino = Permission;
export function permissionFromJSON(object: any): Permission {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Permission.UNSPECIFIED;
    case 1:
    case "CLP":
      return Permission.CLP;
    case 2:
    case "IBCEXPORT":
      return Permission.IBCEXPORT;
    case 3:
    case "IBCIMPORT":
      return Permission.IBCIMPORT;
    case 4:
    case "DISABLE_BUY":
      return Permission.DISABLE_BUY;
    case 5:
    case "DISABLE_SELL":
      return Permission.DISABLE_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permission.UNRECOGNIZED;
  }
}
export function permissionToJSON(object: Permission): string {
  switch (object) {
    case Permission.UNSPECIFIED:
      return "UNSPECIFIED";
    case Permission.CLP:
      return "CLP";
    case Permission.IBCEXPORT:
      return "IBCEXPORT";
    case Permission.IBCIMPORT:
      return "IBCIMPORT";
    case Permission.DISABLE_BUY:
      return "DISABLE_BUY";
    case Permission.DISABLE_SELL:
      return "DISABLE_SELL";
    case Permission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface SifnodeTokenRegistry {
  entries: RegistryEntry[];
}
export interface SifnodeTokenRegistryProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.SifnodeTokenRegistry";
  value: Uint8Array;
}
export interface SifnodeTokenRegistryAmino {
  entries?: RegistryEntryAmino[];
}
export interface SifnodeTokenRegistryAminoMsg {
  type: "/sifnode.tokenregistry.v1.SifnodeTokenRegistry";
  value: SifnodeTokenRegistryAmino;
}
export interface SifnodeTokenRegistrySDKType {
  entries: RegistryEntrySDKType[];
}
export interface RegistryEntry {
  decimals: bigint;
  denom: string;
  baseDenom: string;
  path: string;
  ibcChannelId: string;
  ibcCounterpartyChannelId: string;
  displayName: string;
  displaySymbol: string;
  network: string;
  address: string;
  externalSymbol: string;
  transferLimit: string;
  permissions: Permission[];
  /**
   * The name of denomination unit of this token that is the smallest unit
   * stored. IBC imports of this RegistryEntry convert and store funds as
   * unit_denom. Several different denom units of a token may be imported into
   * this same unit denom, they should all be stored under the same unit_denom
   * if they are the same token. When exporting a RegistryEntry where unit_denom
   * != denom, then unit_denom can, in future, be used to indicate the source of
   * funds for a denom unit that does not actually exist on chain, enabling
   * other chains to overcome the uint64 limit on the packet level and import
   * large amounts of high precision tokens easily. ie. microrowan -> rowan i.e
   * rowan -> rowan
   */
  unitDenom: string;
  /**
   * The name of denomination unit of this token that should appear on
   * counterparty chain when this unit is exported. If empty, the denom is
   * exported as is. Generally this will only be used to map a high precision
   * (unit_denom) to a lower precision, to overcome the current uint64 limit on
   * the packet level. i.e rowan -> microrowan i.e microrowan -> microrowan
   */
  ibcCounterpartyDenom: string;
  ibcCounterpartyChainId: string;
}
export interface RegistryEntryProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.RegistryEntry";
  value: Uint8Array;
}
export interface RegistryEntryAmino {
  decimals?: string;
  denom?: string;
  base_denom?: string;
  path?: string;
  ibc_channel_id?: string;
  ibc_counterparty_channel_id?: string;
  display_name?: string;
  display_symbol?: string;
  network?: string;
  address?: string;
  external_symbol?: string;
  transfer_limit?: string;
  permissions?: Permission[];
  /**
   * The name of denomination unit of this token that is the smallest unit
   * stored. IBC imports of this RegistryEntry convert and store funds as
   * unit_denom. Several different denom units of a token may be imported into
   * this same unit denom, they should all be stored under the same unit_denom
   * if they are the same token. When exporting a RegistryEntry where unit_denom
   * != denom, then unit_denom can, in future, be used to indicate the source of
   * funds for a denom unit that does not actually exist on chain, enabling
   * other chains to overcome the uint64 limit on the packet level and import
   * large amounts of high precision tokens easily. ie. microrowan -> rowan i.e
   * rowan -> rowan
   */
  unit_denom?: string;
  /**
   * The name of denomination unit of this token that should appear on
   * counterparty chain when this unit is exported. If empty, the denom is
   * exported as is. Generally this will only be used to map a high precision
   * (unit_denom) to a lower precision, to overcome the current uint64 limit on
   * the packet level. i.e rowan -> microrowan i.e microrowan -> microrowan
   */
  ibc_counterparty_denom?: string;
  ibc_counterparty_chain_id?: string;
}
export interface RegistryEntryAminoMsg {
  type: "/sifnode.tokenregistry.v1.RegistryEntry";
  value: RegistryEntryAmino;
}
export interface RegistryEntrySDKType {
  decimals: bigint;
  denom: string;
  base_denom: string;
  path: string;
  ibc_channel_id: string;
  ibc_counterparty_channel_id: string;
  display_name: string;
  display_symbol: string;
  network: string;
  address: string;
  external_symbol: string;
  transfer_limit: string;
  permissions: Permission[];
  unit_denom: string;
  ibc_counterparty_denom: string;
  ibc_counterparty_chain_id: string;
}
function createBaseSifnodeTokenRegistry(): SifnodeTokenRegistry {
  return {
    entries: []
  };
}
export const SifnodeTokenRegistry = {
  typeUrl: "/sifnode.tokenregistry.v1.SifnodeTokenRegistry",
  encode(message: SifnodeTokenRegistry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      RegistryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SifnodeTokenRegistry {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RegistryEntry.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SifnodeTokenRegistry>): SifnodeTokenRegistry {
    const message = createBaseSifnodeTokenRegistry();
    message.entries = object.entries?.map(e => RegistryEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SifnodeTokenRegistryAmino): SifnodeTokenRegistry {
    const message = createBaseSifnodeTokenRegistry();
    message.entries = object.entries?.map(e => RegistryEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SifnodeTokenRegistry): SifnodeTokenRegistryAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? RegistryEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: SifnodeTokenRegistryAminoMsg): SifnodeTokenRegistry {
    return SifnodeTokenRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: SifnodeTokenRegistryProtoMsg): SifnodeTokenRegistry {
    return SifnodeTokenRegistry.decode(message.value);
  },
  toProto(message: SifnodeTokenRegistry): Uint8Array {
    return SifnodeTokenRegistry.encode(message).finish();
  },
  toProtoMsg(message: SifnodeTokenRegistry): SifnodeTokenRegistryProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.SifnodeTokenRegistry",
      value: SifnodeTokenRegistry.encode(message).finish()
    };
  }
};
function createBaseRegistryEntry(): RegistryEntry {
  return {
    decimals: BigInt(0),
    denom: "",
    baseDenom: "",
    path: "",
    ibcChannelId: "",
    ibcCounterpartyChannelId: "",
    displayName: "",
    displaySymbol: "",
    network: "",
    address: "",
    externalSymbol: "",
    transferLimit: "",
    permissions: [],
    unitDenom: "",
    ibcCounterpartyDenom: "",
    ibcCounterpartyChainId: ""
  };
}
export const RegistryEntry = {
  typeUrl: "/sifnode.tokenregistry.v1.RegistryEntry",
  encode(message: RegistryEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.decimals !== BigInt(0)) {
      writer.uint32(16).int64(message.decimals);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    if (message.ibcChannelId !== "") {
      writer.uint32(50).string(message.ibcChannelId);
    }
    if (message.ibcCounterpartyChannelId !== "") {
      writer.uint32(58).string(message.ibcCounterpartyChannelId);
    }
    if (message.displayName !== "") {
      writer.uint32(66).string(message.displayName);
    }
    if (message.displaySymbol !== "") {
      writer.uint32(74).string(message.displaySymbol);
    }
    if (message.network !== "") {
      writer.uint32(82).string(message.network);
    }
    if (message.address !== "") {
      writer.uint32(90).string(message.address);
    }
    if (message.externalSymbol !== "") {
      writer.uint32(98).string(message.externalSymbol);
    }
    if (message.transferLimit !== "") {
      writer.uint32(106).string(message.transferLimit);
    }
    writer.uint32(122).fork();
    for (const v of message.permissions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.unitDenom !== "") {
      writer.uint32(130).string(message.unitDenom);
    }
    if (message.ibcCounterpartyDenom !== "") {
      writer.uint32(138).string(message.ibcCounterpartyDenom);
    }
    if (message.ibcCounterpartyChainId !== "") {
      writer.uint32(146).string(message.ibcCounterpartyChainId);
    }
    return writer;
  },
  fromJSON(object: any): RegistryEntry {
    return {
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      path: isSet(object.path) ? String(object.path) : "",
      ibcChannelId: isSet(object.ibcChannelId) ? String(object.ibcChannelId) : "",
      ibcCounterpartyChannelId: isSet(object.ibcCounterpartyChannelId) ? String(object.ibcCounterpartyChannelId) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      displaySymbol: isSet(object.displaySymbol) ? String(object.displaySymbol) : "",
      network: isSet(object.network) ? String(object.network) : "",
      address: isSet(object.address) ? String(object.address) : "",
      externalSymbol: isSet(object.externalSymbol) ? String(object.externalSymbol) : "",
      transferLimit: isSet(object.transferLimit) ? String(object.transferLimit) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => permissionFromJSON(e)) : [],
      unitDenom: isSet(object.unitDenom) ? String(object.unitDenom) : "",
      ibcCounterpartyDenom: isSet(object.ibcCounterpartyDenom) ? String(object.ibcCounterpartyDenom) : "",
      ibcCounterpartyChainId: isSet(object.ibcCounterpartyChainId) ? String(object.ibcCounterpartyChainId) : ""
    };
  },
  fromPartial(object: Partial<RegistryEntry>): RegistryEntry {
    const message = createBaseRegistryEntry();
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.path = object.path ?? "";
    message.ibcChannelId = object.ibcChannelId ?? "";
    message.ibcCounterpartyChannelId = object.ibcCounterpartyChannelId ?? "";
    message.displayName = object.displayName ?? "";
    message.displaySymbol = object.displaySymbol ?? "";
    message.network = object.network ?? "";
    message.address = object.address ?? "";
    message.externalSymbol = object.externalSymbol ?? "";
    message.transferLimit = object.transferLimit ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    message.unitDenom = object.unitDenom ?? "";
    message.ibcCounterpartyDenom = object.ibcCounterpartyDenom ?? "";
    message.ibcCounterpartyChainId = object.ibcCounterpartyChainId ?? "";
    return message;
  },
  fromAmino(object: RegistryEntryAmino): RegistryEntry {
    const message = createBaseRegistryEntry();
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.ibc_channel_id !== undefined && object.ibc_channel_id !== null) {
      message.ibcChannelId = object.ibc_channel_id;
    }
    if (object.ibc_counterparty_channel_id !== undefined && object.ibc_counterparty_channel_id !== null) {
      message.ibcCounterpartyChannelId = object.ibc_counterparty_channel_id;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    if (object.display_symbol !== undefined && object.display_symbol !== null) {
      message.displaySymbol = object.display_symbol;
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.external_symbol !== undefined && object.external_symbol !== null) {
      message.externalSymbol = object.external_symbol;
    }
    if (object.transfer_limit !== undefined && object.transfer_limit !== null) {
      message.transferLimit = object.transfer_limit;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    if (object.unit_denom !== undefined && object.unit_denom !== null) {
      message.unitDenom = object.unit_denom;
    }
    if (object.ibc_counterparty_denom !== undefined && object.ibc_counterparty_denom !== null) {
      message.ibcCounterpartyDenom = object.ibc_counterparty_denom;
    }
    if (object.ibc_counterparty_chain_id !== undefined && object.ibc_counterparty_chain_id !== null) {
      message.ibcCounterpartyChainId = object.ibc_counterparty_chain_id;
    }
    return message;
  },
  toAmino(message: RegistryEntry): RegistryEntryAmino {
    const obj: any = {};
    obj.decimals = message.decimals !== BigInt(0) ? message.decimals.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.path = message.path === "" ? undefined : message.path;
    obj.ibc_channel_id = message.ibcChannelId === "" ? undefined : message.ibcChannelId;
    obj.ibc_counterparty_channel_id = message.ibcCounterpartyChannelId === "" ? undefined : message.ibcCounterpartyChannelId;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    obj.display_symbol = message.displaySymbol === "" ? undefined : message.displaySymbol;
    obj.network = message.network === "" ? undefined : message.network;
    obj.address = message.address === "" ? undefined : message.address;
    obj.external_symbol = message.externalSymbol === "" ? undefined : message.externalSymbol;
    obj.transfer_limit = message.transferLimit === "" ? undefined : message.transferLimit;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    obj.unit_denom = message.unitDenom === "" ? undefined : message.unitDenom;
    obj.ibc_counterparty_denom = message.ibcCounterpartyDenom === "" ? undefined : message.ibcCounterpartyDenom;
    obj.ibc_counterparty_chain_id = message.ibcCounterpartyChainId === "" ? undefined : message.ibcCounterpartyChainId;
    return obj;
  },
  fromAminoMsg(object: RegistryEntryAminoMsg): RegistryEntry {
    return RegistryEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: RegistryEntryProtoMsg): RegistryEntry {
    return RegistryEntry.decode(message.value);
  },
  toProto(message: RegistryEntry): Uint8Array {
    return RegistryEntry.encode(message).finish();
  },
  toProtoMsg(message: RegistryEntry): RegistryEntryProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.RegistryEntry",
      value: RegistryEntry.encode(message).finish()
    };
  }
};