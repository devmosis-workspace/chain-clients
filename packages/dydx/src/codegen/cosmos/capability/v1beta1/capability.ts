import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  index: bigint;
}
export interface CapabilityProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.Capability";
  value: Uint8Array;
}
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilityAmino {
  index: string;
}
export interface CapabilityAminoMsg {
  type: "cosmos-sdk/Capability";
  value: CapabilityAmino;
}
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilitySDKType {
  index: bigint;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
  module: string;
  name: string;
}
export interface OwnerProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.Owner";
  value: Uint8Array;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface OwnerAmino {
  module: string;
  name: string;
}
export interface OwnerAminoMsg {
  type: "cosmos-sdk/Owner";
  value: OwnerAmino;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface OwnerSDKType {
  module: string;
  name: string;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
  owners: Owner[];
}
export interface CapabilityOwnersProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners";
  value: Uint8Array;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwnersAmino {
  owners: OwnerAmino[];
}
export interface CapabilityOwnersAminoMsg {
  type: "cosmos-sdk/CapabilityOwners";
  value: CapabilityOwnersAmino;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwnersSDKType {
  owners: OwnerSDKType[];
}
function createBaseCapability(): Capability {
  return {
    index: BigInt(0)
  };
}
export const Capability = {
  typeUrl: "/cosmos.capability.v1beta1.Capability",
  encode(message: Capability, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  fromJSON(object: any): Capability {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Capability>): Capability {
    const message = createBaseCapability();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CapabilityAmino): Capability {
    return {
      index: BigInt(object.index)
    };
  },
  toAmino(message: Capability): CapabilityAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CapabilityAminoMsg): Capability {
    return Capability.fromAmino(object.value);
  },
  toAminoMsg(message: Capability): CapabilityAminoMsg {
    return {
      type: "cosmos-sdk/Capability",
      value: Capability.toAmino(message)
    };
  },
  fromProtoMsg(message: CapabilityProtoMsg): Capability {
    return Capability.decode(message.value);
  },
  toProto(message: Capability): Uint8Array {
    return Capability.encode(message).finish();
  },
  toProtoMsg(message: Capability): CapabilityProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Capability",
      value: Capability.encode(message).finish()
    };
  }
};
function createBaseOwner(): Owner {
  return {
    module: "",
    name: ""
  };
}
export const Owner = {
  typeUrl: "/cosmos.capability.v1beta1.Owner",
  encode(message: Owner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): Owner {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<Owner>): Owner {
    const message = createBaseOwner();
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: OwnerAmino): Owner {
    return {
      module: object.module,
      name: object.name
    };
  },
  toAmino(message: Owner): OwnerAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: OwnerAminoMsg): Owner {
    return Owner.fromAmino(object.value);
  },
  toAminoMsg(message: Owner): OwnerAminoMsg {
    return {
      type: "cosmos-sdk/Owner",
      value: Owner.toAmino(message)
    };
  },
  fromProtoMsg(message: OwnerProtoMsg): Owner {
    return Owner.decode(message.value);
  },
  toProto(message: Owner): Uint8Array {
    return Owner.encode(message).finish();
  },
  toProtoMsg(message: Owner): OwnerProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Owner",
      value: Owner.encode(message).finish()
    };
  }
};
function createBaseCapabilityOwners(): CapabilityOwners {
  return {
    owners: []
  };
}
export const CapabilityOwners = {
  typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
  encode(message: CapabilityOwners, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.owners) {
      Owner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CapabilityOwners {
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CapabilityOwners>): CapabilityOwners {
    const message = createBaseCapabilityOwners();
    message.owners = object.owners?.map(e => Owner.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CapabilityOwnersAmino): CapabilityOwners {
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromAmino(e)) : []
    };
  },
  toAmino(message: CapabilityOwners): CapabilityOwnersAmino {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? Owner.toAmino(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromAminoMsg(object: CapabilityOwnersAminoMsg): CapabilityOwners {
    return CapabilityOwners.fromAmino(object.value);
  },
  toAminoMsg(message: CapabilityOwners): CapabilityOwnersAminoMsg {
    return {
      type: "cosmos-sdk/CapabilityOwners",
      value: CapabilityOwners.toAmino(message)
    };
  },
  fromProtoMsg(message: CapabilityOwnersProtoMsg): CapabilityOwners {
    return CapabilityOwners.decode(message.value);
  },
  toProto(message: CapabilityOwners): Uint8Array {
    return CapabilityOwners.encode(message).finish();
  },
  toProtoMsg(message: CapabilityOwners): CapabilityOwnersProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
      value: CapabilityOwners.encode(message).finish()
    };
  }
};