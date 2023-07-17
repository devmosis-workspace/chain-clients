import { StringValue, StringValueSDKType } from "../../../google/protobuf/wrappers";
import { Long } from "../../../helpers";
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
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Resource;
    fromPartial(object: Partial<Resource>): Resource;
};
export declare const Domain: {
    encode(message: Domain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Domain;
    fromPartial(object: Partial<Domain>): Domain;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Account;
    fromPartial(object: Partial<Account>): Account;
};
