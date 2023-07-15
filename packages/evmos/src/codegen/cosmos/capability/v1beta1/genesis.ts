import { CapabilityOwners, CapabilityOwnersSDKType } from "./capability";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  /** index is the index of the capability owner. */
  index: Long;
  /** index_owners are the owners at the given index. */
  indexOwners?: CapabilityOwners;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
  index: Long;
  index_owners?: CapabilityOwnersSDKType;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** index is the capability global index. */
  index: Long;
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
  index: Long;
  owners: GenesisOwnersSDKType[];
}
function createBaseGenesisOwners(): GenesisOwners {
  return {
    index: Long.UZERO,
    indexOwners: undefined
  };
}
export const GenesisOwners = {
  encode(message: GenesisOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisOwners {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined
    };
  },
  fromPartial(object: Partial<GenesisOwners>): GenesisOwners {
    const message = createBaseGenesisOwners();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? CapabilityOwners.fromPartial(object.indexOwners) : undefined;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    index: Long.UZERO,
    owners: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
    return message;
  }
};