import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  index: Long;
}
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilitySDKType {
  index: Long;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
  module: string;
  name: string;
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
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwnersSDKType {
  owners: OwnerSDKType[];
}
function createBaseCapability(): Capability {
  return {
    index: Long.UZERO
  };
}
export const Capability = {
  encode(message: Capability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  fromJSON(object: any): Capability {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Capability>): Capability {
    const message = createBaseCapability();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  }
};
function createBaseOwner(): Owner {
  return {
    module: "",
    name: ""
  };
}
export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCapabilityOwners(): CapabilityOwners {
  return {
    owners: []
  };
}
export const CapabilityOwners = {
  encode(message: CapabilityOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};