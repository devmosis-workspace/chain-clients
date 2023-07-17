import { Resource, ResourceSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgAddAccountCertificate is the message used when a user wants to add new
 * certificates to his account
 */
export interface MsgAddAccountCertificate {
    /** Domain is the domain of the account */
    domain: string;
    /** Name is the name of the account */
    name: string;
    /** Owner is the owner of the account */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
    /** NewCertificate is the new certificate to add */
    newCertificate: Uint8Array;
}
/**
 * MsgAddAccountCertificate is the message used when a user wants to add new
 * certificates to his account
 */
export interface MsgAddAccountCertificateSDKType {
    domain: string;
    name: string;
    owner: string;
    payer: string;
    new_certificate: Uint8Array;
}
/** MsgAddAccountCertificateResponse returns an empty response. */
export interface MsgAddAccountCertificateResponse {
}
/** MsgAddAccountCertificateResponse returns an empty response. */
export interface MsgAddAccountCertificateResponseSDKType {
}
/**
 * MsgDeleteAccountCertificate is the request model used to remove certificates
 * from an account
 */
export interface MsgDeleteAccountCertificate {
    /** Domain is the domain of the account */
    domain: string;
    /** Name is the name of the account */
    name: string;
    /** Owner is the owner of the account */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
    /** DeleteCertificate is the certificate to delete */
    deleteCertificate: Uint8Array;
}
/**
 * MsgDeleteAccountCertificate is the request model used to remove certificates
 * from an account
 */
export interface MsgDeleteAccountCertificateSDKType {
    domain: string;
    name: string;
    owner: string;
    payer: string;
    delete_certificate: Uint8Array;
}
/** MsgDeleteAccountCertificateResponse returns an empty response. */
export interface MsgDeleteAccountCertificateResponse {
}
/** MsgDeleteAccountCertificateResponse returns an empty response. */
export interface MsgDeleteAccountCertificateResponseSDKType {
}
/** MsgDeleteAccount is the request model used to delete an account */
export interface MsgDeleteAccount {
    /** Domain is the domain of the account */
    domain: string;
    /** Name is the name of the account */
    name: string;
    /** Owner is the owner of the account */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
}
/** MsgDeleteAccount is the request model used to delete an account */
export interface MsgDeleteAccountSDKType {
    domain: string;
    name: string;
    owner: string;
    payer: string;
}
/** MsgDeleteAccountResponse returns an empty response. */
export interface MsgDeleteAccountResponse {
}
/** MsgDeleteAccountResponse returns an empty response. */
export interface MsgDeleteAccountResponseSDKType {
}
/** MsgDeleteDomain is the request model to delete a domain */
export interface MsgDeleteDomain {
    /** Domain is the domain of the account */
    domain: string;
    /** Owner is the owner of the account */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
}
/** MsgDeleteDomain is the request model to delete a domain */
export interface MsgDeleteDomainSDKType {
    domain: string;
    owner: string;
    payer: string;
}
/** MsgDeleteDomainResponse returns an empty response. */
export interface MsgDeleteDomainResponse {
}
/** MsgDeleteDomainResponse returns an empty response. */
export interface MsgDeleteDomainResponseSDKType {
}
/** MsgRegisterAccount is the request model used to register new accounts */
export interface MsgRegisterAccount {
    /** Domain is the domain of the account */
    domain: string;
    /** Name is the name of the account */
    name: string;
    /** Owner is the owner of the account */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
    /** Broker is the account that facilitated the transaction */
    broker: string;
    /** Registerer is the user who registers this account */
    registerer: string;
    /** Resources are the blockchain addresses of the account */
    resources: Resource[];
}
/** MsgRegisterAccount is the request model used to register new accounts */
export interface MsgRegisterAccountSDKType {
    domain: string;
    name: string;
    owner: string;
    payer: string;
    broker: string;
    registerer: string;
    resources: ResourceSDKType[];
}
/** MsgRegisterAccountResponse returns an empty response. */
export interface MsgRegisterAccountResponse {
}
/** MsgRegisterAccountResponse returns an empty response. */
export interface MsgRegisterAccountResponseSDKType {
}
/** MsgRegisterDomain is the request used to register new domains */
export interface MsgRegisterDomain {
    name: string;
    admin: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
    /** Broker is the account that facilitated the transaction */
    broker: string;
    /** DomainType defines the type of the domain */
    domainType: string;
}
/** MsgRegisterDomain is the request used to register new domains */
export interface MsgRegisterDomainSDKType {
    name: string;
    admin: string;
    payer: string;
    broker: string;
    domain_type: string;
}
/** MsgRegisterDomainResponse returns an empty response. */
export interface MsgRegisterDomainResponse {
}
/** MsgRegisterDomainResponse returns an empty response. */
export interface MsgRegisterDomainResponseSDKType {
}
/** MsgRenewAccount is the request model used to renew accounts */
export interface MsgRenewAccount {
    /** Domain is the domain of the account */
    domain: string;
    /** Name is the name of the account */
    name: string;
    /** Signer is the signer of the request */
    signer: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
}
/** MsgRenewAccount is the request model used to renew accounts */
export interface MsgRenewAccountSDKType {
    domain: string;
    name: string;
    signer: string;
    payer: string;
}
/** MsgRenewAccountResponse returns an empty response. */
export interface MsgRenewAccountResponse {
}
/** MsgRenewAccountResponse returns an empty response. */
export interface MsgRenewAccountResponseSDKType {
}
/** MsgRenewDomain is the request model used to renew a domain */
export interface MsgRenewDomain {
    /** Domain is the domain of the account */
    domain: string;
    /** Signer is the signer of the request */
    signer: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
}
/** MsgRenewDomain is the request model used to renew a domain */
export interface MsgRenewDomainSDKType {
    domain: string;
    signer: string;
    payer: string;
}
/** MsgRegisterDomain returns an empty response. */
export interface MsgRenewDomainResponse {
}
/** MsgRegisterDomain returns an empty response. */
export interface MsgRenewDomainResponseSDKType {
}
/**
 * MsgReplaceAccountResources is the request model used to renew resources
 * associated with an account
 */
export interface MsgReplaceAccountResources {
    /** Domain is the domain of the account */
    domain: string;
    /** Name is the name of the account */
    name: string;
    /** Owner is the owner of the account */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
    /** NewResources are the new resources */
    newResources: Resource[];
}
/**
 * MsgReplaceAccountResources is the request model used to renew resources
 * associated with an account
 */
export interface MsgReplaceAccountResourcesSDKType {
    domain: string;
    name: string;
    owner: string;
    payer: string;
    new_resources: ResourceSDKType[];
}
/** MsgReplaceAccountResourcesResponse */
export interface MsgReplaceAccountResourcesResponse {
}
/** MsgReplaceAccountResourcesResponse */
export interface MsgReplaceAccountResourcesResponseSDKType {
}
/** MsgReplaceAccountMetadata is the function used to set accounts metadata */
export interface MsgReplaceAccountMetadata {
    /** Domain is the domain of the account */
    domain: string;
    /** Name is the name of the account */
    name: string;
    /** Owner is the owner of the account */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
    /**
     * NewMetadataURI is the metadata URI of the account
     * we want to update or insert
     */
    newMetadataUri: string;
}
/** MsgReplaceAccountMetadata is the function used to set accounts metadata */
export interface MsgReplaceAccountMetadataSDKType {
    domain: string;
    name: string;
    owner: string;
    payer: string;
    new_metadata_uri: string;
}
/** MsgReplaceAccountMetadataResponse returns an empty response. */
export interface MsgReplaceAccountMetadataResponse {
}
/** MsgReplaceAccountMetadataResponse returns an empty response. */
export interface MsgReplaceAccountMetadataResponseSDKType {
}
/** MsgTransferAccount is the request model used to transfer accounts */
export interface MsgTransferAccount {
    /** Domain is the domain of the account */
    domain: string;
    /** Name is the name of the account */
    name: string;
    /** Owner is the owner of the account */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
    /** NewOwner is the new owner of the account */
    newOwner: string;
    /** ToReset if true, removes all old data from account */
    reset: boolean;
}
/** MsgTransferAccount is the request model used to transfer accounts */
export interface MsgTransferAccountSDKType {
    domain: string;
    name: string;
    owner: string;
    payer: string;
    new_owner: string;
    reset: boolean;
}
/** MsgTransferAccountResponse returns an empty response. */
export interface MsgTransferAccountResponse {
}
/** MsgTransferAccountResponse returns an empty response. */
export interface MsgTransferAccountResponseSDKType {
}
/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomain {
    /** Domain is the name of the domain */
    domain: string;
    /** Owner is the owner of the domain */
    owner: string;
    /**
     * Payer is the address of the entity that pays the product and transaction
     * fees
     */
    payer: string;
    /** NewAdmin is the  new owner of the domain */
    newAdmin: string;
    /** TransferFlag controls the operations that occurs on a domain's accounts */
    transferFlag: Long;
}
/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomainSDKType {
    domain: string;
    owner: string;
    payer: string;
    new_admin: string;
    transfer_flag: Long;
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponse {
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponseSDKType {
}
export declare const MsgAddAccountCertificate: {
    encode(message: MsgAddAccountCertificate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddAccountCertificate;
    fromPartial(object: Partial<MsgAddAccountCertificate>): MsgAddAccountCertificate;
};
export declare const MsgAddAccountCertificateResponse: {
    encode(_: MsgAddAccountCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddAccountCertificateResponse;
    fromPartial(_: Partial<MsgAddAccountCertificateResponse>): MsgAddAccountCertificateResponse;
};
export declare const MsgDeleteAccountCertificate: {
    encode(message: MsgDeleteAccountCertificate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteAccountCertificate;
    fromPartial(object: Partial<MsgDeleteAccountCertificate>): MsgDeleteAccountCertificate;
};
export declare const MsgDeleteAccountCertificateResponse: {
    encode(_: MsgDeleteAccountCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteAccountCertificateResponse;
    fromPartial(_: Partial<MsgDeleteAccountCertificateResponse>): MsgDeleteAccountCertificateResponse;
};
export declare const MsgDeleteAccount: {
    encode(message: MsgDeleteAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteAccount;
    fromPartial(object: Partial<MsgDeleteAccount>): MsgDeleteAccount;
};
export declare const MsgDeleteAccountResponse: {
    encode(_: MsgDeleteAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteAccountResponse;
    fromPartial(_: Partial<MsgDeleteAccountResponse>): MsgDeleteAccountResponse;
};
export declare const MsgDeleteDomain: {
    encode(message: MsgDeleteDomain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteDomain;
    fromPartial(object: Partial<MsgDeleteDomain>): MsgDeleteDomain;
};
export declare const MsgDeleteDomainResponse: {
    encode(_: MsgDeleteDomainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteDomainResponse;
    fromPartial(_: Partial<MsgDeleteDomainResponse>): MsgDeleteDomainResponse;
};
export declare const MsgRegisterAccount: {
    encode(message: MsgRegisterAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterAccount;
    fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount;
};
export declare const MsgRegisterAccountResponse: {
    encode(_: MsgRegisterAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterAccountResponse;
    fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
};
export declare const MsgRegisterDomain: {
    encode(message: MsgRegisterDomain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterDomain;
    fromPartial(object: Partial<MsgRegisterDomain>): MsgRegisterDomain;
};
export declare const MsgRegisterDomainResponse: {
    encode(_: MsgRegisterDomainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterDomainResponse;
    fromPartial(_: Partial<MsgRegisterDomainResponse>): MsgRegisterDomainResponse;
};
export declare const MsgRenewAccount: {
    encode(message: MsgRenewAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRenewAccount;
    fromPartial(object: Partial<MsgRenewAccount>): MsgRenewAccount;
};
export declare const MsgRenewAccountResponse: {
    encode(_: MsgRenewAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRenewAccountResponse;
    fromPartial(_: Partial<MsgRenewAccountResponse>): MsgRenewAccountResponse;
};
export declare const MsgRenewDomain: {
    encode(message: MsgRenewDomain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRenewDomain;
    fromPartial(object: Partial<MsgRenewDomain>): MsgRenewDomain;
};
export declare const MsgRenewDomainResponse: {
    encode(_: MsgRenewDomainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRenewDomainResponse;
    fromPartial(_: Partial<MsgRenewDomainResponse>): MsgRenewDomainResponse;
};
export declare const MsgReplaceAccountResources: {
    encode(message: MsgReplaceAccountResources, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgReplaceAccountResources;
    fromPartial(object: Partial<MsgReplaceAccountResources>): MsgReplaceAccountResources;
};
export declare const MsgReplaceAccountResourcesResponse: {
    encode(_: MsgReplaceAccountResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgReplaceAccountResourcesResponse;
    fromPartial(_: Partial<MsgReplaceAccountResourcesResponse>): MsgReplaceAccountResourcesResponse;
};
export declare const MsgReplaceAccountMetadata: {
    encode(message: MsgReplaceAccountMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgReplaceAccountMetadata;
    fromPartial(object: Partial<MsgReplaceAccountMetadata>): MsgReplaceAccountMetadata;
};
export declare const MsgReplaceAccountMetadataResponse: {
    encode(_: MsgReplaceAccountMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgReplaceAccountMetadataResponse;
    fromPartial(_: Partial<MsgReplaceAccountMetadataResponse>): MsgReplaceAccountMetadataResponse;
};
export declare const MsgTransferAccount: {
    encode(message: MsgTransferAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransferAccount;
    fromPartial(object: Partial<MsgTransferAccount>): MsgTransferAccount;
};
export declare const MsgTransferAccountResponse: {
    encode(_: MsgTransferAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgTransferAccountResponse;
    fromPartial(_: Partial<MsgTransferAccountResponse>): MsgTransferAccountResponse;
};
export declare const MsgTransferDomain: {
    encode(message: MsgTransferDomain, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransferDomain;
    fromPartial(object: Partial<MsgTransferDomain>): MsgTransferDomain;
};
export declare const MsgTransferDomainResponse: {
    encode(_: MsgTransferDomainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgTransferDomainResponse;
    fromPartial(_: Partial<MsgTransferDomainResponse>): MsgTransferDomainResponse;
};
