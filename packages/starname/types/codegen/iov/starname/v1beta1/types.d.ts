import { StringValue, StringValueAmino, StringValueSDKType } from "../../../google/protobuf/wrappers";
import { BinaryWriter } from "../../../binary";
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
export declare const Resource: {
    typeUrl: string;
    encode(message: Resource, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Resource;
    fromPartial(object: Partial<Resource>): Resource;
    fromAmino(object: ResourceAmino): Resource;
    toAmino(message: Resource): ResourceAmino;
    fromAminoMsg(object: ResourceAminoMsg): Resource;
    fromProtoMsg(message: ResourceProtoMsg): Resource;
    toProto(message: Resource): Uint8Array;
    toProtoMsg(message: Resource): ResourceProtoMsg;
};
export declare const Domain: {
    typeUrl: string;
    encode(message: Domain, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Domain;
    fromPartial(object: Partial<Domain>): Domain;
    fromAmino(object: DomainAmino): Domain;
    toAmino(message: Domain): DomainAmino;
    fromAminoMsg(object: DomainAminoMsg): Domain;
    fromProtoMsg(message: DomainProtoMsg): Domain;
    toProto(message: Domain): Uint8Array;
    toProtoMsg(message: Domain): DomainProtoMsg;
};
export declare const Account: {
    typeUrl: string;
    encode(message: Account, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Account;
    fromPartial(object: Partial<Account>): Account;
    fromAmino(object: AccountAmino): Account;
    toAmino(message: Account): AccountAmino;
    fromAminoMsg(object: AccountAminoMsg): Account;
    fromProtoMsg(message: AccountProtoMsg): Account;
    toProto(message: Account): Uint8Array;
    toProtoMsg(message: Account): AccountProtoMsg;
};
