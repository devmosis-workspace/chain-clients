import { BinaryWriter } from "../../binary";
/** for a given PublisherIntent, whether or not it is pulled or pushed */
export declare enum PublishMethod {
    /** PULL - subscribers should pull from the provided URL */
    PULL = 0,
    /** PUSH - subscribers must provide a URL to receive push messages */
    PUSH = 1,
    UNRECOGNIZED = -1
}
export declare const PublishMethodSDKType: typeof PublishMethod;
export declare const PublishMethodAmino: typeof PublishMethod;
export declare function publishMethodFromJSON(object: any): PublishMethod;
export declare function publishMethodToJSON(object: PublishMethod): string;
/** for a given PublisherIntent, determines what types of subscribers may subscribe */
export declare enum AllowedSubscribers {
    /** ANY - any valid account address */
    ANY = 0,
    /** VALIDATORS - account address must map to a validator in the active validator set */
    VALIDATORS = 1,
    /** LIST - a specific list of account addresses */
    LIST = 2,
    UNRECOGNIZED = -1
}
export declare const AllowedSubscribersSDKType: typeof AllowedSubscribers;
export declare const AllowedSubscribersAmino: typeof AllowedSubscribers;
export declare function allowedSubscribersFromJSON(object: any): AllowedSubscribers;
export declare function allowedSubscribersToJSON(object: AllowedSubscribers): string;
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
export declare const Publisher: {
    typeUrl: string;
    encode(message: Publisher, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Publisher;
    fromPartial(object: Partial<Publisher>): Publisher;
    fromAmino(object: PublisherAmino): Publisher;
    toAmino(message: Publisher): PublisherAmino;
    fromAminoMsg(object: PublisherAminoMsg): Publisher;
    fromProtoMsg(message: PublisherProtoMsg): Publisher;
    toProto(message: Publisher): Uint8Array;
    toProtoMsg(message: Publisher): PublisherProtoMsg;
};
export declare const Subscriber: {
    typeUrl: string;
    encode(message: Subscriber, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Subscriber;
    fromPartial(object: Partial<Subscriber>): Subscriber;
    fromAmino(object: SubscriberAmino): Subscriber;
    toAmino(message: Subscriber): SubscriberAmino;
    fromAminoMsg(object: SubscriberAminoMsg): Subscriber;
    fromProtoMsg(message: SubscriberProtoMsg): Subscriber;
    toProto(message: Subscriber): Uint8Array;
    toProtoMsg(message: Subscriber): SubscriberProtoMsg;
};
export declare const PublisherIntent: {
    typeUrl: string;
    encode(message: PublisherIntent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PublisherIntent;
    fromPartial(object: Partial<PublisherIntent>): PublisherIntent;
    fromAmino(object: PublisherIntentAmino): PublisherIntent;
    toAmino(message: PublisherIntent): PublisherIntentAmino;
    fromAminoMsg(object: PublisherIntentAminoMsg): PublisherIntent;
    fromProtoMsg(message: PublisherIntentProtoMsg): PublisherIntent;
    toProto(message: PublisherIntent): Uint8Array;
    toProtoMsg(message: PublisherIntent): PublisherIntentProtoMsg;
};
export declare const SubscriberIntent: {
    typeUrl: string;
    encode(message: SubscriberIntent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SubscriberIntent;
    fromPartial(object: Partial<SubscriberIntent>): SubscriberIntent;
    fromAmino(object: SubscriberIntentAmino): SubscriberIntent;
    toAmino(message: SubscriberIntent): SubscriberIntentAmino;
    fromAminoMsg(object: SubscriberIntentAminoMsg): SubscriberIntent;
    fromProtoMsg(message: SubscriberIntentProtoMsg): SubscriberIntent;
    toProto(message: SubscriberIntent): Uint8Array;
    toProtoMsg(message: SubscriberIntent): SubscriberIntentProtoMsg;
};
export declare const DefaultSubscription: {
    typeUrl: string;
    encode(message: DefaultSubscription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DefaultSubscription;
    fromPartial(object: Partial<DefaultSubscription>): DefaultSubscription;
    fromAmino(object: DefaultSubscriptionAmino): DefaultSubscription;
    toAmino(message: DefaultSubscription): DefaultSubscriptionAmino;
    fromAminoMsg(object: DefaultSubscriptionAminoMsg): DefaultSubscription;
    fromProtoMsg(message: DefaultSubscriptionProtoMsg): DefaultSubscription;
    toProto(message: DefaultSubscription): Uint8Array;
    toProtoMsg(message: DefaultSubscription): DefaultSubscriptionProtoMsg;
};
export declare const AddPublisherProposal: {
    typeUrl: string;
    encode(message: AddPublisherProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddPublisherProposal;
    fromPartial(object: Partial<AddPublisherProposal>): AddPublisherProposal;
    fromAmino(object: AddPublisherProposalAmino): AddPublisherProposal;
    toAmino(message: AddPublisherProposal): AddPublisherProposalAmino;
    fromAminoMsg(object: AddPublisherProposalAminoMsg): AddPublisherProposal;
    fromProtoMsg(message: AddPublisherProposalProtoMsg): AddPublisherProposal;
    toProto(message: AddPublisherProposal): Uint8Array;
    toProtoMsg(message: AddPublisherProposal): AddPublisherProposalProtoMsg;
};
export declare const AddPublisherProposalWithDeposit: {
    typeUrl: string;
    encode(message: AddPublisherProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddPublisherProposalWithDeposit;
    fromPartial(object: Partial<AddPublisherProposalWithDeposit>): AddPublisherProposalWithDeposit;
    fromAmino(object: AddPublisherProposalWithDepositAmino): AddPublisherProposalWithDeposit;
    toAmino(message: AddPublisherProposalWithDeposit): AddPublisherProposalWithDepositAmino;
    fromAminoMsg(object: AddPublisherProposalWithDepositAminoMsg): AddPublisherProposalWithDeposit;
    fromProtoMsg(message: AddPublisherProposalWithDepositProtoMsg): AddPublisherProposalWithDeposit;
    toProto(message: AddPublisherProposalWithDeposit): Uint8Array;
    toProtoMsg(message: AddPublisherProposalWithDeposit): AddPublisherProposalWithDepositProtoMsg;
};
export declare const RemovePublisherProposal: {
    typeUrl: string;
    encode(message: RemovePublisherProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemovePublisherProposal;
    fromPartial(object: Partial<RemovePublisherProposal>): RemovePublisherProposal;
    fromAmino(object: RemovePublisherProposalAmino): RemovePublisherProposal;
    toAmino(message: RemovePublisherProposal): RemovePublisherProposalAmino;
    fromAminoMsg(object: RemovePublisherProposalAminoMsg): RemovePublisherProposal;
    fromProtoMsg(message: RemovePublisherProposalProtoMsg): RemovePublisherProposal;
    toProto(message: RemovePublisherProposal): Uint8Array;
    toProtoMsg(message: RemovePublisherProposal): RemovePublisherProposalProtoMsg;
};
export declare const RemovePublisherProposalWithDeposit: {
    typeUrl: string;
    encode(message: RemovePublisherProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemovePublisherProposalWithDeposit;
    fromPartial(object: Partial<RemovePublisherProposalWithDeposit>): RemovePublisherProposalWithDeposit;
    fromAmino(object: RemovePublisherProposalWithDepositAmino): RemovePublisherProposalWithDeposit;
    toAmino(message: RemovePublisherProposalWithDeposit): RemovePublisherProposalWithDepositAmino;
    fromAminoMsg(object: RemovePublisherProposalWithDepositAminoMsg): RemovePublisherProposalWithDeposit;
    fromProtoMsg(message: RemovePublisherProposalWithDepositProtoMsg): RemovePublisherProposalWithDeposit;
    toProto(message: RemovePublisherProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RemovePublisherProposalWithDeposit): RemovePublisherProposalWithDepositProtoMsg;
};
export declare const AddDefaultSubscriptionProposal: {
    typeUrl: string;
    encode(message: AddDefaultSubscriptionProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddDefaultSubscriptionProposal;
    fromPartial(object: Partial<AddDefaultSubscriptionProposal>): AddDefaultSubscriptionProposal;
    fromAmino(object: AddDefaultSubscriptionProposalAmino): AddDefaultSubscriptionProposal;
    toAmino(message: AddDefaultSubscriptionProposal): AddDefaultSubscriptionProposalAmino;
    fromAminoMsg(object: AddDefaultSubscriptionProposalAminoMsg): AddDefaultSubscriptionProposal;
    fromProtoMsg(message: AddDefaultSubscriptionProposalProtoMsg): AddDefaultSubscriptionProposal;
    toProto(message: AddDefaultSubscriptionProposal): Uint8Array;
    toProtoMsg(message: AddDefaultSubscriptionProposal): AddDefaultSubscriptionProposalProtoMsg;
};
export declare const AddDefaultSubscriptionProposalWithDeposit: {
    typeUrl: string;
    encode(message: AddDefaultSubscriptionProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddDefaultSubscriptionProposalWithDeposit;
    fromPartial(object: Partial<AddDefaultSubscriptionProposalWithDeposit>): AddDefaultSubscriptionProposalWithDeposit;
    fromAmino(object: AddDefaultSubscriptionProposalWithDepositAmino): AddDefaultSubscriptionProposalWithDeposit;
    toAmino(message: AddDefaultSubscriptionProposalWithDeposit): AddDefaultSubscriptionProposalWithDepositAmino;
    fromAminoMsg(object: AddDefaultSubscriptionProposalWithDepositAminoMsg): AddDefaultSubscriptionProposalWithDeposit;
    fromProtoMsg(message: AddDefaultSubscriptionProposalWithDepositProtoMsg): AddDefaultSubscriptionProposalWithDeposit;
    toProto(message: AddDefaultSubscriptionProposalWithDeposit): Uint8Array;
    toProtoMsg(message: AddDefaultSubscriptionProposalWithDeposit): AddDefaultSubscriptionProposalWithDepositProtoMsg;
};
export declare const RemoveDefaultSubscriptionProposal: {
    typeUrl: string;
    encode(message: RemoveDefaultSubscriptionProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveDefaultSubscriptionProposal;
    fromPartial(object: Partial<RemoveDefaultSubscriptionProposal>): RemoveDefaultSubscriptionProposal;
    fromAmino(object: RemoveDefaultSubscriptionProposalAmino): RemoveDefaultSubscriptionProposal;
    toAmino(message: RemoveDefaultSubscriptionProposal): RemoveDefaultSubscriptionProposalAmino;
    fromAminoMsg(object: RemoveDefaultSubscriptionProposalAminoMsg): RemoveDefaultSubscriptionProposal;
    fromProtoMsg(message: RemoveDefaultSubscriptionProposalProtoMsg): RemoveDefaultSubscriptionProposal;
    toProto(message: RemoveDefaultSubscriptionProposal): Uint8Array;
    toProtoMsg(message: RemoveDefaultSubscriptionProposal): RemoveDefaultSubscriptionProposalProtoMsg;
};
export declare const RemoveDefaultSubscriptionProposalWithDeposit: {
    typeUrl: string;
    encode(message: RemoveDefaultSubscriptionProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveDefaultSubscriptionProposalWithDeposit;
    fromPartial(object: Partial<RemoveDefaultSubscriptionProposalWithDeposit>): RemoveDefaultSubscriptionProposalWithDeposit;
    fromAmino(object: RemoveDefaultSubscriptionProposalWithDepositAmino): RemoveDefaultSubscriptionProposalWithDeposit;
    toAmino(message: RemoveDefaultSubscriptionProposalWithDeposit): RemoveDefaultSubscriptionProposalWithDepositAmino;
    fromAminoMsg(object: RemoveDefaultSubscriptionProposalWithDepositAminoMsg): RemoveDefaultSubscriptionProposalWithDeposit;
    fromProtoMsg(message: RemoveDefaultSubscriptionProposalWithDepositProtoMsg): RemoveDefaultSubscriptionProposalWithDeposit;
    toProto(message: RemoveDefaultSubscriptionProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RemoveDefaultSubscriptionProposalWithDeposit): RemoveDefaultSubscriptionProposalWithDepositProtoMsg;
};
