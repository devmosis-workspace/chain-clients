import { Resource, ResourceAmino, ResourceSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
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
export interface MsgAddAccountCertificateProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate";
    value: Uint8Array;
}
/**
 * MsgAddAccountCertificate is the message used when a user wants to add new
 * certificates to his account
 */
export interface MsgAddAccountCertificateAmino {
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
    new_certificate: Uint8Array;
}
export interface MsgAddAccountCertificateAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificate";
    value: MsgAddAccountCertificateAmino;
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
export interface MsgAddAccountCertificateResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificateResponse";
    value: Uint8Array;
}
/** MsgAddAccountCertificateResponse returns an empty response. */
export interface MsgAddAccountCertificateResponseAmino {
}
export interface MsgAddAccountCertificateResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgAddAccountCertificateResponse";
    value: MsgAddAccountCertificateResponseAmino;
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
export interface MsgDeleteAccountCertificateProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate";
    value: Uint8Array;
}
/**
 * MsgDeleteAccountCertificate is the request model used to remove certificates
 * from an account
 */
export interface MsgDeleteAccountCertificateAmino {
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
    delete_certificate: Uint8Array;
}
export interface MsgDeleteAccountCertificateAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificate";
    value: MsgDeleteAccountCertificateAmino;
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
export interface MsgDeleteAccountCertificateResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificateResponse";
    value: Uint8Array;
}
/** MsgDeleteAccountCertificateResponse returns an empty response. */
export interface MsgDeleteAccountCertificateResponseAmino {
}
export interface MsgDeleteAccountCertificateResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteAccountCertificateResponse";
    value: MsgDeleteAccountCertificateResponseAmino;
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
export interface MsgDeleteAccountProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccount";
    value: Uint8Array;
}
/** MsgDeleteAccount is the request model used to delete an account */
export interface MsgDeleteAccountAmino {
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
export interface MsgDeleteAccountAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteAccount";
    value: MsgDeleteAccountAmino;
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
export interface MsgDeleteAccountResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteAccountResponse";
    value: Uint8Array;
}
/** MsgDeleteAccountResponse returns an empty response. */
export interface MsgDeleteAccountResponseAmino {
}
export interface MsgDeleteAccountResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteAccountResponse";
    value: MsgDeleteAccountResponseAmino;
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
export interface MsgDeleteDomainProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomain";
    value: Uint8Array;
}
/** MsgDeleteDomain is the request model to delete a domain */
export interface MsgDeleteDomainAmino {
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
export interface MsgDeleteDomainAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteDomain";
    value: MsgDeleteDomainAmino;
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
export interface MsgDeleteDomainResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgDeleteDomainResponse";
    value: Uint8Array;
}
/** MsgDeleteDomainResponse returns an empty response. */
export interface MsgDeleteDomainResponseAmino {
}
export interface MsgDeleteDomainResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgDeleteDomainResponse";
    value: MsgDeleteDomainResponseAmino;
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
export interface MsgRegisterAccountProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccount";
    value: Uint8Array;
}
/** MsgRegisterAccount is the request model used to register new accounts */
export interface MsgRegisterAccountAmino {
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
    resources: ResourceAmino[];
}
export interface MsgRegisterAccountAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRegisterAccount";
    value: MsgRegisterAccountAmino;
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
export interface MsgRegisterAccountResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterAccountResponse";
    value: Uint8Array;
}
/** MsgRegisterAccountResponse returns an empty response. */
export interface MsgRegisterAccountResponseAmino {
}
export interface MsgRegisterAccountResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRegisterAccountResponse";
    value: MsgRegisterAccountResponseAmino;
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
export interface MsgRegisterDomainProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomain";
    value: Uint8Array;
}
/** MsgRegisterDomain is the request used to register new domains */
export interface MsgRegisterDomainAmino {
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
    domain_type: string;
}
export interface MsgRegisterDomainAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRegisterDomain";
    value: MsgRegisterDomainAmino;
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
export interface MsgRegisterDomainResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgRegisterDomainResponse";
    value: Uint8Array;
}
/** MsgRegisterDomainResponse returns an empty response. */
export interface MsgRegisterDomainResponseAmino {
}
export interface MsgRegisterDomainResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRegisterDomainResponse";
    value: MsgRegisterDomainResponseAmino;
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
export interface MsgRenewAccountProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccount";
    value: Uint8Array;
}
/** MsgRenewAccount is the request model used to renew accounts */
export interface MsgRenewAccountAmino {
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
export interface MsgRenewAccountAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRenewAccount";
    value: MsgRenewAccountAmino;
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
export interface MsgRenewAccountResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewAccountResponse";
    value: Uint8Array;
}
/** MsgRenewAccountResponse returns an empty response. */
export interface MsgRenewAccountResponseAmino {
}
export interface MsgRenewAccountResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRenewAccountResponse";
    value: MsgRenewAccountResponseAmino;
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
export interface MsgRenewDomainProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomain";
    value: Uint8Array;
}
/** MsgRenewDomain is the request model used to renew a domain */
export interface MsgRenewDomainAmino {
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
export interface MsgRenewDomainAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRenewDomain";
    value: MsgRenewDomainAmino;
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
export interface MsgRenewDomainResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgRenewDomainResponse";
    value: Uint8Array;
}
/** MsgRegisterDomain returns an empty response. */
export interface MsgRenewDomainResponseAmino {
}
export interface MsgRenewDomainResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgRenewDomainResponse";
    value: MsgRenewDomainResponseAmino;
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
export interface MsgReplaceAccountResourcesProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources";
    value: Uint8Array;
}
/**
 * MsgReplaceAccountResources is the request model used to renew resources
 * associated with an account
 */
