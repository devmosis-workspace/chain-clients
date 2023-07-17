import { StringValue, StringValueSDKType } from "../../../google/protobuf/wrappers";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Resource defines a resource owned by an account */
export interface Resource {
  /** URI defines the ID of the resource */
  uri: string;
  /** Resource is the resource */
  resource: string;
}
/** Resource defines a resource owned by an account */
export interface ResourceSDKType {
  uri: string;
  resource: string;
}
/** Domain defines a domain */
export interface Domain {
  /** Name is the name of the domain */
  name: string;
  /** Admin is the owner of the domain */
  admin: Uint8Array;
  broker: Uint8Array;
  /**
   * ValidUntil is a unix timestamp defines the time when the domain will become
   * invalid in seconds
   */
  validUntil: Long;
  /** Type defines the type of the domain */
  type: string;
}
/** Domain defines a domain */
export interface DomainSDKType {
  name: string;
  admin: Uint8Array;
  broker: Uint8Array;
  valid_until: Long;
  type: string;
}
/**
 * Account defines an account that belongs to a domain
 * NOTE: It should not be confused with cosmos-sdk auth account
 * github.com/cosmos/cosmos-sdk/x/auth.Account
 */
export interface Account {
  /** Domain references the domain this account belongs to */
  domain: string;
  /** Name is the name of the account */
  name?: StringValue;
  /** Owner is the address that owns the account */
  owner: Uint8Array;
  /**
   * Broker identifies an entity that facilitated the transaction of the account
   * and can be empty
   */
  broker: Uint8Array;
  /**
   * ValidUntil defines a unix timestamp of the expiration of the account in
   * seconds
   */
  validUntil: Long;
  /** Resources is the list of resources an account resolves to */
  resources: Resource[];
  /**
   * Certificates contains the list of certificates to identify the account
   * owner
   */
  certificates: Uint8Array[];
  /** MetadataURI contains a link to extra information regarding the account */
  metadataUri: string;
}
/**
 * Account defines an account that belongs to a domain
 * NOTE: It should not be confused with cosmos-sdk auth account
 * github.com/cosmos/cosmos-sdk/x/auth.Account
 */
export interface AccountSDKType {
  domain: string;
  name?: StringValueSDKType;
  owner: Uint8Array;
  broker: Uint8Array;
  valid_until: Long;
  resources: ResourceSDKType[];
  certificates: Uint8Array[];
  metadata_uri: string;
}
function createBaseResource(): Resource {
  return {
    uri: "",
    resource: ""
  };
}
export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.resource !== "") {
      writer.uint32(18).string(message.resource);
    }
    return writer;
  },
  fromJSON(object: any): Resource {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      resource: isSet(object.resource) ? String(object.resource) : ""
    };
  },
  fromPartial(object: Partial<Resource>): Resource {
    const message = createBaseResource();
    message.uri = object.uri ?? "";
    message.resource = object.resource ?? "";
    return message;
  }
};
function createBaseDomain(): Domain {
  return {
    name: "",
    admin: new Uint8Array(),
    broker: new Uint8Array(),
    validUntil: Long.ZERO,
    type: ""
  };
}
export const Domain = {
  encode(message: Domain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.admin.length !== 0) {
      writer.uint32(18).bytes(message.admin);
    }
    if (message.broker.length !== 0) {
      writer.uint32(26).bytes(message.broker);
    }
    if (!message.validUntil.isZero()) {
      writer.uint32(32).int64(message.validUntil);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    return writer;
  },
  fromJSON(object: any): Domain {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      admin: isSet(object.admin) ? bytesFromBase64(object.admin) : new Uint8Array(),
      broker: isSet(object.broker) ? bytesFromBase64(object.broker) : new Uint8Array(),
      validUntil: isSet(object.validUntil) ? Long.fromValue(object.validUntil) : Long.ZERO,
      type: isSet(object.type) ? String(object.type) : ""
    };
  },
  fromPartial(object: Partial<Domain>): Domain {
    const message = createBaseDomain();
    message.name = object.name ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.broker = object.broker ?? new Uint8Array();
    message.validUntil = object.validUntil !== undefined && object.validUntil !== null ? Long.fromValue(object.validUntil) : Long.ZERO;
    message.type = object.type ?? "";
    return message;
  }
};
function createBaseAccount(): Account {
  return {
    domain: "",
    name: undefined,
    owner: new Uint8Array(),
    broker: new Uint8Array(),
    validUntil: Long.ZERO,
    resources: [],
    certificates: [],
    metadataUri: ""
  };
}
export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.name !== undefined) {
      StringValue.encode(message.name, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner.length !== 0) {
      writer.uint32(26).bytes(message.owner);
    }
    if (message.broker.length !== 0) {
      writer.uint32(34).bytes(message.broker);
    }
    if (!message.validUntil.isZero()) {
      writer.uint32(40).int64(message.validUntil);
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.certificates) {
      writer.uint32(58).bytes(v!);
    }
    if (message.metadataUri !== "") {
      writer.uint32(66).string(message.metadataUri);
    }
    return writer;
  },
  fromJSON(object: any): Account {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      name: isSet(object.name) ? StringValue.fromJSON(object.name) : undefined,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      broker: isSet(object.broker) ? bytesFromBase64(object.broker) : new Uint8Array(),
      validUntil: isSet(object.validUntil) ? Long.fromValue(object.validUntil) : Long.ZERO,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromJSON(e)) : [],
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => bytesFromBase64(e)) : [],
      metadataUri: isSet(object.metadataUri) ? String(object.metadataUri) : ""
    };
  },
  fromPartial(object: Partial<Account>): Account {
    const message = createBaseAccount();
    message.domain = object.domain ?? "";
    message.name = object.name !== undefined && object.name !== null ? StringValue.fromPartial(object.name) : undefined;
    message.owner = object.owner ?? new Uint8Array();
    message.broker = object.broker ?? new Uint8Array();
    message.validUntil = object.validUntil !== undefined && object.validUntil !== null ? Long.fromValue(object.validUntil) : Long.ZERO;
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    message.certificates = object.certificates?.map(e => e) || [];
    message.metadataUri = object.metadataUri ?? "";
    return message;
  }
};