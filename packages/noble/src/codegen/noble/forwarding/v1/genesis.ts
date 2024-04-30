import { BinaryWriter } from "../../../binary";
import { isSet, isObject } from "../../../helpers";
export interface GenesisState_NumOfAccountsEntry {
  key: string;
  value: bigint;
}
export interface GenesisState_NumOfAccountsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface GenesisState_NumOfAccountsEntryAmino {
  key?: string;
  value?: string;
}
export interface GenesisState_NumOfAccountsEntryAminoMsg {
  type: string;
  value: GenesisState_NumOfAccountsEntryAmino;
}
export interface GenesisState_NumOfAccountsEntrySDKType {
  key: string;
  value: bigint;
}
export interface GenesisState_NumOfForwardsEntry {
  key: string;
  value: bigint;
}
export interface GenesisState_NumOfForwardsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface GenesisState_NumOfForwardsEntryAmino {
  key?: string;
  value?: string;
}
export interface GenesisState_NumOfForwardsEntryAminoMsg {
  type: string;
  value: GenesisState_NumOfForwardsEntryAmino;
}
export interface GenesisState_NumOfForwardsEntrySDKType {
  key: string;
  value: bigint;
}
export interface GenesisState_TotalForwardedEntry {
  key: string;
  value: string;
}
export interface GenesisState_TotalForwardedEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface GenesisState_TotalForwardedEntryAmino {
  key?: string;
  value?: string;
}
export interface GenesisState_TotalForwardedEntryAminoMsg {
  type: string;
  value: GenesisState_TotalForwardedEntryAmino;
}
export interface GenesisState_TotalForwardedEntrySDKType {
  key: string;
  value: string;
}
export interface GenesisState {
  numOfAccounts: {
    [key: string]: bigint;
  };
  numOfForwards: {
    [key: string]: bigint;
  };
  totalForwarded: {
    [key: string]: string;
  };
}
export interface GenesisStateProtoMsg {
  typeUrl: "/noble.forwarding.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  num_of_accounts?: {
    [key: string]: string;
  };
  num_of_forwards?: {
    [key: string]: string;
  };
  total_forwarded?: {
    [key: string]: string;
  };
}
export interface GenesisStateAminoMsg {
  type: "/noble.forwarding.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  num_of_accounts: {
    [key: string]: bigint;
  };
  num_of_forwards: {
    [key: string]: bigint;
  };
  total_forwarded: {
    [key: string]: string;
  };
}
function createBaseGenesisState_NumOfAccountsEntry(): GenesisState_NumOfAccountsEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
export const GenesisState_NumOfAccountsEntry = {
  encode(message: GenesisState_NumOfAccountsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_NumOfAccountsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState_NumOfAccountsEntry>): GenesisState_NumOfAccountsEntry {
    const message = createBaseGenesisState_NumOfAccountsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisState_NumOfAccountsEntryAmino): GenesisState_NumOfAccountsEntry {
    const message = createBaseGenesisState_NumOfAccountsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: GenesisState_NumOfAccountsEntry): GenesisState_NumOfAccountsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_NumOfAccountsEntryAminoMsg): GenesisState_NumOfAccountsEntry {
    return GenesisState_NumOfAccountsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_NumOfAccountsEntryProtoMsg): GenesisState_NumOfAccountsEntry {
    return GenesisState_NumOfAccountsEntry.decode(message.value);
  },
  toProto(message: GenesisState_NumOfAccountsEntry): Uint8Array {
    return GenesisState_NumOfAccountsEntry.encode(message).finish();
  }
};
function createBaseGenesisState_NumOfForwardsEntry(): GenesisState_NumOfForwardsEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
export const GenesisState_NumOfForwardsEntry = {
  encode(message: GenesisState_NumOfForwardsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_NumOfForwardsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState_NumOfForwardsEntry>): GenesisState_NumOfForwardsEntry {
    const message = createBaseGenesisState_NumOfForwardsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisState_NumOfForwardsEntryAmino): GenesisState_NumOfForwardsEntry {
    const message = createBaseGenesisState_NumOfForwardsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: GenesisState_NumOfForwardsEntry): GenesisState_NumOfForwardsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_NumOfForwardsEntryAminoMsg): GenesisState_NumOfForwardsEntry {
    return GenesisState_NumOfForwardsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_NumOfForwardsEntryProtoMsg): GenesisState_NumOfForwardsEntry {
    return GenesisState_NumOfForwardsEntry.decode(message.value);
  },
  toProto(message: GenesisState_NumOfForwardsEntry): Uint8Array {
    return GenesisState_NumOfForwardsEntry.encode(message).finish();
  }
};
function createBaseGenesisState_TotalForwardedEntry(): GenesisState_TotalForwardedEntry {
  return {
    key: "",
    value: ""
  };
}
export const GenesisState_TotalForwardedEntry = {
  encode(message: GenesisState_TotalForwardedEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_TotalForwardedEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<GenesisState_TotalForwardedEntry>): GenesisState_TotalForwardedEntry {
    const message = createBaseGenesisState_TotalForwardedEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: GenesisState_TotalForwardedEntryAmino): GenesisState_TotalForwardedEntry {
    const message = createBaseGenesisState_TotalForwardedEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: GenesisState_TotalForwardedEntry): GenesisState_TotalForwardedEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: GenesisState_TotalForwardedEntryAminoMsg): GenesisState_TotalForwardedEntry {
    return GenesisState_TotalForwardedEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_TotalForwardedEntryProtoMsg): GenesisState_TotalForwardedEntry {
    return GenesisState_TotalForwardedEntry.decode(message.value);
  },
  toProto(message: GenesisState_TotalForwardedEntry): Uint8Array {
    return GenesisState_TotalForwardedEntry.encode(message).finish();
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    numOfAccounts: {},
    numOfForwards: {},
    totalForwarded: {}
  };
}
export const GenesisState = {
  typeUrl: "/noble.forwarding.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.numOfAccounts).forEach(([key, value]) => {
      GenesisState_NumOfAccountsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(8).fork()).ldelim();
    });
    Object.entries(message.numOfForwards).forEach(([key, value]) => {
      GenesisState_NumOfForwardsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(16).fork()).ldelim();
    });
    Object.entries(message.totalForwarded).forEach(([key, value]) => {
      GenesisState_TotalForwardedEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      numOfAccounts: isObject(object.numOfAccounts) ? Object.entries(object.numOfAccounts).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {}) : {},
      numOfForwards: isObject(object.numOfForwards) ? Object.entries(object.numOfForwards).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {}) : {},
      totalForwarded: isObject(object.totalForwarded) ? Object.entries(object.totalForwarded).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.numOfAccounts = Object.entries(object.numOfAccounts ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.numOfForwards = Object.entries(object.numOfForwards ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.totalForwarded = Object.entries(object.totalForwarded ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.numOfAccounts = Object.entries(object.num_of_accounts ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.numOfForwards = Object.entries(object.num_of_forwards ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    message.totalForwarded = Object.entries(object.total_forwarded ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.num_of_accounts = {};
    if (message.numOfAccounts) {
      Object.entries(message.numOfAccounts).forEach(([k, v]) => {
        obj.num_of_accounts[k] = v.toString();
      });
    }
    obj.num_of_forwards = {};
    if (message.numOfForwards) {
      Object.entries(message.numOfForwards).forEach(([k, v]) => {
        obj.num_of_forwards[k] = v.toString();
      });
    }
    obj.total_forwarded = {};
    if (message.totalForwarded) {
      Object.entries(message.totalForwarded).forEach(([k, v]) => {
        obj.total_forwarded[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};