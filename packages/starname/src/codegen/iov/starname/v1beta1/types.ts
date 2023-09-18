import { StringValue, StringValueAmino, StringValueSDKType } from "../../../google/protobuf/wrappers";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** Resource defines a resource owned by an account */
export interface Resource {
  /** URI defines the ID of the resource */
  uri: string;
  /** Resource is the resource */
  resource: string;
}
export interface ResourceProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.Resource";
  value: Uint8Array;
}
/** Resource defines a resource owned by an account */
export interface ResourceAmino {
  /** URI defines the ID of the resource */
  uri: string;
  /** Resource is the resource */
  resource: string;
}
export interface ResourceAminoMsg {
  type: "/starnamed.x.starname.v1beta1.Resource";
  value: ResourceAmino;
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
  validUntil: bigint;
  /** Type defines the type of the domain */
  type: string;
}
export interface DomainProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.Domain";
  value: Uint8Array;
}
/** Domain defines a domain */
export interface DomainAmino {
  /** Name is the name of the domain */
  name: string;
  /** Admin is the owner of the domain */
  admin: Uint8Array;
  broker: Uint8Array;
  /**
   * ValidUntil is a unix timestamp defines the time when the domain will become
   * invalid in seconds
   */
  valid_until: string;
  /** Type defines the type of the domain */
  type: string;
}
export interface DomainAminoMsg {
  type: "/starnamed.x.starname.v1beta1.Domain";
  value: DomainAmino;
}
/** Domain defines a domain */
export interface DomainSDKType {
  name: string;
  admin: Uint8Array;
  broker: Uint8Array;
  valid_until: bigint;
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
  name: StringValue;
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
  validUntil: bigint;
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
export interface AccountProtoMsg {
  typeUrl: "/starnamed.x.starname.v1beta1.Account";
  value: Uint8Array;
}
/**
 * Account defines an account that belongs to a domain
 * NOTE: It should not be confused with cosmos-sdk auth account
 * github.com/cosmos/cosmos-sdk/x/auth.Account
 */
export interface AccountAmino {
  /** Domain references the domain this account belongs to */
  domain: string;
  /** Name is the name of the account */
  name?: StringValueAmino;
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
  valid_until: string;
  /** Resources is the list of resources an account resolves to */
  resources: ResourceAmino[];
  /**
   * Certificates contains the list of certificates to identify the account
   * owner
   */
  certificates: Uint8Array[];
  /** MetadataURI contains a link to extra information regarding the account */
  metadata_uri: string;
}
export interface AccountAminoMsg {
  type: "/starnamed.x.starname.v1beta1.Account";
  value: AccountAmino;
}
/**
 * Account defines an account that belongs to a domain
 * NOTE: It should not be confused with cosmos-sdk auth account
 * github.com/cosmos/cosmos-sdk/x/auth.Account
 */
export interface AccountSDKType {
  domain: string;
  name: StringValueSDKType;
  owner: Uint8Array;
  broker: Uint8Array;
  valid_until: bigint;
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
  typeUrl: "/starnamed.x.starname.v1beta1.Resource",
  encode(message: Resource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ResourceAmino): Resource {
    return {
      uri: object.uri,
      resource: object.resource
    };
  },
  toAmino(message: Resource): ResourceAmino {
    const obj: any = {};
    obj.uri = message.uri;
    obj.resource = message.resource;
    return obj;
  },
  fromAminoMsg(object: ResourceAminoMsg): Resource {
    return Resource.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceProtoMsg): Resource {
    return Resource.decode(message.value);
  },
  toProto(message: Resource): Uint8Array {
    return Resource.encode(message).finish();
  },
  toProtoMsg(message: Resource): ResourceProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.Resource",
      value: Resource.encode(message).finish()
    };
  }
};
function createBaseDomain(): Domain {
  return {
    name: "",
    admin: new Uint8Array(),
    broker: new Uint8Array(),
    validUntil: BigInt(0),
    type: ""
  };
}
export const Domain = {
  typeUrl: "/starnamed.x.starname.v1beta1.Domain",
  encode(message: Domain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.admin.length !== 0) {
      writer.uint32(18).bytes(message.admin);
    }
    if (message.broker.length !== 0) {
      writer.uint32(26).bytes(message.broker);
    }
    if (message.validUntil !== BigInt(0)) {
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
      validUntil: isSet(object.validUntil) ? BigInt(object.validUntil.toString()) : BigInt(0),
      type: isSet(object.type) ? String(object.type) : ""
    };
  },
  fromPartial(object: Partial<Domain>): Domain {
    const message = createBaseDomain();
    message.name = object.name ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.broker = object.broker ?? new Uint8Array();
    message.validUntil = object.validUntil !== undefined && object.validUntil !== null ? BigInt(object.validUntil.toString()) : BigInt(0);
    message.type = object.type ?? "";
    return message;
  },
  fromAmino(object: DomainAmino): Domain {
    return {
      name: object.name,
      admin: object.admin,
      broker: object.broker,
      validUntil: BigInt(object.valid_until),
      type: object.type
    };
  },
  toAmino(message: Domain): DomainAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.admin = message.admin;
    obj.broker = message.broker;
    obj.valid_until = message.validUntil ? message.validUntil.toString() : undefined;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: DomainAminoMsg): Domain {
    return Domain.fromAmino(object.value);
  },
  fromProtoMsg(message: DomainProtoMsg): Domain {
    return Domain.decode(message.value);
  },
  toProto(message: Domain): Uint8Array {
    return Domain.encode(message).finish();
  },
  toProtoMsg(message: Domain): DomainProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.Domain",
      value: Domain.encode(message).finish()
    };
  }
};
function createBaseAccount(): Account {
  return {
    domain: "",
    name: StringValue.fromPartial({}),
    owner: new Uint8Array(),
    broker: new Uint8Array(),
    validUntil: BigInt(0),
    resources: [],
    certificates: [],
    metadataUri: ""
  };
}
export const Account = {
  typeUrl: "/starnamed.x.starname.v1beta1.Account",
  encode(message: Account, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.validUntil !== BigInt(0)) {
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
      validUntil: isSet(object.validUntil) ? BigInt(object.validUntil.toString()) : BigInt(0),
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
    message.validUntil = object.validUntil !== undefined && object.validUntil !== null ? BigInt(object.validUntil.toString()) : BigInt(0);
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    message.certificates = object.certificates?.map(e => e) || [];
    message.metadataUri = object.metadataUri ?? "";
    return message;
  },
  fromAmino(object: AccountAmino): Account {
    return {
      domain: object.domain,
      name: object?.name ? StringValue.fromAmino(object.name) : undefined,
      owner: object.owner,
      broker: object.broker,
      validUntil: BigInt(object.valid_until),
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromAmino(e)) : [],
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => e) : [],
      metadataUri: object.metadata_uri
    };
  },
  toAmino(message: Account): AccountAmino {
    const obj: any = {};
    obj.domain = message.domain;
    obj.name = message.name ? StringValue.toAmino(message.name) : undefined;
    obj.owner = message.owner;
    obj.broker = message.broker;
    obj.valid_until = message.validUntil ? message.validUntil.toString() : undefined;
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toAmino(e) : undefined);
    } else {
      obj.resources = [];
    }
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e);
    } else {
      obj.certificates = [];
    }
    obj.metadata_uri = message.metadataUri;
    return obj;
  },
  fromAminoMsg(object: AccountAminoMsg): Account {
    return Account.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountProtoMsg): Account {
    return Account.decode(message.value);
  },
  toProto(message: Account): Uint8Array {
    return Account.encode(message).finish();
  },
  toProtoMsg(message: Account): AccountProtoMsg {
    return {
      typeUrl: "/starnamed.x.starname.v1beta1.Account",
      value: Account.encode(message).finish()
    };
  }
};