export interface MsgReplaceAccountResourcesAmino {
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
    new_resources: ResourceAmino[];
}
export interface MsgReplaceAccountResourcesAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResources";
    value: MsgReplaceAccountResourcesAmino;
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
export interface MsgReplaceAccountResourcesResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResourcesResponse";
    value: Uint8Array;
}
/** MsgReplaceAccountResourcesResponse */
export interface MsgReplaceAccountResourcesResponseAmino {
}
export interface MsgReplaceAccountResourcesResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountResourcesResponse";
    value: MsgReplaceAccountResourcesResponseAmino;
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
export interface MsgReplaceAccountMetadataProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata";
    value: Uint8Array;
}
/** MsgReplaceAccountMetadata is the function used to set accounts metadata */
export interface MsgReplaceAccountMetadataAmino {
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
    new_metadata_uri: string;
}
export interface MsgReplaceAccountMetadataAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadata";
    value: MsgReplaceAccountMetadataAmino;
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
export interface MsgReplaceAccountMetadataResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadataResponse";
    value: Uint8Array;
}
/** MsgReplaceAccountMetadataResponse returns an empty response. */
export interface MsgReplaceAccountMetadataResponseAmino {
}
export interface MsgReplaceAccountMetadataResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgReplaceAccountMetadataResponse";
    value: MsgReplaceAccountMetadataResponseAmino;
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
export interface MsgTransferAccountProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccount";
    value: Uint8Array;
}
/** MsgTransferAccount is the request model used to transfer accounts */
export interface MsgTransferAccountAmino {
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
    new_owner: string;
    /** ToReset if true, removes all old data from account */
    reset: boolean;
}
export interface MsgTransferAccountAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgTransferAccount";
    value: MsgTransferAccountAmino;
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
export interface MsgTransferAccountResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferAccountResponse";
    value: Uint8Array;
}
/** MsgTransferAccountResponse returns an empty response. */
export interface MsgTransferAccountResponseAmino {
}
export interface MsgTransferAccountResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgTransferAccountResponse";
    value: MsgTransferAccountResponseAmino;
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
    transferFlag: bigint;
}
export interface MsgTransferDomainProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomain";
    value: Uint8Array;
}
/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomainAmino {
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
    new_admin: string;
    /** TransferFlag controls the operations that occurs on a domain's accounts */
    transfer_flag: string;
}
export interface MsgTransferDomainAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgTransferDomain";
    value: MsgTransferDomainAmino;
}
/** MsgTransferDomain is the request model used to transfer a domain */
export interface MsgTransferDomainSDKType {
    domain: string;
    owner: string;
    payer: string;
    new_admin: string;
    transfer_flag: bigint;
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponse {
}
export interface MsgTransferDomainResponseProtoMsg {
    typeUrl: "/starnamed.x.starname.v1beta1.MsgTransferDomainResponse";
    value: Uint8Array;
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponseAmino {
}
export interface MsgTransferDomainResponseAminoMsg {
    type: "/starnamed.x.starname.v1beta1.MsgTransferDomainResponse";
    value: MsgTransferDomainResponseAmino;
}
/** MsgTransferDomainResponse returns an empty response. */
export interface MsgTransferDomainResponseSDKType {
}
export declare const MsgAddAccountCertificate: {
    typeUrl: string;
    encode(message: MsgAddAccountCertificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddAccountCertificate;
    fromPartial(object: Partial<MsgAddAccountCertificate>): MsgAddAccountCertificate;
    fromAmino(object: MsgAddAccountCertificateAmino): MsgAddAccountCertificate;
    toAmino(message: MsgAddAccountCertificate): MsgAddAccountCertificateAmino;
    fromAminoMsg(object: MsgAddAccountCertificateAminoMsg): MsgAddAccountCertificate;
    fromProtoMsg(message: MsgAddAccountCertificateProtoMsg): MsgAddAccountCertificate;
    toProto(message: MsgAddAccountCertificate): Uint8Array;
    toProtoMsg(message: MsgAddAccountCertificate): MsgAddAccountCertificateProtoMsg;
};
export declare const MsgAddAccountCertificateResponse: {
    typeUrl: string;
    encode(_: MsgAddAccountCertificateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddAccountCertificateResponse;
    fromPartial(_: Partial<MsgAddAccountCertificateResponse>): MsgAddAccountCertificateResponse;
    fromAmino(_: MsgAddAccountCertificateResponseAmino): MsgAddAccountCertificateResponse;
    toAmino(_: MsgAddAccountCertificateResponse): MsgAddAccountCertificateResponseAmino;
    fromAminoMsg(object: MsgAddAccountCertificateResponseAminoMsg): MsgAddAccountCertificateResponse;
    fromProtoMsg(message: MsgAddAccountCertificateResponseProtoMsg): MsgAddAccountCertificateResponse;
    toProto(message: MsgAddAccountCertificateResponse): Uint8Array;
    toProtoMsg(message: MsgAddAccountCertificateResponse): MsgAddAccountCertificateResponseProtoMsg;
};
export declare const MsgDeleteAccountCertificate: {
    typeUrl: string;
    encode(message: MsgDeleteAccountCertificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteAccountCertificate;
    fromPartial(object: Partial<MsgDeleteAccountCertificate>): MsgDeleteAccountCertificate;
    fromAmino(object: MsgDeleteAccountCertificateAmino): MsgDeleteAccountCertificate;
    toAmino(message: MsgDeleteAccountCertificate): MsgDeleteAccountCertificateAmino;
    fromAminoMsg(object: MsgDeleteAccountCertificateAminoMsg): MsgDeleteAccountCertificate;
    fromProtoMsg(message: MsgDeleteAccountCertificateProtoMsg): MsgDeleteAccountCertificate;
    toProto(message: MsgDeleteAccountCertificate): Uint8Array;
    toProtoMsg(message: MsgDeleteAccountCertificate): MsgDeleteAccountCertificateProtoMsg;
};
export declare const MsgDeleteAccountCertificateResponse: {
    typeUrl: string;
    encode(_: MsgDeleteAccountCertificateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteAccountCertificateResponse;
    fromPartial(_: Partial<MsgDeleteAccountCertificateResponse>): MsgDeleteAccountCertificateResponse;
    fromAmino(_: MsgDeleteAccountCertificateResponseAmino): MsgDeleteAccountCertificateResponse;
    toAmino(_: MsgDeleteAccountCertificateResponse): MsgDeleteAccountCertificateResponseAmino;
    fromAminoMsg(object: MsgDeleteAccountCertificateResponseAminoMsg): MsgDeleteAccountCertificateResponse;
    fromProtoMsg(message: MsgDeleteAccountCertificateResponseProtoMsg): MsgDeleteAccountCertificateResponse;
    toProto(message: MsgDeleteAccountCertificateResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteAccountCertificateResponse): MsgDeleteAccountCertificateResponseProtoMsg;
};
export declare const MsgDeleteAccount: {
    typeUrl: string;
    encode(message: MsgDeleteAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteAccount;
    fromPartial(object: Partial<MsgDeleteAccount>): MsgDeleteAccount;
    fromAmino(object: MsgDeleteAccountAmino): MsgDeleteAccount;
    toAmino(message: MsgDeleteAccount): MsgDeleteAccountAmino;
    fromAminoMsg(object: MsgDeleteAccountAminoMsg): MsgDeleteAccount;
    fromProtoMsg(message: MsgDeleteAccountProtoMsg): MsgDeleteAccount;
    toProto(message: MsgDeleteAccount): Uint8Array;
    toProtoMsg(message: MsgDeleteAccount): MsgDeleteAccountProtoMsg;
};
export declare const MsgDeleteAccountResponse: {
    typeUrl: string;
    encode(_: MsgDeleteAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteAccountResponse;
    fromPartial(_: Partial<MsgDeleteAccountResponse>): MsgDeleteAccountResponse;
    fromAmino(_: MsgDeleteAccountResponseAmino): MsgDeleteAccountResponse;
    toAmino(_: MsgDeleteAccountResponse): MsgDeleteAccountResponseAmino;
    fromAminoMsg(object: MsgDeleteAccountResponseAminoMsg): MsgDeleteAccountResponse;
    fromProtoMsg(message: MsgDeleteAccountResponseProtoMsg): MsgDeleteAccountResponse;
    toProto(message: MsgDeleteAccountResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteAccountResponse): MsgDeleteAccountResponseProtoMsg;
};
export declare const MsgDeleteDomain: {
    typeUrl: string;
    encode(message: MsgDeleteDomain, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteDomain;
    fromPartial(object: Partial<MsgDeleteDomain>): MsgDeleteDomain;
    fromAmino(object: MsgDeleteDomainAmino): MsgDeleteDomain;
    toAmino(message: MsgDeleteDomain): MsgDeleteDomainAmino;
    fromAminoMsg(object: MsgDeleteDomainAminoMsg): MsgDeleteDomain;
    fromProtoMsg(message: MsgDeleteDomainProtoMsg): MsgDeleteDomain;
    toProto(message: MsgDeleteDomain): Uint8Array;
    toProtoMsg(message: MsgDeleteDomain): MsgDeleteDomainProtoMsg;
};
export declare const MsgDeleteDomainResponse: {
    typeUrl: string;
    encode(_: MsgDeleteDomainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteDomainResponse;
    fromPartial(_: Partial<MsgDeleteDomainResponse>): MsgDeleteDomainResponse;
    fromAmino(_: MsgDeleteDomainResponseAmino): MsgDeleteDomainResponse;
    toAmino(_: MsgDeleteDomainResponse): MsgDeleteDomainResponseAmino;
    fromAminoMsg(object: MsgDeleteDomainResponseAminoMsg): MsgDeleteDomainResponse;
    fromProtoMsg(message: MsgDeleteDomainResponseProtoMsg): MsgDeleteDomainResponse;
    toProto(message: MsgDeleteDomainResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteDomainResponse): MsgDeleteDomainResponseProtoMsg;
};
export declare const MsgRegisterAccount: {
    typeUrl: string;
    encode(message: MsgRegisterAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterAccount;
    fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount;
    fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount;
    toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino;
    fromAminoMsg(object: MsgRegisterAccountAminoMsg): MsgRegisterAccount;
    fromProtoMsg(message: MsgRegisterAccountProtoMsg): MsgRegisterAccount;
    toProto(message: MsgRegisterAccount): Uint8Array;
    toProtoMsg(message: MsgRegisterAccount): MsgRegisterAccountProtoMsg;
};
export declare const MsgRegisterAccountResponse: {
    typeUrl: string;
    encode(_: MsgRegisterAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterAccountResponse;
    fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
    fromAmino(_: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse;
    toAmino(_: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino;
    fromAminoMsg(object: MsgRegisterAccountResponseAminoMsg): MsgRegisterAccountResponse;
    fromProtoMsg(message: MsgRegisterAccountResponseProtoMsg): MsgRegisterAccountResponse;
    toProto(message: MsgRegisterAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseProtoMsg;
};
export declare const MsgRegisterDomain: {
    typeUrl: string;
    encode(message: MsgRegisterDomain, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterDomain;
    fromPartial(object: Partial<MsgRegisterDomain>): MsgRegisterDomain;
    fromAmino(object: MsgRegisterDomainAmino): MsgRegisterDomain;
    toAmino(message: MsgRegisterDomain): MsgRegisterDomainAmino;
    fromAminoMsg(object: MsgRegisterDomainAminoMsg): MsgRegisterDomain;
    fromProtoMsg(message: MsgRegisterDomainProtoMsg): MsgRegisterDomain;
    toProto(message: MsgRegisterDomain): Uint8Array;
    toProtoMsg(message: MsgRegisterDomain): MsgRegisterDomainProtoMsg;
};
export declare const MsgRegisterDomainResponse: {
    typeUrl: string;
    encode(_: MsgRegisterDomainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterDomainResponse;
    fromPartial(_: Partial<MsgRegisterDomainResponse>): MsgRegisterDomainResponse;
    fromAmino(_: MsgRegisterDomainResponseAmino): MsgRegisterDomainResponse;
    toAmino(_: MsgRegisterDomainResponse): MsgRegisterDomainResponseAmino;
    fromAminoMsg(object: MsgRegisterDomainResponseAminoMsg): MsgRegisterDomainResponse;
    fromProtoMsg(message: MsgRegisterDomainResponseProtoMsg): MsgRegisterDomainResponse;
    toProto(message: MsgRegisterDomainResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterDomainResponse): MsgRegisterDomainResponseProtoMsg;
};
export declare const MsgRenewAccount: {
    typeUrl: string;
    encode(message: MsgRenewAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRenewAccount;
    fromPartial(object: Partial<MsgRenewAccount>): MsgRenewAccount;
    fromAmino(object: MsgRenewAccountAmino): MsgRenewAccount;
    toAmino(message: MsgRenewAccount): MsgRenewAccountAmino;
    fromAminoMsg(object: MsgRenewAccountAminoMsg): MsgRenewAccount;
    fromProtoMsg(message: MsgRenewAccountProtoMsg): MsgRenewAccount;
    toProto(message: MsgRenewAccount): Uint8Array;
    toProtoMsg(message: MsgRenewAccount): MsgRenewAccountProtoMsg;
};
export declare const MsgRenewAccountResponse: {
    typeUrl: string;
    encode(_: MsgRenewAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRenewAccountResponse;
    fromPartial(_: Partial<MsgRenewAccountResponse>): MsgRenewAccountResponse;
    fromAmino(_: MsgRenewAccountResponseAmino): MsgRenewAccountResponse;
    toAmino(_: MsgRenewAccountResponse): MsgRenewAccountResponseAmino;
    fromAminoMsg(object: MsgRenewAccountResponseAminoMsg): MsgRenewAccountResponse;
    fromProtoMsg(message: MsgRenewAccountResponseProtoMsg): MsgRenewAccountResponse;
    toProto(message: MsgRenewAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRenewAccountResponse): MsgRenewAccountResponseProtoMsg;
};
export declare const MsgRenewDomain: {
    typeUrl: string;
    encode(message: MsgRenewDomain, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRenewDomain;
    fromPartial(object: Partial<MsgRenewDomain>): MsgRenewDomain;
    fromAmino(object: MsgRenewDomainAmino): MsgRenewDomain;
    toAmino(message: MsgRenewDomain): MsgRenewDomainAmino;
    fromAminoMsg(object: MsgRenewDomainAminoMsg): MsgRenewDomain;
    fromProtoMsg(message: MsgRenewDomainProtoMsg): MsgRenewDomain;
    toProto(message: MsgRenewDomain): Uint8Array;
    toProtoMsg(message: MsgRenewDomain): MsgRenewDomainProtoMsg;
};
export declare const MsgRenewDomainResponse: {
    typeUrl: string;
    encode(_: MsgRenewDomainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRenewDomainResponse;
    fromPartial(_: Partial<MsgRenewDomainResponse>): MsgRenewDomainResponse;
    fromAmino(_: MsgRenewDomainResponseAmino): MsgRenewDomainResponse;
    toAmino(_: MsgRenewDomainResponse): MsgRenewDomainResponseAmino;
    fromAminoMsg(object: MsgRenewDomainResponseAminoMsg): MsgRenewDomainResponse;
    fromProtoMsg(message: MsgRenewDomainResponseProtoMsg): MsgRenewDomainResponse;
    toProto(message: MsgRenewDomainResponse): Uint8Array;
    toProtoMsg(message: MsgRenewDomainResponse): MsgRenewDomainResponseProtoMsg;
};
export declare const MsgReplaceAccountResources: {
    typeUrl: string;
    encode(message: MsgReplaceAccountResources, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgReplaceAccountResources;
    fromPartial(object: Partial<MsgReplaceAccountResources>): MsgReplaceAccountResources;
    fromAmino(object: MsgReplaceAccountResourcesAmino): MsgReplaceAccountResources;
    toAmino(message: MsgReplaceAccountResources): MsgReplaceAccountResourcesAmino;
    fromAminoMsg(object: MsgReplaceAccountResourcesAminoMsg): MsgReplaceAccountResources;
    fromProtoMsg(message: MsgReplaceAccountResourcesProtoMsg): MsgReplaceAccountResources;
    toProto(message: MsgReplaceAccountResources): Uint8Array;
    toProtoMsg(message: MsgReplaceAccountResources): MsgReplaceAccountResourcesProtoMsg;
};
export declare const MsgReplaceAccountResourcesResponse: {
    typeUrl: string;
    encode(_: MsgReplaceAccountResourcesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgReplaceAccountResourcesResponse;
    fromPartial(_: Partial<MsgReplaceAccountResourcesResponse>): MsgReplaceAccountResourcesResponse;
    fromAmino(_: MsgReplaceAccountResourcesResponseAmino): MsgReplaceAccountResourcesResponse;
    toAmino(_: MsgReplaceAccountResourcesResponse): MsgReplaceAccountResourcesResponseAmino;
    fromAminoMsg(object: MsgReplaceAccountResourcesResponseAminoMsg): MsgReplaceAccountResourcesResponse;
    fromProtoMsg(message: MsgReplaceAccountResourcesResponseProtoMsg): MsgReplaceAccountResourcesResponse;
    toProto(message: MsgReplaceAccountResourcesResponse): Uint8Array;
    toProtoMsg(message: MsgReplaceAccountResourcesResponse): MsgReplaceAccountResourcesResponseProtoMsg;
};
export declare const MsgReplaceAccountMetadata: {
    typeUrl: string;
    encode(message: MsgReplaceAccountMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgReplaceAccountMetadata;
    fromPartial(object: Partial<MsgReplaceAccountMetadata>): MsgReplaceAccountMetadata;
    fromAmino(object: MsgReplaceAccountMetadataAmino): MsgReplaceAccountMetadata;
    toAmino(message: MsgReplaceAccountMetadata): MsgReplaceAccountMetadataAmino;
    fromAminoMsg(object: MsgReplaceAccountMetadataAminoMsg): MsgReplaceAccountMetadata;
    fromProtoMsg(message: MsgReplaceAccountMetadataProtoMsg): MsgReplaceAccountMetadata;
    toProto(message: MsgReplaceAccountMetadata): Uint8Array;
    toProtoMsg(message: MsgReplaceAccountMetadata): MsgReplaceAccountMetadataProtoMsg;
};
export declare const MsgReplaceAccountMetadataResponse: {
    typeUrl: string;
    encode(_: MsgReplaceAccountMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgReplaceAccountMetadataResponse;
    fromPartial(_: Partial<MsgReplaceAccountMetadataResponse>): MsgReplaceAccountMetadataResponse;
    fromAmino(_: MsgReplaceAccountMetadataResponseAmino): MsgReplaceAccountMetadataResponse;
    toAmino(_: MsgReplaceAccountMetadataResponse): MsgReplaceAccountMetadataResponseAmino;
    fromAminoMsg(object: MsgReplaceAccountMetadataResponseAminoMsg): MsgReplaceAccountMetadataResponse;
    fromProtoMsg(message: MsgReplaceAccountMetadataResponseProtoMsg): MsgReplaceAccountMetadataResponse;
    toProto(message: MsgReplaceAccountMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgReplaceAccountMetadataResponse): MsgReplaceAccountMetadataResponseProtoMsg;
};
export declare const MsgTransferAccount: {
    typeUrl: string;
    encode(message: MsgTransferAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferAccount;
    fromPartial(object: Partial<MsgTransferAccount>): MsgTransferAccount;
    fromAmino(object: MsgTransferAccountAmino): MsgTransferAccount;
    toAmino(message: MsgTransferAccount): MsgTransferAccountAmino;
    fromAminoMsg(object: MsgTransferAccountAminoMsg): MsgTransferAccount;
    fromProtoMsg(message: MsgTransferAccountProtoMsg): MsgTransferAccount;
    toProto(message: MsgTransferAccount): Uint8Array;
    toProtoMsg(message: MsgTransferAccount): MsgTransferAccountProtoMsg;
};
export declare const MsgTransferAccountResponse: {
    typeUrl: string;
    encode(_: MsgTransferAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferAccountResponse;
    fromPartial(_: Partial<MsgTransferAccountResponse>): MsgTransferAccountResponse;
    fromAmino(_: MsgTransferAccountResponseAmino): MsgTransferAccountResponse;
    toAmino(_: MsgTransferAccountResponse): MsgTransferAccountResponseAmino;
    fromAminoMsg(object: MsgTransferAccountResponseAminoMsg): MsgTransferAccountResponse;
    fromProtoMsg(message: MsgTransferAccountResponseProtoMsg): MsgTransferAccountResponse;
    toProto(message: MsgTransferAccountResponse): Uint8Array;
    toProtoMsg(message: MsgTransferAccountResponse): MsgTransferAccountResponseProtoMsg;
};
export declare const MsgTransferDomain: {
    typeUrl: string;
    encode(message: MsgTransferDomain, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferDomain;
    fromPartial(object: Partial<MsgTransferDomain>): MsgTransferDomain;
    fromAmino(object: MsgTransferDomainAmino): MsgTransferDomain;
    toAmino(message: MsgTransferDomain): MsgTransferDomainAmino;
    fromAminoMsg(object: MsgTransferDomainAminoMsg): MsgTransferDomain;
    fromProtoMsg(message: MsgTransferDomainProtoMsg): MsgTransferDomain;
    toProto(message: MsgTransferDomain): Uint8Array;
    toProtoMsg(message: MsgTransferDomain): MsgTransferDomainProtoMsg;
};
export declare const MsgTransferDomainResponse: {
    typeUrl: string;
    encode(_: MsgTransferDomainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferDomainResponse;
    fromPartial(_: Partial<MsgTransferDomainResponse>): MsgTransferDomainResponse;
    fromAmino(_: MsgTransferDomainResponseAmino): MsgTransferDomainResponse;
    toAmino(_: MsgTransferDomainResponse): MsgTransferDomainResponseAmino;
    fromAminoMsg(object: MsgTransferDomainResponseAminoMsg): MsgTransferDomainResponse;
    fromProtoMsg(message: MsgTransferDomainResponseProtoMsg): MsgTransferDomainResponse;
    toProto(message: MsgTransferDomainResponse): Uint8Array;
    toProtoMsg(message: MsgTransferDomainResponse): MsgTransferDomainResponseProtoMsg;
};
