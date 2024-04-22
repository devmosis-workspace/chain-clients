import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** for a given PublisherIntent, whether or not it is pulled or pushed */
export enum PublishMethod {
  /** PULL - subscribers should pull from the provided URL */
  PULL = 0,
  /** PUSH - subscribers must provide a URL to receive push messages */
  PUSH = 1,
  UNRECOGNIZED = -1,
}
export const PublishMethodSDKType = PublishMethod;
export const PublishMethodAmino = PublishMethod;
export function publishMethodFromJSON(object: any): PublishMethod {
  switch (object) {
    case 0:
    case "PULL":
      return PublishMethod.PULL;
    case 1:
    case "PUSH":
      return PublishMethod.PUSH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PublishMethod.UNRECOGNIZED;
  }
}
export function publishMethodToJSON(object: PublishMethod): string {
  switch (object) {
    case PublishMethod.PULL:
      return "PULL";
    case PublishMethod.PUSH:
      return "PUSH";
    case PublishMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** for a given PublisherIntent, determines what types of subscribers may subscribe */
export enum AllowedSubscribers {
  /** ANY - any valid account address */
  ANY = 0,
  /** VALIDATORS - account address must map to a validator in the active validator set */
  VALIDATORS = 1,
  /** LIST - a specific list of account addresses */
  LIST = 2,
  UNRECOGNIZED = -1,
}
export const AllowedSubscribersSDKType = AllowedSubscribers;
export const AllowedSubscribersAmino = AllowedSubscribers;
export function allowedSubscribersFromJSON(object: any): AllowedSubscribers {
  switch (object) {
    case 0:
    case "ANY":
      return AllowedSubscribers.ANY;
    case 1:
    case "VALIDATORS":
      return AllowedSubscribers.VALIDATORS;
    case 2:
    case "LIST":
      return AllowedSubscribers.LIST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AllowedSubscribers.UNRECOGNIZED;
  }
}
export function allowedSubscribersToJSON(object: AllowedSubscribers): string {
  switch (object) {
    case AllowedSubscribers.ANY:
      return "ANY";
    case AllowedSubscribers.VALIDATORS:
      return "VALIDATORS";
    case AllowedSubscribers.LIST:
      return "LIST";
    case AllowedSubscribers.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** represents a publisher, which are added via governance */
export interface Publisher {
  /** account address of the publisher */
  address: string;
  /** unique key, FQDN of the publisher, max length of 256 */
  domain: string;
  /** the publisher's self-signed CA cert PEM file, expecting TLS 1.3 compatible ECDSA certificates, max length 4096 */
  caCert: string;
}
export interface PublisherProtoMsg {
  typeUrl: "/pubsub.v1.Publisher";
  value: Uint8Array;
}
/** represents a publisher, which are added via governance */
export interface PublisherAmino {
  /** account address of the publisher */
  address?: string;
  /** unique key, FQDN of the publisher, max length of 256 */
  domain?: string;
  /** the publisher's self-signed CA cert PEM file, expecting TLS 1.3 compatible ECDSA certificates, max length 4096 */
  ca_cert?: string;
}
export interface PublisherAminoMsg {
  type: "/pubsub.v1.Publisher";
  value: PublisherAmino;
}
/** represents a publisher, which are added via governance */
export interface PublisherSDKType {
  address: string;
  domain: string;
  ca_cert: string;
}
/** represents a subscriber, can be set or modified by the owner of the subscriber address */
export interface Subscriber {
  /** unique key, account address representation of either an account or a validator */
  address: string;
  /** the subscriber's self-signed CA cert PEM file, expecting TLS 1.3 compatible ECDSA certificates, max length 4096 */
  caCert: string;
  /** max length of 512 */
  pushUrl: string;
}
export interface SubscriberProtoMsg {
  typeUrl: "/pubsub.v1.Subscriber";
  value: Uint8Array;
}
/** represents a subscriber, can be set or modified by the owner of the subscriber address */
export interface SubscriberAmino {
  /** unique key, account address representation of either an account or a validator */
  address?: string;
  /** the subscriber's self-signed CA cert PEM file, expecting TLS 1.3 compatible ECDSA certificates, max length 4096 */
  ca_cert?: string;
  /** max length of 512 */
  push_url?: string;
}
export interface SubscriberAminoMsg {
  type: "/pubsub.v1.Subscriber";
  value: SubscriberAmino;
}
/** represents a subscriber, can be set or modified by the owner of the subscriber address */
export interface SubscriberSDKType {
  address: string;
  ca_cert: string;
  push_url: string;
}
/** represents a publisher committing to sending messages for a specific subscription ID */
export interface PublisherIntent {
  /** arbitary string representing a subscription, max length of 128 */
  subscriptionId: string;
  /** FQDN of the publisher, max length of 256 */
  publisherDomain: string;
  /** either PULL or PUSH (see enum above for details) */
  method: PublishMethod;
  /** optional, only needs to be set if using the PULL method, max length of 512 */
  pullUrl: string;
  /** either ANY, VALIDATORS, or LIST (see enum above for details) */
  allowedSubscribers: AllowedSubscribers;
  /** optional, must be provided if allowed_subscribers is LIST, list of account addresses, max length 256 */
  allowedAddresses: string[];
}
export interface PublisherIntentProtoMsg {
  typeUrl: "/pubsub.v1.PublisherIntent";
  value: Uint8Array;
}
/** represents a publisher committing to sending messages for a specific subscription ID */
export interface PublisherIntentAmino {
  /** arbitary string representing a subscription, max length of 128 */
  subscription_id?: string;
  /** FQDN of the publisher, max length of 256 */
  publisher_domain?: string;
  /** either PULL or PUSH (see enum above for details) */
  method?: PublishMethod;
  /** optional, only needs to be set if using the PULL method, max length of 512 */
  pull_url?: string;
  /** either ANY, VALIDATORS, or LIST (see enum above for details) */
  allowed_subscribers?: AllowedSubscribers;
  /** optional, must be provided if allowed_subscribers is LIST, list of account addresses, max length 256 */
  allowed_addresses?: string[];
}
export interface PublisherIntentAminoMsg {
  type: "/pubsub.v1.PublisherIntent";
  value: PublisherIntentAmino;
}
/** represents a publisher committing to sending messages for a specific subscription ID */
export interface PublisherIntentSDKType {
  subscription_id: string;
  publisher_domain: string;
  method: PublishMethod;
  pull_url: string;
  allowed_subscribers: AllowedSubscribers;
  allowed_addresses: string[];
}
/** represents a subscriber requesting messages for a specific subscription ID and publisher */
export interface SubscriberIntent {
  /** arbitary string representing a subscription, max length of 128 */
  subscriptionId: string;
  /** account address of the subscriber */
  subscriberAddress: string;
  /** FQDN of the publisher, max length of 256 */
  publisherDomain: string;
}
export interface SubscriberIntentProtoMsg {
  typeUrl: "/pubsub.v1.SubscriberIntent";
  value: Uint8Array;
}
/** represents a subscriber requesting messages for a specific subscription ID and publisher */
export interface SubscriberIntentAmino {
  /** arbitary string representing a subscription, max length of 128 */
  subscription_id?: string;
  /** account address of the subscriber */
  subscriber_address?: string;
  /** FQDN of the publisher, max length of 256 */
  publisher_domain?: string;
}
export interface SubscriberIntentAminoMsg {
  type: "/pubsub.v1.SubscriberIntent";
  value: SubscriberIntentAmino;
}
/** represents a subscriber requesting messages for a specific subscription ID and publisher */
export interface SubscriberIntentSDKType {
  subscription_id: string;
  subscriber_address: string;
  publisher_domain: string;
}
/** represents a default subscription voted in by governance that can be overridden by a subscriber */
export interface DefaultSubscription {
  /** arbitary string representing a subscription, max length of 128 */
  subscriptionId: string;
  /** FQDN of the publisher, max length of 256 */
  publisherDomain: string;
}
export interface DefaultSubscriptionProtoMsg {
  typeUrl: "/pubsub.v1.DefaultSubscription";
  value: Uint8Array;
}
/** represents a default subscription voted in by governance that can be overridden by a subscriber */
export interface DefaultSubscriptionAmino {
  /** arbitary string representing a subscription, max length of 128 */
  subscription_id?: string;
  /** FQDN of the publisher, max length of 256 */
  publisher_domain?: string;
}
export interface DefaultSubscriptionAminoMsg {
  type: "/pubsub.v1.DefaultSubscription";
  value: DefaultSubscriptionAmino;
}
/** represents a default subscription voted in by governance that can be overridden by a subscriber */
export interface DefaultSubscriptionSDKType {
  subscription_id: string;
  publisher_domain: string;
}
/**
 * governance proposal to add a publisher, with domain, adress, and ca_cert the same as the Publisher type
 * proof URL expected in the format: https://<domain>/<address>/cacert.pem and serving cacert.pem matching ca_cert
 */
export interface AddPublisherProposal {
  title: string;
  description: string;
  domain: string;
  address: string;
  proofUrl: string;
  caCert: string;
}
export interface AddPublisherProposalProtoMsg {
  typeUrl: "/pubsub.v1.AddPublisherProposal";
  value: Uint8Array;
}
/**
 * governance proposal to add a publisher, with domain, adress, and ca_cert the same as the Publisher type
 * proof URL expected in the format: https://<domain>/<address>/cacert.pem and serving cacert.pem matching ca_cert
 */
export interface AddPublisherProposalAmino {
  title?: string;
  description?: string;
  domain?: string;
  address?: string;
  proof_url?: string;
  ca_cert?: string;
}
export interface AddPublisherProposalAminoMsg {
  type: "/pubsub.v1.AddPublisherProposal";
  value: AddPublisherProposalAmino;
}
/**
 * governance proposal to add a publisher, with domain, adress, and ca_cert the same as the Publisher type
 * proof URL expected in the format: https://<domain>/<address>/cacert.pem and serving cacert.pem matching ca_cert
 */
export interface AddPublisherProposalSDKType {
  title: string;
  description: string;
  domain: string;
  address: string;
  proof_url: string;
  ca_cert: string;
}
export interface AddPublisherProposalWithDeposit {
  title: string;
  description: string;
  domain: string;
  address: string;
  proofUrl: string;
  caCert: string;
  deposit: string;
}
export interface AddPublisherProposalWithDepositProtoMsg {
  typeUrl: "/pubsub.v1.AddPublisherProposalWithDeposit";
  value: Uint8Array;
}
export interface AddPublisherProposalWithDepositAmino {
  title?: string;
  description?: string;
  domain?: string;
  address?: string;
  proof_url?: string;
  ca_cert?: string;
  deposit?: string;
}
export interface AddPublisherProposalWithDepositAminoMsg {
  type: "/pubsub.v1.AddPublisherProposalWithDeposit";
  value: AddPublisherProposalWithDepositAmino;
}
export interface AddPublisherProposalWithDepositSDKType {
  title: string;
  description: string;
  domain: string;
  address: string;
  proof_url: string;
  ca_cert: string;
  deposit: string;
}
/**
 * governance proposal to remove a publisher (publishers can remove themselves, but this might be necessary in the
 * event of a malicious publisher or a key compromise), since Publishers are unique by domain, it's the only
 * necessary information to remove one
 */
export interface RemovePublisherProposal {
  title: string;
  description: string;
  domain: string;
}
export interface RemovePublisherProposalProtoMsg {
  typeUrl: "/pubsub.v1.RemovePublisherProposal";
  value: Uint8Array;
}
/**
 * governance proposal to remove a publisher (publishers can remove themselves, but this might be necessary in the
 * event of a malicious publisher or a key compromise), since Publishers are unique by domain, it's the only
 * necessary information to remove one
 */
export interface RemovePublisherProposalAmino {
  title?: string;
  description?: string;
  domain?: string;
}
export interface RemovePublisherProposalAminoMsg {
  type: "/pubsub.v1.RemovePublisherProposal";
  value: RemovePublisherProposalAmino;
}
/**
 * governance proposal to remove a publisher (publishers can remove themselves, but this might be necessary in the
 * event of a malicious publisher or a key compromise), since Publishers are unique by domain, it's the only
 * necessary information to remove one
 */
export interface RemovePublisherProposalSDKType {
  title: string;
  description: string;
  domain: string;
}
export interface RemovePublisherProposalWithDeposit {
  title: string;
  description: string;
  domain: string;
  deposit: string;
}
export interface RemovePublisherProposalWithDepositProtoMsg {
  typeUrl: "/pubsub.v1.RemovePublisherProposalWithDeposit";
  value: Uint8Array;
}
export interface RemovePublisherProposalWithDepositAmino {
  title?: string;
  description?: string;
  domain?: string;
  deposit?: string;
}
export interface RemovePublisherProposalWithDepositAminoMsg {
  type: "/pubsub.v1.RemovePublisherProposalWithDeposit";
  value: RemovePublisherProposalWithDepositAmino;
}
export interface RemovePublisherProposalWithDepositSDKType {
  title: string;
  description: string;
  domain: string;
  deposit: string;
}
/**
 * set the default publisher for a given subscription ID
 * these can be overridden by the client
 */
export interface AddDefaultSubscriptionProposal {
  title: string;
  description: string;
  subscriptionId: string;
  publisherDomain: string;
}
export interface AddDefaultSubscriptionProposalProtoMsg {
  typeUrl: "/pubsub.v1.AddDefaultSubscriptionProposal";
  value: Uint8Array;
}
/**
 * set the default publisher for a given subscription ID
 * these can be overridden by the client
 */
export interface AddDefaultSubscriptionProposalAmino {
  title?: string;
  description?: string;
  subscription_id?: string;
  publisher_domain?: string;
}
export interface AddDefaultSubscriptionProposalAminoMsg {
  type: "/pubsub.v1.AddDefaultSubscriptionProposal";
  value: AddDefaultSubscriptionProposalAmino;
}
/**
 * set the default publisher for a given subscription ID
 * these can be overridden by the client
 */
export interface AddDefaultSubscriptionProposalSDKType {
  title: string;
  description: string;
  subscription_id: string;
  publisher_domain: string;
}
export interface AddDefaultSubscriptionProposalWithDeposit {
  title: string;
  description: string;
  subscriptionId: string;
  publisherDomain: string;
  deposit: string;
}
export interface AddDefaultSubscriptionProposalWithDepositProtoMsg {
  typeUrl: "/pubsub.v1.AddDefaultSubscriptionProposalWithDeposit";
  value: Uint8Array;
}
export interface AddDefaultSubscriptionProposalWithDepositAmino {
  title?: string;
  description?: string;
  subscription_id?: string;
  publisher_domain?: string;
  deposit?: string;
}
export interface AddDefaultSubscriptionProposalWithDepositAminoMsg {
  type: "/pubsub.v1.AddDefaultSubscriptionProposalWithDeposit";
  value: AddDefaultSubscriptionProposalWithDepositAmino;
}
export interface AddDefaultSubscriptionProposalWithDepositSDKType {
  title: string;
  description: string;
  subscription_id: string;
  publisher_domain: string;
  deposit: string;
}
/** remove a default subscription */
export interface RemoveDefaultSubscriptionProposal {
  title: string;
  description: string;
  subscriptionId: string;
}
export interface RemoveDefaultSubscriptionProposalProtoMsg {
  typeUrl: "/pubsub.v1.RemoveDefaultSubscriptionProposal";
  value: Uint8Array;
}
/** remove a default subscription */
export interface RemoveDefaultSubscriptionProposalAmino {
  title?: string;
  description?: string;
  subscription_id?: string;
}
export interface RemoveDefaultSubscriptionProposalAminoMsg {
  type: "/pubsub.v1.RemoveDefaultSubscriptionProposal";
  value: RemoveDefaultSubscriptionProposalAmino;
}
/** remove a default subscription */
export interface RemoveDefaultSubscriptionProposalSDKType {
  title: string;
  description: string;
  subscription_id: string;
}
export interface RemoveDefaultSubscriptionProposalWithDeposit {
  title: string;
  description: string;
  subscriptionId: string;
  deposit: string;
}
export interface RemoveDefaultSubscriptionProposalWithDepositProtoMsg {
  typeUrl: "/pubsub.v1.RemoveDefaultSubscriptionProposalWithDeposit";
  value: Uint8Array;
}
export interface RemoveDefaultSubscriptionProposalWithDepositAmino {
  title?: string;
  description?: string;
  subscription_id?: string;
  deposit?: string;
}
export interface RemoveDefaultSubscriptionProposalWithDepositAminoMsg {
  type: "/pubsub.v1.RemoveDefaultSubscriptionProposalWithDeposit";
  value: RemoveDefaultSubscriptionProposalWithDepositAmino;
}
export interface RemoveDefaultSubscriptionProposalWithDepositSDKType {
  title: string;
  description: string;
  subscription_id: string;
  deposit: string;
}
function createBasePublisher(): Publisher {
  return {
    address: "",
    domain: "",
    caCert: ""
  };
}
export const Publisher = {
  typeUrl: "/pubsub.v1.Publisher",
  encode(message: Publisher, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    if (message.caCert !== "") {
      writer.uint32(26).string(message.caCert);
    }
    return writer;
  },
  fromJSON(object: any): Publisher {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      caCert: isSet(object.caCert) ? String(object.caCert) : ""
    };
  },
  fromPartial(object: Partial<Publisher>): Publisher {
    const message = createBasePublisher();
    message.address = object.address ?? "";
    message.domain = object.domain ?? "";
    message.caCert = object.caCert ?? "";
    return message;
  },
  fromAmino(object: PublisherAmino): Publisher {
    const message = createBasePublisher();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.ca_cert !== undefined && object.ca_cert !== null) {
      message.caCert = object.ca_cert;
    }
    return message;
  },
  toAmino(message: Publisher): PublisherAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.domain = message.domain;
    obj.ca_cert = message.caCert;
    return obj;
  },
  fromAminoMsg(object: PublisherAminoMsg): Publisher {
    return Publisher.fromAmino(object.value);
  },
  fromProtoMsg(message: PublisherProtoMsg): Publisher {
    return Publisher.decode(message.value);
  },
  toProto(message: Publisher): Uint8Array {
    return Publisher.encode(message).finish();
  },
  toProtoMsg(message: Publisher): PublisherProtoMsg {
    return {
      typeUrl: "/pubsub.v1.Publisher",
      value: Publisher.encode(message).finish()
    };
  }
};
function createBaseSubscriber(): Subscriber {
  return {
    address: "",
    caCert: "",
    pushUrl: ""
  };
}
export const Subscriber = {
  typeUrl: "/pubsub.v1.Subscriber",
  encode(message: Subscriber, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.caCert !== "") {
      writer.uint32(18).string(message.caCert);
    }
    if (message.pushUrl !== "") {
      writer.uint32(26).string(message.pushUrl);
    }
    return writer;
  },
  fromJSON(object: any): Subscriber {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      caCert: isSet(object.caCert) ? String(object.caCert) : "",
      pushUrl: isSet(object.pushUrl) ? String(object.pushUrl) : ""
    };
  },
  fromPartial(object: Partial<Subscriber>): Subscriber {
    const message = createBaseSubscriber();
    message.address = object.address ?? "";
    message.caCert = object.caCert ?? "";
    message.pushUrl = object.pushUrl ?? "";
    return message;
  },
  fromAmino(object: SubscriberAmino): Subscriber {
    const message = createBaseSubscriber();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.ca_cert !== undefined && object.ca_cert !== null) {
      message.caCert = object.ca_cert;
    }
    if (object.push_url !== undefined && object.push_url !== null) {
      message.pushUrl = object.push_url;
    }
    return message;
  },
  toAmino(message: Subscriber): SubscriberAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.ca_cert = message.caCert;
    obj.push_url = message.pushUrl;
    return obj;
  },
  fromAminoMsg(object: SubscriberAminoMsg): Subscriber {
    return Subscriber.fromAmino(object.value);
  },
  fromProtoMsg(message: SubscriberProtoMsg): Subscriber {
    return Subscriber.decode(message.value);
  },
  toProto(message: Subscriber): Uint8Array {
    return Subscriber.encode(message).finish();
  },
  toProtoMsg(message: Subscriber): SubscriberProtoMsg {
    return {
      typeUrl: "/pubsub.v1.Subscriber",
      value: Subscriber.encode(message).finish()
    };
  }
};
function createBasePublisherIntent(): PublisherIntent {
  return {
    subscriptionId: "",
    publisherDomain: "",
    method: 0,
    pullUrl: "",
    allowedSubscribers: 0,
    allowedAddresses: []
  };
}
export const PublisherIntent = {
  typeUrl: "/pubsub.v1.PublisherIntent",
  encode(message: PublisherIntent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    if (message.publisherDomain !== "") {
      writer.uint32(18).string(message.publisherDomain);
    }
    if (message.method !== 0) {
      writer.uint32(24).int32(message.method);
    }
    if (message.pullUrl !== "") {
      writer.uint32(34).string(message.pullUrl);
    }
    if (message.allowedSubscribers !== 0) {
      writer.uint32(40).int32(message.allowedSubscribers);
    }
    for (const v of message.allowedAddresses) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): PublisherIntent {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : "",
      method: isSet(object.method) ? publishMethodFromJSON(object.method) : -1,
      pullUrl: isSet(object.pullUrl) ? String(object.pullUrl) : "",
      allowedSubscribers: isSet(object.allowedSubscribers) ? allowedSubscribersFromJSON(object.allowedSubscribers) : -1,
      allowedAddresses: Array.isArray(object?.allowedAddresses) ? object.allowedAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<PublisherIntent>): PublisherIntent {
    const message = createBasePublisherIntent();
    message.subscriptionId = object.subscriptionId ?? "";
    message.publisherDomain = object.publisherDomain ?? "";
    message.method = object.method ?? 0;
    message.pullUrl = object.pullUrl ?? "";
    message.allowedSubscribers = object.allowedSubscribers ?? 0;
    message.allowedAddresses = object.allowedAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PublisherIntentAmino): PublisherIntent {
    const message = createBasePublisherIntent();
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = publishMethodFromJSON(object.method);
    }
    if (object.pull_url !== undefined && object.pull_url !== null) {
      message.pullUrl = object.pull_url;
    }
    if (object.allowed_subscribers !== undefined && object.allowed_subscribers !== null) {
      message.allowedSubscribers = allowedSubscribersFromJSON(object.allowed_subscribers);
    }
    message.allowedAddresses = object.allowed_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: PublisherIntent): PublisherIntentAmino {
    const obj: any = {};
    obj.subscription_id = message.subscriptionId;
    obj.publisher_domain = message.publisherDomain;
    obj.method = message.method;
    obj.pull_url = message.pullUrl;
    obj.allowed_subscribers = message.allowedSubscribers;
    if (message.allowedAddresses) {
      obj.allowed_addresses = message.allowedAddresses.map(e => e);
    } else {
      obj.allowed_addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: PublisherIntentAminoMsg): PublisherIntent {
    return PublisherIntent.fromAmino(object.value);
  },
  fromProtoMsg(message: PublisherIntentProtoMsg): PublisherIntent {
    return PublisherIntent.decode(message.value);
  },
  toProto(message: PublisherIntent): Uint8Array {
    return PublisherIntent.encode(message).finish();
  },
  toProtoMsg(message: PublisherIntent): PublisherIntentProtoMsg {
    return {
      typeUrl: "/pubsub.v1.PublisherIntent",
      value: PublisherIntent.encode(message).finish()
    };
  }
};
function createBaseSubscriberIntent(): SubscriberIntent {
  return {
    subscriptionId: "",
    subscriberAddress: "",
    publisherDomain: ""
  };
}
export const SubscriberIntent = {
  typeUrl: "/pubsub.v1.SubscriberIntent",
  encode(message: SubscriberIntent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    if (message.subscriberAddress !== "") {
      writer.uint32(18).string(message.subscriberAddress);
    }
    if (message.publisherDomain !== "") {
      writer.uint32(26).string(message.publisherDomain);
    }
    return writer;
  },
  fromJSON(object: any): SubscriberIntent {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      subscriberAddress: isSet(object.subscriberAddress) ? String(object.subscriberAddress) : "",
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : ""
    };
  },
  fromPartial(object: Partial<SubscriberIntent>): SubscriberIntent {
    const message = createBaseSubscriberIntent();
    message.subscriptionId = object.subscriptionId ?? "";
    message.subscriberAddress = object.subscriberAddress ?? "";
    message.publisherDomain = object.publisherDomain ?? "";
    return message;
  },
  fromAmino(object: SubscriberIntentAmino): SubscriberIntent {
    const message = createBaseSubscriberIntent();
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    if (object.subscriber_address !== undefined && object.subscriber_address !== null) {
      message.subscriberAddress = object.subscriber_address;
    }
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    return message;
  },
  toAmino(message: SubscriberIntent): SubscriberIntentAmino {
    const obj: any = {};
    obj.subscription_id = message.subscriptionId;
    obj.subscriber_address = message.subscriberAddress;
    obj.publisher_domain = message.publisherDomain;
    return obj;
  },
  fromAminoMsg(object: SubscriberIntentAminoMsg): SubscriberIntent {
    return SubscriberIntent.fromAmino(object.value);
  },
  fromProtoMsg(message: SubscriberIntentProtoMsg): SubscriberIntent {
    return SubscriberIntent.decode(message.value);
  },
  toProto(message: SubscriberIntent): Uint8Array {
    return SubscriberIntent.encode(message).finish();
  },
  toProtoMsg(message: SubscriberIntent): SubscriberIntentProtoMsg {
    return {
      typeUrl: "/pubsub.v1.SubscriberIntent",
      value: SubscriberIntent.encode(message).finish()
    };
  }
};
function createBaseDefaultSubscription(): DefaultSubscription {
  return {
    subscriptionId: "",
    publisherDomain: ""
  };
}
export const DefaultSubscription = {
  typeUrl: "/pubsub.v1.DefaultSubscription",
  encode(message: DefaultSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    if (message.publisherDomain !== "") {
      writer.uint32(18).string(message.publisherDomain);
    }
    return writer;
  },
  fromJSON(object: any): DefaultSubscription {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : ""
    };
  },
  fromPartial(object: Partial<DefaultSubscription>): DefaultSubscription {
    const message = createBaseDefaultSubscription();
    message.subscriptionId = object.subscriptionId ?? "";
    message.publisherDomain = object.publisherDomain ?? "";
    return message;
  },
  fromAmino(object: DefaultSubscriptionAmino): DefaultSubscription {
    const message = createBaseDefaultSubscription();
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    return message;
  },
  toAmino(message: DefaultSubscription): DefaultSubscriptionAmino {
    const obj: any = {};
    obj.subscription_id = message.subscriptionId;
    obj.publisher_domain = message.publisherDomain;
    return obj;
  },
  fromAminoMsg(object: DefaultSubscriptionAminoMsg): DefaultSubscription {
    return DefaultSubscription.fromAmino(object.value);
  },
  fromProtoMsg(message: DefaultSubscriptionProtoMsg): DefaultSubscription {
    return DefaultSubscription.decode(message.value);
  },
  toProto(message: DefaultSubscription): Uint8Array {
    return DefaultSubscription.encode(message).finish();
  },
  toProtoMsg(message: DefaultSubscription): DefaultSubscriptionProtoMsg {
    return {
      typeUrl: "/pubsub.v1.DefaultSubscription",
      value: DefaultSubscription.encode(message).finish()
    };
  }
};
function createBaseAddPublisherProposal(): AddPublisherProposal {
  return {
    title: "",
    description: "",
    domain: "",
    address: "",
    proofUrl: "",
    caCert: ""
  };
}
export const AddPublisherProposal = {
  typeUrl: "/pubsub.v1.AddPublisherProposal",
  encode(message: AddPublisherProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.proofUrl !== "") {
      writer.uint32(42).string(message.proofUrl);
    }
    if (message.caCert !== "") {
      writer.uint32(50).string(message.caCert);
    }
    return writer;
  },
  fromJSON(object: any): AddPublisherProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      address: isSet(object.address) ? String(object.address) : "",
      proofUrl: isSet(object.proofUrl) ? String(object.proofUrl) : "",
      caCert: isSet(object.caCert) ? String(object.caCert) : ""
    };
  },
  fromPartial(object: Partial<AddPublisherProposal>): AddPublisherProposal {
    const message = createBaseAddPublisherProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.domain = object.domain ?? "";
    message.address = object.address ?? "";
    message.proofUrl = object.proofUrl ?? "";
    message.caCert = object.caCert ?? "";
    return message;
  },
  fromAmino(object: AddPublisherProposalAmino): AddPublisherProposal {
    const message = createBaseAddPublisherProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.proof_url !== undefined && object.proof_url !== null) {
      message.proofUrl = object.proof_url;
    }
    if (object.ca_cert !== undefined && object.ca_cert !== null) {
      message.caCert = object.ca_cert;
    }
    return message;
  },
  toAmino(message: AddPublisherProposal): AddPublisherProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.domain = message.domain;
    obj.address = message.address;
    obj.proof_url = message.proofUrl;
    obj.ca_cert = message.caCert;
    return obj;
  },
  fromAminoMsg(object: AddPublisherProposalAminoMsg): AddPublisherProposal {
    return AddPublisherProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddPublisherProposalProtoMsg): AddPublisherProposal {
    return AddPublisherProposal.decode(message.value);
  },
  toProto(message: AddPublisherProposal): Uint8Array {
    return AddPublisherProposal.encode(message).finish();
  },
  toProtoMsg(message: AddPublisherProposal): AddPublisherProposalProtoMsg {
    return {
      typeUrl: "/pubsub.v1.AddPublisherProposal",
      value: AddPublisherProposal.encode(message).finish()
    };
  }
};
function createBaseAddPublisherProposalWithDeposit(): AddPublisherProposalWithDeposit {
  return {
    title: "",
    description: "",
    domain: "",
    address: "",
    proofUrl: "",
    caCert: "",
    deposit: ""
  };
}
export const AddPublisherProposalWithDeposit = {
  typeUrl: "/pubsub.v1.AddPublisherProposalWithDeposit",
  encode(message: AddPublisherProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.proofUrl !== "") {
      writer.uint32(42).string(message.proofUrl);
    }
    if (message.caCert !== "") {
      writer.uint32(50).string(message.caCert);
    }
    if (message.deposit !== "") {
      writer.uint32(58).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddPublisherProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      address: isSet(object.address) ? String(object.address) : "",
      proofUrl: isSet(object.proofUrl) ? String(object.proofUrl) : "",
      caCert: isSet(object.caCert) ? String(object.caCert) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddPublisherProposalWithDeposit>): AddPublisherProposalWithDeposit {
    const message = createBaseAddPublisherProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.domain = object.domain ?? "";
    message.address = object.address ?? "";
    message.proofUrl = object.proofUrl ?? "";
    message.caCert = object.caCert ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AddPublisherProposalWithDepositAmino): AddPublisherProposalWithDeposit {
    const message = createBaseAddPublisherProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.proof_url !== undefined && object.proof_url !== null) {
      message.proofUrl = object.proof_url;
    }
    if (object.ca_cert !== undefined && object.ca_cert !== null) {
      message.caCert = object.ca_cert;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: AddPublisherProposalWithDeposit): AddPublisherProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.domain = message.domain;
    obj.address = message.address;
    obj.proof_url = message.proofUrl;
    obj.ca_cert = message.caCert;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AddPublisherProposalWithDepositAminoMsg): AddPublisherProposalWithDeposit {
    return AddPublisherProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: AddPublisherProposalWithDepositProtoMsg): AddPublisherProposalWithDeposit {
    return AddPublisherProposalWithDeposit.decode(message.value);
  },
  toProto(message: AddPublisherProposalWithDeposit): Uint8Array {
    return AddPublisherProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: AddPublisherProposalWithDeposit): AddPublisherProposalWithDepositProtoMsg {
    return {
      typeUrl: "/pubsub.v1.AddPublisherProposalWithDeposit",
      value: AddPublisherProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseRemovePublisherProposal(): RemovePublisherProposal {
  return {
    title: "",
    description: "",
    domain: ""
  };
}
export const RemovePublisherProposal = {
  typeUrl: "/pubsub.v1.RemovePublisherProposal",
  encode(message: RemovePublisherProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    return writer;
  },
  fromJSON(object: any): RemovePublisherProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      domain: isSet(object.domain) ? String(object.domain) : ""
    };
  },
  fromPartial(object: Partial<RemovePublisherProposal>): RemovePublisherProposal {
    const message = createBaseRemovePublisherProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.domain = object.domain ?? "";
    return message;
  },
  fromAmino(object: RemovePublisherProposalAmino): RemovePublisherProposal {
    const message = createBaseRemovePublisherProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    return message;
  },
  toAmino(message: RemovePublisherProposal): RemovePublisherProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.domain = message.domain;
    return obj;
  },
  fromAminoMsg(object: RemovePublisherProposalAminoMsg): RemovePublisherProposal {
    return RemovePublisherProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemovePublisherProposalProtoMsg): RemovePublisherProposal {
    return RemovePublisherProposal.decode(message.value);
  },
  toProto(message: RemovePublisherProposal): Uint8Array {
    return RemovePublisherProposal.encode(message).finish();
  },
  toProtoMsg(message: RemovePublisherProposal): RemovePublisherProposalProtoMsg {
    return {
      typeUrl: "/pubsub.v1.RemovePublisherProposal",
      value: RemovePublisherProposal.encode(message).finish()
    };
  }
};
function createBaseRemovePublisherProposalWithDeposit(): RemovePublisherProposalWithDeposit {
  return {
    title: "",
    description: "",
    domain: "",
    deposit: ""
  };
}
export const RemovePublisherProposalWithDeposit = {
  typeUrl: "/pubsub.v1.RemovePublisherProposalWithDeposit",
  encode(message: RemovePublisherProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): RemovePublisherProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<RemovePublisherProposalWithDeposit>): RemovePublisherProposalWithDeposit {
    const message = createBaseRemovePublisherProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.domain = object.domain ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: RemovePublisherProposalWithDepositAmino): RemovePublisherProposalWithDeposit {
    const message = createBaseRemovePublisherProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: RemovePublisherProposalWithDeposit): RemovePublisherProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.domain = message.domain;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: RemovePublisherProposalWithDepositAminoMsg): RemovePublisherProposalWithDeposit {
    return RemovePublisherProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: RemovePublisherProposalWithDepositProtoMsg): RemovePublisherProposalWithDeposit {
    return RemovePublisherProposalWithDeposit.decode(message.value);
  },
  toProto(message: RemovePublisherProposalWithDeposit): Uint8Array {
    return RemovePublisherProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: RemovePublisherProposalWithDeposit): RemovePublisherProposalWithDepositProtoMsg {
    return {
      typeUrl: "/pubsub.v1.RemovePublisherProposalWithDeposit",
      value: RemovePublisherProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseAddDefaultSubscriptionProposal(): AddDefaultSubscriptionProposal {
  return {
    title: "",
    description: "",
    subscriptionId: "",
    publisherDomain: ""
  };
}
export const AddDefaultSubscriptionProposal = {
  typeUrl: "/pubsub.v1.AddDefaultSubscriptionProposal",
  encode(message: AddDefaultSubscriptionProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(26).string(message.subscriptionId);
    }
    if (message.publisherDomain !== "") {
      writer.uint32(34).string(message.publisherDomain);
    }
    return writer;
  },
  fromJSON(object: any): AddDefaultSubscriptionProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : ""
    };
  },
  fromPartial(object: Partial<AddDefaultSubscriptionProposal>): AddDefaultSubscriptionProposal {
    const message = createBaseAddDefaultSubscriptionProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    message.publisherDomain = object.publisherDomain ?? "";
    return message;
  },
  fromAmino(object: AddDefaultSubscriptionProposalAmino): AddDefaultSubscriptionProposal {
    const message = createBaseAddDefaultSubscriptionProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    return message;
  },
  toAmino(message: AddDefaultSubscriptionProposal): AddDefaultSubscriptionProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.subscription_id = message.subscriptionId;
    obj.publisher_domain = message.publisherDomain;
    return obj;
  },
  fromAminoMsg(object: AddDefaultSubscriptionProposalAminoMsg): AddDefaultSubscriptionProposal {
    return AddDefaultSubscriptionProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddDefaultSubscriptionProposalProtoMsg): AddDefaultSubscriptionProposal {
    return AddDefaultSubscriptionProposal.decode(message.value);
  },
  toProto(message: AddDefaultSubscriptionProposal): Uint8Array {
    return AddDefaultSubscriptionProposal.encode(message).finish();
  },
  toProtoMsg(message: AddDefaultSubscriptionProposal): AddDefaultSubscriptionProposalProtoMsg {
    return {
      typeUrl: "/pubsub.v1.AddDefaultSubscriptionProposal",
      value: AddDefaultSubscriptionProposal.encode(message).finish()
    };
  }
};
function createBaseAddDefaultSubscriptionProposalWithDeposit(): AddDefaultSubscriptionProposalWithDeposit {
  return {
    title: "",
    description: "",
    subscriptionId: "",
    publisherDomain: "",
    deposit: ""
  };
}
export const AddDefaultSubscriptionProposalWithDeposit = {
  typeUrl: "/pubsub.v1.AddDefaultSubscriptionProposalWithDeposit",
  encode(message: AddDefaultSubscriptionProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(26).string(message.subscriptionId);
    }
    if (message.publisherDomain !== "") {
      writer.uint32(34).string(message.publisherDomain);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddDefaultSubscriptionProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddDefaultSubscriptionProposalWithDeposit>): AddDefaultSubscriptionProposalWithDeposit {
    const message = createBaseAddDefaultSubscriptionProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    message.publisherDomain = object.publisherDomain ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AddDefaultSubscriptionProposalWithDepositAmino): AddDefaultSubscriptionProposalWithDeposit {
    const message = createBaseAddDefaultSubscriptionProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: AddDefaultSubscriptionProposalWithDeposit): AddDefaultSubscriptionProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.subscription_id = message.subscriptionId;
    obj.publisher_domain = message.publisherDomain;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AddDefaultSubscriptionProposalWithDepositAminoMsg): AddDefaultSubscriptionProposalWithDeposit {
    return AddDefaultSubscriptionProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: AddDefaultSubscriptionProposalWithDepositProtoMsg): AddDefaultSubscriptionProposalWithDeposit {
    return AddDefaultSubscriptionProposalWithDeposit.decode(message.value);
  },
  toProto(message: AddDefaultSubscriptionProposalWithDeposit): Uint8Array {
    return AddDefaultSubscriptionProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: AddDefaultSubscriptionProposalWithDeposit): AddDefaultSubscriptionProposalWithDepositProtoMsg {
    return {
      typeUrl: "/pubsub.v1.AddDefaultSubscriptionProposalWithDeposit",
      value: AddDefaultSubscriptionProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseRemoveDefaultSubscriptionProposal(): RemoveDefaultSubscriptionProposal {
  return {
    title: "",
    description: "",
    subscriptionId: ""
  };
}
export const RemoveDefaultSubscriptionProposal = {
  typeUrl: "/pubsub.v1.RemoveDefaultSubscriptionProposal",
  encode(message: RemoveDefaultSubscriptionProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(26).string(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): RemoveDefaultSubscriptionProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : ""
    };
  },
  fromPartial(object: Partial<RemoveDefaultSubscriptionProposal>): RemoveDefaultSubscriptionProposal {
    const message = createBaseRemoveDefaultSubscriptionProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromAmino(object: RemoveDefaultSubscriptionProposalAmino): RemoveDefaultSubscriptionProposal {
    const message = createBaseRemoveDefaultSubscriptionProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    return message;
  },
  toAmino(message: RemoveDefaultSubscriptionProposal): RemoveDefaultSubscriptionProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.subscription_id = message.subscriptionId;
    return obj;
  },
  fromAminoMsg(object: RemoveDefaultSubscriptionProposalAminoMsg): RemoveDefaultSubscriptionProposal {
    return RemoveDefaultSubscriptionProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveDefaultSubscriptionProposalProtoMsg): RemoveDefaultSubscriptionProposal {
    return RemoveDefaultSubscriptionProposal.decode(message.value);
  },
  toProto(message: RemoveDefaultSubscriptionProposal): Uint8Array {
    return RemoveDefaultSubscriptionProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveDefaultSubscriptionProposal): RemoveDefaultSubscriptionProposalProtoMsg {
    return {
      typeUrl: "/pubsub.v1.RemoveDefaultSubscriptionProposal",
      value: RemoveDefaultSubscriptionProposal.encode(message).finish()
    };
  }
};
function createBaseRemoveDefaultSubscriptionProposalWithDeposit(): RemoveDefaultSubscriptionProposalWithDeposit {
  return {
    title: "",
    description: "",
    subscriptionId: "",
    deposit: ""
  };
}
export const RemoveDefaultSubscriptionProposalWithDeposit = {
  typeUrl: "/pubsub.v1.RemoveDefaultSubscriptionProposalWithDeposit",
  encode(message: RemoveDefaultSubscriptionProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(26).string(message.subscriptionId);
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): RemoveDefaultSubscriptionProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<RemoveDefaultSubscriptionProposalWithDeposit>): RemoveDefaultSubscriptionProposalWithDeposit {
    const message = createBaseRemoveDefaultSubscriptionProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: RemoveDefaultSubscriptionProposalWithDepositAmino): RemoveDefaultSubscriptionProposalWithDeposit {
    const message = createBaseRemoveDefaultSubscriptionProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: RemoveDefaultSubscriptionProposalWithDeposit): RemoveDefaultSubscriptionProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.subscription_id = message.subscriptionId;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: RemoveDefaultSubscriptionProposalWithDepositAminoMsg): RemoveDefaultSubscriptionProposalWithDeposit {
    return RemoveDefaultSubscriptionProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveDefaultSubscriptionProposalWithDepositProtoMsg): RemoveDefaultSubscriptionProposalWithDeposit {
    return RemoveDefaultSubscriptionProposalWithDeposit.decode(message.value);
  },
  toProto(message: RemoveDefaultSubscriptionProposalWithDeposit): Uint8Array {
    return RemoveDefaultSubscriptionProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: RemoveDefaultSubscriptionProposalWithDeposit): RemoveDefaultSubscriptionProposalWithDepositProtoMsg {
    return {
      typeUrl: "/pubsub.v1.RemoveDefaultSubscriptionProposalWithDeposit",
      value: RemoveDefaultSubscriptionProposalWithDeposit.encode(message).finish()
    };
  }
};