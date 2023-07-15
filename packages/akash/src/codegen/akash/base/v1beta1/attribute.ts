import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Attribute represents key value pair */
export interface Attribute {
  key: string;
  value: string;
}
/** Attribute represents key value pair */
export interface AttributeSDKType {
  key: string;
  value: string;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBy {
  /** all_of all keys in this list must have signed attributes */
  allOf: string[];
  /** any_of at least of of the keys from the list must have signed attributes */
  anyOf: string[];
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBySDKType {
  all_of: string[];
  any_of: string[];
}
/** PlacementRequirements */
export interface PlacementRequirements {
  /** SignedBy list of keys that tenants expect to have signatures from */
  signedBy?: SignedBy;
  /** Attribute list of attributes tenant expects from the provider */
  attributes: Attribute[];
}
/** PlacementRequirements */
export interface PlacementRequirementsSDKType {
  signed_by?: SignedBySDKType;
  attributes: AttributeSDKType[];
}
function createBaseAttribute(): Attribute {
  return {
    key: "",
    value: ""
  };
}
export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): Attribute {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseSignedBy(): SignedBy {
  return {
    allOf: [],
    anyOf: []
  };
}
export const SignedBy = {
  encode(message: SignedBy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allOf) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.anyOf) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): SignedBy {
    return {
      allOf: Array.isArray(object?.allOf) ? object.allOf.map((e: any) => String(e)) : [],
      anyOf: Array.isArray(object?.anyOf) ? object.anyOf.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<SignedBy>): SignedBy {
    const message = createBaseSignedBy();
    message.allOf = object.allOf?.map(e => e) || [];
    message.anyOf = object.anyOf?.map(e => e) || [];
    return message;
  }
};
function createBasePlacementRequirements(): PlacementRequirements {
  return {
    signedBy: undefined,
    attributes: []
  };
}
export const PlacementRequirements = {
  encode(message: PlacementRequirements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedBy !== undefined) {
      SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PlacementRequirements {
    return {
      signedBy: isSet(object.signedBy) ? SignedBy.fromJSON(object.signedBy) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PlacementRequirements>): PlacementRequirements {
    const message = createBasePlacementRequirements();
    message.signedBy = object.signedBy !== undefined && object.signedBy !== null ? SignedBy.fromPartial(object.signedBy) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};