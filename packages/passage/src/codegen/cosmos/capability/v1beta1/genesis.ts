import { CapabilityOwners, CapabilityOwnersAmino, CapabilityOwnersSDKType } from "./capability";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  /** index is the index of the capability owner. */
  index: bigint;
  /** index_owners are the owners at the given index. */
  indexOwners: CapabilityOwners;
}
export interface GenesisOwnersProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.GenesisOwners";
  value: Uint8Array;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersAmino {
  /** index is the index of the capability owner. */
  index?: string;
  /** index_owners are the owners at the given index. */
  index_owners?: CapabilityOwnersAmino;
}
export interface GenesisOwnersAminoMsg {
  type: "cosmos-sdk/GenesisOwners";
  value: GenesisOwnersAmino;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
  index: bigint;
  index_owners: CapabilityOwnersSDKType;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** index is the capability global index. */
  index: bigint;
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateAmino {
  /** index is the capability global index. */
  index?: string;
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners?: GenesisOwnersAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
  index: bigint;
  owners: GenesisOwnersSDKType[];
}
function createBaseGenesisOwners(): GenesisOwners {
  return {
    index: BigInt(0),
    indexOwners: CapabilityOwners.fromPartial({})
  };
}
export const GenesisOwners = {
  typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
  encode(message: GenesisOwners, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisOwners {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined
    };
  },
  fromPartial(object: Partial<GenesisOwners>): GenesisOwners {
    const message = createBaseGenesisOwners();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? CapabilityOwners.fromPartial(object.indexOwners) : undefined;
    return message;
  },
  fromAmino(object: GenesisOwnersAmino): GenesisOwners {
    const message = createBaseGenesisOwners();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.index_owners !== undefined && object.index_owners !== null) {
      message.indexOwners = CapabilityOwners.fromAmino(object.index_owners);
    }
    return message;
  },
  toAmino(message: GenesisOwners): GenesisOwnersAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    obj.index_owners = message.indexOwners ? CapabilityOwners.toAmino(message.indexOwners) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisOwnersAminoMsg): GenesisOwners {
    return GenesisOwners.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisOwners): GenesisOwnersAminoMsg {
    return {
      type: "cosmos-sdk/GenesisOwners",
      value: GenesisOwners.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisOwnersProtoMsg): GenesisOwners {
    return GenesisOwners.decode(message.value);
  },
  toProto(message: GenesisOwners): Uint8Array {
    return GenesisOwners.encode(message).finish();
  },
  toProtoMsg(message: GenesisOwners): GenesisOwnersProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
      value: GenesisOwners.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    index: BigInt(0),
    owners: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.capability.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    message.owners = object.owners?.map(e => GenesisOwners.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toAmino(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};